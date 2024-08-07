import React from 'react';
import homeLogo from '../../assets/homelogo.png'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-violet-950 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
              <p className='text-xl'>Ao meu Blog-Pessoal</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
              </div>
            </div>
  
            <div className="flex justify-end ">
              <img src={homeLogo} alt="" className='w-41 h-41 rounded-full ' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;