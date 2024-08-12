import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoPersonOutline } from 'react-icons/io5';
import CardRatingComponent from './CardRatingComponent';

import '/src/styling/CardContainer.css';

function CardContainer({ header, heading, data }) {
  const cardValue = useSelector((state) => state.card.cardValue);
  const navigate = useNavigate();

  // Filter data based on cardValue from Redux store
  const filteredData = data?.filter(
    (item) =>
      item.cardCategory === cardValue || cardValue === 'All Recommendation'
  );

  // Handle image click to navigate based on itemCategory
  const handleImgClick = (itemCategory) => {
    if (itemCategory === 'Web Programming') {
      navigate('/paidOfflineVideo1');
    } else {
      navigate('/paidWebinar');
    }
  };

  return (
    <div className="cardContainer">
      {filteredData && filteredData.length > 0 ? (
        <>
          <h3>{header}</h3>
          <span>{heading}</span>
          <div className="cardData">
            {filteredData.map((item, index) => (
              <div className="card" key={index}>
                <img
                  src={item?.cardImg}
                  alt="Card Img"
                  className="cardImg"
                  onClick={() => handleImgClick(item.cardCategory)}
                />
                <div className="cardContent">
                  <h4>{item.cardContent}</h4>
                  <p className="cardAuthor">
                    <IoPersonOutline />
                    <span>{item.cardAuthor}</span>
                  </p>
                  <p className="cardDescription">{item.cardDescription}</p>
                  <span className="cardRatingSpan">
                    <p className="cardRating">
                      <CardRatingComponent cardRating={item.cardRating} />
                    </p>
                    <p>{item.cardTotalRating}</p>
                  </span>
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
        <h2 className="noDataMessage">No Data In "{header}"</h2>
      )}
    </div>
  );
}

export default CardContainer;
