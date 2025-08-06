import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function u2(...inputs) {
  return twMerge(clsx(inputs));
}
