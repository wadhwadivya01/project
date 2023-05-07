import React from 'react'

const Common = (props) => {
    return (
        <>
            <div className='sameWidth'>
                <div className='grid'>
                    <div className='tick'>
                        <span class="material-symbols-outlined">
                            done_all
                        </span>
                    </div>
                    <div className='data'>{props.data}</div>
                </div>
            </div>


        </>
    )
}

export default Common