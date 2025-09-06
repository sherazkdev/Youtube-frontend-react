    import React,{useEffect, useState} from "react";
    import { handleLikeUnlikeVideoToggle } from "../api/AxiosInstance";
    import {AuthContext} from "../context/AuthContext"

    const useLikeVideoToggle =  (video) => {

        const [isLiked,setIsLiked] = useState(false);
        const [error,setError] = useState(null);
        const [videoLikes,setVideoLikes] = useState(0)

        useEffect( () => {

            setIsLiked(video?.isLiked);
            setVideoLikes(video?.totalVideoLikes);

        },[video])

        const likeVideoToggleHandler = async () => {
                try {
                
                    const likeVideoToggle = await handleLikeUnlikeVideoToggle(video._id);
                    console.log(likeVideoToggle)
                    if(likeVideoToggle?.data.statusCode == 200 && likeVideoToggle?.data?.success == true && likeVideoToggle?.data?.message == "video unliked successfully"){
                        setIsLiked(false)
                        setVideoLikes( (prevLikes) => prevLikes - 1);
                        console.log(videoLikes)
                    }else if(likeVideoToggle?.data.statusCode == 200 && likeVideoToggle?.data?.success == true && likeVideoToggle?.data?.message == "video liked successfully"){
                        setIsLiked(true)
                        setVideoLikes( (prevLikes) => prevLikes + parseInt(1));
                    }
                
                } catch (error) {
                    setError(error?.response?.data || error?.response || error);
                }
        }
            


        return [isLiked,videoLikes,error,likeVideoToggleHandler]

    }

    export default useLikeVideoToggle;