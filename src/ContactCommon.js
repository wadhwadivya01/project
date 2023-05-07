import React from 'react'
import {Link} from 'react-router-dom'

const Contact_common = (props) => {
    return (
        <>
            <div className='styleContact'>
                <img className='contact_images' src={props.img} alt="linkedIn " />
                <h4>{props.heading}</h4>
                <p className='pContact'>{props.data}</p>
                <Link style={{}} to="https://www.linkedin.com/in/divya-wadhwa-3a3249215">{props.data1}</Link>

            </div>
        </>
    )
}

export default Contact_common