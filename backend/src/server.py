""" The server that runs that servers the API
"""
from flask import Flask, jsonify
from flask_cors import CORS
from models.opportunity import Opportunity
from models.user import User
import config
from models import db
from flask_migrate import Migrate
from routes.auth import AUTH_BLUEPRINT
from routes.users import USER_BLUEPRINT
from routes.opportunities import OPPORTUNITY_BLUEPRINT
from flasgger import Swagger

server = Flask(__name__)
swagger = Swagger(server)

# register the blueprints


server.config["SQLALCHEMY_DATABASE_URI"] = config.DB_URI
server.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
CORS(server, supports_credentials=True)
server.secret_key = config.SECRET_KEY
db.init_app(server)
db.app = server

migrate = Migrate(server, db)

# app.config['PERMANENT_SESSION_LIFETIME'] = 20000

server.register_blueprint(AUTH_BLUEPRINT, url_prefix="/")
server.register_blueprint(USER_BLUEPRINT, url_prefix="/")
server.register_blueprint(OPPORTUNITY_BLUEPRINT, url_prefix="/")

# api status checker
@server.route("/status")
def status():
    """Returns the status of the API"""
    return jsonify({"status": "OK"})

...

# add after request handler
@server.after_request
def after_request(response):
    """Sets the Access-Control-Allow"""
    response.headers.add("Access-Control-Allow-Headers",
                         "Content-Type,Authorization,true")
    response.headers.add("Access-Control-Allow-Methods",
                         "GET,PUT,POST,DELETE,OPTIONS")
    return response

# 404 error handler


@server.errorhandler(404)
def not_found(error):
    """Returns a JSON-formatted 404 status code response"""
    return jsonify({"error": "Not found"}), 404


@server.errorhandler(401)
def unauthorized(error):
    """Returns a JSON-formatted 401 status code response"""
    return jsonify({"error": "Unauthorized"}), 401


@server.errorhandler(500)
def internal_server_error(error):
    """Returns a JSON-formatted 500 status code response"""
    return jsonify({"error": "Internal server error"}), 500


if __name__ == "__main__":

    server.run(host=config.HOST, port=config.PORT, debug=True)
