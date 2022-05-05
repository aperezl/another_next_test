import Article from "./Article";

export default function BlogHome () {
  return (
    <>
      <div className="mb-10 md:mb-16">
        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </>
  )
}