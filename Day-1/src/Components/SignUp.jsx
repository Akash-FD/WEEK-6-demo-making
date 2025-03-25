import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpasswaord, setCpassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e)=>{

        e.preventDefault()
        if(!firstName || !email || !password || !cpasswaord){
            alert('all filds are mendetory')
            return false;
        }   

        if(password !== cpasswaord){
          alert('password and Confirm password must same')
          return false;
        }

        if(firstName.length <3){
            alert('name must be more than three character')
            return false;
        }

        const jsonData = {firstName, email, password}
        console.log(jsonData);

        axios.post('https://dummyjson.com/users', jsonData).then((res)=>console.log(res.status))
        setFirstName('')
        setEmail('')
        setPassword('') 
        setCpassword('')
        navigate('/login')

    }
    

  return (

    <form action="" onSubmit={handleSubmit} className='flex flex-col w-96 gap-5 m-auto mt-10 border shadow-md p-10 '>
        <input type="text" name="" id="" placeholder='Enter your name' className='border px-2 py-1' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        <input type="email" name="" id="" placeholder='Enter your email' className='border px-2 py-1' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" name="" id="" placeholder='Enter your password' className='border px-2 py-1' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type="text" name="" id="" placeholder='Confirm password' className='border px-2 py-1' value={cpasswaord} onChange={(e)=>setCpassword(e.target.value)}/>
        <button className='bg-blue-600 text-white py-2 px-4'>SignUp</button>
    </form>
    
  )
}

export default SignUp