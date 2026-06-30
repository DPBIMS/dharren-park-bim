// ============================================================
// REVIT PROJECT SETUP — LESSONS ps-1 through ps-8 (BEGINNER)
// File: lib/revitSetupLessonsContent/lessons-1-8.js
// FORMAT: 3-Layer — Explain → Guide → Practice (ISO 19650 aligned)
// END GOAL: Student builds a production-ready Revit Project Template
// ============================================================

export const lessons_1_8 = [

  // ─────────────────────────────────────────────────────────
  // ps-1: Why Project Setup Matters
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-1',
    num: 1,
    title: 'Why Project Setup Matters',
    topic: 'Introduction',
    cat: 'beginner',
    readTime: '10 min',
    free: true,
    desc: 'Understand why a correctly configured Revit project is the foundation of every successful BIM delivery — and what goes wrong when setup is skipped.',
    intro: `Every Revit project starts with a decision — start quickly with no setup, or invest 2-4 hours configuring the project correctly before a single wall is drawn. Most beginners choose speed. Most experienced BIM practitioners choose setup.

This course gives you the setup. By the time you finish all 24 lessons, you will have built a complete, ISO 19650-aligned Revit Project Template from absolute zero — ready to use on any real project. This first lesson explains why that investment is worth every minute.`,
    sections: [
      {
        title: 'EXPLAIN — What is Project Setup?',
        content: `Project setup is the process of configuring a Revit file before any modeling begins. It covers everything the model needs to work correctly: units, coordinates, levels, grids, line weights, materials, view templates, parameters, sheets, and data standards.

A correctly set up project gives the entire team:
- A consistent visual standard across every drawing
- A reliable data structure that feeds schedules, tags, and exports
- A coordinate system that links correctly to structural and MEP models
- A file that performs well and stays healthy throughout the project

An incorrectly set up project — or one with no setup at all — produces inconsistent drawings, broken links, incorrect schedules, and a model that grows slower and more chaotic with every week of work.

**The Cost of Skipping Setup:**

Week 1 — No setup. The team starts modeling immediately. Everyone uses different text sizes, line weights, and level names. The drawings look different from person to person.

Week 3 — The structural engineer sends a linked model. It does not align because the coordinates were never configured. Someone spends two days fixing it.

Week 6 — The client asks for a door schedule. The doors have no consistent Mark values. Someone spends three days manually tagging and checking.

Week 10 — The model is 800MB and takes 4 minutes to open. Nobody knows why.

Week 14 — The project issues drawings. Every view needs manual overrides because there are no view templates.

All of these problems have one root cause: no project setup.`,
      },
      {
        title: 'EXPLAIN — Why ISO 19650?',
        content: `ISO 19650 is the international standard for managing information over the whole life cycle of a built asset using Building Information Modelling. It is used in the UK, Europe, Australia, the Middle East, Southeast Asia, and increasingly everywhere BIM is practiced professionally.

When your Revit project is aligned to ISO 19650, it means:
- Your file naming follows a recognised international convention
- Your data is structured consistently with what clients and consultants expect
- Your model can be exchanged between teams and tools without confusion
- Your handover package at the end of the project is organised and complete

This course does not require you to know ISO 19650 in depth before you start — we will reference the relevant parts of the standard as we build each section of the template. By the end, you will understand not just how to set up a Revit project, but why each decision aligns to an international standard that the professional world expects.`,
      },
      {
        title: 'EXPLAIN — What You Will Build in This Course',
        content: `This is not a passive reading course. Every lesson gives you something to do in Revit. By the end of Lesson 24, you will have built:

**The Dharren Park Commercial Centre Project Template**
A fictional 6-storey mixed-use commercial building used as the consistent example throughout the course. Every decision — from unit settings to sheet numbering — is made in the context of this project.

**What the completed template contains:**
- ISO 19650-aligned project information and file naming
- Correctly configured shared coordinates and true north
- A complete level and grid structure for a commercial building
- A professional line weight and object style standard
- A full materials library
- View templates for every drawing type
- A complete sheet set with titleblock
- Shared parameters for scheduling and tagging
- COBie and IFC-ready data structure
- Zero warnings, purged, audited, and compact

When you save the final file as a .rte template, you have a professional-grade Revit Project Template that you can use on real projects immediately.

**The Three Layers in Every Lesson:**
Every lesson from here on follows the same structure:
- EXPLAIN — the concept and why it matters
- GUIDE — the exact steps to do it in Revit
- PRACTICE — the specific values to enter, aligned to ISO 19650 and the Dharren Park project

Open Revit alongside this course. Read the EXPLAIN. Follow the GUIDE. Enter the PRACTICE values. By the end of each lesson, your Revit file has that section correctly configured.`,
      },
      {
        title: 'PRACTICE — Set Up Your Working Environment',
        content: `Before Lesson 2, do these three things to prepare your working environment.

**Step 1 — Create your project folder:**
On your computer, create the following folder structure:

C:\\DharrenPark\\
  Project\\
    BIM\\
      WIP\\          (your working files go here)
      Shared\\       (files shared with the team)
      Published\\    (issued drawings and models)
    Drawings\\
    Documents\\

This folder structure follows the ISO 19650 CDE (Common Data Environment) zone concept — WIP (Work in Progress), Shared, and Published. You will learn more about CDE zones in Lesson 7.

**Step 2 — Note your Revit version:**
Open Revit. Help menu → About Autodesk Revit. Note the version year (e.g., Revit 2025). All lessons in this course are written for Revit 2024/2025. Earlier versions may have slightly different menu locations.

**Step 3 — Do NOT start a new project yet:**
Lesson 2 covers choosing the correct starting template. Wait until that lesson before creating your project file. Starting from the wrong template is the first and most common setup mistake.

You are ready for Lesson 2.`,
      },
    ],
    takeaways: [
      'Project setup is a 2-4 hour investment that prevents weeks of rework — skip it and the project pays for it throughout its entire life',
      'ISO 19650 is the international BIM information management standard — aligning your project to it makes your work compatible with professional expectations worldwide',
      'This course builds one complete project template from scratch — the Dharren Park Commercial Centre — using every lesson as a build step',
      'Every lesson has three layers: EXPLAIN (what and why), GUIDE (exact Revit steps), PRACTICE (ISO 19650-aligned values to enter)',
      'Do not start a new Revit project yet — wait for Lesson 2 which covers the correct starting template decision',
    ],
    resource: {
      title: 'ISO 19650 Overview — UK BIM Framework',
      url: 'https://www.ukbimframework.org/guidance/',
    },
    prev: null,
    next: 'ps-2',
  },

  // ─────────────────────────────────────────────────────────
  // ps-2: Choosing the Right Template
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-2',
    num: 2,
    title: 'Choosing the Right Template',
    topic: 'Foundation',
    cat: 'beginner',
    readTime: '12 min',
    free: true,
    desc: 'Understand what Revit templates are, why starting from none (blank) is the professional choice for building your own standard, and create your project file from scratch.',
    intro: `When you create a new Revit project, the first dialog asks you to choose a template. Most beginners pick one of the default Autodesk templates — Architectural Template, Construction Template, or the regional default. This seems logical. It is not.

Default templates are built around Autodesk's own drawing conventions and unit settings, which may not match your office standard, your country's conventions, or ISO 19650 requirements. They contain pre-built families, materials, line styles, and view templates that you did not choose and may not want.

This lesson explains when to use a template, when to start from none, and guides you through creating the Dharren Park project file the right way — from an empty starting point that you control completely.`,
    sections: [
      {
        title: 'EXPLAIN — What is a Revit Template?',
        content: `A Revit template (.rte file) is a pre-configured starting point for a new project. It contains everything that is set up before you place the first element: units, line weights, object styles, view templates, loaded families, materials, sheet sizes, and more.

**The three template options when creating a new project:**

Option 1 — Default Autodesk Template:
The templates that ship with Revit (Architectural Template, Structural Template, etc.). These use Autodesk's own conventions. They are a reasonable starting point for learning Revit but are not aligned to any specific national or international standard.

Option 2 — Office/Custom Template:
A .rte file built by your office or downloaded from a BIM standards organisation. These encode your firm's specific drawing conventions, material libraries, and parameter schemas. This is what you are building in this course.

Option 3 — None (Blank):
No template. Revit creates a minimal project with default unit settings and almost nothing else. This is the starting point for building your own template from scratch — which is exactly what we are doing.

**Why we start from None:**
Starting from None means everything in the final template was a deliberate choice — not an inherited default that nobody questioned. You know what is in your template and why. You can explain every setting to a colleague or a client auditor.

Starting from a default template means inheriting line weights that do not match your standard, families you did not choose, and materials with incorrect cut patterns. Cleaning all of that out takes longer than building from scratch.`,
      },
      {
        title: 'EXPLAIN — The Blank Template Starting Point',
        content: `When you start from None, Revit creates a project with:

- Default units (feet and inches in the US/imperial version, millimeters in metric)
- Two default levels: Level 1 and Level 2 at 0mm and 4000mm
- A default 3D view and two floor plan views
- No loaded families (no doors, windows, or furniture)
- No materials beyond the absolute defaults
- No sheets, no titleblock, no view templates
- Default line weights (which we will replace in Lesson 9)

This blank state is our canvas. Every lesson adds one layer of professional configuration. By Lesson 24 the canvas is a complete professional template.

**The Metric vs. Imperial Decision:**
ISO 19650 does not mandate a unit system. However, metric (millimeters) is the standard in most of the world where ISO 19650 is practiced — the UK, Europe, Australia, Middle East, and Southeast Asia. The United States uses imperial for construction documents but metric for international BIM exchange.

For this course: we use metric (millimeters). This is the ISO 19650-aligned international standard. If your practice uses imperial, the principles are identical — only the values change.`,
      },
      {
        title: 'GUIDE — Creating the Project File',
        content: `Follow these exact steps to create the Dharren Park project file.

**Step 1 — Open the New Project dialog:**
Revit → File tab → New → Project
The "New Project" dialog opens.

**Step 2 — Select None as the template:**
In the Template File dropdown, select "None."
Do NOT select any of the Autodesk default templates.

**Step 3 — Confirm Project (not Family or Template):**
Make sure "New" is set to "Project" — not "Family" or "Template."
We will save it as a Template (.rte) at the end of the course. For now, we work in a Project (.rvt) so we can test everything as we build.

**Step 4 — Click OK:**
Revit creates a minimal project. You will see:
- Project Browser with Floors Plans: Level 1, Level 2, and {3D}
- A blank canvas in the view area
- The title bar showing "Project1"

**Step 5 — Save immediately:**
File → Save As → Project
Navigate to: C:\\DharrenPark\\Project\\BIM\\WIP\\
Filename: [see PRACTICE section below]
File type: Project Files (*.rvt)
Click Save.

Your project file now exists on disk. Save frequently throughout every lesson — Revit does not auto-save by default.

**Step 6 — Check the starting state:**
Look at the Project Browser. You should see:
- Views → Floor Plans → Level 1, Level 2
- Views → 3D Views → {3D}
- Families → (almost empty)
- Sheets → (none)

This is your blank canvas. Everything else in this course gets added deliberately.`,
      },
      {
        title: 'PRACTICE — Create Your Project File',
        content: `Create the Dharren Park project file using these exact ISO 19650-aligned values.

**Project File Details:**

Project Name: Dharren Park Commercial Centre
Abbreviation: DPC
Year: 2025

**ISO 19650 File Naming:**
The ISO 19650 naming convention for a project model file uses this format:
[Project]-[Originator]-[Volume/System]-[Level/Location]-[Type]-[Role]-[Classification]-[Number]

For our project, the simplified naming convention is:
DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-MODEL

Breaking this down:
- DPC2025 = Project code + year
- DPA = Dharren Park Architecture (originator)
- ZZ = All zones (whole building)
- XX = All levels
- M3 = Model (3D BIM model type)
- ARCH = Architectural discipline
- BUILDING = Classification
- MODEL = Description

**Your filename:**
DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-MODEL.rvt

**Full save path:**
C:\\DharrenPark\\Project\\BIM\\WIP\\DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-MODEL.rvt

Save your file now with this exact name. This is the file you will configure throughout the entire course. Every lesson adds to it.

**Confirmation checklist:**
After saving, verify:
- The title bar shows: DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-MODEL
- The file exists at the correct path in Windows Explorer
- The Project Browser shows Level 1 and Level 2 floor plans
- No template content is visible (no pre-loaded families, no sheets)

You have created your project file. Move to Lesson 3.`,
      },
    ],
    takeaways: [
      'Start from None (no template) when building your own office template — inherit no defaults you did not choose',
      'Default Autodesk templates encode Autodesk\'s conventions, not yours — cleaning them is harder than building from scratch',
      'We work in a .rvt project file throughout the course and save as .rte template at the very end (Lesson 23)',
      'ISO 19650 file naming format: [Project]-[Originator]-[Zone]-[Level]-[Type]-[Role]-[Classification]-[Description]',
      'Your project file is: DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-MODEL.rvt — save it to your WIP folder now',
    ],
    resource: {
      title: 'ISO 19650-2 — Naming Conventions Guidance',
      url: 'https://www.bsigroup.com/en-GB/standards/iso-19650/',
    },
    prev: 'ps-1',
    next: 'ps-3',
  },

  // ─────────────────────────────────────────────────────────
  // ps-3: Units, Tolerances & Project Information
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-3',
    num: 3,
    title: 'Units, Tolerances & Project Information',
    topic: 'Foundation',
    cat: 'beginner',
    readTime: '14 min',
    free: true,
    desc: 'Configure your project units and tolerances correctly, then populate every Project Information field using ISO 19650-aligned values for the Dharren Park Commercial Centre.',
    intro: `Units and Project Information are the first two configuration tasks in any new Revit project. Units determine how Revit measures and displays all dimensions. Project Information is the metadata that appears in titleblocks, schedules, and IFC exports — it identifies the project to every tool and every person who receives the model.

Both take less than 10 minutes to set up. Both cause significant problems if skipped or set incorrectly. This lesson guides you through both with exact ISO 19650-aligned values for the Dharren Park project.`,
    sections: [
      {
        title: 'EXPLAIN — Project Units',
        content: `Revit stores all geometry in its internal database using absolute precision. Project Units control how that precision is displayed to the user — in dimensions, in schedules, in the Properties panel, and in exported data.

**The key unit settings:**

Length:
The primary unit for all dimensions. In metric practice, this is Millimeters. The display format (decimal places, rounding) determines how dimensions show in views. For architectural work: 0 decimal places (whole millimeters). For structural or MEP work: sometimes 1 decimal place (0.5mm precision).

Area:
Used in room schedules, area plans, and space data. In metric: Square Meters (m²) with 2 decimal places. 

Volume:
Used in material takeoffs and quantity schedules. In metric: Cubic Meters (m³) with 2 decimal places.

Angle:
Used for rotation, slope, and orientation. In metric: Degrees with 2 decimal places.

Slope:
How Revit displays the slope of roofs, ramps, and drainage falls. Options: Ratio (1:20), Decimal (0.05), Percentage (5%), Degree (2.86°). For ISO 19650 aligned practice, use either Ratio or Percentage depending on your discipline convention.

**Why unit settings matter:**
Incorrect unit settings cause dimensions to show wrong values in drawings. A door width set to 900 in a millimeter project but displayed in meters shows as 0.9 — confusing for contractors. A dimension string set to 2 decimal places in a construction drawing shows "900.00mm" where "900" is cleaner and clearer.

**ISO 19650 and Units:**
ISO 19650 itself does not prescribe specific units — it defers to national practice. However, for international BIM exchange and IFC export, metric (SI units) is the standard. Millimeters for length, square meters for area, cubic meters for volume, degrees for angles.`,
      },
      {
        title: 'EXPLAIN — Project Information',
        content: `Project Information is a set of metadata fields stored in the Revit project that describes the project itself — not the model content, but the project context. This information:

- Appears automatically in titleblock schedules (project name, number, client)
- Is embedded in IFC file headers when the model is exported
- Is read by COBie export tools for the project identification fields
- Is visible to anyone who opens the model in any BIM tool

**The Project Information fields:**

Project Name: The official name of the project as it appears on contract documents.

Project Number: The firm's internal project reference number. In ISO 19650 context, this is the project code used in all file naming.

Client Name: The client or employer. In ISO 19650 terms, the Appointing Party.

Project Address: The site address. Used in IFC exports and COBie delivery.

Project Status: The current stage — Concept Design, Schematic Design, Design Development, Construction Documents, etc. In ISO 19650, this aligns to the project delivery phases.

Building Name: The name of the specific building or asset (useful when a project has multiple buildings).

Author: The primary author or BIM Manager responsible for this model file.

Organization Name: The firm or organisation creating the model. The Appointed Party in ISO 19650 terms.

Organization Description: A brief description of the organisation's role on the project.

Energy Settings: Not typically used in standard architectural projects. Leave at default.

**Why every field matters:**
Every field you leave blank in Project Information is a field that will be blank in your titleblock and your IFC export. Filling everything in now means every drawing sheet and every exported file carries complete, correct project identification automatically.`,
      },
      {
        title: 'GUIDE — Setting Project Units',
        content: `Follow these exact steps to configure units in your DPC project file.

**Step 1 — Open Project Units:**
Manage tab → Settings panel → Project Units
(Keyboard shortcut: UN)

The Project Units dialog opens showing all unit disciplines.

**Step 2 — Set Length units:**
Click the Format button beside "Length"
- Units: Millimeters
- Rounding: To the nearest 1 (whole millimeters)
- Unit suffix: Leave blank (do NOT show "mm" after every dimension — it clutters drawings)
- Suppress trailing zeros: Checked
- Suppress spaces: Checked
Click OK.

**Step 3 — Set Area units:**
Click the Format button beside "Area"
- Units: Square Meters
- Rounding: 2 decimal places
- Unit suffix: m² (type the superscript: m² or leave as m2)
- Suppress trailing zeros: Unchecked (always show 2 decimal places for areas)
Click OK.

**Step 4 — Set Volume units:**
Click the Format button beside "Volume"
- Units: Cubic Meters
- Rounding: 2 decimal places
- Unit suffix: m³
Click OK.

**Step 5 — Set Angle units:**
Click the Format button beside "Angle"
- Units: Degrees
- Rounding: 2 decimal places
Click OK.

**Step 6 — Set Slope units:**
Click the Format button beside "Slope"
- Units: Rise / Run (ratio format, e.g., 1 : 20)
Click OK.

**Step 7 — Close Project Units:**
Click OK to close the Project Units dialog.

**Step 8 — Verify:**
Draw a temporary dimension anywhere in the Level 1 plan view. The dimension should show a whole number in millimeters (e.g., 3000 not 3.000 or 3000.00). Delete the test dimension.

Units are now configured. Save the file (Ctrl+S).`,
      },
      {
        title: 'GUIDE — Setting Project Information',
        content: `Follow these exact steps to populate Project Information.

**Step 1 — Open Project Information:**
Manage tab → Settings panel → Project Information

The Project Information properties panel opens on the left side (it replaces the standard Properties panel temporarily).

**Step 2 — Fill in all fields:**
Click each field and type the value. Tab between fields.

Note: Some fields have a small browse button [...] beside them. Click it for fields that open a text dialog (useful for longer entries like addresses).

**Step 3 — Verify all fields are filled:**
Scroll through the Properties panel. Every field listed in the PRACTICE section below should have a value. No field should be blank.

**Step 4 — Click somewhere in the canvas to close:**
Click anywhere in the project view to deselect Project Information. The Properties panel returns to normal.

**Step 5 — Save:**
Ctrl+S. Project Information is now embedded in the file.

**Step 6 — Verify in a titleblock (optional at this stage):**
If you want to verify the fields are storing correctly, you can check them later when the titleblock is configured in Lesson 16. For now, trust that the values are saved in the project.`,
      },
      {
        title: 'PRACTICE — Enter Your ISO 19650-Aligned Values',
        content: `Open your DPC project file and enter these exact values.

**PROJECT UNITS — Enter these settings:**

| Setting | Value |
|---|---|
| Length | Millimeters, 0 decimal places, no suffix |
| Area | Square Meters, 2 decimal places, m² suffix |
| Volume | Cubic Meters, 2 decimal places, m³ suffix |
| Angle | Degrees, 2 decimal places |
| Slope | Rise/Run ratio (1:n format) |

**PROJECT INFORMATION — Enter these values:**

| Field | Value to Enter |
|---|---|
| Project Name | Dharren Park Commercial Centre |
| Project Number | DPC2025-001 |
| Client Name | Dharren Park Development Corporation |
| Project Address | 1 Innovation Drive, Quezon City, Metro Manila, Philippines |
| Project Status | Schematic Design |
| Building Name | Dharren Park Commercial Tower |
| Author | [Your Full Name] |
| Organization Name | [Your Firm or School Name] |
| Organization Description | Lead Design Architect — Appointed Party under ISO 19650 |
| Issue Date | 2025-06-01 |

**ISO 19650 Note on Project Number:**
The format DPC2025-001 means:
- DPC = Project code (Dharren Park Commercial)
- 2025 = Year the project commenced
- 001 = Sequential project number

This project number is used consistently in all file names, document titles, and transmittal references throughout the project.

**Confirmation Checklist — Tick each item before moving to Lesson 4:**
- Length unit is Millimeters with 0 decimal places
- Area unit is Square Meters with 2 decimal places
- Volume unit is Cubic Meters with 2 decimal places
- Project Name field shows: Dharren Park Commercial Centre
- Project Number field shows: DPC2025-001
- Client Name field is filled
- Project Address is filled
- Author field shows your name
- Organization Name field shows your firm or school name
- File is saved (title bar shows no asterisk *)

If all items are ticked, your project foundation is correctly configured. Move to Lesson 4.`,
      },
    ],
    takeaways: [
      'Set Length to Millimeters with 0 decimal places and no unit suffix — whole millimeters are the standard for international architectural drawings',
      'Set Area to Square Meters with 2 decimal places — room areas read as "23.45 m²" which is the ISO standard for space data',
      'Project Information is embedded in IFC exports and COBie handover — every blank field becomes a gap in your project data delivery',
      'ISO 19650 Project Number format: [ProjectCode][Year]-[SequenceNumber] — e.g., DPC2025-001',
      'The Organisation Description should identify your ISO 19650 role — Lead Design Architect, Appointed Party, or Task Team depending on your position',
    ],
    resource: {
      title: 'Autodesk Revit — Project Units',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-project-units',
    },
    prev: 'ps-2',
    next: 'ps-4',
  },

  // ─────────────────────────────────────────────────────────
  // ps-4: Shared Coordinates & True North
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-4',
    num: 4,
    title: 'Shared Coordinates & True North',
    topic: 'Coordinates',
    cat: 'beginner',
    readTime: '15 min',
    free: false,
    desc: 'Set up shared coordinates and true north orientation in your project — the geospatial foundation that allows all consultants to link and align their models correctly on the first attempt.',
    intro: `Coordinate setup is the most technically critical configuration task in a multi-discipline BIM project. When coordinates are set up correctly, every consultant model — structural, MEP, facade — snaps into the correct position the moment it is linked. When coordinates are wrong, consultants spend days misaligned and the team loses faith in the BIM process.

This lesson teaches you to set up shared coordinates and true north in the Dharren Park project. Once configured correctly, you will never need to move a linked model into position manually.`,
    sections: [
      {
        title: 'EXPLAIN — The Two North Directions',
        content: `Revit has two north directions:

**Project North:**
The orientation of the model on screen. For drafting efficiency, buildings are usually drawn with their primary facade parallel to the screen edges — "up" on screen is "up" in the building plan. This is Project North. It has nothing to do with compass north.

**True North:**
The actual compass north direction of the site. This is used for:
- Solar analysis and energy modeling
- Site plans that show compass orientation
- IFC export (which references True North for geo-referenced models)
- ISO 19650 requires models to be geo-referenced — True North is part of this

In most projects, the building is rotated relative to True North. A building with its primary facade facing slightly east of north would have Project North rotated 15-20 degrees from True North.

Both exist simultaneously in Revit. Floor plan views can be set to show either orientation. Site plans use True North. Building plans use Project North. The rotation between them is what you set in this lesson.`,
      },
      {
        title: 'EXPLAIN — Survey Point and Project Base Point',
        content: `Revit has two reference points that control coordinate positioning:

**Project Base Point (blue circle with a cross):**
The origin of the project coordinate system. All internal Revit measurements reference this point. It should be placed at a meaningful location on the building — typically a structural grid intersection at ground level, or the corner of the building footprint.

**Survey Point (triangle symbol):**
Represents a real-world survey coordinate. It defines where the project sits in the world — its geographic position. When the Survey Point is correctly positioned, the model can be placed accurately in a GIS system, a site model, or an IFC viewer that uses geo-referenced coordinates.

**The ISO 19650 Requirement:**
ISO 19650 requires models to be geo-referenced — positioned at their actual geographic coordinates. This means the Survey Point must be set to the correct site coordinates (Easting, Northing, Elevation from the site survey data).

For the Dharren Park project, we will use realistic fictional coordinates. In a real project, these come from the project's land survey.

**Shared Coordinates:**
When multiple Revit models (architectural, structural, MEP) need to link together correctly, they must use Shared Coordinates. This is a system where all models share the same Survey Point position, so linking one model into another automatically aligns them geographically.

The architectural model sets the shared coordinates. All other consultants acquire these coordinates from the architectural model. This is the protocol defined in the project's BIM Execution Plan under ISO 19650.`,
      },
      {
        title: 'GUIDE — Setting True North and Survey Point',
        content: `Follow these steps in your DPC project file.

**Part A — Set True North Rotation:**

Step 1 — Open the Site plan view:
In the Project Browser: Views → Floor Plans → Level 1
(We will set up a dedicated Site plan view in Lesson 13. For now, use Level 1.)

Step 2 — Open Manage Location:
Manage tab → Project Location panel → Location
The "Location Weather and Site" dialog opens.

Step 3 — Set the project location:
In the Location tab:
- Default City List: select "Manila, Philippines" (or the closest city to your project)
- This sets the sun and weather data for solar analysis
- Click OK.

Step 4 — Set the True North rotation:
Manage tab → Project Location panel → Rotate True North

In the rotate dialog, enter the angle between Project North and True North.
For the Dharren Park project: 15 degrees (the building faces slightly northeast)

In a real project, this angle comes from the site survey drawing. The surveyor provides a bearing for the building's primary facade relative to True North.

**Part B — Position the Survey Point:**

Step 1 — Make the Survey Point visible:
In the Level 1 floor plan view:
View tab → Graphics → Reveal Hidden Elements (the lightbulb icon)
If the Survey Point (triangle) is not visible, right-click the view → View Properties → check "Show Survey Point"

Or: Manage tab → Project Location → Coordinates → Specify Coordinates at a Point → click on the Project Base Point to set its coordinates.

Step 2 — Enter the Survey Point coordinates:
Select the Survey Point → Properties panel:
- East/West: 30000.000 (fictional Easting for Dharren Park site)
- North/South: 14000.000 (fictional Northing)
- Elevation: 15.500 (site elevation above sea level in meters, entered as 15500mm)
- Angle to True North: 15.00 degrees

In a real project: these values come from the project's land survey report.

Step 3 — Unclip the Survey Point before moving:
If the Survey Point shows a paperclip icon, click it to unclip before repositioning.

Step 4 — Save coordinates to the file:
Manage tab → Project Location → Coordinates → Publish Coordinates
This makes the coordinates available for consultants to acquire when they link the architectural model.`,
      },
      {
        title: 'PRACTICE — Configure Coordinates for Dharren Park',
        content: `Enter these exact values in your DPC project file.

**Project Location:**
City: Manila, Philippines
Time Zone: UTC+8 (Philippine Standard Time)

**True North Rotation:**
Angle from Project North to True North: 15 degrees clockwise
(This means the building's "up" on screen faces 15 degrees east of True North)

**Survey Point Coordinates (fictional site data for Dharren Park):**
These represent the corner of the Dharren Park site in a local coordinate system.

| Field | Value |
|---|---|
| Easting (E/W) | 30000.000 mm |
| Northing (N/S) | 14000.000 mm |
| Elevation | 15500.000 mm (= 15.5m above sea level) |
| Angle to True North | 15.00 degrees |

**Project Base Point:**
Place the Project Base Point at Grid Intersection A-1 (the primary structural grid origin). We will set up grids in Lesson 5. For now, leave the Project Base Point at the default location (the model origin).

**ISO 19650 Protocol Note:**
In a real project, the BIM Execution Plan (BEP) specifies:
- The shared coordinate origin point (which grid intersection)
- The survey point coordinates (from the land surveyor)
- The True North angle (from the site survey bearing)
- Who sets the coordinates (always the Lead Appointed Party — usually the architect)
- How consultants acquire the coordinates (by linking the architectural model and using Acquire Coordinates)

**Confirmation Checklist:**
- Project location is set to Manila, Philippines
- True North rotation is set to 15 degrees
- Survey Point coordinates are entered (E: 30000, N: 14000, Elev: 15500)
- File is saved

Move to Lesson 5 — Levels & Grids.`,
      },
    ],
    takeaways: [
      'Project North is the drawing orientation on screen. True North is the actual compass direction — both exist simultaneously in Revit',
      'The Survey Point stores real-world coordinates — set it correctly and your model is geo-referenced for IFC export and GIS integration',
      'ISO 19650 requires geo-referenced models — the Survey Point coordinates come from the project land survey report',
      'The Lead Appointed Party (architect) sets the shared coordinates — all other consultants acquire them by linking the architectural model',
      'Publish Coordinates after setting the Survey Point — this makes them available to all linked models',
    ],
    resource: {
      title: 'Autodesk Revit — Shared Coordinates',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-shared-coordinates',
    },
    prev: 'ps-3',
    next: 'ps-5',
  },

  // ─────────────────────────────────────────────────────────
  // ps-5: Levels & Grids — Setting Up Correctly
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-5',
    num: 5,
    title: 'Levels & Grids — Setting Up Correctly',
    topic: 'Datum',
    cat: 'beginner',
    readTime: '15 min',
    free: false,
    desc: 'Create the complete level stack and structural grid for the Dharren Park Commercial Centre — the datum skeleton that every element in the model references.',
    intro: `Levels and grids are the skeleton of the Revit model. Every floor slab, every column, every room, every view references a level. Every wall, column, and beam aligns to a grid. If levels and grids are set up incorrectly — wrong elevations, wrong names, wrong positions — everything modeled on top of them inherits those errors.

This lesson creates the complete datum structure for the Dharren Park Commercial Centre from scratch, using the naming conventions required by ISO 19650 and professional practice.`,
    sections: [
      {
        title: 'EXPLAIN — Levels in Revit',
        content: `A Level in Revit is a horizontal reference plane at a specific elevation. It serves two functions:

**1. View host:** Every floor plan view, ceiling plan view, and structural plan view is hosted by a level. The view shows the model content at a specific elevation range around that level.

**2. Element reference:** Elements like floors, roofs, ceilings, walls, and columns reference levels for their height position. When a level moves (e.g., the floor-to-floor height is changed during design), all elements referencing it move with it automatically.

**Level naming conventions under ISO 19650:**
ISO 19650 requires consistent level naming across all models. The recommended format uses a level code that identifies the storey:

- B2 = Second Basement
- B1 = First Basement  
- L00 = Ground Floor (Level 0, using European convention)
- L01 = First Floor (one above ground)
- L02 = Second Floor
- LRF = Roof Level
- LPH = Penthouse Level

This naming system is used across all consultants — the structural model uses the same level names as the architectural model. This is what enables Copy/Monitor to work correctly between linked models.

**Elevation reference:**
All elevations in ISO 19650-aligned models are measured from Finished Floor Level (FFL) of the Ground Floor = 0.000m. Positive numbers go up, negative numbers go below ground.`,
      },
      {
        title: 'EXPLAIN — Grids in Revit',
        content: `A Grid in Revit is a vertical reference plane that appears as a line in plan views and as a marker in elevation views. Structural elements (columns, beams, walls) are placed in relation to grids. The grid gives every element a locatable reference: "Column at Grid A-1."

**Grid naming conventions:**
The international convention (used in ISO 19650-aligned projects):
- Numbers (1, 2, 3, 4...) for one axis — typically left to right
- Letters (A, B, C, D...) for the other axis — typically bottom to top

Grids are referenced by their intersection: Grid A-1 means the intersection of Grid A (horizontal) and Grid 1 (vertical). This naming must be consistent across all models — the structural engineer's Grid A-1 must be the same physical point as the architect's Grid A-1.

**The Dharren Park grid:**
The commercial centre has a regular structural grid of 8000mm x 8000mm bays — a common dimension for commercial office buildings that allows 3 parking spaces per bay in the basement.

Our grid:
- Vertical grids: 1, 2, 3, 4, 5 (left to right, 8000mm spacing)
- Horizontal grids: A, B, C, D, E (bottom to top, 8000mm spacing)
- Total footprint: 32000mm x 32000mm (32m x 32m)`,
      },
      {
        title: 'GUIDE — Creating Levels',
        content: `**Step 1 — Open an elevation view:**
Project Browser → Views → Elevations → East (or South)
You must be in an elevation or section view to create levels.

**Step 2 — Select the existing levels:**
Click on "Level 1" (the lower level). In Properties, change:
- Name: L00
- Elevation: 0 (already at 0)

Click on "Level 2." Change:
- Name: L01
- Elevation: 4500 (4500mm = 4.5m floor-to-floor for ground floor commercial)

**Step 3 — Create additional levels using Copy:**
Select the L01 level → Modify → Copy (with Multiple option checked)
Click L01, then click upward at these heights above L01:

Or use Architecture tab → Datum panel → Level to draw each level manually.

**Step 4 — Create all levels:**
Use Copy or the Level tool to create each level. Click on each after creation to rename in Properties.

**Step 5 — Pin all levels:**
Select all levels (Ctrl+A in the elevation view) → Modify → Pin
Pinned levels cannot be accidentally moved. Unpin only when you need to adjust an elevation.

**Step 6 — Create floor plan views for each level:**
When you create a level using the Level tool (Architecture → Level), Revit offers to create associated floor plan views. Click Yes for each level. If you created levels by Copy, you may need to create views manually:
View tab → Plan Views → Floor Plan → select the levels without views → OK.`,
      },
      {
        title: 'GUIDE — Creating Grids',
        content: `**Step 1 — Return to a floor plan view:**
Project Browser → Views → Floor Plans → L00

**Step 2 — Start the Grid tool:**
Architecture tab → Datum panel → Grid
(Or keyboard shortcut: GR)

**Step 3 — Draw the first vertical grid (Grid 1):**
Click to start the grid line at the bottom of the view.
Click to end it above the building footprint.
Press Escape. The grid appears with the number "1."

**Step 4 — Copy Grid 1 to create Grids 2, 3, 4, 5:**
Select Grid 1 → Modify → Copy (Multiple checked)
Click Grid 1, then click to the right at 8000mm intervals.
Four additional grids appear, automatically numbered 2, 3, 4, 5.

**Step 5 — Draw the first horizontal grid (Grid A):**
Start the Grid tool again.
Draw a horizontal line from the left to the right of the grid.
When prompted or by typing in Properties, name this grid "A."

**Step 6 — Copy Grid A to create Grids B, C, D, E:**
Select Grid A → Copy (Multiple)
Copy upward at 8000mm intervals.
Rename each: B, C, D, E.

**Step 7 — Pin all grids:**
Select all grids → Pin.

**Step 8 — Check grid heads are visible:**
In the floor plan view, verify all grid bubbles show at both ends (or one end — your office convention). The grid number/letter should be clearly readable.`,
      },
      {
        title: 'PRACTICE — Build the Dharren Park Datum',
        content: `Create these exact levels and grids in your DPC project file.

**LEVELS — Create these 8 levels:**

| Level Code | Name | Elevation (mm) | Description |
|---|---|---|---|
| LB1 | B1 Basement | -3500 | Basement car park |
| L00 | Ground Floor | 0 | Commercial lobby + retail |
| L01 | Level 1 | 4500 | Office floor |
| L02 | Level 2 | 8500 | Office floor |
| L03 | Level 3 | 12500 | Office floor |
| L04 | Level 4 | 16500 | Office floor |
| L05 | Level 5 | 20500 | Office floor |
| LRF | Roof | 24000 | Roof plant and services |

Floor-to-floor heights:
- Basement to Ground: 3500mm (basement car park clearance)
- Ground to L01: 4500mm (commercial ground floor — higher for retail)
- L01 to L05: 4000mm per floor (standard commercial office)
- L05 to Roof: 3500mm (reduced — services level)

**GRIDS — Create this 5x5 grid:**

Vertical grids (left to right, 8000mm spacing):
1 — 2 — 3 — 4 — 5

Horizontal grids (bottom to top, 8000mm spacing):
A — B — C — D — E

Starting position: Grid 1 and Grid A intersect at coordinates (0, 0) from the Project Base Point.

**ISO 19650 Note:**
These level codes (LB1, L00, L01, LRF) and grid names (1-5, A-E) are now the standard reference for the entire project. When you send the architectural model to the structural engineer, they acquire coordinates from your model and use these same level codes and grid names in their structural model. This is the ISO 19650 requirement for consistent information across the project team.

**After completing levels and grids:**
Pin everything (select all → Modify → Pin).
Save the file (Ctrl+S).

**Confirmation Checklist:**
- 8 levels created with correct names and elevations
- All levels pinned
- Floor plan views exist for each level
- 5 vertical grids (1-5) at 8000mm spacing
- 5 horizontal grids (A-E) at 8000mm spacing
- All grids pinned
- File saved

Move to Lesson 6 — Worksets.`,
      },
    ],
    takeaways: [
      'Level naming format: LB1 (basement), L00 (ground), L01-L05 (upper floors), LRF (roof) — consistent across all consultant models per ISO 19650',
      'All elevations measured from Ground Floor FFL = 0.000m — the universal reference datum for the project',
      'Grid naming: numbers (1-5) for one axis, letters (A-E) for the other — grid intersections reference every column position in the project',
      'Pin all levels and grids after creation — prevents accidental moves that would displace everything referenced to them',
      'The Dharren Park grid: 5x5 at 8000mm = 32m x 32m commercial footprint with basement car park at -3500mm',
    ],
    resource: {
      title: 'Autodesk Revit — Levels and Grids',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-levels-grids',
    },
    prev: 'ps-4',
    next: 'ps-6',
  },

  // ─────────────────────────────────────────────────────────
  // ps-6: Worksets — Planning & Creating
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-6',
    num: 6,
    title: 'Worksets — Planning & Creating',
    topic: 'Worksharing',
    cat: 'beginner',
    readTime: '14 min',
    free: false,
    desc: 'Enable worksharing and create a professional workset structure that allows multiple team members to work in the same Revit model simultaneously without conflicts.',
    intro: `A Revit model worked on by a single person needs no worksets. A Revit model worked on by a team of architects simultaneously — which is every real commercial project — needs a well-planned workset structure from day one.

Worksets divide the model into zones that individual team members can check out and edit independently. Without worksets, only one person can edit the model at a time. With worksets properly configured, a team of 5-10 architects can all work simultaneously on different parts of the building.

This lesson enables worksharing on the Dharren Park project and creates the workset structure we will use throughout the course.`,
    sections: [
      {
        title: 'EXPLAIN — How Worksharing Works',
        content: `Worksharing is Revit's system for multi-user collaboration on a single model. Here is how it works:

**The Central Model:**
One master copy of the project file lives on a shared server or cloud storage (BIM 360, Autodesk Construction Cloud, or a network drive). This is the Central Model. No one works directly in the Central Model.

**Local Copies:**
Each team member creates their own Local Copy of the Central Model on their own computer. They work in their local copy — it is fast because it is on their own machine.

**Synchronise with Central:**
When a team member wants to share their work with the team, they Synchronise with Central. Their local changes upload to the Central Model and they download everyone else's changes simultaneously.

**Worksets:**
Each element in the model belongs to a workset. When a team member checks out a workset, they have exclusive editing rights to all elements on that workset. Other team members can see those elements but cannot edit them. This prevents two people from editing the same element simultaneously.

**In ISO 19650 context:**
ISO 19650 Part 2 Section 5.5 covers collaborative production of information. Worksharing is the Revit implementation of this collaborative framework — the Central Model is effectively the project's architectural information container in the WIP state of the CDE.`,
      },
      {
        title: 'EXPLAIN — Workset Strategy for Commercial Projects',
        content: `A workset strategy defines how to divide the model between team members. Poor workset strategies — too few worksets, too many worksets, worksets that do not match the team's work assignments — cause constant editing conflicts and slow the team down.

**The Dharren Park Workset Strategy:**
For a 6-storey commercial building with a team of 4-8 architects, we use worksets organised by building zone and element type:

Workset WS-SHARED:
Elements that everyone needs to see but nobody should accidentally edit — levels, grids, shared reference planes, the building outline. All datum elements go here.

Workset WS-CORE:
The building core — lift shafts, stair cores, toilets, service risers. Usually one team member's responsibility.

Workset WS-SHELL:
The building envelope — external walls, curtain walls, roof, facade elements. One team member owns this.

Workset WS-FITOUT:
Internal partitions, ceilings, raised floors, internal fit-out elements. One or more team members share this.

Workset WS-STRUCTURE:
Structural elements visible in the architectural model — concrete columns, structural slabs, transfer beams. Usually referenced from the structural link, but architectural concrete elements go here.

Workset WS-SITEWORKS:
External site works — pavements, landscape, car park, site walls. One team member owns this.

Workset WS-LINKS:
Linked models (structural, MEP, survey). Linked files are automatically placed on a separate workset. This is managed automatically by Revit.

This structure gives each team member clear ownership. The project BIM Manager assigns worksets to team members at the project kickoff.`,
      },
      {
        title: 'GUIDE — Enabling Worksharing and Creating Worksets',
        content: `**IMPORTANT NOTE FOR THIS COURSE:**
In this course, you are working alone (single user). You will enable worksharing and create worksets as part of building the template — but you will not set up a Central Model on a server. The workset structure is saved in your project file and will be correctly configured when the project is used by a real team.

**Step 1 — Enable Worksharing:**
Collaborate tab → Manage Collaboration panel → Worksets
A dialog appears: "Do you want to enable worksharing?"
Click OK.

Revit creates two default worksets:
- Worksets1 (rename this)
- Shared Levels and Grids (keep this)

**Step 2 — Rename the default workset:**
In the Worksets dialog, select "Worksets1" → Rename → type: WS-FITOUT

**Step 3 — Create additional worksets:**
Click New for each workset:
- WS-SHARED
- WS-CORE
- WS-SHELL
- WS-STRUCTURE
- WS-SITEWORKS

You should now have these worksets listed:
- Shared Levels and Grids (Revit default — keep this name)
- WS-SHARED
- WS-CORE
- WS-SHELL
- WS-FITOUT
- WS-STRUCTURE
- WS-SITEWORKS

**Step 4 — Set the Active Workset:**
In the Worksets dialog, select WS-FITOUT → click "Make Active" → OK.

WS-FITOUT is now the active workset. Any new elements placed will go to WS-FITOUT by default. The active workset is shown in the status bar at the bottom of the screen.

**Step 5 — Move levels and grids to Shared Levels and Grids:**
Select all levels and grids in an elevation view → Properties → Workset → Shared Levels and Grids.

This is already the default for levels and grids when worksharing is enabled — verify they are on the correct workset.

**Step 6 — Save the file:**
After enabling worksharing, Revit will prompt to save. Save to your WIP location.
Ctrl+S → Save.`,
      },
      {
        title: 'PRACTICE — Set Up Dharren Park Worksets',
        content: `Enable worksharing and create these worksets in your DPC project file.

**Worksets to Create:**

| Workset Name | Contents | Owner |
|---|---|---|
| Shared Levels and Grids | All levels, grids, reference planes | All (read-only) |
| WS-SHARED | Building outline, scope boxes, project reference geometry | BIM Manager |
| WS-CORE | Lifts, stairs, toilets, service risers | Architect A |
| WS-SHELL | External walls, curtain walls, roof, facade | Architect B |
| WS-FITOUT | Internal walls, ceilings, raised floors, fit-out | Architect C |
| WS-STRUCTURE | Concrete columns, structural slabs, beams (architectural) | Architect D |
| WS-SITEWORKS | External works, landscape, car park, site walls | Architect A |

**Active Workset:**
Set WS-FITOUT as the active workset. This is the workset where most day-to-day modeling happens.

**ISO 19650 Note on Worksharing:**
ISO 19650 Part 2 Section 5.5 requires that information is produced collaboratively with defined responsibilities. The workset ownership table above is what you would include in your BIM Execution Plan (BEP) — each team member signs off on their workset responsibility.

**Confirmation Checklist:**
- Worksharing is enabled (Collaborate tab → Worksets shows all worksets)
- 7 worksets created with correct names
- Levels and grids are on "Shared Levels and Grids" workset
- WS-FITOUT is the active workset (shown in status bar)
- File is saved

Move to Lesson 7 — File Naming & Folder Structure.`,
      },
    ],
    takeaways: [
      'Worksharing enables multi-user collaboration — one Central Model, individual Local Copies, synchronised back to Central when work is ready to share',
      'Worksets divide the model by building zone — WS-CORE, WS-SHELL, WS-FITOUT, WS-STRUCTURE, WS-SITEWORKS, WS-SHARED',
      'The active workset is where new elements are placed — check the status bar to confirm the correct workset is active before modeling',
      'Levels and grids go on "Shared Levels and Grids" workset — they are visible to everyone and should not be on a personal workset',
      'The workset ownership table belongs in the BIM Execution Plan (BEP) — each team member signs off on their assigned workset responsibility per ISO 19650',
    ],
    resource: {
      title: 'Autodesk Revit — Worksharing Overview',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-worksharing-overview',
    },
    prev: 'ps-5',
    next: 'ps-7',
  },

  // ─────────────────────────────────────────────────────────
  // ps-7: File Naming & Folder Structure
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-7',
    num: 7,
    title: 'File Naming & Folder Structure',
    topic: 'Standards',
    cat: 'beginner',
    readTime: '13 min',
    free: false,
    desc: 'Apply the ISO 19650 file naming convention to all project files and set up the full Common Data Environment folder structure for the Dharren Park project.',
    intro: `ISO 19650 Part 2 Section 5.3 requires that every information container (every file) produced on a project has a name that follows a defined convention. This is not bureaucracy — it is the system that allows any team member, at any point in the project, to look at a filename and immediately know what it contains, who produced it, what status it has, and which version it is.

This lesson applies the ISO 19650 naming convention to your DPC project files and sets up the CDE folder structure on your local machine.`,
    sections: [
      {
        title: 'EXPLAIN — The ISO 19650 Naming Convention',
        content: `ISO 19650 defines a naming structure for all information containers. Each field in the filename carries specific meaning:

**Field 1 — Project:** The unique project identifier
Example: DPC2025

**Field 2 — Originator:** The organisation that created the file
Example: DPA (Dharren Park Architecture)

**Field 3 — Volume / System:** The volume of the building or engineering system
Example: ZZ (all zones / whole building), BLD (building), SITE (site works)

**Field 4 — Level / Location:** The floor level or geographic location
Example: XX (all levels), L00 (ground floor), B1 (basement)

**Field 5 — Type:** The type of information container
Example: M3 (3D Model), M2 (2D Drawing), DR (Drawing), SP (Specification)

**Field 6 — Role / Discipline:** The discipline that produced the file
Example: ARCH (Architecture), STRU (Structure), MECH (Mechanical), ELEC (Electrical)

**Field 7 — Classification:** What the file contains
Example: BUILDING, SITE, CORE, SHELL, FITOUT

**Field 8 — Number:** A sequential number to distinguish multiple files of the same type
Example: 001, 002, 0001

**Fields are separated by hyphens. No spaces. All uppercase.**

**Full example:**
DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-001

Meaning: Dharren Park Commercial 2025, produced by Dharren Park Architecture, whole building, all levels, 3D BIM model, Architecture discipline, Building model, file number 001.`,
      },
      {
        title: 'EXPLAIN — The CDE Folder Structure',
        content: `The Common Data Environment (CDE) is where all project information lives. ISO 19650 defines four states that information passes through:

**WIP (Work in Progress):**
Files being actively worked on. Not yet shared with the team. Each team member has their own WIP area. Files here may be incomplete or unverified.

**Shared:**
Files that have been internally checked and are ready for the project team to use. When you finish a section of modeling and want consultants to use it for coordination, you publish to Shared.

**Published:**
Files that have been formally issued to the client or external parties. These have been through QA and are officially released. Published files are never edited — if changes are needed, a new version is produced and published.

**Archive:**
Previous versions of published files. Kept permanently for audit trail and dispute resolution.

**The CDE in practice:**
On a large project, the CDE is a cloud platform — Autodesk Construction Cloud, BIM 360, Aconex, or Viewpoint. For this course, we simulate the CDE using a local folder structure. The principles are identical.`,
      },
      {
        title: 'GUIDE — Setting Up the CDE Folder Structure',
        content: `Create this folder structure on your computer. Right-click in Windows Explorer → New Folder for each level.

**The complete Dharren Park CDE structure:**

C:\\DharrenPark\\
  Project\\
    BIM\\
      WIP\\
        DPA\\          (your organisation's WIP folder)
          ARCH\\       (architecture discipline)
          STRU\\       (structure — for when you receive from engineer)
          MEP\\        (MEP — for when you receive from engineer)
      Shared\\
        ARCH\\
        STRU\\
        MEP\\
      Published\\
        ARCH\\
          P01\\        (first publication)
          P02\\        (second publication)
      Archive\\
        ARCH\\
    Drawings\\
      Issued\\
        S2-P01\\       (suitability S2 = suitable for coordination, publication P01)
    Documents\\
      BEP\\            (BIM Execution Plan)
      Contracts\\
      Correspondence\\
    Images\\

**The key folders you will use in this course:**
- C:\\DharrenPark\\Project\\BIM\\WIP\\DPA\\ARCH\\ — your working Revit models
- C:\\DharrenPark\\Project\\BIM\\Shared\\ARCH\\ — files ready for the team
- C:\\DharrenPark\\Project\\BIM\\Published\\ARCH\\ — formally issued files`,
      },
      {
        title: 'PRACTICE — Rename and Organise Your Project Files',
        content: `Apply the ISO 19650 naming convention to all your current project files.

**Your current files to rename and organise:**

Main architectural model:
Old name: DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-MODEL.rvt (already correct from Lesson 2)
Confirm it is saved here: C:\\DharrenPark\\Project\\BIM\\WIP\\DPA\\ARCH\\

**Additional file names you will create throughout this course:**

Drawing sheets (when exported to PDF in Lesson 16):
DPC2025-DPA-ZZ-L00-DR-ARCH-PLAN-GA-001.pdf (Ground floor general arrangement)
DPC2025-DPA-ZZ-L01-DR-ARCH-PLAN-GA-001.pdf (Level 1 general arrangement)
DPC2025-DPA-ZZ-XX-DR-ARCH-ELEV-001.pdf (Elevations)

IFC export (when completed in Lesson 21):
DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-001.ifc

BIM Execution Plan document:
DPC2025-DPA-ZZ-XX-SP-ARCH-BEP-001.pdf

**Type codes reference (memorise these):**
- M3 = 3D BIM model
- M2 = 2D drawing (exported DWG)
- DR = Drawing (PDF)
- SP = Specification / document
- RD = Rendered image

**Discipline codes reference:**
- ARCH = Architecture
- STRU = Structure
- MECH = Mechanical
- ELEC = Electrical
- PLMB = Plumbing
- FIRE = Fire protection
- LAND = Landscape
- CIVI = Civil / site

**Confirmation Checklist:**
- CDE folder structure created at C:\\DharrenPark\\
- Main Revit model is in the WIP\\DPA\\ARCH\\ folder
- You can recite the ISO 19650 file naming fields from memory (Project, Originator, Volume, Level, Type, Role, Classification, Number)
- File is saved

Move to Lesson 8 — Linked File Strategy.`,
      },
    ],
    takeaways: [
      'ISO 19650 file naming: [Project]-[Originator]-[Volume]-[Level]-[Type]-[Role]-[Classification]-[Number] — no spaces, hyphens only, all uppercase',
      'CDE has four states: WIP (in progress), Shared (ready for team), Published (formally issued), Archive (previous versions)',
      'Your main model filename: DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-001.rvt — every field has a specific meaning',
      'Type code M3 = 3D BIM model. DR = Drawing PDF. SP = Specification. IFC exports use M3 with .ifc extension',
      'In a real project the CDE is a cloud platform (ACC, BIM 360) — the folder structure you created simulates it for this course',
    ],
    resource: {
      title: 'ISO 19650-2 Annex A — Naming Convention',
      url: 'https://www.bsigroup.com/en-GB/standards/iso-19650/',
    },
    prev: 'ps-6',
    next: 'ps-8',
  },

  // ─────────────────────────────────────────────────────────
  // ps-8: Linked File Strategy
  // ─────────────────────────────────────────────────────────
  {
    id: 'ps-8',
    num: 8,
    title: 'Linked File Strategy',
    topic: 'Collaboration',
    cat: 'beginner',
    readTime: '13 min',
    free: false,
    desc: 'Set up the linked file strategy for the Dharren Park project — understanding how structural, MEP, and survey models link into the architectural model and how to manage those links correctly.',
    intro: `Real BIM projects are federated — the complete building model is made up of multiple linked files from different disciplines. The architect links in the structural model to check column positions. The structural engineer links in the architectural model to check where walls and openings are. The MEP engineer links both to route their services through the building.

For this to work, every model must be in the same coordinate position. This lesson sets up the link management strategy for the Dharren Park project so that when structural and MEP models arrive, they slot in correctly on the first attempt.`,
    sections: [
      {
        title: 'EXPLAIN — Federated BIM Models',
        content: `A federated BIM model is a combination of multiple discipline-specific models linked together. Each discipline maintains their own model file. No discipline modifies another's file. The linked combination is used for coordination, clash detection, and client presentations.

**The Dharren Park federated model:**
- Architectural model (your file — DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-001.rvt)
- Structural model (from structural engineer — DPC2025-STR-ZZ-XX-M3-STRU-BUILDING-001.rvt)
- MEP model (from MEP engineer — DPC2025-MEP-ZZ-XX-M3-MEP-BUILDING-001.rvt)
- Site survey model (from surveyor — DPC2025-SRV-ZZ-XX-M3-SURV-SITE-001.rvt)

The architectural model is the host — it links all other models. When you open the architectural model, you can see the structural columns, MEP ducts, and site boundary as linked overlays.

**ISO 19650 and federated models:**
ISO 19650 Part 2 Section 5.5 covers collaborative production of information. The federated model is the physical implementation of this collaborative requirement. Each discipline publishes their model to the Shared area of the CDE. Other disciplines link from the Shared area — not from the originator's WIP area.

This is critical: you always link from the Shared folder, never from someone's WIP folder. The Shared folder contains verified, QA-checked information. WIP folders contain work in progress that may be incomplete.`,
      },
      {
        title: 'EXPLAIN — Link Positioning Methods',
        content: `When you link a model into Revit, you must tell Revit where to position it. There are three options:

**Auto - Internal Origin to Internal Origin:**
Links the model with both internal origins aligned. Only use this if all models were set up with the same internal origin point — which is rarely guaranteed across different firms.

**Auto - Origin to Origin:**
Same as above but uses the survey point. Unreliable if survey points were not coordinated.

**Auto - By Shared Coordinates:**
The correct method for ISO 19650 projects. Both models have been set up with the same shared coordinates (from Lesson 4). The link automatically positions at the correct geographic location. This is why setting up shared coordinates in Lesson 4 was critical.

**Manual:**
You position the linked model by hand. This is the last resort — it is imprecise and creates re-alignment work every time the linked model is updated.

**The Protocol:**
For all Dharren Park linked models: use "Auto - By Shared Coordinates." This requires that every consultant has acquired the shared coordinates from the architectural model (using Manage → Coordinates → Acquire Coordinates after linking the architectural model into their own file). This is stated in the BIM Execution Plan and confirmed at the project kickoff.`,
      },
      {
        title: 'GUIDE — Setting Up Link Placeholders',
        content: `In this course, you do not have actual structural or MEP models to link. Instead, we set up the link management system so it is ready when real models arrive. We also link a simple RVT placeholder to test the coordinate system.

**Step 1 — Open the Manage Links dialog:**
Insert tab → Link panel → Manage Links
(Or: Insert → Revit)

The Manage Links dialog shows all linked files. Currently: none.

**Step 2 — Set the default link folder:**
In Revit Options: File → Options → File Locations → add C:\\DharrenPark\\Project\\BIM\\Shared\\ as a library path.

This means when you browse for a linked file, Revit opens to the Shared folder — the correct location per ISO 19650 CDE protocol.

**Step 3 — Understanding link types:**
In the Manage Links dialog, there are tabs:
- Revit — other Revit model files (.rvt)
- IFC — IFC files from non-Revit tools
- CAD Formats — DWG, DXF, DGN files
- Point Clouds — survey scan data

For the Dharren Park project, structural and MEP consultants deliver Revit files. If any consultant uses a non-Revit tool (e.g., ARCHICAD or Vectorworks), they deliver an IFC file.

**Step 4 — Link settings when linking is required:**
When a structural model arrives (in a real project), link it as follows:
Insert tab → Link Revit → browse to the file in the Shared\\ folder → Positioning: Auto - By Shared Coordinates → Open.

The model appears at the correct position relative to your architectural model because both share the same coordinate system from Lesson 4.

**Step 5 — Workset for linked models:**
Linked models are automatically placed on the "Revit Links" workset — Revit creates this automatically. Verify it exists in your Worksets dialog (Collaborate → Worksets). You should see "Revit Links" in the list alongside the worksets you created in Lesson 6.`,
      },
      {
        title: 'PRACTICE — Document Your Link Strategy',
        content: `Create a simple Link Strategy document for the Dharren Park project. This becomes part of your BIM Execution Plan.

**Create a text file** (Notepad or Word) and save it as:
C:\\DharrenPark\\Project\\Documents\\BEP\\DPC2025-DPA-ZZ-XX-SP-ARCH-BEP-001-LINKS.txt

**Enter this content:**

DHARREN PARK COMMERCIAL CENTRE
LINKED FILE STRATEGY
Document: DPC2025-DPA-ZZ-XX-SP-ARCH-BEP-001-LINKS
Version: 1.0 | Date: [Today's Date]

FEDERATED MODEL STRUCTURE:
Host model: DPC2025-DPA-ZZ-XX-M3-ARCH-BUILDING-001.rvt (Architectural — lead)
Linked model 1: DPC2025-STR-ZZ-XX-M3-STRU-BUILDING-001.rvt (Structural)
Linked model 2: DPC2025-MEP-ZZ-XX-M3-MEP-BUILDING-001.rvt (MEP)
Linked model 3: DPC2025-SRV-ZZ-XX-M3-SURV-SITE-001.rvt (Survey/Site)

LINK POSITIONING PROTOCOL:
All models: Auto - By Shared Coordinates
Shared coordinate origin: Grid A-1 intersection at FFL = 0.000m
All consultants acquire coordinates from architectural model

CDE PROTOCOL:
Links are always established from the Shared\\ folder — never from WIP folders
Consultants publish updated models to Shared\\ on the agreed coordination schedule
The BIM Manager reloads links every Monday morning and issues a clash report

COORDINATION SCHEDULE:
Weekly model coordination: Every Monday — all models published to Shared by Friday
Clash detection review: Every Wednesday — BIM Manager chairs
Major coordination milestones: As per project programme

**In your Revit file:**
Verify the Revit Links workset exists (Collaborate → Worksets)
Verify the WIP and Shared folders exist on your computer
Save the Revit file (Ctrl+S)

**Confirmation Checklist:**
- Link Strategy document created and saved
- Revit Links workset exists in the project
- Shared folder exists at C:\\DharrenPark\\Project\\BIM\\Shared\\ARCH\\
- You understand why Auto - By Shared Coordinates is used
- File is saved

You have completed the Beginner tier of the Revit Project Setup course. Your Dharren Park project file now has:
- ISO 19650-aligned project information
- Correct units (metric, millimeters)
- Shared coordinates and true north
- Complete level stack (LB1 to LRF)
- Complete structural grid (1-5, A-E)
- Worksharing enabled with 7 worksets
- ISO 19650 file naming applied
- CDE folder structure on your computer
- Link strategy documented

Move to Lesson 9 — Line Weights, Styles & Patterns (Intermediate tier begins).`,
      },
    ],
    takeaways: [
      'Federated BIM = multiple discipline models linked together — architectural, structural, MEP, and survey models form one coordinated dataset',
      'Always link from the Shared\\ CDE folder — never from WIP. Shared contains verified information; WIP may be incomplete',
      'Positioning method: Auto - By Shared Coordinates — this is why Lesson 4 coordinate setup was critical',
      'Consultants acquire shared coordinates from the architectural model — stated in the BIM Execution Plan and confirmed at project kickoff',
      'The Revit Links workset is created automatically by Revit — all linked models live here, separate from modeled content worksets',
    ],
    resource: {
      title: 'Autodesk Revit — Linked Models',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-linked-models',
    },
    prev: 'ps-7',
    next: 'ps-9',
  },
];
