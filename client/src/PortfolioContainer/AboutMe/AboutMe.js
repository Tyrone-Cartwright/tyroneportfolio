import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './AboutMe.css';

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      'Full stack web developer with a background in the MERN stack, Python, Django, as well as delivering applications with efficiency in mind. Strong team collaboration and capable of being an asset to an organization.',
    highlights: {
      bullets: [
        'Full Stack Web Development',
        'React Developer',
        'MERN',
        'Building Rest API',
        'Managing Database',
        'Interactive Front End Developer',
      ],
      heading: 'Here are Few Highlights:',
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className='highlight' key={i}>
        <div className='highlight-blob'></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className='about-me-container screen-container' id={props.id || ''}>
      <div className='about-me-parent'>
        <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
            <span className='about-me-description'>
              {SCREEN_CONSTANTS.description}
            </span>
            <div className='about-me-highlights'>
              <div className='highlight-heading'>
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className='about-me-options'>
              <button
                className='btn primary-btn'
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {' '}
                Hire Me{' '}
              </button>
              <a href='TTCartwright.pdf' download='Tyrone TTCartwright.pdf'>
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
