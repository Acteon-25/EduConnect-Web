import SectionContainer from "../components/SectionContainer"
import { useNavigate } from 'react-router-dom'
import Profesor from '../img/ProfesorOscuro.jpeg'
import Header from "../components/Header"
import Footer from "../components/Footer"

const RegisterAsesorPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <SectionContainer className="grid sm:grid-cols-2  sm:py-16 p-5 lg:w-auto gap-4 place-items-center sm:my-32 md:place-items-center md:my-24 xl:my-0">
        <img src={Profesor} alt="" className="rounded-xl aspect-square sm:w-[300px] md:w-[380px] xl:w-[550px] " />
        <div className="">
          <h2>Bienvenido</h2>
          <div className="border bg-sky-400 rounded-full py-3 px-4 grid grid-cols-2">
            <button className="rounded-full text-white py-2" onClick={() => {
              navigate("/registerAlumno");
            }}>
              Registro de Alumno
            </button>
            <button className="bg-sky-500 rounded-full text-white py-2" onClick={() => {
              navigate("/registerAsesor");
            }}>
              Registro de Asesor
            </button>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, iusto.</p>
          <h3>Email</h3>
          <input type="email" name="" id="" placeholder="Ingrese su email" className="border border-sky-500 rounded-full px-4 py-1" />
          <h3>User Name</h3>
          <input type="text" placeholder="Ingrese su username" className="border border-sky-500 rounded-full px-4 py-1" />
          <h3>Password</h3>
          <input type="password" placeholder="Ingrese su contraseña" className="border border-sky-500 rounded-full px-4 py-1" />
          <h3>Ingreso de archivos</h3>
          <input type="file" placeholder="Ingrese su contraseña" className="border border-sky-500 rounded-full px-4 py-1" />
          <button className="bg-sky-500 rounded-full text-white px-6 py-1 block my-4 ">
            Registrate
          </button>
        </div>
      </SectionContainer>
      <Footer />
    </>
  )
}

export default RegisterAsesorPage