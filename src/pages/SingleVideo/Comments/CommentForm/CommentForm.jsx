import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import EmojiPicker from "emoji-picker-react";
import Icons from "../../../../assets/Icons";
import DotesLoader from "../../../../utils/DotsLoader";
import SignInCard from "../../../../components/Popups/SignInCard/SignInCard";
import { AuthContext } from "../../../../context/AuthContext";

const CommentForm = ({
  variant = "add", // "add" | "reply"
  videoId,
  commentId,
  handleOnSubmit,
  onCancel,
  isAdding,
}) => {
  const { loggedInUser, isLoggedInUser } = useContext(AuthContext);
  const [showEmoji, setShowEmoji] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const { register, handleSubmit, setValue, reset } = useForm();
  const inputRef = useRef(null);
  const [showSignInCard, setShowSignInCard] = useState(false);

  const handleClickEmoji = (emojiData) => {
    const newValue = commentValue + emojiData.emoji;
    setCommentValue(newValue);
    setValue("comment", newValue, { shouldValidate: true });
  };

  const handleShowEmoji = () => setShowEmoji((prev) => !prev);

  const handleCancel = () => {
    setCommentValue("");
    setShowEmoji(false);
    reset();
    onCancel && onCancel();
  };

  const handleFormSubmit = async (data) => {
    if (variant === "add") {
      const comment = { content: data.comment, videoId };
      handleOnSubmit(comment);
    } else if (variant === "reply") {
      const reply = { content: data.comment, commentId };
      handleOnSubmit(reply);
    }
    setCommentValue("");
    reset();
    setShowEmoji(false);
  };

  useEffect(() => {
    const listener = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowSignInCard(false);
      }
    };
    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, []);

  // ---------- Reply Input ----------
  if (variant === "reply") {
    return (
      <form className="mt-2 w-full" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex items-start space-x-2 relative w-full">
          <img
            src={loggedInUser?.avatar}
            className="w-6 h-6 rounded-full mt-1 object-cover"
            alt="User Avatar"
          />
          <div className="flex-1">
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:border-gray-600 text-sm outline-none px-1 pb-1"
              placeholder="Write a reply..."
              {...register("comment", { required: "Comment is required" })}
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
            />

            <div className="flex justify-between items-center mt-2">
              <div className="relative">
                <button
                  type="button"
                  onClick={handleShowEmoji}
                  className="hover:bg-gray-200 p-1 rounded-full"
                >
                  <Icons.IconIco />
                </button>
                {showEmoji && (
                  <div className="absolute z-50 mt-2">
                    <EmojiPicker onEmojiClick={handleClickEmoji} />
                  </div>
                )}
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-full hover:bg-gray-100 text-sm"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!commentValue.trim()}
                  className={`${
                    commentValue.trim()
                      ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      : "bg-gray-100 text-gray-400"
                  } px-5 py-1.5 rounded-full text-sm`}
                >
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }

  // ---------- Main Comment Input ----------
  return (
    <div className="flex flex-col w-full max-w-[1330px]">
      <div className="flex items-center justify-between mt-4 mb-2">
        <h3 className="text-[16px] font-medium text-[#0f0f0f]">
          <span id="totalComments">210</span> Comments
        </h3>
        <button type="button" title="Sort comments">
          <Icons.SortBarIco />
        </button>
      </div>

      {isAdding ? (
        <DotesLoader />
      ) : (
        <form
          className="flex flex-col space-y-2"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="flex space-x-3 items-start w-full">
            {isLoggedInUser() === true && (
              <>
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={loggedInUser?.avatar}
                  alt="You"
                  title="You"
                />
                <div className="flex-1 relative">
                  <input
                    type="text"
                    {...register("comment", { required: true })}
                    placeholder="Add a comment..."
                    value={commentValue}
                    onChange={(e) => setCommentValue(e.target.value)}
                    className="w-full border-b border-gray-300 focus:border-gray-600 outline-none text-[15px] py-1"
                  />

                  <div className="flex justify-between items-center mt-2">
                    <button
                      type="button"
                      onClick={handleShowEmoji}
                      className="hover:bg-gray-200 p-1 rounded-full"
                    >
                      <Icons.IconIco />
                    </button>
                    {showEmoji && (
                      <div className="absolute z-10 mt-2">
                        <EmojiPicker onEmojiClick={handleClickEmoji} />
                      </div>
                    )}
                    <div className="flex space-x-3">
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="text-sm text-[#606060]"
                      >
                        Cancel
                      </button>
                      <button
                        disabled={!commentValue.trim()}
                        type="submit"
                        className={`${
                          commentValue.trim()
                            ? "bg-[#3262d2] text-white"
                            : "bg-gray-100 text-gray-400"
                        } py-1 px-3 rounded-full text-sm`}
                      >
                        Comment
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* If not logged in */}
            {isLoggedInUser() === false && (
              <>
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src="/404.jpg"
                  alt="You"
                  title="You"
                />
                <div className="flex-1 relative mb-3">
                  <input
                    type="text"
                    ref={inputRef}
                    placeholder="Add a comment..."
                    value={commentValue}
                    onClick={() => setShowSignInCard(true)}
                    onChange={() => setCommentValue("")}
                    className="w-full border-b border-gray-300 outline-none text-[15px] py-1"
                  />
                  {showSignInCard && (
                    <div className="absolute z-20">
                      <SignInCard />
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default CommentForm;
