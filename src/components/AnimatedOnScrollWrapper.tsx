import React, { useRef, ReactNode } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

type AnimationType = 'fadeIn' | 'slideUp' | 'slideInLeft';

interface AnimatedOnScrollWrapperProps {
  children: ReactNode;
  className?: string;
  animationType?: AnimationType;
  delay?: number;
  once?: boolean;
  amount?: number;
  staggerChildren?: number;
}

const animationVariants: Record<AnimationType, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  },
};

const AnimatedOnScrollWrapper: React.FC<AnimatedOnScrollWrapperProps> = ({
  children,
  className,
  animationType = 'fadeIn',
  delay = 0,
  once = true,
  amount = 0.3,
  staggerChildren,
}) => {
  console.log('AnimatedOnScrollWrapper loaded');
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const selectedVariants = animationVariants[animationType] || animationVariants.fadeIn;

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={selectedVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, delay, staggerChildren }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnScrollWrapper;