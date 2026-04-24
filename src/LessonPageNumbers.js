import LessonPage from './LessonPage';
const LessonPageNumbers = () => {

  const images = [
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648431/1.jpg', text: 'Hint: Hold up your index finger' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648427/2.jpg', text: 'Hint: Hold up your index and middle fingers' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648425/3.jpg', text: 'Hint: Hold up your thumb, index, and middle fingers' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648426/4.jpg', text: 'Hint: Hold up four fingers (thumb tucked in)' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648428/5.jpg', text: 'Hint: Hold up all five fingers' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648427/6.jpg', text: 'Hint: Touch the thumb to the pinky, other fingers extended' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648430/7.jpg', text: 'Hint: Touch the thumb to the ring finger, other fingers extended' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648429/8.jpg', text: 'Hint: Touch the thumb to the middle finger, other fingers extended' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648430/9.jpg', text: 'Hint: Touch the thumb to the index finger, other fingers extended' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648437/10.jpg', text: 'Hint: Shake your thumb (like a "thumbs up")' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648435/11.jpg', text: 'Hint: Flick the index finger twice' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648438/12.jpg', text: 'Hint: Flick the index and middle fingers twice' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648442/13.jpg', text: 'Hint: Bend the index and middle fingers twice, thumb extended' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648443/14.jpg', text: 'Hint: Bend all four fingers (except thumb) twice' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648441/15.jpg', text: 'Hint: Bend all four fingers (thumb extended) twice' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648443/16.jpg', text: 'Hint: Shake the thumb and pinky' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648442/17.jpg', text: 'Hint: Shake the thumb and ring finger' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648443/18.jpg', text: 'Hint: Shake the thumb and middle finger' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648445/19.jpg', text: 'Hint: Shake the thumb and index finger' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749648446/20.jpg', text: 'Hint: Touch the thumb and index finger together repeatedly (like a small pinch)' },

  ];

  return <LessonPage title="Numbers" images={images} nextLesson="Colors" />;
  };

export default LessonPageNumbers;
