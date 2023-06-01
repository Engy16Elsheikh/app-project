import React from 'react'
import Headerimg from '../Assets/doctor.7c2bc96d.png'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee, faSquare } from '@fortawesome/free-solid-svg-icons'
import './Home.css'
import { Link } from 'react-router-dom'
const Home=()=>{
    return(
      <header>
        <div className="container"> 
          <div className="row">
           <div className="col-mid-6 col-lg-6">
            <h5>we provide All Health care solutions</h5>
            <h2>protect your health and takecare of your health</h2>
            <Link to='/login'><button>login</button></Link> 
            <span>+</span>
           </div>
           <div className="col-lg-6 col-md-6">
             <div className="header-box">
              <img src={Headerimg}/>
             </div>
           </div>
          </div>
        </div>
      </header>
    )
}
export default Home