import React from 'react'
import Button from './Button'
import { v4 as uuidv4 } from 'uuid';


const ButtonList = () => {
  const list=["All",'News',"Translation","JavaScript","Software engineering","Dawah","Dua","Public Speaking","Recently Uploaded"]

  return (
    <>
    <div className="flex text-sm">
    {list.map((item)=>{
      return <Button key={uuidv4()} name={item}/>
    })}
    </div>
    </>
  )
}

export default ButtonList