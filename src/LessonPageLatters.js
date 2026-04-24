import LessonPage from './LessonPage';
const LessonPageLatters = () => {
  

  const images = [
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650678/A.jpg', text: ' Make a fist with thumb resting on the side of the fist.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650679/B.jpg', text: 'Extend fingers straight up, thumb across the palm.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650680/C.jpg', text: 'Curve all fingers to form the shape of the letter C.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650682/D.jpg', text: 'Touch thumb to tips of middle, ring, and pinky; index points up.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650684/E.jpg', text: 'Curl fingers down to touch the thumb, keeping fingertips bent.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650686/F.jpg', text: 'Touch tip of thumb and index to form a circle; other fingers up.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650688/G.jpg', text: 'Hold index and thumb parallel, palm facing sideways.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650690/H.jpg', text: 'Extend index and middle fingers together, palm sideways.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650692/I.jpg', text: 'Raise pinky finger; other fingers in a fist.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650694/J.jpg', text: 'Raise pinky and trace a “J” in the air.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650695/K.jpg', text: 'Index and middle finger up in a V, thumb between them.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650697/L.jpg', text: 'Extend index and thumb to form an “L” shape.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650699/M.jpg', text: 'Place thumb under the first three fingers.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650701/N.jpg', text: 'Place thumb under the first two fingers.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650703/O.jpg', text: 'Curve all fingers to form an “O” shape.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650705/P.jpg', text: 'Like K, but point downward.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650705/P.jpg', text: 'Like G, but point downward.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650708/R.jpg', text: 'Cross index and middle fingers.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650710/S.jpg', text: 'Make a fist with thumb across the front.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650712/T.jpg', text: 'Place thumb between index and middle finger.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650714/U.jpg', text: 'Extend index and middle fingers together, palm forward.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650716/V.jpg', text: 'Extend index and middle in a “V” shape.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650718/W.jpg', text: 'Extend index, middle, and ring fingers in a “W” shape.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650719/X.jpg', text: 'Curve index finger like a hook; rest in a fist.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650722/Y.jpg', text: 'Extend thumb and pinky; others folded.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749650724/Z.jpg', text: 'Trace a “Z” in the air with your index finger.' }
  ];

  return <LessonPage title="Letters" images={images} nextLesson="Numbers" />;
};

export default LessonPageLatters;
