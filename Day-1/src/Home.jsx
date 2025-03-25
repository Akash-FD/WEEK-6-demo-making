import { useNavigate } from 'react-router-dom';
import Data from './Components/Data'
import { useState } from 'react';

function Home() {

  const [select, setSelect] = useState('All Launches')
  
  const navigate = useNavigate()
  const storedUserData = JSON.parse(localStorage.getItem('user'))

  const handleLogOut = () =>{
      localStorage.removeItem("user");
      navigate('/login')
      
  }

  return (
    <>
     <div className='text-center mt-2 flex justify-end items-center mx-3 gap-8'>
        <h2 className='text-md text-gray-400'>Welcom {storedUserData.firstName}</h2>
        <button onClick={handleLogOut} className='bg-blue-500 text-white py-1 px-3 rounded-lg'>Log Out</button>
    </div>    
      <div className='mx-3'>

        <div className="logo border border-gray-300 my-2 flex justify-center shadow-md rounded-md">
          <img src="../image/logo.png" alt="spacex logo" width={500} />
        </div>

        <div className='flex justify-around items-center mx-20'>

          <select name="" id="" className='p-3 border bg-white' >
            <option value="" >Past 6 Months</option>
            <option value="">Last 6 Months</option>
          </select>

          <select name="" id="" className='p-3 border bg-white' value={select} onChange={(e)=>setSelect(e.target.value)}>
            <option value="All Launches">All Launches</option>
            <option value="Upcoming">Upcoming Launches</option>
            <option value="Successful">Successful Launches</option>
            <option value="failed">Failed Launches</option>
          </select>

        </div>
        <p className='text-center mt-2'>Click on record to see details</p>
        <Data select={select}/>
      </div>

    </>
  )
}

export default Home
