import ContactSection from "@/components/ContactSection";
import Section from "@/components/Section";
import { withBasePath } from "@/lib/basePath";
import { siteConfig } from "@/site.config";

export default function Home() {
  const {
    name,
    title,
    summary,
    resumePdf,
    contact,
    experience,
    education,
    skills,
  } = siteConfig.resume;

  const contactItems = [
    { label: contact.email, href: `mailto:${contact.email}` },
    contact.location ? { label: contact.location } : null,
    contact.githubUrl ? { label: "GitHub", href: contact.githubUrl } : null,
    contact.linkedinUrl ? { label: "LinkedIn", href: contact.linkedinUrl } : null,
    contact.websiteUrl ? { label: "Website", href: contact.websiteUrl } : null,
  ].filter((item) => item !== null);

  return (
    <div className="mx-auto max-w-3xl space-y-12">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">{name}</h1>
        <p className="text-lg text-neutral-600">{title}</p>
        <ul className="flex flex-wrap gap-x-2 gap-y-1 text-sm text-neutral-500">
          {contactItems.map((item, i) => (
            <li key={item.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>·</span>}
              {"href" in item && item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-accent hover:underline print:text-black"
                >
                  {item.label}
                </a>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ul>
        {resumePdf && (
          <div className="pt-2 print:hidden">
            <a
              href={withBasePath(resumePdf)}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-accent/40 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/5"
            >
              <svg
                aria-hidden
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                />
              </svg>
              Download Resume
            </a>
          </div>
        )}
      </header>

      <Section title="Summary">
        <p className="text-base leading-relaxed text-neutral-700">{summary}</p>
      </Section>

      <Section title="Experience">
        <ol className="space-y-8 border-l border-neutral-200 print:border-neutral-400">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`} className="relative pl-6">
              <span
                aria-hidden
                className="absolute left-0 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-accent bg-accent print:border-black print:bg-black"
              />
              <article className="space-y-1.5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-semibold tracking-tight">
                    {job.role} · {job.company}
                  </h3>
                  <p className="text-sm text-neutral-500">
                    {job.startDate} – {job.endDate}
                    {job.location && ` · ${job.location}`}
                  </p>
                </div>
                {job.highlights.length > 0 && (
                  <ul className="list-disc space-y-1.5 pl-5 text-base leading-relaxed text-neutral-700">
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Education">
        <div className="space-y-6">
          {education.map((entry) => (
            <article key={entry.school} className="space-y-1.5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold tracking-tight">{entry.school}</h3>
                {(entry.startDate || entry.endDate) && (
                  <p className="text-sm text-neutral-500">
                    {[entry.startDate, entry.endDate].filter(Boolean).join(" – ")}
                  </p>
                )}
              </div>
              <p className="text-base text-neutral-700">{entry.degree}</p>
              {entry.details && (
                <ul className="list-disc space-y-1.5 pl-5 text-sm text-neutral-500">
                  {entry.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <div className="space-y-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-1 text-base sm:flex-row sm:gap-3"
            >
              <span className="w-48 shrink-0 font-medium">{group.category}</span>
              <span className="text-neutral-700">
                {group.skills.join(", ")}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <ContactSection />
    </div>
  );
}
