import CardModal from "./CardModal";

const CardData = ({
  workouts,
  genderToggle,
  selectedWorkout,
  modal,
  toggleModal,
}) => {
return (
  <>
    {workouts
        .filter((workout) => workout.id === selectedWorkout)
        .map((filteredWorkout) => (
          <CardModal
            key={filteredWorkout.id}
            workout={filteredWorkout}
            modal={modal}
            toggleModal={toggleModal}
            genderToggle={genderToggle}
          />
        ))}
  </>
)
};

export default CardData