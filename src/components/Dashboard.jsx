
import React, { useState } from 'react';
import "../assetss/css/dashboard.css";


import DopiSoft from "../assetss/img/DopiSoft.png";


 import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
 import { Link } from "react-router-dom";



const Dashboard = () => {
   
  const [toggled,setToggled]=useState("d-flex")

  const changeStyle =()=>{

    setToggled(toggled==="d-flex"?"d-flex toggled":"d-flex")
   /* if(toggled==="d-flex"){
      setToggled("d-flex toggled");
    }else{
      setToggled("d-flex");
    }*/

    
  }


  
  return (
    <>
     
    <div class="d-flex align-items-center">
                    <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                    <h2 class="fs-2 m-0">< img onClick={changeStyle} src="https://img.icons8.com/ios-glyphs/60/null/menu-rounded.png"/> Dashboard</h2>
                </div>
             

      <div className={toggled} id="wrapper">
        <div className="bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading text-center py-3 primary-text fs-4 fw-bold text-uppercase border-bottom">
            
            <img src={DopiSoft} width="150px" alt="User Icon" cl  /> 
            <i >
             
             <h6 className="mt-1 h6 "><strong> Electronic & Software Engineer</strong></h6>
                        </i>
          </div>
          <div className="list-group list-group-flush my-3">
           
            <a
              href="#"
              className="list-group-item list-group-item-action bg-transparent second-text active"
            >
              
              <Link to ="/dashboard/content1"> 
              <i className="fas fa-tachometer-alt me-2"></i>Inicio
              </Link>
             </a>
            
            <a

              href="#"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <Link to ="/dashboard/content2">    
              <i className="fas fa-comment-dots me-2"></i>Chat
              </Link>
            </a>
         
                 
            
            <a
              href="#"
              className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
            >

              <Link to ="/">    
              <i className="fas fa-power-off me-2"></i>Logout
              </Link>
              
            </a>
          </div>
        </div>

        <div id="page-content-wrapper">
          
                       

          <Outlet/>

         
         
         
        </div>
      </div>
    </>
  );
};

export default Dashboard;
