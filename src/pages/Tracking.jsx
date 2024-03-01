import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sticky from '../components/Sticky'

function Tracking() {
  return (
    <div className='min-h-lvh'>
      <Header message="Tracking Bus"/>
      <div className='h-[75vh] w-full'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.378803922053!2d85.33173377401474!3d27.70558822557165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1999ce231acd%3A0xef773857c30983e2!2sSunway%20College%20Kathmandu%20%7C%20Data%20Science%20%7C%20Digital%20Marketing!5e0!3m2!1sne!2snp!4v1709290641145!5m2!1sne!2snp"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </div>
      <Sticky className=""/>
      <Footer id={2}/>  
    </div>
  )
}

export default Tracking