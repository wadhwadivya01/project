import React from 'react'
import { FcDatabase } from 'react-icons/fc'

const Skills = () => {

  return (
    <>
  <main>
  <h2 className='headings underline center mt-2'>Skills <FcDatabase /></h2>
 <div className='skillsBox'>

<h4>React</h4>
 <div className="progress" role="progressbar">
  <div className="progress-bar" style={{width: "85%" , background : "red"}}></div>
</div>

<h4>JavaScript</h4>
 <div className="progress" role="progressbar">
  <div className="progress-bar" style={{width: "81%" , background : "orange"}}></div>
</div>

<h4>Redux</h4>
 <div className="progress" role="progressbar">
  <div className="progress-bar" style={{width: "70%" , background : "#d63384"}}></div>
</div>

<h4>HTML</h4>
 <div className="progress" role="progressbar">
  <div className="progress-bar" style={{width: "95%" , background : "green"}}></div>
</div>

<h4>CSS</h4>
 <div className="progress" role="progressbar">
  <div className="progress-bar" style={{width: "95%" , background : "skyblue"}}></div>
</div>

<h4>Bootstrap</h4>
 <div className="progress" role="progressbar">
  <div className="progress-bar" style={{width: "90%" , background : "indigo"}}></div>
</div>

<h4>Material UI</h4>
 <div className="progress" role="progressbar">
  <div className="progress-bar" style={{width: "100%" , background : "violet"}}></div>
</div>

<h4>Angular</h4>
 <div className="progress" role="progressbar">
  <div className="progress-bar" style={{width: "50%" , background : "orange"}}></div>
</div>

<h4>Jest</h4>
 <div className="progress" role="progressbar">
  <div className="progress-bar" style={{width: "60%" , background : "blue"}}></div>
</div>

<h4>Git</h4>
 <div className="progress" role="progressbar">
  <div className="progress-bar" style={{width: "95%" , background : "#198754"}}></div>
</div>

<h4>Postman</h4>
 <div className="progress" role="progressbar">
  <div className="progress-bar" style={{width: "100%" , background : "purple"}}></div>
</div>

 </div>
  </main>
    </>
  )
}

export default Skills