import {useLocation,Outlet} from "react-router-dom";
import React,{useState} from 'react';
import Header from "../../Headers/Header";
import Sidebar from "../../Sidebar/Sidebar";

const MainLayout = () => {

    const [isExpanded,setIsExpanded] = useState(true);
    
    // Get location
    const currentLocation = useLocation();

    // handle click bar icon for sidebar 
    const handleClickSidebarBar = () => {
        if(currentLocation.pathname.startsWith("/watch")){
            setIsExpanded(!isExpanded);
        }else {
            setIsExpanded(!isExpanded);
        }
    }

    return (
        <>
            {/* Top Header */}
            <Header handleClickSidebarBar={handleClickSidebarBar} />

            {/* Main Section */}
            <main id="main" className="flex h-[calc(100vh - 10px)] w-full space-x-5">

                {currentLocation.pathname.startsWith("/watch") === true ? (
                        <section className={`max-w-[240px]`}>
                            {/* For Watch Page */}
                            <Sidebar variant="drawer" isExpanded={isExpanded} handleClickSidebarBar={handleClickSidebarBar} />
                        </section>
                ) : (
                        <section className={`${isExpanded ? "min-w-[240px]" : "w-[85px]"} max-w-[240px]`}>
                            <Sidebar variant="expanded" isExpanded={isExpanded} handleClickSidebarBar={handleClickSidebarBar} />
                        </section>
                )}
                <section className={`w-full ${currentLocation.pathname.startsWith("/channel") ? "flex justify-center items-start" : "" } `}>
                    <Outlet />
                </section>

            </main>
        </>
    )
}

export default MainLayout;
