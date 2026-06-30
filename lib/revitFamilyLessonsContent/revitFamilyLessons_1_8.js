// ============================================================
// REVIT FAMILY CREATION — LESSONS rf-1 through rf-8 (BEGINNER)
// File: lib/revitFamilyLessonsContent/lessons-1-8.js
// Index: lib/revitFamilyLessonsData.js
// IDs use prefix: rf-
// Free lessons: NONE — all lessons start at Basic plan
// cat: 'beginner'
// ============================================================

export const lessons_1_8 = [

  // ─────────────────────────────────────────────────────────
  // rf-1: What Are Revit Families?
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-1',
    num: 1,
    title: 'What Are Revit Families?',
    topic: 'Foundation',
    cat: 'beginner',
    readTime: '12 min',
    free: false,
    desc: 'Understand the three types of Revit families, how they relate to each other, and why mastering family creation is the skill that separates competent Revit users from genuine BIM specialists.',
    intro: `Every element you place in a Revit project — a door, a structural column, a light fixture, a section mark — is a family. Families are the building blocks of every Revit model. Yet most Revit users spend their careers loading families from libraries without understanding how they work, why some perform well and others slow the model to a crawl, or how to build exactly what a project requires when no suitable family exists.

This course changes that. By the end, you will build families from scratch with confidence — parametric, professional, and production-ready. This first lesson establishes the conceptual foundation: what families are, how the three types differ, and why the skill matters so much in professional BIM practice.`,
    sections: [
      {
        title: 'The Three Family Types',
        content: `Revit has three distinct family types. Understanding when to use each is the first decision in any family creation workflow.

**1. System Families**
System families are built into Revit and cannot be saved as external .rfa files. They define the fundamental building elements: Walls, Floors, Roofs, Ceilings, Stairs, Railings, and MEP distribution systems. You cannot download a wall family — you create new wall types by duplicating existing ones within the project and editing their compound layer structure.

System families are highly optimised for performance and coordination. Revit uses them to perform automatic joins, room bounding, structural analysis connections, and phase management. Their internal structure is fixed — you control their appearance and composition through type parameters, but not their fundamental behaviour.

**2. Loadable Families (.rfa)**
Loadable families are created in the Family Editor, saved as .rfa files, and loaded into projects. This is the category this course focuses on. Almost everything that is not a wall, floor, roof, ceiling, or stair is a loadable family: doors, windows, furniture, structural columns, light fixtures, plumbing fixtures, equipment, annotation tags, titleblocks, and thousands of other elements.

Loadable families are fully parametric — their geometry and data are driven by parameters you define. One family can contain dozens of types (sizes, configurations, finishes) and can be shared across projects and offices. This reusability is what makes loadable family creation such a high-value skill.

**3. In-Place Families**
In-place families are created directly within a project for unique, non-repeating elements. A bespoke reception desk, an irregular soffit, a complex site feature — elements that are specific to one location in one project and will never be reused. In-place families are modelled using the same solid and void forms as loadable families but are stored inside the project file rather than as external .rfa files.

In-place families are often overused by Revit users who have not learned the loadable family workflow. We cover when in-place is genuinely appropriate in rf-21.`,
      },
      {
        title: 'The Family Hierarchy — Category, Family, Type, Instance',
        content: `Every element in a Revit model exists at one of four levels in a hierarchy. Understanding this hierarchy is fundamental to understanding how families work.

**Category**
The broadest classification. Revit has approximately 200 built-in categories: Doors, Windows, Furniture, Structural Columns, Lighting Fixtures, Mechanical Equipment, etc. A family's category determines which schedule it appears in, which tag annotates it, how it behaves in Visibility/Graphics overrides, and how it is exported to IFC. You set the category when creating a family and cannot change it without rebuilding the family.

**Family**
A specific family within a category. "Single-Flush Door" is a family within the Doors category. The family defines the geometry, parameters, and behaviour shared across all its types.

**Type**
A specific configuration of a family. "Single-Flush Door: 900x2100mm" and "Single-Flush Door: 1000x2100mm" are two types of the same family. Types share the same geometry logic but have different values for type parameters (width, height, frame material, etc.). Creating multiple types within one family is far more efficient than creating separate families for each size.

**Instance**
A single placed occurrence of a type in the model. Each door placed on a wall is an instance. Instances share type parameters but can have different instance parameters (sill height, phase created, comments, mark number).

**Why This Matters for Family Creation:**
When you build a family, you are defining the geometry and parameters at the Family level. You create Types within the Family Editor by setting specific parameter values. When a team member places your family in a project, they place Instances of your Types. Getting the hierarchy right from the start — knowing which parameters should be Type vs. Instance — is one of the most important design decisions in family creation.`,
      },
      {
        title: 'Why Family Creation Matters',
        content: `Most Revit users load families from the default Autodesk library or from manufacturer websites. This works for standard elements — a generic office chair, a standard recessed downlight. But it breaks down in four common situations:

**Situation 1 — The element does not exist in any library.**
A custom-designed joinery unit, a bespoke facade panel, a specialist piece of medical equipment — manufacturer families exist for common products but not for everything a building project requires. A team that cannot build families is stopped whenever a custom element is needed.

**Situation 2 — Available families are poorly built.**
Downloaded families vary enormously in quality. A furniture family from a manufacturer's website might have 50,000 polygons for a chair that should have 500. At Coarse detail level it should appear as a simple box. Placed 200 times across a fit-out project, that family makes the model unusable. A practitioner who understands family creation can assess quality, rebuild poor families, and enforce standards.

**Situation 3 — The family needs project-specific data.**
A client requires fire rating, asset ID, warranty period, and maintenance frequency on every mechanical equipment item for FM handover. Standard library families do not have these parameters. Building families with the correct shared parameters from the start means this data is captured correctly throughout the project.

**Situation 4 — The office needs a consistent standard.**
A firm that builds its own family library — with consistent naming, quality standards, and parameter schemas — produces better projects faster than one relying on ad-hoc library downloads. Family creation is the skill that makes this possible.

Family creation is not an advanced niche skill. It is a core professional competency for anyone who wants to work at a high level in BIM.`,
      },
      {
        title: 'The Family Creation Workflow — Overview',
        content: `Before diving into the details across 24 lessons, here is the end-to-end workflow you will learn in this course. Every family you build follows this sequence:

**Step 1 — Define the brief:**
What does this family need to do? What category? What parameters? What types? What level of geometric detail at each Revit Detail Level (Coarse, Medium, Fine)? Answering these questions before opening the Family Editor prevents rebuilding.

**Step 2 — Choose the right template (.rft):**
The family template determines the category, hosting behaviour, and initial setup. Choosing the wrong template means rebuilding from scratch. Covered in rf-3.

**Step 3 — Set up reference planes:**
Reference planes are the skeleton. All geometry references them. All parameters drive them. Getting the reference plane structure right is the foundation of a well-behaved parametric family. Covered in rf-4.

**Step 4 — Add parameters and dimensions:**
Label dimensions to create parameters. Define Instance vs. Type. Set up formulas. Covered in rf-5 and rf-10.

**Step 5 — Build geometry:**
Extrusions, blends, revolves, sweeps, and voids — the solid form tools. Covered in rf-6 and rf-7.

**Step 6 — Add controls:**
Visibility parameters, material parameters, nested families, connectors. Covered in rf-11 through rf-16.

**Step 7 — Create types:**
Define the type table — all size variants and configurations. Covered in rf-9.

**Step 8 — Test and QA:**
Load into a test project, check all types, verify parameters schedule correctly, check detail level behaviour, verify file size. Covered in rf-8 and rf-22.

**Step 9 — Document and publish:**
Naming convention, folder structure, version notes, add to library. Covered in rf-23.

This workflow applies whether you are building a simple furniture family in an afternoon or a complex parametric curtain wall panel over several days. The principles are identical — the complexity scales.`,
      },
    ],
    takeaways: [
      'Three family types: System (built-in, no .rfa), Loadable (.rfa, fully parametric, reusable), In-Place (project-specific, non-repeating)',
      'The hierarchy Category > Family > Type > Instance determines how families behave in schedules, tags, VG overrides, and IFC exports',
      'A family\'s category is set at creation and cannot be changed — getting it right from the start is critical',
      'Family creation is a core professional BIM skill — not an advanced niche — required for custom elements, quality control, data standards, and office libraries',
      'Every family follows the same workflow: brief → template → reference planes → parameters → geometry → controls → types → test → publish',
    ],
    resource: {
      title: 'Autodesk Revit — Introduction to Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-families-introduction',
    },
    prev: null,
    next: 'rf-2',
  },

  // ─────────────────────────────────────────────────────────
  // rf-2: The Family Editor Interface
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-2',
    num: 2,
    title: 'The Family Editor Interface',
    topic: 'Interface',
    cat: 'beginner',
    readTime: '13 min',
    free: false,
    desc: 'Navigate the Family Editor confidently — understanding how its interface differs from the project environment, what each panel does, and how to set up your workspace for efficient family creation.',
    intro: `The Family Editor is a separate environment from the Revit project. It looks similar — the same ribbon structure, the same Properties panel, the same Project Browser — but it behaves differently and has different tools. New family creators often struggle because they try to apply project-environment habits to the Family Editor without understanding the differences.

This lesson maps the Family Editor interface completely so you start every family creation session knowing exactly where everything is and why it is there. Once you are fluent in the interface, you can focus on the creative and technical work of building the family itself.`,
    sections: [
      {
        title: 'Opening the Family Editor',
        content: `**Creating a New Family:**
File → New → Family → select a template (.rft file) → Open. The Family Editor opens with the template's pre-built reference planes and views already set up. The title bar shows the family name (e.g., "Family1 [Family Editor]") — the "[Family Editor]" label confirms you are in the right environment.

**Opening an Existing Family:**
File → Open → Family → navigate to the .rfa file → Open. Or from within a project: select a placed family instance → right-click → Edit Family. This opens the family in the Family Editor with a live connection back to the project — the "Load into Project" button sends changes directly to the open project.

**Identifying the Environment:**
The quickest way to confirm you are in the Family Editor (not a project) is the title bar and the contextual ribbon. The Family Editor shows "Create" and "Modify" tabs with solid-form tools (Extrusion, Blend, Revolve, Sweep). If you see "Architecture," "Structure," "Systems" tabs instead, you are in a project.

**The Family Editor Does Not Have:**
- A Project Browser with Sheets, Schedules, Legends
- Phase settings
- Worksets
- The full VG dialog (limited visibility controls only)
- Rooms, Areas, or annotation schedules`,
      },
      {
        title: 'The Ribbon — Family Editor Tabs',
        content: `**Create Tab:**
The primary working tab. Contains all geometry creation tools:

- **Properties panel:** Family Category and Parameters (sets the family category), Family Types (opens the type table dialog)
- **Datum panel:** Reference Plane, Reference Line — the skeleton tools
- **Forms panel:** Extrusion, Blend, Revolve, Sweep, Swept Blend (solid forms) — each has a "void" version for cutting
- **Model panel:** Component (places nested families), Model Line, Model Text
- **Detail panel:** Detail Line, Detail Component, Filled Region, Masking Region — 2D annotation elements
- **Control panel:** Control (adds flip arrows and rotation grips visible in the project)
- **Connector panel:** (visible in MEP family templates only) Duct, Pipe, Electrical, Cable Tray connectors
- **Work Plane panel:** Set, Show, Viewer — controls the active work plane for geometry placement

**Modify Tab:**
Standard editing tools — Move, Copy, Rotate, Mirror, Array, Scale, Trim, Align, Pin. Identical behaviour to the project environment.

**Annotate Tab:**
Dimension tools (Aligned, Angular, Radial), Symbolic Line, Filled Region. Used for adding annotation that appears in 2D views of the placed family.

**View Tab:**
Manage Views, Visibility/Graphics (simplified version), Thin Lines toggle.

**Family Types Button (critical):**
Create tab → Properties panel → Family Types. This opens the Family Types dialog — the control panel for all parameters and types in the family. You will use this constantly. Learn its location immediately.`,
      },
      {
        title: 'Views in the Family Editor',
        content: `The Family Editor opens with a set of pre-built views that vary by template type. Understanding these views is essential for placing geometry correctly.

**Standard Views in Most Templates:**

- **Ref. Level (Floor Plan view):** The primary plan view. The name "Ref. Level" is specific to the Family Editor — it is not a project level. This is where you draw most 2D reference planes and profile-based geometry.
- **Front Elevation:** Looking at the front face of the family. Used for heights, vertical reference planes, and form-based geometry.
- **Left Elevation:** (sometimes Right) Looking at the side. Used for depth-related geometry.
- **3D View:** A perspective or isometric view of the family. Use to verify 3D geometry after building.

**Additional Views by Template Type:**

- Door and Window templates add a plan "Cut" view (showing the element at the plan cut height) and a sill plan view
- Structural templates add structural plan views and section views
- Profile templates have only one view (the profile plane)

**The Work Plane:**
Every solid form you create in the Family Editor is placed on a Work Plane. By default, the work plane in the plan view is the Ref. Level plane. In elevation views, the work plane is the vertical face you are looking at. Switching work planes (Create tab → Work Plane → Set) allows you to place geometry on any reference plane — essential for complex 3D families.

**Opening Additional Views:**
View tab → Create → Plan View or Elevation. You can create additional plan views at different heights (useful for multi-level families like stairs or tall equipment). However, most families only need the pre-built views — avoid creating unnecessary views as they increase file size.`,
      },
      {
        title: 'The Properties Panel & Family Types Dialog',
        content: `**Properties Panel in the Family Editor:**
When nothing is selected, the Properties panel shows the family\'s own properties — not an element\'s properties. Key settings:

- **Work Plane:** the current active plane for geometry placement
- **Always Vertical:** (for face-hosted families) keeps the family perpendicular to the host face regardless of angle
- **Shared:** marks the family as a Shared Family (covered in rf-13 — Nested Families)
- **Room Calculation Point:** controls whether placed instances contribute to room area calculations

When a geometry element is selected, Properties shows that element\'s parameters: Extrusion Start/End, Material, Subcategory, Solid/Void.

**The Family Types Dialog (the most important dialog in family creation):**
Create tab → Family Types button. This dialog is the control centre for the entire family. It shows:

- **Types list (top left):** all defined types in the family. Click "New" to add a type, "Rename" to rename, "Delete" to remove.
- **Parameters list (main area):** every parameter in the family, grouped by category (Dimensions, Identity Data, Graphics, Other). For each parameter: current value for the selected type, whether it is Instance or Type, and a formula field.
- **New Parameter button:** adds a new parameter to the family.
- **Formula field:** the cell beside each parameter value. Click it to enter a formula (e.g., Width * 0.1).

**Workflow in the Family Types Dialog:**
1. Select a type from the type list
2. Review or change parameter values for that type
3. Switch to another type and set different values
4. Click "Apply" to update the 3D view without closing
5. Click "OK" when finished

Always click "Apply" after changing parameter values to verify the geometry updates correctly before closing the dialog.`,
      },
      {
        title: 'Setting Up Your Workspace',
        content: `A few workspace settings make family creation significantly more efficient. Set these at the start of every family session.

**Thin Lines (always on during family creation):**
View tab → Graphics → Thin Lines (or keyboard shortcut TL). In the Family Editor, thin lines mode makes reference planes, dimension strings, and geometry outlines much clearer. Without it, heavy line weights obscure the fine detail of reference plane positioning. Keep Thin Lines on whenever working in the Family Editor.

**Snapping Settings:**
Manage tab → Settings → Snapping. In family creation, precise snapping is critical. Ensure these are enabled:
- Intersections
- Endpoints
- Midpoints
- Perpendicular
- Nearest

Turn off "Snap to Remote Objects" — in the Family Editor this can cause unintended snaps to distant geometry.

**Reference Plane Visibility:**
Reference planes are shown as blue dashed lines by default. If they are not visible: VG dialog → Annotation Categories → Reference Planes → check the visibility box. Reference planes must always be visible during family creation.

**The "Show" Work Plane Button:**
Create tab → Work Plane panel → Show. Toggles the work plane grid visible/invisible. Turn it on when placing geometry to confirm you are placing on the correct plane. Turn it off when the grid obscures the view.

**Saving the Family:**
Family files are saved as .rfa. Save frequently — the Family Editor does not have auto-save. Use File → Save (Ctrl+S). Name the file following your office naming convention from the first save. Changing the filename later does not break anything in the Family Editor (unlike project Central Files), but consistent naming from the start is good practice.`,
      },
    ],
    takeaways: [
      'The Family Editor is identified by "[Family Editor]" in the title bar and the Create tab with solid-form tools — not the Architecture/Structure/Systems project tabs',
      'The Family Types dialog (Create → Family Types) is the control centre — it shows all parameters, all types, and all formulas in one place',
      'Standard Family Editor views: Ref. Level (plan), Front and Left elevations, and a 3D view — templates pre-build these',
      'Always enable Thin Lines (TL) in the Family Editor — it makes reference planes and geometry details significantly clearer',
      'Work Planes determine where geometry is placed — understanding and controlling the active work plane is essential for 3D family creation',
    ],
    resource: {
      title: 'Autodesk Revit — The Family Editor',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-family-editor-interface',
    },
    prev: 'rf-1',
    next: 'rf-3',
  },

  // ─────────────────────────────────────────────────────────
  // rf-3: Family Templates — Choosing the Right One
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-3',
    num: 3,
    title: 'Family Templates — Choosing the Right One',
    topic: 'Foundation',
    cat: 'beginner',
    readTime: '12 min',
    free: false,
    desc: 'Navigate Revit\'s family template library with confidence — understanding what each template provides, how hosting behaviour is determined, and how to avoid the most costly beginner mistake in family creation.',
    intro: `Choosing the wrong family template is the most common and most costly mistake in family creation. The template determines the family\'s category, its hosting behaviour, its initial reference plane setup, and fundamental constraints on how it can be placed and used. Choose wrong and you discover the problem only after hours of work — at which point the only solution is to start over in the correct template.

This lesson teaches you to choose the right template every time by understanding what templates encode, how to read the template library, and the key decisions that drive template selection.`,
    sections: [
      {
        title: 'What a Family Template Contains',
        content: `A family template (.rft file) is a starting-point family file that pre-configures:

**Category Assignment:**
The template sets the family\'s Revit category. A "Door.rft" template creates a Doors-category family. A "Furniture.rft" creates a Furniture-category family. This is baked into the template — you cannot change the category after starting from a template without recreating the family.

**Hosting Behaviour:**
Whether the family requires a host element (a wall, floor, ceiling, or face) or can be placed freely. This is also set by the template. A wall-hosted door template creates a family that cannot be placed without a wall. A non-hosted furniture template creates a family that can be placed anywhere.

**Pre-Built Reference Planes:**
Templates include the standard reference planes for the family type. A door template has reference planes for the wall face, the wall centre, the door opening width, and the door height. These pre-built planes follow Revit\'s conventions for how that family type should be dimensioned and constrained.

**Pre-Built Parameters:**
Some templates include standard parameters. Door templates include Width and Height type parameters. Window templates include Width, Height, and Sill Height. These built-in parameters correspond to Revit\'s scheduling and coordination conventions — use them rather than creating duplicate parameters.

**Pre-Built Connectors:**
MEP templates include pre-placed connectors (duct, pipe, electrical) appropriate for the family type.`,
      },
      {
        title: 'Hosted vs. Non-Hosted — The Most Important Decision',
        content: `The single most important template decision is whether the family requires a host. This determines not just how it is placed but how it behaves in the model, how it is scheduled, and what happens when the host is deleted.

**Wall-Hosted:**
The family must be placed on a wall. It cuts through the wall automatically (for doors, windows, openings). When the wall is deleted, the family is deleted. When the wall moves, the family moves with it. Use for: Doors, Windows, Wall-mounted fixtures, Electrical outlets on walls.

Template examples: Door.rft, Window.rft, Wall-Based Generic Model.rft

**Floor-Hosted:**
Placed on a floor surface. Moves with the floor. Use for: Floor drains, Floor boxes, Recessed floor fixtures.

Template examples: Floor-Based Generic Model.rft

**Ceiling-Hosted:**
Placed on a ceiling element. Use for: Recessed light fixtures, Sprinkler heads, Ceiling-mounted diffusers.

Template examples: Ceiling-Based Generic Model.rft

**Face-Hosted:**
Placed on any face — wall, floor, ceiling, or sloped surface. More flexible than single-surface hosting. Use for: Surface-mounted lights, Wall outlets when the exact surface type varies, Fixtures that appear on multiple surface types.

Template examples: Face-Based Generic Model.rft

**Non-Hosted (Work Plane-Based):**
Placed on the active work plane (usually the floor level). Can be placed anywhere without requiring a specific host. The most common type for furniture, equipment, and general-purpose families. Use for: Furniture, Equipment, Freestanding fixtures, Structural columns.

Template examples: Metric Generic Model.rft, Furniture.rft, Structural Column.rft

**The Golden Rule:**
Choose the most specific hosting type that matches the real-world installation of the element. A wall outlet is always on a wall — use wall-hosted. A desk is never attached to a wall — use non-hosted. A light might be on a ceiling or a sloped soffit — use face-hosted.`,
      },
      {
        title: 'The Template Library — What is Available',
        content: `Revit\'s template library is stored at: C:\\ProgramData\\Autodesk\\RVT 20XX\\Family Templates\\[Region]\\

Templates are organised into subfolders by discipline. The key folders and their most useful templates:

**Root folder (most commonly used):**
- Metric Generic Model.rft — the most versatile non-hosted template
- Metric Generic Model face based.rft — face-hosted version
- Metric Generic Model ceiling based.rft
- Metric Generic Model floor based.rft
- Metric Generic Model wall based.rft

**Architectural folder:**
- Door.rft — wall-hosted, with pre-built door-specific planes
- Window.rft — wall-hosted, with sill height parameter
- Curtain Wall Panel.rft — for curtain wall infill panels
- Curtain Wall Mullion.rft — for mullion profiles
- Railing-Baluster Panel.rft

**Structural folder:**
- Structural Column.rft — with analytical model
- Structural Framing.rft — for beams and braces
- Structural Foundation.rft

**MEP folders:**
- Mechanical Equipment.rft — for HVAC units, AHUs
- Pipe Fitting.rft — for elbows, tees, reducers
- Duct Fitting.rft
- Electrical Equipment.rft
- Lighting Fixture.rft — ceiling-mounted by default
- Lighting Device.rft — wall-mounted

**Annotation folder (2D families):**
- Generic Annotation.rft — for symbols, north arrows, legends
- Tag.rft — for element tags (reads model parameters)
- Titleblock.rft — for sheet titleblocks

**Profile folder:**
- Profile.rft — for sweep profiles used by walls, railings, stairs`,
      },
      {
        title: 'Category — How to Choose When Unsure',
        content: `Sometimes the right category is not obvious. A bespoke reception desk — is it Furniture or Casework or Generic Model? A specialist piece of lab equipment — is it Mechanical Equipment or Generic Model or Specialty Equipment?

**The Category Decision Framework:**

**Step 1 — Does a specific category exist for this element?**
Check Revit\'s category list: Manage tab → Settings → Object Styles → Model Objects. If a dedicated category exists (Furniture, Plumbing Fixtures, Lighting Fixtures, Medical Equipment), use it. Dedicated categories give the family correct scheduling behaviour, tag compatibility, and IFC mapping.

**Step 2 — What schedule should this element appear in?**
If the element needs to appear in a Furniture schedule, use the Furniture category. If it needs its own dedicated schedule separate from other elements, use a specific category. If it will be counted in a general equipment register, consider Specialty Equipment or Generic Model.

**Step 3 — How will it be tagged?**
Tag families are category-specific. A Furniture tag only reads Furniture-category families. If you need a specific tag style for the element, check whether a tag for that category exists or can be built.

**Step 4 — What is the IFC entity?**
For projects requiring IFC export, the Revit category maps to an IFC entity type. Doors map to IfcDoor. Windows to IfcWindow. Furniture to IfcFurniture. Generic Model maps to IfcBuildingElementProxy — a catch-all that loses specificity. If IFC compliance matters, choose the most specific correct category.

**The Generic Model Trap:**
Generic Model is often used as a default when the creator is unsure. Resist this. A lighting fixture in Generic Model category will not appear in lighting schedules, will not be tagged by lighting fixture tags, and will export as IfcBuildingElementProxy. The few minutes spent choosing the right category prevents hours of downstream problems.`,
      },
    ],
    takeaways: [
      'The template sets the category and hosting behaviour permanently — choosing wrong means starting over, so get this decision right first',
      'Hosting types: Wall-hosted (doors/windows), Floor-hosted (drains), Ceiling-hosted (lights), Face-hosted (flexible), Non-hosted (furniture/equipment)',
      'Use the most specific hosting type that matches the element\'s real-world installation — not the most flexible',
      'The Generic Model trap: using Generic Model as a default loses scheduling, tag compatibility, and IFC entity specificity — always choose a specific category',
      'Template library location: C:\\ProgramData\\Autodesk\\RVT 20XX\\Family Templates\\ — know the key subfolders (Architectural, Structural, MEP, Annotation, Profile)',
    ],
    resource: {
      title: 'Autodesk Revit — Family Template Files',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-family-templates',
    },
    prev: 'rf-2',
    next: 'rf-4',
  },

  // ─────────────────────────────────────────────────────────
  // rf-4: Reference Planes & Lines
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-4',
    num: 4,
    title: 'Reference Planes & Lines',
    topic: 'Geometry',
    cat: 'beginner',
    readTime: '14 min',
    free: false,
    desc: 'Master reference planes and reference lines — the invisible skeleton that every parametric family depends on — including strong vs. weak references, naming conventions, and the most common setup mistakes.',
    intro: `Reference planes are the foundation of every parametric family. Before any geometry is drawn, before any parameter is created, the reference plane structure determines whether a family will flex correctly when parameters change, whether dimensions will lock reliably, and whether the family will behave consistently in all the situations a project team puts it through.

Most family creation problems — geometry that does not update when a parameter changes, elements that fall apart when a type is switched, families that break when placed on an angled wall — trace back to poorly planned reference planes. This lesson teaches you to plan and build reference plane structures that make everything else work correctly.`,
    sections: [
      {
        title: 'What Reference Planes Do',
        content: `Reference planes are flat infinite planes in 3D space (appearing as lines in plan and elevation views). In the Family Editor, they serve three critical functions:

**1. They are the geometry anchors.**
All solid and void geometry in a family should be locked to reference planes, not to other geometry. When a parameter changes the position of a reference plane, all geometry locked to it moves automatically. This is how parametric flexibility works.

**2. They are the dimension targets.**
When you label a dimension to create a parameter, the dimension must measure between reference planes (or between a reference plane and a fixed constraint). Dimensions between geometry edges are fragile — they break when geometry changes. Dimensions between reference planes are stable.

**3. They define the family origin and orientation.**
The intersection of the two default centre reference planes (horizontal and vertical, labelled "Centre (Front/Back)" and "Centre (Left/Right)") defines the family\'s origin point — the point that aligns to the cursor when the family is placed in a project. Getting the origin at the right location (the insertion point the user expects) is an important reference plane decision.

**Reference Lines vs. Reference Planes:**
Reference Lines are similar to Reference Planes but exist in specific 3D space (they have defined length and endpoints). They are used for angle-driven geometry — a rotation angle parameter drives the angle of a Reference Line, and geometry locked to it rotates accordingly. For most beginner families, Reference Planes are sufficient. Reference Lines become important in advanced families with rotational parameters.`,
      },
      {
        title: 'Strong vs. Weak References',
        content: `Every reference plane has a "Is Reference" property that determines how Revit\'s snapping and dimensioning systems interact with it. This is one of the most important — and most overlooked — settings in family creation.

**Strong Reference (Is Reference = Left, Right, Front, Back, Top, Bottom, Center Left/Right, Center Front/Back):**
Strong references participate in snapping and temporary dimensions when the family is placed in a project. When a user places the family and moves it near a wall, strong references snap to the wall face. When a user places a dimension to the family in a project, strong references are the snap targets. Strong references also appear in the Reference dropdown in Revit\'s dimensioning tool.

**Weak Reference (Is Reference = Not a Reference):**
Weak references are internal construction planes used only within the Family Editor. They do not appear as snap targets when the family is placed in a project. Use for intermediate construction planes, helper geometry aligners, and internal constraint planes that should not be exposed to the user placing the family.

**Named Reference (Is Reference = Left/Right/Front/Back etc.):**
Named references get specific orientation labels that help users dimension to the correct face. A wall-hosted family should have Front and Back named references on the exterior and interior faces. A furniture family should have Left, Right, Front, and Back named references on its outer edges. These names appear in Revit\'s dimension tool reference options.

**Setting the Is Reference Property:**
Select a reference plane → Properties panel → "Is Reference" dropdown → choose the appropriate type.

**The Practical Rule:**
Every reference plane that a project team member might want to dimension to, snap to, or align to should be a Strong Reference with an appropriate name. Internal helper planes used only for construction geometry should be Not a Reference.`,
      },
      {
        title: 'Planning the Reference Plane Structure',
        content: `Planning reference planes before drawing anything is the professional approach. It prevents the most common family creation error: building geometry first and then discovering the reference plane structure does not support the required parametric flexibility.

**The Planning Process:**

**Step 1 — Define the origin.**
Where should the family\'s insertion point be? For a door, the origin is at the wall face and one side of the opening. For a piece of furniture, the origin is typically at the front-left corner or the geometric centre. The two default centre planes (already in every template) define this origin — move them or use them as-is.

**Step 2 — Identify all variable dimensions.**
List every dimension that will be a parameter. Width. Depth. Height. Shelf spacing. These dimensions will each require two reference planes — one for each end of the dimension.

**Step 3 — Identify fixed relationships.**
Some geometry is always centred, always symmetric, always at a fixed offset. These relationships can be encoded as EQ constraints or formulas rather than explicit reference planes — reducing complexity.

**Step 4 — Draw the planes in order.**
In the plan view, draw the outer boundary planes first (the overall width and depth extents). Then draw the inner planes (for internal divisions, symmetric elements, etc.). Label each plane with a descriptive name immediately after drawing it.

**Step 5 — Add EQ constraints for symmetry.**
If the family is symmetric about its centre, select the two outer planes and the centre plane → apply EQ constraint. Now the centre plane automatically stays centred regardless of how the outer planes move.

**Example — Simple Rectangular Furniture Family:**
- Left reference plane (named: Left, Strong Reference)
- Right reference plane (named: Right, Strong Reference)
- Centre plane between Left and Right (named: Centre Left/Right, Strong Reference)
- Front reference plane (named: Front, Strong Reference)
- Back reference plane (named: Back, Strong Reference)
- Centre plane between Front and Back (named: Centre Front/Back, Strong Reference)
- Top reference plane at the family height (named: Top, Strong Reference)
- Ref. Level plane at the base (already exists in template, named: Bottom, Strong Reference)`,
      },
      {
        title: 'Naming Reference Planes',
        content: `Naming reference planes is not optional — it is a professional standard. Named planes make families maintainable by anyone, not just the original creator.

**How to Name a Reference Plane:**
Select the reference plane → Properties panel → "Name" field → type the name. The name appears as a small text label on the plane in the Family Editor. It also appears in the "Is Reference" property options after naming.

**Naming Conventions:**

For outer boundary planes: use the directional name matching the Is Reference setting (Left, Right, Front, Back, Top, Bottom).

For centre planes: Left/Right Centre, Front/Back Centre (or use the standard names the template provides).

For parametric internal planes: use descriptive names matching the parameter they drive. If a plane drives a "Shelf Height" parameter, name the plane "Shelf Height." If a plane drives "Door Opening Width," name it "Door Opening Width." This creates a direct readable connection between the plane and the parameter.

For construction/helper planes: prefix with "CONST-" or "REF-" to clearly mark them as internal (e.g., "CONST-Mirror Line," "REF-Hinge Centre").

**Why Naming Matters in Practice:**
A well-named family can be opened by any experienced Revit user and understood immediately. An unnamed family — with dozens of blue dashed lines and no labels — is opaque. When the original creator leaves the firm, unmaintainable families become a liability. Named planes are the difference between a professional asset and a black box.

**Checking Plane Names:**
In the Family Editor, you can select any reference plane and see its name in Properties. Zoom in on dense areas — plane name labels can overlap. If names are hard to read, temporarily switch to Thin Lines mode (TL) and increase zoom.`,
      },
    ],
    takeaways: [
      'Reference planes are the skeleton: all geometry locks to them, all dimensions measure between them, and the intersection of the centre planes defines the family origin',
      'Strong References snap and dimension correctly in projects; Weak References (Not a Reference) are internal construction aids only',
      'Plan the reference plane structure before drawing any geometry — list all variable dimensions and identify symmetric relationships',
      'Name every reference plane immediately after drawing it — directional names for outer planes (Left/Right/Front/Back), parameter names for driven planes (e.g., Shelf Height)',
      'EQ constraints between outer planes and a centre plane enforce symmetry automatically — no formula needed',
    ],
    resource: {
      title: 'Autodesk Revit — Reference Planes in Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-reference-planes-families',
    },
    prev: 'rf-3',
    next: 'rf-5',
  },

  // ─────────────────────────────────────────────────────────
  // rf-5: Dimensions & Parameters
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-5',
    num: 5,
    title: 'Dimensions & Parameters',
    topic: 'Parameters',
    cat: 'beginner',
    readTime: '15 min',
    free: false,
    desc: 'Create parameters by labeling dimensions, understand Instance vs. Type parameters, build the Family Types table, and connect parameters to geometry — the core of what makes a family truly parametric.',
    intro: `Parameters are what make a Revit family intelligent rather than static. A family without parameters is just a 3D shape — it cannot resize, cannot carry data, cannot adapt to project requirements. A family with well-designed parameters can serve an entire project across dozens of size variants, carry the FM data the client requires, and update automatically when design decisions change.

This lesson covers the complete parameter workflow: creating parameters by labeling dimensions, choosing between Instance and Type, building the type table, and connecting parameters to geometry so the family actually responds when values change.`,
    sections: [
      {
        title: 'How Parameters Are Created — The Label Workflow',
        content: `In the Family Editor, parameters are not created by filling in a form — they are created by labeling a dimension. This is the fundamental parametric workflow in Revit families.

**The Four-Step Parameter Creation Process:**

**Step 1 — Draw reference planes.**
You need at least two reference planes to dimension between them. These should already exist from your rf-4 planning.

**Step 2 — Place a dimension between the reference planes.**
Annotate tab → Aligned Dimension (or keyboard shortcut DI) → click one reference plane → click the other → click to place the dimension string. The dimension shows the current distance between the planes.

**Step 3 — Label the dimension.**
Select the dimension string → in the Options Bar or Properties, click the "Label" dropdown → select "Add Parameter." The "Parameter Properties" dialog opens.

**Step 4 — Configure the parameter.**
In the Parameter Properties dialog:
- Name: the parameter name (e.g., "Width", "Height", "Shelf Depth")
- Discipline: Common, Architecture, Structure, HVAC, etc.
- Type of Parameter: Length, Area, Volume, Angle, Number, Integer, Yes/No, Material, Text, URL
- Group Under: where it appears in the Family Types dialog (Dimensions, Identity Data, Graphics, etc.)
- Instance or Type: the critical decision (covered next)
- Reporting Parameter: for read-only calculated values

Click OK. The dimension label now shows the parameter name instead of a raw measurement.

**Immediately testing the parameter:**
Open Family Types (Create tab → Family Types button) → find the new parameter in the list → change its value → click Apply. The reference planes should move and any geometry locked to them should update. If nothing moves, the geometry is not properly locked to the reference planes.`,
      },
      {
        title: 'Instance vs. Type Parameters',
        content: `The Instance/Type decision is the most important parameter design choice. Getting it wrong means the family does not behave as users expect.

**Type Parameters:**
The same value for every placed instance of that type. If you change a Type parameter value, every instance of that type in the entire project updates simultaneously.

Use for: Dimensions that define the family\'s size (Width, Height, Depth), fire ratings, material specifications, structural properties — anything that should be the same for all instances of a given type.

Example: A door family with Type parameter "Width = 900mm" means every instance of "Single-Flush Door: 900x2100mm" placed anywhere in the project is 900mm wide. Changing the Type parameter changes all of them.

**Instance Parameters:**
Can vary between individual placed instances of the same type. Each instance has its own value.

Use for: Position-related values (Sill Height, Head Height, Base Offset), orientation flags, instance-specific data (Mark, Comments, Asset ID).

Example: Window Sill Height is an Instance parameter — different windows of the same type can have different sill heights depending on where they are placed on the facade.

**The Decision Rule:**
Ask: "Should every window of this size always have this value, or should individual windows be able to have different values?" If always the same — Type. If can vary — Instance.

**Common Mistakes:**
- Making Width and Height Instance parameters on a door family: users then expect "900x2100" to be guaranteed by the type, but each instance can be a different size. The type name becomes meaningless.
- Making Sill Height a Type parameter: every window of that type must be at the same height, making it impossible to use the same type on different floors with different sill heights.

**A Practical Test:**
Could two different instances of this family, placed side by side in the same project, ever legitimately have different values for this parameter? If yes — Instance. If no — Type.`,
      },
      {
        title: 'The Family Types Table',
        content: `The Family Types table (Create tab → Family Types) is the central interface for managing all parameters and types. Understanding how to use it efficiently saves significant time.

**Adding a New Type:**
In the Family Types dialog → New Type button → type the type name → OK. The new type appears in the type list at the top. All parameters are now shown with their values for this type. Enter the values that define this type.

**Type Naming Conventions:**
Name types consistently and descriptively. For furniture: "Coffee Table: 1200 x 600mm." For doors: "Single-Flush: 900x2100mm." For structural columns: "UC 203x203x60." Clear type names make the Type Selector dropdown in the project readable and professional.

**Duplicating Types:**
Select an existing type → Duplicate → rename. The duplicate inherits all parameter values from the original — edit only the values that differ. This is the fastest way to build a complete size series.

**Parameter Groups:**
Parameters appear grouped by their "Group Under" setting. Keep dimensions under "Dimensions," identity data (descriptions, marks) under "Identity Data," graphics (materials, visibility) under "Graphics." Well-organised parameter groups make the family readable when others open it.

**Default Values:**
When a new type is created, parameters inherit the last-used values. Always review all parameter values for a new type rather than assuming they are correct.

**Deleting Types:**
Select a type → Delete. Revit warns if instances of that type exist in the project (if the family is currently loaded). Deleting a type with placed instances forces those instances to change type — choose the replacement type in the warning dialog.`,
      },
      {
        title: 'Locking Geometry to Reference Planes',
        content: `Creating parameters by labeling dimensions is only half the workflow. The other half is locking geometry to the reference planes those parameters drive. Without locking, parameters change the planes but the geometry stays in place.

**The Lock Workflow:**

**Step 1 — Draw geometry aligned to reference planes.**
When placing an extrusion or other solid form, draw its edges aligned to (or on) the reference planes. Use the snap system to snap precisely to the reference plane lines.

**Step 2 — Apply the Align tool with Lock.**
After placing geometry:
- Modify tab → Align (shortcut: AL)
- Click the reference plane first (the target)
- Click the geometry edge (the element to align)
- Click the small padlock icon that appears — this locks the alignment

The lock icon turns closed (filled padlock). The geometry edge is now constrained to follow the reference plane.

**Step 3 — Test the lock.**
Open Family Types → change a dimension parameter → Apply. The reference plane moves. The geometry edge should move with it. If the edge does not move, the lock was not applied correctly. If an error appears ("cannot make constraints"), a conflicting constraint exists somewhere.

**Common Locking Errors:**

"Cannot make constraints consistent" — the geometry is over-constrained. Two locks are fighting each other. Remove one lock.

Geometry moves but stretches instead of moving as a unit — only one face is locked. Lock all relevant faces.

Geometry does not move at all — the lock was not applied. Reapply using the Align tool.

**The Principle:**
Lock every geometry edge to a reference plane. No free-floating geometry. If geometry cannot be locked to a reference plane, you need an additional reference plane to lock it to. This principle is absolute — it is what makes the family fully parametric.`,
      },
    ],
    takeaways: [
      'Parameters are created by placing a dimension between reference planes and labeling it — not by filling in a separate form',
      'Type parameters are the same for every instance of that type; Instance parameters can vary per placed instance',
      'The decision rule: could two instances legitimately have different values? Yes = Instance. No = Type',
      'The Family Types table manages all parameters and types — use Duplicate to build size series efficiently',
      'Lock every geometry edge to a reference plane using Align + Lock — unlocked geometry stays in place even when parameters change',
    ],
    resource: {
      title: 'Autodesk Revit — Parameters in Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-parameters-families',
    },
    prev: 'rf-4',
    next: 'rf-6',
  },

  // ─────────────────────────────────────────────────────────
  // rf-6: Basic Solid Forms
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-6',
    num: 6,
    title: 'Basic Solid Forms',
    topic: 'Geometry',
    cat: 'beginner',
    readTime: '15 min',
    free: false,
    desc: 'Build geometry using Revit\'s five solid form tools — Extrusion, Blend, Revolve, Sweep, and Swept Blend — understanding what each produces and when to choose each for the geometry you are building.',
    intro: `Every 3D family in Revit is built from combinations of five solid form types: Extrusion, Blend, Revolve, Sweep, and Swept Blend. Each creates a different category of shape. Understanding what each tool produces and when to use it is fundamental to building any family — from a simple rectangular furniture piece to a complex parametric structural connection.

This lesson covers all five tools with clear guidance on when to use each and how to make them parametric. By the end you will be able to build the geometry for the vast majority of families encountered in professional architectural and BIM practice.`,
    sections: [
      {
        title: 'Extrusion — The Most Common Form',
        content: `An Extrusion is a 2D profile pushed along a straight path perpendicular to the profile plane. It is the most commonly used form in family creation — any shape with a consistent cross-section along its length is an extrusion.

**When to Use:**
Rectangular or any constant-section shapes: boxes, slabs, columns, panels, shelves, frames, rails, ledges. If you can describe the shape as "this 2D shape stretched to this depth," use Extrusion.

**Creating an Extrusion:**
Create tab → Forms panel → Extrusion. Revit enters Sketch Mode. Draw the 2D profile (the cross-section shape) on the active work plane. The profile must be a closed loop with no gaps or overlaps. Click the green checkmark (Finish Edit Mode) to exit Sketch Mode and generate the solid.

**Key Parameters in Properties (while in Sketch Mode or after selection):**
- Extrusion Start: where the extrusion begins (distance from the work plane, usually 0)
- Extrusion End: where the extrusion ends (the depth/height)
- Material: the material applied to all faces
- Subcategory: for visibility control (covered in rf-11)

**Making Extrusions Parametric:**
After creating the extrusion, lock its faces to reference planes:
- Plan view: lock left and right faces to the Left and Right reference planes
- Plan view: lock front and back faces to the Front and Back reference planes
- Elevation view: lock the top face to the Height reference plane (lock Extrusion End in Properties or use Align + Lock on the top face)

**Profile Constraints:**
The 2D sketch of the extrusion can also reference reference planes. Draw the sketch edges aligned to the reference planes and lock them. Then the profile shape itself scales with the reference planes.`,
      },
      {
        title: 'Blend — Transitioning Between Two Profiles',
        content: `A Blend transitions between two different 2D profiles — one at the bottom and one at the top. The result is a solid that morphs from one shape to another along a straight vertical path.

**When to Use:**
Tapered shapes, transition pieces, column capitals, sloped tops, pyramid shapes, objects that are one shape at the base and a different shape at the top. If the shape changes from bottom to top in a predictable way, use Blend.

**Creating a Blend:**
Create tab → Forms panel → Blend. Sketch Mode opens with two sketch modes: Bottom and Top (toggle between them using the "Edit Top" and "Edit Bottom" buttons in the contextual tab). Draw the bottom profile → click "Edit Top" → draw the top profile → click Finish. Revit interpolates the geometry between the two profiles.

**Depth Parameter:**
In Properties: First End (bottom elevation) and Second End (top elevation) control the height. Make these parametric by labeling a dimension in an elevation view from the Ref. Level to the top reference plane.

**Vertex Matching:**
For complex profiles, Revit needs to know which vertex of the bottom profile corresponds to which vertex of the top profile. If the interpolation twists unexpectedly, use the "Modify Vertices" tools in the contextual tab to manually match vertices.

**Practical Example:**
A column capital that is a 400x400mm square at the base and a 600x600mm square at the top — with a 300mm taper height. Bottom profile: 400x400 square. Top profile: 600x600 square. Blend interpolates the taper automatically.`,
      },
      {
        title: 'Revolve — Circular and Rotational Forms',
        content: `A Revolve rotates a 2D profile around an axis to create a rotational solid. The result is any shape that can be described as "this profile rotated around this centre line."

**When to Use:**
Circular and rotational shapes: columns (cylindrical), domes, bowls, vases, pipe fittings, spherical elements, bollards, circular table bases. Any shape with rotational symmetry around an axis.

**Creating a Revolve:**
Create tab → Forms panel → Revolve. Sketch Mode opens. Two sketch tools: the Profile (the cross-section shape) and the Axis (the centre line of rotation). Draw the profile on one side of the axis — the profile is what gets rotated. The axis must be a single straight line. Click Finish.

**Revolve Angle:**
In Properties: Start Angle and End Angle control how much of the rotation is created. 0 to 360 = full revolution (complete cylinder/sphere). 0 to 90 = quarter of the revolution (useful for corner column caps, quarter-round profiles). Make the angle a parameter if the rotation extent needs to be variable.

**Profile Positioning:**
The profile must be on the same side as the axis, not crossing it. A profile that crosses the axis creates invalid geometry. Keep the profile entirely to one side of the axis line.

**Practical Example:**
A cylindrical column: draw a rectangular profile (the column cross-section, as a half-section) with the axis along the column centre. Revolve 360 degrees. The result is a perfect cylinder. Make the radius and height parameters for a fully parametric cylindrical column.`,
      },
      {
        title: 'Sweep — Forms Along a Path',
        content: `A Sweep pushes a 2D profile along a 2D or 3D path. The profile maintains its orientation perpendicular to the path direction as it travels along the path.

**When to Use:**
Rail shapes, gutter profiles, mouldings, pipe runs (simplified), trim profiles, handrails, any shape that follows a path. If you can describe the shape as "this cross-section following this route," use Sweep.

**Creating a Sweep:**
Create tab → Forms panel → Sweep. Unlike Extrusion, a Sweep has two separate sketch phases:

Phase 1 — Sketch the Path: Draw the path line (the route the profile follows). The path can be straight or curved, open or closed. Click "Select Profile" in the contextual tab.

Phase 2 — Sketch the Profile: Draw the 2D cross-section profile. The profile is drawn perpendicular to the start of the path. Click Finish.

**Profile Families for Sweeps:**
Instead of sketching the profile inline, you can load a Profile family (.rfa from the Profile template) and select it as the sweep profile. This is the professional approach for standard profiles (gutters, mouldings, railings) — the profile is a separate reusable family rather than embedded in the sweep.

**Path Types:**
- Straight path: the profile travels in a straight line (similar to extrusion but with a profile family option)
- Curved/arc path: the profile follows the curve — use for curved mouldings, curved rails
- Pick path: pick existing model lines or edges as the sweep path — useful for following complex geometry

**Practical Example:**
A door frame: the frame profile (an L-shaped cross-section showing the rebate and face) sweeps along the path of the door opening perimeter (top and two sides). The profile family defines the frame cross-section; the sweep path defines the route.`,
      },
      {
        title: 'Swept Blend — Complex Transitional Forms',
        content: `A Swept Blend combines the Blend and Sweep tools — it transitions between two different profiles along a path. The result is a shape that changes cross-section as it travels along a route.

**When to Use:**
Complex transitional shapes: tapered beams, organic furniture forms, complex duct transitions (simplified), elements that change shape as they follow a path. Less commonly needed than the other four forms, but irreplaceable when required.

**Creating a Swept Blend:**
Create tab → Forms panel → Swept Blend. Three phases:
1. Sketch the path (same as Sweep)
2. Sketch Profile 1 (at the start of the path)
3. Sketch Profile 2 (at the end of the path)

Revit interpolates the transition from Profile 1 to Profile 2 along the path length.

**Practical Applications:**
- A tapered structural beam (wider at the base, narrower at the top, following a curved path)
- An organic furniture leg (circular at the top, square at the floor, following a slight curve)
- A simplified duct reducer along a duct run

**Complexity Warning:**
Swept Blend can create complex geometry that increases family file size significantly. Before using Swept Blend, ask whether the complexity is justified for the use case. At Coarse detail level (where most plan views are set), this complex geometry still renders — potentially slowing every view that shows the family. Use Visibility Controls (rf-11) to hide complex Swept Blend geometry at Coarse detail level.

**The Underlying Principle for All Forms:**
Every form in Revit families is built in Sketch Mode — you draw a 2D profile, Revit generates the 3D solid. The geometry is always driven by 2D sketches, which can be constrained to reference planes, making them parametric.`,
      },
    ],
    takeaways: [
      'Extrusion (constant cross-section pushed straight): most common — use for boxes, panels, frames, slabs',
      'Blend (two different profiles, straight transition): use for tapered columns, capitals, shapes that change from bottom to top',
      'Revolve (profile rotated around axis): use for cylinders, spheres, circular columns, bollards, pipe fittings',
      'Sweep (profile following a path): use for rails, mouldings, trim, gutters — combine with Profile families for reusable profiles',
      'Swept Blend (two profiles transitioning along a path): use for complex organic forms — watch file size and use visibility controls at Coarse detail level',
    ],
    resource: {
      title: 'Autodesk Revit — Solid Forms in Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-solid-forms-families',
    },
    prev: 'rf-5',
    next: 'rf-7',
  },

  // ─────────────────────────────────────────────────────────
  // rf-7: Void Forms & Cuts
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-7',
    num: 7,
    title: 'Void Forms & Cuts',
    topic: 'Geometry',
    cat: 'beginner',
    readTime: '13 min',
    free: false,
    desc: 'Use void forms to cut holes, recesses, and complex shapes from solid geometry — and learn how voids interact with host elements to create wall openings, floor penetrations, and custom cuts.',
    intro: `Solid forms build up geometry. Void forms take it away. Together, they produce the full range of shapes required in professional family creation. A door that cuts a rectangular opening through a wall, a structural column with a bolt hole pattern, a light fixture with a recessed aperture — all of these require void forms cutting through solid geometry or through host elements.

This lesson covers the complete void form toolkit: creating voids, applying cuts, controlling what gets cut, and using void forms to create the wall openings that hosted families (doors, windows) automatically produce.`,
    sections: [
      {
        title: 'What Void Forms Do',
        content: `A void form is identical in creation to a solid form — same five types (Void Extrusion, Void Blend, Void Revolve, Void Sweep, Void Swept Blend), same Sketch Mode workflow — but instead of adding material, a void removes it.

**Creating a Void:**
Create tab → Forms panel → the dropdown arrow below the solid form buttons reveals the void versions: Void Extrusion, Void Blend, etc. Draw the void exactly as you would draw the equivalent solid form. When you exit Sketch Mode, the void appears as a transparent orange/amber shape instead of a grey solid.

**Applying a Cut:**
A void does not automatically cut the solids near it. You must explicitly tell Revit which solid to cut. With the void selected (or afterward): Modify tab → Geometry panel → Cut → click the solid to cut. The void disappears and the cut appears in the solid.

**Uncut / Remove Cut:**
Modify tab → Geometry panel → Uncut → click the solid that was cut. The cut is removed and the void reappears as the transparent shape.

**Void in the Family vs. Void in the Host:**
Voids in a family can cut two different things:
1. Solids within the same family (a hole in a furniture panel)
2. The host element in the project (the wall opening for a door or window)

This distinction requires a specific setting covered in the next section.`,
      },
      {
        title: 'Cutting Host Elements — The Cut with Voids Setting',
        content: `When a wall-hosted or face-hosted family is placed in a project, it can cut through the host element (the wall, floor, or ceiling). This is how doors create openings, windows create glazed holes, and electrical boxes create recesses in walls.

**The "Cut with Voids When Loaded" Property:**
This property on the family itself determines whether voids in the family will cut the host element when placed.

Open the Family Properties dialog: Create tab → Properties panel → Family Category and Parameters. Check the "Cut with Voids when Loaded" checkbox.

With this checked, any void form in the family that extends into the host element will automatically cut through it when the family is placed in a project.

**The Door Opening Workflow:**
A standard door family works as follows:
1. A void extrusion defines the door opening shape (rectangular, arched, or custom)
2. The void is positioned to overlap where the wall will be
3. "Cut with Voids When Loaded" is checked on the family
4. When placed in a project wall, the void automatically cuts the opening

**Precise Void Positioning for Host Cuts:**
The void must extend through the full thickness of the wall to cut cleanly. In a door family, the void extrusion runs from beyond the exterior wall face to beyond the interior wall face — ensuring it cuts completely through regardless of wall thickness. This is why door families work with walls of any thickness: the void is wider than any expected wall.

**Wall Thickness Parameter in Door/Window Families:**
Some families expose wall thickness as a parameter so the void can be precisely sized to the actual wall. More commonly, the void is made intentionally oversized (200-400mm deep) to accommodate any wall thickness — the excess void that extends beyond the wall faces is clipped by the wall geometry automatically.`,
      },
      {
        title: 'Practical Void Applications',
        content: `**Application 1 — Recessed Panel (Void Extrusion):**
A furniture panel with a recessed inset:
1. Create the panel as a solid extrusion (full depth, full size)
2. Create a void extrusion for the recess (smaller rectangle, partial depth)
3. Position the void on the face of the panel
4. Cut the solid with the void
5. Make the recess depth and dimensions parameters

**Application 2 — Circular Hole Pattern:**
A structural plate with bolt holes:
1. Create the plate as a solid extrusion
2. Create a void extrusion for one bolt hole (circular profile)
3. Use Array (Modify → Array) to create the hole pattern as a void array
4. Cut the solid with all void instances
5. Make the hole count and spacing parameters (advanced — requires formulas)

**Application 3 — Arched Door Opening:**
A door with an arched head:
1. Draw a void sketch with a rectangular lower section and a semicircular arc at the top
2. The void is a single extrusion with a composite profile (rectangle + arc)
3. In the door family, this void cuts the arched opening in the host wall

**Application 4 — Void Sweep for Edge Profile:**
A post with a chamfered edge:
1. Create the post as a solid extrusion (square)
2. Create a void sweep: the path follows the post edge, the profile is a small triangle (the chamfer cross-section)
3. The void sweep cuts the chamfer along the full edge

**Void and Solid Interaction Rules:**
- A void can only cut a solid that overlaps it geometrically
- A void in one family cannot cut a solid in a different family (use the host cut mechanism for that)
- Multiple voids can cut the same solid
- A solid can be cut by multiple voids simultaneously`,
      },
      {
        title: 'Managing Void Visibility',
        content: `Voids in their uncut state appear as transparent amber/orange shapes in the Family Editor. This is sometimes confusing — particularly when a family has many void forms and it is not clear which have been applied as cuts and which have not.

**Checking Applied Cuts:**
Select a solid → Modify tab → Geometry panel → the Cut dropdown shows "Cut Geometry" (to apply more cuts) and "Uncut Geometry" (to remove existing cuts). If "Uncut Geometry" is greyed out, no void is currently cutting this solid.

**The "Join Geometry" Distinction:**
Join Geometry (Modify → Join) merges two solids so they share the same cut patterns and display as one element. This is different from Cut — Join combines solid forms while Cut uses void forms to remove material. Use Join when two solid extrusions overlap and you want them to display as a single element (no visible line at their intersection). Use Cut when you want material removed.

**Void Forms at Different Detail Levels:**
Like solid forms, void forms display at all detail levels by default. If a complex void form (a detailed chamfer sweep, a small hole array) is causing performance issues at Coarse detail level, use Visibility Controls (rf-11) to suppress the void form at Coarse. The cut then disappears at Coarse detail level — the solid appears uncut. This is sometimes acceptable for small details not visible at 1:100 scale.

**Void Subcategory:**
You can assign void forms to a Subcategory (Properties → Subcategory while a void is selected). This allows visibility control of the void independently from the solid it cuts. Less commonly needed but useful for families where the cut geometry needs separate visibility management.`,
      },
    ],
    takeaways: [
      'Void forms remove geometry — same five types as solid forms (Extrusion, Blend, Revolve, Sweep, Swept Blend) but subtract material instead of adding it',
      'A void must be explicitly applied to a solid using Modify → Cut — it does not cut automatically by proximity',
      'The "Cut with Voids When Loaded" family property enables voids to cut through the host element (wall, floor, ceiling) when placed in a project',
      'Door and window openings are created by oversized void extrusions that run through the full expected wall thickness range',
      'Join Geometry merges solid forms into one display; Cut Geometry uses void forms to remove material — they are different operations',
    ],
    resource: {
      title: 'Autodesk Revit — Void Forms in Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-void-forms-families',
    },
    prev: 'rf-6',
    next: 'rf-8',
  },

  // ─────────────────────────────────────────────────────────
  // rf-8: Loading & Testing Families
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-8',
    num: 8,
    title: 'Loading & Testing Families',
    topic: 'Workflow',
    cat: 'beginner',
    readTime: '12 min',
    free: false,
    desc: 'Load families into a project correctly, run a systematic quality check across all types and detail levels, understand the reload workflow, and apply the beginner family QA checklist before any family goes into production use.',
    intro: `A family that works perfectly in the Family Editor can still fail in the project. Parameters that flex correctly in isolation may break when the family is placed on a specific wall type. A type that looks fine in the Family Types dialog may display incorrectly at Coarse detail level in a 1:100 floor plan. Subcategory visibility that is set up correctly may not carry through to the project VG settings.

Testing is not optional — it is the final step of every family creation session. This lesson covers the complete loading and testing workflow, the systematic QA process that catches problems before they reach a live project, and the reload workflow for updating families already in use.`,
    sections: [
      {
        title: 'Loading a Family into a Project',
        content: `**Method 1 — Load into Project Button (from the Family Editor):**
The fastest method when you have a project open alongside the Family Editor. In the Family Editor: Create tab (or Modify tab) → Family Editor panel → "Load into Project" button.

If one project is open: the family loads immediately. If multiple projects are open: a dialog asks which project to load into — select the target project.

**Method 2 — Insert Tab in the Project:**
From within a project (no need to have the Family Editor open): Insert tab → Load Family → navigate to the .rfa file → Open. The family loads into the project and appears in the Project Browser under Families → [Category].

**Method 3 — Drag from Windows Explorer:**
Drag an .rfa file directly from Windows Explorer into an open Revit project view. The family loads and the placement cursor activates immediately.

**Overwriting vs. Appending:**
If a family with the same name is already loaded in the project, Revit asks: "A family named X already exists in this project. What do you want to do?"
- Overwrite the existing version: replaces the loaded family with the new version — all placed instances update immediately
- Append: keeps the existing version and loads the new one with a modified name

Always choose Overwrite during the development and testing cycle. Choose Append only when you intentionally want two versions of the same family loaded simultaneously.

**After Loading — Verify in Project Browser:**
Expand the Project Browser → Families → [Category name] → find your family name → expand it to see all loaded types. If the family is not there, the load failed silently — check for Revit warnings.`,
      },
      {
        title: 'The Systematic Testing Process',
        content: `Testing a family requires checking every type across every relevant condition. Rushing this step is how poor families get into production and cause problems for the entire project team.

**Test 1 — Place every type:**
Switch to the Type Selector → select each type in turn → place an instance in the test project. Verify each type places without errors and displays as expected. Common failure: a type with a formula error that the Family Types dialog accepted but the project rejects.

**Test 2 — Check all detail levels:**
With a family instance placed, switch the view between Coarse, Medium, and Fine detail levels (View Control Bar → Detail Level). Verify the family displays correctly at each level. Common failure: complex geometry visible at Coarse that should be hidden, or no geometry visible at Fine that should be shown.

**Test 3 — Check plan cut (for plan-cut families):**
Place the family → view it in a floor plan → set the View Range cut height to intersect the family. Verify the plan representation looks correct. Common failure: incorrect plan symbol, missing cut lines, or wrong element visible at the cut height.

**Test 4 — Check parameters schedule correctly:**
Create a quick schedule: View tab → Schedules → Schedule/Quantities → select the family category → add the family's parameters as columns. Verify all parameters appear in the schedule and show the correct values for each instance. Common failure: parameters not appearing in schedule (usually a shared parameter issue — covered in rf-16).

**Test 5 — Check tags:**
Place a tag for the family category (Annotate → Tag by Category → click the placed instance). Verify the tag appears and shows the correct value. Common failure: tag shows "?" (no Mark value) or shows wrong parameter.

**Test 6 — Check file size:**
Manage tab → Purge Unused → run purge. Check the project file size before and after loading the family. A family that adds more than 2-3MB to a small test project is likely too heavy for production use.`,
      },
      {
        title: 'The Reload Workflow',
        content: `Families rarely reach their final state on the first attempt. Testing reveals issues, client feedback changes requirements, and drawing standards evolve. The reload workflow allows families to be updated without breaking the project.

**The Standard Reload Cycle:**
1. Open the placed family for editing: select an instance in the project → right-click → Edit Family
2. The Family Editor opens with the family loaded
3. Make changes in the Family Editor
4. Click "Load into Project" → Overwrite
5. All instances in the project update immediately

**Reloading from an External .rfa File:**
If the family .rfa file has been updated externally (by a colleague, or by opening the .rfa directly rather than via "Edit Family"): Insert tab → Load Family → navigate to the updated .rfa → Open → Overwrite.

**What Updates and What Does Not:**
When a family is reloaded:
- Geometry changes: update all instances immediately
- New parameters added: appear on all instances with the default value
- Parameters deleted: disappear from all instances (data is lost — warn the team before deleting parameters from production families)
- Type names changed: instances retain the old type name until manually updated (or the type is deleted/merged)

**Version Tracking:**
For families in active use on projects, maintain a version note in the family\'s Identity Data (Create tab → Family Category and Parameters → scroll to Identity Data → Description or Comments field). Note the version number and change date: "v1.2 — 2025-06-15: Added fire rating parameter." This gives anyone opening the family a change history without needing external documentation.

**The "Reload Latest" Option:**
In some Revit versions, right-clicking a family in the Project Browser → Reload → navigates to the source file. This is useful when multiple projects link to the same shared library location — one click reloads the latest version from the central library.`,
      },
      {
        title: 'The Beginner Family QA Checklist',
        content: `Before any family is used in a live project or added to an office library, run through this checklist. Every item should pass before the family leaves the testing phase.

**Geometry:**
- All geometry is locked to reference planes (no free-floating elements)
- Family correctly represents the element at all three Detail Levels (Coarse, Medium, Fine)
- File size is appropriate — under 1MB for simple families, under 5MB for complex families
- No visible geometry errors in 3D (twisted faces, missing surfaces, overlapping geometry)

**Parameters:**
- All parametric dimensions flex correctly — test by entering the minimum and maximum expected values
- All types in the type table are correctly defined and load without errors
- Instance vs. Type parameters are correctly assigned
- Parameter names are clear and follow the office naming convention
- No unused parameters (parameters that do not drive anything)

**Placement:**
- Family places correctly in the appropriate context (wall, floor, ceiling, open space)
- Origin point is at the expected insertion location
- Family orients correctly on first placement (no unexpected rotation)
- For hosted families: the void cuts the host element correctly

**Scheduling:**
- Family appears in the correct schedule category
- All required parameters appear in schedule columns
- Tags apply correctly and show the correct parameter values

**Visual:**
- Subcategory assignments allow correct visibility control in VG
- Materials are assigned correctly (if applicable)
- Plan representation is correct at the cut height
- Family is not excessively heavy — does not visibly slow view regeneration

**Documentation:**
- Family filename follows the office naming convention
- Description field populated with the element description
- Version and date noted in Comments field`,
      },
    ],
    takeaways: [
      'Load families using "Load into Project" from the Family Editor (fastest) or Insert → Load Family from the project — always Overwrite during the development cycle',
      'Test every type at every detail level (Coarse/Medium/Fine), check plan cut representation, verify schedule and tag behavior before any family goes to production',
      'The reload workflow: Edit Family from a placed instance → make changes → Load into Project → Overwrite — all instances update immediately',
      'Track family versions in the Comments or Description field in the family properties — a version note saves significant time when issues arise later',
      'The beginner QA checklist covers: geometry locking, parametric flexibility, type table completeness, placement behavior, scheduling, and visual standards',
    ],
    resource: {
      title: 'Autodesk Revit — Loading Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-loading-families-project',
    },
    prev: 'rf-7',
    next: 'rf-9',
  },
];
