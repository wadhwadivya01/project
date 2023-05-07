import React from 'react'
import { FcNeutralDecision } from 'react-icons/fc'
import image from './images/infosys-logo-png.png'

const Experience = () => {
  return (
    <>
      <main>
      <h2 className='headings underline center'>Experience<FcNeutralDecision /></h2>


<div className='flex'>
  <div className='gridExp'>
    <div className='logo'>
    <img className='infy' src={image} alt="Infosys logo"/>
    <h4 >Infosys</h4>
    <p>June 2021 - Till Date</p>
    </div>
    <div className='experience'>
      <h3 style={{color : "black", paddingTop:"10px"}}>React Developer</h3>
      
      <h5 style={{color : "black"}}>Responsibilities</h5>

      <ul className='list'>
        <li>Designing the structure and UI of the pages</li>
        <li>Making the required changes suggested by client</li>
        <li>Writing clean and standard code</li>
        <li>Helping fellow colleagues with their problems</li>
        <li>Fixing any problems in previously written code</li>
        <li>Develop and maintain high-quality, reusable React components.</li>
        <li>Collaborate with designers and other developers to implement user interfaces and features.</li>
        <li>Write and maintain unit tests to ensure code quality</li>
        <li>Optimize the performance of React applications and components.</li>
        <li>Debug and fix issues that arise in React applications.</li>
        <li>Communicate effectively with team members</li>


      </ul>
    </div>
  </div>
</div>

      </main>
    </>
  )
}

export default Experience