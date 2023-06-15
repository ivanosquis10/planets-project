export const PlanetLoading = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-44'>
      <picture>
        <img
          src='/assets/earth-loading.svg'
          width={300}
          height={300}
          alt='image of the planet loading'
          className='animate-bounce'
        />
      </picture>
      <p className='uppercase text-3xl lg:text-5xl mt-2'>Loading planet...</p>
    </div>
  )
}
