import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <>
    <div className="flex gap-2 content-center items-center ">
    <img className="w-11 h-11 rounded-full" src="../images/profile.png" alt="user" />
    <div className="flex items-center content-center gap-2">
        <h3 className=" font-semibold mb-0 p-0 ">{name}</h3>
        <h3 className=" font-normal mt-0 ">{message}</h3>
    </div>

    </div>
    </>
  )
}

export default ChatMessage