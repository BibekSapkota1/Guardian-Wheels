import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Blue from '../components/Blue'

function Setting() {
  return (
    <div>
        <Header message="Setting"/>
        <Blue/>
        <Footer id={3}/>
    </div>
  )
}

export default Setting