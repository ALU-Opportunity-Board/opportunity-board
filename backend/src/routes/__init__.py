from flask import abort, request, jsonify, session
import jwt
from config import APP_SECRET, ALGORITHM
def login_required(function):
    def wrapper(*args, **kwargs):
        auth_token = request.headers.get("Authorization")
        if auth_token is None:
            return jsonify({"error": "Token not found"}), 401
        encoded_jwt = auth_token.split("Bearer ")[1]
        if encoded_jwt is None:
            return abort(401)
        else:
            # add the current user email to session
            if 'current_user_email' not in session:
                # get email from jwt token
                decoded_jwt = jwt.decode(encoded_jwt, APP_SECRET, algorithms=[ALGORITHM,])
                session['current_user_email'] = decoded_jwt.get('email')
            return function()
    wrapper.__name__ = function.__name__
    return wrapper

# def login_is_required(function):
#     """ A decorator to check if a user is authorized or not

#     Args:
#         function (_type_): the function to be decorated
#     """
#     def wrapper(*args, **kwargs):
#         """ The wrapper function

#         Returns:
#             _type_: the function that is decorated
#         """
#         if "google_id" not in session:
#             return abort(401)
#         else:
#             return function()
#     wrapper.__name__ = function.__name__
#     return wrapper