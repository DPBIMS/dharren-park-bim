export const navisworksLessons = [

  // ============================================================
  // LESSON NAV-01 — What is Navisworks?
  // ============================================================
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
    next: null,
  },

];

export default navisworksLessons;
