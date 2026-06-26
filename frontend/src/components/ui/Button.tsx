interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="px-6 py-3 rounded-full bg-teal-700 text-white font-medium hover:bg-teal-800 transition-all">
      {children}
    </button>
  );
}