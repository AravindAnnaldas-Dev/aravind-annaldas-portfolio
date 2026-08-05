"use client";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const MIN_SCALE = 0.6;
const MAX_SCALE = 2;

type PdfViewerProps = {
  file: string;
  className?: string;
};

/** In-app PDF renderer (pdf.js via react-pdf) — paginated, zoomable, no iframe reliance. */
export function PdfViewer({ file, className }: PdfViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [width, setWidth] = useState<number>();

  const measure = useCallback((node: HTMLDivElement | null) => {
    containerRef.current = node;
    if (node) setWidth(node.clientWidth);
  }, []);

  return (
    <div className={cn("flex min-h-0 flex-1 flex-col gap-3", className)}>
      <div
        ref={measure}
        data-lenis-prevent
        className="border-border bg-background min-h-0 flex-1 overflow-auto rounded-md border"
      >
        <Document
          file={file}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={
            <p className="text-text-secondary p-6 text-sm">Loading resume…</p>
          }
          error={
            <p className="text-text-secondary p-6 text-sm">
              Couldn&apos;t load the preview — try opening in a new tab
              instead.
            </p>
          }
          className="flex justify-center py-4"
        >
          <Page
            pageNumber={pageNumber}
            width={width ? width * scale - 32 : undefined}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
            aria-label="Previous page"
          >
            <ChevronLeft className="size-4" aria-hidden />
          </Button>
          <span className="text-text-secondary font-mono text-xs tabular-nums">
            Page {pageNumber} / {numPages ?? "…"}
          </span>
          <Button
            variant="ghost"
            size="icon-sm"
            disabled={!numPages || pageNumber >= numPages}
            onClick={() =>
              setPageNumber((p) => Math.min(numPages ?? p, p + 1))
            }
            aria-label="Next page"
          >
            <ChevronRight className="size-4" aria-hidden />
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            disabled={scale <= MIN_SCALE}
            onClick={() => setScale((s) => Math.max(MIN_SCALE, s - 0.2))}
            aria-label="Zoom out"
          >
            <Minus className="size-4" aria-hidden />
          </Button>
          <span className="text-text-secondary font-mono text-xs tabular-nums">
            {Math.round(scale * 100)}%
          </span>
          <Button
            variant="ghost"
            size="icon-sm"
            disabled={scale >= MAX_SCALE}
            onClick={() => setScale((s) => Math.min(MAX_SCALE, s + 0.2))}
            aria-label="Zoom in"
          >
            <Plus className="size-4" aria-hidden />
          </Button>
        </div>
      </div>
    </div>
  );
}
