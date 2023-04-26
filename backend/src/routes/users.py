#!/usr/bin/env python3
"""Routes related to user data."""
import uuid
from routes import login_required

from flask import jsonify, session, abort, redirect, request, Blueprint, url_for
from models import User, Opportunity
from db import db_operations
from models import db
USER_BLUEPRINT = Blueprint("user", __name__)


@USER_BLUEPRINT.route("/user", strict_slashes=False)
@login_required
def get_user():
    """Get the current user data from database.
    """
    # get the current user data from jwt
    current_user_email = session.get("current_user_email")
    current_user = db.session.query(User).filter(User.email == current_user_email).first()
    
    # get all the opportunities shared by the current user
    # and add them to the dict value
    opportunities = current_user.shared_opportunities
    current_user = current_user.to_dict()
    opportunities = [opportunity.to_dict() for opportunity in opportunities]
    print(current_user)
    current_user["shared_opportunities"] = opportunities
    return jsonify({"user": current_user})


@USER_BLUEPRINT.route('/user/opportunities', methods=['GET'])
@login_required
def get_user_opportunities():
    """Get all opportunities posted by the current user

    Args:
        user_id (_type_): _description_

    Returns:
        _type_: _description_
    """
    current_user_email = session.get("current_user_email")
    current_user = db.session.query(User).filter(User.email == current_user_email).first()
    opportunities = current_user.shared_opportunities
    return jsonify([opportunity.to_dict() for opportunity in opportunities])


# @USER_BLUEPRINT.route("/user/opportunities", strict_slashes=False)
# @login_required
# def get_user():
#     """Get the user data from the database.
#     """
#     if not request.is_json:
#         abort(400, description="Not a JSON")
#     data = request.get_json()
#     if 'email' not in data:
#         abort(400, description="Missing name")
#     state = State(**data)
#     state.save()
#     return jsonify(state.to_dict()), 201

 
    
    

@USER_BLUEPRINT.route("/user-data")
@login_required
def get_user_data():
    """Return all the user data returned by Google
    ---
    responses:
        200:
            description: Return all the user data returned by Google
            schema:
                type: object
                example:
                            {
                                "at_hash": "gy-uRqy-ckp1xtCVqalMyA",
                                "aud": "5713982095317-p6vv1kttnbjr60u0rs7i8nmkurlft5mj.apps.googleusercontent.com",
                                "azp": "5713982095317-p6vv1kttdgjr60u0rs7i8nmkurlft5mj.apps.googleusercontent.com",
                                "email": "a.kebede@alustudent.com",
                                "email_verified": true,
                                "exp": 1681768052,
                                "family_name": "Kebede",
                                "given_name": "Abebe",
                                "hd": "alustudent.com",
                                "iat": 1681464452,
                                "iss": "https://accounts.google.com",
                                "locale": "en",
                                "name": "Abebe Kebede",
                                "picture": "https://lh3.googleusercontent.com/a/AGNmyxayr4UVXSZBNsx8xfeg1NCZxX24vJOASE4AF2gr=s96-c",
                                "sub": "10505877750333961075"
                                }
                            
    """
    return jsonify(session["user_data"])