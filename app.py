import os
from flask import Flask, request, redirect, send_file, url_for
from werkzeug.utils import secure_filename
from flask_cors import CORS #comment this on deployment

import sys
sys.path.insert(1, './lineart-model/src/')

import genlineart

UPLOAD_FOLDER = "./lineart-model/images"
DOWNLOAD_FOLDER = "./lineart-model/outputimages"

app = Flask(__name__)
CORS(app) #comment this on deployment

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['DOWNLOAD_FOLDER'] = DOWNLOAD_FOLDER

@app.route('/img/<filename>', methods = ['GET'])
def give(filename):
    filen = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    return send_file(filen)

@app.route('/upload', methods=['POST'])
def image_upload():
    if request.method == 'POST':
        file = request.files['file']
        filename = secure_filename(file.filename)

        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        apiURL = "/img/" + filename
        print(apiURL)

        return {'fileurl': apiURL}

    return {'fileurl': ""}
