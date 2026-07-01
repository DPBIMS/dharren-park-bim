// ============================================================
// ACC QUIZZES DATA — acc-9 through acc-16
// Merge these entries into your lib/accQuizzesData.js array
// ============================================================

export const accQuizzes_9_16 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-9: Setting Up Coordination Spaces in ACC Coordinate
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-9',
    title: 'Setting Up Coordination Spaces',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is a Coordination Space in ACC?',
        options: [
          'The container within which model coordination happens, defining included models and clash tests',
          'A single RFI record',
          'A type of daily log',
          'A budget line item'
        ],
        answer: 'The container within which model coordination happens, defining included models and clash tests'
      },
      {
        type: 'truefalse',
        question: 'When a model in Docs is updated, the Coordination Space automatically uses the new version in the next coordination run.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What are Model Packages used for in ACC Coordinate?',
        options: ['Grouping models by discipline so clash tests run package-vs-package', 'Storing COBie exports', 'Tracking daily logs', 'Managing RFI response times'],
        answer: 'Grouping models by discipline so clash tests run package-vs-package'
      },
      {
        type: 'fillblank',
        question: 'For best coordination quality, the lesson recommends using RVT or ___ formats over DWG.',
        answer: 'IFC'
      },
      {
        type: 'mcq',
        question: 'What does enabling "Auto-Update" on a model do in a Coordination Space?',
        options: [
          'Uploading a new version to Docs automatically triggers reprocessing in the Coordination Space',
          'It deletes the previous model version permanently',
          'It disables clash detection entirely',
          'It converts the model to a PDF'
        ],
        answer: 'Uploading a new version to Docs automatically triggers reprocessing in the Coordination Space'
      },
      {
        type: 'truefalse',
        question: 'Only users with Coordinate Admin access can create and manage Coordination Spaces.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which access level is typically sufficient for site managers and contractors reviewing clash results?',
        options: ['View', 'Admin only', 'No access', 'Owner'],
        answer: 'View'
      },
      {
        type: 'mcq',
        question: 'What is the first step in the weekly coordination cycle described in the lesson?',
        options: ['Model Update — each discipline uploads updated model to Docs [Shared]', 'Coordination Report', 'Clash Resolution', 'Clash Review Meeting'],
        answer: 'Model Update — each discipline uploads updated model to Docs [Shared]'
      },
      {
        type: 'truefalse',
        question: 'DWG files carry as much property data as RVT or IFC files for coordination purposes.',
        answer: false
      },
      {
        type: 'fillblank',
        question: 'Model reprocessing in a Coordination Space typically takes 5 to ___ minutes depending on model size.',
        answer: '30'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-10: Cloud Clash Detection: Running Tests & Understanding Clash Types
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-10',
    title: 'Cloud Clash Detection in ACC',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'How does ACC Coordinate\'s clash detection differ from Navisworks, according to the lesson?',
        options: [
          'ACC runs tests automatically in the cloud; Navisworks requires manual local assembly',
          'ACC requires a desktop install; Navisworks does not',
          'They are functionally identical in every respect',
          'ACC cannot detect any clashes at all'
        ],
        answer: 'ACC runs tests automatically in the cloud; Navisworks requires manual local assembly'
      },
      {
        type: 'mcq',
        question: 'Which of these is NOT one of the four clash types in ACC Coordinate?',
        options: ['Hard Clash', 'Clearance Clash', 'Duplicate', 'Soft Cost Clash'],
        answer: 'Soft Cost Clash'
      },
      {
        type: 'truefalse',
        question: 'A Clearance Clash flags objects that are not touching but are closer than a defined distance.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'The default tolerance for a standard Hard Clash test is typically ___ mm (any intersection is flagged).',
        answer: '0'
      },
      {
        type: 'mcq',
        question: 'What is a Duplicate clash used to detect?',
        options: [
          'The same object modelled in two different disciplines',
          'A missing RFI response',
          'An overdue submittal',
          'A budget overrun'
        ],
        answer: 'The same object modelled in two different disciplines'
      },
      {
        type: 'mcq',
        question: 'According to the lesson, what is Navisworks better suited for compared to ACC Coordinate?',
        options: ['Highly granular manual control, TimeLiner 4D, and Animator workflows', 'Automatic cloud-based continuous coordination', 'Mobile-only access', 'COBie export only'],
        answer: 'Highly granular manual control, TimeLiner 4D, and Animator workflows'
      },
      {
        type: 'truefalse',
        question: 'A rising clash count over successive runs generally indicates coordination is falling behind schedule.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What colour typically represents a "Resolved" clash status in the ACC viewer?',
        options: ['Green', 'Red', 'Orange', 'Grey'],
        answer: 'Green'
      },
      {
        type: 'fillblank',
        question: 'A typical clearance tolerance for maintenance access around MEP services is around ___ mm.',
        answer: '50'
      },
      {
        type: 'mcq',
        question: 'What does the Run History panel in a Coordination Space allow you to do?',
        options: [
          'Compare clash counts between model versions to track coordination progress over time',
          'Delete all previous clash tests permanently',
          'Change the project timezone',
          'Approve submittals'
        ],
        answer: 'Compare clash counts between model versions to track coordination progress over time'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-11: Clash Review, Assignment & Resolution Workflow
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-11',
    title: 'Clash Review & Resolution Workflow',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the first step in the clash review cycle described in the lesson?',
        options: ['Triage', 'Verify', 'Report', 'Assign'],
        answer: 'Triage'
      },
      {
        type: 'mcq',
        question: 'Which clash status indicates a clash has been reviewed and agreed as acceptable, e.g., within tolerance or by design?',
        options: ['Approved', 'New', 'Pending', 'Void'],
        answer: 'Approved'
      },
      {
        type: 'truefalse',
        question: 'Not every detected clash needs resolution — but every detected clash needs a status decision, per the lesson\'s triage rule.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'The triage rule recommends a status decision be made within ___ hours of a clash run.',
        answer: '48'
      },
      {
        type: 'mcq',
        question: 'What can be created directly from a clash detail panel for complex coordination problems?',
        options: ['A linked Issue in the Build module', 'A new Hub', 'A COBie export', 'A daily log'],
        answer: 'A linked Issue in the Build module'
      },
      {
        type: 'mcq',
        question: 'When is a clash considered truly resolved?',
        options: [
          'When the updated model is uploaded, reprocessed, and the clash no longer appears in test results',
          'As soon as someone comments "fixed" on it',
          'When the due date passes, regardless of upload status',
          'When the clash is simply deleted from the list'
        ],
        answer: 'When the updated model is uploaded, reprocessed, and the clash no longer appears in test results'
      },
      {
        type: 'truefalse',
        question: 'ACC Coordinate is designed to be used directly in coordination meetings via a shared screen.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What are the six clash statuses listed in the lesson?',
        options: [
          'New, Active, Pending, Approved, Resolved, Closed',
          'Open, Shut, Waiting, Denied, Complete, Cancelled',
          'Draft, Shared, Published, Archived, Void, Error',
          'Low, Medium, High, Critical, Blocker, Trivial'
        ],
        answer: 'New, Active, Pending, Approved, Resolved, Closed'
      },
      {
        type: 'mcq',
        question: 'Who confirms that a Resolved clash is correct before it is set to Closed?',
        options: ['The BIM Manager', 'Only the client', 'Nobody — it closes automatically', 'The main contractor\'s accountant'],
        answer: 'The BIM Manager'
      },
      {
        type: 'fillblank',
        question: 'When assigning a clash, you set a responsible team member, a due date, and a ___ explaining what needs to be resolved.',
        answer: 'comment'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-12: ACC Build Issues — Creating, Assigning & Closing
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-12',
    title: 'ACC Build Issues',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is an Issue in ACC Build?',
        options: [
          'A formal record of anything on a construction project requiring attention, action, or decision',
          'A type of budget line',
          'A COBie export field',
          'A federated model'
        ],
        answer: 'A formal record of anything on a construction project requiring attention, action, or decision'
      },
      {
        type: 'truefalse',
        question: 'Issues can only be created from the desktop browser, never from the mobile app.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What two-level classification system does ACC Build use to organise Issues?',
        options: ['Type and Subtype', 'Colour and Size', 'Priority and Cost', 'Company and Country'],
        answer: 'Type and Subtype'
      },
      {
        type: 'fillblank',
        question: 'The Issue status workflow is Open → In Review → ___ (or Void).',
        answer: 'Closed'
      },
      {
        type: 'mcq',
        question: 'Who is able to close or void an Issue according to the lesson?',
        options: ['Only the issue creator or a Project Admin', 'Only the assignee', 'Any project member', 'Only the client'],
        answer: 'Only the issue creator or a Project Admin'
      },
      {
        type: 'mcq',
        question: 'Where can an issue be pinned for precise location according to the lesson?',
        options: ['A Sheet (2D drawing), a 3D model, or a Photo', 'Only in a spreadsheet', 'Only via email', 'Nowhere — issues have no location field'],
        answer: 'A Sheet (2D drawing), a 3D model, or a Photo'
      },
      {
        type: 'truefalse',
        question: 'Closed issues can be freely edited or re-opened at any time by any team member.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is the recommended way to write an Issue title, per the lesson\'s example?',
        options: [
          '"Level 3 — Column C4 alignment off by 35mm" rather than "Column issue"',
          '"Column issue" is preferred over specific titles',
          'Titles should always be left blank',
          'Titles should only contain a date'
        ],
        answer: '"Level 3 — Column C4 alignment off by 35mm" rather than "Column issue"'
      },
      {
        type: 'fillblank',
        question: 'The Issue principle states: every site observation that requires action must be an Issue — if it isn\'t recorded, it didn\'t ___.',
        answer: 'happen'
      },
      {
        type: 'mcq',
        question: 'What must an assignee do before an issue is marked Closed?',
        options: [
          'Mark it "In Review" with a comment and photo of the resolution for the creator to verify',
          'Nothing — assignees can close their own issues directly',
          'Delete the issue',
          'Change the issue type to Safety'
        ],
        answer: 'Mark it "In Review" with a comment and photo of the resolution for the creator to verify'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-13: RFI Workflow: Ball-in-Court Process & Status Tracking
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-13',
    title: 'ACC RFI Workflow',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is an RFI in ACC Build?',
        options: [
          'A formal written query from the contractor to the design team seeking clarification',
          'A daily site log',
          'A type of clash test',
          'A budget line item'
        ],
        answer: 'A formal written query from the contractor to the design team seeking clarification'
      },
      {
        type: 'truefalse',
        question: 'Verbal responses to RFIs are acceptable under most construction contracts.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What does the "ball-in-court" system track in ACC RFIs?',
        options: [
          'Exactly who currently holds responsibility for the next action',
          'The current weather on site',
          'The Green Area Ratio of the site',
          'The number of clash tests configured'
        ],
        answer: 'Exactly who currently holds responsibility for the next action'
      },
      {
        type: 'fillblank',
        question: 'RFI response times are usually contractually mandated — typically 7 to ___ working days.',
        answer: '14'
      },
      {
        type: 'mcq',
        question: 'Which response type indicates the RFI answer should be treated as record only, with no action required?',
        options: ['For Record Only', 'Revise and Resubmit', 'Accepted as Noted', 'Void'],
        answer: 'For Record Only'
      },
      {
        type: 'mcq',
        question: 'What are the RFI statuses listed in the lesson?',
        options: [
          'Open, In Review, Answered, Closed, Void',
          'New, Active, Resolved, Approved',
          'Draft, Shared, Published, Archived',
          'Pass, Fail, Retest'
        ],
        answer: 'Open, In Review, Answered, Closed, Void'
      },
      {
        type: 'truefalse',
        question: 'Overdue RFIs (past the Required Response Date) are highlighted in the RFI list with a red indicator.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What should happen if an RFI response results in a drawing revision?',
        options: [
          'A transmittal should be issued for the revised drawing separately',
          'Nothing further is needed',
          'The RFI should be deleted',
          'The revision should only be communicated verbally'
        ],
        answer: 'A transmittal should be issued for the revised drawing separately'
      },
      {
        type: 'fillblank',
        question: 'A large number of Open or Overdue RFIs is described as a ___ risk indicator.',
        answer: 'programme'
      },
      {
        type: 'mcq',
        question: 'What is described as a common RFI mistake?',
        options: [
          'Answering RFIs verbally on site without creating a formal ACC record',
          'Linking RFIs to relevant drawings',
          'Using specific, detailed RFI subjects',
          'Setting a required response date'
        ],
        answer: 'Answering RFIs verbally on site without creating a formal ACC record'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-14: Submittals, Meetings & Daily Logs in ACC Build
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-14',
    title: 'Submittals, Meetings & Daily Logs',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is a Submittal in ACC Build?',
        options: [
          'A document or sample submitted by the contractor to the design team for approval before work proceeds',
          'A daily weather report',
          'A type of clash test',
          'A federated model export'
        ],
        answer: 'A document or sample submitted by the contractor to the design team for approval before work proceeds'
      },
      {
        type: 'mcq',
        question: 'What does review code "C" mean in the ACC submittal workflow described in the lesson?',
        options: ['Revise and Resubmit', 'Approved', 'For Information Only', 'Void'],
        answer: 'Revise and Resubmit'
      },
      {
        type: 'truefalse',
        question: 'Open action items from meetings automatically appear at the top of the next meeting of the same series.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'Daily Logs are also called Site Diaries or Daily ___.',
        answer: 'Journals'
      },
      {
        type: 'mcq',
        question: 'Why does the lesson emphasize completing Daily Logs on the same day rather than retrospectively?',
        options: [
          'A retrospective log written a week later is often inadmissible in a dispute',
          'ACC deletes logs older than a day automatically',
          'It has no impact on legal admissibility',
          'Retrospective logs are always preferred by courts'
        ],
        answer: 'A retrospective log written a week later is often inadmissible in a dispute'
      },
      {
        type: 'mcq',
        question: 'Which of these is NOT listed as a component of a Daily Log?',
        options: ['GFA target', 'Weather', 'Labour', 'Materials Delivered'],
        answer: 'GFA target'
      },
      {
        type: 'truefalse',
        question: 'Once a Daily Log is submitted in ACC, it is timestamped and locked against further editing.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What review code means the contractor may proceed subject to the design team\'s marked-up comments?',
        options: ['B — Approved as Noted', 'A — Approved', 'C — Revise and Resubmit', 'D — For Information Only'],
        answer: 'B — Approved as Noted'
      },
      {
        type: 'mcq',
        question: 'What does an Action Item in a Meeting record consist of?',
        options: ['What, who, and by when', 'Only a date', 'Only a signature', 'A COBie tab'],
        answer: 'What, who, and by when'
      },
      {
        type: 'fillblank',
        question: 'At the end of the project, O&M ___ are also managed as submittals.',
        answer: 'Manuals'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-15: ACC Cost Management: Budgets, Contracts & Change Orders
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-15',
    title: 'ACC Cost Management',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the full cost lifecycle described in ACC Cost Management?',
        options: [
          'Budget → Contract Sum → Change Orders → Revised Contract Sum → Final Account',
          'Design → Coordination → Construction only',
          'WIP → Shared → Published → Archived',
          'Open → Active → Closed'
        ],
        answer: 'Budget → Contract Sum → Change Orders → Revised Contract Sum → Final Account'
      },
      {
        type: 'mcq',
        question: 'What is a Change Event, as distinct from a Change Order?',
        options: [
          'Any event that may affect project cost, recorded before it becomes a formal, signed change',
          'The same thing as a Change Order',
          'A type of clash test',
          'A safety inspection form'
        ],
        answer: 'Any event that may affect project cost, recorded before it becomes a formal, signed change'
      },
      {
        type: 'truefalse',
        question: 'Approved Change Orders automatically update the Contract Sum in ACC.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'The ACC ___ module extracts quantities from 2D drawings and 3D models, feeding directly into Cost.',
        answer: 'Takeoff'
      },
      {
        type: 'mcq',
        question: 'What does EFC stand for in an ACC cost report?',
        options: ['Estimated Final Cost', 'Extra Fee Contract', 'External Finance Charge', 'Emergency Funding Code'],
        answer: 'Estimated Final Cost'
      },
      {
        type: 'mcq',
        question: 'What does a negative Budget Variance mean?',
        options: ['The project is over budget', 'The project is under budget', 'The budget has not been set', 'There is no meaning attached to this figure'],
        answer: 'The project is over budget'
      },
      {
        type: 'truefalse',
        question: 'The connection between BIM model changes and cost forecasting is described as the core promise of 5D BIM.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What should BIM practitioners do when a design change occurs, according to the lesson?',
        options: [
          'Notify the QS team before changes are issued, not after construction has started',
          'Never inform the QS team of any design changes',
          'Wait until practical completion to report all changes at once',
          'Only report changes if asked directly by the client'
        ],
        answer: 'Notify the QS team before changes are issued, not after construction has started'
      },
      {
        type: 'fillblank',
        question: 'Contingency and provisional sums are added to the budget as separate line ___.',
        answer: 'items'
      },
      {
        type: 'mcq',
        question: 'Which of these is part of the Cost Report structure described in the lesson?',
        options: ['Approved Budget, Current Contract Sum, EFC, Committed Cost, Actual Cost', 'Sun Hours, Wind Comfort, Noise dB', 'WIP, Shared, Published, Archived', 'New, Active, Resolved, Closed'],
        answer: 'Approved Budget, Current Contract Sum, EFC, Committed Cost, Actual Cost'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-16: ACC Schedule: 4D Linking & Progress Tracking
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-16',
    title: 'ACC Schedule & 4D BIM',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the 4D BIM concept described in the lesson?',
        options: [
          '3D Model + Time (Programme) = seeing what should be built when, compared to what was actually built',
          'A four-dimensional rendering engine',
          'A COBie export format',
          'A type of clash tolerance'
        ],
        answer: '3D Model + Time (Programme) = seeing what should be built when, compared to what was actually built'
      },
      {
        type: 'mcq',
        question: 'Which programme formats can be imported into ACC Schedule?',
        options: ['Primavera P6 (XER), MS Project (MPP/XML), or CSV', 'Only handwritten notes', 'Only PDF', 'Only email attachments'],
        answer: 'Primavera P6 (XER), MS Project (MPP/XML), or CSV'
      },
      {
        type: 'truefalse',
        question: 'The Baseline is the original approved programme dates against which progress is measured.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'ACC calculates the Schedule Performance Index, abbreviated ___.',
        answer: 'SPI'
      },
      {
        type: 'mcq',
        question: 'What does an SPI value less than 1.0 indicate?',
        options: ['The project is behind schedule', 'The project is ahead of schedule', 'The budget is over', 'The RFI backlog is clear'],
        answer: 'The project is behind schedule'
      },
      {
        type: 'mcq',
        question: 'How are programme activities connected to the BIM model for 4D simulation?',
        options: [
          'By linking activities to model elements in the Coordinate module',
          'By re-typing the schedule into Revit manually',
          'They cannot be linked at all',
          'By exporting to a spreadsheet only'
        ],
        answer: 'By linking activities to model elements in the Coordinate module'
      },
      {
        type: 'truefalse',
        question: 'The 4D view can be exported as a video for client presentations or public consultation.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'In the 4D view, what colour typically represents an on-time element?',
        options: ['Green', 'Red', 'Purple', 'Black'],
        answer: 'Green'
      },
      {
        type: 'mcq',
        question: 'What is recommended regarding which activities to link to model elements?',
        options: [
          'Focus on major milestones and trade packages rather than every activity',
          'Link every single activity no matter how minor',
          'Never link any activities to the model',
          'Only link activities related to Cost'
        ],
        answer: 'Focus on major milestones and trade packages rather than every activity'
      },
      {
        type: 'fillblank',
        question: 'Progress updates are typically entered ___ by the site manager or programme manager.',
        answer: 'weekly'
      }
    ]
  }

]
