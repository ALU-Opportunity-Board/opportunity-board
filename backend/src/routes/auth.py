import json
from flask import Flask, Blueprint, jsonify
from flask.wrappers import Response
from flask.globals import request, session
import requests
from werkzeug.exceptions import abort
from werkzeug.utils import redirect
from google.oauth2 import id_token
from google_auth_oauthlib.flow import Flow
import os, pathlib
import google
import config
from routes.register_user import register_user
from routes import login_required

import jwt

AUTH_BLUEPRINT = Blueprint("auth", __name__)

"""this is to set environment to https because OAuth 2.0 only supports https environments"""


"""setting path to the parent directory where the .json file from google is kept"""


AUTH_BLUEPRINT = Blueprint("auth", __name__)
# bypass http
os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"
client_secrets_file = os.path.join(pathlib.Path(
    __file__).parent, "../client_secret.json")
GOOGLE_CLIENT_ID = config.GOOGLE_CLIENT_ID
ALGORITHM = config.ALGORITHM
BACKEND_URL=config.BACKEND_URL
FRONTEND_URL=config.FRONTEND_URL

#database connection
# connect_db()

flow = Flow.from_client_secrets_file(
    client_secrets_file=client_secrets_file,
    scopes=[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
        "openid",
    ],
    redirect_uri=BACKEND_URL+"/callback",
)


# wrapper
# def login_required(function):
#     def wrapper(*args, **kwargs):
#         auth_token = request.headers.get("Authorization")
#         if auth_token is None:
#             return jsonify({"error": "Token not found"}), 401
#         encoded_jwt = auth_token.split("Bearer ")[1]
#         if encoded_jwt is None:
#             return abort(401)
#         else:
#             return function()
#     return wrapper


def generate_jwt(payload):
    encoded_jwt = jwt.encode(payload, config.APP_SECRET, algorithm=ALGORITHM)
    return encoded_jwt


@AUTH_BLUEPRINT.route("/callback")
def callback():
    flow.fetch_token(authorization_response=request.url)
    credentials = flow.credentials
    request_session = requests.session()
    token_request = google.auth.transport.requests.Request(session=request_session)

    id_info = id_token.verify_oauth2_token(
        id_token=credentials._id_token, request=token_request,
        audience=GOOGLE_CLIENT_ID
    )
    session["google_id"] = id_info.get("sub")
    
    # removing the specific audience, as it is throwing error
    del id_info['aud']
    jwt_token=generate_jwt(id_info)
    
    # register user to the database
    register_user(id_info)
    
    
    return redirect(f"{FRONTEND_URL}?jwt={jwt_token}")
    # return Response(
    #     response=json.dumps({'JWT':jwt_token}),
    #     status=200,
    #     mimetype='application/json'
    # )


@AUTH_BLUEPRINT.route("/google/login")
def login():
    authorization_url, state = flow.authorization_url()
    # Store the state so the callback can verify the auth server response.
    session["state"] = state
    return jsonify({'auth_url':authorization_url}), 200


@AUTH_BLUEPRINT.route("/logout")
def logout():
    #clear the local storage from frontend
    session.clear()
    return jsonify({"message":"Logged out"}), 202
    


@AUTH_BLUEPRINT.route("/home")
@login_required
def home_page_user():
    encoded_jwt = request.headers.get("Authorization").split("Bearer ")[1]
    try:
        decoded_jwt=jwt.decode(encoded_jwt, config.APP_SECRET, algorithms=[ALGORITHM,])
        print("===================== decoded jwt ======================")
        print(decoded_jwt)
    except Exception as e:
        return Response(
            response=json.dumps({"message":"Decoding JWT Failed", "exception":e.args}),
            status=500,
            mimetype='application/json'
        )
    return Response(
        response=json.dumps(decoded_jwt),
        status=200,
        mimetype='application/json'
    )