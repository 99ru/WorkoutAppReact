import "./modal.css";

const CardModal = ({ modal, toggleModal, workout, genderToggle }) => {

  return (
    <>
      {modal ? (
        <main className="modal-container">
          <article className="modal-content">
          <h3>{workout.name}</h3>
            <button type="button" onClick={toggleModal}>Close</button>
            {genderToggle === "mens" ? (
              <img src={workout.male.image} alt={workout.name} />
            ) : (
              <img src={workout.female.image} alt={workout.name} />
            )}
           <strong> <p>{workout.bodyAreas[0]}  {workout.bodyAreas[1]}</p>  </strong>
            <div
              className="modal-description"
              dangerouslySetInnerHTML={{ __html: workout["transcript"] }}
            ></div>
          </article>
        </main>
      ) : null}
    </>
  );

};

export default CardModal;
