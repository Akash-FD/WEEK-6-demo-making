import { useEffect, useRef, useState } from 'react'
import quizBank from './data'
import './App.css'
import { MdDarkMode } from 'react-icons/md';

function Home() {

  const [toggle, setToggle] = useState(false)

  const [curruntQ, setCurrentQ] = useState(1)
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState("")
  console.log(selected);
  console.log(score);

  const toggleFunction = () => {
    setToggle(!toggle)
    if (toggle === true) {
      console.log(true);
    } else {
      console.log(false);

    }
  }

  useEffect(() => {
    document.body.classList.toggle('dark-mode')
  }, [toggle])


  const limit = useRef(0);

  const onequiestion = quizBank.slice(limit.current, limit.current + 1)

  const hanldeNext = () => {

    setTimeout(() => {
      if (limit.current < quizBank.length) {
        setCurrentQ(curruntQ + 1)
        limit.current = limit.current + 1
        console.log(limit);
      }

      if (selected === onequiestion[0].answer) {
        setScore(score + 1)
      }

      if (limit.current === quizBank.length) {
        setShowResult(score + 1)
        console.log(showResult);

      }

      setSelected("")
    }, 500);
  }

  const handleReset = () => {
    setCurrentQ(1)
    setScore(0)
    setSelected("")
    setShowResult("")
    limit.current = 0

  }

  return (
    <>
      <div className='flex justify-end mr-10 mt-10'>
        {!toggle ? <MdDarkMode size={50} className='bg-white rounded-full cursor-pointer' onClick={toggleFunction} /> : <MdDarkMode size={50} className='text-white rounded-full cursor-pointer' onClick={toggleFunction} />}
      </div>

      {curruntQ <= 10 ? onequiestion.map((item, index) => {
        return <div key={index} className='w-[50%] mx-auto mt-20'>
          <div className='text-center text-4xl text-white my-5 max-sm:text-xl'>
            <h1>General Knowledge quiz</h1>
          </div>

          <div className='flex justify-between mx-8 text-xl max-sm:text-sm text-white'>
            <div className="total-q">
              <p>{curruntQ}/10</p>
            </div>

          </div>

          <div className='quiestion bg-white p-4 text-center text-2xl max-sm:text-[15px] max-sm:p-3 rounded-md my-4 mb-8'>
            <p className=''>Q.{curruntQ} {item.quiestion}</p>
          </div>

          {item.option.map((options, index) => {
            return <div key={index} className={`quiestion bg-white p-2 text-xl max-sm:text-sm rounded-md my-2 flex gap-3`}>
              <input type="radio" name='q1' id='same' onClick={() => setSelected(item.option[index])} />
              <label htmlFor="same">{item.option[index]}</label>
            </div>
          })
          }

          <div className='flex justify-between'>
            <div className='btn text-center mt-8'>
              <button className='bg-slate-200 hover:bg-yellow-700 hover:text-white py-1 px-5 text-xl max-sm:text-sm rounded-md' >Skip</button>
            </div>
            <div className='btn text-center mt-8'>
              <button className={`${selected === "" ? 'bg-white text-gray-400 py-1 px-5 text-xl rounded-md max-sm:text-sm' : "bg-slate-200 py-1 px-5 text-xl rounded-md max-sm:text-sm"}`} disabled={selected === ""} onClick={hanldeNext}>Next</button>
            </div>
          </div>
        </div>

      })
        :
        <div className='w-[50%] bg-white mx-auto mt-28 text-center py-32 rounded-lg shadow-lg'>
          <div className='text-center text-4xl font-semibold'>
            <h1>your score is : {showResult}</h1>
          </div>
          <button className='bg-red-600 hover:bg-green-700 shadow-lg rounded-md text-white text-2xl px-3 py-1 mt-5' onClick={handleReset}>Reset</button>
        </div>
      }
    </>
  )
}
export default Home
