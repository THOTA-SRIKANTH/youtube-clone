import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className="w-80 p-2 m-2 shadow-lg rounded-md col-span-3">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold ">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};


 export const AdVideoCard= ( {info}) =>{
  return(
    <div className="p-1 border m-1 border-red-100">
      <VideoCard info={info}/>
    </div>
  )
}
export default VideoCard;
