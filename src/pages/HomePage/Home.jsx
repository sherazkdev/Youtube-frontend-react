import React from 'react';
import ColumnTypeCard from "../../components/Cards/HomePage/ColumnTypeCard";
import useVideos from "../../hooks/useVideos";
import VideoSceleton from "../../components/Skeletons/VideoSkeleton/VideoSkeleton"
import {Helmet} from "react-helmet"

const Home = () => {

    const [latestVideos,error,loading] = useVideos([]);
    if(error){
        return console.error(error || "Error : someting wrong");
    }

    return (
        <>
            {/* <Helmet>
                <title>Youtube Streaming Project</title>
                <meta name="description" content="Watch the latest videos on VideoHub. Explore a wide range of content including tutorials, entertainment, and more." />
                <meta name="keywords" content="videos, tutorials, entertainment, VideoHub, latest videos, online videos" />
            </Helmet> */}
            {loading ? (
                <>
                    {Array(20).fill(null).map( (_y,index) => (
                        <VideoSceleton key={index} />
                    ))}
                </>
            ) : (
                <>
                    {latestVideos.map( (video) => (
                        <ColumnTypeCard video={video} key={video?._id} />
                    ) )}
                </>
            )}
        </>     
    )
}

export default Home;
