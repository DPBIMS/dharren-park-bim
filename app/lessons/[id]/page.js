import { notFound } from 'next/navigation';
import LessonClient from './LessonClient';

const lessons = [
  {
    id: 1, num: '01',
    title: 'What is BIM? A Complete Introduction',
    topic: 'general', cat: 'beginner', readTime: '8 min', free: true,
    intro: `Building Information Modeling (BIM) has transformed how the construction industry designs, builds, and manages infrastructure. This lesson gives you a complete foundation — what BIM is, where it came from, and why every modern construction professional needs to understand it.`,
    sections: [
      { id: 's1', heading: 'What is Building Information Modeling?', level: 'h2', content: `BIM stands for **Building Information Modeling**. At its core, BIM is a digital process for creating and managing information about a built asset throughout its entire lifecycle — from initial design through construction and into operation and maintenance. The key word here is **information**. A BIM model contains rich data about every component — materials, dimensions, quantities, costs, schedules, and more.` },
      { id: 's2', heading: 'BIM vs Traditional CAD', level: 'h2', content: `To understand BIM, it helps to compare it with what came before: **Computer-Aided Design (CAD)**.`, subsections: [ { heading: 'Traditional CAD', items: ['2D drawings with no embedded data', 'Changes must be updated manually', 'No automatic coordination between disciplines'] }, { heading: 'BIM', items: ['3D intelligent model with embedded data', 'Changes update automatically across all views', 'Multiple disciplines work in a coordinated model'] } ], formula: { label: 'BIM Core Concept', text: 'BIM = 3D Geometry + Data + Collaboration + Lifecycle Management' } },
      { id: 's3', heading: 'The BIM Dimensions', level: 'h2', content: `BIM is described in **dimensions**, each adding a layer of information:`, code: { label: 'BIM Dimensions Reference', lines: ['3D → Geometry         (What does it look like?)', '4D → Time / Schedule  (When is it built?)', '5D → Cost             (How much does it cost?)', '6D → Sustainability   (What is its energy impact?)', '7D → Facilities Mgmt  (How is it maintained?)'] } },
      { id: 's4', heading: 'Why BIM Matters in 2026', level: 'h2', content: `BIM is no longer optional in many countries. Governments across the UK, Singapore, Australia, and increasingly the Philippines are mandating BIM for public infrastructure projects.`, items: ['**Fewer errors** — clash detection catches conflicts before construction', '**Cost savings** — better planning reduces expensive rework', '**Faster delivery** — coordinated teams work more efficiently', '**Better outcomes** — data-rich models support better decisions'] },
      { id: 's5', heading: 'BIM in the Philippines', level: 'h2', content: `The Philippine construction industry is in a period of rapid BIM adoption. Large firms working on government infrastructure and commercial development are already requiring BIM on major projects.` },
    ],
    takeaways: ['BIM stands for Building Information Modeling — it is a data-rich digital process, not just 3D drawing.', 'BIM replaces traditional CAD with intelligent, coordinated models that update automatically.', 'The BIM dimensions (3D–7D) represent layers of information: geometry, time, cost, sustainability, and operations.', 'BIM reduces project errors, saves costs, and accelerates delivery.', 'BIM adoption is growing fast in the Philippines — understanding it now gives you a career advantage.'],
    resource: { label: 'BIM Glossary & Terms', type: 'PDF' },
    quiz: { label: 'BIM Fundamentals Quiz', questions: 10, time: '5 min' },
    prev: null,
    next: { id: 2, title: 'BIM vs CAD: Key Differences Explained' },
  },
  {
    id: 2, num: '02',
    title: 'BIM vs CAD: Key Differences Explained',
    topic: 'general', cat: 'beginner', readTime: '7 min', free: true,
    intro: `Many professionals transitioning into BIM come from a CAD background. This lesson clarifies exactly what makes BIM different — and why that difference matters for your career and your projects.`,
    sections: [
      { id: 's1', heading: 'The Fundamental Difference', level: 'h2', content: `CAD produces **drawings**. BIM produces **models**. This sounds simple but has profound implications for how projects are designed, coordinated, and delivered.` },
    ],
    takeaways: ['CAD produces drawings; BIM produces intelligent models.', 'BIM enables automatic coordination across all disciplines.', 'BIM is the global industry standard for major projects.'],
    quiz: { label: 'BIM vs CAD Assessment', questions: 8, time: '4 min' },
    prev: { id: 1, title: 'What is BIM? A Complete Introduction' },
    next: { id: 3, title: 'Getting Started with Autodesk Revit' },
  },
  {
    id: 3, num: '03',
    title: 'Getting Started with Autodesk Revit',
    topic: 'revit', cat: 'beginner', readTime: '10 min', free: true,
    intro: `Revit is the most widely used BIM authoring tool in the world. This lesson walks you through the interface, core concepts, and your first steps inside the software.`,
    sections: [
      { id: 's1', heading: 'The Revit Interface', level: 'h2', content: `When you first open Revit, you'll see four key areas that you need to understand.`, items: ['**Project Browser** — shows all views, sheets, and families', '**Properties Panel** — shows element properties', '**Ribbon** — tools organized by category', '**View Window** — where you work and design'] },
      { id: 's2', heading: 'Key Concepts in Revit', level: 'h2', content: `Revit is built around a few core concepts that make it different from CAD.`, items: ['**Families** — the building blocks (walls, doors, windows, beams)', '**Types** — variations within a family', '**Instances** — individual placed elements', '**Views** — floor plans, sections, elevations, 3D views'] },
    ],
    takeaways: ['Revit uses families, types, and instances to build intelligent models.', 'All views in Revit come from one model — change once, update everywhere.', 'Understanding the interface is the first step to BIM productivity.'],
    quiz: { label: 'Revit Essentials Quiz', questions: 8, time: '4 min' },
    prev: { id: 2, title: 'BIM vs CAD: Key Differences Explained' },
    next: null,
  },
];

export function generateStaticParams() {
  return lessons.map(l => ({ id: String(l.id) }));
}

export default async function LessonPage({ params }) {
  const resolvedParams = await params;
  const lesson = lessons.find(l => l.id === Number(resolvedParams.id));
  if (!lesson) notFound();
  return <LessonClient lesson={lesson} allLessons={lessons} />;
}