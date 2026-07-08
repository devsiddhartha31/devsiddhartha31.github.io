interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`rounded-xl px-6 py-3 font-medium transition-all ${
        variant === "primary"
          ? "bg-indigo-500 hover:bg-indigo-600"
          : "border border-zinc-700 hover:border-zinc-500"
      }`}
    >
      {children}
    </button>
  );
}