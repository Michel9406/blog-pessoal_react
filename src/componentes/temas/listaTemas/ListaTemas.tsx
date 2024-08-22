import { useContext, useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Tema from '../../../models/Tema';
import { buscar } from '../../../services/Service';
import CardTemas from '../cardTemas/CardTemas';
import { toastAlerta } from '../../../util/toastAlerta';

function ListaTemas() {
  const [temas, setTemas] = useState<Tema[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarTemas() {
    try {
      await buscar('/temas', setTemas, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if(error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarTemas();
  }, [temas.length]);
  return (
    <>
      {temas.length === 0 && (
        <div className="flex justify-center items-center h-screen">
          <Circles
            height="80"
            width="80"
            color="#8A2BE2"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temas.map((tema) => (
              <>
                <CardTemas key={tema.id} tema={tema} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaTemas;
