// ============================================================
// REVIT PROJECT SETUP — QUIZZES ps-17 through ps-24 (ADVANCED)
// File: lib/revitSetupQuizzesContent/quizzes-17-24.js
// ============================================================

export const quizzes_17_24 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-17: Shared Parameters — Project Setup
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-17',
    title: 'Shared Parameters — Project Setup',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A project requires a "Fire Rating" parameter that appears in both a Fire Rating tag and the wall schedule. Which parameter type must be used?',
        options: [
          'Project Parameter — it is faster to set up',
          'Shared Parameter — tags can only read Shared Parameters and built-in parameters',
          'Family Parameter — defined within each wall type',
          'Built-in Parameter — Revit already has a fire rating field',
        ],
        answer: 'Shared Parameter — tags can only read Shared Parameters and built-in parameters',
      },
      {
        type: 'truefalse',
        question: 'The shared parameter file should be stored on a local drive for fastest access during modeling.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A shared parameter "Asset ID" needs to appear on every piece of mechanical and electrical equipment. When adding it to the project, which step assigns it to multiple categories at once?',
        options: [
          'Add it once — Revit automatically assigns it to all categories',
          'In the Project Parameters dialog, use Ctrl+Click to select multiple categories in the Categories list before clicking OK',
          'Add the parameter separately for each category in individual sessions',
          'Shared parameters automatically appear on all categories — no assignment needed',
        ],
        answer: 'In the Project Parameters dialog, use Ctrl+Click to select multiple categories in the Categories list before clicking OK',
      },
      {
        type: 'mcq',
        question: 'A "Maintenance Frequency" parameter applies to each individual piece of equipment (different frequencies per asset). Should this be an Instance or Type parameter?',
        options: [
          'Type — so all equipment of the same model has the same maintenance frequency',
          'Instance — each individual asset may have a different maintenance schedule',
          'Either — both work identically for this use case',
          'Global — it should apply project-wide, not per element',
        ],
        answer: 'Instance — each individual asset may have a different maintenance schedule',
      },
      {
        type: 'fillblank',
        question: 'The unique identifier stored in the shared parameter file that allows Revit to recognize the same parameter across different families and projects is called a ___.',
        answer: 'GUID',
      },
      {
        type: 'mcq',
        question: 'After adding a shared parameter "Fire Rating" to the Walls category, a team member selects a wall and cannot find "Fire Rating" in the Properties panel. What is the most likely cause?',
        options: [
          'The wall is on a closed workset',
          'The parameter was added as a Type parameter but the team member is looking in the Instance properties section',
          'Shared parameters do not appear in the Properties panel — only in schedules',
          'The shared parameter file was not saved after the parameter was created',
        ],
        answer: 'The parameter was added as a Type parameter but the team member is looking in the Instance properties section',
      },
      {
        type: 'truefalse',
        question: 'COBie shared parameters should be created manually in the project\'s shared parameter file to match the COBie schema exactly.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A parameter schema is planned at the start of the lesson. What is the primary source for defining which parameters the project needs?',
        options: [
          'The Autodesk default parameter library',
          'The BIM Execution Plan and Employer\'s Information Requirements — what data does the client need at handover?',
          'The previous project\'s parameter list — copy and paste from there',
          'The structural engineer\'s parameter requirements',
        ],
        answer: 'The BIM Execution Plan and Employer\'s Information Requirements — what data does the client need at handover?',
      },
      {
        type: 'mcq',
        question: 'A parameter named "Fire Rating" was created in the shared parameter file. A team member wants to rename it to "Fire_Rating" mid-project. What is the risk?',
        options: [
          'No risk — renaming a parameter in the file automatically updates all project elements',
          'The renamed parameter loses its GUID link to the old name — any elements using "Fire Rating" will retain the old parameter, and the new name creates a separate unlinked parameter',
          'Renaming is not possible in Revit shared parameter files',
          'Renaming only affects the display in the Properties panel, not the underlying data',
        ],
        answer: 'The renamed parameter loses its GUID link to the old name — any elements using "Fire Rating" will retain the old parameter, and the new name creates a separate unlinked parameter',
      },
      {
        type: 'truefalse',
        question: 'A parameter added to the project via Manage → Project Parameters → Shared Parameter will automatically appear in the IFC export with correct Pset mapping.',
        answer: false,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-18: Project Parameters & Schedules Pre-Built
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-18',
    title: 'Project Parameters & Schedules Pre-Built',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A door schedule pre-built at project setup shows empty cells in the "Fire Rating" column. What does this signal to the modeling team?',
        options: [
          'The Fire Rating parameter has not been added to the project correctly',
          'This is the data the team needs to populate as doors are placed — the schedule is working correctly as a data capture tool',
          'The schedule needs to be rebuilt after all doors are placed',
          'Fire ratings are automatically populated from the door family type',
        ],
        answer: 'This is the data the team needs to populate as doors are placed — the schedule is working correctly as a data capture tool',
      },
      {
        type: 'truefalse',
        question: 'The program compliance schedule requires a "Required Area" shared parameter added to the Rooms category — this cannot be done with a built-in Revit parameter.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'In a Room Schedule, a "Compliance" calculated value column uses the formula: if(Area Variance >= 0, "✓ Compliant", "✗ Below Brief"). A room shows "✗ Below Brief." What does this mean?',
        options: [
          'The room has not been placed in the model yet',
          'The room\'s actual area is less than its Required Area from the project brief',
          'The room\'s Phase is incorrect',
          'The room tag is missing from the floor plan view',
        ],
        answer: 'The room\'s actual area is less than its Required Area from the project brief',
      },
      {
        type: 'mcq',
        question: 'Schedule column order best practice places which columns on the LEFT side?',
        options: [
          'Calculated values and read-only columns (Area, Volume)',
          'Identification columns (Mark, Type Name, Level) — then data entry columns in the centre',
          'Data entry columns first — so the team fills them in immediately on opening',
          'Comments columns — most important for QA communication',
        ],
        answer: 'Identification columns (Mark, Type Name, Level) — then data entry columns in the centre',
      },
      {
        type: 'fillblank',
        question: 'A schedule that shows one row per wall type (not per wall instance) — showing type name, thickness, and fire rating — uses the ___ schedule approach rather than instance scheduling.',
        answer: 'type-based',
      },
      {
        type: 'mcq',
        question: 'A renovation project needs separate tracking of existing doors and new doors. What is the correct schedule approach?',
        options: [
          'One schedule with a "Phase" column showing Existing or New for each row',
          'Two separate schedules — "Existing Doors" (Phase Filter: Show Complete, Phase: Existing) and "New Doors" (Phase: New Construction, Phase Filter: Show New)',
          'One schedule with Phase Created as a sorting/grouping parameter',
          'Existing doors are not scheduled in Revit — only new elements appear in schedules',
        ],
        answer: 'Two separate schedules — "Existing Doors" (Phase Filter: Show Complete, Phase: Existing) and "New Doors" (Phase: New Construction, Phase Filter: Show New)',
      },
      {
        type: 'truefalse',
        question: 'Schedules in Revit are view types — they can be placed on sheets as viewports and split across multiple sheets if they are too long to fit on one.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A "Data Complete" calculated column in a door schedule uses: if(and(Fire Rating <> "", Hardware Set <> ""), "✓", "INCOMPLETE"). Sorted ascending, which rows appear at the top?',
        options: [
          'Completed doors — ✓ sorts before INCOMPLETE alphabetically',
          'Incomplete doors — "INCOMPLETE" sorts before "✓" alphabetically',
          'Doors sorted by Mark number regardless of completeness',
          'The sort order is random for text calculated values',
        ],
        answer: 'Incomplete doors — "INCOMPLETE" sorts before "✓" alphabetically',
      },
      {
        type: 'mcq',
        question: 'A Material Takeoff schedule filtered to show only "Concrete" materials is used for:',
        options: [
          'Tracking which walls have a concrete finish applied via the Paint tool',
          'Quantity surveying — reporting concrete volume and area per structural element for cost planning',
          'Checking that all concrete elements have been assigned the correct material',
          'Generating a render material library for the concrete elements',
        ],
        answer: 'Quantity surveying — reporting concrete volume and area per structural element for cost planning',
      },
      {
        type: 'truefalse',
        question: 'The Sheet List schedule should be filtered using the "Appears in Sheet List" parameter so only formally issued sheets appear in the drawing register.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-19: Filters — Setting Up Project-Wide Rules
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-19',
    title: 'Filters — Setting Up Project-Wide Rules',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A "Fire Rated - 60 min" filter is created but the rule cannot find the "Fire Rating" parameter. What is the most likely cause?',
        options: [
          'The filter rule syntax is incorrect',
          'The "Fire Rating" shared parameter has not been added to the project via Manage → Project Parameters',
          'Filters cannot read shared parameters — only built-in parameters',
          'The filter category selection does not include Walls',
        ],
        answer: 'The "Fire Rating" shared parameter has not been added to the project via Manage → Project Parameters',
      },
      {
        type: 'truefalse',
        question: 'Adding a filter to a View Template automatically applies that filter to every view that uses the template.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'Two filters apply to the same wall: "Fire Rated - Any" (red fill, priority 1) and "Structural Elements" (heavy line weight, priority 2). Which override wins for a wall that is both structural and fire-rated?',
        options: [
          'Both overrides apply simultaneously',
          '"Fire Rated - Any" wins — it is higher in the filter list (priority 1)',
          '"Structural Elements" wins — structural elements take precedence',
          'Revit shows an error when two filters match the same element',
        ],
        answer: '"Fire Rated - Any" wins — it is higher in the filter list (priority 1)',
      },
      {
        type: 'mcq',
        question: 'A "Missing Mark" filter is set up to highlight doors with empty Mark values in magenta. A team member says the filter is not working — untagged doors are not highlighted. What should be checked first?',
        options: [
          'Whether the magenta colour is visible against the drawing background',
          'Whether the filter is included in the View Template assigned to the floor plan view',
          'Whether the Doors category is turned on in VG',
          'Whether the door tag family is loaded in the project',
        ],
        answer: 'Whether the filter is included in the View Template assigned to the floor plan view',
      },
      {
        type: 'fillblank',
        question: 'A filter documentation register records each filter\'s name, categories, rule, override, and which ___ it is applied to.',
        answer: 'View Templates',
      },
      {
        type: 'mcq',
        question: 'Which filter category serves as a QA tool during model review sessions to identify elements with missing required data?',
        options: [
          'Phase-based filters',
          'Structural filters',
          'Data completeness filters (e.g., Missing Fire Rating, Missing Mark)',
          'Discipline filters',
        ],
        answer: 'Data completeness filters (e.g., Missing Fire Rating, Missing Mark)',
      },
      {
        type: 'truefalse',
        question: 'A filter that uses OR logic matches elements where ANY one of the rules is true — useful for matching walls that are either fire-rated OR structural.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The complete chain for automated fire compartment highlighting is: Shared Parameter "Fire Rating" defined (ps-17) → Filter "Fire Rated - 60 min" created → Filter added to View Template → Template assigned to view. If the shared parameter step is skipped, what happens?',
        options: [
          'The filter runs but highlights all walls regardless of fire rating',
          'The filter cannot be created because the rule has no parameter to reference — the entire chain breaks at step 2',
          'The filter is created but shows no highlighted elements',
          'Revit uses a built-in fire rating field instead',
        ],
        answer: 'The filter cannot be created because the rule has no parameter to reference — the entire chain breaks at step 2',
      },
      {
        type: 'mcq',
        question: 'A project currently has 45 view filters. The BIM Manager adds 15 more for a new drawing type. What risk does this create?',
        options: [
          'No risk — more filters always improve drawing quality',
          'Filter proliferation — overrides conflict, priorities become unclear, and no one knows which filter controls what',
          'Performance risk — more than 50 filters causes Revit to slow significantly',
          'The filters will apply to all existing views automatically, changing their appearance',
        ],
        answer: 'Filter proliferation — overrides conflict, priorities become unclear, and no one knows which filter controls what',
      },
      {
        type: 'truefalse',
        question: 'A filter silently stops working if the shared parameter it references is renamed in the shared parameter file.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-20: Phase Setup for the Project
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-20',
    title: 'Phase Setup for the Project',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A team member places walls in a view set to Phase "Existing" instead of "New Construction." What is the result?',
        options: [
          'Revit prevents element placement in views set to phases before the current working phase',
          'The walls\' Phase Created is set to "Existing" — they appear on existing plans as retained elements, not new construction',
          'The walls are placed normally — the view phase does not affect element placement',
          'Revit asks the team member to confirm the phase before placing',
        ],
        answer: 'The walls\' Phase Created is set to "Existing" — they appear on existing plans as retained elements, not new construction',
      },
      {
        type: 'truefalse',
        question: 'Adding phases to a Revit project after modeling has started requires manually reassigning every placed element to the correct phase.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'For a renovation project, which Phase Filter should be applied to a "Demolition Plan" view showing existing elements and elements being removed?',
        options: [
          'Show New Only',
          'Show Complete',
          'Show Previous + Demo (or Show Demo + New)',
          'Show All',
        ],
        answer: 'Show Previous + Demo (or Show Demo + New)',
      },
      {
        type: 'mcq',
        question: 'The Phase Graphic Overrides for "Demolished" elements should conventionally show:',
        options: [
          'Full weight lines, solid — to clearly identify what is being removed',
          'Dashed lines, grey — conventionally representing elements being removed',
          'Halftone grey — same as Existing retained elements',
          'No display — demolished elements should be invisible in demolition plans',
        ],
        answer: 'Dashed lines, grey — conventionally representing elements being removed',
      },
      {
        type: 'fillblank',
        question: 'To demolish only part of an existing wall (retaining one section), the wall must first be ___ into segments before applying the Demolish tool.',
        answer: 'split',
      },
      {
        type: 'mcq',
        question: 'With correct phase setup, creating a demolition plan from an existing general arrangement view requires:',
        options: [
          'Manually drawing dashed lines over demolished elements',
          'Creating a separate Revit model for the demolition work',
          'Duplicating the GA view and applying the demolition View Template (which sets Phase and Phase Filter automatically)',
          'Running a script to convert existing walls to dashed line styles',
        ],
        answer: 'Duplicating the GA view and applying the demolition View Template (which sets Phase and Phase Filter automatically)',
      },
      {
        type: 'truefalse',
        question: 'Revit phase sequences must be chronological — a "Demolition" phase cannot come before an "Existing" phase.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'During a QA review with "Show All" phase filter, a wall appears in "New" state (full weight) on the existing plans. What does this indicate?',
        options: [
          'The wall is correctly set up as new construction',
          'The wall\'s Phase Created is "New Construction" but it should be "Existing" — it has been placed in the wrong phase',
          'The wall is temporary and will be removed in a later phase',
          'The wall has been correctly demolished in the current phase',
        ],
        answer: 'The wall\'s Phase Created is "New Construction" but it should be "Existing" — it has been placed in the wrong phase',
      },
      {
        type: 'mcq',
        question: 'The "Existing" phase state graphic override is set to Halftone. What visual effect does Halftone create?',
        options: [
          'Elements appear as black outlines with no fill',
          'Elements appear at 50% opacity — a light grey ghost behind new construction elements',
          'Elements appear as dashed lines',
          'Elements are hidden from the view',
        ],
        answer: 'Elements appear at 50% opacity — a light grey ghost behind new construction elements',
      },
      {
        type: 'truefalse',
        question: 'Phase settings (Phase and Phase Filter) should be included in View Templates so that creating a demolition plan requires only duplicating a view and applying the template.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-21: COBie & IFC Readiness
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-21',
    title: 'COBie & IFC Readiness',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Why should the IFC coordinate system be set to "Shared Coordinates" rather than "Project Internal"?',
        options: [
          'Shared Coordinates produces smaller IFC files',
          'Shared Coordinates places the building at its correct real-world geographic position — required for planning portals and GIS integration',
          'Project Internal coordinates are not supported by IFC4',
          'Shared Coordinates is faster to export',
        ],
        answer: 'Shared Coordinates places the building at its correct real-world geographic position — required for planning portals and GIS integration',
      },
      {
        type: 'truefalse',
        question: 'Revit natively exports COBie spreadsheets without any add-ins or additional software.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A dedicated "IFC EXPORT" 3D view is created with no Section Box and all elements visible. Why is this view needed rather than using any standard 3D view?',
        options: [
          'IFC export only works from 3D views named "IFC EXPORT"',
          'Standard 3D views may have hidden elements, crop regions, or section boxes that would exclude elements from the IFC — the dedicated view guarantees complete model export',
          'The IFC export format requires a specific viewport orientation',
          'Standard views export IFC in 2D only; a dedicated view enables 3D export',
        ],
        answer: 'Standard 3D views may have hidden elements, crop regions, or section boxes that would exclude elements from the IFC — the dedicated view guarantees complete model export',
      },
      {
        type: 'mcq',
        question: 'An IFC export is validated in Solibri Anywhere. The structural columns appear as "IfcBuildingElementProxy" instead of "IfcColumn." What does this indicate?',
        options: [
          'The columns are modeled correctly — IfcBuildingElementProxy is the IFC term for columns',
          'The Revit structural column category is not mapping correctly to the IfcColumn entity in the export settings',
          'Solibri is using an outdated IFC viewer that does not support column entities',
          'The columns need to be converted to a different Revit family before export',
        ],
        answer: 'The Revit structural column category is not mapping correctly to the IfcColumn entity in the export settings',
      },
      {
        type: 'fillblank',
        question: 'The IFC standard grouping of related properties on an IFC entity (e.g., "Pset_WallCommon" containing FireRating and AcousticRating) is called a Property ___.',
        answer: 'Set',
      },
      {
        type: 'mcq',
        question: 'COBie data is described as requiring information from multiple parties. Which party is primarily responsible for populating equipment warranty and installation data?',
        options: [
          'The architect — who models the equipment',
          'The MEP engineer — who specifies the equipment',
          'The contractor — who installs the equipment and knows the actual warranty terms',
          'The facilities manager — who will maintain the equipment',
        ],
        answer: 'The contractor — who installs the equipment and knows the actual warranty terms',
      },
      {
        type: 'truefalse',
        question: 'Shared parameters with IFC property set mapping must be configured at project setup — retrofitting IFC mapping on a completed model with thousands of elements is extremely time-consuming.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The "Export Base Quantities" setting in IFC export adds what to the exported file?',
        options: [
          'The base point coordinates for the building',
          'Calculated quantities (wall area, floor area, column volume) automatically derived from the model geometry',
          'The project\'s cost data from the room schedule',
          'The material quantities from the Material Takeoff schedule',
        ],
        answer: 'Calculated quantities (wall area, floor area, column volume) automatically derived from the model geometry',
      },
      {
        type: 'mcq',
        question: 'Which IFC version should be selected for all new projects as the current professional standard?',
        options: ['IFC 2x2', 'IFC 2x3', 'IFC4', 'IFC5'],
        answer: 'IFC4',
      },
      {
        type: 'truefalse',
        question: 'Saving a named IFC export preset ("DPC2024 - IFC4 Standard Issue") allows all future exports from the same project to use consistent settings with one click.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-22: Model Health Baseline
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-22',
    title: 'Model Health Baseline',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the target warning count for a project setup file before it is handed to the modeling team?',
        options: ['Under 50', 'Under 20', 'Under 10', 'Zero'],
        answer: 'Zero',
      },
      {
        type: 'truefalse',
        question: 'Clicking "Ignore" in the Review Warnings dialog resolves the underlying warning and removes it permanently from the model.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The correct sequence for the pre-handoff cleanup operations is:',
        options: [
          'Audit → Purge → Compact',
          'Compact → Audit → Purge',
          'Purge → Audit → Compact',
          'Compact → Purge → Audit',
        ],
        answer: 'Purge → Audit → Compact',
      },
      {
        type: 'mcq',
        question: 'After running Purge Unused twice, the second purge removes 0 items. What does this confirm?',
        options: [
          'The first purge was insufficient — run it a third time',
          'All purgeable content has been removed — the file is clean',
          'Revit has detected an error and is preventing further purging',
          'The file needs to be Audited before any more purging can occur',
        ],
        answer: 'All purgeable content has been removed — the file is clean',
      },
      {
        type: 'fillblank',
        question: 'The Revit open option that scans and repairs the internal database for corruption — run monthly and before major milestone issues — is called ___.',
        answer: 'Audit',
      },
      {
        type: 'mcq',
        question: 'A monthly health log shows: Month 1: 12 warnings. Month 2: 45 warnings. Month 3: 134 warnings. What does this trend indicate?',
        options: [
          'The project is progressing normally — warnings always increase with model complexity',
          'The warning count is growing faster than expected — active intervention is needed to diagnose and fix the warnings before they proliferate further',
          'The model needs to be rebuilt from scratch',
          'The BIM Manager should increase the monthly health check to weekly',
        ],
        answer: 'The warning count is growing faster than expected — active intervention is needed to diagnose and fix the warnings before they proliferate further',
      },
      {
        type: 'truefalse',
        question: 'A warning about "Elements have duplicate Mark values" is only a cosmetic issue — it does not affect schedules or drawing production.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The recommended maximum file size for a well-set-up project file before any modeling begins is:',
        options: ['20MB', '80MB', '250MB', '500MB'],
        answer: '80MB',
      },
      {
        type: 'mcq',
        question: 'During the 48-hour post-handoff check, the BIM Manager discovers walls placed on the "Furniture and Equipment" workset. What is the correct immediate action?',
        options: [
          'Delete and redraw the walls on the correct workset',
          'Contact the team member, explain the workset rules, and select the walls to change their Workset parameter to the correct workset',
          'Rename the "Furniture and Equipment" workset to include walls',
          'Move all content to one workset to simplify the project',
        ],
        answer: 'Contact the team member, explain the workset rules, and select the walls to change their Workset parameter to the correct workset',
      },
      {
        type: 'truefalse',
        question: 'The health baseline record (file size, warning count, family count, view count) should be stored in the project BIM documentation as the benchmark for all future monthly health comparisons.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-23: Saving as Office Template
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-23',
    title: 'Saving as Office Template',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Before saving a configured project as an office template, which of the following should be REMOVED?',
        options: [
          'Line weights and line styles',
          'View templates and browser organization',
          'Project Information values (Project Name, Client Name), project-specific levels, and actual model elements',
          'Materials library and tag families',
        ],
        answer: 'Project Information values (Project Name, Client Name), project-specific levels, and actual model elements',
      },
      {
        type: 'truefalse',
        question: 'A Revit template (.rte) file can be opened directly from File → Open just like a project file.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Which version numbering format is recommended for office Revit templates?',
        options: [
          'Sequential numbers: Template_001, Template_002',
          'Year.revision: OfficeTemplate_v2025.1, OfficeTemplate_v2025.2',
          'Date-based: OfficeTemplate_20250601',
          'Project-based: OfficeTemplate_AfterProjectX',
        ],
        answer: 'Year.revision: OfficeTemplate_v2025.1, OfficeTemplate_v2025.2',
      },
      {
        type: 'mcq',
        question: 'The default template path configured in File → Options → File Locations ensures:',
        options: [
          'The template is automatically applied to all existing projects',
          'Every team member sees the office template when creating a new project via File → New → Project',
          'The template file is automatically backed up to the cloud',
          'Template changes apply to all projects that used that template',
        ],
        answer: 'Every team member sees the office template when creating a new project via File → New → Project',
      },
      {
        type: 'fillblank',
        question: 'The file format for a Revit office template is ___.',
        answer: '.rte',
      },
      {
        type: 'mcq',
        question: 'A junior architect discovers a better way to configure section mark families that would benefit all future projects. What is the correct process?',
        options: [
          'Update the template directly without informing the BIM Manager',
          'Apply the improvement to their current project only and move on',
          'Document the improvement and report to the BIM Manager for evaluation and potential inclusion in the next template version',
          'Share the improvement with colleagues via email so they can each update their own templates',
        ],
        answer: 'Document the improvement and report to the BIM Manager for evaluation and potential inclusion in the next template version',
      },
      {
        type: 'truefalse',
        question: 'Old template versions should be deleted from the archive when new versions are released to keep the template folder clean.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The template feedback loop described in the lesson captures improvements from live projects. When should this review happen?',
        options: [
          'Only when the template is officially updated (annually)',
          'At the end of every project — a close-out template review identifies improvements to incorporate in the next version',
          'At the start of every project — before modeling begins',
          'Only when a team member specifically requests a template change',
        ],
        answer: 'At the end of every project — a close-out template review identifies improvements to incorporate in the next version',
      },
      {
        type: 'mcq',
        question: 'A template should contain placeholder levels with standard names. Which set is appropriate for a generic commercial template?',
        options: [
          'L00 Ground Floor DPC2024, L01 First Floor DPC2024 — including the project code',
          'Level 1, Level 2, Level 3, Roof — generic names at standard commercial floor heights',
          'No levels — each project team creates levels from scratch',
          'Basement, Ground, First, Second, Third, Roof — descriptive names always',
        ],
        answer: 'Level 1, Level 2, Level 3, Roof — generic names at standard commercial floor heights',
      },
      {
        type: 'truefalse',
        question: 'Worksets should be pre-created in the office template so every project starts with the same workset structure.',
        answer: false,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-24: Project Setup Checklist & Handoff
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-24',
    title: 'Project Setup Checklist & Handoff',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A team member who did not attend the handoff briefing starts modeling and places walls on the wrong workset. Why does this happen and how is it prevented?',
        options: [
          'Revit should automatically prevent wrong workset placement — this is a software bug',
          'The team member lacked the verbal briefing that explained workset rules — making attendance at the briefing mandatory prevents this',
          'Wrong workset placement is unavoidable — fix it during the monthly health check',
          'The BIM Manager should lock worksets so other team members cannot place elements on the wrong ones',
        ],
        answer: 'The team member lacked the verbal briefing that explained workset rules — making attendance at the briefing mandatory prevents this',
      },
      {
        type: 'truefalse',
        question: 'During the handoff briefing, team members should be guided through creating their local copies together so any access issues are caught immediately.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'What is the purpose of a 48-hour post-handoff check?',
        options: [
          'To verify that no modeling has been done yet — the first 48 hours should be planning only',
          'To catch early errors (wrong worksets, bad view names, unexpected warnings) before they become team habits',
          'To run a Purge Unused and ensure the file has not grown too quickly',
          'To confirm that all linked files have been reloaded after the handoff',
        ],
        answer: 'To catch early errors (wrong worksets, bad view names, unexpected warnings) before they become team habits',
      },
      {
        type: 'mcq',
        question: 'The Parameter Glossary in the handoff documentation package contains:',
        options: [
          'A list of all Revit built-in parameters with their definitions',
          'The shared parameter file contents — parameter name, meaning, which elements it applies to, who populates it, and where it appears',
          'A comparison of Project Parameters vs. Shared Parameters',
          'The IFC Pset mapping for all exported parameters',
        ],
        answer: 'The shared parameter file contents — parameter name, meaning, which elements it applies to, who populates it, and where it appears',
      },
      {
        type: 'fillblank',
        question: 'For a solo or small project (1-2 people, simple building), the recommended project setup time is ___ hours.',
        answer: '2-4',
      },
      {
        type: 'mcq',
        question: 'A renovation project\'s setup differs from a new-build setup primarily in which area?',
        options: [
          'Renovation projects do not need shared parameters or schedules',
          'The phase sequence configuration is more complex — multiple demolition and construction stages, and existing elements must be modeled or imported at Phase = Existing',
          'Renovation projects require a completely different Revit template',
          'Renovation projects do not need worksharing — only one person models at a time',
        ],
        answer: 'The phase sequence configuration is more complex — multiple demolition and construction stages, and existing elements must be modeled or imported at Phase = Existing',
      },
      {
        type: 'truefalse',
        question: 'The handoff documentation (BEP, Model Setup Summary, Parameter Glossary) should be stored in the CDE where all team members can access it — not only emailed to the team at the briefing.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'During the handoff briefing Part 5 (Data Responsibilities), which of these is the most important message to communicate?',
        options: [
          'How to change the Visual Style of a 3D view',
          'Which parameters each team member is responsible for populating, and that COBie/IFC data must be captured throughout the project — not left until the end',
          'How to create a new Revit family from scratch',
          'How to export drawings to PDF',
        ],
        answer: 'Which parameters each team member is responsible for populating, and that COBie/IFC data must be captured throughout the project — not left until the end',
      },
      {
        type: 'mcq',
        question: 'A large project (10+ people, complex building) requires extended setup of 2-3 days. Which additional setup items distinguish it from a standard medium project?',
        options: [
          'Larger buildings need more wall types but the same setup process',
          'Multi-zone scope boxes, 10-12 worksets, federated model setup, full COBie implementation, multiple IFC export presets, and detailed FM integration parameter schema',
          'Large projects skip shared parameters to save setup time',
          'Large projects use a different Revit template for each discipline',
        ],
        answer: 'Multi-zone scope boxes, 10-12 worksets, federated model setup, full COBie implementation, multiple IFC export presets, and detailed FM integration parameter schema',
      },
      {
        type: 'truefalse',
        question: 'The BIM Manager should continue modeling alongside the team after the handoff to ensure the setup is being followed correctly.',
        answer: false,
      },
    ],
  },
];
