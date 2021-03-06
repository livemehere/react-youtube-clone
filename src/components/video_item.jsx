import React from 'react';

const VideoItem = (props) => {
    const selectVideo = ()=>{
        props.selectVideo(props.video)
    }
    return (
        <li className="d-flex border border-4 border rounded-2 shadow m-1 box" onClick={selectVideo}>
            <div className=""><img src={props.video.snippet.thumbnails.medium.url} alt="" /></div>
            <div className="d-flex flex-column video-box ">
                <h4 >{props.video.snippet.title}</h4>
                <div >{props.video.snippet.channelTitle}</div>
            </div>
        </li>
        )
};

export default VideoItem;