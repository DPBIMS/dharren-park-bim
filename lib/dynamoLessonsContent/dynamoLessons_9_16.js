// ============================================================
// AUTODESK DYNAMO — LESSONS dyn-9 through dyn-16 (INTERMEDIATE)
// Section: Lists & Placement / Parameters & Logic / Data Exchange / Families & Sheets
// File: lib/dynamoLessonsContent/dynamoLessons_9_16.js
// Index: lib/dynamoLessonsData.js
// ============================================================

export const lessons_9_16 = [

  // ============================================================
  // LESSON DYN-9 — Lists & List Management
  // ============================================================
  {
    id: 'dyn-9', num: '09',
    title: 'Lists & List Management — Lacing, Levels & Flattening',
    topic: 'Lists & Placement', cat: 'intermediate', readTime: '10 min', free: false,
    desc: 'Understand how Dynamo stores and moves data as lists, and master List@Level, Lacing, and List.Flatten to control exactly how your data combines.',
    intro: `Every wire in Dynamo carries a list. Even a single number is really a list of one item as far as Dynamo is concerned, and once you start generating points, curves, or Revit elements in bulk, you are almost always working with lists of lists. Understanding how Dynamo structures, indexes, and combines list data is the single biggest jump in capability between a beginner script and one that reliably automates real production work. This lesson covers list levels, lacing strategies, and the flatten/combine operations you will use constantly.`,
    sections: [
      {
        id: 's1', heading: 'Lists Are the Native Data Structure', level: 'h2',
        content: `Dynamo is a dataflow programming environment — data moves along wires from node to node, and that data is almost always structured as a **list**. A list is an ordered collection of items, and those items can themselves be lists, creating **nested lists** (a "list of lists").

A simple example: if you place five points along a curve using Curve.PointAtParameter with a list of five parameter values, the output is a single flat list containing five point objects. But if you do that operation for ten different curves at once, the natural output is a list of ten lists, each containing five points — a nested structure that mirrors the shape of your input.`,
        formula: { label: 'Core Idea', text: 'A list is not a data type you opt into — it is the default shape of everything flowing through Dynamo' },
      },
      {
        id: 's2', heading: 'Reading List Structure — Indices and Levels', level: 'h2',
        content: `Every list has an index for each item, starting at 0. List.GetItemAtIndex retrieves a single item from a list by its position — index 0 for the first item, index 1 for the second, and so on. For nested lists, you need to know which **level** of the structure you want to operate on.

Dynamo exposes this with the **@L (Level) indicator**, visible when you click the small icon on a node's input port.`,
        subsections: [
          {
            heading: 'Understanding List Levels',
            items: [
              '**@L1** — operate on the outermost list only, treating each nested sub-list as a single item',
              '**@L2** — reach one level deeper, operating on the items inside each sub-list',
              '**@L3 and beyond** — for lists nested three or more levels deep',
              'Click the small numbered icon at the bottom-left of an input port to cycle through level options',
              'The "Use Levels" checkbox (or right-click → Lacing menu on some nodes) enables this behaviour explicitly',
              'Getting the level wrong is one of the most common causes of "why does my node only run once?" bugs',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Lacing — Controlling How Multiple Lists Combine', level: 'h2',
        content: `When a node has **two or more list inputs**, Dynamo needs to know how to pair up items from each list. This behaviour is called **Lacing**, and it is set by right-clicking a node and choosing from the Lacing submenu.`,
        code: {
          label: 'The Three Lacing Modes',
          lines: [
            'Shortest      → pairs items index-by-index; stops at the length',
            '                of the SHORTEST input list. List A (5 items) +',
            '                List B (3 items) → 3 output results.',
            '',
            'Longest       → pairs items index-by-index; the shorter list',
            '                repeats its LAST item to match the longest list.',
            '                List A (5 items) + List B (3 items) → 5 results,',
            '                with List B\'s last item reused for indices 3–4.',
            '',
            'Cross Product → pairs EVERY item in List A with EVERY item in',
            '                List B. List A (5 items) + List B (3 items) →',
            '                15 results, nested as 5 sub-lists of 3.',
            '',
            'Default lacing on most nodes is Shortest.',
          ],
        },
        formula: { label: 'When to Use Which', text: 'Shortest = parallel data (matching pairs) | Longest = one list is a "default" to stretch | Cross Product = "every combination of A and B"' },
      },
      {
        id: 's4', heading: 'Practical Lacing Example', level: 'h2',
        content: `A common use case: placing columns at a grid of X and Y coordinates. If you have a list of 4 X-values and a list of 3 Y-values and you want every combination (a full 4×3 grid of 12 columns), **Cross Product** lacing on the Point.ByCoordinates node is exactly what you need — it produces a nested list of 4 lists, each containing 3 points, covering all 12 grid intersections.

If instead you already have two parallel lists — X-values and Y-values that are meant to be read pairwise (item 0 with item 0, item 1 with item 1) — **Shortest** or **Longest** lacing is correct, and Cross Product would incorrectly generate every possible combination instead of just the matched pairs.`,
        items: [
          'Grid of columns/points from separate X and Y lists → Cross Product',
          'Paired data already aligned by index (e.g., wall start points and matching end points) → Shortest',
          'One list of curves with a single repeated height value → Longest (the single height "stretches" to match)',
        ],
      },
      {
        id: 's5', heading: 'Flattening Nested Lists', level: 'h2',
        content: `Nested lists are often exactly what you want for preserving structure (e.g., "these 5 points belong to curve 3"), but many downstream nodes — especially ones that write to Excel, generate a schedule, or need a single simple list — require a flat, one-dimensional list.

**List.Flatten** collapses a nested list structure down by a specified number of levels (or completely) into a single flat list, discarding the original grouping.`,
        code: {
          label: 'List.Flatten Behaviour',
          lines: [
            'Input:  [[1, 2], [3, 4, 5], [6]]',
            'List.Flatten (full)  → [1, 2, 3, 4, 5, 6]',
            '',
            'Input:  [[[1, 2], [3]], [[4], [5, 6]]]',
            'List.Flatten (amount: 1) → [[1, 2], [3], [4], [5, 6]]',
            '(removes only the OUTERMOST level of nesting)',
          ],
        },
        formula: { label: 'Rule of Thumb', text: 'If a node downstream complains about "expected a flat list" or produces one result per sub-list instead of per item, add a List.Flatten before it' },
      },
      {
        id: 's6', heading: 'List.Map, List.Combine and Building Lists Manually', level: 'h2',
        content: `Beyond the automatic lacing behaviour built into most geometry and Revit nodes, Dynamo also provides explicit higher-order list nodes for custom logic.`,
        subsections: [
          {
            heading: 'Key List Construction Nodes',
            items: [
              '**List.Create** — builds a new list from any number of individual inputs; useful for assembling a list from separate values or node outputs',
              '**List.Map** — applies a given function (often a Custom Node or a Code Block lambda) to every item in a list, returning a new list of results',
              '**List.Combine** — like Map, but works across two or more lists simultaneously, applying a function that takes one item from each list per call (this is effectively lacing exposed as an explicit node)',
              '**List.GetItemAtIndex** — retrieves one item from a list at a specified index; combine with a loop or List.Map to extract items across nested lists',
              '**List.Count** — returns the number of items in a list; useful for validating that two lists are the expected length before combining them',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'Almost everything flowing through Dynamo is a list — even a single value is a list containing one item.',
      'List@Level (@L1, @L2, @L3...) tells a node which depth of a nested list structure to operate on.',
      'Lacing controls how two or more list inputs pair up: Shortest (stop at shortest list), Longest (repeat last item), or Cross Product (every combination).',
      'Cross Product lacing is the standard approach for generating a full grid from separate X and Y coordinate lists.',
      'List.Flatten collapses nested lists into a single flat list — essential before exporting data or feeding nodes that expect simple lists.',
      'List.Map and List.Combine let you apply custom logic across single or multiple lists explicitly, beyond automatic node lacing.',
    ],
    resource: { label: 'Dynamo List Management Cheat Sheet', type: 'PDF' },
    quiz: { label: 'Lists & List Management Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-8', title: 'Running, Saving & Managing Dynamo Scripts' },
    next: { id: 'dyn-10', title: 'Placing & Modifying Revit Elements with Dynamo' },
  },

  // ============================================================
  // LESSON DYN-10 — Placing & Modifying Revit Elements
  // ============================================================
  {
    id: 'dyn-10', num: '10',
    title: 'Placing & Modifying Revit Elements with Dynamo',
    topic: 'Lists & Placement', cat: 'intermediate', readTime: '11 min', free: false,
    desc: 'Use Dynamo to place family instances and walls programmatically, and modify existing Revit elements without touching them by hand.',
    intro: `This is the lesson where Dynamo stops being a geometry sandbox and starts actually changing your Revit model. Placing family instances at hundreds of points, generating walls along a list of curves, or bulk-editing an existing selection are exactly the kind of repetitive, error-prone tasks Dynamo exists to automate. This lesson covers the core placement nodes, how Dynamo interacts with Revit's transaction system, and how to select and modify elements that already exist in the model.`,
    sections: [
      {
        id: 's1', heading: 'Placing Family Instances at Points', level: 'h2',
        content: `The most common placement node is **FamilyInstance.ByPoint**, which takes a Family Type and a point (or list of points) and places one instance of that family at each location.`,
        subsections: [
          {
            heading: 'FamilyInstance.ByPoint Inputs',
            items: [
              '**familyType** — a Family Type object, typically obtained from a Family Types dropdown node or Family.Types',
              '**point** — a single point or a list of points; one instance is placed per point',
              'The node automatically wires into Revit\'s document and creates the element in the active view/level context',
              'Feed it a list of points (e.g., from Point.ByCoordinates with Cross Product lacing) to place dozens of instances in one run',
              'For host-based families (like doors and windows), use the appropriate overload that accepts a host element rather than a bare point',
            ],
          },
        ],
        formula: { label: 'Core Pattern', text: 'Generate points with Dynamo geometry → feed into FamilyInstance.ByPoint → get placed Revit elements back as output' },
      },
      {
        id: 's2', heading: 'Placing Walls Along Curves', level: 'h2',
        content: `**Wall.ByCurveAndHeight** creates a wall by sweeping a wall type profile along a given curve (typically a line) for a specified height, on a specified level.`,
        code: {
          label: 'Wall.ByCurveAndHeight Inputs',
          lines: [
            'curve      → the wall\'s centerline path (Line, PolyCurve, etc.)',
            'height     → wall height as a number (in the document\'s internal units)',
            'level      → the base Level the wall is hosted on',
            'wallType   → the Wall Type (e.g., "Generic - 200mm")',
            '',
            'Feeding a LIST of curves (with matching lacing on level and',
            'wallType, typically via Longest lacing if they are single',
            'repeated values) generates multiple walls in a single run —',
            'e.g., an entire perimeter of walls from a list of boundary lines.',
          ],
        },
      },
      {
        id: 's3', heading: 'Levels as Placement Context', level: 'h2',
        content: `Both family instances and walls typically need a **Level** input to establish their vertical placement context in the Revit model.`,
        items: [
          '**Level.ByElevation** — creates a new Level at a specified elevation (rarely needed if levels already exist in the project)',
          'More commonly, you retrieve EXISTING levels using a **Levels** dropdown node or by querying `Element.GetParameterValueByName` for "Elevation" across a selection',
          'Always confirm the level input matches the intended floor — placing at the wrong level is a very common and easy-to-miss error',
          'For multi-storey placement (e.g., the same layout repeated on 10 levels), use a list of Level elements with Cross Product lacing against your point/curve geometry',
        ],
      },
      {
        id: 's4', heading: 'Dynamo and Revit Transactions', level: 'h2',
        content: `Every change Dynamo makes to a Revit model — placing an element, setting a parameter, deleting something — must happen inside a **Revit transaction**, the same mechanism that wraps every manual edit you make in the Revit UI (and what makes Undo possible).

**The good news: you do not manage this yourself.** Dynamo automatically opens and closes the necessary transaction(s) each time the graph runs. When you click **Run**, Dynamo evaluates the whole graph and wraps the Revit-modifying nodes in a transaction (or a small number of transactions) behind the scenes.`,
        formula: { label: 'Key Fact', text: 'You never see an explicit "Transaction.Start" node in standard Dynamo graphs — Dynamo handles this automatically on every Run' },
      },
      {
        id: 's5', heading: 'What This Means in Practice', level: 'h2',
        content: `Because Dynamo manages transactions automatically, there are practical consequences worth understanding.`,
        items: [
          'A single **Run** of a graph that places 500 family instances happens inside one Revit operation — a single **Undo** in Revit can remove all 500 if needed',
          'If your graph errors partway through, Dynamo\'s transaction handling generally rolls back cleanly rather than leaving a half-modified model, though always verify the model state after any error',
          'Manual mode vs. Automatic mode (see the Run settings) controls WHEN the graph re-evaluates, not how transactions work — Manual mode is strongly recommended for any graph that writes to the model, so you control exactly when changes are committed',
          'Because the whole run is one transaction, large placement operations can take noticeably longer than the same operation split into smaller batches — this is normal Revit transaction overhead, not a Dynamo bug',
        ],
      },
      {
        id: 's6', heading: 'Selecting Existing Elements to Modify', level: 'h2',
        content: `Not every Dynamo graph creates new elements — many are written purely to **modify elements that already exist** in the model (bulk parameter edits, renumbering, repositioning). Dynamo provides selection nodes specifically for this.`,
        subsections: [
          {
            heading: 'Selection Nodes',
            items: [
              '**Select Model Element** — pick a single existing element directly from the Revit canvas; the node stores a live reference to that specific element',
              '**Select Elements in View** — pick multiple elements at once from the active view, returning a list',
              'Both nodes keep a live link to the Revit model — if the selected element is deleted in Revit, the node will show a warning next time the graph runs',
              'These are commonly combined with `Element.SetParameterByName` downstream to bulk-edit whatever was selected',
              'For repeatable, non-manual selection, prefer category- or filter-based collection nodes (e.g., "All Elements of Category") over manual selection, since manual selections do not update if the model changes',
            ],
          },
        ],
      },
      {
        id: 's7', heading: 'Modifying Placed or Selected Elements', level: 'h2',
        content: `Once you have a reference to an element — whether just placed by Dynamo or picked from the model — **Element.SetParameterByName** is the standard node for changing its data.`,
        code: {
          label: 'Element.SetParameterByName',
          lines: [
            'element        → the element(s) to modify (list supported)',
            'parameterName  → string, exact parameter name as it appears',
            '                 in Revit (e.g., "Comments", "Mark")',
            'value          → the new value to write',
            '',
            'Example: set every selected door\'s "Comments" parameter',
            'to "Verify Fire Rating" in a single run across the whole list.',
          ],
        },
        formula: { label: 'Placement + Modification Pattern', text: 'Place or select elements → Element.SetParameterByName → Dynamo commits it all in one transaction on Run' },
      },
    ],
    takeaways: [
      'FamilyInstance.ByPoint places family instances at one or many points in a single run; feed it a list of points to place dozens of elements at once.',
      'Wall.ByCurveAndHeight creates walls by sweeping a wall type profile along a curve for a given height and level.',
      'Levels provide the vertical placement context for most Revit-modifying nodes — always verify you are referencing the correct existing Level.',
      'Dynamo automatically wraps every model-modifying operation in a Revit transaction on Run — there is no manual transaction management required.',
      'Manual Run mode is recommended for any graph that writes to the model, so changes are only committed when you choose to run.',
      'Select Model Element and Select Elements in View let you pick existing Revit elements to modify with nodes like Element.SetParameterByName.',
    ],
    resource: { label: 'Revit Element Placement Node Reference', type: 'PDF' },
    quiz: { label: 'Placing & Modifying Elements Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-9', title: 'Lists & List Management — Lacing, Levels & Flattening' },
    next: { id: 'dyn-11', title: 'Working with Revit Parameters — Reading & Writing Data' },
  },

  // ============================================================
  // LESSON DYN-11 — Working with Revit Parameters
  // ============================================================
  {
    id: 'dyn-11', num: '11',
    title: 'Working with Revit Parameters — Reading & Writing Data',
    topic: 'Parameters & Logic', cat: 'intermediate', readTime: '10 min', free: false,
    desc: 'Read and write Revit parameter data programmatically with Dynamo, and understand the difference between instance, type, and computed parameters.',
    intro: `Parameters are where the actual data in a BIM model lives — names, numbers, materials, classifications, quantities. Almost every practical Dynamo automation, from bulk QA/QC checks to schedule population to data exchange with Excel, ultimately comes down to reading and writing parameter values on elements. This lesson covers the core parameter nodes, the crucial distinction between instance and type parameters, and where Dynamo's write access hits a hard limit.`,
    sections: [
      {
        id: 's1', heading: 'Reading Parameter Values', level: 'h2',
        content: `**Element.GetParameterValueByName** is the standard node for reading a parameter's value from an element. It takes an element (or list of elements) and a parameter name string, and returns the current value.`,
        code: {
          label: 'Element.GetParameterValueByName',
          lines: [
            'element        → the element(s) to read from',
            'parameterName  → exact string match, e.g. "Level", "Area",',
            '                 "Mark", "Comments", or a custom shared',
            '                 parameter name',
            '',
            'Returns the parameter\'s current value: could be a string,',
            'a number, an Element (e.g., a Level object), or a boolean,',
            'depending on the parameter\'s storage type.',
          ],
        },
      },
      {
        id: 's2', heading: 'Writing Parameter Values', level: 'h2',
        content: `**Element.SetParameterByName** is the corresponding write node. It takes an element (or list), a parameter name, and a new value, and commits that value inside the transaction Dynamo manages automatically on Run.`,
        items: [
          'Works for both single elements and lists (with lacing controlling how values pair up with elements)',
          'The value\'s data type must match what the parameter expects — writing text into a numeric parameter will fail or coerce unpredictably',
          'For parameters that store an Element reference (e.g., a Level or Material parameter), pass the actual Element object rather than its name as a string',
          'Batch-editing 500 elements\' "Comments" parameter is a single Element.SetParameterByName call with a list input — this is one of the most common real-world Dynamo scripts',
        ],
        formula: { label: 'Read/Write Pair', text: 'Element.GetParameterValueByName reads | Element.SetParameterByName writes — same naming pattern, opposite direction' },
      },
      {
        id: 's3', heading: 'The Element.Parameters Node', level: 'h2',
        content: `Rather than requesting parameters one name at a time, **Element.Parameters** returns a dictionary-like structure of ALL parameters and their current values on a given element. This is extremely useful for exploratory work — connecting a Watch node to Element.Parameters lets you browse every parameter name and value an element actually has, which is often the fastest way to find the exact string to use in GetParameterValueByName later.`,
        items: [
          'Use Element.Parameters + Watch during script development to discover exact parameter names (spelling and capitalization matter)',
          'Once you know the exact name you need, switch to the more efficient Element.GetParameterValueByName for the production version of the graph',
          'Element.Parameters is also useful for auditing — comparing the full parameter set across many elements to spot inconsistencies',
        ],
      },
      {
        id: 's4', heading: 'Instance Parameters vs. Type Parameters', level: 'h2',
        content: `Every Revit parameter is either an **Instance Parameter** or a **Type Parameter**, and this distinction matters enormously for what a Dynamo script actually changes.`,
        code: {
          label: 'Instance vs. Type',
          lines: [
            'INSTANCE PARAMETER',
            '  → belongs to one specific placed element only',
            '  → e.g., "Mark", "Comments", "Level", "Offset"',
            '  → changing it affects ONLY the selected instance',
            '',
            'TYPE PARAMETER',
            '  → belongs to the Family Type definition itself',
            '  → e.g., "Width", "Fire Rating" (on many door types)',
            '  → changing it affects EVERY instance of that type',
            '    placed anywhere in the model',
          ],
        },
        formula: { label: 'Critical Warning', text: 'Element.SetParameterByName on a Type Parameter changes ALL instances of that type — always verify which kind of parameter you are writing to before a bulk run' },
      },
      {
        id: 's5', heading: 'Built-in Parameters vs. Shared & Project Parameters', level: 'h2',
        content: `Revit parameters also come from different sources, which affects how reliably you can reference them by name across different projects and templates.`,
        items: [
          '**Built-in Parameters** — hard-coded into Revit itself (e.g., "Level", "Comments", "Area", "Volume"); consistent names across virtually every project',
          '**Project Parameters** — added to a specific project via Manage → Project Parameters; names are only guaranteed to exist in that project file',
          '**Shared Parameters** — defined in a shared parameter file (.txt) and can be reused consistently across multiple projects and families; the standard approach for firm-wide custom data (e.g., "Fire Rating", "Room Data Sheet ID")',
          'The **Parameter.ParameterByName** node can be used to retrieve a Parameter object (rather than just its value) by name — useful when you need the Parameter object itself, for example to check whether it is read-only',
          'When building graphs meant to be reused across projects, prefer Built-in or well-documented Shared Parameters over project-specific ones that may not exist elsewhere',
        ],
      },
      {
        id: 's6', heading: 'Read-Only and Computed Parameters', level: 'h2',
        content: `Not every parameter can be written to, no matter how the script is structured. Some parameters are **computed by Revit itself** from geometry or other inputs, and are exposed as read-only.`,
        items: [
          '**Area** and **Volume** on rooms, spaces, and many families are calculated automatically from geometry — Dynamo (like the Revit UI) cannot write a new value directly into them',
          '**Perimeter** and similar geometric-derivative parameters behave the same way — they follow the geometry, not the other way around',
          'Attempting Element.SetParameterByName on a read-only/computed parameter typically raises a clear error rather than silently failing — read the Dynamo warning/error bubble carefully',
          'To change a computed value like Area, you must change the underlying geometry (e.g., move a room boundary) — the parameter value follows automatically',
          'Always sanity-check unfamiliar parameters with Element.Parameters or the Revit UI\'s "Modify" behaviour (greyed-out fields are read-only) before scripting a write to them',
        ],
        formula: { label: 'Rule', text: 'If a parameter is grey and un-editable in the Revit Properties palette, Dynamo cannot write to it either — it is computed, not stored' },
      },
    ],
    takeaways: [
      'Element.GetParameterValueByName reads a parameter value; Element.SetParameterByName writes one — both accept single elements or lists.',
      'Element.Parameters returns every parameter and value on an element at once — ideal for discovering exact parameter names during development.',
      'Instance parameters affect only the selected element; Type parameters affect every instance of that Family Type in the model.',
      'Parameters originate from Built-in (consistent across projects), Project (specific to one file), or Shared (reusable, firm-wide) sources.',
      'Parameter.ParameterByName retrieves the Parameter object itself, useful for checking properties like whether it is read-only.',
      'Computed parameters like Area, Volume, and Perimeter are read-only and cannot be set directly — they must be changed via the underlying geometry.',
    ],
    resource: { label: 'Revit Parameter Types Reference Guide', type: 'PDF' },
    quiz: { label: 'Working with Parameters Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-10', title: 'Placing & Modifying Revit Elements with Dynamo' },
    next: { id: 'dyn-12', title: 'Logic & Conditionals — If Statements & Filtering Elements' },
  },

  // ============================================================
  // LESSON DYN-12 — Logic & Conditionals
  // ============================================================
  {
    id: 'dyn-12', num: '12',
    title: 'Logic & Conditionals — If Statements & Filtering Elements',
    topic: 'Parameters & Logic', cat: 'intermediate', readTime: '9 min', free: false,
    desc: 'Add decision-making to your Dynamo graphs with comparison nodes, the If node, boolean logic, and List.FilterByBoolMask.',
    intro: `A script that only ever does the same thing to every element regardless of its condition is of limited use. Real automation needs to make decisions: only tag doors over a certain width, only modify walls on a specific level, only export rooms that belong to a given department. This lesson covers Dynamo's core logic toolkit — comparisons, the If node, boolean combinators, and the list-filtering nodes that turn "some elements" into "just the elements I actually want."`,
    sections: [
      {
        id: 's1', heading: 'Comparison Nodes — Building True/False Values', level: 'h2',
        content: `Logic in Dynamo starts with **comparison nodes** that take two values and output a single boolean (true or false) result.`,
        code: {
          label: 'Core Comparison Nodes',
          lines: [
            '>   (Greater Than)          → true if input A is larger than B',
            '<   (Less Than)             → true if input A is smaller than B',
            '>=  (Greater Than or Equal) → true if A is larger than or equal to B',
            '<=  (Less Than or Equal)    → true if A is smaller than or equal to B',
            '==  (Equal)                 → true if A and B are exactly equal',
            '!=  (Not Equal)             → true if A and B are NOT equal',
            '',
            'All of these accept lists as inputs and follow standard',
            'lacing rules — comparing two lists element-by-element',
            'produces a list of booleans, one per pair.',
          ],
        },
      },
      {
        id: 's2', heading: 'The If Node', level: 'h2',
        content: `The **If** node is Dynamo's fundamental conditional branch. It takes three inputs: a boolean **test** value, a **true** output value, and a **false** output value — and returns whichever one matches the test result.`,
        subsections: [
          {
            heading: 'If Node Structure',
            items: [
              '**test** — a boolean input, typically the output of a comparison node (e.g., Width > 900)',
              '**true** — the value or node output to return if the test evaluates to true',
              '**false** — the value or node output to return if the test evaluates to false',
              'If fed lists, the If node evaluates each item\'s test independently and returns the corresponding true/false branch value for that item',
              'Chain multiple If nodes together to build nested conditional logic equivalent to "if / else if / else" in traditional programming',
            ],
          },
        ],
        formula: { label: 'If Node Signature', text: 'If(test, true, false) → returns "true" value when test is true, otherwise returns "false" value' },
      },
      {
        id: 's3', heading: 'Combining Conditions — And / Or', level: 'h2',
        content: `Real filtering criteria often involve more than one condition at once. Dynamo provides **&&** (And) and **||** (Or) nodes to combine multiple boolean inputs into a single result.`,
        items: [
          '**&& (And)** — outputs true only if ALL boolean inputs are true (e.g., "Width > 900 AND Level == Level 2")',
          '**|| (Or)** — outputs true if AT LEAST ONE boolean input is true (e.g., "Category == Doors OR Category == Windows")',
          'Both nodes accept two or more boolean inputs and can be nested to build complex multi-condition logic',
          'Combine And/Or output directly into an If node\'s test input, or straight into List.FilterByBoolMask for filtering',
        ],
        formula: { label: 'Logic Reminder', text: 'And = both must be true | Or = either can be true — mixing them up is the most common logic bug in Dynamo graphs' },
      },
      {
        id: 's4', heading: 'Filtering Lists with List.FilterByBoolMask', level: 'h2',
        content: `While the If node picks between two values, **List.FilterByBoolMask** splits an entire list into two separate lists based on a parallel list of true/false values — this is the standard way to turn "all elements" into "just the ones matching my condition."`,
        code: {
          label: 'List.FilterByBoolMask',
          lines: [
            'list → the original list of items (e.g., all doors in the model)',
            'mask → a parallel list of booleans, same length as "list"',
            '       (e.g., the result of Width > 900 for each door)',
            '',
            'Outputs:',
            '  in  → items where the mask was TRUE  (doors wider than 900)',
            '  out → items where the mask was FALSE (doors 900 or narrower)',
            '',
            'Both outputs are returned simultaneously — no need to run',
            'the filter twice for the "kept" and "rejected" sets.',
          ],
        },
        formula: { label: 'Filtering Pattern', text: 'All elements → comparison node builds a boolean mask → List.FilterByBoolMask → the "in" output is your filtered result' },
      },
      {
        id: 's5', heading: 'Practical Filtering Example', level: 'h2',
        content: `A common real-world script: "select all doors, but only continue working with the ones on Level 2 whose width is greater than 900mm."`,
        items: [
          'Step 1: Collect all door elements (e.g., via a category/filter collection node)',
          'Step 2: Read the "Level" parameter and the "Width" type parameter for every door with Element.GetParameterValueByName',
          'Step 3: Build two boolean lists — Level == "Level 2" and Width > 900',
          'Step 4: Combine both boolean lists with && (And)',
          'Step 5: Feed the original door list and the combined boolean mask into List.FilterByBoolMask',
          'Step 6: Use the "in" output (the doors that passed both tests) as the input to whatever modification node comes next',
        ],
      },
      {
        id: 's6', heading: 'Debugging Conditionals with the Watch Node', level: 'h2',
        content: `Logic errors in Dynamo are usually invisible until you actually look at intermediate values — a graph that silently filters out everything (or nothing) gives no error message, it just produces an empty or unfiltered list. The **Watch** node is the standard tool for inspecting values at any point in the graph.`,
        items: [
          'Connect a Watch node to the output of any comparison, And/Or, or filter node to see the actual boolean values being produced',
          'Watch on a boolean mask list quickly reveals whether your logic is producing the true/false pattern you expect',
          'Watch on the two outputs of List.FilterByBoolMask ("in" and "out") confirms the split is happening the way you intended',
          'For nested lists, Watch preserves the nesting visually with indentation, making it easier to spot which level a value belongs to',
          'It is good practice to leave a few Watch nodes in place even after a script is finished, so future edits can be verified quickly',
        ],
        formula: { label: 'Debugging Habit', text: 'When a conditional graph gives an unexpected result, add a Watch node BEFORE reworking any logic — most "bugs" are visible the moment you look at the intermediate data' },
      },
    ],
    takeaways: [
      'Comparison nodes (>, <, ==, !=, >=, <=) take two inputs and output a boolean, following standard lacing rules across lists.',
      'The If node returns one of two values based on a boolean test input, and can be chained for nested if/else logic.',
      '&& (And) requires all conditions to be true; || (Or) requires at least one condition to be true — combine before filtering.',
      'List.FilterByBoolMask splits a list into "in" (true) and "out" (false) results using a parallel boolean mask list.',
      'A typical filter workflow: collect elements, read parameters, build boolean conditions, combine with And/Or, then filter with List.FilterByBoolMask.',
      'The Watch node is essential for debugging conditional logic — most unexpected filtering results are explained by inspecting intermediate boolean values.',
    ],
    resource: { label: 'Dynamo Logic & Filtering Reference', type: 'PDF' },
    quiz: { label: 'Logic & Conditionals Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-11', title: 'Working with Revit Parameters — Reading & Writing Data' },
    next: { id: 'dyn-13', title: 'Excel & Dynamo — Importing & Exporting Spreadsheet Data' },
  },

  // ============================================================
  // LESSON DYN-13 — Excel & Dynamo
  // ============================================================
  {
    id: 'dyn-13', num: '13',
    title: 'Excel & Dynamo — Importing & Exporting Spreadsheet Data',
    topic: 'Data Exchange', cat: 'intermediate', readTime: '10 min', free: false,
    desc: 'Round-trip Revit parameter data to Excel for bulk editing and back, using Dynamo\'s Excel and CSV import/export nodes.',
    intro: `Excel remains the universal language of construction data — consultants, clients, and cost estimators all understand a spreadsheet, and many workflows still start or end with one. Dynamo's Excel and CSV nodes let you export Revit data out for bulk review or editing, and reliably bring edited data back into the model. This lesson covers reading and writing Excel and CSV files, structuring lists of lists to match a spreadsheet's rows and columns, and the round-trip pattern for bulk parameter edits.`,
    sections: [
      {
        id: 's1', heading: 'Reading Data from Excel', level: 'h2',
        content: `**Excel.ReadFromFile** opens an existing .xlsx file and reads its contents into Dynamo as a list of lists — one sub-list per row, with each item in the row corresponding to a column.`,
        code: {
          label: 'Excel.ReadFromFile Inputs',
          lines: [
            'file       → file path to the .xlsx workbook',
            'sheetName  → the name of the worksheet/tab to read',
            'readAsStrings → optional; forces all values to be read',
            '                as text rather than auto-detected types',
            '',
            'Output: a list of lists, structured as',
            '  [ [RowA_Col1, RowA_Col2, RowA_Col3],',
            '    [RowB_Col1, RowB_Col2, RowB_Col3], ... ]',
          ],
        },
      },
      {
        id: 's2', heading: 'Writing Data to Excel', level: 'h2',
        content: `**Excel.WriteToFile** takes a list of lists structured the same way and writes it out to a specified worksheet, cell by cell.`,
        subsections: [
          {
            heading: 'Excel.WriteToFile Inputs',
            items: [
              '**file** — target file path (can be a new or existing workbook)',
              '**sheetName** — worksheet name to write to',
              '**startRow / startColumn** — the cell position to begin writing (0-indexed); commonly left at 0,0 to start at A1',
              '**data** — the list of lists to write, where the outer list represents rows and each inner list represents that row\'s column values',
              'Overwrite behaviour: writing to a sheet that already has data will overwrite the affected cells but does not automatically clear the whole sheet first',
            ],
          },
        ],
        formula: { label: 'Structure Rule', text: 'Outer list = rows | Inner list = columns within that row — get this transposed and your spreadsheet comes out sideways' },
      },
      {
        id: 's3', heading: 'CSV Alternatives — Data.ImportCSV and Data.ExportCSV', level: 'h2',
        content: `For simpler, lighter-weight data exchange — especially when Excel itself is not required, or when working with systems that only accept plain text — **Data.ImportCSV** and **Data.ExportCSV** provide the same list-of-lists round trip using comma-separated value files instead of .xlsx workbooks.`,
        items: [
          'Data.ImportCSV reads a .csv file into a list of lists, one sub-list per row, same as Excel.ReadFromFile',
          'Data.ExportCSV writes a list of lists out to a .csv file',
          'CSV files have no worksheet concept — one file corresponds to one flat table',
          'CSV avoids potential Excel version/formatting issues and opens instantly in almost any software, making it a good choice for simple data hand-offs to non-Revit teams',
          'Excel nodes are preferable when the target file needs formulas, multiple tabs, or formatting preserved; CSV nodes are preferable for pure raw data exchange',
        ],
      },
      {
        id: 's4', heading: 'Structuring Revit Data for Export', level: 'h2',
        content: `Before writing to Excel, Revit element data (usually flowing as separate parallel lists — one list of Element IDs, one of Names, one of Areas, etc.) must be assembled into the row-based list-of-lists structure Excel.WriteToFile expects.`,
        items: [
          'Use **List.Create** to combine parallel lists — one item from each list per row — into the correct nested structure',
          'A header row (column titles like "Room Name", "Room Number", "Area") should be created as its own list and combined with the data rows before writing, typically using List.Join or by prepending it with List.Create',
          'Double-check lacing when combining columns — a mismatch in list order or length here is the most common cause of "my data doesn\'t line up with the right rows" errors',
          'Consider including an unmodifiable reference column (e.g., Element ID) in every export — this makes it possible to reliably match rows back to the correct element on re-import',
        ],
        formula: { label: 'Export Checklist', text: 'Element ID column (for round-trip matching) + Header row + one row per element = a safe Excel export structure' },
      },
      {
        id: 's5', heading: 'The Round-Trip Pattern — Bulk Edit via Excel', level: 'h2',
        content: `One of the most valuable Dynamo + Excel workflows is the **round trip**: export Revit parameter data to Excel, let someone bulk-edit it in a spreadsheet (which is often faster and more familiar than editing schedules directly in Revit), then read the edited file back into Dynamo and write the changes back onto the original elements.`,
        code: {
          label: 'Round-Trip Workflow',
          lines: [
            'STEP 1 — EXPORT',
            '  Collect elements → read parameters → assemble with',
            '  Element ID column → Excel.WriteToFile → hand off .xlsx',
            '',
            'STEP 2 — EDIT (outside Dynamo)',
            '  Consultant/team edits values directly in Excel',
            '  (Element ID column must NOT be edited or reordered)',
            '',
            'STEP 3 — RE-IMPORT',
            '  Excel.ReadFromFile → match rows back to elements using',
            '  the Element ID column → Element.SetParameterByName',
            '  writes the edited values back onto the correct elements',
          ],
        },
        formula: { label: 'Critical Safeguard', text: 'Always re-match by a stable identifier (Element ID), never by row position — rows can be sorted or reordered in Excel between export and re-import' },
      },
      {
        id: 's6', heading: 'Common Pitfalls in Excel Round-Tripping', level: 'h2',
        content: `Excel round-tripping is powerful but has a handful of well-known failure modes worth checking for every time.`,
        items: [
          'Excel auto-formatting can silently convert values — e.g., a Mark value of "007" becomes "7", or a date-like string gets reformatted; use the readAsStrings option or format the column as Text in Excel to avoid this',
          'Blank cells read back from Excel may come through as null rather than an empty string — add a check before writing them back to a Revit parameter',
          'If someone deletes or inserts a row in the middle of the spreadsheet, index-based matching breaks — this is exactly why Element ID matching is required, not row order',
          'Locking or protecting the Element ID column in Excel (or clearly labelling it "DO NOT EDIT") prevents most accidental corruption of the round-trip key',
          'Always test the round-trip on a small subset of elements first before running it against an entire model\'s worth of data',
        ],
      },
    ],
    takeaways: [
      'Excel.ReadFromFile and Excel.WriteToFile move data between Dynamo and .xlsx workbooks as a list of lists — rows as the outer list, columns as inner lists.',
      'Data.ImportCSV and Data.ExportCSV provide the same functionality for lightweight .csv files without worksheet concepts or formatting.',
      'Parallel parameter lists must be assembled with List.Create into the correct row-based structure before writing to Excel.',
      'The round-trip pattern exports data with an Element ID column, allows external editing, then re-imports and writes changes back using Element.SetParameterByName.',
      'Always match re-imported rows back to elements using a stable Element ID, never by row position, since rows can be reordered in Excel.',
      'Watch for Excel auto-formatting issues (leading zeros, dates) and test round-trip scripts on a small subset before running them at full scale.',
    ],
    resource: { label: 'Dynamo Excel Round-Trip Workflow Guide', type: 'PDF' },
    quiz: { label: 'Excel & Dynamo Data Exchange Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-12', title: 'Logic & Conditionals — If Statements & Filtering Elements' },
    next: { id: 'dyn-14', title: 'Automating Room & Space Data with Dynamo' },
  },

  // ============================================================
  // LESSON DYN-14 — Automating Room & Space Data
  // ============================================================
  {
    id: 'dyn-14', num: '14',
    title: 'Automating Room & Space Data with Dynamo',
    topic: 'Data Exchange', cat: 'intermediate', readTime: '9 min', free: false,
    desc: 'Use Dynamo to read, filter, and bulk-edit Revit Room data — names, numbers, departments, and boundaries — for scheduling and QA automation.',
    intro: `Rooms carry some of the densest, most frequently-audited data in a Revit model — names, numbers, areas, departments, occupancy — and that data is exactly the kind of thing that drifts out of sync as a project evolves across dozens of design iterations. Dynamo is extremely well suited to automating room data QA, bulk edits, and department-based reporting. This lesson covers accessing Room elements and their boundaries, working with room parameters, and filtering rooms for scheduling and tagging automation.`,
    sections: [
      {
        id: 's1', heading: 'Accessing Rooms in Dynamo', level: 'h2',
        content: `Rooms are a distinct Revit category with their own set of Dynamo nodes, separate from generic model elements. The most direct route to a project's rooms is a category-based collector (e.g., "All Elements of Category" set to the Rooms category), which returns every placed Room element as a list.`,
        items: [
          'Unplaced rooms (rooms that exist in the schedule but have not been placed in a plan) are still returned by category collectors — filter these out early if your workflow assumes placed geometry',
          'Once collected, a Room element behaves like any other element for reading parameters — the same Element.GetParameterValueByName / SetParameterByName nodes apply',
          'Room-specific geometry nodes (Boundaries, Perimeter) are additive on top of the standard element toolkit, not a replacement for it',
        ],
      },
      {
        id: 's2', heading: 'Room Boundaries', level: 'h2',
        content: `**Room.Boundaries** (sometimes exposed as "Rooms in Revit" package nodes depending on the package installed) returns the boundary curves that define a room's extent — the same boundary Revit itself uses to calculate area.`,
        code: {
          label: 'Room.Boundaries Output',
          lines: [
            'Input:  a Room element',
            'Output: a list of curve loops (each loop is itself a list',
            '        of curves) representing the room\'s boundary,',
            '        including any boundary segments created by',
            '        room-bounding walls, room separation lines, etc.',
            '',
            'Multiple loops occur when a room has an internal void',
            '(e.g., a room wrapping around a central core).',
          ],
        },
        formula: { label: 'Use Case', text: 'Room boundaries feed directly into geometry generation — e.g., converting a room outline into a Dynamo polygon for floor pattern generation or area validation' },
      },
      {
        id: 's3', heading: 'Core Room Parameters', level: 'h2',
        content: `Rooms carry a standard set of built-in parameters that most scheduling and QA scripts revolve around.`,
        subsections: [
          {
            heading: 'Commonly Used Room Parameters',
            items: [
              '**Name** — the room\'s descriptive name (e.g., "Open Office", "Meeting Room 3")',
              '**Number** — the room\'s unique identifier/number within the project',
              '**Area** — computed automatically from the room boundary; read-only, cannot be set directly (see Lesson 11)',
              '**Department** — a common shared/project parameter used to group rooms for reporting (e.g., "Finance", "IT", "Facilities")',
              '**Level** — the Level the room is hosted on',
              '**Room.Perimeter** — a dedicated node (or parameter read) returning the total boundary length of the room, useful for skirting/finish quantity takeoffs',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Bulk-Editing Room Data', level: 'h2',
        content: `A very common Dynamo automation is a bulk pass over every room in a model to standardize or correct its data — for example, prefixing room numbers by level, or populating a Department parameter based on a lookup list.`,
        items: [
          'Collect all rooms → read Level parameter → use it to generate a level-prefixed Number (e.g., "L2-101") → write back with Element.SetParameterByName',
          'Cross-reference an Excel department lookup (Lesson 13\'s round-trip pattern) against Room Number to populate the Department parameter model-wide in one run',
          'Use comparison and filtering nodes (Lesson 12) to catch QA issues — e.g., flag any room where Area == 0 (a sign of an unbounded or incorrectly drawn room)',
          'Because Area is read-only, "fixing" a room with zero or wrong area means fixing its boundary (missing room-bounding walls or a missing room separation line), not writing a new Area value',
        ],
        formula: { label: 'QA Pattern', text: 'Collect rooms → read Area → filter where Area == 0 or Area < minimum threshold → output the flagged room list for manual review' },
      },
      {
        id: 's5', heading: 'Filtering Rooms by Department or Level', level: 'h2',
        content: `Department- and level-based filtering is the backbone of most room reporting automation — generating a schedule, tag set, or export scoped to just one part of the building.`,
        items: [
          'Read the Department parameter across all rooms, build a boolean mask with == against the target department string, then apply List.FilterByBoolMask',
          'Combine Department and Level filters with && (And) to scope to, e.g., "IT department rooms on Level 3 only"',
          'Filtered room lists can feed directly into tagging automation, Excel export (Lesson 13), or further geometry operations using Room.Boundaries',
          'For very large multi-building or multi-phase projects, filtering by Level first (a cheap, fast comparison) before filtering by Department can make graphs noticeably faster to evaluate',
        ],
      },
      {
        id: 's6', heading: 'Tagging and Scheduling Automation Basics', level: 'h2',
        content: `While detailed tag placement and full schedule generation are broader topics of their own, the basic Dynamo pattern for room-driven documentation automation follows the same collect → filter → act structure used throughout this lesson.`,
        items: [
          'Collect and filter the target room set (e.g., all placed rooms on a given level)',
          'For tagging, feed the filtered rooms and their locations into the appropriate tag-placement node so every room in scope receives a tag without manual placement',
          'For scheduling-adjacent automation, export the filtered room set\'s parameters to Excel (Lesson 13) to generate departmental area reports outside of Revit\'s native schedule views',
          'Re-running the same graph after design changes re-collects the current room set automatically — this is the core value proposition over a one-time manual tagging pass',
        ],
        formula: { label: 'Why Automate This', text: 'A native Revit schedule already reports room data — Dynamo\'s advantage is bulk EDITING and cross-referencing external data (like Excel department lookups), not just reporting' },
      },
    ],
    takeaways: [
      'Rooms are collected like any other category, but carry room-specific nodes such as Room.Boundaries and Room.Perimeter on top of standard element tools.',
      'Room.Boundaries returns the actual boundary curve loops Revit uses to calculate Area, including multiple loops for rooms with internal voids.',
      'Core room parameters include Name, Number, Area (read-only), Department, and Level — all accessible via the standard Get/SetParameterByName nodes except Area.',
      'A room with Area == 0 indicates a boundary problem (missing room-bounding elements), not something fixable by writing directly to the Area parameter.',
      'Filtering rooms by Department and Level, combined with And/Or logic, is the standard pattern for scoping room-driven reporting or tagging automation.',
      'Dynamo\'s advantage over native Revit schedules is bulk editing and cross-referencing external data sources like Excel department lookups, not just reporting values that already exist.',
    ],
    resource: { label: 'Room & Space Data Automation Guide', type: 'PDF' },
    quiz: { label: 'Room & Space Data Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-13', title: 'Excel & Dynamo — Importing & Exporting Spreadsheet Data' },
    next: { id: 'dyn-15', title: 'Creating & Placing Families Automatically' },
  },

  // ============================================================
  // LESSON DYN-15 — Creating & Placing Families Automatically
  // ============================================================
  {
    id: 'dyn-15', num: '15',
    title: 'Creating & Placing Families Automatically',
    topic: 'Families & Sheets', cat: 'intermediate', readTime: '10 min', free: false,
    desc: 'Automate family instance placement from Dynamo-generated geometry, select the correct Family Type, and set instance parameters at the moment of placement.',
    intro: `Placing furniture layouts, structural connections, site fixtures, or parking bay markers one at a time in Revit is exactly the kind of repetitive task that Dynamo turns from an afternoon of clicking into a script that runs in seconds and can be re-run whenever the layout changes. This lesson builds directly on the placement basics from Lesson 10, adding the family type selection, geometry-driven point generation, and instance parameter assignment needed for real production placement scripts.`,
    sections: [
      {
        id: 's1', heading: 'Selecting the Right Family Type', level: 'h2',
        content: `Before placing anything, a Dynamo graph needs a reference to the specific **Family Type** to place — not just the family, but the exact type/size variant (e.g., not just "Desk" but "Desk - 1200x600mm").`,
        subsections: [
          {
            heading: 'Getting a Family Type Reference',
            items: [
              '**Family Types dropdown node** — the simplest approach; search-select a loaded family type directly from a dropdown UI in the graph',
              '**FamilyType.ByName** — retrieves a Family Type object by matching its family name and type name as strings; useful when the type name is being generated or looked up dynamically (e.g., from an Excel row) rather than picked manually',
              '**Family.Types** — given a Family, returns all of its loaded Type variants as a list; useful when a script needs to work across every size variant of one family',
              'The family must already be loaded into the project (or loaded via a family-loading node) before any of these can return a valid type to place',
            ],
          },
        ],
      },
      {
        id: 's2', heading: 'Generating Placement Points from Geometry', level: 'h2',
        content: `The points used for placement rarely come from nowhere — they are usually generated by other Dynamo geometry operations, which is where the list and geometry skills from earlier lessons combine with family placement.`,
        items: [
          'Points along a curve at even spacing — e.g., Curve.PointAtParameter with a list of evenly incremented parameter values, for placing bollards or lights along a path',
          'Points at grid intersections — e.g., Point.ByCoordinates fed by two coordinate lists with Cross Product lacing (Lesson 9), for placing parking bays or a regular column/furniture grid',
          'Points derived from Room.Boundaries (Lesson 14) — e.g., placing one instance per room at its centroid for a room-tag-like marker family',
          'Points offset from an existing curve or wall face — useful for placing wall-mounted fixtures at a consistent standoff distance',
        ],
        formula: { label: 'Pattern', text: 'Dynamo geometry generates the points → FamilyType.ByName / Family Types dropdown supplies the type → FamilyInstance.ByPoint places the instances' },
      },
      {
        id: 's3', heading: 'Placing at Points and on Curves', level: 'h2',
        content: `**FamilyInstance.ByPoint** remains the primary placement node (introduced in Lesson 10), taking the family type and the generated point list together — with lacing (Lesson 9) controlling how a type list and a point list combine if both are variable.`,
        code: {
          label: 'Placement with Variable Types',
          lines: [
            'If every point uses the SAME family type:',
            '  → single FamilyType value + list of points',
            '  → default lacing places one instance per point,',
            '    all of the same type',
            '',
            'If different points need DIFFERENT types',
            '(e.g., alternating chair types along a row):',
            '  → list of FamilyType values (same length as points)',
            '  → Shortest or matching-index lacing pairs each point',
            '    with its corresponding type',
          ],
        },
      },
      {
        id: 's4', heading: 'Setting Instance Parameters at Placement Time', level: 'h2',
        content: `A placement script rarely stops at just creating the geometry — most real workflows also need to set instance parameters (Comments, Mark, an identifying ID, a rotation-driven property) at the same time the instance is created, using the elements returned by FamilyInstance.ByPoint as the input to Element.SetParameterByName (Lesson 11).`,
        items: [
          'FamilyInstance.ByPoint returns the newly created Element objects — feed this list directly into Element.SetParameterByName without needing a separate selection step',
          'Common placement-time parameter writes: a sequential Mark number, a Comments tag identifying the automation run, or a Level/Zone identifier derived from the placement geometry',
          'If placement data originated from an Excel round-trip (Lesson 13), each row\'s extra columns (beyond X/Y coordinates) can be written directly onto the corresponding new instance',
          'Because Dynamo commits the whole run in one transaction (Lesson 10), placement and parameter-setting happen together and can be undone together with a single Ctrl+Z in Revit',
        ],
        formula: { label: 'Combined Pattern', text: 'FamilyInstance.ByPoint output → directly into Element.SetParameterByName input — no re-selection needed' },
      },
      {
        id: 's5', heading: 'Rotation and Orientation at Placement', level: 'h2',
        content: `Many families need a specific rotation to be meaningful once placed — a chair facing a table, a light fixture aligned to a corridor, a parking bay aligned to a driving aisle.`,
        items: [
          'Some placement nodes accept a direction vector or rotation angle input alongside the point, aligning the instance as it is created',
          'A common technique: derive the rotation from the geometry itself (e.g., the tangent direction of the curve the point was generated from) rather than a fixed hard-coded angle',
          'If a placement node does not expose rotation directly, the instance can be rotated immediately afterward using an Element-rotation node with the same list of newly created instances',
          'Test rotation logic on a small handful of points first — a systematic 90° rotation error is far easier to spot and fix before it has been applied to 200 placed instances',
        ],
      },
      {
        id: 's6', heading: 'Validating a Placement Script Before Full Runs', level: 'h2',
        content: `Because placement graphs create real, persistent Revit elements the moment they run, validating on a small subset before a full-scale run is standard practice.`,
        items: [
          'Use List.GetItemAtIndex or a short sub-list (e.g., the first 5 points) while developing the graph, switching to the full point list only once the logic is confirmed',
          'Keep the graph in Manual run mode (Lesson 10) throughout development so nothing is placed until you deliberately click Run',
          'Use Watch nodes on the point list, the family type reference, and the parameter values before they reach the placement node',
          'Once validated, running against the full list is simply a matter of removing the sub-list truncation — the rest of the graph logic does not need to change',
        ],
        formula: { label: 'Development Discipline', text: 'Small test batch first, full run second — never run an untested placement script against the entire model' },
      },
    ],
    takeaways: [
      'A specific Family Type reference (not just the family) is required before placement — via a Family Types dropdown, FamilyType.ByName, or Family.Types.',
      'Placement points are typically generated from other Dynamo geometry: curve subdivision, coordinate grids with Cross Product lacing, or room centroids.',
      'FamilyInstance.ByPoint can place a single repeated type across all points, or pair a list of varying types with points using matching lacing.',
      'The elements returned by FamilyInstance.ByPoint can be fed directly into Element.SetParameterByName to set instance data at the moment of creation.',
      'Rotation is often best derived from the source geometry (e.g., curve tangent direction) rather than hard-coded, and should be tested on a small subset first.',
      'Always validate a placement script against a small sub-list of points before running it against the full dataset, since placement creates real, persistent elements immediately.',
    ],
    resource: { label: 'Automated Family Placement Workflow Guide', type: 'PDF' },
    quiz: { label: 'Creating & Placing Families Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-14', title: 'Automating Room & Space Data with Dynamo' },
    next: { id: 'dyn-16', title: 'Generating Views & Sheets with Dynamo' },
  },

  // ============================================================
  // LESSON DYN-16 — Generating Views & Sheets
  // ============================================================
  {
    id: 'dyn-16', num: '16',
    title: 'Generating Views & Sheets with Dynamo',
    topic: 'Families & Sheets', cat: 'intermediate', readTime: '11 min', free: false,
    desc: 'Automate the creation of views and sheets in Dynamo, including titleblocks and Excel-driven sheet lists, to eliminate repetitive documentation setup.',
    intro: `Setting up dozens of sheets with the correct titleblock, view placement, and numbering is one of the most tedious, purely mechanical tasks in any Revit project — and one of the easiest to get wrong by hand, with duplicate sheet numbers or inconsistent naming. Dynamo can generate an entire sheet set from a structured list (often driven straight from an Excel sheet register), placing views automatically and applying consistent settings across every sheet. This lesson closes out the Lists & Placement through Families & Sheets arc by tying views, sheets, titleblocks, and external data together.`,
    sections: [
      {
        id: 's1', heading: 'Creating Views Programmatically', level: 'h2',
        content: `Before a sheet can host a view, the view itself may need to be created (or an existing view referenced). **View.ByNameCropBox** (and related view-creation nodes in the Revit package) create new views with a specified name and an optional crop region, giving Dynamo the same ability a user has when manually creating a new plan or section view.`,
        items: [
          'View.ByNameCropBox takes a view name and a crop box (bounding geometry) to define both what the view is called and what portion of the model it displays',
          'Views created this way are full Revit View elements — they can subsequently be referenced by Element.SetParameterByName to adjust view-specific parameters (e.g., View Template, Detail Level, Scale)',
          'For repetitive setups — one plan view per level, for example — generate the crop boxes and names as parallel lists and place all views in a single run',
        ],
      },
      {
        id: 's2', heading: 'Creating Sheets and Assigning Titleblocks', level: 'h2',
        content: `**Sheet.ByNameNumberViews** (the standard sheet-creation node, naming varies slightly by package version) creates a new Sheet element, assigns it a name and number, applies a titleblock family, and can place one or more views onto it in the same operation.`,
        code: {
          label: 'Sheet.ByNameNumberViews Inputs',
          lines: [
            'sheetName    → the sheet\'s title (e.g., "Level 2 Floor Plan")',
            'sheetNumber  → the sheet\'s unique number (e.g., "A-102")',
            'titleblock   → a Family Type reference for the titleblock',
            '               family (via Family Types dropdown or',
            '               FamilyType.ByName, same as Lesson 15)',
            'views        → a view or list of views to place on the sheet',
            '',
            'Feeding parallel lists (names, numbers, views) generates',
            'an entire sheet set in one run rather than one sheet at a time.',
          ],
        },
        formula: { label: 'Node Family Continuity', text: 'Titleblocks are just another Family Type — the same FamilyType.ByName pattern from Lesson 15 applies directly here' },
      },
      {
        id: 's3', heading: 'Driving Sheet Creation from an Excel Sheet List', level: 'h2',
        content: `The most valuable version of this automation reads the sheet register from an Excel file (Lesson 13's round-trip pattern) rather than hard-coding sheet names and numbers inside the graph — meaning the actual sheet list can be maintained by a project lead in a familiar spreadsheet, not inside Dynamo.`,
        code: {
          label: 'Excel-Driven Sheet Creation Workflow',
          lines: [
            'STEP 1 — Excel.ReadFromFile reads the sheet register',
            '         (columns: Sheet Number, Sheet Name, Titleblock,',
            '          View to Place, Discipline)',
            '',
            'STEP 2 — Split the resulting list of lists into separate',
            '         parallel lists per column (List.GetItemAtIndex',
            '         at each column index, across all rows)',
            '',
            'STEP 3 — Look up each named Titleblock and View by name',
            '         using FamilyType.ByName and a Views-by-name lookup',
            '',
            'STEP 4 — Feed all parallel lists into Sheet.ByNameNumberViews',
            '         to generate every sheet from the register in one run',
          ],
        },
        formula: { label: 'Why This Matters', text: 'A sheet register maintained in Excel is editable by anyone on the team — re-running the graph regenerates missing sheets without a Dynamo user needing to manually recreate each one' },
      },
      {
        id: 's4', heading: 'Avoiding Duplicate Sheets on Re-Run', level: 'h2',
        content: `Because a sheet register-driven graph is meant to be re-run as the project evolves (new sheets added to the register over time), a naive graph that always creates new sheets will error or duplicate on the second run once sheet numbers already exist.`,
        items: [
          'Collect existing sheets first (category collector, same pattern as Lesson 14\'s room collection) and read their Sheet Number parameter',
          'Filter the Excel-sourced sheet list (Lesson 12\'s filtering pattern) to exclude any sheet number that already exists in the model',
          'Only the "new" filtered subset is passed into Sheet.ByNameNumberViews on each run',
          'This turns the graph into a safe, repeatable "sync sheets from register" tool rather than a one-time script',
        ],
      },
      {
        id: 's5', heading: 'Controlling View Content on Generated Sheets', level: 'h2',
        content: `Once views are placed on sheets, a script can also standardize what each view displays — particularly useful when the same discipline filter or visibility rule needs to be applied consistently across a large batch of newly generated views.`,
        items: [
          '**View.SetCategoryVisibility** turns a specific category on or off within a given view, letting a script enforce a consistent visibility standard (e.g., hide the "Furniture" category on all structural views) across every view it just created',
          'Apply this immediately after view creation, before the view is placed on its sheet, using the same list of newly created View elements as the input',
          'Combine with a lookup table (Excel or otherwise) mapping Discipline to a set of categories to hide, so different disciplines automatically get different visibility settings from the same graph run',
        ],
        formula: { label: 'Consistency Benefit', text: 'Scripted visibility settings applied identically to 40 generated views eliminate the manual inconsistency that comes from 40 separate manual view setups' },
      },
      {
        id: 's6', heading: 'Putting the Full Workflow Together', level: 'h2',
        content: `A production-grade sheet generation graph typically chains together nearly every skill from this lesson block: Excel import (Lesson 13) to drive the process, filtering (Lesson 12) to avoid duplicates, parameter reads/writes (Lesson 11) to check existing sheets, family type lookups (Lesson 15) for titleblocks, and finally the view/sheet creation nodes from this lesson.`,
        items: [
          'Read the sheet register from Excel',
          'Read existing sheet numbers from the model and filter the register down to only the new entries',
          'Look up titleblock Family Types and any views to be placed',
          'Create new views (View.ByNameCropBox) where the register calls for a new view rather than an existing one',
          'Create the sheets (Sheet.ByNameNumberViews), placing the specified views and titleblock',
          'Optionally standardize visibility on the newly created views with View.SetCategoryVisibility',
          'Run in Manual mode, validate on a small subset first (Lesson 15\'s discipline), then run against the full register',
        ],
      },
    ],
    takeaways: [
      'View.ByNameCropBox creates new Revit views programmatically with a specified name and crop region, ready to be placed on sheets.',
      'Sheet.ByNameNumberViews creates a sheet with a name, number, titleblock Family Type, and one or more views in a single operation.',
      'Driving sheet creation from an Excel sheet register lets a project lead maintain the sheet list in a familiar spreadsheet rather than inside Dynamo.',
      'Filtering out sheet numbers that already exist in the model before creating new ones turns a one-time script into a safe, repeatable sync tool.',
      'View.SetCategoryVisibility lets a script apply consistent category visibility across every newly generated view in one run.',
      'A full sheet-generation graph typically combines Excel import, parameter filtering, family type lookups, and view/sheet creation into one repeatable workflow.',
    ],
    resource: { label: 'Automated Sheet Generation Workflow Guide', type: 'PDF' },
    quiz: { label: 'Generating Views & Sheets Quiz', questions: 10, time: '5 min' },
    prev: { id: 'dyn-15', title: 'Creating & Placing Families Automatically' },
    next: { id: 'dyn-17', title: 'Custom Nodes — Building Reusable Dynamo Components' },
  },

];
