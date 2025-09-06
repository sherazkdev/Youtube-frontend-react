import React,{useState} from "react";
import { handleReplyCommentHandler } from "../api/AxiosInstance";

const useAddReplyComment = () => {

    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const replyCommentHandler = async (comment) => {
        try {
            // Loading for ui
            setLoading(true)
            // adding comment 
            const replyComment = await handleReplyCommentHandler(comment);
            console.log(replyComment)
            if(replyComment?.data?.statuCode == 200 || replyComment?.data?.success == true){
                setLoading(false);
                return replyComment?.data?.data;
            }

        } catch (error) {
            setError(error?.response?.data || error?.response || error)
        }
    }

    return [loading,error,replyCommentHandler];

}

export default useAddReplyComment;