// ============================================================
// AUTODESK DYNAMO PRACTICE — LESSONS dynp-9 through dynp-16 (INTERMEDIATE)
// Section: Furniture & Sheets / Standards & QA / Schedules & Structure / Linked Models & COBie
// File: lib/dynamoPracticeLessonsContent/dynamoPracticeLessons_9_16.js
// Companion project used throughout: "DPC2025" (Dharren Park Capstone 2025)
// ============================================================

export const lessons_9_16 = [

  // ============================================================
  // LESSON DYNP-9 — Placing Furniture from a Room Data Schedule
  // ============================================================
  {
    id: 'dynp-9', num: '09',
    title: 'Placing Furniture from a Room Data Schedule',
    topic: 'Furniture & Sheets', cat: 'intermediate', readTime: '10 min', free: false,
    desc: 'Read a room-to-furniture schedule, match furniture types to rooms by Department and Name, and place instances automatically at an offset from Room.Location.',
    intro: `This lesson moves from theory into a real production script: populating furniture across an entire model from a data-driven schedule instead of dragging families in one at a time. Working against the DPC2025 sample project, you will read a room/furniture-type matrix, match each room to the correct furniture family type by its Department and Name, compute a placement point from the room's location with a defined offset, and place every instance in a single run. This is exactly the kind of script that turns a day of furniture layout into a few minutes of setup.`,
    sections: [
      {
        id: 's1', heading: 'The Room/Furniture Schedule as the Source of Truth', level: 'h2',
        content: `Rather than deciding furniture placement inside the Dynamo graph itself, a production script reads its instructions from an external schedule — either an Excel workbook (Excel.ReadFromFile, covered in the foundational course) or an in-model Revit schedule exported as a list. In your DPC2025 model, this takes the shape of a simple table: one row per room, listing the room's Department, Name/Number, and the furniture Family Type that belongs in it.`,
        code: {
          label: 'DPC2025 Furniture Schedule Structure',
          lines: [
            'Column A: Department        (e.g., "Open Office", "Meeting")',
            'Column B: Room Name/Number  (e.g., "101 - Open Office")',
            'Column C: Furniture Family  (e.g., "Desk - 1200x600mm")',
            'Column D: Offset X (mm)     (e.g., 300)',
            'Column E: Offset Y (mm)     (e.g., 300)',
            '',
            'One row = one furniture instance to place in one room.',
            'Multiple rows can reference the same room for multiple items.',
          ],
        },
        formula: { label: 'Core Idea', text: 'The schedule is the single source of truth — the graph should only read and execute it, not hard-code any room/furniture pairing internally' },
      },
      {
        id: 's2', heading: 'Matching Furniture Types to Rooms', level: 'h2',
        content: `Once the schedule is read into Dynamo as a list of lists, the Department and Name columns must be matched against the actual Room elements collected from DPC2025 so that each schedule row resolves to a real, placed Room in the model.`,
        items: [
          'Collect all placed Rooms in DPC2025 (category collector), then read their Name and Department parameters with Element.GetParameterValueByName',
          'For each schedule row, compare its Room Name/Number string against the collected rooms\' Name parameter to find the matching Room element',
          'Cross-checking Department as a second match criterion catches the case where two rooms accidentally share the same Name but belong to different departments',
          'If a schedule row cannot find a matching room (a mismatched or misspelled name), it should be flagged rather than silently skipped — a Watch node on the unmatched rows during development makes this easy to spot',
        ],
        formula: { label: 'Matching Pattern', text: 'Schedule row (Department + Name) → search collected Rooms for a match → carry the matched Room element forward for point calculation' },
      },
      {
        id: 's3', heading: 'Computing the Placement Point from Room.Location', level: 'h2',
        content: `Every Room element has a **Room.Location** point — its internal placement/insertion point, distinct from its boundary geometry. This is the natural anchor to build furniture placement points from, since it always exists even for irregularly shaped rooms.`,
        subsections: [
          {
            heading: 'Building the Offset Point',
            items: [
              '**Room.Location** — returns the room\'s placement point as a Dynamo Point object',
              'Read the Offset X and Offset Y values for the row (in the schedule\'s units, typically millimetres) and convert them to the project\'s internal units if needed',
              'Use Point.ByCoordinates (or Point.Add / Point.Translate) to build a new point offset from Room.Location by the schedule-defined X/Y distance',
              'This produces one final placement point per schedule row, ready to feed into a placement node',
            ],
          },
        ],
        formula: { label: 'Point Formula', text: 'Placement Point = Room.Location + (Offset X, Offset Y, 0) — computed per row, not a single fixed point per room' },
      },
      {
        id: 's4', heading: 'Placing the Furniture Instances', level: 'h2',
        content: `With a Family Type reference (via FamilyType.ByName, matching the schedule's Furniture Family column string) and a computed point for every row, **FamilyInstance.ByPoint** places all the furniture in a single run — the same core placement node used throughout this course.`,
        code: {
          label: 'End-to-End Placement Pipeline',
          lines: [
            'Excel.ReadFromFile (furniture schedule)',
            '  -> split columns -> match rows to Room elements',
            '  -> Room.Location + offset -> placement Points',
            '  -> FamilyType.ByName (per row, from Furniture Family column)',
            '  -> FamilyInstance.ByPoint(familyType, point)',
            '  -> newly placed furniture instances',
          ],
        },
        items: [
          'FamilyType.ByName resolves each row\'s Furniture Family string to an actual Family Type object the placement node can use',
          'Lacing between the Family Type list and the Point list should pair by matching index (Shortest/parallel lists), since each row\'s type and point are already aligned',
          'The returned list of new instances can be fed directly into Element.SetParameterByName afterward — for example, writing a "Placed By Script" Comments value for traceability',
        ],
      },
      {
        id: 's5', heading: 'The Family-Must-Be-Loaded Requirement', level: 'h2',
        content: `**FamilyType.ByName cannot conjure a family that is not already loaded into the project.** This is the single most common failure point when running a schedule-driven furniture placement script for the first time on a new or unfamiliar model.`,
        items: [
          'Before running the script against DPC2025, confirm every furniture family referenced in the schedule has been loaded into the project — check the Project Browser\'s Families tree, or the family list in the Revit UI',
          'A family can be loaded manually (Insert tab → Load Family) or programmatically with a Family.LoadFamily node pointed at the .rfa file path, run once ahead of the placement script',
          'If FamilyType.ByName cannot find a match, it typically returns null rather than throwing a hard error — a downstream FamilyInstance.ByPoint call with a null type input will fail or silently skip that row, so always Watch the Family Type list before placement to confirm every row resolved successfully',
          'A robust script structure loads (or at least verifies) every distinct family name in the schedule as an explicit first step, before attempting any placement',
        ],
        formula: { label: 'Critical Warning', text: 'FamilyType.ByName only finds types that are ALREADY loaded — always verify or load families first, or the placement step will silently fail for missing types' },
      },
      {
        id: 's6', heading: 'Validating the Full Run on DPC2025', level: 'h2',
        content: `As with any placement script, validate on a small subset before running against the entire DPC2025 furniture schedule.`,
        items: [
          'Test the matching and point-calculation logic first with Watch nodes, checking that rooms, offsets, and family types all resolve correctly before anything is placed',
          'Run the placement step against a handful of rows first (e.g., a single floor), confirm the furniture appears correctly positioned and oriented, then remove the sub-list truncation to run the full schedule',
          'Keep the graph in Manual run mode throughout — a schedule-driven placement script should never fire automatically while you are still editing it',
        ],
      },
    ],
    takeaways: [
      'A furniture placement script should read its room-to-type instructions from an external schedule (Excel or in-model), not hard-code pairings inside the graph.',
      'Matching schedule rows to real Room elements by both Department and Name catches ambiguous or duplicate room names.',
      'Room.Location gives a reliable placement anchor point for every room, which is then offset by schedule-defined X/Y values to compute the final furniture point.',
      'FamilyType.ByName resolves a schedule\'s family name string to an actual Family Type object needed by FamilyInstance.ByPoint.',
      'Furniture families referenced in the schedule must already be loaded into the project — via manual load or Family.LoadFamily — before placement will succeed.',
      'Always validate matching and placement logic on a small subset of the DPC2025 schedule before running the full furniture layout.',
    ],
    resource: { label: 'Schedule-Driven Furniture Placement Guide', type: 'PDF' },
    quiz: { label: 'Placing Furniture from a Schedule Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-8', title: 'Automating View Creation for All Levels' },
    next: { id: 'dynp-10', title: 'Auto-Creating Sheets & Placing Views' },
  },

  // ============================================================
  // LESSON DYNP-10 — Auto-Creating Sheets & Placing Views
  // ============================================================
  {
    id: 'dynp-10', num: '10',
    title: 'Auto-Creating Sheets & Placing Views',
    topic: 'Furniture & Sheets', cat: 'intermediate', readTime: '10 min', free: false,
    desc: 'Batch-create sheets from an Excel-driven sheet list, assign a titleblock type, and place a view onto each sheet at a defined viewport location in a single run.',
    intro: `Setting up sheets one at a time — naming, numbering, dropping in a titleblock, dragging a view into place — is exactly the sort of mechanical, error-prone task Dynamo should be doing for you. This lesson builds a complete batch sheet-creation script against DPC2025: an Excel-driven list of sheet numbers and names drives the whole process, a single titleblock type is applied consistently, and each specified view is placed at a defined viewport location — all looped across the entire list in one run rather than handled sheet by sheet.`,
    sections: [
      {
        id: 's1', heading: 'Driving Sheet Creation from an Excel List', level: 'h2',
        content: `The starting point is a spreadsheet sheet register for DPC2025 — maintained by a project lead in a format everyone already understands, rather than typed directly into the Dynamo graph.`,
        code: {
          label: 'DPC2025 Sheet Register Columns',
          lines: [
            'Column A: Sheet Number   (e.g., "A-101")',
            'Column B: Sheet Name     (e.g., "Level 1 - Floor Plan")',
            'Column C: View Name      (e.g., "L1 - Furniture Plan")',
            '',
            'Excel.ReadFromFile returns this as a list of lists,',
            'one sub-list per row, matching the four columns above.',
          ],
        },
        formula: { label: 'Why Drive It From Excel', text: 'A spreadsheet-based sheet register can be edited by anyone on the project team without opening Dynamo, and re-running the graph regenerates the sheet set from the latest version' },
      },
      {
        id: 's2', heading: 'Splitting the Register into Parallel Lists', level: 'h2',
        content: `Once read, the list of lists needs to be split into separate parallel lists — one per column — so each can be fed independently into the sheet-creation node.`,
        items: [
          'Use List.GetItemAtIndex at each column index, applied across every row, to extract a Sheet Number list, a Sheet Name list, and a View Name list',
          'All three lists remain the same length and stay aligned by row position, since they were split from the same source table',
          'Double-check the row count of each split list matches the original register — a mismatch here usually means a blank row or a merged cell in the source spreadsheet',
        ],
      },
      {
        id: 's3', heading: 'Selecting the Titleblock Family Type', level: 'h2',
        content: `Every sheet needs a titleblock, which — just like any other placed family — is referenced as a Family Type object, not a plain string.`,
        items: [
          'A titleblock is simply another Family Type, resolved the same way as any furniture or structural type: via a Family Types dropdown node or FamilyType.ByName',
          'For DPC2025, a single consistent titleblock type (e.g., "A1 Metric Titleblock") is typically used across the whole sheet set, so one Family Type reference can be reused for every sheet in the batch',
          'If different sheets in the register call for different titleblocks (e.g., a smaller size for detail sheets), add a Titleblock column to the register and resolve a full parallel list of types instead of a single repeated value',
        ],
      },
      {
        id: 's4', heading: 'Creating Sheets and Placing Views in One Run', level: 'h2',
        content: `With the Sheet Number, Sheet Name, View Name, and titleblock Family Type all resolved, the sheet-creation node builds the entire sheet set — including placing the specified view onto each sheet — in a single execution.`,
        code: {
          label: 'Batch Sheet Creation Pipeline',
          lines: [
            'Excel.ReadFromFile (DPC2025 sheet register)',
            '  -> split into Sheet Number / Sheet Name / View Name lists',
            '  -> look up each named View (Views-by-name lookup)',
            '  -> resolve titleblock Family Type',
            '  -> Sheet.ByNameNumberViews(number, name, titleblock, view)',
            '     fed with all parallel lists at once',
            '  -> one Sheet element created and populated per row',
          ],
        },
        formula: { label: 'Batch, Not One-at-a-Time', text: 'Feeding parallel lists into a single Sheet.ByNameNumberViews call creates the entire sheet set in one run — looping the whole register, rather than repeating the operation sheet by sheet' },
      },
      {
        id: 's5', heading: 'Placing the View at a Defined Viewport Location', level: 'h2',
        content: `A sheet with a view placed at Revit's default location often needs manual nudging afterward — a batch script should define the viewport location explicitly instead, so every sheet in the DPC2025 set comes out consistent.`,
        items: [
          'Some sheet-creation node overloads accept an explicit viewport placement point on the sheet, positioning the view precisely rather than at a default offset',
          'When the node does not expose a placement point directly, the viewport can be repositioned immediately afterward using the Viewport element the node returns, moving it to a standard location (e.g., centered under the titleblock\'s title area)',
          'Using the same fixed viewport location across every sheet in the batch is what actually delivers the consistency benefit — a script that places views randomly is barely better than manual placement',
        ],
      },
      {
        id: 's6', heading: 'Looping the Whole List, Not One Sheet at a Time', level: 'h2',
        content: `The entire value of this lesson's script is that it processes the full DPC2025 sheet register in one graph execution — the same node call, fed with lists instead of single values, replaces what would otherwise be dozens of repeated manual actions.`,
        items: [
          'Resist the temptation to test the graph by wiring in single hard-coded values for one sheet — build directly against the full parallel lists from the start, and use a short sub-list (e.g., the first 3 rows) only for a quick validation run',
          'Once validated, running against the complete register requires no structural changes to the graph, only removing the temporary sub-list truncation',
          'A re-run of the same graph after the register is updated with new rows will only need to create the newly added sheets if combined with the duplicate-avoidance pattern (checking existing Sheet Numbers first, as covered in the foundational course)',
        ],
        formula: { label: 'Efficiency Payoff', text: 'One graph run against a 40-row sheet register replaces 40 manual sheet-creation, titleblock-assignment, and view-placement operations' },
      },
    ],
    takeaways: [
      'A batch sheet-creation script reads its sheet numbers, names, and view assignments from an Excel-driven register rather than hard-coding them in the graph.',
      'The register\'s list of lists must be split into parallel Sheet Number, Sheet Name, and View Name lists before feeding the sheet-creation node.',
      'A titleblock is just another Family Type, resolved the same way as any other placed family — via a dropdown node or FamilyType.ByName.',
      'Sheet.ByNameNumberViews fed with parallel lists creates the entire sheet set, complete with placed views, in a single run.',
      'Defining an explicit, consistent viewport placement location avoids the need to manually reposition views on every generated sheet.',
      'The value of this workflow comes from looping the full register in one execution rather than repeating the sheet-creation process one sheet at a time.',
    ],
    resource: { label: 'Batch Sheet & View Creation Workflow Guide', type: 'PDF' },
    quiz: { label: 'Auto-Creating Sheets & Views Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-9', title: 'Placing Furniture from a Room Data Schedule' },
    next: { id: 'dynp-11', title: 'Renaming Views & Sheets to Match ISO 19650 Convention' },
  },

  // ============================================================
  // LESSON DYNP-11 — Renaming Views & Sheets to Match ISO 19650 Convention
  // ============================================================
  {
    id: 'dynp-11', num: '11',
    title: 'Renaming Views & Sheets to Match ISO 19650 Convention',
    topic: 'Standards & QA', cat: 'intermediate', readTime: '9 min', free: false,
    desc: 'Apply a real ISO 19650-style naming template to batch-rename existing views and sheets, then validate the results against the required pattern.',
    intro: `Naming conventions are one of the clearest signals of a well-run BIM project, and one of the easiest things to let drift once a model has dozens of contributors and hundreds of views. This lesson applies a real ISO 19650-based naming template to DPC2025 — batch-renaming existing views and sheets using string construction, then running a validation pass that flags anything not matching the required pattern. This is standards enforcement automated, not just naming automated.`,
    sections: [
      {
        id: 's1', heading: 'The ISO 19650 Naming Template', level: 'h2',
        content: `ISO 19650 does not mandate one universal naming string, but most UK/international BIM Execution Plans converge on the same structured template: Project-Originator-Volume-Level-Type-Role-Number. DPC2025's project convention uses exactly this pattern.`,
        code: {
          label: 'DPC2025 Naming Template',
          lines: [
            'DPC - XX - 00 - 00 - DR - A - 1001',
            '|     |    |    |    |    |   |',
            'Project  |    |    |    |   Number (sequential, 4 digits)',
            '     Originator |    |   Role (A = Architectural)',
            '          Volume|   Type (DR = Drawing)',
            '               Level (00 = general/multiple levels)',
            '',
            'Example, fully resolved: "DPC-XX-00-00-DR-A-1001"',
          ],
        },
        formula: { label: 'Template Fields', text: 'Project-Originator-Volume-Level-Type-Role-Number, each field separated by a hyphen, each field a fixed-format code rather than free text' },
      },
      {
        id: 's2', heading: 'Constructing the New Name String', level: 'h2',
        content: `Each field in the template is built from either a fixed project-wide constant or a value read from the view/sheet itself, then joined together with String.Concat (or an equivalent string-building node) into the final compliant name.`,
        subsections: [
          {
            heading: 'Building Each Field',
            items: [
              '**Project** ("DPC") and **Originator** ("XX", the placeholder for the authoring organization code) are fixed constants for the whole DPC2025 model',
              '**Volume** and **Level** are typically derived from the view or sheet\'s associated Level parameter, mapped to the project\'s level-code table (e.g., Level 1 -> "01")',
              '**Type** is derived from whether the element is a Sheet ("DR" for Drawing) or a specific view type (e.g., "PL" for plan, "SC" for schedule)',
              '**Role** reflects the discipline (e.g., "A" for Architectural, "S" for Structural), often stored as a project parameter or inferred from a naming lookup table',
              '**Number** is a sequential 4-digit value, typically generated with a counter or read from an existing Sheet Number to preserve numbering continuity',
            ],
          },
        ],
        formula: { label: 'Construction Pattern', text: 'String.Concat(Project, "-", Originator, "-", Volume, "-", Level, "-", Type, "-", Role, "-", Number) -> one compliant name string per element' },
      },
      {
        id: 's3', heading: 'Writing the New Names Back with Element.SetParameterByName', level: 'h2',
        content: `Once every element has a constructed target name string, the actual rename is a straightforward parameter write — the same node used throughout this course, applied to the specific parameters that control sheet and view naming.`,
        code: {
          label: 'Target Parameters',
          lines: [
            'Sheets:',
            '  "Sheet Number"  <- constructed number portion (e.g., "1001")',
            '  "Sheet Name"    <- constructed descriptive name/full string',
            '',
            'Views:',
            '  "View Name"     <- constructed full name string',
            '',
            'Element.SetParameterByName(element, parameterName, value)',
            'applied across the full list of views/sheets in one run.',
          ],
        },
        items: [
          'Sheet Number and Sheet Name are two separate parameters — decide up front whether the full ISO string goes into Sheet Number, Sheet Name, or is split across both, and apply that decision consistently',
          'View Name is a single parameter that typically receives the full constructed string directly',
          'Renaming must happen across the whole batch in one run so that no two elements ever collide on a duplicate number mid-process',
        ],
      },
      {
        id: 's4', heading: 'Validating Names Against the Required Pattern', level: 'h2',
        content: `Renaming existing, possibly inconsistent views and sheets is only half the job — a validation pass confirms the result (and catches any names that still do not conform, including ones outside the script's own renaming scope).`,
        items: [
          'Build a simple pattern check using String node functions (e.g., confirming the string splits into exactly seven hyphen-separated segments, and that fixed-position fields like Project and Type match expected values)',
          'A true regex node is not standard in core Dynamo, but the same validation outcome is achieved with String.Split on the hyphen character, followed by comparison nodes checking each segment\'s length and expected value set',
          'Run the validation pass across ALL views and sheets in DPC2025, not just the ones the renaming script touched, to catch any legacy names that were missed',
          'Feed the validation booleans into List.FilterByBoolMask to produce a clean list of "non-conforming" names for manual review',
        ],
        formula: { label: 'Validation Pattern', text: 'String.Split by hyphen -> check segment count == 7 and each segment against its expected format -> List.FilterByBoolMask isolates the non-conforming names' },
      },
      {
        id: 's5', heading: 'Handling Duplicate Sheet Numbers During Rename', level: 'h2',
        content: `Because Revit enforces unique Sheet Numbers, a batch rename that briefly produces a collision (e.g., two sheets both computing "1001" before the pass finishes) will fail partway through.`,
        items: [
          'Check the constructed Number list for duplicates before writing anything, using List.Count comparisons or a Set-style uniqueness check',
          'If the DPC2025 register already guarantees unique source numbering, this is usually just a safety check — but it becomes essential when merging naming schemes from multiple legacy sources',
          'When a genuine collision is found, resolve it in the source data (the numbering logic or lookup table) rather than manually patching one instance, so the graph remains reliable on the next run',
        ],
      },
      {
        id: 's6', heading: 'Running the Rename Safely', level: 'h2',
        content: `Because this script overwrites existing, already-in-use names across a live model, the same validation discipline from earlier lessons applies with extra weight here.`,
        items: [
          'Test the constructed name strings with Watch nodes before wiring anything into Element.SetParameterByName — confirm every field resolves as expected across a representative sample of views and sheets',
          'Run against a small subset of DPC2025\'s sheets first (e.g., one discipline\'s sheets) before renaming the entire model\'s view and sheet set in one pass',
          'Keep the graph in Manual run mode throughout, since a batch rename is exactly the kind of change you want to trigger deliberately, not automatically on every edit',
        ],
      },
    ],
    takeaways: [
      'The ISO 19650-style template used on DPC2025 follows Project-Originator-Volume-Level-Type-Role-Number, joined by hyphens (e.g., "DPC-XX-00-00-DR-A-1001").',
      'Each field is built from either a fixed project constant or a value read from the view/sheet, then joined with a string construction node into the final name.',
      'Element.SetParameterByName writes the constructed names onto Sheet Number, Sheet Name, and View Name across the full batch in one run.',
      'A validation pass using String.Split on the hyphen and segment-by-segment comparison checks can flag names that do not conform, standing in for a true regex check.',
      'Checking the constructed Number list for duplicates before writing avoids a mid-batch failure from Revit\'s unique Sheet Number requirement.',
      'Always test naming construction with Watch nodes and a small subset before renaming an entire model\'s views and sheets in one run.',
    ],
    resource: { label: 'ISO 19650 Naming Automation Guide', type: 'PDF' },
    quiz: { label: 'ISO 19650 Naming Convention Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-10', title: 'Auto-Creating Sheets & Placing Views' },
    next: { id: 'dynp-12', title: 'Checking Model Health — Finding Untagged Elements' },
  },

  // ============================================================
  // LESSON DYNP-12 — Checking Model Health: Finding Untagged Elements
  // ============================================================
  {
    id: 'dynp-12', num: '12',
    title: 'Checking Model Health — Finding Untagged Elements',
    topic: 'Standards & QA', cat: 'intermediate', readTime: '10 min', free: false,
    desc: 'Compare all elements of a category in a view against all tags in that view to compute which elements have no corresponding tag, using list comparison and a Python-assisted cross-reference.',
    intro: `A common QA/QC requirement on a real project like DPC2025 is proving that every door, every room, or every piece of equipment in a given view actually has a tag — a check that is tedious and error-prone to do by eye across a busy drawing. This lesson builds a model health check that collects all elements of a category in a view, collects all the tags in that same view, and computes the set difference to surface exactly which elements were missed.`,
    sections: [
      {
        id: 's1', heading: 'Collecting Elements and Tags in the Same View', level: 'h2',
        content: `The check requires two separate collections scoped to the same view: every placed element of the target category, and every tag element already placed in that view.`,
        items: [
          'Collect all elements of the target category (e.g., Doors) visible in the active DPC2025 view, using a category collector scoped to "Elements in Active View" rather than the whole project',
          'Separately collect all Tag elements in that same view — tags are their own distinct category (e.g., Door Tags) and must be gathered independently from the elements they annotate',
          'Both collections must be scoped to the identical view for the comparison to mean anything — comparing elements from one view against tags from another produces meaningless results',
        ],
        formula: { label: 'Scope Rule', text: 'Elements and Tags must both be collected from the SAME view — this check answers "what is untagged HERE," not "what is untagged anywhere"' },
      },
      {
        id: 's2', heading: 'Why This Needs More Than a Stock Node', level: 'h2',
        content: `Dynamo has no single out-of-the-box node that directly answers "which element does this tag belong to." A Tag element references its host element internally through the Revit API, not through a simple exposed Dynamo parameter, which is why this check typically requires a **Python node** using the Revit API directly.`,
        items: [
          'A Tag\'s host reference is exposed in the Revit API as a property commonly referred to by names like "TaggedLocalElementId" (the exact API surface varies by Revit version), which Python can access directly but which stock nodes generally do not expose',
          'The Python node imports the Revit API (via the standard RevitAPI/RevitServices imports available in a Dynamo Python node), iterates the collected tags, and reads each tag\'s host element ID',
          'The result is a plain list of Element IDs (the elements that ARE tagged), returned from the Python node back into the main graph as an ordinary Dynamo list for the remaining comparison steps',
        ],
        formula: { label: 'Why Python Is Needed Here', text: 'There is no single stock node for "get the element a tag is tagging" — this relies on a Python node using the Revit API, unlike most of this course\'s scripts' },
      },
      {
        id: 's3', heading: 'Computing the Set Difference', level: 'h2',
        content: `With a list of ALL elements of the category and a list of TAGGED element IDs (from the Python node), the untagged elements are simply the set difference between the two.`,
        code: {
          label: 'Set Difference Logic',
          lines: [
            'All Elements   = every Door in the view (Element ID list)',
            'Tagged Elements = every host Element ID read from the tags',
            '                  in that view (via the Python node)',
            '',
            'Untagged = All Elements NOT PRESENT IN Tagged Elements',
            '',
            'For each Element ID in All Elements, check List.ContainsItem',
            'against Tagged Elements -> false means untagged.',
          ],
        },
        items: [
          'Build a boolean mask by checking, for every element in the full category list, whether its Element ID appears in the tagged-ID list (List.ContainsItem or equivalent membership check)',
          'Invert that boolean mask (an element is "untagged" when the containment check is false) and feed it into List.FilterByBoolMask against the original element list',
          'The "in" output of that final filter is your answer: the elements in this view with no corresponding tag',
        ],
        formula: { label: 'Filtering Pattern', text: 'All category elements -> boolean mask from "is this Element ID in the tagged list?" -> invert -> List.FilterByBoolMask -> untagged elements' },
      },
      {
        id: 's4', heading: 'Reporting the Results', level: 'h2',
        content: `The filtered "untagged" list is most useful when turned into something a BIM Manager can act on directly, rather than left as a raw Dynamo output.`,
        items: [
          'Read a human-readable identifier from each untagged element (e.g., Mark, or Room Number for rooms) so the report names elements meaningfully instead of by raw Element ID alone',
          'Feed the untagged list\'s identifiers and Element IDs into Excel.WriteToFile for a shareable QA report, following the same export pattern used for schedules elsewhere in this course',
          'Consider also selecting the untagged elements directly in the Revit view (via a Select Elements node reference or by isolating them) so they can be visually reviewed and tagged manually right away',
        ],
      },
      {
        id: 's5', heading: 'Running the Check Across Multiple Views or Categories', level: 'h2',
        content: `A single-view, single-category check is useful, but the real value on a project the size of DPC2025 comes from running the same logic across every relevant view and category.`,
        items: [
          'Wrap the collection + Python cross-reference + set-difference logic so it can run once per view, looping across a list of all plan views rather than one at a time',
          'Repeat for each category that requires tagging discipline on DPC2025 (Doors, Windows, Rooms, Equipment), since each category\'s tags are a distinct Revit category needing its own collection pass',
          'Aggregate all per-view, per-category results into a single combined report rather than requiring a BIM Manager to run the check separately for every view',
        ],
        formula: { label: 'Scaling the Check', text: 'One working single-view/category check, looped across every view and every relevant category, becomes a full-model tagging QA sweep' },
      },
      {
        id: 's6', heading: 'Limitations and Sanity Checks', level: 'h2',
        content: `This check answers a narrower question than it might first appear to, and it is worth being precise about what it does and does not catch.`,
        items: [
          'It flags elements with NO tag in the given view — it does not verify that an existing tag\'s displayed value is correct or up to date',
          'An element tagged in a different view (e.g., a door tagged only in an elevation, not in the plan being checked) will still show as "untagged" for the plan view\'s check — this is expected, not a bug, since the check is intentionally scoped per view',
          'Because the Python node depends on the exact Revit API property names for the installed Revit/Dynamo version, verify the Python script\'s API calls against the current DPC2025 Revit version before relying on the results',
        ],
      },
    ],
    takeaways: [
      'Finding untagged elements requires two matched collections scoped to the same view: all elements of the category, and all tags in that view.',
      'There is no single stock Dynamo node for "which element does this tag belong to" — this typically requires a Python node using the Revit API to read each tag\'s host element reference.',
      'Untagged elements are computed as a set difference: elements whose Element ID does not appear in the list of tagged element IDs.',
      'List.ContainsItem (or an equivalent membership check) builds the boolean mask, which is inverted and fed into List.FilterByBoolMask to isolate untagged elements.',
      'Reporting is most useful when it includes a human-readable identifier and is exported (e.g., to Excel) rather than left as a raw Element ID list.',
      'This check is scoped per view — an element tagged only in a different view will still show as untagged for the view being checked, which is expected behavior.',
    ],
    resource: { label: 'Model Health & Untagged Element QA Guide', type: 'PDF' },
    quiz: { label: 'Finding Untagged Elements Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-11', title: 'Renaming Views & Sheets to Match ISO 19650 Convention' },
    next: { id: 'dynp-13', title: 'Generating a Door Schedule Report in Excel' },
  },

  // ============================================================
  // LESSON DYNP-13 — Generating a Door Schedule Report in Excel
  // ============================================================
  {
    id: 'dynp-13', num: '13',
    title: 'Generating a Door Schedule Report in Excel',
    topic: 'Schedules & Structure', cat: 'intermediate', readTime: '9 min', free: false,
    desc: 'Collect door data across the model and export a formatted, header-labeled Door Schedule report to Excel — a real deliverable a BIM Manager could hand directly to a client.',
    intro: `Not every Dynamo script needs to modify the model — some of the most useful ones simply produce a clean, structured report from data that already exists. This lesson builds a Door Schedule export for DPC2025: collecting every door, reading the parameters a client or contractor actually cares about, and assembling a properly headed spreadsheet with Excel.WriteToFile. This is a genuinely deliverable artifact, not just a learning exercise.`,
    sections: [
      {
        id: 's1', heading: 'Collecting All Doors in the Model', level: 'h2',
        content: `The starting point is a full, project-wide collection of Door elements — not scoped to a single view, since a schedule report should represent the entire building.`,
        items: [
          'Use a category collector (All Elements of Category, set to Doors) scoped to the whole project, not "Elements in Active View"',
          'This returns every placed Door instance across every level in DPC2025 as a single flat list',
          'Unplaced or schedule-only door entries are not an issue here the way unplaced rooms can be, since doors are host-based and only exist once actually placed in a wall',
        ],
      },
      {
        id: 's2', heading: 'Reading the Required Parameters', level: 'h2',
        content: `A client-ready door schedule needs a specific, consistent set of parameters read from every door — a mix of instance and type parameters (see the foundational course's Lesson 11 for that distinction).`,
        code: {
          label: 'Door Schedule Columns',
          lines: [
            'Mark          -> instance parameter, the door\'s unique tag value',
            'Type Name     -> the Family Type\'s name string',
            'Width         -> type parameter, door leaf width',
            'Height        -> type parameter, door leaf height',
            'Level         -> instance parameter, hosting Level',
            'Fire Rating   -> type parameter, fire rating value/text',
          ],
        },
        items: [
          'Read each parameter with Element.GetParameterValueByName across the full door list, producing one parallel list per column',
          'Type-level parameters like Width, Height, and Fire Rating are read the same way as instance parameters from Dynamo\'s perspective — the node does not care which kind it is, only that the parameter exists on the element',
          'Confirm Fire Rating is actually populated on DPC2025\'s door types before relying on it in the report — a blank Fire Rating column is a common real-world QA finding in itself',
        ],
      },
      {
        id: 's3', heading: 'Assembling the List-of-Lists with a Header Row', level: 'h2',
        content: `Excel.WriteToFile expects a single list of lists — rows as the outer list, columns as each inner list — so the parallel parameter lists must be combined into that structure, with a header row placed first.`,
        code: {
          label: 'Assembling Rows',
          lines: [
            'Header row (its own list):',
            '  ["Mark", "Type Name", "Width", "Height", "Level", "Fire Rating"]',
            '',
            'Data rows (one per door, built with List.Create combining',
            'the parallel parameter lists by matching index):',
            '  ["D01", "Single-Flush 900x2100mm", 900, 2100, "Level 1", "FD30"]',
            '  ["D02", "Double-Flush 1800x2100mm", 1800, 2100, "Level 1", "FD60"]',
            '  ...',
            '',
            'Final structure fed to Excel.WriteToFile:',
            '  [ HeaderRow, DataRow1, DataRow2, ... ]',
          ],
        },
        formula: { label: 'Structure Rule', text: 'Outer list = rows (header first, then one row per door) | Inner list = the column values for that row, in a fixed, consistent column order' },
      },
      {
        id: 's4', heading: 'Exporting with Excel.WriteToFile', level: 'h2',
        content: `With the full row structure assembled, **Excel.WriteToFile** writes it out to a named worksheet in a single call.`,
        items: [
          'Set a clear file path and a descriptive sheetName (e.g., "DPC2025 Door Schedule") rather than leaving the default sheet name in place',
          'Leave startRow and startColumn at 0, 0 so the header lands at cell A1',
          'If re-running the export as the model changes, writing to the same file/sheet will overwrite the previous data in those cells — for a dated deliverable, consider varying the file name per export (e.g., including the date) so previous versions are preserved',
        ],
        formula: { label: 'Deliverable Checklist', text: 'Descriptive sheet name + header row + one row per door + consistent column order = a report a BIM Manager can hand to a client with no manual cleanup' },
      },
      {
        id: 's5', heading: 'Sorting and Formatting Considerations', level: 'h2',
        content: `A raw export in whatever order the category collector happens to return doors is functional but not client-ready — a small amount of ordering makes a real difference.`,
        items: [
          'Sort the assembled data rows by Mark (or by Level, then Mark) before writing, so the schedule reads in a sensible, predictable order rather than an arbitrary collection order',
          'Numeric-looking values like Width and Height should be written as actual numbers rather than text where possible, so any downstream Excel formulas or sorting behave correctly',
          'Keep the Mark column as text explicitly if door marks could ever have a leading zero or non-numeric format, to avoid the same auto-formatting pitfalls covered with Excel round-tripping in the foundational course',
        ],
      },
      {
        id: 's6', heading: 'Turning This into a Repeatable Deliverable', level: 'h2',
        content: `Because this script only reads data and never writes back to the DPC2025 model, it is one of the safest scripts in this course to re-run at any time — during design development, before an issue, or on a recurring basis.`,
        items: [
          'Since there is no model-modifying step, this script can safely run in Automatic mode without the same caution required for placement or renaming scripts',
          'Re-running it after any door changes instantly produces an updated schedule, which is the core advantage over manually maintaining a duplicate outside Revit',
          'This same read-collect-assemble-export pattern extends directly to any other category report — windows, equipment, structural framing — by swapping the category collector and the parameter list',
        ],
      },
    ],
    takeaways: [
      'A door schedule export starts with a project-wide (not view-scoped) collection of all Door elements in DPC2025.',
      'Mark, Type Name, Width, Height, Level, and Fire Rating are read the same way regardless of whether they are instance or type parameters, using Element.GetParameterValueByName.',
      'Excel.WriteToFile requires a list of lists with the header row first, followed by one row per door, columns in a fixed consistent order.',
      'A descriptive sheet name and consistent column order turn the export into a real client-ready deliverable rather than raw dumped data.',
      'Sorting rows by Mark or Level before export, and keeping Mark as text, avoids common formatting and readability problems.',
      'Because this script only reads data and never writes to the model, it is safe to re-run at any time, including in Automatic mode, unlike model-modifying scripts.',
    ],
    resource: { label: 'Door Schedule Excel Export Template Guide', type: 'PDF' },
    quiz: { label: 'Door Schedule Report Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-12', title: 'Checking Model Health — Finding Untagged Elements' },
    next: { id: 'dynp-14', title: 'Placing Structural Framing Along a Grid Automatically' },
  },

  // ============================================================
  // LESSON DYNP-14 — Placing Structural Framing Along a Grid Automatically
  // ============================================================
  {
    id: 'dynp-14', num: '14',
    title: 'Placing Structural Framing Along a Grid Automatically',
    topic: 'Schedules & Structure', cat: 'intermediate', readTime: '11 min', free: false,
    desc: 'Read existing Revit Grids, generate framing lines between grid intersections, and place structural framing instances along them with the correct usage, justification, and offset.',
    intro: `Structural framing layouts follow the building's grid by definition, which makes them an excellent candidate for geometry-driven automation rather than manual placement. This lesson works with DPC2025's structural grid system: reading the existing Grid curves, generating framing member lines between their intersections, and placing structural framing family instances along those lines — including the structural usage, justification, and offset settings that make the placement actually correct, not just geometrically present.`,
    sections: [
      {
        id: 's1', heading: 'Reading Existing Grid Curves', level: 'h2',
        content: `DPC2025's structural grid — the reference lines every column, beam, and framing member aligns to — already exists in the model as Grid elements before this script runs. The first step is collecting them and extracting their geometry.`,
        items: [
          'Collect all Grid elements with a category collector (All Elements of Category, set to Grids)',
          'Each Grid element exposes its centerline as a Curve, accessible via a Grid-specific curve node (or Element.Curves depending on the package version)',
          'Grids are typically split into two groups by orientation (e.g., numbered grids running one direction, lettered grids running perpendicular) — separating them early makes generating intersections much simpler',
        ],
        formula: { label: 'Starting Point', text: 'The grid system already exists in DPC2025 — this script reads it, it does not create it' },
      },
      {
        id: 's2', heading: 'Finding Grid Intersections', level: 'h2',
        content: `Framing members span BETWEEN grid intersections, so the next step is computing the actual intersection points where each numbered grid crosses each lettered grid.`,
        code: {
          label: 'Intersection Logic',
          lines: [
            'Numbered Grids (curves) x Lettered Grids (curves)',
            '  -> Curve.Intersect (or Geometry.Intersect) with',
            '     Cross Product lacing between the two grid-curve lists',
            '  -> one intersection Point per (Number, Letter) pair',
            '',
            'Result: a nested list of intersection points, structured',
            'the same way a coordinate grid was structured earlier',
            'in this course (Cross Product lacing recap).',
          ],
        },
        formula: { label: 'Lacing Reminder', text: 'Cross Product lacing between the two grid-curve lists is exactly the "every combination of A and B" pattern used for coordinate grids in the foundational course' },
      },
      {
        id: 's3', heading: 'Generating Framing Lines Between Intersections', level: 'h2',
        content: `With the intersection points computed, framing member lines are built by connecting adjacent intersections — the actual centerlines the framing instances will be placed along.`,
        items: [
          'Line.ByStartPointEndPoint connects two adjacent intersection points to form one framing member\'s centerline',
          'Framing spanning along the numbered-grid direction connects adjacent points within the same lettered-grid row; framing spanning the other direction connects adjacent points within the same numbered-grid column',
          'Filter out any pairs that should not receive framing (e.g., an opening or a stair void in the DPC2025 layout) before generating lines for those spans, rather than placing framing everywhere and deleting it afterward',
        ],
      },
      {
        id: 's4', heading: 'Placing Structural Framing Instances', level: 'h2',
        content: `With a full set of framing centerlines generated, the actual family placement uses the curve-based placement pattern (the structural equivalent of FamilyInstance.ByPoint used for point-based placement earlier in this course).`,
        code: {
          label: 'Curve-Based Placement',
          lines: [
            'FamilyInstance.ByCurve(familyType, curve)',
            '  familyType -> structural framing Family Type',
            '                (e.g., "W250x33 Beam"), via FamilyType.ByName',
            '  curve      -> one framing centerline Line from the',
            '                intersection step above',
            '',
            'Feeding the full list of generated Lines places every',
            'framing member across the DPC2025 grid in one run.',
          ],
        },
        formula: { label: 'Core Pattern', text: 'Grid curves -> intersection points -> framing centerlines -> FamilyInstance.ByCurve places the whole layout in a single run' },
      },
      {
        id: 's5', heading: 'Setting Structural Usage and Type Parameters', level: 'h2',
        content: `A framing member placed with the correct geometry but the wrong structural classification is still wrong — Revit tracks a specific Structural Usage parameter that downstream analysis and scheduling depend on.`,
        items: [
          'Structural Usage (e.g., "Girder," "Beam," "Brace," "Other") should be set explicitly with Element.SetParameterByName immediately after placement, since the default value is not always correct for every span',
          'For DPC2025, primary framing along the main grid lines is typically set to "Girder" while secondary infill framing is set to "Beam" — this distinction should be driven by which generation step produced the line (main grid vs. infill), not set uniformly across all instances',
          'The structural Family Type itself (already resolved via FamilyType.ByName for placement) should match the size called for by the structural engineer\'s framing plan, not a default placeholder type',
        ],
      },
      {
        id: 's6', heading: 'Justification and Offset', level: 'h2',
        content: `Structural framing has justification and offset parameters that determine exactly where the member sits relative to its reference centerline — get these wrong and members can clash with slabs, other framing, or fail a clearance check even though the centerline geometry looks correct.`,
        items: [
          'Start/End Justification (e.g., Top, Center, Bottom, or a specific flange reference) controls which part of the framing cross-section aligns to the placement curve',
          'z-Justification and the corresponding Z Offset Value parameters fine-tune vertical position relative to the level or reference plane',
          'Set these parameters explicitly with Element.SetParameterByName as part of the same placement script, rather than relying on family defaults, since defaults vary by family and are easy to leave inconsistent across a large placed set',
          'A quick visual check in a 3D view or section after running the script is still worthwhile, since justification errors are often easier to spot visually than to catch purely from parameter values',
        ],
        formula: { label: 'Justification Rule', text: 'Correct centerline geometry is not the same as correct placement — Justification and Offset parameters must also be set explicitly for framing to sit correctly' },
      },
    ],
    takeaways: [
      'This script reads DPC2025\'s existing Grid elements rather than creating a new grid system, extracting each grid\'s centerline curve.',
      'Grid intersection points are computed with a curve intersection node using Cross Product lacing between the two perpendicular grid-curve lists.',
      'Framing centerlines are built by connecting adjacent intersection points with Line.ByStartPointEndPoint, filtering out spans that should not receive framing.',
      'FamilyInstance.ByCurve places structural framing along generated centerlines, the curve-based counterpart to the point-based FamilyInstance.ByPoint pattern.',
      'Structural Usage (Girder, Beam, Brace, etc.) should be set explicitly per span rather than left at a uniform default across all placed instances.',
      'Justification and Offset parameters must be set explicitly as part of the placement script, since correct centerline geometry alone does not guarantee correct physical placement.',
    ],
    resource: { label: 'Automated Structural Framing Placement Guide', type: 'PDF' },
    quiz: { label: 'Structural Framing Automation Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-13', title: 'Generating a Door Schedule Report in Excel' },
    next: { id: 'dynp-15', title: 'Copying Parameters Between Linked Models' },
  },

  // ============================================================
  // LESSON DYNP-15 — Copying Parameters Between Linked Models
  // ============================================================
  {
    id: 'dynp-15', num: '15',
    title: 'Copying Parameters Between Linked Models',
    topic: 'Linked Models & COBie', cat: 'intermediate', readTime: '10 min', free: false,
    desc: 'Access elements inside a linked Revit model, match them to host-model elements, and copy parameter values across — while respecting the read-only nature of linked documents.',
    intro: `Multi-discipline projects like DPC2025 are rarely a single Revit file — architectural, structural, and MEP models are typically linked together, and useful data often lives on the wrong side of that link for a given task. This lesson covers accessing a linked model's elements from Dynamo, matching them to corresponding elements in the host model, and copying parameter values across the link — along with the single most important constraint of this entire workflow: linked documents are read-only from Dynamo.`,
    sections: [
      {
        id: 's1', heading: 'Accessing a Linked Document', level: 'h2',
        content: `A linked Revit model (e.g., DPC2025's structural model linked into the architectural host file) is accessed through a **RevitLinkInstance** — the placed link itself — and a corresponding node to reach the actual linked document's elements.`,
        items: [
          '**All Elements of Category** style collectors, by default, only return elements from the HOST document — a separate step is needed to reach into a link',
          'A RevitLinkInstance element (collected like any other element, category "RVT Links") represents the placed link and exposes its transform (position/rotation offset between host and linked coordinate systems)',
          'Dedicated linked-document access nodes (available in common Dynamo packages) take the RevitLinkInstance and return element collections from INSIDE that linked document, category by category, the same way a host collector would',
        ],
        formula: { label: 'Key Distinction', text: 'Standard category collectors see only the host model — reaching into a link requires going through the RevitLinkInstance explicitly' },
      },
      {
        id: 's2', heading: 'Matching Linked Elements to Host Elements', level: 'h2',
        content: `Once linked elements are accessible, they need to be matched to their corresponding host-model counterparts before any parameter can be meaningfully copied — Dynamo has no automatic concept of "this linked wall corresponds to this host wall."`,
        subsections: [
          {
            heading: 'Matching Strategies',
            items: [
              '**Shared identifying parameter** — if both models populate a common value (e.g., a shared "Zone ID" or "Grid Reference" parameter), match host and linked elements directly by comparing that value; this is the most reliable method when available',
              '**Proximity/geometry matching** — using the RevitLinkInstance\'s transform to convert linked-element locations into host coordinates, then matching by nearest point or bounding-box overlap when no shared parameter exists',
              'Proximity matching is inherently approximate and should include a distance tolerance and a manual spot-check of a sample of matches before trusting it at full scale',
              'On DPC2025, a shared "Zone ID" parameter populated in both the architectural and structural models is the preferred match key wherever it has been maintained consistently',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Reading Parameters from the Linked Model', level: 'h2',
        content: `Reading a parameter value FROM a linked element works exactly the same as reading from any host element — Element.GetParameterValueByName does not care which document an element came from.`,
        items: [
          'Once matched, read the desired parameter (e.g., a structural engineer\'s Fire Rating or Load Classification value) from the linked element using the standard Element.GetParameterValueByName node',
          'Confirm the parameter actually exists and is populated in the linked model before building the full matching pipeline around it — a Watch node on a small sample of linked elements is the fastest way to check',
          'Reading is unrestricted; the constraint in this workflow applies only to writing, covered next',
        ],
      },
      {
        id: 's4', heading: 'The Read-Only Constraint — Writes Must Target the Host', level: 'h2',
        content: `This is the single most important rule in this lesson: **linked documents are read-only from Dynamo.** A Dynamo graph running in the host document can read every parameter value it wants from a link, but it cannot write, modify, or delete anything inside that linked document.`,
        code: {
          label: 'What Is and Is Not Possible',
          lines: [
            'POSSIBLE:',
            '  Read a parameter value from an element inside the',
            '  linked structural model, from the architectural host.',
            '',
            'NOT POSSIBLE:',
            '  Write/change a parameter value on that SAME linked',
            '  element from the architectural host\'s Dynamo graph.',
            '',
            'THE ACTUAL WORKFLOW:',
            '  Read value FROM linked element',
            '  -> match to corresponding HOST element',
            '  -> Element.SetParameterByName WRITES onto the HOST',
            '     element only, never back into the link',
          ],
        },
        formula: { label: 'Critical Constraint', text: 'Every write in this workflow must target an element that belongs to the document the graph is running in — never an element from a linked document' },
      },
      {
        id: 's5', heading: 'Building the Full Copy Pipeline', level: 'h2',
        content: `Putting the pieces together, a parameter-copy script between DPC2025's linked models follows a consistent, one-directional pipeline.`,
        code: {
          label: 'Cross-Link Parameter Copy Pipeline',
          lines: [
            'RevitLinkInstance (the placed structural link)',
            '  -> linked-document element collector (by category)',
            '  -> match each linked element to a host element',
            '     (shared parameter or transform-adjusted proximity)',
            '  -> Element.GetParameterValueByName on the LINKED element',
            '  -> Element.SetParameterByName on the matched HOST element',
          ],
        },
        items: [
          'This pipeline only ever runs from within the document that should receive the write — running it from the structural model to write into the architectural model would require opening THAT model as host instead',
          'If data needs to flow in both directions (host-to-link and link-to-host), two separate graphs are required, each run from its own host document, since neither can write into the other',
        ],
      },
      {
        id: 's6', heading: 'Practical Cautions with Linked Data', level: 'h2',
        content: `Beyond the read-only rule itself, a few practical issues come up regularly when working with linked models on a live, evolving project like DPC2025.`,
        items: [
          'Linked models can be unloaded or out of date at the moment the graph runs — always confirm the link is loaded and current before trusting a "no elements found" result, which may just mean the link is unloaded rather than genuinely empty',
          'A link\'s transform (position/rotation offset) must be applied correctly for proximity-based matching to work — an unaccounted-for rotation is a common cause of matches that are subtly, confusingly wrong rather than obviously wrong',
          'Re-running the script after either model changes (elements added, moved, or renumbered) may invalidate previous matches — treat matching as something to re-verify on every run, not something to assume stays valid',
          'Document clearly, in the graph itself (a Note node) or accompanying documentation, which direction data flows and which model is the authoritative source for each copied parameter',
        ],
      },
    ],
    takeaways: [
      'Reaching elements inside a linked model requires going through a RevitLinkInstance and a linked-document element collector — standard category collectors only see the host document.',
      'Linked elements must be matched to host elements either by a shared identifying parameter (preferred) or by transform-adjusted proximity/geometry matching.',
      'Reading a parameter from a linked element works identically to reading from a host element via Element.GetParameterValueByName.',
      'Linked documents are read-only from Dynamo — a graph can never write, modify, or delete elements inside a linked model.',
      'All writes must target the corresponding element in the HOST document, using Element.SetParameterByName after matching, never the linked element itself.',
      'Bidirectional data flow between two linked models requires two separate graphs, each run from its own host document, since neither model can write into the other.',
    ],
    resource: { label: 'Linked Model Parameter Exchange Guide', type: 'PDF' },
    quiz: { label: 'Linked Models Parameter Copy Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-14', title: 'Placing Structural Framing Along a Grid Automatically' },
    next: { id: 'dynp-16', title: 'Building a COBie Data Population Script' },
  },

  // ============================================================
  // LESSON DYNP-16 — Building a COBie Data Population Script
  // ============================================================
  {
    id: 'dynp-16', num: '16',
    title: 'Building a COBie Data Population Script',
    topic: 'Linked Models & COBie', cat: 'intermediate', readTime: '11 min', free: false,
    desc: 'Understand COBie handover data, the COBie-prefixed shared parameter convention, and build a script that bulk-populates those parameters from an asset spreadsheet before running Revit\'s COBie export.',
    intro: `Handover data is where a lot of otherwise excellent BIM work quietly falls apart — asset data that should flow cleanly from design into facilities management instead gets typed in manually, inconsistently, at the very end of a project when everyone is exhausted. This closing lesson covers what COBie actually is, how COBie data is staged inside Revit using shared parameters, and builds a script that bulk-populates DPC2025's COBie parameters from an asset spreadsheet — setting up a clean export rather than replacing the export process itself.`,
    sections: [
      {
        id: 's1', heading: 'What COBie Is', level: 'h2',
        content: `**COBie** — Construction Operations Building Information Exchange — is a structured data format for handing over building information from the design and construction team to the building's owner and facilities management team, in a form that is usable without needing Revit or any specific BIM authoring tool.`,
        items: [
          'COBie is organized into a defined set of worksheets/sheets, each representing a category of handover information',
          'It is typically delivered as a spreadsheet (or a spreadsheet-equivalent structured export) so facilities management software with no BIM authoring capability can still consume the data directly',
          'COBie is a data STANDARD, not a Revit feature — Revit (and Dynamo) are simply one route to populating and producing COBie-compliant output',
        ],
        formula: { label: 'Core Definition', text: 'COBie = Construction Operations Building Information Exchange — a structured, spreadsheet-friendly handover data standard, independent of any single software' },
      },
      {
        id: 's2', heading: 'The COBie Sheet Structure', level: 'h2',
        content: `A COBie deliverable is organized around a standard set of sheets, each covering a distinct part of the facility's information.`,
        code: {
          label: 'Core COBie Sheets',
          lines: [
            'Facility  -> the overall project/building record',
            'Floor     -> each building level',
            'Space     -> each room/space within a floor',
            'Zone      -> logical groupings of spaces (e.g., by department',
            '             or system service area)',
            'Type      -> product/family type definitions (e.g., a specific',
            '             door type, a specific AHU model)',
            'Component -> each individual physical instance of a Type',
            '             (e.g., Door D01, specifically)',
            'System    -> logical groupings of components by system',
            '             (e.g., all components in "Chilled Water System 1")',
          ],
        },
        formula: { label: 'Type vs. Component', text: 'Type = the product definition (one row per distinct type) | Component = each individual placed instance of that type (one row per physical item) — mirroring the Family Type vs. Instance distinction from earlier lessons' },
      },
      {
        id: 's3', heading: 'COBie-Prefixed Shared Parameters', level: 'h2',
        content: `Revit does not natively store data in COBie's sheet structure — instead, the standard convention is a family of **shared parameters prefixed "COBie."** added to families and categories, which the export process later reads and reorganizes into the COBie sheet format.`,
        items: [
          '**COBie.Type** — staged on Family Types, corresponding to the Type sheet (e.g., manufacturer, model number, warranty information)',
          '**COBie.Component** — staged on instances, corresponding to the Component sheet (e.g., serial number, installation date, a component-specific identifier)',
          'Additional COBie-prefixed parameters exist for space, system, and other sheet-specific data, following the same prefix convention',
          'These shared parameters must be loaded into the DPC2025 project (via a shared parameter file) and bound to the correct categories before any script can populate them — the same loading-first requirement seen with families in earlier lessons applies to parameters here too',
        ],
        formula: { label: 'Staging Concept', text: 'COBie-prefixed shared parameters are how COBie data is STAGED inside Revit — the export process later reads them and reorganizes the values into COBie\'s sheet structure' },
      },
      {
        id: 's4', heading: 'Populating COBie Parameters from an Asset Spreadsheet', level: 'h2',
        content: `Just as with the furniture and sheet scripts earlier in this course, COBie parameter population is best driven from an external spreadsheet — in this case, an asset data spreadsheet typically compiled by the facilities management team or a specialist COBie coordinator.`,
        code: {
          label: 'DPC2025 COBie Population Pipeline',
          lines: [
            'Excel.ReadFromFile (asset data spreadsheet)',
            '  columns: Room Number, Component Mark, COBie.Component',
            '           Serial Number, COBie.Type Warranty, ...',
            '',
            '  -> split into parallel column lists',
            '  -> match rows to Room / Component elements in DPC2025',
            '     (by Room Number / Mark, same matching pattern as',
            '     Lesson 9\'s furniture schedule)',
            '  -> Element.SetParameterByName writes each COBie-prefixed',
            '     value onto the matched Room or Component element',
          ],
        },
        items: [
          'Rooms in the model correspond to COBie Space rows, so room-level COBie parameters (if used) are populated via the same Room collection and matching approach covered in the foundational course',
          'Components (doors, equipment, fixtures) are matched by Mark or another stable identifier, exactly as in the door schedule and furniture placement scripts earlier in this course',
          'Bulk-populating across the whole DPC2025 model in one run is what makes this workflow valuable — manually typing COBie data into hundreds of individual element properties dialogs is the exact problem this script solves',
        ],
      },
      {
        id: 's5', heading: 'Dynamo Prepares Data — It Does Not Replace the Export Toolkit', level: 'h2',
        content: `It is important to be precise about the boundary of what this script actually does: **Dynamo prepares and stages COBie data inside Revit parameters — it does not perform the COBie export itself.**`,
        items: [
          'The actual COBie export/extension (Revit\'s dedicated COBie extension, or an equivalent third-party export tool) is a separate step, run after this Dynamo script has finished populating parameters',
          'That export tool reads the COBie-prefixed shared parameters across the model and reorganizes their values into the proper COBie sheet structure and file format',
          'Running the export tool against a model where COBie parameters were never populated will simply produce an empty or mostly-blank COBie file — the export step cannot invent data, and the Dynamo script cannot skip the export step',
          'Treat this as a two-stage pipeline: Dynamo populates -> export toolkit extracts and formats — never conflate the two into a single step when explaining or troubleshooting the workflow',
        ],
        formula: { label: 'Division of Labor', text: 'Dynamo populates COBie-prefixed parameters across the model | Revit\'s COBie export/extension reads those parameters and produces the actual COBie deliverable — two distinct stages, not one' },
      },
      {
        id: 's6', heading: 'Validating Before a Real Handover Export', level: 'h2',
        content: `Because COBie data underpins a real facilities management handover, validation before the final export matters even more than in most of this course's scripts.`,
        items: [
          'Spot-check a sample of populated COBie.Component and COBie.Type values directly in the Revit Properties palette after running the script, confirming the values landed on the correct elements',
          'Run the actual COBie export/extension against a small subset first if the toolkit supports scoped exports, to confirm the populated data flows through into the expected sheet structure',
          'Cross-check populated Type-level data (COBie.Type) is not being unexpectedly duplicated or blank across different instances of what should be the same type, since Type parameters affect every instance sharing that type (see the foundational course\'s parameter lesson)',
          'Keep the population script and the asset spreadsheet under version control or a clear naming convention, since COBie population is often revisited multiple times before a project\'s actual handover date',
        ],
      },
    ],
    takeaways: [
      'COBie (Construction Operations Building Information Exchange) is a structured, spreadsheet-friendly handover data standard organized around sheets: Facility, Floor, Space, Zone, Type, Component, and System.',
      'Type sheet rows correspond to product/family type definitions, while Component sheet rows correspond to each individual physical instance — mirroring the Family Type vs. Instance distinction.',
      'COBie-prefixed shared parameters (e.g., COBie.Component, COBie.Type) are the standard convention for staging COBie data inside Revit, and must be loaded and bound to categories before population.',
      'A COBie population script reads an asset data spreadsheet, matches rows to Room or Component elements by a stable identifier, and bulk-writes the COBie-prefixed parameters with Element.SetParameterByName.',
      'Dynamo prepares and stages the data inside Revit parameters — the actual COBie export/extension is a separate, subsequent step that reads those parameters and produces the deliverable file.',
      'Validating populated values (spot-checks, scoped test exports) before the real handover export matters because COBie data feeds a real facilities management deliverable, not just an internal report.',
    ],
    resource: { label: 'COBie Data Population Workflow Guide', type: 'PDF' },
    quiz: { label: 'COBie Data Population Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-15', title: 'Copying Parameters Between Linked Models' },
    next: { id: 'dynp-17', title: 'Building a Model Audit Script — Automating Warning Detection & Reporting' },
  },

];
