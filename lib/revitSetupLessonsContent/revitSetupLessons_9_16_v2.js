// ============================================================
// REVIT PROJECT SETUP — LESSONS ps-9 through ps-16 (INTERMEDIATE)
// File: lib/revitSetupLessonsContent/lessons-9-16.js
// FORMAT: 3-Layer — Explain → Guide → Practice (ISO 19650 aligned)
// END GOAL: Complete visual and annotation standard for the DPC template
// ============================================================

export const lessons_9_16 = [

  // ─────────────────────────────────────────────────────────
  // ps-9: Line Weights, Styles & Patterns
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-9',
    num: 9,
    title: 'Line Weights, Styles & Patterns',
    topic: 'Visual Standards',
    cat: 'intermediate',
    readTime: '15 min',
    free: false,
    desc: 'Configure the complete line weight scale, create the standard line styles, and load the fill patterns your project needs — the visual foundation that makes every drawing look professional and consistent.',
    intro: `Line weights are the single most visible quality indicator in a set of architectural drawings. Open two sets of drawings side by side — one with carefully calibrated line weights, one with defaults — and the difference is immediately obvious. One reads clearly at every scale. The other looks flat, undifferentiated, and amateur.

Revit ships with a default line weight table that is not calibrated for professional architectural production. This lesson replaces it with a professional standard, creates the line styles the Dharren Park project needs, and loads the fill patterns that will be used in materials, view filters, and detail components throughout the project.`,
    sections: [
      {
        title: 'EXPLAIN — Line Weights in Revit',
        content: `Revit uses numbered line weights (1 through 16) rather than direct millimeter values. Each number maps to a pen width in millimeters. The mapping is set in the Line Weights dialog and applies to all views in the project.

There are three categories of line weight:

**Model Line Weights (1-16):**
Applied to 3D model elements — walls, floors, doors, columns. The line weight changes depending on the view scale. A wall cut at 1:100 uses a heavier weight than the same wall at 1:500.

**Perspective Line Weights (1-16):**
Applied to 3D perspective views. Less commonly adjusted in professional practice.

**Annotation Line Weights (1-16):**
Applied to 2D annotation elements — dimensions, text, tags, section marks. Annotation line weights do NOT change with view scale — a 0.18mm dimension tick is 0.18mm whether the view is 1:50 or 1:500.

**The professional line weight strategy:**
In architectural drawings, line weights communicate depth and hierarchy:
- Heaviest lines: elements cut in plan/section (walls, slabs, columns)
- Medium lines: edges beyond the cut (far walls, furniture outlines)
- Light lines: detail and texture (hatch lines, subtle edges)
- Lightest lines: annotation (dimensions, text boundaries)

This hierarchy must be consistent across every drawing in the set. The line weight table in the project template is what enforces this consistency.`,
      },
      {
        title: 'EXPLAIN — Line Styles and Fill Patterns',
        content: `**Line Styles:**
Beyond weight, lines have a style — solid, dashed, dotted, dash-dot, or a custom pattern. Revit ships with a set of default line styles. For professional use, you need:

- Solid — primary drawing lines (always present in defaults)
- Dashed — hidden lines, beyond elements, demolished elements
- Long-Dash — boundary lines, site lines
- Dot — centre lines, reference lines
- Dash-Dot — section boundary lines, fire compartment lines

Line styles are also used for symbolic lines in families (plan symbols for furniture, structural elements at Coarse detail level).

**Fill Patterns:**
Revit fill patterns appear in two contexts:

Model Patterns — scale with the view. Used for materials (brick coursing, concrete aggregate, timber grain). They represent the actual physical material at real scale.

Drafting Patterns — fixed on paper. Used for view filters, region fills, and general hatch annotation. They appear the same size regardless of view scale.

Standard patterns needed for the Dharren Park project:
- Concrete (solid fill with aggregate dots) — model pattern for concrete elements
- Brick (coursing pattern) — model pattern for masonry
- Sand (fine dot pattern) — model pattern for granular fill
- Steel (diagonal lines) — model pattern for steel sections in section
- Glass (diagonal fine lines) — for glazing cut sections
- Diagonal Cross Hatch — drafting pattern for demolished areas
- Solid Fill — drafting pattern for fire compartment plans

These patterns are used by materials (Lesson 11), view filters (Lesson 13), and detail components throughout the project.`,
      },
      {
        title: 'GUIDE — Setting Line Weights',
        content: `**Step 1 — Open Line Weights:**
Manage tab → Settings panel → Additional Settings → Line Weights

The Line Weights dialog shows a table with scale columns across the top (1:1, 1:2, 1:5, 1:10, 1:20, 1:50, 1:100, 1:200, 1:500, 1:1000) and line weight numbers down the left (1-16).

Each cell contains a pen width in millimeters. The value used in a view depends on the view scale.

**Step 2 — Enter the professional line weight table:**
In the Model Line Weights tab, enter these values:

Line Weight 1 (lightest — hatch, subtle detail):
All scales: 0.13

Line Weight 2 (fine — annotation, dimension lines):
All scales: 0.18

Line Weight 3 (light — furniture, text borders):
All scales: 0.25

Line Weight 4 (medium-light — window frames, thin walls):
1:1=0.35, 1:2=0.35, 1:5=0.35, 1:10=0.35, 1:20=0.35, 1:50=0.35, 1:100=0.35, 1:200=0.25, 1:500=0.18, 1:1000=0.13

Line Weight 5 (medium — standard element edges):
1:1=0.50, 1:2=0.50, 1:5=0.50, 1:10=0.50, 1:20=0.50, 1:50=0.50, 1:100=0.35, 1:200=0.25, 1:500=0.18, 1:1000=0.13

Line Weight 6 (medium-heavy — internal wall cuts):
1:1=0.70, 1:2=0.70, 1:5=0.70, 1:10=0.70, 1:20=0.70, 1:50=0.70, 1:100=0.50, 1:200=0.35, 1:500=0.25, 1:1000=0.18

Line Weight 7 (heavy — external wall cuts, major elements):
1:1=1.00, 1:2=1.00, 1:5=1.00, 1:10=1.00, 1:20=1.00, 1:50=1.00, 1:100=0.70, 1:200=0.50, 1:500=0.35, 1:1000=0.25

Line Weight 8 (heaviest — boundary, outline):
1:1=1.40, 1:2=1.40, 1:5=1.40, 1:10=1.40, 1:20=1.40, 1:50=1.40, 1:100=1.00, 1:200=0.70, 1:500=0.50, 1:1000=0.35

Line Weights 9-16: increase progressively or set same as 8 for consistency.

**Step 3 — Set Annotation Line Weights:**
Click the Annotation Line Weights tab.
Weight 1: 0.13
Weight 2: 0.18
Weight 3: 0.25
Weight 4: 0.35
Weight 5: 0.50

These are fixed — they do not change with scale.

**Step 4 — Click OK to apply.**

**Step 5 — Create Line Styles:**
Manage tab → Additional Settings → Line Styles
Click New to add:
- <Long-Dash> — 6mm dash, 2mm gap, weight 3
- <Centre-Line> — 6mm dash, 1mm gap, 1mm dot, 1mm gap, weight 2
- <Boundary> — solid, weight 8, red color (for boundary indication)

**Step 6 — Save (Ctrl+S).**`,
      },
      {
        title: 'PRACTICE — Apply to Dharren Park Project',
        content: `Enter these values in your DPC project file.

**Object Styles — Category Line Weights (Manage → Object Styles → Model Objects):**

After setting the line weight table, assign weights to key categories:

| Category | Projection | Cut | Halftone |
|---|---|---|---|
| Walls | 5 | 7 | No |
| Structural Columns | 5 | 7 | No |
| Floors | 3 | 6 | No |
| Doors | 3 | 5 | No |
| Windows | 3 | 5 | No |
| Furniture | 2 | 3 | No |
| Topography | 3 | — | No |
| Grids | 2 | — | No |
| Reference Planes | 1 | — | Yes |

**Line Styles to Create:**

| Style Name | Weight | Color | Pattern |
|---|---|---|---|
| DPC-Boundary | 8 | Red (255,0,0) | Solid |
| DPC-Hidden | 3 | Gray (127,127,127) | Dashed |
| DPC-CentreLine | 2 | Blue (0,0,255) | Centre |
| DPC-Demolish | 3 | Gray (127,127,127) | Long-Dash |

**Fill Patterns to Create (Manage → Additional Settings → Fill Patterns):**

Drafting Patterns:
- DPC-Solid: Solid fill (used for fire compartment, fire rated elements)
- DPC-CrossHatch: 45-degree cross hatch, 5mm spacing (demolished areas)
- DPC-DiagHatch: 45-degree single hatch, 3mm spacing (general)

Model Patterns:
- Concrete: Solid fill (let material handle appearance)
- Brick: Horizontal lines at 75mm spacing (brick course height)

**Confirmation Checklist:**
- Line weight table entered for weights 1-8 minimum
- Annotation line weights set (1-5)
- Object Styles updated for Walls, Columns, Floors, Doors, Windows, Furniture
- DPC line styles created
- Fill patterns created
- File saved (Ctrl+S)

Move to Lesson 10 — Object Styles.`,
      },
    ],
    takeaways: [
      'Line weights 1-8 form the project hierarchy: 1-2 for annotation/hatch, 3-5 for element projection, 6-8 for element cuts at plan/section',
      'Model line weights change with view scale — a 1:100 plan uses lighter weights than a 1:20 detail for the same element',
      'Annotation line weights are fixed — 0.18mm dimension ticks look the same at every scale',
      'Object Styles assigns default line weights to categories — walls cut at weight 7, furniture projected at weight 2',
      'Create DPC-prefixed line styles to distinguish project standards from Revit defaults',
    ],
    resource: {
      title: 'Autodesk Revit — Line Weights',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-line-weights',
    },
    prev: 'ps-8',
    next: 'ps-10',
  },

  // ─────────────────────────────────────────────────────────
  // ps-10: Object Styles — Category Defaults
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-10',
    num: 10,
    title: 'Object Styles — Category Defaults',
    topic: 'Visual Standards',
    cat: 'intermediate',
    readTime: '14 min',
    free: false,
    desc: 'Configure Object Styles to set the default appearance of every element category in the project — so every wall, column, door, and floor displays correctly without manual overrides in every view.',
    intro: `Object Styles is the master control for how every element category appears by default across the entire project. When you place a wall and it looks correct without any VG overrides, it is because the Object Styles for the Walls category are correctly configured. When you place a structural column and its cut line is heavier than its projection line, that is Object Styles working.

Configuring Object Styles is the difference between a template where every view looks right automatically and one where someone has to manually override every new view before it is usable.`,
    sections: [
      {
        title: 'EXPLAIN — What Object Styles Controls',
        content: `Object Styles (Manage → Object Styles) defines the default graphic display for every Revit element category. For each category, you can set:

**Line Weight:**
- Projection: the weight used when elements are seen beyond the cut plane (walls you can see in the distance, furniture in plan)
- Cut: the weight used when elements are cut by the view's cut plane (walls sliced through in plan, columns cut in structural plans)

**Line Color:**
The default color of element outlines. In professional practice, almost everything is black (0,0,0). Color is added deliberately through VG overrides and filters for specific purposes — not as a default.

**Line Pattern:**
The default line pattern (solid, dashed, etc.) for the category.

**Material:**
The default surface material for the category. Elements that have no explicit material parameter assigned use this category default.

**The hierarchy:**
Object Styles → Visibility/Graphics Override → Element Override
Each level overrides the one above. Object Styles is the base. VG overrides in a specific view change it for that view only. Element overrides (right-click → Override Graphics in View) change it for that specific element in that view.

By setting Object Styles correctly, you minimise the number of VG and element overrides needed — most views look correct straight away.`,
      },
      {
        title: 'EXPLAIN — Subcategories',
        content: `Each category can have subcategories — subdivisions that allow independent graphic control of parts of an element type.

**Example — Walls:**
The Walls category has subcategories:
- [Walls] Common Edges — where two walls meet
- [Walls] Hidden Lines — edges hidden behind other elements

**Example — Doors:**
- [Doors] Frame/Mullion — the door frame
- [Doors] Glass — glazing panels
- [Doors] Panel — the door leaf
- [Doors] Opening — the plan swing arc

Setting different line weights for subcategories is how doors show their frame, glass, and swing arc with different weights — all without any view-specific override.

**Custom subcategories:**
You can create new subcategories for any category. This is used in family creation (rf-11) to give family creators control over how individual family components display. For the project template, we set up subcategories that the Dharren Park family library will use.

**The power of subcategories in the template:**
When families are built with correct subcategory assignments and the project template has those subcategories configured, the families display correctly the moment they are loaded. No per-family graphic fixes needed.`,
      },
      {
        title: 'GUIDE — Configuring Object Styles',
        content: `**Step 1 — Open Object Styles:**
Manage tab → Settings panel → Object Styles
The Object Styles dialog opens with three tabs: Model Objects, Annotation Objects, Analytical Model Objects.

**Step 2 — Configure Model Objects (the primary tab):**
Work through the key categories. For each: click the Projection Weight cell, enter the value. Click Cut Weight, enter the value. Click Line Color if it needs to be non-black.

**Step 3 — Set line colors:**
For most categories: Line Color = Black (0,0,0)
Exceptions:
- Reference Planes: Blue (0,0,127) — so they are visually distinct from model lines
- Grids: Blue (0,0,127)
- Survey grids: Red (127,0,0)

**Step 4 — Configure Annotation Objects tab:**
Annotation objects (dimensions, text, tags, section marks) have their own settings.
Key settings:
- Dimensions: Weight 2, Black
- Text: Weight 1, Black
- Section Box: Weight 3, Blue
- Spot Elevations: Weight 2, Black
- Grids: Weight 2, Blue

**Step 5 — Create Subcategories for Doors:**
In Model Objects: expand Doors → scroll to bottom of subcategory list → New
Create: "DPC-Frame", "DPC-Glass", "DPC-Swing"
Set:
- DPC-Frame: Projection 4, Cut 5, Black, Solid
- DPC-Glass: Projection 2, Cut 3, Blue (0,0,200), Solid
- DPC-Swing: Projection 1, Cut —, Gray (160,160,160), Dashed

**Step 6 — Click OK to apply.**

**Step 7 — Test in Level 1 floor plan:**
Place a test wall in the Level 1 floor plan. It should appear with weight 7 cut lines without any VG override. If it looks too light or too heavy, return to Object Styles and adjust.

**Step 8 — Save (Ctrl+S).**`,
      },
      {
        title: 'PRACTICE — Complete Object Styles for Dharren Park',
        content: `Configure these Object Styles in your DPC project file.

**Model Objects — Key Categories:**

| Category | Proj. Weight | Cut Weight | Color | Pattern |
|---|---|---|---|---|
| Walls | 5 | 7 | Black | Solid |
| Structural Columns | 5 | 7 | Black | Solid |
| Structural Framing | 4 | 6 | Black | Solid |
| Floors | 3 | 6 | Black | Solid |
| Roofs | 4 | 6 | Black | Solid |
| Ceilings | 3 | 5 | Black | Solid |
| Doors | 3 | 5 | Black | Solid |
| Windows | 3 | 5 | Black | Solid |
| Curtain Panels | 2 | 3 | Black | Solid |
| Curtain Wall Mullions | 3 | 4 | Black | Solid |
| Furniture | 2 | 3 | Black | Solid |
| Casework | 2 | 3 | Black | Solid |
| Stairs | 3 | 5 | Black | Solid |
| Railings | 2 | 3 | Black | Solid |
| Topography | 3 | — | Black | Solid |
| Site | 3 | — | Black | Solid |
| Planting | 1 | — | Black | Solid |
| Grids | 2 | — | Blue (0,0,127) | Centre |
| Reference Planes | 1 | — | Blue (0,0,127) | Dashed |
| Levels | 1 | — | Blue (0,0,127) | Solid |

**Annotation Objects — Key Settings:**

| Category | Weight | Color |
|---|---|---|
| Dimensions | 2 | Black |
| Text | 1 | Black |
| Tags (all) | 2 | Black |
| Section Marks | 3 | Black |
| Elevation Marks | 3 | Black |
| Callout Heads | 2 | Black |
| Spot Elevations | 2 | Black |

**Confirmation Checklist:**
- All key categories have projection and cut weights set
- Grids and Reference Planes are blue
- All annotation categories set to black, weight 1-3
- Door subcategories (DPC-Frame, DPC-Glass, DPC-Swing) created
- Test wall in Level 1 shows correct weight without VG override
- File saved

Move to Lesson 11 — Materials Library Setup.`,
      },
    ],
    takeaways: [
      'Object Styles is the base layer — set it correctly and most views display right without any VG overrides',
      'Projection weight is for elements seen beyond the cut; Cut weight is for elements sliced by the cut plane — cut is always heavier',
      'Reference Planes and Grids should be blue — visually distinct from black model content at all times',
      'Subcategories (DPC-Frame, DPC-Glass, DPC-Swing) enable independent graphic control of family component parts',
      'The hierarchy: Object Styles → VG Override (per view) → Element Override (per element in a view) — each level overrides the one above',
    ],
    resource: {
      title: 'Autodesk Revit — Object Styles',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-object-styles',
    },
    prev: 'ps-9',
    next: 'ps-11',
  },

  // ─────────────────────────────────────────────────────────
  // ps-11: Materials Library Setup
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-11',
    num: 11,
    title: 'Materials Library Setup',
    topic: 'Visual Standards',
    cat: 'intermediate',
    readTime: '15 min',
    free: false,
    desc: 'Build the Dharren Park materials library — creating correctly named, properly configured materials for concrete, masonry, glazing, steel, and finishes that drive correct appearance in drawings and renders.',
    intro: `Materials in Revit do three jobs simultaneously: they make the model look correct in rendered views, they drive the cut and surface patterns that appear in drawings, and they provide the data that feeds material takeoff schedules. A material that is configured well does all three without any additional work. A material configured poorly means incorrect section hatching, wrong renders, and missing schedule data.

This lesson builds the core Dharren Park materials library from scratch — each material named correctly, configured correctly, and ready to drive both drawings and data.`,
    sections: [
      {
        title: 'EXPLAIN — The Revit Material System',
        content: `A Revit material has four tabs of settings:

**Identity tab:**
Name, description, class, manufacturer, cost, URL. The name and class appear in material takeoff schedules. Use consistent naming so schedules sort and group correctly.

**Graphics tab:**
- Shading color: what the material looks like in shaded 3D views (not rendered)
- Surface Pattern: the hatch pattern shown on element surfaces in elevation and 3D views
- Cut Pattern: the hatch pattern shown when the element is cut in plan or section

This tab directly controls how drawings look. Concrete cut in section should show a concrete pattern. Brick in elevation should show coursing lines.

**Appearance tab:**
The render asset — the photorealistic appearance used in rendered views and ray-traced images. Revit ships with an extensive material library. Most materials can be connected to a pre-built Autodesk appearance asset.

**Physical tab:**
Structural and thermal properties. Used by energy analysis and structural analysis tools. For this course, we focus on Graphics and Identity — Physical properties are set by structural engineers in their analysis tools.

**Material naming convention for the DPC template:**
[Discipline]-[Material Type]-[Specific Material]-[Finish/Grade]
Examples:
- STR-Concrete-InSitu-C32/40
- STR-Concrete-Precast-C50/60
- ARCH-Masonry-Brick-Red
- ARCH-Glazing-Clear-6mm
- ARCH-Metal-Steel-Galvanised
- ARCH-Finish-Paint-White
- ARCH-Finish-Carpet-Grey`,
      },
      {
        title: 'EXPLAIN — Cut Patterns and Section Hatching',
        content: `The most commonly misconfigured aspect of Revit materials is the cut pattern — the hatch that appears when an element is sliced in plan or section. Getting this right makes drawings read correctly without any manual overrides.

**Standard cut patterns for construction drawing conventions:**

Concrete (cast in-situ): Solid fill — concrete in section is traditionally shown as a solid grey or black fill. In Revit, use a solid fill pattern with a grey shading color (140,140,140).

Concrete (precast): Diagonal lines at 45 degrees, 2mm spacing.

Masonry (brick): Horizontal lines at 75mm spacing (representing brick course height). In small scale plans (1:100), simplified solid fill is acceptable.

Steel (structural): Diagonal cross-hatch (both 45-degree directions), 5mm spacing. For small sections (RHS, angles), solid fill is used.

Glazing: Diagonal lines, fine, 1mm spacing. Single diagonal direction for glass.

Timber: Diagonal lines at 45 degrees. Model pattern at 50mm spacing to show grain direction.

Insulation: Diagonal lines with a wave pattern, or use the standard insulation pattern from the Revit pattern library.

Earth/fill: Diagonal lines at 45 degrees with dots.

**ISO 19650 and materials:**
ISO 19650 does not specify material cut patterns — these follow national drawing conventions. However, ISO 19650 does require materials to carry data (name, manufacturer, specification reference) that flows to COBie and FM handover. Configure the Identity tab of each material with this data.`,
      },
      {
        title: 'GUIDE — Creating Materials',
        content: `**Step 1 — Open the Material Browser:**
Manage tab → Settings panel → Materials
The Material Browser opens.

**Step 2 — Create a new material:**
In the Material Browser: click the "+" button (Create New Material) at the bottom left.
A new material appears named "Default New Material."

**Step 3 — Rename immediately:**
With the new material selected: in the Identity tab on the right, change the Name field to your material name. Press Enter.

**Step 4 — Set Identity fields:**
- Name: [per naming convention]
- Description: [full description of the material]
- Class: [Concrete / Masonry / Metal / Glass / Finish / etc.]
- Manufacturer: [leave blank for generic materials, fill for specified products]
- Product Model: [leave blank or enter specification reference]

**Step 5 — Set the Graphics tab:**
Click the Graphics tab.
- Shading: click the color swatch and set the shading color
- Surface Pattern: click the pattern button → select or create a surface fill pattern
- Cut Pattern: click the pattern button → select or create a cut fill pattern

**Step 6 — Connect an Appearance asset:**
Click the Appearance tab.
Click the asset thumbnail → browse to find a matching Autodesk material asset.
For concrete: search "Concrete" → select a suitable concrete render asset.

**Step 7 — Repeat for each material in the library.**

**Step 8 — Create a Material Schedule to verify:**
View → Schedules → Material Takeoff → select "Multi-Category"
Add fields: Material Name, Material Area, Material Volume
This verifies materials are correctly configured and schedulable.

**Step 9 — Save (Ctrl+S).**`,
      },
      {
        title: 'PRACTICE — Build the Dharren Park Core Materials',
        content: `Create these 15 core materials in your DPC project file.

**STRUCTURAL MATERIALS:**

STR-Concrete-InSitu-C32/40
- Class: Concrete
- Shading: RGB (140, 140, 140) — medium grey
- Cut Pattern: Solid Fill, RGB (180, 180, 180)
- Surface Pattern: None
- Description: Cast in-situ reinforced concrete, grade C32/40 per BS EN 206

STR-Concrete-Precast-C50/60
- Class: Concrete
- Shading: RGB (160, 160, 160) — lighter grey
- Cut Pattern: Diagonal lines 45°, 2mm spacing, RGB (100, 100, 100)
- Description: Precast concrete, grade C50/60

STR-Steel-Structural
- Class: Metal
- Shading: RGB (120, 120, 140) — blue-grey
- Cut Pattern: Diagonal cross-hatch 45°, 3mm spacing, black
- Description: Structural steel to BS EN 10025, grade S355

**ARCHITECTURAL MATERIALS:**

ARCH-Masonry-Brick-Red
- Class: Masonry
- Shading: RGB (180, 80, 50) — brick red
- Cut Pattern: Horizontal lines, 75mm spacing (model pattern), RGB (150, 60, 40)
- Surface Pattern: Brick coursing (model pattern), RGB (150, 60, 40)
- Description: Clay facing brick, red, per BS EN 771-1

ARCH-Masonry-Block-Fair
- Class: Masonry
- Shading: RGB (200, 190, 180) — light beige
- Cut Pattern: Horizontal lines, 200mm spacing, grey
- Description: Concrete blockwork, fair-faced, 200mm thickness

ARCH-Glazing-Clear
- Class: Glass
- Shading: RGB (180, 220, 240) — light blue-transparent
- Cut Pattern: Diagonal lines 45°, 1mm spacing, RGB (100, 160, 200)
- Surface Pattern: None (glass is transparent)
- Description: Clear float glass, 6mm nominal

ARCH-Glazing-Double-LoE
- Class: Glass
- Shading: RGB (160, 210, 230) — slightly tinted
- Cut Pattern: Diagonal cross lines, 1mm spacing, blue-grey
- Description: Double glazed unit with Low-E coating, 28mm overall

ARCH-Metal-Aluminium-Anodised
- Class: Metal
- Shading: RGB (180, 180, 190)
- Cut Pattern: Solid Fill, RGB (150, 150, 160)
- Description: Extruded aluminium, anodised silver finish

**FINISH MATERIALS:**

ARCH-Finish-Paint-White
- Class: Finish
- Shading: RGB (245, 245, 245) — near white
- Cut Pattern: None (paint has no cut pattern)
- Description: Emulsion paint, white, 2 coats

ARCH-Finish-Carpet-Grey
- Class: Finish
- Shading: RGB (160, 160, 165)
- Cut Pattern: None
- Description: Commercial carpet tile, grey, 500x500mm

ARCH-Finish-Tile-Stone
- Class: Finish
- Shading: RGB (210, 205, 195) — light stone
- Cut Pattern: None
- Description: Stone tile, 600x600mm

ARCH-Finish-Timber-Oak
- Class: Wood
- Shading: RGB (180, 130, 70) — oak tone
- Cut Pattern: Diagonal lines 45°, 50mm spacing (model pattern)
- Description: Oak hardwood flooring, engineered

**SITE MATERIALS:**

SITE-Paving-Concrete
- Class: Concrete
- Shading: RGB (190, 185, 180)
- Cut Pattern: Solid Fill, grey
- Description: In-situ concrete paving, brushed finish

SITE-Soft-Landscape
- Class: Other
- Shading: RGB (100, 160, 80) — green
- Cut Pattern: Diagonal lines, 3mm, green
- Description: Soft landscape — turf and planting

SITE-Gravel-Crushed
- Class: Other
- Shading: RGB (200, 195, 185)
- Cut Pattern: Dot pattern, 5mm spacing
- Description: Crushed gravel, 20mm nominal size

**Confirmation Checklist:**
- All 15 materials created with correct names (DPC naming convention)
- All Identity fields filled (class, description)
- All Graphics tab settings configured (shading, cut pattern, surface pattern)
- Material Takeoff schedule created and shows all 15 materials
- File saved

Move to Lesson 12 — Text Types & Dimension Styles.`,
      },
    ],
    takeaways: [
      'Materials do three jobs: appearance in renders, hatch patterns in drawings, and data in material takeoff schedules — configure all three tabs',
      'Cut pattern is the hatch shown in section/plan — concrete = solid grey fill, steel = cross-hatch, glazing = diagonal fine lines',
      'DPC material naming: [Discipline]-[Type]-[Specific]-[Grade/Finish] — e.g., STR-Concrete-InSitu-C32/40',
      'ISO 19650 requires material identity data (name, class, manufacturer, description) for COBie handover — fill the Identity tab completely',
      'Create a Material Takeoff schedule immediately after building the library — it verifies every material is correctly named and schedulable',
    ],
    resource: {
      title: 'Autodesk Revit — Materials',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-materials',
    },
    prev: 'ps-10',
    next: 'ps-12',
  },

  // ─────────────────────────────────────────────────────────
  // ps-12: Text Types & Dimension Styles
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-12',
    num: 12,
    title: 'Text Types & Dimension Styles',
    topic: 'Annotation',
    cat: 'intermediate',
    readTime: '14 min',
    free: false,
    desc: 'Create the complete typographic hierarchy for the Dharren Park project — text types at every size, dimension styles with correct tick marks and units, and the annotation conventions that make drawings readable.',
    intro: `Typography is the layer of a drawing that communicates directly with the reader — every room name, every dimension, every note, every title. Inconsistent typography is one of the most common signs of an unprofessional drawing set. Titles in different sizes, dimensions with different tick marks, notes in different fonts across different sheets — all signal a project where no one took time to set standards.

This lesson establishes the complete typographic standard for the Dharren Park project. Every text type and dimension style is created once, configured correctly, and used consistently across all 24 lessons that follow.`,
    sections: [
      {
        title: 'EXPLAIN — Text Types in Revit',
        content: `Revit text is controlled by Text Types — type definitions that specify font, size, bold/italic, width factor, and leader properties. Each Type is available project-wide and ensures consistent typography.

**The typography hierarchy for professional drawings:**

Large Title (5mm): Sheet titles, key plan labels. Used rarely — for the most prominent text on a sheet.

Drawing Title (3.5mm): Individual drawing titles below each view on a sheet.

Heading (2.5mm): Section headings in schedules, notes headings, room name in room tags.

Body (2mm): Standard notes text, schedule content, most annotation.

Small (1.5mm): Secondary annotation, area labels, reference text.

Fine (1mm): Grid references, scale notes, minimal annotation.

**Font choice:**
Revit supports any Windows font. For professional architectural drawings, common choices:
- Arial — clean sans-serif, very readable at small sizes
- Calibri — slightly warmer than Arial, modern appearance
- Helvetica Neue — international standard for architectural drawings

For this course: we use Arial throughout. It is universally available, prints cleanly, and meets the readability requirements for technical drawings.

**Width factor:**
Revit text has a Width Factor setting that compresses or expands the text horizontally. 0.8 is a common professional setting — it gives text a slightly condensed appearance that is typical of architectural annotation.

**ISO 19650 and text:**
ISO 19650 does not specify fonts or text sizes — these follow national drawing conventions. What it does require is consistency. Using Revit Text Types enforces this consistency automatically.`,
      },
      {
        title: 'EXPLAIN — Dimension Styles',
        content: `Dimension Styles control how dimensions look — the tick mark style, text size, unit suffix, line extension, and text offset. Getting dimension styles right is critical because dimensions are the most frequently read annotation in a construction drawing.

**The key dimension settings:**

Tick Mark:
The symbol at each end of a dimension. Options: diagonal tick (most common in architectural practice), arrow, dot. ISO/international standard uses a diagonal tick. The tick should be clearly visible but not dominant.

Text Size:
Dimension text should be slightly smaller than drawing notes — typically 1.8mm or 2mm for construction drawings.

Line Extension:
How far the dimension line extends past the tick marks. Typically 1-2mm.

Text Offset:
The gap between the dimension line and the text. Typically 1mm.

Units:
For this project: Millimeters with no suffix (show "900" not "900mm"). The unit is established on the drawing title block.

Suppress Zeros:
For millimeter dimensions: suppress trailing zeros. Show "900" not "900.0" or "900.00."

**The three dimension types you need:**
1. Standard Linear — for all general dimensions (walls, openings, room sizes)
2. Fine Linear — smaller text for tight or detailed dimensions
3. Angular — for angles (roof pitches, ramp gradients)`,
      },
      {
        title: 'GUIDE — Creating Text Types and Dimension Styles',
        content: `**PART A — TEXT TYPES**

**Step 1 — Open the Text tool:**
Annotate tab → Text panel → Text
In the Type Selector (Properties panel, top dropdown), click "Edit Type."

**Step 2 — Duplicate the default type:**
In the Type Properties dialog: click Duplicate.
Name: DPC-Text-Body-2mm
Click OK.

**Step 3 — Configure the type:**
- Text Font: Arial
- Text Size: 2mm (type "2" — Revit converts to project units)
- Bold: No
- Italic: No
- Width Factor: 0.80
- Tab Size: 12mm
- Show Border: No
Click OK.

**Step 4 — Create all text types:**
Repeat the Duplicate process for each type:
- DPC-Text-Large-5mm (size: 5, bold: Yes)
- DPC-Text-Title-3.5mm (size: 3.5, bold: Yes)
- DPC-Text-Heading-2.5mm (size: 2.5, bold: Yes)
- DPC-Text-Body-2mm (size: 2, bold: No)
- DPC-Text-Small-1.5mm (size: 1.5, bold: No)
- DPC-Text-Fine-1mm (size: 1, bold: No)

**PART B — DIMENSION STYLES**

**Step 1 — Open the Dimension tool:**
Annotate tab → Dimension panel → Aligned
In Properties, click "Edit Type."

**Step 2 — Duplicate the default:**
Click Duplicate. Name: DPC-Dim-Standard
Click OK.

**Step 3 — Configure DPC-Dim-Standard:**
- Tick Mark: Diagonal (select from dropdown)
- Line Weight: 2
- Tick Mark Line Weight: 3
- Text Size: 2mm
- Text Offset: 1mm
- Read Convention: Horizontal
- Units Format: Millimeters, 0 decimal places, no suffix
- Suppress Spaces: Yes
- Witness Line Control: Fixed to dimension line
- Witness Line Length: 3mm
- Witness Line Gap: 1mm
Click OK.

**Step 4 — Create DPC-Dim-Fine:**
Duplicate DPC-Dim-Standard → name DPC-Dim-Fine
Change Text Size to 1.5mm
Click OK.

**Step 5 — Create DPC-Dim-Angular:**
Annotate → Dimension → Angular
Edit Type → Duplicate → name DPC-Dim-Angular
Text Size: 2mm, Units: Degrees, 2 decimal places
Click OK.

**Step 6 — Save (Ctrl+S).**`,
      },
      {
        title: 'PRACTICE — Configure Annotation for Dharren Park',
        content: `Create these text types and dimension styles in your DPC project file.

**TEXT TYPES — Create these 6 types:**

| Type Name | Font | Size | Bold | Width Factor | Use |
|---|---|---|---|---|---|
| DPC-Text-Large-5mm | Arial | 5mm | Yes | 0.80 | Sheet titles |
| DPC-Text-Title-3.5mm | Arial | 3.5mm | Yes | 0.80 | Drawing titles |
| DPC-Text-Heading-2.5mm | Arial | 2.5mm | Yes | 0.80 | Section headings |
| DPC-Text-Body-2mm | Arial | 2mm | No | 0.80 | Standard notes |
| DPC-Text-Small-1.5mm | Arial | 1.5mm | No | 0.80 | Secondary annotation |
| DPC-Text-Fine-1mm | Arial | 1mm | No | 0.80 | Minimal reference text |

**DIMENSION STYLES — Create these 3 types:**

DPC-Dim-Standard:
- Tick: Diagonal tick, weight 3
- Text: Arial 2mm, black
- Units: mm, 0 decimal places, no suffix
- Extension: 3mm line extension, 1mm gap
- Text offset: 1mm above dimension line

DPC-Dim-Fine:
- Same as Standard but text 1.5mm
- For tight or congested dimension areas

DPC-Dim-Angular:
- Text: Arial 2mm
- Units: Degrees, 2 decimal places
- Suffix: ° (degree symbol)

**SPOT ELEVATION STYLE:**
Annotate → Tag → Spot Elevation → Edit Type → Duplicate
Name: DPC-SpotElev-Standard
- Indicator: Triangle with line
- Text Size: 1.5mm
- Units: Meters, 3 decimal places (e.g., 4.500)
- Prefix: FFL (Finished Floor Level) for floor levels
- Prefix: SSL (Structural Slab Level) for structural levels

**ISO 19650 Note on Annotation:**
Consistent text and dimension standards are part of the information presentation requirements in ISO 19650. When every drawing in a set uses the same text types and dimension styles, the information is presented consistently — which is a requirement of the standard.

**Confirmation Checklist:**
- 6 text types created (Large, Title, Heading, Body, Small, Fine)
- All text types use Arial, width factor 0.80
- DPC-Dim-Standard, DPC-Dim-Fine, DPC-Dim-Angular created
- Spot Elevation style created
- Test a dimension in Level 1 plan — it should show DPC-Dim-Standard
- File saved

Move to Lesson 13 — View Templates.`,
      },
    ],
    takeaways: [
      'Typography hierarchy: Large (5mm) → Title (3.5mm) → Heading (2.5mm) → Body (2mm) → Small (1.5mm) → Fine (1mm)',
      'All DPC text types use Arial at width factor 0.80 — condensed text is the international standard for technical drawings',
      'Dimension tick style: diagonal tick is the ISO/international standard for architectural drawings',
      'Dimension units: millimeters, 0 decimal places, no suffix — "900" not "900mm" or "900.00"',
      'Spot elevations show as meters with 3 decimal places — "4.500" means 4500mm above ground floor FFL',
    ],
    resource: {
      title: 'Autodesk Revit — Text and Dimensions',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-text-dimensions',
    },
    prev: 'ps-11',
    next: 'ps-13',
  },

  // ─────────────────────────────────────────────────────────
  // ps-13: View Templates — Building the Full Set
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-13',
    num: 13,
    title: 'View Templates — Building the Full Set',
    topic: 'View Standards',
    cat: 'intermediate',
    readTime: '16 min',
    free: false,
    desc: 'Build the complete set of view templates for the Dharren Park project — so every floor plan, section, elevation, and detail is correctly configured the moment it is created.',
    intro: `View Templates are the most powerful tool in the Revit project setup toolkit. A View Template stores a complete view configuration — scale, detail level, visibility settings, annotation settings, discipline, and visual style — and applies it to any view with one click. With a complete set of View Templates, creating a new floor plan view takes 10 seconds and looks professional immediately. Without View Templates, every new view requires 10 minutes of manual configuration.

This lesson builds the complete DPC view template set for every drawing type in the project.`,
    sections: [
      {
        title: 'EXPLAIN — How View Templates Work',
        content: `A View Template is a named collection of view properties. When assigned to a view, the template controls those properties and prevents them from being manually changed (unless the template is removed or the property is excluded from template control).

**What a View Template controls:**

View Scale: 1:50, 1:100, 1:200, etc.
Detail Level: Coarse, Medium, or Fine
Visual Style: Wireframe, Hidden Line, Shaded, Realistic
Visibility/Graphics Overrides: which categories are visible, and how
Model Display: silhouette, transparency
Phase Filter: what phase of the project is shown
Discipline: Architecture, Structure, Mechanical, Electrical

**The workflow with View Templates:**

1. Create a new floor plan view for Level 2
2. Assign the "Arch-Plan-GA-100" View Template
3. The view immediately shows: 1:100 scale, Medium detail, correct VG settings for a GA plan
4. No manual configuration needed

**Without View Templates:**
1. Create a new floor plan view for Level 2
2. Manually set scale to 1:100
3. Manually set detail level to Medium
4. Manually configure VG to show the right categories
5. Manually set the Phase Filter
6. Repeat for every new view — 25+ views per project

**The DPC View Template naming convention:**
[Discipline]-[ViewType]-[Use]-[Scale]
Examples:
- Arch-Plan-GA-100 (Architecture, Plan, General Arrangement, 1:100)
- Arch-Sect-Standard-50 (Architecture, Section, Standard, 1:50)
- Arch-Elev-External-100 (Architecture, Elevation, External, 1:100)
- Arch-Detail-Standard-20 (Architecture, Detail, Standard, 1:20)
- Struct-Plan-GA-100 (Structure, Plan, General Arrangement, 1:100)`,
      },
      {
        title: 'EXPLAIN — The DPC View Template Matrix',
        content: `The Dharren Park project needs these view types across all drawings:

**Plan Views:**
GA Plans (1:100): The primary floor plan at 1:100 scale for general arrangement drawings. Shows walls, doors, windows, furniture, room names. Most commonly used plan type.

GA Plans (1:200): Overview plans for larger drawings or site context. Less detail.

Enlarged Plans (1:50): Detailed plans of specific areas — toilets, stair cores, reception. More detail at larger scale.

Structural Plans (1:100): Shows structural elements — columns, slabs, beams. Furniture and finishes hidden.

Reflected Ceiling Plans (1:100): Shows ceiling, lighting, and services from below.

**Elevation Views:**
External Elevations (1:100): The four facade views of the building.
Internal Elevations (1:50): Detailed views of specific rooms.

**Section Views:**
Building Sections (1:100): Full building cross sections.
Wall Sections (1:20): Detailed sections through the facade or specific wall junctions.

**Detail Views:**
Details (1:5, 1:10, 1:20): Close-up details of construction junctions.

**3D Views:**
Coordination 3D: For clash detection and coordination. Wireframe or hidden line.
Presentation 3D: For client presentations. Shaded or realistic.`,
      },
      {
        title: 'GUIDE — Creating View Templates',
        content: `**Step 1 — Open View Templates:**
View tab → View Templates → Manage View Templates
The Manage View Templates dialog opens showing existing templates (there may be default ones — we will create new ones).

**Step 2 — Create the first template (Arch-Plan-GA-100):**
Click "Duplicate" (or "New" if available)
Name: Arch-Plan-GA-100
Set these properties:
- View Scale: 1:100
- Scale Value: 100
- Display Model: Normal
- Detail Level: Medium
- Parts Visibility: Show Original
- V/G Overrides Model: (customize — see Practice section)
- V/G Overrides Annotation: Yes (show all annotation)
- V/G Overrides Analytical Model: No (hide analytical)
- V/G Overrides Import: No (hide imported CAD)
- Model Display: By Discipline
- Shadows: Off
- Sketchy Lines: Off
- Lighting: No
- Photographic Exposure: No
- Background: No
- Phase Filter: Show New (for new construction)
- Phase: New Construction
- Discipline: Architecture
Click OK.

**Step 3 — Repeat for each template in the Practice section below.**

**Step 4 — Apply a template to a view:**
To test: Right-click a floor plan view in the Project Browser → Properties → View Template → select Arch-Plan-GA-100 → OK.
The view immediately updates to 1:100, Medium detail, correct VG settings.

**Step 5 — Assign templates to existing views:**
In the Project Browser, right-click Level 1 floor plan → Properties → View Template → Arch-Plan-GA-100.
Do the same for all floor plan levels.

**Step 6 — Save (Ctrl+S).**`,
      },
      {
        title: 'PRACTICE — Build the Complete DPC View Template Set',
        content: `Create these view templates in your DPC project file.

**PLAN VIEW TEMPLATES:**

Arch-Plan-GA-100 (General Arrangement, 1:100):
- Scale: 1:100, Detail Level: Medium
- Show: Walls, Columns, Floors, Doors, Windows, Furniture, Casework, Stairs, Railings, Rooms, Grids, Levels
- Hide: Structural Framing, MEP categories, Reference Planes, Scope Boxes
- Phase: New Construction, Phase Filter: Show New

Arch-Plan-GA-200 (Overview, 1:200):
- Scale: 1:200, Detail Level: Coarse
- Show: Walls, Columns, Floors, Rooms, Grids
- Hide: Furniture, Casework, detailed annotation
- Phase: New Construction

Arch-Plan-Enlarged-50 (Enlarged Plan, 1:50):
- Scale: 1:50, Detail Level: Fine
- Show: All architectural categories, Furniture, Casework, Equipment
- Phase: New Construction

Arch-Plan-RCP-100 (Reflected Ceiling Plan, 1:100):
- Scale: 1:100, Detail Level: Medium
- Show: Ceilings, Lighting Fixtures, Mechanical Equipment (diffusers), Grids
- Hide: Walls (reduce weight), Furniture, Floor categories
- Phase: New Construction

Struct-Plan-GA-100 (Structural GA, 1:100):
- Scale: 1:100, Detail Level: Medium
- Discipline: Structural
- Show: Structural Columns, Structural Framing, Floors, Grids
- Hide: Furniture, Casework, Doors, Windows, Ceilings
- Phase: New Construction

**ELEVATION VIEW TEMPLATES:**

Arch-Elev-External-100 (External Elevation, 1:100):
- Scale: 1:100, Detail Level: Medium
- Show: All architectural, Topography, Site
- Hide: Furniture, Grids
- Phase: New Construction

Arch-Elev-Internal-50 (Internal Elevation, 1:50):
- Scale: 1:50, Detail Level: Fine
- Show: All architectural, Furniture, Casework, Equipment
- Phase: New Construction

**SECTION VIEW TEMPLATES:**

Arch-Sect-Building-100 (Building Section, 1:100):
- Scale: 1:100, Detail Level: Medium
- Show: All architectural categories, Structural elements
- Phase: New Construction

Arch-Sect-Wall-20 (Wall Section, 1:20):
- Scale: 1:20, Detail Level: Fine
- Show: All categories including insulation, finishes, structural
- Phase: New Construction

**3D VIEW TEMPLATES:**

Arch-3D-Coordination (Coordination 3D):
- Visual Style: Wireframe
- Detail Level: Coarse
- Show: All architectural, linked structural and MEP

Arch-3D-Presentation (Presentation 3D):
- Visual Style: Shaded (with edges)
- Detail Level: Medium
- Show: All architectural categories

**Confirmation Checklist:**
- 11 view templates created
- All templates have correct scale, detail level, and discipline
- Templates applied to Level 1 floor plan — verifies configuration
- Arch-Plan-GA-100 applied to all floor plan views (LB1 through LRF)
- File saved

Move to Lesson 14 — Browser Organization & View Naming.`,
      },
    ],
    takeaways: [
      'View Templates store scale, detail level, VG settings, phase filter, and discipline — applying one sets up a view completely in one click',
      'DPC naming: [Discipline]-[ViewType]-[Use]-[Scale] — Arch-Plan-GA-100 means Architecture, Plan, General Arrangement, 1:100',
      'The 11 DPC templates cover all drawing types: GA plans, enlarged plans, RCP, structural plans, external/internal elevations, building/wall sections, coordination and presentation 3D',
      'Apply Arch-Plan-GA-100 to all floor plan views immediately after creating the templates — every level view should look correct with no manual overrides',
      'Phase Filter in view templates: use "Show New" for new construction projects — this hides any existing elements from the view automatically',
    ],
    resource: {
      title: 'Autodesk Revit — View Templates',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-view-templates',
    },
    prev: 'ps-12',
    next: 'ps-14',
  },

  // ─────────────────────────────────────────────────────────
  // ps-14: Browser Organization & View Naming
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-14',
    num: 14,
    title: 'Browser Organization & View Naming',
    topic: 'Organization',
    cat: 'intermediate',
    readTime: '12 min',
    free: false,
    desc: 'Organize the Project Browser using a professional scheme and rename all views to the ISO 19650-aligned naming convention — so any team member can find any view instantly.',
    intro: `The Project Browser is where the entire team navigates the model. On a project with 200+ views — floor plans for 8 levels, 4 elevations, 12 sections, 30 details, coordination views, working views — an unorganized browser becomes a serious productivity problem. Team members waste time searching for views. Wrong views get placed on sheets. Duplicate views accumulate.

This lesson organizes the Dharren Park Project Browser using a professional scheme and establishes the view naming convention that every team member follows throughout the project.`,
    sections: [
      {
        title: 'EXPLAIN — Browser Organization Schemes',
        content: `The Project Browser can be organized using Browser Organization Schemes — rules that group and sort views by their properties. The scheme controls how views are grouped (by discipline, by view type, by phase) and how they are sorted within those groups.

**Default scheme:**
Revit groups views by type (Floor Plans, Ceiling Plans, 3D Views, Elevations, Sections, Legends, Schedules, Sheets). This is workable for small projects with few views but becomes unwieldy on large projects.

**Professional scheme for the DPC project:**
Group 1 (primary): Discipline (Architecture, Structure, MEP, Coordination)
Group 2 (secondary): View Type (Plans, Elevations, Sections, Details, 3D)
Group 3 (tertiary): Level or Location

This hierarchy means:
- All architectural plans are grouped together
- Within architectural plans, views are sorted by level (LB1, L00, L01, L02...)
- Working views (for modeling, not for sheets) are in a separate group

**Working views vs. sheet views:**
In professional practice, views are classified as:
- Sheet Views: views that will be placed on drawing sheets and issued to clients
- Working Views: views used for modeling and coordination, never issued

Separating these in the browser prevents working views from accidentally being placed on sheets and issued. Use a view name prefix — "[W]" for working views — to separate them in the browser.`,
      },
      {
        title: 'EXPLAIN — View Naming Convention',
        content: `Every view in the Dharren Park project follows this naming convention:

**For sheet views (views that go on drawing sheets):**
[Level Code] [View Type] - [Description]

Examples:
- L00 Plan - General Arrangement
- L01 Plan - General Arrangement
- L02 Plan - Enlarged Core
- LRF Plan - Roof Layout
- North Elevation - External
- Section A-A - Building Section
- Detail 01 - Curtain Wall Head

**For working views (modeling and coordination only):**
[W] [Description]

Examples:
- [W] L00 Working Plan
- [W] Structural Coordination
- [W] MEP Coordination
- [W] 3D Full Building

The [W] prefix keeps working views grouped at the top or bottom of the browser (depending on sort direction) and makes them immediately identifiable as non-issued views.

**Why consistent naming matters:**
When a project manager asks "can you send me the Level 3 GA plan?" — the view should be immediately findable as "L03 Plan - General Arrangement." Not "Floor Plan 3" or "Level 3 copy 2" or "L03 GA 1-100 REVISED."

Under ISO 19650, the view names in the model correlate to the drawing titles on issued sheets. Consistent naming from the start of the project maintains this correlation throughout.`,
      },
      {
        title: 'GUIDE — Setting Up Browser Organization',
        content: `**Step 1 — Open Browser Organization:**
View tab → Windows panel → User Interface → Browser Organization
The Browser Organization dialog opens.

**Step 2 — Create a new scheme:**
Click New. Name: DPC-Standard
Click OK.

**Step 3 — Configure the Folders tab (grouping):**
In the DPC-Standard scheme properties:
- Group by: Discipline (from the dropdown)
- Then by: Family and Type (View Type)
- Then by: Associated Level

This creates the three-level hierarchy:
Architecture → Plans → Level by Level

**Step 4 — Configure the Sort tab:**
- Sort by: View Name (ascending A-Z)
- This sorts views alphabetically within each group

**Step 5 — Apply the scheme:**
Click OK. In the Browser Organization dialog, select DPC-Standard → Apply → OK.

The Project Browser immediately reorganizes to show the new grouping.

**Step 6 — Verify the grouping:**
You should see in the Project Browser:
- Architecture
  - Floor Plans
    - Level 1 (or whatever name before renaming)
  - 3D Views
  - Elevations
  - Sections

**Step 7 — Rename all existing views:**
Right-click each view → Rename → apply the DPC naming convention.

Example: Right-click "Level 1" floor plan → Rename → "L00 Plan - General Arrangement"

**Step 8 — Create working view copies:**
For each level, duplicate the GA plan view as a working view:
Right-click "L00 Plan - General Arrangement" → Duplicate View → Duplicate
Right-click the duplicate → Rename → "[W] L00 Working Plan"

**Step 9 — Save (Ctrl+S).**`,
      },
      {
        title: 'PRACTICE — Organize the DPC Project Browser',
        content: `Apply these naming conventions and organization to your DPC project file.

**Browser Organization Scheme: DPC-Standard**
- Group 1: Discipline
- Group 2: Family and Type (View Type)
- Group 3: Associated Level
- Sort: View Name, ascending

**Rename all current views:**

| Current Name | New Name |
|---|---|
| Level 1 (floor plan) | L00 Plan - General Arrangement |
| Level 2 (floor plan) | L01 Plan - General Arrangement |
| {3D} | [W] 3D Full Building |
| East Elevation | East Elevation - External |
| North Elevation | North Elevation - External |
| South Elevation | South Elevation - External |
| West Elevation | West Elevation - External |

**Create these additional views:**

Working views (duplicate existing, prefix with [W]):
- [W] L00 Working Plan (duplicate of L00 GA plan)
- [W] Coordination 3D (new 3D view, Wireframe style)

**Create floor plan views for all 8 levels:**
For each level from LB1 to LRF, create or rename a floor plan view:
- LB1 Plan - General Arrangement
- L00 Plan - General Arrangement (already exists)
- L01 Plan - General Arrangement
- L02 Plan - General Arrangement
- L03 Plan - General Arrangement
- L04 Plan - General Arrangement
- L05 Plan - General Arrangement
- LRF Plan - Roof Layout

**Apply view templates to all plan views:**
Right-click each plan view → Properties → View Template → Arch-Plan-GA-100

**Create elevation views:**
If not already present:
- North Elevation - External
- South Elevation - External
- East Elevation - External
- West Elevation - External

Apply View Template: Arch-Elev-External-100 to all.

**Expected browser structure after this lesson:**
Architecture
  Floor Plans
    LB1 Plan - General Arrangement
    L00 Plan - General Arrangement
    L01 Plan - General Arrangement
    L02 Plan - General Arrangement
    L03 Plan - General Arrangement
    L04 Plan - General Arrangement
    L05 Plan - General Arrangement
    LRF Plan - Roof Layout
    [W] L00 Working Plan
  3D Views
    [W] 3D Full Building
    [W] Coordination 3D
  Elevations
    East Elevation - External
    North Elevation - External
    South Elevation - External
    West Elevation - External

**Confirmation Checklist:**
- DPC-Standard browser organization scheme created and applied
- All floor plan views renamed per convention
- All 8 levels have a GA plan view
- Arch-Plan-GA-100 template applied to all GA plans
- Working views prefixed with [W]
- All elevation views named per convention
- File saved

Move to Lesson 15 — Loading & Organizing Families.`,
      },
    ],
    takeaways: [
      'Browser Organization Scheme: Group by Discipline → View Type → Level — three levels of hierarchy for a 200+ view project',
      'View naming: [Level Code] [View Type] - [Description] for sheet views. [W] prefix for working views that are never issued',
      'Create a duplicate working view for every level — [W] L00 Working Plan — keeps the clean GA plan separate from day-to-day modeling mess',
      'Apply Arch-Plan-GA-100 template to all 8 level GA plans immediately — every plan should look professional without manual configuration',
      'ISO 19650 consistency requirement: view names in the model match drawing titles on issued sheets — consistent from day one',
    ],
    resource: {
      title: 'Autodesk Revit — Browser Organization',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-browser-organization',
    },
    prev: 'ps-13',
    next: 'ps-15',
  },

  // ─────────────────────────────────────────────────────────
  // ps-15: Loading & Organizing Families
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-15',
    num: 15,
    title: 'Loading & Organizing Families',
    topic: 'Content',
    cat: 'intermediate',
    readTime: '13 min',
    free: false,
    desc: 'Load the essential family set for the Dharren Park project — tag families, annotation symbols, a titleblock, and placeholder content families — and organize them correctly in the project browser.',
    intro: `A Revit project with no loaded families cannot produce professional drawings. Tags cannot annotate elements, sheets have no titleblock, sections have no section marks, and north arrows are missing from site plans. Loading the right families at project setup — before anyone starts modeling — means the team has everything they need from day one.

This lesson loads the essential annotation and documentation families for the Dharren Park project and explains how to manage families throughout the project lifecycle.`,
    sections: [
      {
        title: 'EXPLAIN — The Essential Family Set',
        content: `Every architectural Revit project needs these families loaded before modeling begins:

**Annotation families:**
- Section mark (the triangle/symbol that appears at section cut lines)
- Elevation mark (the target circle for elevation references)
- Callout head (the bubble for detail callouts)
- North arrow (for site plans and orientation)
- Revision cloud (for drawing revisions)

**Tag families:**
- Door tag (reads the door Mark number)
- Window tag (reads the window Mark number)
- Room tag (reads room Number and Name)
- Area tag (reads area names and values)
- Level head (the level mark family)
- Grid head (the grid bubble family)
- Spot elevation (the elevation indicator)
- Structural column tag (for structural plans)

**Titleblock:**
The sheet border and title block that appears on every issued drawing sheet. The titleblock is itself a family (loaded into the project) and contains scheduled fields that read from Project Information.

**Content families (placeholders):**
At this stage, load basic placeholder families for the elements the team will model:
- Generic walls (already exist as system families)
- Basic door (placeholder — will be replaced with DPC families later)
- Basic window (placeholder)

**Where families come from:**
1. Revit's built-in library (installed with Revit at C:\\ProgramData\\Autodesk\\RVT 20XX\\Libraries\\)
2. Your office family library (built in the Revit Family Creation course)
3. Manufacturer websites (use with caution — quality varies)

For this course, we load from the Revit built-in library and create simple custom versions where needed.`,
      },
      {
        title: 'EXPLAIN — Managing Families in the Project',
        content: `Once families are loaded, they appear in the Project Browser under Families → [Category]. Managing this list is an ongoing project task.

**The Purge Unused command:**
Manage → Purge Unused removes families (and types within families) that are not placed in the project and not referenced by any view or schedule. Run this regularly — especially before sharing the model — to keep the file size under control.

WARNING: Only purge when you are sure unused families are genuinely not needed. Purging a tag family that has been removed from all views but is still needed removes it from the project completely. It must be reloaded.

**Reloading families:**
When a family is updated (a new version from the office library), reload it:
Insert → Load Family → navigate to the new .rfa → Open → choose Overwrite (to replace the old version).

All placed instances update to the new version automatically.

**Family version discipline:**
Every family loaded into the project should be from the office library (or Revit's built-in library). Never load families directly from a manufacturer's website into a production model without reviewing them against quality standards first. Poor quality families — with excessive geometry, embedded textures, or incorrect categories — degrade model performance for the entire team.

**ISO 19650 and content:**
ISO 19650 Part 1 Section 12 covers Level of Information Need (LOIN) — what level of detail and data is required in the model at each stage. Families loaded into the project should match the LOIN for the current project stage. At Schematic Design (our current stage for Dharren Park), placeholder families with basic geometry are appropriate. At Construction Documents, full-detail families with complete data parameters are required.`,
      },
      {
        title: 'GUIDE — Loading Families into the DPC Project',
        content: `**Step 1 — Load annotation families:**
Insert tab → Load Family
Navigate to: C:\\ProgramData\\Autodesk\\RVT 20XX\\Libraries\\[Region]\\Annotations\\

Load these families (adjust path for your Revit version):
- Section Head Arrow.rfa (or Section Mark)
- Elevation Mark Body.rfa
- Callout Head.rfa
- North Arrow 1.rfa (or your preferred north arrow style)
- Level Head - Circle.rfa

**Step 2 — Load tag families:**
Insert → Load Family → Annotations → Tags
Load:
- Door Tag.rfa
- Window Tag.rfa
- Room Tag.rfa
- Generic Model Tag.rfa

**Step 3 — Load the titleblock:**
Insert → Load Family → Titleblocks
Load: A1 Metric.rfa (or A0 Metric for large format)

Note: We will customise the titleblock in Lesson 16. For now, load the placeholder.

**Step 4 — Load basic content families:**
Insert → Load Family → Architecture → Doors
Load: Single-Flush.rfa (the simplest standard door — placeholder)

Insert → Load Family → Architecture → Windows
Load: Fixed.rfa (simple fixed window — placeholder)

**Step 5 — Verify in Project Browser:**
Expand the Families section in the Project Browser:
- Annotation Symbols → should show all annotation families
- Doors → Single-Flush
- Windows → Fixed
- Titleblocks → A1 Metric (or A0 Metric)
- Tags → all tag families

**Step 6 — Set the active tag families:**
For each tag category, set which family Revit uses by default when you use "Tag All Not Tagged":
Annotate → Tag All Not Tagged → this uses whatever tag family is loaded for each category.

**Step 7 — Save (Ctrl+S).**`,
      },
      {
        title: 'PRACTICE — Load and Verify the DPC Family Set',
        content: `Load these families into your DPC project file.

**ANNOTATION FAMILIES TO LOAD:**

| Family | Location | Purpose |
|---|---|---|
| Section Mark (any style) | Annotations/Architectural | Section references |
| Elevation Mark (any style) | Annotations/Architectural | Elevation references |
| Callout Head (any style) | Annotations/Architectural | Detail callouts |
| North Arrow (any style) | Annotations/Architectural | Site plans |
| Level Head - Circle | Annotations/Architectural | Level markers |

**TAG FAMILIES TO LOAD:**

| Family | Category | Reads |
|---|---|---|
| Door Tag | Doors | Mark |
| Window Tag | Windows | Mark |
| Room Tag | Rooms | Number + Name |
| Generic Annotation Tag | Generic Models | Mark |

**TITLEBLOCK TO LOAD:**
A1 Metric (594 x 841mm) — standard A1 titleblock
Or A0 Metric (841 x 1189mm) if your office uses A0

**BASIC CONTENT FAMILIES TO LOAD:**

| Family | Category | Purpose |
|---|---|---|
| Single-Flush | Doors | Placeholder door |
| Fixed | Windows | Placeholder window |
| Table-Coffee 48x96in | Furniture | Test furniture placement |

**AFTER LOADING — Run a verification:**
1. Place a Single-Flush door in a wall in the L00 plan
2. Tag it: Annotate → Tag by Category → click the door
3. The door tag should appear showing "1" (or whatever Mark value)
4. Delete the test door and tag after verifying

**Create a simple test section:**
View → Section → draw a section through the L00 plan
The section should show a section mark at both ends with correct symbol
Right-click section → Go to View → verify the section shows the building cut
Rename the section: "Section A-A - Building Section (Test)"

**Confirmation Checklist:**
- All annotation families loaded and visible in Project Browser
- All tag families loaded
- Titleblock loaded
- Basic door and window placeholder families loaded
- Test door tagged successfully (tag reads the Mark value)
- Test section created with correct section mark
- File saved

Move to Lesson 16 — Sheet Setup & Titleblock Configuration.`,
      },
    ],
    takeaways: [
      'Load annotation families (section mark, elevation mark, callout head, north arrow, level head) before any modeling begins — the team needs these from day one',
      'Tag families are separate from content families — a door tag reads door data, but the door itself is a different family',
      'LOIN (Level of Information Need) per ISO 19650: at Schematic Design, placeholder families with basic geometry are appropriate — detailed families come at Construction Documents stage',
      'Purge Unused (Manage → Purge Unused) removes unplaced families and reduces file size — run before every model share or issue',
      'Never load manufacturer families directly into production without quality review — poor families degrade performance for the entire team',
    ],
    resource: {
      title: 'Autodesk Revit — Loading Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-loading-families',
    },
    prev: 'ps-14',
    next: 'ps-16',
  },

  // ─────────────────────────────────────────────────────────
  // ps-16: Sheet Setup & Titleblock Configuration
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-16',
    num: 16,
    title: 'Sheet Setup & Titleblock Configuration',
    topic: 'Sheets',
    cat: 'intermediate',
    readTime: '15 min',
    free: false,
    desc: 'Create the complete sheet set for the Dharren Park project, configure the titleblock to read from Project Information, and set up the revision system — so every issued drawing is correctly formatted from the first issue.',
    intro: `Sheets are the final output of the Revit project — the drawing set that gets issued to contractors, submitted for planning approval, and handed over to the client. A correctly set up sheet environment means every drawing sheet has consistent formatting, correct title block information, and a proper revision system. A poorly set up sheet environment means manual editing of titleblock text on every sheet, inconsistent drawing numbers, and revision tracking done outside of Revit.

This lesson completes the Intermediate tier by setting up the full sheet environment for Dharren Park — the last major configuration step before the Advanced tier covers data and parameters.`,
    sections: [
      {
        title: 'EXPLAIN — Sheets in Revit',
        content: `A Sheet in Revit is a drawing board — it has a size (A1, A0), a titleblock, and one or more views placed on it as viewports. When you print or export to PDF, you print the sheet — the titleblock and the views together.

**The sheet number system:**
Sheets are identified by a Sheet Number and a Sheet Name. The sheet number is the drawing number — what appears in the titleblock, in the drawing register, and in reference tags.

**ISO 19650 drawing numbering:**
The ISO 19650 naming convention for drawings follows the same structure as file naming. For the DPC project:

[Project]-[Originator]-[Zone]-[Level]-[Type]-[Role]-[Classification]-[Number]

Applied to drawings:
DPC2025-DPA-ZZ-L00-DR-ARCH-PLAN-GA-001
= Dharren Park Commercial, DPA originator, all zones, Ground Floor, Drawing, Architecture, Plan, General Arrangement, drawing 001

**Simplified sheet numbering (practical approach):**
Full ISO 19650 drawing numbers are long. In practice, drawing registers use a simplified version:
- A-001: Architecture, drawing 001 (general/site)
- A-100 series: Architecture, floor plans
- A-200 series: Architecture, roof/ceiling plans
- A-300 series: Architecture, elevations
- A-400 series: Architecture, sections
- A-500 series: Architecture, schedules
- A-600 series: Architecture, details

This simplified system is widely used in professional practice alongside ISO 19650 file naming. The full ISO name is the file name; the simplified number is the drawing number on the sheet.`,
      },
      {
        title: 'EXPLAIN — Titleblocks and Project Information',
        content: `A titleblock in Revit is a family (.rfa) that is loaded into the project and placed on each sheet. The titleblock contains:

**Static elements (never change):**
- The firm's logo (as an image or vector graphic embedded in the titleblock family)
- The box layout (borders, dividing lines, label text)
- Fixed compliance stamps or certification marks

**Scheduled fields (read from the project automatically):**
These are labels in the titleblock family that read from specific parameters:
- Sheet Number → reads the Sheet Number property of the sheet
- Sheet Name → reads the Sheet Name property
- Project Name → reads from Project Information → Project Name
- Project Number → reads from Project Information → Project Number
- Client Name → reads from Project Information → Client Name
- Scale → reads from the view viewport placed on the sheet
- Revision → reads from the Revision schedule linked to the sheet
- Date → reads from the Revision table (issue date)
- Drawn By → reads from the Sheet's Designed By property
- Checked By → reads from the Sheet's Checked By property

When you filled in Project Information in Lesson 3, you were filling in the data that the titleblock reads automatically. Every sheet shows "Dharren Park Commercial Centre" in the title field without you typing it on each sheet.

**Customising the titleblock:**
The A1 Metric titleblock loaded in Lesson 15 uses Autodesk's default layout. For professional practice, offices build their own titleblock families with their branding. Building a custom titleblock family is covered in the Revit Family Creation course (rf-15). For this course, we use the default titleblock and customize it minimally.`,
      },
      {
        title: 'GUIDE — Creating Sheets and Setting Up Revisions',
        content: `**PART A — CREATE SHEETS**

**Step 1 — Create the first sheet:**
View tab → Sheet Composition panel → Sheet
In the "New Sheet" dialog:
- Select a title block: A1 Metric (or whichever you loaded)
- Click OK

A new sheet appears (A101 by default).

**Step 2 — Set the sheet number and name:**
In Properties panel (with the sheet selected or from the Project Browser):
- Sheet Number: A-100
- Sheet Name: Ground Floor - General Arrangement

**Step 3 — Place a view on the sheet:**
In the Project Browser, drag "L00 Plan - General Arrangement" from the Views section onto the sheet canvas.
The view appears as a viewport on the sheet. Position it correctly on the sheet.

**Step 4 — Set the viewport scale:**
If needed, select the viewport → Properties → Scale → 1:100 (should already be set from the view template).

**Step 5 — Add a view title:**
Below the viewport, there should be a view title annotation (showing the view name and scale). This is placed automatically if your view template includes it. If not: Annotate → Symbol → View Title family.

**PART B — SET UP REVISIONS**

**Step 6 — Open Revision Settings:**
View tab → Sheet Composition panel → Revisions
The Sheet Issues/Revisions dialog opens.

**Step 7 — Create the first revision:**
Click Add Row.
- Sequence: 1
- Numbering: Alphanumeric → P01 (P = Preliminary, 01 = first issue)
- Date: 2025-06-01
- Description: Preliminary Issue for Review
- Issued: Checked (mark as issued)

**Step 8 — Create the drawing issue sequence:**

For ISO 19650, the suitability code system defines drawing status:
- S0: Work in progress (not for issue)
- S1: Suitable for coordination
- S2: Suitable for information
- S3: Suitable for review and comment
- S4: Suitable for procurement
- S5: Suitable for construction
- S6: As-built / record
- S7: Archived

Our first issue will be S2 (suitable for information — a preliminary issue).

In the Revisions dialog, add:
- P01: Preliminary Issue S2 — 2025-06-01
Click OK.

**PART C — APPLY REVISION TO SHEET**

**Step 9 — Add the revision to a sheet:**
Select the sheet → Properties → Revisions on Sheet → Edit → check P01 → OK.
The titleblock should now show P01 in the revision table.

**Step 10 — Save (Ctrl+S).**`,
      },
      {
        title: 'PRACTICE — Build the Complete DPC Sheet Set',
        content: `Create these sheets in your DPC project file.

**SHEETS TO CREATE:**

| Sheet Number | Sheet Name | View to Place | Scale |
|---|---|---|---|
| A-001 | Key Plan | [W] L00 Working Plan | 1:500 |
| A-100 | Basement - General Arrangement | LB1 Plan - GA | 1:100 |
| A-101 | Ground Floor - General Arrangement | L00 Plan - GA | 1:100 |
| A-102 | Level 1 - General Arrangement | L01 Plan - GA | 1:100 |
| A-103 | Level 2 - General Arrangement | L02 Plan - GA | 1:100 |
| A-104 | Level 3 - General Arrangement | L03 Plan - GA | 1:100 |
| A-105 | Level 4 - General Arrangement | L04 Plan - GA | 1:100 |
| A-106 | Level 5 - General Arrangement | L05 Plan - GA | 1:100 |
| A-107 | Roof Layout | LRF Plan - Roof Layout | 1:100 |
| A-300 | North and South Elevations | North + South Elevations | 1:100 |
| A-301 | East and West Elevations | East + West Elevations | 1:100 |
| A-400 | Building Section A-A | Section A-A | 1:100 |
| A-500 | Door Schedule | (schedule view) | N/A |
| A-501 | Room Data Schedule | (schedule view) | N/A |

**REVISION SEQUENCE:**

| Code | Description | Date | Status |
|---|---|---|---|
| P01 | Preliminary Issue — Schematic Design | 2025-06-01 | S2 |
| P02 | Revised Preliminary — Review Comments | (TBD) | S3 |
| C01 | Construction Issue 1 | (TBD) | S5 |

**Create a Sheet List schedule:**
View → Schedules → Sheet List
Add fields: Sheet Number, Sheet Name, Drawn By, Checked By, Current Revision
Apply to a sheet (A-001 or a separate index sheet)

**Set the Drawn By field on all sheets:**
Select each sheet → Properties → Designed By → [Your Name]

**ISO 19650 Note on Drawing Status:**
The suitability code (S2, S3, S5) appears in the titleblock beside the revision number. This tells the recipient exactly what they can use the drawing for. A contractor receiving S2 drawings knows they are for information only — not for construction. This is a key ISO 19650 information management requirement.

**Confirmation Checklist:**
- All 14 sheets created with correct numbers and names
- All views placed on correct sheets
- Titleblock on every sheet reads Project Information correctly (check Project Name and Number)
- Revision P01 created and applied to all sheets
- Sheet List schedule created
- Drawn By field filled on all sheets
- File saved (Ctrl+S)

You have completed the Intermediate tier of the Revit Project Setup course. Your Dharren Park project file now has:
- Professional line weights and object styles
- 15 core materials with correct cut patterns
- Complete typography hierarchy (6 text types, 3 dimension styles)
- 11 view templates covering all drawing types
- Organized project browser with consistent naming
- Essential families loaded
- Complete sheet set with ISO 19650 revision system

Move to Lesson 17 — Shared Parameters (Advanced tier begins).`,
      },
    ],
    takeaways: [
      'Sheet numbers for DPC: A-100 series (plans), A-200 (RCP), A-300 (elevations), A-400 (sections), A-500 (schedules), A-600 (details)',
      'Titleblock scheduled fields read automatically from Project Information — all the data you entered in Lesson 3 now appears on every sheet',
      'ISO 19650 suitability codes: S2 (for information), S3 (for review), S5 (for construction) — these appear in the revision table on each sheet',
      'Create a Sheet List schedule immediately — it becomes the drawing register that tracks every sheet in the project',
      'Apply revision P01 to all sheets before the first issue — every sheet must show its current status per ISO 19650 information management requirements',
    ],
    resource: {
      title: 'Autodesk Revit — Sheets and Titleblocks',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-sheets-titleblocks',
    },
    prev: 'ps-15',
    next: 'ps-17',
  },
];
