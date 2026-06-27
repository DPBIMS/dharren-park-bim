// ============================================================
// REVIT LESSONS DATA — rv-4 through rv-8
// Merge these entries into your lib/revitLessonsData.js array
// ============================================================

export const revitLessons_rv4_rv8 = [
  // ─────────────────────────────────────────────────────────
  // rv-4: Navigation: Views, Zoom & View Controls
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-4',
    num: 4,
    title: 'Navigation: Views, Zoom & View Controls',
    topic: 'Revit Interface',
    cat: 'beginner',
    readTime: '14 min',
    free: false,
    desc: 'Master Revit\'s navigation system — zoom, pan, orbit, and the full suite of view controls that let you move around 2D plans and 3D models efficiently.',
    intro: `Every Revit user spends a huge portion of their time simply *navigating* — moving between views, zooming into details, spinning a 3D model to check geometry. Slow or awkward navigation kills productivity. Once you nail these controls, working in Revit starts to feel effortless.

This lesson covers the complete navigation toolkit: mouse shortcuts, the ViewCube, the Navigation Bar, the Full Navigation Wheel, and keyboard shortcuts that experienced Revit users rely on every day. We'll also cover how to open, tile, and manage multiple views simultaneously — a workflow essential on any real project.`,
    sections: [
      {
        title: 'Mouse Navigation Fundamentals',
        content: `Revit's mouse navigation is consistent across all view types — floor plans, elevations, sections, 3D views, and sheets. Learning these once means they work everywhere.

**The Core Three:**

- **Scroll Wheel (forward/back)** — Zooms in/out centered on your cursor position. This is by far the most-used navigation action in Revit.
- **Scroll Wheel (press and hold + drag)** — Pans the view. The cursor becomes a hand icon. This is identical to panning in AutoCAD or Adobe software.
- **Shift + Scroll Wheel (hold + drag)** — Orbits in 3D views. Rotates the model around a pivot point. In 2D views this action has no effect.

**Right-Click in Empty Space:**
Right-clicking in an empty area of the canvas gives you quick access to recent commands, zoom options, and view properties — useful shortcut for users who prefer not to reach for the keyboard.

**Middle Mouse Button Tip:**
On some mice the scroll wheel click (middle click) can feel stiff. If you find yourself mis-clicking and accidentally selecting elements, try enabling "Press and Drag" pan mode in Revit options instead.

**Zoom to Fit (ZF or ZA):**
Typing **ZF** (Zoom to Fit) or pressing **ZA** at any time snaps the view to show all visible elements. This is a lifesaver when you've zoomed too far in or panned off-screen and lost your model.`
      },
      {
        title: 'Keyboard Zoom & Navigation Shortcuts',
        content: `Revit uses a two-key shortcut system (no Ctrl required — just type the letters). These are the navigation-specific ones every user should memorize:

| Shortcut | Action |
|---|---|
| ZF or ZA | Zoom to Fit — fits all elements in view |
| ZE | Zoom to Selection — zooms to selected element(s) |
| ZR | Zoom Region — draw a rectangle to zoom into |
| ZO | Zoom Out (2×) |
| ZP | Zoom Previous — returns to last zoom state |
| VP | View Properties — opens active view's properties |
| VG | Visibility/Graphics dialog (covered in a later lesson) |

**Workflow Tip — ZE for precision:**
Select an element first, then press **ZE** to zoom tight to it. This is faster than manually zooming when you know exactly what you want to inspect.

**Undoing Navigation:**
Navigation actions (zoom, pan) are not part of the undo history (Ctrl+Z only undoes model edits). Use **ZP** (Zoom Previous) to step back through your zoom states instead.`
      },
      {
        title: 'The ViewCube',
        content: `The ViewCube appears in the top-right corner of every 3D view. It's a 3D cube that shows your current viewing angle and lets you jump to standard views with a single click.

**How to Use It:**

- **Click a face** (Top, Front, Right, etc.) — snaps to that orthographic view
- **Click a corner** — snaps to an isometric view from that corner
- **Click an edge** — snaps to an edge-on view (45° between two faces)
- **Click and drag** — orbits the model (same as Shift + middle mouse)
- **Right-click the ViewCube** — reveals options: Orient to View, Set Current View as Home, Orient to a Level, and Save View

**"Home" View:**
The house icon beside the ViewCube returns you to your saved "Home" view. Right-click the ViewCube → "Set Current View as Home" to define it. Most teams set this to a standard isometric view of the whole building.

**Compass Rose:**
Below the ViewCube sits a compass rose showing True North. In Revit, **Project North** (the orientation of your floor plan grid) and **True North** (geographic north) can differ. The compass always reflects True North, which matters for solar analysis and site plans.

**Hiding the ViewCube:**
View tab → Windows panel → User Interface → uncheck ViewCube. You can also hide it per-view in View Properties. Most users keep it on — it's a fast orientation reference even for experienced users.`
      },
      {
        title: 'The Navigation Bar & Full Navigation Wheel',
        content: `The Navigation Bar floats on the right edge of the drawing canvas. It bundles zoom, pan, and orbit tools into clickable icons.

**Navigation Bar Tools (top to bottom):**

1. **Full Navigation Wheel** — opens the SteeringWheel overlay (see below)
2. **Pan** — click and drag to pan (same as middle mouse hold)
3. **Zoom** — click to zoom in, Shift+click to zoom out; or use the dropdown arrow for Zoom Region, Zoom Fit, etc.
4. **Orbit** — click and drag to orbit in 3D views
5. **Look** — first-person camera rotation (rarely used in standard BIM workflows)
6. **Walk** — first-person walk-through mode

**The Full Navigation Wheel (SteeringWheel):**
Press and hold the top icon, or press **Shift+W** to open. A circular overlay appears on screen segmented into navigation modes — Orbit, Pan, Zoom, Rewind, Look, Walk, Up/Down. Hover over each wedge and hold the left mouse button to activate that mode.

The "Rewind" wedge is particularly useful — it's a visual history of your camera positions you can scrub through. Think of it as ZP (Zoom Previous) but with a visual filmstrip.

**Honest Assessment:**
Most experienced Revit users rarely use the Navigation Bar or SteeringWheel after learning mouse shortcuts. They're useful when onboarding new users or during presentations. Keyboard + mouse is faster for daily work.`
      },
      {
        title: 'Opening & Managing Multiple Views',
        content: `Revit lets you open as many views as you want simultaneously. Managing them efficiently is key on complex projects.

**Opening Views:**
- Double-click any view in the **Project Browser** to open it
- Views open as tabbed windows by default in Revit 2020+

**Tiling Views (Side by Side):**
View tab → Windows panel → **Tile Views** — arranges all open views in a grid. Extremely useful for coordinating between a floor plan and a 3D view simultaneously.

**Close Hidden Views:**
View tab → Windows panel → **Close Hidden Views** — closes all open views not currently visible. Use this regularly to keep Revit's memory usage in check. Having 40 open views slows Revit down significantly.

**Switching Between Open Views:**
- Click the tab at the top of the canvas
- View tab → Windows panel → **Switch Windows** dropdown
- Or use Ctrl+Tab (cycles through open views)

**"Replicate View" vs. Opening a Duplicate:**
If you want to look at two different areas of the same floor plan simultaneously, right-click the view in the Project Browser → **Duplicate View** → Duplicate. This creates a new independent view of the same level you can tile alongside the original. Changes to one view (visibility settings, crop region) do not affect the other.

**The Drawing Area's Active View Indicator:**
The active view's tab is highlighted. Only one view is active at a time — keyboard shortcuts and edits apply to the active view only. Click a view's canvas to make it active before typing shortcuts.`
      },
      {
        title: 'Crop Regions & View Range',
        content: `Two concepts control what you *see* in any given view: Crop Regions and View Range.

**Crop Region:**
A rectangular boundary that limits what's visible in a plan or elevation view. Think of it like a viewport frame.

- Toggle crop region visibility: View Control Bar → crop icon (small rectangle), or type **CR** in some versions
- Toggle crop region display: the eye icon beside the crop icon
- Drag crop region corners to resize
- Use crop regions when creating sheets — each viewport on a sheet uses its view's crop region to define the extents shown

**View Range (Plan Views Only):**
Every floor plan view has a **View Range** — a set of horizontal cut planes that define what Revit shows:

- **Top** — upper boundary of the view range
- **Cut Plane** — the horizontal plane where walls and doors are "cut through" (the slice you see as thick lines)
- **Bottom** — lower boundary; elements below this are not shown
- **View Depth** — can extend below the Bottom to show elements like footings with a different line style

Access View Range: select nothing → click "View Range" in the Properties panel, or right-click the view → View Properties → View Range.

**Why this matters:** If you can't see an element in a plan, the View Range is the first thing to check. A door placed at a non-standard height, or a sill window, may fall outside the cut plane range and appear invisible.`
      }
    ],
    takeaways: [
      'Mouse navigation: scroll to zoom, middle-hold to pan, Shift+middle to orbit in 3D',
      'Key shortcuts: ZF (zoom fit), ZE (zoom to selection), ZR (zoom region), ZP (zoom previous)',
      'The ViewCube gives one-click access to orthographic and isometric 3D views',
      'Tile views to work on plan and 3D simultaneously; close hidden views to keep Revit fast',
      'Crop Region frames what\'s visible in a view; View Range controls the cut height in floor plans',
    ],
    resource: {
      title: 'Autodesk Revit Navigation & Views Help',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-44A8B5E2-7E32-42ED-B96A-B9B6EAE483E5'
    },
    quiz: { label: 'Revit Navigation & View Controls Quiz', questions: 10, time: '5 min' },
    prev: 'rv-3',
    next: 'rv-5'
  },

  // ─────────────────────────────────────────────────────────
  // rv-5: Understanding Revit File Types (.rvt .rfa .rte)
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-5',
    num: 5,
    title: 'Understanding Revit File Types (.rvt .rfa .rte)',
    topic: 'Revit Fundamentals',
    cat: 'beginner',
    readTime: '12 min',
    free: false,
    desc: 'Demystify Revit\'s file ecosystem — project files, family files, and templates — and understand when and why each type is used.',
    intro: `Open a shared Revit drive folder and you'll encounter files ending in .rvt, .rfa, .rte, .rft, and sometimes .rvtbak or .0001. New users often aren't sure which to open, which to delete, and which to never touch.

This lesson explains the complete Revit file ecosystem clearly. Understanding these file types is foundational — it affects how you start projects, load components, collaborate with teammates, and manage backups. Getting this wrong can mean opening the wrong file or accidentally overwriting work.`,
    sections: [
      {
        title: 'The Three Primary File Types',
        content: `**1. .RVT — Revit Project File**
This is your main building model. It contains everything: walls, floors, roofs, annotations, sheets, views, schedules, and all the families loaded into the project. When a client says "send me the Revit file," this is what they mean.

- Opens with: File → Open → Project
- One .rvt per building model (or per discipline in worksharing setups)
- Can range from a few MB for a simple house to several GB for a large hospital
- Version-specific: a file saved in Revit 2024 cannot be opened in Revit 2023 without upgrading (one-way — once upgraded, you can't go back)

**2. .RFA — Revit Family File**
Families are the building blocks loaded *into* a project. A door, a chair, a structural column, a light fixture — each is an .rfa file. Revit ships with thousands of default families in its content library.

- Opens with: File → Open → Family (opens the Family Editor, a different environment from the project)
- Loaded into projects via: Insert tab → Load Family
- Can be downloaded from manufacturer websites, Autodesk's library, or third-party sites like BIMobject or RevitCity
- Custom families you create are saved as .rfa

**3. .RTE — Revit Template File**
A template is a starting-point project pre-configured with your office standards: title blocks, view templates, line styles, materials, loaded families, and default views. When you create a new project, Revit asks you to choose a template.

- Opens with: File → New → Project → Browse for template
- Autodesk ships default templates (e.g., "Architectural Template," "Structural Template") but most firms create and maintain their own
- Editing templates: Open the .rte file directly (File → Open → Template), make changes, save. All new projects from that template inherit the changes — existing projects are not affected.
- Storing templates: typically kept on a shared network drive so all team members use the same version`
      },
      {
        title: 'Secondary & Supporting File Types',
        content: `**4. .RFT — Revit Family Template File**
When you create a new family from scratch (File → New → Family), Revit asks you to choose a family template (.rft). These define the category (Door, Window, Furniture, Structural Column, etc.) and set up reference planes and parameters appropriate for that category.

- Examples: Door.rft, Window.rft, Generic Model.rft, Structural Column.rft
- Stored in Revit's installation directory: typically C:\\ProgramData\\Autodesk\\RVT 20XX\\Family Templates\\
- You choose once when creating a family; you cannot change the template after

**5. .RVT with Worksharing (.rvt + Central File concept)**
In workshared projects (multiple users editing one model), you work in a *Local Copy* of the Central File. Both are .rvt files, but the Central File lives on a shared server or Autodesk Docs/BIM 360. Never open and edit the Central File directly — always create a local copy.

We cover Worksharing in detail in lesson rv-18.

**6. .RVTbak — Backup File**
Revit automatically creates backup copies of your project file. These appear as:
- \`ProjectName.0001.rvt\`
- \`ProjectName.0002.rvt\`
- Or \`ProjectName.rvtbak\`

The number of backups kept is controlled in File → Options → File Locations → Maximum backups. Default is 3. These backups save you if a file becomes corrupted. To restore, rename the backup to remove the number suffix, changing .rvtbak to .rvt.

**7. .adsk — Autodesk Exchange File**
Used for exchanging specific data types (like point clouds or certain imported content). Rarely encountered in standard Revit work.`
      },
      {
        title: 'The Family Editor vs. The Project Environment',
        content: `One source of confusion for beginners: Revit has two distinct *environments* — the Project environment and the Family Editor. They look similar but behave differently.

**Project Environment (.rvt):**
- Where you build your actual building model
- Has a full Project Browser with views, sheets, schedules
- Tools are context-sensitive to building elements (walls, doors, floors)
- Multiple view types available (floor plan, section, elevation, 3D, sheet)

**Family Editor (.rfa):**
- Where you create or edit component families
- Has a simpler interface with fewer views (typically plan, front, left, ref. level)
- Has a special "Ref. Level" view and reference plane tools
- A "Load into Project" button sends the family directly into an open project
- Modifying a family here does NOT automatically update it in existing projects — you must reload it

**How to Edit a Loaded Family:**
In your project, select the family instance (e.g., a door) → right-click → "Edit Family" → opens in the Family Editor → make changes → "Load into Project" → choose "Overwrite" → family updates in the project.

**Why this matters:** Many beginners accidentally open an .rfa file expecting to see their building. If Revit opens into the Family Editor instead of your project, you opened the wrong file. Check the title bar — it shows the filename and "(Family Editor)" if you're in the wrong environment.`
      },
      {
        title: "Revit's Content Library — Where Families Live",
        content: `Revit installs a large default content library on your computer. Understanding where it lives helps you find families and troubleshoot missing content.

**Default Library Location:**
\`C:\\ProgramData\\Autodesk\\RVT 20XX\\Libraries\\[Region]\\\`

On a UK install this might be:
\`C:\\ProgramData\\Autodesk\\RVT 2025\\Libraries\\UK\\\`

The library is organized by category: Doors, Windows, Furniture, Electrical Fixtures, Structural Columns, etc.

**Loading a Family into Your Project:**
Insert tab → Load Family → navigate to the library folder → select .rfa → Open. The family now appears in the Project Browser under Families and is available from the relevant tool.

**Third-Party Content:**
For manufacturer-specific families (a specific brand of curtain wall system, a piece of MEP equipment), download from:
- **BIMobject.com** — large manufacturer library, free after registration
- **RevitCity.com** — community-uploaded families, verify quality before use
- **Manufacturer websites** — e.g., Victaulic, Schindler, Legrand all host Revit families

**Quality Warning:**
Downloaded families vary wildly in quality. A poorly built family (too many polygons, incorrect parameters, wrong category) can slow your project or cause display issues. Always test a downloaded family in a throwaway project before loading it into your live model.

**Transferring Project Standards:**
Within a project, you can transfer standards from one project to another via Manage tab → Transfer Project Standards. This copies line styles, fill patterns, view templates, and more from one .rvt into another — useful for aligning two projects or importing office standards.`
      },
      {
        title: 'File Naming & Version Management Best Practices',
        content: `Real-world Revit projects involve multiple files, multiple team members, and multiple versions. Good file naming prevents disasters.

**Project File Naming Convention (common approach):**
\`[ProjectCode]_[Discipline]_[Stage]_[Version].rvt\`
Example: \`DP2024_ARCH_SD_v03.rvt\`

**Why Revit Version Matters:**
Revit files are **not backward-compatible**. A file saved in Revit 2025 cannot be opened in Revit 2024. When collaborating with consultants:
- Agree on a Revit version at project start
- Check your client's or contractor's version before sending files
- If you must send to an older version, the only option is IFC export (not a native .rvt downgrade)

**Audit & Compact on Open:**
When opening a project file (especially one received from another party), check "Audit" and "Detach from Central" (if workshared) in the open dialog. Audit checks the file for errors and repairs them. It adds time to opening but can prevent corruption issues from propagating.

**The .rvtbak Recovery Process:**
If your .rvt file won't open (corrupt):
1. Look in the same folder for backup files (.0001.rvt, .0002.rvt)
2. Rename the most recent backup: e.g., rename \`Project.0003.rvt\` to \`Project_recovered.rvt\`
3. Open the renamed file — you'll lose work since that backup was made, but the file should open
4. Save immediately to a new name`
      }
    ],
    takeaways: [
      '.rvt is your project model; .rfa is a loadable component family; .rte is a template for new projects',
      '.rft files are family templates used when creating new families from scratch — not the same as project templates',
      'The Family Editor (.rfa environment) is separate from the Project environment — check the title bar if confused',
      'Revit files are not backward-compatible — agree on a Revit version at project start',
      'Backup files (.0001.rvt, .rvtbak) can save you from corruption — know where they are and how to restore them',
    ],
    resource: {
      title: 'Autodesk Revit File Types Documentation',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-D02E28E2-01F7-4F18-A15C-2A4E6D5DD434'
    },
    quiz: { label: 'Revit File Types Quiz', questions: 10, time: '5 min' },
    prev: 'rv-4',
    next: 'rv-6'
  },

  // ─────────────────────────────────────────────────────────
  // rv-6: Project Browser & Properties Panel Deep Dive
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-6',
    num: 6,
    title: 'Project Browser & Properties Panel Deep Dive',
    topic: 'Revit Interface',
    cat: 'beginner',
    readTime: '15 min',
    free: false,
    desc: 'Master Revit\'s two most-used side panels — the Project Browser for navigating your model\'s views and families, and the Properties panel for reading and editing element parameters.',
    intro: `The Project Browser and Properties panel are open almost every minute you spend in Revit. The Project Browser is your model's table of contents — every view, sheet, family, and group lives there. The Properties panel is your inspector — select anything in Revit and its full parameter data appears instantly.

Many beginners minimize these panels to get more screen space, not realizing how much they rely on them. Experienced users size their monitor layouts specifically to keep both panels visible at all times. This lesson teaches you to use them fluently — including less-obvious features that most tutorials skip.`,
    sections: [
      {
        title: 'The Project Browser — Overview',
        content: `The Project Browser lives on the left side of the Revit interface by default. It's a hierarchical tree that organizes everything in your project.

**Default top-level nodes:**
- **Views (all)** — all views in the project, organized by View Type
- **Legends** — legend views (used for key plans, symbol legends)
- **Schedules/Quantities** — all schedule views
- **Sheets** — all drawing sheets organized by sheet number
- **Families** — every family category with all loaded types listed underneath
- **Groups** — model groups and detail groups
- **Revit Links** — linked .rvt files (e.g., structural model linked into architectural)

**Opening a View:**
Double-click any view name to open it in the drawing canvas. The view becomes the active tab at the top of the canvas.

**Searching the Project Browser:**
Revit 2022+ added a search bar at the top of the Project Browser. Start typing a view name and the tree filters instantly. On large projects with hundreds of views, this is essential.

**Right-Click Options (on a view):**
- Open, Duplicate, Delete, Rename, Apply View Template, Find Referring Views, Copy to Clipboard, Add to Sheet

**Right-Click Options (on a family type):**
- Select All Instances (in View / in Entire Project), Delete, Properties, Duplicate

"Select All Instances in Entire Project" is a powerful time-saver — select a door type in the Browser, right-click, select all instances, then batch-change their properties in the Properties panel.`
      },
      {
        title: 'Organizing Views in the Project Browser',
        content: `By default Revit groups views by type (Floor Plans, Ceiling Plans, Elevations, etc.). You can customize this organization — most firms set it up differently.

**View Organization Schemes:**
Right-click the "Views (all)" node → Browser Organization → choose a scheme or create a new one. You can organize by:
- Discipline (Architecture, Structure, MEP)
- Phase
- User-defined parameters (like "Drawing Stage" or "Sub-Discipline")
- Any combination

**Creating a Custom Organization:**
Right-click "Views (all)" → Browser Organization → New → name it → set "Group by" and "Sort by" fields → OK. This doesn't move or delete views — it just changes how they're displayed in the Browser tree.

**Typical Firm Setup:**
Most architecture firms organize by Discipline first, then by View Type. This separates architectural floor plans from structural floor plans even if they're on the same levels.

**Renaming Views:**
Click once to select, then click again (slow double-click) to rename in-place. Or right-click → Rename. View names flow through to sheet titles, so use clear consistent naming from day one.

**View Name on Sheets:**
When you place a view onto a sheet, the viewport's title shown on the sheet typically pulls from the view name (depending on your title block setup). Renaming the view later updates the sheet title automatically.`
      },
      {
        title: 'The Properties Panel — Instance vs. Type Properties',
        content: `The Properties panel (left side, below the Project Browser by default, or floating) shows parameters for whatever is currently selected. If nothing is selected, it shows the active **View's** properties.

**The Fundamental Distinction — Instance vs. Type:**

This is one of the most important concepts in Revit:

- **Instance Properties** — affect only the *selected element(s)*. Change the "Top Offset" of one wall → only that wall changes.
- **Type Properties** — affect *all elements of that type* everywhere in the project. Change the thickness of a Wall Type → every wall of that type updates instantly across all views and levels.

**Accessing Type Properties:**
In the Properties panel, click the **"Edit Type"** button at the top. A dialog opens showing the type's parameters. Changes here are global and immediate.

**The Type Selector (dropdown at the top of Properties):**
The dropdown at the very top of the Properties panel shows the current type. Click it to switch a selected element to a different type. Example: select a wall → dropdown → choose a different wall type → wall changes thickness/material/appearance in one click.

**Filtering Mixed Selections:**
If you select multiple elements of different categories, a dropdown at the top of Properties lets you filter the panel to show only one category at a time. Select 20 doors and 5 windows → Properties shows "Doors (20)" → change a parameter → only the doors update.`
      },
      {
        title: 'Key Properties Every Revit User Must Know',
        content: `These properties appear constantly regardless of what you're modeling. Know them by name.

**View Properties (visible when nothing is selected):**

| Parameter | What It Does |
|---|---|
| View Scale | Sets the drawing scale (1:100, 1:50, etc.) — affects annotation sizes |
| Detail Level | Coarse / Medium / Fine — controls how much geometry displays |
| Visual Style | Wireframe, Hidden Line, Shaded, Realistic, Ray Trace |
| Discipline | Architecture, Structure, Mechanical, Electrical, Plumbing |
| Underlay | Shows another level's plan as a grey ghost beneath this view |
| View Template | Locks view settings to a template (covered in rv-23) |

**Wall Instance Properties:**

| Parameter | What It Does |
|---|---|
| Base Constraint | The level the wall starts from |
| Base Offset | Offset from that level (e.g., -150mm for a wall starting at floor finish) |
| Top Constraint | The level or offset the wall reaches |
| Room Bounding | Whether the wall contributes to room area calculations |
| Structural | Marks the wall as structural (affects structural discipline visibility) |

**General Element Properties:**

| Parameter | What It Does |
|---|---|
| Phase Created | Which project phase this element was placed in |
| Phase Demolished | Which phase this element is demolished (for renovation projects) |
| Comments | Free text field — searchable in schedules |
| Mark | Element identifier — often used for door/window scheduling |`
      },
      {
        title: 'Working with the Properties Panel Efficiently',
        content: `Beyond reading parameters, the Properties panel is a primary editing interface. Here's how to use it efficiently.

**Inline Editing:**
Click any editable parameter value to edit it directly in the panel. Text fields, dropdowns, and checkboxes all work inline. Press Tab to move to the next parameter, Enter to confirm.

**Grayed-Out Parameters:**
A parameter shown in gray text is read-only — either controlled by the element's type, or calculated by Revit (like wall area or volume). You cannot edit it directly; change it via type properties or by modifying the geometry.

**The "Associate Family Parameter" Button:**
Visible in some element properties, this lets you link a parameter to a family parameter. Relevant when building parametric families — skip for now.

**Multi-Select & Batch Edit:**
Select 10 walls → Properties panel shows parameters that all selected walls share. Edit any parameter → all 10 walls update simultaneously. Parameters that vary across the selection show "<Varies>" — editing this field applies the new value to all.

**Pinning the Properties Panel:**
If Properties keeps disappearing, click the pushpin icon in its title bar to dock it. Right-click the panel's title bar for docking options — most users dock it to the left alongside the Project Browser.

**Dragging Panel Size:**
Drag the top edge of the Properties panel to give it more vertical space. With more height, you can see more parameters without scrolling — valuable when working with families that have many parameters.`
      },
      {
        title: 'The Families Node in the Project Browser',
        content: `Expand the "Families" node in the Project Browser to see every family type loaded into your project, organized by category.

**Why This Matters:**
- **Auditing loaded content:** Scroll through Families → Doors to see every door type in the project. Useful for checking whether unwanted families have crept in.
- **Placing families:** Drag any family type from the Families node directly into a view to place an instance. This works for furniture, generic models, and detail components.
- **Purging unused families:** Manage tab → Purge Unused → removes all families that have zero instances in the project. Do this before submitting a file to keep file size down.
- **Editing families in context:** Right-click a family name → Edit — opens that family's .rfa in the Family Editor with a live connection back to the project ("Load into Project" will update all instances).
- **Duplicating types:** Right-click a type → Duplicate → creates a new type based on the original. Edit its Type Properties to differentiate it. This is the standard way to create a new wall type, door type, etc.

**System Families:**
Not all families appear as .rfa files. *System Families* (Walls, Floors, Roofs, Ceilings, Stairs) live entirely inside the project — they have no corresponding .rfa file on disk. You create new types by duplicating existing ones within the project. This is why you can't "download" a wall family — walls are system families.`
      }
    ],
    takeaways: [
      'The Project Browser organizes every view, sheet, family, and group — double-click to open, right-click for options',
      'Use Browser Organization to group views by discipline, phase, or custom parameters',
      'Instance Properties affect only the selected element; Type Properties (Edit Type button) affect every element of that type',
      'The Type Selector dropdown in Properties is the fastest way to switch an element\'s type',
      'System Families (Walls, Floors, Roofs) have no .rfa file — create new types by duplicating existing ones in the Browser',
    ],
    resource: {
      title: 'Autodesk Revit Project Browser Documentation',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-34CC4A64-8E5C-49F8-8735-C2CC3E8BD02B'
    },
    quiz: { label: 'Project Browser & Properties Panel Quiz', questions: 10, time: '5 min' },
    prev: 'rv-5',
    next: 'rv-7'
  },

  // ─────────────────────────────────────────────────────────
  // rv-7: Grids, Levels & Datum Elements
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-7',
    num: 7,
    title: 'Grids, Levels & Datum Elements',
    topic: 'BIM Modeling',
    cat: 'beginner',
    readTime: '16 min',
    free: false,
    desc: 'Learn how Grids and Levels form the structural skeleton of every Revit model — how to create them, control their appearance, and use them to coordinate all building elements.',
    intro: `Before you place a single wall in Revit, you should set up your Grids and Levels. These *datum elements* form the invisible skeleton that everything else references. Walls start from a Level. Columns align to Grid intersections. Sections cut through the model and annotate against the Grid. Get Grids and Levels right from the start and coordination becomes automatic. Get them wrong and you'll spend hours fixing misaligned elements.

This lesson explains what datum elements are, how to create Grids and Levels correctly, how to control their appearance across views, and the common mistakes that trip up new Revit users.`,
    sections: [
      {
        title: 'What Are Datum Elements?',
        content: `In Revit, **datum elements** are model-level reference elements that exist in 3D space and appear in multiple views. They are not building components — they have no material or mass — but everything else in the model references them.

Revit has three types of datum elements:

1. **Levels** — horizontal planes defining each floor, roof, or significant elevation
2. **Grids** — vertical planes (shown as lines in plan) defining structural column/wall grid lines
3. **Reference Planes** — custom reference geometry used primarily in families and for complex geometry (covered briefly here; deep dive in rv-22)

**Why Datum Elements Matter for BIM:**
In a properly built Revit model, a structural column sits at a Grid intersection and its base is constrained to a Level. If the structural engineer moves Grid A from 0,0 to 0,200mm — every column on Grid A moves automatically. If Level 2 is raised by 100mm, every wall and slab constrained to Level 2 updates. This is parametric coordination — one of BIM's core advantages over CAD.

The flip side: if datum elements are set up incorrectly (wrong elevations, mismatched names between disciplines), coordination falls apart. For this reason, the Architect typically sets up and distributes the Levels and Grids, and all consultants match them exactly.`
      },
      {
        title: 'Levels — Creating & Editing',
        content: `Levels define horizontal planes in your project. They appear as annotation lines in elevation and section views. Every floor plan, ceiling plan, and structural plan is associated with a Level.

**Creating a Level:**
Architecture tab → Datum panel → **Level**. Or type **LL** (shortcut).

You must be in an elevation or section view to place Levels — they don't exist as anything visible in a floor plan view. Click to place the start point, then click the end point. Revit asks if you want to create associated plan views — say Yes for a working floor plan.

**Level Placement Tips:**
- Draw all levels from the same side (left to right consistently) so the head bubbles align
- Revit snaps levels to the same height as existing levels — useful for confirming they're horizontal
- After placing, double-click the elevation value to type the exact height (e.g., 3600 for 3.6m above the previous level)

**Editing Level Heights:**
Click a Level line to select it → in Properties, change "Elevation" to the desired value. Or: drag the level line up/down in an elevation view. Revit constrains all elements attached to that level and asks if you want to move them.

**Level Names:**
Double-click the level head label to rename. Standard naming: "Level 1," "Level 2," "Roof," "Basement," "Foundation." Avoid names like "L1" — Level schedule exports and coordination documents often rely on descriptive names.

**Level Datum Propagation:**
Levels exist in 3D and appear in all elevation and section views automatically. You don't need to re-draw them for each view.`
      },
      {
        title: 'Controlling Level Appearance Across Views',
        content: `A Level line has two parts: the datum line itself and the annotation (bubble and elevation number). Revit gives you fine-grained control over what shows where.

**Level Scope Box:**
By default, a Level line extends to the left and right extents of the model. If you shorten a Level line by dragging its end, you're changing its 3D extents — this affects all views. A Scope Box (advanced topic) lets you control which views show the level.

**"Maximize 3D Extents" vs "Reset to 3D Extents":**
Right-click a Level head → these options snap the level line endpoints to the maximum extents of the model, or reset to the 3D extents. Use these after extending the model footprint to keep level lines tidy.

**Hiding Level Heads Per View:**
Click a Level line → uncheck the small square at the line endpoint to hide the bubble in that view. This is per-view — hiding a bubble on one elevation doesn't affect other elevations.

**Elbow (Kink in Level Line):**
If level labels are stacked on top of each other, click a level head → drag the small elbow handle that appears to offset the label. This is just a cosmetic annotation move — it doesn't change the level's actual elevation.

**Level Line Style:**
Manage tab → Object Styles → Annotation Objects → Levels. Here you can change the line weight and color globally. Most firms match their level appearance to their drafting standards via this setting.`
      },
      {
        title: 'Grids — Creating & Editing',
        content: `Grids define the structural column and wall grid of the building. In plan views, they appear as dashed lines with bubble heads containing a number or letter. In elevations, they appear as vertical dashed lines.

**Creating a Grid:**
Architecture tab → Datum panel → **Grid**. Or type **GR**.

Unlike Levels, Grids are drawn in plan views (though they also appear in elevations and sections). Click start point → click end point. Revit auto-numbers them: Grid 1, Grid 2, Grid 3... You can change the naming sequence: type a name in the Options Bar before placing, and Revit continues from there (e.g., type "A" → subsequent grids are "B", "C", "D").

**Standard Grid Naming:**
Convention varies by country and firm, but a typical approach:
- Horizontal grids (running left to right): letters A, B, C... (south to north)
- Vertical grids (running up to bottom): numbers 1, 2, 3... (west to east)

This matches ISO and most international structural drawing standards.

**Multi-Segment Grids:**
The default Grid tool draws a straight line. For cranked or angled grids, use the Arc Grid or Multi-Segment Grid options in the Draw panel of the Grid tool's contextual tab.

**Copying Grids:**
Place one grid → Modify tab → Copy → constrain to horizontal or vertical → type the spacing. Or use an **Array** (Modify → Array) to place multiple grids at equal spacing in one operation. Array is the fastest way to set up a regular structural grid.`
      },
      {
        title: 'Controlling Grid Appearance & Scope',
        content: `Like Levels, Grids have appearance controls that work across all views or per-view.

**3D vs. 2D Mode (Critical):**
This is the most misunderstood aspect of Grids and Levels. Each endpoint of a datum line has a small open circle icon when selected. 

- **3D Mode (filled/locked icon):** Moving this end affects the datum in ALL parallel views
- **2D Mode (open/unlocked icon):** Moving this end only affects the datum in the current view

**Switch between modes:** Click the datum line → click the small icon at the endpoint (it toggles between 2D and 3D). 

This matters because you might want to shorten a grid for neatness in one elevation view without affecting the others. Switch to 2D mode first, then drag.

**Hiding Grid Bubbles:**
Click the Grid line → uncheck the small checkbox at either end to hide the bubble on that end in this view. Useful for keeping the right-side bubble on vertical grids when the left-side one would conflict with the title block.

**Grid Labels:**
Double-click the bubble to rename the grid. You can also select the grid → Properties → Name. All views update immediately.

**Propagating Datum Extents:**
After drawing all grids in the floor plan, you need them to appear in elevation and section views at the right extents. Select all grid lines → Propagate Extents (appears in contextual tab or right-click menu) → select the views → OK. This pushes the 3D extents to match, ensuring grids show correctly in elevations.`
      },
      {
        title: 'Linking Elements to Levels & Grids',
        content: `The real power of Levels and Grids comes from how building elements attach to them.

**Walls and Levels:**
When you place a wall, its Base Constraint and Top Constraint are set to Levels in Properties. The wall always starts and ends at those levels — if the level moves, the wall follows. This is called a **constrained** element. Always constrain walls to levels rather than setting fixed heights — unconstrained walls create coordination problems.

**Columns and Grids:**
Structural Columns are placed at Grid intersections. When you run the Column tool, Revit offers "At Grids" mode — select all grids → Revit places columns at every intersection automatically. Columns are then bound to levels for their top and base.

**The Column Grid "Snap":**
When placing columns or walls near a grid, Revit snaps to it and shows an alignment lock icon. Click the lock to constrain the element to the grid. Now if the grid moves, the column/wall follows.

**Common Mistake — Floating Elements:**
A wall placed "near" a level but not constrained to it will not follow if the level moves. This creates invisible coordination errors that only appear when levels are adjusted. Always check that Base Constraint and Top Constraint in Properties show a Level name, not "Unconnected" with a hardcoded height.

**Reference Planes for Local Reference:**
Reference Planes (Architecture tab → Work Plane panel → Ref Plane) are like local, unnamed Grids. They're invisible in the printed output and are used when you need a reference line for placing elements but don't want a full grid annotation. Common in complex geometry or facade work. They appear in the Project Browser under the current view only unless specifically named and shared.`
      }
    ],
    takeaways: [
      'Levels define horizontal floor planes; Grids define the structural column/wall grid — both are datum elements',
      'Create Levels in elevation or section views; create Grids in plan views',
      'Datum endpoints have 3D mode (affects all views) and 2D mode (affects current view only) — switch via the endpoint icon',
      'Always constrain walls and columns to Levels and Grids so they follow automatically when datum elements are adjusted',
      'Use Propagate Extents to push Grid/Level display from one view to all parallel views',
    ],
    resource: {
      title: 'Autodesk Revit — Grids and Levels',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-0A97B142-02E8-4D26-9E9E-B1F28DCF5A9B'
    },
    quiz: { label: 'Grids, Levels & Datum Elements Quiz', questions: 10, time: '5 min' },
    prev: 'rv-6',
    next: 'rv-8'
  },

  // ─────────────────────────────────────────────────────────
  // rv-8: Basic Walls, Floors & Roofs
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-8',
    num: 8,
    title: 'Basic Walls, Floors & Roofs',
    topic: 'BIM Modeling',
    cat: 'beginner',
    readTime: '18 min',
    free: false,
    desc: 'Place and edit Revit\'s three primary building shell elements — Walls, Floors, and Roofs — including compound layer structure and constraint-based height/thickness control.',
    intro: `Walls, Floors, and Roofs are the three primary System Families in Revit. Together they form the building shell — the container within which everything else (doors, windows, MEP services, finishes) is placed. These are called System Families because they live inside the project file, not as external .rfa files. You can't download a wall — you define it within Revit using compound layers of real materials.

This lesson takes you from placing your first wall to understanding compound layer structure, joining geometry, and the key settings that determine how walls, floors, and roofs interact in a real BIM model.`,
    sections: [
      {
        title: 'Walls — Placement Fundamentals',
        content: `**Placing a Wall:**
Architecture tab → Build panel → **Wall** (or type **WA**).

Before clicking, check the Options Bar at the top:
- **Height:** Sets the wall's top constraint — choose "Unconnected" + height, or pick a Level from the dropdown (always prefer a Level)
- **Location Line:** Where the drawn line falls relative to the wall's layers. Options: Wall Centerline, Core Centerline, Finish Face Exterior, Finish Face Interior, Core Face Exterior, Core Face Interior. For structural coordination, use **Core Centerline** or **Core Face**. For architectural layout, **Finish Face** is common.

**Draw Modes (Options Bar):**
- Line (default) — draw walls segment by segment
- Rectangle — draw four walls forming a closed rectangle in two clicks
- Polygon, Circle, Arc — for curved walls

**Placing by Line:**
Click the start point → move cursor in the wall direction → Revit shows the wall preview → click the end point. The Tab key cycles through snap targets; spacebar flips the interior/exterior face if the wall has different exterior/interior layers.

**Chaining Walls:**
After placing one wall segment, the next click continues from the endpoint. Press Escape to end the chain. Double-click to finish the wall and start a new independent placement.

**Temporary Dimensions:**
After placing a wall, Revit shows blue temporary dimensions. Click the dimension text to type a new value, snapping the wall to the precise location. This is the standard workflow: place approximately, then type exact dimensions.`
      },
      {
        title: 'Wall Types & Compound Layers',
        content: `Every wall in Revit belongs to a **Wall Type** — a compound structure definition that specifies the materials and thicknesses of each layer.

**Viewing Wall Structure:**
Select a wall → Properties → Edit Type → "Structure" row → **Edit** button. This opens the **Edit Assembly** dialog.

**The Edit Assembly Dialog:**
Shows a table with rows for each layer, from exterior to interior:

| Column | Description |
|---|---|
| Function | Structural [1], Substrate [2], Thermal/Air [3], Finish 1 [4], Finish 2 [5], Membrane Layer |
| Material | The assigned Revit material (affects rendering, schedules, Finish quantities) |
| Thickness | Layer thickness in mm (or inches) |
| Wraps | Whether this layer wraps around openings at door/window jambs |
| Structural Material | Marks the layer as structural for analysis |

**Layer Functions:**
The function number controls how Revit joins walls. Core layers (Structure [1]) join to each other; finish layers can be set to wrap or not at intersections. This determines whether the finish of one wall "runs into" an intersecting wall's finish or stops at the core — important for quantity takeoffs and material accuracy.

**Creating a New Wall Type:**
Edit Type → Duplicate → rename (e.g., "Ext Wall - 300mm Insulated Masonry") → Edit Assembly → define layers → OK. Never edit an existing type directly — always duplicate first to avoid changing walls you didn't intend to change.

**Total Wall Thickness:**
The sum of all layer thicknesses. Revit displays this at the bottom of the Edit Assembly dialog. This number should match your architectural specification.`
      },
      {
        title: 'Wall Constraints & Joins',
        content: `**Attaching Walls to Levels:**
In Properties with a wall selected:
- **Base Constraint:** Level the wall starts from
- **Base Offset:** Distance above or below that level (use for walls that start at a finish floor level above the structural slab)
- **Top Constraint:** Level or "Unconnected" for the wall's top
- **Top Offset:** Offset above or below the Top Constraint level
- **Unconnected Height:** Visible only if Top Constraint = Unconnected; set the height manually

**Best Practice:** Always set Top Constraint to a Level, not Unconnected. If the level heights change, your walls update automatically.

**Wall Joins (T-Junctions & Corners):**
When walls meet, Revit automatically cleans up the join — mitering corner walls, merging layer materials at T-intersections. This is **Wall Join** behavior.

To change how a join looks: Modify tab → Geometry panel → **Wall Joins** → click the join point → cycle through join types (Miter, Butt, Square Off) → Done. If the automatic join creates artifacts (e.g., a visible line where there shouldn't be one), Wall Joins lets you fix it.

**Disallowing Join:**
Sometimes you want a wall to butt into another without joining (e.g., a non-load-bearing partition stopping at a structural core). Right-click the wall end → Disallow Join. The wall end will no longer automatically join to intersecting walls.

**Locking Wall Alignment:**
When placing a wall near another wall or a grid, click the small padlock icon that appears when the alignment snap triggers. Locking the alignment means if the reference (grid or wall) moves, this wall moves with it.`
      },
      {
        title: 'Floors',
        content: `**Placing a Floor:**
Architecture tab → Build panel → **Floor** (dropdown → Floor: Architectural, or type **FL**).

Unlike walls, floors are sketch-based. Revit enters **Sketch Mode** (the interface grays out and shows a pink boundary). You draw the floor boundary as a closed loop using sketch lines.

**Sketch Mode Tools:**
- **Boundary Line** — the default; draw the perimeter of the floor
- **Span Direction** — for structural floor decks (sets the direction of corrugated deck)
- Pick Walls — click a wall to auto-trace its inner finish face as a boundary line; fastest method on a closed room

**Closing the Loop:**
The boundary must be a perfectly closed loop with no gaps or overlaps. Revit shows errors if the boundary isn't closed. Green lines mean valid; red means a problem. Use the "Trim/Extend" tools in Sketch Mode to fix gaps.

**Exiting Sketch Mode:**
Click the green **checkmark** (Finish Edit Mode) in the contextual tab. If there are sketch errors, Revit won't let you finish until they're resolved.

**Floor Type & Thickness:**
Like walls, floors have types with compound layer structure (structural concrete, insulation, screed, finish). Select the floor → Properties → Type Selector (top dropdown) to change type, or Edit Type → Duplicate to create a new one.

**Floor Level:**
Floors are placed at the active level by default. After placing: Properties → Level (confirms which level), Height Offset From Level (moves the floor up/down from that level; use a negative value to place the floor slab below the architectural finish level).

**Floor/Wall Join:**
Revit automatically cuts a floor where it intersects a wall (or vice versa). If you need to control this behavior (e.g., the floor should pass through, not stop at, a partition wall), use Modify → Join Geometry or the Join/Unjoin tools.`
      },
      {
        title: 'Roofs',
        content: `Revit offers three methods to create roofs:

**1. Roof by Footprint (most common for simple roofs)**
Architecture tab → Build panel → **Roof** → Roof by Footprint.

In Sketch Mode, draw the roof boundary (similar to floors). Each sketch line has a **"Defines Slope"** checkbox in the Options Bar. Lines with slope defined create pitched roof edges; lines without create flat/vertical edges (useful for parapet sides).

Set the **slope angle** in the Options Bar or in Properties per edge. Revit calculates the 3D roof geometry automatically from the flat 2D boundary and slope definitions.

**2. Roof by Extrusion**
For roofs defined by a profile (like a barrel vault or shed roof). Switch to an elevation or section view, then sketch the roof profile (the cross-section shape). Revit extrudes it along the building depth.

**3. Roof by Face**
Used when a massing face defines the roof shape. Pick a mass face → Revit creates the roof on that surface. Useful for complex parametric massing studies.

**Common Roof Settings (Properties):**
- **Rafter Cut:** Square Cut, Plumb Cut, Two Cut Plumb — defines how the eave edge is cut
- **Fascia Depth:** Extends the rafter below the plate
- **Overhang:** How far the roof extends beyond the wall face

**Roof/Wall Attachment:**
Select walls → Modify tab → Attach Top/Base → click the roof. The wall tops follow the underside of the roof automatically, even if the roof is pitched. This is one of Revit's most satisfying features — no manual calculation of wall heights at gable ends.

**Roof Slope Arrows:**
Instead of slope on edges, you can add a **Slope Arrow** in Sketch Mode — a line with arrowhead indicating the direction of slope and the height at each end. Useful for one-way sloped roofs (like a lean-to shed) or complex drainage scenarios.`
      },
      {
        title: 'Editing Walls, Floors & Roofs',
        content: `Once placed, these elements can be modified in several ways.

**Moving Elements:**
Select → drag, or use the Move tool (Modify tab → Move, or type **MV**). Align to a grid or type an exact distance.

**Edit Profile (Walls):**
Select a wall → Modify tab → Edit Profile. Enters sketch mode where you edit the top/bottom edge of the wall as a custom profile. Use this for walls with stepped tops, arched openings, or shaped parapets. The wall maintains its compound layer structure — you're just changing the bounding outline.

**Edit Boundary (Floors & Roofs):**
Select a floor or roof → Modify tab → **Edit Boundary**. Returns to Sketch Mode to modify the boundary shape. Add rooms, cut openings, or reshape the slab.

**Opening a Shaft or Vertical Opening:**
Architecture tab → Opening panel → **Shaft Opening** — cuts a vertical shaft through multiple floors at once (for stairs, lifts, ductwork). Faster than individually cutting each floor.

**Floor Opening:**
Select a floor → Modify tab → Edit Boundary → draw the opening within the existing boundary (the cut-out). Or use Architecture → Opening → By Face to cut an opening in a floor face directly.

**Pin:**
Select any element → Modify tab → Pin (pushpin icon, or type **PN**). A pinned element cannot be moved or deleted accidentally. Use Pin on Grids, Levels, and key datum elements at the start of a project. Unpin (select → Unpin) before editing.

**Aligning Elements:**
Modify tab → **Align** (type **AL**) → click the reference line/face first → click the element to align. Optional: click the lock icon to constrain the alignment. One of the most-used Revit tools.`
      }
    ],
    takeaways: [
      'Walls, Floors, and Roofs are System Families — define new types by duplicating existing ones within the project',
      'Wall compound layers define material, thickness, and function — access via Edit Type → Structure → Edit',
      'Always constrain walls to Levels via Base/Top Constraint rather than using Unconnected height',
      'Floors and Roofs use Sketch Mode — boundary must be a closed, non-overlapping loop',
      'Attach Wall Tops to a Roof so gable-end walls automatically follow pitched roof geometry',
    ],
    resource: {
      title: 'Autodesk Revit — Walls, Floors & Roofs',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-EBB5F6EC-EB16-4B7F-82AB-80CA32CDAE22'
    },
    quiz: { label: 'Basic Walls, Floors & Roofs Quiz', questions: 10, time: '5 min' },
    prev: 'rv-7',
    next: 'rv-9'
  }
];
