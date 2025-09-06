import React from 'react'
import { Routes,Route,BrowserRouter,Link, } from 'react-router-dom'
import AddVideoPlaylist from './pages/SingleVideo/Channel/VideoActions/AddVideoPlaylist/AddVideoPlaylist';
// Route Loader
import UseRouteLoader from "./utils/UseRouteLoader";
// Main Layout 
import MainLayout from './components/Layouts/MainLayout/MainLayout';

// Pages
import SingleVideo from "./pages/SingleVideo/SingleVideo";
import ChannelPage from "./pages/ChannelPage/Channel";
import HomePage from "./pages/HomePage/Home";
import HistoryPage from "./pages/HistoryPage/History";
import SubscriptionPage from "./pages/SubscriptionPage/Subscription";
import SearchPage from "./pages/SearchPage/Search";
import SinglePlaylistPage from "./pages/SinglePlaylist/SinglePlaylist";
import PlaylistsPage from "./pages/Playlists/Playlists";
import LoginPage from "./pages/LoginPage/Login"
import SubscribeButton from "./components/Buttons/SubscribeButton/SubscribeButton"
function App() {
  UseRouteLoader(); 
  return (
      <Routes>
        
        {/* Main layout pages */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/watch" element={<SingleVideo /> } />
          <Route path="/channel" element={<ChannelPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/result" element={<SearchPage />} />
          <Route path="/playlist" element={<SinglePlaylistPage />} />
          <Route path="/playlists" element={<PlaylistsPage />} />
          <Route path='/sub' element={<SubscribeButton />} />
          <Route path='/add' element={<AddVideoPlaylist />} />
        </Route>

        {/* Without layout pages */}
        <Route path="/login" element={<LoginPage />} />
        

      </Routes>
  )
}

export default App
