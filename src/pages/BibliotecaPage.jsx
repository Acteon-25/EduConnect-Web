import { useEffect, useState } from 'react'
import Libro from '../components/Libro';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionContainer from '../components/SectionContainer';

const BibliotecaPage = () => {

  const [books, setBook] = useState()

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setBook(data)
      })
  }, [])

  return (

    <>
      <Header />
      <SectionContainer className="py-8 px-5 lg:w-auto place-items-center my-0">
        <h2 className='text-4xl'>Libros de la Biblioteca</h2>
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod sequi, magnam ipsam debitis excepturi?</p>

        <ul className='grid grid-cols-3 gap-4 my-4 justify-items-center'>
          {books?.map((book) => (<Libro key={book.id} title={book.id} imgUrl={book.url} />))}

        </ul>

      </SectionContainer>
      <Footer />
    </>
  );
};
export default BibliotecaPage;