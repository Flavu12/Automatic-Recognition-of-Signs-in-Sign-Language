import LessonPage from './LessonPage';

const LessonPageExpression = () => {

  const images = [
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1748385116/hello.jpg', text: 'Hint: Extend your fingers and cross your thumb over your palm. Start with your hand near your ear, then move it outward away from your body. ' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1748385454/good-morning.jpg', text: 'Hint: Combine the signs for good and morning.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1748385455/good-night.jpg', text: 'Hint: Combine the signs for good and night.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1748385454/goodbye.jpg', text: 'Hint: Open your palm, folding down your fingers, then open your palm again. An ASL alternative for goodbye or bye-bye is to wave your open hand sideways.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1748385455/yes.jpg', text: 'Hint: You take your hand and make it into a fist, holding it at about shoulder height, then make your fist bob back and forth.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1748385471/no.jpg', text: 'Hint: The sign looks like a mouth saying no. Take your index finger together with your middle finger and tap them together with your thumb.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1748385455/please.jpg', text: 'Hint: Extend your dominant hand with fingers together and thumb out. Rub your palm in a circle on your chest.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1748385455/thank-you.jpg', text: 'Hint: It is almost like you are blowing a kiss out, to thank the person - but the sign is a bit lower.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1748385455/sorry.jpg', text: 'Hint: Make your hand into a fist and rub it in a circular motion across your chest.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1748385454/excuse-me.jpg', text: 'Hint: The sign for excuse me, pardon me, or forgive me is the same. Hold your non-dominant hand palm up, then brush your dominant fingertips along it.' },
    { src: 'https://res.cloudinary.com/dpjacuogb/image/upload/v1748385471/i-love-you.jpg', text: 'Hint: Put up your thumb, index finger and pinkie finger, while keeping your ring finger and your middle finger down.' }
  ];

  return <LessonPage title="Expressions" images={images} nextLesson="Family" />;
};

export default LessonPageExpression;