export default function Navbar () {
  return (
    <>
      <nav className='px-4 py-4 bg-purple-900 text-white'>
        <ul className='flex'>
          <li className='mx-2 cursor-pointer'>Home</li>
          <li className='mx-2 cursor-pointer'>About</li>
          <li className='mx-2 cursor-pointer'>Contact</li>
        </ul>
      </nav>

      <div className='container'>
        <h1 className='text-blue-900 my-12'>
          This is blue text
        </h1>
      </div>
    </>
  )
}
