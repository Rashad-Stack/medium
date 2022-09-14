function Button({ children }) {
  return (
    <button className="bg-black text-white py-2 px-4 rounded-full highlight-none">
      {children}
    </button>
  );
}

export default Button;
