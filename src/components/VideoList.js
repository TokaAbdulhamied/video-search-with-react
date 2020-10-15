import React from "react";
import Video from "./Video";

const VideoList = (props) => {
  const videosList = props.videos.map((video) => {
    return <Video video={video} onClickedVideo={props.onClickedVideo}
      key={video.id.videoId}/>;
  });

  return <div className="ui relaxed divided list">{videosList}</div>;
};

export default VideoList;
