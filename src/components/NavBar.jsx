import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <header className="sm:px-16 px-8 py-8 absolute w-full">
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
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
