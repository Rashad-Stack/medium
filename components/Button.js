function Button({ children, className, bgCol = "bg-black ", ...rest }) {
  return (
    <button
      className={`w-28 h-10 flex items-center justify-center text-sm text-white rounded-full highlight-none font-soehne transition duration-700 ${className} ${bgCol}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
