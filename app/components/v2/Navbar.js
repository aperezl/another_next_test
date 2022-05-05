export default function Navbar () {
  return (
    <header className="absotule flex justify-between items-center py-4">
      <h1 className='font-bold text-xl cursor-pointer'>
        {'{'} antonio : <span className='text-[#2c682c]'>'perez'</span> {'}'}
      </h1>

      <nav className="hidden lg:flex gap-12">
        <a href="#" className="text-[#2c682c] text-lg font-semibold">Home</a>
        <a href="#" className="text-gray-600 hover:text-[#2c682c] active:text-indigo-700 text-lg font-semibold transition duration-100">Blog</a>
        <a href="#" className="text-gray-600 hover:text-[#2c682c] active:text-indigo-700 text-lg font-semibold transition duration-100">Tags</a>
        <a href="#" className="text-gray-600 hover:text-[#2c682c] active:text-indigo-700 text-lg font-semibold transition duration-100">About</a>
      </nav>


      <button type="button" className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
      </button>
    </header>
  )
}