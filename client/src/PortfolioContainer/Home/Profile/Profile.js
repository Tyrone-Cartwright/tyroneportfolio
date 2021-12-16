import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css';

// require('react-dom');

// window.React2 = require('react-dom');
// console.log(window.React1 === window.React2);

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a
                href='https://www.linkedin.com/in/tyrone-cartwright-2370b444/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-linkedin-square'></i>
              </a>
              <a
                href='https://twitter.com/this_GuyTyrone'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-twitter-square'></i>
              </a>
              <a
                href='https://github.com/Tyrone-Cartwright'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-github-square'></i>
              </a>
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              {' '}
              Hello, I'm <span className='highlighted-text'>Tyrone</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {' '}
              <h1>
                {' '}
                <Typical
                  loop={Infinity}
                  steps={[
                    'Enthusiastic Developer 🔴',
                    1000,
                    'Front End Developer 💻',
                    1000,
                    'MERN Stack Developer 😎',
                    1000,
                    'React Developer ⌨️',
                    1000,
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>
                Building applications with front and back end operations.
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button
              className='btn primary-btn'
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href='TTCartwright.pdf' download='Tyrone TTCartwright.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
}
