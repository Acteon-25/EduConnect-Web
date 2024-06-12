import { useParams } from 'react-router-dom'
import SideBar from '../components/SideBar'
import cam from '../img/cam.png'
import Buscador from '../icons/Buscador.svg'
import Notification from '../icons/Notification.svg'
import Foto from '../img/Foto.png'

const LoginUserPage = () => {

    const { id } = useParams()

    return (
        <div className="">
            <SideBar />

            <div className='flex px-10 pb-10 pt-20 gap-4 w-screen justify-between'>
                <div className='flex float-right  gap-1'>
                    <img src={Buscador} alt="" />
                    <input type="text" placeholder='Buscar' />
                </div>
                <div className='flex float-left gap-4'>
                    <button className=' bg-green-500 rounded-xl py-1 px-3'> + Nueva Asesoria</button>
                    <img src={Notification} alt="" />
                    <img src={Foto} alt="" className='size-12 rounded-full' />
                    <h2>Bienvenido {id}</h2>
                    <p>Alumno</p>
                </div>
            </div>

            <div className='grid grid-cols-3 place-items-center'>
                <div>
                    Asesorias
                </div>
                <div>
                    <img src={cam} alt="" />
                </div>
                <div>
                    Tareas
                </div>
            </div>
        </div>
    )
}

export default LoginUserPage