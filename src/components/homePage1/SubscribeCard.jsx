import "../../styling/SubscribeCard.css";
import { IoSearchOutline } from "react-icons/io5";

function SubscribeCard() {
  return (
    <div className="subscribeBanner">
      <div className="subscribeText">
        <h2>Join and get amazing discount</h2>
        <p>With our responsive themes and mobile and desktop apps</p>
      </div>
      <div className="subscribeForm">
        <input type="text" placeholder="Email Address" className="emailInput" />
        <IoSearchOutline className="subscribeSearchIcon" />
        <button className="subscribeButton">Subscribe</button>
      </div>
    </div>
  );
}

export default SubscribeCard;
