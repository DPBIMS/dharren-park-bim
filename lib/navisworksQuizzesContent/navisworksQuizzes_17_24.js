// ============================================================
// NAVISWORKS GETTING STARTED — QUIZZES nav-17 through nav-24 (ADVANCED)
// File: lib/navisworksQuizzesContent/navisworksQuizzes_17_24.js
// Index: lib/navisworksQuizzesData.js
// ============================================================

export const quizzes_17_24 = [

  {
    lessonId: 'nav-17',
    title: 'Batch Utility Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What does Batch Utility do?',
        options: [
          'Runs Clash Detective tests automatically',
          'Converts many source files to NWC format in one operation',
          'Generates construction schedules',
          'Renders photorealistic images',
        ],
        answer: 'Converts many source files to NWC format in one operation',
      },
      {
        id: 'q2', type: 'truefalse',
        question: 'Batch Utility requires opening each source file individually in its native application.',
        answer: false,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'For native Autodesk formats, which approach generally produces more reliable results?',
        options: [
          'Batch Utility, always',
          'Direct export from the native authoring software',
          'Neither produces reliable results',
          'Manual screenshot and re-drawing',
        ],
        answer: 'Direct export from the native authoring software',
      },
      {
        id: 'q4', type: 'truefalse',
        question: 'Batch Utility supports command-line operation, allowing it to be scheduled as part of an automated workflow.',
        answer: true,
      },
      {
        id: 'q5', type: 'mcq',
        question: 'What is a common mistake when using Batch Utility?',
        options: [
          'Setting an output folder',
          'Pointing it at a folder containing outdated or duplicate file versions',
          'Converting third-party formats',
          'Reviewing the conversion log',
        ],
        answer: 'Pointing it at a folder containing outdated or duplicate file versions',
      },
      {
        id: 'q6', type: 'fillblank',
        question: 'Batch Utility reports success or _______ for each file individually.',
        answer: 'failure',
      },
      {
        id: 'q7', type: 'mcq',
        question: 'Batch Utility is most valuable for:',
        options: [
          'A single discipline publishing their own up-to-date model',
          'Converting many files at once, especially formats without a native export plug-in',
          'Running TimeLiner simulations',
          'Generating BCF issues',
        ],
        answer: 'Converting many files at once, especially formats without a native export plug-in',
      },
      {
        id: 'q8', type: 'truefalse',
        question: 'All advanced export settings available in a native authoring tool\'s NWC exporter are always exposed through Batch Utility.',
        answer: false,
      },
      {
        id: 'q9', type: 'mcq',
        question: 'Where is Batch Utility run from?',
        options: [
          'Inside the Navisworks Review tab',
          'A standalone tool installed alongside Navisworks',
          'Only through the Navisworks API',
          'It does not exist — conversion must always be manual',
        ],
        answer: 'A standalone tool installed alongside Navisworks',
      },
      {
        id: 'q10', type: 'mcq',
        question: 'Which formats can Batch Utility typically convert to NWC?',
        options: [
          'Only Navisworks NWC files themselves',
          'A wide range including DWG, IFC, and SKP',
          'Only image files',
          'Only point cloud formats',
        ],
        answer: 'A wide range including DWG, IFC, and SKP',
      },
    ],
  },

  {
    lessonId: 'nav-18',
    title: 'Cloud Coordination Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What does ACC Model Coordination provide that desktop Navisworks does not?',
        options: [
          'Full TimeLiner and Quantification features',
          'Browser-based access without requiring software installation',
          'Deeper Clash Detective configuration',
          'Animator and Scripter tools',
        ],
        answer: 'Browser-based access without requiring software installation',
      },
      {
        id: 'q2', type: 'truefalse',
        question: 'ACC Model Coordination can run clash tests automatically every time a new model version is uploaded.',
        answer: true,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'Which feature set is NOT available in ACC Model Coordination, according to the lesson?',
        options: ['Basic clash testing', 'Model viewing', 'TimeLiner / Quantification', 'Issue tracking'],
        answer: 'TimeLiner / Quantification',
      },
      {
        id: 'q4', type: 'truefalse',
        question: 'Most professional teams use desktop Navisworks for deep coordination and cloud coordination for wider team accessibility.',
        answer: true,
      },
      {
        id: 'q5', type: 'mcq',
        question: 'How do discipline models typically get to Autodesk Construction Cloud?',
        options: [
          'They cannot be uploaded, only created directly in the browser',
          'Uploaded via Revit Cloud Worksharing or a manual upload to the docs area',
          'Only through Batch Utility',
          'Automatically, with no upload step required',
        ],
        answer: 'Uploaded via Revit Cloud Worksharing or a manual upload to the docs area',
      },
      {
        id: 'q6', type: 'fillblank',
        question: 'Cloud-based clash testing can re-evaluate automatically on every new model _______.',
        answer: 'upload',
      },
      {
        id: 'q7', type: 'mcq',
        question: 'According to the lesson\'s honest assessment, cloud coordination tools are currently:',
        options: [
          'A full replacement for desktop Navisworks on complex projects',
          'An accessibility layer, not yet a full replacement for the deeper desktop toolset',
          'Completely unrelated to desktop Navisworks workflows',
          'Only usable for point cloud data',
        ],
        answer: 'An accessibility layer, not yet a full replacement for the deeper desktop toolset',
      },
      {
        id: 'q8', type: 'truefalse',
        question: 'Cloud issue tracking can integrate with authoring tools like Revit, letting engineers resolve issues where they model.',
        answer: true,
      },
      {
        id: 'q9', type: 'mcq',
        question: 'What is required to access ACC Model Coordination, compared to desktop Navisworks?',
        options: [
          'A Navisworks license and a powerful workstation',
          'A web browser and project permissions',
          'A dedicated rendering GPU',
          'Nothing — it cannot be accessed at all',
        ],
        answer: 'A web browser and project permissions',
      },
      {
        id: 'q10', type: 'mcq',
        question: 'What role does the BIM coordinator typically still play even when ACC Model Coordination is used?',
        options: [
          'None — cloud tools fully replace the coordinator',
          'Running deeper desktop coordination work alongside the accessible cloud view',
          'Only uploading files, with no review responsibility',
          'Manually retyping all clash results into the cloud',
        ],
        answer: 'Running deeper desktop coordination work alongside the accessible cloud view',
      },
    ],
  },

  {
    lessonId: 'nav-19',
    title: 'BCF Workflow Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What does BCF stand for?',
        options: ['Building Clash Format', 'BIM Collaboration Format', 'Building Construction File', 'BIM Coordination Framework'],
        answer: 'BIM Collaboration Format',
      },
      {
        id: 'q2', type: 'truefalse',
        question: 'BCF is a vendor-neutral, open standard rather than an Autodesk-specific format.',
        answer: true,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'What does a BCF file primarily carry?',
        options: [
          'The entire 3D model geometry',
          'Issue data — viewpoint, screenshot, description, and status',
          'Only a text file with no images',
          'Construction schedule dates',
        ],
        answer: 'Issue data — viewpoint, screenshot, description, and status',
      },
      {
        id: 'q4', type: 'truefalse',
        question: 'BCF only works between Navisworks and Revit, no other software.',
        answer: false,
      },
      {
        id: 'q5', type: 'mcq',
        question: 'Where can a Navisworks user export issues as BCF?',
        options: [
          'Only from the Quantification panel',
          'From Clash Detective results or saved Review viewpoints',
          'Only from TimeLiner',
          'BCF export is not available in Navisworks',
        ],
        answer: 'From Clash Detective results or saved Review viewpoints',
      },
      {
        id: 'q6', type: 'mcq',
        question: 'When an engineer imports a BCF issue into Revit, what happens when they click it?',
        options: [
          'Nothing — BCF issues are static text only',
          'The view jumps directly to the relevant location and elements',
          'Revit deletes the flagged element automatically',
          'A new model is created',
        ],
        answer: 'The view jumps directly to the relevant location and elements',
      },
      {
        id: 'q7', type: 'fillblank',
        question: 'Without BCF, communicating a clash often meant a screenshot pasted into an email or _______ message.',
        answer: 'chat',
      },
      {
        id: 'q8', type: 'truefalse',
        question: 'On cloud-connected projects, BCF-style issue exchange can happen automatically through a live sync rather than manual file transfer.',
        answer: true,
      },
      {
        id: 'q9', type: 'mcq',
        question: 'Which of these is NOT typically part of a BCF issue?',
        options: ['Status', 'Comments', 'A saved viewpoint', 'The full project cost estimate'],
        answer: 'The full project cost estimate',
      },
      {
        id: 'q10', type: 'mcq',
        question: 'Why is BCF described as lightweight compared to a full model export?',
        options: [
          'It only contains issue data, not full model geometry',
          'It compresses the entire model to a tiny file size',
          'It deletes unnecessary model elements',
          'It only works with small models',
        ],
        answer: 'It only contains issue data, not full model geometry',
      },
    ],
  },

  {
    lessonId: 'nav-20',
    title: 'Navisworks API & Add-ins Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What kind of API does Navisworks expose?',
        options: ['A REST API only', 'A .NET API', 'A Python-only API', 'No API is available'],
        answer: 'A .NET API',
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Which task pattern is described as a high-value automation target?',
        options: [
          'A one-off task done only once',
          'A repetitive, time-consuming, well-defined task done across many projects',
          'A judgment call on a specific real clash',
          'A task with no clear rules',
        ],
        answer: 'A repetitive, time-consuming, well-defined task done across many projects',
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'Dynamo can offer a lower-code, visual alternative entry point to automation for teams without dedicated developers.',
        answer: true,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'According to the lesson, which is described as a low-automation-potential task?',
        options: [
          'Generating a standardized clash report format',
          'Bulk renaming Search Sets to a naming standard',
          'Fully automated coordination decision-making on real clashes',
          'Pulling clash counts into a dashboard',
        ],
        answer: 'Fully automated coordination decision-making on real clashes',
      },
      {
        id: 'q5', type: 'truefalse',
        question: 'Most individual BIM coordinators are expected to write Navisworks API code themselves, according to the lesson\'s honest assessment.',
        answer: false,
      },
      {
        id: 'q6', type: 'mcq',
        question: 'Add-ins built on the Navisworks API appear inside Navisworks as:',
        options: [
          'A completely separate application',
          'Additional ribbon tools, similar to built-in panels like Clash Detective',
          'Browser-only extensions',
          'They cannot appear inside Navisworks at all',
        ],
        answer: 'Additional ribbon tools, similar to built-in panels like Clash Detective',
      },
      {
        id: 'q7', type: 'fillblank',
        question: 'Custom development is most worth it at the _______ level, where the same task repeats across many projects.',
        answer: 'firm',
      },
      {
        id: 'q8', type: 'mcq',
        question: 'What resource does a firm need to build and maintain a custom Navisworks add-in?',
        options: [
          'No resources are needed',
          '.NET development resources',
          'Only a Navisworks Freedom license',
          'A point cloud scanner',
        ],
        answer: '.NET development resources',
      },
      {
        id: 'q9', type: 'truefalse',
        question: 'A one-off task with no repetition is generally a good candidate for custom API development.',
        answer: false,
      },
      {
        id: 'q10', type: 'mcq',
        question: 'What is the more realistic, useful skill for most individual coordinators regarding the API, per the lesson?',
        options: [
          'Learning to write the add-in code themselves',
          'Knowing the capability exists and recognizing when to escalate it within their organization',
          'Ignoring automation entirely',
          'Replacing all manual coordination work with API scripts',
        ],
        answer: 'Knowing the capability exists and recognizing when to escalate it within their organization',
      },
    ],
  },

  {
    lessonId: 'nav-21',
    title: 'Performance Optimization Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What technology does Navisworks use to handle large models efficiently?',
        options: ['JetStream geometry caching', 'BCF compression', 'Dynamo scripting', 'Quantification catalogs'],
        answer: 'JetStream geometry caching',
      },
      {
        id: 'q2', type: 'truefalse',
        question: 'Working from a federated NWF stored on a slow network drive has no effect on performance.',
        answer: false,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'Which hardware component is most associated with smooth navigation of dense, detailed geometry?',
        options: ['Graphics card (GPU)', 'Keyboard', 'Monitor resolution only', 'Mouse sensitivity'],
        answer: 'Graphics card (GPU)',
      },
      {
        id: 'q4', type: 'mcq',
        question: 'What is a recommended file management habit for large federated models?',
        options: [
          'Never delete or archive anything, ever',
          'Periodically purge unused Search Sets, resolved clash tests, and outdated viewpoints',
          'Always keep every old viewpoint forever in the live working file',
          'Avoid using Search Sets entirely',
        ],
        answer: 'Periodically purge unused Search Sets, resolved clash tests, and outdated viewpoints',
      },
      {
        id: 'q5', type: 'truefalse',
        question: 'Storing the working NWF locally on an SSD is generally faster than opening it directly from a network share.',
        answer: true,
      },
      {
        id: 'q6', type: 'mcq',
        question: 'What is recommended for routine, zone-specific reviews on a very large project?',
        options: [
          'Always load the entire project federated model',
          'Use smaller, scoped NWF files for the specific zone or discipline pair',
          'Disable Clash Detective entirely',
          'Only use the cloud tool, never desktop Navisworks',
        ],
        answer: 'Use smaller, scoped NWF files for the specific zone or discipline pair',
      },
      {
        id: 'q7', type: 'fillblank',
        question: 'A coordinator working daily on a multi-gigabyte model benefits disproportionately from solid _______.',
        answer: 'hardware',
      },
      {
        id: 'q8', type: 'mcq',
        question: 'Which view control setting can reduce rendering load when fine detail isn\'t needed?',
        options: ['Detail Level (Coarse vs Fine)', 'Project Units', 'Quantification Workbook', 'BCF export settings'],
        answer: 'Detail Level (Coarse vs Fine)',
      },
      {
        id: 'q9', type: 'truefalse',
        question: 'A federated model\'s file size should be actively managed throughout the project rather than left to grow unchecked.',
        answer: true,
      },
      {
        id: 'q10', type: 'mcq',
        question: 'What is a common mistake regarding the master federated file?',
        options: [
          'Using scoped files for small tasks',
          'Treating one master NWF as the only working file for every task, regardless of scale',
          'Purging unused Search Sets periodically',
          'Storing the file locally',
        ],
        answer: 'Treating one master NWF as the only working file for every task, regardless of scale',
      },
    ],
  },

  {
    lessonId: 'nav-22',
    title: 'File Compatibility Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'Which open, standardized format is most commonly used as a fallback for cross-platform exchange?',
        options: ['IFC', 'NWD', 'BCF', 'RCP'],
        answer: 'IFC',
      },
      {
        id: 'q2', type: 'truefalse',
        question: 'Navisworks can natively open or append DWG, IFC, SketchUp, and point cloud formats among others.',
        answer: true,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'What is a common cause of a file not importing cleanly into Navisworks?',
        options: [
          'The file being too well organized',
          'A significantly outdated format version or proprietary geometry types',
          'Using a Search Set',
          'Having too few elements',
        ],
        answer: 'A significantly outdated format version or proprietary geometry types',
      },
      {
        id: 'q4', type: 'mcq',
        question: 'What should you ask a consultant for if their native file format causes import problems?',
        options: ['A printed PDF only', 'An IFC export as a fallback', 'A point cloud scan', 'Nothing — the file cannot be fixed'],
        answer: 'An IFC export as a fallback',
      },
      {
        id: 'q5', type: 'truefalse',
        question: '2D CAD drawings can meaningfully participate in full 3D clash detection in the same way 3D models can.',
        answer: false,
      },
      {
        id: 'q6', type: 'mcq',
        question: 'What is the primary value of appending 2D CAD data into a federated model?',
        options: [
          'Running automated clash tests against it as if it were 3D',
          'Use as a reference layer and for markup/coordination on partially-modeled scope',
          'Generating Quantification takeoffs',
          'Replacing the need for 3D models entirely',
        ],
        answer: 'Use as a reference layer and for markup/coordination on partially-modeled scope',
      },
      {
        id: 'q7', type: 'fillblank',
        question: 'IFC stands for Industry Foundation _______.',
        answer: 'classes',
      },
      {
        id: 'q8', type: 'mcq',
        question: 'When should format requirements ideally be established?',
        options: [
          'Never — they sort themselves out automatically',
          'Early in the project, in the BIM Execution Plan',
          'Only after a coordination failure occurs',
          'After construction is complete',
        ],
        answer: 'Early in the project, in the BIM Execution Plan',
      },
      {
        id: 'q9', type: 'truefalse',
        question: 'It is good practice to test a new file type well before a critical coordination milestone.',
        answer: true,
      },
      {
        id: 'q10', type: 'mcq',
        question: 'Documenting format-specific quirks discovered during a project helps:',
        options: [
          'Nothing — it has no practical value',
          'Avoid relearning the same lesson on the next coordination cycle',
          'Replace the need for IFC entirely',
          'Eliminate the need for any file testing',
        ],
        answer: 'Avoid relearning the same lesson on the next coordination cycle',
      },
    ],
  },

  {
    lessonId: 'nav-23',
    title: 'Navisworks & ISO 19650 Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What is the central concept in ISO 19650 where information is shared with defined states?',
        options: ['The Federated Model', 'The Common Data Environment (CDE)', 'The Clash Detective Workbook', 'The Selection Tree'],
        answer: 'The Common Data Environment (CDE)',
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Which CDE state makes a model available to other disciplines for coordination?',
        options: ['Work in Progress', 'Shared', 'Archived only', 'Deleted'],
        answer: 'Shared',
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'ISO 19650 explicitly describes a workflow where discipline models are periodically combined into a federated model for coordination.',
        answer: true,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'Which role does a BIM Coordinator running Navisworks sessions typically act as, or support?',
        options: ['Appointing Party', 'Information Manager', 'Task Team only', 'Client Representative'],
        answer: 'Information Manager',
      },
      {
        id: 'q5', type: 'mcq',
        question: 'Where should the coordination and clash detection schedule be documented?',
        options: [
          'Nowhere — it should be improvised each week',
          'The BIM Execution Plan (BEP)',
          'Only in a private notebook',
          'The Quantification Workbook',
        ],
        answer: 'The BIM Execution Plan (BEP)',
      },
      {
        id: 'q6', type: 'truefalse',
        question: 'ISO 19650-aligned projects typically expect formal deliverables like dated clash reports and an auditable issue log.',
        answer: true,
      },
      {
        id: 'q7', type: 'fillblank',
        question: 'The party that defines coordination and clash detection requirements in the Exchange Information Requirements is the _______ Party.',
        answer: 'appointing',
      },
      {
        id: 'q8', type: 'mcq',
        question: 'What format does a BEP often specify for tracking clash issues, per the lesson?',
        options: ['BCF', 'JPEG', 'Plain text email only', 'No format is ever specified'],
        answer: 'BCF',
      },
      {
        id: 'q9', type: 'mcq',
        question: 'Why does the lesson argue ISO 19650 alignment matters beyond compliance?',
        options: [
          'It has no practical benefit beyond passing an audit',
          'It makes the coordination process repeatable, auditable, and resilient to staff turnover',
          'It eliminates the need for any documentation',
          'It replaces the need for Clash Detective entirely',
        ],
        answer: 'It makes the coordination process repeatable, auditable, and resilient to staff turnover',
      },
      {
        id: 'q10', type: 'truefalse',
        question: 'A federated model snapshot saved as an NWD is a typical ISO 19650-aligned coordination deliverable at a milestone.',
        answer: true,
      },
    ],
  },

  {
    lessonId: 'nav-24',
    title: 'Capstone: Weekly Coordination Cycle Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What is the first step in the weekly coordination cycle described in the capstone lesson?',
        options: ['Report', 'Collect — confirm every discipline has published a current NWC', 'Archive', 'Meet'],
        answer: 'Collect — confirm every discipline has published a current NWC',
      },
      {
        id: 'q2', type: 'mcq',
        question: 'What should be refreshed in the master federated file before testing?',
        options: ['All links, pulling in the latest NWC from each discipline', 'Only the architecture model', 'Nothing — refresh is unnecessary', 'Only the point cloud'],
        answer: 'All links, pulling in the latest NWC from each discipline',
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'Triaging clash results before the meeting turns the session into a focused discussion rather than a slow read-through.',
        answer: true,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'Which step uses last week\'s archived models to understand what changed before the meeting starts?',
        options: ['Compare', 'Report', 'Archive', 'Collect'],
        answer: 'Compare',
      },
      {
        id: 'q5', type: 'truefalse',
        question: 'Every new issue raised in a coordination meeting needs an assigned owner and target date before the meeting ends.',
        answer: true,
      },
      {
        id: 'q6', type: 'mcq',
        question: 'What should be exported to disciplines immediately after the meeting, while context is fresh?',
        options: ['Nothing, wait until next month', 'Updated clash reports and BCF issue packages', 'Only a verbal summary', 'The entire raw NWF with no report'],
        answer: 'Updated clash reports and BCF issue packages',
      },
      {
        id: 'q7', type: 'fillblank',
        question: 'Archiving a dated copy of each discipline\'s NWC each cycle becomes the baseline for the next cycle\'s _______ step.',
        answer: 'compare',
      },
      {
        id: 'q8', type: 'mcq',
        question: 'According to the capstone, what is a BIM coordinator\'s real skill?',
        options: [
          'Knowing where every button is in the interface',
          'Running the repeatable weekly cycle reliably so problems are caught while still cheap to fix',
          'Avoiding all use of Clash Detective',
          'Working alone without any team coordination',
        ],
        answer: 'Running the repeatable weekly cycle reliably so problems are caught while still cheap to fix',
      },
      {
        id: 'q9', type: 'truefalse',
        question: 'Existing clash tests should be recreated from scratch every cycle rather than refreshed.',
        answer: false,
      },
      {
        id: 'q10', type: 'mcq',
        question: 'What does archiving the federated model, reports, and source NWCs after each cycle enable?',
        options: [
          'Nothing useful — it is just extra storage use',
          'Next week\'s comparison step and any future audit of the coordination process',
          'Automatic deletion of all clash history',
          'Bypassing the need for a BIM Execution Plan',
        ],
        answer: 'Next week\'s comparison step and any future audit of the coordination process',
      },
    ],
  },

];
