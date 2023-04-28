#!/usr/bin/env python3
"""Routes related to user data."""
import uuid
from models.user import User
from routes import login_required
from models import db,  Opportunity
from flask import jsonify, session, abort, request, Blueprint
from db import db_operations
OPPORTUNITY_BLUEPRINT = Blueprint("opportunity", __name__)


@OPPORTUNITY_BLUEPRINT.route("/opportunities", strict_slashes=False)
@login_required
def get_all_opportunities():
    """Get all the opportunities from the database.
    """
    print(db.session.query(Opportunity).all())
    all_opportunities = []
    for opportunity in db.session.query(Opportunity).all():
        all_opportunities.append(opportunity)
        
    # sort all_opportunities by deadline (from most recent to least recent)
    all_opportunities.sort(key=lambda x: x.deadline, reverse=True)
    print(all_opportunities)
    opportunities_dict = [opportunity.to_dict() for opportunity in all_opportunities]
    return jsonify(opportunities_dict), 200


@OPPORTUNITY_BLUEPRINT.route("/opportunity/<opportunity_id>", strict_slashes=False, methods=["DELETE"])
@login_required
def delete_opportunity(opportunity_id):
    """Delete opportunity from the database
    """
    opportunity = db.session.query(Opportunity).filter(Opportunity.id == opportunity_id).first()
    if opportunity is None:
        return abort(404)
    # get current user
    # current_user_email = session.get("current_user_email")
    # current_user = db.session.query(User).filter(User.email == current_user_email).first()
    
    # current_user.shared_opportunities.remove(opportunity)
    db.session.delete(opportunity)
    db.session.commit()
    
    return jsonify({}), 200



@OPPORTUNITY_BLUEPRINT.route("/opportunity", strict_slashes=False, methods=["POST"])
@login_required
def add_opportunity():
    """Post opportunity

    Returns: opportunity added to the database
    """
    data = request.get_json()
    # get current user information from jwt
    current_user_email = session.get("current_user_email")
    current_user = db.session.query(User).filter(User.email == current_user_email).first()
    
    opp_id = str(uuid.uuid4())
    opportunity = Opportunity(id=opp_id,title=data['title'], user_id=current_user.id, company=data['company'], opportunity_type=data['opportunity_type'], field=data['field'], deadline=data['deadline'], link=data['link'])
   
    
    db.session.add(opportunity)
    current_user.shared_opportunities.append(opportunity)
    db.session.commit()
    return jsonify(opportunity.to_dict()), 201



@OPPORTUNITY_BLUEPRINT.route("/opportunity/liked", strict_slashes=False, methods=["PATCH"])
@login_required
def change_like_status_of_opportunity():
    """ Change the status of the opportunity to liked
    """
    data = request.get_json()
    if 'id' not in data:
        return {"error": "Missing id"}, 400
    print(type(data['liked']))
    print(data['liked'])
    if 'liked' in data and isinstance(data['liked'], bool):
        opportunity = db.session.query(Opportunity).filter(Opportunity.id == data['id']).first()
        if opportunity is None:
            return abort(404)
        if opportunity.liked != data.get('liked'):
            opportunity.liked = data.get('liked')
            if data.get('liked'):
                opportunity.likes += 1
            elif data.get('liked') is False:
                opportunity.likes -= 1
        
        db_operations.save()
        
        
    return jsonify({"liked": data.get('liked')}), 201
