import { IoPersonOutline } from "react-icons/io5";
import "/src/components/styling/CardContainer.css";

function MyCourseCardContainer({ data }) {
  return (
    <div className="cardContainer">
      <div className="cardData">
        {data?.map((item, index) => (
          <div className="card" key={index}>
            <img src={item?.cardImg} alt="Card Img" className="cardImg" />
            <div className="cardContent">
              <h4>{item.cardContent}</h4>
              <p className="cardAuthor">
                <IoPersonOutline />
                <p>{item.cardAuthor}</p>
              </p>
              {item.cardDescription === "Completed!" ? (
                <p className="cardDescription" style={{ color: "#3DCBB1" }}>
                  {item.cardDescription}
                </p>
              ) : (
                <p className="cardDescription">{item.cardDescription}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCourseCardContainer;
