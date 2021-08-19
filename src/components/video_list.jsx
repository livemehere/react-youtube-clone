import React from 'react'
import VideoItem from './video_item';

const VideoList = (props) =>{
    return (
    <ul className="d-flex list-unstyled flex-wrap justify-content-center">
        {props.videos.map(video=> <VideoItem key={video.id} video={video} selectVideo={props.selectVideo}/>)}
    </ul>
    );
}

export default VideoList