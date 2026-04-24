import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage.js';
import LessonPageLatters from './LessonPageLatters.js';
import LessonPageColors from './LessonPageColors.js';
import LessonPageNumbers from './LessonPageNumbers.js';
import LessonPageAnimals from './LessonPageAnimals.js';
import CameraPage from './CameraPage.js';
import LessonPageExpression from './LessonPageExpression.js';
import LessonPageFamily from './LessonPageFamily.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/letters" element={<LessonPageLatters />} />
        <Route path="/colors" element={<LessonPageColors />} />
        <Route path="/numbers" element={<LessonPageNumbers />} />
        <Route path="/animals" element={<LessonPageAnimals />} />
        <Route path="/expression" element={<LessonPageExpression />} />
        <Route path="/family" element={<LessonPageFamily />} />        
        <Route path="/camera" element={<CameraPage />} />

      </Routes>
    </Router>
  );
}

export default App;
