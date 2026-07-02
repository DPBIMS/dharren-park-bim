// ============================================================
// PYREVIT QUIZZES — py-9 through py-16
// Merge these entries into your lib/pyrevitQuizzesData.js array
// ============================================================

export const pyrevitQuizzes_9_16 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ py-9: Building Your First Custom PyRevit Button
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-9',
    title: 'Building Your First PyRevit Button',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the correct folder nesting order for a new pyRevit extension?',
        options: [
          '.extension containing .tab containing .panel containing .pushbutton',
          '.pushbutton containing .panel containing .tab containing .extension',
          '.panel containing .extension containing .tab containing .pushbutton',
          '.tab containing .pushbutton containing .extension containing .panel'
        ],
        answer: '.extension containing .tab containing .panel containing .pushbutton'
      },
      {
        type: 'mcq',
        question: 'Which two files, at minimum, typically live inside a .pushbutton folder?',
        options: ['script.py and icon.png', 'bundle.yaml and readme.txt', 'main.exe and config.ini', 'index.html and style.css'],
        answer: 'script.py and icon.png'
      },
      {
        type: 'truefalse',
        question: 'pyRevit requires a separate registration file or database entry, in addition to the folder structure, for a new button to appear.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What must the icon file be named for pyRevit to display it automatically?',
        options: ['icon.png', 'button.png', 'logo.jpg', 'image.ico'],
        answer: 'icon.png'
      },
      {
        type: 'mcq',
        question: 'Which optional file lets you set a button\'s title, tooltip, and context without editing script.py?',
        options: ['bundle.yaml', 'config.json', 'settings.ini', 'manifest.xml'],
        answer: 'bundle.yaml'
      },
      {
        type: 'fillblank',
        question: 'The special script.py variable ___ controls the tooltip text shown when hovering over a button.',
        answer: '__doc__'
      },
      {
        type: 'mcq',
        question: 'What does the __context__ special variable (or the context key in bundle.yaml) control?',
        options: [
          'When the button is enabled, such as only when a certain category is selected',
          'The color of the button icon',
          'The Revit version required to install pyRevit',
          'The number of times a script can be run per session'
        ],
        answer: 'When the button is enabled, such as only when a certain category is selected'
      },
      {
        type: 'truefalse',
        question: 'Clicking Reload on the pyRevit ribbon lets new or edited scripts be picked up without restarting Revit.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What determines a button\'s displayed title if bundle.yaml and __title__ are both absent?',
        options: [
          'pyRevit derives a label from the folder name',
          'The button remains permanently unlabeled',
          'Revit assigns a random name',
          'The script fails to load at all'
        ],
        answer: 'pyRevit derives a label from the folder name'
      },
      {
        type: 'mcq',
        question: 'Where can a new extension be placed so pyRevit is able to find and load it?',
        options: [
          'Inside pyRevit\'s existing extensions directory, or a custom path added via pyRevit Settings',
          'Anywhere on disk, since pyRevit scans the entire hard drive automatically',
          'Only inside the Revit installation folder itself',
          'Extensions cannot be added after pyRevit is installed'
        ],
        answer: 'Inside pyRevit\'s existing extensions directory, or a custom path added via pyRevit Settings'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-10: Error Handling & Debugging PyRevit Scripts
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-10',
    title: 'Error Handling & Debugging PyRevit Scripts',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does pyRevit\'s Output window automatically show when script.py raises an unhandled exception?',
        options: [
          'A full Python traceback including file and line number',
          'Nothing — the script simply stops silently',
          'Only a generic "error occurred" message with no detail',
          'A prompt to reinstall pyRevit'
        ],
        answer: 'A full Python traceback including file and line number'
      },
      {
        type: 'truefalse',
        question: 'pyRevit\'s traceback detail is described as much faster feedback than Dynamo\'s node-level error icons.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What function provides structured logging with severity levels like info, debug, and error?',
        options: ['script.get_logger()', 'forms.alert()', 'revit.Transaction()', 'DB.FilteredElementCollector()'],
        answer: 'script.get_logger()'
      },
      {
        type: 'mcq',
        question: 'Which function surfaces a friendly message to the user instead of a raw traceback?',
        options: ['forms.alert("message")', 'script.get_logger()', 'logger.debug()', 'DB.Transaction.Start()'],
        answer: 'forms.alert("message")'
      },
      {
        type: 'fillblank',
        question: 'try/except blocks let a script catch and handle errors gracefully instead of ___.',
        answer: 'crashing'
      },
      {
        type: 'truefalse',
        question: 'A bare except: that catches every possible error is always the recommended approach, with no downsides.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is the recommended iteration workflow after editing script.py in an external editor?',
        options: [
          'Save the file, click Reload in Revit if needed, then click the button again',
          'Restart Revit and reinstall pyRevit',
          'Close Revit entirely and reopen the model',
          'Rename the .pushbutton folder each time'
        ],
        answer: 'Save the file, click Reload in Revit if needed, then click the button again'
      },
      {
        type: 'mcq',
        question: 'Which logger method is best suited to fine-grained detail useful mainly during development?',
        options: ['logger.debug', 'logger.error', 'logger.critical', 'logger.info'],
        answer: 'logger.debug'
      },
      {
        type: 'truefalse',
        question: 'Python typically prints the deepest, most specific part of an error at the very bottom of a traceback.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'An AttributeError referencing a "NoneType" object commonly indicates what kind of problem?',
        options: [
          'A parameter lookup (like LookupParameter) returned None because the name was misspelled or missing',
          'The Revit license has expired',
          'The icon.png file is corrupted',
          'The extension folder was renamed'
        ],
        answer: 'A parameter lookup (like LookupParameter) returned None because the name was misspelled or missing'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-11: Collecting & Filtering Elements at Project Scale
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-11',
    title: 'Collecting & Filtering Elements at Project Scale',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which collector call excludes type elements, keeping only placed instances?',
        options: ['WhereElementIsNotElementType()', 'OfCategory()', 'ToElementIds()', 'WherePasses()'],
        answer: 'WhereElementIsNotElementType()'
      },
      {
        type: 'mcq',
        question: 'What does WherePasses(DB.ElementParameterFilter(...)) allow a script to do?',
        options: [
          'Filter elements by parameter value inside the collector itself, rather than in a Python loop afterward',
          'Delete all elements matching a category',
          'Automatically create a Transaction',
          'Convert IronPython to CPython'
        ],
        answer: 'Filter elements by parameter value inside the collector itself, rather than in a Python loop afterward'
      },
      {
        type: 'truefalse',
        question: 'Re-running the same FilteredElementCollector query inside a loop that executes many times is recommended for best performance.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'When is ToElementIds() preferable to ToElements()?',
        options: [
          'When you only need a count or IDs for further ID-based operations',
          'When you need to read geometry or parameter values directly from each element',
          'ToElementIds() is always slower and should be avoided',
          'They are functionally identical in every situation'
        ],
        answer: 'When you only need a count or IDs for further ID-based operations'
      },
      {
        type: 'fillblank',
        question: 'The recommended performance habit is to collect ___ and reuse the result rather than re-querying repeatedly.',
        answer: 'once'
      },
      {
        type: 'truefalse',
        question: 'Combining OfCategory and OfClass together is usually faster and more precise than using either alone.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What can be used to combine the results of two separately collected sets, such as an intersection?',
        options: [
          'Convert both to sets of ElementId and use Python set operations',
          'Directly apply Python + between the two collector objects',
          'Call ToElements() twice on the same collector',
          'There is no way to combine two collector results'
        ],
        answer: 'Convert both to sets of ElementId and use Python set operations'
      },
      {
        type: 'mcq',
        question: 'What is a common cause of unexpectedly getting extra results from a category-based collector query?',
        options: [
          'Forgetting WhereElementIsNotElementType(), so type elements are included alongside instances',
          'Using ToElementIds() instead of ToElements()',
          'Using OfClass() at all',
          'Running the script twice'
        ],
        answer: 'Forgetting WhereElementIsNotElementType(), so type elements are included alongside instances'
      },
      {
        type: 'truefalse',
        question: 'Even a single unfiltered collector call with no OfCategory or OfClass can be noticeably slow on a very large model.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is the general decision rule for choosing between ToElements() and ToElementIds()?',
        options: [
          'If you need to read or use the element itself, use ToElements(); if you only need to count or reference it, use ToElementIds()',
          'Always default to ToElements() regardless of the situation',
          'Always default to ToElementIds() regardless of the situation',
          'The choice has no effect on performance'
        ],
        answer: 'If you need to read or use the element itself, use ToElements(); if you only need to count or reference it, use ToElementIds()'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-12: Creating & Modifying Elements with the Revit API
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-12',
    title: 'Creating & Modifying Elements with the Revit API',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What must wrap every element creation or modification call in the Revit API?',
        options: ['A revit.Transaction context manager', 'A forms.alert() call', 'A script.get_logger() call', 'An icon.png file'],
        answer: 'A revit.Transaction context manager'
      },
      {
        type: 'mcq',
        question: 'What does the string passed into revit.Transaction("Create Family Instance") become?',
        options: [
          'The label shown in Revit\'s Undo history',
          'The name of the script.py file',
          'The tooltip for the pushbutton',
          'The title of the Output window'
        ],
        answer: 'The label shown in Revit\'s Undo history'
      },
      {
        type: 'truefalse',
        question: 'A FamilySymbol may need to be Activate()-d before it can be placed for the first time in a model.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which API call creates a new family instance at a given point?',
        options: ['doc.Create.NewFamilyInstance(...)', 'DB.ViewSheet.Create(...)', 'forms.ask_for_string(...)', 'script.get_logger(...)'],
        answer: 'doc.Create.NewFamilyInstance(...)'
      },
      {
        type: 'fillblank',
        question: 'ElementTransformUtils.___Element(doc, elementId, vector) moves an existing element by a given vector inside a transaction.',
        answer: 'Move'
      },
      {
        type: 'truefalse',
        question: 'It is generally better to wrap a whole batch of edits in one shared transaction rather than opening a new transaction per element.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is the general three-part pattern described for scripts that change a model?',
        options: [
          'Collect existing or create new, mutate, commit inside a transaction',
          'Import, export, delete',
          'Reload, click, alert',
          'Activate, deactivate, reactivate'
        ],
        answer: 'Collect existing or create new, mutate, commit inside a transaction'
      },
      {
        type: 'mcq',
        question: 'What happens if an unhandled exception is raised partway through a shared transaction?',
        options: [
          'The whole transaction rolls back rather than leaving the model half-modified',
          'Only the failed line is skipped and the rest commits normally',
          'Revit crashes immediately with no recovery',
          'The transaction commits automatically regardless of the error'
        ],
        answer: 'The whole transaction rolls back rather than leaving the model half-modified'
      },
      {
        type: 'truefalse',
        question: 'Setting a parameter value with LookupParameter(...).Set(...) can succeed outside of an open transaction.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Why is it recommended to keep validation and error-prone logic outside the transaction block where possible?',
        options: [
          'So the transaction only contains already-validated writes, making failures easier to reason about',
          'Because transactions cannot contain more than one line of code',
          'Because validation logic is not allowed in IronPython',
          'Because transactions automatically delete any variables created inside them'
        ],
        answer: 'So the transaction only contains already-validated writes, making failures easier to reason about'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-13: Building UI Forms — Input Dialogs & User Interaction
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-13',
    title: 'Building UI Forms — Input Dialogs & User Interaction',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which pyrevit.forms function prompts the user for a single line of typed text?',
        options: ['forms.ask_for_string()', 'forms.SelectFromList.show()', 'forms.pick_file()', 'forms.ProgressBar()'],
        answer: 'forms.ask_for_string()'
      },
      {
        type: 'mcq',
        question: 'What does multiselect=True do when passed to forms.SelectFromList.show()?',
        options: [
          'Allows the user to check multiple items, returning a list of selected values',
          'Disables the search box',
          'Forces the user to select at least one option',
          'Automatically selects every option by default'
        ],
        answer: 'Allows the user to check multiple items, returning a list of selected values'
      },
      {
        type: 'truefalse',
        question: 'forms.pick_file() and forms.save_file() open native file dialogs and return a path string.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is the primary purpose of forms.ProgressBar()?',
        options: [
          'To give visible progress feedback during long loops',
          'To create a new Revit view',
          'To read parameter values from elements',
          'To write CSV files to disk'
        ],
        answer: 'To give visible progress feedback during long loops'
      },
      {
        type: 'fillblank',
        question: 'Inside a ProgressBar loop, the method ___ updates both the bar and percentage shown to the user.',
        answer: 'update_progress'
      },
      {
        type: 'truefalse',
        question: 'forms.CommandSwitchWindow.show() is best suited to a long, dynamically generated list of hundreds of options.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What does forms.alert() with yes=True, no=True allow a script to do?',
        options: [
          'Ask a yes/no confirmation before a destructive bulk operation',
          'Automatically read a CSV file',
          'Skip the need for a Transaction',
          'Display an icon on the ribbon'
        ],
        answer: 'Ask a yes/no confirmation before a destructive bulk operation'
      },
      {
        type: 'mcq',
        question: 'What is emphasized as the key benefit of the pyrevit.forms module?',
        options: [
          'It lets developers build real interactive tools without writing raw WPF/XAML',
          'It replaces the need for the Revit API entirely',
          'It automatically fixes bugs in script.py',
          'It only works with the CPython engine'
        ],
        answer: 'It lets developers build real interactive tools without writing raw WPF/XAML'
      },
      {
        type: 'truefalse',
        question: 'Most forms functions return None (or an equivalent empty result) when the user cancels the dialog.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which function is best suited to letting a user pick between a small, fixed number of named modes?',
        options: ['forms.CommandSwitchWindow.show()', 'forms.pick_file()', 'forms.ProgressBar()', 'forms.ask_for_string()'],
        answer: 'forms.CommandSwitchWindow.show()'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-14: Working with Views, Sheets & Viewports in PyRevit
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-14',
    title: 'Working with Views, Sheets & Viewports in PyRevit',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which API call creates a new plan view for a given level and View Family Type?',
        options: ['DB.ViewPlan.Create(doc, viewFamilyTypeId, levelId)', 'DB.ViewSheet.Create(doc, titleblockTypeId)', 'DB.Viewport.Create(doc, sheetId, viewId, point)', 'doc.Create.NewFamilyInstance(...)'],
        answer: 'DB.ViewPlan.Create(doc, viewFamilyTypeId, levelId)'
      },
      {
        type: 'mcq',
        question: 'Which API call creates a new sheet using a titleblock Family Type?',
        options: ['DB.ViewSheet.Create(doc, titleblockTypeId)', 'DB.ViewPlan.Create(doc, viewFamilyTypeId, levelId)', 'DB.Viewport.Create(doc, sheetId, viewId, point)', 'forms.pick_file()'],
        answer: 'DB.ViewSheet.Create(doc, titleblockTypeId)'
      },
      {
        type: 'truefalse',
        question: 'DB.Viewport.Create places an existing view onto an existing sheet at a specified point.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What happens if you attempt to place a view on a sheet when it is already placed on another sheet?',
        options: [
          'An error is raised, since a view can only be placed on one sheet at a time',
          'The view is automatically duplicated',
          'The original sheet placement is silently removed with no warning',
          'Nothing happens; Revit ignores the second placement attempt'
        ],
        answer: 'An error is raised, since a view can only be placed on one sheet at a time'
      },
      {
        type: 'fillblank',
        question: 'A View element exposes its display name directly through a settable ___ property.',
        answer: 'Name'
      },
      {
        type: 'truefalse',
        question: 'ViewSheet.Name and ViewSheet.SheetNumber are both directly settable properties on the object.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'How should a property like "Approved By" typically be set on a sheet?',
        options: [
          'Via LookupParameter("Approved By").Set(...), since it is not a directly settable property',
          'Via sheet.ApprovedBy = ...',
          'It cannot be set programmatically at all',
          'Only through bundle.yaml'
        ],
        answer: 'Via LookupParameter("Approved By").Set(...), since it is not a directly settable property'
      },
      {
        type: 'mcq',
        question: 'What is the correct order of operations for creating a full sheet with a placed view?',
        options: [
          'Create the view, create the sheet, then call Viewport.Create to link them',
          'Call Viewport.Create first, then create the view and sheet afterward',
          'Create the sheet, delete it, then create the view',
          'Order does not matter at all'
        ],
        answer: 'Create the view, create the sheet, then call Viewport.Create to link them'
      },
      {
        type: 'truefalse',
        question: 'Setting a View.Name to a name already used by another view in the model raises an error, since view names must be unique.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is the recommended approach for determining whether a property is directly settable or requires Parameter access?',
        options: [
          'Try the direct property first, and fall back to LookupParameter if it does not exist on the class',
          'Assume every property always requires LookupParameter',
          'Assume every property is always directly settable',
          'There is no way to know without contacting Autodesk support'
        ],
        answer: 'Try the direct property first, and fall back to LookupParameter if it does not exist on the class'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-15: Reading & Writing Excel Data from PyRevit Scripts
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-15',
    title: 'Reading & Writing Excel Data from PyRevit Scripts',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which built-in Python module works identically under IronPython with no extra dependencies for simple data exchange?',
        options: ['csv', 'openpyxl', 'pandas', 'win32com'],
        answer: 'csv'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends CSV as the default choice when Excel-specific formatting is not required.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is a key limitation of CSV files compared to true Excel workbooks?',
        options: [
          'CSV cannot represent multiple worksheets, formatting, or formulas',
          'CSV files cannot be opened by any software besides Dynamo',
          'CSV files can only store numbers, never text',
          'CSV requires IronPython to be uninstalled first'
        ],
        answer: 'CSV cannot represent multiple worksheets, formatting, or formulas'
      },
      {
        type: 'mcq',
        question: 'Which library is commonly used when a script genuinely needs full Excel formatting or multiple tabs?',
        options: ['openpyxl', 'csv', 'json', 'sqlite3'],
        answer: 'openpyxl'
      },
      {
        type: 'fillblank',
        question: 'Setting engine: ___ in a script\'s bundle.yaml switches that script to run under pyRevit\'s CPython engine.',
        answer: 'cpython3'
      },
      {
        type: 'truefalse',
        question: 'Under the default IronPython engine, a script can freely import full CPython-only libraries like pandas with no special configuration.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What data type does every value come back as when reading a CSV file with the csv module?',
        options: ['Strings', 'Integers', 'Booleans', 'Element objects'],
        answer: 'Strings'
      },
      {
        type: 'mcq',
        question: 'Which round-trip safeguard still applies regardless of whether CSV or Excel is used?',
        options: [
          'Match re-imported rows back to elements using a stable identifier, never by row position',
          'Always skip testing on a subset before a full run',
          'Never include an Element Id column in an export',
          'Always assume Excel auto-formatting will not change any values'
        ],
        answer: 'Match re-imported rows back to elements using a stable identifier, never by row position'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends switching every script to the CPython engine by default, regardless of whether it needs a CPython-only library.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Besides using a CPython library, what other approach is mentioned for working with true Excel files under IronPython?',
        options: [
          '.NET Excel interop / COM automation',
          'Rewriting Revit in Python from scratch',
          'Manually editing the .rvt file in a text editor',
          'Disabling the Revit API entirely'
        ],
        answer: '.NET Excel interop / COM automation'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-16: Organising Scripts into a Custom PyRevit Extension
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-16',
    title: 'Organising Scripts into a Custom PyRevit Extension',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'As a personal toolkit grows to many buttons, what folder structure does it use?',
        options: [
          'The same .extension/.tab/.panel/.pushbutton nesting, simply repeated many times',
          'A completely different flat structure with no nesting',
          'A separate database file replacing the folder structure',
          'One giant script.py containing every tool'
        ],
        answer: 'The same .extension/.tab/.panel/.pushbutton nesting, simply repeated many times'
      },
      {
        type: 'mcq',
        question: 'What is recommended for grouping panels as a toolkit grows?',
        options: [
          'Group by workflow purpose (e.g., QA/QC, Documentation) rather than by when a tool was built',
          'Group alphabetically by the author\'s first name',
          'Group everything into a single "Misc" panel permanently',
          'Group by the file size of each script.py'
        ],
        answer: 'Group by workflow purpose (e.g., QA/QC, Documentation) rather than by when a tool was built'
      },
      {
        type: 'truefalse',
        question: 'pyRevit automatically adds an extension-level lib folder to the Python path for every script inside that extension.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is the main benefit of placing shared helper functions in an extension-level lib folder?',
        options: [
          'A bug fix or improvement in one helper function immediately benefits every script that uses it',
          'It makes scripts run under the CPython engine automatically',
          'It disables the need for a Transaction when writing to the model',
          'It automatically generates icon.png files for every button'
        ],
        answer: 'A bug fix or improvement in one helper function immediately benefits every script that uses it'
      },
      {
        type: 'fillblank',
        question: 'A shared helper module placed in an extension\'s lib folder can be imported directly by name, such as import firm____.',
        answer: 'utils'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends naming .pushbutton folders vaguely, such as Tool3 or NewScript, to keep things simple.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What does the lesson recommend doing instead of silently changing the behavior of a widely-used existing button?',
        options: [
          'Consider adding a new button rather than repurposing one people already rely on',
          'Delete the old button with no warning',
          'Rename the extension entirely',
          'Disable pyRevit until the change is finalized'
        ],
        answer: 'Consider adding a new button rather than repurposing one people already rely on'
      },
      {
        type: 'mcq',
        question: 'What practice does the lesson recommend adopting even before formal team-wide deployment?',
        options: [
          'Keeping the extension folder under version control (e.g., Git) from early on',
          'Avoiding any form of documentation until the toolkit is finished',
          'Merging all scripts into one single pushbutton',
          'Deleting the lib folder to reduce clutter'
        ],
        answer: 'Keeping the extension folder under version control (e.g., Git) from early on'
      },
      {
        type: 'truefalse',
        question: 'A "Misc" panel is described as a natural landing spot during development but should not become a permanent home for many unrelated buttons.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is one item on the lesson\'s practical growth checklist for adding a new tool?',
        options: [
          'Does this logic already exist in the lib folder, and should it be extracted there instead of duplicated?',
          'Has the icon.png file been converted to a .jpg?',
          'Is the CPython engine enabled for every script by default?',
          'Has the Revit license been renewed this year?'
        ],
        answer: 'Does this logic already exist in the lib folder, and should it be extracted there instead of duplicated?'
      }
    ]
  }

];
