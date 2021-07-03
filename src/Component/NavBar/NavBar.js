import React from 'react'
import{Navbar ,Nav, }from 'react-bootstrap';
import StarRatingComponent from "react-star-rating-component";
import { NavLink   } from "react-router-dom";
import "./Navbar.css"

const NavBar = ({rate ,searchTerm,setRate,setSearchTerm,setHandleShow} ) => {
     
    const handleChange = event => {
        setSearchTerm(event.target.value);
      };

      const handleshow = () => {
        setHandleShow(true);
      };

    return (
    <div >
        <Navbar style={{background:'#ffcdd2',height:70}} variant="dark">
        <div className="form">        
            <div className="nav">
            <div className="nav_link">
            <NavLink to="/" className="link">Home</NavLink>
            </div>
            </div>
            <div className="starplusinput"> 
            <StarRatingComponent name="rate" className="reactstars" starCount={5}
                    value={rate}
                    onStarClick={(nextValue, prevValue) =>
                        setRate(nextValue, prevValue)
                    } />

            <input type="text" placeholder="Search" className="input" value={searchTerm} onChange={handleChange} />
            
            <button className="Add_btn" onClick={handleshow} >Add Movie</button>
            
            </div>   
               
    </div>
        </Navbar>
    </div>
    )
}

export default NavBar
