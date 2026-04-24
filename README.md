# Automatic Recognition of Signs in Sign Language

## 📌 Overview

This project presents a web-based application designed to recognize and help users learn sign language (ASL – American Sign Language). The system uses computer vision and deep learning techniques to detect and classify gestures performed in front of a webcam in real time.

The application aims to reduce communication barriers for people with hearing or speech impairments and to provide an accessible learning tool for beginners.

---

## 🎯 Objectives

* Detect and track hand, face, and body movements
* Extract relevant features from video frames
* Recognize sign language gestures using a trained model
* Provide real-time feedback to users
* Offer an intuitive and user-friendly interface

---

## 🧠 Technologies Used

* Python (Flask backend)
* React (frontend)
* TensorFlow / Keras
* MediaPipe Holistic
* OpenCV

---

## ⚙️ How It Works

The system follows a pipeline:

1. Capture video from webcam
2. Extract frames from video stream
3. Detect landmarks (hands, face, body) using MediaPipe
4. Convert landmarks into sequences of 30 frames
5. Feed sequences into an LSTM neural network
6. Predict the performed sign
7. Display result in real time

As described in the project, gestures are treated as **temporal sequences**, not static images, which improves accuracy and performance .

---

## 🧬 Model Architecture

The model is based on a Long Short-Term Memory (LSTM) network:

* LSTM layers: 64 → 128 → 64 neurons
* Dense layers: 64 → 32 neurons
* Output: Softmax classification

The model processes sequences of **30 frames**, each containing extracted landmarks from hands, face, and body .

---

## 📊 Results

The model was tested on three ASL signs:

* Hello
* Thanks
* I love you

The system achieved **over 90% accuracy**, demonstrating strong real-time performance .

---

## 🖥️ Project Structure

```
project/
│── backend/
│   ├── server.py
│   ├── client.py
│
│── frontend/
│   ├── React app
│
│── model/
│   ├── trained LSTM model
│
│── data/
│   ├── sequences (npy files)
```

---

## 🚀 Installation & Running

### 1. Clone repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Backend setup

```bash
cd backend
pip install -r requirements.txt
python server.py
```

### 3. Frontend setup

```bash
cd frontend
npm install
npm start
```

---

## 📷 Features

* Real-time gesture recognition
* Webcam integration
* Interactive learning interface
* Modular client-server architecture

---

## 🔮 Future Improvements

* Add more sign vocabulary
* Improve model accuracy with larger datasets
* Mobile application support
* Audio output for recognized signs

---


## 📄 License

This project is for my bachelor's thesis.
