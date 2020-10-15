import React from "react";
const Video = (props) => {
  return (
    <div onClick={()=>props.onClickedVideo(props.video)} 
      className="my-item item"
      style={{  display: 'flex',
      justifyContent: 'center',
      cursor: 'pointer'}}
    >
      <img className=" ui image" 
        src={props.video.snippet.thumbnails.medium.url}
        alt={props.video.snippet.title}  
        style={{maxWidth:"70%"}}/
      >
      <div className="content">
        <div className="header">{props.video.snippet.title}</div> 
      </div>
      
      
    </div>);
};
export default Video;
