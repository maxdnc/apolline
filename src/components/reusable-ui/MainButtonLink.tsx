import Link from 'next/link';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

const MainButtonLink = ({
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2';

  const variantStyles = {
    primary: 'bg-primary-950 text-secondary-50 hover:bg-primary-900',
    secondary:
      'bg-secondary-50 border border-primary-950 text-primary-950 hover:bg-secondary-100',
    outline:
      'border  border-primary-950 hover:bg-primary-950 hover:text-secondary-50',
    ghost: 'hover:bg-secondary-50 text-primary-950',
  };

  const sizeStyles = {
    sm: 'h-7 px-2 text-xs sm:h-8 sm:px-3 md:h-9 md:px-4',
    md: 'h-8 px-3 text-sm sm:h-10 sm:px-4 md:h-11 md:px-5',
    lg: 'h-10 px-4 text-base sm:h-12 sm:px-6 md:h-14 md:px-8 md:text-lg',
  };

  return (
    <Link
      href={href}
      className={twMerge(
        clsx(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )
      )}
    >
      {children}
    </Link>
  );
};

export default MainButtonLink;
