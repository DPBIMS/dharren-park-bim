// ============================================================
// AUTODESK DYNAMO — PRACTICE LESSONS dynp-1 through dynp-8 (BEGINNER)
// Section: Practice Setup / Door & Level Data / Parameters & Data / Grids & Views
// File: lib/dynamoPracticeLessonsContent/dynamoPracticeLessons_1_8.js
// Index: lib/dynamoPracticeLessonsData.js
// Free lessons: dynp-1, dynp-2, dynp-3
// This is the SECOND, hands-on Dynamo course. It assumes the reader has
// completed the foundational dyn-1..dyn-8 course (nodes, wires, data types,
// geometry, element selection) and now builds real production scripts
// against a single recurring practice project: DPC2025.
// ============================================================

export const lessons_1_8 = [

  // ============================================================
  // LESSON DYNP-01 — Setting Up Your Practice Environment
  // ============================================================
  {
    id: 'dynp-1', num: '01',
    title: 'Setting Up Your Practice Environment — DPC2025 Project & Script Folder',
    topic: 'Practice Setup', cat: 'beginner', readTime: '8 min', free: true,
    desc: 'Set up a dedicated practice Revit project and a clean, organized folder structure before writing a single node in this course.',
    intro: `This course is different from the fundamentals course you just finished — every lesson from here on builds a real, working script against a real (if fictional) Revit project, step by step, exactly the way you would on a live job. Before any of that is useful, you need a stable place to practice: a dedicated Revit project you will not feel nervous about breaking, and a folder structure for your .dyn files that will not turn into a junk drawer by Lesson 4. This lesson sets up both, introduces the practice project you will use for the rest of the course — DPC2025 — and covers a handful of hygiene habits that prevent the single most common way beginners lose work: editing or half-saving a script at the exact wrong moment.`,
    sections: [
      {
        id: 's1', heading: 'Introducing DPC2025 — Your Practice Project', level: 'h2',
        content: `Every lesson in this course refers back to the same fictional sample project: **DPC2025**, short for "Dharren Park Capstone 2025." Rather than switching example models every lesson, you will build a small, realistic multi-story building in Revit once, and then reuse it as the target for every script in this course — a room numbering script, a door marking script, a level export, a column grid, and automated view creation, all against the same building.`,
        subsections: [
          {
            heading: 'Why a Dedicated Practice Project Matters',
            items: [
              'A dedicated practice file means you can run untested, potentially destructive scripts without any risk to a real production model',
              'DPC2025 should be a genuinely modeled project, not an empty template — include a handful of Levels (e.g., Level 1 through Level 4), some Rooms, Doors, Walls, and a few Grids, so the scripts in this course have real elements to act on',
              'Keep DPC2025 small on purpose — a small, well-understood model lets you visually verify a script\'s result at a glance, which is far harder on a 40-level tower',
              'Name the central Revit file clearly, e.g. "DPC2025_Practice.rvt", and keep it in its own project folder separate from any real client work',
            ],
          },
        ],
        formula: { label: 'Practice Project Rule', text: 'DPC2025 = your one recurring sandbox for this entire course — build it once, reuse it in every lesson' },
      },
      {
        id: 's2', heading: 'Building the Minimum Viable DPC2025 Model', level: 'h2',
        content: `You do not need a fully detailed architectural model to follow this course — you need just enough real content that every script has something meaningful to select, read, and modify.`,
        code: {
          label: 'DPC2025 — Minimum Content Checklist',
          lines: [
            'Levels:     Level 1, Level 2, Level 3, Level 4 (simple, evenly spaced)',
            'Rooms:      4-6 rooms placed per level, unnumbered to start',
            'Doors:      6-10 doors spread across the levels, default Mark values',
            'Grids:      A simple rectangular grid, e.g. A-D and 1-4',
            'Walls:      Enough walls to bound the rooms and host the doors',
            '',
            'This is intentionally minimal — the goal is realistic data',
            'for scripts to operate on, not a finished design.',
          ],
        },
      },
      {
        id: 's3', heading: 'Setting Up a Local Script Folder Structure', level: 'h2',
        content: `A common beginner mistake is saving every .dyn file to the Desktop or directly into the Revit project folder with no further organization. By Lesson 5 of this course you will have at least half a dozen scripts, and by the end of a real career you may have hundreds — so start the folder habit now, while the stakes are low.`,
        subsections: [
          {
            heading: 'Recommended Folder Structure',
            items: [
              'DPC2025_Practice/  → the root folder for this whole course',
              '  Model/           → DPC2025_Practice.rvt lives here',
              '  DynamoScripts/   → all .dyn files for this course live here',
              '    01_RoomNumbering/',
              '    03_DoorMarks/',
              '    04_LevelExport/',
              '    05_SharedParameters/',
              '    06_SpreadsheetUpdate/',
              '    07_ColumnGrid/',
              '    08_ViewCreation/',
              'Subfolders are named to match the lesson number and topic,',
              'so you can find the script for "the door marking lesson" instantly, months later.',
            ],
          },
        ],
        formula: { label: 'Folder Rule', text: 'One subfolder per lesson/topic under DynamoScripts — never a flat pile of loose .dyn files' },
      },
      {
        id: 's4', heading: 'Naming Convention for Practice Scripts', level: 'h2',
        content: `The foundations course briefly introduced a naming convention (Purpose_Scope_Version.dyn). This course applies that same convention specifically to practice scripts, with a course-specific prefix so they are instantly recognizable among your other Dynamo work.`,
        code: {
          label: 'Practice Script Naming Convention',
          lines: [
            'Format:  DPC2025_LessonNum_Purpose_vX.dyn',
            '',
            'Examples used across this course:',
            '  DPC2025_02_RoomNumbering_v1.dyn',
            '  DPC2025_03_DoorMarksByLevel_v1.dyn',
            '  DPC2025_04_LevelListToExcel_v1.dyn',
            '  DPC2025_07_ColumnGrid_v1.dyn',
            '',
            'The version suffix (_v1, _v2) increments each time you',
            'meaningfully revise a script, so earlier attempts are preserved.',
          ],
        },
      },
      {
        id: 's5', heading: 'Setting Dynamo\'s Default Run Mode', level: 'h2',
        content: `Before building anything in this course, set a deliberate default for how new graphs behave when opened, rather than relying on whatever mode Dynamo happens to remember from your last session.`,
        items: [
          'Open Dynamo from DPC2025\'s Manage tab, and check the run mode toggle at the bottom-left of the window before placing a single node',
          'For every script in this course that writes to the model (which is most of them), set run mode to **Manual** immediately, before adding any Revit-modifying nodes',
          'Only switch to Automatic temporarily when testing pure geometry or math logic that does not touch Revit elements yet',
          'Get in the habit of checking the run mode indicator every time you reopen a saved practice script — it is saved with the graph, but it is easy to lose track of across a multi-day course',
        ],
        formula: { label: 'Default Rule for This Course', text: 'Manual run mode is the default for every DPC2025 practice script that writes to the model — switch to Automatic only for isolated testing' },
      },
      {
        id: 's6', heading: 'Backing Up Your .dyn Files', level: 'h2',
        content: `Because these scripts write real changes into DPC2025, and because you will be experimenting deliberately throughout this course, a simple backup habit prevents losing a working script to an accidental overwrite.`,
        subsections: [
          {
            heading: 'Backup Habits',
            items: [
              'Before making a significant change to a working script, use File → Save As to create a new version file (e.g., _v2) rather than overwriting the only copy',
              'Periodically copy the entire DynamoScripts folder to a secondary location (an external drive, cloud storage, or a version-controlled repository) — treat .dyn files as seriously as you would treat source code',
              'Never rely on Revit\'s model backup alone to protect your scripts — .dyn files are separate files on disk, not stored inside the .rvt file',
              'If a script produces an unexpected or destructive result on DPC2025, you can usually revert the model with Ctrl+Z in Revit, but this does not undo or repair the script file itself — keep the previous script version as a safety net',
            ],
          },
        ],
      },
      {
        id: 's7', heading: 'General Hygiene — Editing Scripts Safely', level: 'h2',
        content: `**Mistake:**
Editing or running a Dynamo graph while Revit is in the middle of a save, sync-to-central, or file-open operation. Dynamo shares Revit's process, and interacting with a graph while the host document is mid-operation can produce unpredictable errors or a locked, unresponsive session. Always wait for Revit to finish saving or syncing before clicking Run.

**Mistake:**
Leaving a script running against DPC2025 open in the background for days without saving, then losing the session to a crash. Save both the Revit model and the .dyn file at natural breakpoints — after each successful test run is a good rule of thumb.

**Best Practice:**
Treat every practice session the same way: open DPC2025, confirm the run mode, open or create the lesson's script in its correctly named subfolder, and save both the model and the script before closing for the day.`,
      },
    ],
    takeaways: [
      'DPC2025 (Dharren Park Capstone 2025) is the single recurring fictional practice project used throughout this entire course.',
      'Build DPC2025 with just enough real content — Levels, Rooms, Doors, Grids, Walls — for scripts to have meaningful elements to act on.',
      'Organize .dyn files in a DynamoScripts folder with one subfolder per lesson/topic, never as a flat, unlabelled pile of files.',
      'Use the naming convention DPC2025_LessonNum_Purpose_vX.dyn so any script is instantly identifiable months later.',
      'Default to Manual run mode for any practice script that writes to DPC2025, and back up .dyn files separately from the Revit model itself.',
      'Never edit or run a Dynamo graph while Revit is mid-save or mid-sync — wait for the host operation to finish first.',
    ],
    resource: { label: 'DPC2025 Practice Environment Setup Guide', type: 'PDF' },
    quiz: { label: 'Practice Environment Setup Quiz', questions: 10, time: '5 min' },
    prev: null,
    next: { id: 'dynp-2', title: 'Building a Room Numbering Script from Scratch' },
  },

  // ============================================================
  // LESSON DYNP-02 — Building a Room Numbering Script from Scratch
  // ============================================================
  {
    id: 'dynp-2', num: '02',
    title: 'Building a Room Numbering Script from Scratch',
    topic: 'Practice Setup', cat: 'beginner', readTime: '9 min', free: true,
    desc: 'Build a complete, working room numbering script step by step against your DPC2025 model, from element selection through writing the Number parameter.',
    intro: `This is the first full production script of the course, and it is deliberately one of the most useful graphs a BIM professional can own: automatically numbering every Room in a model in a consistent, spatial order. You will build it node by node against DPC2025's rooms, starting from category selection and ending with a written "Number" parameter on every room — with a full code-block-style walkthrough you can follow exactly as written.`,
    sections: [
      {
        id: 's1', heading: 'Planning the Script Before Opening Dynamo', level: 'h2',
        content: `Every good production script starts with a plan in plain English before a single node is placed. For room numbering, the plan is: get every room, find where each one is located, sort them into a sensible order, generate a number for each position in that order, then write the number back.`,
        code: {
          label: 'Room Numbering — The Plan',
          lines: [
            '1. Get all Rooms in DPC2025',
            '2. Get each Room\'s location point (X, Y)',
            '3. Sort rooms by location (X first, then Y, or vice versa)',
            '4. Generate sequential numbers with a prefix (e.g., "R-001", "R-002"...)',
            '5. Write each generated number to the Room\'s "Number" parameter',
          ],
        },
        formula: { label: 'Planning Rule', text: 'Write the five-step plan in plain English before opening Dynamo — it becomes your build order and your debugging checklist' },
      },
      {
        id: 's2', heading: 'Step 1 — Categories and All Elements of Category', level: 'h2',
        content: `The script begins exactly the way category-based selection was covered in the foundations course, applied specifically to Rooms.`,
        code: {
          label: 'Selecting All Rooms',
          lines: [
            'Categories node',
            '  → search "Rooms", select the Rooms category',
            '',
            'All Elements of Category(Categories)',
            '  → returns every placed Room in DPC2025',
            '',
            'Attach a Watch node to confirm the count matches',
            'the number of rooms you actually placed in DPC2025',
            '(e.g., 16-24 rooms across 4 levels).',
          ],
        },
      },
      {
        id: 's3', heading: 'Step 2 — Getting Room Location Points', level: 'h2',
        content: `Rooms are not simple point-based families, but each Room does have a defined location point Revit uses internally for tagging and area calculations. Dynamo exposes this through a dedicated node.`,
        subsections: [
          {
            heading: 'Retrieving Room Locations',
            items: [
              '**Room.Location** — returns the location Point of a Room element (or list of Rooms)',
              'Feed the full room list from Step 1 directly into Room.Location — Dynamo replicates automatically over the list, just as covered with geometry replication in the foundations course',
              'Attach a Watch node to Room.Location\'s output — you should see one Point per room, matching the room count from Step 1',
              'From each Point, use Point.X and Point.Y query nodes to extract the individual coordinate values needed for sorting in the next step',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Step 3 — Sorting Rooms by Position', level: 'h2',
        content: `With X and Y coordinates in hand, the rooms can be sorted into a spatially logical order using **List.SortByKey**, which reorders one list (the rooms) based on the values of another list (a sort key).`,
        code: {
          label: 'Sorting Rooms — List.SortByKey',
          lines: [
            'List.SortByKey(list, key)',
            '  → list: the list of Room elements',
            '  → key:  the list of values to sort by (e.g., Y coordinate, then X)',
            '  → returns the rooms reordered to match the sorted key order',
            '',
            'Common approach for DPC2025:',
            '  1. Sort primarily by Level (so Level 1 rooms come before Level 2)',
            '  2. Within each level, sort by Y (north-south), then X (east-west)',
            '',
            'A simpler starting version for this lesson:',
            '  List.SortByKey(rooms, yCoordinates)',
            '  → produces one clean south-to-north (or north-to-south) order',
          ],
        },
        formula: { label: 'Sorting Rule', text: 'Sort by the coordinate that matches how a human would naturally walk the building — usually by level first, then by one plan axis' },
      },
      {
        id: 's5', heading: 'Step 4 — Generating Sequential Numbers with a Code Block', level: 'h2',
        content: `Once the rooms are in the correct order, a Code Block generates the actual number strings — combining a fixed prefix with an incrementing sequence, exactly matching the sorted list's length.`,
        code: {
          label: 'Code Block — Sequential Room Numbers',
          lines: [
            'Code Block:',
            '  prefix = "R-";',
            '  count = List.Count(sortedRooms);',
            '  indices = 1..count;',
            '  numbers = prefix + List.AddItemToEnd(indices, indices).ToString();',
            '',
            'A cleaner, working version:',
            '  prefix = "R-";',
            '  count = List.Count(sortedRooms);',
            '  seq = 1..count;',
            '  padded = List.ToString(seq);   // simplified for illustration',
            '  numbers = prefix + padded;',
            '',
            'Result: a list like ["R-001", "R-002", "R-003", ...]',
            'one string per room, in the same order as sortedRooms.',
          ],
        },
        items: [
          'The key requirement is that the "numbers" list has exactly the same length and order as "sortedRooms" — a mismatch here writes the wrong number to the wrong room',
          'Padding with leading zeros (001 vs 1) keeps numbers sorting correctly as plain text later, e.g. in schedules or spreadsheets',
          'Always Watch both "sortedRooms" and "numbers" side by side before writing anything, to visually confirm the pairing is correct',
        ],
      },
      {
        id: 's6', heading: 'Step 5 — Writing the Number Parameter', level: 'h2',
        content: `With a correctly ordered, correctly paired list of rooms and number strings, the final step writes each value back into the Room\'s built-in "Number" parameter.`,
        code: {
          label: 'Writing Room Numbers',
          lines: [
            'Element.SetParameterByName(sortedRooms, "Number", numbers)',
            '  → sortedRooms: the list of Room elements, in sorted order',
            '  → "Number":    the built-in Revit Room parameter',
            '  → numbers:     the matching list of generated number strings',
            '',
            'Before running:',
            '  1. Confirm run mode is set to Manual',
            '  2. Save DPC2025 first',
            '  3. Click Run',
            '',
            'After running, open a Room Schedule in Revit and confirm',
            'the Number column now reads R-001, R-002, R-003... in the',
            'expected spatial order.',
          ],
        },
        formula: { label: 'Final Safety Check', text: 'Read, sort, generate, verify with Watch — only then write — this order never changes regardless of what the script does' },
      },
      {
        id: 's7', heading: 'Troubleshooting a First Full Script', level: 'h2',
        content: `**Mistake:**
Room.Location returning a null for a Room that has been deleted but whose tag or phase status still exists in the model ("unplaced" rooms). Filter these out before sorting, since a null location breaks List.SortByKey.

**Mistake:**
The numbers list ending up a different length than the rooms list, usually because the Code Block\'s range (1..count) was built from the wrong list\'s count. Always Watch both lists\' lengths before the final write.

**Mistake:**
Running the script twice without realizing it — since Number is now already set, a second run simply overwrites with the same (correct) values, which is harmless here, but is not true for every script. Get in the habit of checking whether a script is idempotent (safe to re-run) before running it repeatedly on DPC2025.`,
      },
    ],
    takeaways: [
      'A production script starts with a plain-English plan: select, read location, sort, generate values, write values.',
      'Categories and All Elements of Category select every Room in DPC2025, exactly as covered for other categories in the foundations course.',
      'Room.Location returns each Room\'s location Point, from which Point.X and Point.Y extract sortable coordinate values.',
      'List.SortByKey reorders the room list based on a chosen coordinate (or Level, then coordinate) to produce a spatially logical sequence.',
      'A Code Block generates a matching list of prefixed, sequential number strings (e.g., "R-001") that must exactly match the sorted room list\'s length and order.',
      'Element.SetParameterByName writes the generated numbers to the Number parameter — always in Manual run mode, after saving the model and verifying with Watch nodes.',
    ],
    resource: { label: 'Room Numbering Script Walkthrough', type: 'PDF' },
    quiz: { label: 'Room Numbering Script Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-1', title: 'Setting Up Your Practice Environment — DPC2025 Project & Script Folder' },
    next: { id: 'dynp-3', title: 'Auto-Populating Door Marks Across All Levels' },
  },

  // ============================================================
  // LESSON DYNP-03 — Auto-Populating Door Marks Across All Levels
  // ============================================================
  {
    id: 'dynp-3', num: '03',
    title: 'Auto-Populating Door Marks Across All Levels',
    topic: 'Door & Level Data', cat: 'beginner', readTime: '8 min', free: true,
    desc: 'Build a script that generates level-prefixed door Mark values across every level of DPC2025, and understand Revit\'s duplicate-mark behavior.',
    intro: `Doors are numbered ("Marked," in Revit terminology) far more often by hand than they should be, usually one door at a time in the Properties palette. This lesson builds a script that does it for the entire DPC2025 model in one run — grouping doors by level and generating clean, level-prefixed marks like "L1-001" and "L2-001" — and explains a Revit behavior every BIM professional needs to understand: duplicate Mark values produce a warning, not a hard stop, which means the discipline has to come from your process, not from Revit itself.`,
    sections: [
      {
        id: 's1', heading: 'Why Group Doors by Level First', level: 'h2',
        content: `Unlike the single continuous sequence used for room numbering in the previous lesson, door marks are conventionally reset per level — Level 1's doors start at 001, Level 2's doors also start at 001, distinguished only by their level prefix. This means the script needs an extra step: grouping the full door list by level before any numbering happens.`,
        formula: { label: 'Grouping Principle', text: 'Group first, number second — numbering an ungrouped list produces one long sequence instead of a clean per-level sequence' },
      },
      {
        id: 's2', heading: 'Collecting Doors and Their Level Data', level: 'h2',
        content: `The script starts the same way as the room numbering script — category selection — but immediately needs each door's associated Level, not just its location.`,
        code: {
          label: 'Collecting Doors and Levels',
          lines: [
            'Categories → "Doors"',
            '  ↓',
            'All Elements of Category → doorList  (every door in DPC2025)',
            '',
            'Element.GetParameterValueByName(doorList, "Level")',
            '  → returns each door\'s associated Level',
            '  → note: some families expose this via a dedicated Level',
            '    property node instead of a parameter by name — check',
            '    which is available for your door family in DPC2025',
          ],
        },
        items: [
          'If Element.GetParameterValueByName(doorList, "Level") returns null for some doors, that family may store level association differently — try the built-in Level property query node instead',
          'Attach a Watch node immediately to confirm you are seeing readable level names ("Level 1", "Level 2"...), not element IDs or nulls',
        ],
      },
      {
        id: 's3', heading: 'Grouping Doors by Level', level: 'h2',
        content: `With a parallel list of doors and their level names, the next step splits the single door list into separate sub-lists, one per level.`,
        code: {
          label: 'Grouping by Level',
          lines: [
            'List.GroupByKey(doorList, levelNames)',
            '  → groups doors into sub-lists, one sub-list per unique level name',
            '  → also returns the list of unique keys (level names) in matching order',
            '',
            'Result shape:',
            '  keys:   ["Level 1", "Level 2", "Level 3", "Level 4"]',
            '  groups: [ [doors on L1], [doors on L2], [doors on L3], [doors on L4] ]',
            '',
            'Each sub-list can now be numbered independently, starting fresh at 1.',
          ],
        },
        formula: { label: 'Key Node', text: 'List.GroupByKey is the workhorse for any "reset the sequence per category" requirement — used again later in this course' },
      },
      {
        id: 's4', heading: 'Generating Level-Prefixed Mark Values', level: 'h2',
        content: `For each level's sub-list of doors, a Code Block generates a matching list of Mark strings using a short prefix derived from the level name, combined with a sequential number.`,
        code: {
          label: 'Code Block — Level-Prefixed Marks',
          lines: [
            'Example for Level 1\'s door sub-list (5 doors):',
            '',
            'Code Block:',
            '  prefix = "L1-";',
            '  count = List.Count(level1Doors);',
            '  seq = 1..count;',
            '  marks = prefix + seq.ToString();',
            '',
            'Result: ["L1-001", "L1-002", "L1-003", "L1-004", "L1-005"]',
            '',
            'Because this graph runs once per level (Dynamo replicates',
            'automatically across the grouped lists), the same Code Block',
            'logic produces "L2-001", "L2-002"... for Level 2\'s doors, and so on.',
          ],
        },
        items: [
          'Deriving the prefix from the actual level name (e.g., stripping "Level " down to "L1") keeps the script reusable if DPC2025 later gains a Level 5',
          'Padding numbers with leading zeros (001 vs 1) keeps Mark values sorting correctly in schedules later',
        ],
      },
      {
        id: 's5', heading: 'Writing Mark Values Back to Doors', level: 'h2',
        content: `With per-level Mark lists generated and correctly paired to each level's door sub-list, the final step writes the values using the same node pattern from the previous lesson.`,
        code: {
          label: 'Writing Door Marks',
          lines: [
            'Element.SetParameterByName(levelDoors, "Mark", levelMarks)',
            '  → run once per level group (Dynamo replicates over the',
            '    grouped lists automatically)',
            '',
            'Before running:',
            '  1. Manual run mode confirmed',
            '  2. DPC2025 saved',
            '  3. Watch both levelDoors and levelMarks per group to confirm pairing',
            '  4. Click Run',
          ],
        },
      },
      {
        id: 's6', heading: 'Revit\'s Duplicate-Mark Warning — Understand It, Don\'t Rely On It', level: 'h2',
        content: `Revit does flag duplicate Mark values within the same category — but critically, this is a **warning**, not a blocking validation error. Revit will let you save, sync, and continue working with duplicate marks sitting unresolved in the model.`,
        items: [
          'A duplicate Mark produces a yellow warning dialog or an entry in the Review Warnings tool, but does not prevent the model from saving or the value from being written',
          'This means a script bug that accidentally assigns the same Mark to two doors will not be caught automatically — it will pass silently unless someone checks Review Warnings or audits the door schedule',
          'Build your own QA discipline around this: after any Mark-writing script, open a Door Schedule sorted by Mark and visually scan for duplicates, or build a small follow-up Dynamo check using List.UniqueItems compared against the original count',
          'Uniqueness discipline is a process responsibility, not something Revit enforces for you — this is one of the most common real-world script bugs BIM teams encounter',
        ],
        formula: { label: 'QA Rule', text: 'Duplicate Mark values are a warning, not a block — always verify uniqueness yourself after any script that writes Mark values' },
      },
      {
        id: 's7', heading: 'Extending the Pattern', level: 'h2',
        content: `The group-then-number pattern built in this lesson — group by a key, number each group independently, write back with a matching prefix — is one of the most reusable patterns in production Dynamo work, and will reappear in later lessons of this course applied to different data.`,
        items: [
          'The same pattern works for numbering equipment by room, numbering structural columns by grid bay, or numbering sheets by discipline',
          'The only parts that change between use cases are: the category selected, the grouping key, and the prefix logic in the Code Block',
          'Save this script as DPC2025_03_DoorMarksByLevel_v1.dyn in your DynamoScripts/03_DoorMarks folder from Lesson 1, so you can reference the pattern again later',
        ],
      },
    ],
    takeaways: [
      'Door marks are conventionally reset per level, so doors must be grouped by Level before numbering, not numbered as one continuous list.',
      'Element.GetParameterValueByName(doorList, "Level") (or a dedicated Level property node) retrieves each door\'s associated level.',
      'List.GroupByKey splits the door list into per-level sub-lists, each of which can be numbered independently starting at 1.',
      'A Code Block combines a level-derived prefix (e.g., "L1-") with a sequential number to generate marks like "L1-001" and "L2-001".',
      'Element.SetParameterByName writes the generated marks back to the Mark parameter, run once per level group.',
      'Revit only warns on duplicate Mark values — it does not block them — so verifying uniqueness after any Mark-writing script is a manual QA responsibility, not an automatic safeguard.',
    ],
    resource: { label: 'Door Mark Automation Guide', type: 'PDF' },
    quiz: { label: 'Door Mark Automation Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-2', title: 'Building a Room Numbering Script from Scratch' },
    next: { id: 'dynp-4', title: 'Generating a Level List & Exporting to Excel' },
  },

  // ============================================================
  // LESSON DYNP-04 — Generating a Level List & Exporting to Excel
  // ============================================================
  {
    id: 'dynp-4', num: '04',
    title: 'Generating a Level List & Exporting to Excel',
    topic: 'Door & Level Data', cat: 'beginner', readTime: '8 min', free: false,
    desc: 'Collect every Level in DPC2025, sort it by elevation, and export a clean, verified list-of-lists to an Excel workbook.',
    intro: `Getting data out of Revit and into a spreadsheet is one of the most requested Dynamo skills, and Levels are the simplest possible dataset to start with — every project has a small, well-understood set of them. This lesson collects every Level in DPC2025, reads its name and elevation, sorts the list into building order, and writes the result into a real Excel file using Excel.WriteToFile, including a proper header row.`,
    sections: [
      {
        id: 's1', heading: 'What This Script Produces', level: 'h2',
        content: `The end goal is a clean two-column spreadsheet: Level Name and Elevation, sorted from lowest to highest, with a header row identifying each column — the kind of simple export a project manager or consultant might request without any Revit access at all.`,
        code: {
          label: 'Target Spreadsheet Layout',
          lines: [
            'Row 1 (header): Level Name   | Elevation',
            'Row 2:          Level 1      | 0',
            'Row 3:          Level 2      | 4000',
            'Row 4:          Level 3      | 8000',
            'Row 5:          Level 4      | 12000',
          ],
        },
      },
      {
        id: 's2', heading: 'Collecting Levels', level: 'h2',
        content: `Levels are a category like any other in Dynamo, selected with the same Categories and All Elements of Category pattern used in every lesson so far.`,
        code: {
          label: 'Selecting Levels',
          lines: [
            'Categories → "Levels"',
            '  ↓',
            'All Elements of Category → levelList',
            '',
            'Attach a Watch node and confirm the count matches',
            'DPC2025\'s actual level count (4, per the Lesson 1 setup).',
          ],
        },
      },
      {
        id: 's3', heading: 'Reading Level Name and Elevation', level: 'h2',
        content: `Two values are needed from each Level: its Name and its Elevation. Both are available as direct properties on the Level element in Dynamo.`,
        subsections: [
          {
            heading: 'Reading Level Data',
            items: [
              '**Level.Name** — returns each level\'s name as a string (e.g., "Level 1")',
              '**Level.Elevation** — returns each level\'s elevation as a number, in the project\'s internal units',
              'Both nodes replicate automatically across levelList, producing one name and one elevation per level, in the same order as levelList',
              'Watch both outputs side by side to confirm they line up correctly before sorting',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Sorting Levels by Elevation', level: 'h2',
        content: `Levels are not guaranteed to come back from All Elements of Category already sorted bottom-to-top, so an explicit sort step is necessary before exporting — the same List.SortByKey node used for room numbering, applied here to elevation values.`,
        code: {
          label: 'Sorting the Level List',
          lines: [
            'List.SortByKey(levelList, elevationList)',
            '  → reorders levelList so it runs from lowest to highest elevation',
            '  → also reorders any parallel list (like nameList) the same way,',
            '    if you sort it using the same key',
            '',
            'Sort both in parallel:',
            '  sortedLevels    = List.SortByKey(levelList, elevationList)',
            '  sortedNames     = List.SortByKey(nameList, elevationList)',
            '  sortedElevations = List.Sort(elevationList)',
          ],
        },
        formula: { label: 'Consistency Rule', text: 'Sort every parallel list using the same original key, never re-derive a second sort independently — otherwise lists can drift out of alignment' },
      },
      {
        id: 's5', heading: 'Building a List-of-Lists with a Header Row', level: 'h2',
        content: `Excel.WriteToFile expects data shaped as a list-of-lists, where each inner list represents one row. To include a header row, the header must be added as the first inner list, ahead of the actual data rows.`,
        code: {
          label: 'Building the Export Structure',
          lines: [
            'Code Block / List nodes:',
            '  header = ["Level Name", "Elevation"];',
            '',
            'List.Transpose or List.Create per row, producing:',
            '  dataRows = [ [sortedNames[0], sortedElevations[0]],',
            '               [sortedNames[1], sortedElevations[1]],',
            '               ... ]',
            '',
            'List.Insert(dataRows, header, 0)',
            '  → inserts the header list at index 0, ahead of all data rows',
            '',
            'Result: one list-of-lists, header first, one row per level after it.',
          ],
        },
      },
      {
        id: 's6', heading: 'Writing to Excel with Excel.WriteToFile', level: 'h2',
        content: `With the final list-of-lists built and verified with a Watch node, the export itself is a single node call.`,
        code: {
          label: 'Excel.WriteToFile',
          lines: [
            'Excel.WriteToFile(filePath, sheetName, startRow, startCol, data)',
            '  → filePath:  full path, e.g. "C:\\DPC2025_Practice\\Exports\\Levels.xlsx"',
            '  → sheetName: "Levels"',
            '  → startRow:  0 (start at the first row)',
            '  → startCol:  0 (start at the first column)',
            '  → data:      the header+rows list-of-lists from the previous step',
            '',
            'Run in Manual mode. If the target file does not yet exist,',
            'Excel.WriteToFile creates it; if it exists, it overwrites',
            'the specified sheet/range.',
          ],
        },
        formula: { label: 'Path Rule', text: 'Use a full, explicit file path for exports — a relative path\'s destination depends on which folder Dynamo happens to be running from' },
      },
      {
        id: 's7', heading: 'Verifying Row and Column Alignment', level: 'h2',
        content: `Opening the resulting file is not optional — it is the final verification step confirming the export actually did what the Watch nodes suggested it would.`,
        items: [
          'Open Levels.xlsx directly (close it first in Excel if it was already open, since a locked file will cause Excel.WriteToFile to fail or silently not save)',
          'Confirm the header row reads "Level Name" and "Elevation" exactly, in the correct columns',
          'Confirm the level rows appear in bottom-to-top elevation order, matching DPC2025\'s actual building',
          'Confirm elevation values are plain numbers, not text — a giveaway that a stray .ToString() somewhere converted the wrong column',
          'If a file is open in Excel while Dynamo tries to write to it, Excel.WriteToFile will typically error — always close the target workbook before running the export',
        ],
      },
    ],
    takeaways: [
      'Levels are collected using the same Categories + All Elements of Category pattern used throughout this course.',
      'Level.Name and Level.Elevation read each level\'s core data directly as properties, replicating automatically across the level list.',
      'List.SortByKey (keyed on elevation) puts levels into bottom-to-top building order before export, since category queries do not guarantee this order.',
      'Excel.WriteToFile expects a list-of-lists where each inner list is one row; a header row must be inserted as the first item.',
      'Always use a full, explicit file path with Excel.WriteToFile, and run in Manual mode.',
      'Always open and visually verify the resulting spreadsheet — row order, column headers, and correct data types — rather than trusting the Watch node output alone; close the target file in Excel first or the write will fail.',
    ],
    resource: { label: 'Level Data Excel Export Guide', type: 'PDF' },
    quiz: { label: 'Level List & Excel Export Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-3', title: 'Auto-Populating Door Marks Across All Levels' },
    next: { id: 'dynp-5', title: 'Reading & Writing Shared Parameters with Dynamo' },
  },

  // ============================================================
  // LESSON DYNP-05 — Reading & Writing Shared Parameters with Dynamo
  // ============================================================
  {
    id: 'dynp-5', num: '05',
    title: 'Reading & Writing Shared Parameters with Dynamo',
    topic: 'Parameters & Data', cat: 'beginner', readTime: '8 min', free: false,
    desc: 'Understand shared parameters versus project parameters, and the safe pattern for reading and writing them in Dynamo without silent failures.',
    intro: `So far, every script in this course has written to built-in Revit parameters — Number, Mark, Level. Production BIM work depends just as heavily on custom parameters your firm or project has defined, and the most common of these is the shared parameter. This lesson explains what a shared parameter actually is, how it differs from a project parameter, why Dynamo treats both identically at the node level, and a gotcha that catches nearly every new Dynamo user at least once: parameter names are case-sensitive, and a mismatch does not throw an error — it silently returns null.`,
    sections: [
      {
        id: 's1', heading: 'What is a Shared Parameter?', level: 'h2',
        content: `A **shared parameter** is a parameter definition stored in an external, plain-text **shared parameter file** (a .txt file), independent of any single Revit project. That definition can then be added to multiple projects and bound to one or more categories, so the same parameter (with the same GUID underneath) can be shared consistently across a firm's entire project portfolio.`,
        items: [
          'Shared parameters are created and managed through Revit\'s Shared Parameters dialog (Manage tab → Shared Parameters), pointing at a .txt definition file',
          'Once defined, a shared parameter is added to a project as either a **Project Parameter** (visible to the model, not exportable to tags/schedules without extra setup) or bound directly for use in tags and schedules',
          'The same shared parameter file can be reused across many projects, keeping parameter names, data types, and GUIDs consistent firm-wide — critical for any firm running standardized Dynamo scripts across multiple projects',
          'In DPC2025 for this lesson, imagine a shared parameter called "Asset ID" bound to Doors and Rooms, used later in Lesson 6 to match spreadsheet rows to model elements',
        ],
        formula: { label: 'Core Definition', text: 'Shared parameter = defined once in an external .txt file, reusable and consistent across any project it is bound into' },
      },
      {
        id: 's2', heading: 'Shared Parameter vs Project Parameter', level: 'h2',
        content: `A **project parameter** is defined directly inside a single Revit project file, with no external definition file and no portability to other projects by default.`,
        subsections: [
          {
            heading: 'Key Differences',
            items: [
              '**Shared parameter** — defined in an external .txt file; has a stable GUID; can be shared across many projects; can be used in tags, schedules, and exported to ODBC/IFC with its GUID intact',
              '**Project parameter** — defined only inside one project; simpler to set up for a one-off need; not automatically available in other projects; cannot be used directly in tags unless it is later converted to a shared parameter',
              'Firms standardizing Dynamo automation across projects (as covered again in later, more advanced material) strongly prefer shared parameters specifically because of their portability and consistent GUID',
              'From Dynamo\'s perspective, though, this distinction barely matters — which the next section covers directly',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Dynamo Treats Both Identically', level: 'h2',
        content: `This is the most important practical fact in this lesson: **Element.GetParameterValueByName** and **Element.SetParameterByName** work exactly the same way regardless of whether the target is a shared parameter, a project parameter, or a built-in Revit parameter like Mark or Number.`,
        code: {
          label: 'Same Node, Any Parameter Type',
          lines: [
            'Element.GetParameterValueByName(element, "Asset ID")',
            '  → works identically whether "Asset ID" is:',
            '     - a built-in parameter (it is not, in this example)',
            '     - a project parameter',
            '     - a shared parameter bound to the element\'s category',
            '',
            'Element.SetParameterByName(element, "Asset ID", value)',
            '  → same rule applies for writing',
            '',
            'Dynamo does not need to know or care which kind of',
            'parameter it is — only that the name matches exactly',
            'and the parameter exists on that element\'s category.',
          ],
        },
        formula: { label: 'Practical Rule', text: 'One pair of nodes — GetParameterValueByName and SetParameterByName — handles built-in, project, and shared parameters identically' },
      },
      {
        id: 's4', heading: 'Checking Whether a Parameter Exists Before Writing', level: 'h2',
        content: `Not every element category has every parameter bound to it. In DPC2025, "Asset ID" might be bound to Doors and Rooms but not to Walls — attempting to set it on a Wall will fail, since the parameter does not exist on that element at all.`,
        code: {
          label: 'Safe Existence Check Pattern',
          lines: [
            'Element.HasParameter(element, "Asset ID")',
            '  → returns a Boolean: true if the parameter exists on that element, false otherwise',
            '',
            'Recommended pattern before a bulk write:',
            '  1. hasParam = Element.HasParameter(elementList, "Asset ID")',
            '  2. validElements = List.FilterByBoolMask(elementList, hasParam)[In]',
            '  3. Element.SetParameterByName(validElements, "Asset ID", values)',
            '',
            'This prevents errors on unbound categories from stopping',
            'or corrupting a bulk update across a mixed list of elements.',
          ],
        },
        formula: { label: 'Defensive Scripting Rule', text: 'Check Element.HasParameter before writing to any parameter that is not guaranteed to exist on every element in your list' },
      },
      {
        id: 's5', heading: 'The Case-Sensitivity Gotcha', level: 'h2',
        content: `The single most common real-world Dynamo mistake with parameters is a name that looks right but is not typed exactly right. Parameter name matching in Element.GetParameterValueByName and Element.SetParameterByName is **case-sensitive**, and a mismatch does not raise a visible error — it silently returns null.`,
        items: [
          'Typing "asset id" or "Asset id" instead of the exact bound name "Asset ID" will not error — it will simply return null for every element',
          'A trailing space copied accidentally from a spreadsheet header (e.g., "Asset ID ") also silently breaks the match',
          'Always copy the exact parameter name directly from the Revit Properties palette or the Shared Parameter file rather than retyping it from memory',
          'If Element.GetParameterValueByName unexpectedly returns null for every item in a list, the very first thing to check is the exact spelling and casing of the parameter name string — not the elements themselves',
        ],
        formula: { label: 'Debugging Rule', text: 'GetParameterValueByName returning null across an entire list almost always means a parameter-name typo, not a data problem — check spelling first' },
      },
      {
        id: 's6', heading: 'A Practical Read/Write Exercise on DPC2025', level: 'h2',
        content: `To make this concrete, this exercise reads and writes a hypothetical "Asset ID" shared parameter across DPC2025's doors, applying every safeguard covered in this lesson.`,
        subsections: [
          {
            heading: 'Exercise Steps',
            items: [
              'Categories → "Doors" → All Elements of Category → doorList',
              'Element.HasParameter(doorList, "Asset ID") → confirm true for every door (since it is bound to Doors in DPC2025)',
              'Element.GetParameterValueByName(doorList, "Asset ID") → Watch the result; expect blank strings or nulls if never set before',
              'Code Block: generate placeholder values, e.g. "AST-" + sequential number, matching doorList\'s length exactly',
              'Element.SetParameterByName(doorList, "Asset ID", generatedValues) — Manual run mode, DPC2025 saved first',
              'Reopen a Door Schedule with an Asset ID column added, and confirm every door now shows a value',
            ],
          },
        ],
      },
      {
        id: 's7', heading: 'Why This Matters for the Rest of the Course', level: 'h2',
        content: `The next lesson depends directly on the concepts covered here — matching spreadsheet rows to model elements by a key column, most commonly a shared parameter exactly like the "Asset ID" example used throughout this lesson. Understanding that Dynamo treats shared, project, and built-in parameters identically — and knowing to check existence and spelling before writing — is the foundation the spreadsheet-driven update in Lesson 6 is built on.`,
      },
    ],
    takeaways: [
      'A shared parameter is defined once in an external .txt file and can be bound consistently across multiple Revit projects, unlike a project parameter defined only inside one file.',
      'Element.GetParameterValueByName and Element.SetParameterByName work identically regardless of whether a parameter is built-in, project-level, or shared.',
      'Element.HasParameter checks whether a parameter exists on a given element\'s category before attempting to write to it, preventing errors on unbound categories.',
      'Parameter name matching is case-sensitive; a mismatched name does not error — it silently returns null for every affected element.',
      'A parameter read returning null across an entire list is the classic symptom of a spelling/casing mismatch, and should be the first thing checked when debugging.',
      'This lesson\'s "Asset ID" shared parameter pattern is the direct foundation for matching spreadsheet rows to model elements in the next lesson.',
    ],
    resource: { label: 'Shared vs Project Parameters Reference', type: 'PDF' },
    quiz: { label: 'Shared Parameters in Dynamo Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-4', title: 'Generating a Level List & Exporting to Excel' },
    next: { id: 'dynp-6', title: 'Bulk-Updating Element Parameters from a Spreadsheet' },
  },

  // ============================================================
  // LESSON DYNP-06 — Bulk-Updating Element Parameters from a Spreadsheet
  // ============================================================
  {
    id: 'dynp-6', num: '06',
    title: 'Bulk-Updating Element Parameters from a Spreadsheet',
    topic: 'Parameters & Data', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'Read an external spreadsheet into Dynamo and use it to bulk-update DPC2025 elements, matching rows to elements safely by a key column.',
    intro: `The previous lesson set up "Asset ID" as a shared parameter specifically so this lesson could use it: reading a spreadsheet someone else prepared (a consultant, a facilities team, a client) and pushing its values into DPC2025 automatically, matched row-by-row using that key. This is one of the highest-value real-world Dynamo patterns, and also one of the easiest to get subtly wrong — this lesson builds it carefully, with explicit handling for header rows and mismatched or blank rows.`,
    sections: [
      {
        id: 's1', heading: 'The Scenario', level: 'h2',
        content: `Imagine a facilities consultant has sent back a spreadsheet of DPC2025's doors with an added "Fire Rating" column, keyed by the "Asset ID" values you wrote in the previous lesson. The goal: read that spreadsheet and write the Fire Rating values into the matching Revit doors automatically, rather than manually cross-referencing 20+ rows by eye.`,
        code: {
          label: 'Example Spreadsheet: DoorFireRatings.xlsx',
          lines: [
            'Row 1 (header):  Asset ID  | Fire Rating',
            'Row 2:           AST-001   | 90 min',
            'Row 3:           AST-002   | 60 min',
            'Row 4:           AST-003   | (blank — not yet assessed)',
            'Row 5:           AST-004   | 90 min',
          ],
        },
      },
      {
        id: 's2', heading: 'Reading the Spreadsheet with Excel.ReadFromFile', level: 'h2',
        content: `The mirror-image node to last lesson's Excel.WriteToFile brings external spreadsheet data into a graph as a list-of-lists.`,
        code: {
          label: 'Excel.ReadFromFile',
          lines: [
            'Excel.ReadFromFile(filePath, sheetName)',
            '  → filePath:  "C:\\DPC2025_Practice\\Imports\\DoorFireRatings.xlsx"',
            '  → sheetName: "Sheet1" (or whatever the actual tab is named)',
            '  → returns a list-of-lists: one inner list per row, in file order',
            '',
            'Attach a Watch node immediately — confirm the header row',
            'is included as the first item, exactly as it appears in Excel.',
          ],
        },
      },
      {
        id: 's3', heading: 'Separating the Header Row from Data Rows', level: 'h2',
        content: `Before any matching logic runs, the header row must be split off — it is not a data row, and including it accidentally will corrupt the first real match.`,
        code: {
          label: 'Handling the Header Row',
          lines: [
            'List.FirstItem(allRows)  → header row, e.g. ["Asset ID", "Fire Rating"]',
            'List.RestOfItems(allRows) → dataRows, every row after the header',
            '',
            'List.Transpose(dataRows)',
            '  → converts rows into columns:',
            '     column 0 = all Asset ID values',
            '     column 1 = all Fire Rating values',
            '',
            'List.GetItemAtIndex(transposed, 0) → spreadsheetAssetIds',
            'List.GetItemAtIndex(transposed, 1) → spreadsheetFireRatings',
          ],
        },
        formula: { label: 'Header Rule', text: 'Always separate the header row explicitly — never assume row 0 of a spreadsheet import is a data row' },
      },
      {
        id: 's4', heading: 'Matching Spreadsheet Rows to Model Elements', level: 'h2',
        content: `With the key column (Asset ID) isolated from the spreadsheet, and the same parameter already readable from DPC2025's doors (from the previous lesson), the matching itself compares the two lists.`,
        code: {
          label: 'Matching by Key Column',
          lines: [
            'doorList = All Elements of Category("Doors")',
            'doorAssetIds = Element.GetParameterValueByName(doorList, "Asset ID")',
            '',
            'For each spreadsheet row\'s Asset ID, find its position in doorAssetIds:',
            '  List.IndexOf(doorAssetIds, spreadsheetAssetIds)',
            '  → returns the matching index in doorList for each spreadsheet row',
            '  → returns -1 if no match is found (see next section)',
            '',
            'List.GetItemAtIndex(doorList, matchIndices)',
            '  → reorders/selects doors to align exactly with the spreadsheet row order',
          ],
        },
        formula: { label: 'Matching Principle', text: 'Never assume spreadsheet row order matches model element order — always match explicitly by a shared key value, never by position alone' },
      },
      {
        id: 's5', heading: 'Handling Blank and Mismatched Rows Gracefully', level: 'h2',
        content: `Real spreadsheets are never perfectly clean. Row 4 in this lesson's example has a blank Fire Rating, and a real file might also contain an Asset ID with no matching door at all (typo, deleted element, or a row for a door in a different project phase).`,
        subsections: [
          {
            heading: 'Defensive Filtering Pattern',
            items: [
              'Filter out unmatched rows first: booleanMask = List.IndexOf(...) does not equal -1, then List.FilterByBoolMask to drop any row with no matching door',
              'Filter out blank values second: use String.IsNullOrEmpty on the Fire Rating column to build a second boolean mask, dropping rows with no value to write',
              'Combine both masks (a logical AND) before the final write, so only rows that are both matched AND have real data reach Element.SetParameterByName',
              'Always Watch the filtered lists\' counts against the original spreadsheet row count — if 20 rows come in and only 17 make it through filtering, confirm those 3 dropped rows are legitimately blank/unmatched, not a script bug',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Writing the Filtered, Matched Values', level: 'h2',
        content: `Only after matching and filtering are complete does the script reach the same write pattern used throughout this course.`,
        code: {
          label: 'Final Write',
          lines: [
            'Element.SetParameterByName(matchedValidDoors, "Fire Rating", matchedValidRatings)',
            '',
            'Pre-flight checklist:',
            '  1. Manual run mode',
            '  2. DPC2025 saved',
            '  3. matchedValidDoors.length == matchedValidRatings.length (Watch both)',
            '  4. Click Run',
            '',
            'After running, open a Door Schedule with a Fire Rating column',
            'and spot-check several AST-### rows against the source spreadsheet.',
          ],
        },
      },
      {
        id: 's7', heading: 'Common Mistakes in Spreadsheet-Driven Updates', level: 'h2',
        content: `**Mistake:**
Forgetting to strip the header row, causing the string "Asset ID" itself to be treated as a lookup value and producing one guaranteed unmatched row at the very start of every run.

**Mistake:**
Matching by row position (row 2 in the spreadsheet always maps to doorList item 2) instead of matching explicitly by the Asset ID key — this breaks the moment the spreadsheet and the model list are in a different order, which is the normal case, not the exception.

**Mistake:**
Writing blank spreadsheet values directly into the model, silently clearing out any existing Fire Rating data on doors that had not yet been reassessed. Filtering out blank rows before writing (as covered above) prevents this kind of accidental data loss.`,
      },
    ],
    takeaways: [
      'Excel.ReadFromFile brings a spreadsheet into Dynamo as a list-of-lists, including the header row as the first item.',
      'The header row must be explicitly separated from data rows before any matching logic runs, using List.FirstItem and List.RestOfItems.',
      'Elements should always be matched to spreadsheet rows using an explicit shared key column (like Asset ID) via List.IndexOf, never by assuming matching row order.',
      'List.FilterByBoolMask should be used twice in this pattern: once to drop unmatched rows (no corresponding element), and once to drop blank data values.',
      'Writing blank spreadsheet values directly into the model without filtering can silently overwrite good existing data with nothing.',
      'Always compare filtered list counts against the original spreadsheet row count to confirm dropped rows are legitimate, not a script bug.',
    ],
    resource: { label: 'Spreadsheet-Driven Parameter Update Guide', type: 'PDF' },
    quiz: { label: 'Bulk Spreadsheet Update Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-5', title: 'Reading & Writing Shared Parameters with Dynamo' },
    next: { id: 'dynp-7', title: 'Creating a Grid Layout Script for Structural Columns' },
  },

  // ============================================================
  // LESSON DYNP-07 — Creating a Grid Layout Script for Structural Columns
  // ============================================================
  {
    id: 'dynp-7', num: '07',
    title: 'Creating a Grid Layout Script for Structural Columns',
    topic: 'Grids & Views', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'Compute grid intersection points in DPC2025 and place structural columns at each one automatically with FamilyInstance.ByPoint.',
    intro: `This lesson shifts from parameter automation into geometry-driven element placement — using DPC2025's structural Grids (A-D and 1-4, from the Lesson 1 setup) to compute every column intersection point, then placing a structural column family at each one in a single script run. It is the first lesson in this course where Dynamo creates brand-new Revit elements rather than editing existing ones, so extra care around review before running is emphasized throughout.`,
    sections: [
      {
        id: 's1', heading: 'Two Approaches to Finding Intersection Points', level: 'h2',
        content: `There are two valid ways to get the X/Y locations where structural columns belong: read DPC2025's actual placed Grids and compute their intersections, or generate a rectangular array of points mathematically using nested Code Block ranges. This lesson covers both, since real projects use either depending on how regular the grid is.`,
        formula: { label: 'Choosing an Approach', text: 'Read real Grids when they exist and are reliable; generate a mathematical array when you are laying out new, perfectly regular structure from scratch' },
      },
      {
        id: 's2', heading: 'Approach 1 — Reading Existing Grids', level: 'h2',
        content: `DPC2025 already has Grids A-D (running one direction) and 1-4 (running the other), placed as part of the Lesson 1 setup. Dynamo can read these directly and compute where each pair crosses.`,
        code: {
          label: 'Reading Grids and Their Curves',
          lines: [
            'Categories → "Grids"',
            '  ↓',
            'All Elements of Category → gridList',
            '',
            'Grid.Curve(gridList) → gridCurves',
            '  → returns each Grid\'s underlying Line/Curve geometry',
            '',
            'Curve.Intersect(curveA, curveB)',
            '  → returns the Point(s) where two curves cross',
            '  → run pairwise: each "A"-direction grid against each "1"-direction grid',
          ],
        },
        items: [
          'Separate the grids into two groups first — by name pattern (letters vs numbers) or by checking each grid\'s direction — before intersecting, since intersecting a grid with itself or with a parallel grid produces no result',
          'A nested list structure (List.Cartesian or manual list levels) is typically needed to compute every A-direction-grid × every 1-direction-grid pair',
        ],
      },
      {
        id: 's3', heading: 'Approach 2 — Generating a Rectangular Array Mathematically', level: 'h2',
        content: `When a grid is perfectly regular — as DPC2025's is, by design, from Lesson 1 — it is often simpler to generate intersection points directly from spacing values, without reading any Grid elements at all.`,
        code: {
          label: 'Nested Code Block Ranges for X and Y',
          lines: [
            'Code Block:',
            '  xSpacing = 0..9000..3000;   // 0, 3000, 6000, 9000 (grids A-D)',
            '  ySpacing = 0..9000..3000;   // 0, 3000, 6000, 9000 (grids 1-4)',
            '',
            'Point.ByCoordinates(xSpacing<1>, ySpacing<2>, 0)',
            '  → the <1> and <2> lacing markers force Dynamo to produce',
            '    every combination of xSpacing and ySpacing (a full grid',
            '    of points), rather than pairing them one-to-one',
            '',
            'Result: 16 points (4 x-values × 4 y-values) —',
            'one point at every column intersection.',
          ],
        },
        formula: { label: 'Lacing Reminder', text: 'Cross-product lacing (<1>, <2> markers) is what turns two flat lists into every combination — without it you get only 4 paired points, not 16' },
      },
      {
        id: 's4', heading: 'Verifying Intersection Points Before Placing Anything', level: 'h2',
        content: `Because this lesson creates new elements, verifying geometry in the background preview before connecting anything to a family placement node matters more here than in any earlier lesson.`,
        items: [
          'Use a Watch node and the background 3D preview together — confirm the point count matches the expected grid intersections (16 for a 4x4 grid)',
          'Visually check the preview against DPC2025\'s actual plan view — points should land exactly on the real Grid intersections if you used Approach 1, or line up visually with them if you used Approach 2',
          'If the count or spacing looks wrong, fix it at the geometry stage — it is far easier to correct a list of points than to delete and redo 16 placed columns',
        ],
      },
      {
        id: 's5', heading: 'Placing Columns with FamilyInstance.ByPoint', level: 'h2',
        content: `With a verified list of intersection points, structural columns are placed using **FamilyInstance.ByPoint**, which creates a new family instance in the model at each given point.`,
        code: {
          label: 'FamilyInstance.ByPoint',
          lines: [
            'FamilyInstance.ByPoint(familyType, point)',
            '  → familyType: a Structural Column family type already loaded into DPC2025',
            '     (e.g., "Concrete-Rectangular-Column: 450 x 450mm")',
            '  → point: one of the 16 verified intersection points',
            '',
            'Since familyType is a single value and point is a list of 16,',
            'Dynamo replicates FamilyInstance.ByPoint automatically —',
            'one call per point, same family type each time.',
            '',
            'Run in Manual mode, after saving DPC2025.',
          ],
        },
      },
      {
        id: 's6', heading: 'Setting Base and Top Level / Offsets', level: 'h2',
        content: `A freshly placed column defaults to whatever level and constraints the family and active view suggest, which is rarely exactly right. The base and top level (and any offsets) should be set explicitly right after placement.`,
        subsections: [
          {
            heading: 'Setting Column Constraints',
            items: [
              'Element.SetParameterByName(columns, "Base Level", level1) — set explicitly rather than relying on a default',
              'Element.SetParameterByName(columns, "Top Level", level2) — e.g., columns spanning from Level 1 to Level 2',
              'Element.SetParameterByName(columns, "Base Offset", 0) and "Top Offset", 0 — explicit zero offsets unless a specific design condition requires otherwise',
              'Setting these explicitly, rather than trusting a default, avoids the common surprise of columns extending far beyond the intended story height',
            ],
          },
        ],
        formula: { label: 'Placement Rule', text: 'Never trust a family\'s default level/offset behavior for a bulk placement script — set Base Level, Top Level, and both offsets explicitly every time' },
      },
      {
        id: 's7', heading: 'Reviewing the Result in DPC2025', level: 'h2',
        content: `**Best Practice:**
After running, open a 3D view and a plan view of DPC2025 side by side. Confirm all 16 columns appear at the correct intersections, are the correct type, and span the correct levels.

**Mistake:**
Running the placement script twice without checking first, resulting in 32 overlapping columns instead of 16. Structural placement scripts are typically not idempotent — always check whether columns already exist at those points (e.g., using a simple proximity check or by reviewing the model) before re-running.

**Mistake:**
Forgetting that FamilyInstance.ByPoint requires the family type to already be loaded into DPC2025 — an unloaded family type produces a null or error rather than an automatic import.`,
      },
    ],
    takeaways: [
      'Column intersection points can come from reading DPC2025\'s real Grids and computing Curve.Intersect, or from generating a mathematical rectangular array with nested Code Block ranges.',
      'Cross-product lacing (the <1>, <2> markers) is required to generate every X/Y combination from two flat spacing lists, rather than pairing them one-to-one.',
      'Verify intersection point count and placement visually in the background preview before connecting anything to a family placement node.',
      'FamilyInstance.ByPoint places a loaded family type at each given point, automatically replicating across a list of points.',
      'Base Level, Top Level, Base Offset, and Top Offset should always be set explicitly after placement rather than relying on family defaults.',
      'Column placement scripts are typically not idempotent — re-running without checking can create duplicate, overlapping columns.',
    ],
    resource: { label: 'Structural Column Grid Placement Guide', type: 'PDF' },
    quiz: { label: 'Column Grid Layout Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-6', title: 'Bulk-Updating Element Parameters from a Spreadsheet' },
    next: { id: 'dynp-8', title: 'Automating View Creation for All Levels' },
  },

  // ============================================================
  // LESSON DYNP-08 — Automating View Creation for All Levels
  // ============================================================
  {
    id: 'dynp-8', num: '08',
    title: 'Automating View Creation for All Levels',
    topic: 'Grids & Views', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'Generate one correctly named floor plan view per Level in DPC2025 automatically, and optionally assign a View Template — no more manual view creation one at a time.',
    intro: `Closing out this course's core script set is one of the most immediately satisfying automations in daily BIM work: creating an entire set of floor plan views — one per level — in a single Dynamo run, each named to match its Level, and optionally pre-assigned a View Template. If DPC2025 had 20 levels instead of 4, this is the difference between a five-minute script and an hour of repetitive, error-prone manual clicking through Revit's New View dialog twenty separate times.`,
    sections: [
      {
        id: 's1', heading: 'The Manual Process This Script Replaces', level: 'h2',
        content: `Creating a floor plan view manually in Revit means: View tab → Plan Views → Floor Plan, selecting a level, clicking OK, then renaming the resulting view, then repeating that entire sequence once per level. For DPC2025's 4 levels this is mildly tedious; for a real 20-story tower, it is a genuine time cost and a common source of naming inconsistencies between views created by different team members.`,
        formula: { label: 'Automation Value', text: 'One script run replaces N repetitions of the same five-step manual process — the larger N is, the greater the time saved' },
      },
      {
        id: 's2', heading: 'Collecting Levels — A Familiar First Step', level: 'h2',
        content: `This script starts exactly like Lesson 4's level export — Levels are, once again, the category driving the entire graph.`,
        code: {
          label: 'Collecting Levels for View Creation',
          lines: [
            'Categories → "Levels"',
            '  ↓',
            'All Elements of Category → levelList',
            '',
            'Level.Name(levelList) → levelNames',
            '',
            'List.SortByKey(levelList, Level.Elevation(levelList))',
            '  → ensures views are generated in bottom-to-top order,',
            '    which also keeps the resulting view list easy to review',
          ],
        },
      },
      {
        id: 's3', heading: 'Creating One Floor Plan View per Level', level: 'h2',
        content: `Dynamo's view-creation nodes take a Level as input and produce a new FloorPlanView element, replicating automatically across the sorted level list exactly like every other node in this course.`,
        code: {
          label: 'FloorPlanView.ByLevel (or equivalent view-creation node)',
          lines: [
            'FloorPlanView.ByLevel(sortedLevels, viewFamilyType)',
            '  → sortedLevels:    the bottom-to-top ordered level list',
            '  → viewFamilyType:  the Floor Plan view family type to use',
            '     (query available types first via Categories/ViewFamilyType nodes)',
            '',
            'Because sortedLevels is a list of 4, this single node call',
            'produces 4 new floor plan views — one per level — in one run.',
            '',
            'Run in Manual mode; save DPC2025 first, since this creates',
            'brand-new views directly in the Project Browser.',
          ],
        },
      },
      {
        id: 's4', heading: 'Naming Each View from Its Level', level: 'h2',
        content: `A freshly created view usually gets a generic default name ("Floor Plan 1", "Floor Plan 2"...). The whole point of this automation is views that are immediately identifiable, so naming them from the source Level is the next essential step.`,
        code: {
          label: 'Renaming Views to Match Levels',
          lines: [
            'Code Block:',
            '  prefix = "L";',
            '  viewNames = levelNames;   // e.g., reuse level names directly, or',
            '  viewNames = "Plan - " + levelNames;   // "Plan - Level 1"',
            '',
            'View.SetName(newViews, viewNames)',
            '  → renames each newly created view to match its source level',
            '',
            'Note: view names must be unique within the project — if a view',
            'with that exact name already exists, the rename will error;',
            'check for existing views with the same target name first if',
            're-running this script on a model that already has some views.',
          ],
        },
        formula: { label: 'Naming Rule', text: 'Derive view names directly from Level.Name so every plan view is self-explanatory and consistent, with zero manual typing' },
      },
      {
        id: 's5', heading: 'Assigning a View Template (Optional)', level: 'h2',
        content: `Once a view exists and is correctly named, it can optionally be assigned a **View Template** — a saved set of view properties (visibility settings, detail level, view range, graphic overrides) that keeps every generated plan view visually consistent with project standards.`,
        subsections: [
          {
            heading: 'Assigning a Template',
            items: [
              'View Templates in DPC2025 must already exist (created manually in Revit ahead of time, e.g. "Architectural Floor Plan")',
              'A dedicated node (or, on older Dynamo/package setups, direct parameter access to the view\'s Template ID) assigns the template to each newly created view',
              'Assigning a template is optional per project standard — some firms prefer views created blank so a human reviews and applies templates deliberately',
              'If used, assign the same template to every generated view in one replicated call, exactly like every other bulk operation in this course',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Verifying the Result in the Project Browser', level: 'h2',
        content: `After running, the Project Browser is the fastest place to confirm the script did exactly what was intended.`,
        items: [
          'Expand Views (all) → Floor Plans in the Project Browser and confirm 4 new views appear, named to match DPC2025\'s levels',
          'Open at least one new view and confirm it actually shows the correct level\'s content, not an empty or misaligned view',
          'If a View Template was assigned, confirm the view\'s graphics (visibility, detail level) match the template as expected',
          'Save DPC2025 once the result is confirmed correct',
        ],
      },
      {
        id: 's7', heading: 'Course Wrap-Up — What You Have Built', level: 'h2',
        content: `Across this course, working entirely against DPC2025, you have built a room numbering script, a level-aware door marking script, a Level-to-Excel export, a shared-parameter read/write pattern, a spreadsheet-driven bulk update, a structural column grid placement script, and now full view-set automation. Together these form a realistic starter toolkit that mirrors the actual daily automation work of a BIM Coordinator or BIM Manager — not toy examples, but scripts built the same way you would build them on a live project. The next lesson in this track moves from views into furniture placement, driven by a Room Data Schedule — reusing the same categories, parameter, and matching patterns established across this entire course.`,
      },
    ],
    takeaways: [
      'Automated view creation replaces the repetitive manual sequence of creating and renaming one floor plan view per level by hand.',
      'Levels are collected and sorted by elevation exactly as in the Level export lesson, ensuring views are generated in bottom-to-top order.',
      'A view-creation node (e.g., FloorPlanView.ByLevel) takes a list of Levels and a view family type, replicating automatically to create one view per level in a single run.',
      'Newly created views should be explicitly renamed from their source Level\'s name, since default view names are generic and uninformative.',
      'View Templates can optionally be assigned to newly created views to keep visibility settings and graphics consistent with project standards.',
      'Always verify results in the Project Browser after running — confirming view count, names, content, and any assigned template before considering the script complete.',
    ],
    resource: { label: 'Automated View Creation Guide', type: 'PDF' },
    quiz: { label: 'View Creation Automation Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-7', title: 'Creating a Grid Layout Script for Structural Columns' },
    next: { id: 'dynp-9', title: 'Placing Furniture from a Room Data Schedule' },
  },

];
