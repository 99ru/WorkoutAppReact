import React, {  useEffect } from "react";
import './App.css';
import Header from './components/header/Header';
import VideoLoop from './components/video/VideoLoop';


const URL = "https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/";

function App() {

  useEffect(( ) => {
  const fetchData = async () =>{
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
    }
    catch(error){
      console.log(error)
    }
  }
  fetchData(); 

  }, []); 

    return (
      <div>
       <Header />
        <VideoLoop />
      </div>
    )

}

export default App;
