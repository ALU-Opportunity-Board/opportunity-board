#!/usr/bin/env python3
"""Routes related to user data."""
import uuid
from models.user import User
from routes import login_required
from models import db,  Opportunity
from flask import jsonify, session, abort, redirect, request, Blueprint, url_for
OPPORTUNITY_BLUEPRINT = Blueprint("opportunity", __name__)


@OPPORTUNITY_BLUEPRINT.route("/opportunities", strict_slashes=False)
@login_required
def get_all_opportunities():
    """Get all the opportunities from the database.
    """
    print(db.session.query(Opportunity).all())
    all_opportunities = []
    for opportunity in db.session.query(Opportunity).all():
        all_opportunities.append(opportunity.to_dict())
    print(all_opportunities)
    return jsonify(all_opportunities), 200



@OPPORTUNITY_BLUEPRINT.route("/opportunities/<int:opportunity_id>", strict_slashes=False)
@login_required
def get_opportunity(opportunity_id):
    """Get a specific opportunity from the database.
    """
    opportunity = db.session.query(Opportunity).filter(Opportunity.id == opportunity_id).first()
    if opportunity is None:
        return abort(404)
    return jsonify(opportunity.to_dict()), 200


@OPPORTUNITY_BLUEPRINT.route("/opportunity/<opportunity_id>", strict_slashes=False, methods=["DELETE"])
@login_required
def delete_opportunity(opportunity_id):
    """Get a specific opportunity from the database.
    """
    opportunity = db.session.query(Opportunity).filter(Opportunity.id == opportunity_id).first()
    if opportunity is None:
        return abort(404)
    db.session.delete(opportunity)
    db.session.commit()
    
    return jsonify({}), 200




@OPPORTUNITY_BLUEPRINT.route("/opportunity", strict_slashes=False, methods=["POST"])
@login_required
def add_opportunity():
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
