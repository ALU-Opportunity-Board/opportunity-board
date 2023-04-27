# API Reference

## Authentication

This API uses JWT for authentication and authorization. The token is sent to the server in the header of each request. The token is used to identify the user and to authorize the user to access protected resources. It uses Google Login for authentication. The server generates and  verifies the token and sends it to the client. The client then sends the JWT token to the server in the header of each request.

Here are the endpoints to login using Google

### GET /google/login
- General:
    - Returns autherization url to login with google
    - Client uses the url to redirect user to google login flow
    - Requires no authentication
- Return sample
```json
{
    "auth_url": "https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=571582085310-p6vv1kttnbjr60u0rs401maurltt5mj.apps.googleusercontent.com&redirect_uri=http%3A%2F%2F127.0.0.1%3A5000%2Fcallback&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&state=BaPKN9HSgxHTXFWsRdrA9Etr1XLemn&access_type=offline"
}


## Authenticated User Endpoints

### GET /user
- General:
    - return all the information about user data stored in database
    - requires authentication with jwt token

- Return sample
```json
{
    "user": {
        "created_at": "Tue, 25 Apr 2023 21:40:34 GMT",
        "email": "w.yimam@alustudent.com",
        "first_name": "Wubeshet",
        "id": "7d84f0e0-b215-4946-af47-859e217e95b9",
        "last_name": "Yimam",
        "picture": "https://lh3.googleusercontent.com/a/AGNmyxayr4UVXSZBNsx8xfeg1NCZxX24vJOASE4AF2gr=s96-c",
        "role": "student",
        "shared_opportunities": [
            {
                "company": "Google",
                "created_at": "Wed, 26 Apr 2023 23:05:45 GMT",
                "deadline": "Thu, 27 Apr 2023 00:00:00 GMT",
                "field": "tech and engineering",
                "id": "0f0a756d-d1fa-418c-be77-e6c70829b635",
                "liked": false,
                "likes": 0,
                "link": "http://careers.google.com",
                "opportunity_type": "internship",
                "title": "SRE engineer",
                "updated_at": "Wed, 26 Apr 2023 23:05:45 GMT",
                "user_id": "7d84f0e0-b215-4946-af47-859e217e95b9"
            }
        ]
    }
}
```



### GET /user/opportunities
- General:
    - return apporunities shared by the user
    - requires authentication with jwt token
    
- Return sample
```json
[
    {
        "company": "Google",
        "created_at": "Wed, 26 Apr 2023 23:05:45 GMT",
        "deadline": "Thu, 27 Apr 2023 00:00:00 GMT",
        "field": "tech and engineering",
        "id": "0f0a756d-d1fa-418c-be77-e6c70829b635",
        "liked": false,
        "likes": 0,
        "link": "http://careers.google.com",
        "opportunity_type": "internship",
        "title": "SRE engineer",
        "updated_at": "Wed, 26 Apr 2023 23:05:45 GMT",
        "user_id": "7d84f0e0-b215-4946-af47-859e217e95b9"
    }
]
```



### GET /user/opportunities
- General:
    - Return all the opportunities stored in the database
    - requires authentication with jwt token
    
- Return sample
```json
[
    {
        "company": "Thoughtbridge",
        "created_at": null,
        "deadline": "Mon, 06 Mar 2023 00:00:00 GMT",
        "field": "human resource",
        "id": "1",
        "liked": null,
        "likes": null,
        "link": "https://mapquest.com/habitasse/platea/dictumst/maecenas/ut.aspx",
        "opportunity_type": "fellowship",
        "title": "Actuary",
        "updated_at": null,
        "user_id": "gfdsdg3-dgf34gf-gf876d"
    },
    {
        "company": "Skinix",
        "created_at": null,
        "deadline": "Sat, 10 Jun 2023 00:00:00 GMT",
        "field": "business operations",
        "id": "2",
        "liked": null,
        "likes": null,
        "link": "http://wikipedia.org/in/lectus.jsp",
        "opportunity_type": "fellowship",
        "title": "Sales Representative",
        "updated_at": null,
        "user_id": "4eb6edde-8599-459a-9bbf-6654hgd79d1"
    },
    {
        "company": "Meemm",
        "created_at": null,
        "deadline": "Sat, 15 Oct 2022 00:00:00 GMT",
        "field": "data",
        "id": "3",
        "liked": null,
        "likes": null,
        "link": "https://va.gov/augue/aliquam/erat/volutpat/in/congue.jsp",
        "opportunity_type": "part-time",
        "title": "Web Developer I",
        "updated_at": null,
        "user_id": "gfdsdg3-dgf34gf-gf876d"
    }
]
```



### POST /opportunity
- General:
    - post opportunity
    - The opportunity will be created under the current user's opportunity list
    - opportunity data must be passed as a json object in the request body
    - requires authentication with jwt token
    - returns the created opportunity object
- Sample data in the body:
```json
{
    "company": "Google",
    "deadline": "2023-04-27T00:00:00.000Z",
    "field": "tech and engineering",
    "link": "http://careers.google.com",
    "opportunity_type": "internship",
    "title": "SRE engineer"
}
```
- Return sample
```json
{
    "company": "Google",
    "deadline": "2023-04-27T00:00:00.000Z",
    "field": "tech and engineering",
    "link": "http://careers.google.com",
    "opportunity_type": "internship",
    "title": "SRE engineer"
}
```


### DELETE /oppurtunity/<opportunity_id>
- General:
    - delete the opportunity with the given id
    - return {} on success
    - requires authentication with jwt token
    
- Return sample
```json
{}
```