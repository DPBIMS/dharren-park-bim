// ============================================================
// PYREVIT — LESSONS py-9 through py-16 (INTERMEDIATE)
// Section: Custom Tools / Collectors & Filters / UI & Forms / Data Exchange
// File: lib/pyrevitLessonsContent/pyrevitLessons_9_16.js
// Index: lib/pyrevitLessonsData.js
// ============================================================

export const lessons_9_16 = [

  // ============================================================
  // LESSON PY-9 — Building Your First Custom PyRevit Button
  // ============================================================
  {
    id: 'py-9', num: '09',
    title: 'Building Your First Custom PyRevit Button',
    topic: 'Custom Tools', cat: 'intermediate', readTime: '10 min', free: false,
    desc: 'Create a real, working pyRevit extension folder from scratch and add your own button to the ribbon, complete with icon, tooltip, and reload workflow.',
    intro: `Everything you have done so far in pyRevit has involved running scripts that someone else wrote and packaged. This lesson flips that around: you will build a brand-new extension folder structure by hand, write a first script.py from scratch, and get your own custom button showing up in the Revit ribbon with its own icon and tooltip. This is the moment pyRevit stops being "a toolkit you use" and starts being "a toolkit you extend" — every later lesson in this course builds directly on the folder structure and script.py conventions covered here.`,
    sections: [
      {
        id: 's1', heading: 'The Extension Folder Structure', level: 'h2',
        content: `pyRevit discovers buttons entirely by reading a folder structure on disk — there is no separate registration file or database to edit. The naming and nesting of folders IS the configuration. A new extension always starts with a folder ending in ".extension", and everything else nests inside it using the same suffix convention at each level.`,
        code: {
          label: 'Minimum Folder Structure for One Button',
          lines: [
            'MyTools.extension/',
            '  MyTab.tab/',
            '    MyPanel.panel/',
            '      MyButton.pushbutton/',
            '        script.py',
            '        icon.png',
            '',
            'Each suffix tells pyRevit what that folder represents:',
            '  .extension   → the top-level container pyRevit loads',
            '  .tab         → a new ribbon TAB (e.g., alongside Architecture)',
            '  .panel       → a PANEL grouped within that tab',
            '  .pushbutton  → a single clickable BUTTON within that panel',
          ],
        },
        formula: { label: 'Core Rule', text: 'The folder suffix determines the ribbon role — pyRevit never asks you to declare this anywhere else' },
      },
      {
        id: 's2', heading: 'Registering the Extension with pyRevit', level: 'h2',
        content: `pyRevit only scans folders it knows about. A newly created extension folder needs to be placed somewhere pyRevit already watches, or added explicitly via pyRevit Settings so it gets picked up on the next load.`,
        subsections: [
          {
            heading: 'Getting pyRevit to See Your Extension',
            items: [
              'The simplest approach: create your .extension folder directly inside pyRevit\'s existing extensions directory, alongside the built-in ones',
              'Alternatively, use pyRevit Settings (gear icon on the ribbon) to add a custom extensions search path pointing at a folder you control (e.g., a personal Git repo or a shared network drive)',
              'A custom search path is strongly preferred for anything beyond a one-off experiment, since it survives pyRevit updates and can be version-controlled independently',
              'After adding a new extension or a new search path, a full pyRevit reload (not just Reload — see below) is required the first time so pyRevit re-scans the folder tree',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Writing script.py', level: 'h2',
        content: `Inside the .pushbutton folder, script.py is the actual Python (IronPython by default) code that runs when the button is clicked. For a first button, it can be as small as a single line.`,
        code: {
          label: 'A Minimal script.py',
          lines: [
            'from pyrevit import forms',
            '',
            'forms.alert("Hello from my first pyRevit button.")',
          ],
        },
        items: [
          'script.py is executed top to bottom exactly once per click, in the current Revit document\'s context',
          'The pyrevit module (and its forms, script, revit submodules) is automatically available — no manual path setup is required inside the extension',
          'Standard Revit API access comes from importing Autodesk.Revit.DB, typically aliased, e.g. import Autodesk.Revit.DB as DB',
          'Keep the first version deliberately trivial — confirming the button appears and runs at all is the goal before adding real logic',
        ],
      },
      {
        id: 's4', heading: 'Adding an Icon', level: 'h2',
        content: `A .pushbutton folder without an icon.png still works, but shows a generic placeholder. Dropping a properly named image file into the folder is all that is needed to give the button a real icon.`,
        items: [
          'The file must be named exactly icon.png (case-sensitive on some systems) and placed directly inside the .pushbutton folder',
          'A square image around 32x32 to 96x96 pixels with a transparent background reads best on the ribbon at small sizes',
          'pyRevit automatically scales the icon for both the large and small ribbon button sizes — no need to provide multiple resolutions',
          'If the icon does not appear after a Reload, double-check the filename spelling and file location before assuming something else is wrong',
        ],
      },
      {
        id: 's5', heading: 'bundle.yaml — Title, Tooltip & Context', level: 'h2',
        content: `An optional bundle.yaml file placed alongside script.py lets you control the button\'s displayed title, its tooltip text, and when it is enabled — all without touching script.py itself.`,
        code: {
          label: 'Example bundle.yaml',
          lines: [
            'title: My Button',
            'tooltip: Runs a quick custom check on the selected elements.',
            'context: selection',
          ],
        },
        subsections: [
          {
            heading: 'Common bundle.yaml Keys',
            items: [
              'title — overrides the button label shown on the ribbon; without it, pyRevit derives a label from the folder name',
              'tooltip — the hover text shown to users; equivalent to setting doc-string metadata inside script.py itself',
              'context — controls WHEN the button is enabled, e.g. restricting it to only activate when something is selected, or when the active view is a specific type',
              'author and highlight are also supported for attribution and drawing attention to a new tool',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Special script.py Variables', level: 'h2',
        content: `Instead of (or in addition to) bundle.yaml, pyRevit recognizes a small set of special variables when they are defined directly at the top of script.py, giving the same metadata control from inside the script file itself.`,
        code: {
          label: 'Special Variables in script.py',
          lines: [
            '__title__   = "My Button"        # overrides the ribbon label',
            '__doc__     = "Tooltip text goes here, shown on hover."',
            '__context__ = "selection"         # when the button is enabled',
            '',
            '# ...rest of the script logic follows below...',
          ],
        },
        formula: { label: 'Which One Wins', text: 'bundle.yaml and script.py special variables cover the same metadata — use whichever is more convenient per tool, but do not rely on both disagreeing with each other' },
      },
      {
        id: 's7', heading: 'The Reload Workflow', level: 'h2',
        content: `pyRevit does not require restarting Revit every time you add or edit a script — the Reload button on the pyRevit ribbon tab (or Ctrl+click on it for a faster partial reload) re-scans the extension folder tree and refreshes the ribbon immediately.`,
        items: [
          'After creating a brand-new button folder for the first time, click Reload once to have it appear on the ribbon at all',
          'After editing an existing script.py\'s logic, Reload is technically not required to see the change take effect on the next click — pyRevit re-reads script.py fresh each run — but Reload is still useful after changing bundle.yaml, icon.png, or folder structure',
          'Ctrl+click on Reload performs a faster, more targeted reload in newer pyRevit versions, useful when iterating quickly on layout changes',
          'This edit-Reload-click loop is the core development cycle for the rest of this course: change files in an editor, Reload if structure changed, click the button, repeat',
        ],
      },
    ],
    takeaways: [
      'An extension is a nested folder structure: .extension containing .tab, containing .panel, containing .pushbutton, containing script.py and icon.png.',
      'pyRevit discovers buttons purely from folder naming conventions on disk — there is no separate registration step beyond making sure the extension is on a scanned path.',
      'script.py runs top to bottom on each click and automatically has access to the pyrevit module and the Revit API.',
      'icon.png, placed directly in the .pushbutton folder, is all that is needed to give a button a real icon at any ribbon size.',
      'bundle.yaml (or the __title__, __doc__, and __context__ special variables in script.py) controls the button\'s title, tooltip, and enable/disable context.',
      'The Reload button (or Ctrl+click Reload) re-scans the extension tree so new or restructured buttons appear without restarting Revit.',
    ],
    resource: { label: 'PyRevit Extension Folder Structure Cheat Sheet', type: 'PDF' },
    quiz: { label: 'Building Your First PyRevit Button Quiz', questions: 10, time: '5 min' },
    prev: { id: 'py-8', title: 'Reading & Writing Revit Parameters with Python' },
    next: { id: 'py-10', title: 'Error Handling & Debugging PyRevit Scripts' },
  },

  // ============================================================
  // LESSON PY-10 — Error Handling & Debugging PyRevit Scripts
  // ============================================================
  {
    id: 'py-10', num: '10',
    title: 'Error Handling & Debugging PyRevit Scripts',
    topic: 'Custom Tools', cat: 'intermediate', readTime: '9 min', free: false,
    desc: 'Learn how pyRevit surfaces errors, how to handle them gracefully with try/except and logging, and how to iterate quickly using the Reload workflow.',
    intro: `Scripts fail. The difference between a frustrating debugging session and a fast one comes down to how quickly you can see WHY something failed and HOW you iterate on a fix. pyRevit's output window gives you a full Python traceback the instant a script raises an unhandled exception — a much richer feedback loop than Dynamo\'s node-level error icons, which only tell you something went wrong, not exactly where or why. This lesson covers reading that traceback, structured logging, and presenting friendly errors to end users instead of raw stack traces.`,
    sections: [
      {
        id: 's1', heading: 'The Output Window and Automatic Tracebacks', level: 'h2',
        content: `Every pyRevit button run has an associated Output window, and when script.py raises an exception that is never caught, pyRevit automatically prints the full Python traceback into that window — including the exact file and line number where the failure occurred.`,
        items: [
          'The traceback shows the full call stack, so an error deep inside a helper function still reports which line in script.py originally called it',
          'This is a major advantage over Dynamo, where a failing node just shows a red error icon and a short message — pyRevit gives you the same rich detail you would get running the script directly in a terminal',
          'The Output window stays open after a run, so you can scroll back through previous runs\' output and tracebacks without re-running the script',
          'Reading the LAST few lines of a traceback first is usually the fastest path to the actual cause, since Python prints the deepest/most specific error at the bottom',
        ],
        formula: { label: 'Key Advantage', text: 'pyRevit shows file and line number on every unhandled exception automatically — no extra setup required to get this level of detail' },
      },
      {
        id: 's2', heading: 'try/except — Catching Errors Gracefully', level: 'h2',
        content: `Not every possible failure should crash the whole script with a raw traceback. Wrapping risky operations in a try/except block lets a script detect a problem, respond sensibly, and continue or exit cleanly.`,
        code: {
          label: 'Basic try/except Pattern',
          lines: [
            'try:',
            '    value = element.LookupParameter("Comments").AsString()',
            'except Exception as ex:',
            '    value = None',
            '    print("Could not read Comments: {}".format(ex))',
          ],
        },
        items: [
          'Catch the narrowest exception type you reasonably expect (e.g., a specific Revit API exception) rather than a bare except: whenever possible, so unrelated bugs are not silently swallowed',
          'A bare except: that hides ALL errors, including genuine bugs, makes debugging much harder later — use it sparingly and only as a last resort',
          'It is common to log the exception (see script.get_logger below) even when you also handle it gracefully, so the failure is still visible for review',
          'Wrapping an entire loop body in try/except lets one bad element get skipped without stopping processing of the other 499 elements in the collection',
        ],
      },
      {
        id: 's3', heading: 'Structured Logging with script.get_logger()', level: 'h2',
        content: `Beyond simple print statements, pyRevit provides a proper logging interface via script.get_logger(), giving you severity-tagged messages (info, debug, error) that are easier to scan and filter than plain print output.`,
        code: {
          label: 'Using script.get_logger()',
          lines: [
            'from pyrevit import script',
            '',
            'logger = script.get_logger()',
            '',
            'logger.info("Starting parameter update for {} elements".format(count))',
            'logger.debug("Processing element id: {}".format(el.Id))',
            'logger.error("Failed to set parameter on element {}".format(el.Id))',
          ],
        },
        items: [
          'logger.info — high-level progress messages meant for normal runs (e.g., "Processing 250 walls")',
          'logger.debug — fine-grained detail useful while developing, typically noisy enough to hide by default in production tools',
          'logger.error — a clear marker that something went wrong, distinct from normal informational output',
          'Structured logging scales far better than scattered print statements once a script grows past a few dozen lines',
        ],
        formula: { label: 'Logging vs. print', text: 'print is fine for a five-minute test — get_logger is worth adopting the moment a script is going to be reused or shared' },
      },
      {
        id: 's4', heading: 'forms.alert() — Friendly Errors for End Users', level: 'h2',
        content: `A raw Python traceback is exactly the right thing to see while YOU are developing a script, but it is the wrong thing to show a non-technical end user who just clicked a button expecting it to work. forms.alert() surfaces a clean, readable message instead.`,
        code: {
          label: 'Friendly Error with forms.alert()',
          lines: [
            'from pyrevit import forms',
            '',
            'try:',
            '    run_the_actual_logic()',
            'except Exception as ex:',
            '    forms.alert("Something went wrong: {}".format(ex), title="Tool Error")',
          ],
        },
        items: [
          'forms.alert() opens a simple pop-up dialog with a message string and an optional title — no WPF/XAML required',
          'Combine it with try/except around the whole script body so any unexpected failure ends in a readable message rather than a wall of traceback text',
          'For tools meant for other users on the team (not just yourself), a friendly forms.alert() plus a logged error behind the scenes gives both audiences what they need',
          'Do not over-use alert() for routine informational messages — reserve it for genuine errors or confirmations that need the user\'s attention',
        ],
      },
      {
        id: 's5', heading: 'The Edit-Reload-Click Debugging Loop', level: 'h2',
        content: `Fixing a bug in a pyRevit script follows the same short, fast loop regardless of what the bug is, and getting comfortable with this loop is most of what makes pyRevit development feel quick compared to compiled add-ins.`,
        items: [
          'Edit script.py in VS Code (or any text editor) and save the file',
          'Switch to Revit and click Reload on the pyRevit ribbon tab if you changed folder structure, bundle.yaml, or icon.png — a plain script.py logic edit does not require Reload',
          'Click the button again to re-run the (now fixed) script',
          'Check the Output window for the new traceback (if it still fails) or confirm the expected result (if it now works)',
          'Because script.py is read fresh on every click, there is no compile step and no need to restart Revit — this is the single biggest speed advantage over classic .NET Revit add-in development',
        ],
        formula: { label: 'The Loop', text: 'Edit in VS Code -> Save -> Reload only if structure changed -> Click button -> Read Output window -> repeat' },
      },
      {
        id: 's6', heading: 'Common Failure Categories to Recognize', level: 'h2',
        content: `A handful of error types show up constantly in pyRevit scripting, and recognizing them by shape saves time versus reading every traceback from scratch.`,
        subsections: [
          {
            heading: 'Frequent Error Patterns',
            items: [
              'AttributeError: \'NoneType\' object has no attribute... — usually means LookupParameter or a similar lookup returned None because the parameter name was misspelled or does not exist on that element',
              'InvalidOperationException from the Revit API — often means an operation was attempted outside of an active Transaction',
              'IndexError / out-of-range errors — a list was shorter than expected, commonly from an empty collector result nobody checked for',
              'Errors that only happen on SOME elements but not others — a strong signal to wrap the loop body in try/except and log which specific element failed, rather than assuming the whole approach is wrong',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'pyRevit\'s Output window automatically prints a full Python traceback with file and line number whenever script.py raises an unhandled exception.',
      'try/except lets a script catch expected failure points gracefully instead of crashing outright — catch specific exception types where possible rather than a bare except.',
      'script.get_logger() provides structured info/debug/error logging that scales better than scattered print statements as a tool grows.',
      'forms.alert() shows a clean, friendly message to end users instead of exposing a raw traceback, and pairs well with try/except around the whole script body.',
      'The core development loop is edit script.py, save, Reload only if structure/metadata changed, click the button, and read the Output window.',
      'Recognizing common error shapes (None attribute errors, transaction errors, empty collector results) speeds up debugging versus reading every traceback cold.',
    ],
    resource: { label: 'PyRevit Debugging & Logging Reference', type: 'PDF' },
    quiz: { label: 'Error Handling & Debugging Quiz', questions: 10, time: '5 min' },
    prev: { id: 'py-9', title: 'Building Your First Custom PyRevit Button' },
    next: { id: 'py-11', title: 'Collecting & Filtering Elements at Project Scale' },
  },

  // ============================================================
  // LESSON PY-11 — Collecting & Filtering Elements at Project Scale
  // ============================================================
  {
    id: 'py-11', num: '11',
    title: 'Collecting & Filtering Elements at Project Scale',
    topic: 'Collectors & Filters', cat: 'intermediate', readTime: '11 min', free: false,
    desc: 'Chain FilteredElementCollector calls with multiple filters for precise, high-performance queries, and choose between full elements and element IDs correctly.',
    intro: `A small test model tolerates a sloppy, unfiltered collector query without any noticeable delay. A real project model with tens of thousands of elements does not — an inefficient collection pattern that seemed instant in testing can make a production tool feel sluggish or even lock up Revit for tens of seconds. This lesson covers chaining precise filters together, why collecting once and reusing the result beats re-querying in a loop, and when to work with element IDs instead of fully loaded elements.`,
    sections: [
      {
        id: 's1', heading: 'Chaining Filters for Precision', level: 'h2',
        content: `FilteredElementCollector supports chaining multiple filter calls together, narrowing the result set at each step. Chaining is both more readable and more efficient than collecting broadly and filtering the results manually in Python afterward.`,
        code: {
          label: 'Chained Collector Example',
          lines: [
            'import Autodesk.Revit.DB as DB',
            '',
            'walls = (',
            '    DB.FilteredElementCollector(doc)',
            '    .OfCategory(DB.BuiltInCategory.OST_Walls)',
            '    .OfClass(DB.Wall)',
            '    .WhereElementIsNotElementType()',
            '    .ToElements()',
            ')',
          ],
        },
        items: [
          'OfCategory(...) narrows to a specific BuiltInCategory (e.g., OST_Walls, OST_Doors)',
          'OfClass(...) narrows to a specific Revit API class (e.g., DB.Wall, DB.FamilyInstance)',
          'WhereElementIsNotElementType() excludes type elements, keeping only placed instances — easy to forget, and a common source of "why do I have extra results" bugs',
          'Combining OfCategory and OfClass together is usually faster and more precise than either alone, since the collector can narrow using both constraints internally',
        ],
      },
      {
        id: 's2', heading: 'WherePasses and ElementParameterFilter', level: 'h2',
        content: `For filtering criteria that go beyond category and class — filtering by an actual parameter value — WherePasses accepts a filter object such as ElementParameterFilter, letting the filtering happen inside the collector itself rather than in a Python loop afterward.`,
        code: {
          label: 'WherePasses with a Parameter Filter',
          lines: [
            'param_id = DB.ElementId(DB.BuiltInParameter.ALL_MODEL_MARK)',
            'provider = DB.ParameterValueProvider(param_id)',
            'evaluator = DB.FilterStringEquals()',
            'rule = DB.FilterStringRule(provider, evaluator, "TBD")',
            'param_filter = DB.ElementParameterFilter(rule)',
            '',
            'flagged = (',
            '    DB.FilteredElementCollector(doc)',
            '    .OfCategory(DB.BuiltInCategory.OST_Doors)',
            '    .WherePasses(param_filter)',
            '    .ToElements()',
            ')',
          ],
        },
        formula: { label: 'Why Filter Inside the Collector', text: 'Letting Revit\'s own filtering engine evaluate the rule is significantly faster at scale than pulling every element into Python first and checking each one manually' },
      },
      {
        id: 's3', heading: 'Performance: Collect Once, Reuse the Result', level: 'h2',
        content: `A FilteredElementCollector query has real cost — it scans the model\'s element table. Running the same or a similar query repeatedly inside a loop, rather than once up front, is one of the most common performance mistakes in pyRevit scripts.`,
        items: [
          'Anti-pattern: re-running FilteredElementCollector(doc).OfCategory(...) inside a for-loop that iterates over some other list — this re-scans the whole model on every iteration',
          'Correct pattern: run the collector ONCE outside the loop, store the result in a Python list or dict, then loop over that stored result',
          'If you need to look up elements by category repeatedly across a script, consider collecting once per category at the top of the script and reusing those variables throughout',
          'For very large models, even a single unfiltered collector call (no OfCategory/OfClass at all) can be noticeably slow — always add the narrowest filter you can before calling ToElements()',
        ],
        formula: { label: 'Performance Rule', text: 'Collect once, reuse the result — never re-query the same collector inside a loop that runs many times' },
      },
      {
        id: 's4', heading: 'ToElements() vs. ToElementIds()', level: 'h2',
        content: `Every FilteredElementCollector chain ends with either ToElements() or ToElementIds(), and the choice matters for performance depending on what you actually need afterward.`,
        code: {
          label: 'Choosing the Right Output',
          lines: [
            'ToElements()    → returns fully loaded Element objects',
            '                  (needed when you will read geometry,',
            '                  parameters, or otherwise use the element',
            '                  itself downstream)',
            '',
            'ToElementIds()  → returns lightweight ElementId values only',
            '                  (cheaper when you only need a COUNT,',
            '                  need to pass IDs into another API call,',
            '                  or will look elements up later by ID)',
          ],
        },
        items: [
          'ToElementIds() avoids the overhead of fully materializing every element object, which matters when a collector may match thousands of elements',
          'Many Revit API calls (e.g., a Selection, a Transaction group operation) are happy to accept a collection of ElementId values directly, with no need to ever load the full Element',
          'If all you need is len(collector.ToElementIds()) for a count, materializing full elements with ToElements() first is wasted work',
          'When in doubt: if the next step needs to read the element\'s data, use ToElements(); if the next step just needs to reference or count elements, use ToElementIds()',
        ],
        formula: { label: 'Decision Rule', text: 'Need to read/use the element itself -> ToElements() | Only need to count, reference, or pass IDs onward -> ToElementIds()' },
      },
      {
        id: 's5', heading: 'Combining Collectors with LINQ-Style Set Logic', level: 'h2',
        content: `Beyond WherePasses, the Revit API exposes set-style combination logic (via .NET\'s underlying collection support) for combining the results of two separate collector queries — useful when a condition cannot be expressed as a single chained filter.`,
        items: [
          'Two independently collected result sets can be intersected, unioned, or excluded from each other using standard Python set operations once converted to element ID sets',
          'Example: elements that are BOTH in category A\'s collector result AND in a manually built list of "flagged" IDs from a previous script step — convert both to sets of ElementId and intersect them',
          'This is often simpler and more readable than trying to build one enormous single ElementParameterFilter expression for a complex condition',
          'Keep such combination logic in Python after conversion to IDs; do not try to combine collector OBJECTS directly with Python operators, since they are not sets themselves',
        ],
      },
      {
        id: 's6', heading: 'A Full Worked Example', level: 'h2',
        content: `Putting the lesson together: find every door instance on Level 2 that is missing a Comments value, returning just the count first (cheap), then the full elements only if any are found (only pay for ToElements() when needed).`,
        code: {
          label: 'Worked Example',
          lines: [
            'doors_ids = (',
            '    DB.FilteredElementCollector(doc)',
            '    .OfCategory(DB.BuiltInCategory.OST_Doors)',
            '    .WhereElementIsNotElementType()',
            '    .ToElementIds()',
            ')',
            '',
            'print("Total doors in model: {}".format(len(doors_ids)))',
            '',
            'if len(doors_ids) > 0:',
            '    doors = [doc.GetElement(eid) for eid in doors_ids]',
            '    missing_comments = [',
            '        d for d in doors',
            '        if not d.LookupParameter("Comments").AsString()',
            '    ]',
            '    print("Doors missing Comments: {}".format(len(missing_comments)))',
          ],
        },
      },
    ],
    takeaways: [
      'Chaining OfCategory, OfClass, and WhereElementIsNotElementType narrows a FilteredElementCollector precisely and efficiently in one query.',
      'WherePasses with an ElementParameterFilter lets Revit\'s own filtering engine evaluate parameter-based conditions inside the collector, faster than filtering in a Python loop afterward.',
      'Collect once and reuse the result — re-running a collector query inside a loop that executes many times is a common and avoidable performance mistake.',
      'ToElementIds() is cheaper than ToElements() when you only need a count or IDs for further ID-based operations, since it skips fully loading each element.',
      'Use ToElements() only when the next step actually needs to read or modify the element\'s own data.',
      'Complex multi-source conditions are often easier to express by converting collector results to Python sets of ElementId and using set operations, rather than one giant filter expression.',
    ],
    resource: { label: 'FilteredElementCollector Performance Guide', type: 'PDF' },
    quiz: { label: 'Collecting & Filtering Elements Quiz', questions: 10, time: '5 min' },
    prev: { id: 'py-10', title: 'Error Handling & Debugging PyRevit Scripts' },
    next: { id: 'py-12', title: 'Creating & Modifying Elements with the Revit API' },
  },

  // ============================================================
  // LESSON PY-12 — Creating & Modifying Elements with the Revit API
  // ============================================================
  {
    id: 'py-12', num: '12',
    title: 'Creating & Modifying Elements with the Revit API',
    topic: 'Collectors & Filters', cat: 'intermediate', readTime: '11 min', free: false,
    desc: 'Create new Revit elements through the API, modify existing ones, and understand the collect-or-create, mutate, commit transaction pattern behind every write operation.',
    intro: `Reading data from a model is useful, but the real power of pyRevit scripting is writing to it — placing new elements, adjusting geometry, and updating parameters at a scale no one would do by hand. Every one of those operations, without exception, must happen inside a Transaction. This lesson covers the API calls for creating and modifying elements, and the general "collect existing OR create new, mutate, commit" pattern that almost every model-editing pyRevit script follows.`,
    sections: [
      {
        id: 's1', heading: 'The revit.Transaction Context Manager', level: 'h2',
        content: `pyRevit provides a Python context manager, revit.Transaction, that wraps the Revit API\'s native transaction handling in clean, idiomatic Python — using a with block instead of manually calling Start() and Commit().`,
        code: {
          label: 'revit.Transaction Pattern',
          lines: [
            'from pyrevit import revit',
            'import Autodesk.Revit.DB as DB',
            '',
            'with revit.Transaction("Create Family Instance"):',
            '    doc.Create.NewFamilyInstance(point, family_type, level, structural_type)',
          ],
        },
        items: [
          'The string passed to revit.Transaction (e.g., "Create Family Instance") becomes the label shown in Revit\'s Undo history — always use a clear, descriptive name',
          'Everything inside the with block is committed together as a single Revit transaction, or rolled back together if an exception is raised inside it',
          'Any element creation or modification call MUST happen inside a transaction — calling doc.Create.* or setting a parameter outside of one raises an error immediately',
          'Multiple separate edits (placing several elements, then setting parameters on them) can share one transaction block for a single combined Undo step',
        ],
        formula: { label: 'Core Rule', text: 'No write to the Revit document happens outside a Transaction — this is non-negotiable in the Revit API' },
      },
      {
        id: 's2', heading: 'Creating New Family Instances', level: 'h2',
        content: `doc.Create.NewFamilyInstance(...) is one of the most commonly used creation calls, placing a new instance of a loaded Family Type at a location, similar in spirit to Dynamo\'s FamilyInstance.ByPoint but with the full detail of the raw API.`,
        code: {
          label: 'NewFamilyInstance Example',
          lines: [
            'point = DB.XYZ(10.0, 5.0, 0.0)',
            'family_symbol = # ...obtained from a collector, then activated if needed',
            '',
            'if not family_symbol.IsActive:',
            '    family_symbol.Activate()',
            '',
            'with revit.Transaction("Place Instance"):',
            '    new_instance = doc.Create.NewFamilyInstance(',
            '        point, family_symbol, level, DB.Structure.StructuralType.NonStructural',
            '    )',
          ],
        },
        items: [
          'A FamilySymbol (Family Type) must be Activate()-d before it can be placed if it has never been used in the model yet — an easy step to forget',
          'Category-specific creation methods exist for some element types (e.g., NewWall, NewViewPlan) — check the category\'s dedicated method before defaulting to the generic NewFamilyInstance',
          'Host-based families (doors, windows) typically need an overload that accepts a host element, not just a bare point, mirroring the same distinction covered for Dynamo placement nodes',
        ],
      },
      {
        id: 's3', heading: 'Modifying Existing Elements — Geometry and Location', level: 'h2',
        content: `Elements already placed in the model expose a Location property that can be read and, inside a transaction, moved or rotated directly through the API.`,
        code: {
          label: 'Moving an Element',
          lines: [
            'from Autodesk.Revit.DB import XYZ',
            '',
            'with revit.Transaction("Move Element"):',
            '    move_vector = XYZ(2.0, 0.0, 0.0)',
            '    DB.ElementTransformUtils.MoveElement(doc, element.Id, move_vector)',
          ],
        },
        items: [
          'ElementTransformUtils.MoveElement and .RotateElement operate on an ElementId and a transform value, and must run inside a transaction like any other write',
          'Location.Point and Location.Curve (depending on element type) expose the current position directly for reading before deciding how to move something',
          'Bulk-moving a list of elements by the same vector is simply looping the same MoveElement call across every ElementId, still inside a single shared transaction',
        ],
      },
      {
        id: 's4', heading: 'Modifying Parameters (Recap and Extension)', level: 'h2',
        content: `Parameter writes follow the exact same transaction requirement as element creation — LookupParameter(...).Set(...) must always be called inside a with revit.Transaction(...) block, extending what was covered when reading and writing parameters earlier in this course.`,
        items: [
          'element.LookupParameter("Comments").Set("Reviewed") only succeeds inside an open transaction',
          'Type parameters, once again, affect every instance of that type — the transaction commits the change everywhere at once, with a single Undo covering all affected instances',
          'Batch parameter edits across a collected list of elements are typically wrapped in ONE transaction for the whole batch, not one transaction per element, both for performance and for a single clean Undo step',
        ],
        formula: { label: 'Batching Reminder', text: 'One transaction wrapping a whole loop of edits is both faster and safer for Undo than opening a new transaction per element' },
      },
      {
        id: 's5', heading: 'The Collect-or-Create, Mutate, Commit Pattern', level: 'h2',
        content: `Nearly every pyRevit script that changes a model follows the same three-part shape, regardless of whether it is creating brand-new elements or editing existing ones.`,
        code: {
          label: 'The General Pattern',
          lines: [
            'STEP 1 — COLLECT OR CREATE',
            '  Either gather existing elements with FilteredElementCollector,',
            '  or prepare the inputs (point, type, level) needed to create new ones.',
            '',
            'STEP 2 — MUTATE',
            '  Decide, in plain Python, what needs to change: which parameter,',
            '  which position, which new element to add.',
            '',
            'STEP 3 — COMMIT',
            '  Wrap the actual Revit API write calls in a single',
            '  revit.Transaction(...) block so the change commits atomically.',
          ],
        },
        formula: { label: 'Why Separate the Steps', text: 'Deciding WHAT to change (pure Python, no transaction needed) separately from COMMITTING the change (inside a transaction) keeps scripts easier to debug — you can print/inspect the planned changes before ever touching the model' },
      },
      {
        id: 's6', heading: 'Error Safety Inside Transactions', level: 'h2',
        content: `Because revit.Transaction is a context manager, an unhandled exception raised inside the with block causes the transaction to roll back rather than leaving the model half-modified — but it is still worth understanding what that guarantees and what it does not.`,
        items: [
          'If your script raises partway through a loop inside one shared transaction, none of that transaction\'s changes are committed — the whole batch rolls back together',
          'This is a good reason to keep validation and error-prone logic (parsing external data, computing values) OUTSIDE the transaction block wherever possible, so the transaction only contains the actual, already-validated writes',
          'Wrapping risky per-element logic in its own try/except INSIDE the loop (as covered in the debugging lesson) lets you skip a single bad element without losing the whole batch\'s progress',
          'Always verify the model state after a script that errored, even though transactions are designed to roll back cleanly',
        ],
      },
    ],
    takeaways: [
      'revit.Transaction(...) is pyRevit\'s Python context manager wrapping the Revit API\'s native transaction handling in a clean with block.',
      'Every element creation or modification call, including doc.Create.NewFamilyInstance and parameter Set() calls, must happen inside a transaction.',
      'A FamilySymbol must be Activate()-d before first placement if it has never been used in the model.',
      'ElementTransformUtils.MoveElement and RotateElement modify existing element positions inside a transaction using an ElementId and a transform.',
      'The general pattern for model-editing scripts is collect existing or prepare new inputs, decide what to mutate in plain Python, then commit the actual writes inside one shared transaction.',
      'An unhandled exception inside a transaction rolls the whole block back, so keeping error-prone logic outside the transaction and using per-element try/except inside loops protects partial progress.',
    ],
    resource: { label: 'Revit API Create & Modify Pattern Guide', type: 'PDF' },
    quiz: { label: 'Creating & Modifying Elements Quiz', questions: 10, time: '5 min' },
    prev: { id: 'py-11', title: 'Collecting & Filtering Elements at Project Scale' },
    next: { id: 'py-13', title: 'Building UI Forms — Input Dialogs & User Interaction' },
  },

  // ============================================================
  // LESSON PY-13 — Building UI Forms — Input Dialogs & User Interaction
  // ============================================================
  {
    id: 'py-13', num: '13',
    title: 'Building UI Forms — Input Dialogs & User Interaction',
    topic: 'UI & Forms', cat: 'intermediate', readTime: '10 min', free: false,
    desc: 'Use the pyrevit.forms module to build real interactive tools — text prompts, selection lists, file pickers, progress bars, and quick switch menus — without writing WPF or XAML.',
    intro: `A script that only ever does the exact same thing every time it runs is limited. Real tools need to ask the user something: which wall type, which file to export to, which of these ten options applies right now. Building a custom WPF/XAML dialog from scratch for every one of these questions would be a huge amount of overhead for a simple prompt. The pyrevit.forms module solves this — it provides a set of ready-made, good-looking dialogs covering the vast majority of what a pyRevit tool needs to ask a user, with a single function call each.`,
    sections: [
      {
        id: 's1', heading: 'forms.ask_for_string() — Simple Text Input', level: 'h2',
        content: `The simplest interactive prompt: ask the user to type a short piece of text and get it back as a plain Python string.`,
        code: {
          label: 'ask_for_string() Example',
          lines: [
            'from pyrevit import forms',
            '',
            'new_prefix = forms.ask_for_string(',
            '    default="L2-",',
            '    prompt="Enter a prefix to apply to all selected room numbers:",',
            '    title="Room Number Prefix"',
            ')',
          ],
        },
        items: [
          'default pre-fills the input box, useful for the most common expected answer',
          'Returns None if the user cancels the dialog — always check for this before using the result',
          'Good for short, single-value inputs like a prefix, a search term, or a single number entered as text',
        ],
      },
      {
        id: 's2', heading: 'forms.SelectFromList.show() — Choosing From Options', level: 'h2',
        content: `When the user needs to pick one or more items from a known list — wall types, levels, view names — SelectFromList.show() presents a searchable, checkbox-capable list dialog.`,
        code: {
          label: 'SelectFromList.show() Example',
          lines: [
            'options = ["Level 1", "Level 2", "Level 3", "Roof"]',
            '',
            'selected_levels = forms.SelectFromList.show(',
            '    options,',
            '    title="Select Levels to Process",',
            '    multiselect=True',
            ')',
          ],
        },
        items: [
          'multiselect=True allows checking multiple items, returning a Python list of the selected values',
          'multiselect=False (the default) returns a single selected value instead of a list',
          'The list can be built from anything — hardcoded strings, or dynamically from a collector query (e.g., all distinct Level names currently in the model)',
          'Returns None (or an empty result) on cancel — always guard against that before proceeding',
        ],
      },
      {
        id: 's3', heading: 'File Pickers — pick_file() and save_file()', level: 'h2',
        content: `For any workflow that reads from or writes to an external file — a CSV export, a lookup spreadsheet, a settings file — forms.pick_file() and forms.save_file() open native file dialogs and return a path string.`,
        items: [
          'forms.pick_file() opens an "Open File" dialog and returns the chosen path, or None if cancelled; optionally restrict by file extension',
          'forms.save_file() opens a "Save As" dialog, letting the user choose a destination path and filename for output the script is about to write',
          'Both return plain path strings, ready to pass directly into standard Python file-handling code (open(), the csv module, etc.)',
          'Preferable to hardcoding a fixed file path in a shared tool, since different users will have different folder structures on their machines',
        ],
        formula: { label: 'Pattern', text: 'pick_file() for reading external input | save_file() for choosing where script output should go' },
      },
      {
        id: 's4', heading: 'forms.alert() — Messages and Confirmations', level: 'h2',
        content: `Already introduced for friendly error handling, forms.alert() is equally useful for simple confirmations and informational messages at any point in a script, not just for errors.`,
        items: [
          'A plain forms.alert("message") shows an OK-only informational dialog',
          'forms.alert("Are you sure?", yes=True, no=True) can be used to ask a yes/no confirmation before a destructive bulk operation, returning True or False',
          'Use sparingly — a script that pops up an alert after every minor step becomes annoying rather than helpful',
          'A confirmation alert before any bulk delete or bulk overwrite operation is good practice, giving the user one last chance to cancel',
        ],
      },
      {
        id: 's5', heading: 'forms.ProgressBar() — Feedback During Long Loops', level: 'h2',
        content: `Any script that loops over hundreds or thousands of elements benefits from visible progress feedback, so the user knows the tool is working rather than assuming it has frozen. forms.ProgressBar() provides this with only a couple of extra lines.`,
        code: {
          label: 'ProgressBar Example',
          lines: [
            'from pyrevit import forms',
            '',
            'items = list(range(500))',
            '',
            'with forms.ProgressBar(title="Processing elements...") as pb:',
            '    for i, item in enumerate(items):',
            '        # ... do the actual work for this item ...',
            '        pb.update_progress(i + 1, len(items))',
          ],
        },
        items: [
          'update_progress(current, total) updates both the visible bar and the percentage text shown to the user',
          'Wrapping the ProgressBar in a with block ensures it closes automatically once the loop finishes, even if an exception occurs',
          'For scripts that may run for more than a second or two, a ProgressBar meaningfully improves the perceived quality of the tool',
        ],
      },
      {
        id: 's6', heading: 'forms.CommandSwitchWindow.show() — Quick Multiple Choice', level: 'h2',
        content: `When a script needs the user to pick between a small number of named actions or modes — rather than a long searchable list — CommandSwitchWindow.show() presents a clean row of large labelled buttons, one click per option.`,
        code: {
          label: 'CommandSwitchWindow Example',
          lines: [
            'switches = ["By Level", "By Department", "By Selection"]',
            '',
            'selected_switch = forms.CommandSwitchWindow.show(',
            '    switches,',
            '    message="How should rooms be grouped?"',
            ')',
          ],
        },
        items: [
          'Best suited to a small, fixed number of clearly named choices (a handful of modes), rather than a long or dynamic list — use SelectFromList for that case instead',
          'Returns the chosen string directly (or None on cancel), ready to branch on with a simple if/elif chain',
          'Reads visually more like a friendly "pick a mode" menu than a dropdown, which suits tools meant to be used by less technical teammates',
        ],
      },
      {
        id: 's7', heading: 'Why This Matters — No WPF/XAML Required', level: 'h2',
        content: `Every one of the dialogs above is a genuinely interactive, good-looking piece of UI, and none of them required writing a single line of WPF markup, XAML, or manually wiring up .NET UI events. This is one of pyRevit\'s biggest productivity advantages over building a classic compiled Revit add-in.`,
        items: [
          'A classic .NET Revit add-in with the same functionality would typically require a separate XAML file, code-behind, and a compiled UI event-handling class per dialog',
          'pyRevit reduces each of those to a single function call with plain Python arguments, callable directly from script.py',
          'This lets a pyRevit tool go from "runs the same way every time" to "asks the user what it needs to know" in a few extra lines, keeping development fast and interactive',
          'Combining several of these in one script (a SelectFromList, then a ProgressBar while processing the selection) is a common and effective real-world pattern',
        ],
        formula: { label: 'Core Value', text: 'pyrevit.forms turns UI that would take hours of XAML/WPF work into a single Python function call' },
      },
    ],
    takeaways: [
      'forms.ask_for_string() prompts for a single line of text and returns it as a string, or None if cancelled.',
      'forms.SelectFromList.show(options, multiselect=True) lets a user pick one or many items from a searchable list.',
      'forms.pick_file() and forms.save_file() open native file dialogs and return a path string for reading or writing external files.',
      'forms.alert() covers both simple informational messages and yes/no confirmations before risky bulk operations.',
      'forms.ProgressBar() gives visible feedback during long loops via update_progress(current, total), best used inside a with block.',
      'forms.CommandSwitchWindow.show() presents a small, fixed set of named choices as clickable buttons, ideal for quick mode-selection prompts.',
    ],
    resource: { label: 'pyrevit.forms Module Quick Reference', type: 'PDF' },
    quiz: { label: 'Building UI Forms Quiz', questions: 10, time: '5 min' },
    prev: { id: 'py-12', title: 'Creating & Modifying Elements with the Revit API' },
    next: { id: 'py-14', title: 'Working with Views, Sheets & Viewports in PyRevit' },
  },

  // ============================================================
  // LESSON PY-14 — Working with Views, Sheets & Viewports in PyRevit
  // ============================================================
  {
    id: 'py-14', num: '14',
    title: 'Working with Views, Sheets & Viewports in PyRevit',
    topic: 'UI & Forms', cat: 'intermediate', readTime: '10 min', free: false,
    desc: 'Create views and sheets through the Revit API, place views onto sheets with Viewport.Create, and rename views and sheets correctly using their properties versus their parameters.',
    intro: `Documentation setup — creating views, building sheets, placing views correctly, and numbering everything consistently — is one of the most repetitive parts of any project, and exactly the kind of task pyRevit scripting eliminates almost entirely. This lesson covers the direct Revit API calls behind view and sheet creation, how a view actually gets placed onto a sheet, and an important subtlety: some naming properties are set directly, while others require going through the Parameter system.`,
    sections: [
      {
        id: 's1', heading: 'Creating Views — DB.ViewPlan.Create', level: 'h2',
        content: `DB.ViewPlan.Create(doc, viewFamilyTypeId, levelId) creates a new plan view for a given level, using a specified View Family Type (which controls things like the view\'s default scale and detail level template).`,
        code: {
          label: 'Creating a New Plan View',
          lines: [
            'with revit.Transaction("Create Level 2 Plan"):',
            '    new_view = DB.ViewPlan.Create(doc, view_family_type_id, level_id)',
          ],
        },
        items: [
          'viewFamilyTypeId must reference a ViewFamilyType that matches the kind of view being created (e.g., a Floor Plan type, not a Section type)',
          'View Family Types are typically retrieved with a FilteredElementCollector filtered OfClass(DB.ViewFamilyType), then filtered further by their ViewFamily property',
          'Like all element creation, this must happen inside a revit.Transaction block',
          'Once created, the new view behaves like any other View element for further parameter reads/writes',
        ],
      },
      {
        id: 's2', heading: 'Creating Sheets — DB.ViewSheet.Create', level: 'h2',
        content: `DB.ViewSheet.Create(doc, titleblockTypeId) creates a new, empty sheet using a specified titleblock Family Type. The sheet exists but has no views placed on it yet immediately after this call.`,
        code: {
          label: 'Creating a New Sheet',
          lines: [
            'with revit.Transaction("Create Sheet"):',
            '    new_sheet = DB.ViewSheet.Create(doc, titleblock_type_id)',
            '    new_sheet.SheetNumber = "A-201"',
            '    new_sheet.Name = "Level 2 Floor Plan"',
          ],
        },
        items: [
          'titleblockTypeId must reference a loaded titleblock family type, obtained the same way as any other FamilySymbol/FamilyType — via a collector, then activated if never used before',
          'A brand-new sheet has a default, auto-generated Sheet Number that should almost always be overwritten immediately to match a project\'s numbering scheme',
          'Creating the sheet and placing views onto it are two separate steps — Viewport.Create (below) handles the actual placement',
        ],
      },
      {
        id: 's3', heading: 'Placing a View on a Sheet — DB.Viewport.Create', level: 'h2',
        content: `DB.Viewport.Create(doc, sheetId, viewId, point) places an existing view onto an existing sheet at a specified point (the location of the viewport\'s center or origin, depending on the view\'s crop region).`,
        code: {
          label: 'Placing a View onto a Sheet',
          lines: [
            'placement_point = DB.XYZ(1.0, 1.0, 0.0)',
            '',
            'with revit.Transaction("Place View on Sheet"):',
            '    viewport = DB.Viewport.Create(',
            '        doc, new_sheet.Id, new_view.Id, placement_point',
            '    )',
          ],
        },
        items: [
          'A view can only be placed on ONE sheet at a time — attempting to place a view that is already on a sheet raises an error',
          'The point argument positions the viewport on the sheet in the sheet\'s own coordinate system, not the model\'s coordinate system',
          'Viewport.Create, ViewSheet.Create, and ViewPlan.Create are commonly chained together in the same transaction to create a full sheet in one operation: create the view, create the sheet, place the view',
        ],
        formula: { label: 'Order of Operations', text: 'Create the view first -> create the sheet -> then call Viewport.Create to link them together — a view cannot be placed before both it and the sheet exist' },
      },
      {
        id: 's4', heading: 'Renaming Views — the .Name Property', level: 'h2',
        content: `A View element exposes its display name directly through a settable .Name property, making renaming straightforward — but still requiring a transaction like any other write.`,
        code: {
          label: 'Renaming a View',
          lines: [
            'with revit.Transaction("Rename View"):',
            '    new_view.Name = "L2 - Furniture Plan"',
          ],
        },
        items: [
          'Setting .Name directly raises an error if another view in the model already has that exact name — Revit enforces unique view names',
          'Wrap renaming logic in try/except if processing many views in a loop, so one naming collision does not stop the whole batch',
          'Unlike some parameters, .Name here is a genuine settable property on the object, not something that needs LookupParameter',
        ],
      },
      {
        id: 's5', heading: 'Renaming Sheets — .Name and SheetNumber vs. Parameters', level: 'h2',
        content: `Sheets are a useful lesson in a subtlety that trips up a lot of new API scripts: some naming-related properties are directly settable on the object, while others must be accessed through the Parameter system instead.`,
        code: {
          label: 'Directly Settable vs. Parameter-Based',
          lines: [
            'DIRECTLY SETTABLE (works as a plain property):',
            '  new_sheet.Name = "Level 2 Floor Plan"    # Sheet Name',
            '  new_sheet.SheetNumber = "A-201"          # Sheet Number',
            '',
            'REQUIRES PARAMETER ACCESS (not a plain settable property):',
            '  new_sheet.LookupParameter("Approved By").Set("J. Smith")',
            '  new_sheet.LookupParameter("Drawn By").Set("D. Park")',
          ],
        },
        items: [
          'Sheet Name and Sheet Number happen to be exposed as convenient direct properties on ViewSheet, unlike most other Revit data',
          'Every other piece of sheet metadata — Drawn By, Checked By, Approved By, any custom shared parameter — still requires LookupParameter(...).Set(...) exactly as covered in earlier parameter lessons',
          'Always check whether the Revit API class exposes a direct property before assuming LookupParameter is required — checking the API documentation (or experimenting with Element.Parameters-equivalent inspection) saves time',
          'This same distinction applies elsewhere in the API — some element data is a "real" .NET property, some is only reachable as a Parameter, and there is no single universal rule other than checking each class',
        ],
        formula: { label: 'Practical Rule', text: 'Try the direct property first (.Name, .SheetNumber) — if it does not exist on the class, fall back to LookupParameter(...).Set(...)' },
      },
      {
        id: 's6', heading: 'A Full Worked Example — View, Sheet, and Placement Together', level: 'h2',
        content: `Combining everything in this lesson into one transaction: create a plan view for Level 2, create a new sheet, place the view on it, and set both names/numbers in a single script run.`,
        code: {
          label: 'Full Create-Sheet Workflow',
          lines: [
            'with revit.Transaction("Create Level 2 Sheet"):',
            '    new_view = DB.ViewPlan.Create(doc, plan_vft_id, level2_id)',
            '    new_view.Name = "L2 - Furniture Plan"',
            '',
            '    new_sheet = DB.ViewSheet.Create(doc, titleblock_type_id)',
            '    new_sheet.SheetNumber = "A-201"',
            '    new_sheet.Name = "Level 2 Floor Plan"',
            '',
            '    DB.Viewport.Create(doc, new_sheet.Id, new_view.Id, DB.XYZ(1.0, 1.0, 0.0))',
          ],
        },
      },
    ],
    takeaways: [
      'DB.ViewPlan.Create(doc, viewFamilyTypeId, levelId) creates a new plan view for a given level using a specified View Family Type, inside a transaction.',
      'DB.ViewSheet.Create(doc, titleblockTypeId) creates a new empty sheet from a titleblock Family Type; SheetNumber and Name should be set immediately afterward.',
      'DB.Viewport.Create(doc, sheetId, viewId, point) places an existing view onto an existing sheet — a view can only be placed on one sheet at a time.',
      'View.Name is a directly settable property, and setting it to a name already used elsewhere raises an error since view names must be unique.',
      'ViewSheet.Name and .SheetNumber are directly settable properties, but most other sheet metadata still requires LookupParameter(...).Set(...).',
      'Always check whether a class exposes a direct settable property before defaulting to LookupParameter — some Revit API data is a real property, and some is only reachable as a Parameter.',
    ],
    resource: { label: 'Views, Sheets & Viewports API Reference', type: 'PDF' },
    quiz: { label: 'Views, Sheets & Viewports Quiz', questions: 10, time: '5 min' },
    prev: { id: 'py-13', title: 'Building UI Forms — Input Dialogs & User Interaction' },
    next: { id: 'py-15', title: 'Reading & Writing Excel Data from PyRevit Scripts' },
  },

  // ============================================================
  // LESSON PY-15 — Reading & Writing Excel Data from PyRevit Scripts
  // ============================================================
  {
    id: 'py-15', num: '15',
    title: 'Reading & Writing Excel Data from PyRevit Scripts',
    topic: 'Data Exchange', cat: 'intermediate', readTime: '9 min', free: false,
    desc: 'Exchange data between pyRevit scripts and spreadsheets using the built-in csv module for simplicity, or a CPython engine with openpyxl when true Excel formatting is required.',
    intro: `Excel remains the format everyone on a project already understands, and pyRevit scripts frequently need to either export model data out for review or read externally-prepared data back in. Because IronPython can reference .NET libraries directly, several routes exist for this — but the simplest, most dependency-free option is usually Python\'s own built-in csv module, which works identically under IronPython with zero extra setup. This lesson covers when CSV is the right choice, when you actually need Excel-specific functionality, and how pyRevit 5\'s per-script CPython engine option opens the door to libraries like openpyxl when you truly need them.`,
    sections: [
      {
        id: 's1', heading: 'Why CSV Is Usually the Right Default', level: 'h2',
        content: `Python\'s built-in csv module ships with every Python installation, including IronPython, and requires no additional packages, no .NET interop, and no COM automation to read or write plain comma-separated data files.`,
        code: {
          label: 'Writing a CSV File',
          lines: [
            'import csv',
            '',
            'rows = [',
            '    ["Element Id", "Name", "Comments"],',
            '    ["123456", "Door-01", "Verify Fire Rating"],',
            '    ["123457", "Door-02", "Verify Fire Rating"],',
            ']',
            '',
            'with open(r"C:\\exports\\door_report.csv", "wb") as f:',
            '    writer = csv.writer(f)',
            '    writer.writerows(rows)',
          ],
        },
        items: [
          'No extra dependency to install or manage — csv is part of the Python standard library available to IronPython out of the box',
          'Opens instantly in Excel, Google Sheets, or any text editor, and is simple to hand off to non-technical teammates or other software',
          'The clear tradeoff: no support for multiple worksheets, formulas, cell formatting, or colors — a CSV file is just plain rows of text',
          'For a script whose only job is exporting a flat table of data or reading one back in, CSV is almost always sufficient and by far the least fragile option',
        ],
        formula: { label: 'Default Recommendation', text: 'Reach for csv first — only add Excel-specific tooling once you actually need a feature CSV cannot provide' },
      },
      {
        id: 's2', heading: 'Reading a CSV File Back In', level: 'h2',
        content: `Reading follows the same standard-library pattern, returning each row as a list of string values — ready to match back against Revit elements the same way the Excel round-trip pattern works in Dynamo.`,
        code: {
          label: 'Reading a CSV File',
          lines: [
            'import csv',
            '',
            'with open(r"C:\\exports\\door_report.csv", "rb") as f:',
            '    reader = csv.reader(f)',
            '    header = next(reader)',
            '    rows = list(reader)',
            '',
            'for row in rows:',
            '    element_id_str, name, comments = row',
            '    # ... match element_id_str back to a Revit ElementId and update it ...',
          ],
        },
        items: [
          'All values come back as plain strings — numeric columns need explicit conversion (int(), float()) before use',
          'As with any round-trip workflow, match rows back to Revit elements using a stable identifier column (e.g., Element Id), never by row position alone',
          'csv.DictReader is a useful alternative when you would rather access columns by header name than by position',
        ],
      },
      {
        id: 's3', heading: 'When You Actually Need Real Excel Features', level: 'h2',
        content: `CSV cannot represent multiple worksheets, cell formatting, formulas, or merged cells. When a workflow genuinely requires one of those — say, writing a formatted, multi-tab report rather than a plain data dump — a true Excel library or interop approach is warranted instead.`,
        subsections: [
          {
            heading: 'Approaches for True Excel Output',
            items: [
              'openpyxl — a full-featured Python Excel library supporting formatting, multiple sheets, and formulas; available when a script runs under pyRevit\'s CPython engine rather than the default IronPython engine',
              '.NET Excel interop / COM automation — driving an actual installed copy of Excel via COM from IronPython; powerful but slower, and requires Excel itself to be installed on the machine running the script',
              'For most day-to-day data exchange, neither of these is necessary — they add real complexity and should be reserved for genuinely formatting-dependent output',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'pyRevit 5\'s Per-Script CPython Engine', level: 'h2',
        content: `Historically, pyRevit scripts ran exclusively under IronPython, which cannot import full CPython-only libraries like openpyxl or pandas. pyRevit 5 introduced the ability to select the CPython engine on a per-script basis, unlocking the entire CPython package ecosystem for scripts that specifically need it.`,
        code: {
          label: 'Requesting the CPython Engine (bundle.yaml)',
          lines: [
            'engine: cpython3',
          ],
        },
        items: [
          'Set via the script\'s bundle.yaml with an engine: cpython3 entry, switching that specific button\'s script.py to run under a bundled CPython interpreter instead of IronPython',
          'Once running under CPython, a script can import real CPython-only libraries such as openpyxl or pandas, provided they are installed in that CPython environment',
          'Not every script needs this — most parameter and collector work runs fine under the default IronPython engine, and switching engines adds a small amount of startup overhead',
          'Reserve the CPython engine for scripts that specifically need a CPython-only library; keep everything else on the default engine for simplicity and speed',
        ],
        formula: { label: 'When to Reach for CPython', text: 'Only switch engines when a script needs a genuine CPython library like openpyxl or pandas — plain CSV reading/writing needs no engine change at all' },
      },
      {
        id: 's5', heading: 'Choosing the Right Approach for the Job', level: 'h2',
        content: `Putting the options side by side makes the decision straightforward for almost any given script.`,
        items: [
          'Plain data export/import, no formatting needed -> csv module, IronPython default engine, zero extra setup',
          'Need multiple sheets, formatting, or formulas, and openpyxl is available -> switch that script to engine: cpython3 and use openpyxl',
          'Need to drive an actual open Excel session (e.g., trigger a macro) -> COM interop, accepting the added complexity and the requirement that Excel be installed',
          'Unsure which to pick -> start with csv; only move to a heavier approach once a concrete feature gap appears',
        ],
      },
      {
        id: 's6', heading: 'Round-Trip Safety Still Applies', level: 'h2',
        content: `Regardless of which file format or library is used, the same round-trip safeguards from earlier data-exchange lessons still apply in full — the technology changes, the discipline does not.`,
        items: [
          'Always include a stable identifier column (Element Id) in any export meant to be re-imported later',
          'Never match re-imported rows back to elements by row position — rows can be reordered externally between export and import',
          'Test any round-trip script on a small subset of elements before running it against a whole model',
          'Be explicit about data types on re-import — CSV in particular returns everything as strings, so numeric and boolean values need deliberate conversion before being written back as parameters',
        ],
      },
    ],
    takeaways: [
      'Python\'s built-in csv module works identically under IronPython with no extra dependencies, making it the simplest default for data exchange.',
      'csv.writer and csv.reader (or csv.DictReader) handle writing and reading rows of plain text data for round-tripping with Revit elements.',
      'CSV cannot represent multiple worksheets, formatting, or formulas — real Excel-specific features require a genuine Excel library or interop approach instead.',
      'pyRevit 5 supports a per-script CPython engine, set via bundle.yaml with engine: cpython3, unlocking full CPython libraries like openpyxl or pandas.',
      'Reserve the CPython engine switch for scripts that specifically need a CPython-only library; most scripts run fine on the default IronPython engine.',
      'Round-trip safeguards — stable identifier columns, no row-position matching, small-subset testing — apply regardless of whether CSV, openpyxl, or COM interop is used.',
    ],
    resource: { label: 'PyRevit Data Exchange Options Guide', type: 'PDF' },
    quiz: { label: 'Reading & Writing Excel Data Quiz', questions: 10, time: '5 min' },
    prev: { id: 'py-14', title: 'Working with Views, Sheets & Viewports in PyRevit' },
    next: { id: 'py-16', title: 'Organising Scripts into a Custom PyRevit Extension' },
  },

  // ============================================================
  // LESSON PY-16 — Organising Scripts into a Custom PyRevit Extension
  // ============================================================
  {
    id: 'py-16', num: '16',
    title: 'Organising Scripts into a Custom PyRevit Extension',
    topic: 'Data Exchange', cat: 'intermediate', readTime: '9 min', free: false,
    desc: 'Structure a growing personal or office toolkit as one coherent extension, share common code through a lib folder, and adopt naming and versioning conventions that scale.',
    intro: `A single custom button is easy to keep organized. Ten buttons across three tabs, built up over months, is a different story — without a deliberate structure, a growing personal or office toolkit turns into a tangle of duplicated logic and inconsistent naming. This lesson covers how to structure a multi-tool extension that stays maintainable as it grows, how to share common code across scripts using an extension-level lib folder, and the naming and versioning habits worth adopting now, ahead of later lessons on deploying an extension to a whole team.`,
    sections: [
      {
        id: 's1', heading: 'Scaling the Folder Structure', level: 'h2',
        content: `The same nesting convention from Lesson 9 (.extension / .tab / .panel / .pushbutton) simply repeats and multiplies as a toolkit grows — there is no separate "advanced" structure to learn, only more of the same pattern applied consistently.`,
        code: {
          label: 'A Growing Extension',
          lines: [
            'MyFirmTools.extension/',
            '  QA.tab/',
            '    Parameters.panel/',
            '      CheckMissingComments.pushbutton/',
            '      FlagZeroAreaRooms.pushbutton/',
            '    Naming.panel/',
            '      RenameViewsByLevel.pushbutton/',
            '  Documentation.tab/',
            '    Sheets.panel/',
            '      BatchCreateSheets.pushbutton/',
            '      SyncSheetRegister.pushbutton/',
            '  lib/',
            '    firm_utils.py',
          ],
        },
        formula: { label: 'Scaling Principle', text: 'A ten-button toolkit is just the same single-button folder pattern repeated ten times under organized tabs and panels' },
      },
      {
        id: 's2', heading: 'Grouping by Purpose, Not by Chronology', level: 'h2',
        content: `As the number of buttons grows, how they are grouped into tabs and panels matters as much as the individual scripts themselves — grouping by WHEN something was built (a "Misc" or "New" panel that never gets renamed) ages badly, while grouping by PURPOSE stays useful indefinitely.`,
        items: [
          'Group panels around a workflow theme (QA/QC, Documentation, Modeling, Data Export) rather than around when a tool happened to be written',
          'A tab per broad category (e.g., "QA" vs. "Documentation") keeps the ribbon itself navigable even with dozens of buttons total',
          'Retire or consolidate a "Misc" panel periodically — it is a natural landing spot for new tools during development, but should not become a permanent home for a dozen unrelated buttons',
          'Consistent grouping also makes it obvious where a NEW tool belongs, reducing the temptation to just dump it wherever is fastest',
        ],
      },
      {
        id: 's3', heading: 'Sharing Code with an Extension-Level lib Folder', level: 'h2',
        content: `Once two or more scripts need the same helper logic — a function to get the active document\'s title, a standard way to log to a shared file, a common parameter-lookup helper — copy-pasting that function into every script.py becomes a maintenance liability. A lib folder at the top of the extension solves this.`,
        code: {
          label: 'Extension-Level lib Folder',
          lines: [
            'MyFirmTools.extension/',
            '  lib/',
            '    firm_utils.py',
            '  QA.tab/',
            '    ...',
          ],
        },
        items: [
          'pyRevit automatically adds an extension\'s lib folder to the Python path for every script inside that extension — no manual sys.path manipulation is required',
          'Any script.py anywhere in the extension can then simply "import firm_utils" and call its shared functions directly',
          'Centralizing shared logic in lib means a bug fix or improvement in one helper function immediately benefits every script that uses it, instead of needing to be copy-pasted into each one individually',
          'Keep lib modules focused and well-named (firm_utils.py, excel_helpers.py) rather than one giant catch-all file, so it stays easy to find the right helper later',
        ],
        formula: { label: 'Key Benefit', text: 'pyRevit\'s automatic path handling means an extension-level lib folder is importable everywhere in that extension with zero configuration' },
      },
      {
        id: 's4', heading: 'Naming Conventions That Scale', level: 'h2',
        content: `A handful of small naming habits, adopted early, pay off enormously once an extension has been growing for months and other people besides its original author are using or maintaining it.`,
        items: [
          'Name .pushbutton folders after WHAT the tool does, in clear plain language (RenameViewsByLevel, not Tool3 or NewScript)',
          'Keep tab and panel names short enough to read comfortably on the ribbon at normal window widths',
          'Use a consistent internal style for shared lib functions (e.g., snake_case function names) so the codebase feels like one coherent project rather than a patchwork',
          'Document non-obvious tools with a short docstring or bundle.yaml tooltip so their purpose is clear to a teammate seeing them for the first time',
        ],
      },
      {
        id: 's5', heading: 'Versioning the Extension as a Whole', level: 'h2',
        content: `Even before formal team-wide deployment (a topic for a later lesson), it is worth treating a growing extension as a single versioned project rather than an ever-changing pile of scripts with no history.`,
        items: [
          'Keep the extension folder under Git version control from early on, even if it is currently only used by one person — this gives a clean history of what changed and when',
          'A simple CHANGELOG or version note (even just a comment at the top of a key lib file) helps track what has changed as the toolkit accumulates more tools over time',
          'Avoid silently changing the behavior of a widely-used existing button — if a tool\'s purpose needs to change significantly, consider adding a new button rather than repurposing one people already rely on',
          'Establishing this discipline early makes the later step of sharing the extension with a whole office (a topic covered in a future lesson) far less disruptive',
        ],
        formula: { label: 'Why Start Now', text: 'Version control and consistent structure cost almost nothing to adopt with one button, and become far more valuable — and far harder to retrofit — once a toolkit has grown to twenty' },
      },
      {
        id: 's6', heading: 'A Practical Growth Checklist', level: 'h2',
        content: `Bringing this lesson together into a short, practical checklist to apply whenever adding a new tool to a personal or office extension.`,
        items: [
          'Does this new tool belong in an existing panel by PURPOSE, or does it justify a new one?',
          'Does any of this logic already exist in the lib folder — should it be extracted there instead of duplicated?',
          'Is the .pushbutton folder name, bundle.yaml title, and tooltip clear enough for someone else to understand at a glance?',
          'Has the extension folder been committed to version control since the last meaningful change?',
          'If this tool changes the behavior of something people already rely on, should it be a new button instead of an edit to the existing one?',
        ],
      },
    ],
    takeaways: [
      'A growing toolkit uses the exact same .extension/.tab/.panel/.pushbutton nesting from Lesson 9, simply repeated many times over.',
      'Group tabs and panels by workflow purpose (QA/QC, Documentation, Modeling) rather than by when a tool happened to be built, so the ribbon stays navigable as it grows.',
      'An extension-level lib folder is automatically added to the Python path for every script in that extension, making shared helper functions importable with zero configuration.',
      'Clear, purpose-based naming for pushbuttons, panels, and shared lib functions keeps a multi-tool extension understandable to teammates, not just its original author.',
      'Treating the extension as one versioned project — ideally under Git from early on — pays off increasingly as the number of tools grows.',
      'Prefer adding a new button over silently changing the behavior of an existing one that people already rely on.',
    ],
    resource: { label: 'PyRevit Extension Organization Guide', type: 'PDF' },
    quiz: { label: 'Organising a Custom Extension Quiz', questions: 10, time: '5 min' },
    prev: { id: 'py-15', title: 'Reading & Writing Excel Data from PyRevit Scripts' },
    next: { id: 'py-17', title: 'Building a Model Checker Tool — Automated QA in One Click' },
  },

];
