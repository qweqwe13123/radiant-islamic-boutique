import { useEffect, useState } from "react";

const ScrollLine = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-[2px] h-full z-50 pointer-events-none">
      <div
        className="w-full bg-brand origin-top transition-transform duration-100"
        style={{ transform: `scaleY(${progress})`, height: "100%" }}
      />
    </div>
  );
};

export default ScrollLine;
