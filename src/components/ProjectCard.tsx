import { withBasePath } from "@/lib/basePath";
import type { Project } from "@/site.config";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white">
      {project.image && (
        // eslint-disable-next-line @next/next/no-img-element -- static export; plain <img> + withBasePath is the site pattern
        <img
          src={withBasePath(project.image)}
          alt={`${project.name} screenshot`}
          loading="lazy"
          className="aspect-video w-full border-b border-neutral-200 object-cover"
        />
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
      <h2 className="font-semibold tracking-tight">{project.name}</h2>
      <p className="text-base leading-relaxed text-neutral-700">
        {project.description}
      </p>
      <ul className="flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-accent/40 px-2.5 py-0.5 text-xs text-neutral-600"
          >
            {tech}
          </li>
        ))}
      </ul>
      {(project.repoUrl || project.liveUrl) && (
        <div className="mt-auto flex gap-4 pt-1 text-sm">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline print:text-black"
            >
              Source code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline print:text-black"
            >
              Live demo
            </a>
          )}
        </div>
      )}
      </div>
    </article>
  );
}
