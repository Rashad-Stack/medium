function Button({ children, className, ...rest }) {
  return (
    <button
      className={`flex items-center justify-center text-sm bg-black text-white py-2 px-4 rounded-full highlight-none font-soehne ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
