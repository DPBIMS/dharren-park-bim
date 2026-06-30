// ============================================================
// NAVISWORKS GETTING STARTED — QUIZZES nav-1 through nav-8 (BEGINNER)
// File: lib/navisworksQuizzesContent/navisworksQuizzes_1_8.js
// Index: lib/navisworksQuizzesData.js
// ============================================================

export const quizzes_1_8 = [

  {
    lessonId: 'nav-1',
    title: 'What is Navisworks Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What is the primary purpose of Navisworks?',
        options: ['Authoring 3D building elements', 'Reviewing and coordinating combined models', 'Structural analysis calculations', 'Rendering photorealistic images only'],
        answer: 'Reviewing and coordinating combined models',
      },
      {
        id: 'q2', type: 'mcq',
        question: 'In what year did Autodesk acquire Navisworks?',
        options: ['1999', '2002', '2007', '2013'],
        answer: '2007',
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'Navisworks lets you create and place new walls, beams, and pipes directly in the model.',
        answer: false,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'Which Navisworks product is the free viewer used by clients and site teams?',
        options: ['Navisworks Manage', 'Navisworks Simulate', 'Navisworks Freedom', 'Navisworks Review'],
        answer: 'Navisworks Freedom',
      },
      {
        id: 'q5', type: 'truefalse',
        question: 'Navisworks Simulate includes Clash Detective.',
        answer: false,
      },
      {
        id: 'q6', type: 'mcq',
        question: 'A model that combines discipline models from architecture, structure, and MEP into one review environment is called a:',
        options: ['Linked model', 'Federated model', 'Master family', 'Shared workset'],
        answer: 'Federated model',
      },
      {
        id: 'q7', type: 'fillblank',
        question: 'Navisworks Manage ships as part of the Autodesk _______ Collection alongside Revit and Civil 3D.',
        answer: 'aec',
      },
      {
        id: 'q8', type: 'mcq',
        question: 'Which international standard commonly defines the federated model coordination workflow that Navisworks supports?',
        options: ['ISO 9001', 'ISO 19650', 'ISO 14001', 'ISO 45001'],
        answer: 'ISO 19650',
      },
      {
        id: 'q9', type: 'truefalse',
        question: 'Navisworks is format-agnostic, meaning it can read models exported from many different authoring tools.',
        answer: true,
      },
      {
        id: 'q10', type: 'mcq',
        question: 'Which of the following best describes who uses Navisworks on a project?',
        options: [
          'Only structural engineers',
          'Only BIM coordinators, never contractors or clients',
          'BIM coordinators, designers, contractors, and clients across the project',
          'Only software developers maintaining the BIM pipeline',
        ],
        answer: 'BIM coordinators, designers, contractors, and clients across the project',
      },
    ],
  },

  {
    lessonId: 'nav-2',
    title: 'Navisworks Interface Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'Which panel lists every appended model broken down hierarchically to individual elements?',
        options: ['Properties Panel', 'Selection Tree', 'Viewpoints Panel', 'Navigation Bar'],
        answer: 'Selection Tree',
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Which Ribbon tab contains Append, Merge, and Refresh for bringing models into Navisworks?',
        options: ['View', 'Output', 'Home', 'Review'],
        answer: 'Home',
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'A Search Set updates automatically based on property rules, while a Selection Set is a fixed, manually picked group.',
        answer: true,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'In the Selection Tree, what does "Require" do to an item?',
        options: ['Deletes the item permanently', 'Hides everything except that item', 'Locks the item from being selected', 'Marks the item as clashed'],
        answer: 'Hides everything except that item',
      },
      {
        id: 'q5', type: 'fillblank',
        question: 'A saved camera position, visibility state, and section plane configuration in Navisworks is called a _______.',
        answer: 'viewpoint',
      },
      {
        id: 'q6', type: 'mcq',
        question: 'Which navigation tool provides first-person movement with gravity and collision against floors and walls?',
        options: ['Orbit', 'Pan', 'Walk', 'Zoom'],
        answer: 'Walk',
      },
      {
        id: 'q7', type: 'truefalse',
        question: 'Properties shown in Navisworks can be directly edited and will update the original source model.',
        answer: false,
      },
      {
        id: 'q8', type: 'mcq',
        question: 'Which tab contains markup, redlining, comments, and measurement tools?',
        options: ['Animation', 'Review', 'Render', 'Output'],
        answer: 'Review',
      },
      {
        id: 'q9', type: 'mcq',
        question: 'What is the main advantage of a Search Set over a Selection Set in a recurring coordination workflow?',
        options: [
          'Search Sets render faster',
          'Search Sets update automatically when the model is refreshed',
          'Search Sets can only be used once',
          'Search Sets do not require any selection criteria',
        ],
        answer: 'Search Sets update automatically when the model is refreshed',
      },
      {
        id: 'q10', type: 'fillblank',
        question: 'The panel used to save and organize camera positions for review and animation is the _______ Panel.',
        answer: 'viewpoints',
      },
    ],
  },

  {
    lessonId: 'nav-3',
    title: 'Opening & Appending Models Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'Which Navisworks file format stores live links to source files rather than baked-in geometry?',
        options: ['NWC', 'NWD', 'NWF', 'NWX'],
        answer: 'NWF',
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Where are NWC files typically created?',
        options: ['Manually inside Navisworks', 'By an export plug-in inside the authoring software', 'By converting an NWD file', 'By the Navisworks Freedom viewer'],
        answer: 'By an export plug-in inside the authoring software',
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'An NWD file is a compressed, standalone snapshot with no live links back to the source files.',
        answer: true,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'Which command pulls in the latest saved version of already-appended files?',
        options: ['Append', 'Merge', 'Refresh', 'Publish'],
        answer: 'Refresh',
      },
      {
        id: 'q5', type: 'fillblank',
        question: 'The free viewer that anyone can use to open a published NWD file is called Navisworks _______.',
        answer: 'freedom',
      },
      {
        id: 'q6', type: 'truefalse',
        question: 'Misaligned models after appending are almost always caused by inconsistent shared coordinates in the source files.',
        answer: true,
      },
      {
        id: 'q7', type: 'mcq',
        question: 'What is the recommended working file for daily, active coordination?',
        options: ['NWD', 'NWC', 'NWF', 'A published PDF'],
        answer: 'NWF',
      },
      {
        id: 'q8', type: 'mcq',
        question: 'Which command combines a model into the existing Selection Tree structure rather than adding it as a new top-level item?',
        options: ['Append', 'Merge', 'Reload', 'Export'],
        answer: 'Merge',
      },
      {
        id: 'q9', type: 'truefalse',
        question: 'You should re-create the federated model from scratch at the start of every coordination cycle instead of using Refresh.',
        answer: false,
      },
      {
        id: 'q10', type: 'mcq',
        question: 'What is the standard professional habit at the start of a weekly coordination session?',
        options: [
          'Delete the old federated model and start a new one',
          'Open the NWF, reload all links, and re-run clash tests',
          'Only check the architecture model, since it changes most often',
          'Skip clash testing if last week had zero clashes',
        ],
        answer: 'Open the NWF, reload all links, and re-run clash tests',
      },
    ],
  },

  {
    lessonId: 'nav-4',
    title: 'Clash Detective Fundamentals Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'Clash Detective compares geometry between which two groups?',
        options: ['Selection A and Selection B', 'NWC and NWD', 'Viewpoint A and Viewpoint B', 'Search Set 1 and Search Set 2 only'],
        answer: 'Selection A and Selection B',
      },
      {
        id: 'q2', type: 'truefalse',
        question: 'Clash Detective understands design intent, so it never flags intentional connections like a column meeting a footing.',
        answer: false,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'Which clash test type is used to check that nothing comes within a set distance of an item, even without touching it?',
        options: ['Hard', 'Hard Conservative', 'Clearance', 'Duplicates'],
        answer: 'Clearance',
      },
      {
        id: 'q4', type: 'mcq',
        question: 'Which clash test type catches identical geometry that has accidentally been modeled more than once?',
        options: ['Hard', 'Clearance', 'Duplicates', 'Hard Conservative'],
        answer: 'Duplicates',
      },
      {
        id: 'q5', type: 'fillblank',
        question: 'A tolerance of _______ on a Hard test reports any physical overlap, no matter how small.',
        answer: '0',
      },
      {
        id: 'q6', type: 'truefalse',
        question: 'Running one clash test of the entire model against itself is the recommended way to start clash testing.',
        answer: false,
      },
      {
        id: 'q7', type: 'mcq',
        question: 'In the results grid, which column tells you the nearest grid intersection to locate a clash on site?',
        options: ['Status', 'Distance', 'Grid Location', 'Level'],
        answer: 'Grid Location',
      },
      {
        id: 'q8', type: 'mcq',
        question: 'What format is commonly used to round-trip clash issues directly into Revit or other BCF-compatible tools?',
        options: ['XML only', 'BCF', 'HTML only', 'CSV'],
        answer: 'BCF',
      },
      {
        id: 'q9', type: 'truefalse',
        question: 'Saving the NWF file preserves all Clash Detective tests, results, and status alongside the model.',
        answer: true,
      },
      {
        id: 'q10', type: 'mcq',
        question: 'What is the recommended first test type for a beginner setting up their first clash test?',
        options: ['Duplicates', 'Hard', 'Clearance', 'Hard Conservative'],
        answer: 'Hard',
      },
    ],
  },

  {
    lessonId: 'nav-5',
    title: 'Managing Clash Results Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'Why is grouping clash results important?',
        options: [
          'It deletes irrelevant clashes permanently',
          'It combines related clashes into a single trackable item instead of dozens of separate rows',
          'It changes the clash tolerance automatically',
          'It is required before Navisworks will run any test',
        ],
        answer: 'It combines related clashes into a single trackable item instead of dozens of separate rows',
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Which grouping method is most useful for level-by-level coordination meetings?',
        options: ['Group by Item', 'Group by Level', 'Group by Grid', 'Manual Selection only'],
        answer: 'Group by Level',
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'The clash status workflow runs New → Active → Reviewed → Approved/Resolved.',
        answer: true,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'What happens if a model changes enough that Navisworks can no longer match an old clash to a new one?',
        options: [
          'The clash is permanently deleted',
          'The clash automatically becomes Approved',
          'The clash reappears as a brand new "New" result',
          'Navisworks pauses all testing until manually resolved',
        ],
        answer: 'The clash reappears as a brand new "New" result',
      },
      {
        id: 'q5', type: 'truefalse',
        question: 'A clash with no comment and no assigned owner will typically sit unresolved indefinitely.',
        answer: true,
      },
      {
        id: 'q6', type: 'mcq',
        question: 'What is the recommended action when new NWC files arrive for a coordination cycle?',
        options: [
          'Delete the existing clash test and create a brand new one',
          'Refresh the existing clash test',
          'Ignore the new files until the next major milestone',
          'Manually re-type every clash result',
        ],
        answer: 'Refresh the existing clash test',
      },
      {
        id: 'q7', type: 'fillblank',
        question: 'Exporting clash issues in _______ format lets them be opened directly inside Revit or other compatible tools.',
        answer: 'bcf',
      },
      {
        id: 'q8', type: 'mcq',
        question: 'Which report format is ideal for circulating clash findings to people without Navisworks installed?',
        options: ['NWF', 'NWC', 'HTML Report', 'RFA'],
        answer: 'HTML Report',
      },
      {
        id: 'q9', type: 'truefalse',
        question: 'Refreshing a clash test discards all previous comments and assigned owners.',
        answer: false,
      },
      {
        id: 'q10', type: 'mcq',
        question: 'What is the best practice for tracking coordination progress over time?',
        options: [
          'Never export reports, only review live in Navisworks',
          'Export a dated report after every coordination meeting and archive it',
          'Delete old reports once a new one is created',
          'Only report at the very end of the project',
        ],
        answer: 'Export a dated report after every coordination meeting and archive it',
      },
    ],
  },

  {
    lessonId: 'nav-6',
    title: 'TimeLiner & 4D Scheduling Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What does "4D BIM" refer to?',
        options: [
          'A 3D model rendered in four different colors',
          'A 3D model with time added through schedule simulation',
          'Four separate discipline models combined',
          'A model with four levels of detail',
        ],
        answer: 'A 3D model with time added through schedule simulation',
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Which of the following is NOT a standard TimeLiner schedule data source?',
        options: ['Microsoft Project (.mpp)', 'Primavera P6', 'CSV / Excel', 'Adobe Photoshop'],
        answer: 'Adobe Photoshop',
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'Search Sets make task-to-model links more resilient when the model is refreshed.',
        answer: true,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'Where do you link a schedule task to model geometry in TimeLiner?',
        options: ['The Status column', 'The Attached column', 'The Tolerance field', 'The Viewpoints panel'],
        answer: 'The Attached column',
      },
      {
        id: 'q5', type: 'fillblank',
        question: 'Comparing a Planned simulation against an _______ simulation visualizes schedule slippage directly in the model.',
        answer: 'actual',
      },
      {
        id: 'q6', type: 'truefalse',
        question: 'Attaching the entire building to a single task called "Construction" produces a useful, detailed simulation.',
        answer: false,
      },
      {
        id: 'q7', type: 'mcq',
        question: 'Which TimeLiner tab is used to play back the construction sequence as an animation?',
        options: ['Data Sources', 'Simulate', 'Configure', 'Rules'],
        answer: 'Simulate',
      },
      {
        id: 'q8', type: 'mcq',
        question: 'What is a common real-world use of TimeLiner on a construction site team?',
        options: [
          'Replacing the entire project schedule',
          'Short-range look-ahead planning for the next two to four weeks',
          'Performing structural analysis calculations',
          'Generating cost estimates automatically',
        ],
        answer: 'Short-range look-ahead planning for the next two to four weeks',
      },
      {
        id: 'q9', type: 'truefalse',
        question: 'Best practice is to keep task-to-element granularity matched to how the schedule is actually managed, such as by zone or trade package.',
        answer: true,
      },
      {
        id: 'q10', type: 'mcq',
        question: 'What can happen if task-to-model links are not refreshed after a significant model update?',
        options: [
          'Nothing, links never break',
          'Previously attached items can become orphaned and drop out of the simulation',
          'The schedule dates change automatically',
          'Navisworks deletes the schedule entirely',
        ],
        answer: 'Previously attached items can become orphaned and drop out of the simulation',
      },
    ],
  },

  {
    lessonId: 'nav-7',
    title: 'Markup & Coordination Meetings Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'Where are the redline markup tools found in Navisworks?',
        options: ['Home tab → Append panel', 'Review tab → Markup panel', 'Output tab → Export panel', 'TimeLiner panel'],
        answer: 'Review tab → Markup panel',
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Which markup tool uses the same convention as circling an area on a 2D drawing?',
        options: ['Line', 'Cloud', 'Dimension', 'Arrow'],
        answer: 'Cloud',
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'A redline markup automatically disappears once the meeting ends and cannot be saved.',
        answer: false,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'What does saving a Viewpoint alongside a markup preserve?',
        options: [
          'Only the camera position',
          'Only the markup text',
          'The camera position, visibility state, and markup together',
          'Nothing — markups are not linked to viewpoints',
        ],
        answer: 'The camera position, visibility state, and markup together',
      },
      {
        id: 'q5', type: 'truefalse',
        question: 'Tags attach short notes directly to a specific model element.',
        answer: true,
      },
      {
        id: 'q6', type: 'mcq',
        question: 'What is the standard first step in running a coordination meeting?',
        options: [
          'Immediately start drawing markups before reviewing anything',
          'Open the current federated NWF and reload all links',
          'Delete all previous viewpoints to start fresh',
          'Skip straight to exporting a report',
        ],
        answer: 'Open the current federated NWF and reload all links',
      },
      {
        id: 'q7', type: 'mcq',
        question: 'How can markups be shared with someone who does not have access to the working NWF?',
        options: [
          'They cannot be shared under any circumstances',
          'Publish an NWD snapshot, viewable in the free Navisworks Freedom viewer',
          'Email the raw NWC cache file',
          'Markups are automatically public on the internet',
        ],
        answer: 'Publish an NWD snapshot, viewable in the free Navisworks Freedom viewer',
      },
      {
        id: 'q8', type: 'fillblank',
        question: 'A short text note attached directly to one specific model element is called a _______.',
        answer: 'tag',
      },
      {
        id: 'q9', type: 'truefalse',
        question: 'Coordination meeting markups should be treated as a permanent record and archived after every meeting.',
        answer: true,
      },
      {
        id: 'q10', type: 'mcq',
        question: 'Which tool would you use to measure and label a distance directly in the 3D view?',
        options: ['Cloud', 'Text', 'Dimension', 'Arrow'],
        answer: 'Dimension',
      },
    ],
  },

  {
    lessonId: 'nav-8',
    title: 'Quantification Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What does the Navisworks Quantification tool primarily extract from the model?',
        options: [
          'Clash test results',
          'Counts, lengths, areas, and volumes',
          'Construction schedule dates',
          'Markup comments',
        ],
        answer: 'Counts, lengths, areas, and volumes',
      },
      {
        id: 'q2', type: 'mcq',
        question: 'A Quantification Workbook is built from which two components?',
        options: ['Selection Sets and Search Sets', 'Catalogs and Resources', 'Viewpoints and Tags', 'NWC and NWD files'],
        answer: 'Catalogs and Resources',
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'Navisworks Quantification fully replaces dedicated estimating software, including pricing databases and labor rates.',
        answer: false,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'Which takeoff method is used for items not yet modeled in 3D, measured directly on drawings within Navisworks?',
        options: ['Model-Based Takeoff', 'Virtual / 2D Takeoff', 'Clash-Based Takeoff', 'TimeLiner Takeoff'],
        answer: 'Virtual / 2D Takeoff',
      },
      {
        id: 'q5', type: 'truefalse',
        question: 'Model-Based Takeoff pulls quantities directly from existing 3D model geometry.',
        answer: true,
      },
      {
        id: 'q6', type: 'fillblank',
        question: 'Each Catalog Item is mapped to specific model _______ so Navisworks knows which elements belong in which line item.',
        answer: 'properties',
      },
      {
        id: 'q7', type: 'mcq',
        question: 'What is the most common destination for exporting a finished Quantification workbook?',
        options: ['A video file', 'Excel', 'An NWC cache', 'A clash report'],
        answer: 'Excel',
      },
      {
        id: 'q8', type: 'truefalse',
        question: 'Quantification works on the same federated model used for Clash Detective and TimeLiner.',
        answer: true,
      },
      {
        id: 'q9', type: 'mcq',
        question: 'Most real projects use which approach to takeoff?',
        options: [
          'Model-Based Takeoff only',
          'Virtual / 2D Takeoff only',
          'A mix of Model-Based and Virtual / 2D Takeoff',
          'Neither — quantities are always typed in manually',
        ],
        answer: 'A mix of Model-Based and Virtual / 2D Takeoff',
      },
      {
        id: 'q10', type: 'mcq',
        question: 'What does Navisworks Quantification tell you, according to the honest assessment in the lesson?',
        options: [
          'How much it costs to build',
          'How much (quantity), not how much it costs to build',
          'Exact labor hours required',
          'Final contract price',
        ],
        answer: 'How much (quantity), not how much it costs to build',
      },
    ],
  },

];
