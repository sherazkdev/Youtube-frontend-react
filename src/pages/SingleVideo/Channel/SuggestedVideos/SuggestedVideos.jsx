import React from "react";
import RowTypeCard from "../../../../components/Cards/WatchPage/RowTypeCard";

const SuggestedVideos = ({videos}) => {
    return (
        <>
            <section className="px-6 mt-[20px]">

                {videos?.map( (video,index) => ( 
                       
                    <RowTypeCard  video={video} key={index}/>

                ) )}

            </section>     
        </>
    )
} 

export default SuggestedVideos;