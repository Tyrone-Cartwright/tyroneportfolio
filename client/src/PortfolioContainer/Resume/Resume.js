import React, { useState, useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate && props.toDate ? (
            <div className='heading-date'>
              {props.fromDate + '-' + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='resume-sub-heading'>
          <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className='resume-heading-description'>
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Projects', logoSrc: 'projects.svg' },
    { label: 'Interests', logoSrc: 'interests.svg' },
  ];

  const programmingSkillsDetails = [
    { skill: 'JavaScript', ratingPercentage: 80 },
    { skill: 'React JS', ratingPercentage: 85 },
    { skill: 'Express JS', ratingPercentage: 85 },
    { skill: 'Node JS', ratingPercentage: 82 },
    { skill: 'Mongo Db', ratingPercentage: 80 },
    { skill: 'HTML', ratingPercentage: 85 },
    { skill: 'CSS', ratingPercentage: 80 },
    { skill: 'Django', ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: 'Personal Portfolio Website',
      duration: { fromDate: 2021, toDate: 2021 },
      description:
        'A Personal Portfolio website to showcase my my details and projects all in one place.',
      subHeading: 'Technologies Used: React JS, CSS, RxJS',
    },
    {
      title: (
        <a
          href='https://chefforhire.herokuapp.com/'
          target='_blank'
          rel='noreferrer'
        >
          Chef For Hire
        </a>
      ),
      duration: { fromDate: 2021, toDate: 2021 },
      description:
        'An website that allows clients to hire private chefs in their local area for various occassions. This app can be for birthday parties, anniversaries, weddings, or a simple date night for two.',
      subHeading:
        'Technologies Used: Django, PostgreSQL, Python, AWS S3, Materialize CSS, HTML, CSS, JavaScript',
    },
    {
      title: (
        <a
          href='https://flight-trac-plus.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          Flight Trac Plus
        </a>
      ),
      duration: { fromDate: 2021, toDate: 2021 },
      description:
        'Flight Trac Plus Agency is a website where you can book flight reservations, hotel accommodations as well as events and restaurant reservations all in one place.',
      subHeading:
        'Technologies Used: React JS, CSS, JavaScript, Node JS, Express, Mongo Db, Mongoose',
    },
  ];

  const resumeDetails = [
    <div className='resume-screen-container' key='education'>
      <ResumeHeading
        heading={'General Assembly'}
        subheading={'Software Engineer Immersive Certificate'}
        fromDate={2021}
        toDate={2021}
      />
      <ResumeHeading
        heading={'Lambda School'}
        subheading={'Full Stack Web Development'}
        fromDate={2018}
        toDate={2019}
      />
      <ResumeHeading
        heading={'Team Treehouse'}
        subheading={'Web Development - Self taught coding'}
        fromDate={2017}
        toDate={2018}
      />
    </div>,
    /* PROGRAMMING SKILLS */
    <div
      className='resume-screen-container programming-skills-container'
      key='programming-skills'
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className='skill-parent' key={index}>
          <div className='heading-bullet'></div>
          <span>{skill.skill}</span>
          <div className='skill-percentage'>
            <div
              style={{ width: skill.ratingPercentage + '%' }}
              className='active-percentage-bar'
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className='resume-screen-container' key='projects'>
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className='resume-screen-container' key='interests'>
      <ResumeHeading
        heading='Music'
        description="Listening to some soothing LoFi beats or shuffling through Spotify's song charts is at times the best solution for everything. "
      />
      <ResumeHeading
        heading='Coding'
        description='Coding brings me so much gratification and frustration at the same time , but it teaches you to be patient and also allows to become a better problem solver'
      />
      <ResumeHeading
        heading='Family'
        description='I love family time taking drives to watch the foliage across New England or having a barbeque tih family and friends or just watching a great movie together.'
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
        }
        key={index}
      >
        <img
          className='bullet-logo'
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt='B'
        />
        <span className='bullet-label'>{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className='resume-details-carousal'
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className='resume-container screen-container' id={props.id || ''}>
      <div className='resume-content'>
        <ScreenHeading title={'Resume'} subHeading={'My formal Bio Details'} />
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icons'></div>
              <div className='bullets'>{getBullets()}</div>
            </div>
          </div>

          <div className='resume-bullet-details'>{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
