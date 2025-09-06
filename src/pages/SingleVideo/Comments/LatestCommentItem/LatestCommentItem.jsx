import React from 'react';
import DateCalculate from '../../../../utils/DateCalculate';
import CommentActions from '../CommentActions/CommentActions';
import Icons from '../../../../assets/Icons';

const LatestCommentItem = ({ latestComment, handleOnSubmit, handleLikeCommentToggle }) => {
  return (
    <div id="replies" className="flex flex-col w-[1289px] space-y-3 mt-1" aria-label="Replies">
      {latestComment?.map((reply) => (
        <article
          key={reply?._id}
          className="flex items-start justify-between w-full space-x-3"
        >
          {/* Left Section */}
          <div className="flex space-x-3 items-start flex-1">
            {/* Avatar */}
            <div className="w-6 h-6">
              <img
                src={reply?.owner?.avatar}
                className="w-6 h-6 rounded-full object-cover"
                alt="Reply Avatar"
              />
            </div>

            {/* Body */}
            <div className="flex flex-col space-y-1 flex-1">
              <div className="flex space-x-2 items-center">
                <h4 className="text-[#0f0f0f] font-medium">
                  <span>@</span>
                  <span>{reply?.owner?.username}</span>
                </h4>
                <span className="text-[#606060] font-normal text-[13px]">
                  <DateCalculate data={reply?.createdAt} />
                </span>
              </div>

              <p className="text-[#0f0f0f] text-[15px]">{reply?.content}</p>

              <CommentActions
                handleLikeCommentToggle={handleLikeCommentToggle}
                handleOnSubmit={handleOnSubmit}
                totalLike={0}
                comment={reply}
              />
            </div>
          </div>

          {/* Options Button (Three Dots) */}
          <div className="pt-1">
            <button>
              <Icons.ThreeDotIco />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default LatestCommentItem;
