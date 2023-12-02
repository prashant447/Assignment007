import React from "react";
import Header from "./component/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";

const App = () => {
  return (
    <>
      
        <BrowserRouter>
          <Header />
           <Home/>
        </BrowserRouter>
      
    </>
  );
};

export default App;
