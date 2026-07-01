// ============================================================
// ACC QUIZZES DATA — acc-17 through acc-24
// Merge these entries into your lib/accQuizzesData.js array
// ============================================================

export const accQuizzes_17_24 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-17: Sheets & Drawings — Publishing from Revit
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-17',
    title: 'ACC Sheets & Drawing Publishing',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the key rule distinguishing Sheets from Docs?',
        options: [
          'A drawing is in Docs until formally issued, then published to Sheets as the live construction set',
          'Sheets and Docs store identical unrestricted content',
          'Sheets is only for cost data',
          'Docs is only accessible to the client'
        ],
        answer: 'A drawing is in Docs until formally issued, then published to Sheets as the live construction set'
      },
      {
        type: 'mcq',
        question: 'How are drawings typically published from Revit to ACC Sheets?',
        options: ['Add-Ins tab → ACC → Publish to ACC', 'By emailing PDFs manually', 'Only via the mobile app', 'They cannot be published directly'],
        answer: 'Add-Ins tab → ACC → Publish to ACC'
      },
      {
        type: 'truefalse',
        question: 'When a new revision is published in ACC Sheets, the previous revision becomes Superseded but is retained for record.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'Named groups of drawings in ACC Sheets are called Sheet ___.',
        answer: 'Sets'
      },
      {
        type: 'mcq',
        question: 'What tool in ACC Sheets allows annotating drawings directly in the browser?',
        options: ['Markups', 'Takeoff', 'Insights', 'COBie Export'],
        answer: 'Markups'
      },
      {
        type: 'mcq',
        question: 'What can a markup on a sheet be linked to for formal tracking?',
        options: ['An Issue in Build', 'A Hub setting', 'A Green Area Ratio value', 'A wind comfort score'],
        answer: 'An Issue in Build'
      },
      {
        type: 'truefalse',
        question: 'Issue pins can appear directly on a sheet at the exact location where each issue was created.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is a best practice for maintaining consistency between Revit and ACC Sheets?',
        options: [
          'Maintain the sheet number and revision code in Revit exactly as it appears in the drawing register',
          'Change the sheet number randomly with every publish',
          'Never assign sheet numbers',
          'Publish only from the mobile app'
        ],
        answer: 'Maintain the sheet number and revision code in Revit exactly as it appears in the drawing register'
      },
      {
        type: 'truefalse',
        question: 'Work-in-progress drawings should be published to Sheets so the whole team can review them early.',
        answer: false
      },
      {
        type: 'fillblank',
        question: 'The default Sheets view shows only the ___ revision of each drawing.',
        answer: 'current'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-18: Quality & Safety — Forms, Checklists & Inspection Workflows
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-18',
    title: 'ACC Forms & Inspections',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does ACC Forms primarily replace?',
        options: ['Paper-based inspection checklists', 'The Docs module entirely', 'The Coordinate module', 'Cost budgets'],
        answer: 'Paper-based inspection checklists'
      },
      {
        type: 'mcq',
        question: 'Which question type in a Form template requires the inspector to attach evidence?',
        options: ['Photo', 'Text', 'Number', 'Date/Time'],
        answer: 'Photo'
      },
      {
        type: 'truefalse',
        question: 'Forms cannot be edited after submission, providing an unalterable contemporaneous record.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'When a checklist item is marked "Fail," the inspector can tap "Create ___" directly on that item.',
        answer: 'Issue'
      },
      {
        type: 'mcq',
        question: 'Where are Forms primarily completed on site?',
        options: ['The ACC mobile app', 'Only via fax', 'A printed paper copy only', 'Only in Revit'],
        answer: 'The ACC mobile app'
      },
      {
        type: 'mcq',
        question: 'What compliance standard is mentioned as being satisfied by digital form audit evidence?',
        options: ['ISO 9001', 'ISO 14001 only', 'ISO 45001 exclusively', 'None — digital forms are never valid evidence'],
        answer: 'ISO 9001'
      },
      {
        type: 'truefalse',
        question: 'At practical completion, outstanding failed items from handover checklists become the defects (snagging) list.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which of these is listed as a common safety form template?',
        options: ['Weekly Safety Walk', 'GFA Calculation', 'Wind Comfort Report', 'RFI Ball-in-Court Chart'],
        answer: 'Weekly Safety Walk'
      },
      {
        type: 'mcq',
        question: 'Which question type is used for supervisor or inspector sign-off on a form?',
        options: ['Signature', 'Checkbox', 'Number', 'Text'],
        answer: 'Signature'
      },
      {
        type: 'fillblank',
        question: 'A well-designed form template takes roughly 30 to ___ minutes to create.',
        answer: '60'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-19: Asset Management — Tracking Equipment & COBie Data
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-19',
    title: 'ACC Assets & COBie',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the Asset Management principle stated in the lesson?',
        options: [
          'Capture FM data as equipment is installed during construction, not retrospectively after handover',
          'Only capture FM data after the defects period ends',
          'FM data should never be linked to the BIM model',
          'Asset records should be created only once at project completion'
        ],
        answer: 'Capture FM data as equipment is installed during construction, not retrospectively after handover'
      },
      {
        type: 'mcq',
        question: 'What does linking an Asset record to a BIM model element provide?',
        options: [
          'Spatial and geometric context, combined with FM data, forming the basis of COBie-compliant handover',
          'A discount on the Autodesk subscription',
          'Automatic RFI closure',
          'A wind comfort score'
        ],
        answer: 'Spatial and geometric context, combined with FM data, forming the basis of COBie-compliant handover'
      },
      {
        type: 'truefalse',
        question: 'ACC Assets can export data directly in COBie format.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'COBie stands for Construction Operations Building Information ___.',
        answer: 'Exchange'
      },
      {
        type: 'mcq',
        question: 'Which COBie schema version is described as most common for UK projects?',
        options: ['2.4', '1.0', '5.0', '9.9'],
        answer: '2.4'
      },
      {
        type: 'mcq',
        question: 'What kind of data does an Asset record typically capture?',
        options: [
          'Manufacturer, model, serial number, installation date, warranty expiry, maintenance schedule',
          'Only the room colour scheme',
          'Only the structural load rating',
          'Only the site\'s Green Area Ratio'
        ],
        answer: 'Manufacturer, model, serial number, installation date, warranty expiry, maintenance schedule'
      },
      {
        type: 'truefalse',
        question: 'Asset categories and custom fields should be configured to match the client\'s FM system before construction starts.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Who is typically responsible for capturing HVAC asset data during construction?',
        options: ['The mechanical subcontractor', 'The landscape architect', 'The client\'s legal team', 'The Quantity Surveyor exclusively'],
        answer: 'The mechanical subcontractor'
      },
      {
        type: 'mcq',
        question: 'Where should the Asset register be defined, according to the lesson?',
        options: ['In the BIM Execution Plan before construction starts', 'Only after handover', 'Nowhere — it is not documented', 'In a personal notebook'],
        answer: 'In the BIM Execution Plan before construction starts'
      },
      {
        type: 'fillblank',
        question: 'Incomplete asset records at handover are described as being as problematic as ___ records.',
        answer: 'missing'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-20: Reporting & Insights — Building Project-Level Dashboards
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-20',
    title: 'ACC Insights & Reporting',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does ACC Insights do?',
        options: [
          'Aggregates data from across ACC modules into configurable dashboards and exportable reports',
          'Only tracks weather data',
          'Replaces the Docs module entirely',
          'Only works for Cost data'
        ],
        answer: 'Aggregates data from across ACC modules into configurable dashboards and exportable reports'
      },
      {
        type: 'mcq',
        question: 'Which widget is part of the Project Overview dashboard described in the lesson?',
        options: ['Issue Summary', 'Wind Comfort Category', 'Lawson Criteria Chart', 'GAR Weighting Table'],
        answer: 'Issue Summary'
      },
      {
        type: 'truefalse',
        question: 'A declining clash count over successive coordination runs generally confirms coordination is effective.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'Insights allows scheduling reports to be automatically emailed as a ___ to nominated recipients.',
        answer: 'PDF'
      },
      {
        type: 'mcq',
        question: 'What report view breaks down issues by how long they have been outstanding?',
        options: ['Age Analysis', 'Location Heatmap', 'Clash Trend', 'Cost Report'],
        answer: 'Age Analysis'
      },
      {
        type: 'mcq',
        question: 'What export formats does the lesson mention for Insights reports?',
        options: ['PDF, CSV, and Excel', 'Only handwritten notes', 'Only .exe files', 'Only Revit families'],
        answer: 'PDF, CSV, and Excel'
      },
      {
        type: 'truefalse',
        question: 'Data visibility in Insights is still controlled by module permissions, even though Insights aggregates cross-module data.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What should happen if RFI response time exceeds 14 days, based on the Insights-driven decisions in the lesson?',
        options: [
          'Raise it formally with the lead designer since programme impact is accumulating',
          'Ignore it completely',
          'Immediately terminate the design contract',
          'Delete the RFI'
        ],
        answer: 'Raise it formally with the lead designer since programme impact is accumulating'
      },
      {
        type: 'mcq',
        question: 'What is the purpose of a Custom Dashboard in Insights?',
        options: [
          'To combine selected widgets, filters, and data for a specific audience such as a client monthly report',
          'To permanently delete project data',
          'To replace the Coordinate module',
          'To create new Autodesk IDs'
        ],
        answer: 'To combine selected widgets, filters, and data for a specific audience such as a client monthly report'
      },
      {
        type: 'fillblank',
        question: 'Insights converts gut-feel project management into ___-based project management.',
        answer: 'evidence'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-21: ISO 19650 in ACC — CDE Workflows, Suitability Codes & Compliance
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-21',
    title: 'ACC & ISO 19650 Compliance',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What four CDE states does ISO 19650 require, as implemented in ACC?',
        options: ['WIP, Shared, Published, Archived', 'Open, Closed, Void, Pending', 'Draft, Final, Superseded, Deleted', 'New, Active, Resolved, Closed'],
        answer: 'WIP, Shared, Published, Archived'
      },
      {
        type: 'mcq',
        question: 'In the ISO 19650 file naming example given (DP01-DPA-ZZ-00-DR-A-1001.Rev-A.S2), what does "S2" represent?',
        options: ['A status/suitability code — Suitable for Information', 'The project code', 'The originator code', 'The drawing number'],
        answer: 'A status/suitability code — Suitable for Information'
      },
      {
        type: 'truefalse',
        question: 'ISO 19650 compliance in ACC is automatic and requires no deliberate configuration.',
        answer: false
      },
      {
        type: 'fillblank',
        question: 'Scheduled points in the project at which specified information must be delivered are called Information Delivery ___ (IDMs).',
        answer: 'Milestones'
      },
      {
        type: 'mcq',
        question: 'How are IDM deliveries typically executed in ACC?',
        options: ['Via a formal Transmittal', 'Via an unrecorded phone call', 'Via a private text message', 'They are never executed formally'],
        answer: 'Via a formal Transmittal'
      },
      {
        type: 'mcq',
        question: 'Which of these does the lesson say ACC supports natively for ISO 19650?',
        options: ['Folder-based CDE states, permission controls, version history, transmittal records', 'Automatic suitability code enforcement with zero configuration', 'Automatic BEP writing', 'Automatic COBie schema selection with no review'],
        answer: 'Folder-based CDE states, permission controls, version history, transmittal records'
      },
      {
        type: 'truefalse',
        question: 'The audit trail in ACC (version history, status log, transmittal register) cannot be deleted or modified by project members.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is required in addition to platform capability to achieve ISO 19650 compliance, per the lesson?',
        options: ['Team process discipline', 'Nothing else is needed', 'A separate paid ISO certification button in ACC', 'Disabling all permissions'],
        answer: 'Team process discipline'
      },
      {
        type: 'mcq',
        question: 'What should document the exact implementation of each ISO 19650 requirement in ACC for a specific project?',
        options: ['The BIM Execution Plan', 'A random Slack message', 'The site hoarding sign', 'The Lawson Criteria table'],
        answer: 'The BIM Execution Plan'
      },
      {
        type: 'fillblank',
        question: 'The transmittal issue purpose "IFC" maps to the IDM purpose of Suitable for ___.',
        answer: 'Construction'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-22: Project Handover — As-Built Package, COBie Export & O&M Deliverables
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-22',
    title: 'ACC Project Handover',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What four components make up project handover according to the lesson?',
        options: [
          'Physical building, document package, as-built model, and FM data (COBie)',
          'Only the physical building',
          'Only the RFI log',
          'Only the Cost report'
        ],
        answer: 'Physical building, document package, as-built model, and FM data (COBie)'
      },
      {
        type: 'mcq',
        question: 'What is described as the typical length of the defects period post-practical completion?',
        options: ['12 months', '1 week', '10 years', 'There is no defects period'],
        answer: '12 months'
      },
      {
        type: 'truefalse',
        question: 'As-built drawings should be published to ACC Sheets with an "As-Built" issue purpose and formally transmitted to the client.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'The as-built model should be cleaned of temporary works and ___ not relevant to FM operations.',
        answer: 'hoardings'
      },
      {
        type: 'mcq',
        question: 'What should be verified before the COBie export is delivered to the client?',
        options: [
          'Completeness of each COBie tab (Facility, Floor, Space, Zone, Type, Component, etc.)',
          'Only the file size',
          'Only the export date, nothing else',
          'Nothing — COBie exports never need review'
        ],
        answer: 'Completeness of each COBie tab (Facility, Floor, Space, Zone, Type, Component, etc.)'
      },
      {
        type: 'mcq',
        question: 'What happens to WIP and Shared folder access at practical completion?',
        options: ['Edit access is restricted or removed', 'They are given to the general public', 'They remain fully editable forever', 'They are deleted immediately'],
        answer: 'Edit access is restricted or removed'
      },
      {
        type: 'truefalse',
        question: 'Critical/P1 issues must be resolved before practical completion, per the lesson.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What status should all RFIs be in at practical completion?',
        options: ['Closed or Void', 'Still Open with no plan', 'Deleted permanently', 'Overdue'],
        answer: 'Closed or Void'
      },
      {
        type: 'mcq',
        question: 'Who should be added as project members with View access to the Handover folder?',
        options: ["The client's FM team", 'Random members of the public', "The site security guard's family", 'Nobody — it should remain empty'],
        answer: "The client's FM team"
      },
      {
        type: 'fillblank',
        question: 'The handover package formula given is: As-built documents + As-built model + FM data (COBie) + Warranties + O&M ___.',
        answer: 'Manuals'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-23: BIM 360 to ACC Migration — Planning & Executing
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-23',
    title: 'BIM 360 to ACC Migration',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What was BIM 360, according to the lesson?',
        options: [
          'A family of separate Autodesk products with separate logins, data environments, and billing',
          'A single unified product identical to ACC',
          'A rendering plugin only',
          'A type of clash test'
        ],
        answer: 'A family of separate Autodesk products with separate logins, data environments, and billing'
      },
      {
        type: 'mcq',
        question: 'Which ACC module is the equivalent of BIM 360 Glue?',
        options: ['ACC Coordinate', 'ACC Cost', 'ACC Forms', 'ACC Insights'],
        answer: 'ACC Coordinate'
      },
      {
        type: 'truefalse',
        question: 'ACC Forms and ACC Assets are new modules with no direct equivalent in BIM 360.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'The Hub structure is described as ___ between BIM 360 and ACC — the same Hub now hosts ACC projects.',
        answer: 'unchanged'
      },
      {
        type: 'mcq',
        question: 'What is the first step in the BIM 360 to ACC migration process described in the lesson?',
        options: ['Assess — identify which projects to migrate and prioritise live projects', 'Immediately delete BIM 360 data', 'Skip planning entirely', 'Migrate only completed projects first'],
        answer: 'Assess — identify which projects to migrate and prioritise live projects'
      },
      {
        type: 'mcq',
        question: 'What does the lesson recommend if a live BIM 360 project cannot be migrated mid-construction?',
        options: [
          'Complete it in BIM 360 and start the next project in ACC',
          'Immediately delete all its data',
          'Force a migration regardless of risk',
          'Duplicate it in both platforms permanently'
        ],
        answer: 'Complete it in BIM 360 and start the next project in ACC'
      },
      {
        type: 'truefalse',
        question: 'The Docs module, folder permissions, and project member management are described as largely unchanged from BIM 360.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is the lesson\'s best practice recommendation for new projects?',
        options: [
          'Start every new project in ACC from day one',
          'Always start new projects in BIM 360',
          'Alternate randomly between BIM 360 and ACC',
          'Avoid using either platform'
        ],
        answer: 'Start every new project in ACC from day one'
      },
      {
        type: 'mcq',
        question: 'What is true about BIM 360\'s future according to the lesson\'s honest assessment?',
        options: [
          'It receives no new feature development and will eventually be sunset',
          'It will replace ACC entirely',
          'It receives more investment than ACC now',
          'It has already been permanently deleted'
        ],
        answer: 'It receives no new feature development and will eventually be sunset'
      },
      {
        type: 'fillblank',
        question: 'Historical BIM 360 data is not automatically ___ when a project moves to ACC.',
        answer: 'deleted'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-24: Capstone — End-to-End ACC Workflow
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-24',
    title: 'ACC Capstone — Dharren Park',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'How many storeys is the Dharren Park Phase 1 capstone building?',
        options: ['Nine', 'Two', 'Fifty', 'One'],
        answer: 'Nine'
      },
      {
        type: 'mcq',
        question: 'What is the overall programme duration for the capstone project?',
        options: ['24 months', '3 months', '10 years', '1 week'],
        answer: '24 months'
      },
      {
        type: 'truefalse',
        question: 'Permission Sets configured at project start meant every new member could be onboarded in under 5 minutes.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'COBie delivery is required at handover per the ___ Government standard referenced in the capstone.',
        answer: 'UK'
      },
      {
        type: 'mcq',
        question: 'When are Build and Forms modules activated in the capstone timeline?',
        options: ['At construction mobilisation (Month 7)', 'On Day 1 only', 'They are never activated', 'Only after handover'],
        answer: 'At construction mobilisation (Month 7)'
      },
      {
        type: 'mcq',
        question: 'What issue purpose is used when tender drawings are published to Sheets in the capstone?',
        options: ['IFC — Issued for Construction', 'IFI — Issued for Information only', 'IFA — Issued for Approval only', 'None — no issue purpose is used'],
        answer: 'IFC — Issued for Construction'
      },
      {
        type: 'truefalse',
        question: 'Automatic cloud coordination reduced the BIM Manager\'s weekly clash-running time from half a day to about 30 minutes of review, per the capstone reflection.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What issue developed at Month 14 that the Insights dashboard helped flag early?',
        options: ['A 3-week RFI response backlog', 'A missing site boundary', 'A wind comfort failure', 'A COBie schema mismatch'],
        answer: 'A 3-week RFI response backlog'
      },
      {
        type: 'mcq',
        question: 'What must be true of critical (P1) issues at the handover stage in the capstone checklist?',
        options: ['Zero open P1 issues', 'At least 10 open P1 issues', 'They should be ignored', 'They should be reclassified as RFIs'],
        answer: 'Zero open P1 issues'
      },
      {
        type: 'fillblank',
        question: 'The capstone states that asset data captured during installation meant COBie was ___% complete before handover preparation began.',
        answer: '90'
      }
    ]
  }

]
