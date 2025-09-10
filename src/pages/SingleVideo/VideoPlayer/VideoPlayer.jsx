import ReactPlayer from 'react-player';

const MyVideoPlayer = ({ url, poster,onEnded }) => {
  return (
    <div className="w-full h-[800px] rounded-xl overflow-hidden">
      <ReactPlayer
        src={url}
        controls
        onEnded={onEnded}
        lang='eng'
        width="100%"
        height="100%"
        light={poster}  // poster image
      />
    </div>
  );
};

export default MyVideoPlayer;
