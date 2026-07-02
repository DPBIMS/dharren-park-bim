// ============================================================
// PYREVIT PRACTICE QUIZZES DATA — pyp-1 through pyp-8
// Merge these entries into your lib/pyrevitPracticeQuizzesData.js array
// ============================================================

export const pyrevitPracticeQuizzes_1_8 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-1: Setting Up Your Practice Toolkit
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-1',
    title: 'Practice Toolkit Setup',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does "DPC2025" stand for in this course?',
        options: ['Dharren Park Capstone 2025', 'Digital Practice Certification 2025', 'Design Project Coordination 2025', 'Dynamo Python Course 2025'],
        answer: 'Dharren Park Capstone 2025'
      },
      {
        type: 'mcq',
        question: 'What actually executes pyRevit scripts inside Revit?',
        options: ['A separately installed CPython interpreter', 'pyRevit\'s bundled IronPython engine', 'The VS Code Python extension', 'Dynamo Sandbox'],
        answer: 'pyRevit\'s bundled IronPython engine'
      },
      {
        type: 'truefalse',
        question: 'You must install a standalone CPython interpreter for VS Code to edit pyRevit scripts.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which folder suffix order does pyRevit expect for its extension structure?',
        options: ['.tab > .extension > .panel > .pushbutton', '.extension > .tab > .panel > .pushbutton', '.panel > .tab > .extension > .pushbutton', '.pushbutton > .panel > .extension > .tab'],
        answer: '.extension > .tab > .panel > .pushbutton'
      },
      {
        type: 'mcq',
        question: 'When registering a Custom Extension Directory in pyRevit Settings, what should you actually point it at?',
        options: ['The .extension folder itself', 'The parent folder containing the .extension folder', 'The .pushbutton folder', 'The Revit installation directory'],
        answer: 'The parent folder containing the .extension folder'
      },
      {
        type: 'fillblank',
        question: 'The core development loop repeated in every lesson is: edit in VS Code, save, then click ___ in Revit.',
        answer: 'Reload'
      },
      {
        type: 'truefalse',
        question: 'You need to restart Revit entirely for a script.py change to take effect.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is the most common reason a new pushbutton fails to appear at all after Reload?',
        options: ['The icon.png file is missing', 'A typo in one of the required folder suffixes', 'The Revit model is too large', 'VS Code was closed'],
        answer: 'A typo in one of the required folder suffixes'
      },
      {
        type: 'mcq',
        question: 'What minimal file must exist inside a *.pushbutton folder for it to function?',
        options: ['script.py', 'config.json', 'readme.md', 'icon.ico'],
        answer: 'script.py'
      },
      {
        type: 'truefalse',
        question: 'Editing or reloading a script while Revit is mid-save or mid-sync is safe and recommended.',
        answer: false
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-2: Build a Room Tagger Script in 30 Minutes
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-2',
    title: 'Room Tagger Script',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is pyRevit\'s shortcut for the active Revit Document?',
        options: ['revit.doc', '__revit__.doc', 'DB.Document', 'script.doc'],
        answer: 'revit.doc'
      },
      {
        type: 'mcq',
        question: 'Which class do Room Tags belong to when collected with FilteredElementCollector?',
        options: ['DB.SpatialElementTag', 'DB.RoomTag', 'DB.AnnotationSymbol', 'DB.IndependentTag'],
        answer: 'DB.SpatialElementTag'
      },
      {
        type: 'truefalse',
        question: 'Building a Python set() of already-tagged Room ids and checking membership is described as the plain-Python equivalent of the untagged-element check from the Dynamo course.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which method actually places a new Room Tag in the model?',
        options: ['doc.Create.NewRoomTag(...)', 'doc.Create.NewTag(...)', 'room.PlaceTag(...)', 'DB.RoomTag.Create(...)'],
        answer: 'doc.Create.NewRoomTag(...)'
      },
      {
        type: 'mcq',
        question: 'What must wrap any call to doc.Create.NewRoomTag?',
        options: ['A try/except block only', 'A revit.Transaction block', 'A for-loop', 'A FilteredElementCollector'],
        answer: 'A revit.Transaction block'
      },
      {
        type: 'fillblank',
        question: 'Before calling .Point on a Room\'s Location, the script must guard against Location being ___.',
        answer: 'None'
      },
      {
        type: 'truefalse',
        question: 'Scoping the FilteredElementCollector with active_view.Id restricts results to elements visible in the current view.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What does WhereElementIsNotElementType() do in the room collection step?',
        options: ['Excludes room-related type objects, leaving only placed Room instances', 'Filters rooms by area', 'Sorts rooms by level', 'Removes unplaced rooms only'],
        answer: 'Excludes room-related type objects, leaving only placed Room instances'
      },
      {
        type: 'mcq',
        question: 'Why is checking membership against a Python set() preferred over scanning a list repeatedly?',
        options: ['Set lookups are effectively constant-time', 'Sets preserve insertion order', 'Sets can contain duplicate values', 'Lists cannot store ElementIds'],
        answer: 'Set lookups are effectively constant-time'
      },
      {
        type: 'truefalse',
        question: 'A Room with a None Location will always have a valid Area value.',
        answer: false
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-3: Auto-Number Doors Across All Levels
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-3',
    title: 'Door Auto-Numbering',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What Python structure does this lesson use to group doors by level, in place of Dynamo\'s List.GroupByKey?',
        options: ['A tuple', 'A dictionary keyed by level name', 'A nested list', 'A set'],
        answer: 'A dictionary keyed by level name'
      },
      {
        type: 'mcq',
        question: 'How is a door\'s Level element actually retrieved from its LevelId?',
        options: ['doc.GetElement(door.LevelId)', 'door.GetLevel()', 'DB.Level.FromId(door.LevelId)', 'door.Level'],
        answer: 'doc.GetElement(door.LevelId)'
      },
      {
        type: 'truefalse',
        question: 'Door marks are conventionally reset to start at 001 on each level rather than continuing one long sequence.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which method/call actually writes a new Mark value onto a door?',
        options: ['LookupParameter("Mark").Set(value)', 'door.Mark = value', 'door.SetMark(value)', 'DB.Parameter.Write("Mark", value)'],
        answer: 'LookupParameter("Mark").Set(value)'
      },
      {
        type: 'mcq',
        question: 'What does "{:03d}".format(i) accomplish in the mark-generation code?',
        options: ['Pads the sequence number with leading zeros', 'Converts the number to a float', 'Rounds the number to 3 decimal places', 'Reverses the digits'],
        answer: 'Pads the sequence number with leading zeros'
      },
      {
        type: 'fillblank',
        question: 'Revit treats a duplicate Mark value as a ___, not a blocking error.',
        answer: 'warning'
      },
      {
        type: 'truefalse',
        question: 'Revit automatically prevents a Transaction from committing if it would create duplicate Mark values.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Why check param.IsReadOnly before calling .Set() on the Mark parameter?',
        options: [
          'To avoid an exception on doors where Mark is locked or controlled unusually',
          'It is required by Python syntax',
          'It speeds up the FilteredElementCollector',
          'It is needed to open the Transaction'
        ],
        answer: 'To avoid an exception on doors where Mark is locked or controlled unusually'
      },
      {
        type: 'mcq',
        question: 'What is the main structural advantage of a Python dictionary over List.GroupByKey\'s output, according to the lesson?',
        options: [
          'It pairs each key directly with its group, removing a class of alignment bugs',
          'It automatically sorts doors alphabetically',
          'It is faster to type',
          'It supports only string values'
        ],
        answer: 'It pairs each key directly with its group, removing a class of alignment bugs'
      },
      {
        type: 'truefalse',
        question: 'All door-numbering and writing in this lesson happens inside a single Transaction wrapping the whole loop.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-4: Build a View Renamer to Match ISO 19650
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-4',
    title: 'View Renamer & ISO 19650',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the target naming pattern built in this lesson?',
        options: [
          'Project-Originator-Volume-Level-Type-Role-Number',
          'Level-Type-Project-Number',
          'Discipline-Number-Project',
          'Type-Role-Project-Volume'
        ],
        answer: 'Project-Originator-Volume-Level-Type-Role-Number'
      },
      {
        type: 'mcq',
        question: 'Which Python module provides real regular expression matching for name validation?',
        options: ['re', 'os', 'csv', 'sys'],
        answer: 're'
      },
      {
        type: 'truefalse',
        question: 'Regex matching in Python is case-sensitive by default.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Why should a regex pattern be written as a raw string (prefixed with r)?',
        options: [
          'So backslash escape sequences are passed through to re unmodified',
          'To make the pattern run faster',
          'It is required for ViewSheet.Create to work',
          'Raw strings automatically compile the pattern'
        ],
        answer: 'So backslash escape sequences are passed through to re unmodified'
      },
      {
        type: 'mcq',
        question: 'What must be checked before renaming any sheet, according to the lesson?',
        options: [
          'That the proposed name does not collide with an existing sheet name/number',
          'That the sheet has at least one viewport already',
          'That the sheet is on Level 1',
          'That the titleblock is loaded twice'
        ],
        answer: 'That the proposed name does not collide with an existing sheet name/number'
      },
      {
        type: 'fillblank',
        question: 'In the lesson\'s contrast with Dynamo, achieving equivalent name validation typically requires chaining multiple ___ nodes together instead of one compiled regex pattern.',
        answer: 'String'
      },
      {
        type: 'truefalse',
        question: 'ViewSheet.SheetNumber and Name renaming must happen inside a Transaction.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'In the example pattern, what does the "L01" field represent?',
        options: ['The Level, matching DPC2025\'s Level 1', 'The Type code', 'The Role code', 'The Volume'],
        answer: 'The Level, matching DPC2025\'s Level 1'
      },
      {
        type: 'mcq',
        question: 'What best practice does the lesson recommend before renaming a full sheet set?',
        options: [
          'Test the rename on a small handful of sheets first, then verify in the Project Browser',
          'Always rename sheets in reverse alphabetical order',
          'Disable Revit\'s warning dialogs entirely',
          'Skip regex validation to save time'
        ],
        answer: 'Test the rename on a small handful of sheets first, then verify in the Project Browser'
      },
      {
        type: 'truefalse',
        question: 'A naive one-at-a-time collision check can falsely flag a collision when two sheets are being renamed to swap their numbers.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-5: Bulk Parameter Writer
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-5',
    title: 'Bulk Parameter Writer',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What property must be checked before calling the correctly typed setter on a parameter?',
        options: ['StorageType', 'ParameterType', 'BuiltInParameter', 'Definition.Name'],
        answer: 'StorageType'
      },
      {
        type: 'mcq',
        question: 'Which StorageType requires passing a Python float to .Set()?',
        options: ['StorageType.Double', 'StorageType.String', 'StorageType.Integer', 'StorageType.ElementId'],
        answer: 'StorageType.Double'
      },
      {
        type: 'truefalse',
        question: 'Passing a Python string to .Set() for a Double-type parameter will silently convert it without error.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is the main performance recommendation emphasized in this lesson for bulk updates?',
        options: [
          'Wrap the entire loop in a single Transaction rather than one per element',
          'Always use Automatic run mode',
          'Use a separate script for every element',
          'Avoid using LookupParameter entirely'
        ],
        answer: 'Wrap the entire loop in a single Transaction rather than one per element'
      },
      {
        type: 'mcq',
        question: 'At what kind of scale does the lesson say the Transaction-per-element mistake becomes a severe, visible slowdown?',
        options: [
          'Hundreds of elements, e.g. 500',
          'Only above 1 million elements',
          'It never causes a noticeable slowdown',
          'Only when running in Dynamo, not pyRevit'
        ],
        answer: 'Hundreds of elements, e.g. 500'
      },
      {
        type: 'fillblank',
        question: 'LookupParameter(name) returns a ___ object, not the value itself.',
        answer: 'Parameter'
      },
      {
        type: 'truefalse',
        question: 'This lesson\'s bulk writer keeps category, parameter name, and new value as configuration values rather than hard-coding them per script.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What should be checked on the Parameter object before attempting to write to it?',
        options: ['That it is not None and not read-only', 'That it has a GUID', 'That it belongs to a shared parameter file', 'That its StorageType is always String'],
        answer: 'That it is not None and not read-only'
      },
      {
        type: 'mcq',
        question: 'Which StorageType requires wrapping the value in DB.ElementId(int(value))?',
        options: ['StorageType.ElementId', 'StorageType.Integer', 'StorageType.Double', 'StorageType.String'],
        answer: 'StorageType.ElementId'
      },
      {
        type: 'truefalse',
        question: 'Wrapping the whole bulk update in one Transaction also produces a single undo step for the user.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-6: Build a Sheet Creator from an Excel List
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-6',
    title: 'Sheet Creator from CSV',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Why does this lesson use CSV instead of reading .xlsx directly?',
        options: [
          'CSV requires no extra library beyond Python\'s built-in csv module under IronPython',
          'CSV files are always smaller than Excel files',
          'Revit cannot open .xlsx files at all',
          'CSV supports more columns than Excel'
        ],
        answer: 'CSV requires no extra library beyond Python\'s built-in csv module under IronPython'
      },
      {
        type: 'mcq',
        question: 'Which class from the csv module parses rows into dictionaries keyed by the header row?',
        options: ['csv.DictReader', 'csv.ListReader', 'csv.Parser', 'csv.RowMapper'],
        answer: 'csv.DictReader'
      },
      {
        type: 'truefalse',
        question: 'Lookup dictionaries like views_by_name should be built once before the row loop, not re-queried from the model on every row.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which method creates a new sheet in the Revit API?',
        options: ['DB.ViewSheet.Create(doc, titleblockTypeId)', 'doc.Create.NewSheet(...)', 'DB.Sheet.Create(doc)', 'doc.CreateViewSheet(titleblockTypeId)'],
        answer: 'DB.ViewSheet.Create(doc, titleblockTypeId)'
      },
      {
        type: 'mcq',
        question: 'Which method places a view onto a sheet as a viewport?',
        options: ['DB.Viewport.Create(doc, sheetId, viewId, point)', 'DB.View.PlaceOnSheet(sheetId)', 'sheet.AddView(viewId)', 'doc.Create.NewViewport(sheetId, viewId)'],
        answer: 'DB.Viewport.Create(doc, sheetId, viewId, point)'
      },
      {
        type: 'fillblank',
        question: 'If a CSV row\'s ViewName does not match any real view, the script should ___ that row rather than crash the whole loop.',
        answer: 'skip'
      },
      {
        type: 'truefalse',
        question: 'The entire loop of sheet creation and viewport placement is wrapped in a single Transaction.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is a common cause of a KeyError when accessing row["SheetNumber"] from DictReader results?',
        options: [
          'Trailing whitespace or hidden characters in the CSV header row',
          'The Transaction was not started',
          'The titleblock type was not found',
          'The CSV file has too many rows'
        ],
        answer: 'Trailing whitespace or hidden characters in the CSV header row'
      },
      {
        type: 'mcq',
        question: 'What should be checked before assigning a new SheetNumber, according to this lesson (echoing the View Renamer lesson)?',
        options: [
          'That it does not collide with an existing sheet number',
          'That it is exactly 4 characters long',
          'That it starts with a letter',
          'That the CSV row count is even'
        ],
        answer: 'That it does not collide with an existing sheet number'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends running the sheet creator against a CSV with only 1-2 rows first before running it against the full sheet list.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-7: Family Loader
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-7',
    title: 'Family Loader Script',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which Python module function recursively walks a folder tree to find files?',
        options: ['os.walk', 'os.listdir', 'sys.path', 'csv.reader'],
        answer: 'os.walk'
      },
      {
        type: 'mcq',
        question: 'What does doc.LoadFamily(path) return when the family loads successfully for the first time?',
        options: ['True', 'False', 'None', 'The family name as a string'],
        answer: 'True'
      },
      {
        type: 'truefalse',
        question: 'doc.LoadFamily(path) returns False (not an exception) when a family with the same name already exists.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Why is each individual doc.LoadFamily call wrapped in its own try/except?',
        options: [
          'So one corrupt or incompatible .rfa file does not stop the rest of the batch',
          'Because Transactions require try/except syntax',
          'To automatically retry failed loads',
          'Because os.walk requires exception handling'
        ],
        answer: 'So one corrupt or incompatible .rfa file does not stop the rest of the batch'
      },
      {
        type: 'mcq',
        question: 'Which API call prints the final summary report in the pyRevit output window?',
        options: ['script.get_output()', 'DB.Report.Print()', 'revit.Output()', 'output.render()'],
        answer: 'script.get_output()'
      },
      {
        type: 'fillblank',
        question: 'The lesson tracks three outcome lists per family: loaded, already present, and ___.',
        answer: 'failed'
      },
      {
        type: 'truefalse',
        question: 'A high "already present" count on a repeat run confirms the tool is safely idempotent.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'How does the script make the .rfa file check case-insensitive?',
        options: ['filename.lower().endswith(".rfa")', 'filename.upper() == ".RFA"', 're.match(".rfa", filename)', 'os.path.isfile(filename)'],
        answer: 'filename.lower().endswith(".rfa")'
      },
      {
        type: 'mcq',
        question: 'What performance principle from an earlier lesson is reused here for loading potentially hundreds of families?',
        options: [
          'Wrapping the entire load loop in one Transaction rather than one per family',
          'Using Automatic run mode for speed',
          'Loading families only during off-hours',
          'Avoiding os.walk in favor of manual folder listing'
        ],
        answer: 'Wrapping the entire load loop in one Transaction rather than one per family'
      },
      {
        type: 'truefalse',
        question: 'A library root path that does not exist will cause os.walk to raise a loud, obvious error automatically.',
        answer: false
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-8: Build a Quick Purge & Audit Button
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-8',
    title: 'Purge & Audit Button',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the core safety principle this lesson builds around?',
        options: [
          'Report first, delete deliberately',
          'Always auto-delete anything unused',
          'Never check for unused elements',
          'Delete first, ask questions later'
        ],
        answer: 'Report first, delete deliberately'
      },
      {
        type: 'mcq',
        question: 'Which method exposes the type id referenced by a placed FamilyInstance?',
        options: ['instance.GetTypeId()', 'instance.Symbol.Id', 'instance.TypeId', 'doc.GetTypeOf(instance)'],
        answer: 'instance.GetTypeId()'
      },
      {
        type: 'truefalse',
        question: 'This script automatically deletes any family type it finds with zero placed instances.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Why must the collectors used for purge detection be project-wide rather than scoped to the active view?',
        options: [
          'A type can be genuinely unused project-wide while still absent from whichever view happens to be open',
          'View-scoped collectors are slower',
          'FilteredElementCollector cannot scope to a view for FamilySymbols',
          'Project-wide collection is required by Revit API syntax'
        ],
        answer: 'A type can be genuinely unused project-wide while still absent from whichever view happens to be open'
      },
      {
        type: 'mcq',
        question: 'What earlier lesson\'s technique does building the used_type_ids set directly reuse?',
        options: [
          'The Room Tagger\'s untagged-room cross-reference check',
          'The View Renamer\'s regex validation',
          'The Family Loader\'s os.walk traversal',
          'The Sheet Creator\'s CSV reading'
        ],
        answer: 'The Room Tagger\'s untagged-room cross-reference check'
      },
      {
        type: 'fillblank',
        question: 'Any FamilySymbol whose id is not found in the used_type_ids set is called a purge ___.',
        answer: 'candidate'
      },
      {
        type: 'truefalse',
        question: 'A type with zero direct instances is always guaranteed to be safe to delete.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What must a trustworthy purge report explicitly state, according to the lesson?',
        options: [
          'That nothing has been deleted by the script',
          'The exact Revit build number',
          'The total file size of DPC2025',
          'The user\'s Windows login name'
        ],
        answer: 'That nothing has been deleted by the script'
      },
      {
        type: 'mcq',
        question: 'Besides having zero direct instances, what else might make a "candidate" type still load-bearing?',
        options: [
          'Being nested inside another family that is in use, or referenced by a schedule/filter',
          'Having a long type name',
          'Being loaded most recently',
          'Belonging to the Doors category'
        ],
        answer: 'Being nested inside another family that is in use, or referenced by a schedule/filter'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends that final deletion, once confirmed, should still happen as a small, deliberate, reviewable step rather than being blindly automated.',
        answer: true
      }
    ]
  }

];
