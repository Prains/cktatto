"use client";
import { useEffect } from "react";

interface Overlay {
  children: React.ReactNode;
  className?: string;
}

const Overlay = ({ className, children }: Overlay) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div
      className={
        "z-50 absolute top-0 left-0 right-0 flex items-center justify-center w-full h-full bg-neutral-900/50" +
        ` ${className}`
      }
    >
      {children}
    </div>
  );
};

export default Overlay;
