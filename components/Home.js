import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Clint Briley
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I&apos;m a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-2xl">
          Elit non sit duis aliquip. Voluptate commodo ea aliquip eu nostrud
          aliquip cillum quis ut Lorem enim Lorem labore nisi. Velit consequat
          ipsum occaecat quis occaecat excepteur anim aliquip id. Sint id Lorem
          laboris occaecat sint sint proident quis velit veniam. Nulla culpa
          proident minim Lorem quis sunt exercitation mollit.
        </p>
        <div>
          <button>
            View Work <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
