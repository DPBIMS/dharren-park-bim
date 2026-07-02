// ============================================================
// PYREVIT — LESSONS py-1 through py-8 (BEGINNER)
// Section: PyRevit Basics / Scripting Basics / Elements & Parameters
// File: lib/pyrevitLessonsContent/pyrevitLessons_1_8.js
// Index: lib/pyrevitLessonsData.js
// Free lessons: py-1, py-2, py-3
// ============================================================

export const lessons_1_8 = [

  // ============================================================
  // LESSON PY-01 — What is PyRevit & How it Differs from Dynamo
  // ============================================================
  {
    id: 'py-1', num: '01',
    title: 'What is PyRevit & How it Differs from Dynamo',
    topic: 'PyRevit Basics', cat: 'beginner', readTime: '8 min', free: true,
    desc: 'Understand what pyRevit is, how it relates to the Revit API, and how it compares to Dynamo as an automation tool.',
    intro: `Once a BIM Manager has automated the easy wins with Dynamo, a new ceiling appears: graphs that need loops inside loops, complex conditional logic, or custom user interfaces become unwieldy as a wall of nodes. pyRevit exists precisely for that next stage. It is a free, open-source Python-based rapid application development environment for Revit that lets you write textual scripts directly against the Revit API and turns them into your own ribbon buttons. This lesson introduces pyRevit, its origins, and how it compares to Dynamo so you can choose the right tool for the right job.`,
    sections: [
      {
        id: 's1', heading: 'What is PyRevit?', level: 'h2',
        content: `**pyRevit** (stylized with a lowercase "py") is a free, open-source rapid application development (RAD) environment and extension platform for Autodesk Revit. It was originally created by Ehsan Iran-Nejad and is now maintained by the community and distributed through the pyrevitlabs organization on GitHub, under the repository **pyrevitlabs/pyRevit**.\n\nAt its core, pyRevit does two things at once: it ships with a large collection of ready-made productivity tools that install straight onto Revit's ribbon, and it gives you a framework for writing your own Python scripts and turning each one into a custom ribbon button in minutes. This dual nature — "toolset" and "development platform" — is what makes pyRevit unusually valuable for both everyday users and BIM developers on the same install.`,
        formula: { label: 'PyRevit Core Concept', text: 'Python script + a folder structure on disk = a custom Revit ribbon button, reloadable without restarting Revit' },
      },
      {
        id: 's2', heading: 'Where PyRevit Came From', level: 'h2',
        content: `pyRevit began as a personal project to make Revit automation more accessible to people comfortable writing Python rather than wiring visual nodes. It grew into one of the most widely adopted open-source extensions in the Revit ecosystem, used by individual BIM specialists and large multidisciplinary firms alike to build internal tool libraries.`,
        items: [
          'Created by Ehsan Iran-Nejad, released as a free and open-source project',
          'Distributed and maintained today via GitHub under **pyrevitlabs/pyRevit**',
          'Has an active community contributing extensions, example scripts, and documentation',
          'Free to download, free to use commercially, with no license key or subscription required',
        ],
      },
      {
        id: 's3', heading: 'PyRevit vs Dynamo — The Core Distinction', level: 'h2',
        content: `The single most important thing to understand before writing any pyRevit code is how fundamentally different its approach is from Dynamo, even though both tools ultimately automate the same Revit model.`,
        code: {
          label: 'Visual Programming vs Textual Scripting',
          lines: [
            'Dynamo:',
            '  → Visual/node-based programming',
            '  → Build logic by connecting nodes with wires on a canvas',
            '  → Data flow is visible at a glance',
            '  → Lower barrier to entry for non-programmers',
            '',
            'pyRevit:',
            '  → Textual Python scripting directly against the Revit API',
            '  → Build logic by writing lines of code in a script.py file',
            '  → No visual graph — logic lives in the code itself',
            '  → More powerful and flexible for complex logic; steeper learning curve',
          ],
        },
      },
      {
        id: 's4', heading: 'Why Choose Text Code Over a Visual Graph?', level: 'h2',
        content: `Visual programming is easier to learn, but it has real limits once logic gets complicated. pyRevit trades a gentler learning curve for much greater expressive power.`,
        subsections: [
          {
            heading: 'Where PyRevit Outperforms a Visual Graph',
            items: [
              'Complex conditional logic (many nested if/else branches) is far easier to read and maintain as code than as a tangle of wires',
              'Loops, functions, and reusable modules are native to a text language — a visual graph can only approximate them with custom nodes or repeated node clusters',
              'Custom user interfaces (forms, dropdowns, multi-select dialogs) are straightforward to build in Python, but awkward or impossible in a pure node graph',
              'Version control (Git) works naturally on plain text .py files, letting teams diff, branch, and review script changes the same way they review any other code',
              'Full access to the entire Revit API and the broader .NET framework, without waiting for someone to have built the equivalent node yet',
            ],
          },
        ],
        formula: { label: 'Trade-off Rule', text: 'Dynamo is faster to learn and read visually; pyRevit is more powerful and flexible once logic grows beyond what a graph can comfortably express' },
      },
      {
        id: 's5', heading: 'IronPython 2.7 and the Newer CPython 3 Engine', level: 'h2',
        content: `pyRevit scripts historically ran on **IronPython 2.7**, a .NET-compatible implementation of Python that pyRevit bundles internally. Because IronPython compiles to .NET intermediate language, it can talk directly to the Revit API's .NET classes without any translation layer — no separate Python installation was ever required to run pyRevit scripts.`,
        items: [
          'IronPython 2.7 is bundled with pyRevit — no external Python install is needed for classic pyRevit scripts',
          'IronPython\'s tight .NET integration is what lets a script reference Autodesk.Revit.DB classes as naturally as if it were written in C#',
          'Modern pyRevit (v5 and later) also supports a **CPython 3** engine as a per-script option, giving access to the modern Python 3 ecosystem and standard library',
          'A script chooses its engine per-bundle (via configuration), so an extension can mix IronPython 2.7 scripts and CPython 3 scripts side by side',
          'CPython 3 scripts can use many mainstream Python packages that are incompatible with IronPython, at the cost of slightly different setup and, in some cases, slower startup',
        ],
      },
      {
        id: 's6', heading: 'PyRevit Ships With Ready-Made Tools Too', level: 'h2',
        content: `pyRevit is not only a platform for writing your own scripts — installing it immediately adds a full "pyRevit" ribbon tab populated with dozens of ready-made tools, usable with zero coding at all.`,
        items: [
          '**QA/QC tools** — model health checks, warning browsers, and audits for common Revit modeling issues',
          '**Selection tools** — advanced element selection and filtering helpers beyond Revit\'s native selection options',
          '**View and sheet management tools** — bulk renaming, view creation, and sheet automation utilities',
          'These tools are organized into panels exactly like Revit\'s native ribbon, and are ready to use immediately after installation',
          'Even a team with zero Python experience gets real day-one value from the built-in pyRevit tab',
        ],
      },
      {
        id: 's7', heading: 'Dynamo and PyRevit — Complementary, Not Competing', level: 'h2',
        content: `Many BIM teams use both tools rather than choosing one exclusively. Dynamo remains excellent for quick, visual, one-off graphs and for less code-comfortable team members; pyRevit shines for polished, reusable, shareable tools that live permanently on the ribbon.`,
        items: [
          'Use Dynamo for rapid, ad-hoc geometry or parameter graphs that a non-programmer can read and adjust',
          'Use pyRevit for a permanent, one-click tool that many people on a team will run repeatedly, especially if it needs a custom dialog or complex logic',
          'Some studios convert a proven Dynamo graph into a pyRevit script once it is mature enough to deserve a permanent ribbon button',
          'Both ultimately call into the same underlying Revit API — the choice is about interface and workflow, not capability alone',
        ],
      },
    ],
    takeaways: [
      'pyRevit is a free, open-source Python-based rapid application development environment for Revit, originally created by Ehsan Iran-Nejad and distributed via GitHub (pyrevitlabs/pyRevit).',
      'pyRevit adds a ready-made ribbon tab of tools AND lets you write your own Python scripts as custom ribbon buttons.',
      'The core distinction from Dynamo: Dynamo is visual/node-based programming, while pyRevit is textual Python scripting directly against the Revit API.',
      'pyRevit trades a steeper learning curve and no visual graph for greater power and flexibility on complex logic.',
      'pyRevit scripts historically ran on bundled IronPython 2.7 (a .NET-compatible Python engine); modern pyRevit v5+ also supports a CPython 3 engine per-script.',
      'Dynamo and pyRevit are complementary tools most BIM teams use together, not strict competitors.',
    ],
    resource: { label: 'PyRevit Overview Guide', type: 'PDF' },
    quiz: { label: 'What is PyRevit Quiz', questions: 10, time: '5 min' },
    prev: null,
    next: { id: 'py-2', title: 'Installing PyRevit & Setting Up Your Environment' },
  },

  // ============================================================
  // LESSON PY-02 — Installing PyRevit & Setting Up Your Environment
  // ============================================================
  {
    id: 'py-2', num: '02',
    title: 'Installing PyRevit & Setting Up Your Environment',
    topic: 'PyRevit Basics', cat: 'beginner', readTime: '8 min', free: true,
    desc: 'Install pyRevit, understand the pyRevit CLI, and set up a comfortable environment for writing your own scripts.',
    intro: `Unlike Dynamo, pyRevit does not ship inside Revit — it is a separate, free installer you download once and it attaches itself to every installed Revit version on your machine. This lesson walks through downloading and installing pyRevit, introduces the pyRevit command-line interface for advanced management, and covers setting up a code editor so writing your own scripts later in this course feels comfortable rather than intimidating.`,
    sections: [
      {
        id: 's1', heading: 'Downloading the PyRevit Installer', level: 'h2',
        content: `pyRevit is distributed as a Windows installer (.msi) through the official GitHub releases page for the **pyrevitlabs/pyRevit** repository. There is no paid tier, license key, or account required.`,
        code: {
          label: 'Getting the Installer',
          lines: [
            'Go to: github.com/pyrevitlabs/pyRevit  →  Releases',
            '',
            'Download the latest .msi installer',
            '  (choose the "signed" build if offered, for smoother installs',
            '   on machines with strict IT security policies)',
            '',
            'Run the .msi like any standard Windows application installer',
            '  → Follow the prompts, accept the license, complete the install',
          ],
        },
        formula: { label: 'Installer Source', text: 'Always download from the official pyrevitlabs/pyRevit GitHub releases page to avoid outdated or unofficial builds' },
      },
      {
        id: 's2', heading: 'What Happens After Installation', level: 'h2',
        content: `Once the installer finishes, pyRevit automatically adds a **"pyRevit" tab** to the Revit ribbon for every installed and supported Revit version on the machine — you do not need to configure each Revit version separately.`,
        items: [
          'Open any installed Revit version — the pyRevit tab appears automatically on the ribbon',
          'No manual add-in registration is required; the installer handles this for every detected Revit version',
          'If you install a new Revit version later, re-running the pyRevit installer (or using pyrevit attach, covered below) extends pyRevit to that version too',
          'The pyRevit tab includes a **Settings** panel and an **About** panel out of the box, alongside all the built-in tool panels',
        ],
      },
      {
        id: 's3', heading: 'The PyRevit Tab — Settings, About & Extensions', level: 'h2',
        content: `Beyond the productivity tools covered in the previous lesson, the pyRevit ribbon tab includes management panels that matter from day one.`,
        subsections: [
          {
            heading: 'Key Management Panels',
            items: [
              '**Settings panel** — configure pyRevit-wide preferences, such as which engine (IronPython/CPython) scripts default to, telemetry options, and UI behavior',
              '**About panel** — shows the installed pyRevit version and clone information, useful when reporting an issue or checking compatibility',
              '**Extensions (gear icon)** — opens the Extension Manager, where you can browse, install, enable, or disable pyRevit extensions (collections of tools, including third-party ones)',
              'These panels are present regardless of whether you ever write a single line of Python — they are part of the core install',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'The PyRevit Command-Line Interface (CLI)', level: 'h2',
        content: `Alongside the ribbon tab, the installer adds a **pyrevit** command to your system terminal, giving advanced users and IT administrators a way to manage pyRevit outside of Revit entirely.`,
        code: {
          label: 'Useful PyRevit CLI Commands',
          lines: [
            'pyrevit env',
            '  → Prints diagnostic info about the current pyRevit environment:',
            '    installed clones, attached Revit versions, engine info',
            '',
            'pyrevit extend <name> <url>',
            '  → Adds a new extension (a collection of tools) from a Git repository',
            '    or a known extension name, without using the Extension Manager UI',
            '',
            'pyrevit attach <clone_name> <revit_year>',
            '  → Attaches a specific pyRevit clone to a specific Revit version,',
            '    useful when managing multiple pyRevit clones (e.g., stable vs dev)',
            '',
            'pyrevit --help',
            '  → Lists all available CLI commands and options',
          ],
        },
        formula: { label: 'When to Use the CLI', text: 'The ribbon UI covers everyday use; the CLI is for advanced management — multiple clones, scripted deployment, or IT-managed installs across many machines' },
      },
      {
        id: 's5', heading: 'Do You Need a Separate Python Installation?', level: 'h2',
        content: `No — this is one of the most common points of early confusion. Classic pyRevit scripts run on **IronPython 2.7**, which is bundled directly inside the pyRevit install itself.`,
        items: [
          'You do not need to install Python from python.org to write or run standard pyRevit scripts',
          'IronPython 2.7 ships as part of the pyRevit clone on your machine and is used automatically',
          'If you choose to use the newer CPython 3 engine option for a specific script, pyRevit manages that engine setup as well — you still are not required to separately install and manage your own Python environment just to get started',
          'This bundling is a major reason pyRevit is easy to roll out across a whole office — there is no separate Python dependency for IT to manage on every machine',
        ],
      },
      {
        id: 's6', heading: 'Setting Up a Code Editor for Comfort', level: 'h2',
        content: `While no separate Python install is required, writing and editing Python scripts in Notepad quickly becomes painful. Installing a proper code editor makes a real difference in comfort and speed once you start writing your own tools.`,
        subsections: [
          {
            heading: 'Recommended Setup',
            items: [
              'Install **Visual Studio Code (VS Code)** — free, lightweight, and widely used across the pyRevit community',
              'Install the official **Python extension** for VS Code, which adds syntax highlighting, autocomplete, and error-checking for .py files',
              'VS Code\'s Python extension will work for editing pyRevit scripts even though the scripts ultimately execute inside pyRevit\'s bundled IronPython, not a system Python install',
              'Consider enabling a linter or basic formatting in VS Code early — consistent script formatting pays off once you are managing many scripts',
            ],
          },
        ],
        formula: { label: 'Editor vs Runtime', text: 'VS Code is only for writing/editing code comfortably — the script still runs through pyRevit\'s bundled IronPython or configured CPython engine, not through VS Code itself' },
      },
      {
        id: 's7', heading: 'Post-Install Checklist', level: 'h2',
        content: `Before moving into the interface tour in the next lesson, confirm the following so nothing basic trips you up mid-course.`,
        subsections: [
          {
            heading: 'Pre-Flight Checklist',
            items: [
              'Confirm the pyRevit .msi installer completed without errors',
              'Open Revit and confirm a "pyRevit" tab now appears on the ribbon',
              'Open a terminal and run: pyrevit env — confirm it prints environment details without error',
              'Confirm VS Code (or your preferred editor) is installed, with the Python extension enabled',
              'Locate the Extensions (gear icon) panel on the pyRevit tab — you will use it later in this course',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'pyRevit is installed via a free .msi installer downloaded from the pyrevitlabs/pyRevit GitHub releases page.',
      'After installation, pyRevit automatically adds a "pyRevit" tab to the ribbon for every installed Revit version — no manual per-version setup is required.',
      'The pyRevit tab includes Settings, About, and an Extensions (gear icon) panel for managing installed extensions.',
      'The pyrevit CLI provides advanced management: "pyrevit env" checks the environment, "pyrevit extend" adds extensions, and "pyrevit attach" attaches a clone to a specific Revit version.',
      'No separate Python installation is required — IronPython 2.7 is bundled directly with pyRevit for classic scripts.',
      'Installing VS Code with the Python extension is recommended for comfortably writing and editing pyRevit scripts, even though it is not required to run them.',
    ],
    resource: { label: 'PyRevit Installation & Setup Guide', type: 'PDF' },
    quiz: { label: 'Installing PyRevit Quiz', questions: 10, time: '5 min' },
    prev: { id: 'py-1', title: 'What is PyRevit & How it Differs from Dynamo' },
    next: { id: 'py-3', title: 'The PyRevit Interface — Tabs, Panels & Buttons' },
  },

  // ============================================================
  // LESSON PY-03 — The PyRevit Interface — Tabs, Panels & Buttons
  // ============================================================
  {
    id: 'py-3', num: '03',
    title: 'The PyRevit Interface — Tabs, Panels & Buttons',
    topic: 'PyRevit Basics', cat: 'beginner', readTime: '9 min', free: true,
    desc: 'Understand how pyRevit\'s ribbon structure maps directly to a folder structure on disk, and tour the built-in Reload feature.',
    intro: `pyRevit's most elegant design decision is this: everything you see on the ribbon — tabs, panels, and buttons — is a direct, literal reflection of folders and files sitting on your hard drive. Understanding that mapping early makes every future lesson about building your own tools dramatically easier, because there is no hidden configuration database to learn — just a folder structure with a specific naming convention. This lesson tours the ribbon structure and introduces the built-in Reload feature that makes iterating on scripts fast.`,
    sections: [
      {
        id: 's1', heading: 'Ribbon Structure — Tabs, Panels & Buttons', level: 'h2',
        content: `pyRevit organizes its ribbon exactly the way Revit itself does, using three nested levels: a **Tab**, containing one or more **Panels**, each containing one or more **Buttons**.`,
        code: {
          label: 'Ribbon Hierarchy',
          lines: [
            'Tab            e.g. "pyRevit"',
            '  └─ Panel     e.g. "QA Tools"        (a grouped, boxed section)',
            '       └─ Button   e.g. "Check Warnings"   (the actual clickable tool)',
            '',
            'A Revit installation can show multiple pyRevit-created tabs',
            'if more than one extension is installed and enabled.',
          ],
        },
      },
      {
        id: 's2', heading: 'Button Types', level: 'h2',
        content: `Not every button on a pyRevit panel behaves the same way. pyRevit supports several distinct button types, each suited to a different use case.`,
        items: [
          '**Pushbutton** — the simplest type; a single click runs one script',
          '**Smart button** — a pushbutton whose script can dynamically change its own icon, tooltip, or behavior based on context (e.g., the current selection or document state)',
          '**Pulldown button** — a single ribbon button that expands into a dropdown list of several related sub-buttons, keeping the ribbon compact',
          '**Split button** — similar to a pulldown, but clicking the main icon runs the most recently used sub-tool directly, while a small arrow opens the dropdown for the rest',
          '**Stack (of small buttons)** — three related small buttons stacked vertically in a single ribbon slot, useful for grouping closely related simple actions',
        ],
        formula: { label: 'Choosing a Button Type', text: 'Use a plain pushbutton for one tool; use a pulldown or split button once several related tools compete for the same ribbon space' },
      },
      {
        id: 's3', heading: 'The Ribbon Maps Directly to a Folder Structure', level: 'h2',
        content: `Every tab, panel, and button visible on the ribbon corresponds exactly to a folder on disk, following a strict suffix-based naming convention that pyRevit scans on startup (and on Reload).`,
        code: {
          label: 'Folder Structure Convention',
          lines: [
            'MyExtension.extension/',
            '  └─ MyTab.tab/',
            '       └─ MyPanel.panel/',
            '            └─ MyButton.pushbutton/',
            '                 ├─ script.py       (the code that runs on click)',
            '                 ├─ icon.png         (optional — the button\'s ribbon icon)',
            '                 └─ bundle.yaml       (optional — title, tooltip, engine config)',
            '',
            '.extension  → a top-level extension bundle (installable/shareable unit)',
            '.tab        → becomes a ribbon Tab',
            '.panel      → becomes a Panel inside that Tab',
            '.pushbutton → becomes a clickable Button inside that Panel',
          ],
        },
        formula: { label: 'Core Mapping Rule', text: 'Folder suffix determines ribbon role: .extension, .tab, .panel, and .pushbutton (or .pulldown, .splitbutton, .stack) each map to one exact ribbon element' },
      },
      {
        id: 's4', heading: 'Inside a Pushbutton Folder', level: 'h2',
        content: `A minimal working pyRevit tool needs only a folder named correctly and a script.py file inside it — the icon and bundle.yaml are optional extras that improve presentation and configuration.`,
        subsections: [
          {
            heading: 'Pushbutton Folder Contents',
            items: [
              '**script.py** — required; the Python code executed when the button is clicked',
              '**icon.png** — optional; a small image shown as the button\'s ribbon icon (falls back to a default icon if omitted)',
              '**bundle.yaml** — optional; a small configuration file that can set the button\'s title, tooltip text, author, and which Python engine (IronPython or CPython) the script should run on',
              'Without a bundle.yaml, the button title can instead come from a __title__ variable set inside script.py itself (covered in the next lesson)',
            ],
          },
        ],
      },
      {
        id: 's5', heading: 'Built-In Panels PyRevit Ships With', level: 'h2',
        content: `Beyond the productivity tools covered earlier, pyRevit\'s default install includes management-oriented panels that exist purely to support developing and maintaining your own scripts.`,
        items: [
          '**Reload button** — reloads every installed pyRevit extension from disk, picking up any script.py, icon, or bundle.yaml changes immediately',
          '**Settings and About panels** — covered in the previous lesson, for configuring and inspecting the pyRevit environment',
          'The Extensions (gear icon) panel — for browsing, enabling, and disabling installed extensions',
          'These panels appear alongside whatever tool panels your installed extensions add, all on the same "pyRevit" tab by default',
        ],
      },
      {
        id: 's6', heading: 'Reload — A Major Productivity Advantage Over Dynamo', level: 'h2',
        content: `One of pyRevit\'s biggest day-to-day advantages over Dynamo is how quickly you can iterate on a script while developing it, thanks to the built-in **Reload** button.`,
        code: {
          label: 'The Edit-Test Loop',
          lines: [
            'With Dynamo:',
            '  Edit graph → close/reopen the graph window (or re-run) to see changes',
            '',
            'With pyRevit:',
            '  Edit script.py in your code editor → save the file',
            '  → Click "Reload" on the pyRevit tab in Revit',
            '  → The updated script runs immediately, no Revit restart required',
            '',
            'This tight edit → save → Reload → click loop is central to',
            'comfortable pyRevit development and is used constantly',
            'throughout the rest of this course.',
          ],
        },
        formula: { label: 'Key Productivity Rule', text: 'Reload picks up changes to any script.py, icon.png, or bundle.yaml on disk without ever needing to restart Revit' },
      },
      {
        id: 's7', heading: 'Putting the Pieces Together', level: 'h2',
        content: `By the end of this lesson, the mental model to carry forward is simple: the pyRevit ribbon is not a separate configuration system to learn — it is a live, visual rendering of folders on your disk, refreshed on demand with Reload.`,
        items: [
          'Renaming a folder\'s suffix (e.g., .pushbutton to .pulldown) changes how it behaves on the ribbon after a Reload',
          'Moving a pushbutton folder into a different .panel folder moves that button to a different panel after Reload',
          'There is no drag-and-drop ribbon designer — all ribbon structure changes happen by editing folders and files directly',
          'This file-based approach is exactly what makes pyRevit extensions easy to share, version-control with Git, and package for distribution',
        ],
      },
    ],
    takeaways: [
      'pyRevit\'s ribbon is organized into Tabs, containing Panels, containing Buttons (pushbutton, smart button, pulldown, split button, or a stack of small buttons).',
      'This ribbon structure maps directly to folders on disk: MyExtension.extension/MyTab.tab/MyPanel.panel/MyButton.pushbutton/script.py.',
      'A pushbutton folder requires only script.py; icon.png and bundle.yaml are optional extras for icon and configuration.',
      'pyRevit ships with built-in panels including Reload, Settings, About, and an Extensions (gear icon) panel for managing extensions.',
      'The Reload button reloads all installed pyRevit extensions from disk after editing scripts, without restarting Revit.',
      'This edit → save → Reload → click loop is a major productivity advantage over Dynamo, which typically requires reopening the graph to see changes.',
    ],
    resource: { label: 'PyRevit Interface & Folder Structure Reference', type: 'PDF' },
    quiz: { label: 'PyRevit Interface Quiz', questions: 10, time: '5 min' },
    prev: { id: 'py-2', title: 'Installing PyRevit & Setting Up Your Environment' },
    next: { id: 'py-4', title: 'Your First PyRevit Script — Print All Wall Types in the Current Project' },
  },

  // ============================================================
  // LESSON PY-04 — Your First PyRevit Script
  // ============================================================
  {
    id: 'py-4', num: '04',
    title: 'Your First PyRevit Script — Print All Wall Types in the Current Project',
    topic: 'Scripting Basics', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'Build your first working pyRevit script from scratch: a button that collects and prints every wall type in the active project.',
    intro: `With the folder structure and Reload concept from the last lesson in hand, it is time to build something real. This lesson walks through creating a brand-new pushbutton folder, writing a script.py that collects every wall type in the active Revit project using a FilteredElementCollector, and printing the results to pyRevit\'s own output window. By the end, you will have clicked a button you built yourself and watched real data come back from a live Revit model.`,
    sections: [
      {
        id: 's1', heading: 'Creating a New Pushbutton Folder', level: 'h2',
        content: `The fastest way to create a first tool is to duplicate an existing simple pushbutton folder and rename it, rather than building the folder structure entirely from scratch — but building it manually once is worth doing to cement the concept.`,
        subsections: [
          {
            heading: 'Manual Folder Setup',
            items: [
              'Create a new folder named "MyFirstExtension.extension" in a location of your choice',
              'Inside it, create a folder named "MyTab.tab"',
              'Inside that, create a folder named "MyPanel.panel"',
              'Inside that, create a folder named "PrintWallTypes.pushbutton"',
              'Inside that final folder, create an empty text file named "script.py"',
            ],
          },
        ],
        formula: { label: 'Fastest Start', text: 'Duplicating an existing working pushbutton folder and editing its script.py is often quicker than building the nested folder structure by hand every time' },
      },
      {
        id: 's2', heading: 'Registering the Extension with PyRevit', level: 'h2',
        content: `A newly created extension folder needs to be somewhere pyRevit knows to look, or added via the Extensions panel/CLI, before it will appear on the ribbon.`,
        items: [
          'Place the .extension folder inside a location pyRevit is already configured to scan (check via the Settings panel), or add its path through the Extensions (gear icon) panel',
          'Alternatively, use the CLI command covered in Lesson 2 — pyrevit extend — to register a Git-hosted or local extension folder',
          'Click **Reload** on the pyRevit tab after registering the extension so it appears on the ribbon without restarting Revit',
          'Once registered, "MyTab" should now appear as a new ribbon tab with "MyPanel" and the "PrintWallTypes" button visible inside it',
        ],
      },
      {
        id: 's3', heading: 'Writing the Script — Imports', level: 'h2',
        content: `Open script.py in VS Code and start with the imports every pyRevit script relies on for talking to the active Revit document and the Revit API itself.`,
        code: {
          label: 'script.py — Imports',
          lines: [
            'from pyrevit import revit, DB',
            'from pyrevit import script',
            '',
            '# revit  → pyRevit convenience shortcuts (revit.doc, revit.uidoc, etc.)',
            '# DB     → alias for the Autodesk.Revit.DB namespace',
            '# script → gives access to pyRevit\'s own output window helper',
          ],
        },
      },
      {
        id: 's4', heading: 'Collecting All Wall Types', level: 'h2',
        content: `With the imports in place, the next step is to ask Revit\'s API for every WallType element currently defined in the project, using a **FilteredElementCollector** — the standard Revit API pattern for querying the model.`,
        code: {
          label: 'script.py — Collecting Wall Types',
          lines: [
            'collector = DB.FilteredElementCollector(revit.doc)\\',
            '    .OfClass(DB.WallType)',
            '',
            'wall_types = list(collector)',
          ],
        },
        formula: { label: 'Collector Pattern', text: 'FilteredElementCollector(document).OfClass(ElementType) is the standard pattern for gathering every element of a given type in the model' },
      },
      {
        id: 's5', heading: 'Printing Results to the PyRevit Output Window', level: 'h2',
        content: `pyRevit provides its own rich output console via **script.get_output()**, distinct from a plain terminal — it supports formatted text, tables, and clickable links to elements. Plain Python print() statements are also automatically routed into this same output window.`,
        code: {
          label: 'script.py — Printing the Results',
          lines: [
            'output = script.get_output()',
            'output.print_md("## Wall Types in This Project")',
            '',
            'for wt in wall_types:',
            '    print(wt.Name)',
          ],
        },
        items: [
          'script.get_output() returns pyRevit\'s output window object for the currently running script',
          'output.print_md() renders Markdown-formatted text — headings, bold, tables — in the output window',
          'A plain print(wt.Name) call also appears in the same output window, making it easy to mix simple and rich output',
        ],
      },
      {
        id: 's6', heading: 'The __title__ Variable — Naming Your Button', level: 'h2',
        content: `Every pushbutton needs a label shown on the ribbon. If no bundle.yaml is present, pyRevit falls back to a special **__title__** variable defined directly inside script.py.`,
        code: {
          label: 'script.py — Setting the Button Title',
          lines: [
            '__title__ = "Print Wall Types"',
            '',
            '# This line can be placed anywhere in script.py,',
            '# but convention places it near the top of the file.',
          ],
        },
        formula: { label: 'Title Priority', text: 'bundle.yaml\'s title field (if present) takes precedence; otherwise pyRevit uses the __title__ variable, otherwise it falls back to the folder name' },
      },
      {
        id: 's7', heading: 'Running the Script and Seeing Output', level: 'h2',
        content: `With the imports, collector, print statements, and __title__ variable all in script.py, the final step is simply to click Reload, then click the new button.`,
        subsections: [
          {
            heading: 'Test Run Steps',
            items: [
              'Save script.py in VS Code',
              'In Revit, click **Reload** on the pyRevit tab',
              'Confirm "MyTab" now shows a "Print Wall Types" button on "MyPanel"',
              'Click the button — pyRevit\'s output window should open automatically',
              'Confirm the output window lists every wall type name in the current project, under the "Wall Types in This Project" heading',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'A new pyRevit tool starts as a correctly named pushbutton folder (MyExtension.extension/MyTab.tab/MyPanel.panel/MyButton.pushbutton/) containing a script.py file.',
      'from pyrevit import revit, DB gives access to the active document (via revit.doc) and the Autodesk.Revit.DB namespace as DB.',
      'DB.FilteredElementCollector(revit.doc).OfClass(DB.WallType) collects every wall type element in the current project.',
      'script.get_output() returns pyRevit\'s rich output console; plain print() statements are automatically routed into the same window.',
      'output.print_md() renders Markdown-formatted text (headings, bold, tables) inside the pyRevit output window.',
      'A button\'s ribbon label is set by bundle.yaml\'s title field if present, otherwise by the __title__ variable inside script.py.',
    ],
    resource: { label: 'Your First PyRevit Script Workbook', type: 'PDF' },
    quiz: { label: 'First PyRevit Script Quiz', questions: 10, time: '5 min' },
    prev: { id: 'py-3', title: 'The PyRevit Interface — Tabs, Panels & Buttons' },
    next: { id: 'py-5', title: 'Understanding the Revit API Through PyRevit' },
  },

  // ============================================================
  // LESSON PY-05 — Understanding the Revit API Through PyRevit
  // ============================================================
  {
    id: 'py-5', num: '05',
    title: 'Understanding the Revit API Through PyRevit',
    topic: 'Scripting Basics', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'Learn how pyRevit exposes the full .NET Revit API to Python, and what __revit__, revit.doc, and revit.uidoc actually represent.',
    intro: `The previous lesson used revit.doc and DB.FilteredElementCollector without fully explaining where they come from. This lesson pulls back the curtain: pyRevit is, at its foundation, a bridge that lets IronPython talk directly to the same .NET Revit API that C# plugin developers use. Understanding this bridge — and the handful of convenience shortcuts pyRevit layers on top of it — is what turns "copying example scripts" into genuinely understanding what your code is doing.`,
    sections: [
      {
        id: 's1', heading: 'The Revit API is a .NET API', level: 'h2',
        content: `The Revit API is written in and designed for **.NET languages** (primarily C#). Every class you interact with in a pyRevit script — Document, Wall, FilteredElementCollector, Transaction — is really a .NET class defined inside Autodesk\'s Revit API assemblies.`,
        formula: { label: 'Foundational Fact', text: 'IronPython compiles to .NET intermediate language, so it can reference and call .NET Revit API classes directly, with no translation layer needed' },
      },
      {
        id: 's2', heading: 'DB and UI — Convenience Aliases, Not New Namespaces', level: 'h2',
        content: `When a script writes "from pyrevit import DB, UI", it is not importing some pyRevit-specific reinterpretation of the API — DB and UI are simply short, convenient aliases pyRevit provides for the real .NET Revit API namespaces.`,
        code: {
          label: 'What DB and UI Really Are',
          lines: [
            'from pyrevit import DB, UI',
            '',
            '# DB  is really:  Autodesk.Revit.DB',
            '# UI  is really:  Autodesk.Revit.UI',
            '',
            '# So DB.WallType is the same class as Autodesk.Revit.DB.WallType',
            '# used by any C# Revit plugin — pyRevit just gives it a shorter name',
          ],
        },
        items: [
          'Any class documented in the official Revit API documentation under Autodesk.Revit.DB is accessible as DB.ClassName',
          'Any class under Autodesk.Revit.UI is accessible as UI.ClassName',
          'This means official Revit API documentation, forum answers, and C# plugin examples are directly useful for pyRevit scripting — you are learning the same underlying API',
        ],
      },
      {
        id: 's3', heading: 'The __revit__ Variable', level: 'h2',
        content: `Every pyRevit script has a special variable automatically injected into it before it runs: **__revit__**. This variable represents the **UIApplication** — the top-level object representing the entire running Revit application session.`,
        code: {
          label: 'What __revit__ Gives You',
          lines: [
            '__revit__',
            '  → an Autodesk.Revit.UI.UIApplication instance',
            '  → automatically available in every pyRevit script.py — no import needed',
            '',
            'From __revit__ you can reach:',
            '  __revit__.ActiveUIDocument            → the active UIDocument',
            '  __revit__.ActiveUIDocument.Document    → the active Document',
            '  __revit__.Application                  → the underlying Application object',
          ],
        },
        formula: { label: 'Key Fact', text: '__revit__ is injected automatically into every script by pyRevit — you never import it, it is simply already there when your script runs' },
      },
      {
        id: 's4', heading: 'revit.doc and revit.uidoc — Saving You the Unwrapping', level: 'h2',
        content: `Manually reaching the active Document by typing __revit__.ActiveUIDocument.Document every time is repetitive. pyRevit\'s "revit" convenience module (imported via "from pyrevit import revit") shortcuts straight to the two objects you need constantly.`,
        code: {
          label: 'Convenience Shortcuts',
          lines: [
            'from pyrevit import revit',
            '',
            'revit.doc     # shortcut for __revit__.ActiveUIDocument.Document',
            'revit.uidoc   # shortcut for __revit__.ActiveUIDocument',
            '',
            '# Instead of writing this every time:',
            'doc = __revit__.ActiveUIDocument.Document',
            '',
            '# You simply write:',
            'doc = revit.doc',
          ],
        },
        items: [
          '**revit.doc** — the active Document; used constantly for FilteredElementCollector, Transaction, and any element lookup by Id',
          '**revit.uidoc** — the active UIDocument; used for UI-level operations like reading the current selection or the active view',
          'Both shortcuts point to exactly the same objects you would get by manually unwrapping __revit__ — they are pure convenience, not new functionality',
        ],
      },
      {
        id: 's5', heading: 'Document vs UIDocument — Knowing the Difference', level: 'h2',
        content: `A common early confusion is not knowing whether a given task needs the Document or the UIDocument. The distinction matters because each object exposes different capabilities.`,
        items: [
          '**Document** (revit.doc) — represents the model data itself: elements, parameters, types, levels, transactions all operate against the Document',
          '**UIDocument** (revit.uidoc) — represents the user interface layer on top of that document: the active view, the current selection, and prompting the user to pick something on screen',
          'Reading or writing a parameter value is a Document-level operation',
          'Reading what the user currently has selected in the Revit canvas is a UIDocument-level operation',
        ],
        formula: { label: 'Rule of Thumb', text: 'If it is about model data, you likely need revit.doc; if it is about what the user sees or has selected on screen, you likely need revit.uidoc' },
      },
      {
        id: 's6', heading: 'Exploring the API — Where to Look Things Up', level: 'h2',
        content: `Since pyRevit exposes the real Revit API, the official Revit API documentation (Autodesk\'s Revit API Developer Guide and the Revit API online help) is directly applicable to pyRevit scripting, not just to C# plugin development.`,
        items: [
          'The official Revit API documentation lists every class, property, and method under Autodesk.Revit.DB and Autodesk.Revit.UI',
          'A property or method described there as e.g. Element.Name or Document.GetElement(id) works identically when called from a pyRevit script',
          'IronPython allows exploring an unfamiliar object interactively — for example, printing dir(some_object) can list its available members while learning',
          'Community pyRevit script repositories and forums are excellent secondary references once the official API docs make sense',
        ],
      },
      {
        id: 's7', heading: 'Putting It All Together', level: 'h2',
        content: `With this lesson\'s concepts, the imports from Lesson 4 now make complete sense: pyRevit is not a separate scripting language with its own rules — it is Python (IronPython or CPython) with direct, unfiltered access to the same .NET Revit API every professional Revit plugin is built on, plus a small set of convenience shortcuts (__revit__, revit.doc, revit.uidoc) that remove repetitive boilerplate.`,
        formula: { label: 'Big Picture', text: 'pyRevit script = Python syntax + direct .NET Revit API access (DB/UI) + a few injected convenience shortcuts (__revit__, revit.doc, revit.uidoc)' },
      },
    ],
    takeaways: [
      'The Revit API is a .NET API; IronPython can reference .NET Revit API classes directly, with no translation layer required.',
      'from pyrevit import DB, UI are convenience aliases for the real Autodesk.Revit.DB and Autodesk.Revit.UI namespaces, not a separate pyRevit-specific API.',
      '__revit__ is a special variable pyRevit automatically injects into every script, representing the UIApplication.',
      'revit.doc and revit.uidoc (from "from pyrevit import revit") are shortcuts for __revit__.ActiveUIDocument.Document and __revit__.ActiveUIDocument respectively.',
      'Document-level work (elements, parameters, transactions) generally needs revit.doc; UI-level work (selection, active view) generally needs revit.uidoc.',
      'Because pyRevit exposes the real Revit API, official Revit API documentation and C# plugin examples are directly useful references for pyRevit scripting.',
    ],
    resource: { label: 'Revit API Fundamentals for PyRevit Guide', type: 'PDF' },
    quiz: { label: 'Revit API Through PyRevit Quiz', questions: 10, time: '5 min' },
    prev: { id: 'py-4', title: 'Your First PyRevit Script — Print All Wall Types in the Current Project' },
    next: { id: 'py-6', title: 'Transactions — Making Changes to Revit Safely' },
  },

  // ============================================================
  // LESSON PY-06 — Transactions — Making Changes to Revit Safely
  // ============================================================
  {
    id: 'py-6', num: '06',
    title: 'Transactions — Making Changes to Revit Safely',
    topic: 'Scripting Basics', cat: 'beginner', readTime: '8 min', free: false,
    desc: 'Learn why every model-modifying script needs a Transaction, and how pyRevit\'s Transaction context manager simplifies the pattern.',
    intro: `Every script so far has only read data from the model — collecting wall types, printing names. The moment a script needs to change anything, Revit imposes a strict rule inherited from the raw API: all modifications must happen inside a Transaction. This lesson covers what a Transaction is, why it exists, and how pyRevit\'s "revit.Transaction" context manager makes the pattern dramatically less error-prone than the raw API approach.`,
    sections: [
      {
        id: 's1', heading: 'Why Transactions Exist', level: 'h2',
        content: `Revit requires every change to model data — creating an element, deleting one, or setting a parameter value — to occur inside a **Transaction**. This is a core rule of the Revit API itself, not something specific to pyRevit, and it exists to keep the model\'s internal state, undo history, and journal file consistent.`,
        items: [
          'A Transaction groups one or more changes into a single, well-defined unit of work',
          'Revit will raise an exception if you attempt to modify the model outside an active Transaction',
          'Every successfully committed Transaction becomes a single step in Revit\'s Undo (Ctrl+Z) history',
          'This rule applies identically whether the code modifying the model is C#, VB.NET, or Python running through pyRevit',
        ],
        formula: { label: 'Non-Negotiable Rule', text: 'No element may be created, changed, or deleted outside an active Transaction — reading data never needs one, writing data always does' },
      },
      {
        id: 's2', heading: 'The Raw Revit API Pattern', level: 'h2',
        content: `Working directly against the raw Revit API, a Transaction requires several explicit steps that must all be handled correctly, including manually rolling back on failure.`,
        code: {
          label: 'Raw API Transaction Pattern',
          lines: [
            't = DB.Transaction(doc, "Set Parameter")',
            't.Start()',
            'try:',
            '    # ... make changes to the model here ...',
            '    t.Commit()',
            'except Exception:',
            '    t.RollBack()',
            '    raise',
          ],
        },
        items: [
          'DB.Transaction(document, name) creates the transaction object, naming it for the Undo history',
          '.Start() begins the transaction — required before any model change',
          '.Commit() finalizes and saves the changes as one Undo step',
          '.RollBack() must be called manually on failure to avoid leaving the model or session in an inconsistent state',
        ],
      },
      {
        id: 's3', heading: 'PyRevit\'s Transaction Context Manager', level: 'h2',
        content: `pyRevit provides a much simpler pattern using Python\'s "with" statement: **revit.Transaction("name")**. This context manager automatically starts the transaction, commits it if the code block completes successfully, and rolls it back automatically if an unhandled exception occurs.`,
        code: {
          label: 'pyRevit Transaction Context Manager',
          lines: [
            'from pyrevit import revit, DB',
            '',
            'with revit.Transaction("Set Parameter"):',
            '    param = wall.LookupParameter("Comments")',
            '    param.Set("Reviewed")',
            '',
            '# No manual Start(), Commit(), or RollBack() needed —',
            '# the "with" block handles all of it automatically.',
          ],
        },
        formula: { label: 'Major Convenience', text: 'revit.Transaction("name") replaces manual Start/Commit/RollBack bookkeeping with a single "with" block that commits on success and rolls back automatically on an unhandled exception' },
      },
      {
        id: 's4', heading: 'Naming Transactions Meaningfully', level: 'h2',
        content: `The string passed into revit.Transaction() (or DB.Transaction()) is not just documentation — it becomes the label shown in Revit\'s Undo history, visible to any user pressing Ctrl+Z after your script runs.`,
        items: [
          'Choose a short, descriptive name: "Set Fire Rating", "Rename Views", "Delete Unused Wall Types"',
          'A vague name like "Script" or "Update" gives the user no useful information if they need to undo the change later',
          'Consistent, clear transaction names make a script feel professional and trustworthy to anyone else using it',
        ],
      },
      {
        id: 's5', heading: 'What Happens on an Exception Inside the Block', level: 'h2',
        content: `One of the biggest safety benefits of the context manager pattern is automatic rollback behavior when something goes wrong partway through a set of changes.`,
        items: [
          'If an unhandled exception is raised anywhere inside the "with revit.Transaction(...)" block, pyRevit automatically rolls back all changes made so far in that transaction',
          'This prevents a script from leaving the model in a half-modified, inconsistent state if it fails partway through a loop of changes',
          'This is a meaningfully safer default than the raw API pattern, where forgetting the try/except/RollBack logic can leave a transaction open or the model inconsistent',
        ],
        formula: { label: 'Safety Benefit', text: 'An unhandled exception inside revit.Transaction() rolls back automatically — no manual except/RollBack code required to stay safe' },
      },
      {
        id: 's6', heading: 'TransactionGroup — Bundling Multiple Transactions', level: 'h2',
        content: `Sometimes a script needs to perform several logically separate Transactions that should nonetheless appear, and be undoable, as a single step from the user\'s perspective. This is what **TransactionGroup** is for.`,
        code: {
          label: 'TransactionGroup Pattern',
          lines: [
            'tg = DB.TransactionGroup(doc, "Full Wall Update")',
            'tg.Start()',
            '',
            'with revit.Transaction("Set Fire Rating"):',
            '    # ... first set of changes ...',
            '',
            'with revit.Transaction("Set Comments"):',
            '    # ... second set of changes ...',
            '',
            'tg.Assimilate()   # merges all nested transactions into one Undo step',
          ],
        },
        items: [
          'A TransactionGroup wraps multiple individual Transactions so they appear as a single entry in the Undo history',
          '.Assimilate() commits the group, merging all nested transactions into one undoable step',
          'Useful for complex scripts that logically separate their work into stages but should still be undoable in one Ctrl+Z from the user\'s point of view',
        ],
      },
      {
        id: 's7', heading: 'Practical Guidance for Beginners', level: 'h2',
        content: `As you start writing scripts that modify the model, a few habits will keep you out of trouble early on.`,
        items: [
          'Always wrap any code that creates, changes, or deletes elements inside a "with revit.Transaction(...)" block — never assume a change will silently work outside one',
          'Give every transaction a clear, specific name that would make sense to a colleague looking at the Undo history',
          'Test model-modifying scripts on a small, disposable test project before running them on a live production model',
          'Reserve TransactionGroup for scripts genuinely composed of multiple logical stages — a simple script only needs a single Transaction',
        ],
      },
    ],
    takeaways: [
      'Every change to Revit model data must occur inside a Transaction — this is a core Revit API rule, not a pyRevit-specific requirement.',
      'The raw API pattern requires manually calling DB.Transaction(doc, name), .Start(), .Commit(), and .RollBack() on failure.',
      'pyRevit\'s revit.Transaction("name") context manager (used with a "with" block) automatically starts and commits the transaction, and rolls back automatically on an unhandled exception.',
      'The name passed into a Transaction becomes its label in Revit\'s Undo history, so it should be short and descriptive.',
      'TransactionGroup bundles multiple individual Transactions into a single Undo step using .Start() and .Assimilate().',
      'Always wrap model-modifying code in a Transaction and test on a disposable project before running against a live production model.',
    ],
    resource: { label: 'PyRevit Transactions Reference Guide', type: 'PDF' },
    quiz: { label: 'Transactions in PyRevit Quiz', questions: 10, time: '5 min' },
    prev: { id: 'py-5', title: 'Understanding the Revit API Through PyRevit' },
    next: { id: 'py-7', title: 'Selecting & Filtering Elements with Python' },
  },

  // ============================================================
  // LESSON PY-07 — Selecting & Filtering Elements with Python
  // ============================================================
  {
    id: 'py-7', num: '07',
    title: 'Selecting & Filtering Elements with Python',
    topic: 'Elements & Parameters', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'Master FilteredElementCollector scoping methods and work with the user\'s live Revit selection through pyRevit.',
    intro: `Lesson 4 introduced FilteredElementCollector in its simplest form — collecting every WallType in the project. Real scripts almost always need something more specific: every door instance (not door type), every element in a particular category, or just whatever the user currently has selected in the Revit canvas. This lesson expands the collector pattern and introduces pyRevit\'s selection helpers for working with a live user selection instead of a full model-wide query.`,
    sections: [
      {
        id: 's1', heading: 'Recap — The Basic Collector Pattern', level: 'h2',
        content: `As covered in Lesson 4, **DB.FilteredElementCollector(doc)** is the standard Revit API pattern for querying elements in the model. On its own it returns every element in the document, which is rarely useful without further scoping.`,
        code: {
          label: 'Unscoped Collector',
          lines: [
            'all_elements = DB.FilteredElementCollector(doc)',
            '',
            '# Returns every element AND every element type in the entire',
            '# document — almost always too broad to use directly.',
          ],
        },
      },
      {
        id: 's2', heading: 'Scoping by Category', level: 'h2',
        content: `**.OfCategory()** narrows a collector down to elements belonging to a specific Revit built-in category, using the DB.BuiltInCategory enumeration.`,
        code: {
          label: 'Filtering by Category',
          lines: [
            'doors = DB.FilteredElementCollector(doc)\\',
            '    .OfCategory(DB.BuiltInCategory.OST_Doors)\\',
            '    .WhereElementIsNotElementType()',
            '',
            'doors = list(doors)',
          ],
        },
        formula: { label: 'Category Enum', text: 'DB.BuiltInCategory.OST_<Name> identifies a Revit category — e.g. OST_Doors, OST_Walls, OST_Rooms — matching Revit\'s internal category naming' },
      },
      {
        id: 's3', heading: 'Scoping by Class', level: 'h2',
        content: `**.OfClass()** narrows a collector down to elements of a specific .NET class, such as DB.FamilyInstance or DB.WallType, regardless of category.`,
        items: [
          '.OfClass(DB.FamilyInstance) returns every family instance placed in the model, across all categories, unless combined with .OfCategory too',
          '.OfClass(DB.WallType) returns wall type elements, as seen in Lesson 4',
          '.OfCategory() and .OfClass() can be chained together on the same collector for a more precise result — e.g., every FamilyInstance that is also in the Doors category',
        ],
      },
      {
        id: 's4', heading: 'Instances vs Element Types', level: 'h2',
        content: `A recurring point of confusion for beginners is the difference between an element **instance** placed in the model and its **element type** (the type/family definition it is based on). pyRevit collectors let you scope explicitly to one or the other.`,
        code: {
          label: 'Instance vs Type Filtering',
          lines: [
            '# Every placed door instance (not the door types/families themselves):',
            'door_instances = DB.FilteredElementCollector(doc)\\',
            '    .OfCategory(DB.BuiltInCategory.OST_Doors)\\',
            '    .WhereElementIsNotElementType()',
            '',
            '# Every door TYPE defined in the project (not instances placed):',
            'door_types = DB.FilteredElementCollector(doc)\\',
            '    .OfCategory(DB.BuiltInCategory.OST_Doors)\\',
            '    .WhereElementIsElementType()',
          ],
        },
        formula: { label: 'Key Distinction', text: '.WhereElementIsNotElementType() → placed instances; .WhereElementIsElementType() → type/family definitions — never assume, always scope explicitly' },
      },
      {
        id: 's5', heading: 'Working with the User\'s Current Selection', level: 'h2',
        content: `Rather than querying the entire model, a script can instead work only with whatever the user has already selected in the Revit canvas before clicking the button. pyRevit provides a convenience shortcut for this via **revit.get_selection()**.`,
        code: {
          label: 'Getting the Current Selection',
          lines: [
            'from pyrevit import revit',
            '',
            'selection = revit.get_selection()',
            'selected_elements = list(selection)',
            '',
            '# Equivalent to manually reading:',
            '# revit.uidoc.Selection.GetElementIds()',
            '# and resolving each Id to its Element',
          ],
        },
        items: [
          'revit.get_selection() returns pyRevit\'s Selection helper object wrapping the user\'s current Revit canvas selection',
          'This is functionally a shortcut for working with revit.uidoc.Selection directly, saving the manual step of converting ElementIds to Elements',
          'Scripts using selection typically expect the user to select elements in Revit before clicking the tool\'s ribbon button',
        ],
      },
      {
        id: 's6', heading: 'Choosing Between a Collector and the Selection', level: 'h2',
        content: `Deciding whether a script should query the whole model or work only with the user\'s selection depends entirely on the tool\'s intended use.`,
        items: [
          'Use a FilteredElementCollector when a tool should act consistently on every matching element, project-wide (e.g., a QA/QC audit of every door)',
          'Use revit.get_selection() when a tool should act only on elements the user deliberately picked (e.g., "set fire rating on just these three walls")',
          'A well-designed tool sometimes checks the selection first, and falls back to a full collector scoped by category if nothing is selected',
          'Always inform the user clearly (via the output window or a dialog) which mode a script is operating in, to avoid surprising results',
        ],
        formula: { label: 'Decision Rule', text: 'Model-wide audits and bulk operations → FilteredElementCollector; user-directed, targeted operations → revit.get_selection()' },
      },
      {
        id: 's7', heading: 'Combining Filtering with Reading Element Data', level: 'h2',
        content: `Once a scoped list of elements is collected — whether from a collector or from the selection — the next natural step, covered fully in the next lesson, is reading and writing their parameter values.`,
        code: {
          label: 'Preview: Filter Then Inspect',
          lines: [
            'walls = DB.FilteredElementCollector(doc)\\',
            '    .OfCategory(DB.BuiltInCategory.OST_Walls)\\',
            '    .WhereElementIsNotElementType()',
            '',
            'for wall in walls:',
            '    print(wall.Name)   # placeholder — full parameter access next lesson',
          ],
        },
      },
    ],
    takeaways: [
      'DB.FilteredElementCollector(doc) alone returns every element in the document — it needs scoping methods to be useful.',
      '.OfCategory(DB.BuiltInCategory.OST_...) scopes a collector to a specific Revit category, such as OST_Doors or OST_Walls.',
      '.OfClass(DB.FamilyInstance) scopes a collector to a specific .NET class, and can be combined with .OfCategory() for precision.',
      '.WhereElementIsNotElementType() returns placed instances; .WhereElementIsElementType() returns type/family definitions.',
      'revit.get_selection() (backed by revit.uidoc.Selection) returns the user\'s current Revit canvas selection instead of a full model query.',
      'Use a FilteredElementCollector for model-wide, category-scoped operations, and revit.get_selection() for tools meant to act only on user-picked elements.',
    ],
    resource: { label: 'Selecting & Filtering Elements Reference', type: 'PDF' },
    quiz: { label: 'Selecting & Filtering Elements Quiz', questions: 10, time: '5 min' },
    prev: { id: 'py-6', title: 'Transactions — Making Changes to Revit Safely' },
    next: { id: 'py-8', title: 'Reading & Writing Revit Parameters with Python' },
  },

  // ============================================================
  // LESSON PY-08 — Reading & Writing Revit Parameters with Python
  // ============================================================
  {
    id: 'py-8', num: '08',
    title: 'Reading & Writing Revit Parameters with Python',
    topic: 'Elements & Parameters', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'Learn to read and write Revit parameter values using LookupParameter and the typed AsString/AsDouble/AsInteger/Set methods.',
    intro: `This lesson closes the beginner block by bringing together everything covered so far — collecting elements, working inside a Transaction, and now reading and writing the parameter data that makes a BIM model actually useful. Unlike Dynamo\'s single GetParameterValueByName/SetParameterByName nodes, pyRevit works with the Parameter object directly, which means understanding a parameter\'s storage type is not optional — it is required to read or write it correctly.`,
    sections: [
      {
        id: 's1', heading: 'Getting a Parameter Object', level: 'h2',
        content: `Every Revit element exposes its parameters through methods on the element itself. The most common starting point is **element.LookupParameter("Name")**, which finds a parameter by its exact display name.`,
        code: {
          label: 'Looking Up a Parameter',
          lines: [
            'param = element.LookupParameter("Mark")',
            '',
            '# Returns a DB.Parameter object, or None if no parameter',
            '# with that exact name exists on this element.',
            '',
            'if param is None:',
            '    print("No \'Mark\' parameter found on this element")',
          ],
        },
        formula: { label: 'Exact Match Rule', text: 'LookupParameter matches the parameter\'s display name exactly, including capitalization — always check the Properties palette for the precise spelling' },
      },
      {
        id: 's2', heading: 'Reading Values — Typed Getters', level: 'h2',
        content: `A Parameter object does not expose a single generic ".Value" — instead, you must call the getter matching its **StorageType**: AsString(), AsDouble(), AsInteger(), or AsElementId().`,
        code: {
          label: 'Typed Parameter Getters',
          lines: [
            'mark_param = element.LookupParameter("Mark")',
            'mark_value = mark_param.AsString()        # StorageType.String',
            '',
            'height_param = element.LookupParameter("Unconnected Height")',
            'height_value = height_param.AsDouble()    # StorageType.Double',
            '',
            'count_param = element.LookupParameter("Quantity")',
            'count_value = count_param.AsInteger()     # StorageType.Integer',
            '',
            'type_param = element.LookupParameter("Wall Type")',
            'type_id = type_param.AsElementId()        # StorageType.ElementId',
          ],
        },
      },
      {
        id: 's3', heading: 'Knowing a Parameter\'s Storage Type', level: 'h2',
        content: `Calling the wrong typed getter for a parameter\'s actual storage type returns an incorrect or empty result rather than automatically converting for you. Checking **.StorageType** first removes the guesswork.`,
        code: {
          label: 'Checking StorageType',
          lines: [
            'param = element.LookupParameter("Comments")',
            '',
            'if param.StorageType == DB.StorageType.String:',
            '    value = param.AsString()',
            'elif param.StorageType == DB.StorageType.Double:',
            '    value = param.AsDouble()',
            'elif param.StorageType == DB.StorageType.Integer:',
            '    value = param.AsInteger()',
            'elif param.StorageType == DB.StorageType.ElementId:',
            '    value = param.AsElementId()',
          ],
        },
        formula: { label: 'Storage Type Rule', text: 'DB.StorageType has exactly four values: String, Double, Integer, and ElementId — every parameter belongs to one of these' },
      },
      {
        id: 's4', heading: 'Writing Values — .Set() Inside a Transaction', level: 'h2',
        content: `Writing a new value into a parameter uses the Parameter object\'s **.Set(value)** method — and, following Lesson 6, must happen inside a Transaction since it modifies the model.`,
        code: {
          label: 'Writing a Parameter Value',
          lines: [
            'from pyrevit import revit, DB',
            '',
            'with revit.Transaction("Set Mark Value"):',
            '    param = element.LookupParameter("Mark")',
            '    param.Set("A-101")',
            '',
            '# .Set() expects a value matching the parameter\'s StorageType:',
            '#   String     → .Set("some text")',
            '#   Double     → .Set(12.5)',
            '#   Integer    → .Set(4)',
            '#   ElementId  → .Set(some_element_id)',
          ],
        },
        formula: { label: 'Write Rule', text: 'param.Set(value) always requires the value\'s type to match the parameter\'s StorageType, and always requires an active Transaction' },
      },
      {
        id: 's5', heading: 'Read-Only Parameters', level: 'h2',
        content: `Not every parameter can be written to. Some are calculated automatically by Revit (like Area or Volume on certain elements) and will raise an error if .Set() is attempted on them.`,
        items: [
          'Check param.IsReadOnly before attempting to write, to fail gracefully rather than raising an unhandled exception',
          'Calculated parameters (e.g., Area, Volume) are typically read-only and reflect geometry automatically — they cannot be set directly',
          'Shared parameters and project parameters are typically writable unless explicitly configured otherwise',
          'Always test whether a parameter is writable on a sample element before building a bulk-update script around it',
        ],
      },
      {
        id: 's6', heading: 'Contrast with Dynamo\'s Single-Node Approach', level: 'h2',
        content: `Dynamo abstracts all of this behind two general-purpose nodes: **Element.GetParameterValueByName** and **Element.SetParameterByName**, which handle type detection internally so the user never sees StorageType at all.`,
        code: {
          label: 'Dynamo vs PyRevit Side-by-Side',
          lines: [
            'Dynamo (one general node, type handled internally):',
            '  Element.GetParameterValueByName(element, "Mark")',
            '  Element.SetParameterByName(element, "Mark", "A-101")',
            '',
            'PyRevit (direct Parameter object, typed explicitly):',
            '  param = element.LookupParameter("Mark")',
            '  value = param.AsString()',
            '  param.Set("A-101")   # inside a Transaction',
          ],
        },
        formula: { label: 'Trade-off', text: 'pyRevit requires knowing the StorageType explicitly, but in exchange gives full control — including access to IsReadOnly, parameter definitions, and formula-driven parameters that a single generic node cannot expose' },
      },
      {
        id: 's7', heading: 'A Small Practical Example — Bulk-Setting a Parameter', level: 'h2',
        content: `Combining this lesson with Lessons 6 and 7 produces a complete, realistic script: collect every wall, then set a Comments value on each one inside a single Transaction.`,
        code: {
          label: 'Bulk Parameter Update Example',
          lines: [
            'from pyrevit import revit, DB',
            '',
            'walls = DB.FilteredElementCollector(revit.doc)\\',
            '    .OfCategory(DB.BuiltInCategory.OST_Walls)\\',
            '    .WhereElementIsNotElementType()',
            '',
            'with revit.Transaction("Set Comments on All Walls"):',
            '    for wall in walls:',
            '        param = wall.LookupParameter("Comments")',
            '        if param and not param.IsReadOnly:',
            '            param.Set("Reviewed")',
          ],
        },
      },
    ],
    takeaways: [
      'element.LookupParameter("Name") returns a Parameter object matched by exact display name, or None if not found.',
      'Reading a parameter\'s value requires calling the typed getter matching its StorageType: AsString(), AsDouble(), AsInteger(), or AsElementId().',
      'DB.StorageType has exactly four values — String, Double, Integer, and ElementId — every parameter belongs to one of them.',
      'Writing a value uses param.Set(value) inside a Transaction, and the value\'s type must match the parameter\'s StorageType.',
      'Some parameters are read-only (often calculated values like Area); check param.IsReadOnly before attempting to write.',
      'Dynamo\'s single GetParameterValueByName/SetParameterByName nodes hide StorageType handling; pyRevit exposes the Parameter object directly for more control at the cost of needing to know its storage type.',
    ],
    resource: { label: 'Reading & Writing Parameters Reference Guide', type: 'PDF' },
    quiz: { label: 'Parameters in PyRevit Quiz', questions: 10, time: '5 min' },
    prev: { id: 'py-7', title: 'Selecting & Filtering Elements with Python' },
    next: { id: 'py-9', title: 'Building Your First Custom PyRevit Button' },
  },

];
