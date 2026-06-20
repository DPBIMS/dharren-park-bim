// ============================================================
// QUIZ DATA — one quiz per lesson
// Question types: 'mcq' (multiple choice), 'truefalse', 'fillblank'
// passingScore = minimum % required to pass and unlock next lesson
// ============================================================

const quizzes = {
  1: {
    lessonId: 1,
    title: 'BIM Fundamentals Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What does BIM stand for?',
        options: ['Building Information Modeling', 'Basic Infrastructure Management', 'Building Inspection Method', 'Built Information Mapping'],
        correct: 0,
      },
      {
        id: 'q2', type: 'truefalse',
        question: 'BIM is the same as 3D CAD drawing.',
        correct: false,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'Which of these is a key BIM dimension representing cost?',
        options: ['3D', '4D', '5D', '6D'],
        correct: 2,
      },
      {
        id: 'q4', type: 'fillblank',
        question: 'BIM contains rich _______ about every component such as materials and quantities.',
        correct: 'data',
      },
      {
        id: 'q5', type: 'truefalse',
        question: 'Many governments including the UK and Singapore mandate BIM for public projects.',
        correct: true,
      },
    ],
  },
  2: {
    lessonId: 2,
    title: 'BIM vs CAD Assessment',
    passingScore: 70,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What is the core output of traditional CAD?',
        options: ['Intelligent 3D models', '2D drawings', 'Cost estimates', 'Construction schedules'],
        correct: 1,
      },
      {
        id: 'q2', type: 'truefalse',
        question: 'In BIM, changing one element updates all related views and schedules automatically.',
        correct: true,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'Which capability does BIM enable that CAD cannot?',
        options: ['Printing drawings', 'Clash detection', 'Adding text labels', 'Drawing lines'],
        correct: 1,
      },
      {
        id: 'q4', type: 'fillblank',
        question: 'In BIM, a wall is not just lines — it is an intelligent _______ that knows its material and properties.',
        correct: 'object',
      },
    ],
  },
  3: {
    lessonId: 3,
    title: 'Revit Essentials Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'Which panel in Revit shows all views, sheets, and families in your project?',
        options: ['Properties Panel', 'Ribbon', 'Project Browser', 'View Window'],
        correct: 2,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'What is the correct Revit hierarchy?',
        options: ['Type → Family → Instance', 'Family → Type → Instance', 'Instance → Family → Type', 'Family → Instance → Type'],
        correct: 1,
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'In Revit, all views are generated automatically from one 3D model.',
        correct: true,
      },
      {
        id: 'q4', type: 'fillblank',
        question: 'Revit is a _______ modeler, meaning elements are driven by values rather than fixed geometry.',
        correct: 'parametric',
      },
    ],
  },
  4: {
    lessonId: 4,
    title: 'LOD Standards Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What does LOD stand for?',
        options: ['Level of Detail', 'Level of Development', 'List of Drawings', 'Lifecycle of Design'],
        correct: 1,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Which LOD level is most commonly required for construction documents?',
        options: ['LOD 100', 'LOD 200', 'LOD 300', 'LOD 500'],
        correct: 2,
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'LOD 500 represents the as-built, field-verified condition of a building.',
        correct: true,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'Which LOD level shows interfaces between different building systems for coordination?',
        options: ['LOD 100', 'LOD 200', 'LOD 350', 'LOD 500'],
        correct: 2,
      },
      {
        id: 'q5', type: 'fillblank',
        question: 'LOD requirements for each element and phase are documented in the BIM _______ Plan.',
        correct: 'execution',
      },
    ],
  },
  5: {
    lessonId: 5,
    title: 'BEP Fundamentals Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What does BEP stand for?',
        options: ['Building Execution Process', 'BIM Execution Plan', 'Basic Engineering Plan', 'BIM Estimation Plan'],
        correct: 1,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Which table assigns model elements to responsible disciplines with LOD requirements?',
        options: ['MEA Table', 'BOQ Table', 'RFI Table', 'CDE Table'],
        correct: 0,
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'A Pre-Contract BEP is prepared by the appointed team after winning the project.',
        correct: false,
      },
      {
        id: 'q4', type: 'fillblank',
        question: 'The agreed digital location where all project information is stored is called the Common Data _______.',
        correct: 'environment',
      },
    ],
  },
  6: {
    lessonId: 6,
    title: 'Revit Families Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'Which family type cannot be saved as an external .rfa file?',
        options: ['Loadable Family', 'System Family', 'In-Place Family', 'Nested Family'],
        correct: 1,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Doors, windows, and furniture are examples of which family type?',
        options: ['System Family', 'Loadable Family', 'In-Place Family', 'None of these'],
        correct: 1,
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'In-Place families should be used frequently for repeating elements.',
        correct: false,
      },
      {
        id: 'q4', type: 'fillblank',
        question: 'The Family _______ is the environment used to create and modify Loadable Families.',
        correct: 'editor',
      },
    ],
  },
  7: {
    lessonId: 7,
    title: 'Clash Detection Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'When two elements physically occupy the same space, this is called a:',
        options: ['Soft clash', 'Hard clash', 'Workflow clash', 'Visual clash'],
        correct: 1,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Which clash type checks minimum clearance for maintenance access?',
        options: ['Hard clash', 'Soft clash', '4D clash', 'Geometry clash'],
        correct: 1,
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'The professional standard is zero unresolved hard clashes before construction starts.',
        correct: true,
      },
      {
        id: 'q4', type: 'fillblank',
        question: 'The Navisworks panel used to configure and run clash tests is called Clash _______.',
        correct: 'detective',
      },
    ],
  },
  8: {
    lessonId: 8,
    title: 'MEP Coordination Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What does MEP stand for?',
        options: ['Mechanical, Electrical, Plumbing', 'Model Element Plan', 'Multiple Engineering Process', 'Main Equipment Pipeline'],
        correct: 0,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Which system typically has the highest routing priority due to gravity requirements?',
        options: ['Electrical cable trays', 'Drainage pipes', 'Small conduits', 'Lighting fixtures'],
        correct: 1,
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'The ceiling plenum is the space between the structural soffit and the finished ceiling.',
        correct: true,
      },
      {
        id: 'q4', type: 'fillblank',
        question: 'Approximately 30-40% of construction _______ is caused by poor MEP coordination.',
        correct: 'rework',
      },
    ],
  },
  9: {
    lessonId: 9,
    title: 'IFC Standards Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What does IFC stand for?',
        options: ['Industry Foundation Classes', 'International File Coordination', 'Integrated Format Code', 'Internal File Connection'],
        correct: 0,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Which organization developed the IFC standard?',
        options: ['Autodesk', 'buildingSMART International', 'ISO directly', 'Microsoft'],
        correct: 1,
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'IFC is a proprietary format owned by Autodesk.',
        correct: false,
      },
      {
        id: 'q4', type: 'fillblank',
        question: 'A wall in the IFC schema is represented by the class Ifc_______.',
        correct: 'wall',
      },
    ],
  },
  10: {
    lessonId: 10,
    title: 'BIM 360 Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'BIM 360 was rebranded by Autodesk as:',
        options: ['Revit Cloud', 'Autodesk Construction Cloud', 'BIM Manager Pro', 'Navisworks Online'],
        correct: 1,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Which BIM 360 module enables cloud-based clash detection without Navisworks?',
        options: ['Docs', 'Build', 'Model Coordination', 'Insight'],
        correct: 2,
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'BIM 360 Design Collaboration allows multiple Revit users to work on the same model simultaneously.',
        correct: true,
      },
      {
        id: 'q4', type: 'fillblank',
        question: 'BIM 360 serves as the Common Data _______ for managing all project information.',
        correct: 'environment',
      },
    ],
  },
  11: {
    lessonId: 11,
    title: '4D BIM Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: '4D BIM adds which dimension to a 3D model?',
        options: ['Cost', 'Time', 'Sustainability', 'Facilities Management'],
        correct: 1,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Which Navisworks module is most widely used for 4D BIM?',
        options: ['Clash Detective', 'TimeLiner', 'Quantification', 'Animator'],
        correct: 1,
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'The "Temporary" task type is used to visualize permanent construction elements.',
        correct: false,
      },
      {
        id: 'q4', type: 'fillblank',
        question: '4D BIM is valuable for planning site _______, including crane positioning and material delivery zones.',
        correct: 'logistics',
      },
    ],
  },
  12: {
    lessonId: 12,
    title: 'PH BIM Standards Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'q1', type: 'truefalse',
        question: 'The Philippines currently has a fully enforced national BIM mandate for all projects.',
        correct: false,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Which international standard is commonly referenced by foreign firms operating in the Philippines?',
        options: ['ISO 9001', 'BS EN ISO 19650', 'ISO 14001', 'ISO 45001'],
        correct: 1,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'Which project type is most likely to strongly expect BIM in the current Philippine market?',
        options: ['Small commercial shop', 'Single-family home', 'High-rise residential tower', 'Backyard renovation'],
        correct: 2,
      },
      {
        id: 'q4', type: 'fillblank',
        question: 'Filipino BIM professionals are in high demand in countries like Singapore, UAE, and _______.',
        correct: 'australia',
      },
    ],
  },
};

export default quizzes;