export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT_CIRC = [0.85, 0, 0.15, 1] as const;

export const DURATION = {
  fast: 0.4,
  base: 0.6,
  slow: 0.8,
} as const;

export const STAGGER = {
  tight: 0.06,
  base: 0.1,
  loose: 0.14,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0 },
};

export const defaultTransition = {
  duration: DURATION.base,
  ease: EASE_OUT_EXPO,
};

export const viewportOnce = { once: true, amount: 0.2, margin: "-60px" as const };
