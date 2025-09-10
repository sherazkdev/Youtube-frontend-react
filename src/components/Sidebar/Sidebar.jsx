import React, { useContext, useEffect, useRef, useState } from "react";
import Icons from "../../assets/Icons";
import { Link } from "react-router-dom";
import useSidebarDetails from "../../hooks/useSidebarDetails"
import {AuthContext} from "../../context/AuthContext"

const Sidebar = ({ variant = "expanded",isExpanded,handleClickSidebarBar }) => {
    const [subscriptionIsExpended, setSubscriptionIsExpended] = useState(false);
    const sidebarRef = useRef(null);

    // this hook using for sidebar details
    const [sidebarDetailsError,sidebarDetailsLoading,data] = useSidebarDetails();

    // for error handling
    useEffect( () => {
      if(sidebarDetailsError) return (<> Some thing wrong</>)
    },[sidebarDetailsError])

    // for loading
    if(sidebarDetailsLoading){
      return (<>Please wait</>)
    }

    const {isLoggedInUser} = useContext(AuthContext);
  
    // subscription
    const subscriptions = [
      {
        avatar:"https://yt3.ggpht.com/t0Mglt5gjtPzlc0vd5H5Q6HB2BLlVYj3F8KrWV5RKPAdR0AvpYQJrYji0AKU58GQBo6WNrMU5As=s88-c-k-c0x00ffffff-no-rj",
        fullname:"Kuruluş Osman",
        isRecentlyUploaded:true,
      },
      {
        avatar:"https://yt3.ggpht.com/4bBup0XuY0h5Ez9sGEr3d0eRboggo6eXPfXIlYRIqZ_PBDLJgqPd8PqrA9okzQxTm1-pVjCDyw=s88-c-k-c0x00ffffff-no-rj",
        fullname:"Pyshco Nejdet",
        isRecentlyUploaded:false,
      },
      {
        avatar:"https://yt3.ggpht.com/ytc/AIdro_nyClrIT--BirD1B4Sj0Ol92tIpJpC8dWdRu7mFf7CVJPU=s88-c-k-c0x00ffffff-no-rj",
        fullname:"Bozdağ Film",
        isRecentlyUploaded:true,
      },
      {
        avatar:"https://yt3.ggpht.com/P7dfHnuUHplsm0NTdMXuhfp6zC5m2EsTid_MgDrmSEIWXmJKq5r4QLwcKHK5DoD03bJbHXJ3VA=s88-c-k-c0x00ffffff-no-rj",
        fullname:"Sayf Jaxon",
        isRecentlyUploaded:true,
      },
      {
        avatar:"https://yt3.ggpht.com/h9cJrpK-KAM3i0EV7HYQU9kB_1eNwzpgfL3DF70GHnfYDUFpAkJV6djhJOBiQuBjn5xYi4UDWWk=s88-c-k-c0x00ffffff-no-rj",
        fullname:"Animate Prefrence",
        isRecentlyUploaded:false,
      },
      {
        avatar:"https://yt3.ggpht.com/FqkhHuAOU1eNXotxexcuV6Jc7S6t2Y8VmoKhMeGR5tA3p5T-e0rLvdEjQBQUqLeqxlmN6o6Bsn4=s68-c-k-c0x00ffffff-no-rj",
        fullname:"Bollywood Silver Screen",
        isRecentlyUploaded:false,
      },
      {
        avatar:"https://yt3.ggpht.com/RmBKsSa7hzrKsVtCVhdk0lzB6LHsGCiFkQ3PJIYfUqA2gKPONfI5UA5lKV48cPb_T4eM6I48hhU=s68-c-k-c0x00ffffff-no-rj",
        fullname:"CreView",
        isRecentlyUploaded:true
      }
    ];
  
    // topNavLinks links  
    
    const Subscriptions = data?.subscriptions;
    const topNavLinks = [
      {
        icon:Icons.HomeIco,
        title:"Home",
        href:"/",
        isUploadedNewVideo:false
      },
      {
        icon:Icons.ShortIco,
        title:"Shorts",
        href:"/404",
        isUploadedNewVideo:false
      },
      {
        icon:Icons.SubscriptionIco,
        title:"Subscriptions",
        href:"/subscriptions",
        isUploadedNewVideo:true,
      }
    ];
  
    // your links
    const yourLinks = [
      {
        icon:Icons.LeftArrowIco,
        title:"You",
        href:"/"
      },
      {
        icon:Icons.HistoryIco,
        title:"History",
        href:"/history",
      },
      {
        icon:Icons.PlayListIco,
        title:"Playlists",
        href:"/playlists",
      },
      {
        icon:Icons.VideoIco,
        title:"Your Videos",
        href:"/your-videos",
      },
      {
        icon:Icons.WatchIco,
        title:"Watch Later",
        href:"/playlist?list=WL",
      },
      {
        icon:Icons.ThumbFilled,
        title:"Liked Videos",
        href:"/playlist?list=LL",
      },
      {
        icon:Icons.DownloadIco,
        title:"Downloads",
        href:"/downloads",
      }
    ];
  
    // more links
    const moreLinks = [
      {
        icon:Icons.SettingIco,
        title:"Settings",
        href:"/settings",
      },
      {
        icon:Icons.ReportIco,
        title:"Report history",
        href:"/report-history",
      },
      {
        icon:Icons.HelpIco,
        title:"Help",
        href:"/help",
      },
      {
        icon:Icons.FeedBackIco,
        title:"Send feedback",
        href:"/feedback",
      }
    ];
  
    // footer links
    const footerLinks = [
      {
        title:"About",
        href:"/about",
      },
      {
        title:"Press",
        href:"/press",
      },
      {
        title:"Copyright",
        href:"/copyright",
      },
      {
        title:"Contact us",
        href:"/contact-us",
      },
      {
        title:"Creator Academy",
        href:"/creator-academy",
      },
      {
        title:"Advertise",
        href:"/advertise",
      },
      {
        title:"Developers",
        href:"/developers",
      },
      {
        title:"Terms",
        href:"/terms",
      },
      {
        title:"Privacy",
        href:"/privacy",
      },
      {
        title:"Policy & Safety",
        href:"/policy-and-safety",
      },
      {
        title:"Test new features",
        href:"/test-new-features",
      },
    ];

    
  return (
      <>
        {variant === "expanded" && (
          <aside id='navigation-sidebar' ref={sidebarRef} className={`${isExpanded ? "w-[240px] ml-[4px]" : "w-[85px] ml-[-2px]"} fixed top-[50px] h-[100%] overflow-hidden max-w-[240px] p-[16px_0px_0px_0px] bg-[#fff] z-11`}     onMouseEnter={() => { sidebarRef.current.classList.remove("overflow-y-hidden");
            sidebarRef.current.classList.add("overflow-y-scroll");
          }}
          onMouseLeave={() => {
            sidebarRef.current.classList.remove("overflow-y-scroll");
            sidebarRef.current.classList.add("overflow-y-hidden");
          }}
          >
            {/* is expended sidebar */}
            {isExpanded && (
              <>
                {/* top nav link || top header */}
                <section id='top-navigation-menu' className='w-full m-[0px_0px_0px_10px]'>
                  <ul className='flex flex-col w-[216px] space-y-1 mt-2 mb-2 pl-0'>
                    {topNavLinks?.map( (nav,index) => (
                      <li className='hover:bg-[#f2f2f2] p-[8px_12px] rounded-[13px] w-[204px]' key={index}> <Link to={nav?.href} className='flex items-start space-x-7'> <span>{nav?.icon()}</span> <span className='text-[#0f0f0f] text-[16px]'>{nav?.title}</span> {nav?.isUploadedNewVideo ? ( <span className='text-blue-800 font-extrabold animate-pulse'>.</span>) : (<span></span>)} </Link> </li>
                    ))}
                  </ul>
                </section>
                
                {/* bottom border line horizantle */}
                <hr className='text-[#d9d9d9] w-[216px] m-[8px_12px]'/>
  
                {/* your link for logged in user */}
                <section id="your-navigation-menu" className='w-full m-[0px_0px_0px_10px]'>
                  <ul className='flex flex-col w-[216px] space-y-1 mt-2 mb-2 pl-0'>
                    {/* for logged in user profile */}
                    
                    {isLoggedInUser() === true ? (
                      <>
                        <li className='hover:bg-[#f2f2f2] p-[8px_12px] rounded-[13px] w-[204px]'> <Link to={yourLinks[0]?.href} className='flex items-center justify-start space-x-2'> <span className='text-[#0f0f0f] text-[16px] font-[500]'>{yourLinks[0]?.title}</span> <span className='mt-1'>{yourLinks[0]?.icon()}</span> </Link></li>
    
                        {yourLinks?.splice(1).map( (nav,index) => (
                          <li className='hover:bg-[#f2f2f2] p-[8px_12px] rounded-[13px] w-[204px]' key={index}> <Link to={nav?.href} className='flex items-start space-x-7'> <span>{nav?.icon()}</span> <span className='text-[#0f0f0f] text-[16px]'>{nav?.title}</span> {nav?.isUploadedNewVideo ? ( <span className='text-blue-800 font-extrabold animate-pulse'>.</span>) : (<span></span>)} </Link> </li>
                        ))}
                      </>
                    ) : (
                      <>
                        <li className='hover:bg-[#f2f2f2] p-[8px_12px] rounded-[13px] w-[204px]'> <Link to={"/"} className='flex items-start space-x-7'> <span>{<Icons.UserIco />}</span> <span className='text-[#0f0f0f] text-[16px]'>You</span></Link> </li>
                        <li className='hover:bg-[#f2f2f2] p-[8px_12px] rounded-[13px] w-[204px]'> <Link to={"/"} className='flex items-start space-x-7'> <span>{<Icons.HistoryIco />}</span> <span className='text-[#0f0f0f] text-[16px]'>History</span></Link> </li>
                      </>
                    )}
                  </ul>
                </section>
  
                {/* bottom border line horizantle */}
                <hr className='text-[#d9d9d9] w-[226px] m-[8px_0px]'/>
                
                {/* subscription for logged in user */}
                {isLoggedInUser === false && (
                  <section id='subscription-navigation-menu' className='w-full m-[0px_0px_0px_10px]'>
                  <ul className='flex flex-col w-[216px] space-y-1 mt-2 mb-2 pl-0'>
                    {/* for logged in user profile */}
                    <li className='hover:bg-[#f2f2f2] p-[8px_12px] rounded-[13px] w-[204px]'> <Link to={yourLinks[0]?.href} className='flex items-center justify-start space-x-2'> <span className='text-[#0f0f0f] text-[16px] font-[500]'>{"Subscription"}</span> <span className='mt-1'>{yourLinks[0]?.icon()}</span> </Link></li>
  
                    {data?.subscriptions?.filter( (_y,index) => subscriptionIsExpended || index < 4)?.map( (subscription,index) => (
                      <li className='hover:bg-[#f2f2f2] p-[8px_12px] rounded-[13px] w-[216px]' key={index}> <Link to={subscription?.channel?._id} className='flex items-start space-x-5'> <span className='max-w-[24px] min-w-[24px]'><img src={subscription?.channel?.avatar} alt={subscription?.channel?.fullname} className='w-[24px] h-[24px] object-cover rounded-full' /></span> <span className='text-[#0f0f0f] text-[14px] max-w-[112px] min-w-[112px]'>{subscription?.channel?.fullname.length > 13 ? subscription.channel?.fullname.slice(0,10) + "..." : subscription?.channel?.fullname}</span> {subscription?.isRecentlyVideoUploaded ? ( <span className='text-blue-800 font-extrabold animate-pulse'>.</span>) : (<span></span>)} </Link> </li>
                    ))}
                    
                    {/* for show all subscription and show less subscription */}
                    {data?.subscriptions?.length > 5 &&  (
                      <li className='hover:bg-[#f2f2f2] p-[8px_12px] rounded-[13px] w-[216px]'> <button className='flex items-start space-x-5 cursor-pointer' onClick={ () => setSubscriptionIsExpended(!subscriptionIsExpended)}> <span className={`${!subscriptionIsExpended ? (`rotate-0`) : (`rotate-180`)}`}>{Icons.DownArrowIco()}</span> <span> {subscriptionIsExpended ? "Show less" : "Show all"} </span></button> </li>
                    )}
                  </ul>
                  </section>
                )}

                
                {/* if is not logged in user */}
                {isLoggedInUser() === false && (
                  <section id="login-popup" className="w-full m-[0px_0px_0px_20px] flex space-y-2 items-start justify-center flex-col">
                    <p className="text-[14px] font-normal text-[#0f0f0f] w-[180px]">Sign in to like videos, comment, and subscribe.</p>
                    <Link class="flex space-x-2 items-center border border-[#d9d9d9] text-[#065fd4] px-3 py-1 w-[120px] rounded-full hover:bg-[#def1ff] hover:border-transparent transition" to="/login" data-discover="true">
                      <Icons.UserIco />
                      <span>Sign In</span>
                    </Link>
                  </section>
                )}

                {/* bottom border line horizantle */}
                <hr className='text-[#d9d9d9] w-[226px] m-[8px_0px]'/>

  
                {/* more links */}
                <section className='w-full m-[0px_0px_0px_10px]'>
                  <ul className='w-[216px] flex flex-col space-y-1 mt-2 mb-2 pl-0'>
                    {moreLinks?.map( (info,index) => (
                      <li className='hover:bg-[#f2f2f2] p-[8px_12px] rounded-[13px] w-[216px]' key={index}> <Link to={info?.href} className='flex items-start space-x-5'> <span className='max-w-[24px] min-w-[24px]'><info.icon /></span> <span className='text-[#0f0f0f] text-[14px] max-w-[112px] min-w-[112px]'>{info?.title} </span> </Link> </li>
                    ))}
                  </ul>
                </section>
  
                {/* bottom border line horizantle */}
                <hr className='text-[#d9d9d9] w-[226px] m-[8px_0px]'/> 
                {/* footer links */}
                <section className='w-full m-[0px_0px_0px_10px]'>
                  <ul className="flex flex-wrap items-start justify-start gap-1  w-[216px] mt-2 mb-2 list-none m-0 p-0">
                    {footerLinks?.map((link, index) => (
                      <li 
                        key={index} 
                        className="text-[12px] font-semibold text-[#606060]"
                      >
                        {link.title}
                      </li>
                    ))}
                  </ul>
                </section>
  
              </>
            )}
            
            {/* is not expend is collapsed sidebar */}
            {!isExpanded && (
              <ul className='w-[64px] flex flex-col m-[0px_0px_0px_10px] space-y-1 mt-2 mb-2 pl-0'>
                {topNavLinks?.map( (navLink,index) => (
                  <li> <Link to={`${navLink?.href}`} key={index} className='flex justify-between flex-col items-center space-y-[4px] border border-transparent active:border active:border-[#d9d9d9] hover:bg-[#f2f2f2] p-[10px_12px] rounded-[9px]'> <span><navLink.icon /></span> <span className='text-[#0f0f0f] text-[10px] font-normal'>{navLink.title}</span></Link></li>
                ))}
                <li> <Link to={`/you`} className='flex justify-between flex-col items-center space-y-[4px] hover:bg-[#f2f2f2] p-[10px_12px] rounded-[9px] border border-transparent active:border active:border-[#d9d9d9]'> <span><Icons.UserIco /></span> <span className='text-[#0f0f0f] text-[10px] font-normal'>You</span></Link></li>
              </ul>
            )}
  
          </aside>
        )}
  
        {/* for mobile and other pages */}
        {variant === "drawer" && (
          <div id="sidebarOverlay" ref={sidebarRef} className={`${isExpanded ? "hidden" : "flex"} justify-start overflow-hidden z-[200] inset-0  items-start w-[100%] h-full fixed top-0 bg-[#00000080]`}>
            <aside className="w-[240px] max-w-[240px] h-full p-[16px_0px_0px_0px] bg-[#fff] z-[4] space-y-1 mb-2 pl-0 overflow-x-hidden" onMouseOver={ () => document.querySelector("aside").style.overflowY = `scroll`} onMouseLeave={ () => document.querySelector("aside").style.overflowY = `hidden`} >
              <>
                  {/* top nav link || top header */}
                  <section id='top-navigation-menu' className='w-full m-[0px_0px_0px_10px]'>
                    <ul className='flex flex-col w-[216px]'>
                      <li className='p-[8px_12px] rounded-[13px] w-[204px]' ><div className='flex items-start space-x-7'> <button className='cursor-pointer' onClick={handleClickSidebarBar}>{Icons.BarIco()}</button> <Link to={`/`} className='text-[#0f0f0f] text-[16px]'><Icons.YoutubeIco /></Link> </div> </li>
                      
                      {topNavLinks?.map( (nav,index) => (
                        <li className='hover:bg-[#f2f2f2] p-[8px_12px] rounded-[13px] w-[204px]' key={index}> <Link to={nav?.href} className='flex items-start space-x-7'> <span>{nav?.icon()}</span> <span className='text-[#0f0f0f] text-[16px]'>{nav?.title}</span> {nav?.isUploadedNewVideo ? ( <span className='text-blue-800 font-extrabold animate-pulse'>.</span>) : (<span></span>)} </Link> </li>
                      ))}
                    </ul>
                  </section>
                  
                  {/* bottom border line horizantle */}
                  <hr className='text-[#d9d9d9] w-[216px] m-[8px_12px]'/>
  
                  {/* your link for logged in user */}
                  <section id="your-navigation-menu" className='w-full m-[0px_0px_0px_10px]'>
                    <ul className='flex flex-col w-[216px]'>
                      {/* for logged in user profile */}
                      <li className='hover:bg-[#f2f2f2] p-[8px_12px] rounded-[13px] w-[204px]'> <Link to={yourLinks[0]?.href} className='flex items-center justify-start space-x-2'> <span className='text-[#0f0f0f] text-[16px] font-[500]'>{yourLinks[0]?.title}</span> <span className='mt-1'>{yourLinks[0]?.icon()}</span> </Link></li>
  
                      {yourLinks?.splice(1).map( (nav,index) => (
                        <li className='hover:bg-[#f2f2f2] p-[8px_12px] rounded-[13px] w-[204px]' key={index}> <Link to={nav?.href} className='flex items-start space-x-7'> <span>{nav?.icon()}</span> <span className='text-[#0f0f0f] text-[16px]'>{nav?.title}</span> {nav?.isUploadedNewVideo ? ( <span className='text-blue-800 font-extrabold animate-pulse'>.</span>) : (<span></span>)} </Link> </li>
                      ))}
                    </ul>
                  </section>
  
                  {/* bottom border line horizantle */}
                  <hr className='text-[#d9d9d9] w-[226px] m-[8px_0px]'/>
                  
                  {/* subscription for logged in user */}
                  <section id='subscription-navigation-menu' className='w-full m-[0px_0px_0px_10px]'>
                    <ul className='flex flex-col w-[216px]'>
                      {/* for logged in user profile */}
                      <li className='hover:bg-[#f2f2f2] p-[8px_12px] rounded-[13px] w-[204px]'> <Link to={yourLinks[0]?.href} className='flex items-center justify-start space-x-2'> <span className='text-[#0f0f0f] text-[16px] font-[500]'>{"Subscription"}</span> <span className='mt-1'>{yourLinks[0]?.icon()}</span> </Link></li>
  
                      {subscriptions?.filter( (_y,index) => subscriptionIsExpended || index < 4)?.map( (subscription,index) => (
                        <li className='hover:bg-[#f2f2f2] p-[8px_12px] rounded-[13px] w-[216px]' key={index}> <Link to={subscription?._id} className='flex items-start space-x-5'> <span className='max-w-[24px] min-w-[24px]'><img src={subscription?.avatar} alt={subscription?.fullname} className='w-[24px] h-[24px] object-cover rounded-full' /></span> <span className='text-[#0f0f0f] text-[14px] max-w-[112px] min-w-[112px]'>{subscription?.fullname.length > 13 ? subscription.fullname.slice(0,10) + "..." : subscription?.fullname}</span> {subscription?.isRecentlyUploaded ? ( <span className='text-blue-800 font-extrabold animate-pulse'>.</span>) : (<span></span>)} </Link> </li>
                      ))}
  
                      {/* {subscriptionIsExpended ? (
                        <>
                          {subscriptions?.map( (subscription,index) => (
                            <li className='hover:bg-[#f2f2f2] p-[8px_12px] rounded-[13px] w-[216px]' key={index}> <Link to={subscription?._id} className='flex items-start space-x-5'> <span className='max-w-[24px] min-w-[24px]'><img src={subscription?.avatar} alt={subscription?.fullname} className='w-[24px] h-[24px] object-cover rounded-full' /></span> <span className='text-[#0f0f0f] text-[14px] max-w-[112px] min-w-[112px]'>{subscription?.fullname.length > 13 ? subscription.fullname.slice(0,10) + "..." : subscription?.fullname}</span> {subscription?.isRecentlyUploaded ? ( <span className='text-blue-800 font-extrabold animate-pulse'>.</span>) : (<span></span>)} </Link> </li>
                          ))}
                        </>
                      ) : (
                        <>
                          {subscriptions?.splice(4).map( (subscription,index) => (
                            <li className='hover:bg-[#f2f2f2] p-[8px_12px] rounded-[13px] w-[216px]' key={index}> <Link to={subscription?._id} className='flex items-start space-x-5'> <span className='max-w-[24px] min-w-[24px]'><img src={subscription?.avatar} alt={subscription?.fullname} className='w-[24px] h-[24px] object-cover rounded-full' /></span> <span className='text-[#0f0f0f] text-[14px] max-w-[112px] min-w-[112px]'>{subscription?.fullname.length > 13 ? subscription.fullname.slice(0,10) + "..." : subscription?.fullname}</span> {subscription?.isRecentlyUploaded ? ( <span className='text-blue-800 font-extrabold animate-pulse'>.</span>) : (<span></span>)} </Link> </li>
                          ))}
                        </>
                      )} */}
                      
                      {/* for show all subscription and show less subscription */}
                      <li className='hover:bg-[#f2f2f2] p-[8px_12px] rounded-[13px] w-[216px]'> <button className='flex items-start space-x-5 cursor-pointer ' onClick={ () => setSubscriptionIsExpended(!subscriptionIsExpended)}> <span className={`${!subscriptionIsExpended ? (`rotate-0`) : (`rotate-180`)}`}>{Icons.DownArrowIco()}</span> <span> {subscriptionIsExpended ? "Show less" : "Show all"} </span></button> </li>
                    </ul>
                  </section>
  
                  {/* bottom border line horizantle */}
                  <hr className='text-[#d9d9d9] w-[226px] m-[8px_0px]'/>
  
                  {/* more links */}
                  <section className='w-full m-[0px_0px_0px_10px]'>
                    <ul className='w-[216px] flex flex-col'>
                      {moreLinks?.map( (info,index) => (
                        <li className='hover:bg-[#f2f2f2] p-[8px_12px] rounded-[13px] w-[216px]' key={index}> <Link to={info?.href} className='flex items-start space-x-5'> <span className='max-w-[24px] min-w-[24px]'><info.icon /></span> <span className='text-[#0f0f0f] text-[14px] max-w-[112px] min-w-[112px]'>{info?.title} </span> </Link> </li>
                      ))}
                    </ul>
                  </section>
  
                  {/* bottom border line horizantle */}
                  <hr className='text-[#d9d9d9] w-[226px] m-[8px_0px]'/> 
                  {/* footer links */}
                  <section className='w-full m-[0px_0px_0px_10px]'>
                    <ul className='flex space-x-2 w-[216px] flex-wrap ml-3'>
                      {footerLinks?.map( (link,index) => (
                        <li key={index} className='text-[12px] font-semibold text-[#606060]'>{link.title}</li>
                      ))}
                    </ul>
                  </section>
  
              </>
            </aside>
          </div>
        )}
      </>
  )
}

export default Sidebar;