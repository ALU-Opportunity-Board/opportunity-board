from datetime import datetime
import uuid
from . import db
# create user table
class Opportunity(db.Model):
    """ Opportunity Model """
    __tablename__ = "opportunities"

    id = db.Column(db.String(200), primary_key=True, default=str(uuid.uuid4()))
    # set a foreign key with user table
    user_id = db.Column(db.String(200), db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    company = db.Column(db.String(100), nullable=False)
    opportunity_type = db.Column(db.String(100), nullable=False)
    field = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    updated_at = db.Column(db.DateTime, default=datetime.utcnow())
    deadline = db.Column(db.DateTime, nullable=False)
    link = db.Column(db.String(400), nullable=False)
    
    
    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "company": self.company,
            "opportunity_type": self.opportunity_type,
            "field": self.field,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "deadline": self.deadline,
            "link": self.link
        }