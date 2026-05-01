"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "default" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

interface ButtonAsButton extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

interface ButtonAsLink extends BaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-600 hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98]",
  secondary:
    "border-2 border-navy-200 text-navy hover:border-accent hover:text-accent active:scale-[0.98]",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "default",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...(rest as any)}>
        {rest.children}
      </Link>
    );
  }

  return <button className={classes} {...(props as ButtonAsButton)} />;
}
