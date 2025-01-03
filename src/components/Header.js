import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { LOGO_URL } from "../constants/constant";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    // <div className='grid grid-flow-col shadow-lg p-3 h-1/5'>
    <div className="fixed top-0 left-0 w-full grid grid-flow-col shadow-lg p-1   bg-white z-10">
      <div className="flex col-span-1">
        <div className="mt-1.5">
          <MenuIcon
            className="cursor-pointer"
            sx={{ width: 30, height: 30 }}
            onClick={() => toggleMenuHandler()}
          />
        </div>
        <img alt="yt-logo" src={LOGO_URL} className="h-16 px-3 mt-[-10px] font" />

      </div>

      <div className="col-span-10 mt-2 text-center">
        <input
          placeholder="search"
          className="w-1/2 border border-gray-400 p-[2px] rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 py-[2px] px-3 rounded-r-full">
          🔍
        </button>
      </div>

      <div className="col-span-1 mt-1 ml-28">
        <Stack direction="row" spacing={2}>
          <Avatar src="/broken-image.jpg" sx={{ width: 30, height: 30 }} />
        </Stack>
      </div>
    </div>
  );
};

export default Header;
