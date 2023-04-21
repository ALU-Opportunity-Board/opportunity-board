

from . import db
from datetime import datetime
# create user table
class User(db.Model):
    """ The User Model """
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    email = db.Column(db.String(50), nullable=False, unique=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    role = db.Column(db.String(50))
    shared_opportunities = db.relationship('Opportunity', backref='user', lazy=True)
    
    def set_role(self, role):
        self.role = role