const About = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>

        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            Hi, I&apos;m Clint, nice to meet you. Please take a look around.
          </div>
          <div>
            Elit non sit duis aliquip. Voluptate commodo ea aliquip eu nostrud
            aliquip cillum quis ut Lorem enim Lorem labore nisi. Velit consequat
            ipsum occaecat quis occaecat excepteur anim aliquip id. Sint id Lorem
            laboris occaecat sint sint proident quis velit veniam. Nulla culpa
            proident minim Lorem quis sunt exercitation mollit.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
