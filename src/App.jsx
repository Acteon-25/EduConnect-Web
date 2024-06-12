import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import LoginUserPage from "./pages/LoginUserPagina"
import PricingPage from "./pages/PricingPage"
import ErrorPage from "./pages/ErrorPage"
import BibliotecaPage from "./pages/BibliotecaPage"
import EditProfilePage from "./pages/EditProfile"
import NosotrosPage from './pages/NosotrosPage'
import RestablecerPage from './pages/RestablecerPage'
import RegisterAsesorPage from './pages/RegisterAsesorPage'
import Inicio from "./pages/inicio"
import Login from "./pages/inicioLogin"
import AdministrarAsesoresPage from "./pages/AdministrarAsesoresPage"
import AdministracionUsuariosPage from "./pages/AdministracionUsuariosPage"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registerAlumno" element={<RegisterPage />} />
          <Route path="/registerAsesor" element={<RegisterAsesorPage />} />
          <Route path="/login/:id" element={<LoginUserPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/restablecer-clave" element={<RestablecerPage />} />
          <Route path="/biblioteca" element={<BibliotecaPage />} />
          <Route path="/administrarAsesores" element={<AdministrarAsesoresPage />} />
          <Route path="/administracionUsuarios" element={<AdministracionUsuariosPage />} />
          <Route path="/editProfile" element={<EditProfilePage />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/inicioLogin" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
