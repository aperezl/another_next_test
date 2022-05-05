import avatar from '../../public/images/avatar.png'
import Image from 'next/image'

export default function Hero () {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
      
      <div className="lg:w-7/12 flex flex-col justify-center sm:text-center lg:text-right lg:py-4 xl:py-6">
        <p className="text-[#c5e5b4] md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
          Demasiado viejo para hacer otra cosa
        </p>

        <h1 className="text-[#ecf1ea] text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">Antonio Perez</h1>

        <p className="lg:ml-52 text-[#c5e5b4] xl:text-lg mb-8 md:mb-12 lg:text-right">
          This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.
        </p>

 
      </div>

      <div className="lg:w-4/12 h-48 md:h-auto overflow-hidden flex justify-center items-center">
        <div className='border-4 w-64 h-64 rounded-full border-[#c5e5b4] '>
          <Image src={avatar} className='rounded-full bg-[#c5e5b4]' />
        </div>
      </div>
    </section>
  )
}