// ============================================================
// DYNAMO QUIZZES DATA — dyn-17 through dyn-24
// Merge these entries into your lib/dynamoQuizzesData.js array
// ============================================================

export const dynamoQuizzes_17_24 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-17: Custom Nodes
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-17',
    title: 'Custom Nodes — Building Reusable Dynamo Components',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What file extension does a Custom Node save as?',
        options: ['.dyn', '.dyf', '.rfa', '.pkg'],
        answer: '.dyf'
      },
      {
        type: 'truefalse',
        question: 'A Group and a Custom Node have identical effects on how a graph executes.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is the main practical difference between a Group and a Custom Node?',
        options: [
          'A Group is a visual annotation only; a Custom Node is a separate, reusable workspace with its own defined ports',
          'A Group requires a package; a Custom Node does not',
          'A Custom Node cannot contain Python',
          'There is no difference'
        ],
        answer: 'A Group is a visual annotation only; a Custom Node is a separate, reusable workspace with its own defined ports'
      },
      {
        type: 'mcq',
        question: 'Inside a Custom Node workspace, what defines the ports that appear on the finished packaged node?',
        options: ['Groups', 'Input and Output nodes', 'Watch nodes', 'Code Blocks only'],
        answer: 'Input and Output nodes'
      },
      {
        type: 'fillblank',
        question: 'A Custom Node is created via File → New → ___ Node.',
        answer: 'Custom'
      },
      {
        type: 'mcq',
        question: 'Where is a custom node made shareable with a team or the public?',
        options: ['By publishing it to a Package', 'By saving it as a .dyn file', 'By exporting it to Excel', 'By emailing the .rfa file'],
        answer: 'By publishing it to a Package'
      },
      {
        type: 'truefalse',
        question: 'Publishing a new version of a package automatically updates every graph that already uses the old version.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Under semantic versioning (MAJOR.MINOR.PATCH), what does incrementing the MAJOR version signal?',
        options: [
          'A cosmetic-only change',
          'A breaking change, such as removing or changing existing inputs/outputs',
          'No change at all',
          'A new package author'
        ],
        answer: 'A breaking change, such as removing or changing existing inputs/outputs'
      },
      {
        type: 'mcq',
        question: 'According to the lesson, when should you build a Custom Node rather than just using a Group?',
        options: [
          'Only ever for one-off logic used a single time',
          'When the same logic is repeated across three or more graphs or shared across a team',
          'Never — Groups are always sufficient',
          'Only when no Python is involved'
        ],
        answer: 'When the same logic is repeated across three or more graphs or shared across a team'
      },
      {
        type: 'truefalse',
        question: 'A published Custom Node remains fully editable afterward — its logic is not locked or compiled.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-18: Python Scripting
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-18',
    title: 'Python Scripting Inside Dynamo',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Inside a Python Script node, how are the node\'s input ports accessed?',
        options: ['args[0], args[1]', 'IN[0], IN[1]', 'INPUT1, INPUT2', 'ports[0]'],
        answer: 'IN[0], IN[1]'
      },
      {
        type: 'fillblank',
        question: 'The variable a Python Script node must assign its result to, to produce the node\'s output, is named ___.',
        answer: 'OUT'
      },
      {
        type: 'mcq',
        question: 'Which is the legacy, original Python engine in Dynamo?',
        options: ['CPython3', 'IronPython2', 'Jython', 'MicroPython'],
        answer: 'IronPython2'
      },
      {
        type: 'truefalse',
        question: 'A script written for CPython3 is guaranteed to run unmodified on the IronPython2 engine.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which import line is used to reference the Revit API inside a Python Script node?',
        options: [
          'import RevitAPI',
          'clr.AddReference(\'RevitAPI\')',
          'from revit import api',
          'require(\'RevitAPI\')'
        ],
        answer: 'clr.AddReference(\'RevitAPI\')'
      },
      {
        type: 'mcq',
        question: 'What does UnwrapElement() do?',
        options: [
          'Deletes an element from the model',
          'Converts a Dynamo-wrapped element into the underlying raw Revit API element',
          'Wraps a raw Revit element for use in Dynamo',
          'Creates a new transaction'
        ],
        answer: 'Converts a Dynamo-wrapped element into the underlying raw Revit API element'
      },
      {
        type: 'mcq',
        question: 'Which pair of calls must bracket any code that modifies the Revit model inside a Python Script node?',
        options: [
          'StartTransaction() / EndTransaction()',
          'TransactionManager.Instance.EnsureInTransaction(doc) / .TransactionTaskDone()',
          'BeginEdit() / CommitEdit()',
          'OpenDoc() / SaveDoc()'
        ],
        answer: 'TransactionManager.Instance.EnsureInTransaction(doc) / .TransactionTaskDone()'
      },
      {
        type: 'truefalse',
        question: 'Read-only operations, such as simply querying a parameter value, require the same transaction wrapping as model modifications.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'According to the lesson, when should you reach for Python instead of stock nodes?',
        options: [
          'Whenever any node graph exists, regardless of complexity',
          'When logic involves complex branching/loops, a missing Revit API node wrapper, or performance-critical operations',
          'Only when working with Excel files',
          'Never — stock nodes should always be preferred'
        ],
        answer: 'When logic involves complex branching/loops, a missing Revit API node wrapper, or performance-critical operations'
      },
      {
        type: 'mcq',
        question: 'Where is the Python engine selected on a Python Script node?',
        options: [
          'In the File menu',
          'The Engine dropdown at the bottom of the node',
          'It cannot be changed once set',
          'In the Package Manager'
        ],
        answer: 'The Engine dropdown at the bottom of the node'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-19: Families
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-19',
    title: 'Dynamo & Families — Modifying and Placing Library Content',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which node combination loads a family file directly into the active document without opening Revit\'s Load Family dialog?',
        options: [
          'Watch + Element.SetParameterByName',
          'File Path + Family.LoadFamily',
          'Directory.Files + Element.Delete',
          'Excel.ReadFromFile + Room.ByBoundary'
        ],
        answer: 'File Path + Family.LoadFamily'
      },
      {
        type: 'truefalse',
        question: 'Hardcoding a personal drive letter in a File Path node is recommended so scripts run consistently.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What node returns every FamilyType belonging to a loaded Family?',
        options: ['Family.Types', 'Element.Types', 'Category.ByName', 'FamilyInstance.ByPoint'],
        answer: 'Family.Types'
      },
      {
        type: 'mcq',
        question: 'What is recommended before running a bulk family type-swap across an entire model?',
        options: [
          'Run it directly on the live production model with no testing',
          'Test it on a small selection first',
          'Delete the family library folder',
          'Disable transactions'
        ],
        answer: 'Test it on a small selection first'
      },
      {
        type: 'fillblank',
        question: 'The node used to place a new point-based family instance at a calculated XYZ point is FamilyInstance.By___.',
        answer: 'Point'
      },
      {
        type: 'truefalse',
        question: 'Parameters buried only inside a nested sub-family, with no shared/reporting parameter exposed upward, can always be edited directly from the project environment via Dynamo.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What should be done at the family design stage to make future bulk editing via Dynamo possible for nested parameters?',
        options: [
          'Nothing extra is needed',
          'Expose the parameter as a shared parameter at the top-level family',
          'Delete the nested family entirely',
          'Convert it to a system family'
        ],
        answer: 'Expose the parameter as a shared parameter at the top-level family'
      },
      {
        type: 'mcq',
        question: 'Why should you verify exact family type names with Family.Types rather than typing them from memory?',
        options: [
          'Family.Types is the only node that works with Excel',
          'Type name matching by string is case- and character-sensitive',
          'Typed names are always converted automatically',
          'Family.Types renames the family'
        ],
        answer: 'Type name matching by string is case- and character-sensitive'
      },
      {
        type: 'truefalse',
        question: 'Once placed by a Dynamo script, a family instance behaves exactly as if it had been placed manually — it can be scheduled and tagged normally.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What should you check in Revit after running a bulk family-loading or type-swap script?',
        options: [
          'Nothing — Dynamo scripts never produce warnings',
          'The Revit warnings dialog, since overwritten families or type conflicts often surface there',
          'The Package Manager only',
          'The Dynamo Player list'
        ],
        answer: 'The Revit warnings dialog, since overwritten families or type conflicts often surface there'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-20: Debugging
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-20',
    title: 'Debugging & Troubleshooting Dynamo Scripts',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does a red node in Dynamo indicate?',
        options: [
          'The node ran successfully',
          'The node failed to execute entirely, typically halting downstream nodes that depend on it',
          'The node is currently selected',
          'The node has a Watch attached'
        ],
        answer: 'The node failed to execute entirely, typically halting downstream nodes that depend on it'
      },
      {
        type: 'truefalse',
        question: 'A yellow warning icon commonly indicates a null value or empty list somewhere in the node\'s output.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which node renders geometry passing through a wire in its own preview window?',
        options: ['Watch', 'Watch 3D', 'Code Block', 'Directory Path'],
        answer: 'Watch 3D'
      },
      {
        type: 'mcq',
        question: 'When several unrelated nodes all show "Warning: Node not evaluated," what is the recommended debugging approach?',
        options: [
          'Fix each downstream warning individually',
          'Trace back to find the single earliest failing node causing the cascade',
          'Delete all the affected nodes',
          'Switch to CPython3 immediately'
        ],
        answer: 'Trace back to find the single earliest failing node causing the cascade'
      },
      {
        type: 'fillblank',
        question: 'The lacing option that pairs list items only up to the length of the shortest input list, silently dropping extras, is called ___.',
        answer: 'Shortest'
      },
      {
        type: 'truefalse',
        question: 'Cross Product lacing pairs every item in one list against every item in another, producing a list of lists.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is a common cause of an AttributeError in a Python Script node when calling a Revit API method that clearly exists in the documentation?',
        options: [
          'Calling the method on a Dynamo-wrapped element instead of an unwrapped one',
          'Using too many Watch nodes',
          'The graph is in Automatic mode',
          'The package version is too new'
        ],
        answer: 'Calling the method on a Dynamo-wrapped element instead of an unwrapped one'
      },
      {
        type: 'mcq',
        question: 'In Manual run mode, when does a change to an input (like editing a Code Block value) take effect?',
        options: [
          'Immediately, automatically',
          'Only after clicking Run again',
          'Only after restarting Revit',
          'Manual mode does not allow input changes'
        ],
        answer: 'Only after clicking Run again'
      },
      {
        type: 'truefalse',
        question: 'A common false "the script is broken" report is actually just a graph in Manual mode showing stale results from before the last unrun change.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Does Manual/Automatic mode set in the authoring graph affect how a script runs when executed through Dynamo Player?',
        options: [
          'Yes, Player always respects the authoring mode setting',
          'No, Player always executes a fresh run regardless of that setting',
          'Only in Manual mode',
          'Only if Watch nodes are present'
        ],
        answer: 'No, Player always executes a fresh run regardless of that setting'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-21: Quality Control
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-21',
    title: 'Dynamo for Quality Control — Model Checking & Reporting',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is a key advantage of a scripted QC check over a manual one, according to the lesson?',
        options: [
          'It runs identically every time against every element with no fatigue',
          'It requires no testing whatsoever',
          'It automatically fixes every issue found',
          'It replaces the need for a BIM Execution Plan'
        ],
        answer: 'It runs identically every time against every element with no fatigue'
      },
      {
        type: 'truefalse',
        question: 'An unplaced Room element in Revit typically reports zero area.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What node is suggested to identify room numbers that appear more than once in the model?',
        options: ['List.UniqueItems (or a custom duplicate-finder)', 'Watch 3D', 'Family.LoadFamily', 'Directory.FileNames'],
        answer: 'List.UniqueItems (or a custom duplicate-finder)'
      },
      {
        type: 'mcq',
        question: 'What commonly causes elements to become associated with the wrong Level?',
        options: [
          'Copy/paste operations or group-paste operations',
          'Running the script in CPython3',
          'Publishing a package',
          'Adding a Notes node'
        ],
        answer: 'Copy/paste operations or group-paste operations'
      },
      {
        type: 'fillblank',
        question: 'The lesson recommends exporting QC results using the same node family covered in the Data Exchange lesson: Excel.WriteTo___.',
        answer: 'File'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends structuring the QC report with columns like Element ID, Category, Issue Type, Field, and Current Value.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What tool does the lesson recommend for letting any team member run a QC script on a regular schedule, not just the script\'s author?',
        options: ['Dynamo Player', 'Package Manager', 'The Family Editor', 'Watch 3D'],
        answer: 'Dynamo Player'
      },
      {
        type: 'mcq',
        question: 'Why should room count per level be cross-checked against the Excel room schedule?',
        answer: 'To catch rooms that are missing entirely, not just malformed',
        options: [
          'To catch rooms that are missing entirely, not just malformed',
          'To calculate the Green Area Ratio',
          'To validate the Revit software license',
          'To generate a Custom Node automatically'
        ]
      },
      {
        type: 'truefalse',
        question: 'Including a summary sheet with pass/fail counts is suggested so a project lead can gauge model health without reading every row.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What should happen to the QC script itself as new office standards are adopted?',
        options: [
          'Nothing — QC scripts should never change once written',
          'It should be updated, since a stale QC script checking outdated requirements gives false confidence',
          'It should be deleted and replaced with manual review',
          'It should be converted into a Family'
        ],
        answer: 'It should be updated, since a stale QC script checking outdated requirements gives false confidence'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-22: ISO 19650 Automation
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-22',
    title: 'Dynamo & ISO 19650 — Automating Naming & Data Compliance',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the ISO 19650 container naming field order presented in the lesson?',
        options: [
          'Number-Role-Type-Level-Volume-Originator-Project',
          'Project-Originator-Volume-Level-Type-Role-Number',
          'Originator-Project-Type-Role-Volume-Level-Number',
          'Type-Role-Number-Project-Originator-Volume-Level'
        ],
        answer: 'Project-Originator-Volume-Level-Type-Role-Number'
      },
      {
        type: 'truefalse',
        question: 'The exact naming field list is agreed per project in the BIM Execution Plan.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Why does the lesson recommend using a Python Script node with regular expressions instead of chained stock string nodes for naming validation?',
        options: [
          'Regex is generally more reliable once more than two or three fields are involved',
          'Stock nodes cannot read strings at all',
          'Regex is required by Revit',
          'Chained stock nodes run faster'
        ],
        answer: 'Regex is generally more reliable once more than two or three fields are involved'
      },
      {
        type: 'mcq',
        question: 'What node collects file paths from a folder, useful for validating file names against the naming schema?',
        options: ['Directory.FileNames', 'Family.Types', 'Room.Location', 'Element.SetParameterByName'],
        answer: 'Directory.FileNames'
      },
      {
        type: 'fillblank',
        question: 'A batch rename script that modifies the model must be wrapped using TransactionManager.Instance.EnsureInTransaction and .Transaction___Done.',
        answer: 'Task'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends running a batch rename script silently, without reviewing a before/after comparison.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What should be exported for non-compliant names, according to the lesson, rather than just a generic pass/fail flag?',
        options: [
          'Nothing further is needed',
          'A report identifying exactly which naming field failed',
          'A new Family file',
          'A Custom Node'
        ],
        answer: 'A report identifying exactly which naming field failed'
      },
      {
        type: 'mcq',
        question: 'What cross-check does the lesson suggest between a name string and project metadata?',
        options: [
          'Comparing the embedded code in the name (e.g., Originator or Role) against a separate metadata parameter for mismatches',
          'Comparing file size to element count',
          'Comparing Revit version numbers',
          'Comparing package dependencies'
        ],
        answer: 'Comparing the embedded code in the name (e.g., Originator or Role) against a separate metadata parameter for mismatches'
      },
      {
        type: 'truefalse',
        question: 'The naming check script should be updated immediately if the project\'s naming convention is formally revised.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'When should the naming compliance check be run, according to the lesson?',
        options: [
          'Only once, at project kickoff',
          'Before every push of information to the Common Data Environment (CDE)',
          'Only when a client explicitly requests it',
          'Never — it is optional'
        ],
        answer: 'Before every push of information to the Common Data Environment (CDE)'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-23: Publishing & Sharing Scripts
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-23',
    title: 'Publishing & Sharing Scripts — Dynamo Player & Team Workflows',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does Dynamo Player show to the end user, according to the lesson?',
        options: [
          'The full node canvas with all logic visible',
          'Only a list of exposed inputs and a Run button',
          'Only the Package Manager',
          'A Python code editor'
        ],
        answer: 'Only a list of exposed inputs and a Run button'
      },
      {
        type: 'truefalse',
        question: 'Manual/Automatic mode settings from the authoring environment apply when a script is run through Dynamo Player.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'How is an input node exposed to Dynamo Player?',
        options: [
          'Right-click the input node → "Is Input"',
          'Save the file as .dyf',
          'Publish it to the Package Manager',
          'Add a Notes node above it'
        ],
        answer: 'Right-click the input node → "Is Input"'
      },
      {
        type: 'mcq',
        question: 'What examples of community packages does the lesson mention?',
        options: ['Clockwork, archi-lab, Rhythm, Data-Shapes', 'AutoCAD, Navisworks, BIM 360', 'IronPython2, CPython3', 'Excel, Speckle, IFC'],
        answer: 'Clockwork, archi-lab, Rhythm, Data-Shapes'
      },
      {
        type: 'truefalse',
        question: 'A script built using nodes from a package will show missing/red nodes for a teammate who has not installed that same package.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'Before sharing a .dyn file, you can check File → Package ___ to see which packages the graph relies on.',
        answer: 'Dependencies'
      },
      {
        type: 'mcq',
        question: 'Why does the lesson advise against parallel edits to the same .dyn file by two people at once?',
        options: [
          'Merging conflicting graph changes is impractical since the file is a dense JSON structure, not readable diffs',
          '.dyn files cannot be opened by more than one person ever',
          'Dynamo automatically locks files',
          'It is a licensing violation'
        ],
        answer: 'Merging conflicting graph changes is impractical since the file is a dense JSON structure, not readable diffs'
      },
      {
        type: 'mcq',
        question: 'What is the recommended purpose of a Notes node in a shared script?',
        options: [
          'To document purpose, hardcoded assumptions, required packages, and Player input meanings',
          'To replace the need for Input nodes',
          'To automatically fix errors',
          'To publish the script to Package Manager'
        ],
        answer: 'To document purpose, hardcoded assumptions, required packages, and Player input meanings'
      },
      {
        type: 'truefalse',
        question: 'A Player script with fifteen exposed input fields is described in the lesson as defeating the purpose of simplifying the workflow.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What should be maintained to keep production scripts organised and discoverable across a team?',
        options: [
          'A central shared folder or Git repository of approved scripts with a short readme/index',
          'Individual copies emailed between team members only',
          'No documentation at all',
          'A single unversioned desktop folder per user'
        ],
        answer: 'A central shared folder or Git repository of approved scripts with a short readme/index'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-24: Capstone
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-24',
    title: 'Capstone — Dharren Park Automation: Rooms, Sheets & Data in One Script',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What are the four stages the capstone script chains into one pipeline?',
        options: [
          'Excel room import, matched parameter updates, per-level sheet generation, ISO 19650 naming validation',
          'Site import, massing, environmental analysis, Revit handoff',
          'Family loading, type swapping, placement, deletion',
          'Watch, Watch 3D, Code Block, Notes'
        ],
        answer: 'Excel room import, matched parameter updates, per-level sheet generation, ISO 19650 naming validation'
      },
      {
        type: 'truefalse',
        question: 'The capstone script auto-creates brand-new Room elements in the model for any Excel row with no existing match.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What key is used to match Excel room rows to existing Revit Room elements?',
        options: ['Room Number', 'Element Id only', 'File creation date', 'Sheet Name'],
        answer: 'Room Number'
      },
      {
        type: 'mcq',
        question: 'Why does the capstone script update Room Number separately from Name and Department, in its own reviewed pass?',
        options: [
          'Renumbering while other parameters update in the same pass risks losing the number-based match key',
          'Number parameters cannot be modified by Python',
          'Number and Name always must be identical',
          'It has nothing to do with the matching logic'
        ],
        answer: 'Renumbering while other parameters update in the same pass risks losing the number-based match key'
      },
      {
        type: 'fillblank',
        question: 'The capstone script only generates a new sheet for a Level that does not already have a ___.',
        answer: 'sheet'
      },
      {
        type: 'truefalse',
        question: 'The naming validation step in the capstone runs before any sheets are created, so sheets are never actually checked.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Where should Excel rows and Revit rooms with no match be reported, according to the capstone?',
        options: [
          'They should be flagged for the coordinator rather than silently ignored',
          'They should be deleted automatically',
          'They should be merged into a single new room',
          'Nothing needs to happen'
        ],
        answer: 'They should be flagged for the coordinator rather than silently ignored'
      },
      {
        type: 'mcq',
        question: 'What should be exposed as Dynamo Player inputs in the finished capstone script?',
        options: [
          'The Excel file path and the output report path',
          'The entire Revit API source code',
          'Nothing — Player inputs are not used in the capstone',
          'Only the Sheet Number'
        ],
        answer: 'The Excel file path and the output report path'
      },
      {
        type: 'truefalse',
        question: 'According to the capstone\'s closing reflection, no single lesson in the course did the whole job by itself — the value came from connecting the pieces into one pipeline.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What does the capstone recommend considering for the naming validator logic, since it is reused unchanged from Lesson 22?',
        options: [
          'Promoting it to a proper Custom Node',
          'Deleting it after use',
          'Rewriting it in IronPython2 only',
          'Removing it from the script entirely'
        ],
        answer: 'Promoting it to a proper Custom Node'
      }
    ]
  }

]
