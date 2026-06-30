// ============================================================
// NAVISWORKS GETTING STARTED — QUIZZES nav-9 through nav-16 (INTERMEDIATE/ADVANCED)
// File: lib/navisworksQuizzesContent/navisworksQuizzes_9_16.js
// Index: lib/navisworksQuizzesData.js
// ============================================================

export const quizzes_9_16 = [

  {
    lessonId: 'nav-9',
    title: 'Advanced Selection Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'Why does manual clicking fail to scale on large federated models?',
        options: [
          'Navisworks limits manual selections to 10 items',
          'It cannot reliably handle tens of thousands of elements across multiple discipline files',
          'Manual selection is actually faster than rule-based selection at any scale',
          'Manual clicking is disabled in Navisworks Manage',
        ],
        answer: 'It cannot reliably handle tens of thousands of elements across multiple discipline files',
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Which tool searches the entire federated model by property criteria, regardless of source file?',
        options: ['Clash Detective', 'Find Items', 'TimeLiner', 'Animator'],
        answer: 'Find Items',
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'A Search Set re-evaluates automatically every time the model is refreshed.',
        answer: true,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'What logic can be used to combine multiple conditions in a Search Set?',
        options: ['AND / OR', 'IF / THEN only', 'Only a single condition is allowed', 'XOR only'],
        answer: 'AND / OR',
      },
      {
        id: 'q5', type: 'truefalse',
        question: 'Property names exported from Revit, Tekla, and Civil 3D are always identical for conceptually similar data.',
        answer: false,
      },
      {
        id: 'q6', type: 'mcq',
        question: 'What is the most common cause of a Search Set returning zero results?',
        options: [
          'Navisworks has a results limit of zero by default',
          'A property name or value that doesn\'t exactly match what\'s in the source model',
          'Search Sets cannot return more than one result',
          'The model file is corrupted',
        ],
        answer: 'A property name or value that doesn\'t exactly match what\'s in the source model',
      },
      {
        id: 'q7', type: 'fillblank',
        question: 'Before relying on a property value in a rule, you should verify it in the _______ Panel.',
        answer: 'properties',
      },
      {
        id: 'q8', type: 'mcq',
        question: 'What is recommended after building any new Search Set?',
        options: [
          'Immediately delete it and rebuild from scratch',
          'Spot-check its results visually in the 3D view',
          'Never test it until the next coordination meeting',
          'Convert it into a Selection Set automatically',
        ],
        answer: 'Spot-check its results visually in the 3D view',
      },
      {
        id: 'q9', type: 'truefalse',
        question: 'Search Sets are the standard input for Clash Detective tests on projects of meaningful size.',
        answer: true,
      },
      {
        id: 'q10', type: 'mcq',
        question: 'What is a best practice for naming Search Sets?',
        options: [
          'Use random short codes only the creator understands',
          'Name them clearly and consistently, e.g. "STRUC — Level 3 Columns"',
          'Leave them unnamed since Navisworks names them automatically',
          'Name every Search Set "Set 1," "Set 2," etc.',
        ],
        answer: 'Name them clearly and consistently, e.g. "STRUC — Level 3 Columns"',
      },
    ],
  },

  {
    lessonId: 'nav-10',
    title: 'Comparing Models Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What does the Compare tool detect?',
        options: [
          'Geometric clashes between two different disciplines',
          'Differences (added, deleted, modified) between two versions of the same model',
          'Construction schedule conflicts',
          'Material cost differences',
        ],
        answer: 'Differences (added, deleted, modified) between two versions of the same model',
      },
      {
        id: 'q2', type: 'truefalse',
        question: 'Compare checks a discipline model against other disciplines, the same way Clash Detective does.',
        answer: false,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'Which three categories does a Compare result fall into?',
        options: ['New, Old, Pending', 'Added, Deleted, Modified', 'Hard, Soft, Clearance', 'Active, Resolved, Approved'],
        answer: 'Added, Deleted, Modified',
      },
      {
        id: 'q4', type: 'mcq',
        question: 'What should you do at the end of each coordination cycle to make future comparisons possible?',
        options: [
          'Delete the old NWC files immediately',
          'Archive a dated copy of each discipline\'s NWC',
          'Merge all discipline files into one permanent file',
          'Disable Compare for that discipline',
        ],
        answer: 'Archive a dated copy of each discipline\'s NWC',
      },
      {
        id: 'q5', type: 'truefalse',
        question: 'Clicking a Compare result highlights the corresponding element in the 3D view.',
        answer: true,
      },
      {
        id: 'q6', type: 'mcq',
        question: 'Which tool should you use to answer "what did the structural team change since last week?"',
        options: ['Clash Detective', 'TimeLiner', 'Compare', 'Quantification'],
        answer: 'Compare',
      },
      {
        id: 'q7', type: 'mcq',
        question: 'Which tool should you use to answer "does this duct hit that beam?"',
        options: ['Compare', 'Clash Detective', 'Animator', 'Scripter'],
        answer: 'Clash Detective',
      },
      {
        id: 'q8', type: 'truefalse',
        question: 'Running Compare before a coordination meeting helps you know what changed before discussing why it changed.',
        answer: true,
      },
      {
        id: 'q9', type: 'fillblank',
        question: 'A Compare result showing an element that existed before but no longer does is categorized as _______.',
        answer: 'deleted',
      },
      {
        id: 'q10', type: 'mcq',
        question: 'Modified items in a comparison can be further inspected to see:',
        options: [
          'Only whether the element was deleted',
          'Exactly which properties changed — geometry, location, type, or parameters',
          'The original architect\'s name',
          'Nothing further — modified items cannot be inspected',
        ],
        answer: 'Exactly which properties changed — geometry, location, type, or parameters',
      },
    ],
  },

  {
    lessonId: 'nav-11',
    title: 'Working with Point Clouds Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What is a point cloud?',
        options: [
          'A cloud-based file storage system for Navisworks',
          'A dense dataset of XYZ coordinate points captured by laser scanning',
          'A type of Search Set',
          'A weather simulation overlay',
        ],
        answer: 'A dense dataset of XYZ coordinate points captured by laser scanning',
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Which Autodesk product processes raw scan data into a Navisworks-ready format?',
        options: ['AutoCAD', 'Autodesk ReCap', 'Civil 3D', 'BIM 360'],
        answer: 'Autodesk ReCap',
      },
      {
        id: 'q3', type: 'fillblank',
        question: 'Processed point cloud project files from ReCap typically use the _______ file extension.',
        answer: 'rcp',
      },
      {
        id: 'q4', type: 'truefalse',
        question: 'A point cloud that doesn\'t align to the project\'s shared coordinates will appear in the wrong location.',
        answer: true,
      },
      {
        id: 'q5', type: 'mcq',
        question: 'Which is an open, vendor-neutral point cloud exchange format?',
        options: ['.rcp', '.e57', '.nwc', '.rfa'],
        answer: '.e57',
      },
      {
        id: 'q6', type: 'truefalse',
        question: 'Clash Detective can be run with a point cloud as one of the selections, against the design model as the other.',
        answer: true,
      },
      {
        id: 'q7', type: 'mcq',
        question: 'Point cloud comparison is especially valuable for which type of project?',
        options: ['Greenfield projects with no existing structure', 'Renovation and retrofit projects', 'Purely conceptual massing studies', 'Projects with no MEP scope'],
        answer: 'Renovation and retrofit projects',
      },
      {
        id: 'q8', type: 'mcq',
        question: 'What is a recommended way to manage performance with very dense point cloud data?',
        options: [
          'Always append the entire building\'s scan data at once',
          'Use ReCap\'s point density reduction options and append only relevant scan regions',
          'Disable the design model entirely',
          'Point cloud performance cannot be managed in Navisworks',
        ],
        answer: 'Use ReCap\'s point density reduction options and append only relevant scan regions',
      },
      {
        id: 'q9', type: 'truefalse',
        question: 'According to the lesson\'s honest assessment, Navisworks is the best tool for precise dimensional survey verification.',
        answer: false,
      },
      {
        id: 'q10', type: 'mcq',
        question: 'Point clouds are appended into Navisworks using which command?',
        options: ['A special Point Cloud Import wizard, separate from Append', 'The same Append command used for discipline NWC files', 'Merge only, never Append', 'They cannot be appended, only linked externally'],
        answer: 'The same Append command used for discipline NWC files',
      },
    ],
  },

  {
    lessonId: 'nav-12',
    title: 'Animator Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What does Animator simulate?',
        options: [
          'When construction tasks happen against a schedule',
          'How individual objects move — position, rotation, and visibility',
          'Clash results over time',
          'Material cost changes',
        ],
        answer: 'How individual objects move — position, rotation, and visibility',
      },
      {
        id: 'q2', type: 'truefalse',
        question: 'TimeLiner and Animator solve the exact same problem and are interchangeable.',
        answer: false,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'What does Navisworks do automatically between two recorded keyframes?',
        options: ['Nothing, you must set every frame manually', 'Interpolates smooth movement automatically', 'Deletes the animation', 'Pauses playback indefinitely'],
        answer: 'Interpolates smooth movement automatically',
      },
      {
        id: 'q4', type: 'mcq',
        question: 'Which of these is a common construction use of Animator?',
        options: ['Generating a cost estimate', 'Simulating a crane lift sequence', 'Running a clash test', 'Importing a schedule from Primavera'],
        answer: 'Simulating a crane lift sequence',
      },
      {
        id: 'q5', type: 'fillblank',
        question: 'A group of objects that move together within an Animator scene is called an Animation _______.',
        answer: 'set',
      },
      {
        id: 'q6', type: 'truefalse',
        question: 'An Animator scene can be linked to a TimeLiner task so it plays automatically during a 4D simulation.',
        answer: true,
      },
      {
        id: 'q7', type: 'mcq',
        question: 'What happens to the underlying model after an Animator animation ends?',
        options: [
          'The model permanently keeps the animated position',
          'The object snaps back to its original modeled position',
          'The object is deleted from the model',
          'Navisworks crashes',
        ],
        answer: 'The object snaps back to its original modeled position',
      },
      {
        id: 'q8', type: 'mcq',
        question: 'What is a common mistake when building Animator scenes?',
        options: [
          'Grouping objects into Animation Sets',
          'Animating too many objects individually instead of grouping them',
          'Using keyframes',
          'Naming scenes clearly',
        ],
        answer: 'Animating too many objects individually instead of grouping them',
      },
      {
        id: 'q9', type: 'truefalse',
        question: 'Animator is found under the Animation tab in Navisworks.',
        answer: true,
      },
      {
        id: 'q10', type: 'mcq',
        question: 'Combining Animator with TimeLiner is most associated with producing:',
        options: [
          'Cost estimates',
          'Polished, detailed construction sequence videos for presentations',
          'Clash Detective reports',
          'Point cloud registration files',
        ],
        answer: 'Polished, detailed construction sequence videos for presentations',
      },
    ],
  },

  {
    lessonId: 'nav-13',
    title: 'Scripter Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What does Scripter let you build, without writing code?',
        options: ['Clash test rules', 'Event-condition-action rules', 'Quantification catalogs', 'Search Set filters'],
        answer: 'Event-condition-action rules',
      },
      {
        id: 'q2', type: 'truefalse',
        question: 'Scripter reacts to events during navigation or playback, unlike Animator which plays a pre-recorded sequence.',
        answer: true,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'Which of these is a typical Scripter Event?',
        options: ['A material color override', 'Reaching a specific viewpoint', 'A Quantification catalog item', 'A Search Set name'],
        answer: 'Reaching a specific viewpoint',
      },
      {
        id: 'q4', type: 'mcq',
        question: 'A common Scripter use case is:',
        options: [
          'Automatically triggering an Animator scene at a specific point in a TimeLiner simulation',
          'Calculating material costs',
          'Generating a clash report',
          'Registering point cloud data',
        ],
        answer: 'Automatically triggering an Animator scene at a specific point in a TimeLiner simulation',
      },
      {
        id: 'q5', type: 'truefalse',
        question: 'According to the lesson, Scripter is the recommended tool for large-scale, reusable automation across many projects.',
        answer: false,
      },
      {
        id: 'q6', type: 'fillblank',
        question: 'Scripter rules are built from an event, an optional condition, and an _______.',
        answer: 'action',
      },
      {
        id: 'q7', type: 'mcq',
        question: 'For reusable, large-scale automation, professional users typically reach for:',
        options: ['Scripter alone', 'The Navisworks API or Dynamo', 'Animator alone', 'Quantification'],
        answer: 'The Navisworks API or Dynamo',
      },
      {
        id: 'q8', type: 'mcq',
        question: 'Where is Scripter found in the Navisworks ribbon?',
        options: ['Home tab', 'Animation tab', 'Output tab', 'Review tab'],
        answer: 'Animation tab',
      },
      {
        id: 'q9', type: 'truefalse',
        question: 'Scripter can be used to build interactive walkthroughs, such as triggering doors to open as a viewer navigates through.',
        answer: true,
      },
      {
        id: 'q10', type: 'mcq',
        question: 'A Condition in a Scripter rule does what?',
        options: [
          'Defines the action that occurs',
          'Optionally narrows when an action should fire',
          'Replaces the need for an Event entirely',
          'Deletes the script after one use',
        ],
        answer: 'Optionally narrows when an action should fire',
      },
    ],
  },

  {
    lessonId: 'nav-14',
    title: 'Sectioning & Section Boxes Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What is the difference between a Section Plane and a Section Box?',
        options: [
          'They are identical tools with different names',
          'A Section Plane cuts along one axis; a Section Box isolates a full 3D volume on all sides',
          'A Section Box only works in 2D views',
          'A Section Plane can only be used once per session',
        ],
        answer: 'A Section Plane cuts along one axis; a Section Box isolates a full 3D volume on all sides',
      },
      {
        id: 'q2', type: 'truefalse',
        question: 'Sectioning permanently deletes the hidden elements from the model file.',
        answer: false,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'What is the standard way to set up a zone-based coordination review (e.g. one structural bay across all levels)?',
        options: ['A Section Box', 'A Clash Detective test', 'A TimeLiner task', 'A material override'],
        answer: 'A Section Box',
      },
      {
        id: 'q4', type: 'truefalse',
        question: 'Sectioning state can be saved as part of a Viewpoint for instant recall later.',
        answer: true,
      },
      {
        id: 'q5', type: 'mcq',
        question: 'Multiple active Section Planes can be used to:',
        options: [
          'Crash Navisworks',
          'Isolate a single floor by cutting above and below it at once',
          'Permanently merge two models',
          'Disable Clash Detective',
        ],
        answer: 'Isolate a single floor by cutting above and below it at once',
      },
      {
        id: 'q6', type: 'mcq',
        question: 'What is a common mistake related to sectioning?',
        options: [
          'Saving section settings as a Viewpoint',
          'Forgetting sectioning is active and assuming elements are missing from the model',
          'Using a Section Box for zone-based review',
          'Combining sectioning with Walk navigation',
        ],
        answer: 'Forgetting sectioning is active and assuming elements are missing from the model',
      },
      {
        id: 'q7', type: 'fillblank',
        question: 'A Section Box has _______ sides that can each be dragged independently to resize the isolated volume.',
        answer: 'six',
      },
      {
        id: 'q8', type: 'truefalse',
        question: 'Combining sectioning with Walk navigation can help simulate what a technician would see inside a confined space.',
        answer: true,
      },
      {
        id: 'q9', type: 'mcq',
        question: 'Where are sectioning tools found in Navisworks?',
        options: ['Viewpoint tab → Sectioning panel', 'Output tab only', 'Quantification panel only', 'Animator panel only'],
        answer: 'Viewpoint tab → Sectioning panel',
      },
      {
        id: 'q10', type: 'mcq',
        question: 'Saving a Section Box configuration as a named viewpoint helps a team:',
        options: [
          'Avoid using Clash Detective entirely',
          'Jump straight to a specific isolated zone without manually repositioning the box each meeting',
          'Permanently delete unused elements',
          'Skip the need for shared coordinates',
        ],
        answer: 'Jump straight to a specific isolated zone without manually repositioning the box each meeting',
      },
    ],
  },

  {
    lessonId: 'nav-15',
    title: 'Materials & Appearance Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'Which visual style is the standard choice for fast, day-to-day coordination work?',
        options: ['Wireframe', 'Shaded', 'Full Render', 'Hidden Line only'],
        answer: 'Shaded',
      },
      {
        id: 'q2', type: 'mcq',
        question: 'What is a practical benefit of applying color overrides per discipline?',
        options: [
          'It permanently changes the source model\'s materials',
          'It makes a federated model dramatically easier to read at a glance during meetings',
          'It deletes unused elements',
          'It automatically resolves all clashes',
        ],
        answer: 'It makes a federated model dramatically easier to read at a glance during meetings',
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'Color overrides can be saved as part of a Viewpoint.',
        answer: true,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'Which lighting option simulates accurate sun position based on geographic location and date/time?',
        options: ['Headlight', 'Sunlight', 'Scene Lights only', 'Ambient Occlusion'],
        answer: 'Sunlight',
      },
      {
        id: 'q5', type: 'mcq',
        question: 'Which light source follows the camera, useful for evenly lit interior reviews?',
        options: ['Sunlight', 'Headlight', 'Scene Lights', 'None — Navisworks has no such option'],
        answer: 'Headlight',
      },
      {
        id: 'q6', type: 'truefalse',
        question: 'Full Render mode is typically faster to navigate than Shaded mode.',
        answer: false,
      },
      {
        id: 'q7', type: 'mcq',
        question: 'When is Full Render mode typically used?',
        options: [
          'For routine clash checking',
          'For client presentation walkthroughs and marketing stills',
          'Only during model appending',
          'It replaces Shaded mode entirely for all tasks',
        ],
        answer: 'For client presentation walkthroughs and marketing stills',
      },
      {
        id: 'q8', type: 'fillblank',
        question: 'Visual style settings are found under the _______ tab in Navisworks.',
        answer: 'view',
      },
      {
        id: 'q9', type: 'truefalse',
        question: 'A "coordination view" and a "presentation view" with different appearance settings can both be saved as separate Viewpoints.',
        answer: true,
      },
      {
        id: 'q10', type: 'mcq',
        question: 'Combining accurate sunlight simulation with a federated model is useful for:',
        options: [
          'Verifying shadow studies across disciplines without a separate analysis tool',
          'Running Clash Detective tests',
          'Importing schedules into TimeLiner',
          'Generating quantity takeoffs',
        ],
        answer: 'Verifying shadow studies across disciplines without a separate analysis tool',
      },
    ],
  },

  {
    lessonId: 'nav-16',
    title: 'Autodesk Rendering Quiz',
    passingScore: 75,
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'How does Autodesk Rendering differ from the real-time Full Render visual style?',
        options: [
          'They are exactly the same feature',
          'Autodesk Rendering is a separate, higher-quality engine intended for finished output, not live navigation',
          'Autodesk Rendering only works on point clouds',
          'Full Render visual style is slower than Autodesk Rendering',
        ],
        answer: 'Autodesk Rendering is a separate, higher-quality engine intended for finished output, not live navigation',
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Where is Autodesk Rendering found in Navisworks?',
        options: ['Home tab', 'Render tab', 'TimeLiner panel', 'Quantification panel'],
        answer: 'Render tab',
      },
      {
        id: 'q3', type: 'truefalse',
        question: 'Source models often need material replacement before a final render, since structural and MEP elements rarely arrive with presentation-ready finishes.',
        answer: true,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'Which surfaces have the biggest visual impact on render realism?',
        options: [
          'Small bolts and fasteners',
          'Large, visually dominant surfaces like flooring, glazing, and major wall finishes',
          'Hidden ductwork above ceilings',
          'Underground foundation elements',
        ],
        answer: 'Large, visually dominant surfaces like flooring, glazing, and major wall finishes',
      },
      {
        id: 'q5', type: 'mcq',
        question: 'What can be used to offload high-resolution render processing instead of the local machine?',
        options: ['Cloud-based rendering on Autodesk\'s render farm', 'Clash Detective', 'TimeLiner', 'Search Sets'],
        answer: 'Cloud-based rendering on Autodesk\'s render farm',
      },
      {
        id: 'q6', type: 'truefalse',
        question: 'A sequence of saved Viewpoints, or an Animator scene, can be exported as a rendered walkthrough video.',
        answer: true,
      },
      {
        id: 'q7', type: 'fillblank',
        question: 'Replacement materials for a final render are typically sourced from the Autodesk Material _______.',
        answer: 'library',
      },
      {
        id: 'q8', type: 'mcq',
        question: 'According to the lesson\'s honest assessment, where do most firms still send flagship marketing visuals?',
        options: [
          'Nowhere else — Navisworks rendering fully replaces dedicated archviz software',
          'To dedicated visualization/archviz software with more advanced material and lighting control',
          'Back into the original authoring tool only',
          'Navisworks Freedom',
        ],
        answer: 'To dedicated visualization/archviz software with more advanced material and lighting control',
      },
      {
        id: 'q9', type: 'truefalse',
        question: 'A rendered walkthrough is effective for communicating a finished design to stakeholders who cannot easily interpret architectural drawings.',
        answer: true,
      },
      {
        id: 'q10', type: 'mcq',
        question: 'What is exported via Output tab → Export Animation?',
        options: ['A Quantification workbook', 'A video walkthrough sequence', 'A clash report', 'A Search Set'],
        answer: 'A video walkthrough sequence',
      },
    ],
  },

];
