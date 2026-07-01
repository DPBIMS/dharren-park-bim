// ============================================================
// COMMON DATA ENVIRONMENT — LESSONS cde-25 through cde-32 (ADVANCED)
// Section: Governance, Compliance & Handover
// File: lib/cdeLessonsContent/cdeLessons_25_32.js
// Index: lib/cdeLessonsData.js
// ============================================================

export const lessons_25_32 = [

  // ============================================================
  // LESSON CDE-25 — Submittals & Approval Workflows
  // ============================================================
  {
    id: 'cde-25', num: '25',
    title: 'Submittals & Approval Workflows in ACC',
    topic: 'Submittals & Approvals', cat: 'advanced', readTime: '8 min', free: false,
    desc: 'Understand how contractor submittals fit into the CDE process, and how to manage the approval workflow from opening to closure.',
    intro: `Submittals are the mechanism through which a contractor formally requests approval for a specific product, material, or method before proceeding — shop drawings, material samples, method statements. Like RFIs, submittals are a distinct workflow that must interface cleanly with the CDE's state and revision model, rather than operating as a disconnected side process.`,
    sections: [
      {
        id: 's1', heading: 'What a Submittal Is, and Why It Differs from an RFI', level: 'h2',
        content: `A submittal is a request for formal approval of the contractor's proposed means of executing a specific piece of design intent — distinct from an RFI, which is a request for clarification or missing information.`,
        formula: { label: 'Submittal vs RFI', text: 'RFI = "what does the design require?" | Submittal = "here is how I propose to deliver what the design requires — please approve it"' },
      },
      {
        id: 's2', heading: 'The Submittal Lifecycle', level: 'h2',
        content: `Submittals follow a defined approval lifecycle, tracked from the point the contractor opens the item through to formal closure.`,
        code: {
          label: 'Submittal Lifecycle Stages',
          lines: [
            '1. OPEN        → Contractor submits proposed product/material/method',
            '2. IN REVIEW   → Design team (typically the relevant discipline) reviews',
            '3. RESPONSE ISSUED → One of: Approved / Approved as Noted / Revise & Resubmit / Rejected',
            '4. CLOSED      → Contractor proceeds (if approved) or resubmits (if not)',
          ],
        },
      },
      {
        id: 's3', heading: 'Response Categories and What Each One Means', level: 'h2',
        content: `The specific response category attached to a submittal carries real contractual weight, and should be understood precisely by everyone using the workflow.`,
        items: [
          '**Approved** — the contractor may proceed exactly as submitted, no changes required',
          '**Approved as Noted** — the contractor may proceed, incorporating the reviewer\'s specific comments',
          '**Revise & Resubmit** — the submittal is not acceptable as proposed; a revised version must be submitted before proceeding',
          '**Rejected** — the proposed approach is not acceptable at all; an entirely different approach is required',
        ],
        formula: { label: 'Response Precision Rule', text: 'Never leave a submittal response ambiguous — "Approved as Noted" without clear, specific notes creates exactly the kind of dispute the workflow exists to prevent' },
      },
      {
        id: 's4', heading: 'Linking Submittals to Information Containers', level: 'h2',
        content: `Like RFIs (Lesson cde-19), submittals should reference the specific Published information container they relate to, keeping the CDE and the approval workflow connected as one system.`,
        items: [
          'Reference the specific specification section or drawing the submittal responds to, including its revision',
          'If an approved submittal changes the design intent, this should trigger a formal revision to the affected container, not just remain filed as a standalone approval',
          'Submittal registers should be cross-searchable against the CDE\'s container history for audit purposes',
        ],
      },
      {
        id: 's5', heading: 'Managing Submittal Volume and Timeliness', level: 'h2',
        content: `On an active construction project, submittal volume can be substantial, and delayed reviews directly impact the construction programme — this makes timeliness tracking as important as the review content itself.`,
        items: [
          'Set and track a target review turnaround time for each submittal type (materials vs shop drawings vs method statements often warrant different timeframes)',
          'Flag overdue submittals proactively — a submittal blocking a critical path activity needs visibility beyond the individual reviewer',
          'Batch related submittals (e.g. an entire trade package) where possible, rather than reviewing them in a scattered, ad hoc order',
        ],
      },
      {
        id: 's6', heading: 'Common Submittal Workflow Mistakes', level: 'h2',
        content: `**Mistake:**
Approving a submittal informally in a site meeting without logging it formally in the CDE's submittal register. This leaves no defensible record of what was actually approved.

**Mistake:**
Treating "Approved as Noted" responses as equivalent to a full approval without confirming the contractor actually incorporated the notes. Track these to closure, not just to response issued.

**Best Practice:**
Review the submittal register alongside the RFI log and the CDE revision history monthly, checking for approved changes that should have triggered a formal design revision but did not.`,
      },
    ],
    takeaways: [
      'A submittal is a request for approval of a contractor\'s proposed means of delivering design intent — distinct from an RFI, which requests clarification.',
      'Submittals follow a tracked lifecycle: open, in review, response issued, closed.',
      'Response categories (Approved, Approved as Noted, Revise & Resubmit, Rejected) carry real contractual weight and must be precise, never ambiguous.',
      'Submittals should reference the specific container and revision they relate to, and trigger a formal revision if they change design intent.',
      'Tracking submittal turnaround time is as important as review content, since delays directly impact the construction programme.',
      'Cross-check the submittal register against the CDE revision history regularly to catch approved changes that should have triggered a formal revision.',
    ],
    resource: { label: 'Submittal Workflow & Register Template', type: 'PDF' },
    quiz: { label: 'Submittals & Approvals Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-24', title: 'CDE Across Project Stages — RIBA Plan of Work & ISO 19650 Phases' },
    next: { id: 'cde-26', title: 'COBie Data Delivery Through the CDE' },
  },

  // ============================================================
  // LESSON CDE-26 — COBie Data Delivery
  // ============================================================
  {
    id: 'cde-26', num: '26',
    title: 'COBie Data Delivery Through the CDE',
    topic: 'COBie & Data', cat: 'advanced', readTime: '9 min', free: false,
    desc: 'Understand how COBie data is progressively assembled through the CDE states, and how to avoid the handover failures that plague poorly managed COBie deliveries.',
    intro: `COBie (Construction Operations Building Information Exchange) is the structured, spreadsheet-based data format most commonly required for handing over asset information to facilities management teams. COBie delivery failures are extremely common — not because the format is complicated, but because COBie data is rarely managed as a proper CDE information container throughout the project, and instead gets treated as a last-minute handover task.`,
    sections: [
      {
        id: 's1', heading: 'What COBie Actually Is', level: 'h2',
        content: `COBie is a structured spreadsheet format capturing non-graphical asset data — equipment, spaces, systems, and their attributes (manufacturer, model, warranty, maintenance schedule) — in a format facilities management software can import directly.`,
        formula: { label: 'COBie Purpose', text: 'COBie is not a drawing substitute — it is the structured non-graphical data layer that feeds facilities management systems after handover' },
      },
      {
        id: 's2', heading: 'Why COBie Should Be Progressive, Not a Handover Sprint', level: 'h2',
        content: `The single biggest cause of poor-quality COBie delivery is treating it as a task to complete at the very end of a project, rather than data that accumulates progressively as design and construction proceed.`,
        items: [
          'Asset data (types, classifications, key attributes) should be captured as models are developed, not retrofitted at handover',
          'Waiting until handover means missing attributes are discovered only when it is most expensive and time-consuming to go back and find them',
          'A progressive approach treats COBie data as another information container type, subject to the same state model as everything else in this course',
        ],
      },
      {
        id: 's3', heading: 'COBie Data Through the CDE States', level: 'h2',
        content: `COBie data has its own version of the WIP → Shared → Published → Archived progression, tied to the project's overall stage progression from Lesson cde-24.`,
        code: {
          label: 'COBie Data Progression Through CDE States',
          lines: [
            'WIP        → Discipline models being authored with COBie parameters incomplete',
            'Shared     → Draft COBie export checked for structural completeness (all required fields present)',
            'Published  → Formal COBie deliverable issued at defined project stage gateways',
            'Archived   → Superseded COBie exports retained; only the final handover export is authoritative',
          ],
        },
      },
      {
        id: 's4', heading: 'Where COBie Data Actually Comes From', level: 'h2',
        content: `COBie exports are typically generated from the discipline BIM models themselves, meaning data quality upstream in the model directly determines COBie quality downstream.`,
        items: [
          'Model elements need correctly populated type and instance parameters mapped to COBie fields — space, component, type, system, etc.',
          'Consistent classification (e.g. Uniclass 2015) supports reliable COBie type grouping across disciplines',
          'A COBie responsibility matrix (part of the MIDP, Lesson cde-21) should state exactly which discipline is responsible for which COBie data category',
        ],
      },
      {
        id: 's5', heading: 'Validating COBie Data Before Handover', level: 'h2',
        content: `Before a COBie deliverable is formally Published as the handover version, it should go through a structured validation process, not just a visual spot check.`,
        subsections: [
          {
            heading: 'COBie Validation Checklist',
            items: [
              'Run an automated COBie validation tool to check for missing mandatory fields',
              'Cross-check space and component counts against the design intent — missing rows are as much a risk as incorrect data',
              'Confirm classification codes are consistent across all contributing disciplines',
              'Spot-check a sample of records manually against the source model for accuracy, not just structural completeness',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Common COBie Mistakes', level: 'h2',
        content: `**Mistake:**
Leaving COBie parameter population until the final weeks of the project. By this point, correcting missing data across hundreds of model elements is far more expensive than capturing it progressively.

**Mistake:**
Treating structural completeness (no blank fields) as equivalent to data accuracy. A COBie export with every field populated but with the wrong warranty dates is arguably worse than an obviously incomplete one, because the error is not visible.

**Best Practice:**
Run a lightweight COBie validation check at each project stage gateway, not just once at the very end — catching gaps progressively is far cheaper than a single, high-stakes validation at handover.`,
      },
    ],
    takeaways: [
      'COBie is the structured non-graphical data format used to hand over asset information to facilities management systems, not a drawing substitute.',
      'COBie data should be captured progressively as design and construction proceed, not retrofitted as a last-minute handover task.',
      'COBie deliverables follow the same CDE state progression as any other information container: WIP, Shared, Published, Archived.',
      'COBie quality is only as good as the underlying model data — correctly populated parameters and consistent classification are essential upstream.',
      'A structured validation process, checking both completeness and accuracy, should run before any COBie deliverable is formally published as the handover version.',
      'Running lightweight COBie validation at every project stage gateway is far cheaper than a single high-stakes validation exercise at handover.',
    ],
    resource: { label: 'COBie Delivery & Validation Checklist', type: 'PDF' },
    quiz: { label: 'COBie Data Delivery Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-25', title: 'Submittals & Approval Workflows in ACC' },
    next: { id: 'cde-27', title: 'As-Built Information — Managing Record Models in the CDE' },
  },

  // ============================================================
  // LESSON CDE-27 — As-Built Information
  // ============================================================
  {
    id: 'cde-27', num: '27',
    title: 'As-Built Information — Managing Record Models in the CDE',
    topic: 'As-Built & Handover', cat: 'advanced', readTime: '8 min', free: false,
    desc: 'Understand how as-built information is captured, verified, and formally published as the final record of what was actually constructed.',
    intro: `Every drawing published throughout a project describes what was *intended* to be built. As-built information records what was *actually* built — including every site-driven change, substitution, and deviation that occurred during construction. Managing this properly through the CDE is what gives the client a genuinely reliable record model at handover, rather than a set of design drawings that quietly diverge from reality.`,
    sections: [
      {
        id: 's1', heading: 'As-Built vs Record Model vs Design Model', level: 'h2',
        content: `These three terms are often used loosely, but they describe genuinely different things — and a compliant CDE should be explicit about which one it is holding at any given point.`,
        code: {
          label: 'Three Related but Distinct Concepts',
          lines: [
            'DESIGN MODEL     → What the design team intended to be built',
            'AS-BUILT DATA    → Site-captured record of what was actually constructed (markups, surveys)',
            'RECORD MODEL     → The design model updated to reflect as-built data — the final handover deliverable',
          ],
        },
      },
      {
        id: 's2', heading: 'How As-Built Information is Captured on Site', level: 'h2',
        content: `As-built data originates from multiple sources during construction, all of which need to be systematically captured rather than left in scattered site records.`,
        items: [
          'Contractor red-line mark-ups on issued drawings, recording deviations as they happen',
          'Approved substitutions from the submittal process (Lesson cde-25) that changed the specified product or method',
          'Approved variations and change orders affecting the design',
          'As-installed surveys — point cloud scans or manual surveys confirming actual installed positions, particularly for concealed services',
        ],
        formula: { label: 'Capture Principle', text: 'As-built information must be captured continuously during construction — reconstructing it retrospectively from memory at project completion is unreliable and incomplete' },
      },
      {
        id: 's3', heading: 'Producing the Record Model', level: 'h2',
        content: `The record model is produced by systematically incorporating verified as-built data back into the design model — a defined process, not an informal "tidy up" at the end of the project.`,
        code: {
          label: 'Record Model Production Sequence',
          lines: [
            '1. Collate all as-built data sources (mark-ups, substitutions, surveys) for the review period',
            '2. Update the discipline model to reflect verified as-built conditions',
            '3. Internal review confirms updates match the source as-built evidence',
            '4. Model re-published with a specific "As-Built" or "Record" suitability designation',
            '5. Federated record model assembled from all disciplines\' updated models',
          ],
        },
      },
      {
        id: 's4', heading: 'Naming and Status for As-Built Containers', level: 'h2',
        content: `As-built and record model containers should be clearly distinguishable in the CDE from design-stage containers, so nobody mistakes one for the other after handover.`,
        items: [
          'Many projects use a dedicated suitability code or status value specifically for as-built/record content, distinct from the C-series construction codes',
          'The revision history of the record model should clearly link back to the last construction-stage revision it was built from',
          'As-built containers are typically Published into a dedicated "Handover" or "As-Built" folder area, separate from the general Published folder used during construction',
        ],
      },
      {
        id: 's5', heading: 'Verifying As-Built Accuracy Before Final Publication', level: 'h2',
        content: `Because the record model becomes the long-term reference for facilities management and future works, verification before final publication matters more here than at almost any other point in the project.`,
        items: [
          'Cross-check updated model content against the actual as-built evidence (mark-ups, surveys) it claims to represent, not just against the previous design revision',
          'Spot-check concealed or hard-to-verify elements (below-ground services, in-wall routing) against survey data specifically, since these are the highest-risk area for future works',
          'Confirm the as-built COBie export (Lesson cde-26) is consistent with the as-built graphical model — the two should describe the same reality',
        ],
      },
      {
        id: 's6', heading: 'Common As-Built Mistakes', level: 'h2',
        content: `**Mistake:**
Relying on the contractor to "mark up as we go" with no systematic collation process, resulting in incomplete or lost mark-ups by project completion. Assign a specific responsible party and a regular collation cadence for as-built capture.

**Mistake:**
Publishing the design model as the "as-built" record without actually verifying every change was incorporated. A record model that was never checked against real as-built evidence gives the client false confidence.

**Best Practice:**
Build as-built collation into the construction-phase CDE process as a recurring monthly activity, not a single exercise attempted in the final weeks before handover.`,
      },
    ],
    takeaways: [
      'Design model, as-built data, and record model are three distinct concepts — a compliant CDE should be explicit about which one it holds at any point.',
      'As-built information originates from red-line mark-ups, approved substitutions, variations, and as-installed surveys, and must be captured continuously during construction.',
      'The record model is produced through a defined sequence: collate as-built data, update the model, internally verify, and re-publish with a clear as-built designation.',
      'As-built and record model containers should be clearly distinguished from construction-stage containers through dedicated naming, status, and folder structure.',
      'Record model accuracy must be verified against real as-built evidence before final publication, especially for concealed or hard-to-verify elements.',
      'Treat as-built collation as a recurring monthly activity throughout construction, not a single rushed exercise before handover.',
    ],
    resource: { label: 'As-Built & Record Model Management Guide', type: 'PDF' },
    quiz: { label: 'As-Built Information Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-26', title: 'COBie Data Delivery Through the CDE' },
    next: { id: 'cde-28', title: 'Common CDE Failures — What Goes Wrong & How to Prevent It' },
  },

  // ============================================================
  // LESSON CDE-28 — Common CDE Failures
  // ============================================================
  {
    id: 'cde-28', num: '28',
    title: 'Common CDE Failures — What Goes Wrong & How to Prevent It',
    topic: 'CDE Governance', cat: 'advanced', readTime: '9 min', free: false,
    desc: 'A structured review of the most common ways CDEs fail in practice, drawing together the individual mistakes flagged throughout this course into one diagnostic reference.',
    intro: `Every lesson in this course has flagged specific mistakes at each stage of the CDE process. This lesson steps back and organises them into a single diagnostic reference — the patterns that, across real projects, most reliably predict a CDE is failing (or about to fail), and the underlying root cause behind each one. Use this lesson as a health-check framework for reviewing any live CDE, including the one you configured in Lesson cde-8.`,
    sections: [
      {
        id: 's1', heading: 'Failure Pattern 1 — Skipped States', level: 'h2',
        content: `The single most common CDE failure is bypassing the Shared state entirely — publishing directly from WIP. This removes the cross-discipline check that catches the majority of coordination issues before formal issue (Lesson cde-2, cde-11).`,
        formula: { label: 'Root Cause', text: 'Usually driven by deadline pressure and a perception that Shared-state review is "just an extra step" rather than the primary safeguard it actually is' },
      },
      {
        id: 's2', heading: 'Failure Pattern 2 — Uncontrolled Access', level: 'h2',
        content: `Granting broad "just in case" permissions collapses the entire role and state structure covered in Lessons cde-6 and cde-9.`,
        items: [
          'Everyone given Project Administrator or Edit access "to keep things simple"',
          'Contractors or clients given informal access to WIP or Shared folders they should never see',
          'Permission sets never reviewed as team members join and leave the project',
        ],
      },
      {
        id: 's3', heading: 'Failure Pattern 3 — Metadata Decay', level: 'h2',
        content: `Metadata that was accurate at upload but never updated as content moves through the CDE states (Lesson cde-5) silently undermines every filter, report, and search built on top of it.`,
        items: [
          'Suitability codes left stale after a container is republished at a new status',
          'Free-text discipline or status fields producing inconsistent, unfilterable values',
          'No periodic audit ever run to catch metadata that has drifted from reality',
        ],
      },
      {
        id: 's4', heading: 'Failure Pattern 4 — Parallel Untracked Channels', level: 'h2',
        content: `Information exchanged by email, chat, or verbal instruction, bypassing the CDE's transmittal and revision system entirely (Lessons cde-16, cde-19), recreates exactly the audit trail gap the CDE exists to close.`,
        formula: { label: 'Root Cause', text: 'Usually driven by the CDE process feeling slower than an email — the fix is making the CDE workflow fast enough that it is never worth bypassing' },
      },
      {
        id: 's5', heading: 'Failure Pattern 5 — Stale Federation', level: 'h2',
        content: `A federated coordination model that is not refreshed frequently enough (Lessons cde-12, cde-22) gives the team false confidence that coordination issues have been caught, when in fact recent changes were never checked.`,
        items: [
          'No defined refresh cadence, or a cadence that is not actually followed under time pressure',
          'Federation quietly treated as a one-off setup task rather than an ongoing managed process',
        ],
      },
      {
        id: 's6', heading: 'Failure Pattern 6 — No Named Ownership', level: 'h2',
        content: `Many of the failures above trace back to a single underlying cause: no one person clearly accountable for CDE governance (Lesson cde-6). Without a named Information Manager empowered to enforce the process, every other safeguard erodes over time.`,
        items: [
          'The Information Manager role left informally assigned, or absorbed as a minor side responsibility of someone with other primary duties',
          'No backup owner identified — a single point of failure if that person is unavailable',
          'No regular audit cadence (permissions, metadata, federation currency) because no one is specifically tasked with running it',
        ],
        formula: { label: 'Root Cause of Root Causes', text: 'Almost every CDE failure traces back to unclear ownership — fix accountability first, and most other failure patterns become far less likely' },
      },
      {
        id: 's7', heading: 'Running a CDE Health Check', level: 'h2',
        content: `A structured periodic health check, run by the Information Manager, catches most of these failure patterns before they cause real project damage.`,
        subsections: [
          {
            heading: 'CDE Health Check — Quarterly Checklist',
            items: [
              'Sample a set of Published containers — confirm suitability codes are current and accurate',
              'Review permission sets against the current team roster — remove access for anyone who has left',
              'Confirm the federated model refresh cadence has actually been followed for the last quarter',
              'Cross-check a sample of RFIs and Issues against the revision history — did every one that should have triggered a revision actually do so?',
              'Confirm the BEP\'s CDE section still matches the actual platform configuration',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'Skipping the Shared state — publishing directly from WIP — is the single most common CDE failure pattern, usually driven by deadline pressure.',
      'Uncontrolled access, from over-broad permissions to unreviewed team changes, collapses the role and state structure the CDE depends on.',
      'Metadata decay — suitability codes and status fields left stale — silently undermines every filter and report built on the CDE.',
      'Parallel untracked communication channels (email, chat, verbal instructions) recreate the audit trail gap the CDE exists to close.',
      'Stale federation gives false confidence that recent changes have been coordination-checked when they have not.',
      'Nearly every failure pattern traces back to unclear ownership — a named, empowered Information Manager with a defined audit cadence prevents most of them.',
    ],
    resource: { label: 'CDE Health Check Quarterly Audit Template', type: 'PDF' },
    quiz: { label: 'Common CDE Failures Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-27', title: 'As-Built Information — Managing Record Models in the CDE' },
    next: { id: 'cde-29', title: 'CDE Security — Access Control, Permissions & Data Protection' },
  },

  // ============================================================
  // LESSON CDE-29 — CDE Security
  // ============================================================
  {
    id: 'cde-29', num: '29',
    title: 'CDE Security — Access Control, Permissions & Data Protection',
    topic: 'CDE Security', cat: 'advanced', readTime: '9 min', free: false,
    desc: 'Understand the security dimension of CDE management, connecting ISO 19650-5\'s security-minded approach to practical access control decisions.',
    intro: `Every permission decision covered in this course so far has been framed around workflow — who needs to see what, to do their job. Security reframes the same decisions around risk — who could cause harm if they saw information they should not, or if information were altered or lost. ISO 19650-5 formalises this as the "security-minded approach," and this lesson covers what that means in practical CDE configuration terms.`,
    sections: [
      {
        id: 's1', heading: 'ISO 19650-5 and the Security-Minded Approach', level: 'h2',
        content: `ISO 19650-5 sets out a security-minded approach to information management, particularly relevant for sensitive assets — infrastructure, government buildings, and any project where information disclosure carries genuine safety or security risk.`,
        formula: { label: 'Security-Minded Principle', text: 'Not every project needs the same level of security control — but every project should make a deliberate, documented assessment of its sensitivity, rather than defaulting to open access' },
      },
      {
        id: 's2', heading: 'Assessing Information Sensitivity', level: 'h2',
        content: `Before configuring security controls, the project team should classify what kind of sensitive information the project actually contains — not every project has the same risk profile.`,
        items: [
          'Structural and security-critical layouts (e.g. detailed security system locations, safe room positions)',
          'Personal or commercially sensitive data (occupant details, high-value asset locations)',
          'Nationally or commercially sensitive infrastructure information',
          'For most standard commercial or residential projects, sensitivity is comparatively low — but the assessment should still be made and documented, not assumed',
        ],
      },
      {
        id: 's3', heading: 'Access Control as a Security Layer, Not Just a Workflow Tool', level: 'h2',
        content: `Every permission decision covered in Lessons cde-6 and cde-9 has a direct security dimension — the same folder structure and permission sets that support workflow also form the project's primary security control.`,
        subsections: [
          {
            heading: 'Security-Focused Access Principles',
            items: [
              'Apply least-privilege access as standard — grant only the minimum access needed for a role, not the maximum convenient',
              'Treat particularly sensitive containers (if any exist on the project) with an additional restricted permission tier beyond the standard discipline structure',
              'Require multi-factor authentication for all CDE platform accounts, particularly for any account with Manage or Administrator-level access',
              'Log and periodically review access activity, not just configure permissions once and assume they remain correct',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Data Protection and Personal Information', level: 'h2',
        content: `Some project information includes personal data — occupant details, contact information, site personnel records — which carries its own regulatory obligations separate from general CDE security.`,
        items: [
          'Personal data within the CDE should be identified and handled under the project\'s applicable data protection obligations',
          'Avoid storing more personal data in the CDE than is actually necessary for project delivery',
          'Ensure the CDE platform\'s hosting location and data handling practices are compatible with any applicable data protection requirements for the project\'s jurisdiction',
        ],
      },
      {
        id: 's5', heading: 'Third-Party and External Access', level: 'h2',
        content: `Multi-party CDE structures (Lesson cde-20) introduce specific security considerations at every point an external organisation gains access to the shared environment.`,
        items: [
          'Formal access agreements should exist with every external organisation before access is granted, not as an afterthought',
          'Access should be revoked promptly the moment an individual leaves an appointed party\'s team or the project itself — a stale account with lingering access is a real risk, not a formality',
          'External access should default to the minimum necessary scope (typically Published-only for most external parties, unless their role genuinely requires more)',
        ],
      },
      {
        id: 's6', heading: 'Common CDE Security Mistakes', level: 'h2',
        content: `**Mistake:**
Never conducting a sensitivity assessment because "this is just a normal commercial project." Even low-sensitivity projects benefit from a documented, deliberate decision rather than defaulting to open access by omission.

**Mistake:**
Leaving former team members' accounts active on the CDE platform long after they leave the project or their organisation. This is one of the most common and most preventable CDE security gaps.

**Best Practice:**
Combine the CDE security review with the periodic permissions and metadata audit from Lesson cde-28 — security is not a separate exercise, it is a lens applied to the same governance activity.`,
      },
    ],
    takeaways: [
      'ISO 19650-5 formalises a security-minded approach — a deliberate, documented sensitivity assessment for every project, not a default to open access.',
      'Information sensitivity should be classified explicitly, even on projects where the risk profile is expected to be low.',
      'The same access control structure that supports workflow (Lessons cde-6, cde-9) is also the project\'s primary security layer — apply least-privilege as standard.',
      'Personal data within the CDE carries its own data protection obligations, separate from general information security.',
      'External and third-party access should default to minimum necessary scope, with access revoked promptly when someone leaves the project.',
      'CDE security review should be combined with the periodic permissions and metadata audit — it is a lens on governance, not a separate exercise.',
    ],
    resource: { label: 'CDE Security-Minded Approach Checklist', type: 'PDF' },
    quiz: { label: 'CDE Security Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-28', title: 'Common CDE Failures — What Goes Wrong & How to Prevent It' },
    next: { id: 'cde-30', title: 'Setting Up a CDE for a New Office — Standards & Configuration' },
  },

  // ============================================================
  // LESSON CDE-30 — Setting Up a CDE for a New Office
  // ============================================================
  {
    id: 'cde-30', num: '30',
    title: 'Setting Up a CDE for a New Office — Standards & Configuration',
    topic: 'Office Setup', cat: 'advanced', readTime: '9 min', free: false,
    desc: 'Move from single-project CDE configuration to designing a reusable office-wide CDE standard that every new project can adopt quickly.',
    intro: `Lesson cde-8 configured a CDE for a single project, DPC2025. This lesson takes the same underlying knowledge and applies it at office scale — designing a reusable CDE standard that a firm can apply consistently to every new project, rather than reinventing the naming convention, folder structure, and permission logic each time. This is the practical foundation for the office-level BIM management work covered in the capstone.`,
    sections: [
      {
        id: 's1', heading: 'Why a Reusable Office Standard Matters', level: 'h2',
        content: `Configuring a CDE from scratch for every new project is slow, error-prone, and produces inconsistency between projects that makes it harder to move staff between them. An office-level CDE standard fixes the parts that do not need to vary project to project.`,
        formula: { label: 'Standardisation Principle', text: 'Standardise everything that does not need to change per project (folder logic, permission tiers, attribute schema); leave only the genuinely project-specific fields (project code, originator codes, appointed parties) to configure fresh' },
      },
      {
        id: 's2', heading: 'What Belongs in an Office CDE Standard', level: 'h2',
        content: `A well-designed office standard captures the structural decisions covered throughout this course, so they are made once, well, and then reused.`,
        subsections: [
          {
            heading: 'Office Standard Components',
            items: [
              'A master folder structure template mapped to the four CDE states, ready to copy into any new project',
              'A standard set of custom attributes (discipline, suitability, revision, classification) pre-built as a project template on the CDE platform',
              'A default Permission Set library (Architect, Structural, MEP, Contractor, Client Observer, Information Manager) ready to assign',
              'A house style for the naming convention field codes, with guidance on how project-specific codes (Originator, Volume) should be agreed for each new appointment',
              'A standard suitability code and issue purpose table, used consistently unless a specific client\'s EIR requires otherwise',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Building a Project Template on the CDE Platform', level: 'h2',
        content: `Most CDE platforms, including ACC, support creating projects directly from a saved template — this is where the office standard becomes an operational time-saver rather than just a document.`,
        code: {
          label: 'Building an ACC Office Project Template',
          lines: [
            '1. Fully configure one project (folder structure, attributes, permission sets) to office standard',
            '2. Save this project as a Hub-level template (Hub Administration → Templates)',
            '3. New projects created from this template inherit the full configuration instantly',
            '4. Project-specific fields (project code, originator codes, team members) are configured fresh per project',
            '5. Periodically update the master template as office standards evolve — existing projects are unaffected; only new projects inherit updates',
          ],
        },
      },
      {
        id: 's4', heading: 'Governance for the Office Standard Itself', level: 'h2',
        content: `An office CDE standard needs its own ownership and review cycle, separate from any individual project's Information Manager — otherwise it drifts or becomes outdated as the industry and the office's own practice evolves.`,
        items: [
          'Assign a named owner for the office CDE standard (often the BIM Manager or Head of Digital Delivery), distinct from any single project\'s Information Manager',
          'Review the standard annually, or whenever ISO 19650 guidance or major client requirements change',
          'Maintain a change log so project teams understand what changed between template versions and why',
        ],
      },
      {
        id: 's5', heading: 'Balancing Standardisation with Client-Specific Requirements', level: 'h2',
        content: `Not every client's EIR will align perfectly with the office standard — a good standard is flexible enough to accommodate genuine client requirements without being rebuilt from scratch each time.`,
        items: [
          'Treat the office standard as a strong default, not an inflexible mandate — document where and why a specific project deviates from it',
          'Where a client mandates their own naming convention or suitability scheme, map it against the office standard explicitly so staff moving between projects are not confused',
          'Feed genuinely useful client-specific innovations back into the office standard over time, rather than treating every deviation as a one-off exception forever',
        ],
      },
      {
        id: 's6', heading: 'Common Office Standardisation Mistakes', level: 'h2',
        content: `**Mistake:**
Building an office standard once and never revisiting it, while ISO 19650 guidance, platform capabilities, and client expectations continue to evolve around it.

**Mistake:**
Over-standardising to the point where genuinely necessary project-specific requirements are forced into an ill-fitting template, creating confusion rather than saving time.

**Best Practice:**
Treat the office CDE standard as a living asset with a named owner, an annual review cycle, and a documented process for capturing justified project-specific deviations.`,
      },
    ],
    takeaways: [
      'An office-level CDE standard standardises everything that does not need to change per project, leaving only genuinely project-specific fields to configure fresh.',
      'A well-designed standard includes a master folder structure, attribute schema, permission set library, naming house style, and suitability/issue purpose tables.',
      'Building a Hub-level project template on the CDE platform turns the office standard into an operational time-saver for every new project.',
      'The office standard needs its own named owner and review cycle, separate from any individual project\'s Information Manager.',
      'A good standard flexes to accommodate genuine client-specific requirements, with deviations documented rather than treated as silent exceptions.',
      'Review and evolve the office standard periodically — a static standard drifts out of alignment with evolving guidance and platform capability.',
    ],
    resource: { label: 'Office CDE Standard Build Template', type: 'PDF' },
    quiz: { label: 'Office CDE Setup Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-29', title: 'CDE Security — Access Control, Permissions & Data Protection' },
    next: { id: 'cde-31', title: 'Onboarding a Project Team to the CDE — Training & Governance' },
  },

  // ============================================================
  // LESSON CDE-31 — Onboarding a Project Team to the CDE
  // ============================================================
  {
    id: 'cde-31', num: '31',
    title: 'Onboarding a Project Team to the CDE — Training & Governance',
    topic: 'Onboarding & Training', cat: 'advanced', readTime: '8 min', free: false,
    desc: 'Design an onboarding process that gets every appointed party genuinely using the CDE correctly from their very first upload.',
    intro: `A perfectly configured CDE, as built in Lesson cde-8 and standardised in Lesson cde-30, still fails if the people using it were never properly onboarded. Most of the failure patterns catalogued in Lesson cde-28 trace back, in practice, to someone who was never actually taught the process correctly. This lesson covers how to onboard a project team so the CDE works as designed from day one.`,
    sections: [
      {
        id: 's1', heading: 'Why Onboarding Cannot Be an Afterthought', level: 'h2',
        content: `New team members — and entire sub-contractor organisations joining partway through a project — arrive with no inherent knowledge of the project's specific naming convention, folder structure, or authorisation process. Without deliberate onboarding, they will either avoid the CDE (working around it informally) or use it incorrectly.`,
        formula: { label: 'Onboarding Principle', text: 'Every naming, permission, and metadata error traced in Lesson cde-28 has a simpler root cause than "the process is broken" — often, it is "nobody explained the process properly"' },
      },
      {
        id: 's2', heading: 'What a Complete Onboarding Session Covers', level: 'h2',
        content: `A CDE onboarding session should be short, practical, and specific to the actual project — not a generic ISO 19650 lecture disconnected from how the team will really work.`,
        code: {
          label: 'CDE Onboarding Session Outline',
          lines: [
            '1. Project naming convention — field codes specific to this project (Lesson cde-4)',
            '2. Folder structure walkthrough — where WIP, Shared, Published, Archive actually live',
            '3. Suitability code table — what each code means for this specific project',
            '4. Their own permission set — exactly what they can and cannot see/edit',
            '5. The authorisation chain — who they escalate to for sign-off at each gate',
            '6. Live demonstration — a real (test) upload, following the full naming and metadata process',
          ],
        },
      },
      {
        id: 's3', heading: 'Onboarding Different Role Types Differently', level: 'h2',
        content: `Not every team member needs the same depth of onboarding — tailoring the session to the actual role avoids wasting time and losing attention.`,
        items: [
          '**Task Information Producers** — need the full naming, upload, and metadata walkthrough in detail',
          '**Task Team Managers** — additionally need the authorisation and sign-off process for their gate',
          '**Client representatives** — mainly need to understand how to find and interpret Published content and respond to transmittals',
          '**Sub-contractors** — often need the most hands-on walkthrough, as they are typically the least familiar with the specific platform and process being used',
        ],
      },
      {
        id: 's4', heading: 'Ongoing Governance, Not Just a One-Time Session', level: 'h2',
        content: `Onboarding should not be treated as a single event at project kickoff — teams change throughout a project, and even well-onboarded staff can drift from correct practice over time without reinforcement.`,
        items: [
          'New joiners at any point in the project should receive the same onboarding session, not a rushed informal briefing from a colleague',
          'A brief refresher at each major project stage transition (Lesson cde-24) reinforces changing expectations as CDE activity intensity shifts',
          'Feed real errors discovered during the audits from Lesson cde-28 back into onboarding material — if the same mistake recurs, the onboarding session likely needs to address it more directly',
        ],
      },
      {
        id: 's5', heading: 'Documentation to Support Onboarding', level: 'h2',
        content: `A live session should always be backed by written reference material the team can return to — nobody retains every detail from a single walkthrough.`,
        items: [
          'A one-page naming convention quick reference, printable or pinned in the CDE platform itself',
          'The permission set and role matrix from the BEP (Lesson cde-21), in an easily searchable form',
          'A short recorded walkthrough video for remote or asynchronous onboarding, particularly useful for larger sub-contractor teams',
        ],
      },
      {
        id: 's6', heading: 'Common Onboarding Mistakes', level: 'h2',
        content: `**Mistake:**
Assuming experienced BIM practitioners need no project-specific onboarding because they "already know ISO 19650." Every project's specific naming codes, folder structure, and suitability table still need to be learned fresh, regardless of general experience.

**Mistake:**
Onboarding only the first wave of team members at project kickoff, with no process for onboarding later joiners or sub-contractors brought on mid-project.

**Best Practice:**
Build a standard onboarding session and reference pack once (drawing on the office standard from Lesson cde-30), and run it for every new team member without exception, regardless of seniority or prior experience.`,
      },
    ],
    takeaways: [
      'A perfectly configured CDE still fails if the people using it are not properly onboarded to the project-specific process.',
      'A complete onboarding session covers naming convention, folder structure, suitability codes, the individual\'s permission set, and the authorisation chain.',
      'Different role types need different depths of onboarding — tailor the session rather than running one generic version for everyone.',
      'Onboarding is not a one-time kickoff event — new joiners at any stage need it, and refreshers at major stage transitions reinforce correct practice.',
      'Written reference material (naming quick-reference, role matrix, recorded walkthrough) should always back up a live onboarding session.',
      'Onboard every new team member without exception, regardless of seniority — project-specific configuration always needs to be learned fresh.',
    ],
    resource: { label: 'CDE Onboarding Session Template & Reference Pack', type: 'PDF' },
    quiz: { label: 'Onboarding & Training Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-30', title: 'Setting Up a CDE for a New Office — Standards & Configuration' },
    next: { id: 'cde-32', title: 'Capstone — DPC2025 CDE: Configure, Issue, Coordinate, RFI & COBie Handover' },
  },

  // ============================================================
  // LESSON CDE-32 — Capstone
  // ============================================================
  {
    id: 'cde-32', num: '32',
    title: 'Capstone — DPC2025 CDE: Configure, Issue, Coordinate, RFI & COBie Handover',
    topic: 'Capstone', cat: 'advanced', readTime: '12 min', free: false,
    desc: 'Bring every concept from this course together in one end-to-end exercise: configure, issue, coordinate, resolve an RFI, and deliver COBie handover on DPC2025.',
    intro: `This capstone lesson walks through a single, complete project cycle on DPC2025 — from initial CDE configuration through to final handover — deliberately touching every major concept covered across all 31 preceding lessons. Treat this as both a summary and a practical exercise: for each stage below, you should be able to explain not just what happens, but which earlier lesson governs the specific rule being applied.`,
    sections: [
      {
        id: 's1', heading: 'Stage 1 — Configure the DPC2025 CDE', level: 'h2',
        content: `Following the office standard (Lesson cde-30), the Information Manager configures DPC2025 as a new ACC project.`,
        code: {
          label: 'Capstone Stage 1 — Configuration',
          lines: [
            'Project created from the office Hub template (cde-30)',
            'Naming convention fields agreed: Project=DPC2025, Originators=AEC/STR/MEP/W (cde-4)',
            'Folder structure built for WIP / Shared / Published / Archive (cde-8)',
            'Custom attributes configured: Discipline, Suitability, Revision, Classification (cde-5)',
            'Permission Sets assigned per role: Architect, Structural, MEP, Contractor, Info Manager (cde-6, cde-9)',
            'BEP finalised, including CDE section, MIDP, and role matrix (cde-21)',
            'Full team onboarded before first upload (cde-31)',
          ],
        },
      },
      {
        id: 's2', heading: 'Stage 2 — Issue: WIP Through to Published', level: 'h2',
        content: `The structural engineer develops a column layout drawing, following the full container lifecycle.`,
        code: {
          label: 'Capstone Stage 2 — Issue',
          lines: [
            'Drawing authored in WIP: DPC2025-STR-ZZ-01-DR-S-0021 (cde-3, cde-9)',
            'Internal peer review completed; Task Team Manager authorises move to Shared (cde-10)',
            'Suitability set to S1; drawing available for coordination (cde-2, cde-7)',
            'Formally authorised for stage approval; Suitability updated to S4, Revision P02 (cde-13, cde-17)',
            'Later, authorised as Suitable for Construction; Revision C01, Suitability C (cde-14)',
            'Transmittal issued to contractor and client, Issue Purpose: IFC (cde-16, cde-18)',
          ],
        },
      },
      {
        id: 's3', heading: 'Stage 3 — Coordinate: Federation & Clash Resolution', level: 'h2',
        content: `While the drawing above moves through its lifecycle, it also participates in the weekly coordination cycle.`,
        code: {
          label: 'Capstone Stage 3 — Coordination',
          lines: [
            'Federated model refreshed from current Shared-state content (cde-11, cde-12, cde-22)',
            'Clash test identifies a hard clash: structural column vs MEP duct routing (cde-23)',
            'Clash assigned to MEP discipline as primary owner, with structural team consulted',
            'MEP resolves in WIP, republishes updated duct routing to Shared',
            'Federation refreshed, clash test re-run and confirmed resolved, item closed (cde-23)',
          ],
        },
      },
      {
        id: 's4', heading: 'Stage 4 — RFI: Site Query Resolution', level: 'h2',
        content: `During construction, the contractor raises an RFI referencing the Published structural drawing.`,
        code: {
          label: 'Capstone Stage 4 — RFI',
          lines: [
            'RFI-0031 raised: "Clarify column base detail at Grid C4, ref. DPC2025-STR-ZZ-01-DR-S-0021, Rev C01" (cde-19)',
            'Ball-in-court assigned to structural engineer',
            'Investigation reveals a genuine detailing gap, not just a clarity issue',
            'Formal revision triggered: Revision C02 issued, cross-referencing RFI-0031 in the description (cde-17, cde-19)',
            'Previous Revision C01 moves to Archived (cde-15)',
            'New transmittal issued for Revision C02 (cde-16)',
          ],
        },
      },
      {
        id: 's5', heading: 'Stage 5 — COBie & Handover', level: 'h2',
        content: `As the project approaches completion, the progressively-captured COBie and as-built data are finalised for handover.`,
        code: {
          label: 'Capstone Stage 5 — Handover',
          lines: [
            'COBie parameters, populated progressively since Technical Design, validated for completeness and accuracy (cde-26)',
            'As-built mark-ups and substitutions from construction collated into the record model (cde-27)',
            'Final record model and COBie export formally Published to the Handover folder area (cde-27)',
            'Security and access review completed before external/FM handover access is granted (cde-29)',
            'Final CDE health check run: permissions, metadata, and BEP alignment confirmed (cde-28)',
            'Facilities management team onboarded to the operational CDE/AIM (cde-24, cde-31)',
          ],
        },
      },
      {
        id: 's6', heading: 'What This Capstone Demonstrates', level: 'h2',
        content: `Every individual concept in this course — states, containers, naming, metadata, roles, suitability, federation, RFIs, transmittals, and handover — connects into one continuous, governed information journey. A CDE is not a collection of separate tools and rules; it is a single coherent system, and DPC2025's journey from Lesson cde-8 through this capstone demonstrates exactly how the pieces interlock in practice.`,
        formula: { label: 'Course Summary Principle', text: 'A well-run CDE is not many separate processes — it is one continuous, auditable journey from first WIP upload to final asset handover' },
      },
    ],
    takeaways: [
      'CDE configuration, issue workflow, coordination, RFI resolution, and handover are not separate systems — they are one continuous, connected process.',
      'Every container follows the same lifecycle regardless of type: WIP, internal review, Shared coordination, formal publication, and eventual archiving.',
      'Coordination and clash resolution run continuously alongside the formal issue process, not as a separate, disconnected activity.',
      'An RFI that reveals a genuine gap must trigger a formal revision, explicitly cross-referenced, not just a written clarification.',
      'COBie and as-built data quality at handover directly reflects the discipline maintained throughout the whole project, not a last-minute effort.',
      'A well-governed CDE is a single, auditable journey from first WIP upload to final asset handover — every lesson in this course is one piece of that continuous system.',
    ],
    resource: { label: 'DPC2025 Capstone Case Study Pack', type: 'PDF' },
    quiz: { label: 'Capstone Quiz', questions: 15, time: '8 min' },
    prev: { id: 'cde-31', title: 'Onboarding a Project Team to the CDE — Training & Governance' },
    next: null,
  },

]
