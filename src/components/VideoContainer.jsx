import React,{useEffect, useState} from 'react'
import { Youtube_api_key } from '../utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { AdVideoCard } from './VideoCard';

const VideoContainer = () => {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    getVideos()
  },[])
  const  getVideos=async()=>{
     const data=await fetch(Youtube_api_key);
     const json=await data.json();
     setVideos(json.items);
  }
  return (
    <div className='flex flex-wrap m-1'>
      {videos[0] && <AdVideoCard info={videos[0]}/>}
      {
        videos.map((video)=>{
          return <Link key={video.id} to={"watch/?v="+video.id}><VideoCard  info={video}/></Link>
        })
      }
      
    </div>
  )
}

export default VideoContainer