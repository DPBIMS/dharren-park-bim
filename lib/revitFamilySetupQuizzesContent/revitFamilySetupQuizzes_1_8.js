// ============================================================
// REVIT FAMILY SETUP — QUIZZES rfs-1 through rfs-8 (BEGINNER)
// File: lib/revitFamilySetupQuizzesContent/quizzes-1-8.js
// ============================================================

export const quizzes_1_8 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-1: Why Family Setup Matters
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-1',
    title: 'Why Family Setup Matters',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A team member builds a door family with a "FireRating" regular parameter. The BIM Manager cannot create a fire rating tag that reads this value. What is the root cause?',
        options: [
          'The parameter name uses incorrect capitalisation',
          'Tags can only read shared parameters and built-in Revit parameters — regular family parameters are not accessible to tags',
          'Fire rating tags require the parameter to be an Instance parameter, not Type',
          'The family was built from the wrong template',
        ],
        answer: 'Tags can only read shared parameters and built-in Revit parameters — regular family parameters are not accessible to tags',
      },
      {
        type: 'truefalse',
        question: 'A Family Template (.rft) is the same as a Revit Project Template (.rte) — both store project and family configuration together.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The DPA Family Library Infrastructure built in this course includes which combination of deliverables?',
        options: [
          'Only family geometry templates (.rft files)',
          'Seven base family templates, a shared parameter file, type catalogue standards, folder architecture, version control, and QA protocol',
          'Only the shared parameter file and QA checklist',
          'Twenty-four individual family files for specific building components',
        ],
        answer: 'Seven base family templates, a shared parameter file, type catalogue standards, folder architecture, version control, and QA protocol',
      },
      {
        type: 'mcq',
        question: 'A hotel fit-out project has 200 chairs, each with a downloaded manufacturer family at 180,000 polygons. No quality check was done. What is the most likely consequence?',
        options: [
          'The chairs appear with incorrect materials in renders',
          'The chairs cannot be tagged with a furniture tag',
          'The model takes extremely long to regenerate floor plans — the geometry is too dense for the scale',
          'The chairs do not appear in furniture schedules',
        ],
        answer: 'The model takes extremely long to regenerate floor plans — the geometry is too dense for the scale',
      },
      {
        type: 'fillblank',
        question: 'The file you create in Lesson 1 to accumulate all DPA family standards decisions throughout the course is named DPA-FamilyStandards-v1.0.___.',
        answer: 'txt',
      },
      {
        type: 'truefalse',
        question: 'The test environment for all families built in the Revit Family Setup course is the DPC project file created in the Revit Project Setup course.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'What is the primary difference between a Family Template (.rft) and Revit\'s built-in default templates (e.g., Door.rft shipped with Revit)?',
        options: [
          'The file extension is different for office templates',
          'Office templates are stored in a different folder than Revit\'s templates',
          'Office templates encode firm-specific parameter names, subcategories, shared parameter file links, and visibility conventions — Revit\'s defaults are generic starting points with none of these',
          'Office templates can only be used on one computer at a time',
        ],
        answer: 'Office templates encode firm-specific parameter names, subcategories, shared parameter file links, and visibility conventions — Revit\'s defaults are generic starting points with none of these',
      },
      {
        type: 'mcq',
        question: 'Five architects each build a WC fixture family with different parameter names for the same data (Width, W, Unit Width, Overall Width, Fixture Width). What problem does this cause in the project?',
        options: [
          'The families cannot be placed in the same floor plan view',
          'The plumbing fixture schedule has five different column headers for the same data — the QS cannot use it for procurement without manual correction',
          'The families conflict with each other in the Supabase database',
          'The void forms in each family cut differently through the floor slab',
        ],
        answer: 'The plumbing fixture schedule has five different column headers for the same data — the QS cannot use it for procurement without manual correction',
      },
      {
        type: 'truefalse',
        question: 'A well-set-up family library typically saves 40-60% of the time spent on family-related work on every subsequent project that uses it.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The DPA family library folder structure created in Lesson 1 has a "_Standards" folder. What does this folder contain?',
        options: [
          'Completed family .rfa files ready for use',
          'The shared parameter file, type catalogues, QA checklists, and changelogs — the governance documents for the library',
          'Autodesk installation files and license keys',
          'Revit project files (.rvt) used for family testing',
        ],
        answer: 'The shared parameter file, type catalogues, QA checklists, and changelogs — the governance documents for the library',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-2: Choosing the Right Base Template
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-2',
    title: 'Choosing the Right Base Template',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'An architect builds a recessed ceiling downlight family from Metric Generic Model.rft because "it was the first template in the list." What is the critical problem with this choice?',
        options: [
          'Generic Model families cannot have material parameters',
          'The family is in the wrong category — it will not appear in lighting schedules, cannot be tagged with a lighting tag, and exports as IfcBuildingElementProxy instead of IfcLightFixture',
          'Generic Model families cannot be ceiling-hosted',
          'The file size will be larger than a Lighting Fixture template',
        ],
        answer: 'The family is in the wrong category — it will not appear in lighting schedules, cannot be tagged with a lighting tag, and exports as IfcBuildingElementProxy instead of IfcLightFixture',
      },
      {
        type: 'truefalse',
        question: 'The category of a Revit family can be changed after the family is built by modifying a setting in Family Category and Parameters without any loss of work.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Which template should be used for a wall-hung basin family?',
        options: [
          'Metric Generic Model face based.rft',
          'Metric Plumbing Fixture.rft (wall-hosted variant)',
          'Metric Casework.rft',
          'Metric Specialty Equipment.rft',
        ],
        answer: 'Metric Plumbing Fixture.rft (wall-hosted variant)',
      },
      {
        type: 'mcq',
        question: 'The DPA template for a curtain wall infill panel family is:',
        options: [
          'Metric Window.rft — because panels are similar to windows',
          'Metric Generic Model face based.rft — any face-hosted template works for curtain walls',
          'Metric Curtain Wall Panel.rft — the dedicated template that works within the curtain wall grid system',
          'Metric Door.rft — because panels share the same hosting type as doors',
        ],
        answer: 'Metric Curtain Wall Panel.rft — the dedicated template that works within the curtain wall grid system',
      },
      {
        type: 'fillblank',
        question: 'Profile families for wall sweeps, railing handrails, stair nosings, and curtain wall mullions all use the same base template: Metric ___.rft.',
        answer: 'Profile',
      },
      {
        type: 'truefalse',
        question: 'When building a structural steel beam family, the correct template is Metric Structural Framing - Beams and Braces.rft — the beam length is set in this template as a family parameter.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The three questions that determine the correct template for any family are:',
        options: [
          'File size, polygon count, and detail level',
          'Category, hosting type, and whether a dedicated template exists',
          'Project scale, LOD level, and discipline',
          'Parameter count, type count, and nesting level',
        ],
        answer: 'Category, hosting type, and whether a dedicated template exists',
      },
      {
        type: 'mcq',
        question: 'A reception desk (a large built-in piece of furniture fixed to the floor) should use which template?',
        options: [
          'Metric Furniture.rft — all furniture uses this template',
          'Metric Casework.rft — built-in joinery and fixed furniture use the Casework category',
          'Metric Generic Model.rft — reception desks are too complex for a standard category',
          'Metric Specialty Equipment.rft — reception equipment is specialty',
        ],
        answer: 'Metric Casework.rft — built-in joinery and fixed furniture use the Casework category',
      },
      {
        type: 'truefalse',
        question: 'The DPA Template Map is a static document created once — it should not be updated when new family types are introduced to the library.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'When verifying that a newly opened template is the correct one, which check confirms the category and hosting type simultaneously?',
        options: [
          'Checking the file size in Windows Explorer',
          'Manage → Family Category and Parameters — shows both the category and whether it is wall-hosted, face-based, or non-hosted',
          'Counting the number of reference planes in the template',
          'Looking at the file extension (.rft vs. .rfa)',
        ],
        answer: 'Manage → Family Category and Parameters — shows both the category and whether it is wall-hosted, face-based, or non-hosted',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-3: Reference Plane Standards
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-3',
    title: 'Reference Plane Standards',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A reference plane named "CONST-Mirror Line" should have which Is Reference setting?',
        options: [
          'Strong Reference — so it snaps clearly in the project',
          'Weak Reference — for optional snapping',
          'Not a Reference — CONST- planes are family-internal and must never appear as project snap targets',
          'Center (Left/Right) — mirror lines are always centred',
        ],
        answer: 'Not a Reference — CONST- planes are family-internal and must never appear as project snap targets',
      },
      {
        type: 'truefalse',
        question: 'In a door family, the outer boundary reference planes (Left, Right) should have Is Reference set to "Strong Reference" so team members can dimension to the door frame edges in the project.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A door family has a reference plane named "Frame Inner L" that marks the inside face of the left door frame. What Is Reference setting is correct?',
        options: [
          'Not a Reference — internal planes should never snap',
          'Weak Reference — optional snapping for the frame edge',
          'Strong Reference — project teams dimension to door frame inner faces regularly',
          'Left — because the plane is on the left side',
        ],
        answer: 'Strong Reference — project teams dimension to door frame inner faces regularly',
      },
      {
        type: 'fillblank',
        question: 'The intersection of the Centre L/R and Centre F/B reference planes defines the family ___ — the point users click when placing the family in a project.',
        answer: 'origin',
      },
      {
        type: 'mcq',
        question: 'What is the correct Is Reference setting for the Centre L/R reference plane in most families?',
        options: [
          'Strong Reference',
          'Weak Reference',
          'Center (Left/Right)',
          'Not a Reference',
        ],
        answer: 'Center (Left/Right)',
      },
      {
        type: 'truefalse',
        question: 'It is acceptable to leave some reference planes unnamed in a family if they are construction planes that the family creator considers self-evident.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A team member opens a family and sees reference planes named "1", "2", "3", "4" with no descriptive names. What does this indicate about the family\'s quality?',
        options: [
          'The family follows a numeric naming convention which is an acceptable alternative',
          'The family does not meet DPA standards — unnamed or sequentially numbered planes cannot be maintained by anyone other than the original creator',
          'The family was built from a non-metric template',
          'The family requires a Revit upgrade to display names correctly',
        ],
        answer: 'The family does not meet DPA standards — unnamed or sequentially numbered planes cannot be maintained by anyone other than the original creator',
      },
      {
        type: 'mcq',
        question: 'In the DPA convention, which reference planes in a door family are pre-built by the Metric Door.rft template and should NOT be deleted?',
        options: [
          'Only the Centre L/R plane — everything else should be rebuilt',
          'Wall Face, Centre L/R, Centre F/B, and the Width extent planes — these define the correct door-to-wall relationship and flip controls',
          'Only the Width extent planes — the others are optional',
          'None — start entirely from scratch for maximum control',
        ],
        answer: 'Wall Face, Centre L/R, Centre F/B, and the Width extent planes — these define the correct door-to-wall relationship and flip controls',
      },
      {
        type: 'truefalse',
        question: 'A reference plane named "Connector-Cold Water" in a plumbing fixture family should be set to Is Reference = Strong Reference so engineers can dimension to the connection point.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The DPA door template adds "Frame Inner L" and "Frame Inner R" reference planes. What parameter drives their position?',
        options: [
          'Width — the door opening width drives the frame positions',
          'Frame Width — the distance from the opening edge to the inner face of the frame',
          'CONST-Frame Distance — a construction parameter',
          'Frame Inner L and R are fixed — they do not move with parameters',
        ],
        answer: 'Frame Width — the distance from the opening edge to the inner face of the frame',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-4: Parameter Naming Conventions
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-4',
    title: 'Parameter Naming Conventions',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A chair family has a parameter named "FabCol" that stores the fabric colour. Why does this violate the DPA parameter naming standard?',
        options: [
          'Colour is not a valid parameter type in Revit families',
          'It uses an abbreviation ("Fab" for Fabric, "Col" for Colour) — DPA standard requires full words: "Upholstery Material"',
          'The parameter should be named "Color" not "Col" to match the US English standard',
          'It should be a Type parameter, not an Instance parameter',
        ],
        answer: 'It uses an abbreviation ("Fab" for Fabric, "Col" for Colour) — DPA standard requires full words: "Upholstery Material"',
      },
      {
        type: 'truefalse',
        question: 'The "Fire Rating" parameter in all DPA families must be a Shared Parameter — not a regular family parameter — so it can be read by fire rating tags and mapped to IFC property sets.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A door family has two dimension parameters: the clear opening width and the overall frame width. Per DPA convention, the correct names are:',
        options: [
          'Width and Width2',
          'Opening and Frame',
          'Clear Width and Frame Width — specific names when multiple similar parameters exist',
          'W-Clear and W-Frame — abbreviated to save space in Properties',
        ],
        answer: 'Clear Width and Frame Width — specific names when multiple similar parameters exist',
      },
      {
        type: 'mcq',
        question: 'Which parameter group should "Specification Reference" be placed under in the Family Types dialog?',
        options: [
          'Dimensions',
          'Graphics',
          'Identity Data',
          'Materials and Finishes',
        ],
        answer: 'Identity Data',
      },
      {
        type: 'fillblank',
        question: 'Per the DPA naming convention, a Yes/No parameter that controls whether a vision panel is visible should be named: Show ___ Panel.',
        answer: 'Vision',
      },
      {
        type: 'truefalse',
        question: 'The "Asset ID" FM parameter in a mechanical equipment family can be a regular family parameter — it does not need to be a shared parameter because it only appears in schedules, not in tags.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The three DPA parameter naming rules are:',
        options: [
          'Short names, numbers only, no spaces',
          'Full words (not abbreviations), Title Case, specific when multiple similar parameters exist',
          'Uppercase only, underscore separators, discipline prefix',
          'Camel case, no spaces, discipline suffix',
        ],
        answer: 'Full words (not abbreviations), Title Case, specific when multiple similar parameters exist',
      },
      {
        type: 'mcq',
        question: 'A plumbing fixture family needs to record pipe connection sizes for cold water, hot water, and waste. Per DPA convention, the three parameter names are:',
        options: [
          'Pipe1, Pipe2, Pipe3',
          'CW, HW, WS',
          'Cold Water Pipe Size, Hot Water Pipe Size, Waste Pipe Size',
          'Water Pipe Size (one parameter handles all three)',
        ],
        answer: 'Cold Water Pipe Size, Hot Water Pipe Size, Waste Pipe Size',
      },
      {
        type: 'truefalse',
        question: 'Visibility toggle parameters (e.g., Show Vision Panel) should be placed in the Graphics parameter group.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The IFC export mapping file contains: "Fire Rating" → Pset_DoorCommon.FireRating. A door family uses a parameter named "fire_rating". What happens during IFC export?',
        options: [
          'The export succeeds — IFC mapping is case-insensitive',
          'The mapping fails — the parameter name does not match exactly, so FireRating in the IFC file will be empty',
          'Revit automatically corrects the parameter name during export',
          'The family exports correctly but shows a warning in the export log',
        ],
        answer: 'The mapping fails — the parameter name does not match exactly, so FireRating in the IFC file will be empty',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-5: Subcategory Standards
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-5',
    title: 'Subcategory Standards',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A project team wants to turn off all door swing arcs on a coordination plan without hiding door frames or leaves. What must be true for this to work?',
        options: [
          'The door family must have a Yes/No parameter named "Show Swing"',
          'The swing arc symbolic line must be assigned to a subcategory (e.g., DPA-Swing) that can be independently unchecked in Visibility/Graphics',
          'The coordination plan must use the DPC-FireCompartment view template',
          'The door families must have the swing arc set to Coarse visibility only',
        ],
        answer: 'The swing arc symbolic line must be assigned to a subcategory (e.g., DPA-Swing) that can be independently unchecked in Visibility/Graphics',
      },
      {
        type: 'truefalse',
        question: 'All subcategories in DPA families must be DPA-prefixed — built-in Revit subcategories (Glass, Frame/Mullion, Panel) should be replaced with DPA equivalents.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The door leaf solid in a DPA door family should be assigned to which subcategory?',
        options: [
          'DPA-Door (a custom subcategory for door leaves)',
          'Panel (the built-in Revit subcategory for door leaves)',
          'Frame/Mullion (which covers all door elements)',
          'No subcategory — the category default is sufficient for door leaves',
        ],
        answer: 'Panel (the built-in Revit subcategory for door leaves)',
      },
      {
        type: 'mcq',
        question: 'In a lighting fixture family, the ceiling trim ring that is visible in a reflected ceiling plan at Medium detail level should be assigned to:',
        options: [
          'DPA-Housing (the main luminaire body)',
          'DPA-LightSource (the lamp element)',
          'DPA-Aperture (the ceiling trim ring — visible at Medium and Fine)',
          'Glass (the built-in glazing subcategory)',
        ],
        answer: 'DPA-Aperture (the ceiling trim ring — visible at Medium and Fine)',
      },
      {
        type: 'fillblank',
        question: 'The subcategory naming convention for all DPA-created subcategories uses the prefix ___ to distinguish them from Revit built-in subcategories.',
        answer: 'DPA-',
      },
      {
        type: 'truefalse',
        question: 'Geometry left on the category default (no subcategory assigned) can still be independently controlled in the project\'s Visibility/Graphics dialog through the main category toggle.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Where are subcategories created for a family?',
        options: [
          'In the project VG dialog → Add Subcategory button',
          'In the family editor: Manage tab → Object Styles → Model Objects → select category → New subcategory',
          'In the Family Types dialog → New Parameter of type Subcategory',
          'Subcategories are created automatically when geometry is assigned to a non-existent subcategory',
        ],
        answer: 'In the family editor: Manage tab → Object Styles → Model Objects → select category → New subcategory',
      },
      {
        type: 'mcq',
        question: 'A furniture family has its frame geometry assigned to DPA-Frame, upholstery to DPA-Upholstery, and legs to DPA-Leg. The work surface is left on the category default. What is the problem?',
        options: [
          'The work surface cannot have a material parameter assigned',
          'The work surface cannot be independently controlled in VG — it can only be hidden by turning off the entire Furniture category',
          'The work surface will not render correctly in 3D views',
          'There is no problem — leaving secondary elements on the category default is acceptable',
        ],
        answer: 'The work surface cannot be independently controlled in VG — it can only be hidden by turning off the entire Furniture category',
      },
      {
        type: 'truefalse',
        question: 'The DPA-Swing subcategory is created with a grey dashed line style to visually differentiate it from solid construction lines — it represents an annotation symbol, not physical geometry.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'After loading a door family into the DPC project, how do you verify that the DPA-Swing subcategory was correctly created and assigned?',
        options: [
          'Check the family file size — larger size indicates subcategories were created',
          'Open VG dialog → Model Categories → Doors → expand → DPA-Swing should appear in the subcategory list',
          'Right-click the door instance → Properties → check the Subcategory field',
          'Open the Family Types dialog in the project and look for DPA-Swing in the parameter list',
        ],
        answer: 'Open VG dialog → Model Categories → Doors → expand → DPA-Swing should appear in the subcategory list',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-6: Visibility Control Standards
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-6',
    title: 'Visibility Control Standards',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A floor plan at 1:100 (Coarse detail level) shows a sofa family with full 3D cushion geometry, leg detail, and armrest profiles visible. What is the professional fix?',
        options: [
          'Reduce the polygon count of the 3D geometry',
          'Set the detailed 3D geometry to Coarse visibility = unchecked, and add 2D Symbolic Lines in the Ref. Level plan view for the Coarse plan representation',
          'Change the view scale to 1:50 so Medium detail level applies',
          'Apply a Filled Region over the sofa in every Coarse plan view',
        ],
        answer: 'Set the detailed 3D geometry to Coarse visibility = unchecked, and add 2D Symbolic Lines in the Ref. Level plan view for the Coarse plan representation',
      },
      {
        type: 'truefalse',
        question: 'Per DPA visibility standards, a recessed ceiling downlight should show nothing at Coarse detail level — the ceiling grid dominates at 1:100 and fixture geometry adds noise without information.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The DPA visibility matrix for a door family specifies: Medium = Leaf + Frame + Swing. What does this mean for hardware (handles, hinges)?',
        options: [
          'Hardware is visible at Medium — it is part of the main door form',
          'Hardware is hidden at Medium — only the door leaf, frame, and swing arc show at Medium detail level',
          'Hardware visibility at Medium depends on whether the hardware is a nested family',
          'Hardware follows the Coarse setting — if the door is visible, hardware is visible',
        ],
        answer: 'Hardware is hidden at Medium — only the door leaf, frame, and swing arc show at Medium detail level',
      },
      {
        type: 'mcq',
        question: 'Why is hiding complex 3D geometry at Coarse a performance requirement, not just aesthetic?',
        options: [
          'Coarse detail level does not support 3D geometry rendering',
          'A floor plan with 200 chairs each showing 8,000 polygons at Coarse regenerates extremely slowly — visibility control is a model performance tool',
          'Revit applies different LOD calculations at Coarse that require simpler geometry',
          'Complex geometry at Coarse causes Revit warnings about model health',
        ],
        answer: 'A floor plan with 200 chairs each showing 8,000 polygons at Coarse regenerates extremely slowly — visibility control is a model performance tool',
      },
      {
        type: 'fillblank',
        question: 'The DPA visibility documentation standard requires that every published family type documents its visibility behaviour in the type ___ field.',
        answer: 'Comments',
      },
      {
        type: 'truefalse',
        question: 'In the DPA visibility standard, structural column families show a filled cross-section at Coarse detail level — this is an exception to the "symbolic lines only at Coarse" rule.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The "Symbolic Line rule" states that for furniture and equipment families, 3D geometry should be set to "not visible in plan/RCP views" and 2D Symbolic Lines added in the Ref. Level view. What problem does this solve?',
        options: [
          'It reduces file size by replacing 3D with 2D data',
          'It avoids the distorted appearance of complex 3D furniture geometry sliced at the plan cut height — Symbolic Lines provide a clean, conventional plan representation',
          'It allows furniture to appear in reflected ceiling plans',
          'It enables the furniture to participate in room area calculations',
        ],
        answer: 'It avoids the distorted appearance of complex 3D furniture geometry sliced at the plan cut height — Symbolic Lines provide a clean, conventional plan representation',
      },
      {
        type: 'mcq',
        question: 'A window family at Fine detail level should show:',
        options: [
          'Symbolic lines only — the same as Coarse',
          'Frame outline and glazing panel only — the same as Medium',
          'Full frame geometry, glazing, sill projection, and head detail geometry',
          'Only the glass panel — the frame is not shown at Fine to avoid clutter',
        ],
        answer: 'Full frame geometry, glazing, sill projection, and head detail geometry',
      },
      {
        type: 'truefalse',
        question: 'The three Coarse/Medium/Fine checkboxes in a family element\'s Properties panel control visibility globally — the same setting applies in all view types (plan, elevation, section, 3D).',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A door swing arc (Symbolic Line assigned to DPA-Swing subcategory) is set to: Coarse = on, Medium = on, Fine = off. A team member says it should be Fine = on too. What is the DPA reasoning for Fine = off?',
        options: [
          'Swing arcs are not needed in the project because door tags replace them',
          'At Fine detail level (1:20 and below), the actual 3D door leaf edge provides sufficient geometric information — the swing arc annotation is redundant and clutters a detail drawing',
          'Symbolic Lines cannot be displayed at Fine detail level in Revit',
          'The DPA-Swing subcategory is set to hide at Fine by default and cannot be overridden',
        ],
        answer: 'At Fine detail level (1:20 and below), the actual 3D door leaf edge provides sufficient geometric information — the swing arc annotation is redundant and clutters a detail drawing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-7: Material Parameter Standards
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-7',
    title: 'Material Parameter Standards',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A hotel project has the same chair type (Type A) specified in blue fabric for guest rooms and grey fabric for corridors. Which material parameter setup correctly supports this?',
        options: [
          'Upholstery Material as a Type parameter — create two types: "Type A Blue" and "Type A Grey"',
          'Upholstery Material as an Instance parameter — the same type can have different per-instance material values',
          'Two separate families: Chair-TypeA-Blue.rfa and Chair-TypeA-Grey.rfa',
          'A Yes/No parameter that switches between two fixed materials',
        ],
        answer: 'Upholstery Material as an Instance parameter — the same type can have different per-instance material values',
      },
      {
        type: 'truefalse',
        question: 'For a standard concrete structural column family, the DPA standard recommends using "By Category" material assignment — the project\'s Object Styles structural concrete material is always correct.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A door family\'s Frame Material parameter has no default value set. A team member loads the family into a project. What does the frame look like?',
        options: [
          'The frame shows in the project\'s default Doors category material from Object Styles',
          'The frame shows as bright magenta — Revit highlights missing materials',
          'The family fails to load — material parameters require a default value to load',
          'The frame is invisible — no material means no display',
        ],
        answer: 'The frame shows in the project\'s default Doors category material from Object Styles',
      },
      {
        type: 'mcq',
        question: 'The priority hierarchy for material display in a family element is (from highest to lowest):',
        options: [
          'By Category → Subcategory Material → Material Parameter',
          'Material Parameter → Subcategory Material → By Category',
          'Subcategory Material → Material Parameter → By Category',
          'All three apply simultaneously — Revit blends them',
        ],
        answer: 'Material Parameter → Subcategory Material → By Category',
      },
      {
        type: 'fillblank',
        question: 'Per DPA convention, the material parameter for the main body of a chair (seat, back structure) is named: ___ Material.',
        answer: 'Primary',
      },
      {
        type: 'truefalse',
        question: 'Embedding custom texture bitmap files inside a family .rfa is the recommended DPA approach for distributing families with custom material appearances.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A glazed partition family has two components: a glass panel (always clear glazing, never changes) and an aluminium frame (varies by project specification). Which material approach is correct for each?',
        options: [
          'Both use Material Parameters — maximum flexibility for all components',
          'Both use By Category — project Object Styles controls everything',
          'Glass: explicit fixed material (always ARCH-Glazing-Clear). Frame: Material Parameter named "Frame Material" for project-specific selection',
          'Glass: By Category. Frame: explicit fixed material (always aluminium)',
        ],
        answer: 'Glass: explicit fixed material (always ARCH-Glazing-Clear). Frame: Material Parameter named "Frame Material" for project-specific selection',
      },
      {
        type: 'mcq',
        question: 'The "Structural Material" parameter on structural column families is a Type parameter. Why is this important beyond visual display?',
        options: [
          'Type parameters are required for all structural families by ISO 19650',
          'It drives the analytical model material that structural analysis software (ETABS, Robot) reads for load calculations — getting this wrong produces incorrect engineering results',
          'It enables the column to appear in material takeoff schedules',
          'Type parameters process faster than Instance parameters in large structural models',
        ],
        answer: 'It drives the analytical model material that structural analysis software (ETABS, Robot) reads for load calculations — getting this wrong produces incorrect engineering results',
      },
      {
        type: 'truefalse',
        question: 'Material parameters should be placed under the "Materials and Finishes" parameter group in the Family Types dialog.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A material takeoff schedule shows the total area of upholstery fabric across all chairs in a project. This only works if:',
        options: [
          'The chairs use By Category material — only category materials appear in takeoffs',
          'The chairs have a Material Parameter (Upholstery Material) assigned to the upholstery geometry — takeoffs can report area per material value per element instance',
          'The chair family is a Shared nested family inside a workstation assembly',
          'The chairs are in the Furniture category — all Furniture category elements appear automatically in material takeoffs',
        ],
        answer: 'The chairs have a Material Parameter (Upholstery Material) assigned to the upholstery geometry — takeoffs can report area per material value per element instance',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-8: Loading & Testing Protocol
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-8',
    title: 'Loading & Testing Protocol',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A light fitting family looks completely correct in the Family Editor — geometry, parameters, and materials all check out. It fails Section 2 of the DPA QA checklist. What is the most likely issue?',
        options: [
          'The file size exceeds the target threshold',
          'The family category is Generic Model instead of Lighting Fixtures — correct in appearance but wrong for scheduling, tagging, and IFC classification',
          'The reference planes are not named per DPA convention',
          'The family has no material parameters assigned',
        ],
        answer: 'The family category is Generic Model instead of Lighting Fixtures — correct in appearance but wrong for scheduling, tagging, and IFC classification',
      },
      {
        type: 'truefalse',
        question: 'A family that passes all checks in the Family Editor is guaranteed to work correctly in the project — Section 6 (Project Testing) of the QA checklist is optional for experienced family creators.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Section 7 (Performance) of the DPA QA checklist requires placing 20 instances of the family in the project. Why 20 instances specifically?',
        options: [
          'ISO 19650 requires 20-instance performance testing for all BIM content',
          'A single instance rarely shows performance problems — placing 20 instances at realistic project density reveals whether the family causes noticeable slowdown that will impact the full project',
          '20 is the maximum number of instances Revit can test simultaneously',
          'Performance testing only applies to families placed more than 20 times per project',
        ],
        answer: 'A single instance rarely shows performance problems — placing 20 instances at realistic project density reveals whether the family causes noticeable slowdown that will impact the full project',
      },
      {
        type: 'mcq',
        question: 'The DPA QA checklist file size target for a simple family (basic furniture, simple fixtures) is:',
        options: [
          'Under 100KB',
          'Under 500KB',
          'Under 2MB',
          'Under 5MB',
        ],
        answer: 'Under 500KB',
      },
      {
        type: 'fillblank',
        question: 'Section 4 of the DPA QA checklist requires that Fire Rating and FM Asset parameters are ___ Parameters, not regular family parameters.',
        answer: 'Shared',
      },
      {
        type: 'truefalse',
        question: 'The DPA QA checklist should be completed by the family creator only — BIM Manager review (second set of eyes) is not required before a family enters the library.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A ceiling-hosted recessed light fitting loads into the project without errors. When placed on a ceiling, it does not cut a hole in the ceiling. Which QA section catches this failure and what is the fix?',
        options: [
          'Section 1 (File) — the file size is too large. Fix: purge unused content',
          'Section 5 (Geometry) — void forms are not cutting correctly. Fix: check "Cut with Voids When Loaded" in Family Category and Parameters, and verify the void is correctly sized and directed',
          'Section 3 (Reference Planes) — the Is Reference settings are wrong. Fix: change to Strong Reference',
          'Section 7 (Performance) — the ceiling is too thick. Fix: resize the void depth',
        ],
        answer: 'Section 5 (Geometry) — void forms are not cutting correctly. Fix: check "Cut with Voids When Loaded" in Family Category and Parameters, and verify the void is correctly sized and directed',
      },
      {
        type: 'mcq',
        question: 'A family creator notices the DPC project file size jumps by 15MB after loading one instance of a new furniture family. Removing the instance does not reduce the file size. What does this indicate?',
        options: [
          'The furniture family has too many types — delete unused types',
          'A custom texture bitmap is embedded in the family — it loaded into the project and stays even after the instance is deleted. The texture must be removed from the family',
          'The furniture category has accumulated too many elements in the project',
          'The family was loaded into the wrong workset',
        ],
        answer: 'A custom texture bitmap is embedded in the family — it loaded into the project and stays even after the instance is deleted. The texture must be removed from the family',
      },
      {
        type: 'truefalse',
        question: 'Section 6 of the QA checklist requires testing IFC export — verifying the family exports as the correct IFC entity (IfcDoor, IfcFurniture, etc.) not as IfcBuildingElementProxy.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The DPA QA Checklist document is stored at:',
        options: [
          'C:\\DharrenPark\\FamilyLibrary\\05_Templates\\Current\\',
          'C:\\DharrenPark\\FamilyLibrary\\_Standards\\QAChecklists\\DPA-FamilyQAChecklist-v1.0.txt',
          'C:\\DharrenPark\\Project\\BIM\\WIP\\DPA\\ARCH\\',
          'C:\\DharrenPark\\FamilyLibrary\\00_Architecture\\Doors\\',
        ],
        answer: 'C:\\DharrenPark\\FamilyLibrary\\_Standards\\QAChecklists\\DPA-FamilyQAChecklist-v1.0.txt',
      },
    ],
  },
];
