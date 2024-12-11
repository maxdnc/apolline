export const menuVariants = {
  closed: {
    x: '-100%',
    transition: {
      duration: 0.6,
      ease: [0.83, 0, 0.17, 1],
      delay: 0.3,
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

export const contentMenuVariants = {
  closed: {
    opacity: 0,
    transition: {
      opacity: { duration: 0.3, ease: [0.6, 0, 0.4, 1] },
    },
  },
  open: {
    opacity: 1,
    transition: {
      opacity: { delay: 0.4, duration: 0.6, ease: [0.83, 0, 0.17, 1] },
    },
  },
};

export const submenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      height: { duration: 0.45, ease: [0.83, 0, 0.17, 1] },
      opacity: { duration: 0.3, ease: [0.83, 0, 0.17, 1] },
    },
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      height: { duration: 0.45, ease: [0.83, 0, 0.17, 1] },
      opacity: { delay: 0.2, duration: 0.3, ease: [0.83, 0, 0.17, 1] },
    },
  },
};
