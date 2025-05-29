export const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.9,
        ease: "easeOut",
        delay:0.3,
      },
    },
  };
  
  export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.9,
        delay:0.3,
      },
    },
  };  

  export const slideLeft = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration:1.9,delay:0.3, ease: "easeOut" }
    }
  };
  
  export const slideRight = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.9,delay:0.3, ease: "easeOut" }
    }
  };
  
  export const zoomIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      delay:0.3,
      transition: { duration: 1.9, ease: "easeOut" }
    }
  };
  
  export const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6
      }
    }
  };

  export const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.9,
        delay:0.3,
        ease: "easeOut"
      }
    }
  };
  
  export const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.9,
        delay:0.6,
        ease: "easeOut"
      }
    }
  };

  export const fadeUpStaggered = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  