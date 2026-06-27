// ============================================================
// REVIT LESSONS DATA — rv-17 through rv-24 (ADVANCED)
// Merge these entries into your lib/revitLessonsData.js array
// cat: 'advanced' — accessible to Premium plan only
// ============================================================

export const revitLessons_rv17_rv24 = [

  // ─────────────────────────────────────────────────────────
  // rv-17: Groups, Assemblies & Design Reuse
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-17',
    num: 17,
    title: 'Groups, Assemblies & Design Reuse',
    topic: 'BIM Modeling',
    cat: 'advanced',
    readTime: '15 min',
    free: false,
    desc: 'Use Revit Groups and Assemblies to manage repetitive elements, coordinate multi-unit residential layouts, and package model elements for reuse across a project or between projects.',
    intro: `Repetition is everywhere in architecture — hotel rooms, apartment units, structural bays, toilet pods, classroom layouts. Modeling each instance independently is slow and creates a coordination nightmare: changing one room requires manually updating every other identical room. Revit Groups and Assemblies are the answer.

Groups let you bundle model and annotation elements so that editing one instance updates all. Assemblies package structural or fabrication elements into named units with their own views, schedules, and sheets. Together they represent Revit's approach to design reuse — one of the key productivity advantages of BIM over CAD.`,
    sections: [
      {
        title: 'Model Groups — Creating & Placing',
        content: `A Model Group is a named collection of model elements that behaves as a single unit. Edit one instance of the group and all instances update simultaneously.

**Creating a Group:**
Select the elements you want to group (walls, doors, windows, furniture — any model elements) → Modify tab → Create panel → Create Group → name it (e.g., "Typical Hotel Room") → OK.

The selected elements are now a group instance. They appear in the Project Browser under Groups → Model Groups.

**Placing Additional Instances:**
Architecture tab → Model panel → Place a Component → in the Type Selector, find your group name. Or: in the Project Browser, drag the group name directly into a view. Each placed copy is an independent instance of the same group definition.

**The Group Edit Environment:**
Double-click any group instance to enter Edit Group mode (the canvas grays out, only group elements are active). Add elements, remove elements, or modify existing ones. Click Finish Group (green checkmark) to exit. All other instances update immediately to reflect the changes.

**Exclude Element from Instance:**
Right-click an element inside a group instance → Exclude from Group. That element disappears from that specific instance only — useful when one unit has a slightly different layout (e.g., an accessible bathroom variant) without breaking the group relationship.

**Restoring an Excluded Element:**
Click the group instance → a "Restore Excluded Members" button appears in the contextual tab. Click it to bring the excluded element back.`,
      },
      {
        title: 'Detail Groups & Attached Detail Groups',
        content: `Model Groups contain model geometry. Detail Groups contain view-specific annotation elements. Attached Detail Groups link annotation to a Model Group so annotations travel with the model group automatically.

**Detail Groups:**
Select annotation elements (tags, dimensions, text notes, detail lines) → Create Group → name it. Detail Groups appear in Project Browser under Groups → Detail Groups. They can be placed in views independently.

**Attached Detail Groups:**
When you want annotation (like room tags and dimensions) to appear automatically whenever a Model Group is placed, attach a Detail Group to the Model Group.

Inside Edit Group mode → Attach Detail Group (in the contextual tab) → select the Detail Group to attach → Finish Group.

Now whenever the Model Group is placed in a floor plan view, the attached Detail Group annotations appear automatically in the same view. This is the standard workflow for repetitive unit plans in residential projects — place the unit group once, annotations come with it.

**Limitations of Detail Groups:**
- Attached Detail Groups only work in plan views where the Model Group is visible
- Tags in Detail Groups must be manually re-associated if the tagged element changes type
- Nested groups (a group inside a group) are supported but can become complex to manage`,
      },
      {
        title: 'Editing Groups Across a Project',
        content: `Group management on a live project requires discipline. Here are the key operations and when to use each.

**Ungroup:**
Select a group instance → Modify tab → Ungroup. The elements become independent. If you ungroup ALL instances, the group definition is removed from the project (it appears as unused in the Project Browser). This is irreversible for that instance.

**Make Unique:**
Select a group instance → right-click → Make Group Unique. Creates a new group definition (a copy of the original) applied only to this instance. Now editing this instance does not affect other instances. Use when one unit needs permanent differences from the typical unit.

**Swap Group Type:**
Select a group instance → Type Selector dropdown → choose a different group definition. The instance swaps its entire contents to the new group definition. Useful for placing both "Typical Unit A" and "Typical Unit B" on the same floor and being able to swap them.

**Group Warnings:**
Revit flags warnings for: elements in groups that overlap with elements outside groups (wall joins across group boundaries), groups containing hosted elements whose hosts are outside the group. Review warnings regularly via Manage → Review Warnings.

**Saving Groups as External Files:**
Right-click a group in the Project Browser → Save Group → saves as an .rvt file containing only the group. Load it into another project via Insert → Group → Link/Load Group. This is the standard way to share typical unit designs between projects or between team members working on different building clusters.`,
      },
      {
        title: 'Assemblies',
        content: `Assemblies are Revit's tool for packaging structural or fabrication elements into named, schedulable units — designed for prefabrication, precast, and construction sequencing workflows.

**What Makes Assemblies Different from Groups:**
- Assemblies have their own set of views (plan, elevation, 3D, sheet) created automatically
- Assemblies appear in Assembly schedules with quantity tracking
- Assemblies are designed for construction delivery — each assembly instance represents one physical unit to be fabricated or erected
- Assemblies cannot be nested inside Model Groups

**Creating an Assembly:**
Select the elements that make up one unit (e.g., a precast panel with its reinforcement and embeds) → Modify tab → Create panel → Create Assembly → name it and set the Naming Category (the element category that drives the assembly name, e.g., Structural Framing) → OK.

**Assembly Views:**
After creating an assembly, Revit automatically offers to create a set of views: Plan, Front, Left, Right, Back, Top, Detail Sheet. These views are scoped to show only the assembly elements and are isolated from the rest of the model. They appear in the Project Browser under Assemblies → [Assembly Name].

**Assembly Schedules:**
View tab → Schedules → Assembly Schedule → select the assembly category → configure fields and sorting. Assembly schedules show each unique assembly type, its count, and parameters — exactly what a fabricator needs for production planning.

**Disassembling:**
Select an assembly instance → Modify → Disassemble. Elements return to the main model as independent elements. The assembly definition remains in the project for other instances.`,
      },
      {
        title: 'Design Reuse Strategies',
        content: `Beyond Groups and Assemblies, Revit offers several other mechanisms for reusing design work efficiently.

**Transfer Project Standards:**
Manage tab → Transfer Project Standards. Select a source project (.rvt) → choose what to transfer: View Templates, Line Styles, Fill Patterns, Materials, Object Styles, Dimension Types, Text Types, Family Types. This is the primary way to apply one project's office standards to another without rebuilding everything.

**Copy/Paste Between Projects:**
With two projects open: select elements in one project → Ctrl+C → switch to the target project → Modify tab → Paste → Aligned to Same Place (pastes at exact same coordinates) or Aligned to Selected Levels/Views. This is a fast way to reuse a complex staircase, facade detail, or equipment layout from a previous project.

**Linked Revit Files:**
For truly reusable content shared across multiple project files simultaneously, use Revit Links (Insert → Link Revit). The linked file is a live reference — changes to the linked file propagate to all host projects automatically when the link is reloaded. This is the mechanism for multi-discipline coordination (linking the structural model into the architectural model) but also works for reusable site elements or podium structures shared across tower files.

**Content Best Practice:**
On repetitive building projects (hotels, residential towers, hospitals), establish the typical unit as a Group early — before any repetition is placed. Retrofitting Groups onto independently modeled units is painful and error-prone. Plan for reuse from project kickoff.`,
      },
    ],
    takeaways: [
      'Model Groups bundle elements so editing one instance updates all — double-click to enter Edit Group mode',
      'Attached Detail Groups link annotations to Model Groups so tags and dimensions appear automatically when groups are placed',
      'Make Group Unique creates an independent copy of a group for instances that need permanent differences',
      'Assemblies package elements for fabrication with auto-created views, sheets, and schedules for construction delivery',
      'Transfer Project Standards moves view templates, line styles, materials, and other settings between project files',
    ],
    resource: {
      title: 'Autodesk Revit — Groups',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-AA1A4A4A-4A4A-4A4A-AA4A-4A4A4A4A4A4A',
    },
    quiz: { label: 'Groups, Assemblies & Design Reuse Quiz', questions: 10, time: '5 min' },
    prev: 'rv-16',
    next: 'rv-18',
  },

  // ─────────────────────────────────────────────────────────
  // rv-18: Worksharing & Central Files
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-18',
    num: 18,
    title: 'Worksharing & Central Files',
    topic: 'Collaboration',
    cat: 'advanced',
    readTime: '18 min',
    free: false,
    desc: 'Set up and work in a Revit Workshared environment — the multi-user collaboration system that lets entire teams work simultaneously in a single coordinated model.',
    intro: `On any project larger than a small house, multiple architects work on the same Revit model simultaneously. Without worksharing, only one person can have the file open at a time — everyone else is locked out. With worksharing enabled, 5, 10, or 50 people can edit different parts of the model at the same time while staying coordinated.

Worksharing is one of the most important Revit skills for professional practice — and one of the most commonly misunderstood. Corruption, lost work, and sync failures are almost always caused by users who do not follow the correct workflow. This lesson teaches you the workflow correctly from the start.`,
    sections: [
      {
        title: 'Worksharing Concepts — Central File & Local Copies',
        content: `**The Central File:**
When worksharing is enabled, the project becomes a Central File — the single authoritative copy of the model. The Central File lives on a shared server (network drive or Autodesk Docs / BIM 360 / ACC). It is the master record.

**Local Copies:**
Every team member works on their own Local Copy of the Central File — a personal copy on their own computer. You never open and directly edit the Central File.

**Synchronize with Central (SWC):**
Periodically, each user Synchronizes with Central — pushing their local changes to the Central File and pulling everyone else's changes into their local copy. This is the core workflow operation. SWC must happen regularly (every hour minimum on active projects, more often during intensive modeling sessions).

**Worksets:**
The model is divided into Worksets — logical groups of elements. Examples: Shared Levels and Grids, Architecture, Structure, MEP, Site, Interior. Each workset can be "owned" by one user at a time (though in practice, ownership is usually released after each session). Worksets also control which parts of the model load when opening the file — on very large models, you can choose to load only the worksets you need.

**Why This Matters:**
Worksharing is not just a technical feature — it is a workflow discipline. Teams that do not follow the SWC protocol correctly experience merge conflicts, lost work, and file corruption. The rules are simple but non-negotiable.`,
      },
      {
        title: 'Enabling Worksharing',
        content: `Worksharing is enabled once by the Project Lead (BIM Manager or Lead Architect) at the start of the project. Once enabled, it cannot be reversed without significant disruption.

**Step 1 — Enable Worksharing:**
Collaborate tab → Manage Collaboration → Worksets. A dialog warns you that this action cannot be undone. Click OK. Revit creates two default worksets: "Shared Levels and Grids" and "Workset1."

**Step 2 — Create Worksets:**
In the Worksets dialog, create your project worksets:
- Rename "Workset1" to "Architecture" (or your first discipline)
- Add worksets: "Structure," "MEP," "Site," "Interior," "Facade," etc.
- Assign existing elements to the appropriate worksets via the Workset dropdown in each element's Properties

**Step 3 — Save as Central File:**
File → Save As → Project → in the Save dialog, check "Make this a Central Model after save" → save to the shared server location (network drive or cloud). The file is now the Central File. Do not work in this copy — close it.

**Step 4 — Create a Local Copy:**
Collaborate tab → Synchronize → Create Local Copy. Or: open the Central File from the server → in the Open dialog, check "Create New Local" → Revit creates a local copy in your local project folder → open from there.

**Naming Conventions:**
Central File: ProjectName_CENTRAL.rvt (stored on server)
Local copies: ProjectName_CENTRAL_[YourName].rvt (stored locally)
Never rename the Central File after worksharing is enabled.`,
      },
      {
        title: 'The Daily Worksharing Workflow',
        content: `Every team member follows this workflow every session, without exception.

**Session Start:**
1. Open your Local Copy (never the Central File directly)
2. Collaborate tab → Synchronize → Synchronize with Central → Synchronize Now
3. This pulls the latest changes from everyone who worked since your last sync into your local copy
4. You are now up to date — begin working

**During Work:**
- Synchronize with Central every 30-60 minutes minimum
- Before SWC: save your local file (Ctrl+S) first
- SWC dialog: add a comment describing what you are syncing ("Completed Level 3 east wing walls") — useful for the audit trail
- After SWC: Revit relinquishes your element ownership (or you can relinquish manually via Relinquish All Mine)

**Session End:**
1. Save your local file
2. Synchronize with Central → Synchronize Now
3. In the SWC dialog: check "Relinquish all mine after sync" — this releases ownership of all elements so other team members can edit them
4. Close your local file

**The Golden Rules:**
- Never save directly to the Central File location
- Always create a local copy for each session
- Sync frequently — long gaps between syncs increase conflict risk
- Relinquish at session end — do not hold ownership overnight
- Never email the Central File — always share the server path`,
      },
      {
        title: 'Workset Ownership & Borrowing',
        content: `**Editing Elements:**
When you select and edit an element in a workshared model, Revit automatically borrows that element from the Central File. Borrowing is per-element — another user cannot edit the same element simultaneously, but they can edit other elements in the same workset.

**Workset Ownership:**
Making a workset "Editable" grants you ownership of all elements in that workset — others cannot edit any element in that workset until you release ownership. Use sparingly — only when you need exclusive access to an entire workset (rare in practice).

**Element Grayed Out / Cannot Edit:**
If you select an element and it is grayed out or shows a "Not Editable" warning, another user currently owns it. Options:
- Wait for them to Sync and Relinquish
- Request ownership: a notification is sent to the owner asking them to release the element
- Use Manage → Editing Requests to send or view ownership requests

**Relinquish All Mine:**
Collaborate tab → Relinquish All Mine. Releases ownership of all elements and worksets you currently hold without a full Sync. Use this if you are stepping away from the model without syncing.

**Worksharing Monitor:**
Collaborate tab → Worksharing Monitor. Shows a live list of who is in the model, what worksets each user has active, and when each user last synced. An essential tool for team leads managing a large model session.`,
      },
      {
        title: 'Cloud Worksharing — Autodesk Docs & BIM 360',
        content: `Traditional worksharing uses a local network server. Modern practice increasingly uses Autodesk cloud platforms (previously BIM 360, now Autodesk Construction Cloud / ACC / Autodesk Docs).

**Benefits of Cloud Worksharing:**
- No server infrastructure needed
- Team members can collaborate from any location (remote work, multiple offices, client site)
- Automatic version history and backup
- Integrated with Autodesk Construction Cloud for RFIs, submittals, and issue tracking
- Better performance on large models (Revit Cloud Models use a different sync mechanism)

**Setting Up Cloud Worksharing:**
Collaborate tab → Collaborate → choose "In the cloud" → sign in with Autodesk account → select the ACC/BIM 360 project and folder → Save. Revit uploads the model to the cloud. Team members access via: Collaborate tab → Open Cloud Model → navigate to the project.

**Revit Cloud Models (.rvt in ACC):**
Cloud-workshared models are stored in ACC, not as local files. The local file is a Revit Cloud Cache — a locally stored copy that syncs with the cloud model. The workflow is the same (open local → work → SWC) but the Central File is in the cloud rather than on a server.

**C4R (Collaboration for Revit):**
The older cloud platform term still used in some firms. The technology has been unified under ACC but the workflows are identical.

**File Size Considerations:**
Large models (over 500MB) can be slow to sync over cloud connections. Strategies: open only needed worksets, use Revit links for separate disciplines rather than one monolithic model, optimize model file size regularly (Purge Unused, Audit on open).`,
      },
      {
        title: 'Troubleshooting Common Worksharing Issues',
        content: `**Corrupt Local Copy:**
Symptom: Local file crashes or shows unexpected errors.
Fix: Delete the local copy. Re-create a new local copy from the Central File. You lose any unsynced local work — this is why frequent SWC is critical.

**Central File Corruption:**
Symptom: All users cannot open the Central File.
Fix: Open the most recent Journal file backup (stored in C:\\Users\\[user]\\AppData\\Local\\Autodesk\\Revit\\...) or restore from server backup. This is why server backups of the Central File must be set up on day one.

**"Model is Being Saved" Error:**
Symptom: Cannot sync — Revit reports the Central File is being saved.
Cause: Another user's sync is in progress, or a previous sync crashed mid-process.
Fix: Wait a few minutes and retry. If persistent, the BIM Manager must use the Revit Server tool to release the lock.

**Worksharing Warnings:**
After syncing, Revit may show a list of warnings about element conflicts. Review each warning — some are informational, but warnings about duplicate elements or broken constraints require attention.

**Out-of-Date Local Copy:**
Symptom: Colored indicator in the Collaborate tab shows your model is significantly behind the Central.
Fix: Sync immediately before doing more work. The longer you go without syncing, the larger the sync operation and the greater the conflict risk.

**Best Practice — Regular Sync Schedule:**
On active project days, establish a team sync protocol: everyone syncs at 10am, 1pm, and 4pm minimum. The BIM Manager publishes a weekly model health check reviewing warnings, file size, and workset assignments.`,
      },
    ],
    takeaways: [
      'Worksharing uses a Central File on a shared server — every team member works in their own Local Copy',
      'Synchronize with Central (SWC) every 30-60 minutes during active work; always relinquish at session end',
      'Never open and directly edit the Central File — always create a local copy first',
      'Element ownership (borrowing) is automatic per element; workset ownership is manual and should be used sparingly',
      'Cloud worksharing (Autodesk Docs / ACC) eliminates the need for a local server and enables remote collaboration',
    ],
    resource: {
      title: 'Autodesk Revit — Worksharing',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-BB1A4A4A-4A4A-4A4A-AA4A-4A4A4A4A4A4B',
    },
    quiz: { label: 'Worksharing & Central Files Quiz', questions: 10, time: '5 min' },
    prev: 'rv-17',
    next: 'rv-19',
  },

  // ─────────────────────────────────────────────────────────
  // rv-19: Linked Models & Copy/Monitor
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-19',
    num: 19,
    title: 'Linked Models & Copy/Monitor',
    topic: 'Collaboration',
    cat: 'advanced',
    readTime: '16 min',
    free: false,
    desc: 'Link structural, MEP, and architectural Revit models together for multi-discipline coordination — and use Copy/Monitor to track changes between disciplines automatically.',
    intro: `On any building project beyond the simplest scale, multiple disciplines work in separate Revit files: an architect in the architectural model, a structural engineer in the structural model, an MEP engineer in the MEP model. Revit Links bring these separate files together in a single coordination environment — so each discipline can see the others' work, check for clashes, and coordinate changes in real time.

Copy/Monitor takes this further: it creates watched copies of critical elements (grids, levels, columns, walls) so that when the structural engineer moves a grid, the architectural model receives an alert and the architect can review and accept or reject the change. This is BIM coordination working as it should.`,
    sections: [
      {
        title: 'Inserting a Revit Link',
        content: `**Linking a Revit File:**
Insert tab → Link panel → Link Revit → navigate to the linked file → select → Open.

The "Import/Link RVT" dialog offers positioning options:
- **Auto - Origin to Origin:** Places the linked model with its Project Base Point at your model's Project Base Point. Use this when all disciplines set up their models from the same shared origin point — the standard on coordinated projects.
- **Auto - By Shared Coordinates:** Uses the Shared Coordinate system (Survey Point) to align the models. Use when disciplines have set up their survey points to a common real-world coordinate (e.g., a site datum).
- **Auto - Center to Center:** Centers the bounding boxes. Use only as a fallback — not recommended for coordinated BIM.
- **Manual:** You place the linked model manually by clicking a point. Use only for quick reference, never for coordinated work.

**The Linked File in the Model:**
After linking, the other model appears as a ghosted reference within your model. It is not editable — you can only view it. Grids, levels, walls, and all geometry from the linked file are visible (subject to Visibility/Graphics settings).

**Managing Links:**
Manage tab → Links → Manage Links. Shows all linked Revit files, CAD files, and other references with their status (Loaded, Unloaded, Not Found). Options: Reload (refreshes to the latest version of the linked file), Unload (hides the link without removing it), Remove (permanently removes the link).`,
      },
      {
        title: 'Visibility of Linked Models',
        content: `Linked models are controlled in Visibility/Graphics (VG) just like native elements, but with some important differences.

**VG → Revit Links Tab:**
The Revit Links tab in VG shows each linked file. For each link you can:
- Show or hide the entire link (visibility checkbox)
- Set the display to "By Host View" (follows the host model's VG settings) or "Custom" (set independent VG settings for the link)
- Set the linked file's phase and phase filter for display

**"By Host View" vs. "Custom":**
By Host View is the default — the linked model's categories follow your view's VG settings. Elements in the link that are in the "Walls" category follow your view's wall settings. Custom lets you override the linked model's category display independently — useful when you want structural elements from the link to appear in a specific color or line weight regardless of your architectural VG settings.

**Visibility of Linked Model Elements:**
In the Model Categories tab of VG, expand any category to see subcategories — some include entries from the linked model. You can control linked elements' visibility per-category this way.

**Halftone the Link:**
In VG → Revit Links → select the link → expand → check "Halftone." The entire linked model renders at 50% opacity — a standard technique to show the structural model as a grey ghost behind the architectural model for coordination checking.

**Link Display Modes:**
With a link selected in the model: Properties shows "Display Settings." You can switch between Overlay (visible only in the host project) and Attachment (visible to any project that links the host project). Overlay is standard for coordination; Attachment is used for nested links.`,
      },
      {
        title: 'Coordinating Levels & Grids Between Disciplines',
        content: `The most critical coordination task between linked models is ensuring that Levels and Grids match exactly between disciplines. A structural grid that does not align with the architectural grid creates errors throughout the entire project.

**Best Practice — Shared Starting Point:**
At project kickoff, the Project Lead (usually the Architect) sets up the Levels and Grids in the architectural model and distributes them to all disciplines. Structural and MEP engineers link the architectural model and use Copy/Monitor (covered next) to import the levels and grids into their own models.

**Shared Coordinates:**
All linked models should use the same Shared Coordinate system — a real-world origin tied to a survey point. Manage tab → Coordinates → Acquire Coordinates → click the linked model. This pulls the linked model's coordinate system into your model, ensuring both share the same real-world reference.

**Publish Coordinates:**
Manage tab → Coordinates → Publish Coordinates → click the linked model. Pushes your coordinate system to the linked file (requires you have write access to that file). This is the reverse operation — used by the Architect to distribute coordinates to consultants.

**Checking Alignment:**
After linking with Auto - By Shared Coordinates, grids in the linked model should overlay exactly on your own grids. If they do not, the coordinate systems are not aligned — investigate before proceeding. Misaligned grids cannot be fixed by moving the link — the coordinate systems must be reconciled at the source.`,
      },
      {
        title: 'Copy/Monitor',
        content: `Copy/Monitor creates monitored copies of elements from a linked model in your own model. When the linked model changes the original element, Revit flags a warning in your model — giving you the opportunity to review and accept or reject the change.

**What Can Be Monitored:**
Levels, Grids, Columns, Walls, Floors, Openings. The most common use: monitoring Levels and Grids from the architectural model in the structural model, and monitoring structural columns and beams in the architectural model.

**Setting Up Copy/Monitor:**
Collaborate tab → Copy/Monitor → Select Link → click the linked model → the Copy/Monitor ribbon appears.

Choose: Copy (copies and monitors elements) or Monitor (monitors without copying — for elements already in your model that match the linked model).

Click the elements to copy/monitor → Finish.

**The Copied Elements:**
Copied elements appear in your model as native elements constrained to match the linked originals. You can see them, reference them, but cannot independently move them (they follow the linked original).

**Coordination Review:**
After reloading a linked file, Collaborate tab → Coordination Review. Shows a list of monitored elements that have changed in the linked model. For each change:
- Accept: your model accepts the change (your copy updates to match)
- Reject: the change is flagged and the linked model's coordinator is notified
- Postpone: defer the decision

This is the formal change notification system between disciplines — a structural engineer moving a column triggers an alert in the architectural model asking the architect to review and accept or reject.`,
      },
      {
        title: 'Clash Detection with Linked Models',
        content: `One of the primary reasons for linking models is clash detection — checking that structural elements, architectural elements, and MEP services do not physically conflict.

**Revit Interference Check:**
Collaborate tab → Coordinate panel → Interference Check → Run Interference Check. In the dialog: select categories from your model AND from linked models to check against each other. Common checks:
- Structural Framing (link) vs. Mechanical Ductwork (host)
- Structural Columns (link) vs. Walls (host)
- Pipe (link) vs. Structural Framing (link 2)

The result is a report listing every geometric interference. Double-click any row to zoom to the conflicting elements in 3D.

**Limitations of Revit Interference Check:**
- Checks geometric overlap only — no clearance checking (e.g., 500mm maintenance zone around ducts)
- Can only check one pair of categories at a time
- Does not produce formal clash reports for issue tracking

**Navisworks for Full Clash Detection:**
For professional multi-discipline clash detection, export to Navisworks (File → Export → NWC → Navisworks Cache). Navisworks aggregates all discipline models and runs comprehensive clash detection with:
- Hard clashes (physical overlap)
- Clearance clashes (elements too close)
- Duplicate clashes (identical geometry from different models)
- Formal clash report export (PDF, Excel)
- Clash grouping and assignment to responsible parties

Navisworks is covered in the Navisworks course within the Software pillar of this platform.`,
      },
    ],
    takeaways: [
      'Link Revit files via Insert → Link Revit — use Auto - Origin to Origin or By Shared Coordinates for coordinated BIM',
      'VG → Revit Links tab controls visibility and display of linked models per view; halftone to show links as grey ghosts',
      'Copy/Monitor creates monitored copies of Levels, Grids, and structural elements — changes in the link trigger Coordination Review alerts',
      'Coordination Review (Collaborate tab) is the formal change notification system between disciplines in a linked model workflow',
      'Revit Interference Check finds hard clashes; Navisworks is the professional tool for full multi-discipline clash detection',
    ],
    resource: {
      title: 'Autodesk Revit — Linked Models and Copy/Monitor',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-CC1A4A4A-4A4A-4A4A-AA4A-4A4A4A4A4A4C',
    },
    quiz: { label: 'Linked Models & Copy/Monitor Quiz', questions: 10, time: '5 min' },
    prev: 'rv-18',
    next: 'rv-20',
  },

  // ─────────────────────────────────────────────────────────
  // rv-20: Revit Templates & Office Standards
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-20',
    num: 20,
    title: 'Revit Templates & Office Standards',
    topic: 'BIM Management',
    cat: 'advanced',
    readTime: '15 min',
    free: false,
    desc: 'Build and maintain a professional Revit template (.rte) that encodes your office standards — ensuring every project starts correctly and every drawing looks consistent.',
    intro: `Every Revit project starts from a template. The quality of that template determines how much setup time each project requires and how consistent your drawings look across the office. A poorly configured template means every project team reinvents the wheel — custom line styles, dimension types, title blocks, and view templates rebuilt from scratch every time.

A well-built office template is one of the highest-value investments a BIM team can make. It encodes years of accumulated decisions — drawing standards, project workflows, content libraries — into a single file that ensures every project starts correctly. This lesson teaches you how to build, maintain, and distribute a professional Revit template.`,
    sections: [
      {
        title: 'What Belongs in a Template',
        content: `A Revit template (.rte) is a project file saved as a template. It contains everything that should be pre-configured for every new project. The goal: a new project team should be able to start modeling immediately without configuring anything.

**Project Settings:**
- Units (mm/m vs. feet/inches, decimal places)
- Snap settings (snap increments, snap types enabled)
- Temporary dimension settings (snaps to wall face/center/etc.)
- Project Information fields (company name, address)

**Families Pre-Loaded:**
- Office titleblock (A1, A0, A3 sizes)
- Standard door, window, and stair families
- Common furniture and equipment families
- Annotation families (tags, section marks, callout heads, north arrows)
- Standard detail components (insulation, concrete block, timber section)

**Graphical Standards:**
- Line Styles (all firm-specific line types defined)
- Line Weights (all 16 line weight values calibrated to print correctly)
- Fill Patterns (all hatch patterns for materials and filled regions)
- Object Styles (default line weights and colors per category)
- Materials (firm material library with correct cut/surface patterns and render assets)

**View & Annotation Standards:**
- Text Types (body text, heading, subtitle — correct font, size, color)
- Dimension Types (firm dimension style with correct arrow type, text size, line extension)
- View Templates (Construction Plan, Reflected Ceiling Plan, Elevation, Section, Detail — all pre-configured)
- Default 3D View

**Drawing Sheet Standards:**
- Sheet sizes pre-loaded with correct titleblock
- Sheet List schedule pre-configured
- Standard north arrow placed in a specific location`,
      },
      {
        title: 'Line Styles, Weights & Patterns',
        content: `**Line Weights:**
Manage tab → Settings → Line Weights. Revit has 16 line weight numbers (1-16). Each number maps to a specific pen thickness in mm. Calibrate these to match your office's drawing standards — the values depend on your printing setup and scale.

Typical calibration for 1:100 architectural drawings:
- 1 = 0.13mm (construction lines, grid dimension witness lines)
- 2 = 0.18mm (annotation, text underlines)
- 3 = 0.25mm (general annotation, thin element lines)
- 4 = 0.35mm (standard wall lines)
- 5 = 0.50mm (medium walls, structural elements)
- 6 = 0.70mm (heavy cut lines, section boundary)
- 7 = 1.00mm (thick border lines)

**Line Styles:**
Manage tab → Settings → Line Styles. Every named line style in the project (for use with Detail Lines and Model Lines) is listed here. Add custom styles: dashed hidden lines, center lines, break lines, demolition lines. Each style uses a line weight number and pattern.

**Fill Patterns:**
Manage tab → Settings → Fill Patterns. Two types:
- Drafting patterns (scale with the view scale — patterns maintain the same printed size regardless of zoom)
- Model patterns (scale with the model — pattern size is in real-world mm)

For cut and surface material patterns, use Model patterns at real-world scale (brick bond at 225mm x 75mm). For filled region hatching on drawing annotations, use Drafting patterns.

**Object Styles:**
Manage tab → Settings → Object Styles. Sets the default line weight, color, and pattern per Revit category and subcategory. This is the baseline — VG overrides and material assignments take precedence, but Object Styles catches anything not otherwise specified.`,
      },
      {
        title: 'View Templates in the Template File',
        content: `View Templates are the most impactful part of a Revit template — they ensure every view in every project has consistent settings without manual configuration.

**Standard View Templates to Build:**
For each common view type, create a view template that encodes the firm standard:

- **Arch - Construction Plan 1:100:** scale, Detail Level Medium, Discipline Architecture, specific VG settings (furniture on, structure on, MEP off), annotation categories set
- **Arch - Construction Plan 1:50:** same but 1:50 scale, Detail Level Fine
- **Arch - Reflected Ceiling Plan:** ceiling-appropriate VG (ceilings on, furniture off, lighting on)
- **Arch - Interior Elevation:** scale 1:50, Detail Level Fine, interior finishes on
- **Arch - Building Section:** scale 1:100, full-height VG
- **Arch - Wall Section:** scale 1:20, Detail Level Fine, materials visible
- **Arch - Detail:** scale 1:10 or 1:5, Detail Level Fine
- **Arch - Site Plan:** scale 1:500, topography and site elements visible

**Template Management:**
View Templates live in the template file and transfer to every new project. When office standards change (a new line weight standard, a new sheet size), update the template — but update existing projects using Transfer Project Standards.

**Locking Templates:**
In project View Properties, assigning a View Template with all parameters included locks those settings. Any parameter in the template cannot be changed in the view. This enforces consistency but can frustrate team members who need minor adjustments — balance control with flexibility by excluding certain parameters (like scale) from the template.`,
      },
      {
        title: 'Maintaining & Distributing the Template',
        content: `A template that is never updated becomes obsolete. Template maintenance is an ongoing BIM Management responsibility.

**Template Ownership:**
Assign one BIM Manager (or a small BIM Standards team) as the owner of the template. Changes to the template must go through this owner — not every project team member should be able to modify the master template.

**Version Control:**
Name template files with version numbers: OfficeTemplate_v2024.1.rte, OfficeTemplate_v2024.2.rte. Store all versions. Projects should note which template version they started from — this matters when diagnosing why a project has different standards from the current template.

**Distributing the Template:**
Store the master template on a shared network drive or cloud storage accessible to all team members. In Revit Options (File → Options → File Locations), set the "Default template file location" to the network path. Now when any team member creates a new project (File → New → Project), they automatically see the office template.

**Updating Existing Projects:**
When the template changes, existing projects do not automatically update. Use Manage → Transfer Project Standards to push specific updates (new view templates, new line styles, updated materials) from the new template into existing projects.

**Template Audit:**
Periodically open the template itself and run:
- Manage → Purge Unused (removes unused families, types, and styles)
- Manage → Review Warnings (fix any warnings baked into the template)
- Check file size — templates should be under 50MB; if larger, audit what families are loaded

**Project-Specific vs. Office Standards:**
Some settings belong only in individual projects, not the template: project-specific materials, specialist families for a particular building type, client-specific annotation requirements. Avoid bloating the template with project-specific content.`,
      },
      {
        title: 'BIM Execution Plan Alignment',
        content: `A Revit template does not exist in isolation — it should implement the decisions documented in the project's BIM Execution Plan (BEP).

**What is a BEP:**
The BIM Execution Plan is a project-specific document that defines:
- Software versions to be used
- Revit version and template version
- Naming conventions (levels, grids, views, sheets, families)
- Model organization (worksets, file structure, linked model strategy)
- Level of Development (LOD) requirements per phase
- Data requirements (what parameters must be filled in)
- Coordination process (how and when models are shared between disciplines)
- Export formats (IFC, NWC, DWG) and frequency
- Model audit schedule

**Template and BEP Alignment:**
A project's Revit template should implement the BEP's naming conventions and standards automatically. For example, if the BEP requires sheet numbers in format [Discipline]-[Number] (A-101), the template's sheet properties and sheet list schedule should be pre-configured for this format.

**ISO 19650:**
The international standard ISO 19650 (covered in the Standards pillar of this platform) defines information management requirements for BIM projects. Your template and BEP should align with ISO 19650 requirements, particularly around information container naming conventions and the Common Data Environment (CDE) workflow.

**Employer's Information Requirements (EIR):**
On UK and international public sector projects, clients issue an EIR specifying what BIM deliverables they need. The template should be configured to produce these deliverables (correct COBie parameters pre-loaded as shared parameters, correct export settings saved).`,
      },
    ],
    takeaways: [
      'A Revit template (.rte) pre-loads all office standards — units, families, line styles, materials, view templates, and sheet layouts',
      'Line Weights (1-16 pen thicknesses), Line Styles, Fill Patterns, and Object Styles all belong in the template',
      'One View Template per standard view type ensures every project\'s plans, sections, and details look consistent',
      'Assign a BIM Manager as template owner; version-control template files and distribute via a shared network path',
      'Templates should align with the project BEP and ISO 19650 requirements — they implement standards, not just preferences',
    ],
    resource: {
      title: 'Autodesk Revit — Templates and Standards',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-DD1A4A4A-4A4A-4A4A-AA4A-4A4A4A4A4A4D',
    },
    quiz: { label: 'Revit Templates & Office Standards Quiz', questions: 10, time: '5 min' },
    prev: 'rv-19',
    next: 'rv-21',
  },

  // ─────────────────────────────────────────────────────────
  // rv-21: Custom Titleblocks & Annotation Families
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-21',
    num: 21,
    title: 'Custom Titleblocks & Annotation Families',
    topic: 'Family Creation',
    cat: 'advanced',
    readTime: '16 min',
    free: false,
    desc: 'Build a professional titleblock family from scratch and create custom annotation families — section heads, callout marks, north arrows, and tags — that match your office drawing standards precisely.',
    intro: `Revit's default titleblocks and annotation families rarely match a firm's drawing standards. The font is wrong, the logo is missing, the revision table has the wrong columns, the section mark looks nothing like the office convention. Building custom annotation families is not optional for professional practice — it is the difference between drawings that look like Revit defaults and drawings that look like your firm.

This lesson teaches you to build a titleblock from scratch and create the most common annotation family types. These skills use the Revit Family Editor in a 2D annotation context — lighter than 3D component family creation but with its own set of rules and best practices.`,
    sections: [
      {
        title: 'The Annotation Family Editor',
        content: `Annotation families are 2D families that live in views — not in 3D space. They include: tags (door tags, room tags, structural tags), section marks, callout heads, elevation symbols, north arrows, generic annotations, and titleblocks.

**Opening the Annotation Family Editor:**
File → New → Family → navigate to the Annotations folder in the Revit Family Templates directory (C:\\ProgramData\\Autodesk\\RVT 20XX\\Family Templates\\English\\Annotations\\) → select the appropriate template.

Common annotation templates:
- Generic Annotation.rft — for north arrows, general symbols, custom annotations
- Tag.rft — for element tags (reads model parameters)
- Titleblock.rft — specifically for sheet titleblocks (has page boundary pre-drawn)

**The Annotation Environment:**
The Family Editor for annotations opens with:
- A red dashed rectangle representing the page boundary (for titleblocks) or the annotation origin (for tags)
- Two reference planes: horizontal and vertical, intersecting at the origin
- A simplified ribbon with 2D-only tools: Lines, Text, Labels, Filled Regions, Images

**Scale Behavior:**
Annotation families are view-scale independent. They always print at the size they are defined, regardless of the view scale. A 5mm text note in a tag prints at 5mm whether the view is 1:100 or 1:20. This is why annotation families use real paper dimensions (mm as drawn = mm printed), unlike model elements which are real-world scale.

**Family Parameters:**
Annotation families can have parameters — both type parameters (the same for all instances of a type) and instance parameters (vary per placement). Labels in tags reference model element parameters.`,
      },
      {
        title: 'Building a Titleblock Family',
        content: `**Step 1 — Start from the Titleblock Template:**
File → New → Family → Titleblock.rft. The template opens with a pre-drawn A1 page boundary rectangle.

**Step 2 — Set the Page Size:**
The red rectangle represents the paper size. The template defaults to A1 (841 x 594mm). To change: select the rectangle → Properties → Width and Height. Or use Detail Lines to redraw. For other sizes (A0, A3), duplicate the family and change dimensions.

**Step 3 — Draw the Border:**
Use Detail Lines (with appropriate line weights) to draw the drawing border inside the page boundary. Standard: a 10mm margin on all sides, wider on the left (25mm) for binding. Use the Line Style dropdown to apply the correct border line weight.

**Step 4 — Draw the Title Panel:**
Draw the titleblock box grid using Detail Lines. The title panel typically occupies the right-hand 180-190mm of the sheet for A1/A0 sizes. Draw horizontal dividers for: project name, drawing title, drawing number, scale, revision, date, drawn by, checked by.

**Step 5 — Add Text (Static):**
Use the Text tool (Create tab → Text) for static labels that never change: "Project:", "Drawing Title:", "Scale:", "Rev.", "Date:", company name if it is always the same.

**Step 6 — Add Labels (Dynamic):**
Labels display family parameters — they are the live fields that change per sheet. Create tab → Label → click in the cell → the Edit Label dialog opens → add parameters to the label:
- Sheet Number, Sheet Name, Project Name, Project Number, Drawn By, Checked By, Issue Date → these are built-in sheet parameters that Revit populates automatically.

**Step 7 — Add the Revision Schedule:**
Create tab → Revision Schedule → click to place in the revision table area → resize columns. The revision schedule automatically lists revisions associated with each sheet.

**Step 8 — Add the Company Logo:**
Insert tab → Image → browse to your logo file (.png with transparent background recommended) → place in the logo area → resize. Logo images are embedded in the family file.`,
      },
      {
        title: 'Building a Section Mark Family',
        content: `Section marks are among the most visible annotation families — and the ones that most obviously mark a drawing as coming from a particular firm. Building a custom one is straightforward.

**Start from the Correct Template:**
File → New → Family → Section Head.rft (in the Annotations folder). Revit section marks consist of two parts: the Section Head (the arrowhead end) and optionally the Section Tail (the other end). Each is a separate family. The Section Mark type (in your project) combines a Head family and Tail family.

**Drawing the Section Head:**
In the template, the reference intersection marks where the section line ends. Draw:
- A filled triangle or arrowhead pointing toward the section line (Detail Lines + Filled Region for solid shapes)
- A circle below the arrowhead for the reference numbers
- Two Labels inside the circle: one for "Detail Number" (the view number on the sheet), one for "Sheet Number"

**Setting Up the Labels:**
The Section Head family has built-in parameters: Detail Number and Sheet Number. These auto-populate when the section view is placed on a sheet. Your label must reference these parameters to display the correct numbers.

**Section Tail:**
If your office convention uses a section tail (the opposite end of the section line), create a matching family from the Section Tail.rft template. The tail typically shows the same reference information as the head, or just an arrow.

**Loading into the Project:**
Load the head and tail families into your project → Manage tab → Object Styles → Annotation Objects → Section Line → click the Head and Tail columns → browse to your loaded families → OK. Now all new section marks use your custom families.`,
      },
      {
        title: 'Building a Tag Family',
        content: `Tag families read parameters from the model element they tag and display them in a styled annotation. Building custom tags requires understanding Labels and their connection to model parameters.

**Start from the Tag Template:**
File → New → Family → select a category-specific tag template (Door Tag.rft, Room Tag.rft, Generic Tag.rft).

The template opens with two reference planes at the origin (the tag attachment point — where the leader points to).

**Adding a Label:**
Create tab → Label → click near the origin to place. The Edit Label dialog opens:
- Left panel: Available Parameters (all parameters accessible for this tag category)
- Right panel: Label Parameters (parameters that will display in the tag)

Select parameters to display: for a door tag, add "Mark." For a room tag, add "Number" and "Name" (on separate lines or in one label with a line break).

**Formatting the Label:**
Select the label → Format → set the font, size, bold/italic. The font and size here define the printed annotation size. Match your office text standard.

**Drawing the Tag Border:**
Most tags have a visible border shape (circle, hexagon, rectangle, diamond) around the label. Draw this using Detail Lines or Filled Regions. The shape should be centered on the origin point (where the leader attaches).

**Leader Attachment:**
Tags have a "Shared Parameter" for leader behavior — the tag attaches its leader at a specific point relative to the origin. In most templates this is already set up. The user positions the tag body after placement; the leader automatically draws from the tag to the element.

**Two-Value Tags (e.g., Room Tag with Name and Number):**
Use two Labels stacked vertically, or use one Label with multiple parameters separated by line breaks (in the Edit Label dialog, add multiple parameter rows). Control the relative size of each — room number typically larger than room name.`,
      },
      {
        title: 'North Arrow & Generic Annotation Families',
        content: `**North Arrow:**
File → New → Family → Generic Annotation.rft. Draw a north arrow graphic using Detail Lines and Filled Regions — any shape convention your firm uses (compass rose, simple arrow, circle with N label). Add a "True North" label if needed.

The north arrow family is placed as an annotation family in a view (usually on sheets). It does not rotate automatically with True North vs. Project North — you rotate the annotation family instance to match the plan orientation on the sheet.

**Match Line:**
For large floor plans split across multiple sheets (using Dependent Views), a match line annotation marks where the plan continues on another sheet. Create from Generic Annotation.rft — a line with a label showing "Continued on Sheet [number]." The sheet number is a manual text field (not automatically linked) in most implementations.

**Elevation Symbol:**
File → New → Family → Elevation Mark Body.rft. Draws the interior elevation circle/diamond symbol. Must contain Labels for Detail Number and Sheet Number (same as section marks). The Elevation Mark family type in the project combines the Body family and the Arrow family (the directional indicator).

**Keynote Legend:**
The Keynote Legend is created automatically when keynotes are in use (Annotate → Legends → Keynote Legend). However, you can create a custom Keynote Legend view (View → New → Legend → Keynote Legend) and format its appearance to match your office standard in the schedule properties.

**Loading and Testing:**
Always load finished annotation families into a test project and verify:
- Labels display the correct parameter values
- Printed size is correct at the intended view scale
- Leader behavior works correctly
- The family appears in the correct place in the Type Selector`,
      },
    ],
    takeaways: [
      'Annotation families are 2D and scale-independent — dimensions in the family equal printed dimensions in mm',
      'A titleblock is an annotation family with Labels (dynamic parameters) and Text (static labels) in a grid border layout',
      'Section mark families consist of a Head and Tail — each a separate family assigned in Object Styles → Section Line',
      'Tag families use Labels referencing model element parameters — the label auto-updates when the element parameter changes',
      'Test all annotation families in a live project at the correct print scale before committing them to the office template',
    ],
    resource: {
      title: 'Autodesk Revit — Annotation Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-EE1A4A4A-4A4A-4A4A-AA4A-4A4A4A4A4A4E',
    },
    quiz: { label: 'Custom Titleblocks & Annotation Families Quiz', questions: 10, time: '5 min' },
    prev: 'rv-20',
    next: 'rv-22',
  },

  // ─────────────────────────────────────────────────────────
  // rv-22: Parameters: Instance, Type & Shared
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-22',
    num: 22,
    title: 'Parameters: Instance, Type & Shared',
    topic: 'BIM Data',
    cat: 'advanced',
    readTime: '16 min',
    free: false,
    desc: 'Master the Revit parameter system — the backbone of BIM data — from built-in and project parameters to shared parameters that travel between families, schedules, and IFC exports.',
    intro: `Parameters are the data layer that makes Revit a BIM tool rather than just a 3D drafting tool. Every piece of information stored against a model element — its material, fire rating, cost, manufacturer, maintenance schedule, energy value — is a parameter. Understanding the parameter system deeply lets you design custom data schemas, drive automation, and deliver the structured information that clients, contractors, and facility managers need.

This lesson covers the entire Revit parameter hierarchy: built-in parameters you cannot change, project parameters you add per project, family parameters that drive geometry, and shared parameters — the critical tool for consistent data that works across families, schedules, tags, and IFC exports.`,
    sections: [
      {
        title: 'Parameter Types — The Hierarchy',
        content: `Revit has four distinct parameter types, each with different scope and behavior.

**1. Built-in Parameters:**
Parameters that Revit defines and controls — you cannot add, remove, or rename them. Examples: Wall Base Constraint, Door Width, Room Area, Level Elevation. These are fundamental to how Revit calculates and coordinates the model. They appear in Properties and are accessible in schedules.

**2. Family Parameters:**
Parameters defined inside a family (.rfa) by the family author. They control the family's geometry and appearance. Two subtypes:
- **Type Parameters:** Same value for all instances of a type (e.g., the width of a "Single-Flush 900mm" door is always 900mm)
- **Instance Parameters:** Can vary per placed instance (e.g., the sill height of a window can be different for each window of the same type)

Family parameters are only accessible within that family's schedules and tags — unless they are converted to Shared Parameters.

**3. Project Parameters:**
Parameters added to a project for all elements of specific categories — not defined inside families, but attached to elements in the project. Examples: "Fire Rating" added to Walls, "Acoustic Rating" added to Doors, "Maintenance Zone" added to Equipment.

Project parameters appear in schedules and Properties for their assigned categories, but they are NOT accessible in tags (tags can only read Shared Parameters or built-in parameters).

**4. Shared Parameters:**
Parameters defined in an external .txt file (the Shared Parameter File). Because the definition lives in an external file, the same parameter can be added to multiple families AND to the project, and they all share the same identity (GUID). Shared parameters appear in tags, schedules, and IFC exports — they are the professional standard for BIM data delivery.`,
      },
      {
        title: 'Creating & Applying Project Parameters',
        content: `**Adding a Project Parameter:**
Manage tab → Settings → Project Parameters → Add.

In the Parameter Properties dialog:
- **Parameter Type:** Project Parameter (vs. Shared Parameter — see next section)
- **Name:** e.g., "Fire Rating"
- **Discipline:** Common, Architecture, Structure, HVAC, etc.
- **Type of Parameter:** Text, Integer, Number, Length, Area, Volume, Yes/No, Material, URL, Multiline Text, etc.
- **Group Under:** Where it appears in the Properties panel (Identity Data, Construction, Electrical, etc.)
- **Instance or Type:** Instance = different per element; Type = same for all elements of that type
- **Categories:** Which element categories this parameter is added to (select Walls, Doors, Windows, etc.)

Click OK → the parameter now appears in Properties for every element in the selected categories.

**Useful Project Parameters to Add:**
- "Fire Rating" (Text, Walls + Floors + Doors) — for fire compartment schedules
- "Acoustic Rating" (Text, Walls + Doors + Windows) — for acoustic reports
- "NBS Clause" (Text, multiple categories) — for specification linking
- "Asset ID" (Text, Equipment, Furniture) — for FM system integration
- "Maintenance Frequency" (Text, MEP Equipment) — for FM planning

**Filling in Parameter Values:**
Select an element → Properties → scroll to the parameter group → click the cell → enter the value. Or: edit via a schedule — create a schedule for the category, add the parameter as a column, edit cells in bulk.`,
      },
      {
        title: 'Family Parameters & Driving Geometry',
        content: `Family parameters are defined in the Family Editor and control the geometry of the family. This is what makes a parametric door resize when you change its width parameter — the geometry is mathematically linked to parameters.

**Creating a Parameter in the Family Editor:**
Family Properties → Parameters → Add → name it, set discipline and type, set Instance or Type → OK. The parameter now appears in the Properties panel in the Family Editor.

**Associating a Parameter to Geometry:**
Draw geometry (a line, extrusion, or reference plane) → select it → in Properties, click the small grey box beside a dimension field (e.g., Length) → select an existing parameter or create a new one. The geometry dimension is now driven by the parameter value.

Example: a rectangular extrusion has a Width dimension. Associate it to a "Width" parameter. Change the Width parameter value → the extrusion immediately resizes.

**Reference Planes & Constraints:**
In families, Reference Planes are the skeleton that geometry references. Lock geometry to reference planes, then drive reference plane positions with parameters. This is the standard pattern:
1. Draw reference planes (horizontal and vertical)
2. Add dimensions between them
3. Assign parameters to the dimensions (EQ constraint or parameter association)
4. Draw geometry locked to the reference planes

**Formulas:**
Parameters can be driven by formulas referencing other parameters. Example:
- Width = 900mm (user-set)
- Frame Width = Width * 0.1 (always 10% of door width, calculated automatically)

Formulas use standard arithmetic: +, -, *, /, and Revit functions (if(), sin(), cos(), abs(), etc.).`,
      },
      {
        title: 'Shared Parameters — The Professional Standard',
        content: `**What Makes Shared Parameters Special:**
Each Shared Parameter has a unique GUID (globally unique identifier). This means the same parameter — with identical name, data type, and GUID — can be added to multiple families and to the project, and Revit recognizes them as the same parameter. They can be read by tags, appear in schedules, and export correctly to IFC.

**The Shared Parameter File (.txt):**
A plain-text file that defines all shared parameters as a list of GUIDs, names, and data types. This file is shared across all families and projects in the office — it is the authoritative parameter registry.

**Creating a Shared Parameter File:**
Manage tab → Settings → Shared Parameters → Create → name the file (e.g., OfficeSharedParams.txt) → Save. The file is now active.

**Creating Parameter Groups and Parameters:**
In the Shared Parameters dialog → Groups → New → name a group (e.g., "Identity," "Acoustic," "Fire," "FM Data"). Select a group → Parameters → New → name the parameter, set data type → OK. Repeat for all parameters.

**Adding a Shared Parameter to a Family:**
In the Family Editor → Manage tab → Project Parameters → Add → select "Shared Parameter" → Browse → navigate to the shared parameter file → select the parameter → OK.

**Adding a Shared Parameter to the Project:**
Manage tab → Project Parameters → Add → Shared Parameter → select the same parameter from the same file → assign to categories → OK.

**Now the Parameter Appears Everywhere:**
Tags can display it (in the Label, find it under the parameter list — it appears because it is a shared parameter). Schedules include it. IFC exports map to it. This cross-family, cross-project consistency is why Shared Parameters are the professional standard for BIM data delivery.`,
      },
      {
        title: 'Parameters & IFC / COBie Export',
        content: `BIM data delivery — to FM systems, to the client, to the supply chain — relies on parameters being correctly defined and populated. The two main delivery standards are IFC and COBie.

**IFC (Industry Foundation Classes):**
IFC is the open standard for BIM data exchange. When you export from Revit to IFC (File → Export → IFC), each Revit element becomes an IFC entity, and each Revit parameter becomes an IFC property.

Shared Parameters are the primary way to map Revit data to IFC properties. The Revit IFC export settings include a mapping file that links shared parameter GUIDs to IFC property set names and property names.

For example: a shared parameter "Fire Rating" (GUID: xxxx) maps to IFC Property Set "Pset_WallCommon" → "FireRating" property in the exported IFC file. This is what makes the IFC file readable by downstream tools (Navisworks, Solibri, ARCHICAD, BIM viewers).

**COBie (Construction Operations Building Information Exchange):**
COBie is a data schema for FM handover — a spreadsheet (or structured dataset) containing all the information a facilities manager needs: spaces, systems, components, types, jobs, resources, contacts.

Revit COBie exports (via add-ins or IFC COBie) read specific shared parameters: COBie.Space.Name, COBie.Component.TagNumber, COBie.Type.Manufacturer, COBie.Type.ModelNumber, etc.

Pre-loading these COBie shared parameters into your office template (from the COBie shared parameter file available from Autodesk) means every project automatically has the data structure ready for FM handover — the team just needs to populate the values.

**Practical Advice:**
Define your project's required parameters in the BIM Execution Plan before modeling starts. Load the shared parameter file, add parameters to the template, assign to categories. Teams that add parameters retrospectively (after 80% of the model is built) face the painful task of filling in data across thousands of elements.`,
      },
    ],
    takeaways: [
      'Four parameter types: Built-in (Revit-owned), Family (geometry-driving, local to family), Project (per-project, not in tags), Shared (cross-family, in tags, schedules, and IFC)',
      'Shared Parameters have a GUID that makes them uniquely identifiable across families, projects, tags, and IFC exports',
      'The Shared Parameter File (.txt) is the office parameter registry — store it with the template on a shared drive',
      'Family parameter formulas drive geometry from other parameters — the basis of all parametric Revit families',
      'Pre-load COBie shared parameters in the office template so every project is ready for FM handover from day one',
    ],
    resource: {
      title: 'Autodesk Revit — Shared Parameters',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-FF1A4A4A-4A4A-4A4A-AA4A-4A4A4A4A4A4F',
    },
    quiz: { label: 'Parameters: Instance, Type & Shared Quiz', questions: 10, time: '5 min' },
    prev: 'rv-21',
    next: 'rv-23',
  },

  // ─────────────────────────────────────────────────────────
  // rv-23: View Templates, Filters & Overrides
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-23',
    num: 23,
    title: 'View Templates, Filters & Overrides — Advanced Control',
    topic: 'Revit Views',
    cat: 'advanced',
    readTime: '15 min',
    free: false,
    desc: 'Build a comprehensive view control system using View Templates and Filters to produce any drawing type from one model — coordination views, construction drawings, presentation plans, and discipline-specific outputs.',
    intro: `At the beginner level, Visibility/Graphics is a per-view dial you turn manually. At the professional level, View Templates and Filters are a system — a designed, managed, and maintained framework that ensures every view type across every project looks exactly right with minimal manual effort.

This lesson goes beyond the basics to show you how to design an integrated view control system: filters that read real project data, templates that encode drawing production standards, and override strategies that let one model produce radically different output for different audiences — from a simple client presentation to a contractor construction issue to an FM handover model.`,
    sections: [
      {
        title: 'Advanced Filter Design',
        content: `Filters become powerful when they read meaningful project data rather than just element categories.

**Filter Rule Logic:**
Each filter can have multiple rules combined with AND or OR logic.
- AND: all rules must be true for the element to match
- OR: any rule being true makes the element match

**Example — Structural vs Non-Structural Wall Filter:**
Two filters on the same category (Walls):
- Filter 1 "Structural Walls": Walls where "Structural" = Yes → override with heavier line weight
- Filter 2 "Non-Structural Partitions": Walls where "Structural" = No AND Function contains "Interior" → override with lighter line weight, halftone

**Example — MEP System Color Coding (on a coordination plan):**
- Filters on Ducts by System Classification:
  - Supply Air: System Classification = Supply Air → blue fill
  - Return Air: System Classification = Return Air → green fill
  - Exhaust Air: System Classification = Exhaust Air → red fill
- Filters on Pipes by System Classification:
  - Domestic Cold Water: System Classification = Domestic Cold Water → blue
  - Domestic Hot Water: System Classification = Domestic Hot Water → orange

**Example — Phase-Based Filter (alternative to Phase Filter):**
- Elements where Phase Created = "Phase 2 New Works" → solid lines, blue tint
- Elements where Phase Created = "Phase 1 New Works" → solid lines, black
- Elements where Phase Demolished is not empty → dashed, grey

**Stacking Filters — Priority Order:**
Filters at the top of the list in VG override those below. Design your filter list deliberately — more specific rules at the top, more general rules below. A "Fire Rated Walls (2hr)" filter at the top takes priority over a general "Structural Walls" filter below.`,
      },
      {
        title: 'View Template Architecture for a Full Drawing Set',
        content: `A professional project needs at minimum these distinct View Templates, each capturing a complete set of VG settings for its purpose:

**Construction Drawing Templates:**
- Arch-Construction Plan 1:100 — full architectural detail, no furniture, no MEP
- Arch-Construction Plan 1:50 — fine detail, room-specific content
- Arch-RCP 1:100 — ceilings, lights, no floor finish hatch
- Arch-Elevation 1:100 — elevation-appropriate visibility
- Arch-Building Section 1:100 — full building section
- Arch-Wall Section 1:20 — fine detail section
- Arch-Detail 1:10 — maximum detail level

**Coordination Templates:**
- Coord-Architectural Only — architecture in full weight, structural halftone, MEP hidden
- Coord-All Disciplines — all disciplines visible, color-coded by discipline via filters
- Coord-Structure vs Arch — structural model full weight, architectural halftone
- Coord-Above/Below — shows structure above and below current level

**Presentation Templates:**
- Pres-Shaded Floor Plan — Shaded visual style, furniture visible, no annotations
- Pres-3D View — Consistent 3D camera settings, materials visible
- Pres-Color Scheme Plan — rooms colored by department, no construction annotation

**FM/Handover Templates:**
- FM-Space Plan — rooms visible with COBie data tags, no structural or MEP clutter
- FM-Asset Plan — mechanical/electrical equipment visible and tagged

**The Template Matrix:**
Document your template list in a spreadsheet. For each template: what VG settings are included, which views use it, which parameters are locked vs. flexible. This becomes part of your BIM Execution Plan.`,
      },
      {
        title: 'Overriding Elements Without Filters',
        content: `Filters handle rule-based overrides. But some visual adjustments need to be applied directly to specific elements or groups of elements in a specific view. Here is the complete toolkit:

**Temporary Override (Hide/Isolate):**
Select elements → View Control Bar → Hide in View (permanent) or Temporary Hide/Isolate (session only). Use Temporary for working clarity; use permanent only for drawing production.

**Override by Element:**
Right-click → Override Graphics in View → By Element → set line weight, color, pattern, surface fill. The element shows a small colored square icon indicating an override is active. Right-click → Reset to remove.

**Override by Category (via VG):**
VG → Model Categories → select a category → click the Projection/Surface or Cut cell → change line weight and pattern. Affects all elements of that category in this view.

**Halftone Individual Elements:**
In Override Graphics in View → By Element → check Halftone. The selected element(s) render at 50% opacity. Use for: showing "background" context walls in a detail drawing without fully hiding them, or ghosting furniture in a construction plan.

**Override Lines Only (not fill):**
In Override Graphics, the Lines tab controls line appearance. The Patterns tab controls surface fill separately. You can override one without affecting the other — e.g., change line color to grey but leave the fill pattern unchanged.

**View-Specific Model Lines:**
Model Lines (Create tab → Model Line) are 3D model elements. Detail Lines (Annotate tab → Detail Line) are 2D view-specific. When you need to add graphic content that should appear only in one view without being part of the model, use Detail Lines — not Model Lines.`,
      },
      {
        title: 'Scope Boxes — Controlling Datum Extent Across Views',
        content: `Scope Boxes solve a specific problem: controlling which views show a Level or Grid, and at what extents.

**The Problem:**
By default, Levels and Grids span the entire model extents. On a large complex project with buildings in multiple locations, every level appears in every elevation view — cluttering drawings with irrelevant datum lines.

**What Scope Boxes Do:**
A Scope Box is a 3D box drawn around a portion of the model. Levels and Grids assigned to a Scope Box only appear in views whose crop region intersects the Scope Box.

**Creating a Scope Box:**
View tab → Scoping panel → Scope Box → draw a rectangular boundary in a plan view. Drag the box height in an elevation view.

**Assigning to Datum Elements:**
Select a Level or Grid → Properties → "Scope Box" parameter → select your scope box from the dropdown. The datum now only appears in views that intersect the scope box.

**Assigning to Views:**
Select nothing in a view → Properties → "Scope Box" parameter → assign a scope box. The view's crop region is now constrained to the scope box extents. Useful for coordinating crop regions across multiple views of the same area — all views assigned to the same scope box show the same extents.

**Scope Box Visibility:**
Scope boxes are only visible when selected or when the Scope Boxes category is turned on in VG. They never print.`,
      },
      {
        title: 'View-Specific Geometry — Model Clipping & Section Boxes',
        content: `Beyond VG settings, two tools provide geometry-level control of what appears in 3D views.

**Section Box:**
In a 3D view: select the 3D view → Properties → check "Section Box." A 3D bounding box appears around the model. Drag its faces to clip the model — showing only the geometry inside the box. Incredibly useful for:
- Creating a cut-away 3D view showing interior spaces
- Isolating one floor of a multi-story building
- Presenting a specific wing or area in 3D without the surrounding context

The Section Box only affects the active 3D view — it does not cut the model for other views.

**Plan Region:**
In a floor plan view, a Plan Region lets you set a different View Range for a specific area of the plan. Annotate tab → Region → Plan Region → draw a boundary → set the View Range for the region.

Use case: a split-level floor where one side of the plan is at a different elevation — the Plan Region lets that area have a different cut height while the rest of the plan stays at the standard cut height.

**Detail Level per Element Category:**
In VG → Model Categories → expand a category → the Detail Level column can be set to Override per category. Example: set Walls to Detail Level Fine (showing layers) while keeping the overall view at Coarse. This gives you fine-detail walls with simplified furniture — a common architectural drawing configuration.

**Halftone Underlay:**
In view Properties → Underlay → select a level → set Underlay Orientation (Look Down or Look Up). The underlay appears as a halftone ghost of another level's plan. Adjust underlay visibility in VG → Model Categories → set categories to Halftone for underlay display.`,
      },
    ],
    takeaways: [
      'Advanced filters combine AND/OR rules reading real project parameters — phase, system, structural status, fire rating',
      'Design a View Template matrix before starting a project: one template per drawing type, documented and maintained',
      'Override by Element (right-click) handles specific exceptions; Filters handle rule-based systematic overrides',
      'Scope Boxes control which views show specific Levels and Grids — essential for large or multi-building projects',
      'Section Box in 3D views creates cut-away presentations; Plan Region applies different View Range to sub-areas of a floor plan',
    ],
    resource: {
      title: 'Autodesk Revit — Filters and View Templates',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-GG1A4A4A-4A4A-4A4A-AA4A-4A4A4A4A4A50',
    },
    quiz: { label: 'Advanced View Templates & Filters Quiz', questions: 10, time: '5 min' },
    prev: 'rv-22',
    next: 'rv-24',
  },

  // ─────────────────────────────────────────────────────────
  // rv-24: Performance, File Health & Large Projects
  // ─────────────────────────────────────────────────────────
  {
    id: 'rv-24',
    num: 24,
    title: 'Performance, File Health & Large Projects',
    topic: 'BIM Management',
    cat: 'advanced',
    readTime: '17 min',
    free: false,
    desc: 'Keep Revit models fast, healthy, and manageable on large and complex projects — covering file optimization, warning management, model auditing, and hardware strategies.',
    intro: `A Revit model that starts fast does not stay fast without active management. As a project grows — more elements, more families, more linked files, more views, more annotation — performance degrades. Files over 500MB become noticeably slow. Files over 1GB can be nearly unusable on under-specified hardware.

Performance management is not a one-time cleanup task — it is an ongoing discipline. BIM Managers who understand what slows Revit down and how to prevent it keep their teams productive throughout the project lifecycle. This final lesson gives you the complete toolkit: diagnosis, prevention, and remediation.`,
    sections: [
      {
        title: 'What Makes Revit Slow',
        content: `Understanding the causes of slowness is the first step to preventing it. Revit performance degrades from several distinct sources:

**1. File Size:**
Large .rvt files load slowly, save slowly, and sync slowly. File size grows from: complex families with high polygon counts, embedded images (in materials and titleblocks), imported CAD geometry (DWG files brought in as imports rather than links), and accumulated unused families that were loaded but never purged.

**2. Too Many Loaded Families:**
Each loaded family (even if unused) adds to the project database. 500 door types loaded when only 10 are used adds memory and processing overhead.

**3. Complex Families:**
Families with very high polygon counts (detailed furniture, complex MEP equipment, poorly built downloaded families) slow rendering, navigation, and model processing. A single high-poly family placed 500 times multiplies the impact.

**4. Too Many Open Views:**
Each open view tab consumes memory. 40 open views on a workstation with 16GB RAM will cause slowness. Close hidden views regularly.

**5. Excessive Warnings:**
Revit maintains an internal list of model warnings. Models with thousands of warnings are slower than clean models — Revit processes warnings continuously in the background.

**6. Unoptimized Hardware:**
Revit is not GPU-intensive (it is primarily CPU and RAM). The single most impactful hardware upgrade is RAM: 32GB minimum for large projects, 64GB for very large models. A fast NVMe SSD for local file storage makes a significant difference to sync and save times.

**7. Linked File Overhead:**
Each linked Revit file adds its own memory overhead. 5 linked models (structural, MEP, site, interior, facade) multiplies the memory load.`,
      },
      {
        title: 'Regular Maintenance — Purge, Audit & Compact',
        content: `**Purge Unused:**
Manage tab → Purge Unused. Removes all unused families, types, line styles, fill patterns, materials, and other project standards that exist in the file but have no placed instances or references.

Run purge before any milestone issue (planning submission, construction issue, project completion). Run it multiple times — sometimes purging one item reveals others that can now be purged.

Typical file size reduction: 10-30% for well-maintained projects, up to 60% for projects that have imported and deleted many families over time.

**Caution:** Do not purge a model you are actively working in with other team members — it can invalidate family types that others have in use in their local copies. Schedule purge operations at session-start on a day when no one else is in the model.

**Audit:**
Open a project with "Audit" checked in the Open dialog (small checkbox in the lower-left of the file browser). Audit scans the internal database for corruption and repairs errors. It adds significant time to opening (5-30 minutes on large files) but should be run:
- Monthly on active projects
- When receiving a file from a third party
- If the file shows unusual behavior (elements not displaying, errors on save)
- Before any major milestone

**Compact (Save with Compact):**
File → Save As → Options → check "Compact File." This rebuilds the internal database structure, removing fragmented storage from deleted elements and reducing file size. Normal saves do not compact — they append changes. Compact periodically (weekly on very active projects, monthly otherwise).

On large workshared models, compact is done on the Central File when no users are in the model.`,
      },
      {
        title: 'Warning Management',
        content: `Revit's warning system tracks constraint conflicts, duplicate elements, and modeling errors. Left unmanaged, warnings accumulate into thousands — slowing the model and hiding serious coordination problems.

**Reviewing Warnings:**
Manage tab → Inquiry panel → Review Warnings. A dialog lists all current warnings grouped by type. The count at the top tells you the health of your model: under 50 warnings is excellent, under 200 is manageable, over 500 needs attention, over 1000 is a serious problem.

**Common Warning Types and Fixes:**

"Highlighted walls overlap" — Two walls occupy the same space. Fix: move or delete one wall, or use the Disallow Join option to suppress the join at that location.

"Room is not in a properly enclosed region" — Unbounded room. Fix: close the enclosing walls, add Room Separation Lines, or delete the orphaned room.

"Multiple elements are joined but do not intersect" — Elements are geometry-joined but no longer touch. Fix: unjoin the elements (Modify → Unjoin Geometry) or move them back together.

"Duplicate mark values" — Two elements have the same Mark parameter value. Fix: renumber elements to make marks unique, or suppress if marks are not used in schedules.

"There are identical instances in the same place" — Two elements perfectly overlapping. Fix: select the pair → the warning dialog has a "Show" button to find them → delete the duplicate.

**Warning Targets:**
Set a project-level warning target: no more than X warnings at any given time (e.g., 100 for small projects, 300 for large). Assign warning review as a weekly task to the BIM Manager. Address warnings when they are new — finding and fixing a wall overlap the week it was created is far faster than diagnosing it six months later.`,
      },
      {
        title: 'Strategies for Large Project Models',
        content: `On large projects (major hospitals, universities, large commercial), a single Revit model becomes unmanageable. The solution is model splitting — a deliberate multi-file strategy.

**Discipline Separation:**
The most basic split: Architecture, Structure, and MEP in separate .rvt files, linked together. Each discipline team works in their own file without loading the complexity of other disciplines.

**Zone Splitting:**
For very large buildings (100,000m2+), split the architecture model by zone: Podium.rvt, Tower A.rvt, Tower B.rvt. Each zone links the others for coordination. Structural and MEP models may also split by zone.

**Vertical Splitting:**
For tall buildings: Basement.rvt, Floors 1-15.rvt, Floors 16-30.rvt, Roof.rvt. Each vertical slice is one model; typical floors can share a model if floors are identical (using groups or a "typical floor" model linked and copied).

**Workset-Based Loading:**
In a workshared model, each workset can be set to "Close" (not loaded) when opening the file. Team members working only on the architecture can close the MEP and structural worksets — reducing the loaded model size significantly. Open: Collaborate tab → Worksets → in the Worksets dialog, change the "Opened" state.

**Recommended Model Size Limits:**
- Single-discipline model: keep under 300MB for good performance
- Coordinated multi-discipline model (linked): host model under 200MB, each link under 300MB
- Total loaded memory per session: under 4GB across all open models
- Anything over these thresholds: evaluate splitting or workset optimization`,
      },
      {
        title: 'Hardware, Settings & Long-Term Model Health',
        content: `**Recommended Hardware for Professional Revit Work:**

| Component | Minimum | Recommended | Large Projects |
|---|---|---|---|
| CPU | i7 / Ryzen 7, 4GHz+ | i9 / Ryzen 9, 4.5GHz+ | Workstation Xeon |
| RAM | 16GB | 32GB | 64GB+ |
| GPU | 4GB VRAM (any modern) | 8GB VRAM | 12GB+ VRAM |
| Storage | SSD (SATA) | NVMe SSD | NVMe RAID |
| Display | 1920x1080 single | 2560x1440 | Dual 4K |

Revit uses one CPU core for most operations — high single-core clock speed matters more than core count. GPU is used for rendering (Raytracer) and display but is not the primary bottleneck for modeling.

**Revit Graphics Settings:**
File → Options → Graphics → Hardware acceleration (use DirectX or OpenGL). Enable hardware acceleration — disabling it forces software rendering which is significantly slower for navigation and display.

**Closing Unused Views:**
View tab → Windows → Close Hidden Views. Make this a daily habit. Open views consume memory even when not visible.

**Anti-Virus Exclusions:**
Add your Revit local file paths and the Revit program directory to antivirus exclusion lists. Antivirus scanning Revit save operations in real-time adds significant overhead and can cause save failures on large files.

**Journal Files:**
Revit logs all operations to journal files in C:\\Users\\[user]\\AppData\\Local\\Autodesk\\Revit\\Autodesk Revit 20XX\\Journals\\. These can be replayed to recover from crashes. They accumulate over time — safe to delete journals older than 6 months to free disk space.

**Model Health Score:**
Adopt a Model Health KPI for your team: file size, warning count, number of loaded families, number of unused families. Review monthly. A declining health score signals that intervention is needed before the model becomes a productivity problem.`,
      },
    ],
    takeaways: [
      'File size, excessive warnings, complex families, and too many open views are the primary Revit performance killers',
      'Purge Unused, Audit on open, and Save with Compact are the three essential maintenance operations — run them regularly',
      'Review Warnings (Manage tab) monthly — under 200 warnings is manageable; over 500 needs active remediation',
      'Large projects need a multi-file strategy: split by discipline, zone, or vertical to keep individual models under 300MB',
      'RAM (32-64GB) and NVMe storage have the highest impact on Revit performance — more than CPU or GPU upgrades',
    ],
    resource: {
      title: 'Autodesk Revit — Performance and Large Projects',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-HH1A4A4A-4A4A-4A4A-AA4A-4A4A4A4A4A51',
    },
    quiz: { label: 'Performance, File Health & Large Projects Quiz', questions: 10, time: '5 min' },
    prev: 'rv-23',
    next: null,
  },
];
