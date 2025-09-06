import React,{ useState} from "react";
import { handleLikeCommentToggle } from "../api/AxiosInstance";
const useCommentLikeToggle = () => {

    const [error,setError] = useState(null);


    const likeCommentToggle = async (commentId,setTotalCommentLikes,isLiked) => {
            try {
                const commentLikeToggle = await handleLikeCommentToggle(commentId);
                if(commentLikeToggle?.data?.statusCode == 200 && commentLikeToggle?.data?.success == true && commentLikeToggle?.data?.message == "comment unliked successfully"){
                    setTotalCommentLikes( (prevLikes) => prevLikes - 1);
                    return isLiked(false);
                }else {
                    setTotalCommentLikes( (prevLikes) => prevLikes + 1);
                    return isLiked(true);

                }
                
            } catch (error) {
                setError(error?.response?.data || error?.response || error)
            }
    }
        
    return [error,likeCommentToggle]

}

export default useCommentLikeToggle;