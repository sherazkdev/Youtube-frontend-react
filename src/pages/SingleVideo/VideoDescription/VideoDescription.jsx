import React,{useState} from 'react';
import DOMPurify from "dompurify";
import ViewsCalculate from '../../../utils/ViewsCalculate';
const VideoDescription = ({video}) => {

    const limit = 143;
    const uploadedDate = new Date(video?.createdAt).toLocaleString("en-us",{year:"numeric",month:"short",day:"numeric"});
    const [expanded,setExpanded] = useState(false);
    const isLong = video?.description?.length > limit;
    const displayText = expanded ? video?.description : video?.description?.slice(0,limit) + (isLong ? "..." : "");

    return (
        
            <>
                <section className="w-[1350px] rounded-lg bg-[#f2f2f2] p-2 ">
                            
                    <div id="topHeader" className="flex space-x-2 font-medium">
                                
                        {/* Views And view label */}
                        <div id="views" className="flex space-x-1 text-[#0f0f0f]">
                                
                            {/* Views Total */}
                            <p id="views">{<ViewsCalculate views={video?.views} />}</p>
                                
                            {/* Views Label */}
                            <p id="viewsLable">views</p>
                                
                            </div>
                                
                            {/* Video Uploaded Date */}
                            <div id="uploadedDate">
                                
                                <p> {uploadedDate} </p>
                                
                            </div>
                            
                        </div>
                            
                        <div id="description">
                            <div className="text-left" dangerouslySetInnerHTML={{
                                __html: expanded
                                ? DOMPurify.sanitize(video?.description)
                                : DOMPurify.sanitize(displayText),
                            }} />   
                                { isLong && (
                                    <button onClick={ () => setExpanded(!expanded) }> 
                                        {expanded ? "Show Less" : "Show More"}
                                    </button>
                                ) }


                        </div>

                            
                </section>
            </>
    
    );
}

export default VideoDescription;
