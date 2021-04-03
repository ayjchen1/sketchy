from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment

app = Flask(__name__)
CORS(app) #comment this on deployment

#api = Api(app)

@app.route('/hello')
def say_hello_world():
    return {'result': "Hello World"}

#api.add_resource(HelloApiHandler, '/flask/hello')