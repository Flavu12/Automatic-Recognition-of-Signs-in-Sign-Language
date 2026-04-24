import LessonPage from './LessonPage';

const LessonPageAnimals = () => {

  const images = [
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749645655/dog.jpg', text: 'Hint: Pat your outstretched hand with fingers together on the side of your hip, just as if you were calling the dog.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749645653/cat.jpg', text: 'Hint: Like you are teasing your whiskers straight' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749645657/pig.jpg', text: 'Hint: Put your hand under your chin and bend your fingers at the first joint.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749645656/horse.jpg', text: 'Hint: Like a horse twitching an ear to brush away a pesky fly.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749645654/chicken.jpg', text: 'Hint: Looks a lot like a beak pecking the ground or scratching for food.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749645656/duck.jpg', text: "Hint: Looks like a duck's beak quacking" },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749645657/rabbit.jpg', text: 'Hint: Looks like the long ears of a rabbit, twitching.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749645655/cow.jpg', text: 'Hint: Make your hand into a fist then straighten your pinkie finger and straighten your thumb. The two extended fingers on your hand should like the horns of a cow.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749645657/goat.jpg', text: 'Hint: Make a slightly bent or curved "V" with your dominant hand, then tap your chin with the two fingers, followed by tapping your forehead with the same curved' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749645653/bear.jpg', text: 'Hint: Make your hands into claws and crossing your arms, with one hand on each shoulder. Now scratch up and down with each hand.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749645656/duck.jpg', text: 'Hint: Hold your open, dominant hand a short distance in front of your nose. As you pull your hand back, all the fingers touch, as if emphasizing the long snout of a wolf.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749645656/fox.jpg', text: 'Hint: The first letter of Fox is F. Fingerspell F' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749645655/deer.jpg', text: 'Hint: Your hands make a pair of antlers when you do the deer sign, so start by extending and spreading out your fingers on both hands' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749645653/raccoon.jpg', text: 'Hint: Make a raccoon mask by placing your index and middle fingers in a horizontal "V" position in front of your eyes. Pull both hands toward the outside and close your fingers.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749645656/owl.jpg', text: 'Hint: Make your hands into circles and hold them up in front of your eyes. Twist your hands inward and outward.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749645655/fish.jpg', text: 'Hint: Looks a lot like fish swimming through the water' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1749645653/butterfly.jpg', text: 'Hint: The sign looks like a butterfly flapping its wings.' },

  ];

  return <LessonPage title="Animals" images={images} nextLesson="Expression" />;
};

export default LessonPageAnimals;
  