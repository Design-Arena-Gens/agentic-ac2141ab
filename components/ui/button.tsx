"use client";

import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70",
  {
    variants: {
      variant: {
        primary: "bg-brand text-white shadow-soft hover:bg-brand-dark",
        ghost: "bg-transparent text-charcoal hover:bg-brand/10",
        outline: "border border-charcoal/10 bg-white hover:border-brand hover:text-brand"
      },
      size: {
        default: "px-6 py-3 text-sm font-medium",
        icon: "size-10"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode };
type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined; children: ReactNode };
type ButtonProps = VariantProps<typeof buttonVariants> & (AnchorProps | NativeButtonProps);

function Button({ className, variant, size, href, children, ...rest }: ButtonProps) {
  if (href) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href} className={buttonVariants({ variant, size, className })} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={buttonVariants({ variant, size, className })} {...buttonProps}>
      {children}
    </button>
  );
}

export { Button, buttonVariants };
