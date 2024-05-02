import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const ismyMenueOpen=useSelector((Store)=>Store.app.isMenueOpen)
  if(!ismyMenueOpen) return null;
  return (
    <>
    <div className='min-w-48 ml-3 shadow-sm'>
      <div>
      <Link to="/"><h1 className="text-lg">Home</h1></Link>
      <h1 className="text-lg">Short</h1>
      <h1 className="text-lg">Subscriptions</h1>
      <h1 className="text-lg">Youtube Music</h1>
      </div>
      <hr></hr>
      <div className='shadow-sm mt-2'>
      <h1 className="text-lg font-bold">You&gt; </h1>
      <h1 className="text-lg">Your Channel</h1>
      <h1 className="text-lg">History</h1>
      <h1 className="text-lg">Playlists</h1>
      <h1 className="text-lg">Your Videos</h1>
      <h1 className="text-lg">Watch Later</h1>
      <h1 className="text-lg">Liked Video</h1>
      <h1 className="text-lg">Downloads</h1>
        
      </div>
    </div>
    </>
  )
}

export default Sidebar