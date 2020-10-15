import React from "react";
import Video from "./Video";

const VideoList = (props) => {
  const videosList = props.videos.map((video) => {
    return <Video video={video} key={video.id} />;
  });

  return <div>{videosList}</div>;
};

export default VideoList;
