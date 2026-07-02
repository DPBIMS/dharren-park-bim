// ============================================================
// DYNAMO PRACTICE QUIZZES DATA — dynp-1 through dynp-8
// Merge these entries into your lib/dynamoPracticeQuizzesData.js array
// ============================================================

export const dynamoPracticeQuizzes_1_8 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-1: Practice Environment Setup
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-1',
    title: 'Practice Environment Setup Quiz',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does "DPC2025" stand for in this course?',
        options: ['Dharren Park Capstone 2025', 'Dynamo Practice Course 2025', 'Design Project Coordination 2025', 'Digital Project Compliance 2025'],
        answer: 'Dharren Park Capstone 2025'
      },
      {
        type: 'truefalse',
        question: 'DPC2025 should be a fully detailed architectural model rather than a minimal practice file.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is the recommended default run mode for any practice script in this course that writes to the model?',
        options: ['Automatic', 'Manual', 'Periodic', 'Background'],
        answer: 'Manual'
      },
      {
        type: 'mcq',
        question: 'What is the recommended naming convention for practice scripts in this course?',
        options: [
          'DPC2025_LessonNum_Purpose_vX.dyn',
          'Script1.dyn, Script2.dyn, Script3.dyn',
          'Purpose_DPC2025.dyn',
          'vX_DPC2025_LessonNum.dyn'
        ],
        answer: 'DPC2025_LessonNum_Purpose_vX.dyn'
      },
      {
        type: 'truefalse',
        question: '.dyn files are stored inside the .rvt file, so a Revit model backup automatically protects your scripts too.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'According to the lesson, when should you switch to Automatic run mode?',
        options: [
          'Only when testing pure geometry or math logic that does not touch Revit elements yet',
          'Whenever a script writes to more than 10 elements',
          'Every time you open Dynamo',
          'Never — Automatic mode should always be disabled'
        ],
        answer: 'Only when testing pure geometry or math logic that does not touch Revit elements yet'
      },
      {
        type: 'mcq',
        question: 'What should you do before making a significant change to a working script?',
        options: [
          'Use File → Save As to create a new version file rather than overwriting the only copy',
          'Delete the old version immediately',
          'Email the script to yourself',
          'Rename the Revit project'
        ],
        answer: 'Use File → Save As to create a new version file rather than overwriting the only copy'
      },
      {
        type: 'truefalse',
        question: 'It is safe to edit or run a Dynamo graph while Revit is in the middle of a save or sync-to-central operation.',
        answer: false
      },
      {
        type: 'fillblank',
        question: 'The recommended root folder for all .dyn files in this course is called ___ (one word, camel-case).',
        answer: 'DynamoScripts'
      },
      {
        type: 'mcq',
        question: 'Why does the lesson recommend keeping DPC2025 small (e.g., 4 levels) rather than large?',
        options: [
          'A small, well-understood model lets you visually verify a script\'s result at a glance',
          'Revit cannot open large models',
          'Dynamo has a hard element limit of 50',
          'Large models cannot contain Grids'
        ],
        answer: 'A small, well-understood model lets you visually verify a script\'s result at a glance'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-2: Room Numbering Script
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-2',
    title: 'Room Numbering Script Quiz',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the first step in the five-step room numbering plan?',
        options: ['Get all Rooms in DPC2025', 'Sort rooms by location', 'Generate sequential numbers', 'Write the Number parameter'],
        answer: 'Get all Rooms in DPC2025'
      },
      {
        type: 'mcq',
        question: 'Which node returns the location Point of a Room element?',
        options: ['Room.Location', 'Element.GetLocation', 'Point.ByRoom', 'Room.Center'],
        answer: 'Room.Location'
      },
      {
        type: 'mcq',
        question: 'Which node reorders one list based on the values of another list?',
        options: ['List.SortByKey', 'List.Sort', 'List.GroupByKey', 'List.Reorder'],
        answer: 'List.SortByKey'
      },
      {
        type: 'truefalse',
        question: 'The generated "numbers" list must have exactly the same length and order as "sortedRooms" before writing.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is the recommended sorting approach for DPC2025 rooms?',
        options: [
          'Sort primarily by Level, then by Y, then by X',
          'Sort alphabetically by room name only',
          'Sort by Element ID',
          'Do not sort at all before numbering'
        ],
        answer: 'Sort primarily by Level, then by Y, then by X'
      },
      {
        type: 'mcq',
        question: 'Which node writes the generated numbers into the Room parameter?',
        options: ['Element.SetParameterByName', 'Room.SetNumber', 'Parameter.Write', 'Element.UpdateValue'],
        answer: 'Element.SetParameterByName'
      },
      {
        type: 'truefalse',
        question: 'Padding numbers with leading zeros (e.g., "R-001") helps keep values sorting correctly later in schedules or spreadsheets.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What can cause Room.Location to return null for a room?',
        options: [
          'An unplaced room whose tag or phase status still exists in the model',
          'Too many rooms selected at once',
          'The room being on Level 1',
          'The room not having a Fire Rating parameter'
        ],
        answer: 'An unplaced room whose tag or phase status still exists in the model'
      },
      {
        type: 'fillblank',
        question: 'The built-in Revit Room parameter written to in this lesson is called "___".',
        answer: 'Number'
      },
      {
        type: 'mcq',
        question: 'According to the lesson, what should you check before running a numbering script repeatedly on the same model?',
        options: [
          'Whether the script is idempotent (safe to re-run)',
          'Whether Dynamo is the latest version',
          'Whether the model has more than 4 levels',
          'Whether the rooms have Fire Rating values'
        ],
        answer: 'Whether the script is idempotent (safe to re-run)'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-3: Door Mark Automation
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-3',
    title: 'Door Mark Automation Quiz',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Why must doors be grouped by Level before numbering, unlike the room numbering script?',
        options: [
          'Door marks are conventionally reset per level, starting at 001 on each level',
          'Doors do not have a Level parameter',
          'Grouping is required by the Categories node',
          'Doors must always be numbered in reverse order'
        ],
        answer: 'Door marks are conventionally reset per level, starting at 001 on each level'
      },
      {
        type: 'mcq',
        question: 'Which node splits a single list into per-level sub-lists?',
        options: ['List.GroupByKey', 'List.SortByKey', 'List.Chop', 'List.Partition'],
        answer: 'List.GroupByKey'
      },
      {
        type: 'truefalse',
        question: 'Revit blocks the model from saving if two doors are assigned the same Mark value.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What does Revit do when two elements of the same category share a duplicate Mark value?',
        options: [
          'It shows a warning but still allows saving and syncing',
          'It automatically renumbers one of them',
          'It deletes the duplicate element',
          'It prevents Dynamo from writing the value at all'
        ],
        answer: 'It shows a warning but still allows saving and syncing'
      },
      {
        type: 'mcq',
        question: 'Which parameter is written to in this lesson\'s door marking script?',
        options: ['Mark', 'Number', 'Comments', 'Type Mark'],
        answer: 'Mark'
      },
      {
        type: 'fillblank',
        question: 'The example Mark format used for Level 1 doors in this lesson is "L1-___" followed by a sequential, zero-padded number.',
        answer: '001'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends building your own QA check (e.g., using List.UniqueItems) after any Mark-writing script, since Revit will not catch duplicates automatically.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is the reusable pattern this lesson establishes for later use in the course?',
        options: [
          'Group by a key, number each group independently, write back with a matching prefix',
          'Always sort by Element ID before writing any parameter',
          'Only ever write to built-in parameters, never shared ones',
          'Always disable Manual run mode before placing new elements'
        ],
        answer: 'Group by a key, number each group independently, write back with a matching prefix'
      },
      {
        type: 'mcq',
        question: 'If Element.GetParameterValueByName(doorList, "Level") returns null for some doors, what does the lesson suggest?',
        options: [
          'Try a dedicated Level property query node instead',
          'Delete those doors from DPC2025',
          'Ignore them — nulls are expected and harmless',
          'Switch run mode to Automatic'
        ],
        answer: 'Try a dedicated Level property query node instead'
      },
      {
        type: 'truefalse',
        question: 'Uniqueness discipline for Mark values is enforced automatically by Revit and requires no manual QA process.',
        answer: false
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-4: Level List & Excel Export
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-4',
    title: 'Level List & Excel Export Quiz',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which two values does this lesson\'s script read from each Level?',
        options: ['Name and Elevation', 'Name and Level ID', 'Elevation and Building Story', 'Name and Phase'],
        answer: 'Name and Elevation'
      },
      {
        type: 'mcq',
        question: 'Why is an explicit sort step necessary before exporting the level list?',
        options: [
          'All Elements of Category does not guarantee levels come back already sorted bottom-to-top',
          'Excel.WriteToFile requires alphabetical order',
          'Level.Elevation returns values in random units',
          'Sorting is required to enable the header row'
        ],
        answer: 'All Elements of Category does not guarantee levels come back already sorted bottom-to-top'
      },
      {
        type: 'mcq',
        question: 'What data shape does Excel.WriteToFile expect?',
        options: ['A list-of-lists, where each inner list is one row', 'A single flat list of strings', 'A dictionary keyed by column name', 'A nested JSON object'],
        answer: 'A list-of-lists, where each inner list is one row'
      },
      {
        type: 'truefalse',
        question: 'The header row should be inserted as the first item in the list-of-lists, ahead of the actual data rows.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What does the lesson warn about relative file paths?',
        options: [
          'A relative path\'s destination depends on which folder Dynamo happens to be running from',
          'Relative paths are faster than absolute paths',
          'Relative paths are required for Excel.WriteToFile to work',
          'Relative paths automatically create the folder structure'
        ],
        answer: 'A relative path\'s destination depends on which folder Dynamo happens to be running from'
      },
      {
        type: 'mcq',
        question: 'According to the "Consistency Rule," how should parallel lists (like names and elevations) be sorted?',
        options: [
          'Using the same original key for every parallel list, never re-derived independently',
          'Each list can be sorted independently using its own values',
          'Only the elevation list needs to be sorted',
          'Parallel lists do not need to be sorted at all'
        ],
        answer: 'Using the same original key for every parallel list, never re-derived independently'
      },
      {
        type: 'truefalse',
        question: 'If the target Excel file is already open in Excel, Excel.WriteToFile will typically error or silently fail to save.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is a giveaway that a stray .ToString() converted the wrong column during export?',
        options: [
          'Elevation values appear as text instead of plain numbers',
          'The header row is missing',
          'The file fails to open in Excel at all',
          'The level names appear in the wrong order'
        ],
        answer: 'Elevation values appear as text instead of plain numbers'
      },
      {
        type: 'fillblank',
        question: 'The node used to bring Levels into the graph, shared with every other lesson in this course, is Categories combined with "All Elements of ___".',
        answer: 'Category'
      },
      {
        type: 'mcq',
        question: 'What is the final verification step the lesson insists is "not optional"?',
        options: [
          'Opening the resulting Excel file and visually confirming headers, order, and data types',
          'Re-running the script a second time to confirm consistency',
          'Emailing the file to a colleague for review',
          'Checking the Dynamo console log for warnings'
        ],
        answer: 'Opening the resulting Excel file and visually confirming headers, order, and data types'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-5: Shared Parameters in Dynamo
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-5',
    title: 'Shared Parameters in Dynamo Quiz',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Where is a shared parameter definition stored?',
        options: [
          'An external, plain-text shared parameter file (.txt)',
          'Inside the Revit project file only',
          'Inside the Dynamo .dyn file',
          'In the Windows registry'
        ],
        answer: 'An external, plain-text shared parameter file (.txt)'
      },
      {
        type: 'mcq',
        question: 'What is a key advantage of a shared parameter over a project parameter?',
        options: [
          'It has a stable GUID and can be reused consistently across many projects',
          'It cannot be used in schedules',
          'It only works with built-in Revit categories',
          'It is faster for Dynamo to read'
        ],
        answer: 'It has a stable GUID and can be reused consistently across many projects'
      },
      {
        type: 'truefalse',
        question: 'Element.GetParameterValueByName and Element.SetParameterByName behave differently depending on whether a parameter is shared, project-level, or built-in.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which node checks whether a parameter exists on a given element before writing to it?',
        options: ['Element.HasParameter', 'Element.CheckParameter', 'Parameter.Exists', 'Element.ValidateParameter'],
        answer: 'Element.HasParameter'
      },
      {
        type: 'mcq',
        question: 'What happens if you type "asset id" instead of the exact bound name "Asset ID" when reading a parameter?',
        options: [
          'It silently returns null for every element — no visible error is raised',
          'Dynamo throws an immediate red error node',
          'Dynamo automatically corrects the casing',
          'Revit crashes'
        ],
        answer: 'It silently returns null for every element — no visible error is raised'
      },
      {
        type: 'truefalse',
        question: 'Parameter name matching in Element.GetParameterValueByName is case-sensitive.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'According to the "Debugging Rule," what should you check first if a parameter read returns null across an entire list?',
        options: [
          'The exact spelling and casing of the parameter name string',
          'Whether Revit is running as administrator',
          'Whether the model has more than 100 elements',
          'Whether the Dynamo version is up to date'
        ],
        answer: 'The exact spelling and casing of the parameter name string'
      },
      {
        type: 'mcq',
        question: 'Why might a copied-and-pasted parameter name from a spreadsheet header silently break a match?',
        options: [
          'It may include a trailing space that does not match the bound parameter name exactly',
          'Spreadsheet text is always in the wrong data type',
          'Excel automatically capitalizes all pasted text',
          'Copy-paste always strips shared parameter GUIDs'
        ],
        answer: 'It may include a trailing space that does not match the bound parameter name exactly'
      },
      {
        type: 'fillblank',
        question: 'The example shared parameter introduced in this lesson, used later to match spreadsheet rows to elements, is called "___ ID".',
        answer: 'Asset'
      },
      {
        type: 'truefalse',
        question: 'A project parameter defined inside one Revit project is automatically available in every other project by default.',
        answer: false
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-6: Bulk Spreadsheet Update
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-6',
    title: 'Bulk Spreadsheet Update Quiz',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which node reads an external spreadsheet into Dynamo as a list-of-lists?',
        options: ['Excel.ReadFromFile', 'Excel.Import', 'Data.ReadSpreadsheet', 'File.ReadExcel'],
        answer: 'Excel.ReadFromFile'
      },
      {
        type: 'mcq',
        question: 'What must happen before any matching logic runs on the imported spreadsheet rows?',
        options: [
          'The header row must be explicitly split off from the data rows',
          'The file must be converted to CSV first',
          'All blank cells must be deleted from the spreadsheet',
          'The spreadsheet must be re-sorted alphabetically'
        ],
        answer: 'The header row must be explicitly split off from the data rows'
      },
      {
        type: 'mcq',
        question: 'Which nodes are used together to separate the header row from data rows?',
        options: ['List.FirstItem and List.RestOfItems', 'List.Flatten and List.Chop', 'List.GroupByKey and List.SortByKey', 'List.Clean and List.Filter'],
        answer: 'List.FirstItem and List.RestOfItems'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends matching spreadsheet rows to model elements by assuming row position matches element list order.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which node finds the position of a spreadsheet key value within the model\'s parameter value list?',
        options: ['List.IndexOf', 'List.Contains', 'List.Search', 'List.Match'],
        answer: 'List.IndexOf'
      },
      {
        type: 'mcq',
        question: 'What does List.IndexOf return when no match is found for a spreadsheet row\'s key value?',
        options: ['-1', '0', 'null', 'an empty string'],
        answer: '-1'
      },
      {
        type: 'truefalse',
        question: 'Writing blank spreadsheet values directly into the model without filtering can silently overwrite good existing data.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What should you compare after filtering to confirm dropped rows are legitimate and not a script bug?',
        options: [
          'The filtered list counts against the original spreadsheet row count',
          'The Dynamo version number',
          'The Revit file size before and after',
          'The number of open views in the project'
        ],
        answer: 'The filtered list counts against the original spreadsheet row count'
      },
      {
        type: 'fillblank',
        question: 'The shared parameter used as the matching key column in this lesson, set up in the previous lesson, is "___ ID".',
        answer: 'Asset'
      },
      {
        type: 'mcq',
        question: 'Which mistake does the lesson highlight as a common cause of one guaranteed unmatched row at the start of every run?',
        options: [
          'Forgetting to strip the header row, so "Asset ID" itself is treated as a lookup value',
          'Sorting the spreadsheet alphabetically',
          'Using Manual run mode instead of Automatic',
          'Naming the Excel sheet "Sheet1"'
        ],
        answer: 'Forgetting to strip the header row, so "Asset ID" itself is treated as a lookup value'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-7: Column Grid Layout
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-7',
    title: 'Column Grid Layout Quiz',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What are the two approaches this lesson covers for finding column intersection points?',
        options: [
          'Reading existing Grids and computing intersections, or generating a mathematical rectangular array',
          'Manually clicking each point in Revit, or importing a CAD file',
          'Using only Room.Location for every column',
          'Using Excel.ReadFromFile to import coordinates'
        ],
        answer: 'Reading existing Grids and computing intersections, or generating a mathematical rectangular array'
      },
      {
        type: 'mcq',
        question: 'Which node returns the points where two curves cross?',
        options: ['Curve.Intersect', 'Curve.Cross', 'Point.FromCurves', 'Geometry.Intersect'],
        answer: 'Curve.Intersect'
      },
      {
        type: 'mcq',
        question: 'What do the <1> and <2> lacing markers accomplish in the Point.ByCoordinates example?',
        options: [
          'They force Dynamo to produce every combination of the two input lists (cross-product)',
          'They limit the output to exactly one point',
          'They convert numbers to strings',
          'They sort the resulting points by elevation'
        ],
        answer: 'They force Dynamo to produce every combination of the two input lists (cross-product)'
      },
      {
        type: 'truefalse',
        question: 'Without cross-product lacing, two flat 4-item spacing lists would only pair one-to-one into 4 points, not 16.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which node places a structural column at each verified point?',
        options: ['FamilyInstance.ByPoint', 'Column.ByPoint', 'Structure.PlaceColumn', 'Element.CreateAtPoint'],
        answer: 'FamilyInstance.ByPoint'
      },
      {
        type: 'mcq',
        question: 'What must already be true about the family type before FamilyInstance.ByPoint can place it?',
        options: [
          'The family type must already be loaded into DPC2025',
          'The family must be a shared parameter',
          'The family must have a Fire Rating parameter',
          'The family type must be renamed to match the level'
        ],
        answer: 'The family type must already be loaded into DPC2025'
      },
      {
        type: 'mcq',
        question: 'Which parameters does the lesson say should always be set explicitly after placing a column?',
        options: [
          'Base Level, Top Level, Base Offset, and Top Offset',
          'Mark and Number only',
          'Fire Rating and Asset ID',
          'View Template and Sheet Number'
        ],
        answer: 'Base Level, Top Level, Base Offset, and Top Offset'
      },
      {
        type: 'truefalse',
        question: 'Column placement scripts in this lesson are described as typically idempotent, safe to re-run any number of times.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is recommended before connecting geometry to a family placement node?',
        options: [
          'Verify the point count and placement visually using a Watch node and the background 3D preview',
          'Disable the background preview to speed up the graph',
          'Convert all points to a Code Block string',
          'Delete any existing Grids in the model'
        ],
        answer: 'Verify the point count and placement visually using a Watch node and the background 3D preview'
      },
      {
        type: 'fillblank',
        question: 'The lesson describes this as the first lesson in the course where Dynamo creates brand-new Revit ___ rather than editing existing ones.',
        answer: 'elements'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-8: View Creation Automation
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-8',
    title: 'View Creation Automation Quiz',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What manual process does this lesson\'s script replace?',
        options: [
          'Creating and renaming one floor plan view per level by hand, repeated for every level',
          'Manually numbering every room in the model',
          'Manually placing structural columns one at a time',
          'Manually exporting each level to Excel'
        ],
        answer: 'Creating and renaming one floor plan view per level by hand, repeated for every level'
      },
      {
        type: 'mcq',
        question: 'How does this lesson\'s script ensure views are generated in bottom-to-top order?',
        options: [
          'By sorting levels using List.SortByKey with Level.Elevation as the key',
          'By naming views alphabetically',
          'Views are always created in bottom-to-top order automatically',
          'By using Excel.ReadFromFile to define the order'
        ],
        answer: 'By sorting levels using List.SortByKey with Level.Elevation as the key'
      },
      {
        type: 'truefalse',
        question: 'A single view-creation node call, given a list of levels, replicates automatically to produce one view per level.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Why does the lesson recommend renaming each newly created view from its source Level?',
        options: [
          'Default view names are generic and uninformative (e.g., "Floor Plan 1")',
          'Revit requires all views to be renamed before saving',
          'Renaming improves rendering performance',
          'Unnamed views cannot be placed on sheets'
        ],
        answer: 'Default view names are generic and uninformative (e.g., "Floor Plan 1")'
      },
      {
        type: 'mcq',
        question: 'What must be true of view names within a Revit project?',
        options: ['They must be unique within the project', 'They can repeat freely across levels', 'They are auto-generated and cannot be changed', 'They must match the sheet number exactly'],
        answer: 'They must be unique within the project'
      },
      {
        type: 'mcq',
        question: 'What is a View Template, as described in this lesson?',
        options: [
          'A saved set of view properties (visibility, detail level, view range, overrides) applied for consistency',
          'A separate Revit file used only for printing',
          'A required parameter on every Level element',
          'A type of family used for titleblocks'
        ],
        answer: 'A saved set of view properties (visibility, detail level, view range, overrides) applied for consistency'
      },
      {
        type: 'truefalse',
        question: 'Assigning a View Template to generated views is described as mandatory in every firm\'s workflow.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Where should you verify the result after running the view creation script?',
        options: [
          'The Project Browser, under Views (all) → Floor Plans',
          'The Dynamo console log only',
          'The Excel export folder',
          'The Shared Parameters dialog'
        ],
        answer: 'The Project Browser, under Views (all) → Floor Plans'
      },
      {
        type: 'fillblank',
        question: 'This lesson closes out the course\'s core script set; the next lesson in the track moves into ___ placement driven by a Room Data Schedule.',
        answer: 'furniture'
      },
      {
        type: 'mcq',
        question: 'What should you check before attempting to rename a newly created view to a target name?',
        options: [
          'Whether a view with that exact name already exists, since the rename will error if it does',
          'Whether the model has a Fire Rating parameter',
          'Whether Manual run mode is disabled',
          'Whether the level has any doors on it'
        ],
        answer: 'Whether a view with that exact name already exists, since the rename will error if it does'
      }
    ]
  }

];
