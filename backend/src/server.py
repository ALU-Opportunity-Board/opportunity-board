""" The server that runs that servers the API
"""
from flask import Flask
from flask_cors import CORS
import config
from routes.auth import AUTH_BLUEPRINT
import os


app = Flask(__name__)
# register the blueprints
app.register_blueprint(AUTH_BLUEPRINT, url_prefix="/")


CORS(app, supports_credentials=True)
app.secret_key = config.SECRET_KEY
# app.config['PERMANENT_SESSION_LIFETIME'] = config.PERMANENT_SESSION_LIFETIME
# # value in seconds


if __name__ == "__main__":
    app.run(host=config.HOST, port=config.PORT, debug=True)
