import { IoPersonOutline } from "react-icons/io5";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import "./cardContainer.css";

function CardContainer({ header, heading, data }) {
  return (
    <div className="studio-card">
      <h3>{header}</h3>
      <span>{heading}</span>
      <div className="cards-container">
        {data?.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.cardImg} alt="Card Img" className="card-img" />
            <div className="card-content">
              <h4>{item.cardContent}</h4>
              <p className="card-author">
                <IoPersonOutline /> {item.cardAuthor}
              </p>
              <p className="card-description">{item.cardDescription}</p>
              <p className="card-rating">
                {item.cardRating}
              </p>
              <p className="card-price">{item.cardPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
