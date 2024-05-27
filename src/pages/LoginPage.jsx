import SectionContainer from "../components/SectionContainer"
import { useNavigate, Navigate } from 'react-router-dom'
import Alumno from '../img/AlumnoOscuro.jpeg'
import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {Link} from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    const login = () => {
        setUser({
            id: 1,
            name: "Jean"
        })
        console.log(user)
    }

    if (user) {
        return <Navigate to={`/login/${user.name}`} />
    }

    return (
        <>
            <Header />
            <SectionContainer className="grid sm:grid-cols-2  sm:py-16 p-5 lg:w-auto gap-4 place-items-cente sm:my-32 md:place-items-center md:my-24 xl:my-0">
                <img src={Alumno} alt="" className="rounded-xl aspect-square sm:w-[300px] md:w-[380px] xl:w-[550px] " />
                <div>
                    <h2>Bienvenido</h2>
                    <div className="border bg-sky-400 rounded-full py-3 px-4 grid grid-cols-2">
                        <button className="bg-sky-500 rounded-full text-white py-2" onClick={() => {
                            navigate("/login");
                        }}>
                            Login
                        </button>
                        <button className=" rounded-full text-white py-2" onClick={() => {
                            navigate("/register");
                        }}>
                            Register
                        </button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, iusto.</p>
                    <h3>User Name</h3>
                    <input type="text" placeholder="Ingrese su username" className="border border-sky-500 rounded-full px-4 py-1" />
                    <h3>Password</h3>
                    <input type="password" placeholder="Ingrese su contraseña" className="border border-sky-500 rounded-full px-4 py-1" />
                    <button className="bg-sky-500 rounded-full text-white px-6 py-1 block my-4" onClick={login}>
                        Login
                    </button>             
                    <Link className="text-sky-500 hover:text-sky-900 transition duration-300 underline font-medium" to="/restablecer-clave">Olvidaste tu contraseña?</Link>
                </div>
            </SectionContainer>
            <Footer />
        </>
    )
}

export default LoginPage