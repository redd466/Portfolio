import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../../../lib/data";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-12 max-w-3xl">
      <Link href="/projects" className="inline-flex items-center text-sm text-neutral-400 hover:text-accent transition-colors mb-12">
        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Projects
      </Link>

      <div className="space-y-6">
        <div className="flex items-center gap-4 text-sm font-mono text-accent">
          <span>{project.year}</span>
          <span className="w-12 h-[1px] bg-white/20"></span>
          <span>Case Study</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">
          {project.title}
        </h1>
        
        <p className="text-xl text-neutral-400 leading-relaxed pt-6">
          {project.fullDescription}
        </p>

        <div className="pt-12">
          <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-6">Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span key={t} className="px-4 py-2 bg-surface rounded-full text-sm text-neutral-300 border border-white/5">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}