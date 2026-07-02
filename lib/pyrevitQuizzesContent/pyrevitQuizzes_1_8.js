// ============================================================
// PYREVIT QUIZZES DATA — py-1 through py-8
// Merge these entries into your lib/pyrevitQuizzesData.js array
// ============================================================

export const pyrevitQuizzes_1_8 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ py-1: What is PyRevit & How it Differs from Dynamo
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-1',
    title: 'What is PyRevit',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Who originally created pyRevit?',
        options: ['Ian Keough', 'Ehsan Iran-Nejad', 'Phil Bernstein', 'Autodesk Research'],
        answer: 'Ehsan Iran-Nejad'
      },
      {
        type: 'mcq',
        question: 'Where is pyRevit distributed and maintained today?',
        options: ['Autodesk App Store only', 'GitHub, under pyrevitlabs/pyRevit', 'A paid subscription portal', 'It is bundled inside Revit itself'],
        answer: 'GitHub, under pyrevitlabs/pyRevit'
      },
      {
        type: 'truefalse',
        question: 'pyRevit is visual/node-based programming, similar to Dynamo.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is the core distinction between Dynamo and pyRevit described in the lesson?',
        options: [
          'Dynamo is visual/node-based programming; pyRevit is textual Python scripting against the Revit API',
          'Dynamo only works with AutoCAD; pyRevit only works with Revit',
          'They are functionally identical with different names',
          'pyRevit has no relationship to the Revit API'
        ],
        answer: 'Dynamo is visual/node-based programming; pyRevit is textual Python scripting against the Revit API'
      },
      {
        type: 'mcq',
        question: 'Which Python engine have pyRevit scripts historically run on, bundled directly with pyRevit?',
        options: ['CPython 3.10', 'IronPython 2.7', 'Jython', 'MicroPython'],
        answer: 'IronPython 2.7'
      },
      {
        type: 'truefalse',
        question: 'Modern pyRevit (v5 and later) also supports a CPython 3 engine option per-script.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'pyRevit ships with a ready-made ribbon ___ full of tools such as QA/QC and selection tools, in addition to being a development platform.',
        answer: 'tab'
      },
      {
        type: 'mcq',
        question: 'Which of these is offered as a trade-off of choosing pyRevit over Dynamo?',
        options: [
          'Lower barrier to entry but no coding power at all',
          'More powerful and flexible for complex logic, but a steeper learning curve and no visual graph to read',
          'pyRevit cannot access Revit model data at all',
          'pyRevit requires a paid annual license'
        ],
        answer: 'More powerful and flexible for complex logic, but a steeper learning curve and no visual graph to read'
      },
      {
        type: 'mcq',
        question: 'According to the lesson, how do most BIM teams typically use Dynamo and pyRevit?',
        options: [
          'As complementary tools, not strict competitors',
          'Only one can ever be installed at a time',
          'pyRevit replaces Dynamo entirely for every use case',
          'They cannot both be used on the same Revit installation'
        ],
        answer: 'As complementary tools, not strict competitors'
      },
      {
        type: 'truefalse',
        question: 'pyRevit is free and open-source, with no license key or subscription required.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-2: Installing PyRevit & Setting Up Your Environment
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-2',
    title: 'Installing PyRevit',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What file type is the official pyRevit installer distributed as?',
        options: ['.exe only', '.msi', '.zip archive requiring manual extraction', '.dmg'],
        answer: '.msi'
      },
      {
        type: 'mcq',
        question: 'Where should you download the official pyRevit installer from?',
        options: [
          'The pyrevitlabs/pyRevit GitHub releases page',
          'A third-party software marketplace',
          'The Autodesk App Store exclusively',
          'It cannot be downloaded, only compiled from source'
        ],
        answer: 'The pyrevitlabs/pyRevit GitHub releases page'
      },
      {
        type: 'truefalse',
        question: 'After installing pyRevit, you must manually register the add-in separately for every installed Revit version.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which pyRevit CLI command prints diagnostic info about the current pyRevit environment?',
        options: ['pyrevit extend', 'pyrevit env', 'pyrevit attach', 'pyrevit init'],
        answer: 'pyrevit env'
      },
      {
        type: 'mcq',
        question: 'Which pyRevit CLI command attaches a specific pyRevit clone to a specific Revit version?',
        options: ['pyrevit attach', 'pyrevit env', 'pyrevit extend', 'pyrevit clone'],
        answer: 'pyrevit attach'
      },
      {
        type: 'fillblank',
        question: 'The pyrevit ___ command adds a new extension to pyRevit from a Git repository or known extension name.',
        answer: 'extend'
      },
      {
        type: 'truefalse',
        question: 'You must install a separate copy of Python from python.org to run classic pyRevit scripts.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What code editor does the lesson recommend installing for comfortably writing pyRevit scripts?',
        options: ['Notepad++', 'Visual Studio Code (VS Code) with the Python extension', 'Microsoft Word', 'Adobe Dreamweaver'],
        answer: 'Visual Studio Code (VS Code) with the Python extension'
      },
      {
        type: 'mcq',
        question: 'Which icon on the pyRevit tab opens the Extension Manager?',
        options: ['The gear icon', 'A red warning triangle', 'The Reload button', 'The Settings text label only'],
        answer: 'The gear icon'
      },
      {
        type: 'truefalse',
        question: 'The pyRevit tab includes a Settings panel and an About panel by default.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-3: The PyRevit Interface — Tabs, Panels & Buttons
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-3',
    title: 'The PyRevit Interface',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the correct ribbon hierarchy in pyRevit?',
        options: [
          'Button → Panel → Tab',
          'Tab → Panel → Button',
          'Panel → Button → Tab',
          'Extension → Button → Tab'
        ],
        answer: 'Tab → Panel → Button'
      },
      {
        type: 'mcq',
        question: 'Which folder suffix corresponds to a single clickable tool that runs one script on click?',
        options: ['.panel', '.pushbutton', '.tab', '.extension'],
        answer: '.pushbutton'
      },
      {
        type: 'truefalse',
        question: 'A pulldown button expands into a dropdown list of several related sub-buttons.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which file inside a pushbutton folder is required for the button to function?',
        options: ['icon.png', 'bundle.yaml', 'script.py', 'readme.txt'],
        answer: 'script.py'
      },
      {
        type: 'mcq',
        question: 'What does the optional bundle.yaml file inside a pushbutton folder configure?',
        options: [
          'The button\'s title, tooltip, and which Python engine to use',
          'The Revit version compatibility only',
          'The user\'s Windows login credentials',
          'Nothing — it is purely decorative'
        ],
        answer: 'The button\'s title, tooltip, and which Python engine to use'
      },
      {
        type: 'fillblank',
        question: 'Clicking the ___ button on the pyRevit tab reloads all installed extensions from disk without restarting Revit.',
        answer: 'Reload'
      },
      {
        type: 'truefalse',
        question: 'Using pyRevit\'s Reload feature requires restarting Revit to pick up script changes.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What ribbon element does a ".panel" folder become?',
        options: ['A Panel (a grouped section) inside a Tab', 'A single clickable Button', 'The entire Revit ribbon', 'A dropdown menu item only'],
        answer: 'A Panel (a grouped section) inside a Tab'
      },
      {
        type: 'mcq',
        question: 'What is a "stack" button type in pyRevit?',
        options: [
          'Three related small buttons stacked vertically in a single ribbon slot',
          'A button that automatically deletes itself after one use',
          'A folder type that disables an extension',
          'A special button only usable in CPython scripts'
        ],
        answer: 'Three related small buttons stacked vertically in a single ribbon slot'
      },
      {
        type: 'truefalse',
        question: 'The pyRevit ribbon structure is a live, visual rendering of folders and files on disk, refreshed with Reload.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-4: Your First PyRevit Script
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-4',
    title: 'Your First PyRevit Script',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which import gives access to the active document and the Autodesk.Revit.DB namespace?',
        options: [
          'from pyrevit import revit, DB',
          'import revit_api as db',
          'from autodesk import Revit',
          'from pyrevit import ui_only'
        ],
        answer: 'from pyrevit import revit, DB'
      },
      {
        type: 'mcq',
        question: 'Which pattern collects every wall type in the current project?',
        options: [
          'DB.FilteredElementCollector(revit.doc).OfClass(DB.WallType)',
          'DB.GetAllWallTypes(revit.doc)',
          'revit.uidoc.Selection.WallTypes',
          'DB.WallType.GetAll()'
        ],
        answer: 'DB.FilteredElementCollector(revit.doc).OfClass(DB.WallType)'
      },
      {
        type: 'truefalse',
        question: 'Plain Python print() statements are automatically routed into pyRevit\'s output window.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What does script.get_output() return?',
        options: [
          'pyRevit\'s rich output window/console object',
          'The active Revit document',
          'A list of all wall types',
          'The user\'s current selection'
        ],
        answer: 'pyRevit\'s rich output window/console object'
      },
      {
        type: 'fillblank',
        question: 'The output.print____() method renders formatted text such as headings and bold text in the pyRevit output window.',
        answer: 'md'
      },
      {
        type: 'mcq',
        question: 'If no bundle.yaml is present, what variable inside script.py controls the button\'s ribbon label?',
        options: ['__title__', '__name__', 'BUTTON_LABEL', '__ribbon_text__'],
        answer: '__title__'
      },
      {
        type: 'truefalse',
        question: 'bundle.yaml\'s title field, if present, takes precedence over the __title__ variable in script.py.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What must be done after saving changes to script.py in VS Code before the updated button behavior appears in Revit?',
        options: [
          'Restart Revit completely',
          'Click Reload on the pyRevit tab',
          'Reinstall pyRevit entirely',
          'Nothing — changes apply instantly without any action'
        ],
        answer: 'Click Reload on the pyRevit tab'
      },
      {
        type: 'mcq',
        question: 'What is the first required step before a pushbutton can appear on the ribbon at all?',
        options: [
          'Creating a correctly named and nested pushbutton folder containing script.py',
          'Writing a bundle.yaml file, which is always mandatory',
          'Compiling the script into a .dll',
          'Registering an Autodesk developer account'
        ],
        answer: 'Creating a correctly named and nested pushbutton folder containing script.py'
      },
      {
        type: 'truefalse',
        question: 'Without an icon.png file, a pushbutton falls back to a default icon rather than failing to appear.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-5: Understanding the Revit API Through PyRevit
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-5',
    title: 'The Revit API Through PyRevit',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What kind of API is the Revit API fundamentally built as?',
        options: ['A REST/HTTP web API', 'A .NET API', 'A pure Python-native API', 'A command-line only API'],
        answer: 'A .NET API'
      },
      {
        type: 'mcq',
        question: 'What are DB and UI, as imported via "from pyrevit import DB, UI"?',
        options: [
          'Entirely new pyRevit-specific namespaces unrelated to the real Revit API',
          'Convenience aliases for Autodesk.Revit.DB and Autodesk.Revit.UI',
          'Graphical user interface libraries for building dialogs only',
          'Deprecated legacy modules no longer used'
        ],
        answer: 'Convenience aliases for Autodesk.Revit.DB and Autodesk.Revit.UI'
      },
      {
        type: 'truefalse',
        question: '__revit__ must be manually imported at the top of every pyRevit script.py file.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What object does the __revit__ variable represent?',
        options: ['The UIApplication', 'A single wall element', 'The Windows operating system', 'A Dynamo graph'],
        answer: 'The UIApplication'
      },
      {
        type: 'fillblank',
        question: 'revit.doc is a shortcut for __revit__.ActiveUIDocument.___',
        answer: 'Document'
      },
      {
        type: 'mcq',
        question: 'What does revit.uidoc provide shortcut access to?',
        options: [
          'The active UIDocument',
          'The Windows file explorer',
          'A specific wall\'s parameters',
          'The pyRevit installer'
        ],
        answer: 'The active UIDocument'
      },
      {
        type: 'mcq',
        question: 'Which is a Document-level operation, according to the lesson\'s rule of thumb?',
        options: [
          'Reading or writing a parameter value',
          'Reading what the user currently has selected on screen',
          'Opening the pyRevit output window',
          'Reloading the extension list'
        ],
        answer: 'Reading or writing a parameter value'
      },
      {
        type: 'truefalse',
        question: 'Because pyRevit exposes the real Revit API, official Revit API documentation is directly applicable to pyRevit scripting.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Why can IronPython call .NET Revit API classes directly with no translation layer?',
        options: [
          'Because IronPython compiles to .NET intermediate language',
          'Because pyRevit rewrites the entire Revit API in pure Python',
          'Because Revit converts Python to C# automatically at runtime',
          'Because .NET classes are not actually used by pyRevit'
        ],
        answer: 'Because IronPython compiles to .NET intermediate language'
      },
      {
        type: 'truefalse',
        question: 'revit.doc and revit.uidoc provide new functionality beyond what __revit__ already exposes.',
        answer: false
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-6: Transactions — Making Changes to Revit Safely
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-6',
    title: 'Transactions in PyRevit',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does the Revit API require before any change can be made to model data?',
        options: [
          'An active Transaction',
          'A saved .dyn file',
          'Administrator privileges on Windows',
          'A restart of Revit'
        ],
        answer: 'An active Transaction'
      },
      {
        type: 'truefalse',
        question: 'Reading data from the model requires an active Transaction, just like writing does.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which method call in the raw API pattern must be called manually on failure to avoid an inconsistent state?',
        options: ['.RollBack()', '.Commit()', '.Start()', '.Reload()'],
        answer: '.RollBack()'
      },
      {
        type: 'mcq',
        question: 'What is pyRevit\'s convenience context manager for handling transactions?',
        options: [
          'revit.Transaction("name")',
          'DB.AutoCommit()',
          'script.get_output()',
          'revit.get_selection()'
        ],
        answer: 'revit.Transaction("name")'
      },
      {
        type: 'fillblank',
        question: 'Using "with revit.Transaction(...)" automatically rolls back all changes if an unhandled ___ occurs inside the block.',
        answer: 'exception'
      },
      {
        type: 'truefalse',
        question: 'The name passed into a Transaction becomes its label in Revit\'s Undo history.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is TransactionGroup used for?',
        options: [
          'Bundling multiple individual Transactions into a single Undo step',
          'Deleting all transactions from a project permanently',
          'Replacing the need for any Transaction entirely',
          'Connecting pyRevit to Dynamo graphs'
        ],
        answer: 'Bundling multiple individual Transactions into a single Undo step'
      },
      {
        type: 'mcq',
        question: 'Which method finalizes and merges a TransactionGroup\'s nested transactions into one Undo step?',
        options: ['.Assimilate()', '.Commit()', '.RollBack()', '.Merge()'],
        answer: '.Assimilate()'
      },
      {
        type: 'truefalse',
        question: 'With the raw API pattern, forgetting to call .Start() before making changes is safe because Revit starts transactions automatically.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is recommended practice before running a model-modifying script on a live production model?',
        options: [
          'Test it on a small, disposable test project first',
          'Skip testing since Transactions make errors impossible',
          'Disable Undo history in Revit',
          'Always use TransactionGroup even for the simplest single change'
        ],
        answer: 'Test it on a small, disposable test project first'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-7: Selecting & Filtering Elements with Python
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-7',
    title: 'Selecting & Filtering Elements',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does an unscoped DB.FilteredElementCollector(doc) return on its own?',
        options: [
          'Every element and element type in the entire document',
          'Only the currently selected elements',
          'Nothing until .OfCategory() is called',
          'Only wall types'
        ],
        answer: 'Every element and element type in the entire document'
      },
      {
        type: 'mcq',
        question: 'Which method scopes a collector to a specific Revit built-in category?',
        options: ['.OfCategory(DB.BuiltInCategory.OST_...)', '.OfClass(DB.FamilyInstance)', '.WhereElementIsNotElementType()', '.get_selection()'],
        answer: '.OfCategory(DB.BuiltInCategory.OST_...)'
      },
      {
        type: 'truefalse',
        question: '.OfCategory() and .OfClass() can be chained together on the same collector for more precision.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which method scopes a collector to return only placed element instances, not their types?',
        options: ['.WhereElementIsNotElementType()', '.WhereElementIsElementType()', '.OfClass(DB.WallType)', '.get_output()'],
        answer: '.WhereElementIsNotElementType()'
      },
      {
        type: 'fillblank',
        question: '.WhereElementIsElementType() returns type/family ___ rather than placed instances.',
        answer: 'definitions'
      },
      {
        type: 'mcq',
        question: 'Which pyRevit function returns the user\'s current Revit canvas selection?',
        options: ['revit.get_selection()', 'DB.FilteredElementCollector(doc)', 'script.get_output()', 'revit.Transaction()'],
        answer: 'revit.get_selection()'
      },
      {
        type: 'truefalse',
        question: 'revit.get_selection() is functionally a shortcut for working with revit.uidoc.Selection directly.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'According to the lesson\'s decision rule, which scenario should use a FilteredElementCollector rather than the selection?',
        options: [
          'A model-wide QA/QC audit of every door',
          'Setting a fire rating on just three walls the user picked',
          'Any task involving fewer than five elements',
          'Any task that does not use a Transaction'
        ],
        answer: 'A model-wide QA/QC audit of every door'
      },
      {
        type: 'mcq',
        question: 'Which class, when passed to .OfClass(), returns every placed family instance across all categories?',
        options: ['DB.FamilyInstance', 'DB.WallType', 'DB.BuiltInCategory', 'DB.Transaction'],
        answer: 'DB.FamilyInstance'
      },
      {
        type: 'truefalse',
        question: 'A well-designed tool can check the selection first and fall back to a category-scoped collector if nothing is selected.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ py-8: Reading & Writing Revit Parameters with Python
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'py-8',
    title: 'Reading & Writing Parameters',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which method finds a parameter on an element by its exact display name?',
        options: ['element.LookupParameter("Name")', 'element.GetParameterValueByName("Name")', 'element.FindParam("Name")', 'DB.Parameter.Get("Name")'],
        answer: 'element.LookupParameter("Name")'
      },
      {
        type: 'truefalse',
        question: 'LookupParameter matches a parameter\'s display name exactly, including capitalization.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which typed getter reads a parameter with StorageType.Double?',
        options: ['.AsString()', '.AsDouble()', '.AsInteger()', '.AsElementId()'],
        answer: '.AsDouble()'
      },
      {
        type: 'mcq',
        question: 'How many possible values does DB.StorageType have?',
        options: ['Two', 'Three', 'Four', 'Six'],
        answer: 'Four'
      },
      {
        type: 'fillblank',
        question: 'Writing a new value into a parameter uses the Parameter object\'s .___(value) method.',
        answer: 'Set'
      },
      {
        type: 'truefalse',
        question: 'param.Set(value) can be called outside a Transaction since it only affects one parameter.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What should be checked before attempting to write to a parameter, to avoid an error on calculated values like Area?',
        options: ['param.IsReadOnly', 'param.StorageType == DB.StorageType.ElementId', 'element.Category', 'revit.uidoc.ActiveView'],
        answer: 'param.IsReadOnly'
      },
      {
        type: 'mcq',
        question: 'What is the key difference between Dynamo\'s parameter nodes and pyRevit\'s approach, according to the lesson?',
        options: [
          'Dynamo\'s GetParameterValueByName/SetParameterByName hide StorageType handling; pyRevit exposes the Parameter object directly, requiring you to know the StorageType',
          'Dynamo cannot read parameters at all',
          'pyRevit parameters are always read-only',
          'They are functionally identical with no differences'
        ],
        answer: 'Dynamo\'s GetParameterValueByName/SetParameterByName hide StorageType handling; pyRevit exposes the Parameter object directly, requiring you to know the StorageType'
      },
      {
        type: 'truefalse',
        question: 'Calculated parameters like Area or Volume are typically writable directly via .Set().',
        answer: false
      },
      {
        type: 'mcq',
        question: 'In the lesson\'s bulk parameter update example, what is checked in the for-loop before calling .Set() on each wall\'s Comments parameter?',
        options: [
          'That the parameter exists and is not read-only',
          'That the wall is currently selected in the view',
          'That the wall type name is "Reviewed"',
          'That revit.uidoc.ActiveView is a 3D view'
        ],
        answer: 'That the parameter exists and is not read-only'
      }
    ]
  }

];
