import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/LessonPage.css';
import './CSS/Header.css';

const LessonPage = ({ title, images, nextLesson }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleImageClick = () => {
    setFlipped(prev => !prev);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setFlipped(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setFlipped(false);
  };

  return (
    <div className="lessonPage">
      <header className="header">
        <button className="back-button" onClick={() => navigate('/')}>← Back</button>
        <button className="practice" onClick={() => navigate('/camera')}>Practice now!</button>
      </header>

      <h2 className='title'>{title}</h2>
      <div className="lesson-container">
        <div className="flip-card" onClick={handleImageClick}>
          <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
            <div className="flip-card-front">
              <img src={images[currentIndex].src} alt="lesson" />
            </div>
            <div className="flip-card-back">
              <p>{images[currentIndex].text}</p>
            </div>
          </div>
        </div>

        <h3 className="name_object">
          {images[currentIndex].src.split('/').pop().split('.')[0].replace(/^[a-z]/, c => c.toUpperCase())}
        </h3>

        <div className="arrow-buttons">
          <button onClick={handlePrev}>{"<"}</button>
          <button onClick={handleNext}>{">"}</button>
        </div>

        {currentIndex === images.length - 1 && (
          <button className="next-lesson-button" onClick={() => navigate(`/${nextLesson}`)
        }>
            Next Lesson: {nextLesson}
          </button>
        )}
      </div>
    </div>
  );
};

export default LessonPage;
