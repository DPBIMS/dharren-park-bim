// ============================================================
// FORMA QUIZZES DATA — forma-1 through forma-8
// Merge these entries into your lib/formaQuizzesData.js array
// ============================================================

export const formaQuizzes_1_8 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-1: What is Autodesk Forma
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-1',
    title: 'What is Autodesk Forma',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What was Autodesk Forma originally called before Autodesk acquired it?',
        options: ['BIM 360 Design', 'Spacemaker', 'FormIt', 'Dynamo Studio'],
        answer: 'Spacemaker'
      },
      {
        type: 'mcq',
        question: 'In what year did Autodesk acquire the company behind Forma?',
        options: ['2018', '2019', '2021', '2023'],
        answer: '2021'
      },
      {
        type: 'truefalse',
        question: 'Forma is intended to replace Revit entirely for BIM authoring.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which of these is NOT one of Forma\'s five core capabilities?',
        options: ['Site Modeling', 'Massing', 'Structural Analysis', 'Environmental Analysis'],
        answer: 'Structural Analysis'
      },
      {
        type: 'mcq',
        question: 'Where does Forma sit in the BIM workflow relative to Revit?',
        options: [
          'After Revit, during construction',
          'Before detailed Revit authoring, at the concept/early design stage',
          'It replaces Revit for documentation',
          'It only operates during handover'
        ],
        answer: 'Before detailed Revit authoring, at the concept/early design stage'
      },
      {
        type: 'truefalse',
        question: 'The cost of making a design change generally rises the later it is caught in a project.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'Forma was founded in Oslo, ___ (country), originally as Spacemaker AI.',
        answer: 'Norway'
      },
      {
        type: 'mcq',
        question: 'Which statement best distinguishes Forma from Revit?',
        options: [
          'Forma answers "which direction should we go?"; Revit answers "how do we build this in detail?"',
          'Forma is for construction management; Revit is for design',
          'Forma only works with concrete structures',
          'Revit is browser-based; Forma is desktop-based'
        ],
        answer: 'Forma answers "which direction should we go?"; Revit answers "how do we build this in detail?"'
      },
      {
        type: 'truefalse',
        question: 'Forma requires a full local software installation to use its core platform.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which group would typically use Forma to present environmental analysis as part of a planning application?',
        options: ['Facilities Managers', 'Planning Consultants', 'Structural Engineers', 'Quantity Surveyors'],
        answer: 'Planning Consultants'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-2: Setting Up Your Forma Account & Workspace
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-2',
    title: 'Setting Up Your Forma Account & Workspace',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which Autodesk suite includes Forma as part of its licensing?',
        options: ['Media & Entertainment Collection', 'AEC Collection', 'Product Design Collection', 'None — Forma is always standalone'],
        answer: 'AEC Collection'
      },
      {
        type: 'fillblank',
        question: 'Forma is accessed in a browser at ___.autodesk.com.',
        answer: 'forma'
      },
      {
        type: 'truefalse',
        question: 'You need a different account to sign in to Forma than the one used for Revit.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is a "Hub" in the context of Forma?',
        options: [
          'A single building volume',
          'Your organization\'s Autodesk workspace containing all your firm\'s projects',
          'A type of environmental analysis',
          'The Forma mobile app'
        ],
        answer: 'Your organization\'s Autodesk workspace containing all your firm\'s projects'
      },
      {
        type: 'mcq',
        question: 'What must be installed locally for the Forma-to-Revit workflow, unlike the core Forma platform?',
        options: ['The Forma Revit Plugin', 'A separate Forma desktop app', 'AutoCAD', 'Navisworks Manage'],
        answer: 'The Forma Revit Plugin'
      },
      {
        type: 'truefalse',
        question: 'The Forma Revit Plugin installs via the standard Autodesk installer / App Store, not a separate process.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which browsers are recommended for best Forma performance?',
        options: ['Safari and Internet Explorer', 'Chrome or Edge', 'Any browser performs identically', 'Only Firefox'],
        answer: 'Chrome or Edge'
      },
      {
        type: 'mcq',
        question: 'What role is typically used when inviting a team member to a Forma project?',
        options: ['Viewer, Editor, or Admin', 'Root, User, Guest', 'Author, Reader', 'Owner only'],
        answer: 'Viewer, Editor, or Admin'
      },
      {
        type: 'fillblank',
        question: 'Larger firms using Single Sign-On for Autodesk products log in with their company ___ rather than a personal Autodesk ID.',
        answer: 'email'
      },
      {
        type: 'truefalse',
        question: 'A dedicated GPU is recommended for optimal Forma performance since analysis runs using WebGL and GPU acceleration.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-3: Creating Your First Project & Importing Site Context
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-3',
    title: 'Creating a Forma Project & Site Context',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the minimum information needed to create a new Forma project and begin importing site data?',
        options: [
          'A completed structural model',
          'A site address or place name',
          'A finished BIM Execution Plan',
          'A COBie spreadsheet'
        ],
        answer: 'A site address or place name'
      },
      {
        type: 'truefalse',
        question: 'Forma automatically imports terrain, context buildings, and roads based on the project location.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is the primary source for Forma\'s auto-imported context buildings?',
        options: ['OpenStreetMap and similar mapping datasets', 'Local council structural drawings', 'Client-supplied Revit models', 'LIDAR scans exclusively'],
        answer: 'OpenStreetMap and similar mapping datasets'
      },
      {
        type: 'mcq',
        question: 'Why is the auto-generated site boundary usually not accurate enough on its own?',
        options: [
          'It is often a simple square/rectangle that rarely matches the real legal site',
          'Forma does not generate a boundary at all',
          'It always exactly matches the title deed',
          'It only appears in 3D view, never in plan'
        ],
        answer: 'It is often a simple square/rectangle that rarely matches the real legal site'
      },
      {
        type: 'fillblank',
        question: 'For sloping or professional projects, the site boundary should be refined using land registry documents or a topographic ___.',
        answer: 'survey'
      },
      {
        type: 'truefalse',
        question: 'Forma can import a topographic survey directly from a DXF or DWG file.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What determines the solar angles and shadow directions Forma calculates for a project?',
        options: [
          'The project\'s geographic coordinates (latitude/longitude)',
          'A manually entered sun angle value',
          'The building material selected',
          'The proposal name'
        ],
        answer: 'The project\'s geographic coordinates (latitude/longitude)'
      },
      {
        type: 'mcq',
        question: 'Why should you cross-reference imported context building heights against satellite imagery or planning portals?',
        options: [
          'OpenStreetMap heights are often approximate and can be inaccurate',
          'Forma never imports building heights',
          'This step is only needed for residential sites',
          'To determine the Green Area Ratio'
        ],
        answer: 'OpenStreetMap heights are often approximate and can be inaccurate'
      },
      {
        type: 'truefalse',
        question: 'Forma requires you to manually click a "Save" button to store your project changes.',
        answer: false
      },
      {
        type: 'fillblank',
        question: 'A recommended project naming convention is ProjectCode_SiteName_Phase____.',
        answer: 'Year'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-4: Understanding the Forma Interface & Navigation
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-4',
    title: 'Forma Interface & Navigation',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which panel in the Forma interface hosts the environmental analysis tools (Solar, Wind, Noise, etc.)?',
        options: ['Left panel', 'Right panel', 'Bottom toolbar', 'Top bar'],
        answer: 'Right panel'
      },
      {
        type: 'mcq',
        question: 'Which panel manages the project\'s contents — site, buildings, context, and vegetation?',
        options: ['Right panel', 'Left panel', 'Compass rose', 'View cube'],
        answer: 'Left panel'
      },
      {
        type: 'truefalse',
        question: 'The Proposal Selector allows switching between different design alternatives within the same project.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which mouse action orbits the camera around the canvas in Forma?',
        options: ['Scroll wheel only', 'Right-click + drag', 'Left-click + drag', 'Double-click'],
        answer: 'Right-click + drag'
      },
      {
        type: 'fillblank',
        question: 'The ___ rose on the canvas always shows true north orientation.',
        answer: 'compass'
      },
      {
        type: 'truefalse',
        question: 'Right-panel analysis tools only fully activate once at least one building volume exists in the current proposal.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which toolbar area contains drawing tools like Draw Footprint and Extrude?',
        options: ['Bottom toolbar', 'Compass rose', 'Right panel', 'Top bar'],
        answer: 'Bottom toolbar'
      },
      {
        type: 'mcq',
        question: 'What does the 2D view mode in Forma primarily support?',
        options: ['Top-down plan view for site layout and boundary editing', '360° panoramic renders', 'Structural analysis', 'Only Revit plugin communication'],
        answer: 'Top-down plan view for site layout and boundary editing'
      },
      {
        type: 'truefalse',
        question: 'Each Proposal in a project can share the same site, terrain, and context while differing in design elements.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What does clicking a face of the View Cube do?',
        options: [
          'Deletes the selected volume',
          'Snaps the camera to a specific view (e.g., top, front, side)',
          'Runs a solar analysis',
          'Switches proposals'
        ],
        answer: 'Snaps the camera to a specific view (e.g., top, front, side)'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-5: Building a Basic Massing Model
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-5',
    title: 'Forma Massing Basics',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What are Forma massing models built from?',
        options: ['Individual walls and columns', 'Building volumes with a footprint and height', 'Rebar schedules', 'Point clouds only'],
        answer: 'Building volumes with a footprint and height'
      },
      {
        type: 'truefalse',
        question: 'At the massing stage in Forma, you model individual doors, windows, and structural members.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is the typical default floor-to-floor height most appropriate for residential buildings?',
        options: ['1.5 m', '3.0 m', '6.0 m', '10.0 m'],
        answer: '3.0 m'
      },
      {
        type: 'fillblank',
        question: 'Commercial office buildings typically use a floor-to-floor height of 3.5 to ___ metres.',
        answer: '4'
      },
      {
        type: 'mcq',
        question: 'What happens if you change the "Floors" property of a building volume?',
        options: [
          'Nothing changes automatically',
          'Height automatically recalculates based on Floor Height',
          'The footprint is deleted',
          'The site boundary changes'
        ],
        answer: 'Height automatically recalculates based on Floor Height'
      },
      {
        type: 'truefalse',
        question: 'Forma automatically prevents you from drawing a building volume outside the site boundary.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What does GFA stand for in Forma\'s metrics?',
        options: ['Ground Floor Analysis', 'Gross Floor Area', 'General Facade Assessment', 'Green Footprint Allocation'],
        answer: 'Gross Floor Area'
      },
      {
        type: 'mcq',
        question: 'What does FAR (or FSI) represent?',
        options: [
          'Floor Area Ratio — GFA divided by site area',
          'Fire Alarm Rating',
          'Facade Analysis Result',
          'Final Approval Requirement'
        ],
        answer: 'Floor Area Ratio — GFA divided by site area'
      },
      {
        type: 'truefalse',
        question: 'Editing a footprint after a volume is created requires deleting and redrawing the volume from scratch.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is the recommended best practice for early massing models?',
        options: [
          'Detail every facade element before running any analysis',
          'Keep early massing simple — refine shape only after validating the broad concept with analysis',
          'Avoid running analysis until construction documents are complete',
          'Model at full LOD 400 detail from the start'
        ],
        answer: 'Keep early massing simple — refine shape only after validating the broad concept with analysis'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-6: Using Proposals — Managing Design Alternatives
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-6',
    title: 'Forma Proposals',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is a "Proposal" in Forma?',
        options: [
          'A separate Forma project file',
          'A complete, independent snapshot of a design state within a single project',
          'An export format',
          'A type of environmental analysis'
        ],
        answer: 'A complete, independent snapshot of a design state within a single project'
      },
      {
        type: 'truefalse',
        question: 'Multiple Proposals within the same project share the same site, terrain, and context buildings.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is the most common workflow for creating a new design alternative in Forma?',
        options: [
          'Always starting completely blank',
          'Duplicating an existing Proposal and modifying the copy',
          'Exporting to Revit first',
          'Deleting the site boundary'
        ],
        answer: 'Duplicating an existing Proposal and modifying the copy'
      },
      {
        type: 'fillblank',
        question: 'The feature that shows two Proposals side by side on the same canvas is called ___ View.',
        answer: 'Split'
      },
      {
        type: 'truefalse',
        question: 'Analysis results automatically update in a Proposal whenever its geometry changes, with no need to re-run.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which naming approach is recommended for Proposals?',
        options: [
          '"New Proposal (2)"',
          '"Test"',
          '"Option A — Point Towers"',
          'Leaving proposals unnamed'
        ],
        answer: '"Option A — Point Towers"'
      },
      {
        type: 'mcq',
        question: 'What should you do before heavily modifying a Proposal the client has already seen and approved of a milestone?',
        options: [
          'Overwrite it directly since it is faster',
          'Preserve it — never delete a Proposal the client has seen',
          'Rename it to "Old"',
          'Merge it with another Proposal'
        ],
        answer: 'Preserve it — never delete a Proposal the client has seen'
      },
      {
        type: 'truefalse',
        question: 'Forma has file locking that prevents two team members from ever editing the same Proposal simultaneously.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which Proposal typically becomes the source for the Revit handoff via the Forma plugin?',
        options: ['Any random proposal', 'The final approved Proposal', 'The very first blank proposal created', 'None — Revit ignores Proposals'],
        answer: 'The final approved Proposal'
      },
      {
        type: 'fillblank',
        question: 'Duplicating a Proposal copies all its volumes and ___ from the original.',
        answer: 'analysis'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-7: Terrain, Site Boundaries & Context Buildings
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-7',
    title: 'Terrain, Boundaries & Context',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is Forma\'s default auto-imported terrain based on?',
        options: [
          'A global digital elevation model, typically around 30m grid resolution',
          'A hand-drawn sketch',
          'The client\'s brief document',
          'BIM 360 project settings'
        ],
        answer: 'A global digital elevation model, typically around 30m grid resolution'
      },
      {
        type: 'truefalse',
        question: 'Auto-imported terrain at 30m resolution captures small mounds and retaining walls accurately.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'For sloping sites, what should always supplement the auto-imported terrain?',
        options: ['A rendered walkthrough video', 'A proper topographic survey', 'A COBie export', 'A structural drawing'],
        answer: 'A proper topographic survey'
      },
      {
        type: 'fillblank',
        question: 'Site boundary calculations directly drive Green Area Ratio, site coverage, and ___ (Floor Area Ratio).',
        answer: 'FAR'
      },
      {
        type: 'mcq',
        question: 'What does the Snap to Angle option constrain edges to when editing a site boundary?',
        options: ['A regular grid only', '45° increments', 'Random angles', 'True north only'],
        answer: '45° increments'
      },
      {
        type: 'truefalse',
        question: 'Missing a tall neighbouring tower in the context model is a critical error for shadow analysis.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'How does Forma place a building volume\'s base on a sloping site?',
        options: [
          'At a fixed elevation regardless of terrain',
          'At the terrain height at that location',
          'Always at sea level',
          'Buildings cannot be placed on sloping terrain'
        ],
        answer: 'At the terrain height at that location'
      },
      {
        type: 'mcq',
        question: 'What is recommended for podium-and-tower typologies on sloping terrain?',
        options: [
          'Ignore the slope entirely',
          'Create a separate volume for the podium that follows the terrain steps',
          'Always flatten the terrain first',
          'Use only one single volume for everything'
        ],
        answer: 'Create a separate volume for the podium that follows the terrain steps'
      },
      {
        type: 'truefalse',
        question: 'Trees in Forma can affect both shadow analysis and wind analysis results.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'Trees count toward the Green Area ___ , so accurate placement affects sustainability metrics.',
        answer: 'Ratio'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-8: Parametric Massing — Generating Buildings from Rules
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-8',
    title: 'Parametric Massing in Forma',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What defines a building in parametric massing?',
        options: [
          'Manually drawn fixed geometry only',
          'Parameters such as setback, maximum height, and floor count',
          'A COBie spreadsheet',
          'A rendered image'
        ],
        answer: 'Parameters such as setback, maximum height, and floor count'
      },
      {
        type: 'truefalse',
        question: 'When a parameter changes in parametric massing, the massing regenerates automatically.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which capability did Forma inherit from Spacemaker\'s original AI-assisted design engine?',
        options: [
          'Rendering photorealistic materials',
          'Automating residential massing options within zoning constraints',
          'Structural clash detection',
          'COBie data validation'
        ],
        answer: 'Automating residential massing options within zoning constraints'
      },
      {
        type: 'fillblank',
        question: 'Setback rules can define different distances from the front, rear, and ___ boundaries.',
        answer: 'side'
      },
      {
        type: 'mcq',
        question: 'What happens to a generated parametric building once you manually edit its geometry?',
        options: [
          'Nothing changes',
          'It exits parametric mode and future parameter changes no longer regenerate it automatically',
          'It is permanently deleted',
          'It becomes a context building'
        ],
        answer: 'It exits parametric mode and future parameter changes no longer regenerate it automatically'
      },
      {
        type: 'truefalse',
        question: 'It is good practice to save a copy of the parametric version of a building before manually editing it, in case you need to revert.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is the main advantage of parametric massing for option generation?',
        options: [
          'It eliminates the need for any environmental analysis',
          'Adjusting one parameter can generate a new option in a fraction of the time manual redrawing would take',
          'It only works for curved geometry',
          'It removes the need for a site boundary'
        ],
        answer: 'Adjusting one parameter can generate a new option in a fraction of the time manual redrawing would take'
      },
      {
        type: 'mcq',
        question: 'According to the lesson\'s honest assessment, what is a limitation of Forma\'s parametric tools compared to tools like Grasshopper?',
        options: [
          'They do not run optimization algorithms or produce hundreds of permutations automatically',
          'They cannot generate any building shape at all',
          'They require a paid third-party plugin',
          'They only work with residential buildings'
        ],
        answer: 'They do not run optimization algorithms or produce hundreds of permutations automatically'
      },
      {
        type: 'truefalse',
        question: 'Forma\'s parametric massing is well-suited to simple orthogonal typologies such as slabs, towers, and perimeter blocks.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'For complex curved geometry, teams often supplement Forma with a parametric modeling tool such as ___ and import the resulting geometry for analysis.',
        answer: 'Grasshopper'
      }
    ]
  }

]
