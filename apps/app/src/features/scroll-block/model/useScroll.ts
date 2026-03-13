import { useRef, useState, useEffect } from "react";

export const useScroll = () => {
  const contRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [isScrble, setIsScrble] = useState<boolean>(false);

  useEffect(() => {
    const contEl = contRef.current;
    const boxEl = boxRef.current;
    if (!contEl || !boxEl) return;

    const checkScrollable = () => {
      setIsScrble(contEl.clientHeight < boxEl.scrollHeight);
    };

    checkScrollable();
    window.addEventListener("resize", checkScrollable);

    return () => {
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  return { boxRef, contRef, isScrble };
};
