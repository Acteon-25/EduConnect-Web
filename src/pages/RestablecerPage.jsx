import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import { useState } from "react";
useState

const RestablecerPage = () => {

  const [email, setEmail] = useState();

  async function change() {
    try {
      const res = await axios.post("", {
        correoElectronico: email
      })

    } catch (e) {
      throw new Error(e.response?.data?.message || 'Error al iniciar sesión');
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    change()
  }

  return (
    <>
      <Header />
      <SectionContainer>
        <div className="flex items-center justify-center bg my-10">
          <form className="max-w-md p-8 ">
            <h3 className="text-4xl font-bold text-center mb-4">
              Recuperemos el acceso a tu cuenta
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Por favor, ingresa tu correo para enviarte el enlace de recuperación
              en pocos minutos..
            </p>
            <div className="mb-4">
              <label className="text-sm font-bold">Correo</label>
            </div>

            <input
              type="email"
              placeholder="
         Ingresa tu correo electrónico"
              className="shadow border rounded w-full py-2 px-3 mb-5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-full"
              onClick={handleClick}
            >
              Recuperar contraseña
            </button>

            <div className="text-center mt-4">
              <Link to="/login" className="text-blue-500 hover:text-blue-700">
                Volver
              </Link>
            </div>
          </form>
        </div>
      </SectionContainer>

      <Footer />
    </>
  );
};

export default RestablecerPage;
