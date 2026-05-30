import { Variants, Transition } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
};

export const createTransition = (
  duration: number = 0.5,
  index: number = 0,
  delayStep: number = 0.1
): Transition => ({
  duration,
  delay: index * delayStep,
  ease: [0.16, 1, 0.3, 1],
});
