import React from 'react'

function Button({name}) {
  return (
        <button className='px-4 py-2 m-2 bg-gray-100 rounded-lg text-sm'>{name}</button>
  )
}

export default Button