import { cn } from "@/libs/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-indigo-500/40"
          : "border border-zinc-700 bg-zinc-900/40 text-zinc-200 backdrop-blur hover:border-indigo-500/40 hover:bg-zinc-800",
        className
      )}
    >
      {children}
    </button>
  );
}