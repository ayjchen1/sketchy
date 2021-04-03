from flask import Flask, request
from flask_cors import CORS #comment this on deployment

app = Flask(__name__)
CORS(app) #comment this on deployment

@app.route('/hello')
def say_hello_world():
    return {'result': "Hello World"}

@app.route('/upload', methods=['POST'])
def image_upload():
   # target = os.path.join(app.config['UPLOAD_FOLDER'], 'test')
   # if not os.path.isdir(target):
    #    os.mkdir(target)
    file = request.files['file']
    filename = request.files['filename'].name
    print("FILE UPLOADED: HERE IS FILE:", file)
# filename = secure_filename(file.filename)
#   destination = "/".join([target, filename])
#  file.save(destination)
#    session['uploadFilePath'] = destination
    response = "SUCCESS: Image file uploaded"
    return response
