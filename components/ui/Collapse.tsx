"use client";

import { useState, useEffect } from "react";

interface CollapseProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Collapse({
  title,
  children,
  className = "",
}: CollapseProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <details
      open={isLargeScreen ? true : undefined}
      className={`group relative w-full rounded-lg p-4 transition-colors hover:border-brand-yellow ${className}`}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-lg font-bold text-brand-yellow lg:cursor-default lg:pointer-events-none  [&::-webkit-details-marker]:hidden">
        {title}
        <span className="transition-transform group-open:rotate-90 lg:hidden">
          ▸
        </span>
      </summary>

      <div className="mt-2  text-base leading-relaxed text-brand-light">
        {children}
      </div>
    </details>
  );
}
