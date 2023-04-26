#!/usr/bin/env python3
"""Routes related to user data."""
from routes import login_is_required
from models import db,  Opportunity
from flask import jsonify, session, abort, redirect, request, Blueprint, url_for
OPPORTUNITY_BLUEPRINT = Blueprint("opportunity", __name__)


@OPPORTUNITY_BLUEPRINT.route("/opportunities", strict_slashes=False)
# @login_is_required
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
def get_opportunity(opportunity_id):
    """Get a specific opportunity from the database.
    """
    opportunity = db.session.query(Opportunity).filter(Opportunity.id == opportunity_id).first()
    if opportunity is None:
        return abort(404)
    return jsonify(opportunity.to_dict()), 200


# @OPPORTUNITY_BLUEPRINT.route("/opportunities/<opportunity_id>", strict_slashes=False, methods=["DELETE"])
# # @login_is_required
# def get_opportunity(opportunity_id):
#     """Get a specific opportunity from the database.
#     """
#     opportunity = db.session.query(Opportunity).filter(Opportunity.id == opportunity_id).first()
#     if opportunity is None:
#         return abort(404)
#     db.session.delete(opportunity)
#     db.session.commit()
#     return jsonify({}), 200
