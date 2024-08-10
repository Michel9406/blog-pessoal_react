import { Link, useNavigate } from "react-router-dom";
import React from "react";

function Navbar() {
  
  return (
    <>
      <div className="w-full bg-violet-950 text-white flex justify-center py-4  ">
        <div className="container flex justify-between text-lg">
          <Link to="/home" className=" no-underline ">
            <div className=" no-underline md:underline text-2xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Papo de Dev
            </div>
          </Link>

          <div className='flex gap-4'>
              <Link to='/login' className='hover:underline'>Login</Link>
              <Link to='/home' className='hover:underline'>Home</Link>
              <div className='hover:underline'>Postagens</div>
              <div className='hover:underline'>Temas</div>
              <div className='hover:underline'>Cadastrar tema</div>
              <div className='hover:underline'>Perfil</div>
              <div className='hover:underline'>Sair</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;


