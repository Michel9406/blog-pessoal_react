import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  const { usuario } = useContext(AuthContext);

  const data = new Date().getFullYear();

  if (usuario.token === "") {
    return null;
  }

  return (
    <div className="flex justify-center bg-violet-950 text-white">
      <div className="container flex flex-col items-center py-1">
        <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Papo De Dev | &copy; {data} CopyRight
        </p>
        <p className="text-lg">Acesse minhas redes sociais</p>
        <div className="flex gap-2 m-1">
          <a
            href="https://www.linkedin.com/in/michelgoncalvess/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinLogo
              size={30}
              weight="bold"
              className="hover:text-blue-400"
            />
          </a>
          <a
            href="https://github.com/Michel9406"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubLogo
              size={30}
              weight="bold"
              className="hover:text-gray-400"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
