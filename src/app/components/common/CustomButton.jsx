const CustomButton = ({
  text,
  bgColor,
  textColor,
  strokeColor,
  showIcon = true,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-xl cursor-pointer shadow-md transition flex items-center gap-4 text-sm md:text-base font-bold xl:text-lg justify-center ${bgColor} ${textColor} hover:opacity-90`}
    >
      {text}
      {showIcon && (
        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7 7L1 13" stroke={strokeColor} strokeWidth="3" />
        </svg>
      )}
    </button>
  );
};

export default CustomButton;
