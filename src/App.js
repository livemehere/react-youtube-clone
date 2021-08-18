import "./App.css";
import VideoList from "./components/video_list";
import React, { useEffect, useState } from "react";
import dotenv from "dotenv";
dotenv.config();

function App() {
  const [videos, setVideos] = useState([]);

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

  return <VideoList videos={videos} />;
}

export default App;
