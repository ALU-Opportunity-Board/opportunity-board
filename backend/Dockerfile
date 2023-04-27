FROM python:3-alpine3.15
WORKDIR /app

COPY /src /app
COPY requirements.txt /app
COPY migrations /app
RUN pip install -r requirements.txt
EXPOSE  5000
# set FLASK_APP=src/server.py
ENV FLASK_APP=server.py
RUN flask db init
RUN flask db migrate
RUN flask db upgrade
CMD python server.py