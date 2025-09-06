import React, { useState,useEffect } from "react";
import SubscribeButton from "../../../../components/Buttons/SubscribeButton/SubscribeButton";
import useSubscriptionToggle from "../../../../hooks/useSubscriptionToggle.js";
const ChannelInfo = ({ video }) => {

  // states 
  const [isSubscribed,setIsSubscribed] = useState(video?.isSubscribed);
  
  useEffect( () => {
  
      if(video?.isSubscribed !== undefined){
        setIsSubscribed(video?.isSubscribed)
      }
  
  },[video])
  
  // hook
  const [subscriprtionToggleError,subscriprtionToggleLoading,handleSubscriptionToggle] = useSubscriptionToggle();

  // handle isSubscribed and unsubscribed toggle 
  const handleSubscribeAndUnsubscribeToggle = async () => {
      try {
          const response = await handleSubscriptionToggle(video?.owner?._id);
          setIsSubscribed(response);
      } catch (error) {
        console.log(error);
      }
  }

  if(subscriprtionToggleError){
    return console.log(subscriprtionToggleError)
  }
  
  return (
    <div
      id="channel"
      className="flex items-center justify-start w-full space-x-9 max-w-[1330px] mb-2 relative"
    >
      {/* Avatar + Info */}
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <div className="w-[40px] h-[40px] flex-shrink-0">
          <img
            src={video?.owner?.avatar}
            alt="Channel Avatar"
            className="clip-circle rounded-full w-full h-full object-cover"
            title={video?.owner?.fullname}
          />
        </div>

        {/* Channel Name and Subscribers */}
        <div className="flex flex-col justify-center">
          <h3 className="text-[#0f0f0f] font-medium text-[15px]">
            {video?.owner?.fullname}
          </h3>
          <p className="text-[#606060] text-[12px]">
            <span id="subscribersCount">{video?.totalSubscribers}</span>{" "}
            Subscribers
          </p>
        </div>
      </div>

      {/* Subscribe Button */}
      <SubscribeButton isSubscribedChannel={isSubscribed} handleSubscribeChannel={handleSubscribeAndUnsubscribeToggle}/>
    </div>
  );
};

export default ChannelInfo;
