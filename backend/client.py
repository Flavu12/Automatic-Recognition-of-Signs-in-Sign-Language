import numpy as np
import cv2
import mediapipe as mp
from keras.models import load_model


mp_holistic = mp.solutions.holistic
mp_drawing = mp.solutions.drawing_utils


model = load_model('D:/Licenta/licenta/backend/action.h5')
actions = np.array([ 'hello', 'i love you','thanks'])


def mediapipe_detection(image, model):
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    image.flags.writeable = False
    results = model.process(image)
    image.flags.writeable = True
    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
    return image, results

def extract_keypoints(results):
    pose = np.array([[res.x, res.y, res.z, res.visibility] for res in results.pose_landmarks.landmark]) if results.pose_landmarks else np.zeros((33,4))
    face = np.array([[res.x, res.y, res.z] for res in results.face_landmarks.landmark]) if results.face_landmarks else np.zeros((468,3))
    lh = np.array([[res.x, res.y, res.z] for res in results.left_hand_landmarks.landmark]) if results.left_hand_landmarks else np.zeros((21,3))
    rh = np.array([[res.x, res.y, res.z] for res in results.right_hand_landmarks.landmark]) if results.right_hand_landmarks else np.zeros((21,3))
    return np.concatenate([pose.flatten(), face.flatten(), lh.flatten(), rh.flatten()])


sequence = []
threshold = 0.6

def predict_sign_from_frame(frame_bgr):
    global sequence
    with mp_holistic.Holistic(static_image_mode=True, min_detection_confidence=0.5) as holistic:
        _, results = mediapipe_detection(frame_bgr, holistic)
        keypoints = extract_keypoints(results)
        sequence.append(keypoints)
        sequence = sequence[-30:]

        if len(sequence) == 30:
            res = model.predict(np.expand_dims(sequence, axis=0))[0]
            if res[np.argmax(res)] > threshold:
                return actions[np.argmax(res)]
    return ""
