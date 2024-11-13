import { clsx } from "clsx";

export function cn(...inputs) {
  return clsx(inputs);
}

/* 
Had a tailwind util function here before, but removed it

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
*/