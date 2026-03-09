import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-lg text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      {/* Arrow icon */}
    </Link>
  </div>
);

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm <span className='font-semibold'>Nithin N</span>👋
        <br />
        Computer Science Student from Kerala.
      </h1>
    );

  if (currentStage === 2) {
    return (
      <InfoBox
        text='Worked on various projects and picked up many skills along the way'
        link='/about'
        btnText='Learn more'
      />
    );
  }

  if (currentStage === 3) {
    return (
      <InfoBox
        text='Led multiple projects to success over the years. Curious about the impact?'
        link='/projects'
        btnText='Visit my portfolio'
      />
    );
  }

  if (currentStage === 4) {
    return (
      <InfoBox
        text="Need a project done or looking for a dev? I'm just a few keystrokes away"
        link='/contact'
        btnText="Let's talk"
      />
    );
  }

  return null;
};

export default HomeInfo;
