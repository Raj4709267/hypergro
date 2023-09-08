import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import {
  HiArrowLongLeft,
  HiHeart,
  HiChatBubbleOvalLeftEllipsis,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Videos = () => {
  const [playVideo, setPlayVideo] = useState<any>(false);
  const { currentVideo } = useSelector((store: any) => store);
  const navigate = useNavigate();
  console.log(currentVideo);
  useEffect(() => {
    setPlayVideo(true);
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
      }}
    >
      <div
        style={{ margin: "50px 0 30px 0", color: "#6366f1", cursor: "pointer" }}
      >
        <HiArrowLongLeft fontSize={"2.4rem"} onClick={() => navigate("/")} />
      </div>
      <div className="container  mx-auto">
        <div
          className="lg:w-4/5 mx-auto flex flex-wrap"
          //   style={{ border: "1px solid red", width: "100%" }}
        >
          <ReactPlayer
            url={currentVideo?.submission?.mediaUrl}
            controls={true}
            light={currentVideo?.submission?.thumbnail}
            playing={playVideo} // Set playing to true to autoplay
            width="310px" // Set the width to 100% to make it responsive
            height="70vh"
            //   margin="auto"
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "12px",
              }}
            >
              <img
                src={currentVideo.creator.pic}
                alt={currentVideo.creator.pic}
                style={{
                  height: "50px",
                  width: "50px",
                  border: "1px solid #6366f1",
                  borderRadius: "50%",
                }}
              />
              <div>
                <h1 className="text-gray-900 text-2xl title-font font-medium ">
                  {currentVideo.creator.name}
                </h1>
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {currentVideo.creator.handle}
                </h2>
              </div>
            </div>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-5">
              {currentVideo?.submission?.title}
            </h1>
            {/* <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div> */}
            <p className="leading-relaxed">
              {currentVideo?.submission?.description}
            </p>

            <div
              className="flex mt-5"
              style={{
                alignItems: "center",
                gap: "12px",
              }}
            >
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                <HiHeart fontSize={"1.2rem"} />
              </button>
              <p className="leading-relaxed text-1xl">
                {currentVideo.reaction.count}
              </p>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                <HiChatBubbleOvalLeftEllipsis fontSize={"1.2rem"} />
              </button>
              <p className="leading-relaxed text-1xl">
                {currentVideo.comment.count}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
