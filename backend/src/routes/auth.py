""" Defines routes for authentication """

""" How to Use it """
"""
apply the @login_is_required for users just like applied below
    AUTH_BLUEPRINT.route("/route")
    @login_is_required
    def protected_area():
"""

""" when dealing with OAuth 2.0 app secret is necessary"""

import datetime
import os
import pathlib
import requests
import config
from flask import jsonify, make_response, session, abort, redirect, request, Blueprint, url_for
from google.oauth2 import id_token
from google_auth_oauthlib.flow import Flow
from pip._vendor import cachecontrol
import google.auth.transport.requests
from datetime import datetime, timedelta
from db import db_operations
from models import User, db
# from routes import login_is_required


AUTH_BLUEPRINT = Blueprint("auth", __name__)
GOOGLE_CLIENT_ID = config.GOOGLE_CLIENT_ID
"""this is to set environment to https because OAuth 2.0 only supports https environments"""
os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

"""setting path to the parent directory where the .json file from google is kept"""
client_secrets_file = os.path.join(pathlib.Path(
    __file__).parent, "../client_secret.json")

""" 
    Flow is OAuth 2.0 class that stores 
    all users authorization information
"""
flow = Flow.from_client_secrets_file(
    client_secrets_file=client_secrets_file,
    scopes=[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
        "openid"
    ],
    # the redirect URI route to after authorization
    redirect_uri="http://127.0.0.1:5000/callback"
)


def login_is_required(function):
    """ A decorator to check if a user is authorized or not

    Args:
        function (_type_): the function to be decorated
    """
    def wrapper(*args, **kwargs):
        """ The wrapper function

        Returns:
            _type_: the function that is decorated
        """
        if "user" not in session:
            return abort(401)
        else:
            return function()
    wrapper.__name__ = function.__name__
    return wrapper

def add_new_user(id_info):
    """ Add a new user to the session database.

    Args:
        id_info (_type_): User Id information returned from google
    """
     # check if user is already in the database
    # user = session.query(User).filter_by(email=id_info.get("email")).first()
    user = db.session.query(User).filter_by(email=id_info.get("email")).first()
    # print("user retrieved: ", user)
    print("============I have reached here and here is user data i get=================")
    print(user)
    if user is None:
        # get email from google account
        user_email = id_info.get("email")
        if user_email.endswith("@alustudent.com"):
            role = "student"
        elif user_email.endswith("@alueducation.com"):
            role = "staff"
        
        # create a new user to store it in the database
        new_user = {
        "first_name": id_info.get("given_name"),
        "last_name": id_info.get("family_name"),
        "email": id_info.get("email"),
        "picture": id_info.get("picture"),
        "role": role
        }
        
        
        # create a new user object
        first_time_user = User(first_name=new_user.get("first_name"),
                               last_name=new_user.get("last_name"),
                               email=new_user.get("email"),
                               picture=new_user.get("picture"),
                               role=new_user.get("role"))
        
        # Add the new user to the database
        session["user"] = new_user
        db_operations.add(first_time_user)
        db_operations.save()
    else:
        # get user from the database based on cookie settings
        print("here is the user email found from the cookie settings")
        
        
        
        # print("========cookie email=========", google_user_email)
        # user = db.session.query(User).filter_by(email=google_user_email).first()
        # print("User in the else of add_user func: " , user)
        
        existing_user = {
         "first_name": user.first_name,
        "last_name": user.last_name,
        "email": user.email,
        "picture": user.picture,
        "role": user.role
        }
        session['user'] = existing_user
        

@AUTH_BLUEPRINT.route("/")
def index():
    """ 
        This is to check if the user is logged in or not
    """
    # if user in session return logged in user
    
    # if "user" in session or "google_user" in request.cookies:
    #     return "logged in"
    
    if "user" in session:
        return jsonify(session["user"]), 200
    elif "google_user" in request.cookies:
        # get "google_user" from cookie
        google_user_email = request.cookies["google_user"]
        # retrieve google_user data from database based on google_user_email
        try:
            user = db.session.query(User).filter_by(email=google_user_email).first()
            print("user found from db:" , user)
            existing_user = {
                "first_name": user.first_name,
                "last_name": user.last_name,
                "email": user.email,
                "picture": user.picture,
                "role": user.role
                }
            session['user'] = existing_user
            return jsonify(session["user"]), 200
            
        except Exception:
            abort(500)    
    else:
        return "logged out"


""""
    Asking the flow class for the authorization (login) url
"""


@AUTH_BLUEPRINT.route("/login")
def login():
    """ Asking the flow class for the authorization (login) url

    Returns:
        _type_: redirect to the authorization url
    """
    # check if the user is already logged in
    if "user" in session:
        return redirect(url_for("auth.index"))
    elif "google_user" in request.cookies:
        # get "google_user" from cookie
        google_user_email = request.cookies["google_user"]
        # retrieve google_user data from database based on google_user_email
        try:
            user = db.session.query(User).filter_by(email=google_user_email).first()
            print("user found from db:" , user)
            session["user"] = user
            return jsonify(session["user"]), 200
            
        except Exception:
            abort(500)
    authorization_url, state = flow.authorization_url()
    session["state"] = state
    return redirect(authorization_url)


@AUTH_BLUEPRINT.route("/callback")
def callback():
    """ Callback function to get the authorization code.
    It is called after the user is authenticated

    Returns:
        _type_: _description_
    """
    flow.fetch_token(authorization_response=request.url)

    if session["state"] != request.args["state"]:
        abort(500)

    credentials = flow.credentials
    request_session = requests.session()
    cached_session = cachecontrol.CacheControl(request_session)
    token_request = google.auth.transport.requests.Request(
        session=cached_session)

    id_info = id_token.verify_oauth2_token(
        id_token=credentials._id_token,
        request=token_request,
        audience=config.GOOGLE_CLIENT_ID
    )

    ''' defining the results to show on the page'''
    # session["google_id"] = id_info.get("sub")
    # session["name"] = id_info.get("name")
    
    '''page to redirect to after authorization'''
    # store the user data in the session which will be return by
    add_new_user(id_info)
    expires = datetime.now() + timedelta(days=30)
    response = make_response(redirect(url_for("auth.index")))
    print("=============SESSION info===================")
    print("session: ",session)
    print("type of session: ", type(session))
    print("===================")
    print("type of session data: ", type(session["user"]))
    print("========================================")
    response.set_cookie("google_user", session["user"]["email"], expires=expires)
    return response


@AUTH_BLUEPRINT.route("/logout")
def logout():
    """ This is to clear the session and log the user out """
    
    # remove data from cookie
    response = make_response(redirect(url_for("auth.index")))
    response.delete_cookie("google_user")
    session.clear()
    return response

@AUTH_BLUEPRINT.route("/user-data")
@login_is_required
def user_data():
    """ return the user out of the session"""
    return jsonify(session["user"])

