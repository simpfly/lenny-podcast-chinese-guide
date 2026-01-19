import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLinkTarget(href: string | undefined | null) {
  if (!href) return undefined;
  const isInternal = href.startsWith('/') || href.startsWith('#') || href.includes('builders.simpfly.info');
  return isInternal ? undefined : "_blank";
}
