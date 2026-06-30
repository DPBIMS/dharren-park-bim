export const navisworksQuizzes = [
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
];

export default navisworksQuizzes;
