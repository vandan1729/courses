import './subscribeCard.css';
import { IoSearchOutline } from "react-icons/io5";
function SubscribeCard() {
  return (
    <div className="subscribe-banner">
      <div className="subscribe-text">
        <h2>Join and get amazing discount</h2>
        <p>With our responsive themes and mobile and desktop apps</p>
      </div>
      <div className="subscribe-form">
        <input type="text" placeholder="Email Address" className="email-input" />
        <IoSearchOutline className="subscribe-search-icon" />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  );
}

export default SubscribeCard;
