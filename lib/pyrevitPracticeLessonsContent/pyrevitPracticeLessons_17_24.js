// ============================================================
// PYREVIT HANDS-ON PRACTICE — LESSONS pyp-17 through pyp-24 (ADVANCED)
// Sections: Validators | Multi-Model Tools | Robustness & Setup |
//           Deployment & Capstone
// File: lib/pyrevitPracticeLessonsContent/pyrevitPracticeLessons_17_24.js
// Index: lib/pyrevitPracticeLessonsData.js
// ============================================================

export const lessons_17_24 = [

  // ============================================================
  // LESSON PYP-17 — ISO 19650 Naming Validator
  // ============================================================
  {
    id: 'pyp-17', num: '17',
    title: 'Build a Full ISO 19650 Naming Validator',
    topic: 'Validators', cat: 'advanced', readTime: '12 min', free: false,
    desc: 'Write a production-grade Python validator using the re module to check every view, sheet, and family name in DPC2025 against the office ISO 19650 naming scheme, with a categorized report and optional CSV export.',
    intro: `The naming checks built earlier in this course were useful proofs of concept, but a real compliance tool needs to do more than flag one or two obvious mistakes. This lesson builds a full production-grade ISO 19650 naming validator for DPC2025: a real regular expression pattern that matches the project's Project-Originator-Volume-Level-Type-Role-Number convention, a scan across every view, sheet, and optionally family name in the model, a categorized pass/fail report printed to the pyRevit output window with clickable links straight to the non-conforming elements, and an optional CSV export so the results can be filed as a compliance audit trail.`,
    sections: [
      {
        id: 's1', heading: 'Why a Real Regex Pattern Beats String Checks', level: 'h2',
        content: `Earlier naming checks in this course relied on simple string methods — checking a prefix with startswith, or counting hyphens with split and len. Those checks catch obvious mistakes but cannot verify that each individual segment of a name is the correct length, the correct character set, or drawn from an approved code list.`,
        items: [
          'A regular expression pattern can validate an entire name in one test: the right number of segments, in the right order, each matching its own allowed character pattern',
          'Python\'s built-in re module needs no additional install — import re is available in every pyRevit Python environment out of the box',
          'A well-built pattern documents the naming standard itself — reading the regex tells a future maintainer exactly what is and is not allowed, without needing a separate written spec open alongside it',
        ],
        formula: { label: 'Validator Principle', text: 'A single regex pattern is both the check and the documentation of the naming standard' },
      },
      {
        id: 's2', heading: 'DPC2025 Naming Convention — Project-Originator-Volume-Level-Type-Role-Number', level: 'h2',
        content: `DPC2025's BEP defines a seven-field naming convention for views and sheets, separated by hyphens, matching the ISO 19650 information container naming pattern.`,
        code: {
          label: 'DPC2025 Naming Segments',
          lines: [
            'DPK - XYZ - 00 - DR - A - 0001',
            '',
            'Project     DPK   (fixed 3-letter project code)',
            'Originator  XYZ   (3-letter company/originator code)',
            'Volume      00    (2-digit volume or system code)',
            'Level       DR    (2-letter level/location code, e.g. GF, L1, DR for drawing register)',
            'Type        A     (1-letter information type: A=Architectural, S=Structural, M=Mechanical)',
            'Role        0001  (4-digit sequential number)',
          ],
        },
        items: [
          'Each segment has a fixed length and an approved character set — mixing this up (e.g. a 3-digit sequence instead of 4-digit) is exactly the kind of error a regex catches instantly and a human reviewer often misses',
          'The convention applies identically to view names and sheet numbers, so one pattern can validate both with the same function',
        ],
      },
      {
        id: 's3', heading: 'Writing the Regex Pattern', level: 'h2',
        content: `The pattern below encodes the DPC2025 convention directly: fixed-length alphanumeric groups separated by literal hyphens, built with Python's re module.`,
        code: {
          label: 'Building the Naming Pattern',
          lines: [
            'import re',
            '',
            '# Project-Originator-Volume-Level-Type-Role-Number',
            'NAMING_PATTERN = re.compile(',
            '    r"^DPK-[A-Z]{3}-\\d{2}-[A-Z]{2}-[A-SM]-\\d{4}$"',
            ')',
            '',
            'def check_name(name):',
            '    return bool(NAMING_PATTERN.match(name))',
          ],
        },
        items: [
          'The caret and dollar sign anchor the pattern to the whole string, so a name that is merely close but has extra trailing characters correctly fails, rather than partially matching',
          'Compiling the pattern once with re.compile outside the loop is significantly faster than calling re.match with a raw string pattern on every single element',
          'Keep the compiled pattern as a single named constant so a future convention change means editing one line, not hunting through the whole script',
        ],
        formula: { label: 'Anchoring Rule', text: 'Always anchor a naming pattern with caret and dollar sign so partial matches are correctly rejected' },
      },
      {
        id: 's4', heading: 'Scanning Views, Sheets, and Family Names', level: 'h2',
        content: `With the pattern defined, the validator collects every relevant element type in DPC2025 and tests each name against it, keeping track of both passes and failures.`,
        code: {
          label: 'Collecting and Validating Names',
          lines: [
            'from pyrevit import revit, DB',
            '',
            'doc = revit.doc',
            '',
            'views = DB.FilteredElementCollector(doc).OfClass(DB.View).ToElements()',
            'sheets = DB.FilteredElementCollector(doc).OfClass(DB.ViewSheet).ToElements()',
            '',
            'results = {"pass": [], "fail": []}',
            '',
            'for v in views:',
            '    if v.IsTemplate:',
            '        continue',
            '    name = v.Name',
            '    bucket = "pass" if check_name(name) else "fail"',
            '    results[bucket].append(("View", name, v.Id))',
            '',
            'for s in sheets:',
            '    name = s.SheetNumber',
            '    bucket = "pass" if check_name(name) else "fail"',
            '    results[bucket].append(("Sheet", name, s.Id))',
          ],
        },
        items: [
          'View templates are explicitly skipped with the IsTemplate check — templates do not carry the same naming convention as real, issued views and would otherwise pollute the fail list with false positives',
          'Sheets are validated against SheetNumber rather than Name, since DPC2025\'s convention is applied to the sheet number field, not the descriptive sheet title',
          'Family names can be added to the same scan by collecting DB.Family elements and applying a separate, looser pattern if the office family-naming standard differs from the view/sheet convention',
        ],
      },
      {
        id: 's5', heading: 'Printing a Categorized Report with Clickable Links', level: 'h2',
        content: `pyRevit's output window supports clickable links that select an element in the active view when clicked — turning a flat list of failures into a report a user can act on directly, without manually searching for each element afterward.`,
        code: {
          label: 'Categorized Output Report',
          lines: [
            'from pyrevit import output',
            '',
            'out = output.get_output()',
            'out.print_md("## ISO 19650 Naming Validation — DPC2025")',
            'out.print_md("**Passed:** {} **Failed:** {}".format(',
            '    len(results["pass"]), len(results["fail"])))',
            '',
            'if results["fail"]:',
            '    out.print_md("### Non-Conforming Elements")',
            '    for kind, name, eid in results["fail"]:',
            '        link = out.linkify(eid)',
            '        out.print_md("- **{}** `{}` {}".format(kind, name, link))',
          ],
        },
        items: [
          'out.linkify(eid) produces a clickable reference that selects and zooms to the element directly in the Revit view, which is far faster for a coordinator than reading an element ID and searching for it manually',
          'Group the printed report by category (Views, Sheets, Families) rather than one flat mixed list, so a coordinator reviewing only sheets is not scrolling past view failures to find them',
          'Print the pass/fail summary counts at the top of the report before the detail list, so the headline result is visible without scrolling',
        ],
        formula: { label: 'Report Rule', text: 'A validator report should let a user click straight to the problem, not just tell them a problem exists' },
      },
      {
        id: 's6', heading: 'Optional CSV Export for a Compliance Audit Trail', level: 'h2',
        content: `The printed report is useful in the moment, but a compliance record that outlives the current pyRevit session needs to be written to a file — a CSV export serves this purpose without requiring any library beyond Python's own csv module.`,
        code: {
          label: 'Exporting Findings to CSV',
          lines: [
            'import csv',
            'import datetime',
            '',
            'export_path = r"C:\\DPC2025\\QA\\NamingAudit_{}.csv".format(',
            '    datetime.date.today().isoformat())',
            '',
            'with open(export_path, mode="w", newline="") as f:',
            '    writer = csv.writer(f)',
            '    writer.writerow(["Status", "Category", "Name", "ElementId"])',
            '    for status in ("pass", "fail"):',
            '        for kind, name, eid in results[status]:',
            '            writer.writerow([status, kind, name, eid.IntegerValue])',
          ],
        },
        items: [
          'Timestamping the export file name means each run produces its own dated record, rather than overwriting the previous audit and losing the history a compliance trail depends on',
          'Writing both pass and fail rows (not just failures) gives a complete record of exactly what was checked at that point in time, which matters if the naming standard itself is later questioned or revised',
          'Make the CSV export optional behind a simple forms.alert confirmation, since not every run of the validator during active naming clean-up needs to produce a permanent audit file',
        ],
      },
    ],
    takeaways: [
      'Python\'s re module lets a single compiled, anchored regex pattern validate an entire name against a multi-segment naming convention in one test, rather than chaining several string checks.',
      'DPC2025\'s Project-Originator-Volume-Level-Type-Role-Number convention maps directly onto named regex groups separated by literal hyphens.',
      'Skip view templates explicitly with IsTemplate, and validate sheets against SheetNumber rather than Name, since the convention applies to different fields on different element types.',
      'pyRevit\'s output.linkify() produces a clickable report entry that selects the element directly in Revit, turning a flat failure list into something a coordinator can act on immediately.',
      'Group the printed report by category and print summary counts first, so the headline pass/fail result is visible without scrolling through detail.',
      'An optional, timestamped CSV export using Python\'s built-in csv module turns a one-off validation run into a permanent, dated compliance audit trail.',
    ],
    resource: { label: 'ISO 19650 Naming Validator Build Guide', type: 'PDF' },
    quiz: { label: 'Naming Validator Quiz', questions: 10, time: '5 min' },
    prev: { id: 'pyp-16', title: 'Build a Custom Ribbon Tab for the Office' },
    next: { id: 'pyp-18', title: 'Build an IFC Export Automation Tool' },
  },

  // ============================================================
  // LESSON PYP-18 — IFC Export Automation Tool
  // ============================================================
  {
    id: 'pyp-18', num: '18',
    title: 'Build an IFC Export Automation Tool',
    topic: 'Validators', cat: 'advanced', readTime: '11 min', free: false,
    desc: 'Drive Revit\'s IFC export directly from the Revit API using DB.IFCExportOptions and doc.Export, batching multiple saved export configurations in a single script run.',
    intro: `Exporting IFC through Revit's own Export dialog means stepping through the same configuration picker, folder browser, and confirm dialog every single time — tolerable once, repetitive across DPC2025's host model, two linked models, and a demolition-phase snapshot at every milestone. This lesson drives IFC export directly through the Revit API's DB.IFCExportOptions object and doc.Export method, and batches the process across multiple saved view/export configurations in one script run instead of stepping through the dialog by hand each time.`,
    sections: [
      {
        id: 's1', heading: 'Why Script the Export Instead of Using the Dialog', level: 'h2',
        content: `The Export IFC dialog is a perfectly good tool for a single, occasional export — the problem is repetition, not the dialog itself.`,
        items: [
          'Re-selecting the same configuration, folder, and file name several times per milestone is exactly the kind of repeated manual task that introduces an inconsistent setting on one file out of several',
          'A scripted export applies the identical configuration to every file in the batch by construction, since the same DB.IFCExportOptions object is reused across every call',
          'A pushbutton that runs the whole batch export in one click also removes the risk of a coordinator forgetting one of the four required exports under deadline pressure',
        ],
        formula: { label: 'Scripted Export Principle', text: 'One defined export configuration, applied identically to every file, replaces stepping through the dialog by hand each time' },
      },
      {
        id: 's2', heading: 'DB.IFCExportOptions', level: 'h2',
        content: `The Revit API exposes IFC export settings through the DB.IFCExportOptions class, which mirrors the same options available in the Export IFC dialog's configuration editor.`,
        code: {
          label: 'Building an Export Options Object',
          lines: [
            'from pyrevit import revit, DB',
            '',
            'doc = revit.doc',
            '',
            'ifc_options = DB.IFCExportOptions()',
            'ifc_options.FileVersion = DB.IFCVersion.IFC2x3CV2',
            'ifc_options.SpaceBoundaries = 1',
            'ifc_options.ExportBaseQuantities = True',
            'ifc_options.FilterViewId = DB.ElementId.InvalidElementId',
          ],
        },
        items: [
          'FileVersion selects the IFC schema (IFC2x3 Coordination View 2, IFC4 Reference View, etc.) — this must match whatever schema the coordination platform on DPC2025 expects',
          'SpaceBoundaries and ExportBaseQuantities mirror the equivalent checkboxes in the manual dialog, controlling whether room/space boundary geometry and quantity take-off data are included',
          'FilterViewId, when set to a specific 3D view instead of InvalidElementId, restricts the export to only the elements visible in that view — useful for exporting a coordination-specific subset rather than the whole model',
        ],
      },
      {
        id: 's3', heading: 'Calling doc.Export', level: 'h2',
        content: `With the options object configured, a single call to the document's Export method writes the IFC file — no transaction is required, since export only writes an external file and does not modify the open document.`,
        code: {
          label: 'Exporting a Single IFC File',
          lines: [
            'export_folder = r"C:\\DPC2025\\IFC_Export"',
            'file_name = "DPC2025_Host.ifc"',
            '',
            'doc.Export(export_folder, file_name, ifc_options)',
            '',
            'print("Exported: {}\\\\{}".format(export_folder, file_name))',
          ],
        },
        items: [
          'Export takes a folder path, a file name, and the IFCExportOptions object — the file name should not include the .ifc extension, since Revit appends it automatically',
          'Because no transaction wraps this call, exporting cannot be undone through Revit\'s undo stack and cannot corrupt the open model — it is a pure read-and-write-out operation',
          'Wrap the call in a try/except so a single failed export (a locked destination file, an invalid folder path) reports clearly rather than silently halting the rest of the batch',
        ],
      },
      {
        id: 's4', heading: 'Batching Across Multiple Saved Export Configurations', level: 'h2',
        content: `DPC2025 keeps several named export configurations — one per coordination scope — stored in the project. The batch tool loops over each configuration, applying it to produce a distinctly named output file per pass.`,
        code: {
          label: 'Looping Across Configurations',
          lines: [
            'export_jobs = [',
            '    {"name": "DPC2025_Host_Full.ifc", "phase": "New Work"},',
            '    {"name": "DPC2025_Host_Existing.ifc", "phase": "Existing"},',
            '    {"name": "DPC2025_Host_Demo.ifc", "phase": "Demolition"},',
            ']',
            '',
            'phases = {p.Name: p for p in DB.FilteredElementCollector(doc)',
            '          .OfCategory(DB.BuiltInCategory.OST_PhaseFilter).ToElements()}',
            '',
            'exported = []',
            'for job in export_jobs:',
            '    try:',
            '        ifc_options.ExportOfSpecificPhase = True',
            '        doc.Export(export_folder, job["name"], ifc_options)',
            '        exported.append(job["name"])',
            '    except Exception as ex:',
            '        print("FAILED: {} — {}".format(job["name"], ex))',
            '',
            'print("Batch complete: {} of {} exported".format(len(exported), len(export_jobs)))',
          ],
        },
        items: [
          'Define the batch as a simple list of dictionaries at the top of the script, so adding a fourth or fifth export job is a one-line addition, not a script rewrite',
          'Reuse the same ifc_options object across every job in the loop rather than rebuilding it each time, keeping every export in the batch consistent by construction',
          'Print a running summary line per job as it completes, so a long batch export gives visible progress rather than appearing to hang',
        ],
        formula: { label: 'Batch Rule', text: 'One script run should replace opening the Export IFC dialog once per file, not just automate the first file in the set' },
      },
      {
        id: 's5', heading: 'Verifying Batch Results', level: 'h2',
        content: `A batch export that reports success is not automatically trustworthy — the results still need a basic verification pass before being handed off to the coordination team.`,
        items: [
          'Confirm the expected number of .ifc files actually exist in the export folder after the run completes, using os.path.exists per expected file name rather than only trusting the printed success count',
          'Open at least one exported file per batch in a neutral IFC viewer to spot-check that geometry and property sets came through correctly, not just that doc.Export returned without raising an exception',
          'Log the batch outcome (date, files exported, configuration used, any failures) to a simple text or CSV file alongside the exports, so a later coordination issue can be traced back to exactly what was exported and when',
        ],
      },
      {
        id: 's6', heading: 'Wrapping the Tool as a Pushbutton', level: 'h2',
        content: `Packaged as a pushbutton in the DPC2025Tools ribbon panel, the batch export becomes a single click available to the whole team rather than a script only its author knows how to run.`,
        items: [
          'Keep the export_jobs list and export_folder path as the only two things a future maintainer needs to edit when the batch requirements change',
          'Show a forms.alert summary at the end of the run listing how many files exported successfully and naming any that failed, so the result is visible without opening the pyRevit output window',
          'Document the tool\'s assumptions (expected phase names, expected export folder) in the script\'s docstring so a teammate extending it later understands what it assumes about the model',
        ],
      },
    ],
    takeaways: [
      'DB.IFCExportOptions mirrors the settings available in the Export IFC dialog (FileVersion, SpaceBoundaries, ExportBaseQuantities) and can be configured directly from Python.',
      'doc.Export(folder, name, ifc_options) requires no transaction, since exporting writes an external file and does not modify the open document.',
      'Reusing a single IFCExportOptions object across a loop of export jobs guarantees every file in the batch shares an identical, consistent configuration.',
      'Defining the batch as a simple list of dictionaries at the top of the script makes adding or removing an export job a one-line change.',
      'Wrap each export call in try/except so one failed file (locked destination, bad path) does not halt the rest of the batch.',
      'Always verify batch results — confirm the expected files exist and spot-check at least one in a neutral IFC viewer — rather than trusting a clean script run alone.',
    ],
    resource: { label: 'IFC Export Automation Reference', type: 'PDF' },
    quiz: { label: 'IFC Export Automation Quiz', questions: 10, time: '5 min' },
    prev: { id: 'pyp-17', title: 'Build a Full ISO 19650 Naming Validator' },
    next: { id: 'pyp-19', title: 'Build a Multi-Model Audit Tool Across Linked Files' },
  },

  // ============================================================
  // LESSON PYP-19 — Multi-Model Audit Tool
  // ============================================================
  {
    id: 'pyp-19', num: '19',
    title: 'Build a Multi-Model Audit Tool Across Linked Files',
    topic: 'Multi-Model Tools', cat: 'advanced', readTime: '11 min', free: false,
    desc: 'Extend the linked-model health checker into a full multi-model audit, looping over every RevitLinkInstance in DPC2025 and aggregating a combined QA report across the host model and every link.',
    intro: `The linked-model health checker built earlier in this course looked at one link at a time. A real coordination audit on DPC2025 needs to see the whole picture at once: the host model and every architectural, structural, and MEP link it references, combined into a single report. This lesson extends that checker into a full multi-model audit — looping over every DB.RevitLinkInstance in the project, querying each linked Document directly, and aggregating a combined warning and QA report that covers the host model and every link in one pass.`,
    sections: [
      {
        id: 's1', heading: 'From One Link to Every Link', level: 'h2',
        content: `A single-link health check answers "is this one linked model okay?" A multi-model audit answers the more useful question a coordination lead actually asks: "is the whole federated model okay?"`,
        formula: { label: 'Multi-Model Audit Principle', text: 'Aggregate host plus every link into one report, rather than checking one link and assuming the rest are fine' },
      },
      {
        id: 's2', heading: 'Collecting Every RevitLinkInstance', level: 'h2',
        content: `A RevitLinkInstance represents one placed instance of a linked model in the host document. DPC2025 typically has three or four active links — architectural, structural, and one or two MEP disciplines.`,
        code: {
          label: 'Collecting Link Instances',
          lines: [
            'from pyrevit import revit, DB',
            '',
            'doc = revit.doc',
            '',
            'link_instances = DB.FilteredElementCollector(doc)\\',
            '    .OfClass(DB.RevitLinkInstance).ToElements()',
            '',
            'print("Found {} link instances".format(len(link_instances)))',
            'for li in link_instances:',
            '    print("  - {}".format(li.Name))',
          ],
        },
        items: [
          'A project can contain more RevitLinkInstance elements than distinct linked files, if the same file is linked in more than once (uncommon, but worth accounting for in the report rather than assuming a 1:1 mapping)',
          'li.Name gives the instance name as shown in the project browser, which is usually more informative to print in a report than the underlying file path',
        ],
      },
      {
        id: 's3', heading: 'Checking Link Status Before Querying', level: 'h2',
        content: `Not every link instance points at a currently loaded, resolvable file — a link can be unloaded, or its path can have become invalid since it was last opened. Checking status first avoids the audit crashing on a link that simply is not available.`,
        code: {
          label: 'Checking Linked File Status',
          lines: [
            'link_type = doc.GetElement(link_instance.GetTypeId())',
            'status = link_type.GetLinkedFileStatus()',
            '',
            'if status == DB.LinkedFileStatus.Loaded:',
            '    linked_doc = link_instance.GetLinkDocument()',
            'elif status == DB.LinkedFileStatus.Unloaded:',
            '    print("SKIPPED (unloaded): {}".format(link_instance.Name))',
            '    linked_doc = None',
            'else:',
            '    print("SKIPPED (not found/invalid): {}".format(link_instance.Name))',
            '    linked_doc = None',
          ],
        },
        items: [
          'DB.RevitLinkType.GetLinkedFileStatus() reports whether the linked file is currently Loaded, Unloaded, or otherwise not resolvable (path invalid, file not found)',
          'link_instance.GetLinkDocument() returns the actual linked Document object only when the link is loaded — calling into it on an unloaded link returns None rather than raising, so always check for None before querying further',
          'Recording a skipped link explicitly in the report (rather than silently omitting it) matters — a coordination lead needs to know a link was not checked, not just see it missing with no explanation',
        ],
        formula: { label: 'Status-Check Rule', text: 'Always confirm a link is Loaded before querying it — an unloaded or missing link is a normal, reportable state, not a script bug' },
      },
      {
        id: 's4', heading: 'Querying Each Linked Document', level: 'h2',
        content: `Once a linked Document is confirmed loaded and accessible, it behaves like any other Document object for read purposes — the same FilteredElementCollector and GetWarnings patterns used on the host model apply directly to it.`,
        code: {
          label: 'Auditing a Single Linked Document',
          lines: [
            'def audit_document(target_doc, source_name):',
            '    warnings = target_doc.GetWarnings()',
            '    rooms = DB.FilteredElementCollector(target_doc)\\',
            '        .OfCategory(DB.BuiltInCategory.OST_Rooms).ToElements()',
            '    unplaced = [r for r in rooms if r.Location is None]',
            '',
            '    return {',
            '        "source": source_name,',
            '        "warning_count": len(warnings),',
            '        "room_count": len(rooms),',
            '        "unplaced_rooms": len(unplaced),',
            '    }',
          ],
        },
        items: [
          'Writing the audit logic as a single function that takes any Document (host or linked) as an argument means the same code checks the host model and every link without duplication',
          'A linked document\'s own warnings are separate from the host document\'s warnings — GetWarnings() must be called once per document to see the complete picture across the federation',
          'Because this is read-only querying, no transaction is needed against either the host or any linked document — the audit never writes to a linked file',
        ],
      },
      {
        id: 's5', heading: 'Aggregating a Combined Report', level: 'h2',
        content: `The final step runs the same audit function across the host document and every successfully loaded link, then combines the individual results into one report a coordination lead reads as a single picture of the federated model.`,
        code: {
          label: 'Aggregating Host and Link Results',
          lines: [
            'all_results = [audit_document(doc, "HOST: DPC2025")]',
            '',
            'for li in link_instances:',
            '    link_type = doc.GetElement(li.GetTypeId())',
            '    if link_type.GetLinkedFileStatus() == DB.LinkedFileStatus.Loaded:',
            '        linked_doc = li.GetLinkDocument()',
            '        if linked_doc:',
            '            all_results.append(audit_document(linked_doc, li.Name))',
            '',
            'from pyrevit import output',
            'out = output.get_output()',
            'out.print_md("## Multi-Model Audit — DPC2025 Federation")',
            'for r in all_results:',
            '    out.print_md("**{}** — Warnings: {}, Rooms: {}, Unplaced: {}".format(',
            '        r["source"], r["warning_count"], r["room_count"], r["unplaced_rooms"]))',
          ],
        },
        items: [
          'Always audit the host document first and label it clearly, so the report distinguishes host-model issues from link-originated ones at a glance',
          'A combined total row (sum of warnings across every document) is a useful addition alongside the per-document breakdown, giving a single top-line federation health number',
          'Since this script only reads from linked documents and never opens them for editing, it can be run safely at any time without needing to coordinate with whoever owns each linked file',
        ],
        formula: { label: 'Aggregation Rule', text: 'One combined report, clearly labelled by source, beats four separate single-model checks a coordinator has to mentally merge themselves' },
      },
      {
        id: 's6', heading: 'Handling a Growing Number of Links Over Time', level: 'h2',
        content: `DPC2025 is not guaranteed to keep the same set of links for its whole life — a new MEP discipline link, or a temporary survey link, can be added mid-project, and the audit tool needs to keep working without a rewrite each time.`,
        items: [
          'Never hardcode an expected list of link names to check — always collect link_instances dynamically via FilteredElementCollector so a newly added link is picked up automatically on the next run',
          'Test the tool immediately after any link is added or removed from DPC2025, since this is exactly the moment a hardcoded assumption elsewhere in the script would first surface as a bug',
          'Keep the per-document audit_document function generic (accepting any Document) specifically so extending the audit to a fifth or sixth link requires no change to the audit logic itself',
        ],
      },
    ],
    takeaways: [
      'DB.FilteredElementCollector(doc).OfClass(DB.RevitLinkInstance) collects every placed link instance in the host document, which should always be queried dynamically rather than assumed from a fixed list.',
      'DB.RevitLinkType.GetLinkedFileStatus() must be checked as Loaded before calling GetLinkDocument(), since an unloaded or invalid link returns None rather than raising an error.',
      'A single audit_document function that accepts any Document object lets identical logic run against the host model and every linked model without duplicating code.',
      'Each linked document has its own separate warning set — GetWarnings() must be called once per document to see the complete federation-wide picture.',
      'Aggregating results into one combined, clearly-labelled report (host first, then each link) is more useful to a coordination lead than several separate single-model reports.',
      'Because links can be added or removed from a live project, the audit must collect link instances dynamically each run rather than hardcoding an expected set of link names.',
    ],
    resource: { label: 'Multi-Model Audit Tool Guide', type: 'PDF' },
    quiz: { label: 'Multi-Model Audit Quiz', questions: 10, time: '5 min' },
    prev: { id: 'pyp-18', title: 'Build an IFC Export Automation Tool' },
    next: { id: 'pyp-20', title: 'Build a Shared Parameter Sync Tool' },
  },

  // ============================================================
  // LESSON PYP-20 — Shared Parameter Sync Tool
  // ============================================================
  {
    id: 'pyp-20', num: '20',
    title: 'Build a Shared Parameter Sync Tool',
    topic: 'Multi-Model Tools', cat: 'advanced', readTime: '11 min', free: false,
    desc: 'Compare which shared parameters are bound to which categories across DPC2025\'s architectural and structural models, report mismatches, and optionally bind missing definitions from a version-controlled shared parameter file.',
    intro: `DPC2025's architectural and structural models are meant to share an identical set of shared parameters — the same Department, Fire Rating, or Cost Code fields bound to the same categories in both files. In practice, parameter bindings drift: a parameter added to the architectural model during a coordination push often never makes it into the structural file. This lesson builds a tool that compares parameter bindings across DPC2025's models, reports the mismatches, and optionally binds any missing parameter definitions programmatically from a shared, version-controlled shared-parameter text file.`,
    sections: [
      {
        id: 's1', heading: 'Why Parameter Bindings Drift Across Models', level: 'h2',
        content: `Shared parameters are defined once in a shared parameter text file, but binding them to categories is a per-model, per-user action — nothing about Revit keeps two separate project files in sync automatically.`,
        items: [
          'A parameter bound to Walls in the architectural model has no relationship whatsoever to the structural model unless someone deliberately binds it there too',
          'Drift usually happens quietly — a parameter gets added under deadline pressure in one model to solve an immediate problem, and updating the other model is forgotten or deferred',
          'A schedule or tag referencing a parameter that is not bound in a particular model fails silently or shows blank values, which is often how drift is first (and confusingly) discovered',
        ],
        formula: { label: 'Drift Principle', text: 'Two project files never stay in sync automatically — every shared parameter binding is a separate, per-file action' },
      },
      {
        id: 's2', heading: 'Reading Bound Parameters from a Document', level: 'h2',
        content: `Each Document exposes its currently bound parameters through its Bindings map, which pairs a parameter definition with the category set it is bound to.`,
        code: {
          label: 'Reading Current Bindings',
          lines: [
            'from pyrevit import revit, DB',
            '',
            'def get_bindings(target_doc):',
            '    bindings = {}',
            '    it = target_doc.ParameterBindings.ForwardIterator()',
            '    it.Reset()',
            '    while it.MoveNext():',
            '        definition = it.Key',
            '        binding = it.Current',
            '        categories = [c.Name for c in binding.Categories]',
            '        bindings[definition.Name] = categories',
            '    return bindings',
          ],
        },
        items: [
          'ParameterBindings.ForwardIterator() is the standard Revit API pattern for walking every bound parameter in a document — there is no simple list accessor, so the iterator pattern is required',
          'The dictionary produced maps a parameter name directly to the list of category names it is bound to in that document, which is exactly the shape needed for a side-by-side comparison',
          'This same function works against the architectural document, the structural document, or any other project document opened for comparison — write it once, generically',
        ],
      },
      {
        id: 's3', heading: 'Comparing Bindings Across Two Models', level: 'h2',
        content: `With bindings read from both the architectural and structural documents, a straightforward set comparison surfaces every parameter that is bound inconsistently between the two.`,
        code: {
          label: 'Comparing Two Binding Sets',
          lines: [
            'arch_bindings = get_bindings(arch_doc)',
            'struct_bindings = get_bindings(struct_doc)',
            '',
            'all_params = set(arch_bindings.keys()) | set(struct_bindings.keys())',
            '',
            'mismatches = []',
            'for param_name in sorted(all_params):',
            '    arch_cats = set(arch_bindings.get(param_name, []))',
            '    struct_cats = set(struct_bindings.get(param_name, []))',
            '    if arch_cats != struct_cats:',
            '        mismatches.append({',
            '            "parameter": param_name,',
            '            "arch_only": sorted(arch_cats - struct_cats),',
            '            "struct_only": sorted(struct_cats - arch_cats),',
            '        })',
          ],
        },
        items: [
          'Building the union of parameter names from both models (rather than just iterating one model\'s list) catches a parameter that exists in one file but is completely absent from the other, not just ones bound to different categories in each',
          'Reporting arch_only and struct_only category differences separately, rather than a single blunt "mismatch" flag, tells a coordinator exactly what needs to change in which model',
          'A parameter bound to identical categories in both models produces no entry at all in the mismatch list — the report only shows what actually needs attention',
        ],
        formula: { label: 'Comparison Rule', text: 'Compare the union of both models\' parameters, not just one model\'s list, to catch parameters missing entirely from one file' },
      },
      {
        id: 's4', heading: 'Reading the Shared Parameter Text File', level: 'h2',
        content: `The shared parameter text file is the single source of truth for parameter definitions across DPC2025 — both models should draw their bindings from the same version-controlled file rather than each maintaining a separate definition.`,
        items: [
          'DPC2025\'s shared parameter file is stored in a version-controlled location (the same Git repository covered in Lesson 23) so any parameter addition is tracked with a clear history of who added what and when',
          'app.OpenSharedParameterFile() (via the Application object) reads the current shared parameter file into a DefinitionFile object that a script can query for available parameter definitions',
          'Confirm every team member\'s Revit installation points at the same shared parameter file path (Manage tab → Shared Parameters) before running a sync — binding from two different files with the same parameter names but different GUIDs creates a much worse problem than the original drift',
        ],
        formula: { label: 'Source of Truth Rule', text: 'One version-controlled shared parameter file, referenced identically by every model, is what "in sync" actually depends on' },
      },
      {
        id: 's5', heading: 'Programmatically Binding a Missing Parameter', level: 'h2',
        content: `Once a mismatch is identified and confirmed against the shared parameter file, the missing binding can be added programmatically rather than walking a user through Manage tab → Shared Parameters by hand.`,
        code: {
          label: 'Binding a Missing Parameter',
          lines: [
            'def bind_parameter(target_doc, definition, category_names, is_instance=True):',
            '    categories = target_doc.Settings.Categories',
            '    cat_set = target_doc.Application.Create.NewCategorySet()',
            '    for name in category_names:',
            '        cat_set.Insert(categories.get_Item(name))',
            '',
            '    binding_map = target_doc.ParameterBindings',
            '    if is_instance:',
            '        new_binding = target_doc.Application.Create.NewInstanceBinding(cat_set)',
            '    else:',
            '        new_binding = target_doc.Application.Create.NewTypeBinding(cat_set)',
            '',
            '    with revit.Transaction("Bind Missing Shared Parameter", target_doc):',
            '        binding_map.Insert(definition, new_binding)',
          ],
        },
        items: [
          'Always confirm whether the missing binding should be an instance or type binding before running this — binding the wrong kind creates a new, different mismatch rather than fixing the original one',
          'Wrap the Insert call in a transaction scoped to the specific target_doc being modified, since binding a parameter is a genuine model change, unlike the read-only comparison in Step 3',
          'Present the list of proposed bindings to a user for confirmation (via forms.alert or a SelectFromList review step) before committing — auto-binding every mismatch without review risks binding a parameter to categories it was only ever meant to have in one of the two models deliberately',
        ],
      },
      {
        id: 's6', heading: 'Running the Sync as a Recurring Check', level: 'h2',
        content: `Parameter drift is an ongoing risk for as long as DPC2025's architectural and structural models are developed by separate teams, so this comparison earns its value as a repeated check, not a one-time fix.`,
        items: [
          'Run the comparison (Steps 2-3) on a regular cadence — after each major coordination push is a practical trigger point — even when no binding fix is being applied that day',
          'Keep the binding step (Step 5) as a deliberate, reviewed action rather than something that runs automatically as part of a routine check, since not every difference between the models is necessarily a mistake',
          'Extend the same comparison function to a third model (MEP, for example) by calling get_bindings against it and folding its result into the same union-based comparison, rather than writing a separate two-model-only comparison for each new discipline added',
        ],
      },
    ],
    takeaways: [
      'Shared parameter bindings are per-document and never sync automatically between two project files — drift happens whenever one model is updated and the other is not.',
      'Document.ParameterBindings.ForwardIterator() is the standard pattern for reading every currently bound parameter and its category set from a document.',
      'Comparing the union of parameter names from both models (not just one model\'s list) catches parameters missing entirely from one file, not just ones bound to different categories.',
      'A version-controlled shared parameter text file, referenced identically by every project model, is the actual source of truth that keeping models "in sync" depends on.',
      'Programmatically binding a missing parameter requires building a CategorySet, creating an instance or type binding via the Application.Create factory, and wrapping the Insert call in its own transaction.',
      'Present proposed bindings for user review before committing them — the comparison should run routinely, but auto-binding every detected mismatch without review risks masking an intentional model-specific difference.',
    ],
    resource: { label: 'Shared Parameter Sync Tool Guide', type: 'PDF' },
    quiz: { label: 'Shared Parameter Sync Quiz', questions: 10, time: '5 min' },
    prev: { id: 'pyp-19', title: 'Build a Multi-Model Audit Tool Across Linked Files' },
    next: { id: 'pyp-21', title: 'Bulletproofing Your Scripts — Handling Nulls, Empty Lists & Real-World Edge Cases in PyRevit' },
  },

  // ============================================================
  // LESSON PYP-21 — Bulletproofing Scripts (Python-Specific)
  // ============================================================
  {
    id: 'pyp-21', num: '21',
    title: 'Bulletproofing Your Scripts — Handling Nulls, Empty Lists & Real-World Edge Cases in PyRevit',
    topic: 'Robustness & Setup', cat: 'advanced', readTime: '10 min', free: false,
    desc: 'Apply defensive Python patterns — None checks, try/except, and len() guards — so production pyRevit tools survive a messy real project file, not just DPC2025\'s clean sample.',
    intro: `Every tool built so far in this course has been tested against DPC2025's clean sample project. A real project file is never that tidy — parameters left blank, categories with zero elements on some levels, and the occasional element that simply does not behave the way the rest of its category does. This lesson covers the Python-specific defensive patterns that keep a production pyRevit tool running through that mess: explicit None checks before calling parameter methods, guarding against empty FilteredElementCollector results, wrapping risky operations in try/except with proper logging, and testing against a real, messy project file before a tool ever reaches the rest of the team.`,
    sections: [
      {
        id: 's1', heading: 'Why a Clean Sample File Is Not a Real Test', level: 'h2',
        content: `DPC2025's sample file has been deliberately kept clean throughout this course so the underlying API concepts stay visible. A production tool tested only against that file has not really been tested — it has only been demonstrated.`,
        formula: { label: 'Production Standard', text: 'A pyRevit tool is not finished until it survives a messy real project file, not just a clean sample' },
      },
      {
        id: 's2', heading: 'Checking for None Before Calling Parameter Methods', level: 'h2',
        content: `LookupParameter and get_Parameter both return None when the requested parameter does not exist on a given element — calling .AsString() or .Set() directly on that None result raises an AttributeError and can halt the whole script.`,
        code: {
          label: 'None Check Before Reading a Parameter',
          lines: [
            'param = element.LookupParameter("Department")',
            'if param is None:',
            '    print("Skipped {}: parameter not found".format(element.Id))',
            'else:',
            '    value = param.AsString()',
          ],
        },
        items: [
          'A missing parameter is a completely normal, expected outcome on a real project — not every element in a category is guaranteed to have every parameter, especially across mixed families from different sources',
          'Checking is param is None (or the equivalent if not param, which also works since Revit returns None rather than a falsy object) before calling any method on the result is the single most common defensive check in production pyRevit scripts',
          'The same check applies before writing: calling .Set() on a None parameter reference fails identically to calling .AsString() on one',
        ],
        formula: { label: 'None-Check Rule', text: 'Never call a method on a parameter reference without first confirming it is not None' },
      },
      {
        id: 's3', heading: 'Guarding Against Empty FilteredElementCollector Results', level: 'h2',
        content: `Not every category exists on every project, or on every level of a project — a collector returning zero elements is a normal, valid outcome that downstream logic needs to tolerate rather than treat as an error.`,
        code: {
          label: 'Guarding an Empty Collector Result',
          lines: [
            'furniture = DB.FilteredElementCollector(doc, level.Id)\\',
            '    .OfCategory(DB.BuiltInCategory.OST_Furniture).ToElements()',
            '',
            'if len(furniture) == 0:',
            '    print("No Furniture elements found on level: {}".format(level.Name))',
            'else:',
            '    for f in furniture:',
            '        process_element(f)',
          ],
        },
        items: [
          'A basement level on DPC2025 legitimately having zero Furniture category elements is not a bug — a script that treats that as an error will misreport a perfectly normal project state',
          'Checking len(collection) == 0 (or the equivalent if not collection: in Python, since an empty list is falsy) before looping avoids running logic that silently does nothing and reports it as if it succeeded',
          'State the empty result explicitly in any printed report ("0 elements found") rather than letting an empty category silently produce a blank, unexplained report section',
        ],
        formula: { label: 'Empty Result Rule', text: 'An empty collector result is a valid real-world outcome, not automatically a failure to fix' },
      },
      {
        id: 's4', heading: 'Wrapping Risky Operations in Try/Except', level: 'h2',
        content: `Some operations are inherently unpredictable across a large, messy real project — a parameter type that varies unexpectedly within a category, or an element with corrupted geometry. Python\'s try/except keeps one bad element from halting an entire batch.`,
        code: {
          label: 'Try/Except with Logger',
          lines: [
            'from pyrevit import script',
            '',
            'logger = script.get_logger()',
            'results = []',
            '',
            'for element in elements:',
            '    try:',
            '        area = element.LookupParameter("Area").AsDouble()',
            '        results.append((element.Id, area))',
            '    except Exception as ex:',
            '        logger.error("Element {} failed: {}".format(element.Id, ex))',
            '        continue',
            '',
            'print("Processed {} of {} elements successfully".format(',
            '    len(results), len(elements)))',
          ],
        },
        items: [
          'Catch the exception inside the loop, per element, rather than wrapping the entire loop in one try/except — wrapping the whole loop stops processing at the very first failure instead of continuing past it',
          'Use script.get_logger() rather than a bare print statement for errors specifically — pyRevit\'s logger distinguishes error-level messages from routine output in the log, making real problems easier to find later',
          'Reserve try/except for genuinely unpredictable operations; do not use it as a substitute for the explicit None and len() checks from Steps 2 and 3, which are more precise and more informative when they do trigger',
        ],
      },
      {
        id: 's5', heading: 'Returning a Skipped/Failed Summary, Never Failing Silently', level: 'h2',
        content: `A defensive script that quietly skips problem elements without reporting them is not meaningfully safer than one that crashes — the coordinator running it needs to know what was skipped and why.`,
        code: {
          label: 'Reporting Skipped Elements',
          lines: [
            'skipped = []',
            '',
            'for element in elements:',
            '    param = element.LookupParameter("Department")',
            '    if param is None:',
            '        skipped.append((element.Id, "parameter not found"))',
            '        continue',
            '    if param.IsReadOnly:',
            '        skipped.append((element.Id, "parameter read-only"))',
            '        continue',
            '    param.Set("Level 3 Fitout")',
            '',
            'if skipped:',
            '    print("Skipped {} elements:".format(len(skipped)))',
            '    for eid, reason in skipped:',
            '        print("  - {}: {}".format(eid, reason))',
          ],
        },
        items: [
          'Track every skipped element and the specific reason it was skipped, rather than a single aggregate skip count — a coordinator needs to know which elements to look at, not just how many',
          'Print the skipped summary even when it is empty (as "0 elements skipped"), so the absence of problems is confirmed rather than left ambiguous',
        ],
      },
      {
        id: 's6', heading: 'Testing Against a Messy Real Project File', level: 'h2',
        content: `The most effective bulletproofing practice is not a code pattern at all — it is where the tool actually gets tested before it is trusted with the rest of the team.`,
        items: [
          'Test new tools against a real, in-progress project file (a copy of DPC2025 at its current, imperfect state, or an actual live office project) rather than only the clean sample used throughout this course',
          'A clean sample file will not have the blank parameters, inconsistent naming, or mixed-source families that a real project accumulates over months — exactly the conditions that reveal missing defensive checks',
          'Deliberately test against known problem elements (an element with no Department value, a family imported from a different office standard) rather than only the straightforward, well-behaved elements',
          'Treat a tool that only runs cleanly against a tidy sample file as still in development, not ready to package into the ribbon (Lesson 16) or distribute to the team (Lesson 23)',
        ],
        formula: { label: 'Testing Standard', text: 'If it only works on a clean sample, it is not tested — test on the messy real project first' },
      },
    ],
    takeaways: [
      'Always check if param is None before calling .AsString(), .AsDouble(), or .Set() on a parameter reference — a missing parameter is a normal, expected outcome, not a bug to route around silently.',
      'An empty FilteredElementCollector result (len() == 0) is a valid real-world outcome — a category can legitimately have zero elements on a given level, and downstream logic must tolerate that rather than error on it.',
      'Wrap genuinely unpredictable per-element operations in try/except inside the loop (not around the whole loop), and log errors with script.get_logger() rather than letting one bad element halt the batch.',
      'Reserve try/except for unpredictable operations; explicit None and len() checks are more precise for the common, expected failure cases.',
      'Track and report every skipped or failed element with its specific reason, never failing silently and never swallowing the error list.',
      'Test production pyRevit tools against a messy, real, in-progress project file, not just DPC2025\'s clean sample — that is where missing defensive checks actually get found.',
    ],
    resource: { label: 'Defensive Python Patterns for PyRevit Guide', type: 'PDF' },
    quiz: { label: 'Bulletproofing PyRevit Scripts Quiz', questions: 10, time: '5 min' },
    prev: { id: 'pyp-20', title: 'Build a Shared Parameter Sync Tool' },
    next: { id: 'pyp-22', title: 'Build a Project Setup Wizard — Automate the DPC2025 Template Configuration' },
  },

  // ============================================================
  // LESSON PYP-22 — Project Setup Wizard
  // ============================================================
  {
    id: 'pyp-22', num: '22',
    title: 'Build a Project Setup Wizard — Automate the DPC2025 Template Configuration',
    topic: 'Robustness & Setup', cat: 'advanced', readTime: '12 min', free: false,
    desc: 'Build a forms-driven wizard that walks a user through configuring a new project from the office template, committing project information, levels, sheets, and a standard family set in one guided flow.',
    intro: `Starting a new project from the DPC2025 office template involves a checklist of setup steps that are easy to do out of order, or forget entirely, under the pressure of a project kickoff: setting project information fields, creating the standard set of levels and views, generating the standard sheet set, and loading the office's standard family library. This lesson builds a guided Project Setup Wizard using pyRevit's forms module — a single pushbutton flow that walks a user through each step with clear prompts, then commits everything in one reviewed transaction.`,
    sections: [
      {
        id: 's1', heading: 'Why a Guided Wizard Beats a Checklist', level: 'h2',
        content: `A written setup checklist depends entirely on someone reading it carefully and following every step in order — a guided tool removes that dependency by making each step something the user is walked through directly, in sequence, inside Revit itself.`,
        formula: { label: 'Wizard Principle', text: 'A guided multi-step tool cannot be skipped or reordered by accident the way a written checklist can' },
      },
      {
        id: 's2', heading: 'Step 1 — Collecting Project Information with forms.ask_for_string', level: 'h2',
        content: `The wizard opens by prompting for the handful of project information fields that vary per project — project name, project number, and client name — using pyRevit\'s simple string-input prompt.`,
        code: {
          label: 'Prompting for Project Information',
          lines: [
            'from pyrevit import forms, revit, DB',
            '',
            'doc = revit.doc',
            '',
            'project_name = forms.ask_for_string(',
            '    default="", prompt="Enter the project name:", title="DPC2025 Setup Wizard")',
            '',
            'project_number = forms.ask_for_string(',
            '    default="", prompt="Enter the project number:", title="DPC2025 Setup Wizard")',
            '',
            'if not project_name or not project_number:',
            '    forms.alert("Project name and number are required. Setup cancelled.")',
            '    script.exit()',
          ],
        },
        items: [
          'forms.ask_for_string returns None if the user cancels the dialog, so checking the result before continuing prevents the wizard from proceeding with a blank or missing value',
          'Keep the prompt title consistent ("DPC2025 Setup Wizard") across every step, so the user always recognizes which tool they are partway through',
          'Collect the values into local variables now, but do not write anything to the model yet — nothing should be committed to the document until the final confirmation step',
        ],
      },
      {
        id: 's3', heading: 'Step 2 — Choosing a Level Set with forms.SelectFromList', level: 'h2',
        content: `DPC2025 offers a small number of standard level configurations depending on building type — the wizard presents these as a selectable list rather than asking the user to type level names and elevations by hand.`,
        code: {
          label: 'Selecting a Level Configuration',
          lines: [
            'level_configs = {',
            '    "Low-Rise (4 levels)": ["Ground Floor", "Level 1", "Level 2", "Roof"],',
            '    "Mid-Rise (8 levels)": ["Ground Floor", "Level 1", "Level 2", "Level 3",',
            '                            "Level 4", "Level 5", "Level 6", "Roof"],',
            '}',
            '',
            'chosen_config = forms.SelectFromList.show(',
            '    sorted(level_configs.keys()),',
            '    title="Select a Level Configuration",',
            '    button_name="Select")',
            '',
            'if not chosen_config:',
            '    forms.alert("No level configuration selected. Setup cancelled.")',
            '    script.exit()',
            '',
            'levels_to_create = level_configs[chosen_config]',
          ],
        },
        items: [
          'forms.SelectFromList.show presents a clean list-selection dialog rather than requiring a user to know exact level names and elevations from memory',
          'Storing the available configurations as a plain dictionary keeps this step simple to extend — adding a new building-type configuration is a one-line addition to level_configs',
          'As in Step 1, checking for a None or cancelled result before continuing prevents the wizard from creating levels based on an empty selection',
        ],
      },
      {
        id: 's4', heading: 'Step 3 — Reviewing Standard Views, Sheets, and Family Set', level: 'h2',
        content: `Before anything is committed, the wizard shows the user exactly what will be created and loaded, so the final confirmation step in the next section is an informed one rather than a blind click.`,
        subsections: [
          {
            heading: 'What the Wizard Will Set Up',
            items: [
              'Levels — one per entry in the chosen level configuration from Step 2',
              'Views — one floor plan view per created level, generated automatically to match',
              'Sheets — a standard cover sheet and one floor plan sheet per level, numbered per the DPC2025 naming convention from Lesson 17',
              'Family set — the office\'s standard title block, door, and window family types, loaded from the shared office library path',
            ],
          },
        ],
        items: [
          'Presenting this summary as a forms.alert or a read-only list dialog before the final commit step gives the user one last chance to catch a wrong level configuration or a missing project number',
          'List the family file paths that will be loaded explicitly, since a missing or renamed family file in the shared library is a common real-world failure point worth surfacing before committing rather than after',
        ],
      },
      {
        id: 's5', heading: 'Step 4 — Final Confirmation and Committing in One Transaction', level: 'h2',
        content: `Only after the user explicitly confirms does the wizard commit every setup step — project information, levels, views, sheets, and family loading — wrapped together so a cancelled or failed run does not leave the project half-configured.`,
        code: {
          label: 'Confirmed Commit in a TransactionGroup',
          lines: [
            'confirmed = forms.alert(',
            '    "Ready to set up {} ({}) with the {} level configuration. Continue?".format(',
            '        project_name, project_number, chosen_config),',
            '    yes=True, no=True)',
            '',
            'if not confirmed:',
            '    forms.alert("Setup cancelled. No changes were made.")',
            '    script.exit()',
            '',
            'with revit.TransactionGroup("DPC2025 Project Setup Wizard", doc):',
            '    with revit.Transaction("Set Project Information", doc):',
            '        set_project_info(doc, project_name, project_number)',
            '    with revit.Transaction("Create Levels and Views", doc):',
            '        create_levels(doc, levels_to_create)',
            '    with revit.Transaction("Create Standard Sheets", doc):',
            '        create_sheets(doc, levels_to_create)',
            '    with revit.Transaction("Load Standard Families", doc):',
            '        load_standard_families(doc)',
            '',
            'forms.alert("DPC2025 project setup complete.")',
          ],
        },
        items: [
          'forms.alert with yes=True, no=True returns a boolean, giving a clean final gate before any Transaction opens — nothing is committed until this explicit confirmation',
          'Wrapping the four individual Transactions inside one TransactionGroup means that if any single step fails partway through, the whole group can be rolled back together, rather than leaving the project with levels created but no sheets',
          'Keep each setup step in its own named Transaction inside the group — this keeps Revit\'s undo history readable, showing each stage as a distinct, labelled action rather than one opaque combined change',
        ],
        formula: { label: 'Commit Rule', text: 'Nothing touches the model until the user has explicitly confirmed every choice made in the wizard' },
      },
      {
        id: 's6', heading: 'Handling a Partial or Failed Run', level: 'h2',
        content: `Even with a TransactionGroup wrapping every step, the wizard should apply the same defensive patterns from Lesson 21 within each step, so one missing family file does not silently leave the setup incomplete without explanation.`,
        items: [
          'Wrap the family-loading step specifically in try/except, since a missing or renamed file in the shared library is the most likely real-world point of failure in this wizard',
          'If any step inside the TransactionGroup raises an unhandled exception, roll back the entire group (RollBack() rather than Assimilate()) so the project is left exactly as it was before the wizard ran, not partially set up',
          'Report clearly to the user which step failed and why, rather than a generic "setup failed" message, so they know whether to fix a file path and re-run or escalate to IT',
        ],
      },
    ],
    takeaways: [
      'forms.ask_for_string and forms.SelectFromList.show gather project information and configuration choices through clear, guided prompts rather than requiring a user to remember a written checklist.',
      'Always check for a None or cancelled result after any forms prompt before continuing, so the wizard does not proceed with missing or empty values.',
      'Present a summary of everything the wizard will create or load before the final commit step, giving the user an informed chance to catch a mistake before anything is written.',
      'forms.alert with yes=True, no=True provides the final confirmation gate — nothing should touch the model until this step returns a positive result.',
      'Wrapping every setup step (project info, levels, sheets, family loading) inside one TransactionGroup, with each step as its own named Transaction, allows the whole setup to roll back together if any single step fails.',
      'Apply the defensive patterns from Lesson 21 within each step, especially around family loading, so a missing file produces a clear, specific failure message rather than a silent partial setup.',
    ],
    resource: { label: 'Project Setup Wizard Build Guide', type: 'PDF' },
    quiz: { label: 'Project Setup Wizard Quiz', questions: 10, time: '5 min' },
    prev: { id: 'pyp-21', title: 'Bulletproofing Your Scripts — Handling Nulls, Empty Lists & Real-World Edge Cases in PyRevit' },
    next: { id: 'pyp-23', title: 'Deploy Your Extension — GitHub, Team Distribution & Updates' },
  },

  // ============================================================
  // LESSON PYP-23 — Deploying via GitHub
  // ============================================================
  {
    id: 'pyp-23', num: '23',
    title: 'Deploy Your Extension — GitHub, Team Distribution & Updates',
    topic: 'Deployment & Capstone', cat: 'advanced', readTime: '10 min', free: false,
    desc: 'Push the growing DPC2025Tools.extension to GitHub, add it to team machines via pyrevit extend ui, and establish an update and versioning workflow for a growing office toolkit.',
    intro: `Every tool built across this course so far has lived in one extension folder on one machine. This lesson covers what it takes to get the DPC2025Tools.extension folder into the hands of the whole office: pushing it to a GitHub repository, having teammates add it through pyRevit's own extension commands, and establishing the update and versioning workflow that turns a single fix into something that reaches every machine in the office with a single click, not a repeated manual copy.`,
    sections: [
      {
        id: 's1', heading: 'Why Git for Extension Distribution', level: 'h2',
        content: `pyRevit extensions are built specifically to be Git-aware — the Extension Manager and CLI both understand a git URL as a first-class source for installing and updating an extension, which makes Git a far better distribution mechanism than copying a folder over the network.`,
        items: [
          'A shared network folder copy requires every teammate to manually re-copy the whole extension every time it changes, with no record of what changed or when',
          'A Git repository gives every fix a commit history, so a question like "when did this button start behaving differently" has an actual answer',
          'pyRevit\'s built-in "Update" button performs a git pull under the hood, so updating an already-installed extension is a single click for every team member once the fix is pushed once',
        ],
        formula: { label: 'Distribution Principle', text: 'A fix pushed once to the shared repository should reach the whole office without anyone manually copying a folder' },
      },
      {
        id: 's2', heading: 'Pushing DPC2025Tools.extension to GitHub', level: 'h2',
        content: `The extension folder built across this course — DPC2025Tools.extension, containing the ribbon tab, panels, and pushbuttons for every tool from the naming validator through the setup wizard — becomes a standard Git repository like any other codebase.`,
        code: {
          label: 'Initializing and Pushing the Extension Repository',
          lines: [
            'cd DPC2025Tools.extension',
            'git init',
            'git add .',
            'git commit -m "Initial commit: DPC2025 PyRevit Toolkit v1.0"',
            '',
            'git remote add origin https://github.com/dharrenpark/DPC2025Tools.extension.git',
            'git branch -M main',
            'git push -u origin main',
          ],
        },
        items: [
          'The repository name conventionally matches the extension folder name itself (DPC2025Tools.extension), so the mapping between the Git repository and the installed extension folder is obvious to anyone looking at either one',
          'Include a .gitignore excluding pyRevit\'s generated cache and compiled bytecode files (**pycache**, *.pyc) so the repository stays focused on the actual source files that matter',
          'A private repository is the right default for an internal office toolkit — nothing about this workflow requires the extension to be public',
        ],
      },
      {
        id: 's3', heading: 'Adding the Extension via pyrevit extend', level: 'h2',
        content: `Team members add the shared extension to their own pyRevit installation using the pyrevit CLI\'s extend command, pointing directly at the GitHub URL rather than copying files by hand.`,
        code: {
          label: 'Installing the Extension via CLI',
          lines: [
            'pyrevit extend ui DPC2025Tools https://github.com/dharrenpark/DPC2025Tools.extension.git',
            '',
            '# Confirm it installed and is recognized:',
            'pyrevit extensions',
          ],
        },
        items: [
          'pyrevit extend ui clones the repository directly into the correct pyRevit extensions folder on that user\'s machine, so there is no manual file copying step at all',
          'The same result is available through the graphical Extension Manager (pyRevit tab → Extensions), using its "Add from URL" option and pasting the same GitHub URL — useful for teammates less comfortable with the CLI',
          'After installing, a Revit restart (or a pyRevit reload) is required for the new ribbon tab and its pushbuttons to actually appear',
        ],
      },
      {
        id: 's4', heading: 'The Update Workflow — One Fix, Whole Office', level: 'h2',
        content: `Once every team member has the extension installed from the shared repository, a fix pushed once by any maintainer becomes available to everyone through pyRevit\'s own update mechanism — no re-installation needed.`,
        items: [
          'A maintainer commits and pushes a fix or new tool to the GitHub repository exactly as with any other codebase change',
          'Each team member then clicks "Update" from the pyRevit tab (or runs pyrevit attach / pyrevit env update from the CLI), which performs a git pull against the already-cloned local copy',
          'Because this is a genuine git pull, only the changed files transfer — updating is fast even as the extension grows over time, not a full re-download',
          'Encourage the team to check for updates at the start of a work session, particularly right after a milestone when new tools are more likely to have been added',
        ],
        formula: { label: 'Update Rule', text: 'Push once, and "Update" is all every team member ever needs to click to receive it' },
      },
      {
        id: 's5', heading: 'Versioning and Tagging Conventions', level: 'h2',
        content: `As the DPC2025Tools extension grows across this course from a single QA button into a multi-panel toolkit, a consistent tagging convention keeps track of what "version" the office is actually running at any point.`,
        code: {
          label: 'DPC2025Tools Version Tagging',
          lines: [
            'git tag -a v1.0 -m "Initial release: QA Checker only"',
            'git tag -a v1.1 -m "Add Sheet Manager panel"',
            'git tag -a v1.2 -m "Add ISO 19650 Naming Validator"',
            'git tag -a v2.0 -m "Add Project Setup Wizard — new panel layout"',
            '',
            'git push origin --tags',
          ],
        },
        items: [
          'Tag a release whenever a meaningful, stable set of tools is reached — not on every single commit, which would make the tag list as noisy as having no tags at all',
          'Follow the same MAJOR.MINOR distinction used for individual scripts in the companion Dynamo course: MINOR for adding a tool or fixing a bug, MAJOR for a change that alters how an existing tool behaves or is organized',
          'Reference the current tag in the extension\'s own bundle.yaml or a version note visible in the ribbon, so a user can confirm which version they are running without checking Git directly',
        ],
      },
      {
        id: 's6', heading: 'Handover and Long-Term Maintenance', level: 'h2',
        content: `An office toolkit distributed via Git outlives any single author far better than a folder on one person\'s machine — but only if the repository itself is treated as a properly maintained piece of shared infrastructure.`,
        items: [
          'Grant at least one other team member write access to the repository, so a fix or new tool does not depend on one specific person being available',
          'Keep a short changelog (either in commit messages or a dedicated file in the repository) describing what each tagged version added, mirroring the documentation discipline from the companion Dynamo course',
          'Review open issues or requested tools periodically, treating the extension as a living office asset that keeps growing, not a finished project that stops once this course ends',
        ],
      },
    ],
    takeaways: [
      'pyRevit extensions are Git-aware by design — both the Extension Manager and the pyrevit extend CLI command accept a Git URL directly as an installation source.',
      'pyrevit extend ui <name> <git-url> clones the extension directly into the correct local extensions folder, removing manual file-copying from the distribution workflow entirely.',
      'pyRevit\'s "Update" button performs a git pull under the hood, so a fix pushed once by a maintainer reaches every team member with a single click.',
      'Tag meaningful, stable releases (not every commit) using a MAJOR.MINOR convention, mirroring the versioning discipline used for individual scripts in the companion Dynamo course.',
      'A private GitHub repository is the appropriate default for an internal office toolkit — nothing about this distribution workflow requires the extension to be public.',
      'Grant more than one team member write access and maintain a changelog, so the extension survives staff turnover as genuine shared infrastructure rather than depending on one author.',
    ],
    resource: { label: 'Extension Deployment & Update Guide', type: 'PDF' },
    quiz: { label: 'Extension Deployment Quiz', questions: 10, time: '5 min' },
    prev: { id: 'pyp-22', title: 'Build a Project Setup Wizard — Automate the DPC2025 Template Configuration' },
    next: { id: 'pyp-24', title: 'Capstone — Deploy the DPC2025 PyRevit Toolkit' },
  },

  // ============================================================
  // LESSON PYP-24 — Capstone
  // ============================================================
  {
    id: 'pyp-24', num: '24',
    title: 'Capstone — Deploy the DPC2025 PyRevit Toolkit: QA Checker + Sheet Manager + ISO 19650 Validator + Project Setup Wizard as One Installable Office Extension',
    topic: 'Capstone', cat: 'advanced', readTime: '14 min', free: false,
    desc: 'Combine the Model Health Dashboard, Sheet Creator, ISO 19650 Naming Validator, and Project Setup Wizard built across this course into one polished, multi-panel DPC2025 PyRevit Toolkit, deployed via Git to the whole office.',
    intro: `This capstone pulls together everything built across this course into one production asset: the "DPC2025 PyRevit Toolkit." Instead of four separate tools scattered across individual scripts on one machine, this lesson combines the Model Health Dashboard, the Sheet Creator, the ISO 19650 Naming Validator, and the Project Setup Wizard into one polished, multi-panel extension — organized into a ribbon tab any team member can install, use, and receive updates for, deployed exactly the way Lesson 23 described. By the end, DPC2025Tools.extension is not a training exercise anymore; it is a real, installable piece of office infrastructure.`,
    sections: [
      {
        id: 's1', heading: 'The Brief', level: 'h2',
        content: `DPC2025 is about to roll out its toolkit office-wide. Historically, running a model health check, generating missing sheets, validating naming, and setting up a new project have each meant finding and running a separate script, often written and maintained by whoever happened to need it first.

**The task**: assemble a single installable extension, the "DPC2025 PyRevit Toolkit," organized as one ribbon tab with clearly separated panels:
1. QA panel — the Model Health Dashboard (warnings, room/parameter QA, multi-model audit)
2. Sheets panel — the Sheet Creator and IFC/export tools
3. Compliance panel — the ISO 19650 Naming Validator
4. Setup panel — the Project Setup Wizard
All deployed as one Git-distributed extension the whole office installs and updates identically.`,
        formula: { label: 'Capstone Scope', text: 'QA Dashboard + Sheet Manager + Naming Validator + Setup Wizard, in one multi-panel, Git-deployed extension' },
      },
      {
        id: 's2', heading: 'Stage 1 — Organizing the Extension Structure', level: 'h2',
        content: `The toolkit opens with the extension\'s folder structure itself, organizing every tool built across this course into the panel layout the brief calls for, using the same tab.yaml/bundle.yaml conventions from Lesson 16.`,
        subsections: [
          {
            heading: 'Folder Structure',
            items: [
              'DPC2025Tools.extension/DPC2025.tab/QA.panel/ — Model Health Dashboard and Multi-Model Audit pushbuttons',
              'DPC2025Tools.extension/DPC2025.tab/Sheets.panel/ — Sheet Creator and IFC Export Automation pushbuttons',
              'DPC2025Tools.extension/DPC2025.tab/Compliance.panel/ — ISO 19650 Naming Validator pushbutton',
              'DPC2025Tools.extension/DPC2025.tab/Setup.panel/ — Project Setup Wizard pushbutton',
            ],
          },
        ],
        items: [
          'Grouping tools into panels by function (QA, Sheets, Compliance, Setup) rather than leaving every pushbutton loose on one long tab makes the ribbon immediately scannable for a user who has never seen it before',
          'Each pushbutton folder keeps its own icon, script.py, and bundle.yaml exactly as covered in Lesson 16, so nothing about the underlying tool structure changes — only the organization above it does',
        ],
      },
      {
        id: 's3', heading: 'Stage 2 — Wiring in the QA and Sheets Tools', level: 'h2',
        content: `The QA and Sheets panels bring together the model audit tools built earlier in this course, each already tested individually and now simply relocated into their panel folders.`,
        code: {
          label: 'QA Panel Pushbutton Registration',
          lines: [
            '# DPC2025.tab/QA.panel/ModelHealth.pushbutton/script.py',
            'from pyrevit import script',
            '',
            '__title__ = "Model Health\\nDashboard"',
            '__doc__ = "Runs the warning, room, and parameter QA checks across DPC2025 and its links."',
            '',
            '# Reuses the audit_document() function and multi-model loop from Lesson 19',
          ],
        },
        items: [
          'Each pushbutton\'s __title__ uses a line break (\\n) to keep the ribbon button label compact and two-line, matching pyRevit\'s standard button proportions',
          'The multi-model audit logic from Lesson 19 and the IFC export batching from Lesson 18 move into this stage unchanged — the capstone reuses proven logic rather than rewriting it',
        ],
      },
      {
        id: 's4', heading: 'Stage 3 — Wiring in the Compliance and Setup Tools', level: 'h2',
        content: `The Compliance and Setup panels bring in the two most recently built tools — the ISO 19650 Naming Validator and the Project Setup Wizard — each already using the defensive patterns from Lesson 21.`,
        items: [
          'The Naming Validator\'s compiled regex pattern and CSV export from Lesson 17 move into the Compliance.panel pushbutton exactly as built, with no changes required',
          'The Setup Wizard\'s forms-driven multi-step flow and TransactionGroup commit from Lesson 22 move into the Setup.panel pushbutton, similarly unchanged',
          'Because both tools were already built with None checks, try/except, and confirmed transactions, no additional bulletproofing work is needed at this integration stage — that discipline pays off directly here',
        ],
      },
      {
        id: 's5', heading: 'Stage 5 — Testing the Assembled Toolkit End-to-End', level: 'h2',
        content: `Before deployment, the assembled toolkit needs to be tested as a whole extension, confirming every panel and pushbutton behaves correctly once relocated into the new structure, not just as the individual scripts they started as.`,
        items: [
          'Reload pyRevit and confirm all four panels and their pushbuttons appear correctly on the DPC2025 tab, with no missing icons or unresolved buttons',
          'Run each tool at least once against a copy of the current DPC2025 project state, confirming the relocation into the new folder structure has not broken any relative file reference',
          'Test the toolkit specifically against a messy, in-progress project file per the Lesson 21 standard — the capstone is exactly the wrong place to skip that habit, since this is the version going to the whole office',
        ],
      },
      {
        id: 's6', heading: 'Stage 6 — Deploying via Git to the Whole Office', level: 'h2',
        content: `With the assembled toolkit tested, it ships exactly the way Lesson 23 described: pushed to the shared GitHub repository, tagged as a proper release, and installed by the team through pyrevit extend or the Extension Manager.`,
        code: {
          label: 'Tagging the Capstone Release',
          lines: [
            'git add .',
            'git commit -m "v2.0: Assemble QA, Sheets, Compliance, and Setup panels into one toolkit"',
            'git tag -a v2.0 -m "DPC2025 PyRevit Toolkit — full four-panel release"',
            'git push origin main --tags',
          ],
        },
        items: [
          'Announce the release to the office alongside the push, per the distribution habit from Lesson 23, so the team knows to run pyrevit extend (first-time installers) or click Update (existing installers)',
          'Confirm at least one teammate installs or updates successfully from the pushed repository before considering the rollout complete — a clean push that no one can actually pull is not yet a finished deployment',
        ],
      },
      {
        id: 's7', heading: 'What You Built', level: 'h2',
        content: `Stepping back, the DPC2025 PyRevit Toolkit replaces four separate scripts scattered across individual authorship with one polished, multi-panel extension that any team member installs once and receives every future update for automatically.

More importantly, this capstone demonstrates how the individual skills from this course combine into real production tooling: the naming validator and multi-model audit keep the toolkit\'s findings trustworthy and specific; the defensive patterns from Lesson 21 keep every panel running against a real, messy project file rather than only a clean demo; the setup wizard turns a manual checklist into a guided, reviewed flow; and the Git-based deployment from Lesson 23 turns a personal script folder into shared office infrastructure that outlives any single author.

That is the practical outcome this course has been building toward: not four disconnected tools living on one machine, but one dependable, installable toolkit — and a structure ready for the next tool the office needs, added as a fifth panel rather than a fifth scattered script.`,
        formula: { label: 'Capstone Complete', text: 'QA Dashboard + Sheet Manager + Naming Validator + Setup Wizard = One Toolkit, One Git Install' },
      },
    ],
    takeaways: [
      'The DPC2025 PyRevit Toolkit organizes every tool built across this course into four function-based panels (QA, Sheets, Compliance, Setup) on one ribbon tab, rather than leaving pushbuttons scattered and ungrouped.',
      'Each pushbutton retains its individually-tested script logic unchanged during assembly — the capstone is an integration and organization exercise, not a rewrite of proven tools.',
      'Tools built with defensive patterns (Lesson 21) and guided confirmation flows (Lesson 22) integrate into the assembled toolkit with no additional bulletproofing required at this stage, which is the direct payoff of having built them defensively the first time.',
      'The assembled toolkit must be tested end-to-end after relocation into its final panel structure, and specifically against a messy real project file, before being considered ready to ship.',
      'The finished toolkit is deployed exactly per Lesson 23 — pushed to the shared Git repository, tagged as a proper release, and installed or updated by the team through pyrevit extend or the Extension Manager.',
      'A rollout is only complete once at least one teammate has successfully installed or updated from the pushed repository, not merely once the push itself has succeeded.',
    ],
    resource: { label: 'DPC2025 PyRevit Toolkit Capstone Brief', type: 'PDF' },
    quiz: { label: 'PyRevit Practice Capstone Quiz', questions: 10, time: '5 min' },
    prev: { id: 'pyp-23', title: 'Deploy Your Extension — GitHub, Team Distribution & Updates' },
    next: null,
  },

]
