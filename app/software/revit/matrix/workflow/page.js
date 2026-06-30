import { workflows } from '@/lib/revitMatrixWorkflows';
import RevitMatrixWorkflowClient from './RevitMatrixWorkflowClient';

export const metadata = {
  title: 'Workflow & Process Flow | Revit Matrix',
  description: 'Studio-standard BIM process reference — the canonical sequence for BEP authoring, federation, clash detection, IFC export, and sign-off.',
};

export default function RevitMatrixWorkflowPage() {
  return <RevitMatrixWorkflowClient workflows={workflows} />;
}
