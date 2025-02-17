import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <div >
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Programmer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Web developer',
        1500,
        'Designer',
        1500,
      ]}
      speed={50}
      className='text-[2rem] md:text-[3rem] text-red-800 uppercase'
      repeat={Infinity}
    />
    </div>
  );
};

export default TextEffect;
