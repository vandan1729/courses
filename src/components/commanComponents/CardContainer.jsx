import { IoPersonOutline } from "react-icons/io5";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import "/src/components/styling/CardContainer.css";

function CardContainer({ header, heading, data }) {
  return (
    <div className="cardContainer">
      <h3>{header}</h3>
      <span>{heading}</span>
      <div className="cardData">
        {data?.map((item, index) => (
          <div className="card" key={index}>
            <img src={item?.cardImg} alt="Card Img" className="cardImg" />
            <div className="cardContent">
              <h4>{item?.cardContent}</h4>
              <p className="cardAuthor">
                <IoPersonOutline />
                <p>{item?.cardAuthor}</p>
              </p>
              <p className="cardDescription">{item?.cardDescription}</p>
              <p className="cardRating">{item?.cardRating}</p>
              <p className="cardNewPrice">{item?.cardNewPrice}<p className="cardOldPrice">{item?.cardOldPrice}</p></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
