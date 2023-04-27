# Opportunity Board - backend
This is the backend of the ALU opportunity board. It is a REST API built with Flask and it uses Postgres as the database.

# Collaboration

Our Pledge
In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

We appreciate your time and effort made to support this project and so we have set out some guidelines to make this community effort worthwhile.

Informations on how best to contribute to this initiative can be found at the [CONTRIBUTING.md](./CONTRIBUTING.md)

# Requirements

```
Python 3.9 or higher
PostgreSQL 13.* or higher - recommended
```

# Setup


## Install requirements

For local development

```
pip install -r requirements.txt
```

## Set environment variables

- Make a **copy of** the `example.env` file, and rename it to `.env`

- Update the values of the variables in the `.env` file to suite your system environment.

## Integrating Google OAuth

### Create client_secret.json

### Note python 3.9.\* is required for google Oauth incorporation

1. visit <a href="https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwj5ouHdnPD0AhXksFYBHbw3CfMQFnoECAkQAQ&url=https%3A%2F%2Fconsole.developers.google.com%2F&usg=AOvVaw39ieEDI7pzBj4NtuzqS57M"> Google CLoud Platform</a>
2. on the sidebar click on the credentials menu
3. To the top below the Navigation bar click on create credentials
4. select oauth_client
5. select web application
6. Fill the respective fields
7. Add a redirect url http://127.0.0.1:5000/callback
8. download the client_secretXXXXX.json file
9. Rename client_secretXXXXXX.json to client_secret.json
10. move to project root directory


## Datebase setup

- This section will be updated soon


### **Run server application**
From the root folder (backend), run

```
python src/server.py
```
The application will run at the specified port `APPLICATION_PORT` in `.env` file

To test if the application is running, visit `http://localhost:5000/status` or `http://127.0.0.1:5000/status` in your browser. You should see a message saying `{"status": "OK"}`

The API Swagger documentation should be accessible at `http://localhost:5000/apidocs`

# API Reference

The API documentation is available at [API.md](./API.md)