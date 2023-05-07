import React from 'react'
import { FcCheckmark } from 'react-icons/fc'
import Data from './Data'
import Common from './Common'

const WhatIDo = () => {
  return (
    <>
      <main>
      <h2 className='headings underline center mt-2'>What I Do? <FcCheckmark /></h2>

<div className='flex'>

  {Data.map((currVal) => {
    return <Common data={currVal.data} />
  })}

</div>
      </main>
    </>
  )
}

export default WhatIDo