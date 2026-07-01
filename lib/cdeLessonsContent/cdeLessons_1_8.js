// ============================================================
// COMMON DATA ENVIRONMENT — LESSONS cde-1 through cde-8 (BEGINNER)
// Section: CDE Foundations
// File: lib/cdeLessonsContent/cdeLessons_1_8.js
// Index: lib/cdeLessonsData.js
// Free lessons: cde-1, cde-2, cde-3
// ============================================================

export const lessons_1_8 = [

  // ============================================================
  // LESSON CDE-01 — What is a CDE & Why It Exists in ISO 19650
  // ============================================================
  {
    id: 'cde-1', num: '01',
    title: 'What is a CDE & Why It Exists in ISO 19650',
    topic: 'CDE Fundamentals', cat: 'beginner', readTime: '8 min', free: true,
    desc: 'Understand what a Common Data Environment is, why ISO 19650 makes it mandatory, and what problem it actually solves on a real project.',
    intro: `Every construction project produces an enormous volume of information — models, drawings, schedules, reports, correspondence — created by dozens of people across multiple organisations, all working at the same time. Without a single agreed system for managing that information, teams end up working from different versions of the same file, approvals go untracked, and nobody can say with confidence which drawing is the current one. The Common Data Environment is ISO 19650's answer to this problem. This lesson explains what a CDE is, why the standard requires one, and why understanding it is the starting point for everything else in this course.`,
    sections: [
      {
        id: 's1', heading: 'What is a Common Data Environment?', level: 'h2',
        content: `A **Common Data Environment (CDE)** is defined in ISO 19650 as an agreed source of information for any given project, used to collect, manage, and disseminate documentation, graphical models, and non-graphical data for the whole project team. It is not a single piece of software — it is a **managed process**, supported by a platform (such as Autodesk Construction Cloud, Trimble Connect, Viewpoint, or Asite), that governs how information is created, checked, approved, and shared.\n\nThe critical distinction: a shared drive or email chain is a *place* information sits. A CDE is a *workflow* information moves through, with defined states, defined roles, and defined authorisation points at every step.`,
        formula: { label: 'CDE Core Concept', text: 'One Agreed Source of Truth + Defined Workflow = Controlled Information Across the Whole Project Team' },
      },
      {
        id: 's2', heading: 'Why ISO 19650 Requires a CDE', level: 'h2',
        content: `ISO 19650 — the international standard for managing information over the whole life cycle of a built asset using BIM — makes the CDE a mandatory part of information management on any compliant project. Understanding why reveals what the standard is actually trying to fix.`,
        subsections: [
          {
            heading: 'The Problems a CDE Solves',
            items: [
              '**Version confusion** — without a single managed environment, contractors can build from superseded drawings',
              '**No audit trail** — disputes over "who approved what, and when" are unanswerable without a formal record',
              '**Uncontrolled access** — sensitive commercial or safety-critical information reaching the wrong party',
              '**Duplicated effort** — teams recreating information that already exists elsewhere on the project',
              '**Silent information loss** — data that exists in one person\'s inbox and nowhere else',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Where the CDE Sits in ISO 19650', level: 'h2',
        content: `ISO 19650 is published in linked parts, each covering a different phase or aspect of information management. The CDE concept runs through all of them.`,
        code: {
          label: 'ISO 19650 — Where the CDE Applies',
          lines: [
            'ISO 19650-1  → Concepts and principles (defines the CDE and its states)',
            'ISO 19650-2  → Delivery phase (CDE used for design & construction information)',
            'ISO 19650-3  → Operational phase (CDE continues into asset management)',
            'ISO 19650-5  → Security-minded approach (access control within the CDE)',
            '',
            'The CDE is not a phase-specific tool — it is the backbone that',
            'carries information from appointment, through delivery,',
            'into operation and the Asset Information Model (AIM).',
          ],
        },
      },
      {
        id: 's4', heading: 'What Actually Lives Inside a CDE', level: 'h2',
        content: `A CDE holds every type of information produced on a project — not just drawings. Understanding the full scope avoids the common mistake of treating the CDE as "just the document register."`,
        items: [
          '**Graphical models** — Revit, IFC, Civil 3D, and federated coordination models',
          '**Non-graphical data** — schedules, specifications, COBie data, asset registers',
          '**Documentation** — reports, method statements, health & safety files, correspondence',
          '**Project information** — the BIM Execution Plan, the Master Information Delivery Plan (MIDP), responsibility matrices',
          '**Communications** — RFIs, transmittals, and formally issued approvals',
        ],
        formula: { label: 'Scope Rule', text: 'If it is produced for the project and someone else needs it, it belongs in the CDE — not in a personal inbox or local drive' },
      },
      {
        id: 's5', heading: 'The CDE is a Process, Not Just a Platform', level: 'h2',
        content: `A common misunderstanding is treating "the CDE" as synonymous with the software platform hosting it. ACC, Trimble Connect, and similar tools are **CDE platforms** — the technology that implements the CDE process. The CDE itself is the combination of that platform with the agreed workflow, permission structure, naming convention, and states that the project team commits to using.`,
        subsections: [
          {
            heading: 'Platform vs Process',
            items: [
              '**Platform** — the software (e.g. Autodesk Construction Cloud Docs) that stores and versions files',
              '**Process** — the agreed states, approval gates, naming convention, and roles that govern how information moves through the platform',
              'Two projects can use the exact same platform and have completely different CDE outcomes — because the process was configured differently',
              'This is why this course spends as much time on workflow and governance as it does on the software itself',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'The DPC2025 Project — Your Reference Case Study', level: 'h2',
        content: `Throughout this course, examples are drawn from **DPC2025** — a fictional multi-discipline commercial development used consistently across lessons so that concepts build on a single, coherent project. DPC2025 is configured as an ISO 19650-compliant CDE on Autodesk Construction Cloud, with an architect, structural engineer, MEP consultant, and main contractor as appointed parties.`,
        items: [
          'DPC2025 will be referenced from Lesson cde-8 (project configuration) through the capstone in cde-32',
          'Screenshalready-familiar concepts (folders, permissions, transmittals) will map onto this same project throughout',
          'Using one consistent example reduces cognitive load — you learn the CDE process once, not once per lesson',
        ],
      },
    ],
    takeaways: [
      'A CDE is an agreed source of information for a project — a managed process, not just a storage platform.',
      'ISO 19650 requires a CDE to solve version confusion, missing audit trails, uncontrolled access, and information loss.',
      'The CDE concept runs across ISO 19650-1 (principles), -2 (delivery), -3 (operations), and -5 (security).',
      'A CDE holds every information type produced on a project: models, documents, non-graphical data, and formal communications.',
      'The CDE is the combination of a platform (e.g. ACC) with an agreed process — the same platform can produce different outcomes depending on how it is configured.',
      'This course uses one consistent reference project, DPC2025, to build understanding of the CDE process end to end.',
    ],
    resource: { label: 'CDE Foundations Overview Guide', type: 'PDF' },
    quiz: { label: 'What is a CDE Quiz', questions: 10, time: '5 min' },
    prev: null,
    next: { id: 'cde-2', title: 'The Four CDE States — WIP, Shared, Published & Archived' },
  },

  // ============================================================
  // LESSON CDE-02 — The Four CDE States
  // ============================================================
  {
    id: 'cde-2', num: '02',
    title: 'The Four CDE States — WIP, Shared, Published & Archived',
    topic: 'CDE States', cat: 'beginner', readTime: '8 min', free: true,
    desc: 'Learn the four states every piece of information passes through in a compliant CDE, and the authorisation gate between each one.',
    intro: `ISO 19650 organises the entire life of a piece of information into four states. Every drawing, model, and document that ever enters a CDE lives in one of these four states at any given time, and can only move forward through a defined authorisation gate. Understanding these four states — and, just as importantly, what is NOT allowed to happen between them — is the single most important concept in this course, because almost every workflow you will learn later is really just a variation on moving information between these states correctly.`,
    sections: [
      {
        id: 's1', heading: 'The Four States, In Order', level: 'h2',
        content: `ISO 19650-1 defines four states that information passes through inside the CDE. Information always moves forward through these states — it should never move backwards.`,
        code: {
          label: 'The Four ISO 19650 CDE States',
          lines: [
            'STATE 1 — WORK IN PROGRESS (WIP)',
            '  Being created by an individual or a single discipline team',
            '  Not yet checked; not visible to anyone outside the originating team',
            '',
            'STATE 2 — SHARED',
            '  Checked and authorised internally; shared for cross-discipline review',
            '  Used as the source for coordination — this is where clashes are found',
            '',
            'STATE 3 — PUBLISHED',
            '  Formally authorised for a specific purpose and issued to the wider team',
            '  Assigned a suitability code (see Lesson cde-7)',
            '',
            'STATE 4 — ARCHIVED',
            '  Superseded information, retained as a permanent audit record',
            '  Never deleted; hidden from the default project view',
          ],
        },
        formula: { label: 'State Flow Rule', text: 'WIP → Shared → Published → Archived. Information flows forward only — never edited backwards into an earlier state.' },
      },
      {
        id: 's2', heading: 'Work in Progress (WIP)', level: 'h2',
        content: `WIP is where all new information starts. It is deliberately the least controlled state, because work here changes constantly and has not yet been through any quality check.`,
        items: [
          'Visible only to the individual or team creating it — never to other disciplines, the client, or the contractor',
          'No suitability code is applied — it is explicitly "not yet fit for any purpose"',
          'Version numbers may increment rapidly as the author iterates',
          'Nothing in WIP should ever be relied upon by anyone outside the originating team, even informally',
        ],
      },
      {
        id: 's3', heading: 'Shared', level: 'h2',
        content: `The Shared state is where cross-team collaboration actually happens. Information moves here once the originating discipline has completed an internal check and is confident enough in it to expose it to others.`,
        items: [
          'Accessible to all appointed parties on the project — not just the originating discipline',
          'The primary source for model federation and clash detection (covered in cde-11 and cde-12)',
          'Still not authorised for construction or formal decision-making — it is shared for coordination, not for building from',
          'A discipline can update Shared information frequently as coordination issues are resolved',
        ],
        formula: { label: 'Why Shared Exists', text: 'Skipping straight from WIP to Published means clashes are discovered after formal issue, not before — the single most common cause of CDE failure (Lesson cde-28)' },
      },
      {
        id: 's4', heading: 'Published', level: 'h2',
        content: `Published is the formal issue state. Moving information here requires authorisation — a deliberate decision by someone with the authority to say "this is now fit for the purpose stated."`,
        subsections: [
          {
            heading: 'What Changes at Publication',
            items: [
              'A suitability code is assigned, stating exactly what the information is fit for (e.g. "Suitable for Construction")',
              'A formal transmittal is typically issued recording who received it and when',
              'The information becomes visible and usable by the full project team, including the client and contractor',
              'Publication is a one-way authorisation gate — nobody edits a Published document directly; a revision goes back through WIP → Shared → Published again',
            ],
          },
        ],
      },
      {
        id: 's5', heading: 'Archived', level: 'h2',
        content: `Every time a new revision is published, the previous revision does not disappear — it moves into the Archived state. Archiving is not deletion; it is the permanent audit trail that makes a CDE legally defensible.`,
        items: [
          'Archived information is retained indefinitely and is never deleted from the CDE',
          'It is hidden from the default project view so nobody accidentally works from it',
          'It remains fully retrievable for audits, disputes, and historical reference',
          'On many platforms, "Archived" is implemented as a status flag (e.g. Superseded) rather than a separate folder — the effect is the same',
        ],
        formula: { label: 'Archive Principle', text: 'Nothing that has ever been Published is ever deleted — it is superseded, not destroyed' },
      },
      {
        id: 's6', heading: 'Common Mistakes with the State Model', level: 'h2',
        content: `**Mistake:**
Treating Shared as if it were Published — contractors or clients pulling information from the Shared area and using it for construction decisions. Shared is for coordination only.

**Mistake:**
Skipping Shared entirely and publishing straight from WIP. This removes the cross-discipline check that catches the majority of coordination clashes before formal issue.

**Best Practice:**
Configure folder permissions so that Published information is the only state visible by default to parties outside the design team. This makes the "state" a structural fact of the CDE, not just a convention people are trusted to follow.`,
      },
    ],
    takeaways: [
      'Information in a CDE always sits in one of four states: WIP, Shared, Published, or Archived.',
      'WIP is visible only to the originating team; nothing here should be relied upon by anyone else.',
      'Shared is where cross-discipline coordination happens — it is the source for federation and clash detection, not for construction.',
      'Published is a formally authorised issue, carrying a suitability code and typically a transmittal record.',
      'Archived information is never deleted — it is retained permanently as the audit trail, just hidden from default view.',
      'Information should only ever move forward through the states — skipping Shared is one of the most common causes of CDE failure.',
    ],
    resource: { label: 'CDE Four States Reference Card', type: 'PDF' },
    quiz: { label: 'CDE States Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-1', title: 'What is a CDE & Why It Exists in ISO 19650' },
    next: { id: 'cde-3', title: 'Information Containers — Files, Models & Documents as ISO 19650 Data Units' },
  },

  // ============================================================
  // LESSON CDE-03 — Information Containers
  // ============================================================
  {
    id: 'cde-3', num: '03',
    title: 'Information Containers — Files, Models & Documents as ISO 19650 Data Units',
    topic: 'CDE Fundamentals', cat: 'beginner', readTime: '7 min', free: true,
    desc: 'Understand the ISO 19650 concept of an information container — the fundamental unit every CDE workflow actually operates on.',
    intro: `ISO 19650 does not talk about "files" or "documents" as its base unit of information — it uses the term **information container**. This might sound like unnecessary jargon, but the term exists for a precise reason: it lets the standard describe files, 3D models, and structured data (like a spreadsheet or a database export) using one consistent concept, with one consistent set of rules for naming, status, and revision. This lesson defines the term properly so that later lessons on naming conventions, metadata, and suitability codes make sense in context.`,
    sections: [
      {
        id: 's1', heading: 'What is an Information Container?', level: 'h2',
        content: `An **information container** is defined in ISO 19650 as a named persistent set of information retrievable from within a file, system, or application storage hierarchy. In practice, this covers three broad categories of content used on every BIM project.`,
        code: {
          label: 'Types of Information Container',
          lines: [
            'DOCUMENT CONTAINERS',
            '  → PDFs, Word documents, spreadsheets, reports, method statements',
            '',
            'GRAPHICAL MODEL CONTAINERS',
            '  → Revit models (.rvt), IFC exports (.ifc), Civil 3D files, federated models',
            '',
            'NON-GRAPHICAL DATA CONTAINERS',
            '  → COBie spreadsheets, asset registers, structured schedules, database exports',
          ],
        },
        formula: { label: 'Why the Term Matters', text: 'One consistent set of naming, metadata, and status rules applies to every container type — a drawing PDF and a Revit model follow the same governance logic' },
      },
      {
        id: 's2', heading: 'Containers vs Loose Data', level: 'h2',
        content: `Not every piece of project information qualifies as a container. The concept specifically implies something that can be named, versioned, and retrieved as a discrete unit — as opposed to informal, untracked communication.`,
        items: [
          'A drawing saved as a PDF and uploaded to the CDE → an information container',
          'A quick clarification sent in a WhatsApp message → not a container; it should be formalised (e.g. as an RFI) if it matters',
          'A Revit model published to ACC → an information container, versioned and revision-controlled',
          'A verbal instruction on site with no written record → explicitly outside the CDE, and a compliance risk if relied upon',
        ],
        formula: { label: 'Container Test', text: 'If it cannot be named, versioned, and retrieved by someone else on the project, it is not an information container — and it should not be treated as authoritative' },
      },
      {
        id: 's3', heading: 'The Container Lifecycle', level: 'h2',
        content: `Every information container follows the same lifecycle inside the CDE, tying directly back to the four states from Lesson cde-2.`,
        subsections: [
          {
            heading: 'Container Lifecycle Stages',
            items: [
              'Created inside WIP by an individual or discipline team',
              'Checked and moved to Shared once internally reviewed',
              'Authorised and moved to Published with a suitability code assigned',
              'Superseded by a new revision and moved to Archived, retained permanently',
              'At every stage, the container carries the same identity (its unique name) — only its state, revision, and status change',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Federated Models as Containers', level: 'h2',
        content: `A federated model — multiple discipline models combined for coordination — is itself treated as an information container, distinct from the individual discipline models that compose it. This distinction matters when assigning ownership and permissions.`,
        items: [
          '**Discipline model** — owned and authored by a single discipline (e.g. the architectural Revit model)',
          '**Federated model** — an aggregation, typically owned by the BIM/Information Manager, combining multiple discipline containers for coordination',
          'The federated model has its own naming, versioning, and suitability status, separate from any single discipline model inside it',
          'Federation is covered in full detail in Lesson cde-12',
        ],
      },
      {
        id: 's5', heading: 'Container Identity: What Never Changes', level: 'h2',
        content: `A single information container keeps the same identity — the same file name structure — for its entire life on the project, even as its revision number, status, and state change many times.`,
        code: {
          label: 'What Stays Fixed vs What Changes',
          lines: [
            'FIXED for the life of the container:',
            '  Project code, Originator, Volume/System, Level/Location, Type, Role, Number',
            '  (the full naming convention — covered in Lesson cde-4)',
            '',
            'CHANGES as the container moves through the CDE:',
            '  Revision (P01, P02, C01...)',
            '  Status / suitability code (S0, S2, A2...)',
            '  State (WIP, Shared, Published, Archived)',
          ],
        },
        formula: { label: 'Identity Principle', text: 'Same container, same name, forever — only the revision and status labels attached to it change' },
      },
    ],
    takeaways: [
      'An information container is ISO 19650\'s term for any named, retrievable unit of project information — documents, models, and non-graphical data alike.',
      'One set of naming, revision, and status rules applies consistently across every container type.',
      'Informal, unrecorded communication (a chat message, a verbal instruction) is explicitly not a container and should never be treated as authoritative.',
      'Every container follows the same lifecycle: created in WIP, checked into Shared, authorised into Published, superseded into Archived.',
      'Federated models are containers in their own right, distinct from the discipline models that compose them.',
      'A container\'s identity (its name) stays fixed for its entire life — only its revision, status, and state change over time.',
    ],
    resource: { label: 'Information Containers Explained (PDF)', type: 'PDF' },
    quiz: { label: 'Information Containers Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-2', title: 'The Four CDE States — WIP, Shared, Published & Archived' },
    next: { id: 'cde-4', title: 'The ISO 19650 Naming Convention — Field by Field' },
  },

  // ============================================================
  // LESSON CDE-04 — The ISO 19650 Naming Convention
  // ============================================================
  {
    id: 'cde-4', num: '04',
    title: 'The ISO 19650 Naming Convention — Field by Field',
    topic: 'Naming & Metadata', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'Break down the standard ISO 19650 file naming convention field by field, with worked examples from the DPC2025 project.',
    intro: `A file name under ISO 19650 is not just a label — it is a compact piece of structured metadata. A correctly formed name tells you, without opening the file, which project it belongs to, who produced it, which discipline and location it covers, what type of container it is, and what revision it is at. This lesson walks through the standard naming convention field by field, using the DPC2025 project as a running example, so that every file name in later lessons is instantly readable.`,
    sections: [
      {
        id: 's1', heading: 'The Naming Convention Structure', level: 'h2',
        content: `The naming convention recommended under ISO 19650 (developed from the UK BIM Framework guidance) breaks a file name into a fixed sequence of fields, separated by hyphens, so that any team member can decode it on sight.`,
        code: {
          label: 'ISO 19650 Naming Convention — Field Order',
          lines: [
            '[Project]-[Originator]-[Volume/System]-[Level/Location]-[Type]-[Role]-[Number]',
            '',
            'Example (DPC2025 architectural ground floor GA drawing):',
            'DPC2025-AEC-ZZ-00-DR-A-0001',
            '',
            'DPC2025  → Project code',
            'AEC      → Originator (the authoring organisation)',
            'ZZ       → Volume/System (ZZ = whole project / not volume-specific)',
            '00       → Level/Location (00 = ground floor)',
            'DR       → Type (DR = Drawing)',
            'A        → Role (A = Architect)',
            '0001     → Sequential number',
          ],
        },
      },
      {
        id: 's2', heading: 'Field 1 & 2 — Project and Originator', level: 'h2',
        content: `The first two fields identify where the container comes from — which project, and which organisation produced it.`,
        items: [
          '**Project** — a short, agreed code unique to the project (e.g. DPC2025), set once in the project\'s BEP and never changed',
          '**Originator** — a code identifying the authoring company, agreed at project kickoff (e.g. AEC for the architect, STR for the structural engineer, MEP for the services consultant)',
          'Originator codes must be unique across every appointed party on the project — this is agreed and published in the BIM Execution Plan',
          'These two fields together answer: "which project, and whose file is this?"',
        ],
      },
      {
        id: 's3', heading: 'Field 3 & 4 — Volume/System and Level/Location', level: 'h2',
        content: `These two fields locate the container spatially or functionally within the project — which part of the building or which system it relates to.`,
        code: {
          label: 'Common Volume/System and Level/Location Codes',
          lines: [
            'Volume/System (examples):',
            '  ZZ  → Multiple/whole project      01  → Zone or building 1',
            '  SW  → Site-wide                    MEC → Mechanical systems',
            '',
            'Level/Location (examples):',
            '  ZZ  → Multiple levels              00  → Ground floor',
            '  01  → First floor                  M1  → Mezzanine 1',
            '  RF  → Roof                         B1  → Basement 1',
            '',
            'Codes are agreed and fixed per project in the BEP —',
            'consistency across all originators matters more than the specific scheme chosen',
          ],
        },
      },
      {
        id: 's4', heading: 'Field 5 & 6 — Type and Role', level: 'h2',
        content: `Type describes what kind of information container this is; Role describes which discipline produced it. Together they tell the reader what they are looking at and who to contact about it.`,
        code: {
          label: 'Common Type & Role Codes',
          lines: [
            'Type codes:',
            '  DR → Drawing            MO → Model             SP → Specification',
            '  CA → Calculation        SC → Schedule           RP → Report',
            '  CO → Correspondence     PP → Presentation       SU → Survey',
            '',
            'Role codes:',
            '  A → Architect           S → Structural Engineer  M → Mechanical Engineer',
            '  E → Electrical Engineer C → Civil Engineer       Q → Quantity Surveyor',
            '  L → Landscape Architect W → Contractor            K → Client',
          ],
        },
        formula: { label: 'Type + Role Check', text: 'DR-A = "a drawing produced by the architect" · MO-S = "a model produced by the structural engineer" — readable at a glance' },
      },
      {
        id: 's5', heading: 'Field 7 — Number', level: 'h2',
        content: `The final field is a sequential number, unique within the combination of the preceding fields, ensuring no two containers ever share an identical name.`,
        items: [
          'Typically a 4-digit sequential number (0001, 0002, 0003...)',
          'Numbering restarts logically within each Type/Role/Location combination as agreed in the BEP — some projects number continuously across a discipline instead',
          'Never reuse a number once assigned, even if the original container is later deleted or abandoned',
          'The number, combined with all preceding fields, forms the complete unique identity of the container discussed in Lesson cde-3',
        ],
      },
      {
        id: 's6', heading: 'Putting It Together — Full DPC2025 Examples', level: 'h2',
        content: `Reading full examples end-to-end reinforces how the fields combine in practice.`,
        code: {
          label: 'DPC2025 Naming Examples',
          lines: [
            'DPC2025-AEC-ZZ-01-DR-A-0012',
            '  → DPC2025 project, Architect, whole system, Level 1, Drawing, no. 0012',
            '',
            'DPC2025-STR-ZZ-ZZ-MO-S-0001',
            '  → DPC2025 project, Structural Eng., all systems, all levels, Model, no. 0001',
            '',
            'DPC2025-MEP-MEC-B1-SC-M-0004',
            '  → DPC2025 project, MEP consultant, Mechanical system, Basement 1, Schedule, no. 0004',
          ],
        },
      },
      {
        id: 's7', heading: 'Common Naming Mistakes', level: 'h2',
        content: `**Mistake:**
Changing field order or abbreviation length partway through a project. Once the BEP fixes the scheme, every originator must follow it exactly — a single inconsistent file breaks automated filtering and search across the CDE.

**Mistake:**
Embedding the revision or status inside the file name field structure itself (e.g. "...-0001-RevB"). Revision and status are separate metadata fields (Lesson cde-5), not part of the container's fixed name.

**Best Practice:**
Publish the agreed field code tables (Originator, Volume, Location, Type, Role) as an appendix to the BEP and circulate them to every appointed party before any files are created.`,
      },
    ],
    takeaways: [
      'The ISO 19650 naming convention structures a file name into seven fixed fields: Project, Originator, Volume/System, Level/Location, Type, Role, and Number.',
      'Project and Originator identify which project and which company produced the container.',
      'Volume/System and Level/Location identify where in the building or which system the container relates to.',
      'Type and Role identify what kind of container it is and which discipline authored it.',
      'The Number field, combined with all preceding fields, guarantees a unique identity for every container.',
      'Naming schemes must be agreed once in the BEP and followed exactly by every appointed party — inconsistency breaks search and filtering across the whole CDE.',
    ],
    resource: { label: 'ISO 19650 Naming Convention Field Tables', type: 'PDF' },
    quiz: { label: 'Naming Convention Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-3', title: 'Information Containers — Files, Models & Documents as ISO 19650 Data Units' },
    next: { id: 'cde-5', title: 'Metadata & Attributes — The Data Behind Every File' },
  },

  // ============================================================
  // LESSON CDE-05 — Metadata & Attributes
  // ============================================================
  {
    id: 'cde-5', num: '05',
    title: 'Metadata & Attributes — The Data Behind Every File',
    topic: 'Naming & Metadata', cat: 'beginner', readTime: '8 min', free: false,
    desc: 'Go beyond the file name to understand the metadata and custom attributes that make a CDE searchable, filterable, and auditable.',
    intro: `The file name carries fixed identity information, but it cannot carry everything a project team needs to know about a container — who uploaded it, when, at what revision, in what status, and against which discipline. That is the job of metadata: structured, attached data that travels with the container but sits outside its name. This lesson covers the metadata every CDE captures automatically, and the custom attributes a project team should configure to make its CDE genuinely useful rather than just a file store.`,
    sections: [
      {
        id: 's1', heading: 'System Metadata vs Custom Attributes', level: 'h2',
        content: `Every CDE platform captures two broad categories of metadata for each container: system metadata, generated automatically, and custom attributes, configured deliberately by the project team.`,
        code: {
          label: 'System Metadata vs Custom Attributes',
          lines: [
            'SYSTEM METADATA (automatic)',
            '  → File size, upload date/time, uploaded-by user, version number',
            '  → Cannot be edited manually — generated by the platform itself',
            '',
            'CUSTOM ATTRIBUTES (configured)',
            '  → Discipline, document status, revision code, suitability code',
            '  → Contract reference, drawing scale, review due date',
            '  → Defined per-project (or per-Hub) by the BIM/Information Manager',
          ],
        },
      },
      {
        id: 's2', heading: 'Why Metadata Matters More Than the File Name', level: 'h2',
        content: `A well-formed file name tells you what a container is. Metadata tells you what state it is in *right now* — which changes constantly, while the name stays fixed. This is why metadata, not the name, drives filtering, search, and reporting across a live CDE.`,
        items: [
          'Filtering "show me all Structural drawings still in Shared status" relies entirely on metadata, not the file name',
          'A dashboard showing how many containers are overdue for review reads metadata fields, not names',
          'Metadata answers questions that change daily; the name answers questions that never change',
        ],
        formula: { label: 'Metadata Principle', text: 'Name = fixed identity | Metadata = current state — a CDE without rich metadata is just a filing cabinet, not a management system' },
      },
      {
        id: 's3', heading: 'Essential Custom Attributes for an ISO 19650 CDE', level: 'h2',
        content: `Most compliant projects configure at minimum the following custom attributes on every container, in addition to the naming fields already covered.`,
        subsections: [
          {
            heading: 'Core Attribute Set',
            items: [
              '**Status/Suitability code** — S0 to S7, or A/B/C series (Lesson cde-7)',
              '**Revision** — P01, P02, C01... tracking formal issue history (Lesson cde-17)',
              '**Discipline** — Architecture, Structure, MEP, Civil, etc.',
              '**Classification** — Uniclass 2015 or equivalent classification code, where required by the BEP',
              '**Review due date** — when the next formal check is expected',
              '**Originator contact** — who to approach with a query about this container',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Mandatory Attributes at Upload', level: 'h2',
        content: `A CDE platform can be configured to require certain attributes before a container is even accepted into the system — preventing incomplete metadata from ever entering the project record.`,
        items: [
          'Make discipline, status, and revision mandatory fields — uploads cannot complete without them',
          'Use dropdown/select fields rather than free text wherever possible, to keep values consistent across the whole team',
          'Configure default values sensibly (e.g. new uploads default to S0/WIP status) so authors cannot accidentally mis-tag a document as approved',
          'Mandatory metadata at upload is far cheaper than trying to correct missing metadata across hundreds of files later in the project',
        ],
      },
      {
        id: 's5', heading: 'Non-Graphical Data as Metadata-Rich Containers', level: 'h2',
        content: `Some information containers — particularly COBie exports and structured asset data — are themselves almost entirely metadata, with the "content" being a structured table of attributes rather than a drawing or a narrative document.`,
        items: [
          'A COBie spreadsheet is a container whose entire value is its structured attribute data (asset name, type, warranty, manufacturer, etc.)',
          'This is why non-graphical data containers require even stricter attribute discipline than drawings — a missing field in a COBie export can break an entire handover deliverable (Lesson cde-26)',
          'Non-graphical containers still carry the same file-naming and status metadata as any other container in the CDE',
        ],
      },
      {
        id: 's6', heading: 'Common Metadata Mistakes', level: 'h2',
        content: `**Mistake:**
Leaving status and discipline as free-text fields. Inconsistent capitalisation and spelling ("Structural" vs "structure" vs "Struct.") silently breaks every filter and report built on top of that field.

**Mistake:**
Only capturing metadata at upload and never updating it as a container moves through the CDE states. A document sitting at "S0/WIP" status three months after being formally published is a metadata failure, not a software failure.

**Best Practice:**
Run a metadata audit alongside the permissions audit recommended in Lesson cde-8 — check that status fields on visible containers actually reflect their real-world state.`,
      },
    ],
    takeaways: [
      'Every container carries system metadata (automatic) and custom attributes (configured by the project team).',
      'Metadata reflects a container\'s current state, while the file name reflects its fixed identity — filtering and reporting rely on metadata.',
      'Core attributes on an ISO 19650 CDE typically include status/suitability, revision, discipline, classification, and review date.',
      'Configuring mandatory dropdown attributes at upload prevents incomplete or inconsistent metadata from entering the project record.',
      'Non-graphical data containers like COBie exports are almost entirely metadata — attribute discipline here is critical to handover quality.',
      'Metadata must be actively maintained as a container moves through the CDE states, not just captured once at upload.',
    ],
    resource: { label: 'CDE Metadata Attribute Checklist', type: 'PDF' },
    quiz: { label: 'Metadata & Attributes Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-4', title: 'The ISO 19650 Naming Convention — Field by Field' },
    next: { id: 'cde-6', title: 'Roles in the CDE — Who Does What & When' },
  },

  // ============================================================
  // LESSON CDE-06 — Roles in the CDE
  // ============================================================
  {
    id: 'cde-6', num: '06',
    title: 'Roles in the CDE — Who Does What & When',
    topic: 'Roles & Governance', cat: 'beginner', readTime: '8 min', free: false,
    desc: 'Map the ISO 19650 information management roles onto real CDE responsibilities — who configures it, who checks it, and who authorises it.',
    intro: `A CDE does not manage itself. Every state transition, permission setting, and authorisation gate in earlier lessons is executed by a specific person acting in a specific role. ISO 19650 defines a set of information management roles that exist independently of a person's job title — the same individual might hold several of these roles, or a role might be split across several people on a larger project. This lesson maps the standard's roles onto practical CDE responsibilities.`,
    sections: [
      {
        id: 's1', heading: 'The Core ISO 19650 Information Management Roles', level: 'h2',
        content: `ISO 19650 identifies a set of functional roles responsible for information management across the appointing party and each appointed party. These are responsibilities, not job titles — a small consultancy may combine several into one person.`,
        code: {
          label: 'ISO 19650 Information Management Roles',
          lines: [
            'Appointing Party        → The client or their representative; sets requirements (EIR)',
            'Lead Appointed Party    → Prime consultant/contractor coordinating the appointed team',
            'Appointed Party         → Any organisation delivering information (architect, engineer, etc.)',
            'Information Manager     → Configures and governs the CDE process day to day',
            'Task Team Manager       → Leads a single discipline\'s information production',
            'Task Information        → Individual producing the graphical/non-graphical containers',
            '  Producer',
          ],
        },
      },
      {
        id: 's2', heading: 'The Information Manager — CDE Owner', level: 'h2',
        content: `On most projects, the Information Manager (frequently the same person acting as BIM Manager) is the role with day-to-day operational responsibility for the CDE itself.`,
        items: [
          'Configures the CDE platform: folder structure, permission sets, custom attributes, naming convention enforcement',
          'Monitors that containers move through the four states correctly and that metadata stays current',
          'Runs the periodic permissions and metadata audits referenced in Lessons cde-5 and cde-29',
          'Acts as the escalation point when a naming, permission, or workflow issue is discovered',
          'Does not typically author content — the Information Manager governs the process, task teams produce the information',
        ],
        formula: { label: 'Role Distinction', text: 'Information Manager governs the CDE process; Task Information Producers create the content that flows through it' },
      },
      {
        id: 's3', heading: 'Task Team Manager and Task Information Producer', level: 'h2',
        content: `These two roles exist inside every appointed party's own organisation and are responsible for the actual creation and internal checking of information before it ever reaches the Shared state.`,
        subsections: [
          {
            heading: 'Responsibilities',
            items: [
              '**Task Team Manager** — leads a discipline team, authorises the move from WIP to Shared for their own team\'s output',
              '**Task Information Producer** — creates the actual container (models, drawings, data) inside WIP',
              'The Task Team Manager\'s authorisation is the first quality gate — nothing should reach Shared without their sign-off',
              'On a small team, one person may hold both roles; on a large discipline team, several producers report to one manager',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Who Authorises the Move to Published?', level: 'h2',
        content: `Moving information from Shared to Published is a higher-authority decision than moving WIP to Shared, and typically involves more than one role.`,
        items: [
          '**Lead Appointed Party** — often authorises publication on behalf of the whole delivery team for cross-discipline issues',
          '**Task Team Manager** — authorises publication of their own discipline\'s content specifically',
          '**Appointing Party (client)** — for certain suitability codes (e.g. formal stage approval), the client or their representative must sign off directly',
          'The exact authorisation matrix — who can publish what — is defined project-by-project in the BEP and enforced through CDE permission sets (Lesson cde-8)',
        ],
      },
      {
        id: 's5', heading: 'Mapping Roles onto ACC Permissions', level: 'h2',
        content: `In practice, these ISO 19650 roles translate directly into permission levels and permission sets configured on the CDE platform, connecting the standard's theory to the practical setup covered in Lesson cde-8.`,
        code: {
          label: 'ISO 19650 Role → ACC Permission Mapping',
          lines: [
            'Task Information Producer  → Edit access to their own discipline\'s WIP folder',
            'Task Team Manager          → Manage access to WIP + Shared for their discipline',
            'Information Manager        → Project Administrator across the whole CDE',
            'Lead Appointed Party       → Manage access to Published folders/authorisation workflow',
            'Appointing Party           → View access across Published + Handover, plus approval workflow triggers',
          ],
        },
      },
      {
        id: 's6', heading: 'Common Role Mistakes', level: 'h2',
        content: `**Mistake:**
Giving every team member Project Administrator access "to keep things simple." This collapses every role into one, removing the authorisation gates the whole role structure exists to enforce.

**Mistake:**
Leaving the Information Manager role informally assigned, with no one person clearly accountable for CDE governance. When something goes wrong, no one is positioned to fix it quickly.

**Best Practice:**
Publish a simple RACI-style table in the BEP mapping each ISO 19650 role to a named individual (or named individuals per discipline) at project kickoff, and update it whenever the team changes.`,
      },
    ],
    takeaways: [
      'ISO 19650 defines functional information management roles — Appointing Party, Lead Appointed Party, Appointed Party, Information Manager, Task Team Manager, and Task Information Producer.',
      'These are responsibilities, not job titles — one person can hold multiple roles on a smaller project.',
      'The Information Manager governs the CDE process day to day; Task Information Producers create the content that flows through it.',
      'Moving WIP to Shared is authorised by the Task Team Manager; moving Shared to Published typically requires higher authority.',
      'ISO 19650 roles map directly onto CDE platform permission levels — this is how the standard\'s theory becomes practical configuration.',
      'Publish a named RACI table mapping roles to individuals in the BEP, and keep every team member restricted to the access their actual role requires.',
    ],
    resource: { label: 'ISO 19650 Roles & Responsibilities Matrix', type: 'PDF' },
    quiz: { label: 'CDE Roles Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-5', title: 'Metadata & Attributes — The Data Behind Every File' },
    next: { id: 'cde-7', title: 'Suitability Codes — What S0 to S7 Actually Mean' },
  },

  // ============================================================
  // LESSON CDE-07 — Suitability Codes
  // ============================================================
  {
    id: 'cde-7', num: '07',
    title: 'Suitability Codes — What S0 to S7 Actually Mean',
    topic: 'Suitability Codes', cat: 'beginner', readTime: '8 min', free: false,
    desc: 'Decode the industry-standard suitability code system and understand exactly what each code authorises a recipient to do with the information.',
    intro: `A suitability code is the single most consequential piece of metadata a container can carry — it tells every recipient, unambiguously, what they are and are not authorised to do with the information in front of them. Building from an "S2" drawing when the project needed an "S4" is not a minor administrative slip; it is precisely the kind of failure the whole CDE process exists to prevent. This lesson decodes the full suitability code table used across the industry under ISO 19650 practice.`,
    sections: [
      {
        id: 's1', heading: 'What a Suitability Code Actually Authorises', level: 'h2',
        content: `A suitability code is not a quality rating — it is a **statement of fitness for a specific purpose**. The same drawing might be "suitable for coordination" but explicitly not "suitable for construction," even though nothing about the drawing's quality has changed. Understanding this distinction is the key to reading suitability codes correctly.`,
        formula: { label: 'Suitability Principle', text: 'A suitability code answers one question only: "What am I allowed to do with this information?" — never "how good is it?"' },
      },
      {
        id: 's2', heading: 'The S-Series — Codes Used Before Formal Authorisation', level: 'h2',
        content: `The S-series codes track information through internal development and coordination, before it reaches a formally authorised, contractual status.`,
        code: {
          label: 'S-Series Suitability Codes',
          lines: [
            'S0  → Initial status / work in progress — not yet checked, no reliance permitted',
            'S1  → Suitable for coordination — shared for cross-discipline review only',
            'S2  → Suitable for information — informational use, not for construction',
            'S3  → Suitable for review and comment — issued for formal internal or client comment',
            'S4  → Suitable for stage approval — meets the requirements of a specific project stage gateway',
            'S5  → Suitable for PIM authorisation — ready for the appointing party\'s formal review',
            'S6  → Suitable for costing purposes — sufficiently developed for cost estimation',
            'S7  → Suitable for tender / statutory submission — ready for procurement or regulatory approval',
          ],
        },
      },
      {
        id: 's3', heading: 'The A/B/C-Series — Codes Used After Formal Authorisation', level: 'h2',
        content: `Once information has been formally accepted for a construction purpose, it typically moves onto a separate lettered series that tracks contractual and construction-stage authorisation.`,
        code: {
          label: 'A/B/C-Series Suitability Codes',
          lines: [
            'A1/A2 → Authorised and accepted / accepted with comments — issued for use as stated',
            'B1/B2 → Partial sign-off — authorised for specific, limited use only',
            'C     → Suitable for construction — the highest authority, fully authorised to build from',
            '',
            'Exact letter-series definitions are agreed per project in the BEP —',
            'the principle (increasing authority, decreasing ambiguity) is constant',
          ],
        },
      },
      {
        id: 's4', heading: 'Suitability Codes vs CDE States — How They Relate', level: 'h2',
        content: `Suitability codes and CDE states (Lesson cde-2) are related but distinct concepts, and conflating them is a common source of confusion for people new to ISO 19650.`,
        items: [
          'A container in the **WIP state** has no suitability code, or is implicitly S0',
          'A container in the **Shared state** typically carries S1 or S2 — suitable for coordination or information, not for reliance',
          'A container in the **Published state** carries a formal suitability code (S3 upward, or the A/B/C series) — this is where the code becomes contractually meaningful',
          'The state describes *where* information sits in the CDE workflow; the suitability code describes *what it can be used for* once there',
        ],
        formula: { label: 'State + Code Together', text: 'State = position in the workflow | Suitability Code = permitted use — a Published document must always carry an explicit suitability code' },
      },
      {
        id: 's5', heading: 'Reading a Suitability Code in Practice — DPC2025 Example', level: 'h2',
        content: `A worked example makes the practical consequence of a suitability code concrete.`,
        code: {
          label: 'DPC2025 Worked Example',
          lines: [
            'DPC2025-STR-ZZ-01-DR-S-0014, Suitability: S2',
            '  → Structural drawing, Level 1 — suitable for INFORMATION only',
            '  → Contractor may NOT build from this drawing',
            '',
            'Same drawing, next revision, Suitability: C',
            '  → Now suitable for CONSTRUCTION',
            '  → Contractor is authorised to build from this specific revision',
            '',
            'If the contractor built from the S2 revision by mistake,',
            'this is a CDE process failure, not a design error —',
            'the suitability code existed precisely to prevent it',
          ],
        },
      },
      {
        id: 's6', heading: 'Common Suitability Code Mistakes', level: 'h2',
        content: `**Mistake:**
Treating a high revision number as equivalent to a high suitability code. Revision P08 at S2 is still not suitable for construction — the letter/number in the revision field and the suitability code are entirely separate pieces of metadata.

**Mistake:**
Leaving suitability codes as free text, allowing inconsistent entries like "for info," "S2," and "informational" to describe the same status. Configure suitability as a fixed dropdown list at the CDE platform level.

**Best Practice:**
Agree the exact suitability code table for the project in the BEP before any information is produced, and train every appointed party's team on it during onboarding (Lesson cde-31).`,
      },
    ],
    takeaways: [
      'A suitability code states what a recipient is authorised to do with information — not how good the information is.',
      'The S-series (S0–S7) tracks information before formal authorisation, from initial WIP through to tender/statutory readiness.',
      'The A/B/C-series tracks information after formal authorisation, culminating in "C — Suitable for Construction," the highest authority level.',
      'Suitability codes and CDE states are related but distinct: state describes workflow position, suitability describes permitted use.',
      'A Published container should always carry an explicit, current suitability code — never an inherited or outdated one.',
      'Suitability schemes must be agreed in the BEP and configured as fixed dropdown values, never free text, to prevent misreading.',
    ],
    resource: { label: 'Suitability Code Reference Table', type: 'PDF' },
    quiz: { label: 'Suitability Codes Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-6', title: 'Roles in the CDE — Who Does What & When' },
    next: { id: 'cde-8', title: 'Setting Up the DPC2025 CDE on ACC — Project Configuration' },
  },

  // ============================================================
  // LESSON CDE-08 — Setting Up the DPC2025 CDE on ACC
  // ============================================================
  {
    id: 'cde-8', num: '08',
    title: 'Setting Up the DPC2025 CDE on ACC — Project Configuration',
    topic: 'ACC Configuration', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'Configure a real ISO 19650-compliant CDE on Autodesk Construction Cloud, using the DPC2025 project as a worked example.',
    intro: `Every concept covered so far in this course — states, containers, naming, metadata, roles, and suitability — needs to be configured into an actual CDE platform before a project team can use it. This lesson walks through setting up the DPC2025 project as a compliant CDE on Autodesk Construction Cloud, bringing together everything from Lessons cde-1 through cde-7 into one working configuration that the rest of this course will build on.`,
    sections: [
      {
        id: 's1', heading: 'Project Configuration Checklist', level: 'h2',
        content: `Before any team member uploads a single file, a CDE project needs a defined configuration. This is the Information Manager's responsibility (Lesson cde-6), typically completed in the first one to two weeks of a project.`,
        subsections: [
          {
            heading: 'Setup Sequence',
            items: [
              'Agree and document the naming convention field codes in the BEP (Lesson cde-4)',
              'Create the project on ACC with the correct name, type, and timezone',
              'Build the folder structure reflecting the four CDE states',
              'Configure custom attributes: status, discipline, suitability, revision (Lesson cde-5)',
              'Set up permission sets aligned to the ISO 19650 roles (Lesson cde-6)',
              'Add appointed parties and assign each team member their permission set',
              'Issue the naming convention and suitability code tables to every appointed party before go-live',
            ],
          },
        ],
      },
      {
        id: 's2', heading: 'Building the Folder Structure for the Four States', level: 'h2',
        content: `The folder structure in ACC Docs is where the four CDE states become concrete, physical locations that permissions can attach to.`,
        code: {
          label: 'DPC2025 CDE Folder Structure',
          lines: [
            '01 - WIP',
            '  01.1 - Architecture [WIP]      (Architect edit only)',
            '  01.2 - Structure [WIP]         (Structural engineer edit only)',
            '  01.3 - MEP [WIP]               (MEP consultant edit only)',
            '',
            '02 - Shared',
            '  02.1 - Architecture [Shared]   (all disciplines view)',
            '  02.2 - Structure [Shared]      (all disciplines view)',
            '  02.3 - MEP [Shared]            (all disciplines view)',
            '  02.4 - Federated Coordination Models',
            '',
            '03 - Published',
            '  03.1 - Issued Drawings          (full project team view)',
            '  03.2 - Issued Models',
            '',
            '04 - Archive (Superseded)         (retained, hidden from default view)',
          ],
        },
      },
      {
        id: 's3', heading: 'Configuring Custom Attributes in ACC', level: 'h2',
        content: `With the folder structure in place, the next step is configuring the metadata fields every container will require, per Lesson cde-5.`,
        items: [
          'Navigate to Project Settings → Docs → Custom Attributes (Hub Administrator or Project Administrator access required)',
          'Create a "Discipline" attribute as a dropdown: Architecture, Structure, MEP, Civil',
          'Create a "Suitability" attribute as a dropdown: S0, S1, S2, S3, S4, S5, S6, S7, A1, A2, B1, B2, C',
          'Create a "Revision" attribute as free text, following the project\'s agreed revision scheme (Lesson cde-17)',
          'Mark Discipline and Suitability as mandatory fields at upload',
        ],
      },
      {
        id: 's4', heading: 'Setting Up Permission Sets for Each Role', level: 'h2',
        content: `Permission Sets bundle folder access into named packages, so that new team members can be onboarded correctly in seconds rather than configured folder-by-folder.`,
        code: {
          label: 'DPC2025 Permission Sets',
          lines: [
            'Set: "Architect Team"',
            '  Edit  → 01.1 Architecture [WIP]',
            '  Edit  → 02.1 Architecture [Shared]',
            '  View  → 02.2, 02.3, 02.4, 03.1, 03.2',
            '',
            'Set: "Structural Team"  (mirrors Architect, own WIP/Shared folders)',
            'Set: "MEP Team"          (mirrors Architect, own WIP/Shared folders)',
            '',
            'Set: "Main Contractor"',
            '  View → 03.1 Issued Drawings, 03.2 Issued Models only',
            '  No access to any WIP or Shared folder',
            '',
            'Set: "Information Manager"',
            '  Manage → all folders (Project Administrator)',
          ],
        },
      },
      {
        id: 's5', heading: 'Onboarding the Project Team', level: 'h2',
        content: `Configuration is only half the job — the team needs to actually understand and use it correctly from day one. This is covered in depth in Lesson cde-31, but the essentials at project kickoff are:`,
        items: [
          'Add all appointed party members to the ACC project and assign them the correct Permission Set',
          'Circulate the naming convention and suitability code tables before the first upload',
          'Run a short kickoff walkthrough of the folder structure and the state-to-permission mapping',
          'Confirm every discipline lead understands their authorisation responsibility for moving WIP to Shared',
        ],
      },
      {
        id: 's6', heading: 'Verifying the Configuration Before Go-Live', level: 'h2',
        content: `Before the project goes live, the Information Manager should verify the configuration behaves as intended — testing it, not just trusting it.`,
        items: [
          'Upload a test file to a WIP folder and confirm only the correct discipline can see it',
          'Move the test file to Shared and confirm cross-discipline visibility works as expected',
          'Confirm mandatory attributes actually block upload when left blank',
          'Confirm the Main Contractor permission set cannot see any WIP or Shared folder content',
          'Delete the test file once verification is complete — it should never be mistaken for real project data',
        ],
        formula: { label: 'Go-Live Rule', text: 'Never assume a CDE configuration works as designed — verify every permission boundary with a real test upload before the team starts using it' },
      },
    ],
    takeaways: [
      'CDE project configuration brings together naming, states, metadata, and roles into one working setup before any real files are uploaded.',
      'The folder structure should map directly onto the four CDE states, with permissions attached at the folder level.',
      'Custom attributes (Discipline, Suitability, Revision) should be configured as mandatory dropdown fields, not free text.',
      'Permission Sets bundle folder access into named, reusable packages aligned to ISO 19650 roles, speeding up onboarding.',
      'The project team must be onboarded with the naming convention and suitability tables before their first upload, not after.',
      'Always verify a new CDE configuration with a real test upload before go-live — never assume permission boundaries work as designed.',
    ],
    resource: { label: 'DPC2025 CDE Configuration Template', type: 'PDF' },
    quiz: { label: 'CDE Configuration Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-7', title: 'Suitability Codes — What S0 to S7 Actually Mean' },
    next: { id: 'cde-9', title: 'The WIP State — Rules, Responsibilities & What Belongs Here' },
  },

]
