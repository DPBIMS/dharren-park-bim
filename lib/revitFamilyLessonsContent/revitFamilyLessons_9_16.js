// ============================================================
// REVIT FAMILY CREATION — LESSONS rf-9 through rf-16 (INTERMEDIATE)
// File: lib/revitFamilyLessonsContent/lessons-9-16.js
// cat: 'intermediate' — accessible to Pro+ plans
// Deliverable: professional-grade multi-type family with nested components
// ============================================================

export const lessons_9_16 = [

  // ─────────────────────────────────────────────────────────
  // rf-9: Family Types & Type Catalogues
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-9',
    num: 9,
    title: 'Family Types & Type Catalogues',
    topic: 'Parameters',
    cat: 'intermediate',
    readTime: '14 min',
    free: false,
    desc: 'Build comprehensive type tables inside the Family Types dialog and create external type catalogue files that let users load only the sizes they need — essential for families with large size series.',
    intro: `A family without types is a one-size-fits-all tool. A family with a well-built type table is a professional asset that covers an entire product range with a single .rfa file. A family with a type catalogue is a library-grade resource that can contain hundreds of sizes without bloating the project file.

This lesson covers both systems: building the type table inside the Family Editor for families with manageable type counts, and creating external type catalogue .txt files for families with large size series — structural sections, pipe fittings, standard doors, modular furniture systems — where loading every type into every project would be unnecessary and wasteful.`,
    sections: [
      {
        title: 'Building the Type Table',
        content: `The Family Types dialog (Create tab → Family Types) is where all types are defined. Building a complete, well-organised type table is a professional standard — it is the difference between a family that is immediately usable and one that requires every team member to manually create the sizes they need.

**Type Naming Convention:**
Type names appear in the Type Selector dropdown in the project. They must be descriptive, consistent, and sortable. Standard approaches:

For size-based types (doors, windows, structural sections):
"[Category Abbreviation]: [Width] x [Height]mm"
Example: "Single-Flush: 750x2100mm", "Single-Flush: 900x2100mm", "Single-Flush: 1000x2100mm"

For product-based types (manufacturer equipment):
"[Manufacturer] [Model Number] — [Key Specification]"
Example: "Daikin FTXM25 — 2.5kW", "Daikin FTXM35 — 3.5kW"

For structural sections (following industry standard notation):
"UC 152x152x23", "UC 203x203x60", "UB 254x102x22"

**Building a Size Series Efficiently:**
1. Create the first type with all parameter values correct
2. Select that type → Duplicate → rename to the next size
3. Change only the values that differ (Width, Height, or section dimensions)
4. Repeat for every size in the series

Do not create each type from scratch — duplication preserves all shared values (materials, identity data, constants) and only requires updating the differentiating parameters.

**Sorting Types:**
Types appear in the Family Types list in the order they were created. Revit does not automatically sort them. For a door family with 20 sizes, manually order types from smallest to largest so the Type Selector dropdown is logical. To reorder: unfortunately Revit does not have a drag-to-reorder function in the Family Types dialog — delete and recreate in the desired order, or accept whatever order results from creation and rely on the Type Selector search functionality.

**Testing the Type Table:**
After building all types: select each type in turn → click Apply → verify all geometry updates correctly. A type that causes a constraint error means the parameter values for that type create an impossible geometry condition (e.g., a hole larger than the panel it is in). Investigate and correct before publishing the family.`,
      },
      {
        title: 'What is a Type Catalogue?',
        content: `A type catalogue is an external .txt file that accompanies the family .rfa file. Instead of all types being embedded in the .rfa, the type catalogue defines the types separately. When a user loads the family, Revit reads the catalogue file and presents a filtered list — the user selects only the types they need.

**Why Type Catalogues Exist:**
A structural steel section family might need 200 types (every UC, UB, RHS, CHS section in the standard range). If all 200 types are embedded in the .rfa, loading the family loads all 200 types into the project regardless of how many are used. On a project that only uses 5 section sizes, the other 195 types are dead weight — consuming memory and cluttering the Type Selector.

With a type catalogue: the user loads the family → a dialog shows all 200 types with checkboxes → the user selects the 5 they need → only those 5 types are loaded into the project.

**When to Use a Type Catalogue:**
Use type catalogues for families with more than 15-20 types, especially when:
- The full type range covers a standard series (structural sections, pipe sizes, standard door sizes)
- Projects will typically only need a subset of the full range
- The family is shared across many projects with varying requirements

Do not use type catalogues for families where all types are always needed (a custom furniture family with 3 configurations that every project uses all 3 of).

**Type Catalogue File Location:**
The catalogue .txt file must be in the same folder as the .rfa file and have the same filename with .txt extension:
- Family file: SingleFlushDoor.rfa
- Catalogue file: SingleFlushDoor.txt

If the .txt file is in a different location or has a different name, Revit will not find it and will load all types from the .rfa instead.`,
      },
      {
        title: 'Creating a Type Catalogue File',
        content: `A type catalogue is a plain text file with a specific format. It can be created in any text editor (Notepad, VS Code, Excel saved as tab-delimited text).

**The File Format:**

Line 1 — Header row defining the parameters:
",[ParameterName]##[Type]##[Units]"

Each column is separated by a comma. The first column is the type name (no header label). Each subsequent column defines a parameter with its data type and units.

Common type codes:
- LENGTH — a length measurement (use millimeters: millimeters)
- NUMBER — a dimensionless number
- INTEGER — a whole number
- YESNO — true/false
- TEXT — a text string
- MATERIAL — a material parameter

Example header for a door family:
",Width##LENGTH##millimeters,Height##LENGTH##millimeters,Frame Width##LENGTH##millimeters"

Line 2 onwards — Data rows:
Each row defines one type. Format:
"TypeName,Value1,Value2,Value3"

Example data rows:
"Single-Flush: 750x2100mm,750,2100,75"
"Single-Flush: 900x2100mm,900,2100,75"
"Single-Flush: 1000x2100mm,1000,2100,75"
"Single-Flush: 1200x2100mm,1200,2100,100"

**Complete Example — Door Type Catalogue:**
\`\`\`
,Width##LENGTH##millimeters,Height##LENGTH##millimeters,Frame Width##LENGTH##millimeters
Single-Flush: 750x2100mm,750,2100,75
Single-Flush: 800x2100mm,800,2100,75
Single-Flush: 900x2100mm,900,2100,75
Single-Flush: 1000x2100mm,1000,2100,75
Single-Flush: 1200x2100mm,1200,2100,100
Single-Flush: 750x2400mm,750,2400,75
Single-Flush: 900x2400mm,900,2400,75
\`\`\`

**Important Rules:**
- No spaces before or after commas
- Type names with commas in them must be enclosed in quotes
- Parameter names in the catalogue must exactly match parameter names in the family (case-sensitive)
- The family .rfa must have at least one type defined internally — the catalogue adds to or replaces those types at load time`,
      },
      {
        title: 'Managing Types in Production',
        content: `Once a family is in production use across multiple projects, type management requires discipline. Changes to types affect every project using the family.

**Adding a New Type to a Production Family:**
1. Open the family in the Family Editor
2. Add the new type in the Family Types dialog (or add a new row to the type catalogue)
3. Test the new type thoroughly
4. Increment the version number in the family description
5. Reload into all affected projects or redistribute to the library

**Renaming Types:**
Renaming a type in the Family Editor changes the type name everywhere it is displayed. However, any placed instances retain their type association — Revit tracks types by internal ID, not name. Renaming is safe but should be communicated to the project team as it changes what they see in the Type Selector.

**Deleting Types:**
Before deleting a type: check if any project has placed instances of that type. If so, coordinate with the project team to swap those instances to a different type before deleting. Deleting a type with live project instances forces those instances to an unspecified state.

**Type Catalogue Versioning:**
When updating a type catalogue, version both the .rfa and the .txt file together. Store both in the same versioned folder. Never overwrite the previous version without keeping a backup — a project loaded from v1 of the catalogue cannot reload from v2 without manual reselection of types.

**The "Default Type" Setting:**
In the Family Types dialog, the type that is selected when the dialog is opened is the "default type" — the type that appears in the Type Selector when the family is first loaded. Set the default type to the most commonly used size in the office. For a door family, set the default to the most frequently placed door size.`,
      },
    ],
    takeaways: [
      'Type names should be descriptive and consistent — they appear in the Type Selector dropdown and drive user experience',
      'Build size series by duplicating an existing type and changing only the differing parameters — never create each type from scratch',
      'Type catalogues are external .txt files (same name, same folder as .rfa) that let users select only the types they need — use for families with more than 15-20 types',
      'The catalogue header format: ,[ParameterName]##[Type]##[Units] — parameter names must exactly match the family parameter names',
      'Never delete a type from a production family without first checking for placed instances in live projects',
    ],
    resource: {
      title: 'Autodesk Revit — Type Catalogues',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-type-catalogues-families',
    },
    prev: 'rf-8',
    next: 'rf-10',
  },

  // ─────────────────────────────────────────────────────────
  // rf-10: Formulas & Conditional Logic
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-10',
    num: 10,
    title: 'Formulas & Conditional Logic',
    topic: 'Parameters',
    cat: 'intermediate',
    readTime: '15 min',
    free: false,
    desc: 'Use formulas and conditional logic in the Family Types dialog to create parameters that calculate automatically, enforce geometric relationships, and respond intelligently to other parameter values.',
    intro: `A family with only manually-entered parameters requires the user to know the correct value for every dimension. A family with formulas calculates correct values automatically — frame width that scales proportionally with door width, shelf spacing that divides evenly into available height, a flag that automatically marks the family as fire-rated when a certain height threshold is exceeded.

Formulas are what elevate a parametric family from a resizable shape to an intelligent building component. This lesson covers Revit's formula syntax from basic arithmetic through conditional logic and built-in functions — everything needed to build families that behave correctly without requiring the user to manually calculate every value.`,
    sections: [
      {
        title: 'Formula Basics — Syntax and Arithmetic',
        content: `Formulas are entered in the Formula column of the Family Types dialog. Click any parameter's Formula cell to enter or edit a formula. The parameter value is then calculated from the formula rather than manually entered — the Value cell becomes greyed out.

**Basic Arithmetic Operators:**
- Addition: Width + 50
- Subtraction: Height - Frame Width
- Multiplication: Width * 2
- Division: Height / 3
- Exponentiation: Width ^ 2 (Width squared)

**Rules for Formula Syntax:**

Parameter names in formulas must match exactly — case-sensitive. If the parameter is "Frame Width" (with a capital W), the formula must reference "Frame Width" (not "frame width" or "framewidth").

Units are handled automatically for Length parameters — you do not need to add "mm." Revit knows "Width" is a length and handles the units in the calculation.

Mixing unit types requires care: you cannot directly add a Length to a Number. Keep calculations within compatible unit types.

**Practical Formula Examples:**

Frame Width driven by door Width:
Frame Width = Width * 0.08

This sets the frame width to 8% of the door width — a common proportional relationship. As the door width changes, the frame width updates automatically.

Shelf spacing dividing evenly:
Shelf Spacing = (Height - (Top Clearance + Bottom Clearance)) / Number of Shelves

The total usable height minus clearances, divided by the number of shelves, gives the spacing automatically.

Panel thickness as a function of width:
Panel Thickness = Width / 24

A standard structural rule of thumb — panel thickness is width divided by 24.

**Reporting Parameters:**
A reporting parameter reads a geometric measurement and makes it available as a parameter value. It is read-only — the formula reads the model geometry. Useful for: reporting the actual cut length of a sweep, reading the current host wall thickness, making a geometric measurement available for scheduling.`,
      },
      {
        title: 'Conditional Logic — The if() Function',
        content: `The if() function adds decision-making to formulas. Instead of a fixed calculation, the formula chooses between two outcomes based on a condition.

**Syntax:**
if(condition, value_if_true, value_if_false)

**Simple Example — Minimum Width Enforcement:**
Adjusted Width = if(Width < 600mm, 600mm, Width)

If the Width parameter is less than 600mm, Adjusted Width is set to 600mm (the minimum). Otherwise it uses the actual Width value. This prevents the family from being set to an invalid size.

**Comparing Parameters:**
Conditions can compare:
- A parameter to a fixed value: Width < 600mm
- Two parameters to each other: Width > Height
- A parameter to another formula result: Frame Width > Width / 10

Comparison operators: < (less than), > (greater than), <= (less than or equal), >= (greater than or equal), = (equal to)

**Text Conditions:**
if(Material = "Timber", 18mm, 25mm)
If the Material parameter equals "Timber", use 18mm thickness. Otherwise use 25mm. Note: text comparisons in Revit formulas are case-sensitive and require exact string matching.

**Yes/No Parameter Conditions:**
Yes/No parameters (true/false) are particularly powerful as condition inputs:
Is Fire Rated = if(Height > 2400mm, true, false)

This automatically marks the family as fire-rated when the height exceeds 2400mm. The Is Fire Rated parameter then drives visibility of fire-rated symbols or colors.

**Nested if() — Multiple Conditions:**
if(Width < 700mm, "Small", if(Width < 1000mm, "Medium", "Large"))

This creates a size classification: under 700mm = Small, 700-999mm = Medium, 1000mm and above = Large. The result can be used in schedules or drive other parameters.`,
      },
      {
        title: 'Built-in Functions',
        content: `Revit\'s formula system includes mathematical and logical functions beyond basic arithmetic and if(). These enable more sophisticated parametric relationships.

**Mathematical Functions:**

sin(angle), cos(angle), tan(angle)
Trigonometric functions. The angle parameter must be in degrees. Useful for: calculating the horizontal component of a diagonal element, positioning geometry at an angle.

Example — horizontal offset for an angled brace:
Horizontal Offset = Length * cos(Angle)
Vertical Rise = Length * sin(Angle)

abs(value)
Absolute value — removes the negative sign. Useful for: ensuring a calculated dimension is always positive regardless of the calculation direction.

sqrt(value)
Square root. Useful for: Pythagorean calculations, calculating diagonal dimensions.
Diagonal = sqrt(Width ^ 2 + Depth ^ 2)

round(value), roundup(value), rounddown(value)
Rounds a calculated value to the nearest whole number (or up/down). Useful for: snapping a calculated dimension to a standard size increment.
Rounded Width = round(Width / 100) * 100
This snaps Width to the nearest 100mm increment.

**Logical Functions:**

and(condition1, condition2)
Returns true only if both conditions are true.
Is Large Fire Door = and(Width > 1000mm, Is Fire Rated)

or(condition1, condition2)
Returns true if either condition is true.
Needs Closer = or(Width > 1000mm, Is Fire Rated)

not(condition)
Reverses the condition.
Is Standard Height = not(Height > 2400mm)

**pi()**
Returns the value of pi (3.14159...). Used for circular geometry calculations.
Circumference = 2 * pi() * Radius`,
      },
      {
        title: 'Common Formula Patterns in Professional Families',
        content: `These patterns appear repeatedly across professional family libraries. Learning to recognise and implement them covers the majority of formula needs in practice.

**Pattern 1 — Proportional Scaling:**
Secondary dimensions scale proportionally with a primary dimension.
Frame Width = Width * 0.08
Handle Offset = Width * 0.15
Lock Position = Width * 0.12

All secondary dimensions update when the primary dimension (Width) changes. No manual entry required.

**Pattern 2 — Equal Division:**
An element divides available space into equal parts.
Bay Width = (Total Length - (2 * End Panel Width)) / Number of Bays
Shelf Spacing = (Internal Height - Top Clearance) / (Number of Shelves + 1)

**Pattern 3 — Minimum/Maximum Constraints:**
Prevents parameters from going below a minimum or above a maximum.
Safe Width = if(Width < 600mm, 600mm, if(Width > 2400mm, 2400mm, Width))

**Pattern 4 — Classification:**
Derives a category or classification from dimensional parameters.
Size Code = if(Width < 800mm, "Narrow", if(Width < 1200mm, "Standard", "Wide"))
Height Category = if(Height <= 2100mm, "Standard Height", "Full Height")

**Pattern 5 — Derived Geometry:**
Calculates geometric relationships automatically.
Diagonal = sqrt(Width ^ 2 + Depth ^ 2)
Arc Radius = (Width ^ 2 + (4 * Rise ^ 2)) / (8 * Rise)

**Pattern 6 — Unit Conversion:**
Converts between unit systems in families that need to report in different units.
Height in Meters = Height / 1000

Note: this creates a Number type parameter (not Length) that shows the height in meters as a plain number for scheduling purposes.

**Debugging Formulas:**
If a formula creates an error, Revit highlights the formula cell in red. Common causes:
- Parameter name typo (check case sensitivity)
- Division by zero (add a guard: if(Number of Shelves = 0, 0, Height / Number of Shelves))
- Circular reference (Parameter A drives Parameter B drives Parameter A — not allowed)
- Unit mismatch (adding a length to a number without conversion)`,
      },
    ],
    takeaways: [
      'Formulas are entered in the Formula column of the Family Types dialog — the Value cell becomes read-only for formula-driven parameters',
      'if(condition, true_value, false_value) adds conditional logic — use for minimum constraints, classification, and automatic flag setting',
      'Built-in functions: sin/cos/tan for angles, sqrt for diagonals, round for snapping to increments, and/or/not for complex conditions',
      'Proportional scaling (Frame Width = Width * 0.08) is the most common formula pattern — secondary dimensions update automatically with the primary',
      'Guard against division by zero: if(Number of Shelves = 0, 0, Height / Number of Shelves) — missing guards cause family errors on certain type values',
    ],
    resource: {
      title: 'Autodesk Revit — Formulas in Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-formulas-families',
    },
    prev: 'rf-9',
    next: 'rf-11',
  },

  // ─────────────────────────────────────────────────────────
  // rf-11: Visibility Controls
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-11',
    num: 11,
    title: 'Visibility Controls',
    topic: 'Controls',
    cat: 'intermediate',
    readTime: '14 min',
    free: false,
    desc: 'Control exactly what family geometry appears at each Revit detail level, in each view type, and based on Yes/No parameter values — making families that display correctly in every drawing context.',
    intro: `A family that shows the same geometry at every detail level is not a professional family. In a 1:200 site plan at Coarse detail level, a chair should appear as a simple rectangle. In a 1:20 furniture layout at Fine detail level, the same chair should show cushion details, leg geometry, and armrests. The geometry is different — the family is the same.

Visibility controls are the system that makes this work. They also enable families to show or hide entire components based on Yes/No parameters — a door with a vision panel that shows or hides the glazing, a furniture piece where the drawer unit is optional. This lesson covers the complete visibility control toolkit.`,
    sections: [
      {
        title: 'Detail Level Visibility — The Core Control',
        content: `Every solid and void form in a family can be set to display at specific Revit Detail Levels: Coarse, Medium, and Fine. This is the most important visibility control because it directly determines how the family appears in production drawings.

**Setting Detail Level Visibility:**
Select any geometry element (solid extrusion, void, symbolic line) → Properties panel → "Visible" section → the three checkboxes: Coarse, Medium, Fine. Uncheck any detail level to hide the element at that level.

**The Professional Three-Level Strategy:**

Coarse (floor plans at 1:100-1:500, overview drawings):
Show only the minimal 2D footprint. For a chair: a simple rectangle showing the plan envelope. For a door: the door swing arc and the opening line. For a structural column: a filled square or circle. At Coarse, the drawing reads as a diagram — individual components should not dominate.

Medium (plans at 1:50-1:100, general arrangement drawings):
Show the main 3D form without internal detail. For a chair: the overall silhouette including seat and back, but not cushion seams or leg details. For a door: the door leaf, frame outline, and swing. The drawing reads as a building layout — enough detail to understand the space.

Fine (details at 1:10-1:50, interior elevations, shop drawings):
Show full detail. All geometric nuance, material boundaries, edge details, hardware positions. The drawing reads as construction or fabrication information.

**Symbolic Lines for Plan Representation:**
3D geometry at Coarse detail level in plan views is often not the right representation. A curved sofa in 3D looks odd when sliced at 1000mm cut height. The professional approach: add 2D Symbolic Lines (Annotate tab → Symbolic Line) to the family in the plan view. These are view-specific 2D lines that override the 3D representation. Set the 3D geometry to Coarse = unchecked and add Symbolic Lines that show the correct plan symbol. Symbolic Lines can also be set to specific detail levels.`,
      },
      {
        title: 'Yes/No Parameter Visibility',
        content: `Beyond detail level control, visibility can be driven by Yes/No (boolean) parameters. This allows individual geometry components to be switched on or off by the user placing the family.

**Creating a Visibility Parameter:**
1. In the Family Types dialog: New Parameter → Name: "Show Vision Panel" → Type: Yes/No → Instance (so each door can independently have or not have the vision panel)
2. Select the geometry to control (the glazing extrusion)
3. Properties panel → "Visible" checkbox → click the small grey formula button beside "Visible"
4. In the formula dialog: type the parameter name exactly: Show Vision Panel
5. OK

Now the glazing extrusion is visible only when "Show Vision Panel" is checked (true) for that instance or type.

**Common Yes/No Visibility Applications:**

Door with optional vision panel:
Show Vision Panel = Yes/No parameter → controls glazing geometry visibility

Furniture with optional modesty panel:
Show Modesty Panel = Yes/No → controls the panel geometry

Equipment with optional control box:
Show Control Box = Yes/No → controls the box geometry

Structural column with base plate:
Show Base Plate = Yes/No → controls the base plate extrusion

**Combining Yes/No and Detail Level:**
A geometry element has BOTH a detail level setting AND an optional visibility parameter. Both conditions must be satisfied for the element to show. If the detail level is set to Fine only, AND the Yes/No parameter is false, the element is hidden even at Fine detail level.

**Flipped Visibility:**
To show geometry when the parameter is OFF (i.e., show the simple version when a complex option is unchecked):
Use the formula: not(Show Complex Version)
The geometry appears when "Show Complex Version" is false — the inverse of the parameter.`,
      },
      {
        title: 'Subcategories — The Professional Visibility System',
        content: `Subcategories allow individual components within a family to be controlled independently through the Visibility/Graphics dialog in the project — without the user needing to edit the family.

**What Subcategories Do:**
In a project, VG (Visibility/Graphics) controls visibility by category. All doors turn on or off together. But within a door family, the door swing annotation and the frame geometry and the glazing might need independent control. Subcategories make this possible: "Doors - Swing" can be turned off without hiding the frame.

**Assigning a Subcategory:**
Select geometry in the family → Properties panel → "Subcategory" dropdown → select from available subcategories (or create a new one).

To create a new subcategory: Manage tab → Object Styles → Model Objects → expand the family category (e.g., Doors) → New Subcategory → name it.

**Standard Subcategory Conventions:**

For door families:
- [Doors] Frame/Mullion — the door frame
- [Doors] Glass — glazing panels
- [Doors] Panel — the door leaf
- [Doors] Opening — plan swing arc and opening indication

For furniture:
- [Furniture] (no subcategory — main body)
- [Furniture] Cushions — upholstery elements
- [Furniture] Frame — structural frame elements

For lighting fixtures:
- [Lighting Fixtures] Light Source — the bulb or LED element
- [Lighting Fixtures] Fixture — the housing
- [Lighting Fixtures] Switch — (if applicable)

**Why This Matters in Practice:**
A project architect might want to turn off all door swings on a coordination plan (to reduce clutter) while keeping the door frames visible. If the swing arc and the frame are in the same subcategory (or no subcategory), turning off one turns off the other. With proper subcategory assignment, "Doors - Swing" can be independently unchecked in VG while "Doors - Frame/Mullion" remains on.`,
      },
      {
        title: 'View-Specific Visibility — Plan vs. Elevation',
        content: `Some geometry should show in elevation but not in plan, or in plan but not in elevation. Revit provides two mechanisms for this.

**The "Visible in 3D Views" and "Visible in Plan/RCP Views" Settings:**
Select geometry → Properties panel → the Visibility parameters include:
- Visible in 3D Views (Yes/No formula-connectable)
- Visible in Front/Back (elevation-specific)
- Visible in Left/Right (elevation-specific)
- Visible in Plan/RCP Views (plan-specific)

This granular control allows geometry to appear in specific view orientations only.

**Practical Application — The Two-Representation Approach:**
A professional furniture family typically has two representations:
1. A 3D solid for elevations and 3D views (set Visible in Plan/RCP = unchecked)
2. A Symbolic Line plan symbol for floor plans (set visible at Coarse and Medium only)

This avoids the distorted plan appearance of complex 3D geometry sliced at the cut height.

**Symbolic Lines vs. Detail Lines:**
- Symbolic Lines: annotation lines in the Family Editor that appear in the project as part of the family — they move with the family and are always visible in the view orientation they were drawn in. Used for plan symbols, elevation annotation, standard graphics.
- Detail Lines: 2D lines placed in a project view — not part of the family. Used for view-specific drafting over placed families, not for family-level visibility control.

**Model Lines for 3D Reference Geometry:**
Model Lines in the Family Editor are actual 3D lines that appear in both plan and elevation views. Use for reference geometry that needs to be visible in all views (centerlines, reference indicators) but does not need the visual weight of a solid form.

**The Masking Region:**
A Masking Region (Create tab → Detail panel → Masking Region) is a white-filled 2D region that hides geometry behind it. Used in families to create plan symbols that mask the 3D geometry — placing a masking region on top of the sliced 3D form and replacing it with clean 2D line work. Masking Regions are view-type specific (plan or elevation).`,
      },
    ],
    takeaways: [
      'Set Coarse/Medium/Fine checkboxes on every geometry element — Coarse shows the minimal footprint, Medium shows the main form, Fine shows full detail',
      'Yes/No parameters connected to the Visible property allow users to turn family components on or off without editing the family',
      'Subcategories enable independent VG control of family components in the project — assign subcategories to every meaningful geometry group',
      'Use Symbolic Lines for plan representation instead of sliced 3D geometry — set 3D geometry to "not visible in plan" and add clean 2D symbolic lines for the plan view',
      'The two-representation approach (3D solid for elevations + Symbolic Lines for plan) is the professional standard for furniture and equipment families',
    ],
    resource: {
      title: 'Autodesk Revit — Visibility Controls in Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-visibility-controls-families',
    },
    prev: 'rf-10',
    next: 'rf-12',
  },

  // ─────────────────────────────────────────────────────────
  // rf-12: Materials & Appearance in Families
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-12',
    num: 12,
    title: 'Materials & Appearance in Families',
    topic: 'Visual',
    cat: 'intermediate',
    readTime: '13 min',
    free: false,
    desc: 'Assign materials to family geometry correctly — using By Category defaults, material parameters for user control, and subcategory overrides — so families display correctly in drawings and render accurately.',
    intro: `Materials in Revit families do three jobs: they make the family look correct in rendered views, they drive the cut and surface hatch patterns in plan and section drawings, and they provide the data (material name, area, volume) that feeds material takeoff schedules. Getting materials right in a family means the project team never has to manually override appearance or manually track material quantities.

This lesson covers every level of material assignment in families — from the default "By Category" assignment through explicit material parameters to subcategory-level control — and explains how each choice affects the family's behaviour in different project contexts.`,
    sections: [
      {
        title: 'By Category Material Assignment',
        content: `The simplest material assignment is "By Category" — the family geometry inherits its material appearance from the category's default settings in the project's Object Styles.

**How By Category Works:**
When a geometry element's Material property is set to "" (empty) or "By Category," it uses the material defined for that category in Manage → Object Styles → Model Objects. If the project has set a default material for the Furniture category (for example, a standard grey plastic material), all furniture family elements with By Category material show that material.

**When to Use By Category:**
Use By Category for families where the material appearance should match the project's standard for that category, and where the project team will control appearance through Object Styles or VG overrides rather than per-family parameters.

Good use cases: structural elements that always show in the structural concrete material, MEP components where the discipline standard controls appearance, generic model families used for temporary or placeholder geometry.

**The Limitation of By Category:**
By Category gives no per-family or per-instance material control. Every element with By Category material in the Furniture category looks the same. For families where individual material choice matters (a chair that comes in fabric or leather, a cabinet that can be oak or painted MDF), By Category is not sufficient — use material parameters instead.

**By Category in Cut Section:**
In plan and section views, the cut pattern shown for a sliced element comes from the material's Graphics tab. A By Category material uses the Object Styles default cut pattern for the category. For most categories, this is no fill (empty). For structural elements, the category default usually includes a concrete or steel hatch. If a specific hatch is needed for a family's section representation, assign an explicit material rather than By Category.`,
      },
      {
        title: 'Material Parameters',
        content: `A material parameter is a parameter of Type = Material that allows the project team to select a specific material from the project's material library for each family type or instance.

**Creating a Material Parameter:**
In the Family Types dialog: New Parameter → Name (e.g., "Body Material", "Frame Finish", "Glass Type") → Discipline: Common → Type of Parameter: Material → Instance or Type (depending on whether each instance or each type has its own material).

**Assigning the Parameter to Geometry:**
Select geometry → Properties panel → Material → click the small grey formula button beside the Material field → type the parameter name exactly → OK.

The geometry\'s material is now driven by the parameter. When a user selects a material from the project library for this parameter, the geometry updates to that material's appearance.

**Setting Default Values:**
In the Family Types dialog, click the Material parameter cell for each type → browse the material library → select the appropriate default material. The family ships with sensible defaults, but users can override per instance or per type in the project.

**Multiple Material Parameters:**
Professional furniture families often have several material parameters:
- Frame Material — the structural frame
- Upholstery Material — seat and back fabric
- Leg Finish — metal or timber legs
- Counter Top Material — for furniture with work surfaces

Each drives a different geometry element. The result is a family that can be configured to match any project's material specification.

**Material and Scheduling:**
A Material parameter value flows into Material Takeoff schedules. If a chair\'s Upholstery Material parameter is set to "Fabric - Blue", the Material Takeoff schedule can report how many square metres of blue fabric are needed across all chairs in the project — directly from the model without manual calculation.`,
      },
      {
        title: 'Subcategory-Based Material Control',
        content: `Subcategories (covered in rf-11) interact with materials in an important way: each subcategory can have a default material assigned in Object Styles, separate from the category default.

**Subcategory Material Assignment in Object Styles:**
Project → Manage tab → Object Styles → Model Objects → expand the category → find the subcategory → click the Material cell → assign a material.

Example: Doors → [Doors] Glass subcategory → Material: Glazing - Clear. Now all door family elements assigned to the Glass subcategory automatically show the clear glazing material without requiring a material parameter on each family.

**Subcategory vs. Material Parameter — When to Use Each:**

Use subcategory material assignment when:
- The material for that component type is always the same across all family types (glass is always clear glazing)
- The project team controls material appearance at the office standard level through Object Styles
- The material is a discipline standard (structural steel is always the steel material)

Use material parameters when:
- Different family types or instances can have different materials (oak vs. painted MDF)
- The project team needs per-element material selection
- The material must appear in material takeoff schedules tied to specific family instances

**The Priority Hierarchy:**
If geometry has both a subcategory material (in Object Styles) and an explicit Material parameter, the explicit Material parameter takes priority. If the Material parameter is empty or By Category, the subcategory material from Object Styles applies. If neither is set, the category-level Object Styles material applies.

**Render Appearance and Cut Pattern:**
Every material assignment — whether by parameter, by subcategory, or by category — uses the assigned material\'s full definition: cut pattern (for section drawings), surface pattern (for elevation drawings), and Appearance asset (for rendered views). This is why material library hygiene matters: a material with incorrect cut pattern settings displays incorrectly in every section drawing showing that family.`,
      },
      {
        title: 'Practical Material Setup for Common Family Types',
        content: `**Furniture Family Material Setup:**
Typical parameters: Frame Material (Type), Upholstery Material (Instance), Leg Finish (Type).

Frame: set to a timber or metal material by default.
Upholstery: set to a fabric material by default — Instance so each chair can be a different colour.
Legs: set to chrome or powder-coat by default.

The Symbolic Lines used for the plan representation (rf-11) do not need material assignment — they use the subcategory line weight and color.

**Door Family Material Setup:**
Typical parameters: Door Leaf Material (Type), Frame Material (Type), Glass Material (Type — only on doors with glazing).

Door Leaf: set to the standard door material (painted MDF, timber veneer, etc.).
Frame: set to painted steel or timber to match the door leaf.
Glass: set to Glazing - Clear, controlled by a Yes/No visibility parameter.

**Structural Column Material Setup:**
One material parameter: Concrete Material (Type) or Steel Grade (Type).
By default, structural families often use the structural material from the project's Object Styles (By Category). Add an explicit material parameter when different column types use different concrete grades or steel grades that must be reported in structural schedules.

**MEP Equipment Material Setup:**
Most MEP equipment families use By Category material — the MEP discipline standards control appearance through Object Styles. Only add explicit material parameters when a specific aesthetic finish needs to be specified (e.g., stainless steel cladding on kitchen equipment, powder-coat colour on electrical distribution boards).

**Family File Size and Materials:**
Embedded texture bitmaps in materials increase family file size significantly. Do not embed custom texture files within the family itself. Instead, reference materials from the project\'s material library. When a family is distributed to other offices, those offices need the same material library for correct rendering — document any non-standard materials in the family description.`,
      },
    ],
    takeaways: [
      'By Category material inherits from Object Styles — use for elements where the project standard controls appearance',
      'Material parameters (Type of Parameter: Material) allow users to select project library materials per type or instance — use when material choice varies',
      'Multiple material parameters (Frame Material, Upholstery Material, Leg Finish) give project teams full configuration control within a single family',
      'Subcategory material assignment in Object Styles sets category-wide defaults — useful for discipline standards (structural steel, glazing)',
      'Material assignment drives cut patterns in sections, surface patterns in elevations, and render assets — correct material library hygiene is essential',
    ],
    resource: {
      title: 'Autodesk Revit — Materials in Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-materials-families',
    },
    prev: 'rf-11',
    next: 'rf-13',
  },

  // ─────────────────────────────────────────────────────────
  // rf-13: Nested Families
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-13',
    num: 13,
    title: 'Nested Families',
    topic: 'Architecture',
    cat: 'intermediate',
    readTime: '15 min',
    free: false,
    desc: 'Build complex families by nesting simpler families inside them — passing parameters between levels, using shared families for scheduling, and managing the nesting hierarchy for performance and maintainability.',
    intro: `Complex building components are rarely single monolithic objects. A door is a door leaf, a frame, a set of hinges, a door closer, and a handle — each potentially from a different manufacturer, each with its own specification data. A workstation is a desk surface, a storage pedestal, a screen riser, and cable management — each component independently specifiable.

Nested families allow you to model this complexity correctly: each sub-component is its own family, loaded into a host family, positioned and constrained within the host. Parameters pass between levels. Individual components can be swapped independently. This lesson covers the complete nesting workflow from simple embedding through parameter passing to shared family scheduling.`,
    sections: [
      {
        title: 'What Nested Families Are and When to Use Them',
        content: `A nested family is a loadable family (.rfa) loaded into another loadable family and placed within it. The host family controls the position and constraints of the nested family. Parameters from the host can drive parameters in the nested family.

**When Nesting is the Right Approach:**

The component is independently replaceable: a door handle family that is nested into a door family can be swapped to a different handle type by the architect without rebuilding the door. Nesting preserves this flexibility.

The component is reused across multiple host families: a hinge family nested into all door families in the library means updating the hinge updates all doors simultaneously.

The component needs to appear in its own schedule: a nested light fitting inside a downlight housing family can be set as "Shared" so it appears in the lighting schedule as an individual item — separate from the housing it is installed in.

The component has its own parameters that vary independently: a chair\'s armrest has its own Width and Height parameters that vary independently of the chair seat dimensions. Nesting the armrest as a separate family keeps its parameters cleanly separated.

**When NOT to Nest:**

The sub-component is always identical and never changes: a simple screw used for visual detail does not need to be a separate nested family — model it as geometry directly in the host family.

Performance is a concern: every level of nesting adds complexity. A family with 5 levels of nesting creates significant processing overhead in large models. Keep nesting to 2-3 levels maximum.

The sub-component has no independent scheduling or replacement need: if the component will never be separately specified or swapped, modelling it directly is simpler than nesting.`,
      },
      {
        title: 'The Nesting Workflow',
        content: `**Step 1 — Prepare the nested family:**
The nested family must be a complete, tested loadable family (.rfa). Build and QA test the nested family independently before loading it into the host. A nested family with errors causes problems in the host that are harder to diagnose.

**Step 2 — Load the nested family into the host:**
With the host family open in the Family Editor: Insert tab → Load Family → navigate to the nested family .rfa → Open. The nested family loads and appears in the host family\'s Project Browser under Families → [Category].

**Step 3 — Place the nested family:**
Create tab → Model panel → Component → select the nested family from the Type Selector → click to place in the host family view. The nested family appears as a placed instance within the host family.

**Step 4 — Position using reference planes:**
Move the nested instance to align with reference planes in the host family. Use the Align tool to lock the nested family\'s reference planes to the host\'s reference planes. This constrains the nested family\'s position to the host\'s parametric skeleton.

**Step 5 — Pass parameters (covered in the next section).**

**Key Constraint:**
The nested family instance is placed within the host family, not in a project. When the host family is loaded into a project, the nested family comes with it — automatically loaded as a sub-component. The project team sees only the host family in the Type Selector; the nested families are internal components.

**Nested Family Visibility:**
The nested family inherits the visibility settings of the host. If the host family geometry is hidden at Coarse detail level, nested families within it are also hidden. Additionally, nested families have their own detail level settings — a nested hardware family can be set to Fine only so it does not appear in plan views at Coarse detail level.`,
      },
      {
        title: 'Passing Parameters Between Host and Nested Families',
        content: `Parameter passing is what makes nested families truly parametric. A parameter in the host family drives a parameter in the nested family — when the host changes, the nested component responds automatically.

**The Parameter Association Workflow:**

In the host family, with a nested family instance selected:
Properties panel → the nested family\'s parameters appear in the Properties panel (both instance and type parameters of the nested family are accessible).

Click the small grey formula button beside a nested family parameter → type the name of a host family parameter → OK.

Now the nested family parameter is driven by the host family parameter.

**Example — Door and Handle:**
Host family: "Door" with a Width parameter.
Nested family: "Handle" with a "Height from Floor" parameter.
Association: Handle\'s "Height from Floor" is always 1050mm (a fixed value or driven by a formula: Width * 0 + 1050mm).

More usefully:
Nested family: "Vision Panel" with Width and Height parameters.
Association: Vision Panel Width = Host Width - 150mm (panel is 75mm from each side of the door).
Vision Panel Height = if(Host Height > 2100mm, 400mm, 200mm).

**Type vs. Instance in Nested Families:**
Nested family type parameters can be controlled by host type parameters — setting all instances of a host type to use a specific nested type.
Nested family instance parameters can be controlled by host instance parameters — allowing per-placed-instance variation.

**Associating to a Nested Family Type:**
To control which TYPE of a nested family is used: in the Properties of the nested instance, the Type Selector (top of Properties panel) can be driven by a host parameter. This requires the host to have a parameter of type "Family Type" that lists valid nested family types.`,
      },
      {
        title: 'Shared Families — Scheduling Nested Components',
        content: `By default, nested families are invisible to Revit schedules. A chair with nested armrest families and nested leg families appears in the Furniture schedule as one chair — the nested components do not appear separately. This is usually correct.

However, for components that need independent scheduling — a luminaire inside a downlight body, a valve inside a pipe assembly, hardware inside a door assembly — the nested family must be marked as "Shared."

**Making a Nested Family Shared:**
Open the NESTED family in the Family Editor (not the host) → Create tab → Properties panel → Family Category and Parameters → check the "Shared" checkbox → OK → save the nested family → reload into the host.

**What Shared Does:**
A Shared nested family behaves as if it were placed directly in the project, not inside a host family. It:
- Appears independently in schedules (a door schedule shows the door; a hardware schedule also shows the handles, hinges, and closers as separate line items)
- Can be tagged independently in project views (a handle tag can label the handle nested inside a door)
- Can be selected directly in the project (click the door, click again to select the handle)
- Counts as a separate hosted element for reporting purposes

**When to Use Shared:**
Shared is appropriate when the nested component is independently specified, counted, or ordered. A lighting fixture is shared because the fixture manufacturer, model number, and lamp type are specified separately from the housing. Hardware is sometimes shared so door hardware schedules can be produced from the model.

**Performance Consideration:**
Shared nested families add scheduling overhead. Every instance of a shared nested family is tracked independently in Revit\'s database. A floor plate with 100 workstations each containing 4 shared nested components creates 400 additional tracked elements. Use Shared only when the scheduling benefit justifies the overhead.`,
      },
    ],
    takeaways: [
      'Nest families when the component is independently replaceable, reused across multiple host families, or needs its own scheduling or tagging',
      'Load the nested family into the host via Insert → Load Family, then place it using Create → Component and constrain with reference planes and Align + Lock',
      'Parameter association connects host parameters to nested family parameters — select the nested instance → Properties → click the formula button beside a nested parameter → type the host parameter name',
      'Shared nested families appear independently in schedules and can be tagged and selected separately in the project — use only when independent scheduling is needed',
      'Limit nesting to 2-3 levels maximum — deeper nesting creates performance overhead and makes families difficult to maintain',
    ],
    resource: {
      title: 'Autodesk Revit — Nested Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-nested-families',
    },
    prev: 'rf-12',
    next: 'rf-14',
  },

  // ─────────────────────────────────────────────────────────
  // rf-14: Hosted Families — Walls, Floors & Ceilings
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-14',
    num: 14,
    title: 'Hosted Families — Walls, Floors & Ceilings',
    topic: 'Hosting',
    cat: 'intermediate',
    readTime: '14 min',
    free: false,
    desc: 'Build wall-hosted, floor-hosted, ceiling-hosted, and face-hosted families correctly — understanding the host relationship, void cut behaviour, reference plane conventions, and the key differences between each hosting type.',
    intro: `Hosted families are among the most common in any Revit project — every door, every window, every wall outlet, every recessed light is a hosted family. Despite their prevalence, they are frequently built incorrectly: voids that do not cut cleanly, families that do not move with their host, origins that place the family in unexpected positions.

This lesson covers the complete hosted family workflow for all four hosting types — wall, floor, ceiling, and face. The principles are consistent across all types, but each has specific conventions and constraints that determine professional versus amateur family construction.`,
    sections: [
      {
        title: 'Wall-Hosted Families — Doors and Windows',
        content: `Wall-hosted families are placed by clicking on a wall. The family automatically aligns its face to the wall face and can cut through the wall using void forms.

**Reference Plane Conventions for Wall-Hosted Families:**
The template provides specific named reference planes:
- "Wall Face" or "Wall Closure" — aligns to the wall face (where the family sits)
- "Center (Front/Back)" — the wall centre plane
- "Width" reference planes — the opening width extents

The family origin (intersection of centre planes) is typically at the wall face and one side of the opening. Never move these pre-built planes — they define the correct relationship between the family and the host wall.

**The Flip Controls:**
Wall-hosted families automatically get flip arrows when placed:
- The horizontal flip arrow flips the family left/right (handing — left hand vs. right hand door)
- The vertical flip arrow flips which face the door opens toward (interior vs. exterior swing)

These flip controls are built into the wall-hosted template. They work correctly when the reference planes are set up to the template conventions. Deviating from the template reference plane layout can break the flip controls.

**Opening Width and Rough Opening:**
The door opening in the wall is controlled by the void form. The void should be sized to the rough opening (the structural opening including frame tolerances) not the finished opening size. A door with Width = 900mm typically has a rough opening of 920-940mm to accommodate the frame. Set the void width using a formula:
Void Width = Width + Frame Width * 2 + Tolerance
Where Frame Width and Tolerance are type parameters.

**Host Orientation Tracking:**
A wall-hosted family placed on an angled wall automatically rotates to follow the wall angle. This is handled automatically by the hosting system — no formula or constraint is needed. The family always presents its "front face" to the room side of the wall based on the wall\'s room-bounding orientation.`,
      },
      {
        title: 'Floor-Hosted and Ceiling-Hosted Families',
        content: `Floor-hosted and ceiling-hosted families follow the same principles as wall-hosted but their host element is a horizontal surface rather than a vertical one.

**Floor-Hosted Family Conventions:**
The template\'s reference planes set up the family\'s plan footprint and the insertion point (origin). The family sits on the floor surface — its base coincides with the floor face.

Key settings:
- The insertion point should be at a meaningful location (corner, centre, or pipe connection point for drains)
- The void (if any) cuts down into the floor slab — ensure the void extends below the floor\'s bottom face
- The family rotates on the floor surface when the rotation control grip is dragged in the project

**Ceiling-Hosted Family Conventions:**
The family hangs from the ceiling surface — its top coincides with the ceiling underside face.

Key convention: the family geometry hangs downward from the ceiling in real-world terms, but in the Family Editor, it typically appears above the reference plane (Revit handles the inversion when placed on a ceiling). Do not fight this — trust the template orientation.

Ceiling-hosted families get a flip arrow to flip the family face direction (useful for asymmetric fixtures like directional spotlights).

**Host-Adaptive Geometry:**
Both floor and ceiling-hosted families can use the host face as a reference. This is primarily used in face-hosted families (next section) but applies here too: if "Always Vertical" is checked in Family Category and Parameters, the family maintains vertical orientation even if the host face is sloped (useful for fixtures on sloped ceilings that should still appear vertical).

**The "Moves With Nearby Elements" Setting:**
In the project, a floor-hosted family instance has a "Moves With Nearby Elements" property. If the host floor slab moves (due to a level change), the hosted family moves with it. This is the core value of floor-hosting over non-hosted families placed at a specific elevation.`,
      },
      {
        title: 'Face-Hosted Families — Maximum Flexibility',
        content: `Face-hosted families can be placed on any face: wall face, floor face, ceiling face, sloped roof face, or the face of any model element. They are the most flexible hosting type.

**When to Use Face-Hosted Over Single-Surface Hosting:**
Use face-hosted when:
- The element might be installed on walls, floors, or ceilings in different projects (a switch that could be wall or floor-mounted in different contexts)
- The element is placed on sloped or non-orthogonal surfaces
- The element needs to adapt to the angle of the surface it is placed on

**Face-Hosted Reference Plane Conventions:**
The template provides a single reference plane marking the host face (labelled "Face"). The family geometry projects away from this face plane.

The insertion point is at the face plane — the family sits flush against whatever face it is placed on.

**The "Always Vertical" Option:**
Family Category and Parameters → "Always Vertical" checkbox.

When checked: the family maintains vertical orientation regardless of the host face angle. A light switch placed on a sloped ceiling remains vertical (pointing straight up/down).

When unchecked: the family rotates to be perpendicular to the host face. A fixture placed on a 45-degree sloped surface tilts at 45 degrees to match.

For most architectural families (outlets, switches, light fittings): Always Vertical = checked.
For architectural detail elements that conform to the surface (decorative panels, surface cladding): Always Vertical = unchecked.

**Face-Hosted Void Cuts:**
Face-hosted families with "Cut with Voids When Loaded" checked will cut whatever face element they are placed on. A recessed face-hosted light fitting cuts a hole in the ceiling, wall, or floor face — wherever it is placed. The void must be sized to cut completely through the host element\'s thickness. Since face-hosted families can be placed on elements of unknown thickness, make the void depth generous (same principle as wall-hosted door families).`,
      },
      {
        title: 'Converting Between Hosting Types',
        content: `A family created from one hosting template cannot be directly converted to a different hosting type. A wall-hosted door family cannot become a face-hosted family by changing a property — the hosting type is fundamental to the template structure.

**The Consequence:**
This is why the template decision (rf-3) is so important. Getting the hosting type wrong means rebuilding the family from the correct template.

**The Workaround — Rebuild in the Correct Template:**
1. Open the incorrectly-hosted family in the Family Editor
2. Open the correctly-hosted template as a new family
3. Copy the geometry from the incorrect family (Ctrl+A to select all, Ctrl+C to copy)
4. Paste into the new template (Edit → Paste Aligned → Current View)
5. Rebuild the reference plane structure and parameter associations in the new template

This is faster than building from scratch but still requires significant rework. It reinforces why choosing the correct template at the outset is non-negotiable.

**The "Generic Model (face based)" as Universal Host:**
If you are genuinely unsure whether a family will be hosted by a wall, floor, or ceiling, face-hosted is the safest choice. It accommodates all surface types. The tradeoff is slightly less predictable orientation behaviour compared to single-surface hosting.

**Non-Hosted Families Placed Near Walls:**
Sometimes a wall-mounted element (a surface-mounted light, for example) does not actually need wall-hosting. If the element does not cut the wall and does not need to move with the wall, it can be a non-hosted (work plane-based) family placed at the desired location. The tradeoff: if the wall moves, the element does not move with it. For most furniture and equipment that sits near but is not attached to the wall structure, non-hosted is simpler and more flexible.`,
      },
    ],
    takeaways: [
      'Wall-hosted template reference planes (Wall Face, Center, Width extents) define the host relationship — never move these pre-built planes',
      'Void forms in hosted families must extend beyond the host element\'s maximum expected thickness to cut completely through',
      'Floor-hosted families sit on floor surfaces; ceiling-hosted families hang from ceiling undersides — both move with their host element when it relocates',
      'Face-hosted families work on any surface — use when the family might be placed on walls, floors, or ceilings in different project contexts',
      'Hosting type cannot be changed after the family is built — getting the template selection right before building is non-negotiable',
    ],
    resource: {
      title: 'Autodesk Revit — Hosted Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-hosted-families',
    },
    prev: 'rf-13',
    next: 'rf-15',
  },

  // ─────────────────────────────────────────────────────────
  // rf-15: Annotation Families
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-15',
    num: 15,
    title: 'Annotation Families',
    topic: 'Annotation',
    cat: 'intermediate',
    readTime: '14 min',
    free: false,
    desc: 'Build annotation families — element tags, generic symbols, section marks, and north arrows — that read model parameters, scale correctly at any view scale, and match professional drawing standards.',
    intro: `Annotation families are 2D families that live in views, not in 3D model space. They include everything that annotates a drawing: door tags that read the door mark number, room tags that show name and area, section marks that reference the correct sheet, north arrows, scale bars, and generic symbols.

We covered annotation families briefly in rv-21 (Revit course) and ps-12 (Project Setup). Here we go deeper — building annotation families from scratch, connecting labels to model parameters, and designing annotation that looks professional and scales correctly at any drawing scale. For family creation practitioners, annotation families are tools they need to build when default families do not match the office standard.`,
    sections: [
      {
        title: 'Annotation Family Fundamentals',
        content: `Annotation families differ from model families in one fundamental way: they are scale-independent. A 2.5mm text annotation in a tag prints at 2.5mm on paper whether the view is 1:50 or 1:200. The annotation family is defined in paper space dimensions, not model space dimensions.

**Opening the Annotation Family Environment:**
File → New → Family → navigate to the Annotations folder → select the appropriate template:
- Generic Annotation.rft — for symbols, north arrows, general annotation
- Tag.rft (or category-specific Tag templates) — for element tags that read model parameters
- Titleblock.rft — for sheet titleblocks (covered in rv-21)

The Family Editor for annotation families is a simplified 2D environment:
- Only plan view (no elevation or 3D views)
- The intersection of the two reference planes is the family origin (the attachment point of the annotation)
- Drawing units are in millimeters representing PAPER dimensions, not model dimensions

**What You Can Place in an Annotation Family:**
- Detail Lines — for the annotation graphic (circles, hexagons, arrows, borders)
- Text — for static text that never changes ("GL" for glass mark, "ST" for steel mark)
- Labels — for text that reads live model parameters (the mark number, the room name, the elevation value)
- Filled Regions — for solid shapes (solid circles, filled arrows, solid borders)
- Masking Regions — for white fill behind annotation to mask geometry underneath

**The Origin Point:**
The two reference planes in the template define the origin — the leader attachment point. When a user places the tag and it draws a leader line, the leader points to this origin. Position your annotation graphic relative to this origin based on where you want the leader to terminate (typically at the centre of the tag bubble, or at the tip of a triangle).`,
      },
      {
        title: 'Building a Tag Family',
        content: `Tags are the most commonly built annotation families. They read parameters from model elements and display them in a styled annotation shape.

**Step 1 — Choose the Category-Specific Tag Template:**
For a door tag: File → New → Family → Annotations → Door Tag.rft.
For a room tag: Room Tag.rft.
For a generic structural or equipment tag: Tag.rft.

The category-specific template pre-loads the correct parameter list for the Label tool.

**Step 2 — Draw the Tag Shape:**
Using Detail Lines and Filled Regions, draw the tag shape around the origin point. Common shapes:
- Circle for mark numbers (door tags, window tags)
- Hexagon for equipment marks
- Rectangle for room names
- Triangle for level marks and section references

Draw the shape centred on the origin reference plane intersection for a centred leader. Draw offset from the origin to position the leader at a specific corner or edge.

**Step 3 — Add a Label:**
Create tab → Text panel → Label → click inside the tag shape. The "Edit Label" dialog opens.

The left panel shows available parameters for the tag category. For a door tag: Mark, Type Name, Width, Height, Frame Material, etc. For a room tag: Name, Number, Area, Level, etc.

Select the parameter(s) to display → add to the right panel → OK.

The label appears in the tag shape showing the parameter name as a placeholder. The actual value appears when the tag is placed in a project.

**Step 4 — Format the Label:**
Select the label → Properties → set font, size (in mm for paper dimensions), bold/italic, background (opaque/transparent), and alignment. For a door mark tag: 2.5mm bold, centred, opaque background.

**Step 5 — Test in a Project:**
Load the tag family into a test project → Annotate → Tag by Category → click a door. The tag should appear with the door\'s Mark value. If it shows "?" the Mark parameter is empty on that door — add a Mark value to test. If the tag appears at the wrong position or scale, return to the Family Editor and adjust.`,
      },
      {
        title: 'Labels — Displaying Multiple Parameters',
        content: `A single label can display multiple parameters simultaneously. This is used for room tags (Number on one line, Name below), door tags with width x height dimensions, or any tag that needs compound information.

**Multi-Parameter Labels:**
In the Edit Label dialog, add multiple parameters to the right panel by selecting each and clicking the add arrow. Parameters stack as rows in the label — each on its own line by default, or on the same line with a separator.

**Adding a Separator:**
Between two parameters in the right panel: there is a "Sample Value" column and a "Break" checkbox. The Break checkbox inserts a line break between parameters. Uncheck Break to place parameters on the same line with the text in the "Prefix" or "Suffix" columns providing separation.

**Room Tag Example — Number and Name:**
Row 1: Number parameter, Sample Value: "101", Suffix: "" — appears as "101"
Row 2: Name parameter (with Break checked from row 1), Sample Value: "Reception" — appears on the next line as "Reception"

The result reads:
101
Reception

**Door Tag Example — Width x Height:**
Row 1: Width parameter, Suffix: " x "
Row 2: Height parameter (Break unchecked — same line)

The result reads: "900 x 2100" on one line.

**Formatting Individual Parameters:**
Each row in the Edit Label dialog has a Format button that opens the unit format settings for that parameter. For dimension parameters: set the units (millimeters, meters), decimal places (0 for mm, 2 for m), and whether to show the unit suffix. For text parameters: no format options available.

**Static Text in Labels:**
Prefix and Suffix fields in the Edit Label dialog add static text before and after the parameter value. Use for: "GL" prefix on glass mark tags, "m2" suffix on area labels, "FFL" prefix on floor level spot elevations.`,
      },
      {
        title: 'Generic Annotation Families — Symbols and Marks',
        content: `Generic Annotation families are placed directly in views (not attached to model elements). They include north arrows, drawing symbols, break lines, match lines, detail reference symbols, and any 2D graphic that is placed as a standalone annotation.

**North Arrow:**
File → New → Family → Generic Annotation.rft.
Draw the north arrow graphic (Detail Lines for the arrow body, Filled Region for the filled arrow head, Label or Text for the "N" label).
The origin should be at the pivot point — typically the centre of the compass circle.
The arrow does not automatically rotate to true north — the user rotates the annotation instance after placement. Or: use a formula to rotate the graphic based on a True North Angle parameter.

**Scale Bar:**
A scale bar is a generic annotation family with a parameter-driven length. The scale bar line length must correspond to a real-world distance at the view scale. Since annotation families are in paper space, the bar length in mm must be calculated: for a 10m scale bar at 1:100, the bar is 100mm (10,000mm / 100). Creating a truly automatic scale bar (one that adjusts its paper length based on the view scale) requires complex parameter formulas — most offices use a set of fixed-scale scale bar families (one for 1:50, one for 1:100, etc.).

**Revision Cloud Symbol:**
Revit has a built-in Revision Cloud tool. However, a custom revision cloud symbol (as a generic annotation) can be placed manually for specific callout situations. Draw the cloud outline as a Detail Line arc pattern and add a Label for the revision number.

**Match Line Annotation:**
A custom match line annotation family can include the sheet reference text in Labels alongside the match line graphic. Build with a Label that reads "Sheet Number" (if this is a view-based parameter) or use Text for a manual entry.

**Loading Generic Annotation Families:**
Generic annotation families are loaded via Insert → Load Family → navigate to the .rfa → Open. Once loaded, they appear in the Annotate tab → Symbol button → Type Selector → select your family → click to place.`,
      },
    ],
    takeaways: [
      'Annotation families are scale-independent — defined in paper dimensions (mm printed), not model dimensions',
      'Tag families read model parameters via Labels — use category-specific tag templates (Door Tag.rft, Room Tag.rft) for correct parameter access',
      'Multi-parameter labels stack parameters with line breaks between them — use Prefix/Suffix for separators, Format for unit control',
      'The tag origin (reference plane intersection) is the leader attachment point — position the tag graphic relative to this origin deliberately',
      'Generic Annotation families (north arrows, scale bars, symbols) are placed via Annotate → Symbol — they are standalone 2D graphics, not attached to model elements',
    ],
    resource: {
      title: 'Autodesk Revit — Annotation Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-annotation-families',
    },
    prev: 'rf-14',
    next: 'rf-16',
  },

  // ─────────────────────────────────────────────────────────
  // rf-16: Shared Parameters in Families
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-16',
    num: 16,
    title: 'Shared Parameters in Families',
    topic: 'Data',
    cat: 'intermediate',
    readTime: '14 min',
    free: false,
    desc: 'Add shared parameters to families so they appear in tags, schedules, and IFC exports — the professional standard for BIM data delivery that connects family parameters to the wider project data ecosystem.',
    intro: `A family parameter that only appears in the Properties panel is useful but limited. A shared parameter that appears in a tag, a schedule, and an IFC export is part of the project\'s data ecosystem — it flows from the model into every downstream tool and document the project produces.

Shared parameters were covered in rv-22 (Revit course) and ps-17 (Project Setup) from the project and template perspective. Here we cover them from the family creation perspective: how to add them to a family, why the process is different from regular parameters, and what enables a parameter to be simultaneously readable by tags, schedules, and IFC — which regular family parameters cannot achieve.`,
    sections: [
      {
        title: 'Why Shared Parameters in Families Are Different',
        content: `Regular family parameters are defined within the family. They are private to that family — they can be seen in the Properties panel when the family is placed, but Revit cannot expose them to tags or IFC exports because it has no way to identify them as the "same" parameter across different families.

Shared parameters are defined in an external .txt file (the Shared Parameter File). Each shared parameter has a GUID (Globally Unique Identifier) — a permanent unique ID that Revit uses to recognize the parameter regardless of which family it appears in or which project it is used in.

When the same shared parameter is added to multiple families AND to the project:
- A tag can display it (tags can only read shared parameters and built-in Revit parameters)
- A schedule can include it as a column (standard family parameters also work in schedules, but shared parameters work across mixed family types)
- An IFC export can map it to a specific Pset property (essential for open BIM data delivery)

**The Practical Impact:**
If a door family has a "Fire Rating" parameter defined as a regular family parameter, you can see it in Properties and in the door schedule. But you cannot place a fire rating tag on the door that shows the value — tags cannot read regular family parameters.

If the same "Fire Rating" is a shared parameter (from the office Shared Parameter File), it can be read by:
- The door tag (Label referencing the shared parameter)
- The door schedule
- A project-level Visibility/Graphics filter (Fire Rating is not empty → show in red)
- The IFC export (mapped to Pset_DoorCommon.FireExit or a custom Pset)

This is why shared parameters are the professional standard for BIM data in production families.`,
      },
      {
        title: 'Adding a Shared Parameter to a Family',
        content: `**Step 1 — Access or Create the Shared Parameter File:**
In the Family Editor: Manage tab → Shared Parameters → Browse → navigate to the office shared parameter file (.txt). If no shared parameter file exists, click Create and save a new .txt file to a shared location.

**Step 2 — Select the Parameter Group and Parameter:**
In the Edit Shared Parameters dialog: select the parameter group (e.g., "Fire and Safety") → select the parameter name (e.g., "Fire Rating") → OK.

If the required parameter does not exist in the file: click New Parameter → name it, set Discipline and Type of Parameter → OK. The parameter is now in the .txt file permanently.

**Step 3 — Add to the Family:**
With the shared parameter selected: the Parameter Properties dialog opens (same as when creating a regular parameter). Set:
- Instance or Type
- Group Under (where it appears in Properties)
- Click OK

The parameter now appears in the Family Types dialog and in Properties. It is visually identical to a regular parameter in the Family Editor — the difference is its underlying GUID identity.

**Step 4 — Test in a Project:**
Load the family into a test project. The shared parameter should appear in Properties. Create a schedule for the family category, add the shared parameter as a column — it should appear. If it does not appear: the shared parameter file path must be set in the project (Manage → Shared Parameters → browse to the same .txt file used in the family).

**Step 5 — Add a Label in a Tag Family:**
Open the tag family for this element category. Create tab → Label. In the Edit Label dialog, look for the shared parameter in the Available Parameters list. It appears there because the same GUID is recognized across the family and the tag. Add it to the label. The tag now displays the shared parameter value.`,
      },
      {
        title: 'Shared Parameters and IFC Export',
        content: `The IFC export uses shared parameter GUIDs to map Revit parameters to IFC property sets. This mapping is configured in the IFC export settings and a mapping file — the shared parameter GUID is the link between Revit and the IFC standard.

**How IFC Mapping Works:**
The IFC mapping file (a .txt file configuring the export) contains entries like:
"Fire Rating" → Pset_DoorCommon.FireRating

Revit reads this: find the shared parameter with name "Fire Rating" → write its value to the IFC property named "FireRating" in the property set "Pset_DoorCommon."

For this to work: the Revit parameter must be a shared parameter with the exact name specified in the mapping file (or the correct GUID must be referenced).

**Standard IFC Psets for Common Parameters:**
- Fire Rating → Pset_WallCommon.FireRating, Pset_DoorCommon.FireRating
- Acoustic Rating → Pset_WallCommon.AcousticRating
- Thermal Transmittance → Pset_WallCommon.ThermalTransmittance
- Load Bearing → Pset_WallCommon.LoadBearing
- IsExternal → Pset_WallCommon.IsExternal, Pset_DoorCommon.IsExternal

**COBie Shared Parameters:**
COBie (Construction Operations Building Information Exchange) defines specific shared parameters for FM handover. The Autodesk COBie shared parameter file (available from the Autodesk App Exchange) provides these parameters pre-configured:
- COBie.Type.Manufacturer
- COBie.Type.ModelNumber
- COBie.Type.WarrantyDurationParts
- COBie.Component.TagNumber

Adding COBie shared parameters to production families means FM handover data is captured in the model throughout the project — not scrambled together in the final week before handover.

**The Office Shared Parameter File Strategy:**
The office shared parameter file should live in a shared network location accessible to all team members. Every production family uses parameters from this file. Every project references this same file. This creates a consistent parameter identity across all projects and all families in the office — enabling cross-project scheduling, firm-wide reporting, and consistent IFC output.`,
      },
      {
        title: 'Shared Parameters — Common Issues and Solutions',
        content: `**Issue 1 — Parameter does not appear in schedule:**
Cause: the project is not pointing to the shared parameter file. Fix: Manage → Shared Parameters → browse to the shared parameter file. Then create the schedule again — the shared parameter should now be available as a column.

**Issue 2 — Tag shows "?" instead of parameter value:**
Cause A: the Mark (or target parameter) is empty on the element. Add a value. Cause B: the label references a regular family parameter instead of the shared parameter. Open the tag family, check the label, replace with the shared parameter version.

Cause C: the tag family and the model family are using parameters with the same NAME but different GUIDs (created separately rather than from the same shared parameter file). Fix: both must reference the same GUID from the same .txt file. Delete the tag parameter, re-add it from the shared parameter file. Same for the model family parameter.

**Issue 3 — Shared parameter missing from the Available Parameters list in a tag:**
The shared parameter file must be loaded in the tag family (Manage → Shared Parameters → browse to the .txt file) before the parameter appears in the Label dialog\'s available parameters list.

**Issue 4 — IFC export does not include the shared parameter:**
The IFC mapping file may not include an entry for the shared parameter. Either add a custom Pset mapping entry, or use the Autodesk IFC Exporter add-in which provides a GUI for custom mapping configuration.

**Issue 5 — Two offices use the same parameter name but different GUIDs:**
This creates a conflict when models from both offices are merged. The GUID uniqueness is what prevents this — each office should register their shared parameter names in a firm-wide registry and avoid creating duplicate names with different GUIDs. If a conflict exists, one office must rename their parameter and update all families that use it.`,
      },
    ],
    takeaways: [
      'Shared parameters have a GUID that makes them uniquely identifiable across families, projects, tags, and IFC exports — regular parameters cannot be read by tags or mapped to IFC',
      'Add shared parameters to a family via Manage → Shared Parameters (in the Family Editor) → select the parameter from the .txt file → add to the family',
      'The office shared parameter file must be in a shared network location and referenced consistently by all families and all projects',
      'COBie shared parameters (from the Autodesk COBie shared parameter file) enable FM handover data to be captured throughout the project — not added at the end',
      'The most common shared parameter issue is GUID mismatch — always add shared parameters from the same .txt file in both the model family and the tag family',
    ],
    resource: {
      title: 'Autodesk Revit — Shared Parameters in Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-shared-parameters-families',
    },
    prev: 'rf-15',
    next: 'rf-17',
  },
];
