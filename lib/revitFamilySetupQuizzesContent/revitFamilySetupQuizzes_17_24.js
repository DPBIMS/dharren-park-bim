// ============================================================
// REVIT FAMILY SETUP — QUIZZES rfs-17 through rfs-24 (ADVANCED)
// File: lib/revitFamilySetupQuizzesContent/quizzes-17-24.js
// ============================================================

export const quizzes_17_24 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-17: Shared Parameter File for Families
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-17',
    title: 'Shared Parameter File for Families',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'The DPA standard requires ONE shared parameter file for the entire office, referenced by both family templates and project templates. Why is having two separate files (even with identical parameter names) a problem?',
        options: [
          'Two files take up more disk space than one',
          'Parameters with matching names but different file origins have different GUIDs — Revit does not recognize them as the same parameter for tags, schedules, or IFC mapping',
          'Revit limits projects to referencing only one shared parameter file total',
          'Two files cannot both be named with "SharedParameters" in the filename',
        ],
        answer: 'Parameters with matching names but different file origins have different GUIDs — Revit does not recognize them as the same parameter for tags, schedules, or IFC mapping',
      },
      {
        type: 'truefalse',
        question: 'Converting a parameter from regular to shared can be done in-place by simply checking a "Shared" checkbox in the parameter properties.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'After converting Fire Rating to a shared parameter in the door template, what is the correct verification sequence?',
        options: [
          'Check the file size only',
          'Test the full chain: enter a value → verify tag displays it → verify schedule shows it → verify filter matches it → verify IFC export includes it',
          'Only verify the parameter appears in the Family Types dialog',
          'Reload the family once and assume it works',
        ],
        answer: 'Test the full chain: enter a value → verify tag displays it → verify schedule shows it → verify filter matches it → verify IFC export includes it',
      },
      {
        type: 'mcq',
        question: 'Which group of parameters from the Window Template required conversion to shared parameters in this lesson?',
        options: [
          'Width and Height',
          'U-Value, SHGC, Visible Light Transmittance, and Acoustic Rating',
          'Frame Material and Glass Material',
          'Sill Height and Sill Projection',
        ],
        answer: 'U-Value, SHGC, Visible Light Transmittance, and Acoustic Rating',
      },
      {
        type: 'fillblank',
        question: 'The canonical DPA shared parameter file used across both family templates and project templates is named DPA-___-v1.0.txt.',
        answer: 'SharedParameters',
      },
      {
        type: 'truefalse',
        question: 'The DPA-SharedParameters-Families-v1.0.txt file built in this lesson should ideally be the SAME file as the project-level shared parameter file from the Project Setup course, not a separate file with duplicate parameter definitions.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A test door with Fire Rating = "60 min" is checked against the Fire Compartmentation filter from the Project Setup course. The wall does not turn red as expected. What is the most likely cause?',
        options: [
          'The filter only works on walls, not doors',
          'The Fire Rating parameter in the door family may still be referencing a different shared parameter file/GUID than the one the filter rule checks against',
          'The view needs to be set to a different scale',
          'Fire Rating must be an Instance parameter, not Type, for filters to work',
        ],
        answer: 'The Fire Rating parameter in the door family may still be referencing a different shared parameter file/GUID than the one the filter rule checks against',
      },
      {
        type: 'mcq',
        question: 'Manufacturer and Product Model parameters were added as shared parameters for which family template in this lesson?',
        options: [
          'Door Template only',
          'Window Template only',
          'Equipment Template',
          'Structural Column Template only',
        ],
        answer: 'Equipment Template',
      },
      {
        type: 'truefalse',
        question: 'IFC export testing in this lesson confirms that Pset_DoorCommon.FireRating is correctly populated in the exported file once Fire Rating is a properly configured shared parameter.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'To convert a parameter from regular to shared, what is the correct procedure?',
        options: [
          'Select the parameter in Family Types and check a "Convert to Shared" option',
          'Delete the regular parameter, then add a new parameter selecting "Shared Parameter" and browsing to the shared parameter file',
          'Export the parameter, then re-import it as shared',
          'Rename the parameter with a "Shared_" prefix',
        ],
        answer: 'Delete the regular parameter, then add a new parameter selecting "Shared Parameter" and browsing to the shared parameter file',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-18: Type Catalogue Standards
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-18',
    title: 'Type Catalogue Standards',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'The DPA door family has 28 total size/configuration combinations. Per the DPA type catalogue decision rule, what is the correct approach?',
        options: [
          'Embed all 28 types directly in the .rfa — Revit has no practical limit on embedded types',
          'Use a type catalogue since 28 exceeds the 12-type threshold — most projects will use only a subset',
          'Split into 28 separate family files, one per size',
          'Reduce the range to under 12 types to avoid needing a catalogue',
        ],
        answer: 'Use a type catalogue since 28 exceeds the 12-type threshold — most projects will use only a subset',
      },
      {
        type: 'truefalse',
        question: 'The type catalogue .txt file can have a different filename from its paired .rfa file as long as both are stored in the same folder.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The DPA Master file protocol states that updates should be made by:',
        options: [
          'Editing the catalogue .txt file directly, since it is faster than opening the family',
          'Editing the Master .rfa file (with all types embedded) first, then regenerating the catalogue-paired production family and .txt from it',
          'Editing both the catalogue .txt and the production .rfa simultaneously in two separate sessions',
          'Creating a new family from scratch for every update',
        ],
        answer: 'Editing the Master .rfa file (with all types embedded) first, then regenerating the catalogue-paired production family and .txt from it',
      },
      {
        type: 'mcq',
        question: 'A chair family has 3 colour variant types, all of which every project commonly uses together. Per the DPA decision rule, should this use a type catalogue?',
        options: [
          'Yes — any family with more than 1 type should use a catalogue',
          'No — 3 types is well under the 12-type threshold and all types are commonly used together, so embedding directly is correct',
          'Yes — color variants always require catalogues regardless of count',
          'It depends on the file size of the family, not the type count',
        ],
        answer: 'No — 3 types is well under the 12-type threshold and all types are commonly used together, so embedding directly is correct',
      },
      {
        type: 'fillblank',
        question: 'In the type catalogue header row format ",Width##LENGTH##millimeters", the parameter name must match the family parameter name exactly, including ___-sensitivity.',
        answer: 'case',
      },
      {
        type: 'truefalse',
        question: 'When loading a family with a paired type catalogue, Revit automatically loads all types into the project without prompting the user.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'A structural steel section family covering the full UC and UB range (40+ sections) always requires a type catalogue per DPA standard. Why "always" rather than depending on a threshold check?',
        options: [
          'Structural sections are a special exception with no threshold',
          'No single project ever uses the full standard steel section range — embedding 40+ types would make the family unnecessarily large for every project regardless of size',
          'Revit cannot embed more than 30 types in any family',
          'Structural families must always use catalogues for IFC compliance',
        ],
        answer: 'No single project ever uses the full standard steel section range — embedding 40+ types would make the family unnecessarily large for every project regardless of size',
      },
      {
        type: 'mcq',
        question: 'When testing the door type catalogue, selecting only 3 of the 14 available types in the Specify Types dialog should result in:',
        options: [
          'All 14 types loading regardless of selection',
          'Only the 3 selected types appearing in the Project Browser under that family',
          'An error, since type catalogues require selecting at least half the available types',
          'The family failing to load entirely',
        ],
        answer: 'Only the 3 selected types appearing in the Project Browser under that family',
      },
      {
        type: 'truefalse',
        question: 'The production family file paired with a type catalogue (e.g., DR-Single-Flush-Standard.rfa) should keep one default type embedded as a fallback, even though most types come from the catalogue.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The two DPA type catalogue decision criteria for "use a catalogue" are:',
        options: [
          'File size over 1MB, or built by a junior team member',
          'More than 12 types, AND/OR the type range covers a standard series where most projects use only a subset',
          'Category is Doors or Windows specifically',
          'The family has at least one Material parameter',
        ],
        answer: 'More than 12 types, AND/OR the type range covers a standard series where most projects use only a subset',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-19: Family Naming & Folder Structure
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-19',
    title: 'Family Naming & Folder Structure',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'The DPA category code for Mechanical Equipment is:',
        options: [
          'MQ',
          'ME',
          'MC',
          'EQ',
        ],
        answer: 'ME',
      },
      {
        type: 'truefalse',
        question: 'When a family with a paired type catalogue is renamed, only the .rfa file needs to be renamed — the .txt file can keep its old name since Revit tracks the pairing internally.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Why does the category code prefix (DR-, WN-, FN-, etc.) matter for folder browsing?',
        options: [
          'It is required by Revit for the file to load correctly',
          'It ensures files sort alphabetically by category in Windows Explorer and Revit\'s Load Family dialog, grouping related families together',
          'It reduces the file size of the family',
          'It determines which version of Revit can open the family',
        ],
        answer: 'It ensures files sort alphabetically by category in Windows Explorer and Revit\'s Load Family dialog, grouping related families together',
      },
      {
        type: 'mcq',
        question: 'Renaming a family file that is already loaded into an active project will:',
        options: [
          'Immediately break all placed instances of that family in the project',
          'Not affect already-loaded instances since Revit tracks families by internal ID, not filename — but the next fresh load from disk will show the new name',
          'Require the project to be completely rebuilt',
          'Automatically update all instances to show the new name in real time',
        ],
        answer: 'Not affect already-loaded instances since Revit tracks families by internal ID, not filename — but the next fresh load from disk will show the new name',
      },
      {
        type: 'fillblank',
        question: 'To make the DPA Family Library appear as a one-click destination in Revit\'s Load Family dialog, configure File → Options → File Locations → ___.',
        answer: 'Places',
      },
      {
        type: 'truefalse',
        question: 'Setting the Default Path for Family Template Files means File → New → Family will automatically open to the DPA templates folder instead of Revit\'s generic installation folder.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'DPA-Tag-Door.rfa was renamed in this lesson to follow the final naming convention. What is its correct final name?',
        options: [
          'TAG-Door-DPA.rfa',
          'AN-Tag-Door.rfa',
          'DR-Tag-Door.rfa',
          'Door-Tag-DPA.rfa',
        ],
        answer: 'AN-Tag-Door.rfa',
      },
      {
        type: 'mcq',
        question: 'ARCH-Skirting-Chamfer.rfa was renamed to follow the final DPA convention with category code PR (Profile). What is the corrected final name?',
        options: [
          'PR-Skirting-Chamfer.rfa',
          'ARCH-PR-Skirting.rfa',
          'Skirting-PR-Chamfer.rfa',
          'PR-Chamfer-Skirting.rfa',
        ],
        answer: 'PR-Skirting-Chamfer.rfa',
      },
      {
        type: 'truefalse',
        question: 'The audit spreadsheet created in this lesson tracks Current Filename, Final DPA Name, Category, Location, Renamed status, and Verified in Project status for every family.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'Why must files be re-tested in the DPC project after renaming, even though Revit tracks families by internal ID?',
        options: [
          'Renaming corrupts the family geometry and requires rebuilding',
          'To verify the family appears correctly under its new name when freshly loaded from disk, confirming the rename and folder relocation were both successful',
          'Revit requires a license re-validation after any file rename',
          'Re-testing is not actually necessary after renaming',
        ],
        answer: 'To verify the family appears correctly under its new name when freshly loaded from disk, confirming the rename and folder relocation were both successful',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-20: Version Control & Changelog
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-20',
    title: 'Version Control & Changelog',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A family creator deletes an existing parameter and renames another. Per DPA versioning standard, this requires which type of version increment?',
        options: [
          'Minor (v1.0 → v1.1) — parameter changes are always minor',
          'Major (v1.0 → v2.0) — deleting or renaming parameters can break existing project references and requires coordination with active projects',
          'No version change is needed for parameter edits',
          'A completely new family file with a different name',
        ],
        answer: 'Major (v1.0 → v2.0) — deleting or renaming parameters can break existing project references and requires coordination with active projects',
      },
      {
        type: 'truefalse',
        question: 'The DPA standard allows version numbers to be included in family filenames for clarity, such as DR-Door-Template-v1.2.rft.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Adding a new parameter to a family (without removing or renaming any existing parameter) is classified as which version type?',
        options: [
          'Major version increment',
          'Minor version increment — safe addition that does not break existing project references',
          'Requires no changelog entry since it is a small change',
          'Requires creating a parallel family with a different name',
        ],
        answer: 'Minor version increment — safe addition that does not break existing project references',
      },
      {
        type: 'mcq',
        question: 'Step 5 of the 9-step update workflow is "Archive the previous version before saving the update." What is the correct archive filename format?',
        options: [
          '[FamilyName]-OLD.rfa',
          '[FamilyName]-v[Version].rfa — e.g., DR-Door-Template-v1.1.rft',
          '[FamilyName]-Backup-[Date].rfa',
          'Archive files do not need their own filename — they keep the original name',
        ],
        answer: '[FamilyName]-v[Version].rfa — e.g., DR-Door-Template-v1.1.rft',
      },
      {
        type: 'fillblank',
        question: 'The master record tracking every change to every family across the entire DPA library is named DPA-Library-___.txt.',
        answer: 'Changelog',
      },
      {
        type: 'truefalse',
        question: 'Each individual family should also maintain its own micro-changelog in its Comments field, separate from the master library changelog.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'In this lesson, the Door Template was updated from v1.1 to v1.2 by adding a Hardware Set parameter. Why is this a Minor rather than Major update?',
        options: [
          'Adding a parameter is always automatically classified as Major',
          'Adding a new parameter without removing or renaming existing ones does not break existing project references — projects can reload safely',
          'Minor updates are determined by the file size change, not the type of edit',
          'The version classification depends on which lesson number the change occurred in',
        ],
        answer: 'Adding a new parameter without removing or renaming existing ones does not break existing project references — projects can reload safely',
      },
      {
        type: 'mcq',
        question: 'Who has write access to update files in 05_Templates/Current/ under the DPA governance model?',
        options: [
          'Any team member who has completed family creation training',
          'Only the BIM Manager (or designated Family Manager)',
          'All architects on the current active project',
          'Anyone with a Revit license',
        ],
        answer: 'Only the BIM Manager (or designated Family Manager)',
      },
      {
        type: 'truefalse',
        question: 'For a Minor version update, the team must be formally notified with urgent action required before anyone reloads the affected family.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The correct order of the version update workflow is:',
        options: [
          'Save to Current → make changes → archive previous → test → update changelog',
          'Open current → make changes → test in project → update Comments → archive previous → save to Current → update master changelog → notify if major',
          'Update changelog → make changes → test → save',
          'Archive previous → delete current → build new from scratch → save with old filename',
        ],
        answer: 'Open current → make changes → test in project → update Comments → archive previous → save to Current → update master changelog → notify if major',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-21: Family QA & Health Checks
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-21',
    title: 'Family QA & Health Checks',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Two different team members independently build families that perform the same function (e.g., two different WC fixture families). This is an example of which library-wide health problem?',
        options: [
          'File size accumulation',
          'Duplicate functionality — confuses team members about which family to use and is only caught by library-wide auditing, not single-family QA',
          'Broken shared parameter links',
          'Orphaned files',
        ],
        answer: 'Duplicate functionality — confuses team members about which family to use and is only caught by library-wide auditing, not single-family QA',
      },
      {
        type: 'truefalse',
        question: 'The DPA Library Health Audit Cycle includes a triggered audit whenever the office upgrades to a new Revit version.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The DPA file size benchmark for complex families (curtain panels, detailed structural, multi-connector MEP) is:',
        options: [
          'Under 300KB',
          'Under 800KB',
          'Under 2MB',
          'Under 10MB',
        ],
        answer: 'Under 2MB',
      },
      {
        type: 'mcq',
        question: 'The "Cross-Family Consistency Check" verifies what specifically?',
        options: [
          'That all families have the same file size',
          'That common parameters like Description and Manufacturer use identical names AND reference the same shared parameter GUID across every family in the library',
          'That all families use the same category',
          'That all families were built by the same person',
        ],
        answer: 'That common parameters like Description and Manufacturer use identical names AND reference the same shared parameter GUID across every family in the library',
      },
      {
        type: 'fillblank',
        question: 'The DPA Library Health Audit Schedule requires a quarterly spot-check covering ___% of the library, rotating which families are checked.',
        answer: '20',
      },
      {
        type: 'truefalse',
        question: 'A family that passes Section 6 (Project Testing) of the QA checklist is exempt from future re-auditing since it has already proven itself in a live project.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Quality drift is described in this lesson as:',
        options: [
          'A technical Revit bug that corrupts family geometry over time',
          'The phenomenon where early-built families meet every standard carefully, but later families built under deadline pressure skip checklist steps, gradually lowering overall library quality without anyone noticing',
          'The natural degradation of file size limits as Revit versions update',
          'A problem only affecting structural families',
        ],
        answer: 'The phenomenon where early-built families meet every standard carefully, but later families built under deadline pressure skip checklist steps, gradually lowering overall library quality without anyone noticing',
      },
      {
        type: 'mcq',
        question: 'Where is the DPA-LibraryAudit-Log.txt stored?',
        options: [
          'C:\\DharrenPark\\FamilyLibrary\\05_Templates\\Current\\',
          'C:\\DharrenPark\\FamilyLibrary\\_Standards\\QAChecklists\\',
          'C:\\DharrenPark\\Project\\BIM\\WIP\\DPA\\ARCH\\',
          'C:\\DharrenPark\\FamilyLibrary\\00_Architecture\\Doors\\',
        ],
        answer: 'C:\\DharrenPark\\FamilyLibrary\\_Standards\\QAChecklists\\',
      },
      {
        type: 'truefalse',
        question: 'Performance accumulation means that even if no single family exceeds its file size target, the cumulative weight of many slightly-oversized families can still make every new project slower to start.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'An annual full library audit differs from a quarterly spot-check in that:',
        options: [
          'The annual audit only checks file sizes, while quarterly checks full QA',
          'The annual audit re-tests every family in the library against the current QA checklist, while quarterly checks rotate through only 20%',
          'The annual audit is performed by external consultants, while quarterly is internal',
          'There is no difference — both cover the same scope',
        ],
        answer: 'The annual audit re-tests every family in the library against the current QA checklist, while quarterly checks rotate through only 20%',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-22: Publishing to the Library
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-22',
    title: 'Publishing to the Library',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Under the DPA governance model, what access level does a regular team member (not the BIM Manager) have to the production library folders?',
        options: [
          'Full write access — any team member can add or modify files directly',
          'Read/load access only — they can browse and use families but cannot add, modify, rename, or remove library files directly; they submit proposals instead',
          'No access at all — only the BIM Manager can even view the library',
          'Write access only to the Archive folders',
        ],
        answer: 'Read/load access only — they can browse and use families but cannot add, modify, rename, or remove library files directly; they submit proposals instead',
      },
      {
        type: 'truefalse',
        question: 'The Family Submission Process requires the creator to run the full DPA QA Checklist themselves before submitting to the BIM Manager for review.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The Library Register is distinct from the Changelog and Audit Log. What specific question does the Library Register answer?',
        options: [
          '"What changed and when?" (this is the Changelog\'s purpose)',
          '"Is the library healthy?" (this is the Audit Log\'s purpose)',
          '"What do we have, and who is responsible for it?"',
          '"How much does each family cost to build?"',
        ],
        answer: '"What do we have, and who is responsible for it?"',
      },
      {
        type: 'mcq',
        question: 'When the BIM Manager reviews a submitted family, which three checks does the review process include?',
        options: [
          'File size, color scheme, and font choice',
          'Duplication check against existing library, independent QA checklist spot-check, and naming convention compliance',
          'Manufacturer reputation, cost estimate, and delivery timeline',
          'Revit version compatibility, license validation, and backup status',
        ],
        answer: 'Duplication check against existing library, independent QA checklist spot-check, and naming convention compliance',
      },
      {
        type: 'fillblank',
        question: 'After a family is approved and published, the BIM Manager updates three records: the changelog, the team notification, and the ___ ___.',
        answer: 'Library Register',
      },
      {
        type: 'truefalse',
        question: 'A submitted family can be rejected if it duplicates an existing library family — in this case, the creator should be pointed to the existing alternative.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'Why does this lesson have the course author perform the formal submission/approval process retroactively, even while working solo?',
        options: [
          'It is a mandatory Revit licensing requirement',
          'It builds the governance habit and produces complete documentation that will scale correctly once a real team is using the library',
          'Retroactive submission is faster than doing it during each lesson',
          'It is only a formality with no practical benefit',
        ],
        answer: 'It builds the governance habit and produces complete documentation that will scale correctly once a real team is using the library',
      },
      {
        type: 'mcq',
        question: 'What should happen to "-WIP" named working files once their final renamed versions have been published to the library?',
        options: [
          'They should remain in the active library folders alongside the final versions for reference',
          'They should be archived or deleted — a clean library has no ambiguity between official files and drafts',
          'They should be renamed to "-FINAL" instead of being removed',
          'WIP files automatically convert to production files when Revit is restarted',
        ],
        answer: 'They should be archived or deleted — a clean library has no ambiguity between official files and drafts',
      },
      {
        type: 'truefalse',
        question: 'The notification protocol after a family is published only needs to include the family name — no location, changelog reference, or access instructions are necessary.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Three possible outcomes of the BIM Manager review of a submitted family are:',
        options: [
          'Approved, Revisions Needed, Rejected',
          'Pass, Fail, Retry',
          'Published, Unpublished, Archived',
          'Accepted, Pending, Closed',
        ],
        answer: 'Approved, Revisions Needed, Rejected',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-23: Integrating with the Project Template
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-23',
    title: 'Integrating with the Project Template',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A Fire Rating parameter exists in both the project template (from Project Setup ps-17) and the family library (from rfs-17). They were created in two separate shared parameter files. What is the consequence?',
        options: [
          'No consequence — Revit recognizes parameters by name, not by file origin',
          'The two "Fire Rating" parameters have different GUIDs internally — tags, schedules, and filters relying on one will not recognize data from the other, even though both display as "Fire Rating"',
          'Revit automatically merges the two files when both are loaded',
          'Only the project-level parameter will function; the family-level one is ignored',
        ],
        answer: 'The two "Fire Rating" parameters have different GUIDs internally — tags, schedules, and filters relying on one will not recognize data from the other, even though both display as "Fire Rating"',
      },
      {
        type: 'truefalse',
        question: 'When reconciling two different shared parameter files into one canonical source, any project parameters already added using the old file\'s GUIDs continue to function correctly without any further action.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'After re-pointing a project to a new canonical shared parameter file, what must be done with previously-added project parameters that used the old file?',
        options: [
          'Nothing — they automatically update to the new GUIDs',
          'They must be removed from Project Parameters and re-added from the new canonical file with the same category assignments as before',
          'The entire project must be rebuilt from scratch',
          'Only the parameter names need to be retyped manually in each schedule',
        ],
        answer: 'They must be removed from Project Parameters and re-added from the new canonical file with the same category assignments as before',
      },
      {
        type: 'mcq',
        question: 'What content should be preloaded into the project template (DPC-OfficeTemplate-v1.0.rte) versus loaded per-project?',
        options: [
          'All content families (doors, windows, furniture) should be preloaded; nothing is loaded per-project',
          'Annotation tags (and optionally profiles) should be preloaded; content families like doors and windows are loaded per-project as needed',
          'Nothing should ever be preloaded — everything is loaded per-project for maximum flexibility',
          'Only the titleblock should be in the template; tags are always loaded manually',
        ],
        answer: 'Annotation tags (and optionally profiles) should be preloaded; content families like doors and windows are loaded per-project as needed',
      },
      {
        type: 'fillblank',
        question: 'The most common integration failure point in real BIM practice is two systems with matching parameter ___ but different shared parameter file origins (and therefore different GUIDs).',
        answer: 'names',
      },
      {
        type: 'truefalse',
        question: 'The end-to-end integration test in this lesson includes placing a family, tagging it, checking it appears in a schedule, applying a filter, and exporting IFC to verify the complete chain works.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'If the end-to-end integration test fails at the schedule or filter step (Step 6 or 7), what is the most likely cause?',
        options: [
          'The test project was saved with the wrong file extension',
          'A schedule or filter is referencing the OLD shared parameter GUID that was not fully reconciled during the canonical file consolidation',
          'The titleblock was not loaded correctly',
          'The IFC export settings need to be changed to IFC 2x3',
        ],
        answer: 'A schedule or filter is referencing the OLD shared parameter GUID that was not fully reconciled during the canonical file consolidation',
      },
      {
        type: 'mcq',
        question: 'Comparing two shared parameter .txt files in a text editor, what specific data field proves whether two "Fire Rating" entries are truly the same parameter?',
        options: [
          'The parameter name spelling',
          'The GUID (a long unique identifier string) associated with each parameter entry',
          'The file size of each .txt file',
          'The date the file was last modified',
        ],
        answer: 'The GUID (a long unique identifier string) associated with each parameter entry',
      },
      {
        type: 'truefalse',
        question: 'Once the canonical shared parameter file is established and reconciled, any FUTURE changes to shared parameters should be made to this one file and tested against both the project template and family library before release.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'Why is "Manage → Shared Parameters → Browse → select canonical file" performed on the project template, not just on individual families?',
        options: [
          'It is a cosmetic setting with no functional effect',
          'The project itself must reference the same canonical file so that Project Parameters (used in schedules and filters) share GUIDs with the family parameters being scheduled and filtered',
          'This step only affects which units are displayed in the project',
          'Templates do not support shared parameters at all — this step is unnecessary',
        ],
        answer: 'The project itself must reference the same canonical file so that Project Parameters (used in schedules and filters) share GUIDs with the family parameters being scheduled and filtered',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rfs-24: Family Setup Capstone
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rfs-24',
    title: 'Family Setup Capstone',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'According to this capstone lesson, a family library reaches "v1.0 complete" when it achieves five types of completeness. What are they?',
        options: [
          'Visual, financial, legal, marketing, and technical completeness',
          'Structural, data, governance, integration, and documentation completeness',
          'Beginner, intermediate, advanced, expert, and master completeness',
          'Architecture, structure, MEP, annotation, and profile completeness',
        ],
        answer: 'Structural, data, governance, integration, and documentation completeness',
      },
      {
        type: 'truefalse',
        question: 'A family library reaching "v1.0 complete" means every possible family type the office will ever need has been built.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'The final end-to-end test in this capstone lesson involves:',
        options: [
          'Opening Revit and confirming it launches without errors',
          'Loading 3 different family types from 3 different categories, placing them, populating shared parameters, tagging, verifying schedules, and exporting IFC with correct Pset data',
          'Counting the total number of files in the library folder',
          'Checking that the standards document has at least 1000 words',
        ],
        answer: 'Loading 3 different family types from 3 different categories, placing them, populating shared parameters, tagging, verifying schedules, and exporting IFC with correct Pset data',
      },
      {
        type: 'mcq',
        question: 'The handoff package described in this lesson consists of which five documents?',
        options: [
          'Invoice, contract, timesheet, budget, and schedule',
          'Standards document, QA Checklist, Library Register, Changelog, and Audit Log',
          'Five sample family files representing each category',
          'Five PowerPoint presentations explaining each template',
        ],
        answer: 'Standards document, QA Checklist, Library Register, Changelog, and Audit Log',
      },
      {
        type: 'fillblank',
        question: 'The standards document DPA-FamilyStandards-v1.0.txt accumulated content across all 24 lessons and should contain a total of ___ sections by the end of the course.',
        answer: '16',
      },
      {
        type: 'truefalse',
        question: 'This course produced infrastructure (templates, standards, governance, integration) rather than a finished, exhaustive content library — the templates and tags built are starting points for ongoing expansion.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'Per this lesson, what is the relationship between course completion and the library\'s lifecycle?',
        options: [
          'Course completion marks the finish line — no further work on the library is expected',
          'Course completion marks a readiness milestone — quarterly audits, ongoing family submissions, and library growth continue indefinitely afterward',
          'The library should be rebuilt from scratch every year regardless of this course\'s output',
          'Course completion means the library can no longer be modified',
        ],
        answer: 'Course completion marks a readiness milestone — quarterly audits, ongoing family submissions, and library growth continue indefinitely afterward',
      },
      {
        type: 'mcq',
        question: 'Which deliverable from the Intermediate tier specifically demonstrates the DPA nesting standard in action?',
        options: [
          'DR-Single-Flush-Standard.rfa (the type catalogue door)',
          'GM-Handle-PushBar.rfa nested into DR-Door-Template.rft with Handle Length parameter passing from host to nested component',
          'AN-Tag-Room.rfa (the room tag family)',
          'PR-Mullion-Rectangular.rfa (the mullion profile)',
        ],
        answer: 'GM-Handle-PushBar.rfa nested into DR-Door-Template.rft with Handle Length parameter passing from host to nested component',
      },
      {
        type: 'truefalse',
        question: 'The integration verification performed in Lesson 23 (reconciling shared parameter GUIDs between the project template and family library) is reconfirmed as part of the final capstone verification in this lesson.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The closing entry in DPA-FamilyStandards-v1.0.txt at course completion should communicate:',
        options: [
          'Only the date the course was completed, with no further detail',
          'Confirmation the course is complete, integration status with the project template, and next steps (library expansion, ongoing audits, team onboarding using this document)',
          'A list of every Revit keyboard shortcut used during the course',
          'The total file size of the entire library in megabytes',
        ],
        answer: 'Confirmation the course is complete, integration status with the project template, and next steps (library expansion, ongoing audits, team onboarding using this document)',
      },
    ],
  },
];
