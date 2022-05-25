import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import VideoLoop from "./components/video/VideoLoop";
import Cards from "./components/workouts/Cards";
import Nav from "./components/nav/Nav";

const URL =
  "https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [genderToggle, setGenderToggle] = useState("womens");
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        if (data && Array.isArray(data.exercises)) {
          setWorkouts(data.exercises || []);
        } else throw new Error("No data");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
  const selectGender = (e) => setGenderToggle(e.target.id);

  return (
    <div>
      <Header />
      <VideoLoop />
      <Nav
        genderToggle={genderToggle}
        selectGender={selectGender}
       />
      <div className="main-content">
      <Cards 
      workouts={workouts} 
      genderToggle={genderToggle} />
      </div>
      
    </div>
  );
}

export default App;
