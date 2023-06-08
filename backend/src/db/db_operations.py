#!/usr/bin/env python
"""This file include all the database operations
"""
from models import db

def save():
    """Commit changes to the database.
    """
    try:
        db.session.commit()
    except Exception:
        db.session.rollback()
    finally:
        db.session.close()
        
def add(obj):
    """Add a new object to the session. However it doesn't commit it to the database.
    
    Args: obj (_type_): the object to be added to the session
    """
    db.session.add(obj)

def delete(obj=None):
    """Delete a row from the database.
    """
    if obj is not None:
        db.session.delete(obj)
        save()
    