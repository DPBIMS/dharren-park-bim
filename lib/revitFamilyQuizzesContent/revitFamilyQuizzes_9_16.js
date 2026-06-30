// ============================================================
// REVIT FAMILY CREATION — QUIZZES rf-9 through rf-16 (INTERMEDIATE)
// File: lib/revitFamilyQuizzesContent/quizzes-9-16.js
// ============================================================

export const quizzes_9_16 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-9: Family Types & Type Catalogues
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-9',
    title: 'Family Types & Type Catalogues',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A structural steel family needs 200 types covering the full UC, UB, RHS, and CHS range. A project typically uses only 5-8 section sizes. What is the correct approach?',
        options: [
          'Embed all 200 types in the .rfa file so users always have everything available',
          'Create 200 separate .rfa files, one per section size',
          'Use a type catalogue (.txt file) so users select only the types they need at load time',
          'Create 4 families (one per section category) with 50 types each',
        ],
        answer: 'Use a type catalogue (.txt file) so users select only the types they need at load time',
      },
      {
        type: 'truefalse',
        question: 'A type catalogue .txt file can be stored in a different folder from the .rfa file as long as the filename matches.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The fastest way to create 10 door size types based on an existing "Single-Flush: 900x2100mm" type is:',
        options: [
          'Create each type from scratch by clicking New Type 10 times',
          'Duplicate the existing type 9 times and change only the differentiating parameter values',
          'Import types from an Excel spreadsheet',
          'Use the Array tool to generate multiple types automatically',
        ],
        answer: 'Duplicate the existing type 9 times and change only the differentiating parameter values',
      },
      {
        type: 'mcq',
        question: 'In a type catalogue header row, what does the format ",Width##LENGTH##millimeters" define?',
        options: [
          'A type name column called Width measured in millimeters',
          'A parameter column named Width, of type LENGTH, with values in millimeters',
          'A formula that calculates Width automatically in millimeters',
          'A subcategory named WIDTH with LENGTH units',
        ],
        answer: 'A parameter column named Width, of type LENGTH, with values in millimeters',
      },
      {
        type: 'fillblank',
        question: 'In a type catalogue file, the parameter names in the header row must exactly match the parameter names in the family — they are ___-sensitive.',
        answer: 'case',
      },
      {
        type: 'truefalse',
        question: 'When a type is renamed in the Family Editor, placed instances of that type lose their type association and revert to an unspecified state.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A family creator tests a new "Narrow: 550x2100mm" door type and gets a constraint error. What is the most likely cause?',
        options: [
          'The type name contains a colon which is not allowed',
          'The parameter values for that type create an impossible geometry condition — likely a component sized larger than the opening',
          'The type cannot be created from a duplicate of an existing type',
          'The Family Types dialog must be closed before new types take effect',
        ],
        answer: 'The parameter values for that type create an impossible geometry condition — likely a component sized larger than the opening',
      },
      {
        type: 'mcq',
        question: 'Before deleting a type from a production family in active use, what must be checked first?',
        options: [
          'Whether the type has a formula assigned',
          'Whether any project has placed instances of that type — instances must be reassigned before deletion',
          'Whether the type was created by duplication or from scratch',
          'Whether the type name appears in the type catalogue',
        ],
        answer: 'Whether any project has placed instances of that type — instances must be reassigned before deletion',
      },
      {
        type: 'truefalse',
        question: 'The "default type" in a family — the type shown first in the Type Selector when the family is loaded — should be set to the most commonly used size in the office.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A type catalogue file for "SingleFlushDoor.rfa" must be named:',
        options: [
          'TypeCatalogue_SingleFlushDoor.txt',
          'SingleFlushDoor_Types.txt',
          'SingleFlushDoor.txt',
          'Types.txt',
        ],
        answer: 'SingleFlushDoor.txt',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-10: Formulas & Conditional Logic
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-10',
    title: 'Formulas & Conditional Logic',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A door family has a "Frame Width" parameter that should always equal 8% of the door Width. Which formula is correct?',
        options: [
          'Frame Width = Width + 0.08',
          'Frame Width = Width * 0.08',
          'Frame Width = Width / 8',
          'Frame Width = 0.08',
        ],
        answer: 'Frame Width = Width * 0.08',
      },
      {
        type: 'truefalse',
        question: 'When a formula is entered for a parameter in the Family Types dialog, the Value cell for that parameter becomes editable so users can override the formula.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A panel family should never be narrower than 400mm. Which formula enforces this minimum?',
        options: [
          'Width = 400mm',
          'Safe Width = Width - 400mm',
          'Safe Width = if(Width < 400mm, 400mm, Width)',
          'Safe Width = and(Width, 400mm)',
        ],
        answer: 'Safe Width = if(Width < 400mm, 400mm, Width)',
      },
      {
        type: 'mcq',
        question: 'A family needs to calculate the diagonal of a rectangular panel. Width = 1200mm, Depth = 600mm. Which formula is correct?',
        options: [
          'Diagonal = Width + Depth',
          'Diagonal = sqrt(Width ^ 2 + Depth ^ 2)',
          'Diagonal = Width * Depth',
          'Diagonal = (Width + Depth) / 2',
        ],
        answer: 'Diagonal = sqrt(Width ^ 2 + Depth ^ 2)',
      },
      {
        type: 'fillblank',
        question: 'The Revit formula function that returns true only when ALL specified conditions are true is ___().',
        answer: 'and',
      },
      {
        type: 'mcq',
        question: 'A shelf unit has a "Number of Shelves" parameter. The formula "Shelf Spacing = Height / Number of Shelves" will cause an error when:',
        options: [
          'Number of Shelves is greater than 10',
          'Number of Shelves equals 0 — division by zero',
          'Height is less than Shelf Spacing',
          'Shelf Spacing is an Instance parameter',
        ],
        answer: 'Number of Shelves equals 0 — division by zero',
      },
      {
        type: 'mcq',
        question: 'A classification formula: if(Width < 700mm, "Narrow", if(Width < 1200mm, "Standard", "Wide")). A door with Width = 950mm returns:',
        options: [
          'Narrow',
          'Standard',
          'Wide',
          'An error — nested if() is not supported',
        ],
        answer: 'Standard',
      },
      {
        type: 'truefalse',
        question: 'A formula can reference a parameter that itself references the original parameter — creating a circular reference — as long as the values converge.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A family needs to snap a calculated width to the nearest 50mm increment. Which formula achieves this?',
        options: [
          'Snapped Width = round(Width)',
          'Snapped Width = round(Width / 50) * 50',
          'Snapped Width = Width - (Width mod 50)',
          'Snapped Width = roundup(Width / 50)',
        ],
        answer: 'Snapped Width = round(Width / 50) * 50',
      },
      {
        type: 'mcq',
        question: 'A Yes/No parameter "Is Fire Rated" should automatically be true when Height exceeds 2400mm. Which formula is correct?',
        options: [
          'Is Fire Rated = Height > 2400mm',
          'Is Fire Rated = if(Height > 2400mm, true, false)',
          'Is Fire Rated = and(Height, 2400mm)',
          'Is Fire Rated = Height / 2400mm',
        ],
        answer: 'Is Fire Rated = if(Height > 2400mm, true, false)',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-11: Visibility Controls
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-11',
    title: 'Visibility Controls',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A complex sofa family shows detailed cushion geometry in 1:100 floor plans making the drawings cluttered. What is the correct fix?',
        options: [
          'Reduce the polygon count of the cushion geometry',
          'Uncheck the Coarse checkbox on the cushion geometry and add Symbolic Lines for the plan representation at Coarse',
          'Delete the cushion geometry and replace with a simple extrusion',
          'Set the sofa family to hidden in the Visibility/Graphics dialog',
        ],
        answer: 'Uncheck the Coarse checkbox on the cushion geometry and add Symbolic Lines for the plan representation at Coarse',
      },
      {
        type: 'truefalse',
        question: 'A geometry element with Coarse and Medium checkboxes checked, and Fine unchecked, will appear in a 1:20 detail view but not in a 1:100 floor plan.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A door family has optional vision panel glazing. A user wants some door instances to have glazing and others not. Which parameter type controls this correctly?',
        options: [
          'A Type parameter named "Has Vision Panel" of type Yes/No',
          'An Instance parameter named "Show Vision Panel" of type Yes/No, connected to the glazing geometry\'s Visible property',
          'A Text parameter with values "Yes" and "No"',
          'A Material parameter set to transparent for hidden instances',
        ],
        answer: 'An Instance parameter named "Show Vision Panel" of type Yes/No, connected to the glazing geometry\'s Visible property',
      },
      {
        type: 'mcq',
        question: 'A project architect wants to turn off door swing arcs on a coordination plan without hiding door frames. What family feature makes this possible?',
        options: [
          'Setting the swing arc to Coarse visibility only',
          'Assigning the swing arc to a subcategory (e.g., Doors - Swing) that can be independently controlled in VG',
          'Making the swing arc a Yes/No visibility parameter',
          'Placing the swing arc as a Detail Line instead of a Symbolic Line',
        ],
        answer: 'Assigning the swing arc to a subcategory (e.g., Doors - Swing) that can be independently controlled in VG',
      },
      {
        type: 'fillblank',
        question: 'To show geometry ONLY when a Yes/No parameter "Show Complex Version" is false, the Visible formula should be: ___(Show Complex Version).',
        answer: 'not',
      },
      {
        type: 'truefalse',
        question: 'Symbolic Lines in a family are 3D elements that appear in all view types including plan, elevation, and section.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A furniture family\'s 3D sofa geometry looks distorted when cut at 1000mm height in plan view. What is the professional solution?',
        options: [
          'Redesign the sofa geometry to look better when sliced',
          'Set the 3D geometry to not visible in plan/RCP views and add clean 2D Symbolic Lines for the plan representation',
          'Lower the view cut height to 900mm so it cuts the sofa at a better point',
          'Apply a masking region over the sofa in every plan view',
        ],
        answer: 'Set the 3D geometry to not visible in plan/RCP views and add clean 2D Symbolic Lines for the plan representation',
      },
      {
        type: 'mcq',
        question: 'A new subcategory is needed for a custom family. Where is it created?',
        options: [
          'In the Family Editor: Manage tab → Object Styles → Model Objects → expand the category → New Subcategory',
          'In the Family Types dialog → New Parameter → Subcategory type',
          'In the project VG dialog → Model Categories → Add Subcategory',
          'In the Family Editor: Create tab → Subcategory panel → New',
        ],
        answer: 'In the Family Editor: Manage tab → Object Styles → Model Objects → expand the category → New Subcategory',
      },
      {
        type: 'truefalse',
        question: 'If a geometry element has both the Fine detail level unchecked AND a Yes/No visibility parameter set to false, the element is hidden even if someone manually checks Fine visibility.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A Masking Region in a family is used for:',
        options: [
          'Hiding geometry at specific detail levels',
          'Creating a white-filled 2D region that masks geometry behind it in a specific view orientation',
          'Controlling which subcategory geometry belongs to',
          'Driving visibility with a Yes/No parameter',
        ],
        answer: 'Creating a white-filled 2D region that masks geometry behind it in a specific view orientation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-12: Materials & Appearance in Families
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-12',
    title: 'Materials & Appearance in Families',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A furniture family needs each placed chair to potentially have a different upholstery color. Which material setup achieves this?',
        options: [
          'Assign a fixed material directly to the upholstery geometry',
          'Use By Category so the project Object Styles controls all chair colors',
          'Create an Instance parameter of Type: Material named "Upholstery Material" and connect it to the geometry',
          'Create a Type parameter of Type: Material — then create one type per color',
        ],
        answer: 'Create an Instance parameter of Type: Material named "Upholstery Material" and connect it to the geometry',
      },
      {
        type: 'truefalse',
        question: 'A By Category material assignment on family geometry uses the material defined for that category in the project\'s Object Styles dialog.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A structural concrete column family should show the correct concrete hatch pattern when cut in section. The cut pattern comes from:',
        options: [
          'The family\'s Coarse detail level settings',
          'The material\'s Graphics tab cut pattern — set in the material definition',
          'The subcategory line weight settings in Object Styles',
          'The family\'s Subcategory assignment',
        ],
        answer: 'The material\'s Graphics tab cut pattern — set in the material definition',
      },
      {
        type: 'mcq',
        question: 'The priority hierarchy for material display — from highest to lowest — when a geometry element has both a subcategory material and a material parameter is:',
        options: [
          'Subcategory material → Material parameter → By Category',
          'Material parameter → Subcategory material → By Category',
          'By Category → Subcategory material → Material parameter',
          'All three apply simultaneously with visual blending',
        ],
        answer: 'Material parameter → Subcategory material → By Category',
      },
      {
        type: 'fillblank',
        question: 'A material parameter is connected to geometry by selecting the geometry → Properties → Material → clicking the small grey ___ button beside the Material field → typing the parameter name.',
        answer: 'formula',
      },
      {
        type: 'truefalse',
        question: 'Embedding custom texture bitmap files inside a family .rfa file is the recommended approach for distributing families across offices.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A door family has Frame Material (Type) and Glass Material (Type) as separate material parameters. What does this allow?',
        options: [
          'The door frame and glazing can have different materials per door type — a timber door type uses oak frame; an aluminium type uses anodised aluminium',
          'Both materials update simultaneously when one is changed',
          'The materials can only be changed by the family creator, not by the project team',
          'Each placed door instance can have a different frame and glass material independently',
        ],
        answer: 'The door frame and glazing can have different materials per door type — a timber door type uses oak frame; an aluminium type uses anodised aluminium',
      },
      {
        type: 'mcq',
        question: 'A subcategory material for "Doors - Glass" is set to "Glazing - Clear" in Object Styles. A door family assigns its glazing geometry to the "Doors - Glass" subcategory but also has an explicit Glass Material parameter set to "Glazing - Frosted." Which material displays?',
        options: [
          'Glazing - Clear (subcategory material always takes priority)',
          'Glazing - Frosted (explicit material parameter takes priority over subcategory)',
          'Both materials blend together visually',
          'Whichever was set most recently',
        ],
        answer: 'Glazing - Frosted (explicit material parameter takes priority over subcategory)',
      },
      {
        type: 'truefalse',
        question: 'Material Takeoff schedules in Revit can automatically calculate the total area of a specific upholstery material across all chair instances — but only if the material is assigned via a material parameter, not By Category.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'Most MEP equipment families use By Category material assignment. When would an MEP family creator add an explicit material parameter instead?',
        options: [
          'Never — MEP families always use By Category',
          'When a specific finish must be specified and reported (e.g., stainless steel cladding on kitchen equipment, powder-coat colour on distribution boards)',
          'When the family has more than 5 types',
          'When the family is shared (nested) inside another family',
        ],
        answer: 'When a specific finish must be specified and reported (e.g., stainless steel cladding on kitchen equipment, powder-coat colour on distribution boards)',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-13: Nested Families
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-13',
    title: 'Nested Families',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A door handle family is nested inside a door family. An architect wants to swap the handle style on one specific door type. What is the advantage of nesting over building the handle directly into the door geometry?',
        options: [
          'Nested handles render faster than built-in geometry',
          'The handle can be independently swapped to a different handle family type without rebuilding the door',
          'Nested families automatically schedule in the door schedule',
          'Nesting reduces the door family file size',
        ],
        answer: 'The handle can be independently swapped to a different handle family type without rebuilding the door',
      },
      {
        type: 'truefalse',
        question: 'When a host family with nested families is loaded into a project, the nested families must be separately loaded before the host family will work correctly.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'To load a nested family into a host family currently open in the Family Editor, use:',
        options: [
          'Create tab → Component → Load from Library',
          'Insert tab → Load Family → navigate to the nested .rfa → Open',
          'Manage tab → Family Library → Import',
          'File → Link Family',
        ],
        answer: 'Insert tab → Load Family → navigate to the nested .rfa → Open',
      },
      {
        type: 'mcq',
        question: 'After placing a nested family instance inside a host family, how is the nested family\'s position constrained to the host\'s parametric skeleton?',
        options: [
          'The nested family automatically snaps to the host origin',
          'Use Modify → Align → lock the nested family\'s reference planes to the host\'s reference planes',
          'Enter coordinates in the Properties panel',
          'Nesting automatically constrains position — no additional step required',
        ],
        answer: 'Use Modify → Align → lock the nested family\'s reference planes to the host\'s reference planes',
      },
      {
        type: 'fillblank',
        question: 'To connect a host parameter to a nested family parameter, select the nested instance → Properties → click the ___ button beside the nested parameter → type the host parameter name.',
        answer: 'formula',
      },
      {
        type: 'truefalse',
        question: 'A nested family marked as "Shared" appears independently in project schedules and can be tagged separately from the host family.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'When should a sub-component NOT be nested as a separate family?',
        options: [
          'When the component is reused across multiple host families',
          'When the component needs to appear in its own schedule',
          'When the component is a simple identical detail (like a decorative screw) that never changes and has no independent scheduling need',
          'When the component has its own parameters',
        ],
        answer: 'When the component is a simple identical detail (like a decorative screw) that never changes and has no independent scheduling need',
      },
      {
        type: 'mcq',
        question: 'A workstation family has 4 shared nested component families. The project has 150 workstations. How many additional tracked elements does this create in Revit\'s database?',
        options: [
          '4 (one per nested family type)',
          '150 (one per workstation)',
          '600 (150 workstations × 4 shared nested components each)',
          'None — shared nested families are not tracked separately',
        ],
        answer: '600 (150 workstations × 4 shared nested components each)',
      },
      {
        type: 'truefalse',
        question: 'Nesting families 6-7 levels deep is acceptable for complex building components that require detailed sub-assembly modelling.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A nested family\'s detail level visibility is controlled by:',
        options: [
          'Only the host family\'s detail level settings — nested families inherit automatically',
          'Both the host family\'s detail level settings AND the nested family\'s own detail level settings — both must allow display for the nested family to show',
          'Only the nested family\'s own detail level settings',
          'The project\'s View Template assigned to the active view',
        ],
        answer: 'Both the host family\'s detail level settings AND the nested family\'s own detail level settings — both must allow display for the nested family to show',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-14: Hosted Families — Walls, Floors & Ceilings
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-14',
    title: 'Hosted Families — Walls, Floors & Ceilings',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A wall-hosted door family is placed on an angled wall. Without any additional formulas or constraints, how does the family respond to the wall angle?',
        options: [
          'The family remains horizontal regardless of wall angle — it must be manually rotated',
          'The family automatically rotates to follow the wall angle — this is handled by the hosting system',
          'The family cannot be placed on non-orthogonal walls',
          'The family places correctly but the void cut does not follow the wall angle',
        ],
        answer: 'The family automatically rotates to follow the wall angle — this is handled by the hosting system',
      },
      {
        type: 'truefalse',
        question: 'Moving the pre-built reference planes in a wall-hosted door template (Wall Face, Center, Width extents) is recommended to customise the family\'s relationship to its host.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A door void needs to cut through walls ranging from 100mm to 400mm thick. How should the void depth be set?',
        options: [
          'Exactly 250mm — the average of the expected range',
          '100mm — the minimum wall thickness',
          'Intentionally oversized (e.g., 600mm) to cut completely through any wall thickness in the expected range',
          'Set as a parameter the user inputs manually per placement',
        ],
        answer: 'Intentionally oversized (e.g., 600mm) to cut completely through any wall thickness in the expected range',
      },
      {
        type: 'mcq',
        question: 'A ceiling-hosted recessed light fixture needs to maintain vertical orientation even when placed on a sloped ceiling. Which setting achieves this?',
        options: [
          'Check "Cut with Voids When Loaded" in Family Category and Parameters',
          'Check "Always Vertical" in Family Category and Parameters',
          'Set the hosting type to Face-Hosted instead of Ceiling-Hosted',
          'Add a formula: Rotation Angle = 0',
        ],
        answer: 'Check "Always Vertical" in Family Category and Parameters',
      },
      {
        type: 'fillblank',
        question: 'The family property that must be checked for a wall-hosted family\'s void forms to cut through the host wall is "Cut with ___ When Loaded."',
        answer: 'Voids',
      },
      {
        type: 'truefalse',
        question: 'A face-hosted family can be placed on a wall face, a floor face, a ceiling face, or the face of any model element — making it the most flexible hosting type.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'An architect realizes a ceiling-hosted downlight family was built using the wrong template — it should be face-hosted. What is the correct resolution?',
        options: [
          'Change the "Hosting" property in Family Category and Parameters',
          'The family must be rebuilt from the correct face-based template — hosting type cannot be changed after creation',
          'Use the Convert Hosting Type command in the Modify tab',
          'Save the family with a new name — the new name changes the hosting type',
        ],
        answer: 'The family must be rebuilt from the correct face-based template — hosting type cannot be changed after creation',
      },
      {
        type: 'mcq',
        question: 'A floor-hosted drain family is placed on a floor slab. When the floor slab\'s level elevation is changed, what happens to the drain?',
        options: [
          'The drain stays at its original elevation and must be manually moved',
          'The drain moves with the floor slab because of the host relationship',
          'The drain is deleted and must be replaced',
          'The drain moves only if "Moves With Nearby Elements" is checked in the project',
        ],
        answer: 'The drain moves with the floor slab because of the host relationship',
      },
      {
        type: 'truefalse',
        question: 'A wall outlet that does not cut the wall and does not need to move with the wall can be built as a non-hosted family placed at the correct position.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The horizontal and vertical flip arrows on a placed door family are controls for:',
        options: [
          'Flipping the door between Coarse and Fine detail level display',
          'The horizontal flip changes door handing (left/right); the vertical flip changes which face the door swings toward',
          'Rotating the door 90 degrees and 180 degrees respectively',
          'Swapping between the door types in the family',
        ],
        answer: 'The horizontal flip changes door handing (left/right); the vertical flip changes which face the door swings toward',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-15: Annotation Families
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-15',
    title: 'Annotation Families',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'An annotation family tag is defined with 2.5mm text. In a 1:100 floor plan, the text prints at 2.5mm. In a 1:50 detail, the same tag text also prints at 2.5mm. Why?',
        options: [
          'The text size is controlled by the view\'s annotation crop region',
          'Annotation families are scale-independent — defined in paper dimensions, they always print at the defined size regardless of view scale',
          'The text was set to "Model" rather than "Annotation" size',
          'The VG dialog overrides annotation sizes to match the view scale',
        ],
        answer: 'Annotation families are scale-independent — defined in paper dimensions, they always print at the defined size regardless of view scale',
      },
      {
        type: 'truefalse',
        question: 'A tag built from the "Generic Annotation.rft" template can read any model parameter from any element category.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'In the Edit Label dialog for a door tag, the "Available Parameters" list shows parameters for which elements?',
        options: [
          'All parameters in the entire project',
          'Only shared parameters in the office shared parameter file',
          'Parameters of the tag\'s category — for a Door Tag, door-related parameters like Mark, Width, Height, Type Name',
          'Only built-in Revit parameters, not custom parameters',
        ],
        answer: 'Parameters of the tag\'s category — for a Door Tag, door-related parameters like Mark, Width, Height, Type Name',
      },
      {
        type: 'mcq',
        question: 'A room tag needs to show "101" on the first line and "Reception" on the second line. How is this configured in the Edit Label dialog?',
        options: [
          'Add Number and Name to the same row with a "/" separator',
          'Add Number parameter first, then Name parameter with the "Break" checkbox checked between them — this inserts a line break',
          'Create two separate labels and position them manually',
          'Use a formula: Number & newline() & Name',
        ],
        answer: 'Add Number parameter first, then Name parameter with the "Break" checkbox checked between them — this inserts a line break',
      },
      {
        type: 'fillblank',
        question: 'In the Edit Label dialog, static text added before a parameter value (e.g., "GL" before a glass mark number) is entered in the ___ field.',
        answer: 'Prefix',
      },
      {
        type: 'truefalse',
        question: 'The origin point (reference plane intersection) in an annotation family is the leader attachment point — where the leader line terminates on the tag.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A door tag is placed on a door but shows "?" instead of the mark number. What are the two most likely causes?',
        options: [
          'The tag family is in the wrong Revit version and needs upgrading',
          'Either the door\'s Mark parameter is empty, or the tag label references a regular family parameter instead of a shared parameter — tags can only read shared parameters and built-in parameters',
          'The tag is placed in a linked model and cannot read host model parameters',
          'The door family is wall-hosted which prevents tag reading',
        ],
        answer: 'Either the door\'s Mark parameter is empty, or the tag label references a regular family parameter instead of a shared parameter — tags can only read shared parameters and built-in parameters',
      },
      {
        type: 'mcq',
        question: 'Generic Annotation families differ from Tag families in that they:',
        options: [
          'Cannot contain labels that read model parameters',
          'Are placed directly in views as standalone graphics, not attached to or reading from model elements',
          'Can only be used in plan views, not elevations or sections',
          'Do not scale with the view scale',
        ],
        answer: 'Are placed directly in views as standalone graphics, not attached to or reading from model elements',
      },
      {
        type: 'truefalse',
        question: 'A north arrow annotation family automatically rotates to point to true north based on the project\'s shared coordinate system.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'To show a door tag width x height as "900 x 2100" on one line (without a line break), the Edit Label dialog should be configured as:',
        options: [
          'Width row with Break checked, Height row below',
          'Width row with Suffix " x ", Height row with Break unchecked (same line)',
          'A single formula row calculating Width + " x " + Height',
          'Two separate labels positioned side by side',
        ],
        answer: 'Width row with Suffix " x ", Height row with Break unchecked (same line)',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rf-16: Shared Parameters in Families
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rf-16',
    title: 'Shared Parameters in Families',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A door family has a "Fire Rating" regular family parameter. Why can\'t a fire rating tag display this value?',
        options: [
          'Tags can only read integer parameters, not text',
          'Tags can only read shared parameters and built-in Revit parameters — regular family parameters are not accessible to tags',
          'The parameter must be an Instance parameter for tags to read it',
          'The parameter must be placed in the "Identity Data" group for tags to access it',
        ],
        answer: 'Tags can only read shared parameters and built-in Revit parameters — regular family parameters are not accessible to tags',
      },
      {
        type: 'truefalse',
        question: 'A shared parameter\'s GUID (Globally Unique Identifier) allows Revit to recognize it as the same parameter across different families, projects, and tag families.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'In the Family Editor, where is the Shared Parameters command located to access the office shared parameter file?',
        options: [
          'Create tab → Properties panel → Shared Parameters',
          'Manage tab → Shared Parameters',
          'Insert tab → Load Shared Parameters',
          'File → Shared Parameters',
        ],
        answer: 'Manage tab → Shared Parameters',
      },
      {
        type: 'mcq',
        question: 'A project team member reports that a shared parameter added to a door family does not appear as an available column in the door schedule. What is the most likely fix?',
        options: [
          'Reload the door family with Overwrite',
          'Set the project to reference the same shared parameter file: Manage → Shared Parameters → browse to the .txt file',
          'Change the parameter from Type to Instance',
          'Delete and recreate the schedule',
        ],
        answer: 'Set the project to reference the same shared parameter file: Manage → Shared Parameters → browse to the .txt file',
      },
      {
        type: 'fillblank',
        question: 'The Autodesk ___ shared parameter file provides pre-configured parameters (Manufacturer, ModelNumber, WarrantyDurationParts) needed for FM data handover.',
        answer: 'COBie',
      },
      {
        type: 'truefalse',
        question: 'Two offices create a shared parameter both named "Fire Rating" in separate .txt files. These parameters are interchangeable because they have the same name.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'For the IFC export to map a Revit shared parameter "Fire Rating" to the IFC property "Pset_DoorCommon.FireRating," what must be true?',
        options: [
          'The parameter must be named exactly "Pset_DoorCommon.FireRating" in Revit',
          'An IFC mapping file entry must link the shared parameter name/GUID to the IFC property set name and property name',
          'The parameter must be a Type parameter (not Instance)',
          'The door family must be in the Doors category AND have a subcategory named "FireRating"',
        ],
        answer: 'An IFC mapping file entry must link the shared parameter name/GUID to the IFC property set name and property name',
      },
      {
        type: 'mcq',
        question: 'A tag family shows "?" for the "Fire Rating" shared parameter even though the model family has the correct value. What is the most likely cause?',
        options: [
          'The Fire Rating value is empty on the model element',
          'The tag family and model family reference the same parameter NAME but from different .txt files — they have different GUIDs and Revit does not recognize them as the same parameter',
          'Fire Rating cannot be displayed in tags — only in schedules',
          'The tag must be an Instance parameter to display in tags',
        ],
        answer: 'The tag family and model family reference the same parameter NAME but from different .txt files — they have different GUIDs and Revit does not recognize them as the same parameter',
      },
      {
        type: 'truefalse',
        question: 'The office shared parameter .txt file should be stored on each team member\'s local drive for fastest access during family creation.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Adding COBie shared parameters to production families during project setup (rather than at handover) achieves:',
        options: [
          'Faster model performance because COBie parameters are optimised',
          'FM handover data is captured correctly throughout the project as elements are placed and specified — not scrambled together in the final week',
          'Automatic COBie export without any additional configuration',
          'The ability to use COBie parameters as visibility controls in families',
        ],
        answer: 'FM handover data is captured correctly throughout the project as elements are placed and specified — not scrambled together in the final week',
      },
    ],
  },
];
