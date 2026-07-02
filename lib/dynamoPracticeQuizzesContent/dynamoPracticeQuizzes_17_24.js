// ============================================================
// DYNAMO PRACTICE QUIZZES DATA — dynp-17 through dynp-24
// Merge these entries into your lib/dynamoPracticeQuizzesData.js array
// ============================================================

export const dynamoPracticeQuizzes_17_24 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-17: Building a Model Audit Script
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-17',
    title: 'Model Audit Script',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which Revit API call, used inside a Python node, retrieves every active warning on the document?',
        options: ['doc.GetWarnings()', 'doc.GetElements()', 'doc.Export()', 'doc.Delete()'],
        answer: 'doc.GetWarnings()'
      },
      {
        type: 'mcq',
        question: 'What two things does each warning object expose, according to the lesson?',
        options: [
          'A description string and the failing elements involved',
          'A cost estimate and a due date',
          'A user name and a timestamp only',
          'A sheet number and a revision code'
        ],
        answer: 'A description string and the failing elements involved'
      },
      {
        type: 'truefalse',
        question: 'Grouping and counting warnings by description helps surface systemic issues, such as "23 instances of Room not enclosed."',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Why does retrieving document warnings not require a transaction?',
        options: [
          'It is a read-only query that does not modify the model',
          'Transactions are only needed for Excel exports',
          'Revit automatically wraps every Python node in a transaction',
          'Warnings cannot be accessed without a transaction, contradicting the lesson'
        ],
        answer: 'It is a read-only query that does not modify the model'
      },
      {
        type: 'mcq',
        question: 'How should the grouped warning counts be sorted for the report, per the lesson?',
        options: [
          'Alphabetically by description only',
          'By frequency, most common first',
          'Randomly, to avoid bias',
          'By Element ID number'
        ],
        answer: 'By frequency, most common first'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends merging the summary and detail warning data into a single Excel sheet rather than separate sheets.',
        answer: false
      },
      {
        type: 'fillblank',
        question: 'Calling Excel.WriteToFile against the same file path with a different ___ input adds a new sheet to the workbook.',
        answer: 'sheetName'
      },
      {
        type: 'mcq',
        question: 'What does the lesson recommend to make historical audits comparable over time?',
        options: [
          'Overwriting the same file every time',
          'Timestamping or versioning the exported file name',
          'Deleting old audit reports immediately',
          'Only ever running the audit once per project'
        ],
        answer: 'Timestamping or versioning the exported file name'
      },
      {
        type: 'mcq',
        question: 'According to the lesson, what does a warning type that keeps reappearing after being "fixed" usually indicate?',
        options: [
          'A workflow habit rather than a one-off modelling mistake',
          'A corrupted Revit installation',
          'That the audit script itself is broken',
          'Nothing significant — it should be ignored'
        ],
        answer: 'A workflow habit rather than a one-off modelling mistake'
      },
      {
        type: 'truefalse',
        question: 'The lesson suggests publishing the audit script to Dynamo Player so any team member can run it without understanding the Python involved.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-18: Automating IFC Export Settings & Batch Export
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-18',
    title: 'IFC Export Automation',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does an IFC export configuration bundle together, according to the lesson?',
        options: [
          'Schema version, class mapping, and property set options',
          'Only the file save location',
          'User permissions and login credentials',
          'Sheet numbers and revision codes'
        ],
        answer: 'Schema version, class mapping, and property set options'
      },
      {
        type: 'mcq',
        question: 'Which Python class mirrors the settings available in the Export IFC dialog?',
        options: ['IFCExportOptions', 'TransactionManager', 'FilteredElementCollector', 'DocumentManager'],
        answer: 'IFCExportOptions'
      },
      {
        type: 'truefalse',
        question: 'Exporting to IFC requires wrapping the export call in EnsureInTransaction/TransactionTaskDone because it modifies the model.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'When batch-exporting by phase, which two properties does the lesson say to set on each pass?',
        options: [
          'ExportOfSpecificPhase and SelectedPhaseId',
          'FileVersion and SpaceBoundaries only',
          'ExportBaseQuantities and ClassMapping',
          'DocumentTitle and Author'
        ],
        answer: 'ExportOfSpecificPhase and SelectedPhaseId'
      },
      {
        type: 'mcq',
        question: 'Why does class mapping matter in an IFC export configuration?',
        options: [
          'It controls which Revit category maps to which IFC entity, affecting downstream interpretation',
          'It sets the file password',
          'It only affects file compression size',
          'It has no real effect on the exported file'
        ],
        answer: 'It controls which Revit category maps to which IFC entity, affecting downstream interpretation'
      },
      {
        type: 'fillblank',
        question: 'On DPC2025, every host and linked file batch export uses a single approved configuration named "DPC2025____".',
        answer: 'Coordination'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends applying different, undocumented export settings per file within a batch to save time.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What does the lesson recommend to catch a failed export within a batch of several files?',
        options: [
          'Logging the outcome of each export to a simple summary list',
          'Assuming the script succeeded if it finishes running',
          'Ignoring individual failures since batches always succeed',
          'Re-running the entire project from scratch'
        ],
        answer: 'Logging the outcome of each export to a simple summary list'
      },
      {
        type: 'mcq',
        question: 'What verification step does the lesson recommend after a batch export completes?',
        options: [
          'Spot-check at least one exported file in a neutral IFC viewer',
          'Delete the export folder to save space',
          'Assume success since no red node appeared',
          'Skip verification if the deadline is tight'
        ],
        answer: 'Spot-check at least one exported file in a neutral IFC viewer'
      },
      {
        type: 'truefalse',
        question: 'Sourcing the list of files or phases to export from a single list makes adding a new file to the batch a one-line change rather than a graph rebuild.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-19: Creating a Custom Dynamo Player Tool for the Office
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-19',
    title: 'Dynamo Player Tool Design',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Roughly how many inputs should a well-designed Player tool typically expose, per the lesson?',
        options: ['Three to six', 'Fifteen or more', 'Exactly one', 'At least twenty'],
        answer: 'Three to six'
      },
      {
        type: 'mcq',
        question: 'What right-click option marks an input node so it appears in the Player panel?',
        options: ['"Is Input"', '"Publish Node"', '"Group Selection"', '"Freeze Value"'],
        answer: '"Is Input"'
      },
      {
        type: 'truefalse',
        question: 'The Player panel shows a full paragraph of explanation next to each input field.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Why does the lesson recommend including units directly in an input\'s name, e.g. "Minimum Room Area (sq m)"?',
        options: [
          'Because the Player panel shows only the input\'s name as its field label',
          'Because Dynamo requires units in every node name',
          'Because units cannot be documented anywhere else',
          'Because it changes the underlying data type'
        ],
        answer: 'Because the Player panel shows only the input\'s name as its field label'
      },
      {
        type: 'mcq',
        question: 'What should every Player-exposed input have, so a user who changes nothing still gets a reasonable result?',
        options: ['A sensible default value', 'A locked, uneditable field', 'A random value generator', 'No default at all'],
        answer: 'A sensible default value'
      },
      {
        type: 'truefalse',
        question: 'According to the lesson, testing a script only inside the authoring canvas is sufficient sign-off before handing it to the team.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What does the lesson recommend testing with a deliberately wrong input, such as a non-existent file path?',
        options: [
          'That the script fails gracefully with a clear message rather than crashing silently',
          'That the script deletes itself',
          'That Dynamo Player refuses to open',
          'Nothing — wrong inputs should never be tested'
        ],
        answer: 'That the script fails gracefully with a clear message rather than crashing silently'
      },
      {
        type: 'fillblank',
        question: 'Dynamo Player watches a shared folder for ___ files and lists them for selection.',
        answer: '.dyn'
      },
      {
        type: 'mcq',
        question: 'What does the lesson say about the file name of a published Player tool?',
        options: [
          'It should be clear and descriptive, since it is exactly what appears in the Player tool list',
          'It does not matter at all',
          'It must always be "Script1.dyn"',
          'It should be a random string for security'
        ],
        answer: 'It should be clear and descriptive, since it is exactly what appears in the Player tool list'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends removing or archiving superseded versions of a tool from the watched Player folder.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-20: Bulletproofing Your Scripts
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-20',
    title: 'Bulletproofing Scripts',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does List.Clean do?',
        options: [
          'Strips null values (and optionally empty sublists) from a list',
          'Sorts a list alphabetically',
          'Converts a list of strings to numbers',
          'Deletes elements from the Revit model'
        ],
        answer: 'Strips null values (and optionally empty sublists) from a list'
      },
      {
        type: 'truefalse',
        question: 'Cleaning a list of parameter values with List.Clean without also filtering its paired element list preserves index-for-index correspondence between the two lists.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Before writing to a parameter, the lesson recommends checking explicitly for which two conditions?',
        options: [
          'The parameter is None, or the parameter IsReadOnly',
          'The parameter is a string, or the parameter is a number',
          'The element is visible, or the element is selected',
          'The file path exists, or the file path is empty'
        ],
        answer: 'The parameter is None, or the parameter IsReadOnly'
      },
      {
        type: 'mcq',
        question: 'Is an empty list returned by a category collector always a bug, according to the lesson?',
        options: [
          'No — it can be a normal, expected result, such as a level with no Furniture elements',
          'Yes — it always indicates a script error',
          'Yes — Dynamo cannot return empty lists under normal use',
          'No — but only for the Rooms category specifically'
        ],
        answer: 'No — it can be a normal, expected result, such as a level with no Furniture elements'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends wrapping a try/except around the entire loop rather than catching exceptions per-element inside the loop.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Why does the lesson caution against using try/except as a substitute for explicit null/read-only checks?',
        options: [
          'Explicit checks are more precise and more informative when they trigger',
          'Try/except is not valid Python syntax',
          'Try/except always crashes the whole graph',
          'Explicit checks are slower to write'
        ],
        answer: 'Explicit checks are more precise and more informative when they trigger'
      },
      {
        type: 'fillblank',
        question: 'The lesson\'s production standard states a script is not finished until it survives a messy real project file, not just a clean ___.',
        answer: 'sample'
      },
      {
        type: 'mcq',
        question: 'What should a defensive parameter-write loop do when it encounters a skipped element, per the lesson?',
        options: [
          'Return the list of skipped elements and reasons rather than silently skipping',
          'Halt the entire transaction immediately',
          'Delete the problematic element',
          'Ignore it with no record at all'
        ],
        answer: 'Return the list of skipped elements and reasons rather than silently skipping'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends deliberately testing scripts against known problem elements, such as a room with no Department value.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What does the lesson say about a script that only works cleanly on a tidy sample file?',
        options: [
          'It should be treated as still in development, not ready for team distribution',
          'It is ready for immediate team-wide rollout',
          'It should be published to Dynamo Player right away',
          'It needs no further testing'
        ],
        answer: 'It should be treated as still in development, not ready for team distribution'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-21: Building a Drawing Issue Automation Script
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-21',
    title: 'Drawing Issue Automation',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which three pieces of data does a drawing issue require written consistently across every issued sheet?',
        options: [
          'Revision description, issue date, and suitability code',
          'Sheet size, scale, and titleblock family',
          'Author name, file size, and print quality',
          'Room number, room name, and department'
        ],
        answer: 'Revision description, issue date, and suitability code'
      },
      {
        type: 'mcq',
        question: 'What does an S2 suitability code mean, according to the lesson\'s DPC2025 mapping?',
        options: [
          'Suitable for information',
          'Suitable for coordination',
          'Authorised and accepted, suitable for construction',
          'Suitable for stage approval'
        ],
        answer: 'Suitable for information'
      },
      {
        type: 'truefalse',
        question: 'The lesson states the suitability code describes how many times a document has changed, not what it is currently fit for.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What numbering convention does DPC2025 use for S-suitability issues, per the lesson?',
        options: ['P-series numbers (P01, P02...)', 'Roman numerals', 'Letters (A, B, C...)', 'Random four-digit codes'],
        answer: 'P-series numbers (P01, P02...)'
      },
      {
        type: 'mcq',
        question: 'Why does the lesson recommend writing the same revision data to every sheet in one batch pass?',
        options: [
          'It guarantees consistency across the issued set with no risk of a typo on one sheet',
          'It is required by the Revit API and cannot be done individually',
          'It reduces the file size of the model',
          'It automatically updates the Excel export'
        ],
        answer: 'It guarantees consistency across the issued set with no risk of a typo on one sheet'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends reading each sheet\'s current highest revision value before writing the next one, rather than assuming a fixed next value.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'The lesson recommends exporting a consolidated issue log using Excel.___ with one row per issued sheet.',
        answer: 'WriteToFile'
      },
      {
        type: 'mcq',
        question: 'What should be done before sending the exported issue log, according to the lesson?',
        options: [
          'Cross-check it against the transmittal recipient list',
          'Delete the Revit model backup',
          'Convert it to a PDF automatically',
          'Nothing further is needed'
        ],
        answer: 'Cross-check it against the transmittal recipient list'
      },
      {
        type: 'mcq',
        question: 'What does the lesson recommend regarding the master issue log file across multiple issues?',
        options: [
          'Keep one running master log appended to at each issue, rather than a new file per issue',
          'Create a brand-new Excel file for every single issue',
          'Store the log only in a Notes node',
          'Delete the log after each transmittal'
        ],
        answer: 'Keep one running master log appended to at each issue, rather than a new file per issue'
      },
      {
        type: 'truefalse',
        question: 'The lesson treats a manual override of automated revision data as a signal worth investigating, since that is exactly where inconsistency creeps back in.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-22: Combining Dynamo & Excel for a Full Project Data Dashboard
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-22',
    title: 'Project Data Dashboard',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the core mechanism for building a multi-sheet workbook, per the lesson?',
        options: [
          'Calling Excel.WriteToFile repeatedly against the same file path with different sheetName inputs',
          'Creating a separate workbook for every data set',
          'Using a single Watch node for all data',
          'Manually copy-pasting data between files'
        ],
        answer: 'Calling Excel.WriteToFile repeatedly against the same file path with different sheetName inputs'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends rebuilding the room, door, and sheet extraction logic from scratch for the dashboard rather than reusing earlier scripts.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'In what order should the Dashboard summary sheet be written relative to the detail sheets?',
        options: [
          'Last, once every underlying data set\'s counts are known',
          'First, before any data is collected',
          'It does not matter at all',
          'Only after the workbook is closed and reopened'
        ],
        answer: 'Last, once every underlying data set\'s counts are known'
      },
      {
        type: 'mcq',
        question: 'What should the Dashboard summary tab consist of, per the lesson?',
        options: [
          'A small, fixed set of headline metrics with simple Status values',
          'A full duplicate of every detail sheet',
          'Only raw, unformatted Element IDs',
          'A list of every warning in the model with no summarization'
        ],
        answer: 'A small, fixed set of headline metrics with simple Status values'
      },
      {
        type: 'truefalse',
        question: 'The lesson warns against combining outputs from separate extraction runs on separate days into one dashboard, since it can look coherent but be misleading.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'If any extraction step fails or is unexpectedly empty, the lesson says the script should ___ before writing the Dashboard summary.',
        answer: 'halt'
      },
      {
        type: 'mcq',
        question: 'What cadence does the lesson suggest for refreshing the dashboard on an active project like DPC2025?',
        options: ['Weekly', 'Once per year', 'Only when the project finishes', 'Every hour'],
        answer: 'Weekly'
      },
      {
        type: 'mcq',
        question: 'Where should the Dashboard tab be placed within the workbook, per the lesson?',
        options: [
          'First (leftmost), so it is the first thing anyone sees',
          'Last, hidden behind all detail sheets',
          'It should be a separate, unlinked file',
          'Placement does not matter'
        ],
        answer: 'First (leftmost), so it is the first thing anyone sees'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends using technical labels like "GetWarnings() Count" on the Dashboard sheet for accuracy.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Publishing the combined export script to which tool lets it be refreshed without the original author\'s involvement?',
        options: ['Dynamo Player', 'Dynamo Sandbox', 'The Package Manager', 'Revit Worksharing'],
        answer: 'Dynamo Player'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-23: Packaging & Distributing Scripts to the Team
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-23',
    title: 'Packaging & Distribution',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does a red, unresolved node on a teammate\'s machine almost always mean, per the lesson?',
        options: [
          'A missing dependency, not a broken script',
          'The script has a syntax error',
          'The teammate\'s Revit license expired',
          'The graph was saved incorrectly'
        ],
        answer: 'A missing dependency, not a broken script'
      },
      {
        type: 'mcq',
        question: 'Where can package dependencies of a graph be checked, according to the lesson?',
        options: [
          'File → Package Dependencies, or the package badge on node icons',
          'The Revit warnings dialog only',
          'The Windows Event Viewer',
          'The Excel.WriteToFile node properties'
        ],
        answer: 'File → Package Dependencies, or the package badge on node icons'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends publishing a custom node reused across multiple scripts (like the naming validator) as one shared internal package rather than bundling duplicate .dyf files everywhere.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What should be bundled together with a .dyn file that has a one-off dependency?',
        options: [
          'Any accompanying .dyf files and supporting reference files, plus a short readme',
          'Only the .dyn file itself, nothing else',
          'A copy of the entire Revit project',
          'The author\'s personal Dynamo settings file'
        ],
        answer: 'Any accompanying .dyf files and supporting reference files, plus a short readme'
      },
      {
        type: 'mcq',
        question: 'What versioning convention does the lesson recommend for office scripts?',
        options: ['ScriptName_vMAJOR.MINOR.dyn', 'ScriptName_Final_v2_ACTUAL.dyn', 'Just a date with no version number', 'Random UUID file names'],
        answer: 'ScriptName_vMAJOR.MINOR.dyn'
      },
      {
        type: 'fillblank',
        question: 'The lesson says to increment the ___ version when a script\'s inputs, outputs, or fundamental behaviour change in a way that could surprise an existing user.',
        answer: 'MAJOR'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends overwriting the previous version file in the shared folder each time a script updates.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What should usage documentation assume about its reader, per the lesson?',
        options: [
          'The reader knows Dynamo generally but knows nothing about this specific script',
          'The reader is the original author',
          'The reader has never used any software before',
          'The reader already knows every DPC2025 convention by memory'
        ],
        answer: 'The reader knows Dynamo generally but knows nothing about this specific script'
      },
      {
        type: 'mcq',
        question: 'What does the lesson\'s handover checklist say a script must pass before being considered ready to distribute?',
        options: [
          'It has been tested on a machine other than the author\'s own',
          'It has been reviewed by at least ten people',
          'It has zero comments in the Python code',
          'It has never been modified since first written'
        ],
        answer: 'It has been tested on a machine other than the author\'s own'
      },
      {
        type: 'truefalse',
        question: 'Documentation describing an old version of a script is, per the lesson, often worse than no documentation at all, since it actively misleads.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-24: Capstone — DPC2025 Full Automation Suite
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-24',
    title: 'Dynamo Practice Capstone',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What four stages does the DPC2025 Automation Suite combine into one pipeline?',
        options: [
          'Room numbering validation, sheet/view automation, consolidated data export, and issue log update',
          'Family loading, geometry creation, rendering, and printing',
          'IFC export, COBie export, PDF export, and DWG export',
          'Custom node creation, Python scripting, debugging, and QA only'
        ],
        answer: 'Room numbering validation, sheet/view automation, consolidated data export, and issue log update'
      },
      {
        type: 'mcq',
        question: 'Where does Stage 3 (data export) source its room data from, per the capstone?',
        options: [
          'Stage 1\'s corrected, in-memory room list, rather than re-querying the model independently',
          'A brand-new query that ignores Stage 1 entirely',
          'A manually retyped Excel file',
          'The previous week\'s dashboard export'
        ],
        answer: 'Stage 1\'s corrected, in-memory room list, rather than re-querying the model independently'
      },
      {
        type: 'truefalse',
        question: 'Newly generated sheets from Stage 2 are included in the same issue log write as pre-existing sheets in Stage 4.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Where are sheet names generated in Stage 2, according to the capstone?',
        options: [
          'Directly from the ISO 19650 naming schema at creation time',
          'By the user typing them in manually after creation',
          'Randomly, to be corrected in a later pass',
          'From the previous project\'s sheet set'
        ],
        answer: 'Directly from the ISO 19650 naming schema at creation time'
      },
      {
        type: 'mcq',
        question: 'Roughly how many genuinely variable inputs does the capstone suite expose as Player fields?',
        options: [
          'A handful (export path, issue description, date, suitability code)',
          'Over twenty separate fields',
          'Zero — everything is hardcoded',
          'One single combined text box'
        ],
        answer: 'A handful (export path, issue description, date, suitability code)'
      },
      {
        type: 'truefalse',
        question: 'The capstone applies defensive scripting patterns like null checks and try/except throughout the suite so it survives a real, messy project file.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'The finished suite should be published to the shared DPC2025 Player Tools folder with a clear ___ number, e.g. DPC2025_AutomationSuite_v1.0.dyn.',
        answer: 'version'
      },
      {
        type: 'mcq',
        question: 'What happens to a room whose correct number cannot be confidently auto-derived in Stage 1?',
        options: [
          'It is flagged for manual review rather than guessed',
          'It is deleted from the model automatically',
          'It is assigned a random number',
          'The whole script halts immediately'
        ],
        answer: 'It is flagged for manual review rather than guessed'
      },
      {
        type: 'mcq',
        question: 'According to the "What You Built" section, what does the capstone demonstrate about the course\'s individual skills?',
        options: [
          'They combine into real production tooling rather than remaining four disconnected scripts',
          'They are only useful in isolation and should never be combined',
          'Only Python scripting matters; the other lessons are optional',
          'Automation is unnecessary once a project reaches a milestone'
        ],
        answer: 'They combine into real production tooling rather than remaining four disconnected scripts'
      },
      {
        type: 'truefalse',
        question: 'The capstone lesson ends with a strict quiz-prep takeaway list instead of any narrative reflection, unlike other lessons in this course.',
        answer: false
      }
    ]
  }

];
