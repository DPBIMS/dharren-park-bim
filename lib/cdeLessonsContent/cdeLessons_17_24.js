// ============================================================
// COMMON DATA ENVIRONMENT — LESSONS cde-17 through cde-24
// Section: CDE Workflows & Process (17-20) / Governance, Compliance & Handover (21-24)
// File: lib/cdeLessonsContent/cdeLessons_17_24.js
// Index: lib/cdeLessonsData.js
// ============================================================

export const lessons_17_24 = [

  // ============================================================
  // LESSON CDE-17 — The Revision System
  // ============================================================
  {
    id: 'cde-17', num: '17',
    title: 'The Revision System — How Files Evolve Through the CDE',
    topic: 'Revisions', cat: 'intermediate', readTime: '8 min', free: false,
    desc: 'Understand how revision numbering works alongside the four CDE states, and how to design a revision scheme that scales for the whole project.',
    intro: `Revision numbering is the mechanism that tracks how many times a container has changed over the life of a project — distinct from, but working alongside, the CDE states and suitability codes covered in earlier lessons. A well-designed revision scheme tells the whole team, at a glance, roughly where in the project lifecycle a piece of information sits. This lesson covers how to design and manage one correctly.`,
    sections: [
      {
        id: 's1', heading: 'Revision vs Version vs Suitability — Three Separate Concepts', level: 'h2',
        content: `New practitioners frequently conflate these three metadata concepts. Each answers a different question about the same information container.`,
        code: {
          label: 'Three Related but Distinct Concepts',
          lines: [
            'VERSION      → How many times has this file been uploaded? (automatic, platform-generated)',
            'REVISION     → How many times has this container been through a formal issue cycle?',
            'SUITABILITY  → What is this specific revision fit for? (S2, S4, C, etc.)',
            '',
            'A container might be at Version 47 (many small saves)',
            'but only Revision P03 (three formal issue cycles) —',
            'and its current Revision might carry Suitability S4',
          ],
        },
      },
      {
        id: 's2', heading: 'Common Revision Numbering Schemes', level: 'h2',
        content: `Two broad revision numbering conventions are used across the industry, often in combination at different project stages.`,
        code: {
          label: 'Revision Numbering Conventions',
          lines: [
            'P-SERIES (Preliminary) — pre-construction stage revisions',
            '  P01, P02, P03... — used from concept through detailed design',
            '',
            'C-SERIES (Construction) — post-contract, construction-stage revisions',
            '  C01, C02, C03... — used once information moves to construction issue',
            '',
            'Some projects instead use a continuous alphabetical scheme',
            '  Rev A, Rev B, Rev C... — common on smaller or design-only projects',
          ],
        },
        formula: { label: 'P/C Transition Rule', text: 'A container typically resets from the P-series to C01 the first time it is issued Suitable for Construction — never re-using a P-series number afterward' },
      },
      {
        id: 's3', heading: 'When a Revision Increments', level: 'h2',
        content: `Not every change to a container warrants a new formal revision. Understanding the threshold prevents both under-revising (missing changes) and over-revising (an unmanageable number of near-identical revisions).`,
        items: [
          'A new revision is created each time content moves through a full Shared → Published authorisation cycle (Lesson cde-13)',
          'Minor WIP iterations do not increment the formal revision — only the automatic version number changes at that stage',
          'A revision should always be accompanied by a clear description of what changed since the previous one',
        ],
      },
      {
        id: 's4', heading: 'Revision Description and Change Tracking', level: 'h2',
        content: `A revision number alone tells the reader that something changed, but not what. A revision description field, maintained consistently, is essential for anyone trying to understand the history of a container.`,
        code: {
          label: 'DPC2025 Revision Description Example',
          lines: [
            'Revision P02: "Updated column grid to match structural coordination comments"',
            'Revision P03: "Incorporated client review comments on room layouts"',
            'Revision C01: "First issue Suitable for Construction"',
            'Revision C02: "Revised door schedule following fire strategy update"',
          ],
        },
      },
      {
        id: 's5', heading: 'Revision Clouds and Visual Change Markers', level: 'h2',
        content: `On drawings specifically, a revision description alone is not always enough — visually marking exactly where a drawing changed helps recipients quickly locate what is new without re-checking the entire sheet.`,
        items: [
          'Revision clouds mark the specific area of a drawing that changed in this revision',
          'A revision triangle or tag references the revision letter/number next to the cloud',
          'This practice is standard on construction drawings and should be enforced through the office CAD/BIM standard, not left to individual preference',
        ],
      },
      {
        id: 's6', heading: 'Common Revision Mistakes', level: 'h2',
        content: `**Mistake:**
Incrementing the revision number for minor WIP saves. This inflates the formal revision history with meaningless entries and makes genuine milestones harder to find.

**Mistake:**
Leaving the revision description blank or generic ("updates"). Six months later, nobody — including the original author — can reconstruct what actually changed.

**Best Practice:**
Make the revision description a mandatory field at the point of publication, and require it to describe the specific change, not just restate that a change occurred.`,
      },
    ],
    takeaways: [
      'Version, revision, and suitability are three separate metadata concepts answering three different questions about the same container.',
      'P-series revisions are typically used pre-construction; C-series revisions begin once information is issued Suitable for Construction.',
      'A formal revision increments only at a full Shared-to-Published authorisation cycle, not on every minor WIP save.',
      'A clear, specific revision description is essential — without it, revision history becomes meaningless over time.',
      'Revision clouds and tags visually mark exactly what changed on a drawing, helping recipients avoid re-checking the whole sheet.',
      'Make revision descriptions mandatory and specific at the point of publication, not optional or generic.',
    ],
    resource: { label: 'Revision Numbering Scheme Guide', type: 'PDF' },
    quiz: { label: 'The Revision System Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-16', title: 'Transmittals — The Formal Communication Layer of the CDE' },
    next: { id: 'cde-18', title: 'Drawing Issue Workflow — From Revit to Published Sheet in ACC' },
  },

  // ============================================================
  // LESSON CDE-18 — Drawing Issue Workflow
  // ============================================================
  {
    id: 'cde-18', num: '18',
    title: 'Drawing Issue Workflow — From Revit to Published Sheet in ACC',
    topic: 'Drawing Workflow', cat: 'intermediate', readTime: '9 min', free: false,
    desc: 'Trace the complete practical workflow of a drawing from its first Revit sheet through to a formally Published, transmitted issue on ACC.',
    intro: `This lesson connects every concept covered so far into a single, concrete, end-to-end journey — following one drawing from its creation in Revit through internal review, coordination, formal sign-off, and publication on ACC. Seeing the entire path in one place makes clear how the states, naming, metadata, suitability, and transmittal concepts from earlier lessons interlock in daily practice.`,
    sections: [
      {
        id: 's1', heading: 'Stage 1 — Creating the Sheet in Revit (WIP)', level: 'h2',
        content: `Every drawing begins life as a sheet inside a discipline's own Revit model, developed entirely within the WIP state.`,
        items: [
          'Architect creates or updates a sheet in the DPC2025 architectural Revit model',
          'Sheet follows the office titleblock standard and view template configuration',
          'The underlying Revit model itself remains in the discipline\'s local/cloud-worked environment — this is Revit-level WIP, distinct from but feeding into CDE-level WIP',
          'No formal naming convention field is yet assigned externally — that happens at export/publish',
        ],
      },
      {
        id: 's2', heading: 'Stage 2 — Internal Review and Export', level: 'h2',
        content: `Before anything reaches the CDE, the sheet goes through the discipline's own internal quality process, as covered in Lesson cde-9.`,
        items: [
          'Peer review checks the sheet against the office standard and internal coordination',
          'Sheet is exported or published as a PDF (and optionally DWG) following the ISO 19650 naming convention (Lesson cde-4)',
          'File uploaded to the discipline\'s WIP folder on ACC with correct discipline and status metadata (Lesson cde-5)',
        ],
      },
      {
        id: 's3', heading: 'Stage 3 — Moving to Shared for Coordination', level: 'h2',
        content: `Following the internal review process from Lesson cde-10, the Task Team Manager authorises the move to Shared.`,
        code: {
          label: 'Stage 3 Actions',
          lines: [
            '1. Task Team Manager authorises move to Shared',
            '2. File uploaded/moved to Architecture [Shared] folder',
            '3. Suitability set to S1 (Suitable for Coordination)',
            '4. Federated model refreshed to include the updated sheet\'s source model (Lesson cde-12)',
            '5. Coordination review identifies any clashes involving this sheet\'s content',
          ],
        },
      },
      {
        id: 's4', heading: 'Stage 4 — Resolving Coordination Issues', level: 'h2',
        content: `If clash detection or visual review surfaces an issue, the sheet cycles back through WIP for correction before it can proceed toward publication.`,
        items: [
          'Issue raised in ACC Build or Coordinate, assigned to the responsible discipline',
          'Architect resolves the issue back in their WIP model',
          'Corrected sheet moves through Stages 2 and 3 again — a new Shared revision is issued',
          'Once no outstanding coordination issues remain against this sheet, it becomes eligible for publication',
        ],
      },
      {
        id: 's5', heading: 'Stage 5 — Formal Sign-Off and Publication', level: 'h2',
        content: `Following the sign-off sequence from Lesson cde-13, the sheet moves to Published with a formal suitability code.`,
        code: {
          label: 'DPC2025 Sheet — Publication Record',
          lines: [
            'DPC2025-AEC-ZZ-01-DR-A-0012',
            '  Revision: C01',
            '  Suitability: C (Suitable for Construction)',
            '  Published to: 03.1 Issued Drawings',
            '  Authorised by: Architecture Task Team Manager + Information Manager',
          ],
        },
      },
      {
        id: 's6', heading: 'Stage 6 — Transmittal and Distribution', level: 'h2',
        content: `Publication is completed with a formal transmittal, following Lesson cde-16, ensuring the contractor and client have a documented record of receipt.`,
        items: [
          'Transmittal created including this sheet and any related sheets in the same issue package',
          'Issue Purpose set to IFC (Issued for Construction)',
          'Recipients: main contractor site team, client representative',
          'Outstanding acknowledgement tracked until the contractor confirms receipt',
        ],
      },
      {
        id: 's7', heading: 'Common End-to-End Mistakes', level: 'h2',
        content: `**Mistake:**
Exporting directly to Published from a Revit sheet without ever passing through Shared-state coordination. This is the single most common way an uncoordinated drawing reaches site.

**Mistake:**
Losing track of which specific Revit model version a Published sheet was exported from, making it hard to reproduce or amend later. Note the source model version in the revision description.

**Best Practice:**
Treat this six-stage sequence as a fixed checklist for every formally issued sheet — the length of time each stage takes will vary by project urgency, but no stage should ever be skipped.`,
      },
    ],
    takeaways: [
      'A drawing\'s journey through the CDE follows six connected stages: create in WIP, internal review, Shared coordination, issue resolution, formal sign-off, and transmittal.',
      'Revit-level WIP (within the model) feeds into CDE-level WIP (the exported, named container) — these are related but distinct.',
      'Coordination issues found in the Shared state send the sheet back through WIP for correction before it can be published.',
      'Formal sign-off assigns the final suitability code and moves the sheet into the Published folder.',
      'Publication is completed with a transmittal, not just an upload — recipients and acknowledgement should be tracked.',
      'Skipping the Shared-state coordination step is the most common way an uncoordinated drawing reaches site.',
    ],
    resource: { label: 'End-to-End Drawing Issue Workflow Map', type: 'PDF' },
    quiz: { label: 'Drawing Issue Workflow Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-17', title: 'The Revision System — How Files Evolve Through the CDE' },
    next: { id: 'cde-19', title: 'RFI & Issue Workflow Inside the CDE Process' },
  },

  // ============================================================
  // LESSON CDE-19 — RFI & Issue Workflow
  // ============================================================
  {
    id: 'cde-19', num: '19',
    title: 'RFI & Issue Workflow Inside the CDE Process',
    topic: 'RFI & Issues', cat: 'intermediate', readTime: '8 min', free: false,
    desc: 'Understand how RFIs and site issues connect back into the CDE, and how their resolution should feed formally back into published information.',
    intro: `Requests for Information (RFIs) and site issues are how gaps and conflicts discovered during construction feed back into the design information held in the CDE. Handled well, this is a tight, well-documented loop. Handled poorly, it becomes a parallel, untracked communication channel that quietly undermines everything the CDE is meant to control. This lesson connects the RFI and issue workflow directly to the CDE concepts already covered.`,
    sections: [
      {
        id: 's1', heading: 'What an RFI Is, in CDE Terms', level: 'h2',
        content: `An RFI is a formal query raised — typically by the contractor — asking for clarification, missing information, or a decision on a specific point, where the currently Published information is unclear, incomplete, or apparently contradictory.`,
        formula: { label: 'RFI Trigger', text: 'An RFI exists precisely because the Published information in the CDE did not answer a question the recipient needed answered' },
      },
      {
        id: 's2', heading: 'The RFI Lifecycle', level: 'h2',
        content: `RFIs follow a "ball-in-court" model — responsibility for the next action passes explicitly between parties, and this responsibility should always be visible and trackable.`,
        code: {
          label: 'RFI Lifecycle Stages',
          lines: [
            '1. OPEN         → Contractor raises the RFI, references the relevant Published container',
            '2. ASSIGNED     → Ball-in-court passes to the responsible discipline/consultant',
            '3. IN PROGRESS  → Discipline investigates, may need to revisit WIP to formulate an answer',
            '4. ANSWERED     → Formal written response issued, ball-in-court returns to contractor',
            '5. CLOSED       → Contractor confirms the response is sufficient, or a follow-up RFI is raised',
          ],
        },
      },
      {
        id: 's3', heading: 'When an RFI Response Requires a New Revision', level: 'h2',
        content: `Some RFIs can be answered with a simple written clarification. Others reveal that the underlying Published information itself needs to change — and this must trigger the full revision cycle, not just a side conversation.`,
        items: [
          'A written-only response is appropriate when the existing Published information was correct but simply unclear or incomplete in presentation',
          'A revision is required when the RFI reveals an actual error, omission, or coordination gap in the Published content itself',
          'The RFI response should explicitly state which outcome applies — leaving this ambiguous is a common source of later dispute',
          'If a revision is triggered, it follows the exact same WIP → Shared → Published cycle covered in Lessons cde-9 through cde-14',
        ],
        formula: { label: 'RFI Outcome Rule', text: 'Clarify in writing only if nothing about the Published information changes — otherwise, always trigger a formal revision' },
      },
      {
        id: 's4', heading: 'Issues vs RFIs — A Practical Distinction', level: 'h2',
        content: `RFIs and Issues (as tracked in ACC Build) serve related but distinct purposes, and confusing them creates reporting and accountability problems.`,
        code: {
          label: 'RFIs vs Issues',
          lines: [
            'RFI      → A formal question requiring a documented answer',
            '           Typically has legal/contractual weight; time-tracked for response',
            '',
            'ISSUE    → A tracked problem, defect, or task requiring resolution',
            '           May originate from a site observation, a QA check, or a coordination clash',
            '           Not every Issue requires a formal written answer, but it does require closure',
          ],
        },
      },
      {
        id: 's5', heading: 'Linking RFIs and Issues Back to Information Containers', level: 'h2',
        content: `Every RFI and Issue should explicitly reference the specific information container(s) it relates to — this is what makes the CDE and the RFI/Issue log function as one connected system rather than two disconnected records.`,
        items: [
          'Reference the exact container name and revision the RFI concerns (e.g. "regarding DPC2025-STR-ZZ-01-DR-S-0014, Rev C01")',
          'If a revision is triggered in response, cross-reference the RFI number in the new revision\'s description',
          'This linkage is what allows a future audit to trace: "why did this drawing change? → because of RFI-0047"',
        ],
      },
      {
        id: 's6', heading: 'Common RFI/Issue Mistakes', level: 'h2',
        content: `**Mistake:**
Answering an RFI informally by phone or in a site meeting, with no written record filed against it. If a dispute arises later, an unrecorded verbal answer carries no weight.

**Mistake:**
Closing an RFI without triggering the revision cycle when the answer actually reveals an error in Published information. The contractor is now building from information the design team already knows is wrong.

**Best Practice:**
Review the RFI/Issue log against the CDE's revision history periodically, confirming every RFI that should have triggered a revision actually did.`,
      },
    ],
    takeaways: [
      'An RFI is a formal query raised because Published information in the CDE did not answer a question the recipient needed answered.',
      'RFIs follow a ball-in-court lifecycle: open, assigned, in progress, answered, closed — responsibility should always be visible.',
      'An RFI response that reveals an actual error must trigger a full revision cycle, not just a written clarification.',
      'RFIs and Issues are related but distinct — RFIs are formal questions requiring documented answers; Issues are tracked problems requiring closure.',
      'Every RFI and Issue should reference the specific container and revision it relates to, linking the two systems together.',
      'Periodically audit the RFI/Issue log against the revision history to confirm every RFI that should have triggered a revision actually did.',
    ],
    resource: { label: 'RFI & Issue Workflow Reference Guide', type: 'PDF' },
    quiz: { label: 'RFI & Issue Workflow Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-18', title: 'Drawing Issue Workflow — From Revit to Published Sheet in ACC' },
    next: { id: 'cde-20', title: 'Multi-Party CDEs — Managing Interfaces Between Appointed Parties' },
  },

  // ============================================================
  // LESSON CDE-20 — Multi-Party CDEs
  // ============================================================
  {
    id: 'cde-20', num: '20',
    title: 'Multi-Party CDEs — Managing Interfaces Between Appointed Parties',
    topic: 'Multi-Party CDE', cat: 'intermediate', readTime: '9 min', free: false,
    desc: 'Understand how a CDE functions when multiple appointed parties, each with their own internal systems, need to interface with one shared environment.',
    intro: `Real projects rarely involve just one CDE platform. A main contractor might run their own CDE while sub-contractors and specialist designers use different tools internally, all needing to interface with a single project-level CDE. This lesson covers how multi-party CDE structures work, and how to manage the boundary points where information crosses from one organisation's system into the shared project environment.`,
    sections: [
      {
        id: 's1', heading: 'Why Multi-Party Structures Are the Norm, Not the Exception', level: 'h2',
        content: `On any project beyond a small scale, different appointed parties will have their own internal tools, standards, and working practices, entirely separate from the project's agreed CDE. Understanding this reality is essential to designing a workable interface.`,
        items: [
          'A specialist facade sub-contractor may work entirely in their own modelling software and internal file system',
          'A main contractor may run their own internal document control system in parallel with the project CDE',
          'Different consultants may be on different versions of the same authoring software',
          'The project CDE cannot force every organisation to abandon their internal systems — it must define clear interface points instead',
        ],
      },
      {
        id: 's2', heading: 'The Lead Appointed Party as Interface Manager', level: 'h2',
        content: `In a multi-party structure, the Lead Appointed Party (Lesson cde-6) typically takes on responsibility for managing the interfaces between each appointed party's internal working methods and the single project CDE.`,
        formula: { label: 'Interface Principle', text: 'Every appointed party can work however they choose internally — but everything crossing into the shared project CDE must conform to the agreed naming, metadata, and state rules' },
      },
      {
        id: 's3', heading: 'Defining Interface Points in the BEP', level: 'h2',
        content: `The BIM Execution Plan should explicitly define where and how each appointed party's internal information becomes project-CDE information.`,
        subsections: [
          {
            heading: 'What the BEP Should Specify Per Appointed Party',
            items: [
              'Which of their internal deliverables cross into the project CDE, and at what stage',
              'What format conversion (if any) is required at the interface (e.g. proprietary model format → IFC)',
              'Who is responsible for renaming/re-tagging content to the project naming convention before it enters the CDE',
              'What quality checks apply specifically at this interface point, beyond the appointed party\'s own internal review',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Sub-Contractor Design Information — A Worked Example', level: 'h2',
        content: `A concrete example: a structural steel sub-contractor working in their own detailing software, feeding coordination information into the DPC2025 project CDE.`,
        code: {
          label: 'DPC2025 Sub-Contractor Interface Example',
          lines: [
            'Sub-contractor internal system:',
            '  → Steel detailing software, proprietary file format, internal file naming',
            '',
            'Interface point (defined in BEP):',
            '  → Export to IFC before every coordination cycle',
            '  → Rename to DPC2025 naming convention: DPC2025-XYZ-ZZ-ZZ-MO-X-0001',
            '  → Upload to Structure [Shared], tagged with correct discipline/status metadata',
            '',
            'Main contractor (Lead Appointed Party) verifies:',
            '  → Naming and metadata correct before content is trusted for federation',
          ],
        },
      },
      {
        id: 's5', heading: 'Multiple CDE Platforms on One Project', level: 'h2',
        content: `Occasionally, more than one CDE platform genuinely operates on the same project — for example, a design-stage CDE on ACC transitioning to a different construction-stage platform preferred by the main contractor.`,
        items: [
          'This should be a deliberate, documented decision in the BEP — not an accidental drift as different parties adopt different tools',
          'A clear data migration and interface plan is required for the transition point between platforms',
          'Version and revision history must be preserved across the transition, not restarted from zero',
          'Where possible, minimise the number of platform transitions on a single project — each one is a risk point for lost information',
        ],
      },
      {
        id: 's6', heading: 'Common Multi-Party Mistakes', level: 'h2',
        content: `**Mistake:**
Assuming every appointed party understands the project naming convention and metadata rules without formal onboarding (Lesson cde-31). Sub-contractors in particular are often the last party brought into the process, and the first to make naming errors.

**Mistake:**
Allowing an appointed party to upload directly to Shared or Published without their content passing through an agreed interface check. This is how inconsistent naming, missing metadata, and unverified information enter the project record.

**Best Practice:**
Assign a single named person on the Lead Appointed Party's team as the interface checkpoint for each sub-contractor or lower-tier consultant, responsible for verifying content before it enters the shared CDE.`,
      },
    ],
    takeaways: [
      'Multi-party project structures — where different appointed parties use different internal systems — are the norm on any project beyond a small scale.',
      'Every appointed party can work internally however they choose, but everything entering the shared project CDE must conform to the agreed naming, metadata, and state rules.',
      'The Lead Appointed Party typically manages these interface points, and the BEP should explicitly define them per appointed party.',
      'Format conversion, renaming, and quality checks at the interface point are often necessary before sub-contractor content is trusted for federation.',
      'Multiple CDE platforms on one project should be a deliberate, documented decision with a clear migration plan, not an accidental drift.',
      'Assigning a named interface checkpoint person for each lower-tier party catches naming and metadata errors before they enter the shared CDE.',
    ],
    resource: { label: 'Multi-Party CDE Interface Planning Guide', type: 'PDF' },
    quiz: { label: 'Multi-Party CDEs Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-19', title: 'RFI & Issue Workflow Inside the CDE Process' },
    next: { id: 'cde-21', title: 'The BIM Execution Plan & CDE — How They Connect' },
  },

  // ============================================================
  // LESSON CDE-21 — The BIM Execution Plan & CDE
  // ============================================================
  {
    id: 'cde-21', num: '21',
    title: 'The BIM Execution Plan & CDE — How They Connect',
    topic: 'BEP & Governance', cat: 'advanced', readTime: '9 min', free: false,
    desc: 'Understand exactly which CDE decisions the BIM Execution Plan must document, and how to write those sections so they are actually usable.',
    intro: `Almost every lesson in this course has referenced "as agreed in the BEP" — the BIM Execution Plan. This lesson steps back and treats the BEP as its own subject, focusing specifically on the CDE-related content it must contain. A BEP that is vague about CDE configuration produces a CDE that different appointed parties interpret differently, undermining the consistency the whole system depends on.`,
    sections: [
      {
        id: 's1', heading: 'What the BEP Is, Briefly', level: 'h2',
        content: `The BIM Execution Plan is the document in which the delivery team sets out how they will meet the appointing party's Exchange Information Requirements (EIR). It exists in two forms across the project lifecycle: a **pre-appointment BEP**, demonstrating capability during tender, and a **post-appointment BEP**, the detailed working document the team actually follows.`,
        formula: { label: 'BEP Purpose', text: 'The EIR states what the client needs; the BEP states exactly how the delivery team will produce and manage it' },
      },
      {
        id: 's2', heading: 'The CDE-Specific Sections of a BEP', level: 'h2',
        content: `Every BEP should contain a dedicated CDE section, or set of sections, covering the specific decisions this course has walked through lesson by lesson.`,
        code: {
          label: 'Required CDE Content in the BEP',
          lines: [
            'CDE platform selection and licensing responsibility',
            'Naming convention field codes (Project, Originator, Volume, Location, Type, Role)',
            'Folder structure mapped to the four CDE states',
            'Suitability code table and issue purpose codes to be used',
            'Roles and responsibility matrix (who authorises what, at each gate)',
            'Permission structure and access rules per appointed party',
            'Federation and coordination cycle cadence',
            'Security requirements (Lesson cde-29) where sensitive information is involved',
          ],
        },
      },
      {
        id: 's3', heading: 'Writing the BEP So It Is Actually Followed', level: 'h2',
        content: `A common failure mode is a BEP that is technically complete but never referred to again after project kickoff. Writing it to actually be used requires a different approach than writing it to satisfy a tender requirement.`,
        items: [
          'Use tables and field code lists rather than dense prose — this is reference material, not a narrative document',
          'Keep the CDE section short enough that a new team member can read it in one sitting during onboarding (Lesson cde-31)',
          'Cross-reference the BEP directly from the CDE platform itself where possible (e.g. a pinned document in ACC Docs)',
          'Review and update the BEP at defined project gateways, not just once at the start',
        ],
      },
      {
        id: 's4', heading: 'The Master Information Delivery Plan (MIDP)', level: 'h2',
        content: `Closely related to the BEP is the Master Information Delivery Plan — a schedule of what information containers will be delivered, by whom, and when, aggregated from each Task Information Delivery Plan (TIDP) across disciplines.`,
        items: [
          '**TIDP** — a single discipline\'s own schedule of container deliveries',
          '**MIDP** — the aggregated schedule across all disciplines, showing the whole project\'s information delivery timeline',
          'The MIDP should align directly with the CDE state and suitability progression each container is expected to follow at each project stage',
          'Late MIDP delivery is an early warning indicator worth tracking as closely as design or construction programme delays',
        ],
      },
      {
        id: 's5', heading: 'Reconciling BEP Content with Actual CDE Configuration', level: 'h2',
        content: `A BEP is only valuable if it accurately reflects the CDE as actually configured and used. Divergence between the two — written on paper but not implemented in practice — undermines both documents.`,
        items: [
          'When the Information Manager reconfigures a permission set or folder structure, update the BEP to match, not just the platform',
          'Periodically audit that the CDE platform configuration (Lesson cde-8) genuinely matches what the BEP describes',
          'If a project-specific exception to the standard process is agreed informally, document it in the BEP before it becomes an undocumented habit',
        ],
      },
      {
        id: 's6', heading: 'Common BEP-CDE Mistakes', level: 'h2',
        content: `**Mistake:**
Writing an extensively detailed BEP at tender stage that is never revisited once the project starts, while the actual CDE configuration evolves independently. The two documents drift apart, and neither is trustworthy.

**Mistake:**
Leaving suitability codes, naming fields, or role responsibilities generic or unstated in the BEP "to be agreed later." This guarantees inconsistent interpretation across appointed parties from day one.

**Best Practice:**
Treat the BEP's CDE section as a living configuration reference, reviewed at every project gateway, not a one-time compliance document.`,
      },
    ],
    takeaways: [
      'The BEP is how the delivery team documents exactly how they will meet the appointing party\'s Exchange Information Requirements — including how the CDE will be configured and governed.',
      'Every BEP should contain a dedicated CDE section covering naming, folder structure, suitability, roles, permissions, and coordination cadence.',
      'Write the CDE section as reference material — tables and field lists — not dense prose, so it is actually used during onboarding.',
      'The MIDP aggregates every discipline\'s TIDP into a single project-wide information delivery schedule, aligned with the CDE state progression.',
      'A BEP is only valuable if it is kept in sync with the actual CDE configuration — divergence between the two undermines both.',
      'Review the BEP\'s CDE section at every project gateway, not just once at project kickoff.',
    ],
    resource: { label: 'BEP CDE Section Template', type: 'PDF' },
    quiz: { label: 'BEP & CDE Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-20', title: 'Multi-Party CDEs — Managing Interfaces Between Appointed Parties' },
    next: { id: 'cde-22', title: 'Federated Model Management in the CDE' },
  },

  // ============================================================
  // LESSON CDE-22 — Federated Model Management in the CDE
  // ============================================================
  {
    id: 'cde-22', num: '22',
    title: 'Federated Model Management in the CDE',
    topic: 'Model Federation', cat: 'advanced', readTime: '9 min', free: false,
    desc: 'Go beyond the mechanics of federation (cde-12) into the ongoing governance required to keep a federated model reliable across a whole project.',
    intro: `Lesson cde-12 covered how federation technically works. This lesson covers the ongoing management discipline required to keep a federated model trustworthy across months or years of an active project — versioning the federation itself, managing large model performance, and handling the governance questions that only emerge once federation becomes a routine, high-frequency activity rather than a one-off exercise.`,
    sections: [
      {
        id: 's1', heading: 'Federation as an Ongoing Managed Process', level: 'h2',
        content: `On a short project, federation might happen a handful of times. On a large, long-duration project, it can happen weekly or even daily across the design and construction phases — at which point federation itself needs formal management, not just a one-time technical setup.`,
        formula: { label: 'Management Shift', text: 'Early project: federation is a task | Mature project: federation is a managed, recurring service with its own owner and SLA' },
      },
      {
        id: 's2', heading: 'Federation Ownership and Governance', level: 'h2',
        content: `As federation frequency increases, clear ownership of the federation process itself becomes essential — someone needs to be accountable for it running correctly every cycle.`,
        items: [
          'The Information Manager typically owns the federation process end-to-end, even though they do not author any of the underlying discipline content',
          'A documented federation procedure (which models, in what order, at what frequency) prevents the process depending on one person\'s memory',
          'Federation failures (a missing discipline model, a broken reference) should be logged and tracked like any other project issue',
        ],
      },
      {
        id: 's3', heading: 'Managing Federation at Scale', level: 'h2',
        content: `Large projects introduce practical performance and organisation challenges that a small federation exercise never encounters.`,
        subsections: [
          {
            heading: 'Scaling Strategies',
            items: [
              '**Zone-based federation** — splitting a large site into zones to keep individual federation files a manageable size',
              '**Selective federation** — federating only the disciplines relevant to a specific review, rather than always combining everything',
              '**Model optimisation** — encouraging disciplines to purge unused elements and manage file size before publishing to Shared',
              '**Federation scheduling** — running heavy full-project federations overnight or off-peak, with lighter zone federations available on demand',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Version Control for the Federated Model Itself', level: 'h2',
        content: `Because the federated model is its own information container (Lesson cde-3, cde-12), it needs its own version history — separate from, but referencing, the discipline models it combines.`,
        items: [
          'Each federation refresh should be logged with a timestamp and the specific Shared-state revision of each contributing discipline model',
          'This allows a later question — "what did the federated model look like on the date of this coordination meeting?" — to be answered precisely',
          'Federated model history supports the same audit and compliance function as discipline model history (Lesson cde-15)',
        ],
      },
      {
        id: 's5', heading: 'Federation Across Multiple CDE Platforms', level: 'h2',
        content: `In multi-party structures (Lesson cde-20), federation sometimes needs to combine content sourced from more than one platform — requiring an explicit process for pulling content together consistently.`,
        items: [
          'A common pattern: convert all contributing models to a neutral format (typically IFC) before combining, regardless of source platform',
          'Document exactly which platform each discipline model originates from, and who is responsible for exporting/uploading it to the federation point',
          'Test the cross-platform federation process early in the project, not for the first time under deadline pressure at a critical coordination milestone',
        ],
      },
      {
        id: 's6', heading: 'Common Federation Management Mistakes', level: 'h2',
        content: `**Mistake:**
Relying on a single individual's informal process to run federation, with no documented procedure. If that person is unavailable, federation stops — a single point of failure in a process the whole design team depends on.

**Mistake:**
Federating the entire project every time, even for a review that only concerns two disciplines. This wastes time and computing resources and slows down reviews that could be handled with a lighter, targeted federation.

**Best Practice:**
Document the federation procedure as a simple runbook, assign a backup owner in addition to the primary Information Manager, and review file performance and federation scope quarterly as the project grows.`,
      },
    ],
    takeaways: [
      'On a large or long-duration project, federation shifts from being a one-off task to an ongoing managed process with its own owner and procedure.',
      'The Information Manager typically owns federation governance end-to-end, even without authoring any of the underlying content.',
      'Zone-based and selective federation strategies keep large projects\' coordination models a manageable, reviewable size.',
      'The federated model needs its own version history, logging which Shared-state revision of each discipline model it referenced at each refresh.',
      'Cross-platform federation should convert to a neutral format like IFC and be tested early, not for the first time under deadline pressure.',
      'Documenting federation as a runbook with a backup owner avoids a single point of failure in a process the whole design team relies on.',
    ],
    resource: { label: 'Federation Governance Runbook Template', type: 'PDF' },
    quiz: { label: 'Federated Model Management Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-21', title: 'The BIM Execution Plan & CDE — How They Connect' },
    next: { id: 'cde-23', title: 'Clash Detection Workflow Within the CDE Process' },
  },

  // ============================================================
  // LESSON CDE-23 — Clash Detection Workflow
  // ============================================================
  {
    id: 'cde-23', num: '23',
    title: 'Clash Detection Workflow Within the CDE Process',
    topic: 'Clash Detection', cat: 'advanced', readTime: '8 min', free: false,
    desc: 'Understand how clash detection connects to the CDE state model, and how to run a clash workflow that actually resolves issues rather than just logging them.',
    intro: `Clash detection is one of the most visible activities that happens inside the Shared state, but running clash tests is not the same as running a clash detection *workflow*. Without clear ownership, assignment, and closure tracking tied back to the CDE, clash detection produces long reports nobody actually works through. This lesson connects clash detection directly to the state model and roles already covered.`,
    sections: [
      {
        id: 's1', heading: 'Where Clash Detection Sits in the CDE Process', level: 'h2',
        content: `Clash detection always runs against federated, Shared-state content (Lessons cde-11 and cde-12) — never against WIP, and rarely meaningfully against Published content, which should already be clash-free by the time it is issued.`,
        formula: { label: 'Clash Detection Source Rule', text: 'Clash detection reads from the federated model, which itself reads only from Shared or later — WIP content should never enter a clash test' },
      },
      {
        id: 's2', heading: 'Clash Types Worth Distinguishing', level: 'h2',
        content: `Not every detected clash represents the same level of risk. Categorising clash types helps a coordination team prioritise correctly.`,
        code: {
          label: 'Clash Type Categories',
          lines: [
            'HARD CLASH      → Physical geometry overlap between two elements',
            'SOFT CLASH      → Clearance/tolerance violation (no physical overlap, but insufficient space)',
            'WORKFLOW CLASH  → Sequencing conflict (e.g. one trade needs access before another\'s work is complete)',
            '',
            'Hard clashes are typically highest priority — they represent a build impossibility',
            'Soft clashes matter most for maintenance access and future serviceability',
          ],
        },
      },
      {
        id: 's3', heading: 'The Clash Resolution Cycle', level: 'h2',
        content: `A clash test result is the start of a workflow, not the end of one. Each clash needs to move through a defined cycle to actual closure.`,
        code: {
          label: 'Clash Resolution Cycle',
          lines: [
            '1. Clash test run against current federated model',
            '2. Results triaged — duplicates and false positives removed',
            '3. Genuine clashes assigned to the responsible discipline(s)',
            '4. Discipline resolves the clash in their own WIP model',
            '5. Corrected model moves back to Shared (new revision)',
            '6. Federation refreshed, clash test re-run to confirm resolution',
            '7. Clash formally closed in the tracking log',
          ],
        },
      },
      {
        id: 's4', heading: 'Assigning Ownership for Multi-Discipline Clashes', level: 'h2',
        content: `Many clashes involve two or more disciplines, and unclear ownership is one of the most common reasons clashes stay open far longer than necessary.`,
        items: [
          'Assign a single discipline as primarily responsible for resolution, even for multi-party clashes — shared ownership without a lead frequently means nobody acts',
          'The responsible discipline should confirm the agreed resolution approach with the other affected discipline(s) before making changes',
          'Where disciplines disagree on who should move, escalate to the Information Manager or coordination meeting for a ruling — do not leave it unresolved indefinitely',
        ],
      },
      {
        id: 's5', heading: 'Tracking Clash Status Over Time', level: 'h2',
        content: `A clash log's real value comes from tracking trends over time, not just the current snapshot — this reveals whether coordination is genuinely improving as the project matures.`,
        items: [
          'Track total open clashes, new clashes per cycle, and closed clashes per cycle at each coordination meeting',
          'A rising trend in new clashes late in design development is an early warning sign worth escalating',
          'Persistent recurring clashes between the same two disciplines may indicate a deeper coordination process problem, not just isolated design errors',
        ],
      },
      {
        id: 's6', heading: 'Common Clash Workflow Mistakes', level: 'h2',
        content: `**Mistake:**
Running clash tests and distributing the raw report without triage, assignment, or a tracked resolution path. Long, unfiltered clash reports are quickly ignored by the team.

**Mistake:**
Closing a clash in the log without re-running the test to confirm the fix actually worked. A clash marked "resolved" that was never re-verified is a false sense of security.

**Best Practice:**
Always re-run the clash test after a fix is applied, before formally closing the item — verification, not just correction, closes the loop.`,
      },
    ],
    takeaways: [
      'Clash detection always runs against federated, Shared-state content — never against WIP, and Published content should already be clash-free.',
      'Distinguishing hard clashes, soft clashes, and workflow clashes helps a coordination team prioritise correctly.',
      'A clash result is the start of a resolution cycle: triage, assign, resolve in WIP, re-publish to Shared, re-test, and formally close.',
      'Every clash — especially multi-discipline ones — needs a single assigned owner, or resolution stalls indefinitely.',
      'Tracking clash trends over time (not just a single snapshot) reveals whether coordination is genuinely improving as the project matures.',
      'Always re-run the clash test after a fix before closing the item — a fix that is never re-verified is a false sense of security.',
    ],
    resource: { label: 'Clash Detection Workflow & Tracking Log', type: 'PDF' },
    quiz: { label: 'Clash Detection Workflow Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-22', title: 'Federated Model Management in the CDE' },
    next: { id: 'cde-24', title: 'CDE Across Project Stages — RIBA Plan of Work & ISO 19650 Phases' },
  },

  // ============================================================
  // LESSON CDE-24 — CDE Across Project Stages
  // ============================================================
  {
    id: 'cde-24', num: '24',
    title: 'CDE Across Project Stages — RIBA Plan of Work & ISO 19650 Phases',
    topic: 'Project Stages', cat: 'advanced', readTime: '9 min', free: false,
    desc: 'Understand how CDE activity and suitability expectations shift across the RIBA Plan of Work stages and the ISO 19650 delivery phases.',
    intro: `The CDE does not behave identically throughout a project — the volume of activity, the dominant suitability codes in use, and the balance between WIP, Shared, and Published content all shift as the project moves through its stages. This lesson maps CDE behaviour against the RIBA Plan of Work stages and the ISO 19650 delivery phases, so that expectations at each point in a project are calibrated correctly.`,
    sections: [
      {
        id: 's1', heading: 'The RIBA Plan of Work Stages, Briefly', level: 'h2',
        content: `The RIBA Plan of Work divides a project into eight numbered stages, from strategic definition through to use. Each stage has a different information intensity and a different dominant purpose for CDE activity.`,
        code: {
          label: 'RIBA Plan of Work Stages',
          lines: [
            '0 Strategic Definition   5 Manufacturing & Construction',
            '1 Preparation & Briefing 6 Handover',
            '2 Concept Design         7 Use',
            '3 Spatial Coordination',
            '4 Technical Design',
          ],
        },
      },
      {
        id: 's2', heading: 'CDE Behaviour at Early Stages (0-2)', level: 'h2',
        content: `At Strategic Definition, Briefing, and Concept Design, CDE activity is dominated by WIP and early Shared content — very little is Published, and suitability codes rarely progress beyond S1/S2.`,
        items: [
          'High volume of design options and alternatives, mostly staying in WIP',
          'Federation, where it happens at all, is lightweight and infrequent',
          'Published content at this stage is typically limited to stage reports and key strategic decisions, not detailed drawings',
          'The BEP and naming convention (Lessons cde-4, cde-21) should already be fully agreed by the start of Stage 2, even though CDE activity is still light',
        ],
      },
      {
        id: 's3', heading: 'CDE Behaviour at Mid Stages (3-4)', level: 'h2',
        content: `Spatial Coordination and Technical Design are where CDE activity intensifies dramatically — this is the busiest period for the Shared state specifically.`,
        items: [
          'Weekly or twice-weekly coordination cycles become standard (Lesson cde-11)',
          'Federation and clash detection activity peaks (Lessons cde-12, cde-23)',
          'Suitability codes progress through S3/S4 (review and stage approval) as design decisions are locked down',
          'The volume of RFIs is typically still low at this stage — most queries are resolved through internal coordination, not formal RFIs',
        ],
        formula: { label: 'Stage 3-4 Characteristic', text: 'This is peak Shared-state activity — the busiest period for coordination, federation, and clash resolution in the whole project' },
      },
      {
        id: 's4', heading: 'CDE Behaviour at Construction Stages (5-6)', level: 'h2',
        content: `Manufacturing & Construction and Handover shift the CDE's centre of gravity toward Published content, formal transmittals, and the RFI/Issue workflow.`,
        items: [
          'Published content dominates — most active work is around C-series revisions and Suitable for Construction status',
          'RFI volume typically peaks during construction, as site conditions and buildability questions surface (Lesson cde-19)',
          'Handover-specific deliverables begin to accumulate: COBie data, O&M documentation, as-built records (Lessons cde-26, cde-27)',
          'Archive volume grows rapidly as construction-stage revisions supersede design-stage ones',
        ],
      },
      {
        id: 's5', heading: 'CDE Behaviour in Use (Stage 7) — The AIM Handoff', level: 'h2',
        content: `Once the project reaches Stage 7 (Use), the CDE's role shifts from managing project delivery information to supporting the Asset Information Model under ISO 19650-3 — a longer-term, operational information environment.`,
        items: [
          'The delivery-phase CDE\'s final Published/Archived content becomes the baseline for the operational AIM',
          'Facilities management teams become the primary users, replacing the design and construction teams as the CDE\'s main audience',
          'Ongoing changes during use (refurbishments, replacements) re-enter a CDE-like process of their own, feeding back into the AIM',
        ],
      },
      {
        id: 's6', heading: 'Calibrating Expectations at Each Stage', level: 'h2',
        content: `**Mistake:**
Expecting the same intensity of federation and clash detection at Stage 1 as at Stage 3-4. Over-engineering CDE process too early wastes effort on content that will substantially change anyway.

**Mistake:**
Under-resourcing CDE and Information Manager time during Stage 3-4, when it is actually at its most demanding, because early stages felt comparatively light.

**Best Practice:**
Plan Information Manager resourcing and coordination meeting frequency around the expected stage-by-stage intensity described in this lesson, rather than applying a flat level of process throughout the whole project.`,
      },
    ],
    takeaways: [
      'CDE activity intensity and dominant suitability codes shift predictably across the RIBA Plan of Work stages.',
      'Early stages (0-2) are WIP-heavy with light, infrequent federation — the BEP and naming convention should already be agreed by Stage 2.',
      'Mid stages (3-4) are peak Shared-state activity — heaviest coordination, federation, and clash detection workload of the whole project.',
      'Construction stages (5-6) shift the centre of gravity to Published content, formal transmittals, RFI volume, and early handover deliverables.',
      'Stage 7 (Use) transitions the CDE\'s role into supporting the long-term Asset Information Model under ISO 19650-3.',
      'Resourcing and process intensity should be planned around each stage\'s expected demand, not applied flatly across the whole project.',
    ],
    resource: { label: 'CDE Activity by Project Stage Reference Chart', type: 'PDF' },
    quiz: { label: 'CDE Across Project Stages Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-23', title: 'Clash Detection Workflow Within the CDE Process' },
    next: { id: 'cde-25', title: 'Submittals & Approval Workflows in ACC' },
  },

]
