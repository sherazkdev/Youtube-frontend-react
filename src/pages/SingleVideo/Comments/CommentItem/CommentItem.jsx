import React, { useState } from 'react';
import CommentActions from '../CommentActions/CommentActions';
import CommentReplies from '../CommentReplies/CommentReplies';
import DateCalculate from "../../../../utils/DateCalculate";
import Icons from '../../../../assets/Icons';
import DotsLoader from '../../../../utils/DotsLoader';
import useCommentReplies from '../../../../hooks/useCommentReplies';
import useAddReplyComment from "../../../../hooks/useAddReplyComment";
import LatestCommentItem from "../LatestCommentItem/LatestCommentItem"

const CommentItem = ({ comment,handleOnSubmit,handleLikeCommentToggle}) => {
  
  const [commentRepliesError,commentRepliesLoading,fetchLatestCommentReplies] = useCommentReplies();
  const [addReplyLoading,addReplyError,replyCommentHandler] = useAddReplyComment()
  
  const [activeReplies, setActiveReplies] = useState(false);    
  const [replyComments, setRepliesComments] = useState([]);
  const [latestReplies,setLatestReplies] = useState([]);

  const handleGetCommentReplies = async () => {
    try {
      if(replyComments?.length > 0){
        return setActiveReplies(!activeReplies);
      }
        
      const paylad = {
        commentId:comment?._id,
        page:1,
        limit:9
      }

      const repliesArray = await fetchLatestCommentReplies(paylad);
      setRepliesComments(repliesArray);
      return setActiveReplies(true)

    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleAddNewReplies = async (comment) => {
    try {
      const latestReply = await replyCommentHandler(comment);
      setLatestReplies((prevReplies) => [
        latestReply,
        ...(Array.isArray(prevReplies) ? prevReplies : [])
      ]);
    } catch (error) {
      return console.log(error)
    }
  }

  if(commentRepliesError || addReplyError){
    console.log(commentRepliesError,addReplyError);
  }
  
  return (
    <>
      <article
        id="comment"
        className="w-full flex items-start justify-between gap-3"
      >
        {/* Left Section */}
        <div id="left-section" className="flex space-x-3 items-start flex-1">
          {/* Avatar */}
          <div id="avatar" className="w-[40px]">
            <img
              src={comment?.owner?.avatar}
              className="w-[40px] h-[40px] rounded-full object-cover"
              alt="User Avatar"
            />
          </div>

          {/* Comment Body */}
          <div id="comment-body" className="flex flex-col space-y-1 w-full">
            {/* Username + Time */}
            <div className="flex space-x-2 items-center">
              <h3 className="text-[#0f0f0f] font-semibold text-[14px]">
                <span>@</span>
                <span>{comment?.owner?.username}</span>
              </h3>
              <span
                id="uploadedAt"
                className="text-[#606060] font-normal text-[12px] mt-0.5"
              >
                <DateCalculate localDate={comment?.createdAt || "2025-08-19T08:30:40.123Z"} />
              </span>
            </div>

            {/* Content */}
            <div id="content">
              <p className="text-[#0f0f0f] font-normal text-[14px] leading-[1.4]">
                {comment?.content}
              </p>
            </div>

            {/* Actions */}
            <CommentActions
              handleOnSubmit={handleAddNewReplies}
              comment={comment}
              handleLikeCommentToggle={handleLikeCommentToggle }
            />

          </div>
        </div>

        {/* Options Icon */}
        <div id="options" className="self-start">
          <button>
            <Icons.ThreeDotIco />
          </button>
        </div>
      </article>

      {/* replies */}
      <div className='ml-[50px] w-full'>
        <div className='mt-[-22px]'>
        {/* New Replies */}
        {addReplyLoading === true ? (
                  <DotsLoader />
                ) : (
                  <>
                    {latestReplies?.length > 0 && (
                      <LatestCommentItem
                        latestComment={latestReplies}
                        handleLikeCommentToggle={handleLikeCommentToggle}
                        handleOnSubmit={handleAddNewReplies}
                      />
                    )}
                  </>
        )}
  
        {/* Existing Replies */}
        {comment?.totalReplies > 0 && (
                  <>
                    <button
                      onClick={handleGetCommentReplies}
                      className="flex items-center justify-start space-x-1 text-[#3262d2] hover:bg-[#def1ff] rounded-full px-[6px] py-[2px] mt-2 w-fit text-[13px]"
                    >
                      <div className={`transition-transform ${activeReplies ? "rotate-180" : "rotate-0"}`}>
                        <Icons.DownArrowIco />
                      </div>
                      <span>
                        {comment?.totalReplies} {comment?.totalReplies < 2 ? "Reply" : "Replies"}
                      </span>
                    </button>
      
                    {commentRepliesLoading === true ? (
                      <DotsLoader />
                    ) : (
                      <>
                        {activeReplies && (
                          <div className='ml-2'>
                            <CommentReplies
                            handleLikeCommentToggle={handleLikeCommentToggle}
                            handleOnSubmit={handleOnSubmit}
                            replyComments={replyComments}
                          />
                          </div>
                        )}
                      </>
                    )}
                  </>
        )}
  </div>
      </div>

    </>
  );
};

export default CommentItem;
