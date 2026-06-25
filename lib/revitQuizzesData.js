const revitQuizzes = {
  'rv-1': {
    lessonId: 'rv-1',
    title: 'What is Revit Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What does the name "Revit" stand for or refer to?',
        options: ['Revolutionary Visual IT', 'Revise Instantly', 'Revit Engineering Tool', 'Real-time Visual Information Technology'],
        correct: 1,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'In what year did Autodesk acquire Revit Technology Corporation?',
        options: ['1997', '1999', '2002', '2006'],
        correct: 2,
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'Revit creates a single intelligent 3D model from which all drawings and schedules are automatically generated.',
        correct: true,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'Which of the following is NOT a reason Revit dominates the BIM market?',
        options: [
          'It integrates seamlessly with AutoCAD and Navisworks',
          'It is free for all professional users',
          'It covers all disciplines in one platform',
          'It has the largest global user base',
        ],
        correct: 1,
      },
      {
        id: 'q5', type: 'truefalse',
        question: 'Revit 2024 can open files created in Revit 2026.',
        correct: false,
      },
      {
        id: 'q6', type: 'mcq',
        question: 'Which BIM software is dominant specifically in structural steel fabrication?',
        options: ['ArchiCAD', 'Vectorworks', 'Tekla Structures', 'Bentley AECOsim'],
        correct: 2,
      },
      {
        id: 'q7', type: 'fillblank',
        question: 'Revit is licensed annually through Autodesk, typically as part of the _______ Collection for AEC professionals.',
        correct: 'aec',
      },
      {
        id: 'q8', type: 'truefalse',
        question: 'Filipino Revit professionals are in high demand in countries like Singapore, UAE, and Australia.',
        correct: true,
      },
      {
        id: 'q9', type: 'mcq',
        question: 'When was Revit unified into a single platform covering Architecture, Structure, and MEP in one software?',
        options: ['2006', '2010', '2013', '2016'],
        correct: 2,
      },
      {
        id: 'q10', type: 'mcq',
        question: 'What is the recognized professional credential for Revit users in the Philippines and internationally?',
        options: [
          'Autodesk Certified Professional (ACP)',
          'BIM Revit Specialist (BRS)',
          'Revit Master Certificate (RMC)',
          'International BIM Credential (IBC)',
        ],
        correct: 0,
      },
    ],
  },

  'rv-2': {
    lessonId: 'rv-2',
    title: 'Revit Interface Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'Which area of the Revit interface shows all views, sheets, families, and groups in your project?',
        options: ['Properties Panel', 'Ribbon', 'Project Browser', 'View Control Bar'],
        correct: 2,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'The Ribbon tab that contains tools for placing walls, floors, roofs, and doors is:',
        options: ['Structure', 'Systems', 'Architecture', 'Annotate'],
        correct: 2,
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'The View Control Bar controls display settings for ALL views in the project simultaneously.',
        correct: false,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'What is the keyboard shortcut to open the Visibility/Graphics Overrides dialog?',
        options: ['VG or VV', 'VG only', 'GV', 'VS'],
        correct: 0,
      },
      {
        id: 'q5', type: 'fillblank',
        question: 'The dropdown at the top of the Properties Panel that lets you choose which type of element to place is called the _______ Selector.',
        correct: 'type',
      },
      {
        id: 'q6', type: 'mcq',
        question: 'To orbit and rotate in a Revit 3D view using the mouse, you hold:',
        options: ['Ctrl + Middle Mouse Button', 'Shift + Middle Mouse Button', 'Alt + Middle Mouse Button', 'Right Mouse Button'],
        correct: 1,
      },
      {
        id: 'q7', type: 'truefalse',
        question: 'The Modify tab in the Ribbon is always visible, regardless of whether an element is selected.',
        correct: false,
      },
      {
        id: 'q8', type: 'mcq',
        question: 'What keyboard shortcut tiles all open views side by side in Revit?',
        options: ['TW', 'WT', 'TV', 'VT'],
        correct: 1,
      },
      {
        id: 'q9', type: 'mcq',
        question: 'Where in the Revit interface do you access all file operations like New, Open, Save, and Export?',
        options: ['Quick Access Toolbar', 'Application Menu (R button)', 'Manage tab', 'Insert tab'],
        correct: 1,
      },
      {
        id: 'q10', type: 'fillblank',
        question: 'The keyboard shortcut to place a Wall in Revit is _______.',
        correct: 'wa',
      },
    ],
  },

  'rv-3': {
    lessonId: 'rv-3',
    title: 'Project Setup Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What file type is a Revit Template file?',
        options: ['.rvt', '.rfa', '.rte', '.rft'],
        correct: 2,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'What is the standard unit of length used in Philippine Revit projects?',
        options: ['Meters (m)', 'Centimeters (cm)', 'Millimeters (mm)', 'Feet and Inches'],
        correct: 2,
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'Levels in Revit can be created and edited in a Floor Plan view.',
        correct: false,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'What is the keyboard shortcut to open Project Units in Revit?',
        options: ['PU', 'UN', 'UP', 'UL'],
        correct: 1,
      },
      {
        id: 'q5', type: 'mcq',
        question: 'In standard grid naming convention, which characters are typically avoided to prevent confusion with numbers?',
        options: ['A, B, C', 'I, O, Q', 'X, Y, Z', 'M, N, P'],
        correct: 1,
      },
      {
        id: 'q6', type: 'fillblank',
        question: 'Project Information is accessed from the _______ tab in the Revit Ribbon.',
        correct: 'manage',
      },
      {
        id: 'q7', type: 'truefalse',
        question: 'When you tick "Make Plan View" while creating a level, Revit automatically creates a floor plan view for that level.',
        correct: true,
      },
      {
        id: 'q8', type: 'mcq',
        question: 'Which option in the Application Menu allows you to save a project with a new file name or location?',
        options: ['Save', 'Save As', 'Export', 'Close'],
        correct: 1,
      },
      {
        id: 'q9', type: 'mcq',
        question: 'In professional file naming for Revit projects, what does "WIP" typically stand for?',
        options: ['Work in Progress', 'Working in Panels', 'Written in Plan', 'Workflow Input Package'],
        correct: 0,
      },
      {
        id: 'q10', type: 'fillblank',
        question: 'The keyboard shortcut to place a Grid in Revit is _______.',
        correct: 'gr',
      },
    ],
  },
};

export default revitQuizzes;
