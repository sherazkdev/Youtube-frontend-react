// AddVideoPlaylist.jsx
import React, { useEffect, useState } from 'react';
import Icons from "../../../../../assets/Icons";
import PopUpOverlay from '../../../../../components/Popups/PopUpOverlay/PopUpOverlay';
import CreatePlaylist from "../CreatePlaylist/CreatePlaylist";
import NotificationPopUp from "../../../../../components/Popups/Notification/Notification"

const AddVideoPlaylist = ({ getAllPlaylist, onClose, videoId, handleVideoAddPlaylist,handleCreateNewPlaylist }) => {
  const [showAddPlaylist, setShowAddPlaylist] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [notification,setNotification] = useState(null);

  // fetch playlists on mount
  useEffect(() => {
    const handleFetchAllPlaylist = async () => {
      try {
        const data = await getAllPlaylist();
        setPlaylists(data);
      } catch (error) {
        console.log("Error fetching playlists:", error);
      }
    };

    handleFetchAllPlaylist();
  }, [getAllPlaylist]);


  // handle onclick checking
  const handleOnclickCheckbox = async (playlistId,videoId,isChecked) => {
    try {
      const playlistPayload = await handleVideoAddPlaylist(playlistId,videoId,isChecked);
      if(playlistPayload?.playlist !== undefined){
        setPlaylists( (prevPlaylist) => prevPlaylist.map( (p) => p?._id === playlistPayload?.playlist?._id ? playlistPayload?.playlist : p));
        setNotification(playlistPayload?.message)
      }
    } catch (error) {
      return console.log(error);
    }
  }


  return (
    <PopUpOverlay>  
      {notification && (<NotificationPopUp message={notification} />)}
      
      {showAddPlaylist ? (
        <CreatePlaylist onClose={setShowAddPlaylist} handleCreateNewPlaylist={handleCreateNewPlaylist}/>
      ) : (
        <>
          <div
            id="videoAddPlaylistsPopUp"
            className="w-[250px] bg-white shadow-lg flex flex-col space-y-5 px-4 py-3 rounded-lg"
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <p className="font-medium">Save video to...</p>
              <button onClick={onClose} className="text-gray-600 hover:text-black">
                <Icons.CrossIcon />
              </button>
            </div>

            {/* Playlist checkboxes */}
            <div className="flex flex-col space-y-3 items-start w-full">
              {playlists.map((playlist, index) => (
                <div
                  key={playlist._id || index}
                  className="flex justify-between items-center w-full"
                >
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`playlist-${index}`}
                      className="w-5 h-5 cursor-pointer"
                      checked={playlist.videos?.includes(videoId)}  
                      onChange={ (e) => handleOnclickCheckbox({playlistId:playlist._id,videoId,isChecked:e.target.checked})}
                    />
                    <label
                      htmlFor={`playlist-${index}`}
                      className="text-[14px] cursor-pointer"
                    >
                      {playlist.name}
                    </label>
                  </div>

                  {/* private playlist lock */}
                  {playlist.visibility === "PRIVATE" && (
                    <Icons.LockIco width="18px" height="18px" />
                  )}
                  {playlist.visibility === "PUBLIC" && (
                    <Icons.EarthIco />
                  )}
                </div>
              ))}
            </div>

            {/* New Playlist */}
            <div className="flex justify-center items-center">
              <button
                onClick={() => setShowAddPlaylist(true)}
                className="flex cursor-pointer items-center space-x-2 px-3 font-medium py-2 text-[13px] rounded-full bg-[#f2f2f2] hover:bg-gray-300"
              >
                <Icons.PlusIco />
                <p title="create playlist">New Playlist</p>
              </button>
            </div>
          </div>
        </>
      )}
    </PopUpOverlay>
  );
};

export default AddVideoPlaylist;
