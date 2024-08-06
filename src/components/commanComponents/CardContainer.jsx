import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import "/src/components/styling/CardContainer.css";
import { CardContext } from "../contextProvider/CardFilter";

function CardContainer({ header, heading, data }) {
  const { cardValue } = useContext(CardContext);

  const navigate = useNavigate();

  const filteredData = data?.filter(
    (item) =>
      item.cardCategory === cardValue || cardValue === "All Recommendation"
  );

  const handleImgClick = (itemCategory) => {
    if(itemCategory === "Web Programming") {
      navigate('/paidOfflineVideo1')
    } else {
      navigate('/paidWebinar')
    }
  }

  return (
    <div className="cardContainer">
      {filteredData && filteredData.length > 0 ? (
        <>
          <h3>{header}</h3>
          <span>{heading}</span>
          <div className="cardData">
            {filteredData.map((item, index) => (
              <div className="card" key={index}>
                <img src={item?.cardImg} alt="Card Img" className="cardImg" onClick={() => handleImgClick(item.cardCategory)}/>
                <div className="cardContent">
                  <h4>{item.cardContent}</h4>
                  <p className="cardAuthor">
                    <IoPersonOutline />
                    <span>{item.cardAuthor}</span>
                  </p>
                  <p className="cardDescription">{item.cardDescription}</p>
                  <p className="cardRating">{item.cardRating}</p>
                  <p className="cardNewPrice">
                    {item.cardNewPrice}
                    <span className="cardOldPrice">{item.cardOldPrice}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h2 className="noDataMessage">No Data In " {header} "</h2>
      )}
    </div>
  );
}

export default CardContainer;
