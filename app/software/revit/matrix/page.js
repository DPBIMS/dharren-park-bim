import RevitMatrixClient from './RevitMatrixClient';
import { sampleProjects } from '@/lib/revitMatrixData';

export const metadata = {
  title: 'Revit Matrix | Dharren Park BIM System',
  description: 'Practice-level BIM portfolio dashboard — audit every active project against your studio standard in one view.',
};

export default function RevitMatrixPage() {
  return <RevitMatrixClient projects={sampleProjects} />;
}
