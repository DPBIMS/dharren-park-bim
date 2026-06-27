// ============================================================
// REVIT QUIZZES DATA — rv-17 through rv-24 (ADVANCED)
// Merge these entries into your lib/revitQuizzesData.js array
// ============================================================

export const revitQuizzes_rv17_rv24 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-17: Groups, Assemblies & Design Reuse
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-17',
    title: 'Groups, Assemblies & Design Reuse',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'You edit a Model Group instance in Revit. What happens to all other instances of the same group?',
        options: [
          'Nothing — each instance is independent',
          'All other instances update to reflect the same changes',
          'Revit asks you which instances to update',
          'Only instances on the same level update',
        ],
        answer: 'All other instances update to reflect the same changes',
      },
      {
        type: 'mcq',
        question: 'What does "Make Group Unique" do when applied to a group instance?',
        options: [
          'Deletes the group from all other locations',
          'Creates a new independent group definition for this instance — edits no longer affect other instances',
          'Converts the group to a Revit Assembly',
          'Saves the group as an external .rvt file',
        ],
        answer: 'Creates a new independent group definition for this instance — edits no longer affect other instances',
      },
      {
        type: 'truefalse',
        question: 'An Attached Detail Group automatically places annotation in a view whenever its parent Model Group is placed in that view.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'What is the primary purpose of Revit Assemblies (vs. Model Groups)?',
        options: [
          'To place repetitive architectural units like hotel rooms',
          'To package structural or fabrication elements into schedulable units with their own views and sheets for construction delivery',
          'To link external Revit files into the current project',
          'To organize views in the Project Browser by discipline',
        ],
        answer: 'To package structural or fabrication elements into schedulable units with their own views and sheets for construction delivery',
      },
      {
        type: 'fillblank',
        question: 'To share a Model Group between projects, right-click the group in the Project Browser and select ___ to save it as a standalone .rvt file.',
        answer: 'Save Group',
      },
      {
        type: 'mcq',
        question: 'Which Revit command copies settings like View Templates, Line Styles, and Materials from one project to another?',
        options: [
          'Insert → Link Revit',
          'Manage → Transfer Project Standards',
          'File → Import → Project Standards',
          'Collaborate → Copy Standards',
        ],
        answer: 'Manage → Transfer Project Standards',
      },
      {
        type: 'truefalse',
        question: 'You can nest a Model Group inside another Model Group in Revit.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'You want to exclude one element from a specific group instance (making it invisible in that instance only) without affecting other instances. What do you do?',
        options: [
          'Enter Edit Group mode and delete the element',
          'Right-click the element inside the group instance and select Exclude from Group',
          'Hide the element using Hide in View',
          'Make the group unique, then delete the element',
        ],
        answer: 'Right-click the element inside the group instance and select Exclude from Group',
      },
      {
        type: 'mcq',
        question: 'When pasting elements between two open Revit projects, which paste option places them at the exact same model coordinates as the source project?',
        options: [
          'Paste → In Place',
          'Paste → Aligned to Same Place',
          'Paste → Aligned to Selected Levels',
          'Paste → Aligned to Current View',
        ],
        answer: 'Paste → Aligned to Same Place',
      },
      {
        type: 'truefalse',
        question: 'An Assembly in Revit automatically creates a set of isolated views (plan, elevation, 3D) scoped to show only the assembly elements.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-18: Worksharing & Central Files
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-18',
    title: 'Worksharing & Central Files',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'In a Revit workshared project, where should every team member work?',
        options: [
          'Directly in the Central File on the server',
          'In their own Local Copy of the Central File',
          'In a cloud-synced copy through Dropbox or Google Drive',
          'In the most recent backup file',
        ],
        answer: 'In their own Local Copy of the Central File',
      },
      {
        type: 'truefalse',
        question: 'Worksharing can be disabled after it has been enabled on a Revit project without significant disruption.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'What is the correct action at the end of every worksharing session?',
        options: [
          'Save the local file and email it to the BIM Manager',
          'Synchronize with Central, check "Relinquish all mine after sync," then close',
          'Copy the local file to the Central File server location manually',
          'Delete the local file so it is recreated fresh next session',
        ],
        answer: 'Synchronize with Central, check "Relinquish all mine after sync," then close',
      },
      {
        type: 'mcq',
        question: 'A team member edits an element and it appears grayed out and locked when you try to select it. What is the most likely reason?',
        options: [
          'The element is pinned',
          'Another user currently owns (has borrowed) that element',
          'The element is in a workset that is closed',
          'The element is in a linked file',
        ],
        answer: 'Another user currently owns (has borrowed) that element',
      },
      {
        type: 'fillblank',
        question: 'The Revit tool that shows a live list of all team members in the model, their active worksets, and when they last synced is called ___.',
        answer: 'Worksharing Monitor',
      },
      {
        type: 'mcq',
        question: 'What is the key advantage of cloud worksharing (Autodesk Docs / ACC) over traditional server-based worksharing?',
        options: [
          'Cloud models load faster than server models',
          'Team members can collaborate from any location without needing a VPN or office server',
          'Cloud models support more simultaneous users than server models',
          'Cloud worksharing eliminates the need to Synchronize with Central',
        ],
        answer: 'Team members can collaborate from any location without needing a VPN or office server',
      },
      {
        type: 'truefalse',
        question: 'Making a workset "Editable" grants you exclusive ownership of every element in that workset, preventing other users from editing any element in it.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'Your local copy is showing many errors and will not open correctly. What is the correct recovery action?',
        options: [
          'Send the corrupted local file to Autodesk support',
          'Delete the local copy and create a new local copy from the Central File',
          'Open the Central File directly and work from there temporarily',
          'Roll back to the previous day\'s Central File backup',
        ],
        answer: 'Delete the local copy and create a new local copy from the Central File',
      },
      {
        type: 'mcq',
        question: 'On a large workshared project, a team member only needs to work on the architectural interior of Level 3. How can they reduce the time and memory needed to load the model?',
        options: [
          'Open only the Central File in read-only mode',
          'Open the Local Copy and choose to load only the relevant worksets (close MEP, structural, and other discipline worksets)',
          'Export only Level 3 to a new project file',
          'Use Revit\'s "Linked Model" feature to open just that section',
        ],
        answer: 'Open the Local Copy and choose to load only the relevant worksets (close MEP, structural, and other discipline worksets)',
      },
      {
        type: 'truefalse',
        question: 'In a workshared project, Synchronize with Central pulls other users\' changes into your local copy as well as pushing your changes to the Central File.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-19: Linked Models & Copy/Monitor
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-19',
    title: 'Linked Models & Copy/Monitor',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which link positioning option should be used when all disciplines have set up their models from the same shared project origin point?',
        options: [
          'Auto - Center to Center',
          'Auto - Origin to Origin',
          'Auto - By Shared Coordinates',
          'Manual — place by clicking',
        ],
        answer: 'Auto - Origin to Origin',
      },
      {
        type: 'truefalse',
        question: 'You can directly edit geometry in a linked Revit file from within the host project.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'In VG → Revit Links tab, setting a linked model to "Custom" display (instead of "By Host View") allows you to:',
        options: [
          'Edit the linked model geometry in the host view',
          'Set independent visibility and graphic settings for the linked model, overriding the host view VG settings',
          'Reload the linked model from a different file path',
          'Print the linked model separately from the host model',
        ],
        answer: 'Set independent visibility and graphic settings for the linked model, overriding the host view VG settings',
      },
      {
        type: 'mcq',
        question: 'Copy/Monitor is used to:',
        options: [
          'Create a backup copy of the Central File automatically',
          'Monitor element changes in a linked model and alert the host model when monitored elements change',
          'Copy views from one project to another with their annotations',
          'Track user edits in a workshared model for audit purposes',
        ],
        answer: 'Monitor element changes in a linked model and alert the host model when monitored elements change',
      },
      {
        type: 'fillblank',
        question: 'After reloading a linked file, you check for monitored element changes by going to Collaborate → ___.',
        answer: 'Coordination Review',
      },
      {
        type: 'mcq',
        question: 'Which Revit tool checks for geometric overlaps between your model elements and elements from linked models?',
        options: [
          'Manage → Review Warnings',
          'Collaborate → Interference Check',
          'View → Visibility/Graphics → Coordination',
          'Analyze → Coordination Model',
        ],
        answer: 'Collaborate → Interference Check',
      },
      {
        type: 'truefalse',
        question: 'Revit\'s built-in Interference Check can detect clearance clashes (elements too close but not overlapping) as well as hard clashes.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The structural engineer moves Grid A in their model by 200mm. How does the architectural team learn about this change if Copy/Monitor is set up?',
        options: [
          'The architectural model\'s grid moves automatically without any notification',
          'A Coordination Review alert appears when the structural link is reloaded, asking the architect to Accept or Reject the change',
          'An email notification is sent automatically through Revit',
          'The moved grid appears highlighted in red in all architectural views',
        ],
        answer: 'A Coordination Review alert appears when the structural link is reloaded, asking the architect to Accept or Reject the change',
      },
      {
        type: 'mcq',
        question: 'Halftoning a linked model in VG causes it to:',
        options: [
          'Print at half its normal line weight',
          'Appear at 50% opacity — a ghost of the linked geometry behind the host model elements',
          'Show only every other element in the linked model',
          'Display using the host model\'s material appearance instead of its own',
        ],
        answer: 'Appear at 50% opacity — a ghost of the linked geometry behind the host model elements',
      },
      {
        type: 'truefalse',
        question: 'For professional multi-discipline clash detection with clearance checking and formal reporting, Navisworks is recommended over Revit\'s built-in Interference Check.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-20: Revit Templates & Office Standards
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-20',
    title: 'Revit Templates & Office Standards',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What file extension is used for a Revit project template?',
        options: ['.rvt', '.rfa', '.rte', '.rft'],
        answer: '.rte',
      },
      {
        type: 'truefalse',
        question: 'When you update a View Template in an office template file, all existing projects that use that template automatically update their views.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Which Revit setting maps line weight numbers (1-16) to actual printed pen thicknesses in millimeters?',
        options: [
          'Manage → Object Styles',
          'Manage → Line Styles',
          'Manage → Line Weights',
          'Manage → Fill Patterns',
        ],
        answer: 'Manage → Line Weights',
      },
      {
        type: 'mcq',
        question: 'You want to push updated View Templates and Line Styles from the new office template into an existing project. Which tool do you use?',
        options: [
          'Insert → Link Revit → select the template file',
          'Manage → Transfer Project Standards → select the template as source',
          'File → Import → Template Standards',
          'View → Apply View Template to All Views',
        ],
        answer: 'Manage → Transfer Project Standards → select the template as source',
      },
      {
        type: 'fillblank',
        question: 'Fill Patterns that maintain the same printed size regardless of view scale are called ___ patterns (as opposed to Model patterns).',
        answer: 'Drafting',
      },
      {
        type: 'mcq',
        question: 'Which of these elements does NOT belong in an office Revit template?',
        options: [
          'Office titleblock families',
          'Standard view templates for construction drawings',
          'Project-specific materials for a single client building',
          'Office line styles and fill patterns',
        ],
        answer: 'Project-specific materials for a single client building',
      },
      {
        type: 'truefalse',
        question: 'Revit templates should be owned and maintained by one BIM Manager or BIM Standards team — not modified by individual project teams.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'Which international standard defines information management requirements for BIM projects that a Revit template and BIM Execution Plan should align with?',
        options: ['ISO 9001', 'ISO 19650', 'ISO 14001', 'IFC 4.0'],
        answer: 'ISO 19650',
      },
      {
        type: 'mcq',
        question: 'You open your office template file and run Purge Unused. What is the expected benefit?',
        options: [
          'All view templates are reset to defaults',
          'Unused families, types, and styles are removed, reducing the template file size',
          'All project parameters are deleted',
          'Worksharing is disabled in the template',
        ],
        answer: 'Unused families, types, and styles are removed, reducing the template file size',
      },
      {
        type: 'truefalse',
        question: 'A Revit template file (.rte) can be set as the default template for all new projects by configuring the path in Revit Options → File Locations.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-21: Custom Titleblocks & Annotation Families
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-21',
    title: 'Custom Titleblocks & Annotation Families',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Annotation families in Revit are scale-independent. What does this mean?',
        options: [
          'Annotation families appear at the same size in all views regardless of zoom',
          'Dimensions defined in an annotation family print at that exact size regardless of the view scale',
          'Annotation families cannot be resized after placement',
          'Annotation families use model coordinates, not paper coordinates',
        ],
        answer: 'Dimensions defined in an annotation family print at that exact size regardless of the view scale',
      },
      {
        type: 'mcq',
        question: 'In a titleblock family, which element type displays dynamic project data like Sheet Number and Project Name?',
        options: ['Text (static)', 'Label', 'Filled Region', 'Detail Line'],
        answer: 'Label',
      },
      {
        type: 'truefalse',
        question: 'A titleblock family is started from the Titleblock.rft family template in the Annotations folder.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A revision schedule embedded in a titleblock family automatically shows:',
        options: [
          'All revisions in the entire project',
          'Only revisions associated with sheets that contain the titleblock family type',
          'Only revisions where the architect is listed as the author',
          'Revisions from the current phase only',
        ],
        answer: 'Only revisions associated with sheets that contain the titleblock family type',
      },
      {
        type: 'fillblank',
        question: 'A section mark in Revit consists of two separate annotation families: the Section Head and the Section ___.',
        answer: 'Tail',
      },
      {
        type: 'mcq',
        question: 'In a tag family, a Label element displays:',
        options: [
          'Static text defined when the tag is created',
          'A live parameter value read from the tagged model element',
          'The view name where the tag is placed',
          'The current date and time',
        ],
        answer: 'A live parameter value read from the tagged model element',
      },
      {
        type: 'truefalse',
        question: 'You can embed a company logo image (.png) directly into a titleblock family file so it appears automatically on every sheet using that titleblock.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'After creating a custom section head family, where in Revit do you assign it so all new section marks use the custom head?',
        options: [
          'View tab → Section → Section Properties',
          'Manage → Object Styles → Annotation Objects → Section Line → Head column',
          'Insert → Load Family → set as default',
          'Annotate → Tag → Manage Tags → Section Head',
        ],
        answer: 'Manage → Object Styles → Annotation Objects → Section Line → Head column',
      },
      {
        type: 'mcq',
        question: 'When building a Room Tag that shows both room number (large) and room name (smaller, below), what is the correct approach?',
        options: [
          'Use one Label with both parameters, or two separately-formatted Labels stacked vertically',
          'Use a Text element for the number and a Label for the name',
          'Use one Label and change the font size mid-label',
          'Room tags can only display one parameter at a time',
        ],
        answer: 'Use one Label with both parameters, or two separately-formatted Labels stacked vertically',
      },
      {
        type: 'truefalse',
        question: 'Annotation families use real-world model dimensions (e.g., 3000mm for a 3m wall), not paper dimensions.',
        answer: false,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-22: Parameters — Instance, Type & Shared
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-22',
    title: 'Parameters: Instance, Type & Shared',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which parameter type can be displayed in both a tag (annotation family) AND a schedule?',
        options: [
          'Project Parameter',
          'Built-in Parameter',
          'Shared Parameter',
          'Family Parameter',
        ],
        answer: 'Shared Parameter',
      },
      {
        type: 'truefalse',
        question: 'A Project Parameter added to the Walls category is automatically visible in door tags without any additional configuration.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'What makes a Shared Parameter uniquely identifiable across different families and projects?',
        options: [
          'Its name must be exactly the same in all families',
          'It has a unique GUID stored in the external Shared Parameter file',
          'It uses a special color indicator in the Properties panel',
          'Shared Parameters are stored in the Autodesk cloud and synced automatically',
        ],
        answer: 'It has a unique GUID stored in the external Shared Parameter file',
      },
      {
        type: 'mcq',
        question: 'In the Revit Family Editor, associating a parameter to a dimension means:',
        options: [
          'The dimension text shows the parameter name instead of the value',
          'The geometric dimension is driven by the parameter value — changing the parameter resizes the geometry',
          'The dimension is locked and cannot be moved',
          'The parameter appears in the project schedule automatically',
        ],
        answer: 'The geometric dimension is driven by the parameter value — changing the parameter resizes the geometry',
      },
      {
        type: 'fillblank',
        question: 'The external file that stores all Shared Parameter definitions (GUIDs, names, data types) is a ___ file format.',
        answer: '.txt',
      },
      {
        type: 'mcq',
        question: 'A door family has a "Frame Width" parameter with the formula: Width * 0.1. If the door Width is 900mm, what is the Frame Width?',
        options: ['9mm', '90mm', '900mm', '0.1mm'],
        answer: '90mm',
      },
      {
        type: 'truefalse',
        question: 'COBie Shared Parameters (for FM handover) should be loaded into the office template so all projects are ready for FM data delivery from day one.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'You add a "Fire Rating" parameter to Walls in your project. A contractor asks for the IFC file with fire rating data. What must be true for the Fire Rating data to export correctly in the IFC?',
        options: [
          'The Fire Rating must be a Project Parameter and filled in for all walls',
          'The Fire Rating must be a Shared Parameter with correct IFC mapping configured in the export settings',
          'The Fire Rating must be a Built-in Revit Parameter',
          'Fire Rating data cannot be exported to IFC — it requires a separate COBie export',
        ],
        answer: 'The Fire Rating must be a Shared Parameter with correct IFC mapping configured in the export settings',
      },
      {
        type: 'mcq',
        question: 'Which parameter type is built into Revit and cannot be added, removed, or renamed by the user?',
        options: [
          'Family Parameters',
          'Project Parameters',
          'Shared Parameters',
          'Built-in Parameters',
        ],
        answer: 'Built-in Parameters',
      },
      {
        type: 'truefalse',
        question: 'A Type Parameter in a family has the same value for all instances of that type — changing it updates all placed instances of that type simultaneously.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-23: View Templates, Filters & Overrides — Advanced
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-23',
    title: 'Advanced View Templates, Filters & Overrides',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'You have two filters assigned to a view: Filter A (Structural Walls → heavy line) and Filter B (All Walls → halftone). Filter A is above Filter B in the VG Filters list. What happens to structural walls?',
        options: [
          'Structural walls are halftoned because Filter B applies to all walls',
          'Structural walls get heavy lines because Filter A (higher priority) overrides Filter B',
          'Both filters apply simultaneously — structural walls get heavy AND halftoned lines',
          'Revit shows an error because two filters target the same element',
        ],
        answer: 'Structural walls get heavy lines because Filter A (higher priority) overrides Filter B',
      },
      {
        type: 'truefalse',
        question: 'A Section Box in a 3D view physically cuts the model geometry — affecting how walls appear in floor plan views as well.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A Plan Region in a floor plan view is used to:',
        options: [
          'Crop the plan view to a smaller area',
          'Apply a different View Range to a specific sub-area of the floor plan',
          'Create a separate dependent view of a portion of the plan',
          'Apply a different View Template to part of the plan',
        ],
        answer: 'Apply a different View Range to a specific sub-area of the floor plan',
      },
      {
        type: 'mcq',
        question: 'What is the purpose of assigning a Scope Box to a Level datum element?',
        options: [
          'It locks the level elevation so it cannot be accidentally changed',
          'It controls which views the level datum appears in — only views whose crop region intersects the scope box',
          'It sets the level\'s visibility to match the scope box\'s visibility settings',
          'It copies the level to all views within the scope box automatically',
        ],
        answer: 'It controls which views the level datum appears in — only views whose crop region intersects the scope box',
      },
      {
        type: 'fillblank',
        question: 'To show a cut-away 3D view of one floor of a building, enable the ___ in the 3D view properties and drag its faces to clip the model.',
        answer: 'Section Box',
      },
      {
        type: 'mcq',
        question: 'You apply a View Template that includes the Scale parameter to 80 floor plan views. Later you need to change all of them to 1:200. What is the most efficient approach?',
        options: [
          'Open each view individually and change the scale',
          'Change the Scale in the View Template — all 80 views update simultaneously',
          'Create a new View Template at 1:200 and reassign all 80 views',
          'Select all views in the Project Browser and change scale in Properties',
        ],
        answer: 'Change the Scale in the View Template — all 80 views update simultaneously',
      },
      {
        type: 'truefalse',
        question: 'The "Override Graphics in View → By Element" override is permanent — it cannot be removed once applied.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Which filter rule logic would match walls that are EITHER structural OR have a fire rating — but not necessarily both?',
        options: [
          'Structural = Yes AND Fire Rating is not empty',
          'Structural = Yes OR Fire Rating is not empty',
          'Structural = Yes NOR Fire Rating is not empty',
          'Structural = No AND Fire Rating is not empty',
        ],
        answer: 'Structural = Yes OR Fire Rating is not empty',
      },
      {
        type: 'mcq',
        question: 'A Halftone override applied to an element in a view makes it appear at what opacity?',
        options: ['25%', '50%', '75%', '90%'],
        answer: '50%',
      },
      {
        type: 'truefalse',
        question: 'Detail Lines (Annotate tab) are view-specific 2D elements and do not appear in other views showing the same area of the model.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-24: Performance, File Health & Large Projects
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-24',
    title: 'Performance, File Health & Large Projects',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which of the following has the HIGHEST impact on Revit performance for large project models?',
        options: [
          'GPU VRAM (graphics card memory)',
          'Number of CPU cores',
          'RAM (system memory) and NVMe SSD storage speed',
          'Internet connection speed',
        ],
        answer: 'RAM (system memory) and NVMe SSD storage speed',
      },
      {
        type: 'truefalse',
        question: 'Running Manage → Purge Unused on an active workshared model while other users are in the model is safe and recommended.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'What does "Save with Compact" (File → Save As → Options → Compact File) do?',
        options: [
          'Reduces image resolution in the model to save space',
          'Rebuilds the internal database structure, removing storage fragments from deleted elements',
          'Compresses all families into a single archive',
          'Converts the model to a read-only format for distribution',
        ],
        answer: 'Rebuilds the internal database structure, removing storage fragments from deleted elements',
      },
      {
        type: 'mcq',
        question: 'A Revit model has over 1,000 warnings. What is the most likely impact?',
        options: [
          'The model cannot be opened until warnings are resolved',
          'Revit processes warnings continuously in the background, contributing to performance degradation and hiding serious coordination issues',
          'Warnings only affect the model appearance, not performance',
          'The model cannot be exported to IFC until warnings are cleared',
        ],
        answer: 'Revit processes warnings continuously in the background, contributing to performance degradation and hiding serious coordination issues',
      },
      {
        type: 'fillblank',
        question: 'To review all current model warnings and their type in Revit, go to Manage → Inquiry → ___.',
        answer: 'Review Warnings',
      },
      {
        type: 'mcq',
        question: 'For a large hospital project (150,000m2) with architecture, structure, and MEP disciplines, what is the recommended multi-file strategy?',
        options: [
          'One single .rvt file for all disciplines with worksets for each',
          'Separate .rvt files per discipline, linked together for coordination — possibly also split by building zone',
          'Export all disciplines to IFC and coordinate in a BIM viewer only',
          'Use one Revit file per floor level across all disciplines',
        ],
        answer: 'Separate .rvt files per discipline, linked together for coordination — possibly also split by building zone',
      },
      {
        type: 'truefalse',
        question: 'Opening a Revit file with "Audit" checked repairs internal database errors and should be run regularly on active projects.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A team member reports that Revit navigation is very slow despite a fast CPU. They have 40 views open. What is the most likely cause and fix?',
        options: [
          'The model has too many warnings — run Review Warnings',
          'Too many open views are consuming RAM — close hidden views using View → Windows → Close Hidden Views',
          'The display adapter needs to be updated',
          'The Central File needs to be compacted',
        ],
        answer: 'Too many open views are consuming RAM — close hidden views using View → Windows → Close Hidden Views',
      },
      {
        type: 'mcq',
        question: 'Which of the following is NOT a recommended strategy for managing a very large Revit model?',
        options: [
          'Split the model by discipline into separate files',
          'Load only the worksets needed for the current task',
          'Increase the number of simultaneous open views to access more of the model at once',
          'Purge unused families and compact the file regularly',
        ],
        answer: 'Increase the number of simultaneous open views to access more of the model at once',
      },
      {
        type: 'truefalse',
        question: 'Adding an antivirus exclusion for Revit file paths and the Revit program directory can reduce save times and prevent save failures on large files.',
        answer: true,
      },
    ],
  },
];
