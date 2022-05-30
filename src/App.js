import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import VideoLoop from "./components/video/VideoLoop";
import Nav from "./components/nav/Nav";
import Cards from "./components/workouts/Cards";
import CardData from "./components/modal/CardData";

const URL =
  "https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [genderToggle, setGenderToggle] = useState("mens");
  const [modal, setModal] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const selectGender = (e) => setGenderToggle(e.target.id);
  const toggleModal = () => setModal(!modal); 
  const showWorkout = (id) => {
    setSelectedWorkout(id);
    setModal(true);
  };

  useEffect(() => {
    const fetchURL = async () => {
      const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        if (data && Array.isArray(data.exercises)) {
          setWorkouts(data.exercises || []);
        } else {
          console.log("No data");
        }
    }
    fetchURL();
  }, []);

  return (
    <div>
      <Header />
      <VideoLoop />
      <Nav genderToggle={genderToggle} selectGender={selectGender} />
      <div className="main-content">
        <Cards
          workouts={workouts}
          showWorkout={showWorkout}
          genderToggle={genderToggle}
        />
      </div>
      <CardData
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
