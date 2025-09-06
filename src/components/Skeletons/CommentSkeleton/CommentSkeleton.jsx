import React from "react";

const CommentSkeleton = () => {

    return (
        <>
            <article className="flex space-x-2 mb-2 items-start justify-start w-[1350px] animate-pulse">
                {/* Logo Skeleton */}
                <div>
                    <div className="bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
                </div>

                {/* Username and content like reply skeleton */}
                <div className="flex flex-col w-[730px] space-y-2">
                    {/* Username skeleton */}
                    <div className="w-[300px] h-[20px] rounded-lg bg-gray-300"></div>

                    {/* Content Skeleton */}
                    <div className="w-[1310px] h-[20px] rounded-lg bg-gray-300"></div>
                    <div className="w-[1310px] h-[20px] rounded-lg bg-gray-300"></div>

                    {/* Like Reply Skeleton */}
                    <div className="flex space-x-2">
                        <div className="w-[60px] h-[20px] rounded-lg bg-gray-300"></div>
                        <div className="w-[60px] h-[20px] rounded-lg bg-gray-300"></div>
                    </div>

                </div>
            </article>

        </>
    )
}

export default CommentSkeleton;