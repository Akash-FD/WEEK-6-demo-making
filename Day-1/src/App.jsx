import './App.css'
import Data from './Components/Data'

function App() {

  return (
    <>
      <div className='mx-3'>

        <div className="logo border border-gray-300 my-2 flex justify-center shadow-md rounded-md">
          <img src="../image/logo.png" alt="spacex logo" width={500} />
        </div>

        <div className='flex justify-around items-center mx-20'>

          <select name="" id="" className='p-3 border bg-white'>
            <option value="" >Past 6 Months</option>
            <option value="">Last 6 Months</option>
          </select>

          <select name="" id="" className='p-3 border bg-white'>
            <option value="">All Launches</option>
            <option value="">Upcoming Launches</option>
            <option value="">Successful Launches</option>
            <option value="">Failed Launches</option>
          </select>

        </div>
        <p className='text-center mt-2'>Click on record to see details</p>
        <Data/>
      </div>

    </>
  )
}

export default App
