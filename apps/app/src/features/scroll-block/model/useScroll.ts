import { useRef, useState, useEffect } from "react";

export const useScroll = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [isScrble, setIsScrble] = useState<boolean>(true);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;

    const checkScrollable = () => {
      setIsScrble(el.scrollHeight > el.clientHeight);
    };

    checkScrollable();
    window.addEventListener("resize", checkScrollable);

    return () => {
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  return { boxRef, isScrble };
};
