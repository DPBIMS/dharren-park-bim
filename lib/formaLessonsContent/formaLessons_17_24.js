// ============================================================
// AUTODESK FORMA — LESSONS forma-17 through forma-24 (ADVANCED)
// Section: BIM Integration & Handoff
// File: lib/formaLessonsContent/formaLessons_17_24.js
// Index: lib/formaLessonsData.js
// ============================================================

export const lessons_17_24 = [

  // ============================================================
  // LESSON FORMA-17 — Connecting Forma to Revit
  // ============================================================
  {
    id: 'forma-17', num: '17',
    title: 'Connecting Forma to Revit — The Forma Plugin',
    topic: 'Revit Integration', cat: 'advanced', readTime: '10 min', free: false,
    desc: 'Install and use the Autodesk Forma plugin for Revit to bridge early-stage massing with detailed BIM design.',
    intro: `The Forma-to-Revit connection is where early-stage environmental intelligence becomes the foundation for detailed BIM design. Instead of redrawing massing manually in Revit after it has been validated in Forma, the Forma Revit Plugin imports geometry directly — preserving the validated massing, floor levels, and area data as the starting point for the detailed model. This lesson covers the plugin, its capabilities, and how to use it to manage the Forma-to-Revit handoff cleanly.`,
    sections: [
      {
        id: 's1', heading: 'What the Forma Revit Plugin Does', level: 'h2',
        content: `The **Autodesk Forma Revit Plugin** is a Revit add-in that appears as a dedicated **Forma** tab in the Revit ribbon after installation. It enables two core workflows:

1. **Forma → Revit**: Import validated massing volumes and floor levels from a Forma proposal into a Revit project as conceptual masses or generic model families
2. **Revit → Forma**: Push updated Revit geometry back to Forma so environmental analysis continues against the more detailed design

This two-way connection allows the design team to cycle between early-stage analysis in Forma and detailed design in Revit throughout schematic and design development phases, rather than treating Forma as a one-time concept tool.`,
        formula: { label: 'Plugin Workflow', text: 'Forma (concept + analysis) ↔ Revit (detail + documentation) — a circular, iterative handoff' },
      },
      {
        id: 's2', heading: 'Installing the Plugin', level: 'h2',
        content: `The Forma Revit Plugin must be installed separately from Forma itself — it is a desktop add-in for Revit, available through the Autodesk App Store or Autodesk Desktop App.`,
        subsections: [
          {
            heading: 'Installation Steps',
            items: [
              'Close Revit completely before installing',
              'Go to the Autodesk App Store and search for "Autodesk Forma"',
              'Download the installer for your Revit version (2023, 2024, or 2025)',
              'Run the installer — it requires administrator permissions',
              'Reopen Revit — a new **Forma** tab should appear in the ribbon',
              'Sign in to the plugin using your Autodesk ID (the same account used for Forma online)',
              'If the tab does not appear, check Add-Ins → External Tools → verify the plugin is listed',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Connecting to a Forma Project', level: 'h2',
        content: `Once installed, the plugin allows you to browse and connect to any Forma project you have access to from within Revit.`,
        code: {
          label: 'Connecting to a Project',
          lines: [
            'In Revit: Forma tab → Connect',
            '→ A panel opens listing all Forma projects in your workspace',
            '→ Select the project you want to work with',
            '→ The plugin shows all proposals within that project',
            '→ Select the proposal you want to import',
            '',
            'The plugin maintains the connection between Revit and the',
            'selected Forma project — you can refresh, push, or pull',
            'geometry at any time without reconnecting.',
          ],
        },
      },
      {
        id: 's4', heading: 'Importing Forma Geometry into Revit', level: 'h2',
        content: `When you import from Forma, the plugin brings massing volumes into Revit as **Conceptual Mass** objects — the same mass type used by Revit's own massing tools. This means the full Revit massing workflow applies: you can add mass floors, generate room/area volumes, and eventually replace masses with full building model elements.`,
        items: [
          'Forma tab → Import → select the geometry elements to bring in (all volumes or specific ones)',
          'Forma geometry lands at the correct geographic position in Revit if shared coordinates are aligned',
          'Each Forma building volume imports as a separate Revit mass element in its own category',
          'Floor levels from Forma (based on floor count and floor height) translate to Revit mass floors automatically',
          'Use "Mass Floors" in Revit to verify the floor count and GFA matches what was set in Forma',
          'After import, use Revit\'s "Floor by Face" and "Wall by Face" tools to begin generating model elements from the mass faces',
        ],
      },
      {
        id: 's5', heading: 'Coordinating Shared Coordinates', level: 'h2',
        content: `For the Forma-to-Revit handoff to land in the correct location in the Revit model, **shared coordinates** between the two systems must be aligned. This is the single most common source of problems in Forma-Revit workflows.`,
        subsections: [
          {
            heading: 'Coordinate Alignment Steps',
            items: [
              'In Revit, ensure the project has a Survey Point set to the correct geographic location',
              'The Forma project is geolocated at its real-world coordinates — Revit must match this origin',
              'In the Forma plugin, check the coordinate mapping options before importing',
              'If geometry imports significantly offset from where expected, the Survey Point and Forma origin are misaligned',
              'Fix coordinate misalignment in Revit (Manage tab → Coordinates → Acquire Coordinates from a known geo-located linked file) rather than in Forma',
              'Once coordinates are aligned, all future imports and pushes will land correctly',
            ],
          },
        ],
        formula: { label: 'Coordinate Rule', text: 'Fix coordinate misalignment before importing geometry — trying to correct it after import creates more problems than it solves' },
      },
      {
        id: 's6', heading: 'Working with the Forma Tab in Revit', level: 'h2',
        content: `The Forma tab in Revit provides ongoing access to the connected project throughout the design process, not just at the initial import stage.`,
        items: [
          '**Refresh** — pulls the latest Forma geometry without re-importing; updates any changes made in Forma since the last refresh',
          '**Push to Forma** — sends updated Revit geometry back to Forma for re-analysis (covered in the next lesson)',
          '**Compare** — shows the differences between the current Revit model and the connected Forma proposal',
          '**Analysis** — opens a window showing current analysis results from Forma without leaving Revit',
          '**Disconnect** — breaks the link to the current Forma project (use when permanently handing off to a separate discipline team)',
        ],
      },
    ],
    takeaways: [
      'The Forma Revit Plugin enables two-way geometry exchange between Forma (early analysis) and Revit (detailed design).',
      'Install the plugin via Autodesk App Store or Autodesk Desktop App; it requires Revit 2023, 2024, or 2025.',
      'Connect to a Forma project from within Revit using the Forma tab → Connect; select the project and active proposal.',
      'Forma geometry imports as Revit Conceptual Mass objects; floor levels from Forma translate to Revit mass floors.',
      'Shared coordinates must be aligned between Forma and Revit before importing; misalignment causes geometry to land in the wrong location.',
      'The Forma tab in Revit provides ongoing Refresh, Push, Compare, and Analysis functions throughout the design process.',
    ],
    resource: { label: 'Forma Revit Plugin Setup Guide', type: 'PDF' },
    quiz: { label: 'Forma Revit Plugin Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-16', title: 'Presenting Analysis to Clients & Design Teams' },
    next: { id: 'forma-18', title: 'Importing Forma Geometry into a Revit Project' },
  },

  // ============================================================
  // LESSON FORMA-18 — Importing Forma Geometry into Revit
  // ============================================================
  {
    id: 'forma-18', num: '18',
    title: 'Importing Forma Geometry into a Revit Project',
    topic: 'Revit Integration', cat: 'advanced', readTime: '10 min', free: false,
    desc: 'Take a validated Forma massing proposal and convert it into a working Revit conceptual mass for detailed design.',
    intro: `Importing geometry from Forma into Revit is not just a file transfer — it is the transition from environmental analysis to architectural documentation. Done correctly, the Forma massing becomes the armature that the Revit model is built around: floors generated from mass faces, walls placed by face, areas calculated from mass floors. Done carelessly, the imported geometry becomes an obstacle that the Revit team works around instead of from. This lesson covers the correct workflow in detail.`,
    sections: [
      {
        id: 's1', heading: 'Before You Import — Pre-Import Checklist', level: 'h2',
        content: `A few minutes of preparation before importing saves significant rework in Revit.`,
        code: {
          label: 'Pre-Import Checklist',
          lines: [
            '✓ Forma proposal is locked (or snapshotted) — geometry is stable',
            '✓ Floor heights are correct in Forma (3m residential, 3.5m+ commercial)',
            '✓ Building use types are set correctly in each Forma volume',
            '✓ Site boundary is accurate — GFA and coverage metrics confirmed',
            '✓ Revit project is set up with correct levels and survey point',
            '✓ Revit shared coordinates are aligned to the same geographic',
            '  origin as the Forma project',
            '✓ Revit template is the firm\'s standard template, not blank',
            '✓ Revit project units match Forma (metric/imperial)',
          ],
        },
      },
      {
        id: 's2', heading: 'Import Options and What They Create', level: 'h2',
        content: `The Forma plugin offers options for what type of Revit geometry to create during import. The correct choice depends on what the Revit team intends to do with the imported geometry.`,
        subsections: [
          {
            heading: 'Import Type Options',
            items: [
              '**Conceptual Mass** — the standard choice; creates a Revit In-Place Mass from each Forma volume; supports "Floor by Face," "Roof by Face," and "Wall by Face" tools',
              '**Generic Model** — creates a generic loadable family; use if the mass needs to be shared across multiple Revit models',
              '**Direct Shape** — imports as a non-editable direct shape; useful for context buildings that need to be present but not modified',
              'For your own proposed buildings, always use **Conceptual Mass** — this enables the standard Revit massing-to-elements workflow',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'The Revit Massing Workflow After Import', level: 'h2',
        content: `After importing, the massing volumes sit in Revit as conceptual masses. The next step is to generate actual building model elements from those mass faces using Revit's massing tools.`,
        items: [
          '**Massing & Site tab → Mass Floors** — adds floor plates at every level for each mass; displays GFA per floor and total GFA',
          '**Architecture tab → Floor by Face** — generates a floor element on each mass floor face; creates actual floor objects with area schedule data',
          '**Architecture tab → Wall by Face** — generates wall elements on selected mass faces; the walls follow the mass face geometry exactly',
          '**Architecture tab → Roof by Face** — generates a roof element on the top face of the mass',
          'At this point the conceptual mass can be hidden (or deleted if no longer needed) — the model elements derived from it remain',
          'The derived model elements are editable Revit elements: you can add wall types, adjust floor boundaries, modify roof pitches from this point',
        ],
        formula: { label: 'Revit Massing Rule', text: 'Mass → Mass Floors → Floor by Face → Wall by Face = the four-step Revit massing to model conversion' },
      },
      {
        id: 's4', heading: 'Levels and Linking', level: 'h2',
        content: `The Forma import creates geometry based on the floor count and floor height set in Forma. For the Revit levels to correspond correctly, the Revit Level datums should be set up to match the Forma floor levels before importing.`,
        items: [
          'Set up Revit Levels at the same heights as the Forma floor levels before importing massing',
          'If Revit levels already exist but do not match Forma floor heights, the mass floors will not align with existing levels',
          'Use the Forma plugin\'s mass floor data to verify the correct number of levels and their elevations',
          'After generating Mass Floors from the imported mass, right-click any mass floor to see its associated Revit Level',
          'If levels are misaligned, adjust Revit Levels to match mass floor elevations — do not move the mass',
        ],
      },
      {
        id: 's5', heading: 'Multi-Building Imports', level: 'h2',
        content: `Most Forma proposals contain multiple building volumes. Each imports as a separate mass element in Revit, allowing individual control over each building's massing and the elements derived from it.`,
        subsections: [
          {
            heading: 'Multi-Building Workflow',
            items: [
              'Import all buildings in one operation or individually — the plugin supports both',
              'Each Forma building volume imports with its original name from Forma — use clear names in Forma to keep Revit organized',
              'In Revit, each mass appears as a separate element in the Selection Tree and can be independently hidden, moved, or edited',
              'Generate mass floors for each mass separately if they have different floor heights or uses',
              'Podium-and-tower typologies: import the podium and tower as separate masses, then derive floor and wall elements independently',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Verifying GFA After Import', level: 'h2',
        content: `After importing and generating mass floors, always cross-check the GFA in Revit against the GFA shown in Forma. These should match within a small tolerance (typically < 2%). If they differ significantly, investigate before proceeding.`,
        items: [
          'In Revit: Massing & Site tab → Show Mass → select masses → properties shows floor area per mass',
          'Create a Mass Floor Schedule in Revit (Schedules & Quantities → Mass Floor) to see GFA per level',
          'Compare against the GFA shown in the Forma top bar for the same proposal',
          'Common causes of GFA discrepancy: floor height mismatch, different floor count, rounding differences in footprint area',
          'If GFA differs by more than 5%, investigate and resolve before using Revit for area schedule submissions',
        ],
      },
    ],
    takeaways: [
      'Complete the pre-import checklist before every import: stable Forma geometry, correct floor heights, aligned shared coordinates, standard Revit template.',
      'Import Forma building volumes as Conceptual Mass in Revit to enable the standard Mass Floors → Floor by Face → Wall by Face workflow.',
      'Set up Revit Levels to match Forma floor heights before importing so mass floors align with existing datum planes.',
      'Each Forma building volume imports as a separate mass; clear naming in Forma keeps the Revit model organised.',
      'After import, generate Mass Floors and derive Floor, Wall, and Roof elements using Revit\'s "by Face" tools.',
      'Always verify Revit GFA against Forma GFA after import; significant discrepancies indicate a level or footprint mismatch that must be resolved.',
    ],
    resource: { label: 'Forma to Revit Import Workflow Reference', type: 'PDF' },
    quiz: { label: 'Importing Forma into Revit Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-17', title: 'Connecting Forma to Revit — The Forma Plugin' },
    next: { id: 'forma-19', title: 'Pushing Revit Design Updates Back to Forma' },
  },

  // ============================================================
  // LESSON FORMA-19 — Pushing Revit Updates Back to Forma
  // ============================================================
  {
    id: 'forma-19', num: '19',
    title: 'Pushing Revit Design Updates Back to Forma',
    topic: 'Revit Integration', cat: 'advanced', readTime: '9 min', free: false,
    desc: 'Use the Forma Revit Plugin to send updated Revit geometry back to Forma and re-run environmental analysis against the more developed design.',
    intro: `Concept design does not stop the moment Revit opens. As detailed design progresses, massing changes — a setback is adjusted by 2m, a rooftop plant room is added, a floor is lost to planning negotiations. Each of these changes potentially affects the environmental analysis that informed the original concept approval. The Forma plugin's push functionality means you do not have to choose between maintaining analysis integrity and progressing the detailed model: you can keep both current.`,
    sections: [
      {
        id: 's1', heading: 'Why Push Back to Forma?', level: 'h2',
        content: `The value of pushing Revit updates back to Forma lies in maintaining a **living analysis model** that tracks the real design state, not just the concept state.

Without this workflow, a team might:
- Approve a massing in Forma with a solar hours target of 4 hrs/day
- Proceed to detailed design in Revit
- Add a 6-storey rooftop addition that shadows the courtyard
- Submit a planning application still referencing the concept-stage solar analysis

With the push workflow, the Revit team pushes updated geometry to Forma after any significant massing change, re-runs the affected analyses, and maintains a current performance record against the approved targets.`,
        formula: { label: 'Continuous Analysis Principle', text: 'Any massing change in Revit that affects building height, footprint, or orientation → push to Forma → re-run analysis' },
      },
      {
        id: 's2', heading: 'What Can Be Pushed to Forma', level: 'h2',
        content: `The push function sends Revit geometry back to Forma as updated building volumes. It replaces (or supplements) the original Forma massing with the current Revit state.`,
        items: [
          'Revit conceptual masses that originated from a Forma import',
          'Revit masses created independently in Revit (not originally from Forma)',
          'Revit structural, architectural, or MEP elements cannot be pushed as massing — only mass objects',
          'If the design has progressed to full Revit model elements (walls, floors), you may need to re-create a simplified massing representation to push back',
          'The plugin identifies which elements are linked to the original Forma proposal and offers to update them',
        ],
      },
      {
        id: 's3', heading: 'The Push Workflow', level: 'h2',
        content: `Pushing geometry from Revit back to Forma is straightforward when the Revit model is still primarily in massing stage. The complexity increases as the Revit model becomes more detailed.`,
        subsections: [
          {
            heading: 'Push Steps',
            items: [
              'In Revit: Forma tab → Push to Forma',
              'Select which mass elements to push (all or specific buildings)',
              'The plugin sends the current mass geometry to the connected Forma proposal',
              'A dialog confirms the push was successful and shows what was updated',
              'In Forma (online): refresh the project — the updated geometry appears in the proposal',
              'Re-run any affected analyses against the updated geometry',
              'Update the design decision log with the new analysis results',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Managing Push History and Versioning', level: 'h2',
        content: `Each push to Forma creates a new version of the geometry in the connected proposal. Forma retains previous geometry states so you can compare the current design against earlier versions.`,
        items: [
          'Forma stores push history per proposal — you can roll back to an earlier pushed state if needed',
          'Use clear naming for push events: note the date and what changed (e.g., "Push — Added Rooftop Plant Room — 2026-04-15")',
          'Do not push partial or in-progress changes — push a complete, coherent massing state that reflects a design decision',
          'If multiple team members are pushing geometry, coordinate to avoid overwriting each other\'s pushed states',
          'Consider creating a new Forma Proposal before a major push, rather than overwriting the previous approved state',
        ],
        formula: { label: 'Version Management', text: 'Create a new Forma Proposal before a major massing change — preserve the approved state separately from the revised state' },
      },
      {
        id: 's5', heading: 'Triggering Re-Analysis After a Push', level: 'h2',
        content: `A push by itself does not update analysis results — you must explicitly re-run each analysis type that may have been affected by the geometry change.`,
        subsections: [
          {
            heading: 'Post-Push Analysis Checklist',
            items: [
              'Re-run **Solar Analysis** if building height, orientation, or footprint changed',
              'Re-run **Wind Analysis** if building height or relative position to neighbours changed',
              'Re-run **Noise Analysis** if the position or height of the noise-shielding elements changed',
              'Re-run **Daylight** if floor plan depth or facade position changed',
              'Re-run **GAR** if vegetation or permeable areas were added or removed',
              'Compare new results against the target metrics set at concept stage — document any changes',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'When to Stop the Forma-Revit Cycle', level: 'h2',
        content: `The Forma-Revit cycle is useful throughout schematic and early design development, but at some point the Revit model becomes so detailed that massing-level analysis becomes less relevant than detailed performance simulation.

Natural endpoints for the Forma-Revit cycle:
- After planning approval is received and the massing is locked
- When a specialist energy, daylight, or acoustic consultant has been engaged and is running their own detailed simulations
- When the design has progressed to detailed element level (windows specified, facade systems defined) — at this point detailed thermal or daylight simulation tools are more appropriate than Forma

After this point, Forma is typically kept as an archive of the concept-stage analysis record, not as an active design tool.`,
      },
    ],
    takeaways: [
      'Pushing Revit updates back to Forma maintains a living analysis model that tracks the real design state, not just the original concept.',
      'Only Revit mass objects can be pushed — full model elements (walls, floors) require a simplified massing to be recreated for pushing.',
      'The push workflow: Forma tab → Push to Forma → select masses → confirm → refresh Forma → re-run analyses.',
      'Forma retains push history; create a new Proposal before a major massing change to preserve the previous approved state.',
      'Always explicitly re-run affected analyses after a push — the geometry update alone does not refresh analysis results.',
      'The Forma-Revit cycle naturally ends when planning is approved or when specialist detailed simulation tools take over.',
    ],
    resource: { label: 'Revit-to-Forma Push Workflow Guide', type: 'PDF' },
    quiz: { label: 'Pushing to Forma Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-18', title: 'Importing Forma Geometry into a Revit Project' },
    next: { id: 'forma-20', title: 'Area & Gross Floor Area Calculations in Forma' },
  },

  // ============================================================
  // LESSON FORMA-20 — Area & GFA Calculations in Forma
  // ============================================================
  {
    id: 'forma-20', num: '20',
    title: 'Area & Gross Floor Area Calculations in Forma',
    topic: 'Revit Integration', cat: 'advanced', readTime: '9 min', free: false,
    desc: 'Understand how Forma calculates GFA and area metrics, and how to use them reliably for planning and client briefs.',
    intro: `Gross Floor Area is the single most important number in a property development project — it drives everything from the client's revenue model to the planning authority's density assessment to the contractor's cost estimate. Forma calculates GFA automatically from massing geometry, but understanding how it calculates it — and its limitations — is essential before using Forma's area data in any document that leaves the design team.`,
    sections: [
      {
        id: 's1', heading: 'How Forma Calculates GFA', level: 'h2',
        content: `Forma calculates **Gross Floor Area (GFA)** by multiplying the building footprint area (the plan area of each floor) by the number of floors, summed across all volumes in the proposal. This is a simple geometric calculation from the massing volumes.`,
        code: {
          label: 'GFA Calculation Method',
          lines: [
            'For each building volume:',
            '  Floor Area = footprint area (plan m²)',
            '  GFA contribution = Floor Area × Number of Floors',
            '',
            'Total Proposal GFA = Σ (GFA contribution of all volumes)',
            '',
            'Note: Forma assumes every floor has the same footprint',
            '(uniform extrusion). Setbacks, cantilevers, step-backs, and',
            'tapered towers require separate volumes for each section.',
            '',
            'Floor Area Ratio (FAR) = Total GFA ÷ Site Area',
            '  → Displayed in the Forma top bar, updates in real time',
          ],
        },
      },
      {
        id: 's2', heading: 'Net vs Gross Floor Area', level: 'h2',
        content: `Forma calculates **Gross Floor Area** — the total area measured to the outside face of the external walls. It does not differentiate between usable space, circulation, structure, and plant rooms. Understanding the difference is critical when briefing clients on what the GFA number means.`,
        items: [
          '**GFA (Gross Floor Area)** — measured to external wall face; includes all space within the building envelope',
          '**NIA (Net Internal Area)** — excludes walls, columns, and plant rooms; represents usable floor area',
          '**NLA (Net Lettable Area)** — only lettable tenant space; excludes common areas, cores, and plant',
          'Typical efficiency ratios: residential 80–85% NIA/GFA, commercial offices 75–85% NIA/GFA',
          'Forma shows GFA only — planners and clients need to understand that actual usable space is 15–25% less than the GFA shown',
          'Never present Forma\'s GFA number as "usable space" — always qualify it as gross external area',
        ],
        formula: { label: 'Efficiency Rule', text: 'NIA ≈ 80% of GFA for residential | 75-85% of GFA for commercial — adjust based on the specific typology' },
      },
      {
        id: 's3', heading: 'Different GFA Definitions by Jurisdiction', level: 'h2',
        content: `The definition of "Gross Floor Area" varies between planning jurisdictions, and the differences matter for FAR and density calculations.`,
        subsections: [
          {
            heading: 'GFA Definition Variations',
            items: [
              '**UK (RICS)** — GEA (Gross External Area): measured to outer face of external walls including roof structures, measured at each floor level',
              '**Australia (NSW)** — GFA definition excludes certain items (basement parking, car lifts, plant rooms) depending on the LEP',
              '**Singapore** — Gross Floor Area excludes certain void areas and covered driveways; subject to URA guidance',
              '**Philippines** — GFA for density calculations varies by LGU; typically excludes parking and mechanical areas',
              '**EU (EN 15221-6)** — defines GFA as Gross Internal Area, measured to internal wall face',
              'Always confirm which definition applies to your project before presenting Forma\'s GFA to a planning authority',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Using GFA Targets in Forma', level: 'h2',
        content: `Forma allows you to set a GFA target for a project, displayed as a reference line in the top bar metric strip. This is particularly useful when the client brief specifies a minimum or maximum GFA requirement.`,
        items: [
          'Right panel → Area Settings → set a Target GFA',
          'Forma shows the current GFA against the target in the top bar',
          'Green = below/at target | Red = over target (useful for maximum GFA planning conditions)',
          'Or reverse the logic: set the target as a minimum and use red to flag proposals that are under-delivering on brief',
          'Use parametric massing (Lesson 8) to arrive at a massing that hits the GFA target within zoning constraints, rather than manually adjusting heights to match',
        ],
      },
      {
        id: 's5', heading: 'Area by Building Use', level: 'h2',
        content: `For mixed-use proposals, Forma can track GFA by use type — splitting residential from commercial, and identifying how much of the total GFA each use contributes.`,
        subsections: [
          {
            heading: 'Area Breakdown by Use',
            items: [
              'Set the Building Use property on each volume in Forma (Residential, Commercial, Mixed-use, etc.)',
              'The area breakdown by use appears in the right panel or summary dashboard',
              'Planning conditions often express requirements as use-specific GFA ("minimum 20% commercial GFA at ground floor")',
              'Mixed-use GFA tracking in Forma allows compliance checking against these conditions in real time',
              'Export the area breakdown in the Forma report for use in planning application submissions',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Area Verification Before Revit Handoff', level: 'h2',
        content: `Before the Forma proposal is handed off to the Revit team, verify the GFA figures against any planning approval or client brief conditions. This is the last point at which massing changes are low-cost — once detailed Revit work begins, changing the GFA requires significantly more effort.`,
        items: [
          'Cross-reference Forma GFA against the planning brief maximum/minimum',
          'Confirm the FAR (Floor Area Ratio) is within the planning policy maximum for the site',
          'Apply the expected NIA efficiency ratio to give the client a realistic picture of usable space',
          'If the project targets a specific housing yield (e.g., 80 units at average 75m² each), verify the residential GFA supports it',
          'Record the confirmed GFA and FAR values in the project documentation before the Revit import',
        ],
        formula: { label: 'Pre-Handoff Check', text: 'Forma GFA × Efficiency = Estimated NIA → verify against client brief and planning conditions before Revit begins' },
      },
    ],
    takeaways: [
      'Forma calculates GFA as footprint area × floor count for each volume — it assumes uniform floor plates (setbacks require separate volumes).',
      'Forma shows Gross Floor Area (to external wall face) not Net Internal Area; usable space is typically 75–85% of the GFA shown.',
      'GFA definitions vary by jurisdiction; confirm the applicable definition before submitting Forma\'s area data to a planning authority.',
      'Set a GFA target in Forma to track compliance against client briefs or planning maximum density conditions.',
      'Mixed-use GFA can be tracked by building use type — essential for compliance with use-specific planning conditions.',
      'Verify GFA and FAR in Forma before the Revit handoff — massing changes at this stage are significantly cheaper than after detailed design begins.',
    ],
    resource: { label: 'GFA and Area Definitions Reference', type: 'PDF' },
    quiz: { label: 'GFA Calculations in Forma Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-19', title: 'Pushing Revit Design Updates Back to Forma' },
    next: { id: 'forma-21', title: 'Open BIM Export — IFC, Speckle & ISO 19650 Data' },
  },

  // ============================================================
  // LESSON FORMA-21 — Open BIM Export
  // ============================================================
  {
    id: 'forma-21', num: '21',
    title: 'Open BIM Export — IFC, Speckle & ISO 19650 Data',
    topic: 'Open BIM', cat: 'advanced', readTime: '10 min', free: false,
    desc: 'Export Forma geometry and data in open BIM formats (IFC, Speckle) and align metadata with ISO 19650 information requirements.',
    intro: `Forma's Revit plugin is the primary handoff route for Autodesk-centric workflows, but many projects involve teams using different software — structural engineers in Tekla, civil engineers in MicroStation, urban designers in ArcGIS. Open BIM export from Forma, primarily via IFC and Speckle, ensures that validated concept geometry can be handed off to any tool without a proprietary plugin dependency.`,
    sections: [
      {
        id: 's1', heading: 'Why Open BIM Export Matters', level: 'h2',
        content: `Proprietary file exchange works well within a single software ecosystem (Autodesk-to-Autodesk, for example), but most construction projects involve teams using heterogeneous software from different vendors. Open BIM standards — primarily **IFC (Industry Foundation Classes)** — provide a vendor-neutral format that any BIM tool can read.

For Forma specifically, open export is important for:
- Handing concept massing to structural engineers who may use Tekla, SAP2000, or ETABS
- Sharing site models with civil engineers working in MicroStation or InfraWorks
- Integrating with urban planning tools (ArcGIS, QGIS) that work with geo-referenced 3D data
- Compliance with ISO 19650-based project protocols that mandate open file formats at specific handover stages`,
        formula: { label: 'Open BIM Rule', text: 'IFC = the universal format — any BIM tool that claims ISO 19650 compliance can read and write IFC' },
      },
      {
        id: 's2', heading: 'IFC Export from Forma', level: 'h2',
        content: `Forma can export the current proposal's geometry as an IFC file. The export captures the 3D massing volumes with their attributes (height, floor count, use type) encoded as IFC property sets.`,
        subsections: [
          {
            heading: 'IFC Export Steps',
            items: [
              'Left panel → select the proposal to export',
              'Top bar → Export → IFC',
              'Choose what to include: proposed buildings only, or buildings + context + terrain',
              'Set the IFC schema version (IFC2x3 for broadest compatibility; IFC4 for richer data support)',
              'Choose the IFC coordinate system output — confirm it matches the receiving tool\'s expected origin',
              'Click Export — the IFC file downloads to your local machine',
              'Open in a compatible viewer (e.g., Navisworks, Solibri, BIMvision) to verify the geometry before distribution',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'IFC Property Sets in Forma Exports', level: 'h2',
        content: `IFC property sets (Psets) are the mechanism for attaching non-geometric data to IFC objects. Forma encodes building properties from the massing model into standard and custom Psets in the exported file.`,
        items: [
          '**Pset_BuildingCommon** — standard IFC property set including GrossFloorArea, NumberOfStoreys',
          '**Forma custom Psets** — building use type, floor height, and any analysis results attached to the geometry',
          'Receiving teams can read these Psets in their IFC viewer or authoring tool to access the design data without re-entering it',
          'For ISO 19650 information delivery, ensure that any required project properties (project number, author, date) are set in the Forma project settings before export — they populate the IFC header',
          'IFC4 exports carry richer Pset data than IFC2x3; use IFC4 when the receiving party can confirm their tool supports it',
        ],
      },
      {
        id: 's4', heading: 'Speckle Integration', level: 'h2',
        content: `**Speckle** is an open-source data platform for AEC that allows geometry and data to flow between different software tools — Revit, Rhino, Grasshopper, Blender, and others — using a web-based hub model.

Forma's Speckle integration allows massing geometry to be sent to a Speckle server and received by any connected tool. This is particularly useful for teams using Rhino/Grasshopper or Blender for visualization alongside Forma for analysis.`,
        code: {
          label: 'Forma → Speckle Workflow',
          lines: [
            'Prerequisites:',
            '  → Speckle account (speckle.xyz — free for most uses)',
            '  → Speckle connectors installed in receiving tools',
            '',
            'From Forma:',
            '  Left panel → Export → Speckle',
            '  Sign in to your Speckle account',
            '  Create a new stream or select existing',
            '  Push the Forma proposal geometry to the stream',
            '',
            'In Rhino/Grasshopper:',
            '  Speckle connector → Receive from stream',
            '  Forma massing appears as mesh geometry with attached metadata',
            '',
            'Useful for: visualization, further parametric processing,',
            'or multi-software team collaboration.',
          ],
        },
      },
      {
        id: 's5', heading: 'ISO 19650 Alignment', level: 'h2',
        content: `ISO 19650 is the international standard for BIM information management. For Forma exports to align with ISO 19650-compliant project protocols, certain information requirements must be met at export time.`,
        items: [
          '**Container naming** — ISO 19650 specifies a file naming convention; name the exported IFC file using the project\'s agreed naming format',
          '**Author and date metadata** — ensure the IFC header includes the authoring organization and export date',
          '**Status codes** — ISO 19650 requires status codes on delivered information (e.g., S0 = work in progress, S2 = suitable for coordination)',
          '**Information delivery plan** — concept-stage Forma outputs are typically delivered at defined milestones as part of the BIM Execution Plan',
          '**CDE (Common Data Environment)** — export IFC files to the project CDE (ACC, SharePoint, Autodesk Docs) rather than emailing them directly to comply with ISO 19650 information management requirements',
        ],
        formula: { label: 'ISO 19650 Reminder', text: 'Correct file → Correct naming → Correct CDE folder → Correct status code = ISO 19650 compliant delivery' },
      },
    ],
    takeaways: [
      'IFC export from Forma provides vendor-neutral geometry exchange suitable for any BIM tool in an ISO 19650-compliant project.',
      'IFC exports include standard property sets (GFA, storey count, use type) readable by any IFC-compatible tool.',
      'Choose IFC4 for richer data when the receiving tool supports it; default to IFC2x3 for broadest compatibility.',
      'Speckle integration enables Forma geometry to flow to Rhino, Grasshopper, Blender, and other connected tools via a web-based stream.',
      'For ISO 19650 compliance, use the project\'s agreed file naming convention, include required metadata in the IFC header, and publish to the CDE.',
      'Always open exported IFC files in a viewer to verify geometry before distributing — export errors are much easier to catch before they reach the recipient.',
    ],
    resource: { label: 'Open BIM Export Guide for Forma', type: 'PDF' },
    quiz: { label: 'Open BIM Export Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-20', title: 'Area & Gross Floor Area Calculations in Forma' },
    next: { id: 'forma-22', title: 'Using Forma for Early-Stage Design Documentation' },
  },

  // ============================================================
  // LESSON FORMA-22 — Early-Stage Design Documentation
  // ============================================================
  {
    id: 'forma-22', num: '22',
    title: 'Using Forma for Early-Stage Design Documentation',
    topic: 'Documentation', cat: 'advanced', readTime: '9 min', free: false,
    desc: 'Produce planning pre-application documents, design statements, and design review boards using Forma\'s analysis outputs.',
    intro: `Before Revit has produced a single drawing sheet, Forma has already generated the most important analytical evidence for early design submissions: shadow diagrams, wind comfort maps, daylight impact assessments, noise exposure maps, and Green Area Ratio calculations. Used well, these outputs can form the analytical backbone of planning pre-applications, design and access statements, and design review board presentations. This lesson covers how to structure, export, and present this evidence professionally.`,
    sections: [
      {
        id: 's1', heading: 'Documents That Use Forma Outputs', level: 'h2',
        content: `Several standard planning and design review documents can be substantially supported by Forma analysis outputs, particularly at the pre-application stage.`,
        items: [
          '**Planning Pre-Application** — shadow analysis, daylight impact, wind comfort overview; demonstrates due diligence at early engagement',
          '**Design and Access Statement** — environmental rationale for orientation, massing decisions, and greenspace provision',
          '**Design Review Board Submission** — comparative analysis of design alternatives with supporting environmental data',
          '**Sustainability Statement** — Green Area Ratio, solar gain, daylight potential as early-stage sustainability evidence',
          '**Transport Statement (supporting data)** — noise exposure maps can support acoustic sections of transport or environmental assessments',
          '**Environmental Impact Assessment (screening)** — shadow and daylight impact for EIA screening purposes',
        ],
      },
      {
        id: 's2', heading: 'Exporting Documentation-Quality Images', level: 'h2',
        content: `The default canvas view in Forma is suitable for internal design review but needs care to be appropriate for professional documents. A few steps significantly improve the quality of exported images.`,
        subsections: [
          {
            heading: 'Export Best Practices',
            items: [
              'Use a consistent camera angle across all analysis types — consistent viewpoint makes images directly comparable',
              'Set north always pointing up in plan views for consistency with standard drawing conventions',
              'Turn off irrelevant layers (e.g., roads, annotation) for clean analysis map images',
              'Use the full-screen canvas mode to maximise the resolution of screenshots',
              'For shadow diagrams, capture at exactly the required times (e.g., 9:00, 12:00, 15:00) — use the timeline slider for precision',
              'Add a north arrow, scale bar, and date/time label to analysis images before including in documents',
              'Export at screen resolution; for A3 print quality, display Forma on a high-resolution monitor or use browser zoom to increase detail',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Structuring the Analysis Section of a Document', level: 'h2',
        content: `When analysis outputs are embedded in planning documents, they are most effective when presented in a structured, auditable format that allows a planning officer or design reviewer to understand exactly what was tested and why.`,
        code: {
          label: 'Recommended Analysis Section Structure',
          lines: [
            '1. Context — site location, nearby constraints, prevailing conditions',
            '   → Map of site with neighbouring uses and physical context',
            '',
            '2. Analysis Method — what tool was used, what was analyzed',
            '   → "Analysis was conducted using Autodesk Forma (v[version])',
            '       at [date]. Solar analysis uses geographic coordinates',
            '       [lat/long] with sun position calculated per ASHRAE standards."',
            '',
            '3. Results — the analysis output for each type',
            '   → Analysis image with north arrow, scale, and time/date label',
            '   → Summary metric in plain text (e.g., "3.5 hrs average on 21 Dec")',
            '',
            '4. Interpretation — what the result means for the design',
            '   → Does it meet the applicable standard/target?',
            '   → If not: what design response has been taken?',
            '',
            '5. Design Response — what changed because of the analysis',
            '   → Specific massing decision linked to the result',
          ],
        },
      },
      {
        id: 's4', heading: 'Forma Outputs in Pre-Application Meetings', level: 'h2',
        content: `Pre-application meetings with planning officers are most productive when visual analysis evidence is presented alongside the design concept, not after it. Forma makes this achievable at early project stages that historically lacked any analytical evidence.`,
        items: [
          'Share comparative analysis between two or three options — planning officers respond well to evidence of option testing',
          'Shadow diagrams on winter solstice are often the first question planning asks about a residential tower — have these ready',
          'Daylight impact on neighbouring properties is the most commonly contested issue; show the baseline before your massing and the change after',
          'GAR or green space provision is increasingly tested at pre-application stage in many jurisdictions',
          'Bring a laptop with Forma open — being able to change a parameter and re-run analysis live in a planning meeting is a significant advantage',
        ],
      },
      {
        id: 's5', heading: 'Caveats and Disclaimer Language', level: 'h2',
        content: `When including Forma analysis in formal documents, appropriate disclaimer language protects the project team from over-reliance on early-stage outputs.`,
        subsections: [
          {
            heading: 'Suggested Disclaimer Language',
            items: [
              '"This analysis was conducted using early-stage massing geometry and is indicative of likely performance. It is not a substitute for detailed specialist assessment and should not be relied upon for regulatory compliance purposes without validation by a qualified consultant."',
              '"Solar analysis uses Autodesk Forma\'s built-in solar calculation engine. Results are based on clear-sky solar angles at the stated geographic coordinates and do not account for cloudy or overcast conditions."',
              '"Noise analysis is based on road classification data from OpenStreetMap. Actual noise levels may differ and should be validated by a BS 8233-compliant acoustic survey where planning conditions require formal assessment."',
              'Include the version of Forma used and the export date in a document footnote',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'Forma analysis outputs can support planning pre-applications, design statements, design review boards, and sustainability statements.',
      'Export documentation-quality images with consistent camera angles, north arrows, scale bars, and date/time labels.',
      'Structure analysis sections as: Context → Method → Results → Interpretation → Design Response for maximum planning officer clarity.',
      'Having Forma open in pre-application meetings enables live option testing — a significant advantage in early design discussions.',
      'Always include appropriate disclaimer language clarifying that Forma outputs are early-stage and indicative, not formal compliance evidence.',
      'Note the Forma version and export date in documents; analysis accuracy improves with software updates so version tracking matters.',
    ],
    resource: { label: 'Forma Design Documentation Guide', type: 'PDF' },
    quiz: { label: 'Early-Stage Documentation Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-21', title: 'Open BIM Export — IFC, Speckle & ISO 19650 Data' },
    next: { id: 'forma-23', title: 'Forma in the Project Programme — When to Use It' },
  },

  // ============================================================
  // LESSON FORMA-23 — Forma in the Project Programme
  // ============================================================
  {
    id: 'forma-23', num: '23',
    title: 'Forma in the Project Programme — When to Use It',
    topic: 'Documentation', cat: 'advanced', readTime: '8 min', free: false,
    desc: 'Understand where Forma fits in a project programme from inception through planning and how to hand off to the Revit team at the right moment.',
    intro: `Using Forma effectively is not just about knowing the tools — it is about knowing when to use them and when to stop. Starting Forma work too early wastes effort on a brief that has not been settled. Continuing Forma work too long delays the start of detailed design in Revit. The right answer depends on the project type, the planning context, and the client's decision-making process. This lesson covers how Forma maps to standard project stages and how to sequence the Forma-to-Revit transition correctly.`,
    sections: [
      {
        id: 's1', heading: 'Forma and RIBA Work Stages', level: 'h2',
        content: `The RIBA Plan of Work (used in the UK and referenced internationally) provides a useful framework for locating Forma in the project programme.`,
        code: {
          label: 'Forma Across RIBA Work Stages',
          lines: [
            'RIBA Stage 0 — Strategic Definition',
            '  → Feasibility studies: use Forma to test whether the brief is deliverable on the site',
            '  → Quick massing options to evaluate GFA achievability, FAR, and solar feasibility',
            '',
            'RIBA Stage 1 — Preparation and Brief',
            '  → Site setup: terrain, context, site boundary confirmed',
            '  → Multiple massing options tested against brief requirements',
            '  → Environmental analysis first pass (solar, wind, noise) to inform orientation',
            '',
            'RIBA Stage 2 — Concept Design',
            '  → Primary Forma use stage: proposals compared, optimised, and agreed',
            '  → Planning pre-application often happens here; Forma analysis supports it',
            '  → Forma-to-Revit handoff typically occurs at the end of this stage',
            '',
            'RIBA Stage 3 — Spatial Coordination',
            '  → Forma-Revit cycle continues: major massing changes pushed back to Forma',
            '  → Specialist consultants engaged; Forma analysis used to brief them',
            '',
            'RIBA Stage 4+ — Technical Design and beyond',
            '  → Forma use diminishes; detailed energy and daylight simulation tools take over',
            '  → Forma remains as an archive record of concept decisions',
          ],
        },
      },
      {
        id: 's2', heading: 'Setting Up Forma at the Right Time', level: 'h2',
        content: `The optimal time to set up a Forma project is after the site has been confirmed and the brief includes at minimum: a site address, a target GFA or dwelling yield, and any known planning constraints. Creating Forma too early — before the site is decided — produces redundant work.`,
        items: [
          'Minimum requirements before setting up Forma: confirmed site address, approximate GFA target, project number for naming',
          'Ideal setup: confirmed site + topographic survey available + initial brief constraints (height limits, setbacks, use mix)',
          'If the brief changes significantly after Forma setup (different site, doubled GFA target), consider starting a new project rather than heavily modifying the existing one',
          'The BIM Manager should be involved in project setup to ensure coordinate alignment with the eventual Revit model',
          'Forma setup takes under an hour — do not delay starting it pending perfect information; the tool is designed for the fuzzy early stage',
        ],
      },
      {
        id: 's3', heading: 'Deciding When to Hand Off to Revit', level: 'h2',
        content: `The Forma-to-Revit handoff should happen at a clear design milestone, not mid-iteration. The most common trigger is **planning pre-application or client approval of a massing direction**.`,
        subsections: [
          {
            heading: 'Handoff Triggers',
            items: [
              '**Client approval of preferred option** — after comparing proposals, the client has selected a direction',
              '**Planning pre-application agreement** — the local authority has confirmed the massing direction is acceptable in principle',
              '**Brief sign-off** — the GFA, mix, and site coverage are confirmed by the client and legal team',
              '**Procurement milestone** — the main contractor needs a Revit model for early contractor involvement',
              'Do NOT hand off until at least one of these milestones is met — Revit work started on an unapproved massing is high-risk',
            ],
          },
        ],
        formula: { label: 'Handoff Rule', text: 'Forma handoff = approved massing direction + confirmed GFA + client or planning sign-off' },
      },
      {
        id: 's4', heading: 'Forma in Tender and Procurement', level: 'h2',
        content: `In design-and-build or early contractor involvement (ECI) projects, Forma outputs can be used during the tender process before Revit documentation is available.`,
        items: [
          'Forma GFA and massing geometry can be included in Employer\'s Requirements for D&B tender packages',
          'Environmental analysis outputs demonstrate due diligence on site performance for risk allocation purposes',
          'GAR and greenspace calculations can be referenced in landscape tender requirements',
          'Noise analysis supports acoustic specification requirements in tender documents',
          'Contractors increasingly value early Forma access via the Revit plugin to begin programming and logistics planning',
        ],
      },
      {
        id: 's5', heading: 'Forma and ISO 19650 Information Management', level: 'h2',
        content: `In an ISO 19650-compliant project, Forma outputs are part of the information container set that is managed through the Common Data Environment (CDE) at each information delivery milestone.`,
        subsections: [
          {
            heading: 'ISO 19650 Integration Points',
            items: [
              'Forma exports (IFC, PDF reports) are uploaded to the CDE at agreed milestones per the Information Delivery Plan',
              'Forma project setup should align with the project\'s MPDT (Master Project Data Table) requirements',
              'The BIM Execution Plan should reference Forma as the concept design tool and specify the stage at which Forma responsibility transfers to Revit',
              'Analysis reports produced in Forma form part of the project information model deliverables',
              'Information status codes should be applied to Forma exports: S0 (work in progress), S2 (suitable for coordination), S4 (approved for use)',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'Forma is primarily a Stage 1–2 tool in the RIBA Plan of Work; it transitions to a secondary role from Stage 3 onward as Revit and specialist tools take over.',
      'Set up Forma after the site is confirmed and the brief includes a GFA target and known planning constraints — not before.',
      'The Forma-to-Revit handoff should be triggered by a design milestone: client approval, planning agreement, or brief sign-off.',
      'Do not start significant Revit work until the Forma massing has been approved — redesigning a detailed model is significantly more expensive than redesigning a massing model.',
      'Forma exports can support tender packages in design-and-build procurement where Revit documentation is not yet available.',
      'In ISO 19650 projects, Forma outputs are formal information deliverables that should be managed through the CDE with correct status codes.',
    ],
    resource: { label: 'Forma in the Project Programme Reference', type: 'PDF' },
    quiz: { label: 'Project Programme Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-22', title: 'Using Forma for Early-Stage Design Documentation' },
    next: { id: 'forma-24', title: 'Capstone — Dharren Park Site Analysis & Revit Handoff' },
  },

  // ============================================================
  // LESSON FORMA-24 — Capstone
  // ============================================================
  {
    id: 'forma-24', num: '24',
    title: 'Capstone — Dharren Park Site Analysis & Revit Handoff',
    topic: 'Capstone', cat: 'advanced', readTime: '15 min', free: false,
    desc: 'Apply the complete Forma workflow from site setup through full environmental analysis to Revit handoff on the Dharren Park case study site.',
    intro: `This capstone lesson brings together everything covered in the course — site import, massing, proposals, environmental analysis, and Revit integration — applied to a single site. Rather than isolated exercises, you will work through a complete early-stage design process for a real urban site, producing the kind of analysis and handoff package that would be delivered to a client or planning authority on a professional project. By the end, you will have produced a Forma project that demonstrates the full value of early-stage environmental design.`,
    sections: [
      {
        id: 's1', heading: 'The Dharren Park Site — Brief Overview', level: 'h2',
        content: `The Dharren Park site is a mixed-use urban regeneration site used throughout this course as a teaching case study. It represents a typical urban infill scenario with neighbouring residential and commercial uses, a main road on one boundary, and a park to the north.

**Site Parameters:**
- Site area: approximately 3,500 m²
- Target GFA: 20,000 m² (mixed residential and commercial)
- Planning height limit: 36m maximum (12 floors at 3m)
- Required setback: 6m from all site boundaries
- Minimum Green Area Ratio: 0.35
- Planning requirement: no overshadowing of park between 9am–3pm on winter solstice

This capstone requires you to create your own Forma project for this (or an equivalent) site and work through each stage systematically.`,
        formula: { label: 'Brief Summary', text: 'GFA 20,000 m² | Max 36m | 6m setbacks | GAR ≥ 0.35 | No overshadowing of park on 21 Dec' },
      },
      {
        id: 's2', heading: 'Stage 1 — Site Setup and Context Verification', level: 'h2',
        content: `Begin by setting up the Forma project and verifying the site model before any massing is created.`,
        subsections: [
          {
            heading: 'Stage 1 Tasks',
            items: [
              'Create a new Forma project at the site location',
              'Refine the site boundary to match the 3,500 m² site area',
              'Verify that all major neighbouring buildings are present — add any missing ones with approximate heights',
              'Check that the park to the north is correctly represented as open space (no buildings on it)',
              'Import the topographic survey if available; if not, verify that the auto terrain is approximately correct for the site',
              'Set a GFA Target of 20,000 m² in the project settings',
              'Record the current FAR from the site area (20,000 ÷ 3,500 = 5.7 FAR — check this is achievable under the height and coverage constraints)',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Stage 2 — Initial Massing Options', level: 'h2',
        content: `Create at least three distinct massing proposals that represent genuinely different design approaches to the brief. The options should differ meaningfully — not just slightly different heights or minor footprint adjustments.`,
        code: {
          label: 'Suggested Option Types',
          lines: [
            'Option A — Single Tower',
            '  → One point tower of approx 36m, with low-rise podium',
            '  → Maximises view and daylight for upper units',
            '  → Concentrates building coverage to allow larger open space',
            '',
            'Option B — Two Mid-Rise Slabs',
            '  → Two parallel slabs of approx 24m (8 floors)',
            '  → E-W orientation to maximise south exposure',
            '  → Courtyard between slabs for shared amenity',
            '',
            'Option C — Perimeter Block',
            '  → Four-sided perimeter block of 6–8 floors',
            '  → Internal courtyard (quiet, sheltered)',
            '  → Maximum frontage on all street edges',
            '',
            'Set up each as a separate Proposal with clear naming.',
            'Calculate approximate GFA for each before running analysis.',
          ],
        },
      },
      {
        id: 's4', heading: 'Stage 3 — Environmental Analysis Across All Options', level: 'h2',
        content: `Run the full suite of environmental analyses for each of the three proposals. Use consistent settings across all analyses.`,
        subsections: [
          {
            heading: 'Analysis Checklist (run for each Proposal)',
            items: [
              '**Solar — Sun Hours**: full year average on ground level — identify permanently shadowed areas',
              '**Solar — Shadow Study**: 21 December at 9am, 12pm, and 3pm — check park overshadowing',
              '**Wind**: pedestrian comfort at ground level — identify any Category E zones',
              '**Noise**: ground level and level 2 (first residential floor) — identify noise exposure pattern',
              '**Daylight**: floor plate analysis at level 3 and level 8 — compare depth performance',
              '**Green Area Ratio**: check compliance against the 0.35 target, adding vegetation as needed',
              '**View**: facade analysis at level 5 — compare view quality across options',
            ],
          },
        ],
      },
      {
        id: 's5', heading: 'Stage 4 — Comparison, Selection, and Optimisation', level: 'h2',
        content: `Review the analysis results across all three options and make a recommendation for the preferred option, with evidence to support the recommendation.`,
        items: [
          'Create a comparison table: each option against each analysis type, with a pass/fail against the planning criteria',
          'Identify which options fail any non-negotiable requirement (e.g., park overshadowing) and eliminate them',
          'Among compliant options, compare secondary metrics (daylight, views, wind comfort) to identify the best performer',
          'Optimise the preferred option: adjust vegetation to meet GAR, refine building position to improve wind results, verify shadow compliance at exact required times',
          'Re-run all affected analyses after each optimisation step',
          'Document the design evolution: which changes were made, why, and what the analysis showed before and after',
        ],
      },
      {
        id: 's6', heading: 'Stage 5 — Revit Handoff Package', level: 'h2',
        content: `Prepare the handoff package from the approved Forma proposal to the Revit team.`,
        subsections: [
          {
            heading: 'Handoff Package Contents',
            items: [
              '**Confirmed Forma proposal** — locked geometry, verified GFA (20,000 m² ±3%)',
              '**Analysis summary document** — key metrics for the preferred option, with images',
              '**Shadow diagrams** — 9am, 12pm, 3pm on 21 December showing park is not overshadowed',
              '**Wind comfort map** — showing all pedestrian areas are Category C or better',
              '**GAR confirmation** — showing the design meets the 0.35 target',
              '**IFC export** — for structural engineers or other non-Revit team members',
              '**Revit plugin import** — initiate the Forma-to-Revit connection and verify geometry lands correctly',
              '**Briefing note for the Revit team** — floor heights, use types by floor, any planning constraints to carry forward',
            ],
          },
        ],
        formula: { label: 'Capstone Complete', text: 'Validated Massing + Full Analysis + Revit Import = A Professional Forma Project Handoff' },
      },
      {
        id: 's7', heading: 'Reflecting on the Forma Workflow', level: 'h2',
        content: `Having completed the full Forma workflow, it is worth reflecting on what the tool actually changed about the design process compared to a workflow without it.`,
        items: [
          'The design decisions — orientation, building type, height — were made before Revit opened, based on evidence rather than intuition',
          'Three options were tested in hours rather than the days it would take to produce equivalent evidence through traditional means',
          'The Revit team inherits a validated massing, not a blank brief — they start from a better position',
          'Planning pre-application can reference real analysis rather than general principles — a stronger opening position',
          'When the client asks "why this massing?" the answer is documented, traceable, and defensible',
          'Environmental performance is a design input, not an afterthought — and that changes the quality of the finished building',
        ],
      },
    ],
    takeaways: [
      'The capstone applies the complete Forma workflow: site setup, massing options, full environmental analysis, comparison, optimisation, and Revit handoff.',
      'Always create at least three genuinely different massing options — minor variations do not give you the design intelligence you need.',
      'Run the full analysis suite on every proposal before comparing; missing an analysis type can lead to selecting an option that fails on an untested criterion.',
      'The comparison table — options vs. analysis criteria — is the decision-making document that the rest of the project references.',
      'The handoff package is not just the geometry: it includes analysis evidence, shadow diagrams, GAR confirmation, and a briefing note for the Revit team.',
      'Forma\'s value is that design decisions become evidence-based, documented, and defensible — and that change in working practice is what this course has equipped you to implement.',
    ],
    resource: { label: 'Forma Capstone Project Brief', type: 'PDF' },
    quiz: { label: 'Forma Capstone Quiz', questions: 15, time: '10 min' },
    prev: { id: 'forma-23', title: 'Forma in the Project Programme — When to Use It' },
    next: null,
  },

];
