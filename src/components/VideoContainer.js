import React, { useState } from "react";
import { useEffect } from "react";
import { YOTUBE_VIDEOS_API } from "../constants/constant";
import VideoCard ,{AdVideoCard} from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOTUBE_VIDEOS_API);
    const jsonData = await data.json();
    setVideos(jsonData.items);
  };
  return (
    <div className="flex flex-wrap justify-center ">
       {/* { videos[0] && <AdVideoCard info={videos[0]}/>} */}

      {videos?.map((video) => (
        <Link  key={video.id} to={'/watch?v=' + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};




export default VideoContainer;
