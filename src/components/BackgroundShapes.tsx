import { siteConfig } from "@/site.config";

// Decorative animated geometric shapes behind the page content.
// Toggle via settings.animatedBackground in src/site.config.ts.
export default function BackgroundShapes() {
  if (!siteConfig.settings.animatedBackground) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden print:hidden"
    >
      {/* large soft circle, top left (smaller on phones so it stays an edge sliver) */}
      <div className="bg-shape animate-bg-float absolute -left-40 -top-40 h-72 w-72 rounded-full bg-accent/5 sm:h-96 sm:w-96" />
      {/* big ring, right middle (offset keeps its drift+scale clear of the content column) */}
      <div className="bg-shape animate-bg-drift absolute -right-48 top-1/3 h-[28rem] w-[28rem] rounded-full border border-accent/10" />
      {/* rotated square, top right */}
      <div className="bg-shape animate-bg-spin absolute right-[18%] top-28 h-24 w-24 rounded-2xl border-2 border-accent/10" />
      {/* small filled square, left middle (desktop only — sits under the column on phones) */}
      <div className="bg-shape animate-bg-float-slow absolute left-[10%] top-2/3 hidden h-16 w-16 rotate-12 rounded-lg bg-accent/5 md:block" />
      {/* triangle, bottom left edge */}
      <div className="bg-shape animate-bg-drift-slow absolute -bottom-24 -left-28 h-56 w-56 bg-accent/5 [clip-path:polygon(50%_0%,0%_100%,100%_100%)] sm:h-72 sm:w-72" />
      {/* small ring, bottom right */}
      <div className="bg-shape animate-bg-spin-slow absolute bottom-24 right-[12%] h-20 w-20 rounded-full border-2 border-accent/15" />
    </div>
  );
}
