const SectionContainer = ({ children, className }) => {

  return (
    <section className={`${className} w-full mx-auto lg:w-[740px] pb-24`}>
      {children}
    </section>
  )
}

export default SectionContainer