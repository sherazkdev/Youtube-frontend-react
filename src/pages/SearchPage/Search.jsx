import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RowTypeCard from "../../components/Cards/SearchPage/RowTypeCard";
import useDetailedVideoSearch from '../../hooks/useDetailedVideoSearch';
import TopHeader from './TopHeader/TopHeader';

const Search = () => {

  // for check location and get url parameters
  const location = useLocation();
  // get all parameters 
  const queryParameters = new URLSearchParams(location.search);

  // states
  const [query,setQuery] = useState({q:queryParameters?.get("q") || null,page:1,limit:10});
  const [searchVideos,setSearchVideos] = useState([]);
  
  // this hook for get search data 
  const  [searchVideoError,searchVideoLoading,searchVideoByOrDescriptionWithDetails] = useDetailedVideoSearch();

  // this useffect for using error handling
  useEffect( () => {
    if(searchVideoError) return (<>Some thing wrong?</>)
  },[searchVideoError])

  // get data latest data and if update url paramter data to get latest data
  useEffect( () => {
    if(location.pathname === "/result"){
      setQuery( {q:queryParameters.get("q"),page:queryParameters?.get("page") || 1,limit:queryParameters?.get("limit") || 10});
    }
  },[location.search,location.pathname])

  // this useffect using for if change query value tho call api and get latest videos
  useEffect( () => {
    // if is not null
    if(query?.q?.trim() !== ""){
      ( async () => {
        try {
          const videos = await searchVideoByOrDescriptionWithDetails(query);
          if(searchVideoLoading === false && videos?.length > 0){
            setSearchVideos(videos)
          }
        } catch (error) {
          return (<>Some thing wrong ${error}</>)
        }
      })()
    }
  },[query,query.q])

  return (
    <section id='main-wrapper' className='w-full flex justify-center items-center'>

      <div className="w-[1280px] flex justify-center items-start space-y-4  flex-col">

          <TopHeader />
          
          {/* search result */}
          <section>
            <p className="italic">
              <span className="text-[12px] text-[#0f0f0f]">Showing results for </span>
              <span className="text-[#0f0f0f] font-medium text-[14px]">{query?.q}</span>
            </p>
          </section>
          
          {/* search video section */}
          <section className="flex flex-col w-full space-y-3">
            {searchVideos.map( (searchedVideo) => (
              <RowTypeCard video={searchedVideo} key={searchedVideo?._id} />
            ))}
          </section>

      </div>

    </section>
  )

}

export default Search;
