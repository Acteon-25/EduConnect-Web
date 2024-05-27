import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import LoginUserPage from "./pages/LoginUserPagina"
import PricingPage from "./pages/PricingPage"
import ErrorPage from "./pages/ErrorPage"
import BibliotecaPage from "./pages/BibliotecaPage"
import DashboardPage from "./pages/DashboardPage"
import EditProfilePage from "./pages/EditProfile"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login/:id" element={<LoginUserPage />} />
          <Route path="/biblioteca" element={<BibliotecaPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/editProfile" element={<EditProfilePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
