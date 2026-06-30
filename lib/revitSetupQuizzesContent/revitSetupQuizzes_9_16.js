// ============================================================
// REVIT PROJECT SETUP — QUIZZES ps-9 through ps-16 (INTERMEDIATE)
// File: lib/revitSetupQuizzesContent/quizzes-9-16.js
// ============================================================

export const quizzes_9_16 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-9: Line Weights, Styles & Patterns
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-9',
    title: 'Line Weights, Styles & Patterns',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'How many line weight numbers does Revit provide for mapping to pen thicknesses?',
        options: ['8', '12', '16', '24'],
        answer: '16',
      },
      {
        type: 'truefalse',
        question: 'Revit\'s Model Line Weights can be set to different thicknesses at different drawing scales — a line weight 5 wall at 1:100 can print at a different thickness than the same line weight 5 wall at 1:50.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'Which line weight number should typically be assigned to cut section lines (walls cut in plan) to maintain correct drawing hierarchy?',
        options: [
          'The lightest weight (LW 1) — cuts should be subtle',
          'The heaviest weights (LW 6-7) — cuts are the most important lines in the drawing',
          'The same weight as annotation (LW 3) — for visual balance',
          'LW 4 — the medium weight for all elements',
        ],
        answer: 'The heaviest weights (LW 6-7) — cuts are the most important lines in the drawing',
      },
      {
        type: 'mcq',
        question: 'What is the most reliable method to verify that line weight calibration is correct?',
        options: [
          'Check the values look reasonable on screen at 1:1 zoom',
          'Compare the values against the Autodesk defaults',
          'Print a test sheet and compare against a printed reference drawing',
          'Run a line weight report from the Manage tab',
        ],
        answer: 'Print a test sheet and compare against a printed reference drawing',
      },
      {
        type: 'fillblank',
        question: 'Fill patterns that maintain the same printed size regardless of view scale are called ___ patterns.',
        answer: 'Drafting',
      },
      {
        type: 'mcq',
        question: 'A standard section convention for representing concrete in cut section uses which fill pattern?',
        options: [
          'Diagonal lines close spacing (crosshatch)',
          'Zigzag pattern',
          'Horizontal lines wide spacing',
          'Solid fill (black)',
        ],
        answer: 'Diagonal lines close spacing (crosshatch)',
      },
      {
        type: 'truefalse',
        question: 'Line patterns (dash sequences) must be created before they can be assigned to Line Styles.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A brick surface pattern on a wall elevation should use which pattern type to show the correct number of bricks at any drawing scale?',
        options: [
          'Drafting pattern — so it always prints the same size',
          'Model pattern — set to real brick dimensions (225mm x 75mm) so it scales with the model',
          'Solid pattern — bricks are represented by render assets only',
          'Annotation pattern — so it links to the wall schedule',
        ],
        answer: 'Model pattern — set to real brick dimensions (225mm x 75mm) so it scales with the model',
      },
      {
        type: 'mcq',
        question: 'Which of the following Line Styles is most appropriate for demolished elements in a renovation project?',
        options: [
          'Thin Lines, solid, black',
          'Wide Lines, solid, black',
          'Long dash, medium weight, grey',
          'Dotted, light weight, red',
        ],
        answer: 'Long dash, medium weight, grey',
      },
      {
        type: 'truefalse',
        question: 'Annotation Line Weights in Revit are scale-dependent — they print at different thicknesses at different view scales, just like Model Line Weights.',
        answer: false,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-10: Object Styles — Category Defaults
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-10',
    title: 'Object Styles — Category Defaults',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'In Revit\'s visual override precedence chain, which takes the highest priority?',
        options: [
          'Object Styles',
          'VG Category Override',
          'VG Filter Override',
          'Element Override (right-click → Override Graphics in View)',
        ],
        answer: 'Element Override (right-click → Override Graphics in View)',
      },
      {
        type: 'truefalse',
        question: 'Object Styles settings apply to all views in the project by default — VG overrides are needed only for exceptions to the baseline.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The "Cut" line weight in Object Styles for a wall category controls the line thickness when:',
        options: [
          'The wall is seen in perspective view',
          'The wall is sliced through by the view plane in a floor plan or section',
          'The wall intersects another wall at a T-junction',
          'The wall is selected and highlighted',
        ],
        answer: 'The wall is sliced through by the view plane in a floor plan or section',
      },
      {
        type: 'mcq',
        question: 'Which element category should have the heaviest cut line weight in an architectural floor plan?',
        options: [
          'Furniture',
          'Doors',
          'Structural Columns',
          'Text Notes',
        ],
        answer: 'Structural Columns',
      },
      {
        type: 'fillblank',
        question: 'Expanding a category in Object Styles reveals ___, which allow independent line weight and pattern settings for different aspects of the same element category.',
        answer: 'subcategories',
      },
      {
        type: 'mcq',
        question: 'A linked DWG survey file is covering the Revit model with many colored layers. What is the most efficient fix?',
        options: [
          'Delete the DWG link and re-import it with fewer layers',
          'In VG → Imported Categories tab, override the linked DWG to halftone grey, LW 1 for all subcategories',
          'Explode the DWG and delete the unwanted layers',
          'Change the DWG colors to black in AutoCAD before linking',
        ],
        answer: 'In VG → Imported Categories tab, override the linked DWG to halftone grey, LW 1 for all subcategories',
      },
      {
        type: 'truefalse',
        question: 'Using Insert → Import CAD (rather than Link CAD) is recommended for survey drawings that will need to be updated during the project.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'For furniture elements in an architectural floor plan, which Object Styles configuration is most appropriate?',
        options: [
          'Heavy cut weight (LW 6-7) — furniture defines space',
          'Light cut and projection weights (LW 1-2) — furniture is secondary to architecture',
          'Same weight as walls — furniture and walls are equally important',
          'No weight assigned — furniture visibility is controlled by VG only',
        ],
        answer: 'Light cut and projection weights (LW 1-2) — furniture is secondary to architecture',
      },
      {
        type: 'mcq',
        question: 'Object Styles has four tabs. Which tab controls the appearance of Dimension strings, Room Tags, and Section Marks?',
        options: [
          'Model Objects',
          'Analytical Model Objects',
          'Annotation Objects',
          'Imported Objects',
        ],
        answer: 'Annotation Objects',
      },
      {
        type: 'truefalse',
        question: 'The "Material" column in Object Styles sets a default material for element categories that have no material assigned elsewhere.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-11: Materials Library Setup
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-11',
    title: 'Materials Library Setup',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A wall section shows all layers with the same diagonal hatch pattern. What is the most likely cause?',
        options: [
          'The wall type has incorrect layer thicknesses',
          'The cut patterns for the different layer materials have not been set correctly in the Material Browser',
          'The view\'s Detail Level is set to Coarse',
          'Object Styles is overriding the material patterns',
        ],
        answer: 'The cut patterns for the different layer materials have not been set correctly in the Material Browser',
      },
      {
        type: 'truefalse',
        question: 'A facing brick wall layer in a compound wall assembly should be exactly 102.5mm thick to represent a standard UK brick.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'Which Material Browser tab controls how a material appears in a photorealistic render (texture, reflectivity, roughness)?',
        options: ['Identity', 'Graphics', 'Appearance', 'Physical'],
        answer: 'Appearance',
      },
      {
        type: 'mcq',
        question: 'A material takeoff schedule for walls shows incorrect volumes for the insulation layer. What is the most likely cause?',
        options: [
          'The insulation material is not assigned the correct Class in the Identity tab',
          'The wall layer thickness for the insulation does not match the actual specification',
          'Material Takeoff schedules cannot read insulation layers',
          'The view\'s Phase Filter is excluding the insulation',
        ],
        answer: 'The wall layer thickness for the insulation does not match the actual specification',
      },
      {
        type: 'fillblank',
        question: 'In the Material Browser Graphics tab, the pattern shown when the material is sliced through in a floor plan or section is called the ___ pattern.',
        answer: 'cut',
      },
      {
        type: 'mcq',
        question: 'Which naming format best follows a consistent hierarchical materials library convention?',
        options: [
          'Red Brick, Blue Brick, Engineering Brick',
          'Brick - Red Facing, Brick - Blue Engineering, Brick - Stock',
          'Masonry - Brick - Red Facing, Masonry - Brick - Engineering Blue, Masonry - Brick - Stock',
          'Material 01, Material 02, Material 03',
        ],
        answer: 'Masonry - Brick - Red Facing, Masonry - Brick - Engineering Blue, Masonry - Brick - Stock',
      },
      {
        type: 'truefalse',
        question: 'A cavity (air gap) in a wall assembly should be assigned a material with an empty (no fill) cut pattern to correctly represent the void in section drawings.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The most sustainable way to share a firm\'s materials library across all projects is:',
        options: [
          'Email the materials file to each new project team at project start',
          'Keep the materials in the office template — every project starts with them pre-loaded',
          'Load materials from the Autodesk default library for every project',
          'Let each project team build their own materials from scratch',
        ],
        answer: 'Keep the materials in the office template — every project starts with them pre-loaded',
      },
      {
        type: 'mcq',
        question: 'A project materials library for a typical commercial building should contain approximately how many materials?',
        options: ['5-10', '40-80', '200-300', '500+'],
        answer: '40-80',
      },
      {
        type: 'truefalse',
        question: 'Team members should be free to create new materials during modeling without BIM Manager approval to maintain workflow speed.',
        answer: false,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-12: Text Types & Dimension Styles
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-12',
    title: 'Text Types & Dimension Styles',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A project uses Arial for most text but one team member applies Calibri to some notes. When the drawings are printed, what is the most likely visual result?',
        options: [
          'No visible difference — Revit normalizes fonts on print',
          'Inconsistent text appearance — some notes look different from others, reducing drawing quality',
          'Revit will flag a warning and prevent printing',
          'Calibri text converts to Arial automatically on PDF export',
        ],
        answer: 'Inconsistent text appearance — some notes look different from others, reducing drawing quality',
      },
      {
        type: 'truefalse',
        question: 'Text Types in Revit control font, size, bold, and background (opaque or transparent) — these settings apply to all text notes using that type.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'Room tags should use which text background setting so they do not obscure floor hatch patterns beneath them?',
        options: ['Opaque', 'Transparent', 'Semi-transparent', 'None'],
        answer: 'Transparent',
      },
      {
        type: 'mcq',
        question: 'Which Dimension Type parameter controls the small mark at the end of each witness line (the diagonal slash or arrow)?',
        options: ['Witness Line Extension', 'Tick Mark', 'Dimension Line Snap Distance', 'Text Background'],
        answer: 'Tick Mark',
      },
      {
        type: 'fillblank',
        question: 'Spot Elevation annotations for finished floor levels should typically show values in ___ with 3 decimal places (e.g., 3.600) rather than millimeters.',
        answer: 'meters',
      },
      {
        type: 'mcq',
        question: 'A Dimension Type is set to "Use Project Settings" for Units Format. What does this mean?',
        options: [
          'The dimension will show values in the default Autodesk imperial format',
          'The dimension inherits the unit format from Manage → Project Units, ensuring consistency with all other dimensions',
          'The dimension will show both metric and imperial values simultaneously',
          'The dimension format is locked and cannot be changed per view',
        ],
        answer: 'The dimension inherits the unit format from Manage → Project Units, ensuring consistency with all other dimensions',
      },
      {
        type: 'truefalse',
        question: 'An Ordinate Dimension type shows cumulative distances from a single baseline rather than individual span lengths between adjacent elements.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A project requires both standard plan dimensions (diagonal tick, 2.0mm text) and structural setting-out dimensions (arrow head, 2.5mm text). What is the correct approach?',
        options: [
          'Use one dimension type and manually override tick marks per dimension',
          'Create two separate Dimension Types — one for each use case — and apply the appropriate type when placing',
          'Use the same dimension type and change the text size in the Properties panel after placing',
          'Structural dimensions should be placed as Text Notes, not dimensions',
        ],
        answer: 'Create two separate Dimension Types — one for each use case — and apply the appropriate type when placing',
      },
      {
        type: 'mcq',
        question: 'Which tag families should be pre-loaded at project setup (select the most complete answer)?',
        options: [
          'Door Tag and Window Tag only',
          'Door Tag, Window Tag, and Room Tag',
          'Door Tag, Window Tag, Room Tag, Area Tag, Section Head, Callout Head, Elevation Mark, North Arrow, Scale Bar',
          'Only tags for elements that will definitely be modeled in the first week',
        ],
        answer: 'Door Tag, Window Tag, Room Tag, Area Tag, Section Head, Callout Head, Elevation Mark, North Arrow, Scale Bar',
      },
      {
        type: 'truefalse',
        question: 'A font used in a Text Type must be installed on every team member\'s computer — if a team member is missing the font, Revit will substitute a different font and change the drawing appearance.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-13: View Templates — Building the Full Set
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-13',
    title: 'View Templates — Building the Full Set',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the most efficient way to create a new View Template from a view you have already configured correctly?',
        options: [
          'Manually set all parameters in the View Templates dialog from scratch',
          'View tab → View Templates → Create Template from Current View',
          'Duplicate an existing template and rename it',
          'Right-click the view in the Project Browser → Save as Template',
        ],
        answer: 'View tab → View Templates → Create Template from Current View',
      },
      {
        type: 'truefalse',
        question: 'View Scale should always be locked (included) in a View Template so all views using the template print at the same scale.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A team member tries to turn on furniture visibility in a view but the change reverts immediately. What is the most likely cause?',
        options: [
          'The furniture workset is closed',
          'The view has an assigned View Template that locks the VG settings',
          'The furniture families are not loaded in the project',
          'The view is a Dependent view and cannot be changed independently',
        ],
        answer: 'The view has an assigned View Template that locks the VG settings',
      },
      {
        type: 'mcq',
        question: 'You need to update the MEP visibility setting in 60 floor plan views simultaneously. All views have the same View Template assigned. What is the correct action?',
        options: [
          'Open each view and change the VG setting individually',
          'Change the MEP visibility setting in the View Template — all 60 views update automatically',
          'Create a new View Template and reassign all 60 views',
          'Use the batch VG override tool to update all views',
        ],
        answer: 'Change the MEP visibility setting in the View Template — all 60 views update automatically',
      },
      {
        type: 'fillblank',
        question: 'To apply a View Template to all floor plan views simultaneously, select them in the Project Browser using Ctrl+Click, right-click, and choose ___.',
        answer: 'Apply View Template',
      },
      {
        type: 'mcq',
        question: 'Which parameters should be EXCLUDED (left flexible) in a standard architectural floor plan View Template?',
        options: [
          'V/G Overrides Model, Visual Style, and Detail Level',
          'View Range, View Scale, and Underlay',
          'Discipline, Parts Visibility, and V/G Overrides Annotation',
          'All parameters should be locked for maximum consistency',
        ],
        answer: 'View Range, View Scale, and Underlay',
      },
      {
        type: 'truefalse',
        question: 'A "Coordination" View Template for multi-discipline review should show all MEP categories that the standard architectural plan template hides.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A view with no View Template assigned is:',
        options: [
          'Safer to work with because no parameters are locked',
          'An uncontrolled view — at risk of drifting from the drawing standard',
          'Automatically assigned the default Autodesk view template',
          'Prevented from being placed on a sheet until a template is assigned',
        ],
        answer: 'An uncontrolled view — at risk of drifting from the drawing standard',
      },
      {
        type: 'mcq',
        question: 'A presentation plan template (Pres-Plan-Coloured) should differ from a construction plan template (Arch-Plan-GA-100) in which way?',
        options: [
          'The presentation template shows furniture and uses Shaded visual style; the construction template hides furniture and uses Hidden Line',
          'The presentation template has fewer annotation categories visible',
          'The presentation template uses a different Discipline setting',
          'The presentation template locks the View Scale to 1:200 for overview plans',
        ],
        answer: 'The presentation template shows furniture and uses Shaded visual style; the construction template hides furniture and uses Hidden Line',
      },
      {
        type: 'truefalse',
        question: 'Before building any View Templates, creating a View Template Matrix (a document listing every template name, scale, and use) is recommended best practice.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-14: Browser Organization & View Naming
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-14',
    title: 'Browser Organization & View Naming',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'In the recommended Browser Organization scheme, what is the first "Group by" parameter?',
        options: ['View Type', 'View Scale', 'Discipline', 'Level'],
        answer: 'Discipline',
      },
      {
        type: 'truefalse',
        question: 'A Browser Organization scheme moves view files to different folders on disk when applied.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Using the naming convention "L01 Floor Plan - General Arrangement," what does "L01" represent?',
        options: [
          'The first linked model level',
          'Level 01 — First Floor',
          'Layout 01 — the first plan produced',
          'Layer 01 in the drawing hierarchy',
        ],
        answer: 'Level 01 — First Floor',
      },
      {
        type: 'mcq',
        question: 'Internal working views that should never be placed on sheets should be prefixed with what text to separate them from production views?',
        options: ['DRAFT-', '[WORKING]', 'WIP_', 'INTERNAL:'],
        answer: '[WORKING]',
      },
      {
        type: 'fillblank',
        question: 'View names flow into ___ titles on sheets when viewports are placed — making correct naming critical from day one.',
        answer: 'viewport',
      },
      {
        type: 'mcq',
        question: 'Which level code should be used for views that show the entire building (building sections, overall elevations)?',
        options: ['ALL', 'GEN', 'XX', 'ZZ'],
        answer: 'XX',
      },
      {
        type: 'truefalse',
        question: 'Multiple Browser Organization schemes can be created and switched between — useful for changing between "by Discipline" and "by Sheet" views of the same project.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'What is the primary purpose of assigning a Scope Box to a floor plan view?',
        options: [
          'To set the view\'s print area',
          'To constrain the view\'s crop region to the scope box extents — ensuring consistent extents across multiple views of the same area',
          'To control which team member can edit the view',
          'To link the view to a specific sheet automatically',
        ],
        answer: 'To constrain the view\'s crop region to the scope box extents — ensuring consistent extents across multiple views of the same area',
      },
      {
        type: 'mcq',
        question: 'When creating default views at project setup for an 8-level building, which view type should be created for every occupied floor level?',
        options: [
          'One 3D view per level',
          'One General Arrangement floor plan per level, plus a Reflected Ceiling Plan per level',
          'One floor plan and one elevation per level',
          'Only one overall floor plan covering all levels',
        ],
        answer: 'One General Arrangement floor plan per level, plus a Reflected Ceiling Plan per level',
      },
      {
        type: 'truefalse',
        question: 'Scope Boxes are visible in printed drawings and help contractors understand zone boundaries.',
        answer: false,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-15: Loading & Organizing Families
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-15',
    title: 'Loading & Organizing Families',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A downloaded door family is 12MB in file size. What concern does this raise?',
        options: [
          'No concern — larger families have more features',
          'The family is likely over-detailed and will cause performance issues when placed many times in the model',
          'The family may not be compatible with the current Revit version',
          'Large family files cannot be loaded into workshared models',
        ],
        answer: 'The family is likely over-detailed and will cause performance issues when placed many times in the model',
      },
      {
        type: 'truefalse',
        question: 'A door family accidentally categorized as "Generic Models" will appear correctly in door schedules and be tagged by the door tag.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Before loading a third-party family into a live project, what is the recommended quality check process?',
        options: [
          'Check the file size only — if under 5MB it is safe to load',
          'Load it directly into the live project and check it works correctly there',
          'Test it in a scratch project first — check category, detail level behavior, schedule appearance, and tag behavior',
          'Ask the family manufacturer to confirm it is Revit-certified',
        ],
        answer: 'Test it in a scratch project first — check category, detail level behavior, schedule appearance, and tag behavior',
      },
      {
        type: 'mcq',
        question: 'System Families (Walls, Floors, Roofs) differ from loadable families in which key way?',
        options: [
          'System Families can be downloaded from manufacturer websites as .rfa files',
          'System Families are defined within the project file — new types are created by duplicating existing ones, not loading external files',
          'System Families do not support compound layer structures',
          'System Families cannot be scheduled in Revit',
        ],
        answer: 'System Families are defined within the project file — new types are created by duplicating existing ones, not loading external files',
      },
      {
        type: 'fillblank',
        question: 'To retain family types through a Purge Unused operation without placing them in the model, place one instance of each family in a hidden ___ view.',
        answer: 'content library',
      },
      {
        type: 'mcq',
        question: 'A well-set-up project file should be under what file size before any modeling begins?',
        options: ['20MB', '80MB', '300MB', '500MB'],
        answer: '80MB',
      },
      {
        type: 'truefalse',
        question: 'Purge Unused should be run immediately before handing the configured project file to the modeling team.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A well-built family shows simplified geometry at Coarse detail level and full geometry at Fine. Why is this important?',
        options: [
          'Coarse detail level is used for printing and Fine is for screen display',
          'It ensures the family does not slow views that are set to Coarse — complex geometry is only loaded when Fine detail is needed',
          'Revit requires this behavior for all families to pass quality checks',
          'It reduces the family file size on disk',
        ],
        answer: 'It ensures the family does not slow views that are set to Coarse — complex geometry is only loaded when Fine detail is needed',
      },
      {
        type: 'mcq',
        question: 'Which of the following should NOT be pre-loaded at project setup to avoid unnecessary file bloat?',
        options: [
          'The firm\'s custom section head and callout mark families',
          'Standard door and window families in common sizes',
          'An entire furniture catalogue with 300 product families from a manufacturer',
          'Room tags and area tags',
        ],
        answer: 'An entire furniture catalogue with 300 product families from a manufacturer',
      },
      {
        type: 'truefalse',
        question: 'New wall types for a project are created by duplicating existing wall types and editing their compound layer structure — not by loading external .rfa files.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ ps-16: Sheet Setup & Titleblock Configuration
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'ps-16',
    title: 'Sheet Setup & Titleblock Configuration',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A titleblock shows blank project name and client fields even though the correct values are in Project Information. What is the most likely cause?',
        options: [
          'The titleblock needs to be reloaded from the original .rfa file',
          'The titleblock family Labels are not connected to Project Information parameters',
          'Project Information can only be read by schedules, not titleblocks',
          'The sheet is missing a sheet number — this prevents Project Information from loading',
        ],
        answer: 'The titleblock family Labels are not connected to Project Information parameters',
      },
      {
        type: 'truefalse',
        question: 'Once a revision is marked as "Issued" in Revit\'s Revisions dialog, its revision clouds are locked and cannot be moved or deleted.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A project uses sheet numbering A-100 through A-108 for floor plans and A-200 through A-203 for elevations. Mid-project, a decision is made to renumber to A-001 through A-012 for plans. What is the likely consequence?',
        options: [
          'No consequence — sheet numbers can be changed freely at any time',
          'All section marks, callout references, and sheet list entries referencing the old numbers update automatically',
          'Section marks and callout references may need manual checking — references update automatically in Revit but consultants referencing old sheet numbers in their drawings will have incorrect cross-references',
          'The sheet numbers cannot be changed once any views are placed on sheets',
        ],
        answer: 'Section marks and callout references may need manual checking — references update automatically in Revit but consultants referencing old sheet numbers in their drawings will have incorrect cross-references',
      },
      {
        type: 'mcq',
        question: 'The "Appears in Sheet List" parameter on a sheet is used to:',
        options: [
          'Control whether the sheet is visible to all team members or the BIM Manager only',
          'Filter the Sheet List schedule so only formally issued sheets appear in the drawing register',
          'Prevent the sheet from being printed accidentally',
          'Determine whether the sheet can be placed as a viewport in another sheet',
        ],
        answer: 'Filter the Sheet List schedule so only formally issued sheets appear in the drawing register',
      },
      {
        type: 'fillblank',
        question: 'The standard sheet series for construction details and wall sections on an architectural drawing set is the ___ series (e.g., A-500 through A-599).',
        answer: 'A-500',
      },
      {
        type: 'mcq',
        question: 'Print settings that should be checked when configuring a standard drawing issue PDF export include (select the most complete answer):',
        options: [
          'Paper size only',
          'Paper size and zoom/scale',
          'Paper size, zoom, hide crop boundaries, hide unreferenced view tags, raster quality, and color setting',
          'Raster quality and color only — the rest are handled by the PDF viewer',
        ],
        answer: 'Paper size, zoom, hide crop boundaries, hide unreferenced view tags, raster quality, and color setting',
      },
      {
        type: 'truefalse',
        question: 'In Revit, a Revision appears in a sheet\'s titleblock revision table only when a revision cloud linked to that revision is present in a view placed on that sheet.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'What does saving a named PDF export configuration in Revit allow you to do?',
        options: [
          'Automatically email drawings to the client on issue',
          'Restore all export settings with one click on future drawing issues — preventing misconfigured exports',
          'Export drawings to PDF without opening the export dialog',
          'Store a cloud copy of the PDF in Autodesk Docs automatically',
        ],
        answer: 'Restore all export settings with one click on future drawing issues — preventing misconfigured exports',
      },
      {
        type: 'mcq',
        question: 'A DWG export layer mapping saved as a .txt file ensures:',
        options: [
          'All exported DWG files use the same layer naming convention — essential for consultants referencing your drawings in AutoCAD',
          'The DWG file contains all Revit families as editable blocks',
          'The exported DWG retains Revit material assignments as AutoCAD hatches',
          'The DWG file size is minimized by removing unused layers',
        ],
        answer: 'All exported DWG files use the same layer naming convention — essential for consultants referencing your drawings in AutoCAD',
      },
      {
        type: 'truefalse',
        question: 'Pre-creating placeholder sheets at project setup (with correct numbers and names but no viewports yet) means section marks auto-populate with sheet references as soon as views are placed on those sheets.',
        answer: true,
      },
    ],
  },
];
