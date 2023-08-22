import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Home.css"
import electonics from "./acimg/home/electronics.jpg"
import health from "./acimg/home/health.jpg"
import school from "./acimg/home/school.jpg"
import toy from "./acimg/home/toy.jpg"

function Home() {
  return (
    <div className='hm'>
      <div className="arr">
      <div className='arrow'>
      <ArrowBackIosIcon sx={{ fontSize: 50}}/>
      </div>

      <div className='arrow'>
      <ArrowForwardIosIcon sx={{ fontSize: 50} }/>
      </div>
      </div>

      <div className='home_line'>
        You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. Click here to go to amazon.in
      </div>

      <div className="home_row">
        <div className="row_prod">
          <div className='pro_head'>Health & Personal Care</div>
          <img src={health} alt="health" />
        </div>
        <div className="row_prod">
          <div className='pro_head'>Electronics</div>
          <img src={electonics} alt="image" />
        </div>
        <div className="row_prod">
          <div className='pro_head'>Shop school essentials</div>
          <img src={school} alt="school" />
        </div>
        <div className="row_prod">
          <div className='pro_head'>Toy Under $30</div>
          <img src={toy} alt="toy" />
        </div>

      </div>

    </div>
  )
}

export default Home