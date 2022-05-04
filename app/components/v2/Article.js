export default function Article () {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
        <a href="#" className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
          <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
        </a>

        <div className="flex flex-col gap-2">
          <span className="text-gray-400 text-sm">July 19, 2021</span>

          <h2 className="text-gray-800 text-xl font-bold">
            <a href="#" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">New trends in Tech</a>
          </h2>

          <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

          <div>
            <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100">Read more</a>
          </div>
        </div>
      </div>
  )
}