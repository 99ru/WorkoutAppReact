import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import VideoLoop from "./components/video/VideoLoop";
import Nav from "./components/nav/Nav";
import Cards from "./components/workouts/Cards";
import ModalData from "./components/modal/ModalData";

const URL =
  "https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [filter, setFilter] = useState("");
  const [genderToggle, setGenderToggle] = useState("mens");
  const [modal, setModal] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const selectFilter = (e) => setFilter(e.target.id);
  const selectGender = (e) => setGenderToggle(e.target.id);
  const toggleModal = () => setModal(!modal);
  const showWorkout = (id) => {
    setSelectedWorkout(id);
    setModal(true);
  };
  const filteredWorkouts = workouts.filter((workout) => {
    return workout.bodyAreas.includes(filter);
  });
  console.log(filteredWorkouts);

  useEffect(() => {
    const fetchURL = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setWorkouts(data.exercises || []);
      console.log(data.exercises);
    };
    fetchURL();
  }, []);

  return (
    <div>
      <Header />
      <VideoLoop />
      <Nav
        genderToggle={genderToggle}
        selectGender={selectGender}
        selectFilter={selectFilter}
      />
      <div className="main-content">
        <Cards
          workouts={filteredWorkouts}
          showWorkout={showWorkout}
          genderToggle={genderToggle}
        />
      </div>
      <ModalData 
        workouts={workouts}
        modal={modal}
        toggleModal={toggleModal}
        genderToggle={genderToggle}
        selectedWorkout={selectedWorkout}
      />
    </div>
  );
}

export default App;
