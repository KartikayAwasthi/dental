// Framer Motion v12 uses WAAPI on the client — it applies transforms/opacity
// via the Web Animations API and does NOT set inline style attributes.
// But SSR generates inline styles (e.g. style="opacity:0;transform:…").
// React 19 detects this attribute mismatch and warns.
// Wrapping every motion.* element with suppressHydrationWarning silences it.
"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export const m = {
  div:     (props: HTMLMotionProps<"div">)     => <motion.div     suppressHydrationWarning {...props} />,
  section: (props: HTMLMotionProps<"section">) => <motion.section suppressHydrationWarning {...props} />,
  p:       (props: HTMLMotionProps<"p">)       => <motion.p       suppressHydrationWarning {...props} />,
  h2:      (props: HTMLMotionProps<"h2">)      => <motion.h2      suppressHydrationWarning {...props} />,
  h1:      (props: HTMLMotionProps<"h1">)      => <motion.h1      suppressHydrationWarning {...props} />,
  h3:      (props: HTMLMotionProps<"h3">)      => <motion.h3      suppressHydrationWarning {...props} />,
  ul:      (props: HTMLMotionProps<"ul">)      => <motion.ul      suppressHydrationWarning {...props} />,
  li:      (props: HTMLMotionProps<"li">)      => <motion.li      suppressHydrationWarning {...props} />,
  a:       (props: HTMLMotionProps<"a">)       => <motion.a       suppressHydrationWarning {...props} />,
  span:    (props: HTMLMotionProps<"span">)    => <motion.span    suppressHydrationWarning {...props} />,
  img:     (props: HTMLMotionProps<"img">)     => <motion.img     suppressHydrationWarning {...props} />,
};
