import React from 'react';
import './App.css';
import Nav from "./components/Nav";

import Greeting from "./components/Greeting"
import ProductList from './components/ProductList';

//props

function App() {
  return (
    <>
     <Greeting name="Wie2019" />
    <div className="App">
         hello React 
        
         <Nav />

         <ProductList />
    </div>
    </>
  );
}

export default App;
