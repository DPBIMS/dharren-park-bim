const revitLessons = [

  // ============================================================
  // LESSON RV-01 — What is Revit?
  // ============================================================
  {
    id: 'rv-1', num: '01',
    title: 'What is Revit? History & Why It Dominates BIM',
    topic: 'revit', cat: 'beginner', readTime: '8 min', free: true,
    desc: "Understand what Revit is, where it came from, and why it became the world's leading BIM authoring tool.",
    intro: `Before you place a single wall in Revit, you need to understand what it is, why it was built, and why the entire construction industry has adopted it as the standard BIM authoring platform. This lesson gives you the full picture — the history, the technology, and the real-world dominance of Revit in professional practice.`,
    sections: [
      {
        id: 's1', heading: 'What is Revit?', level: 'h2',
        content: `**Revit** is a Building Information Modeling (BIM) software application developed by Autodesk. It is the world's most widely used BIM authoring tool — the software where architects, structural engineers, and MEP engineers create, coordinate, and document their building designs.\n\nUnlike CAD software that produces 2D drawings, Revit creates a **single intelligent 3D model** from which all drawings, schedules, and documentation are automatically generated. Every element you place in Revit is a smart object that knows what it is, where it is, and what it is made of.`,
        formula: { label: 'Revit Core Concept', text: 'One Model → All Views + All Schedules + All Documentation = Single Source of Truth' },
      },
      {
        id: 's2', heading: 'A Brief History of Revit', level: 'h2',
        content: `Understanding the history of Revit helps you understand why it works the way it does and why it became the industry standard.`,
        subsections: [
          {
            heading: 'The Origin Story',
            items: [
              '**1997** — Charles River Software founded in Massachusetts, USA',
              '**1999** — First version of Revit released (the name is short for "Revise Instantly")',
              '**2002** — Autodesk acquires Revit Technology Corporation for $133 million USD',
              '**2004** — Revit Architecture 8.0 released, begins rapid adoption globally',
              '**2006** — Revit Structure and Revit MEP released, expanding to all disciplines',
              '**2013** — Revit unified into a single platform (Architecture + Structure + MEP in one)',
              '**2016 onwards** — Cloud integration, BIM 360 connectivity, and Dynamo automation added',
              '**2024–2026** — AI-assisted design tools integrated into the Revit workflow',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Why Revit Dominates BIM', level: 'h2',
        content: `Revit is not the only BIM software — ArchiCAD, Vectorworks, Bentley AECOsim, and others exist. But Revit has achieved near-total market dominance in most countries. Here is why:`,
        items: [
          '**Autodesk ecosystem** — integrates seamlessly with AutoCAD, Navisworks, BIM 360, and Civil 3D',
          '**All disciplines in one platform** — architects, structural, and MEP engineers use the same software',
          '**Parametric modeling** — intelligent, data-driven elements that update automatically',
          '**Family system** — unlimited customization through a powerful family library',
          '**Global adoption** — used by millions of professionals worldwide, creating a vast talent pool',
          '**Government mandates** — many BIM mandates specifically reference Revit-compatible workflows',
          '**Industry training** — more courses, certifications, and resources than any other BIM tool',
        ],
      },
      {
        id: 's4', heading: 'Revit vs Other BIM Tools', level: 'h2',
        content: `While Revit dominates globally, it is important to understand where other tools fit in the market:`,
        code: {
          label: 'BIM Software Comparison',
          lines: [
            'Revit           → Autodesk     → Global standard, all disciplines',
            'ArchiCAD        → Graphisoft   → Strong in Europe & Australia',
            'Vectorworks     → Nemetschek   → Popular in USA for smaller firms',
            'Tekla Structures→ Trimble      → Dominant in structural steel fabrication',
            'Bentley AECOsim → Bentley      → Large infrastructure projects',
            'Allplan         → Nemetschek   → Popular in Germany and Central Europe',
            '',
            'For Philippine practice: Revit is the clear industry standard',
          ],
        },
      },
      {
        id: 's5', heading: 'What Revit is Used For', level: 'h2',
        content: `Revit is used across all phases of a building project and by multiple disciplines. Understanding the full scope helps you see why mastering it completely is worth your time.`,
        subsections: [
          {
            heading: 'By Discipline',
            items: [
              '**Architecture** — design, documentation, rendering, and construction drawings',
              '**Structural Engineering** — structural framing, foundations, rebar, and analysis',
              '**MEP Engineering** — mechanical systems, electrical, plumbing, and fire protection',
              '**Interior Design** — space planning, furniture, finishes, and reflected ceiling plans',
              '**Construction** — quantity takeoffs, shop drawings, and 4D simulation preparation',
            ],
          },
          {
            heading: 'By Project Phase',
            items: [
              '**Concept Design** — massing studies and early design exploration',
              '**Schematic Design** — preliminary design with approximate dimensions',
              '**Design Development** — detailed design with accurate geometry and data',
              '**Construction Documents** — permit drawings and coordination drawings',
              '**Construction Administration** — RFIs, shop drawing review, as-built documentation',
              '**Facilities Management** — handover model for building operations and maintenance',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Revit in the Philippine Construction Industry', level: 'h2',
        content: `In the Philippines, Revit has become the expected tool on all major construction projects. Whether you are working for a local firm on a Makati high-rise or collaborating with an international team on a government infrastructure project, Revit is the software you will be expected to use.`,
        items: [
          'All major architectural firms in Metro Manila use Revit as their primary production tool',
          'International contractors — Korean, Japanese, Singaporean — require Revit-compatible BIM models',
          'Premium developers — Ayala Land, SM Prime, Megaworld — specify Revit on major projects',
          'Engineering firms for structural and MEP work increasingly require Revit coordination models',
          'Autodesk Certified Professional (ACP) in Revit is the recognized credential for BIM roles',
          'Filipino Revit professionals are among the most in-demand in Singapore, UAE, and Australia',
        ],
        formula: { label: 'Career Reality', text: 'Revit Mastery = #1 Most Valuable BIM Skill for Filipino Construction Professionals' },
      },
      {
        id: 's7', heading: 'Revit Licensing and Versions', level: 'h2',
        content: `Understanding how Revit is licensed and versioned is practical knowledge you will need as a professional.`,
        items: [
          '**Annual subscription** — Revit is licensed annually through Autodesk, not purchased outright',
          '**AEC Collection** — includes Revit, AutoCAD, Civil 3D, Navisworks — the standard professional package',
          '**Revit LT** — a limited version without some collaboration and family editing features',
          '**Version updates** — Revit releases a new version annually: Revit 2024, 2025, 2026',
          '**Backward compatibility** — newer versions can open older files; older versions cannot open newer files',
          '**Educational licenses** — free for students through the Autodesk Education Community',
        ],
        code: {
          label: 'Revit Version Compatibility Rule',
          lines: [
            'Revit 2026 CAN open:    2026, 2025, 2024, 2023 files',
            'Revit 2024 CANNOT open: 2025 or 2026 files',
            '',
            'Best Practice: Always confirm which Revit version',
            'your team uses before starting work —',
            'version mismatch causes serious collaboration problems',
          ],
        },
      },
    ],
    takeaways: [
      "Revit is the world's leading BIM authoring tool, used by architects, structural, and MEP engineers globally.",
      'Revit was founded in 1997, acquired by Autodesk in 2002, and has dominated BIM software since.',
      'Revit creates a single intelligent 3D model from which all drawings and schedules are automatically generated.',
      'In the Philippines, Revit is the expected standard on all major construction projects.',
      'Newer Revit versions can open older files, but not vice versa — always confirm team version before starting.',
      'Mastering Revit is the single most valuable BIM skill for Filipino construction professionals.',
    ],
    resource: { label: 'Revit Software Overview Guide', type: 'PDF' },
    quiz: { label: 'What is Revit Quiz', questions: 10, time: '5 min' },
    prev: null,
    next: { id: 'rv-2', title: 'The Revit Interface: Every Panel Explained' },
  },

  // ============================================================
  // LESSON RV-02 — The Revit Interface
  // ============================================================
  {
    id: 'rv-2', num: '02',
    title: 'The Revit Interface: Every Panel Explained',
    topic: 'revit', cat: 'beginner', readTime: '10 min', free: true,
    desc: 'A complete tour of the Revit interface — every panel, toolbar, and area explained with professional context.',
    intro: `The Revit interface is your workspace for everything you will do as a BIM professional. Many beginners feel overwhelmed when they first open Revit — there are panels, ribbons, browsers, and buttons everywhere. This lesson gives you a complete, systematic tour of every area of the interface so you know exactly what everything does before you start modeling.`,
    sections: [
      {
        id: 's1', heading: 'The Revit Interface Overview', level: 'h2',
        content: `The Revit interface is divided into eight main areas. Once you understand the purpose of each area, the interface becomes logical and efficient. Every tool you will ever use lives in one of these areas.`,
        code: {
          label: 'Revit Interface Areas',
          lines: [
            '1. Application Menu     → File operations (New, Open, Save, Export, Print)',
            '2. Quick Access Toolbar → Common commands (Undo, Redo, Open, Save)',
            '3. Ribbon               → All modeling and documentation tools by tab',
            '4. Properties Panel     → Element properties and type selector',
            '5. Project Browser      → All views, sheets, families, and groups',
            '6. View Window          → Main modeling and drafting workspace',
            '7. View Control Bar     → View display settings at the bottom of each view',
            '8. Status Bar           → Hints and element information at the very bottom',
          ],
        },
      },
      {
        id: 's2', heading: 'The Application Menu', level: 'h2',
        content: `The **Application Menu** is accessed by clicking the large **R (Revit logo)** button in the top-left corner. This is where you handle all file-level operations — the equivalent of "File" in other applications.`,
        items: [
          '**New** — create a new project (.rvt) or family (.rfa) file',
          '**Open** — open existing project or family files',
          '**Save (Ctrl+S)** — save the current file',
          '**Save As** — save with a new name, location, or version',
          '**Export** — export to IFC, DWG, DWF, PDF, image, and other formats',
          '**Print** — print views and sheets with full control',
          '**Close** — close the current file',
          '**Revit Options** — global software settings and user preferences',
        ],
      },
      {
        id: 's3', heading: 'The Ribbon — All Your Tools', level: 'h2',
        content: `The **Ribbon** is the main toolbar spanning the top of the screen. It is organized into **tabs**, and each tab contains **panels** of related tools. The ribbon is context-sensitive — when you select an element, new tabs appear with tools specific to that element type.`,
        subsections: [
          {
            heading: 'Permanent Ribbon Tabs and Their Purpose',
            items: [
              '**Architecture** — walls, floors, roofs, ceilings, stairs, rooms, openings, and components',
              '**Structure** — structural walls, beams, columns, foundations, rebar, and connections',
              '**Systems** — MEP tools for ductwork, piping, electrical, and fire protection systems',
              '**Insert** — load families, import CAD files, link Revit models, and manage decals',
              '**Annotate** — dimensions, text, tags, symbols, and detail components',
              '**Analyze** — energy analysis, space analysis, and structural analysis tools',
              '**Massing & Site** — conceptual massing tools and site modeling',
              '**Collaborate** — worksharing, coordination review, and cloud collaboration tools',
              '**View** — create and manage views, view templates, and visibility settings',
              '**Manage** — project settings, parameters, phases, and purge unused elements',
              '**Add-Ins** — third-party plugins and Dynamo scripting',
              '**Modify** — appears when elements are selected; contains all editing tools',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'The Properties Panel', level: 'h2',
        content: `The **Properties Panel** is one of the two most important areas of the Revit interface (the other being the Project Browser). It sits on the left side of the screen and displays two critical things: the **Type Selector** at the top and the **Instance Properties** of the selected element below.`,
        items: [
          '**Type Selector** — dropdown at the top showing all types for the current element category',
          '**Edit Type button** — opens the Type Properties dialog for type-level changes',
          '**Instance properties** — all properties specific to the selected element only',
          '**Constraints** — level, base offset, top constraint, and top offset',
          '**Graphics** — view-specific overrides for the selected element',
          '**Phasing** — phase created and phase demolished settings',
          '**Identity Data** — mark number, comments, and keynote fields',
        ],
        formula: { label: 'Critical Distinction', text: 'Instance Properties = This element ONLY | Type Properties = ALL elements of this type' },
      },
      {
        id: 's5', heading: 'The Project Browser — Your Project Navigator', level: 'h2',
        content: `The **Project Browser** is the complete navigation tree of your entire Revit project. It shows everything that exists in the project file, organized in a hierarchy. Think of it as the table of contents for your entire building model.`,
        subsections: [
          {
            heading: 'Project Browser Complete Structure',
            items: [
              '**Views** — floor plans, ceiling plans, elevations, sections, 3D views, drafting views',
              '**Legends** — legend views for materials, symbols, and abbreviations',
              '**Schedules/Quantities** — all schedule and material takeoff views',
              '**Sheets** — all drawing sheets organized by sheet number',
              '**Families** — every loaded family, organized by category and type',
              '**Groups** — model groups and detail groups',
              '**Revit Links** — linked Revit files from other discipline consultants',
            ],
          },
        ],
        code: {
          label: 'Project Browser Power Tips',
          lines: [
            'Double-click a view name    → opens that view in the workspace',
            'Right-click a view          → duplicate, rename, delete, apply template',
            'Right-click a sheet         → open, print, duplicate, or delete',
            'Right-click a family type   → select all instances, edit, or delete',
            'Search bar at top           → type to filter and find views quickly',
            'Drag a view to a sheet      → place the view on that sheet',
          ],
        },
      },
      {
        id: 's6', heading: 'The View Window and View Tabs', level: 'h2',
        content: `The **View Window** is the main workspace where you model, draft, and annotate. You can have multiple views open simultaneously — each in its own tab at the top of the view window area.`,
        items: [
          '**View tabs** — switch between open views by clicking tabs at the top of the workspace',
          '**Tile Views (WT)** — display multiple views side by side simultaneously',
          '**Scroll wheel** — zoom in and out toward the cursor position',
          '**Middle mouse button** — pan by holding and dragging',
          '**Shift + Middle Mouse** — orbit and rotate in 3D views',
          '**Left click** — select elements; Ctrl+click to add to selection',
          '**Tab key** — cycle through overlapping elements under the cursor',
          '**Temporary dimensions** — appear automatically when elements are placed or selected',
        ],
      },
      {
        id: 's7', heading: 'The View Control Bar', level: 'h2',
        content: `The **View Control Bar** sits at the bottom of each view window. These controls affect only the current view — changing them does not affect other views in the project.`,
        code: {
          label: 'View Control Bar Buttons (Left to Right)',
          lines: [
            'Scale              → set view scale (1:100, 1:50, 1:200, etc.)',
            'Detail Level       → Coarse / Medium / Fine (affects family display)',
            'Visual Style       → Wireframe / Hidden Line / Shaded / Realistic',
            'Sun Path           → toggle sun path for shadow studies',
            'Shadows            → toggle shadow display on/off',
            'Crop Region        → toggle and manage the crop boundary of the view',
            'Show Crop          → show/hide the dashed crop boundary line',
            'Temporary Hide     → temporarily hide or isolate selected elements',
            'Reveal Hidden      → show elements that have been hidden in this view',
          ],
        },
      },
      {
        id: 's8', heading: 'Essential Keyboard Shortcuts to Memorize Now', level: 'h2',
        content: `Professional Revit users work with keyboard shortcuts constantly. Start memorizing these from day one — they will make you significantly faster from your very first project.`,
        subsections: [
          {
            heading: 'The Most Important Revit Shortcuts',
            items: [
              '**WA** — Wall | **DR** — Door | **WN** — Window | **CM** — Component',
              '**GR** — Grid | **RP** — Reference Plane | **EL** — Elevation tag',
              '**DI** — Dimension (aligned) | **TX** — Text | **TG** — Tag by Category',
              '**AL** — Align | **MV** — Move | **CO** — Copy | **RO** — Rotate',
              '**TR** — Trim/Extend | **SL** — Split | **OF** — Offset | **AR** — Array',
              '**GP** — Group | **UG** — Ungroup | **CS** — Create Similar',
              '**VV / VG** — Visibility/Graphics | **WT** — Tile Views | **ZF** — Zoom Fit',
              '**PP** — Pin | **UP** — Unpin | **SD** — Shaded | **HL** — Hidden Line',
              '**Escape** — Cancel current command | **Delete** — Delete selected',
              '**Ctrl+Z** — Undo | **Ctrl+Y** — Redo | **Ctrl+S** — Save',
            ],
          },
        ],
        formula: { label: 'Productivity Rule', text: 'Memorizing 20 Keyboard Shortcuts = 40% Faster Revit Workflow Starting Day One' },
      },
      {
        id: 's9', heading: 'Customizing Your Revit Interface', level: 'h2',
        content: `Revit's interface is customizable. As you develop your workflow, configure it to match how you work most efficiently.`,
        items: [
          '**Dock panels** — drag the Properties Panel and Project Browser to either side of the screen',
          '**Quick Access Toolbar** — right-click any ribbon button → Add to Quick Access Toolbar',
          '**Keyboard shortcuts** — View → User Interface → Keyboard Shortcuts to add or change shortcuts',
          '**Double-click behavior** — Manage → Double-Click Settings → configure what double-clicking elements does',
          '**Save UI settings** — your interface customizations are saved per Windows user account, not per project',
        ],
      },
    ],
    takeaways: [
      'The Revit interface has eight main areas — Application Menu, QAT, Ribbon, Properties Panel, Project Browser, View Window, View Control Bar, and Status Bar.',
      'The Ribbon organizes all tools into discipline tabs — Architecture, Structure, Systems, Annotate, View, Manage, and more.',
      'The Properties Panel has a Type Selector at the top and Instance Properties below — the most-used panel in Revit.',
      'The Project Browser is the complete navigation tree — views, sheets, families, groups, and linked files.',
      'The View Control Bar controls display settings for the current view only — scale, detail level, visual style, and crop.',
      'Learning 20 keyboard shortcuts from day one will make you 40% faster in Revit immediately.',
    ],
    resource: { label: 'Revit Interface Quick Reference Card', type: 'PDF' },
    quiz: { label: 'Revit Interface Quiz', questions: 10, time: '5 min' },
    prev: { id: 'rv-1', title: 'What is Revit? History & Why It Dominates BIM' },
    next: { id: 'rv-3', title: 'Starting a Project: Templates & Project Setup' },
  },

  // ============================================================
  // LESSON RV-03 — Starting a Project
  // ============================================================
  {
    id: 'rv-3', num: '03',
    title: 'Starting a Project: Templates & Project Setup',
    topic: 'revit', cat: 'beginner', readTime: '10 min', free: true,
    desc: 'How to correctly start a Revit project — choosing templates, setting units, configuring levels, and establishing grids.',
    intro: `How you start a Revit project determines how smoothly everything else goes. A poorly set up project creates problems that compound over time — wrong units, missing levels, inconsistent grids, and no standards. This lesson covers the complete professional workflow for starting a Revit project correctly from the very first click.`,
    sections: [
      {
        id: 's1', heading: 'Why Project Setup Matters', level: 'h2',
        content: `In professional BIM practice, **project setup is not something you skip or rush**. A correctly set up project:\n\n- Uses the right units and coordinates from the start\n- Has properly defined levels before any modeling begins\n- Has a grid system that matches the structural drawing\n- Uses a company-standard template with approved families\n- Is saved in the correct location with the correct file name\n\nMistakes at the start — especially wrong units or incorrect levels — can require hours of rework to fix later. Senior BIM professionals spend significant time on setup before the first wall is placed.`,
      },
      {
        id: 's2', heading: 'Revit Templates (.rte files)', level: 'h2',
        content: `Every Revit project starts from a **template (.rte file)**. Templates pre-configure a complete set of standard settings so you do not start from a blank slate on every project.`,
        subsections: [
          {
            heading: 'What a Good Company Template Contains',
            items: [
              'Project units already set correctly (millimeters for Philippine practice)',
              'Standard families pre-loaded (common wall types, doors, windows)',
              'View templates configured for all standard view types',
              'Title block families for all sheet sizes (A0, A1, A2, A3, A4)',
              'Line styles, line weights, and fill patterns configured to office standard',
              'Annotation families — text styles, dimension styles, and tag families',
              'Phase settings configured (Existing, New Construction, Demolition)',
              'Shared parameter file already linked for common parameters',
            ],
          },
          {
            heading: 'Default Revit Templates Available',
            items: [
              '**Architectural Template** — for architectural projects, most commonly used',
              '**Structural Template** — for structural engineering with beam/column tags',
              '**Mechanical Template** — for HVAC and mechanical engineering systems',
              '**Electrical Template** — for electrical distribution and lighting design',
              '**Plumbing Template** — for plumbing, drainage, and fire protection systems',
              '**Construction Template** — for contractor use with quantity tracking focus',
            ],
          },
        ],
        formula: { label: 'Template Value', text: 'Good Company Template = 2-4 Hours of Manual Setup Saved on Every New Project' },
      },
      {
        id: 's3', heading: 'Creating a New Project Step by Step', level: 'h2',
        content: `Creating a new project correctly from the very first step sets the foundation for professional delivery.`,
        code: {
          label: 'New Project Creation Workflow',
          lines: [
            'Step 1 → Click the R button (Application Menu)',
            'Step 2 → Select: New → Project',
            'Step 3 → In the New Project dialog:',
            '         Template file: click Browse → select your .rte template',
            '         Create new: Project (not Project Template)',
            'Step 4 → Click OK',
            'Step 5 → IMMEDIATELY save the file (Ctrl+S):',
            '         File → Save As → Project',
            '         Use correct naming: ProjectName_Discipline_Date.rvt',
            '         Example: BGCTower_Architecture_2026-06-25.rvt',
            'Step 6 → Save to the correct project server folder',
            '         NEVER save only to your local desktop',
          ],
        },
      },
      {
        id: 's4', heading: 'Setting Project Units', level: 'h2',
        content: `**Project Units** define the unit system used throughout the entire project. In the Philippines, the metric system with **millimeters (mm)** is the standard for architectural and structural work.\n\nTo set Project Units: **Manage tab → Settings panel → Project Units (shortcut: UN)**`,
        subsections: [
          {
            heading: 'Standard Unit Settings for Philippine Practice',
            items: [
              '**Length** — Millimeters (mm), 0 decimal places for dimensions',
              '**Area** — Square Meters (m²), 2 decimal places for floor areas',
              '**Volume** — Cubic Meters (m³), 2 decimal places for concrete volumes',
              '**Angle** — Degrees, 2 decimal places',
              '**Slope** — 1:12 ratio or percentage depending on discipline',
              '**Currency** — Philippine Peso (₱) for cost schedule fields',
            ],
          },
        ],
        formula: { label: 'Philippine Standard', text: 'All Lengths in mm → All Areas in m² → All Volumes in m³ → No Mixed Units' },
      },
      {
        id: 's5', heading: 'Setting Up Levels', level: 'h2',
        content: `**Levels** are horizontal planes that define the floor heights of your building. Every element in Revit — walls, floors, columns, MEP systems — is placed relative to a level. Setting up levels correctly before any modeling is one of the most critical setup steps.\n\nLevels are created and edited in any **Elevation or Section view** — you cannot create levels in floor plan views.`,
        code: {
          label: 'Level Setup Workflow',
          lines: [
            'Step 1 → Open an Elevation view from the Project Browser',
            '         (North, South, East, or West elevation)',
            'Step 2 → Rename existing levels:',
            '         Double-click level name → type new name → Enter',
            '         Example: rename "Level 1" to "Ground Floor"',
            'Step 3 → When Revit asks "Rename corresponding views?" → Yes',
            'Step 4 → Set correct elevations:',
            '         Click the elevation number → type the value in mm',
            '         Ground Floor=0  Level 1=4500  Level 2=9000  Roof=13500',
            'Step 5 → Add new levels:',
            '         Architecture tab → Datum panel → Level',
            '         Draw a horizontal line at the correct elevation',
            'Step 6 → Tick "Make Plan View" to auto-create floor plan views',
            '',
            'IMPORTANT: Set up ALL levels before modeling begins.',
            'Renaming levels after modeling can cause reference errors.',
          ],
        },
      },
      {
        id: 's6', heading: 'Setting Up Grids', level: 'h2',
        content: `**Grids** are the column grid lines that define the structural layout of the building. In Revit, grids are datum elements — like levels, they appear across all views and provide the reference framework for placing structural elements and walls.\n\nGrids are created in floor plan views and automatically appear in all elevation and section views.`,
        items: [
          '**To place a grid** — Architecture tab → Datum panel → Grid (shortcut: **GR**)',
          '**Grid naming convention** — Letters (A, B, C) in one direction; Numbers (1, 2, 3) in the other',
          '**Avoid letters I, O, Q** — easily confused with numbers 1, 0, 0',
          '**Grid snapping** — when placing walls and columns, elements snap directly to grid lines',
          '**Grid coordination** — always match your Revit grids to the structural engineer\'s column grid drawing',
          '**Grid extents** — control which views a grid appears in by adjusting its 2D grip handles',
        ],
        formula: { label: 'Grid Convention', text: 'Horizontal Direction → Letters (A, B, C) | Vertical Direction → Numbers (1, 2, 3)' },
      },
      {
        id: 's7', heading: 'Project Information Setup', level: 'h2',
        content: `**Project Information** contains the metadata about the project that appears in all title blocks across every sheet. Fill this in completely at the start of every project — it saves time and ensures professional documentation from the first sheet.\n\n**Location: Manage tab → Project Information**`,
        code: {
          label: 'Project Information Fields to Complete',
          lines: [
            'Project Name         → Full official project name',
            'Project Number       → Client or office project number',
            'Project Address      → Full site address',
            'Client Name          → Building owner or developer name',
            'Project Issue Date   → Current document issue date',
            'Project Status       → Working / SD / DD / CD / For Construction',
            'Author               → Lead architect or BIM author name',
            'Building Name        → Building name if different from project name',
            '',
            'These fields auto-populate title block text on ALL sheets',
            'Fill them once → they appear everywhere automatically',
          ],
        },
      },
      {
        id: 's8', heading: 'Setting Project Location', level: 'h2',
        content: `Setting the **Project Location** defines the geographic position of the building for accurate solar analysis, energy modeling, and site orientation.\n\n**Location: Manage → Project Location → Location**`,
        items: [
          'Search for the city: type "Manila, Philippines" or the specific city name',
          'Revit uses latitude and longitude for accurate solar calculations',
          '**True North** — set the actual north direction for site plans',
          '**Project North** — the "up" direction on your floor plans for comfortable drawing',
          'True North and Project North are often different angles — set both correctly',
          'Essential for any project requiring energy analysis or solar studies',
        ],
      },
      {
        id: 's9', heading: 'Professional File Management', level: 'h2',
        content: `Professional file management from the very start prevents version confusion, lost work, and collaboration problems on every project.`,
        subsections: [
          {
            heading: 'File Naming Convention',
            items: [
              'Format: ProjectCode_Discipline_Status_Date.rvt',
              'Example: BGCT_ARCH_WIP_2026-06-25.rvt',
              'Never use spaces in file names — use underscores (_) or hyphens (-)',
              'Discipline codes: ARCH / STRUC / MECH / ELEC / PLMB / FIRE',
              'Status codes: WIP (Work in Progress) / COORD / ISSUED / APPROVED',
            ],
          },
          {
            heading: 'Save and Backup Settings',
            items: [
              'Set auto-save reminder to every 30 minutes minimum',
              'Revit automatically creates numbered backup files (.0001.rvt, .0002.rvt)',
              'Keep at least 3 backup copies — set in Manage → Settings',
              'Save to project server or BIM 360 — never work only from local desktop',
              'Press Ctrl+S every 15-20 minutes while actively modeling',
            ],
          },
        ],
        formula: { label: 'File Safety Rule', text: 'Ctrl+S Frequently + Backup Copies + Server Storage = Zero Lost Work' },
      },
    ],
    takeaways: [
      'Project setup — templates, units, levels, and grids — is the foundation that determines everything that follows.',
      'Always start from a company template (.rte) that pre-loads approved standards, families, and settings.',
      'Set project units to millimeters before any modeling — changing units later causes significant problems.',
      'Set up ALL levels in an elevation view before placing any model elements — every element references a level.',
      'Grids define the structural column layout — always match your Revit grids to the structural engineer\'s drawing.',
      'Fill in Project Information completely at the start — it automatically populates every title block in the project.',
    ],
    resource: { label: 'Revit Project Setup Checklist', type: 'PDF' },
    quiz: { label: 'Project Setup Quiz', questions: 10, time: '5 min' },
    prev: { id: 'rv-2', title: 'The Revit Interface: Every Panel Explained' },
    next: { id: 'rv-4', title: 'Navigation: Views, Zoom & View Controls' },
  },

];

export default revitLessons;
