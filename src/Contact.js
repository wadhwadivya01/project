import React from 'react'
import { FcPhone , FcCloseUpMode} from 'react-icons/fc'
import linked_in from "./images/linkedin.svg"
import email from "./images/envelope-solid.svg"
import location from "./images/location-dot-solid.svg"
import ContactCommon from './ContactCommon'

const Contact = () => {

  // const profile = "https://www.linkedin.com/in/divya-wadhwa-3a3249215"

  return (
    <>
      <main><h2 className='headings underline center mt-2'> Contact <FcPhone /></h2>

<div className='flex center'>

  <ContactCommon className="one"
    img={linked_in}
    heading="LinkedIn"
    data1="DivyaWadhwa"
  />
  <ContactCommon className="two"
    img={email}
    heading="Email"
    data="wadhwadivya01@gmail.com"
  />
  <ContactCommon className="two"
    img={location}
    heading="Location"
    data="Chandigarh,India"
  />
</div>

<div className='footer'>
<h5>Feel free To Contact</h5>

Hello Everyone! Have a great day  <FcCloseUpMode style={{fontSize:"20px"}}/> I am here to help you. If you want to know something or you have any suggestion then please mail me. Thank You. 
</div></main>
    </>
  )
}

export default Contact