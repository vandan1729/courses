import Navbar3 from "./Navbar3";
import "../styling/HeroSection.css";

function HeroSection() {
  return (
    <div className="mainHeroSectionDiv">
      <Navbar3 />
      <div className="heroSectionContent">
        <h2>Learn something new everyday.</h2>
        <p>Become professionals and ready to join the world.</p>
      </div>
      <div className="heroSectionFilter">
        <h2>What do you want to learn?</h2>
        <div className="heroSectionFilterInputs">
          <input
            type="text"
            placeholder="Find courses, skills, software, etc"
          />
          <input type="text" placeholder="Categories" />
          <input type="text" placeholder="Topic" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
