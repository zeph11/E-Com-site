import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";


const NavBar = () => {
  const [showOption, setShowOption] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-w-[1440px] m-0">
        <img src={headerLogo} alt="Logo" width={139} height={29} />
        <a href="/" />
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className=" leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden  cursor-pointer max-lg:flex max-lg:flex-col " onClick={() => setShowOption(!showOption)}>
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      { showOption ? <div className={`bg-coral-red border rounded-xl px-2 py-2 w-40 absolute right-1 top-20 ${showOption ? 'animate-swing':'animate-swingback'}`}>
        <ul className="">
        {navLinks.map((link) => (
          <li key={link.label} className="mb-3 bg-coral-red py-1 px-3 " >
            <a
              href={link.href}
              className=" leading-normal text-lg  text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
        </ul>

      </div> : null}

      
      </nav>
    </header>
  );
};

export default NavBar;

