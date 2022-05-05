import BlogHome from '../components/v2/BlogHome'
import Footer from '../components/v2/Footer'
import Hero from '../components/v2/Hero'
import Navbar from '../components/v2/Navbar'
import Post from '../components/v2/Post'

export default function v2 () {
  return (
    <>
      <div className="bg-[#f0f0f0] shadow-xl fixed w-full z-10">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <Navbar />
        </div>
      </div>

      <div className="bg-gradient-to-tr from-[#1a3f1d] to-[#2c682c] z-0 pt-24">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <Hero />
          
        </div>
        <div>
          <svg className="relative h-24 w-full" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ecf1ea" />
            </g>
          </svg>
        </div>
      </div>

      <div className="bg-[#ecf1ea] pb-6 z-0 pt-24">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <BlogHome />
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <Post />
        </div>
      </div>

      <div class="bg-white pt-4 sm:pt-10 lg:pt-12">
        <Footer />
      </div>
    </>
    
  )
}