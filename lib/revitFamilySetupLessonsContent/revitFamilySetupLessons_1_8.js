// ============================================================
// REVIT FAMILY SETUP — LESSONS rfs-1 through rfs-8 (BEGINNER)
// File: lib/revitFamilySetupLessonsContent/lessons-1-8.js
// FORMAT: 3-Layer — Explain → Guide → Practice
// END GOAL: Production-ready office Family Template (.rft)
// No free lessons — all start at Basic plan
// ============================================================

export const lessons_1_8 = [

  // ─────────────────────────────────────────────────────────
  // rfs-1: Why Family Setup Matters
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-1',
    num: 1,
    title: 'Why Family Setup Matters',
    topic: 'Foundation',
    cat: 'beginner',
    readTime: '10 min',
    free: false,
    desc: 'Understand what a family template is, why building one saves hundreds of hours across your office, and what you will produce by the end of this course.',
    intro: `You completed the Revit Family Creation course. You can build a parametric door, a nested furniture family, an MEP connector family. You know the tools.

Now comes the layer that most practitioners never reach — the system behind the families. Not just building one good family, but establishing the standards, templates, and library that make every family your office builds consistently professional, correctly structured, and immediately usable on any project.

This course builds that system from scratch. By Lesson 24 you will have a complete office family library infrastructure — shared parameter file, type catalogue standards, folder architecture, version control, QA protocol, and a set of base family templates that every new family starts from. This is what separates a BIM department from a collection of individual Revit users.`,
    sections: [
      {
        title: 'EXPLAIN — What is a Family Template?',
        content: `A Family Template (.rft file) is a pre-configured starting point for building a new loadable family. Just as a Revit Project Template (.rte) encodes all the project standards, a Family Template encodes all the family-level standards.

When a team member opens the Family Editor to build a new door family, they start from a template. That template determines:

**What is already set up:**
- The correct category (Doors — not Generic Model)
- The hosting type (wall-hosted — correct for doors)
- The initial reference planes (Wall Face, Centre, Width extents — the correct door skeleton)
- Pre-built parameters (Width, Height — standard door parameters)
- Subcategory definitions (DPC-Frame, DPC-Glass, DPC-Swing)
- Visibility settings for each subcategory (which detail levels show what)
- The office shared parameter file linked — so shared parameters are available immediately

**What this means in practice:**
Without a family template: every team member who builds a family starts differently. One uses "Generic Model" instead of "Doors." One names parameters "W" instead of "Width." One forgets subcategories entirely. The resulting families are inconsistent, require different VG settings in each project, and cannot be maintained by anyone other than the original creator.

With a family template: every door family in the office has the same reference plane structure, the same parameter names, the same subcategories, the same visibility conventions. A team member from a different office can open any DPC door family and immediately understand it. New families are faster to build because the skeleton is already there.

**The difference from Revit's built-in templates:**
Revit ships with family templates (Door.rft, Window.rft, etc.). These are generic starting points. They have no office-specific parameter names, no subcategory setup, no shared parameter file link, no visibility standards. They are a blank canvas. Your office template is a canvas with the outline already drawn — every time.`,
      },
      {
        title: 'EXPLAIN — The Cost of No Family Standards',
        content: `Consider what happens on a real project when there are no family standards:

**Week 2 — The door tag problem:**
An architect builds a door family, adds a "FireRating" parameter as a regular family parameter. The BIM Manager tries to create a fire rating tag. Tags cannot read regular parameters. The parameter needs to be rebuilt as a shared parameter. Every door already placed needs the value re-entered. Two hours of rework.

**Week 5 — The schedule problem:**
Five different architects have built five different families for the same WC type. Each has different parameter names: "Width", "W", "Unit Width", "Overall Width", "Fixture Width." The plumbing fixture schedule shows five different column headers. The QS cannot use the schedule for procurement. Three hours of standardisation.

**Week 10 — The performance problem:**
A furniture family downloaded from a manufacturer's website has 180,000 polygons. It was loaded without quality checking. Placed 200 times across a hotel fit-out, the model takes 8 minutes to regenerate a floor plan. Nobody knows which family is the problem. Four hours of investigation and replacement.

**Week 16 — The handover problem:**
The client's FM team asks for COBie handover data. None of the equipment families have COBie parameters. The data has to be entered manually into a separate spreadsheet. Twenty hours of manual work.

All of these problems have one root cause: no family standards were established at the start. This course establishes those standards.

**The payoff:**
A well-set-up family library saves approximately 40-60% of the time spent on family-related work on every subsequent project. Over a practice with 10 projects per year, that is hundreds of hours — returned to design work, not rework.`,
      },
      {
        title: 'EXPLAIN — What You Will Build in This Course',
        content: `This course builds the Dharren Park Architecture (DPA) Family Library Infrastructure — the complete system for creating, managing, and maintaining professional Revit families.

**The deliverables by lesson group:**

After Lessons 1-8 (Beginner — Foundation):
- Office reference plane naming standard documented
- Office parameter naming convention documented
- Subcategory definitions for all key family categories
- Visibility control convention (Coarse/Medium/Fine standard)
- Material parameter standard
- The DPA Family QA Checklist

After Lessons 9-16 (Intermediate — Content):
- DPA-Door-Template.rft (base template for all door families)
- DPA-Window-Template.rft (base template for all window families)
- DPA-Furniture-Template.rft (base template for furniture and casework)
- DPA-Equipment-Template.rft (base template for MEP equipment)
- Complete annotation tag set (door, window, room, equipment tags)
- DPA-Structural-Column-Template.rft
- DPA-Profile-Template.rft (for all profile families)
- Nested family standards document

After Lessons 17-24 (Advanced — Library):
- DPA-SharedParameters-Families-v1.0.txt (the office shared parameter file)
- Type catalogue standard and examples
- Complete folder architecture for the family library
- Version control system and changelog template
- Family submission and approval workflow
- Connection between family library and project template
- Complete family library ready for office use

**The consistent project thread:**
Every family built in this course uses the Dharren Park Commercial Centre as the reference project (from the Project Setup course). When you test a door family, you test it in the DPC project model. When you configure shared parameters, they align with the parameters already in the DPC project template. The two courses connect deliberately — the project template and the family library are designed to work together.`,
      },
      {
        title: 'PRACTICE — Set Up Your Working Environment',
        content: `Before Lesson 2, prepare your working environment for the family library.

**Step 1 — Create the family library folder structure:**

C:\\DharrenPark\\
  FamilyLibrary\\
    00_Architecture\\
      Doors\\
      Windows\\
      Furniture\\
      Casework\\
      Specialty\\
      GenericModels\\
    01_Structure\\
      Columns\\
      Framing\\
      Foundations\\
    02_MEP\\
      Mechanical\\
      Plumbing\\
      Electrical\\
      Lighting\\
    03_Annotation\\
      Tags\\
      Symbols\\
      Titleblocks\\
    04_Profiles\\
      WallSweeps\\
      Railings\\
      StairNosings\\
      Mullions\\
    05_Templates\\
      Current\\
      Archive\\
    _Standards\\
      SharedParameters\\
      TypeCatalogues\\
      QAChecklists\\
      Changelogs\\

**Step 2 — Open the DPC Project file:**
Open your DPC project file from the Project Setup course:
C:\\DharrenPark\\Project\\BIM\\WIP\\DPA\\ARCH\\DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-001.rvt

You will use this as the test project throughout this course. Every family you build gets tested by loading it into this project.

**Step 3 — Note your Revit template library location:**
Open File Explorer → navigate to:
C:\\ProgramData\\Autodesk\\RVT 20XX\\Family Templates\\English_I\\
(or English_I_Metric for metric, or your regional folder)

Note this path. You will open templates from here throughout the course.

**Step 4 — Create your standards document:**
Open Notepad or VS Code → create a new file:
C:\\DharrenPark\\FamilyLibrary\\_Standards\\DPA-FamilyStandards-v1.0.txt

This file will accumulate the standards decisions you make throughout the course. By Lesson 24 it is the office family standards document.

Enter the first line:
DPA FAMILY LIBRARY STANDARDS v1.0
Created: [Today's Date]
Revit Version: [Your Version]

Save the file. You are ready for Lesson 2.`,
      },
    ],
    takeaways: [
      'A Family Template (.rft) pre-configures category, hosting, reference planes, parameters, subcategories, and visibility — so every family starts correctly',
      'No family standards = inconsistent parameters, broken tags, performance problems, and failed handovers — all preventable with 24 lessons of setup',
      'This course builds: 7 base family templates, a shared parameter file, type catalogue standards, a complete folder library, version control, and QA protocol',
      'The DPC project file from the Project Setup course is the test environment — every family built here gets tested in a real project context',
      'Start your DPA-FamilyStandards-v1.0.txt document now — it accumulates every decision made in the course and becomes the office standard reference',
    ],
    resource: {
      title: 'Autodesk Revit — Family Templates Overview',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-family-templates-overview',
    },
    prev: null,
    next: 'rfs-2',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-2: Choosing the Right Base Template
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-2',
    num: 2,
    title: 'Choosing the Right Base Template',
    topic: 'Foundation',
    cat: 'beginner',
    readTime: '12 min',
    free: false,
    desc: 'Map every family type you will build to its correct Revit base template — and document the DPA template selection guide so any team member always starts from the right file.',
    intro: `The most expensive mistake in family creation is starting from the wrong template. Discover the error after 4 hours of work and the only fix is to start over. This lesson eliminates that mistake by building a definitive template selection guide for the DPA family library.

Every family type your office creates has one correct template. This lesson identifies it, explains why, and documents the decisions in a reference guide that any team member can use before opening the Family Editor.`,
    sections: [
      {
        title: 'EXPLAIN — Template Selection Criteria',
        content: `Three questions determine the correct template for any family:

**Question 1 — What Revit category should this family be?**
The category determines scheduling, tagging, VG control, and IFC classification. Choose the most specific applicable category. The template you choose determines the category — you cannot change it after building.

Key categories and their templates:
- Doors → Metric Door.rft
- Windows → Metric Window.rft
- Furniture → Metric Furniture.rft
- Casework → Metric Casework.rft
- Plumbing Fixtures → Metric Plumbing Fixture.rft
- Mechanical Equipment → Metric Mechanical Equipment.rft
- Lighting Fixtures → Metric Lighting Fixture.rft (ceiling-hosted)
- Electrical Devices → Metric Electrical Devices.rft (wall-hosted)
- Structural Columns → Metric Structural Column.rft
- Structural Framing → Metric Structural Framing - Beams and Braces.rft
- Generic Model → Metric Generic Model.rft (last resort only)
- Annotation Tags → various Tag.rft files in Annotations folder
- Profiles → Metric Profile.rft

**Question 2 — How is this family hosted?**
Wall-hosted, floor-hosted, ceiling-hosted, face-hosted, or non-hosted (work plane-based).
The hosting type is baked into the template. A wall-hosted door template cannot become a non-hosted family without rebuilding.

**Question 3 — Does a dedicated template exist for this family type?**
Check the Annotations, Structural, and MEP subfolders of the template library. A dedicated template (Door.rft, Structural Column.rft) has pre-built reference planes and parameters matched to that element type. Always prefer a dedicated template over a generic one.`,
      },
      {
        title: 'EXPLAIN — The DPA Template Map',
        content: `The DPA Template Map is the definitive reference for which Revit base template to use for each family type in the office library.

**ARCHITECTURAL FAMILIES:**

Doors: Metric Door.rft
- Wall-hosted, pre-built door reference planes (Wall Face, Width extents)
- Pre-built Width and Height parameters
- "Cut with Voids When Loaded" pre-enabled
- Use for: all swing, sliding, folding door types

Windows: Metric Window.rft
- Wall-hosted, pre-built window reference planes
- Pre-built Width, Height, Sill Height parameters
- Use for: all fixed, opening, curtain wall insert window types

Furniture (freestanding): Metric Furniture.rft
- Non-hosted (work plane-based)
- Minimal pre-built content — clean canvas
- Use for: chairs, tables, sofas, beds, desks, storage units

Casework (built-in): Metric Casework.rft
- Non-hosted
- Use for: kitchen units, reception desks, built-in shelving, joinery

**MEP FAMILIES:**

Plumbing Fixtures: Metric Plumbing Fixture.rft
- Various hosting (wall, floor, or face-based depending on fixture type)
- Use for: WCs, basins, urinals, showers, baths

Mechanical Equipment: Metric Mechanical Equipment.rft
- Non-hosted (large equipment sits on floor)
- Has duct connector tools available
- Use for: AHUs, FCUs, VAV boxes, fan units

Lighting Fixtures (recessed): Metric Lighting Fixture.rft
- Ceiling-hosted by default
- Use for: recessed downlights, recessed panels, ceiling-mounted fixtures

Lighting Devices: Metric Lighting Device.rft
- Wall-hosted
- Use for: wall switches, dimmers, sensors, emergency lights

Electrical Equipment: Metric Electrical Equipment.rft
- Non-hosted
- Use for: panel boards, distribution boards, UPS units

**STRUCTURAL FAMILIES:**

Structural Columns: Metric Structural Column.rft
- Non-hosted with analytical model
- Use for: concrete columns, steel columns, timber posts

Structural Framing: Metric Structural Framing - Beams and Braces.rft
- Length-based (no length parameter — set by span in project)
- Use for: steel beams, concrete beams, structural braces

**ANNOTATION FAMILIES:**

Element Tags: category-specific tag templates
Door Tag.rft, Window Tag.rft, Room Tag.rft, etc.
Use the category-specific tag template — not the generic Tag.rft

Generic Annotation: Metric Generic Annotation.rft
- Use for: north arrows, scale bars, match lines, symbols

**PROFILE FAMILIES:**

Wall Sweep/Reveal Profiles: Metric Profile.rft → set Profile Usage = Wall Sweep
Railing Profiles: Metric Profile.rft → set Profile Usage = Railing Rail
Stair Nosing: Metric Profile.rft → set Profile Usage = Stair Nosing
Mullion Profiles: Metric Profile.rft → set Profile Usage = Curtain Wall Mullion`,
      },
      {
        title: 'GUIDE — Documenting the DPA Template Map',
        content: `**Step 1 — Open your standards document:**
Open: C:\\DharrenPark\\FamilyLibrary\\_Standards\\DPA-FamilyStandards-v1.0.txt

**Step 2 — Add the Template Map section:**
After the header you created in Lesson 1, add:

---
SECTION 1: TEMPLATE SELECTION MAP
---

Format each entry as:
[DPA Family Type] → [Revit Template File] → [Hosting Type] → [Notes]

**Step 3 — Test one template from each major category:**

For Doors — open the template and verify:
File → New → Family → browse to the template folder → open Metric Door.rft
Check: does it open with pre-built Wall Face reference plane? Does it show Width and Height in the Family Types dialog? Is the category set to Doors?
Manage → Family Category and Parameters → confirm Category = Doors

For Furniture — open Metric Furniture.rft:
Check: is it non-hosted? Are there default reference planes (Centre Front/Back, Centre Left/Right, Ref. Level)? Category = Furniture?

For a Tag — open Metric Door Tag.rft from the Annotations subfolder:
Check: is it a 2D-only environment (no elevation views)? Is the category = Door Tags?

Close each after checking — do not save.

**Step 4 — Verify metric vs. imperial:**
Confirm all templates you use are METRIC versions.
Metric templates are in the English_I folder under the Metric subfolder, or have "Metric" in the filename.
If your Revit shows feet and inches in a template: wrong template folder. Navigate to the correct metric subfolder.

**Step 5 — Document any regional templates:**
If your practice works in a specific region (UK, Australia, Middle East), check for region-specific templates in the regional subfolder. Some regions have pre-configured templates with local drawing conventions. Document which regional folder you are using.

**Step 6 — Save the standards document.**`,
      },
      {
        title: 'PRACTICE — Complete the DPA Template Map',
        content: `Add this complete template map to your DPA-FamilyStandards-v1.0.txt document.

**DPA TEMPLATE SELECTION MAP:**

Copy this into your standards document under SECTION 1:

ARCHITECTURAL:
Door families → Metric Door.rft → Wall-hosted → Pre-built door planes, Width + Height params
Window families → Metric Window.rft → Wall-hosted → Pre-built window planes, Width + Height + Sill Height
Furniture (freestanding) → Metric Furniture.rft → Non-hosted → Clean canvas for chairs, tables, sofas
Casework (built-in) → Metric Casework.rft → Non-hosted → Kitchen units, reception desks, joinery
Specialty Equipment → Metric Specialty Equipment.rft → Non-hosted → Medical, lab, specialist items
Curtain Wall Panels → Metric Curtain Wall Panel.rft → CW Grid → Panel infill for curtain walls
Curtain Wall Mullions → Metric Curtain Wall Mullion.rft → CW → Mullion profile families

MEP:
Plumbing Fixtures (floor) → Metric Plumbing Fixture - Floor Based.rft → Floor-hosted → Floor drains, WCs
Plumbing Fixtures (wall) → Metric Plumbing Fixture.rft → Wall-hosted → Basin, urinal, wall-hung WC
Mechanical Equipment → Metric Mechanical Equipment.rft → Non-hosted → AHUs, FCUs, plant equipment
Lighting Fixtures → Metric Lighting Fixture.rft → Ceiling-hosted → Recessed downlights, ceiling panels
Lighting Devices → Metric Lighting Device.rft → Wall-hosted → Switches, dimmers, sensors
Electrical Equipment → Metric Electrical Equipment.rft → Non-hosted → Panel boards, distribution boards
Pipe Fittings → Metric Pipe Fitting.rft → Pipe-hosted → Elbows, tees, reducers

STRUCTURAL:
Structural Columns → Metric Structural Column.rft → Non-hosted → Concrete + steel columns
Structural Framing → Metric Structural Framing - Beams.rft → Length-based → Beams, braces
Structural Foundations → Metric Structural Foundation.rft → Non-hosted → Pad, strip, pile cap

ANNOTATION:
Door Tags → Metric Door Tag.rft → 2D annotation → Reads Mark from door elements
Window Tags → Metric Window Tag.rft → 2D annotation → Reads Mark from window elements
Room Tags → Metric Room Tag.rft → 2D annotation → Reads Number + Name from rooms
Generic Annotations → Metric Generic Annotation.rft → 2D annotation → North arrows, symbols

PROFILES:
Wall Sweep Profiles → Metric Profile.rft → Profile Usage: Wall Sweep → Skirting, dado, cornice
Railing Profiles → Metric Profile.rft → Profile Usage: Railing Rail → Handrail cross-sections
Stair Nosings → Metric Profile.rft → Profile Usage: Stair Nosing → Tread edge profiles
Mullion Profiles → Metric Profile.rft → Profile Usage: Curtain Wall Mullion → Facade framing

**Confirmation Checklist:**
- DPA Template Map added to standards document
- Metric Door.rft opened and verified (category = Doors, wall-hosted, pre-built planes)
- Metric Furniture.rft opened and verified (category = Furniture, non-hosted)
- Metric Door Tag.rft opened and verified (2D environment, category = Door Tags)
- Standards document saved
- Family library folder structure created (from Lesson 1)

Move to Lesson 3 — Reference Plane Standards.`,
      },
    ],
    takeaways: [
      'The correct template is determined by three questions: category, hosting type, and whether a dedicated template exists',
      'Never use Generic Model as a default — it loses scheduling, tagging, and IFC specificity. Choose the most specific applicable category',
      'Metric Door.rft has pre-built Wall Face reference planes and Width + Height parameters — always start door families here, not from Generic Model',
      'Profile families use Metric Profile.rft for all profile types — the Profile Usage setting (Wall Sweep, Railing Rail, Stair Nosing) determines where it appears in project dropdowns',
      'The DPA Template Map is a living document — add to it whenever a new family type is created that is not already listed',
    ],
    resource: {
      title: 'Autodesk Revit — Family Template Files',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-family-template-files',
    },
    prev: 'rfs-1',
    next: 'rfs-3',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-3: Reference Plane Standards
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-3',
    num: 3,
    title: 'Reference Plane Standards',
    topic: 'Standards',
    cat: 'beginner',
    readTime: '14 min',
    free: false,
    desc: 'Define the DPA reference plane naming convention, Is Reference settings, and structural skeleton for each family category — so every family built by any team member has the same readable, consistent skeleton.',
    intro: `Reference planes are the skeleton of every parametric family. When they are well-named and consistently structured, any team member can open any family and immediately understand its geometry logic. When they are unnamed or inconsistently structured, every family is a unique puzzle that only its creator can maintain.

This lesson establishes the DPA reference plane standard — the naming convention, Is Reference settings, and structural patterns for each family type. From this point, every family built in the office follows the same skeleton. Consistency is built into the starting point, not enforced by policy.`,
    sections: [
      {
        title: 'EXPLAIN — The DPA Reference Plane Naming Convention',
        content: `Reference plane names must be:
- Descriptive (what does this plane do?)
- Consistent (the same name means the same thing in every family)
- Role-appropriate (snap targets named for their snap role; construction planes named for their purpose)

**DPA Naming Categories:**

BOUNDARY PLANES (outer extent planes — always Strong Reference):
Left, Right, Front, Back, Top, Bottom
These are the outer edges of the family bounding box. Every family has at least four of these. They snap to walls, grids, and other families in the project.

CENTRE PLANES (centreline planes — Strong Reference):
Centre L/R (Centre Left/Right), Centre F/B (Centre Front/Back)
These mark the geometric centre of the family. In most templates, two centre planes already exist — rename them to DPA convention if needed.

PARAMETRIC PLANES (planes driven by parameters — Strong Reference for user-facing, Weak for internal):
Named after the parameter they drive:
- "Width" drives the left/right extent of a component
- "Depth" drives the front/back extent
- "Frame Width L" drives the left frame edge position
- "Shelf Height 1", "Shelf Height 2" for multiple shelf positions

CONSTRUCTION PLANES (internal helper planes — NOT a Reference):
Prefix with "CONST-":
- CONST-Mirror Line (for mirrored geometry)
- CONST-Hinge Centre (internal reference for hinge position)
- CONST-Panel Edge (internal alignment reference)
- CONST-Array Origin (for arrayed elements)

CONNECTOR PLANES (MEP families only — Weak Reference):
Named after the connector they position:
- Connector-Cold Water
- Connector-Hot Water
- Connector-Waste
- Connector-Supply Air`,
      },
      {
        title: 'EXPLAIN — Is Reference Settings Standard',
        content: `The Is Reference property on each reference plane determines its snapping behaviour in the project. The DPA standard for each plane type:

**Boundary Planes (Left, Right, Front, Back, Top, Bottom):**
Is Reference: Left / Right / Front / Back / Top / Bottom (named reference matching direction)
Why: these are the planes that contractors and designers dimension to. Named references appear in Revit's dimension snapping options. A door with named Left and Right references can be accurately dimensioned to its frame edges in the project.

**Centre Planes (Centre L/R, Centre F/B):**
Is Reference: Center (Left/Right) or Center (Front/Back)
Why: centre references are standard snap targets for aligning elements to other elements' centres. A furniture element with named centre references can be centred on a wall or room using Align.

**Parametric Planes (parameter-driven interior planes):**
Is Reference: Strong Reference (when user-facing) or Not a Reference (when internal only)
Rule: if a project team member might ever want to dimension or align to this plane → Strong Reference. If it is only used internally within the family → Not a Reference.

Example: "Frame Width L" on a door family → Strong Reference (architects dimension to door frame faces). "CONST-Hinge Centre" → Not a Reference (internal geometry reference only).

**Construction Planes (CONST- prefix):**
Is Reference: Not a Reference
Always. Construction planes are private to the family creator. They should never appear as snap targets in the project.

**Why consistency matters:**
When every door family has Left and Right as named Strong References, placing dimensions in a project is identical regardless of which door type is used. Dimension to the door, snap to "Left" — it works the same every time. Inconsistent reference naming means team members have to inspect each family to find the correct snap target.`,
      },
      {
        title: 'GUIDE — Building the DPA Reference Plane Template for Doors',
        content: `Build the reference plane skeleton for the DPA door family template. This skeleton will be saved as part of DPA-Door-Template.rft in Lesson 9.

**Step 1 — Open Metric Door.rft:**
File → New → Family → browse to the template folder → Metric Door.rft → Open

**Step 2 — Review existing reference planes:**
In the Ref. Level plan view (floor plan), you should see:
- Two existing centre planes (horizontal and vertical)
- "Wall Closure" or "Wall Face" reference plane (where the door meets the wall face)
- Width extent reference planes

These are pre-built by the template. We ADD to these — we do not delete them.

**Step 3 — Rename existing planes:**
Select the vertical centre plane → Properties → Name → Centre L/R
Select the horizontal centre plane → Properties → Name → Centre F/B
Select the wall face plane → Properties → Name → Wall Face (if not already named)

**Step 4 — Verify Is Reference on existing planes:**
Select Centre L/R → Properties → Is Reference → Center (Left/Right)
Select Centre F/B → Properties → Is Reference → Center (Front/Back)

**Step 5 — In the Front elevation view, add height reference plane:**
The template should already have a "Height" reference plane. If not:
Architecture → Reference Plane → draw horizontal line in Front elevation
Name: Top of Opening → Is Reference: Top

**Step 6 — Add frame reference planes:**
In the Ref. Level plan view:
Architecture → Reference Plane → draw a vertical line inside the Left Width extent
Name: Frame Inner L → Is Reference: Strong Reference
Distance from Left: this will be driven by "Frame Width" parameter (added in Lesson 4)

Repeat on the right:
Name: Frame Inner R → Is Reference: Strong Reference

**Step 7 — Add a construction plane:**
Draw a vertical reference plane at the door hinge position:
Name: CONST-Hinge Centre → Is Reference: Not a Reference

**Step 8 — Verify all names:**
Select each reference plane and confirm the Name field is filled in Properties.
No unnamed planes should exist in the family.

**Step 9 — Save as a working file (not the final template yet):**
File → Save As → Family
Navigate to: C:\\DharrenPark\\FamilyLibrary\\05_Templates\\Current\\
Filename: DPA-Door-Template-WIP.rfa
Save.`,
      },
      {
        title: 'PRACTICE — Document the DPA Reference Plane Standard',
        content: `Add the reference plane standard to your DPA-FamilyStandards-v1.0.txt document.

**Open your standards document and add SECTION 2:**

---
SECTION 2: REFERENCE PLANE STANDARDS
---

DPA REFERENCE PLANE NAMING CONVENTION:

BOUNDARY PLANES:
Left → Is Reference: Left (Strong)
Right → Is Reference: Right (Strong)
Front → Is Reference: Front (Strong)
Back → Is Reference: Back (Strong)
Top → Is Reference: Top (Strong)
Bottom → Is Reference: Bottom (Strong)

CENTRE PLANES:
Centre L/R → Is Reference: Center (Left/Right) (Strong)
Centre F/B → Is Reference: Center (Front/Back) (Strong)

PARAMETRIC PLANES:
[Parameter Name] → Is Reference: Strong Reference (if user-facing)
[Parameter Name] → Is Reference: Not a Reference (if internal only)
Examples: Frame Width L, Frame Width R, Shelf Height 1, Ledge Depth

CONSTRUCTION PLANES (prefix CONST-):
CONST-[Description] → Is Reference: Not a Reference
Examples: CONST-Mirror Line, CONST-Hinge Centre, CONST-Array Origin

MEP CONNECTOR PLANES (prefix Connector-):
Connector-[System] → Is Reference: Not a Reference
Examples: Connector-Cold Water, Connector-Supply Air

RULES:
1. Every reference plane must have a name — no unnamed planes in any published family
2. The origin (intersection of Centre L/R and Centre F/B) is always the family insertion point
3. CONST- planes never snap in projects — they are family-internal only
4. Outer boundary planes always have the named Is Reference matching their direction

**In your door template WIP file — verify:**
- All existing planes named
- Frame Inner L and Frame Inner R added with Strong Reference
- CONST-Hinge Centre added with Not a Reference
- Centre planes named correctly with correct Is Reference settings

**Standards document saved.**

Move to Lesson 4 — Parameter Naming Conventions.`,
      },
    ],
    takeaways: [
      'Four plane types: Boundary (Left/Right/Front/Back — Strong), Centre (Center L/R, F/B — Strong), Parametric (parameter name — Strong or Weak), Construction (CONST- prefix — Not a Reference)',
      'Named Strong References appear as snap targets in the project — doors with named Left/Right references can be dimensioned to frame faces from any view',
      'CONST- planes are private to the family — they never appear as snap targets and should never be Strong Reference',
      'Every reference plane must be named — no unnamed planes in any published DPA family',
      'The origin (intersection of Centre L/R and Centre F/B) is the family insertion point — position it deliberately where users expect to click when placing',
    ],
    resource: {
      title: 'Autodesk Revit — Reference Planes in Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-reference-planes-families',
    },
    prev: 'rfs-2',
    next: 'rfs-4',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-4: Parameter Naming Conventions
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-4',
    num: 4,
    title: 'Parameter Naming Conventions',
    topic: 'Standards',
    cat: 'beginner',
    readTime: '14 min',
    free: false,
    desc: 'Establish the DPA parameter naming standard — consistent names, types, and groupings for every parameter across all office families so schedules, tags, and IFC exports work correctly on the first attempt.',
    intro: `Parameter names are the interface between the family creator and everyone else — the architects who read Properties, the engineers who build schedules, the BIM Manager who maps IFC exports, the FM team who receives COBie data. A parameter named "W" tells nobody anything. A parameter named "Width" tells everyone everything.

This lesson establishes the DPA parameter naming standard — the complete list of standard parameter names, their types, their groupings, and the rules for adding new parameters. From this point, "Width" always means width, "Fire Rating" always means fire rating, and every schedule column name is predictable and consistent.`,
    sections: [
      {
        title: 'EXPLAIN — Why Parameter Names Are an Interface',
        content: `When you name a parameter in a family, you are making a decision that affects five different stakeholders:

**The family creator (you now):**
Names the parameter. Sets the type (Length, Text, Yes/No). Sets Instance or Type.

**The team member placing the family:**
Reads parameter names in Properties. Fills in values. Sees "Width" and knows exactly what to enter. Sees "W" and has to guess or ask.

**The BIM Manager building schedules:**
Creates a schedule column using the parameter name. If every door family uses "Width" and every window family uses "Width", one schedule column covers all. If some use "Width", some "W", some "Opening Width", the schedule has 3 columns for the same data.

**The IFC export configurator:**
Maps parameter names to IFC property sets. The mapping file says: "Fire Rating" → Pset_DoorCommon.FireRating. If the family uses "Fire_Rating" or "FireRating" or "fire rating", the mapping fails.

**The COBie / FM delivery team:**
Reads parameter names in the COBie spreadsheet. "Asset ID" is a recognisable FM term. "ASID" is not.

**The DPA naming standard resolves all of this:**
One list of standard names. Every family creator uses these names. Every schedule, every IFC mapping, every COBie field works immediately — because the names are consistent.

**The three naming rules:**

Rule 1 — Use full words, not abbreviations.
Width not W. Height not H. Fire Rating not FR.

Rule 2 — Use Title Case (first letter of each word capitalised).
Frame Width not frame width or FRAME WIDTH or frameWidth.

Rule 3 — Be specific when multiple similar parameters exist.
Frame Width not just Width (when a door has both an opening width and a frame width).
Cold Water Pipe Size not just Pipe Size (when a family has multiple pipe sizes).`,
      },
      {
        title: 'EXPLAIN — The DPA Standard Parameter List',
        content: `These parameter names are the DPA standard. Every family that needs one of these parameters uses this exact name — no variations.

**DIMENSION PARAMETERS (Type: Length):**
Width — the primary horizontal dimension of the family or component
Height — the primary vertical dimension
Depth — the primary front-to-back dimension
Thickness — the thickness of a panel, slab, or thin element
Frame Width — the width of a frame component (doors, windows)
Frame Depth — the depth of a frame into the wall
Sill Height — height of window sill from floor
Clear Width — the clear opening dimension (inside frame)
Clear Height — the clear opening height
Panel Width — width of an infill panel
Panel Height — height of an infill panel

**IDENTITY PARAMETERS (Type: Text):**
Description — full text description of the element or type
Manufacturer — manufacturer or supplier name
Product Model — model number or catalogue reference
Specification Reference — project specification clause number (e.g., L10/110)
NBS Clause Reference — NBS clause number for UK/international specs

**FIRE AND SAFETY PARAMETERS (Type: Text or Yes/No):**
Fire Rating — fire resistance period (e.g., "60 min", "120 min")
Acoustic Rating — sound reduction (e.g., "Rw 42 dB")
Security Rating — security classification (e.g., "RC2")
Intumescent Strip Required — Yes/No — whether intumescent seal is needed

**PERFORMANCE PARAMETERS:**
U-Value — thermal transmittance (Number, W/m²K)
SHGC — solar heat gain coefficient (Number)
Visible Light Transmittance — percentage (Number)
Noise Level — equipment noise in dB (Number)

**FM / ASSET PARAMETERS (Type: Text):**
Asset ID — unique FM system identifier
Maintenance Frequency — maintenance schedule (Annual, Quarterly, Monthly)
Warranty Period — warranty duration (e.g., "2 years", "10 years")
Installation Date — date of installation

**VISIBILITY PARAMETERS (Type: Yes/No):**
Show Vision Panel — controls glazing visibility in door families
Show Modesty Panel — controls privacy panel visibility
Show Control Box — controls equipment control panel visibility
Show Base Plate — controls structural base plate visibility

**MEP PARAMETERS:**
Cold Water Pipe Size — pipe diameter in mm (Length)
Hot Water Pipe Size — (Length)
Waste Pipe Size — (Length)
Airflow — volume flow rate (number in CFM or L/s per project convention)
Cooling Capacity — cooling output in kW (Number)
Heating Capacity — (Number)
Connected Load — electrical load in kVA (Number)`,
      },
      {
        title: 'GUIDE — Adding Standard Parameters to a Family',
        content: `Practice adding standard parameters to the door template WIP file from Lesson 3.

**Step 1 — Open the door template WIP file:**
File → Open → navigate to DPA-Door-Template-WIP.rfa → Open

**Step 2 — Open Family Types:**
Create tab → Family Types button

**Step 3 — Verify existing parameters use DPA names:**
The Metric Door.rft template has Width and Height parameters. These match DPA convention exactly. Good — keep them.

**Step 4 — Add Frame Width parameter:**
Family Types dialog → New Parameter button
Name: Frame Width
Discipline: Common
Type of Parameter: Length
Instance or Type: Type (all doors of the same type have the same frame width)
Group Under: Dimensions
Click OK.

**Step 5 — Add Frame Depth parameter:**
New Parameter:
Name: Frame Depth
Type: Length, Type, Dimensions
Click OK.

**Step 6 — Add Description parameter:**
New Parameter:
Name: Description
Type: Text, Type, Identity Data
Click OK.

**Step 7 — Add Fire Rating parameter:**
IMPORTANT: Fire Rating must be a SHARED parameter so it can be read by tags and IFC exports.
Do NOT create it as a regular family parameter.

New Parameter → select "Shared Parameter" radio button
Browse to: C:\\DharrenPark\\FamilyLibrary\\_Standards\\SharedParameters\\
(We will create this file in Lesson 17. For now, note that Fire Rating MUST be shared.)
If the shared parameter file does not exist yet: create a placeholder in the Family Types dialog as a regular parameter named "Fire Rating" and note it must be converted to shared in Lesson 17.

**Step 8 — Set parameter values for a test type:**
In the Family Types dialog:
Type Name: Single-Flush: 900x2100mm
Width: 900mm
Height: 2100mm
Frame Width: 75mm
Frame Depth: 100mm
Description: Single-flush door, solid core, painted finish

Click Apply → verify geometry updates correctly.

**Step 9 — Save the WIP file.**`,
      },
      {
        title: 'PRACTICE — Document the DPA Parameter Standard',
        content: `Add the parameter naming convention to your standards document.

**Add SECTION 3 to DPA-FamilyStandards-v1.0.txt:**

---
SECTION 3: PARAMETER NAMING CONVENTIONS
---

DPA PARAMETER NAMING RULES:
1. Full words, not abbreviations (Width not W, Height not H)
2. Title Case (Frame Width not frame width or FRAMEWIDTH)
3. Be specific when multiple similar parameters exist (Cold Water Pipe Size, not Pipe Size)
4. Fire and Safety parameters MUST be Shared Parameters (for tag and IFC compatibility)
5. FM Asset parameters MUST be Shared Parameters (for COBie compatibility)

STANDARD PARAMETER NAMES BY CATEGORY:

DIMENSIONS (Type: Length):
Width, Height, Depth, Thickness
Frame Width, Frame Depth, Sill Height
Clear Width, Clear Height
Panel Width, Panel Height

IDENTITY (Type: Text):
Description, Manufacturer, Product Model
Specification Reference, NBS Clause Reference

FIRE AND SAFETY (SHARED — Type: Text or Yes/No):
Fire Rating, Acoustic Rating, Security Rating, Intumescent Strip Required

PERFORMANCE (Type: Number):
U-Value, SHGC, Visible Light Transmittance, Noise Level

FM ASSET (SHARED — Type: Text):
Asset ID, Maintenance Frequency, Warranty Period, Installation Date

VISIBILITY (Type: Yes/No):
Show Vision Panel, Show Modesty Panel, Show Control Box, Show Base Plate

GROUPINGS — parameters go under these groups:
- Length/dimension parameters → Dimensions
- Identity and description → Identity Data
- Fire and safety → Identity Data (or custom group "Fire and Safety" if preferred)
- Visibility toggles → Graphics
- FM data → Identity Data
- MEP performance → Mechanical or Electrical (discipline-appropriate)

**In your door template WIP file — verify:**
Frame Width and Frame Depth added as Type, Length, Dimensions
Description added as Type, Text, Identity Data
Fire Rating noted as requiring shared parameter conversion in Lesson 17

**Standards document saved.**

Move to Lesson 5 — Subcategory Standards.`,
      },
    ],
    takeaways: [
      'Three naming rules: full words (not abbreviations), Title Case, specific names when multiple similar parameters exist',
      'Standard names are fixed: Width not W, Fire Rating not FR, Frame Width not just Width when there are multiple widths',
      'Fire Rating, Acoustic Rating, and all FM Asset parameters MUST be Shared Parameters — regular parameters cannot be read by tags or mapped to IFC',
      'Parameter groupings: Length params → Dimensions, identity/description → Identity Data, visibility toggles → Graphics, FM data → Identity Data',
      'The DPA standard parameter list is a living document — add new standard names when a new family type introduces a genuinely new parameter concept',
    ],
    resource: {
      title: 'Autodesk Revit — Family Parameters',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-family-parameters',
    },
    prev: 'rfs-3',
    next: 'rfs-5',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-5: Subcategory Standards
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-5',
    num: 5,
    title: 'Subcategory Standards',
    topic: 'Standards',
    cat: 'beginner',
    readTime: '13 min',
    free: false,
    desc: 'Define the DPA subcategory set for every family category — the invisible layer that enables project teams to independently control door frames, glazing, swing arcs, and structural elements in Visibility/Graphics without editing families.',
    intro: `Subcategories are the mechanism that gives project teams graphic control over individual components within a family — without touching the family itself. When a door family assigns its frame geometry to the "DPA-Frame" subcategory and its swing arc to "DPA-Swing," the project team can turn off door swings on coordination plans (too cluttered) while keeping frames visible — in the project's VG dialog, with no family editing required.

This lesson defines the DPA subcategory standard for every family category in the library. Once established and consistently applied, subcategory control works identically across every family in the office.`,
    sections: [
      {
        title: 'EXPLAIN — How Subcategories Work in Projects',
        content: `Subcategories live in two places:

**In the family:** when you create geometry, you assign it to a subcategory. The subcategory is defined in Manage → Object Styles → Model Objects → [Category] → subcategories. A door family assigns its frame extrusion to subcategory "Doors - Frame/Mullion," its glazing to "Doors - Glass," and its swing arc (a symbolic line) to "Doors - Swing."

**In the project:** in Visibility/Graphics (VG), expanding the Doors category shows all subcategories. Each subcategory has its own visibility checkbox and override settings. The project team can:
- Turn off "Doors - Swing" on coordination plans (less visual noise)
- Make "Doors - Glass" blue in elevation views (glazing is clearly identifiable)
- Show "Doors - Frame/Mullion" at a different line weight than the door leaf

**This only works if families use subcategories consistently:**
If some door families assign the frame to "DPA-Frame" and others assign it to "Frame" or leave it unassigned (the category default), VG control is inconsistent. Turning off "DPA-Frame" hides frames in some doors but not others.

**The DPA subcategory naming convention:**
All DPA subcategories are prefixed with "DPA-" to clearly distinguish them from Revit's built-in subcategories and from subcategories added by other tools.

Built-in Revit subcategories (e.g., "Doors - Glass") exist and are correctly named. We DO use built-in subcategories where they exist and are appropriate. We CREATE DPA- prefixed subcategories for elements that built-in subcategories do not cover.`,
      },
      {
        title: 'EXPLAIN — The DPA Subcategory Set by Category',
        content: `**DOORS (category: Doors):**
Built-in: Frame/Mullion, Glass, Panel, Opening
DPA additional: DPA-Swing (for plan swing arcs), DPA-Hardware (for handles and hinges)

Assignment:
- Door leaf solid → Panel subcategory
- Frame geometry → Frame/Mullion subcategory
- Glazing geometry → Glass subcategory
- Plan swing arc (symbolic line) → DPA-Swing subcategory
- Handle/hardware nested family → DPA-Hardware subcategory

**WINDOWS (category: Windows):**
Built-in: Frame/Mullion, Glass, Opening
DPA additional: DPA-Sill (for sill geometry), DPA-Head (for head detail geometry)

Assignment:
- Frame geometry → Frame/Mullion
- Glazing → Glass
- Sill projection → DPA-Sill
- Head detail geometry → DPA-Head

**FURNITURE (category: Furniture):**
Built-in: none meaningful
DPA: DPA-Frame (structural frame), DPA-Upholstery (fabric surfaces), DPA-Leg (leg elements), DPA-Surface (work surfaces, shelves)

Assignment:
- Structural frame extrusions → DPA-Frame
- Upholstery forms → DPA-Upholstery
- Leg geometry → DPA-Leg
- Work surfaces, shelves, tops → DPA-Surface

**MECHANICAL EQUIPMENT (category: Mechanical Equipment):**
DPA: DPA-Body (main equipment casing), DPA-Connection (duct/pipe connection points), DPA-Label (text labels on equipment)

**LIGHTING FIXTURES (category: Lighting Fixtures):**
DPA: DPA-Housing (the luminaire body), DPA-Aperture (the ceiling trim ring/opening), DPA-LightSource (the lamp or LED element)

Assignment:
- Fine detail housing geometry → DPA-Housing (visible at Fine, hidden at Coarse)
- Ceiling trim ring → DPA-Aperture (visible at Medium and Fine)
- Light source indicator → DPA-LightSource

**STRUCTURAL COLUMNS (category: Structural Columns):**
DPA: DPA-Body (column body), DPA-BasePlate (base plate geometry), DPA-CapPlate (cap plate geometry)

**GENERIC MODELS (category: Generic Models — last resort families):**
DPA: DPA-Primary (main geometry), DPA-Secondary (secondary geometry), DPA-Reference (reference geometry, not for printing)`,
      },
      {
        title: 'GUIDE — Creating Subcategories in the Door Template',
        content: `Add the DPA subcategory set to the door template WIP file.

**Step 1 — Open Object Styles in the family:**
With DPA-Door-Template-WIP.rfa open:
Manage tab → Settings panel → Object Styles

The Object Styles dialog for families is simpler than in projects. It shows the family's category (Doors) with existing subcategories.

**Step 2 — Review existing subcategories:**
Expand Doors → you should see:
- Frame/Mullion (built-in)
- Glass (built-in)
- Panel (built-in)
- Opening (built-in)

These are Revit built-in subcategories. Keep them.

**Step 3 — Create DPA-Swing subcategory:**
In Object Styles → Model Objects tab → select Doors → click "New..."
(Or the equivalent "Add Subcategory" button depending on Revit version)

Name: DPA-Swing
Line Weight Projection: 1
Line Weight Cut: — (not applicable for symbolic lines)
Line Color: Gray (127,127,127)
Line Pattern: Dashed

Click OK.

**Step 4 — Create DPA-Hardware subcategory:**
New subcategory under Doors:
Name: DPA-Hardware
Line Weight Projection: 2
Line Color: Black (0,0,0)
Line Pattern: Solid

Click OK.

**Step 5 — Assign existing geometry to subcategories:**
The template may have placeholder geometry. Select any solid form → Properties → Subcategory → select the appropriate subcategory from the dropdown.

For the plan swing arc (a symbolic line in the Ref. Level view):
Select the arc → Properties → Subcategory → DPA-Swing

**Step 6 — Verify subcategories in VG:**
Load the family into the DPC project temporarily to test:
Create tab → Load into Project

In the project: VG dialog → Model Categories → Doors → expand → you should see DPA-Swing and DPA-Hardware in the list.

Turn off DPA-Swing → the swing arc disappears from the plan view.
Turn it back on.

**Step 7 — Reload the family back out of the project (for now):**
We are still building the template. The project test was just verification.

**Step 8 — Save the WIP file.**`,
      },
      {
        title: 'PRACTICE — Document the DPA Subcategory Standard',
        content: `Add the subcategory standard to your DPA-FamilyStandards-v1.0.txt document.

**Add SECTION 4 to the standards document:**

---
SECTION 4: SUBCATEGORY STANDARDS
---

DPA SUBCATEGORY NAMING:
- Use built-in Revit subcategories where they exist and are appropriate
- Create DPA-prefixed subcategories for additional control beyond built-in
- Never leave geometry on the category default if a more specific subcategory exists

DPA SUBCATEGORY SET:

DOORS:
Frame/Mullion (built-in) → door frames, architraves
Glass (built-in) → glazing panels
Panel (built-in) → door leaf solid
DPA-Swing → plan swing arc (symbolic line, grey dashed)
DPA-Hardware → handles, hinges, closers (nested hardware families)

WINDOWS:
Frame/Mullion (built-in) → window frames
Glass (built-in) → glazing panels
DPA-Sill → external sill projection geometry
DPA-Head → head detail geometry

FURNITURE:
DPA-Frame → structural frame extrusions
DPA-Upholstery → upholstered surfaces
DPA-Leg → leg geometry
DPA-Surface → work surfaces, shelves, tops

MECHANICAL EQUIPMENT:
DPA-Body → main equipment casing
DPA-Connection → duct/pipe connection geometry
DPA-Label → text/label geometry on equipment face

LIGHTING FIXTURES:
DPA-Housing → luminaire body (Fine detail level only)
DPA-Aperture → ceiling trim ring (Medium and Fine)
DPA-LightSource → lamp / LED indicator

STRUCTURAL COLUMNS:
DPA-Body → column body geometry
DPA-BasePlate → base plate geometry (Fine only)
DPA-CapPlate → cap plate geometry (Fine only)

SUBCATEGORY ASSIGNMENT RULE:
Every piece of solid geometry in a family must be assigned to a subcategory.
No geometry should sit on the category default (no subcategory assigned).
Reason: unassigned geometry cannot be independently controlled in VG.

**In DPA-Door-Template-WIP.rfa — verify:**
DPA-Swing subcategory created (grey, dashed)
DPA-Hardware subcategory created (black, solid)
Plan swing arc assigned to DPA-Swing
Standards document saved.

Move to Lesson 6 — Visibility Control Standards.`,
      },
    ],
    takeaways: [
      'Subcategories give project teams VG control over individual family components — turning off DPA-Swing removes all door swing arcs without editing any family',
      'Use built-in subcategories (Frame/Mullion, Glass, Panel) where they exist — create DPA- prefixed subcategories for additional elements',
      'Every piece of geometry must be assigned to a subcategory — unassigned geometry sits on the category default and cannot be independently controlled',
      'DPA-Swing is grey and dashed — it represents a plan arc annotation, not physical geometry, so it should visually differ from solid construction lines',
      'Test subcategories by loading into the DPC project and checking VG → Doors → expanding subcategories — if DPA-Swing is not in the list, the subcategory was not created correctly',
    ],
    resource: {
      title: 'Autodesk Revit — Subcategories in Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-subcategories-families',
    },
    prev: 'rfs-4',
    next: 'rfs-6',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-6: Visibility Control Standards
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-6',
    num: 6,
    title: 'Visibility Control Standards',
    topic: 'Standards',
    cat: 'beginner',
    readTime: '14 min',
    free: false,
    desc: 'Establish the DPA detail level visibility standard for every family type — what geometry shows at Coarse, Medium, and Fine — so every family in the library behaves consistently in drawing production.',
    intro: `A family that shows identical geometry at every detail level is not a professional family. At 1:200 Coarse, a chair should be a simple rectangle. At 1:20 Fine, the same chair shows cushion edges, leg detail, and armrest profiles. The information density matches the drawing scale — exactly as a good drawing should.

The visibility control standard established in this lesson defines what every family type shows at each detail level. Apply it consistently and every family in the DPA library behaves identically. Forget it and every family is different — some too detailed at small scale, some too simplified at large scale.`,
    sections: [
      {
        title: 'EXPLAIN — The Three Detail Levels and Their Drawing Contexts',
        content: `Revit's three detail levels correspond to specific drawing scales in professional practice:

**Coarse (1:100 to 1:500):**
The scale of overview drawings — site plans, key plans, floor plans at 1:200, combined services drawings. At this scale, individual component detail is not readable and would create visual noise. Elements should show only their footprint or a simplified plan symbol.

What Coarse should show:
- The space the element occupies (its bounding box or simplified outline)
- Symbolic lines that represent the element conventionally (door swing arc)
- Nothing else

What Coarse should NOT show:
- Internal detail (shelves inside a cabinet, cushion seams on a sofa)
- Fine geometric edges (chamfers, rounded corners)
- Hardware (handles, hinges)
- Any geometry that does not contribute to reading the drawing at 1:100+

**Medium (1:50 to 1:100):**
The scale of production drawings — standard floor plans at 1:100, reflected ceiling plans, general arrangement drawings. Enough detail to understand the element but not construction-level detail.

What Medium should show:
- The overall form of the element
- Major components (seat and back of a chair, but not cushion seams)
- The door leaf, frame, and swing arc (but not hardware)
- Equipment outline and major connection points

**Fine (1:20 and below):**
The scale of details and enlarged plans. Full construction detail is expected.

What Fine should show:
- Full 3D geometry including all modelled detail
- Hardware and nested components
- Edge profiles and surface detail
- All symbolic lines and annotation

**The corollary principle:**
If a geometry element is not readable at a given scale — either too small to see or too complex and cluttered — it should be hidden at that detail level. Hiding complex geometry at Coarse is not just aesthetic — it is performance-critical. A floor plan with 200 chairs, each showing 8,000 polygons at Coarse, is unusable. The same plan with 200 chairs showing a simple rectangle at Coarse regenerates in seconds.`,
      },
      {
        title: 'EXPLAIN — The DPA Visibility Matrix',
        content: `The DPA Visibility Matrix defines exactly what each family type shows at each detail level. This matrix is part of the family QA checklist — every published family must comply.

**DOOR FAMILIES:**
Coarse: Symbolic Lines only — plan swing arc (DPA-Swing subcategory) and opening lines. No 3D geometry visible.
Medium: Door leaf (Panel subcategory), frame outline (Frame/Mullion subcategory), swing arc. No hardware.
Fine: All geometry — door leaf, frame, glazing (if applicable), hardware (DPA-Hardware).

**WINDOW FAMILIES:**
Coarse: Symbolic Lines only — window opening indicator. No 3D.
Medium: Frame outline, glazing panel (flat). No sill or head detail.
Fine: Full frame geometry, glazing, sill projection, head detail.

**FURNITURE FAMILIES:**
Coarse: Symbolic Lines only — plan outline of the furniture footprint. OR a flat solid (no internal detail). No internal shelves, no cushion detail.
Medium: Overall solid form. Seat and back visible but no cushion seams, no leg detail.
Fine: Full geometry including leg detail, upholstery seams, hardware.

**MECHANICAL EQUIPMENT FAMILIES:**
Coarse: Symbolic Lines only — equipment footprint and service zone indicator.
Medium: Equipment body (simplified solid), duct/pipe connection indicators.
Fine: Full equipment body, all connection geometry, labels.

**LIGHTING FIXTURE FAMILIES:**
Coarse: Nothing visible (ceiling grid dominates at 1:100+).
Medium: Aperture only — the ceiling trim ring or face (DPA-Aperture subcategory).
Fine: Full housing geometry, aperture, light source indicator.

**STRUCTURAL COLUMN FAMILIES:**
Coarse: Filled square or circle (plan cross-section, no detail).
Medium: Cross-section with correct hatch pattern.
Fine: Full geometry including base plate, cap plate.

**The Symbolic Line rule for plan representation:**
3D geometry sliced at the plan cut height often looks wrong — irregular shapes from cut geometry, distorted furniture silhouettes. The professional solution: set 3D geometry visibility to "not visible in plan/RCP views" and add 2D Symbolic Lines in the Ref. Level plan view that show the correct plan representation. The symbolic lines show at Coarse and Medium; the 3D geometry shows in elevation and 3D views. This is the correct approach for furniture and equipment families.`,
      },
      {
        title: 'GUIDE — Applying Visibility Controls to the Door Template',
        content: `Apply the DPA visibility matrix to the door template WIP file.

**Step 1 — Open the door template WIP:**
File → Open → DPA-Door-Template-WIP.rfa

**Step 2 — Select the door leaf solid:**
Click on the door leaf extrusion (if a placeholder exists in the template).
Properties panel → the Visible row shows three checkboxes: Coarse, Medium, Fine.

**Step 3 — Set door leaf visibility:**
Coarse: UNCHECK (door leaf is 3D geometry — not visible at Coarse)
Medium: CHECK (leaf is visible at Medium)
Fine: CHECK (leaf is visible at Fine)

**Step 4 — Select the swing arc symbolic line:**
In the Ref. Level plan view, select the door swing arc (if it exists in the template).

**Step 5 — Set swing arc visibility:**
Coarse: CHECK (swing arc IS visible at Coarse — it is the plan symbol)
Medium: CHECK (swing arc visible at Medium too)
Fine: UNCHECK (at Fine, the actual 3D door leaf edge is sufficient — no swing arc needed in a detail drawing)

Alternatively: leave swing arc visible at all levels — some offices prefer to show it at Fine for clarity. Document your office decision.

**Step 6 — Set the plan view representation:**
For the door frame and leaf: in Properties → "Visible in Plan/RCP Views" → this controls whether the 3D geometry appears when the plan is cut. For doors, you want the 3D cut to show in plan (the frame and leaf cut through the wall plane). Keep plan visibility ON.

**Step 7 — Add a note in the Family Types dialog:**
Family Types → (select type) → Comments parameter (if available) → add:
"Coarse: symbolic lines only. Medium: leaf + frame. Fine: full detail including hardware."

This is the DPA visibility documentation standard — every family type documents its visibility behaviour in the Comments field.

**Step 8 — Test in the DPC project:**
Load into DPC project → place a door → switch between Coarse, Medium, Fine in the floor plan view → verify the visibility matches the DPA matrix.

**Step 9 — Save the WIP file.**`,
      },
      {
        title: 'PRACTICE — Document the DPA Visibility Standard',
        content: `Add the visibility control standard to your DPA-FamilyStandards-v1.0.txt document.

**Add SECTION 5 to the standards document:**

---
SECTION 5: VISIBILITY CONTROL STANDARDS
---

DPA DETAIL LEVEL CONVENTION:

COARSE (1:100 to 1:500 views):
Show ONLY:
- Symbolic Lines representing the element's plan footprint
- Simple solid forms where the element's footprint is the key information (structural columns)
Hide:
- All detailed 3D geometry
- Hardware and nested components
- Surface detail and edge profiles

MEDIUM (1:50 to 1:100 views):
Show:
- Overall form of the element (main solid bodies)
- Major components visible at this scale
- Connection points for MEP elements
Hide:
- Hardware (handles, hinges, connectors)
- Detailed surface geometry
- Fine edge profiles

FINE (1:20 and below):
Show ALL:
- Full geometry
- Hardware and nested families
- All detail geometry
- Symbolic lines appropriate to detail scale

FAMILY-SPECIFIC MATRIX:

Doors: Coarse=Symbolic only | Medium=Leaf+Frame+Swing | Fine=All+Hardware
Windows: Coarse=Symbolic only | Medium=Frame+Glass | Fine=All+Sill+Head
Furniture: Coarse=Plan outline only | Medium=Main form | Fine=Full detail
Mech Equipment: Coarse=Symbolic only | Medium=Body+Connections | Fine=Full
Lighting Fixtures: Coarse=Nothing | Medium=Aperture only | Fine=Full housing
Struct Columns: Coarse=Filled cross-section | Medium=Hatched cross-section | Fine=Full+Plates

SYMBOLIC LINE RULE:
For furniture and equipment: set 3D geometry to "not visible in plan/RCP views"
Add 2D Symbolic Lines in the Ref. Level view for the plan representation
Symbolic Lines show at Coarse and Medium; 3D shows in elevation and 3D views

VISIBILITY DOCUMENTATION:
Every published family must document its visibility behaviour in the type Comments field:
"Coarse: [what shows]. Medium: [what shows]. Fine: [what shows]."

**In DPA-Door-Template-WIP.rfa — verify:**
Door leaf: Coarse=off, Medium=on, Fine=on
Swing arc symbolic line: Coarse=on, Medium=on, Fine=off (or per office decision)
Comments field populated with visibility description

**Standards document saved.**
Move to Lesson 7 — Material Parameter Standards.`,
      },
    ],
    takeaways: [
      'Coarse = symbolic lines and footprints only. Medium = main form. Fine = full detail including hardware — apply this consistently to every family',
      'A furniture family at Coarse with full 3D geometry placed 200 times makes a 1:100 plan unusable — hiding complex geometry at Coarse is a performance requirement, not just aesthetic',
      'The Symbolic Line rule: set 3D geometry to "not visible in plan" and add 2D Symbolic Lines for plan representation — cleaner and more controllable',
      'Document visibility behaviour in the type Comments field: "Coarse: symbolic only. Medium: leaf+frame+swing. Fine: all+hardware." — every family communicates its own standard',
      'Lighting fixtures at Coarse show nothing — the ceiling grid dominates at 1:100 and fixture geometry would create visual noise without adding information',
    ],
    resource: {
      title: 'Autodesk Revit — Visibility Controls in Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-visibility-controls-families',
    },
    prev: 'rfs-5',
    next: 'rfs-7',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-7: Material Parameter Standards
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-7',
    num: 7,
    title: 'Material Parameter Standards',
    topic: 'Standards',
    cat: 'beginner',
    readTime: '13 min',
    free: false,
    desc: 'Establish the DPA material parameter standard — when to use By Category, when to use explicit material parameters, and how to set up material parameters so every family contributes correctly to material takeoff schedules.',
    intro: `Material parameters determine how families look in renders, how they hatch in drawings, and what data flows into material takeoff schedules. Three families of the same chair type, each with different material parameter setups, produce three different schedule outputs and three different rendering results — even though they represent the same physical chair.

This lesson establishes the DPA material parameter standard — the consistent approach to material assignment that makes every family contribute correctly to drawings, renders, and schedules from the moment it is loaded into a project.`,
    sections: [
      {
        title: 'EXPLAIN — The Three Material Assignment Approaches',
        content: `There are three ways to assign a material to family geometry:

**Approach 1 — By Category (no material assigned):**
The geometry inherits its material from the project's Object Styles settings for that category. All Furniture-category geometry with no explicit material shows the default Furniture material from Object Styles.

When to use: when the material appearance should always match the project standard for that category, and no per-family or per-type variation is needed. Example: structural column bodies in concrete — the project's structural concrete material is always correct regardless of which column it is.

Limitation: no per-instance variation, no material takeoff specificity. Every element with By Category material shows as the same material in takeoff schedules.

**Approach 2 — Explicit Fixed Material:**
A specific material is assigned directly to the geometry (not via a parameter). The material is baked into the family — it always shows as "STR-Concrete-InSitu-C32/40" regardless of where or how the family is placed.

When to use: when the material is always the same for all types and instances of this family, and the specific material matters for scheduling. Example: a glazed partition family where the glass is always clear glazing.

Limitation: the material cannot be changed without editing the family.

**Approach 3 — Material Parameter (recommended for most cases):**
A parameter of Type = Material is added to the family. The project team selects the appropriate material from the project's material library when configuring the family type or instance.

When to use: when different types or instances of the family can have different materials — a chair in fabric or leather, a cabinet in timber or painted MDF, a wall panel in stone or GRC. This is the most flexible and most commonly used approach.

**The DPA decision rule:**
Use Material Parameters for all architectural and furniture families where material choice is part of the specification. Use By Category for structural elements where the project Object Styles standard is always correct. Use explicit fixed materials for glazing, light fittings, and elements where the material never varies.`,
      },
      {
        title: 'EXPLAIN — The DPA Material Parameter Set',
        content: `For each family type, the DPA standard defines which material parameters are needed and what they are called.

**DOOR FAMILIES:**
- Door Leaf Material (Type parameter) — the door leaf finish (painted MDF, timber veneer, glass, etc.)
- Frame Material (Type parameter) — the door frame finish (painted timber, anodised aluminium, stainless steel)
- Glass Material (Type parameter, only on glazed doors) — always "ARCH-Glazing-Clear" by default

**WINDOW FAMILIES:**
- Frame Material (Type parameter) — aluminium, timber, UPVC, steel
- Glass Material (Type parameter) — single, double, triple, with U-Value and SHGC parameters

**FURNITURE FAMILIES:**
- Primary Material (Type parameter) — main body material (timber, metal, upholstered)
- Secondary Material (Type parameter) — secondary surface (work top, trim)
- Upholstery Material (INSTANCE parameter) — per-instance colour/fabric for individual chairs/sofas

The Upholstery Material is Instance (not Type) because in many projects, chairs of the same type are specified in different colours for different zones. One chair type, multiple upholstery colours — each a separate instance value.

**MECHANICAL EQUIPMENT FAMILIES:**
- Body Material (Type parameter) — equipment casing finish (galvanised steel, powder-coated, stainless)
Most MEP equipment uses By Category for basic display and only adds explicit parameters when a specific finish needs to be specified and reported.

**STRUCTURAL FAMILIES:**
- Structural Material (Type parameter) — drives the analytical model material as well as visual appearance. Required for structural analysis exports.

**MATERIAL PARAMETER NAMING:**
Follow the DPA parameter naming convention from Lesson 4:
- Door Leaf Material (not "Mat1" or "DoorMat" or "Leaf")
- Frame Material (not "FrameMat" or "Material2")
- Upholstery Material (not "Fabric" or "Color" or "Upholst")

**Default values:**
Every material parameter must have a sensible default value set in the family types. The default should be the most commonly used material for that parameter. A door family's Frame Material defaults to "ARCH-Metal-Aluminium-Anodised" — the most common DPC door frame specification. Project teams override it for specific project requirements.`,
      },
      {
        title: 'GUIDE — Adding Material Parameters to the Door Template',
        content: `Add material parameters to the DPA-Door-Template-WIP.rfa file.

**Step 1 — Open the door template WIP:**
Open DPA-Door-Template-WIP.rfa

**Step 2 — Open Family Types:**
Create tab → Family Types button

**Step 3 — Add Door Leaf Material parameter:**
New Parameter:
Name: Door Leaf Material
Discipline: Common
Type of Parameter: Material
Instance or Type: Type (all doors of the same type have the same leaf material)
Group Under: Materials and Finishes
Click OK.

**Step 4 — Add Frame Material parameter:**
New Parameter:
Name: Frame Material
Type of Parameter: Material
Instance or Type: Type
Group Under: Materials and Finishes
Click OK.

**Step 5 — Set default material values:**
In Family Types, with a type selected:
Click the Door Leaf Material value cell → browse → navigate to materials in the project material library.

Since we are in the Family Editor (not a project), browse to available materials → select any appropriate default (a painted MDF material if available, or leave at "<By Category>" for now and note that default values are set when the family is tested in the DPC project).

Frame Material → select anodised aluminium or similar → OK.

**Step 6 — Connect material parameters to geometry:**
Select the door leaf solid extrusion → Properties → Material → click the formula button (the small grey button beside the Material field) → type: Door Leaf Material → OK.

The door leaf now uses the Door Leaf Material parameter.

Select the frame solid extrusion → Properties → Material → formula button → type: Frame Material → OK.

**Step 7 — Verify in Family Types:**
Open Family Types → change Door Leaf Material to a different material → Apply. The door leaf should update to the new material appearance in the 3D view.

**Step 8 — Save the WIP file.**`,
      },
      {
        title: 'PRACTICE — Document the DPA Material Parameter Standard',
        content: `Add the material parameter standard to your DPA-FamilyStandards-v1.0.txt document.

**Add SECTION 6 to the standards document:**

---
SECTION 6: MATERIAL PARAMETER STANDARDS
---

DPA MATERIAL ASSIGNMENT DECISION RULE:

USE Material Parameters (Type or Instance) when:
- Different types or instances can have different materials
- The material needs to appear in material takeoff schedules tied to specific elements
- The project team needs to configure the material per project

USE By Category when:
- The project Object Styles standard is always correct for this element type
- No per-type or per-instance variation is needed
- Structural elements where the project structural material standard applies

USE Fixed (explicit) Material when:
- The material never varies across all types and instances
- Example: clear glazing, polished chrome handles

DPA MATERIAL PARAMETERS BY FAMILY TYPE:

DOORS:
Door Leaf Material → Type → Materials and Finishes → Default: painted MDF/timber veneer
Frame Material → Type → Materials and Finishes → Default: anodised aluminium
Glass Material → Type → Materials and Finishes → Default: ARCH-Glazing-Clear (glazed doors only)

WINDOWS:
Frame Material → Type → Materials and Finishes
Glass Material → Type → Materials and Finishes → Default: ARCH-Glazing-Double-LoE

FURNITURE:
Primary Material → Type → Materials and Finishes → main body
Secondary Material → Type → Materials and Finishes → work surfaces, trim
Upholstery Material → INSTANCE → Materials and Finishes → per-instance colour

MECHANICAL EQUIPMENT:
Body Material → Type → Materials and Finishes (only when finish specification matters)
Default: By Category for general equipment display

STRUCTURAL:
Structural Material → Type → Materials and Finishes → drives analytical model and visual display

NAMING RULE:
Material parameters use the same DPA naming convention (full words, Title Case):
Door Leaf Material, Frame Material, Upholstery Material, Body Material
Never: Mat1, DoorMat, Fabric, Color, Material2

DEFAULT VALUES RULE:
Every material parameter must have a sensible default set.
The default is the most common specification for that element type in DPC projects.
Document defaults in the type Comments field.

**In DPA-Door-Template-WIP.rfa — verify:**
Door Leaf Material parameter created (Type, Material, Materials and Finishes group)
Frame Material parameter created (Type, Material, Materials and Finishes group)
Parameters connected to geometry (formula button in Properties → parameter name)
Standards document saved.

Move to Lesson 8 — Loading & Testing Protocol.`,
      },
    ],
    takeaways: [
      'Three material approaches: By Category (inherits from Object Styles), Fixed (baked into geometry), Material Parameter (user-configurable) — use parameters for all architectural families where specification varies',
      'Upholstery Material is Instance (not Type) — the same chair type can have different fabric colours per instance in different zones of a project',
      'Structural Material is always a Type parameter — it drives both visual display and the analytical model material for structural analysis exports',
      'Material parameters are named in DPA convention: Door Leaf Material, Frame Material, Upholstery Material — never Mat1, DoorMat, or Fabric',
      'Every material parameter must have a default value set — the most common specification for that element type prevents empty material fields in the project',
    ],
    resource: {
      title: 'Autodesk Revit — Materials in Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-materials-families',
    },
    prev: 'rfs-6',
    next: 'rfs-8',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-8: Loading & Testing Protocol
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-8',
    num: 8,
    title: 'Loading & Testing Protocol',
    topic: 'Quality',
    cat: 'beginner',
    readTime: '12 min',
    free: false,
    desc: 'Build the DPA family QA checklist and establish the standard loading and testing protocol — the systematic process every family must pass before it is added to the office library.',
    intro: `A family that works in the Family Editor can still fail in the project. Parameters that flex correctly in isolation may break when placed on a specific wall thickness. Visibility that looks right at Fine detail level may be wrong at Coarse. Material parameters that appear correct in the family type dialog may not connect correctly to schedules.

Testing is the gate between "built" and "published." This lesson builds the DPA Family QA Checklist — the systematic test protocol that every family must pass before entering the office library. From this point, "the family works" means it has passed the checklist. Not just "it opened."`,
    sections: [
      {
        title: 'EXPLAIN — The Cost of Untested Families',
        content: `Untested families enter the library and cause problems on projects. Common failures that a proper QA checklist catches:

**Failure 1 — Parametric breakdown:**
A family's Width parameter changes correctly in the Family Editor but breaks when the width is set below a certain value in the project. A Minimum Width constraint was forgotten. The family errors out on a specific project.

**Failure 2 — Wrong category:**
A light fitting was built from Generic Model.rft instead of Lighting Fixture.rft. It was missed because the 3D view looked correct. In the project, it does not appear in lighting schedules, cannot be tagged with a lighting tag, and exports as IfcBuildingElementProxy. Three months of project data is in the wrong category.

**Failure 3 — File size explosion:**
A furniture family looks correct in the Family Editor at 380KB. When loaded into the project, the file size jumps by 15MB. A manufacturer's texture was accidentally embedded. The project team notices the model slowing down but cannot identify the cause for two weeks.

**Failure 4 — Hosting failure:**
A ceiling-hosted light fitting was built but the void form was not set correctly. When placed on a ceiling, it does not cut the hole it should. Every instance of the family in every project needs a manually drawn void region to compensate.

**Failure 5 — Missing shared parameters:**
A door family was built without the Fire Rating shared parameter. The project issues a fire compartmentation plan and the filter does not work — the doors have no data to filter on. The filter was built in ps-19 (Project Setup) and it relies on the shared parameter being in the family.

All five failures are caught by a systematic QA checklist run before the family enters the library. None of them are caught by "it looks right in the Family Editor."`,
      },
      {
        title: 'EXPLAIN — The DPA Family QA Checklist',
        content: `The DPA Family QA Checklist has seven sections:

**Section 1 — File and Metadata:**
- File size within target range (simple: <500KB, intermediate: <2MB, complex: <5MB)
- File named per DPA naming convention
- Description field populated
- Version and date in Comments field
- Purge Unused run (zero purgeable items)

**Section 2 — Category and Hosting:**
- Family category is correct (not Generic Model unless genuinely appropriate)
- Hosting type is correct (wall-hosted door, ceiling-hosted light, non-hosted furniture)
- "Cut with Voids When Loaded" is correct (checked for hosted families that cut the host)

**Section 3 — Reference Planes:**
- All reference planes named per DPA convention
- Is Reference settings correct (boundary planes = Strong, CONST- = Not a Reference)
- Origin at correct insertion point
- No unnamed planes

**Section 4 — Parameters:**
- All parameters named per DPA convention (no abbreviations)
- Instance vs. Type correctly assigned
- No unused parameters
- Fire Rating and FM parameters are shared parameters (not regular)
- Default values set for all material parameters

**Section 5 — Geometry and Visibility:**
- All geometry locked to reference planes (no free-floating elements)
- Coarse/Medium/Fine visibility per DPA matrix
- Subcategory assigned to all geometry (no unassigned elements)
- 3D geometry not visible in plan views (where Symbolic Lines are used)
- Void forms cut correctly (for hosted families)

**Section 6 — Project Testing:**
- Family loads into DPC project without errors or warnings
- All types place correctly in the correct host context
- Mark complete, delete — no stray elements after testing
- Appears in correct schedule category
- Tag reads correctly
- IFC exports as correct IFC entity (IfcDoor, IfcFurniture, etc.)

**Section 7 — Performance:**
- Placing 20 instances does not noticeably slow view regeneration
- No new warnings generated when family is loaded
- No embedded textures (check file size before and after loading)`,
      },
      {
        title: 'GUIDE — Running the QA Checklist on the Door Template',
        content: `Run the DPA QA Checklist on the DPA-Door-Template-WIP.rfa file. This is a practice run — at this stage the family is not complete (geometry, shared parameters, and some details come in later lessons). We run what we can test now.

**SECTION 1 — File and Metadata:**
Check file size: Windows Explorer → right-click DPA-Door-Template-WIP.rfa → Properties → Size
Target: under 500KB for this template stage.

Check file name: follows DPA convention? DPA-Door-Template-WIP.rfa — the WIP suffix will be removed when published.

Open family → Manage → Family Category and Parameters:
Populate Description: "DPA Door Family Template. Wall-hosted. For all single and double door types. ISO 19650 aligned. Version 0.1 WIP."
Populate Comments: "v0.1 — [Today's Date] — Working template. Geometry placeholders only."

**SECTION 2 — Category and Hosting:**
Manage → Family Category and Parameters
Category: Doors ✓
Hosting: Wall-based (set by the template) ✓
Cut with Voids When Loaded: Checked ✓

**SECTION 3 — Reference Planes:**
In the Ref. Level plan view, check each reference plane:
- Centre L/R → Is Reference = Center (Left/Right) ✓
- Centre F/B → Is Reference = Center (Front/Back) ✓
- Wall Face → Is Reference = Front ✓
- Frame Inner L → Is Reference = Strong Reference ✓
- Frame Inner R → Is Reference = Strong Reference ✓
- CONST-Hinge Centre → Is Reference = Not a Reference ✓
No unnamed planes: select each blue dashed line and confirm Name field is populated ✓

**SECTION 4 — Parameters:**
Open Family Types:
- Width → Type, Length, Dimensions ✓
- Height → Type, Length, Dimensions ✓
- Frame Width → Type, Length, Dimensions ✓
- Frame Depth → Type, Length, Dimensions ✓
- Description → Type, Text, Identity Data ✓
- Door Leaf Material → Type, Material, Materials and Finishes ✓
- Frame Material → Type, Material, Materials and Finishes ✓
- Fire Rating → NOTE: placeholder only — shared parameter conversion pending Lesson 17

**SECTION 5 — Geometry and Visibility:**
(Geometry placeholders only at this stage — full check in Lesson 9)

**SECTION 6 — Project Testing:**
Load into DPC project → Create tab → Load into Project
Confirm: no errors on loading
Place one instance on a test wall → confirm: family places, wall void cuts correctly
Delete test instance
Family appears in Project Browser → Families → Doors → DPA-Door-Template ✓

**Save results:** note pass/fail for each section in the Comments field.`,
      },
      {
        title: 'PRACTICE — Build the DPA QA Checklist Document',
        content: `Create the formal DPA Family QA Checklist as a standalone document.

**Create a new file:**
C:\\DharrenPark\\FamilyLibrary\\_Standards\\QAChecklists\\DPA-FamilyQAChecklist-v1.0.txt

**Enter this content:**

DPA FAMILY QA CHECKLIST v1.0
Created: [Today's Date]
Purpose: Every family must pass this checklist before entering the DPA library.

---
SECTION 1: FILE AND METADATA
---
[ ] File size within target (simple <500KB, intermediate <2MB, complex <5MB)
[ ] Filename follows DPA convention: [Category]-[Description]-[Variant].rfa
[ ] Description field populated (what is this family, what is it for)
[ ] Comments field: "v[X.X] — [Date] — [Change notes]"
[ ] Purge Unused run: zero items removed on second run

---
SECTION 2: CATEGORY AND HOSTING
---
[ ] Category is correct (not Generic Model unless justified)
[ ] Hosting type is correct for element type
[ ] Cut with Voids When Loaded: checked for all hosted families that cut their host
[ ] Shared Family: checked ONLY if family needs independent scheduling (nested)

---
SECTION 3: REFERENCE PLANES
---
[ ] All reference planes named per DPA convention (Lesson 3 standard)
[ ] Boundary planes: Is Reference = named direction (Left/Right/Front/Back)
[ ] Centre planes: Is Reference = Center (Left/Right) or Center (Front/Back)
[ ] CONST- planes: Is Reference = Not a Reference
[ ] No unnamed reference planes anywhere in the family
[ ] Origin at correct insertion point

---
SECTION 4: PARAMETERS
---
[ ] All parameters named per DPA convention (full words, Title Case)
[ ] No abbreviations (Width not W, Fire Rating not FR)
[ ] Instance vs. Type correctly assigned
[ ] No unused parameters (drives nothing)
[ ] Fire Rating is a Shared Parameter (not regular)
[ ] FM Asset parameters are Shared Parameters
[ ] All material parameters have default values set

---
SECTION 5: GEOMETRY AND VISIBILITY
---
[ ] All geometry locked to reference planes (no free-floating elements)
[ ] Coarse visibility: symbolic lines / simplified only
[ ] Medium visibility: main form
[ ] Fine visibility: full detail
[ ] All geometry assigned to subcategory (no unassigned elements)
[ ] 3D geometry not visible in plan views (where Symbolic Lines used for plan)
[ ] Void forms cut correctly in test project

---
SECTION 6: PROJECT TESTING
---
[ ] Loads without errors or warnings in DPC project
[ ] All types place correctly in correct host context
[ ] Appears in correct schedule category
[ ] Tag reads Mark value correctly
[ ] IFC exports as correct entity (IfcDoor, IfcFurniture, IfcSpace, etc.)
[ ] No existing warnings added to project on load

---
SECTION 7: PERFORMANCE
---
[ ] 20 instances: no noticeable performance degradation
[ ] No embedded textures (file size stable after loading 1 instance)
[ ] File size after Purge matches target range

---
RESULT: [ ] PASS — family is ready for library publication
         [ ] FAIL — remediation required (list issues below)

REMEDIATION NOTES:
[Enter any failed items and planned fixes here]

REVIEWED BY: [Name] on [Date]

**Standards document — add note in SECTION 7:**
A reference to the standalone checklist file:
"See DPA-FamilyQAChecklist-v1.0.txt for the full checklist.
All families must pass before library publication."

**Confirmation Checklist for Lesson 8:**
- DPA-FamilyQAChecklist-v1.0.txt created at the QAChecklists folder
- QA checklist run on DPA-Door-Template-WIP.rfa (document pass/fail)
- Standards document updated with reference to checklist
- DPA-Door-Template-WIP.rfa saved
- DPA-FamilyStandards-v1.0.txt saved

You have completed the Beginner tier of the Revit Family Setup course. Your standards document now contains:
- Section 1: Template Selection Map
- Section 2: Reference Plane Standards
- Section 3: Parameter Naming Conventions
- Section 4: Subcategory Standards
- Section 5: Visibility Control Standards
- Section 6: Material Parameter Standards

And you have a standalone DPA Family QA Checklist.

Move to Lesson 9 — Building the Door Family Template (Intermediate tier begins).`,
      },
    ],
    takeaways: [
      'The QA checklist has 7 sections: File/Metadata, Category/Hosting, Reference Planes, Parameters, Geometry/Visibility, Project Testing, Performance',
      '"The family works" means it has passed all 7 checklist sections — not just "it opened in the Family Editor"',
      'Section 6 (Project Testing) is the most important: load into the DPC project, place, tag, schedule, IFC export — catch real-world failures before they reach the library',
      'Fire Rating and FM Asset parameters failing Section 4 (not shared) is the most common QA failure — it breaks tags, filters, and IFC exports silently',
      'The QA checklist is run by the family creator AND reviewed by the BIM Manager before any family enters the library — two sets of eyes catch more than one',
    ],
    resource: {
      title: 'Autodesk Revit — Family QA Best Practices',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-family-qa-best-practices',
    },
    prev: 'rfs-7',
    next: 'rfs-9',
  },
];
