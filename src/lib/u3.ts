import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function u3(...inputs) {
  return twMerge(clsx(inputs));
}
