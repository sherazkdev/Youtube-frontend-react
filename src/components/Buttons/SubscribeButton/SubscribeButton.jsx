import React, { useEffect, useState, useContext, useRef } from 'react';
import Icons from '../../../assets/Icons';
import {AuthContext} from "../../../context/AuthContext"
import PopUpOverlay from '../../Popups/PopUpOverlay/PopUpOverlay';
import SignInCard from "../../Popups/SignInCard/SignInCard"
const SubscribeButton = ({isSubscribedChannel,handleSubscribeChannel}) => {

  const [active,setActive] = useState(false);
  const [activeUnsubscribe,setActiveUnsubscribe] = useState(false);
  const [isSubscribed,setIsSubscribed] = useState(isSubscribedChannel);
  const [showSignInCard,setShowSignInCard] = useState(false);

  // Dom refrences
  const cardRef = useRef(null)

  // Authentication
  const {isLoggedInUser} = useContext(AuthContext);

  useEffect( () => {

    if(isSubscribedChannel !== undefined){
      setIsSubscribed(isSubscribedChannel)
    }

    const listener = (e) => {
      if(cardRef.current && !cardRef.current.contains(e.target)) {
        return setShowSignInCard(false);
      }
    }

    document.addEventListener("click",listener)

  },[isSubscribedChannel])


  // Document useffect
  useEffect(() => {

    const listener = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setShowSignInCard(false);
      }
    };
  
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
    
  }, []);
  

  return ( 
    <>
      {isLoggedInUser() === true ? (
        <>
          {isSubscribed ? (
            
            <>
              {activeUnsubscribe && (
                <PopUpOverlay>
                  <div id="popUp" 
                    className="w-[272px] py-5 bg-[#fff] shadow-md rounded-lg flex justify-center items-center flex-col space-y-5">
                    <p className="text-[14px] text-[#676767]">Unsubscribe from Techno Gamerz?</p>
                    <div id="buttons" className="flex justify-center items-center gap-4 mt-6">
                      <button onClick={ () => setActiveUnsubscribe(false)} className="text-[#0f0f0f] mt-2 px-2 py-1 font-medium">Cancel</button>
                      <button onClick={ () => {setActiveUnsubscribe(false),handleSubscribeChannel()}} className="text-[#3f6cd5] mt-2 px-2 py-1 font-medium">Unsubscribe</button>
                    </div>
                  </div>
                </PopUpOverlay>
              )}

              <button onClick={ () => setActive(!active)} className='flex space-x-2 bg-[#f2f2f2] px-2 py-1.5 rounded-full border border-transparent active:border active:border-[#ccc] hover:bg-[#0000001a]'>

                  {/* Bell Icon */}
                  <div>
                    <Icons.BellIco />
                  </div>

                  {/* Subscribed Lable  */}
                  <div>
                    <p className='font-medium text-[#0f0f0f]'>Subsribed</p>
                  </div>

                  {/* Down angle */}
                  <div>
                    <Icons.DownArrowIco />
                  </div>

              </button>
              {/* unsubscribe notification opertions */}
              {active && (
                  <div className='flex flex-col absolute top-11 left-[138px] bg-[#fff] shadow-[0px_0px_15px_#d9d9d9] w-[182px] py-2 rounded-lg z-10 space-y-2'>
                    
                    <button className='flex justify-left space-x-2 hover:bg-[#f2f2f2] p-1.5 items-center'>

                      <div>
                        <Icons.StandardBellIcon />
                      </div>
                      
                      <div>
                        <p>All</p>
                      </div>
                    
                    </button>
                    
                    <button className='flex justify-left bg-[#] bg-[#f2f2f2] p-1.5 space-x-2 items-center'>
                      
                      <div>
                        <Icons.BellIco />
                      </div>

                      <div>
                        <p>Personalized</p>
                      </div>
                    
                    </button>
                    
                    <button className='flex justify-left bg-[#] p-1.5 space-x-2 hover:bg-[#f2f2f2] items-center'>

                      <div>
                        <Icons.BellOffIcon />
                      </div>
                      
                      <div>
                        <p>None</p>
                      </div>
                    
                    </button>

                    <button onClick={ () => {setActive(false);setActiveUnsubscribe(true);}} className='flex justify-left bg-[#] p-1.5 hover:bg-[#f2f2f2] space-x-2 items-center'>
                      
                      <div>
                        <Icons.ProfileBellIcon />
                      </div>
                      
                      <div>
                        <p>Unsubscribe</p>
                      </div>
                    
                    </button>
                  
                  </div>
              )}
            </>
          
          ) : (
            <div id="subscribedButton">
              <button
                onClick={ handleSubscribeChannel}
                type="button"
                className="text-white bg-black py-2 px-4 rounded-full text-[14px] hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <div id="subscribedButton"className='relative' ref={cardRef}>
            <button
              onClick={ () => setShowSignInCard(!showSignInCard)} 
              type="button"
              className="text-white bg-black py-2 px-4 rounded-full text-[14px] hover:opacity-90 transition"
            >
              Subscribe
            </button>

            {/* Is not logged Show click button sign in popup */}
            {showSignInCard === true && (
              <div className="absolute top-10">
                <SignInCard />
              </div>
            )}

          </div>
        </>
      )}
    </>


  )
}

export default SubscribeButton;
