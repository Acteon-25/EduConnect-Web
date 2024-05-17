import Buscador from '../icons/Buscador.svg'

const Footer = () => {
  return (
    <footer class="shadow bg-black/20 backdrop-blur-lg w-full mx-auto py-3 px-7">
      <div className="grid grid-cols-6">
        <div className="col-span-2">
          <img src={Buscador} alt="" className='size-9' />
          <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, quod!</p>
        </div>
        <div>
          <h3 className='text-red-700 text-sm font-bold'>Pricing</h3>
          <ul>
            <li className='text-md'>asdasd</li>
            <li className='text-md'>asdasd</li>
            <li className='text-md'>asdasd</li>
          </ul>
        </div>
        <div>
          <h3>OTRA COSAS</h3>
          <ul>
            <li>asdasd</li>
            <li>asdasd</li>
            <li>asdasd</li>
          </ul>
        </div>
        <div>
          <h3>Contactanos</h3>
          <ul>
            <li>asdasd</li>
            <li>asdasd</li>
            <li>asdasd</li>
          </ul>
        </div>
        <div>
          <h3>asdasd</h3>
          <ul>
            <li>asdasd</li>
            <li>asdasd</li>
            <li>asdasd</li>
          </ul>
        </div>
      </div>
      <div
        class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
      >
        <span class="text-sm text-black "
        >© 2023 Jean Coaquira
          Todos los derechos reservados
        </span>
      </div>
    </footer>
  )
}

export default Footer