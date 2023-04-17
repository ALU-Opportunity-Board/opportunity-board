""" The server that runs that servers the API
"""
from flask import Flask, jsonify
from flask_cors import CORS
import config

from routes.auth import AUTH_BLUEPRINT
import os
from flasgger import Swagger


app = Flask(__name__)
swagger = Swagger(app)
# register the blueprints
app.register_blueprint(AUTH_BLUEPRINT, url_prefix="/")


CORS(app, supports_credentials=True)
app.secret_key = config.SECRET_KEY
# app.config['PERMANENT_SESSION_LIFETIME'] = config.PERMANENT_SESSION_LIFETIME

# 404 error handler
@app.errorhandler(404)
def not_found(error):
    """Returns a JSON-formatted 404 status code response"""
    return jsonify({"error": "Not found"}), 404

@app.errorhandler(500)
def internal_server_error(error):
    """Returns a JSON-formatted 500 status code response"""
    return jsonify({"error": "Internal server error"}), 500


if __name__ == "__main__":
    app.run(host=config.HOST, port=config.PORT, debug=True)
