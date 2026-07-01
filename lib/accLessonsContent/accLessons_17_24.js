// ============================================================
// AUTODESK CONSTRUCTION CLOUD — LESSONS acc-17 through acc-24 (ADVANCED)
// Section: Reporting, Handover & ISO 19650
// File: lib/accLessonsContent/accLessons_17_24.js
// Index: lib/accLessonsData.js
// ============================================================

export const lessons_17_24 = [

  // ============================================================
  // LESSON ACC-17 — Sheets — Publishing Drawings from Revit to ACC
  // ============================================================
  {
    id: 'acc-17', num: '17',
    title: 'Sheets — Publishing Drawings from Revit to ACC',
    topic: 'Sheets & Drawings', cat: 'advanced', readTime: '9 min', free: false,
    desc: 'Publish, manage, and mark up construction drawings using the ACC Sheets module — from Revit publishing to contractor markup workflows.',
    intro: `The Sheets module in ACC is separate from Docs and serves a specific purpose: managing the formal drawing register — the current set of issued construction drawings. Where Docs stores all project documents in version-controlled folders, Sheets provides a curated, always-current view of the live drawing set, with the ability to annotate, link issues, and manage superseded sheets. For project teams that previously managed drawing registers in spreadsheets or via email, Sheets represents a significant step forward in drawing control.`,
    sections: [
      {
        id: 's1', heading: 'Sheets vs Docs — The Distinction', level: 'h2',
        content: `Sheets and Docs serve different but complementary roles in ACC. Understanding the distinction prevents confusion about where drawings should go and why both modules are needed.`,
        code: {
          label: 'Sheets vs Docs',
          lines: [
            'DOCS',
            '  → Stores all project documents in version-controlled folders',
            '  → WIP and Shared drawings live here (during design)',
            '  → Models, specifications, reports, correspondence',
            '  → Permission-controlled; not all users see all folders',
            '  → The CDE document repository',
            '',
            'SHEETS',
            '  → The formal, current drawing register',
            '  → Only formally issued drawings appear here',
            '  → All project members can see all published sheets',
            '  → Organized by sheet number, not folder',
            '  → Supports in-browser markup and issue linking',
            '  → The "live drawing set" that the site team builds from',
          ],
        },
        formula: { label: 'Key Rule', text: 'A drawing is in Docs until it is formally issued — then it is published to Sheets and becomes the live construction set' },
      },
      {
        id: 's2', heading: 'Publishing Drawings from Revit to ACC Sheets', level: 'h2',
        content: `The most common publishing workflow is direct from Revit to ACC Sheets using the Revit Publish to ACC feature. This eliminates the manual export-and-upload process.`,
        subsections: [
          {
            heading: 'Revit to ACC Sheets — Publishing Steps',
            items: [
              'In Revit, complete and check the sheet to be published',
              'Go to the **Add-Ins** tab → ACC → **Publish to ACC**',
              'Select the project and the target Sheet Set in ACC',
              'Choose which sheets to publish (select individual sheets or entire sets)',
              'Set the **Issue Purpose** — "Issued for Construction," "Issued for Coordination," etc.',
              'Add a **Revision Description** if required',
              'Click Publish — Revit exports the sheets as PDFs and uploads them to ACC Sheets',
              'ACC Sheets creates a new version of each published sheet; the previous version is retained as a superseded record',
              'Project members are notified that new drawings have been published',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Sheet Sets and Organization', level: 'h2',
        content: `In ACC Sheets, drawings are organized into **Sheet Sets** — named groups of drawings. Sheet Sets are the Sheets equivalent of folders in Docs.`,
        items: [
          'Create Sheet Sets for: Architectural, Structural, MEP, Civil, or by building/zone',
          'Sheets can belong to multiple sets if needed (e.g., a structural drawing in both "Structure" and "Zone A")',
          'Sheet Sets can be given different permission levels — useful for sharing only relevant drawings with subcontractors',
          'The default view in ACC Sheets shows all sets the user has access to, with the sheet number and latest revision displayed',
          'Users can search by sheet number, title, revision, or discipline across all their accessible Sheet Sets',
        ],
      },
      {
        id: 's4', heading: 'Sheet Versioning and Superseded Drawings', level: 'h2',
        content: `ACC Sheets manages versioning automatically. When a new revision of a drawing is published, the previous revision is retained as a superseded record — visible if explicitly looked for, but not the default view.`,
        code: {
          label: 'Sheet Versioning in ACC',
          lines: [
            'Initial publish → Sheet A101, Rev A appears in Sheets',
            '  Status: Current | Access: All project members',
            '',
            'Revised publish → Sheet A101, Rev B published',
            '  Rev B becomes Current',
            '  Rev A becomes Superseded (retained for record)',
            '',
            'In the Sheets module:',
            '  Default view → only Current revisions shown',
            '  Version history → click any sheet to see all revisions',
            '  Superseded label → clearly marked on older revisions',
            '',
            'Contractors always work from the Current revision.',
            'Superseded revisions are accessible for dispute purposes.',
          ],
        },
      },
      {
        id: 's5', heading: 'Markups and Annotations on Sheets', level: 'h2',
        content: `ACC Sheets allows team members to add **Markups** directly on drawings in the browser — without downloading to a desktop application. Markups are linked to specific points on the drawing and can be shared with named project members.`,
        items: [
          'Open any sheet in ACC Sheets — the drawing opens in the browser viewer',
          'Select the Markup tool from the toolbar — options include: Arrow, Cloud, Text, Dimension, Freehand',
          'Draw directly on the drawing and add a text comment',
          'Markups can be assigned to a specific team member for a required action',
          'Markups are visible to all project members (or can be set as private/draft before sharing)',
          'A markup can be linked to an Issue in Build — creating a formal record of the observation',
          'Published markups create a version of the sheet with the markups applied — separate from the original clean sheet',
        ],
      },
      {
        id: 's6', heading: 'Linking Issues to Sheet Locations', level: 'h2',
        content: `The connection between Sheets and Build Issues is one of the most powerful features of the ACC platform for construction management.`,
        subsections: [
          {
            heading: 'Linking an Issue to a Sheet',
            items: [
              'Open a sheet in Sheets viewer',
              'Click the "Issues" toggle to show issues linked to this sheet',
              'Issue pins appear on the drawing at the exact location where each issue was created',
              'Click any pin to open the Issue detail panel without leaving the drawing view',
              'Create a new Issue directly from the sheet: click the + icon and click the location on the drawing',
              'The new Issue is automatically linked to this sheet at this location',
              'Site managers reviewing a drawing can see all outstanding issues on that drawing in real time',
            ],
          },
        ],
      },
      {
        id: 's7', heading: 'Drawing Control Best Practices', level: 'h2',
        content: `**Best Practice:**
Publish to Sheets only when a drawing is formally issued — do not publish work-in-progress drawings to Sheets. The site team assumes that anything in Sheets is the current approved construction set.

**Best Practice:**
Maintain the sheet number and revision code in Revit exactly as it appears in the drawing register. ACC uses the sheet number to create and update sheet records — any inconsistency creates duplicates or missed updates.

**Best Practice:**
Communicate publishing events to the site team via ACC Notifications or a brief email. Even though team members receive automatic notifications, a brief summary of what was published and what changed helps site managers prioritize what to review.`,
      },
    ],
    takeaways: [
      'Sheets is the formal drawing register in ACC — it contains only currently issued construction drawings, distinct from the Docs folder structure.',
      'Publish drawings directly from Revit to ACC Sheets via the Add-Ins → ACC → Publish workflow, eliminating manual export and upload.',
      'Sheet Sets organize drawings by discipline or zone; the default view always shows only the current revision.',
      'Sheet versioning is automatic: publishing a new revision makes the previous revision Superseded but retains it for the audit record.',
      'Markups allow team members to annotate drawings directly in the browser and link annotations to formal Issues in Build.',
      'Issue pins visible on sheets in context give site managers a live view of all outstanding observations linked to each drawing.',
    ],
    resource: { label: 'ACC Sheets & Drawing Management Guide', type: 'PDF' },
    quiz: { label: 'Sheets & Drawing Publishing Quiz', questions: 10, time: '5 min' },
    prev: { id: 'acc-16', title: 'Schedule — Linking the Construction Programme to the Model' },
    next: { id: 'acc-18', title: 'Forms & Checklists — Site Inspections & Quality Assurance' },
  },

  // ============================================================
  // LESSON ACC-18 — Forms & Checklists — Site Inspections & QA
  // ============================================================
  {
    id: 'acc-18', num: '18',
    title: 'Forms & Checklists — Site Inspections & Quality Assurance',
    topic: 'Quality & Safety', cat: 'advanced', readTime: '8 min', free: false,
    desc: 'Build and use digital inspection forms and QA checklists in ACC Forms — replacing paper-based site inspection systems.',
    intro: `Paper-based inspection checklists are still the norm on most construction sites: a printed sheet on a clipboard, completed in pencil, filed in a site office folder that nobody retrieves until there's a dispute. ACC Forms replaces this with digital forms that are completed on a mobile device, timestamped, geolocated, photographed, and instantly available across the project team. The shift from paper to digital inspection records is one of the most practical improvements ACC brings to site operations.`,
    sections: [
      {
        id: 's1', heading: 'What are ACC Forms?', level: 'h2',
        content: `**ACC Forms** is the digital inspection and checklist module within ACC Build. It allows teams to create structured forms — reusable templates — and complete them on site using the mobile app or browser.`,
        items: [
          '**Inspection checklists** — systematic checks against specification requirements: concrete pour inspections, fire stopping checks, structural steel sign-off',
          '**Quality assurance records** — formal QA documentation required by ISO 9001, client standards, or contract requirements',
          '**Safety inspections** — weekly site safety walk checklists, permit-to-work sign-offs, scaffold inspection records',
          '**Handover checklists** — room-by-room or zone-by-zone completion checklists at practical completion',
          '**Commissioning records** — systematic sign-off of mechanical and electrical systems',
          'Forms can be linked to Issues in Build — a failed inspection item automatically creates an Issue for tracking to resolution',
        ],
      },
      {
        id: 's2', heading: 'Creating Form Templates', level: 'h2',
        content: `Form templates are built once and reused throughout the project. A well-designed template takes 30–60 minutes to create and may be completed dozens or hundreds of times.`,
        subsections: [
          {
            heading: 'Form Template Creation',
            items: [
              'Navigate to ACC Build → Forms → Form Templates',
              'Click **+ New Template**',
              'Add a **Title** (e.g., "Concrete Pour Pre-Pour Inspection") and optional description',
              'Add **Sections** to organise the form logically (e.g., "Formwork," "Reinforcement," "Pre-pour checklist")',
              'Within each section, add **Questions** of appropriate types:',
              '  **Checkbox** — Pass/Fail or Yes/No items',
              '  **Text** — free text response for descriptions or observations',
              '  **Number** — for measurements, temperatures, quantities',
              '  **Date/Time** — for timestamps of events',
              '  **Photo** — requires the inspector to attach a photo as evidence',
              '  **Signature** — for supervisor or inspector sign-off',
              'Mark questions as **Required** if they must be completed before the form can be submitted',
              'Save the template — it is now available for use on any project that has Forms activated',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Completing Forms on Site', level: 'h2',
        content: `Forms are primarily completed using the **ACC mobile app** on a smartphone or tablet — giving inspectors access to the form, the drawing, and the camera in one device.`,
        code: {
          label: 'Mobile Form Completion Workflow',
          lines: [
            '1. Open ACC Mobile App → Build → Forms',
            '2. Select the appropriate form template',
            '3. Fill in form header: date, location, inspector name',
            '4. Work through each section and question:',
            '   → Checkbox items: tap Pass/Fail',
            '   → Text items: type observation or measurement',
            '   → Photo items: take a photo in-app or attach from gallery',
            '   → Signature: draw or use saved signature',
            '5. For any failed item:',
            '   → Add a comment describing the non-conformance',
            '   → Attach a photo of the failure',
            '   → Optionally create an Issue directly from the failed item',
            '6. Complete all required fields',
            '7. Submit the form — it is timestamped and cannot be edited',
          ],
        },
      },
      {
        id: 's4', heading: 'Linking Forms to Issues and Drawings', level: 'h2',
        content: `The integration between Forms and Build Issues is one of the most valuable features of the ACC inspection workflow. Failed inspection items can automatically create Issues for formal tracking.`,
        items: [
          'When a checklist item is marked as "Fail," the inspector can tap "Create Issue" directly on that item',
          'The Issue inherits the form title, section, and question text as the issue description',
          'The photo attached to the failed item is automatically added to the Issue',
          'The Issue is assigned to the relevant party for resolution',
          'When the Issue is resolved and closed, the failed inspection item can be re-checked on a follow-up inspection',
          'Linking forms to their location on a drawing provides geographic context for all inspection records',
        ],
      },
      {
        id: 's5', heading: 'Inspection Records and Compliance', level: 'h2',
        content: `Digital inspection records in ACC Forms create a timestamped, non-editable, easily retrievable compliance record — one of the key benefits over paper-based systems.`,
        subsections: [
          {
            heading: 'Compliance Record Features',
            items: [
              'Every submitted form has: date and time, GPS location (if captured on mobile), inspector name, and all responses',
              'Forms cannot be edited after submission — providing an unalterable contemporaneous record',
              'All photos are automatically geotagged and timestamped on mobile',
              'Forms are stored in ACC and accessible to all project members with Forms View access — instant retrieval',
              'Export all forms for a specific template as a PDF or CSV for regulatory submission or handover records',
              'For ISO 9001 compliance, digital form records satisfy audit requirements for documented evidence of inspection',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Handover Checklists', level: 'h2',
        content: `At practical completion, Forms becomes the primary tool for the handover process — zone-by-zone or room-by-room completion checklists that verify the building is ready for occupation.`,
        items: [
          'Create a "Practical Completion Checklist" template covering all required sign-off items: finishes, MEP commissioning, safety installations, FM information',
          'Assign each checklist to a zone, floor, or apartment number for systematic coverage',
          'Track completion status: how many checklists are submitted, how many have outstanding failed items',
          'Outstanding failed items appear as Issues — the list of outstanding Issues at practical completion is the defects list (snagging list)',
          'Once all Issues from the snagging process are closed, the practical completion sign-off is complete',
          'The full set of submitted completion checklists forms part of the handover documentation package',
        ],
      },
      {
        id: 's7', heading: 'Safety Inspection Forms', level: 'h2',
        content: `Safety inspections in ACC Forms provide a systematic, traceable record of site safety compliance — critical for HSE requirements and for managing the contractor's safety obligations.`,
        subsections: [
          {
            heading: 'Common Safety Form Templates',
            items: [
              '**Weekly Safety Walk** — systematic walk through the site checking hazards, housekeeping, and welfare facilities',
              '**Scaffold Inspection Record** — mandatory in many jurisdictions after erection, after loading, and after adverse weather',
              '**Permit to Work** — for hot work, confined spaces, work at height — the permit is the form, completed and signed before work starts',
              '**Near Miss Report** — formal record of safety near misses for learning and prevention',
              '**Equipment Inspection** — daily pre-use checks for plant, tools, and lifting equipment',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'ACC Forms replaces paper-based inspection checklists with digital forms completed on the mobile app — timestamped, geolocated, and immediately available.',
      'Form templates are built once with sections and questions of multiple types (checkbox, text, photo, signature) and reused throughout the project.',
      'Failed inspection items can automatically create linked Issues in Build for formal tracking and close-out.',
      'Submitted forms are non-editable, timestamped records — providing compliance evidence for ISO 9001, HSE requirements, and dispute resolution.',
      'At practical completion, Forms is used for zone-by-zone snagging checklists — outstanding failed items become the defects list.',
      'Safety inspection forms (weekly safety walk, scaffold inspection, permit to work) provide the traceable compliance record required by HSE legislation.',
    ],
    resource: { label: 'ACC Forms & Inspection Checklist Guide', type: 'PDF' },
    quiz: { label: 'Forms & QA Checklists Quiz', questions: 10, time: '5 min' },
    prev: { id: 'acc-17', title: 'Sheets — Publishing Drawings from Revit to ACC' },
    next: { id: 'acc-19', title: 'Assets — Tracking Equipment & FM Data in ACC' },
  },

  // ============================================================
  // LESSON ACC-19 — Assets — Tracking Equipment & FM Data in ACC
  // ============================================================
  {
    id: 'acc-19', num: '19',
    title: 'Assets — Tracking Equipment & FM Data in ACC',
    topic: 'Asset Management', cat: 'advanced', readTime: '8 min', free: false,
    desc: 'Track building equipment and facilities management data through the construction phase using ACC Assets — linking BIM model data to the handover record.',
    intro: `One of the most persistent failures in construction handover is that the facilities management team receives a model and a set of documents that do not contain the information they actually need to operate the building. Equipment serial numbers, warranty periods, maintenance schedules, and contact details for suppliers are rarely captured systematically during construction. ACC Assets is designed to change this — providing a structured way to capture FM data as assets are installed, linked directly to the BIM model elements they represent.`,
    sections: [
      {
        id: 's1', heading: 'What is the Assets Module?', level: 'h2',
        content: `**ACC Assets** is a module for tracking building assets — equipment, plant, and components — through the construction phase and into operations. It is the FM data capture layer of ACC, sitting between the BIM model and the facilities management system the building owner will use post-occupancy.`,
        items: [
          'An **Asset** in ACC is a record of a specific piece of installed equipment or component: an AHU, a fire pump, a lift, a generator',
          'Each asset record captures: manufacturer, model, serial number, installation date, warranty expiry, maintenance schedule, supplier contact',
          'Assets can be linked to the corresponding element in the BIM model — providing geographic and spatial context for every record',
          'Assets are linked to **Categories** — a structured classification system (HVAC, Electrical, Plumbing, Fire Protection)',
          'The Assets module is used during construction to build up the FM record, not after handover — capturing data as equipment is installed',
        ],
        formula: { label: 'Asset Management Principle', text: 'Capture FM data as equipment is installed during construction — not retrospectively after handover when the information is harder to retrieve' },
      },
      {
        id: 's2', heading: 'Setting Up Asset Categories', level: 'h2',
        content: `Asset Categories are the classification structure that organises all assets in a project. Categories should match the FM system the building owner will use post-occupancy.`,
        subsections: [
          {
            heading: 'Category Configuration Steps',
            items: [
              'Navigate to ACC Assets → Settings → Categories',
              'Create top-level categories matching your asset classification system:',
              '  Mechanical → HVAC → Air Handling Units, Fans, Chillers, Boilers',
              '  Electrical → Switchgear, UPS, Emergency Lighting, Distribution Boards',
              '  Fire Protection → Sprinkler Heads, Fire Pumps, Detectors, Panels',
              '  Plumbing → Water Heaters, Pumps, Valves, Meters',
              '  Lifts & Escalators',
              'For each category, define the **custom fields** that apply:',
              '  Manufacturer, Model Number, Serial Number, Warranty Expiry Date,',
              '  Maintenance Interval, Commissioning Date, Supplier Contact',
              'Categories and fields can align with COBie data requirements for ISO 19650 handover compliance',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Adding Assets During Construction', level: 'h2',
        content: `Assets are added to ACC as equipment is delivered to site and installed. The process is typically managed by the mechanical or electrical subcontractor, with oversight from the BIM or project manager.`,
        code: {
          label: 'Asset Record Creation Workflow',
          lines: [
            '1. Equipment arrives on site',
            '   → Subcontractor opens ACC Assets on mobile',
            '   → Creates new Asset record',
            '   → Selects Category and enters:',
            '      Manufacturer, Model, Serial Number',
            '      Delivery Date, Supplier, Purchase Order ref',
            '',
            '2. Equipment is installed',
            '   → Asset record updated with Installation Date',
            '   → Location pinned to floor plan or model element',
            '   → Photos of installed equipment attached',
            '',
            '3. Equipment is commissioned',
            '   → Commissioning Date and commissioning test result added',
            '   → Warranty start date confirmed and entered',
            '   → Commissioning certificate attached to the asset record',
          ],
        },
      },
      {
        id: 's4', heading: 'Linking Assets to BIM Model Elements', level: 'h2',
        content: `One of the most powerful features of ACC Assets is the ability to link each asset record to the corresponding element in the BIM model. This connects the FM data to the spatial and geometric information in the model.`,
        items: [
          'Open an Asset record → click "Link to Model Element"',
          'The Coordinate viewer opens — navigate to the element in the 3D model and click it',
          'The asset record is now linked: clicking the element in the model shows the asset data, and clicking the asset record shows it in the model',
          'This link is the foundation of a COBie-compliant handover — spatial data from the model + FM data from Assets = complete handover record',
          'Linked assets can be viewed spatially: see all assets on a specific floor or within a specific zone',
          'For large MEP systems, linking asset records to model elements allows FM teams to quickly locate equipment in the model when planning maintenance',
        ],
      },
      {
        id: 's5', heading: 'Warranty and Maintenance Data', level: 'h2',
        content: `The most practically useful information in an Asset record for the FM team is often the warranty and maintenance data — information that is routinely lost between construction and occupation.`,
        items: [
          '**Warranty Period** — start date (typically commissioning date), end date, warranty type (parts only, parts and labour)',
          '**Manufacturer Warranty Contact** — name, phone, email for warranty claims',
          '**Maintenance Interval** — how often the equipment requires scheduled maintenance (monthly, quarterly, annual)',
          '**Maintenance Specification** — attach the manufacturer\'s maintenance schedule PDF to the asset record',
          '**Service Contractor** — if already appointed, add the preferred service contractor contact details',
          'This data populates the FM Planned Preventive Maintenance (PPM) schedule automatically if exported to a CAFM system',
        ],
      },
      {
        id: 's6', heading: 'Assets and COBie', level: 'h2',
        content: `**COBie (Construction Operations Building Information Exchange)** is the open data format for building information handover. ACC Assets can export data in COBie format, making it the primary data source for COBie-compliant handover under ISO 19650.`,
        subsections: [
          {
            heading: 'COBie Export from ACC Assets',
            items: [
              'Navigate to ACC Assets → Export → COBie',
              'Select the scope of the export: all categories, specific floors, or specific zones',
              'Choose the COBie schema version (2.4 is most common for UK projects)',
              'Export produces a COBie spreadsheet (XLS format) with the standard COBie tab structure',
              'The COBie spreadsheet is then submitted to the client\'s CAFM system or BIM data repository',
              'For ISO 19650 compliance, the COBie export date and version should be recorded in the transmittal register when submitted',
            ],
          },
        ],
      },
      {
        id: 's7', heading: 'Assets Module for BIM Practitioners', level: 'h2',
        content: `For BIM practitioners, the Assets module is the realisation of one of BIM's longest-standing promises: that the information captured in the design and construction phases will actually be delivered to the facilities management team in a usable form. Making this work requires early planning and discipline during construction.`,
        items: [
          'Define the Asset register (list of all assets to be tracked) in the BIM Execution Plan before construction starts',
          'Assign responsibility for asset data capture to the relevant subcontractors — mechanical subcontractor captures HVAC assets, etc.',
          'Include an asset data capture requirement in subcontract scopes of work',
          'Review asset record completeness monthly — incomplete records at handover are as problematic as missing records',
          'Coordinate ACC Asset categories with the client\'s CAFM system from the start — retrofitting a category structure at handover is painful',
        ],
      },
    ],
    takeaways: [
      'ACC Assets tracks building equipment and components through construction, capturing FM data as equipment is installed.',
      'Asset categories and custom fields should be configured to match the client\'s FM system and COBie data requirements before construction starts.',
      'Asset records are created at delivery and updated at installation and commissioning — capturing the full equipment lifecycle.',
      'Linking asset records to BIM model elements connects spatial data (where it is) with FM data (what it is, warranty, maintenance).',
      'Warranty period, maintenance interval, and service contractor data in asset records directly populate the FM PPM schedule.',
      'ACC Assets exports data in COBie format for ISO 19650-compliant handover to the client\'s CAFM system.',
    ],
    resource: { label: 'ACC Assets & COBie Handover Guide', type: 'PDF' },
    quiz: { label: 'Assets & FM Data Quiz', questions: 10, time: '5 min' },
    prev: { id: 'acc-18', title: 'Forms & Checklists — Site Inspections & Quality Assurance' },
    next: { id: 'acc-20', title: 'Reporting & Dashboards — Project Health at a Glance' },
  },

  // ============================================================
  // LESSON ACC-20 — Reporting & Dashboards
  // ============================================================
  {
    id: 'acc-20', num: '20',
    title: 'Reporting & Dashboards — Project Health at a Glance',
    topic: 'Reporting', cat: 'advanced', readTime: '8 min', free: false,
    desc: 'Use ACC Insights to build project health dashboards, generate reports across modules, and communicate project performance to stakeholders.',
    intro: `Data in ACC accumulates rapidly: hundreds of Issues, dozens of RFIs, clash counts across coordination runs, daily logs, form submissions. Without a reporting layer, this data stays raw and unreadable to the people who need it most — the project manager, the client, and the senior design team. ACC Insights is the reporting module that turns ACC data into project health dashboards and exportable reports. This lesson covers how to use it effectively, what reports to generate, and how to use data to drive project decisions.`,
    sections: [
      {
        id: 's1', heading: 'What is ACC Insights?', level: 'h2',
        content: `**ACC Insights** is the reporting and analytics module within ACC. It aggregates data from across all ACC modules — Docs, Build, Coordinate, Cost, Schedule, Forms, and Assets — and presents it in configurable dashboards and exportable reports.`,
        items: [
          'Insights provides pre-built dashboards for each module: an Issues dashboard, an RFI dashboard, a Coordination dashboard',
          'Custom dashboards can be configured with selected widgets, filters, and date ranges',
          'Reports can be exported as PDF, CSV, or Excel for distribution to stakeholders without ACC access',
          'Insights is accessible to all project members with View access — data visibility is still controlled by module permissions',
          'For project managers and clients, Insights is often the primary interface with ACC — they rarely go into Docs or Build directly',
        ],
        formula: { label: 'Reporting Value', text: 'Raw ACC data becomes decision-ready information only when viewed in context — Insights provides that context' },
      },
      {
        id: 's2', heading: 'The Project Overview Dashboard', level: 'h2',
        content: `The Project Overview dashboard is the first thing stakeholders see in Insights. It provides a high-level summary of project health across all modules.`,
        code: {
          label: 'Project Overview Dashboard Widgets',
          lines: [
            'Issue Summary',
            '  → Open / In Review / Overdue count',
            '  → Trend: issues created vs closed over time',
            '',
            'RFI Summary',
            '  → Open RFIs / Overdue / Average Response Time',
            '',
            'Coordination Summary',
            '  → Total clashes / New / Active / Resolved this week',
            '',
            'Document Activity',
            '  → Files uploaded in last 7 days / 30 days',
            '',
            'Schedule Status',
            '  → % Activities on time / Behind / Critical',
            '',
            'Safety Summary',
            '  → Open safety issues / forms submitted this week',
          ],
        },
      },
      {
        id: 's3', heading: 'Issue Reports', level: 'h2',
        content: `The Issues dashboard in Insights provides the most frequently used set of project reports — breaking down the issue register by type, assignee, status, and age.`,
        subsections: [
          {
            heading: 'Key Issue Report Views',
            items: [
              '**By Status** — how many issues are Open, In Review, Closed, or Overdue',
              '**By Type** — breakdown by Quality, Safety, Design, Commissioning — showing where problems are concentrated',
              '**By Assignee / Company** — who has the most open issues assigned to them; useful for subcontractor performance monitoring',
              '**Age Analysis** — how long open issues have been outstanding (0–7 days, 7–14 days, 14+ days overdue)',
              '**Trend Chart** — issues created vs closed per week over the project lifecycle — a rising gap indicates issues are being raised faster than they are being resolved',
              '**Location Heatmap** — if issues are geolocated on drawings, Insights can show which areas have the highest density of issues',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Coordination Reports', level: 'h2',
        content: `The Coordination dashboard in Insights tracks clash detection trends across the project — showing whether the coordination process is delivering fewer clashes over time.`,
        items: [
          '**Clash Count by Test** — how many clashes each test combination (Structure vs MEP, Architecture vs MEP) has detected',
          '**Clash Trend** — clash counts across consecutive model runs; a downward trend indicates effective coordination',
          '**Status Breakdown** — clashes by status: New, Active, Approved, Resolved, Closed',
          '**Discipline Responsibility** — which discipline has the most unresolved assigned clashes',
          '**Time to Resolve** — average number of days from clash detection to closure per discipline',
          'Coordination reports are typically presented at weekly coordination meetings to track progress against the coordination programme',
        ],
      },
      {
        id: 's5', heading: 'Custom Dashboards', level: 'h2',
        content: `ACC Insights allows you to build custom dashboards by selecting specific widgets, applying filters, and combining data from different modules.`,
        subsections: [
          {
            heading: 'Building a Custom Dashboard',
            items: [
              'Navigate to Insights → Dashboards → + New Dashboard',
              'Enter a name: "Client Monthly Report" or "Safety KPI Dashboard"',
              'Add widgets from the available widget library',
              'Configure each widget: select the data source, apply filters (by date, type, company, area)',
              'Arrange widgets on the dashboard canvas by dragging and resizing',
              'Set the dashboard as shared or private — shared dashboards are visible to all project members in Insights',
              'Pin the dashboard to the Insights home for quick access',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Exporting Reports', level: 'h2',
        content: `Reports and dashboard data can be exported from ACC Insights in formats suitable for distribution to stakeholders who do not have ACC access.`,
        items: [
          '**PDF export** — a snapshot of the current dashboard or report, formatted for presentation',
          '**CSV / Excel export** — raw data from any report for further analysis in Excel or Power BI',
          '**Scheduled reports** — configure Insights to automatically email a PDF report to nominated recipients weekly or monthly',
          'Scheduled reports are particularly useful for clients who want a weekly project health update without logging in to ACC',
          'Export the full Issues list as a CSV to perform calculations not available in the Insights interface (e.g., average resolution time by company)',
          'Export coordination run history as a CSV to create a trend analysis showing clash reduction over the project',
        ],
      },
      {
        id: 's7', heading: 'Using Insights for Project Decision-Making', level: 'h2',
        content: `The purpose of Insights is not just reporting — it is enabling better project decisions, faster.`,
        subsections: [
          {
            heading: 'Insights-Driven Decisions',
            items: [
              '**Rising overdue Issues** → escalate to the responsible subcontractor at the next site meeting',
              '**RFI response time exceeding 14 days** → raise with the lead designer formally; programme impact is accumulating',
              '**Clash count not reducing week-on-week** → coordination cycle is breaking down; specific disciplines need attention',
              '**Safety issues above normal baseline** → safety briefing required; investigate root cause before the next site inspection',
              '**Forms not being submitted** → the site team is not completing inspections; retrain and reinforce the requirement',
              'Insights converts gut-feel project management into evidence-based project management — the numbers make the conversation easier',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'ACC Insights aggregates data from all ACC modules into pre-built and custom dashboards, and exportable reports.',
      'The Project Overview dashboard gives a high-level health summary: open issues, RFIs, clash counts, schedule status, and safety summary.',
      'Issue reports by status, type, assignee, and age help project managers identify where attention is needed and hold subcontractors accountable.',
      'Coordination dashboards track clash count trends — a declining clash count over successive runs confirms coordination is effective.',
      'Custom dashboards can be configured for specific audiences: client monthly reports, safety KPI dashboards, coordination progress views.',
      'Scheduled report exports automatically email PDF updates to stakeholders on a weekly or monthly basis without them needing to log in to ACC.',
    ],
    resource: { label: 'ACC Insights & Reporting Guide', type: 'PDF' },
    quiz: { label: 'Reporting & Dashboards Quiz', questions: 10, time: '5 min' },
    prev: { id: 'acc-19', title: 'Assets — Tracking Equipment & FM Data in ACC' },
    next: { id: 'acc-21', title: 'ACC & ISO 19650 — CDE Compliance & Information Delivery' },
  },

  // ============================================================
  // LESSON ACC-21 — ACC & ISO 19650 — CDE Compliance & Information Delivery
  // ============================================================
  {
    id: 'acc-21', num: '21',
    title: 'ACC & ISO 19650 — CDE Compliance & Information Delivery',
    topic: 'Standards', cat: 'advanced', readTime: '10 min', free: false,
    desc: 'Understand how ACC implements the ISO 19650 Common Data Environment requirements — naming conventions, approval workflows, and information delivery.',
    intro: `ISO 19650 is the international standard that governs how BIM information is managed and exchanged on a construction project. At its core is the Common Data Environment — a controlled information platform with specific requirements for how information moves through states, who can access what, and how delivery is formally evidenced. ACC is increasingly the platform of choice for ISO 19650 CDE implementation — but ISO 19650 compliance is not automatic. This lesson covers which requirements the platform supports natively and which require deliberate configuration.`,
    sections: [
      {
        id: 's1', heading: 'ISO 19650 and the CDE — A Quick Recap', level: 'h2',
        content: `ISO 19650 defines the requirements for information management using BIM throughout the asset lifecycle. Its CDE requirements are most relevant during the design and construction phases.`,
        code: {
          label: 'ISO 19650 CDE Requirements Summary',
          lines: [
            'Information containers must have:',
            '  → Unique file names with defined metadata fields',
            '  → Controlled states: WIP → Shared → Published → Archived',
            '  → Suitability codes indicating purpose of information',
            '',
            'Information delivery requires:',
            '  → Defined Information Delivery Milestones (IDM)',
            '  → Acceptance of information by the appointing party',
            '  → Formal record of delivery (equivalent to transmittal)',
            '',
            'Access control requires:',
            '  → WIP accessible only to the originating party',
            '  → Shared accessible to the wider task team',
            '  → Published accessible to the appointing party',
            '',
            'The platform must:',
            '  → Prevent unauthorised changes to published information',
            '  → Retain all superseded information for audit',
            '  → Provide a traceable delivery record',
          ],
        },
      },
      {
        id: 's2', heading: 'ISO 19650 File Naming in ACC Docs', level: 'h2',
        content: `ISO 19650 Part 2 includes a file naming convention for information containers. Implementing this convention in ACC Docs ensures that every document uploaded to the CDE carries the correct metadata in its file name.`,
        code: {
          label: 'ISO 19650 File Naming Convention',
          lines: [
            'Format:',
            '  [Project] - [Originator] - [Volume/System] - [Level/Location]',
            '  - [Type] - [Role] - [Number] . [Revision] . [Status]',
            '',
            'Example:',
            '  DP01 - DPA - ZZ - 00 - DR - A - 1001 . Rev-A . S2',
            '',
            'Field meanings:',
            '  DP01    → Project code',
            '  DPA     → Originator code (Dharren Park Architects)',
            '  ZZ      → Volume/System (ZZ = entire project)',
            '  00      → Level (00 = site/general)',
            '  DR      → Type code (DR = Drawing)',
            '  A       → Role code (A = Architect)',
            '  1001    → Number (sequential)',
            '  Rev-A   → Revision (alphabetical during design)',
            '  S2      → Status code (S2 = Suitable for Information)',
            '',
            'In ACC Docs: the file name carries this convention.',
            'Custom attributes capture the parsed fields for filtering.',
          ],
        },
      },
      {
        id: 's3', heading: 'CDE States in ACC — Implementation', level: 'h2',
        content: `The four ISO 19650 CDE states map to specific configurations in ACC Docs. This was introduced in Lesson acc-6 but is worth revisiting with the ISO 19650 compliance lens.`,
        subsections: [
          {
            heading: 'CDE State Implementation in ACC Docs',
            items: [
              '**WIP (Work in Progress)** — Docs folder with Edit permissions restricted to originating discipline only; Status: no formal code or "0 — Work in Progress"',
              '**Shared** — Docs folder with View permissions for all task team members; Status: "S1 — Suitable for Coordination" or "S4 — Suitable for Review and Comment"',
              '**Published (Approved)** — Docs Published folder or ACC Sheets; Status: "S2 — Suitable for Information" or "S3 — Suitable for Construction"',
              '**Archived** — Status set to Superseded in ACC; retained for record, hidden from default view',
              'The suitability codes (S1–S7) should be captured as a custom attribute in ACC Docs at the time of upload or status change',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Information Delivery Milestones in ACC', level: 'h2',
        content: `ISO 19650 requires Information Delivery Milestones (IDMs) — scheduled points in the project at which specified information containers must be delivered in defined states. ACC supports this through transmittals and the document status system.`,
        items: [
          'Define IDMs in the BIM Execution Plan with specific dates, information containers, and suitability codes',
          'In ACC, each IDM delivery is executed via a **Transmittal** — a formal record of which documents were delivered, in which revision, at which status',
          'The transmittal issue purpose maps to the IDM purpose: "IFC" for Suitable for Construction, "IFA" for Suitable for Review and Comment',
          'At each IDM, the appointing party (client) reviews the delivered information and formally accepts or rejects it in the transmittal response',
          'Acceptance creates a timestamped record in the transmittal register — the formal evidence of delivery required by ISO 19650',
        ],
      },
      {
        id: 's5', heading: 'Approval Workflows in ACC', level: 'h2',
        content: `ISO 19650 requires that information passes through an approval process before being made available in the Shared or Published states. ACC supports this through a combination of document status and transmittal response workflows.`,
        code: {
          label: 'Approval Workflow in ACC Docs',
          lines: [
            'Step 1: Author uploads to WIP folder',
            '  Status: Draft or WIP',
            '',
            'Step 2: Internal review within originating team',
            '  Status set to "In Review"',
            '  Reviewers add comments via document markup',
            '',
            'Step 3: Author resolves comments, resubmits',
            '  New version uploaded; comments addressed',
            '',
            'Step 4: Discipline lead approves',
            '  Status set to "Approved (Internal)"',
            '  File moved or copied to Shared folder',
            '',
            'Step 5: Cross-discipline review (Shared state)',
            '  Status: S1 — Suitable for Coordination',
            '',
            'Step 6: Lead Appointing Party review and acceptance',
            '  Transmittal issued "For Approval"',
            '  Response: Approved / Approved with Comments / Rejected',
            '',
            'Step 7: Published / Issued for Construction',
            '  Status: S3 — Suitable for Construction',
            '  Transmittal issued IFC to project team',
          ],
        },
      },
      {
        id: 's6', heading: 'What ACC Does and Does Not Do for ISO 19650', level: 'h2',
        content: `ACC provides a strong foundation for ISO 19650 CDE compliance — but compliance requires deliberate configuration and disciplined use. The platform does not guarantee compliance by default.`,
        items: [
          '**What ACC supports natively** — folder-based CDE states, permission controls, version history, transmittal records, document status workflows, metadata capture',
          '**What requires configuration** — suitability code custom attributes, IDM schedule tracking, file naming convention enforcement, approval role setup',
          '**What requires process discipline** — correct classification of files at upload, consistent status updates, timely transmittals at each IDM, proper separation of WIP and Shared',
          'ISO 19650 compliance is achieved through a combination of platform capability and team process — neither alone is sufficient',
          'The BIM Execution Plan should document exactly how each ISO 19650 requirement is implemented in ACC for the specific project',
        ],
      },
      {
        id: 's7', heading: 'The Audit Trail in ACC', level: 'h2',
        content: `One of ISO 19650's key requirements is that the CDE must maintain a complete, unalterable audit trail of all information transactions. ACC provides this natively.`,
        subsections: [
          {
            heading: 'ACC Audit Trail Components',
            items: [
              '**Version history** — every upload to every document, with user, timestamp, and file size',
              '**Status change log** — every change to document status, with user and timestamp',
              '**Transmittal register** — every formal issue, with documents, revisions, recipients, dates, and responses',
              '**Issue and RFI history** — every comment, assignment, status change, and attachment, with user and timestamp',
              '**Form submission records** — non-editable after submission; timestamped and geolocated',
              '**Access log** — who accessed which document and when (available at Account Admin level)',
              'This audit trail cannot be deleted or modified by project members — it is stored by Autodesk indefinitely',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'ISO 19650 requires a CDE with controlled states (WIP, Shared, Published, Archived), named file conventions, approval workflows, and a traceable delivery record.',
      'ACC Docs implements the four CDE states through folder structure, permission levels, and document status — configuration is required to align these with ISO 19650.',
      'The ISO 19650 file naming convention (project-originator-volume-level-type-role-number.revision.status) should be used for all information containers uploaded to ACC.',
      'Information Delivery Milestones are executed via Transmittals in ACC — the transmittal register provides the formal delivery evidence required by ISO 19650.',
      'ACC supports ISO 19650 compliance natively in many areas — but suitability codes, approval workflows, and file naming require deliberate configuration.',
      'The ACC audit trail (version history, status log, transmittal register, issue history) provides the unalterable transaction record required by ISO 19650.',
    ],
    resource: { label: 'ISO 19650 CDE Implementation in ACC Guide', type: 'PDF' },
    quiz: { label: 'ACC & ISO 19650 Compliance Quiz', questions: 10, time: '5 min' },
    prev: { id: 'acc-20', title: 'Reporting & Dashboards — Project Health at a Glance' },
    next: { id: 'acc-22', title: 'Handover — Delivering the As-Built Model & COBie Data' },
  },

  // ============================================================
  // LESSON ACC-22 — Handover — Delivering the As-Built Model & COBie Data
  // ============================================================
  {
    id: 'acc-22', num: '22',
    title: 'Handover — Delivering the As-Built Model & COBie Data',
    topic: 'Handover', cat: 'advanced', readTime: '9 min', free: false,
    desc: 'Execute a complete project handover using ACC — as-built documents, COBie export, model delivery, and closing out the CDE for the client.',
    intro: `Practical completion is the most information-intensive moment in a construction project. Every document, model, form, and asset record accumulated over months or years must be reviewed, completed, packaged, and formally delivered to the client in a usable format. Projects that have managed their CDE well throughout the project — with consistent uploads, metadata, and versioning — find handover straightforward. Projects where the CDE was treated as a file dump scramble to reconstruct the information at the end. This lesson covers how to execute a clean, ISO 19650-compliant handover using ACC.`,
    sections: [
      {
        id: 's1', heading: 'What is Project Handover?', level: 'h2',
        content: `**Project handover** is the formal transfer of the building, all associated documentation, and information assets from the construction team to the client at practical completion. In a BIM project, handover has two distinct layers: the physical building and the information package.`,
        items: [
          '**Physical handover** — the building is inspected, defects are noted on the snagging list (Issues in ACC), and the keys/access codes are formally handed over',
          '**Document handover** — all as-built drawings, specifications, O&M manuals, test reports, warranties, and certificates are formally delivered',
          '**Model handover** — the as-built BIM model is delivered to the client, ready for import into their FM system or CAFM platform',
          '**FM data handover** — COBie data or equivalent, extracted from ACC Assets, delivered to the client\'s FM system',
          '**Defects period** — typically 12 months post-practical completion during which the contractor remains responsible for defect rectification',
        ],
        formula: { label: 'Handover Package', text: 'As-built documents + As-built model + FM data (COBie) + Warranties + O&M Manuals = Complete Handover Package' },
      },
      {
        id: 's2', heading: 'Pre-Handover Preparation in ACC', level: 'h2',
        content: `Effective handover requires weeks of preparation, not a last-minute scramble. The key activities that must be completed before the handover date are:`,
        subsections: [
          {
            heading: 'Pre-Handover Checklist',
            items: [
              '**Issues** — all practical completion Issues (snagging) identified and formally recorded in ACC Build; critical issues resolved; defects listed documented',
              '**Forms** — all handover and commissioning checklists completed and submitted in ACC Forms',
              '**Submittals** — all O&M manual submittals reviewed and approved by the design team',
              '**As-built drawings** — final revision drawings published to ACC Sheets with "As-Built" status',
              '**As-built model** — Revit model updated to reflect all design changes, published to ACC Docs',
              '**Assets** — all asset records completed: manufacturer, model, serial number, commissioning date, warranty data, maintenance schedule',
              '**COBie export** — ACC Assets COBie export run and reviewed for completeness before formal delivery',
              '**Transmittals** — all handover documents formally transmitted to the client via ACC Transmittals',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'As-Built Drawing Delivery', level: 'h2',
        content: `As-built drawings are the formal record of what was actually built — reflecting all changes made during construction, including RFI responses, variation orders, and site instructions.`,
        code: {
          label: 'As-Built Drawing Workflow in ACC',
          lines: [
            '1. Collect all change records:',
            '   → RFI responses that changed the design',
            '   → Change Orders affecting drawn information',
            '   → Site instructions issued during construction',
            '',
            '2. Update Revit model (and drawings) to reflect all changes',
            '   → Coordinate with each discipline to confirm their changes',
            '',
            '3. Publish as-built drawings to ACC Sheets',
            '   → Issue purpose: "As-Built"',
            '   → Revision suffix: "P1" or "AB" depending on project convention',
            '   → All previous revisions superseded',
            '',
            '4. Issue transmittal to client:',
            '   → Issue purpose: Issued for Information (record set)',
            '   → Include all as-built drawing sheets',
            '   → Require acknowledgement of receipt',
            '',
            '5. Store originals in the Handover folder in Docs',
            '   → Restricted access after handover (client and FM only)',
          ],
        },
      },
      {
        id: 's4', heading: 'As-Built Model Delivery', level: 'h2',
        content: `The as-built BIM model is the three-dimensional record of the completed building — the spatial and data foundation for the client's FM operations.`,
        items: [
          'Confirm with the client what model format they require: RVT (Revit), IFC, NWD, or a combination',
          'Update the model to reflect all changes confirmed in the as-built drawing set',
          'Remove construction-phase content not relevant to FM: site hoardings, temporary works, construction staging',
          'Check model parameters: ensure all shared parameters and type data required for COBie are populated',
          'Upload the final model to the Handover folder in ACC Docs',
          'Issue a transmittal to the client for the model file with the IFC or RVT as an attachment',
          'For large projects, the model may be split by building or zone for easier FM system import',
        ],
      },
      {
        id: 's5', heading: 'COBie Data Delivery', level: 'h2',
        content: `The COBie export from ACC Assets is the primary FM data deliverable for ISO 19650 and most UK government and commercial projects. It must be reviewed for completeness before delivery.`,
        subsections: [
          {
            heading: 'COBie Review and Delivery Steps',
            items: [
              'Export draft COBie from ACC Assets → review the spreadsheet for completeness',
              'Check each COBie tab: Facility, Floor, Space, Zone, Type, Component, Connection, Spare, Resource',
              'Verify all Components (assets) have: Name, Type, Space, Manufacturer, Model Number, Serial Number, Warranty Start, Warranty End',
              'Fill any gaps — incomplete asset records create incomplete COBie and a client rejection at handover',
              'Run the COBie export again with all gaps filled',
              'Submit the completed COBie spreadsheet to the client via ACC Transmittal',
              'Import the COBie data into the client\'s CAFM system and verify that assets appear correctly in the FM platform',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Closing Out Issues and RFIs', level: 'h2',
        content: `At handover, all construction-phase Issues and RFIs must be resolved or formally transferred to the defects liability period. No open Issues should remain without a clear status and responsible party.`,
        items: [
          'Generate a final Issues report from Insights — filter to "Open" status',
          'For each open issue: determine if it must be resolved before practical completion or can be deferred to the defects period',
          'Critical/P1 issues must be resolved before PC — obtain written confirmation from the client if a critical item is being deferred',
          'Issues deferred to the defects period should be re-categorised as "Defects Liability Period" items in ACC',
          'All RFIs should be in Closed or Void status at practical completion — no RFI should be left in Answered status without contractor acknowledgement',
          'The final Issues and RFI lists form part of the contract administration handover package',
        ],
      },
      {
        id: 's7', heading: 'Handover Folder and Client Access', level: 'h2',
        content: `At practical completion, the CDE structure changes. The working folders (WIP, Shared) are closed to further editing; the Handover folder becomes the live repository for the client and FM team.`,
        subsections: [
          {
            heading: 'Post-Handover CDE Configuration',
            items: [
              'Create or confirm the Handover folder in ACC Docs with appropriate client and FM team permissions',
              'Move or copy all as-built documents, models, warranties, certificates, and O&M manuals to the Handover folder',
              'Restrict or remove Edit access from all project team WIP and Shared folders',
              'Add the client\'s FM team as project members with View access to the Handover folder',
              'Set an archive date for the project — after the defects period, the project CDE is typically read-only and preserved as a record',
              'Provide the client with an ACC project guide covering how to access, search, and download their handover information',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'Project handover has four components: physical building, document package, as-built model, and FM data (COBie) — all managed in ACC.',
      'Pre-handover preparation requires weeks: completing snagging Issues, Forms, Submittals, as-built drawings, model updates, and asset records.',
      'As-built drawings are published to ACC Sheets with "As-Built" issue purpose and formally transmitted to the client with an acknowledgement requirement.',
      'The as-built model is updated to reflect all construction changes, cleaned of temporary works, and delivered to the client in their required format.',
      'COBie export from ACC Assets is the primary FM data deliverable — review for completeness before submission to the client\'s CAFM system.',
      'At practical completion, the CDE is reconfigured: WIP and Shared folders closed to editing; Handover folder opened to the client and FM team.',
    ],
    resource: { label: 'ACC Project Handover Checklist', type: 'PDF' },
    quiz: { label: 'Handover & COBie Delivery Quiz', questions: 10, time: '5 min' },
    prev: { id: 'acc-21', title: 'ACC & ISO 19650 — CDE Compliance & Information Delivery' },
    next: { id: 'acc-23', title: 'From BIM 360 to ACC — Understanding the Migration & Key Differences' },
  },

  // ============================================================
  // LESSON ACC-23 — From BIM 360 to ACC — Migration & Key Differences
  // ============================================================
  {
    id: 'acc-23', num: '23',
    title: 'From BIM 360 to ACC — Understanding the Migration & Key Differences',
    topic: 'Migration', cat: 'advanced', readTime: '8 min', free: false,
    desc: 'Understand what changed when BIM 360 became ACC, what was consolidated, and how to approach migrating a project or firm from BIM 360 to ACC.',
    intro: `Many BIM practitioners still work on projects that were started in BIM 360 before ACC became the platform of record. Understanding the relationship between the two — what changed, what was unified, and what was abandoned — is essential both for managing live projects and for onboarding colleagues who learned BIM 360 and are now working in ACC. This lesson provides an honest comparison and a practical migration guide.`,
    sections: [
      {
        id: 's1', heading: 'The BIM 360 Family — What It Was', level: 'h2',
        content: `BIM 360 was never a single product. It was a family of separate Autodesk products with separate logins, separate data environments, and separate billing — which is precisely why it was difficult to use and why ACC replaced it.`,
        code: {
          label: 'BIM 360 Products and Their ACC Equivalents',
          lines: [
            'BIM 360 Docs',
            '  → Document management and CDE',
            '  → Now: ACC Docs (same core functionality, improved)',
            '',
            'BIM 360 Design',
            '  → Revit cloud worksharing and design collaboration',
            '  → Now: BIM Collaborate Pro (runs under ACC infrastructure)',
            '',
            'BIM 360 Field',
            '  → Site management: Issues, Checklists, Daily Logs',
            '  → Now: ACC Build (significantly enhanced)',
            '',
            'BIM 360 Glue',
            '  → 3D model viewing and clash detection',
            '  → Now: ACC Coordinate (cloud-native, more powerful)',
            '',
            'BIM 360 Plan',
            '  → Construction planning and Last Planner',
            '  → Partially replaced by ACC Schedule',
            '',
            'BIM 360 Cost Management',
            '  → Cost tracking and change management',
            '  → Now: ACC Cost Management (significantly enhanced)',
          ],
        },
      },
      {
        id: 's2', heading: 'What Improved in ACC vs BIM 360', level: 'h2',
        content: `ACC is not just a rebranding of BIM 360. Significant functionality improvements were made when the products were consolidated under the ACC umbrella.`,
        items: [
          '**Unified login and data** — one Autodesk ID accesses all modules; data is shared across modules (an Issue can reference a Docs document and a Coordinate clash)',
          '**Cloud Coordinate** — model coordination runs automatically in the cloud; BIM 360 Glue required manual assembly',
          '**Enhanced Build** — ACC Build is substantially more capable than BIM 360 Field; RFI, Submittal, Meetings, and Daily Logs are all more structured',
          '**Cost Management** — ACC Cost Management is significantly more complete than the BIM 360 Cost offering',
          '**Forms module** — no direct equivalent existed in BIM 360; this is new in ACC',
          '**Assets module** — no direct equivalent existed in BIM 360; this is new in ACC',
          '**Insights dashboard** — ACC Insights provides cross-module reporting not available in BIM 360',
        ],
      },
      {
        id: 's3', heading: 'What Did Not Change', level: 'h2',
        content: `Not everything changed between BIM 360 and ACC. Understanding what stayed the same reduces the learning curve for practitioners transitioning between the two.`,
        subsections: [
          {
            heading: 'Continuities Between BIM 360 and ACC',
            items: [
              'The folder and permission model in Docs is essentially unchanged — Docs looks and feels familiar',
              'Revit publish workflows work similarly — the Add-In interface has evolved but the workflow is the same',
              'The Hub structure is unchanged — the same Hub that hosted BIM 360 projects now hosts ACC projects',
              'Project member management works the same way',
              'Transmittals in ACC Docs are functionally equivalent to BIM 360 Docs transmittals',
              'Issue creation and assignment workflows in Build are recognisable from BIM 360 Field, though more structured',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Migrating Projects from BIM 360 to ACC', level: 'h2',
        content: `Live projects that started in BIM 360 need to be migrated to ACC. Autodesk has provided a migration path, but it requires planning and execution — it is not automatic.`,
        code: {
          label: 'BIM 360 to ACC Migration Steps',
          lines: [
            '1. ASSESS',
            '   → Identify which BIM 360 projects to migrate',
            '   → Determine migration priority: live projects first',
            '   → Document the current project structure before migration',
            '',
            '2. PLAN',
            '   → Agree migration date with the project team',
            '   → Communicate to all project members that the project is moving',
            '   → Confirm that all team members have Autodesk IDs (unchanged)',
            '',
            '3. EXECUTE (Autodesk Tool or Manual)',
            '   → Use the Autodesk Migration Tool where available',
            '   → For unsupported modules: export data, re-import in ACC',
            '   → Verify that document version history migrated correctly',
            '',
            '4. VERIFY',
            '   → Check folder structure matches original',
            '   → Verify permissions are correct for all members',
            '   → Confirm that Issues, RFIs, and Transmittals are accessible',
            '',
            '5. COMMUNICATE',
            '   → Train team members on any workflow differences in ACC',
            '   → Update the BIM Execution Plan to reflect ACC as the CDE',
          ],
        },
      },
      {
        id: 's5', heading: 'Historical Data Access', level: 'h2',
        content: `BIM 360 projects that are not migrated remain accessible in BIM 360 for as long as the subscription is active. Historical BIM 360 data is not automatically deleted when a project moves to ACC.`,
        items: [
          'Completed projects in BIM 360 can be kept in BIM 360 for record purposes; no migration needed unless there is an active use case',
          'Autodesk provides read-only access to archived BIM 360 projects for projects that have reached practical completion',
          'For active projects still in BIM 360, prioritise migration to avoid operating across two platforms simultaneously',
          'If a BIM 360 project cannot be migrated mid-construction, complete it in BIM 360 and start the next project in ACC',
          'The BIM 360 Docs transmittal history and issue records are accessible for legal and audit purposes even after the project is complete',
        ],
      },
      {
        id: 's6', heading: 'Training Considerations for BIM 360 Users', level: 'h2',
        content: `For teams transitioning from BIM 360 to ACC, training should focus on what is new — not on re-teaching what is the same. The Docs module, in particular, is largely unchanged and should require minimal retraining.`,
        subsections: [
          {
            heading: 'Training Focus Areas',
            items: [
              '**ACC Coordinate** — substantially different from BIM 360 Glue; focus on cloud coordination workflow, package setup, and test configuration',
              '**ACC Build** — familiar from BIM 360 Field, but with new modules (Meetings, Forms); focus on the expanded functionality',
              '**ACC Insights** — new; no equivalent in BIM 360; train project managers and clients on dashboard use',
              '**ACC Assets** — new; train subcontractors on mobile asset data capture during installation',
              '**ACC Cost Management** — if using, train QS team; significantly different from BIM 360 Cost',
              '**Docs** — minimal retraining needed; focus on any new custom attributes or permission set changes',
            ],
          },
        ],
      },
      {
        id: 's7', heading: 'Living Through the Transition', level: 'h2',
        content: `**Honest Assessment:**
The BIM 360 to ACC transition was not seamless for many firms. Some functionality was missing in early versions of ACC that existed in BIM 360; the migration tools were imperfect; and running projects across both platforms simultaneously created confusion.

By 2025, however, ACC is substantially more complete than BIM 360 ever was, and Autodesk has committed to continuing development exclusively on the ACC platform. Firms still operating on BIM 360 should plan their migration; the platform receives no new feature development and will eventually be sunset.

**Best Practice:**
Start every new project in ACC from day one. Do not start new projects in BIM 360 even if the firm has live BIM 360 projects running in parallel — managing the two platforms simultaneously is a larger overhead than completing the migration.`,
      },
    ],
    takeaways: [
      'BIM 360 was a family of separate, siloed products (Docs, Glue, Field, Design, Cost); ACC unified these under one platform with shared data.',
      'ACC significantly improved on BIM 360 in Coordinate (cloud-native automation), Build (RFI/Submittal/Meetings), Cost, and added Forms, Assets, and Insights.',
      'The Docs module, folder permissions, Hub structure, and project member management are largely unchanged from BIM 360.',
      'Migrating projects from BIM 360 to ACC requires planning, a migration tool or manual process, verification, and team communication.',
      'Completed BIM 360 projects can remain in BIM 360 for record; active projects should be migrated to avoid running across two platforms.',
      'Start every new project in ACC — BIM 360 receives no new feature development and will eventually be sunset by Autodesk.',
    ],
    resource: { label: 'BIM 360 to ACC Migration Guide', type: 'PDF' },
    quiz: { label: 'BIM 360 to ACC Migration Quiz', questions: 10, time: '5 min' },
    prev: { id: 'acc-22', title: 'Handover — Delivering the As-Built Model & COBie Data' },
    next: { id: 'acc-24', title: 'Capstone — Dharren Park on ACC: Upload, Coordinate, Issue & Handover' },
  },

  // ============================================================
  // LESSON ACC-24 — Capstone
  // ============================================================
  {
    id: 'acc-24', num: '24',
    title: 'Capstone — Dharren Park on ACC: Upload, Coordinate, Issue & Handover',
    topic: 'Capstone', cat: 'advanced', readTime: '12 min', free: false,
    desc: 'A complete end-to-end ACC workflow — from project setup and document upload through model coordination, site issue management, and project handover.',
    intro: `Twenty-three lessons of ACC knowledge comes together in this capstone. We take a fictional project — the Dharren Park mixed-use development — from the first day of project setup on ACC through the full construction and coordination workflow to final handover. This is not a guided walkthrough of every button and click; it is a strategic overview of how an experienced BIM practitioner sets up and runs ACC on a real project, making the decisions that matter and avoiding the mistakes that derail CDEs in practice.`,
    sections: [
      {
        id: 's1', heading: 'The Project — Dharren Park Phase 1', level: 'h2',
        content: `**Dharren Park Phase 1** is a nine-storey mixed-use building comprising ground-floor retail, three floors of commercial office space, and five floors of residential apartments.

Project team:
- Architect: Dharren Park Architects (DPA)
- Structural Engineer: Smith Structural Ltd
- MEP Engineer: Metro Services Engineering
- Main Contractor: BuildFirst Contractors Ltd
- Client: Dharren Park Developments`,
        code: {
          label: 'Project Parameters',
          lines: [
            'Programme:          24 months (design and construction)',
            'BIM Standard:       ISO 19650 — CDE required',
            'ACC Modules:        Docs, Coordinate, Build, Sheets, Forms, Assets, Insights',
            'Model Authoring:    Revit 2025 (all disciplines)',
            'CDE:                ACC (Autodesk Construction Cloud)',
            'COBie:              Required at handover (UK Government standard)',
          ],
        },
      },
      {
        id: 's2', heading: 'Week 1 — Project Setup', level: 'h2',
        content: `The BIM Manager at Dharren Park Architects sets up the project in ACC on Day 1.`,
        subsections: [
          {
            heading: 'Setup Actions',
            items: [
              'Create the project in ACC Hub: "DP01 — Dharren Park Phase 1" | Building type | UK timezone',
              'Activate modules: Docs, Coordinate, Sheets (immediately); Build and Forms (at construction mobilisation)',
              'Configure the CDE folder structure: 01 Project Mgmt, 02 Design (with WIP/Shared sub-folders per discipline), 03 BIM Models, 04 Specifications, 05 Correspondence, 07 Handover',
              'Create Permission Sets: Architect, Structural Engineer, MEP Engineer, Main Contractor, Client Observer',
              'Add all companies: DPA, Smith Structural, Metro Services, BuildFirst, Dharren Park Developments',
              'Add all project members and assign Permission Sets',
              'Set up custom attributes: Discipline, Document Status (with ISO 19650 suitability codes), Revision',
              'Establish the file naming convention: DP01-[Originator]-[Level]-[Type]-[Role]-[Number].[Rev].[Status]',
              'Create a Coordination Space in Coordinate: "DP01 — Full Federated Model" — source folder: 03 BIM Models',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Months 1–6 — Design Phase', level: 'h2',
        content: `During the design phase, information flows from WIP to Shared as each discipline develops their model and drawings. The Coordination Space is active and running weekly.`,
        code: {
          label: 'Design Phase ACC Workflow',
          lines: [
            'DOCUMENTATION FLOW',
            '  DPA uploads Arch WIP drawings → 02.1 Arch [WIP]',
            '  Internal review and markup using ACC Docs viewer',
            '  Status updated S0 → S1 (Suitable for Coordination)',
            '  Drawings moved to 02.2 Arch [Shared]',
            '  Transmittal issued to all consultants: IFCoord',
            '',
            'MODEL COORDINATION',
            '  Each discipline uploads updated RVT to 03 BIM Models',
            '  Coordination Space runs weekly clash tests:',
            '    Arch vs Structure, Arch vs MEP, Structure vs MEP',
            '  BIM Manager reviews new clashes; assigns via Coordinate',
            '  Disciplines resolve and re-upload — closed clashes log',
            '',
            'IDM-1 (Month 3): Information delivery milestone',
            '  All S1 documents transmitted to Client for review',
            '  Client responds via transmittal: Approved / Comments',
            '',
            'IDM-2 (Month 6): Planning and Tender',
            '  All S3 (Suitable for Construction) documents issued',
            '  Transmittal: IFT (Issued for Tender)',
          ],
        },
      },
      {
        id: 's4', heading: 'Month 7 — Construction Mobilisation', level: 'h2',
        content: `BuildFirst is appointed at Month 7. The BIM Manager activates the construction management modules and onboards the contractor's site team.`,
        items: [
          'Activate Build and Forms modules in Project Settings',
          'Add BuildFirst site team members as Project Members with Contractor Permission Set',
          'Configure Issue Types: Quality, Safety, Design Query, Defect, Commissioning',
          'Configure RFI Types and set the contractual RFI response time (10 working days)',
          'Publish the tender drawings to ACC Sheets: Issue purpose "IFC — Issued for Construction"',
          'Brief the site team on mobile ACC app usage: document access, Issues, RFIs, Forms',
          'Set up the "Weekly Safety Walk" and "Concrete Pour Inspection" form templates in ACC Forms',
          'Set up daily log requirements: BuildFirst site manager completes a log every working day',
        ],
      },
      {
        id: 's5', heading: 'Months 7–20 — Construction Phase', level: 'h2',
        content: `During construction, ACC operates as the live management platform for the whole project team.`,
        subsections: [
          {
            heading: 'Key Construction Phase Activities in ACC',
            items: [
              '**Weekly Coordination Meeting** — BIM Manager opens Coordinate in the browser; new clashes are triaged and assigned in real time',
              '**Daily RFI Management** — BuildFirst site manager raises RFIs for unclear details; DPA responds within 10 working days; record in ACC Build',
              '**Submittal Reviews** — BuildFirst submits shop drawings and product data; DPA reviews and returns A/B/C codes in ACC Build Submittals',
              '**Site Inspections** — Site Manager completes a concrete pour inspection form on ACC mobile before each pour; photos attached',
              '**Issue Tracking** — QA inspectors create Issues on site with location pins on ACC Sheets; contractor closes when resolved',
              '**Daily Logs** — BuildFirst site manager completes daily logs on ACC mobile: weather, labour, materials, progress, incidents',
              '**Monthly Client Report** — BIM Manager exports Insights dashboard as PDF: open issues, RFIs, clash trends, schedule status',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Months 22–24 — Handover', level: 'h2',
        content: `With practical completion approaching, the CDE is transitioned from a live management environment to a handover and record environment.`,
        code: {
          label: 'Handover Phase Checklist in ACC',
          lines: [
            'DOCUMENTATION',
            '  ✓ As-built drawings published to Sheets (Rev P1)',
            '  ✓ As-built model uploaded to Handover folder',
            '  ✓ O&M Manuals approved via Submittals',
            '  ✓ Test certificates uploaded to Handover folder',
            '  ✓ Warranties uploaded and linked to Asset records',
            '',
            'ASSETS',
            '  ✓ All HVAC, electrical, plumbing assets recorded',
            '  ✓ Serial numbers, commissioning dates, warranty data complete',
            '  ✓ COBie export reviewed and approved',
            '  ✓ COBie submitted to Client via transmittal (IFI)',
            '',
            'ISSUES',
            '  ✓ Critical snagging Issues resolved (0 open P1)',
            '  ✓ Defects list finalised (P2/P3 issues → defects period)',
            '',
            'ACCESS',
            '  ✓ Handover folder opened to Client and FM team',
            '  ✓ WIP and Shared folders closed to editing',
            '  ✓ FM team trained on ACC document access',
          ],
        },
      },
      {
        id: 's7', heading: 'Lessons from the Dharren Park ACC Project', level: 'h2',
        content: `The Dharren Park project demonstrates the full potential of ACC when used correctly — but it also illustrates where the common failure points lie.`,
        subsections: [
          {
            heading: 'What Worked',
            items: [
              'Setting up Permission Sets at the start of the project meant every new member was onboarded in under 5 minutes',
              'Automatic cloud coordination reduced the time the BIM Manager spent running clashes from half a day per week to 30 minutes of review',
              'ACC mobile for Issues and Forms eliminated the paper snagging sheets that previously had to be re-entered into a spreadsheet',
              'Asset data captured during installation meant COBie was 90% complete before handover preparation began',
              'Insights dashboards gave the client confidence in the project\'s progress without requiring them to understand the detail of ACC',
            ],
          },
          {
            heading: 'What Required Discipline',
            items: [
              'Consistent file naming was enforced from Month 1 — any deviation caused version tracking to fail',
              'The WIP → Shared transition required regular reminders to discipline teams who were used to sharing files informally',
              'Subcontractors required training and support on the ACC mobile app before they used it reliably on site',
              'RFI response times required monitoring — a 3-week backlog developed at Month 14 when the design team was under pressure; the Insights dashboard flagged it early enough to resolve',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'A well-configured ACC setup on Day 1 — folder structure, Permission Sets, custom attributes, naming convention — makes everything that follows easier.',
      'Cloud coordination in ACC Coordinate reduces the BIM Manager\'s weekly coordination overhead from manual Navisworks assembly to browser-based clash review.',
      'The Build module (Issues, RFIs, Submittals, Daily Logs) replaces informal construction management communication with formal, traceable records.',
      'Asset data captured on the ACC mobile app during construction eliminates the scramble to compile COBie data at handover.',
      'ACC Insights dashboards give clients and project managers real-time project health visibility — use them proactively rather than waiting for problems to escalate.',
      'Discipline and consistency in using ACC correctly throughout the project determines whether handover is straightforward or a last-minute fire.',
    ],
    resource: { label: 'ACC Full Project Workflow Reference', type: 'PDF' },
    quiz: { label: 'ACC Capstone Quiz', questions: 10, time: '10 min' },
    prev: { id: 'acc-23', title: 'From BIM 360 to ACC — Understanding the Migration & Key Differences' },
    next: null,
  },

];
