import Section from "@/components/Section";
import { siteConfig } from "@/site.config";

export default function ContactSection() {
  const { heading, blurb, formspreeEndpoint } = siteConfig.contactSection;
  const { email, githubUrl, linkedinUrl } = siteConfig.resume.contact;

  return (
    <div className="print:hidden">
      <Section title={heading}>
        <p className="text-base leading-relaxed text-neutral-700">{blurb}</p>
        {formspreeEndpoint ? (
          <form action={formspreeEndpoint} method="POST" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-base focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-base focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Message</span>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-base focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
            </label>
            <button
              type="submit"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Send message
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-start gap-4 rounded-lg border border-neutral-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={`mailto:${email}`}
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Email me
            </a>
            <div className="flex gap-4 text-sm">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  GitHub
                </a>
              )}
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}
