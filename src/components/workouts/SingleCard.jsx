import "./card.css";

const SingleCard = ({ name, genderToggle, femaleImage, maleImage }) => {
  return (
    <div className="single-card-container">
      <img
        src={genderToggle === "womens" ? femaleImage : maleImage}
        alt={name}
      />
      <div className="card-content">
        <h3>{name}</h3>
        <button className="card-button">Details</button>
      </div>
    </div>
  );
};

export default SingleCard;
