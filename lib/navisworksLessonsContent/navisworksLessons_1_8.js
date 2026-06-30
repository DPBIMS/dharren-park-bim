// ============================================================
// NAVISWORKS GETTING STARTED — LESSONS nav-1 through nav-8 (BEGINNER)
// File: lib/navisworksLessonsContent/navisworksLessons_1_8.js
// Index: lib/navisworksLessonsData.js
// IDs use prefix: nav-
// Free lessons: nav-1, nav-2, nav-3
// ============================================================

export const lessons_1_8 = [

  {
    id: 'nav-1', num: '01',
    title: 'What is Navisworks? Purpose, History & Role in BIM Coordination',
    topic: 'navisworks', cat: 'beginner', readTime: '8 min', free: true,
    desc: 'Understand what Navisworks is, where it came from, and why it is the industry-standard tool for model review and coordination.',
    intro: `Before you open your first federated model, you need to understand what Navisworks actually is, why it exists alongside authoring tools like Revit, and where it fits in the global BIM workflow. This lesson covers the history, the core concept, and the real-world role Navisworks plays on construction projects around the world.`,
    sections: [
      {
        id: 's1', heading: 'What is Navisworks?', level: 'h2',
        content: `**Autodesk Navisworks** is a model review and coordination software used to combine 3D models from many different design and engineering tools into a single **federated model**. Unlike Revit, Civil 3D, or Tekla — which are used to *author* (create) building elements — Navisworks is used to *review, coordinate, and analyze* models that have already been authored elsewhere.\n\nNavisworks does not let you design a wall or place a beam. Instead, it lets you bring together the architectural model, the structural model, the MEP model, and the civil model — often created in completely different software by different companies — into one combined environment where the whole project team can review the design together.`,
        formula: { label: 'Navisworks Core Concept', text: 'Many Discipline Models → One Federated Model → Clash Detection + 4D Sequencing + Review' },
      },
      {
        id: 's2', heading: 'A Brief History of Navisworks', level: 'h2',
        content: `Understanding where Navisworks came from explains why it is built the way it is — as a lightweight, format-agnostic review tool rather than a modeling tool.`,
        subsections: [
          {
            heading: 'The Origin Story',
            items: [
              '**1980s–1990s** — The underlying visualization technology originates from Lightwork Design and related UK-based 3D graphics research',
              '**1990s** — Navisworks Ltd. is established in the United Kingdom, focused on large-model visualization for engineering and construction',
              '**Early 2000s** — Navisworks JetStream technology is developed, allowing extremely large, multi-million-polygon models to be navigated smoothly',
              '**2007** — Autodesk acquires Navisworks, integrating it into the Autodesk AEC product line',
              '**2010s** — Clash Detective, TimeLiner, and Quantification tools mature into the core coordination workflow used today',
              '**2010s–2020s** — Cloud-based coordination tools (Autodesk Construction Cloud, BIM 360 / ACC Model Coordination) extend Navisworks workflows to the browser',
              '**Present day** — Navisworks remains the most widely used desktop coordination tool for combining models from across the AEC industry',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Why Navisworks Matters in BIM Coordination', level: 'h2',
        content: `Modern construction projects involve dozens of consultants, each working in their own software — architects in Revit, structural engineers in Tekla or Revit Structure, MEP engineers in Revit MEP or AutoCAD MEP, civil engineers in Civil 3D, and steel fabricators in specialized detailing tools. None of these tools alone can show the whole picture. Navisworks solves this problem.`,
        items: [
          '**Format-agnostic** — reads native and exported files from nearly every major AEC authoring tool',
          '**Federated review** — combines all discipline models without merging or altering the original files',
          '**Clash detection** — automatically finds physical conflicts between elements from different models',
          '**4D sequencing** — links the 3D model to a construction schedule to visualize the build sequence over time',
          '**Lightweight navigation** — handles enormous, combined models smoothly using optimized geometry caching',
          '**Whole-team review** — gives architects, engineers, contractors, and clients a shared environment to walk through the design together',
        ],
      },
      {
        id: 's4', heading: 'Navisworks vs Authoring Tools', level: 'h2',
        content: `A common point of confusion for beginners is thinking Navisworks competes with Revit or Civil 3D. It does not — they serve entirely different purposes in the same workflow.`,
        code: {
          label: 'Authoring vs Coordination',
          lines: [
            'Revit, Tekla, Civil 3D    → AUTHOR the model (create geometry & data)',
            'Navisworks                → REVIEW the combined model (no element creation)',
            '',
            'Authoring tools  → discipline-specific, one model per consultant',
            'Navisworks       → cross-discipline, all models combined for review',
            '',
            'Rule of thumb: if you are placing a wall or a pipe, that is an',
            'authoring tool. If you are checking whether the pipe hits the',
            'beam, that is Navisworks.',
          ],
        },
      },
      {
        id: 's5', heading: 'The Three Navisworks Products', level: 'h2',
        content: `Autodesk offers Navisworks in three tiers, each suited to a different role on the project team.`,
        subsections: [
          {
            heading: 'Navisworks Product Lineup',
            items: [
              '**Navisworks Manage** — the full version, including Clash Detective, TimeLiner, and Quantification — used by BIM coordinators and managers',
              '**Navisworks Simulate** — includes review, navigation, and TimeLiner, but without Clash Detective — used for visualization and sequencing',
              '**Navisworks Freedom** — a free viewer for opening published NWD files, used by clients, site teams, and stakeholders who only need to view the model',
            ],
          },
        ],
        formula: { label: 'Licensing Note', text: 'Navisworks Manage ships inside the Autodesk AEC Collection alongside Revit and Civil 3D' },
      },
      {
        id: 's6', heading: 'Who Uses Navisworks', level: 'h2',
        content: `Navisworks is used at every stage of a project, by every discipline, on construction projects worldwide — from commercial towers to infrastructure and industrial facilities.`,
        items: [
          '**BIM Coordinators / BIM Managers** — run weekly coordination meetings using Clash Detective',
          '**Architects and Engineers** — check their design against other disciplines before issuing drawings',
          '**General Contractors** — verify constructability and build sequencing using TimeLiner',
          '**Quantity Surveyors / Estimators** — extract quantities directly from the federated model',
          '**Site Teams** — use Navisworks Freedom on tablets to compare the model against site progress',
          '**Clients and Stakeholders** — walk through the design in a federated model before construction begins',
        ],
        formula: { label: 'Industry Reality', text: 'Navisworks Coordination Skills = One of the Most Requested BIM Competencies Globally' },
      },
      {
        id: 's7', heading: 'Navisworks in the BIM Workflow (ISO 19650 Context)', level: 'h2',
        content: `Under international BIM standards such as **ISO 19650**, project teams produce discipline-specific models that are periodically combined into a **federated model** for coordination and review. Navisworks is the tool most commonly used to perform this federation and the clash checking that follows it.`,
        items: [
          'Each discipline publishes their model on an agreed schedule (commonly weekly or bi-weekly)',
          'Discipline models are exported or cached into Navisworks-compatible formats',
          'The BIM Coordinator appends all current models into a federated Navisworks file',
          'Clash Detective runs automated checks against pre-defined clash rules',
          'Results are logged, assigned, and tracked until resolved in the original authoring software',
          'A clean federated model becomes the basis for issued construction documentation',
        ],
      },
    ],
    takeaways: [
      'Navisworks is a model review and coordination tool — it does not author geometry, it combines and analyzes models created elsewhere.',
      'Navisworks originated in the UK in the 1990s and was acquired by Autodesk in 2007.',
      'Navisworks reads files from nearly every major AEC authoring tool, making it format-agnostic by design.',
      'There are three Navisworks products: Manage (full), Simulate (no clash detection), and Freedom (free viewer).',
      'Navisworks plays a central role in federated model workflows defined by international standards like ISO 19650.',
      'Coordination skills in Navisworks are among the most requested BIM competencies on construction projects worldwide.',
    ],
    resource: { label: 'Navisworks Software Overview Guide', type: 'PDF' },
    quiz: { label: 'What is Navisworks Quiz', questions: 10, time: '5 min' },
    prev: null,
    next: { id: 'nav-2', title: 'The Navisworks Interface: Every Panel Explained' },
  },

  // ============================================================
  // LESSON NAV-02 — The Navisworks Interface
  // ============================================================
  {
    id: 'nav-2', num: '02',
    title: 'The Navisworks Interface: Every Panel Explained',
    topic: 'navisworks', cat: 'beginner', readTime: '9 min', free: true,
    desc: 'A complete tour of the Navisworks interface — every panel, toolbar, and navigation tool explained.',
    intro: `The Navisworks interface is built around one job: letting you move through a huge, combined model quickly and find exactly what you need. Beginners coming from Revit often expect a similar ribbon-and-properties layout — and while the basic structure is familiar, several panels are unique to coordination work. This lesson walks through every area of the interface systematically.`,
    sections: [
      {
        id: 's1', heading: 'The Navisworks Interface Overview', level: 'h2',
        content: `The Navisworks interface is organized into a ribbon at the top, a set of dockable panels around the edges, and a large central viewport for navigating the model. Once you know where each tool lives, switching between authoring software and Navisworks becomes second nature.`,
        code: {
          label: 'Navisworks Interface Areas',
          lines: [
            '1. Quick Access Toolbar  → Open, Save, Append, Undo/Redo',
            '2. Ribbon                → All tools organized by tab',
            '3. Viewport              → Main 3D navigation and review window',
            '4. Selection Tree        → Hierarchical list of every model and item',
            '5. Properties Panel      → Data for the currently selected item',
            '6. Selection/Search Sets → Saved groups of items for reuse',
            '7. Viewpoints Panel      → Saved camera positions and view states',
            '8. Navigation Bar        → Orbit, Pan, Zoom, Walk, Look Around tools',
            '9. Status Bar            → Coordinates, units, and selection info',
          ],
        },
      },
      {
        id: 's2', heading: 'The Ribbon — Tabs and Their Purpose', level: 'h2',
        content: `Like Revit, the **Ribbon** spans the top of the screen and is organized into tabs. Each tab groups tools for a stage of the coordination workflow — from opening models to publishing results.`,
        subsections: [
          {
            heading: 'Ribbon Tabs and Their Purpose',
            items: [
              '**Home** — Append, Merge, and Refresh models; access Selection Tree, Sets, and Properties',
              '**Viewpoint** — save, organize, and animate camera viewpoints; sectioning tools',
              '**Review** — markup, redlining, comments, tags, and measurement tools',
              '**Animation** — Animator and Scripter tools for object animation sequences',
              '**View** — display modes, rendering style, navigation aids, and grid/level visibility',
              '**Output** — export to image, video, NWD, or other deliverable formats',
              '**Render** — Autodesk Rendering tools for presentation-quality visuals',
              '**Item Tools** — appears when an item is selected; contains item-specific actions',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'The Selection Tree — Your Model Navigator', level: 'h2',
        content: `The **Selection Tree** is the most important panel in Navisworks. It lists every model that has been appended into the file, broken down hierarchically down to individual elements — exactly like the Project Browser is central in Revit, but for a combined, multi-model file.`,
        items: [
          '**Standard mode** — shows the file structure as it was appended (by source file, then by internal hierarchy)',
          '**Compact mode** — condenses the tree to save space while reviewing',
          '**Properties mode** — groups items by a chosen property instead of file structure',
          '**Sets mode** — shows your saved Selection Sets and Search Sets instead of the raw model tree',
          'Clicking an item in the tree highlights it in the viewport, and vice versa',
          'Right-click any item for Hide, Require, Override Color, or Properties options',
        ],
        formula: { label: 'Critical Distinction', text: 'Hide = temporarily removed from view | Require = everything else hidden except this' },
      },
      {
        id: 's4', heading: 'The Properties Panel', level: 'h2',
        content: `The **Properties Panel** displays all data carried over from the original authoring file for whatever element is currently selected — type, material, dimensions, classification codes, and any custom parameters set by the original author.`,
        items: [
          '**Item tab** — name, type, and internal Navisworks identifiers',
          '**Source file data** — original parameters exported from Revit, Tekla, Civil 3D, etc.',
          '**Geometry tab** — bounding box dimensions and volume',
          '**Search tab** — quick filters for finding items by property value',
          'Properties are read-only in Navisworks — to change data, you must edit the source model and re-append it',
        ],
      },
      {
        id: 's5', heading: 'Selection Sets and Search Sets', level: 'h2',
        content: `**Selection Sets** and **Search Sets** let you save groups of items so you do not have to manually re-select them every time. This becomes essential once a federated model contains tens of thousands of elements across multiple discipline models.`,
        subsections: [
          {
            heading: 'Sets Explained',
            items: [
              '**Selection Set** — a fixed, manually picked group of items; does not update automatically',
              '**Search Set** — a rule-based group defined by property criteria; updates automatically when the model is refreshed',
              'Both set types can be used directly as the input for Clash Detective tests',
              'Search Sets are the professional standard — they survive model updates without rebuilding selections',
            ],
          },
        ],
        code: {
          label: 'Example Search Set Rule',
          lines: [
            'Find Items where:',
            '  Category = "Walls"',
            '  AND Level = "Level 2"',
            '  AND Type Name contains "Concrete"',
            '',
            'Result updates automatically whenever the model is refreshed',
            '— no manual re-selection needed on the next coordination cycle',
          ],
        },
      },
      {
        id: 's6', heading: 'The Viewpoints Panel', level: 'h2',
        content: `**Viewpoints** save the exact camera position, visibility state, section planes, and render style at a moment in time — similar in purpose to saved views in Revit, but capturing the full review state rather than just a drawing view.`,
        items: [
          'Save a viewpoint to return to a specific camera angle instantly',
          'Organize viewpoints into folders by discipline, level, or coordination meeting date',
          'Animate between saved viewpoints to create a walkthrough sequence',
          'Viewpoints can store hidden/required item states, useful for isolating one discipline at a time',
          'Export a saved viewpoint directly to an image for a coordination report',
        ],
      },
      {
        id: 's7', heading: 'Navigation Tools', level: 'h2',
        content: `Navisworks is optimized for moving through very large combined models smoothly. The **Navigation Bar** (bottom-right of the viewport) and the **ViewCube** give you full control over how you explore the model.`,
        code: {
          label: 'Core Navigation Tools',
          lines: [
            'Orbit          → rotate the view around a pivot point',
            'Pan            → slide the view without rotating',
            'Zoom           → zoom in/out toward the cursor',
            'Walk           → first-person movement with gravity and collision',
            'Look Around    → rotate the camera in place, like turning your head',
            'Fly            → free, unconstrained 3D movement',
            'Sectioning     → slice through the model with adjustable section planes',
            'Realistic mode → Walk tool respects floors and walls like a real building',
          ],
        },
      },
      {
        id: 's8', heading: 'Essential Navisworks Shortcuts to Learn Now', level: 'h2',
        content: `A handful of shortcuts will make your first coordination sessions significantly faster.`,
        subsections: [
          {
            heading: 'Useful Shortcuts and Mouse Controls',
            items: [
              '**Scroll wheel** — zoom toward the cursor position',
              '**Right-click + drag** — orbit the model',
              '**Middle-click + drag** — pan the view',
              '**Ctrl + click** — add an item to the current selection',
              '**Escape** — clear the current selection',
              '**F key shortcuts** — switch quickly between Walk, Zoom, and Orbit tools',
              '**Home tab → Select All / Select None** — quickly clear or select the entire model',
            ],
          },
        ],
        formula: { label: 'Productivity Rule', text: 'Search Sets + Saved Viewpoints = A Coordination Session You Can Repeat Every Week in Minutes' },
      },
    ],
    takeaways: [
      'The Navisworks interface centers on the Selection Tree, Properties Panel, Sets, and Viewpoints — the four panels you will use constantly.',
      'The Ribbon organizes tools by workflow stage: Home, Viewpoint, Review, Animation, View, Output, and Render.',
      'The Selection Tree is the equivalent of Revit\'s Project Browser, but spans every appended model, not just one project.',
      'Search Sets are rule-based and update automatically — the professional standard over manually picked Selection Sets.',
      'Viewpoints save full review states (camera, visibility, sections), not just camera angles.',
      'Navisworks navigation tools — Walk, Fly, Orbit, and Sectioning — are built for exploring very large, combined models smoothly.',
    ],
    resource: { label: 'Navisworks Interface Quick Reference Card', type: 'PDF' },
    quiz: { label: 'Navisworks Interface Quiz', questions: 10, time: '5 min' },
    prev: { id: 'nav-1', title: 'What is Navisworks? Purpose, History & Role in BIM Coordination' },
    next: { id: 'nav-3', title: 'Opening & Appending Models: NWC, NWD & NWF Explained' },
  },

  // ============================================================
  // LESSON NAV-03 — Opening & Appending Models
  // ============================================================
  {
    id: 'nav-3', num: '03',
    title: 'Opening & Appending Models: NWC, NWD & NWF Explained',
    topic: 'navisworks', cat: 'beginner', readTime: '10 min', free: true,
    desc: 'Understand the three Navisworks file formats and the correct workflow for combining discipline models into a federated model.',
    intro: `The single most common source of confusion for beginners is the three Navisworks file types — NWC, NWD, and NWF — and when to use each one. Getting this wrong leads to broken links, oversized files, or losing track of which model version you are reviewing. This lesson gives you the complete, correct workflow used by professional BIM coordinators worldwide.`,
    sections: [
      {
        id: 's1', heading: 'The Three Navisworks File Types', level: 'h2',
        content: `Navisworks uses three distinct file formats, and each one serves a different purpose in the coordination workflow. Understanding the difference between them is essential before you append a single model.`,
        code: {
          label: 'Navisworks File Format Comparison',
          lines: [
            'NWC  (Cache)      → Auto-generated from native files (Revit, Civil 3D, etc.)',
            '                     Lightweight, intermediate format — not edited directly',
            '',
            'NWD  (Document)   → Published, compressed, standalone snapshot',
            '                     Geometry is "baked in" — no live links to source files',
            '                     Used for distribution to clients, viewers, archives',
            '',
            'NWF  (File)       → The federated coordination file — stores LINKS, not geometry',
            '                     References source files; updates when sources refresh',
            '                     Used daily by the BIM Coordinator during active coordination',
          ],
        },
        formula: { label: 'Format Rule of Thumb', text: 'NWC = Cache from source | NWF = Live links for coordination | NWD = Frozen snapshot for sharing' },
      },
      {
        id: 's2', heading: 'How NWC Files Are Created', level: 'h2',
        content: `An **NWC** file is generated automatically by an export plug-in inside the original authoring software — you do not create NWC files manually inside Navisworks itself.`,
        subsections: [
          {
            heading: 'Common NWC Export Sources',
            items: [
              '**Revit** — File → Export → NWC (via the Navisworks Exporter add-in)',
              '**Civil 3D / AutoCAD** — Export directly using the Navisworks plug-in',
              '**Tekla Structures** — built-in IFC or direct NWC export for steel and precast models',
              '**SketchUp, ArchiCAD, and others** — export to IFC, which Navisworks can read directly',
              '**Point clouds and laser scans** — common formats (.rcp, .e57) can also be appended for as-built comparison',
            ],
          },
        ],
        items: [
          'NWC files are intentionally lightweight — geometry is optimized for fast loading, not full design data',
          'Each discipline typically publishes one NWC per coordination cycle (e.g., weekly)',
          'NWC files are usually stored in a shared project folder or common data environment (CDE) that Navisworks can reference',
        ],
      },
      {
        id: 's3', heading: 'Append vs Merge vs Refresh', level: 'h2',
        content: `Once NWC files exist, you bring them into Navisworks using one of three commands found on the **Home tab**. Choosing the right one matters.`,
        code: {
          label: 'Home Tab → Append Workflow',
          lines: [
            'Append   → Adds a new model on top of what is already open',
            '           Use this to build your federated model the first time',
            '',
            'Merge    → Combines a model into the current selection tree structure',
            '           Use this when you want the new file folded into existing groups',
            '',
            'Refresh  → Reloads already-appended files from their latest saved version',
            '           Use this every coordination cycle to pull in updated models',
            '',
            'Reload   → Refreshes ALL appended files in one action',
          ],
        },
        formula: { label: 'Weekly Coordination Habit', text: 'Open NWF → Reload All → Re-run Clash Tests → Review Changes Since Last Cycle' },
      },
      {
        id: 's4', heading: 'Building a Federated Model Step by Step', level: 'h2',
        content: `Here is the standard professional workflow for assembling a federated model at the start of a coordination cycle.`,
        code: {
          label: 'Federated Model Setup Workflow',
          lines: [
            'Step 1 → Confirm each discipline has exported their latest NWC',
            '         (Architecture, Structure, MEP, Civil, etc.)',
            'Step 2 → Open Navisworks → Home tab → Append',
            'Step 3 → Browse to the shared project folder and select all NWC files',
            '         (Navisworks supports appending multiple files at once)',
            'Step 4 → Verify each model lands in the correct position',
            '         (shared coordinates must match across all source files)',
            'Step 5 → Organize the Selection Tree — rename appended items clearly',
            'Step 6 → Save As → choose NWF (federated file with live links)',
            '         File → Save As → Project (.nwf)',
            'Step 7 → Use this NWF as your working file for all coordination tasks',
            '',
            'IMPORTANT: Always append, never re-create the federated model',
            'from scratch each cycle — Refresh keeps it current instead.',
          ],
        },
      },
      {
        id: 's5', heading: 'Shared Coordinates: The #1 Cause of Misaligned Models', level: 'h2',
        content: `If models from different disciplines do not align correctly when appended, the cause is almost always **inconsistent shared coordinates** between the source files — not a problem in Navisworks itself.`,
        items: [
          'Every discipline must publish their model using the same shared coordinate system',
          'This is typically established early in the project and locked in each authoring tool',
          'A model offset by even a few millimeters can produce false clashes across an entire floor',
          'If a model appears in the wrong location, the fix happens in the source authoring software, then the NWC is re-exported',
          'Always verify alignment against a known reference (such as a shared grid or survey point) after appending',
        ],
        formula: { label: 'Coordination Rule', text: 'Misaligned Models = Coordinate Problem, Not a Navisworks Problem' },
      },
      {
        id: 's6', heading: 'Publishing an NWD for Distribution', level: 'h2',
        content: `Once a federated model is ready to share outside the coordination team — with a client, a site team, or for archiving a milestone — you publish it as an **NWD**.`,
        items: [
          '**Output tab → NWD** — saves a compressed, standalone snapshot of the current model',
          'NWD files do not update automatically and have no live links back to source files',
          'Anyone can open an NWD using the free **Navisworks Freedom** viewer',
          'NWDs are ideal for milestone records, client deliverables, and site-team coordination tablets',
          'Never use an NWD as your active working file — always coordinate from the NWF, then publish an NWD when a snapshot is needed',
        ],
      },
      {
        id: 's7', heading: 'Professional File Management for Coordination', level: 'h2',
        content: `Good file discipline prevents the most common coordination headaches — working from outdated models, broken links, and confusion over which version is current.`,
        subsections: [
          {
            heading: 'File Naming Convention',
            items: [
              'Format: ProjectCode_Discipline_Date.nwc / .nwf / .nwd',
              'Example: TWR01_STRUC_2026-06-25.nwc',
              'Keep NWC exports in a shared, predictable folder structure per discipline',
              'Name the master federated NWF clearly, e.g., TWR01_FEDERATED_MASTER.nwf',
            ],
          },
          {
            heading: 'Coordination Cycle Checklist',
            items: [
              'Confirm all disciplines have exported a fresh NWC before the coordination meeting',
              'Reload all links in the master NWF at the start of the session',
              'Re-run Clash Detective tests after every reload, never reuse stale results',
              'Save a dated NWD snapshot after each major milestone for the project record',
            ],
          },
        ],
        formula: { label: 'File Safety Rule', text: 'NWF for Daily Work + NWD for Snapshots + Consistent Naming = Zero Confusion' },
      },
    ],
    takeaways: [
      'NWC is an auto-generated cache from authoring software, NWF stores live links for active coordination, and NWD is a frozen, standalone snapshot for sharing.',
      'NWC files are created by export plug-ins inside Revit, Civil 3D, Tekla, and other authoring tools — never created manually in Navisworks.',
      'Append adds new models, Merge folds a model into existing tree groups, and Refresh/Reload pulls in the latest saved versions of already-appended files.',
      'Misaligned models after appending are almost always a shared-coordinates problem in the source files, not a Navisworks issue.',
      'Publish an NWD whenever you need to share a fixed snapshot outside the coordination team — anyone can open it with the free Navisworks Freedom viewer.',
      'Professional coordination follows a repeatable weekly cycle: reload all links, re-run clash tests, and review what changed since the last session.',
    ],
    resource: { label: 'Navisworks File Format Cheat Sheet', type: 'PDF' },
    quiz: { label: 'Opening & Appending Models Quiz', questions: 10, time: '5 min' },
    prev: { id: 'nav-2', title: 'The Navisworks Interface: Every Panel Explained' },
    next: 'nav-4',
  },

  // ============================================================
  // LESSON NAV-04 — Clash Detective Fundamentals
  // ============================================================
  {
    id: 'nav-4',
    num: 4,
    title: 'Clash Detective Fundamentals: Running Your First Clash Test',
    topic: 'Coordination',
    cat: 'beginner',
    readTime: '11 min',
    free: false,
    desc: 'Set up and run your first automated clash test in Navisworks — test types, tolerances, and how to read the results grid.',
    intro: `Clash Detective is the tool Navisworks is most famous for, and the reason most BIM coordinators open it every week. Instead of manually eyeballing a combined model for conflicts — which is slow and unreliable on a model with tens of thousands of elements — Clash Detective automates the search and gives you a structured, repeatable result every time.

This lesson walks through setting up your first clash test from scratch: choosing what to test, picking the right test type, setting a sensible tolerance, and reading the results grid without getting overwhelmed.`,
    sections: [
      {
        title: 'What Clash Detective Actually Does',
        content: `Clash Detective compares two sets of geometry — **Selection A** and **Selection B** — and reports every pair of items whose geometry intersects, or comes within a tolerance distance of each other.

It does not understand *design intent*. It only understands geometry. A duct passing exactly through a structural beam is reported the same way as a door swing overlapping a wall it is hosted in — both are flagged. Part of learning Clash Detective is learning to set up tests that avoid generating noise from relationships that aren't real problems.

**Why This Matters:**
Running one giant test of "everything against everything" produces thousands of results, most of them irrelevant. Effective clash testing is about asking focused questions — "does structure clash with MEP on Level 3?" — not one enormous unfocused test.`,
      },
      {
        title: 'The Four Clash Test Types',
        content: `Navisworks offers four distinct test types, each suited to a different kind of conflict.

| Test Type | What It Catches | Typical Use |
|---|---|---|
| Hard | Solid geometry physically intersecting | Structure vs MEP, MEP vs MEP |
| Hard (Conservative) | Possible intersection, including approximated curved geometry | Complex curved ductwork, piping |
| Clearance | Items closer than a set distance, even without touching | Maintenance access, fire-rated clearances |
| Duplicates | Identical geometry appearing more than once | Catching accidental double-modeling between disciplines |

**Tip:**
Start with Hard clashes for your first test. Clearance tests are valuable but require careful tolerance tuning, and Duplicate tests are best run occasionally rather than every cycle.`,
      },
      {
        title: 'Setting Up Your First Test',
        content: `Here is the standard workflow for creating and running a clash test, found on the **Home tab → Clash Detective**.

1. Open Clash Detective and click **Add Test**
2. Name the test clearly — e.g. "Structure vs Mechanical — Level 3"
3. Set **Selection A** — pick a Search Set or Selection Tree branch for the first discipline (e.g. all structural items)
4. Set **Selection B** — pick the second discipline (e.g. all mechanical ductwork)
5. Choose the **Test Type** — Hard is the standard starting point
6. Set the **Tolerance** — leave at 0 for a true Hard clash, or set a small clearance distance for a Clearance test
7. Click **Run Test**

Results appear immediately in the grid below, sorted by default into individual clash items.`,
      },
      {
        title: 'Reading the Results Grid',
        content: `Each row in the results grid represents one clash between a specific item from Selection A and a specific item from Selection B.

| Column | Meaning |
|---|---|
| Status | New, Active, Reviewed, Approved, or Resolved |
| Distance | How far the items overlap (negative) or how close they are (Clearance tests) |
| Grid Location | The nearest grid intersection, useful for locating the clash on site |
| Level | Which building level the clash occurs on |
| Item 1 / Item 2 | The two specific elements involved, with full source-file properties |

Clicking a row jumps the 3D view directly to that clash and highlights both elements in different colors, so you can immediately see what is overlapping.`,
      },
      {
        title: 'Clash Tolerance: Getting It Right',
        content: `**Tolerance** controls how much geometry has to overlap (or how close items must be) before a clash is reported.

- A tolerance of **0** reports any physical overlap, no matter how small
- A small positive tolerance (e.g. 10mm) ignores trivial overlaps caused by modeling rounding, which is common with elements like wall-to-floor connections
- A larger tolerance is used deliberately for **Clearance tests** — for example, checking that nothing comes within 300mm of a fire damper for maintenance access

**Important:**
Setting tolerance too loose hides real clashes. Setting it too tight on a Hard test buries you in trivial, unfixable "clashes" that are just normal modeling connections (like a column embedded in a footing). Tune tolerance to the specific test, not as a global default.`,
      },
      {
        title: 'Common Beginner Mistakes',
        content: `**Mistake:**
Running one test of the entire model against itself. This produces an unmanageable number of results, most of them false positives from elements that are deliberately touching (walls meeting floors, columns meeting beams). Always scope tests to a meaningful pair of disciplines or zones.

**Mistake:**
Re-running the same test every week and treating every result as new. Clash Detective preserves status between test runs as long as the underlying Selection Sets stay consistent — use Refresh, not a brand new test, so resolved clashes stay marked as resolved.

**Mistake:**
Ignoring shared coordinate problems. If two models were exported with different coordinate bases, Clash Detective will report enormous, obviously wrong "clashes" across the entire floor. That's a modeling problem to fix at the source, not something to tune tolerance around.`,
      },
      {
        title: 'Saving and Exporting Results',
        content: `Once a test has been run, you have several ways to preserve and share the results.

- Saving the **NWF** file preserves all Clash Detective tests, results, and status alongside the model
- **Export → HTML Report** produces a shareable, browser-viewable report with images of each clash
- **Export → XML Report** is used for integration with external tracking tools
- Many teams export clashes as **BCF (BIM Collaboration Format)** files, which round-trip cleanly into Revit, Solibri, and other BCF-compatible tools

A clean, exported report — not just the live Navisworks file — is usually what gets shared with the wider project team after a coordination session.`,
      },
    ],
    takeaways: [
      'Clash Detective compares Selection A against Selection B and reports geometric overlaps — it has no understanding of design intent.',
      'There are four test types: Hard, Hard Conservative, Clearance, and Duplicates — each suited to a different kind of conflict.',
      'A focused test (e.g. Structure vs Mechanical on one level) is far more useful than one giant test of the entire model.',
      'Tolerance controls how much overlap is required to trigger a result — tune it per test, not as a blanket setting.',
      'Use Refresh on existing tests rather than creating new ones each cycle, so resolved clashes keep their status.',
      'Export results as an HTML report or BCF file so the wider team can review findings without opening Navisworks.',
    ],
    resource: { title: 'Autodesk Navisworks Clash Detective Help', url: 'https://help.autodesk.com/view/NAV/2025/ENU/' },
    quiz: { label: 'Clash Detective Fundamentals Quiz', questions: 10, time: '5 min' },
    prev: 'nav-3',
    next: 'nav-5',
  },

  // ============================================================
  // LESSON NAV-05 — Managing Clash Results
  // ============================================================
  {
    id: 'nav-5',
    num: 5,
    title: 'Managing Clash Results: Grouping, Assigning & Status Workflow',
    topic: 'Coordination',
    cat: 'beginner',
    readTime: '10 min',
    free: false,
    desc: 'Turn a raw list of clash results into a manageable, trackable coordination workflow — grouping, status, and assignment.',
    intro: `Running a clash test is the easy part. A real federated model on a mid-size project can return several hundred raw clashes on the first pass. Without a system for grouping, assigning, and tracking these results, a coordination meeting turns into chaos. This lesson covers how professional BIM coordinators turn a messy results grid into a workflow the whole team can actually act on.`,
    sections: [
      {
        title: 'Why Raw Results Aren\'t Enough',
        content: `Imagine a clash test between structural steel and ductwork returns 240 results. In reality, many of those are not 240 separate problems — they might be the same beam clashing with the same duct run at twelve different points along its length. Treating each row as an independent issue wastes the team's time and makes the report unreadable.

The fix is **grouping**: combining related clashes into a single trackable item before anyone is asked to act on it.`,
      },
      {
        title: 'Grouping Clashes',
        content: `Navisworks can group clash results automatically using rules, or you can group manually.

| Grouping Method | When to Use |
|---|---|
| Group by Item | Combines every clash involving the same single element (e.g. one long duct run) |
| Group by Level | Useful for level-by-level coordination meetings |
| Group by Grid | Useful for zone-based coordination on large floor plates |
| Manual Selection | Select multiple rows → right-click → Group Items, for clashes that belong together logically but don't match an automatic rule |

A well-grouped 240-result test might become 30-40 actionable groups — a number a coordination meeting can actually work through in an hour.`,
      },
      {
        title: 'The Clash Status Workflow',
        content: `Every clash result carries a status that tracks where it is in the resolution process.

1. **New** — the clash has just appeared in this test run and has not yet been reviewed
2. **Active** — the clash has been reviewed and confirmed as a real issue requiring a fix
3. **Reviewed** — a fix has been proposed or made in the source model, pending confirmation
4. **Approved** — the team has confirmed the clash is acceptable as-is (rare, but valid — e.g. a temporary construction clearance)
5. **Resolved** — the clash no longer appears after the source models were updated and re-tested

**Important:**
Status is tied to the specific pair of clashing items. If the underlying model changes enough that Navisworks can no longer match the old clash to a new one, it will appear as a brand new "New" result even if it is the same physical conflict — this is one of the more confusing behaviors for new users.`,
      },
      {
        title: 'Assigning Responsibility',
        content: `Once a clash group is confirmed as Active, someone needs to own fixing it. Navisworks supports this directly in the results grid.

- Add a **Comment** to a clash explaining what needs to happen and who is responsible
- Use the **Assigned To** field (where configured) to track which discipline or person owns the fix
- Screenshots of the 3D view can be attached automatically when exporting a report, so the assigned engineer does not need to hunt for the clash manually

A clash with no comment and no owner will sit unresolved indefinitely — assignment is not optional in a working coordination process.`,
      },
      {
        title: 'Refresh, Don\'t Recreate',
        content: `When new NWC files come in for a coordination cycle, the correct action is to **Refresh** the existing clash test, not delete it and create a new one.

Refreshing re-runs the same Selection A / Selection B / Type / Tolerance configuration against the latest model data, and Navisworks attempts to match results to their previous status. Clashes that no longer exist are typically marked **Resolved** automatically; clashes that still exist keep whatever status and comments were already on them.

Recreating tests from scratch every week throws away this history and forces the team to re-review issues they already addressed.`,
      },
      {
        title: 'Reporting to the Wider Team',
        content: `Most people on a project never open Navisworks directly — they need the clash findings delivered as a report.

- **HTML Report** — a self-contained, browser-viewable report with screenshots, ideal for circulating after a meeting
- **BCF Export** — issues exported in BIM Collaboration Format can be opened directly inside Revit or other BCF-compatible tools, letting engineers jump straight to the clash in their own modeling software
- Many teams maintain a running spreadsheet log alongside Navisworks exports for milestone reporting to clients

**Best Practice:**
Export a fresh report at the end of every coordination meeting and store it in the project's common data environment, dated by coordination cycle. This creates an audit trail showing the clash count trending down over time.`,
      },
    ],
    takeaways: [
      'Group raw clash results before reviewing them — a single long duct run clashing with one beam can otherwise look like dozens of separate issues.',
      'The clash status workflow runs New → Active → Reviewed → Approved/Resolved, and is tracked per clash pair.',
      'A model change significant enough to break the item match will cause a clash to reappear as "New" even if it is the same physical issue.',
      'Every Active clash needs an assigned owner and a comment — unassigned clashes do not get fixed.',
      'Refresh existing clash tests each coordination cycle instead of recreating them, to preserve status and comment history.',
      'Export an HTML or BCF report after every coordination meeting so the wider team can act without opening Navisworks.',
    ],
    resource: { title: 'Autodesk Navisworks Clash Detective Help', url: 'https://help.autodesk.com/view/NAV/2025/ENU/' },
    quiz: { label: 'Managing Clash Results Quiz', questions: 10, time: '5 min' },
    prev: 'nav-4',
    next: 'nav-6',
  },

  // ============================================================
  // LESSON NAV-06 — TimeLiner (4D Scheduling)
  // ============================================================
  {
    id: 'nav-6',
    num: 6,
    title: 'TimeLiner: Linking Your Model to a Construction Schedule (4D)',
    topic: 'Scheduling',
    cat: 'intermediate',
    readTime: '12 min',
    free: false,
    desc: 'Connect a construction schedule to your federated model and simulate the build sequence with TimeLiner.',
    intro: `Clash Detective answers "does it fit?" TimeLiner answers a different question: "can it actually be built in this order?" By linking model elements to tasks in a real construction schedule, TimeLiner turns a static 3D model into a 4D simulation — the model plus time — that reveals sequencing problems long before they show up on site.`,
    sections: [
      {
        title: 'What is 4D BIM?',
        content: `**4D BIM** simply means a 3D model with a fourth dimension — time — attached to it. In Navisworks, this is done through **TimeLiner**, which links groups of model elements to tasks on a construction schedule and then plays the sequence back as an animation.

The result lets the whole project team — designers, contractors, and clients — see the building go up in the model in the same order it is planned to go up on site, well before construction starts.`,
      },
      {
        title: 'Importing a Schedule',
        content: `TimeLiner can bring in schedule data from several common sources, found on the **TimeLiner panel → Data Sources tab**.

| Source | Notes |
|---|---|
| Microsoft Project (.mpp) | Most common source; imports tasks, dates, and hierarchy directly |
| Primavera P6 | Common on larger infrastructure and industrial projects |
| CSV / Excel | Useful for simple schedules or when exporting from other planning tools |
| Manual Entry | Tasks can be typed directly into TimeLiner for small sequences or demonstrations |

Imported schedules retain their task hierarchy (summary tasks and subtasks), start and end dates, and any existing task relationships from the source program.`,
      },
      {
        title: 'Mapping Tasks to Model Items',
        content: `Once a schedule is imported, each task needs to be linked to the model geometry it represents.

1. Select a task in the TimeLiner grid
2. Go to the **Attached** column and click to add a selection
3. Pick the relevant items in the model — directly in the viewport, or via a Search Set or Selection Set
4. Repeat for each task, or use **Auto-Attach using Rules** to match tasks to items based on naming conventions or properties

**Tip:**
Search Sets are extremely useful here — if a task is "Pour Level 3 Slab," a Search Set that automatically captures all Level 3 floor elements means the link still works even if the model is refreshed later.`,
      },
      {
        title: 'Simulating the Schedule',
        content: `With tasks attached, TimeLiner can play back the construction sequence as an animation in the **Simulate tab**.

- Set the simulation **date range** to match the project schedule
- Set the **interval** (daily, weekly, monthly) to control playback granularity
- Configure **appearance overrides** so tasks display differently depending on status — for example, green for on-schedule construction, yellow for items behind schedule
- Compare a **Planned** simulation against an **Actual** progress simulation to visualize schedule slippage directly in the model

This simulation can be exported as a video file for client presentations, progress reporting, or internal planning reviews.`,
      },
      {
        title: 'Common Uses on Real Projects',
        content: `- **Client presentations** — showing how the building will rise over the construction period, well before ground is broken
        - **Constructability review** — catching sequencing problems, like a crane needing to lift through a space that the schedule says should already be enclosed
        - **Look-ahead planning** — site teams use a short-range TimeLiner simulation to plan the next two to four weeks of work
        - **Progress tracking** — comparing the Actual simulation against Planned to communicate where the project stands to stakeholders`,
      },
      {
        title: 'Common Mistakes',
        content: `**Mistake:**
Attaching far too many elements to a single task (e.g. "the entire building" attached to one task called "Construction"). This produces a meaningless simulation that just appears and disappears in one frame instead of a useful sequence.

**Mistake:**
Forgetting to refresh task-to-model links after a model update. If element IDs change significantly in the source authoring software, previously attached items can become orphaned and silently drop out of the simulation.

**Best Practice:**
Keep task granularity close to how the schedule is actually managed on site — by level, by zone, or by trade package — rather than by individual element, which is too granular to be useful for sequencing review.`,
      },
    ],
    takeaways: [
      '4D BIM links model elements to schedule tasks so the build sequence can be visualized over time, not just the finished geometry.',
      'TimeLiner can import schedules directly from Microsoft Project, Primavera P6, CSV/Excel, or manual entry.',
      'Tasks are linked to model geometry through the Attached column — Search Sets make these links resilient to model refreshes.',
      'Simulation settings (date range, interval, appearance overrides) control how the playback looks and what it communicates.',
      'TimeLiner is used for client presentations, constructability review, look-ahead planning, and progress tracking against Planned vs Actual.',
      'Keep task-to-element granularity matched to how the schedule is actually managed — by zone or trade package, not individual elements.',
    ],
    resource: { title: 'Autodesk Navisworks TimeLiner Help', url: 'https://help.autodesk.com/view/NAV/2025/ENU/' },
    quiz: { label: 'TimeLiner & 4D Scheduling Quiz', questions: 10, time: '5 min' },
    prev: 'nav-5',
    next: 'nav-7',
  },

  // ============================================================
  // LESSON NAV-07 — Markup, Redlining & Viewpoints
  // ============================================================
  {
    id: 'nav-7',
    num: 7,
    title: 'Markup, Redlining & Viewpoints for Coordination Meetings',
    topic: 'Coordination',
    cat: 'intermediate',
    readTime: '9 min',
    free: false,
    desc: 'Run an effective coordination meeting using redline markup tools and saved viewpoints to communicate issues clearly.',
    intro: `Clash Detective finds problems automatically, but plenty of issues in a coordination meeting are spotted by a human looking at the model — a clearance that feels too tight, a detail that won't work on site, a sequencing concern. The Review tools in Navisworks exist for exactly this: marking up the model directly, in context, and saving that markup so it survives after the meeting ends.`,
    sections: [
      {
        title: 'Why Markup Matters in Coordination',
        content: `A verbal comment in a meeting — "that pipe run looks too low" — disappears the moment the meeting ends unless someone writes it down accurately. A redline mark drawn directly on the 3D view, saved with the model, does not have that problem. It stays attached to the exact location and camera angle where the issue was raised, and can be reviewed by anyone later, including people who weren't in the room.`,
      },
      {
        title: 'Redline Tools',
        content: `Found on the **Review tab → Markup panel**, Navisworks provides a small but effective set of markup tools.

| Tool | Use |
|---|---|
| Line | Drawing freeform or straight annotation lines |
| Cloud | Circling an area of concern, the same convention used on 2D drawings |
| Text | Adding a written note directly on the view |
| Arrow | Pointing to a specific element or direction |
| Dimension | Measuring and labeling a distance directly in 3D |

Markups are drawn directly in the active view and are visible to anyone who opens that saved viewpoint afterward.`,
      },
      {
        title: 'Tags and Comments',
        content: `Beyond freehand markup, individual model elements can carry **tags** — short text notes attached directly to an item, visible when you select it or hover over it. Tags are useful for issues tied to one specific element rather than a general area of the view, such as flagging a single damper that needs relocating.

Comments can also be added at the model or viewpoint level, giving context that isn't tied to any one element — for example, a general note about a zone's coordination status.`,
      },
      {
        title: 'Saving Viewpoints with Markups',
        content: `A redline markup is only useful if it is saved in a way that preserves exactly what it was pointing at. This is where **Viewpoints** (covered in the interface lesson) become essential to the review workflow.

1. Navigate to the camera angle that best shows the issue
2. Add your redline markup, tags, or comments
3. Save a **Viewpoint** — this captures the camera position, visibility state, and the markup together
4. Organize viewpoints into a folder for the current coordination meeting, named clearly (e.g. "Coordination Mtg — 2026-06-18")

Anyone opening that saved viewpoint later sees exactly what was flagged, from exactly the angle it was raised.`,
      },
      {
        title: 'Running a Coordination Meeting',
        content: `1. Open the current federated **NWF** and reload all links so everyone is looking at the latest model
        2. Review outstanding Clash Detective results first, working through grouped, assigned clashes
        3. Move through the model live, adding redline markups and saved viewpoints for any new issues raised by the team
        4. Assign an owner and a target date to each new issue, verbally and in the saved viewpoint's comment
        5. At the end of the meeting, export a report covering both clash results and markup viewpoints
        6. Distribute the report to the full project team, including anyone who could not attend`,
      },
      {
        title: 'Sharing Markups Beyond the Meeting',
        content: `Markups and viewpoints saved inside an NWF are only visible to people with access to that working file. To share findings more broadly:

- Publish an **NWD** snapshot, which anyone can open in the free Navisworks Freedom viewer with all markups intact
- Export individual viewpoints as **images** for inclusion in a written meeting report
- On projects using a cloud common data environment, model coordination tools built on Autodesk Construction Cloud allow markups and issues to be reviewed directly in a browser, without any desktop software at all

**Best Practice:**
Treat every coordination meeting's markups as a record, not just a discussion aid — save them, export them, and store the report in the project archive so decisions are traceable later.`,
      },
    ],
    takeaways: [
      'Redline markups (lines, clouds, text, arrows, dimensions) capture issues spotted visually, in context, in a way verbal comments cannot.',
      'Tags attach notes to specific elements; comments and markups can also apply more generally to a saved viewpoint.',
      'Saving a Viewpoint after adding markup preserves the exact camera angle, visibility state, and annotation together.',
      'A standard coordination meeting works through existing clash results first, then captures new issues live as markups and viewpoints.',
      'Publish an NWD or export images to share markups with people who don\'t have access to the working NWF.',
      'Treat coordination markups as a permanent record — export and archive them after every meeting.',
    ],
    resource: { title: 'Autodesk Navisworks Review & Markup Help', url: 'https://help.autodesk.com/view/NAV/2025/ENU/' },
    quiz: { label: 'Markup & Coordination Meetings Quiz', questions: 10, time: '5 min' },
    prev: 'nav-6',
    next: 'nav-8',
  },

  // ============================================================
  // LESSON NAV-08 — Quantification
  // ============================================================
  {
    id: 'nav-8',
    num: 8,
    title: 'Quantification: Extracting Takeoffs from the Federated Model',
    topic: 'Quantification',
    cat: 'intermediate',
    readTime: '10 min',
    free: false,
    desc: 'Use the Quantification workbook to extract material and item takeoffs directly from a federated Navisworks model.',
    intro: `A federated model already contains accurate, coordinated geometry from every discipline — which makes it a useful source for quantity takeoffs, not just clash checking and scheduling. Navisworks' Quantification tool lets you extract counts, areas, volumes, and costs directly from the model, organized into a structured workbook.`,
    sections: [
      {
        title: 'What is Quantification in Navisworks?',
        content: `**Quantification** is a Navisworks Manage feature that extracts measurable data — counts, lengths, areas, volumes — from model geometry and organizes it into a workbook for estimating and reporting purposes. It works on top of the same federated model used for clash detection and scheduling, so the takeoff is automatically based on the most current, coordinated design.

It is not a full estimating package — it does not handle pricing databases, labor rates, or complex cost build-ups the way dedicated estimating software does. Its strength is fast, model-derived quantities that estimators can use as a starting point or cross-check.`,
      },
      {
        title: 'Setting Up a Quantification Workbook',
        content: `Quantification work happens in its own panel, accessed from the **Home tab → Quantification**.

1. Create a new **Workbook** to hold the takeoff data
2. Set up **Catalogs and Resources** — predefined item types and units that quantities will be organized under (e.g. "Concrete — Cubic Meters," "Doors — Count")
3. Define **Catalog Items**, each mapped to specific model properties so Navisworks knows which elements belong in which line item
4. Items are then automatically counted, measured, and totaled into the workbook as you process the model`,
      },
      {
        title: 'Virtual Takeoff vs Model-Based Takeoff',
        content: `Navisworks Quantification supports two different takeoff approaches.

| Method | Description | Best For |
|---|---|---|
| Model-Based Takeoff | Quantities pulled directly from existing 3D model geometry | Disciplines with complete, accurate models (e.g. structural concrete) |
| Virtual / 2D Takeoff | Manual measurement tools used directly on 2D drawings or images within Navisworks | Items not yet modeled in 3D, or scope only shown on 2D drawings |

Most real projects use a mix of both — model-based takeoff for well-modeled elements, and virtual takeoff to fill gaps where 3D data doesn't exist yet.`,
      },
      {
        title: 'Creating a Quantification Report',
        content: `Once catalog items are populated, Navisworks compiles the data into a structured report.

- Quantities are grouped by catalog item, discipline, or custom property
- Reports can include counts, total length, total area, and total volume depending on item type
- Workbooks can track multiple takeoffs over time, useful for comparing quantities between design revisions`,
      },
      {
        title: 'An Honest Assessment',
        content: `**Honest Assessment:**
Quantification is genuinely useful for fast, model-derived counts and rough order-of-magnitude quantities, especially early in a project. It is not a replacement for a dedicated estimating package on a large, cost-critical project — most professional quantity surveyors and estimators use Navisworks output as a starting point or cross-check, then move detailed pricing into specialized estimating software with proper cost databases and labor rate libraries.

Knowing this distinction up front saves a lot of frustration: Navisworks tells you *how much*, not *how much it costs to build*.`,
      },
      {
        title: 'Exporting to Excel',
        content: `Quantification workbooks export cleanly to Excel for further analysis, formatting, or hand-off to an estimating team.

- **Export → Quantification → Excel** sends the full workbook, including all catalog items and totals
- Exported spreadsheets retain the grouping structure set up in Navisworks, making them easy to review without needing Navisworks installed
- Many teams treat the Excel export as the actual deliverable, with the Navisworks workbook itself used only as the working tool to generate it`,
      },
    ],
    takeaways: [
      'Quantification extracts counts, lengths, areas, and volumes directly from the federated model into a structured workbook.',
      'A Quantification Workbook is built from Catalogs and Resources, with Catalog Items mapped to specific model properties.',
      'Model-Based Takeoff pulls from existing 3D geometry; Virtual/2D Takeoff handles items not yet modeled, using manual measurement on drawings.',
      'Navisworks Quantification is a strong source of fast, model-derived quantities — not a replacement for dedicated estimating software with cost databases.',
      'Workbooks export cleanly to Excel, which many teams treat as the actual deliverable for estimators.',
      'Quantification works on the same federated model as Clash Detective and TimeLiner, so takeoffs stay based on the latest coordinated design.',
    ],
    resource: { title: 'Autodesk Navisworks Quantification Help', url: 'https://help.autodesk.com/view/NAV/2025/ENU/' },
    quiz: { label: 'Quantification Quiz', questions: 10, time: '5 min' },
    prev: 'nav-7',
    next: 'nav-9',
  },

];
