/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { VariantProps, cva } from 'class-variance-authority';
import React, { FC } from 'react';
import { cn } from '../../lib/utils';

const headingVariants = cva(
  'text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter',
  {
    variants: {
      size: {
        default: 'text-3xl md:text-5xl lg:text-5xl',
        lg: 'text-5xl md:text-6xl lg:text-7xl',
        sm: 'text-2xl md:text-3xl lg:text-4xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

interface LargeHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const LargeHeading: FC<LargeHeadingProps> = ({
  children,
  className,
  size,
  ...props
}) => {
  return (
    <h1 {...props} className={cn(headingVariants({ size, className }))}>
      {children}
    </h1>
  );
};

export default LargeHeading;
