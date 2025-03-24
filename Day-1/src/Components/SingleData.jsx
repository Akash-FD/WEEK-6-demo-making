import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx';

const SingleData = ({ singleDetail }) => {
  
    return (
        <>
           <div className='absolute top-[20%] left-[40%] w-[400px] border bg-white p-3'>
                <div className=' flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={singleDetail.links.mission_patch_small} alt="" width={150} />
                        <div>
                            <p>{singleDetail.mission_name}</p>
                            <p>{singleDetail.rocket.rocket_name}</p>
                        </div>
                    <RxCross2 className='text-3xl'/>   
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingleData