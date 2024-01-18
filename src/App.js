import React from "react";
import NavBar from "./Componets/NavBar/NavBar";
import {originals,action,ComedyMovies} from './urls'
import './App.css'
import Banner from "./Componets/Banner/Banner";
import RowPost from "./Componets/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url= {action} title='Actions' isSmall/>
      <RowPost url={ComedyMovies} title='Comedy' isSmall/>
    </div>
  );
}

export default App;
