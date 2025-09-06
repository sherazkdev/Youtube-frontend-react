import React, { useEffect, useState } from 'react';
import { useLocation,useNavigate } from "react-router-dom";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoDescription from "./VideoDescription/VideoDescription";
import ChannelInfo from "./Channel/ChannelInfo/ChannelInfo";
import CommentForm from "./Comments/CommentForm/CommentForm";
import CommentsList from "./Comments/CommentList/CommentList";
import VideoActions from "./Channel/VideoActions/VideoActions";
import SuggestedVideos from "./Channel/SuggestedVideos/SuggestedVideos";
import VideosPlaylist from "./Channel/VideosPlaylist/VideosPlaylist";
import useVideoOrPlaylist from "../../hooks/useVideoOrPlaylist";
import useVideoComments from "../../hooks/useVideoComments";
import CommentSkeleton from "../../components/Skeletons/CommentSkeleton/CommentSkeleton";
import useSuggestedVideos from "../../hooks/useSuggestedVideos";
import useLikeVideoToggle from '../../hooks/useLikeVideoToggle';
import useCommentLikeToggle from '../../hooks/useCommentLikeToggle';
import useAddComment from "../../hooks/useAddComment";
import VideoInfoSkeleton from "../../components/Skeletons/VideoInfoSkeleton/VideoInfoSkeleton"
import RowTypeVideoCardSkeleton from '../../components/Skeletons/RowTypeVideoCardSkeleton/RowTypeVideoCardSkeleton';
// import useAddReplyComment from "../../hooks/useAddReplyComment";

const SingleVideo = () => {

    const [comments, setComments] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [currentIndex,setCurrentIndex] = useState(0);
    const [shuffle,setShuffle] = useState(true);
    const [loop,setLoop] = useState(false);

    // Get Params from url
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    // use navigate
    const navigate = useNavigate();

    const query = {
        v: params.get("v"),
        playlistId: params.get("playlistId")?.trim() || undefined,
        index: Number(params.get("index")) || 0,
    };

    useEffect( () => {
            
        setCurrentIndex(query.index);
    },[query.index])

    // Fetching video by id
    const [data, videoloading, videoError] = useVideoOrPlaylist({
        videoId: query.v,
        playlistId: query.playlistId
    });
    
    // Fetching video comments
    const [videoComments,commentsLoading,commentsError] = useVideoComments(data?.video?._id);

    // Fetch SuggestedVideos ById
    const [suggestedVideos,suggestedVideosLoading,suggestedVideosError] = useSuggestedVideos(data?.video?._id);

    // Like unlike toggle
    const [isLiked, videoLikes, videoLikeError, likeVideoToggleHandler] = useLikeVideoToggle(data?.video);

    // Like unlike comment toggle 
    const [commentLikeToggleError,likeCommentToggle] = useCommentLikeToggle();

    // Upload new Comment for video 
    const [addCommentError,addCommentLoading,addNewComment] = useAddComment();


    // for errors
    useEffect(() => {
        if (videoError) setErrorMessage(videoError);
        else if (commentsError) setErrorMessage(commentsError);
        else if (suggestedVideosError) setErrorMessage(suggestedVideosError);
        else if(commentLikeToggleError) setErrorMessage(commentLikeToggleError)
        else if(addCommentError) setErrorMessage(addCommentError)
    }, [videoError, commentsError, suggestedVideosError,commentLikeToggleError,addCommentError]);

    useEffect( () => {

        if(videoComments) setComments(videoComments);

    },[videoComments])

    // * Handlers * //

    // Like Unlike Video Toggle 
    const handleVideoLikeToggle = async () => {
        try {
            await likeVideoToggleHandler();
            if (videoLikeError) {
                console.log(videoLikeError);
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    // upload Comment for reply comment and for video Comment
    const handleOnSubmit = async (payload) => {
        try {
          if (payload.videoId) {

            // Comment API call
            const comment = await addNewComment(payload);

            // set new uplaoded comment
            setComments((prevComments) => [comment, ...prevComments]);

          } else if (payload.commentId) {
            
            // const replyComment = await useaddR
            console.log(payload)
      
          }
        } catch (error) {
          console.error("Error submitting comment/reply:", error);
        }
    };
      

    // Handle Like toggle For Comments
    const handleLikeCommentToggle = async ({commentId,setTotalCommentLikes,setIsLiked}) => {
        try {
            // Like Unlike
            await likeCommentToggle(commentId,setTotalCommentLikes,setIsLiked);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    // for playlist for video end
    const handleVideoEnd = () => {
        try {
            if(data?.playlist) {
            
                if(shuffle){
                    const randomVideoIndex = Math.floor(Math.random() * data?.playlist?.videos.length);
                    navigate(`/watch?v=${data?.playlist?.videos[randomVideoIndex]?._id}&playlistId=${data?.playlist?._id}&index=${randomVideoIndex}`)
                }else {
                    const loopVideoIndex = currentIndex + 1 > data?.playlist?.videos?.length - 1 ? 0 : currentIndex + 1;
                    console.log(loopVideoIndex)
                    navigate(`/watch?v=${data?.playlist?.videos[loopVideoIndex]?._id}&playlistId=${data?.playlist?._id}&index=${loopVideoIndex}`)
                }
                return;
            }else if(suggestedVideos?.length > 0){
                alert();
                const loopVideoIndex = suggestedVideos.length - 1 > suggestedVideos.length -1 ? 0 : suggestedVideos.length - 1 ;
                console.log(loopVideoIndex,suggestedVideos)
                navigate(`/watch?v=${suggestedVideos[loopVideoIndex]?._id}`)
            }
        } catch (error) {
            console.log(error)
        }
    };

    // Error Message checking
    if(errorMessage){
        return console.log(errorMessage)
    }

    const currentVideo = data?.playlist ? data?.playlist?.videos[currentIndex]?.videoFile : data?.video?.videoFile;
    return (
        <>
            {/* Video,Description,Operations,comments,relatedVideos Sections */}
            <section className="max-w-[2850px] flex-1 flex justify-start items-start">
                {/* Video,comments,description,operations,sections */}
                <section id="videoSections" className="flex flex-col mt-[20px] ml-[50px] max-w-[1350px]">

                    {/* Video Player and operations sections */}
                    <section className="flex flex-col">

                        {/* Video Player */}
                        <div className="w-[1350px] bg-slate-950 rounded-xl">
                            <VideoPlayer poster={currentVideo?.thumbnail}  url={currentVideo} onEnded={handleVideoEnd} />
                        </div>

                        {/* Operations */}
                        <div className="px-0 py-3 items-start">
                            {videoloading === false ? (
                                <>
                                    {/* Video Title */}
                                    <div>
                                        <h2 className="font-medium text-[#0f0f0f]">{data?.video?.title}</h2>
                                    </div>

                                    {/* Channel Info and Operations */}
                                    <div className="flex justify-between py-5 items-start">

                                        {/* Channel Info */}
                                        <ChannelInfo video={data?.video} />

                                        {/* Operations */}
                                        <VideoActions
                                            isLiked={isLiked}
                                            videoId={data?.video?._id}
                                            videoLikes={videoLikes}
                                            handleVideoLikeToggle={handleVideoLikeToggle}
                                        />

                                    </div>
                                </>
                            ) : (
                                <VideoInfoSkeleton />
                            )}

                        </div>

                    </section>

                    {/* Description Section */}
                    <VideoDescription video={data?.video} />

                    {/* Comments container */}
                    <section id="commnetsContainer" className="flex flex-col space-y-3">

                        {/* Comment Form */}
                        <CommentForm
                            videoId={data?.video?._id}
                            variant='add'
                            handleOnSubmit={handleOnSubmit}
                            isAdding={addCommentLoading}
                        />

                        {/* Comments List / Skeleton */}
                        {commentsLoading === true ? (
                            <div id="comments-skeleton" className="flex flex-col">
                                {Array(5).fill(null).map((skeleton, index) => (
                                    <CommentSkeleton key={index} />
                                ))}
                            </div>
                        ) : commentsLoading === false ? (
                            <CommentsList comments={comments} handleOnSubmit={handleOnSubmit} handleLikeCommentToggle={handleLikeCommentToggle}/>
                        ) : null}

                    </section>

                </section>

                {/* Related Videos Section */}
                <section id="relatedVideos" className="flex flex-col space-y-2 ">

                    {data?.playlist ? (
                        <VideosPlaylist playlist={data?.playlist} loop={loop} setLoop={setLoop} currentIndex={currentIndex} shuffle={shuffle} setShuffle={setShuffle} />
                    ) : null}

                    {/* Suggested Videos */}
                    {suggestedVideosLoading === true && (
                        <section className="px-6 mt-[20px]">
                            <RowTypeVideoCardSkeleton />
                        </section>
                    )}
                    {!suggestedVideosLoading && suggestedVideos?.length > 0 && (
                        <SuggestedVideos videos={suggestedVideos} />
                        
                    )}

                </section>
            </section>
        </>
    );
};

export default SingleVideo;
