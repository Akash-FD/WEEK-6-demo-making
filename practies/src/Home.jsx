import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {

    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const quaryparams = params.get('name')
  return (
    <div>
        <h1>hellocd</h1>
        {quaryparams && <p>name  : {quaryparams}</p>}
        
    </div>
  )
}

export default Home