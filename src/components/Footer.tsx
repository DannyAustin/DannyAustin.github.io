import { siteConfig } from "@/site.config";

export default function Footer() {
  const { githubUrl, linkedinUrl } = siteConfig.resume.contact;

  return (
    <footer className="border-t border-neutral-200 print:hidden">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-6 text-sm text-neutral-500">
        <p>
          © {new Date().getFullYear()} {siteConfig.resume.name}
        </p>
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              GitHub
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
