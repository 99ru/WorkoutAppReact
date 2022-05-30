import "./card.css";

const SingleCard = ({ name, genderToggle, femaleImage, maleImage, showWorkout, id}) => {
  return (
    <div className="single-card-container">
      <img  src={genderToggle === "womens" ? femaleImage : maleImage}  alt={name}/>
      <div className="card-content">
        <h3>{name}</h3>
        <button onClick={() => showWorkout(id)} className="card-button">Details</button>
        <button className="card-button">Add to list</button>
      </div>
    </div>
  );
};

export default SingleCard;
