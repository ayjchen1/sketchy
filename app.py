import os
from flask import Flask, request, redirect, send_file, url_for, after_this_request
from werkzeug.utils import secure_filename
from flask_cors import CORS #comment this on deployment

import sys
sys.path.insert(1, './cycleGAN/')
import inference

sys.path.insert(1, './lineart-model/src/')
import genlineart

UPLOAD_SKETCH_FOLDER = "./cycleGAN/inputs/test/B"
DOWNLOAD_SKETCH_FOLDER = "./cycleGAN/output/A"

UPLOAD_PHOTO_FOLDER = "./lineart-model/images"
DOWNLOAD_PHOTO_FOLDER = "./lineart-model/outputimages"

app = Flask(__name__)
CORS(app) #comment this on deployment

app.config['UPLOAD_SKETCH_FOLDER'] = UPLOAD_SKETCH_FOLDER
app.config['DOWNLOAD_SKETCH_FOLDER'] = DOWNLOAD_SKETCH_FOLDER

app.config['UPLOAD_PHOTO_FOLDER'] = UPLOAD_PHOTO_FOLDER
app.config['DOWNLOAD_PHOTO_FOLDER'] = DOWNLOAD_PHOTO_FOLDER

# sketch -> photo
@app.route('/img/sketch/<filename>', methods = ['GET'])
def give_sketch(filename):
    filen = os.path.join(app.config['DOWNLOAD_SKETCH_FOLDER'], filename)
    print(filen)
    return send_file(filen)    

# photo -> sketch
@app.route('/img/photo/<filename>', methods = ['GET'])
def give_photo(filename):
    filen = os.path.join(app.config['DOWNLOAD_PHOTO_FOLDER'], filename)
    print(filen)
    return send_file(filen)  

@app.route('/uploadsketch', methods=['POST'])
def sketch_upload():
    if request.method == 'POST':
        file = request.files['file']
        filename = secure_filename(file.filename)

        filepath = os.path.join(app.config['UPLOAD_SKETCH_FOLDER'], filename)
        file.save(filepath)
        
        inference.perform_inference(dataroot="./cycleGAN/inputs/", A2B=False, B2A=True,\
        generator_A2B="./cycleGAN/output/netG_A2B.pth", generator_B2A="./cycleGAN/output/netG_B2A.pth", cuda=False,
        filename=filename)

        apiURL = "/img/sketch/" + filename
        print(apiURL)

        @after_this_request 
        def remove_file(response): 
            os.remove(os.path.join(app.config['UPLOAD_SKETCH_FOLDER'], filename))
            return response

        return {'fileurl': apiURL}

    return {'fileurl': ""}

def create_lineart(filename):
    inputpath = os.path.join(app.config['UPLOAD_PHOTO_FOLDER'], filename)
    outputpath = os.path.join(app.config['DOWNLOAD_PHOTO_FOLDER'], filename)

    genlineart.generate(inputpath, outputpath)

@app.route('/uploadphoto', methods=['POST'])
def photo_upload():
    if request.method == 'POST':
        file = request.files['file']
        filename = secure_filename(file.filename)

        filepath = os.path.join(app.config['UPLOAD_PHOTO_FOLDER'], filename)
        file.save(filepath)
        
        create_lineart(filename)        

        apiURL = "/img/photo/" + filename
        print(apiURL)

        @after_this_request 
        def remove_file(response): 
            os.remove(os.path.join(app.config['UPLOAD_PHOTO_FOLDER'], filename))
            return response

        return {'fileurl': apiURL}

    return {'fileurl': ""}