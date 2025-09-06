import React from "react";
import axios from "axios";

// Video Model Api


const baseURL = import.meta.env.VITE_API_URL;

// fetch video by video id
export const handleFetchUserById = async (videoId) => {
    const fetchVideo = await axios.get(`/api/v1/videos/video/${videoId}`);
    return fetchVideo;
}

// get Video By video id
export const handleGetVideoById = async (videoId) => {
    // fetch video by video id
    const fetchVideo = await axios.get(`${baseURL}/api/v1/videos/video/${videoId}`);
    // return fetched video
    return fetchVideo;
}

// get Latest Videos for home page
export const handleGetLatestVideos = async () => {
    // fetch latest videos
    const fetchVideos = await axios.get(`${baseURL}/api/v1/videos/videos`);
    // finaly return videos 
    return fetchVideos;
}

// get Suggested Video by video min 5
export const handleGetRelatedVideosByVideoId = async (videoId) => {
    // fetching suggested videos
    const fetchSuggestedVideos = await axios.get(`${baseURL}/api/v1/videos/relatedVideos?_id=${videoId}`);
    // and finaly return fetchSuggestedVideos
    return fetchSuggestedVideos;
}

// fetch video comments by videoId
export const handleGetVideoCommentsByVideoId = async (videoId) => {
    // fetching comments by video videoId
    const videoComments = await axios.get(`${baseURL}/api/v1/comments/video/${videoId}`);
    // and finaly return videoComments
    return videoComments;
}

// get Watch history by Cookies
export const handleGetWatchHistory = async () => {
    // fetching watch history with cookies bearer token refreshtoken any
    const watchHistory = await axios.get(`${baseURL}/api/v1/users/watch-hisory`,{withCredentials:true});
    // finaly return loggedInUserWatchHistory
    return watchHistory;
}

// like unlike Video Toggle 
export const handleLikeUnlikeVideoToggle = async (videoId) => {
    // toggle like unlike 
    const likeVideoToggle = await axios.patch(`${baseURL}/api/v1/likes/likeVideo`,{videoId:videoId},{withCredentials:true})
    // return response
    return likeVideoToggle;
}

// fetchPlaylist by playList Id
export const handelGetPlaylistById = async (playlistId) => {

    // fetching playlist 
    const playlist = axios.get(`${baseURL}/api/v1/playlists/playlist/${playlistId}`,{withCredentials:false});
    // return finaly fetched playlist
    return playlist;
}

// check user by email is exist
export const handleGetUserByEmailIsExist = async (email) => {
    // check user by email is exist
    const checkUserByEmail = await axios.post(`${baseURL}/api/v1/users/checkUserByEmail`,{email});
    // finaly return check user by email
    return checkUserByEmail;
        
}

// login user by email and password api
export const handleLoginUser = async (email,password) => {
    // check user email and password is match successfull
    const loginUserByEmailAndPassword = await axios.post(`${baseURL}/api/v1/users/login`,{email,password});
    // finaly return login user details response
    return loginUserByEmailAndPassword;
}

// get current user bu cookies
export const handleGetCurrentUser = async () => {
    // get current user by cookies
    const checkUserIsLoggedInAndVerify = await axios.get(`${baseURL}/api/v1/users/current-user`,{withCredentials:true});
    // finally return checkUserIsExist
    return checkUserIsLoggedInAndVerify; 
}

// upload new comment 
export const handleUploadNewComment = async (comment) => {
    // new comment uploading proccess
    const addComment = await axios.post(`${baseURL}/api/v1/comments/add-comment`,{videoId:comment?.videoId,content:comment?.content},{withCredentials:true});
    // and finaly sending response
    return addComment;
}

// reply Comment parent author 
export const handleReplyCommentHandler = async (reply) => {
    // adding reply proccess is starting
    const addReply = await axios.patch(`${baseURL}/api/v1/comments/reply-comment`,reply,{withCredentials:true});
    // and finaly send response
    return addReply;
}

// like unlike comment toggle
export const handleLikeCommentToggle = async (commentId) => {
    // comment like unlike proccess
    const likeCommentToggle = await axios.post(`${baseURL}/api/v1/likes/likeComment`,{commentId},{withCredentials:true});
    // and finaly send response;
    return likeCommentToggle;

}

// Get comment replies by commentId 
export const handleGetCommentReplies = async (payload) => {

    const fetchLatestCommentReplies = await axios.get(`${baseURL}/api/v1/comments/comment-replies?commentId=${payload?.commentId}&page=${payload?.page || 1}&limit=${payload?.limit || 9}`);
    return fetchLatestCommentReplies;

}

// unsubsribed channel toggle
export const handleSubscribeAndUnsubscribeToggle = async (channelId) => {
    const isSubscribedToggle = await axios.get(`${baseURL}/api/v1/subscriptions/toggle-subscription/${channelId}`);
    return isSubscribedToggle;
}

// handle get all playlist with owner id
export const handleGetAllPlaylist = async () => {
    // fetching all playlist
    const playlists = await axios.get(`${baseURL}/api/v1/playlists/my-playlists`,{withCredentials:true});
    // finaly return all playlist fetch || response
    return playlists;
}

// handle add video in playlist 
export const handleAddVideoInPlaylist = async (payload) => {
    // add video in playlist requesting now
    const addVideo = await axios.patch(`${baseURL}/api/v1/playlists/add-video-to-playlist/${payload?.playlistId}/${payload?.videoId}`,{withCredentials:true});
    // return add video response
    return addVideo;
}
// handle remove video from watch history
export const handleRemoveVideoFromPlaylist = async (payload) => {
    // remove video in playlist requesting now
    const removeVideo = await axios.patch(`${baseURL}/api/v1/playlists/remove-video-from-playlist/${payload?.playlistId}/${payload?.videoId}`,{withCredentials:true});
    // return remove video response
    return removeVideo
}

// handle create new playlist for videos and etc.
export const handleCreatePlaylist = (payload) => {
    // create playlist payload sending by api 
    const createPlaylist = axios.post(`${baseURL}/api/v1/playlists/create-playlist`,payload,{withCredentials:true});
    // create playlist response return now
    return createPlaylist;
}

// handle remove video from watch history
export const handleRemoveVideoFromWatchHistory = async (videoId) => {
    // video removing from watch history any video with accesstoken 
    const removeVideoPromise = await axios.get(`${baseURL}/api/v1/users/remove-video-from-watch-history/${videoId}`,{withCredentials:true});
    // finally return remove video from watch history response
    return removeVideoPromise;
}

// handle search history form watch history
export const handleSearchWatchHistory = async (query) => {
    // search watch history by title by date by description query s.e.o friendly
    const searchWatchHistory = await axios.get(`${baseURL}/api/v1/users/search-history?query=${query}`,{withCredentials:true});
    // return constant response
    return searchWatchHistory;
}

export const handleGetSubscriptions = async (query) => {
    // fetch latest subscription user details and latest videos
    const subscriptions = await axios.get(`${baseURL}/api/v1/users/latest-notifications?page${query?.page || 1}&limit=${query?.limit || 20}`,{withCredentials:true});
    // return subscriptions response
    return subscriptions;
}

export const handleSearchVideoByTitle = async (query) => {
    // featch mathed videos
    const matchedVideos = await axios.get(`${baseURL}/api/v1/videos/search-query?query=${query}`,{withCredentials:true});
    // return data response
    return matchedVideos;
}

export const handleSearchVideoWithFullDetails = async (query) => {
    // search video with full details added page or query or limit
    const searchVideos = await axios.get(`${baseURL}/api/v1/videos/search-video-by-title-or-description?q=${query?.q}&page=${query?.page || 1}&limit=${query?.limit || 10}`,{withCredentials:true});
    console.log(searchVideos)
    // return response fethed videos
    return searchVideos;
}
