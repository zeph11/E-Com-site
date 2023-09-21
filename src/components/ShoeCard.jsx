const ShoeCard = ({
  imageURL,
  thumbnail,
  changeBigShoeImage,
  bigShoeImage,
}) => {
  const handleClick = () => {
    if (bigShoeImage !== imageURL) changeBigShoeImage(imageURL);
  };
  return (
    <div
      className={`border-2 rounded-xl
  ${
    bigShoeImage === imageURL ? "border-coral-red" : "border-transparent"
  } cursor-pointer max-sm:flex-1
   `}
      onClick={handleClick}
    >
      <div className="flex justify-center item-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl">
        <img
          src={thumbnail}
          alt="shoe collevtion"
          width={127}
          height={103}
          className="object-contain "
        />
      </div>
    </div>
  );
};

export default ShoeCard;
