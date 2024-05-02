import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenue } from "../utils/AppSlicer";
import { Youtube_search_api } from "../utils/constants";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggetions,setSuggetions]=useState([])
  const [showSuggestions,setShowSuggestions]=useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearches();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearches = async () => {
    const data = await fetch(Youtube_search_api + searchQuery);
    const json = await data.json();
    setSuggetions(json[1]);
  };
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleMenue());
  };
  return (
    <>
      <div className="flex items-center justify-between w-full  m-2 p-3 h-12 shadow-md">
        <div className="flex items-center gap-3">
          <img
            onClick={toggleHandler}
            className="w-7 h-7 cursor-pointer"
            src="../images/Hamburger_icon.svg.png"
            alt="hamburger"
          />
          <img
            className=" w-28 h-18 "
            src="../images/yt_logo.jpg"
            alt="yt_logo"
          />
        </div>
        <div >
          <div className="flex m-x-10 items-center ">
            <input
              type="text"
              name="searchBox"
              id="searchBox"
              className="w-[30rem] p-2 h-9 border border-black rounded-l-full"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onFocus={()=>{setShowSuggestions(true)}}
              onBlur={()=>{setShowSuggestions(false)}}
            />
            <button>
              <img
                src="../images/search_logo.png"
                className=" rounded-r-full w-9 h-9 border border-black border-l-0 "
                alt="search btn"
              />
            </button>
          </div>
          {showSuggestions && <div className="results py-2 fixed mt-1 border-gray-50 px-5  bg-white w-[30rem] rounded-lg shadow-md ">
            <ul>
            {
              suggetions.map((suggest)=>{
                return <li key={suggest} className="shadow-sm flex gap-4 content-center items-center hover:bg-gray-50"><img src="../images/search_logo.png" className="w-7 h-7" alt="" />{suggest}</li>

              })
            }
            </ul>
          </div>}
        </div>
        <div className="user-profile mr-3 rounded-full mix-blend-color-burn">
          <img
            className="w-10 h-10 mix-blend-color-burn"
            src="../images/profile.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Header;
