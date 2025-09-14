import React from "react";
import Icons from "../../assets/Icons";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-4">
      
      <img
        src={`/public/monkey.png`}
        alt="Monkey"
        className="w-40 mb-6"
      />

      {/* Message */}
      <h2 className="text-lg font-medium text-gray-800">
        This page isn’t available. Sorry about that.
      </h2>
      <p className="text-gray-600">Try searching for something else.</p>

      {/* Search Box */}
        <form action={`/result`} method="GET">
          <div className="flex items-center border border-gray-300 rounded-lg mt-6 w-full max-w-md overflow-hidden">
            <div className="flex items-center px-2">
              <span className=" font-bold text-sm"><Icons.YoutubeIco /></span>
              <span className="text-xs text-gray-200 ml-1">PK</span>
            </div>
            <input
              type="text"
              autoComplete="off"
              name="q"
              placeholder="Search"
              className="flex-1 px-3 py-2 outline-none"
            />
            <button type="submit" className="px-4 py-2 bg-gray-100 hover:bg-gray-200">
              <Icons.SearchIco />
            </button>
          </div>
        </form>
    </div>
  );
}
