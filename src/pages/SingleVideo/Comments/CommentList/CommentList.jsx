import React from "react";
import CommentItem from "../CommentItem/CommentItem";

const CommentList = ({ comments,handleOnSubmit,handleLikeCommentToggle,replyComments}) => {

  return (
    <section
      id="comment-section"
      className="flex flex-col space-y-4 items-start justify-start w-full"
    >
      {comments?.map((comment, index) => (
        <CommentItem
          key={comment?._id || index}
          handleOnSubmit={handleOnSubmit}
          handleLikeCommentToggle={handleLikeCommentToggle}
          comment={comment}
          replyComments={replyComments}
        />
      ))}
    </section>
  );
};

export default CommentList;
