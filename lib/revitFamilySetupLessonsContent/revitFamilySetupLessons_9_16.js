// ============================================================
// REVIT FAMILY SETUP — LESSONS rfs-9 through rfs-16 (INTERMEDIATE)
// File: lib/revitFamilySetupLessonsContent/lessons-9-16.js
// FORMAT: 3-Layer — Explain → Guide → Practice
// END GOAL: Complete set of DPA base family templates
// ============================================================

export const lessons_9_16 = [

  // ─────────────────────────────────────────────────────────
  // rfs-9: Building the Door Family Template
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-9',
    num: 9,
    title: 'Building the Door Family Template',
    topic: 'Templates',
    cat: 'intermediate',
    readTime: '18 min',
    free: false,
    desc: 'Complete the DPA-Door-Template.rft — a fully parametric wall-hosted door skeleton with DPA reference planes, parameters, subcategories, visibility settings, and a test type catalogue ready for any door family build.',
    intro: `In Lessons 3 through 8 you built the standards. In this lesson you apply all of them to produce the first complete DPA base template — DPA-Door-Template.rft. Every door family your office builds from this point starts here: reference planes already named, parameters already correct, subcategories already assigned, visibility already configured.

The door template is the most important single family template in the architectural library. Doors are placed hundreds of times on every project. Getting the template right once means hundreds of correctly built families follow automatically.`,
    sections: [
      {
        title: 'EXPLAIN — What the Door Template Must Contain',
        content: `The DPA-Door-Template.rft is not a finished door family. It is a skeleton — a starting framework that any door family creator uses as their Day 1 starting point. It contains:

**The correct starting state:**
- Category: Doors
- Hosting: Wall-based
- "Cut with Voids When Loaded" checked
- Metric units

**Reference plane skeleton (from Lesson 3):**
- Wall Face (pre-built by template — rename if needed)
- Centre L/R and Centre F/B (pre-built — verify names and Is Reference)
- Left and Right width extent planes (pre-built)
- Frame Inner L and Frame Inner R (new — driven by Frame Width parameter)
- CONST-Hinge Centre (new — Not a Reference)
- Top of Opening plane (in Front elevation view)

**Parameter set (from Lesson 4):**
- Width (Type, Length, Dimensions) — pre-built
- Height (Type, Length, Dimensions) — pre-built
- Frame Width (Type, Length, Dimensions) — add
- Frame Depth (Type, Length, Dimensions) — add
- Description (Type, Text, Identity Data) — add
- Fire Rating (placeholder — full shared parameter in Lesson 17)
- Door Leaf Material (Type, Material, Materials and Finishes) — add
- Frame Material (Type, Material, Materials and Finishes) — add
- Show Vision Panel (Instance, Yes/No, Graphics) — add (controls glazing visibility)

**Subcategories (from Lesson 5):**
- Panel (built-in) — for door leaf
- Frame/Mullion (built-in) — for door frame
- Glass (built-in) — for vision panel glazing
- DPA-Swing (new) — for plan swing arc
- DPA-Hardware (new) — for handle/hardware nested families

**Placeholder geometry:**
The template includes minimal placeholder geometry — a simple door leaf extrusion and frame outline — sufficient to test the parametric skeleton. Real door families replace this with full geometry.

**One test type:**
"DPA-Door: 900x2100mm" — a single test type that validates all parameters work correctly. Real door families add their own type series.

**A void extrusion:**
The opening void that cuts through the host wall. Sized generously (600mm depth) to cut any wall thickness.`,
      },
      {
        title: 'GUIDE — Building the Complete Door Template',
        content: `Open DPA-Door-Template-WIP.rfa from Lesson 3. We will complete it and save it as the final template.

**PART A — VERIFY AND COMPLETE REFERENCE PLANES**

Step 1 — In the Ref. Level plan view, verify all reference planes from Lesson 3 are present and named. Add any missing ones.

Step 2 — In the Front elevation view:
Verify: a reference plane labelled "Top" exists at the Height dimension.
The pre-built template usually has this — if not, add it:
Create tab → Reference Plane → draw horizontal line at 2100mm from Ref. Level
Name: Top → Is Reference: Top

Step 3 — Add the Frame Inner reference planes:
In the Ref. Level plan view:
Create → Reference Plane → draw inside the Left width extent
Name: Frame Inner L → Is Reference: Strong Reference
Label the dimension between Left extent and Frame Inner L: Frame Width
(This locks Frame Inner L to move when Frame Width changes)

Repeat on the right: Frame Inner R → Is Reference: Strong Reference
Label the dimension between Frame Inner R and Right extent: Frame Width
Add EQ constraint: select Frame Inner L, Centre L/R, Frame Inner R → EQ
(This keeps the opening centred within the frame)

**PART B — COMPLETE THE PARAMETER SET**

Step 4 — Open Family Types (Create → Family Types):
Verify Width and Height exist. Add:
- Frame Width: Type, Length, Dimensions
- Frame Depth: Type, Length, Dimensions
- Description: Type, Text, Identity Data
- Door Leaf Material: Type, Material, Materials and Finishes
- Frame Material: Type, Material, Materials and Finishes
- Show Vision Panel: Instance, Yes/No, Graphics (default: No)

Step 5 — Add formulas:
Clear Width = Width - (Frame Width * 2)
This gives architects the clear opening dimension automatically.

**PART C — BUILD PLACEHOLDER GEOMETRY**

Step 6 — Door leaf (in Front elevation view):
Create → Extrusion
Draw a rectangle from Frame Inner L to Frame Inner R, Ref. Level to Top
Extrusion start: 0mm (at wall face)
Extrusion end: 40mm (door leaf thickness)
Lock all four edges to reference planes
Subcategory: Panel
Material formula: Door Leaf Material

Step 7 — Door frame (in Ref. Level plan view):
Create → Extrusion
Draw the frame profile — a thin rectangle around the opening perimeter
Lock to Wall Face, Frame Width reference planes
Subcategory: Frame/Mullion
Material formula: Frame Material

Step 8 — Wall void (in Ref. Level plan view):
Create → Void Forms → Void Extrusion
Draw rectangle matching opening width and 600mm depth (cuts through any wall)
Lock to Left, Right, and Width extent planes
Extrusion start: -300mm, end: +300mm (centred on wall)
This void cuts the host wall when the family is placed.

Step 9 — Plan swing arc (in Ref. Level plan view):
Annotate → Symbolic Line → Arc tool
Draw arc from hinge point through the door opening
Subcategory: DPA-Swing
Visibility: Coarse=on, Medium=on, Fine=off

Step 10 — Vision panel placeholder (in Front elevation):
Create → Extrusion
Small rectangle centred in door leaf upper portion
Lock to formula-driven reference planes
Subcategory: Glass
Visible = Show Vision Panel (connect to the Yes/No parameter)

**PART D — CONFIGURE VISIBILITY**

Step 11 — Set visibility for each element:
Door leaf: Coarse=off, Medium=on, Fine=on
Door frame: Coarse=off, Medium=on, Fine=on
Void: always active (voids are not visible, only their cut effect)
Swing arc: Coarse=on, Medium=on, Fine=off
Vision panel: Visible = Show Vision Panel formula

Step 12 — Add Symbolic Lines for Coarse plan:
Create → Symbolic Line → draw rectangle matching the door frame footprint
This is the Coarse plan representation.
Visibility: Coarse=on, Medium=off, Fine=off

**PART E — CREATE TEST TYPE AND SAVE**

Step 13 — In Family Types, create type:
Name: DPA-Door: 900x2100mm
Width: 900, Height: 2100, Frame Width: 75, Frame Depth: 100
Description: "DPA Door Template — test type. Replace with project types."

Step 14 — Run QA Checklist (Lesson 8) on the completed template.

Step 15 — Purge Unused (Manage → Purge Unused). Run twice.

Step 16 — Save As Template:
File → Save As → Family Template
Navigate to: C:\\DharrenPark\\FamilyLibrary\\05_Templates\\Current\\
Filename: DPA-Door-Template.rft
File type: Family Template Files (*.rft)
Click Save.`,
      },
      {
        title: 'PRACTICE — Test the Door Template in the DPC Project',
        content: `Test DPA-Door-Template.rft against the DPA QA Checklist before signing off.

**LOAD AND TEST:**

Step 1 — Open DPC project:
C:\\DharrenPark\\Project\\BIM\\WIP\\DPA\\ARCH\\DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-001.rvt

Step 2 — Load the template as a family:
Insert → Load Family → navigate to DPA-Door-Template.rft → Open
(Revit loads .rft files as families for testing — they behave identically to .rfa files)

Step 3 — Place on a test wall:
In L00 Plan, draw a 300mm wall (for testing)
Architecture → Door → select DPA-Door: 900x2100mm → click on the wall
The door should: place correctly, cut the wall void, show the swing arc in plan

Step 4 — Test visibility:
Set the view to Coarse → verify: only symbolic lines visible, no 3D leaf or frame
Set to Medium → verify: door leaf, frame, and swing arc visible
Set to Fine → verify: all geometry visible, swing arc hidden

Step 5 — Test Show Vision Panel:
Select the placed door → Properties → Show Vision Panel → check to Yes
The vision panel glazing should appear in the door leaf
Uncheck → glazing disappears

Step 6 — Test the schedule:
View → Schedules → existing Door Schedule (from Project Setup course)
The DPA-Door: 900x2100mm type should appear with Width=900, Height=2100
Fire Rating column should be empty (pending Lesson 17)

Step 7 — Tag the door:
Annotate → Tag by Category → click the door
The door tag should appear showing the Mark value (default "1")

Step 8 — Delete test wall and door.

**QA CHECKLIST SIGN-OFF:**

Section 1 — File: size under 500KB ✓
Section 2 — Category: Doors, wall-hosted, Cut with Voids checked ✓
Section 3 — Reference planes: all named, Is Reference correct ✓
Section 4 — Parameters: DPA names, correct types, material parameters with defaults ✓
Section 5 — Geometry: all locked to planes, visibility per DPA matrix, subcategories assigned ✓
Section 6 — Project test: loads, places, cuts, tags, appears in schedule ✓
Section 7 — Performance: no degradation with 5 instances (template level) ✓

Record in the file Comments:
"v1.0 — [Today's Date] — Initial release. DPA door template with full skeleton. [Your Initials]"

Move to Lesson 10 — Building the Window Family Template.`,
      },
    ],
    takeaways: [
      'The door template is a skeleton — placeholder geometry, correct reference planes, parameters, and subcategories — not a finished door family',
      'The void extrusion (600mm deep, centred on wall) cuts any wall thickness — generous sizing is intentional',
      'Clear Width = Width - (Frame Width * 2) is a formula, not a manual entry — architects get the clear opening dimension automatically from the two primary parameters',
      'Save as .rft (Family Template) not .rfa — templates open as blank canvases in the Family Editor, ready for new family geometry to be built on top',
      'Test the template in the DPC project before signing off — the QA checklist is not complete until Section 6 (Project Testing) passes',
    ],
    resource: {
      title: 'Autodesk Revit — Door Family Template',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-door-family-template',
    },
    prev: 'rfs-8',
    next: 'rfs-10',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-10: Building the Window Family Template
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-10',
    num: 10,
    title: 'Building the Window Family Template',
    topic: 'Templates',
    cat: 'intermediate',
    readTime: '16 min',
    free: false,
    desc: 'Build DPA-Window-Template.rft with thermal performance parameters, sill height control, and the correct three-level representation for windows at Coarse, Medium, and Fine detail levels.',
    intro: `Windows share many characteristics with doors — wall-hosted, void-cut, flip controls — but they have their own unique requirements. Windows carry thermal performance data (U-Value, SHGC) that feeds energy analysis. They have a Sill Height parameter that controls the vertical position within the wall. Their plan representation at Coarse and Medium must clearly indicate the glazing line while the fine representation shows the full frame profile.

This lesson builds DPA-Window-Template.rft — the base starting point for every window family in the DPA library.`,
    sections: [
      {
        title: 'EXPLAIN — Window Template Specifics',
        content: `Windows differ from doors in four key ways that affect the template setup:

**1. Sill Height:**
Windows have a vertical position within the wall defined by the Sill Height parameter — how high the window bottom is from the floor level. The Metric Window.rft template pre-builds this: a reference plane at the Sill Height position in the Front elevation view, with the window frame geometry locked to it. When Sill Height changes, the window rises or drops within the wall while the wall void adjusts automatically.

The DPA standard for Sill Height:
- For office buildings: Sill Height = 900mm (standard window sill in offices)
- For residential: Sill Height = 1000mm (standard domestic sill height)
- For shop fronts: Sill Height = 0mm (floor-to-ceiling glazing)
Set the default to 900mm in the template. Individual window types override it.

**2. Thermal Performance Parameters:**
Windows in ISO 19650-aligned projects carry thermal data. The template includes:
- U-Value: thermal transmittance (W/m²K) — drives energy compliance checking
- SHGC: Solar Heat Gain Coefficient (0-1) — for solar analysis
- Visible Light Transmittance (0-1) — for daylighting analysis

These are Number type parameters, not Text. They should be shared parameters so they can be scheduled and mapped to IFC Pset_WindowCommon.

**3. Plan Representation:**
In plan, a window is typically shown as:
- Coarse: three lines — outer wall line, glazing line, inner wall line
- Medium: frame outline + glazing panel (flat solid)
- Fine: full frame profile with any sill projection

**4. The Sill Projection:**
Many windows have an external sill that projects beyond the wall face. The template includes a sill projection solid (assigned to DPA-Sill subcategory) driven by a "Sill Projection" parameter. At Coarse: hidden. At Medium: visible. At Fine: visible with full profile.`,
      },
      {
        title: 'GUIDE — Building the Window Template',
        content: `**Step 1 — Open Metric Window.rft:**
File → New → Family → Metric Window.rft → Open

**Step 2 — Verify and rename reference planes:**
Front elevation view — check existing planes:
- Sill Height plane (pre-built) — rename if needed: "Sill" → Is Reference: Bottom
- Top of Window plane — rename: "Top" → Is Reference: Top
- Wall Face planes → Is Reference: Front / Back (per convention)

Ref. Level plan view:
- Centre L/R → Is Reference: Center (Left/Right)
- Width extent planes: Left → Is Reference: Left, Right → Is Reference: Right
- Frame Inner L → add if not present, lock to Frame Width formula

**Step 3 — Add Window-specific parameters:**
Family Types → New:
- Frame Width: Type, Length, Dimensions
- Sill Height: Type, Length, Dimensions (default: 900mm)
- Sill Projection: Type, Length, Dimensions (default: 50mm)
- U-Value: Type, Number, Energy Analysis (note: shared parameter in Lesson 17)
- SHGC: Type, Number, Energy Analysis
- Visible Light Transmittance: Type, Number, Energy Analysis
- Frame Material: Type, Material, Materials and Finishes
- Glass Material: Type, Material, Materials and Finishes (default: ARCH-Glazing-Double-LoE)
- Acoustic Rating: Type, Text, Identity Data (shared parameter in Lesson 17)
- Description: Type, Text, Identity Data

**Step 4 — Build placeholder geometry:**

Frame solid (Front elevation, swept extrusion or simple extrusion):
Lock to Sill, Top, Frame Inner L, Frame Inner R reference planes
Subcategory: Frame/Mullion
Material: Frame Material parameter

Glazing panel (flat solid, Front elevation):
Centred between Frame Inner planes, between Sill and Top
Thickness: 28mm (typical double glazed unit)
Subcategory: Glass
Material: Glass Material parameter

Sill projection (Ref. Level plan):
External projection beyond wall face, driven by Sill Projection parameter
Subcategory: DPA-Sill
Visibility: Coarse=off, Medium=on, Fine=on

Wall void (cuts host wall):
Full width between Left and Right, full height from Sill to Top
Depth: 600mm (cuts any wall thickness)

**Step 5 — Plan symbolic lines (Coarse and Medium):**
Ref. Level plan view → Symbolic Lines:
Three parallel lines representing: outer wall face, glazing line, inner wall face
Subcategory: Frame/Mullion
Visibility: Coarse=on, Medium=on, Fine=off

**Step 6 — Add subcategories DPA-Sill and DPA-Head:**
Manage → Object Styles → Model Objects → Windows → New:
DPA-Sill: Weight 3, Black, Solid
DPA-Head: Weight 2, Black, Solid

**Step 7 — Create test type:**
DPA-Window: 1200x1200mm
Width: 1200, Height: 1200, Sill Height: 900, Frame Width: 75
U-Value: 1.4, SHGC: 0.35, Visible Light Transmittance: 0.62
Description: "DPA Window Template — test type"

**Step 8 — Purge, QA check, save as template:**
File → Save As → Family Template
Filename: DPA-Window-Template.rft
Save to: C:\\DharrenPark\\FamilyLibrary\\05_Templates\\Current\\`,
      },
      {
        title: 'PRACTICE — Verify Window Template Against DPA Standards',
        content: `Load DPA-Window-Template.rft into the DPC project and test.

**REFERENCE PLANE CHECK:**
In Front elevation view:
- Sill plane at 900mm from Ref. Level — Is Reference: Bottom ✓
- Top plane at Sill Height + Height from Ref. Level — Is Reference: Top ✓
- Wall face planes correctly referenced ✓

**PARAMETER CHECK:**
Family Types dialog — verify these parameters exist with correct settings:
| Parameter | Type | Group |
|---|---|---|
| Width | Length | Dimensions |
| Height | Length | Dimensions |
| Sill Height | Length | Dimensions |
| Frame Width | Length | Dimensions |
| Sill Projection | Length | Dimensions |
| U-Value | Number | Energy Analysis |
| SHGC | Number | Energy Analysis |
| Visible Light Transmittance | Number | Energy Analysis |
| Frame Material | Material | Materials and Finishes |
| Glass Material | Material | Materials and Finishes |
| Acoustic Rating | Text | Identity Data |
| Description | Text | Identity Data |

**PROJECT TEST:**
In DPC project:
Place DPA-Window: 1200x1200mm on a test wall
Verify: void cuts wall, sill at 900mm, frame and glazing visible at Medium
Change Sill Height to 1500mm → window rises in wall → ✓
Set view to Coarse → three-line plan symbol shows, no 3D geometry ✓
Tag window → tag shows Mark value ✓
Check Window Schedule (if created in Project Setup) → window appears ✓

**THERMAL DATA NOTE:**
The U-Value and SHGC parameters are populated but not yet shared parameters (Lesson 17). Note in Comments:
"U-Value and SHGC to be converted to shared parameters in Lesson 17 for IFC Pset_WindowCommon mapping."

**Comments field entry:**
"v1.0 — [Date] — DPA window template. Sill Height, thermal params, subcategories. QA passed. [Initials]"

Move to Lesson 11 — Building the Furniture Family Template.`,
      },
    ],
    takeaways: [
      'Windows have a Sill Height parameter (default 900mm) that positions the window vertically within the wall — the void and frame both lock to this plane',
      'Thermal parameters (U-Value, SHGC, Visible Light Transmittance) are Number type in the template — they become shared parameters in Lesson 17 for IFC Pset_WindowCommon mapping',
      'Window plan representation at Coarse: three symbolic lines (outer wall, glazing, inner wall) — not the 3D frame cross-section',
      'DPA-Sill subcategory holds the external sill projection geometry — hidden at Coarse, visible at Medium and Fine',
      'The void (600mm deep) is the same generous sizing as the door template — it cuts any wall thickness without manual adjustment per family type',
    ],
    resource: {
      title: 'Autodesk Revit — Window Family Template',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-window-family-template',
    },
    prev: 'rfs-9',
    next: 'rfs-11',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-11: Building the Furniture Family Template
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-11',
    num: 11,
    title: 'Building the Furniture Family Template',
    topic: 'Templates',
    cat: 'intermediate',
    readTime: '15 min',
    free: false,
    desc: 'Build DPA-Furniture-Template.rft — a non-hosted template with full LOD visibility standard, DPA subcategories, the symbolic plan representation approach, and material parameters for primary, secondary, and upholstery finishes.',
    intro: `Furniture families are the highest-volume content in an architectural project. A hotel fit-out might have 50 different furniture types placed 2,000 times. An office project might have 20 types placed 800 times. Getting the furniture template right means every single placed instance performs well, displays correctly at every scale, and contributes the correct data to area and material schedules.

The two biggest furniture family problems in practice are: too much geometry at Coarse scale (performance killer) and inconsistent plan representation (drawing clarity problem). This lesson builds a template that solves both systematically.`,
    sections: [
      {
        title: 'EXPLAIN — Furniture Template Strategy',
        content: `Furniture families have one fundamental challenge: the family needs to look good in three completely different contexts simultaneously.

**In a 1:200 overview plan (Coarse):**
The furniture is a planning tool — it shows that a room is furnished and indicates the space allocation. A chair footprint at 1:200 is about 2mm × 2mm on paper. Cushion detail, leg geometry, and armrest profiles are physically invisible at this scale. They only add geometry that Revit still has to calculate. The Coarse representation should be a simple filled rectangle or outline — nothing more.

**In a 1:50 furniture layout plan (Medium):**
The furniture layout is the key deliverable. Each piece should be clearly recognisable — a chair looks like a chair, a table looks like a table — but without construction-level detail that would clutter a layout drawing.

**In a 1:20 enlarged plan or detail (Fine):**
Full detail is appropriate — leg positions, cushion divisions, armrest profile. At this scale the drawings are used by interior designers and contractors for specification purposes.

**The Two-Representation approach:**
The DPA standard for furniture uses two completely separate representations:
1. 2D Symbolic Lines in the Ref. Level view → for plan views (Coarse and Medium)
2. 3D solid geometry → for elevations and 3D views (not visible in plan)

The 3D geometry is set to "Visible in Plan/RCP Views = No." The Symbolic Lines are set to visible at Coarse and Medium in plan. This gives clean, conventional plan symbols at any plan scale and full 3D geometry in elevations and perspectives.

**Why not just use the 3D geometry sliced at the cut height?**
A sofa sliced at 1000mm cut height shows the top of the cushion edge, the arm tops, and a cross-section through any thin elements at that height — a confusing, irregular shape that does not read as a sofa. The Symbolic Lines approach replaces this with a clean, deliberate plan symbol every time.`,
      },
      {
        title: 'GUIDE — Building the Furniture Template',
        content: `**Step 1 — Open Metric Furniture.rft:**
File → New → Family → Metric Furniture.rft → Open

The template opens with four reference planes: Centre L/R, Centre F/B, and the Ref. Level. A simple origin cross. Very minimal — a clean canvas.

**Step 2 — Rename and verify reference planes:**
Centre L/R → Is Reference: Center (Left/Right)
Centre F/B → Is Reference: Center (Front/Back)

**Step 3 — Add outer boundary reference planes:**
In the Ref. Level plan view, add four boundary planes:
Left: offset from Centre L/R by Width/2 (Width parameter)
Right: offset from Centre L/R by Width/2 (other side)
Front: offset from Centre F/B by Depth/2
Back: offset from Centre F/B by Depth/2

Name each: Left, Right, Front, Back
Is Reference: Left, Right, Front, Back respectively

Label the dimensions:
Left to Right: Width parameter
Front to Back: Depth parameter

Add EQ constraints between Centre L/R and Left/Right (and Centre F/B and Front/Back) so the origin stays centred.

**Step 4 — Add height reference plane:**
In the Front or Left elevation view:
Add a reference plane at the furniture height from Ref. Level
Name: Top → Is Reference: Top
Label the dimension: Height parameter

**Step 5 — Add furniture parameters:**
Family Types → New:
- Width: Type, Length, Dimensions (default: 600mm)
- Depth: Type, Length, Dimensions (default: 600mm)
- Height: Type, Length, Dimensions (default: 750mm)
- Seat Height: Type, Length, Dimensions (default: 450mm — for seating families)
- Primary Material: Type, Material, Materials and Finishes
- Secondary Material: Type, Material, Materials and Finishes
- Upholstery Material: Instance, Material, Materials and Finishes
- Description: Type, Text, Identity Data

**Step 6 — Create DPA subcategories:**
Manage → Object Styles → Furniture → New:
- DPA-Frame: Weight 3, Black, Solid
- DPA-Upholstery: Weight 2, Black, Solid
- DPA-Leg: Weight 2, Black, Solid
- DPA-Surface: Weight 3, Black, Solid

**Step 7 — Add placeholder 3D geometry:**
In the Ref. Level plan view → Create → Extrusion:
Draw a rectangle locked to Left, Right, Front, Back reference planes
Extrusion height: locked to Height reference plane
Subcategory: DPA-Frame, Material: Primary Material

Set: Properties → Visible → uncheck "Visible in Plan/RCP Views"
(The 3D solid does NOT appear in plan views — Symbolic Lines handle that)

**Step 8 — Add Symbolic Lines for plan:**
Annotate → Symbolic Line:
Draw a rectangle in the Ref. Level plan view matching the furniture footprint
Lock to Left, Right, Front, Back planes
Subcategory: DPA-Frame
Visibility: Coarse=on, Medium=on, Fine=off
(At Fine, the 3D geometry cross-section may be needed depending on family design)

**Step 9 — Create test type:**
Name: DPA-Furniture: 600x600x750mm
Width: 600, Depth: 600, Height: 750

**Step 10 — Purge, QA check, save as template:**
File → Save As → Family Template
Filename: DPA-Furniture-Template.rft
Save to: C:\\DharrenPark\\FamilyLibrary\\05_Templates\\Current\\`,
      },
      {
        title: 'PRACTICE — Test and Document the Furniture Template',
        content: `Test the furniture template in the DPC project.

**CRITICAL TEST — The Two-Representation Check:**

In DPC project, place DPA-Furniture: 600x600x750mm in L00 plan.

Test 1 — Coarse plan view:
Set view detail level to Coarse.
Result: Symbolic Line rectangle shows — no 3D geometry visible ✓

Test 2 — Medium plan view:
Set view detail level to Medium.
Result: Symbolic Line rectangle shows — no 3D geometry visible ✓

Test 3 — Elevation view:
Open North or East elevation view.
Result: 3D solid extrusion visible in correct proportion ✓

Test 4 — 3D view:
Open [W] 3D Full Building view.
Result: 3D solid visible correctly ✓

Test 5 — Resize:
Select the furniture instance → change Width to 900mm.
Result: both the Symbolic Lines (plan) and 3D solid (elevation/3D) update to 900mm wide ✓

**SUBCATEGORY CHECK:**
VG dialog → Furniture → expand → verify DPA-Frame, DPA-Upholstery, DPA-Leg, DPA-Surface appear ✓
Turn off DPA-Frame → Symbolic Lines and 3D frame disappear ✓
Turn it back on.

**MATERIAL CHECK:**
Select placed furniture → Properties → Upholstery Material → change to a fabric material
The furniture updates to the new material in 3D view ✓
(Note: Upholstery Material is Instance — only this one chair changes, not all chairs of this type)

**SCHEDULE CHECK:**
If a Multi-Category schedule exists from Project Setup: furniture appears in the schedule ✓

**Template QA sign-off:**
Comments: "v1.0 — [Date] — DPA Furniture template. Two-representation approach (3D + Symbolic Lines). DPA subcategories. Instance upholstery material. QA passed. [Initials]"

Move to Lesson 12 — Building the Equipment Family Template.`,
      },
    ],
    takeaways: [
      'The Two-Representation approach: 3D solid (elevation/3D views, Visible in Plan = No) + 2D Symbolic Lines (plan views, Coarse and Medium) — the cleanest furniture family solution',
      'Upholstery Material is an Instance parameter — one chair type can have blue fabric in guest rooms and grey fabric in corridors without creating separate types',
      'The four boundary reference planes (Left, Right, Front, Back) with EQ constraints keep the furniture centred on its origin — critical for correct alignment to walls and other furniture',
      'Seat Height is a standard DPA parameter for all seating families — it drives the height of the seat surface and is used in accessibility checking schedules',
      'Test the Two-Representation in both plan and elevation before saving the template — if the 3D solid shows in plan, the "Visible in Plan/RCP Views" setting was not unchecked',
    ],
    resource: {
      title: 'Autodesk Revit — Furniture Family Best Practices',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-furniture-family-best-practices',
    },
    prev: 'rfs-10',
    next: 'rfs-12',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-12: Building the Equipment Family Template
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-12',
    num: 12,
    title: 'Building the Equipment Family Template',
    topic: 'Templates',
    cat: 'intermediate',
    readTime: '16 min',
    free: false,
    desc: 'Build DPA-Equipment-Template.rft — a non-hosted MEP equipment template with duct, pipe, and electrical connectors, COBie asset parameters, and service zone clearance geometry for clash detection.',
    intro: `MEP equipment families carry more data than any other family type in a Revit model. A single air handling unit family might hold airflow data, cooling capacity, electrical load, noise levels, maintenance frequency, warranty period, and asset ID — all used by different disciplines and downstream systems.

The DPA Equipment Template is not just a geometry skeleton. It is a data skeleton — pre-configured with the connectors, parameters, and COBie fields that every equipment family needs from day one. This lesson builds that template and establishes the standard that every piece of plant, equipment, and appliance in the DPA library follows.`,
    sections: [
      {
        title: 'EXPLAIN — Equipment Template Requirements',
        content: `MEP equipment families have five layers of requirements beyond what architectural families need:

**Layer 1 — Connectors:**
Every connection point on the equipment needs a Revit connector — duct, pipe, or electrical. Connectors enable Revit's routing tools to automatically connect ductwork and pipework to the equipment. They also carry system classification data that drives flow analysis.

**Layer 2 — Service Zone Geometry:**
Equipment requires maintenance access — space around it for filter changes, panel access, inspection. This access zone is not part of the equipment itself, but it needs to be represented in the model for clash detection and space planning. The template includes a "service zone" solid that shows the access footprint.

**Layer 3 — COBie Asset Parameters:**
Equipment families carry the FM data that COBie requires:
- Asset ID (unique identifier in the FM system)
- Maintenance Frequency (annual, quarterly, monthly)
- Warranty Period (manufacturer's warranty duration)
- Installation Date (populated by the contractor during construction)
- Responsible Party (maintenance contractor)

These must be shared parameters from the DPA shared parameter file.

**Layer 4 — Engineering Performance Data:**
- Airflow (for mechanical equipment)
- Cooling Capacity and Heating Capacity (kW)
- Connected Load (kVA)
- Noise Level (dB)
- IP Rating (ingress protection for wet areas)

**Layer 5 — LOD Representation:**
Equipment has larger scale implications than furniture. At Coarse (1:100 overview), equipment should show a clear plan footprint with service zone indicator. At Fine, full geometry with connection ports, access panels, and equipment labels.`,
      },
      {
        title: 'GUIDE — Building the Equipment Template',
        content: `**Step 1 — Open Metric Mechanical Equipment.rft:**
File → New → Family → Metric Mechanical Equipment.rft → Open

**Step 2 — Set up reference planes:**
Add boundary reference planes: Left, Right, Front, Back, Top
Label dimensions: Width, Depth, Height parameters
EQ constraints to keep origin centred

Add connector positioning planes:
- Connector-Supply Air (for supply air duct connection)
- Connector-Return Air (for return air duct connection)
- Connector-Power (for electrical connection)
These are "Not a Reference" — internal connector positioning only.

**Step 3 — Add equipment parameters:**
Family Types → New:
DIMENSIONS:
- Width: Type, Length, Dimensions
- Depth: Type, Length, Dimensions
- Height: Type, Length, Dimensions
- Service Clearance Front: Type, Length, Dimensions (default: 1000mm)
- Service Clearance Left: Type, Length, Dimensions (default: 500mm)

ENGINEERING:
- Airflow: Type, Number, Mechanical (in L/s — note units)
- Cooling Capacity: Type, Number, Mechanical (in kW)
- Heating Capacity: Type, Number, Mechanical (in kW)
- Connected Load: Type, Number, Electrical (in kVA)
- Noise Level: Type, Number, Other (in dB)

IDENTITY:
- Description: Type, Text, Identity Data
- Manufacturer: Type, Text, Identity Data
- Product Model: Type, Text, Identity Data

COBie (SHARED — placeholder until Lesson 17):
- Asset ID: Instance, Text, Identity Data
- Maintenance Frequency: Type, Text, Identity Data
- Warranty Period: Type, Text, Identity Data

VISIBILITY:
- Show Service Zone: Instance, Yes/No, Graphics (default: Yes)

**Step 4 — Build geometry:**

Equipment body (main solid):
Extrusion locked to Left, Right, Front, Back, Top planes
Subcategory: DPA-Body
Material: Body Material parameter
Visibility: Coarse=off, Medium=on, Fine=on

Service zone (separate solid):
Extend beyond equipment by Service Clearance Front and Service Clearance Left
Make it a translucent solid or symbolic lines
Subcategory: DPA-ServiceZone (create this subcategory)
Visible = Show Service Zone parameter
Visibility: Coarse=on, Medium=on, Fine=on
Color: Amber/Orange (visually distinct from equipment body)

Coarse symbolic footprint:
Symbolic Lines matching equipment footprint
Visibility: Coarse=on, Medium=off, Fine=off

**Step 5 — Add MEP connectors:**
Create tab → Connectors:

Duct Connector 1 (supply air):
Place on the supply air face of the equipment body
Shape: Round, Diameter driven by supply duct size parameter
System Classification: Supply Air
Flow Direction: Out (air flows out of this connection)

Duct Connector 2 (return air):
Place on the return air face
System Classification: Return Air
Flow Direction: In

Electrical Connector:
Place on the electrical entry point
Voltage: 400V (three phase — standard for large equipment)
Number of Poles: 3
Load Classification: HVAC
Apparent Load: driven by Connected Load parameter

**Step 6 — Create test type:**
DPA-FCU: 600x400x250mm
Width: 600, Depth: 400, Height: 250
Airflow: 200 (L/s), Cooling Capacity: 3.5 (kW), Connected Load: 0.5 (kVA)

**Step 7 — Purge, QA, save as template:**
Filename: DPA-Equipment-Template.rft`,
      },
      {
        title: 'PRACTICE — Test the Equipment Template',
        content: `Test DPA-Equipment-Template.rft in the DPC project.

**CONNECTOR TEST:**
Load template into DPC project.
Place DPA-FCU: 600x400x250mm in L01 plan.

Test 1 — Duct connection:
Draw a duct toward the supply air connector using:
Systems tab → Duct → draw from the equipment connector
The duct should snap to and connect at the supply air connector position ✓

Test 2 — Electrical connector:
Draw an electrical circuit:
Systems tab → Electrical → Power → create circuit from the equipment
The equipment should appear as a load in the electrical panel ✓

Test 3 — Service zone:
Select placed equipment → Properties → Show Service Zone = No
Service zone solid/lines disappear ✓
Set back to Yes → reappears ✓

Test 4 — Coarse plan view:
Set to Coarse → only symbolic footprint visible, no 3D body ✓
Service zone still visible at Coarse (planning needs to see access zones) ✓

Test 5 — Schedule:
Mechanical Equipment schedule (if exists) → equipment appears with Airflow and Cooling Capacity values ✓
Asset ID field is empty (to be populated by contractor in construction phase) ✓

**DPA-ServiceZone subcategory note:**
In the VG dialog → Mechanical Equipment → expand → DPA-ServiceZone should appear.
This allows project teams to turn off service zones in coordination plans where they are not needed.

**Comments field:**
"v1.0 — [Date] — DPA Equipment template. Duct + electrical connectors. COBie params (placeholder for Lesson 17 shared params). Service zone geometry. QA passed. [Initials]"

Move to Lesson 13 — Building the Annotation Tag Set.`,
      },
    ],
    takeaways: [
      'MEP equipment families have five requirement layers: connectors, service zone geometry, COBie asset parameters, engineering performance data, and LOD representation',
      'The service zone geometry (DPA-ServiceZone subcategory, Show Service Zone Yes/No parameter) shows maintenance access clearance for clash detection — visible at all detail levels',
      'Duct connectors must have the correct System Classification (Supply Air, Return Air) and Flow Direction (In/Out) — wrong classification connects equipment to the wrong system during routing',
      'COBie Asset ID is an Instance parameter — each placed piece of equipment gets its own unique FM identifier during construction when the contractor populates it',
      'Service Clearance Front and Side as Type parameters allow different equipment types to have different access requirements — a chiller needs more clearance than a fan coil unit',
    ],
    resource: {
      title: 'Autodesk Revit — MEP Equipment Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-mep-equipment-families',
    },
    prev: 'rfs-11',
    next: 'rfs-13',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-13: Building the Annotation Tag Set
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-13',
    num: 13,
    title: 'Building the Annotation Tag Set',
    topic: 'Annotation',
    cat: 'intermediate',
    readTime: '15 min',
    free: false,
    desc: 'Build the complete DPA annotation tag set — door, window, room, equipment, and structural tags — with the correct label structure, font, size, and bubble style that matches the DPC drawing standard from the Project Setup course.',
    intro: `Tags are the bridge between family data and drawing annotation. Every parameter you carefully named in Lessons 4 and 9-12, every shared parameter you configured, appears in drawings through tags. A door tag reads the Mark number. A room tag reads the room name and number. An equipment tag reads the asset ID.

This lesson builds all five DPA tags using the annotation standard established in Project Setup Lesson 12 — DPC-Text-Body-2mm font, correct bubble sizes, and label structures that read the DPA standard parameter names.`,
    sections: [
      {
        title: 'EXPLAIN — Tag Architecture',
        content: `A tag family has four components:

**1. The bubble or shape:**
The visual container for the tag text. For DPC project:
- Door tags: circle, 8mm diameter
- Window tags: diamond shape, 8mm across
- Room tags: no bubble — just text (name on one line, number on another, area below)
- Equipment tags: hexagon, 10mm across
- Structural tags: circle, 8mm diameter (same as door)

These shapes are drawn with Detail Lines in the tag family.

**2. The label:**
The text field that reads a parameter value from the tagged element. Created with the Label tool (not Text — Text is static, Label is dynamic). Labels read from the element's parameters — the tag must reference the same GUID as the element's parameter, which means Fire Rating and other shared parameters must be in both the tag and the model family.

**3. The leader attachment point:**
The family origin — the intersection of the two reference planes. This is where the leader line terminates. Position the origin at the logical attachment point: centre of the bubble for most tags, bottom-left corner for room tags.

**4. The font and size:**
All DPA tags use:
- Font: Arial (matches DPC project text standard from ps-12)
- Size: 2mm for mark numbers and main text (DPC-Text-Body-2mm)
- Bold: Yes for mark numbers in bubbles
- Width factor: 0.80 (matches DPC annotation standard)

**Why tags must match the project text standard:**
Tags are loaded into the project. If the tag uses a different font or size from the project's established text types, the drawings show inconsistent annotation. The DPA tag set uses the same Arial 2mm standard so tags visually integrate with all other annotation on the sheet.`,
      },
      {
        title: 'GUIDE — Building the Door Tag',
        content: `Build all five DPA tags. We walk through the Door Tag in full — the others follow the same process with different shapes and labels.

**DOOR TAG (DPA-Tag-Door.rfa):**

Step 1 — Open Metric Door Tag.rft:
File → New → Family → Annotations → Metric Door Tag.rft → Open

The 2D-only annotation environment opens. Two reference planes (the origin cross).

Step 2 — Draw the tag bubble:
Annotate tab → Detail Lines → Circle tool
Draw a circle centred on the origin, radius 4mm (diameter 8mm)
This is the door tag bubble.

Step 3 — Add the label:
Create tab → Label → click in the centre of the circle
The Edit Label dialog opens.
Left panel shows available parameters for the Door category.
Find "Mark" → add to right panel → OK.
A label appears in the circle showing the Mark parameter name.

Step 4 — Format the label:
Select the label → Properties:
Font: Arial
Text Size: 2mm
Bold: Yes
Horizontal Align: Center
Width Factor: 0.80
Background: Opaque

Step 5 — Add a second label for the type (optional — below the bubble):
Create tab → Label → click below the circle
Add "Type Name" parameter → format as Arial 1.5mm, not bold.
This shows the door type below the mark number.

Step 6 — Verify origin position:
The origin (reference plane intersection) should be at the bubble centre — the leader line attaches here.

Step 7 — Save:
File → Save As → Family
Navigate to: C:\\DharrenPark\\FamilyLibrary\\03_Annotation\\Tags\\
Filename: DPA-Tag-Door.rfa

**WINDOW TAG (DPA-Tag-Window.rfa):**
Open Metric Window Tag.rft
Draw a diamond: four Detail Lines forming a diamond shape, 8mm across, centred on origin
Add Label: Mark parameter, Arial 2mm Bold, centred
Save as: DPA-Tag-Window.rfa

**ROOM TAG (DPA-Tag-Room.rfa):**
Open Metric Room Tag.rft
No bubble — just labels:
Label 1: Number, Arial 2.5mm Bold (the room number — larger, prominent)
Label 2: Name, Arial 2mm, below Number (line break between them)
Label 3: Area, Arial 1.5mm, below Name (shows room area in m²)
Add "m²" suffix to the Area label in the Format dialog.
Save as: DPA-Tag-Room.rfa

**EQUIPMENT TAG (DPA-Tag-Equipment.rfa):**
Open Metric Generic Model Tag.rft (closest to equipment)
Draw hexagon: six Detail Lines forming a regular hexagon, 10mm across
Add Label: Mark, Arial 2mm Bold
Below hexagon (outside): add Label → Asset ID (shared parameter — must be in the shared parameter file to appear in the label list)
Save as: DPA-Tag-Equipment.rfa

**STRUCTURAL COLUMN TAG (DPA-Tag-StructColumn.rfa):**
Open Metric Structural Column Tag.rft from Structural subfolder
Draw circle, 8mm, centred on origin
Add Label: Type Name (shows the section designation)
Save as: DPA-Tag-StructColumn.rfa`,
      },
      {
        title: 'PRACTICE — Load and Test All Five DPA Tags',
        content: `Load all five DPA tags into the DPC project and test each one.

**LOAD ALL TAGS:**
Insert → Load Family → navigate to C:\\DharrenPark\\FamilyLibrary\\03_Annotation\\Tags\\
Select all five tag families → Open

**TEST EACH TAG:**

Door tag test:
In L00 plan, place a door (if test door exists from Lesson 9 testing)
Annotate → Tag by Category → click the door
DPA-Tag-Door should show the Mark value in the 8mm circle ✓
Below the circle: the door type name ✓
If "?" appears: the Mark parameter is empty — set Mark = D001 in the door Properties

Window tag test:
Place a test window → Tag by Category → click the window
DPA-Tag-Window: diamond with Mark number inside ✓

Room tag test:
Architecture → Room → place in a closed area
Add room to the placed room: Number = 001, Name = Reception
Tag by Category → Room tag
DPA-Tag-Room: "001" above, "Reception" below, area below that ✓

Equipment tag test:
Place equipment family → Tag by Category → click equipment
DPA-Tag-Equipment: hexagon with Mark, Asset ID below (empty — correct for this stage) ✓

Structural tag test:
Place a structural column → Tag by Category → select structural column tag
DPA-Tag-StructColumn: circle with type designation ✓

**FONT AND SIZE VERIFICATION:**
Each tag should show Arial 2mm text inside the bubble.
Compare visually with a dimension (DPC-Dim-Standard from ps-12) — text size should be consistent ✓

**TROUBLESHOOTING — "?" in tag:**
"?" means the tagged parameter is empty on the element OR the tag is reading a regular parameter instead of a shared parameter with the correct GUID.
Fix: check that the equipment tag's Asset ID label references the shared parameter from the DPA shared parameter file (configured fully in Lesson 17).

**STANDARDS DOCUMENT NOTE:**
Add to DPA-FamilyStandards-v1.0.txt under a new SECTION 8: Annotation Tag Set:
"Five DPA tags: DPA-Tag-Door (circle), DPA-Tag-Window (diamond), DPA-Tag-Room (text only), DPA-Tag-Equipment (hexagon), DPA-Tag-StructColumn (circle). All use Arial 2mm Bold. Stored in C:\\DharrenPark\\FamilyLibrary\\03_Annotation\\Tags\\"

Move to Lesson 14 — Building the Structural Family Template.`,
      },
    ],
    takeaways: [
      'Tag shapes by type: Door=circle (8mm), Window=diamond (8mm), Room=no bubble (text only), Equipment=hexagon (10mm), Structural Column=circle (8mm)',
      'All DPA tags use Arial 2mm Bold for mark numbers — matching the DPC-Text-Body-2mm standard from Project Setup Lesson 12',
      'Labels read from parameters — if a shared parameter (like Asset ID) does not appear in the Edit Label dialog, the shared parameter file is not linked to the tag family',
      'Room tags have three labels stacked: Number (2.5mm Bold) → Name (2mm) → Area (1.5mm with m² suffix) — each on a separate line with line breaks',
      'A "?" in a placed tag means either the parameter is empty on the element, or the GUID mismatch between the tag and the model family prevents the tag from reading the value',
    ],
    resource: {
      title: 'Autodesk Revit — Annotation Tag Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-annotation-tag-families',
    },
    prev: 'rfs-12',
    next: 'rfs-14',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-14: Building the Structural Family Template
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-14',
    num: 14,
    title: 'Building the Structural Family Template',
    topic: 'Templates',
    cat: 'intermediate',
    readTime: '14 min',
    free: false,
    desc: 'Build DPA-Structural-Column-Template.rft with the correct analytical model, structural section parameters, and the cross-section representation that structural engineers and architects both need from the same family.',
    intro: `Structural families serve two masters simultaneously: the architect who places them in the architectural model for spatial coordination, and the structural engineer who reads their analytical model data for load calculations. The family must visually represent the correct section profile for drawings, AND carry the correct analytical properties for engineering software.

This lesson builds the structural column template — the most commonly customised structural family in architectural practice — with both masters satisfied.`,
    sections: [
      {
        title: 'EXPLAIN — Structural Family Requirements',
        content: `Structural column families have three requirements beyond standard families:

**1. The Analytical Model:**
Every structural column family has an invisible analytical model — a single centreline that structural analysis software reads. This centreline must pass through the structural centroid of the cross-section. For a square concrete column centred on the origin: the centreline passes through the centre of the column at every level.

The analytical model is pre-built in the Metric Structural Column.rft template. Never modify the analytical reference planes — they are positioned correctly by the template based on structural engineering convention.

**2. Structural Section Parameters:**
Structural columns carry section dimension parameters that feed into structural calculations and specifications:
- Column Width and Column Depth (for rectangular sections)
- Diameter (for circular sections)
These are DPA standard parameter names. They must not be abbreviated (not "B" and "D" which are engineering notation — use "Column Width" and "Column Depth" for clarity in the architecture-led model).

**3. Dual Representation:**
The column must show correctly in:
- Architectural plans (shows filled cross-section at Coarse, cross-section with concrete hatch at Medium and Fine)
- Structural plans (same cross-section, but may show reinforcement or analytical node positions)
- 3D views (full column height between levels)

The concrete fill pattern and hatch applied through the material (STR-Concrete-InSitu-C32/40 from the DPC material library) handles the section hatch automatically when the material's cut pattern is correctly configured.`,
      },
      {
        title: 'GUIDE — Building the Structural Column Template',
        content: `**Step 1 — Open Metric Structural Column.rft:**
File → New → Family → Structural → Metric Structural Column.rft → Open

The template opens with more pre-built content than architectural templates:
- Reference planes defining the column width and depth
- An analytical model (centreline) pre-positioned at the section centroid
- Default Width and Depth parameters

**Step 2 — Rename parameters to DPA standard:**
Open Family Types:
Rename "b" or "Width" parameter → "Column Width" (if not already "Column Width")
Rename "d" or "Depth" parameter → "Column Depth"

Add parameters:
- Structural Material: Type, Material, Materials and Finishes (this drives the analytical model material)
- Description: Type, Text, Identity Data
- Specification Reference: Type, Text, Identity Data

**Step 3 — Verify reference planes:**
The template pre-builds:
- Centre L/R and Centre F/B (centreline of the column)
- Left, Right, Front, Back extent planes

Do NOT add additional planes near the analytical reference planes — they are pre-positioned correctly.

Rename boundary planes if needed:
Left, Right → Is Reference: Left, Right
Front, Back → Is Reference: Front, Back

**Step 4 — Build placeholder geometry:**
The template may have existing geometry — a simple rectangular extrusion.
If present: verify it is locked to Left, Right, Front, Back reference planes.
If not present: Create → Extrusion → draw rectangle locked to boundary planes.

Subcategory: DPA-Body (create if not present)
Material: Structural Material parameter
The concrete cut pattern from STR-Concrete-InSitu-C32/40 will show automatically in sections.

**Step 5 — Set visibility:**
Coarse: SHOW the column (structural columns must always be visible at Coarse — they are critical spatial elements even at small scales)
At Coarse, show a filled solid (no detail — just the plan footprint area)
Medium: show column with correct hatch
Fine: show full column with base plate and any cap plate geometry

**Step 6 — Add a circular variant:**
In Family Types, duplicate the rectangular type:
Name: DPA-Column-Circular-300dia
Add a Diameter parameter: Type, Length, Dimensions (default: 300mm)
Change the geometry from a rectangle to a circle (Delete and redraw the extrusion using the circle profile tool)

Note: rectangular and circular columns usually need separate families — the geometry profile is fundamentally different. Document this in the standards: build separate families from this one template.

**Step 7 — Create test types:**
DPA-Column-Rect: 400x400mm → Column Width: 400, Column Depth: 400
DPA-Column-Rect: 600x600mm → Column Width: 600, Column Depth: 600

**Step 8 — Purge, QA, save as template:**
File → Save As → Family Template
Filename: DPA-Structural-Column-Template.rft
Save to: C:\\DharrenPark\\FamilyLibrary\\05_Templates\\Current\\`,
      },
      {
        title: 'PRACTICE — Test and Document the Structural Template',
        content: `Test DPA-Structural-Column-Template.rft in the DPC project.

**LOAD AND PLACE:**
Load template into DPC project.
Structure tab → Column → select DPA-Column-Rect: 400x400mm
Place at grid intersection A-1 in L00 plan.
Set column height from L00 to L01 (standard column spanning one floor).

**ANALYTICAL MODEL CHECK:**
Select the placed column → Manage → Analytical Model Settings
The analytical model (green centreline) should be visible at the column centre ✓
It should connect to the structural slab analytical model above and below ✓
If analytical nodes do not connect: the column is not touching the floor/slab elements — move it to the correct level.

**PLAN REPRESENTATION CHECK:**
Coarse view: filled solid representing column footprint ✓
Switch to Structural Plan (if view template "Struct-Plan-GA-100" exists from ps-13):
Apply that template → column shows with concrete hatch from STR-Concrete-InSitu-C32/40 material ✓

**SECTION CUT CHECK:**
Open a building section (Section A-A if it exists):
The column should show a rectangular cross-section with concrete fill pattern ✓

**SCHEDULE CHECK:**
If a Structural Column schedule exists → column appears with Column Width = 400, Column Depth = 400 ✓
Structural Material = STR-Concrete-InSitu-C32/40 ✓

**DESIGN STANDARDS NOTE:**
Add to DPA-FamilyStandards-v1.0.txt under SECTION 9: Structural Families:
"Structural Column parameters: Column Width, Column Depth (not abbreviated B, D).
Analytical model: do not modify pre-built analytical reference planes.
Material: always Structural Material parameter (Type) — drives analytical model material.
Separate families for rectangular and circular sections — built from DPA-Structural-Column-Template.rft.
Type Catalogue required for columns with more than 8 types (see Lesson 18)."

**Comments field:**
"v1.0 — [Date] — DPA Structural Column template. Rectangular and circular test types. DPA parameter names. Analytical model preserved from template. QA passed. [Initials]"

Move to Lesson 15 — Profile Family Library.`,
      },
    ],
    takeaways: [
      'Never modify the pre-built analytical reference planes in structural templates — they are positioned at the structural centroid by convention and moving them produces incorrect engineering data',
      'Use "Column Width" and "Column Depth" not engineering abbreviations "B" and "D" — the DPA standard prioritises clarity in the architecture-led model',
      'Structural Material (Type parameter) drives both the visual concrete hatch in drawings AND the analytical model material for structural analysis export — one parameter, two outputs',
      'Rectangular and circular columns need separate families — the geometry profile (extrusion vs. circular sweep) is fundamentally different in the Family Editor',
      'Structural columns must show at Coarse detail level — they are critical spatial elements that must always be visible in overview plans, unlike furniture which can be hidden at Coarse',
    ],
    resource: {
      title: 'Autodesk Revit — Structural Column Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-structural-column-families',
    },
    prev: 'rfs-13',
    next: 'rfs-15',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-15: Profile Family Library
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-15',
    num: 15,
    title: 'Profile Family Library',
    topic: 'Profiles',
    cat: 'intermediate',
    readTime: '14 min',
    free: false,
    desc: 'Build the core DPA profile library — skirting, stair nosing, handrail, and curtain wall mullion profiles — establishing the profile naming convention, origin positioning standard, and parametric dimension approach.',
    intro: `Profile families are the quiet workhorses of the office library. Nobody notices them — they just make skirting boards consistently detailed, handrails correctly proportioned, and curtain wall mullions accurately profiled. Nobody notices until they are missing: when every project uses a different skirting profile, or the stair nosing profile origin is in the wrong position and skirtings align to the wrong wall face on every project.

This lesson builds the four core DPA profiles and establishes the profile library conventions that make all future profile families consistent and immediately usable.`,
    sections: [
      {
        title: 'EXPLAIN — Profile Family Conventions',
        content: `Profile families have one unique characteristic: they are 2D only. No 3D geometry exists in a profile family. The cross-section is defined by Detail Lines — a closed loop (or open loop for some special cases). Revit extrudes this loop along the sweep path in the project.

**The origin positioning convention (critical):**
The origin (reference plane intersection) is the attachment point of the profile to its host path. Getting this wrong means profiles align to the wrong position on every sweep:

For wall sweep profiles (skirting, dado, cornice):
Origin = at the wall face and floor junction (the bottom-left corner where the skirting contacts the wall and floor). The profile extends upward and outward from this point.

For railing/handrail profiles:
Origin = at the centre of the handrail cross-section. Revit sweeps the profile centred on the railing path.

For stair nosing profiles:
Origin = at the front-top corner of the stair tread (where the tread edge meets the nosing projection). The nosing extends forward and downward from this point.

For mullion profiles:
Origin = at the centre of the mullion cross-section. Revit sweeps centred on the curtain wall grid line.

**The DPA profile naming convention:**
[Category]-[Element]-[Profile Type]-[Variant].rfa
Examples:
- ARCH-Skirting-Chamfer-75mm.rfa
- ARCH-Skirting-Chamfer-100mm.rfa
- ARCH-Handrail-Circular-50mm.rfa
- ARCH-Nosing-Standard-25mm.rfa
- ARCH-Mullion-Rectangular-50x150mm.rfa

**One family, multiple types vs. separate families:**
For profiles with parametric dimensions (width and height parameters), one family can have multiple types:
ARCH-Skirting-Chamfer.rfa with types: 75mm, 100mm, 150mm

For profiles with fundamentally different shapes (chamfer vs. ogee vs. pencil round):
Separate families for each profile shape — the line-work is different enough to warrant separate families.

**Profile Usage settings:**
Every profile must have its Profile Usage set correctly:
Manage → Family Category and Parameters → Profile Usage
Set to: Wall Sweep, Railing Rail, Stair Nosing, or Curtain Wall Mullion
This determines which project dropdown the profile appears in.`,
      },
      {
        title: 'GUIDE — Building the Four Core DPA Profiles',
        content: `**PROFILE 1 — ARCH-Skirting-Chamfer.rfa (Wall Sweep)**

Step 1 — Open Metric Profile.rft:
File → New → Family → Metric Profile.rft → Open

Step 2 — Set Profile Usage:
Manage → Family Category and Parameters → Profile Usage: Wall Sweep

Step 3 — Position origin:
The two reference planes are already at the origin. The origin (their intersection) will be at the bottom-left corner of the skirting.

Step 4 — Draw the skirting cross-section:
Annotate → Detail Lines → draw the profile:
Starting at the origin (0,0):
- Right 18mm (to point B — skirting thickness)
- Up 100mm (to point C — skirting height)
- Left 5mm diagonal + up 5mm (chamfer at top — 5x5mm chamfer)
- Left 13mm (to point E — top edge)
- Down 100mm (back to origin height)
- Close back to origin

This creates a simple chamfered skirting profile: 18mm thick, 100mm tall, 5mm chamfer.

Step 5 — Add parameters:
Family Types → New:
Height: Type, Length, Dimensions (default: 100mm)
Thickness: Type, Length, Dimensions (default: 18mm)
Chamfer Size: Type, Length, Dimensions (default: 5mm)

Create types: 75mm, 100mm, 150mm (change Height only)

Step 6 — Save:
C:\\DharrenPark\\FamilyLibrary\\04_Profiles\\WallSweeps\\ARCH-Skirting-Chamfer.rfa

---

**PROFILE 2 — ARCH-Handrail-Circular.rfa (Railing Rail)**

Profile Usage: Railing Rail
Origin: at centre of the circle (railing path runs through the centre)
Draw a circle: 25mm radius (50mm diameter) centred on origin
Parameters: Diameter (Type, Length, default: 50mm)
Types: 40mm, 50mm

Save: C:\\DharrenPark\\FamilyLibrary\\04_Profiles\\Railings\\ARCH-Handrail-Circular.rfa

---

**PROFILE 3 — ARCH-Nosing-Standard.rfa (Stair Nosing)**

Profile Usage: Stair Nosing
Origin: at the front-top corner of the stair tread
Draw from origin:
- Right 25mm (nosing projection forward)
- Down 10mm (nosing drop below tread)
- Left 25mm (return to tread face)
(Open loop — the nosing attaches to the tread edge, not a closed loop)
Parameters: Projection (Type, Length, default: 25mm), Drop (Type, Length, default: 10mm)

Save: C:\\DharrenPark\\FamilyLibrary\\04_Profiles\\StairNosings\\ARCH-Nosing-Standard.rfa

---

**PROFILE 4 — ARCH-Mullion-Rectangular.rfa (Curtain Wall Mullion)**

Profile Usage: Curtain Wall Mullion
Origin: at centre of the mullion cross-section
Draw a rectangle centred on origin: 25mm wide, 75mm deep (half-widths on each side)
Parameters: Width (Type, Length, default: 50mm), Depth (Type, Length, default: 150mm)
Types: 50x100mm, 50x150mm, 75x150mm

Save: C:\\DharrenPark\\FamilyLibrary\\04_Profiles\\Mullions\\ARCH-Mullion-Rectangular.rfa`,
      },
      {
        title: 'PRACTICE — Load and Test All Four Profiles in DPC Project',
        content: `Test each profile in the DPC project.

**SKIRTING TEST:**
In DPC project, open L00 plan.
Architecture → Wall → place a test wall (internal 100mm partition).
Architecture → Wall → Wall Sweep → select a wall sweep type (or create one):
Edit Type → Profile → browse → select ARCH-Skirting-Chamfer → 100mm type

The skirting should appear running along the base of the wall:
- Correct 18mm thickness
- 100mm height
- 5mm chamfer at top
- Follows wall corners (auto-mitres) ✓

Test origin correctness: the skirting bottom should align exactly with the floor surface. If the skirting floats above the floor or sinks below it → the origin Y position is incorrect. Fix: in the profile family, move the origin to the bottom of the skirting drawing.

**HANDRAIL TEST:**
Architecture → Stair (or Railing) → create a test railing
Edit Type → Top Rail Type → Edit Type → Profile → ARCH-Handrail-Circular → 50mm type
The railing top rail shows a circular 50mm diameter cross-section ✓

**NOSING TEST:**
Architecture → Stair → create a test stair (if not already in model)
Edit Type → Nosing → Nosing Profile → ARCH-Nosing-Standard
Nosing projects 25mm forward, drops 10mm below tread ✓

**MULLION TEST:**
In a curtain wall (if one exists or draw a test curtain wall):
Select curtain wall → Edit Type → Vertical Mullions → Interior Type
Set mullion type to use ARCH-Mullion-Rectangular → 50x150mm
Mullion shows 50mm face width, 150mm depth ✓

**PROFILE NAMING AND STORAGE:**
Verify all four profiles are saved to the correct subfolders:
C:\\DharrenPark\\FamilyLibrary\\04_Profiles\\
  WallSweeps\\ARCH-Skirting-Chamfer.rfa ✓
  Railings\\ARCH-Handrail-Circular.rfa ✓
  StairNosings\\ARCH-Nosing-Standard.rfa ✓
  Mullions\\ARCH-Mullion-Rectangular.rfa ✓

Move to Lesson 16 — Nested Family Standards.`,
      },
    ],
    takeaways: [
      'Profile families are 2D closed loops only — Detail Lines defining the cross-section shape, no 3D geometry, no solid forms',
      'Origin positioning is critical: skirting = bottom-left corner (wall/floor junction), handrail = centre of cross-section, nosing = front-top corner of tread, mullion = centre of cross-section',
      'Set Profile Usage (Manage → Family Category and Parameters) for every profile — it determines which project dropdown the profile appears in',
      'Stair nosing uses an open loop — not a closed shape — it represents the tread edge profile that Revit applies along the tread front',
      'Profile naming: [Category]-[Element]-[Shape]-[Size].rfa — ARCH-Skirting-Chamfer.rfa with types 75mm, 100mm, 150mm is cleaner than three separate family files',
    ],
    resource: {
      title: 'Autodesk Revit — Profile Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-profile-families',
    },
    prev: 'rfs-14',
    next: 'rfs-16',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-16: Nested Family Standards
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-16',
    num: 16,
    title: 'Nested Family Standards',
    topic: 'Architecture',
    cat: 'intermediate',
    readTime: '13 min',
    free: false,
    desc: 'Establish the DPA nesting standard — when to nest, when not to nest, how to pass parameters between host and nested families, and the shared family decision — and build a reusable door handle family for nesting into the door template.',
    intro: `Nested families make host families more powerful and more maintainable. A door handle nested into a door family can be swapped to a different handle style across all doors of that type simultaneously. A light source nested into a light fitting participates in illumination analysis. A shared nested component appears independently in FM schedules.

But nesting has a cost: file size, regeneration time, and maintenance complexity. This lesson establishes the DPA nesting standard — the rules for when nesting is the right choice, and builds the first reusable nested component for the DPA library.`,
    sections: [
      {
        title: 'EXPLAIN — The DPA Nesting Decision Standard',
        content: `Apply this decision tree before deciding to nest any component:

**Question 1 — Is the component ever the same across all instances of the host?**
If yes (a specific handle model is always used with this door type): nest it as a Type-controlled nested family.
If no (the handle changes per instance): nest it as an Instance-controlled nested family OR consider whether a separate family is cleaner.

**Question 2 — Will the component ever need to be replaced independently?**
If yes (different projects use different handle types with the same door): nest it — this is exactly what nesting solves.
If no (the component is always this specific part, never replaced): model it directly in the host — simpler and more performant.

**Question 3 — Does the component need to appear in its own schedule?**
If yes (the handle needs to be in a hardware schedule separately from the door): set the nested family as Shared.
If no: keep it non-shared — simpler and less performance overhead.

**Question 4 — Is this component reused in multiple host families?**
If yes (the same handle is used in multiple door types): build it as a reusable nested family and store it in the library.
If no: model it directly in the host — no library benefit to nesting.

**The DPA nesting performance rule:**
Maximum nesting depth: 3 levels. Host → Nested → Sub-nested = acceptable. Host → Nested → Sub-nested → Sub-sub-nested = not acceptable. Deeper nesting creates exponential performance overhead.

**The DPA shared nested family rule:**
Mark a nested family as Shared ONLY when it genuinely needs to appear in its own schedule and be independently tagged in the project. Do not mark every nested family as Shared "just in case" — each Shared instance adds a tracked element to the project database. 100 doors × 4 Shared nested components = 400 additional tracked elements.`,
      },
      {
        title: 'GUIDE — Building the DPA-Handle-PushBar.rfa',
        content: `Build a reusable door handle family that will be nested into the door template.

**Step 1 — Open Metric Generic Model.rft:**
File → New → Family → Metric Generic Model.rft → Open

The handle is a Generic Model (not Doors) — it is a component that gets nested, not placed directly in a project.

**Step 2 — Set up reference planes:**
The handle is a simple horizontal bar. Reference planes:
- Centre L/R (horizontal centreline of the handle bar)
- Centre F/B (vertical position from the door face)
- Left and Right extent planes (driven by Handle Length)
- Front (face of the door — handle attaches here)

**Step 3 — Add parameters:**
Family Types → New:
- Handle Length: Type, Length, Dimensions (default: 400mm)
- Handle Diameter: Type, Length, Dimensions (default: 25mm)
- Wall Offset: Type, Length, Dimensions (default: 35mm — clearance between door face and bar centre)
- Handle Material: Type, Material, Materials and Finishes (default: chrome)
- Description: Type, Text, Identity Data

**Step 4 — Build the handle geometry:**
The push bar is a Sweep:

Create → Sweep → select path (a horizontal line from Left to Right extent, locked to Handle Length) → Edit Profile → draw a circle with Diameter/2 radius → Finish.

OR simpler: Create → Extrusion using a circular profile:
Draw a small circle (Handle Diameter / 2 radius) centred at the left end
Extrusion length = Handle Length (lock to reference planes)

Subcategory: create "DPA-Handle" subcategory (No main category — it is Generic Model)
Material: Handle Material parameter

**Step 5 — Set visibility:**
Coarse: off (handle is too small to show at 1:100)
Medium: off
Fine: on only (handles show only in Fine detail drawings)

**Step 6 — Create types:**
DPA-Handle-PushBar-400mm: Length 400, Diameter 25, Chrome material
DPA-Handle-PushBar-600mm: Length 600, Diameter 25, Chrome material

**Step 7 — Save:**
C:\\DharrenPark\\FamilyLibrary\\00_Architecture\\Doors\\DPA-Handle-PushBar.rfa

**Step 8 — Nest into the door template:**
Open DPA-Door-Template.rft (or the WIP version)
Insert → Load Family → select DPA-Handle-PushBar.rfa
Create → Component → place handle on the door push face
Position at Handle Height from floor (standard: 1050mm — add a "Handle Height" parameter to the door template for this)
Lock position to a reference plane at Handle Height
Assign handle instance to DPA-Hardware subcategory

**Step 9 — Pass parameters:**
Select nested handle instance → Properties → Handle Length → click formula button → type "Handle Length" (a parameter in the door template that passes to the handle)
This connects the door template's Handle Length to the nested handle's length.

**Step 10 — Re-save the door template:**
File → Save As → Family Template → DPA-Door-Template.rft (overwrite)`,
      },
      {
        title: 'PRACTICE — Document and Test the Nesting Standard',
        content: `Test the nested handle in the DPC project and document the DPA nesting standard.

**NESTING TEST:**
Load the updated DPA-Door-Template.rft into the DPC project.
Place a door → set view to Fine detail level.
The door handle (push bar) should be visible at Fine only ✓
The handle should be positioned at 1050mm from floor ✓

Change the door type's Handle Length to 600mm:
Properties → Handle Length → 600mm
The nested handle updates to 600mm length ✓

Switch to Medium detail level:
Handle disappears (visibility set to Fine only) ✓

**SHARED NESTED FAMILY TEST:**
For the purposes of testing: open DPA-Handle-PushBar.rfa → Manage → Family Category and Parameters → check "Shared" → resave → reload into door template → reload into project.

Now in the project: try to tag the handle directly (Annotate → Tag by Category → Generic Model tag → click the handle through the door)
With Shared: the handle can be directly selected and tagged independently of the door ✓
With non-Shared: cannot select handle independently ✓

Revert to non-Shared for the production handle (handles do not need independent scheduling in this project).

**ADD TO DPA-FamilyStandards-v1.0.txt — SECTION 10: Nesting Standards:**

DPA NESTING DECISION STANDARD:
NEST when: component is independently replaceable, reused across multiple host families, or needs independent scheduling.
DO NOT NEST when: component is always the same (model directly), has no replacement need, or depth would exceed 3 levels.

SHARED NESTED FAMILY:
Use only when component genuinely needs independent scheduling and tagging.
Performance cost: each Shared instance = one additional tracked element.
Default: non-Shared unless explicitly required.

DPA NESTING MAX DEPTH: 3 levels (Host → Nested → Sub-nested).

REUSABLE NESTED COMPONENTS IN LIBRARY:
DPA-Handle-PushBar.rfa (C:\\FamilyLibrary\\00_Architecture\\Doors\\)
Add to this list as additional reusable nested components are built.

**Comments on DPA-Handle-PushBar.rfa:**
"v1.0 — [Date] — Reusable push bar handle for nesting into door families. 400mm and 600mm types. Chrome default material. Fine visibility only. Non-shared. QA passed. [Initials]"

**Intermediate Tier Complete.**
You have built:
- DPA-Door-Template.rft (Lesson 9)
- DPA-Window-Template.rft (Lesson 10)
- DPA-Furniture-Template.rft (Lesson 11)
- DPA-Equipment-Template.rft (Lesson 12)
- 5 annotation tags in 03_Annotation\\Tags\\ (Lesson 13)
- DPA-Structural-Column-Template.rft (Lesson 14)
- 4 profile families in 04_Profiles\\ (Lesson 15)
- DPA-Handle-PushBar.rfa nested into door template (Lesson 16)

Move to Lesson 17 — Shared Parameter File for Families (Advanced tier begins).`,
      },
    ],
    takeaways: [
      'Nest when: component is independently replaceable, reused across multiple hosts, or needs its own schedule. Do not nest: when modelling directly is simpler and there is no replacement need',
      'Maximum nesting depth: 3 levels — Host → Nested → Sub-nested. Deeper nesting creates exponential performance overhead',
      'Mark nested family as Shared ONLY when independent scheduling and tagging is genuinely needed — each Shared instance adds a tracked element to the project database',
      'DPA-Handle-PushBar.rfa: Fine visibility only, Handle Length passes from host door template to nested handle — parameter passing connects the two levels',
      'Reusable nested components live in the library (e.g., 00_Architecture/Doors/) — they are loaded into host families, not placed directly in projects',
    ],
    resource: {
      title: 'Autodesk Revit — Nested Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-nested-families',
    },
    prev: 'rfs-15',
    next: 'rfs-17',
  },
];
