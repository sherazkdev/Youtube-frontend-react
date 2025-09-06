import React from 'react';

const TopHeader = () => {
    return (
        <>
            {/* Top header */}
            <section className="flex justify-between items-start w-full">

        {/* left link section */}
        <div className="flex space-x-3">
            <button className="bg-[#f2f2f2] text-[#0f0f0f] p-[8px] rounded-md">All</button>
            <button className="bg-[#f2f2f2] text-[#0f0f0f] p-[8px] rounded-md">Shorts</button>
            <button className="bg-[#f2f2f2] text-[#0f0f0f] p-[8px] rounded-md">Videos</button>
            <button className="bg-[#f2f2f2] text-[#0f0f0f] p-[8px] rounded-md">Watched</button>
            <button className="bg-[#f2f2f2] text-[#0f0f0f] p-[8px] rounded-md">Recently uploaded</button>
            <button className="bg-[#f2f2f2] text-[#0f0f0f] p-[8px] rounded-md">Live</button>
        </div>

        {/* right filter videos section */}
        <div className="flex space-x-2 hover:bg-[#f2f2f2] text-[#0f0f0f] p-[6px_15px] cursor-pointer rounded-full">
            <h2>Filter</h2>
            <div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
                <path d="M15 17h6v1h-6v-1zm-4 0H3v1h8v2h1v-5h-1v2zm3-9h1V3h-1v2H3v1h11v2zm4-3v1h3V5h-3zM6 14h1V9H6v2H3v1h3v2zm4-2h11v-1H10v1z" />
                </svg>
            </button>
            </div>
        </div>
            </section>
        </>
    )
}

export default TopHeader;
