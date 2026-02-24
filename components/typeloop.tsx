import Typewriter from 'typewriter-effect';

const TypewriterLoop = () => {
  return (
    <span style={{ display: 'inline' }}>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('<span style="color: #ffffff;">I am a </span><span style="color: #f13232;">Programmer</span>')
            .pauseFor(1500)
            .deleteChars(10) // Deletes "Programmer"
            .typeString('<span style="color: #33c1ff;">Developer</span>')
            .pauseFor(1500)
            .deleteChars(9) // Deletes "Developer"
            .typeString('<span style="color: #75ff33;">DevOps</span>')
            .pauseFor(1500)
            .deleteChars(6) // Deletes "DevOps"
            .start();
        }}
      />
    </span>
  );
};

export default TypewriterLoop;