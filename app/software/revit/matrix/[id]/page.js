import { notFound } from 'next/navigation';
import { sampleProjects } from '@/lib/revitMatrixData';
import { projectDetails } from '@/lib/revitMatrixDetail';
import { workflows } from '@/lib/revitMatrixWorkflows';
import { workflowStatus } from '@/lib/revitMatrixWorkflowStatus';
import RevitMatrixDetailClient from './RevitMatrixDetailClient';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = sampleProjects.find(p => p.id === id);
  return {
    title: project ? `${project.name} — Setup Matrix | Revit Matrix` : 'Project Not Found',
  };
}

export default async function RevitMatrixDetailPage({ params }) {
  const { id } = await params;
  const project = sampleProjects.find(p => p.id === id);
  const detail = projectDetails[id];
  const status = workflowStatus[id];

  if (!project || !detail) {
    notFound();
  }

  return <RevitMatrixDetailClient project={project} detail={detail} workflows={workflows} status={status} />;
}