const CustomButton = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <section className="bg-coral-red px-6 py-3 rounded-full">
      <button
        className={`flex justify-center
      
      items-center gap-2 font-monserrat text-lg leading-none text-white  `}
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
