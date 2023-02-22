import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const Spinner = ({ message }) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <InfinitySpin 
        type='Circles'
        color='#EF4444'
        height={30}
        width={180}
        className='m-5'
      />
      <p className='text-lg text-center px-2'>{ message }</p>
    </div>
    
  )
}

export default Spinner