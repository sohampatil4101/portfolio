import React from 'react'
import loading from './loading.gif'
import './home.css'

export default function loader() {
  return (
    <>
     <div className='loader' >
        <img src={loading} alt='loading' />
      </div>
        
    </>
  )
}