"use client";

import type { VariantProps } from "class-variance-authority";
import { ExternalLink, FileText } from "lucide-react";
import dynamic from "next/dynamic";

import { Button, type buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogPopup,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { contact } from "@/lib/content/contact";
import { cn } from "@/lib/utils";

// pdf.js relies on browser-only APIs (e.g. DOMMatrix) — must never render on
// the server.
const PdfViewer = dynamic(
  () => import("@/components/shared/pdf-viewer").then((m) => m.PdfViewer),
  { ssr: false },
);

type ResumePreviewProps = {
  variant?: VariantProps<typeof buttonVariants>["variant"];
  /** Adds an accent glow + pulse, for placements where it should pop (e.g. Contact). */
  glow?: boolean;
};

/**
 * Resume preview — embeds the same-origin PDF directly (no third-party
 * viewer/proxy needed since the file is served from this app's /public).
 */
export function ResumePreview({
  variant = "outline",
  glow = false,
}: ResumePreviewProps) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant={variant}
            size="lg"
            className={cn(
              glow &&
                "shadow-[0_0_0_1px_var(--accent),0_0_24px_color-mix(in_oklch,var(--accent)_65%,transparent)] animate-pulse hover:animate-none",
            )}
          />
        }
      >
        <FileText className="size-4" aria-hidden />
        Preview Resume
      </DialogTrigger>

      <DialogPortal>
        <DialogPopup className="h-[90vh]">
          <div className="flex items-center justify-between gap-4">
            <DialogTitle>Resume Preview</DialogTitle>

            <div className="flex items-center gap-2">
              <a
                href={contact.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary focus-visible:outline-ring inline-flex items-center gap-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <ExternalLink className="size-4" aria-hidden />
                Open in new tab
              </a>
              <DialogClose />
            </div>
          </div>

          <PdfViewer file={contact.resumeHref} />
        </DialogPopup>
      </DialogPortal>
    </Dialog>
  );
}
