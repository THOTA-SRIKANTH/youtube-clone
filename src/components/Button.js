import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-3 mx-2 my-3    bg-gray-200 rounded-md'> {name}</button>
    </div>
  )
}

export default Button
