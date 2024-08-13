import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { GithubLogo, User } from "@phosphor-icons/react";

function Navbar() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("Usuário deslogado com sucesso");
    navigate("/login");
  }

  let navbarComponent;

  return (
    <>
      <div className="w-full bg-violet-950 text-white flex justify-center py-4  ">
        <div className="container flex justify-between text-lg">
          <Link to="/home" className=" no-underline ">
            <div className=" no-underline md:underline text-2xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Papo de Dev
            </div>
          </Link>

          <div className="me-12 flex gap-6">
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/home" className="hover:underline">
              Home
            </Link>
            <Link to="/postagem" className="hover:underline">
              Postagem
            </Link>
            <Link to="/temas" className="hover:underline">
              {" "}
              Temas{" "}
            </Link>
            <Link to="/cadastrarTema" className="hover:underline">
              Cadastrar tema
            </Link>
            <Link to="" onClick={logout} className="hover:underline">
              Sair
            </Link>
            <Link to="/perfil" className="hover:underline">
              <User size={25} weight="bold" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
