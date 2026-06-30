// ============================================================
// REVIT FAMILY SETUP — LESSONS rfs-17 through rfs-24 (ADVANCED)
// File: lib/revitFamilySetupLessonsContent/lessons-17-24.js
// FORMAT: 3-Layer — Explain → Guide → Practice
// END GOAL: Complete, governed, production-ready DPA Family Library
// ============================================================

export const lessons_17_24 = [

  // ─────────────────────────────────────────────────────────
  // rfs-17: Shared Parameter File for Families
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-17',
    num: 17,
    title: 'Shared Parameter File for Families',
    topic: 'Data Standards',
    cat: 'advanced',
    readTime: '16 min',
    free: false,
    desc: 'Build the complete DPA-SharedParameters-Families-v1.0.txt file and convert every placeholder shared parameter across all seven templates — Fire Rating, U-Value, Asset ID, and more — into fully functional shared parameters.',
    intro: `Throughout Lessons 9 through 16, you noted placeholders: "Fire Rating to be converted to shared parameter," "U-Value and SHGC pending Lesson 17," "COBie parameters placeholder until shared parameter file exists." This is the lesson where every placeholder becomes real.

You build the complete DPA-SharedParameters-Families-v1.0.txt file — the single source of truth for every shared parameter used across every family in the office. Then you go back through all seven templates and convert the placeholders into fully functional shared parameters. This is the moment the family library becomes genuinely connected to tags, schedules, and IFC exports.`,
    sections: [
      {
        title: 'EXPLAIN — Consolidating the Shared Parameter Requirements',
        content: `Across Lessons 9-16, the following parameters were identified as requiring shared parameter status:

**From the Door Template (Lesson 9):**
Fire Rating (Text)

**From the Window Template (Lesson 10):**
U-Value (Number), SHGC (Number), Visible Light Transmittance (Number), Acoustic Rating (Text)

**From the Equipment Template (Lesson 12):**
Asset ID (Text), Maintenance Frequency (Text), Warranty Period (Text), Installation Date (Text)

**From the Tag Set (Lesson 13):**
The Equipment Tag references Asset ID — this only works once Asset ID is a confirmed shared parameter.

**Additional parameters needed for COBie compliance (introduced now):**
Manufacturer, Product Model, Responsible Party, Bar Code Number

**The relationship to the Project Setup shared parameters:**
In the Revit Project Setup course (ps-17), you built DPC2025-SharedParameters-v1.0.txt — the PROJECT-level shared parameter file. This is a different file from the one you build now.

The DPA-SharedParameters-Families-v1.0.txt file built in this lesson is the FAMILY-level file — the one used when building and editing families in the Family Editor.

**Why two files, and how they connect:**
In professional practice, the BIM Manager ensures both files reference the SAME parameter definitions — ideally, the family-level file and the project-level file are actually the SAME .txt file, referenced from both contexts. This guarantees GUID consistency between what families carry and what the project recognizes.

The DPA standard: there is only ONE shared parameter file for the entire office — DPA-SharedParameters-v1.0.txt. It is referenced by every family AND every project. This lesson finalizes that single file and ensures it is the same file referenced in ps-17 (Project Setup).`,
      },
      {
        title: 'GUIDE — Building the Unified DPA Shared Parameter File',
        content: `**Step 1 — Locate the existing project shared parameter file:**
If you have access to the DPC project's shared parameter file from ps-17:
C:\\DharrenPark\\Project\\BIM\\Documents\\BEP\\DPC2025-SharedParameters-v1.0.txt

We will use THIS file as the single source, adding any family-specific parameters not already present, rather than creating a competing file.

**Step 2 — Copy and rename for the family library reference:**
Copy DPC2025-SharedParameters-v1.0.txt to:
C:\\DharrenPark\\FamilyLibrary\\_Standards\\SharedParameters\\DPA-SharedParameters-v1.0.txt

Note: these are now the SAME content but stored in two locations for convenience. In production, point both the project and the family templates to one canonical file location to avoid drift. For this course, we treat the FamilyLibrary copy as canonical going forward and will reconcile with the project file in Lesson 23.

**Step 3 — Open in Revit and add missing parameters:**
Open any Revit family (or a blank one) → Manage → Shared Parameters → Browse → select DPA-SharedParameters-v1.0.txt

Review existing groups from ps-17: Identity and Description, Fire and Safety, Room and Space Data, FM Asset Data, COBie.

**Step 4 — Add window performance parameters (if not already present):**
Click Edit → select group "Fire and Safety" or create new group "Performance":
New Parameter:
- U-Value: Discipline Common, Type: Number
- SHGC: Discipline Common, Type: Number
- Visible Light Transmittance: Discipline Common, Type: Number

**Step 5 — Verify FM Asset Data group has all needed parameters:**
Should already contain (from ps-17): Asset ID, Maintenance Frequency, Warranty Period, Installation Date, Responsible Party
If missing any: add them now.

**Step 6 — Add COBie-specific parameters:**
Create group "COBie" if not present:
- Manufacturer: Text
- Product Model: Text
- Bar Code Number: Text
- Replacement Cost: Number

**Step 7 — Convert Fire Rating in the Door Template to Shared:**
Open DPA-Door-Template.rft
Family Types → select "Fire Rating" (currently a regular parameter, if it exists) → Delete it
New Parameter → select "Shared Parameter" → Browse → DPA-SharedParameters-v1.0.txt
Select "Fire and Safety" group → Fire Rating → OK
Set: Type parameter, Group Under: Identity Data
Save the door template (overwrite DPA-Door-Template.rft)

**Step 8 — Convert Window Template parameters to Shared:**
Open DPA-Window-Template.rft
Delete regular U-Value, SHGC, Visible Light Transmittance, Acoustic Rating parameters
Re-add each as Shared Parameters from DPA-SharedParameters-v1.0.txt
Save the window template

**Step 9 — Convert Equipment Template parameters to Shared:**
Open DPA-Equipment-Template.rft
Delete regular Asset ID, Maintenance Frequency, Warranty Period parameters
Re-add each as Shared Parameters
Add Manufacturer and Product Model as Shared too
Save the equipment template

**Step 10 — Reload all templates into DPC project and verify:**
Test that Fire Rating now appears correctly in tags and schedules.`,
      },
      {
        title: 'PRACTICE — Verify Shared Parameter Conversion Across the Library',
        content: `Test every converted shared parameter in the DPC project.

**DOOR — Fire Rating Test:**
Load DPA-Door-Template.rft into DPC project (reload, overwrite).
Place a test door → Properties → Fire Rating → enter "60 min"
Place a DPA-Tag-Equipment or appropriate Fire Rating tag (build a simple Fire Rating tag if needed, reading the Fire Rating shared parameter)
Tag should show "60 min" ✓

Check the Door Schedule (from ps-18): Fire Rating column should show "60 min" for this door ✓

Apply the Fire Compartmentation filter (from ps-19): the door should turn red since Fire Rating = "60" matches the filter rule ✓

**WINDOW — Thermal Data Test:**
Load DPA-Window-Template.rft into DPC project.
Place a test window → Properties → U-Value → enter 1.4
Check Window Schedule (if exists): U-Value column shows 1.4 ✓

**EQUIPMENT — Asset Data Test:**
Load DPA-Equipment-Template.rft into DPC project.
Place test equipment → Properties → Asset ID → enter "AHU-001"
Manufacturer → enter "Daikin"
Check Equipment Tag (from Lesson 13): Asset ID label should show "AHU-001" ✓
(Previously this showed empty or "?" before the shared parameter conversion)

**IFC EXPORT TEST:**
Export a test IFC (using the DPC2025-IFC4-Standard setup from ps-21)
Open in IFC viewer → check the test door → Pset_DoorCommon should include FireRating = "60 min" ✓

**DOCUMENT THE CONSOLIDATION:**
Add to DPA-FamilyStandards-v1.0.txt under SECTION 11: Shared Parameter Governance:

"The DPA Family Library uses ONE shared parameter file: DPA-SharedParameters-v1.0.txt
Canonical location: C:\\DharrenPark\\FamilyLibrary\\_Standards\\SharedParameters\\
This file must be identical to the project-level shared parameter file referenced in the DPC Project Template (ps-17).
Reconciliation check required whenever either file is updated — see Lesson 23 for the integration protocol.

CONVERTED PARAMETERS (regular → shared) in this lesson:
- Fire Rating (Door Template)
- U-Value, SHGC, Visible Light Transmittance, Acoustic Rating (Window Template)
- Asset ID, Maintenance Frequency, Warranty Period, Manufacturer, Product Model (Equipment Template)"

**Confirmation Checklist:**
- DPA-SharedParameters-v1.0.txt complete with all required groups and parameters
- Fire Rating converted to shared in Door Template — tested with tag, schedule, and filter
- Thermal parameters converted to shared in Window Template — tested with schedule
- Asset data converted to shared in Equipment Template — tested with tag
- IFC export verified to include shared parameter data in correct Psets
- Standards document updated

Move to Lesson 18 — Type Catalogue Standards.`,
      },
    ],
    takeaways: [
      'The DPA office uses ONE shared parameter file referenced by both family templates and project templates — never create competing shared parameter files with the same parameter names',
      'Converting a parameter from regular to shared requires deleting the old parameter and re-adding it from the shared parameter file — there is no in-place conversion',
      'After conversion, test the full chain: parameter value entry → tag display → schedule column → filter matching → IFC export Pset mapping',
      'A door tag or schedule that previously showed "?" or blank for Fire Rating should now show the correct value once the shared parameter conversion is complete',
      'Document every converted parameter in the standards file — future family creators need to know which parameters are already shared and ready to use',
    ],
    resource: {
      title: 'Autodesk Revit — Shared Parameters',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-shared-parameters',
    },
    prev: 'rfs-16',
    next: 'rfs-18',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-18: Type Catalogue Standards
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-18',
    num: 18,
    title: 'Type Catalogue Standards',
    topic: 'Content Management',
    cat: 'advanced',
    readTime: '14 min',
    free: false,
    desc: 'Build a complete type catalogue for the DPA door family covering the full size range, establish the type catalogue file format standard, and document when type catalogues are required versus embedded types.',
    intro: `A door family with 14 embedded types loads all 14 every time, whether a project needs 2 sizes or all 14. A structural column family with 60 standard steel sections loaded as embedded types adds significant file weight to every project, even one that uses only 4 sections. Type catalogues solve this — they let users select exactly the types they need at load time.

This lesson builds the DPA door type catalogue covering the full size range used across DPC and future projects, and establishes the office standard for when type catalogues are required.`,
    sections: [
      {
        title: 'EXPLAIN — The Type Catalogue Decision Standard',
        content: `Not every family needs a type catalogue. The DPA standard:

**Use a Type Catalogue when:**
- The family has more than 12 types
- The type range covers a standard series where most projects use only a subset (door sizes, structural sections, pipe fittings)
- The family will be used across many projects with varying size requirements

**Use Embedded Types (no catalogue) when:**
- The family has 12 or fewer types
- All types are commonly needed together (a 3-type furniture configuration where every project uses all 3)
- The family is project-specific and unlikely to be reused with different type requirements

**The DPA Door Family Decision:**
The DPA door range covers: 700, 750, 800, 900, 1000, 1100, 1200mm widths × 2100, 2400mm heights = 14 size combinations, plus single and double leaf variants = 28 total types. This exceeds the 12-type threshold significantly. A type catalogue is required.

**The DPA Structural Column Decision:**
A full structural steel section range (UC, UB sections) could include 40+ types. This always requires a type catalogue — no project uses the full range, and embedding 40+ types would make the family file unnecessarily large.

**The DPA Furniture Decision:**
A chair family with 3 colour variants (Type A, B, C in different fabrics) — only 3 types, all commonly used together. No type catalogue needed; embed all 3 types directly.`,
      },
      {
        title: 'GUIDE — Building the DPA Door Type Catalogue',
        content: `**Step 1 — Open DPA-Door-Template.rft and build the full type range:**
First, create all 28 types as embedded types in the Family Types dialog (this is the "master" set before splitting into a catalogue).

Family Types → New Type for each combination:
DPA-Door-Single: 700x2100mm
DPA-Door-Single: 750x2100mm
DPA-Door-Single: 800x2100mm
DPA-Door-Single: 900x2100mm
DPA-Door-Single: 1000x2100mm
DPA-Door-Single: 1100x2100mm
DPA-Door-Single: 1200x2100mm
(repeat all 7 widths at 2400mm height = 7 more types)
DPA-Door-Double: [widths from 1400-2400 at 2100 and 2400mm] = remaining types to reach 28

For each type, set Width, Height, Frame Width (75mm standard, 100mm for widths over 1100mm), Door Leaf Material, Frame Material defaults.

**Step 2 — Verify all 28 types work correctly:**
Click through each type → Apply → confirm no geometry errors.
This is the master family with all types embedded — save as:
C:\\DharrenPark\\FamilyLibrary\\00_Architecture\\Doors\\DPA-Door-Master.rfa
(This master file is kept as the single source — the catalogue version is generated from it)

**Step 3 — Create the production family file:**
Save a copy: DPA-Door-Single-Standard.rfa
Delete all types EXCEPT ONE (keep one default type for the embedded fallback)
This becomes the file that ships with the catalogue.

**Step 4 — Build the type catalogue .txt file:**
Open a text editor (Notepad or VS Code).

Header row:
,Width##LENGTH##millimeters,Height##LENGTH##millimeters,Frame Width##LENGTH##millimeters

Data rows (one per type):
DPA-Door-Single: 700x2100mm,700,2100,75
DPA-Door-Single: 750x2100mm,750,2100,75
DPA-Door-Single: 800x2100mm,800,2100,75
DPA-Door-Single: 900x2100mm,900,2100,75
DPA-Door-Single: 1000x2100mm,1000,2100,75
DPA-Door-Single: 1100x2100mm,1100,2100,100
DPA-Door-Single: 1200x2100mm,1200,2100,100
DPA-Door-Single: 700x2400mm,700,2400,75
DPA-Door-Single: 750x2400mm,750,2400,75
DPA-Door-Single: 800x2400mm,800,2400,75
DPA-Door-Single: 900x2400mm,900,2400,75
DPA-Door-Single: 1000x2400mm,1000,2400,75
DPA-Door-Single: 1100x2400mm,1100,2400,100
DPA-Door-Single: 1200x2400mm,1200,2400,100

Save as: DPA-Door-Single-Standard.txt
(Must be the SAME filename as the .rfa, different extension, same folder)

**Step 5 — Place both files together:**
C:\\DharrenPark\\FamilyLibrary\\00_Architecture\\Doors\\
  DPA-Door-Single-Standard.rfa
  DPA-Door-Single-Standard.txt

**Step 6 — Test the catalogue:**
In DPC project: Insert → Load Family → navigate to DPA-Door-Single-Standard.rfa → Open
A dialog should appear: "Specify Types" showing all 14 types as checkboxes.
Select 4-5 types (not all 14) → OK
Only the selected types load into the project — verify in Project Browser → Families → Doors → DPA-Door-Single-Standard`,
      },
      {
        title: 'PRACTICE — Document and Verify the Catalogue Standard',
        content: `Test the complete catalogue workflow and document the standard.

**VERIFICATION TEST:**

Step 1 — Load and select types:
Insert → Load Family → DPA-Door-Single-Standard.rfa
In the Specify Types dialog, select only:
DPA-Door-Single: 800x2100mm
DPA-Door-Single: 900x2100mm
DPA-Door-Single: 1000x2100mm
Click OK.

Step 2 — Verify only selected types loaded:
Project Browser → Families → Doors → DPA-Door-Single-Standard
Should show exactly 3 types — not all 14 ✓

Step 3 — Place each loaded type:
Place one of each selected type on test walls. Verify dimensions match the catalogue values exactly.

Step 4 — Test re-loading with different selection:
Load the family again (it's already loaded, so test in a fresh project or use Insert → Load Family → Overwrite the Existing → Overwrite the parameter values of existing types):
Try selecting an additional type not previously loaded (e.g., 1200x2400mm)
Verify it adds without disturbing the existing 3 types.

**DOUBLE DOOR CATALOGUE (apply the same process):**
Create DPA-Door-Double-Standard.rfa and .txt following the same workflow for double-leaf door types.

**STRUCTURAL COLUMN CATALOGUE:**
Apply the same workflow to DPA-Structural-Column-Template types:
Build types for standard column sizes: 300x300, 400x400, 500x500, 600x600mm (rectangular) — create the catalogue .txt with these 4 types as a starting range. Document that the office expands this catalogue as new standard sizes are needed.

**DOCUMENT THE STANDARD — Add to DPA-FamilyStandards-v1.0.txt SECTION 12: Type Catalogue Standards:**

"TYPE CATALOGUE DECISION RULE:
Use catalogue when: family has more than 12 types, OR covers a standard series where projects use a subset, OR is reused across many projects with varying size needs.
Use embedded types when: 12 or fewer types, all commonly used together, project-specific family.

CATALOGUE FILE REQUIREMENTS:
- .txt file must have the EXACT same filename as the .rfa (different extension)
- Both files must be in the SAME folder
- Header row format: ,[ParameterName]##[TYPE]##[UNITS]
- Parameter names in catalogue must exactly match family parameter names (case-sensitive)

MASTER FILE PROTOCOL:
Keep a DPA-[FamilyName]-Master.rfa with ALL types embedded as the single source of truth.
Generate the production catalogue-paired family from the master by keeping one default type and exporting the rest to the .txt catalogue.
When updating: edit the Master file, regenerate the catalogue files, do not edit the catalogue .txt directly without updating the Master.

CURRENT DPA CATALOGUES:
- DPA-Door-Single-Standard (14 types: 700-1200mm widths × 2100/2400mm heights)
- DPA-Door-Double-Standard (pending — to be completed)
- DPA-Structural-Column-Rect (4 types initially: 300-600mm, expand as needed)"

**Confirmation Checklist:**
- DPA-Door-Master.rfa created with all 28 types embedded (single source of truth)
- DPA-Door-Single-Standard.rfa + .txt created and tested
- Type selection dialog tested — confirms only selected types load
- Standards document updated with type catalogue decision rule and file requirements

Move to Lesson 19 — Family Naming & Folder Structure.`,
      },
    ],
    takeaways: [
      'Type catalogue threshold: more than 12 types, standard series with partial project usage, or reused across many projects — below this, embed types directly',
      'The catalogue .txt file must have the exact same filename as the .rfa (different extension only) and live in the same folder, or Revit will not find it',
      'Maintain a Master file with ALL types embedded as the single source of truth — generate the production catalogue-paired family from this master, never edit the catalogue independently',
      'The header format ,[ParameterName]##[TYPE]##[UNITS] requires exact case-sensitive parameter name matching with the family',
      'Test catalogues by loading and selecting a SUBSET of types — verify only the selected types appear in the project, confirming the catalogue dialog works correctly',
    ],
    resource: {
      title: 'Autodesk Revit — Type Catalogues',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-type-catalogues',
    },
    prev: 'rfs-17',
    next: 'rfs-19',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-19: Family Naming & Folder Structure
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-19',
    num: 19,
    title: 'Family Naming & Folder Structure',
    topic: 'Library Management',
    cat: 'advanced',
    readTime: '13 min',
    free: false,
    desc: 'Finalize the complete DPA family naming convention and folder architecture, audit all families built in this course against the standard, and configure Revit to point directly at the DPA library.',
    intro: `Throughout this course, families have been saved with working names — DPA-Door-Template-WIP.rfa, DPA-Handle-PushBar.rfa. This lesson finalizes the permanent naming convention and folder architecture for the complete DPA Family Library, audits every family built so far against the standard, and configures Revit so the library is one click away for every team member.`,
    sections: [
      {
        title: 'EXPLAIN — The Complete DPA Naming Convention',
        content: `The DPA family naming convention has three components:

**Format:**
[CategoryCode]-[Description]-[Subtype]-[Variant].rfa

**Category Codes (DPA standard):**
DR = Doors
WN = Windows
FN = Furniture
CW = Casework
ME = Mechanical Equipment
LF = Lighting Fixtures
LD = Lighting Devices
PF = Plumbing Fixtures
EE = Electrical Equipment
SC = Structural Columns
SF = Structural Framing
GM = Generic Model
AN = Annotation
PR = Profile
TL = Titleblock

**Description:**
Plain English, specific, searchable. "Single-Flush-Door" not "SFD" or "Door1."

**Subtype/Variant:**
The specific configuration within the description. "Standard" vs. "Acoustic" vs. "FireRated."

**Renaming files built in this course to final names:**

| Working Name (this course) | Final DPA Name |
|---|---|
| DPA-Door-Template.rft | DR-Door-Template.rft |
| DPA-Window-Template.rft | WN-Window-Template.rft |
| DPA-Furniture-Template.rft | FN-Furniture-Template.rft |
| DPA-Equipment-Template.rft | ME-Equipment-Template.rft |
| DPA-Structural-Column-Template.rft | SC-StructColumn-Template.rft |
| DPA-Handle-PushBar.rfa | GM-Handle-PushBar.rfa |
| DPA-Door-Single-Standard.rfa | DR-Single-Flush-Standard.rfa |
| ARCH-Skirting-Chamfer.rfa | PR-Skirting-Chamfer.rfa |
| ARCH-Handrail-Circular.rfa | PR-Handrail-Circular.rfa |
| DPA-Tag-Door.rfa | AN-Tag-Door.rfa |

**Why the category code prefix matters:**
When browsing the library folder in Windows Explorer or the Revit Load Family dialog, files sort alphabetically. With category code prefixes, all door-related families group together (DR-...), all windows group together (WN-...). Without the prefix, files sort by description and category mixing occurs — a "Single-Flush-Door" sorts near "Single-Glazed-Window" instead of with other door families.`,
      },
      {
        title: 'GUIDE — Auditing and Renaming the Library',
        content: `**Step 1 — Create the audit spreadsheet:**
Open Excel or Google Sheets. Create columns: Current Filename, Final DPA Name, Category, Location, Renamed (Y/N), Verified in Project (Y/N)

**Step 2 — List every family built in this course:**
Go through Lessons 9-18 and list every .rfa and .rft file created:
- DPA-Door-Template.rft
- DPA-Window-Template.rft
- DPA-Furniture-Template.rft
- DPA-Equipment-Template.rft
- DPA-Structural-Column-Template.rft (and circular variant)
- DPA-Handle-PushBar.rfa
- 5 tag families from Lesson 13
- 4 profile families from Lesson 15
- DPA-Door-Master.rfa, DPA-Door-Single-Standard.rfa (+.txt)

**Step 3 — Rename each file using the DPA convention:**
For each file in Windows Explorer:
Right-click → Rename → apply new name per the table in the EXPLAIN section

IMPORTANT: when renaming a family that has a paired type catalogue .txt file, rename BOTH files to match:
DPA-Door-Single-Standard.rfa → DR-Single-Flush-Standard.rfa
DPA-Door-Single-Standard.txt → DR-Single-Flush-Standard.txt

**Step 4 — Move files to final folder locations:**
Verify each file is in the correct category subfolder:
DR-Door-Template.rft → C:\\DharrenPark\\FamilyLibrary\\05_Templates\\Current\\
GM-Handle-PushBar.rfa → C:\\DharrenPark\\FamilyLibrary\\00_Architecture\\Doors\\
AN-Tag-Door.rfa → C:\\DharrenPark\\FamilyLibrary\\03_Annotation\\Tags\\
PR-Skirting-Chamfer.rfa → C:\\DharrenPark\\FamilyLibrary\\04_Profiles\\WallSweeps\\

**Step 5 — Re-test renamed families:**
Renaming a family file does NOT break anything already loaded in a project (Revit tracks families by internal ID, not filename) — but the next load from disk will show the new name. Re-load each family into the DPC test project and verify it appears under the new name in the Project Browser.

**Step 6 — Configure Revit Library Paths:**
File → Options → File Locations → Places
Click "+" → Add a new library path:
Name: DPA Family Library
Path: C:\\DharrenPark\\FamilyLibrary\\

Click OK. Now when any team member opens Insert → Load Family, the DPA Family Library appears as a one-click destination in the Places list — no manual navigation to find the library folder.

**Step 7 — Set the default Family Template path:**
File → Options → File Locations → Default Path for Family Templates Files
Browse to: C:\\DharrenPark\\FamilyLibrary\\05_Templates\\Current\\
This means File → New → Family automatically opens to the DPA templates folder.`,
      },
      {
        title: 'PRACTICE — Complete the Library Audit',
        content: `Complete the renaming audit and verify the library structure.

**FINAL DPA FAMILY LIBRARY STRUCTURE:**

C:\\DharrenPark\\FamilyLibrary\\
  00_Architecture\\
    Doors\\
      GM-Handle-PushBar.rfa
      DR-Single-Flush-Standard.rfa
      DR-Single-Flush-Standard.txt
    Windows\\ (empty — populate in future)
    Furniture\\ (empty — populate in future)
    Casework\\ (empty)
    Specialty\\ (empty)
    GenericModels\\ (empty)
  01_Structure\\
    Columns\\
      SC-StructColumn-Rect.rfa
      SC-StructColumn-Rect.txt
      SC-StructColumn-Circular.rfa
    Framing\\ (empty)
    Foundations\\ (empty)
  02_MEP\\
    Mechanical\\ (empty — equipment template stays in 05_Templates)
    Plumbing\\ (empty)
    Electrical\\ (empty)
    Lighting\\ (empty)
  03_Annotation\\
    Tags\\
      AN-Tag-Door.rfa
      AN-Tag-Window.rfa
      AN-Tag-Room.rfa
      AN-Tag-Equipment.rfa
      AN-Tag-StructColumn.rfa
    Symbols\\ (empty)
    Titleblocks\\ (empty)
  04_Profiles\\
    WallSweeps\\
      PR-Skirting-Chamfer.rfa
    Railings\\
      PR-Handrail-Circular.rfa
    StairNosings\\
      PR-Nosing-Standard.rfa
    Mullions\\
      PR-Mullion-Rectangular.rfa
  05_Templates\\
    Current\\
      DR-Door-Template.rft
      WN-Window-Template.rft
      FN-Furniture-Template.rft
      ME-Equipment-Template.rft
      SC-StructColumn-Template.rft
    Archive\\ (empty — populated as templates are updated)
  _Standards\\
    DPA-FamilyStandards-v1.0.txt
    SharedParameters\\
      DPA-SharedParameters-v1.0.txt
    TypeCatalogues\\ (reference copies)
    QAChecklists\\
      DPA-FamilyQAChecklist-v1.0.txt
    Changelogs\\ (populate in Lesson 20)

**VERIFICATION TEST:**
Open Revit → File → Options → File Locations → Places
Confirm "DPA Family Library" appears pointing to C:\\DharrenPark\\FamilyLibrary\\

Insert → Load Family → click "DPA Family Library" in the Places sidebar
Navigate through the folders → confirm all renamed files appear correctly

File → New → Family
Confirm the dialog opens directly to C:\\DharrenPark\\FamilyLibrary\\05_Templates\\Current\\

**Confirmation Checklist:**
- All files renamed per DPA convention (category code prefix)
- All files moved to correct subfolder
- Type catalogue .txt files renamed to match their .rfa pair exactly
- DPA Family Library path configured in Revit Places
- Default Family Template path configured
- Audit spreadsheet completed with all files verified

Move to Lesson 20 — Version Control & Changelog.`,
      },
    ],
    takeaways: [
      'DPA naming format: [CategoryCode]-[Description]-[Subtype]-[Variant].rfa — category codes (DR, WN, FN, ME, SC) ensure related families sort together alphabetically',
      'When renaming a family with a paired type catalogue, BOTH the .rfa and .txt must be renamed identically — a mismatch breaks the catalogue link',
      'Renaming a family file does not break existing project references — Revit tracks by internal ID — but the next fresh load shows the new name',
      'Configure Revit File Locations → Places to add the DPA Family Library as a one-click destination — eliminates manual folder navigation for every team member',
      'Set the Default Path for Family Templates so File → New → Family opens directly to the DPA templates folder, not Revit\'s generic install location',
    ],
    resource: {
      title: 'Autodesk Revit — File Locations and Library Paths',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-file-locations-library-paths',
    },
    prev: 'rfs-18',
    next: 'rfs-20',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-20: Version Control & Changelog
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-20',
    num: 20,
    title: 'Version Control & Changelog',
    topic: 'Library Management',
    cat: 'advanced',
    readTime: '13 min',
    free: false,
    desc: 'Establish the DPA family versioning system, build the changelog template, set up the archive protocol, and run the first version update cycle on the door template.',
    intro: `A family library without version control drifts into chaos within a year. Multiple versions of the same family circulate with no way to tell which is current. A bug fix made to one project\'s copy of a family never makes it back to the library. This lesson establishes the version control discipline that keeps the DPA library coherent for years of use — not just for the duration of this course.`,
    sections: [
      {
        title: 'EXPLAIN — The DPA Version Numbering System',
        content: `Every DPA family carries a version number recorded in its Comments field, following semantic versioning principles adapted for BIM content:

**Format: v[Major].[Minor]**

**Major version increments (v1.0 → v2.0) when:**
- Parameters are deleted or renamed (breaks existing project references)
- Category is changed
- Hosting type is changed
- Fundamental geometry rebuild that changes behaviour
- Any change that could cause existing placed instances to behave differently or error

Major updates require coordination with all active projects before release — placed instances may need manual intervention after updating.

**Minor version increments (v1.0 → v1.1) when:**
- Parameters are added (does not affect existing parameters)
- Geometry refinements that do not change overall behaviour
- New types added to the family
- Visibility or material improvements
- Bug fixes that correct behaviour without changing the parameter interface

Minor updates are safe — projects can reload without any manual intervention or data loss.

**The version lives in three places:**
1. The Comments field in Family Types (visible when the family is selected in a project)
2. The changelog document (the full history)
3. The archive folder name (when superseded)

**Never put the version number in the filename.**
DR-Door-Template.rft stays DR-Door-Template.rft forever. The version is internal metadata, not part of the identifier. If the filename changed with every version, every project reference to that filename would break on update.`,
      },
      {
        title: 'GUIDE — Building the Changelog System',
        content: `**Step 1 — Create the master changelog file:**
C:\\DharrenPark\\FamilyLibrary\\_Standards\\Changelogs\\DPA-Library-Changelog.txt

**Step 2 — Enter the changelog header and retroactive entries:**

DPA FAMILY LIBRARY — MASTER CHANGELOG
======================================

Format: [Date] | [Family] | [Version] | [Change Description] | [Author]

---
2025-06-01 | DR-Door-Template.rft | v1.0 | Initial release. Full DPA skeleton: reference planes, parameters, subcategories, visibility matrix. | [Your Name]
2025-06-02 | WN-Window-Template.rft | v1.0 | Initial release. Sill Height control, thermal parameters (placeholder). | [Your Name]
2025-06-03 | FN-Furniture-Template.rft | v1.0 | Initial release. Two-Representation approach implemented. | [Your Name]
2025-06-04 | ME-Equipment-Template.rft | v1.0 | Initial release. Duct + electrical connectors, service zone geometry. | [Your Name]
2025-06-05 | SC-StructColumn-Template.rft | v1.0 | Initial release. Rectangular and circular test types. | [Your Name]
2025-06-06 | AN-Tag-Door.rfa, AN-Tag-Window.rfa, AN-Tag-Room.rfa, AN-Tag-Equipment.rfa, AN-Tag-StructColumn.rfa | v1.0 | Initial release of full tag set. | [Your Name]
2025-06-07 | PR-Skirting-Chamfer.rfa, PR-Handrail-Circular.rfa, PR-Nosing-Standard.rfa, PR-Mullion-Rectangular.rfa | v1.0 | Initial release of core profile library. | [Your Name]
2025-06-08 | GM-Handle-PushBar.rfa | v1.0 | Initial release. Nested into door template. | [Your Name]
2025-06-09 | DR-Door-Template.rft | v1.1 | Fire Rating converted from regular to shared parameter. | [Your Name]
2025-06-09 | WN-Window-Template.rft | v1.1 | U-Value, SHGC, Visible Light Transmittance, Acoustic Rating converted to shared parameters. | [Your Name]
2025-06-09 | ME-Equipment-Template.rft | v1.1 | Asset ID, Maintenance Frequency, Warranty Period, Manufacturer, Product Model converted to shared parameters. | [Your Name]
2025-06-10 | DR-Single-Flush-Standard.rfa | v1.0 | Type catalogue created. 14 types (700-1200mm width x 2100/2400mm height). | [Your Name]

(Continue adding entries as the library evolves)

**Step 3 — Set up per-family Comments field standard:**
Every family's own Comments field (in Family Types) should contain its OWN micro-changelog, not just the current version:

Example for DR-Door-Template.rft:
"v1.0 — 2025-06-01 — Initial release. Full DPA skeleton.
v1.1 — 2025-06-09 — Fire Rating converted to shared parameter."

This means a team member who opens the family directly sees its history without needing to consult the master changelog.

**Step 4 — Run a version update cycle on the Door Template:**
This is a practice update to establish the workflow.

Open DR-Door-Template.rft.
Make a minor improvement: add a "Hardware Set" Text parameter (Type, Identity Data) for documenting which hardware specification applies.

Update Comments field:
Add: "v1.2 — [Today's Date] — Added Hardware Set parameter for specification tracking."

**Step 5 — Archive the previous version:**
Before saving the update, copy the CURRENT version (v1.1) to the archive:
Copy DR-Door-Template.rft → C:\\DharrenPark\\FamilyLibrary\\05_Templates\\Archive\\DR-Door-Template-v1.1.rft

**Step 6 — Save the updated version in Current:**
Save the v1.2 update to: C:\\DharrenPark\\FamilyLibrary\\05_Templates\\Current\\DR-Door-Template.rft (overwrite)

**Step 7 — Update the master changelog:**
Add the new entry to DPA-Library-Changelog.txt:
"[Today's Date] | DR-Door-Template.rft | v1.2 | Added Hardware Set parameter. | [Your Name]"`,
      },
      {
        title: 'PRACTICE — Establish the Update and Archive Protocol',
        content: `Document the complete version update workflow as a repeatable process.

**Add to DPA-FamilyStandards-v1.0.txt — SECTION 13: Version Control Protocol:**

VERSION NUMBERING:
v[Major].[Minor] — Major = breaking changes (parameter deletion, category change, behaviour change). Minor = safe additions (new parameters, geometry refinement, bug fixes).
Version NEVER appears in the filename — only in Comments field and changelog.

THE UPDATE WORKFLOW (follow exactly, every time):
1. Open the CURRENT version from 05_Templates/Current/ (or relevant library folder)
2. Make the required changes
3. Test the changes in the DPC project (re-run relevant QA checklist sections)
4. Update the family's own Comments field with the new version line
5. BEFORE saving over Current: copy the existing Current file to Archive, renamed with its version number
6. Save the updated file to Current (overwriting, same filename, no version in name)
7. Add an entry to DPA-Library-Changelog.txt
8. If Major version: notify all active projects before they reload the family
9. If Minor version: notify the team via standard communication channel (no urgent action needed)

ARCHIVE NAMING:
[FamilyName]-v[Version].rfa (or .rft)
Example: DR-Door-Template-v1.1.rft
Archive location matches the family's category structure:
05_Templates/Archive/ for templates
[Category folder]/Archive/ for production families (create Archive subfolders as needed)

CHANGELOG MAINTENANCE:
DPA-Library-Changelog.txt is the master record — update it for EVERY change to ANY family, no exceptions.
Each family's own Comments field carries its personal history — update both, every time.

WHO CAN UPDATE THE LIBRARY:
Only the BIM Manager (or designated Family Manager) has write access to 05_Templates/Current/ and the production library folders.
Team members proposing changes submit to the BIM Manager (formalized in Lesson 22).

**TEST THE COMPLETE WORKFLOW:**
Verify your Lesson 20 update followed all 9 workflow steps:
1. ✓ Opened DR-Door-Template.rft from Current
2. ✓ Added Hardware Set parameter
3. ✓ (Test in DPC project — place a test door, verify Hardware Set appears in Properties)
4. ✓ Updated Comments field with v1.2 entry
5. ✓ Archived v1.1 to Archive folder
6. ✓ Saved v1.2 to Current
7. ✓ Added entry to master changelog
8. This was a Minor update — no major-version project coordination needed
9. (In production: would notify team via email/Slack)

**Confirmation Checklist:**
- DPA-Library-Changelog.txt created with full retroactive history
- Version control protocol documented in standards file
- DR-Door-Template.rft updated to v1.2 following the complete 9-step workflow
- v1.1 archived correctly with version number in filename
- Master changelog updated with the v1.2 entry

Move to Lesson 21 — Family QA & Health Checks.`,
      },
    ],
    takeaways: [
      'Version format v[Major].[Minor] — Major = breaking changes requiring project coordination, Minor = safe additions that projects can reload without intervention',
      'Version numbers never appear in filenames — only in the Comments field and changelog — filenames must remain stable forever for project references to stay valid',
      'The 9-step update workflow: open current → change → test → update Comments → archive previous → save current → update changelog → notify (if major) → communicate',
      'Archive files are named with their version number (DR-Door-Template-v1.1.rft) — only the Current folder version omits the version number',
      'DPA-Library-Changelog.txt is the master record across ALL families — update it for every single change, no matter how small',
    ],
    resource: {
      title: 'Autodesk Revit — Family Version Management Best Practices',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-family-version-management',
    },
    prev: 'rfs-19',
    next: 'rfs-21',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-21: Family QA & Health Checks
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-21',
    num: 21,
    title: 'Family QA & Health Checks',
    topic: 'Quality',
    cat: 'advanced',
    readTime: '14 min',
    free: false,
    desc: 'Run the complete DPA QA Checklist on every family in the library, establish file size and polygon count benchmarks, and build the periodic library health audit protocol.',
    intro: `Lesson 8 built the QA checklist and ran it once on a work-in-progress door template. This lesson runs the complete, final QA process on every family in the library — the formal gate before anything is published. It also establishes the ongoing health audit protocol that keeps the library in good condition for years, not just at this one moment.`,
    sections: [
      {
        title: 'EXPLAIN — From Single-Family QA to Library-Wide Health',
        content: `Individual family QA (Lesson 8) catches problems in one family before it is published. Library-wide health auditing catches problems that emerge across the collection over time:

**Problems that only appear at library scale:**

Duplicate functionality: two different families that do effectively the same job, built by different people, both circulating in the library. A new team member does not know which to use.

Inconsistent quality drift: family #1 (built carefully in this course) meets every standard. Family #50 (built six months later under deadline pressure) skips half the checklist. Without periodic re-auditing, quality drift goes unnoticed.

Orphaned files: a family is superseded by a new version but the old file is never archived or removed — it sits in the active folder confusing anyone who finds it first.

Broken shared parameter links: if the shared parameter file is ever replaced or corrupted, every family referencing it may show parameter errors. This is only caught by testing across multiple families simultaneously.

Performance accumulation: no single family is too large, but the CUMULATIVE weight of 50 families, each slightly heavier than necessary, adds up to a library that makes every project slower to start.

**The DPA Library Health Audit Cycle:**
Quarterly (every 3 months): spot-check 20% of the library against the QA checklist.
Annually: full library audit — every family re-tested.
On Revit version upgrade: full library audit (new Revit versions sometimes change family behaviour).
On major shared parameter file change: test every family using the changed parameters.`,
      },
      {
        title: 'GUIDE — Running the Complete QA Pass on the DPA Library',
        content: `**Step 1 — Create the QA tracking spreadsheet:**
Columns: Family Name, Version, QA Date, Section 1-7 Pass/Fail, Overall Result, Reviewer, Notes

**Step 2 — Run the full DPA-FamilyQAChecklist-v1.0.txt on each family:**

For DR-Door-Template.rft (now v1.2):
Section 1 (File/Metadata): Check file size (should remain under 500KB even with Hardware Set parameter added). Comments field has full version history. ✓
Section 2 (Category/Hosting): Doors category, wall-hosted, Cut with Voids checked. ✓
Section 3 (Reference Planes): All named, Is Reference correct, EQ constraints verified. ✓
Section 4 (Parameters): All DPA-named, Fire Rating confirmed shared (Lesson 17), Hardware Set added correctly. ✓
Section 5 (Geometry/Visibility): Coarse/Medium/Fine matrix correct, subcategories assigned. ✓
Section 6 (Project Testing): Re-test in DPC — load, place, tag, schedule, IFC export all pass. ✓
Section 7 (Performance): 20 instances placed — no degradation. ✓
RESULT: PASS

Repeat this full process for:
- WN-Window-Template.rft
- FN-Furniture-Template.rft
- ME-Equipment-Template.rft
- SC-StructColumn-Template.rft (both rectangular and circular)
- All 5 AN-Tag- families
- All 4 PR- profile families
- GM-Handle-PushBar.rfa
- DR-Single-Flush-Standard.rfa (test the type catalogue loading specifically)

**Step 3 — File Size Benchmark Audit:**
List every family with its file size:
| Family | Size | Target | Status |
|---|---|---|---|
| DR-Door-Template.rft | [X]KB | <500KB | Pass/Fail |
| WN-Window-Template.rft | [X]KB | <500KB | Pass/Fail |
(continue for all families)

Any family exceeding target: investigate. Common causes: embedded textures, excessive geometry, un-purged content.

**Step 4 — Cross-Family Consistency Check:**
Open Family Types for DR-Door-Template, WN-Window-Template, ME-Equipment-Template side by side (three Revit sessions, or sequentially).
Verify: Description, Manufacturer, Product Model parameters are named IDENTICALLY across all three (they should be — all from the same shared parameter conventions).

**Step 5 — Shared Parameter Integrity Check:**
Open Manage → Shared Parameters in each family.
Verify all point to the SAME file: DPA-SharedParameters-v1.0.txt at the same canonical path.
If any family points to a different copy of the file (even with identical content) — flag this. Different file = different GUIDs internally tracked, even if visually identical. This must be corrected by re-adding parameters from the canonical file.`,
      },
      {
        title: 'PRACTICE — Complete the Library Health Audit and Establish the Cycle',
        content: `Finish the full audit and set up the ongoing health check protocol.

**COMPLETE THE QA TRACKING SPREADSHEET:**
Ensure every family built in this course has a row with all 7 sections checked and an overall PASS result. Any family that does not pass: list the specific remediation needed and complete it before moving on.

**Add to DPA-FamilyStandards-v1.0.txt — SECTION 14: Library Health Audit Protocol:**

LIBRARY HEALTH AUDIT SCHEDULE:
- Quarterly: spot-check 20% of library (rotate which families are checked)
- Annual: full library audit, every family re-tested against current QA checklist
- On Revit version upgrade: full library audit before the office adopts the new version for production
- On shared parameter file change: test every family using the affected parameters

FILE SIZE BENCHMARKS (re-verified in this lesson):
Simple families (tags, profiles, simple furniture): target <300KB
Intermediate families (doors, windows, standard equipment): target <800KB
Complex families (curtain panels, detailed structural, MEP with multiple connectors): target <2MB

CROSS-FAMILY CONSISTENCY REQUIREMENT:
Common parameters (Description, Manufacturer, Product Model, Fire Rating, etc.) must use IDENTICAL names and the SAME shared parameter GUID across every family in the library — verified by confirming every family references DPA-SharedParameters-v1.0.txt from the same canonical path.

AUDIT RESPONSIBILITY:
BIM Manager owns the quarterly and annual audit schedule.
Audit results are logged in: C:\\DharrenPark\\FamilyLibrary\\_Standards\\QAChecklists\\DPA-LibraryAudit-Log.txt

**Create the Library Audit Log file:**
C:\\DharrenPark\\FamilyLibrary\\_Standards\\QAChecklists\\DPA-LibraryAudit-Log.txt

Enter:
DPA FAMILY LIBRARY — AUDIT LOG
================================
[Date] | FULL LIBRARY AUDIT | [Your Name]
Result: [N] of [N] families PASS
Families requiring remediation: [list, or "none"]
File size compliance: [N] of [N] families within target
Shared parameter integrity: [Confirmed consistent / Issues found and resolved]
Next scheduled audit: Quarterly spot-check, [Date 3 months from now]

**Confirmation Checklist:**
- Every family built in this course has passed the full QA checklist
- QA tracking spreadsheet complete with all 7 sections per family
- File size benchmark table completed — any failures remediated
- Cross-family consistency verified for common parameters
- Shared parameter file path consistency confirmed across all families
- DPA-LibraryAudit-Log.txt created with the first audit entry
- Library Health Audit Protocol documented in standards file

Move to Lesson 22 — Publishing to the Library.`,
      },
    ],
    takeaways: [
      'Library-wide health issues differ from single-family QA problems: duplicate functionality, quality drift over time, orphaned superseded files, and cumulative performance weight',
      'The audit cycle: quarterly spot-check (20% of library), annual full audit, plus triggered audits on Revit version upgrades and shared parameter file changes',
      'Cross-family consistency check: common parameters like Description and Manufacturer must use the EXACT same shared parameter GUID across every family — verified by checking they reference the same canonical shared parameter file path',
      'File size benchmarks scale by complexity: simple <300KB, intermediate <800KB, complex <2MB — track every family against its appropriate tier',
      'The DPA-LibraryAudit-Log.txt is a permanent record of every audit cycle — it proves the library has been maintained, not just built once and forgotten',
    ],
    resource: {
      title: 'Autodesk Revit — Model and Family Health Auditing',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-model-family-health-auditing',
    },
    prev: 'rfs-20',
    next: 'rfs-22',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-22: Publishing to the Library
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-22',
    num: 22,
    title: 'Publishing to the Library',
    topic: 'Governance',
    cat: 'advanced',
    readTime: '12 min',
    free: false,
    desc: 'Establish the family submission and approval workflow, define BIM Manager governance roles, and formally publish every family built in this course to the production DPA Family Library.',
    intro: `A family that has passed every QA check still is not "in the library" until it has gone through the publication process — the formal step where it moves from an individual\'s working file to an office-wide asset that anyone can use, that someone is responsible for maintaining, and that follows the governance rules established throughout this course.

This lesson builds that governance system and performs the actual publication of every family built across Lessons 9-21.`,
    sections: [
      {
        title: 'EXPLAIN — The DPA Library Governance Model',
        content: `**The BIM Manager Role:**
One person (or a small designated team) holds write access to the production library folders. This is not bureaucratic gatekeeping — it is the mechanism that prevents the problems described in Lesson 21 (duplicate families, quality drift, inconsistent naming) from accumulating unchecked.

**Read access:** every team member can browse, load, and use any family in the library.
**Write access:** only the BIM Manager can add, modify, rename, or remove files in the production folders (00_Architecture through 05_Templates).
**Proposal access:** every team member can propose a new family or an update to an existing one — through the submission process below.

**The Family Submission Process:**

Step 1 — Build and self-QA: the family creator builds the family and runs the full DPA QA Checklist themselves.

Step 2 — Submit for review: the creator sends the family file (plus QA checklist results) to the BIM Manager with a brief note: what the family is, why it was built, which project prompted it.

Step 3 — BIM Manager review: checks for duplication against the existing library, verifies the QA checklist results independently (spot-checks key items), confirms naming convention compliance.

Step 4 — Decision:
APPROVED — BIM Manager adds to the library, updates the changelog, notifies the team.
REVISIONS NEEDED — feedback given, creator revises and resubmits.
REJECTED (duplicate or out of scope) — explained to the creator, existing alternative pointed to if applicable.

**The Library Register:**
A master spreadsheet tracking every family in the library — separate from the changelog (which tracks changes) and the audit log (which tracks health checks). The register answers: "What do we have, and who is responsible for it?"`,
      },
      {
        title: 'GUIDE — Publishing the Course Deliverables',
        content: `**Step 1 — Create the Library Register:**
C:\\DharrenPark\\FamilyLibrary\\_Standards\\DPA-LibraryRegister.txt

Columns (tab or comma separated):
Filename | Category | Description | Current Version | Date Published | Built By | Approved By | QA Status

**Step 2 — Formally publish each family — run the submission process retroactively for course deliverables:**

For DR-Door-Template.rft:
- Build/QA: Complete (Lessons 9, 17, 21)
- Submission note: "Base door family template. Wall-hosted. DPA standard reference planes, parameters, subcategories. Fire Rating as shared parameter."
- BIM Manager review: [Your Name acting as BIM Manager for this course] — confirmed no duplicate exists, naming compliant, QA passed
- Decision: APPROVED
- Add entry to Library Register

Repeat this formal publication step for every family:
- WN-Window-Template.rft
- FN-Furniture-Template.rft
- ME-Equipment-Template.rft
- SC-StructColumn-Template.rft (and circular variant)
- 5 AN-Tag- families
- 4 PR- profile families
- GM-Handle-PushBar.rfa
- DR-Single-Flush-Standard.rfa (+ type catalogue)

**Step 3 — Complete the Library Register with all entries:**

Example rows:
DR-Door-Template.rft | Doors | Base wall-hosted door template with DPA standards | v1.2 | [Date] | [Your Name] | [Your Name] | PASS
WN-Window-Template.rft | Windows | Base wall-hosted window template with thermal params | v1.1 | [Date] | [Your Name] | [Your Name] | PASS
(continue for all families)

**Step 4 — Notify the "team" (document the notification protocol even if working solo for this course):**
Draft a notification email/message template:

"DPA Family Library Update — [Date]

The following families/templates have been published to the production library:
[List all families from this course]

Location: C:\\DharrenPark\\FamilyLibrary\\
Changelog: see DPA-Library-Changelog.txt for full version history
Questions: contact the BIM Manager

All templates are available via File → New → Family (default path now points to the library).
All production families are available via Insert → Load Family → DPA Family Library (Places shortcut)."

**Step 5 — Archive any remaining working files:**
Check for any "-WIP" or working-name files still present from earlier lessons.
Move them to: C:\\DharrenPark\\FamilyLibrary\\_Standards\\Changelogs\\WorkingFileArchive\\
(or delete if fully superseded by the renamed/published versions)`,
      },
      {
        title: 'PRACTICE — Complete the Formal Publication',
        content: `Finalize the publication of the entire course deliverable set.

**COMPLETE LIBRARY REGISTER — verify all entries present:**

| Filename | Category | Version | Status |
|---|---|---|---|
| DR-Door-Template.rft | Templates | v1.2 | PASS |
| WN-Window-Template.rft | Templates | v1.1 | PASS |
| FN-Furniture-Template.rft | Templates | v1.0 | PASS |
| ME-Equipment-Template.rft | Templates | v1.1 | PASS |
| SC-StructColumn-Template.rft | Templates | v1.0 | PASS |
| AN-Tag-Door.rfa | Tags | v1.0 | PASS |
| AN-Tag-Window.rfa | Tags | v1.0 | PASS |
| AN-Tag-Room.rfa | Tags | v1.0 | PASS |
| AN-Tag-Equipment.rfa | Tags | v1.0 | PASS |
| AN-Tag-StructColumn.rfa | Tags | v1.0 | PASS |
| PR-Skirting-Chamfer.rfa | Profiles | v1.0 | PASS |
| PR-Handrail-Circular.rfa | Profiles | v1.0 | PASS |
| PR-Nosing-Standard.rfa | Profiles | v1.0 | PASS |
| PR-Mullion-Rectangular.rfa | Profiles | v1.0 | PASS |
| GM-Handle-PushBar.rfa | Doors | v1.0 | PASS |
| DR-Single-Flush-Standard.rfa | Doors | v1.0 | PASS |

**Add to DPA-FamilyStandards-v1.0.txt — SECTION 15: Library Governance:**

"GOVERNANCE MODEL:
BIM Manager: sole write access to production library folders.
All team members: read/load access to entire library.
Submission required for: any new family, any modification to an existing library family.

SUBMISSION PROCESS:
1. Build + self-QA (full DPA-FamilyQAChecklist-v1.0.txt)
2. Submit to BIM Manager with description and QA results
3. BIM Manager review: duplication check, QA spot-check, naming compliance
4. Decision: Approved / Revisions Needed / Rejected
5. If approved: added to library, changelog updated, team notified, Library Register updated

LIBRARY REGISTER:
Location: C:\\DharrenPark\\FamilyLibrary\\_Standards\\DPA-LibraryRegister.txt
Updated by: BIM Manager, every time a family is published or updated."

**FINAL VERIFICATION — Open Revit and confirm the complete library is accessible:**
File → New → Family → confirms 5 templates appear in default path
Insert → Load Family → DPA Family Library → confirms all production families browsable by category folder

**Confirmation Checklist:**
- DPA-LibraryRegister.txt created and complete with all 16 families
- Formal submission/approval process documented and applied retroactively to all course deliverables
- Notification template drafted
- Working/WIP files archived or removed
- Final verification: library fully accessible via Revit Places and default template path

Move to Lesson 23 — Integrating with the Project Template.`,
      },
    ],
    takeaways: [
      'The BIM Manager has sole write access to the production library — this prevents duplicate families, inconsistent naming, and quality drift from accumulating unchecked',
      'The submission process: build + self-QA → submit with notes → BIM Manager review (duplication, QA spot-check, naming) → Approved/Revisions/Rejected → publish + notify',
      'The Library Register is distinct from the Changelog (tracks changes) and Audit Log (tracks health checks) — it answers "what do we have and who is responsible"',
      'Even working solo through this course, performing the formal publication steps retroactively builds the governance habit that scales to a real team',
      'Archive or delete WIP-named working files after publication — a clean library has no ambiguity between "official" and "someone\'s draft"',
    ],
    resource: {
      title: 'Autodesk Revit — BIM Content Governance Best Practices',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-bim-content-governance',
    },
    prev: 'rfs-21',
    next: 'rfs-23',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-23: Integrating with the Project Template
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-23',
    num: 23,
    title: 'Integrating with the Project Template',
    topic: 'Integration',
    cat: 'advanced',
    readTime: '14 min',
    free: false,
    desc: 'Connect the DPA Family Library to the DPC-OfficeTemplate-v1.0.rte from the Project Setup course — preloading templates, reconciling shared parameter files, and verifying the two systems work together as one coherent office standard.',
    intro: `Two courses, two systems: the Revit Project Setup course built DPC-OfficeTemplate-v1.0.rte. This course has built the DPA Family Library. They were designed from the start to work together — but "designed to work together" and "verified to work together" are different things.

This lesson performs the integration: loading the family library content into the project template, reconciling the two shared parameter files into one true canonical source, and running an end-to-end test that proves a new project started from the template, populated with library families, produces correct schedules, tags, and IFC data.`,
    sections: [
      {
        title: 'EXPLAIN — Why Integration Verification Matters',
        content: `The Project Setup course built shared parameters (ps-17) independently from the Family Setup course\'s shared parameter file (rfs-17). Even though both were designed with the same intent — Fire Rating, Asset ID, etc. — if they were created as two separate .txt files, they have DIFFERENT GUIDs for parameters with the SAME name.

This is the single most common integration failure in real BIM practice: two well-built systems that do not actually connect because they reference different shared parameter files, even when the parameter names look identical.

**The reconciliation requirement:**
Before this course is truly complete, you must verify (and if necessary, correct) that:
1. DPC-OfficeTemplate-v1.0.rte (project template) and DPA-SharedParameters-v1.0.txt (family library) reference the EXACT SAME shared parameter file
2. Every family in the DPA library, when loaded into a project built from DPC-OfficeTemplate-v1.0.rte, shows correctly in schedules, tags, and filters that were configured in the Project Setup course

**What "preloading" means:**
The project template should include the DPA tag families already loaded (so any new project automatically has tags ready). It should NOT include the full content family library (doors, windows, furniture) — those are loaded per-project as needed, the same way any office works. But annotation, titleblocks, and the shared parameter file connection should be pre-configured in the template.`,
      },
      {
        title: 'GUIDE — Performing the Integration',
        content: `**Step 1 — Compare the two shared parameter files:**
Open both in a text editor side by side:
C:\\DharrenPark\\Project\\BIM\\Documents\\BEP\\DPC2025-SharedParameters-v1.0.txt (from ps-17)
C:\\DharrenPark\\FamilyLibrary\\_Standards\\SharedParameters\\DPA-SharedParameters-v1.0.txt (from rfs-17)

Compare the GUID column (a long string like "a3f8b2c1-...") for parameters with matching names (Fire Rating, Asset ID, etc.)

**If GUIDs match:** the files are already the same source (good — this happens if you followed the Lesson 17 instruction to copy rather than recreate). Skip to Step 4.

**If GUIDs differ:** the files were created independently. This must be corrected:

Step 2 — Designate ONE canonical file:
Decision: DPA-SharedParameters-v1.0.txt (in the FamilyLibrary location) becomes the single canonical file, since the family library encompasses more parameter groups.

Step 3 — Point the project to the canonical file:
Open DPC-OfficeTemplate-v1.0.rte (or DPC2025 project file)
Manage → Shared Parameters → Browse → select DPA-SharedParameters-v1.0.txt (the FamilyLibrary copy)
This changes which file the PROJECT references going forward.

CRITICAL: any project parameters already added (Fire Rating, etc. from ps-17) using the OLD file's GUIDs are now ORPHANED — they reference a GUID that no longer matches the newly-pointed file. These must be removed and re-added from the new canonical file:
Manage → Project Parameters → select Fire Rating → Remove
Manage → Project Parameters → Add → Shared Parameter → browse to canonical file → Fire Rating → re-add with same category assignments as before

Repeat for every shared parameter previously added to the project (Acoustic Rating, Room Function, Required Area, Asset ID, etc.)

**Step 4 — Preload annotation into the project template:**
Open DPC-OfficeTemplate-v1.0.rte (the actual template file, not a project)
Insert → Load Family → DPA Family Library → 03_Annotation\\Tags\\ → load all 5 tag families
Insert → Load Family → DPA Family Library → 04_Profiles\\ → load the 4 profile families (optional — profiles can also be loaded per-project)

**Step 5 — Verify the Door Schedule and Filters still work:**
Open the project template (or a fresh project from it)
Check the Door Schedule (from ps-18): does the Fire Rating column still exist and function?
Check the Fire Compartmentation filter (from ps-19): does it still reference the (now reconciled) Fire Rating parameter correctly?

**Step 6 — Re-save the project template:**
File → Save As → Template
Overwrite: DPC-OfficeTemplate-v1.0.rte (or increment to v1.1 if this is a significant change — per the versioning standard from Lesson 20, applied to project templates too)`,
      },
      {
        title: 'PRACTICE — Run the End-to-End Integration Test',
        content: `Perform a complete test proving the two systems work together.

**END-TO-END TEST PROCEDURE:**

Step 1 — Create a fresh test project from the template:
File → New → Project → select DPC-OfficeTemplate-v1.0.rte (now reconciled) → OK
Save as: TEST-Integration-Project.rvt (a throwaway test file, not the real DPC project)

Step 2 — Verify pre-loaded content:
Project Browser → Families → Annotation Symbols → confirm all 5 DPA tags are present without needing to load them manually ✓

Step 3 — Load a content family from the library:
Insert → Load Family → DPA Family Library → 00_Architecture\\Doors\\ → DR-Single-Flush-Standard.rfa
Select 3 types from the catalogue dialog → OK

Step 4 — Place and populate:
Draw a test wall → place a door from the loaded family
Properties → Fire Rating → enter "60 min"
Properties → Mark → enter "D101"

Step 5 — Tag the door:
Annotate → Tag by Category → click the door
The DPA-Tag-Door should display "D101" ✓ (proves the tag, pre-loaded from the template, correctly reads Mark)

Step 6 — Check the schedule:
View → the Door Schedule should already exist if it was part of the template — or create one
Confirm: Fire Rating column shows "60 min" ✓ (proves the project parameter, the family parameter, and the GUID are all reconciled correctly)

Step 7 — Apply a fire filter:
If the Fire Compartmentation view template was part of the project template: switch to that view
The door should display in red (matching the 60-min fire filter) ✓ (proves the filter, the shared parameter, and the family are all connected through the single canonical GUID)

Step 8 — Export IFC:
File → Export → IFC using the DPC2025-IFC4-Standard setup (if preloaded in template)
Open the exported file in an IFC viewer
Confirm: the door shows Pset_DoorCommon.FireRating = "60 min" ✓ (proves the full chain from family → project → IFC export works end to end)

**IF ANY STEP FAILS:**
Trace back to the specific GUID mismatch or missing configuration. The most common failure point is Step 6 or 7 — schedules or filters referencing the OLD shared parameter GUID that was not fully reconciled in Step 3 of the Guide section.

**Document the Integration:**
Add to DPA-FamilyStandards-v1.0.txt — SECTION 16: Project Template Integration:

"INTEGRATION STATUS: VERIFIED [Date]
Canonical Shared Parameter File: C:\\DharrenPark\\FamilyLibrary\\_Standards\\SharedParameters\\DPA-SharedParameters-v1.0.txt
Both DPC-OfficeTemplate-v1.0.rte and all DPA Family Library content reference this single file.
Pre-loaded in project template: 5 annotation tags, profile library (optional).
End-to-end test PASSED: family → schedule → filter → IFC export chain confirmed working with reconciled GUIDs.
Any future shared parameter changes must be made to this ONE file and tested against both systems before release."

**Confirmation Checklist:**
- Shared parameter GUID comparison completed
- Reconciliation performed if GUIDs differed (orphaned project parameters removed and re-added)
- Annotation tags preloaded into DPC-OfficeTemplate-v1.0.rte
- End-to-end test completed: 8 steps, all passing
- Integration status documented in standards file

Move to Lesson 24 — Family Setup Capstone.`,
      },
    ],
    takeaways: [
      'Two systems built with the "same" parameter names can still be disconnected if they reference different shared parameter .txt files — names matching is not the same as GUIDs matching',
      'When reconciling, designate ONE canonical file and re-point both systems to it — any project parameters using the old file\'s GUIDs become orphaned and must be removed and re-added',
      'Preload annotation (tags) into the project template — content families (doors, windows) stay loaded per-project, the same way any office actually works',
      'The end-to-end test (place family → tag → schedule → filter → IFC export) is the only way to prove the two systems are genuinely connected, not just superficially similar',
      'Document the integration status explicitly — future team members need to know there is ONE canonical shared parameter file, not assume one exists',
    ],
    resource: {
      title: 'Autodesk Revit — Shared Parameters Across Projects and Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-shared-parameters-projects-families',
    },
    prev: 'rfs-22',
    next: 'rfs-24',
  },

  // ─────────────────────────────────────────────────────────
  // rfs-24: Family Setup Capstone
  // ─────────────────────────────────────────────────────────
  {
    id: 'rfs-24',
    num: 24,
    title: 'Family Setup Capstone',
    topic: 'Capstone',
    cat: 'advanced',
    readTime: '15 min',
    free: false,
    desc: 'Complete the final library-wide verification, run the full checklist across all 24 lessons, and conduct the formal handoff of the DPA Family Library Infrastructure — the complete system, ready for production use.',
    intro: `Twenty-three lessons ago, you opened a blank Revit family template with no plan beyond "build a door." Now you have a governed, versioned, quality-assured, fully integrated family library infrastructure — seven base templates, a complete tag set, a profile library, a shared parameter system, type catalogue standards, and verified integration with the project template from the companion course.

This final lesson runs the complete checklist across everything built, and performs the handoff — the moment this infrastructure becomes a living office asset rather than a course exercise.`,
    sections: [
      {
        title: 'EXPLAIN — What "Complete" Means for a Family Library',
        content: `A family library is never permanently finished — it grows as the office takes on new project types and new building elements. But it reaches a meaningful "v1.0 complete" milestone when:

**Structural completeness:** the folder architecture exists and is correctly organised, the naming convention is defined and applied, the templates folder has the core base templates for the most common family categories.

**Data completeness:** the shared parameter file covers the core data requirements (identity, fire/safety, room/space, FM asset, COBie), and is verified as the single canonical source connected to the project template.

**Governance completeness:** version control protocol is documented and has been exercised at least once, the submission/approval process is documented, the QA checklist exists and has been run against every family in the library, the library register accounts for every file.

**Integration completeness:** the family library and the project template have been tested together end-to-end and proven to work as one system.

**Documentation completeness:** the standards document (DPA-FamilyStandards-v1.0.txt) captures every decision made across all 24 lessons in a single reference any team member can consult.

This is the bar this course has built toward. The final lesson confirms every piece is in place.`,
      },
      {
        title: 'GUIDE — Running the Final Library-Wide Verification',
        content: `**STEP 1 — Verify the complete folder structure exists:**
Navigate through C:\\DharrenPark\\FamilyLibrary\\ and confirm every folder from Lesson 1's plan is present and populated as expected per Lesson 19's audit.

**STEP 2 — Verify the standards document is complete:**
Open DPA-FamilyStandards-v1.0.txt and confirm all 16 sections are present:
1. Template Selection Map
2. Reference Plane Standards
3. Parameter Naming Conventions
4. Subcategory Standards
5. Visibility Control Standards
6. Material Parameter Standards
7. (QA Checklist reference)
8. Annotation Tag Set
9. Structural Families
10. Nesting Standards
11. Shared Parameter Governance
12. Type Catalogue Standards
13. Version Control Protocol
14. Library Health Audit Protocol
15. Library Governance
16. Project Template Integration

If any section is missing or incomplete, complete it now before final sign-off.

**STEP 3 — Verify every family passes QA:**
Cross-check the Lesson 21 QA tracking spreadsheet — every family should show PASS with no outstanding remediation items.

**STEP 4 — Verify the Library Register is complete:**
Every family from the QA spreadsheet should have a corresponding entry in DPA-LibraryRegister.txt.

**STEP 5 — Verify the changelog is complete:**
DPA-Library-Changelog.txt should have an entry for every version of every family — including the v1.1 and v1.2 updates from Lessons 17 and 20.

**STEP 6 — Run the final end-to-end test (repeat of Lesson 23, as the final confirmation):**
Create one more fresh test project from DPC-OfficeTemplate-v1.0.rte.
Load 3 different family types from 3 different categories (e.g., a door, a window, a piece of equipment).
Place all 3, populate their shared parameters, tag all 3, verify all 3 appear correctly in their respective schedules, export IFC, verify all 3 export with correct Pset data.

This is the final proof that the entire system — template, library, governance, integration — functions as one coherent whole.

**STEP 7 — Prepare the handoff package:**
If this were a real office handoff to a team, gather:
- DPA-FamilyStandards-v1.0.txt (the master reference)
- DPA-FamilyQAChecklist-v1.0.txt
- DPA-LibraryRegister.txt
- DPA-Library-Changelog.txt
- DPA-LibraryAudit-Log.txt
- Access path to C:\\DharrenPark\\FamilyLibrary\\
- Confirmation that DPC-OfficeTemplate-v1.0.rte is integrated and tested`,
      },
      {
        title: 'PRACTICE — Complete the Master Checklist and Final Sign-Off',
        content: `Run through the complete 24-lesson capstone checklist.

**FOUNDATION (Lessons 1-8):**
- [ ] Family library folder structure created and populated
- [ ] DPA Template Selection Map documented (Section 1)
- [ ] Reference plane naming convention documented and applied (Section 2)
- [ ] Parameter naming convention documented and applied (Section 3)
- [ ] Subcategory standard documented and applied (Section 4)
- [ ] Visibility control matrix documented and applied (Section 5)
- [ ] Material parameter standard documented and applied (Section 6)
- [ ] DPA-FamilyQAChecklist-v1.0.txt created

**TEMPLATES AND CONTENT (Lessons 9-16):**
- [ ] DR-Door-Template.rft built, tested, QA passed
- [ ] WN-Window-Template.rft built, tested, QA passed
- [ ] FN-Furniture-Template.rft built, tested, QA passed (Two-Representation verified)
- [ ] ME-Equipment-Template.rft built, tested, QA passed (connectors verified)
- [ ] 5 AN-Tag- families built, tested, QA passed
- [ ] SC-StructColumn-Template.rft built, tested, QA passed (analytical model verified)
- [ ] 4 PR- profile families built, tested, QA passed
- [ ] GM-Handle-PushBar.rfa built, nested, parameter-linked, QA passed

**LIBRARY SYSTEMS (Lessons 17-24):**
- [ ] DPA-SharedParameters-v1.0.txt complete, all placeholder parameters converted
- [ ] Type catalogue standard established, DR-Single-Flush-Standard.rfa + .txt working
- [ ] Final naming convention applied to all files, folder structure audited
- [ ] Version control protocol established, exercised on door template (v1.0→v1.1→v1.2)
- [ ] Full library QA pass completed, file size benchmarks verified
- [ ] Library Register and governance model documented, formal publication performed
- [ ] Project template integration verified — shared parameter GUIDs reconciled, end-to-end test passed
- [ ] Final library-wide verification completed (this lesson)

**THE COMPLETE DPA FAMILY LIBRARY INFRASTRUCTURE:**

What exists now that did not exist 24 lessons ago:
- A complete, documented family creation standard (reference planes, parameters, subcategories, visibility, materials)
- 5 base family templates covering the most common architectural and MEP categories
- A complete annotation tag set matching the project drawing standard
- A structural column template with correctly preserved analytical model
- A core profile library
- A reusable nested component (door handle) demonstrating the nesting standard
- One canonical shared parameter file connecting families, tags, schedules, filters, and IFC export
- A type catalogue for the door family demonstrating the scalable content delivery pattern
- A versioned, changelogged, audited, governed library — not just a folder of files
- Verified integration with the companion Project Setup course's office template

**FINAL SIGN-OFF:**

Comments field for DPA-FamilyStandards-v1.0.txt — add closing entry:
"COURSE COMPLETE — [Today's Date]
24 lessons completed. Full DPA Family Library Infrastructure established and verified.
Integration with DPC-OfficeTemplate-v1.0.rte confirmed via end-to-end test.
This document and the associated library are now the production standard for [Your Firm Name].
Next steps: expand library content (additional door/window/furniture types), continue quarterly health audits per Section 14, onboard team members using this document as the reference."

This is what a professional family library infrastructure looks like — built once, but designed to keep working for years.`,
      },
    ],
    takeaways: [
      'A family library reaches "v1.0 complete" when it has structural, data, governance, integration, and documentation completeness — not when every possible family type has been built',
      'The final end-to-end test (place 3 families from 3 categories → tag → schedule → IFC export) is the proof that the whole system works together, not just its individual parts',
      'The handoff package consists of 5 documents: Standards, QA Checklist, Library Register, Changelog, and Audit Log — plus verified access to the library folder and confirmed template integration',
      'This course produced infrastructure, not just content — the templates, tags, and profiles built are starting points; the standards, governance, and integration are what make the library durable',
      'The work does not end at Lesson 24 — quarterly audits, ongoing submissions, and library growth continue indefinitely; this lesson marks the readiness milestone, not the finish line',
    ],
    resource: {
      title: 'Autodesk Revit — Family Editor Complete Reference',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-family-editor-complete-reference',
    },
    prev: 'rfs-23',
    next: null,
  },
];
