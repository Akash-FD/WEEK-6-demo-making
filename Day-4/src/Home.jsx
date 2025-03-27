import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaArrowsAltH, FaHeart, FaLock, FaLockOpen } from 'react-icons/fa';
import { MdVerticalShadesClosed } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { VscColorMode } from 'react-icons/vsc';
import './Home.css'

const Home = () => {
    const [colorDiv, setColorDiv] = useState(["#C02E87"])
    const [isLiked, setIsLike] = useState(false)
    const [isLocked, setIsLocked] = useState("")
    const [textChange, setTextChange] = useState("")

    console.log(isLocked);

    const hanldeLocked = (index) => {
        setIsLocked((pre) => ({ ...pre, [index]: !pre[index] }))
    }
    const hanldeLiked = (index) => {
        setIsLike((pre) => ({ ...pre, [index]: !pre[index] }))
    }
    const hanldeTextColor = (index) => {
        setTextChange((pre) => ({ ...pre, [index]: !pre[index] }))
    }


    const getRandomColor = () => {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        setColorDiv([...colorDiv, color]);
    }
    console.log(colorDiv);

    return (
        <>

            <div className='w-full flex h-[100%] absolute z-10' >
                <div className='absolute right-[48%] z-10 w-20 h-32 flex justify-center items-center' onClick={getRandomColor}>
                    <AiOutlinePlusCircle className='text-4xl ' />
                </div>

                {colorDiv.map((item, index) => {
                    return <div key={index} style={{ backgroundColor: item }} className="flex-[1] h-[100%] flex flex-col justify-center items-center relative">

                        <div className={`inner-div text-center px-[20%] opacity-0 hover:opacity-100 py-24 text-2xl ${textChange[index] && "text-white"}`}>

                            <RxCross2 className='mx-auto mb-3' onClick={() => setColorDiv(colorDiv.filter((e) => e !== item))} />
                            <VscColorMode className="mx-auto mb-3" onClick={() => hanldeTextColor(index)}/>
                            <MdVerticalShadesClosed className='mx-auto mb-3' />
                            <FaHeart className={`mx-auto mb-3 ${isLiked[index] && "text-red-500"}`} onClick={() => hanldeLiked(index)} />
                            <FaArrowsAltH className='mx-auto mb-3' />
                            {isLocked[index] ? <FaLock onClick={() => hanldeLocked(index)} className="lock-btn mx-auto"/> : <FaLockOpen onClick={() => hanldeLocked(index)} className='mx-auto' />}
                            {/* {item === singleItem &&  toggle? <FaLock onClick={()=>hanldeToggle(item)} className='mx-auto mb-10'/> : <FaLockOpen onClick={()=>hanldeToggle(item)} className='mx-auto mb-10'/>} */}
                            
                        </div>  
                        <p className='font-semibold text-2xl'>{item}</p>

                    </div>
                })}

            </div>
        </>
    )
}

export default Home