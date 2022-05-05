import Image from 'next/image'
import Avatar from '../../assets/avatar.png'

export default function Home () {
  return (
    <div>
      <div className='container mx-auto flex justify-between items-center text-center p-20'>
        <div className='w-1/2 hidden md:block'>
          <Image 
            src={Avatar}
            alt='Antonio Perez'
            width={256}
            height={256}
            className='rounded-full cursor-pointer hidden md:block'
          />
        </div>
        <div className='flex w-1/2 flex-col md:ml-20 mx-10 mt-10'>
          <h1 className='font-bold text-7xl text-left mb-5'>
            Hello, I am <span className='text-blue-600'>Antonio Perez</span>
          </h1>
          <p className='text-left font-normal mb-5'>
            I am a software engineer based in <span className='text-blue-600'>Sevilla</span>.
            
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <a href='#' className='font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black'>
            See My Portfolio
          </a>
        </div>
      </div>
    </div>
  )
}