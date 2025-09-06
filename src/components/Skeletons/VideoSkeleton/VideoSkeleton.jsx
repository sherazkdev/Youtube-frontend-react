import React from 'react';

const VideoSkeleton = () => {
    return (
        <>
            
            <div className='animate-pulse inline-block align-top m-[10px_10px_10px_10px]'>

                <div className='flex flex-col space-y-2'>
                    
                    <div id='thumbnail-skl' className='w-[460px] h-[241px] rounded-lg bg-gray-300'></div>
                    <div id='thumbnail-skl' className='w-[430px flex space-x-2 '>

                            <div className='w-[40px] bg-gray-300 h-[40px] rounded-full'></div>
                            
                            <div className='ml-2 flex flex-col space-y-2'>
                                <div className='bg-gray-300 w-[370px] h-[18px] rounded-sm'></div>
                                <div className='bg-gray-300 w-[280px] h-[18px] rounded-sm'></div>
                            </div>

                    </div>

                </div>

            </div>

        </>
    );
}

export default VideoSkeleton;
