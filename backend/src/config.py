from dotenv import load_dotenv
import os

load_dotenv()


# Databse configs
DB_NAME = os.getenv("DB_NAME", 'opportunity_board')
# DB_TEST_NAME = os.getenv("DB_TEST_NAME", 'opportunity_board_db_test')
DB_USER = os.getenv("DB_USER", 'postgres')
DB_PASSWORD = os.getenv("DB_PASSWORD", '')
DB_HOST = os.getenv("DB_HOST", 'localhost')
DB_PORT = os.getenv("DB_PORT", 5432)

# DB_URI = f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
# se
DB_URI = f"sqlite:///data.db"
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
