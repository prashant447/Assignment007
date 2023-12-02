import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import "./Header.css";


const Header = () => {
  return (
    <>
     <header>
        <nav>
        <div className="logo">
           <h2>AIPatrn</h2>
       </div>

       <div className="menu">
        <ul>
            <Link to= "#">Home page</Link>
            <Link to= "#">Generator</Link>
            <Link to= "#">Pricing-plan</Link>
            <Link to= "#">Blog-News</Link>
        </ul>

        <ul>
            <Link to= "#">About us</Link>
            <Link to= "#">Features</Link>
            <Link to= "#">Collection-2023</Link>
            <Link to= "#">Carrer</Link>
        </ul>
       </div>

       <div className='menu-btns'>
        <Link className='menu-btn'>Menu<IoMdArrowDropdown className='svg1'/></Link>

       </div>


      
        </nav>
       
        
     </header>


      
    </>
  )
}

export default Header
