// ============================================================
// AUTODESK DYNAMO — LESSONS dyn-17 through dyn-24 (ADVANCED)
// Sections: Custom Nodes & Python | Families & Debugging |
//           QA & Standards | Team Workflows | Capstone
// File: lib/dynamoLessonsContent/dynamoLessons_17_24.js
// Index: lib/dynamoLessonsData.js
// ============================================================

export const lessons_17_24 = [

  // ============================================================
  // LESSON DYN-17 — Custom Nodes
  // ============================================================
  {
    id: 'dyn-17', num: '17',
    title: 'Custom Nodes — Building Reusable Dynamo Components',
    topic: 'Custom Nodes & Python', cat: 'advanced', readTime: '10 min', free: false,
    desc: 'Package a group of nodes into a reusable Custom Node with its own inputs, outputs, and version history.',
    intro: `Every Dynamo user eventually builds the same five-node cluster over and over — get parameter, check for null, set parameter, repeat. Grouping those nodes visually helps for one graph, but it does not make the logic reusable across projects. A **Custom Node** solves this: it is a self-contained, named, versioned Dynamo component with its own defined inputs and outputs, which behaves exactly like any built-in node once published. This lesson covers building your first Custom Node, publishing it to a package, and the practical difference between a Group and a Custom Node.`,
    sections: [
      {
        id: 's1', heading: 'Custom Node vs Group — Why It Matters', level: 'h2',
        content: `Dynamo offers two ways to bundle nodes together, and they solve different problems.

A **Group** (right-click selected nodes → Create Group) is a visual annotation. It draws a coloured box around a cluster of nodes with a title, making a large graph easier to read. The nodes inside a group are still fully visible and still run as part of the main graph — a group changes nothing about execution, only appearance.

A **Custom Node** (.dyf file) is a genuinely separate workspace with its own logic, its own Input and Output nodes, and its own file on disk. Once published, it appears in the node library as a single node with its own icon, its own ports, and no visible internals in the parent graph — exactly like "Element.GetParameterValueByName" or any other built-in node.`,
        formula: { label: 'Rule of Thumb', text: 'Group = readability inside one graph | Custom Node = reusable logic across many graphs' },
      },
      {
        id: 's2', heading: 'Creating a Custom Node Workspace', level: 'h2',
        content: `A Custom Node starts life as its own workspace, separate from the graph you are currently editing.`,
        subsections: [
          {
            heading: 'Creating a New Custom Node',
            items: [
              'File → New → Custom Node',
              'A dialog prompts for: Name, Category (where it will appear in the library, e.g., "Dharren Park.Rooms"), and Description',
              'A blank workspace opens — this is the internal logic of the custom node, separate from any graph currently open',
              'Build the logic inside this workspace using normal nodes, exactly as you would in a regular graph',
              'Save the workspace — it saves as a **.dyf** file (Dynamo Function file), distinct from the **.dyn** file used for regular graphs',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Input and Output Nodes', level: 'h2',
        content: `Inside the custom node workspace, two special node types define the ports that will appear on the packaged node once it is used in a parent graph.`,
        items: [
          '**Input** node — placed inside the custom node workspace; each Input node becomes one input port on the finished custom node; give it a clear name and an optional default value',
          '**Output** node — wire the final result of your logic into an Output node; each Output node becomes one output port; multiple Output nodes create multiple output ports',
          'Rename Input and Output nodes descriptively (e.g., "Room List", "Excel File Path") — these names appear as the port labels on the finished node',
          'The order Input nodes are added generally corresponds to left-to-right port order, but always verify by testing the finished node',
          'Custom nodes can have any number of inputs and outputs, including zero of either, though at least one output is typical',
        ],
        code: {
          label: 'Simple Custom Node Example — "Get Room Data"',
          lines: [
            'Inside the .dyf workspace:',
            '',
            '  Input("Rooms")',
            '        │',
            '        ▼',
            '  Room.Number ──┐',
            '  Room.Name ────┼──► List.Create ──► Output("Room Data")',
            '  Room.Area ────┘',
            '',
            'Once published, this appears in the parent graph as a single',
            'node "Get Room Data" with one input port ("Rooms") and one',
            'output port ("Room Data") — the internal nodes are hidden.',
          ],
        },
      },
      {
        id: 's4', heading: 'Publishing a Custom Node to a Package', level: 'h2',
        content: `A custom node only becomes shareable once it is published into a **Package** — Dynamo's unit of distribution for custom nodes, sample files, and library binaries.`,
        subsections: [
          {
            heading: 'Publishing Steps',
            items: [
              'With the custom node workspace open and saved, go to Packages → Publish New Package (or Publish Current Workspace if prompted directly)',
              'Fill in package metadata: package name, version number (e.g., 1.0.0), description, and your name as the author',
              'Add any additional custom nodes or supporting files that belong in the same package',
              'Choose whether to publish to a local folder (for testing or internal office distribution) or to Dynamo Package Manager (public)',
              'Click Publish — Dynamo writes the package folder structure (bin / dyf / extra) to the chosen location',
            ],
          },
        ],
        formula: { label: 'Package Structure', text: 'PackageName/ → dyf/ (custom nodes) + bin/ (DLLs) + extra/ (docs, sample files)' },
      },
      {
        id: 's5', heading: 'Versioning Custom Nodes', level: 'h2',
        content: `Once a custom node is in use across multiple graphs or by multiple team members, changing its internal logic without care can silently break every graph that uses it.`,
        items: [
          'Use semantic versioning for packages: MAJOR.MINOR.PATCH (e.g., 1.2.0)',
          'Increment the PATCH version for internal bug fixes that do not change inputs/outputs',
          'Increment the MINOR version when adding a new optional input or output without removing existing ones',
          'Increment the MAJOR version when changing or removing existing inputs/outputs — this is a breaking change for any graph already using the node',
          'Publishing a new version does not automatically update graphs already using the old version; users must update the package manually through Package Manager',
          'Document what changed in each version in the package description or a Notes node inside the custom node workspace',
        ],
      },
      {
        id: 's6', heading: 'Editing an Existing Custom Node', level: 'h2',
        content: `Custom nodes remain fully editable after publishing — the logic is not locked or compiled.`,
        items: [
          'Right-click any instance of a custom node in a graph → Edit Custom Node — opens the internal .dyf workspace',
          'Make changes, save, and the node updates for every graph that references that .dyf file locally',
          'If the custom node is part of a published package, editing it and re-publishing creates a new version that other team members must pull explicitly',
          'Always test the edited custom node in a sample graph before re-publishing to the whole team',
          'Keep a changelog of edits — a one-line "Notes" node inside the workspace documenting the last change is a simple, effective habit',
        ],
      },
      {
        id: 's7', heading: 'When to Build a Custom Node vs a Stock Combination', level: 'h2',
        content: `Not every repeated node cluster deserves to become a custom node. Building one has overhead — versioning discipline, publishing, and keeping the package in sync across a team.`,
        items: [
          'Build a custom node when the same logic is repeated across three or more graphs, or shared across multiple team members',
          'Build a custom node when the internal complexity should be hidden from the end user of the graph (e.g., a junior BIM technician running the script)',
          'Do NOT build a custom node for logic used only once — a Group is sufficient',
          'Do NOT build a custom node while the logic is still actively being iterated on — wait until the approach is stable',
          'Consider a Python Script node (next lesson) instead of a custom node when the logic is a short, self-contained calculation rather than a reusable workflow step',
        ],
      },
    ],
    takeaways: [
      'A Group is a visual annotation inside one graph; a Custom Node (.dyf) is a separate, reusable workspace with its own defined inputs and outputs.',
      'Build custom node logic using Input and Output nodes inside the custom node workspace — these become the finished node\'s ports.',
      'Publish a custom node to a Package via Packages → Publish New Package, choosing a local folder or the public Package Manager.',
      'Use semantic versioning (MAJOR.MINOR.PATCH) for packages; incrementing MAJOR signals a breaking change to input/output ports.',
      'Editing a custom node updates every graph referencing its .dyf file locally; published package updates must be pulled manually by other users.',
      'Reserve custom nodes for logic reused across three or more graphs or shared across a team — one-off logic is better left as a Group.',
    ],
    resource: { label: 'Custom Node Authoring Guide', type: 'PDF' },
    quiz: { label: 'Custom Nodes Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-16', title: 'Generating Views & Sheets with Dynamo' },
    next: { id: 'dyn-18', title: 'Python Scripting Inside Dynamo' },
  },

  // ============================================================
  // LESSON DYN-18 — Python Scripting Inside Dynamo
  // ============================================================
  {
    id: 'dyn-18', num: '18',
    title: 'Python Scripting Inside Dynamo',
    topic: 'Custom Nodes & Python', cat: 'advanced', readTime: '11 min', free: false,
    desc: 'Write Python inside the Python Script node to reach past stock nodes and script directly against the Revit API.',
    intro: `Stock Dynamo nodes cover an enormous range of tasks, but eventually every serious script hits a wall: a Revit API method with no node equivalent, a loop that would take fifteen chained nodes to express, or a performance bottleneck that Python handles in a fraction of the time. The **Python Script** node is the escape hatch — a place to write real code that talks directly to Dynamo's data and, when needed, to the Revit API underneath it. This lesson is a practical introduction to writing and debugging Python inside Dynamo.`,
    sections: [
      {
        id: 's1', heading: 'The Python Script Node', level: 'h2',
        content: `The **Python Script** node is a stock node found under Core → Script → Python Script (or Python Script From String). Double-clicking it opens a code editor directly on the canvas.`,
        items: [
          'Any number of input ports can be added to a Python Script node using the small + / − icons at the bottom of the node',
          'Each input port is accessed inside the script as **IN[0]**, **IN[1]**, **IN[2]**, and so on, matching the port order',
          'The value the script produces must be assigned to a variable named **OUT** — this becomes the node\'s single output port',
          'The editor supports standard Python syntax highlighting, and errors during execution surface as a red node with the traceback visible in a tooltip or the node\'s output',
          'Multiple outputs are achieved by assigning a list or dictionary to OUT, then unpacking it downstream with List.GetItemAtIndex or similar',
        ],
        code: {
          label: 'Minimal Python Script Node',
          lines: [
            '# IN[0] = a list of numbers from an upstream node',
            'numbers = IN[0]',
            '',
            'doubled = [n * 2 for n in numbers]',
            '',
            'OUT = doubled',
          ],
        },
      },
      {
        id: 's2', heading: 'IronPython2 vs CPython3', level: 'h2',
        content: `Dynamo has shipped with two different Python execution engines, and the choice affects both available libraries and, occasionally, behaviour.`,
        subsections: [
          {
            heading: 'Engine Comparison',
            items: [
              '**IronPython2** — the original, legacy default engine; a .NET-native Python 2 implementation; integrates natively with .NET/Revit API objects with no marshalling overhead',
              '**CPython3** — the modern engine option, available via the "Engine" dropdown at the bottom of the Python Script node; runs standard Python 3 and gives access to widely-used libraries such as NumPy and Pandas (where installed)',
              'CPython3 requires marshalling data between .NET and Python, which can occasionally behave differently for certain Revit API object types',
              'New graphs should generally default to CPython3 for language modernity and library access, but confirm which engine the rest of the team/office standard uses before mixing engines within one project',
              'A script written for one engine is not guaranteed to run unmodified on the other — check the Engine dropdown when troubleshooting a script that "used to work"',
            ],
          },
        ],
        formula: { label: 'Engine Selector', text: 'Bottom of Python Script node → Engine dropdown → IronPython2 or CPython3' },
      },
      {
        id: 's3', heading: 'Accessing the Revit API from Python', level: 'h2',
        content: `Dynamo's built-in nodes wrap the Revit API, but the Python Script node can reference the Revit API directly, unlocking methods that have no stock node equivalent.`,
        code: {
          label: 'Standard Revit API Import Block',
          lines: [
            'import clr',
            'clr.AddReference(\'RevitAPI\')',
            'from Autodesk.Revit.DB import *',
            '',
            'clr.AddReference(\'RevitServices\')',
            'from RevitServices.Persistence import DocumentManager',
            'from RevitServices.Transactions import TransactionManager',
            '',
            'doc = DocumentManager.Instance.CurrentDBDocument',
          ],
        },
      },
      {
        id: 's4', heading: 'UnwrapElement — Dynamo Elements vs Revit API Elements', level: 'h2',
        content: `Elements that arrive into a Python Script node from upstream Dynamo nodes are **Dynamo-wrapped** objects, not raw Revit API elements. Calling a native Revit API method directly on a Dynamo-wrapped element will fail or behave unexpectedly.`,
        items: [
          'Use **UnwrapElement()** to convert a Dynamo-wrapped element (or list of elements) into the underlying Revit API element',
          'Only unwrapped elements can be passed to Revit API methods such as `element.get_Parameter(...)` or `doc.Delete(element.Id)`',
          'If a script needs to return an element back to Dynamo for further downstream node use, the raw Revit API element is generally handled transparently by Dynamo\'s output marshalling — but always test the returned value in a Watch node',
          'A common early bug: calling a Revit API method on an element straight from IN[0] without unwrapping first, producing an AttributeError or similar exception',
        ],
        code: {
          label: 'Unwrapping Elements',
          lines: [
            'elements = UnwrapElement(IN[0])   # converts Dynamo elements to Revit API elements',
            '',
            'for e in elements:',
            '    param = e.LookupParameter("Comments")',
            '    if param is not None and not param.IsReadOnly:',
            '        param.Set("Reviewed")',
          ],
        },
      },
      {
        id: 's5', heading: 'Wrapping Changes in a Transaction', level: 'h2',
        content: `Any script that modifies the Revit model — setting a parameter, creating an element, deleting an element — must be wrapped in a transaction, exactly as it would need to be in any other Revit API context.`,
        code: {
          label: 'Transaction Pattern for Python Script Nodes',
          lines: [
            'TransactionManager.Instance.EnsureInTransaction(doc)',
            '',
            '# --- model modifications go here ---',
            'elements = UnwrapElement(IN[0])',
            'for e in elements:',
            '    param = e.LookupParameter("Mark")',
            '    if param and not param.IsReadOnly:',
            '        param.Set(IN[1])',
            '# ------------------------------------',
            '',
            'TransactionManager.Instance.TransactionTaskDone()',
            '',
            'OUT = elements',
          ],
        },
        items: [
          '`EnsureInTransaction(doc)` opens (or joins) a transaction on the given document before any modification',
          '`TransactionTaskDone()` closes the transaction, committing the changes to the model',
          'Without this pattern, attempting to modify the model from a Python Script node raises an exception — Revit requires all changes to occur inside a transaction',
          'Read-only operations (querying parameters, filtering elements) do not require a transaction at all',
        ],
      },
      {
        id: 's6', heading: 'When to Reach for Python vs Stock Nodes', level: 'h2',
        content: `Python is powerful, but it is also harder to read at a glance than a well-laid-out node graph, and harder for a non-programmer teammate to audit or modify.`,
        items: [
          'Prefer stock nodes when a built-in node (or short chain of them) already does the job clearly',
          'Reach for Python when the logic involves conditional branching, loops with early exit, or string parsing that would require an unreasonable number of chained stock nodes',
          'Reach for Python when a specific Revit API method has no stock node wrapper at all',
          'Reach for Python for performance — a loop processing thousands of elements is typically faster in a single Python Script node than the equivalent long chain of list-processing nodes',
          'Always comment Python scripts clearly — a future reader (including you, in six months) should be able to follow the logic without re-deriving it',
        ],
        formula: { label: 'Decision Rule', text: 'Stock nodes for clarity and team readability | Python for API gaps, complex logic, and performance' },
      },
      {
        id: 's7', heading: 'Debugging Python Script Nodes', level: 'h2',
        content: `Errors inside a Python Script node surface differently from stock node errors — the node turns red and the traceback is visible from the node.`,
        items: [
          'Hover over a red Python Script node, or check its output port tooltip, to see the Python traceback',
          'Use `print()` statements inside the script — printed output appears in the node\'s output when previewed, useful for step-by-step debugging',
          'Wrap risky operations in `try/except` blocks and return a descriptive OUT value on failure instead of letting the whole graph halt',
          'Test scripts incrementally: get the unwrap and read logic working and verified with Watch before adding the transaction and write logic',
        ],
      },
    ],
    takeaways: [
      'The Python Script node exposes inputs as IN[0], IN[1], etc., and requires the result to be assigned to the OUT variable.',
      'Dynamo offers two engines — legacy IronPython2 and modern CPython3 — selectable from the Engine dropdown; scripts are not always portable between them.',
      'Import the Revit API with clr.AddReference(\'RevitAPI\') and from Autodesk.Revit.DB import * before using Revit API classes.',
      'UnwrapElement() converts Dynamo-wrapped elements into raw Revit API elements required for direct API calls.',
      'Any model modification must be wrapped between TransactionManager.Instance.EnsureInTransaction(doc) and .TransactionTaskDone().',
      'Use stock nodes for clarity and team readability; reach for Python for API gaps, complex branching logic, or performance-critical loops.',
    ],
    resource: { label: 'Python in Dynamo Reference Sheet', type: 'PDF' },
    quiz: { label: 'Python Scripting Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-17', title: 'Custom Nodes — Building Reusable Dynamo Components' },
    next: { id: 'dyn-19', title: 'Dynamo & Families — Modifying and Placing Library Content' },
  },

  // ============================================================
  // LESSON DYN-19 — Dynamo & Families
  // ============================================================
  {
    id: 'dyn-19', num: '19',
    title: 'Dynamo & Families — Modifying and Placing Library Content',
    topic: 'Families & Debugging', cat: 'advanced', readTime: '10 min', free: false,
    desc: 'Use Dynamo to batch-load families from a shared library, place instances, and swap or edit family types at scale.',
    intro: `Family management is one of the most repetitive parts of production BIM work — loading dozens of families from the office library into a new project, swapping a temporary furniture family for the client-approved one across an entire floor, or nudging a nested parameter on every instance of a family type. Done by hand in Revit's UI, each of these tasks is a click-fest. Done in Dynamo, each becomes a script that runs in seconds and can be reused on the next project. This lesson covers the family-related nodes that make this possible.`,
    sections: [
      {
        id: 's1', heading: 'Loading Families with a File Path', level: 'h2',
        content: `Dynamo can load family files (.rfa) directly into the active document without opening Revit's Load Family dialog, using a **File Path** node feeding a family-load node.`,
        items: [
          '**File Path** node — points to a single .rfa file on disk, or a folder for batch operations',
          '**Family.LoadFamily** (Load Family node) — takes a file path (or list of paths) and the current document, loading each family into the project',
          'The node returns the loaded Family object, which can be fed into downstream nodes to retrieve its Family Types',
          'Loading a family that already exists in the project by the same name typically overwrites the existing family (subject to the standard Revit overwrite behaviour) — use with care on live production models',
        ],
        code: {
          label: 'Basic Family Load Graph',
          lines: [
            'File Path ("C:\\OfficeLibrary\\Furniture\\Desk_1200x600.rfa")',
            '        │',
            '        ▼',
            'Family.LoadFamily (Document = current document)',
            '        │',
            '        ▼',
            'Family.Types  ──►  list of FamilyType objects available',
          ],
        },
      },
      {
        id: 's2', heading: 'Batch-Loading from a Shared Office Library Folder', level: 'h2',
        content: `Rather than pointing to individual files, most office workflows point Dynamo at an entire library folder and load every family it needs in one run.`,
        subsections: [
          {
            heading: 'Batch-Load Workflow',
            items: [
              'Directory.FileNames (or similar file-system node) — reads all file paths within a folder, filtered to *.rfa',
              'Feed the resulting list of paths into Family.LoadFamily using default (Auto) lacing so each path loads independently',
              'Filter the file list first (e.g., String.Contains "Door" ) if only a subset of the library folder should be loaded',
              'Maintain a fixed, version-controlled office library folder structure so paths in shared scripts remain valid for every team member',
              'Avoid hardcoding a personal drive letter or username in the File Path node — use a shared network path or project-relative path so the script runs identically for every user',
            ],
          },
        ],
        formula: { label: 'Portability Rule', text: 'Hardcoded personal paths break scripts the moment another user runs them — always reference a shared network location' },
      },
      {
        id: 's3', heading: 'Swapping Family Types in Bulk', level: 'h2',
        content: `A very common production task is replacing every instance of one family type with another — for example, swapping a placeholder furniture type for the client-approved type across the whole model.`,
        items: [
          'Use Categories or All Elements of Family Type to collect every instance of the type being replaced',
          'Retrieve the replacement Family Type using Family Types (from the loaded family) filtered by name',
          '**Element.SetParameterByName** or a dedicated "Change Type" node sets each instance\'s Type parameter to the replacement FamilyType',
          'Run on a small test selection first before applying to "All Elements of Category" across the whole model',
          'Bulk type swaps modify the model directly — always run this kind of script with a recent backup or on a synced/saved local file',
        ],
      },
      {
        id: 's4', heading: 'Modifying Nested Family Parameters', level: 'h2',
        content: `Families that contain nested sub-families (a door family containing a nested hardware family, for example) require an extra step to reach the nested instance's parameters — Dynamo cannot directly select "inside" a family from the project environment without help.`,
        items: [
          'Nested family instances are not directly selectable as project elements in the same way host-level instances are',
          'Use Element.GetParameterValueByName / SetParameterByName on the host instance for any parameter that is reported at the host level (shared parameters exposed upward through the family are visible this way)',
          'For a parameter genuinely local to the nested sub-family with no shared/reporting parameter exposing it upward, the family itself typically needs to be edited (Family Editor) rather than modified from the project environment via Dynamo',
          'When designing a family intended for later Dynamo automation, expose any parameter that might need bulk editing as a shared parameter at the top-level family, not buried only in a nested component',
        ],
      },
      {
        id: 's5', heading: 'Placing Family Instances', level: 'h2',
        content: `Beyond modifying existing instances, Dynamo can place brand-new family instances at calculated points — useful for repetitive placement tasks like furniture layouts, structural columns on a grid, or signage at every door.`,
        items: [
          '**FamilyInstance.ByPoint** — places a point-based family type at a given XYZ point',
          '**FamilyType.ByName** — retrieves a specific loaded family type by name, to feed into the placement node',
          'Combine with geometry nodes (grid intersections, room centroids, curve division points) to calculate placement points programmatically rather than one at a time',
          'Placed instances are real Revit elements from that point forward — they behave exactly as if placed manually and can be scheduled, tagged, and edited normally',
        ],
        code: {
          label: 'Placing Instances at Room Centroids',
          lines: [
            'Rooms ──► Room.Location ──► points',
            '                                │',
            'FamilyType.ByName("Signage: Room Tag") ──►│',
            '                                          ▼',
            '                              FamilyInstance.ByPoint',
          ],
        },
      },
      {
        id: 's6', heading: 'Family.Types and Type Discovery', level: 'h2',
        content: `Before a script can reference a specific family type by name, it is often useful to enumerate every type available inside a loaded family to confirm exact naming.`,
        items: [
          '**Family.Types** — returns every FamilyType belonging to a given Family, useful for verifying exact type names before hardcoding them in a script',
          'Family type names are case- and character-sensitive when matched by string — always verify with Family.Types rather than assuming a name from memory',
          'Use this node during script development to build a dropdown or reference list, then hardcode only the confirmed, correct type name for the final script',
        ],
      },
      {
        id: 's7', heading: 'Practical Cautions for Family Automation', level: 'h2',
        content: `Family-related scripts touch shared library content and can have wide-reaching effects across a model, so a few extra precautions are worth building into the habit.`,
        items: [
          'Always run family-loading or type-swap scripts against a saved, backed-up copy of the model first',
          'Confirm the office library folder referenced by the script is the current, approved version before a bulk load',
          'Check the Revit warnings dialog after any bulk family operation — overwritten families or type conflicts often surface there, not as a Dynamo error',
          'Document any family-swap or bulk-placement script with a Notes node describing exactly what it does, since the effect is not obvious just from reading node names',
        ],
      },
    ],
    takeaways: [
      'File Path + Family.LoadFamily loads .rfa files directly into the active document without opening Revit\'s Load Family dialog.',
      'Batch-load an entire office library folder by feeding a filtered list of file paths into Family.LoadFamily; use shared network paths, never personal drive letters.',
      'Bulk type swaps combine an element collector, Family.Types on the replacement family, and Element.SetParameterByName — test on a small selection before running model-wide.',
      'Nested family parameters not exposed as shared/reporting parameters at the host level generally require editing the Family Editor directly rather than scripting from the project environment.',
      'FamilyInstance.ByPoint combined with calculated geometry (room centroids, grid intersections) automates repetitive instance placement.',
      'Family.Types lets you confirm exact type names before hardcoding them into a script — type name matching is case- and character-sensitive.',
    ],
    resource: { label: 'Dynamo Family Automation Guide', type: 'PDF' },
    quiz: { label: 'Families in Dynamo Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-18', title: 'Python Scripting Inside Dynamo' },
    next: { id: 'dyn-20', title: 'Debugging & Troubleshooting Dynamo Scripts' },
  },

  // ============================================================
  // LESSON DYN-20 — Debugging & Troubleshooting
  // ============================================================
  {
    id: 'dyn-20', num: '20',
    title: 'Debugging & Troubleshooting Dynamo Scripts',
    topic: 'Families & Debugging', cat: 'advanced', readTime: '10 min', free: false,
    desc: 'Read node error states, isolate the failure point in a graph, and fix the most common causes of broken Dynamo scripts.',
    intro: `A Dynamo graph that runs cleanly from an empty canvas is rare on the first attempt — every experienced Dynamo user spends real time reading node colours, tracing null values back through a chain of nodes, and figuring out why a list that should have ten items has none. Debugging is not a side skill in Dynamo, it is a core one. This lesson covers how to read the graph's own error signals and the handful of mistakes responsible for the majority of broken scripts.`,
    sections: [
      {
        id: 's1', heading: 'Reading Node Error States', level: 'h2',
        content: `Dynamo nodes communicate their run state through colour and icons directly on the canvas — learning to read these at a glance is the fastest debugging tool available.`,
        items: [
          '**Grey/default node** — ran successfully with no issues',
          '**Yellow node with a warning icon** — the node ran but returned a warning, most commonly a null value or an empty list somewhere in its output; the graph continues running past it',
          '**Red node** — the node failed to execute entirely (an error, not just a warning); this typically halts anything downstream of it that depends on its output',
          'Hovering over a warning/error icon on a node shows the specific message — always read this message first before assuming the cause',
          'A red or yellow node is not always the root cause — trace upstream, since a null value often originates several nodes earlier and only becomes visible where it causes a failure',
        ],
        formula: { label: 'Debugging Order', text: 'Find the first red/yellow node upstream (not the last one downstream) — that is usually the true source of the problem' },
      },
      {
        id: 's2', heading: 'Watch and Watch 3D Nodes', level: 'h2',
        content: `The **Watch** and **Watch 3D** nodes are the primary tools for inspecting data at any point in a graph without disrupting the graph's logic.`,
        items: [
          '**Watch** — displays the exact value(s) passing through a wire: a single value, a flat list, or a nested list tree, exactly as Dynamo sees it',
          '**Watch 3D** — renders geometry passing through a wire in its own preview window, useful for confirming geometry looks correct before it is used to place or modify Revit elements',
          'Insert a Watch node temporarily on any suspicious wire during debugging, then remove it (or leave it — Watch nodes do not harm a finished script) once the issue is resolved',
          'Watch nodes are especially useful for confirming list structure (List@Level, nested sublists) matches what a downstream node expects',
        ],
      },
      {
        id: 's3', heading: 'Null Values and Empty Lists', level: 'h2',
        content: `A large share of Dynamo warnings trace back to one of two root causes: a **null** value where a real value was expected, or an **empty list** feeding a node that needs at least one item.`,
        subsections: [
          {
            heading: 'Common Sources',
            items: [
              'A parameter lookup (Element.GetParameterValueByName) returns null when the named parameter does not exist on that element, or exists but is empty',
              'A filter node (e.g., filtering elements by category or level) returns an empty list when no elements matched the filter criteria — often due to a typo in the filter string',
              'A List.FilterByBoolMask or similar node can silently produce an empty "true" list if the boolean test never evaluates true',
              'Downstream nodes fed a null or empty list typically report "Warning: Node not evaluated" — this is a cascading symptom, not the root cause',
            ],
          },
        ],
        code: {
          label: 'Guarding Against Nulls in Python',
          lines: [
            'elements = UnwrapElement(IN[0])',
            'results = []',
            'for e in elements:',
            '    param = e.LookupParameter("Mark")',
            '    if param is not None and param.HasValue:',
            '        results.append(param.AsString())',
            '    else:',
            '        results.append(None)   # keep list length consistent',
            '',
            'OUT = results',
          ],
        },
      },
      {
        id: 's4', heading: 'The "Warning: Node Not Evaluated" Cascade', level: 'h2',
        content: `When a node early in a graph fails or returns null, every node downstream of it that depends on that output typically shows "Warning: Node not evaluated" rather than its own distinct error — it never got the chance to run.`,
        items: [
          'Do not attempt to fix every yellow "not evaluated" node individually — trace back to the single earliest failure causing the cascade',
          'Fixing the root node usually clears every downstream warning automatically once the graph is re-run',
          'If several unrelated branches all show "not evaluated," check for a single shared upstream node (e.g., a document reference or a shared filter) feeding all of them',
        ],
        formula: { label: 'Cascade Rule', text: 'One broken upstream node can produce a dozen downstream warnings — fix the first one, not the last one' },
      },
      {
        id: 's5', heading: 'Lacing Mismatches', level: 'h2',
        content: `Incorrect **lacing** (how Dynamo pairs up items across multiple list inputs) is one of the most common sources of unexpected list-length mismatches and silently wrong results.`,
        items: [
          '**Shortest** lacing (default on many nodes) — pairs list items up to the length of the shortest input list, silently dropping extra items from longer lists',
          '**Longest** lacing — pairs items up to the length of the longest list, repeating the last item of shorter lists to fill the gap',
          '**Cross Product** lacing — pairs every item in one list against every item in the other, producing a list of lists',
          'Set lacing via right-click on a node → Lacing → choose the appropriate option',
          'A classic symptom of wrong lacing: a script that "loses" some elements without any visible error — check lacing before assuming a filter or collector is at fault',
        ],
      },
      {
        id: 's6', heading: 'Unwrapped vs Wrapped Element Errors', level: 'h2',
        content: `A frequent Python-specific error is attempting to call a native Revit API method directly on a Dynamo-wrapped element rather than the unwrapped version, or the reverse — passing a raw Revit API element where Dynamo expects its own wrapped type.`,
        items: [
          'Symptom: AttributeError or similar exception referencing a method that "does not exist" on the object, when the method clearly exists in the Revit API documentation',
          'Fix: call UnwrapElement() on any element arriving from IN[] before using Revit API methods on it (see Lesson 18)',
          'When returning a value to OUT that downstream Dynamo nodes will consume, verify with a Watch node that the returned type behaves as expected — occasionally a raw API object needs to be handled differently than a Dynamo-native one',
        ],
      },
      {
        id: 's7', heading: 'Manual Run Mode Pitfalls', level: 'h2',
        content: `Dynamo graphs can run in **Automatic** mode (re-runs on every change) or **Manual** mode (only runs when the Run button is clicked). Manual mode is common in production scripts to avoid expensive re-runs on every small edit, but it introduces its own class of bugs.`,
        items: [
          'In Manual mode, changing an input (e.g., editing a File Path or a code block value) does not take effect until Run is clicked again',
          'A very common false bug report: "the script is broken" when in fact the graph is simply showing stale results from before the last unrun change',
          'Always click Run after any input change when working in Manual mode, and get in the habit of checking the mode indicator before troubleshooting further',
          'For scripts published to Dynamo Player (Lesson 23), Player always executes a fresh run — Manual/Automatic mode inside the authoring graph does not affect Player behaviour',
        ],
        formula: { label: 'First Debugging Question', text: 'Is the graph in Manual mode, and did you click Run after the last change? — check this before anything else' },
      },
    ],
    takeaways: [
      'Node colour is the first debugging signal: grey = success, yellow = warning (often null/empty list), red = failure that blocks downstream nodes.',
      'Use Watch and Watch 3D nodes to inspect exact data values and geometry at any point in the graph without altering the logic.',
      'Null values and empty lists are the most common root causes of warnings; trace the cascade back to the earliest failing node rather than fixing symptoms downstream.',
      '"Warning: Node not evaluated" almost always means an upstream node failed or returned null — find and fix the root cause, not each downstream symptom.',
      'Incorrect lacing (Shortest/Longest/Cross Product) is a common cause of silently mismatched or missing list items; check lacing before assuming a collector is wrong.',
      'In Manual run mode, changes do not take effect until Run is clicked again — always confirm this before troubleshooting further.',
    ],
    resource: { label: 'Dynamo Debugging Checklist', type: 'PDF' },
    quiz: { label: 'Debugging Dynamo Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-19', title: 'Dynamo & Families — Modifying and Placing Library Content' },
    next: { id: 'dyn-21', title: 'Dynamo for Quality Control — Model Checking & Reporting' },
  },

  // ============================================================
  // LESSON DYN-21 — Quality Control
  // ============================================================
  {
    id: 'dyn-21', num: '21',
    title: 'Dynamo for Quality Control — Model Checking & Reporting',
    topic: 'QA & Standards', cat: 'advanced', readTime: '11 min', free: false,
    desc: 'Build repeatable Dynamo checks that audit a model for missing data, duplicate numbers, and misplaced elements, then report the results.',
    intro: `Model quality control is usually the first casualty of a tight deadline — checking for missing parameters, duplicate room numbers, or unplaced rooms by eye across a large model is slow and error-prone, so it gets skipped. Dynamo removes the excuse: a QC script that takes fifteen minutes to build can run in seconds and catch every instance of a problem, every time, with no fatigue. This lesson covers the model auditing patterns worth building into a standard office QC script, and how to turn the results into something a coordinator can act on.`,
    sections: [
      {
        id: 's1', heading: 'Why Script Quality Control', level: 'h2',
        content: `Manual QC relies on a person remembering to check, having time to check, and not missing anything across hundreds or thousands of elements. A scripted check runs the same logic identically every time, against every element, in a fraction of the time.`,
        formula: { label: 'QC Principle', text: 'A check that is not automated is a check that eventually gets skipped under deadline pressure' },
      },
      {
        id: 's2', heading: 'Checking for Missing Required Parameters', level: 'h2',
        content: `One of the most valuable and simple QC patterns: collect every element of a category and flag any instance where a required parameter is empty or null.`,
        code: {
          label: 'Missing Parameter Check Pattern',
          lines: [
            'All Elements of Category (e.g., Doors)',
            '        │',
            '        ▼',
            'Element.GetParameterValueByName("Fire Rating")',
            '        │',
            '        ▼',
            'List.FilterByBoolMask (test: value == null or value == "")',
            '        │',
            '        ▼',
            '"in" list = elements missing the Fire Rating parameter',
          ],
        },
        items: [
          'Repeat this pattern for every parameter the office standard or the BIM Execution Plan marks as required for a given category',
          'Feed the "in" (failing) list into Element.Id and a Watch node so the coordinator can select and review the exact elements',
          'For a full audit, loop this pattern across a list of category/parameter pairs rather than duplicating the graph per parameter',
        ],
      },
      {
        id: 's3', heading: 'Duplicate Room Numbers and Unplaced Rooms', level: 'h2',
        content: `Room numbering errors are a frequent and consequential QC failure — duplicate numbers break schedules and area reports, and unplaced rooms are easy to lose track of in a large model.`,
        subsections: [
          {
            heading: 'Room QC Checks',
            items: [
              'Duplicate room numbers — collect all Room.Number values, then use List.UniqueItems (or a custom duplicate-finder) to identify any number appearing more than once',
              'Unplaced rooms — All Elements of Category "Rooms" includes unplaced room elements; filter using Room.IsPlaced (or check Room.Area == 0, since unplaced rooms report zero area) to isolate them',
              'Rooms not assigned to any Level — check Element.GetParameterValueByName("Level") for null, which usually indicates a room placed incorrectly or orphaned after a level deletion',
              'Cross-check room count per level against the expected unit/room count from the project brief or Excel room schedule (Lessons 13–14) to catch missing rooms entirely',
            ],
          },
        ],
        formula: { label: 'Room QC Rule', text: 'Zero area on a Room element almost always means it is unplaced, not that it is genuinely a zero-area space' },
      },
      {
        id: 's4', heading: 'Elements Outside Expected Levels', level: 'h2',
        content: `Elements occasionally get associated with the wrong level — commonly after copy/paste operations, or when a family is placed with "Level" set to a default rather than the intended host level.`,
        items: [
          'Collect elements by category, then read their Level parameter (or the Level property returned by Element.Level for hosted elements)',
          'Compare the reported Level against the element\'s actual Z-coordinate range — a mismatch (element physically sits at Level 3 height but reports Level 1) indicates a level-association error',
          'This check is particularly valuable after large copy/paste or group-paste operations, which are the most common cause of this kind of error',
          'Flag elements where the reported Level does not correspond to their bounding box elevation range for manual review',
        ],
      },
      {
        id: 's5', heading: 'Exporting QC Results as a Report', level: 'h2',
        content: `A QC script is far more useful to a coordination team when its output is a readable report rather than a Watch node full of Element IDs that only the script author can interpret.`,
        items: [
          'Use Excel.WriteToFile (the same export node family covered in the Data Exchange lesson) to write QC results to a spreadsheet with one row per failing element',
          'Structure the report with clear columns: Element ID, Category, Issue Type, Parameter/Field, Current Value',
          'Write one sheet per check type (Missing Parameters, Duplicate Rooms, Unplaced Rooms, Level Mismatches) within a single Excel workbook for a complete QC report',
          'Include a summary row or separate summary sheet with pass/fail counts per check, so a project lead can see overall model health at a glance without reading every row',
          'Timestamp the report file name (e.g., "QC_Report_2026-07-01.xlsx") so historical QC runs can be compared over time',
        ],
        code: {
          label: 'QC Report Row Structure',
          lines: [
            'Element ID | Category | Issue Type          | Field          | Value',
            '-----------|----------|----------------------|----------------|-------',
            '482910     | Doors    | Missing Parameter     | Fire Rating    | (empty)',
            '511023     | Rooms    | Duplicate Room Number | Room.Number    | 204',
            '511024     | Rooms    | Duplicate Room Number | Room.Number    | 204',
            '392110     | Rooms    | Unplaced Room         | Room.Area      | 0',
          ],
        },
      },
      {
        id: 's6', heading: 'Scheduling Recurring QC Checks via Dynamo Player', level: 'h2',
        content: `A QC script only delivers ongoing value if it actually gets run regularly. Dynamo Player (covered in full in Lesson 23) makes this practical for non-scripting team members.`,
        items: [
          'Publish the QC script to Dynamo Player with clear input prompts (e.g., a File Path input for where to save the report)',
          'Establish an office standard: run the QC Player script at defined milestones (end of each week, before every coordination meeting, before every client issue)',
          'Because Player runs the graph without exposing the node canvas, any team member — not just the script\'s author — can run the check',
          'Keep the QC script\'s checks and thresholds documented in a Notes node so future edits do not accidentally loosen a check without the team realising',
        ],
      },
      {
        id: 's7', heading: 'Building a QC Culture Around the Script', level: 'h2',
        content: `The technical script is only half of an effective QC process — the other half is the team habit of actually running it and acting on what it finds.`,
        items: [
          'Assign clear ownership: who runs the QC script, and when, should be written into the BIM Execution Plan or office standard, not left informal',
          'Treat QC failures as issues to resolve before model issue, not as a note to "look at later"',
          'Review QC report trends over time — a category that repeatedly fails the same check may indicate a workflow or training gap rather than a one-off mistake',
          'Update the QC script itself as new standards are adopted — a stale QC script that checks last year\'s requirements gives false confidence',
        ],
      },
    ],
    takeaways: [
      'Scripted QC checks run identically every time against every element, removing the fatigue and inconsistency of manual review.',
      'A missing-parameter check follows a simple pattern: collect elements by category, read a parameter, filter for null/empty values.',
      'Room QC should check for duplicate room numbers, unplaced rooms (typically reporting zero area), and rooms missing a Level assignment.',
      'Elements can be mis-associated with the wrong Level after copy/paste operations; compare the reported Level against actual element elevation to catch this.',
      'Export QC results to Excel with clear columns (Element ID, Category, Issue Type, Field, Value) and a summary sheet for at-a-glance model health.',
      'Publish QC scripts to Dynamo Player so any team member can run them on a regular schedule, not just the script\'s original author.',
    ],
    resource: { label: 'Model QC Scripting Patterns', type: 'PDF' },
    quiz: { label: 'Quality Control Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-20', title: 'Debugging & Troubleshooting Dynamo Scripts' },
    next: { id: 'dyn-22', title: 'Dynamo & ISO 19650 — Automating Naming & Data Compliance' },
  },

  // ============================================================
  // LESSON DYN-22 — ISO 19650 Automation
  // ============================================================
  {
    id: 'dyn-22', num: '22',
    title: 'Dynamo & ISO 19650 — Automating Naming & Data Compliance',
    topic: 'QA & Standards', cat: 'advanced', readTime: '11 min', free: false,
    desc: 'Use Dynamo to batch-validate and correct sheet, view, and file names against an ISO 19650 naming convention.',
    intro: `ISO 19650 information management depends on consistent, predictable naming — a coordination model, a drawing sheet, or a file that does not follow the agreed naming convention becomes hard to find, hard to reference correctly, and hard to trust as part of the Common Data Environment. Checking dozens or hundreds of sheets and views by eye against a naming pattern is exactly the kind of repetitive, rule-based task Dynamo is built for. This lesson covers building a Dynamo check (and, where possible, a correction) against the ISO 19650 naming convention.`,
    sections: [
      {
        id: 's1', heading: 'The ISO 19650 Naming Pattern', level: 'h2',
        content: `ISO 19650 defines a structured naming convention for information containers, built from a fixed sequence of fields separated by hyphens. The exact field list is agreed per project in the BIM Execution Plan, but the standard pattern is:`,
        code: {
          label: 'ISO 19650 Container Naming Fields',
          lines: [
            'Project - Originator - Volume/System - Level - Type - Role - Number',
            '',
            'Example:  DPK-ABC-ZZ-00-DR-A-0001',
            '           │    │  │  │  │  │   │',
            '           │    │  │  │  │  │   └─ Number (sequential, 4 digits)',
            '           │    │  │  │  │  └───── Role (A = Architectural)',
            '           │    │  │  │  └──────── Type (DR = Drawing)',
            '           │    │  │  └─────────── Level (00 = ground / zz = multiple)',
            '           │    │  └────────────── Volume/System (ZZ = whole project)',
            '           │    └───────────────── Originator (ABC = the authoring org)',
            '           └────────────────────── Project (DPK = Dharren Park)',
          ],
        },
        formula: { label: 'Naming Rule', text: 'Project-Originator-Volume-Level-Type-Role-Number, exactly matching the field definitions agreed in the BEP' },
      },
      {
        id: 's2', heading: 'Reading Sheet and View Names into Dynamo', level: 'h2',
        content: `Before names can be validated, they need to be collected from the model into Dynamo as plain strings for pattern matching.`,
        items: [
          '**All Elements of Category "Sheets"** — collects every Sheet element in the project',
          '**Element.GetParameterValueByName("Sheet Number")** and **("Sheet Name")** — retrieves the two naming-relevant fields per sheet',
          'For views, use **Views** collector nodes and read the View Name property directly',
          'For files (family files, linked models), use a Directory.FileNames node to collect file names from the project or library folder',
        ],
      },
      {
        id: 's3', heading: 'Validating Names Against the Schema', level: 'h2',
        content: `With names collected as strings, the validation itself is typically a Python Script node using string splitting and pattern checks, since stock nodes handle simple string tests but become unwieldy for a multi-field structured check.`,
        code: {
          label: 'Naming Validation Pattern (Python)',
          lines: [
            'import re',
            '',
            'names = IN[0]   # list of sheet/view/file names',
            '',
            '# Pattern: PROJ-ORIG-VOL-LEVEL-TYPE-ROLE-NUMBER',
            'pattern = r\'^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{2}-[A-Z0-9]{2}-[A-Z]{2}-[A-Z]{1}-\\d{4}$\'',
            '',
            'results = []',
            'for name in names:',
            '    is_valid = bool(re.match(pattern, name))',
            '    results.append(is_valid)',
            '',
            'OUT = results',
          ],
        },
        items: [
          'Adjust the regular expression to match the exact field lengths and separators agreed for the project (not every project uses identical field widths)',
          'Feed the resulting boolean list back alongside the original names using List.FilterByBoolMask to separate compliant from non-compliant names',
          'A regex-based check is generally more reliable than a manual field-by-field String.Split comparison once more than two or three fields are involved',
        ],
      },
      {
        id: 's4', heading: 'Flagging Non-Compliant Elements', level: 'h2',
        content: `Once non-compliant names are identified, they need to be surfaced somewhere a coordinator will actually see and act on them — not left buried in a Watch node.`,
        items: [
          'Export the list of non-compliant sheets/views/files to Excel alongside the QC report pattern from Lesson 21, with a column showing which naming field failed',
          'Where practical, identify exactly which field failed (e.g., "Role field is lowercase \'a\' instead of uppercase \'A\'") rather than a generic pass/fail, to speed up manual correction',
          'Highlight or colour-code failing rows in the exported Excel file to make them visually obvious to a reviewer',
          'Re-run the check after each correction pass to confirm the whole project reaches full compliance before an information delivery milestone',
        ],
      },
      {
        id: 's5', heading: 'Batch-Renaming Sheets and Views', level: 'h2',
        content: `Where a systematic naming error is found (for example, an entire discipline's sheets missing the correct Role code), Dynamo can correct the names in bulk rather than requiring one-by-one manual renaming.`,
        code: {
          label: 'Batch Rename Pattern',
          lines: [
            'TransactionManager.Instance.EnsureInTransaction(doc)',
            '',
            'sheets = UnwrapElement(IN[0])       # sheet elements',
            'new_names = IN[1]                  # corrected names, same order',
            '',
            'for sheet, new_name in zip(sheets, new_names):',
            '    param = sheet.LookupParameter("Sheet Name")',
            '    if param and not param.IsReadOnly:',
            '        param.Set(new_name)',
            '',
            'TransactionManager.Instance.TransactionTaskDone()',
            'OUT = new_names',
          ],
        },
        items: [
          'Always generate the full list of proposed new names first and review them (via Watch or an Excel export) before running the write-back transaction',
          'Batch renaming should never run silently — output a before/after comparison so the change is auditable',
          'Test on a handful of sheets first before running the corrected name across an entire sheet set',
        ],
      },
      {
        id: 's6', heading: 'Validating Parameter Data Against the Naming Schema', level: 'h2',
        content: `Naming compliance often extends beyond the file/sheet name itself to metadata parameters that should match or derive from the same schema — for example, a "Discipline" or "Originator" project parameter that should agree with the code embedded in the name.`,
        items: [
          'Extract the Originator or Role code from the name string (via string splitting) and compare it against a separate metadata parameter on the same element',
          'Flag any mismatch between the embedded code in the name and the corresponding parameter value — these two should never disagree',
          'This cross-check catches cases where a name was corrected manually but the underlying parameter was not updated to match, or vice versa',
        ],
      },
      {
        id: 's7', heading: 'Integrating the Check into the Delivery Workflow', level: 'h2',
        content: `A naming compliance script delivers the most value when it is run at a fixed point before every information delivery, not just occasionally.`,
        items: [
          'Publish the naming check to Dynamo Player alongside the general QC script from Lesson 21, so both run as part of the same pre-issue routine',
          'Run the naming check before every push of information to the Common Data Environment (CDE)',
          'Record the naming compliance result as part of the information container\'s own metadata or the transmittal note, demonstrating due diligence against the BEP requirements',
          'Update the script\'s regex pattern immediately if the project\'s naming convention is formally revised — a naming check enforcing an outdated convention causes more confusion than having no check at all',
        ],
      },
    ],
    takeaways: [
      'ISO 19650 container naming follows a structured Project-Originator-Volume-Level-Type-Role-Number pattern, agreed per project in the BEP.',
      'Collect sheet, view, and file names into Dynamo using category collectors, parameter lookups, and Directory.FileNames for files.',
      'A Python Script node using regular expressions is generally more reliable than chained stock string nodes for validating a multi-field naming pattern.',
      'Export non-compliant names to a report identifying exactly which field failed, rather than a generic pass/fail flag.',
      'Batch-renaming via a transaction-wrapped Python script can correct systematic naming errors, but should always output a before/after comparison for review first.',
      'Naming checks should run as a fixed step before every information delivery to the CDE, and the check itself must be updated whenever the naming convention changes.',
    ],
    resource: { label: 'ISO 19650 Naming Automation Guide', type: 'PDF' },
    quiz: { label: 'ISO 19650 Automation Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-21', title: 'Dynamo for Quality Control — Model Checking & Reporting' },
    next: { id: 'dyn-23', title: 'Publishing & Sharing Scripts — Dynamo Player & Team Workflows' },
  },

  // ============================================================
  // LESSON DYN-23 — Publishing & Sharing Scripts
  // ============================================================
  {
    id: 'dyn-23', num: '23',
    title: 'Publishing & Sharing Scripts — Dynamo Player & Team Workflows',
    topic: 'Team Workflows', cat: 'advanced', readTime: '10 min', free: false,
    desc: 'Package finished Dynamo graphs for non-scripting teammates using Dynamo Player, and manage packages and version control across a team.',
    intro: `A Dynamo script that only its author can run has limited value to an office. The real payoff of automation comes when a script written once can be run by any team member — a BIM technician, a project architect, a QA reviewer — without them needing to understand the node graph at all. This lesson covers Dynamo Player, the Package Manager ecosystem that scripts often depend on, and the practical realities of managing .dyn files across a team.`,
    sections: [
      {
        id: 's1', heading: 'What Dynamo Player Does', level: 'h2',
        content: `**Dynamo Player** is a simplified runner built into Revit that executes a finished .dyn graph without showing the node canvas at all. The user sees only a list of exposed inputs and a Run button.`,
        items: [
          'Accessed from the Manage tab → Dynamo Player (or via the Add-Ins tab depending on Revit version)',
          'Player points at a folder of .dyn files and lists them for selection — no need to open the full Dynamo environment',
          'Running a script through Player always executes a full, fresh run of the graph — Manual/Automatic mode settings from the authoring environment do not apply in Player',
          'Player is the standard way non-programmer team members interact with finished automation — QC checks, batch renaming, sheet generation, and similar production scripts',
        ],
        formula: { label: 'Player Value', text: 'Author builds and tests in Dynamo → publishes for Player → any team member runs it without touching the graph' },
      },
      {
        id: 's2', heading: 'Exposing Input Nodes to Player', level: 'h2',
        content: `For a script to be usable through Player, its adjustable inputs need to be marked as Player-visible so the end user can set them without opening the graph.`,
        subsections: [
          {
            heading: 'Making Inputs Player-Ready',
            items: [
              'Right-click an input node (String, File Path, Number Slider, Boolean, etc.) → "Is Input" to expose it in the Player panel',
              'Give input nodes clear, descriptive names — the Player panel shows the node\'s name as the field label, so "Input" or "File Path 1" is not helpful to the end user',
              'Set sensible default values on every Player-exposed input so a user who does not change anything still gets a reasonable result',
              'Keep the number of exposed inputs minimal and necessary — a Player script with fifteen input fields defeats the purpose of simplifying the workflow',
              'Test the script by running it through Player yourself (not just inside the authoring canvas) before handing it to the team, since Player execution can occasionally surface issues Manual-mode testing did not',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'The Package Manager', level: 'h2',
        content: `Many production Dynamo scripts depend on nodes from **packages** — community or firm-published bundles of custom nodes — rather than stock nodes alone.`,
        items: [
          'Packages → Search for a Package opens the Package Manager, where you can browse and install community packages (e.g., Clockwork, archi-lab, Rhythm, Data-Shapes)',
          'Installing a package downloads its custom nodes into your local Dynamo packages folder, making its nodes available in the library alongside stock nodes',
          'A script built using nodes from a package will show missing/red nodes for any teammate who has not installed that same package',
          'Publishing your own custom nodes as a package (Lesson 17) makes them available the same way — to your team, or publicly if published to the public Package Manager',
        ],
      },
      {
        id: 's4', heading: 'Package Dependencies', level: 'h2',
        content: `A single script may depend on several packages at once, and keeping track of exactly which ones is essential for the script to run on another machine.`,
        items: [
          'Before sharing a .dyn file, check File → Package Dependencies (or review node library icons showing a package badge) to see which packages the graph relies on',
          'Document the required package names and minimum versions in a Notes node at the top of the graph, or in an accompanying readme for the script set',
          'When installing a needed package, match the version the script was built against where possible — a much newer or older package version can change node behaviour or port names',
          'Consider maintaining an office-standard "approved package list" so every team member\'s Dynamo installation stays consistent and scripts remain portable between machines',
        ],
        formula: { label: 'Dependency Rule', text: 'A script is only as portable as its package dependencies are documented and consistently installed' },
      },
      {
        id: 's5', heading: 'Version Control for .dyn Files on a Team', level: 'h2',
        content: `.dyn files are JSON text files under the hood, but they are not well suited to line-by-line merge review the way code files are — two people editing the same graph simultaneously is a common source of lost work.`,
        subsections: [
          {
            heading: 'Team .dyn Practices',
            items: [
              'Avoid parallel edits to the same .dyn file by two people at once — unlike code, merging conflicting graph changes is impractical since the file is a dense JSON structure, not readable diffs',
              'Use a simple check-out convention (a shared tracker, a naming flag, or a note in the team channel) when a script is being actively edited',
              'Store shared production scripts in a version-controlled or centrally managed location (a Git repo, or at minimum a versioned folder on a shared drive) rather than emailing .dyn files between people',
              'Save incremental copies with version numbers or dates in the file name during active development, so a working version can always be recovered if a later edit breaks something',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Documenting Assumptions with Notes Nodes', level: 'h2',
        content: `A finished script often encodes assumptions that are invisible just from looking at the node graph — which category was assumed, which naming convention was hardcoded, which file path structure is expected. **Notes** nodes are the standard place to record these.`,
        items: [
          'Add a Notes node (right-click canvas → Add Notes, or from the View menu) at the top of every shared script describing its purpose, author, and last-updated date',
          'Document any hardcoded assumptions directly in a Notes node near the relevant part of the graph — e.g., "Assumes Sheet Number format is always 6 characters"',
          'List required packages and their versions in a Notes node so a new user knows what to install before running the script',
          'For scripts with Player-exposed inputs, a Notes node explaining what each input controls saves confusion for anyone running it without opening the graph itself',
        ],
      },
      {
        id: 's7', heading: 'Building a Team Script Library', level: 'h2',
        content: `Individual scripts become much more valuable to an office once they are organised, documented, and discoverable rather than scattered across individual desktops.`,
        items: [
          'Maintain a central shared folder (or Git repository) of approved production scripts, organised by purpose (QC, Sheet Generation, Family Management, Reporting)',
          'Include a short readme or index describing what each script does, its required packages, and its Player-exposed inputs',
          'Establish an informal review step before a new script is added to the shared library — a second set of eyes catches hardcoded assumptions the author no longer notices',
          'Periodically review the library for scripts that reference outdated packages, deprecated naming conventions, or file paths that no longer exist',
        ],
      },
    ],
    takeaways: [
      'Dynamo Player runs a finished .dyn graph as a simple input-and-Run interface, letting non-scripting team members use automation without opening the node canvas.',
      'Mark input nodes as "Is Input" and give them clear names and sensible defaults to make a script usable through Player.',
      'The Package Manager provides community and firm-published custom nodes; installing the exact package version a script depends on is essential for portability.',
      'Document a script\'s package dependencies clearly — a script is only as portable as its dependencies are known and consistently installed across the team.',
      '.dyn files do not merge well between parallel edits; avoid simultaneous editing and store shared scripts in a version-controlled or centrally managed location.',
      'Use Notes nodes to document a script\'s purpose, hardcoded assumptions, required packages, and Player input meanings for anyone other than the original author.',
    ],
    resource: { label: 'Dynamo Player & Team Workflow Guide', type: 'PDF' },
    quiz: { label: 'Publishing & Sharing Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-22', title: 'Dynamo & ISO 19650 — Automating Naming & Data Compliance' },
    next: { id: 'dyn-24', title: 'Capstone — Dharren Park Automation: Rooms, Sheets & Data in One Script' },
  },

  // ============================================================
  // LESSON DYN-24 — Capstone
  // ============================================================
  {
    id: 'dyn-24', num: '24',
    title: 'Capstone — Dharren Park Automation: Rooms, Sheets & Data in One Script',
    topic: 'Capstone', cat: 'advanced', readTime: '14 min', free: false,
    desc: 'Build one end-to-end Dynamo script that reads room data from Excel, updates the model, generates sheets, and validates naming compliance.',
    intro: `This capstone brings the entire Dynamo course together into a single, real production script for the Dharren Park project. Instead of isolated exercises, you are going to build the kind of script a BIM coordinator actually ships: one that starts from a room list maintained in Excel, pushes that data into the Revit model, generates a complete sheet set from it, and finishes by validating everything it touched against the project's ISO 19650 naming convention. By the end, you will have a single script that replaces what would otherwise be a full day of manual, repetitive Revit work — and a template you can adapt to the next project.`,
    sections: [
      {
        id: 's1', heading: 'The Brief', level: 'h2',
        content: `Dharren Park is entering a coordination milestone. The client's space planning team maintains the authoritative room list in Excel — room numbers, names, target areas, and departments — and that spreadsheet changes every few days as the brief is refined. Up to now, a BIM technician has been manually re-typing changes into Revit and manually creating a floor plan sheet for each new level added to the project. Both tasks are exactly the kind of repetitive, rule-based work this course has been building toward automating.

**The task**: build a single Dynamo script (or a small number of clearly connected scripts run in sequence) that:
1. Reads the current room list from the shared Excel file
2. Updates room **Number**, **Name**, and **Department** parameters in the Revit model to match
3. Generates one floor plan sheet per level that does not already have one, using the office titleblock and viewport placement logic from Lesson 16
4. Validates every new sheet name against the project's ISO 19650 naming convention before the script finishes, flagging anything non-compliant`,
        formula: { label: 'Capstone Scope', text: 'Excel Room Data → Revit Room Parameters → Generated Sheets → ISO 19650 Naming Validation, in one connected script' },
      },
      {
        id: 's2', heading: 'Step 1 — Reading the Room List from Excel', level: 'h2',
        content: `The script starts exactly where the Excel Data Exchange lessons (13–14) left off: reading the shared room schedule into Dynamo as structured data.`,
        subsections: [
          {
            heading: 'Build Steps',
            items: [
              'File Path node → points to the shared "DharrenPark_RoomList.xlsx" file on the office network location, not a personal drive',
              'Data.ImportExcel (or Excel.ReadFromFile) → reads the named sheet ("Rooms") into a list of rows',
              'Use List.Transpose if the data comes in as rows and needs to be organised into columns (Room Number, Room Name, Department, Target Area)',
              'Add a Watch node immediately after the import to confirm the column order and header row match expectations before building further logic',
              'Strip the header row from the data list before it is used downstream — Code Block or List.DropItems(list, 1) handles this cleanly',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Step 2 — Matching Excel Rows to Existing Rooms', level: 'h2',
        content: `Before any parameter can be written, each Excel row needs to be matched to the correct Room element already placed in the model — matching by Room Number is the most reliable key, since names and departments are exactly what may be changing.`,
        code: {
          label: 'Matching Pattern',
          lines: [
            'All Elements of Category "Rooms"  ──►  existing_rooms',
            'Element.GetParameterValueByName("Number")  ──►  existing_numbers',
            '',
            'Excel column "Room Number"  ──►  excel_numbers',
            '',
            '# For each excel row, find the matching Revit room by number',
            'List.IndexOf(existing_numbers, excel_number)',
            '  → if found: update that room\'s parameters',
            '  → if not found: flag as "room not yet placed in model"',
          ],
        },
        items: [
          'Rooms present in Excel but missing from the model are flagged for the coordinator, not auto-created — placing a Room element requires a location point that only a human should decide',
          'Rooms present in the model but missing from Excel are flagged separately — these may be rooms that were deleted from the brief but not yet removed from Revit',
          'This matching step is the point where a null/empty-list debugging check (Lesson 20) is most valuable — confirm every Excel row produced a match or an explicit flag before moving on',
        ],
      },
      {
        id: 's4', heading: 'Step 3 — Writing Room Parameters Back to the Model', level: 'h2',
        content: `With matched pairs established, a transaction-wrapped Python script (Lesson 18) updates the Number, Name, and Department parameters on each matched Room.`,
        code: {
          label: 'Parameter Update Script',
          lines: [
            'import clr',
            'clr.AddReference(\'RevitAPI\')',
            'from Autodesk.Revit.DB import *',
            'clr.AddReference(\'RevitServices\')',
            'from RevitServices.Persistence import DocumentManager',
            'from RevitServices.Transactions import TransactionManager',
            '',
            'doc = DocumentManager.Instance.CurrentDBDocument',
            'rooms = UnwrapElement(IN[0])       # matched Room elements',
            'names = IN[1]                       # corresponding names',
            'departments = IN[2]                 # corresponding departments',
            '',
            'TransactionManager.Instance.EnsureInTransaction(doc)',
            '',
            'for room, name, dept in zip(rooms, names, departments):',
            '    name_param = room.LookupParameter("Name")',
            '    dept_param = room.LookupParameter("Department")',
            '    if name_param and not name_param.IsReadOnly:',
            '        name_param.Set(name)',
            '    if dept_param and not dept_param.IsReadOnly:',
            '        dept_param.Set(dept)',
            '',
            'TransactionManager.Instance.TransactionTaskDone()',
            'OUT = rooms',
          ],
        },
        items: [
          'Room Number is intentionally left out of the bulk-write loop above — renumbering rooms while other parameters update in the same pass risks losing the number-based match; update Number last, in its own reviewed pass, if it needs to change at all',
          'Run this step against a saved, backed-up copy of the model first, exactly as advised in Lesson 19',
        ],
      },
      {
        id: 's5', heading: 'Step 4 — Generating Sheets per Level', level: 'h2',
        content: `Once room data is current, the script moves to sheet generation, reusing the view-and-sheet workflow from Lesson 16 but driven by which levels actually need a new sheet.`,
        subsections: [
          {
            heading: 'Build Steps',
            items: [
              'Collect all Levels in the project, and separately collect all existing Sheets with their associated level (read from the sheet name or a custom "Associated Level" parameter)',
              'Use List.SetDifference (or an equivalent filter) to identify which Levels do not yet have a corresponding sheet',
              'For each level missing a sheet: create a Floor Plan view (View.ByLevel or similar), create a new Sheet with the office titleblock (Sheet.ByTitleBlock or similar), and place the view onto the sheet as a viewport',
              'Generate the Sheet Number and Sheet Name following the ISO 19650 pattern directly at creation time — e.g., derive the Level field of the name from the Level\'s own name rather than typing it manually, reducing the chance of a naming error before validation even runs',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Step 5 — Validating Naming Compliance', level: 'h2',
        content: `The final stage runs the ISO 19650 naming check from Lesson 22 against every sheet created in Step 4, closing the loop before the script reports back to the user.`,
        code: {
          label: 'Closing Validation Pass',
          lines: [
            'new_sheets = <sheets created in Step 4>',
            'sheet_names = [s.LookupParameter("Sheet Name").AsString() for s in new_sheets]',
            '',
            'import re',
            'pattern = r\'^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{2}-[A-Z0-9]{2}-[A-Z]{2}-[A-Z]{1}-\\d{4}$\'',
            '',
            'compliance = [bool(re.match(pattern, n)) for n in sheet_names]',
            '',
            'OUT = list(zip(sheet_names, compliance))',
          ],
        },
        items: [
          'Any sheet failing validation is written to the same Excel QC report pattern from Lesson 21, alongside the room-matching flags from Step 2 — one consolidated report, not three separate outputs',
          'The script should never silently accept a non-compliant name — the whole point of validating at generation time is to catch the problem before the sheet reaches the CDE',
        ],
      },
      {
        id: 's7', heading: 'Assembling the Full Script', level: 'h2',
        content: `Four stages — Excel import, room parameter update, sheet generation, naming validation — connect into one graph, or into a small set of custom nodes (Lesson 17) chained together if the full graph becomes too large to read comfortably on one canvas.`,
        items: [
          'Group each stage clearly (Lesson 17\'s Group vs Custom Node distinction applies directly here — consider promoting the naming validator to a proper Custom Node since it is reused unchanged from Lesson 22)',
          'Add Notes nodes documenting the Excel file path assumption, the required packages, and the naming pattern in force for this project',
          'Expose the Excel file path and the output report path as Player inputs (Lesson 23) so the coordinator can run this without opening the graph at all',
          'Test end-to-end on a copy of the model first: run the full script, confirm the Excel-to-Revit match report, confirm the generated sheets look correct, and confirm the naming validation report is accurate',
        ],
      },
      {
        id: 's8', heading: 'What You Built', level: 'h2',
        content: `Stepping back, this capstone script replaces a task that would traditionally consume the better part of a working day — manually re-typing room data, manually building sheets one level at a time, manually eyeballing sheet names against a naming standard — with a single Player-runnable script that takes minutes.

More importantly, it demonstrates the shape of real Dynamo production work: no single lesson in this course did the whole job by itself. Excel data exchange, Revit API scripting through Python, transaction-safe parameter writes, sheet generation, and naming validation each contributed one piece, and the value came from connecting them into a single reliable pipeline that a non-scripting teammate can run through Dynamo Player whenever the room brief changes.

That is the actual skill this course has built: not memorising individual nodes, but recognising a repetitive, rule-based task in a real project and having the judgment and technical range to automate the whole thing end to end.`,
        formula: { label: 'Capstone Complete', text: 'Excel Import + Transaction-Safe Writes + Sheet Generation + Naming Validation = One Script, One Player Click' },
      },
    ],
    takeaways: [
      'The capstone script chains four stages into one pipeline: Excel room import, matched parameter updates, per-level sheet generation, and ISO 19650 naming validation.',
      'Match Excel rows to Revit Room elements by Room Number, and explicitly flag any row or room that has no match rather than guessing.',
      'Wrap every model-modifying step in EnsureInTransaction/TransactionTaskDone, and update Room Number separately from other parameters to avoid breaking the match key mid-update.',
      'Generate sheets only for levels that do not already have one, deriving the sheet name directly from the naming schema at creation time to reduce validation failures.',
      'Run the naming validator from Lesson 22 as a closing step so every newly generated sheet is checked before the script finishes, not after the fact.',
      'Expose the file paths as Dynamo Player inputs so a non-scripting coordinator can re-run the entire pipeline whenever the room brief changes.',
    ],
    resource: { label: 'Dharren Park Capstone Script Brief', type: 'PDF' },
    quiz: { label: 'Dynamo Capstone Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-23', title: 'Publishing & Sharing Scripts — Dynamo Player & Team Workflows' },
    next: null,
  },

]
