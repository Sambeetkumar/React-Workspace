import { React, useState } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GitHubIcon from '@mui/icons-material/GitHub';
function Header() {
  const [isDark, setIsDark] = useState(false);
  function handleThemeToggle() {
    setIsDark(!isDark);
  }
  return (
    <header className="bg-yellow-500 text-white flex items-center justify-between px-4 md:px-8 py-4">
      <h1 className="text-xl text-white dark:text-zinc-950 md:text-3xl">
        Note Box
      </h1>
      <div className="flex items-center justify-center">
        <a href="https://github.com/Sambeetkumar/React-Workspace/tree/keeper-app" target="blank" className="p-2 rounded-full text-white dark:text-zinc-950"><GitHubIcon /></a>
        <div
          onClick={handleThemeToggle}
          className="cursor-pointer p-2 rounded-full text-white dark:text-zinc-950"
        >
          {isDark ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </div>
      </div>
    </header>
  );
}

export default Header;
