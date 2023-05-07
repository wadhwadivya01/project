import React from 'react'
import web from "../src/images/computer.jpg"
import { FcReading } from 'react-icons/fc'

const About = () => {
  return (
    <>

     <main>
     <div id='about' className="grid-container">
        <div className="item2 image">
          <img className='images' src={web} alt='profile' />
        </div>
        <div className="item1">
          <h2 className='headings underline' style={{textAlign:"center"}}>About Me <FcReading /> </h2>
          <p className='para'>I am a skilled frontend developer with a Bachelor of Computer Applications (BCA) degree from Kurukshetra University. After completing my degree, I pursued additional training in Angular at Infosys, where I gained in-depth knowledge of how to use this technology to build complex applications. Later on, I worked on a project that required me to use React, which I quickly adapted to and mastered its syntax and workflow. My experience with both Angular and React has equipped me with a comprehensive understanding of frontend development.</p>
          <p className='para'> For me, frontend development is more than just a job – it's a true passion. I love exploring new technologies and pushing the boundaries of what's possible, and I'm committed to delivering work that reflects my passion for this field.</p>
          
        </div>
      </div>
     </main>
    </>
  )
}

export default About