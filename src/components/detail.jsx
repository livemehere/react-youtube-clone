import React from 'react'

const Detail = ({selectedVideo}) =>{
    return (
            <div className="detail ">
                <iframe 
                title={selectedVideo.title}
                id="ytplayer" 
                type="text/html" 
                width="100%" 
                height="360"
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&origin=http://example.com`}
                frameBorder="0">
                </iframe>
            </div>
    );
}

export default Detail