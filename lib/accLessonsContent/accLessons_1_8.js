// ============================================================
// AUTODESK CONSTRUCTION CLOUD — LESSONS acc-1 through acc-8 (BEGINNER)
// Section: ACC Foundations & Document Management
// File: lib/accLessonsContent/accLessons_1_8.js
// Index: lib/accLessonsData.js
// Free lessons: acc-1, acc-2, acc-3
// ============================================================

export const lessons_1_8 = [

  // ============================================================
  // LESSON ACC-01 — What is Autodesk Construction Cloud
  // ============================================================
  {
    id: 'acc-1', num: '01',
    title: 'What is Autodesk Construction Cloud & How it Fits in BIM Delivery',
    topic: 'ACC Basics', cat: 'beginner', readTime: '8 min', free: true,
    desc: 'Understand what Autodesk Construction Cloud is, how it evolved from BIM 360, and where it sits in a BIM project delivery workflow.',
    intro: `Construction projects fail for a remarkably consistent set of reasons: information delivered to the wrong person at the wrong time, changes not communicated, approvals not tracked, models not coordinated. Autodesk Construction Cloud was built to address all of these at once — replacing a patchwork of disconnected tools with a single platform connecting design, coordination, and construction. This lesson explains what ACC is, how it evolved, and why understanding it is now essential for anyone working in BIM project delivery.`,
    sections: [
      {
        id: 's1', heading: 'What is Autodesk Construction Cloud?', level: 'h2',
        content: `**Autodesk Construction Cloud (ACC)** is a unified, cloud-based platform that connects the people, workflows, and data across the full lifecycle of a construction project — from pre-construction and design coordination through to site construction and handover. It is not a single piece of software but a suite of integrated modules operating under one platform and one shared data environment.\n\nACC sits at the intersection of BIM and construction management. It allows architects, engineers, BIM managers, contractors, and clients to work from the same data, in real time, through a browser and mobile app — without the information silos that have traditionally made construction one of the least digitally productive industries in the world.`,
        formula: { label: 'ACC Core Concept', text: 'One Platform + Shared Data = Connected Design, Coordination & Construction' },
      },
      {
        id: 's2', heading: 'From BIM 360 to ACC — A Brief History', level: 'h2',
        content: `Understanding ACC's origin explains why the platform works the way it does and helps experienced BIM practitioners understand what changed from its predecessor.`,
        subsections: [
          {
            heading: 'The Evolution',
            items: [
              '**BIM 360 Field / Glue / Docs / Team** — Autodesk\'s early construction cloud tools, each separate and siloed, launched from 2012',
              '**BIM 360 (unified)** — Autodesk began consolidating the separate BIM 360 products into a single platform from 2018',
              '**Autodesk Construction Cloud (2020)** — ACC launched as the unified successor, combining BIM 360 capabilities with new modules under a single login and data environment',
              '**Ongoing integration (2021–present)** — New modules (Cost, Schedule, Forms, Assets) added; Takeoff and Build consolidated; deeper Revit and Forma integrations introduced',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'The ACC Module Structure', level: 'h2',
        content: `ACC is organized as a set of modules, each covering a different aspect of the construction workflow. Not all modules need to be active on every project — each is enabled separately within a project.`,
        code: {
          label: 'ACC Core Modules',
          lines: [
            'Docs          → Document management — the CDE layer of ACC',
            'Build         → Construction management — Issues, RFIs, Submittals, Meetings, Daily Logs',
            'Coordinate    → Model coordination — clash detection and BIM review in the cloud',
            'Cost          → Budget, contracts, change orders, forecasting',
            'Schedule      → Construction programme linked to model and activities',
            'Sheets        → Drawing management — publish, version, and mark up drawings',
            'Forms         → Digital site inspection forms and QA/QC checklists',
            'Assets        → Equipment and FM data tracking through the project lifecycle',
            'Insights      → Reporting and project health dashboards',
            'Takeoff       → Quantity takeoff from 2D drawings and 3D models',
          ],
        },
      },
      {
        id: 's4', heading: 'Where ACC Fits in the BIM Delivery Workflow', level: 'h2',
        content: `ACC is the platform layer that sits above the authoring tools (Revit, AutoCAD, Civil 3D) and coordinates information across the project team.`,
        code: {
          label: 'BIM Delivery — Where ACC Lives',
          lines: [
            'Pre-Construction',
            '  ↳ ACC: Project setup, team onboarding, document structure',
            '  ↳ ACC Cost: Budget, contracts',
            '',
            'Design & Coordination',
            '  ↳ ACC Docs: CDE for design documents and drawings',
            '  ↳ ACC Coordinate: Model coordination and clash detection',
            '  ↳ ACC Sheets: Drawing issue and review',
            '',
            'Construction',
            '  ↳ ACC Build: RFIs, Issues, Submittals, Daily Logs',
            '  ↳ ACC Forms: Site inspections and QA checklists',
            '  ↳ ACC Schedule: Programme management',
            '',
            'Handover',
            '  ↳ ACC Assets: FM data and equipment records',
            '  ↳ ACC Docs: As-built document delivery',
          ],
        },
      },
      {
        id: 's5', heading: 'ACC as the CDE for ISO 19650 Projects', level: 'h2',
        content: `Under ISO 19650, all BIM projects require a **Common Data Environment (CDE)** — a single, managed repository where project information is stored, shared, and controlled. ACC Docs is specifically designed to function as a compliant CDE, with folder structures, permission controls, revision workflows, and formal issue processes that align with the standard.\n\nFor BIM practitioners working to ISO 19650, understanding ACC is not optional — it is increasingly the default CDE platform on UK, UAE, and Australian projects, and is gaining rapid adoption globally.`,
        formula: { label: 'CDE Principle', text: 'One Source of Truth for all project information = fewer errors, faster decisions, traceable accountability' },
      },
      {
        id: 's6', heading: 'Who Uses ACC on a BIM Project?', level: 'h2',
        content: `ACC is used across the full project team — not just by BIM managers and coordinators. Understanding who uses which modules helps you set up access and workflows correctly.`,
        items: [
          '**BIM Manager / Information Manager** — project setup, user management, CDE configuration, coordination spaces',
          '**Architects & Engineers** — uploading design documents to Docs, reviewing models in Coordinate, responding to RFIs',
          '**Main Contractor / Site Manager** — Build module for Issues, RFIs, Submittals, Daily Logs, and Forms on site',
          '**Sub-Contractors** — accessing documents and responding to assigned issues or RFIs',
          '**Client / Employer\'s Agent** — reviewing documents, approving submittals, monitoring project health in Insights',
          '**Quantity Surveyor / Cost Manager** — ACC Cost module for budgets, contracts, and change management',
          '**Facilities Manager** — Assets module at handover; ongoing use post-project',
        ],
      },
      {
        id: 's7', heading: 'ACC vs Other Construction Platforms', level: 'h2',
        content: `ACC operates in a market alongside Procore, Aconex (Oracle), Trimble Connect, and others. Each has different strengths, but ACC's differentiator is its deep integration with Autodesk's authoring tools — particularly Revit. If your design team is in Revit and your project models live in Autodesk's ecosystem, ACC provides a more seamless workflow than a non-Autodesk platform.`,
        subsections: [
          {
            heading: 'Key Differentiators',
            items: [
              'Native Revit publishing direct to ACC Docs and Sheets from within Revit',
              'Model Coordinate uses the same model data as Revit without manual export',
              'Forma, Revit, Navisworks, and ACC share the same Autodesk Hub infrastructure',
              'Single login across all Autodesk products via Autodesk ID',
              'Tightly integrated Cost, Schedule, and Issue modules referencing the same project data',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'Autodesk Construction Cloud is a unified platform connecting design, coordination, and construction under a single shared data environment.',
      'ACC evolved from BIM 360 and now consolidates Docs, Build, Coordinate, Cost, Schedule, Sheets, Forms, Assets, and Insights in one platform.',
      'ACC Docs functions as an ISO 19650-compliant Common Data Environment — the CDE for the entire project.',
      'The platform is used across the full project team: BIM managers, designers, contractors, clients, and facilities managers each use different modules.',
      'ACC\'s primary differentiator is deep integration with Autodesk authoring tools — Revit, Forma, and Navisworks all connect natively.',
      'Understanding ACC is essential for BIM practitioners — it is the default CDE platform on an increasing proportion of commercial projects globally.',
    ],
    resource: { label: 'ACC Platform Overview Guide', type: 'PDF' },
    quiz: { label: 'What is ACC Quiz', questions: 10, time: '5 min' },
    prev: null,
    next: { id: 'acc-2', title: 'Setting Up an ACC Account, Hub & Project' },
  },

  // ============================================================
  // LESSON ACC-02 — Setting Up an ACC Account, Hub & Project
  // ============================================================
  {
    id: 'acc-2', num: '02',
    title: 'Setting Up an ACC Account, Hub & Project',
    topic: 'ACC Basics', cat: 'beginner', readTime: '8 min', free: true,
    desc: 'Get your ACC account, Hub, and first project ready — licensing, Hub setup, and the project creation workflow.',
    intro: `The first thing most teams notice about ACC is that it moves faster than traditional construction software to get started — but slower than expected if the Hub structure and project settings are not correct from the beginning. Account, Hub, and project configuration are the foundations of every workflow in ACC: permissions, modules, and file structure all cascade from decisions made at this stage. This lesson walks through setting up ACC correctly from the start.`,
    sections: [
      {
        id: 's1', heading: 'ACC Licensing', level: 'h2',
        content: `ACC is available as part of Autodesk's construction software portfolio. Licensing for ACC differs from the AEC Collection desktop tools — it is project-based and user-count-based rather than a single seat licence.`,
        code: {
          label: 'Licensing Options',
          lines: [
            'ACC (Standard)',
            '  → Includes Docs, Build, Coordinate, Sheets',
            '  → Per-project pricing, seat-based for key roles',
            '',
            'ACC Premium',
            '  → Adds Cost, Schedule, Takeoff, Assets, Forms, Insights',
            '  → Used by main contractors and larger project teams',
            '',
            'BIM Collaborate / BIM Collaborate Pro',
            '  → BIM Collaborate = design coordination in ACC',
            '  → BIM Collaborate Pro = adds full Revit cloud worksharing',
            '',
            'Free trial: available at construction.autodesk.com',
          ],
        },
      },
      {
        id: 's2', heading: 'Understanding Hubs', level: 'h2',
        content: `A **Hub** is your organisation's top-level Autodesk workspace — the container for all projects managed by your firm. Think of it as your company's Autodesk account on the cloud. All projects, members, and billing are managed within a Hub.`,
        items: [
          'A Hub is typically set up once per organisation, by the Account Administrator',
          'Multiple firms on the same project each manage their own Hub; members can be invited across Hubs',
          'The Hub name is usually the company or organisation name',
          'A single Autodesk ID can belong to multiple Hubs — useful for consultants working across multiple clients',
          'Hub-level settings include: company branding, global user management, and compliance settings',
          'Hubs for ACC are managed at **acc.autodesk.com** — the main entry point for the platform',
        ],
      },
      {
        id: 's3', heading: 'Creating a Project', level: 'h2',
        content: `Projects in ACC are the primary container for all documents, models, issues, and communications on a single construction project. Getting the project settings right at creation avoids significant admin effort later.`,
        subsections: [
          {
            heading: 'Project Creation Steps',
            items: [
              'Sign in at acc.autodesk.com with your Autodesk ID',
              'From the Hub home page, click **+ New Project**',
              'Enter the project name — be specific and consistent with your firm\'s naming convention',
              'Set project type (Building, Infrastructure, Civil, etc.) — affects default templates',
              'Set project timezone and currency — affects Cost module date and value display',
              'Set project start and end dates',
              'Choose which modules to activate (Docs, Build, Coordinate, etc.)',
              'Click **Create Project** — you are now the Project Administrator',
            ],
          },
        ],
        formula: { label: 'Setup Rule', text: 'Get the project name, type, and timezone right at creation — these are difficult to change once data is in the project' },
      },
      {
        id: 's4', heading: 'Project Templates', level: 'h2',
        content: `ACC allows you to create projects from a **template** — a pre-configured project with folder structures, permission presets, and activated modules. Templates save significant setup time for firms running multiple similar projects.`,
        items: [
          'Templates are created from an existing project at Hub Administration level',
          'A template can include: folder structure, permission sets, activated modules, and issue type configurations',
          'New projects created from a template inherit all configured settings instantly',
          'For BIM managers setting up multiple projects, maintaining a master template is a significant time investment that pays dividends rapidly',
          'Templates can be updated; existing projects are not affected by template updates (the template is a snapshot at project creation)',
        ],
      },
      {
        id: 's5', heading: 'Project Administration', level: 'h2',
        content: `Every ACC project has one or more **Project Administrators** — users with full control over project settings, members, modules, and permissions. The person who creates the project is automatically the first Project Administrator.`,
        code: {
          label: 'Project Admin Responsibilities',
          lines: [
            'Member management     → Add, edit, remove project members and roles',
            'Module activation     → Enable/disable modules (Docs, Build, Coordinate, etc.)',
            'Permission management → Set folder-level and module-level access',
            'Project settings      → Name, dates, project type, integrations',
            'Company management    → Add external companies to the project',
            'Issue configuration   → Define issue types, subtypes, and root cause categories',
            '',
            'Project Admin ≠ Hub Admin',
            '  Project Admin → manages one project',
            '  Hub Admin     → manages all projects and Hub settings',
          ],
        },
      },
      {
        id: 's6', heading: 'Activating Modules', level: 'h2',
        content: `Modules are activated per project. You do not need to activate every module at project start — best practice is to activate modules when the relevant phase of the project begins.`,
        subsections: [
          {
            heading: 'Module Activation Sequencing',
            items: [
              '**At project creation** — Activate Docs immediately (needed for all document uploads from day one)',
              '**At design start** — Activate Coordinate when first models are ready for coordination',
              '**At design issue** — Activate Sheets when drawings are ready to be published',
              '**At construction start** — Activate Build (Issues, RFIs, Submittals, Daily Logs, Meetings)',
              '**At construction start** — Activate Forms for site inspections and QA checklists',
              '**Pre-handover** — Activate Assets when equipment lists are being compiled',
              'To activate: Project Settings → Modules → toggle the module on',
            ],
          },
        ],
      },
      {
        id: 's7', heading: 'Signing In and the ACC Dashboard', level: 'h2',
        content: `ACC is entirely browser-based, accessed at **acc.autodesk.com** with your Autodesk ID. The ACC home dashboard gives you quick access to all your projects and recent activity.`,
        items: [
          'Access ACC at acc.autodesk.com in Chrome, Edge, or Firefox (Chrome is recommended)',
          'Sign in with your Autodesk ID — the same credentials used for Revit, Forma, and other Autodesk products',
          'The Home dashboard shows all projects you are a member of across all Hubs',
          'Use the Hub selector in the top left to switch between different organisations',
          'Recent items and pinned projects appear on the home page for quick access',
          'The ACC mobile app (iOS and Android) provides access to Docs, Build, and Forms on site — install it before the first site visit',
        ],
        formula: { label: 'Mobile Preparation', text: 'Download and test the ACC mobile app before the first site visit — connectivity is often limited on construction sites' },
      },
    ],
    takeaways: [
      'ACC licensing is project-based and seat-based; it differs from the AEC Collection desktop tool licensing model.',
      'A Hub is the organisation\'s top-level Autodesk workspace — all projects and members are managed within it.',
      'Create a project with the correct name, type, timezone, and currency at the start — these are difficult to change after data is added.',
      'Project templates save significant setup time on repeat project types — invest in a master template for your firm.',
      'Project Administrators manage one project; Hub Administrators manage all projects and the Hub itself.',
      'Activate modules progressively: Docs at start, Coordinate at design stage, Build and Forms at construction stage, Assets pre-handover.',
    ],
    resource: { label: 'ACC Account & Project Setup Guide', type: 'PDF' },
    quiz: { label: 'ACC Account Setup Quiz', questions: 10, time: '5 min' },
    prev: { id: 'acc-1', title: 'What is Autodesk Construction Cloud & How it Fits in BIM Delivery' },
    next: { id: 'acc-3', title: 'Understanding the ACC Interface — Modules, Navigation & Roles' },
  },

  // ============================================================
  // LESSON ACC-03 — Understanding the ACC Interface
  // ============================================================
  {
    id: 'acc-3', num: '03',
    title: 'Understanding the ACC Interface — Modules, Navigation & Roles',
    topic: 'ACC Basics', cat: 'beginner', readTime: '8 min', free: true,
    desc: 'A complete tour of the ACC interface — project home, module navigation, global toolbar, and the role-based experience.',
    intro: `ACC's interface is role-adaptive — what you see depends on what you have been given access to. A BIM manager sees all modules; a subcontractor may only see documents in one folder. Understanding the full interface from an administrative perspective — and how different roles experience it differently — is essential for configuring the platform correctly and avoiding access issues that slow a project down.`,
    sections: [
      {
        id: 's1', heading: 'The ACC Home Screen', level: 'h2',
        content: `When you sign in to ACC at acc.autodesk.com, you land on the **Home** screen — a project dashboard showing all your projects across your Hubs. It is the navigation entry point for the whole platform.`,
        code: {
          label: 'ACC Home Screen Elements',
          lines: [
            'Top navigation bar     → Hub selector, notifications, profile, Help',
            'Project grid           → All projects you belong to, sorted by recent activity',
            'Pinned projects        → Projects you have pinned for quick access',
            'Recent activity        → Recent document views, issues, and RFI activity',
            'Create/Join buttons    → + New Project (Admins) or join an existing project',
            '',
            'To navigate to a project:',
            '  Click any project card from the Home screen',
            '  This takes you to the Project Home — the project-level dashboard',
          ],
        },
      },
      {
        id: 's2', heading: 'Project Home', level: 'h2',
        content: `Once inside a project, you are in the **Project Home** — the project-level dashboard that shows an overview of the project and provides access to all activated modules.`,
        items: [
          '**Left sidebar** — the primary module navigation, listing all activated modules (Docs, Build, Coordinate, etc.)',
          '**Activity feed** — recent uploads, issue updates, RFI responses, and model coordination activity',
          '**Project info strip** — project name, type, dates, and quick statistics',
          '**Members summary** — how many people are in the project and which companies they belong to',
          '**Module status** — quick indicators for open issues, pending RFIs, and recent uploads',
          'The Project Home is the default landing page each time you open a project',
        ],
      },
      {
        id: 's3', heading: 'The Left Sidebar — Module Navigation', level: 'h2',
        content: `The left sidebar is the primary navigation element within a project. Each activated module appears here as an icon with a label. Clicking a module takes you to that module's home screen.`,
        subsections: [
          {
            heading: 'Module Icons in the Sidebar',
            items: [
              '**Docs** — folder icon; the document management layer',
              '**Build** — hammer icon; Issues, RFIs, Submittals, Meetings, Daily Logs',
              '**Coordinate** — 3D cube icon; model coordination and clash detection',
              '**Cost** — currency icon; budgets, contracts, change orders',
              '**Schedule** — calendar icon; construction programme',
              '**Sheets** — drawing icon; published drawing management',
              '**Forms** — checklist icon; digital inspection forms',
              '**Assets** — tag icon; equipment and FM data tracking',
              '**Insights** — chart icon; reporting and dashboards',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'The Global Toolbar', level: 'h2',
        content: `The top bar in ACC is consistent across all modules. It provides access to cross-module functions and your account settings.`,
        code: {
          label: 'Global Toolbar Elements',
          lines: [
            'Autodesk logo    → Returns to ACC Home (all projects)',
            'Project name     → Current project; click to switch projects',
            'Module tabs      → Quick module switching within the current project',
            'Notifications 🔔 → New issues, approvals, mentions, due dates',
            'Search     🔍    → Global search across documents, issues, RFIs',
            'Help       ?     → Contextual help docs for the current module',
            'Profile    👤    → Account settings, plan, sign out',
          ],
        },
      },
      {
        id: 's5', heading: 'Role-Based Experience', level: 'h2',
        content: `What a user sees in ACC depends entirely on their permissions. ACC has three layers of role definition that together determine the interface each person experiences.`,
        subsections: [
          {
            heading: 'The Three Permission Layers',
            items: [
              '**Hub Role** — Account Administrator or Account Member (Hub-level; set in Account Admin)',
              '**Project Role** — Project Administrator or Project Member (project-level; set in Project Members)',
              '**Module Permission** — per-module access levels: View, Edit, Admin (set per module, per member or company)',
              'A Project Administrator can see and manage all modules and all documents, regardless of folder permissions',
              'A Project Member only sees modules they have been given access to, and only the folders/records their permission level allows',
            ],
          },
        ],
        formula: { label: 'Access Principle', text: 'Permission is additive — you see what you are given access to, nothing more. Default is no access.' },
      },
      {
        id: 's6', heading: 'ACC Docs — First Look', level: 'h2',
        content: `The Docs module is the entry point for most project members — it is where all documents, drawings, and models are stored. Understanding the Docs interface is the first practical skill in ACC.`,
        items: [
          '**Left panel** — folder tree; all folders in the project shown based on permissions',
          '**Main panel** — document list; shows files in the selected folder with metadata columns',
          '**Upload button** — drag and drop or browse to upload; top right of the main panel',
          '**Column controls** — customise which metadata columns are shown (file name, version, date, status)',
          '**Filter bar** — filter by file type, status, or upload date',
          '**Search within Docs** — find a specific document by name across all accessible folders',
        ],
      },
      {
        id: 's7', heading: 'ACC Mobile — Accessing the Platform on Site', level: 'h2',
        content: `The **Autodesk Construction Cloud** mobile app is the companion to the browser-based platform. It gives site teams access to documents, drawings, issues, RFIs, and forms directly from a phone or tablet.`,
        subsections: [
          {
            heading: 'Mobile App Key Features',
            items: [
              'Download and view documents and drawings offline (for areas with no connectivity)',
              'Create and respond to issues, RFIs, and submittals directly from site',
              'Complete Forms (inspection checklists) with photos and GPS location attached',
              'View and navigate 3D models on a tablet — useful for clash review on site',
              'Sign off Daily Logs and Meeting minutes from the site office',
              'Available on iOS (App Store) and Android (Google Play) — search "Autodesk Construction Cloud"',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'The ACC Home screen shows all your projects; the Project Home provides module navigation and project overview for a single project.',
      'The left sidebar is the primary module navigation; clicking a module icon takes you to that module.',
      'The global toolbar provides notifications, global search, and profile settings consistent across all modules.',
      'ACC uses three permission layers: Hub role, Project role, and Module permission — each user sees only what they have been given access to.',
      'The Docs module is the primary document interface, with a folder tree on the left and document list in the main panel.',
      'The ACC mobile app provides offline document access, issue and RFI management, and form completion for site teams.',
    ],
    resource: { label: 'ACC Interface Quick Reference Card', type: 'PDF' },
    quiz: { label: 'ACC Interface Quiz', questions: 10, time: '5 min' },
    prev: { id: 'acc-2', title: 'Setting Up an ACC Account, Hub & Project' },
    next: { id: 'acc-4', title: 'ACC Docs — Uploading & Organising Project Documents' },
  },

  // ============================================================
  // LESSON ACC-04 — Uploading & Organising Project Documents
  // ============================================================
  {
    id: 'acc-4', num: '04',
    title: 'ACC Docs — Uploading & Organising Project Documents',
    topic: 'Document Management', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'Master document upload, folder structure, metadata, and organisation within ACC Docs — the project CDE layer.',
    intro: `A Common Data Environment is only as good as the information structure inside it. ACC Docs can absorb any file type and store it in the cloud — but without a deliberate folder structure and metadata strategy, a project's CDE becomes an expensive shared drive that nobody trusts. This lesson covers how to upload documents correctly, how to structure folders effectively, and what metadata to capture at upload to make the CDE work for the whole team throughout the project.`,
    sections: [
      {
        id: 's1', heading: 'What Lives in ACC Docs?', level: 'h2',
        content: `ACC Docs is the document management layer of the platform — every piece of project information is stored, versioned, and controlled here. Understanding what types of files go into Docs (and what goes into Sheets, which is separate) avoids common structural mistakes.`,
        items: [
          '**Design drawings** — DWG, PDF, and other 2D drawing formats (published drawings go to Sheets; work-in-progress go to Docs)',
          '**BIM models** — RVT, IFC, NWD, NWC, and other 3D model files',
          '**Specifications** — DOCX, PDF, Excel-based specifications and schedules',
          '**Reports** — structural calculations, consultant reports, survey reports, inspection records',
          '**Contracts and legal** — contract documents, procurement schedules, warranties (in appropriately restricted folders)',
          '**Correspondence** — letters, meeting minutes, transmittal records',
          '**As-built information** — O&M manuals, commissioning records, handover documentation',
        ],
        formula: { label: 'Docs vs Sheets', text: 'Docs = document repository | Sheets = published drawing register | Both are needed, but for different purposes' },
      },
      {
        id: 's2', heading: 'Uploading Documents', level: 'h2',
        content: `Uploading to ACC Docs is designed to be straightforward — but there are several settings to get right at the point of upload to ensure documents are correctly managed.`,
        subsections: [
          {
            heading: 'Upload Methods',
            items: [
              '**Drag and drop** — drag files directly onto the document list area in any folder',
              '**Upload button** — click the Upload button in the top right and browse for files',
              '**Folder upload** — upload an entire folder structure from your local machine',
              '**Connector upload** — sync files from AutoCAD, Civil 3D, or Revit directly to a connected folder',
              '**Bulk upload** — select multiple files and upload in a single batch',
              'File size limits: individual files up to 20 GB; most BIM project files are well within this',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Supported File Types', level: 'h2',
        content: `ACC Docs accepts almost any file type for storage and versioning. A subset of file types are also **viewable in the browser** using Autodesk's online viewer — no download required.`,
        code: {
          label: 'Viewable File Types in ACC',
          lines: [
            '2D drawings    → DWG, DXF, PDF, DGN',
            '3D models      → RVT, IFC, NWD, NWC, OBJ, FBX, STL',
            'Images         → JPG, PNG, GIF, SVG',
            'Documents      → PDF (viewable inline), DOCX (viewable), XLSX (viewable)',
            '',
            'Non-viewable (stored but not previewed):',
            '  → ZIP, RAR, MDB, custom proprietary formats',
            '',
            'Note: RVT files require a Revit-licensed viewer connection',
            'for full model properties; a visual preview loads otherwise',
          ],
        },
      },
      {
        id: 's4', heading: 'Folder Structure Best Practices', level: 'h2',
        content: `The folder structure in ACC Docs is your CDE architecture. It controls how information is organized, who can see what (via folder-level permissions), and how information flows through the project lifecycle.`,
        code: {
          label: 'Recommended ACC Docs Folder Structure',
          lines: [
            '01 - Project Management',
            '  01.1 - Contracts',
            '  01.2 - Programme',
            '  01.3 - Meeting Minutes',
            '',
            '02 - Design',
            '  02.1 - Architecture [WIP]',
            '  02.2 - Architecture [Shared]',
            '  02.3 - Structure [WIP]',
            '  02.4 - Structure [Shared]',
            '  02.5 - MEP [WIP]',
            '  02.6 - MEP [Shared]',
            '',
            '03 - BIM Models',
            '  03.1 - Federated Models',
            '  03.2 - Coordination (Clash Reports)',
            '',
            '04 - Specifications',
            '',
            '05 - Correspondence',
            '',
            '06 - Site Records',
            '  06.1 - Daily Logs',
            '  06.2 - Inspection Reports',
            '',
            '07 - Handover',
            '  07.1 - O&M Manuals',
            '  07.2 - As-Built Drawings',
          ],
        },
        formula: { label: 'CDE Information Flow', text: 'WIP (restricted) → Shared (controlled) → Published (all access) — information flows forward, never back' },
      },
      {
        id: 's5', heading: 'Document Metadata', level: 'h2',
        content: `Metadata captures structured information about each document — what it is, who produced it, and what its status is. ACC Docs has both system-generated metadata and custom metadata fields.`,
        items: [
          '**System metadata** — file name, file size, date uploaded, uploaded by, version number (all automatic)',
          '**Document type** — built-in type classification (Drawing, Model, Specification, etc.)',
          '**Discipline** — which design discipline the document belongs to (Architecture, Structure, MEP, Civil)',
          '**Custom attributes** — project-specific fields you create: "Drawing Status," "Contract Number," "Client Approval Reference"',
          'Custom attributes are defined at Hub level and applied to all projects within the Hub',
          'Custom attributes can be made mandatory at upload — ensuring every document has the right metadata before entering the CDE',
        ],
      },
      {
        id: 's6', heading: 'Document Status Workflow', level: 'h2',
        content: `ACC Docs includes a **Status** field for each document. Status indicates where in the document approval workflow a file currently sits — particularly important in ISO 19650-compliant CDEs.`,
        subsections: [
          {
            heading: 'Common Status Values',
            items: [
              '**In Review** — the document has been uploaded and is awaiting review or approval',
              '**Approved** — the document has been reviewed and approved for use',
              '**Approved for Construction (AFC)** — approved and authorised for use on site',
              '**Rejected** — reviewed but does not meet requirements; revision required',
              '**Superseded** — a newer version exists; retained for record but should not be used',
              'Status values can be customised in Account Admin to match your firm\'s standard workflow',
            ],
          },
        ],
      },
      {
        id: 's7', heading: 'Finding Documents — Search and Filters', level: 'h2',
        content: `As a project grows, quick document retrieval becomes critical. ACC Docs provides several methods for finding documents efficiently.`,
        items: [
          '**Folder navigation** — browse the folder tree to navigate to the correct location',
          '**Search bar** — type part of the file name or document number; results filter instantly across all accessible folders',
          '**Filter by type** — filter the document list by file type (PDF, DWG, RVT) to narrow results',
          '**Filter by status** — show only documents with a specific status (e.g., all "Approved for Construction" documents)',
          '**Filter by discipline** — show only Architecture or MEP documents',
          '**Sort columns** — sort by name, date uploaded, version, or custom attributes',
          '**Saved filters** — save a filter combination for repeated use throughout the project',
        ],
      },
    ],
    takeaways: [
      'ACC Docs is the document management layer of the CDE — every project file type (models, drawings, specs, reports) is stored here.',
      'Documents can be uploaded via drag and drop, the upload button, bulk upload, or direct connector from Revit and AutoCAD.',
      'Most common BIM file types (DWG, PDF, RVT, IFC, NWD) are viewable in the browser without downloading.',
      'Folder structure is the CDE architecture — use a consistent WIP → Shared → Published pattern aligned with ISO 19650.',
      'Metadata (document type, discipline, custom attributes) captured at upload enables effective retrieval and filtering throughout the project.',
      'Document status (In Review, Approved, AFC, Superseded) tracks the workflow state of each file through the project lifecycle.',
    ],
    resource: { label: 'ACC Docs Setup & Structure Guide', type: 'PDF' },
    quiz: { label: 'ACC Docs Upload & Organisation Quiz', questions: 10, time: '5 min' },
    prev: { id: 'acc-3', title: 'Understanding the ACC Interface — Modules, Navigation & Roles' },
    next: { id: 'acc-5', title: 'ACC Docs — File Versioning, Revisions & Superseded Documents' },
  },

  // ============================================================
  // LESSON ACC-05 — File Versioning, Revisions & Superseded Documents
  // ============================================================
  {
    id: 'acc-5', num: '05',
    title: 'ACC Docs — File Versioning, Revisions & Superseded Documents',
    topic: 'Document Management', cat: 'beginner', readTime: '8 min', free: false,
    desc: 'Understand how ACC manages file versions, formal document revisions, and superseded records in a controlled document environment.',
    intro: `On a live project, documents change constantly. A drawing is issued, revised, reissued, revised again — and at any point, a contractor might pull an old version from a poorly managed system and build from superseded information. This is one of the most dangerous failures in construction information management. ACC's versioning and revision system is designed to prevent it — but only if the team understands how to use it correctly.`,
    sections: [
      {
        id: 's1', heading: 'Version vs Revision — A Critical Distinction', level: 'h2',
        content: `In ACC Docs, **version** and **revision** are two different concepts that serve different purposes. Confusing them leads to poor document control.`,
        code: {
          label: 'Version vs Revision in ACC',
          lines: [
            'VERSION',
            '  → Created every time a file is uploaded to the same location',
            '  → Automatic — ACC creates v1, v2, v3 each upload',
            '  → Used for: tracking minor changes, work-in-progress updates',
            '  → Access: via the version history panel on any document',
            '',
            'REVISION',
            '  → A formal, deliberate step in the document control process',
            '  → Linked to a document number revision suffix (Rev A, Rev B, 01, 02...)',
            '  → Used for: formally issued documents with a specific revision state',
            '  → Creates a superseded record of the previous revision',
            '  → Triggered manually — upload a new version and increment the revision',
            '',
            'Version = "we saved it again"',
            'Revision = "we formally issued a new version to the team"',
          ],
        },
      },
      {
        id: 's2', heading: 'Uploading a New Version of a Document', level: 'h2',
        content: `When you upload a file with the same name to the same folder in ACC Docs, the platform recognises it as a new version of the existing document — rather than creating a duplicate.`,
        subsections: [
          {
            heading: 'New Version Upload Steps',
            items: [
              'Navigate to the folder containing the existing document',
              'Drag the updated file onto the document in the list, or right-click → "Upload New Version"',
              'ACC compares the file name and prompts you to confirm this is a new version',
              'Confirm — the document list now shows the latest version',
              'Previous versions are retained in the version history',
              'The version number increments automatically (v1 → v2 → v3)',
            ],
          },
        ],
        formula: { label: 'Version Control Rule', text: 'Upload to the same folder with the same file name to create a new version — never rename a file to "update" it' },
      },
      {
        id: 's3', heading: 'Viewing Version History', level: 'h2',
        content: `Every document in ACC Docs has a complete version history — a record of every file that has ever been uploaded as a version of that document.`,
        items: [
          'Click on any document to open its detail panel',
          'Select "Version History" from the tabs in the detail panel',
          'Each version shows: version number, date/time uploaded, uploaded by (user name), file size, and status',
          'Click any version to view or download that specific version',
          'The "Current" label identifies the most recent (active) version',
          'Previous versions are retained indefinitely — they cannot be deleted without administrator action, creating a permanent audit trail',
        ],
      },
      {
        id: 's4', heading: 'Revisions in ACC Docs', level: 'h2',
        content: `The **Revision** field in ACC tracks the formal revision state of a document. Unlike version numbers (which are automatic), revisions are managed manually and represent formal control points in the document lifecycle.`,
        code: {
          label: 'Common Revision Naming Conventions',
          lines: [
            'Alphabetical (most common for UK/ANZ projects):',
            '  Rev A → Rev B → Rev C → ...',
            '  Used during design; letters progress with each formal issue',
            '',
            'Numerical (common for contractor submittals):',
            '  Rev 01 → Rev 02 → Rev 03 → ...',
            '',
            'Status-prefixed (ISO 19650 aligned):',
            '  S0 (Work in progress) → S1 (Suitable for coordination)',
            '  → S2 (Suitable for information) → S3 (Suitable for construction)',
            '',
            'In ACC: set the revision via the custom attribute field at upload',
            'or via the document properties panel after upload',
          ],
        },
      },
      {
        id: 's5', heading: 'Superseded Documents', level: 'h2',
        content: `A **superseded** document is one that has been replaced by a newer revision. In a well-managed CDE, superseded documents are retained for record but clearly marked so that team members cannot accidentally use out-of-date information.`,
        items: [
          'When a new revision is issued in ACC, the previous revision can be set to "Superseded" status',
          'Superseded documents remain visible in the folder with a clear visual indicator',
          'The default view in Docs filters to show only the current (non-superseded) documents',
          'Users must actively choose to view superseded files — reducing the risk of accidental use',
          'Superseded documents cannot be deleted — they are retained as a legal and audit record',
          'Set a document to Superseded via: right-click → Edit Properties → Status → Superseded',
        ],
      },
      {
        id: 's6', heading: 'Transmittals and Revision Control', level: 'h2',
        content: `The formal relationship between document revisions and transmittals is covered in detail in Lesson acc-7. However, understanding the connection now helps clarify why revision control in ACC Docs matters beyond internal document management.`,
        subsections: [
          {
            heading: 'Why Revision Control Matters for Transmittals',
            items: [
              'A transmittal in ACC is a formal issue — which documents were sent, at which revision, to which parties, on which date',
              'If revision numbering is not managed consistently in Docs, transmittal records become unreliable',
              'Claims and disputes on construction projects frequently hinge on whether the correct revision was issued',
              'ACC\'s version history and transmittal records together provide a legally defensible audit trail of document issue history',
            ],
          },
        ],
      },
      {
        id: 's7', heading: 'Common Versioning Mistakes', level: 'h2',
        content: `**Mistake:**
Uploading a new version with a different file name. ACC will not recognise it as a version of the existing document — it creates a separate file. Always keep the file name consistent for documents in active revision.

**Mistake:**
Not setting superseded status on old revisions. If both Rev A and Rev B are visible without status differentiation, contractors will inevitably pick the wrong one.

**Best Practice:**
Establish a document naming convention before the project starts and communicate it to all contributors. A consistent file naming standard (e.g., ProjectCode-Discipline-DrawingNumber-RevisionCode) makes version management automatic and reliable.`,
      },
    ],
    takeaways: [
      'Version and Revision are different: versions are automatic uploads; revisions are formal, deliberate document control steps.',
      'Upload a new version by dragging the updated file onto the existing document in the same folder with the same file name.',
      'Version history is retained permanently for every document — an audit trail of every upload, with who uploaded and when.',
      'Revisions (Rev A, Rev B, or 01, 02) are managed via custom attributes and represent the formal issue state of a document.',
      'Superseded status marks old revisions as replaced — the default Docs view hides superseded documents to prevent accidental use.',
      'Maintain a consistent file naming convention from project start — it makes automatic version recognition reliable and dependable.',
    ],
    resource: { label: 'ACC Docs Version Control Reference', type: 'PDF' },
    quiz: { label: 'File Versioning & Revisions Quiz', questions: 10, time: '5 min' },
    prev: { id: 'acc-4', title: 'ACC Docs — Uploading & Organising Project Documents' },
    next: { id: 'acc-6', title: 'ACC Docs — Permissions, Folder Structure & the CDE in Practice' },
  },

  // ============================================================
  // LESSON ACC-06 — Permissions, Folder Structure & the CDE in Practice
  // ============================================================
  {
    id: 'acc-6', num: '06',
    title: 'ACC Docs — Permissions, Folder Structure & the CDE in Practice',
    topic: 'Document Management', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'Configure folder-level permissions, design the CDE folder structure, and understand how information flows correctly through the four CDE states.',
    intro: `The Common Data Environment concept sounds simple in theory: one place for all project information, controlled access, clear revision history. In practice, setting one up correctly in ACC requires understanding how permissions layer across the folder structure, how information flows between CDE states, and how to configure the whole thing so that the right people see the right documents at the right time. Get this right and the CDE actively manages information for you. Get it wrong and teams bypass it entirely.`,
    sections: [
      {
        id: 's1', heading: 'Permission Levels in ACC Docs', level: 'h2',
        content: `ACC Docs uses a layered permission model. Permissions are set at the folder level and apply to everything inside that folder, including all subfolders and documents, unless explicitly overridden.`,
        code: {
          label: 'ACC Docs Permission Levels',
          lines: [
            'View              → Can see and download documents; cannot upload or edit',
            'View + Download   → View plus explicit download (for restricted DRM content)',
            'Edit              → Can upload new versions and edit document metadata',
            'Manage            → Can create subfolders, rename items, manage permissions',
            '',
            'Permission inheritance:',
            '  Parent folder permission applies to all subfolders by default',
            '  Override a subfolder with stricter or more permissive settings',
            '  Overrides apply downward from the overridden folder',
            '',
            'Permission sets:',
            '  Assign permissions to individual users OR to companies',
            '  Company-level permissions apply to all members of that company',
          ],
        },
      },
      {
        id: 's2', heading: 'Designing the Folder Permission Structure', level: 'h2',
        content: `The folder structure and permission structure must be designed together. Folders exist to organize documents; permissions exist to control access. In an ISO 19650 CDE, the two work hand-in-hand with the CDE states.`,
        subsections: [
          {
            heading: 'Typical Permission Assignments',
            items: [
              '**WIP folders** (Work in Progress) — accessible only to the originating discipline; no access for client or other consultants',
              '**Shared folders** — accessible to all project consultants; the discipline that owns the folder has Edit access, others have View',
              '**Published folders** — accessible to all project members including contractors and client; no team has Edit access (Project Admin only)',
              '**Handover folders** — accessible to client, facilities manager, and handover parties at project completion',
              'The contractor should never have access to the architect\'s WIP folder — only to what has been formally Shared or Published',
            ],
          },
        ],
        formula: { label: 'CDE Access Rule', text: 'WIP = originating discipline only | Shared = all consultants | Published = all members | Handover = client & FM' },
      },
      {
        id: 's3', heading: 'The Four CDE States in ACC', level: 'h2',
        content: `ISO 19650 defines four states for information in a CDE. ACC Docs implements these through a combination of folder structure, document status, and permission levels.`,
        code: {
          label: 'ISO 19650 CDE States in ACC Docs',
          lines: [
            'STATE 1: Work in Progress (WIP)',
            '  → Being created; not yet checked or approved',
            '  → In ACC: WIP folder, restricted to originating discipline',
            '  → Status: "Draft" or no formal status',
            '',
            'STATE 2: Shared',
            '  → Checked within originating discipline; ready for others',
            '  → In ACC: Shared folder, View access for all consultants',
            '  → Status: "Suitable for Coordination"',
            '  → This is the source for coordination and clash detection',
            '',
            'STATE 3: Published',
            '  → Formally approved and issued to the wider project team',
            '  → In ACC: Published folder (or via Sheets for drawings)',
            '  → Status: "Approved for Construction" or "Issued for Information"',
            '',
            'STATE 4: Archived / Superseded',
            '  → Superseded by a newer revision; retained for record only',
            '  → In ACC: status set to "Superseded"; hidden from default view',
          ],
        },
      },
      {
        id: 's4', heading: 'Setting Folder Permissions — Step by Step', level: 'h2',
        content: `Setting permissions in ACC Docs requires Project Administrator access and is done folder by folder, or by role/company.`,
        subsections: [
          {
            heading: 'How to Set Folder Permissions',
            items: [
              'In the Docs module, right-click the folder you want to configure',
              'Select "Edit Permissions" from the context menu',
              'The Permissions dialog shows current assignments for this folder',
              'Click "Add Role / Member / Company" to add a new permission assignment',
              'Select the user, company, or role from the project member list',
              'Choose the permission level: View, Edit, or Manage',
              'Check "Apply to subfolders" to cascade permissions downward',
              'Click Save — the new permission takes effect immediately',
            ],
          },
        ],
      },
      {
        id: 's5', heading: 'Custom Permission Sets', level: 'h2',
        content: `Rather than assigning permissions folder-by-folder to individual users, ACC allows you to create **Permission Sets** — named bundles of permissions applied to members or companies across the project.`,
        items: [
          'Permission Sets are created in Project Settings → Docs → Permission Sets',
          'A set defines a collection of folder-level access rules: "Architect can Edit 02.1 and View 02.4"',
          'Assign a Permission Set to a user when adding them to the project',
          'If a member\'s role changes, update the Permission Set — changes apply across all folders simultaneously',
          'Permission Sets are particularly valuable for projects with large teams or multiple companies in the same role',
          'Example sets: "Architect," "Structural Engineer," "Main Contractor Site Team," "Client Observer"',
        ],
      },
      {
        id: 's6', heading: 'Information Flow in Practice — A Design Team Example', level: 'h2',
        content: `A practical example of how CDE information flows through a typical design-and-construction project using ACC Docs.`,
        code: {
          label: 'CDE Workflow Example — Architecture Drawing',
          lines: [
            '1. Architect uploads GA Floor Plan PDF to:',
            '   02.1 Architecture [WIP]',
            '   Status: Draft | Permission: Arch team only',
            '',
            '2. Internal review complete. Architect moves drawing to:',
            '   02.2 Architecture [Shared]',
            '   Status: Suitable for Coordination',
            '   Permission: All consultants, View',
            '',
            '3. Structural engineer reviews → identifies column conflict.',
            '   Creates an Issue in Build for coordination.',
            '',
            '4. Architect resolves issue, uploads Rev B to Shared folder.',
            '   Previous Rev A → Status set to Superseded.',
            '',
            '5. Design team signs off Rev B. BIM Manager publishes to:',
            '   02 Design [Published]',
            '   Status: Approved for Construction',
            '   Permission: All project members, View',
            '',
            '6. Contractor downloads and builds from Rev B.',
          ],
        },
      },
      {
        id: 's7', heading: 'Common CDE Configuration Mistakes', level: 'h2',
        content: `**Mistake:**
Everyone gets Edit access to all folders. This turns the CDE into an uncontrolled shared drive where anyone can overwrite anything. Keep WIP and Shared folder edit access to the originating team only.

**Mistake:**
Skipping the Shared state — uploading directly from WIP to Published. The Shared state exists for cross-discipline coordination before formal issue. Skipping it means clashes are discovered after publication, not before.

**Best Practice:**
Run a permissions audit every 4–8 weeks on a large project. Team members join and leave, companies are added, scopes change. Outdated permissions are a security and information risk that builds up silently over time.`,
      },
    ],
    takeaways: [
      'ACC Docs uses folder-level permissions (View, Edit, Manage) that cascade to subfolders and documents within them.',
      'Design folder permissions and folder structure together — the two must align with CDE state logic.',
      'The four CDE states (WIP, Shared, Published, Archived) are implemented in ACC through folder structure, document status, and permission levels.',
      'Custom Permission Sets bundle folder permissions by role and apply them to new team members instantly at onboarding.',
      'In practice: WIP is originator-only, Shared is all consultants with View, Published is all project members with View.',
      'Run a permissions audit every 4–8 weeks on large projects — team changes silently corrupt permission structures over time.',
    ],
    resource: { label: 'ACC CDE Configuration Checklist', type: 'PDF' },
    quiz: { label: 'ACC Docs Permissions & CDE Quiz', questions: 10, time: '5 min' },
    prev: { id: 'acc-5', title: 'ACC Docs — File Versioning, Revisions & Superseded Documents' },
    next: { id: 'acc-7', title: 'ACC Docs — Transmittals & the Formal Issue Process' },
  },

  // ============================================================
  // LESSON ACC-07 — Transmittals & the Formal Issue Process
  // ============================================================
  {
    id: 'acc-7', num: '07',
    title: 'ACC Docs — Transmittals & the Formal Issue Process',
    topic: 'Document Management', cat: 'beginner', readTime: '8 min', free: false,
    desc: 'Create, send, and track formal document transmittals in ACC — the record of what was issued, to whom, and when.',
    intro: `A transmittal is the formal record that a set of documents was issued to a specific party at a specific time in a specific revision state. It is, in legal terms, proof that the contractor received the drawing they built from. Without a transmittal system, "I never received that revision" is an unanswerable claim in a dispute. ACC Docs provides a built-in transmittal system that automates this record-keeping — but only if the team understands what a transmittal is and when to issue one.`,
    sections: [
      {
        id: 's1', heading: 'What is a Transmittal?', level: 'h2',
        content: `A **transmittal** is a formal document issue record — a structured record of which documents (at which revision numbers) were sent to which recipients, for what purpose, on what date. It is distinct from simply sharing a file because:`,
        items: [
          'It identifies the specific revision of each document being issued — no ambiguity about which version was sent',
          'It records who it was sent to — named individuals and/or companies',
          'It records the purpose of the issue — "Issued for Construction," "Issued for Coordination," "Issued for Information"',
          'It optionally requires a response or acknowledgement from the recipient',
          'It creates a permanent, timestamped record in the CDE that cannot be altered after issue',
          'In legal disputes, the transmittal register is often the key evidence for determining responsibility for information failures',
        ],
        formula: { label: 'Transmittal Principle', text: 'Transmittal = formal proof that information was issued, in which revision, to which party, for which purpose' },
      },
      {
        id: 's2', heading: 'Creating a Transmittal in ACC', level: 'h2',
        content: `Transmittals in ACC are created within the Docs module. The process involves selecting the documents to include, setting the issue purpose, and identifying the recipients.`,
        subsections: [
          {
            heading: 'Creating a Transmittal — Step by Step',
            items: [
              'In the Docs module, navigate to the folder containing the documents to be transmitted',
              'Select the documents (checkboxes to the left of each file name)',
              'Click "Transmit" in the toolbar (or right-click → Transmit)',
              'Set the **Issue Purpose** (Issued for Construction, Issued for Coordination, For Approval, For Information, etc.)',
              'Add a **Message** — a brief note about what is being issued and why',
              'Add **Recipients** — search from the project member list; enter an external email if not in the project',
              'Review the document list — confirm revision numbers are correct before sending',
              'Click **Send** — the transmittal is created, recipients are notified by email, and the record is stored in the Transmittal Register',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Issue Purposes', level: 'h2',
        content: `The Issue Purpose defines why documents are being transmitted. Using the correct purpose code is important for document control clarity and downstream reference in the transmittal register.`,
        code: {
          label: 'Standard Issue Purposes',
          lines: [
            'IFI     → Issued for Information',
            '          Recipient is being informed; no action required',
            '',
            'IFC     → Issued for Construction',
            '          Recipient can build from this document',
            '          The highest-authority issue purpose',
            '',
            'IFCoord → Issued for Coordination',
            '          Use for coordination review; not for construction',
            '',
            'IFA     → Issued for Approval',
            '          Recipient must review and approve/reject; response required',
            '',
            'IFR     → Issued for Review',
            '          Recipient should review and provide comments',
            '',
            'IFT     → Issued for Tender',
            '          For procurement purposes; construction not authorised',
            '',
            'Custom purposes can be added in Project Settings',
          ],
        },
      },
      {
        id: 's4', heading: 'The Transmittal Register', level: 'h2',
        content: `Every transmittal created in ACC is recorded in the **Transmittal Register** — a searchable, filterable log of all formal document issues in the project.`,
        items: [
          'Access the Transmittal Register from Docs → Transmittals (left sidebar in Docs)',
          'Each entry shows: transmittal number, date, issue purpose, sender, documents included, recipients',
          'Click any transmittal to open it and see full detail, including all documents and revisions at time of issue',
          'Recipients can view transmittals sent to them from the Transmittals section',
          'Filter the register by: sender, recipient, date range, issue purpose, or document included',
          'Export the register as a CSV or PDF for project records or contract administration',
        ],
      },
      {
        id: 's5', heading: 'Transmittal Responses', level: 'h2',
        content: `Some transmittals require a formal response from the recipient — particularly those issued "For Approval" or "For Review." ACC tracks the response workflow and indicates when a response is outstanding.`,
        subsections: [
          {
            heading: 'Response Workflow',
            items: [
              'Recipient receives an email notification with a link to the transmittal',
              'Recipient opens the transmittal in ACC and reviews the included documents',
              'If a response is required: click "Respond" and select the response status',
              'Common response codes: **Approved**, **Approved with Comments**, **Rejected**, **Revise and Resubmit**',
              'The response is recorded in the transmittal and the original sender is notified',
              'Outstanding responses are visible in the register with a "Pending Response" indicator',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Transmittals vs Issues vs RFIs', level: 'h2',
        content: `New ACC users frequently confuse transmittals, issues, and RFIs. Each serves a different purpose in the project communication workflow.`,
        code: {
          label: 'Comparing Communication Types in ACC',
          lines: [
            'TRANSMITTAL',
            '  → Formal record of document issue',
            '  → Who received what, at which revision, when',
            '  → No action required by default (unless "For Approval")',
            '',
            'ISSUE (Build module)',
            '  → A problem, task, or observation requiring action',
            '  → Assigned to a specific person with a due date and status',
            '  → Can reference a document or location on a drawing/model',
            '',
            'RFI (Request for Information)',
            '  → A formal query from contractor to designer',
            '  → Requires a formal written response within agreed timeframe',
            '  → Tracked with ball-in-court responsibility',
            '',
            'Use the right tool for the right purpose:',
            '  Missing information        → RFI',
            '  Drawing needs issuing      → Transmittal',
            '  Defect found on site       → Issue',
          ],
        },
      },
      {
        id: 's7', heading: 'Transmittal Best Practices', level: 'h2',
        content: `**Best Practice:**
Issue transmittals for every formal document package — do not rely on emails or shared links as the record of issue. The transmittal register is the auditable history of what was issued and when.

**Best Practice:**
Use issue purpose codes consistently. Establish the purpose codes for the project in the BIM Execution Plan and make sure all team members issuing transmittals use them correctly.

**Best Practice:**
Set response requirements for "For Approval" transmittals. If you expect a formal approval response, configure the transmittal to require one — ACC will track it as outstanding until it is received.`,
      },
    ],
    takeaways: [
      'A transmittal is the formal record that documents were issued to specific parties at a specific revision for a specific purpose.',
      'Create transmittals by selecting documents in Docs, clicking Transmit, and setting issue purpose, message, and recipients.',
      'Issue purpose codes (IFI, IFC, IFA, IFCoord) define why documents are being transmitted and what action is expected of the recipient.',
      'The Transmittal Register is a permanent, searchable log of every formal document issue in the project.',
      'Transmittal responses (Approved, Approved with Comments, Rejected) are tracked for "For Approval" transmittals.',
      'Transmittals differ from Issues (action-required observations) and RFIs (formal contractor queries requiring a designer response).',
    ],
    resource: { label: 'ACC Transmittal Workflow Guide', type: 'PDF' },
    quiz: { label: 'Transmittals & Issue Process Quiz', questions: 10, time: '5 min' },
    prev: { id: 'acc-6', title: 'ACC Docs — Permissions, Folder Structure & the CDE in Practice' },
    next: { id: 'acc-8', title: 'Sharing & Collaborating — Members, Companies & Permission Sets' },
  },

  // ============================================================
  // LESSON ACC-08 — Members, Companies & Permission Sets
  // ============================================================
  {
    id: 'acc-8', num: '08',
    title: 'Sharing & Collaborating — Members, Companies & Permission Sets',
    topic: 'Document Management', cat: 'beginner', readTime: '8 min', free: false,
    desc: 'Add members, manage companies, and configure permission sets to build the correct access structure for your project team.',
    intro: `The most common complaint about any CDE is that people either can't find what they need or can see things they shouldn't. Both failures come from the same root cause: poorly managed members, companies, and permissions. Getting the team access structure right is not a one-time setup task — it is ongoing project administration that follows the team as it grows, changes, and eventually winds down. This lesson covers how to manage it correctly in ACC from day one.`,
    sections: [
      {
        id: 's1', heading: 'Members vs Companies', level: 'h2',
        content: `ACC distinguishes between individual **Members** and the **Companies** they belong to. This distinction is important because many permission decisions are made at the company level, which then applies to all members of that company.`,
        code: {
          label: 'Members vs Companies in ACC',
          lines: [
            'COMPANY',
            '  → An organisation added to the project',
            '  → Examples: "Dharren Park Architects", "ABC Contractors"',
            '  → Defined in Account Administration',
            '  → Can be assigned folder permissions and module access',
            '',
            'MEMBER',
            '  → An individual user on the project',
            '  → Every member belongs to one company',
            '  → Inherits their company\'s permissions',
            '  → Can have additional or more restricted individual permissions',
            '',
            'Best practice: assign permissions to Companies, not individuals',
            '→ New architect joins? They automatically inherit correct access',
            '→ Someone leaves? Remove them; others\' access is unaffected',
          ],
        },
      },
      {
        id: 's2', heading: 'Adding Members to a Project', level: 'h2',
        content: `Members are added at the project level by a Project Administrator. There are two pathways depending on whether the person already has an Autodesk ID linked to your Hub.`,
        subsections: [
          {
            heading: 'Adding a Member',
            items: [
              'Navigate to Project Settings → Members',
              'Click **Add Members**',
              'Search by email address — if they already have an Autodesk ID, they appear instantly',
              'Select their **Company** from the project company list',
              'Select their **Project Role**: Administrator or Member',
              'Optionally, assign a **Permission Set** at this point to define their Docs access',
              'Click **Add to Project** — they receive an email invitation and appear in the member list',
              'If they do not have an Autodesk ID, ACC sends them an invitation to create one',
            ],
          },
        ],
        formula: { label: 'Access Activation', text: 'New members gain access immediately upon being added — they do not need to accept an invitation first' },
      },
      {
        id: 's3', heading: 'Project Roles', level: 'h2',
        content: `Every member on an ACC project has one of two project-level roles: **Administrator** or **Member**. This is separate from their folder-level permissions within Docs.`,
        items: [
          '**Project Administrator** — full control of project settings, member management, module activation, and all documents regardless of folder permissions',
          '**Project Member** — can use the modules and access the folders they have been given permission to; cannot manage project settings or other members',
          'A large project typically has 2–4 Project Administrators: the BIM Manager, Project Manager, and possibly the client\'s representative',
          'Most people on a project — consultants, contractors, subcontractors — should be Project Members',
          'Giving everyone Administrator access is a security risk and makes permission management unmanageable',
          'Admin access should be reviewed quarterly and removed from anyone who no longer needs it',
        ],
      },
      {
        id: 's4', heading: 'Managing Companies', level: 'h2',
        content: `Companies are the organisational units in ACC. Before adding members from a new organisation, that company must be added to the project (or already exist in your Hub's company directory).`,
        subsections: [
          {
            heading: 'Adding a Company to a Project',
            items: [
              'Navigate to Project Settings → Companies',
              'Click **Add Company**',
              'Search the Hub company directory — if the company is already in your Hub, it appears immediately',
              'If it is a new company, click "Add New Company" and enter their name and trade/type',
              'Assign a **Trade / Category** to help filter and report by company type',
              'Once added, members from that company can be added to the project and assigned to that company',
            ],
          },
        ],
      },
      {
        id: 's5', heading: 'Permission Sets', level: 'h2',
        content: `A **Permission Set** in ACC is a named bundle of Docs folder permissions. Instead of configuring individual folder access for every new team member, you create a Permission Set that captures the typical access pattern for a role, then assign that set to new members at onboarding.`,
        code: {
          label: 'Example Permission Sets',
          lines: [
            'Permission Set: "Architect"',
            '  01 Project Management        → View',
            '  02.1 Architecture [WIP]      → Edit',
            '  02.2 Architecture [Shared]   → Edit',
            '  02.4 Structure [Shared]      → View',
            '  03 BIM Models                → View',
            '',
            'Permission Set: "Main Contractor"',
            '  01 Project Management        → View',
            '  02 Design [Published]        → View',
            '  03 BIM Models [Shared]       → View',
            '  06 Site Records              → Edit',
            '  07 Handover                  → View',
            '',
            'Permission Set: "Client Observer"',
            '  All Published folders        → View',
            '  No WIP or Shared access',
          ],
        },
      },
      {
        id: 's6', heading: 'Removing Members and Offboarding', level: 'h2',
        content: `When a team member leaves a project or a company's scope ends, their access must be removed promptly. In ACC, member access termination is immediate.`,
        items: [
          'Navigate to Project Settings → Members',
          'Search for the member to be removed',
          'Click the three-dot menu next to their name → Remove from Project',
          'Confirm the removal — their access to all modules and documents is revoked immediately',
          'Documents uploaded by the removed member remain in the project; their uploads are not deleted',
          'Transmittals, Issues, and RFIs they were part of retain their contribution records for audit purposes',
          'For temporary access (e.g., a subcontractor with a time-limited scope), set an access end date rather than waiting for manual removal',
        ],
      },
      {
        id: 's7', heading: 'Module-Level Permissions', level: 'h2',
        content: `In addition to Docs folder permissions, ACC allows you to set module-level access for each member or company. This controls whether a person can use Build, Coordinate, Cost, Sheets, and other modules at all.`,
        subsections: [
          {
            heading: 'Module Access Levels',
            items: [
              '**No access** — module not visible to the member',
              '**View** — can see data and records but cannot create or edit',
              '**Create/Edit** — can create and modify records (Issues, RFIs, Submittals, etc.)',
              '**Admin** — can configure module settings in addition to full Create/Edit access',
              'Set module access in: Project Settings → Members → click the member → Modules tab',
              'Or at onboarding via the Permission Set if it includes module access presets',
              'Common pattern: contractors have Build access (Create/Edit) but only View for Cost and Schedule',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'ACC distinguishes between Companies (organisations) and Members (individuals) — assign permissions at company level where possible for easiest management.',
      'Add members via Project Settings → Members, assigning them to the correct company and project role.',
      'Two project roles exist: Administrator (full control) and Member (access limited by permissions) — most people should be Members.',
      'Companies must be added to the project before members of that company can be added.',
      'Permission Sets bundle folder-level access rules into named roles, enabling consistent and fast onboarding for new team members.',
      'Module-level permissions control which modules each member can see and use — contractors typically have Build access but not Cost or Cost Admin.',
    ],
    resource: { label: 'ACC Members & Permissions Setup Guide', type: 'PDF' },
    quiz: { label: 'Members, Companies & Permissions Quiz', questions: 10, time: '5 min' },
    prev: { id: 'acc-7', title: 'ACC Docs — Transmittals & the Formal Issue Process' },
    next: { id: 'acc-9', title: 'Model Coordination — Setting Up a Coordination Space' },
  },

];
