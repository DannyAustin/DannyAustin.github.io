// Remounts on every navigation, so each page's content animates in.
// The animation lives in globals.css (.animate-page-enter).
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-page-enter">{children}</div>;
}
