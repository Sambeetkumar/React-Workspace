import { React, useState } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
function Header() {
    const [isDark, setIsDark] = useState(false);
    function handleThemeToggle() {
        setIsDark(!isDark);
    }
  return (
    <header className="bg-yellow-500 text-white flex items-center justify-between px-4 md:px-8 py-4">
          <h1 className="text-xl md:text-3xl">Keeper App</h1>
          <div onClick={handleThemeToggle} className="cursor-pointer p-2 rounded-full">
        {isDark ? <DarkModeOutlinedIcon fontSize="large"/> : <LightModeOutlinedIcon fontSize="large"/>}
      </div>
    </header>
  );
}

export default Header;