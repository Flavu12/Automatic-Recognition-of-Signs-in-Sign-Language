import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CSS/CameraPage.css";
import './CSS/Header.css';

function CameraPage() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [recognizedWords, setRecognizedWords] = useState([]);
  const navigate = useNavigate();
  let streamRef = useRef(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    }
    startCamera();

    const interval = setInterval(sendFrameToServer, 500);

    return () => {
      clearInterval(interval);
      stopCamera();
    };
  }, []);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      streamRef.current = null;
    }
  };

  const sendFrameToServer = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(async (blob) => {
      const formData = new FormData();
      formData.append("frame", blob, "frame.jpg");

      try {
        const response = await fetch("http://127.0.0.1:5000/process_video", {
          method: "POST",
          body: formData
        });

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        const sign = data.recognized_sign;

        if (sign && sign !== "No sign detected") {
          setRecognizedWords(prev => {
            const lastWord = prev[prev.length - 1];
            if (lastWord !== sign) {
              const newWords = [...prev, sign];
              return newWords.slice(-15); 
            }
            return prev;
          });
        }
      } catch (error) {
        console.error("Error sending frame:", error);
      }
    }, "image/jpeg");
  };

  const handleBack = () => {
    stopCamera();
    navigate('/');
  };

  return (
    <div>
      <header className="header">
        <button className="back-button" onClick={handleBack}>← Back</button>
      </header>
      <div className='container'>
        <h1>Live Sign Recognition</h1>
        <video ref={videoRef} autoPlay playsInline />
        <canvas ref={canvasRef} style={{ display: "none" }} />

        <div className="recognized-words-container">
          <div className="recognized-words-box">
            {recognizedWords.join(" ")}
          </div>
          <button className="clear-button" onClick={() => setRecognizedWords([])}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default CameraPage;
