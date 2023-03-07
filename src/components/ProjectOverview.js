import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const ProjectOverview = () => {
  const closeProjectOverview = (e) => {
    e.currentTarget.parentElement.classList.add('hide');
  };
  return (
    <OverviewContainer>
      <button className='close-btn' onClick={closeProjectOverview}>
        <FaTimes />
      </button>
      <main className='section section-center'>
        <div className='title'>
          <h1>Project Overview</h1>
          <div className='underline'></div>
        </div>

        <p>
          Retro Shop is a full-stack e-commerce site that offers a curated
          collection of vintage tech and classic games. This project was built
          using React, Auth0, Stripe, and Airtable. It demonstrates the use of
          HTML, CSS, JavaScript, Node.js, and APIs. The site is responsive and
          user-friendly, with seamless integration of third-party services.
        </p>
        <h2>features</h2>
        <ul>
          <li>User authentication using Auth0</li>
          <li>Secure payment processing with Stripe</li>
          <li>Airtable integration for efficient data storage</li>
          <li>Filter and sort functionality</li>
          <li>Seamless integration of third-party services</li>
          <li>Responsive design for optimal viewing on all devices</li>
        </ul>
        <h2>Technologies Used</h2>
        <ul>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Auth0</li>
          <li>Stripe</li>
          <li>Airtable</li>
        </ul>
        <h4>built by: Hamdi Ismail</h4>
      </main>
    </OverviewContainer>
  );
};
export default ProjectOverview;

const OverviewContainer = styled.aside`
  /* display: block; */
  position: absolute;
  top: 0;
  left: 0;
  height: fit-content;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 10;
  .close-btn {
    margin-left: 80%;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  h1,
  h2,
  h4 {
    color: var(--clr-white);
    text-align: left;
  }
  .underline {
    margin-left: 12%;
  }
  p {
    color: var(--clr-white);
    max-width: var(--fixed-width);
    margin-top: 1rem;
  }
  ul {
    margin-left: 1rem;
    color: var(--clr-white);
    list-style-type: disc;
    margin-bottom: 2rem;
  }
`;
