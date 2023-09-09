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
    console.log(currentVideo);
    if (Object.keys(currentVideo).length === 0) {
      navigate("/");
    }
    setPlayVideo(true);
  }, []);

  return (
    <div className="min-h-screen flex justify-start items-start flex-col">
      <div className="text-indigo-500 cursor-pointer mt-[50px] mb-[30px] mx-0">
        <HiArrowLongLeft fontSize={"2.4rem"} onClick={() => navigate("/")} />
      </div>
      <div className="container  mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <ReactPlayer
            url={currentVideo?.submission?.mediaUrl}
            controls={true}
            light={currentVideo?.submission?.thumbnail}
            playing={playVideo}
            width="310px"
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              minHeight: "550px",
            }}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className="flex items-center justify-start gap-3">
              <img
                src={currentVideo?.creator?.pic}
                alt={currentVideo?.creator?.pic}
                className="h-[50px] w-[50px] border border-indigo-500 rounded-[50%] border-solid"
              />
              <div>
                <h1 className="text-gray-900 text-2xl title-font font-medium ">
                  {currentVideo?.creator?.name}
                </h1>
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {currentVideo?.creator?.handle}
                </h2>
              </div>
            </div>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-5">
              {currentVideo?.submission?.title}
            </h1>

            <p className="leading-relaxed">
              {currentVideo?.submission?.description}
            </p>

            <div
              className="flex mt-5 mb-12"
              style={{
                alignItems: "center",
                gap: "12px",
              }}
            >
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                <HiHeart fontSize={"1.2rem"} />
              </button>
              <p className="leading-relaxed text-1xl">
                {currentVideo?.reaction?.count}
              </p>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                <HiChatBubbleOvalLeftEllipsis fontSize={"1.2rem"} />
              </button>
              <p className="leading-relaxed text-1xl">
                {currentVideo?.comment?.count}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
