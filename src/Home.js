import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Home.css"

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

    </div>
  )
}

export default Home