import "./card.css";

const SingleCard = ({ name, genderToggle, femaleImage, maleImage,   }) => {
  return (
    <div className="card-item-container">
       <img src={genderToggle === "womens" ? femaleImage : maleImage} alt={name} />
      <div className="card-content">
        <h2>{name}</h2>
        <button className="card-button">Details</button>
      </div>
    </div>
  );
};

export default SingleCard;
