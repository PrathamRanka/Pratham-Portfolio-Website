
import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

const baseStyles =
  "group relative inline-flex shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-lg border-0 font-medium shadow-xs cursor-pointer select-text transition-colors duration-150 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50";

const variants = {
  primary:
    "bg-[color-mix(in_oklch,var(--color-kumo-brand),white_30%)] text-white ring-1 ring-[color-mix(in_oklch,var(--color-kumo-brand),black_10%)] active:ring-[color-mix(in_oklch,var(--color-kumo-brand),black_10%)] focus-visible:ring-[color-mix(in_oklch,var(--color-kumo-brand),black_10%)]",
  secondary: "bg-zinc-800 text-white ring-1 ring-zinc-700 hover:bg-zinc-700",
  outline: "bg-transparent text-white ring-1 ring-zinc-700 hover:bg-zinc-800",
  ghost: "bg-transparent text-zinc-300 hover:bg-zinc-800 hover:text-white",
};

const sizes = {
  sm: "h-8 rounded-md px-3 text-sm",
  md: "h-9 rounded-lg px-3 text-base",
  lg: "h-11 rounded-lg px-5 text-base",
};

function buttonClasses(
  variant: NonNullable<ButtonProps["variant"]>,
  size: NonNullable<ButtonProps["size"]>,
  className: string
) {
  return `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
}

function ButtonContent({ children, variant }: {
  children: React.ReactNode;
  variant: NonNullable<ButtonProps["variant"]>;
}) {
  return (
    <>
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-[inherit] bg-linear-to-b from-[color-mix(in_oklch,var(--color-kumo-brand),white_15%)] to-[var(--color-kumo-brand)] shadow-[inset_0_1px_0_0_color-mix(in_oklch,var(--color-kumo-brand),white_30%)] group-hover:from-[color-mix(in_oklch,var(--color-kumo-brand),white_30%)]"
        />
      )}
      <span className="relative flex items-center gap-1.5">{children}</span>
    </>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses(variant, size, className)}
      {...props}
    >
      <ButtonContent variant={variant}>{children}</ButtonContent>
    </button>
  );
}

export function LinkButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={buttonClasses(variant, size, className)}
      {...props}
    >
      <ButtonContent variant={variant}>{children}</ButtonContent>
    </a>
  );
}
