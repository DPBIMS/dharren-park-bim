// ============================================================
// ACC QUIZZES DATA — acc-1 through acc-8
// Merge these entries into your lib/accQuizzesData.js array
// ============================================================

export const accQuizzes_1_8 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-1: What is Autodesk Construction Cloud
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-1',
    title: 'What is Autodesk Construction Cloud',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is Autodesk Construction Cloud (ACC) at its core?',
        options: [
          'A unified, cloud-based platform connecting design, coordination, and construction under one shared data environment',
          'A single desktop application for drafting only',
          'A structural analysis calculator',
          'A rendering engine only'
        ],
        answer: 'A unified, cloud-based platform connecting design, coordination, and construction under one shared data environment'
      },
      {
        type: 'truefalse',
        question: 'ACC Docs is specifically designed to function as an ISO 19650-compliant CDE.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which ACC module functions as the CDE document management layer?',
        options: ['Docs', 'Cost', 'Schedule', 'Insights'],
        answer: 'Docs'
      },
      {
        type: 'fillblank',
        question: 'ACC evolved from Autodesk\'s earlier ___ 360 family of products.',
        answer: 'BIM'
      },
      {
        type: 'mcq',
        question: 'Which module is used for clash detection and model coordination in ACC?',
        options: ['Coordinate', 'Sheets', 'Forms', 'Assets'],
        answer: 'Coordinate'
      },
      {
        type: 'truefalse',
        question: 'A Project Administrator manages only a single project, while a Hub Administrator manages all projects and Hub settings.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which of these is described as ACC\'s key differentiator versus other construction platforms?',
        options: [
          'Deep native integration with Autodesk authoring tools like Revit',
          'It is the only platform that supports PDF files',
          'It does not require any internet connection',
          'It only works with AutoCAD'
        ],
        answer: 'Deep native integration with Autodesk authoring tools like Revit'
      },
      {
        type: 'mcq',
        question: 'Which role would typically use the ACC Cost module for budgets and change orders?',
        options: ['Quantity Surveyor / Cost Manager', 'Facilities Manager', 'Landscape Architect', 'Site Security Guard'],
        answer: 'Quantity Surveyor / Cost Manager'
      },
      {
        type: 'truefalse',
        question: 'ACC Build covers Issues, RFIs, Submittals, Meetings, and Daily Logs.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'The core CDE principle stated in the lesson is: one source of ___ for all project information.',
        answer: 'truth'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-2: Setting Up an ACC Account, Hub & Project
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-2',
    title: 'ACC Account, Hub & Project Setup',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is a Hub in ACC?',
        options: [
          'The organisation\'s top-level Autodesk workspace containing all projects',
          'A single clash test',
          'A type of file format',
          'An individual drawing sheet'
        ],
        answer: 'The organisation\'s top-level Autodesk workspace containing all projects'
      },
      {
        type: 'truefalse',
        question: 'ACC licensing is project-based and seat-based, differing from the AEC Collection desktop tool licensing model.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which of the following is NOT part of ACC Standard licensing according to the lesson?',
        options: ['Docs', 'Build', 'Cost', 'Coordinate'],
        answer: 'Cost'
      },
      {
        type: 'fillblank',
        question: 'ACC Hubs and projects are managed at ___.autodesk.com.',
        answer: 'acc'
      },
      {
        type: 'mcq',
        question: 'What is a key benefit of creating a new project from a Project Template?',
        options: [
          'It automatically inherits folder structure, permission presets, and activated modules',
          'It removes the need for a Hub',
          'It disables all module access by default',
          'It requires no project name'
        ],
        answer: 'It automatically inherits folder structure, permission presets, and activated modules'
      },
      {
        type: 'truefalse',
        question: 'A template automatically updates every existing project created from it whenever the template changes.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which project setting is described as difficult to change once data is already in the project?',
        options: ['Project name, type, and timezone', 'The colour of the Docs icon', 'The number of team lunches', 'The browser used to log in'],
        answer: 'Project name, type, and timezone'
      },
      {
        type: 'mcq',
        question: 'When should the Coordinate module typically be activated according to the recommended sequencing?',
        options: ['At design start, when first models are ready for coordination', 'Only after project handover', 'Before the project is created', 'Never — it activates automatically'],
        answer: 'At design start, when first models are ready for coordination'
      },
      {
        type: 'truefalse',
        question: 'The ACC mobile app should be downloaded and tested before the first site visit.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'The person who creates an ACC project is automatically the first Project ___.',
        answer: 'Administrator'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-3: Understanding the ACC Interface
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-3',
    title: 'The ACC Interface',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does the ACC Home screen show when you first sign in?',
        options: ['A project dashboard showing all your projects across Hubs', 'Only the Coordinate module', 'A blank Revit template', 'Only the Cost report'],
        answer: 'A project dashboard showing all your projects across Hubs'
      },
      {
        type: 'mcq',
        question: 'Where is the primary module navigation located once inside a project?',
        options: ['The left sidebar', 'The bottom footer', 'A pop-up window only', 'It does not exist'],
        answer: 'The left sidebar'
      },
      {
        type: 'truefalse',
        question: 'ACC has three layers of role definition: Hub Role, Project Role, and Module Permission.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'The access principle from the lesson states permission is ___ — you see what you are given access to, nothing more.',
        answer: 'additive'
      },
      {
        type: 'mcq',
        question: 'Which of these is part of the Global Toolbar in ACC?',
        options: ['Notifications, Search, Help, Profile', 'Only the Coordinate module', 'A dedicated Revit ribbon', 'The COBie export button only'],
        answer: 'Notifications, Search, Help, Profile'
      },
      {
        type: 'mcq',
        question: 'A Project Administrator can see and manage all modules and documents regardless of what?',
        options: ['Folder permissions', 'The weather', 'The Hub name', 'The project timezone'],
        answer: 'Folder permissions'
      },
      {
        type: 'truefalse',
        question: 'The ACC mobile app only supports viewing documents and cannot be used to respond to issues or RFIs.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'In the Docs module interface, what does the left panel typically show?',
        options: ['The folder tree', 'The Cost budget report', 'The RFI ball-in-court chart', 'The Schedule Gantt chart'],
        answer: 'The folder tree'
      },
      {
        type: 'mcq',
        question: 'What can be customised in the Docs main panel to control which metadata is shown?',
        options: ['Column controls', 'The compass rose', 'The View Cube', 'The Lawson Criteria'],
        answer: 'Column controls'
      },
      {
        type: 'fillblank',
        question: 'The ACC mobile app is available on iOS and ___.',
        answer: 'Android'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-4: ACC Docs — Uploading & Organising Project Documents
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-4',
    title: 'ACC Docs Upload & Organisation',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the individual file size limit mentioned for uploads in ACC Docs?',
        options: ['Up to 20 GB', 'Up to 2 MB', 'Up to 500 KB', 'There is no limit at all'],
        answer: 'Up to 20 GB'
      },
      {
        type: 'truefalse',
        question: 'Docs and Sheets serve the same purpose and store identical content.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which of the following is a valid CDE information flow described in the lesson?',
        options: ['WIP (restricted) → Shared (controlled) → Published (all access)', 'Published → Shared → WIP', 'Archived → WIP → Shared', 'There is no defined flow'],
        answer: 'WIP (restricted) → Shared (controlled) → Published (all access)'
      },
      {
        type: 'fillblank',
        question: 'RVT files require a Revit-licensed viewer connection for full model ___.',
        answer: 'properties'
      },
      {
        type: 'mcq',
        question: 'Which is an example of a custom document status value mentioned in the lesson?',
        options: ['Approved for Construction (AFC)', 'Wind Comfort Category A', 'Lawson Criteria B', 'GFA Target'],
        answer: 'Approved for Construction (AFC)'
      },
      {
        type: 'mcq',
        question: 'Which upload method allows syncing files directly from Revit or AutoCAD to a connected folder?',
        options: ['Connector upload', 'Bulk upload only', 'Drag and drop only', 'Manual retyping'],
        answer: 'Connector upload'
      },
      {
        type: 'truefalse',
        question: 'Custom attributes in ACC Docs can be made mandatory at upload to ensure documents have the correct metadata.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which file types are described as viewable inline in the ACC browser viewer?',
        options: ['DWG, PDF, RVT, IFC among others', 'Only .exe files', 'Only .zip archives', 'None — nothing is viewable without downloading'],
        answer: 'DWG, PDF, RVT, IFC among others'
      },
      {
        type: 'mcq',
        question: 'What can be used to find a specific document quickly across all accessible folders?',
        options: ['The search bar within Docs', 'Deleting all folders', 'Turning off notifications', 'The Lawson Criteria'],
        answer: 'The search bar within Docs'
      },
      {
        type: 'fillblank',
        question: 'A "Superseded" status marks a document as replaced by a newer ___.',
        answer: 'revision'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-5: File Versioning, Revisions & Superseded Documents
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-5',
    title: 'ACC Versioning & Revisions',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the key difference between a version and a revision in ACC Docs?',
        options: [
          'Version is automatic on every upload; revision is a formal, deliberate document control step',
          'They are exactly the same thing',
          'Revision is automatic; version is manual',
          'Neither is tracked by ACC'
        ],
        answer: 'Version is automatic on every upload; revision is a formal, deliberate document control step'
      },
      {
        type: 'truefalse',
        question: 'Uploading a file with a different file name to the same folder is recognised by ACC as a new version of the existing document.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is retained in ACC when a new version of a document is uploaded?',
        options: ['Previous versions, retained in the version history', 'Nothing — old versions are deleted immediately', 'Only the file name', 'Only the folder location'],
        answer: 'Previous versions, retained in the version history'
      },
      {
        type: 'fillblank',
        question: 'Under the ISO 19650-aligned suitability scheme mentioned, S0 represents work in progress and S3 represents suitable for ___.',
        answer: 'construction'
      },
      {
        type: 'mcq',
        question: 'What does "Superseded" status mean for a document in ACC Docs?',
        options: [
          'A newer revision exists; the document is retained for record but should not be used',
          'The document has been permanently deleted',
          'The document has never been uploaded',
          'The document is the current, active version'
        ],
        answer: 'A newer revision exists; the document is retained for record but should not be used'
      },
      {
        type: 'truefalse',
        question: 'The default Docs view filters to show only current, non-superseded documents.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What information does the Version History panel show for each version?',
        options: ['Version number, date/time uploaded, uploaded by, file size, status', 'Only the file colour', 'Only the number of clashes', 'Nothing — it is a blank record'],
        answer: 'Version number, date/time uploaded, uploaded by, file size, status'
      },
      {
        type: 'mcq',
        question: 'What is described as a common versioning mistake?',
        options: ['Uploading a new version with a different file name', 'Reviewing version history regularly', 'Setting superseded status correctly', 'Using a consistent naming convention'],
        answer: 'Uploading a new version with a different file name'
      },
      {
        type: 'truefalse',
        question: 'Superseded documents can be freely deleted by any project member without restriction.',
        answer: false
      },
      {
        type: 'fillblank',
        question: 'Claims and disputes on construction projects frequently hinge on whether the correct ___ was issued.',
        answer: 'revision'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-6: Permissions, Folder Structure & the CDE in Practice
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-6',
    title: 'ACC Docs Permissions & the CDE',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which permission level in ACC Docs allows uploading new versions and editing metadata?',
        options: ['Edit', 'View only', 'None', 'Guest'],
        answer: 'Edit'
      },
      {
        type: 'truefalse',
        question: 'Permission inheritance means a parent folder\'s permission applies to all subfolders by default unless overridden.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'According to the CDE Access Rule in the lesson, who should have access to WIP folders?',
        options: ['Originating discipline only', 'All consultants', 'All project members including the contractor', 'The general public'],
        answer: 'Originating discipline only'
      },
      {
        type: 'fillblank',
        question: 'The four CDE states covered are WIP, Shared, Published, and ___.',
        answer: 'Archived'
      },
      {
        type: 'mcq',
        question: 'What is a Permission Set in ACC?',
        options: [
          'A named bundle of folder-level access rules that can be assigned to a member or company',
          'A type of clash test',
          'A COBie export format',
          'A single drawing revision'
        ],
        answer: 'A named bundle of folder-level access rules that can be assigned to a member or company'
      },
      {
        type: 'truefalse',
        question: 'The lesson recommends running a permissions audit every 4-8 weeks on a large project.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is described as a common CDE configuration mistake?',
        options: [
          'Giving everyone Edit access to all folders',
          'Restricting WIP folders to the originating team',
          'Running regular permission audits',
          'Using Permission Sets for onboarding'
        ],
        answer: 'Giving everyone Edit access to all folders'
      },
      {
        type: 'mcq',
        question: 'Skipping which CDE state means clashes are discovered after publication rather than before?',
        options: ['Shared', 'WIP', 'Archived', 'None — this cannot happen'],
        answer: 'Shared'
      },
      {
        type: 'truefalse',
        question: 'Manage-level permission allows a user to create subfolders and manage permissions, in addition to Edit-level rights.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'In the worked example, once the design team signs off Rev B, the BIM Manager publishes it with status Approved for ___.',
        answer: 'Construction'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-7: Transmittals & the Formal Issue Process
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-7',
    title: 'ACC Transmittals & Formal Issue',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does a transmittal formally record?',
        options: [
          'Which documents, at which revision, were sent to which recipients, for what purpose, on what date',
          'Only the file size of a document',
          'The internal Revit warnings in a model',
          'The Green Area Ratio of a site'
        ],
        answer: 'Which documents, at which revision, were sent to which recipients, for what purpose, on what date'
      },
      {
        type: 'mcq',
        question: 'What does the issue purpose code "IFC" stand for in ACC transmittals?',
        options: ['Issued for Construction', 'Issued for Comment', 'Issued for Cost', 'Issued for Coordination'],
        answer: 'Issued for Construction'
      },
      {
        type: 'truefalse',
        question: 'A transmittal can require a formal response such as Approved, Approved with Comments, or Rejected.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'The permanent, searchable log of all formal document issues in ACC is called the Transmittal ___.',
        answer: 'Register'
      },
      {
        type: 'mcq',
        question: 'What does "IFCoord" mean as an issue purpose?',
        options: ['Issued for Coordination', 'Issued for Construction', 'Issued for Cost review', 'Issued for Client Only'],
        answer: 'Issued for Coordination'
      },
      {
        type: 'mcq',
        question: 'How does a transmittal differ from an Issue in ACC Build?',
        options: [
          'A transmittal is a formal record of document issue; an Issue is a problem, task, or observation requiring action',
          'They are identical concepts',
          'A transmittal is only used for safety records',
          'An Issue always requires a signature from the client'
        ],
        answer: 'A transmittal is a formal record of document issue; an Issue is a problem, task, or observation requiring action'
      },
      {
        type: 'truefalse',
        question: 'Recipients of a transmittal can view transmittals sent to them from the Transmittals section.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which best practice is recommended for issue purpose codes?',
        options: [
          'Use them consistently as established in the BIM Execution Plan',
          'Change them randomly for each transmittal',
          'Avoid using any issue purpose codes at all',
          'Only use IFC for every transmittal regardless of purpose'
        ],
        answer: 'Use them consistently as established in the BIM Execution Plan'
      },
      {
        type: 'mcq',
        question: 'Where can the Transmittal Register be accessed in ACC?',
        options: ['Docs → Transmittals', 'Cost → Budget', 'Schedule → Gantt', 'Forms → Templates'],
        answer: 'Docs → Transmittals'
      },
      {
        type: 'fillblank',
        question: 'The register can be exported as a CSV or ___ for project records or contract administration.',
        answer: 'PDF'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ acc-8: Sharing & Collaborating — Members, Companies & Permission Sets
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'acc-8',
    title: 'Members, Companies & Permission Sets',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the recommended best practice for assigning permissions according to the lesson?',
        options: [
          'Assign permissions to Companies, not individuals',
          'Assign permissions only to individuals, never companies',
          'Never assign any permissions at all',
          'Assign all permissions randomly'
        ],
        answer: 'Assign permissions to Companies, not individuals'
      },
      {
        type: 'truefalse',
        question: 'A member automatically gains access immediately upon being added to a project — they do not need to accept an invitation first.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What are the two project-level roles a member can have in ACC?',
        options: ['Administrator or Member', 'Root or Guest', 'Owner or Renter', 'Primary or Secondary'],
        answer: 'Administrator or Member'
      },
      {
        type: 'fillblank',
        question: 'A Permission Set is a named bundle of Docs folder ___.',
        answer: 'permissions'
      },
      {
        type: 'mcq',
        question: 'What happens to documents uploaded by a member who is removed from a project?',
        options: [
          'They remain in the project; their uploads are not deleted',
          'They are automatically deleted',
          'They are moved to WIP automatically',
          'They become inaccessible to everyone'
        ],
        answer: 'They remain in the project; their uploads are not deleted'
      },
      {
        type: 'truefalse',
        question: 'Giving everyone Administrator access is described as a security risk and makes permission management unmanageable.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which module-level permission allows a user to configure module settings in addition to full create/edit access?',
        options: ['Admin', 'View', 'No access', 'Read-only'],
        answer: 'Admin'
      },
      {
        type: 'mcq',
        question: 'What must be added to a project before members from a new organisation can be added?',
        options: ['The Company', 'A new Hub', 'A new Coordination Space', 'A COBie export'],
        answer: 'The Company'
      },
      {
        type: 'truefalse',
        question: 'For temporary access such as a subcontractor with a time-limited scope, it is recommended to set an access end date rather than waiting for manual removal.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'Admin access should be reviewed ___ and removed from anyone who no longer needs it.',
        answer: 'quarterly'
      }
    ]
  }

]
