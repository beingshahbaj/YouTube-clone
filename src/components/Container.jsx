import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../Redux -toolkit/ReduxSlice/youtubeslice";
import { fetchLogo } from "../Redux -toolkit/ReduxSlice/logoslice";

function Main() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.youtube);
  const logoUrl = useSelector((state) => state.logo.logos);
  console.log(logoUrl);
  console.log(data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (data.length > 0) {
      data.forEach((video) => {
        dispatch(fetchLogo(video.snippet.channelId));
      });
    }
  }, [data, dispatch]);

  return (
    <div className="main-container">
      <Sidebar />
      <div className="video-container">
        {data.length > 0 &&
          data.map((video, index) => (
            <div key={video.snippet.channelId} className="video-profile">
              <div className="thumbnail">
                <img src={video.snippet.thumbnails.medium.url} alt="" />
              </div>
              <div className="description">
                <div className="channel-logo">
                  <img src={logoUrl[video.snippet.channelId]} alt="" />
                </div>
                <p className="title">{video.snippet.title}</p>
              </div>
              <div className="channel-title">{video.snippet.channelTitle}</div>
              <div className="title-count">
                {/* <div className="channel-title">{formattedTime}</div> */}
                {/* <div className="view-count">View: {viewCount}</div> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Main;
