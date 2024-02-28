import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Box from '../components/Box'
import photo1 from "../assets/Post1.png"
import photo2 from "../assets/Post2.png"
function Navigate() {
  return (
    <div>
        <Header />
        <div className="w-11/12 mx-auto">
            <Box title="Real time Tracking" color="text-pink-500" img={photo1}/>
            <Box title="Attendence" color="text-pink-500" img={photo2}/>
        </div>
        <Footer id="1"/>
    </div>
  )
}

export default Navigate