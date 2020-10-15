import React from "react"

const VideoCard = (props) =>{
  const video=props.video
  if (!props.video) return (
    <div className="ui segment">
  <div className="ui disabled loader"></div>
</div>
  );
  const src=`https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <div className="ui embed" >
        <iframe src={src} title={video.snippet.title} />
      </div>
      <div className="ui raised segment">
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );

}


export default VideoCard ; 