import React, { useState, useEffect } from "react";

const Notification = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    // Auto hide after 2s
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div
    className={`
      fixed left-2 bottom-5 min-w-[300px] max-w-[400px] p-[0px_20px] rounded-lg bg-[#0f0f0f] 
      flex justify-between items-center
      transition-all duration-500 ease-in-out
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
    `}
  >
    <p className="text-white text-[14px] font-normal">
      {message}
    </p>
    <button className="text-[#2b72c4] font-semibold cursor-pointer p-2">
      Undo
    </button>
    </div>
  )
};

export default Notification;
