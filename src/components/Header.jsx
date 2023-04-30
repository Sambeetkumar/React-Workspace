import { React, useState, useEffect } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { SlLogout } from "react-icons/sl";
import GitHubIcon from '@mui/icons-material/GitHub';
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Header() {
  const [theme, setTheme] = useState("dark");
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleThemeToggle() {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsDark(!isDark);
  }
  function handleSignOut() {
    try {
      signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <header className="bg-yellow-500 text-white flex items-center justify-between px-4 md:px-8 py-4">
      <h1 className="text-xl text-white dark:text-zinc-950 md:text-3xl">
      Note Master
      </h1>
      <div className="flex items-center justify-center gap-2">
        <a href="https://github.com/Sambeetkumar/React-Workspace/tree/keeper-app" target="blank" className="p-2 rounded-full text-white dark:text-zinc-950"><GitHubIcon /></a>
        <div
          onClick={handleThemeToggle}
          className="cursor-pointer p-2 rounded-full text-white dark:text-zinc-950"
        >
          {isDark ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </div>
        <SlLogout className="text-2xl text-white dark:text-zinc-950 cursor-pointer" onClick={handleSignOut}/>
      </div>
    </header>
  );
}

export default Header;
