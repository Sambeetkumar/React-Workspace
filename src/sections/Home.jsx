import { React, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../utils/firebase";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  //Sign in with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/notes");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/notes");
    } else {
      console.log("login");
    }
  }, [user]);
  return (
    <section className="bg-yellow-200 min-h-screen flex flex-col items-center justify-center">
      <div className="z-10 fixed top-0 w-full bg-gray-900 px-4 py-3 text-white">
        <p className="text-center text-sm font-medium">
          Love Note master?{" "}
          <a href="https://github.com/Sambeetkumar/React-Workspace/tree/keeper-app" target="blank" className="inline-block underline underline-offset-4">
            Give it a ⭐ on GitHub
          </a>
        </p>
      </div>
      <div className="px-6 py-8 lg:py-0 md:px-12 text-gray-800 text-center lg:text-left mt-8 md:mt-0 lg:mt-10">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 flex items-center">
            <div className="md:mt-12 lg:mt-0 mb-8 lg:mb-0">
              <div
                className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                style={{
                  background: "hsla(0, 0%, 100%, 0.45)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <h1 className="text-4xl md:text-4xl xl:text-6xl text-gray-800 font-extrabold tracking-wide mb-6">
                  NoteMaster
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold md:font-bold text-rose-600 mb-4">
                  Take notes anywhere! anytime!
                </h2>
                <p className="text-lg md:text-xl font-bold text-black mb-6">
                  The NoteMaster is a free, open source and cloud based web app
                  that allows user to take notes within the snap of a finger and
                  also provides access to the notes from any device with an
                  internet connection.
                </p>
                <button
                  className="flex items-center justify-start mx-auto lg:ml-0 gap-2 w-56 md:w-64 inline-block p-3 mb-2 md:mb-0 bg-gray-800 text-white font-bold text-sm md:text-lg leading-snug rounded-lg shadow-md hover:bg-gray-950 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={GoogleLogin}
                >
                  <FcGoogle className="text-2xl"/>
                  Continue with Google
                </button>
              </div>
            </div>
            <div className="md:mb-4 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1616628188467-8fb29f49bbe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ2fHxub3Rlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className="w-auto mx-auto lg:ml-0 rounded-lg shadow-lg max-h-[90vh]"
                alt="hero_img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
