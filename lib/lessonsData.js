const lessons = [
  // ============================================================
  // LESSON 01 — What is BIM?
  // ============================================================
  {
    id: 1, num: '01',
    title: 'What is BIM? A Complete Introduction',
    topic: 'general', cat: 'beginner', readTime: '8 min', free: true,
    desc: 'Understand the core concept of Building Information Modeling, its history, and why it transformed the construction industry.',
    intro: `Building Information Modeling (BIM) has transformed how the construction industry designs, builds, and manages infrastructure. This lesson gives you a complete foundation — what BIM is, where it came from, and why every modern construction professional needs to understand it.`,
    sections: [
      {
        id: 's1', heading: 'What is Building Information Modeling?', level: 'h2',
        content: `BIM stands for **Building Information Modeling**. At its core, BIM is a digital process for creating and managing information about a built asset throughout its entire lifecycle — from initial design through construction and into operation and maintenance. The key word here is **information**. A BIM model contains rich data about every component — materials, dimensions, quantities, costs, schedules, and more.`,
      },
      {
        id: 's2', heading: 'BIM vs Traditional CAD', level: 'h2',
        content: `To understand BIM, it helps to compare it with what came before: **Computer-Aided Design (CAD)**.`,
        subsections: [
          { heading: 'Traditional CAD', items: ['2D drawings with no embedded data', 'Changes must be updated manually', 'No automatic coordination between disciplines'] },
          { heading: 'BIM', items: ['3D intelligent model with embedded data', 'Changes update automatically across all views', 'Multiple disciplines work in a coordinated model'] },
        ],
        formula: { label: 'BIM Core Concept', text: 'BIM = 3D Geometry + Data + Collaboration + Lifecycle Management' },
      },
      {
        id: 's3', heading: 'The BIM Dimensions', level: 'h2',
        content: `BIM is described in **dimensions**, each adding a layer of information:`,
        code: {
          label: 'BIM Dimensions Reference',
          lines: ['3D → Geometry         (What does it look like?)', '4D → Time / Schedule  (When is it built?)', '5D → Cost             (How much does it cost?)', '6D → Sustainability   (What is its energy impact?)', '7D → Facilities Mgmt  (How is it maintained?)'],
        },
      },
      {
        id: 's4', heading: 'Why BIM Matters in 2026', level: 'h2',
        content: `BIM is no longer optional in many countries. Governments across the UK, Singapore, Australia, and increasingly the Philippines are mandating BIM for public infrastructure projects.`,
        items: ['**Fewer errors** — clash detection catches conflicts before construction', '**Cost savings** — better planning reduces expensive rework', '**Faster delivery** — coordinated teams work more efficiently', '**Better outcomes** — data-rich models support better decisions'],
      },
      {
        id: 's5', heading: 'BIM in the Philippines', level: 'h2',
        content: `The Philippine construction industry is in a period of rapid BIM adoption. Large firms working on government infrastructure and commercial development are already requiring BIM on major projects. Understanding BIM puts you ahead of the curve and opens doors to both local and international opportunities.`,
      },
    ],
    takeaways: [
      'BIM stands for Building Information Modeling — it is a data-rich digital process, not just 3D drawing.',
      'BIM replaces traditional CAD with intelligent, coordinated models that update automatically.',
      'The BIM dimensions (3D–7D) represent layers of information: geometry, time, cost, sustainability, and operations.',
      'BIM reduces project errors, saves costs, and accelerates delivery.',
      'BIM adoption is growing fast in the Philippines — understanding it now gives you a career advantage.',
    ],
    resource: { label: 'BIM Glossary & Terms', type: 'PDF' },
    quiz: { label: 'BIM Fundamentals Quiz', questions: 10, time: '5 min' },
    prev: null,
    next: { id: 2, title: 'BIM vs CAD: Key Differences Explained' },
  },

  // ============================================================
  // LESSON 02 — BIM vs CAD
  // ============================================================
  {
    id: 2, num: '02',
    title: 'BIM vs CAD: Key Differences Explained',
    topic: 'general', cat: 'beginner', readTime: '7 min', free: true,
    desc: 'Learn why BIM is not just 3D CAD and how the shift in workflow changes everything for architects and engineers.',
    intro: `Many professionals transitioning into BIM come from a CAD background. This lesson clarifies exactly what makes BIM different — and why that difference matters for your career and your projects.`,
    sections: [
      {
        id: 's1', heading: 'The Fundamental Difference', level: 'h2',
        content: `CAD produces **drawings**. BIM produces **models**. This sounds simple but has profound implications for how projects are designed, coordinated, and delivered.`,
      },
      {
        id: 's2', heading: 'CAD: What It Is and Where It Falls Short', level: 'h2',
        content: `CAD revolutionized drafting when it replaced hand drawing. But CAD is still fundamentally a **digital drafting tool** — it creates 2D lines and shapes that represent a building, but the software has no understanding of what those lines mean.`,
        items: [
          'Lines have no intelligence — a wall is just two lines',
          'No data attached to objects',
          'Changes in one view must be manually updated in all views',
          'No automatic coordination between disciplines',
          'Cannot generate quantities or schedules automatically',
        ],
      },
      {
        id: 's3', heading: 'BIM: Intelligence Built In', level: 'h2',
        content: `In BIM, every element is an **intelligent object**. A wall knows it is a wall. It has thickness, height, material, fire rating, thermal properties, and cost data. When you change the wall, every related view, schedule, and drawing updates automatically.`,
        items: [
          'Objects carry data — a wall knows its material, cost, and fire rating',
          'Change once, update everywhere automatically',
          'Quantities and schedules generated directly from the model',
          'Multiple disciplines work in one coordinated environment',
          'Clash detection possible because elements understand space',
        ],
        formula: { label: 'Key Difference', text: 'CAD = Dumb Lines     BIM = Smart Objects with Data' },
      },
      {
        id: 's4', heading: 'Side-by-Side Comparison', level: 'h2',
        content: `Here is a direct comparison of CAD and BIM across the key areas that matter in professional practice:`,
        subsections: [
          { heading: 'Geometry', items: ['CAD: 2D lines and shapes', 'BIM: 3D intelligent objects'] },
          { heading: 'Data', items: ['CAD: No embedded data', 'BIM: Full material, cost, schedule data'] },
          { heading: 'Coordination', items: ['CAD: Manual coordination required', 'BIM: Automatic clash detection'] },
          { heading: 'Changes', items: ['CAD: Update every drawing manually', 'BIM: Change once, updates everywhere'] },
          { heading: 'Output', items: ['CAD: Drawings only', 'BIM: Drawings + schedules + quantities + analysis'] },
        ],
      },
      {
        id: 's5', heading: 'When is CAD Still Used?', level: 'h2',
        content: `CAD is not completely obsolete. It is still widely used for **2D detail drawings**, **as-built sketches**, and in **small firms** that have not yet transitioned to BIM. However, for major projects, government work, and international practice, BIM is now the standard requirement.`,
      },
    ],
    takeaways: [
      'CAD produces dumb drawings; BIM produces intelligent models with embedded data.',
      'BIM objects know what they are — a wall carries material, cost, and fire rating data.',
      'Changes in BIM update automatically across all views and schedules.',
      'BIM enables clash detection because elements understand their position in 3D space.',
      'For major projects and international work, BIM is now the industry standard.',
    ],
    quiz: { label: 'BIM vs CAD Assessment', questions: 8, time: '4 min' },
    prev: { id: 1, title: 'What is BIM? A Complete Introduction' },
    next: { id: 3, title: 'Getting Started with Autodesk Revit' },
  },

  // ============================================================
  // LESSON 03 — Getting Started with Revit
  // ============================================================
  {
    id: 3, num: '03',
    title: 'Getting Started with Autodesk Revit',
    topic: 'revit', cat: 'beginner', readTime: '10 min', free: true,
    desc: 'Your first steps inside Revit. Interface overview, project setup, and understanding families and types.',
    intro: `Revit is the most widely used BIM authoring tool in the world. This lesson walks you through the interface, core concepts, and your first steps inside the software — giving you the foundation to start modeling confidently.`,
    sections: [
      {
        id: 's1', heading: 'The Revit Interface', level: 'h2',
        content: `When you first open Revit, the interface can feel overwhelming. But it is organized logically into four key areas that you need to understand before doing anything else.`,
        items: [
          '**Project Browser** — shows all views, sheets, families, and groups in your project',
          '**Properties Panel** — shows and edits the properties of selected elements',
          '**Ribbon** — tools organized by category (Architecture, Structure, MEP, etc.)',
          '**View Window** — the main area where you design and model',
        ],
      },
      {
        id: 's2', heading: 'Families, Types, and Instances', level: 'h2',
        content: `The most important concept in Revit is the **Family-Type-Instance** hierarchy. Everything in Revit is organized this way.`,
        subsections: [
          { heading: 'Family', items: ['A category of building element', 'Example: Door, Wall, Column, Beam', 'Defines the overall behavior and geometry'] },
          { heading: 'Type', items: ['A specific variation within a family', 'Example: Single-Flush Door 900x2100', 'Defines size, material, and appearance'] },
          { heading: 'Instance', items: ['One specific placed element in the model', 'Example: The door on Level 1, Room 101', 'Has its own location and instance properties'] },
        ],
        formula: { label: 'Revit Hierarchy', text: 'Family → Type → Instance  (Category → Variation → Placed Element)' },
      },
      {
        id: 's3', heading: 'Views in Revit', level: 'h2',
        content: `In Revit, **all views come from one model**. You do not draw a floor plan — Revit generates it automatically from the 3D model. This is what makes BIM powerful.`,
        items: [
          '**Floor Plans** — horizontal cuts through the building at each level',
          '**Sections** — vertical cuts through the building',
          '**Elevations** — views of the building exterior from each direction',
          '**3D Views** — perspective or isometric views of the full model',
          '**Schedules** — automatic lists of elements with their properties',
          '**Sheets** — drawing sheets for printing and submission',
        ],
      },
      {
        id: 's4', heading: 'Setting Up a New Project', level: 'h2',
        content: `Every Revit project starts from a **template**. Templates pre-configure units, view settings, families, and standards so you do not start from scratch every time.`,
        code: {
          label: 'New Project Setup Steps',
          lines: [
            '1. File → New → Project',
            '2. Choose a template (Architectural, Structural, or MEP)',
            '3. Set project units (mm or m for Philippine practice)',
            '4. Set up Levels (Ground Floor, Level 1, Level 2, etc.)',
            '5. Set up Grids (column grid lines)',
            '6. Start modeling walls, floors, and roofs',
          ],
        },
      },
      {
        id: 's5', heading: 'The Parametric Advantage', level: 'h2',
        content: `Revit is a **parametric modeler** — meaning elements are driven by parameters (numbers and values) rather than fixed geometry. Change a parameter, and the geometry updates automatically.\n\nFor example: if you change a wall height from 3000mm to 3600mm, every view, schedule, and quantity that references that wall updates instantly. This is why BIM saves time on design changes.`,
      },
    ],
    takeaways: [
      'The Revit interface has four key areas: Project Browser, Properties Panel, Ribbon, and View Window.',
      'Everything in Revit follows the Family → Type → Instance hierarchy.',
      'All views in Revit are generated automatically from one 3D model.',
      'Revit is parametric — change a value once and the entire model updates.',
      'Always start a project from a template to save setup time.',
    ],
    resource: { label: 'Revit Interface Quick Reference', type: 'PDF' },
    quiz: { label: 'Revit Essentials Quiz', questions: 8, time: '4 min' },
    prev: { id: 2, title: 'BIM vs CAD: Key Differences Explained' },
    next: { id: 4, title: 'Understanding LOD: Level of Development' },
  },

  // ============================================================
  // LESSON 04 — Understanding LOD
  // ============================================================
  {
    id: 4, num: '04',
    title: 'Understanding LOD: Level of Development',
    topic: 'standards', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'What LOD 100 to LOD 500 means, when to use each level, and how it affects project delivery.',
    intro: `Level of Development (LOD) is one of the most important standards in BIM practice. It defines how much information and geometry a BIM element contains at each stage of a project. Understanding LOD helps teams communicate clearly, avoid confusion, and deliver the right information at the right time.`,
    sections: [
      {
        id: 's1', heading: 'What is Level of Development (LOD)?', level: 'h2',
        content: `LOD stands for **Level of Development** — a framework that describes the content and reliability of BIM elements at different stages of design and construction. It was developed by the American Institute of Architects (AIA) and is now used globally.\n\nLOD is often confused with **Level of Detail** — but they are different. Level of Detail refers only to visual complexity. Level of Development includes both the geometry AND the attached data.`,
      },
      {
        id: 's2', heading: 'The Six LOD Levels', level: 'h2',
        content: `There are six LOD levels, each building on the previous one:`,
        code: {
          label: 'LOD Levels Reference',
          lines: [
            'LOD 100 → Conceptual    (Mass model, approximate size)',
            'LOD 200 → Schematic     (Approximate geometry, location)',
            'LOD 300 → Detailed      (Precise geometry, quantity, size)',
            'LOD 350 → Construction  (Interfaces with other systems shown)',
            'LOD 400 → Fabrication   (Fabrication-ready, installation details)',
            'LOD 500 → As-Built      (Field-verified, actual conditions)',
          ],
        },
      },
      {
        id: 's3', heading: 'LOD 100 — Conceptual', level: 'h2',
        content: `At LOD 100, elements are represented as **conceptual masses**. No precise dimensions, no material data — just enough to communicate the overall idea.\n\nTypically used in: Early feasibility studies, concept design phase.`,
        items: ['Overall building massing only', 'Approximate area, height, volume', 'No specific geometry or materials', 'Used for early cost estimation'],
      },
      {
        id: 's4', heading: 'LOD 200 — Schematic Design', level: 'h2',
        content: `At LOD 200, elements are represented as **generic placeholders** with approximate quantities, size, shape, location, and orientation.\n\nTypically used in: Schematic design, design development phase.`,
        items: ['Generic geometry with approximate dimensions', 'Location and orientation defined', 'Non-geometric data may be attached', 'Sufficient for early clash detection'],
      },
      {
        id: 's5', heading: 'LOD 300 — Design Development', level: 'h2',
        content: `LOD 300 is where models become **construction-document ready**. Elements are modeled with precise geometry, dimensions, quantities, and location.\n\nTypically used in: Construction documents, permit drawings.`,
        items: ['Precise geometry and dimensions', 'Specific materials and finishes defined', 'Quantities can be extracted accurately', 'Suitable for detailed cost estimation'],
        formula: { label: 'Key Rule', text: 'LOD 300 = Precise Geometry + Accurate Quantities + Specific Materials' },
      },
      {
        id: 's6', heading: 'LOD 350 — Construction Coordination', level: 'h2',
        content: `LOD 350 adds **interfaces between systems** — showing how structural, architectural, and MEP elements connect and interact. Critical for clash detection.\n\nTypically used in: Coordination between disciplines before construction.`,
        items: ['All LOD 300 information included', 'Interfaces with other building systems shown', 'Supports, hangers, connections modeled', 'Critical for MEP coordination'],
      },
      {
        id: 's7', heading: 'LOD 400 — Fabrication & Assembly', level: 'h2',
        content: `At LOD 400, elements contain **fabrication, assembly, and installation details**. Used by specialist contractors who manufacture components from the model.\n\nTypically used in: Specialist subcontractors, prefabrication, shop drawings.`,
        items: ['Complete fabrication geometry', 'Installation and assembly information', 'Used directly for manufacturing', 'Highest level of geometric detail'],
      },
      {
        id: 's8', heading: 'LOD 500 — As-Built', level: 'h2',
        content: `LOD 500 represents the **as-built condition** — the model has been field-verified and reflects the actual constructed state of the building.\n\nTypically used in: Handover to building owners, facilities management.`,
        items: ['Field-verified actual conditions', 'Reflects what was actually built', 'Used for facilities management (FM)', 'Foundation for 7D BIM operations'],
      },
      {
        id: 's9', heading: 'LOD in the BIM Execution Plan', level: 'h2',
        content: `In every BIM project, the **BIM Execution Plan (BEP)** specifies which LOD is required for each element at each project phase. As a BIM professional, you will regularly read and write LOD requirements in BEPs.`,
        formula: { label: 'BIM Project Rule', text: 'Right LOD + Right Element + Right Phase = Successful BIM Delivery' },
      },
    ],
    takeaways: [
      'LOD stands for Level of Development — it defines both geometry AND information content of BIM elements.',
      'There are 6 LOD levels: 100 (Conceptual) through 500 (As-Built).',
      'LOD 300 is the most common requirement for construction documents.',
      'LOD 350 is critical for multi-discipline coordination and clash detection.',
      'LOD 500 represents the as-built model used for facilities management.',
      'LOD requirements are specified in the BIM Execution Plan for every project.',
    ],
    resource: { label: 'LOD Reference Sheet', type: 'PDF' },
    quiz: { label: 'LOD Standards Quiz', questions: 10, time: '5 min' },
    prev: { id: 3, title: 'Getting Started with Autodesk Revit' },
    next: { id: 5, title: 'BIM Execution Plan (BEP) Fundamentals' },
  },

  // ============================================================
  // LESSON 05 — BIM Execution Plan
  // ============================================================
  {
    id: 5, num: '05',
    title: 'BIM Execution Plan (BEP) Fundamentals',
    topic: 'standards', cat: 'beginner', readTime: '10 min', free: false,
    desc: 'How to read and write a BIM Execution Plan. The document that governs every BIM project.',
    intro: `The BIM Execution Plan (BEP) is the most important document in any BIM project. It defines how BIM will be implemented, who is responsible for what, what software will be used, and what deliverables are expected. Every serious BIM professional must know how to read and write one.`,
    sections: [
      {
        id: 's1', heading: 'What is a BIM Execution Plan?', level: 'h2',
        content: `A **BIM Execution Plan (BEP)** is a formal document that outlines how BIM will be applied on a specific project. It is agreed upon by all project stakeholders — the client, architect, engineers, and contractors — before any modeling begins.\n\nThink of it as the **rulebook for BIM on your project**. Without a BEP, teams work inconsistently, use different software settings, and produce models that cannot be combined or coordinated.`,
      },
      {
        id: 's2', heading: 'Why the BEP Matters', level: 'h2',
        content: `Many BIM projects fail not because of bad modeling — but because of poor planning and communication. The BEP solves this by establishing clear rules upfront.`,
        items: [
          'Defines **who** does what and when',
          'Sets **software** and file format requirements',
          'Specifies **LOD** requirements per discipline per phase',
          'Establishes **naming conventions** for files and elements',
          'Defines the **Common Data Environment (CDE)** for file sharing',
          'Sets **clash detection** responsibilities and frequency',
        ],
      },
      {
        id: 's3', heading: 'Key Sections of a BEP', level: 'h2',
        content: `A typical BEP contains the following sections:`,
        code: {
          label: 'BEP Structure',
          lines: [
            '1. Project Information     — name, location, client, team',
            '2. BIM Goals & Uses        — what BIM will be used for',
            '3. BIM Scope               — which disciplines, which phases',
            '4. Software Requirements   — Revit version, IFC format, etc.',
            '5. Model Element Author    — who models what (MEA table)',
            '6. LOD Schedule            — LOD per element per phase',
            '7. Naming Conventions      — file and element naming rules',
            '8. Common Data Environment — folder structure, permissions',
            '9. Coordination Process    — clash detection schedule',
            '10. Deliverables           — what is submitted and when',
          ],
        },
      },
      {
        id: 's4', heading: 'The Model Element Author (MEA) Table', level: 'h2',
        content: `The **MEA table** is the most used part of the BEP. It assigns every model element to a responsible discipline and specifies the required LOD at each project phase.`,
        subsections: [
          { heading: 'Example MEA Table Entry', items: ['Element: Structural Columns', 'Author: Structural Engineer', 'LOD at SD: LOD 200', 'LOD at DD: LOD 300', 'LOD at CD: LOD 350', 'LOD at Construction: LOD 400'] },
        ],
        formula: { label: 'MEA Rule', text: 'Element + Responsible Party + LOD per Phase = Clear Accountability' },
      },
      {
        id: 's5', heading: 'Pre-BEP vs Post-Contract BEP', level: 'h2',
        content: `There are two versions of a BEP used in professional practice:\n\n**Pre-Contract BEP** — prepared by the client or their BIM manager before the project is awarded. It sets out the employer's BIM requirements.\n\n**Post-Contract BEP** — prepared by the appointed team after winning the project. It responds to the pre-contract BEP and details exactly how BIM will be delivered.`,
      },
      {
        id: 's6', heading: 'Common Data Environment (CDE)', level: 'h2',
        content: `The **CDE** is the agreed digital location where all project information is stored and shared. It ensures everyone is working from the correct, approved version of files.\n\nCommon CDE platforms used in the Philippines and globally:`,
        items: ['**Autodesk BIM 360 / ACC** — most widely used', '**Aconex** — common on large infrastructure projects', '**Procore** — popular with contractors', '**SharePoint** — used by some firms for document management'],
      },
    ],
    takeaways: [
      'The BEP is the rulebook for BIM on a project — every team member must follow it.',
      'A BEP defines software, LOD requirements, naming conventions, and responsibilities.',
      'The MEA table assigns every model element to a responsible discipline with LOD requirements.',
      'Pre-contract BEP sets client requirements; post-contract BEP responds with delivery details.',
      'The Common Data Environment (CDE) is the agreed platform for sharing all project files.',
      'Reading and writing BEPs is a core skill for every BIM professional.',
    ],
    resource: { label: 'BEP Template', type: 'DOCX' },
    quiz: { label: 'BEP Fundamentals Quiz', questions: 10, time: '5 min' },
    prev: { id: 4, title: 'Understanding LOD: Level of Development' },
    next: { id: 6, title: 'Revit Families: System, Loadable & In-Place' },
  },

// ============================================================
  // LESSON 06 — Revit Families
  // ============================================================
  {
    id: 6, num: '06',
    title: 'Revit Families: System, Loadable & In-Place',
    topic: 'revit', cat: 'intermediate', readTime: '12 min', free: false,
    desc: 'Deep dive into the three family types in Revit, when to use each, and best practices for family management.',
    intro: `Families are the fundamental building blocks of every Revit model. Every element you place — from a wall to a light fixture to a structural column — is a family. Understanding the three types of families and how to manage them is one of the most important skills for any Revit user.`,
    sections: [
      {
        id: 's1', heading: 'What is a Revit Family?', level: 'h2',
        content: `In Revit, a **family** is a group of elements with a common set of properties and graphical representation. Every single object in a Revit model belongs to a family — walls, doors, windows, furniture, beams, pipes, light fixtures, and more.\n\nFamilies are organized into the same hierarchy you learned earlier: **Family → Type → Instance**. The family defines the overall behavior. The type defines a specific size or variation. The instance is the actual placed element in your model.`,
        formula: { label: 'Family Hierarchy', text: 'Family (Door) → Type (900x2100) → Instance (Room 101 Entry Door)' },
      },
      {
        id: 's2', heading: 'The Three Family Types', level: 'h2',
        content: `Revit has three distinct family types, each with a different purpose, behavior, and editing method. Knowing which type to use — and when — is essential for efficient BIM modeling.`,
        code: {
          label: 'Revit Family Types Overview',
          lines: [
            'Type 1 → System Families     (built-in, cannot be loaded)',
            'Type 2 → Loadable Families   (external .rfa files, most flexible)',
            'Type 3 → In-Place Families   (unique elements, created in project)',
          ],
        },
      },
      {
        id: 's3', heading: 'System Families', level: 'h2',
        content: `**System families** are built directly into Revit and cannot be loaded from external files. They define the basic building elements that form the structure of your model. You cannot delete system family categories — but you can create new types within them.`,
        items: [
          '**Walls** — basic, curtain wall, stacked wall',
          '**Floors** — structural, architectural, foundation slab',
          '**Roofs** — by footprint, by extrusion, by face',
          '**Ceilings** — compound, basic',
          '**Stairs and Railings** — all stair and railing types',
          '**MEP Systems** — ducts, pipes, conduit, cable trays',
        ],
        subsections: [
          {
            heading: 'Key Characteristics of System Families',
            items: [
              'Cannot be saved as external .rfa files',
              'Cannot be transferred between projects via file loading',
              'Types can be created, duplicated, and modified',
              'Transferred between projects using Transfer Project Standards',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Loadable Families', level: 'h2',
        content: `**Loadable families** are the most flexible and widely used family type. They are created externally in the **Revit Family Editor** and saved as **.rfa files** that can be loaded into any project. This is where most customization happens in professional BIM practice.`,
        items: [
          'Doors, windows, and curtain wall panels',
          'Furniture and equipment',
          'Structural columns, beams, and foundations',
          'MEP fixtures — lights, outlets, diffusers, valves',
          'Annotations — title blocks, tags, symbols',
          'Detail components and drafting elements',
        ],
        subsections: [
          {
            heading: 'Working with Loadable Families',
            items: [
              'Load via Insert → Load Family or from the project browser',
              'Edit in Family Editor — opens the .rfa file for modification',
              'Save and reload to update the family in the project',
              'Share .rfa files between projects and team members',
            ],
          },
        ],
        formula: { label: 'Best Practice', text: 'Always use Loadable Families for content that will be reused across multiple projects' },
      },
      {
        id: 's5', heading: 'In-Place Families', level: 'h2',
        content: `**In-Place families** are unique elements created directly inside a project for geometry that is specific to that project and unlikely to be reused. They are modeled using the same tools as the Family Editor but live entirely within the project file.`,
        items: [
          'Custom architectural features — unique staircases, canopies',
          'Site-specific elements — custom terrain features',
          'One-off structural elements with complex geometry',
          'Temporary elements for design studies',
        ],
        subsections: [
          {
            heading: 'When NOT to Use In-Place Families',
            items: [
              'When the element will be repeated multiple times — use Loadable instead',
              'When the element needs to be shared with other projects',
              'When file size is a concern — In-Place families increase file size',
              'When the team needs to update the element independently',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Choosing the Right Family Type', level: 'h2',
        content: `Knowing which family type to use is a judgment call that comes with experience. Here is a simple decision framework used by senior BIM specialists:`,
        code: {
          label: 'Family Type Decision Framework',
          lines: [
            'Is it a wall, floor, roof, ceiling, or MEP system?',
            '  → Use System Family',
            '',
            'Is it a door, window, fixture, furniture, or equipment?',
            '  → Use Loadable Family (.rfa)',
            '',
            'Is it unique to this project and will never be reused?',
            '  → Use In-Place Family (use sparingly)',
          ],
        },
      },
      {
        id: 's7', heading: 'Family Editor Basics', level: 'h2',
        content: `The **Family Editor** is a separate environment in Revit used to create and modify Loadable Families. It has its own interface, templates, and tools — separate from the project environment.`,
        items: [
          'Open via: File → New → Family → select a template',
          '**Reference Planes** — define the geometry framework',
          '**Parameters** — control dimensions, materials, visibility',
          '**Constraints** — lock geometry to reference planes',
          '**Nested Families** — families loaded inside other families',
          'Test in project by loading and placing',
        ],
      },
      {
        id: 's8', heading: 'Family Management Best Practices', level: 'h2',
        content: `In professional BIM practice, poor family management is one of the most common causes of large file sizes, slow performance, and inconsistent models. Follow these best practices on every project:`,
        items: [
          '**Purge unused families** regularly — Manage → Purge Unused',
          '**Use a company family library** — standardized .rfa files for all projects',
          '**Never over-model** — keep geometry appropriate for the LOD required',
          '**Avoid In-Place families** unless absolutely necessary',
          '**Name families clearly** — follow BEP naming conventions',
          '**Test families** before distributing to the team',
        ],
        formula: { label: 'Performance Rule', text: 'Fewer unnecessary families = Smaller file size = Better model performance' },
      },
    ],
    takeaways: [
      'Revit has three family types: System (built-in), Loadable (.rfa files), and In-Place (unique to project).',
      'System families include walls, floors, roofs, and MEP systems — they cannot be loaded from external files.',
      'Loadable families are the most flexible — created in the Family Editor and shared as .rfa files.',
      'In-Place families should be used sparingly — only for unique, non-repeating elements.',
      'The Family Editor is a separate environment for creating and modifying Loadable Families.',
      'Good family management — purging unused families and using a company library — is essential for model performance.',
    ],
    resource: { label: 'Revit Family Types Reference', type: 'PDF' },
    quiz: { label: 'Revit Families Quiz', questions: 10, time: '5 min' },
    prev: { id: 5, title: 'BIM Execution Plan (BEP) Fundamentals' },
    next: { id: 7, title: 'Clash Detection with Navisworks' },
  },

// ============================================================
  // LESSON 07 — Clash Detection with Navisworks
  // ============================================================
  {
    id: 7, num: '07',
    title: 'Clash Detection with Navisworks',
    topic: 'navisworks', cat: 'intermediate', readTime: '11 min', free: false,
    desc: 'Step-by-step guide to running clash detection, interpreting results, and coordinating with the project team.',
    intro: `Clash detection is one of the most powerful and practical applications of BIM. Before Navisworks and BIM, conflicts between building systems were often discovered on-site — causing expensive delays, rework, and disputes. Navisworks allows the entire project team to find and resolve these conflicts digitally, before a single piece of steel is erected or a pipe is installed.`,
    sections: [
      {
        id: 's1', heading: 'What is Clash Detection?', level: 'h2',
        content: `**Clash detection** is the automated process of checking a combined BIM model for physical conflicts between elements from different disciplines. When a structural beam passes through the same space as an HVAC duct, that is a clash. When a pipe runs through a concrete wall without a sleeve, that is a clash.\n\nNavisworks combines models from all disciplines — architectural, structural, MEP — into one federated model and automatically identifies every conflict. What would take weeks to find manually in 2D drawings takes hours in Navisworks.`,
        formula: { label: 'Core Concept', text: 'Federated Model + Clash Rules = Conflicts Found Before Construction' },
      },
      {
        id: 's2', heading: 'Types of Clashes', level: 'h2',
        content: `Navisworks identifies three types of clashes, each with different levels of severity:`,
        subsections: [
          {
            heading: 'Hard Clash',
            items: [
              'Two elements physically occupy the same space',
              'Most critical — must be resolved before construction',
              'Example: A duct running through a structural beam',
              'Example: A pipe intersecting a concrete column',
            ],
          },
          {
            heading: 'Soft Clash (Clearance Clash)',
            items: [
              'Elements do not touch but violate minimum clearance requirements',
              'Important for maintenance access and code compliance',
              'Example: An electrical panel with insufficient access space',
              'Example: Pipes too close together for insulation',
            ],
          },
          {
            heading: 'Workflow (4D) Clash',
            items: [
              'Elements conflict in time — not just space',
              'Used in 4D BIM to check construction sequencing',
              'Example: A crane cannot operate when another trade is in the same zone',
              'Example: Formwork conflicts with steel erection schedule',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'The Navisworks Interface', level: 'h2',
        content: `Before running clash detection, you need to understand the key areas of the Navisworks interface:`,
        items: [
          '**Scene View** — the main 3D viewport showing the federated model',
          '**Selection Tree** — shows all loaded models and their elements',
          '**Clash Detective** — the panel where clash tests are configured and run',
          '**Clash Results** — list of all detected clashes with status tracking',
          '**Properties Panel** — shows element data for selected objects',
          '**Viewpoints** — saved camera positions for reviewing clashes',
        ],
      },
      {
        id: 's4', heading: 'Setting Up a Clash Test', level: 'h2',
        content: `Running a clash test in Navisworks follows a clear, repeatable process. Here is the step-by-step workflow used on professional projects:`,
        code: {
          label: 'Clash Detection Workflow',
          lines: [
            'Step 1 → Append all discipline models (.rvt, .ifc, .nwc)',
            'Step 2 → Open Clash Detective panel',
            'Step 3 → Click "Add Test" and name it clearly',
            '         Example: "Structural vs HVAC - Level 3"',
            'Step 4 → Set Selection A (e.g. Structural model)',
            'Step 5 → Set Selection B (e.g. MEP - HVAC model)',
            'Step 6 → Choose clash type: Hard, Clearance, or Duplicates',
            'Step 7 → Set tolerance (e.g. 0mm for hard, 50mm for clearance)',
            'Step 8 → Click "Run Test"',
            'Step 9 → Review results and assign to responsible parties',
          ],
        },
      },
      {
        id: 's5', heading: 'Interpreting Clash Results', level: 'h2',
        content: `After running a clash test, Navisworks generates a list of all detected conflicts. Each clash has a status that is managed throughout the coordination process:`,
        subsections: [
          {
            heading: 'Clash Statuses',
            items: [
              '**New** — just detected, not yet reviewed',
              '**Active** — reviewed and confirmed as a real clash requiring resolution',
              '**Reviewed** — acknowledged but not yet resolved',
              '**Approved** — intentional clash accepted by the team',
              '**Resolved** — the clash has been fixed in the model',
            ],
          },
        ],
        formula: { label: 'Coordination Rule', text: 'New → Active → Reviewed → Resolved = Complete Clash Workflow' },
      },
      {
        id: 's6', heading: 'Clash Reports', level: 'h2',
        content: `Navisworks can generate detailed **clash reports** that are shared with the project team. These reports document every clash, its location, the elements involved, and its current status.\n\nIn professional practice, clash reports are issued at regular coordination meetings — typically weekly during the design development and pre-construction phases.`,
        items: [
          'Export reports as HTML, XML, or PDF',
          'Include screenshots of each clash location',
          'Assign clashes to responsible disciplines',
          'Track resolution progress over time',
          'Use as basis for BIM coordination meetings',
        ],
      },
      {
        id: 's7', heading: 'BIM Coordination Meetings', level: 'h2',
        content: `Clash detection results are the agenda for **BIM coordination meetings** — regular sessions where all disciplines review clashes together and agree on resolutions.\n\nAs a BIM professional, you may be asked to run these meetings, present the clash report, and coordinate the resolution process between the structural engineer, MEP consultants, and architect.`,
        items: [
          'Schedule weekly or bi-weekly during design coordination',
          'All discipline BIM leads attend',
          'Review new and active clashes together',
          'Assign resolution responsibility to each discipline',
          'Set deadline for model updates before next meeting',
          'Re-run clash tests after model updates to verify resolution',
        ],
      },
      {
        id: 's8', heading: 'Common Clash Scenarios in Philippine Projects', level: 'h2',
        content: `In Philippine construction projects, the most common clash scenarios encountered are:`,
        items: [
          '**HVAC ducts vs structural beams** — the most frequent hard clash type',
          '**Plumbing pipes vs electrical conduits** — common in floor slab coordination',
          '**Fire protection sprinklers vs ceiling systems** — critical for fit-out projects',
          '**Elevator shafts vs structural elements** — especially in high-rise buildings',
          '**MEP penetrations through fire-rated walls** — compliance and coordination issue',
          '**Façade systems vs structural slab edges** — common in curtain wall projects',
        ],
      },
      {
        id: 's9', heading: 'Best Practices for Clash Detection', level: 'h2',
        content: `Senior BIM specialists follow these best practices to run effective clash detection on every project:`,
        items: [
          '**Run discipline-specific tests** — Structural vs MEP, Arch vs Structural, etc.',
          '**Use meaningful test names** — include discipline, level, and date',
          '**Set appropriate tolerance** — 0mm for hard clashes, 50-100mm for clearance',
          '**Filter out false positives** — use selection sets to exclude irrelevant elements',
          '**Update models before each coordination meeting**',
          '**Document all resolutions** — maintain a clash log for the project record',
        ],
        formula: { label: 'Professional Standard', text: 'Zero Unresolved Hard Clashes Before Construction Start = BIM Success' },
      },
    ],
    takeaways: [
      'Clash detection finds physical conflicts between building systems before construction begins.',
      'Navisworks identifies three clash types: Hard (physical intersection), Soft (clearance violation), and Workflow (4D time conflict).',
      'The clash detection workflow: append models → set up test → run → review results → assign → resolve.',
      'Each clash has a status: New → Active → Reviewed → Approved → Resolved.',
      'Clash reports are used as the agenda for BIM coordination meetings.',
      'The professional standard is zero unresolved hard clashes before construction starts.',
    ],
    resource: { label: 'Clash Detection Checklist', type: 'PDF' },
    quiz: { label: 'Clash Detection Quiz', questions: 10, time: '5 min' },
    prev: { id: 6, title: 'Revit Families: System, Loadable & In-Place' },
    next: { id: 8, title: 'MEP Coordination in BIM Projects' },
  },

// ============================================================
  // LESSON 08 — MEP Coordination in BIM Projects
  // ============================================================
  {
    id: 8, num: '08',
    title: 'MEP Coordination in BIM Projects',
    topic: 'coordination', cat: 'intermediate', readTime: '11 min', free: false,
    desc: 'How mechanical, electrical, and plumbing models are coordinated using BIM to avoid costly on-site conflicts.',
    intro: `MEP coordination is one of the most complex and valuable applications of BIM in construction. Mechanical, Electrical, and Plumbing systems compete for the same ceiling and wall spaces — and without proper coordination, the result is expensive on-site conflicts, delays, and rework. BIM makes MEP coordination systematic, visual, and trackable from early design through construction.`,
    sections: [
      {
        id: 's1', heading: 'What is MEP Coordination?', level: 'h2',
        content: `**MEP coordination** is the process of integrating and aligning the mechanical, electrical, and plumbing building systems with each other and with the architectural and structural elements of a building. The goal is to ensure all systems fit within the available space, meet code requirements, and can be installed and maintained efficiently.\n\nIn BIM, MEP coordination is done by combining all discipline models into a federated model and systematically resolving conflicts before construction begins.`,
        formula: { label: 'MEP Coordination Goal', text: 'Architectural + Structural + MEP Models = One Coordinated Federated Model' },
      },
      {
        id: 's2', heading: 'The MEP Disciplines', level: 'h2',
        content: `MEP stands for three major building engineering disciplines. Each has its own BIM model, its own specialist, and its own space requirements:`,
        subsections: [
          {
            heading: 'M — Mechanical',
            items: [
              'HVAC systems — air handling units, ducts, diffusers',
              'Chillers, cooling towers, and fan coil units',
              'Ventilation and exhaust systems',
              'Largest space consumer — ducts can be 600mm to 2400mm wide',
            ],
          },
          {
            heading: 'E — Electrical',
            items: [
              'Power distribution — panels, switchgear, transformers',
              'Lighting systems and emergency lighting',
              'Data and communications cabling and trays',
              'Fire alarm systems and security systems',
            ],
          },
          {
            heading: 'P — Plumbing',
            items: [
              'Domestic water supply — hot and cold water pipes',
              'Sanitary drainage and vent pipes',
              'Fire protection — sprinkler systems and standpipes',
              'Medical gas systems in hospitals and healthcare facilities',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Why MEP Coordination Fails Without BIM', level: 'h2',
        content: `Before BIM, MEP coordination was done by overlaying 2D drawings from each discipline on a light table or in CAD. This process was slow, error-prone, and often incomplete. The results were frequent on-site conflicts that caused:`,
        items: [
          '**Costly rework** — installed systems had to be removed and relocated',
          '**Project delays** — trades waiting for coordination to be resolved',
          '**Disputes** — arguments between contractors about who causes the conflict',
          '**Reduced ceiling heights** — systems crammed into insufficient space',
          '**Maintenance problems** — poorly coordinated systems are hard to access',
        ],
        formula: { label: 'Industry Statistic', text: '30-40% of construction rework is caused by poor MEP coordination' },
      },
      {
        id: 's4', heading: 'The MEP BIM Coordination Process', level: 'h2',
        content: `A structured MEP BIM coordination process follows these stages on every professional project:`,
        code: {
          label: 'MEP Coordination Workflow',
          lines: [
            'Stage 1 → Each discipline models their systems in Revit MEP',
            'Stage 2 → Models are exported as NWC files for Navisworks',
            'Stage 3 → All models federated in Navisworks',
            'Stage 4 → Clash detection run between all discipline pairs',
            'Stage 5 → Clash report issued to coordination team',
            'Stage 6 → Coordination meeting — clashes reviewed and assigned',
            'Stage 7 → Disciplines update models to resolve clashes',
            'Stage 8 → Re-run clash detection to verify resolution',
            'Stage 9 → Repeat until zero hard clashes remain',
            'Stage 10 → Coordinated model issued for construction',
          ],
        },
      },
      {
        id: 's5', heading: 'MEP Coordination Zones', level: 'h2',
        content: `The most critical coordination zone in any building is the **ceiling plenum** — the space between the structural soffit above and the finished ceiling below. All MEP systems compete for this limited vertical space.\n\nA typical ceiling plenum must accommodate:`,
        items: [
          '**Primary HVAC ducts** — main supply and return air ducts',
          '**Secondary ductwork** — branch ducts to diffusers',
          '**Sprinkler mains and branches** — fire protection piping',
          '**Electrical cable trays** — power and data distribution',
          '**Conduits** — electrical and data individual runs',
          '**Plumbing pipes** — drainage and water supply',
          '**Structural beams** — which all MEP must route around',
        ],
        formula: { label: 'Space Planning Rule', text: 'Available Plenum Height − Structure − MEP Systems = Finished Ceiling Height' },
      },
      {
        id: 's6', heading: 'MEP Routing Principles', level: 'h2',
        content: `When coordinating MEP systems, senior specialists follow a hierarchy for routing decisions — determining which systems take priority in the available space:`,
        subsections: [
          {
            heading: 'MEP Routing Priority (Top to Bottom)',
            items: [
              '1st — Gravity drainage pipes (cannot be re-routed easily — slope required)',
              '2nd — Large HVAC ducts (expensive to reroute, largest footprint)',
              '3rd — Sprinkler mains (fire code requirements limit flexibility)',
              '4th — Electrical cable trays (flexible routing)',
              '5th — Small bore pipes and conduits (most flexible)',
            ],
          },
        ],
      },
      {
        id: 's7', heading: 'Coordination Drawings', level: 'h2',
        content: `Once the federated model is fully coordinated, **coordination drawings** are produced. These are 2D drawings extracted from the coordinated 3D model that show the agreed routing of all MEP systems in each area of the building.\n\nCoordination drawings are used by:`,
        items: [
          'MEP subcontractors for installation planning',
          'Main contractor for sequencing trades on site',
          'Architect for ceiling design and reflected ceiling plans',
          'Client for handover and facilities management records',
        ],
      },
      {
        id: 's8', heading: 'Revit MEP Tools for Coordination', level: 'h2',
        content: `Revit has built-in tools specifically designed for MEP coordination. Senior BIM specialists use these tools to model and coordinate MEP systems efficiently:`,
        items: [
          '**Systems Browser** — view and manage all MEP systems in the model',
          '**Interference Check** — built-in clash detection within Revit',
          '**Copy/Monitor** — link and track elements from other discipline models',
          '**Coordination Review** — manage changes from linked models',
          '**MEP Fabrication Parts** — LOD 400 fabrication-level MEP modeling',
          '**Routing Preferences** — set rules for automatic pipe and duct routing',
        ],
      },
      {
        id: 's9', heading: 'MEP Coordination in Philippine Projects', level: 'h2',
        content: `In the Philippine construction industry, MEP coordination using BIM is becoming standard on major projects — particularly high-rise residential towers, commercial developments, hospitals, and government infrastructure.\n\nKey considerations for MEP BIM coordination in Philippine projects:`,
        items: [
          '**NBC compliance** — National Building Code requirements for MEP clearances',
          '**Fire Code** — Bureau of Fire Protection requirements for sprinkler systems',
          '**ASHRAE standards** — commonly referenced for HVAC design',
          '**Local subcontractor capability** — coordinate with what local trades can install',
          '**Tropical climate** — larger HVAC systems than temperate countries require more coordination space',
          '**Seismic considerations** — pipe and duct bracing requirements affect routing',
        ],
      },
    ],
    takeaways: [
      'MEP coordination integrates mechanical, electrical, and plumbing systems with architectural and structural models.',
      'The ceiling plenum is the most critical coordination zone — all MEP systems compete for this limited space.',
      'Gravity drainage pipes have the highest routing priority because they require a slope.',
      'The MEP BIM coordination process repeats clash detection cycles until zero hard clashes remain.',
      'Coordination drawings are produced from the coordinated model for use by installation contractors.',
      '30-40% of construction rework is caused by poor MEP coordination — BIM directly reduces this.',
    ],
    resource: { label: 'MEP Coordination Checklist', type: 'PDF' },
    quiz: { label: 'MEP Coordination Quiz', questions: 10, time: '5 min' },
    prev: { id: 7, title: 'Clash Detection with Navisworks' },
    next: { id: 9, title: 'IFC: Open BIM Standard Explained' },
  },

// ============================================================
  // LESSON 09 — IFC: Open BIM Standard Explained
  // ============================================================
  {
    id: 9, num: '09',
    title: 'IFC: Open BIM Standard Explained',
    topic: 'ifc', cat: 'intermediate', readTime: '9 min', free: false,
    desc: 'What IFC is, why it matters for interoperability, and how to export and import IFC files correctly.',
    intro: `IFC — Industry Foundation Classes — is the universal language of BIM. When an architect uses Revit, an engineer uses ArchiCAD, and a contractor uses Tekla, IFC is the format that allows them to share models without losing data. Understanding IFC is essential for any BIM professional working on multi-discipline, multi-software projects.`,
    sections: [
      {
        id: 's1', heading: 'What is IFC?', level: 'h2',
        content: `**IFC (Industry Foundation Classes)** is an open, neutral, non-proprietary data format for Building Information Models. It was developed by **buildingSMART International** and is now an ISO standard (ISO 16739).\n\nUnlike proprietary formats like Revit's .rvt or ArchiCAD's .pln, IFC is not owned by any software company. Any BIM software can read and write IFC files — making it the universal exchange format for Open BIM workflows.`,
        formula: { label: 'IFC Core Concept', text: 'IFC = Open Standard + Neutral Format + Universal BIM Exchange' },
      },
      {
        id: 's2', heading: 'Why IFC Matters', level: 'h2',
        content: `In a typical construction project, multiple software tools are used by different disciplines and contractors. Without a common exchange format, sharing models between these tools results in data loss, geometry errors, and compatibility problems.\n\nIFC solves this by providing a standardized way to describe building elements and their properties that any compliant software can read correctly.`,
        items: [
          '**Interoperability** — share models between any IFC-compliant software',
          '**Data preservation** — element properties survive the export/import process',
          '**Vendor independence** — clients can require IFC without specifying software',
          '**Long-term archiving** — IFC is an ISO standard suitable for permanent records',
          '**Government mandates** — many countries require IFC for public projects',
          '**Open BIM workflows** — enables truly collaborative multi-software projects',
        ],
      },
      {
        id: 's3', heading: 'IFC Versions', level: 'h2',
        content: `IFC has evolved through several versions, each adding more capability and element types. Knowing which version to use is important for compatibility:`,
        code: {
          label: 'IFC Version History',
          lines: [
            'IFC 1.0    → 1997  (first release, limited scope)',
            'IFC 2x3    → 2006  (most widely supported, still common)',
            'IFC 4      → 2013  (current standard, improved geometry)',
            'IFC 4.1    → 2018  (added infrastructure elements)',
            'IFC 4.3    → 2022  (ISO 16739-1:2024, bridges, roads, rail)',
            '',
            'Recommended: IFC 2x3 for compatibility, IFC 4 for new projects',
          ],
        },
      },
      {
        id: 's4', heading: 'IFC Schema — How It Works', level: 'h2',
        content: `IFC uses a structured schema to describe every element in a building model. Each element is defined by its **class**, **properties**, and **relationships**.\n\nFor example, a wall in IFC is an **IfcWall** object. It has properties like fire rating, material, and thickness attached via **IfcPropertySet**. It is related to the building storey it belongs to via **IfcRelContainedInSpatialStructure**.`,
        subsections: [
          {
            heading: 'Key IFC Classes',
            items: [
              'IfcWall — walls and wall types',
              'IfcBeam — structural beams',
              'IfcColumn — structural columns',
              'IfcDoor — doors and door types',
              'IfcWindow — windows and window types',
              'IfcSpace — rooms and spaces',
              'IfcBuildingStorey — floor levels',
              'IfcDuctSegment — HVAC ducts',
              'IfcPipeSegment — plumbing pipes',
            ],
          },
        ],
      },
      {
        id: 's5', heading: 'Exporting IFC from Revit', level: 'h2',
        content: `Exporting a correct IFC file from Revit requires careful setup. A poorly configured export produces an IFC file with missing data, incorrect element classifications, and geometry errors.`,
        code: {
          label: 'IFC Export Steps in Revit',
          lines: [
            'Step 1 → File → Export → IFC',
            'Step 2 → Select IFC version (IFC 2x3 or IFC 4)',
            'Step 3 → Configure IFC Export Settings:',
            '         - File Type: Coordination View 2.0',
            '         - Space Boundaries: None (unless required)',
            '         - Export: Current View or Entire Project',
            'Step 4 → Map Revit Categories to IFC Classes',
            '         - Walls → IfcWall',
            '         - Structural Framing → IfcBeam / IfcColumn',
            'Step 5 → Set Property Sets to export',
            'Step 6 → Click Export and save the .ifc file',
          ],
        },
      },
      {
        id: 's6', heading: 'Common IFC Export Issues', level: 'h2',
        content: `Even experienced BIM professionals encounter IFC export problems. Here are the most common issues and how to resolve them:`,
        subsections: [
          {
            heading: 'Geometry Problems',
            items: [
              'Missing elements — check IFC class mapping in export settings',
              'Incorrect geometry — simplify complex in-place families before export',
              'Duplicated elements — check for duplicate elements in the Revit model',
            ],
          },
          {
            heading: 'Data Problems',
            items: [
              'Missing properties — ensure property sets are enabled in export settings',
              'Wrong classifications — review and correct IFC class mapping',
              'Missing levels — ensure all levels are properly defined in Revit',
            ],
          },
        ],
        formula: { label: 'Quality Rule', text: 'Always validate your IFC export in a free viewer before sending to the team' },
      },
      {
        id: 's7', heading: 'IFC Viewers and Validation Tools', level: 'h2',
        content: `Before sharing an IFC file with the project team, always validate it using a free IFC viewer. This confirms the geometry, data, and classifications are correct.`,
        items: [
          '**Solibri** — professional IFC validation and model checking tool',
          '**BIMcollab ZOOM** — free IFC viewer with clash detection',
          '**xBIM WeXplorer** — free web-based IFC viewer',
          '**IFC.js** — open source JavaScript IFC viewer',
          '**Autodesk Viewer** — free cloud-based viewer supporting IFC',
          '**Tekla BIMsight** — free coordination viewer with IFC support',
        ],
      },
      {
        id: 's8', heading: 'Open BIM vs Closed BIM', level: 'h2',
        content: `Understanding the difference between Open BIM and Closed BIM workflows is important for choosing the right approach on each project:`,
        subsections: [
          {
            heading: 'Closed BIM',
            items: [
              'All disciplines use the same software (e.g. all on Revit)',
              'Native file formats shared directly between team members',
              'Simpler workflow but requires software standardization',
              'Common in large firms with full Autodesk subscriptions',
            ],
          },
          {
            heading: 'Open BIM',
            items: [
              'Each discipline uses their preferred software',
              'IFC used as the common exchange format',
              'More flexible — no software vendor lock-in',
              'Required by some clients and government mandates',
              'Slightly more complex — requires careful IFC export configuration',
            ],
          },
        ],
      },
      {
        id: 's9', heading: 'IFC in Philippine and International Practice', level: 'h2',
        content: `IFC is increasingly important for Filipino BIM professionals working on international projects or with foreign consultants. Key contexts where IFC knowledge is essential:`,
        items: [
          '**Singapore BIM mandates** — IFC required for all government projects since 2015',
          '**UK BIM Level 2** — IFC specified as the exchange format for public projects',
          '**Middle East projects** — IFC commonly required by international clients',
          '**Multi-consultant projects** — when architect and engineers use different software',
          '**Facilities management handover** — IFC for long-term building data preservation',
          '**Philippine government infrastructure** — IFC adoption growing for major projects',
        ],
      },
    ],
    takeaways: [
      'IFC is the open, neutral, ISO-standard format for sharing BIM models between any software.',
      'IFC 2x3 is the most widely supported version; IFC 4 is the current standard for new projects.',
      'Every building element in IFC has a class (e.g. IfcWall), properties, and spatial relationships.',
      'Exporting correct IFC from Revit requires careful configuration of class mapping and property sets.',
      'Always validate IFC exports using a free viewer before sharing with the project team.',
      'Open BIM workflows using IFC give clients software independence and long-term data preservation.',
    ],
    resource: { label: 'IFC Export Settings Guide', type: 'PDF' },
    quiz: { label: 'IFC Standards Quiz', questions: 10, time: '5 min' },
    prev: { id: 8, title: 'MEP Coordination in BIM Projects' },
    next: { id: 10, title: 'BIM 360 for Project Collaboration' },
  },

// ============================================================
  // LESSON 10 — BIM 360 for Project Collaboration
  // ============================================================
  {
    id: 10, num: '10',
    title: 'BIM 360 for Project Collaboration',
    topic: 'bim360', cat: 'intermediate', readTime: '10 min', free: false,
    desc: 'Using Autodesk BIM 360 to manage documents, coordinate models, and track issues across the project team.',
    intro: `BIM 360 — now part of Autodesk Construction Cloud (ACC) — is the leading cloud platform for BIM project collaboration. It connects design teams, contractors, and clients in one shared environment where models, documents, issues, and workflows are managed throughout the entire project lifecycle. For any BIM professional working on major projects, BIM 360 proficiency is essential.`,
    sections: [
      {
        id: 's1', heading: 'What is BIM 360?', level: 'h2',
        content: `**BIM 360** is Autodesk's cloud-based construction management platform. It serves as the **Common Data Environment (CDE)** for projects — the single, agreed location where all project information is stored, shared, and managed.\n\nIn 2021, Autodesk rebranded BIM 360 as **Autodesk Construction Cloud (ACC)**. Both names refer to the same platform. Many projects still refer to it as BIM 360, so you will encounter both names in professional practice.`,
        formula: { label: 'BIM 360 Core Role', text: 'BIM 360 = Common Data Environment + Cloud Collaboration + Issue Tracking' },
      },
      {
        id: 's2', heading: 'BIM 360 Modules', level: 'h2',
        content: `BIM 360 is organized into modules, each serving a different project function. Understanding which module to use for each task is the first step to using the platform effectively:`,
        subsections: [
          {
            heading: 'Design & Coordination',
            items: [
              '**Docs** — document management, version control, and approval workflows',
              '**Design Collaboration** — cloud worksharing for Revit teams',
              '**Model Coordination** — clash detection in the cloud (no Navisworks needed)',
            ],
          },
          {
            heading: 'Construction Management',
            items: [
              '**Build** — RFIs, submittals, issues, and daily reports',
              '**Field** — mobile-first site management and inspections',
              '**Cost** — budget tracking, change orders, and payment applications',
            ],
          },
          {
            heading: 'Project Intelligence',
            items: [
              '**Insight** — safety analytics and project performance dashboards',
              '**Assets** — equipment and asset tracking through construction',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'BIM 360 Docs — Document Management', level: 'h2',
        content: `**BIM 360 Docs** is the foundation of the platform — the document management system where all project files are stored, versioned, and shared. Every project file — drawings, models, specifications, reports — lives in Docs.`,
        items: [
          '**Version control** — every upload creates a new version, old versions preserved',
          '**Transmittals** — formal document issue process with tracking',
          '**Approval workflows** — review and approve documents before issue',
          '**Markup tools** — annotate PDFs and drawings directly in the browser',
          '**Mobile access** — view and markup documents on site via mobile app',
          '**Permission control** — control who can view, upload, or approve each folder',
        ],
        code: {
          label: 'BIM 360 Docs Folder Structure (Typical)',
          lines: [
            '01 - Project Management',
            '02 - Design',
            '   ├── Architectural',
            '   ├── Structural',
            '   └── MEP',
            '03 - Construction',
            '   ├── Shop Drawings',
            '   └── RFIs',
            '04 - Reports',
            '05 - Handover',
          ],
        },
      },
      {
        id: 's4', heading: 'Model Coordination in BIM 360', level: 'h2',
        content: `**BIM 360 Model Coordination** brings clash detection into the cloud — no Navisworks license required. Teams publish their Revit models to BIM 360, and the platform automatically aggregates them into a federated model and runs clash tests.`,
        items: [
          'Publish Revit models directly to BIM 360 via the Revit add-in',
          'Models update automatically when new versions are published',
          'Clash tests configured and run in the browser',
          'Issues created directly from clash results',
          'Issues assigned to responsible team members',
          'Clash status tracked from detection to resolution',
        ],
        formula: { label: 'Cloud Coordination Advantage', text: 'Publish Model → Auto-Federate → Run Clash Test → Assign Issue → Track Resolution' },
      },
      {
        id: 's5', heading: 'Issues and RFIs', level: 'h2',
        content: `**Issues** are the primary communication tool in BIM 360 for tracking problems, questions, and tasks on a project. Every clash, design question, or site observation can be logged as an issue and tracked to resolution.`,
        subsections: [
          {
            heading: 'Issue Types',
            items: [
              '**Design Issues** — conflicts or problems in the BIM models',
              '**RFIs (Requests for Information)** — formal questions from contractor to designer',
              '**Field Issues** — problems observed on site during construction',
              '**Safety Issues** — site safety observations and non-conformances',
              '**Quality Issues** — workmanship or material quality problems',
            ],
          },
          {
            heading: 'Issue Workflow',
            items: [
              'Create — log the issue with description, location, and photo',
              'Assign — assign to responsible person with due date',
              'Review — assignee reviews and responds',
              'Close — issue creator confirms resolution and closes',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Design Collaboration — Cloud Worksharing', level: 'h2',
        content: `**BIM 360 Design Collaboration** allows multiple Revit users to work on the same model simultaneously from different locations — using Revit's cloud worksharing capability.\n\nThis is particularly valuable for large teams where architects in Manila and engineers in Singapore need to work on the same project in real time.`,
        items: [
          'Multiple users work on the same Revit model simultaneously',
          'Each user works in their own workset — no file locking',
          'Sync to cloud to share changes with the team',
          'View what others are working on in real time',
          'Model history preserved — roll back to any previous version',
          'No VPN required — works over standard internet connection',
        ],
      },
      {
        id: 's7', heading: 'BIM 360 on the Construction Site', level: 'h2',
        content: `BIM 360 is not just for designers — it is equally powerful on the construction site. The **BIM 360 mobile app** gives site engineers and foremen access to the latest drawings, models, and issues directly on their phones or tablets.`,
        items: [
          '**View latest drawings** — always the current approved revision',
          '**View 3D models** — navigate the BIM model on site',
          '**Log field issues** — photograph and document problems immediately',
          '**Complete inspections** — digital checklists and sign-offs',
          '**Offline mode** — download documents for areas without signal',
          '**Location-based issues** — pin issues to specific locations on floor plans',
        ],
      },
      {
        id: 's8', heading: 'Setting Up a BIM 360 Project', level: 'h2',
        content: `As a BIM Manager or senior BIM professional, you may be responsible for setting up BIM 360 at the start of a project. Here is the standard setup process:`,
        code: {
          label: 'BIM 360 Project Setup Steps',
          lines: [
            'Step 1 → Create project in BIM 360 Admin',
            'Step 2 → Set up folder structure in Docs',
            'Step 3 → Configure permission levels per folder',
            'Step 4 → Invite team members and assign roles',
            'Step 5 → Set up approval workflows for each document type',
            'Step 6 → Configure Model Coordination — add model sets',
            'Step 7 → Set up clash tests between discipline models',
            'Step 8 → Brief the team on upload and naming conventions',
            'Step 9 → Conduct BIM 360 training for all team members',
          ],
        },
      },
      {
        id: 's9', heading: 'BIM 360 in Philippine Projects', level: 'h2',
        content: `BIM 360 is increasingly used on major Philippine construction projects — particularly those with international clients, foreign consultants, or large main contractors. Filipino BIM professionals with BIM 360 experience are in high demand for these projects.`,
        items: [
          '**High-rise towers** in BGC, Makati, and Ortigas — standard on premium developments',
          '**Infrastructure projects** — NAIA terminal projects, metro rail extensions',
          '**Hospitality** — international hotel brands require BIM 360 on their projects',
          '**Healthcare** — hospital projects with international healthcare consultants',
          '**BPO fit-outs** — multinational companies requiring coordinated BIM delivery',
          '**International contractors** — Korean, Japanese, and Chinese contractors using BIM 360',
        ],
      },
    ],
    takeaways: [
      'BIM 360 (now Autodesk Construction Cloud) is the leading cloud CDE for BIM project collaboration.',
      'BIM 360 Docs manages all project documents with version control and approval workflows.',
      'Model Coordination in BIM 360 enables cloud-based clash detection without Navisworks.',
      'Issues and RFIs are tracked from creation to resolution — keeping the whole team accountable.',
      'Design Collaboration enables real-time cloud worksharing for distributed Revit teams.',
      'BIM 360 proficiency is increasingly required for major Philippine construction projects.',
    ],
    resource: { label: 'BIM 360 Setup Checklist', type: 'PDF' },
    quiz: { label: 'BIM 360 Quiz', questions: 10, time: '5 min' },
    prev: { id: 9, title: 'IFC: Open BIM Standard Explained' },
    next: { id: 11, title: '4D BIM: Linking Schedule to the Model' },
  },

// ============================================================
  // LESSON 11 — 4D BIM: Linking Schedule to the Model
  // ============================================================
  {
    id: 11, num: '11',
    title: '4D BIM: Linking Schedule to the Model',
    topic: 'coordination', cat: 'advanced', readTime: '12 min', free: false,
    desc: 'How to connect your Revit model to a project schedule and simulate construction sequencing.',
    intro: `4D BIM adds the dimension of time to your Building Information Model. By linking construction schedule activities directly to BIM elements, project teams can visualize, simulate, and optimize the entire construction sequence before breaking ground. For complex projects, 4D BIM is one of the most powerful tools available to planners, contractors, and BIM managers.`,
    sections: [
      {
        id: 's1', heading: 'What is 4D BIM?', level: 'h2',
        content: `**4D BIM** is the integration of a 3D BIM model with a construction schedule — adding **time** as the fourth dimension. Each element in the model is linked to a schedule activity, allowing the team to simulate and visualize how the building will be constructed over time.\n\nThe result is a **construction simulation** — an animated sequence showing what will be built, when it will be built, and in what order. This simulation is used for planning, communication, logistics, and identifying scheduling conflicts before construction begins.`,
        formula: { label: '4D BIM Formula', text: '3D BIM Model + Construction Schedule = 4D Construction Simulation' },
      },
      {
        id: 's2', heading: 'Why 4D BIM Matters', level: 'h2',
        content: `Traditional construction planning uses Gantt charts and bar charts to represent the schedule. While useful, these 2D schedule formats make it difficult to visualize spatial and logistical conflicts that only become apparent when you see the sequence in 3D.\n\n4D BIM solves this by making the schedule visual and spatial:`,
        items: [
          '**Identify sequencing conflicts** — see when two activities conflict spatially',
          '**Optimize construction sequence** — test different sequences before committing',
          '**Improve site logistics** — visualize crane positions, material delivery zones, and access routes',
          '**Communicate the plan** — show the construction sequence to clients and stakeholders clearly',
          '**Reduce delays** — catch scheduling problems before they happen on site',
          '**Support procurement** — identify when materials and equipment are needed',
        ],
      },
      {
        id: 's3', heading: 'Key Tools for 4D BIM', level: 'h2',
        content: `Several software tools are used for 4D BIM in professional practice. The choice depends on project size, team capability, and client requirements:`,
        subsections: [
          {
            heading: 'Primary 4D BIM Tools',
            items: [
              '**Autodesk Navisworks** — most widely used, TimeLiner module for 4D',
              '**Synchro Pro** — professional 4D planning tool, now part of Bentley',
              '**ASTA Powerproject BIM** — popular with UK contractors',
              '**Primavera P6 with BIM** — enterprise-level scheduling with BIM integration',
            ],
          },
          {
            heading: 'Schedule Input Formats',
            items: [
              'Microsoft Project (.mpp) — most common for small to medium projects',
              'Primavera P6 (.xer) — standard for large infrastructure projects',
              'Asta Powerproject (.pp) — common in UK and Middle East',
              'CSV format — universal import option for any scheduling software',
            ],
          },
        ],
      },
      {
        id: 's4', heading: '4D BIM Workflow in Navisworks', level: 'h2',
        content: `The most common 4D BIM workflow uses Navisworks TimeLiner with a Microsoft Project or Primavera schedule. Here is the complete step-by-step process:`,
        code: {
          label: '4D BIM Workflow — Navisworks TimeLiner',
          lines: [
            'Step 1  → Prepare the BIM model in Revit',
            '          - Ensure elements are properly categorized',
            '          - Add construction phase parameters if needed',
            'Step 2  → Export model as NWC and open in Navisworks',
            'Step 3  → Open TimeLiner panel (Home → TimeLiner)',
            'Step 4  → Import construction schedule',
            '          - Tasks tab → Add → Import from file',
            '          - Select MS Project, Primavera, or CSV file',
            'Step 5  → Create Selection Sets in Navisworks',
            '          - Group model elements by construction activity',
            '          - Example: "Foundation Piling", "Level 1 Structure"',
            'Step 6  → Link schedule tasks to selection sets',
            '          - Drag and drop or use Auto-Attach rules',
            'Step 7  → Set task types for each activity',
            '          - Construct, Demolish, Temporary, or Maintain',
            'Step 8  → Configure appearance settings',
            '          - Planned: green wireframe',
            '          - Active: yellow solid',
            '          - Complete: grey solid',
            'Step 9  → Run the simulation and review',
            'Step 10 → Export simulation as video or present live',
          ],
        },
      },
      {
        id: 's5', heading: 'Task Types in 4D BIM', level: 'h2',
        content: `When linking schedule activities to model elements, you assign a **task type** that defines how the element behaves during the simulation:`,
        subsections: [
          {
            heading: 'Navisworks Task Types',
            items: [
              '**Construct** — element appears during the activity and remains after (permanent construction)',
              '**Demolish** — element is visible before the activity and disappears during (demolition work)',
              '**Temporary** — element appears during the activity and disappears after (scaffolding, formwork, cranes)',
              '**Maintain** — element is always visible but highlighted during the activity (maintenance tasks)',
            ],
          },
        ],
        formula: { label: 'Key Insight', text: 'Temporary Task Type = Visualize Scaffolding, Formwork & Equipment in Sequence' },
      },
      {
        id: 's6', heading: 'Model Preparation for 4D', level: 'h2',
        content: `A BIM model prepared for 3D coordination needs additional preparation before it can be used effectively for 4D simulation. Good model preparation is the foundation of a successful 4D BIM workflow.`,
        items: [
          '**Phase assignment** — elements assigned to correct construction phases in Revit',
          '**Worksets** — organize elements by construction package or contractor',
          '**Parameters** — add custom parameters for activity codes if needed',
          '**Level of Detail** — ensure LOD is appropriate (LOD 300 minimum for 4D)',
          '**Temporary elements** — model scaffolding, formwork, and cranes as separate elements',
          '**Naming conventions** — consistent names make Auto-Attach rules more effective',
        ],
      },
      {
        id: 's7', heading: '4D BIM for Site Logistics', level: 'h2',
        content: `One of the most valuable applications of 4D BIM beyond schedule visualization is **site logistics planning**. By modeling temporary elements — cranes, hoists, site offices, material storage areas — and linking them to the schedule, the team can optimize site layout over time.`,
        items: [
          '**Tower crane positioning** — verify reach and avoid clashes with structure',
          '**Crane dismantling sequence** — plan how cranes are removed as structure rises',
          '**Material delivery zones** — coordinate with construction sequence',
          '**Hoist and temporary access** — plan temporary structures with the schedule',
          '**Site office locations** — show how site accommodation changes over time',
          '**Traffic management** — coordinate delivery routes with active work areas',
        ],
      },
      {
        id: 's8', heading: '4D BIM Outputs and Deliverables', level: 'h2',
        content: `A 4D BIM simulation produces several valuable outputs that are used throughout the project:`,
        items: [
          '**Construction simulation video** — MP4 export showing the full build sequence',
          '**Snapshot images** — key milestones captured as still images for presentations',
          '**Schedule clash report** — conflicts between activities identified by the simulation',
          '**Updated Gantt chart** — schedule refined based on 4D analysis',
          '**Site logistics plan** — optimized site layout derived from 4D analysis',
          '**Client presentation** — visual communication of the construction program',
        ],
      },
      {
        id: 's9', heading: '4D BIM in Philippine Construction', level: 'h2',
        content: `4D BIM is becoming increasingly common on major Philippine construction projects, particularly high-rise towers, infrastructure projects, and developments with international clients or contractors. Filipino BIM professionals with 4D experience command significantly higher salaries and are sought after by major contractors.`,
        items: [
          '**High-rise construction** — critical for sequencing structure, MEP, and fit-out',
          '**Infrastructure projects** — used on major road, bridge, and rail projects',
          '**Hospital construction** — complex phasing with occupied areas requiring careful sequencing',
          '**Phased developments** — multi-tower projects where sequence affects sales and revenue',
          '**International contractors** — Korean, Japanese, and Chinese contractors commonly require 4D',
          '**Government infrastructure** — DPWH and DOTr projects increasingly requiring 4D BIM',
        ],
        formula: { label: 'Career Advantage', text: '4D BIM Proficiency = Premium BIM Role + Higher Salary + International Opportunities' },
      },
    ],
    takeaways: [
      '4D BIM integrates a 3D BIM model with a construction schedule to create a construction simulation.',
      'Navisworks TimeLiner is the most widely used tool for 4D BIM in professional practice.',
      'Task types — Construct, Demolish, Temporary, Maintain — control how elements behave in the simulation.',
      'Good model preparation including phase assignment, worksets, and naming conventions is essential for effective 4D.',
      'Temporary elements like scaffolding and cranes can be modeled and included in the 4D simulation.',
      '4D BIM proficiency is a high-value skill that opens premium BIM roles and international opportunities.',
    ],
    resource: { label: '4D BIM Workflow Guide', type: 'PDF' },
    quiz: { label: '4D BIM Quiz', questions: 10, time: '5 min' },
    prev: { id: 10, title: 'BIM 360 for Project Collaboration' },
    next: { id: 12, title: 'BIM in the Philippines: Standards & Opportunities' },
  },

// ============================================================
  // LESSON 12 — BIM in the Philippines: Standards & Opportunities
  // ============================================================
  {
    id: 12, num: '12',
    title: 'BIM in the Philippines: Standards & Opportunities',
    topic: 'general', cat: 'advanced', readTime: '10 min', free: false,
    desc: 'Overview of BIM adoption in the PH construction industry, government mandates, and career opportunities.',
    intro: `The Philippines is at a pivotal moment in its BIM journey. What was once limited to a handful of multinational firms is now rapidly becoming the standard across the local construction industry. This final lesson covers the current state of BIM in the Philippines, the standards being adopted, the government mandates taking shape, and the career opportunities available to Filipino BIM professionals — locally and internationally.`,
    sections: [
      {
        id: 's1', heading: 'The State of BIM in the Philippines', level: 'h2',
        content: `BIM adoption in the Philippines has accelerated significantly since 2018. Driven by international clients, foreign contractors, and the growing sophistication of local developers, BIM is now expected on most major construction projects in Metro Manila and key regional cities.\n\nWhile the Philippines is still behind early adopters like the UK, Singapore, and Australia in terms of government mandates, the private sector has moved decisively toward BIM — creating strong demand for skilled BIM professionals across all disciplines.`,
        formula: { label: 'PH BIM Reality', text: 'Private Sector Demand + International Projects + Government Initiative = Growing BIM Market' },
      },
      {
        id: 's2', heading: 'Key Drivers of BIM Adoption in the Philippines', level: 'h2',
        content: `Several factors are driving the rapid adoption of BIM across the Philippine construction industry:`,
        subsections: [
          {
            heading: 'International Influence',
            items: [
              'Foreign clients — Korean, Japanese, Singaporean, and Australian developers requiring BIM',
              'International contractors — bringing BIM requirements from their home markets',
              'Multinational design firms — setting BIM standards on their Philippine projects',
              'OFW engineers returning with BIM experience from the Middle East and Singapore',
            ],
          },
          {
            heading: 'Local Market Forces',
            items: [
              'Premium real estate developers — Ayala Land, SM, Megaworld, Rockwell requiring BIM',
              'Hospital projects — complex MEP coordination driving BIM adoption',
              'High-rise construction boom — complexity making BIM economically essential',
              'Competition — firms using BIM winning projects over those that do not',
            ],
          },
          {
            heading: 'Government Initiatives',
            items: [
              'Build, Build, Build program — major infrastructure requiring BIM coordination',
              'DPWH BIM pilot projects — testing BIM on national infrastructure',
              'DOTr infrastructure — metro rail and airport projects using BIM',
              'DICT digitalization agenda — supporting BIM as part of construction industry reform',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Philippine BIM Standards and Guidelines', level: 'h2',
        content: `The Philippines does not yet have a nationally mandated BIM standard equivalent to the UK BIM Level 2 or Singapore BIM Guide. However, several frameworks and guidelines are being developed and referenced:`,
        items: [
          '**CIAP (Construction Industry Authority of the Philippines)** — working on BIM guidelines for local practice',
          '**Philippine Green Building Code** — encourages BIM for energy modeling and sustainability',
          '**ASEAN BIM Standards** — regional framework influencing Philippine adoption',
          '**UK BS EN ISO 19650** — adopted by many international firms operating in the Philippines',
          '**Singapore BIM Guide** — referenced by projects with Singaporean involvement',
          '**AIA BIM Protocol** — used by American design firms on Philippine projects',
        ],
        formula: { label: 'Current Standard', text: 'No National Mandate Yet — But International Standards Apply on Major Projects' },
      },
      {
        id: 's4', heading: 'BIM Requirements by Project Type', level: 'h2',
        content: `While there is no universal BIM mandate in the Philippines yet, different project types have different levels of BIM expectation in the current market:`,
        code: {
          label: 'BIM Expectations by Project Type (2026)',
          lines: [
            'High-Rise Residential (40+ floors)  → BIM Required',
            'Premium Commercial Offices           → BIM Required',
            'International Hotels                 → BIM Required',
            'Hospitals and Healthcare             → BIM Strongly Expected',
            'Shopping Malls (large)               → BIM Common',
            'Government Infrastructure            → BIM Pilot Projects',
            'Mid-Rise Residential                 → BIM Growing',
            'Industrial Facilities                → BIM on Major Projects',
            'Small Commercial                     → BIM Optional',
          ],
        },
      },
      {
        id: 's5', heading: 'BIM Career Opportunities in the Philippines', level: 'h2',
        content: `The gap between BIM demand and BIM-skilled professionals in the Philippines creates significant career opportunities. Filipino professionals with strong BIM skills are among the most sought-after in the Asian construction market.`,
        subsections: [
          {
            heading: 'Local BIM Roles (Philippines)',
            items: [
              '**BIM Coordinator** — manages BIM delivery on a project, coordinates disciplines',
              '**BIM Manager** — oversees BIM implementation across multiple projects or a firm',
              '**Revit Technician** — production role creating and updating BIM models',
              '**BIM Consultant** — advises clients and firms on BIM strategy and implementation',
              '**VDC Engineer** — Virtual Design and Construction specialist for contractors',
            ],
          },
          {
            heading: 'International BIM Roles for Filipinos',
            items: [
              '**Singapore** — strong BIM mandate since 2015, high demand for Filipino BIM professionals',
              '**UAE / Middle East** — major infrastructure boom, premium salaries for BIM skills',
              '**Australia** — large Filipino diaspora in construction, BIM standard on all major projects',
              '**UK** — ISO 19650 mandated, strong demand for experienced BIM coordinators',
              '**Hong Kong** — BIM required on government projects, active market for Filipino talent',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'BIM Salary Benchmarks in the Philippines', level: 'h2',
        content: `BIM skills command a significant salary premium over traditional CAD roles in the Philippine market. These are approximate benchmarks based on 2025-2026 market data:`,
        code: {
          label: 'BIM Salary Benchmarks — Philippines (2026)',
          lines: [
            'Revit Technician (0-2 yrs)      → ₱25,000 - ₱40,000 / month',
            'BIM Coordinator (2-5 yrs)        → ₱45,000 - ₱80,000 / month',
            'BIM Manager (5+ yrs)             → ₱80,000 - ₱150,000 / month',
            'Senior BIM Specialist (7+ yrs)   → ₱120,000 - ₱200,000+ / month',
            '',
            'International (OFW) BIM Roles:',
            'Singapore BIM Coordinator        → SGD 3,500 - 6,000 / month',
            'UAE BIM Manager                  → AED 12,000 - 22,000 / month',
            'Australia BIM Specialist         → AUD 90,000 - 130,000 / year',
          ],
        },
      },
      {
        id: 's7', heading: 'BIM Certifications Recognized in the Philippines', level: 'h2',
        content: `Professional certifications strengthen your BIM credentials and are increasingly requested by employers and clients. These certifications are recognized in the Philippine market and internationally:`,
        items: [
          '**Autodesk Certified Professional (ACP)** — Revit Architecture, Structure, or MEP',
          '**Autodesk Certified User (ACU)** — entry-level Revit certification',
          '**buildingSMART Professional** — IFC and Open BIM specialist certification',
          '**BIM Manager Certification (BIM Institute)** — internationally recognized',
          '**Navisworks Certified** — Autodesk certification for coordination specialists',
          '**ISO 19650 Training** — UK-based certification for BIM information management',
          '**PRC License** — Architecture or Engineering license remains essential alongside BIM',
        ],
      },
      {
        id: 's8', heading: 'Top Philippine Firms Using BIM', level: 'h2',
        content: `These organizations are among the most active BIM users in the Philippines — and are the primary employers of BIM professionals in the local market:`,
        subsections: [
          {
            heading: 'Design Firms',
            items: [
              'GF and Partners Architects',
              'Casas + Architects',
              'AECOM Philippines',
              'Arcadis Philippines',
              'Meinhardt Philippines',
            ],
          },
          {
            heading: 'Contractors',
            items: [
              'EEI Corporation',
              'DMCI Holdings',
              'Megawide Construction',
              'D.M. Consunji Inc. (DMCI)',
              'Filinvest Allied Group',
            ],
          },
          {
            heading: 'Developers Requiring BIM',
            items: [
              'Ayala Land Inc.',
              'SM Prime Holdings',
              'Megaworld Corporation',
              'Rockwell Land',
              'Federal Land',
            ],
          },
        ],
      },
      {
        id: 's9', heading: 'Your BIM Journey Starts Now', level: 'h2',
        content: `You have now completed the 12 core lessons of the Dharren Park BIM System. From understanding what BIM is, to running clash detection, coordinating MEP systems, and understanding the Philippine BIM landscape — you have built a strong foundation for a professional BIM career.\n\nThe construction industry in the Philippines and across Asia needs skilled, knowledgeable BIM professionals. The demand is real, the salaries are strong, and the opportunities — local and international — are significant.\n\nYour next steps:`,
        items: [
          '**Practice daily** — open Revit every day and build something, even small projects',
          '**Get certified** — pursue your Autodesk Certified Professional (ACP) certification',
          '**Build a portfolio** — document your BIM projects and share them professionally',
          '**Join the community** — connect with Philippine BIM professionals on LinkedIn',
          '**Stay current** — BIM technology evolves fast, keep learning and updating your skills',
          '**Apply your knowledge** — offer BIM services to local architects and engineers',
        ],
        formula: { label: 'Your BIM Career Formula', text: 'Knowledge + Practice + Certification + Portfolio = BIM Career Success' },
      },
    ],
    takeaways: [
      'The Philippines is experiencing rapid BIM adoption driven by international projects, premium developers, and government infrastructure programs.',
      'No national BIM mandate exists yet — but international standards (ISO 19650, Singapore BIM Guide) apply on major projects.',
      'BIM is required or strongly expected on high-rise, hospital, premium commercial, and international projects.',
      'Filipino BIM professionals are in high demand locally and across Singapore, UAE, Australia, and the UK.',
      'BIM skills command a significant salary premium — from ₱25,000/month for entry level to ₱200,000+ for senior specialists.',
      'Your BIM journey continues — practice daily, get certified, build a portfolio, and apply your knowledge.',
    ],
    resource: { label: 'PH BIM Standards Summary', type: 'PDF' },
    quiz: { label: 'PH BIM Standards Quiz', questions: 10, time: '5 min' },
    prev: { id: 11, title: '4D BIM: Linking Schedule to the Model' },
    next: null,
  },

];

export default lessons;