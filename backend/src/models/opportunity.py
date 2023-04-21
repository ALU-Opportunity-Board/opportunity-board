import datetime
from . import db
# create user table
class Opportunity(db.Model):
    """ Opportunity Model """
    __tablename__ = "opportunities"

    id = db.Column(db.Integer, primary_key=True)
    # set a foreign key with user table
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    company = db.Column(db.String(100), nullable=False)
    opportunity_type = db.Column(db.String(100), nullable=False)
    field = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
    deadline = db.Column(db.DateTime, nullable=False)
    link = db.Column(db.String(400), nullable=False)