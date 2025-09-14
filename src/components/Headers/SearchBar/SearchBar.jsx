import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Icons from "../../../assets/Icons";
import useSearchVideos from "../../../hooks/useSeachVideos";

const SearchBar = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState(null);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    const location = useLocation();
    const Redirect = useNavigate();

    // custom hook
    const [fetchSuggestionError, _y, handleFetchSuggestions] = useSearchVideos();

    // handle errors
    useEffect(() => {
        if (fetchSuggestionError) {
            console.error("Suggestion fetch error:", fetchSuggestionError);
        }
    }, [fetchSuggestionError]);

    // 1. check if query param exists in URL
    useEffect(() => {
        if (location.pathname === "/result") {
            const params = new URLSearchParams(location.search);
            const q = params?.get("q") || "";
            setQuery(q);
        }
    }, [location.search, location.pathname]);

    // 2. debounce for typing
    useEffect(() => {
        if (!query) return;
        const timer = setTimeout(() => setDebouncedQuery(query), 500);
        return () => clearTimeout(timer);
    }, [query]);

    // 3. fetch suggestions when debouncedQuery changes
    useEffect(() => {
        if (debouncedQuery?.trim() !== "") {
            (async () => {
                try {
                    setSuggestions([]);
                    const fetchSearchSuggestion = await handleFetchSuggestions(debouncedQuery);
                    const searchedSuggestion = fetchSearchSuggestion.map(
                        (suggestion) => suggestion?.title
                    );
                    setSuggestions(searchedSuggestion);
                } catch (err) {
                    console.error("Suggestion fetch failed:", err);
                }
            })();
        }
    }, [debouncedQuery]);

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query?.trim() !== "") {
            Redirect(`/result?q=${encodeURIComponent(query)}`);
        }
    };

    // handle keyboard keys
    const handleKey = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (activeIndex >= 0 && filteredSuggestions[activeIndex]) {
                Redirect(`/result?q=${encodeURIComponent(filteredSuggestions[activeIndex])}`);
            } else if (query?.trim() !== "") {
                Redirect(`/result?q=${encodeURIComponent(query)}`);
            }
        } else if (e.key === "ArrowUp") {
            setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
        } else if (e.key === "ArrowDown") {
            setActiveIndex((prev) =>
                prev < filteredSuggestions.length - 1 ? prev + 1 : prev
            );
        }
    };

    // filter suggestions
    const filteredSuggestions = suggestions?.filter((item) =>
        item?.toLowerCase().includes(query?.toLowerCase())
    );

    // mouse hover
    const handleMouseOverSuggestion = (index) => {
        setActiveIndex(index);
    };

    // suggestion click
    const handleClickSuggestion = (item) => {
        if (item.trim() !== "") {
            Redirect(`/result?q=${encodeURIComponent(item)}`);
        }
    };

    return (
        <div className="relative">
            <form onSubmit={handleSubmit}>
                <input
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setActiveIndex(-1);
                    }}
                    autoComplete="off"
                    onKeyDown={handleKey}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    className="w-[600px] px-4 py-2 border rounded-full outline-none shadow-[0px_0px_2px_#d9d9d9]"
                    placeholder="Search"
                />
                <button type="submit" className="absolute p-2 top-0 rounded-l-none rounded-r-full border border-[#ccc] hover:bg-[#f1eeee]  right-0 bg-[#f6f6f6]">
                    <Icons.SearchIco />
                </button>
            </form>

            {showSuggestions && filteredSuggestions?.length > 0 && (
                <div className="absolute w-[700px] left-0 top-[45px] shadow-[0px_0px_1px_#ccc] bg-[#fff] rounded-lg border border-[#c6c6c6] p-[10px_4px_10px_5px] cursor-text">
                    {filteredSuggestions?.map((item, index) => (
                        <div
                            key={index}
                            id="result"
                            className={`flex space-x-2 items-center text-[14px] cursor-pointer p-[5px_4px_5px_5px] rounded-md hover:bg-[#f2f2f2] ${
                                activeIndex === index ? "bg-[#e5e5e5]" : ""
                            }`}
                            onMouseOver={() => handleMouseOverSuggestion(index)}
                            onClick={() => handleClickSuggestion(item)}
                        >
                            <div>
                                <Icons.HistoryIco />
                            </div>
                            <div id="content">
                                <p>{item}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
