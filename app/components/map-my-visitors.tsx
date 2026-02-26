"use client";

import { useEffect, useRef } from "react";

const MAP_SCRIPT_SRC =
  "//mapmyvisitors.com/map.js?d=EF5MZid2UwkVrhzQRhE7xuxQ9og-Bs5FWMKfJLAsakY&cl=ffffff&w=a";

export function MapMyVisitorsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "mapmyvisitors";
    script.src = MAP_SCRIPT_SRC;

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current && script.parentNode) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center my-8">
      <div className="w-full max-w-[600px] relative">
        <div ref={containerRef} className="w-full min-h-[300px]" />
      </div>
    </div>
  );
}
