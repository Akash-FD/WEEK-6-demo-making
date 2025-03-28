import React, { useEffect, useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaArrowsAltH, FaHeart, FaLock, FaLockOpen, FaRandom } from 'react-icons/fa';
import { MdVerticalShadesClosed } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { VscColorMode } from 'react-icons/vsc';
import './Home.css'
import { IoCopySharp } from 'react-icons/io5';
import copy from 'copy-to-clipboard';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const Home = () => {
    const [colorDiv, setColorDiv] = useState(["#C02E87","#3c5ad3"])
    // const [myLikeSection, setMyLikeSection] = useState([])         // like section mate
    const [isLiked, setIsLike] = useState(false)
    const [isLocked, setIsLocked] = useState(false)
    const [textChange, setTextChange] = useState("")
    const [copyText, setCopyText] = useState("")

    
    const handleColorChange =(index, newColor)=>{
        const newData = [...colorDiv]
        newData[index]= newColor
        setColorDiv(newData)
      
    }

    const hanldeLocked = (index) => {
        setIsLocked((pre) => ({ ...pre, [index]: !pre[index] }))
    }
    const hanldeLiked = (index) => {
        setIsLike((pre) => ({ ...pre, [index]: !pre[index] }))
        // const a = myLikeSection.push(colorDiv[index])          // likesection ma push karva mate
        // console.log(a);
        
    }
   
    const hanldeTextColor = (index) => {
        setTextChange((pre) => ({ ...pre, [index]: !pre[index] }))
    }

    const handleCopy = (item)=>{
        setCopyText(item)
        copy(item)
        toast(`${item} copied`, {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });

    }


    const getRandomColor = () => {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        setColorDiv([...colorDiv, color]);
    }


    const getAllRandomColor = () => {

        for (var k = 0; k < colorDiv.length; k++) {
            let letters = "0123456789ABCDEF";
            let color = "#";

            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            if (isLocked[k]) {
                colorDiv[k] = colorDiv[k]
            } else {
                colorDiv[k] = color
            }

            setColorDiv([...colorDiv]);
            setIsLike(false)
 
            console.log(colorDiv);
        }
    }
   
    useEffect(() => {

        const handleSpace = (e)=>{
            if(e.code === "Space"){
                e.preventDefault();
                console.log(e);
                getAllRandomColor();
            }

        }
        window.addEventListener("keydown", handleSpace)
         return ()=> window.removeEventListener("keydown", handleSpace)
    }, [colorDiv,isLocked])
    
 

    return (
        <>
            <div className='w-full flex h-[100%] absolute z-10' >
                <div className='absolute right-[60%] z-10 w-20 h-32 flex justify-center items-center' onClick={getRandomColor}>
                    <AiOutlinePlusCircle className='text-4xl ' />
                </div>
               
                {/* <div className='absolute right-[40%] z-10 w-20 h-32 flex justify-center items-center' onClick={getAllRandomColor} >
                    <FaRandom className='text-4xl' />
                </div> */}

                {colorDiv.map((item, index) => {
                    return <div key={index} style={{ backgroundColor: item }} className={`flex-[1] h-[100%] flex flex-col justify-center items-center relative ${textChange[index] && "text-white"}`}>

                        <div className="inner-div text-center px-[20%] hover:inline-block py-24 text-2xl">

                            <RxCross2 className='mx-auto mb-3' onClick={() => setColorDiv(colorDiv.filter((e) => e !== item))} />
                            <VscColorMode className="mx-auto mb-3" onClick={() => hanldeTextColor(index)} />
                            <MdVerticalShadesClosed className='mx-auto mb-3' />
                            <FaHeart className={`mx-auto mb-3 ${isLiked[index] && "text-red-500"}`} onClick={() => hanldeLiked(index)} />
                            <FaArrowsAltH className='mx-auto mb-3' />
                            <IoCopySharp className='mx-auto mb-3' onClick={()=>handleCopy(item)}/>
                            <div className='lock'>
                                {isLocked[index] ? <FaLock onClick={() => hanldeLocked(index)} className="lock-btn mx-auto" /> : <FaLockOpen onClick={() => hanldeLocked(index)} className='mx-auto' />}
                            </div>

                            {/* {item === singleItem &&  toggle? <FaLock onClick={()=>hanldeToggle(item)} className='mx-auto mb-10'/> : <FaLockOpen onClick={()=>hanldeToggle(item)} className='mx-auto mb-10'/>} */}

                        </div>
                        <input type="color" value={item} onChange={(e)=>handleColorChange(index,e.target.value)} className=''/>
                        <p className='font-semibold text-2xl mt-3'>{item}</p>
                    </div>
                })}
            </div>

            <ToastContainer>

            </ToastContainer>
        </>
    )
}

export default Home