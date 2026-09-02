export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-6">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent print:text-black">
        {title}
      </h2>
      {children}
    </section>
  );
}
