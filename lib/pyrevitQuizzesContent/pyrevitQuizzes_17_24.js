// ============================================================
// PYREVIT QUIZZES — py-17 through py-24
// Merge these entries into your lib/pyrevitQuizzesData.js array
// ============================================================

export const pyrevitQuizzes_17_24 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ py-17: Building a Model Checker Tool
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-17',
    title: 'Model Checker Tool',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What value does an unenclosed or unplaced Room element typically report for Area?',
        options: ['A negative number', 'Zero', 'Null, never a number', 'The area of the largest room in the model'],
        answer: 'Zero'
      },
      {
        type: 'mcq',
        question: 'What does param.HasValue guard against that LookupParameter alone does not distinguish?',
        options: [
          'A parameter that exists but was never actually set',
          'A parameter belonging to the wrong category',
          'A parameter with a negative value',
          'A parameter that is read-only'
        ],
        answer: 'A parameter that exists but was never actually set'
      },
      {
        type: 'truefalse',
        question: 'The duplicate Mark check in the lesson groups elements by Mark value using a dictionary and flags any value shared by more than one element.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What does output.print_md() allow that a plain console print does not?',
        options: [
          'Rendering real Markdown formatting like headings, bold text, and bullet lists',
          'Running Python 3 syntax only',
          'Directly modifying Revit elements',
          'Bypassing the need for a FilteredElementCollector'
        ],
        answer: 'Rendering real Markdown formatting like headings, bold text, and bullet lists'
      },
      {
        type: 'mcq',
        question: 'What does output.linkify(element_id) produce in the pyRevit output window?',
        options: [
          'A clickable link that selects the element back in the active Revit view',
          'A hyperlink to an external website',
          'A new transaction',
          'A JSON export of the element'
        ],
        answer: 'A clickable link that selects the element back in the active Revit view'
      },
      {
        type: 'fillblank',
        question: 'output.print_table() renders an HTML-like ___ in the pyRevit output window, more readable than a wall of printed Element IDs.',
        answer: 'table'
      },
      {
        type: 'truefalse',
        question: 'According to the lesson, a model checker tool should also automatically fix any problems it finds in the same run.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Why should each of the three checks be written as an independent function?',
        options: [
          'Independent checks make the tool easy to extend and keep unrelated logic from interfering with each other',
          'Revit requires each check to be its own script.py file',
          'Functions run faster than inline code in every case',
          'It is required by FilteredElementCollector'
        ],
        answer: 'Independent checks make the tool easy to extend and keep unrelated logic from interfering with each other'
      },
      {
        type: 'mcq',
        question: 'Why should each check call be wrapped in try/except when assembling the pushbutton?',
        options: [
          'So one failing check does not prevent the rest of the report from printing',
          'Because Revit requires exception handling on every function',
          'To automatically fix the underlying issue',
          'To speed up the FilteredElementCollector query'
        ],
        answer: 'So one failing check does not prevent the rest of the report from printing'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends running all three checks first and collecting results, then printing the full report in one pass at the end.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-18: Automating Drawing Sheets & Title Block Data
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-18',
    title: 'Sheets & Titleblock Automation',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'How are ViewSheet elements collected, as opposed to most model elements?',
        options: [
          'By class, using OfClass(DB.ViewSheet), rather than by category',
          'By category, using OfCategory(DB.BuiltInCategory.OST_Sheets)',
          'They cannot be collected with FilteredElementCollector at all',
          'Only through the Insert tab dialog'
        ],
        answer: 'By class, using OfClass(DB.ViewSheet), rather than by category'
      },
      {
        type: 'mcq',
        question: 'What does wrapping the entire bulk titleblock update loop in one revit.Transaction() achieve?',
        options: [
          'It commits or rolls back as one atomic operation and produces a single undo step',
          'It runs the script twice for verification',
          'It automatically emails the report to the team',
          'It disables IsReadOnly checks'
        ],
        answer: 'It commits or rolls back as one atomic operation and produces a single undo step'
      },
      {
        type: 'truefalse',
        question: 'A titleblock family instance carries its own instance parameters separately from the ViewSheet element it is placed on.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What should always be checked before calling param.Set() on a titleblock or sheet parameter?',
        options: ['param.IsReadOnly', 'param.Definition.BuiltInParameter', 'param.StorageType only', 'Nothing — Set() always succeeds'],
        answer: 'param.IsReadOnly'
      },
      {
        type: 'fillblank',
        question: 'forms.ask_for_string() replaces hardcoded values with a simple ___ so the tool is reusable without editing code each time.',
        answer: 'prompt'
      },
      {
        type: 'mcq',
        question: 'What should happen if forms.ask_for_string() returns None?',
        options: [
          'The script should exit gracefully rather than proceed to overwrite sheets with a blank value',
          'The script should retry the prompt in an infinite loop',
          'The script should treat None as an empty string and continue',
          'The script should crash intentionally'
        ],
        answer: 'The script should exit gracefully rather than proceed to overwrite sheets with a blank value'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends showing a confirmation step before the transaction runs, summarizing the values about to be written.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which is the more direct source for reading Sheet Number and Sheet Name?',
        options: ['The ViewSheet element', 'The titleblock family instance', 'The Project Information element', 'A shared parameter file'],
        answer: 'The ViewSheet element'
      },
      {
        type: 'mcq',
        question: 'Why print a before/after summary to the output window after the transaction commits?',
        options: [
          'So the user can confirm the update took effect without opening every sheet manually',
          'Because Revit requires a summary to close the transaction',
          'To automatically undo the change',
          'To satisfy the ISO 19650 naming convention'
        ],
        answer: 'So the user can confirm the update took effect without opening every sheet manually'
      },
      {
        type: 'truefalse',
        question: 'Loading a titleblock update tool against a live production model without first testing on a duplicate is presented as good practice in the lesson.',
        answer: false
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-19: Building a Parameter Manager Tool for the Office
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-19',
    title: 'Parameter Manager Tool',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the core design principle behind the Parameter Manager tool?',
        options: [
          'Hardcode only the safety boundary (allowed categories); let the user choose category, parameter, and value at runtime',
          'Hardcode every category, parameter, and value for maximum speed',
          'Never allow any user input at all',
          'Only ever operate on the currently open view'
        ],
        answer: 'Hardcode only the safety boundary (allowed categories); let the user choose category, parameter, and value at runtime'
      },
      {
        type: 'mcq',
        question: 'What pyRevit forms function is used to let a user pick a category or a parameter from a list?',
        options: ['forms.SelectFromList', 'forms.ask_for_string', 'forms.alert', 'forms.CommandSwitchWindow'],
        answer: 'forms.SelectFromList'
      },
      {
        type: 'truefalse',
        question: 'The tool discovers available parameters by sampling the first element in the collected category and reading its Parameters collection.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Why filter the parameter picker to only parameters where not p.IsReadOnly?',
        options: [
          'So the picker never offers a parameter the tool could not write to anyway',
          'Because read-only parameters cannot be read either',
          'To make the list alphabetical',
          'Because FilteredElementCollector requires it'
        ],
        answer: 'So the picker never offers a parameter the tool could not write to anyway'
      },
      {
        type: 'mcq',
        question: 'What pyRevit forms function is used to offer a choice between "Current Selection" and "All Elements in Category"?',
        options: ['forms.CommandSwitchWindow.show()', 'forms.ask_for_string()', 'forms.SelectFromList with multiselect only', 'output.print_table()'],
        answer: 'forms.CommandSwitchWindow.show()'
      },
      {
        type: 'fillblank',
        question: 'When entering a new value, an empty string should be treated as a deliberate choice to ___ the parameter, and should be allowed through.',
        answer: 'clear'
      },
      {
        type: 'truefalse',
        question: 'Only a cancelled dialog (a None return) should stop the script, not an intentionally empty string value.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is recommended as a final safety step before the bulk update transaction runs?',
        options: [
          'A confirmation dialog summarizing category, parameter, new value, and target count',
          'Automatically emailing the office manager',
          'Disabling undo in Revit',
          'Deleting the ALLOWED_CATEGORIES dictionary'
        ],
        answer: 'A confirmation dialog summarizing category, parameter, new value, and target count'
      },
      {
        type: 'mcq',
        question: 'Why does the tool keep an explicit ALLOWED_CATEGORIES dictionary rather than allowing any category?',
        options: [
          'It is an intentional safety boundary limiting the tool to categories it has been tested against',
          'The Revit API only supports four categories total',
          'It improves script execution speed',
          'It is required to use forms.SelectFromList'
        ],
        answer: 'It is an intentional safety boundary limiting the tool to categories it has been tested against'
      },
      {
        type: 'truefalse',
        question: 'Logging each run\'s category, parameter, value, and count is recommended so a bulk change can be traced back after the fact.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-20: PyRevit & Shared Parameters
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-20',
    title: 'Shared Parameters — Bulk Assignment & Auditing',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which method opens the shared parameter file programmatically?',
        options: ['app.OpenSharedParameterFile()', 'doc.LoadFamily()', 'DB.FilteredElementCollector()', 'forms.ask_for_string()'],
        answer: 'app.OpenSharedParameterFile()'
      },
      {
        type: 'mcq',
        question: 'What does app.OpenSharedParameterFile() return if the file cannot be found or opened?',
        options: ['None', 'An empty string', 'It raises an unrecoverable exception every time', 'Zero'],
        answer: 'None'
      },
      {
        type: 'truefalse',
        question: 'A shared parameter file organizes its parameters into named Groups, and a parameter\'s definition is retrieved by searching within a group.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What object is required, along with an ExternalDefinition and a binding, to register a shared parameter binding?',
        options: ['A CategorySet', 'A ViewSheet', 'A FamilySymbol', 'An output.print_table() call'],
        answer: 'A CategorySet'
      },
      {
        type: 'mcq',
        question: 'What is the difference between NewInstanceBinding and NewTypeBinding?',
        options: [
          'InstanceBinding binds per-instance; TypeBinding binds per-type',
          'InstanceBinding only works on Rooms; TypeBinding works on everything else',
          'There is no difference, they are aliases',
          'TypeBinding is used only for shared parameter files, InstanceBinding for project parameters'
        ],
        answer: 'InstanceBinding binds per-instance; TypeBinding binds per-type'
      },
      {
        type: 'fillblank',
        question: 'Driving bindings off a BINDINGS table of (parameter, group, categories) tuples means adding a new office-standard parameter is a one-line change, not new ___.',
        answer: 'code'
      },
      {
        type: 'truefalse',
        question: 'doc.ParameterBindings supports simple indexing and "in" checks directly, so no iterator is needed to audit existing bindings.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What method walks every existing binding in a document for the audit script?',
        options: ['ParameterBindings.ForwardIterator()', 'ParameterBindings.GetAll()', 'doc.GetBindings()', 'DB.FilteredElementCollector(doc).OfClass(DB.ParameterBinding)'],
        answer: 'ParameterBindings.ForwardIterator()'
      },
      {
        type: 'mcq',
        question: 'Why is scripting shared parameter binding preferred over the Manage tab dialog for office-wide standards?',
        options: [
          'It guarantees the same parameters land on the same categories every time, at scale, across every project',
          'The Manage tab dialog cannot bind shared parameters at all',
          'Scripting is required by Autodesk for shared parameters',
          'It removes the need for a shared parameter file entirely'
        ],
        answer: 'It guarantees the same parameters land on the same categories every time, at scale, across every project'
      },
      {
        type: 'truefalse',
        question: 'Binding operations, like any model modification, must be wrapped in a transaction.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-21: Building a Family Load & Manage Tool
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-21',
    title: 'Family Load & Manage Tool',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which Document method loads a family file directly without opening the Insert tab dialog?',
        options: ['doc.LoadFamily(path)', 'doc.ImportFamily(path)', 'app.OpenSharedParameterFile(path)', 'forms.SelectFromList.show(path)'],
        answer: 'doc.LoadFamily(path)'
      },
      {
        type: 'mcq',
        question: 'What Python standard library function recursively collects file paths through subfolders for the batch load?',
        options: ['os.walk()', 're.compile()', 'forms.ask_for_string()', 'DB.FilteredElementCollector()'],
        answer: 'os.walk()'
      },
      {
        type: 'truefalse',
        question: 'Wrapping each individual family load in try/except prevents one corrupt or incompatible file from halting the entire batch.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which API class represents a family type, collected to enumerate every loaded type in the project?',
        options: ['DB.FamilySymbol', 'DB.FamilyInstance', 'DB.ViewSheet', 'DB.ExternalDefinition'],
        answer: 'DB.FamilySymbol'
      },
      {
        type: 'mcq',
        question: 'How does the tool identify unused family types (purge candidates)?',
        options: [
          'By comparing every loaded FamilySymbol Id against the set of GetTypeId() values from placed FamilyInstance elements',
          'By checking whether the family name contains "_OLD"',
          'By counting how many parameters the type has',
          'By reading the family\'s file size on disk'
        ],
        answer: 'By comparing every loaded FamilySymbol Id against the set of GetTypeId() values from placed FamilyInstance elements'
      },
      {
        type: 'fillblank',
        question: 'A family type found to have zero placed instances is reported as a candidate for the built-in Purge ___ command, not deleted directly by the tool.',
        answer: 'Unused'
      },
      {
        type: 'truefalse',
        question: 'The unused-type check in the lesson covers all Revit categories equally, including system families and annotation categories.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Why should the office library be referenced at a shared network path rather than a personal drive letter?',
        options: [
          'So the batch-load script runs identically and portably for every team member',
          'Personal drive letters are faster to read from',
          'Revit blocks scripts from reading personal drives',
          'It is required by doc.LoadFamily()'
        ],
        answer: 'So the batch-load script runs identically and portably for every team member'
      },
      {
        type: 'mcq',
        question: 'What lets a user deliberately choose a filtered subset of families before loading, instead of blindly loading everything found?',
        options: ['forms.SelectFromList with multiselect enabled', 'output.linkify()', 'ParameterBindings.ForwardIterator()', 're.compile()'],
        answer: 'forms.SelectFromList with multiselect enabled'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends keeping the Load and Report tools in the same panel since they are typically used in sequence.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-22: ISO 19650 Compliance Checker
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-22',
    title: 'ISO 19650 Compliance Checker',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What Python module gives pyRevit real regular expression support for naming validation?',
        options: ['re', 'os', 'forms', 'collections'],
        answer: 're'
      },
      {
        type: 'truefalse',
        question: 'Compiling the naming pattern once with re.compile() is more efficient than calling re.match() with a raw pattern string on every iteration.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What do the ^ and $ anchors in the naming regex ensure?',
        options: [
          'The whole name matches the pattern end-to-end, not just a fragment inside it',
          'The pattern is case-insensitive',
          'The regex runs faster',
          'Only numeric characters are matched'
        ],
        answer: 'The whole name matches the pattern end-to-end, not just a fragment inside it'
      },
      {
        type: 'mcq',
        question: 'Why must view collections exclude v.IsTemplate before checking naming compliance?',
        options: [
          'View templates are not real, nameable deliverables and should not be checked against the naming convention',
          'View templates cannot be collected with FilteredElementCollector',
          'View templates always pass the naming check automatically',
          'IsTemplate determines whether the view is placed on a sheet'
        ],
        answer: 'View templates are not real, nameable deliverables and should not be checked against the naming convention'
      },
      {
        type: 'fillblank',
        question: 'output.___(element_id) renders a clickable link in the output window that selects the corresponding element in the active Revit view.',
        answer: 'linkify'
      },
      {
        type: 'mcq',
        question: 'What does the field-level diagnosis function do that the main PATTERN check alone does not?',
        options: [
          'Identifies exactly which field in the name failed to match its expected pattern',
          'Automatically renames the non-compliant sheet',
          'Deletes the sheet if it fails',
          'Converts the name to lowercase before checking'
        ],
        answer: 'Identifies exactly which field in the name failed to match its expected pattern'
      },
      {
        type: 'truefalse',
        question: 'The lesson presents Python\'s re module as a real advantage over Dynamo\'s core-node string-chain workaround for multi-field naming checks.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'In the DPC2025 naming pattern example, what does the Role field represent?',
        options: ['The discipline/role code, such as A for Architectural', 'The sheet size', 'The project number', 'The revision number'],
        answer: 'The discipline/role code, such as A for Architectural'
      },
      {
        type: 'mcq',
        question: 'Why are sheets and views reported in separate tables in the compliance report?',
        options: [
          'They may follow related but distinct naming rules under the project BEP',
          'pyRevit cannot print more than one category per table',
          'Views never have names in Revit',
          'Sheets cannot be linkified'
        ],
        answer: 'They may follow related but distinct naming rules under the project BEP'
      },
      {
        type: 'truefalse',
        question: 'The naming pattern used in this lesson is presented as a universal constant that never changes between projects.',
        answer: false
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-23: Deploying a Custom PyRevit Extension to the Team
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-23',
    title: 'Deploying a PyRevit Extension via Git',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What CLI command clones a Git repository and registers it as a pyRevit UI extension in one step?',
        options: ['pyrevit extend ui NAME URL', 'pyrevit attach clone URL', 'pyrevit install extension URL', 'git pyrevit add URL'],
        answer: 'pyrevit extend ui NAME URL'
      },
      {
        type: 'mcq',
        question: 'What GUI alternative achieves the same result as the pyrevit extend ui command?',
        options: [
          'The pyRevit Extension Manager\'s "Add from URL" option',
          'The Revit Insert tab\'s Load Family dialog',
          'The Manage tab\'s Shared Parameters dialog',
          'Dynamo Player'
        ],
        answer: 'The pyRevit Extension Manager\'s "Add from URL" option'
      },
      {
        type: 'truefalse',
        question: 'Git tracks every change to the extension as a commit with a message, author, and timestamp, unlike silently overwriting a file on a shared drive.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What operation runs under the hood when a team member clicks "Update" in the Extension Manager?',
        options: ['A git pull on the extension\'s local clone', 'A full re-download and reinstall of pyRevit itself', 'doc.LoadFamily()', 'A re-run of pyrevit attach only'],
        answer: 'A git pull on the extension\'s local clone'
      },
      {
        type: 'fillblank',
        question: 'pyrevit ___ configures which pyRevit clone (core engine version) is connected to a given Revit version.',
        answer: 'attach'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends that every team member freely edit the shared extension clone directly to make quick fixes.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is recommended to give the office a specific, known-good state to reference or roll back to?',
        options: ['Tagging stable releases in Git (e.g., v1.0, v1.1)', 'Deleting old commits after each update', 'Renaming the repository after each fix', 'Disabling the README file'],
        answer: 'Tagging stable releases in Git (e.g., v1.0, v1.1)'
      },
      {
        type: 'mcq',
        question: 'What governance practice is suggested for who can push changes to the shared toolkit?',
        options: [
          'A small number of designated maintainers with push access, with others proposing changes via pull/merge requests',
          'Every team member should have unrestricted push access',
          'Only the original script author may ever open the repository',
          'No governance is needed since Git prevents all mistakes automatically'
        ],
        answer: 'A small number of designated maintainers with push access, with others proposing changes via pull/merge requests'
      },
      {
        type: 'truefalse',
        question: 'pyRevit extension search path settings and pyrevit attach configuration need to be consistent across machines for the shared extension to behave the same office-wide.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Why is a shared network drive folder alone considered insufficient compared to Git for team-wide extension distribution?',
        options: [
          'It has no version history and is prone to conflicting or silently overwritten edits',
          'Shared drives cannot store .py files',
          'pyRevit cannot read scripts from a network drive at all',
          'Shared drives are always slower than Git regardless of network conditions'
        ],
        answer: 'It has no version history and is prone to conflicting or silently overwritten edits'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-24: Capstone — DPC2025 PyRevit Studio Toolkit
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-24',
    title: 'PyRevit Capstone — DPC2025 Studio Toolkit',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'How many panels does the capstone brief define for the DPC2025 PyRevit Studio extension?',
        options: ['Four (QA, Sheets, Parameters, Compliance)', 'Two (Tools and Reports)', 'Six', 'One single panel containing every button'],
        answer: 'Four (QA, Sheets, Parameters, Compliance)'
      },
      {
        type: 'mcq',
        question: 'Which two tools are grouped together under the Parameters panel in the capstone?',
        options: [
          'Parameter Manager and Shared Param Audit',
          'Model Checker and Titleblock Update',
          'ISO 19650 Checker and Family Load tool',
          'Titleblock Update and Model Checker'
        ],
        answer: 'Parameter Manager and Shared Param Audit'
      },
      {
        type: 'truefalse',
        question: 'The capstone recommends rewriting each tool\'s core logic from scratch rather than reusing the tested scripts from earlier lessons.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is the purpose of the shared dpc2025_config.py module in the capstone?',
        options: [
          'Centralizing office-standard constants like the shared parameter file path and naming pattern so one edit updates every tool',
          'Storing the Revit API import statements only',
          'Replacing the need for FilteredElementCollector',
          'Holding the extension\'s icon image files'
        ],
        answer: 'Centralizing office-standard constants like the shared parameter file path and naming pattern so one edit updates every tool'
      },
      {
        type: 'fillblank',
        question: 'Any shared helper code used by more than one tool belongs in a ___ subfolder inside the extension, imported by each script.',
        answer: 'lib'
      },
      {
        type: 'mcq',
        question: 'Which tools are explicitly described as read-only reporting tools that should stay distinct from model-modifying tools?',
        options: [
          'Model Checker, Shared Parameter Auditor, and ISO 19650 Checker',
          'Titleblock Update and Parameter Manager',
          'All five tools equally modify the model',
          'Only the Model Checker'
        ],
        answer: 'Model Checker, Shared Parameter Auditor, and ISO 19650 Checker'
      },
      {
        type: 'truefalse',
        question: 'The capstone recommends having at least one other team member test-install the extension from the Git repository before calling it ready.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is recommended once the team-tested version of the extension is confirmed working?',
        options: [
          'Tagging the initial release as v1.0 to give the office a known-good baseline',
          'Deleting the Git repository and starting fresh',
          'Merging all five tools into a single script.py file',
          'Removing the README file'
        ],
        answer: 'Tagging the initial release as v1.0 to give the office a known-good baseline'
      },
      {
        type: 'mcq',
        question: 'According to the "What You Built" reflection, what is the actual skill this course built toward?',
        options: [
          'Recognising a repetitive, rule-based task and having the judgment and range to automate it end to end as maintainable office infrastructure',
          'Memorising every method in the Revit API',
          'Writing the shortest possible script regardless of readability',
          'Avoiding the use of transactions wherever possible'
        ],
        answer: 'Recognising a repetitive, rule-based task and having the judgment and range to automate it end to end as maintainable office infrastructure'
      },
      {
        type: 'truefalse',
        question: 'Once deployed, any future fix to the DPC2025 PyRevit Studio ships as a new commit, and the team receives it by clicking Update.',
        answer: true
      }
    ]
  }

];
