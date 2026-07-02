// ============================================================
// PYREVIT HANDS-ON PRACTICE — QUIZZES pyp-17 through pyp-24
// File: lib/pyrevitPracticeQuizzesContent/pyrevitPracticeQuizzes_17_24.js
// Index: lib/pyrevitPracticeQuizzesData.js
// ============================================================

export const pyrevitPracticeQuizzes_17_24 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-17: Build a Full ISO 19650 Naming Validator
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-17',
    title: 'ISO 19650 Naming Validator',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which built-in Python module does the naming validator use to check names against the DPC2025 convention?',
        options: ['json', 're', 'csv', 'math'],
        answer: 're'
      },
      {
        type: 'mcq',
        question: 'What does anchoring a regex pattern with caret and dollar sign accomplish?',
        options: [
          'It speeds up the script by skipping compilation',
          'It ensures the whole string must match, correctly rejecting partial matches',
          'It makes the pattern case-insensitive',
          'It allows the pattern to match across multiple lines'
        ],
        answer: 'It ensures the whole string must match, correctly rejecting partial matches'
      },
      {
        type: 'truefalse',
        question: 'Compiling a regex pattern once with re.compile outside the loop is faster than matching a raw pattern string on every element.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Why does the validator skip elements where IsTemplate is true?',
        options: [
          'View templates are not real views and would crash the script',
          'View templates do not carry the same naming convention as issued views and would create false-positive failures',
          'IsTemplate is required by the Revit API before any collector call',
          'Templates cannot be selected by out.linkify()'
        ],
        answer: 'View templates do not carry the same naming convention as issued views and would create false-positive failures'
      },
      {
        type: 'mcq',
        question: 'Which field does the validator check for sheets, rather than the Name property?',
        options: ['SheetNumber', 'Title', 'ViewType', 'Id'],
        answer: 'SheetNumber'
      },
      {
        type: 'fillblank',
        question: 'The pyRevit output object method that produces a clickable link selecting an element directly in the Revit view is called out.___().',
        answer: 'linkify'
      },
      {
        type: 'mcq',
        question: 'In the DPC2025 naming segments (Project-Originator-Volume-Level-Type-Role-Number), what does the fourth segment represent?',
        options: ['Volume', 'Level', 'Type', 'Role'],
        answer: 'Level'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends printing pass/fail summary counts only at the very end of the report, after all detail rows.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is the purpose of timestamping the CSV export file name?',
        options: [
          'It is required by the csv module',
          'It prevents each run from overwriting the previous audit, preserving a dated compliance history',
          'It makes the file open faster in Excel',
          'It is purely cosmetic and has no functional purpose'
        ],
        answer: 'It prevents each run from overwriting the previous audit, preserving a dated compliance history'
      },
      {
        type: 'mcq',
        question: 'Why does the lesson recommend writing both pass and fail rows to the CSV export, not just failures?',
        options: [
          'The csv module requires an equal number of pass and fail rows',
          'It gives a complete record of exactly what was checked at that point in time, useful if the standard is later questioned',
          'Pass rows are needed to calculate the regex pattern',
          'Revit will not export a file containing failures'
        ],
        answer: 'It gives a complete record of exactly what was checked at that point in time, useful if the standard is later questioned'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-18: Build an IFC Export Automation Tool
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-18',
    title: 'IFC Export Automation Tool',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which Revit API class holds IFC export settings such as schema version and base quantities?',
        options: ['DB.IFCExportOptions', 'DB.ViewSchedule', 'DB.FilteredElementCollector', 'DB.TransactionGroup'],
        answer: 'DB.IFCExportOptions'
      },
      {
        type: 'mcq',
        question: 'Which method call actually writes the IFC file to disk?',
        options: ['doc.Export(folder, name, ifc_options)', 'doc.Save()', 'doc.Regenerate()', 'DB.FilteredElementCollector(doc).Export()'],
        answer: 'doc.Export(folder, name, ifc_options)'
      },
      {
        type: 'truefalse',
        question: 'A transaction is required to call doc.Export because it modifies the currently open document.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What does the FileVersion property of IFCExportOptions control?',
        options: ['The IFC schema, such as IFC2x3 Coordination View or IFC4 Reference View', 'The Revit software version', 'The file compression level', 'The export folder path'],
        answer: 'The IFC schema, such as IFC2x3 Coordination View or IFC4 Reference View'
      },
      {
        type: 'mcq',
        question: 'Why does the lesson recommend defining the batch of export jobs as a list of dictionaries at the top of the script?',
        options: [
          'Dictionaries execute faster in Python than lists',
          'It makes adding or removing an export job a one-line change rather than a script rewrite',
          'The Revit API requires export jobs to be defined as dictionaries',
          'It is required for the try/except block to function'
        ],
        answer: 'It makes adding or removing an export job a one-line change rather than a script rewrite'
      },
      {
        type: 'fillblank',
        question: 'Wrapping each export call in try/___ prevents one failed file in a batch from halting the rest of the exports.',
        answer: 'except'
      },
      {
        type: 'truefalse',
        question: 'Reusing the same IFCExportOptions object across every job in the batch loop helps guarantee consistent settings across every exported file.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'According to the lesson, what should you do after a batch export reports success?',
        options: [
          'Nothing further is needed since doc.Export cannot fail silently',
          'Confirm the expected files exist and spot-check at least one in a neutral IFC viewer',
          'Immediately delete the export folder to save space',
          'Re-run the export exactly the same way a second time'
        ],
        answer: 'Confirm the expected files exist and spot-check at least one in a neutral IFC viewer'
      },
      {
        type: 'mcq',
        question: 'What does setting FilterViewId to a specific 3D view (instead of InvalidElementId) do?',
        options: [
          'It restricts the IFC export to only the elements visible in that view',
          'It deletes that view after export',
          'It forces the export to use IFC2x3 regardless of FileVersion',
          'It has no effect on the export'
        ],
        answer: 'It restricts the IFC export to only the elements visible in that view'
      },
      {
        type: 'truefalse',
        question: 'The file name passed to doc.Export should include the .ifc extension manually.',
        answer: false
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-19: Build a Multi-Model Audit Tool Across Linked Files
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-19',
    title: 'Multi-Model Audit Tool',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which Revit API class represents one placed instance of a linked model in the host document?',
        options: ['DB.RevitLinkInstance', 'DB.RevitLinkType', 'DB.ViewSheet', 'DB.FamilyInstance'],
        answer: 'DB.RevitLinkInstance'
      },
      {
        type: 'mcq',
        question: 'What must be checked before calling GetLinkDocument() on a link instance?',
        options: [
          'That the link\'s GetLinkedFileStatus() is Loaded',
          'That the link instance has at least one parameter',
          'That the host document has been saved',
          'That the link was placed less than a year ago'
        ],
        answer: 'That the link\'s GetLinkedFileStatus() is Loaded'
      },
      {
        type: 'truefalse',
        question: 'Calling GetLinkDocument() on an unloaded link raises an exception rather than returning None.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Why is the audit logic written as a single audit_document function that accepts any Document object?',
        options: [
          'So the identical logic can run against the host model and every linked model without duplicating code',
          'Because the Revit API requires all audit functions to be generic',
          'To avoid using FilteredElementCollector more than once',
          'Because linked documents cannot be queried with the same API calls as the host'
        ],
        answer: 'So the identical logic can run against the host model and every linked model without duplicating code'
      },
      {
        type: 'mcq',
        question: 'Why must GetWarnings() be called separately on each linked document?',
        options: [
          'Each linked document has its own separate warning set, not shared with the host',
          'GetWarnings() only works once per Revit session',
          'Warnings only exist in linked documents, never in the host',
          'It is not necessary — host warnings automatically include link warnings'
        ],
        answer: 'Each linked document has its own separate warning set, not shared with the host'
      },
      {
        type: 'fillblank',
        question: 'The standard pattern for walking every bound link instance uses DB.FilteredElementCollector(doc).OfClass(DB.RevitLinkInstance).To___().',
        answer: 'Elements'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends hardcoding an expected list of link names so the audit runs faster.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What should happen to a skipped, unloaded link in the combined report?',
        options: [
          'It should be recorded explicitly, not silently omitted',
          'It should be silently ignored to keep the report clean',
          'The whole audit should halt with an error',
          'It should be treated identically to a loaded link with zero warnings'
        ],
        answer: 'It should be recorded explicitly, not silently omitted'
      },
      {
        type: 'mcq',
        question: 'Why does the audit need no transaction against host or linked documents?',
        options: [
          'It is a read-only query and never writes to any document',
          'Transactions are only required for creating new links',
          'pyRevit automatically wraps every script in a transaction',
          'Linked documents do not support transactions at all'
        ],
        answer: 'It is a read-only query and never writes to any document'
      },
      {
        type: 'truefalse',
        question: 'A project can contain more RevitLinkInstance elements than distinct linked files if the same file is linked in more than once.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-20: Build a Shared Parameter Sync Tool
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-20',
    title: 'Shared Parameter Sync Tool',
    passingScore: 75,
    questions: [
      {
        type: 'truefalse',
        question: 'Shared parameter bindings automatically stay in sync between two separate project files.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What API pattern is used to read every currently bound parameter and its category set from a document?',
        options: [
          'Document.ParameterBindings.ForwardIterator()',
          'Document.GetAllParameters()',
          'DB.FilteredElementCollector(doc).OfClass(DB.ParameterElement)',
          'Application.GetBindings()'
        ],
        answer: 'Document.ParameterBindings.ForwardIterator()'
      },
      {
        type: 'mcq',
        question: 'Why does the comparison build the union of parameter names from both models rather than iterating just one model\'s list?',
        options: [
          'To catch a parameter that exists in one file but is completely absent from the other',
          'Because Python sets cannot handle single-model lists',
          'It is faster to compute a union than an intersection',
          'The Revit API requires unions for parameter comparisons'
        ],
        answer: 'To catch a parameter that exists in one file but is completely absent from the other'
      },
      {
        type: 'mcq',
        question: 'What is described as the actual source of truth for keeping shared parameter definitions consistent across DPC2025\'s models?',
        options: [
          'A version-controlled shared parameter text file referenced identically by every model',
          'Whichever model was opened most recently',
          'The architectural model, since it is always considered authoritative',
          'Each user\'s personal Revit settings'
        ],
        answer: 'A version-controlled shared parameter text file referenced identically by every model'
      },
      {
        type: 'fillblank',
        question: 'Before binding a missing parameter, the script must build a Category___ containing the target categories.',
        answer: 'Set'
      },
      {
        type: 'truefalse',
        question: 'Binding a parameter as an instance binding when it should have been a type binding creates a new mismatch rather than fixing the original one.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Why should proposed bindings be presented to a user for review before committing?',
        options: [
          'Auto-binding every detected mismatch without review risks masking an intentional model-specific difference',
          'The Revit API forbids binding parameters without a dialog box',
          'Review is only needed for type bindings, never instance bindings',
          'It has no real benefit and is purely a formality'
        ],
        answer: 'Auto-binding every detected mismatch without review risks masking an intentional model-specific difference'
      },
      {
        type: 'mcq',
        question: 'What creates the new binding object before it is inserted into ParameterBindings?',
        options: [
          'target_doc.Application.Create.NewInstanceBinding() or NewTypeBinding()',
          'DB.FilteredElementCollector(doc).NewBinding()',
          'forms.SelectFromList.show()',
          'DB.IFCExportOptions()'
        ],
        answer: 'target_doc.Application.Create.NewInstanceBinding() or NewTypeBinding()'
      },
      {
        type: 'truefalse',
        question: 'The binding step (adding a missing parameter) is read-only and requires no transaction.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Why does a schedule or tag referencing an unbound parameter often go unnoticed at first?',
        options: [
          'It fails silently or shows blank values rather than raising a visible error',
          'Revit automatically deletes schedules referencing unbound parameters',
          'Unbound parameters always cause Revit to crash immediately',
          'Tags cannot reference shared parameters at all'
        ],
        answer: 'It fails silently or shows blank values rather than raising a visible error'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-21: Bulletproofing PyRevit Scripts
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-21',
    title: 'Bulletproofing PyRevit Scripts',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What do LookupParameter and get_Parameter return when a requested parameter does not exist on an element?',
        options: ['None', 'An empty string', 'Zero', 'They raise an exception immediately'],
        answer: 'None'
      },
      {
        type: 'truefalse',
        question: 'Calling .AsString() directly on a None parameter reference raises an AttributeError.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What should be done before calling any method on the result of LookupParameter?',
        options: [
          'Check if the result is None',
          'Convert it to a string first',
          'Wrap it in a FilteredElementCollector',
          'Nothing — LookupParameter never returns an invalid result'
        ],
        answer: 'Check if the result is None'
      },
      {
        type: 'mcq',
        question: 'According to the lesson, what does a FilteredElementCollector returning zero elements for a category mean?',
        options: [
          'It is always a bug that must be fixed',
          'It is a normal, valid real-world outcome that downstream logic must tolerate',
          'The script has crashed',
          'The category does not exist in the Revit API'
        ],
        answer: 'It is a normal, valid real-world outcome that downstream logic must tolerate'
      },
      {
        type: 'fillblank',
        question: 'The lesson recommends using script.get____() rather than a bare print statement so error messages are distinguished in the pyRevit log.',
        answer: 'logger'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends wrapping the entire loop in one try/except rather than catching exceptions per element inside the loop.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Why should try/except not be used as a substitute for explicit None and len() checks?',
        options: [
          'Explicit checks are more precise and more informative when they trigger',
          'try/except is not supported in pyRevit\'s Python environment',
          'try/except always runs slower than an if statement',
          'None checks are required by the Revit API license'
        ],
        answer: 'Explicit checks are more precise and more informative when they trigger'
      },
      {
        type: 'mcq',
        question: 'What should a script do with skipped or failed elements, according to the lesson?',
        options: [
          'Track and report each one with a specific reason, never fail silently',
          'Delete them automatically from the model',
          'Ignore them since they are rare',
          'Only report the total count with no per-element detail'
        ],
        answer: 'Track and report each one with a specific reason, never fail silently'
      },
      {
        type: 'truefalse',
        question: 'The lesson considers a tool tested only against the clean DPC2025 sample file as ready for team distribution.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is the single most effective bulletproofing practice described in the lesson?',
        options: [
          'Testing against a messy, real, in-progress project file before trusting the tool',
          'Adding more print statements throughout the script',
          'Avoiding try/except entirely',
          'Running the script only during off-peak hours'
        ],
        answer: 'Testing against a messy, real, in-progress project file before trusting the tool'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-22: Project Setup Wizard
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-22',
    title: 'Project Setup Wizard',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which forms function prompts the user to type a value, such as the project name?',
        options: ['forms.ask_for_string', 'forms.SelectFromList.show', 'forms.alert', 'forms.pick_file'],
        answer: 'forms.ask_for_string'
      },
      {
        type: 'mcq',
        question: 'Which forms function presents a clean list-selection dialog, used for choosing a level configuration?',
        options: ['forms.SelectFromList.show', 'forms.ask_for_string', 'forms.alert', 'forms.pick_folder'],
        answer: 'forms.SelectFromList.show'
      },
      {
        type: 'truefalse',
        question: 'forms.ask_for_string returns None if the user cancels the dialog.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What does forms.alert with yes=True, no=True provide in the wizard\'s final step?',
        options: [
          'A final confirmation gate returning a boolean before anything is committed',
          'An automatic transaction rollback',
          'A list of available families',
          'The current Revit version number'
        ],
        answer: 'A final confirmation gate returning a boolean before anything is committed'
      },
      {
        type: 'mcq',
        question: 'Why are the four setup steps wrapped inside one revit.TransactionGroup rather than left as four independent transactions?',
        options: [
          'So the whole group can be rolled back together if any single step fails partway through',
          'TransactionGroup runs faster than individual transactions',
          'The Revit API requires TransactionGroup for any forms-based script',
          'It allows the wizard to skip the confirmation step'
        ],
        answer: 'So the whole group can be rolled back together if any single step fails partway through'
      },
      {
        type: 'fillblank',
        question: 'Nothing should touch the model until the user has explicitly ___ every choice made in the wizard.',
        answer: 'confirmed'
      },
      {
        type: 'truefalse',
        question: 'Each setup step (project info, levels, sheets, families) should still be kept in its own named Transaction inside the TransactionGroup, for a readable undo history.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which step in the wizard is described as the most likely real-world point of failure, warranting its own try/except?',
        options: [
          'Loading the standard family set from the shared library',
          'Prompting for the project name',
          'Selecting the level configuration',
          'Displaying the final confirmation alert'
        ],
        answer: 'Loading the standard family set from the shared library'
      },
      {
        type: 'mcq',
        question: 'What should happen if a step inside the TransactionGroup raises an unhandled exception?',
        options: [
          'Roll back the entire group so the project is left exactly as before the wizard ran',
          'Continue with the remaining steps and ignore the failure',
          'Automatically retry the failed step up to three times',
          'Save the document immediately to preserve partial progress'
        ],
        answer: 'Roll back the entire group so the project is left exactly as before the wizard ran'
      },
      {
        type: 'truefalse',
        question: 'The wizard presents a summary of what will be created before the final commit step, giving the user a chance to catch mistakes first.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-23: Deploy Your Extension — GitHub & Distribution
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-23',
    title: 'Deploying via GitHub',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which CLI command installs a shared extension directly from a Git URL?',
        options: [
          'pyrevit extend ui DPC2025Tools <git-url>',
          'pyrevit install --git <git-url>',
          'git clone --pyrevit <git-url>',
          'pyrevit attach <git-url>'
        ],
        answer: 'pyrevit extend ui DPC2025Tools <git-url>'
      },
      {
        type: 'mcq',
        question: 'What does pyRevit\'s "Update" button do under the hood for an installed Git-based extension?',
        options: ['Performs a git pull against the already-cloned local copy', 'Re-downloads the entire extension from scratch every time', 'Uninstalls and reinstalls Revit', 'Emails the maintainer for a new version'],
        answer: 'Performs a git pull against the already-cloned local copy'
      },
      {
        type: 'truefalse',
        question: 'A shared network folder copy of an extension automatically tracks a history of what changed and when, just like Git does.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is the alternative to the CLI for a teammate less comfortable with command-line tools?',
        options: [
          'The Extension Manager\'s "Add from URL" option',
          'Manually editing the Windows registry',
          'Emailing the .extension folder as a zip file',
          'There is no graphical alternative'
        ],
        answer: 'The Extension Manager\'s "Add from URL" option'
      },
      {
        type: 'fillblank',
        question: 'The lesson recommends tagging releases using a MAJOR.___ versioning convention, mirroring the companion Dynamo course.',
        answer: 'MINOR'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends tagging every single commit as a new release.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What should be excluded from the extension\'s Git repository via .gitignore?',
        options: [
          'Generated cache and compiled bytecode files like __pycache__ and .pyc',
          'All Python script files',
          'The bundle.yaml files',
          'The ribbon icons'
        ],
        answer: 'Generated cache and compiled bytecode files like __pycache__ and .pyc'
      },
      {
        type: 'mcq',
        question: 'Why does the lesson recommend granting at least one other team member write access to the repository?',
        options: [
          'So a fix or new tool does not depend on one specific person being available',
          'GitHub requires at least two contributors per repository',
          'It is required for the pyrevit extend command to work',
          'It automatically doubles the repository storage limit'
        ],
        answer: 'So a fix or new tool does not depend on one specific person being available'
      },
      {
        type: 'truefalse',
        question: 'A private GitHub repository is an appropriate default for an internal office toolkit.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'After installing or updating the extension, what is required for the new ribbon tab to appear?',
        options: [
          'A Revit restart or a pyRevit reload',
          'Reinstalling Windows',
          'Nothing — it appears instantly with no action needed',
          'Manually editing the tab.yaml file'
        ],
        answer: 'A Revit restart or a pyRevit reload'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-24: Capstone — DPC2025 PyRevit Toolkit
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-24',
    title: 'PyRevit Practice Capstone',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'How many function-based panels does the capstone organize the DPC2025 PyRevit Toolkit into?',
        options: ['Two', 'Three', 'Four', 'Six'],
        answer: 'Four'
      },
      {
        type: 'mcq',
        question: 'Which tool is placed in the Compliance panel?',
        options: ['The ISO 19650 Naming Validator', 'The Project Setup Wizard', 'The Model Health Dashboard', 'The IFC Export Automation Tool'],
        answer: 'The ISO 19650 Naming Validator'
      },
      {
        type: 'truefalse',
        question: 'The capstone rewrites each tool\'s underlying script logic from scratch during assembly into the toolkit.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Why does no additional bulletproofing work get needed at the integration stage?',
        options: [
          'Because the individual tools were already built with defensive patterns from Lesson 21',
          'Because Revit automatically bulletproofs every ribbon tool',
          'Because the toolkit only runs on the clean sample file',
          'Because bulletproofing is only relevant for Dynamo, not pyRevit'
        ],
        answer: 'Because the individual tools were already built with defensive patterns from Lesson 21'
      },
      {
        type: 'mcq',
        question: 'What convention is used in a pushbutton\'s __title__ to keep the ribbon label compact and two-line?',
        options: ['A line break (\\n)', 'An HTML <br> tag', 'A pipe character (|)', 'A semicolon'],
        answer: 'A line break (\\n)'
      },
      {
        type: 'fillblank',
        question: 'Before shipping, the assembled toolkit must be tested end-to-end against a messy, real, in-progress ___ file, not just a clean demo.',
        answer: 'project'
      },
      {
        type: 'truefalse',
        question: 'The capstone considers the rollout complete as soon as the extension is pushed to GitHub, regardless of whether anyone has pulled it yet.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'How is the finished toolkit deployed to the office, per the capstone?',
        options: [
          'Pushed to the shared Git repository, tagged as a release, and installed/updated via pyrevit extend or the Extension Manager',
          'Emailed individually to every team member as a zip file',
          'Copied manually to each machine\'s hard drive',
          'Published to the public Autodesk App Store'
        ],
        answer: 'Pushed to the shared Git repository, tagged as a release, and installed/updated via pyrevit extend or the Extension Manager'
      },
      {
        type: 'mcq',
        question: 'What replaces four separate manually-run scripts as a result of this capstone?',
        options: [
          'One polished, multi-panel, Git-distributed extension',
          'A single unorganized script containing all logic in one pushbutton',
          'A shared spreadsheet listing where each script lives',
          'A weekly manual email reminder to run each script'
        ],
        answer: 'One polished, multi-panel, Git-distributed extension'
      },
      {
        type: 'truefalse',
        question: 'The capstone\'s structure is described as ready for a future fifth tool to be added as a new panel rather than another scattered script.',
        answer: true
      }
    ]
  }

]
