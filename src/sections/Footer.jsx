import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justiffy-between item-start flex-wrap gap-20 max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46}  />
          </a>
          <p className=" mt-6 text-base text-white-400 sm:max-w leading-7 font-monserrat">  Get shoes ready for the new term ar your nearest Nike store. Find your perfect size in Store</p>
          <div className="flex items-cetner gap-5 mt-8">
            {socialMedia.map((item, index) => (
              <div key={index} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={item.src} alt={item.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-1 justiy-between lg:gap-10 gap-20 flex-wrap">
        {footerLinks.map((section) => (<div key={section}> <h4 className="text-white font-montserrat text-xl leading-normal font-medium mb-4 mt-5"> {section.title}</h4>
        <ul>
          {section.links.map((link) => (
            <li key={link.name} className="text-white-400 mt-2 font-montserrat  leading-normal text-sm hover:text-slate-gray">
              <a>{link.name}</a>
            </li>
          ))}
        </ul>
        
        </div>))}
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm: items-center">
        <div className="flex flex-1 justify start ">
          <img/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
