"use client";

import { useCallback } from "react";

import { scrollToHash } from "@/components/providers/smooth-scroll-provider";

/**
 * Click handler for in-page "/#section" links (Nav, Footer). If we're
 * already on the target route, scrolls via Lenis and updates the URL hash
 * without a navigation/native jump (see smooth-scroll-provider.tsx for why
 * that matters). If we're on a different route, does nothing and lets
 * next/link's normal navigation run — it needs an actual page load first.
 */
export function useHashLinkClick() {
  return useCallback((href: string) => {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
      const [path, hash] = href.split("#");
      if (!hash) return;

      const targetPath = path || "/";
      if (window.location.pathname !== targetPath) return;

      e.preventDefault();
      scrollToHash(`#${hash}`);
      window.history.pushState(null, "", `${targetPath}#${hash}`);
    };
  }, []);
}
