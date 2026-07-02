// ============================================================
// PYREVIT PRACTICE QUIZZES — pyp-9 through pyp-16
// Merge these entries into your lib/pyrevitPracticeQuizzesData.js array
// ============================================================

export const pyrevitPracticeQuizzes_9_16 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-9: Build a Model Health Dashboard
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-9',
    title: 'Model Health Dashboard',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the recommended way to structure a dashboard that runs several health checks in one pushbutton?',
        options: [
          'One giant function that collects and prints everything inline',
          'Several small, independent check functions, each called in turn from one main script',
          'A separate pushbutton for each check',
          'A single Transaction wrapping all checks'
        ],
        answer: 'Several small, independent check functions, each called in turn from one main script'
      },
      {
        type: 'mcq',
        question: 'Which method returns every FailureMessage currently logged against a Revit document?',
        options: ['doc.GetWarnings()', 'doc.GetElements()', 'doc.GetFailures()', 'doc.CheckWarnings()'],
        answer: 'doc.GetWarnings()'
      },
      {
        type: 'truefalse',
        question: 'A Room element with an Area of 0 or a Location of None indicates the room exists but was never actually placed.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Why does the missing-parameter check test both "p is None" and "not p.HasValue"?',
        options: [
          'To slow the script down intentionally',
          'A parameter can exist but still hold no meaningful value, which is a separate failure mode from the parameter not existing at all',
          'HasValue is required syntax with no functional purpose',
          'Only p is None ever needs to be checked'
        ],
        answer: 'A parameter can exist but still hold no meaningful value, which is a separate failure mode from the parameter not existing at all'
      },
      {
        type: 'mcq',
        question: 'What does output.print_md() render in the pyRevit output window?',
        options: [
          'Raw unformatted text only',
          'A lightweight subset of Markdown, such as headings, bold text, and horizontal rules',
          'Only images',
          'HTML tables exclusively'
        ],
        answer: 'A lightweight subset of Markdown, such as headings, bold text, and horizontal rules'
      },
      {
        type: 'fillblank',
        question: 'output.___() renders a list of rows and a matching list of column headers as an actual formatted table in the output window.',
        answer: 'print_table'
      },
      {
        type: 'mcq',
        question: 'Which two parameters does output.print_table() primarily take to build its table?',
        options: [
          'table_data and columns',
          'rows and cells',
          'header and footer',
          'query and filter'
        ],
        answer: 'table_data and columns'
      },
      {
        type: 'truefalse',
        question: 'Grouping warning descriptions with a Counter is more actionable than printing only a single raw warning count.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Why should the required-parameter list checked in the dashboard be kept short and category-scoped?',
        options: [
          'Because pyRevit cannot check more than one parameter at a time',
          'A quick health-check button is meant to be a lightweight preview, not the full multi-category audit covered by a dedicated audit tool later in the course',
          'Because LookupParameter fails on long lists',
          'Because only Doors have parameters in Revit'
        ],
        answer: 'A quick health-check button is meant to be a lightweight preview, not the full multi-category audit covered by a dedicated audit tool later in the course'
      },
      {
        type: 'mcq',
        question: 'What is a sensible practice for very large result sets before printing them in a table?',
        options: [
          'Always print every row regardless of size',
          'Print only the first ~50 rows with a trailing note about how many more exist',
          'Never use print_table for large sets',
          'Convert them to a single string first'
        ],
        answer: 'Print only the first ~50 rows with a trailing note about how many more exist'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-10: Build a Drawing Issue Tracker Tool
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-10',
    title: 'Drawing Issue Tracker Tool',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which pyRevit forms function is used to collect a single typed string, such as the issue date or description?',
        options: ['forms.ask_for_string', 'forms.SelectFromList.show', 'forms.alert', 'forms.pick_file'],
        answer: 'forms.ask_for_string'
      },
      {
        type: 'mcq',
        question: 'What does forms.ask_for_string() return if the user cancels the dialog?',
        options: ['An empty string ""', 'None', 'The default value regardless of cancel', 'It raises an exception automatically'],
        answer: 'None'
      },
      {
        type: 'truefalse',
        question: 'forms.SelectFromList.show() with multiselect=True lets the user check multiple sheets from a list rather than pre-selecting them in the Revit UI.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What does the name_attr parameter control in forms.SelectFromList.show()?',
        options: [
          'Which attribute of each object is displayed as its label in the picker',
          'The name of the CSV export file',
          'The Transaction name',
          'The shared parameter group name'
        ],
        answer: 'Which attribute of each object is displayed as its label in the picker'
      },
      {
        type: 'mcq',
        question: 'Why are Issue Date, Issue Description, and Suitability Code written across all selected sheets inside a single Transaction rather than one Transaction per sheet?',
        options: [
          'Revit does not allow more than one Transaction per script',
          'So the whole batch commits or rolls back together, keeping the write atomic',
          'Because forms.ask_for_string requires exactly one Transaction',
          'It has no effect either way'
        ],
        answer: 'So the whole batch commits or rolls back together, keeping the write atomic'
      },
      {
        type: 'fillblank',
        question: 'The Python standard library module used to write the plain-text transmittal record in this lesson is ___.',
        answer: 'csv'
      },
      {
        type: 'truefalse',
        question: 'The CSV issue log export should run even if the Transaction writing to the model fails and rolls back.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What must already be true about Issue Date, Issue Description, and Suitability Code before this script can write to them?',
        options: [
          'Nothing, Revit creates parameters automatically on first write',
          'They must already be loaded shared parameters bound to the Sheets category',
          'They must be Type parameters, never instance parameters',
          'They must be created fresh by the script every run'
        ],
        answer: 'They must already be loaded shared parameters bound to the Sheets category'
      },
      {
        type: 'mcq',
        question: 'What is the benefit of naming the exported CSV file using the issue date?',
        options: [
          'It makes the file smaller',
          'Each issue produces its own dated, non-overwriting record automatically',
          'It is required by the csv module',
          'It prevents the file from being opened in Excel'
        ],
        answer: 'Each issue produces its own dated, non-overwriting record automatically'
      },
      {
        type: 'truefalse',
        question: 'Running the CSV export from within the same script run as the Transaction guarantees the model data and the transmittal record cannot disagree.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-11: Build a Parameter Audit Tool — Find Missing Data
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-11',
    title: 'Parameter Audit Tool',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does el.LookupParameter(name) return when the named parameter does not exist or is unbound on that element?',
        options: ['An empty string', 'None', 'A Parameter object with HasValue always True', 'It raises an exception'],
        answer: 'None'
      },
      {
        type: 'mcq',
        question: 'How does Dynamo\'s Element.HasParameter node differ from Python\'s LookupParameter pattern?',
        options: [
          'They are functionally identical in every way',
          'Element.HasParameter is a dedicated node returning a Boolean as its own step, while LookupParameter combines existence-check and retrieval in a single call returning the object or None',
          'Element.HasParameter only works on Rooms',
          'LookupParameter cannot check for missing parameters'
        ],
        answer: 'Element.HasParameter is a dedicated node returning a Boolean as its own step, while LookupParameter combines existence-check and retrieval in a single call returning the object or None'
      },
      {
        type: 'truefalse',
        question: 'A parameter can exist and technically "have a value" while still being functionally blank, such as an empty string.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What does output.linkify(element_ids) do in the pyRevit output window?',
        options: [
          'Deletes the referenced elements',
          'Builds a clickable link that selects (and can zoom to) those elements in the Revit view when clicked',
          'Renames the elements',
          'Exports the elements to CSV'
        ],
        answer: 'Builds a clickable link that selects (and can zoom to) those elements in the Revit view when clicked'
      },
      {
        type: 'mcq',
        question: 'Why is it recommended to group the audit report by missing field rather than print a flat list?',
        options: [
          'Flat lists are technically impossible to print',
          'A BIM Manager usually wants to fix one field across many elements at once, so grouping by field makes the report a more actionable checklist',
          'Grouping is required by the Revit API',
          'It reduces the number of elements checked'
        ],
        answer: 'A BIM Manager usually wants to fix one field across many elements at once, so grouping by field makes the report a more actionable checklist'
      },
      {
        type: 'fillblank',
        question: 'To scale a single-category audit to multiple categories, the required-fields list should be restructured as a ___ keyed by category.',
        answer: 'dictionary'
      },
      {
        type: 'truefalse',
        question: 'The required-parameter list for an audit tool should be sourced from the project\'s actual BIM Execution Plan requirements rather than guessed arbitrarily.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Why should the required-fields list stay specific to one category at a time rather than mixed together?',
        options: [
          'Mixing categories crashes the FilteredElementCollector',
          'Different categories have different mandatory fields, and mixing them produces a confusing, category-blind report',
          'Python cannot iterate more than one category',
          'There is no reason, mixing is always fine'
        ],
        answer: 'Different categories have different mandatory fields, and mixing them produces a confusing, category-blind report'
      },
      {
        type: 'mcq',
        question: 'What information is stored in the issues list entries in the core audit loop?',
        options: [
          'Only the Element Id as a string',
          'The element object paired with the missing parameter name',
          'Only the category name',
          'A screenshot of the element'
        ],
        answer: 'The element object paired with the missing parameter name'
      },
      {
        type: 'truefalse',
        question: 'Storing the actual element object (not just its Id) in the issues list keeps everything needed for both reporting and clickable links available in one place.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-12: Build a Workset Manager — Assign Elements in Bulk
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-12',
    title: 'Workset Manager Tool',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which built-in parameter stores an element\'s workset assignment?',
        options: [
          'BuiltInParameter.ELEM_PARTITION_PARAM',
          'BuiltInParameter.ELEM_FAMILY_PARAM',
          'BuiltInParameter.ROOM_NUMBER',
          'BuiltInParameter.SHEET_NUMBER'
        ],
        answer: 'BuiltInParameter.ELEM_PARTITION_PARAM'
      },
      {
        type: 'mcq',
        question: 'How is the target workset resolved before assignment can happen?',
        options: [
          'By hard-coding a WorksetId integer with no lookup',
          'By collecting worksets with FilteredWorksetCollector and matching by name to get its WorksetId',
          'Worksets cannot be referenced from the API at all',
          'By using LookupParameter on the document'
        ],
        answer: 'By collecting worksets with FilteredWorksetCollector and matching by name to get its WorksetId'
      },
      {
        type: 'truefalse',
        question: 'Workset assignment is a special hidden Revit property that cannot be accessed through the ordinary Parameter API.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What value is actually passed to Parameter.Set() when writing a new workset assignment?',
        options: [
          'The WorksetId object itself',
          'The target WorksetId\'s IntegerValue',
          'The workset name as a string',
          'A Boolean flag'
        ],
        answer: 'The target WorksetId\'s IntegerValue'
      },
      {
        type: 'mcq',
        question: 'Why should the bulk reassignment loop be wrapped in a single Transaction rather than one Transaction per element?',
        options: [
          'A single Transaction is required by pyRevit syntax',
          'It keeps the operation atomic — every filtered element is reassigned together, or none are, on an exception',
          'Multiple Transactions are not supported by the Revit API',
          'It has no practical effect'
        ],
        answer: 'It keeps the operation atomic — every filtered element is reassigned together, or none are, on an exception'
      },
      {
        type: 'fillblank',
        question: 'DB.FilteredWorksetCollector(doc).OfKind(DB.WorksetKind.___) collects the user-created worksets, excluding system worksets.',
        answer: 'UserWorkset'
      },
      {
        type: 'truefalse',
        question: 'This workset assignment feature is only meaningful in a workshared (multi-user) model, since a non-workshared model has no worksets to assign elements to.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Why check p.IsReadOnly before writing the workset parameter on each element?',
        options: [
          'To skip elements whose workset parameter cannot be changed, rather than letting the whole Transaction fail on one element',
          'It has no functional purpose',
          'IsReadOnly must always be True for the write to succeed',
          'It converts the parameter to editable automatically'
        ],
        answer: 'To skip elements whose workset parameter cannot be changed, rather than letting the whole Transaction fail on one element'
      },
      {
        type: 'mcq',
        question: 'What is a key advantage of a script-driven bulk workset reassignment over the manual UI workflow?',
        options: [
          'It requires no communication with the rest of the project team',
          'The exact filter criteria live in code and can be re-run identically at any time, rather than relying on someone remembering the right manual selection steps',
          'It bypasses Revit\'s Transaction system entirely',
          'It automatically creates new worksets as needed'
        ],
        answer: 'The exact filter criteria live in code and can be re-run identically at any time, rather than relying on someone remembering the right manual selection steps'
      },
      {
        type: 'truefalse',
        question: 'A bulk workset reassignment should be communicated to the rest of the project team since it affects visibility and ownership in a workshared model.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-13: Build a Level & Grid Checker Tool
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-13',
    title: 'Level & Grid Checker Tool',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What Python data structure gives fast, simple "have we seen this name before" membership testing for detecting duplicate Level or Grid names?',
        options: ['A tuple', 'A set', 'A single string', 'A Transaction'],
        answer: 'A set'
      },
      {
        type: 'mcq',
        question: 'What is used to group Levels by elevation so that any group with more than one member reveals a duplicate elevation?',
        options: [
          'A defaultdict(list) keyed by rounded elevation value',
          'A single flat list with no grouping',
          'output.linkify()',
          'A Transaction'
        ],
        answer: 'A defaultdict(list) keyed by rounded elevation value'
      },
      {
        type: 'truefalse',
        question: 'Rounding the Elevation value before comparing helps avoid false positives caused by floating-point representation noise.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Why are Levels and Grids collected project-wide rather than scoped to the active view?',
        options: [
          'FilteredElementCollector cannot be scoped to a view for these categories',
          'Datum uniqueness (level/grid naming and elevation) is a whole-model concern, not a per-view one',
          'Because Grids do not appear in any view',
          'Because Levels are Type elements, not Instance elements'
        ],
        answer: 'Datum uniqueness (level/grid naming and elevation) is a whole-model concern, not a per-view one'
      },
      {
        type: 'mcq',
        question: 'What is the main reason duplicate Level elevations are considered more dangerous than duplicate names?',
        options: [
          'They are less common and Revit blocks names but not elevations, often arising from a copy-paste mistake when adding a new level',
          'Duplicate elevations are always intentional in good practice',
          'Elevation duplicates cannot be detected in Python',
          'They never actually cause any real problems'
        ],
        answer: 'They are less common and Revit blocks names but not elevations, often arising from a copy-paste mistake when adding a new level'
      },
      {
        type: 'fillblank',
        question: 'The Grid property read to check for duplicate grid labels (e.g., "A", "1") is Grid.___.',
        answer: 'Name'
      },
      {
        type: 'truefalse',
        question: 'The equivalent uniqueness check in Dynamo typically requires several chained stock nodes (like List.UniqueItems and count comparisons), while Python\'s set/dictionary types map more directly onto the same problem.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What should the report do when a clean run finds zero violations across all three checks?',
        options: [
          'Print nothing at all, since there is nothing to report',
          'Explicitly state the clean result, since confirming sound datum structure is itself a useful, reportable outcome',
          'Automatically delete the script',
          'Trigger a Transaction to fix nonexistent issues'
        ],
        answer: 'Explicitly state the clean result, since confirming sound datum structure is itself a useful, reportable outcome'
      },
      {
        type: 'mcq',
        question: 'For the duplicate elevation report, what should be printed alongside the linkified list of Levels sharing an elevation?',
        options: [
          'Nothing else is needed',
          'The shared elevation value itself, so the report shows both what the problem is and which elements are involved',
          'The Revit version number',
          'The document\'s file path only'
        ],
        answer: 'The shared elevation value itself, so the report shows both what the problem is and which elements are involved'
      },
      {
        type: 'truefalse',
        question: 'This checker tool needs a Transaction because it modifies Level and Grid elements while checking them.',
        answer: false
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-14: Build a COBie Data Checker — Verify FM Fields are Populated
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-14',
    title: 'COBie Data Checker',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Is this lesson\'s COBie Data Checker a tool that writes data or only reads it?',
        options: [
          'It only reads data — a deliberately read-only checking tool with no Transaction anywhere',
          'It bulk-writes COBie parameters across the model',
          'It both reads and writes in the same run',
          'It deletes incomplete COBie parameters'
        ],
        answer: 'It only reads data — a deliberately read-only checking tool with no Transaction anywhere'
      },
      {
        type: 'mcq',
        question: 'Which COBie sheet do Room elements in DPC2025 correspond to?',
        options: ['Component', 'Type', 'Space', 'System'],
        answer: 'Space'
      },
      {
        type: 'truefalse',
        question: 'Because this tool never modifies the model, it needs no Transaction anywhere in its logic.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What three failure modes does the completeness scan check for on each COBie field?',
        options: [
          'Wrong category, wrong Family Type, and wrong Level',
          'A missing parameter (None), a parameter with no value, and a parameter holding an empty string',
          'Only whether the parameter is a Type parameter',
          'Only whether the element is a Room'
        ],
        answer: 'A missing parameter (None), a parameter with no value, and a parameter holding an empty string'
      },
      {
        type: 'mcq',
        question: 'How does categories_to_check scale the check across multiple categories with different required fields?',
        options: [
          'It is a single flat list applied identically to every category',
          'It is a dictionary keyed by category, mapping each to its own correct list of COBie-prefixed field names',
          'It hard-codes one category only, Doors',
          'It is not needed — every category shares the same fields automatically'
        ],
        answer: 'It is a dictionary keyed by category, mapping each to its own correct list of COBie-prefixed field names'
      },
      {
        type: 'fillblank',
        question: 'The bulk-population script that writes COBie parameters (as opposed to this lesson\'s checking tool) was covered in the companion ___ Practice course.',
        answer: 'Dynamo'
      },
      {
        type: 'truefalse',
        question: 'Running the real COBie export/extension against a model with incomplete data will invent the missing values automatically.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What should be treated as the actual go/no-go gate before scheduling a real COBie handover export?',
        options: [
          'A fully clean run of this checker, with zero incomplete fields across every checked category',
          'Simply running the export once and hoping for the best',
          'Whether the model has any warnings at all',
          'Whether the sheets have been issued'
        ],
        answer: 'A fully clean run of this checker, with zero incomplete fields across every checked category'
      },
      {
        type: 'mcq',
        question: 'Because the checker is read-only, what usage pattern does the lesson recommend?',
        options: [
          'Run it only once, right before the handover deadline',
          'Run it repeatedly in the weeks before handover so completeness can be tracked as an improving metric',
          'Never run it more than once per project',
          'Only run it after the export has already happened'
        ],
        answer: 'Run it repeatedly in the weeks before handover so completeness can be tracked as an improving metric'
      },
      {
        type: 'truefalse',
        question: 'The checker\'s field list should be kept in sync with whatever fields the population script actually writes, to avoid reporting false gaps for fields nobody was asked to populate.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-15: Build a Linked Model Health Checker
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-15',
    title: 'Linked Model Health Checker',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does DB.RevitLinkType represent, in the same way a Family Type represents a placed family?',
        options: [
          'Each placed occurrence of a link',
          'The link definition itself, including its current load status',
          'A linked document\'s warnings',
          'A single Grid element'
        ],
        answer: 'The link definition itself, including its current load status'
      },
      {
        type: 'mcq',
        question: 'Which method on RevitLinkType returns the current load status of a link?',
        options: ['GetLinkedFileStatus()', 'GetWarnings()', 'GetLinkDocument()', 'GetTypeId()'],
        answer: 'GetLinkedFileStatus()'
      },
      {
        type: 'truefalse',
        question: 'link_instance.GetLinkDocument() returns None when the link is unloaded or cannot be found.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What can be done with the Document object returned by GetLinkDocument() for a loaded link?',
        options: [
          'Nothing, it is a read-only stub object',
          'The same Document-level queries used elsewhere in this course, such as GetWarnings(), work on it identically to the host document',
          'It can only return the link\'s file path',
          'It automatically reloads the link'
        ],
        answer: 'The same Document-level queries used elsewhere in this course, such as GetWarnings(), work on it identically to the host document'
      },
      {
        type: 'mcq',
        question: 'How is a RevitLinkInstance matched back to its defining RevitLinkType?',
        options: [
          'By comparing Name strings only',
          'By checking li.GetTypeId() == link_type.Id',
          'There is no way to match them',
          'By comparing warning counts'
        ],
        answer: 'By checking li.GetTypeId() == link_type.Id'
      },
      {
        type: 'fillblank',
        question: 'NotFound specifically means Revit cannot ___ the linked file at its last known path.',
        answer: 'locate'
      },
      {
        type: 'truefalse',
        question: 'Unloaded and NotFound represent the exact same underlying problem and should be reported identically.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What should the report show for a link that is unloaded or missing, where warning count cannot be checked?',
        options: [
          'A crash/exception with no further output',
          'A clear placeholder such as "-" distinguishing "could not be checked" from an actual 0-warning result',
          'A guessed warning count',
          'The report should simply omit that link entirely'
        ],
        answer: 'A clear placeholder such as "-" distinguishing "could not be checked" from an actual 0-warning result'
      },
      {
        type: 'mcq',
        question: 'Why is this checker considered safe to run at any time?',
        options: [
          'It requires a Transaction but rolls back automatically',
          'It only reads data — no Transaction is required anywhere in the tool',
          'It automatically reloads all links before checking them',
          'It only works on unloaded links'
        ],
        answer: 'It only reads data — no Transaction is required anywhere in the tool'
      },
      {
        type: 'truefalse',
        question: 'A RevitLinkType with no matching RevitLinkInstance at all should be reported with a clear note rather than silently skipped or causing a lookup error.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ pyp-16: Build a Custom Ribbon Tab for the Office
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'pyp-16',
    title: 'Custom Ribbon Tab for the Office',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'How should tools be grouped into panels on the finished DPC2025 Tools tab?',
        options: [
          'By the order they were built in the course',
          'By workflow purpose, such as QA, Sheets, and Data',
          'Alphabetically by script file name only',
          'Randomly, since grouping does not matter'
        ],
        answer: 'By workflow purpose, such as QA, Sheets, and Data'
      },
      {
        type: 'mcq',
        question: 'How does pyRevit build its ribbon tab, panel, and button hierarchy?',
        options: [
          'From a separate XML registration file unrelated to folder names',
          'Directly from a nested folder structure using .tab, .panel, and .pushbutton suffixed folder names',
          'By scanning the Revit installation directory',
          'Through a manual UI configuration wizard only'
        ],
        answer: 'Directly from a nested folder structure using .tab, .panel, and .pushbutton suffixed folder names'
      },
      {
        type: 'truefalse',
        question: 'A typo in a folder suffix, like ".panle" instead of ".panel", means that level is silently skipped rather than raising a clear error.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What does a bundle.yaml file\'s title field control?',
        options: [
          'The Transaction name used by the script',
          'The short label actually shown on the ribbon button',
          'The icon file format',
          'The author\'s email address only'
        ],
        answer: 'The short label actually shown on the ribbon button'
      },
      {
        type: 'mcq',
        question: 'What happens if a pushbutton has no bundle.yaml at all?',
        options: [
          'The button will not appear on the ribbon',
          'pyRevit falls back to using the raw folder name as the button label',
          'Revit crashes on load',
          'The script cannot run'
        ],
        answer: 'pyRevit falls back to using the raw folder name as the button label'
      },
      {
        type: 'fillblank',
        question: 'The tooltip field in bundle.yaml is shown on ___ and is the right place for a fuller explanation of what the tool does.',
        answer: 'hover'
      },
      {
        type: 'truefalse',
        question: 'A consistent icon size, style, and color language across every pushbutton helps a custom tab read as one coherent product rather than a folder of individually wrapped scripts.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What should be verified after moving every tool into the new .tab/.panel/.pushbutton folder structure?',
        options: [
          'Nothing further is needed once the folders exist',
          'Reload pyRevit and click through every button against DPC2025 to confirm each script still runs correctly from its new location',
          'Only the icons need checking, not the scripts themselves',
          'The ribbon tab name only, not the buttons'
        ],
        answer: 'Reload pyRevit and click through every button against DPC2025 to confirm each script still runs correctly from its new location'
      },
      {
        type: 'mcq',
        question: 'What naming standard is recommended across every button title in bundle.yaml files?',
        options: [
          'Mixing capitalization and spacing styles freely across buttons',
          'One deliberate, uniform capitalization and spacing convention applied identically across every button',
          'Using the full lesson title from the course as the button label',
          'No naming standard is necessary'
        ],
        answer: 'One deliberate, uniform capitalization and spacing convention applied identically across every button'
      },
      {
        type: 'truefalse',
        question: 'The finished custom tab should be usable by a team member who has never seen this course, relying on clear names, titles, and tooltips.',
        answer: true
      }
    ]
  }

];
