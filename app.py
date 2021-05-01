import os
from flask import Flask, request, redirect, send_file, url_for, after_this_request
from werkzeug.utils import secure_filename
from flask_cors import CORS #comment this on deployment

import sys
sys.path.insert(1, './cycleGAN/')
import inference

UPLOAD_FOLDER = "./cycleGAN/inputs/test/B"
DOWNLOAD_FOLDER = "./cycleGAN/output/A"

app = Flask(__name__)
CORS(app) #comment this on deployment

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['DOWNLOAD_FOLDER'] = DOWNLOAD_FOLDER

@app.route('/img/<filename>', methods = ['GET'])
def give(filename):
    filen = os.path.join(app.config['DOWNLOAD_FOLDER'], filename)
    print(filen)
    return send_file(filen)    

@app.route('/upload', methods=['POST'])
def image_upload():
    if request.method == 'POST':
        file = request.files['file']
        filename = secure_filename(file.filename)

        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        inference.perform_inference(dataroot="./cycleGAN/inputs/", A2B=False, B2A=True,\
        generator_A2B="./cycleGAN/output/netG_A2B.pth", generator_B2A="./cycleGAN/output/netG_B2A.pth", cuda=False,
        filename=filename)

        apiURL = "/img/" + filename
        print(apiURL)

        @after_this_request 
        def remove_file(response): 
            os.remove(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return response

        return {'fileurl': apiURL}

    return {'fileurl': ""}
