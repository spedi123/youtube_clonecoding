import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/vidoe_list/video_list";

function App() {
  const [videos, setVidoes] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA9YyjplMTo-u0jWPKaLCYUwdGGEJ6XST8",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVidoes(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
