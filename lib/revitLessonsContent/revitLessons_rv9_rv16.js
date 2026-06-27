// ============================================================
// REVIT LESSONS DATA — rv-9 through rv-16 (INTERMEDIATE)
// Merge these entries into your lib/revitLessonsData.js array
// cat: 'intermediate' — accessible to Pro+ plans
// ============================================================

export const revitLessons_rv9_rv16 = [

  // ─────────────────────────────────────────────────────────
  // rv-9: Doors, Windows & Component Families
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-9',
    num: 9,
    title: 'Doors, Windows & Component Families',
    topic: 'BIM Modeling',
    cat: 'intermediate',
    readTime: '16 min',
    free: false,
    desc: 'Place, configure, and customize doors and windows in Revit — and understand how component families work so you can load, swap, and manage any hosted element.',
    intro: `Doors and windows are among the most frequently placed elements in any architectural model. In Revit they are Component Families — loadable .rfa files hosted by a wall — and understanding how they work unlocks a much broader skill: managing any component family in your project.

This lesson covers everything from placing your first door to controlling instance parameters, swapping types, tagging for schedules, and understanding the host relationship that makes doors and windows behave differently from walls and floors.`,
    sections: [
      {
        title: 'Placing Doors & Windows',
        content: `**Doors:**
Architecture tab → Build panel → Door (shortcut: DR). Revit immediately prompts you to click on a wall — doors and windows are wall-hosted, meaning they cannot exist without a host wall.

Click anywhere on a wall to place the door. Before clicking, watch the preview: the door swings and hand (left/right) update as you move along the wall. The door automatically cuts a rectangular opening in the wall.

**Controlling Hand & Swing Before Placing:**
- Press Spacebar to flip the door hand (left-hand vs right-hand)
- Move the cursor to the inside or outside of the wall to control which face the door opens toward
- Both can also be changed after placement using the flip arrows that appear when the door is selected

**Windows:**
Architecture tab → Build panel → Window (shortcut: WN). Same wall-hosted behavior. The Sill Height parameter in Properties controls how far above the floor level the window sits.

**Type Selector:**
Before placing, use the Type Selector dropdown in the Properties panel to choose the door or window type (size and style). A "Single-Flush: 900 x 2100mm" is a different type from "Single-Flush: 800 x 2100mm" — same family, different type parameters.

**Snapping to Wall Center:**
Revit shows a temporary dimension as you move along the wall. You can snap to the wall midpoint, or after placing, click the blue dimension and type an exact offset from the wall end.`,
      },
      {
        title: 'Instance vs. Type Parameters for Doors & Windows',
        content: `**Type Parameters (Edit Type — affect all doors of this type):**

| Parameter | Description |
|---|---|
| Width | Opening width — changing this moves all instances of this type |
| Height | Opening height |
| Frame Width / Thickness | Frame profile dimensions |
| Frame Material | Material used for rendering and schedules |
| Construction Type | Descriptive field for specs |

**Instance Parameters (affect only this door):**

| Parameter | Description |
|---|---|
| Sill Height (windows) | Height of window sill above floor level |
| Head Height | Top of opening above floor — often driven by type height |
| Level | Which level the element is hosted on |
| Phase Created / Demolished | For phased renovation projects |
| Mark | The door/window number shown on plans (e.g., D01, W03) |
| Comments | Free text for additional notes |

**Creating a New Door Size:**
Select a door → Edit Type → Duplicate → rename (e.g., "Single-Flush: 1000 x 2100mm") → change Width to 1000 → OK. The new type appears in the Type Selector for future placements. Never change dimensions on an existing type without duplicating first.`,
      },
      {
        title: 'Loading Families & the Content Library',
        content: `Revit ships with a default door and window library but real projects demand more variety. Loading families is a core daily skill.

**Loading from the Revit Library:**
Insert tab → Load Family → navigate to the Revit content library (C:\\ProgramData\\Autodesk\\RVT 20XX\\Libraries\\) → Doors or Windows folder → select .rfa → Open.

The family loads into the project and appears in the Type Selector immediately. It also appears in the Project Browser under Families → Doors.

**Loading While Placing:**
With the Door or Window tool active, click "Load Family" in the contextual tab. This opens the same browser. Useful workflow when you realize mid-placement that you need a family not yet loaded.

**Swapping a Placed Door to a Different Family:**
Select the door → Type Selector dropdown → the list shows all loaded door types. Switching between types of the same family preserves the opening geometry. Switching to a completely different family (e.g., from a single door to a double door) may require the wall to be wide enough.

**Third-Party Families:**
For manufacturer-specific content (fire doors, automatic sliding doors, curtain wall systems):
- BIMobject.com — largest manufacturer library
- NBS National BIM Library (UK) — specification-linked families
- Manufacturer websites (Allegion, ASSA ABLOY, Reynaers, etc.)

Always test downloaded families in a scratch project — some have excessive polygon counts or incorrect category assignments that can slow your model.`,
      },
      {
        title: 'The Host Relationship',
        content: `Doors and windows are wall-hosted. This has important implications:

**Cannot Exist Without a Host:**
Delete the host wall and the door is deleted too. Revit warns you before this happens. You can move a door to a different wall by selecting it and dragging — it snaps to the nearest wall.

**Moving Along the Host Wall:**
Select a door → drag left/right along the wall. Temporary dimensions show the offset from wall ends. Click a dimension to type an exact value.

**Moving to a Different Wall:**
Select the door → Modify tab → Pick New Host → click a different wall. The door moves to the new host wall. This works for any hosted family (windows, wall-hosted light fixtures, outlets, etc.).

**Openings vs. Door Families:**
If you need a simple rectangular opening without a door (e.g., a cased opening or pass-through), use Architecture → Opening → Wall Opening instead of a door family. This cuts the wall without placing any door geometry.

**Curtain Wall Panels:**
Curtain walls have their own panel-based hosting system — doors and windows in curtain walls are placed differently (by replacing a panel with a door/window panel type). This is covered in the advanced curtain wall lesson.`,
      },
      {
        title: 'Door & Window Tags and Scheduling',
        content: `Doors and windows only become truly useful in BIM when tagged — linking them to schedules and specifications.

**Placing Tags:**
Annotate tab → Tag panel → Tag by Category → click a door or window. Revit places a tag showing the Mark parameter value (e.g., D01). Tags are view-specific — placing a tag in Level 1 plan does not tag the same door in Level 2 plan.

**Tag All (Batch Tagging):**
Annotate tab → Tag panel → Tag All → select "Doors" and/or "Windows" → choose leader style → OK. Revit tags every untagged door or window in the active view simultaneously.

**The Mark Parameter:**
Each door/window has a "Mark" instance parameter — this is the unique identifier shown in the tag and on the schedule. Revit warns you (but does not prevent) duplicate marks. Best practice: number doors D01, D02... and windows W01, W02... or use a room-based system (101A, 101B for rooms on Level 1).

**Door Schedule:**
View tab → Schedules → Schedule/Quantities → select "Doors" → add fields: Mark, Type, Width, Height, Frame Material, Level, Comments → OK. The schedule updates live as doors are added or modified. Any cell in the schedule is editable — changing a mark in the schedule updates the tag in the plan view instantly.

**Keynoting:**
An alternative to Mark-based tags: use the Keynote parameter (linked to a keynote legend file) for specification-driven annotation. Common in US practice; less common internationally where NBS or similar spec systems are used.`,
      },
      {
        title: 'Component Families — Beyond Doors & Windows',
        content: `Everything learned about doors and windows applies to all Component Families in Revit. The same Load, Place, Type Selector, Instance/Type properties workflow works for:

**Floor-Hosted Families:** Drains, floor boxes, recessed fixtures — hosted by a floor slab, deleted if the floor is deleted.

**Ceiling-Hosted Families:** Light fixtures, sprinkler heads, diffusers — hosted by a ceiling element.

**Face-Hosted Families:** Wall outlets, switches, surface-mounted lights — hosted by any face (wall, floor, ceiling, or sloped surface).

**Work Plane-Based Families:** Furniture, equipment — placed on the active work plane (usually the floor level). Not tied to a specific host element; can be moved freely.

**Generic Models:** Used for bespoke elements with no specific Revit category — custom joinery, specialty equipment, site furniture.

**Adaptive Components:** Advanced parametric families that can flex to any geometry — curtain panels, complex facade elements. Covered in the advanced family creation lessons.

**Family Categories Matter:**
A family's category determines which schedule it appears in, which Visibility/Graphics subcategory controls it, and which tag family annotates it. A light fixture accidentally categorized as Furniture will not appear in lighting schedules. Always check the category when loading third-party families.`,
      },
    ],
    takeaways: [
      'Doors and windows are wall-hosted component families — they cannot exist without a host wall',
      'Spacebar flips door hand before placing; flip arrows control hand and swing after placement',
      'Type parameters (Width, Height) affect all instances of that type — always Duplicate before changing sizes',
      'Tag All batch-tags all doors or windows in a view; the Mark parameter drives the tag label and schedule',
      'All component families (furniture, fixtures, equipment) follow the same Load → Place → Type Selector workflow',
    ],
    resource: {
      title: 'Autodesk Revit — Doors and Windows',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-4DF4C9A3-4C3B-4E0E-8D11-3C8F7F2D3B1A',
    },
    quiz: { label: 'Doors, Windows & Component Families Quiz', questions: 10, time: '5 min' },
    prev: 'rv-8',
    next: 'rv-10',
  },

  // ─────────────────────────────────────────────────────────
  // rv-10: Working with Views & Visibility Graphics
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-10',
    num: 10,
    title: 'Working with Views & Visibility Graphics',
    topic: 'Revit Views',
    cat: 'intermediate',
    readTime: '17 min',
    free: false,
    desc: 'Control exactly what appears in every Revit view using Visibility/Graphics, view-specific overrides, and filters — the skills that separate polished BIM models from cluttered ones.',
    intro: `A Revit model contains everything — structure, architecture, MEP, furniture, annotations. But no single view should show everything. A floor plan for construction shows walls, doors, dimensions, and tags. A reflected ceiling plan shows ceilings, lights, and grids. A coordination model shows all disciplines simultaneously.

Visibility/Graphics (VG) is Revit's system for controlling what each view shows and how it looks. Mastering it lets you produce clean, professional drawings from a single coordinated model — no manual hiding, no layer switching, no CAD workarounds.`,
    sections: [
      {
        title: 'The Visibility/Graphics Dialog',
        content: `Open with shortcut **VG** (or **VV**), or View tab → Graphics → Visibility/Graphics.

The dialog has five tabs:

**1. Model Categories**
Controls visibility and graphics for every Revit model category (Walls, Doors, Windows, Structural Columns, Furniture, etc.). Each row has:
- Visibility checkbox — show/hide the category
- Projection/Surface Lines — line weight and pattern for faces seen straight-on
- Cut Lines — line weight and pattern for faces cut through by the view plane
- Halftone — renders the category at 50% opacity
- Detail Level — can override the view's detail level for this category

**2. Annotation Categories**
Controls visibility of annotations: Tags, Dimensions, Text Notes, Grids, Levels, Section Marks, Elevation Marks, Spot Elevations, etc. Hiding a category here hides ALL instances in the view — for selective hiding, use the element's individual visibility.

**3. Analytical Model Categories**
Structural analysis geometry — usually turned off in all architectural views.

**4. Imported Categories**
Controls visibility of linked CAD files (DWG, DXF) or imported geometry, organized by layer.

**5. Filters**
Rule-based overrides applied on top of category settings. Covered in the Filters section below.

**Per-View vs. Global:**
VG settings apply only to the active view. Two floor plans of the same level can have completely different VG settings — one showing furniture, one hiding it.`,
      },
      {
        title: 'Overriding Graphics for Specific Elements',
        content: `VG controls entire categories. For overriding individual elements within a category, use Override Graphics in View.

**Method 1 — Right-click Override:**
Select an element → right-click → Override Graphics in View → By Element. A dialog lets you override lines (weight, color, pattern) and surfaces (fill color, transparency) for just that one element. The element shows a small icon in the bottom-left when overridden.

**Method 2 — Select Box + Override:**
Select multiple elements → right-click → Override Graphics in View → By Element. All selected elements get the same override.

**Method 3 — Hide Element:**
Select element → right-click → Hide in View → Element (hides this specific element) or Category (hides all elements of this category in this view, same as VG checkbox).

**Resetting Overrides:**
Right-click an overridden element → Override Graphics in View → By Element → Reset to reset individual overrides. Or: View tab → Graphics → Reset All Temporary Hide/Isolate, then Remove all graphic overrides for complete cleanup.

**Temporary Hide/Isolate:**
Select elements → View Control Bar (bottom of canvas) → Temporary Hide/Isolate icon → Hide Element / Isolate Element / Hide Category / Isolate Category. The view border turns teal indicating temporary mode. Use this for working clarity — it does NOT print. Permanent: with elements hidden, click the glasses icon → Apply Hide/Isolate to View to make it permanent.`,
      },
      {
        title: 'View Types & When to Use Each',
        content: `Revit offers many view types — each has a specific purpose.

**Floor Plan:**
Horizontal cut through the building at the Cut Plane height (set in View Range). The standard view for architectural layout, door/window placement, dimensions, and room tags.

**Reflected Ceiling Plan (RCP):**
Looking up at the ceiling from below — shows ceiling geometry, light fixtures, diffusers, sprinkler heads, and ceiling-mounted elements. The view is "reflected" so left/right matches the floor plan orientation.

**Elevation:**
Orthographic view looking at the building from outside (North, South, East, West) or an interior elevation looking at a room wall. Shows wall heights, window positions, material patterns, and vertical dimensions.

**Section:**
A cut through the building at any angle, showing the interior. Sections can be building sections (full cut through), wall sections (detailed cut), or detail sections (small-scale construction details).

**3D View (Orthographic):**
A standard isometric/trimetric 3D view with no perspective distortion. Best for coordination checking, clash detection setup, and model review.

**3D View (Perspective / Camera):**
Set up via View tab → Create → Camera. Creates a perspective view from a specific camera position and target. Used for client visualization and rendered images.

**Drafting View:**
A 2D-only view with no model geometry — used for detail drawings, notes, and 2D CAD details that are not derived from the model. Linked to sheets but not to the 3D model.

**Legend View:**
For creating symbol legends, door/window type legends, and key plans. Can be placed on multiple sheets (unlike model views which can only appear on one sheet).`,
      },
      {
        title: 'Duplicate Views & View Independence',
        content: `One of Revit's most powerful features: a single floor plan level can have unlimited independent views, each with different VG settings, crop regions, and annotations.

**Three Duplication Types (right-click view in Browser → Duplicate View):**

**Duplicate:**
Creates a new view with the same model and no annotations. VG settings, crop region, and view properties are copied from the original. Annotations (tags, dimensions, text) are NOT copied — you start fresh. Use for: creating a "furniture plan" version of a floor plan without the dimensions from the "construction plan."

**Duplicate with Detailing:**
Copies everything — model AND annotations. Use for: creating a similar drawing that needs most of the same annotations with minor differences.

**Duplicate as Dependent:**
Creates a child view linked to a parent view. Annotations added to the parent appear in all dependents. Use for: splitting a large floor plan into north half / south half for sheet layout, while keeping dimensions synchronized.

**View-Specific Elements:**
Annotations (tags, dimensions, text, filled regions, detail lines) are always view-specific — they exist in one view only. The model geometry underneath is shared. This is why you can have a demolition plan and a new works plan of the same floor — different annotations, same geometry, different VG overrides.`,
      },
      {
        title: 'Filters — Rule-Based Graphics Control',
        content: `Filters apply graphic overrides to elements matching specific rules — more powerful than category-level VG because they act on parameters.

**Creating a Filter:**
View tab → Graphics → Filters (or the Filters tab in VG dialog) → Edit/New → New Filter → name it → select categories it applies to → set rules.

**Filter Rules:**
Rules test element parameters. Examples:
- Walls where "Fire Rating" is not empty → override with red fill (fire-rated walls highlighted)
- Doors where "Mark" begins with "EX" → override with halftone (existing doors shown lighter)
- Rooms where "Department" equals "ICU" → override surface with blue fill
- Structural Columns where "Structural Material" contains "Steel" → override with grey

**Applying a Filter to a View:**
VG dialog → Filters tab → Add (select your filter) → set Override graphics (line color, fill color, halftone, transparency) → OK. The filter applies to the active view.

**Filter Priority:**
Filters override category-level VG settings. If multiple filters match the same element, the top filter in the list wins. Drag filters up/down in the list to set priority.

**Common Use Cases:**
- Phase highlighting (new work = solid, demolished = dashed, existing = halftone)
- Fire compartment color coding
- Department zoning plans
- Structural vs. non-structural wall differentiation
- MEP system color coding (supply air = blue, return air = green, exhaust = red)`,
      },
      {
        title: 'View Templates — Locking and Reusing VG Settings',
        content: `Once you have a view configured perfectly (the right VG settings, detail level, visual style, scale), save it as a View Template so any view can inherit those settings instantly.

**Creating a View Template:**
View tab → Graphics → View Templates → Create Template from Current View → name it. The template captures all VG settings, view properties (scale, detail level, discipline, visual style), and filter assignments.

**Applying a View Template:**
Right-click a view in the Project Browser → Apply View Template → select the template → OK. The view's settings update instantly to match the template.

**Assigning a View Template (with locking):**
In View Properties (select nothing → Properties), set "View Template" to a template name. This assigns AND locks the view to that template — any settings controlled by the template cannot be changed in the view directly. The template becomes the single source of truth.

**Why Templates Matter on Real Projects:**
A project might have 80 floor plan views across multiple levels. Without templates, keeping all "Construction Plans" consistent (same line weights, same visibility settings, same scale) requires manual checking. With a "Construction Plan" template assigned to all 80 views, changing one setting in the template updates all 80 views simultaneously.

**Template Includes / Excludes:**
When creating a template, you can uncheck specific parameters from being included. For example, a template might control VG settings but NOT control the view scale — so each view can have its own scale while still inheriting visibility settings.`,
      },
    ],
    takeaways: [
      'VG (Visibility/Graphics) controls category-level display per view — shortcut VG or VV',
      'Override Graphics in View → By Element overrides individual elements without affecting the whole category',
      'Duplicate, Duplicate with Detailing, and Duplicate as Dependent create independent views with different use cases',
      'Filters apply rule-based graphic overrides based on element parameters — more powerful than category-level VG',
      'View Templates save and lock VG settings — assigning a template to 80 views means one change updates all 80',
    ],
    resource: {
      title: 'Autodesk Revit — Visibility and Graphic Overrides',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-7B0E7B7E-5E5E-4E5E-8E5E-5E5E5E5E5E5E',
    },
    quiz: { label: 'Views & Visibility/Graphics Quiz', questions: 10, time: '5 min' },
    prev: 'rv-9',
    next: 'rv-11',
  },

  // ─────────────────────────────────────────────────────────
  // rv-11: Schedules & Quantities
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-11',
    num: 11,
    title: 'Schedules & Quantities',
    topic: 'BIM Data',
    cat: 'intermediate',
    readTime: '15 min',
    free: false,
    desc: 'Create live, model-driven schedules for doors, windows, rooms, materials, and any other Revit element — and learn how editing a schedule cell updates the model in real time.',
    intro: `One of BIM's core promises is that the model contains all project information — and schedules are how that information surfaces as usable data. A door schedule in Revit is not a manually typed table: it reads directly from every door in the model. Add a door → it appears. Change a door width → the schedule updates. Delete a door → it disappears from the schedule.

This lesson teaches you to create, configure, and use Revit schedules effectively — from simple door counts to room data sheets to material takeoffs that feed quantity surveying workflows.`,
    sections: [
      {
        title: 'Creating a Schedule',
        content: `View tab → Create panel → Schedules → Schedule/Quantities.

The "New Schedule" dialog opens:
1. **Category:** Select what the schedule counts — Doors, Windows, Walls, Rooms, Floors, Structural Columns, Furniture, etc. This is the element category the schedule will read from.
2. **Name:** The schedule view name (shown in Project Browser and on sheets)
3. **Schedule Building Components** vs. **Schedule Keys:** For standard schedules, keep "Schedule Building Components" selected. Schedule Keys are for lookup tables (explained later).
4. **Phase:** Which project phase the schedule reads from.

Click OK → the Schedule Properties dialog opens with five tabs.

**The Five Tabs:**
- **Fields** — which parameters appear as columns
- **Filter** — which elements are included (e.g., only doors on Level 1)
- **Sorting/Grouping** — how rows are organized
- **Formatting** — column headers, width, number formatting
- **Appearance** — grid lines, fonts, title bar style`,
      },
      {
        title: 'Fields — Adding & Ordering Columns',
        content: `The Fields tab is where you choose what data each column shows.

**Available Fields (left list):**
All parameters available for the selected category. This includes both built-in Revit parameters (Mark, Width, Height, Level, Phase Created) and any custom shared parameters your team has added.

**Scheduled Fields (right list):**
Parameters you have added as columns, in the order they appear left to right in the schedule.

**Adding a Field:**
Double-click from Available to add it to Scheduled Fields. Or select and click the arrow. Order them by dragging up/down in the Scheduled Fields list.

**Calculated Value:**
Click "Calculated Value" to create a formula-driven column. Example: a "Area" column for doors that multiplies Width × Height. Or a "Cost Estimate" column multiplying count by a unit rate. Uses simple arithmetic and conditional logic.

**Combined Parameters:**
Click "Combine Parameters" to merge multiple fields into one column (e.g., "Width x Height" showing "900 x 2100" from two separate parameters).

**Useful Fields for a Door Schedule:**
Mark, Type Name, Width, Height, Frame Material, Fire Rating, Hardware Set, Level, Phase Created, Comments.

**Useful Fields for a Room Schedule:**
Number, Name, Level, Area, Volume, Department, Finish Floor, Finish Ceiling, Finish Wall, Comments.`,
      },
      {
        title: 'Filter, Sorting & Grouping',
        content: `**Filter Tab:**
Narrows which elements appear in the schedule. Examples:
- Level equals "Level 1" — only doors on Level 1
- Fire Rating does not equal "" — only fire-rated doors
- Department equals "ICU" — rooms in a specific department

Up to 4 filter conditions can be combined (AND logic). For OR logic or more complex filtering, use multiple schedules or Schedule Keys.

**Sorting/Grouping Tab:**
Controls row order and grouping.

**Sort by:** Choose a field (e.g., Mark) and ascending/descending. Multiple sort levels: sort by Level first, then by Mark within each level.

**Group by (Header/Footer):**
Enable "Header" to show a group label row. Enable "Footer" to show a subtotal row. Enable "Count" in the footer to show element count per group. Enable "Blank Line" to add visual spacing between groups.

**Itemize Every Instance vs. Totals Only:**
- Itemize: every door gets its own row (D01, D02, D03...)
- Totals Only (uncheck Itemize): rows are collapsed by type, showing a count. Useful for order quantities rather than individual identification.

**Grand Totals:**
At the bottom of Sorting/Grouping, enable "Grand totals" to show a total count or sum at the bottom of the entire schedule.`,
      },
      {
        title: 'Editing the Model Through a Schedule',
        content: `This is one of Revit's most powerful bidirectional features: you can edit model data directly in a schedule cell, and the model updates instantly.

**Click any editable cell** in the schedule view → type a new value → Tab or Enter to confirm. The model element updates immediately. This works for any writable parameter: Mark, Comments, Fire Rating, Finish Floor, Department, and any shared parameter your team has added.

**Grayed-out cells** are read-only — calculated values, or parameters locked by type (like Width for a door type — changing width requires changing the type, not the instance).

**Highlighting in the Model:**
In the schedule view, select a row → the element is selected in the model (and vice versa — selecting a door in a floor plan highlights its row in the schedule). Use View tab → Windows → Tile Views with a plan and schedule side by side: select a row in the schedule, the door highlights in the plan.

**Deleting from the Schedule:**
Select a row in the schedule → Delete key → the actual model element is deleted. Revit warns you first. This is a genuine model edit, not just a schedule row deletion.

**Adding Elements via the Schedule:**
You cannot add a new door by adding a row to a door schedule (Revit doesn't work that way). You must place elements in model views. However, room schedules are an exception — you can create rooms directly in a Room Schedule by adding rows (for unplaced rooms in room data sheets).`,
      },
      {
        title: 'Material Takeoffs & Key Schedules',
        content: `**Material Takeoff Schedule:**
View tab → Schedules → Material Takeoff → select a category (e.g., Walls).

This schedule reads the compound layer materials of elements, not just the element itself. Columns available include:
- Material Name
- Material Area (surface area of that material layer)
- Material Volume
- Material Mass (if density is set in the material)

Use this for: wall finish quantity takeoffs, concrete volume calculations, insulation area totals. The data feeds directly into quantity surveying workflows.

**Key Schedules (Schedule Keys):**
A Schedule Key is a lookup table you define. Example: create a "Room Finish Key" with Key Name (e.g., "FF-01") and columns for Floor Finish, Wall Finish, Ceiling Finish. Then in your Room Schedule, each room has a "Room Finish Key" instance parameter — assign "FF-01" and the finish values auto-populate from the key.

This avoids typing the same finish specification 50 times for 50 rooms with the same finish type — change the key, all rooms update.

**Note Numbers (View-Specific Schedule):**
For drawing-specific schedules (like a column note schedule for a specific sheet), use a Schedule Filter to limit the schedule to elements visible in a specific crop region or phase.

**Exporting Schedules:**
With a schedule view open: File → Export → Reports → Schedule → saves as .txt (tab-delimited) or .csv. Import into Excel for further analysis, cost planning, or delivery to the client.`,
      },
      {
        title: 'Room & Area Schedules',
        content: `Room schedules are particularly important — they are the primary data delivery mechanism for the building program, area calculations, and finish specifications.

**Creating Rooms:**
Architecture tab → Room & Area panel → Room. Click inside a bounded area (surrounded by room-bounding walls) to place a room. Revit calculates the area automatically.

**Room Bounding Elements:**
Walls, floors, ceilings, roof soffits, and room separation lines all contribute to room bounding. A wall must have "Room Bounding" checked in its Properties to count as a boundary. Room Separation Lines (Architecture → Room & Area → Room Separator) are annotation-only lines used to divide open-plan spaces.

**Room Schedule Fields:**
Number, Name, Level, Area, Volume, Perimeter, Department, Base Finish, Ceiling Finish, Wall Finish, Floor Finish, Occupancy, Occupant, Comments.

**Area Plans:**
View tab → Create → Area Plan — creates a plan view where Area Boundaries define zones (gross area, rentable area, net area). Different from rooms — area plans use the Area family, not the Room family. Used for RICS or BOMA area calculations.

**Unplaced Rooms:**
A room can exist in the schedule without being placed in the model (useful for programming — listing all required rooms before the floor plan is fully designed). Create unplaced rooms by adding rows directly in a Room Schedule.`,
      },
    ],
    takeaways: [
      'Schedules are live — adding, modifying, or deleting model elements updates every schedule containing them',
      'Editing a writable cell in a schedule updates the actual model element immediately',
      'Sorting/Grouping with Headers and Footers enables count totals and grouped door/room schedules',
      'Material Takeoffs read compound layer materials for quantity surveying — volume, area, and mass per material',
      'Schedule Keys are lookup tables that auto-populate repeated parameters (finish specs, hardware sets) across many rooms',
    ],
    resource: {
      title: 'Autodesk Revit — Schedules',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-D9CE8B8E-5C3C-4C3B-8E0E-8D11-3C8F7F2D3B1A',
    },
    quiz: { label: 'Schedules & Quantities Quiz', questions: 10, time: '5 min' },
    prev: 'rv-10',
    next: 'rv-12',
  },

  // ─────────────────────────────────────────────────────────
  // rv-12: Sheets, Titleblocks & Printing
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-12',
    num: 12,
    title: 'Sheets, Titleblocks & Printing',
    topic: 'Drawing Production',
    cat: 'intermediate',
    readTime: '14 min',
    free: false,
    desc: 'Compose professional drawing sheets in Revit — placing views, schedules, and legends onto titleblocks, controlling viewport scales, and printing or exporting to PDF.',
    intro: `All the modeling and drafting work in Revit culminates in drawing sheets — the formal deliverables issued to contractors, clients, and authorities. Revit's sheet environment keeps views live: a viewport on a sheet is a window into the model, not a frozen snapshot. Change a wall in the model and every sheet showing that area updates automatically.

This lesson covers creating sheets, loading and customizing titleblocks, placing and managing viewports, controlling scales and crop regions on sheets, and exporting professional PDFs.`,
    sections: [
      {
        title: 'Creating Sheets & Loading Titleblocks',
        content: `**Creating a New Sheet:**
View tab → Sheet Composition panel → Sheet. A dialog asks you to select a titleblock family.

**Titleblock Families (.rfa):**
Titleblocks are families loaded into the project. Revit ships with basic titleblock families (A0, A1, A2, A3, A4 in metric; Arch D, E, etc. in imperial). For a real project, your firm's titleblock — with logo, border, and project info fields — is a custom .rfa file.

**Loading a Titleblock:**
In the New Sheet dialog → Load → navigate to your titleblock .rfa → Open → select it → OK. The sheet opens as a new view in the drawing canvas.

**Sheet Number & Name:**
After creating: select the sheet → Properties → Sheet Number (e.g., A-101) and Sheet Name (e.g., Ground Floor Plan). These appear in the Project Browser and in the titleblock (if the titleblock is set up to read these parameters).

**Titleblock Parameters:**
Most titleblock families have text parameters that feed the title block fields: Project Name, Project Number, Drawn By, Checked By, Issue Date, Revision. These are type or instance parameters of the titleblock family. Select the titleblock on the sheet → Properties to edit them.

**Sheet Organization in Project Browser:**
Sheets appear in the Project Browser under "Sheets (all)" organized by Sheet Number. Right-click → Browser Organization to sort by discipline or other parameters — standard on multi-discipline projects.`,
      },
      {
        title: 'Placing Views onto Sheets',
        content: `**Placing a View:**
With the sheet open: View tab → Sheet Composition → Place View → select a view from the list → click to place on the sheet. Or drag any view from the Project Browser directly onto the sheet canvas.

**Viewport:**
Once placed, the view becomes a viewport — a rectangular frame on the sheet showing the model view. The viewport has a title (the view name by default) shown below or beside the frame.

**Moving & Resizing Viewports:**
Select the viewport → drag to reposition. The crop region of the underlying view controls the extent of what's shown. You cannot resize the viewport by dragging its edges — resize the crop region in the view itself, then return to the sheet.

**Each View on One Sheet Only:**
A view can only appear on one sheet at a time (except Legend views, which can be on multiple sheets). Placing a view that is already on another sheet moves it — Revit warns you. To show the same information on multiple sheets, create a Dependent view or a Legend.

**Activating a Viewport:**
Double-click inside a viewport to activate it — you can now edit the model and annotations within that viewport without leaving the sheet. This is useful for adjusting a tag position or adding a spot elevation directly on the sheet. Double-click outside to deactivate.

**Viewport Types:**
Select a viewport → Type Selector → choose a viewport type. Viewport types control the title bar appearance: title with line, title without line, no title. Create new types (duplicate an existing one) to match your firm's standards.`,
      },
      {
        title: 'View Scale & the Sheet Environment',
        content: `**Scale on the Sheet:**
Each viewport displays at the scale set in the underlying view's properties. Select nothing → Properties → View Scale. Common scales: 1:100 (general arrangement), 1:50 (room layouts), 1:20 (wall sections), 1:5 (details).

Changing the view scale affects annotation sizes — text, tags, and dimensions scale with the view so they print at the correct physical size regardless of scale. This is Revit's annotation scaling system — a 2.5mm text note prints at 2.5mm whether the view is 1:50 or 1:200.

**Scale on the View Control Bar:**
The View Control Bar at the bottom of the drawing canvas shows the current scale. Click it to change the scale — immediately updates the viewport on the sheet and rescales all annotations.

**Reference Scale:**
In sheet environment, the titleblock border defines the printable area. The view scale and crop region together determine how much of the model fits within the viewport on the sheet.

**Aligning Viewports:**
Select multiple viewports → Modify tab → Align (or use the Align tool: AL) to align their edges. Or: select a viewport → Properties → note the X,Y position → set the same position on another viewport for precise alignment.

**Guide Grid:**
View tab → Sheet Composition → Guide Grid → assign a guide grid to the sheet. Guide grids are visible only on the sheet (not printed) and help align viewports consistently across multiple sheets — especially useful for multi-sheet floor plans where viewports must align to show continuity.`,
      },
      {
        title: 'Revision Tracking',
        content: `Revit has a built-in revision tracking system that links revision clouds in the model to the revision table in the titleblock.

**Creating a Revision:**
View tab → Sheet Composition → Revisions → Add → type the revision sequence number, description, date, and issued-to information.

**Revision Clouds:**
Annotate tab → Detail panel → Revision Cloud → draw a cloud around the revised area in any view. In Properties, set "Revision" to the applicable revision from your list. The revision cloud is view-specific.

**Revision Table in Titleblock:**
Most titleblock families include a revision schedule — a table that automatically lists all revisions associated with the sheet. A revision appears in a sheet's revision table when a revision cloud linked to that revision exists in any view placed on that sheet.

**Issuing Revisions:**
In the Revisions dialog, change the revision status from "In Progress" to "Issued" — this locks the revision cloud (it can no longer be moved or deleted) and sets the issue date. Professional practice: never delete issued revision clouds.`,
      },
      {
        title: 'Printing & PDF Export',
        content: `**Print Setup:**
File → Print → Print Setup → configure:
- Paper size (A1, A0, etc.)
- Zoom: "Fit to page" or specific percentage
- Options: hide crop boundaries, hide unreferenced view tags, hide scope boxes
- Print range: current sheet, selected sheets, or all sheets

**Print to PDF:**
In Revit 2022+, use File → Export → PDF directly (no third-party PDF printer needed). Settings include:
- File naming: combine into one PDF or export each sheet as a separate file
- Raster quality: Medium (screen review), High (standard issue), Best (final submission)
- Color: Color, Grayscale, or Black & White

**Batch Export (Multiple Sheets):**
File → Export → PDF → select multiple sheets from the list → Export. Revit generates one PDF per sheet (with sheet number in filename) or a combined multi-page PDF depending on settings.

**DWG Export:**
File → Export → CAD Formats → DWG. Configure layer mapping (Revit categories → CAD layer names) in the Export Layers settings. This is how you deliver to consultants or contractors who work in AutoCAD.

**Printing Best Practices:**
- Always do a Print Preview before printing to paper
- Use "Hide crop boundaries" in Print Setup so viewport frames do not print
- Check line weights look correct at print scale — what looks thin on screen may be invisible at 1:100
- For PDF submission, export at "High" raster quality for a good balance of file size and quality`,
      },
      {
        title: 'Sheet List Schedule',
        content: `A Sheet List is a schedule that lists all sheets in the project — the drawing index or document register.

**Creating a Sheet List:**
View tab → Schedules → Sheet List → add fields: Sheet Number, Sheet Name, Drawn By, Checked By, Issue Date, Revision Number.

**Placing on a Sheet:**
The Sheet List schedule can be placed on a cover sheet (like any other schedule view) and updates automatically as sheets are added, renamed, or renumbered.

**Filtering the Sheet List:**
Use the Filter tab to exclude sheets — e.g., filter out placeholder sheets or internal working sheets that are not for issue. A common filter: "Appears in Sheet List" parameter = Yes (add this parameter to your sheet properties and check it only for issuable sheets).

**Revision Columns:**
Add the "Current Revision" field to show the current revision status of each sheet — powerful for tracking which sheets are on which revision at any point in time.

**Numbering Conventions:**
Sheets are typically numbered by discipline: A-101 (Architecture, floor plans), S-101 (Structure), M-101 (Mechanical), E-101 (Electrical). The Sheet Number parameter drives sorting in the Browser and the Sheet List schedule.`,
      },
    ],
    takeaways: [
      'Sheets are view containers — place model views, schedules, and legends as live viewports onto titleblock families',
      'View scale is set in the view properties; annotation sizes automatically adjust to print correctly at any scale',
      'A view can only be placed on one sheet — use Dependent Views or Legends for content needed on multiple sheets',
      'Revision clouds link to the Revisions list and automatically populate the titleblock revision table',
      'Export to PDF directly from Revit 2022+ — batch export multiple sheets as one combined PDF or individual files',
    ],
    resource: {
      title: 'Autodesk Revit — Sheets and Printing',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-5E5E5E5E-5E5E-4E5E-8E5E-5E5E5E5E5E5F',
    },
    quiz: { label: 'Sheets, Titleblocks & Printing Quiz', questions: 10, time: '5 min' },
    prev: 'rv-11',
    next: 'rv-13',
  },

  // ─────────────────────────────────────────────────────────
  // rv-13: Dimensions, Tags & Annotations
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-13',
    num: 13,
    title: 'Dimensions, Tags & Annotations',
    topic: 'Drawing Production',
    cat: 'intermediate',
    readTime: '15 min',
    free: false,
    desc: 'Master Revit\'s annotation toolkit — aligned dimensions, spot elevations, door and room tags, text notes, keynotes, and detail lines — to produce clear, professional drawings.',
    intro: `Model geometry alone does not make a drawing. Annotations — dimensions, tags, text notes, and symbols — communicate size, identity, material, and intent to everyone who reads the drawings. In Revit, annotations are view-specific and scale-aware: they exist in one view only and always print at the correct physical size regardless of drawing scale.

This lesson covers the complete annotation workflow from placing your first aligned dimension to batch-tagging rooms and managing keynote legends.`,
    sections: [
      {
        title: 'Aligned Dimensions',
        content: `**Placing an Aligned Dimension:**
Annotate tab → Dimension panel → Aligned (shortcut: DI).

Click reference points sequentially (wall faces, grid lines, element centerlines) → each click adds a witness line → double-click or press Escape to finish. The dimension string appears with all intermediate values shown.

**What Revit Snaps To:**
Before clicking, the Tab key cycles through available snap targets on a wall: Wall Centerline, Wall Faces, Core Centerline, Core Faces. Set your preference in the Options Bar (Reference dropdown) before dimensioning. Consistency is critical — dimension to wall faces for architectural work, core centerlines for structural.

**Dimension Equality (EQ):**
Select a dimension string → a small "EQ" label appears above the equality constraint. Click EQ to make all spans equal. The elements redistribute evenly. Click again to remove the constraint. Used to space windows evenly or center a door in a bay.

**Locking a Dimension:**
Select a dimension → click the padlock icon that appears → the dimension is locked. The referenced element cannot move unless the dimension is unlocked first. Use to constrain critical geometry.

**Editing Dimension Text:**
Select a dimension segment → click the value text → you cannot change the numeric value (it reads from the model) but you can add prefix text, suffix text, or override the display value entirely (use override sparingly — it breaks the live link and can mislead contractors).

**Dimension Types:**
Different dimension types control: text size, arrow style, tick marks vs. dots vs. diagonal ticks, witness line extension, text position. Edit Type to duplicate and customize. Match your firm's drawing standards.`,
      },
      {
        title: 'Other Dimension Types',
        content: `**Linear Dimension:**
Annotate → Dimension → Linear. Dimensions horizontal or vertical distance only, regardless of element angle. Used for dimensioning to non-orthogonal elements where you need the horizontal or vertical component.

**Angular Dimension:**
Annotate → Dimension → Angular. Click two references → places an arc dimension showing the angle between them. Used for angled walls, ramps, and tapered elements.

**Radial & Arc Length:**
For curved walls and arcs — radial shows the radius, arc length shows the developed length along the curve.

**Spot Elevation:**
Annotate → Dimension → Spot Elevation. Click a point on the model (a floor finish, a ramp, a roof) → places an elevation annotation showing the height above the project base point or a defined survey point. Essential for sections, elevations, and site plans.

**Spot Coordinate:**
Shows the X,Y coordinates of a point — used for site plans and setting out drawings.

**Spot Slope:**
Click a sloped surface → shows the gradient (rise:run ratio or degrees). Used on drainage plans, ramps, and roof drawings.

**Ordinate Dimensions:**
Annotate → Dimension → Ordinate. Places a series of dimensions all measured from a single baseline (a datum line you define). Common in structural and manufacturing drawings for setting out coordinates from a reference point.`,
      },
      {
        title: 'Tags',
        content: `Tags annotate elements by reading and displaying their parameters. Unlike text notes, tags are live — changing the element parameter updates the tag automatically.

**Tag by Category:**
Annotate tab → Tag panel → Tag by Category (shortcut: TG). Click any element to place a tag. Revit automatically selects the appropriate tag family for the element category (Door tag for doors, Room tag for rooms, etc.).

**Tag Leader:**
In the Options Bar before placing: check "Leader" to add an arrow from the tag to the element. Set the leader type (attached end, free end, or no leader).

**Tag Families:**
Tags are annotation families (.rfa) — the tag for a door reads the Mark parameter and displays it inside a circle, hexagon, or whatever shape the tag family defines. Load different tag families to change the look. Multiple tag families can coexist for the same category.

**Room Tags:**
Architecture → Room & Area → Tag Room. Click inside a placed room → shows the room name and number. Room tags read the Name and Number instance parameters of the room element.

**Multi-Category Tag:**
Annotate → Tag → Multi-Category. Tags elements from any category using a generic tag family that reads a common parameter (usually Mark). Less common but useful for custom workflows.

**Loaded Tags vs. Not Loaded:**
If you try to tag an element and get a "No tag loaded for this category" warning, you need to load the tag family: Insert → Load Family → navigate to the Annotations folder in the library → find and load the appropriate tag.`,
      },
      {
        title: 'Text Notes & Leaders',
        content: `**Placing a Text Note:**
Annotate tab → Text panel → Text (shortcut: TX). Click to place a single-point text note, or click and drag to create a text note with a width boundary (text wraps).

**Text Types:**
Text notes have types controlling: font, size, bold/italic, color, background (opaque or transparent), line spacing. Edit Type → Duplicate to create new text styles. A project should have a limited set of text styles (e.g., 2.5mm body, 3.5mm heading, 5mm title) applied consistently.

**Text with Leader:**
With the Text tool active: Options Bar → choose leader type before clicking. Or after placing text: select → Modify panel → Add Leader. Leaders have adjustable elbow points — drag the grip to reposition.

**Editing Text:**
Double-click a text note to enter edit mode. Standard word-processor shortcuts apply: Ctrl+B (bold), Ctrl+I (italic), Ctrl+U (underline). Right-click for spell check.

**Keynotes:**
Keynotes are text annotations driven by a keynote legend file (.txt format). Each keynote has a number (e.g., 05.31.00) linked to a description in the legend. Annotate → Keynote → Element Keynote / Material Keynote / User Keynote.

Benefits of keynotes over text notes:
- Consistent descriptions across all drawings
- Change description in the legend file → all keynotes update
- Keynote Legend schedule can be placed on sheets automatically
- Supports NBS or MasterFormat specification numbering

**Detail Lines & Filled Regions:**
Annotate tab → Detail Lines (shortcut: DL) — draws 2D lines that are view-specific (not model geometry). Annotate → Region → Filled Region — creates a 2D filled polygon with a fill pattern (for indicating materials in detail drawings). Both are view-specific annotation elements.`,
      },
      {
        title: 'Section & Elevation Marks',
        content: `**Section Marks:**
View tab → Create → Section. Draw a section line → Revit creates a section view AND places a section mark (the cut line and arrow) in the current view.

The section mark is an annotation that shows:
- The cut line
- Arrow heads indicating the view direction
- The sheet number and detail number (once placed on a sheet)

**Reference Callout:**
If the section view is already created and placed on a sheet, the mark auto-populates with the sheet and detail number. This "referencing" system lets you click a section mark in a plan view and jump directly to the section view — or find which sheet it is on.

**Elevation Marks:**
View tab → Create → Elevation. Places an elevation marker (usually a circle with an arrow) that creates an elevation view. Interior elevations: place the elevation marker inside a room → four arrows appear → activate the arrows in the directions you want views → Revit creates one elevation view per arrow.

**Callout Views:**
View tab → Create → Callout. Draw a rectangle in a plan or elevation → creates a new view of just that area at a larger scale (for details or enlarged plans). The callout is annotated on the parent view with the sheet/detail reference.

**Managing References:**
When a view is placed on a sheet, Revit automatically fills in the "Sheet Number" and "View Number" (detail number on the sheet) in all section marks, callout marks, and elevation marks that reference that view. This means you never manually type sheet references — they update automatically when sheets are renumbered or views are moved between sheets.`,
      },
    ],
    takeaways: [
      'Aligned Dimension (DI) — click reference points sequentially; Tab cycles snap targets between wall faces and centerlines',
      'EQ constraint distributes dimension spans equally; the padlock locks a dimension to prevent accidental movement',
      'Tags read live element parameters — change the element and the tag updates; load tag families from the Annotations library',
      'Text types control font, size, and style — maintain a limited consistent set matching your firm standards',
      'Section and callout marks auto-populate with sheet/detail references once the view is placed on a sheet',
    ],
    resource: {
      title: 'Autodesk Revit — Annotation Tools',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-6E5E5E5E-5E5E-4E5E-8E5E-5E5E5E5E5E60',
    },
    quiz: { label: 'Dimensions, Tags & Annotations Quiz', questions: 10, time: '5 min' },
    prev: 'rv-12',
    next: 'rv-14',
  },

  // ─────────────────────────────────────────────────────────
  // rv-14: Rooms, Areas & Color Schemes
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-14',
    num: 14,
    title: 'Rooms, Areas & Color Schemes',
    topic: 'BIM Data',
    cat: 'intermediate',
    readTime: '14 min',
    free: false,
    desc: 'Place and manage rooms and areas in Revit, extract accurate area data, and create color-coded plans for department zoning, occupancy analysis, and client presentations.',
    intro: `Rooms in Revit are more than labels — they are intelligent data objects that calculate area and volume automatically, store finish specifications and occupancy data, and drive color-coded plans for zoning and presentations. Area Plans add another layer for gross/net/rentable area calculations used in property and planning workflows.

This lesson covers the complete room and area workflow: placing rooms, managing room bounding, separating spaces, reading accurate areas, and applying Color Schemes to produce visually compelling and data-rich plans.`,
    sections: [
      {
        title: 'Placing & Managing Rooms',
        content: `**Placing a Room:**
Architecture tab → Room & Area panel → Room (shortcut: RM). Click inside any bounded area. Revit places a room element — a 3D volume that fills the enclosed space from the floor to the upper room boundary.

**Room Bounding:**
Rooms are bounded by walls, floors, ceilings, roofs, and Room Separation Lines. For a wall to bound a room, its "Room Bounding" property (in Properties panel) must be checked — it is checked by default for most wall types.

**Room Name & Number:**
After placing, the room tag shows default name ("Room") and auto-incremented number. Click the tag text to edit name and number inline. Or: select the room → Properties → Name and Number.

**Room Properties (key parameters):**
- Name, Number — identification
- Level — which level the room is on
- Area, Perimeter, Volume — calculated automatically (read-only)
- Upper Limit, Limit Offset — controls how high the room volume extends
- Department, Occupancy — user data fields
- Base Finish, Floor Finish, Ceiling Finish, Wall Finish — specification fields
- Comments — free text

**Moving Rooms:**
Select the room (click on the room tag or the room fill color in a color scheme view) → drag. The room recalculates its volume based on its new position.

**Deleting Rooms:**
Delete a room element → it becomes "unplaced" (not deleted from the schedule) — it moves to a "Not Placed" state in the room schedule. To permanently delete, delete from the room schedule or right-click → Delete.`,
      },
      {
        title: 'Room Separation Lines & Unbounded Rooms',
        content: `**Room Separation Lines:**
Used to divide open-plan spaces where no wall exists. Architecture → Room & Area → Room Separator → draw a line across the open space. The line is view-specific and annotation-only (not a model element, not printed as a wall). Rooms on either side become separate bounded areas.

**Common use cases:**
- Dividing an open-plan office into zones
- Separating a lobby from a corridor where no wall exists
- Defining a "void" or "stairwell" area within a larger floor plate

**Unbounded Room Warning:**
A room placed in a space that is not fully enclosed shows "Not Enclosed" or has a very large area. Check for:
- Walls with Room Bounding unchecked
- Gaps between walls (walls not joined properly)
- Walls on the wrong level (a Level 2 wall does not bound a Level 1 room by default unless the room's Upper Limit reaches Level 2)
- Missing Room Separator Lines in open areas

**Room Upper Limit:**
By default, rooms extend from their level to the "Upper Limit" level (typically the next level up) + Limit Offset. If your building has double-height spaces, set the Upper Limit to the level above the void and adjust the Limit Offset to match the void height. This ensures correct volume calculations.

**Highlight Room Boundaries:**
Architecture → Room & Area → Highlight Boundaries — temporarily highlights all room bounding elements in the view with a colored outline. Useful for diagnosing unbounded room problems.`,
      },
      {
        title: 'Area Plans & Area Schemes',
        content: `**Area Plans vs. Room Plans:**
Rooms use wall geometry to calculate areas. Area Plans use a separate system — Area Boundaries — and are set up for specific area calculation methods.

**Area Schemes:**
Revit ships with two default area schemes:
- **Gross Building** — total floor area including exterior walls
- **Rentable** — net area inside demising walls (BOMA standard)

Create custom schemes: Architecture → Room & Area → Area and Volume Computations → Area Schemes tab → New.

**Creating an Area Plan:**
View tab → Create → Area Plan → select an Area Scheme → select a level → OK. A new Area Plan view is created.

**Area Boundaries:**
In the Area Plan view, Architecture → Room & Area → Area Boundary → draw boundaries. Unlike rooms which follow walls automatically, area boundaries are manually drawn lines. They can follow wall faces, be freehand lines, or combine both.

**Placing Area Elements:**
Architecture → Room & Area → Area → click inside a bounded area in the Area Plan view. Revit places an area element with calculated area.

**RICS / GIA Calculations:**
For UK practice (RICS Gross Internal Area calculations), set up an Area Scheme following RICS measurement rules and draw boundaries accordingly. Revit doesn't automate RICS compliance — the user must correctly interpret the standard and draw boundaries to match.`,
      },
      {
        title: 'Color Schemes',
        content: `Color Schemes color-fill room or area elements based on their parameter values — creating department zoning plans, occupancy maps, and data-rich presentation plans automatically from the model data.

**Applying a Color Scheme to a View:**
Select nothing → Properties (active view properties) → Color Scheme → click the cell → Color Scheme dialog opens.

Or: Architecture → Room & Area → Color Scheme → click in the view to assign.

**Color Scheme Settings:**
- **Category:** Rooms or Areas
- **Color:** Which parameter to color by (Name, Department, Occupancy, Level, any parameter)
- **By Value (each unique value gets a color):** Revit auto-assigns colors, or you click each row to set specific colors
- **By Range (numeric ranges get a color band):** For area-based heat maps — e.g., rooms under 20m2 = red, 20-50m2 = yellow, over 50m2 = green

**Editing Colors:**
In the Color Scheme dialog, click any color swatch to change it. Click the title to rename the legend entry. Drag rows to reorder them in the legend.

**Color Scheme Legend:**
After applying a color scheme, place a legend on the view or sheet: Annotate → Color Fill Legend → click to place. The legend shows each color with its label. Updates automatically when the color scheme changes.

**Presentation Uses:**
Color schemes are powerful for client presentations: a department zoning plan (each department a different color) communicates spatial organization instantly without needing to read room labels. The plan stays live — if a room changes department, the color updates.`,
      },
      {
        title: 'Room & Area Schedules for Data Delivery',
        content: `Rooms and areas become project deliverables through their schedules — feeding room data sheets, area reports, and fit-out specifications.

**Standard Room Schedule Setup:**
Fields: Number, Name, Level, Area, Volume, Department, Base Finish, Wall Finish, Ceiling Finish, Floor Finish, Occupancy, Comments.
Sort by: Level (group), then Number.
Filter: Level equals a specific level, or all levels.

**Area Report:**
Create a separate schedule or use the Room schedule with totals:
- In Sorting/Grouping: sort by Department, enable Footer with Total (sum of Area)
- Grand Total: shows overall building area
- This gives you a department area breakdown used for programming verification

**Checking Program Compliance:**
On healthcare, education, or residential projects, the brief specifies required areas per room type. Set up a room schedule with a "Required Area" shared parameter → compare "Area" (calculated) vs "Required Area" (manual input) → add a Calculated Value column: "Variance" = Area minus Required Area. Rooms below the required area show a negative value — instantly identifying program compliance issues.

**Exporting Room Data:**
File → Export → Reports → Room/Area Report → exports as HTML table or delimited text. Or export the room schedule as a CSV for import into Excel, cost planning software, or FM systems.

**Linking to FM Systems:**
For Facilities Management delivery, room data (Name, Number, Area, Department, Finishes) exported from Revit feeds CAFM (Computer-Aided Facility Management) systems like Archibus, Planon, or IBM Tririga. The COBie export format (available via Revit add-ins or IFC) standardizes this data for handover.`,
      },
    ],
    takeaways: [
      'Rooms are 3D volume objects — they calculate area and volume automatically from bounding walls and levels',
      'Room Separation Lines divide open spaces without walls; Highlight Boundaries diagnoses unbounded room problems',
      'Area Plans use a separate Area Boundary system for BOMA, RICS, or custom area calculation methods',
      'Color Schemes color-fill rooms by any parameter value — create live department zoning and occupancy plans',
      'Room schedules with Department footers and a Variance calculated column enable live program compliance checking',
    ],
    resource: {
      title: 'Autodesk Revit — Rooms and Areas',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-7E5E5E5E-5E5E-4E5E-8E5E-5E5E5E5E5E61',
    },
    quiz: { label: 'Rooms, Areas & Color Schemes Quiz', questions: 10, time: '5 min' },
    prev: 'rv-13',
    next: 'rv-15',
  },

  // ─────────────────────────────────────────────────────────
  // rv-15: Materials, Appearance & Rendering Basics
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-15',
    num: 15,
    title: 'Materials, Appearance & Rendering Basics',
    topic: 'Visualization',
    cat: 'intermediate',
    readTime: '15 min',
    free: false,
    desc: 'Define and assign Revit materials with real physical properties, control how elements appear in plan and 3D, and produce basic rendered images from within Revit.',
    intro: `Materials in Revit do more than make elements look good — they carry physical data (density, thermal conductivity, acoustic properties) that feeds analysis tools, and they drive quantity takeoffs in material schedules. A well-defined material library is a professional asset that improves both visualization quality and data accuracy.

This lesson covers the Material Browser, creating and editing materials, assigning materials to wall layers and element categories, controlling surface patterns for drawing production, and producing rendered images using Revit's built-in renderer.`,
    sections: [
      {
        title: 'The Material Browser',
        content: `**Opening the Material Browser:**
Manage tab → Settings panel → Materials (shortcut: type "Material" in the search bar or use the manage ribbon). Or: in any wall/floor type's Edit Assembly, click a material cell to open the browser.

**Material Browser Layout:**
Left panel: the project's material library (all materials loaded into this project). Top of left panel: search bar. Below: a tree organized by material class (Concrete, Masonry, Metal, Wood, Glass, etc.). 

Right panel: the selected material's properties, organized into tabs:
- **Identity** — name, description, class, keywords
- **Graphics** — how the material appears in non-rendered views (shading color, surface pattern, cut pattern)
- **Appearance** — the rendering asset (photorealistic texture, reflectivity, roughness)
- **Physical** — structural properties (density, elasticity, thermal expansion)
- **Thermal** — thermal conductivity, specific heat (for energy analysis)

**Adding a Material:**
Bottom of the left panel → + button → creates a new material. Or: duplicate an existing material (right-click → Duplicate) and modify it. Never edit a material that is used by other elements without duplicating first.

**Material Libraries:**
Revit connects to external material libraries (Autodesk Material Library, your firm's custom library). Click the book icon at the bottom of the left panel to access library materials → drag into the project to add them.`,
      },
      {
        title: 'Graphics Tab — Plan & Section Appearance',
        content: `The Graphics tab controls how materials appear in non-rendered (hidden line, shaded) views — floor plans, sections, and elevations. This is what drives the appearance of your construction drawings.

**Shading Color:**
The solid color shown in Shaded visual style. Not visible in printed Hidden Line drawings. Used for quick model review.

**Surface Pattern (Foreground):**
The hatch pattern shown on element surfaces in plan and elevation views (Hidden Line mode). Examples: brick coursing on a masonry wall elevation, diagonal lines for concrete in section, horizontal lines for timber. Set the pattern family and scale.

**Cut Pattern (Foreground):**
The hatch pattern shown when the material is cut through by the view plane — shown in floor plans and sections. Standard conventions: concrete = diagonal cross-hatch, timber = cross grain lines, insulation = zigzag.

**Foreground vs. Background Patterns:**
Each pattern has a foreground (solid lines) and background (lighter fill). In Revit 2019+ you can set both independently — for example, a brick wall in section might show a solid concrete cut pattern as foreground and a lighter grey fill as background.

**Surface Pattern Alignment:**
When you apply a surface pattern to a material and place a wall, the pattern tiles based on the element's geometry. For brick coursing to look realistic on an elevation, the pattern scale must match real brick dimensions (e.g., 225mm x 75mm for UK standard brick).

**Aligning Patterns:**
Select a wall in elevation → Tab to select the face → Align Patterns tool (on the contextual tab or right-click) — lets you snap the pattern starting point to a specific point on the wall for consistent coursing alignment across panels.`,
      },
      {
        title: 'Appearance Tab — Rendering Assets',
        content: `The Appearance tab controls the photorealistic render appearance — the texture, reflectivity, roughness, and opacity used by the rendering engine.

**Render Asset:**
Each material has one render asset assigned. The asset is a physically-based material definition (PBR — Physically Based Rendering). Key properties:

- **Diffuse/Color Map:** The base color or texture bitmap (e.g., a brick texture photograph)
- **Reflectivity:** How mirror-like the surface is (0 = matte, 1 = mirror)
- **Roughness/Glossiness:** How sharp reflections are (smooth glass vs. brushed metal)
- **Bump Map:** A texture that simulates surface depth (mortar joints in brick, wood grain)
- **Opacity:** Transparency (1 = opaque, 0 = fully transparent; for glass)
- **Cutout:** Defines transparent areas from a bitmap (for perforated panels, mesh)

**Replacing a Render Asset:**
Click the thumbnail in the Appearance tab → "Replace Asset" → browse the Autodesk Asset Library → find a photorealistic material (Concrete Poured, Brick Running Bond, Oak Plank, etc.) → double-click to assign.

**Editing Texture Scale:**
Click the texture bitmap thumbnail → set the width and height (in mm or m) to match real-world scale. A brick texture might be set to 900mm x 150mm to show three bricks wide and two courses tall per tile — this must match the actual brick dimensions for realistic proportions.

**Using Custom Bitmaps:**
Replace the diffuse texture with your own photograph or texture: click the bitmap thumbnail → Browse → navigate to your .jpg or .png file. For professional results use seamless (tileable) textures.`,
      },
      {
        title: 'Assigning Materials to Elements',
        content: `Materials are assigned at multiple levels in Revit — understanding which level to use for each situation is key.

**In Wall/Floor/Roof Type Compound Layers:**
Edit Type → Structure → Edit → click the Material cell in each layer row → Material Browser opens → select material. This is the primary assignment method for building elements. Each layer (concrete, insulation, plasterboard) has its own material.

**In Family Types:**
For component families (furniture, fixtures), materials are set in the family's type parameters. Select a furniture piece → Edit Type → look for "Material" parameters → assign materials. Custom families may expose multiple material parameters (body, finish, legs, etc.).

**By Category (Object Styles):**
Manage tab → Object Styles → set a default line color and weight per category. For surface fill, this is overridden by material assignments. Object Styles sets the fallback appearance for elements with no material assigned.

**Paint Tool:**
Architecture → Modify (paintbrush icon) → Paint → select a material → click a surface face in the model. The Paint tool applies a material override to a specific face of an element — without changing the element's type or layer materials. Use for: applying a special finish to one wall face without creating a new wall type, or for applying materials to imported geometry (DWG, SAT) that has no native Revit material.

**Removing Paint:**
Same Paint tool → Options Bar → select "Remove Paint" → click the painted face to remove the override and revert to the base material.`,
      },
      {
        title: 'Rendering in Revit',
        content: `Revit includes a built-in renderer (Autodesk Raytracer) capable of producing presentation-quality images directly from the model.

**Setting Up a Camera View:**
View tab → Create → Camera → click the camera position → click the target point. A perspective 3D view is created. In Properties: Eye Elevation (camera height), Target Elevation (what you are looking at).

**Adjusting the Crop Region:**
In the camera view, drag the crop region corners to frame the image. The aspect ratio can be locked or free. The crop region defines the output image frame.

**Render Dialog:**
View tab → Presentation → Render (or type "RR" in some versions).

Key settings:
- **Quality:** Draft (fast preview) / Low / Medium / High / Best (slow, photorealistic)
- **Output:** Screen (renders at current view resolution) / Printer (high-resolution output)
- **Lighting:** Interior/Exterior + Sun only / Artificial only / Sun and Artificial
- **Sun Settings:** Set geographic location and date/time for accurate solar angle
- **Background:** Sky (gradient sky), Color (solid), Image (custom HDRI or image)
- **Exposure:** Adjust brightness and contrast post-render

**Rendering Workflow:**
1. Set Quality to Draft first → render → check lighting and composition
2. Adjust materials, camera angle, lighting
3. When satisfied → set Quality to High or Best → render (may take minutes to hours depending on scene complexity)
4. Save the rendered image: in the Render dialog → Save to Project (saves as a Render view in Project Browser) or Export (saves as .jpg or .png)

**Limitations of Revit's Renderer:**
Revit's built-in renderer produces acceptable results for client presentations but is not competitive with dedicated rendering software (Enscape, V-Ray, Lumion, Twinmotion). For high-quality architectural visualization, export to one of these tools. Enscape and Twinmotion have direct Revit plugins for real-time rendering.`,
      },
    ],
    takeaways: [
      'Materials have Identity, Graphics (plan/section appearance), Appearance (rendering), Physical, and Thermal tabs',
      'The Graphics tab controls cut patterns and surface patterns — essential for professional construction drawings',
      'The Appearance tab uses PBR assets — replace with Autodesk Asset Library materials or custom bitmaps',
      'Assign materials per compound layer in wall/floor types; use the Paint tool for face-specific material overrides',
      'Revit rendering (Raytracer) is suitable for presentations; for high quality use Enscape, Lumion, or Twinmotion plugins',
    ],
    resource: {
      title: 'Autodesk Revit — Materials',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-8E5E5E5E-5E5E-4E5E-8E5E-5E5E5E5E5E62',
    },
    quiz: { label: 'Materials, Appearance & Rendering Quiz', questions: 10, time: '5 min' },
    prev: 'rv-14',
    next: 'rv-16',
  },

  // ─────────────────────────────────────────────────────────
  // rv-16: Phases & Design Options
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-16',
    num: 16,
    title: 'Phases & Design Options',
    topic: 'BIM Modeling',
    cat: 'intermediate',
    readTime: '16 min',
    free: false,
    desc: 'Use Revit Phases to model existing, demolished, and new construction in a single file — and Design Options to explore multiple design alternatives simultaneously.',
    intro: `Two of Revit's most powerful (and underused) features address two fundamental challenges in architectural work: renovation projects that involve existing buildings and demolition, and design exploration where multiple alternatives need to coexist for comparison.

Phases let you model what existed, what is being demolished, and what is being built — all in one file, with Revit automatically applying the correct graphic overrides for demolition plans, existing plans, and new works plans. Design Options let you develop two or three design alternatives for a key area simultaneously, comparing them on sheets and in schedules without duplicating the entire model.`,
    sections: [
      {
        title: 'Understanding Phases',
        content: `**What Phases Do:**
Every element in Revit has two phase parameters:
- **Phase Created** — the phase in which this element was built (or will be built)
- **Phase Demolished** — the phase in which this element was demolished (if ever)

A view also has a **Phase** setting. When you look at a view set to "New Construction" phase, Revit shows:
- Elements created in earlier phases that have not been demolished = Existing elements (shown in a different graphic style)
- Elements demolished in this phase = Demolished elements (shown dashed)
- Elements created in this phase = New elements (shown in the standard graphic style)

**Default Phases:**
Revit starts with two phases: "Existing" and "New Construction." For complex projects (multi-stage construction, multi-phase renovation), add more phases.

**Adding Phases:**
Manage tab → Phasing → Phases. The dialog shows a list of phases in sequential order. Add phases, rename them, and reorder them. A phase can only be after earlier phases — the sequence is one-way and cannot be circular.

Example phase sequence for a renovation:
1. Existing
2. Phase 1 Demolition
3. Phase 1 New Works
4. Phase 2 New Works`,
      },
      {
        title: 'Setting Element Phases',
        content: `**When You Place an Element:**
The element's Phase Created is automatically set to the Phase property of the active view. If you are working in a view set to "New Construction" and draw a wall, that wall's Phase Created = New Construction.

**Changing Phase Created:**
Select any element → Properties → Phase Created → change from dropdown. Use this when you need to correct elements placed in the wrong phase, or when importing existing geometry and setting it to "Existing."

**Demolishing Elements:**
Two methods:

**Method 1 — Demolish Tool:**
Manage tab → Phasing → Demolish → click elements to demolish. The element's Phase Demolished is set to the current view's phase. The element now appears as "Demolished" in this and future phase views.

**Method 2 — Properties:**
Select element → Properties → Phase Demolished → set from dropdown. More precise for batch changes or when the Demolish tool is not convenient.

**Splitting Elements at Phase Boundaries:**
If an existing wall is partially demolished, split the wall first (Modify → Split Element) → then demolish the portion being removed. This keeps the retained section as "Existing" and marks only the removed portion as "Demolished."`,
      },
      {
        title: 'Phase Filters & Graphic Overrides',
        content: `**Phase Filters:**
Each view has a Phase Filter property (in View Properties) that controls how elements in different phase states are displayed. Default phase filters:

| Filter Name | Existing | Demolished | New | Temporary |
|---|---|---|---|---|
| Show All | Overridden | Overridden | By Category | Overridden |
| Show Complete | By Category | Not displayed | Not displayed | Not displayed |
| Show Demo + New | Overridden | Overridden | By Category | Not displayed |
| Show New | Not displayed | Not displayed | By Category | Not displayed |
| Show Previous + Demo | By Category | Overridden | Not displayed | Not displayed |
| Show Previous + New | By Category | Not displayed | By Category | Not displayed |

**Configuring Phase Graphic Overrides:**
Manage tab → Phasing → Graphic Overrides. For each phase state (Existing, Demolished, New, Temporary), set:
- Lines (projection and cut weight, color, pattern)
- Patterns (surface fill color, pattern)
- Halftone (yes/no)

**Standard Conventions:**
- **Existing (retained):** Halftone grey or thin lines
- **Demolished:** Dashed lines, often with grey fill
- **New:** Full weight lines, no special override (standard drawing appearance)

**Drawing Set Setup:**
For a renovation project, create these views:
- "Existing Plan" — Phase: Existing, Filter: Show Complete
- "Demolition Plan" — Phase: Phase 1, Filter: Show Demo + New (or Show Previous + Demo)
- "New Works Plan" — Phase: New Construction, Filter: Show Previous + New

All three views come from one model — no manual drawing coordination required.`,
      },
      {
        title: 'Design Options',
        content: `**What Design Options Do:**
Design Options let you maintain multiple design alternatives for part of a model within a single project file. The main model contains elements that are common to all options. Each Design Option Set contains alternative versions of a specific area.

**When to Use Design Options:**
- Two different staircase configurations for the same location
- Three facade alternatives for client review
- Two structural grid spacings being evaluated
- Alternative reception desk layouts

**When NOT to Use Design Options:**
- Alternatives that affect the entire building (use separate project files instead)
- More than 4-5 alternatives (becomes unmanageable)
- Long-term parallel development tracks (Worksharing is better for this)

**Creating Design Options:**
Manage tab → Design Options → Design Options dialog.
1. New Set — creates a "Design Option Set" (a container for alternatives in one location)
2. New (Option) — adds an option within the set. The first option is automatically the "Primary" option.
3. Rename each option descriptively: "Stair Option A — Straight," "Stair Option B — L-Shaped"

**Adding Elements to a Design Option:**
With a Design Option active (select from the Design Options toolbar at the bottom of the screen, or Manage → Design Options → Make Primary/Edit Selected): elements you place go into the active option. Elements in the main model are visible in all options.`,
      },
      {
        title: 'Viewing & Presenting Design Options',
        content: `**Viewing an Option in a View:**
In View Properties (select nothing → Properties): "Design Option" parameter → choose a specific option from the dropdown, or "Automatic" (shows the Primary option by default). Each view can be set to show a different option — letting you place two plans side by side on a sheet for client comparison.

**Primary Option:**
One option in each set is designated Primary. Views set to "Automatic" show the Primary option. When the team decides on a preferred option, make it Primary → it now appears in all standard views without any per-view changes needed.

**Accepting a Design Option (Accepting as Main Model):**
When a decision is made: Manage → Design Options → select the Set → Accept Primary. The Primary option's elements are merged into the main model. All other options in the set (and their elements) are permanently deleted. This is irreversible — save a backup before accepting.

**Schedules and Design Options:**
Schedules can be filtered to show elements from a specific Design Option. In the Schedule Filter tab: "Design Option" equals [option name]. This lets you generate separate door schedules or area schedules for each option for comparison.

**Design Options on Sheets:**
Place two viewports on a comparison sheet — one view set to Option A, one to Option B. Add text notes labeling each option. This is a standard method for presenting alternatives to clients, with both options visible simultaneously on one sheet.

**Coordination with Design Options:**
Elements in a Design Option do not participate in Wall Join or Room calculation with the main model or other options. Check for clashes within each option separately. Room areas in a Design Option view may differ from the main model depending on which walls are in that option.`,
      },
    ],
    takeaways: [
      'Every element has Phase Created and Phase Demolished — view Phase and Phase Filter settings control what is displayed and how',
      'Phase Graphic Overrides define the visual convention for existing, demolished, and new elements across the drawing set',
      'One model produces all renovation drawing types (Existing, Demolition, New Works) through Phase and Filter settings',
      'Design Options maintain multiple alternatives in one file — each Option Set contains alternatives for a specific area only',
      'Accept Primary to merge a chosen Design Option into the main model — this permanently deletes all other options in that set',
    ],
    resource: {
      title: 'Autodesk Revit — Phases and Design Options',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-9E5E5E5E-5E5E-4E5E-8E5E-5E5E5E5E5E63',
    },
    quiz: { label: 'Phases & Design Options Quiz', questions: 10, time: '5 min' },
    prev: 'rv-15',
    next: 'rv-17',
  },
];
