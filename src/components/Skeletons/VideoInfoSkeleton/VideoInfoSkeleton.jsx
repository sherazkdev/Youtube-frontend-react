import React from "react";

const VideoInfoSkeleton = () => {
  return (
    <div
      id="video-info-skeleton"
      className="w-full animate-pulse"
    >
      {/* Top section with title skeleton */}
      <div className="w-full flex justify-between items-end">
        <div className="flex flex-col">
          <div className="w-[400px] h-[18px] mb-3 rounded-lg bg-gray-300"></div>
          <div className="w-[250px] h-[18px] rounded-lg bg-gray-300"></div>
        </div>

        <div className="flex justify-end items-end">
          <div className="flex space-x-3 mt-2">
            <div className="w-[20px] h-[20px] bg-gray-300 rounded-full"></div>
            <div className="w-[20px] h-[20px] bg-gray-300 rounded-full"></div>
            <div className="w-[20px] h-[20px] bg-gray-300 rounded-full"></div>
            <div className="w-[20px] h-[20px] bg-gray-300 rounded-full"></div>
            <div className="w-[20px] h-[20px] bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="border border-b-[#d9d9d9] border-l-transparent border-t-transparent border-r-transparent w-full mt-2"></div>

      {/* Channel Info + Button skeleton */}
      <div className="flex justify-between items-start w-full mt-2">
        <div className="flex space-x-2 items-start justify-start">
          <div className="w-[40px] h-[40px] rounded-full bg-gray-300"></div>
          <div className="flex space-y-1 flex-col">
            <div className="w-[160px] h-[17px] rounded-md bg-gray-300"></div>
            <div className="w-[160px] h-[17px] rounded-md bg-gray-300"></div>
          </div>
        </div>

        <div className="w-[70px] h-[30px] rounded-md bg-gray-300"></div>
      </div>
    </div>
  );
};

export default VideoInfoSkeleton;
