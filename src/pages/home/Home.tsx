import React from 'react';
import homeLogo from '../../assets/homelogo.png'
import './Home.css';
import ListaPostagens from '../../componentes/postagens/listaPostagens/ListaPostagens';

function Home() {
  return (
    <>
    <div className="bg-violet-950 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">Seja bem vindo! </h2>
            <p className="text-xl bg-clip-border">Ao meu Blog-Papo de dev</p>

            <div className="flex justify-around gap-4">

              <button className=" hover:bg-violet-600 ring-2 from-pink-500 rounded bg-white text-blue-950 py-2 px-4">
                Ver postagens
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
          <img src={homeLogo} alt="" className='" w-4/5  m-2 rounded-full ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 ' />

          </div>
        </div>
      </div>
  <ListaPostagens />
    </>
  );
}

export default Home;