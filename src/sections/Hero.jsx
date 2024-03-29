import CustomButton from "../components/CustomButton";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row  flex-col justify-center min-h-screen gap-10 max-container sm:mt-4 scroll-smooth"
      
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Our Latest
          </span>
          <br />{" "}
          <span className="inline-block mt-3 text-coral-red"> Nike </span> Shoes
        </h1>
        <p className="text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, soluta?
          Nobis inventore quis delectus at, quae eligendi deserunt laudantium
        </p>
        <CustomButton label="Shop Now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start gap-12 w-full mt-10 flex-wrap">
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <h1 className="text-3xl font-bold ">{statistic.value}</h1>
              <p className="leading-7 text-slate-gray">{statistic.label} </p>
            </div>
          ))}
        </div>
      </div>
      <div 
      className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
        <img
          src={bigShoeImage}
          alt="big shoe collection"
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm: left-[10%] max-sm: px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                imageURL={image}
                // thumbnail={shoe.thumbnail}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImage(shoe);
                }}
                bigshoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
