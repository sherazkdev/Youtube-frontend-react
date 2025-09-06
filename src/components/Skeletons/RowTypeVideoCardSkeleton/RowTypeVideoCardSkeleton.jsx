const RowTypeVideoCardSkeleton = () => {
    return (
      <div className="animate-pulse w-full flex flex-col space-y-2" id="row-type-video-card-skeleton">
        {Array(8).fill(null).map( (_y,index) => (
            <div key={index} className="flex space-x-2 justify-start items-start w-full">
            <div className="w-[164px] h-[95px] bg-gray-300" />
            <div className="flex flex-col space-y-2">
                <div className="w-[180px] h-[17px] rounded-lg bg-gray-300" />
                <div className="w-[140px] h-[17px] rounded-lg bg-gray-300" />
            </div>
            </div>
        ))}

      </div>
    );
  };
  
  export default RowTypeVideoCardSkeleton;
  