import React from "react";
import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-violet-950 text-white">
        <div className="container flex flex-col items-center py-1">
          <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
            Papo De Dev | &copy; CopyRight:{" "}
          </p>
          <p className="text-lg ">Acesse minhas redes sociais</p>
          <div className="flex gap-2 m-1 ">
            <LinkedinLogo size={30} weight="bold" />
            <GithubLogo size={30} weight="bold" />
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
