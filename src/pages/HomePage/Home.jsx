import React from 'react';
import ColumnTypeCard from "../../components/Cards/HomePage/ColumnTypeCard";
import useVideos from "../../hooks/useVideos";
import VideoSceleton from "../../components/Skeletons/VideoSkeleton/VideoSkeleton"

const Home = () => {

    const [latestVideos,error,loading] = useVideos([]);
    if(error){
        return console.error(error || "Error : someting wrong");
    }

    return (
        <>
            {loading ? (
                <>
                    {Array(10).fill(null).map( (_y,index) => (
                        <VideoSceleton key={index} />
                    ))}
                </>
            ) : (
                <>
                    {latestVideos.map( (video) => (
                        <ColumnTypeCard video={video}  />
                    ) )}
                </>
            )}
        </>     
    )
}

export default Home;
