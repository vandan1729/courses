import Navbar3 from '../navbar3/Navbar3';
import './heroSection.css';

function HeroSection() {
  return (
    <div className='main-HeroSection-Div'>
      <Navbar3 />
      <div className='heroSection-Content'>
        <h2>Learn something new everyday.</h2>
        <p>Become professionals and ready to join the world.</p>
      </div>
      <div className='heroSection-Filter'>
        <h2>What do you want to learn?</h2>
        <div className='heroSection-Filter-Inputs'>
          <input type='text' placeholder='Find courses, skills, software, etc' />
          <input type='text' placeholder='Categories' />
          <input type='text' placeholder='Topic' />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
