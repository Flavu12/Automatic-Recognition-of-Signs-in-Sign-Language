import LessonPage from './LessonPage';

const LessonPageColors = () => {
  const images = [
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749646558/red.jpg', text: 'Hint: Like lipstick. Touch your lips with the index finger and move it downward' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749646552/blue.jpg', text: 'Hint: The first letter of Blue is B. Fingerspell B' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749646555/pink.jpg', text: 'Hint: Start with the "P" handshape, touch the lips with the middle finger, and move it downward' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749646557/purple.jpg', text: 'Hint: The first letter of Purple is P. Fingerspell P' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749646560/yellow.jpg', text: 'Hint: The first letter of Yellow is Y. Fingerspell Y' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749646555/orange.jpg', text: 'Hint: Like squeezing an orange under chin' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749646553/brown.jpg', text: 'Hint: Use a "B" handshape, and slide it down along the side of your face.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749646553/green.jpg', text: 'Hint: The first letter of Green is G. Fingerspell G' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749646552/black.jpg', text: 'Hint: Inside your skull is black' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749646559/white.jpg', text: 'Hint: The first letter of White is W. Fingerspell W pulling white off your shirt' },
  ];

  return <LessonPage title="Colors" images={images} nextLesson="Animals" />;
};

export default LessonPageColors;