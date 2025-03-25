import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    useEffect(() => {
      const userData = async()=>{
        const {data} = await axios.get('https://dummyjson.com/users')
        setUser(data.users)
        console.log(data.users);
        
      }
      userData()
    }, [])
    
  const handleLogin = (e)=>{
    e.preventDefault()
    const findUser = user.find((e)=> e.email === email && e.password === password)
    console.log('hell');
    
    if(findUser){
        alert('Login successfully')
        localStorage.setItem('user', JSON.stringify(findUser))
        navigate('/home')
    }else{
        alert('please Register first!!')
        navigate('/')

    }

  }

    

    return (
      <>
      <div className='w-96 mt-10 border shadow-md p-5 text-center mx-auto'>

        <form action=""  onSubmit={handleLogin} className='flex flex-col gap-5 m-auto p-5'>
            <input type="email" name="" id="" placeholder='Enter your email' className='border px-2 py-1' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" name="" id="" placeholder='Enter your password' className='border px-2 py-1' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='bg-blue-600 text-white py-2 px-4'>Login</button>
        </form>
       <p>if you are not registered yet!
        <Link to='/' className='text-blue-700'> SignUp</Link>
       </p>

      </div>
      </>
    )
}

export default Login