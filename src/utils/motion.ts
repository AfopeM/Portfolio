export const fadeIn = (direction: string, delay: number) => ({
  hidden: {
    x: direction === "left" ? -300 : direction === "right" ? 300 : 0,
    y: direction === "up" ? 300 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 45,
      delay,
    },
  },
});
