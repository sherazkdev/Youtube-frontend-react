import ReactPlayer from 'react-player';

const MyVideoPlayer = ({ url, poster,onEnded }) => {
  return (
    <div className="max-w-[1350px] h-[600px] rounded-xl overflow-hidden">
      <ReactPlayer
        src={url}
        controls
        onEnded={onEnded}
        lang='eng'
        width="100%"
        height="600px"
        light={poster}  // poster image
      />
    </div>
  );
};

export default MyVideoPlayer;
