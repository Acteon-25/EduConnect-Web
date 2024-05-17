const Ej1 = () => {
    // Al momento de realizar el card le quitamos el alto y el ancho porque de otro modo podriamos tener errores a diferencia del flexbox
    return (
      <>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4 h-[100vh]">
            <div className="card col-span-2">header</div>
            <div className="card col-span-2">nav</div>
            <div className="card">section</div>
            <div className="card">article</div>
            <div className="card col-start-2 row-start-3 row-span-2 ">aside</div>
            <div className="card col-span-2">footer</div>
          </div>
        </div>
      </>
    );
  };
  
  export default Ej1;