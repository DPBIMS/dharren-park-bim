// ============================================================
// REVIT PROJECT SETUP — LESSONS ps-17 through ps-24 (ADVANCED)
// File: lib/revitSetupLessonsContent/lessons-17-24.js
// FORMAT: 3-Layer — Explain → Guide → Practice (ISO 19650 aligned)
// END GOAL: Complete ISO 19650-aligned Revit Project Template
// ============================================================

export const lessons_17_24 = [

  // ─────────────────────────────────────────────────────────
  // ps-17: Shared Parameters — Project Setup
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-17',
    num: 17,
    title: 'Shared Parameters — Project Setup',
    topic: 'Data Standards',
    cat: 'advanced',
    readTime: '15 min',
    free: false,
    desc: 'Create the DPC shared parameter file and add the core shared parameters to the project — the data backbone that enables scheduling, tagging, and ISO 19650-compliant IFC exports.',
    intro: `You have spent 16 lessons building the visual standard for the Dharren Park project. From this lesson forward, you build the data standard — the invisible layer of information that makes a Revit model genuinely useful for engineering, procurement, facility management, and ISO 19650 compliance.

Shared parameters are the foundation of this data layer. Without them, parameters you add to families are invisible to tags and cannot be mapped to IFC property sets. With them, data flows from the model into every downstream system — schedules, tags, IFC, COBie, FM platforms. This lesson creates the DPC shared parameter file and adds the first set of project parameters.`,
    sections: [
      {
        title: 'EXPLAIN — Why Shared Parameters for the Project Template',
        content: `In the Revit Family Creation course (rf-16), you learned that shared parameters enable tags, scheduling, and IFC mapping. Here we apply that knowledge at the project level — creating the shared parameter file that all DPC families will reference.

**The shared parameter file is a central asset:**
One .txt file defines all shared parameters for the entire project. Every family that needs a "Fire Rating" parameter uses the same parameter from this file — the same GUID. This means:
- A door tag that reads "Fire Rating" shows the same data as the door schedule "Fire Rating" column
- The IFC export maps "Fire Rating" to Pset_DoorCommon.FireRating automatically
- A wall tag and a floor tag both read the same "Fire Rating" — one parameter, consistent everywhere

**The DPC shared parameter schema:**
Based on ISO 19650 information requirements and the Dharren Park project brief, the parameters are organised into groups:

Group 1 — Identity and Description:
Parameters that identify elements for scheduling, tagging, and specification cross-referencing.

Group 2 — Fire and Safety:
Fire rating, acoustic rating, security rating, compartmentation data. Required for building regulations compliance and fire engineering.

Group 3 — Room and Space Data:
Detailed room use, occupancy, environmental requirements. Required for client space data schedule and FM handover.

Group 4 — FM Asset Data:
Asset identification, maintenance data, warranty information. Required for COBie and FM system handover.

Group 5 — COBie:
Standard COBie parameters from the Autodesk COBie shared parameter file. These use pre-defined GUIDs that match the COBie schema exactly.`,
      },
      {
        title: 'EXPLAIN — ISO 19650 Data Requirements',
        content: `ISO 19650 Part 1 Section 12 defines the Level of Information Need (LOIN) — what information elements must carry at each project stage. The shared parameters you create now are the implementation of this LOIN.

**At Schematic Design (current stage):**
Parameters needed: Room names and numbers, basic element identification (Mark), fire rating zones.

**At Design Development:**
Parameters needed: All fire and safety data, room function and occupancy, structural properties, material specifications.

**At Construction Documents:**
Parameters needed: Full specification references (NBS clause numbers), product data (manufacturer, model), installation requirements.

**At Handover (COBie delivery):**
Parameters needed: Asset IDs, maintenance frequencies, warranty periods, installation dates, responsible parties.

**Why build them all now:**
The shared parameter file is set up at project inception, even though some parameters will only be populated later. If you add a "Manufacturer" parameter in week 30 of the project when procurement starts, every element placed in weeks 1-29 has an empty field — data that should have been captured is lost. Set up all parameters at the start. Empty fields are fine. Missing parameters are not.`,
      },
      {
        title: 'GUIDE — Creating the DPC Shared Parameter File',
        content: `**Step 1 — Open Shared Parameters:**
Manage tab → Settings panel → Shared Parameters

**Step 2 — Create a new shared parameter file:**
Click "Create" (not Browse)
Navigate to: C:\\DharrenPark\\Project\\Documents\\BEP\\
Filename: DPC2025-SharedParameters-v1.0.txt
Click Save.

The empty shared parameter file is created. Revit now points to this file.

**Step 3 — Create parameter groups:**
In the Edit Shared Parameters dialog, under Groups:
Click "New" → type: Identity and Description → OK
Click "New" → type: Fire and Safety → OK
Click "New" → type: Room and Space Data → OK
Click "New" → type: FM Asset Data → OK
Click "New" → type: COBie → OK

You now have 5 groups visible in the Groups list.

**Step 4 — Create parameters in Group 1 (Identity and Description):**
Select "Identity and Description" group → under Parameters section → New

Parameter 1:
- Name: Description
- Discipline: Common
- Type of Parameter: Text
- Click OK

Parameter 2:
- Name: NBS Clause Reference
- Discipline: Common
- Type of Parameter: Text
- Click OK

Parameter 3:
- Name: Manufacturer
- Discipline: Common
- Type of Parameter: Text
- Click OK

Parameter 4:
- Name: Product Model
- Discipline: Common
- Type of Parameter: Text
- Click OK

Parameter 5:
- Name: Specification Reference
- Discipline: Common
- Type of Parameter: Text
- Click OK

**Step 5 — Create parameters in Group 2 (Fire and Safety):**
Select "Fire and Safety" group → New

Parameter 1: Fire Rating — Text
Parameter 2: Acoustic Rating — Text
Parameter 3: Security Rating — Text
Parameter 4: Intumescent Strip Required — Yes/No
Parameter 5: Fire Compartment — Text

**Step 6 — Create parameters in Group 3 (Room and Space Data):**
Select "Room and Space Data" group → New

Parameter 1: Room Function — Text
Parameter 2: Occupancy Type — Text
Parameter 3: Required Area — Area
Parameter 4: Ventilation Type — Text
Parameter 5: Internal Environment Category — Text

**Step 7 — Create parameters in Group 4 (FM Asset Data):**
Select "FM Asset Data" group → New

Parameter 1: Asset ID — Text
Parameter 2: Maintenance Frequency — Text
Parameter 3: Warranty Period — Text
Parameter 4: Installation Date — Text
Parameter 5: Responsible Party — Text

**Step 8 — Click OK to close Shared Parameters dialog.**

**Step 9 — Add shared parameters to the project:**
Manage tab → Project Parameters → Add
Select "Shared Parameter" → Browse → navigate to DPC2025-SharedParameters-v1.0.txt
Select "Fire and Safety" group → Fire Rating → OK
In Parameter Properties:
- Categories: Walls, Doors, Floors, Ceilings, Windows (Ctrl+click all)
- Instance or Type: Type
- Group Under: Identity Data
Click OK.

Repeat for each parameter you want active in the project.

**Step 10 — Save (Ctrl+S).**`,
      },
      {
        title: 'PRACTICE — Build the DPC Shared Parameter File',
        content: `Complete your DPC shared parameter file with all parameters listed below.

**File location:**
C:\\DharrenPark\\Project\\Documents\\BEP\\DPC2025-SharedParameters-v1.0.txt

**COMPLETE PARAMETER LIST:**

GROUP: Identity and Description
| Parameter Name | Type | Use |
|---|---|---|
| Description | Text | Long-form element description |
| NBS Clause Reference | Text | Specification clause number |
| Manufacturer | Text | Product manufacturer |
| Product Model | Text | Product model or reference |
| Specification Reference | Text | Project spec section reference |

GROUP: Fire and Safety
| Parameter Name | Type | Use |
|---|---|---|
| Fire Rating | Text | e.g., "60 min", "120 min" |
| Acoustic Rating | Text | e.g., "Rw 45 dB" |
| Security Rating | Text | e.g., "RC2", "RC3" |
| Intumescent Strip Required | Yes/No | Fire door sealing |
| Fire Compartment | Text | Compartment zone reference |

GROUP: Room and Space Data
| Parameter Name | Type | Use |
|---|---|---|
| Room Function | Text | Detailed room use classification |
| Occupancy Type | Text | Building regulations occupancy |
| Required Area | Area | Programme area requirement (m²) |
| Ventilation Type | Text | Natural, mechanical, mixed mode |
| Internal Environment Category | Text | IEC A, B, or C classification |

GROUP: FM Asset Data
| Parameter Name | Type | Use |
|---|---|---|
| Asset ID | Text | FM system unique identifier |
| Maintenance Frequency | Text | Annual, quarterly, monthly |
| Warranty Period | Text | Years, e.g., "2 years" |
| Installation Date | Text | Date of installation |
| Responsible Party | Text | FM maintenance contractor |

**ADD TO PROJECT — these parameters (category assignments):**

Fire Rating → Walls, Doors, Floors, Ceilings, Windows, Curtain Panels — TYPE parameter
Acoustic Rating → Walls, Doors, Windows — TYPE parameter
Fire Compartment → Rooms — INSTANCE parameter
Room Function → Rooms — INSTANCE parameter
Required Area → Rooms — INSTANCE parameter
Asset ID → Mechanical Equipment, Electrical Equipment, Plumbing Fixtures — INSTANCE parameter

**Confirmation Checklist:**
- DPC2025-SharedParameters-v1.0.txt created at the BEP folder
- 5 parameter groups created
- All 20 parameters created across 5 groups
- Fire Rating added to Walls, Doors, Floors, Ceilings, Windows categories
- Room Function and Required Area added to Rooms category
- Asset ID added to MEP equipment categories
- File saved

Move to Lesson 18 — Project Parameters & Schedules Pre-Built.`,
      },
    ],
    takeaways: [
      'Create the shared parameter file at project inception — parameters set up in week 1 capture data from every element placed throughout the project',
      'File location: C:\\DharrenPark\\Project\\Documents\\BEP\\DPC2025-SharedParameters-v1.0.txt — store with project documentation, not in the model folder',
      'Five parameter groups: Identity and Description, Fire and Safety, Room and Space Data, FM Asset Data, COBie',
      'Fire Rating must be a shared parameter (not a regular parameter) to be readable by fire rating tags and mappable to IFC Pset_WallCommon.FireRating',
      'ISO 19650 LOIN principle: set up all parameters at project start — empty fields are acceptable, missing parameters are not',
    ],
    resource: {
      title: 'Autodesk Revit — Shared Parameters',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-shared-parameters',
    },
    prev: 'ps-16',
    next: 'ps-18',
  },

  // ─────────────────────────────────────────────────────────
  // ps-18: Project Parameters & Schedules Pre-Built
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-18',
    num: 18,
    title: 'Project Parameters & Schedules Pre-Built',
    topic: 'Data Standards',
    cat: 'advanced',
    readTime: '14 min',
    free: false,
    desc: 'Build the core schedule set for the Dharren Park project before modeling begins — door schedules, room data sheets, material takeoffs, and a programme compliance schedule that automatically checks room areas against the brief.',
    intro: `A schedule pre-built at project setup is a data capture tool. When a team member places the first door and the door schedule already exists — with columns for Mark, Type, Width, Height, Fire Rating, and Hardware Set — they immediately see what data the project needs. The schedule guides correct data entry from the very first element placed.

This lesson builds the core schedules for Dharren Park. Each schedule is both a drawing output and a live data quality tool that the team uses throughout the project.`,
    sections: [
      {
        title: 'EXPLAIN — Schedules as Data Capture Tools',
        content: `Most Revit users think of schedules as outputs — something generated before a drawing issue to list all the doors or rooms. This is the wrong mindset.

A schedule is a live data capture interface. Every column in the door schedule is a data field the team must fill in. The schedule makes missing data visible immediately — an empty "Fire Rating" cell is obvious in a schedule; an empty parameter in Properties is hidden in plain sight.

**The three types of schedules in Revit:**

Schedule/Quantities:
The standard schedule type. Lists individual element instances (each door, each room, each piece of equipment) or element types (each wall type, each door type). The most common schedule type.

Material Takeoff:
Reports material quantities — area, volume — across elements. Used for cost planning and quantity surveying.

Sheet List:
Lists all sheets in the project. Becomes the drawing register.

**Pre-building schedules at setup has three benefits:**

Benefit 1 — Data guidance:
Team members see what needs to be filled in. Nobody wonders "what parameters does this project use?" — the schedule shows them.

Benefit 2 — Instant QA:
The "Data Complete" column (a calculated value that checks if required fields are filled) immediately flags incomplete elements. Sorted ascending, incomplete items rise to the top.

Benefit 3 — Client deliverables ready:
When the client asks for a room data schedule in week 8, it already exists and just needs updating. No scramble to build it under deadline pressure.`,
      },
      {
        title: 'EXPLAIN — The Programme Compliance Schedule',
        content: `The programme compliance schedule is one of the most valuable BIM deliverables in the design phase — and it only exists if the project has been set up correctly with the Required Area shared parameter from Lesson 17.

**What it does:**
Compares each room's actual modeled area against the client's required area from the project brief. Flags under-sized and over-sized rooms automatically. Shows compliance status in real time as the design develops.

**How it works:**
- Required Area: entered by the architect from the client's brief (stored in the shared parameter added in Lesson 17)
- Area: calculated automatically by Revit from the room boundary
- Variance: a calculated value (Area minus Required Area) — negative means undersized
- Compliance: a conditional formula — "Compliant" if Variance ≥ 0, "Below Brief" if Variance < 0

When a designer resizes a room, the compliance status updates immediately. No manual checking. No spreadsheet comparison.

**The client value:**
At design reviews, show the programme compliance schedule instead of (or alongside) the floor plans. The client can immediately see which rooms meet the brief and which don't. This is BIM demonstrating its value in a way clients understand — not just 3D visualisation, but live data about design compliance.

**This only works because of Lesson 3 and Lesson 17:**
- Lesson 3 set Area units to Square Meters — the schedule shows m² values
- Lesson 17 created the Required Area shared parameter — it can be entered per room
Without both of those setup steps, this schedule cannot be built.`,
      },
      {
        title: 'GUIDE — Building the Core Schedules',
        content: `**SCHEDULE 1 — Door Schedule**

Step 1 — Create a new schedule:
View tab → Schedules → Schedule/Quantities
Category: Doors → OK

Step 2 — Add fields:
In the Schedule Properties → Fields tab, add these fields in this order:
- Mark (built-in)
- Type Name (built-in)
- Width (built-in)
- Height (built-in)
- Fire Rating (shared parameter from Lesson 17)
- Acoustic Rating (shared parameter)
- Level (built-in)
- Count (built-in)
- Comments (built-in)

Step 3 — Set Sorting/Grouping:
Sorting/Grouping tab:
- Sort by: Level (ascending, group header)
- Then by: Mark (ascending)
- Footer: Count (show count per level)

Step 4 — Set Formatting:
Formatting tab → select each field → set column width:
- Mark: 15mm
- Width: 20mm, calculate totals: No
- Height: 20mm
- Fire Rating: 25mm

Step 5 — Name and place:
The schedule view is named "Door Schedule" automatically.
Rename in Project Browser: "A-500 Door Schedule"
Drag to sheet A-500 Door Schedule.

---

**SCHEDULE 2 — Room Data Schedule**

View → Schedules → Schedule/Quantities → Category: Rooms → OK

Fields (in order):
- Number, Name, Level, Area, Room Function (shared), Occupancy Type (shared),
  Required Area (shared), Ventilation Type (shared), Comments

Calculated Value — Variance:
Fields tab → Calculated Value button
Name: Area Variance
Formula: Area - Required Area
Type: Area

Calculated Value — Compliance:
Name: Compliance
Formula: if(Area Variance >= 0, "Compliant", "Below Brief")
Type: Text

Sorting: Level (group), then Number (ascending)
Sort Compliance ascending → non-compliant rooms show first.

---

**SCHEDULE 3 — Sheet List**

View → Schedules → Sheet List → OK

Fields: Sheet Number, Sheet Name, Drawn By, Checked By, Current Revision, Appears in Sheet List
Filter: Appears in Sheet List = Yes
Sort: Sheet Number ascending

---

**SCHEDULE 4 — Material Takeoff**

View → Schedules → Material Takeoff → Category: Multi-Category → OK

Fields: Category, Type Name, Material Name, Material Area, Material Volume
Filter: Material Name does not equal ""
Sort: Category, then Material Name`,
      },
      {
        title: 'PRACTICE — Build All Four DPC Schedules',
        content: `Build these four schedules in your DPC project file and place them on the correct sheets.

**DOOR SCHEDULE — "A-500 Door Schedule"**

Fields in column order:
Mark | Type Name | Width | Height | Fire Rating | Acoustic Rating | Level | Comments

Settings:
- Grouped by Level (ascending)
- Mark sorted ascending within each level
- Grid: show lines between rows and columns
- Show count per Level group footer
- Sheet: A-500

Test: Place a Single-Flush door in the L00 plan
→ Check the door schedule shows the door with Level = L00
→ Fire Rating cell should be empty (showing data needs to be entered)
→ This confirms the shared parameter is working

**ROOM DATA SCHEDULE — "A-501 Room Data Schedule"**

Fields in column order:
Number | Name | Level | Area | Required Area | Area Variance | Compliance | Room Function | Occupancy Type | Ventilation Type

Settings:
- Grouped by Level
- Sorted by Number within Level
- Compliance sorted ascending (non-compliant rooms first)
- Sheet: A-501

Test: Place a room in L00 plan (Architecture → Room → click inside a closed area)
→ Set Number: 001, Name: Reception
→ In the room schedule, set Required Area to 50 m²
→ If the room is smaller than 50 m², Compliance shows "Below Brief"
→ Resize the room to be larger than 50 m² → Compliance changes to "Compliant"
→ This is the live programme compliance check working correctly

**SHEET LIST — "Sheet Register"**

Fields: Sheet Number | Sheet Name | Drawn By | Current Revision
Settings: Sorted by Sheet Number, Filter: Appears in Sheet List = Yes
Place on a new sheet: A-000 Drawing Register

**MATERIAL TAKEOFF — "Material Schedule"**

Fields: Category | Material Name | Material Area | Material Volume
Filter: Material Name ≠ ""
Sort: Category → Material Name
Do not place on a sheet (this is a working schedule, not an issued document)

**ISO 19650 Note on Programme Compliance:**
The Required Area data in the room schedule is what ISO 19650 calls "exchanged information" — data that the client (appointing party) provides and the design team must demonstrate compliance with. The compliance schedule is the tool that shows this compliance live in the model. This is BIM delivering on the ISO 19650 information management promise.

**Confirmation Checklist:**
- Door Schedule created and placed on A-500 sheet
- Room Data Schedule with Compliance column created and placed on A-501
- Sheet List created and placed on A-000
- Material Takeoff created (not placed on sheet)
- Test door shows in door schedule
- Test room shows in room data schedule with Compliance status
- File saved

Move to Lesson 19 — Filters.`,
      },
    ],
    takeaways: [
      'Pre-build all schedules before modeling starts — they guide data entry and make missing data immediately visible to the team',
      'The programme compliance schedule (Required Area vs. actual Area) only works because of Lesson 3 (m² units) and Lesson 17 (Required Area shared parameter)',
      'Compliance calculated value: if(Area Variance >= 0, "Compliant", "Below Brief") — sorted ascending, non-compliant rooms rise to the top',
      'Door schedule grouped by Level with count footer — at a glance shows how many doors per floor and which ones are missing data',
      'Sheet List schedule = drawing register — it automatically stays up to date as sheets are added, removed, or renumbered',
    ],
    resource: {
      title: 'Autodesk Revit — Schedules',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-schedules',
    },
    prev: 'ps-17',
    next: 'ps-19',
  },

  // ─────────────────────────────────────────────────────────
  // ps-19: Filters — Setting Up Project-Wide Rules
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-19',
    num: 19,
    title: 'Filters — Setting Up Project-Wide Rules',
    topic: 'View Standards',
    cat: 'advanced',
    readTime: '13 min',
    free: false,
    desc: 'Create the project-wide filter set — fire compartmentation, data completeness, structural vs. non-structural, and phase-based filters — and add them to view templates so they apply automatically across every relevant view.',
    intro: `View filters are rules that change how elements display based on their parameter values. A wall with Fire Rating = "60 min" turns red in fire compartmentation plans. A door with an empty Mark value gets a magenta highlight in QA review views. Demolished elements show dashed and grey in refurbishment drawings.

This lesson builds the DPC filter set and adds each filter to the correct view templates from Lesson 13. Once configured, the team gets fire compartmentation plans, structural highlighting, and QA data checks automatically — without manual view overrides.`,
    sections: [
      {
        title: 'EXPLAIN — How View Filters Work',
        content: `A View Filter is a rule set that:
1. Targets specific element categories
2. Checks a parameter condition (Fire Rating = "60", Mark is empty, Structural = Yes)
3. Applies a graphic override when the condition is true (red lines, magenta fill, heavy weight)

Filters are created once and added to View Templates. Because the templates are applied to views, every view using that template gets the filter automatically. You never manually add a filter to an individual view.

**The filter priority rule:**
Multiple filters can apply to the same element. The filter higher in the VG Filters list takes priority. For fire rating filters:
- Filter: "Fire Rated - 120 min" (priority 1 — top)
- Filter: "Fire Rated - 60 min" (priority 2)
- Filter: "Fire Rated - Any" (priority 3 — bottom)

A wall with Fire Rating = "120 min" matches all three filters. Priority 1 wins — it shows dark red. A wall with Fire Rating = "60 min" does not match priority 1 or 2 (wrong value) but matches priority 3. Wait — it also matches "60 min" which is priority 2. So it shows the 60-min color.

**Filters only work when the parameter exists:**
A "Fire Rating" filter only works if the Fire Rating shared parameter is added to the project (Lesson 17). If the parameter does not exist in the project, the filter rule has nothing to check — it silently does nothing. This is why Lessons 17-19 are sequenced in this order.`,
      },
      {
        title: 'EXPLAIN — The DPC Filter Set',
        content: `The Dharren Park project needs these filter categories:

**Fire Safety Filters (for Fire Compartmentation plans):**
These turn elements different colors based on their fire rating.
- DPC-FireRated-120min → dark red (for 2-hour fire rated elements)
- DPC-FireRated-60min → red (for 1-hour fire rated elements)
- DPC-FireRated-30min → orange (for 30-minute fire rated elements)
- DPC-FireRated-Any → amber fill (any element with a fire rating value)

**Data Completeness Filters (for QA review):**
These highlight elements with missing required data.
- DPC-Missing-FireRating → magenta outline (elements where Fire Rating is empty)
- DPC-Missing-Mark → magenta fill (doors/windows with no Mark number)

**Structural Filters (for coordination):**
- DPC-Structural-Elements → heavy blue lines (elements where Structural = Yes)
- DPC-NonStructural-Partitions → light grey lines (interior non-structural walls)

**Phase Filters (for refurbishment projects):**
These are less relevant for Dharren Park (new build) but included in the template for completeness:
- DPC-Phase-Existing → halftone grey (existing retained elements)
- DPC-Phase-Demolished → dashed grey (elements being removed)

**Where each filter is used:**
- Fire safety filters → "Fire Compartmentation Plan" view (new view template for this)
- Data completeness filters → "[W] QA Review" working view template
- Structural filters → "Arch-3D-Coordination" and "Struct-Plan-GA-100" templates
- Phase filters → "Arch-Plan-Demolition" template (for refurb phases)`,
      },
      {
        title: 'GUIDE — Creating Filters and Adding to Templates',
        content: `**PART A — CREATE FILTERS**

Step 1 — Open Filters:
View tab → Graphics → Filters (or from VG dialog → Filters tab → Edit/New)
The Filters dialog opens.

Step 2 — Create DPC-FireRated-60min:
Click New → Name: DPC-FireRated-60min → OK
Categories: Check Walls, Doors, Floors, Ceilings, Curtain Panels
Filter Rules:
- Filter by: Fire Rating (the shared parameter from Lesson 17)
- Condition: Equals
- Value: 60
Click OK.

Step 3 — Create DPC-FireRated-120min:
Same as above but Value: 120

Step 4 — Create DPC-FireRated-30min:
Same but Value: 30

Step 5 — Create DPC-Missing-Mark:
New → Name: DPC-Missing-Mark
Categories: Doors, Windows
Filter Rules:
- Filter by: Mark
- Condition: Does Not Contain (or "equals" with empty string)
- Value: (leave empty — checking for empty Mark)
Click OK.

Step 6 — Create DPC-Structural-Elements:
New → Name: DPC-Structural-Elements
Categories: Walls, Structural Columns, Structural Framing, Floors
Filter Rules:
- Filter by: Structural Usage (or Structural Material — varies by element)
- Condition: Is Not Equal To → None

Note: For walls specifically: Filter by "Structural Usage" = "Bearing"

Step 7 — Save filters (they are saved when you click OK and save the project).

**PART B — CREATE FIRE COMPARTMENTATION VIEW TEMPLATE**

Step 8 — Create new view template:
View → View Templates → Manage View Templates → New
Name: Arch-Plan-FireCompartment-100

Step 9 — Copy settings from Arch-Plan-GA-100:
Start by duplicating Arch-Plan-GA-100, then modify:
Scale: 1:100
Detail Level: Medium
Phase: New Construction

Step 10 — Add filters to the template:
In the template properties → V/G Overrides Filters → Edit → Add

Add each fire filter and set overrides:

DPC-FireRated-120min:
- Projection Lines: color Dark Red (150,0,0), weight 7
- Cut Lines: color Dark Red (150,0,0), weight 8
- Surface Patterns: solid fill, Dark Red at 20% transparency

DPC-FireRated-60min:
- Projection Lines: color Red (255,0,0), weight 6
- Cut Lines: color Red, weight 7
- Surface Patterns: solid fill, Red at 15% transparency

DPC-FireRated-30min:
- Projection Lines: color Orange (255,130,0), weight 5
- Cut Lines: color Orange, weight 6

**PART C — ADD QA FILTERS TO WORKING VIEW TEMPLATE**

Step 11 — Create [W] QA Review template:
Duplicate Arch-Plan-GA-100 → Name: [W]-QA-Review-100

Step 12 — Add DPC-Missing-Mark filter:
V/G Overrides Filters → Edit → Add → DPC-Missing-Mark
Override: Projection Lines color Magenta (255,0,255), weight 5
Cut Lines: Magenta, weight 6

Step 13 — Save (Ctrl+S).`,
      },
      {
        title: 'PRACTICE — Set Up the DPC Filter Set',
        content: `Create and configure all DPC filters in your project file.

**FILTERS TO CREATE:**

| Filter Name | Categories | Rule | Override Color |
|---|---|---|---|
| DPC-FireRated-120min | Walls, Doors, Floors, Ceilings | Fire Rating = "120" | Dark Red #960000 |
| DPC-FireRated-60min | Walls, Doors, Floors, Ceilings | Fire Rating = "60" | Red #FF0000 |
| DPC-FireRated-30min | Walls, Doors, Floors, Ceilings | Fire Rating = "30" | Orange #FF8200 |
| DPC-FireRated-Any | Walls, Doors, Floors, Ceilings | Fire Rating ≠ "" | Amber #F59E0B |
| DPC-Missing-Mark | Doors, Windows | Mark = "" | Magenta #FF00FF |
| DPC-Structural-Walls | Walls | Structural Usage = Bearing | Blue #2563EB |
| DPC-Phase-Demolished | All categories | Phase Demolished ≠ None | Grey #808080, Dashed |

**VIEW TEMPLATES TO UPDATE — Add these filters:**

Arch-Plan-FireCompartment-100 (new template):
Add: DPC-FireRated-120min, DPC-FireRated-60min, DPC-FireRated-30min
(in that priority order — 120 min at top)

[W]-QA-Review-100 (new working template):
Add: DPC-Missing-Mark, DPC-FireRated-Any

Struct-Plan-GA-100 (from Lesson 13):
Add: DPC-Structural-Walls

**CREATE A FIRE COMPARTMENTATION PLAN VIEW:**

Duplicate the L00 GA plan:
Right-click "L00 Plan - General Arrangement" → Duplicate View → Duplicate with Detailing
Rename: "L00 Plan - Fire Compartmentation"
Apply View Template: Arch-Plan-FireCompartment-100

Add a fire rating to the test wall you placed in earlier lessons:
Select wall → Properties → Fire Rating → type: 60
The wall should immediately turn red in the Fire Compartmentation view.
Switch back to GA plan — wall is still black (filters only apply in the fire plan view).

**CREATE A QA REVIEW VIEW:**

Duplicate L00 GA plan:
Rename: "[W] L00 QA Review"
Apply View Template: [W]-QA-Review-100

The test door should appear with a magenta outline (Mark is empty).
Add a Mark value to the door: select door → Properties → Mark → 001
The magenta outline disappears — the door now has a Mark value.

**Confirmation Checklist:**
- All 7 filters created
- Arch-Plan-FireCompartment-100 template created with fire filters
- [W]-QA-Review-100 template created with missing data filter
- L00 Fire Compartmentation view created — test wall shows red when Fire Rating = "60"
- [W] L00 QA Review view created — test door shows magenta until Mark is filled
- File saved

Move to Lesson 20 — Phase Setup.`,
      },
    ],
    takeaways: [
      'Filters check parameter values and apply graphic overrides — Fire Rating = "60" turns elements red; Mark = "" highlights with magenta',
      'Filters are added to View Templates, not individual views — one filter in a template applies to every view using that template',
      'Priority order matters: DPC-FireRated-120min must be above DPC-FireRated-60min in the filter list — higher position wins when multiple filters match',
      'Filters only work if the shared parameter exists in the project — Lesson 17 must be completed before Lesson 19',
      'Create a [W] QA Review view template with the missing-data filters — this is the team\'s quality check view, used weekly to find incomplete elements',
    ],
    resource: {
      title: 'Autodesk Revit — View Filters',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-view-filters',
    },
    prev: 'ps-18',
    next: 'ps-20',
  },

  // ─────────────────────────────────────────────────────────
  // ps-20: Phase Setup for the Project
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-20',
    num: 20,
    title: 'Phase Setup for the Project',
    topic: 'Organization',
    cat: 'advanced',
    readTime: '13 min',
    free: false,
    desc: 'Configure the project phase sequence, set graphic overrides for each phase state, and create phase-specific view templates — enabling the model to automatically produce existing, demolition, and new works drawings from a single file.',
    intro: `Phase setup is relevant for every project — not just refurbishments. Even a new-build project like Dharren Park has phases: an existing site phase (what was there before demolition), a demolition phase (removal of the old building), and a new construction phase (the new tower). 

When phases are configured correctly from day one, one Revit model produces all three sets of drawings — existing plans, demolition plans, new works plans — automatically. When phases are added retrospectively, every placed element needs to be manually reassigned. This lesson configures phases correctly from the start.`,
    sections: [
      {
        title: 'EXPLAIN — The Revit Phase System',
        content: `Revit's phase system tracks the construction lifecycle of every element in the model. Each element has two phase properties:

**Phase Created:** which phase the element was built in
**Phase Demolished:** which phase the element was removed in (empty = still exists)

These two properties, combined with a view's Phase and Phase Filter settings, determine what a view shows:

**Existing elements:** Phase Created = an earlier phase, Phase Demolished = empty
**Demolished elements:** Phase Created = an earlier phase, Phase Demolished = current or earlier phase
**New elements:** Phase Created = current phase, Phase Demolished = empty
**Temporary elements:** Phase Created = current phase, Phase Demolished = a later phase

**For the Dharren Park project (new build with site clearance):**

Phase 1 — Existing Site:
Any structures that existed on the site before demolition. For Dharren Park, this includes an existing low-rise building that occupied the site.

Phase 2 — Demolition:
The existing building is demolished. Elements from Phase 1 that are demolished have Phase Demolished = Demolition.

Phase 3 — New Construction:
The new Dharren Park Commercial Tower is built. All new elements have Phase Created = New Construction.

**The payoff:**
A view set to Phase = New Construction shows only the new tower. A view set to Phase = Existing Site shows only the old building. A view set to Phase = Demolition with the correct phase filter shows both — the old building in halftone and the demolished elements as dashed — automatically.`,
      },
      {
        title: 'EXPLAIN — Phase Graphic Overrides',
        content: `Phase Graphic Overrides define how elements in each phase state appear visually. This is where the drawing convention for demolition work is encoded in Revit.

**The four phase states and their conventional display:**

Existing (retained):
Elements from a previous phase that still exist. Convention: halftone grey — light, receding, clearly existing not new.
Revit setting: Enable Halftone, grey projection lines

Demolished:
Elements that are being removed in this phase. Convention: dashed lines, medium grey.
Revit setting: Dashed line pattern, grey color

New:
Elements created in the current phase. Convention: standard display — full weight black lines, normal display.
Revit setting: By Category (no override — normal display)

Temporary:
Elements that exist in this phase but are removed before the next phase (scaffolding, formwork, temporary walls). Convention: amber dashed lines.
Revit setting: Amber/orange color, dashed pattern

**Why this matters for the client:**
When the client opens the demolition plan, they should immediately see — without reading a legend — which elements are being demolished (dashed grey) and which are being retained (halftone). The graphic convention communicates this instantly. Getting the phase overrides right makes this communication automatic.`,
      },
      {
        title: 'GUIDE — Configuring Phases for Dharren Park',
        content: `**STEP 1 — Open Phase Settings:**
Manage tab → Phasing → Phases

The Phasing dialog has two tabs: Project Phases and Phase Filters.

**STEP 2 — Create the phase sequence:**
The dialog shows the current phases. By default there are two: Existing and New Construction.

Rename or add phases to create:

Phase 1 — Existing Site:
Click on "Existing" → rename to: Existing Site
This represents the site before any demolition.

Phase 2 — Demolition:
Click "Insert After" (after Existing Site) → name: Demolition Works
This is the phase where the existing building is cleared.

Phase 3 — New Construction:
Rename "New Construction" → keep as: New Construction
This is the main construction phase for the new tower.

Click OK.

**STEP 3 — Set Graphic Overrides:**
Manage tab → Phasing → Graphic Overrides

The dialog shows four rows (Existing, Demolished, New, Temporary) with columns for Projection Lines, Cut Lines, and Pattern overrides.

Set these overrides:

Existing:
- Projection Lines: Weight = 3, Color = Gray (127,127,127)
- Cut Lines: Weight = 4, Color = Gray
- Pattern: None
- Halftone: CHECK (enable halftone)

Demolished:
- Projection Lines: Weight = 3, Color = Gray (127,127,127), Pattern = Dashed
- Cut Lines: Weight = 4, Color = Gray, Pattern = Dashed
- Pattern: None
- Halftone: No

New:
- All: By Category (no override — standard display)
- Halftone: No

Temporary:
- Projection Lines: Weight = 2, Color = Orange (245,158,11), Pattern = Dashed
- Halftone: No

Click OK.

**STEP 4 — Review Phase Filters:**
Manage tab → Phasing → Phase Filters

Rename the existing phase filters to DPC naming:
- Show All → DPC-ShowAll
- Show Complete → DPC-ShowExisting (shows existing retained elements only)
- Show Demo + New → DPC-ShowDemoAndNew (demolition plan filter)
- Show New Only → DPC-ShowNew (new works plan filter)
- Show Previous + New → DPC-ShowAllWorkPhases

**STEP 5 — Add Phase Settings to View Templates:**

Open View Templates (View → Manage View Templates).

Arch-Plan-GA-100: Phase = New Construction, Phase Filter = DPC-ShowNew

Create two new templates:

Arch-Plan-Existing-100:
Duplicate GA-100 → rename
Phase = Existing Site
Phase Filter = DPC-ShowExisting
Scale = 1:100

Arch-Plan-Demolition-100:
Duplicate GA-100 → rename
Phase = Demolition Works
Phase Filter = DPC-ShowDemoAndNew
Scale = 1:100

**STEP 6 — Save (Ctrl+S).**`,
      },
      {
        title: 'PRACTICE — Configure Phases for Dharren Park',
        content: `Set up the complete phase system in your DPC project file.

**PHASE SEQUENCE:**

| Phase | Description | Elements |
|---|---|---|
| Existing Site | Pre-demolition site condition | Any existing structures on site |
| Demolition Works | Clearance of existing building | Demolished existing elements |
| New Construction | New Dharren Park Tower | All new building elements |

**GRAPHIC OVERRIDES:**

| State | Projection Color | Pattern | Halftone |
|---|---|---|---|
| Existing | Gray (127,127,127) | Solid | YES |
| Demolished | Gray (127,127,127) | Dashed | No |
| New | By Category (black) | Solid | No |
| Temporary | Orange (245,158,11) | Dashed | No |

**PHASE FILTERS (rename existing):**

| New Name | Shows | Use for |
|---|---|---|
| DPC-ShowAll | Everything | Model review only |
| DPC-ShowExisting | Existing retained only | Existing condition plans |
| DPC-ShowDemoAndNew | Demolished + new works | Demolition plans |
| DPC-ShowNew | New works only | New construction plans |

**VIEW TEMPLATES — UPDATE/CREATE:**

Update Arch-Plan-GA-100:
Phase = New Construction, Phase Filter = DPC-ShowNew

Create Arch-Plan-Existing-100:
Duplicate from GA-100 → Phase = Existing Site, Filter = DPC-ShowExisting

Create Arch-Plan-Demolition-100:
Duplicate from GA-100 → Phase = Demolition Works, Filter = DPC-ShowDemoAndNew

**TEST THE PHASE SYSTEM:**

Step 1 — Create an "existing" wall:
In the L00 plan, draw a wall.
Select the wall → Properties → Phase Created = Existing Site

Step 2 — Create a demolition view:
Duplicate L00 GA plan → rename: "[W] L00 Demolition Test"
Apply View Template: Arch-Plan-Demolition-100

Step 3 — Demolish the existing wall:
Select the existing wall → Modify tab → Demolish tool
→ Click the wall → Phase Demolished = Demolition Works

Step 4 — Switch between views:
In the GA plan (DPC-ShowNew): the "existing" wall is not visible (it's not new construction)
In the Demolition plan (DPC-ShowDemoAndNew): the wall shows as dashed grey
In the Existing plan (DPC-ShowExisting): the wall shows in halftone (it's existing, not demolished yet)

Delete the test wall after verifying.

**Confirmation Checklist:**
- 3 phases created: Existing Site, Demolition Works, New Construction
- Graphic overrides configured (Existing=halftone grey, Demolished=dashed grey, New=by category)
- Phase filters renamed to DPC naming convention
- Arch-Plan-Existing-100 template created
- Arch-Plan-Demolition-100 template created
- Phase system tested and working (test wall shows correctly in each view)
- File saved

Move to Lesson 21 — COBie & IFC Readiness.`,
      },
    ],
    takeaways: [
      'Three phases for Dharren Park: Existing Site (pre-demo), Demolition Works (clearance), New Construction (new tower)',
      'Phase Graphic Overrides: Existing = halftone grey, Demolished = dashed grey, New = by category (normal), Temporary = amber dashed',
      'Phase + Phase Filter in view templates determines what each view shows — no manual changes per view needed',
      'Create three plan view templates: Arch-Plan-GA-100 (new only), Arch-Plan-Existing-100 (existing only), Arch-Plan-Demolition-100 (demo + new)',
      'The phase system test: place an existing wall, demolish it, check it appears correctly in all three view types — if all three work, phase setup is correct',
    ],
    resource: {
      title: 'Autodesk Revit — Phasing',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-phasing',
    },
    prev: 'ps-19',
    next: 'ps-21',
  },

  // ─────────────────────────────────────────────────────────
  // ps-21: COBie & IFC Readiness
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-21',
    num: 21,
    title: 'COBie & IFC Readiness',
    topic: 'Handover',
    cat: 'advanced',
    readTime: '15 min',
    free: false,
    desc: 'Configure the DPC project for IFC export and COBie data delivery — setting up the export presets, coordinate system, and property set mapping that make the model ISO 19650-compliant at handover.',
    intro: `ISO 19650 requires that information is delivered in open, interoperable formats. For BIM models, this means IFC (Industry Foundation Classes) — the open standard for 3D model exchange. For facility management data, it means COBie (Construction Operations Building Information Exchange) — the structured data schema for FM handover.

This lesson configures the DPC project for both. By the end, your model is ready to export a geo-referenced IFC4 file with correct property set mapping, and the COBie data structure is in place for the information that will be captured throughout the project.`,
    sections: [
      {
        title: 'EXPLAIN — IFC for ISO 19650',
        content: `IFC (Industry Foundation Classes) is an open file format (.ifc) that stores building model data in a way that any BIM software can read — regardless of whether the recipient uses Revit, ArchiCAD, Vectorworks, or any other tool. For ISO 19650 compliance, IFC is the delivery format that ensures information can flow between parties without software lock-in.

**IFC versions:**
- IFC 2x3: the older version, still widely supported by many tools and clients
- IFC4: the current standard, with better property set support and geometric accuracy. Use IFC4 for all new projects.

**What the IFC export contains:**
- All 3D geometry from the model
- Element classifications (IfcWall, IfcDoor, IfcSpace, etc.)
- Property sets (groups of data attached to each element)
- Geo-referenced position (using the Survey Point from Lesson 4)
- Project information (from Lesson 3)

**Property Set mapping:**
The IFC standard defines standard Property Sets (Psets) — groups of data that should be attached to specific element types. For example, every IfcWall should carry Pset_WallCommon with fields including FireRating, AcousticRating, IsExternal, and LoadBearing.

The shared parameters you created in Lesson 17 need to be mapped to these standard Psets. When exported, "Fire Rating" in Revit becomes "FireRating" in Pset_WallCommon in the IFC file — machine-readable, standard-compliant, and interoperable.

**The geo-referenced IFC:**
ISO 19650 requires models to be geo-referenced — positioned at their real-world coordinates. The Survey Point configured in Lesson 4 is what makes this possible. When you export using Shared Coordinates, the IFC file places the model at its correct location on Earth.`,
      },
      {
        title: 'EXPLAIN — COBie for FM Handover',
        content: `COBie (Construction Operations Building Information Exchange) is a data schema — a structured list of information — that a facilities manager needs to operate and maintain a building. It includes:

- Spaces: every room, its name, number, area, and function
- Systems: HVAC, electrical, fire protection, plumbing systems
- Components: individual pieces of equipment, their type, location, and specification
- Types: equipment types with manufacturer, model, warranty, and maintenance data
- Jobs: maintenance tasks with frequency and responsible party
- Resources: the tools and materials needed for each maintenance task

COBie is delivered as a spreadsheet (or as part of an IFC4 file using the COBie view definition). The data comes from the Revit model — from the parameters you have been setting up since Lesson 17.

**The COBie parameters from Lesson 17:**
The FM Asset Data group you created (Asset ID, Maintenance Frequency, Warranty Period, Installation Date, Responsible Party) are the core fields for COBie Component and Type sheets.

**When COBie data is populated:**
- Architect: provides Space data (rooms, areas, functions)
- MEP engineer: provides Component data (equipment types, system assignments)
- Contractor: provides installation date, actual model/serial numbers, warranty terms
- All parties contribute throughout the project — not just at handover

**The ISO 19650 requirement:**
ISO 19650 Part 3 covers information management during the operational phase. COBie is the implementation of this requirement — structured, machine-readable FM data delivered as part of the project handover package.`,
      },
      {
        title: 'GUIDE — Configuring IFC Export Settings',
        content: `**STEP 1 — Open IFC Export:**
File → Export → IFC

The IFC Export dialog opens.

**STEP 2 — Click "Modify Setup" to access settings:**
In the export dialog, click the "Modify Setup" button.
The "Modify IFC Export Setup" dialog opens.

**STEP 3 — Create a new export setup:**
Click the "+" button → name: DPC2025-IFC4-Standard

**STEP 4 — Configure the settings:**

General tab:
- IFC Version: IFC4 (not 2x3)
- Exchange Requirement: Coordination View 2.0 (or IFC4 Reference View for geometry)
- File Type: IFC (not ifcXML unless specifically required)

Additional Content tab:
- Export base quantities: CHECK (adds calculated areas, volumes, lengths)
- Export rooms in 3D views: CHECK
- Export only elements visible in view: CHECK (use the dedicated export view)
- Export linked files as separate IFCs: UNCHECK (for single-file delivery)

Property Sets tab:
- Export IFC Common Property Sets: CHECK
- Export user defined property sets: CHECK
- If you have a custom Psets file: Browse to it here

Levels and Grids:
- Export grids: CHECK
- Export levels: CHECK

**STEP 5 — Set the coordinate system:**
In the Additional Content or Coordinates section:
- Site Placement: Shared (uses the Survey Point from Lesson 4)
This makes the IFC geo-referenced.

**STEP 6 — Save the setup:**
Click "Save" → the DPC2025-IFC4-Standard setup is saved.

**STEP 7 — Create the IFC export view:**
Create a dedicated 3D view for IFC export:
View → 3D View → Default 3D View
Rename: "[W] IFC Export View — DO NOT MODIFY"
Apply View Template: Arch-3D-Coordination (which shows everything)
No Section Box, no crop.

This dedicated view ensures every IFC export captures the complete model.

**STEP 8 — Test export:**
File → Export → IFC → select DPC2025-IFC4-Standard setup
Select current view: [W] IFC Export View
Export to: C:\\DharrenPark\\Project\\BIM\\Shared\\ARCH\\
Filename: DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-001.ifc
Click Export.

Open the exported IFC in a free viewer (Solibri Anywhere or BIM Vision) to verify.

**STEP 9 — Save (Ctrl+S).**`,
      },
      {
        title: 'PRACTICE — IFC Export and COBie Readiness for DPC',
        content: `Complete the IFC and COBie configuration for your DPC project file.

**IFC EXPORT SETUP — DPC2025-IFC4-Standard:**

| Setting | Value |
|---|---|
| IFC Version | IFC4 |
| Coordinate System | Shared (geo-referenced) |
| Export Base Quantities | Yes |
| Export Rooms | Yes |
| Export Grids | Yes |
| Export Levels | Yes |
| Custom Psets | No (use standard Psets only for now) |

**IFC EXPORT VIEW:**
Name: [W] IFC Export View — DO NOT MODIFY
Style: Wireframe (fastest for export)
Section Box: Off
Phase: New Construction
Phase Filter: DPC-ShowNew

**IFC FILENAME:**
DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-001.ifc
Save to: C:\\DharrenPark\\Project\\BIM\\Shared\\ARCH\\

**ELEMENT CLASSIFICATION (verify these are correct):**
Open exported IFC in Solibri Anywhere or BIM Vision (free download) and check:
- Walls appear as IfcWall (not IfcBuildingElementProxy)
- Doors appear as IfcDoor
- Rooms appear as IfcSpace
- Columns appear as IfcColumn
- Floors appear as IfcSlab

If any element shows as IfcBuildingElementProxy, its category in Revit is not mapping to a standard IFC class. Check the element category in Revit and correct it.

**COBIB READINESS CHECKLIST:**

Spaces (Rooms):
- Room Number: filled for all rooms
- Room Name: filled for all rooms
- Room Function (shared parameter): filled where known
- Area: calculated automatically
- Level: assigned automatically

Components (Equipment — for later phases):
- Asset ID (shared parameter): ready to be filled when equipment is placed
- Manufacturer (shared parameter): ready
- Product Model (shared parameter): ready

**COBie Note:**
For the Schematic Design stage, COBie Space data is the minimum requirement. Equipment component data is populated at Construction Documents and Construction phases. The infrastructure (parameters, schedules) is now in place for this data to be captured as the project progresses.

**ISO 19650 IFC Delivery Note:**
The IFC file DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-001.ifc is an information container under ISO 19650. When published to the CDE Shared area, it carries the suitability code from the revision system. Your first IFC issue would be labelled S2 (suitable for information) at the Schematic Design stage.

**Confirmation Checklist:**
- DPC2025-IFC4-Standard export setup created and saved
- [W] IFC Export View created with correct settings
- IFC export completed successfully
- IFC file opened in viewer — elements classified correctly (IfcWall, IfcDoor, IfcSpace)
- COBie readiness verified — all room parameters in place
- File saved

Move to Lesson 22 — Model Health Baseline.`,
      },
    ],
    takeaways: [
      'IFC4 is the current standard — always use IFC4 not IFC 2x3 for new projects. Set coordinate system to Shared for geo-referenced export',
      'Export base quantities (area, volume, length) are added automatically when the setting is checked — no manual input needed',
      'Create a dedicated [W] IFC Export View with no Section Box, correct phase, and all elements visible — use this view for every IFC export',
      'IFC filename follows ISO 19650 naming: DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-001.ifc — same convention as the Revit model file',
      'COBie Space data (rooms, areas, functions) is the Schematic Design minimum — equipment component data follows at later stages',
    ],
    resource: {
      title: 'Autodesk Revit — IFC Export',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-ifc-export',
    },
    prev: 'ps-20',
    next: 'ps-22',
  },

  // ─────────────────────────────────────────────────────────
  // ps-22: Model Health Baseline
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-22',
    num: 22,
    title: 'Model Health Baseline',
    topic: 'Model Quality',
    cat: 'advanced',
    readTime: '12 min',
    free: false,
    desc: 'Establish the zero-warning, clean health baseline for the DPC template before handing to the team — running Purge, Audit, and Compact, and recording the baseline metrics.',
    intro: `Before the DPC project file is handed to the modeling team, it must be in perfect health. Every warning is a data integrity problem. Every unused family is unnecessary file weight. Every imported CAD file that crept in during setup is a ticking performance bomb.

This lesson runs the complete pre-handoff health check, records the baseline metrics, and establishes the monthly health check protocol that keeps the model clean throughout the project.`,
    sections: [
      {
        title: 'EXPLAIN — Why Model Health is a Data Issue',
        content: `Model health is commonly thought of as a performance issue — a slow model, a large file. It is actually a data integrity issue. Consider what warnings represent:

"Elements have duplicate Mark values" — two doors have the same Mark number. Your door schedule has a data error. A contractor ordering doors based on the schedule gets the wrong quantity or wrong specification.

"Highlighted walls overlap" — two walls occupy the same space. Your area calculations are wrong. The room that looks like 30 m² is actually 28 m² because the overlapping wall eats into the room boundary.

"Room is not in a properly enclosed region" — a room has no boundary. It does not appear in the room schedule. The FM handover package has a missing room.

Every warning in the model is a drawing error or a data error waiting to surface at the worst possible time — during a client review, at drawing issue, or at FM handover.

**The ISO 19650 quality assurance requirement:**
ISO 19650 Part 2 Section 5.6 requires quality assurance of information before it is shared or published. A model with active warnings fails this requirement. The pre-handoff health check is your quality assurance step.

**The target: zero warnings.**
Not "under 20 warnings." Not "only minor ones." Zero. The model you hand to the team starts with zero warnings. They are responsible for maintaining it.`,
      },
      {
        title: 'EXPLAIN — Purge, Audit, Compact',
        content: `Three operations constitute the model health cleanup, always run in this sequence:

**1. Purge Unused:**
Removes families, types, materials, fill patterns, line styles, and views that are loaded or created but not placed or used in the project. Every unused item consumes file size and memory without contributing anything.

Run it twice — the first purge sometimes exposes additional purgeable items that were held by the content just removed.

Command: Manage tab → Purge Unused

**2. Audit:**
Scans the Revit database for internal corruption — broken references, corrupt geometry, inconsistent data. Revit repairs what it can automatically. Serious corruption that cannot be repaired is reported.

Audit is run by opening the file with the Audit checkbox checked:
File → Open → navigate to file → check "Audit" → Open

**3. Compact:**
Rebuilds the file's internal database storage — removes fragmentation from deleted elements, freed space from purging. A compacted file opens faster and is physically smaller.

Run via: File → Save As → Options → check "Compact File" → Save

**The sequence matters:**
Purge first — removes content that Audit then does not have to process.
Audit second — fixes database issues that Compact then rebuilds cleanly.
Compact last — rebuilds the clean, audited, purged database into an optimised file.`,
      },
      {
        title: 'GUIDE — Running the Health Check',
        content: `**STEP 1 — Check Warnings (before anything else):**
Manage tab → Inquiry panel → Review Warnings

Read every warning. For each one:
- Click "Show" to jump to the offending element
- Diagnose the cause
- Fix it (delete the duplicate, remodel the overlap, enclose the room)
- Return to Review Warnings and repeat

Do not click Ignore. Ignored warnings disappear from the list but the problem remains. Fix every warning before proceeding.

Target: the dialog shows "No warnings." Only then continue.

**STEP 2 — Purge Unused (Run 1):**
Manage tab → Purge Unused
Check All → OK
Revit lists and removes all unused content.
Note: if you have placeholder families that you want to keep for the template (even if not placed), uncheck them before running Purge.

Record the file size before purge (check in Windows Explorer → right-click file → Properties → Size).

**STEP 3 — Purge Unused (Run 2):**
Run Purge Unused again immediately.
A second run often removes additional items exposed by the first run.
When the second run removes zero items, the purge is complete.

Record file size after second purge.

**STEP 4 — Audit:**
Save the file first (Ctrl+S).
File → Open → navigate to your DPC file
Check the "Audit" checkbox in the Open dialog
Click Open.

Revit opens the file with the audit process running. It may take longer than a normal open. Read the audit report in the warning dialog that appears.

If the audit reports repaired errors: note what was repaired. Investigate whether the cause indicates a deeper problem.

**STEP 5 — Compact:**
File → Save As → Project
In the Save dialog → click Options → check "Compact File"
Save to the same location, overwriting the current file.

Record file size after compact.

**STEP 6 — Final Warning Check:**
Manage tab → Review Warnings
Confirm: zero warnings.

If new warnings appeared (sometimes Purge or Audit triggers minor warnings): fix them now. Repeat the check until zero warnings.

**STEP 7 — Record baseline metrics:**
Note these numbers in your BEP document:
- Date: [today]
- File size: [X] MB
- Warning count: 0
- Number of families loaded: [N]
- Number of views: [N]
- Number of sheets: [N]`,
      },
      {
        title: 'PRACTICE — Run the DPC Health Check',
        content: `Run the complete health check on your DPC project file and record the baseline metrics.

**PRE-CHECK — Fix all warnings first:**

Common warnings you may have at this stage:
- "Room is not in a properly enclosed region" → delete test rooms, or enclose the area
- "Highlighted elements are joined but do not intersect" → unjoin the elements
- "Multiple elements are joined but do not intersect" → same fix

Fix every warning before proceeding to Purge.

**RUN THE HEALTH CHECK SEQUENCE:**

Step 1: Review Warnings → Fix all → confirm zero warnings
Step 2: Purge Unused (run 1) → note file size
Step 3: Purge Unused (run 2) → confirm 0 items removed
Step 4: Save → Audit (reopen with Audit checked) → read report
Step 5: Compact (Save As → Options → Compact File → Save)
Step 6: Final warning check → confirm zero warnings

**RECORD YOUR BASELINE METRICS:**

Create a text file:
C:\\DharrenPark\\Project\\Documents\\BEP\\DPC2025-ModelHealthLog.txt

Enter these values (replace [...] with your actual measurements):

DPC2025 MODEL HEALTH LOG
=========================
BASELINE — [Today's Date]
File: DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-001.rvt
Revit Version: [Your Version]

Pre-Purge File Size: [X] MB
Post-Purge File Size: [X] MB
Post-Compact File Size: [X] MB
Warning Count: 0
Families Loaded: [N]
Views Created: [N]
Sheets Created: [N]

Content in this file:
- Units: Millimeters
- Levels: LB1, L00, L01, L02, L03, L04, L05, LRF (8 levels)
- Grids: 1-5 (vertical), A-E (horizontal) — 5x5 at 8000mm
- Worksets: 7 worksets enabled
- View Templates: 13 templates
- Materials: 15 core materials
- Text Types: 6 types
- Dimension Styles: 3 types
- Sheets: 14 sheets
- Shared Parameters: 20 parameters, 5 groups
- Filters: 7 filters
- Phases: 3 phases

MONTHLY HEALTH CHECK TARGETS:
- Warnings: under 30 active warnings at any time
- File size growth: under 50 MB per month
- Families: no new families without BIM Manager approval

**Confirmation Checklist:**
- Zero warnings confirmed (Review Warnings shows no warnings)
- Purge run twice
- Audit completed
- File compacted
- Baseline metrics recorded in health log
- File saved

Move to Lesson 23 — Saving as Office Template.`,
      },
    ],
    takeaways: [
      'Every Revit warning is a data integrity problem — duplicate Marks corrupt schedules, overlapping walls corrupt area calculations, missing room boundaries corrupt FM handover data',
      'The sequence is always: Fix Warnings → Purge (x2) → Audit → Compact — never skip steps, never change the order',
      'Run Purge twice — the second run often removes additional items exposed by the first. Stop when the second run removes zero items',
      'Record baseline metrics in the health log: file size, warning count, families loaded, views, sheets — this is the benchmark for all future monthly checks',
      'Monthly health target: under 30 warnings, under 50MB growth per month, no families added without BIM Manager approval',
    ],
    resource: {
      title: 'Autodesk Revit — Model Performance',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-model-performance',
    },
    prev: 'ps-21',
    next: 'ps-23',
  },

  // ─────────────────────────────────────────────────────────
  // ps-23: Saving as Office Template
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-23',
    num: 23,
    title: 'Saving as Office Template',
    topic: 'Template Management',
    cat: 'advanced',
    readTime: '12 min',
    free: false,
    desc: 'Strip the project-specific content from the DPC file, save it as a versioned office template, set up version control, and configure Revit to offer the new template for all future projects.',
    intro: `Everything you have built over 22 lessons — the line weights, materials, view templates, shared parameters, sheet setup, filter set, phase configuration — is now ready to become an office template. A single investment of 22 lessons pays off on every future project. The next project setup takes 1-2 hours instead of the 20+ hours this one took.

This lesson strips the Dharren Park project-specific content from the file and saves it as a professional, versioned Revit template (.rte). From this point, every new project starts from your template — not from Autodesk's defaults.`,
    sections: [
      {
        title: 'EXPLAIN — Project File vs. Template File',
        content: `A Revit Project file (.rvt) contains everything — the configuration AND the project-specific content (walls, rooms, doors, sheets with actual drawing numbers, project information values).

A Revit Template file (.rte) contains ONLY the configuration — the standards and structure, with no project-specific content. It is the blank canvas that every new project starts from.

**What to KEEP in the template:**
- All line weights, line styles, fill patterns (Lesson 9)
- All object styles (Lesson 10)
- All materials (Lesson 11)
- All text types and dimension styles (Lesson 12)
- All view templates (Lesson 13)
- Browser organization scheme (Lesson 14)
- All loaded annotation families and tags (Lesson 15)
- The titleblock family (Lesson 16)
- The shared parameter file link (Lesson 17) — but NOT the parameters added to the project yet (these are added fresh per project from the shared parameter file)
- Phase definitions and graphic overrides (Lesson 20)
- IFC export setup (Lesson 21)

**What to REMOVE before saving as template:**
- Project Information values (project name, number, client — leave fields blank)
- Specific level names and elevations (replace with generic placeholders)
- Specific grid positions (remove — each project has its own grid)
- Sheets with project-specific numbers (delete all sheets)
- Test elements (the test wall, test door, test room from Lessons 9-22)
- Project-specific views (keep template views only)
- Workset names (worksets are project-specific — reset to default)
- Health log entries (project-specific)

The template should contain: "everything we always need, with no project-specific values."`,
      },
      {
        title: 'GUIDE — Preparing and Saving the Template',
        content: `**STEP 1 — Save a clean copy for the template:**
Before stripping anything, save the DPC project file as a copy:
File → Save As → Project
Filename: DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-001.rvt (the working project — keep this)

Now save another copy as the template source:
File → Save As → Project
Filename: DPC-Template-WorkingCopy.rvt
Save to: C:\\DharrenPark\\Project\\BIM\\WIP\\DPA\\

Work on DPC-Template-WorkingCopy.rvt for the stripping process.

**STEP 2 — Clear Project Information:**
Manage → Project Information
Clear: Project Name, Project Number, Client Name, Project Address, Issue Date
Leave: Organization Name (keep your firm name — this IS part of the template)

**STEP 3 — Reset levels to generic names:**
In an elevation view, rename levels:
LB1 → Level B1 (or delete and leave only 2-3 generic placeholder levels)
L00 → Level 1
L01 → Level 2
Delete all levels above Level 2 — each project creates its own level stack

**STEP 4 — Remove grids:**
Select all grids → Delete
Each project creates its own grid from scratch

**STEP 5 — Delete all sheets:**
In the Project Browser: select all sheets → Delete
(The titleblock family remains loaded — just the sheet instances are deleted)

**STEP 6 — Delete test elements:**
Any walls, doors, rooms, or other model elements placed during testing → Delete

**STEP 7 — Clean up views:**
Delete project-specific views (the level-specific GA plans).
Keep ONLY:
- The default floor plan views for Level 1 and Level 2
- The default 3D view
- The 4 elevation views

**STEP 8 — Disable Worksharing (for template):**
Note: Worksharing setup is project-specific. The template should NOT have worksharing enabled.
If worksharing is enabled: the template will not have the "Detach from Central" workflow — which is confusing.
For a template, worksharing is left disabled. The project BIM Manager enables it per project.
(If your version allows: Collaborate → Manage Collaboration → Relinquish All → then save as a local non-central file)

**STEP 9 — Run health check one more time:**
Purge Unused (x2) → Audit → Compact → confirm zero warnings

**STEP 10 — Save as Template:**
File → Save As → Template
Navigate to: C:\\DharrenPark\\Project\\BIM\\WIP\\ (or your office template library location)
Filename: DPC-OfficeTemplate-v1.0.rte
File type: Template Files (*.rte)
Click Save.

**STEP 11 — Set as Revit default template path:**
File → Options → File Locations → Default template file location
Browse to the folder containing DPC-OfficeTemplate-v1.0.rte → Select Folder
Click OK.

Now when any team member creates a new project (File → New → Project), the dialog defaults to your template.`,
      },
      {
        title: 'PRACTICE — Save the DPC Office Template',
        content: `Strip and save the DPC template following these steps.

**CONTENT TO STRIP (remove from template copy):**

| Content | Action |
|---|---|
| Project Name, Number, Client | Clear in Project Information |
| Project Address, Issue Date | Clear |
| Level names LB1-LRF | Rename to Level 1, Level 2 |
| Levels L02-LRF | Delete |
| All grids (1-5, A-E) | Delete all |
| All 14 project sheets | Delete all |
| Test wall, test door, test room | Delete all |
| Level-specific GA plan views | Delete (keep only Level 1, Level 2, {3D}, elevations) |

**CONTENT TO KEEP (stays in the template):**

| Content | Reason |
|---|---|
| All line weights | Office drawing standard |
| All object styles | Category defaults |
| 15 materials | Office material library |
| 6 text types + 3 dimension styles | Typography standard |
| 11+ view templates | View standards |
| Browser organization scheme | Navigation standard |
| All annotation families | Required for any project |
| Titleblock family | Required for sheets |
| Phase definitions + graphic overrides | Standard phase setup |
| IFC export setup (DPC2025-IFC4-Standard) | Export standard |
| Shared parameter file LINK | The .txt file path (not the parameters themselves) |
| Filters | Project-standard filters |

**TEMPLATE FILENAME AND STORAGE:**
DPC-OfficeTemplate-v1.0.rte
Storage: C:\\DharrenPark\\BIM\\Templates\\Current\\

**Version control folder structure:**
C:\\DharrenPark\\BIM\\Templates\\
  Current\\
    DPC-OfficeTemplate-v1.0.rte    (latest version)
  Archive\\
    DPC-OfficeTemplate-v1.0.rte    (copy archived when v2.0 is released)

**Update the template description:**
When the template file is open, before saving as .rte:
Manage → Project Information → Description field:
"DPC Office Template v1.0 — Created [Date]. Built from Dharren Park Commercial Centre project setup, Lessons 1-23. ISO 19650 aligned. Metric (mm). Contains: line weights, object styles, 15 materials, 6 text types, 13 view templates, 7 filters, 3 phases, IFC4 export setup."

**Confirmation Checklist:**
- Project Information cleared (name, number, client blank)
- Levels simplified to generic Level 1 and Level 2
- All grids deleted
- All sheets deleted
- All test elements deleted
- Health check run (Purge x2, Audit, Compact)
- Zero warnings
- Saved as DPC-OfficeTemplate-v1.0.rte
- Set as Revit default template path
- File saved

Move to Lesson 24 — Project Setup Checklist & Handoff.`,
      },
    ],
    takeaways: [
      'Strip project-specific content (project info, specific levels, grids, sheets, test elements) before saving as template — keep only the standards',
      'Template filename: DPC-OfficeTemplate-v1.0.rte — version number in filename allows tracking. Store with archive copies of previous versions',
      'Set the template as Revit\'s default path (File → Options → File Locations) — every team member creating a new project automatically gets the correct starting point',
      'Worksharing is NOT enabled in the template — it is enabled per project by the BIM Manager at project kickoff',
      'Template description field: document what version it is, when it was created, and what standards it contains — future users know what they are inheriting',
    ],
    resource: {
      title: 'Autodesk Revit — Creating Templates',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-creating-templates',
    },
    prev: 'ps-22',
    next: 'ps-24',
  },

  // ─────────────────────────────────────────────────────────
  // ps-24: Project Setup Checklist & Handoff
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-24',
    num: 24,
    title: 'Project Setup Checklist & Handoff',
    topic: 'Capstone',
    cat: 'advanced',
    readTime: '14 min',
    free: false,
    desc: 'Complete the full project setup checklist for the Dharren Park project, run the team handoff process, and reflect on the end-to-end methodology you can now apply to any future project.',
    intro: `You have spent 23 lessons building one of the most professionally configured Revit project templates available anywhere. Every setting has a reason. Every decision is ISO 19650-aligned. Every convention is documented.

This final lesson completes the handoff — the moment the project file goes from BIM Manager to modeling team. It also steps back to reflect on what you have built and how to apply this methodology to any future project, large or small.`,
    sections: [
      {
        title: 'EXPLAIN — The Handoff Moment',
        content: `The handoff is when the BIM Manager transfers primary model access to the modeling team. It is a defined transition, not a gradual drift. Done correctly:

- Every team member knows what is in the file and why
- Every team member understands the naming conventions
- Every team member knows which workset to use for which elements
- Nobody changes settings they do not understand

Done poorly:
- Team members discover the view templates and remove them "because the view looks wrong"
- Worksets are ignored, everything goes onto WS-SHARED
- Someone renames levels because "LB1 looks weird"
- Within two weeks, the carefully configured project is a mess

**The handoff briefing (30-60 minutes, all team members present):**

Part 1 — The file: where it is, what it contains, how to create a local copy
Part 2 — Naming: level codes, view naming, workset assignments
Part 3 — Working conventions: which workset for what, active workset check, sync protocol
Part 4 — What NOT to touch: view templates, object styles, shared parameters, level and grid positions
Part 5 — Where to ask: BIM Manager contact for any configuration questions

This briefing is not optional. One team member who skips it and then changes object styles globally — "to fix their view" — undoes hours of setup work in minutes.`,
      },
      {
        title: 'EXPLAIN — Applying This Methodology to Any Project',
        content: `The Dharren Park methodology is not specific to one project type. It scales to any project:

**Small project (1-2 people, simple building):**
Use the DPC-OfficeTemplate-v1.0.rte as your starting point.
Setup time: 1-2 hours.
Add: project information, levels, grids for the specific project.
Skip: worksharing (single user), some filters, phase setup (new build only).

**Medium project (3-8 people, standard commercial):**
Use DPC-OfficeTemplate-v1.0.rte → full setup as per this course.
Setup time: 4-6 hours.
Add: project-specific shared parameters, phased delivery schedule, COBie implementation.

**Large project (10+ people, complex building):**
Use DPC-OfficeTemplate-v1.0.rte → extended setup.
Setup time: 2-3 days.
Add: multi-zone scope boxes, 10-12 worksets, federated model strategy, multiple IFC export presets.

**Renovation project:**
Phase setup becomes more complex (multiple demolition and construction stages).
Add: Existing phase with survey data, Demolition phase per stage, Construction phases per stage.
The phase filter and view template setup from Lesson 20 is critical for renovation.

**The consistent principle:**
Every project, every size, follows the same sequence:
1. Start from the template (Lesson 2)
2. Project information and units (Lesson 3)
3. Coordinates (Lesson 4)
4. Levels and grids (Lesson 5)
5. Worksharing (Lesson 6)
6. File naming and CDE (Lesson 7)
7. Everything else from the template is already configured

New projects take 2-4 hours instead of 20+ hours. That time saving compounds across every project the office runs.`,
      },
      {
        title: 'GUIDE — Running the Team Handoff',
        content: `**THE DAY BEFORE HANDOFF:**

Step 1 — Final health check:
Purge → Audit → Compact → confirm zero warnings
Record metrics in the health log.

Step 2 — Save the Central Model:
(If worksharing is enabled for the project)
Collaborate → Manage Collaboration → Save to Cloud (or save to network server)
The Central Model is now live at the project location.

Step 3 — Send the handoff brief:
Email the team with:
- Central Model location (server path or ACC link)
- Instructions for creating a local copy
- Link to the BEP document (C:\\DharrenPark\\Project\\Documents\\BEP\\)
- Time and location of the handoff briefing

**THE HANDOFF DAY:**

Step 4 — Run the briefing (30-60 minutes, all team members present):

Cover these topics in order:
1. Project overview: Dharren Park Commercial Centre, 6 storeys, client, key milestones
2. File location and local copy creation: show on screen
3. Level naming: LB1-LRF, what each means
4. Workset assignments: who owns which workset, how to check the active workset
5. View naming: [Level] [Type] - [Description] for sheet views, [W] prefix for working views
6. What NOT to touch: object styles, view templates, shared parameters, level/grid positions
7. Sync protocol: sync every 2 hours minimum, always relinquish before leaving for the day
8. QA process: [W] QA Review views used weekly to check data completeness

Step 5 — Guide each team member through creating their local copy:
Everyone does this together. Fix any access issues on the spot.

Step 6 — First sync:
Everyone syncs their new local copy to Central. Confirm zero conflicts.

**THE WEEK AFTER HANDOFF:**

Step 7 — 48-hour check:
BIM Manager opens their own local copy, syncs, and reviews:
- Are views being named correctly?
- Are elements on the correct worksets?
- Are any warnings accumulating?
- Is the active workset correct in everyone's local copies?

Correct any early errors before they become team habits.`,
      },
      {
        title: 'PRACTICE — Complete the Final Checklist',
        content: `Run through the complete DPC project setup checklist. Every item must be ticked before handoff.

**FOUNDATION (Lessons 1-8):**
- [ ] Project file created from blank template: DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-001.rvt
- [ ] Units: Millimeters, 0 dp, no suffix | Area: m², 2 dp | Angle: degrees
- [ ] Project Information: all fields populated (name, number, client, address, author, org)
- [ ] Shared coordinates: Survey Point at E:30000, N:14000, Elev:15500, True North: 15°
- [ ] Levels: LB1(-3500), L00(0), L01(4500), L02(8500), L03(12500), L04(16500), L05(20500), LRF(24000)
- [ ] Grids: 1-5 (vertical, 8000mm), A-E (horizontal, 8000mm) — all pinned
- [ ] Worksharing: enabled, 7 worksets created, WS-FITOUT active
- [ ] CDE folder structure: C:\\DharrenPark\\ with WIP, Shared, Published, Archive
- [ ] Link strategy document created
- [ ] ISO 19650 file naming applied

**VISUAL STANDARDS (Lessons 9-16):**
- [ ] Line weights table entered (weights 1-8, model and annotation)
- [ ] Object Styles configured for all key categories
- [ ] 15 core materials created with names, cut patterns, identity data
- [ ] 6 text types: Large(5mm), Title(3.5mm), Heading(2.5mm), Body(2mm), Small(1.5mm), Fine(1mm)
- [ ] 3 dimension styles: DPC-Dim-Standard, DPC-Dim-Fine, DPC-Dim-Angular
- [ ] 11+ view templates created and applied to all views
- [ ] Browser organization scheme: DPC-Standard applied
- [ ] All views named per convention: [Level] [Type] - [Description]
- [ ] Annotation families loaded: section mark, elevation mark, callout, north arrow
- [ ] Tag families loaded: door tag, window tag, room tag
- [ ] Titleblock loaded: A1 Metric
- [ ] 14 sheets created with correct numbers and names
- [ ] Revision P01 created: S2 — Preliminary Issue

**DATA AND PARAMETERS (Lessons 17-21):**
- [ ] Shared parameter file: DPC2025-SharedParameters-v1.0.txt — 5 groups, 20 parameters
- [ ] Fire Rating added to: Walls, Doors, Floors, Ceilings, Windows
- [ ] Room Function and Required Area added to: Rooms
- [ ] Asset ID added to: MEP equipment categories
- [ ] 4 schedules: Door Schedule (A-500), Room Data (A-501), Sheet List (A-000), Material Takeoff
- [ ] Programme compliance schedule: Required Area vs Area, Compliance column working
- [ ] 7 filters created and added to correct view templates
- [ ] Fire Compartmentation view: L00 Fire Compartmentation showing filters
- [ ] QA Review view: [W] L00 QA Review showing missing-data filters
- [ ] 3 phases: Existing Site, Demolition Works, New Construction
- [ ] Phase graphic overrides: Existing=halftone, Demolished=dashed, New=by category
- [ ] 3 phase-specific view templates: GA, Existing, Demolition
- [ ] IFC export setup: DPC2025-IFC4-Standard (IFC4, shared coordinates, base quantities)
- [ ] IFC export view: [W] IFC Export View — DO NOT MODIFY
- [ ] IFC export tested: model exports and opens correctly in IFC viewer

**MODEL HEALTH (Lessons 22-23):**
- [ ] Zero warnings (Review Warnings confirmed)
- [ ] Purge Unused run twice
- [ ] Audit completed
- [ ] File compacted
- [ ] Health log created with baseline metrics
- [ ] Template stripped and saved: DPC-OfficeTemplate-v1.0.rte
- [ ] Template set as Revit default path

**HANDOFF:**
- [ ] Handoff brief sent to team
- [ ] Handoff briefing conducted (all team members)
- [ ] All team members created local copies successfully
- [ ] First sync completed with zero conflicts
- [ ] 48-hour post-handoff check scheduled

**WHAT YOU HAVE BUILT:**
Over 24 lessons, you built:
- A complete ISO 19650-aligned Revit project file for a 6-storey commercial building
- A professional office template that any future project can start from
- The knowledge to set up any Revit project correctly and efficiently

The Dharren Park Commercial Centre project file is now:
- Correctly geo-referenced (Survey Point, True North, Shared Coordinates)
- Completely structured (8 levels, 25 grids, 7 worksets)
- Professionally presented (line weights, materials, view templates, text types)
- Data-ready (20 shared parameters, 4 schedules, programme compliance)
- IFC4 compliant (export preset, geo-referenced, base quantities)
- COBie-ready (Space data, Asset parameters in place)
- Quality-assured (zero warnings, purged, audited, compacted)
- Handed off (team briefed, Central Model live, local copies created)

This is what professional BIM project setup looks like.`,
      },
    ],
    takeaways: [
      'The handoff briefing is not optional — one uninformed team member changing object styles globally can undo hours of setup work in minutes',
      'The 48-hour post-handoff check catches early bad habits before they become project-wide conventions — check workset assignments, view naming, and warning count',
      'Scale the methodology: small projects take 1-2 hours from the template; large projects take 2-3 days. The sequence is always the same',
      'The DPC-OfficeTemplate-v1.0.rte is your most valuable professional asset — it compounds in value across every project your office runs',
      'You have built a complete ISO 19650-aligned Revit project: geo-referenced, structured, data-ready, IFC4-compliant, COBie-ready, quality-assured, and handed off',
    ],
    resource: {
      title: 'ISO 19650-2 — Collaborative Production of Information',
      url: 'https://www.bsigroup.com/en-GB/standards/iso-19650/',
    },
    prev: 'ps-23',
    next: null,
  },
];
