export function Button({ children, onClick, variant = "default", className = "" }) {
  const base =
    "px-4 py-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
