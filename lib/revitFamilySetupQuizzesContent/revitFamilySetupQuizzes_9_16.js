// ============================================================
// REVIT FAMILY SETUP — QUIZZES rfs-9 through rfs-16 (INTERMEDIATE)
// File: lib/revitFamilySetupQuizzesContent/quizzes-9-16.js
// ============================================================

export const quizzes_9_16 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-9: Building the Door Family Template
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-9',
    title: 'Building the Door Family Template',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'The DPA-Door-Template.rft includes a void extrusion sized at 600mm depth, centred on the wall. Why is this depth chosen rather than matching the exact wall thickness?',
        options: [
          'Revit requires all door voids to be exactly 600mm by default',
          'The oversized void cuts cleanly through any wall thickness the door might be hosted in, without needing adjustment per wall type',
          '600mm matches the standard frame depth for fire-rated doors',
          'It is a placeholder value that must be changed before the template can be used',
        ],
        answer: 'The oversized void cuts cleanly through any wall thickness the door might be hosted in, without needing adjustment per wall type',
      },
      {
        type: 'truefalse',
        question: 'Clear Width in the DPA door template is a manually entered parameter, independent of Width and Frame Width.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'In the DPA door template, what is the correct formula for the Clear Width parameter?',
        options: [
          'Clear Width = Width / 2',
          'Clear Width = Width - (Frame Width * 2)',
          'Clear Width = Width + Frame Width',
          'Clear Width = Frame Width - Width',
        ],
        answer: 'Clear Width = Width - (Frame Width * 2)',
      },
      {
        type: 'mcq',
        question: 'The Show Vision Panel parameter in the door template is set to which parameter type and Instance/Type setting?',
        options: [
          'Text, Type',
          'Yes/No, Instance — so individual doors of the same type can independently show or hide the vision panel',
          'Yes/No, Type — so all doors of a type always have the same vision panel setting',
          'Material, Instance',
        ],
        answer: 'Yes/No, Instance — so individual doors of the same type can independently show or hide the vision panel',
      },
      {
        type: 'fillblank',
        question: 'The door swing arc in the DPA template is assigned to the subcategory ___, visible at Coarse and Medium but hidden at Fine.',
        answer: 'DPA-Swing',
      },
      {
        type: 'truefalse',
        question: 'When testing the door template, files are saved with a .rft extension and loaded directly into a project the same way .rfa family files are loaded.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A QA test on the door template shows the door leaf is visible at Coarse detail level in a 1:100 plan. What is the correct fix?',
        options: [
          'This is correct behaviour — doors should always show their leaf at Coarse',
          'Uncheck the door leaf\'s Coarse visibility — at Coarse, only the symbolic swing arc and opening lines should be visible',
          'Reduce the door leaf polygon count to make it acceptable at Coarse',
          'Move the door leaf to a different subcategory',
        ],
        answer: 'Uncheck the door leaf\'s Coarse visibility — at Coarse, only the symbolic swing arc and opening lines should be visible',
      },
      {
        type: 'mcq',
        question: 'The Frame Inner L and Frame Inner R reference planes in the door template are locked using an EQ constraint with Centre L/R. What does this achieve?',
        options: [
          'It makes the frame width always equal to the door width',
          'It keeps the door opening centred within the frame as Frame Width changes',
          'It locks the frame to never move regardless of parameter changes',
          'It converts the reference planes from Strong to Weak references',
        ],
        answer: 'It keeps the door opening centred within the frame as Frame Width changes',
      },
      {
        type: 'truefalse',
        question: 'The Fire Rating parameter in the door template (built in this lesson) is already a fully functional shared parameter ready for tags and IFC export.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Which QA checklist section is specifically validated by loading the template into the DPC project, placing it on a test wall, and checking the schedule?',
        options: [
          'Section 3 — Reference Planes',
          'Section 4 — Parameters',
          'Section 6 — Project Testing',
          'Section 1 — File and Metadata',
        ],
        answer: 'Section 6 — Project Testing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-10: Building the Window Family Template
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-10',
    title: 'Building the Window Family Template',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'The DPA standard default Sill Height for office building windows is:',
        options: [
          '600mm',
          '900mm',
          '1200mm',
          '1500mm',
        ],
        answer: '900mm',
      },
      {
        type: 'truefalse',
        question: 'U-Value and SHGC parameters in the window template should be Text type parameters so they can include unit suffixes directly in the value.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'When the Sill Height parameter is changed on a placed window instance, what happens?',
        options: [
          'Nothing — Sill Height only affects the family in the editor, not placed instances',
          'The window rises or drops within the wall, and the wall void position adjusts automatically to match',
          'The window width changes proportionally',
          'A warning appears requiring manual void adjustment',
        ],
        answer: 'The window rises or drops within the wall, and the wall void position adjusts automatically to match',
      },
      {
        type: 'mcq',
        question: 'At Coarse detail level, the DPA window template should display:',
        options: [
          'Full 3D frame and glazing geometry',
          'Three symbolic lines representing outer wall face, glazing line, and inner wall face',
          'Only the glazing panel, no frame',
          'Nothing — windows are hidden at Coarse like lighting fixtures',
        ],
        answer: 'Three symbolic lines representing outer wall face, glazing line, and inner wall face',
      },
      {
        type: 'fillblank',
        question: 'The external sill projection geometry in the window template is assigned to the subcategory DPA-___.',
        answer: 'Sill',
      },
      {
        type: 'truefalse',
        question: 'The sill projection subcategory is visible at Coarse, Medium, and Fine detail levels equally.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Why must U-Value and SHGC eventually become shared parameters (in Lesson 17) rather than remaining regular family parameters?',
        options: [
          'Regular parameters cannot store decimal number values',
          'They need to be mapped to IFC Pset_WindowCommon for energy compliance data exchange, which requires shared parameter GUIDs',
          'Energy analysis software cannot read regular Revit parameters at all',
          'Window schedules cannot display regular parameters',
        ],
        answer: 'They need to be mapped to IFC Pset_WindowCommon for energy compliance data exchange, which requires shared parameter GUIDs',
      },
      {
        type: 'mcq',
        question: 'A shop front window family needs floor-to-ceiling glazing. What Sill Height value is appropriate?',
        options: [
          '900mm (standard office sill)',
          '1000mm (standard residential sill)',
          '0mm (floor-to-ceiling glazing)',
          'Sill Height does not apply to shop front windows',
        ],
        answer: '0mm (floor-to-ceiling glazing)',
      },
      {
        type: 'truefalse',
        question: 'The wall void in the window template is sized to exactly match the wall thickness for precision cutting.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'At Fine detail level, the DPA window template shows:',
        options: [
          'Symbolic lines only, same as Coarse',
          'Frame outline and flat glazing panel only',
          'Full frame geometry, glazing, sill projection, and head detail geometry',
          'Only the sill projection — frame and glazing are hidden at Fine to avoid clutter',
        ],
        answer: 'Full frame geometry, glazing, sill projection, and head detail geometry',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-11: Building the Furniture Family Template
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-11',
    title: 'Building the Furniture Family Template',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'The Two-Representation approach for furniture families uses which combination?',
        options: [
          '3D solid geometry for both plan and elevation views',
          '3D solid geometry visible only in elevation/3D views (Visible in Plan = No) + 2D Symbolic Lines visible in plan views (Coarse and Medium)',
          'Symbolic Lines for all views, 3D geometry never used',
          '3D geometry at Coarse, Symbolic Lines at Fine — the reverse of the standard approach',
        ],
        answer: '3D solid geometry visible only in elevation/3D views (Visible in Plan = No) + 2D Symbolic Lines visible in plan views (Coarse and Medium)',
      },
      {
        type: 'truefalse',
        question: 'A sofa\'s 3D geometry sliced at the standard plan cut height (around 1000mm) typically produces a clean, recognisable plan symbol without needing Symbolic Lines.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Why is Upholstery Material set as an Instance parameter rather than Type in the DPA furniture template?',
        options: [
          'Instance parameters process faster than Type parameters',
          'The same chair type can have different fabric colours per placed instance — guest rooms in blue, corridors in grey, all using the same chair type',
          'Revit requires all Material parameters to be Instance by default',
          'Type parameters cannot store Material values',
        ],
        answer: 'The same chair type can have different fabric colours per placed instance — guest rooms in blue, corridors in grey, all using the same chair type',
      },
      {
        type: 'mcq',
        question: 'What is the DPA default value for the Seat Height parameter in seating furniture families?',
        options: [
          '350mm',
          '450mm',
          '550mm',
          '650mm',
        ],
        answer: '450mm',
      },
      {
        type: 'fillblank',
        question: 'The four DPA furniture subcategories created in this lesson are DPA-Frame, DPA-Upholstery, DPA-Leg, and DPA-___.',
        answer: 'Surface',
      },
      {
        type: 'truefalse',
        question: 'Furniture families should always show full 3D geometry at Coarse detail level so that the furniture is clearly identifiable in any overview drawing.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A test reveals that changing the Width parameter on a placed furniture instance updates the elevation view correctly but the plan view symbol stays the same size. What is the most likely cause?',
        options: [
          'The Symbolic Lines in the Ref. Level view are not locked to the same reference planes as the 3D geometry',
          'The furniture family needs to be reloaded into the project',
          'Width can only be changed at the Type level, not Instance',
          'The plan view needs to be set to Fine detail level',
        ],
        answer: 'The Symbolic Lines in the Ref. Level view are not locked to the same reference planes as the 3D geometry',
      },
      {
        type: 'mcq',
        question: 'EQ constraints are applied between Centre L/R and the Left/Right boundary planes in the furniture template. What does this accomplish?',
        options: [
          'It locks the Width parameter to a fixed value',
          'It keeps the family origin centred within the bounding box as Width changes — critical for correct alignment when the furniture is placed against walls or other elements',
          'It prevents the furniture from being resized',
          'It converts the boundary planes to Not a Reference',
        ],
        answer: 'It keeps the family origin centred within the bounding box as Width changes — critical for correct alignment when the furniture is placed against walls or other elements',
      },
      {
        type: 'truefalse',
        question: 'The Metric Furniture.rft template is non-hosted, meaning furniture families are work plane-based and not attached to walls, floors, or ceilings.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'In the DPA furniture template, which property must be unchecked on the 3D solid geometry to implement the Two-Representation approach correctly?',
        options: [
          '"Cut with Voids When Loaded"',
          '"Visible in Plan/RCP Views"',
          '"Shared"',
          '"Always Vertical"',
        ],
        answer: '"Visible in Plan/RCP Views"',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-12: Building the Equipment Family Template
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-12',
    title: 'Building the Equipment Family Template',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A fan coil unit family has a supply air duct connector with System Classification incorrectly set to "Return Air." What is the consequence in a live project?',
        options: [
          'The connector simply will not accept a duct connection',
          'Revit\'s routing tool connects the supply duct to the return air system, causing incorrect flow analysis and system balancing errors',
          'The error is purely visual — no functional impact on system routing',
          'Revit automatically corrects the classification based on the equipment category',
        ],
        answer: 'Revit\'s routing tool connects the supply duct to the return air system, causing incorrect flow analysis and system balancing errors',
      },
      {
        type: 'truefalse',
        question: 'The Service Clearance Front and Service Clearance Left parameters in the equipment template represent the physical dimensions of the equipment casing.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Why is Asset ID set as an Instance parameter in the equipment template, while Maintenance Frequency is a Type parameter?',
        options: [
          'Instance and Type assignment is arbitrary and does not affect functionality',
          'Asset ID is unique per physical piece of equipment installed (each FCU has its own ID) while Maintenance Frequency is the same for all equipment of that type/model',
          'Asset ID must always be Instance per Revit software requirements',
          'Type parameters cannot store text values',
        ],
        answer: 'Asset ID is unique per physical piece of equipment installed (each FCU has its own ID) while Maintenance Frequency is the same for all equipment of that type/model',
      },
      {
        type: 'mcq',
        question: 'The DPA-ServiceZone subcategory is visible at which detail levels?',
        options: [
          'Fine only — service zones are detail-level information',
          'Medium and Fine only',
          'Coarse, Medium, and Fine — service zones must be visible at all detail levels for planning and clash detection purposes',
          'Never visible by default — must be manually turned on per view',
        ],
        answer: 'Coarse, Medium, and Fine — service zones must be visible at all detail levels for planning and clash detection purposes',
      },
      {
        type: 'fillblank',
        question: 'The Yes/No instance parameter that controls whether the service zone geometry displays is named Show ___ Zone.',
        answer: 'Service',
      },
      {
        type: 'truefalse',
        question: 'COBie Asset ID, Maintenance Frequency, and Warranty Period parameters in the equipment template are fully configured as shared parameters at the end of this lesson.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'An electrical connector on a piece of HVAC equipment is configured with Voltage=400V, Poles=3, Load Classification=HVAC. What does Load Classification drive?',
        options: [
          'The visual color of the connector symbol in the family',
          'Which category of electrical load the equipment counts as during panel load calculations and load schedule reporting',
          'Whether the equipment requires a dedicated circuit breaker',
          'The IP rating required for the connection point',
        ],
        answer: 'Which category of electrical load the equipment counts as during panel load calculations and load schedule reporting',
      },
      {
        type: 'mcq',
        question: 'The five requirement layers for MEP equipment families (beyond standard family requirements) are:',
        options: [
          'Connectors, color schemes, dimensions, weight, and warranty',
          'Connectors, service zone geometry, COBie asset parameters, engineering performance data, and LOD representation',
          'Materials, textures, render assets, schedules, and tags',
          'Reference planes, parameters, subcategories, visibility, and geometry',
        ],
        answer: 'Connectors, service zone geometry, COBie asset parameters, engineering performance data, and LOD representation',
      },
      {
        type: 'truefalse',
        question: 'At Coarse detail level, the DPA equipment template shows only a symbolic footprint with no 3D body geometry visible.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'Why does a chiller typically need a larger Service Clearance Front value than a fan coil unit in the DPA equipment template?',
        options: [
          'Service Clearance is fixed at 1000mm for all equipment regardless of type',
          'Service Clearance Front is a Type parameter that can be set differently per equipment type — larger equipment with more complex maintenance needs more clearance',
          'Chillers do not have a Service Clearance parameter — only fan coil units do',
          'Service clearance is determined automatically based on equipment Width',
        ],
        answer: 'Service Clearance Front is a Type parameter that can be set differently per equipment type — larger equipment with more complex maintenance needs more clearance',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-13: Building the Annotation Tag Set
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-13',
    title: 'Building the Annotation Tag Set',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'The DPA tag shapes by family type are:',
        options: [
          'All tags use a circle regardless of category',
          'Door=circle, Window=diamond, Room=no bubble (text only), Equipment=hexagon, Structural Column=circle',
          'Door=square, Window=circle, Room=hexagon, Equipment=diamond, Structural Column=triangle',
          'Shape is determined automatically by Revit based on category',
        ],
        answer: 'Door=circle, Window=diamond, Room=no bubble (text only), Equipment=hexagon, Structural Column=circle',
      },
      {
        type: 'truefalse',
        question: 'All DPA annotation tags use the Text tool to display the Mark number, since Text allows more font formatting options than Label.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A door tag shows "?" instead of the Mark number when placed on a door. What are the two most likely causes?',
        options: [
          'The tag font is incorrect, or the bubble size is too small',
          'The door\'s Mark parameter is empty, or the tag is reading a different parameter GUID than the one in the door family',
          'The tag was loaded into the wrong category folder',
          'The door is on the wrong workset',
        ],
        answer: 'The door\'s Mark parameter is empty, or the tag is reading a different parameter GUID than the one in the door family',
      },
      {
        type: 'mcq',
        question: 'The DPA Room Tag has three stacked labels. In order from top to bottom with their formatting, they are:',
        options: [
          'Name (2.5mm Bold), Number (2mm), Area (1.5mm)',
          'Number (2.5mm Bold), Name (2mm), Area (1.5mm with m² suffix)',
          'Area (2.5mm Bold), Number (2mm), Name (1.5mm)',
          'All three labels use the same 2mm Bold formatting',
        ],
        answer: 'Number (2.5mm Bold), Name (2mm), Area (1.5mm with m² suffix)',
      },
      {
        type: 'fillblank',
        question: 'All DPA tags use the font ___ to match the DPC project text standard from the Project Setup course.',
        answer: 'Arial',
      },
      {
        type: 'truefalse',
        question: 'The origin (reference plane intersection) in a tag family is the leader attachment point — where the leader line connects to the tag when a leader is used.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The Equipment Tag includes an Asset ID label below the hexagon. For this label to populate with data, what must be true?',
        options: [
          'Asset ID must be a Type parameter in both the tag and the equipment family',
          'Asset ID must be a Shared Parameter present in both the equipment family and available to the tag — using the same GUID',
          'The equipment must be placed before the tag family is loaded',
          'Asset ID values are generated automatically by Revit when a tag is applied',
        ],
        answer: 'Asset ID must be a Shared Parameter present in both the equipment family and available to the tag — using the same GUID',
      },
      {
        type: 'mcq',
        question: 'Tags are built using which Revit tool to create dynamic, parameter-reading text?',
        options: [
          'Text tool',
          'Label tool',
          'Dimension tool',
          'Detail Component tool',
        ],
        answer: 'Label tool',
      },
      {
        type: 'truefalse',
        question: 'The Window Tag uses a circle shape, identical to the Door Tag, to maintain visual consistency across opening types.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Where are the five DPA tag families stored in the family library folder structure?',
        options: [
          'C:\\DharrenPark\\FamilyLibrary\\00_Architecture\\Doors\\',
          'C:\\DharrenPark\\FamilyLibrary\\03_Annotation\\Tags\\',
          'C:\\DharrenPark\\FamilyLibrary\\05_Templates\\Current\\',
          'C:\\DharrenPark\\Project\\BIM\\WIP\\DPA\\ARCH\\',
        ],
        answer: 'C:\\DharrenPark\\FamilyLibrary\\03_Annotation\\Tags\\',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-14: Building the Structural Family Template
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-14',
    title: 'Building the Structural Family Template',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A family creator notices the analytical model centreline in a structural column template is positioned 50mm off-centre. What is the correct response?',
        options: [
          'Adjust the analytical reference planes to centre the line — minor adjustments are acceptable',
          'Do not modify the pre-built analytical reference planes — investigate why the visual geometry is not centred on them instead, since the analytical model position is set by structural engineering convention',
          'Delete the analytical model and let Revit regenerate it automatically',
          'Convert the analytical model to a Weak Reference to fix alignment issues',
        ],
        answer: 'Do not modify the pre-built analytical reference planes — investigate why the visual geometry is not centred on them instead, since the analytical model position is set by structural engineering convention',
      },
      {
        type: 'truefalse',
        question: 'The DPA naming convention for structural column section parameters uses "B" and "D" (engineering notation) to match international structural engineering standards.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The Structural Material parameter (Type) on a column family drives which two things simultaneously?',
        options: [
          'The column height and the column width',
          'The visual concrete hatch pattern in section drawings AND the analytical model material for structural analysis software',
          'The fire rating and the acoustic rating',
          'The Coarse and Fine visibility settings',
        ],
        answer: 'The visual concrete hatch pattern in section drawings AND the analytical model material for structural analysis software',
      },
      {
        type: 'mcq',
        question: 'Why does the DPA standard require separate families for rectangular and circular structural columns, rather than one family with a shape-switching parameter?',
        options: [
          'Revit does not support circular geometry in structural column families',
          'The geometry profile (rectangular extrusion vs. circular sweep) is fundamentally different in the Family Editor and cannot be parametrically switched within one family',
          'Circular columns require a different category than rectangular columns',
          'Structural engineers refuse to work with combined shape families',
        ],
        answer: 'The geometry profile (rectangular extrusion vs. circular sweep) is fundamentally different in the Family Editor and cannot be parametrically switched within one family',
      },
      {
        type: 'fillblank',
        question: 'Unlike furniture families which are hidden at Coarse, structural columns must always ___ at Coarse detail level because they are critical spatial elements.',
        answer: 'show',
      },
      {
        type: 'truefalse',
        question: 'A structural column placed between L00 and L01 levels should show its analytical model connecting to the structural slab analytical models above and below it.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A structural column family is tested and the concrete cut pattern does not appear correctly in a building section. What is the most likely cause?',
        options: [
          'The column needs to be moved to a different workset',
          'The Structural Material parameter is not connected to the column geometry, or the assigned material (e.g., STR-Concrete-InSitu-C32/40) does not have a correctly configured cut pattern',
          'The column is on the wrong subcategory',
          'The building section view template is set to the wrong scale',
        ],
        answer: 'The Structural Material parameter is not connected to the column geometry, or the assigned material (e.g., STR-Concrete-InSitu-C32/40) does not have a correctly configured cut pattern',
      },
      {
        type: 'mcq',
        question: 'How many types is the threshold mentioned for requiring a type catalogue for structural columns?',
        options: [
          'More than 4 types',
          'More than 8 types',
          'More than 20 types',
          'Type catalogues are never used for structural columns',
        ],
        answer: 'More than 8 types',
      },
      {
        type: 'truefalse',
        question: 'The DPA Structural Column template is built from Metric Generic Model.rft because structural elements require maximum flexibility.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A structural column family serves two stakeholders. Who are they and what does each need?',
        options: [
          'The contractor (needs cost data) and the client (needs renders)',
          'The architect (needs correct visual representation for spatial coordination) and the structural engineer (needs correct analytical model data for load calculations)',
          'The BIM Manager (needs file size control) and the IT department (needs network storage)',
          'The fire engineer (needs fire rating) and the acoustic engineer (needs acoustic rating)',
        ],
        answer: 'The architect (needs correct visual representation for spatial coordination) and the structural engineer (needs correct analytical model data for load calculations)',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-15: Profile Family Library
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-15',
    title: 'Profile Family Library',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A skirting profile family is applied to a wall sweep, but the skirting appears floating 50mm above the floor surface instead of sitting on it. What is the most likely cause?',
        options: [
          'The wall sweep height parameter is set incorrectly in the project',
          'The profile family\'s origin is not positioned at the bottom-left corner (wall/floor junction) — it needs to be repositioned in the profile family',
          'The skirting profile needs a Thickness parameter added',
          'The wall sweep type is using the wrong material',
        ],
        answer: 'The profile family\'s origin is not positioned at the bottom-left corner (wall/floor junction) — it needs to be repositioned in the profile family',
      },
      {
        type: 'truefalse',
        question: 'Profile families contain both 2D Detail Lines for the cross-section and a simplified 3D representation for preview purposes.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The origin position for a handrail/railing profile family should be:',
        options: [
          'At the bottom of the handrail cross-section, where it would rest on a support',
          'At the centre of the handrail cross-section — Revit sweeps the profile centred on the railing path',
          'At the front face of the handrail (the grip surface users touch)',
          'At the top of the handrail cross-section',
        ],
        answer: 'At the centre of the handrail cross-section — Revit sweeps the profile centred on the railing path',
      },
      {
        type: 'mcq',
        question: 'The stair nosing profile uses an open loop rather than a closed loop. Why?',
        options: [
          'Open loops render faster than closed loops in Revit',
          'The nosing represents the tread edge profile only — it attaches to and extends from the existing tread geometry rather than being a standalone enclosed shape',
          'Closed loops are not supported in Stair Nosing profile usage',
          'Open loops allow the profile to have a Material parameter while closed loops do not',
        ],
        answer: 'The nosing represents the tread edge profile only — it attaches to and extends from the existing tread geometry rather than being a standalone enclosed shape',
      },
      {
        type: 'fillblank',
        question: 'Setting the Profile Usage to ___ ___ Mullion ensures a profile family appears in the curtain wall mullion type dropdown in a project.',
        answer: 'Curtain Wall',
      },
      {
        type: 'truefalse',
        question: 'For a skirting board family available in 75mm, 100mm, and 150mm heights, the most efficient DPA approach is one family with a Height parameter and three types, rather than three separate family files.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'Where is Profile Usage configured for a profile family?',
        options: [
          'Family Types dialog → New Parameter → Profile Usage type',
          'Manage tab → Family Category and Parameters → Profile Usage dropdown',
          'Create tab → Profile Usage panel',
          'Project-level Visibility/Graphics dialog',
        ],
        answer: 'Manage tab → Family Category and Parameters → Profile Usage dropdown',
      },
      {
        type: 'mcq',
        question: 'A mullion profile and a chamfered skirting profile would be built as separate families rather than types within one family. Why?',
        options: [
          'Mullion and skirting profiles must always be in separate categories',
          'Their cross-section shapes (line-work) are fundamentally different — separate Profile Usage settings and different geometric forms warrant separate families',
          'Revit limits each profile family to a single Profile Usage value, making combination impossible regardless of shape',
          'File size constraints require separating them',
        ],
        answer: 'Their cross-section shapes (line-work) are fundamentally different — separate Profile Usage settings and different geometric forms warrant separate families',
      },
      {
        type: 'truefalse',
        question: 'The DPA profile naming convention is [Category]-[Element]-[Profile Type]-[Variant].rfa, such as ARCH-Skirting-Chamfer-75mm.rfa.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'After building the four core profiles, where should ARCH-Handrail-Circular.rfa be stored?',
        options: [
          'C:\\DharrenPark\\FamilyLibrary\\04_Profiles\\WallSweeps\\',
          'C:\\DharrenPark\\FamilyLibrary\\04_Profiles\\Railings\\',
          'C:\\DharrenPark\\FamilyLibrary\\00_Architecture\\Furniture\\',
          'C:\\DharrenPark\\FamilyLibrary\\05_Templates\\Current\\',
        ],
        answer: 'C:\\DharrenPark\\FamilyLibrary\\04_Profiles\\Railings\\',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-16: Nested Family Standards
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-16',
    title: 'Nested Family Standards',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A door handle is nested into a door family rather than modelled directly. What is the primary justification under the DPA nesting standard?',
        options: [
          'Nested geometry always renders faster than directly modelled geometry',
          'The handle can be independently replaced with a different handle style, and the same handle family can be reused across multiple door types',
          'Nested families automatically appear in hardware schedules without any additional configuration',
          'Nesting reduces the overall door family file size significantly',
        ],
        answer: 'The handle can be independently replaced with a different handle style, and the same handle family can be reused across multiple door types',
      },
      {
        type: 'truefalse',
        question: 'The DPA maximum nesting depth standard is 3 levels: Host → Nested → Sub-nested.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A project has 150 doors, each with 1 Shared nested handle component. How many additional tracked elements does this create in Revit\'s database?',
        options: [
          '1 (the handle family itself)',
          '150 (one per door)',
          '150 (one per handle instance, since Shared status applies per instance)',
          'None — Shared status does not affect element tracking',
        ],
        answer: '150 (one per handle instance, since Shared status applies per instance)',
      },
      {
        type: 'mcq',
        question: 'How is the Handle Length parameter on the door template connected to the nested handle\'s own Handle Length parameter?',
        options: [
          'Both parameters update independently — there is no connection',
          'Select the nested handle instance → Properties → Handle Length → click the formula button → type the host parameter name "Handle Length"',
          'The connection happens automatically when both parameters share the same name',
          'A Yes/No parameter must be created to enable the connection',
        ],
        answer: 'Select the nested handle instance → Properties → Handle Length → click the formula button → type the host parameter name "Handle Length"',
      },
      {
        type: 'fillblank',
        question: 'The reusable handle family built in this lesson is visible only at ___ detail level — hidden at Coarse and Medium.',
        answer: 'Fine',
      },
      {
        type: 'truefalse',
        question: 'A nested family should default to Shared status "just in case" independent scheduling is needed later in the project.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'DPA-Handle-PushBar.rfa is built from which template?',
        options: [
          'Metric Door.rft — since it is used within door families',
          'Metric Generic Model.rft — it is a component that gets nested, not placed directly in projects',
          'Metric Furniture.rft — handles are considered furniture hardware',
          'Metric Casework.rft',
        ],
        answer: 'Metric Generic Model.rft — it is a component that gets nested, not placed directly in projects',
      },
      {
        type: 'mcq',
        question: 'Per the DPA nesting decision standard, when should a component NOT be nested?',
        options: [
          'When the component is reused across multiple host families',
          'When the component is always the same, has no independent replacement need, and modelling it directly in the host is simpler',
          'When the component needs its own schedule entry',
          'When the component has its own parameters that vary independently from the host',
        ],
        answer: 'When the component is always the same, has no independent replacement need, and modelling it directly in the host is simpler',
      },
      {
        type: 'truefalse',
        question: 'Setting a nested family to Shared allows it to be independently selected and tagged in the project, separate from its host family.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'By the end of the Intermediate tier (Lessons 9-16), which seven deliverables has the DPA family library accumulated?',
        options: [
          'Only the door and window templates',
          'Door, Window, Furniture, and Equipment templates; 5 annotation tags; Structural Column template; 4 profile families; and the reusable handle nested component',
          'Only the shared parameter file and QA checklist',
          'A complete set of finished production families ready for client handover',
        ],
        answer: 'Door, Window, Furniture, and Equipment templates; 5 annotation tags; Structural Column template; 4 profile families; and the reusable handle nested component',
      },
    ],
  },
];
