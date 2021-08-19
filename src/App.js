import "./App.css";
import VideoList from "./components/video_list";
import React, { useEffect, useState } from "react";
import dotenv from "dotenv";
import Header from "./components/header";
import Detail from "./components/detail";
dotenv.config();

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };
  const search = async (e, inputText) => {
    e.preventDefault();

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_APIKEY}&type=video&part=snippet&chart=mostPopular&maxResults=20&q=${inputText}`,
      requestOptions
    )
      .then((response) => response.json())

      .then((result) =>
        result.items.map((video) => {
          return { ...video, id: video.id.videoId };
        })
      )
      .then((result) => setVideos(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_APIKEY}&part=snippet&chart=mostPopular&maxResults=20`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header search={search} />
      {selectedVideo && (
        <div className="detail_wrap sticky-top">
          <Detail selectedVideo={selectedVideo} />
        </div>
      )}

      <VideoList videos={videos} selectVideo={selectVideo} />
    </>
  );
}

export default App;
