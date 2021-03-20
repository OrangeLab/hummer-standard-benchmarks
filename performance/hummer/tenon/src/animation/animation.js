const baseAnimation = {
  duration: 2000,
  repeatCount: -1,
  easing: "linear",
}
export const opacityAnimation = {
  ...baseAnimation,
  keyframes: [
    {
      styles: {
        opacity: 0,
      },
      percent: 0,
    },
    {
      styles: {
        opacity: 0.33,
      },
      percent: 0.33,
    },
    {
      styles: {
        opacity: 0.66,
      },
      percent: 0.66,
    },
    {
      styles: {
        opacity: 1,
      },
      percent: 1,
    }
  ]
}
export const backgroundAnimation = {
  ...baseAnimation,

  keyframes: [
    {
      styles: {
        backgroundColor: "#4A90E2",
      },
      percent: 0,
    },
    {
      styles: {
        backgroundColor: "#8484FF",
      },
      percent: 0.33,
    },
    {
      styles: {
        backgroundColor: "#F1CA19",
      },
      percent: 0.66,
    },
    {
      styles: {
        backgroundColor: "#4A90E2",
      },
      percent: 1,
    }
  ]
}

export const positionAnimation = {
  ...baseAnimation,

  keyframes: [
    {
      styles: {
        position: { x: 0, y: 0 }
      },
      percent: 0,
    },
    {
      styles: {
        position: { x: 20, y: 0 }
      },
      percent: 0.5,
    },
    {
      styles: {
        position: { x: 0, y: 0 }
      },
      percent: 1,
    }
  ]
}
export const rotateAnimation = {
  ...baseAnimation,

  keyframes: [
    {
      styles: {
        rotationZ: 0
      },
      percent: 0,
    },
    {
      styles: {
        rotationZ: 360
      },
      percent: 0.5,
    },
    {
      styles: {
        rotationZ: 0
      },
      percent: 1,
    }
  ],
}
export const scaleAnimation = {
  ...baseAnimation,

  keyframes: [
    {
      styles: {
        scale: 1,
      },
      percent: 0,
    },
    {
      styles: {
        scale: 1.4,
      },
      percent: 0.33,
    },
    {
      styles: {
        scale: 0.6,
      },
      percent: 0.66,
    },
    {
      styles: {
        scale: 1,
      },
      percent: 1,
    }
  ]
}