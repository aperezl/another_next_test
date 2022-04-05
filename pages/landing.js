import Image from "next/image";
import avatar from "../public/images/avatar.png";
export default function Landing() {
  return (
    <>
      <nav className="bg-nodeblue-800 text-white flex justify-between">
        <div className="px-3 pt-2">{"{ antonio: 'perez' }"}</div>
        <ul className="px-28 py-4 flex space-x-11 justify-end">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Catalogue</li>
          <li className="cursor-pointer">Contact us</li>
        </ul>
      </nav>
      <main>
        <div className="main bg-nodeblue-300 flex">
          <div>
            <div className="text-3xl">The best phones in the town</div>
            <p className="w-1/3">
              Duis laborum culpa voluptate deserunt quis id culpa labore Lorem
              nulla. Aliqua sint incididunt fugiat ipsum amet qui cupidatat.
              Aute ea cupidatat exercitation sint tempor laboris et laborum
              voluptate et adipisicing aliqua minim.
            </p>
          </div>
          <div className="pt-32">
            <Image
              className="mb-32 bg-black"
              src={avatar}
              alt="Avatar"
              width={128}
              height={128}
            />
          </div>
        </div>
      </main>
    </>
  );
}
