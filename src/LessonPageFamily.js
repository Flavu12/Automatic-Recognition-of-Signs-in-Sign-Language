import LessonPage from './LessonPage';

const LessonPageFamily = () => {

  const images = [
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653041/family.jpg', text: 'Hint: Make "F" signs with both hands, start near your torso with fingers touching, then circle your hands outward, ending with pinkies touching.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653050/mother.jpg', text: 'Hint: Extend and spread your fingers apart on your dominant hand. With your pinkie facing forward, tap your thumb on your chin.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653042/father.jpg', text: "Hint: Make the number '5', extending and spreading out the five fingers on your dominant hand. Then tap the thumb end of your '5' hand on your forehead." },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653053/sister.jpg', text: 'Hint: Make horizontal "L" shapes with both hands. Start with your dominant thumb under your jaw, then tap it down on your other hand.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653041/brother.jpg', text: 'Hint: Make both hands into "L" shapes. Hold your non-dominant hand at your chest. Bring your dominant hand from your forehead down to rest on the other hand.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653047/grandmother.jpg', text: "Hint: Extend and separate your fingers, then starting with your thumb on your chin, move your hand forward on one arc and then a second arc. It is just as if you're tracing two rainbows." },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653046/grandfather.jpg', text: "Hint: Take your hand with fingers outstretched. Start with your thumb on your forehead and move your hand forward in one arc, then a second arc." },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653041/aunt.jpg', text: 'Hint: Make a fist with your thumb sticking out near your face, at top of the fist. Leading with the thumb, move your hand in a small circle near your cheek.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653054/uncle.jpg', text: 'Hint: Extend your index finger and middle finger to make the sign for "U". Take the hand and move it in small circles to the side of your body at the level of your forehead.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653041/cousin.jpg', text: 'Hint: Place the C-hand by the side of your head and twist it back and forth.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653051/niece.jpg', text: 'Hint: Form the letter N sign with your dominant hand by the side of your face, and twist it back and forth.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653051/nephew.jpg', text: 'Hint: Form the letter N sign with your thumb tucked under your index and middle fingers while pointing to your head and  twisting your hand twice.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653041/baby.jpg', text: 'Hint: Gently move your hands from side to side, as if rocking the imaginary baby in your arms.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653045/girl.jpg', text: 'Hint: Start by making a fist with your thumb sticking out. Take your thumb and, starting at the back of your jaw, run the thumb along your jaw, ending at your chin.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653041/boy.jpg', text: 'Hint: Looks like you are grasping and releasing the tip of a baseball hat.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653055/woman.jpg', text: 'Hint: Touch the thumb of your open, dominant hand to your chin, while the rest of the fingers are spread out. Then bring that same open hand down to the center of your chest.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653048/man.jpg', text: 'Hint: Place your dominant hand with fingers spread out and thumb touching the middle of your forehead. Then make an arc from forehead to the center of your chest.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653054/wife.jpg', text: 'Hint: Make the general “female” sign with your dominant hand at your chin (an open, curved hand like a modified “C”). Then move that hand down to hold your other hand, palm up, both hands forming a “C” shape, like holding hands.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749653047/husband.jpg', text: 'Hint: Make the general “male” sign with your dominant hand at your forehead (an open, curved hand like a modified “C”). Then move that hand down to hold your other hand, palm up, both hands forming a “C” shape, like holding hands' }

  ];

  return <LessonPage title="Family" images={images} nextLesson="Letters" />;
};

export default LessonPageFamily;