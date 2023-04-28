import React from "react";
import { FcGoogle } from "react-icons/fc";
export default function Home() {
  return (
    <section className="bg-yellow-200 min-h-screen flex flex-col items-center justify-center">
      <div className="px-6 py-8 lg:py-0 md:px-12 text-gray-800 text-center lg:text-left">
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
                <h1 className="text-4xl md:text-4xl xl:text-6xl font-extrabold tracking-wide mb-6">
                  NoteBlaze
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold md:font-bold text-rose-600 mb-6">
                  Take notes anytime! anywhere!
                </h2>
                <a
                  className="flex items-center justify-start mx-auto lg:ml-0 gap-2 w-56 md:w-64 inline-block p-3 mb-2 md:mb-0 bg-gray-800 text-white font-bold text-sm md:text-lg leading-snug rounded-lg shadow-md hover:bg-gray-950 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="#!"
                  role="button"
                >
                  <FcGoogle className="text-2xl"/>
                  Continue with Google
                </a>
              </div>
            </div>
            <div className="md:mb-12 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1616628188467-8fb29f49bbe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ2fHxub3Rlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className="w-full rounded-lg shadow-lg max-h-screen"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
