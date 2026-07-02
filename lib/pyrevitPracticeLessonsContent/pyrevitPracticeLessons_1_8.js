// ============================================================
// PYREVIT — PRACTICE LESSONS pyp-1 through pyp-8 (BEGINNER)
// Section: Practice Setup / Room & Door Scripts / Parameters & Sheets / Families & QA
// File: lib/pyrevitPracticeLessonsContent/pyrevitPracticeLessons_1_8.js
// Index: lib/pyrevitPracticeLessonsData.js
// Free lessons: pyp-1, pyp-2, pyp-3
// This is the SECOND, hands-on pyRevit course. It assumes the reader has
// completed the foundational py-1..py-8 course (pyRevit basics, IronPython,
// the Revit API object model) and now builds real production pushbutton
// tools against a single recurring practice project: DPC2025.
// ============================================================

export const lessons_1_8 = [

  // ============================================================
  // LESSON PYP-01 — Setting Up Your Practice Toolkit
  // ============================================================
  {
    id: 'pyp-1', num: '01',
    title: 'Setting Up Your Practice Toolkit — DPC2025 Project, VS Code & Script Folder Structure',
    topic: 'Practice Setup', cat: 'beginner', readTime: '9 min', free: true,
    desc: 'Set up a dedicated practice Revit project, a comfortable Python editor, and a personal pyRevit extension before writing a single script in this course.',
    intro: `This course is different from the fundamentals course you just finished — every lesson from here on builds a real, working pushbutton script, step by step, exactly the way you would on a live job. Before any of that is useful, you need three things in place: a stable Revit project you will not feel nervous about breaking, a comfortable place to actually type Python, and a personal pyRevit extension folder ready to receive the buttons you will build across this course. This lesson sets up all three, introduces the practice project you will use for the rest of the course — DPC2025 — and establishes the core development loop you will repeat in every single lesson: edit in VS Code, save, click Reload in Revit.`,
    sections: [
      {
        id: 's1', heading: 'Introducing DPC2025 — Your Practice Project', level: 'h2',
        content: `Every lesson in this course refers back to the same fictional sample project: **DPC2025**, short for "Dharren Park Capstone 2025" — the same practice project used in the companion Dynamo Practice course. Rather than switching example models every lesson, you will reuse a small, realistic multi-story building as the target for every script in this course: a room tagging tool, a door numbering tool, a view renamer, a bulk parameter writer, a sheet creator, a family loader, and a purge/audit tool, all against the same building.`,
        subsections: [
          {
            heading: 'Why a Dedicated Practice Project Matters',
            items: [
              'A dedicated practice file means you can run untested, potentially destructive scripts without any risk to a real production model',
              'DPC2025 should be a genuinely modeled project, not an empty template — include a handful of Levels (e.g., Level 1 through Level 4), some Rooms, Doors, and a few Grids, so the scripts in this course have real elements to act on',
              'Keep DPC2025 small on purpose — a small, well-understood model lets you visually verify a script\'s result at a glance, which is far harder on a 40-level tower',
              'Name the central Revit file clearly, e.g. "DPC2025_Practice.rvt", and keep it in its own project folder separate from any real client work',
              'If you already built DPC2025 for the Dynamo Practice course, reuse the exact same file here — the whole point is one recurring, familiar sandbox across your entire BIM automation learning path',
            ],
          },
        ],
        formula: { label: 'Practice Project Rule', text: 'DPC2025 = your one recurring sandbox for this entire course — build it once, reuse it in every lesson' },
      },
      {
        id: 's2', heading: 'Installing VS Code and a Python Extension', level: 'h2',
        content: `pyRevit does not require you to install a separate Python interpreter to run scripts — it ships with its own bundled IronPython engine, and every button you build in this course runs through that engine, not through whatever Python you may have installed elsewhere. What you do need is a comfortable, modern text editor for actually writing the .py files, and Visual Studio Code with the Microsoft Python extension is the standard choice in the pyRevit community.`,
        items: [
          'Download and install VS Code from the standard installer for your operating system — no special configuration is required for pyRevit work specifically',
          'Install the "Python" extension (published by Microsoft) from the Extensions panel — this gives you syntax highlighting, auto-indentation, and bracket matching for .py files, which plain Notepad cannot',
          'You are not required to install a standalone CPython interpreter just for this course — pyRevit\'s bundled IronPython is what actually executes your scripts inside Revit, and VS Code is only the editor, not the runtime',
          'Open your future extension folder (covered next) directly as a VS Code workspace/folder, so every script in this course is a click away in the file explorer sidebar',
        ],
        formula: { label: 'Editor vs Runtime', text: 'VS Code is where you type and read Python comfortably — pyRevit\'s bundled IronPython, not VS Code, is what actually executes the script inside Revit' },
      },
      {
        id: 's3', heading: 'Creating Your Personal .extension Folder', level: 'h2',
        content: `pyRevit discovers pushbuttons by scanning a folder structure on disk that follows a strict naming convention: an .extension folder containing .tab folders, containing .panel folders, containing individual button folders. This lesson creates the skeleton you will keep adding buttons to for the rest of the course.`,
        code: {
          label: 'DPC2025Tools.extension — Folder Skeleton',
          lines: [
            'DPC2025Tools.extension/',
            '  DPC2025.tab/',
            '    Rooms.panel/',
            '      RoomTagger.pushbutton/',
            '        script.py',
            '        icon.png',
            '    Doors.panel/',
            '      DoorNumberer.pushbutton/',
            '        script.py',
            '        icon.png',
            '    Sheets.panel/',
            '    QA.panel/',
            '',
            'Each *.pushbutton folder needs at minimum a script.py file;',
            'icon.png is optional but recommended so buttons are',
            'recognizable on the ribbon rather than showing a blank icon.',
          ],
        },
        items: [
          'The .extension, .tab, .panel, and .pushbutton suffixes are not decorative — pyRevit\'s extension loader specifically looks for these exact suffixes to build the ribbon UI, so a typo in the suffix means the button silently never appears',
          'Create this folder somewhere permanent and personal, e.g. Documents/pyRevitExtensions/DPC2025Tools.extension, not inside a temp folder or the Revit installation directory',
          'You will add one new .pushbutton folder per lesson in this course — Rooms.panel and Doors.panel are created now so Lessons 2 and 3 have somewhere to go immediately',
        ],
      },
      {
        id: 's4', heading: 'Registering the Extension with pyRevit', level: 'h2',
        content: `Once the folder skeleton exists on disk, pyRevit needs to be told to look there. This is done once, through pyRevit's own settings, and from then on your DPC2025 tab appears automatically every time Revit starts.`,
        code: {
          label: 'Registering a Custom Extension Folder',
          lines: [
            'In Revit:',
            '  pyRevit tab → Settings → Custom Extension Directories',
            '  → Add the parent folder containing DPC2025Tools.extension',
            '    (add the folder ABOVE the .extension folder, not the',
            '    .extension folder itself)',
            '',
            'Click Save Settings, then pyRevit tab → Reload',
            '',
            'Your new "DPC2025" tab should now appear in the Revit ribbon,',
            'even though its panels are still empty of working buttons.',
          ],
        },
      },
      {
        id: 's5', heading: 'The Core Development Loop — Edit, Save, Reload', level: 'h2',
        content: `Every single lesson in this course repeats the same three-step loop, and getting comfortable with it now saves confusion later: you never need to restart Revit to see a script change take effect.`,
        code: {
          label: 'The pyRevit Development Loop',
          lines: [
            '1. Edit script.py in VS Code',
            '2. Save the file (Ctrl+S)',
            '3. In Revit, click pyRevit tab → Reload',
            '   (or use the keyboard shortcut if you have one configured)',
            '',
            'Reload re-scans every registered extension folder and',
            'rebuilds the ribbon UI, picking up new buttons, renamed',
            'panels, and any edited script.py content immediately.',
          ],
        },
        formula: { label: 'Core Workflow Rule', text: 'Edit in VS Code, save, click Reload in Revit — this three-step loop is the backbone of every lesson in this course, no exceptions' },
      },
      {
        id: 's6', heading: 'A Placeholder Script to Prove the Loop Works', level: 'h2',
        content: `Before building anything functional in Lesson 2, it is worth proving the whole pipeline works end to end with the simplest possible script.`,
        code: {
          label: 'RoomTagger.pushbutton/script.py — Placeholder',
          lines: [
            'from pyrevit import script',
            '',
            'output = script.get_output()',
            'output.print_md("# Hello from DPC2025Tools")',
            'output.print_md("This button is wired up correctly.")',
          ],
        },
        items: [
          'Save this as script.py inside RoomTagger.pushbutton, Reload, then click the button — a pyRevit output window should open showing the two lines of markdown text',
          'If the button does not appear at all after Reload, double-check every folder suffix (.extension, .tab, .panel, .pushbutton) for typos — this is the most common first-time setup mistake',
          'If the button appears but clicking it does nothing or errors, check that script.py is spelled exactly right and sits directly inside the .pushbutton folder, not nested one level deeper',
        ],
      },
      {
        id: 's7', heading: 'General Hygiene — Setting Up Safely', level: 'h2',
        content: `**Mistake:**
Editing script.py while Revit is mid-save or mid-sync-to-central. pyRevit shares Revit's process, and reloading or running a script while the host document is busy can produce unpredictable errors. Always wait for Revit to finish its current operation before clicking Reload or a pushbutton.

**Mistake:**
Registering the .extension folder itself as the custom extension directory, instead of its parent folder. pyRevit expects the directory you register to contain one or more *.extension folders, not to be one itself — this is a common first-time misconfiguration that leaves the tab missing entirely.

**Best Practice:**
Treat every practice session the same way: open DPC2025, open DPC2025Tools.extension as your VS Code workspace, make your edit, save, Reload, and test — the same loop, every lesson, until it is second nature.`,
      },
    ],
    takeaways: [
      'DPC2025 (Dharren Park Capstone 2025) is the single recurring fictional practice project used throughout this entire course, shared with the companion Dynamo Practice course.',
      'VS Code with the Python extension is the recommended editor for comfortable script editing, even though pyRevit runs scripts through its own bundled IronPython, not a separate interpreter.',
      'A personal .extension folder (e.g. DPC2025Tools.extension) with .tab/.panel/.pushbutton subfolders is the skeleton pyRevit scans to build your custom ribbon UI.',
      'Custom extension directories are registered once via pyRevit Settings, pointing at the PARENT folder of the .extension folder, not the .extension folder itself.',
      'The core development loop — edit in VS Code, save, click Reload in Revit — is used in every lesson in this course and never requires restarting Revit.',
      'A missing button after Reload almost always traces back to a typo in one of the required folder suffixes: .extension, .tab, .panel, or .pushbutton.',
    ],
    resource: { label: 'DPC2025 pyRevit Toolkit Setup Guide', type: 'PDF' },
    quiz: { label: 'Practice Toolkit Setup Quiz', questions: 10, time: '5 min' },
    prev: null,
    next: { id: 'pyp-2', title: 'Build a Room Tagger Script in 30 Minutes' },
  },

  // ============================================================
  // LESSON PYP-02 — Build a Room Tagger Script in 30 Minutes
  // ============================================================
  {
    id: 'pyp-2', num: '02',
    title: 'Build a Room Tagger Script in 30 Minutes',
    topic: 'Practice Setup', cat: 'beginner', readTime: '9 min', free: true,
    desc: 'Build a complete, working pushbutton that finds every untagged Room in DPC2025 and places a Room Tag at its location point, wrapped in a proper Transaction.',
    intro: `This is the first full production script of the course, and it is deliberately one of the most useful tools a BIM professional can own: a single click that finds every Room in the active view without an existing tag, and places one automatically at the room's location point. You will build it against DPC2025's rooms inside the RoomTagger.pushbutton folder created in Lesson 1, using FilteredElementCollector, a cross-reference check against existing tags, and a proper revit.Transaction — the same three ingredients that appear in nearly every pyRevit script you will ever write.`,
    sections: [
      {
        id: 's1', heading: 'Planning the Script Before Opening VS Code', level: 'h2',
        content: `Every good production script starts with a plan in plain English before a single line of code is written. For room tagging, the plan is: get every room in the active view, get every existing room tag in the active view, figure out which rooms are not already covered by a tag, then place a new tag at each of those rooms' location points.`,
        code: {
          label: 'Room Tagger — The Plan',
          lines: [
            '1. Get the active view and the active document',
            '2. Collect all Rooms in the active view',
            '3. Collect all existing Room Tags in the active view',
            '4. Determine which Room ids are already referenced by a tag',
            '5. For each untagged room, place a new tag at its location point',
            '6. Wrap step 5 in a single Transaction and report a summary',
          ],
        },
        formula: { label: 'Planning Rule', text: 'Write the plain-English plan before opening VS Code — it becomes your build order and your debugging checklist' },
      },
      {
        id: 's2', heading: 'Step 1 — Boilerplate and the Active Document/View', level: 'h2',
        content: `Every pyRevit script starts with the same handful of imports and the two objects almost every script needs immediately: the active document and the active view.`,
        code: {
          label: 'RoomTagger.pushbutton/script.py — Boilerplate',
          lines: [
            'from pyrevit import revit, DB, script',
            '',
            'doc = revit.doc',
            'active_view = doc.ActiveView',
            'output = script.get_output()',
          ],
        },
        items: [
          'revit.doc is pyRevit\'s shortcut for the active Revit Document, equivalent to __revit__.ActiveUIDocument.Document if you were writing raw RevitAPI code',
          'doc.ActiveView gives you the view the user currently has open — collecting "in the active view" instead of the whole project keeps this tool fast and lets a user control scope simply by switching views before clicking the button',
        ],
      },
      {
        id: 's3', heading: 'Step 2 — Collecting Rooms with FilteredElementCollector', level: 'h2',
        content: `Rooms are collected the same way any category is collected in the Revit API: a DB.FilteredElementCollector scoped to the active view and filtered to the Rooms category.`,
        code: {
          label: 'Collecting Rooms in the Active View',
          lines: [
            'rooms = DB.FilteredElementCollector(doc, active_view.Id) \\',
            '            .OfCategory(DB.BuiltInCategory.OST_Rooms) \\',
            '            .WhereElementIsNotElementType() \\',
            '            .ToElements()',
            '',
            'output.print_md("Found **{}** rooms in the active view." \\',
            '                 .format(len(rooms)))',
          ],
        },
        items: [
          'WhereElementIsNotElementType() excludes room-related type objects and leaves only placed Room instances',
          'Scoping the collector with active_view.Id (rather than the whole-document constructor) restricts results to elements visible in the current view, matching the plan from Step 1',
          'A room with no Area (an unplaced/unbounded room) still appears in this collection — filter these out later if your DPC2025 model has any before tagging',
        ],
      },
      {
        id: 's4', heading: 'Step 3 — Collecting Existing Room Tags', level: 'h2',
        content: `To know which rooms are already tagged, the script also needs every existing DB.SpatialElementTag (the class Room Tags belong to) in the same view, and specifically which Room each one points at.`,
        code: {
          label: 'Collecting Existing Room Tags',
          lines: [
            'existing_tags = DB.FilteredElementCollector(doc, active_view.Id) \\',
            '                    .OfCategory(DB.BuiltInCategory.OST_RoomTags) \\',
            '                    .WhereElementIsNotElementType() \\',
            '                    .ToElements()',
            '',
            'tagged_room_ids = set()',
            'for tag in existing_tags:',
            '    if tag.Room is not None:',
            '        tagged_room_ids.add(tag.Room.Id.IntegerValue)',
          ],
        },
        formula: { label: 'Cross-Reference Concept', text: 'Building a set of already-tagged Room ids first, then checking membership per room, is the plain-Python equivalent of the untagged-element check from the Dynamo course' },
      },
      {
        id: 's5', heading: 'Step 4 — Finding Untagged Rooms', level: 'h2',
        content: `With tagged_room_ids built, a plain Python loop filters the room list down to only those not present in that set — no special node or query needed, just an if-check.`,
        code: {
          label: 'Filtering to Untagged Rooms',
          lines: [
            'untagged_rooms = []',
            'for room in rooms:',
            '    if room.Id.IntegerValue not in tagged_room_ids:',
            '        untagged_rooms.append(room)',
            '',
            'output.print_md("**{}** rooms already tagged, **{}** need a new tag." \\',
            '                 .format(len(rooms) - len(untagged_rooms), len(untagged_rooms)))',
          ],
        },
        items: [
          'Checking membership against a Python set() is fast even for hundreds of rooms, since set lookups are effectively constant-time rather than scanning a list repeatedly',
          'Print the counts before placing anything — this is your Watch-node equivalent, a cheap sanity check before the Transaction runs',
        ],
      },
      {
        id: 's6', heading: 'Step 5 — Placing Tags Inside a Transaction', level: 'h2',
        content: `Any change to the Revit model — including placing a new tag — must happen inside a Transaction. pyRevit's revit.Transaction context manager handles Start/Commit/RollBack for you, so a script that errors partway through does not leave the model in a half-changed state.`,
        code: {
          label: 'Placing Room Tags — doc.Create.NewRoomTag',
          lines: [
            'from Autodesk.Revit.DB import UV, LinkElementId',
            '',
            'with revit.Transaction("Tag Untagged Rooms - DPC2025"):',
            '    placed_count = 0',
            '    for room in untagged_rooms:',
            '        location = room.Location',
            '        if location is None:',
            '            continue',
            '        point = location.Point',
            '        uv = DB.UV(point.X, point.Y)',
            '        room_link_id = DB.LinkElementId(room.Id)',
            '        doc.Create.NewRoomTag(room_link_id, uv, active_view.Id)',
            '        placed_count += 1',
            '',
            'output.print_md("Placed **{}** new room tags.".format(placed_count))',
          ],
        },
        formula: { label: 'Transaction Rule', text: 'Every model-modifying call — here, doc.Create.NewRoomTag — must sit inside a revit.Transaction block, never outside one' },
      },
      {
        id: 's7', heading: 'Troubleshooting a First Full Script', level: 'h2',
        content: `**Mistake:**
Calling doc.Create.NewRoomTag outside of a Transaction. Revit raises an immediate exception rather than silently ignoring the call — if you see an error mentioning an outside-of-transaction context, check your indentation and make sure the placement loop is actually inside the "with revit.Transaction(...)" block.

**Mistake:**
Skipping the room.Location None-check. Rooms that are unplaced or have zero bounding area return a None location, and calling ".Point" on None raises an AttributeError that stops the whole loop partway through — always guard with a None check first, exactly as shown above.

**Mistake:**
Forgetting that a Room can exist in the model but not be visible/placeable in the active view's phase or crop region — such rooms may still appear in the collector results but fail silently to tag correctly. Always visually spot-check the result in DPC2025 after running.`,
      },
    ],
    takeaways: [
      'A production pyRevit script starts with a plain-English plan: collect, cross-reference, filter, place, verify.',
      'revit.doc and doc.ActiveView give you the two objects almost every script needs immediately.',
      'DB.FilteredElementCollector(doc, active_view.Id).OfCategory(...) scopes collection to the current view, exactly matching this script\'s "active view" plan.',
      'Building a Python set() of already-tagged Room ids, then checking membership per room, is the plain-Python equivalent of the untagged-element cross-reference check from the Dynamo course.',
      'doc.Create.NewRoomTag(roomLinkId, uv, viewId) places a new tag, and must be called inside a revit.Transaction block.',
      'Always guard against a None Room.Location before calling .Point, since unplaced or unbounded rooms will otherwise crash the loop partway through.',
    ],
    resource: { label: 'Room Tagger Script Walkthrough', type: 'PDF' },
    quiz: { label: 'Room Tagger Script Quiz', questions: 10, time: '5 min' },
    prev: { id: 'pyp-1', title: 'Setting Up Your Practice Toolkit — DPC2025 Project, VS Code & Script Folder Structure' },
    next: { id: 'pyp-3', title: 'Auto-Number Doors Across All Levels' },
  },

  // ============================================================
  // LESSON PYP-03 — Auto-Number Doors Across All Levels
  // ============================================================
  {
    id: 'pyp-3', num: '03',
    title: 'Auto-Number Doors Across All Levels',
    topic: 'Room & Door Scripts', cat: 'beginner', readTime: '9 min', free: true,
    desc: 'Build a script that groups DPC2025\'s doors by Level using a plain Python dictionary and writes level-prefixed Mark values like "L1-001" inside a Transaction.',
    intro: `Doors are numbered ("Marked," in Revit terminology) far more often by hand than they should be, usually one door at a time in the Properties palette. This lesson builds a script that does it for the entire DPC2025 model in one run — grouping doors by level and generating clean, level-prefixed marks like "L1-001" and "L2-001". Where the Dynamo course reached for List.GroupByKey, Python gives you a more direct tool for the same job: a plain dictionary keyed by level name, filled with a simple loop, no node replication required.`,
    sections: [
      {
        id: 's1', heading: 'Why Group Doors by Level First', level: 'h2',
        content: `Door marks are conventionally reset per level — Level 1's doors start at 001, Level 2's doors also start at 001, distinguished only by their level prefix. This means the script needs an extra step before any numbering happens: grouping the full door list by level.`,
        formula: { label: 'Grouping Principle', text: 'Group first, number second — numbering an ungrouped list produces one long sequence instead of a clean per-level sequence' },
      },
      {
        id: 's2', heading: 'Collecting Doors', level: 'h2',
        content: `The script starts with a document-wide collector rather than an active-view one, since door numbering should typically run across the whole project, not just whatever view happens to be open.`,
        code: {
          label: 'Collecting All Doors in DPC2025',
          lines: [
            'from pyrevit import revit, DB, script',
            '',
            'doc = revit.doc',
            'output = script.get_output()',
            '',
            'doors = DB.FilteredElementCollector(doc) \\',
            '            .OfCategory(DB.BuiltInCategory.OST_Doors) \\',
            '            .WhereElementIsNotElementType() \\',
            '            .ToElements()',
            '',
            'output.print_md("Found **{}** doors across DPC2025.".format(len(doors)))',
          ],
        },
      },
      {
        id: 's3', heading: 'Grouping Doors by Level with a Dictionary', level: 'h2',
        content: `A door\'s associated level is exposed through its LevelId property. Python\'s dictionary is the natural structure for grouping: use the level name as the key, and build up a list of doors under that key as you loop through the collector results once.`,
        code: {
          label: 'Grouping Doors into a Dictionary by Level Name',
          lines: [
            'doors_by_level = {}',
            '',
            'for door in doors:',
            '    level = doc.GetElement(door.LevelId)',
            '    level_name = level.Name if level is not None else "Unassigned"',
            '    if level_name not in doors_by_level:',
            '        doors_by_level[level_name] = []',
            '    doors_by_level[level_name].append(door)',
            '',
            'for level_name, level_doors in doors_by_level.items():',
            '    output.print_md("- {}: {} doors".format(level_name, len(level_doors)))',
          ],
        },
        items: [
          'doc.GetElement(door.LevelId) resolves the ElementId stored on the door back into the actual Level element so its Name is readable',
          'A dictionary key that does not exist yet is created on first use with the doors_by_level.setdefault(level_name, []).append(door) idiom as a shorter alternative to the if-check above, once you are comfortable with it',
          'Unlike List.GroupByKey in Dynamo, there is no separate "keys" and "groups" output to keep aligned — a Python dict already pairs each key directly with its group, which removes an entire class of alignment bugs',
        ],
        formula: { label: 'Structural Contrast', text: 'A dictionary keyed by level name replaces List.GroupByKey\'s two parallel outputs (keys, groups) with one self-describing structure' },
      },
      {
        id: 's4', heading: 'Generating Level-Prefixed Mark Values', level: 'h2',
        content: `For each level\'s list of doors, a plain Python loop with an incrementing counter generates the Mark string — no Code Block or replication needed, since this is exactly what a for-loop is for.`,
        code: {
          label: 'Generating Marks per Level',
          lines: [
            'def level_prefix(level_name):',
            '    # "Level 1" -> "L1", "Level 2" -> "L2", etc.',
            '    digits = "".join(ch for ch in level_name if ch.isdigit())',
            '    return "L{}".format(digits) if digits else level_name.replace(" ", "")',
            '',
            'marks_by_door = {}',
            'for level_name, level_doors in doors_by_level.items():',
            '    prefix = level_prefix(level_name)',
            '    for i, door in enumerate(level_doors, start=1):',
            '        marks_by_door[door.Id.IntegerValue] = "{}-{:03d}".format(prefix, i)',
          ],
        },
        items: [
          '"{:03d}".format(i) pads the sequence number with leading zeros (001, 002, ...), keeping marks sorting correctly as text later in schedules',
          'Deriving the prefix from the actual level name keeps the script reusable if DPC2025 later gains a Level 5, rather than hard-coding four prefixes by hand',
          'Storing results keyed by door.Id.IntegerValue in marks_by_door keeps the generated value paired with the exact door it belongs to, with no risk of a list-order mismatch',
        ],
      },
      {
        id: 's5', heading: 'Writing Mark Values with LookupParameter', level: 'h2',
        content: `With a mark generated for every door, the final step writes each value back using LookupParameter("Mark").Set(value), looping in plain Python across all doors inside one Transaction.`,
        code: {
          label: 'Writing Door Marks Inside a Transaction',
          lines: [
            'with revit.Transaction("Number Doors by Level - DPC2025"):',
            '    for door in doors:',
            '        mark_value = marks_by_door.get(door.Id.IntegerValue)',
            '        if mark_value is None:',
            '            continue',
            '        param = door.LookupParameter("Mark")',
            '        if param and not param.IsReadOnly:',
            '            param.Set(mark_value)',
            '',
            'output.print_md("Door marks updated successfully.")',
          ],
        },
        items: [
          'LookupParameter("Mark") returns the parameter object itself, not the value — calling .Set(value) on that object is what actually writes the new mark',
          'Checking param.IsReadOnly before calling .Set() avoids an exception on any door instance where Mark happens to be locked or controlled by a type parameter in an unusual family setup',
          'Looping in plain Python across the whole doors list, all inside one Transaction, means Revit only opens one undo-able operation for the entire run — not one per door',
        ],
      },
      {
        id: 's6', heading: 'Revit\'s Duplicate-Mark Warning — Understand It, Don\'t Rely On It', level: 'h2',
        content: `Revit does flag duplicate Mark values within the same category — but critically, this is a **warning**, not a blocking validation error. Revit will let you save and continue working with duplicate marks sitting unresolved in the model.`,
        items: [
          'A duplicate Mark produces a yellow warning dialog or an entry in the Review Warnings tool, but does not prevent the Transaction from committing or the value from being written',
          'A script bug that accidentally assigns the same Mark to two doors (e.g., a level dictionary key collision from inconsistent level naming) will not be caught automatically by Revit itself',
          'Build your own QA discipline around this: after running this script, open a Door Schedule sorted by Mark and visually scan for duplicates',
          'Uniqueness discipline is a process responsibility, not something Revit enforces for you — this is one of the most common real-world script bugs BIM teams encounter, in pyRevit exactly as much as in Dynamo',
        ],
        formula: { label: 'QA Rule', text: 'Duplicate Mark values are a warning, not a block — always verify uniqueness yourself after any script that writes Mark values' },
      },
      {
        id: 's7', heading: 'Extending the Pattern', level: 'h2',
        content: `The group-then-number pattern built in this lesson — build a dictionary keyed by a grouping value, number each group independently in a loop, write back with a matching prefix — is one of the most reusable patterns in production pyRevit work, and will reappear in later lessons of this course applied to different data.`,
        items: [
          'The same pattern works for numbering equipment by room, numbering structural columns by grid bay, or numbering sheets by discipline',
          'The only parts that change between use cases are: the category collected, the dictionary key used for grouping, and the prefix logic in level_prefix (or its equivalent)',
          'Save this script as DoorNumberer.pushbutton/script.py in your DPC2025Tools.extension from Lesson 1, so you can reference the pattern again later',
        ],
      },
    ],
    takeaways: [
      'Door marks are conventionally reset per level, so doors must be grouped by Level before numbering, not numbered as one continuous list.',
      'doc.GetElement(door.LevelId).Name retrieves each door\'s associated level name for use as a grouping key.',
      'A plain Python dictionary keyed by level name groups doors directly, replacing Dynamo\'s List.GroupByKey and its separate keys/groups outputs with one self-describing structure.',
      'A plain Python for-loop with an incrementing counter generates level-prefixed marks like "L1-001", using string formatting to pad with leading zeros.',
      'LookupParameter("Mark").Set(value) writes the generated mark, inside a single revit.Transaction wrapping the entire loop rather than one Transaction per door.',
      'Revit only warns on duplicate Mark values — it does not block them — so verifying uniqueness after any Mark-writing script is a manual QA responsibility, not an automatic safeguard.',
    ],
    resource: { label: 'Door Numbering Script Guide', type: 'PDF' },
    quiz: { label: 'Door Auto-Numbering Quiz', questions: 10, time: '5 min' },
    prev: { id: 'pyp-2', title: 'Build a Room Tagger Script in 30 Minutes' },
    next: { id: 'pyp-4', title: 'Build a View Renamer to Match ISO 19650' },
  },

  // ============================================================
  // LESSON PYP-04 — Build a View Renamer to Match ISO 19650
  // ============================================================
  {
    id: 'pyp-4', num: '04',
    title: 'Build a View Renamer to Match ISO 19650',
    topic: 'Room & Door Scripts', cat: 'beginner', readTime: '10 min', free: false,
    desc: 'Build a script that renames DPC2025\'s views and sheets to an ISO 19650-style Project-Originator-Volume-Level-Type-Role-Number pattern, validated with a real regex.',
    intro: `ISO 19650 and its firm-specific derivatives typically require views and sheets to follow a strict, structured naming pattern — Project-Originator-Volume-Level-Type-Role-Number — rather than whatever a modeler happened to type at 4pm on a Friday. This lesson builds a script that renames existing views and sheets in DPC2025 to match that pattern, using Python string formatting to build the name and the built-in re module to validate it — a real regular expression engine, a genuine advantage over the workaround typically needed to achieve similar validation in Dynamo.`,
    sections: [
      {
        id: 's1', heading: 'The Target Naming Pattern', level: 'h2',
        content: `Before writing any code, the exact pattern needs to be pinned down precisely, field by field, since a renaming script is only as good as the naming standard it encodes.`,
        code: {
          label: 'ISO 19650-Style Pattern for DPC2025',
          lines: [
            'Pattern:  {Project}-{Originator}-{Volume}-{Level}-{Type}-{Role}-{Number}',
            '',
            'Example:  DPC-ARC-00-L01-DR-A-0001',
            '  Project:     DPC   (fixed for this project)',
            '  Originator:  ARC   (the authoring discipline/firm code)',
            '  Volume:      00    (zone/volume, "00" if not subdivided)',
            '  Level:       L01   (matches DPC2025\'s Level 1, Level 2, ...)',
            '  Type:        DR    (Drawing type, e.g. DR = plan drawing)',
            '  Role:        A     (Architectural role code)',
            '  Number:      0001  (a four-digit sequence number)',
          ],
        },
        formula: { label: 'Encode the Standard First', text: 'Write the exact field-by-field pattern in plain text before touching Python — the script only needs to reproduce a rule you have already fully defined' },
      },
      {
        id: 's2', heading: 'Collecting Views and Sheets to Rename', level: 'h2',
        content: `The script collects two categories in DPC2025 — regular views and ViewSheets — since sheets carry both a SheetNumber and a Name, while other views only carry a Name.`,
        code: {
          label: 'Collecting Views and Sheets',
          lines: [
            'from pyrevit import revit, DB, script',
            'import re',
            '',
            'doc = revit.doc',
            'output = script.get_output()',
            '',
            'sheets = DB.FilteredElementCollector(doc) \\',
            '            .OfClass(DB.ViewSheet) \\',
            '            .ToElements()',
            '',
            'plan_views = DB.FilteredElementCollector(doc) \\',
            '                .OfClass(DB.ViewPlan) \\',
            '                .WhereElementIsNotElementType() \\',
            '                .ToElements()',
          ],
        },
      },
      {
        id: 's3', heading: 'Validating Names with a Real Regex', level: 'h2',
        content: `Python\'s built-in re module gives this script a genuine regular expression engine — a real advantage over Dynamo, where equivalent pattern validation typically requires a workaround using String node combinations rather than a true regex. Here, one compiled pattern checks every candidate name in a single line.`,
        code: {
          label: 'Validating the ISO 19650-Style Pattern',
          lines: [
            'NAME_PATTERN = re.compile(',
            '    r"^DPC-[A-Z]{3}-\\d{2}-L\\d{2}-[A-Z]{2}-[A-Z]-\\d{4}$"',
            ')',
            '',
            'def is_valid_name(name):',
            '    return bool(NAME_PATTERN.match(name))',
            '',
            'test_names = ["DPC-ARC-00-L01-DR-A-0001", "Level 1 - Plan", "dpc-arc-00-l01-dr-a-0001"]',
            'for name in test_names:',
            '    output.print_md("{}: {}".format(name, is_valid_name(name)))',
          ],
        },
        items: [
          'The pattern \\d{2} matches exactly two digits, [A-Z]{3} matches exactly three uppercase letters, and $ anchors the match to the end of the string so a name with extra trailing characters is correctly rejected',
          'Because regex matching is case-sensitive by default, "dpc-arc-00-l01-dr-a-0001" correctly fails validation here — a genuine advantage when a naming standard requires uppercase codes specifically',
          'Contrast this with Dynamo, where achieving the same validation typically means chaining String.Contains, String.Length, and manual character-position checks together — functional, but far more verbose than one compiled pattern',
        ],
        formula: { label: 'Regex Advantage', text: 'One compiled re pattern replaces a whole chain of String-node workarounds that would be needed to validate the same naming rule in Dynamo' },
      },
      {
        id: 's4', heading: 'Building New Names with String Formatting', level: 'h2',
        content: `With the target pattern validated, the script generates the actual replacement name for each sheet using Python\'s .format() (or f-strings, on a supporting IronPython version), reading the existing Level association to fill in the Level field automatically.`,
        code: {
          label: 'Generating New Sheet Names',
          lines: [
            'def build_sheet_name(originator, volume, level_num, dtype, role, number):',
            '    return "DPC-{}-{:02d}-L{:02d}-{}-{}-{:04d}".format(',
            '        originator, volume, level_num, dtype, role, number',
            '    )',
            '',
            'new_name = build_sheet_name("ARC", 0, 1, "DR", "A", 1)',
            '# -> "DPC-ARC-00-L01-DR-A-0001"',
            '',
            'assert is_valid_name(new_name)',
          ],
        },
      },
      {
        id: 's5', heading: 'Checking for Duplicate-Name Collisions Before Committing', level: 'h2',
        content: `Both View.Name and ViewSheet.SheetNumber/Name must be unique within DPC2025 — attempting to rename into a name that already exists raises an exception. The script checks for collisions against all existing names before starting the Transaction, exactly as this course\'s pattern of "verify before writing" requires.`,
        code: {
          label: 'Collision Checking',
          lines: [
            'existing_sheet_numbers = set(s.SheetNumber for s in sheets)',
            '',
            'def is_available(sheet_number, exclude_id=None):',
            '    for s in sheets:',
            '        if s.Id != exclude_id and s.SheetNumber == sheet_number:',
            '            return False',
            '    return True',
            '',
            'proposed_number = "A-0001"',
            'if not is_available(proposed_number):',
            '    output.print_md("**Collision:** {} is already in use.".format(proposed_number))',
          ],
        },
        formula: { label: 'Pre-Flight Rule', text: 'Check every proposed name against the full existing-name set BEFORE opening the Transaction — a collision discovered mid-loop leaves some sheets renamed and others not' },
      },
      {
        id: 's6', heading: 'Renaming Inside a Transaction', level: 'h2',
        content: `Only once every proposed name has been validated by regex and checked for collisions does the script actually rename anything, all inside a single Transaction.`,
        code: {
          label: 'Renaming Sheets',
          lines: [
            'rename_plan = {',
            '    sheet.Id: ("A-0001", "Ground Floor Plan")',
            '    for sheet in sheets if sheet.SheetNumber == "00"',
            '}',
            '',
            'with revit.Transaction("Rename Sheets - ISO 19650 - DPC2025"):',
            '    for sheet_id, (new_number, new_name) in rename_plan.items():',
            '        sheet = doc.GetElement(sheet_id)',
            '        sheet.SheetNumber = new_number',
            '        sheet.Name = new_name',
            '',
            'output.print_md("Renamed **{}** sheets.".format(len(rename_plan)))',
          ],
        },
        items: [
          'SheetNumber must generally be set before or independently of Name, since Revit treats SheetNumber as the more strictly unique identifier of the two',
          'If a rename call still raises an exception despite pre-checking, catch it per-sheet with a try/except so one bad sheet does not abort the rename of every other sheet in the same run',
        ],
      },
      {
        id: 's7', heading: 'Troubleshooting the View Renamer', level: 'h2',
        content: `**Mistake:**
Building the regex pattern with single backslashes inside a normal Python string, which Python\'s own string escaping can silently mangle. Use a raw string literal (prefixed with r, e.g. r"^DPC-...") for any regex pattern so backslashes are passed through to re exactly as written.

**Mistake:**
Renaming sheets in an arbitrary loop order without first checking for collisions against the FINAL target name set, only against current names — if two sheets are being renamed to swap their numbers, a naive one-at-a-time check will falsely flag a collision that would actually resolve correctly by the end of the loop.

**Best Practice:**
Run this script on a small handful of DPC2025 sheets first, verify the result in the Project Browser, and only then extend rename_plan to the full sheet set.`,
      },
    ],
    takeaways: [
      'The ISO 19650-style pattern used in this lesson is Project-Originator-Volume-Level-Type-Role-Number, e.g. "DPC-ARC-00-L01-DR-A-0001".',
      'Python\'s built-in re module provides genuine regular expression matching to validate names, a real advantage over the String-node workarounds needed for equivalent checks in Dynamo.',
      'Regex patterns should be written as raw strings (prefixed with r) so backslash escape sequences are passed through to re unmodified.',
      'Both View.Name and ViewSheet.SheetNumber/Name must be unique within a project; a collision check against all existing values should run before any renaming begins.',
      'Renaming must happen inside a revit.Transaction, and SheetNumber is generally set independently from Name since Revit treats it as the stricter unique identifier.',
      'Testing a rename script against a small handful of sheets first, before running it against the full sheet set, limits the blast radius of any naming-pattern mistake.',
    ],
    resource: { label: 'ISO 19650 View Renamer Guide', type: 'PDF' },
    quiz: { label: 'View Renamer & Regex Quiz', questions: 10, time: '5 min' },
    prev: { id: 'pyp-3', title: 'Auto-Number Doors Across All Levels' },
    next: { id: 'pyp-5', title: 'Bulk Parameter Writer — Update 500 Elements in One Click' },
  },

  // ============================================================
  // LESSON PYP-05 — Bulk Parameter Writer
  // ============================================================
  {
    id: 'pyp-5', num: '05',
    title: 'Bulk Parameter Writer — Update 500 Elements in One Click',
    topic: 'Parameters & Sheets', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'Build a general-purpose bulk parameter update tool that checks StorageType before writing, and performs a single Transaction across hundreds of elements for real performance.',
    intro: `Not every parameter update fits the "one category, one specific parameter" mold of earlier lessons — sometimes you need a genuinely general-purpose tool that can update any parameter, by name, across any category, on demand. This lesson builds exactly that: a bulk parameter writer that checks each parameter's StorageType before calling the correctly typed setter, and that wraps hundreds of updates in a single Transaction rather than one Transaction per element — a difference that, at real DPC2025-sized scale, is the difference between a script that finishes instantly and one that visibly grinds.`,
    sections: [
      {
        id: 's1', heading: 'Designing a General-Purpose Tool', level: 'h2',
        content: `Unlike the Room Tagger or Door Numberer, this script is not hard-coded to one category or one parameter name — it is written so the category, parameter name, and new value can be changed at the top of the file (or, in a more advanced version, supplied through a simple pyRevit forms input), making it reusable across many different bulk-update needs on DPC2025.`,
        code: {
          label: 'Configuration Block',
          lines: [
            'from pyrevit import revit, DB, script',
            '',
            'doc = revit.doc',
            'output = script.get_output()',
            '',
            '# --- Configuration: change these three lines per use ---',
            'TARGET_CATEGORY = DB.BuiltInCategory.OST_Doors',
            'PARAMETER_NAME = "Comments"',
            'NEW_VALUE = "Reviewed - DPC2025 QA Pass 1"',
          ],
        },
      },
      {
        id: 's2', heading: 'Collecting the Target Category', level: 'h2',
        content: `The collector step is now generic, driven entirely by the TARGET_CATEGORY configuration value rather than a hard-coded category.`,
        code: {
          label: 'Generic Category Collection',
          lines: [
            'elements = DB.FilteredElementCollector(doc) \\',
            '                .OfCategory(TARGET_CATEGORY) \\',
            '                .WhereElementIsNotElementType() \\',
            '                .ToElements()',
            '',
            'output.print_md("Found **{}** elements to update.".format(len(elements)))',
          ],
        },
      },
      {
        id: 's3', heading: 'Checking StorageType Before Writing', level: 'h2',
        content: `LookupParameter("Comments") returns a Parameter object, and calling .Set() on it requires passing a Python value of the correct type for that parameter's underlying StorageType — a string for StorageType.String, a float for StorageType.Double, an int for StorageType.Integer, and an ElementId for StorageType.ElementId. Passing the wrong type raises an exception, so checking StorageType first is what makes this tool safely general-purpose.`,
        code: {
          label: 'StorageType-Aware Setter',
          lines: [
            'def set_parameter_value(param, value):',
            '    storage_type = param.StorageType',
            '    if storage_type == DB.StorageType.String:',
            '        param.Set(str(value))',
            '    elif storage_type == DB.StorageType.Double:',
            '        param.Set(float(value))',
            '    elif storage_type == DB.StorageType.Integer:',
            '        param.Set(int(value))',
            '    elif storage_type == DB.StorageType.ElementId:',
            '        param.Set(DB.ElementId(int(value)))',
            '    else:',
            '        raise ValueError("Unsupported StorageType: {}".format(storage_type))',
          ],
        },
        formula: { label: 'StorageType Rule', text: 'Always branch on param.StorageType before calling .Set() — the same NEW_VALUE input must be coerced differently depending on String/Double/Integer/ElementId' },
      },
      {
        id: 's4', heading: 'Looping Through Elements Safely', level: 'h2',
        content: `Before writing, the loop confirms the parameter actually exists on each element and is not read-only, exactly mirroring the defensive pattern used in earlier lessons — this matters even more here since the category is configurable and might not have PARAMETER_NAME bound to it at all.`,
        code: {
          label: 'Safe Update Loop',
          lines: [
            'updated_count = 0',
            'skipped_count = 0',
            '',
            'for element in elements:',
            '    param = element.LookupParameter(PARAMETER_NAME)',
            '    if param is None or param.IsReadOnly:',
            '        skipped_count += 1',
            '        continue',
            '    set_parameter_value(param, NEW_VALUE)',
            '    updated_count += 1',
          ],
        },
      },
      {
        id: 's5', heading: 'One Transaction for the Whole Loop — Why It Matters', level: 'h2',
        content: `The single most important performance decision in this script is wrapping the entire loop in ONE Transaction, rather than opening and committing a new Transaction inside the loop for every individual element.`,
        code: {
          label: 'One Transaction, Hundreds of Elements',
          lines: [
            'with revit.Transaction("Bulk Update {} - DPC2025".format(PARAMETER_NAME)):',
            '    for element in elements:',
            '        param = element.LookupParameter(PARAMETER_NAME)',
            '        if param is None or param.IsReadOnly:',
            '            continue',
            '        set_parameter_value(param, NEW_VALUE)',
            '',
            'output.print_md("Updated **{}** elements, skipped **{}**.".format(',
            '    updated_count, skipped_count))',
          ],
        },
        items: [
          'Each Transaction carries real overhead in Revit — opening and committing one per element for 500 elements means paying that overhead 500 times instead of once',
          'A single Transaction wrapping the whole loop is also a single undo step for the user afterward, rather than 500 separate entries cluttering the Undo history',
          'On a real 500+ element category in DPC2025 (or a larger production model), the difference between one Transaction and per-element Transactions is easily the difference between a script that finishes in under a second and one that visibly grinds for tens of seconds or more',
        ],
        formula: { label: 'Performance Rule', text: 'Wrap the entire bulk-update loop in a single Transaction — one Transaction per element is a common beginner mistake that becomes a severe, visible slowdown at real project scale' },
      },
      {
        id: 's6', heading: 'Reporting Results', level: 'h2',
        content: `A bulk tool that silently succeeds or fails is hard to trust. Printing a clear summary through script.get_output() gives the user immediate confidence the correct number of elements were actually touched.`,
        code: {
          label: 'Summary Report',
          lines: [
            'output.print_md("### Bulk Parameter Update Summary")',
            'output.print_md("- Category: **{}**".format(TARGET_CATEGORY))',
            'output.print_md("- Parameter: **{}**".format(PARAMETER_NAME))',
            'output.print_md("- Updated: **{}**".format(updated_count))',
            'output.print_md("- Skipped (missing/read-only): **{}**".format(skipped_count))',
          ],
        },
      },
      {
        id: 's7', heading: 'Troubleshooting the Bulk Writer', level: 'h2',
        content: `**Mistake:**
Assuming every element in TARGET_CATEGORY has PARAMETER_NAME bound to it. Some family instances within the same category can legitimately lack a given parameter — always check LookupParameter for None rather than assuming it will always return a valid Parameter object.

**Mistake:**
Passing a Python string to .Set() for a Double or Integer StorageType parameter. This raises an exception rather than silently converting — always coerce NEW_VALUE with float() or int() first, exactly as the set_parameter_value helper does above.

**Best Practice:**
Test this tool on a small, deliberately chosen subset of DPC2025 first (e.g., filter elements down to 3-5 test doors) before pointing it at an entire category of 500+ elements.`,
      },
    ],
    takeaways: [
      'A general-purpose bulk parameter writer keeps category, parameter name, and new value as configuration values at the top of the script, rather than hard-coding them.',
      'LookupParameter(name) returns a Parameter object; the correct Python type must be passed to .Set() based on param.StorageType (String/Double/Integer/ElementId).',
      'Checking param.StorageType and branching to the correctly typed .Set() call is what makes a bulk tool safely reusable across different parameter types.',
      'Always check that LookupParameter did not return None and that the parameter is not read-only before attempting to write.',
      'Wrapping the entire update loop in a single Transaction, rather than one Transaction per element, is dramatically faster at real scale (hundreds of elements) and produces one clean undo step.',
      'A clear summary report (updated vs skipped counts) printed via script.get_output() builds user trust in a bulk tool\'s result.',
    ],
    resource: { label: 'Bulk Parameter Writer Guide', type: 'PDF' },
    quiz: { label: 'Bulk Parameter Writer Quiz', questions: 10, time: '5 min' },
    prev: { id: 'pyp-4', title: 'Build a View Renamer to Match ISO 19650' },
    next: { id: 'pyp-6', title: 'Build a Sheet Creator from an Excel List' },
  },

  // ============================================================
  // LESSON PYP-06 — Build a Sheet Creator from an Excel List
  // ============================================================
  {
    id: 'pyp-6', num: '06',
    title: 'Build a Sheet Creator from an Excel List',
    topic: 'Parameters & Sheets', cat: 'beginner', readTime: '10 min', free: false,
    desc: 'Read a CSV list of target sheet numbers, names, and views, then loop through rows in Python to create ViewSheets and place Viewports automatically, all in one Transaction.',
    intro: `Batch sheet creation is one of the highest-value automations a BIM Coordinator can own, and this lesson builds the pyRevit version of it: reading a simple list of target sheets from a CSV file, then looping through each row to create a ViewSheet and place a Viewport on it automatically. Where the Dynamo course achieved this with parallel-list node wiring, pyRevit reduces the whole thing to a straightforward Python loop — read a row, create a sheet, place a view, move to the next row.`,
    sections: [
      {
        id: 's1', heading: 'Why CSV Instead of Excel Directly', level: 'h2',
        content: `IronPython, the engine pyRevit scripts run on, does not include the extra libraries (like openpyxl) needed to read .xlsx files directly without additional setup. CSV, by contrast, is plain text and readable with Python's built-in csv module — no extra dependency required, which is exactly why this lesson uses it as the simplest reliable option.`,
        formula: { label: 'Format Choice', text: 'CSV requires zero extra dependencies under IronPython; reading true .xlsx directly would require installing an additional library first' },
      },
      {
        id: 's2', heading: 'The Source CSV', level: 'h2',
        content: `Imagine a project coordinator has prepared a simple spreadsheet (saved as CSV) listing every sheet DPC2025 needs, each row naming the target sheet number, sheet name, and the view to place on it.`,
        code: {
          label: 'DPC2025_SheetList.csv',
          lines: [
            'SheetNumber,SheetName,ViewName',
            'A-101,Level 1 - Floor Plan,Plan - Level 1',
            'A-102,Level 2 - Floor Plan,Plan - Level 2',
            'A-103,Level 3 - Floor Plan,Plan - Level 3',
            'A-104,Level 4 - Floor Plan,Plan - Level 4',
          ],
        },
      },
      {
        id: 's3', heading: 'Reading the CSV with Python\'s csv Module', level: 'h2',
        content: `Python's built-in csv module parses the file into a list of dictionaries (one per row) using DictReader, keyed automatically by the header row — no manual column-index tracking required.`,
        code: {
          label: 'Reading the Sheet List',
          lines: [
            'import csv',
            'from pyrevit import revit, DB, script',
            '',
            'doc = revit.doc',
            'output = script.get_output()',
            '',
            'csv_path = r"C:\\DPC2025_Practice\\Imports\\DPC2025_SheetList.csv"',
            '',
            'sheet_rows = []',
            'with open(csv_path, mode="r") as f:',
            '    reader = csv.DictReader(f)',
            '    for row in reader:',
            '        sheet_rows.append(row)',
            '',
            'output.print_md("Read **{}** rows from the sheet list.".format(len(sheet_rows)))',
          ],
        },
        items: [
          'DictReader automatically treats the first row as column headers, so each row becomes a dictionary like {"SheetNumber": "A-101", "SheetName": "Level 1 - Floor Plan", "ViewName": "Plan - Level 1"}',
          'Always use a full, explicit file path (or a path built from a known project folder) rather than a relative path whose meaning depends on which folder pyRevit happens to be running from',
        ],
      },
      {
        id: 's4', heading: 'Finding the Titleblock Type and Matching Views', level: 'h2',
        content: `Before creating any sheets, the script needs the titleblock family type to use, and a lookup from view name to actual View element so each row's ViewName can be resolved to a real object.`,
        code: {
          label: 'Titleblock and View Lookups',
          lines: [
            'titleblocks = DB.FilteredElementCollector(doc) \\',
            '                .OfCategory(DB.BuiltInCategory.OST_TitleBlocks) \\',
            '                .WhereElementIsElementType() \\',
            '                .ToElements()',
            'titleblock_type_id = titleblocks[0].Id  # first available titleblock type',
            '',
            'all_views = DB.FilteredElementCollector(doc) \\',
            '                .OfClass(DB.View) \\',
            '                .ToElements()',
            'views_by_name = {v.Name: v for v in all_views if not v.IsTemplate}',
          ],
        },
        formula: { label: 'Lookup-First Rule', text: 'Build name-to-element lookup dictionaries once, before the row loop, rather than re-querying the model for every single row' },
      },
      {
        id: 's5', heading: 'Creating Sheets and Placing Viewports', level: 'h2',
        content: `With rows read and lookups built, the script loops through each row exactly once, calling DB.ViewSheet.Create for the sheet itself and DB.Viewport.Create to place the matched view onto it — all inside one Transaction.`,
        code: {
          label: 'Creating Sheets and Viewports',
          lines: [
            'created_count = 0',
            'skipped_count = 0',
            '',
            'with revit.Transaction("Create Sheets from CSV - DPC2025"):',
            '    for row in sheet_rows:',
            '        view = views_by_name.get(row["ViewName"])',
            '        if view is None:',
            '            skipped_count += 1',
            '            continue',
            '',
            '        new_sheet = DB.ViewSheet.Create(doc, titleblock_type_id)',
            '        new_sheet.SheetNumber = row["SheetNumber"]',
            '        new_sheet.Name = row["SheetName"]',
            '',
            '        center = new_sheet.Outline.Max.Add(new_sheet.Outline.Min).Multiply(0.5)',
            '        DB.Viewport.Create(doc, new_sheet.Id, view.Id, center)',
            '',
            '        created_count += 1',
            '',
            'output.print_md("Created **{}** sheets, skipped **{}** (view not found).".format(',
            '    created_count, skipped_count))',
          ],
        },
        items: [
          'DB.ViewSheet.Create(doc, titleblockTypeId) creates the sheet itself; SheetNumber and Name are then set as ordinary properties on the returned object',
          'DB.Viewport.Create(doc, sheetId, viewId, point) places the view onto the sheet at the given point — a simple centered placement is used here, but real projects may compute a more deliberate location',
          'Skipping rows whose ViewName does not match any real view (rather than crashing the whole loop) keeps one bad row in the CSV from blocking every other row from being processed',
        ],
      },
      {
        id: 's6', heading: 'Verifying the Result', level: 'h2',
        content: `After running, the Project Browser is the fastest way to confirm the script did exactly what the CSV specified.`,
        items: [
          'Expand Sheets (all) in the Project Browser and confirm one new sheet per CSV row appears, with the correct SheetNumber and Name',
          'Open at least one new sheet and confirm the correct view was actually placed on it, not a blank sheet or the wrong view',
          'Cross-check the created_count and skipped_count printed summary against the original row count in the CSV — if skipped_count is not zero, check the ViewName spelling in the CSV against the actual view names in DPC2025',
        ],
      },
      {
        id: 's7', heading: 'Troubleshooting the Sheet Creator', level: 'h2',
        content: `**Mistake:**
A CSV saved from Excel with trailing whitespace or hidden characters in the header row, causing DictReader's keys to not exactly match the strings used in the script (row["SheetNumber"] raising a KeyError). Print row.keys() for the first row to sanity-check the exact header strings before trusting the rest of the loop.

**Mistake:**
Assigning SheetNumber to a value that collides with an existing sheet, raising an exception mid-loop. As covered in the View Renamer lesson, check proposed SheetNumbers against existing ones before the Transaction starts, not only inside it.

**Best Practice:**
Run this script against a CSV with only 1-2 rows first, verify the result in DPC2025, and only then run it against the full sheet list.`,
      },
    ],
    takeaways: [
      'CSV is the simplest reliable format for reading external sheet lists under IronPython, since it requires no extra library beyond Python\'s built-in csv module.',
      'csv.DictReader parses a CSV into a list of dictionaries keyed by the header row, avoiding manual column-index tracking.',
      'Name-to-element lookup dictionaries (e.g., views_by_name) should be built once before the row loop, not re-queried from the model on every row.',
      'DB.ViewSheet.Create(doc, titleblockTypeId) creates a new sheet; DB.Viewport.Create(doc, sheetId, viewId, point) places a matched view onto it.',
      'The entire row loop — sheet creation and viewport placement for every row — is wrapped in a single Transaction, matching the performance pattern from the Bulk Parameter Writer lesson.',
      'Rows whose target view cannot be found should be skipped and reported, not allowed to crash the entire batch creation run.',
    ],
    resource: { label: 'CSV-Driven Sheet Creator Guide', type: 'PDF' },
    quiz: { label: 'Sheet Creator from CSV Quiz', questions: 10, time: '5 min' },
    prev: { id: 'pyp-5', title: 'Bulk Parameter Writer — Update 500 Elements in One Click' },
    next: { id: 'pyp-7', title: 'Family Loader — Load All Library Families in One Click' },
  },

  // ============================================================
  // LESSON PYP-07 — Family Loader
  // ============================================================
  {
    id: 'pyp-7', num: '07',
    title: 'Family Loader — Load All Library Families in One Click',
    topic: 'Families & QA', cat: 'beginner', readTime: '9 min', free: false,
    desc: 'Build a script that walks an office library folder, finds every .rfa file, loads each into DPC2025, and prints a loaded/already-present/failed summary report.',
    intro: `Loading a folder full of standard office library families into a new project by hand, one at a time through Insert → Load Family, is exactly the kind of repetitive task pyRevit exists to eliminate. This lesson builds a script that walks a specified office library folder path using Python's os module, finds every .rfa file it contains, and loads each one into DPC2025 automatically — finishing with a clear summary report of what loaded, what was already present, and what failed.`,
    sections: [
      {
        id: 's1', heading: 'Planning the Family Loader', level: 'h2',
        content: `The plan for this script has three distinct phases: discover every .rfa file under a given library folder (including subfolders), attempt to load each one into DPC2025, and track the outcome of each attempt so a summary can be reported at the end.`,
        code: {
          label: 'Family Loader — The Plan',
          lines: [
            '1. Define the office library root folder path',
            '2. Walk the folder tree and collect every .rfa file path',
            '3. For each file, call doc.LoadFamily(path)',
            '4. Track outcome per file: loaded / already present / failed',
            '5. Print a summary report via script.get_output()',
          ],
        },
      },
      {
        id: 's2', heading: 'Walking the Folder with os.walk', level: 'h2',
        content: `Python\'s built-in os module provides os.walk, which recursively descends through a folder tree, yielding the files in each subfolder along the way — exactly what is needed to find every .rfa file regardless of how the office library is organized into subfolders.`,
        code: {
          label: 'Finding All .rfa Files',
          lines: [
            'import os',
            'from pyrevit import revit, DB, script',
            '',
            'doc = revit.doc',
            'output = script.get_output()',
            '',
            'LIBRARY_ROOT = r"C:\\OfficeLibrary\\Families"',
            '',
            'rfa_paths = []',
            'for root, dirs, files in os.walk(LIBRARY_ROOT):',
            '    for filename in files:',
            '        if filename.lower().endswith(".rfa"):',
            '            rfa_paths.append(os.path.join(root, filename))',
            '',
            'output.print_md("Found **{}** .rfa files under {}.".format(',
            '    len(rfa_paths), LIBRARY_ROOT))',
          ],
        },
        items: [
          'os.walk(LIBRARY_ROOT) yields a (root, dirs, files) tuple for every folder in the tree, including LIBRARY_ROOT itself and every nested subfolder',
          'filename.lower().endswith(".rfa") makes the check case-insensitive, so ".RFA" or ".Rfa" files are still picked up correctly',
          'An alternative using Python\'s glob module (glob.glob with a recursive pattern) can achieve a similar result in fewer lines on supporting Python versions, but os.walk works reliably under IronPython and gives explicit control over the traversal',
        ],
      },
      {
        id: 's3', heading: 'Loading Each Family with doc.LoadFamily', level: 'h2',
        content: `With every file path collected, the script attempts to load each one, tracking success, already-loaded, and failure outcomes separately so the final report is meaningful rather than a single pass/fail count.`,
        code: {
          label: 'Loading Families and Tracking Outcomes',
          lines: [
            'loaded = []',
            'already_present = []',
            'failed = []',
            '',
            'with revit.Transaction("Load Office Library Families - DPC2025"):',
            '    for path in rfa_paths:',
            '        family_name = os.path.splitext(os.path.basename(path))[0]',
            '        try:',
            '            result = doc.LoadFamily(path)',
            '            if result:',
            '                loaded.append(family_name)',
            '            else:',
            '                already_present.append(family_name)',
            '        except Exception as ex:',
            '            failed.append((family_name, str(ex)))',
          ],
        },
        items: [
          'doc.LoadFamily(path) returns True if the family was newly loaded, and False if a family with the same name already exists in the project and nothing changed — this Boolean is exactly what separates "loaded" from "already present" in the tracking above',
          'Wrapping each individual load call in its own try/except means one corrupt or incompatible .rfa file does not stop the rest of the folder from loading',
          'os.path.splitext(os.path.basename(path))[0] extracts just the family name from the full path, e.g. "C:\\...\\Furniture\\Desk_600x1200.rfa" becomes "Desk_600x1200"',
        ],
        formula: { label: 'Per-File Isolation Rule', text: 'Wrap each individual doc.LoadFamily call in its own try/except so one bad family file cannot abort the entire batch load' },
      },
      {
        id: 's4', heading: 'Printing the Summary Report', level: 'h2',
        content: `script.get_output() is pyRevit\'s dedicated output window API, and it supports Markdown-style formatting — perfect for a clear, scannable summary report at the end of a batch operation like this one.`,
        code: {
          label: 'Summary Report via script.get_output()',
          lines: [
            'output.print_md("## Family Loader Summary — DPC2025")',
            'output.print_md("- Loaded: **{}**".format(len(loaded)))',
            'output.print_md("- Already present: **{}**".format(len(already_present)))',
            'output.print_md("- Failed: **{}**".format(len(failed)))',
            '',
            'if failed:',
            '    output.print_md("### Failed Families")',
            '    for name, error_message in failed:',
            '        output.print_md("- **{}**: {}".format(name, error_message))',
          ],
        },
      },
      {
        id: 's5', heading: 'Why Reporting Both Loaded and Already-Present Matters', level: 'h2',
        content: `A batch tool that only reports total success/failure hides useful information — knowing which families were newly loaded versus already present tells the user whether DPC2025 was mostly up to date already, or whether this run substantially changed the model\'s family content.`,
        items: [
          'A high "already present" count on a repeat run of this script confirms the tool is safely idempotent — re-running it does not duplicate or corrupt anything, it simply confirms the library is already loaded',
          'A high "failed" count is a signal to open the output window\'s per-family error messages and investigate specific files, rather than re-running the whole script blindly and hoping for a different result',
          'Keeping three separate lists (rather than one combined count) is what makes the final report actually diagnostic rather than just a single pass/fail number',
        ],
      },
      {
        id: 's6', heading: 'A Note on Scale', level: 'h2',
        content: `An office library can easily contain hundreds of family files across dozens of subfolders. This script handles that scale the same way the Bulk Parameter Writer lesson did: wrapping the entire load loop in a single Transaction rather than one Transaction per family, and relying on the same per-item try/except pattern to keep one bad file from derailing the whole run.`,
        formula: { label: 'Scale Reminder', text: 'The same "single Transaction for the whole loop" principle from Lesson 5 applies directly here — one Transaction for potentially hundreds of family loads, not one per file' },
      },
      {
        id: 's7', heading: 'Troubleshooting the Family Loader', level: 'h2',
        content: `**Mistake:**
Assuming doc.LoadFamily always returns True on success. It returns False (not an exception) when a family with the same name already exists and the load is effectively a no-op — treating False as a failure rather than as "already present" produces a misleading report.

**Mistake:**
Running this script against a library root path that does not exist or is not accessible (e.g., a disconnected network drive), which causes os.walk to silently return zero results rather than raising an obvious error. Always check that rfa_paths is non-empty before proceeding, and print the resolved LIBRARY_ROOT path for a quick sanity check.

**Best Practice:**
Run this script against a small test subfolder containing 2-3 families first, confirm the summary report looks correct, and only then point LIBRARY_ROOT at the full office library.`,
      },
    ],
    takeaways: [
      'os.walk recursively discovers every file in a folder tree, including nested subfolders, and is the basis for finding all .rfa files under an office library root.',
      'doc.LoadFamily(path) returns True when a family is newly loaded and False when a family with the same name already exists — this Boolean is what distinguishes "loaded" from "already present."',
      'Wrapping each individual family load in its own try/except keeps one corrupt or incompatible .rfa file from stopping the rest of the batch.',
      'script.get_output() supports Markdown-style formatting, making it well suited for a clear, scannable summary report at the end of a batch operation.',
      'Tracking loaded, already-present, and failed families as three separate lists produces a genuinely diagnostic report, not just a single pass/fail count.',
      'The entire family-loading loop should be wrapped in one Transaction, following the same performance principle established in the Bulk Parameter Writer lesson.',
    ],
    resource: { label: 'Family Library Loader Guide', type: 'PDF' },
    quiz: { label: 'Family Loader Script Quiz', questions: 10, time: '5 min' },
    prev: { id: 'pyp-6', title: 'Build a Sheet Creator from an Excel List' },
    next: { id: 'pyp-8', title: 'Build a Quick Purge & Audit Button' },
  },

  // ============================================================
  // LESSON PYP-08 — Build a Quick Purge & Audit Button
  // ============================================================
  {
    id: 'pyp-8', num: '08',
    title: 'Build a Quick Purge & Audit Button',
    topic: 'Families & QA', cat: 'beginner', readTime: '10 min', free: false,
    desc: 'Build a script that detects unused family types in DPC2025 and reports them as a review list, without deleting anything automatically — report first, delete deliberately.',
    intro: `Purging unused elements is one of the most valuable model-health habits in Revit, and also one of the most dangerous to fully automate, since "unused" is not always as obvious as it sounds. This lesson builds a script that identifies family types with no placed instances anywhere in DPC2025 and reports them in the pyRevit output window as a review list — deliberately stopping short of deleting anything. This "report first, delete deliberately" pattern is the safety practice every purge-style tool in this course, and in real production work, should follow.`,
    sections: [
      {
        id: 's1', heading: 'Why This Script Reports Instead of Deletes', level: 'h2',
        content: `A fully automatic purge tool is tempting to build, but genuinely risky: a family type with zero instances in the current view, or even zero instances project-wide, might still be intentionally kept for an upcoming design phase, referenced by a schedule, or nested inside another family that is itself in use. Automatically deleting based on a simple instance count risks silently removing something a team member needed.`,
        formula: { label: 'Core Safety Principle', text: 'Report first, delete deliberately — a purge-style tool\'s job is to produce a trustworthy review list, not to make the deletion decision for the user' },
      },
      {
        id: 's2', heading: 'Planning the Detection Logic', level: 'h2',
        content: `The core idea is straightforward: collect every family type (symbol) in a target category, collect every placed instance of that category, and compare — any type id that never appears among the placed instances is a candidate for review.`,
        code: {
          label: 'Purge Candidate Detection — The Plan',
          lines: [
            '1. Pick a target category (e.g., Furniture, Doors, or all Family Symbols)',
            '2. Collect every FamilySymbol (type) in that category',
            '3. Collect every placed FamilyInstance in that category',
            '4. Build a set of type ids actually referenced by an instance',
            '5. Any FamilySymbol whose id is NOT in that set is a candidate',
            '6. Report candidates — do not delete them automatically',
          ],
        },
      },
      {
        id: 's3', heading: 'Collecting Family Types and Instances', level: 'h2',
        content: `The script collects two separate sets from the same category: the type-level FamilySymbol elements, and the instance-level FamilyInstance elements that reference them.`,
        code: {
          label: 'Collecting Types and Instances',
          lines: [
            'from pyrevit import revit, DB, script',
            '',
            'doc = revit.doc',
            'output = script.get_output()',
            '',
            'TARGET_CATEGORY = DB.BuiltInCategory.OST_Furniture',
            '',
            'family_types = DB.FilteredElementCollector(doc) \\',
            '                    .OfCategory(TARGET_CATEGORY) \\',
            '                    .WhereElementIsElementType() \\',
            '                    .ToElements()',
            '',
            'family_instances = DB.FilteredElementCollector(doc) \\',
            '                        .OfCategory(TARGET_CATEGORY) \\',
            '                        .WhereElementIsNotElementType() \\',
            '                        .ToElements()',
            '',
            'output.print_md("{} types, {} placed instances found.".format(',
            '    len(family_types), len(family_instances)))',
          ],
        },
      },
      {
        id: 's4', heading: 'Building the Used-Type-Id Set', level: 'h2',
        content: `Each FamilyInstance exposes the id of its own type through GetTypeId(). Collecting these into a Python set gives a fast lookup structure for the comparison step — the same set-based cross-reference technique used for the Room Tagger\'s untagged-room check back in Lesson 2.`,
        code: {
          label: 'Building the Used-Type-Id Set',
          lines: [
            'used_type_ids = set()',
            'for instance in family_instances:',
            '    used_type_ids.add(instance.GetTypeId().IntegerValue)',
            '',
            'output.print_md("{} distinct types are actually placed in the model.".format(',
            '    len(used_type_ids)))',
          ],
        },
        formula: { label: 'Reused Technique', text: 'Building a set of referenced ids, then checking membership, is the same cross-reference pattern used for untagged-room detection in Lesson 2 — applied here to type usage instead of tag coverage' },
      },
      {
        id: 's5', heading: 'Identifying Unused Types', level: 'h2',
        content: `With used_type_ids built, a plain Python loop over family_types finds every type whose id never appears in that set — these are the candidates for review, not for automatic deletion.`,
        code: {
          label: 'Finding Unused Candidates',
          lines: [
            'unused_candidates = []',
            'for family_type in family_types:',
            '    if family_type.Id.IntegerValue not in used_type_ids:',
            '        unused_candidates.append(family_type)',
            '',
            'output.print_md("Found **{}** candidate types with zero placed instances.".format(',
            '    len(unused_candidates)))',
          ],
        },
      },
      {
        id: 's6', heading: 'Reporting the Review List — No Deletion', level: 'h2',
        content: `The script\'s final step prints every candidate as a clearly labeled review list in the pyRevit output window, explicitly stating that nothing has been deleted and that a human should decide next steps.`,
        code: {
          label: 'Purge Candidate Report',
          lines: [
            'output.print_md("## Purge Candidate Report — DPC2025")',
            'output.print_md("**No elements have been deleted by this script.**")',
            'output.print_md("Review the list below and delete manually if confirmed safe to remove.")',
            'output.print_md("")',
            '',
            'if unused_candidates:',
            '    for family_type in unused_candidates:',
            '        family_name = family_type.Family.Name',
            '        type_name = family_type.get_Parameter(',
            '            DB.BuiltInParameter.SYMBOL_NAME_PARAM).AsString()',
            '        output.print_md("- {} : {}".format(family_name, type_name))',
            'else:',
            '    output.print_md("No unused candidates found in this category.")',
          ],
        },
        items: [
          'Printing the family name and type name together (not just an internal element id) makes the report immediately actionable for a human reviewing it in the output window',
          'Stating plainly in the output that nothing has been deleted removes any ambiguity for a user who might otherwise assume a "purge" tool always deletes automatically',
        ],
        formula: { label: 'Reporting Rule', text: 'A purge-style tool\'s output should always state explicitly that nothing was deleted, and should list candidates by readable name, not by raw element id' },
      },
      {
        id: 's7', heading: 'Why "Report First" Is the Right Default', level: 'h2',
        content: `**Mistake:**
Treating "zero instances in the currently open view" as equivalent to "unused project-wide." A type may simply not be placed in whatever view happens to be active — always collect instances project-wide (no view-scoping on the collector) for a purge-style check, exactly as this lesson\'s collectors do.

**Mistake:**
Assuming a type with zero direct instances is definitely safe to delete without checking whether it is nested inside another family that IS in use, or referenced by a schedule/tag/view filter. A detection script like this one is a starting point for human review, not a substitute for it.

**Best Practice:**
Once a human has reviewed the printed candidate list and confirmed which types are genuinely safe to remove, deletion should still happen as a small, deliberate, reviewable step — ideally through Revit\'s own Purge Unused command or a manual selection-and-delete, not blindly automated based on this script\'s output alone.`,
      },
    ],
    takeaways: [
      'A purge-style tool should report candidates for review rather than delete elements automatically — "report first, delete deliberately" is the core safety principle of this lesson.',
      'Detecting unused family types means comparing every FamilySymbol in a category against the set of type ids actually referenced by placed FamilyInstance elements.',
      'instance.GetTypeId() exposes which type each placed instance references; collecting these ids into a Python set reuses the same cross-reference technique as the Room Tagger\'s untagged-room check.',
      'Collectors used for purge detection must be project-wide, not scoped to the active view, since a type can be genuinely unused project-wide while still absent from whichever view happens to be open.',
      'A trustworthy purge report lists candidates by readable family and type name, and explicitly states that nothing has been deleted.',
      'A zero-instance detection result is a starting point for human review, not proof that a type is safe to delete — nested usage inside other families, schedules, or filters can still make a "candidate" load-bearing.',
    ],
    resource: { label: 'Purge & Audit Safety Guide', type: 'PDF' },
    quiz: { label: 'Purge & Audit Button Quiz', questions: 10, time: '5 min' },
    prev: { id: 'pyp-7', title: 'Family Loader — Load All Library Families in One Click' },
    next: { id: 'pyp-9', title: 'Build a Model Health Dashboard' },
  },

];
