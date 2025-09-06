import React,{useState} from "react";
import { handleUploadNewComment } from "../api/AxiosInstance";

const useAddComment = () => {

  // states
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);

  // add comment handler
  const uploadNewComment = async (payload) => {
    try {
      setLoading(true);
      const uploadedComment = await handleUploadNewComment(payload);
      // check comment is uploaded succesfull with else if
      if(uploadedComment?.data?.statusCode === 200 && uploadedComment?.data?.success === true) {
        
        // delay 2 seconds
        return uploadedComment?.data?.data;
        
      }else {
        setError(uploadNewComment);
      }
      
    } catch (error) {
      setError(error?.response?.data || error?.response || error);
    } finally {
      setLoading(false);
    }
  }

  return [error,loading,uploadNewComment];

}

export default useAddComment;