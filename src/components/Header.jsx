import { React, useState, useEffect } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { SlLogout } from "react-icons/sl";
import GitHubIcon from "@mui/icons-material/GitHub";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Header(props) {
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
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <img
          referrerPolicy="no-referrer"
          className="w-8 sm:w-10 rounded-full"
          src={props.avatar}
          alt="avatar"
        />
        <h1 className="text-xl text-white dark:text-zinc-950 md:text-3xl">
          Note Master
        </h1>
      </div>

      <div className="flex items-center justify-center sm:gap-2">
        <a
          href="https://github.com/Sambeetkumar/React-Workspace/tree/keeper-app"
          target="blank"
          className="p-2 rounded-full text-white dark:text-zinc-950"
        >
          <GitHubIcon />
        </a>
        <div
          onClick={handleThemeToggle}
          className="cursor-pointer p-2 rounded-full text-white dark:text-zinc-950"
        >
          {isDark ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </div>
        <div
          className="text-2xl p-2 text-white dark:text-zinc-950 cursor-pointer"
          onClick={handleSignOut}
        >
          <SlLogout/>
        </div>
      </div>
    </header>
  );
}

export default Header;
