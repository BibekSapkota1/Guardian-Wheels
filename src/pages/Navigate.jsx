import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Box from '../components/Box'
import photo1 from "../assets/Post1.png"
import photo2 from "../assets/Post2.png"
import { Link } from 'react-router-dom'
function Navigate() {
  return (
    <div className='w-full'>
        <Header message="Hi, Solomon" />
        <div className="w-11/12 mx-auto">
          <Link to="/tracking">
           <Box title="Real time Tracking" color="text-pink-500" img={photo1}/>
          </Link>
            <Box title="Attendence" color="text-pink-500" img={photo2}/>
        </div>
        <Footer id="1"/>
    </div>
  )
}

export default Navigate