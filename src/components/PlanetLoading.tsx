export const PlanetLoading = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-44'>
      <picture>
        <img
          src='/assets/earth-loading.svg'
          width={300}
          height={300}
          alt='imagen de una tierra mientras carga'
          className='animate-bounce'
        />
      </picture>
      <p className='uppercase text-5xl mt-2'>Loading planet...</p>
    </div>
  )
}
