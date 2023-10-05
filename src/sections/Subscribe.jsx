import CustomButton from "../components/CustomButton";

const Subscribe = () => {
  return (
  <section id="#contact-us" className="max-container flex justiy-between itms-center max-lg:flex-col gap-10 " >
    <h3 className="text-2xl leading-68px lg:max-w-md font-palanquin font-bold">SignUp from
      <span className="text-coral-red"> Updates</span> & Newsletter
    </h3>
    <div className=" lg-max-w-[40%] w-full flex item-center max-sm:flex-col gap-5 p-2.5 sm:border sm:rounded border-slate-gray rounded-full">
      <input type="text" placeholder="Subscribe" className="input"/>
      <div className="flex  max-sm:justify-end items-center max-sm:w-full"> <CustomButton label="SignUp" fullWidth /> </div>
    </div>
  </section>
  );
};

export default Subscribe;
