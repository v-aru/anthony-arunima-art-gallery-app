import { useEffect, useRef } from "react";

const useResizeObserver = (
  nestedRef,
  setDimensions,
  handleUserActivity,
  setIsUserActive
) => {
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === nestedRef.current) {
          const { width, height } = entry.contentRect;

          setDimensions({ width, height });
        }
      }
    });

    resizeObserver.observe(nestedRef.current);
    const timeoutId = setTimeout(() => {
      setIsUserActive(false);
    }, 10);

    document.addEventListener("mousemove", handleUserActivity);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timeoutId);
      document.removeEventListener("mousemove", handleUserActivity);
    };
  }, [handleUserActivity]);
};

export default useResizeObserver;
