import {useLocation,Outlet} from "react-router-dom";
import React from 'react';
import Header from "../../Headers/Header";
import Sidebar from "../../Sidebar/Sidebar";

const MainLayout = () => {

    // Get location
    const currentLocation = useLocation();
    // get Params from url
    const params = new URLSearchParams(currentLocation.pathname);
    

    return (
        <>
            {/* Top Header */}
            <Header />

            {/* Main Section */}
            <main id="main" className="flex h-[calc(100vh - 70px)] w-full">
                
                <section className="max-w-[240px]">

                    {currentLocation.pathname.startsWith("/watch") === true ? (
                        // For Watch Page
                        <Sidebar variant="mobile" />
                    ) : currentLocation.pathname.startsWith("/playlist") === true ? (

                        <>
                        
                        <Sidebar variant="collapsed" />
                            {params?.get("list") == "WL" ? (

                                <Sidebar variant="collapsed" />
                            
                            ) : params?.get("list") == "LL" ? (
                            
                                <Sidebar variant="expanded" />
                            
                            ) : "Invalid Access"  }
                        </>

                    ) : (
                        // Normal Pages for example channel home etc.
                        <Sidebar variant="expanded" />
                    )}
                
                </section>
                
                <section className="overflow-y-scroll w-full max-w-[2896px]">
                    <Outlet />
                </section>

            </main>
        </>
    )
}

export default MainLayout;
