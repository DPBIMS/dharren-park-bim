// ============================================================
// AUTODESK FORMA — LESSONS forma-1 through forma-8 (BEGINNER)
// Section: Forma Foundations
// File: lib/formaLessonsContent/formaLessons_1_8.js
// Index: lib/formaLessonsData.js
// Free lessons: forma-1, forma-2, forma-3
// ============================================================

export const lessons_1_8 = [

  // ============================================================
  // LESSON FORMA-01 — What is Autodesk Forma
  // ============================================================
  {
    id: 'forma-1', num: '01',
    title: 'What is Autodesk Forma & Where it Fits in the BIM Workflow',
    topic: 'Forma Basics', cat: 'beginner', readTime: '8 min', free: true,
    desc: 'Understand what Autodesk Forma is, where it came from, and why it changes how architects approach early-stage design.',
    intro: `Most design mistakes are made in the first few weeks of a project — when massing is loose, analysis is absent, and nobody has yet asked what wind will do to the pedestrian plaza. Autodesk Forma exists to close that gap. This lesson explains what Forma is, how it fits into the BIM workflow alongside tools like Revit, and why early-stage environmental intelligence is now a standard expectation rather than a luxury.`,
    sections: [
      {
        id: 's1', heading: 'What is Autodesk Forma?', level: 'h2',
        content: `**Autodesk Forma** is a cloud-based early-stage design platform that combines site modeling, massing tools, and AI-powered environmental analysis in one browser-based environment. It is designed for the critical early phase of a project — before detailed documentation starts in Revit — when design decisions have the greatest impact on how a building will perform for its occupants and its context.\n\nForma was originally developed by a Norwegian startup called **Spacemaker**, which Autodesk acquired in 2021. Spacemaker built the platform specifically to answer the question architects ask in concept design: "Which of these massing options is actually the best one?" — not just aesthetically, but in terms of daylight, wind, noise, and greenery.`,
        formula: { label: 'Forma Core Concept', text: 'Site + Massing + Environmental Analysis = Informed Early Design Decisions' },
      },
      {
        id: 's2', heading: 'From Spacemaker to Forma', level: 'h2',
        content: `Understanding Forma's origin explains why it works the way it does — as an analysis-first, architecture-led tool rather than a BIM authoring tool with analysis bolted on.`,
        subsections: [
          {
            heading: 'A Brief History',
            items: [
              '**2016** — Spacemaker AI is founded in Oslo, Norway, focused on automating urban design analysis',
              '**2017–2020** — The platform matures, adding solar, wind, noise, and daylight analysis for residential and mixed-use projects',
              '**2020** — Spacemaker releases its parametric massing engine, allowing generative building options from zoning rules',
              '**2021** — Autodesk acquires Spacemaker for approximately USD 240 million, integrating it into the AEC Collection',
              '**2022** — Rebranded as **Autodesk Forma**, with deeper connections to Revit, BIM 360, and Autodesk Construction Cloud',
              '**2023–present** — Forma is actively expanded with Revit plugin integration, IFC export, and AI-driven design suggestions',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Where Forma Fits in the BIM Workflow', level: 'h2',
        content: `Forma is not a replacement for Revit. It works at a different scale and a different phase of the project. Think of it as the tool that answers big questions before the detailed authoring work begins.`,
        code: {
          label: 'BIM Workflow — Where Forma Lives',
          lines: [
            'Phase 1: Early Design / Concept',
            '  ↳ Forma — site import, massing, environmental analysis, proposals',
            '',
            'Phase 2: Schematic Design',
            '  ↳ Forma (continued) + Revit (early model via Forma plugin)',
            '',
            'Phase 3: Design Development & Documentation',
            '  ↳ Revit — full BIM model, drawings, coordination',
            '',
            'Phase 4: Construction & Handover',
            '  ↳ Navisworks, ACC — coordination, clash, site use',
            '',
            'Forma answers: "Which direction should we go?"',
            'Revit answers: "How do we build this in detail?"',
          ],
        },
      },
      {
        id: 's4', heading: 'What Forma Actually Does', level: 'h2',
        content: `Forma combines five capabilities in a single browser-based environment — no software installation required for the core platform.`,
        items: [
          '**Site Modeling** — import real-world terrain, roads, and context buildings automatically from map data',
          '**Massing** — create and edit building volumes at concept level using simple push-pull geometry',
          '**Proposals** — manage multiple design alternatives within a single project for structured comparison',
          '**Environmental Analysis** — run solar, wind, noise, daylight, and greenery analyses directly on massing models',
          '**Revit Integration** — export geometry to Revit via the Forma plugin, or push Revit updates back to Forma for ongoing analysis',
        ],
      },
      {
        id: 's5', heading: 'Forma vs Revit — Different Tools, Same Project', level: 'h2',
        content: `The most common source of confusion for new Forma users is thinking the two tools compete. They do not.`,
        subsections: [
          {
            heading: 'Tool Comparison',
            items: [
              '**Forma** — browser-based, cloud-native, no local install, analysis-first, concept scale',
              '**Revit** — desktop-based, geometry-precise, documentation-ready, component scale',
              '**Forma** — works with loose massing volumes and approximate site data',
              '**Revit** — works with detailed elements (walls, doors, structural members)',
              '**Forma** — answers "should this building face south-west or south-east?"',
              '**Revit** — answers "what thickness is the south-west wall\'s insulation layer?"',
            ],
          },
        ],
        formula: { label: 'Design Principle', text: 'Fix the big things in Forma before you spend weeks detailing the wrong massing in Revit' },
      },
      {
        id: 's6', heading: 'Why Early Analysis Matters', level: 'h2',
        content: `Numerous studies in the AEC industry have shown that **the cost of making a design change rises exponentially the later it is caught**. A massing change that takes minutes in Forma can take days or weeks to implement in a fully detailed Revit model — and by that point, the structural coordination, the MEP coordination, and the client approvals may all need to be redone.

Forma changes this by making the analysis instant and iterative at the massing stage, when building geometry is still loose and flexible. A design team can run ten massing alternatives through solar analysis in the time it would previously have taken to commission a single specialist report.`,
        items: [
          '**Solar hours** — understand which facades receive adequate direct sun, and which courtyards are permanently shadowed',
          '**Wind comfort** — identify pedestrian areas that would be uncomfortable or unsafe in prevailing winds',
          '**Noise exposure** — map road and rail noise levels across the site to inform unit placement',
          '**Daylight** — evaluate which massing options deliver adequate daylight to neighbouring buildings',
          '**Green Area Ratio** — track how much vegetation is included in the design against local planning targets',
        ],
      },
      {
        id: 's7', heading: 'Who Uses Forma', level: 'h2',
        content: `Forma is primarily used by architectural and urban design practices, but its outputs are relevant across the full project team.`,
        items: [
          '**Architects and Urban Designers** — massing, proposals, and environmental analysis in concept and schematic design',
          '**BIM Managers** — setting up the project in Forma before Revit work begins; managing the Forma-to-Revit handoff',
          '**Planning Consultants** — presenting environmental analysis as part of planning applications',
          '**Clients and Developers** — comparing design options using understandable metrics (sun hours, noise, green space)',
          '**Sustainability Consultants** — reviewing early analysis before commissioning detailed specialist modelling',
        ],
      },
    ],
    takeaways: [
      'Autodesk Forma is a cloud-based early-stage design platform combining site modeling, massing, and environmental analysis.',
      'Forma originated as Spacemaker, a Norwegian AI design startup acquired by Autodesk in 2021.',
      'Forma works at the concept phase, before detailed Revit work begins — it does not replace Revit but informs it.',
      'The five core capabilities are site modeling, massing, proposals, environmental analysis, and Revit integration.',
      'Early-stage analysis in Forma prevents expensive late-stage redesign by making massing decisions evidence-based from day one.',
      'Forma is browser-based and cloud-native — the core platform requires no local software installation.',
    ],
    resource: { label: 'Autodesk Forma Overview Guide', type: 'PDF' },
    quiz: { label: 'What is Forma Quiz', questions: 10, time: '5 min' },
    prev: null,
    next: { id: 'forma-2', title: 'Setting Up Your Forma Account & Workspace' },
  },

  // ============================================================
  // LESSON FORMA-02 — Setting Up Your Forma Account & Workspace
  // ============================================================
  {
    id: 'forma-2', num: '02',
    title: 'Setting Up Your Forma Account & Workspace',
    topic: 'Forma Basics', cat: 'beginner', readTime: '7 min', free: true,
    desc: 'Get your Forma account and workspace ready — licences, hubs, and the Forma Revit plugin.',
    intro: `Getting Forma running correctly from the start prevents the most common onboarding frustrations — projects that won't save, analysis that won't run, or geometry that won't export to Revit. This lesson walks through account setup, how Forma fits into Autodesk's licensing structure, and how to configure your workspace so you can work efficiently from your first project.`,
    sections: [
      {
        id: 's1', heading: 'Autodesk Forma Licensing', level: 'h2',
        content: `Forma is included as part of the **Autodesk AEC Collection**, the same suite that includes Revit, Navisworks, Civil 3D, and AutoCAD. If your firm already has AEC Collection licences, you likely already have access to Forma.

Forma is also available as a standalone subscription. A free trial is available on the Autodesk website.`,
        code: {
          label: 'Licensing Options',
          lines: [
            'AEC Collection (recommended for most firms)',
            '  → Includes Forma, Revit, Navisworks, Civil 3D, AutoCAD',
            '  → Single subscription covers the full BIM toolchain',
            '',
            'Forma Standalone',
            '  → For firms needing Forma without the full AEC Collection',
            '',
            'Free Trial',
            '  → Available at autodesk.com/products/forma',
            '  → Sufficient for working through this entire course',
          ],
        },
      },
      {
        id: 's2', heading: 'Signing In and Accessing Forma', level: 'h2',
        content: `Forma is entirely browser-based — you access it at **forma.autodesk.com** using the same Autodesk ID you use for Revit, AutoCAD, and other Autodesk products.

No software download is required to run Forma itself. The only exception is the **Forma Revit Plugin**, which is a separate installer covered later in this lesson.`,
        subsections: [
          {
            heading: 'Access Steps',
            items: [
              'Go to forma.autodesk.com in any modern browser (Chrome, Edge, Firefox)',
              'Sign in with your Autodesk ID (the same account used for Revit)',
              'Select your Hub — this is your company\'s Autodesk workspace (covered below)',
              'You are now in your Forma workspace and can create or open projects',
            ],
          },
        ],
        formula: { label: 'Browser Requirement', text: 'Forma runs best in Chrome or Edge on a machine with a dedicated GPU — avoid Safari for 3D work' },
      },
      {
        id: 's3', heading: 'Understanding Hubs and Projects', level: 'h2',
        content: `Forma uses the same **Hub** structure as Autodesk Construction Cloud (ACC). A Hub is your organization's Autodesk workspace — the container for all your firm's projects.`,
        items: [
          '**Hub** — your firm\'s Autodesk organization account; manages users, licences, and access',
          '**Workspace** — within a Hub, a container for a set of projects (can be organized by region, team, or project type)',
          '**Project** — a single design site with its terrain, context, proposals, and analysis results',
          'If you are the first person at your firm to set up Forma, your IT or BIM manager may need to create or activate the Hub first',
          'If you are working through this course as an individual learner, create a personal Hub using your Autodesk free trial account',
        ],
      },
      {
        id: 's4', heading: 'Inviting Team Members', level: 'h2',
        content: `Forma projects are collaborative by default — multiple team members can work in the same project simultaneously, and all changes are saved to the cloud in real time.`,
        subsections: [
          {
            heading: 'How to Invite',
            items: [
              'Open a project in Forma',
              'Click the share icon in the top-right toolbar',
              'Enter email addresses and assign roles (Viewer, Editor, or Admin)',
              'Recipients receive an email invitation to join the project',
              'Access is managed at the Hub level — users must have a valid Autodesk ID',
            ],
          },
        ],
      },
      {
        id: 's5', heading: 'Installing the Forma Revit Plugin', level: 'h2',
        content: `The **Forma Revit Plugin** is the bridge between Forma's early-stage massing and Revit's detailed design. It is the one component that requires a local installation — but it installs through the standard Autodesk installer, not a separate process.`,
        code: {
          label: 'Plugin Installation',
          lines: [
            'Option 1 — Autodesk Desktop App',
            '  → Open the Autodesk Desktop App (or download from autodesk.com)',
            '  → Find "Autodesk Forma" in your product library',
            '  → Click Install for the Revit Plugin',
            '',
            'Option 2 — Autodesk App Store',
            '  → Search for "Autodesk Forma" on the Autodesk App Store',
            '  → Download the installer for your Revit version',
            '',
            'Once installed, a "Forma" tab appears in the Revit ribbon',
            'You can confirm installation in Revit → Add-Ins tab',
          ],
        },
        formula: { label: 'Compatibility Note', text: 'The Forma Revit Plugin supports Revit 2023, 2024, and 2025 — check the plugin page for the latest compatibility list' },
      },
      {
        id: 's6', heading: 'Browser and Hardware Settings', level: 'h2',
        content: `Forma runs 3D analysis directly in the browser using WebGL and GPU acceleration. A few settings can significantly improve performance.`,
        items: [
          '**Enable hardware acceleration** in your browser (Chrome: Settings → System → "Use hardware acceleration when available")',
          '**Use a dedicated GPU** if your machine has both integrated and discrete graphics — navigate to your GPU control panel and set Chrome/Edge to "High performance"',
          '**Minimum recommendation**: 8 GB RAM, dedicated GPU, Chrome or Edge browser',
          '**Optimal recommendation**: 16 GB RAM, dedicated GPU (NVIDIA GTX 1060 / AMD RX 580 or better)',
          'Close unnecessary browser tabs and applications when running analysis on large sites',
          'Ensure your internet connection is stable — Forma saves to the cloud continuously',
        ],
      },
      {
        id: 's7', heading: 'A Note on Autodesk Accounts and SSO', level: 'h2',
        content: `Many larger firms use **Single Sign-On (SSO)** for Autodesk products, which means you log in via your company email rather than a personal Autodesk ID. If your firm uses SSO, contact your IT or BIM manager to confirm your account has Forma access before starting your first project — SSO setups sometimes require an admin to explicitly grant Forma entitlement even when the firm has AEC Collection licences.`,
      },
    ],
    takeaways: [
      'Forma is included in the Autodesk AEC Collection — check your existing licences before purchasing a standalone subscription.',
      'Forma is browser-based at forma.autodesk.com — sign in with the same Autodesk ID used for Revit.',
      'Projects are stored in Autodesk Hubs; the same Hub structure is used for Autodesk Construction Cloud.',
      'Team collaboration is real-time and cloud-native — share a project by email invitation.',
      'The Forma Revit Plugin requires a local install (via Autodesk Desktop App or App Store) and adds a Forma tab to the Revit ribbon.',
      'Enable browser hardware acceleration and use a dedicated GPU for best Forma performance.',
    ],
    resource: { label: 'Forma Setup & Licensing Guide', type: 'PDF' },
    quiz: { label: 'Forma Account Setup Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-1', title: 'What is Autodesk Forma & Where it Fits in the BIM Workflow' },
    next: { id: 'forma-3', title: 'Creating Your First Project & Importing Site Context' },
  },

  // ============================================================
  // LESSON FORMA-03 — Creating Your First Project & Importing Site Context
  // ============================================================
  {
    id: 'forma-3', num: '03',
    title: 'Creating Your First Project & Importing Site Context',
    topic: 'Forma Basics', cat: 'beginner', readTime: '9 min', free: true,
    desc: 'Create a Forma project, locate your site on the map, and import real terrain and context buildings automatically.',
    intro: `The moment you locate a site in Forma, something remarkable happens: terrain, roads, and context buildings populate automatically from global map data. Within minutes — before you have drawn a single massing volume — you have a geo-located site with real topography and surrounding context. This lesson covers how to create a project correctly, what the site import is pulling from, and how to review and refine your site boundary before massing begins.`,
    sections: [
      {
        id: 's1', heading: 'Creating a New Project', level: 'h2',
        content: `Creating a project in Forma takes under two minutes. The key decision at this stage is locating the site correctly — everything else, including terrain and context, is imported automatically based on the location you set.`,
        subsections: [
          {
            heading: 'New Project Steps',
            items: [
              'Sign in at forma.autodesk.com and open your Workspace',
              'Click **+ New Project** in the top-right corner',
              'Enter a project name (you can change this later)',
              'In the site search, type the address or place name of your site',
              'Confirm the location on the map — zoom in to verify the pin is correct',
              'Click **Create Project** — Forma imports terrain and context data automatically',
              'You are now in the Forma project canvas, ready to start massing',
            ],
          },
        ],
        formula: { label: 'Setup Rule', text: 'Get the location right first — terrain, solar angles, and wind data all depend on the correct geographic coordinates' },
      },
      {
        id: 's2', heading: 'What Forma Imports Automatically', level: 'h2',
        content: `Forma populates your site context from global geospatial databases. Understanding what these sources are — and their limitations — helps you know when to trust the imported data and when to supplement it with your own survey or council GIS data.`,
        items: [
          '**Terrain / Topography** — elevation data from a global digital elevation model (typically SRTM or equivalent)',
          '**Context Buildings** — 3D building footprints and approximate heights from OpenStreetMap and similar mapping datasets',
          '**Roads and Infrastructure** — road centrelines and widths from OpenStreetMap',
          '**Trees and Vegetation** — approximate tree locations from mapping data (accuracy varies significantly by region)',
          '**Site Boundary** — an initial proposed boundary based on your selected location; always review and adjust this manually',
        ],
      },
      {
        id: 's3', heading: 'The Site Boundary — Why It Matters', level: 'h2',
        content: `The **site boundary** in Forma defines the area within which your proposed buildings can be placed. It also controls what the environmental analyses treat as "inside the project" versus surrounding context. Getting it right is important — not just for accurate analysis, but because Forma's Green Area Ratio and Area calculations all refer back to the site boundary.`,
        code: {
          label: 'Site Boundary Workflow',
          lines: [
            'Review the auto-generated boundary on the canvas',
            '→ Forma draws a boundary around the clicked location',
            '→ It is often a square or rectangle — rarely matches the real site',
            '',
            'To edit:',
            '  Left panel → Site → Site Boundary',
            '  Click Edit to enter boundary editing mode',
            '  Drag existing nodes, add new nodes, or delete nodes',
            '  Click OK to confirm',
            '',
            'Best source for accurate boundaries:',
            '  → Land registry documents or title plans',
            '  → Topographic survey DXF/DWG (can be imported)',
            '  → Local council planning portal GIS data',
          ],
        },
      },
      {
        id: 's4', heading: 'Importing a DXF or DWG Site Survey', level: 'h2',
        content: `For professional projects, the auto-imported terrain and boundary will rarely be accurate enough on their own. Most projects start with a topographic survey from a land surveyor, delivered as a DXF or DWG file. Forma can import these directly.`,
        subsections: [
          {
            heading: 'DXF/DWG Import Steps',
            items: [
              'Left panel → Site → click the + or import icon',
              'Select "Import geometry" and choose your DXF or DWG file',
              'Forma asks you to confirm the coordinate system — match this to your survey file',
              'The survey imports as a layer on the canvas, overlaying the map base',
              'You can use the surveyed site boundary to manually trace or replace the auto-generated boundary',
            ],
          },
        ],
        formula: { label: 'Professional Standard', text: 'Always replace the auto-imported terrain with a proper topographic survey before submitting analysis to a client' },
      },
      {
        id: 's5', heading: 'Reviewing Context Buildings', level: 'h2',
        content: `Context buildings matter enormously for environmental analysis — a tower to the south of your site will cast shadows that no amount of clever massing on your site can overcome. It is worth spending time reviewing the imported context before running any analysis.`,
        items: [
          'Zoom in and visually check whether major neighbouring buildings are present and approximately correctly placed',
          'OpenStreetMap data is excellent in major cities; it can be sparse or out of date in smaller towns or rapidly developing areas',
          'You can add missing context buildings manually: **Left panel → Site → Add Building Volume** and trace the footprint on the canvas',
          'Context building heights from OpenStreetMap are often approximate — check against satellite imagery or planning portals and adjust if needed',
          'Accurate context is especially critical for daylight and shadow analysis; a missing tall block nearby can make an analysis look far more favourable than reality',
        ],
      },
      {
        id: 's6', heading: 'Setting Project North and Solar Location', level: 'h2',
        content: `Forma derives solar angles and shadow directions automatically from the project's geographic coordinates. No manual solar setup is required — the sun position at any date and time is calculated from the latitude and longitude you set when creating the project.

However, it is worth confirming that the map is oriented correctly: north in Forma corresponds to true north (not magnetic north), which matches the coordinate systems used in Revit when using shared coordinates.`,
        formula: { label: 'Solar Accuracy', text: 'Forma uses the project latitude/longitude for all solar calculations — getting the site location right is getting the solar analysis right' },
      },
      {
        id: 's7', heading: 'Saving and Naming Your Project', level: 'h2',
        content: `Forma saves continuously to the cloud — there is no "Save" button to click. However, good project naming and organisation from the start will save significant time when managing multiple projects or sharing with a team.`,
        subsections: [
          {
            heading: 'Recommended Naming Convention',
            items: [
              'Format: **ProjectCode_SiteName_Phase_Year** (e.g., DP01_DharrenPark_Concept_2026)',
              'Avoid generic names like "New Project" or "Test" — Forma workspaces can grow large quickly',
              'Use descriptive proposal names within a project, not just "Proposal 1," "Proposal 2"',
              'The project name and proposal names both appear in the Revit plugin export dialog — clear names prevent confusion',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'Creating a Forma project requires only a site address — terrain, context buildings, and roads import automatically from global map data.',
      'The auto-generated site boundary is a starting point only; always refine it using land registry or topographic survey data.',
      'Context buildings from OpenStreetMap are approximate; add missing buildings manually and verify heights for accurate shadow and daylight analysis.',
      'DXF/DWG topographic surveys can be imported directly into Forma to replace auto-generated terrain.',
      'Solar angles and shadow directions are calculated automatically from the project\'s geographic coordinates — no manual solar setup required.',
      'Forma saves continuously to the cloud; use consistent naming conventions from the start to keep workspaces organised.',
    ],
    resource: { label: 'Forma Site Import Quick Reference', type: 'PDF' },
    quiz: { label: 'Creating a Forma Project Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-2', title: 'Setting Up Your Forma Account & Workspace' },
    next: { id: 'forma-4', title: 'Understanding the Forma Interface & Navigation' },
  },

  // ============================================================
  // LESSON FORMA-04 — Understanding the Forma Interface
  // ============================================================
  {
    id: 'forma-4', num: '04',
    title: 'Understanding the Forma Interface & Navigation',
    topic: 'Forma Basics', cat: 'beginner', readTime: '8 min', free: false,
    desc: 'A complete tour of the Forma interface — canvas, left panel, right panel, toolbar, and 3D navigation.',
    intro: `Forma's interface is deliberately minimal compared to Revit — but every element has a specific purpose in the concept design workflow. The left panel manages what is in your project; the right panel runs analysis; the toolbar handles how you see and navigate the canvas. Learning which tool lives where means you spend your time designing, not searching.`,
    sections: [
      {
        id: 's1', heading: 'Interface Overview', level: 'h2',
        content: `The Forma interface organizes around one central canvas — the 3D design environment where your site, context, and massing volumes all live together.`,
        code: {
          label: 'Forma Interface Areas',
          lines: [
            'Top bar           → Project name, proposal selector, share, settings',
            'Left panel        → Site, Buildings, Vegetation, Analysis Layers',
            'Canvas (centre)   → 3D design and navigation area',
            'Right panel       → Analysis tools (Solar, Wind, Noise, Daylight, etc.)',
            'Bottom toolbar    → Draw tools, undo, view controls',
            'Compass rose      → True north indicator, wind direction overlay',
            'View cube         → Quick camera orientation (top, front, side)',
          ],
        },
      },
      {
        id: 's2', heading: 'The Left Panel — Project Contents', level: 'h2',
        content: `The left panel is your project's content manager. Everything that exists in the project — terrain, context buildings, proposed volumes, vegetation, and imported geometry — is organized here.`,
        items: [
          '**Site** — terrain, site boundary, and imported survey data',
          '**Buildings** — all proposed massing volumes (your design) organized within proposals',
          '**Context** — automatically imported surrounding buildings and roads from map data',
          '**Vegetation** — trees and green areas, both imported and manually placed',
          '**Analysis Layers** — output layers from analysis runs (solar hours map, noise map, etc.) stored here for review',
          'Toggle visibility of any item using the eye icon next to its name',
          'Click any item to select and edit it on the canvas',
        ],
      },
      {
        id: 's3', heading: 'The Right Panel — Analysis Hub', level: 'h2',
        content: `The right panel is where all environmental analysis is configured and launched. Each analysis type has its own expandable section.`,
        subsections: [
          {
            heading: 'Right Panel Analysis Sections',
            items: [
              '**Solar** — sun hours analysis and shadow studies by date and time',
              '**Wind** — pedestrian-level wind comfort analysis using the Lawson criteria',
              '**Noise** — urban noise exposure mapping based on road and rail data',
              '**Daylight** — daylight potential analysis for proposed floor plates',
              '**Green Area Ratio** — calculates the proportion of the site covered by vegetation',
              '**View** — evaluates what occupants can see from selected points or floor levels',
              'Each section has a "Run Analysis" button and settings to configure before running',
            ],
          },
        ],
      },
      {
        id: 's4', heading: '3D Navigation', level: 'h2',
        content: `Forma uses standard 3D navigation controls familiar from most browser-based 3D tools. The canvas supports both a plan (top-down) view and a 3D perspective view.`,
        code: {
          label: 'Navigation Controls',
          lines: [
            'Scroll wheel          → Zoom in/out toward cursor',
            'Right-click + drag    → Orbit around the canvas',
            'Middle-click + drag   → Pan the view',
            'Shift + scroll        → Pan (alternative)',
            '',
            'View toggle (toolbar)',
            '  2D  → Top-down plan view for site layout and boundary editing',
            '  3D  → Perspective 3D view for massing and analysis review',
            '',
            'View cube (top-right of canvas)',
            '  Click faces → snap to top, front, left, right view',
            '  Click corners → snap to isometric views',
            '',
            'Compass rose (canvas)',
            '  Always visible — shows true north orientation',
          ],
        },
      },
      {
        id: 's5', heading: 'The Proposal Selector', level: 'h2',
        content: `One of Forma's most powerful features is **Proposals** — multiple design alternatives stored within a single project. The Proposal Selector in the top bar lets you switch between them instantly.`,
        items: [
          'Each proposal is a complete snapshot of a design state — different massing, different building placement',
          'Switch between proposals by clicking the proposal name in the top bar',
          'Create a new proposal by clicking the + next to the proposal list',
          'Proposals share the same site, terrain, and context — only the design elements differ',
          'This means you can compare "Option A" and "Option B" side by side with the same site conditions',
          'Analysis is run separately for each proposal and stored independently',
        ],
      },
      {
        id: 's6', heading: 'The Bottom Toolbar — Drawing Tools', level: 'h2',
        content: `The bottom toolbar contains the drawing and creation tools for adding geometry to the canvas. The tools available change depending on what is selected in the left panel.`,
        subsections: [
          {
            heading: 'Common Bottom Toolbar Tools',
            items: [
              '**Draw Footprint** — draw a building footprint polygon on the site',
              '**Extrude** — give a drawn footprint a height to create a simple massing volume',
              '**Add Tree** — place a tree at a specified point on the canvas',
              '**Import** — bring in external geometry (DXF, DWG, IFC)',
              '**Undo / Redo** — Ctrl+Z and Ctrl+Y work here exactly as expected',
              '**Select** — the default mode; click items on the canvas to select and edit them',
            ],
          },
        ],
        formula: { label: 'Interface Tip', text: 'The right panel analysis tools only activate once at least one building volume exists in the current proposal' },
      },
    ],
    takeaways: [
      'The Forma interface centers on a 3D canvas with a left panel for project content and a right panel for analysis tools.',
      'The left panel manages site, buildings, context, vegetation, and stored analysis layers.',
      'The right panel is the analysis hub — Solar, Wind, Noise, Daylight, Green Area Ratio, and View all live here.',
      'Navigation uses scroll to zoom, right-click+drag to orbit, and middle-click+drag to pan.',
      'The Proposal Selector in the top bar lets you switch between design alternatives instantly within a single project.',
      'The bottom toolbar provides drawing tools that change contextually based on what is selected.',
    ],
    resource: { label: 'Forma Interface Quick Reference Card', type: 'PDF' },
    quiz: { label: 'Forma Interface Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-3', title: 'Creating Your First Project & Importing Site Context' },
    next: { id: 'forma-5', title: 'Building a Basic Massing Model' },
  },

  // ============================================================
  // LESSON FORMA-05 — Building a Basic Massing Model
  // ============================================================
  {
    id: 'forma-5', num: '05',
    title: 'Building a Basic Massing Model',
    topic: 'Massing', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'Create and edit building volumes in Forma — footprints, heights, floors, and basic form manipulation.',
    intro: `A massing model in Forma does not need to be precise — it needs to be representative. The goal at this stage is geometry that is close enough to the real proposal that solar, wind, and noise analyses give you valid, decision-making information. This lesson covers how to create building volumes from scratch, how to set their heights and floors, and how to make basic edits to the form.`,
    sections: [
      {
        id: 's1', heading: 'How Massing Works in Forma', level: 'h2',
        content: `Forma's massing model is built from **building volumes** — closed 3D forms that represent proposed buildings on the site. Each volume has a footprint (the 2D ground plan) and a height or number of floors. Forma handles everything else: slabbing the floors, calculating GFA, and feeding geometry into the analysis engines.

You do not model individual walls, columns, or windows at this stage. That level of detail happens in Revit. Forma works at the whole-building level.`,
        formula: { label: 'Massing Philosophy', text: 'A massing model is a question: "If we build this shape, what happens?" — not a construction drawing' },
      },
      {
        id: 's2', heading: 'Creating a Building Volume from a Footprint', level: 'h2',
        content: `The most common workflow is to draw a building footprint directly on the site, then extrude it to the desired height.`,
        subsections: [
          {
            heading: 'Footprint-to-Volume Steps',
            items: [
              'In the left panel, select the Proposal you are working in',
              'Click **Draw** in the bottom toolbar to start a footprint',
              'Click on the canvas to place polygon vertices — trace the building\'s ground floor outline',
              'Double-click to close the polygon',
              'A volume appears automatically extruded to a default height',
              'In the right properties panel, set the **Height** or **Number of Floors**',
              'Set the **Floor-to-Floor Height** if it differs from the default (typically 3m for residential, 3.5–4m for commercial)',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Setting Building Properties', level: 'h2',
        content: `Once a volume is created, its properties are edited in the panel that appears on the right when the volume is selected.`,
        code: {
          label: 'Building Volume Properties',
          lines: [
            'Height          → Total building height in metres',
            'Floors          → Number of floors (overrides height if set)',
            'Floor Height    → Floor-to-floor height (default: 3.0 m)',
            'GFA             → Gross Floor Area — calculated automatically from footprint × floors',
            'Building Use    → Residential / Commercial / Mixed-use (affects analysis defaults)',
            'Colour          → Override display colour for visual differentiation in the canvas',
            '',
            'Tip: Changing "Floors" automatically recalculates Height based on Floor Height.',
            'Changing "Height" distributes floors evenly at the set Floor Height.',
          ],
        },
      },
      {
        id: 's4', heading: 'Editing Footprint Shapes', level: 'h2',
        content: `After creating a volume, you can edit the footprint polygon at any time without deleting and redrawing.`,
        items: [
          'Select the volume on the canvas',
          'Click **Edit Footprint** in the properties panel (or double-click the footprint edge)',
          'Drag any vertex to move it; click a footprint edge to add a new vertex; press Delete on a vertex to remove it',
          'The volume height and properties are preserved while you edit the footprint shape',
          'Use the Snap-to-Grid option in the toolbar for cleaner, aligned geometries where needed',
          'Snap-to-Boundary lets you snap vertices to the site boundary for accurate placement',
        ],
      },
      {
        id: 's5', heading: 'Building Multiple Volumes', level: 'h2',
        content: `Most sites have more than one building. Forma handles multi-building layouts by creating multiple volumes within the same proposal, each with its own properties.`,
        subsections: [
          {
            heading: 'Multi-Volume Best Practices',
            items: [
              'Name each volume clearly in the left panel (e.g., "Tower A," "Podium," "Block C")',
              'Buildings can overlap in footprint (for podium-and-tower typologies) — Forma handles this correctly',
              'Select multiple volumes with Shift+click to move them together or review combined GFA',
              'Use the left panel visibility toggles to show/hide individual volumes during design review',
              'GFA across all volumes in a proposal is displayed in the top bar statistics strip',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Understanding GFA and Floor Count Display', level: 'h2',
        content: `Forma displays key metrics for your massing at the top of the canvas as you work. Understanding these helps you stay on track against planning requirements and client briefs.`,
        items: [
          '**GFA (Gross Floor Area)** — total floor area across all volumes in the active proposal',
          '**FAR / FSI** — Floor Area Ratio (GFA ÷ site area) — a common planning control metric',
          '**Building Height** — maximum height of any volume in the proposal',
          '**Site Coverage** — percentage of the site boundary covered by building footprints at ground level',
          'These metrics update in real time as you draw and edit volumes — they are live design feedback, not static outputs',
        ],
        formula: { label: 'Planning Check', text: 'GFA Target → FAR × Site Area | Always check against planning consent before running analysis' },
      },
      {
        id: 's7', heading: 'Common First-Model Mistakes', level: 'h2',
        content: `**Mistake:**
Drawing volumes outside the site boundary. Forma does not automatically prevent this — volumes can be placed anywhere on the canvas. Analysis results (particularly Green Area Ratio) are affected by the boundary, so keep volumes within it unless there is a deliberate reason not to.

**Mistake:**
Setting a floor height of 3m for an office building. Most commercial offices use 3.5–4m floor-to-floor height. Setting the wrong floor height creates a model with too many floors for the given height, producing inaccurate GFA and daylight results.

**Best Practice:**
Keep early massing simple. A rectangular volume with approximate height is enough to produce valid solar and wind analysis. You can refine the shape later — do not spend time on complex footprint detailing before you have validated the broad concept with analysis.`,
      },
    ],
    takeaways: [
      'Forma massing uses building volumes with a footprint and height — not individual walls or structural elements.',
      'Draw a footprint polygon, then set height or number of floors to create a building volume.',
      'Floor-to-floor height defaults to 3m — adjust to 3.5–4m for commercial buildings before calculating GFA.',
      'Footprints can be edited at any time by dragging vertices, adding nodes, or deleting them without losing the volume.',
      'GFA, FAR, site coverage, and building height update in real time in the top bar as you design.',
      'Start with simple rectangular volumes; refine shape only after confirming the broad concept with environmental analysis.',
    ],
    resource: { label: 'Forma Massing Workflow Guide', type: 'PDF' },
    quiz: { label: 'Forma Massing Basics Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-4', title: 'Understanding the Forma Interface & Navigation' },
    next: { id: 'forma-6', title: 'Using Proposals — Managing Design Alternatives' },
  },

  // ============================================================
  // LESSON FORMA-06 — Using Proposals
  // ============================================================
  {
    id: 'forma-6', num: '06',
    title: 'Using Proposals — Managing Design Alternatives',
    topic: 'Massing', cat: 'beginner', readTime: '8 min', free: false,
    desc: 'Create, duplicate, compare, and manage design alternatives within a single Forma project using Proposals.',
    intro: `In traditional concept design, comparing two massing options means creating two separate files, two separate analysis requests, and a laborious manual comparison. Forma's Proposals system changes this fundamentally: every design alternative lives inside a single project, shares the same site and context, and can be switched between in one click. This lesson explains how to use Proposals effectively — not just as a storage container, but as an active part of the design process.`,
    sections: [
      {
        id: 's1', heading: 'What is a Proposal?', level: 'h2',
        content: `A **Proposal** in Forma is a complete, independent snapshot of a design state within a single project. It contains:

- All proposed building volumes and their properties
- All vegetation and landscape elements placed in the design
- All analysis results run against that design state
- A name and optional description

Multiple Proposals within the same project share the same site, terrain, site boundary, and context buildings. Only the proposed design elements (buildings, vegetation) differ between them.`,
        formula: { label: 'Proposals Concept', text: 'One Project + Multiple Proposals = A Structured Design Comparison Without Multiple Files' },
      },
      {
        id: 's2', heading: 'Creating and Duplicating Proposals', level: 'h2',
        content: `There are two ways to create a new Proposal: start from a blank canvas, or duplicate an existing one.`,
        subsections: [
          {
            heading: 'Starting from Blank',
            items: [
              'Click the proposal name in the top bar to open the Proposal dropdown',
              'Click **+ New Proposal**',
              'Enter a name (be specific: "Option A — Point Blocks" rather than "Option 1")',
              'A new, empty proposal appears — site and context are inherited, design volumes are blank',
            ],
          },
          {
            heading: 'Duplicating an Existing Proposal',
            items: [
              'Open the Proposal dropdown and hover over the proposal you want to copy',
              'Click the duplicate (copy) icon next to its name',
              'Enter a new name for the duplicate',
              'The duplicate contains all volumes and analysis from the original — start modifying from there',
              'This is the most common workflow: build a base option, then duplicate and modify for each alternative',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Naming Proposals Strategically', level: 'h2',
        content: `Clear proposal naming is one of the most practical things you can do to keep a project manageable, especially once a team is working across multiple proposals.`,
        code: {
          label: 'Recommended Naming Convention',
          lines: [
            'Typology-based:    "Option A — Point Towers"',
            '                   "Option B — Perimeter Block"',
            '                   "Option C — Courtyard"',
            '',
            'Iteration-based:   "v1.0 — Initial Massing"',
            '                   "v1.1 — Reduced Height Council Feedback"',
            '                   "v2.0 — Revised Orientation"',
            '',
            'Avoid:             "New Proposal (2)" — meaningless after one week',
            '                   "Test" — you will have three of these within a month',
          ],
        },
      },
      {
        id: 's4', heading: 'Switching and Comparing Proposals', level: 'h2',
        content: `Switching between Proposals is instant — click the proposal name in the top bar and select a different one from the dropdown. The canvas updates immediately to show that proposal's volumes and analysis layers.

For direct comparison, Forma provides a **Split View** feature that shows two proposals side by side on the same canvas, with the same site and context visible in both panels. This is particularly powerful when presenting to clients or design team stakeholders.`,
        items: [
          'Access Split View from the View menu in the top bar or the toolbar',
          'Choose which proposal appears on each side',
          'Both panels are independently navigable — zoom and orbit each side separately',
          'Analysis results from each proposal can be displayed simultaneously for direct comparison',
          'Screenshots of Split View are commonly used in design review presentations',
        ],
      },
      {
        id: 's5', heading: 'Analysis and Proposals', level: 'h2',
        content: `Every analysis run in Forma is tied to the proposal that was active when the analysis was run. Analysis results are stored per proposal and do not automatically update when the proposal geometry changes.`,
        subsections: [
          {
            heading: 'Analysis Management Rules',
            items: [
              'Run analysis fresh after any significant geometry change — do not rely on stale results',
              'Each proposal stores its own solar, wind, noise, daylight, and other results independently',
              'If you duplicate a proposal, the duplicate inherits the parent\'s analysis results — re-run if the geometry has changed',
              'Use the Analysis Layers section in the left panel to view and manage stored results',
              'Label your analysis runs clearly if you run the same analysis type multiple times (e.g., "Solar — Summer Solstice," "Solar — Equinox")',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Proposals in a Team Setting', level: 'h2',
        content: `In a team setting, Proposals become the primary unit of work assignment. Different team members can work on different Proposals simultaneously within the same project, with all changes saved to the cloud in real time.`,
        items: [
          'Assign responsibility for each Proposal explicitly — "Sarah is working on Option B"',
          'Avoid two team members editing the same Proposal at the same time — Forma does not have file locking',
          'The left panel shows when a Proposal was last edited and by whom',
          'Use Proposals to preserve client-approved milestones — do not delete them, even after a direction is chosen',
          'A final approved Proposal becomes the source for the Revit handoff via the Forma plugin',
        ],
        formula: { label: 'Workflow Rule', text: 'Never delete a Proposal the client has seen — decisions made in review are only traceable if the evidence is preserved' },
      },
    ],
    takeaways: [
      'A Proposal is a complete, independent design state within a project — all sharing the same site, terrain, and context.',
      'Create new Proposals from blank or by duplicating an existing one; duplication is the most common workflow for iterating from a base option.',
      'Name Proposals meaningfully from the start — vague names like "New Proposal (2)" become confusing within days.',
      'Split View shows two Proposals side by side for direct comparison on the same canvas.',
      'Analysis results are tied to the Proposal they were run in; re-run after significant geometry changes.',
      'Preserve client-seen Proposals permanently — they form the audit trail of design decisions.',
    ],
    resource: { label: 'Forma Proposals Workflow Guide', type: 'PDF' },
    quiz: { label: 'Forma Proposals Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-5', title: 'Building a Basic Massing Model' },
    next: { id: 'forma-7', title: 'Terrain, Site Boundaries & Context Buildings' },
  },

  // ============================================================
  // LESSON FORMA-07 — Terrain, Site Boundaries & Context Buildings
  // ============================================================
  {
    id: 'forma-7', num: '07',
    title: 'Terrain, Site Boundaries & Context Buildings',
    topic: 'Massing', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'Work with real terrain data, refine site boundaries, and manage context buildings for accurate site analysis.',
    intro: `The accuracy of every environmental analysis in Forma depends on the quality of the site model underneath your massing. Terrain affects shadow patterns, wind flow, and drainage. Context buildings determine what your neighbours will overshadow and what views will be blocked. A poorly configured site model produces analyses that look plausible but do not reflect reality. This lesson covers how to get the site model right before analysis begins.`,
    sections: [
      {
        id: 's1', heading: 'Understanding Terrain in Forma', level: 'h2',
        content: `Forma's terrain is a **digital elevation model (DEM)** — a grid of height values that represents the topography of the site and surrounding area. It is imported automatically when the project is created, but the source data has limitations that every professional user should understand.`,
        items: [
          'The default terrain source is a global dataset (typically SRTM at ~30m grid resolution)',
          'At 30m resolution, small mounds, retaining walls, and embankments are not captured',
          'Urban areas in many countries have higher-resolution LIDAR data available — Forma uses the best available for the region',
          'For professional projects on sloping sites, always import your own topographic survey',
          'Terrain affects: how building volumes sit on the site, shadow casting on slopes, wind analysis, and drainage metrics',
        ],
        formula: { label: 'Terrain Accuracy Rule', text: 'Auto-terrain is fine for flat urban sites; sloping sites always need a real topographic survey' },
      },
      {
        id: 's2', heading: 'Importing a Topographic Survey', level: 'h2',
        content: `A professionally surveyed site provides accurate terrain data that significantly improves the quality of all subsequent analysis, especially solar shadow studies on sites with significant slope.`,
        subsections: [
          {
            heading: 'Survey Import Formats',
            items: [
              '**DXF / DWG** — the most common format from land surveyors; import via Left panel → Site → Import',
              '**IFC** — if a site model has been created in civil or terrain modeling software',
              '**Point cloud (LAS/LAZ)** — LIDAR scan data; Forma has limited point cloud support but context import works',
              'After import, verify the elevation values match expected site levels — a coordinate mismatch can place terrain at the wrong height',
              'If the survey footprint is in local grid coordinates (e.g., national grid) confirm that Forma\'s coordinate system matches',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Editing the Site Boundary in Detail', level: 'h2',
        content: `The site boundary controls several key calculations: Green Area Ratio, site coverage, GFA targets expressed as FAR, and what is considered "within the project" for analysis purposes. It deserves more care than most beginners give it.`,
        code: {
          label: 'Site Boundary Editing',
          lines: [
            'Left panel → Site → Site Boundary → Edit',
            '',
            'Node operations:',
            '  Drag a node  → move that vertex',
            '  Click an edge → add a new node at that point',
            '  Select a node → Delete key removes it',
            '',
            'Snapping:',
            '  Snap to Grid → draws on a regular grid',
            '  Snap to Angle → constrains edges to 45° increments',
            '',
            'Best practice:',
            '  Trace the legal land boundary from title documents',
            '  If road setbacks apply, consider whether to include the setback',
            '  zone inside or outside the site boundary based on your GFA',
            '  calculation method',
          ],
        },
      },
      {
        id: 's4', heading: 'Managing Auto-Imported Context Buildings', level: 'h2',
        content: `Context buildings imported from OpenStreetMap or similar sources represent the surrounding neighbourhood. They are used by Forma's analysis engines to calculate shadow impact, wind obstruction, daylight interference, and noise reflection. The better this data, the more reliable your analysis.`,
        items: [
          'Verify that all major neighbouring buildings are present — missing a tall tower to the south is a critical error for shadow analysis',
          'Right-click any context building to edit or delete it',
          'Adjust building heights by selecting a context building and editing its height property',
          'Add missing buildings using Left panel → Site → Add Building: draw the footprint and set the height',
          'Cross-reference context building heights against Google Maps 3D imagery, local planning portals, or site photography',
          'Be especially careful about recently constructed buildings that post-date the mapping data',
        ],
      },
      {
        id: 's5', heading: 'Buildings on Sloping Terrain', level: 'h2',
        content: `When terrain is not flat, Forma handles the relationship between building volumes and the ground differently than on a level site. Buildings sit on the terrain surface, which means a sloping site creates split-level conditions at the base of volumes.`,
        subsections: [
          {
            heading: 'Sloping Site Considerations',
            items: [
              'Forma places the base of each building volume at the terrain height at that location',
              'On a sloping site, a rectangular building volume will intersect the terrain differently on each side',
              'This is realistic — it is how buildings are actually built on slopes — but be aware it affects floor count calculations',
              'For podium-and-tower typologies, create a separate volume for the podium that follows the terrain steps',
              'Check the 3D view carefully: a volume that looks flush on one side may appear to float on the downslope side',
            ],
          },
        ],
        formula: { label: 'Slope Check', text: 'Switch to 3D view and orbit around the base of each volume to verify it sits on the terrain correctly' },
      },
      {
        id: 's6', heading: 'Trees and Vegetation as Context', level: 'h2',
        content: `Trees are part of the site model in Forma and can significantly affect analysis results — particularly shadow analysis (trees cast shadows) and wind analysis (trees provide windbreaks). Imported tree data from OpenStreetMap is typically sparse; for sites with significant existing vegetation, add trees manually.`,
        items: [
          'Left panel → Vegetation → Add Tree to place an individual tree on the canvas',
          'Set the tree species or generic type to control its approximate height and canopy spread',
          'Existing trees are sometimes protected by planning conditions — if so, their placement must be accurate',
          'A row of mature trees on the western boundary creates a significant wind shadow that analysis will capture if the trees are modeled',
          'Trees count toward the Green Area Ratio, so accurate placement affects sustainability metrics',
        ],
      },
    ],
    takeaways: [
      'Auto-imported terrain is 30m grid resolution; sloping sites need a proper topographic survey imported in DXF, DWG, or IFC format.',
      'The site boundary drives GFA calculations (FAR), site coverage, and Green Area Ratio — refine it from legal title documents.',
      'Context buildings from OpenStreetMap are approximate; verify heights and add any missing recent buildings manually.',
      'Buildings on sloping terrain sit at the terrain elevation at their location — orbit the 3D view to verify correct ground contact.',
      'Trees cast shadows and create wind shelter; add existing trees manually if they are significant to the site analysis.',
      'The quality of every environmental analysis is bounded by the quality of the site model that underpins it.',
    ],
    resource: { label: 'Forma Site Model Quality Checklist', type: 'PDF' },
    quiz: { label: 'Terrain & Site Boundaries Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-6', title: 'Using Proposals — Managing Design Alternatives' },
    next: { id: 'forma-8', title: 'Parametric Massing — Generating Buildings from Rules' },
  },

  // ============================================================
  // LESSON FORMA-08 — Parametric Massing
  // ============================================================
  {
    id: 'forma-8', num: '08',
    title: 'Parametric Massing — Generating Buildings from Rules',
    topic: 'Massing', cat: 'beginner', readTime: '10 min', free: false,
    desc: 'Use Forma\'s parametric building tools to generate massing options from zoning rules and design parameters rather than manual geometry.',
    intro: `Manual massing — drawing footprints and extruding them — is fine for simple shapes. But when a client asks "what if we added two more floors?", "what happens if we reduce coverage to 60%?", or "how does a 10m setback change the buildable area?", making those adjustments by hand becomes tedious. Forma's parametric massing tools let you define buildings by rules and regenerate the geometry automatically when the rules change.`,
    sections: [
      {
        id: 's1', heading: 'What is Parametric Massing?', level: 'h2',
        content: `**Parametric massing** means defining a building by its parameters — setback from boundary, maximum height, number of floors, footprint shape rules — rather than by manually drawing a fixed geometry. When a parameter changes, the massing updates automatically to reflect the new rules.

Forma inherits this capability from Spacemaker's original AI-assisted design engine, which was built to automate residential massing options within zoning constraints. In Forma, it appears as a set of guided tools for generating buildings from typological rules.`,
        formula: { label: 'Parametric Concept', text: 'Rules → Geometry (not Geometry → Rules) — change the rule, the building regenerates' },
      },
      {
        id: 's2', heading: 'The Forma Building Generator', level: 'h2',
        content: `Forma's parametric tools allow you to define a building from a combination of massing parameters and have it generate a plausible geometric form automatically.`,
        subsections: [
          {
            heading: 'Key Parametric Controls',
            items: [
              '**Footprint Constraint** — the building must stay within the site boundary, minus a defined setback distance',
              '**Setback Rules** — define different setbacks from different boundaries (front, rear, side)',
              '**Maximum Height** — the building cannot exceed a specified height (typically derived from zoning)',
              '**Floor Count** — the target number of floors; combined with height cap, this determines floor-to-floor height',
              '**Gross Floor Area Target** — define a GFA and let Forma derive a massing that achieves it within the constraints',
              '**Building Typology** — choose between slab, point tower, courtyard, perimeter block; Forma generates an appropriate footprint shape',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Generating Buildings from Zoning Parameters', level: 'h2',
        content: `Most design briefs come with zoning conditions: "maximum 12 storeys, 6m setback from all boundaries, 65% max site coverage, minimum 500m² of communal open space." Parametric massing in Forma lets you encode these constraints and test whether a GFA target is achievable within them.`,
        code: {
          label: 'Parametric Setup Example',
          lines: [
            'Site area:           2,400 m²',
            'Required GFA:        12,000 m²',
            'Max height:          36 m (12 floors × 3m)',
            'Setback:             6 m all sides',
            'Max site coverage:   65%',
            '',
            'Buildable footprint after setbacks:',
            '  2,400 - (setback impact) ≈ 1,600 m²',
            'Max coverage 65% of 1,600 = 1,040 m²',
            '',
            'GFA achievable = 1,040 × 12 floors = 12,480 m² ✓',
            '→ GFA target is achievable under these constraints',
            '',
            'In Forma: set these parameters and the generator',
            'proposes a building footprint that satisfies them.',
          ],
        },
      },
      {
        id: 's4', heading: 'Editing Parametric Buildings After Generation', level: 'h2',
        content: `Generated buildings are not locked — after Forma creates a parametric massing volume, you can continue to edit it manually using the same footprint editing tools used for manually drawn volumes.`,
        items: [
          'Select the generated volume to see its current parameter values',
          'Change any parameter to regenerate the massing with the new value',
          'Switch to manual editing to push/pull specific corners or edges for design refinement',
          'Once you manually edit, the volume exits parametric mode — parameter changes no longer regenerate automatically',
          'Save a copy of the parametric version before editing manually if you may need to revert to the rule-driven form',
        ],
      },
      {
        id: 's5', heading: 'Using Parametric Massing for Option Generation', level: 'h2',
        content: `The real power of parametric massing is generating multiple options rapidly for comparison. Instead of manually drawing four different building configurations, you define the rules once and adjust one parameter at a time.`,
        subsections: [
          {
            heading: 'Option Generation Workflow',
            items: [
              'Create a base parametric building with the agreed constraints',
              'Duplicate the Proposal (keeping the parametric building)',
              'In the duplicate, change one parameter (e.g., reduce height from 36m to 24m, adding a second tower)',
              'Run analysis on both proposals to compare solar, wind, or GFA outcomes',
              'Present the comparison in Split View to the design team or client',
              'Repeat for as many options as the brief requires — each takes minutes, not days',
            ],
          },
        ],
        formula: { label: 'Speed Advantage', text: 'A parametric change that takes 30 seconds in Forma would take a day of Revit modeling at schematic stage' },
      },
      {
        id: 's6', heading: 'Limitations of Parametric Massing in Forma', level: 'h2',
        content: `**Honest Assessment:**
Forma's parametric tools are well-suited to simple orthogonal massing typologies — slabs, towers, perimeter blocks. They are not a generative design engine in the sense that tools like Dynamo or Grasshopper are: they do not run optimization algorithms or produce hundreds of permutations automatically.

For complex curved geometry, unusual typologies, or generative option studies, you will likely need to supplement Forma with a parametric modeling tool (like Grasshopper) and import the resulting geometry into Forma for analysis. Forma excels at the analysis stage regardless of how the massing was created.`,
      },
    ],
    takeaways: [
      'Parametric massing defines buildings by rules (setbacks, height, GFA) rather than manually drawn geometry; changing a rule regenerates the building.',
      'Key parameters include setback from boundary, maximum height, floor count, GFA target, and building typology.',
      'Forma\'s parameter generator is useful for verifying whether a GFA target is achievable within given zoning constraints.',
      'Generated buildings can be further manually edited, but this exits parametric mode — save a copy of the rule-driven version first.',
      'Duplicate proposals and change one parameter per option for rapid side-by-side comparison.',
      'Forma\'s parametric tools handle common orthogonal typologies well; complex curved geometry is better modeled externally and imported for analysis.',
    ],
    resource: { label: 'Forma Parametric Massing Reference', type: 'PDF' },
    quiz: { label: 'Parametric Massing Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-7', title: 'Terrain, Site Boundaries & Context Buildings' },
    next: { id: 'forma-9', title: 'Solar Analysis — Sun Hours & Shadow Studies' },
  },

];
