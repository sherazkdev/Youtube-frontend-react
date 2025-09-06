import React from 'react';
import DateCalculate from "../../../../utils/DateCalculate";
import CommentActions from "../CommentActions/CommentActions";
import Icons from '../../../../assets/Icons';

const CommentReplies = ({ handleLikeCommentToggle,handleOnSubmit,replyComments }) => {

  if (!replyComments?.length) return null;

  return (
    <>
      
      {/* Replies Section */}
      <div id="replies" className="flex w-[1251px] flex-col space-y-1 mt-2" aria-label="Replies">
          {replyComments.map(reply => (
            <article 
              key={reply?._id} 
              className="flex items-start justify-between w-full"
            >
              {/* Reply Left Section */}
              <div className="flex space-x-3 items-start w-full">
                {/* Reply Avatar */}
                <div className="w-6 h-6">
                  <img
                    src={reply?.owner?.avatar}
                    className="w-6 h-6 rounded-full object-cover"
                    alt="Reply Avatar"
                  />
                </div>

                {/* Reply Body */}
                <div className="flex flex-col space-y-1 w-full">
                  {/* Username + Time */}
                  <div className="flex space-x-2 items-center">
                    <h4 className="text-[#0f0f0f] font-medium">
                      <span>@</span><span>{reply?.owner?.username}</span>
                    </h4>
                    <span className="text-[#606060] font-normal text-[13px]">
                      <DateCalculate data={reply?.createdAt} />
                    </span>
                  </div>

                  {/* Reply Content */}
                  <p className="text-[#0f0f0f] text-[15px]">
                    {reply?.content}
                  </p>

                  {/* Actions */}
                  <CommentActions
                    handleOnSubmit={handleOnSubmit}
                    handleLikeCommentToggle={handleLikeCommentToggle}
                    comment={reply}
                  />
                </div>
              </div>

              {/* Options Button */}
              <div id="options" className="relative">
                <button className='absolute top-0 left-[14px]'>
                  <Icons.ThreeDotIco />
                </button>
              </div>
            </article>
          ))}
      </div>

    </>
  );
};

export default CommentReplies;
