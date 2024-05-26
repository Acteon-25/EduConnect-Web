import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import LoginUserPage from "./pages/LoginUserPagina"
import PricingPage from "./pages/PricingPage"
import ErrorPage from "./pages/ErrorPage"
import NosotrosPage from './pages/NosotrosPage'

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
          <Route path="/nosotros" element={<NosotrosPage/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
