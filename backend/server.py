from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import numpy as np
import cv2
import io
from client import predict_sign_from_frame

app = Flask(__name__)
CORS(app)

@app.route('/process_video', methods=['POST'])
def process_video():
    if 'frame' not in request.files:
        return jsonify({'error': 'No frame uploaded'}), 400
    

    file = request.files['frame']
    image = Image.open(file.stream).convert('RGB')
    frame = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)

    recognized_sign = predict_sign_from_frame(frame)
    recognized_sign = recognized_sign if recognized_sign else "No sign detected"

    return jsonify({'recognized_sign': recognized_sign})

if __name__ == '__main__':
    app.run(debug=True)
