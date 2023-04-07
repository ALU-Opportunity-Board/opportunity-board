from dotenv import load_dotenv
import os

load_dotenv()


# DB_URI = f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

# # Application configs
SECRET_KEY = os.getenv("SECRET_KEY")
# # DEBUG = os.getenv("ENVIRONEMENT") == "DEV"
# APPLICATION_ROOT = os.getenv("API_APPLICATION_ROOT", "/api")
HOST = os.getenv("APPLICATION_HOST")
PORT = int(os.getenv("APPLICATION_PORT"))

# #  google configs
GOOGLE_CLIENT_ID = os.getenv('GOOGLE_CLIENT_ID')
APP_SECRET = os.getenv('SECRET_KEY')
PERMANENT_SESSION_LIFETIME = os.getenv('PERMANENT_SESSION_LIFETIME')
