import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import Cadastro from "./pages/cadastro/Cadastro";
import Navbar from "./componentes/navBar/NavBar";
import Home from "./pages/home/Home";
import Footer from "./componentes/footer/footer";
import ListaTemas from "./componentes/temas/listaTemas/ListaTemas";
import FormularioTema from "./componentes/temas/formularioTema/FormularioTema";
import DeletarTema from "./componentes/temas/deletarTema/DeletarTema";
import ListaPostagens from "./componentes/postagens/listaPostagens/ListaPostagens";
import FormularioPostagem from "./componentes/postagens/formularioPostagem/FormularioPostagem";

import Perfil from "./pages/perfil/Perfil";
import DeletarPostagem from "./componentes/postagens/deletarPostagem/DeletarPostagem";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route
                path="/cadastroPostagem"
                element={<FormularioPostagem />}
              />
              <Route
                path="/editarPostagem/:id"
                element={<FormularioPostagem />}
              />
              <Route
                path="/deletarPostagem/:id"
                element={<DeletarPostagem />}
              />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
