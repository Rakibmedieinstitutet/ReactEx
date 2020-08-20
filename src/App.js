import React from 'react';
import './App.css';
import Nav from "./components/Nav";

import Greeting from "./components/Greeting"
import ProductList from './components/ProductList';
import LifeCycleTest from "./components/LifeCycleTest"

//testa node module is not found


//npm i axios

// axios.get
//axios.post
//axios.put
//axios.delete

//props

function App() {
  return (
    <>
     <Greeting name="Wie2019" />
    <div className="App">
         hello React 
        
        
         <LifeCycleTest />

         
        
    </div>
    </>
  );
}

export default App;
