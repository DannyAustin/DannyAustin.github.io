import type { Metadata } from "next";
import CertificationCard from "@/components/CertificationCard";
import PublicationCard from "@/components/PublicationCard";
import Section from "@/components/Section";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: siteConfig.pageText.certificationsTitle,
  description: "Professional certifications, credentials, and research.",
};

export default function CertificationsPage() {
  const { certifications, publications } = siteConfig;

  return (
    <div className="mx-auto max-w-3xl space-y-12">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">
          {siteConfig.pageText.certificationsTitle}
        </h1>
        <p className="text-base leading-relaxed text-neutral-700">
          {siteConfig.pageText.certificationsIntro}
        </p>
      </header>

      {certifications.length > 0 && (
        <Section title="Certifications">
          <div className="space-y-4">
            {certifications.map((certification) => (
              <CertificationCard
                key={certification.name}
                certification={certification}
              />
            ))}
          </div>
        </Section>
      )}

      {publications.length > 0 && (
        <Section title="Research">
          <div className="space-y-4">
            {publications.map((publication) => (
              <PublicationCard
                key={publication.title}
                publication={publication}
              />
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}
