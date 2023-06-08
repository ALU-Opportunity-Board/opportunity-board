

from models import User, db
from db import db_operations

def register_user(id_info):
    """ Add a new user to the session database.

    Args:
        id_info (_type_): User Id information returned from google
    """
     # check if user is already in the database
    # user = session.query(User).filter_by(email=id_info.get("email")).first()
    user = db.session.query(User).filter_by(email=id_info.get("email")).first()
    
    if user is not None:
        print("User already in the database, here is users email")
        print(user.email)
        
    elif user is None:
        # get email from google account
        user_email = id_info.get("email")
        if user_email.endswith("@alustudent.com"):
            role = "student"
        elif user_email.endswith("@alueducation.com"):
            role = "staff"
        
        # create a new user to store it in the database
        new_user = {
        "first_name": id_info.get("given_name"),
        "last_name": id_info.get("family_name"),
        "email": id_info.get("email"),
        "picture": id_info.get("picture"),
        "role": role
        }
        
        
        # create a new user object
        first_time_user = User(first_name=new_user.get("first_name"),
                               last_name=new_user.get("last_name"),
                               email=new_user.get("email"),
                               picture=new_user.get("picture"),
                               role=new_user.get("role"))
        
        # Add the new user to the database
        # session["user"] = new_user
        db_operations.add(first_time_user)
        db_operations.save()
    # else:
    #     # get user from the database based on cookie settings
    #     print("here is the user email found from the cookie settings")
        
        
        
    #     # print("========cookie email=========", google_user_email)
    #     # user = db.session.query(User).filter_by(email=google_user_email).first()
    #     # print("User in the else of add_user func: " , user)
        
    #     existing_user = {
    #      "first_name": user.first_name,
    #     "last_name": user.last_name,
    #     "email": user.email,
    #     "picture": user.picture,
    #     "role": user.role
    #     }
    #     session['user'] = existing_user
        