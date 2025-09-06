import React, { useContext, useEffect, useRef, useState } from "react";
import CommentForm from "../CommentForm/CommentForm";
import Icons from "../../../../assets/Icons";
import LikeButton from "../../../../components/Buttons/LikeButton/LikeButton";
import SignInCard from "../../../../components/Popups/SignInCard/SignInCard";
import {AuthContext} from "../../../../context/AuthContext";
import LikesCalculate from "../../../../utils/LikesCalculate"
const CommentActions = ({ handleOnSubmit, comment, handleLikeCommentToggle }) => {

  const [activeReplyForm, setActiveReplyForm] = useState(false);
  const [isLiked, setIsLiked] = useState(comment?.isLikedComment || false);
  const [totalCommentLikes, setTotalCommentLikes] = useState(comment?.totalCommentLikes || 0);

  const [showSignInCard, setShowSignInCard] = useState(false);
  const [activeSignInCard, setActiveSignInCard] = useState(null);

  const { isLoggedInUser } = useContext(AuthContext);

  const unLikeButtonRef = useRef(null);
  const likeButtonRef = useRef(null);
  const replyButtonRef = useRef(null);


  // Outside click listener to close SignInCard
  useEffect(() => {
    const listener = (e) => {
      if (likeButtonRef.current && !likeButtonRef.current.contains(e.target) && activeSignInCard === "like") {
        setShowSignInCard(false);
        setActiveSignInCard(null);
      }
      if (unLikeButtonRef.current && !unLikeButtonRef.current.contains(e.target) && activeSignInCard === "unlike") {
        setShowSignInCard(false);
        setActiveSignInCard(null);
      }
      if (replyButtonRef.current && !replyButtonRef.current.contains(e.target) && activeSignInCard === "reply") {
        setShowSignInCard(false);
        setActiveSignInCard(null);
      }
    };

    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, [activeSignInCard]);

  return (
    <>
      <div className="flex space-x-2 items-center justify-start">
        {/* Like */}
        <div className="flex items-center space-x-1 relative">
          {isLoggedInUser() === true ? (
            <button
              className="hover:bg-[#d9d9d9] rounded-full"
              aria-label="Like"
              ref={likeButtonRef}
              type="button"
              onClick={() => handleLikeCommentToggle({
                commentId: comment?._id,
                setTotalCommentLikes,
                setIsLiked
            })}            
            >
              <LikeButton isLiked={isLiked} />
            </button>
          ) : (
            <>
              <button
                className="hover:bg-[#d9d9d9] rounded-full"
                aria-label="Like"
                ref={likeButtonRef}
                type="button"
                onClick={() => {
                  setShowSignInCard(true);
                  setActiveSignInCard("like");
                }}
              >
                <LikeButton isLiked={isLiked} />
              </button>

              {showSignInCard && activeSignInCard === "like" && (
                <div className="absolute z-20 top-8">
                  <SignInCard />
                </div>
              )}
            </>
          )}
          <p className="text-[#606060] font-light text-[12px] mt-[2px]"><LikesCalculate likes={totalCommentLikes + 1899} /></p>
        </div>

        {/* Dislike */}
        <div className="relative">
          {isLoggedInUser() === true ? (
            <button
              className="hover:bg-[#d9d9d9] rounded-full"
              aria-label="Dislike"
              type="button"
            >
              <Icons.DislikeIco />
            </button>
          ) : (
            <>
              <button
                className="hover:bg-[#d9d9d9] rounded-full"
                aria-label="Dislike"
                ref={unLikeButtonRef}
                onClick={() => {
                  setShowSignInCard(true);
                  setActiveSignInCard("unlike");
                }}
                type="button"
              >
                <Icons.DislikeIco />
              </button>

              {showSignInCard && activeSignInCard === "unlike" && (
                <div className="absolute z-20 top-8 left-1">
                  <SignInCard />
                </div>
              )}
            </>
          )}
        </div>

        {/* Reply */}
        <div className="relative">
          {isLoggedInUser() === true ? (
            <button
              className="text-[#000000] text-[14px] font-normal ml-1"
              type="button"
              ref={replyButtonRef}
              onClick={() => setActiveReplyForm(true)}
            >
              Reply
            </button>
          ) : (
            <>
              <button
                className="text-[#000000] text-[14px] font-normal ml-1"
                type="button"
                ref={replyButtonRef}
                onClick={() => {
                  setShowSignInCard(true);
                  setActiveSignInCard("reply");
                }}
              >
                Reply
              </button>

              {showSignInCard && activeSignInCard === "reply" && (
                <div className="absolute z-20 top-8 left-1">
                  <SignInCard />
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Reply form */}
      {activeReplyForm && (
        <CommentForm
          onCancel={() => setActiveReplyForm(false)}
          commentId={comment?._id}
          variant="reply"
          handleOnSubmit={handleOnSubmit}
        />
      )}

    </>
  );
};

export default CommentActions;
