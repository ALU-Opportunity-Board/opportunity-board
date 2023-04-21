from flask import abort, session


def login_is_required(function):
    """ A decorator to check if a user is authorized or not

    Args:
        function (_type_): the function to be decorated
    """
    def wrapper(*args, **kwargs):
        """ The wrapper function

        Returns:
            _type_: the function that is decorated
        """
        if "google_id" not in session:
            return abort(401)
        else:
            return function()
    wrapper.__name__ = function.__name__
    return wrapper