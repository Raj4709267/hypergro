import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { setVideo } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "../Components/Pagination";
import * as types from "../Redux/actionTypes";
import Footer from "../Components/Footer";

function Home() {
  const { videos, page, isLoading } = useSelector((store: any) => store);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(videos);
  }, [videos]);

  const getVideos = async () => {
    dispatch({ type: types.START_GET_VIDEOS });
    try {
      const res = await axios.get(
        `https://internship-service.onrender.com/videos?page=${page}`
      );
      dispatch({
        type: types.SUCCESS_GET_VIDEOS,
        payload: res.data.data.posts,
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: types.END_GET_VIDEOS });
    }
  };

  const handleCurrentVideo = (id: String) => {
    const result = videos.filter((item: any) => item.postId === id);
    dispatch(setVideo(result[0]));
    navigate(`/video/${id}`);
  };

  useEffect(() => {
    getVideos();
  }, [page]);

  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Videos
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Discover a world of bite-sized entertainment! ShortVid is your
              go-to destination for quick, engaging, and fun short videos.
              Explore an endless stream of diverse content, enjoy a personalized
              feed, and join our vibrant community. Get ready to be entertained,
              one short video at a time.
            </p>
          </div>
          <div className="flex flex-wrap m-4 ">
            {videos.length === 0 && isLoading ? (
              <h1 className="text-gray-900 text-2xl title-font font-medium m-auto ">
                <img src="./loader.gif" alt="" height={"20px"} width={"80px"} />
              </h1>
            ) : videos.length === 0 ? (
              <p>No Video</p>
            ) : null}
            {videos.length !== 0 && isLoading ? (
              <h1 className="text-gray-900 text-2xl title-font font-medium m-auto ">
                <img src="./loader.gif" alt="" height={"20px"} width={"80px"} />
              </h1>
            ) : (
              videos.map((item: any, i: number) => {
                return (
                  <div key={i} className="xl:w-1/4 md:w-1/3 sm:w-1/2  p-4 ">
                    <img
                      onClick={() => {
                        handleCurrentVideo(item.postId);
                      }}
                      className="h-300 rounded w-full object-cover object-center mb-6 cursor-pointer"
                      src={item.submission.thumbnail}
                      alt={item.submission.thumbnail}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
      {videos.length > 0 && !isLoading && <Pagination />}
      <Footer />
    </>
  );
}

export default Home;
