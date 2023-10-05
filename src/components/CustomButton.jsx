const CustomButton = ({
  label,
  iconUrl,
  // backgroundColor,
  // textColor,
  // borderColor,
  fullWidth
}) => {
  return (
    <section className="bg-coral-red px-7 py-4 rounded-full ">
      <button
        className={`flex justify-center
      
      items-center gap-2 font-monserrat text-lg leading-none text-white  ${fullWidth && 'w-full'}`}
      >
        {label}
        {iconUrl && (
          <img
            src={iconUrl}
            alt="icon"
            className=" ml-2 rounded-full w-5 h-5"
          />
        )}
      </button>
    </section>
  );
};

export default CustomButton;
