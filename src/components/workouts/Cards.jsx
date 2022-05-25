import SingleCard from "./SingleCard";
import "./card.css";

const Cards = ({ workouts, genderToggle }) => {
  return (
    <div>
      {workouts.map((exercise) => (
        <SingleCard
          key={exercise.id}
          genderToggle={genderToggle}
          name={exercise.name}
          femaleImage={exercise.female.image}
          maleImage={exercise.male.image}
          id={exercise.id}
        />
      ))}
    </div>
  );
};

export default Cards;
