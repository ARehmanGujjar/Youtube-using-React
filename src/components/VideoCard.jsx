import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics}=info;
    const {channelTitle,thumbnails,title,publishedAt}=snippet;
    const {viewCount}=statistics;
    const displayTime=(time)=>{
        const publishedDate = new Date(publishedAt);
  const currentDate = new Date();

  const timeDifference = Math.abs(currentDate - publishedDate); // Difference in milliseconds

  // Calculate the time difference in days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) {
    // If the published date is today, calculate time difference in hours
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    if (hoursDifference === 0) {
      // If the difference is within an hour, calculate minutes
      const minutesDifference = Math.floor(timeDifference / (1000 * 60));
      return minutesDifference + (minutesDifference === 1 ? ' minute ago' : ' minutes ago');
    } else {
      return hoursDifference + (hoursDifference === 1 ? ' hour ago' : ' hours ago');
    }
  } else {
    return daysDifference + (daysDifference === 1 ? ' day ago' : ' days ago');
  }

    }
  return (
    
        <div className='m-1 my-2'>
        <img className='rounded-lg flex items-center justify-center' src={thumbnails.medium.url} alt="thumbnail" />
        <h1 className="text-lg w-72 min-h-15">{title.substring(0,55)}</h1>
        <h1 className="text-lg font-semibold">{channelTitle}</h1>
        <div className="flex">
            <h1 className="text-md mr-2">{viewCount.substring(0,1)}.{viewCount.substring(1,2)}M <span className='font-light'>views</span> </h1>
            <h1 className="text-md">{displayTime(publishedAt)}</h1>
        </div>
    </div>
  )
}
export const AdVideoCard=({info})=>{
    return <div className="border border-red-400 ">
      <VideoCard info={info} />
    </div>
}

export default VideoCard