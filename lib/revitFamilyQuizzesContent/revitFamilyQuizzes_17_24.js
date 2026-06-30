// ============================================================
// REVIT FAMILY CREATION — QUIZZES rf-17 through rf-24 (ADVANCED)
// File: lib/revitFamilyQuizzesContent/quizzes-17-24.js
// ============================================================

export const quizzes_17_24 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-17: MEP Families — Complete Guide
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-17',
    title: 'MEP Families — Complete Guide',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'An air handling unit family has a supply air duct connector with the wrong System Classification set to "Return Air" instead of "Supply Air." What is the consequence in a live project?',
        options: [
          'The connector will not accept a duct connection',
          'The routing tool connects the supply duct to the return air system — causing incorrect system flow calculations and balancing errors',
          'The connector displays in the wrong colour only — no functional impact',
          'Revit automatically corrects the system classification when the duct is connected',
        ],
        answer: 'The routing tool connects the supply duct to the return air system — causing incorrect system flow calculations and balancing errors',
      },
      {
        type: 'truefalse',
        question: 'A ceiling-hosted lighting fixture family should have its electrical connector arrow pointing away from the ceiling (downward) to indicate the power supply direction.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A floor drain family needs a pipe connector for the waste connection. Where should this connector be positioned and in which direction should it point?',
        options: [
          'At the top of the drain body, pointing upward',
          'At the drain outlet at the bottom of the family, pointing downward — the waste pipe connects below the slab',
          'At the centre of the drain body, pointing horizontally',
          'At the grate surface, pointing upward to indicate flow direction from above',
        ],
        answer: 'At the drain outlet at the bottom of the family, pointing downward — the waste pipe connects below the slab',
      },
      {
        type: 'mcq',
        question: 'A three-phase electrical panel needs an electrical connector with which pole setting?',
        options: [
          '1 pole — single phase connection',
          '2 poles — single phase with neutral',
          '3 poles — three phase connection',
          'Poles are not relevant for panel families',
        ],
        answer: '3 poles — three phase connection',
      },
      {
        type: 'fillblank',
        question: 'In a lighting fixture family, the element that enables the family to participate in Revit\'s illumination analysis and produce lux level calculations is called a ___ Source.',
        answer: 'Light',
      },
      {
        type: 'truefalse',
        question: 'A duct connector on a mechanical equipment family must have its Shape (Rectangular, Round, or Oval) set to match the duct that will connect to it.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A recessed downlight family at Coarse detail level (1:100 reflected ceiling plan) should display:',
        options: [
          'The full 3D housing, lamp, and reflector geometry',
          'Nothing — the ceiling grid dominates at 1:100 and the fixture should be invisible at Coarse',
          'Only the ceiling trim ring aperture using Symbolic Lines',
          'The electrical connector symbol only',
        ],
        answer: 'Only the ceiling trim ring aperture using Symbolic Lines',
      },
      {
        type: 'mcq',
        question: 'A plumbing fixture family needs the Domestic Hot Water pipe connector to be 22mm. How should this be configured?',
        options: [
          'Set the connector Radius to 11mm (radius = half the diameter)',
          'Set the connector Diameter to 22mm directly',
          'Set the connector to System Classification = Hot Water 22mm',
          'The pipe size is set when the pipe is routed, not on the connector',
        ],
        answer: 'Set the connector Radius to 11mm (radius = half the diameter)',
      },
      {
        type: 'truefalse',
        question: 'The Apparent Load (VA) value on an electrical connector directly affects Revit\'s electrical load calculations for panel boards.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A mechanical equipment family needs Airflow, Cooling Capacity, and Noise Level as schedulable parameters for engineering specifications. Which parameter type should be used?',
        options: [
          'Regular family parameters — they appear in schedules automatically',
          'Shared parameters from the office shared parameter file — so they appear consistently in mechanical equipment schedules and can be tagged',
          'Project parameters added to the project after the family is loaded',
          'Built-in Revit parameters — they are already available for all MEP categories',
        ],
        answer: 'Shared parameters from the office shared parameter file — so they appear consistently in mechanical equipment schedules and can be tagged',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-18: Curtain Wall, Mullions & Structural Families
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-18',
    title: 'Curtain Wall, Mullions & Structural Families',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A curtain wall panel family has four boundary reference planes (top, bottom, left, right) that are driven by the curtain wall grid. What should the family creator NOT do with these planes?',
        options: [
          'Lock geometry edges to them',
          'Use them as the basis for all geometry positioning',
          'Label dimensions between them as Width and Height parameters — the grid controls these, not the family creator',
          'Reference them when placing solid extrusions',
        ],
        answer: 'Label dimensions between them as Width and Height parameters — the grid controls these, not the family creator',
      },
      {
        type: 'truefalse',
        question: 'A mullion profile family contains 3D solid geometry that defines the mullion shape.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A custom aluminium curtain wall mullion profile (50mm wide x 150mm deep) is needed. Which template should be used?',
        options: [
          'Curtain Wall Panel.rft',
          'Generic Model.rft — then assign to Curtain Wall Mullions category',
          'Profile.rft or Curtain Wall Mullion.rft — a 2D cross-section profile family',
          'Metric Generic Model face based.rft',
        ],
        answer: 'Profile.rft or Curtain Wall Mullion.rft — a 2D cross-section profile family',
      },
      {
        type: 'mcq',
        question: 'In a structural column family, what does the analytical model represent and why must it not be modified from the template defaults?',
        options: [
          'The visual 3D representation — modifying it changes how the column looks in elevation',
          'The structural centroid centreline that structural analysis software reads for load path calculations — modifying it produces incorrect analytical results in connected engineering tools',
          'The column\'s fire resistance rating — modifying it changes the fire rating parameter',
          'The column base plate connection — modifying it changes how the column connects to foundations',
        ],
        answer: 'The structural centroid centreline that structural analysis software reads for load path calculations — modifying it produces incorrect analytical results in connected engineering tools',
      },
      {
        type: 'fillblank',
        question: 'In a structural beam (Structural Framing) family, the element\'s ___ is not a family parameter — it is determined by the span between support points in the project.',
        answer: 'length',
      },
      {
        type: 'truefalse',
        question: 'A custom curtain wall panel family is applied to individual grid cells by Tab-selecting specific cells and changing their type in Properties.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A structural concrete pad foundation needs a pocket for a precast column base. Which family tools create this correctly?',
        options: [
          'Two solid extrusions joined together — one for the base, one for the pocket walls',
          'A solid extrusion for the full foundation depth, then a void extrusion at the top face sized to the column cross-section — applied as a cut',
          'A blend transitioning from the full foundation size to the pocket size',
          'An adaptive component with points at each column corner',
        ],
        answer: 'A solid extrusion for the full foundation depth, then a void extrusion at the top face sized to the column cross-section — applied as a cut',
      },
      {
        type: 'mcq',
        question: 'For a standard rectangular concrete pad foundation, should a loadable family be built or should Revit\'s built-in Isolated Foundation system family be used?',
        options: [
          'Always build a loadable family — system families are not accurate enough',
          'Use the built-in Isolated Foundation system family — build loadable only when the shape is too complex, needs custom parameters, or has embedded hardware',
          'Always use a loadable family for BIM compliance',
          'The choice depends on the structural engineer\'s preference only',
        ],
        answer: 'Use the built-in Isolated Foundation system family — build loadable only when the shape is too complex, needs custom parameters, or has embedded hardware',
      },
      {
        type: 'truefalse',
        question: 'A structural steel section family should use a type catalogue to provide the full range of UC, UB, RHS, and CHS sizes without embedding all types in the .rfa file.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A louvre curtain wall panel with horizontal blades spaced at 200mm intervals should be built using:',
        options: [
          'A blend transitioning from the open top to the solid bottom',
          'A solid extrusion for the frame with multiple void extrusions cut through it at the blade spacing, with Blade Spacing as a parameter',
          'An adaptive component placed on each horizontal grid division',
          'A sweep following the panel perimeter',
        ],
        answer: 'A solid extrusion for the frame with multiple void extrusions cut through it at the blade spacing, with Blade Spacing as a parameter',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-19: Adaptive Components
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-19',
    title: 'Adaptive Components',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A four-point adaptive facade panel has Adaptive Points numbered 1, 2, 3, 4 clockwise. When a user places the panel, they must click points in which order?',
        options: [
          'Any order — Revit determines the correct orientation automatically',
          'In the sequence 1, 2, 3, 4 as defined in the family — the order determines the panel orientation',
          'In order of proximity to the cursor — nearest point first',
          'The points are placed automatically on the divided surface without user clicking',
        ],
        answer: 'In the sequence 1, 2, 3, 4 as defined in the family — the order determines the panel orientation',
      },
      {
        type: 'truefalse',
        question: 'Adaptive components support MEP connectors (duct, pipe, electrical) and can participate in Revit\'s system routing.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The correct template for creating an adaptive component is:',
        options: [
          'Metric Generic Model.rft',
          'Generic Model Adaptive.rft — which opens in the Conceptual Mass environment',
          'Face-Based Generic Model.rft',
          'Curtain Wall Panel.rft',
        ],
        answer: 'Generic Model Adaptive.rft — which opens in the Conceptual Mass environment',
      },
      {
        type: 'mcq',
        question: 'A complex curved facade has 600 adaptive component panels. After changing the base surface, model regeneration takes 8 minutes. What is the recommended approach?',
        options: [
          'Increase computer RAM — adaptive components require more memory',
          'Switch to a Curtain Wall system with custom panels which may be more performant for large panel counts',
          'Reduce the number of adaptive points from 4 to 2',
          'Increase the divided surface U and V grid density',
        ],
        answer: 'Switch to a Curtain Wall system with custom panels which may be more performant for large panel counts',
      },
      {
        type: 'fillblank',
        question: 'To tile an adaptive component across every cell of a divided surface automatically, select the component on the surface and use Revit\'s ___ tool.',
        answer: 'Repeater',
      },
      {
        type: 'truefalse',
        question: 'An adaptive component panel applied to a divided surface adapts each instance independently to the exact shape of its grid cell — including distorted quadrilateral cells on a complex curved surface.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A structural node adaptive component needs to adapt to variable beam angles at each connection point. How many adaptive points does a typical 4-beam node require?',
        options: [
          '1 point — at the node centre',
          '2 points — one at each end of the node',
          '4 points — one at each beam connection location, allowing the geometry to adapt to the angle between beams',
          '8 points — two per beam connection for direction control',
        ],
        answer: '4 points — one at each beam connection location, allowing the geometry to adapt to the angle between beams',
      },
      {
        type: 'mcq',
        question: 'What is the recommended panel count for testing an adaptive component before applying to a full facade?',
        options: [
          '1 panel — test the single panel in isolation',
          '4-9 panels — a small patch that tests the tiling behavior without performance impact',
          '50 panels — enough to identify performance issues',
          'The full facade count — partial testing is not representative',
        ],
        answer: '4-9 panels — a small patch that tests the tiling behavior without performance impact',
      },
      {
        type: 'truefalse',
        question: 'Adaptive components are assigned to the Generic Model category by default and appear in Generic Model schedules — not in more specific category schedules.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'An adaptive panel is placed correctly on a small test surface but twists unexpectedly when placed at one specific grid cell location. What is the most likely cause?',
        options: [
          'The family has too many parameters',
          'The adaptive point placement sequence is wrong for that cell — points 1-2-3-4 were clicked in a different order causing the panel to invert or twist',
          'The divided surface UV direction is reversed at that cell',
          'The panel material is incompatible with the surface geometry',
        ],
        answer: 'The adaptive point placement sequence is wrong for that cell — points 1-2-3-4 were clicked in a different order causing the panel to invert or twist',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-20: Profile Families
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-20',
    title: 'Profile Families',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A profile family for a skirting board should have its origin point positioned at:',
        options: [
          'The centre of the skirting cross-section',
          'The top edge of the skirting (where the top meets the wall)',
          'The bottom-left corner — at the wall face and floor junction (the contact point with the wall and floor)',
          'The front face of the skirting (the room-facing surface)',
        ],
        answer: 'The bottom-left corner — at the wall face and floor junction (the contact point with the wall and floor)',
      },
      {
        type: 'truefalse',
        question: 'A profile family contains 3D solid geometry that represents the full moulding or trim element.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A handrail profile family should have its origin positioned at:',
        options: [
          'The bottom of the handrail cross-section (where it rests on the post)',
          'The centre of the handrail cross-section — Revit sweeps the profile centred on the rail path',
          'The front face of the handrail (the grip surface)',
          'The top of the handrail cross-section',
        ],
        answer: 'The centre of the handrail cross-section — Revit sweeps the profile centred on the rail path',
      },
      {
        type: 'mcq',
        question: 'A Profile Usage subtype of "Railing Rail" means the profile will appear in:',
        options: [
          'The Wall Sweep profile dropdown only',
          'All profile dropdowns across the project',
          'The Railing Type properties for Top Rail and Handrail profile selection — not in the Wall Sweep dropdown',
          'The Stair Nosing profile dropdown',
        ],
        answer: 'The Railing Type properties for Top Rail and Handrail profile selection — not in the Wall Sweep dropdown',
      },
      {
        type: 'fillblank',
        question: 'A Wall Reveal (as opposed to a Wall Sweep) uses a profile that represents a ___ cross-section cut into the wall face.',
        answer: 'void',
      },
      {
        type: 'truefalse',
        question: 'At wall corners, Revit automatically mitres wall sweep profiles — this works correctly for most standard rectangular skirting and dado profiles.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A profile family is used in a loadable family\'s Sweep form (not a project-level wall sweep). How is the profile family loaded for use inside the host family?',
        options: [
          'It is automatically available — all project profiles are accessible in all families',
          'Insert → Load Family → select the profile .rfa → load into the host family directly',
          'The profile must first be loaded into the project, then it becomes available in the family',
          'Profile families cannot be used inside loadable families — only in project-level sweeps',
        ],
        answer: 'Insert → Load Family → select the profile .rfa → load into the host family directly',
      },
      {
        type: 'mcq',
        question: 'A stair nosing profile origin should be positioned at:',
        options: [
          'The centre of the nosing cross-section',
          'The front top corner of the tread — the nosing extends forward and downward from this point',
          'The bottom of the nosing (where it sits on the stair structure)',
          'The back of the nosing (at the tread face)',
        ],
        answer: 'The front top corner of the tread — the nosing extends forward and downward from this point',
      },
      {
        type: 'truefalse',
        question: 'A profile family intended for curtain wall mullions must have Profile Usage set to "Curtain Wall Mullion" to appear in the mullion type profile dropdown.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'An office needs skirting boards in three heights: 75mm, 100mm, and 150mm. The most efficient family library approach is:',
        options: [
          'Three separate profile families, one per height',
          'One profile family with a Height parameter and three types (75mm, 100mm, 150mm)',
          'One profile family with Height as an Instance parameter so any height can be entered',
          'Use a Generic Model in-place family for each skirting height variant',
        ],
        answer: 'One profile family with a Height parameter and three types (75mm, 100mm, 150mm)',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-21: In-Place Families — When & How
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-21',
    title: 'In-Place Families — When & How',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A project has 6 bespoke bookcase units of the same design placed in different locations. Were these correctly built as in-place families?',
        options: [
          'Yes — bespoke elements always belong as in-place families',
          'No — a repeating element should be a loadable family. In-place families are for genuinely unique, non-repeating elements',
          'Yes — if they are different sizes, in-place is the only option',
          'It depends on whether the project architect prefers in-place or loadable',
        ],
        answer: 'No — a repeating element should be a loadable family. In-place families are for genuinely unique, non-repeating elements',
      },
      {
        type: 'truefalse',
        question: 'An in-place family can be saved as an .rfa file and added to the office library for reuse in future projects.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Which of these is a valid use case for an in-place family?',
        options: [
          'A reception desk that appears once in this project and will never be used again',
          'A standard office chair placed 150 times across the fit-out',
          'A window that appears in multiple locations on the same facade',
          'A structural column repeated across all floors',
        ],
        answer: 'A reception desk that appears once in this project and will never be used again',
      },
      {
        type: 'mcq',
        question: 'An in-place family is created via:',
        options: [
          'File → New → Family → select a template',
          'Architecture tab (or Structure/Systems) → Component → Model In-Place → select a category → name the family',
          'Manage tab → In-Place Family → Create',
          'Insert tab → Load Family → browse to in-place template',
        ],
        answer: 'Architecture tab (or Structure/Systems) → Component → Model In-Place → select a category → name the family',
      },
      {
        type: 'fillblank',
        question: 'The critical question to ask before creating an in-place family is: "Will this element or anything like it ever need to appear ___ in this project or any future project?"',
        answer: 'anywhere else',
      },
      {
        type: 'truefalse',
        question: 'An in-place family assigned to the Furniture category will appear in Furniture schedules and can be tagged with a Furniture tag.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The best content for the Comments field of an in-place family is:',
        options: [
          'The project number and date it was created',
          '"In-place family. One-off bespoke element — cannot be reused. Contact BIM Manager before deleting."',
          'The family creator\'s name and contact details',
          'The Revit version used to create the family',
        ],
        answer: '"In-place family. One-off bespoke element — cannot be reused. Contact BIM Manager before deleting."',
      },
      {
        type: 'mcq',
        question: 'Converting an in-place family to a loadable family requires:',
        options: [
          'Right-clicking the family in the Project Browser → Convert to Loadable Family',
          'A manual process: opening the in-place family, noting the geometry and parameters, opening the correct loadable template, rebuilding the geometry in the Family Editor, and replacing the in-place instances',
          'Export → Family → select the in-place family → save as .rfa',
          'Modifying the family category in the Properties panel to trigger automatic conversion',
        ],
        answer: 'A manual process: opening the in-place family, noting the geometry and parameters, opening the correct loadable template, rebuilding the geometry in the Family Editor, and replacing the in-place instances',
      },
      {
        type: 'truefalse',
        question: 'Even in-place families should be built using reference planes and locking geometry, so they respond correctly if the surrounding project geometry moves during design development.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A BIM audit finds 40 in-place Generic Model families in a project — mostly simple rectangular boxes representing placeholder equipment. What does this indicate about the project\'s BIM workflow?',
        options: [
          'The project team is following best practice — in-place families are faster to create',
          'The project team lacks loadable family creation skills and has been using in-place families as a shortcut — these should be replaced with proper loadable families for scheduling, tagging, and reuse',
          'Generic Model in-place families are preferred for equipment because they are more flexible',
          'This is acceptable as long as the equipment is scheduled manually in Excel',
        ],
        answer: 'The project team lacks loadable family creation skills and has been using in-place families as a shortcut — these should be replaced with proper loadable families for scheduling, tagging, and reuse',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-22: Family Quality Standards
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-22',
    title: 'Family Quality Standards',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A simple furniture family (chair) is 4.5MB after development. The file size target for simple families is under 300KB. What is the most likely cause?',
        options: [
          'Too many types in the family type table',
          'An embedded texture bitmap in a material assigned to the chair geometry',
          'Too many reference planes in the family skeleton',
          'The family has parameters with long text values',
        ],
        answer: 'An embedded texture bitmap in a material assigned to the chair geometry',
      },
      {
        type: 'truefalse',
        question: 'A formula like "p7 = p3 * 0.085 + p12 / 2" meets professional quality standards for family formulas.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'During LOD behaviour verification, a mechanical equipment family shows full 3D detail including internal pipe connections at Coarse detail level in a 1:100 plan. What action is required?',
        options: [
          'No action — Coarse detail level showing full geometry is acceptable for MEP families',
          'Set the detailed internal geometry to Coarse visibility = unchecked, and add a simplified Symbolic Line footprint for the Coarse representation',
          'Delete the detailed internal geometry — it should never be modelled',
          'Change the view scale to 1:50 so Medium detail level applies',
        ],
        answer: 'Set the detailed internal geometry to Coarse visibility = unchecked, and add a simplified Symbolic Line footprint for the Coarse representation',
      },
      {
        type: 'mcq',
        question: 'A parameter audit finds a "Door Width Old" parameter in a door family that drives nothing — it was used in a previous version but replaced by the "Width" parameter. What should be done?',
        options: [
          'Keep it — it may be useful in future versions',
          'Rename it to "Width Backup" for reference',
          'Delete it — unused parameters clutter the Properties panel and add confusion',
          'Move it to a hidden parameter group',
        ],
        answer: 'Delete it — unused parameters clutter the Properties panel and add confusion',
      },
      {
        type: 'fillblank',
        question: 'The Revit detail level that should show the element\'s full construction detail — exact dimensions, edge profiles, hardware, and component details — is ___ detail level.',
        answer: 'Fine',
      },
      {
        type: 'truefalse',
        question: 'DWG files imported into a family for geometry reference should be kept in the family when publishing to the office library for full accuracy.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A family with 65 parameters is submitted to the office library. This count is:',
        options: [
          'Acceptable for a complex MEP family',
          'A warning sign — investigate whether the family has accumulated unused parameters or is unnecessarily complex',
          'The recommended maximum for any family type',
          'Only acceptable if all parameters are shared parameters',
        ],
        answer: 'A warning sign — investigate whether the family has accumulated unused parameters or is unnecessarily complex',
      },
      {
        type: 'mcq',
        question: 'Which of these correctly describes a Minor version update (v1.0 → v1.1) vs. a Major update (v1.0 → v2.0)?',
        options: [
          'Minor: geometry changes. Major: parameter changes.',
          'Minor: parameter additions, geometry refinements, visibility improvements — projects can reload safely. Major: parameter deletions, category changes, fundamental rebuilds — coordinate with active projects before releasing.',
          'Minor: changes by junior staff. Major: changes by the BIM Manager.',
          'Minor: changes to one family. Major: changes to multiple families simultaneously.',
        ],
        answer: 'Minor: parameter additions, geometry refinements, visibility improvements — projects can reload safely. Major: parameter deletions, category changes, fundamental rebuilds — coordinate with active projects before releasing.',
      },
      {
        type: 'truefalse',
        question: 'Running Purge Unused twice (not just once) on a family is recommended because the first purge sometimes reveals additional purgeable items.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The advanced QA checklist covers 6 dimensions. Which combination is correct?',
        options: [
          'Geometry, Parameters, Visual/Material, Placement/Behaviour, Data/Scheduling, Performance',
          'Geometry, Parameters, Rendering, Hosting, Scheduling, File Size',
          'Template, Reference Planes, Parameters, Geometry, Visibility, Connectors',
          'File/Metadata, Geometry, Parameters, Visual/Material, Placement/Behaviour, Data/Scheduling',
        ],
        answer: 'File/Metadata, Geometry, Parameters, Visual/Material, Placement/Behaviour, Data/Scheduling',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-23: Building a Family Library
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-23',
    title: 'Building a Family Library',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A door family is updated from v1.1 to v1.2. The correct filename for the updated family is:',
        options: [
          'DR-Single-Flush-Door-Standard_v1.2.rfa',
          'DR-Single-Flush-Door-Standard-NEW.rfa',
          'DR-Single-Flush-Door-Standard.rfa — same filename, version recorded in the Comments field',
          'DR-Single-Flush-Door-Standard-2025.rfa',
        ],
        answer: 'DR-Single-Flush-Door-Standard.rfa — same filename, version recorded in the Comments field',
      },
      {
        type: 'truefalse',
        question: 'When a family is updated in the library, the previous version should be permanently deleted to keep the library clean.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The category code "LF" in the naming convention "LF-Downlight-Recessed-Round.rfa" stands for:',
        options: [
          'Load-bearing Fixture',
          'Lighting Fixtures',
          'Linear Fitting',
          'Loadable Family',
        ],
        answer: 'Lighting Fixtures',
      },
      {
        type: 'mcq',
        question: 'A team member downloads a manufacturer\'s lighting fixture family and wants to add it to the office library. What must happen first?',
        options: [
          'Add it immediately — manufacturer families are already production quality',
          'Review it against the office quality standards and QA checklist; modify or rebuild if it fails — only add after it meets all standards',
          'Load it into a project and test for one week before adding to the library',
          'Get written permission from the manufacturer before adding to the library',
        ],
        answer: 'Review it against the office quality standards and QA checklist; modify or rebuild if it fails — only add after it meets all standards',
      },
      {
        type: 'fillblank',
        question: 'Previous versions of library families are moved to the ___ folder when a new version is released — never deleted.',
        answer: '_Archive',
      },
      {
        type: 'truefalse',
        question: 'All team members should have write access to the office family library so they can add new families whenever they are built.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Setting the Revit library path in File → Options → File Locations → Places achieves:',
        options: [
          'Automatic loading of all library families into every new project',
          'Making the library folder hierarchy accessible directly from the Load Family browser in any Revit session',
          'Automatic version checking when a library family is reloaded',
          'Synchronising the library with a cloud backup location',
        ],
        answer: 'Making the library folder hierarchy accessible directly from the Load Family browser in any Revit session',
      },
      {
        type: 'mcq',
        question: 'The library register (spreadsheet tracking all families) should record:',
        options: [
          'Only the family filename and date added',
          'Filename, category, description, version, date, built by, reviewed by, and notes',
          'The file size and polygon count of each family',
          'Which projects have loaded each family',
        ],
        answer: 'Filename, category, description, version, date, built by, reviewed by, and notes',
      },
      {
        type: 'truefalse',
        question: 'A family library with 2,000 families is always better than one with 200 families because more choice is always more useful.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A project-specific family (built for one project only) should be added to the office library:',
        options: [
          'Immediately when it is built — to make it available to other projects',
          'Never — project-specific families should never enter the library',
          'After project close-out review: if it has wider application, it is generalised, quality-checked, and then added to the library',
          'Only if the project client gives permission',
        ],
        answer: 'After project close-out review: if it has wider application, it is generalised, quality-checked, and then added to the library',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-24: Family Creation Capstone
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-24',
    title: 'Family Creation Capstone',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'In the capstone door family build, the Vision Panel Width parameter is set as a formula rather than a manually entered value. What formula drives it?',
        options: [
          'Vision Panel Width = Width / 2',
          'Vision Panel Width = Width - Frame Width * 2 - 50mm',
          'Vision Panel Width = Width - 100mm',
          'Vision Panel Width = Width * 0.6',
        ],
        answer: 'Vision Panel Width = Width - Frame Width * 2 - 50mm',
      },
      {
        type: 'truefalse',
        question: 'In the capstone build, "Fire Rating" and "Hardware Set" are added as regular family parameters so they appear in the door properties.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The capstone door family\'s wall opening void should be sized in depth to:',
        options: [
          'Exactly the most common wall thickness in the project (e.g., 215mm)',
          '600mm — intentionally oversized to cut completely through any wall thickness in the expected range',
          'The door thickness parameter value',
          'The Frame Width parameter value multiplied by 2',
        ],
        answer: '600mm — intentionally oversized to cut completely through any wall thickness in the expected range',
      },
      {
        type: 'mcq',
        question: 'At Coarse detail level, the capstone door family should display:',
        options: [
          'The full 3D door leaf, frame, and handle geometry',
          'Only the door swing arc and opening indicator as Symbolic Lines — no 3D geometry',
          'The door frame outline only — no swing arc',
          'The door handle nested family only',
        ],
        answer: 'Only the door swing arc and opening indicator as Symbolic Lines — no 3D geometry',
      },
      {
        type: 'fillblank',
        question: 'In the capstone build, the door handle nested family is built from the ___ template because the handle is positioned relative to the door, not attached to a wall.',
        answer: 'Generic Model.rft',
      },
      {
        type: 'mcq',
        question: 'The capstone type catalogue contains 14 types. When a user loads "DR-Single-Flush-Door-Standard.rfa" into a project, what happens?',
        options: [
          'All 14 types are automatically loaded into the project',
          'A dialog presents all 14 types as a checklist — the user selects only the sizes needed for this project',
          'Only the first type in the catalogue is loaded by default',
          'The catalogue is ignored and the user must create types manually',
        ],
        answer: 'A dialog presents all 14 types as a checklist — the user selects only the sizes needed for this project',
      },
      {
        type: 'truefalse',
        question: 'The "Show Vision Panel" parameter in the capstone family is an Instance parameter — meaning each placed door can independently show or hide the vision panel.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The capstone build demonstrates the complete family creation workflow. Which lesson covered the technique used to constrain the nested door handle position?',
        options: [
          'rf-4 (Reference Planes) — locking handle position to reference planes using Align + Lock',
          'rf-5 (Parameters) — labeling a dimension to the handle position',
          'rf-13 (Nested Families) — parameter association and reference plane locking of nested components',
          'rf-8 (Loading and Testing) — loading the handle family into the door',
        ],
        answer: 'rf-13 (Nested Families) — parameter association and reference plane locking of nested components',
      },
      {
        type: 'mcq',
        question: 'After completing the capstone family QA checklist and publishing to the library, what must be communicated to the team?',
        options: [
          'Nothing — the library is self-documenting',
          'The family name, its capabilities (14 types, optional vision panel, shared parameters for Fire Rating and Hardware Set), and its library location — so the team knows it exists and how to use it',
          'Only the BIM Manager needs to know — team members will discover it when needed',
          'The full QA checklist results in a detailed email',
        ],
        answer: 'The family name, its capabilities (14 types, optional vision panel, shared parameters for Fire Rating and Hardware Set), and its library location — so the team knows it exists and how to use it',
      },
      {
        type: 'mcq',
        question: 'The capstone lesson states "The door is the vehicle. The workflow is the lesson." What does this mean for a practitioner building a lighting fixture or structural column?',
        options: [
          'Lighting fixtures and structural columns use a different workflow from doors',
          'The same workflow — brief, template, reference planes, parameters, geometry, nested components, shared parameters, type catalogue, QA, publication — applies to every family type regardless of category or complexity',
          'Only the geometry steps differ — all other steps are the same for all family types',
          'The capstone workflow only applies to architectural families (doors, windows, furniture)',
        ],
        answer: 'The same workflow — brief, template, reference planes, parameters, geometry, nested components, shared parameters, type catalogue, QA, publication — applies to every family type regardless of category or complexity',
      },
    ],
  },
];
