import React from "react";
import Icons from "../../../assets/Icons";
import {Link} from "react-router-dom";
import ViewsCalculate from "../../../utils/ViewsCalculate";
import DateCalculate from "../../../utils/DateCalculate";
const WatchHistoryTypeCard = ({video}) => {
    return (

        <>
            <article className="grid grid-cols-[30px_4fr_30px] items-center grid-rows-[129px] gap-3 p-1 hover:bg-[#f2f2f2] rounded-md">
                {/* index */}
                <div>
                    <span>
                        <Icons.TwoLineIcon />
                    </span>
                </div>

                {/* content */}
                <div className="grid grid-cols-[200px_1fr] w-full h-full gap-2">
                <div className="w-full">
                    <Link to={`/watch?v=${video?._id}`}>
                        <img
                            src={video?.thumbnail}
                            className="w-full h-[113px] rounded-md"
                            alt="thumbnail"
                        />
                    </Link>
                </div>

                <div className="flex flex-col space-y-2">
                    <Link to={`/watch?q=${video?._id}`} className="text-[16px] font-bold">{video?.title}</Link>
                    <div className="flex text-[14px] text-[#606060] gap-x-1 font-normal">
                        <p>{video?.owner?.fullname}</p>
                        <div>•</div>
                        <div>{<ViewsCalculate views={video?.views || 6500} />}</div>
                        <div>•</div>
                        <p>{<DateCalculate localDate={video?.createdAt} />}</p>
                    </div>
                </div>
                </div>

                {/* menu */}
                <div className="justify-self-end">
                    <button>
                        <Icons.ThreeDotIco />
                    </button>
                </div>
            </article>
        </>

    )

}

export default WatchHistoryTypeCard;