const FilteredWorkout = ({ selectFilter }) => {
  return (
    <div className="bodypart-buttons">
        <button id="Shoulders" onClick={selectFilter}>Shoulders</button>
        <button id="Back" onClick={selectFilter}>Back</button>
        <button id="Chest" onClick={selectFilter}>Chest</button>
        <button id="Legs" onClick={selectFilter}>Legs</button>
        <button id="Glutes" onClick={selectFilter} >Glutes</button>
        <button id="Biceps" onClick={selectFilter}>Biceps</button>
        <button id="Triceps" onClick={selectFilter}>Triceps</button>
        <button id="Core" onClick={selectFilter}>Core</button>
    </div>
  );
};

export default FilteredWorkout;