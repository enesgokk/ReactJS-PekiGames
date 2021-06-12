import React from 'react'


import './App.css';

import {Route,Switch} from "react-router-dom"
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Detail from "./components/Detail";




function App() {
  return (
    <div class="App">
	    <Header name="enes"/>
	    <Content/>
	    <Footer/>

    </div>
  );
}

export default App;
