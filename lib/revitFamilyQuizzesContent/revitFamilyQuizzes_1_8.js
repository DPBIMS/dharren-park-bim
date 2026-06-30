// ============================================================
// REVIT FAMILY CREATION — QUIZZES rf-1 through rf-8 (BEGINNER)
// File: lib/revitFamilyQuizzesContent/quizzes-1-8.js
// ============================================================

export const quizzes_1_8 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-1: What Are Revit Families?
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-1',
    title: 'What Are Revit Families?',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A project team needs a bespoke reception desk unique to one specific project that will never be reused. Which family type is most appropriate?',
        options: [
          'Loadable Family (.rfa)',
          'System Family',
          'In-Place Family',
          'Nested Family',
        ],
        answer: 'In-Place Family',
      },
      {
        type: 'truefalse',
        question: 'System Families in Revit can be saved as external .rfa files and shared between projects.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'In the Revit family hierarchy, what does "Type" refer to?',
        options: [
          'A single placed occurrence of a family in the model',
          'A specific configuration of a family with defined parameter values (e.g., Single-Flush Door: 900x2100mm)',
          'The broadest classification of elements (e.g., Doors, Windows, Furniture)',
          'The external .rfa file stored on disk',
        ],
        answer: 'A specific configuration of a family with defined parameter values (e.g., Single-Flush Door: 900x2100mm)',
      },
      {
        type: 'mcq',
        question: 'A downloaded furniture family has 50,000 polygons for a simple chair. It is placed 200 times in a fit-out project. What is the likely consequence?',
        options: [
          'No consequence — polygon count only affects rendering',
          'The family will not load into the project',
          'Significant model performance degradation — every view showing the chair slows down',
          'The family will appear correctly at Fine detail level only',
        ],
        answer: 'Significant model performance degradation — every view showing the chair slows down',
      },
      {
        type: 'fillblank',
        question: 'The four levels of the Revit family hierarchy from broadest to most specific are: Category, Family, Type, and ___.',
        answer: 'Instance',
      },
      {
        type: 'truefalse',
        question: 'A family\'s category can be changed after the family has been built without rebuilding the geometry.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Which of the following is NOT a loadable family?',
        options: [
          'A parametric door with multiple width types',
          'A structural concrete wall with three different thickness types',
          'A lighting fixture with adjustable beam angle',
          'A custom furniture family with material parameters',
        ],
        answer: 'A parametric door with multiple width types',
      },
      {
        type: 'mcq',
        question: 'A client requires Asset ID, warranty period, and maintenance frequency on every mechanical equipment item for FM handover. Standard library families do not have these parameters. What is the correct solution?',
        options: [
          'Add the data manually to a spreadsheet after the project is complete',
          'Build or modify families to include the correct shared parameters from project setup',
          'Use the Comments field to store all FM data as unstructured text',
          'Purchase a third-party FM plugin to add the data after handover',
        ],
        answer: 'Build or modify families to include the correct shared parameters from project setup',
      },
      {
        type: 'truefalse',
        question: 'The first step in the family creation workflow is to open the Family Editor and start drawing geometry.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'What determines which schedule a family element appears in, which tag annotates it, and how it exports to IFC?',
        options: [
          'The family\'s parameter count',
          'The family\'s file size',
          'The family\'s category',
          'The family\'s hosting type',
        ],
        answer: 'The family\'s category',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-2: The Family Editor Interface
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-2',
    title: 'The Family Editor Interface',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A user opens a Revit file and sees "Architecture," "Structure," and "Systems" tabs in the ribbon. What environment are they in?',
        options: [
          'The Family Editor',
          'The Project Environment',
          'The Conceptual Mass Editor',
          'The Drafting View Environment',
        ],
        answer: 'The Project Environment',
      },
      {
        type: 'truefalse',
        question: 'The Family Editor has the same full Visibility/Graphics dialog as the project environment.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Where is the Family Types dialog accessed in the Family Editor?',
        options: [
          'View tab → Family Types',
          'Manage tab → Settings → Family Types',
          'Create tab → Properties panel → Family Types button',
          'Annotate tab → Family Types',
        ],
        answer: 'Create tab → Properties panel → Family Types button',
      },
      {
        type: 'mcq',
        question: 'In the Family Editor, the "Ref. Level" view is:',
        options: [
          'A reference to the project Level 1 elevation',
          'The primary plan view specific to the Family Editor, used for drawing reference planes and 2D geometry',
          'An elevation view looking at the reference face of the family',
          'A structural reference level used only in structural family templates',
        ],
        answer: 'The primary plan view specific to the Family Editor, used for drawing reference planes and 2D geometry',
      },
      {
        type: 'fillblank',
        question: 'The keyboard shortcut to toggle Thin Lines mode in the Family Editor is ___.',
        answer: 'TL',
      },
      {
        type: 'truefalse',
        question: 'The "Load into Project" button in the Family Editor loads the family into every open Revit project simultaneously.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A family creator needs to place geometry on a vertical reference plane rather than the default horizontal Ref. Level. What must they do first?',
        options: [
          'Switch to a 3D view and draw geometry there',
          'Set the active Work Plane to the vertical reference plane using Create → Work Plane → Set',
          'Draw the geometry in any view — Revit automatically detects the correct plane',
          'Create a new plan view at the height of the vertical plane',
        ],
        answer: 'Set the active Work Plane to the vertical reference plane using Create → Work Plane → Set',
      },
      {
        type: 'mcq',
        question: 'The Family Types dialog in the Family Editor shows:',
        options: [
          'Only the current type\'s parameters',
          'All parameters, all types, and formula fields for the entire family',
          'Only type parameters, not instance parameters',
          'The family\'s history of parameter changes',
        ],
        answer: 'All parameters, all types, and formula fields for the entire family',
      },
      {
        type: 'truefalse',
        question: 'Connector Panel tools (Duct, Pipe, Electrical connectors) appear in the Create tab for all family templates.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'After changing parameter values in the Family Types dialog, what should you do BEFORE closing the dialog to verify the geometry updates correctly?',
        options: [
          'Save the family file',
          'Click Apply — this updates the 3D view without closing the dialog',
          'Close and reopen the Family Types dialog',
          'Reload the family into the test project',
        ],
        answer: 'Click Apply — this updates the 3D view without closing the dialog',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-3: Family Templates
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-3',
    title: 'Family Templates — Choosing the Right One',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A family creator starts a light fixture family from the "Metric Generic Model.rft" template instead of "Lighting Fixture.rft." What is the most serious consequence?',
        options: [
          'The geometry cannot be created in Generic Model template',
          'The family will be in the wrong category — it will not appear in lighting schedules, cannot be tagged with a lighting tag, and exports as IfcBuildingElementProxy',
          'The family will have no pre-built reference planes',
          'The family cannot have material parameters',
        ],
        answer: 'The family will be in the wrong category — it will not appear in lighting schedules, cannot be tagged with a lighting tag, and exports as IfcBuildingElementProxy',
      },
      {
        type: 'truefalse',
        question: 'A family\'s category can be changed after creation by going to Create tab → Family Category and Parameters and selecting a new category.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A floor drain needs to be placed on floor slabs and move with the floor if it is relocated. Which hosting type is correct?',
        options: [
          'Wall-Hosted',
          'Face-Hosted',
          'Floor-Hosted',
          'Non-Hosted (Work Plane-Based)',
        ],
        answer: 'Floor-Hosted',
      },
      {
        type: 'mcq',
        question: 'A light fixture may be mounted on ceilings, sloped soffits, or vertical wall surfaces depending on the project. Which hosting type provides the most flexibility?',
        options: [
          'Ceiling-Hosted',
          'Wall-Hosted',
          'Face-Hosted',
          'Non-Hosted',
        ],
        answer: 'Face-Hosted',
      },
      {
        type: 'fillblank',
        question: 'Family template files use the file extension ___.',
        answer: '.rft',
      },
      {
        type: 'mcq',
        question: 'The correct template for a sweep moulding profile used in a wall sweep is:',
        options: [
          'Metric Generic Model.rft',
          'Profile.rft',
          'Architectural Column.rft',
          'Wall-Based Generic Model.rft',
        ],
        answer: 'Profile.rft',
      },
      {
        type: 'truefalse',
        question: 'Using Generic Model as the family category is always acceptable because it provides maximum flexibility for scheduling and IFC export.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A project requires IFC export with all doors classified as IfcDoor entities. What must be true about the door families?',
        options: [
          'They must be built from the Metric Generic Model.rft template',
          'They must be built from the Door.rft template so they are in the Doors category, which maps to IfcDoor',
          'They must have a shared parameter named "IFC Entity" set to "IfcDoor"',
          'IFC entity type is set in the export settings, not in the family',
        ],
        answer: 'They must be built from the Door.rft template so they are in the Doors category, which maps to IfcDoor',
      },
      {
        type: 'mcq',
        question: 'The Category Decision Framework step "What schedule should this element appear in?" helps decide:',
        options: [
          'Whether to use an Instance or Type parameter',
          'Which family template to use, because category determines scheduling behaviour',
          'Whether the family needs a type catalogue',
          'How many reference planes the family needs',
        ],
        answer: 'Which family template to use, because category determines scheduling behaviour',
      },
      {
        type: 'truefalse',
        question: 'An office desk should use the Wall-Hosted template because it is typically placed against a wall.',
        answer: false,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-4: Reference Planes & Lines
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-4',
    title: 'Reference Planes & Lines',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A family creator changes a Width parameter value but the geometry does not move. What is the most likely cause?',
        options: [
          'The parameter is a Type parameter instead of Instance',
          'The geometry is not locked to reference planes — it is free-floating',
          'The Family Types dialog needs to be closed and reopened',
          'The reference plane is set to Not a Reference',
        ],
        answer: 'The geometry is not locked to reference planes — it is free-floating',
      },
      {
        type: 'truefalse',
        question: 'A "Strong Reference" plane appears as a snap target when the family is placed in a project, allowing users to dimension to it.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'In a furniture family, which planes should be Strong References?',
        options: [
          'Only the centre planes (front/back centre and left/right centre)',
          'The outer boundary planes (Left, Right, Front, Back) and the centre planes — any plane a user might want to dimension or align to',
          'None — furniture families should use Weak References only',
          'Only the bottom reference plane (Ref. Level)',
        ],
        answer: 'The outer boundary planes (Left, Right, Front, Back) and the centre planes — any plane a user might want to dimension or align to',
      },
      {
        type: 'mcq',
        question: 'A reference plane named "CONST-Mirror Line" with Is Reference set to "Not a Reference" is used for:',
        options: [
          'Setting the family origin point',
          'An internal construction helper plane not exposed as a snap target in the project',
          'The primary dimension target for the Width parameter',
          'Defining the host face of the family',
        ],
        answer: 'An internal construction helper plane not exposed as a snap target in the project',
      },
      {
        type: 'fillblank',
        question: 'The intersection of the two default centre reference planes in a family defines the family\'s ___ point — the point that aligns to the cursor when placed.',
        answer: 'origin',
      },
      {
        type: 'truefalse',
        question: 'Reference Lines serve the same purpose as Reference Planes and can always be used interchangeably.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A symmetric furniture family needs the Left and Right outer planes to always remain equidistant from the centre plane. What is the most efficient way to enforce this?',
        options: [
          'Use a formula: Left Offset = Width / 2',
          'Select the Left, Right, and Centre planes → apply an EQ constraint',
          'Lock both planes to the centre plane using the Align tool',
          'Set the centre plane to "Not a Reference" so it cannot move',
        ],
        answer: 'Select the Left, Right, and Centre planes → apply an EQ constraint',
      },
      {
        type: 'mcq',
        question: 'Which of the following is the correct order for planning reference planes?',
        options: [
          'Draw all geometry first, then add reference planes to match',
          'Define the origin, identify variable dimensions, identify fixed relationships, draw outer planes, then inner planes',
          'Start with inner planes, then add outer boundary planes last',
          'Create all parameters first in the Family Types dialog, then draw planes to match',
        ],
        answer: 'Define the origin, identify variable dimensions, identify fixed relationships, draw outer planes, then inner planes',
      },
      {
        type: 'truefalse',
        question: 'Naming a reference plane "Shelf Height" when it drives the Shelf Height parameter creates a readable connection between the plane and the parameter.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A family has geometry that "stretches" instead of moving as a unit when a Width parameter is changed. What does this indicate?',
        options: [
          'The Width parameter is set to Type instead of Instance',
          'Only one face of the geometry is locked to a reference plane — the opposite face is not locked',
          'The EQ constraint is applied incorrectly',
          'The reference planes are set to Weak Reference',
        ],
        answer: 'Only one face of the geometry is locked to a reference plane — the opposite face is not locked',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-5: Dimensions & Parameters
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-5',
    title: 'Dimensions & Parameters',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'How are parameters created in a Revit family?',
        options: [
          'In the Family Types dialog → New Parameter button only',
          'By placing a dimension between reference planes and labeling it via the Label dropdown',
          'Through the Manage tab → Project Parameters',
          'By importing a shared parameter file',
        ],
        answer: 'By placing a dimension between reference planes and labeling it via the Label dropdown',
      },
      {
        type: 'truefalse',
        question: 'A door family has "Width" set as an Instance parameter. This means each placed door instance can have a different width even if they use the same type.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A window "Sill Height" parameter should be which type?',
        options: [
          'Type parameter — all windows of the same type should be at the same sill height',
          'Instance parameter — different windows of the same type may be at different heights on the facade',
          'Reporting parameter — sill height is always calculated automatically',
          'Shared parameter — sill height must appear in a tag',
        ],
        answer: 'Instance parameter — different windows of the same type may be at different heights on the facade',
      },
      {
        type: 'mcq',
        question: 'After labeling a dimension to create a "Depth" parameter, you open Family Types and change Depth from 400mm to 600mm, then click Apply. The reference planes move but the geometry does not update. What is missing?',
        options: [
          'The parameter needs to be set as a Type parameter',
          'The geometry faces are not locked to the reference planes using Align + Lock',
          'The Family Types dialog must be closed before geometry updates',
          'A formula is required to link the parameter to the geometry',
        ],
        answer: 'The geometry faces are not locked to the reference planes using Align + Lock',
      },
      {
        type: 'fillblank',
        question: 'To apply a lock between geometry and a reference plane, use the Modify tab → ___ tool, click the reference plane, then click the geometry edge, and click the padlock icon.',
        answer: 'Align',
      },
      {
        type: 'mcq',
        question: 'The fastest way to create 8 door size types from an existing "Single-Flush: 900x2100mm" type is:',
        options: [
          'Create 8 new types from scratch and enter all values for each',
          'Duplicate the existing type 7 times and change only the differing parameter values in each duplicate',
          'Use the Array tool to generate multiple types automatically',
          'Import the types from a type catalogue file',
        ],
        answer: 'Duplicate the existing type 7 times and change only the differing parameter values in each duplicate',
      },
      {
        type: 'truefalse',
        question: 'Parameters in the Family Types dialog should be grouped under "Dimensions" for geometric parameters to maintain good organisation.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A chair family needs a "Seat Colour" parameter that users can change per instance (each chair may be a different colour). What parameter settings are correct?',
        options: [
          'Type: Material, Instance parameter',
          'Type: Text, Type parameter',
          'Type: Material, Type parameter',
          'Type: Yes/No, Instance parameter',
        ],
        answer: 'Type: Material, Instance parameter',
      },
      {
        type: 'mcq',
        question: 'When selecting a parameter\'s "Type of Parameter," which option should be used for a door opening height (a real-world measurement in millimeters)?',
        options: [
          'Number',
          'Integer',
          'Length',
          'Area',
        ],
        answer: 'Length',
      },
      {
        type: 'truefalse',
        question: 'Deleting a parameter from a production family that is already in use on a project causes that parameter\'s data to be lost from all placed instances.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-6: Basic Solid Forms
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-6',
    title: 'Basic Solid Forms',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A cylindrical bollard that is circular in plan and has constant circular cross-section all the way to the top should be built using which solid form?',
        options: [
          'Extrusion with a circular profile',
          'Blend with circular top and bottom profiles',
          'Revolve — a rectangular profile rotated 360 degrees around the bollard centre axis',
          'Swept Blend',
        ],
        answer: 'Revolve — a rectangular profile rotated 360 degrees around the bollard centre axis',
      },
      {
        type: 'truefalse',
        question: 'A Blend in Revit can only transition between two profiles of the same shape (e.g., square to square).',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A door frame profile (L-shaped cross-section) that follows the perimeter of a door opening should be built using which form?',
        options: [
          'Extrusion',
          'Blend',
          'Revolve',
          'Sweep',
        ],
        answer: 'Sweep',
      },
      {
        type: 'mcq',
        question: 'A column capital transitions from a 400x400mm square base to a 600x600mm square top over 300mm. Which form is correct?',
        options: [
          'Extrusion — the profile is the average of the two sizes',
          'Blend — with 400x400 bottom profile and 600x600 top profile',
          'Sweep — with a tapered path',
          'Revolve — rotated to create the transition',
        ],
        answer: 'Blend — with 400x400 bottom profile and 600x600 top profile',
      },
      {
        type: 'fillblank',
        question: 'When building a Sweep, the two sketch phases are: sketch the ___ first, then sketch the profile.',
        answer: 'path',
      },
      {
        type: 'truefalse',
        question: 'A Swept Blend can transition between two different profiles along a curved path.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A Revolve profile must be positioned relative to the axis in which way?',
        options: [
          'The profile must cross the axis so it creates a solid when rotated',
          'The profile must be entirely on one side of the axis — not crossing it',
          'The profile must be centred on the axis',
          'The profile must be perpendicular to the axis',
        ],
        answer: 'The profile must be entirely on one side of the axis — not crossing it',
      },
      {
        type: 'mcq',
        question: 'A Swept Blend creates complex geometry with a high polygon count. A project team places it 300 times across a large fit-out model at Coarse detail level. What should the family creator do?',
        options: [
          'Simplify the Swept Blend geometry to reduce polygon count',
          'Use Visibility Controls to hide the complex Swept Blend at Coarse detail level — showing a simplified version instead',
          'Replace the Swept Blend with an Extrusion to reduce complexity',
          'Nothing — Coarse detail level automatically simplifies geometry',
        ],
        answer: 'Use Visibility Controls to hide the complex Swept Blend at Coarse detail level — showing a simplified version instead',
      },
      {
        type: 'truefalse',
        question: 'An Extrusion in the Family Editor is created in Sketch Mode — you draw the 2D profile and Revit generates the 3D solid.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'When using a Sweep, using a separate Profile Family (.rfa from Profile.rft) instead of an inline sketched profile has which advantage?',
        options: [
          'Profile families are faster to create than inline sketches',
          'Profile families are reusable across multiple sweep families — change the profile once and all sweeps using it update',
          'Profile families allow the sweep path to be curved',
          'Profile families enable the sweep to cut through host elements',
        ],
        answer: 'Profile families are reusable across multiple sweep families — change the profile once and all sweeps using it update',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-7: Void Forms & Cuts
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-7',
    title: 'Void Forms & Cuts',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A void form is placed in a family overlapping a solid. After placing the void, the solid appears unchanged. What step was missed?',
        options: [
          'The void was not saved before the solid was placed',
          'The void must be explicitly applied to the solid using Modify → Cut — it does not cut automatically',
          'The void needs to be larger than the solid to cut it',
          'The void must be placed before the solid, not after',
        ],
        answer: 'The void must be explicitly applied to the solid using Modify → Cut — it does not cut automatically',
      },
      {
        type: 'truefalse',
        question: 'A void form in a family can cut through a solid in a different, separately loaded family.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A door family needs to cut a rectangular opening through any wall it is placed in, regardless of wall thickness. How should the void be sized?',
        options: [
          'Exactly the thickness of the most common wall in the project',
          'The exact width of the door opening only — height and depth are automatic',
          'Intentionally oversized in depth (wider than any expected wall thickness) so it cuts completely through regardless of wall type',
          'Sized to the average of all wall types in the project',
        ],
        answer: 'Intentionally oversized in depth (wider than any expected wall thickness) so it cuts completely through regardless of wall type',
      },
      {
        type: 'mcq',
        question: 'The "Cut with Voids When Loaded" property on a family controls:',
        options: [
          'Whether the family can contain void forms',
          'Whether voids in the family will cut through the host element (wall, floor, ceiling) when placed in a project',
          'The visibility of void forms at different detail levels',
          'Whether voids are exported to IFC',
        ],
        answer: 'Whether voids in the family will cut through the host element (wall, floor, ceiling) when placed in a project',
      },
      {
        type: 'fillblank',
        question: 'To remove a previously applied cut between a void and a solid, use Modify → Geometry → ___.',
        answer: 'Uncut',
      },
      {
        type: 'truefalse',
        question: 'Join Geometry and Cut Geometry perform the same operation — both use void forms to remove material from solids.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A furniture panel needs a rectangular recess on its front face. Which combination of forms achieves this correctly?',
        options: [
          'Two solid extrusions joined together',
          'A solid extrusion for the full panel, then a void extrusion for the recess, applied as a cut to the solid',
          'A blend transitioning from the full panel depth to the recessed depth',
          'A sweep following the perimeter of the recess',
        ],
        answer: 'A solid extrusion for the full panel, then a void extrusion for the recess, applied as a cut to the solid',
      },
      {
        type: 'mcq',
        question: 'An arched door opening (rectangular lower section + semicircular head) is achieved using:',
        options: [
          'Two separate void extrusions — one rectangular and one circular',
          'A void blend transitioning from rectangle to circle',
          'A single void extrusion with a composite sketch profile (rectangle at base + arc at top)',
          'A void revolve rotated 180 degrees',
        ],
        answer: 'A single void extrusion with a composite sketch profile (rectangle at base + arc at top)',
      },
      {
        type: 'truefalse',
        question: 'Multiple void forms can cut the same solid simultaneously in a family.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The Family Category and Parameters dialog property that must be checked for a wall-hosted door to automatically cut its opening is:',
        options: [
          'Shared',
          'Always Vertical',
          'Cut with Voids When Loaded',
          'Room Calculation Point',
        ],
        answer: 'Cut with Voids When Loaded',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-8: Loading & Testing Families
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-8',
    title: 'Loading & Testing Families',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'The fastest way to load a family being developed in the Family Editor into an open project is:',
        options: [
          'Save the .rfa file, switch to the project, then use Insert → Load Family',
          'Use the "Load into Project" button in the Family Editor',
          'Drag the .rfa file from Windows Explorer into the project',
          'Copy and paste geometry from the Family Editor into the project',
        ],
        answer: 'Use the "Load into Project" button in the Family Editor',
      },
      {
        type: 'truefalse',
        question: 'When reloading an updated family into a project using "Overwrite," all placed instances immediately update to reflect the changes.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A family looks correct at Fine detail level but shows complex geometry at Coarse that makes floor plans too heavy. What QA test identified this?',
        options: [
          'Test 1 — Place every type',
          'Test 2 — Check all detail levels',
          'Test 4 — Check parameters schedule correctly',
          'Test 6 — Check file size',
        ],
        answer: 'Test 2 — Check all detail levels',
      },
      {
        type: 'mcq',
        question: 'A project team reports that a custom equipment family does not appear in the Mechanical Equipment schedule. What is the most likely cause?',
        options: [
          'The family has too many types loaded',
          'The family was built from the wrong template and is in the wrong category — likely Generic Model instead of Mechanical Equipment',
          'The schedule filter is excluding the family',
          'The family needs to be reloaded with the "Overwrite" option',
        ],
        answer: 'The family was built from the wrong template and is in the wrong category — likely Generic Model instead of Mechanical Equipment',
      },
      {
        type: 'fillblank',
        question: 'When a family with the same name is already in the project and you load an updated version, you should choose ___ to replace all instances with the new version.',
        answer: 'Overwrite',
      },
      {
        type: 'truefalse',
        question: 'Deleting a type from a family that has placed instances in the project is a safe operation — Revit handles it automatically.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'During the QA test "Check file size," a simple single-component chair family adds 8MB to a test project after loading. What action is required?',
        options: [
          'Accept it — 8MB is normal for a furniture family',
          'The family has excessive geometry — investigate and reduce polygon count, likely by simplifying at Coarse detail level',
          'Run Purge Unused on the project to reduce the file size',
          'Use a linked file instead of loading the family directly',
        ],
        answer: 'The family has excessive geometry — investigate and reduce polygon count, likely by simplifying at Coarse detail level',
      },
      {
        type: 'mcq',
        question: 'The best place to record a family\'s version history (e.g., "v1.2 — 2025-06-15: Added fire rating parameter") is:',
        options: [
          'A separate Word document stored next to the .rfa file',
          'The family\'s Description or Comments field in the Family Category and Parameters dialog',
          'The filename (e.g., DoorFamily_v1.2.rfa)',
          'A parameter named "Version" added to every type',
        ],
        answer: 'The family\'s Description or Comments field in the Family Category and Parameters dialog',
      },
      {
        type: 'mcq',
        question: 'To edit a family that is already placed in a project, the correct workflow is:',
        options: [
          'Delete the instance, open the .rfa file separately, edit it, save, and reload',
          'Select a placed instance → right-click → Edit Family → make changes in Family Editor → Load into Project → Overwrite',
          'Select a placed instance → Properties → Edit Type → directly edit the geometry',
          'Use the Manage tab → Edit Family to access any family in the project',
        ],
        answer: 'Select a placed instance → right-click → Edit Family → make changes in Family Editor → Load into Project → Overwrite',
      },
      {
        type: 'truefalse',
        question: 'A family that passes all geometry tests in the Family Editor is guaranteed to work correctly in all project contexts without further testing.',
        answer: false,
      },
    ],
  },
];
