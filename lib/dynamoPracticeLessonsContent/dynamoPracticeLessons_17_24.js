// ============================================================
// AUTODESK DYNAMO PRACTICE — LESSONS dynp-17 through dynp-24 (ADVANCED)
// Sections: Model Audit & Export | Player & Edge Cases |
//           Issues & Dashboards | Team Distribution | Capstone
// File: lib/dynamoPracticeLessonsContent/dynamoPracticeLessons_17_24.js
// Index: lib/dynamoPracticeLessonsData.js
// ============================================================

export const lessons_17_24 = [

  // ============================================================
  // LESSON DYNP-17 — Model Audit Script
  // ============================================================
  {
    id: 'dynp-17', num: '17',
    title: 'Building a Model Audit Script — Automating Warning Detection & Reporting',
    topic: 'Model Audit & Export', cat: 'advanced', readTime: '11 min', free: false,
    desc: 'Use a Python node to pull every warning out of the active document, group them by description, and export a shareable QA report.',
    intro: `Every live Revit project accumulates warnings — rooms not enclosed, elements joined and unjoined incorrectly, walls slightly overlapping. Reviewing the warnings dialog by hand is tedious, and it tells you nothing about which warning types are actually systemic across the model. This lesson builds a Model Audit script for the DPC2025 project: a Python node that reads every warning on the active document, groups them by description to spot recurring problems, and exports the whole thing as an Excel report a project lead can act on without ever opening Revit.`,
    sections: [
      {
        id: 's1', heading: 'Why Automate Warning Review', level: 'h2',
        content: `The Revit warnings dialog (Manage tab → Review Warnings) lists every warning currently active in the document, but it is a flat, unsorted list with no export button and no way to see patterns at a glance. On a project the size of DPC2025, that list can run into the hundreds.`,
        items: [
          'A warning list reviewed by eye tends to get skimmed, not analysed — a coordinator sees "lots of warnings" but rarely counts how many are the same recurring issue',
          'Grouping warnings by description turns a wall of text into a short, prioritised list: "Room not enclosed" appearing 23 times is a modelling workflow problem, not 23 unrelated one-offs',
          'A script-based audit runs identically every time, so warning counts can be tracked week to week as a genuine model-health metric',
        ],
        formula: { label: 'Audit Principle', text: 'Counting warnings by type turns noise into a prioritised punch list' },
      },
      {
        id: 's2', heading: 'Retrieving Warnings with a Python Node', level: 'h2',
        content: `Dynamo has no stock node that reads the document's warnings, so this script relies on a Python Script node calling the Revit API's warning-retrieval capability directly on the active document.`,
        code: {
          label: 'Reading Document Warnings',
          lines: [
            'import clr',
            'clr.AddReference(\'RevitAPI\')',
            'from Autodesk.Revit.DB import *',
            'clr.AddReference(\'RevitServices\')',
            'from RevitServices.Persistence import DocumentManager',
            '',
            'doc = DocumentManager.Instance.CurrentDBDocument',
            '',
            '# GetWarnings() returns every FailureMessage currently on the document',
            'warnings = doc.GetWarnings()',
            '',
            'descriptions = []',
            'element_ids = []',
            'for w in warnings:',
            '    descriptions.append(w.GetDescriptionText())',
            '    element_ids.append([str(eid.IntegerValue) for eid in w.GetFailingElements()])',
            '',
            'OUT = [descriptions, element_ids]',
          ],
        },
        items: [
          'Each warning object exposes a description string (the same text shown in the Review Warnings dialog) and the list of element IDs involved in that warning',
          'A single warning can involve more than one element — for example, "Room not enclosed" typically references the room and the boundary walls near the gap',
          'This read is a query only, so no transaction is required — the script never modifies the model, only inspects it',
        ],
      },
      {
        id: 's3', heading: 'Grouping and Counting Warnings by Description', level: 'h2',
        content: `With a flat list of warning descriptions in hand, the next step is grouping identical descriptions together and counting occurrences — this is the step that turns raw output into something worth acting on.`,
        code: {
          label: 'Grouping Warnings by Description',
          lines: [
            'descriptions = IN[0]   # flat list of warning description strings',
            '',
            'counts = {}',
            'for desc in descriptions:',
            '    counts[desc] = counts.get(desc, 0) + 1',
            '',
            '# Sort so the most frequent issue appears first',
            'sorted_counts = sorted(counts.items(), key=lambda pair: pair[1], reverse=True)',
            '',
            'OUT = sorted_counts',
          ],
        },
        items: [
          'Sorting by frequency surfaces the most systemic issues first — a coordinator scanning the report top-to-bottom sees the biggest problems immediately',
          'A description like "23 instances of Room not enclosed" is far more actionable than 23 separate unsorted warning rows',
          'Keep the raw per-element detail (from Step 2) available alongside the grouped counts, since a coordinator will eventually need the specific Element IDs to fix each occurrence',
        ],
        formula: { label: 'Grouping Rule', text: 'Count first, sort by frequency second — the top of the list is where the real problems are' },
      },
      {
        id: 's4', heading: 'Structuring the Audit Data for Export', level: 'h2',
        content: `Before writing to Excel, the grouped counts and the detailed per-warning element lists need to be arranged into row-and-column form that Excel.WriteToFile expects.`,
        subsections: [
          {
            heading: 'Report Structure',
            items: [
              'Summary sheet: one row per unique warning description, with a Count column — this is the sorted_counts output from Step 3',
              'Detail sheet: one row per individual warning instance, with columns for Description and the involved Element ID(s)',
              'Keep the two views separate rather than merged into one sheet — a coordinator wants the summary first, and only drills into detail for warnings worth fixing',
            ],
          },
        ],
      },
      {
        id: 's5', heading: 'Exporting the Audit Report to Excel', level: 'h2',
        content: `The final step writes both the summary and detail data to a single Excel workbook using Excel.WriteToFile, with a distinct sheet name for each.`,
        code: {
          label: 'Writing the Audit Report',
          lines: [
            'Excel.WriteToFile(',
            '  filePath = "C:\\\\DPC2025\\\\QA\\\\DPC2025_WarningAudit.xlsx",',
            '  sheetName = "Summary",',
            '  startRow = 0, startCol = 0,',
            '  data = summary_rows',
            ')',
            '',
            'Excel.WriteToFile(',
            '  filePath = "C:\\\\DPC2025\\\\QA\\\\DPC2025_WarningAudit.xlsx",',
            '  sheetName = "Detail",',
            '  startRow = 0, startCol = 0,',
            '  data = detail_rows',
            ')',
          ],
        },
        items: [
          'Writing to the same file path with a different sheetName input adds a new sheet rather than overwriting the whole workbook',
          'Timestamp or version the exported file name (e.g., DPC2025_WarningAudit_2026-07-01.xlsx) so historical audits can be compared as the model develops',
          'Share the exported workbook directly with the project lead — no Dynamo or Revit access is required for them to read it',
        ],
      },
      {
        id: 's6', heading: 'Turning the Audit into a Habit', level: 'h2',
        content: `A one-off audit is useful; a recurring one is genuinely valuable. On DPC2025, this script is intended to be run at the end of each modelling week, not just before a milestone.`,
        items: [
          'Run the audit script on a fixed cadence (weekly, or before every coordination meeting) so warning counts become a trend, not a single snapshot',
          'A warning type that keeps reappearing after being "fixed" usually points at a workflow habit, not a one-off modelling mistake — the trend view catches this in a way a single audit cannot',
          'Publishing this script to Dynamo Player (Lesson 19) makes it something any team member can run without needing to understand the underlying Python',
        ],
      },
    ],
    takeaways: [
      'doc.GetWarnings() (via a Python node) retrieves every active warning on the document, each with a description string and its involved element IDs.',
      'Grouping and counting warnings by description turns an unsorted list into a prioritised punch list — sort by frequency so systemic issues surface first.',
      'Keep a summary (counts per description) and a detail view (per-instance element IDs) as separate outputs, and separate Excel sheets, rather than merging them.',
      'Excel.WriteToFile with a distinct sheetName input per call adds sheets to the same workbook rather than overwriting it.',
      'Warning retrieval is a read-only query and needs no transaction — the script only modifies nothing, it inspects the model.',
      'Run the audit on a fixed cadence so warning counts become a trackable trend, not a one-time snapshot.',
    ],
    resource: { label: 'Model Audit Scripting Guide', type: 'PDF' },
    quiz: { label: 'Model Audit Script Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-16', title: 'Building a COBie Data Population Script' },
    next: { id: 'dynp-18', title: 'Automating IFC Export Settings & Batch Export' },
  },

  // ============================================================
  // LESSON DYNP-18 — IFC Export Automation
  // ============================================================
  {
    id: 'dynp-18', num: '18',
    title: 'Automating IFC Export Settings & Batch Export',
    topic: 'Model Audit & Export', cat: 'advanced', readTime: '11 min', free: false,
    desc: 'Drive Revit\'s IFC export from a Python node with a defined export configuration, and batch-export across multiple views, phases, or files in one run.',
    intro: `Exporting IFC by hand through Revit's Export dialog is fine for a single file on a quiet day — pick the configuration, confirm the save path, click Export. On DPC2025, where a coordination deliverable means exporting the host model, two linked models, and a demolition-phase snapshot every single time, doing that by hand four separate times each milestone is exactly the kind of repetitive work that belongs in Dynamo. This lesson automates IFC export using a defined export configuration and batches it across multiple files and phases in a single script run.`,
    sections: [
      {
        id: 's1', heading: 'Why Automate IFC Export', level: 'h2',
        content: `IFC export in the Revit UI requires re-selecting the configuration, save location, and file name every single time — for one file, that is a minor inconvenience; for a coordinated set of host and linked models, it is a repeated manual task with a real chance of an inconsistent setting slipping through on one of the files.`,
        formula: { label: 'Batch Export Principle', text: 'One correct export configuration, applied identically across every file, every time' },
      },
      {
        id: 's2', heading: 'Defining an IFC Export Configuration', level: 'h2',
        content: `Revit stores IFC export settings as a named export configuration — the same configuration a user picks from the dropdown in the Export IFC dialog. A Python node can reference this configuration directly rather than relying on whatever was last selected manually.`,
        items: [
          'An export configuration bundles the IFC schema version (IFC2x3 Coordination View, IFC4 Reference View, etc.), the class mapping table, and property set options into one named, reusable setting',
          'Class mapping controls which Revit category maps to which IFC entity (e.g., Revit Walls → IfcWall) — getting this wrong produces an IFC file that downstream viewers or coordination tools cannot interpret correctly',
          'Property set options control whether Revit parameters are exported as IFC property sets, and whether base quantities are included — both matter for a model that needs to support quantity take-off downstream',
          'DPC2025 uses a single approved configuration ("DPC2025_Coordination") shared across host and linked files so every exported IFC file uses identical schema and mapping settings',
        ],
      },
      {
        id: 's3', heading: 'Driving IFC Export from Python', level: 'h2',
        content: `With the export configuration defined, a Python node calls the document's export routine directly, passing the configuration and a target file path.`,
        code: {
          label: 'IFC Export via Python',
          lines: [
            'import clr',
            'clr.AddReference(\'RevitAPI\')',
            'from Autodesk.Revit.DB import *',
            'clr.AddReference(\'RevitServices\')',
            'from RevitServices.Persistence import DocumentManager',
            '',
            'doc = DocumentManager.Instance.CurrentDBDocument',
            '',
            'ifc_options = IFCExportOptions()',
            'ifc_options.FileVersion = IFCVersion.IFC2x3CV2',
            'ifc_options.SpaceBoundaries = 1',
            'ifc_options.ExportBaseQuantities = True',
            '',
            'export_folder = IN[0]      # e.g. "C:\\\\DPC2025\\\\IFC_Export"',
            'file_name = IN[1]          # e.g. "DPC2025_Host.ifc"',
            '',
            'doc.Export(export_folder, file_name, ifc_options)',
            '',
            'OUT = export_folder + "\\\\" + file_name',
          ],
        },
        items: [
          'IFCExportOptions mirrors the same settings available in the Export IFC dialog — schema version, space boundary level, base quantities, and property set inclusion',
          'No transaction is required for export — exporting does not modify the current document\'s model data, only writes an external file',
          'Confirm the exported .ifc file opens cleanly in a neutral viewer as part of testing this script, not just that the Python node ran without error',
        ],
      },
      {
        id: 's4', heading: 'Batch-Exporting Across Multiple Views or Phases', level: 'h2',
        content: `A single file sometimes needs multiple IFC exports — one per project phase, for example, so a demolition-phase IFC and a new-work-phase IFC are both available to the coordination team.`,
        subsections: [
          {
            heading: 'Batch-by-Phase Pattern',
            items: [
              'Collect all Phases in the project (or a specific subset relevant to the current deliverable)',
              'Loop the export routine once per phase, setting ifc_options.ExportOfSpecificPhase and ifc_options.SelectedPhaseId on each pass so each output file reflects only that phase',
              'Name each output file to include the phase (e.g., DPC2025_Host_Existing.ifc, DPC2025_Host_NewWork.ifc) so the batch produces clearly distinguishable files, not four files all named the same thing',
            ],
          },
        ],
        code: {
          label: 'Looping Export Across Phases',
          lines: [
            'phases = IN[0]         # list of Phase elements',
            'export_folder = IN[1]',
            '',
            'exported_files = []',
            'for phase in phases:',
            '    ifc_options.ExportOfSpecificPhase = True',
            '    ifc_options.SelectedPhaseId = phase.Id',
            '    file_name = "DPC2025_Host_" + phase.Name + ".ifc"',
            '    doc.Export(export_folder, file_name, ifc_options)',
            '    exported_files.append(file_name)',
            '',
            'OUT = exported_files',
          ],
        },
      },
      {
        id: 's5', heading: 'Batch-Exporting Across Multiple Files', level: 'h2',
        content: `The bigger production win is batching the export across the host model and each linked model in one script run, rather than opening each file individually to export it.`,
        items: [
          'For linked models that need their own IFC export, open each linked file in its own Revit session (via Application.OpenDocumentFile in Python, or by running the export script once per open document if each link is opened manually first)',
          'Apply the same export configuration to every file in the batch — the whole point of automating this is consistency, so do not vary settings per file without a documented reason',
          'Collect the list of file paths to export from a single source (a Code Block list, or a File Path/Directory node pointed at the project\'s linked-files folder) so adding a new linked file to the batch is a one-line change, not a graph rebuild',
          'Log the outcome of each export (success, file size, or an error message) to a simple summary list so a failed export in a batch of five does not go unnoticed',
        ],
        formula: { label: 'Batch Export Rule', text: 'One script run should replace opening and exporting every file in the set individually' },
      },
      {
        id: 's6', heading: 'Verifying Batch Export Results', level: 'h2',
        content: `An automated batch export is only trustworthy if its results are actually checked, not just assumed to have worked because the script finished without a red node.`,
        items: [
          'Confirm the expected number of .ifc files exist in the export folder after the run — a missing file is easy to miss if the script "finished" without visibly failing',
          'Spot-check at least one exported file per batch by opening it in a neutral IFC viewer to confirm geometry and property sets came through as expected',
          'Keep a simple export log (a Notes node result, or a written-out text/Excel file) recording the date, files exported, and configuration used, so any coordination issue traced back to an IFC file can be checked against what was actually exported and when',
        ],
      },
    ],
    takeaways: [
      'An IFC export configuration bundles schema version, class mapping, and property set options into one named, reusable setting — reference it explicitly rather than relying on whatever was last picked manually.',
      'IFCExportOptions in Python mirrors the Export IFC dialog\'s settings (FileVersion, SpaceBoundaries, ExportBaseQuantities) and requires no transaction since export does not modify the model.',
      'Batch-exporting by phase loops the export routine once per Phase, setting ExportOfSpecificPhase and SelectedPhaseId, and naming each output file to include the phase.',
      'Batch-exporting across multiple files (host plus linked models) applies the identical configuration to every file, replacing repeated manual exports through the Revit UI.',
      'Source the list of files or phases to export from a single list so adding a new file to the batch is a one-line change.',
      'Always verify batch export results — confirm file counts and spot-check at least one exported file in a neutral viewer rather than trusting a clean script run alone.',
    ],
    resource: { label: 'IFC Batch Export Reference', type: 'PDF' },
    quiz: { label: 'IFC Export Automation Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-17', title: 'Building a Model Audit Script — Automating Warning Detection & Reporting' },
    next: { id: 'dynp-19', title: 'Creating a Custom Dynamo Player Tool for the Office' },
  },

  // ============================================================
  // LESSON DYNP-19 — Dynamo Player Tool
  // ============================================================
  {
    id: 'dynp-19', num: '19',
    title: 'Creating a Custom Dynamo Player Tool for the Office',
    topic: 'Player & Edge Cases', cat: 'advanced', readTime: '10 min', free: false,
    desc: 'Design a script specifically for Dynamo Player, expose clean inputs, document it for non-technical users, and publish it to a shared office folder.',
    intro: `A script that runs perfectly when you built it, in your own Dynamo session, is not the same thing as a tool the rest of the office can actually use. This lesson takes the audit and export scripts built so far in this course and turns one of them into a genuine Player tool: clean, minimal inputs with clear names and units, a Notes node written for someone who has never opened Dynamo, and a publish step that puts the finished tool in a shared folder the whole DPC2025 team can reach.`,
    sections: [
      {
        id: 's1', heading: 'Designing for Player from the Start', level: 'h2',
        content: `A script built for personal use and a script built for Dynamo Player look different from the very first node placed. Designing for Player means designing for someone who will never see the canvas.`,
        formula: { label: 'Player Design Question', text: 'If the person running this has never opened Dynamo, will they know what to type into each field?' },
      },
      {
        id: 's2', heading: 'Exposing Only the Necessary Inputs', level: 'h2',
        content: `Every input node marked "Is Input" becomes a field in the Player panel. A tool with fifteen exposed fields is not simpler than opening Revit's own dialogs — it defeats the purpose of automating the task in the first place.`,
        items: [
          'Review every input node in the graph and ask whether the end user genuinely needs to change it on each run, or whether it should be a fixed, hardcoded value instead',
          'Collapse related settings where possible — a single File Path input for an export folder is better than four separate string inputs assembled into a path downstream',
          'A well-designed Player tool typically exposes three to six inputs; more than that is a signal the tool is trying to do too many unrelated things at once and may deserve splitting into two tools',
          'Right-click each input node that should appear in Player → "Is Input" — inputs not marked this way stay hidden and use only their current canvas value',
        ],
      },
      {
        id: 's3', heading: 'Naming, Descriptions, and Units', level: 'h2',
        content: `The Player panel shows only the input node's name as its field label — there is no room for a paragraph of explanation next to each field, so the name itself has to carry the meaning.`,
        subsections: [
          {
            heading: 'Naming Conventions for Player Inputs',
            items: [
              'Rename every Player-exposed input from its default ("File Path 1", "Number Slider") to a descriptive label a non-technical user will understand, e.g. "DPC2025 Room List (Excel) Path"',
              'Include units directly in the name where relevant, e.g. "Minimum Room Area (sq m)" rather than assuming the user knows what unit the field expects',
              'Where a field expects an exact format (a date, a specific file type), state that format in the name itself, e.g. "Report Date (YYYY-MM-DD)"',
              'Set a sensible default value on every exposed input so a user who runs the tool without changing anything still gets a reasonable, non-destructive result',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Adding a Notes Node for Non-Technical Users', level: 'h2',
        content: `A Notes node placed prominently at the top of the graph is the only documentation most Player users will ever see, since they will never open the canvas to read it directly — but it is worth adding anyway, both for the rare user who does open the graph and as a record for the next script author.`,
        items: [
          'State what the tool does in one or two plain-language sentences, avoiding Dynamo or Revit API jargon',
          'List what each exposed input controls, in the same order the inputs appear in the Player panel',
          'State any precondition explicitly — "Run this only on a saved, synced local file" or "Requires the DPC2025_RoomList.xlsx file to be closed before running"',
          'Name the tool\'s author and the date it was last updated, so questions have somewhere to go',
        ],
        formula: { label: 'Notes Node Rule', text: 'Write the Notes node as if the reader has never seen a node graph — because for most Player users, that is exactly true' },
      },
      {
        id: 's5', heading: 'Testing Through Player, Not Just the Canvas', level: 'h2',
        content: `A script that runs correctly with Automatic or Manual mode inside the authoring canvas is not guaranteed to behave identically the first time it is actually run through Dynamo Player.`,
        items: [
          'Publish the script and open it fresh through Manage tab → Dynamo Player, then run it exactly as an end user would, filling in the exposed fields from a blank state',
          'Confirm default values produce a sensible, non-destructive result if the tester (or a future user) clicks Run without changing any field',
          'Test with a deliberately wrong input (a non-existent file path, an empty string) to confirm the script fails gracefully with a clear message rather than crashing silently or writing something incorrect',
          'Only hand a script to the wider team after it has been run through Player itself at least once — canvas testing alone is not sufficient sign-off',
        ],
      },
      {
        id: 's6', heading: 'Publishing to a Shared Office Folder', level: 'h2',
        content: `Dynamo Player watches a folder for .dyn files, listing whatever it finds there — publishing a finished tool is as simple as saving the .dyn file into the folder the whole office points Player at.`,
        items: [
          'Save the finished .dyn file into the shared network location the office has agreed Dynamo Player should watch (e.g., a "DPC2025 Player Tools" folder on the shared drive)',
          'Use a clear, descriptive file name — the file name is exactly what appears in the Player tool list, so "Script1.dyn" helps no one',
          'Remove or archive superseded versions of a tool from the watched folder so the Player list does not accumulate confusing duplicates over time',
          'Announce new or updated tools to the team through whatever channel the office already uses for workflow updates, rather than assuming people will notice a new file appearing in the folder',
        ],
        formula: { label: 'Publishing Rule', text: 'A tool only helps the office once it is saved where Player is already watching, named clearly, and announced' },
      },
    ],
    takeaways: [
      'Design for Player from the start by asking whether the end user, who has never opened Dynamo, will understand what to enter into every exposed field.',
      'Mark only the inputs a user genuinely needs to change as "Is Input" — a well-designed Player tool typically exposes three to six fields, not fifteen.',
      'Rename every Player-exposed input descriptively, including units and expected formats directly in the name, since the Player panel shows only the input\'s name as its label.',
      'A Notes node documenting purpose, inputs, preconditions, and author/date is essential even though most Player users will never open the canvas to read it.',
      'Always test a finished tool by running it through Dynamo Player itself, including with deliberately wrong inputs, before handing it to the wider team.',
      'Publish the finished .dyn file into the shared folder Dynamo Player already watches, with a clear file name, and retire superseded versions.',
    ],
    resource: { label: 'Dynamo Player Tool Design Checklist', type: 'PDF' },
    quiz: { label: 'Dynamo Player Tool Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-18', title: 'Automating IFC Export Settings & Batch Export' },
    next: { id: 'dynp-20', title: 'Bulletproofing Your Scripts — Handling Nulls, Empty Lists & Real-World Edge Cases' },
  },

  // ============================================================
  // LESSON DYNP-20 — Bulletproofing Scripts
  // ============================================================
  {
    id: 'dynp-20', num: '20',
    title: 'Bulletproofing Your Scripts — Handling Nulls, Empty Lists & Real-World Edge Cases',
    topic: 'Player & Edge Cases', cat: 'advanced', readTime: '10 min', free: false,
    desc: 'Apply defensive scripting patterns so production scripts survive nulls, empty category lists, and the mess of a real project file.',
    intro: `A script tested only against a clean sample project has not really been tested. Real projects like DPC2025 have parameters left blank by a rushed modeller, categories with zero elements on some floors, and the occasional element that simply does not behave the way the rest of the model does. This lesson covers the defensive patterns that keep a production script running through that mess instead of crashing the whole graph on the first unexpected null.`,
    sections: [
      {
        id: 's1', heading: 'Why Bulletproofing Matters', level: 'h2',
        content: `A script that only works on a tidy sample file will eventually meet a real project file that is not tidy — and if the first null value it encounters halts the entire graph, the script has failed at the one thing production tools are actually for.`,
        formula: { label: 'Production Standard', text: 'A script is not finished until it survives a messy real project file, not just a clean sample' },
      },
      {
        id: 's2', heading: 'List.Clean — Stripping Nulls Before They Cascade', level: 'h2',
        content: `**List.Clean** removes null values (and, optionally, empty sublists) from a list, stopping a single missing value from cascading into "Warning: Node not evaluated" across everything downstream.`,
        items: [
          'Use List.Clean immediately after any node likely to produce nulls — most commonly after Element.GetParameterValueByName, where a missing or empty parameter returns null',
          'Be aware that List.Clean changes list length — a cleaned list of parameter values will no longer line up index-for-index with the original element list unless both are cleaned using the same mask',
          'When the element-to-value correspondence must be preserved, filter both lists together (e.g., with List.FilterByBoolMask driven by a null-test) rather than cleaning the value list alone',
        ],
        formula: { label: 'Cleaning Caution', text: 'Cleaning a list of values without also filtering its paired element list breaks the pairing between the two' },
      },
      {
        id: 's3', heading: 'Explicit Null Checks Before Writing Parameters', level: 'h2',
        content: `Writing to a parameter that turned out to be null, missing, or read-only is one of the most common causes of a script halting partway through a batch write on a real project.`,
        code: {
          label: 'Defensive Parameter Write',
          lines: [
            'elements = UnwrapElement(IN[0])',
            'values = IN[1]',
            '',
            'skipped = []',
            'TransactionManager.Instance.EnsureInTransaction(doc)',
            '',
            'for element, value in zip(elements, values):',
            '    param = element.LookupParameter("Department")',
            '    if param is None:',
            '        skipped.append((element.Id.IntegerValue, "parameter not found"))',
            '        continue',
            '    if param.IsReadOnly:',
            '        skipped.append((element.Id.IntegerValue, "parameter read-only"))',
            '        continue',
            '    param.Set(value)',
            '',
            'TransactionManager.Instance.TransactionTaskDone()',
            'OUT = skipped',
          ],
        },
        items: [
          'Check for None (the parameter does not exist on this element) and IsReadOnly (the parameter exists but cannot be set) as two separate, explicit conditions',
          'Return the list of skipped elements and reasons as OUT, rather than silently skipping — a coordinator needs to know which elements were not updated and why',
          'This pattern lets the loop continue past a problem element instead of the whole transaction failing partway through',
        ],
      },
      {
        id: 's4', heading: 'Handling Categories That Return Empty Lists', level: 'h2',
        content: `Not every category exists on every project, or on every floor of a project. A category collector returning an empty list should not be treated as an error — it is a normal, expected outcome that downstream logic needs to tolerate.`,
        items: [
          'Check list length (or use a simple "if not my_list" test in Python) before running logic that assumes at least one item is present',
          'A category with zero elements is not a bug — for example, DPC2025\'s basement level legitimately has no Furniture category elements, and a script assuming otherwise will misreport that as an error',
          'Design downstream reporting to state "0 elements found in category X" explicitly, rather than letting an empty list silently produce an empty, unexplained report section',
        ],
        formula: { label: 'Empty List Rule', text: 'An empty list from a category collector is a valid real-world result, not automatically a failure' },
      },
      {
        id: 's5', heading: 'Wrapping Risky Operations in Try/Except', level: 'h2',
        content: `Some operations are inherently unpredictable across a large, messy real project — a parameter type that varies unexpectedly between elements of the "same" category, or an element with a corrupted geometry reference. Python's try/except keeps one bad element from halting the whole batch.`,
        code: {
          label: 'Try/Except Around a Risky Operation',
          lines: [
            'results = []',
            'errors = []',
            '',
            'for element in elements:',
            '    try:',
            '        value = element.LookupParameter("Area").AsDouble()',
            '        results.append(value)',
            '    except Exception as e:',
            '        errors.append((element.Id.IntegerValue, str(e)))',
            '        results.append(None)',
            '',
            'OUT = [results, errors]',
          ],
        },
        items: [
          'Catch the exception per-element inside the loop, not around the whole loop — catching around the whole loop stops processing at the first failure instead of continuing past it',
          'Always return the error list alongside the results, even if empty — a script that swallows errors silently is harder to trust than one that fails loudly',
          'Reserve try/except for genuinely unpredictable operations; do not use it as a substitute for the explicit null/read-only checks from Step 3, which are more precise and more informative when they do trigger',
        ],
      },
      {
        id: 's6', heading: 'Testing Against a Messy Real Project File', level: 'h2',
        content: `The single most effective bulletproofing practice is not a code pattern at all — it is where the script gets tested before it is trusted.`,
        items: [
          'Test new scripts against a real, in-progress project file (a copy of DPC2025 at its current, imperfect state) rather than only a clean sample or template file',
          'A clean sample file will not have the blank parameters, unplaced rooms, or inconsistent naming that a real project accumulates over months of work — exactly the conditions that reveal missing defensive checks',
          'Deliberately test against known problem elements (a room with no Department value, a sheet with a malformed name) rather than only the "easy" elements',
          'Treat a script that only works cleanly on a tidy sample file as still in development, not ready for team distribution',
        ],
        formula: { label: 'Testing Standard', text: 'If it only works on a clean sample, it is not tested — test on the messy real project first' },
      },
    ],
    takeaways: [
      'List.Clean strips null values from a list, but breaks index-for-index pairing with a companion list unless both are filtered using the same mask.',
      'Check explicitly for a null parameter (LookupParameter returned None) and a read-only parameter as two separate conditions before writing, and log skipped elements with a reason rather than failing silently.',
      'An empty list from a category collector is a normal, expected real-world outcome (a category simply not present on that floor), not automatically a bug to fix.',
      'Wrap genuinely unpredictable per-element operations in try/except inside the loop, so one bad element does not halt the whole batch — and always surface the caught errors, never swallow them.',
      'Reserve try/except for unpredictable operations; explicit null/read-only checks are more precise for the common, expected failure cases.',
      'Test production scripts against a messy, real, in-progress project file, not just a clean sample — that is where missing defensive checks actually get found.',
    ],
    resource: { label: 'Defensive Scripting Patterns Guide', type: 'PDF' },
    quiz: { label: 'Bulletproofing Scripts Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-19', title: 'Creating a Custom Dynamo Player Tool for the Office' },
    next: { id: 'dynp-21', title: 'Building a Drawing Issue Automation Script' },
  },

  // ============================================================
  // LESSON DYNP-21 — Drawing Issue Automation
  // ============================================================
  {
    id: 'dynp-21', num: '21',
    title: 'Building a Drawing Issue Automation Script',
    topic: 'Issues & Dashboards', cat: 'advanced', readTime: '11 min', free: false,
    desc: 'Automate the sheet issue/revision log — writing revision descriptions and dates in batch, aligning codes to ISO 19650 suitability, and exporting a transmittal-ready log.',
    intro: `Every drawing issue on DPC2025 needs a revision description, an issue date, and a suitability code written consistently across every sheet in the set — done manually, that is dozens of near-identical clicks per issue, and an easy place for one sheet to slip through with the wrong code. This lesson automates that process: writing issue data to sheets in batch, aligning revision codes with the project's ISO 19650 suitability scheme, and exporting a consolidated issue log for the transmittal record.`,
    sections: [
      {
        id: 's1', heading: 'What a Drawing Issue Involves', level: 'h2',
        content: `A single drawing issue on DPC2025 touches every sheet being issued: a revision description, an issue date, and a suitability code, all needing to match exactly across the whole issued set.`,
        items: [
          'Revision description — a short text field explaining what changed since the last issue (e.g., "Coordination Issue — Level 3 layout updated")',
          'Issue date — the date the drawing set is formally issued, which must be identical across every sheet in the same issue',
          'Suitability code — an ISO 19650-style code (S1, S2, A1, etc.) indicating the information status of the issued container',
          'Getting any one of these wrong or inconsistent across the issued set undermines the audit trail the whole revision system exists to provide',
        ],
      },
      {
        id: 's2', heading: 'ISO 19650 Suitability Codes', level: 'h2',
        content: `ISO 19650 defines a standard set of suitability codes describing the status of an information container at the point it is shared. DPC2025's BEP maps a subset of these onto the project's own revision scheme.`,
        code: {
          label: 'DPC2025 Suitability Code Mapping',
          lines: [
            'S1  — Suitable for coordination (work in progress, shared for review)',
            'S2  — Suitable for information',
            'S4  — Suitable for stage approval',
            'A1  — Authorised and accepted, suitable for construction',
            '',
            'Revision letter/number tracks alongside the code:',
            '  S1 revisions typically numbered (P01, P02...)',
            '  A-suitability revisions typically lettered (A, B, C...)',
          ],
        },
        formula: { label: 'Suitability Rule', text: 'The suitability code describes what the information is fit for right now, not how many times it has changed' },
      },
      {
        id: 's3', heading: 'Writing Revision Data to Sheets in Batch', level: 'h2',
        content: `Rather than opening each sheet's properties individually, a Python node writes the revision description, date, and suitability code to a shared parameter set across every sheet being issued in one pass.`,
        code: {
          label: 'Batch Revision Write',
          lines: [
            'sheets = UnwrapElement(IN[0])       # sheets being issued',
            'description = IN[1]                  # e.g. "Coordination Issue — Level 3"',
            'issue_date = IN[2]                    # e.g. "2026-07-01"',
            'suitability = IN[3]                   # e.g. "S2"',
            '',
            'TransactionManager.Instance.EnsureInTransaction(doc)',
            '',
            'for sheet in sheets:',
            '    desc_param = sheet.LookupParameter("Issue Description")',
            '    date_param = sheet.LookupParameter("Issue Date")',
            '    suit_param = sheet.LookupParameter("Suitability Code")',
            '    if desc_param and not desc_param.IsReadOnly:',
            '        desc_param.Set(description)',
            '    if date_param and not date_param.IsReadOnly:',
            '        date_param.Set(issue_date)',
            '    if suit_param and not suit_param.IsReadOnly:',
            '        suit_param.Set(suitability)',
            '',
            'TransactionManager.Instance.TransactionTaskDone()',
            'OUT = sheets',
          ],
        },
        items: [
          'Writing the same description, date, and suitability code to every sheet in one pass guarantees consistency across the issued set — no risk of one sheet getting a typo\'d date',
          'Confirm the sheet selection (which sheets are actually being issued this time) before running the write — a Watch node listing sheet numbers is a simple, effective pre-check',
        ],
      },
      {
        id: 's4', heading: 'Aligning Revision Sequence with Suitability', level: 'h2',
        content: `The revision code itself (P01, P02, A, B...) needs to increment correctly and in step with the suitability code — jumping straight to A1 without a documented S-suitability history undermines the audit trail.`,
        items: [
          'Read the current highest revision value already recorded on each sheet before writing the next one, rather than assuming a fixed next value',
          'Keep the numbering scheme consistent with the suitability stage — P-series numbers for S-suitability issues, letters for A-suitability issues, per the BEP',
          'Where a sheet is being issued for the first time, seed its revision sequence at the correct starting point (commonly P01) rather than leaving it blank',
        ],
      },
      {
        id: 's5', heading: 'Exporting a Consolidated Issue Log', level: 'h2',
        content: `Once the revision data is written to the model, the same data needs to leave the model as a transmittal record — the actual document a client or consultant receives alongside the issued drawings.`,
        code: {
          label: 'Issue Log Export Structure',
          lines: [
            'Sheet Number | Sheet Name        | Revision | Suitability | Description                  | Issue Date',
            '-------------|-------------------|----------|-------------|------------------------------|------------',
            'DPK-XYZ-00-DR-A-0001 | Ground Floor Plan | P03 | S2 | Coordination Issue — L3 layout | 2026-07-01',
          ],
        },
        items: [
          'Use Excel.WriteToFile to export one row per issued sheet, with columns matching the transmittal template DPC2025 has agreed with the client',
          'Name the exported file with the issue date and, if relevant, an issue reference number, so it can be filed alongside the transmittal record without renaming',
          'Cross-check the exported log against the transmittal recipient list before sending, since the log and the transmittal are two separate records that both need to agree',
        ],
      },
      {
        id: 's6', heading: 'Running This as a Repeatable Issue Routine', level: 'h2',
        content: `Drawing issues happen repeatedly across a project's life, so this script earns its keep by being run identically at every single issue, not built once and then abandoned for manual work again.`,
        items: [
          'Expose the sheet selection, description, date, and suitability code as Dynamo Player inputs so a project lead can run an issue without opening the graph',
          'Keep a running master issue log (a single Excel file appended to at each issue, rather than one new file per issue) so the full revision history stays in one place',
          'Treat any manual override of the automated revision data as a signal to investigate — a hand-edited sheet is exactly where inconsistency creeps back in',
        ],
      },
    ],
    takeaways: [
      'A drawing issue requires three pieces of data written consistently across every sheet in the issued set: revision description, issue date, and ISO 19650 suitability code.',
      'DPC2025 maps ISO 19650 suitability codes (S1, S2, S4, A1...) to its revision scheme, using P-series numbering for S-suitability and letters for A-suitability issues.',
      'A batch Python write applies the same description, date, and suitability code to every issued sheet in one transaction, eliminating per-sheet manual entry errors.',
      'Revision sequence numbers should be read from each sheet\'s existing highest value before incrementing, not assumed, and new sheets should be seeded at the correct starting point.',
      'Excel.WriteToFile exports a consolidated issue log matching the project\'s transmittal template, with one row per issued sheet.',
      'Expose sheet selection and issue details as Dynamo Player inputs, and maintain one running master issue log rather than a new file per issue.',
    ],
    resource: { label: 'Drawing Issue Automation Guide', type: 'PDF' },
    quiz: { label: 'Drawing Issue Automation Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-20', title: 'Bulletproofing Your Scripts — Handling Nulls, Empty Lists & Real-World Edge Cases' },
    next: { id: 'dynp-22', title: 'Combining Dynamo & Excel for a Full Project Data Dashboard' },
  },

  // ============================================================
  // LESSON DYNP-22 — Project Data Dashboard
  // ============================================================
  {
    id: 'dynp-22', num: '22',
    title: 'Combining Dynamo & Excel for a Full Project Data Dashboard',
    topic: 'Issues & Dashboards', cat: 'advanced', readTime: '11 min', free: false,
    desc: 'Aggregate rooms, doors, sheets, and warnings into one multi-sheet Excel workbook with a summary Dashboard tab, refreshed on a recurring cadence.',
    intro: `Individually, the room list, door schedule, sheet register, and warning audit from earlier in this course are each useful reports. Combined into a single workbook with a summary tab on top, they become something more valuable: a one-glance project data dashboard for DPC2025 that a project lead can open without knowing which script produced which number. This lesson builds that dashboard, and covers the practical habit of re-running it regularly rather than rebuilding it from scratch each time someone asks for an update.`,
    sections: [
      {
        id: 's1', heading: 'From Separate Reports to One Dashboard', level: 'h2',
        content: `Each data extract built earlier in this course — rooms, doors, sheets, warnings — already exists as its own script producing its own Excel output. The dashboard does not replace that logic; it aggregates the same extracts into one workbook so a reader does not need four separate files open at once.`,
        formula: { label: 'Dashboard Principle', text: 'Aggregate what already works — do not rebuild extraction logic that earlier scripts already handle correctly' },
      },
      {
        id: 's2', heading: 'Writing Multiple Data Sets to One Workbook', level: 'h2',
        content: `Excel.WriteToFile writes to a specific sheet within a workbook, determined by its sheetName input — calling it multiple times against the same file path with different sheet names builds a multi-sheet workbook in one script run.`,
        code: {
          label: 'Multi-Sheet Dashboard Export',
          lines: [
            'workbook = "C:\\\\DPC2025\\\\Reports\\\\DPC2025_Dashboard.xlsx"',
            '',
            'Excel.WriteToFile(workbook, "Rooms",    startRow=0, startCol=0, data=room_data)',
            'Excel.WriteToFile(workbook, "Doors",    startRow=0, startCol=0, data=door_data)',
            'Excel.WriteToFile(workbook, "Sheets",   startRow=0, startCol=0, data=sheet_data)',
            'Excel.WriteToFile(workbook, "Warnings", startRow=0, startCol=0, data=warning_data)',
            'Excel.WriteToFile(workbook, "Dashboard",startRow=0, startCol=0, data=summary_data)',
          ],
        },
        items: [
          'Each data set retains its own detailed sheet, exactly as its originating script produces it — nothing is lost by combining them into one workbook',
          'Order the calls so the Dashboard summary sheet is written last, once every underlying data set\'s row counts are known and can be summarised accurately',
          'Reuse the exact extraction logic from earlier lessons (room list, door schedule, sheet register, warning audit) as sub-graphs or custom nodes feeding this combined export, rather than duplicating the collection logic',
        ],
      },
      {
        id: 's3', heading: 'Building the Dashboard Summary Tab', level: 'h2',
        content: `The Dashboard sheet is not raw data — it is a short, readable summary: counts and status per category, giving a project lead the headline numbers without reading through every detail sheet.`,
        code: {
          label: 'Dashboard Summary Row Structure',
          lines: [
            'Metric                      | Value   | Status',
            '----------------------------|---------|--------',
            'Total Rooms                 | 214     | OK',
            'Rooms Missing Department    | 6       | Review',
            'Total Doors                 | 388     | OK',
            'Sheets Issued This Period   | 42      | OK',
            'Open Model Warnings         | 57      | Review',
            'Duplicate Room Numbers      | 0       | OK',
          ],
        },
        items: [
          'Derive each summary row directly from the same lists already collected for the detail sheets — a room count is simply the length of the room list, not a separate collection step',
          'Set a simple Status value (e.g., "OK" vs "Review") using a threshold test in Python — for example, flagging "Review" whenever a count of problems is greater than zero',
          'Keep the summary to a small, fixed set of headline metrics agreed with the project lead, rather than letting it grow into a second detail sheet',
        ],
        formula: { label: 'Summary Rule', text: 'The Dashboard tab answers "is the project healthy right now?" in ten rows or fewer — the detail sheets answer everything else' },
      },
      {
        id: 's4', heading: 'Keeping the Dashboard\'s Data Sources in Sync', level: 'h2',
        content: `Because the dashboard aggregates several independent extracts, it is important that every extract reflects the same point in time — mixing a fresh room count with a warning audit from two days earlier produces a dashboard that looks coherent but is not.`,
        items: [
          'Run all extraction steps (rooms, doors, sheets, warnings) within the same script execution, from the same open document state, rather than combining outputs saved from separate runs on separate days',
          'If any one extraction step fails or returns unexpectedly empty, halt before writing the Dashboard summary rather than reporting a partial or misleading health snapshot',
          'Timestamp the workbook (in the file name or a cell on the Dashboard sheet itself) so anyone reading it knows exactly which day\'s model state it reflects',
        ],
      },
      {
        id: 's5', heading: 'Refreshing the Dashboard on a Recurring Cadence', level: 'h2',
        content: `A dashboard that is rebuilt manually every time someone asks for a project update quickly stops happening. The practical value comes from re-running the same script on a fixed schedule.`,
        items: [
          'Publish the combined export script to Dynamo Player (Lesson 19) so re-running it does not require the original author\'s involvement',
          'Establish a fixed cadence with the project lead — weekly is a common choice for an active project like DPC2025 — rather than an ad-hoc "whenever someone remembers"',
          'Keep the file name and location stable between refreshes (or clearly versioned) so the dashboard is easy to find and trust as the current source, not one of several stale copies',
        ],
        formula: { label: 'Refresh Rule', text: 'A dashboard that is not refreshed on a schedule quietly becomes a historical document instead of a live one' },
      },
      {
        id: 's6', heading: 'Presenting the Dashboard to the Team', level: 'h2',
        content: `The dashboard's audience is broader than the script's author — project leads, client-facing coordinators, and sometimes the client themselves may open this file, so its presentation matters as much as its accuracy.`,
        items: [
          'Place the Dashboard tab first (leftmost) in the workbook so it is the first thing anyone sees on opening the file',
          'Use plain, non-technical row labels on the Dashboard sheet — "Open Model Warnings," not "GetWarnings() Count"',
          'Briefly note in the Dashboard sheet itself, or an accompanying message, what changed since the last refresh, so recipients do not have to compare two spreadsheets by eye',
        ],
      },
    ],
    takeaways: [
      'Excel.WriteToFile called repeatedly against the same file path with different sheetName inputs aggregates multiple independent data extracts into one multi-sheet workbook.',
      'Reuse existing extraction logic (rooms, doors, sheets, warnings) from earlier lessons as sub-graphs feeding the combined export, rather than duplicating collection logic.',
      'The Dashboard summary tab should hold a small, fixed set of headline metrics with simple Status values, derived directly from the same lists used for the detail sheets.',
      'Run all extraction steps within one script execution against the same document state, and halt before writing the summary if any extract fails or is unexpectedly empty.',
      'Publish the combined export to Dynamo Player and refresh it on a fixed, agreed cadence rather than rebuilding it manually whenever someone asks for an update.',
      'Present the Dashboard tab first in the workbook with plain-language row labels, since its audience includes non-technical project leads and clients.',
    ],
    resource: { label: 'Project Data Dashboard Build Guide', type: 'PDF' },
    quiz: { label: 'Data Dashboard Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-21', title: 'Building a Drawing Issue Automation Script' },
    next: { id: 'dynp-23', title: 'Packaging & Distributing Scripts to the Team' },
  },

  // ============================================================
  // LESSON DYNP-23 — Packaging & Distributing Scripts
  // ============================================================
  {
    id: 'dynp-23', num: '23',
    title: 'Packaging & Distributing Scripts to the Team',
    topic: 'Team Distribution', cat: 'advanced', readTime: '10 min', free: false,
    desc: 'Identify dependencies, bundle a .dyn file for distribution, apply a version-numbering convention, and document scripts so they survive staff turnover.',
    intro: `Every script built across this course so far has lived on one machine, tested by one person. This lesson covers what it takes for a script to leave that machine and keep working correctly on someone else's — identifying what it actually depends on, bundling it properly, applying a consistent version number, and writing documentation clear enough that the script still makes sense to whoever inherits it after the original author has moved to a different project or left the firm entirely.`,
    sections: [
      {
        id: 's1', heading: 'Identifying Custom Node and Package Dependencies', level: 'h2',
        content: `Before a script can be distributed, its author needs an honest list of everything it depends on beyond stock Dynamo nodes — because every one of those dependencies is a thing that can be missing on someone else's machine.`,
        items: [
          'Review the graph for any custom node (.dyf) referenced — these need to travel with the script, either bundled directly or published as part of a package the recipient can install',
          'Check File → Package Dependencies (or the package badge shown on node icons in the library) to see which installed packages the graph actually uses',
          'Community packages used across DPC2025 scripts in this course (for example, any package supplying nodes beyond the stock library) must be listed explicitly — do not assume a recipient already has the same packages installed',
          'A script that runs perfectly for its author but shows red, unresolved nodes for a teammate is almost always a missing dependency, not a broken script',
        ],
        formula: { label: 'Dependency Check', text: 'If it is not a stock node, someone else\'s machine needs it installed before the script will run for them' },
      },
      {
        id: 's2', heading: 'Using the Package Manager to Share Internal Packages', level: 'h2',
        content: `Where a custom node is reused across multiple DPC2025 scripts — the naming validator from earlier in this course is a good example — publishing it once as a shared internal package is more maintainable than bundling the same .dyf file separately with every script that uses it.`,
        items: [
          'Publish reusable custom nodes to a package via Packages → Publish New Package, choosing a shared local or network folder rather than the public Package Manager for internal-only tools',
          'Point every team member\'s Dynamo installation at the same shared package folder so everyone installs from, and stays in sync with, one source',
          'When a shared package updates, notify the team explicitly — Dynamo does not automatically pull new package versions for users already running an older one',
          'Keep a single internal package for genuinely reusable logic (the naming validator, a shared room-matching helper) rather than scattering near-duplicate custom nodes across multiple individual scripts',
        ],
      },
      {
        id: 's3', heading: 'Bundling a .dyn File with Its Dependencies', level: 'h2',
        content: `For a script with dependencies that are not (or should not be) published as a shared package — a one-off helper custom node specific to a single script, for example — bundling it directly alongside the .dyn file is the simpler distribution route.`,
        items: [
          'Place the .dyn file and any accompanying .dyf files together in a single folder, rather than relying on a recipient to already have the .dyf installed elsewhere',
          'Include any supporting files the script reads at runtime (a reference Excel template, a sample input file) in the same bundle',
          'Add a short readme (a text file or a Notes node exported as a screenshot) listing exactly what is in the bundle and what each file is for',
          'Test the bundle by copying it to a genuinely different machine (or a clean test environment) and confirming the script runs without any manual setup beyond what the readme describes',
        ],
      },
      {
        id: 's4', heading: 'A Version-Numbering Convention for Office Scripts', level: 'h2',
        content: `Without an agreed convention, script versions drift into "Final," "Final_v2," and "Final_ACTUAL" within a few months — a familiar problem that a simple, enforced numbering rule solves completely.`,
        code: {
          label: 'DPC2025 Script Versioning Convention',
          lines: [
            'ScriptName_vMAJOR.MINOR.dyn',
            '',
            'Examples:',
            '  RoomAudit_v1.0.dyn       — first working release',
            '  RoomAudit_v1.1.dyn       — minor fix or small input added',
            '  RoomAudit_v2.0.dyn       — inputs or outputs changed, breaking prior usage',
          ],
        },
        items: [
          'Increment MINOR for bug fixes or small, non-breaking additions (a new optional input, a clearer error message)',
          'Increment MAJOR when the script\'s inputs, outputs, or fundamental behaviour change in a way that could surprise an existing user',
          'Never overwrite a previous version file in the shared folder — save the new version alongside it and retire the old one deliberately, so a rollback is always possible',
          'Record what changed at each version directly in the script\'s Notes node, matching the same discipline used for custom node package versioning (Lesson 17 of the foundational course)',
        ],
        formula: { label: 'Versioning Rule', text: 'MAJOR changes break existing usage, MINOR changes do not — pick the number based on that distinction, not on how much work the change took' },
      },
      {
        id: 's5', heading: 'Writing Usage Documentation That Survives Staff Turnover', level: 'h2',
        content: `The real test of a script's documentation is not whether its author can still explain it — it is whether someone who has never met the author can pick it up a year later and use it correctly.`,
        items: [
          'Document, at minimum: what the script does, what each input expects (including format and units), what packages or dependencies it needs, and any known limitations or assumptions',
          'Write documentation assuming the reader knows Dynamo in general but knows nothing about this specific script or the DPC2025 conventions it assumes',
          'Store documentation with the script itself (a Notes node plus a short readme file in the bundle), not in a separate wiki or chat thread that may not survive as long as the script does',
          'Revisit and update documentation whenever the script itself changes — documentation describing an old version of a script is often worse than no documentation, since it actively misleads',
        ],
      },
      {
        id: 's6', heading: 'Handover Checklist Before Distributing a Script', level: 'h2',
        content: `Before a script is considered ready to hand off to the wider team or archived for future use, a short checklist confirms nothing has been missed.`,
        items: [
          'Dependencies (custom nodes, packages) are identified, documented, and either bundled or available via a shared package source',
          'The script has a version number following the office convention, and any prior version remains available rather than being overwritten',
          'Documentation exists describing purpose, inputs, dependencies, and known limitations, written for a reader unfamiliar with the script',
          'The script has been tested on a machine other than the author\'s own, confirming it runs without hidden local dependencies (a hardcoded personal drive path is a common failure caught only at this step)',
        ],
        formula: { label: 'Handover Standard', text: 'A script is ready to distribute once someone other than its author can run it successfully using only the bundle and its documentation' },
      },
    ],
    takeaways: [
      'Before distributing a script, identify every custom node and package it depends on — a red, unresolved node on a teammate\'s machine almost always means a missing dependency, not a broken script.',
      'Publish genuinely reusable custom nodes as a shared internal package via the Package Manager rather than bundling duplicate .dyf files with every script that uses them.',
      'Bundle a .dyn file together with any one-off dependency .dyf files and supporting reference files, plus a short readme describing the bundle contents.',
      'Use a MAJOR.MINOR version-numbering convention for office scripts: MINOR for non-breaking fixes, MAJOR for changes to inputs, outputs, or fundamental behaviour.',
      'Never overwrite a previous script version in the shared folder — save new versions alongside old ones so a rollback is always possible.',
      'Write usage documentation assuming the reader knows Dynamo generally but nothing about this specific script, and store it with the script itself so it survives staff turnover.',
    ],
    resource: { label: 'Script Distribution & Versioning Guide', type: 'PDF' },
    quiz: { label: 'Packaging & Distribution Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-22', title: 'Combining Dynamo & Excel for a Full Project Data Dashboard' },
    next: { id: 'dynp-24', title: 'Capstone — DPC2025 Full Automation Suite: Rooms, Sheets, Data & Issue' },
  },

  // ============================================================
  // LESSON DYNP-24 — Capstone
  // ============================================================
  {
    id: 'dynp-24', num: '24',
    title: 'Capstone — DPC2025 Full Automation Suite: Rooms, Sheets, Data & Issue',
    topic: 'Capstone', cat: 'advanced', readTime: '14 min', free: false,
    desc: 'Combine room numbering, sheet automation, a consolidated data export, and the drawing issue log into one Dynamo Player-runnable automation suite for DPC2025.',
    intro: `This capstone pulls together everything built across this course into one production tool: the "DPC2025 Automation Suite." Instead of running four or five separate scripts by hand every time the project reaches a milestone, this lesson combines room numbering, automated sheet and view creation, the consolidated Excel data export, and the drawing issue log into a single Dynamo Player-runnable tool. By the end, you will have a script that a coordinator opens once, fills in a handful of fields for, and runs — and everything from room data to the transmittal-ready issue log comes out the other end.`,
    sections: [
      {
        id: 's1', heading: 'The Brief', level: 'h2',
        content: `DPC2025 has reached its next coordination milestone. Historically, issuing at a milestone has meant running the room-numbering check, generating any missing sheets, exporting the project data dashboard, and updating the issue log as four separate, manually-triggered scripts — each with its own file path to remember and its own moment where a step could be skipped under deadline pressure.

**The task**: build a single Dynamo Player tool, the "DPC2025 Automation Suite," that in one run:
1. Validates and corrects room numbering against the DPC2025 numbering scheme
2. Generates any missing sheets and views for levels that do not yet have them
3. Exports the full project data dashboard (rooms, doors, sheets, warnings) to Excel
4. Writes the current issue's revision data to every sheet being issued, aligned to the correct ISO 19650 suitability code, and appends it to the master issue log`,
        formula: { label: 'Capstone Scope', text: 'Room Numbering + Sheet/View Automation + Data Dashboard Export + Issue Log Update, in one Player-runnable suite' },
      },
      {
        id: 's2', heading: 'Stage 1 — Room Numbering Validation', level: 'h2',
        content: `The suite opens with the room-numbering logic built earlier in this course, confirming every room on DPC2025 carries a correct, non-duplicate number before anything downstream depends on that data being trustworthy.`,
        subsections: [
          {
            heading: 'Build Steps',
            items: [
              'Collect all Room elements, read their current Number and Level parameters',
              'Check for duplicate numbers within the same level, and for rooms missing a number entirely',
              'Where the DPC2025 numbering scheme can auto-derive the correct number from level and sequence, correct it directly; where it cannot be inferred confidently, flag the room for manual review rather than guessing',
              'This stage produces a clean, current room list in memory that every later stage in the suite reads from — nothing downstream re-derives room data independently',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Stage 2 — Sheet and View Automation', level: 'h2',
        content: `With room data confirmed, the suite checks which levels still need a floor plan sheet and generates them, reusing the sheet/view generation pattern from earlier in this course.`,
        code: {
          label: 'Missing-Sheet Detection',
          lines: [
            'levels = <all Levels>',
            'existing_sheet_levels = <levels already represented by a sheet>',
            '',
            'missing_levels = List.SetDifference(levels, existing_sheet_levels)',
            '',
            '# For each missing level: create view, create sheet, place viewport',
            '# Sheet Number/Name generated directly from the ISO 19650 naming scheme',
          ],
        },
        items: [
          'Sheet names are generated directly from the project\'s naming schema at creation time, reducing naming errors before they can even occur, rather than relying on a later correction pass',
          'Newly created sheets are tracked in a list separate from pre-existing sheets — Stage 4 needs to know specifically which sheets are new to this issue',
        ],
      },
      {
        id: 's4', heading: 'Stage 3 — Consolidated Data Export', level: 'h2',
        content: `The suite exports the same multi-sheet dashboard workbook built earlier in this course — rooms, doors, sheets, warnings, and a Dashboard summary tab — using the now-validated room list from Stage 1 rather than re-querying rooms independently.`,
        items: [
          'Feed Stage 1\'s corrected room list directly into this export, so the dashboard reflects the numbering corrections made earlier in the same run rather than stale data',
          'Include the newly generated sheets from Stage 2 in the Sheets tab of the export, so the dashboard reflects the state of the model at the end of this run, not the start of it',
          'Write the workbook to a timestamped path (e.g., DPC2025_Dashboard_2026-07-01.xlsx) so this issue\'s dashboard snapshot is preserved alongside prior issues',
        ],
      },
      {
        id: 's5', heading: 'Stage 4 — Issue Log Update', level: 'h2',
        content: `The final stage writes this issue's revision description, date, and ISO 19650 suitability code to every sheet being issued — including the newly generated sheets from Stage 2 — and appends the result to the master issue log.`,
        code: {
          label: 'Closing Issue Log Write',
          lines: [
            'sheets_to_issue = existing_issued_sheets + new_sheets_from_stage2',
            '',
            'TransactionManager.Instance.EnsureInTransaction(doc)',
            'for sheet in sheets_to_issue:',
            '    desc_param = sheet.LookupParameter("Issue Description")',
            '    date_param = sheet.LookupParameter("Issue Date")',
            '    suit_param = sheet.LookupParameter("Suitability Code")',
            '    if desc_param and not desc_param.IsReadOnly: desc_param.Set(IN[1])',
            '    if date_param and not date_param.IsReadOnly: date_param.Set(IN[2])',
            '    if suit_param and not suit_param.IsReadOnly: suit_param.Set(IN[3])',
            'TransactionManager.Instance.TransactionTaskDone()',
            '',
            '# Append this issue\'s rows to the running master issue log workbook',
          ],
        },
        items: [
          'Newly generated sheets are issued with the same revision data as the rest of the set in the same pass — nothing generated in Stage 2 is left un-issued by accident',
          'Appending to the running master issue log (rather than writing a new file each time) keeps the full revision history for DPC2025 in one place, exactly as covered earlier in this course',
        ],
      },
      {
        id: 's6', heading: 'Assembling the Suite as a Player Tool', level: 'h2',
        content: `The four stages connect into one graph, applying the bulletproofing, packaging, and Player-design practices from throughout this course.`,
        items: [
          'Expose only the inputs a coordinator genuinely needs each run: the export folder path, this issue\'s revision description, issue date, and suitability code — room and sheet logic runs automatically with no separate inputs needed',
          'Wrap every stage\'s risky operations in the defensive patterns from Lesson 20 — explicit null checks before parameter writes, try/except around unpredictable per-element operations, and empty-list tolerance for any category that may legitimately have zero elements',
          'Document the suite with a Notes node covering all four stages, its package dependencies, and the file paths it assumes, following the documentation standard from Lesson 23',
          'Publish the finished .dyn file to the shared DPC2025 Player Tools folder with a clear version number (e.g., DPC2025_AutomationSuite_v1.0.dyn)',
          'Test the full suite end-to-end on a copy of the model, confirming each of the four stages produces the expected result before it is handed to the wider coordination team',
        ],
      },
      {
        id: 's7', heading: 'What You Built', level: 'h2',
        content: `Stepping back, the DPC2025 Automation Suite replaces four separate manually-triggered scripts — each with its own moment where a step could be forgotten under deadline pressure — with one Player-runnable tool that a coordinator opens, fills in four fields, and runs.

More importantly, this capstone demonstrates how the individual skills from this course combine into real production tooling: model auditing and defensive scripting keep the suite trustworthy against a messy real project file; Player design and packaging make it something the whole team can actually run, not just its author; and the room, sheet, data, and issue logic from earlier lessons in this course each contribute one stage of a single reliable pipeline.

That is the practical outcome this course has been building toward: not four disconnected scripts sitting in a folder, but one dependable tool that turns a recurring, error-prone milestone task into a single click — and a structure you can extend the next time DPC2025, or any other project, needs one more stage added to the suite.`,
        formula: { label: 'Capstone Complete', text: 'Room Numbering + Sheet Automation + Data Export + Issue Log = One Suite, One Player Click' },
      },
    ],
    takeaways: [
      'The DPC2025 Automation Suite chains four stages into one pipeline: room numbering validation, sheet/view automation, consolidated data export, and issue log update.',
      'Later stages read from the corrected, in-memory results of earlier stages (Stage 3\'s dashboard uses Stage 1\'s corrected room list and Stage 2\'s new sheets) rather than re-querying the model independently at each step.',
      'Newly generated sheets are issued in the same pass as pre-existing sheets, so nothing created during the run is accidentally left out of the issue log.',
      'The suite exposes only a handful of genuinely variable inputs (export path, issue description, date, suitability code) as Player fields, keeping the tool simple for a non-scripting coordinator to run.',
      'Defensive patterns (null checks, try/except, empty-list tolerance) from earlier in this course are applied throughout the suite so it survives a real, messy project file, not just a clean test case.',
      'Publishing the finished suite to Dynamo Player with clear versioning and documentation turns four separate manual scripts into one dependable, team-runnable tool.',
    ],
    resource: { label: 'DPC2025 Automation Suite Build Brief', type: 'PDF' },
    quiz: { label: 'Dynamo Practice Capstone Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dynp-23', title: 'Packaging & Distributing Scripts to the Team' },
    next: null,
  },

]
