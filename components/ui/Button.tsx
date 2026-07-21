import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/libs/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  className?: string;
}

const variants = {
  primary:
    "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-indigo-500/40",

  secondary:
    "border border-zinc-700 bg-zinc-900/40 text-zinc-200 backdrop-blur hover:border-indigo-500/40 hover:bg-zinc-800",

  ghost:
    "text-zinc-300 hover:bg-zinc-800 hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
  icon: "h-10 w-10 p-0",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </button>
  );
}