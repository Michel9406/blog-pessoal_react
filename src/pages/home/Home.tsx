import React from "react";
import homeLogo from "../../assets/homelogo.png";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="bg-violet-950 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
              Seja bem vindo!
            </h2>
            <p className="text-xl bg-clip-border">Ao meu Blog-Pessoal</p>

            <div className="flex justify-around gap-4">
              <button className="rounded bg-white text-blue-800 py-2 px-4">
                Ver postagens
              </button>
            </div>
          </div>

          <div className="flex justify-center bg-violet-950 ">
            <img src={homeLogo} alt="" className='" size-11/12 m-4 rounded-full ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 ' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
