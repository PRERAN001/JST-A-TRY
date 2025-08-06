import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function u1(...inputs) {
  return twMerge(clsx(inputs));
}
