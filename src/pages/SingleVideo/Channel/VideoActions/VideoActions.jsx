import React, {useEffect, useState ,useRef, useContext} from "react";
import Icons from '../../../../assets/Icons';
import LikeButton from "../../../../components/Buttons/LikeButton/LikeButton"
import SignInCard from "../../../../components/Popups/SignInCard/SignInCard"
import AddVideoPlaylist from "./AddVideoPlaylist/AddVideoPlaylist";
import { AuthContext } from "../../../../context/AuthContext";
import usePlaylist from "../../../../hooks/usePlaylists";
import useAddVideoOrRemoveFromPlaylist from "../../../../hooks/useAddVideoOrRemoveFromPlaylist";
import useCreatePlaylist from "../../../../hooks/useCreatePlaylist"

const Operations = ({handleVideoLikeToggle,isLiked,videoLikes,videoId}) => {

    const [showSignInCard,setShowSignInCard] = useState(false);
    const [activePlaylistPopUp,setActivePlaylistPopUp] = useState(false);
    const [activeSignInCard,setActiveSignInCard] = useState(null);
    const [errors,setErrors] = useState([]);

    const cardRef = useRef(null);

    // Authentication
    const {isLoggedInUser} = useContext(AuthContext);

    // hooks

    // for fetch all playlist 
    const [fetchPlaylistError,getAllPlaylist] = usePlaylist();
    // for add or remove video for playlist
    const [addVideoPlaylistError,_0,handleAddNewVideoInPlaylistAndRemove] = useAddVideoOrRemoveFromPlaylist();
    // for create new playlist for video
    const [createPlaylistError,_1,handleCreatePlaylist] = useCreatePlaylist();

    // Error Handling
    useEffect( () => {
        if(addVideoPlaylistError) setErrors({addVideoPlaylistError:addVideoPlaylistError})
        else if(fetchPlaylistError) setErrors({fetchPlaylistError:fetchPlaylistError});
        else if(createPlaylistError) setErrors({createPlaylistError:createPlaylistError})
    },[addVideoPlaylistError,fetchPlaylistError,createPlaylistError])
    

    useEffect(() => {
        const listener = (event) => {
          if (cardRef.current && !cardRef.current.contains(event.target)) {
            setShowSignInCard(false);
          }
        };
      
        document.addEventListener("mousedown", listener);
      
        return () => {
          document.removeEventListener("mousedown", listener);
        };
    }, []);

    // handle video add playlist
    const handleVideoAddPlaylist = async ({playlistId,videoId,isChecked}) => {
        try {
            // add or remove video playlist payload
            const payload = {
                playlistId:playlistId,
                videoId:videoId,
                isChecked:isChecked
            }
            // checking input box is checked if checked to add video in playlist Or is note checked remove video from playlist
            const response = await handleAddNewVideoInPlaylistAndRemove(payload);
            return response;

        } catch (error) {
            return console.log(error);
        }
    }

    // handle create new playlist 
    const handleCreateNewPlaylist = async (payload) => {
        try {
            const creatingPlaylistPayload = {
                title:payload?.title,
                videoId,
                visibility:payload?.visibility
            };
            const playlist = await handleCreatePlaylist(creatingPlaylistPayload);
            console.log(playlist)
        } catch (error) {
            return console.log(error);
        }
    }

    if(errors.length > 0){
        return console.log(errors)
    }

    return (
        <>
            {/* Operations */}
            <div className="flex space-x-4 relative">

                {/* Like Unlike Button */}
                <div className="flex bg-[#f2f2f2] space-x-3 w-[131px] h-[36px] rounded-full  items-center justify-between relative after:content-[''] after:bg-[#d9d9d9] after:h-[14px] after:w-[1px] after:absolute after:top-[35%] after:left-[52%]">
                
                    {/* Like */}
                    <div className="relative">
                        
                        {isLoggedInUser() === true ? (

                            <button onClick={handleVideoLikeToggle} className="flex items-center px-0 rounded-l-full overflow-hidden space-x-2 w-[64px] h-[36px] content-center cursor-pointer hover:bg-[#d9d9d9]">
                                
                                {/* Like Ico */}
                                <div className="ml-3 mb-1">
                                
                                    <LikeButton isLiked={isLiked} />

                                </div>
                                
                                {/* Total Likes */}
                                <div>

                                    <p> {videoLikes || 0} </p>
                                
                                </div>

                            </button>
                        
                        ) : isLoggedInUser() === false ? (
                            <>
                                <button onClick={() => {setShowSignInCard(!showSignInCard);setActiveSignInCard("like")}} className="flex items-center justify-center px-0 rounded-l-full overflow-hidden space-x-1 w-[64px] h-[36px] content-center cursor-pointer hover:bg-[#d9d9d9]">

                                    <div className="ml-1 mb-1">
                                    
                                        <LikeButton isLiked={ isLiked } />

                                    </div>
                                    
                                    {/* Total Likes */}
                                    <div>

                                        <p> {videoLikes || 0} </p>
                                    
                                    </div>

                                </button>

                                {showSignInCard === true && activeSignInCard === "like" && (
                                    <div ref={cardRef} className="absolute top-10 ">
                                        <SignInCard />
                                    </div>
                                )}
                            </>
                            
                        ) : ""}

                    
                    </div>
                    
                    {/* Unlike */}
                    <div className="flex items-center justify-center rounded-r-full overflow-hidden space-x-1 w-[65.5px] h-[36px] content-center cursor-pointer  hover:bg-[#d9d9d9]" >
                        <button type="button"> <Icons.DislikeIco /> </button>
                    </div>

                </div>                    

                {/* Share Button */}
                <div className="flex bg-[#f2f2f2] px-2 space-x-3 hover:bg-[#d9d9d9] h-[36px] cursor-pointer  rounded-full  items-center justify-between ">

                    {/* Share Icon */}
                    <div >
                    
                        <button type="button" className="w-[23px]"> <Icons.ForwardIco /> </button>

                    </div>
                    
                    {/* Share Label */}
                    <div className="">
                        <p className="mr-2">Share</p>
                    </div>

                </div>

                {/* Download */}
                <div className="flex bg-[#f2f2f2] space-x-3 hover:bg-[#d9d9d9] h-[36px]  rounded-full  items-center justify-between">

                    {/* Download Ico */}
                    <div className="px-1 ml-2">
                        
                        <button type="button"> <Icons.DownloadIco /> </button>

                    </div>
                    
                    {/* Download Label */}
                    <div className="px-1 ml-2">
                        <p className="mr-3">Download</p>
                    </div>

                </div>
                
                {isLoggedInUser() ? (
                    // {/* Add Playlist Button */}
                    <div onClick={ () => setActivePlaylistPopUp(true)} className="flex bg-[#f2f2f2] space-x-3 hover:bg-[#d9d9d9] h-[36px] cursor-pointer  rounded-full  items-center justify-between">

                    {/* Playlist Ico */}
                    <div className="mt-0 px-1 ml-2">
                        
                        <button type="button"> <Icons.SaveIco /> </button>

                    </div>
                    
                    {/* Playlist Label */}
                    <div className="px-1 ml-2">

                        <p className="mr-2">Save</p>
                    
                    </div>

                    </div>
                ) : (
                    <>
                        <div onClick={() => {setShowSignInCard(!showSignInCard);setActiveSignInCard("playlist")}} className="flex bg-[#f2f2f2] space-x-3 hover:bg-[#d9d9d9] h-[36px] cursor-pointer  rounded-full  items-center justify-between">

                            {/* Playlist Ico */}
                            <div className="mt-0 px-1 ml-2">
                                
                                <button type="button"> <Icons.SaveIco /> </button>

                            </div>
                        
                            {/* Playlist Label */}
                            <div className="px-1 ml-2">

                                <p className="mr-2">Save</p>
                            
                            </div>

                            {/* sign in popup */}
                            {showSignInCard && activeSignInCard === "playlist" && (
                                <div ref={cardRef} className="absolute top-10 ">
                                    <SignInCard />
                                </div>
                            )}
                        </div>      
                    </>
                    
                )}

                {/* if checked add video playlist button */}
                {activePlaylistPopUp && (
                    <AddVideoPlaylist 
                        onClose={() => setActivePlaylistPopUp(false)} 
                        videoId={videoId}
                        handleVideoAddPlaylist={handleVideoAddPlaylist} 
                        handleCreateNewPlaylist={handleCreateNewPlaylist} 
                        getAllPlaylist={getAllPlaylist} 
                  />
                )}

                {/* Three Dote Icon */}
                <div className="flex bg-[#f2f2f2] space-x-3 hover:bg-[#d9d9d9] h-[36px]  rounded-full  items-center justify-between px-2">
                    <button type="button"> <Icons.ThreeDotIco /> </button>
                </div>

            </div>
        
        </>
    )

}

export default Operations;