import { navbarLinks } from "../data/data";
import { FaReact } from "react-icons/fa"; 
import { IoMdMenu } from "react-icons/io";
import { GrTechnology } from "react-icons/gr";
import { DiGithubBadge } from "react-icons/di";
import { FaRegQuestionCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
        <nav>
            <div className="flex justify-between items-center py-8 bg-gray-100 w-screen">
                {/* Logo Section */}
                <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                    <FaReact />
                    <p className="text-secondary"> <a href="https://es.react.dev/">React</a></p>
                </div>
                {/* Menu Section */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-6 text-gray-600">
                        {
                            navbarLinks.map((item) => (
                                <li key={item.id}>
                                    <a href={item.link} className="inline-bloc py-1 px-3 hover:text-primary font-semibold">
                                        {item.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Icons Section */}
                <div className="flex items-center gap-4">
                    <a href="https://tailwindcss.com/" className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                        <GrTechnology />
                    </a>
                    <a href="https://github.com/HarrisonGuerrero18" className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                        <DiGithubBadge />
                    </a>
                    <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                        <FaRegQuestionCircle />
                    </button>
                </div>
            </div>
      </nav>
      {/* Mobile sidebar section */}
       <div className="md:hidden">
         <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
           <IoMdMenu />
         </button>
       </div>
    </>
  );
};

export default NavBar;