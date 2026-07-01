// ============================================================
// AUTODESK DYNAMO — LESSONS dyn-1 through dyn-8 (BEGINNER)
// Section: Dynamo Basics / Data & Geometry / Revit Connection
// File: lib/dynamoLessonsContent/dynamoLessons_1_8.js
// Index: lib/dynamoLessonsData.js
// Free lessons: dyn-1, dyn-2, dyn-3
// ============================================================

export const lessons_1_8 = [

  // ============================================================
  // LESSON DYN-01 — What is Dynamo & Where it Fits in the BIM Workflow
  // ============================================================
  {
    id: 'dyn-1', num: '01',
    title: 'What is Dynamo & Where it Fits in the BIM Workflow',
    topic: 'Dynamo Basics', cat: 'beginner', readTime: '8 min', free: true,
    desc: 'Understand what Autodesk Dynamo is, how it relates to Revit, and why visual programming is becoming a core BIM skill.',
    intro: `Every BIM Manager eventually hits the same wall: a repetitive task that Revit's built-in tools cannot automate, and no in-house programmer available to write a plugin. Autodesk Dynamo exists to remove that wall. It lets you automate, generate, and analyze BIM data by connecting visual nodes rather than writing lines of code. This lesson introduces what Dynamo is, how it differs from (and complements) Revit, and why visual programming has become an expected skill for BIM professionals rather than a niche specialty.`,
    sections: [
      {
        id: 's1', heading: 'What is Autodesk Dynamo?', level: 'h2',
        content: `**Dynamo** is a visual programming (visual scripting) tool that lets you build logic by connecting **nodes** on a canvas instead of typing code line by line. Each node performs an operation — get a wall, filter a list, calculate an area, set a parameter — and you connect nodes together with **wires** to build up a "graph" that describes a process from start to finish.\n\nDynamo was created by Ian Keough while working at Autodesk, initially as an open-source project aimed at giving designers a way to script parametric behavior without needing to learn a traditional programming language first. It has since become a core part of the Autodesk AEC toolset, ships directly inside Revit, and is also available as a free standalone application for general computational design work.`,
        formula: { label: 'Dynamo Core Concept', text: 'Nodes + Wires + Data = A Visual Program (a "graph") that automates a repetitive or complex task' },
      },
      {
        id: 's2', heading: 'Dynamo for Revit vs Dynamo Core / Sandbox', level: 'h2',
        content: `Dynamo exists in two related forms, and understanding the difference early prevents confusion later in this course.`,
        subsections: [
          {
            heading: 'The Two Flavors of Dynamo',
            items: [
              '**Dynamo for Revit** — the version bundled inside Revit itself; graphs can read and write live Revit model data (walls, families, parameters, views)',
              '**Dynamo Core / Dynamo Sandbox** — a free, standalone version with no Revit dependency, used for pure geometry and computational design (distributed via dynamobim.org / the DynamoBIM GitHub project)',
              '**Dynamo Studio** — a legacy standalone product name Autodesk used before consolidating standalone functionality into Dynamo Core/Sandbox',
              'Graphs built in the standalone Sandbox can often be opened in Dynamo for Revit, but nodes that reference Revit elements will only work when a Revit document is open',
              'This course focuses primarily on **Dynamo for Revit**, since that is where most BIM automation value is created',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Where Dynamo Fits in the BIM Workflow', level: 'h2',
        content: `Dynamo is not a replacement for Revit — it is an extension of it. Think of Dynamo as a way to reach into the Revit model programmatically and do things that would be slow, repetitive, or simply impossible through the standard Revit user interface.`,
        code: {
          label: 'BIM Workflow — Where Dynamo Lives',
          lines: [
            'Revit alone:',
            '  → Manual modeling, manual parameter entry, manual repetition',
            '  → Fine for one-off tasks, painful for bulk or repeated tasks',
            '',
            'Revit + Dynamo:',
            '  → Bulk parameter updates across hundreds of elements',
            '  → Generative geometry (facades, structural grids, layouts)',
            '  → Automated QA/QC checks on model data',
            '  → Data export/import between Revit and Excel, databases, or other tools',
            '',
            'Dynamo answers: "How do I do this 500 times without doing it 500 times?"',
            'Revit answers: "What does the building actually look like and document as?"',
          ],
        },
      },
      {
        id: 's4', heading: 'What Dynamo Actually Does', level: 'h2',
        content: `Dynamo's capabilities fall into a handful of broad categories that will recur throughout this course.`,
        items: [
          '**Automation** — repeat a task across many elements (renaming views, updating parameters, placing families) without manual repetition',
          '**Geometry Generation** — create points, curves, surfaces, and complex forms using mathematical or rule-based logic',
          '**Data Interoperability** — read from and write to Excel spreadsheets, CSV files, databases, and web APIs',
          '**Model Querying and QA/QC** — select elements by category or property and check them against project standards',
          '**Computational/Generative Design** — explore many design options quickly by parameterizing geometry and re-running a graph with different inputs',
        ],
      },
      {
        id: 's5', heading: 'Dynamo vs Revit — Different Tools, Same Model', level: 'h2',
        content: `New users often ask whether learning Dynamo means they no longer need to know Revit well. The opposite is true — Dynamo is most powerful in the hands of someone who already understands Revit's element hierarchy, parameters, and families.`,
        subsections: [
          {
            heading: 'Tool Comparison',
            items: [
              '**Revit** — authors and documents the BIM model directly through its graphical interface',
              '**Dynamo** — automates, generates, and queries that same model programmatically',
              '**Revit** — every action is manual, one element or selection at a time',
              '**Dynamo** — one graph can act on one element or ten thousand elements identically',
              '**Revit** — answers "what does this wall look like?"',
              '**Dynamo** — answers "set every wall on Level 3 to this fire rating, and tell me which ones failed"',
            ],
          },
        ],
        formula: { label: 'Working Principle', text: 'Learn Revit deeply first — Dynamo automates what you already understand, it does not replace understanding it' },
      },
      {
        id: 's6', heading: 'Why Visual Programming, Not Text Code?', level: 'h2',
        content: `Dynamo deliberately uses a **visual** programming paradigm rather than a text-based language as its primary interface. This lowers the barrier to entry significantly for architects, engineers, and BIM managers who are not trained software developers.

Every node in a Dynamo graph is visible on the canvas, along with the data flowing between them via the **Watch** node, which makes debugging intuitive: you can see exactly what data is flowing along each wire at each step, rather than needing to mentally trace variables through lines of text. For users who do want to write code directly, Dynamo also provides **Code Block** nodes, which accept typed expressions in **DesignScript** (Dynamo's underlying scripting language) directly on the canvas — a bridge between visual and textual programming.`,
        items: [
          'Visual graphs are easier to read, share, and hand over to a colleague than a block of unfamiliar code',
          'The Watch node lets you inspect the actual output value of any node at any point in the graph',
          'Code Block nodes let more advanced users type expressions directly, mixing visual and textual approaches in the same graph',
          'Dynamo graphs are saved as **.dyn** files, which can be version-controlled, shared, and reused across projects',
        ],
      },
      {
        id: 's7', heading: 'Who Uses Dynamo', level: 'h2',
        content: `Dynamo has moved from a niche "computational designer" tool into a mainstream BIM skill expected across several roles.`,
        items: [
          '**BIM Managers** — automating QA/QC checks, model health audits, and standards compliance across projects',
          '**BIM Coordinators / Modelers** — bulk parameter edits, sheet/view automation, family placement automation',
          '**Architects and Designers** — generative design exploration, facade and structural pattern generation',
          '**MEP and Structural Engineers** — automated system checks, load data export, coordination reporting',
          '**Computational Designers** — building custom nodes and complex generative workflows for specialist studios',
        ],
      },
    ],
    takeaways: [
      'Dynamo is a visual programming tool that builds "graphs" from nodes connected by wires, instead of typed code.',
      'Dynamo for Revit ships inside Revit and can read/write live Revit model data; Dynamo Core/Sandbox is a free standalone version for pure geometry work with no Revit dependency.',
      'Dynamo does not replace Revit — it automates, generates, and queries the same BIM model Revit authors.',
      'Core Dynamo capabilities include automation, geometry generation, data interoperability, model QA/QC, and generative design.',
      'Dynamo graphs are saved as .dyn files; Code Block nodes let advanced users type DesignScript expressions directly on the canvas.',
      'Dynamo is most valuable to users who already understand Revit\'s elements, parameters, and families deeply.',
    ],
    resource: { label: 'Dynamo Overview Guide', type: 'PDF' },
    quiz: { label: 'What is Dynamo Quiz', questions: 10, time: '5 min' },
    prev: null,
    next: { id: 'dyn-2', title: 'Installing Dynamo & Understanding the Dynamo-Revit Connection' },
  },

  // ============================================================
  // LESSON DYN-02 — Installing Dynamo & Understanding the Dynamo-Revit Connection
  // ============================================================
  {
    id: 'dyn-2', num: '02',
    title: 'Installing Dynamo & Understanding the Dynamo-Revit Connection',
    topic: 'Dynamo Basics', cat: 'beginner', readTime: '7 min', free: true,
    desc: 'Get Dynamo running — how it ships with Revit, how to install the standalone version, and how the two connect to a live model.',
    intro: `Unlike many BIM add-ins, Dynamo usually requires no separate installation at all — it is already sitting inside your copy of Revit, waiting on the Manage tab. This lesson covers exactly where to find it, when you might need the standalone installer instead, and how a Dynamo graph actually connects to the Revit document it is running against.`,
    sections: [
      {
        id: 's1', heading: 'Dynamo Ships Inside Revit', level: 'h2',
        content: `Since Revit 2016, **Dynamo for Revit** has been included with every standard Revit installation at no additional cost. There is nothing to download or license separately if you already have Revit installed — Dynamo is simply another tool on the ribbon, similar to how Navisworks Freedom ships alongside Revit for coordination review.`,
        code: {
          label: 'Finding Dynamo in Revit',
          lines: [
            'Revit ribbon → Manage tab → Visual Programming panel → Dynamo',
            '',
            'Clicking "Dynamo" opens the Dynamo window:',
            '  → A new, empty workspace opens by default',
            '  → Or choose "Open" to load an existing .dyn file',
            '',
            'The Dynamo window is a separate application window,',
            'but it stays connected to the Revit session that launched it.',
          ],
        },
        formula: { label: 'Quick Access', text: 'Manage tab → Dynamo — no separate installer needed for Dynamo for Revit' },
      },
      {
        id: 's2', heading: 'Installing Standalone Dynamo Core / Sandbox', level: 'h2',
        content: `If you want to build or test graphs that involve only geometry — with no connection to a Revit model — you can install the standalone version instead. This is common for computational designers who need Dynamo's geometry engine without opening Revit at all.`,
        subsections: [
          {
            heading: 'Standalone Installation Steps',
            items: [
              'Go to the official Dynamo project site (dynamobim.org) or the DynamoBIM GitHub releases page',
              'Download the **Dynamo Sandbox** installer matching your Dynamo version',
              'Run the installer — it does not require Revit to be installed on the machine',
              'Launch "Dynamo Sandbox" from the Start Menu like any standalone application',
              'Note that nodes under the "Revit" category in the Node Library will not function in Sandbox, since there is no Revit document to connect to',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Matching Dynamo Versions to Revit Versions', level: 'h2',
        content: `Each release of Revit ships with a specific version of Dynamo for Revit already built in — you do not choose the version independently. This matters when opening a .dyn file that was authored in a different Revit version.`,
        items: [
          'Check your installed Dynamo version: Manage tab → Dynamo → the version number appears in the Dynamo window title bar or the About dialog',
          'Graphs built with newer nodes may show "could not be loaded" warnings if opened in an older Dynamo version',
          'Custom packages (covered later in this course) also have their own version compatibility — always check package compatibility when moving a graph between machines',
          'When collaborating across a team, standardize on the same Revit (and therefore Dynamo) version wherever possible to avoid graph compatibility issues',
        ],
      },
      {
        id: 's4', heading: 'How Dynamo Connects to a Revit Document', level: 'h2',
        content: `When you launch Dynamo for Revit from the Manage tab, Dynamo automatically links itself to the **active Revit document** — the project file that was open when you clicked the Dynamo icon. This connection is what allows Revit-category nodes to select elements, read parameters, and make changes directly in that model.`,
        code: {
          label: 'The Dynamo-Revit Connection',
          lines: [
            'You open Project_A.rvt in Revit',
            '  → Manage tab → Dynamo',
            '  → Dynamo launches, connected to Project_A.rvt',
            '',
            'Any node under the "Revit" category now operates on Project_A.rvt:',
            '  → Select Model Element, Element.GetParameterValueByName, etc.',
            '',
            'If you switch the active document in Revit while Dynamo is open,',
            'you may need to re-launch Dynamo to connect to the newly active document.',
          ],
        },
        formula: { label: 'Key Rule', text: 'A Dynamo for Revit graph always runs against whichever Revit document launched it — not just any open document' },
      },
      {
        id: 's5', heading: 'The Dynamo Player — A Brief Preview', level: 'h2',
        content: `Once a graph is built and tested, you do not always need to reopen the full Dynamo interface to run it again. **Dynamo Player** is a lightweight tool, also accessed from the Manage tab, that runs a saved .dyn file with a single click and lets you adjust simple input values without seeing the underlying graph at all. This is extremely useful for handing a finished automation off to a colleague who does not need to understand — or accidentally break — the visual programming behind it. Dynamo Player is covered in full detail later in this course.`,
      },
      {
        id: 's6', heading: 'System Requirements and Performance Notes', level: 'h2',
        content: `Dynamo runs as part of the same process as Revit when launched through the Manage tab, so its performance is tied closely to your machine's overall Revit performance.`,
        items: [
          '**RAM** — Dynamo shares memory with the open Revit session; large graphs against large models benefit from 16 GB RAM or more',
          '**CPU** — most Dynamo node execution is single-threaded per node, so a graph with heavy loops can be CPU-bound',
          '**Revit must remain open** — closing the Revit document that launched Dynamo will disconnect the graph from the model',
          'Save your Revit model before running an untested graph that modifies elements — Dynamo changes can be undone with Ctrl+Z in Revit in most cases, but this is not guaranteed for every node',
        ],
      },
      {
        id: 's7', heading: 'First Launch Checklist', level: 'h2',
        content: `Before writing your first graph in the next lesson, confirm the following so you are not troubleshooting basics mid-lesson.`,
        subsections: [
          {
            heading: 'Pre-Flight Checklist',
            items: [
              'Open any Revit project (a simple test project is fine for learning)',
              'Go to Manage tab → Visual Programming panel → confirm the Dynamo icon is present',
              'Click Dynamo and confirm the Dynamo window opens without error',
              'Confirm the Node Library panel is visible on the left of the Dynamo window',
              'Confirm you can see a blank canvas — this is your workspace for the next lesson',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'Dynamo for Revit ships inside every standard Revit installation since Revit 2016 — access it via Manage tab → Dynamo.',
      'Dynamo Sandbox is a free standalone installer (from dynamobim.org) for pure geometry work with no Revit dependency.',
      'Each Revit version bundles a specific Dynamo version; graphs and packages should be checked for version compatibility across a team.',
      'A Dynamo for Revit graph connects to whichever Revit document was active when Dynamo was launched from the Manage tab.',
      'Dynamo Player lets you run a saved .dyn file with one click, without opening the full graph editor — useful for handing off finished automations.',
      'Dynamo shares Revit\'s process and memory, so save your model before running an untested graph that modifies elements.',
    ],
    resource: { label: 'Dynamo Installation & Setup Guide', type: 'PDF' },
    quiz: { label: 'Installing Dynamo Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-1', title: 'What is Dynamo & Where it Fits in the BIM Workflow' },
    next: { id: 'dyn-3', title: 'The Dynamo Interface — Canvas, Node Library & the Workspace' },
  },

  // ============================================================
  // LESSON DYN-03 — The Dynamo Interface
  // ============================================================
  {
    id: 'dyn-3', num: '03',
    title: 'The Dynamo Interface — Canvas, Node Library & the Workspace',
    topic: 'Dynamo Basics', cat: 'beginner', readTime: '8 min', free: true,
    desc: 'A complete tour of the Dynamo interface — the canvas, the Node Library, node anatomy, and workspace navigation.',
    intro: `Before building anything, you need to know where everything lives. The Dynamo window has just a few key areas — the canvas where graphs are built, the Node Library where every available node is organized, and a small set of toolbar controls that govern how and when a graph runs. This lesson is a guided tour of each, along with the anatomy of a single node, so that the next lesson's first graph makes immediate sense.`,
    sections: [
      {
        id: 's1', heading: 'Interface Overview', level: 'h2',
        content: `The Dynamo window organizes around one central **canvas** — the workspace where nodes are placed and wired together.`,
        code: {
          label: 'Dynamo Interface Areas',
          lines: [
            'Top toolbar       → New, Open, Save, Undo/Redo, Run Settings',
            'Node Library (left) → Searchable list of all available nodes, by category',
            'Canvas (centre)     → The graph workspace — nodes, wires, and Code Blocks live here',
            'Run button (bottom-right) → Executes the graph (in Manual mode)',
            'Run Settings (bottom-left) → Automatic vs Manual run mode toggle',
            'Background Preview  → 3D geometry preview panel behind/below the canvas',
          ],
        },
      },
      {
        id: 's2', heading: 'The Node Library', level: 'h2',
        content: `The **Node Library** is the searchable catalogue of every node available to you — organized into categories that mirror the kinds of tasks Dynamo performs.`,
        items: [
          '**Geometry** — Point, Line, Curve, Surface, Solid nodes for building and editing shapes',
          '**Revit** — nodes that read and write Revit elements, parameters, families, views, and categories',
          '**List** — nodes for filtering, sorting, combining, and restructuring lists of data',
          '**Core** — general-purpose nodes for math, logic, strings, and Code Blocks',
          '**Search bar** — type a keyword (e.g., "wall" or "parameter") at the top of the Library to filter instantly',
          'Categories expand into subcategories (e.g., Geometry → Point → Point.ByCoordinates) — drilling down gets you to the specific node you need',
        ],
        formula: { label: 'Finding a Node Fast', text: 'Type a keyword into the Node Library search bar rather than browsing categories manually — it is almost always faster' },
      },
      {
        id: 's3', heading: 'Anatomy of a Node', level: 'h2',
        content: `Every node on the canvas follows the same visual structure, regardless of what it does. Learning to read a node at a glance is the single most useful visual skill in Dynamo.`,
        code: {
          label: 'Node Anatomy',
          lines: [
            '┌─────────────────────────────┐',
            '│  Point.ByCoordinates          │  ← node name (title bar)',
            '│ ○ x                    result ○│  ← left = input ports',
            '│ ○ y                            │  ← right = output port',
            '│ ○ z                            │',
            '└─────────────────────────────┘',
            '',
            'Input ports  (left side)  → receive data from other nodes via wires',
            'Output ports (right side) → send this node\'s result to other nodes',
            'A grey/dashed port       → optional input, has a default value if left unconnected',
            'A filled/solid dot       → the port currently has a value connected',
          ],
        },
      },
      {
        id: 's4', heading: 'Wires — Connecting Nodes', level: 'h2',
        content: `A **wire** is the visual connection between one node's output port and another node's input port. Wires are how data flows through a graph — nothing happens until nodes are connected in a path from inputs to outputs.`,
        subsections: [
          {
            heading: 'Working with Wires',
            items: [
              'Click and drag from an output port to an input port to create a wire',
              'A wire can only start from one output, but that output can feed multiple input ports (one output can "fan out" to many nodes)',
              'An input port can only accept one wire at a time — connecting a new wire replaces the old one',
              'Click a wire and press Delete to remove just that connection without deleting either node',
              'Wires are colour-coded by data type in some views, helping you see at a glance what kind of data is flowing',
            ],
          },
        ],
      },
      {
        id: 's5', heading: 'The Watch Node', level: 'h2',
        content: `The **Watch** node is one of the most frequently used nodes in Dynamo, precisely because it does not transform data — it simply displays whatever value flows into it. Attaching a Watch node to any wire lets you inspect exactly what that node is outputting, which is essential for debugging a graph that is not behaving as expected.`,
        items: [
          'Search "Watch" in the Node Library and drag it onto the canvas',
          'Connect any node\'s output into the Watch node\'s input',
          'The Watch node displays the value — a number, a string, a list, or a geometry preview reference',
          'For lists, the Watch node expands into a readable tree showing each list index and its value',
          'Watch nodes are typically temporary — used while building and debugging, then often removed or left in place for documentation',
        ],
      },
      {
        id: 's6', heading: 'Code Block Nodes', level: 'h2',
        content: `A **Code Block** is a special node that lets you type expressions directly onto the canvas using **DesignScript**, Dynamo's native scripting language, instead of wiring together several simple nodes. Code Blocks are useful for quick math, string formatting, or creating input ports without hunting for individual nodes.`,
        code: {
          label: 'Code Block Example',
          lines: [
            'Double-click an empty area of the canvas to create a Code Block',
            '',
            'Example content typed into a Code Block:',
            '  a = 5;',
            '  b = 10;',
            '  a + b;',
            '',
            'Each line ending in a semicolon becomes an output port',
            'Typing a variable name with no value (e.g. "x;") creates an input port named x',
          ],
        },
        formula: { label: 'When to Use a Code Block', text: 'Use a Code Block for quick math or text logic; use full nodes when clarity for other readers of the graph matters more than brevity' },
      },
      {
        id: 's7', heading: 'Navigating the Canvas', level: 'h2',
        content: `The canvas can hold graphs far larger than fit on one screen, so efficient navigation matters as soon as a graph grows past a handful of nodes.`,
        items: [
          '**Scroll wheel** — zoom in and out, centered on the cursor position',
          '**Click and drag on empty canvas** — pan the view',
          '**Ctrl + scroll or Zoom-to-Fit button** — fit the entire graph in view',
          '**Drag a selection box** around multiple nodes to select and move them together',
          '**Right-click canvas** — access options like "Add Group" to visually organize related nodes with a labelled box',
          'Use **Groups** liberally on larger graphs — they make it obvious at a glance what a cluster of nodes is doing',
        ],
      },
    ],
    takeaways: [
      'The Dynamo window centers on a canvas, with the searchable Node Library on the left and Run controls at the bottom.',
      'Every node has input ports on the left and output ports on the right; a node\'s title bar names its function.',
      'Wires connect an output port to an input port; one output can feed multiple inputs, but each input accepts only one wire.',
      'The Watch node displays the live value flowing along any wire — essential for debugging a graph.',
      'Code Block nodes accept typed DesignScript expressions directly on the canvas as an alternative to wiring individual nodes.',
      'Use panning, zoom-to-fit, and Groups to keep larger graphs navigable and readable.',
    ],
    resource: { label: 'Dynamo Interface Quick Reference Card', type: 'PDF' },
    quiz: { label: 'Dynamo Interface Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-2', title: 'Installing Dynamo & Understanding the Dynamo-Revit Connection' },
    next: { id: 'dyn-4', title: 'Your First Graph — Connecting Nodes & Understanding Data Flow' },
  },

  // ============================================================
  // LESSON DYN-04 — Your First Graph
  // ============================================================
  {
    id: 'dyn-4', num: '04',
    title: 'Your First Graph — Connecting Nodes & Understanding Data Flow',
    topic: 'Data & Geometry', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'Build your first working Dynamo graph from scratch and understand how data flows from node to node.',
    intro: `Reading about nodes and wires only goes so far — the concepts click once you build something yourself and watch data move through it. This lesson walks through building your first complete graph, from placing the first node to seeing a final result in a Watch node, and explains the mental model of "data flow" that underlies everything else in this course.`,
    sections: [
      {
        id: 's1', heading: 'Setting Up a Blank Workspace', level: 'h2',
        content: `Start every new graph the same way: with a clean, empty workspace and a plan for what the graph needs to produce.`,
        subsections: [
          {
            heading: 'Starting Steps',
            items: [
              'Open Revit, open any project, then Manage tab → Dynamo',
              'In the Dynamo window, choose **New** to start a blank workspace (or it may open blank by default)',
              'Save immediately: File → Save As → give the graph a clear name (e.g., "MyFirstGraph.dyn")',
              'Saving early means you do not lose work, and gives you a habit to repeat on every real project graph',
            ],
          },
        ],
      },
      {
        id: 's2', heading: 'Building a Simple Math Graph', level: 'h2',
        content: `The simplest possible graph involves no Revit elements at all — just numbers, an operation, and a way to see the result. This isolates the core concept of data flow before Revit-specific complexity is introduced.`,
        code: {
          label: 'First Graph: Add Two Numbers',
          lines: [
            'Step 1: Search Node Library for "Number" → drag a Number node onto the canvas',
            '        Set its value to 5',
            '',
            'Step 2: Drag a second Number node onto the canvas',
            '        Set its value to 10',
            '',
            'Step 3: Search for "+" (Add) → drag the Add node onto the canvas',
            '        Connect Number node 1 output → Add node input "x"',
            '        Connect Number node 2 output → Add node input "y"',
            '',
            'Step 4: Search for "Watch" → drag a Watch node onto the canvas',
            '        Connect Add node output → Watch node input',
            '',
            'Result shown in Watch node: 15',
          ],
        },
        formula: { label: 'Data Flow Principle', text: 'Data always flows left to right, from output ports to input ports, along wires — never backward' },
      },
      {
        id: 's3', heading: 'Understanding Data Flow', level: 'h2',
        content: `Dynamo is a **dataflow** programming environment: rather than executing instructions top-to-bottom like a written script, it evaluates nodes based on their dependencies. A node only runs once all of its required inputs have values available.`,
        items: [
          'A node with no incoming wires on a required input simply uses its default value, or produces a null/error if no default exists',
          'If Node B depends on Node A\'s output, Node A always executes first — Dynamo determines this automatically from the wiring, not from where the nodes are positioned on the canvas',
          'Moving a node visually on the canvas has no effect on execution order — only the wires (dependencies) matter',
          'This means a graph can be read as a dependency diagram: trace the wires backward from any node to understand everything that must happen before it',
        ],
      },
      {
        id: 's4', heading: 'Run Modes — Automatic vs Manual', level: 'h2',
        content: `Dynamo graphs can execute in one of two run modes, controlled at the bottom-left of the Dynamo window. Understanding the difference prevents both wasted time and accidental changes to a live Revit model.`,
        subsections: [
          {
            heading: 'The Two Run Modes',
            items: [
              '**Automatic** — the graph re-runs immediately every time you change a value or connection; convenient for small graphs and quick experimentation',
              '**Manual** — the graph only runs when you click the **Run** button; recommended for graphs that modify Revit elements, so changes do not fire unexpectedly while you are still editing',
              'Toggle between modes using the switch near the Run button at the bottom of the Dynamo window',
              'A best practice: build and test logic in Automatic mode on non-Revit data, then switch to Manual mode before connecting to live Revit elements',
            ],
          },
        ],
        formula: { label: 'Safety Rule', text: 'Use Manual run mode whenever a graph writes changes back into the Revit model, to avoid firing incomplete or accidental edits' },
      },
      {
        id: 's5', heading: 'Renaming and Documenting Nodes', level: 'h2',
        content: `As soon as a graph has more than a few nodes, unnamed generic nodes ("Number", "Number", "Number") become confusing. Dynamo lets you rename any node and add descriptive notes directly on the canvas.`,
        items: [
          'Double-click a node\'s title to rename it (e.g., rename a Number node to "Base Height")',
          'Right-click empty canvas → **Add Note** to place a floating text note, useful for explaining a section of the graph',
          'Right-click a group of selected nodes → **Create Group** to visually box and label a functional section of the graph',
          'Clear naming matters most when a graph will be reused, shared, or handed to Dynamo Player later — an unnamed graph is hard for anyone else (including future you) to trust',
        ],
      },
      {
        id: 's6', heading: 'Common First-Graph Mistakes', level: 'h2',
        content: `**Mistake:**
Forgetting to connect a wire to a required input and assuming the node will "figure it out." An unconnected required input either uses its default value or produces an error — always check with a Watch node rather than assuming.

**Mistake:**
Leaving the graph in Automatic mode while experimenting on a live Revit model, causing unintended changes to fire on every click. Switch to Manual mode before connecting Revit-modifying nodes.

**Mistake:**
Building a long chain of nodes without ever adding a Watch node to check intermediate results. When something goes wrong, it becomes hard to tell which node introduced the problem. Add Watch nodes liberally while learning — remove them later once a graph is finalized.`,
      },
      {
        id: 's7', heading: 'Saving and Reopening Your Graph', level: 'h2',
        content: `Dynamo graphs are saved as **.dyn** files — a text-based (JSON) file format that stores every node, its position, its settings, and its wire connections.`,
        subsections: [
          {
            heading: 'Save and Reopen Basics',
            items: [
              'File → Save (or Ctrl+S) saves the current graph to its .dyn file',
              'File → Save As lets you save a copy under a new name — useful for iterating without overwriting a working version',
              'File → Open loads any existing .dyn file into the current Dynamo session',
              '.dyn files are portable — they can be emailed, stored in a shared drive, or placed under version control alongside the Revit project',
              'A .dyn file references node and package versions; opening a graph that used a package not installed on the current machine will show missing/unresolved nodes',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'A first graph can be built with just Number nodes, a math operation node, and a Watch node — no Revit elements required.',
      'Dynamo is a dataflow environment: nodes execute based on wire dependencies, not their visual position on the canvas.',
      'Automatic run mode re-executes on every change; Manual run mode only executes when you click Run — use Manual for graphs that modify Revit.',
      'Nodes can be renamed, and canvases can hold Notes and Groups to document what a section of the graph does.',
      'Add Watch nodes liberally while building and debugging to confirm intermediate values at each step.',
      'Graphs save as .dyn files, a portable, shareable format that stores nodes, positions, settings, and wiring.',
    ],
    resource: { label: 'Your First Dynamo Graph Workbook', type: 'PDF' },
    quiz: { label: 'First Graph & Data Flow Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-3', title: 'The Dynamo Interface — Canvas, Node Library & the Workspace' },
    next: { id: 'dyn-5', title: 'Data Types in Action — How Dynamo Handles Numbers, Text & True/False' },
  },

  // ============================================================
  // LESSON DYN-05 — Data Types in Action
  // ============================================================
  {
    id: 'dyn-5', num: '05',
    title: 'Data Types in Action — How Dynamo Handles Numbers, Text & True/False',
    topic: 'Data & Geometry', cat: 'beginner', readTime: '8 min', free: false,
    desc: 'Understand the core data types flowing through Dynamo graphs — numbers, strings, and booleans — and how mismatches cause errors.',
    intro: `Every wire in a Dynamo graph carries a specific kind of data, and Dynamo is strict about matching data types correctly between nodes. A node expecting a number will not silently accept a piece of text, and understanding why prevents a whole category of confusing errors. This lesson covers the fundamental data types in Dynamo — numbers, strings, and booleans — and how they combine into lists, which the next lesson builds on for geometry.`,
    sections: [
      {
        id: 's1', heading: 'The Core Data Types', level: 'h2',
        content: `Every value that flows along a wire in Dynamo belongs to a specific data type. The three most fundamental types, used constantly throughout this course, are numbers, strings, and booleans.`,
        items: [
          '**Number** — a numeric value; Dynamo does not require you to declare whether it is a whole number (integer) or a decimal (double) — it infers this from the value entered',
          '**String** — a piece of text, always shown in quotation marks inside Dynamo (e.g., "Level 1", "Wall Type A")',
          '**Boolean** — a true/false value, used for conditions, toggles, and filters',
          '**List** — an ordered collection of any of the above (or of geometry, or of Revit elements) — covered in depth in Lesson 9',
        ],
        formula: { label: 'Type Rule', text: 'A node\'s input port expects a specific data type — connecting the wrong type either auto-converts if possible, or produces a null/error' },
      },
      {
        id: 's2', heading: 'Working with Numbers', level: 'h2',
        content: `Numbers are the most common data type in Dynamo, appearing in geometry coordinates, parameter values, counts, and mathematical operations.`,
        code: {
          label: 'Number Nodes and Operations',
          lines: [
            'Number node          → a fixed numeric value (e.g., 12.5)',
            'Number Slider node   → a draggable numeric value with min/max/step settings',
            'Integer Slider node  → like Number Slider, restricted to whole numbers',
            '',
            'Basic math nodes: +  -  *  /  (also available via Code Block: a + b;)',
            '',
            'Example: converting feet to millimetres in a Code Block',
            '  feet = 10;',
            '  mm = feet * 304.8;',
          ],
        },
      },
      {
        id: 's3', heading: 'Working with Strings', level: 'h2',
        content: `Strings represent text — names, descriptions, parameter values that are not numeric, and labels. Dynamo provides dedicated nodes for building and manipulating strings.`,
        subsections: [
          {
            heading: 'Common String Nodes',
            items: [
              '**String node** — a fixed text value, typed directly into the node',
              '**String.Concat** — joins multiple strings into one (e.g., "Level " + "1" → "Level 1")',
              '**String Contains / String.Replace** — search and replace within text, useful for parameter renaming automations',
              '**String from Object** — converts a number, boolean, or other object into its text representation',
              'In a Code Block, strings must always be wrapped in quotation marks: `"Level 1";`',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Working with Booleans', level: 'h2',
        content: `A **boolean** is a value that is either **true** or **false** — nothing else. Booleans drive conditional logic in Dynamo, most commonly through the **Boolean** node (a simple true/false toggle) and the **If** node.`,
        code: {
          label: 'Boolean Logic Example',
          lines: [
            'Boolean node       → toggle set to True or False',
            'If node inputs:',
            '  test        → the boolean condition',
            '  true output → value returned when test is True',
            '  false output→ value returned when test is False',
            '',
            'Example: choose a wall type name based on a condition',
            '  test = (Height > 3000)   // a boolean result from a comparison node',
            '  If test is True  → "Exterior Wall - Thick"',
            '  If test is False → "Exterior Wall - Standard"',
          ],
        },
        formula: { label: 'Comparison Nodes', text: '>  <  ==  >=  <=  all output a Boolean — the building blocks of conditional logic in Dynamo' },
      },
      {
        id: 's5', heading: 'Type Conversion and Mismatches', level: 'h2',
        content: `Dynamo will attempt reasonable automatic conversions between types where the conversion is unambiguous, but many combinations will simply fail or return null. Recognizing type-mismatch errors quickly saves significant debugging time.`,
        items: [
          'A number connected into a string input is usually auto-converted to its text representation without extra effort',
          'A string like "5" is not automatically treated as the number 5 in a math operation — an explicit conversion node is required',
          'Connecting a list where a single value is expected (or vice versa) is one of the most common sources of unexpected node warnings in Dynamo',
          'A node showing a small warning triangle usually means either a type mismatch or a missing required input — hover over the node or check the Watch output to diagnose',
          'The **Watch** node is the fastest way to confirm what data type is actually flowing along a wire when something looks wrong',
        ],
      },
      {
        id: 's6', heading: 'Data Types in Code Blocks', level: 'h2',
        content: `Code Blocks, introduced in the previous lesson, follow DesignScript syntax rules for each data type. Getting this syntax right avoids some of the most common early mistakes for new Dynamo users.`,
        code: {
          label: 'DesignScript Type Syntax',
          lines: [
            'Number:   x = 12.5;',
            'Integer:  count = 4;',
            'String:   name = "Level 1";      // always double quotes',
            'Boolean:  flag = true;            // lowercase true/false',
            'List:     values = [1, 2, 3];     // square brackets',
            '',
            'Mixing types without conversion causes an error, e.g.:',
            '  result = "Level " + 1;   // ERROR — string + number without conversion',
            '  result = "Level " + 1.ToString();  // correct',
          ],
        },
      },
      {
        id: 's7', heading: 'Practical Exercise — Building a Labeled Value', level: 'h2',
        content: `A common real-world need is combining a number with descriptive text — for example, generating a label like "Height: 3000mm" from a numeric parameter value. This small exercise combines everything covered in this lesson.`,
        subsections: [
          {
            heading: 'Exercise Steps',
            items: [
              'Create a Number node set to 3000',
              'Create a Code Block: `"Height: " + value.ToString() + "mm";` with an input port named "value"',
              'Connect the Number node output to the Code Block\'s "value" input',
              'Connect the Code Block output to a Watch node',
              'Confirm the Watch node displays the string: "Height: 3000mm"',
            ],
          },
        ],
        formula: { label: 'Exercise Outcome', text: 'Watch node output → "Height: 3000mm" — a number and a string successfully combined via explicit conversion' },
      },
    ],
    takeaways: [
      'The core Dynamo data types are Number, String, Boolean, and List — every wire carries one of these types.',
      'Numbers flow through Number nodes, Number/Integer Sliders, and math operation nodes; Dynamo infers integer vs decimal automatically.',
      'Strings must be wrapped in quotation marks in Code Blocks and are built or manipulated with nodes like String.Concat.',
      'Booleans are true/false values that drive conditional logic via comparison nodes and the If node.',
      'Combining a number and a string (e.g., in a label) requires an explicit conversion such as .ToString() — Dynamo will not silently combine mismatched types.',
      'A node showing a warning triangle often indicates a type mismatch — use the Watch node to confirm the actual data flowing along a wire.',
    ],
    resource: { label: 'Dynamo Data Types Cheat Sheet', type: 'PDF' },
    quiz: { label: 'Data Types in Dynamo Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-4', title: 'Your First Graph — Connecting Nodes & Understanding Data Flow' },
    next: { id: 'dyn-6', title: 'Working with Geometry — Points, Lines & Curves in Dynamo' },
  },

  // ============================================================
  // LESSON DYN-06 — Working with Geometry
  // ============================================================
  {
    id: 'dyn-6', num: '06',
    title: 'Working with Geometry — Points, Lines & Curves in Dynamo',
    topic: 'Data & Geometry', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'Build geometric objects in Dynamo — points, lines, and curves — and understand how they underpin every generative graph.',
    intro: `Behind every generative facade pattern, structural grid, or parametric family in Dynamo lies the same foundation: points, lines, and curves. Dynamo includes a full geometry engine independent of Revit, meaning you can create and manipulate shapes purely mathematically before ever touching a Revit element. This lesson builds that foundation, starting with the humble point and working up to curves.`,
    sections: [
      {
        id: 's1', heading: 'The Point — Dynamo\'s Most Basic Geometry', level: 'h2',
        content: `A **Point** is the simplest geometric object in Dynamo — a single location in 3D space defined by X, Y, and Z coordinates. Almost every other geometry type in Dynamo is ultimately built from points.`,
        code: {
          label: 'Creating Points',
          lines: [
            'Point.ByCoordinates(x, y, z)',
            '  → the most common point-creation node',
            '  → inputs: x, y, z (numbers, default 0 if left unconnected)',
            '',
            'Example:',
            '  Point.ByCoordinates(0, 0, 0)   → the origin',
            '  Point.ByCoordinates(5000, 0, 0) → a point 5000mm along the X axis',
            '',
            'Note: Dynamo\'s internal geometry units default to the',
            'document units of the connected Revit project when running',
            'inside Dynamo for Revit.',
          ],
        },
        formula: { label: 'Foundational Rule', text: 'Lines need two points; curves need three or more points (or a defined mathematical rule) — geometry builds upward from points' },
      },
      {
        id: 's2', heading: 'Building Lines', level: 'h2',
        content: `A **Line** is the straight geometry connecting two points. Dynamo's most common line-creation node is **Line.ByStartPointEndPoint**, which takes exactly the two points implied by its name.`,
        subsections: [
          {
            heading: 'Line Creation Basics',
            items: [
              'Line.ByStartPointEndPoint(startPoint, endPoint) — the standard way to create a straight line between two points',
              'A line has a defined direction (from start to end), which matters for nodes further down a graph that reference direction',
              'Lines can be queried for their length, midpoint, direction, and start/end points using dedicated query nodes',
              'Multiple connected lines can represent a polyline path, useful for defining a building footprint or structural grid line',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Curves Beyond Straight Lines', level: 'h2',
        content: `Dynamo supports curved geometry through several node families, letting you go beyond straight lines into arcs, circles, and free-form curves.`,
        items: [
          '**Arc** — a curved segment defined by three points, or by a centre point, radius, and start/end angles',
          '**Circle** — a closed curve defined by a centre point and radius (Circle.ByCenterPointRadius)',
          '**PolyCurve** — a curve built by joining multiple lines and/or arcs into a single continuous path',
          '**NurbsCurve** — a smooth, mathematically defined curve through or near a set of input points (NurbsCurve.ByPoints), used for organic or free-form shapes',
          'Curves, like lines, can be queried for length, start/end points, and points at a given parameter along their length',
        ],
      },
      {
        id: 's4', heading: 'From Curves to Surfaces and Solids', level: 'h2',
        content: `Points and curves are the building blocks for higher-level geometry that Dynamo can generate — surfaces and solids — though this course focuses primarily on the foundational point/line/curve level needed for Revit automation.`,
        code: {
          label: 'Geometry Hierarchy',
          lines: [
            'Point            → a location in space',
            '  ↓',
            'Line / Curve     → built from two or more points',
            '  ↓',
            'Surface          → built from curves (e.g., Surface.ByLoft, Surface.ByPatch)',
            '  ↓',
            'Solid            → a closed 3D volume (e.g., Solid.ByExtrusion of a closed curve)',
            '',
            'Most Revit-focused Dynamo work only needs Points and Curves —',
            'Revit itself creates the Surfaces/Solids once elements are placed.',
          ],
        },
      },
      {
        id: 's5', heading: 'The Geometry Preview', level: 'h2',
        content: `Dynamo includes a **background 3D preview** that renders any geometry produced by the graph directly in the Dynamo window, independent of Revit. This lets you validate that a Point, Line, or Curve looks correct before connecting it to any Revit-creating node.`,
        items: [
          'The preview updates automatically as the graph runs (in Automatic mode) or after clicking Run (in Manual mode)',
          'Click a node to highlight only that node\'s geometry output in the preview — useful in a busy graph',
          'Toggle a node\'s preview visibility using the small light-bulb icon that appears when hovering over a node',
          'The preview uses the same navigation controls as most 3D viewports: scroll to zoom, drag to orbit',
          'Turning off preview for intermediate nodes in a large graph can improve performance without affecting the final result',
        ],
      },
      {
        id: 's6', heading: 'Working in Lists of Geometry', level: 'h2',
        content: `Real Dynamo graphs rarely create a single point or line — they typically generate many at once, using lists (covered in full in Lesson 9). A brief preview here shows why geometry and lists are inseparable in practice.`,
        code: {
          label: 'Generating Multiple Points Example',
          lines: [
            'Code Block:',
            '  xValues = 0..5000..1000;   // 0, 1000, 2000, 3000, 4000, 5000',
            '',
            'Point.ByCoordinates(xValues, 0, 0)',
            '  → automatically produces one Point for each value in xValues',
            '  → this behavior is called "replication" — covered fully in Lesson 9',
            '',
            'Result: 6 points spaced 1000mm apart along the X axis',
          ],
        },
        formula: { label: 'Preview Concept', text: 'A single node can output a list of geometry just as easily as one item — Dynamo automatically replicates over lists' },
      },
      {
        id: 's7', heading: 'Common Geometry Mistakes for Beginners', level: 'h2',
        content: `**Mistake:**
Confusing Dynamo's internal geometry units with Revit's project units. Always confirm whether values represent millimetres, metres, or feet — this is one of the most common early sources of massively oversized or undersized geometry.

**Mistake:**
Creating geometry with the "Keep" option left unmanaged, leading to a canvas cluttered with leftover, unreferenced geometry in the background preview. Dynamo automatically cleans up geometry no longer referenced by any active node in most cases, but visually confirming this with a clean preview is good practice.

**Best Practice:**
Build and verify geometry (points, lines, curves) fully in the Dynamo preview before connecting any of it to Revit-creation nodes (e.g., nodes that place actual walls or model lines) — it is far easier to fix a geometry mistake before it becomes a real Revit element.`,
      },
    ],
    takeaways: [
      'A Point (defined by X, Y, Z) is the most basic geometric object in Dynamo, and the foundation for lines and curves.',
      'Line.ByStartPointEndPoint creates a straight line between two points; direction runs from start point to end point.',
      'Arcs, Circles, PolyCurves, and NurbsCurves extend beyond straight lines for curved and free-form geometry.',
      'The geometry hierarchy runs Point → Curve → Surface → Solid, though most Revit automation work only needs points and curves.',
      'The background 3D preview renders geometry independently of Revit, letting you validate shapes before creating real Revit elements.',
      'Dynamo automatically replicates a node over a list of inputs, meaning one Point node can produce many points at once — the basis of Lesson 9 on lists.',
    ],
    resource: { label: 'Dynamo Geometry Fundamentals Guide', type: 'PDF' },
    quiz: { label: 'Geometry in Dynamo Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-5', title: 'Data Types in Action — How Dynamo Handles Numbers, Text & True/False' },
    next: { id: 'dyn-7', title: 'Selecting & Querying Revit Elements from Dynamo' },
  },

  // ============================================================
  // LESSON DYN-07 — Selecting & Querying Revit Elements from Dynamo
  // ============================================================
  {
    id: 'dyn-7', num: '07',
    title: 'Selecting & Querying Revit Elements from Dynamo',
    topic: 'Revit Connection', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'Learn the core nodes for getting Revit elements into a Dynamo graph and reading their parameter data.',
    intro: `This is the lesson where Dynamo stops being an abstract geometry sandbox and becomes a genuine BIM tool: pulling real elements out of a live Revit model and reading their data. Every automation, QA/QC check, or bulk parameter update starts the same way — getting the right elements selected. This lesson covers the core selection and query nodes every Dynamo-for-Revit user relies on daily.`,
    sections: [
      {
        id: 's1', heading: 'Why Element Selection Comes First', level: 'h2',
        content: `Before a graph can read a parameter, modify a value, or generate a report, it needs a reference to the actual Revit element(s) it is working with. Dynamo offers several ways to get elements into a graph, each suited to a different scenario — from picking one element manually to grabbing every element of a category across the whole model.`,
        formula: { label: 'Selection First Principle', text: 'No node can act on a Revit element it does not have a reference to — selection is always the first step' },
      },
      {
        id: 's2', heading: 'Selecting Individual Elements', level: 'h2',
        content: `For quick, one-off graphs or testing, Dynamo provides nodes that let you manually pick elements directly in the Revit view.`,
        subsections: [
          {
            heading: 'Manual Selection Nodes',
            items: [
              '**Select Model Element** — click the node\'s button, then click a single element in the Revit view; the node holds a live reference to that element',
              '**Select Elements in View** — click the button, then select multiple elements in the active Revit view (box-select or Ctrl+click)',
              '**Select Faces** — a specialised node for picking specific faces on an element, useful for surface-based generative work',
              'Manually selected elements are tied to that specific Revit document session — reopening the graph elsewhere may require reselecting',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Querying Elements by Category', level: 'h2',
        content: `For any automation beyond a handful of elements, manual selection is impractical. The far more common pattern is to query the model automatically using a **Category** node combined with an "All Elements of Category" style node.`,
        code: {
          label: 'Category-Based Selection',
          lines: [
            'Categories node',
            '  → search/select a built-in Revit category, e.g. "Walls", "Doors", "Rooms"',
            '',
            'All Elements of Category(category)',
            '  → returns every element of that category in the entire project',
            '',
            'Example graph:',
            '  Categories → "OST_Walls"',
            '  ↓',
            '  All Elements of Category → (list of every wall in the project)',
            '',
            'This list can then feed directly into parameter-reading',
            'or parameter-writing nodes further along the graph.',
          ],
        },
        formula: { label: 'Scale Advantage', text: 'One "All Elements of Category" node can return hundreds of elements as reliably as it returns one' },
      },
      {
        id: 's4', heading: 'Filtering by Active View', level: 'h2',
        content: `Sometimes a graph should only act on what is visible in the current view, rather than the entire project — useful when working view-by-view or level-by-level.`,
        items: [
          '**All Elements in Active View** — returns every element visible in whichever Revit view is currently active, rather than the whole model',
          'Combine this with a Category node to narrow results to, for example, "all doors visible in the active view"',
          'This approach is commonly used for QA/QC checks scoped to a single level or a single discipline\'s view',
          'Be aware that view filters, view templates, and visibility overrides in Revit will affect what "All Elements in Active View" returns',
        ],
      },
      {
        id: 's5', heading: 'Reading Parameter Values', level: 'h2',
        content: `Once you have a reference to one or more elements, the next step is almost always reading a parameter value from them. The core node for this is **Element.GetParameterValueByName**.`,
        code: {
          label: 'Reading Parameters',
          lines: [
            'Element.GetParameterValueByName(element, parameterName)',
            '  → element: the Revit element (or list of elements)',
            '  → parameterName: a String, e.g. "Comments", "Height", "Mark"',
            '',
            'Example:',
            '  Element.GetParameterValueByName(wallList, "Height")',
            '  → returns a list of height values, one per wall in wallList',
            '',
            'Tip: parameter names are case-sensitive and must match',
            'exactly how they appear in the Revit Properties palette.',
          ],
        },
      },
      {
        id: 's6', heading: 'Writing Parameter Values', level: 'h2',
        content: `Reading data is often paired with writing it back — the classic Dynamo automation of updating a parameter across many elements at once. This uses the counterpart write node.`,
        subsections: [
          {
            heading: 'Writing Parameters Safely',
            items: [
              '**Element.SetParameterByName** — sets a parameter\'s value on one or more elements at once',
              'Always switch to **Manual** run mode before connecting a Set Parameter node so changes are only made when you explicitly click Run',
              'Test on a small subset (e.g., elements on one level) before running against an entire category project-wide',
              'Some parameters are read-only (calculated by Revit, e.g., Area on certain element types) and cannot be set directly — the node will report an error for these',
              'Always save the Revit model before running a graph that writes parameter changes, so you have a fallback if the result is not what you expected',
            ],
          },
        ],
        formula: { label: 'Safety Rule', text: 'Read first, verify with a Watch node, then write — never write directly without confirming the values you are about to set' },
      },
      {
        id: 's7', heading: 'A Simple QA/QC Query Example', level: 'h2',
        content: `Combining category selection and parameter reading produces one of the most common real-world Dynamo graphs: a quick model audit.`,
        code: {
          label: 'Example: Find Walls Missing a Comments Value',
          lines: [
            'Categories → "OST_Walls"',
            '  ↓',
            'All Elements of Category → wallList',
            '  ↓',
            'Element.GetParameterValueByName(wallList, "Comments") → commentsList',
            '  ↓',
            'String.IsNullOrEmpty(commentsList) → booleanList (True where Comments is blank)',
            '  ↓',
            'List.FilterByBoolMask(wallList, booleanList) → wallsMissingComments',
            '  ↓',
            'Watch → shows exactly which walls still need a Comments value filled in',
          ],
        },
      },
    ],
    takeaways: [
      'Every Dynamo-for-Revit graph starts with getting a reference to elements — via manual selection or automated category queries.',
      'Select Model Element and Select Elements in View support manual, one-off selection directly from the Revit canvas.',
      'Categories combined with All Elements of Category retrieves every element of a type across the whole project automatically.',
      'All Elements in Active View scopes selection to only what is visible in the current Revit view.',
      'Element.GetParameterValueByName reads parameter data; Element.SetParameterByName writes it — always test writes in Manual run mode.',
      'A practical QA/QC pattern combines category selection, parameter reading, a boolean filter, and List.FilterByBoolMask to isolate elements needing attention.',
    ],
    resource: { label: 'Revit Element Selection Node Reference', type: 'PDF' },
    quiz: { label: 'Selecting Revit Elements Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-6', title: 'Working with Geometry — Points, Lines & Curves in Dynamo' },
    next: { id: 'dyn-8', title: 'Running, Saving & Managing Dynamo Scripts' },
  },

  // ============================================================
  // LESSON DYN-08 — Running, Saving & Managing Dynamo Scripts
  // ============================================================
  {
    id: 'dyn-8', num: '08',
    title: 'Running, Saving & Managing Dynamo Scripts',
    topic: 'Revit Connection', cat: 'beginner', readTime: '8 min', free: false,
    desc: 'Master the practical habits of running, saving, and organizing Dynamo graphs so they remain reliable and reusable across a project.',
    intro: `A brilliant graph that nobody can find, that fails silently, or that overwrites work because it ran at the wrong moment is worse than no graph at all. This closing lesson of the Dynamo Basics block focuses on the practical discipline of running scripts safely, saving them properly, and organizing a growing library of .dyn files so that your automation work remains a genuine asset rather than a liability.`,
    sections: [
      {
        id: 's1', heading: 'Recap — Automatic vs Manual Run Mode', level: 'h2',
        content: `Run mode was introduced in Lesson 4, but it deserves reinforcement here because it is the single most important safety setting in day-to-day Dynamo use.`,
        code: {
          label: 'Run Mode Recap',
          lines: [
            'Automatic mode:',
            '  → Graph re-executes on every change (new node, new value, new wire)',
            '  → Good for: fast iteration on geometry, non-destructive testing',
            '  → Risky for: graphs that write to the Revit model',
            '',
            'Manual mode:',
            '  → Graph only executes when the Run button is clicked',
            '  → Good for: any graph that creates, modifies, or deletes Revit elements',
            '  → You control exactly when changes are committed to the model',
          ],
        },
        formula: { label: 'Standing Rule', text: 'Default to Manual mode for any graph touching real Revit data; reserve Automatic mode for geometry-only experimentation' },
      },
      {
        id: 's2', heading: 'Reading the Run Status', level: 'h2',
        content: `Dynamo gives visual feedback about whether a graph has run successfully, has warnings, or has errors — learning to read this at a glance avoids acting on stale or incorrect results.`,
        items: [
          '**Green checkmark / clear canvas** — the graph ran successfully with no warnings',
          '**Yellow warning triangle on a node** — the node ran but produced a warning (e.g., a null result, or a value outside an expected range)',
          '**Red error state on a node** — the node failed to execute; downstream nodes relying on it will not have valid data',
          'The bottom status bar reports the overall run state and any run time',
          'Always resolve red errors before trusting any output further down the graph, since downstream nodes may run on stale or missing data',
        ],
      },
      {
        id: 's3', heading: 'Saving Graphs as .dyn Files', level: 'h2',
        content: `Every Dynamo graph is saved as a **.dyn** file, a JSON-based text format that records every node, its settings, its position on the canvas, and the wires connecting it to other nodes.`,
        subsections: [
          {
            heading: 'Saving Best Practices',
            items: [
              'Save early and often — Ctrl+S — exactly as you would in any other authoring tool',
              'Use File → Save As to branch a copy before making an experimental change you may want to undo entirely',
              'Store project-specific .dyn files alongside the Revit project files they are built for, in a clearly labelled folder (e.g., "Dynamo Scripts")',
              'Store general-purpose, reusable .dyn files in a firm-wide shared library separate from any single project',
              '.dyn files are plain text (JSON) and can be placed under version control (e.g., Git) if your firm manages BIM automation that way',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Naming and Documenting Scripts', level: 'h2',
        content: `A script's filename and internal notes are the only documentation most colleagues will ever see before deciding whether to trust and run it.`,
        code: {
          label: 'Recommended Naming Convention',
          lines: [
            'Format: Purpose_Scope_Version.dyn',
            '',
            'Examples:',
            '  RenameViews_ByLevel_v1.dyn',
            '  SetFireRating_Walls_v2.dyn',
            '  ExportRoomData_ToExcel_v1.dyn',
            '',
            'Avoid:',
            '  MyScript.dyn',
            '  Untitled1.dyn',
            '  Test_Final_FINAL2.dyn',
          ],
        },
        formula: { label: 'Documentation Habit', text: 'Add a Note node at the top-left of every graph describing its purpose, author, date, and any required package dependencies' },
      },
      {
        id: 's5', heading: 'Re-Running Scripts on a Different Model', level: 'h2',
        content: `A well-built graph should be reusable across similar projects, not just the model it was originally built against. A few habits make this realistic.`,
        items: [
          'Avoid hard-coding project-specific values (like a specific element ID) directly into Code Blocks; use selection or category nodes instead so the graph adapts to whatever model it opens against',
          'Use Number Sliders or String inputs for values that are likely to change between projects, rather than burying them inside a Code Block',
          'Test a graph on a simple sample project before running it on a live, in-progress production model',
          'Remember: a Dynamo for Revit graph always operates on whichever document was active when Dynamo was launched — reopening the graph against a different project requires launching Dynamo from that project\'s Manage tab',
        ],
      },
      {
        id: 's6', heading: 'Basic Script Organization for a Growing Library', level: 'h2',
        content: `As you build more graphs over time, a simple folder and naming structure prevents the common failure mode of ending up with dozens of unlabelled .dyn files that nobody, including their author, can confidently identify months later.`,
        subsections: [
          {
            heading: 'Organization Guidelines',
            items: [
              'Group scripts by purpose in folders: "QA-QC", "Parameter Automation", "Geometry Generation", "Data Export"',
              'Keep a simple index (a spreadsheet or README) listing each script\'s name, purpose, and which project(s) it was used on',
              'Archive or clearly mark outdated versions rather than deleting them outright, in case a past project needs to be revisited',
              'Review and retire genuinely obsolete scripts periodically so the active library stays trustworthy',
            ],
          },
        ],
      },
      {
        id: 's7', heading: 'Looking Ahead — Dynamo Player', level: 'h2',
        content: `Every script covered so far has required opening the full Dynamo interface to run. Once a graph is finished, tested, and reliable, it can instead be run through **Dynamo Player** — accessed from the Manage tab alongside Dynamo itself — which executes a saved .dyn file with a single click and exposes only its key input values, without showing the underlying nodes at all.

This is the natural next step once basic script management habits are in place, and it will be covered in full in the next lesson, along with how to manage a growing set of scripts for team-wide, non-technical use.`,
      },
    ],
    takeaways: [
      'Default to Manual run mode for any graph that creates, modifies, or deletes Revit elements; reserve Automatic mode for geometry-only work.',
      'Learn to read node run status — green/clear means success, yellow is a warning, red is an error that invalidates downstream results.',
      'Graphs save as .dyn (JSON-based) files that can be stored alongside a project, in a shared firm library, or under version control.',
      'Use a clear naming convention (Purpose_Scope_Version.dyn) and a Note node describing purpose, author, and dependencies for every script.',
      'Avoid hard-coding project-specific values so a graph can be reused across similar projects rather than just the one it was built on.',
      'Organize a growing script library into purpose-based folders with a simple index, and retire obsolete scripts rather than letting them accumulate untracked.',
    ],
    resource: { label: 'Dynamo Script Management Checklist', type: 'PDF' },
    quiz: { label: 'Running & Managing Dynamo Scripts Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-7', title: 'Selecting & Querying Revit Elements from Dynamo' },
    next: { id: 'dyn-9', title: 'Lists & List Management — Lacing, Levels & Flattening' },
  },

];
