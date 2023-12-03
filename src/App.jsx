import React from "react";
import Header from "./component/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";

const App = () => {
  return (
    <>
        <div className="container">
        <BrowserRouter>
          <Header />
           <Home/>
        </BrowserRouter>
        </div>
      
    </>
  );
};

export default App;
