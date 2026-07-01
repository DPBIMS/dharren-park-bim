// ============================================================
// COMMON DATA ENVIRONMENT — LESSONS cde-9 through cde-16 (INTERMEDIATE)
// Section: CDE Workflows & Process
// File: lib/cdeLessonsContent/cdeLessons_9_16.js
// Index: lib/cdeLessonsData.js
// ============================================================

export const lessons_9_16 = [

  // ============================================================
  // LESSON CDE-09 — The WIP State
  // ============================================================
  {
    id: 'cde-9', num: '09',
    title: 'The WIP State — Rules, Responsibilities & What Belongs Here',
    topic: 'CDE States', cat: 'intermediate', readTime: '8 min', free: false,
    desc: 'Go deep on the Work in Progress state — what should and should not live here, who owns it, and how to avoid the most common WIP failures.',
    intro: `Lesson cde-2 introduced the four CDE states at a high level. This lesson goes deep on the first and most misunderstood of them: Work in Progress. WIP is deliberately the least governed state in the CDE — but "least governed" does not mean "unimportant." Poor WIP discipline is where almost every downstream CDE failure originates, because it is the point where information first enters the system.`,
    sections: [
      {
        id: 's1', heading: 'What WIP Actually Means in Practice', level: 'h2',
        content: `WIP is the private working space for a single discipline, or often a single individual, to develop information before it is fit for anyone else to see. It exists specifically so that early, unfinished, exploratory work never accidentally becomes visible to — or relied upon by — other parties.`,
        formula: { label: 'WIP Definition', text: 'WIP = information that exists, but that nobody outside the originating team should know exists yet' },
      },
      {
        id: 's2', heading: 'What Belongs in WIP', level: 'h2',
        content: `Understanding what belongs here — and, just as importantly, what does not — prevents both under-use and misuse of the state.`,
        items: [
          'Early-stage models and drawings still being actively developed',
          'Design options and alternatives not yet selected or agreed internally',
          'Draft calculations, unverified quantities, and exploratory sketches',
          'Anything an individual author would describe as "not ready for anyone else to see yet"',
          'Internal review comments and mark-ups before they are resolved',
        ],
      },
      {
        id: 's3', heading: 'What Should Never Stay in WIP', level: 'h2',
        content: `WIP is a staging area, not a permanent home. Information that has been internally checked and is ready for cross-discipline use should move to Shared promptly — leaving it in WIP indefinitely defeats the purpose of the CDE.`,
        items: [
          'Information that has already passed internal review — this should move to Shared without delay',
          'Anything another discipline is currently waiting on for coordination — sitting on it in WIP blocks the whole team',
          'Final, authorised deliverables — these belong in Published, not WIP, regardless of how "correct" they are',
        ],
        formula: { label: 'WIP Time Rule', text: 'WIP is a waiting room, not a warehouse — information should not accumulate here indefinitely once it is internally ready' },
      },
      {
        id: 's4', heading: 'Who Owns the WIP Folder', level: 'h2',
        content: `WIP ownership maps directly onto the Task Information Producer and Task Team Manager roles from Lesson cde-6.`,
        subsections: [
          {
            heading: 'Ownership and Access',
            items: [
              '**Task Information Producer** — creates and edits content inside their own discipline\'s WIP folder',
              '**Task Team Manager** — has oversight of the whole discipline\'s WIP content and authorises what leaves it',
              'No other discipline, the client, or the contractor should have any visibility into another team\'s WIP folder',
              'Even the Information Manager typically has administrative access only, not authoring rights, inside another discipline\'s WIP',
            ],
          },
        ],
      },
      {
        id: 's5', heading: 'Internal Quality Checks Inside WIP', level: 'h2',
        content: `Before anything leaves WIP, most disciplines run some form of internal quality check — this is what makes the move to Shared meaningful rather than arbitrary.`,
        items: [
          'Peer review — a second team member checks the model or drawing for errors and coordination issues',
          'Standards check — confirming the container follows the project naming convention and template standards',
          'Model health check — for BIM models, checking for warnings, unresolved worksets, or broken links',
          'Self-certification — the author confirms the work meets the internal quality bar before requesting sign-off',
        ],
      },
      {
        id: 's6', heading: 'Common WIP Mistakes', level: 'h2',
        content: `**Mistake:**
Using WIP as a dumping ground for anything not yet perfect, including information other teams urgently need. This creates the exact silent information loss the CDE is designed to prevent (Lesson cde-1).

**Mistake:**
Granting cross-discipline "just in case" view access to another team's WIP folder. This defeats the purpose of the state entirely — WIP visibility should be strictly single-discipline.

**Best Practice:**
Set a target turnaround — e.g. "internally reviewed work moves to Shared within 48 hours" — and track it as a simple team KPI. WIP that moves promptly is a sign of a healthy CDE process.`,
      },
    ],
    takeaways: [
      'WIP is the private working space for a single discipline or individual — nothing here should be relied upon by anyone else.',
      'WIP holds early-stage, unverified, and exploratory content; it should not hold internally-ready or final information.',
      'Ownership of WIP maps to the Task Information Producer (creates content) and Task Team Manager (authorises what leaves it).',
      'Internal quality checks — peer review, standards checks, model health checks — are what make the WIP-to-Shared transition meaningful.',
      'WIP is a temporary staging area, not a permanent home — information should move promptly once internally ready.',
      'Cross-discipline visibility into another team\'s WIP folder should never be granted, even informally.',
    ],
    resource: { label: 'WIP State Governance Checklist', type: 'PDF' },
    quiz: { label: 'The WIP State Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-8', title: 'Setting Up the DPC2025 CDE on ACC — Project Configuration' },
    next: { id: 'cde-10', title: 'Moving from WIP to Shared — The Internal Review Process' },
  },

  // ============================================================
  // LESSON CDE-10 — Moving from WIP to Shared
  // ============================================================
  {
    id: 'cde-10', num: '10',
    title: 'Moving from WIP to Shared — The Internal Review Process',
    topic: 'CDE States', cat: 'intermediate', readTime: '8 min', free: false,
    desc: 'Walk through the exact internal review steps and authorisation gate that governs every move from Work in Progress to Shared.',
    intro: `The move from WIP to Shared is the first authorisation gate in the CDE workflow, and it is where most projects either build a habit of discipline — or start accumulating the small compromises that eventually cause coordination failures. This lesson walks through the internal review process step by step, using the DPC2025 architecture team as a worked example.`,
    sections: [
      {
        id: 's1', heading: 'Why This Transition Needs a Formal Process', level: 'h2',
        content: `Unlike moving Shared to Published, moving WIP to Shared happens frequently — often daily on an active project. Without a lightweight but consistent process, teams either skip the check entirely (defeating its purpose) or treat it as such a heavy process that they avoid using Shared at all.`,
        formula: { label: 'Design Goal', text: 'The WIP-to-Shared process must be fast enough to use constantly, but rigorous enough to actually catch errors' },
      },
      {
        id: 's2', heading: 'The Internal Review Sequence', level: 'h2',
        content: `A typical internal review sequence, as practiced by the DPC2025 architecture team before any drawing moves to Shared.`,
        code: {
          label: 'DPC2025 Internal Review Sequence',
          lines: [
            '1. Author completes the drawing/model update inside WIP',
            '2. Author runs a self-check: naming convention, model warnings, missing views',
            '3. Peer reviewer checks content against the discipline\'s internal standards',
            '4. Task Team Manager reviews and authorises the move to Shared',
            '5. Author (or Manager) uploads to the Shared folder',
            '6. Status/suitability attribute updated (e.g. S0 → S1 or S2)',
            '7. Optional: notify affected disciplines that new Shared content is available',
          ],
        },
      },
      {
        id: 's3', heading: 'Who Can Authorise the Move', level: 'h2',
        content: `Authorisation authority should be explicit and limited — not "anyone on the team can move things to Shared whenever they feel ready."`,
        items: [
          'The Task Team Manager (Lesson cde-6) holds the authorisation responsibility for their own discipline',
          'On larger teams, this may be delegated to a senior team member, but the delegation should be explicit and documented in the BEP',
          'Authorisation should never be delegated to the same individual who authored the content without any second check — a single-person team is the exception that requires extra diligence, not a shortcut',
        ],
      },
      {
        id: 's4', heading: 'What Changes When Content Moves to Shared', level: 'h2',
        content: `The move itself involves several concrete, trackable actions on the CDE platform — it is not simply "drag the file to a different folder."`,
        subsections: [
          {
            heading: 'Concrete Actions at the WIP → Shared Gate',
            items: [
              'File is uploaded or moved into the discipline\'s Shared folder',
              'Suitability attribute is updated to reflect the new status (typically S1 or S2)',
              'Revision field is set or incremented if this supersedes a previous Shared version',
              'Permissions automatically change — the content becomes visible to other disciplines the instant it lands in Shared',
              'The previous WIP version, if still needed for reference, remains in WIP but is no longer the "live" version',
            ],
          },
        ],
      },
      {
        id: 's5', heading: 'Notifying the Rest of the Team', level: 'h2',
        content: `Simply uploading to Shared is not the same as ensuring other disciplines know it happened. Most CDE platforms support notifications, but the process should not rely on them alone.`,
        items: [
          'ACC automatically notifies subscribed users when new content lands in a folder they follow',
          'For time-critical coordination updates, a direct message or agenda note at the next coordination meeting is more reliable than relying solely on a notification',
          'A weekly "what changed in Shared this week" summary is a lightweight habit that keeps the whole team aligned without extra tooling',
        ],
      },
      {
        id: 's6', heading: 'Common Mistakes at This Gate', level: 'h2',
        content: `**Mistake:**
Skipping the internal review step under deadline pressure "just this once." This is exactly how uncoordinated errors reach cross-discipline review, undermining trust in Shared content generally.

**Mistake:**
Leaving the suitability attribute unchanged when moving content — a file physically sitting in the Shared folder but still tagged "S0" confuses anyone filtering by status.

**Best Practice:**
Build the WIP-to-Shared checklist into a lightweight template (a short checklist item, not a full form) so the internal review takes minutes, not hours, and is actually followed every time.`,
      },
    ],
    takeaways: [
      'Moving WIP to Shared is the first authorisation gate in the CDE — it needs to be fast enough for daily use but rigorous enough to catch errors.',
      'A typical internal review sequence: self-check, peer review, manager authorisation, upload, and status update.',
      'Authorisation authority for this move belongs to the Task Team Manager and should be explicit, not informal.',
      'The move involves concrete platform actions: folder change, suitability update, revision handling, and automatic permission changes.',
      'Notifications help but should not be the only mechanism for keeping the wider team aware of new Shared content.',
      'A lightweight, consistently-followed checklist beats a heavyweight process that gets skipped under deadline pressure.',
    ],
    resource: { label: 'WIP-to-Shared Review Checklist Template', type: 'PDF' },
    quiz: { label: 'Internal Review Process Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-9', title: 'The WIP State — Rules, Responsibilities & What Belongs Here' },
    next: { id: 'cde-11', title: 'The Shared State — What Coordination Actually Means in ISO 19650' },
  },

  // ============================================================
  // LESSON CDE-11 — The Shared State
  // ============================================================
  {
    id: 'cde-11', num: '11',
    title: 'The Shared State — What Coordination Actually Means in ISO 19650',
    topic: 'CDE States', cat: 'intermediate', readTime: '8 min', free: false,
    desc: 'Understand what genuine coordination looks like in the Shared state, and why it is the busiest, most collaborative part of the CDE.',
    intro: `Shared is where the actual work of multi-discipline collaboration happens. Far more activity takes place here than in WIP or Published combined, because this is the state where architects, engineers, and consultants actually check their work against one another. This lesson defines what "coordination" precisely means in ISO 19650 terms, and what a well-functioning Shared state looks like day to day.`,
    sections: [
      {
        id: 's1', heading: 'Coordination Defined', level: 'h2',
        content: `In ISO 19650 terms, **coordination** means the process of checking discipline information against other disciplines' information to identify conflicts, gaps, or inconsistencies before formal issue. It is not a synonym for "collaboration" in a general sense — it specifically refers to the technical cross-checking of design content.`,
        formula: { label: 'Coordination vs Collaboration', text: 'Collaboration = working together generally | Coordination = specifically checking discipline outputs against one another for conflicts' },
      },
      {
        id: 's2', heading: 'What Happens Inside the Shared State', level: 'h2',
        content: `Several distinct but related activities all take place using Shared-state content as their source.`,
        items: [
          '**Model federation** — combining discipline models into a single coordination view (Lesson cde-12)',
          '**Clash detection** — automated checking for spatial conflicts between disciplines',
          '**Visual review** — human reviewers walking through the federated model looking for issues automation misses',
          '**Cross-discipline queries** — one discipline asking another for clarification based on what they see in Shared',
          '**Design coordination meetings** — structured sessions where the design team reviews Shared content together',
        ],
      },
      {
        id: 's3', heading: 'Why Shared Content is Never "Final"', level: 'h2',
        content: `A defining characteristic of the Shared state is that its content is expected to change — sometimes frequently — as coordination issues are found and resolved. This is fundamentally different from Published content, which should be stable between formal revisions.`,
        items: [
          'A drawing might update in Shared multiple times in a single week as a coordination issue is worked through',
          'Recipients of Shared content should never assume it will still look the same tomorrow',
          'This is precisely why Shared content carries S1/S2 suitability, not a construction-ready code — its impermanence is a feature, not a flaw',
        ],
      },
      {
        id: 's4', heading: 'The Coordination Cycle', level: 'h2',
        content: `Coordination in the Shared state typically follows a repeating cycle rather than a single one-off event.`,
        code: {
          label: 'The Weekly Coordination Cycle',
          lines: [
            '1. Disciplines update their content in Shared throughout the week',
            '2. Federated model is refreshed from the latest Shared content',
            '3. Clash detection runs against the refreshed federation',
            '4. Coordination meeting reviews new and outstanding issues',
            '5. Issues are assigned to the responsible discipline',
            '6. Responsible discipline resolves the issue back in WIP',
            '7. Resolved content is moved to Shared, and the cycle repeats',
          ],
        },
        formula: { label: 'Cycle Cadence', text: 'Most active design projects run this cycle weekly; fast-track or late-stage coordination can move to twice-weekly or daily' },
      },
      {
        id: 's5', heading: 'Access and Visibility in Shared', level: 'h2',
        content: `Unlike WIP, which is single-discipline, Shared is deliberately open to the whole design team — though typically still restricted from the client and contractor at this stage.`,
        items: [
          'All appointed design disciplines should have at least View access to every other discipline\'s Shared folder',
          'Edit access to a discipline\'s Shared folder remains restricted to that discipline\'s own team',
          'Whether the contractor or client see Shared content at all is a project-specific decision, documented in the BEP — many projects restrict them to Published only',
        ],
      },
      {
        id: 's6', heading: 'Common Shared-State Mistakes', level: 'h2',
        content: `**Mistake:**
Treating Shared content as authoritative simply because it "looks finished." Visual polish is not the same as suitability — always check the status attribute, not the apparent quality of the drawing.

**Mistake:**
Letting the federated model go stale by not refreshing it from Shared frequently enough. A coordination model built from two-week-old Shared content misses every clash introduced since.

**Best Practice:**
Automate the federated model refresh where the platform allows it, so coordination reviews are always working from genuinely current Shared content.`,
      },
    ],
    takeaways: [
      'Coordination specifically means checking discipline information against other disciplines for conflicts — not collaboration in a general sense.',
      'The Shared state is where model federation, clash detection, visual review, and coordination meetings all take place.',
      'Shared content is expected to change frequently — its impermanence is intentional, reflected in its S1/S2 suitability.',
      'Coordination typically runs as a repeating weekly cycle: update, refresh federation, detect clashes, review, assign, resolve, repeat.',
      'Shared access is open across the whole design team but usually still restricted from the client and contractor.',
      'A federated coordination model must be refreshed frequently from current Shared content, or it silently misses new clashes.',
    ],
    resource: { label: 'Coordination Cycle Planning Guide', type: 'PDF' },
    quiz: { label: 'The Shared State Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-10', title: 'Moving from WIP to Shared — The Internal Review Process' },
    next: { id: 'cde-12', title: 'Model Federation in the Shared State — Combining Discipline Models' },
  },

  // ============================================================
  // LESSON CDE-12 — Model Federation
  // ============================================================
  {
    id: 'cde-12', num: '12',
    title: 'Model Federation in the Shared State — Combining Discipline Models',
    topic: 'Model Federation', cat: 'intermediate', readTime: '9 min', free: false,
    desc: 'Learn how discipline models are combined into a federated coordination model, and how to manage it as its own information container.',
    intro: `Model federation is the technical process that makes coordination possible — combining separate discipline models (architecture, structure, MEP, civil) into a single, navigable coordination view without merging them into one file. This lesson explains how federation works, how it is managed inside the Shared state, and how to keep a federated model trustworthy as its source models keep changing.`,
    sections: [
      {
        id: 's1', heading: 'What Federation Is (and Is Not)', level: 'h2',
        content: `Federation combines multiple discipline models for viewing and coordination purposes, while each discipline retains full ownership and control of their own source model. This is fundamentally different from merging models into a single shared file.`,
        formula: { label: 'Federation Principle', text: 'Federate for coordination, never merge for authoring — each discipline must retain sole ownership of their own model' },
      },
      {
        id: 's2', heading: 'How Federation Works Technically', level: 'h2',
        content: `On platforms like ACC Coordinate or Navisworks, federation works by referencing (not copying) each discipline's Shared-state model into a combined coordination space.`,
        items: [
          'Each discipline publishes their model to Shared, as covered in Lesson cde-10',
          'A Coordination Space (or federated model file) references each discipline\'s Shared model',
          'When a discipline updates their Shared model, the federation automatically reflects the change on next refresh',
          'No discipline\'s model is ever edited from within the federated view — federation is read-only for coordination purposes',
        ],
      },
      {
        id: 's3', heading: 'The Federated Model as its Own Container', level: 'h2',
        content: `As established in Lesson cde-3, the federated model is an information container in its own right — with its own name, ownership, and status, separate from any single discipline model it combines.`,
        code: {
          label: 'Federated Model Naming — DPC2025 Example',
          lines: [
            'DPC2025-ZZZ-ZZ-ZZ-CO-Z-0001',
            '  ZZZ → Originator: BIM/Information Manager team (multi-discipline)',
            '  CO  → Type: Combined model',
            '  Z   → Role: General/multi-disciplinary',
            '',
            'Owned by the Information Manager, not any single discipline —',
            'no discipline "owns" the coordination model, only their own contribution to it',
          ],
        },
      },
      {
        id: 's4', heading: 'Refresh Frequency and Federation Currency', level: 'h2',
        content: `A federated model is only as useful as it is current. Setting and communicating a clear refresh cadence prevents the "stale federation" mistake flagged in Lesson cde-11.`,
        items: [
          '**On-demand refresh** — manually triggered before each coordination review',
          '**Scheduled refresh** — automatically rebuilt on a fixed cadence (e.g. every Monday morning before the weekly coordination meeting)',
          '**Live-linked federation** — some platforms support near-real-time referencing directly from cloud-hosted models',
          'Whatever the method, the refresh time and source data date should be visible to anyone reviewing the federated model',
        ],
      },
      {
        id: 's5', heading: 'Federation Structure for a Multi-Discipline Project', level: 'h2',
        content: `Larger projects often federate at more than one level — combining models by zone, by discipline group, or by construction package, rather than one single monolithic federation.`,
        code: {
          label: 'DPC2025 Federation Structure',
          lines: [
            'Level 1 — Discipline federations',
            '  Architecture + Structure combined  → structural clash review',
            '  MEP + Structure combined            → services routing review',
            '',
            'Level 2 — Full project federation',
            '  All disciplines combined            → whole-building coordination review',
            '',
            'Zone-based federation (for large or phased projects)',
            '  Zone A federation, Zone B federation, etc. — reduces file size and review time',
          ],
        },
      },
      {
        id: 's6', heading: 'Common Federation Mistakes', level: 'h2',
        content: `**Mistake:**
Editing geometry directly inside the federated coordination view instead of the source discipline model. This creates a divergence between the federation and the actual Shared model it is supposed to represent.

**Mistake:**
Federating from WIP-state models instead of Shared-state models. This exposes unchecked, unauthorised content to the whole coordination process and undermines the state model entirely.

**Best Practice:**
Always federate exclusively from Shared (or Published, for later-stage reviews) — never from WIP — and clearly label the federation's data date at the top of every coordination review.`,
      },
    ],
    takeaways: [
      'Federation combines discipline models for coordination while each discipline retains full ownership and control of their own model.',
      'Federated models reference Shared-state discipline models — they are never edited directly, and no discipline model is copied or merged into another.',
      'A federated model is its own information container, typically owned by the Information Manager rather than any single discipline.',
      'A clear refresh cadence — on-demand, scheduled, or live-linked — is essential to keep federation currency trustworthy.',
      'Larger projects may federate at multiple levels: discipline pairs, full-project, or by construction zone.',
      'Always federate exclusively from Shared or Published content — federating from WIP defeats the entire purpose of the state model.',
    ],
    resource: { label: 'Model Federation Setup Guide', type: 'PDF' },
    quiz: { label: 'Model Federation Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-11', title: 'The Shared State — What Coordination Actually Means in ISO 19650' },
    next: { id: 'cde-13', title: 'Moving from Shared to Published — Authorisation & Sign-Off' },
  },

  // ============================================================
  // LESSON CDE-13 — Moving from Shared to Published
  // ============================================================
  {
    id: 'cde-13', num: '13',
    title: 'Moving from Shared to Published — Authorisation & Sign-Off',
    topic: 'CDE States', cat: 'intermediate', readTime: '8 min', free: false,
    desc: 'Understand the higher-authority sign-off process that governs the move from Shared to Published, and who has the power to approve it.',
    intro: `The move from Shared to Published is the highest-stakes authorisation gate in the CDE. Once information is Published, it carries a suitability code the wider team — including the client and contractor — will rely on. Getting this transition wrong has direct legal, safety, and cost consequences. This lesson covers the sign-off process in detail, distinguishing it clearly from the lighter-weight WIP-to-Shared gate covered in Lesson cde-10.`,
    sections: [
      {
        id: 's1', heading: 'Why This Gate Carries More Weight', level: 'h2',
        content: `Publication is the point at which information stops being a working draft and becomes something the wider project — including parties with contractual and legal interests — will rely upon. The authorisation process reflects that increased consequence.`,
        formula: { label: 'Gate Comparison', text: 'WIP → Shared: internal, frequent, lightweight | Shared → Published: formal, less frequent, requires named sign-off' },
      },
      {
        id: 's2', heading: 'Who Can Authorise Publication', level: 'h2',
        content: `Authorisation authority for publication is defined in the BEP and typically involves more than the originating discipline alone.`,
        items: [
          '**Task Team Manager** — confirms their own discipline\'s content is technically ready',
          '**Lead Appointed Party / Information Manager** — confirms cross-discipline coordination issues affecting the content are resolved',
          '**Appointing Party (client)** — for certain suitability codes (e.g. stage approval, "suitable for construction"), direct client sign-off may be contractually required',
          'The exact chain of authorisation should be documented once, in the BEP, and referenced rather than re-negotiated on every publication',
        ],
      },
      {
        id: 's3', heading: 'Pre-Publication Checks', level: 'h2',
        content: `Before requesting sign-off, a standard set of checks should be completed — catching errors here is far cheaper than catching them after formal issue.`,
        subsections: [
          {
            heading: 'Pre-Publication Checklist',
            items: [
              'All open coordination issues affecting this content are resolved or formally accepted as residual risk',
              'Naming convention and metadata (discipline, revision, intended suitability) are correct',
              'Content matches the current Shared version — no last-minute unreviewed changes have been introduced',
              'The specific suitability code being assigned matches its actual, intended use',
              'Any dependent documents (schedules, specifications) referencing this content are consistent with it',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'The Formal Sign-Off Sequence', level: 'h2',
        content: `A worked example of the sign-off sequence, as practiced on DPC2025 when moving a structural drawing package to "Suitable for Construction."`,
        code: {
          label: 'DPC2025 Publication Sign-Off Sequence',
          lines: [
            '1. Structural Task Team Manager confirms package is technically complete',
            '2. Information Manager confirms all related coordination issues are closed',
            '3. Lead Appointed Party reviews and formally requests publication',
            '4. Appointing Party (client representative) reviews and signs off',
            '5. Suitability code assigned: C (Suitable for Construction)',
            '6. Content moved to Published folder',
            '7. Transmittal issued to all parties requiring the information (Lesson cde-16)',
          ],
        },
      },
      {
        id: 's5', heading: 'What Happens if Publication is Rejected', level: 'h2',
        content: `Not every publication request succeeds on the first attempt — the process should have a defined path for rejection, not just approval.`,
        items: [
          'The content returns to Shared (or WIP, if substantial rework is needed), never staying in a publication "limbo" state',
          'Rejection reasons should be documented, not just verbally communicated, so the originating team has a clear record of what to address',
          'A rejected publication is not a failure of the CDE process — it is the process working correctly, catching an issue before formal issue',
        ],
      },
      {
        id: 's6', heading: 'Common Mistakes at This Gate', level: 'h2',
        content: `**Mistake:**
Allowing informal or verbal sign-off ("just publish it, we'll sort the paperwork later") for time-critical publications. Every publication needs a recorded authorisation, even under deadline pressure — this record is what protects the whole team if a dispute arises later.

**Mistake:**
Publishing content with unresolved coordination issues because "the client needs it now." An unresolved clash published as "Suitable for Construction" is a far more expensive problem to fix once built.

**Best Practice:**
Build a formal but fast sign-off workflow into the CDE platform itself (e.g. an approval workflow in ACC) so authorisation is recorded automatically rather than tracked manually in email.`,
      },
    ],
    takeaways: [
      'The Shared-to-Published gate is the highest-stakes authorisation point in the CDE — publication means the wider team will rely on the information.',
      'Authorisation authority typically spans the Task Team Manager, Lead Appointed Party/Information Manager, and often the client, defined in the BEP.',
      'Pre-publication checks should confirm coordination issues are resolved and metadata is correct before sign-off is even requested.',
      'A formal sign-off sequence should be followed and recorded every time, not treated as optional under deadline pressure.',
      'Rejected publications should return cleanly to Shared or WIP with documented reasons — rejection is the process working, not failing.',
      'Recording sign-off through the CDE platform\'s own workflow tools is more reliable than tracking authorisation manually via email.',
    ],
    resource: { label: 'Publication Sign-Off Workflow Template', type: 'PDF' },
    quiz: { label: 'Shared to Published Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-12', title: 'Model Federation in the Shared State — Combining Discipline Models' },
    next: { id: 'cde-14', title: 'The Published State — Formal Issue & Suitability Assignment' },
  },

  // ============================================================
  // LESSON CDE-14 — The Published State
  // ============================================================
  {
    id: 'cde-14', num: '14',
    title: 'The Published State — Formal Issue & Suitability Assignment',
    topic: 'CDE States', cat: 'intermediate', readTime: '8 min', free: false,
    desc: 'Understand exactly what changes for information once it enters the Published state, and how to manage it correctly through the rest of its life.',
    intro: `Once information reaches Published, its relationship with the project team fundamentally changes. It is no longer a working draft that individual disciplines can freely revise — it is now a formally issued deliverable, governed by revision control, transmittals, and permanent audit requirements. This lesson covers what changes at this point, and how to manage Published content correctly for the rest of the project.`,
    sections: [
      {
        id: 's1', heading: 'What Publication Formally Establishes', level: 'h2',
        content: `Publication is the point at which three things become fixed and formally recorded simultaneously: the content itself, its suitability code, and the fact that it was issued to specific parties at a specific point in time.`,
        formula: { label: 'Publication Triad', text: 'Content + Suitability Code + Formal Issue Record = a Published information container' },
      },
      {
        id: 's2', heading: 'Who Can See Published Content', level: 'h2',
        content: `Unlike Shared, which is typically restricted to the design team, Published content is generally visible to the full project team — this is one of the defining characteristics of the state.`,
        items: [
          'All appointed parties on the project, including the main contractor',
          'The appointing party (client) and their representatives',
          'Sub-contractors and specialist trades, where their appointment requires it',
          'Access to Published content is rarely restricted by discipline — the whole point of publication is wide, controlled visibility',
        ],
      },
      {
        id: 's3', heading: 'Published Content Cannot Be Silently Edited', level: 'h2',
        content: `A defining rule of the Published state: once content is Published, it cannot simply be edited in place. Any change requires a new revision, going back through the full WIP → Shared → Published cycle.`,
        code: {
          label: 'How Published Content Changes',
          lines: [
            'INCORRECT: edit the Published document directly to fix an error',
            '',
            'CORRECT sequence:',
            '  1. Copy the content back into WIP for correction',
            '  2. Make the change, run internal review (Lesson cde-10)',
            '  3. Move corrected content to Shared for re-coordination if needed',
            '  4. Re-authorise and re-publish as a NEW revision',
            '  5. Previous revision moves to Archived (Lesson cde-15)',
          ],
        },
        formula: { label: 'Immutability Rule', text: 'A specific revision, once Published, never changes again — corrections always create a new revision' },
      },
      {
        id: 's4', heading: 'Multiple Suitability Codes Over Time', level: 'h2',
        content: `A single container may be Published multiple times over the life of a project, each time carrying a different suitability code as the project progresses through its stages.`,
        code: {
          label: 'DPC2025 Example — Same Container, Evolving Suitability',
          lines: [
            'Revision P03, Suitability S4  → Published for stage approval',
            'Revision P05, Suitability S7  → Published for tender',
            'Revision C01, Suitability C   → Published, Suitable for Construction',
            'Revision C02, Suitability C   → Re-published after a design change, still Suitable for Construction',
            '',
            'Each entry is a separate Published event for the same underlying container —',
            'all previous entries move to Archived as each new one is issued',
          ],
        },
      },
      {
        id: 's5', heading: 'Publication Notifications and Distribution', level: 'h2',
        content: `Publication is not complete until the relevant parties have actually been informed — this is the formal function of a transmittal, covered fully in Lesson cde-16.`,
        items: [
          'A transmittal should accompany every publication, recording exactly what was issued, to whom, and why',
          'Platform notifications supplement, but do not replace, a formal transmittal for anything contractually significant',
          'Recipients who need to formally acknowledge or respond to a publication should be tracked until that response is received',
        ],
      },
      {
        id: 's6', heading: 'Common Published-State Mistakes', level: 'h2',
        content: `**Mistake:**
Making a "quick fix" directly to a Published file to save time, without going through revision control. This breaks the audit trail and can mean two people are unknowingly working from different content under the same file name.

**Mistake:**
Failing to update the suitability code between publication events — a container re-issued at S4 that should now be C, still showing S4, tells the contractor they cannot build from it.

**Best Practice:**
Configure the CDE platform, where possible, to lock Published folders against direct editing entirely — enforcing the immutability rule structurally rather than relying on team discipline alone.`,
      },
    ],
    takeaways: [
      'Publication formally fixes three things together: the content, its suitability code, and the record of formal issue.',
      'Published content is generally visible to the whole project team, not restricted by discipline as Shared content is.',
      'Published content is never edited in place — corrections always go back through WIP and Shared, then re-publish as a new revision.',
      'A single container can be Published many times over a project\'s life, each time carrying a suitability code appropriate to that stage.',
      'Every publication should be accompanied by a formal transmittal, not just a platform notification.',
      'Locking Published folders against direct editing enforces the immutability rule structurally rather than relying on team discipline.',
    ],
    resource: { label: 'Published State Management Guide', type: 'PDF' },
    quiz: { label: 'The Published State Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-13', title: 'Moving from Shared to Published — Authorisation & Sign-Off' },
    next: { id: 'cde-15', title: 'The Archive State — Version History, Audit Trail & Compliance' },
  },

  // ============================================================
  // LESSON CDE-15 — The Archive State
  // ============================================================
  {
    id: 'cde-15', num: '15',
    title: 'The Archive State — Version History, Audit Trail & Compliance',
    topic: 'CDE States', cat: 'intermediate', readTime: '7 min', free: false,
    desc: 'Understand why the Archive state exists, how it supports legal compliance, and how to manage superseded information correctly.',
    intro: `The Archive state is the quietest part of the CDE — nobody actively works from it day to day — but it is arguably the most legally significant. Every superseded revision, every replaced document, every earlier version of a federated model lives here permanently. This lesson explains why that permanence matters, and how to manage the Archive state so it supports the project rather than becoming an unmanageable pile of old files.`,
    sections: [
      {
        id: 's1', heading: 'Why Nothing is Ever Deleted', level: 'h2',
        content: `A compliant CDE never deletes superseded information — it archives it. This single rule underpins the legal defensibility of the entire information management process.`,
        formula: { label: 'Archive Principle', text: 'If a decision was ever made based on a piece of information, that information must remain retrievable for as long as the decision might be questioned' },
      },
      {
        id: 's2', heading: 'What Moves to Archive, and When', level: 'h2',
        content: `Archiving is triggered specifically by supersession — a previous revision being replaced by a new Published revision, as covered in Lesson cde-14.`,
        items: [
          'When a new revision is Published, the immediately previous Published revision moves to Archived',
          'Archived content retains its original name, revision, and suitability code exactly as it was when Published — nothing is altered retroactively',
          'A container can accumulate many Archived revisions over the life of a long project — this is expected and correct, not a sign of poor management',
        ],
      },
      {
        id: 's3', heading: 'How Platforms Implement Archiving', level: 'h2',
        content: `In practice, few CDE platforms use a literal separate "Archive folder" for every superseded file. Most implement archiving through status flags and version history instead.`,
        code: {
          label: 'Archiving Implementation Patterns',
          lines: [
            'Status-flag archiving (most common):',
            '  → Superseded revisions remain in the same location',
            '  → A "Superseded" status flag hides them from the default view',
            '  → Full version history remains accessible via the platform\'s history panel',
            '',
            'Folder-based archiving:',
            '  → Superseded content physically moves to a dedicated Archive folder',
            '  → Used more often for document management than for models',
          ],
        },
      },
      {
        id: 's4', heading: 'The Legal and Compliance Role of the Archive', level: 'h2',
        content: `In a dispute — over a defect, a delay, or a design responsibility question — the Archive state is often the deciding piece of evidence.`,
        items: [
          'Establishes exactly what information was available, and at what suitability, at any given point in the project timeline',
          'Provides a defensible answer to "what did the contractor actually have when they built this?"',
          'Supports insurance, warranty, and professional indemnity processes long after project completion',
          'Under ISO 19650-3, archived delivery-phase information also feeds into the long-term Asset Information Model (Lesson cde-27)',
        ],
      },
      {
        id: 's5', heading: 'Retrieving Archived Information', level: 'h2',
        content: `Archive access should be possible, but deliberately less convenient than accessing current Published content — this is a feature, not an oversight.`,
        items: [
          'Users must actively search or filter for Superseded/Archived status to see this content — it is hidden from the default view',
          'Retrieval should be logged where possible, so there is a record of who accessed historical information and when',
          'On most platforms, only users with sufficient permission (typically Information Manager or above) can permanently remove anything from the archive — and in practice, this should almost never happen',
        ],
      },
      {
        id: 's6', heading: 'Common Archive Mistakes', level: 'h2',
        content: `**Mistake:**
Manually deleting old files to "tidy up" the CDE as the project nears completion. This destroys the audit trail exactly when it becomes most valuable — at handover and in the post-completion defects period.

**Mistake:**
Leaving Superseded content visible in the default project view because the status flag was never applied consistently. This recreates the version-confusion risk the whole state model exists to prevent.

**Best Practice:**
Treat the Archive as a permanent project record from day one — plan storage and platform licensing on the assumption that archived data will be retained for years after project completion, not just for the build duration.`,
      },
    ],
    takeaways: [
      'A compliant CDE never deletes superseded information — it archives it permanently as a legal and audit record.',
      'Archiving is triggered by supersession: when a new revision is Published, the previous one moves to Archived.',
      'Most platforms implement archiving through status flags and version history rather than a literal separate folder.',
      'The Archive state provides the defensible evidence trail needed for disputes, warranties, and professional indemnity claims.',
      'Archive retrieval should remain possible but deliberately less convenient than accessing current content, and ideally logged.',
      'Never manually delete archived content to "tidy up" a project — this destroys the audit trail exactly when it is most valuable.',
    ],
    resource: { label: 'CDE Archive & Compliance Guide', type: 'PDF' },
    quiz: { label: 'The Archive State Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-14', title: 'The Published State — Formal Issue & Suitability Assignment' },
    next: { id: 'cde-16', title: 'Transmittals — The Formal Communication Layer of the CDE' },
  },

  // ============================================================
  // LESSON CDE-16 — Transmittals
  // ============================================================
  {
    id: 'cde-16', num: '16',
    title: 'Transmittals — The Formal Communication Layer of the CDE',
    topic: 'Transmittals', cat: 'intermediate', readTime: '8 min', free: false,
    desc: 'Learn how transmittals formally record document issue, and why they matter as much for legal protection as for project communication.',
    intro: `A transmittal is the formal record layer sitting on top of every publication — proof that specific information, at a specific revision, was issued to a specific party, for a specific purpose, on a specific date. Without transmittals, a CDE has excellent internal governance but no defensible record of what actually left the system. This lesson covers how transmittals work and how they connect to everything else covered so far in this course.`,
    sections: [
      {
        id: 's1', heading: 'What a Transmittal Actually Records', level: 'h2',
        content: `A transmittal is distinct from simply making a file visible to someone. It is a structured, timestamped, unchangeable record of a specific issue event.`,
        code: {
          label: 'What Every Transmittal Must Capture',
          lines: [
            'WHAT      → Which containers, at which revision, were included',
            'WHO       → Named recipients (individuals and/or companies)',
            'WHY       → Issue purpose (e.g. Issued for Construction, Issued for Coordination)',
            'WHEN      → Exact date and time of issue',
            'RESPONSE  → Whether a formal response or acknowledgement is required',
          ],
        },
      },
      {
        id: 's2', heading: 'Issue Purposes and Suitability — Related but Different', level: 'h2',
        content: `Issue purpose and suitability code (Lesson cde-7) are related concepts but answer different questions. Suitability describes what the information itself is fit for; issue purpose describes why this specific transmittal is being sent.`,
        code: {
          label: 'Common Transmittal Issue Purposes',
          lines: [
            'IFC     → Issued for Construction',
            'IFI     → Issued for Information',
            'IFCoord → Issued for Coordination',
            'IFA     → Issued for Approval (response required)',
            'IFR     → Issued for Review (comments requested)',
            'IFT     → Issued for Tender',
          ],
        },
        formula: { label: 'Purpose vs Suitability', text: 'Suitability = a property of the container itself | Issue Purpose = a property of this specific transmittal event' },
      },
      {
        id: 's3', heading: 'Why Transmittals Matter Legally', level: 'h2',
        content: `In construction disputes, the transmittal register is frequently the single most important piece of documentary evidence, because it answers the question that matters most: did the recipient actually receive the correct information, at the correct revision, in time?`,
        items: [
          '"We never received Rev C" is unanswerable without a transmittal record — with one, it is resolved in seconds',
          'A transmittal proves not just that information existed, but that it was actively delivered to a named party',
          'Professional indemnity and liability questions frequently hinge on exactly this kind of evidence',
        ],
      },
      {
        id: 's4', heading: 'Creating a Transmittal in Practice', level: 'h2',
        content: `A worked example of creating a transmittal for a DPC2025 structural drawing package, using ACC Docs.`,
        code: {
          label: 'DPC2025 Transmittal — Worked Example',
          lines: [
            '1. Select the Published documents to include (structural drawing package)',
            '2. Set Issue Purpose: IFC — Issued for Construction',
            '3. Add recipients: Main Contractor site team, Client representative',
            '4. Add a brief message describing what is being issued and why',
            '5. Review revision numbers shown against each document — confirm correctness',
            '6. Send — recipients notified by email, transmittal logged permanently in the register',
          ],
        },
      },
      {
        id: 's5', heading: 'Responses and Outstanding Transmittals', level: 'h2',
        content: `Transmittals issued "for approval" or "for review" require a tracked response — an unacknowledged transmittal is an unresolved risk sitting in the project.`,
        items: [
          'Common response codes: Approved, Approved with Comments, Rejected, Revise and Resubmit',
          'Outstanding responses should be visible on a live register, not tracked manually in a spreadsheet or inbox',
          'A pattern of slow responses from a specific party is worth raising early — it is often an early warning sign of a resourcing or engagement problem',
        ],
      },
      {
        id: 's6', heading: 'Common Transmittal Mistakes', level: 'h2',
        content: `**Mistake:**
Sending information by email "to save time" instead of through the CDE's transmittal system. This creates a parallel, untracked communication channel that undermines the entire audit trail the CDE is built to provide.

**Mistake:**
Using vague or inconsistent issue purposes ("for info," "FYI," "please see attached") instead of the agreed standard set. This makes the transmittal register far harder to search and rely upon later.

**Best Practice:**
Treat the transmittal register as the single source of truth for "who has received what, and when" — if it didn't go through a transmittal, it should be treated as if it was never formally issued at all.`,
      },
    ],
    takeaways: [
      'A transmittal is a formal, timestamped record of what was issued, to whom, why, and when — distinct from simply sharing a file.',
      'Issue purpose (why this transmittal was sent) and suitability code (what the container is fit for) are related but separate concepts.',
      'Transmittal records are frequently the deciding evidence in construction disputes over information delivery.',
      'Transmittals issued for approval or review require a tracked response — outstanding responses represent unresolved project risk.',
      'Sending information by email instead of through the CDE\'s transmittal system breaks the audit trail the whole process depends on.',
      'The transmittal register should be treated as the single source of truth for what was formally issued on the project.',
    ],
    resource: { label: 'Transmittal Process & Register Template', type: 'PDF' },
    quiz: { label: 'Transmittals Quiz', questions: 10, time: '5 min' },
    prev: { id: 'cde-15', title: 'The Archive State — Version History, Audit Trail & Compliance' },
    next: { id: 'cde-17', title: 'The Revision System — How Files Evolve Through the CDE' },
  },

]
