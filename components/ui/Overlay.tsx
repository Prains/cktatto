"use client";
import { useEffect } from "react";

interface OverlayProps {
  children: React.ReactNode;
  className?: string;
  overlayColor: string;
}

const Overlay = ({ children, className, overlayColor }: OverlayProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className={
        `${overlayColor} absolute z-50  top-0 left-0 w-full h-full flex items-center justify-center` +
        ` ${className}`
      }
    >
      {children}
    </div>
  );
};

export default Overlay;
