const Button = ({
  label,
  iconURL,
  backGroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-monstserrat text-lg leading-none rounded-full 
      ${
        backGroundColor
          ? `${backGroundColor} ${textColor} ${borderColor}`
          : 'bg-coral-red text-white border-coral-red'
      }
      ${fullWidth && 'w-full'}

      `}
    >
      {label}
      {iconURL && (
        <img
          alt='arrow right icon'
          className='ml-2 rounded-full w-5 h-5'
          src={iconURL}
        />
      )}
    </button>
  );
};

export default Button;
