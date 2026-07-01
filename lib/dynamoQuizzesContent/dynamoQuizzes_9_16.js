// ============================================================
// DYNAMO QUIZZES DATA — dyn-9 through dyn-16
// Merge these entries into your lib/dynamoQuizzesData.js array
// ============================================================

export const dynamoQuizzes_9_16 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-9: Lists & List Management
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-9',
    title: 'Lists & List Management — Lacing, Levels & Flattening',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'In Dynamo, what is even a single number technically treated as?',
        options: ['A dictionary', 'A list containing one item', 'A geometry object', 'A code block'],
        answer: 'A list containing one item'
      },
      {
        type: 'mcq',
        question: 'What does the @L (Level) indicator on an input port control?',
        options: [
          'Which depth of a nested list structure a node operates on',
          'The color of the wire',
          'The number of times a node runs',
          'Whether a node is frozen'
        ],
        answer: 'Which depth of a nested list structure a node operates on'
      },
      {
        type: 'mcq',
        question: 'Which lacing mode pairs items index-by-index and stops at the length of the shortest input list?',
        options: ['Longest', 'Shortest', 'Cross Product', 'Auto'],
        answer: 'Shortest'
      },
      {
        type: 'mcq',
        question: 'Which lacing mode pairs every item in one list with every item in another list?',
        options: ['Shortest', 'Longest', 'Cross Product', 'Flatten'],
        answer: 'Cross Product'
      },
      {
        type: 'truefalse',
        question: 'With Longest lacing, the shorter list repeats its last item to match the length of the longer list.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is the default lacing mode on most Dynamo nodes?',
        options: ['Cross Product', 'Longest', 'Shortest', 'Manual'],
        answer: 'Shortest'
      },
      {
        type: 'mcq',
        question: 'A list of 4 X-values and a list of 3 Y-values combined with Cross Product lacing on Point.ByCoordinates produces how many points?',
        options: ['3', '4', '7', '12'],
        answer: '12'
      },
      {
        type: 'mcq',
        question: 'What does List.Flatten do to a nested list?',
        options: [
          'Collapses nested list structure down into a single (or less nested) list',
          'Sorts the list alphabetically',
          'Duplicates every item in the list',
          'Removes all boolean values'
        ],
        answer: 'Collapses nested list structure down into a single (or less nested) list'
      },
      {
        type: 'truefalse',
        question: 'List.Combine applies a function across two or more lists simultaneously, taking one item from each list per call.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'List.___ByIndex retrieves one item from a list at a specified position (0-indexed).',
        answer: 'GetItemAt'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-10: Placing & Modifying Revit Elements
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-10',
    title: 'Placing & Modifying Revit Elements with Dynamo',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which node places one family instance at each point in a list of points?',
        options: ['FamilyInstance.ByPoint', 'Wall.ByCurveAndHeight', 'Element.SetParameterByName', 'List.Flatten'],
        answer: 'FamilyInstance.ByPoint'
      },
      {
        type: 'mcq',
        question: 'Which node creates a wall by sweeping a wall type profile along a curve for a given height?',
        options: ['Wall.ByCurveAndHeight', 'FamilyInstance.ByPoint', 'Level.ByElevation', 'Room.Boundaries'],
        answer: 'Wall.ByCurveAndHeight'
      },
      {
        type: 'truefalse',
        question: 'You must manually add a Transaction.Start node before any Dynamo graph can modify a Revit model.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'According to the lesson, what happens when Dynamo places 500 family instances in a single Run?',
        options: [
          'Each instance requires a separate manual Undo in Revit',
          'It happens inside essentially one Revit operation, so a single Undo can remove all 500',
          'Revit crashes after 100 elements',
          'Dynamo requires you to save between each element'
        ],
        answer: 'It happens inside essentially one Revit operation, so a single Undo can remove all 500'
      },
      {
        type: 'mcq',
        question: 'Which Run mode is strongly recommended for any graph that writes changes to the Revit model?',
        options: ['Automatic', 'Manual', 'Periodic', 'Background'],
        answer: 'Manual'
      },
      {
        type: 'mcq',
        question: 'Which node lets you pick a single existing element directly from the Revit canvas for modification?',
        options: ['Select Model Element', 'FamilyInstance.ByPoint', 'List.Create', 'Level.ByElevation'],
        answer: 'Select Model Element'
      },
      {
        type: 'truefalse',
        question: 'Select Model Element and Select Elements in View keep a live link to the Revit model.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which node is used to change a parameter value on placed or selected elements?',
        options: ['Element.SetParameterByName', 'Wall.ByCurveAndHeight', 'List.Flatten', 'Curve.PointAtParameter'],
        answer: 'Element.SetParameterByName'
      },
      {
        type: 'mcq',
        question: 'What does the lesson recommend using instead of manual selection for repeatable, non-manual element collection?',
        options: [
          'Category- or filter-based collection nodes',
          'Always re-selecting manually each run',
          'The Family Types dropdown',
          'Excel.ReadFromFile'
        ],
        answer: 'Category- or filter-based collection nodes'
      },
      {
        type: 'fillblank',
        question: 'Family instances and walls typically need a ___ input to establish their vertical placement context in the model.',
        answer: 'Level'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-11: Working with Revit Parameters
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-11',
    title: 'Working with Revit Parameters — Reading & Writing Data',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which node reads a parameter\'s current value from an element by name?',
        options: ['Element.GetParameterValueByName', 'Element.SetParameterByName', 'Element.Parameters', 'List.GetItemAtIndex'],
        answer: 'Element.GetParameterValueByName'
      },
      {
        type: 'mcq',
        question: 'Which node returns a dictionary-like structure of ALL parameters and values on an element at once?',
        options: ['Element.Parameters', 'Element.GetParameterValueByName', 'Parameter.ParameterByName', 'List.Create'],
        answer: 'Element.Parameters'
      },
      {
        type: 'truefalse',
        question: 'Changing a Type Parameter with Element.SetParameterByName affects only the single selected instance.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which of these is an example of an Instance Parameter given in the lesson?',
        options: ['Mark', 'Width (on a door type)', 'Fire Rating (on many door types)', 'Family Type name'],
        answer: 'Mark'
      },
      {
        type: 'mcq',
        question: 'What is the standard approach for firm-wide custom data that needs to be reused consistently across multiple projects?',
        options: ['Project Parameters', 'Shared Parameters', 'Built-in Parameters only', 'Type Parameters only'],
        answer: 'Shared Parameters'
      },
      {
        type: 'truefalse',
        question: 'Area on a room is a computed parameter and cannot be written to directly with Element.SetParameterByName.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'How can you change a room\'s Area value according to the lesson?',
        options: [
          'Write a new value directly with Element.SetParameterByName',
          'Change the underlying room boundary geometry',
          'It is impossible to ever change',
          'Use Room.Perimeter instead'
        ],
        answer: 'Change the underlying room boundary geometry'
      },
      {
        type: 'mcq',
        question: 'Which node retrieves a Parameter object itself (rather than just its value), useful for checking if it is read-only?',
        options: ['Parameter.ParameterByName', 'Element.GetParameterValueByName', 'List.Flatten', 'Family.Types'],
        answer: 'Parameter.ParameterByName'
      },
      {
        type: 'mcq',
        question: 'Which parameter source is guaranteed to have consistent names across virtually every Revit project?',
        options: ['Project Parameters', 'Built-in Parameters', 'Shared Parameters only', 'Custom family parameters'],
        answer: 'Built-in Parameters'
      },
      {
        type: 'fillblank',
        question: 'If a parameter field is greyed out and un-editable in the Revit Properties palette, it is ___ and Dynamo cannot write to it either.',
        answer: 'read-only'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-12: Logic & Conditionals
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-12',
    title: 'Logic & Conditionals — If Statements & Filtering Elements',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does a comparison node like > or == output?',
        options: ['A boolean (true/false) value', 'A string', 'A geometry object', 'A Family Type'],
        answer: 'A boolean (true/false) value'
      },
      {
        type: 'mcq',
        question: 'What three inputs does the If node take?',
        options: [
          'test, true, false',
          'element, parameterName, value',
          'list, mask, index',
          'file, sheetName, data'
        ],
        answer: 'test, true, false'
      },
      {
        type: 'truefalse',
        question: 'The && (And) node outputs true only if ALL of its boolean inputs are true.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'The || (Or) node outputs true when...',
        options: [
          'all inputs are true',
          'at least one input is true',
          'no inputs are true',
          'exactly one input is false'
        ],
        answer: 'at least one input is true'
      },
      {
        type: 'mcq',
        question: 'Which node splits a list into "in" and "out" results based on a parallel list of booleans?',
        options: ['List.FilterByBoolMask', 'List.Flatten', 'List.Combine', 'Element.Parameters'],
        answer: 'List.FilterByBoolMask'
      },
      {
        type: 'mcq',
        question: 'In List.FilterByBoolMask, which output contains the items where the mask was true?',
        options: ['in', 'out', 'true', 'pass'],
        answer: 'in'
      },
      {
        type: 'truefalse',
        question: 'List.FilterByBoolMask requires the mask list to be a different length than the original list.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which node is described as the standard tool for inspecting intermediate values when debugging conditional logic?',
        options: ['Watch node', 'Code Block', 'List.Create', 'Select Model Element'],
        answer: 'Watch node'
      },
      {
        type: 'mcq',
        question: 'According to the lesson, what is the most common logic bug related to And/Or nodes?',
        options: [
          'Mixing up And (all must be true) with Or (either can be true)',
          'Using too many comparison nodes',
          'Forgetting to flatten a list',
          'Using the wrong lacing mode'
        ],
        answer: 'Mixing up And (all must be true) with Or (either can be true)'
      },
      {
        type: 'fillblank',
        question: 'In the practical filtering example, doors are filtered where Level equals "Level 2" ___ (combinator) Width is greater than 900.',
        answer: 'AND'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-13: Excel & Dynamo
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-13',
    title: 'Excel & Dynamo — Importing & Exporting Spreadsheet Data',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which node reads an existing .xlsx workbook into Dynamo as a list of lists?',
        options: ['Excel.ReadFromFile', 'Excel.WriteToFile', 'Data.ExportCSV', 'List.Flatten'],
        answer: 'Excel.ReadFromFile'
      },
      {
        type: 'mcq',
        question: 'In the list-of-lists structure used by Excel.WriteToFile, what does the outer list represent?',
        options: ['Rows', 'Columns', 'Worksheets', 'Workbooks'],
        answer: 'Rows'
      },
      {
        type: 'mcq',
        question: 'Which nodes provide the same Dynamo <-> spreadsheet round trip using plain-text comma-separated files instead of .xlsx?',
        options: ['Data.ImportCSV and Data.ExportCSV', 'Excel.ReadFromFile and Excel.WriteToFile', 'List.Create and List.Combine', 'Element.GetParameterValueByName and Element.SetParameterByName'],
        answer: 'Data.ImportCSV and Data.ExportCSV'
      },
      {
        type: 'truefalse',
        question: 'CSV files support multiple named worksheets/tabs in a single file, just like Excel workbooks.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which node is used to combine parallel Revit data lists (IDs, names, areas) into the row-based structure Excel expects?',
        options: ['List.Create', 'List.Flatten', 'Element.Parameters', 'View.ByNameCropBox'],
        answer: 'List.Create'
      },
      {
        type: 'mcq',
        question: 'According to the round-trip pattern, what column should always be included in an export to allow safe re-matching?',
        options: ['Element ID', 'Row Color', 'Sheet Number', 'Family Type'],
        answer: 'Element ID'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends matching re-imported Excel rows back to elements by their row position rather than by Element ID.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is a common Excel auto-formatting issue that can silently corrupt round-tripped data, such as a Mark value of "007"?',
        options: [
          'Excel converting it to "7" by stripping leading zeros',
          'Excel deleting the entire row',
          'Excel automatically renaming the column',
          'Excel converting it to a formula'
        ],
        answer: 'Excel converting it to "7" by stripping leading zeros'
      },
      {
        type: 'mcq',
        question: 'What does the lesson recommend doing before running a round-trip script against an entire model\'s worth of data?',
        options: [
          'Test the round-trip on a small subset of elements first',
          'Disable Manual run mode',
          'Delete the Element ID column',
          'Skip the header row'
        ],
        answer: 'Test the round-trip on a small subset of elements first'
      },
      {
        type: 'fillblank',
        question: 'Excel.WriteToFile\'s ___Row and ___Column inputs (0-indexed) define the cell position to begin writing.',
        answer: 'start'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-14: Automating Room & Space Data
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-14',
    title: 'Automating Room & Space Data with Dynamo',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which node returns the boundary curve loops that define a room\'s extent, the same boundary Revit uses to calculate area?',
        options: ['Room.Boundaries', 'Room.Perimeter', 'Element.Parameters', 'Wall.ByCurveAndHeight'],
        answer: 'Room.Boundaries'
      },
      {
        type: 'truefalse',
        question: 'Unplaced rooms (rooms in the schedule but not placed in a plan) are still returned by a category collector.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which room parameter is computed automatically from the boundary and cannot be set directly?',
        options: ['Area', 'Name', 'Number', 'Department'],
        answer: 'Area'
      },
      {
        type: 'mcq',
        question: 'What does a Room.Boundaries result with multiple curve loops typically indicate?',
        options: [
          'The room has an internal void, such as wrapping around a core',
          'The room has no Area parameter',
          'The room is unplaced',
          'The room is on the wrong Level'
        ],
        answer: 'The room has an internal void, such as wrapping around a core'
      },
      {
        type: 'mcq',
        question: 'What is a common shared/project parameter used to group rooms for department-based reporting?',
        options: ['Department', 'Mark', 'Comments', 'Fire Rating'],
        answer: 'Department'
      },
      {
        type: 'truefalse',
        question: 'A room with Area == 0 can typically be fixed simply by writing a new numeric value into the Area parameter.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'According to the lesson, what is Dynamo\'s real advantage over a native Revit room schedule?',
        options: [
          'Bulk editing and cross-referencing external data sources like Excel department lookups',
          'It is the only way to ever see room Area values',
          'It replaces the need for room parameters entirely',
          'It automatically creates room boundaries from nothing'
        ],
        answer: 'Bulk editing and cross-referencing external data sources like Excel department lookups'
      },
      {
        type: 'mcq',
        question: 'Which node returns the total boundary length of a room, useful for skirting/finish quantity takeoffs?',
        options: ['Room.Perimeter', 'Room.Boundaries', 'List.Flatten', 'Element.SetParameterByName'],
        answer: 'Room.Perimeter'
      },
      {
        type: 'mcq',
        question: 'For a large multi-building project, what filtering order does the lesson suggest for better performance?',
        options: [
          'Filter by Level first, then by Department',
          'Filter by Department first, then by Level',
          'Filter by Area first always',
          'Filtering order never matters'
        ],
        answer: 'Filter by Level first, then by Department'
      },
      {
        type: 'fillblank',
        question: 'To combine a Department filter and a Level filter into one condition, you would use the ___ (combinator) node.',
        answer: 'And'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-15: Creating & Placing Families Automatically
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-15',
    title: 'Creating & Placing Families Automatically',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which node retrieves a Family Type object by matching family name and type name as strings?',
        options: ['FamilyType.ByName', 'Family.Types', 'FamilyInstance.ByPoint', 'Room.Boundaries'],
        answer: 'FamilyType.ByName'
      },
      {
        type: 'mcq',
        question: 'Which node returns ALL loaded type variants of a given Family as a list?',
        options: ['Family.Types', 'FamilyType.ByName', 'Element.Parameters', 'List.Create'],
        answer: 'Family.Types'
      },
      {
        type: 'truefalse',
        question: 'A family must already be loaded into the project before FamilyType.ByName or Family.Types can return a valid type.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which lacing approach is used when different points need different family types, with a types list matching the points list?',
        options: ['Shortest or matching-index lacing', 'Cross Product only', 'No lacing is needed', 'List.Flatten'],
        answer: 'Shortest or matching-index lacing'
      },
      {
        type: 'mcq',
        question: 'What can be fed directly into Element.SetParameterByName without a separate selection step after placement?',
        options: [
          'The Element objects returned by FamilyInstance.ByPoint',
          'The original point list only',
          'The Family Type name as a string',
          'The Room.Boundaries output'
        ],
        answer: 'The Element objects returned by FamilyInstance.ByPoint'
      },
      {
        type: 'mcq',
        question: 'What is a recommended technique for determining rotation at placement, rather than a fixed hard-coded angle?',
        options: [
          'Deriving rotation from the geometry itself, such as a curve\'s tangent direction',
          'Always rotating every instance by exactly 90 degrees',
          'Never rotating placed instances',
          'Using Element.Parameters to guess rotation'
        ],
        answer: 'Deriving rotation from the geometry itself, such as a curve\'s tangent direction'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends running a placement script against the full model immediately, without testing on a small subset first.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which node is suggested for generating points along a curve at even spacing, e.g. for bollards or lights?',
        options: ['Curve.PointAtParameter', 'Room.Perimeter', 'Element.Parameters', 'View.SetCategoryVisibility'],
        answer: 'Curve.PointAtParameter'
      },
      {
        type: 'mcq',
        question: 'What run mode should be kept active throughout placement graph development, according to the lesson?',
        options: ['Manual', 'Automatic', 'Background', 'Periodic'],
        answer: 'Manual'
      },
      {
        type: 'fillblank',
        question: 'Points derived from ___.Boundaries (introduced in the Rooms lesson) can be used to place one instance per room at its centroid.',
        answer: 'Room'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-16: Generating Views & Sheets with Dynamo
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-16',
    title: 'Generating Views & Sheets with Dynamo',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which node creates a new Revit view with a specified name and crop region?',
        options: ['View.ByNameCropBox', 'Sheet.ByNameNumberViews', 'Room.Boundaries', 'Excel.ReadFromFile'],
        answer: 'View.ByNameCropBox'
      },
      {
        type: 'mcq',
        question: 'Which node creates a sheet with a name, number, titleblock, and one or more views in a single operation?',
        options: ['Sheet.ByNameNumberViews', 'View.ByNameCropBox', 'FamilyInstance.ByPoint', 'List.FilterByBoolMask'],
        answer: 'Sheet.ByNameNumberViews'
      },
      {
        type: 'truefalse',
        question: 'A titleblock is referenced the same way as any other Family Type, using the FamilyType.ByName pattern.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is the benefit of driving sheet creation from an Excel sheet register, according to the lesson?',
        options: [
          'A project lead can maintain the sheet list in a familiar spreadsheet rather than inside Dynamo',
          'It removes the need for titleblocks entirely',
          'It eliminates the need for Manual run mode',
          'It automatically deletes old sheets'
        ],
        answer: 'A project lead can maintain the sheet list in a familiar spreadsheet rather than inside Dynamo'
      },
      {
        type: 'mcq',
        question: 'What must be done before re-running a sheet-register-driven graph to avoid duplicate sheets?',
        options: [
          'Filter out sheet numbers that already exist in the model',
          'Delete all existing sheets first',
          'Disable the titleblock input',
          'Convert the register to CSV'
        ],
        answer: 'Filter out sheet numbers that already exist in the model'
      },
      {
        type: 'mcq',
        question: 'Which node lets a script turn a specific category on or off within a view?',
        options: ['View.SetCategoryVisibility', 'Element.SetParameterByName', 'Room.Perimeter', 'List.Combine'],
        answer: 'View.SetCategoryVisibility'
      },
      {
        type: 'truefalse',
        question: 'View.SetCategoryVisibility can be applied consistently across every newly generated view in a single graph run.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is used to collect existing sheets and read their Sheet Number parameter before filtering the register?',
        options: [
          'A category collector, the same pattern used for collecting rooms',
          'FamilyInstance.ByPoint',
          'Curve.PointAtParameter',
          'List.Flatten'
        ],
        answer: 'A category collector, the same pattern used for collecting rooms'
      },
      {
        type: 'mcq',
        question: 'What is the recommended run mode and validation approach before running a full sheet-generation graph, per the lesson?',
        options: [
          'Manual mode, validated on a small subset first',
          'Automatic mode, run against the full register immediately',
          'Background mode with no validation',
          'It does not matter, any mode works equally well'
        ],
        answer: 'Manual mode, validated on a small subset first'
      },
      {
        type: 'fillblank',
        question: 'A production sheet generation graph typically combines Excel import, parameter filtering, family type lookups, and view/sheet ___ nodes.',
        answer: 'creation'
      }
    ]
  }

]
