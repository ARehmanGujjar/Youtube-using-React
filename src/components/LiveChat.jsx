import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = ({user,message}) => {
        useEffect(()=>{
            const i=setInterval(() => {
                console.log("api called");
            }, 2000);
            return()=>clearInterval(i);
        },[])
    
  return (
    <>
    <ChatMessage  name="me" message="hi this is my message"/>
    </>
  )
}

export default LiveChat