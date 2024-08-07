import "/src/styling/InstructorCard.css";

function InstructorCard({ header, heading, data }) {
  return (
    <div className="instructorCardDataContainer">
      <h3>{header}</h3>
      <span>{heading}</span>
      <div className="instructorCardsContainer">
        {data.map((item, index) => (
          <div className="instructorCard" key={index}>
            <img src={item.popularInstructorimg} alt="Instructor" className="instructorCardImg" />
          </div>
        ))}
      </div>
    </div>
  );
}


export default InstructorCard;
