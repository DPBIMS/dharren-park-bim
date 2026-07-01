// ============================================================
// DYNAMO QUIZZES DATA — dyn-1 through dyn-8
// Merge these entries into your lib/dynamoQuizzesData.js array
// ============================================================

export const dynamoQuizzes_1_8 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-1: What is Dynamo & Where it Fits in the BIM Workflow
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-1',
    title: 'What is Dynamo',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What type of programming paradigm does Dynamo use as its primary interface?',
        options: ['Text-based scripting only', 'Visual programming (nodes connected by wires)', 'Command-line only', 'Spreadsheet formulas'],
        answer: 'Visual programming (nodes connected by wires)'
      },
      {
        type: 'mcq',
        question: 'Which version of Dynamo can read and write live Revit model data?',
        options: ['Dynamo Sandbox only', 'Dynamo for Revit', 'Dynamo Core exclusively', 'None — Dynamo cannot access Revit data'],
        answer: 'Dynamo for Revit'
      },
      {
        type: 'truefalse',
        question: 'Dynamo is intended to replace Revit entirely for BIM authoring.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Who created Dynamo while working at Autodesk?',
        options: ['Ian Keough', 'Phil Bernstein', 'Tony Robbins', 'Jim Balsillie'],
        answer: 'Ian Keough'
      },
      {
        type: 'mcq',
        question: 'Which of these is NOT one of the broad categories of Dynamo capability described in the lesson?',
        options: ['Automation', 'Geometry Generation', 'Structural Load Certification', 'Data Interoperability'],
        answer: 'Structural Load Certification'
      },
      {
        type: 'truefalse',
        question: 'Dynamo is most powerful in the hands of someone who already understands Revit\'s elements, parameters, and families deeply.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'Dynamo graphs are visually built from nodes connected by ___.',
        answer: 'wires'
      },
      {
        type: 'mcq',
        question: 'What lets advanced Dynamo users type expressions directly using DesignScript on the canvas?',
        options: ['Watch nodes', 'Code Block nodes', 'The Node Library search bar', 'The Run button'],
        answer: 'Code Block nodes'
      },
      {
        type: 'mcq',
        question: 'What best describes the relationship between Dynamo and Revit?',
        options: [
          'Dynamo automates, generates, and queries the same BIM model that Revit authors',
          'Dynamo is a separate BIM authoring tool unrelated to Revit',
          'Dynamo only works with AutoCAD files',
          'Dynamo replaces the need to learn Revit'
        ],
        answer: 'Dynamo automates, generates, and queries the same BIM model that Revit authors'
      },
      {
        type: 'truefalse',
        question: 'Dynamo graphs are saved using the .dyn file format.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-2: Installing Dynamo & Understanding the Dynamo-Revit Connection
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-2',
    title: 'Installing Dynamo & the Dynamo-Revit Connection',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Since which Revit version has Dynamo for Revit been included with every standard installation?',
        options: ['Revit 2010', 'Revit 2016', 'Revit 2022', 'It has never been included by default'],
        answer: 'Revit 2016'
      },
      {
        type: 'mcq',
        question: 'Where do you find Dynamo inside Revit?',
        options: [
          'Insert tab → External Tools',
          'Manage tab → Visual Programming panel → Dynamo',
          'View tab → Dynamo Panel',
          'File menu → Add-ins'
        ],
        answer: 'Manage tab → Visual Programming panel → Dynamo'
      },
      {
        type: 'truefalse',
        question: 'The standalone Dynamo Sandbox requires Revit to be installed on the same machine.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What happens to nodes under the "Revit" category in the Node Library when working in standalone Dynamo Sandbox?',
        options: [
          'They work exactly as they do in Dynamo for Revit',
          'They will not function, since there is no Revit document to connect to',
          'They automatically convert to geometry nodes',
          'They open a new Revit session automatically'
        ],
        answer: 'They will not function, since there is no Revit document to connect to'
      },
      {
        type: 'fillblank',
        question: 'A Dynamo for Revit graph always runs against whichever Revit document ___ it, not just any open document.',
        answer: 'launched'
      },
      {
        type: 'mcq',
        question: 'What tool lets you run a saved .dyn file with a single click without opening the full graph editor?',
        options: ['Dynamo Player', 'Dynamo Sandbox', 'Code Block Editor', 'The Watch node'],
        answer: 'Dynamo Player'
      },
      {
        type: 'truefalse',
        question: 'Each release of Revit ships with a specific version of Dynamo already built in.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Why might a .dyn file show "could not be loaded" warnings when opened in a different Revit/Dynamo version?',
        options: [
          'Graphs built with newer nodes may not be recognized by an older Dynamo version',
          '.dyn files can only ever be opened once',
          'Dynamo files expire after 30 days',
          'This warning is unrelated to version differences'
        ],
        answer: 'Graphs built with newer nodes may not be recognized by an older Dynamo version'
      },
      {
        type: 'mcq',
        question: 'What should you do before running an untested graph that modifies elements in Revit?',
        options: [
          'Nothing extra is needed',
          'Save your Revit model first',
          'Uninstall Dynamo Sandbox',
          'Close all other Revit projects on the network'
        ],
        answer: 'Save your Revit model first'
      },
      {
        type: 'truefalse',
        question: 'Dynamo shares the same process and memory as the open Revit session when launched through the Manage tab.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-3: The Dynamo Interface — Canvas, Node Library & the Workspace
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-3',
    title: 'The Dynamo Interface',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Where are a node\'s input ports located?',
        options: ['On the left side', 'On the right side', 'On the top', 'On the bottom'],
        answer: 'On the left side'
      },
      {
        type: 'mcq',
        question: 'What is the searchable catalogue of all available nodes called?',
        options: ['The Watch panel', 'The Node Library', 'The Run Settings menu', 'The Background Preview'],
        answer: 'The Node Library'
      },
      {
        type: 'truefalse',
        question: 'A single output port can feed multiple input ports across different nodes.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'How many wires can a single input port accept at one time?',
        options: ['Unlimited', 'Only one — a new wire replaces the old one', 'Exactly two', 'None, inputs cannot be wired'],
        answer: 'Only one — a new wire replaces the old one'
      },
      {
        type: 'mcq',
        question: 'Which node is used to inspect the live value flowing along any wire in a graph?',
        options: ['Code Block', 'Watch', 'Categories', 'Number Slider'],
        answer: 'Watch'
      },
      {
        type: 'fillblank',
        question: 'A ___ Block node lets you type expressions directly onto the canvas using DesignScript.',
        answer: 'Code'
      },
      {
        type: 'truefalse',
        question: 'Typing a variable name with no value (e.g., "x;") in a Code Block creates an input port named x.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What can you use to visually organize related nodes with a labelled box on the canvas?',
        options: ['A Group', 'A Watch node', 'The Run button', 'A Category node'],
        answer: 'A Group'
      },
      {
        type: 'mcq',
        question: 'What does a grey/dashed input port typically indicate?',
        options: [
          'The input is broken and cannot be used',
          'It is an optional input with a default value if left unconnected',
          'The node has crashed',
          'The wire is deleted automatically'
        ],
        answer: 'It is an optional input with a default value if left unconnected'
      },
      {
        type: 'truefalse',
        question: 'For lists, the Watch node expands into a readable tree showing each list index and its value.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-4: Your First Graph — Connecting Nodes & Understanding Data Flow
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-4',
    title: 'Your First Graph & Data Flow',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'In Dynamo\'s dataflow model, what determines a node\'s execution order?',
        options: [
          'Its visual position on the canvas',
          'Its wiring/dependencies on other nodes',
          'Alphabetical order of node names',
          'The order nodes were created in'
        ],
        answer: 'Its wiring/dependencies on other nodes'
      },
      {
        type: 'truefalse',
        question: 'Moving a node visually on the canvas changes its execution order.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'In Automatic run mode, when does a graph re-execute?',
        options: [
          'Only when the Run button is clicked',
          'Immediately every time you change a value or connection',
          'Only once per Revit session',
          'Never — Automatic mode disables execution'
        ],
        answer: 'Immediately every time you change a value or connection'
      },
      {
        type: 'mcq',
        question: 'Which run mode is recommended for graphs that modify Revit elements?',
        options: ['Automatic', 'Manual', 'Neither — always use Dynamo Player', 'Preview-only mode'],
        answer: 'Manual'
      },
      {
        type: 'truefalse',
        question: 'An unconnected required input on a node will always cause Dynamo to crash entirely.',
        answer: false
      },
      {
        type: 'fillblank',
        question: 'Dynamo graphs are saved as ___ files, a JSON-based format storing nodes, positions, settings, and wiring.',
        answer: '.dyn'
      },
      {
        type: 'mcq',
        question: 'What can you double-click on a node to do?',
        options: ['Delete it permanently', 'Rename it via its title', 'Convert it to a Code Block', 'Disconnect all its wires'],
        answer: 'Rename it via its title'
      },
      {
        type: 'mcq',
        question: 'What is a recommended practice while building and debugging a graph?',
        options: [
          'Avoid using Watch nodes to keep the canvas clean',
          'Add Watch nodes liberally to confirm intermediate results',
          'Never rename nodes',
          'Always leave the graph in Automatic mode when writing to Revit'
        ],
        answer: 'Add Watch nodes liberally to confirm intermediate results'
      },
      {
        type: 'truefalse',
        question: 'A .dyn file opened on a machine missing a required package may show missing or unresolved nodes.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What can be added to a canvas to visually explain a section of a graph, aside from renaming nodes?',
        options: ['A Note', 'A new Revit project', 'A parameter schedule', 'A sheet set'],
        answer: 'A Note'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-5: Data Types in Action
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-5',
    title: 'Data Types in Dynamo',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which of these is NOT one of the core data types described in the lesson?',
        options: ['Number', 'String', 'Boolean', 'Currency'],
        answer: 'Currency'
      },
      {
        type: 'truefalse',
        question: 'A Boolean value in Dynamo can be true, false, or null by default.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'How must strings be written inside a Code Block?',
        options: ['In single quotes only', 'Wrapped in double quotation marks', 'With no punctuation at all', 'In all capital letters'],
        answer: 'Wrapped in double quotation marks'
      },
      {
        type: 'mcq',
        question: 'What node joins multiple strings into one, according to the lesson?',
        options: ['String.Concat', 'Point.ByCoordinates', 'List.FilterByBoolMask', 'Element.SetParameterByName'],
        answer: 'String.Concat'
      },
      {
        type: 'truefalse',
        question: 'A string like "5" is automatically treated as the number 5 in a math operation without conversion.',
        answer: false
      },
      {
        type: 'fillblank',
        question: 'Comparison nodes such as >, <, ==, >=, and <= all output a ___ value.',
        answer: 'Boolean'
      },
      {
        type: 'mcq',
        question: 'What does the If node use to decide which output to return?',
        options: ['A String input', 'A Boolean test input', 'A List input', 'A geometry input'],
        answer: 'A Boolean test input'
      },
      {
        type: 'mcq',
        question: 'What does a small warning triangle on a node usually indicate?',
        options: [
          'The graph has been saved successfully',
          'A type mismatch or a missing required input',
          'The node has been deleted',
          'The Revit document has closed'
        ],
        answer: 'A type mismatch or a missing required input'
      },
      {
        type: 'truefalse',
        question: 'Dynamo will attempt reasonable automatic conversions between types where the conversion is unambiguous.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'In the lesson\'s exercise, what conversion is needed to correctly combine a number with descriptive text?',
        options: ['.ToString()', '.ToNumber()', '.ToBoolean()', 'No conversion is ever needed'],
        answer: '.ToString()'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-6: Working with Geometry — Points, Lines & Curves in Dynamo
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-6',
    title: 'Geometry in Dynamo',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the most basic geometric object in Dynamo?',
        options: ['Surface', 'Point', 'Solid', 'PolyCurve'],
        answer: 'Point'
      },
      {
        type: 'mcq',
        question: 'Which node creates a straight line between two points?',
        options: ['Line.ByStartPointEndPoint', 'Point.ByCoordinates', 'Circle.ByCenterPointRadius', 'Surface.ByLoft'],
        answer: 'Line.ByStartPointEndPoint'
      },
      {
        type: 'truefalse',
        question: 'A Circle in Dynamo is defined by a centre point and a radius.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which node builds a smooth, free-form curve through or near a set of input points?',
        options: ['NurbsCurve.ByPoints', 'Solid.ByExtrusion', 'Element.GetParameterValueByName', 'List.FilterByBoolMask'],
        answer: 'NurbsCurve.ByPoints'
      },
      {
        type: 'fillblank',
        question: 'The geometry hierarchy in Dynamo runs Point → Curve → Surface → ___.',
        answer: 'Solid'
      },
      {
        type: 'mcq',
        question: 'What does Dynamo\'s background 3D preview do?',
        options: [
          'It renders geometry produced by the graph independently of Revit',
          'It only works after exporting to Revit',
          'It replaces the Node Library',
          'It shows only Revit elements, never Dynamo-created geometry'
        ],
        answer: 'It renders geometry produced by the graph independently of Revit'
      },
      {
        type: 'truefalse',
        question: 'Most Revit-focused Dynamo work only needs Points and Curves, since Revit itself creates Surfaces/Solids once elements are placed.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is the term for a single node automatically producing one output per item in an input list?',
        options: ['Replication', 'Compilation', 'Serialization', 'Flattening'],
        answer: 'Replication'
      },
      {
        type: 'mcq',
        question: 'Why is it important to confirm whether geometry values represent millimetres, metres, or feet?',
        options: [
          'It is a common source of massively oversized or undersized geometry if confused',
          'Units never actually matter in Dynamo',
          'Revit ignores all Dynamo-created geometry regardless of units',
          'Only Code Blocks are affected by units'
        ],
        answer: 'It is a common source of massively oversized or undersized geometry if confused'
      },
      {
        type: 'truefalse',
        question: 'It is best practice to build and verify geometry fully in the Dynamo preview before connecting it to Revit-creation nodes.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-7: Selecting & Querying Revit Elements from Dynamo
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-7',
    title: 'Selecting Revit Elements',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which node lets you manually click a single element in the Revit view to select it?',
        options: ['Select Model Element', 'Categories', 'Watch', 'String.Concat'],
        answer: 'Select Model Element'
      },
      {
        type: 'mcq',
        question: 'Which combination of nodes returns every element of a given category across the entire project?',
        options: [
          'Categories + All Elements of Category',
          'Point.ByCoordinates + Line.ByStartPointEndPoint',
          'Watch + Code Block',
          'String.Concat + Boolean'
        ],
        answer: 'Categories + All Elements of Category'
      },
      {
        type: 'truefalse',
        question: 'All Elements in Active View returns every element in the entire project regardless of which view is open.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which node is used to read a parameter value from a Revit element?',
        options: ['Element.GetParameterValueByName', 'Element.SetParameterByName', 'Point.ByCoordinates', 'List.FilterByBoolMask'],
        answer: 'Element.GetParameterValueByName'
      },
      {
        type: 'fillblank',
        question: 'Element.SetParameterByName is used to ___ a parameter\'s value on one or more elements at once.',
        answer: 'set'
      },
      {
        type: 'truefalse',
        question: 'Some Revit parameters are read-only (calculated by Revit) and cannot be set directly via Dynamo.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What should you do before running a graph that writes parameter changes across many elements?',
        options: [
          'Switch to Manual run mode and test on a small subset first',
          'Delete the Revit model backup',
          'Always use Automatic run mode for safety',
          'Skip testing since Dynamo cannot make mistakes'
        ],
        answer: 'Switch to Manual run mode and test on a small subset first'
      },
      {
        type: 'mcq',
        question: 'In the lesson\'s QA/QC example, which node filters a list of walls down to only those missing a Comments value?',
        options: ['List.FilterByBoolMask', 'Surface.ByLoft', 'Circle.ByCenterPointRadius', 'NurbsCurve.ByPoints'],
        answer: 'List.FilterByBoolMask'
      },
      {
        type: 'truefalse',
        question: 'Parameter names used in Element.GetParameterValueByName are case-sensitive and must match the Revit Properties palette exactly.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is recommended before writing values back into a live Revit model?',
        options: [
          'Read first, verify with a Watch node, then write',
          'Write immediately without checking anything',
          'Disable the Node Library',
          'Only ever use Select Model Element'
        ],
        answer: 'Read first, verify with a Watch node, then write'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ dyn-8: Running, Saving & Managing Dynamo Scripts
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'dyn-8',
    title: 'Running & Managing Dynamo Scripts',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does a red error state on a node in Dynamo indicate?',
        options: [
          'The node ran successfully with no issues',
          'The node failed to execute, so downstream nodes may lack valid data',
          'The node is currently selected',
          'The graph has been saved'
        ],
        answer: 'The node failed to execute, so downstream nodes may lack valid data'
      },
      {
        type: 'truefalse',
        question: 'The standing rule from the lesson is to default to Manual run mode for any graph touching real Revit data.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What file format do Dynamo graphs save as?',
        options: ['.dyn (JSON-based)', '.rvt', '.dwg', '.ifc'],
        answer: '.dyn (JSON-based)'
      },
      {
        type: 'mcq',
        question: 'Which is a recommended naming convention for scripts, according to the lesson?',
        options: ['MyScript.dyn', 'Purpose_Scope_Version.dyn (e.g., RenameViews_ByLevel_v1.dyn)', 'Untitled1.dyn', 'Test_Final_FINAL2.dyn'],
        answer: 'Purpose_Scope_Version.dyn (e.g., RenameViews_ByLevel_v1.dyn)'
      },
      {
        type: 'fillblank',
        question: 'Adding a ___ node at the top-left of a graph to describe its purpose, author, date, and dependencies is a recommended documentation habit.',
        answer: 'Note'
      },
      {
        type: 'truefalse',
        question: 'Hard-coding project-specific values like a specific element ID into Code Blocks makes a graph more reusable across projects.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What must you do to run a Dynamo for Revit graph against a different Revit project?',
        options: [
          'Nothing — it automatically applies to any open project',
          'Launch Dynamo from that project\'s Manage tab, since the graph runs against whichever document launched it',
          'Uninstall and reinstall Dynamo',
          'Convert the graph into a Code Block'
        ],
        answer: 'Launch Dynamo from that project\'s Manage tab, since the graph runs against whichever document launched it'
      },
      {
        type: 'mcq',
        question: 'What tool, covered in more detail in the next lesson, runs a saved .dyn file with one click and exposes only key input values?',
        options: ['Dynamo Player', 'Dynamo Sandbox', 'The Node Library', 'Element.SetParameterByName'],
        answer: 'Dynamo Player'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends grouping scripts by purpose into folders such as "QA-QC," "Parameter Automation," and "Data Export."',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What does the lesson recommend doing with genuinely obsolete scripts over time?',
        options: [
          'Immediately delete them with no record',
          'Review and retire them periodically so the active library stays trustworthy',
          'Rename them all to "Test"',
          'Merge every script into a single giant graph'
        ],
        answer: 'Review and retire them periodically so the active library stays trustworthy'
      }
    ]
  }

];
