import { useInView } from "framer-motion";
import { useRef } from "react";
import type { TUseInitial } from ".";

export const useInitial: TUseInitial = () => {
  const animeRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(animeRef, { once: true, amount: 0.6 });

  return { animeRef, isInView };
};
