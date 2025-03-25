import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx';

const SingleData = ({ singleDetail }) => {
    // console.log(singleDetail);
    // const [close, setClose] = useState(true)

    // const handleCancel =()=>{
    //     if(Object.keys(singleDetail).length>0){
    //     setClose(false)
    //     }else{
    //         setClose(true)
    //     }
    // }
    
  return (
        <>
          <div className='absolute top-[20%] left-[40%] w-[450px] border bg-white p-5 shadow-md rounded-md text-sm'>
                <div className=''>
                    <div className='flex items-center justify-around'>
                        <img src={singleDetail.links.mission_patch_small} alt="" width={130} />
                        <div className='mr-24'>
                            <p className='text-xl'>{singleDetail.mission_name}</p>
                            <p className='text-xl'>{singleDetail.rocket.rocket_name}</p>
                        </div>
                    <RxCross2 className='text-3xl hover:text-red-500' />   
                    </div>
                </div>
                <div className='flex gap-2 mt-2'>
                    <p>{singleDetail.details}</p>
                    <a href={singleDetail.links.wikipedia} className='text-blue-600 hover:text-blue-900 underline'>wikipidia</a>
                </div>
                <div className='mt-3 flex justify-around py-2'>
                    <p className='flex-[1]'>Flight Number</p>
                    <p className='flex-[1]'>{singleDetail.flight_number}</p>
                </div>
                <hr />
                <div className='mt-3 flex justify-around py-2'>
                    <p className='flex-[1]'>Mission Name</p>
                    <p className='flex-[1]'>{singleDetail.mission_name}</p>
                </div>
                <hr />
                <div className='mt-3 flex justify-around py-2'>
                    <p className='flex-[1]'>Rocket Type</p>
                    <p className='flex-[1]'>{singleDetail.rocket.rocket_type}</p>
                </div>
                <hr />
                <div className='mt-3 flex justify-around py-2'>
                    <p className='flex-[1]'>Rocket Name</p>
                    <p className='flex-[1]'>{singleDetail.rocket.rocket_name}</p>
                </div>
                <hr />
                <div className='mt-3 flex justify-around py-2'>
                    <p className='flex-[1]'>Manufacturer</p>
                    <p className='flex-[1]'>{singleDetail.rocket.second_stage.payloads[0].manufacturer}</p>
                </div>
                <hr />
                <div className='mt-3 flex justify-around py-2'>
                    <p className='flex-[1]'>Nationality</p>
                    <p className='flex-[1]'>{singleDetail.rocket.second_stage.payloads[0].nationality}</p>
                </div>
                <hr />
                <div className='mt-3 flex justify-around py-2'>
                    <p className='flex-[1]'>Launch Date</p>
                    <p className='flex-[1]'>{singleDetail.launch_date_local}</p>
                </div>
                <hr />
                <div className='mt-3 flex justify-around py-2'>
                    <p className='flex-[1]'>Payload Type</p>
                    <p className='flex-[1]'>{singleDetail.rocket.second_stage.payloads[0].payload_type}</p>
                </div>
                <hr />
                <div className='mt-3 flex justify-around py-2'>
                    <p className='flex-[1]'>Orbit</p>
                    <p className='flex-[1]'>{singleDetail.rocket.second_stage.payloads[0].orbit}</p>
                </div>
                <hr />
                <div className='mt-3 flex justify-around py-2'>
                    <p className='flex-[1]'>Launch Site</p>
                    <p className='flex-[1]'>{singleDetail.launch_site.site_name}</p>
                </div>
                
            </div>

        </>
    )
}

export default SingleData