import CustomButton from "../components/CustomButton";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span>
          Shoes
        </h2>
        <p className="text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, soluta?
          Nobis inventore quis delectus at, quae eligendi deserunt laudantium
          <div className="mt-11 ">
            <CustomButton label="View Details" />
          </div>
        </p>
      </div>
      <div className="flex-1 flex justify center items-center">
        <img
          src={shoe8}
          alt="shoe"
          width={570}
          height={582}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
