// ============================================================
// REVIT PROJECT SETUP — QUIZZES ps-1 through ps-8 (BEGINNER)
// File: lib/revitSetupQuizzesContent/quizzes-1-8.js
// ============================================================

export const quizzes_1_8 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-1: Why Project Setup Matters
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-1',
    title: 'Why Project Setup Matters',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A project team skips proper Revit setup and starts modeling immediately. Three months later, the coordinate system is found to be incorrect. What is the most likely consequence?',
        options: [
          'A quick 10-minute fix in Manage → Coordinates',
          'Days of rework to realign the model and all linked consultant files',
          'The model must be deleted and rebuilt from scratch',
          'Only the sheets need to be updated — the model geometry is unaffected',
        ],
        answer: 'Days of rework to realign the model and all linked consultant files',
      },
      {
        type: 'truefalse',
        question: 'A well-configured Revit project file should have view templates, line weights, materials, and sheet setup complete before any team member starts modeling.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'Who is primarily responsible for setting up a Revit project file before the team starts modeling?',
        options: [
          'The most junior team member, as a learning exercise',
          'The client, who specifies all settings in the EIR',
          'The BIM Manager or lead architect on the project',
          'The structural engineer, who sets up the shared coordinate system',
        ],
        answer: 'The BIM Manager or lead architect on the project',
      },
      {
        type: 'mcq',
        question: 'Approximately how long does a proper Revit project setup take for a mid-size project?',
        options: ['15-30 minutes', '4-8 hours', '2-3 days', '1-2 weeks'],
        answer: '4-8 hours',
      },
      {
        type: 'fillblank',
        question: 'The work done setting up one project can be saved as an office ___ (.rte file) so future projects inherit the same standards automatically.',
        answer: 'template',
      },
      {
        type: 'mcq',
        question: 'Which of the following is NOT part of a well-configured project file before modeling begins?',
        options: [
          'View templates for all standard drawing types',
          'Shared coordinates tied to the site survey datum',
          'All construction drawings completed and issued',
          'Worksets created and named for the project disciplines',
        ],
        answer: 'All construction drawings completed and issued',
      },
      {
        type: 'truefalse',
        question: 'A good office template eliminates all per-project setup work — a new project can start modeling immediately without any additional configuration.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A new team member joins the project mid-design. With a well-set-up project file, what should they NOT need to ask?',
        options: [
          'What is the project name?',
          'What line style should I use for partition walls?',
          'What is the structural engineer\'s contact details?',
          'What are the client\'s design preferences?',
        ],
        answer: 'What line style should I use for partition walls?',
      },
      {
        type: 'mcq',
        question: 'This course builds one complete project file for a fictional building called:',
        options: [
          'Dharren Park Residential Tower',
          'Dharren Park Commercial Centre',
          'Dharren Park BIM Academy',
          'Dharren Park Mixed-Use Hub',
        ],
        answer: 'Dharren Park Commercial Centre',
      },
      {
        type: 'truefalse',
        question: 'Project setup should be done incrementally throughout the project as needs arise, not all at once at the start.',
        answer: false,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-2: Choosing the Right Template
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-2',
    title: 'Choosing the Right Template',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'You open a potential office template and run Purge Unused. The file size drops from 180MB to 45MB. What does this indicate?',
        options: [
          'The template is in good health — purging always reduces size this much',
          'The template has not been maintained — it accumulated unused families over many projects',
          'The template was built for a different Revit version',
          'The template is missing required families that should be loaded',
        ],
        answer: 'The template has not been maintained — it accumulated unused families over many projects',
      },
      {
        type: 'truefalse',
        question: 'A well-maintained office template should have zero warnings when opened.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'What is the primary advantage of starting a project from an office template over an Autodesk default template?',
        options: [
          'Office templates are always smaller file sizes',
          'Office templates contain firm-specific standards — titleblock, line weights, view templates, materials — reducing setup time significantly',
          'Office templates are compatible with older Revit versions',
          'Office templates automatically set up shared coordinates',
        ],
        answer: 'Office templates contain firm-specific standards — titleblock, line weights, view templates, materials — reducing setup time significantly',
      },
      {
        type: 'mcq',
        question: 'When should worksharing be enabled relative to the first save of the project file?',
        options: [
          'After the entire team has started modeling and needs to collaborate',
          'Before the first save — enable worksharing, create worksets, then save as Central File',
          'After the first month of the project once the design is stable',
          'Only when the file exceeds 100MB in size',
        ],
        answer: 'Before the first save — enable worksharing, create worksets, then save as Central File',
      },
      {
        type: 'fillblank',
        question: 'The file save option that makes a Revit project file into a Central File for worksharing is called "Make this a ___ after save."',
        answer: 'Central Model',
      },
      {
        type: 'mcq',
        question: 'A project starts in Revit 2024 but a consultant is using Revit 2025. What is the most likely problem?',
        options: [
          'No problem — Revit files are fully compatible across versions',
          'The consultant cannot open the 2024 file in Revit 2025 without upgrading it first',
          'The project team cannot open the 2024 file — they need to upgrade to 2025 immediately',
          'File names will be different but the content will open correctly',
        ],
        answer: 'The consultant cannot open the 2024 file in Revit 2025 without upgrading it first',
      },
      {
        type: 'truefalse',
        question: 'The file name and CDE location should be finalized before the first save of the project file.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'Which of the following signs indicates a GOOD office template?',
        options: [
          'File size of 280MB with 400 furniture family types loaded',
          'Last modified date is 6 years ago',
          'Zero warnings on open, file size under 50MB, view templates for all drawing types',
          'Uses the Autodesk default A0 Metric titleblock',
        ],
        answer: 'Zero warnings on open, file size under 50MB, view templates for all drawing types',
      },
      {
        type: 'mcq',
        question: 'A coordinated Revit version upgrade mid-project requires which sequence?',
        options: [
          'Each user upgrades their local copy independently when convenient',
          'All users sync and close local copies → BIM Manager upgrades the Central File → all users create new local copies from the upgraded Central',
          'The BIM Manager upgrades their local copy and it automatically upgrades the Central File',
          'Export the model to IFC, upgrade Revit, then import the IFC as the new project',
        ],
        answer: 'All users sync and close local copies → BIM Manager upgrades the Central File → all users create new local copies from the upgraded Central',
      },
      {
        type: 'truefalse',
        question: 'Starting a project with "None" (no template) is recommended for building a new office template from scratch.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-3: Units, Tolerances & Project Information
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-3',
    title: 'Units, Tolerances & Project Information',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A room schedule shows areas as "45.234567 m²". What is the correct fix?',
        options: [
          'Manually type the rounded value in each schedule cell',
          'Set Area rounding to 2 decimal places in Manage → Project Units',
          'Use the Schedule Properties → Formatting tab to change decimal places for that schedule only',
          'Both B and C are valid approaches',
        ],
        answer: 'Both B and C are valid approaches',
      },
      {
        type: 'truefalse',
        question: 'Changing the Length rounding setting in Project Units changes the actual geometric precision of the model — walls will be snapped to the nearest mm.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The "Suppress trailing zeros" option in the Length format dialog causes which of these changes?',
        options: [
          '"200.500" displays as "200.5" and "200.000" displays as "200"',
          '"200.500" displays as "200" — all decimal places are suppressed',
          '"200.000" displays as "200.000" — no change',
          'Trailing zeros are removed from schedule values only, not dimension strings',
        ],
        answer: '"200.500" displays as "200.5" and "200.000" displays as "200"',
      },
      {
        type: 'mcq',
        question: 'Which keyboard shortcut opens the Project Units dialog in Revit?',
        options: ['PU', 'UN', 'Ctrl+U', 'MU'],
        answer: 'UN',
      },
      {
        type: 'fillblank',
        question: 'Project Information is accessed via Manage tab → Settings panel → ___.',
        answer: 'Project Information',
      },
      {
        type: 'mcq',
        question: 'A titleblock shows "Project" and "Client" as blank fields even though the project has a name and client. What is the most likely cause?',
        options: [
          'The titleblock family needs to be reloaded',
          'Project Information (Project Name, Client Name) has not been filled in',
          'The sheet has the wrong titleblock type applied',
          'The titleblock Label fields are referencing the wrong parameters',
        ],
        answer: 'Project Information (Project Name, Client Name) has not been filled in',
      },
      {
        type: 'truefalse',
        question: 'Project Information parameters like Project Name and Project Number automatically appear in IFC file headers when exporting.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'Temporary Dimension settings (File → Options → Revit) control:',
        options: [
          'How long temporary dimensions stay visible before disappearing',
          'What reference point the blue temporary dimensions snap to when selecting walls (face, centerline, core)',
          'The font size of blue temporary dimension text',
          'Whether temporary dimensions appear in rendered views',
        ],
        answer: 'What reference point the blue temporary dimensions snap to when selecting walls (face, centerline, core)',
      },
      {
        type: 'mcq',
        question: 'For a UK metric architectural project, which Length unit setting is most appropriate?',
        options: [
          'Meters, 3 decimal places, no trailing zero suppression',
          'Millimeters, 0 decimal places, trailing zeros suppressed',
          'Centimeters, 1 decimal place',
          'Millimeters, 3 decimal places',
        ],
        answer: 'Millimeters, 0 decimal places, trailing zeros suppressed',
      },
      {
        type: 'truefalse',
        question: 'Custom parameters can be added to the Project Information dialog — for example, a "BEP Version" text field.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-4: Shared Coordinates & True North
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-4',
    title: 'Shared Coordinates & True North',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What symbol represents the Survey Point in a Revit floor plan view?',
        options: ['A circle with an X', 'A triangle', 'A star', 'A diamond'],
        answer: 'A triangle',
      },
      {
        type: 'truefalse',
        question: 'The Project Base Point and the Survey Point always occupy the same location in a Revit model.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A consultant links your architectural model using "Auto - By Shared Coordinates" but their grids do not align with yours. What is the most likely cause?',
        options: [
          'The consultant used the wrong link positioning method',
          'The consultant has not Acquired Coordinates from the architectural link in their model',
          'The architectural model needs to be reloaded',
          'Grids cannot be aligned using shared coordinates',
        ],
        answer: 'The consultant has not Acquired Coordinates from the architectural link in their model',
      },
      {
        type: 'mcq',
        question: 'Which Revit command does the architect use to push their coordinate system to a linked consultant model?',
        options: [
          'Manage → Coordinates → Acquire Coordinates',
          'Manage → Coordinates → Publish Coordinates',
          'Manage → Coordinates → Report Shared Coordinates',
          'Insert → Link Revit → By Shared Coordinates',
        ],
        answer: 'Manage → Coordinates → Publish Coordinates',
      },
      {
        type: 'fillblank',
        question: 'In Revit, the view orientation that shows the building rotated to its actual compass direction is called ___ North.',
        answer: 'True',
      },
      {
        type: 'mcq',
        question: 'A building is oriented at 23° from geographic north on site. In Revit, which view orientation would show the floor plan as a square (orthogonal) grid?',
        options: [
          'True North orientation',
          'Project North orientation',
          'Survey Point orientation',
          'Geographic orientation',
        ],
        answer: 'Project North orientation',
      },
      {
        type: 'truefalse',
        question: 'A correctly positioned Survey Point in Revit ensures that IFC exports place the building at its correct real-world geographic location.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The architect moves the building 5m north as a design change, affecting the shared coordinate system. What must all consultants do?',
        options: [
          'Nothing — shared coordinates update automatically when the architectural model is reloaded',
          'Re-acquire coordinates from the updated architectural link in their own models',
          'Delete and re-link the architectural model from scratch',
          'Update the Survey Point in their models manually to match the new position',
        ],
        answer: 'Re-acquire coordinates from the updated architectural link in their own models',
      },
      {
        type: 'mcq',
        question: 'Which Revit setting should both the Base Point and Survey Point be in during normal modeling?',
        options: ['Unclipped', 'Clipped', 'Hidden', 'Pinned'],
        answer: 'Clipped',
      },
      {
        type: 'truefalse',
        question: 'Revit uses the Survey Point location for solar angle calculations in sun studies.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-5: Levels & Grids — Setting Up Correctly
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-5',
    title: 'Levels & Grids — Setting Up Correctly',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A consultant changes a level name from "Level 1" to "Ground Floor" in their structural model after Copy/Monitor is set up. What happens in the architectural model?',
        options: [
          'The architectural level name updates automatically',
          'A Coordination Review alert is triggered in the architectural model',
          'Nothing — level names are not monitored by Copy/Monitor',
          'The link between the two models breaks',
        ],
        answer: 'A Coordination Review alert is triggered in the architectural model',
      },
      {
        type: 'truefalse',
        question: 'Levels and grids should be pinned after setup to prevent accidental movement during modeling.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'In international BIM practice, which grid naming convention is most standard?',
        options: [
          'Numbers for all grids (1, 2, 3... in both directions)',
          'Letters for vertical grids, numbers for horizontal grids',
          'Numbers for vertical grids (west to east), letters for horizontal grids (south to north)',
          'Coordinates-based names (A1, B2, C3)',
        ],
        answer: 'Numbers for vertical grids (west to east), letters for horizontal grids (south to north)',
      },
      {
        type: 'mcq',
        question: 'Which letters are typically skipped in grid naming to avoid confusion with numbers?',
        options: ['A and B', 'I and O', 'X and Y', 'G and Q'],
        answer: 'I and O',
      },
      {
        type: 'fillblank',
        question: 'After drawing grids in a floor plan, you use the ___ command to push their 3D extents to all elevation and section views.',
        answer: 'Propagate Extents',
      },
      {
        type: 'mcq',
        question: 'The architect\'s "Ground Floor" level is set at 0.000m (finished floor level). The structural slab top is at -0.150m. How should this be handled?',
        options: [
          'The structural engineer should move their slab to 0.000m to match the architect',
          'The distinction should be coordinated and documented in the BEP — either create separate levels or use wall base offsets',
          'Ignore the discrepancy — it is too small to matter in BIM coordination',
          'Delete the architect\'s 0.000m level and use the structural slab level for everything',
        ],
        answer: 'The distinction should be coordinated and documented in the BEP — either create separate levels or use wall base offsets',
      },
      {
        type: 'truefalse',
        question: 'When creating a new level, Revit asks if you want to create an associated floor plan view. You should always say Yes, even for structural reference levels.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The fastest way to place 8 equally-spaced structural grids at 7.2m centers is:',
        options: [
          'Place each grid individually and type the distance each time',
          'Place one grid, then use Modify → Array to create the remaining 7 at 7200mm spacing',
          'Place two grids and use Align → Distribute Equally',
          'Import a DWG with pre-drawn grid lines',
        ],
        answer: 'Place one grid, then use Modify → Array to create the remaining 7 at 7200mm spacing',
      },
      {
        type: 'mcq',
        question: 'Before distributing the architectural model to consultants for Copy/Monitor, what should the BIM Manager confirm with the structural engineer?',
        options: [
          'The structural engineer\'s computer specifications',
          'Level names, elevations, grid names, and spacing — to avoid triggering Coordination Review alerts immediately after setup',
          'Which Revit version the structural engineer uses',
          'The structural engineer\'s preferred VG settings for the architectural link',
        ],
        answer: 'Level names, elevations, grid names, and spacing — to avoid triggering Coordination Review alerts immediately after setup',
      },
      {
        type: 'truefalse',
        question: 'Absolute level elevations (referenced to a national survey datum like OS) are required on all projects.',
        answer: false,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-6: Worksets — Planning & Creating
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-6',
    title: 'Worksets — Planning & Creating',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'How many worksets is ideal for most architectural projects?',
        options: ['1-3', '4-8', '15-20', '30+'],
        answer: '4-8',
      },
      {
        type: 'truefalse',
        question: 'The "Shared Levels and Grids" workset is created automatically by Revit when worksharing is enabled and should contain all levels and grid lines.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A team member places walls on the "Furniture and Equipment" workset instead of "Architecture — Interior." What is the most efficient way to fix this?',
        options: [
          'Delete the walls and redraw them with the correct active workset',
          'Select the misplaced walls → Properties → Workset → change to "Architecture — Interior"',
          'Rename the "Furniture and Equipment" workset to "Architecture — Interior"',
          'This cannot be fixed without recreating the workshared model',
        ],
        answer: 'Select the misplaced walls → Properties → Workset → change to "Architecture — Interior"',
      },
      {
        type: 'mcq',
        question: 'Where is the Active Workset indicator shown during daily modeling?',
        options: [
          'In the Properties panel next to the element type',
          'In the status bar at the bottom of the Revit window',
          'In the Project Browser next to the current view',
          'In the Ribbon under the Collaborate tab',
        ],
        answer: 'In the status bar at the bottom of the Revit window',
      },
      {
        type: 'fillblank',
        question: 'To open only the architectural worksets without loading MEP or structural linked models, use the ___ option in the Open dialog to select specific worksets.',
        answer: 'Specify',
      },
      {
        type: 'mcq',
        question: 'Why is it recommended to create a dedicated "Linked Models" workset?',
        options: [
          'Linked models cannot be placed on any other workset',
          'It allows all linked models to be closed in one operation by closing that workset, improving performance',
          'It prevents other team members from accidentally reloading linked models',
          'Linked models on dedicated worksets sync faster',
        ],
        answer: 'It allows all linked models to be closed in one operation by closing that workset, improving performance',
      },
      {
        type: 'truefalse',
        question: 'Annotation elements (tags, dimensions, text notes) can be moved to a specific workset by changing their Workset parameter in Properties.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A team member needs to edit a wall but it shows as not editable. The Worksharing Monitor shows another user owns it. What is the correct first step?',
        options: [
          'Force-release the ownership from the BIM Manager tools',
          'Place a new wall on top of the locked one',
          'Message the owner and ask them to sync and relinquish',
          'Work on a different task and wait — ownership releases automatically after 1 hour',
        ],
        answer: 'Message the owner and ask them to sync and relinquish',
      },
      {
        type: 'mcq',
        question: 'The workset strategy for a project should be documented in:',
        options: [
          'A sticky note on the BIM Manager\'s monitor',
          'The BIM Execution Plan (BEP)',
          'A comment in the Revit journal file',
          'The project\'s revision history',
        ],
        answer: 'The BIM Execution Plan (BEP)',
      },
      {
        type: 'truefalse',
        question: 'Making a workset "Editable" in Revit prevents all other team members from editing any element on that workset until ownership is released.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-7: File Naming & Folder Structure
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-7',
    title: 'File Naming & Folder Structure',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A drawing file is issued to a contractor with status code S0. What is wrong with this?',
        options: [
          'S0 files should have an S1 prefix, not S0',
          'S0 means "work in progress — not for use" — issuing it to a contractor means they may build from unfinished information',
          'S0 is not a valid suitability code',
          'Nothing — S0 is the standard code for contractor issue',
        ],
        answer: 'S0 means "work in progress — not for use" — issuing it to a contractor means they may build from unfinished information',
      },
      {
        type: 'truefalse',
        question: 'Once a file has been issued at revision P03, the next revision can be called P03a if the changes are minor.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'What is the correct suitability code for drawings issued to the contractor for construction?',
        options: ['S0', 'S1', 'S2', 'S3'],
        answer: 'S3',
      },
      {
        type: 'mcq',
        question: 'A project moves from preliminary issue to contract issue. What happens to the revision numbering?',
        options: [
          'Continues from where it left off: if last preliminary was P05, next is P06',
          'Resets: the first contract issue is C01 regardless of how many preliminary revisions there were',
          'Starts with a letter: A01, B01, C01',
          'The client specifies the contract revision number',
        ],
        answer: 'Resets: the first contract issue is C01 regardless of how many preliminary revisions there were',
      },
      {
        type: 'fillblank',
        question: 'A formal record of what files were issued, to whom, at what revision, and for what purpose is called a ___.',
        answer: 'transmittal',
      },
      {
        type: 'mcq',
        question: 'Which CDE zone contains files that are being actively worked on and are not yet ready for sharing with other disciplines?',
        options: ['Shared', 'Published', 'Work in Progress (WIP)', 'Archived'],
        answer: 'Work in Progress (WIP)',
      },
      {
        type: 'truefalse',
        question: 'Superseded file revisions should be deleted from the CDE once a new revision is issued to keep the folder clean.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Which file path type is more robust for Revit links on a shared CDE with multiple team members?',
        options: [
          'Absolute paths (e.g., C:\\Projects\\DPC2024\\...)',
          'Relative paths (e.g., .\\STRU\\ModelFile.rvt)',
          'UNC paths (e.g., \\\\server\\projects\\...)',
          'URL paths (e.g., https://cde.firm.com/projects/...)',
        ],
        answer: 'Relative paths (e.g., .\\STRU\\ModelFile.rvt)',
      },
      {
        type: 'mcq',
        question: 'The "Originator" field in a file name identifies:',
        options: [
          'The project client',
          'The company or team that created the file',
          'The Revit version used to create the file',
          'The discipline the file belongs to',
        ],
        answer: 'The company or team that created the file',
      },
      {
        type: 'truefalse',
        question: 'On Autodesk Docs / ACC, cloud links reference a file\'s unique ID rather than a file path — so links do not break when files are renamed.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-8: Linked File Strategy
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-8',
    title: 'Linked File Strategy',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'In a Hub and Spoke link topology, which model is the hub?',
        options: [
          'The structural model, as it contains the primary geometry',
          'The architectural model, which all other disciplines link to',
          'The MEP model, as it has the most coordination requirements',
          'A dedicated coordination model that no discipline authors',
        ],
        answer: 'The architectural model, which all other disciplines link to',
      },
      {
        type: 'truefalse',
        question: 'A Federated Model topology is recommended for small projects with 2-3 disciplines.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A linked model shows "Not Found" in Manage → Links → Manage Links. What is the most likely cause and fix?',
        options: [
          'The link was accidentally deleted — recreate it from scratch',
          'The linked file was moved or renamed — use "Reload From" to browse to the new location',
          'The Revit version of the linked file is incompatible — upgrade the linked file',
          'The workset containing the link was closed — open the workset',
        ],
        answer: 'The linked file was moved or renamed — use "Reload From" to browse to the new location',
      },
      {
        type: 'mcq',
        question: 'You are working on interior annotation and do not need to see the structural or MEP models. What should you do to improve performance?',
        options: [
          'Delete the linked models and re-link them when needed',
          'Turn off the linked models in Visibility/Graphics for the current view',
          'Unload the links via Manage → Links → Manage Links — reload them for coordination sessions',
          'Close the Revit file and open a separate copy without the links',
        ],
        answer: 'Unload the links via Manage → Links → Manage Links — reload them for coordination sessions',
      },
      {
        type: 'fillblank',
        question: 'The link positioning method that requires all disciplines to Acquire Coordinates from the architectural model is "Auto - By Shared ___."',
        answer: 'Coordinates',
      },
      {
        type: 'mcq',
        question: 'The link positioning method that should be agreed and documented in the BIM Execution Plan is:',
        options: [
          'Auto - Center to Center, for simplicity',
          'Manual placement, so each discipline can position their model independently',
          'Auto - By Shared Coordinates, for the most robust multi-discipline alignment',
          'Auto - Origin to Origin, always — regardless of project setup',
        ],
        answer: 'Auto - By Shared Coordinates, for the most robust multi-discipline alignment',
      },
      {
        type: 'truefalse',
        question: 'When a consultant issues a new revision of their model to the Shared CDE zone, your architectural model automatically updates to show the new version.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'In a workshared project, who is responsible for reloading and managing linked models?',
        options: [
          'Any team member who notices the link is out of date',
          'The designated person (usually the BIM Manager) who owns the workset containing the linked models',
          'The discipline that authored the linked model',
          'Revit automatically manages link reloading in workshared projects',
        ],
        answer: 'The designated person (usually the BIM Manager) who owns the workset containing the linked models',
      },
      {
        type: 'mcq',
        question: 'What is the difference between "Reload" and "Reload From" in Manage Links?',
        options: [
          'Reload updates all links at once; Reload From updates one link at a time',
          'Reload reloads from the stored path (same file); Reload From lets you browse to a different file location',
          'Reload is for local files; Reload From is for cloud-based files',
          'There is no difference — they perform the same operation',
        ],
        answer: 'Reload reloads from the stored path (same file); Reload From lets you browse to a different file location',
      },
      {
        type: 'truefalse',
        question: 'When a linked model\'s VG settings and visibility overrides are configured, they are lost if the link is unloaded and reloaded.',
        answer: false,
      },
    ],
  },
];
