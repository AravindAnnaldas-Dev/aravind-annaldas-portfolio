const NODES = [
  "Client (Next.js / React)",
  "Auth & session layer",
  "Per-vertical data layer (React Query + Axios)",
  "Third-party GDS/travel REST APIs",
  "Shared checkout",
];

/**
 * Placeholder box diagram — real component names/edges to be confirmed
 * before this ships (§9.5). Deliberately plain: no fabricated detail.
 */
export function ArchitectureDiagram() {
  return (
    <div className="border-border bg-surface rounded-md border p-6">
      <ol className="flex flex-col gap-3">
        {NODES.map((node, i) => (
          <li key={node} className="flex items-center gap-3">
            <span className="text-text-secondary font-mono text-xs">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="border-border bg-bg text-text-primary rounded-sm border px-3 py-2 font-mono text-sm">
              {node}
            </span>
          </li>
        ))}
      </ol>
      <p className="text-text-secondary mt-4 text-xs">
        Placeholder — swapped for a real diagram once component names are
        confirmed.
      </p>
    </div>
  );
}
