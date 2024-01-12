import React from 'react';
import './App.css';
import Navbar1 from "./components/navbar"

import Music from './music.json';
const App = () => {

  return(
      <center>
    <div>
       <Navbar1></Navbar1>
       <br/>
      <div className='row'>
     
        {Music.map(item=>{
          return(
            <center>
            <div className='col-md-3' key={item.id}>
              <div className='card'>
                <center><img src={item.image} className="card-img-top" alt={item.title}/></center>
                <div className='card-body'>
                  <h5 className='card-title'>{item.title} - {item.movie}</h5>
                 <center><audio  style={{ width:'20vw'}}controls src={item.song}/></center> 
                  </div>
                </div>
              </div>
              </center>
          )
        })}
      </div>
    </div>
    </center>
  )
    }

export default App

