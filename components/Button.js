function Button({ children, className, bgCol = "bg-black ", ...rest }) {
  return (
    <button
      className={`flex items-center justify-center text-sm text-white py-2 px-4 rounded-full highlight-none font-soehne transition duration-700 ${className} ${bgCol}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
