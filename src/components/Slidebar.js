import React from "react";

function SlideBar(){
    return(
      <div className="slidebar inter-font">
          <p className='title'><span style={{color : "#f7542e", fontWeight: "bold"}}> Dev</span>challenges.io</p>
          <ul>
            <li><a href="#">Colors</a></li>
            <li><a href="#">Typography</a></li>
            <li><a href="#">Spaces</a></li>
            <li><a href="#">Buttons</a></li>
            <li><a href="#" className='active'>Inputs</a></li>
            <li><a href="#">Grid</a></li>
          </ul>
        </div>
    )
  }

export default  SlideBar;