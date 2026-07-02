// ============================================================
// DYNAMO PRACTICE QUIZZES DATA — dynp-9 through dynp-16
// Merge these entries into your lib/dynamoPracticeQuizzesData.js array
// ============================================================

export const dynamoPracticeQuizzes_9_16 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-9: Placing Furniture from a Schedule
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-9',
    title: 'Placing Furniture from a Schedule Quiz',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Where should a production furniture placement script get its room-to-type instructions from?',
        options: [
          'An external schedule (Excel or in-model), not hard-coded inside the graph',
          'Directly typed into a Code Block for each room',
          'The Family Types dropdown only',
          'A Watch node'
        ],
        answer: 'An external schedule (Excel or in-model), not hard-coded inside the graph'
      },
      {
        type: 'mcq',
        question: 'What two criteria does the lesson recommend matching schedule rows to Room elements by?',
        options: ['Department and Name', 'Element ID and Mark', 'Level and Fire Rating', 'Room.Location and Comments'],
        answer: 'Department and Name'
      },
      {
        type: 'mcq',
        question: 'Which node returns a Room\'s internal placement/insertion point?',
        options: ['Room.Location', 'Room.Boundary', 'Room.Center', 'Element.GetPoint'],
        answer: 'Room.Location'
      },
      {
        type: 'truefalse',
        question: 'The final furniture placement point is computed as Room.Location plus the schedule-defined Offset X/Y values.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which node resolves a schedule\'s Furniture Family column string to an actual Family Type object?',
        options: ['FamilyType.ByName', 'Family.LoadType', 'Element.GetFamilyType', 'Type.FromString'],
        answer: 'FamilyType.ByName'
      },
      {
        type: 'mcq',
        question: 'What is the single most common failure point when running this script for the first time on a new model?',
        options: [
          'A furniture family referenced in the schedule is not yet loaded into the project',
          'The Room category cannot be collected',
          'Excel.ReadFromFile cannot read .xlsx files',
          'Room.Location always returns null'
        ],
        answer: 'A furniture family referenced in the schedule is not yet loaded into the project'
      },
      {
        type: 'mcq',
        question: 'Which node places the furniture instances once type and point are resolved?',
        options: ['FamilyInstance.ByPoint', 'FamilyInstance.ByCurve', 'Element.CreateInstance', 'Room.PlaceFurniture'],
        answer: 'FamilyInstance.ByPoint'
      },
      {
        type: 'truefalse',
        question: 'FamilyType.ByName can automatically load a family that is not yet present in the project.',
        answer: false
      },
      {
        type: 'fillblank',
        question: 'Cross-checking ___ as a second match criterion (alongside Name) catches the case where two rooms share the same name but belong to different departments.',
        answer: 'Department'
      },
      {
        type: 'mcq',
        question: 'What does the lesson recommend before running the full furniture layout across the entire schedule?',
        options: [
          'Validate matching and point calculation on a small subset first',
          'Switch to Automatic run mode',
          'Delete all existing furniture in the model',
          'Disable the background preview'
        ],
        answer: 'Validate matching and point calculation on a small subset first'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-10: Auto-Creating Sheets & Views
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-10',
    title: 'Auto-Creating Sheets & Views Quiz',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What drives the entire batch sheet-creation process in this lesson?',
        options: [
          'An Excel-driven sheet register listing Sheet Number, Sheet Name, and View Name',
          'A single hard-coded sheet number typed into the graph',
          'The Revit Project Browser directly',
          'A COBie export file'
        ],
        answer: 'An Excel-driven sheet register listing Sheet Number, Sheet Name, and View Name'
      },
      {
        type: 'mcq',
        question: 'Which node is used to split the register\'s list-of-lists into parallel column lists?',
        options: ['List.GetItemAtIndex', 'List.GroupByKey', 'List.SortByKey', 'List.Flatten'],
        answer: 'List.GetItemAtIndex'
      },
      {
        type: 'truefalse',
        question: 'A titleblock is treated in Dynamo as just another Family Type, resolved the same way as any other placed family.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which node creates sheets and places views in one batch run?',
        options: ['Sheet.ByNameNumberViews', 'View.PlaceOnSheet', 'Sheet.Create', 'Titleblock.ByNameNumberViews'],
        answer: 'Sheet.ByNameNumberViews'
      },
      {
        type: 'mcq',
        question: 'Why does the lesson recommend defining an explicit viewport placement location?',
        options: [
          'So every sheet in the batch comes out consistent instead of needing manual nudging afterward',
          'Because Revit requires a fixed viewport location by default',
          'Because Excel.WriteToFile requires it',
          'Because titleblocks cannot be resized otherwise'
        ],
        answer: 'So every sheet in the batch comes out consistent instead of needing manual nudging afterward'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends testing the graph by wiring in single hard-coded values for one sheet before working with the full parallel lists.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What does the lesson suggest for a quick validation run before processing the full register?',
        options: [
          'Using a short sub-list (e.g., the first 3 rows)',
          'Disabling Manual run mode',
          'Deleting the titleblock family',
          'Running the script twice in a row'
        ],
        answer: 'Using a short sub-list (e.g., the first 3 rows)'
      },
      {
        type: 'mcq',
        question: 'A mismatch between a split column list\'s row count and the original register usually indicates what?',
        options: [
          'A blank row or a merged cell in the source spreadsheet',
          'A corrupted .dyn file',
          'An incorrect Revit version',
          'A missing titleblock family'
        ],
        answer: 'A blank row or a merged cell in the source spreadsheet'
      },
      {
        type: 'fillblank',
        question: 'A spreadsheet-based sheet register can be edited by anyone on the project team without opening ___.',
        answer: 'Dynamo'
      },
      {
        type: 'mcq',
        question: 'What is the core efficiency payoff described in this lesson?',
        options: [
          'One graph run against a large sheet register replaces dozens of manual sheet-creation operations',
          'Excel files load faster than Revit schedules',
          'Sheets no longer need titleblocks',
          'Views no longer need to be named'
        ],
        answer: 'One graph run against a large sheet register replaces dozens of manual sheet-creation operations'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-11: ISO 19650 Naming Convention
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-11',
    title: 'ISO 19650 Naming Convention Quiz',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What naming template does DPC2025 use, following the ISO 19650-based convention?',
        options: [
          'Project-Originator-Volume-Level-Type-Role-Number',
          'Number-Type-Role-Project',
          'Level-Project-Role-Type-Number',
          'Originator-Number-Project'
        ],
        answer: 'Project-Originator-Volume-Level-Type-Role-Number'
      },
      {
        type: 'truefalse',
        question: 'ISO 19650 mandates one single universal naming string that every project worldwide must use exactly.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'In the DPC2025 example "DPC-XX-00-00-DR-A-1001", what does "DR" represent?',
        options: ['Type (Drawing)', 'Role (Architectural)', 'Volume', 'Originator'],
        answer: 'Type (Drawing)'
      },
      {
        type: 'mcq',
        question: 'Which node/technique does the lesson use to construct the final compliant name string?',
        options: ['String.Concat (or equivalent string-building node)', 'Excel.WriteToFile', 'List.GroupByKey', 'Element.HasParameter'],
        answer: 'String.Concat (or equivalent string-building node)'
      },
      {
        type: 'mcq',
        question: 'Since core Dynamo has no standard regex node, how does the lesson achieve pattern validation?',
        options: [
          'String.Split on the hyphen, followed by segment-by-segment comparison checks',
          'By manually reading every name in the Project Browser',
          'By exporting to Excel and using Excel formulas exclusively',
          'By relying on Revit\'s built-in validation dialog'
        ],
        answer: 'String.Split on the hyphen, followed by segment-by-segment comparison checks'
      },
      {
        type: 'truefalse',
        question: 'The validation pass should run only across the views/sheets the renaming script touched, not the entire model.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Why must the constructed Number list be checked for duplicates before writing?',
        options: [
          'Revit enforces unique Sheet Numbers, so a collision mid-batch will cause the rename to fail partway through',
          'Duplicate numbers cause Dynamo to crash immediately',
          'Excel cannot export duplicate values',
          'View names cannot contain numbers'
        ],
        answer: 'Revit enforces unique Sheet Numbers, so a collision mid-batch will cause the rename to fail partway through'
      },
      {
        type: 'mcq',
        question: 'Which node writes the constructed names back onto Sheets and Views?',
        options: ['Element.SetParameterByName', 'Element.Rename', 'Sheet.SetName', 'View.WriteParameter'],
        answer: 'Element.SetParameterByName'
      },
      {
        type: 'fillblank',
        question: 'List.FilterByBoolMask is used to isolate a clean list of "___-conforming" names for manual review.',
        answer: 'non'
      },
      {
        type: 'mcq',
        question: 'What does the lesson recommend before renaming an entire model\'s views and sheets in one pass?',
        options: [
          'Test with Watch nodes and run against a small subset first (e.g., one discipline\'s sheets)',
          'Disable Manual run mode so it renames automatically',
          'Delete all existing sheet numbers first',
          'Export the model to IFC before renaming'
        ],
        answer: 'Test with Watch nodes and run against a small subset first (e.g., one discipline\'s sheets)'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-12: Finding Untagged Elements
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-12',
    title: 'Finding Untagged Elements Quiz',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What two collections does this check require, both scoped to the same view?',
        options: [
          'All elements of the target category, and all tags in that view',
          'All rooms and all doors',
          'All levels and all sheets',
          'All linked model elements and all host elements'
        ],
        answer: 'All elements of the target category, and all tags in that view'
      },
      {
        type: 'truefalse',
        question: 'Dynamo has a single out-of-the-box node that directly answers "which element does this tag belong to."',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Why does this check typically require a Python node?',
        options: [
          'A Tag\'s host element reference is exposed through the Revit API, not a simple stock Dynamo node',
          'Python is required to collect any Revit category',
          'Excel.ReadFromFile only works inside Python nodes',
          'Watch nodes cannot display tag data'
        ],
        answer: 'A Tag\'s host element reference is exposed through the Revit API, not a simple stock Dynamo node'
      },
      {
        type: 'mcq',
        question: 'How are "untagged" elements computed once the tagged Element ID list is obtained?',
        options: [
          'As the set difference — elements whose ID does not appear in the tagged-ID list',
          'As the union of all elements and all tags',
          'By sorting elements alphabetically by Mark',
          'By counting elements per level'
        ],
        answer: 'As the set difference — elements whose ID does not appear in the tagged-ID list'
      },
      {
        type: 'mcq',
        question: 'Which node builds the boolean mask used to filter untagged elements?',
        options: ['List.ContainsItem (or equivalent membership check)', 'List.SortByKey', 'List.GroupByKey', 'List.Transpose'],
        answer: 'List.ContainsItem (or equivalent membership check)'
      },
      {
        type: 'truefalse',
        question: 'An element tagged only in a different view than the one being checked will still show as "untagged" for the view being checked, and this is expected behavior.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What does the lesson recommend including in the exported QA report beyond raw Element IDs?',
        options: [
          'A human-readable identifier, such as Mark or Room Number',
          'The Dynamo graph\'s file size',
          'The Revit version number only',
          'The user\'s login name'
        ],
        answer: 'A human-readable identifier, such as Mark or Room Number'
      },
      {
        type: 'mcq',
        question: 'What does this check NOT verify, according to the "Limitations" section?',
        options: [
          'Whether an existing tag\'s displayed value is correct or up to date',
          'Whether an element exists at all',
          'Whether the Element ID is a valid integer',
          'Whether the view is a plan view'
        ],
        answer: 'Whether an existing tag\'s displayed value is correct or up to date'
      },
      {
        type: 'fillblank',
        question: 'To scale the check across a whole project, the lesson recommends looping the logic across every view and every relevant ___.',
        answer: 'category'
      },
      {
        type: 'mcq',
        question: 'Why should the Python script\'s API calls be verified against the current Revit version?',
        options: [
          'Because the exact Revit API property names for tag host references vary by Revit version',
          'Because Python nodes expire after one year',
          'Because Watch nodes cannot display Python output',
          'Because Excel.WriteToFile depends on the Revit version'
        ],
        answer: 'Because the exact Revit API property names for tag host references vary by Revit version'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-13: Door Schedule Report
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-13',
    title: 'Door Schedule Report Quiz',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'How should doors be collected for a project-wide schedule report, as opposed to a QA check scoped to one view?',
        options: [
          'Scoped to the whole project, not "Elements in Active View"',
          'Scoped only to the active view',
          'Scoped only to Level 1',
          'Scoped only to unplaced doors'
        ],
        answer: 'Scoped to the whole project, not "Elements in Active View"'
      },
      {
        type: 'mcq',
        question: 'Which of these is listed as a type parameter in the door schedule columns?',
        options: ['Fire Rating', 'Mark', 'Level', 'Comments'],
        answer: 'Fire Rating'
      },
      {
        type: 'truefalse',
        question: 'Element.GetParameterValueByName behaves differently in Dynamo depending on whether a parameter is instance-level or type-level.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What structure does Excel.WriteToFile require for the assembled door data?',
        options: [
          'A list of lists — header row first, then one row per door',
          'A single flat list of door marks only',
          'A dictionary keyed by Element ID',
          'A nested JSON object'
        ],
        answer: 'A list of lists — header row first, then one row per door'
      },
      {
        type: 'mcq',
        question: 'What does the lesson recommend to keep Mark values from being auto-formatted incorrectly in Excel?',
        options: [
          'Keeping the Mark column as text explicitly',
          'Always writing Mark as a number',
          'Never including Mark in the export',
          'Sorting by Fire Rating instead of Mark'
        ],
        answer: 'Keeping the Mark column as text explicitly'
      },
      {
        type: 'truefalse',
        question: 'Since this script only reads data and never writes to the model, it is safe to run in Automatic mode, unlike model-modifying scripts.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Why does the lesson recommend sorting the assembled data rows before export?',
        options: [
          'So the schedule reads in a sensible, predictable order rather than an arbitrary collection order',
          'Because Excel.WriteToFile requires sorted input or it will error',
          'Because unsorted lists cannot be exported at all',
          'Because sorting is required to add a header row'
        ],
        answer: 'So the schedule reads in a sensible, predictable order rather than an arbitrary collection order'
      },
      {
        type: 'fillblank',
        question: 'A blank Fire Rating column across many doors is described in the lesson as a common real-world ___ finding in itself.',
        answer: 'QA'
      },
      {
        type: 'mcq',
        question: 'What does the lesson suggest for a dated deliverable that will be re-exported over time?',
        options: [
          'Varying the file name per export (e.g., including the date) so previous versions are preserved',
          'Always overwriting the same file with no version history',
          'Disabling the header row after the first export',
          'Switching the Mark column to a number format'
        ],
        answer: 'Varying the file name per export (e.g., including the date) so previous versions are preserved'
      },
      {
        type: 'mcq',
        question: 'Why are unplaced/schedule-only door entries described as not an issue for this script, unlike unplaced rooms?',
        options: [
          'Doors are host-based and only exist once actually placed in a wall',
          'Doors cannot have a Mark parameter until placed',
          'Doors are always placed automatically by Revit',
          'This script ignores all door instance parameters'
        ],
        answer: 'Doors are host-based and only exist once actually placed in a wall'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-14: Structural Framing Automation
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-14',
    title: 'Structural Framing Automation Quiz',
    passingScore: 75,
    questions: [
      {
        type: 'truefalse',
        question: 'This script creates a brand-new grid system from scratch rather than reading DPC2025\'s existing Grid elements.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What lacing type is used to compute intersections between numbered and lettered grid curves?',
        options: ['Cross Product', 'Shortest', 'Longest', 'Auto'],
        answer: 'Cross Product'
      },
      {
        type: 'mcq',
        question: 'Which node connects two adjacent intersection points into a framing centerline?',
        options: ['Line.ByStartPointEndPoint', 'Curve.Intersect', 'Point.ByCoordinates', 'PolyCurve.ByPoints'],
        answer: 'Line.ByStartPointEndPoint'
      },
      {
        type: 'mcq',
        question: 'Which node places structural framing along a generated centerline curve?',
        options: ['FamilyInstance.ByCurve', 'FamilyInstance.ByPoint', 'Element.CreateFraming', 'Curve.ToFraming'],
        answer: 'FamilyInstance.ByCurve'
      },
      {
        type: 'mcq',
        question: 'What parameter distinguishes primary framing along main grid lines from secondary infill framing in DPC2025?',
        options: ['Structural Usage (e.g., "Girder" vs "Beam")', 'Fire Rating', 'Mark', 'Level'],
        answer: 'Structural Usage (e.g., "Girder" vs "Beam")'
      },
      {
        type: 'truefalse',
        question: 'Correct centerline geometry alone guarantees correct physical placement of structural framing, without needing to set Justification or Offset.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What do Start/End Justification parameters control?',
        options: [
          'Which part of the framing cross-section aligns to the placement curve',
          'The structural framing family\'s load rating',
          'The Sheet Number the framing appears on',
          'The Fire Rating of the framing member'
        ],
        answer: 'Which part of the framing cross-section aligns to the placement curve'
      },
      {
        type: 'mcq',
        question: 'What should be filtered out before generating framing lines for certain spans?',
        options: [
          'Spans that should not receive framing, such as an opening or stair void',
          'Spans longer than 6 meters',
          'Spans on Level 1 only',
          'Spans that already have a Mark value'
        ],
        answer: 'Spans that should not receive framing, such as an opening or stair void'
      },
      {
        type: 'fillblank',
        question: 'The lesson recommends a quick visual check in a 3D view or ___ after running the script, since justification errors are easier to spot visually.',
        answer: 'section'
      },
      {
        type: 'mcq',
        question: 'How is the structural framing Family Type resolved for placement?',
        options: ['FamilyType.ByName', 'Element.GetParameterValueByName', 'List.GroupByKey', 'Curve.Intersect'],
        answer: 'FamilyType.ByName'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-15: Linked Models Parameter Copy
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-15',
    title: 'Linked Models Parameter Copy Quiz',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What element type represents a placed link and its transform?',
        options: ['RevitLinkInstance', 'LinkedElement', 'Element.Link', 'RevitLinkDocument'],
        answer: 'RevitLinkInstance'
      },
      {
        type: 'truefalse',
        question: 'Standard category collectors like All Elements of Category automatically include elements from linked models.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is the preferred method for matching linked elements to host elements, according to the lesson?',
        options: [
          'A shared identifying parameter (e.g., a common "Zone ID")',
          'Matching purely by Element ID',
          'Matching by file creation date',
          'Matching by the order elements were drawn'
        ],
        answer: 'A shared identifying parameter (e.g., a common "Zone ID")'
      },
      {
        type: 'mcq',
        question: 'When no shared parameter exists, what alternative matching strategy does the lesson describe?',
        options: [
          'Proximity/geometry matching using the link\'s transform',
          'Random assignment',
          'Matching by category name only',
          'Matching by Sheet Number'
        ],
        answer: 'Proximity/geometry matching using the link\'s transform'
      },
      {
        type: 'truefalse',
        question: 'A Dynamo graph running in the host document can write, modify, or delete elements inside a linked document.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'According to the "Critical Constraint," where must every write in this workflow target?',
        options: [
          'An element that belongs to the document the graph is running in (the host)',
          'The linked document directly',
          'Whichever document was opened first',
          'Both documents simultaneously'
        ],
        answer: 'An element that belongs to the document the graph is running in (the host)'
      },
      {
        type: 'mcq',
        question: 'Does reading a parameter value FROM a linked element work differently than reading from a host element?',
        options: [
          'No — Element.GetParameterValueByName works identically regardless of which document the element came from',
          'Yes — linked elements require a completely different node',
          'Yes — reading from a link always requires a Python node',
          'No — but reading from a link is always slower'
        ],
        answer: 'No — Element.GetParameterValueByName works identically regardless of which document the element came from'
      },
      {
        type: 'mcq',
        question: 'What is required to support bidirectional data flow between two linked models?',
        options: [
          'Two separate graphs, each run from its own host document',
          'A single graph with a toggle switch',
          'Unlocking the linked model for editing',
          'Merging both models into one file'
        ],
        answer: 'Two separate graphs, each run from its own host document'
      },
      {
        type: 'fillblank',
        question: 'An unaccounted-for rotation in a link\'s ___ is described as a common cause of proximity matches that are subtly, confusingly wrong.',
        answer: 'transform'
      },
      {
        type: 'mcq',
        question: 'Why does the lesson say matching should be re-verified on every run rather than assumed to stay valid?',
        options: [
          'Because either linked or host model elements may be added, moved, or renumbered between runs',
          'Because Dynamo forgets matches automatically after each session',
          'Because RevitLinkInstance elements expire after 24 hours',
          'Because matches are stored only in temporary memory and never persist'
        ],
        answer: 'Because either linked or host model elements may be added, moved, or renumbered between runs'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dynp-16: COBie Data Population
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dynp-16',
    title: 'COBie Data Population Quiz',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does COBie stand for?',
        options: [
          'Construction Operations Building Information Exchange',
          'Common Building Interoperability Exchange',
          'Construction Object Building Information Environment',
          'Coordinated Operations for BIM Information Exchange'
        ],
        answer: 'Construction Operations Building Information Exchange'
      },
      {
        type: 'truefalse',
        question: 'COBie is a Revit-specific feature rather than an independent data standard.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which COBie sheet corresponds to product/family type definitions, as opposed to individual physical instances?',
        options: ['Type', 'Component', 'Zone', 'Facility'],
        answer: 'Type'
      },
      {
        type: 'mcq',
        question: 'What is the standard convention Revit uses to stage COBie data before export?',
        options: [
          'Shared parameters prefixed "COBie." (e.g., COBie.Component, COBie.Type)',
          'A dedicated COBie file format built into every family',
          'Renaming all elements with a COBie- prefix',
          'A single global "COBie Data" text field per project'
        ],
        answer: 'Shared parameters prefixed "COBie." (e.g., COBie.Component, COBie.Type)'
      },
      {
        type: 'mcq',
        question: 'What must happen before any script can populate COBie-prefixed parameters?',
        options: [
          'The shared parameters must be loaded into the project and bound to the correct categories',
          'The COBie export extension must be uninstalled',
          'All Rooms must be deleted and recreated',
          'The model must be converted to IFC first'
        ],
        answer: 'The shared parameters must be loaded into the project and bound to the correct categories'
      },
      {
        type: 'mcq',
        question: 'What is the recommended source for populating COBie parameters in bulk?',
        options: [
          'An asset data spreadsheet, read with Excel.ReadFromFile',
          'Manually typing each value into the Properties palette',
          'The Revit COBie export/extension itself',
          'A linked structural model'
        ],
        answer: 'An asset data spreadsheet, read with Excel.ReadFromFile'
      },
      {
        type: 'truefalse',
        question: 'Dynamo performs the actual COBie export itself, replacing the need for a separate export tool.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'According to the "Division of Labor," what is the correct two-stage pipeline?',
        options: [
          'Dynamo populates COBie-prefixed parameters, then a separate export toolkit reads and formats them',
          'The export toolkit runs first, then Dynamo populates parameters afterward',
          'Dynamo and the export toolkit run simultaneously in the same node',
          'Only the export toolkit is needed; Dynamo is optional'
        ],
        answer: 'Dynamo populates COBie-prefixed parameters, then a separate export toolkit reads and formats them'
      },
      {
        type: 'fillblank',
        question: 'Components (doors, equipment, fixtures) are matched by ___ or another stable identifier, the same pattern used in the door schedule and furniture lessons.',
        answer: 'Mark'
      },
      {
        type: 'mcq',
        question: 'Why does the lesson caution about duplicated or blank Type-level COBie data?',
        options: [
          'Type parameters affect every instance sharing that type, so an error propagates across all of them',
          'Type-level parameters cannot be read by Dynamo at all',
          'Type-level data is automatically deleted on export',
          'Type-level parameters are always instance-specific in Revit'
        ],
        answer: 'Type parameters affect every instance sharing that type, so an error propagates across all of them'
      }
    ]
  }

];
