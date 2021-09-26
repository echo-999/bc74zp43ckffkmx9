import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import SchoolIcon from '@material-ui/icons/School';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import CollectionsIcon from '@material-ui/icons/Collections';
import ExploreIcon from '@material-ui/icons/Explore';
//Components
import { College, JuniorHighSchool, SeniorHighSchool } from './components/Education';
import { Skills } from './components/Skills';
import { Actions, Staging } from './components/Certificates';
//Images
import FrontEndDevelopmentLibraries from './assets/Front-End-Development-Libraries.png';
import JavaScriptAlgorithmsAndDataStructures from './assets/JavaScript-Algorithms-and-Data-Structures.png';
import ResponsiveWebDesign from './assets/Responsive-Web-Design.png';
import SMARTTechnopreneurship101 from './assets/SMART-Technopreneurship-101.png';
import SoftwareProcessesAndAgilePractices from './assets/Software-Processes-and-Agile-Practices.png'

function App() {
  const base = 'bc74zp43ckffkmx9';
  const [active, setActive] = React.useState(0);
  const [previousCard, setPreviousCard] = React.useState();
  const [currentCard, setCurrentCard] = React.useState();
  const [nextCard, setNextCard] = React.useState();
  React.useEffect(() => {
    if (active === 0) {
      setPreviousCard(certificates[4]);
      setCurrentCard(certificates[active]);
      setNextCard(certificates[active + 1]);
    } else if (active === 4) {
      setPreviousCard(certificates[active - 1]);
      setCurrentCard(certificates[active]);
      setNextCard(certificates[0]);
    } else {
      setPreviousCard(certificates[active - 1]);
      setCurrentCard(certificates[active]);
      setNextCard(certificates[active + 1]);
    }
  }, [active])

  const skills = [
    {id: 0, title: 'HTML', description: 'HyperText Markup Language', proficiency: 'Working', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
    {id: 1, title: 'CSS', description: 'Cascading Style Sheets', proficiency: 'Basic', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
    {id: 2, title: 'JS', description: 'JavaScript Language', proficiency: 'Working', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
    {id: 3, title: 'Material - UI', description: 'A Popular React UI Framework', proficiency: 'Working', url: 'https://material-ui.com/'},
    {id: 4, title: 'Tailwind CSS', description: 'A Utility-First CSS Framework', proficiency: 'Basic', url: 'https://tailwindcss.com/'},
    {id: 5, title: 'React JS', description: 'A Front-End JavaScript Library', proficiency: 'Working', url: 'https://reactjs.org/'},
    {id: 6, title: 'React-Redux', description: 'A Predictable State Container for JS Apps', proficiency: 'Basic', url: 'https://react-redux.js.org/'},
  ];
  const certificates = [
    {id: 0, title: 'Responsive Web Design', from: 'FreeCodeCamp', src: ResponsiveWebDesign },
    {id: 1, title: 'JavaScript Algorithms and Data Structures', from: 'FreeCodeCamp', src: JavaScriptAlgorithmsAndDataStructures },
    {id: 2, title: 'Front End Development Libraries', from: 'FreeCodeCamp', src: FrontEndDevelopmentLibraries },
    {id: 3, title: 'SMART Technopreneurship 101', from: 'TESDA', src: SMARTTechnopreneurship101 },
    {id: 4, title: 'Software Processes and Agile Practices', from: 'Coursera', src: SoftwareProcessesAndAgilePractices },
  ]

  const handlePrevious = () => {
    setActive((prev) => (prev <= 0 ? 4 : prev - 1));
  }
  const handleNext = () => {
    setActive((prev) => (prev >= 4 ? 0 : prev + 1));
  }
  console.log('active state => ', active)
  const skillsDisplay = skills.map(item => (
    <Skills key={item.id} title={item.title} description={item.description} proficiency={item.proficiency} url={item.url} />
  ))
  return (
    <div className='flex flex-col' id='main-container'>
      {/* Introduction Section */}
      <section className='bg-cxgreen-dark h-screen w-full grid grid-cols-2 grid-rows-6 p-4' id='section-introduction'>
        <div className='row-start-3 self-end'>
          <h1 className='text-right text-5xl text-white font-semibold mb-5'>Hi, I'm Jerico</h1>
          <h3 className='text-right text-4xl text-white'>And I'm here to share my adventure! </h3>
        </div>
        <p className='row-start-4 text-right text-white text-2xl mt-5'><ExploreIcon fontSize='inherit' className='text-white' /> Let's <span>talk!</span></p>
        {/* <div className='col-start-2 row-start-3 row-span-2 bg-white mx-9 my-9 rounded-xl border border-red-900 box-border'>teheeee</div> */}
      </section>
      {/* Educational Section */}
      <section className='bg-gradient-to-b from-cxgreen-dark via-cxgreen-dark to-cxgreen h-screen flex flex-col p-4'>
        <h2 id='section-title' className='text-center text-4xl text-white font-semibold'><SchoolIcon fontSize='inherit' className='text-white' /> My education</h2>
        <p className='text-center text-3xl text-white mt-8'>
          I'm currently a 3rd year student taking up Bachelor of Science <br/>
          in Computer Engineering at the Polytechnic University of the Philippines
        </p>
        <div className='flex-1 grid grid-cols-4 grid-rows-1 h-full items-end pb-28'>
          <div className='px-4 col-start-1'>
            <JuniorHighSchool />
          </div>
          <div className='px-4 col-start-2 col-end-4'>
            <College />
          </div>
          <div className='px-4 col-start-4'>
            <SeniorHighSchool />
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className='bg-cxgreen h-screen flex flex-col p-4'>
        <h2 id='section-title' className='text-center text-4xl text-white font-semibold'><LocalLibraryIcon fontSize='inherit' className='text-white' /> Here's what I know...</h2>
        <p className='text-center text-3xl text-white mt-8'>And I can learn more!</p>
        <div className='flex flex-row flex-wrap gap-3 justify-center mt-6'>
          {skillsDisplay}
        </div>
      </section>
      {/* Certs Section */}
      <section className='bg-gradient-to-b from-cxgreen via-cxgreen to-cxgreen-light h-screen flex flex-col p-4'>
        <h2 id='section-title' className='text-center text-4xl text-white font-semibold'><CollectionsIcon fontSize='inherit' className='text-white' /> What I've gained so far...</h2>
        <p className='text-center text-3xl text-white mt-8'>And I can gain more!</p>
        <div className='mt-4 flex flex-col h-full'>
          <Staging 
            previousCard={previousCard}
            currentCard={currentCard}
            nextCard={nextCard}
          />
          <Actions
            active={active}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        </div>
      </section>
      {/* Contacts Section */}
      <section className='bg-cxgreen-light h-half flex flex-row p-4'>
        <div className='flex-1 flex flex-col justify-center items-center'>
          <h2 className='text-center text-5xl text-cxdark font-semibold'>Interested?</h2>
          <h3 className='text-center text-4xl text-cxdark mt-4'>Let's grab coffee! <LocalCafeIcon fontSize='inherit' /></h3>
        </div>
        <div className='flex-1 flex flex-col justify-center'>
          <h4 className='text-3xl text-cxdark font-medium'> <EmailIcon fontSize='inherit' /> jericoclemente9@gmail.com</h4>
          <h4 className='text-3xl text-cxdark font-medium mt-4'> <CallIcon fontSize='inherit' /> +63 927 236 5437</h4>
        </div>
      </section>
    </div>
  );
}

export default App;
