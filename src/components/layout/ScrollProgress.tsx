"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [mounted, setMounted] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    setMounted(true);

    const updateScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const current =
        (window.scrollY / total) * 100;

      setScroll(current);
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        updateScroll
      );
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-1 bg-blue-600"
      style={{
        width: `${scroll}%`,
      }}
    />
  );
}