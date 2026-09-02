import type { Publication } from "@/site.config";

export default function PublicationCard({
  publication,
}: {
  publication: Publication;
}) {
  const { title, venue, date, url } = publication;

  return (
    <article className="flex flex-col gap-1.5 rounded-lg border border-neutral-200 bg-white p-5">
      <h3 className="font-semibold tracking-tight">{title}</h3>
      <p className="text-[15px] text-neutral-700">{venue}</p>
      {date && <p className="text-sm text-neutral-500">Published {date}</p>}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="pt-1 text-sm text-accent hover:underline print:text-black"
        >
          Read paper
        </a>
      )}
    </article>
  );
}
