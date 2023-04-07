""" Defines routes for authentication """

""" How to Use it """
"""
apply the @login_is_required for users just like applied below
    AUTH_BLUEPRINT.route("/route")
    @login_is_required
    def protected_area():
"""

""" when dealing with OAuth 2.0 app secret is necessary"""
import os
import pathlib
import requests
import config
from flask import session, abort, redirect, request, Blueprint, url_for
from google.oauth2 import id_token
from google_auth_oauthlib.flow import Flow
from pip._vendor import cachecontrol
import google.auth.transport.requests

AUTH_BLUEPRINT = Blueprint("auth", __name__)
GOOGLE_CLIENT_ID = config.GOOGLE_CLIENT_ID
"""this is to set environment to https because OAuth 2.0 only supports https environments"""
os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

"""setting path to the parent directory where the .json file from google is kept"""
client_secrets_file = os.path.join(pathlib.Path(
    __file__).parent, "client_secret.json")

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
        if "google_id" not in session:
            return abort(401)
        else:
            return function()
    return wrapper


@AUTH_BLUEPRINT.route("/")
def index():
    """ 
        This is to check if the user is logged in or not
    """
    if "google_id" in session:
        return "logged in"
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
    if "google_id" in session:
        return redirect(url_for("auth.index"))
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
    session["google_id"] = id_info.get("sub")
    session["name"] = id_info.get("name")
    '''page to redirect to after authorization'''
    return id_info

@AUTH_BLUEPRINT.route("/logout")
def logout():
    """ This is to clear the session and log the user out """
    session.clear()
    return redirect(url_for("auth.index"))










