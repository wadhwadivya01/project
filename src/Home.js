import React ,{ useState, useEffect } from 'react'
import web from "../src/images/image1.jpg"
import { FcBusinesswoman } from 'react-icons/fc'


const Home = () => {

  const [index, setIndex] = useState(0);
  const texts = ["React Developer", "UI Designer", "Frontend Enthusiast", "Angular Developer", "Dedicated Programmer" , "Team Person"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % texts.length);
    }, 1200);

    return () => clearInterval(intervalId);
  }, [index, texts.length]);

  return (
    <>
      <main>
      {/* <div className="grid-container"> */}
        {/* <div className="item1"> */}
           <h2 className='headings' style={{marginTop:"50px"}}>Hi, I'm Divya <FcBusinesswoman/></h2>
           <p id='homeP'>and I am a <span style={{color:"red"}}>{texts[index]}</span></p>
      <div className="grid-container" style={{marginTop: "-25px"}}>
      <div className="item1">

          <p className='para'>A passionate Frontend Developer with a special interest in React and other frontend technologies. With several years of experience building web applications with JavaScript and React, as well as other cool libraries and frameworks, I've developed a strong foundation in frontend development and am committed to staying up-to-date with the latest trends and best practices.</p>
        </div>
        <div className="item2 image">
          <img className='images' src={web} alt='profile' />
        </div>
      </div>
      </main>
    </>
  )
}

export default Home