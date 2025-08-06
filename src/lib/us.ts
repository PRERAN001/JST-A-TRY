import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function u4(...inputs) {
  return twMerge(clsx(inputs));
}
