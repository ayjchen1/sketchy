import os
from flask import Flask, request, redirect, send_file, url_for
from werkzeug.utils import secure_filename
from flask_cors import CORS #comment this on deployment

UPLOAD_FOLDER = "./testuploads"

app = Flask(__name__)
CORS(app) #comment this on deployment
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/img/<filename>', methods = ['GET'])
def give(filename):
    filen = './testuploads/'+ filename
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
