// ============================================================
// FORMA QUIZZES DATA — forma-17 through forma-24
// Merge these entries into your lib/formaQuizzesData.js array
// ============================================================

export const formaQuizzes_17_24 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-17: Connecting Forma to Revit — The Forma Plugin
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-17',
    title: 'Connecting Forma to Revit',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What appears in the Revit ribbon after installing the Forma Revit Plugin?',
        options: ['A "Forma" tab', 'A new project browser', 'A COBie tab', 'A Navisworks tab'],
        answer: 'A "Forma" tab'
      },
      {
        type: 'truefalse',
        question: 'The Forma Revit Plugin enables a two-way connection: Forma to Revit and Revit back to Forma.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Where is the Forma Revit Plugin installed from?',
        options: ['The Autodesk App Store or Autodesk Desktop App', 'A random third-party website', 'It is built into Windows', 'The Forma browser interface only'],
        answer: 'The Autodesk App Store or Autodesk Desktop App'
      },
      {
        type: 'fillblank',
        question: 'Before installing the Forma Revit Plugin, you should completely close ___ first.',
        answer: 'Revit'
      },
      {
        type: 'mcq',
        question: 'What is the single most common source of problems in Forma-Revit workflows, according to the lesson?',
        options: [
          'Misaligned shared coordinates between the two systems',
          'Incorrect proposal names',
          'Using the wrong browser',
          'Running too many analyses'
        ],
        answer: 'Misaligned shared coordinates between the two systems'
      },
      {
        type: 'truefalse',
        question: 'In Revit, a Survey Point should be set to the correct geographic location to align coordinates with Forma.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which Forma tab function pulls the latest Forma geometry without re-importing from scratch?',
        options: ['Refresh', 'Disconnect', 'Export', 'Compass'],
        answer: 'Refresh'
      },
      {
        type: 'mcq',
        question: 'Which Revit versions does the lesson state the Forma Revit Plugin supports?',
        options: ['2023, 2024, and 2025', 'Only 2018', 'Only 2030 and later', 'All versions since 2005'],
        answer: '2023, 2024, and 2025'
      },
      {
        type: 'truefalse',
        question: 'You should fix coordinate misalignment after importing geometry rather than before.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What does the "Compare" function in the Forma tab do?',
        options: [
          'Shows the differences between the current Revit model and the connected Forma proposal',
          'Compares two Revit users\' usernames',
          'Compares wind speed to noise levels',
          'Compares site boundary area only'
        ],
        answer: 'Shows the differences between the current Revit model and the connected Forma proposal'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-18: Importing Forma Geometry into a Revit Project
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-18',
    title: 'Importing Forma Geometry into Revit',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which import type should you use for your own proposed buildings to enable the standard Revit massing-to-elements workflow?',
        options: ['Conceptual Mass', 'Direct Shape', 'Generic Model', 'Point Cloud'],
        answer: 'Conceptual Mass'
      },
      {
        type: 'truefalse',
        question: 'Direct Shape import is described as useful for context buildings that need to be present but not modified.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is the four-step Revit massing-to-model conversion sequence given in the lesson?',
        options: [
          'Mass → Mass Floors → Floor by Face → Wall by Face',
          'Wall by Face → Mass → Roof → Export',
          'Import → Delete → Re-import → Publish',
          'Site Boundary → GAR → Solar → Wind'
        ],
        answer: 'Mass → Mass Floors → Floor by Face → Wall by Face'
      },
      {
        type: 'fillblank',
        question: 'Before importing, Revit Levels should be set up to match Forma floor ___.',
        answer: 'heights'
      },
      {
        type: 'mcq',
        question: 'What should you check before importing, regarding project units?',
        options: [
          'Revit project units should match Forma (metric/imperial)',
          'Units never need to match',
          'Only imperial units are supported',
          'Units are irrelevant to massing import'
        ],
        answer: 'Revit project units should match Forma (metric/imperial)'
      },
      {
        type: 'truefalse',
        question: 'Each Forma building volume imports as a separate mass element in Revit.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What tolerance does the lesson recommend for comparing Revit GFA against Forma GFA after import?',
        options: ['Typically less than 2%', 'Exactly 50%', 'At least 25%', 'There is no expected tolerance'],
        answer: 'Typically less than 2%'
      },
      {
        type: 'mcq',
        question: 'What Revit tool generates a floor element on a mass floor face?',
        options: ['Floor by Face', 'Wall by Face', 'Roof by Face', 'Mass Floors only'],
        answer: 'Floor by Face'
      },
      {
        type: 'fillblank',
        question: 'For podium-and-tower typologies, import the podium and tower as separate ___ so each can be independently controlled.',
        answer: 'masses'
      },
      {
        type: 'truefalse',
        question: 'If GFA differs by more than 5% between Forma and Revit after import, the lesson recommends investigating and resolving it before using Revit for area schedule submissions.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-19: Pushing Revit Design Updates Back to Forma
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-19',
    title: 'Pushing Revit Updates to Forma',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the main value of pushing Revit updates back to Forma?',
        options: [
          'Maintaining a living analysis model that tracks the real design state',
          'Deleting the original Forma proposal',
          'Converting Revit models to IFC automatically',
          'Removing the need for shared coordinates'
        ],
        answer: 'Maintaining a living analysis model that tracks the real design state'
      },
      {
        type: 'truefalse',
        question: 'Only Revit mass objects can be pushed back to Forma — full detailed model elements like walls and floors cannot.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is the correct sequence for the push workflow described in the lesson?',
        options: [
          'Forma tab → Push to Forma → select masses → confirm → refresh Forma → re-run analyses',
          'Delete Forma project → recreate from scratch → re-import',
          'Push to Forma happens automatically with no user action',
          'Export to IFC → email the file → manually rebuild in Forma'
        ],
        answer: 'Forma tab → Push to Forma → select masses → confirm → refresh Forma → re-run analyses'
      },
      {
        type: 'fillblank',
        question: 'A push by itself does not update analysis results — you must explicitly ___ each affected analysis type.',
        answer: 're-run'
      },
      {
        type: 'mcq',
        question: 'What does Forma retain for each pushed proposal, according to the lesson?',
        options: ['Push history, allowing rollback to earlier pushed states', 'Nothing at all', 'Only the most recent push, with no history', 'A backup only in Revit'],
        answer: 'Push history, allowing rollback to earlier pushed states'
      },
      {
        type: 'truefalse',
        question: 'It is recommended to push partial or in-progress changes frequently rather than waiting for a coherent design state.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which analysis should be re-run if a rooftop plant room addition changes building height?',
        options: ['Solar Analysis', 'None — height changes do not affect solar', 'Only GAR', 'Only Noise'],
        answer: 'Solar Analysis'
      },
      {
        type: 'mcq',
        question: 'What is recommended before a major massing change is pushed, to preserve the previously approved state?',
        options: [
          'Create a new Forma Proposal rather than overwriting the previous one',
          'Delete the old proposal immediately',
          'Rename the project entirely',
          'Disable the Forma plugin'
        ],
        answer: 'Create a new Forma Proposal rather than overwriting the previous one'
      },
      {
        type: 'fillblank',
        question: 'The Forma-Revit cycle naturally winds down once ___ approval is received and the massing is locked.',
        answer: 'planning'
      },
      {
        type: 'truefalse',
        question: 'After design has progressed to detailed element level (specified windows, facade systems), detailed simulation tools become more appropriate than Forma.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-20: Area & Gross Floor Area Calculations in Forma
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-20',
    title: 'GFA Calculations in Forma',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'How does Forma calculate GFA for a building volume?',
        options: [
          'Footprint area × number of floors',
          'Site area × Green Area Ratio',
          'Wind comfort score × building height',
          'Number of proposals × site area'
        ],
        answer: 'Footprint area × number of floors'
      },
      {
        type: 'truefalse',
        question: 'Forma assumes every floor of a volume has the same footprint (uniform extrusion) unless separate volumes are used for setbacks or tapers.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What does FAR stand for?',
        options: ['Floor Area Ratio', 'Fire Alarm Response', 'Final Area Requirement', 'Facade Analysis Rating'],
        answer: 'Floor Area Ratio'
      },
      {
        type: 'fillblank',
        question: 'Forma shows Gross Floor Area, not ___ Internal Area (NIA), which excludes walls, columns, and plant rooms.',
        answer: 'Net'
      },
      {
        type: 'mcq',
        question: 'What is the typical NIA/GFA efficiency ratio for residential buildings given in the lesson?',
        options: ['80-85%', '10-15%', '150-200%', 'Exactly 100%'],
        answer: '80-85%'
      },
      {
        type: 'truefalse',
        question: 'GFA definitions are identical across every planning jurisdiction worldwide.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What does the RICS-based UK definition referenced in the lesson call the measurement to the outer face of external walls?',
        options: ['GEA (Gross External Area)', 'NLA (Net Lettable Area)', 'GFA only, with no other name', 'FSI'],
        answer: 'GEA (Gross External Area)'
      },
      {
        type: 'mcq',
        question: 'What color indicator does Forma use when the current GFA is at or below a set target?',
        options: ['Green', 'Purple', 'Black', 'Grey only'],
        answer: 'Green'
      },
      {
        type: 'fillblank',
        question: 'Forma can track area by building ___ (e.g., Residential, Commercial) for mixed-use proposals.',
        answer: 'use'
      },
      {
        type: 'mcq',
        question: 'When should GFA and FAR be verified against planning brief conditions?',
        options: [
          'Before the Revit handoff, since massing changes are cheaper at that stage',
          'Only after construction begins',
          'Never — Forma\'s numbers are always assumed correct with no verification needed',
          'Only after the building is fully documented in Revit'
        ],
        answer: 'Before the Revit handoff, since massing changes are cheaper at that stage'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-21: Open BIM Export — IFC, Speckle & ISO 19650 Data
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-21',
    title: 'Open BIM Export from Forma',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does IFC stand for?',
        options: ['Industry Foundation Classes', 'Internal Format Container', 'Integrated File Compression', 'International Facade Code'],
        answer: 'Industry Foundation Classes'
      },
      {
        type: 'truefalse',
        question: 'IFC is a vendor-neutral format that any BIM tool can read, unlike proprietary exchange formats.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which IFC schema version does the lesson say carries richer property set data?',
        options: ['IFC4', 'IFC2x3', 'They are identical in data richness', 'IFC1.0'],
        answer: 'IFC4'
      },
      {
        type: 'fillblank',
        question: 'IFC property sets are commonly abbreviated as ___.',
        answer: 'Psets'
      },
      {
        type: 'mcq',
        question: 'What is Speckle, as described in the lesson?',
        options: [
          'An open-source data platform for AEC that allows geometry and data to flow between different software tools',
          'A proprietary Autodesk-only rendering engine',
          'A type of suitability code',
          'A wind analysis method'
        ],
        answer: 'An open-source data platform for AEC that allows geometry and data to flow between different software tools'
      },
      {
        type: 'truefalse',
        question: 'Speckle integration is useful for teams using Rhino/Grasshopper or Blender alongside Forma.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which of the following is required for ISO 19650-aligned Forma exports, per the lesson?',
        options: [
          'Using the project\'s agreed file naming convention',
          'Ignoring naming conventions entirely',
          'Emailing files directly instead of using the CDE',
          'Skipping status codes'
        ],
        answer: 'Using the project\'s agreed file naming convention'
      },
      {
        type: 'mcq',
        question: 'Which ISO 19650 status code represents "work in progress"?',
        options: ['S0', 'S2', 'C', 'A2'],
        answer: 'S0'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends opening exported IFC files in a compatible viewer to verify geometry before distribution.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'Per ISO 19650 guidance in the lesson, exported files should go to the project ___ (Common Data Environment) rather than being emailed directly.',
        answer: 'CDE'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-22: Using Forma for Early-Stage Design Documentation
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-22',
    title: 'Forma for Early-Stage Documentation',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which document type is explicitly listed as commonly supported by Forma analysis outputs?',
        options: ['Planning Pre-Application', 'A structural steel connection design', 'A fire escape route calculation', 'A mechanical ductwork schedule'],
        answer: 'Planning Pre-Application'
      },
      {
        type: 'truefalse',
        question: 'Using a consistent camera angle across all analysis exports makes images directly comparable.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is recommended for plan view exports regarding orientation?',
        options: ['North always pointing up', 'South always pointing up', 'Random orientation each time', 'Orientation does not matter'],
        answer: 'North always pointing up'
      },
      {
        type: 'fillblank',
        question: 'The recommended analysis section structure is: Context → Method → Results → Interpretation → Design ___.',
        answer: 'Response'
      },
      {
        type: 'mcq',
        question: 'What analytical evidence does the lesson say is often the first thing planning officers ask about for a residential tower?',
        options: ['Shadow diagrams on the winter solstice', 'The paint colour scheme', 'The elevator brand', 'The Wi-Fi provider'],
        answer: 'Shadow diagrams on the winter solstice'
      },
      {
        type: 'truefalse',
        question: 'Bringing a laptop with Forma open to a pre-application meeting allows live parameter changes and re-analysis.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Why does the lesson recommend including disclaimer language when presenting Forma analysis in formal documents?',
        options: [
          'To clarify results are early-stage/indicative and not a substitute for detailed specialist assessment',
          'Disclaimers are not necessary for any Forma output',
          'To hide the analysis method used',
          'Because Forma results are always wrong'
        ],
        answer: 'To clarify results are early-stage/indicative and not a substitute for detailed specialist assessment'
      },
      {
        type: 'mcq',
        question: 'What information does the lesson recommend noting in a document footnote alongside exported analysis?',
        options: ['The Forma version used and the export date', 'The client\'s home address', 'The Wi-Fi password', 'The proposal\'s file size in bytes'],
        answer: 'The Forma version used and the export date'
      },
      {
        type: 'truefalse',
        question: 'Noise analysis disclaimer language in the lesson recommends referencing that actual levels should be validated by a BS 8233-compliant acoustic survey where required.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'The most commonly contested planning issue mentioned is ___ impact on neighbouring properties.',
        answer: 'daylight'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-23: Forma in the Project Programme — When to Use It
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-23',
    title: 'Forma in the Project Programme',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'At which RIBA Stage does the lesson say the Forma-to-Revit handoff typically occurs?',
        options: ['End of Stage 2 (Concept Design)', 'Stage 0', 'Stage 7 (Use)', 'It never occurs'],
        answer: 'End of Stage 2 (Concept Design)'
      },
      {
        type: 'truefalse',
        question: 'Forma use is described as diminishing from RIBA Stage 4 onward as detailed simulation tools take over.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is the minimum information recommended before setting up a Forma project?',
        options: [
          'Confirmed site address, approximate GFA target, and project number for naming',
          'A completed Revit model',
          'A signed construction contract',
          'A COBie handover package'
        ],
        answer: 'Confirmed site address, approximate GFA target, and project number for naming'
      },
      {
        type: 'fillblank',
        question: 'The lesson states Forma setup takes under an ___ — do not delay starting it pending perfect information.',
        answer: 'hour'
      },
      {
        type: 'mcq',
        question: 'Which of these is listed as a valid trigger for handing off from Forma to Revit?',
        options: [
          'Client approval of a preferred option',
          'Running out of disk space',
          'A random calendar date with no design milestone',
          'The BIM Manager\'s birthday'
        ],
        answer: 'Client approval of a preferred option'
      },
      {
        type: 'truefalse',
        question: 'The lesson advises starting significant Revit work even before the Forma massing has been approved, to save time.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'In design-and-build/ECI procurement, what can Forma outputs support before Revit documentation exists?',
        options: ['Tender packages and Employer\'s Requirements', 'Structural steel fabrication drawings', 'Final as-built COBie data', 'Building commissioning certificates'],
        answer: 'Tender packages and Employer\'s Requirements'
      },
      {
        type: 'fillblank',
        question: 'In ISO 19650 projects, Forma exports are uploaded to the ___ at agreed milestones per the Information Delivery Plan.',
        answer: 'CDE'
      },
      {
        type: 'mcq',
        question: 'Which status code from the lesson would typically be applied to an early Forma export still in development?',
        options: ['S0 (work in progress)', 'C (suitable for construction)', 'A2', 'Final'],
        answer: 'S0 (work in progress)'
      },
      {
        type: 'truefalse',
        question: 'The BIM Execution Plan should reference Forma as the concept design tool and specify when responsibility transfers to Revit.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-24: Capstone — Dharren Park Site Analysis & Revit Handoff
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-24',
    title: 'Forma Capstone — Dharren Park',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the target GFA specified for the Dharren Park capstone site?',
        options: ['5,000 m²', '20,000 m²', '100,000 m²', '2,000 m²'],
        answer: '20,000 m²'
      },
      {
        type: 'mcq',
        question: 'What is the planning height limit for the Dharren Park site?',
        options: ['12 m', '24 m', '36 m', '60 m'],
        answer: '36 m'
      },
      {
        type: 'fillblank',
        question: 'The capstone brief requires a minimum Green Area Ratio of ___.',
        answer: '0.35'
      },
      {
        type: 'truefalse',
        question: 'The capstone brief requires no overshadowing of the park between 9am-3pm on the winter solstice.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'How many genuinely distinct massing options does the capstone recommend creating at minimum?',
        options: ['One', 'Two', 'At least three', 'Ten'],
        answer: 'At least three'
      },
      {
        type: 'mcq',
        question: 'Which of these is one of the three suggested option types in the capstone?',
        options: ['Single Tower', 'Underground bunker', 'Floating structure', 'A structure with no massing at all'],
        answer: 'Single Tower'
      },
      {
        type: 'truefalse',
        question: 'The capstone analysis checklist includes running Solar, Wind, Noise, Daylight, GAR, and View analysis on each proposal.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What should happen to options that fail a non-negotiable requirement (e.g., park overshadowing)?',
        options: ['They should be eliminated from further consideration', 'They should still be selected as the preferred option', 'They should be built anyway', 'They should be ignored and not documented'],
        answer: 'They should be eliminated from further consideration'
      },
      {
        type: 'fillblank',
        question: 'The capstone handoff package should include a confirmed Forma proposal with verified GFA within approximately ±___% of the target.',
        answer: '3'
      },
      {
        type: 'mcq',
        question: 'According to the capstone\'s closing reflection, what does Forma change about how design decisions are made?',
        options: [
          'Decisions become evidence-based, documented, and defensible rather than based on intuition alone',
          'Decisions are made entirely by the software with no human input',
          'Decisions no longer need any environmental analysis',
          'Decisions are made only after construction begins'
        ],
        answer: 'Decisions become evidence-based, documented, and defensible rather than based on intuition alone'
      }
    ]
  }

]
