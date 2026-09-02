import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: siteConfig.pageText.projectsTitle,
  description: "Selected software projects.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">
          {siteConfig.pageText.projectsTitle}
        </h1>
        <p className="text-base leading-relaxed text-neutral-700">
          {siteConfig.pageText.projectsIntro}
        </p>
      </header>
      <div className="grid items-start gap-6 sm:grid-cols-2">
        {siteConfig.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
