export const quizzes_1_8 = [
  {
    lessonId: 'iso-1',
    lessonTitle: 'What is ISO 19650 & Why It Exists',
    passingScore: 75,
    questions: [
      {
        id: 'iso1-q1',
        type: 'mcq',
        question: 'Which UK standard first introduced the Common Data Environment concept and the four-state workflow for collaborative BIM?',
        options: [
          'PAS 1192-2:2013',
          'BS 1192:2007',
          'ISO 19650-1:2018',
          'BIM Level 3 Framework'
        ],
        answer: 'BS 1192:2007',
        explanation: 'BS 1192:2007 was the British Standard that originally introduced the CDE concept and the four-state workflow (WIP, Shared, Published, Archived), which were later adopted and internationalised in ISO 19650.'
      },
      {
        id: 'iso1-q2',
        type: 'mcq',
        question: 'A government transport authority is planning a major bridge project and wants ISO 19650-compliant information management. What is the primary reason they would require this standard?',
        options: [
          'To mandate the use of specific BIM software across all consultants',
          'To ensure information is managed consistently so the right data reaches the right people at the right time',
          'To reduce the number of organisations involved in the project',
          'To eliminate the need for 2D drawings on the project'
        ],
        answer: 'To ensure information is managed consistently so the right data reaches the right people at the right time',
        explanation: 'ISO 19650 was fundamentally created to solve the problem of poor information management — ensuring the right information reaches the right person at the right time, reducing rework and project failures.'
      },
      {
        id: 'iso1-q3',
        type: 'mcq',
        question: 'ISO 19650 is a multi-part standard. Which part specifically covers the delivery phase — the design and construction process?',
        options: [
          'ISO 19650-1',
          'ISO 19650-2',
          'ISO 19650-3',
          'ISO 19650-5'
        ],
        answer: 'ISO 19650-2',
        explanation: 'ISO 19650-2 covers the delivery phase of assets (design and construction). Part 1 covers concepts and principles, Part 3 covers operations, and Part 5 covers security.'
      },
      {
        id: 'iso1-q4',
        type: 'truefalse',
        question: 'True or False: ISO 19650 was developed entirely from scratch by the International Organization for Standardization without reference to any existing national standards.',
        answer: 'False',
        explanation: 'ISO 19650 was directly built upon the UK\'s BS 1192:2007 and PAS 1192-2:2013 standards. It internationalised and formalised concepts that were already proven in UK practice.'
      },
      {
        id: 'iso1-q5',
        type: 'mcq',
        question: 'You are a BIM coordinator on a large commercial project in Manila. Your client\'s international investor requires ISO 19650 compliance. What does this requirement primarily affect in your day-to-day practice?',
        options: [
          'The software you must use for modelling',
          'The version of Revit families you are permitted to use',
          'How you name files, manage the CDE, and document information workflows',
          'The nationality of subcontractors permitted on the project'
        ],
        answer: 'How you name files, manage the CDE, and document information workflows',
        explanation: 'ISO 19650 compliance primarily affects information management processes: naming conventions, CDE workflows, information delivery plans, and documentation — not the specific software or personnel.'
      },
      {
        id: 'iso1-q6',
        type: 'mcq',
        question: 'The UK Government\'s 2011 BIM Strategy report identified one of the leading causes of construction project failure. What was it?',
        options: [
          'Insufficient use of 3D modelling software',
          'Poor information management causing rework',
          'Inadequate structural engineering calculations',
          'Lack of on-site supervision'
        ],
        answer: 'Poor information management causing rework',
        explanation: 'The UK Government\'s 2011 BIM Strategy report highlighted that rework caused by poor information management was one of the leading causes of wasted expenditure in construction.'
      },
      {
        id: 'iso1-q7',
        type: 'truefalse',
        question: 'True or False: ISO 19650-3 covers information management during the operational phase of a built asset.',
        answer: 'True',
        explanation: 'ISO 19650-3 addresses the operational phase — how information should be managed once a building or infrastructure asset is in use. This is distinct from Part 2, which covers design and construction.'
      },
      {
        id: 'iso1-q8',
        type: 'fillintheblank',
        question: 'The UK standard that extended BS 1192 to specifically address capital delivery phase information management, and introduced BIM Level 2 requirements, was ___.',
        answer: 'PAS 1192-2',
        explanation: 'PAS 1192-2:2013 extended BS 1192 specifically for the capital delivery phase and established the BIM Level 2 framework that became mandatory on UK government projects from 2016.'
      },
      {
        id: 'iso1-q9',
        type: 'mcq',
        question: 'Which of the following statements best describes what ISO 19650 Part 5 addresses?',
        options: [
          'The geometric standards for 3D model elements',
          'Security-minded information management for built assets',
          'Health and safety documentation requirements',
          'The procurement process for BIM contracts'
        ],
        answer: 'Security-minded information management for built assets',
        explanation: 'ISO 19650-5 addresses security-minded BIM, covering the risks associated with sensitive built asset data being accessed by hostile actors or used inappropriately.'
      },
      {
        id: 'iso1-q10',
        type: 'mcq',
        question: 'A BIM professional who has completed the Revit Project Setup Course on this platform has already been practising many ISO 19650 principles. Which statement best explains why?',
        options: [
          'The Revit software was designed specifically to comply with ISO 19650',
          'BIM project setup practices such as naming conventions, CDE workflows, and model coordination are direct applications of ISO 19650 principles',
          'ISO 19650 requires all BIM professionals to be trained in Autodesk Revit',
          'The Project Setup Course was written by ISO committee members'
        ],
        answer: 'BIM project setup practices such as naming conventions, CDE workflows, and model coordination are direct applications of ISO 19650 principles',
        explanation: 'Practical BIM skills like file naming, CDE management, and model coordination are the day-to-day expression of ISO 19650 principles. ISO 19650 provides the formal framework behind these established practices.'
      }
    ]
  },
  {
    lessonId: 'iso-2',
    lessonTitle: 'Key Terms & Definitions',
    passingScore: 75,
    questions: [
      {
        id: 'iso2-q1',
        type: 'mcq',
        question: 'A structural engineer uploads a Revit model to a project collaboration platform. Under ISO 19650 terminology, this model file is best described as:',
        options: [
          'A data set',
          'An information container',
          'A project information model',
          'An asset information model'
        ],
        answer: 'An information container',
        explanation: 'An information container is any named, persistent, retrievable unit of information — including model files, drawing sheets, specifications, and reports. The Revit model file is a classic example.'
      },
      {
        id: 'iso2-q2',
        type: 'mcq',
        question: 'A property developer issues a document specifying that all consultants must deliver a federated coordination model at the end of Stage 3, with all structural, architectural, and MEP models included. This document is the:',
        options: [
          'BIM Execution Plan',
          'Master Information Delivery Plan',
          'Exchange Information Requirement',
          'Task Information Delivery Plan'
        ],
        answer: 'Exchange Information Requirement',
        explanation: 'The Exchange Information Requirement (EIR) is the document issued by the appointing party defining what information must be delivered, in what format, and at what project milestone.'
      },
      {
        id: 'iso2-q3',
        type: 'truefalse',
        question: 'True or False: In ISO 19650 terminology, a specification document and a 3D model file can both be classified as information containers.',
        answer: 'True',
        explanation: 'An information container is any named, storable, retrievable unit of information regardless of format. Both a specification document and a 3D model file meet this definition.'
      },
      {
        id: 'iso2-q4',
        type: 'mcq',
        question: 'Under ISO 19650, what is the difference between a Project Information Model (PIM) and an Asset Information Model (AIM)?',
        options: [
          'The PIM contains 3D geometry only; the AIM contains data only',
          'The PIM is developed during design and construction; the AIM is used to manage the asset during operation',
          'The PIM is created by the contractor; the AIM is created by the client',
          'The PIM is for buildings; the AIM is for infrastructure'
        ],
        answer: 'The PIM is developed during design and construction; the AIM is used to manage the asset during operation',
        explanation: 'The PIM collects information during the delivery phase. At handover, a subset of that information transitions into the AIM, which supports facilities management and asset operations.'
      },
      {
        id: 'iso2-q5',
        type: 'mcq',
        question: 'An MEP consultant uploads their ductwork model to the project CDE for other disciplines to use in clash detection. This is an example of information in which state?',
        options: [
          'Work in Progress',
          'Shared',
          'Published',
          'Archived'
        ],
        answer: 'Shared',
        explanation: 'Shared state means the producing team has completed their internal checking and made information available to other project parties for coordination and reference — exactly what is described in this scenario.'
      },
      {
        id: 'iso2-q6',
        type: 'fillintheblank',
        question: 'The appointed party\'s formal written response to the Exchange Information Requirement, confirming how information requirements will be met, is called the ___ (use the full name, not the abbreviation).',
        answer: 'BIM Execution Plan',
        explanation: 'The BIM Execution Plan (BEP) is the appointed party\'s response to the EIR. It details how information requirements will be met, including tools, workflows, roles, and schedules.'
      },
      {
        id: 'iso2-q7',
        type: 'mcq',
        question: 'A specialist facade contractor is appointed by the main contractor (the lead appointed party) to produce curtain wall shop drawings. Under ISO 19650, the facade contractor is classified as:',
        options: [
          'An appointing party',
          'A lead appointed party',
          'A task team',
          'An information manager'
        ],
        answer: 'A task team',
        explanation: 'A task team is an organisation or individual appointed by the lead appointed party (not directly by the client) to produce specific information within the delivery team.'
      },
      {
        id: 'iso2-q8',
        type: 'truefalse',
        question: 'True or False: In the information delivery cycle, "Published" information can be further changed directly without creating a new revision.',
        answer: 'False',
        explanation: 'Published information is authoritative and cannot be changed directly. Any change requires a new revision, which begins as WIP, progresses through Shared, and must go through formal review before a new Published revision is issued.'
      },
      {
        id: 'iso2-q9',
        type: 'mcq',
        question: 'On a hospital project, the structural engineer\'s model from three months ago has been superseded by a new approved revision. Where should the old model now reside in the CDE?',
        options: [
          'WIP area, as the team continues to reference it internally',
          'Shared area, for coordination reference',
          'Published area, alongside the new revision',
          'Archived area, retained for record purposes'
        ],
        answer: 'Archived area, retained for record purposes',
        explanation: 'Superseded published information moves to the Archive state. It is no longer in active use but is retained for record-keeping, audit trails, and potential dispute resolution.'
      },
      {
        id: 'iso2-q10',
        type: 'mcq',
        question: 'The process of combining separate discipline models (architectural, structural, MEP) into a single unified model for coordination purposes is described in ISO 19650 as:',
        options: [
          'Integration',
          'Compilation',
          'Federation',
          'Aggregation'
        ],
        answer: 'Federation',
        explanation: 'Federation is the ISO 19650 term for combining separate information containers into a single federated model, typically done by the BIM coordinator using tools like Autodesk Navisworks.'
      }
    ]
  },
  {
    lessonId: 'iso-3',
    lessonTitle: 'The Information Management Framework',
    passingScore: 75,
    questions: [
      {
        id: 'iso3-q1',
        type: 'mcq',
        question: 'A national highways authority maintains a database of all the bridges it owns, recording their structural condition, maintenance history, and asset value. Which level of the ISO 19650 information requirements hierarchy does this represent?',
        options: [
          'Exchange Information Requirement (EIR)',
          'Project Information Requirement (PIR)',
          'Asset Information Requirement (AIR)',
          'Organisational Information Requirement (OIR)'
        ],
        answer: 'Organisational Information Requirement (OIR)',
        explanation: 'The OIR defines the information an organisation needs to achieve its strategic objectives — in this case, the agency\'s need to manage its entire bridge network. This is the top of the hierarchy.'
      },
      {
        id: 'iso3-q2',
        type: 'mcq',
        question: 'Which three elements does ISO 19650 Part 1 Section 6 identify as necessary for effective information management?',
        options: [
          'Software, hardware, and staff',
          'A structured process, a CDE platform, and defined information requirements',
          'A BIM Manager, a model coordinator, and a document controller',
          'An EIR, a BEP, and a MIDP'
        ],
        answer: 'A structured process, a CDE platform, and defined information requirements',
        explanation: 'ISO 19650 Part 1 Section 6 identifies three connected elements: a structured information management process, a technology platform (the CDE), and defined information requirements at each stage.'
      },
      {
        id: 'iso3-q3',
        type: 'truefalse',
        question: 'True or False: ISO 19650 only applies to the design and construction phase of a built asset, not to its operation.',
        answer: 'False',
        explanation: 'ISO 19650 adopts a full life cycle perspective. Part 2 covers delivery (design and construction) and Part 3 covers operations. The framework in Part 1 applies across both phases.'
      },
      {
        id: 'iso3-q4',
        type: 'mcq',
        question: 'At the end of the design stage of a hospital project, the client requires a fully coordinated structural model before approving the design for construction. This is an example of which level of information requirement?',
        options: [
          'Organisational Information Requirement',
          'Asset Information Requirement',
          'Project Information Requirement',
          'Exchange Information Requirement'
        ],
        answer: 'Project Information Requirement',
        explanation: 'A PIR defines the information needed to make project-stage decisions. The requirement for a coordinated structural model before approving the design for construction is a project-stage decision requirement.'
      },
      {
        id: 'iso3-q5',
        type: 'mcq',
        question: 'A property management company specifies that at handover, every installed mechanical asset must have its maintenance schedule and warranty documents linked in the BIM model. This requirement flows from which level of the information requirements hierarchy?',
        options: [
          'EIR only',
          'AIR, flowing down to the EIR',
          'PIR, flowing down to the EIR',
          'OIR only'
        ],
        answer: 'AIR, flowing down to the EIR',
        explanation: 'The AIR defines what information is needed to manage the asset during operation. This operational need (maintenance schedules, warranties) flows down into the EIR as a specific handover deliverable.'
      },
      {
        id: 'iso3-q6',
        type: 'fillintheblank',
        question: 'The cross-cutting principle that states information should be created once and used across all project stages — rather than being re-entered manually at each stage — is described in ISO 19650 as "create once, ___."',
        answer: 'reuse',
        explanation: 'The "create once, reuse" principle means that information produced at design should flow into construction coordination and then into the AIM, without being manually re-created at each stage.'
      },
      {
        id: 'iso3-q7',
        type: 'mcq',
        question: 'On a large infrastructure project, the BIM Manager\'s role of overseeing the CDE, coordinating model inputs from multiple task teams, and managing information workflows reflects which aspect of the ISO 19650 framework?',
        options: [
          'The appointing party\'s information management function',
          'The information management function at the lead appointed party level',
          'The task team\'s internal WIP management',
          'The OIR compliance function'
        ],
        answer: 'The information management function at the lead appointed party level',
        explanation: 'The BIM Manager on a project typically fulfils the lead appointed party\'s information management function — coordinating task team inputs, managing the CDE, and ensuring information meets requirements.'
      },
      {
        id: 'iso3-q8',
        type: 'truefalse',
        question: 'True or False: ISO 19650 requires that all information be structured to be machine-readable, making human-readable documents non-compliant.',
        answer: 'False',
        explanation: 'ISO 19650 encourages machine-readable information where possible, but does not prohibit human-readable formats. The principle is to structure information to enable interoperability and automation where practical.'
      },
      {
        id: 'iso3-q9',
        type: 'mcq',
        question: 'The information requirements hierarchy in ISO 19650 flows from top to bottom. In the correct order from highest to lowest, which sequence is accurate?',
        options: [
          'EIR, PIR, AIR, OIR',
          'OIR, AIR, PIR, EIR',
          'PIR, OIR, EIR, AIR',
          'AIR, OIR, PIR, EIR'
        ],
        answer: 'OIR, AIR, PIR, EIR',
        explanation: 'The correct hierarchy flows from strategic to specific: OIR (organisational strategy) drives AIR (asset operational needs), which drives PIR (project stage decisions), which drives EIR (specific deliverables).'
      },
      {
        id: 'iso3-q10',
        type: 'mcq',
        question: 'You are joining a large airport expansion project as a structural BIM author. Which delivery team level are you operating at?',
        options: [
          'Appointing party level',
          'Lead appointed party level',
          'Task team level',
          'OIR level'
        ],
        answer: 'Task team level',
        explanation: 'A BIM author producing discipline-specific information (structural models, in this case) operates at the task team level — appointed by the lead appointed party to produce specific information within their discipline.'
      }
    ]
  },
  {
    lessonId: 'iso-4',
    lessonTitle: 'The Common Data Environment (CDE)',
    passingScore: 75,
    questions: [
      {
        id: 'iso4-q1',
        type: 'mcq',
        question: 'An architect is working on the schematic design of a residential tower. Their Revit model is incomplete and has not been checked by their internal QA process. In which CDE state should this model currently reside?',
        options: [
          'Shared',
          'Published',
          'Work in Progress',
          'Archived'
        ],
        answer: 'Work in Progress',
        explanation: 'Information being actively produced and not yet ready for sharing exists in the WIP state. It should remain private to the producing team until their internal checks are complete.'
      },
      {
        id: 'iso4-q2',
        type: 'mcq',
        question: 'A contractor on a hospital project accidentally builds a wall based on a structural model that was in the Shared state rather than Published. Which statement best describes the issue?',
        options: [
          'Shared information is not authorised for construction; only Published information should be used for building decisions',
          'The contractor should have used the WIP model instead for the most current information',
          'Shared and Published are interchangeable; the contractor made no procedural error',
          'Only Archived information should be used for construction to ensure historical accuracy'
        ],
        answer: 'Shared information is not authorised for construction; only Published information should be used for building decisions',
        explanation: 'Shared state means the information is available for coordination, not authorised for construction. Published information, with its appropriate suitability code, is what contractors should build from.'
      },
      {
        id: 'iso4-q3',
        type: 'truefalse',
        question: 'True or False: A CDE must be implemented using a dedicated BIM collaboration platform like Autodesk Construction Cloud or ProjectWise to be ISO 19650 compliant.',
        answer: 'False',
        explanation: 'ISO 19650 does not mandate specific technology. A CDE can be implemented with simpler tools, including SharePoint or a well-structured network drive, provided the agreed four-state workflows are properly enforced.'
      },
      {
        id: 'iso4-q4',
        type: 'mcq',
        question: 'At which CDE state should access typically be restricted to the producing team only?',
        options: [
          'Shared',
          'Published',
          'Work in Progress',
          'Archived'
        ],
        answer: 'Work in Progress',
        explanation: 'WIP information is private to the producing team. Other project parties should not have access to work-in-progress information as it may be incomplete, incorrect, or subject to change.'
      },
      {
        id: 'iso4-q5',
        type: 'mcq',
        question: 'The previous approved revision of a mechanical engineer\'s ductwork model has been superseded by a new revision that just reached Published status. Where does the old model go?',
        options: [
          'It is permanently deleted to prevent confusion',
          'It is moved to the Archived state for record purposes',
          'It remains in the Published area alongside the new revision',
          'It is returned to WIP for the team to reference'
        ],
        answer: 'It is moved to the Archived state for record purposes',
        explanation: 'Superseded published information moves to the Archive state. It is retained for audit trails, historical records, and potential dispute resolution, but is no longer in active use.'
      },
      {
        id: 'iso4-q6',
        type: 'fillintheblank',
        question: 'In the CDE four-state workflow, the correct progression order is: Work in Progress, then ___, then Published, then Archived.',
        answer: 'Shared',
        explanation: 'The correct CDE workflow progression is: WIP (private production) → Shared (available for coordination) → Published (formally authorised) → Archived (superseded but retained).'
      },
      {
        id: 'iso4-q7',
        type: 'mcq',
        question: 'You are the BIM Manager on a large mixed-use development. A task team has moved their structural model to Shared status without completing their internal QA checks. What is the risk?',
        options: [
          'Other teams may incorporate incorrect or incomplete structural information into their coordination models',
          'The model will automatically revert to WIP after 24 hours',
          'The client will be charged for the model at the incorrect rate',
          'The model will be automatically archived'
        ],
        answer: 'Other teams may incorporate incorrect or incomplete structural information into their coordination models',
        explanation: 'Sharing information before internal QA is complete risks other project parties using incorrect data for coordination. This can cascade into clashes, redesign, and costly rework if errors propagate through the federated model.'
      },
      {
        id: 'iso4-q8',
        type: 'truefalse',
        question: 'True or False: The ISO 19650 standard requires the CDE to be set up by the appointing party (client) before the project begins.',
        answer: 'False',
        explanation: 'Setting up and managing the CDE is typically the responsibility of the lead appointed party (such as the BIM Manager or architect), not the appointing party. The appointing party defines requirements; the lead appointed party implements them.'
      },
      {
        id: 'iso4-q9',
        type: 'mcq',
        question: 'Which of the following is NOT a primary function of the Common Data Environment?',
        options: [
          'Collecting information containers from all project parties',
          'Managing the progression of information through defined states',
          'Generating 3D model content automatically from design briefs',
          'Disseminating approved information to project stakeholders'
        ],
        answer: 'Generating 3D model content automatically from design briefs',
        explanation: 'The CDE collects, manages state progression, and disseminates information — it is a management and collaboration platform. Generating model content is the work of the design and engineering teams, not the CDE itself.'
      },
      {
        id: 'iso4-q10',
        type: 'mcq',
        question: 'A construction manager needs to download the latest approved architectural drawings for a site meeting. Which CDE state should they look in?',
        options: [
          'Work in Progress',
          'Shared',
          'Published',
          'Archived'
        ],
        answer: 'Published',
        explanation: 'Published information is formally authorised and represents the current approved version. For site use and construction decisions, the Published area is always the correct source.'
      }
    ]
  },
  {
    lessonId: 'iso-5',
    lessonTitle: 'Information Containers & Naming',
    passingScore: 75,
    questions: [
      {
        id: 'iso5-q1',
        type: 'mcq',
        question: 'A file named PROJ-ARCH-B2-L05-DR-A-0023 is uploaded to the project CDE. Based on ISO 19650 naming conventions, what does "L05" most likely represent?',
        options: [
          'The file is version 5 of the document',
          'The information relates to Level 5 of the building',
          'The file was created on the 5th of the month',
          'The lead consultant is identified as number 5'
        ],
        answer: 'The information relates to Level 5 of the building',
        explanation: 'In the ISO 19650 naming convention, the Level/Location field identifies the floor level or spatial location. L05 indicates Level 5 of the building.'
      },
      {
        id: 'iso5-q2',
        type: 'mcq',
        question: 'A structural drawing has been revised twice during the design development stage, before any formal contract award. Which revision format would ISO 19650 recommend for these preliminary revisions?',
        options: [
          'Rev A, Rev B',
          'P1, P2',
          'C1, C2',
          'V1, V2'
        ],
        answer: 'P1, P2',
        explanation: 'ISO 19650 recommends P-series revision codes (P1, P2, P3...) for preliminary or work-in-progress iterations before formal issue. C-series (C1, C2...) is used for contracted or authorised revisions after formal issue.'
      },
      {
        id: 'iso5-q3',
        type: 'truefalse',
        question: 'True or False: A PDF specification document and a 3D Revit model file are both valid examples of information containers under ISO 19650.',
        answer: 'True',
        explanation: 'An information container is any named, storable, retrievable unit of information regardless of format. Both PDFs and Revit model files qualify as information containers.'
      },
      {
        id: 'iso5-q4',
        type: 'mcq',
        question: 'A contractor downloads a drawing from the CDE marked with suitability code S4. What does this tell them?',
        options: [
          'The drawing is suitable for coordination only',
          'The drawing is suitable for construction',
          'The drawing is work in progress',
          'The drawing has been archived'
        ],
        answer: 'The drawing is suitable for construction',
        explanation: 'Suitability code S4 indicates that the information is "Suitable for construction" — it has been formally approved for use by contractors in building the project.'
      },
      {
        id: 'iso5-q5',
        type: 'mcq',
        question: 'In the ISO 19650 naming convention, which field identifies the organisation that produced the information container?',
        options: [
          'Project field',
          'Originator field',
          'Role field',
          'Type field'
        ],
        answer: 'Originator field',
        explanation: 'The Originator field in the ISO 19650 naming convention identifies the organisation that produced the information, for example "ARCH" for architect or "STRUC" for structural engineer.'
      },
      {
        id: 'iso5-q6',
        type: 'fillintheblank',
        question: 'A drawing uploaded to the CDE for the sole purpose of making other project parties aware of design intent — not for formal use or construction — would typically be assigned suitability code ___.',
        answer: 'S2',
        explanation: 'S2 indicates "Suitable for information" — the information is shared for awareness and reference, but is not yet approved for design coordination (S1) or construction (S4).'
      },
      {
        id: 'iso5-q7',
        type: 'mcq',
        question: 'You are a BIM coordinator reviewing all MEP models submitted to the CDE. You want to filter and find all models submitted by the MEP consultant ("MEP") for the HVAC system, regardless of level or number. Which naming fields would you search on?',
        options: [
          'Originator and Volume/System',
          'Type and Number',
          'Level and Role',
          'Project and Revision'
        ],
        answer: 'Originator and Volume/System',
        explanation: 'To find all MEP consultant HVAC models, you would filter by Originator ("MEP") and Volume/System ("HVAC"). This isolates that specific discipline and system regardless of level or sequential number.'
      },
      {
        id: 'iso5-q8',
        type: 'truefalse',
        question: 'True or False: Project-specific naming conventions issued by a client may differ from the default ISO 19650 fields, and these project-specific conventions take precedence on that project.',
        answer: 'True',
        explanation: 'Individual project naming conventions adapt the ISO 19650 structure to project-specific needs and take precedence. Understanding the ISO 19650 framework allows practitioners to quickly adapt to any project convention.'
      },
      {
        id: 'iso5-q9',
        type: 'mcq',
        question: 'What is the primary reason ISO 19650 requires metadata to be stored as CDE properties in addition to encoding information in the filename?',
        options: [
          'CDE properties are required by law in most jurisdictions',
          'Metadata as properties enables searching, sorting, and filtering that a filename alone cannot support',
          'Filenames have a character limit that makes properties mandatory',
          'CDE platforms cannot read filenames directly'
        ],
        answer: 'Metadata as properties enables searching, sorting, and filtering that a filename alone cannot support',
        explanation: 'CDE metadata properties make information searchable, sortable, and filterable by any field — such as finding all S4-status containers from the past 30 days. This level of management is not possible from filenames alone.'
      },
      {
        id: 'iso5-q10',
        type: 'mcq',
        question: 'A file is labelled with revision code C3 in the CDE. What does this tell you about its status relative to other revisions?',
        options: [
          'It is the third preliminary draft, not yet formally issued',
          'It is the third formally issued and authorised revision of this information container',
          'It is currently in the third review cycle and not yet approved',
          'It is the third archived version of a superseded document'
        ],
        answer: 'It is the third formally issued and authorised revision of this information container',
        explanation: 'C-series revision codes (C1, C2, C3...) indicate contracted or authorised revisions — formally issued versions. C3 is the third such issued revision, indicating two previous formal revisions preceded it.'
      }
    ]
  },
  {
    lessonId: 'iso-6',
    lessonTitle: 'Level of Information Need (LOIN)',
    passingScore: 75,
    questions: [
      {
        id: 'iso6-q1',
        type: 'mcq',
        question: 'A client asks for a "LOD 300 model" of the building\'s structural frame. Which critical aspect of information need does LOD 300 fail to address?',
        options: [
          'The spatial position of structural elements',
          'The geometric accuracy of structural members',
          'The data, documentation, and performance information that must be present alongside the geometry',
          'The number of structural elements in the model'
        ],
        answer: 'The data, documentation, and performance information that must be present alongside the geometry',
        explanation: 'LOD focuses almost exclusively on geometric detail. LOIN improves on this by also requiring specification of documentation (data sheets, specifications) and behaviour (performance values) alongside geometric requirements.'
      },
      {
        id: 'iso6-q2',
        type: 'mcq',
        question: 'The three dimensions of LOIN are geometry, documentation, and behaviour. In a hospital project, what would "behaviour" information for an air handling unit typically include?',
        options: [
          'The shape and dimensions of the AHU casing',
          'The manufacturer\'s installation manual',
          'Airflow capacity, filtration efficiency, and energy consumption data',
          'The AHU\'s position in the reflected ceiling plan'
        ],
        answer: 'Airflow capacity, filtration efficiency, and energy consumption data',
        explanation: 'Behaviour in LOIN refers to how an element performs or functions. For an AHU, this means performance parameters like airflow, filtration, and energy — not its shape (geometry) or documents (documentation).'
      },
      {
        id: 'iso6-q3',
        type: 'truefalse',
        question: 'True or False: LOIN requirements increase uniformly as a project progresses — the later the stage, the higher the LOIN in all three dimensions.',
        answer: 'False',
        explanation: 'LOIN requirements do not increase uniformly. For example, at handover, geometry for FM purposes can actually be simpler than construction geometry, while documentation and behaviour requirements increase significantly.'
      },
      {
        id: 'iso6-q4',
        type: 'mcq',
        question: 'At the concept design stage of a commercial building, which of the following best represents an appropriate geometric LOIN?',
        options: [
          'Fabrication-ready steel connection details accurate to the millimetre',
          'Simple massing volumes with gross floor areas',
          'Full parametric wall types with accurate layer thicknesses',
          'As-built MEP routing with installation dimensions'
        ],
        answer: 'Simple massing volumes with gross floor areas',
        explanation: 'At concept stage, only simple massing and gross areas are needed to support feasibility decisions. High-detail geometry at this stage would be wasted effort and contrary to the LOIN principle of specifying only what is needed.'
      },
      {
        id: 'iso6-q5',
        type: 'mcq',
        question: 'Who is responsible for defining the LOIN required at each project milestone?',
        options: [
          'The structural engineer, as the most technically demanding discipline',
          'The BIM software vendor, through default LOD settings',
          'The appointing party, documented in the Exchange Information Requirement',
          'The lead appointed party, in the TIDP'
        ],
        answer: 'The appointing party, documented in the Exchange Information Requirement',
        explanation: 'LOIN requirements are defined by the appointing party and documented in the EIR. They reflect the appointing party\'s genuine information needs at each stage, flowing from their AIR and PIR.'
      },
      {
        id: 'iso6-q6',
        type: 'fillintheblank',
        question: 'The documentation dimension of LOIN refers to the ___ information associated with a model element, such as manufacturer data sheets, specifications, and warranty records.',
        answer: 'non-geometric',
        explanation: 'Documentation in LOIN refers to non-geometric information attached to or associated with model elements — essentially all the data and documents that describe an element but are not its shape or performance.'
      },
      {
        id: 'iso6-q7',
        type: 'mcq',
        question: 'A Revit wall family has accurate geometry for construction — correct layer thicknesses, correct overall thickness, accurate length and height. However, it has no thermal performance, fire rating, or acoustic rating parameters populated. How would LOIN assess this?',
        options: [
          'Fully LOIN-compliant for all project stages',
          'Geometrically adequate but behaviourally incomplete for many project stages',
          'Not acceptable as Revit families must always have all parameters filled',
          'Suitable only for archiving, not for construction or coordination'
        ],
        answer: 'Geometrically adequate but behaviourally incomplete for many project stages',
        explanation: 'LOIN requires assessment across all three dimensions. A wall with accurate geometry but no thermal, fire, or acoustic data is geometrically complete but behaviourally incomplete — adequate for some purposes but not for stages requiring performance verification.'
      },
      {
        id: 'iso6-q8',
        type: 'truefalse',
        question: 'True or False: LOIN was introduced in ISO 19650 to replace LOD, because LOD addressed only geometric detail while ignoring documentary and performance information needs.',
        answer: 'True',
        explanation: 'This is exactly correct. LOD focused on geometric detail. LOIN improves the framework by explicitly addressing all three dimensions: geometry, documentation, and behaviour — making information requirements holistic rather than solely visual.'
      },
      {
        id: 'iso6-q9',
        type: 'mcq',
        question: 'At project handover to a facilities management team, which LOIN dimension typically becomes most important?',
        options: [
          'Geometry, because FM teams need precise dimensions for maintenance access',
          'Documentation and behaviour, because FM teams need asset data, manuals, and performance records',
          'Geometry and documentation equally, because FM teams use both equally',
          'None — LOIN only applies during the design and construction phases'
        ],
        answer: 'Documentation and behaviour, because FM teams need asset data, manuals, and performance records',
        explanation: 'At handover, documentation (O&M manuals, warranties, certificates) and behaviour (performance data, maintenance schedules, energy ratings) become critical for FM teams. Geometry may actually be simplified compared to construction.'
      },
      {
        id: 'iso6-q10',
        type: 'mcq',
        question: 'A client asks: "Why can\'t I just ask for the highest possible LOD at every stage to be safe?" What is the best response based on LOIN principles?',
        options: [
          'Because modelling software cannot produce high LOD models early in a project',
          'Because producing unnecessary information wastes effort and budget, and may force design decisions before they are ready to be made',
          'Because ISO 19650 legally prohibits high LOD at early project stages',
          'Because high LOD models are too large to upload to a CDE'
        ],
        answer: 'Because producing unnecessary information wastes effort and budget, and may force design decisions before they are ready to be made',
        explanation: 'LOIN is specifically designed to prevent unnecessary information production. Asking for maximum detail at every stage wastes resources, burdens the design team, and may force premature decisions that should remain flexible at early stages.'
      }
    ]
  },
  {
    lessonId: 'iso-7',
    lessonTitle: 'The Appointing & Appointed Parties',
    passingScore: 75,
    questions: [
      {
        id: 'iso7-q1',
        type: 'mcq',
        question: 'On a DPWH road widening project, the government agency issues a document defining what BIM models, reports, and data must be delivered at each project milestone. The agency is acting as:',
        options: [
          'The lead appointed party',
          'The appointing party',
          'A task team',
          'The information manager'
        ],
        answer: 'The appointing party',
        explanation: 'The government agency (DPWH in this case) is the appointing party — the organisation that commissions work and issues information requirements. They define what must be delivered but do not produce the information themselves.'
      },
      {
        id: 'iso7-q2',
        type: 'mcq',
        question: 'An architectural firm wins a design contract directly with a property developer. The firm then appoints a structural engineering firm and an MEP firm to produce their respective models. The architectural firm is the:',
        options: [
          'Appointing party',
          'Task team',
          'Lead appointed party',
          'Information author'
        ],
        answer: 'Lead appointed party',
        explanation: 'The architectural firm has a direct appointment with the client (developer) and then appoints other consultants. This is the lead appointed party role — directly responsible to the client and coordinating all task team information.'
      },
      {
        id: 'iso7-q3',
        type: 'truefalse',
        question: 'True or False: Under ISO 19650, the appointing party is responsible for producing the BIM Execution Plan.',
        answer: 'False',
        explanation: 'The BIM Execution Plan is produced by the appointed party (specifically the lead appointed party) in response to the EIR issued by the appointing party. The appointing party issues requirements; the appointed party responds with the plan.'
      },
      {
        id: 'iso7-q4',
        type: 'mcq',
        question: 'What is the key document that each task team must produce to define exactly what information they will deliver, to what standard, and by when?',
        options: [
          'Master Information Delivery Plan (MIDP)',
          'Task Information Delivery Plan (TIDP)',
          'BIM Execution Plan (BEP)',
          'Exchange Information Requirement (EIR)'
        ],
        answer: 'Task Information Delivery Plan (TIDP)',
        explanation: 'Each task team produces a TIDP listing every information container they are responsible for, with target dates for reaching Shared and Published status. The lead appointed party consolidates all TIDPs into the MIDP.'
      },
      {
        id: 'iso7-q5',
        type: 'mcq',
        question: 'A main contractor is the lead appointed party on a construction project. A specialist steelwork fabricator is appointed by the main contractor to produce fabrication models and drawings. The fabricator is classified as:',
        options: [
          'A secondary appointing party',
          'A co-lead appointed party',
          'A task team',
          'An information author only'
        ],
        answer: 'A task team',
        explanation: 'The steelwork fabricator is appointed by the lead appointed party (main contractor), not directly by the client. Any organisation appointed at this level in the supply chain is a task team.'
      },
      {
        id: 'iso7-q6',
        type: 'fillintheblank',
        question: 'The document produced by the lead appointed party that consolidates all task team delivery schedules into a single project-wide information delivery schedule is called the ___ (use the full abbreviation).',
        answer: 'MIDP',
        explanation: 'The Master Information Delivery Plan (MIDP) is produced by the lead appointed party. It consolidates all TIDPs into a single project schedule showing what information is due, from which team, and when.'
      },
      {
        id: 'iso7-q7',
        type: 'mcq',
        question: 'At which point does the lead appointed party typically submit a "pre-appointment BEP" to the appointing party?',
        options: [
          'After the contract is awarded and work has begun',
          'Before the contract is awarded, as part of the appointment process',
          'At the end of the project, as a record of how BIM was managed',
          'Only when a task team requests it'
        ],
        answer: 'Before the contract is awarded, as part of the appointment process',
        explanation: 'The pre-appointment BEP is submitted before contract award, demonstrating how the appointed party intends to meet the EIR requirements. A post-appointment BEP is then refined once the contract is in place.'
      },
      {
        id: 'iso7-q8',
        type: 'truefalse',
        question: 'True or False: ISO 19650 roles only apply to large projects with many organisations. On a small project with a single BIM author, these roles are not relevant.',
        answer: 'False',
        explanation: 'ISO 19650 roles scale to project size. On a small project, a single individual may fulfil the task team and aspects of the lead appointed party role simultaneously. Understanding which role you are filling at any moment defines your information management responsibilities.'
      },
      {
        id: 'iso7-q9',
        type: 'mcq',
        question: 'An MEP task team uploads their plumbing model to the Shared area without completing their internal QA checks. Who bears primary responsibility for this procedural error?',
        options: [
          'The appointing party, for not specifying QA requirements in the EIR',
          'The lead appointed party, for not checking before the model was uploaded',
          'The MEP task team, for sharing information before their internal checks were complete',
          'The CDE platform provider, for allowing upload without QA verification'
        ],
        answer: 'The MEP task team, for sharing information before their internal checks were complete',
        explanation: 'Task teams are responsible for their own internal checking before moving information to Shared status. Sharing unchecked information is a task team failure — though the lead appointed party should also have review processes to catch such errors.'
      },
      {
        id: 'iso7-q10',
        type: 'mcq',
        question: 'Which of the following is the lead appointed party\'s primary responsibility regarding the CDE?',
        options: [
          'Designing and building the CDE software platform',
          'Setting up, configuring, and managing the CDE for the project, including access control and workflow',
          'Paying for the CDE platform license on behalf of all task teams',
          'Archiving the CDE at project completion without further configuration'
        ],
        answer: 'Setting up, configuring, and managing the CDE for the project, including access control and workflow',
        explanation: 'The lead appointed party is responsible for setting up the CDE, defining the folder structure and access controls, configuring workflows, and managing the platform throughout the project life.'
      }
    ]
  },
  {
    lessonId: 'iso-8',
    lessonTitle: 'ISO 19650 vs. BS 1192 & BIM Level 2',
    passingScore: 75,
    questions: [
      {
        id: 'iso8-q1',
        type: 'mcq',
        question: 'Which UK standard first introduced the Common Data Environment and the four-state information management workflow, predating ISO 19650?',
        options: [
          'PAS 1192-2:2013',
          'BS 1192:2007',
          'BS 8541:2011',
          'ISO 9001:2015'
        ],
        answer: 'BS 1192:2007',
        explanation: 'BS 1192:2007 introduced the CDE concept and the four-state workflow (WIP, Shared, Published, Archived). These were the foundational British Standards concepts that ISO 19650 later adopted and internationalised.'
      },
      {
        id: 'iso8-q2',
        type: 'mcq',
        question: 'The UK Government mandated BIM Level 2 compliance on all centrally procured government construction projects from which year?',
        options: [
          '2011',
          '2013',
          '2016',
          '2018'
        ],
        answer: '2016',
        explanation: 'BIM Level 2 became mandatory on UK central government construction projects from April 2016, following the publication of the UK Government\'s 2011 BIM Strategy and the development of the PAS 1192 series.'
      },
      {
        id: 'iso8-q3',
        type: 'truefalse',
        question: 'True or False: ISO 19650 introduced entirely new concepts for information management that were not present in BS 1192 or PAS 1192-2.',
        answer: 'False',
        explanation: 'ISO 19650 retained the vast majority of concepts from BS 1192 and PAS 1192-2. The CDE, four states, EIR, BEP, and role structures were all inherited. The changes were primarily in terminology, structure, and international applicability.'
      },
      {
        id: 'iso8-q4',
        type: 'mcq',
        question: 'In the BIM Level 2 maturity model, what does Level 1 BIM represent?',
        options: [
          'Unmanaged CAD with 2D drawings only',
          'Managed CAD, typically with 2D and 3D drawings on a shared drive',
          'Collaborative BIM with a CDE and defined information exchanges',
          'Fully integrated single-model BIM with real-time collaboration'
        ],
        answer: 'Managed CAD, typically with 2D and 3D drawings on a shared drive',
        explanation: 'BIM Level 1 represents managed CAD — some degree of organisation and sharing, but not yet collaborative BIM with a proper CDE. Level 0 is unmanaged CAD, Level 2 is collaborative BIM, and Level 3 is fully integrated.'
      },
      {
        id: 'iso8-q5',
        type: 'mcq',
        question: 'You are reading a project specification from 2015 that references "PAS 1192-2:2013 compliance." As an ISO 19650-trained professional, which statement best describes your response?',
        options: [
          'Ignore the specification as it refers to an obsolete standard with no relevance to current practice',
          'Recognise that PAS 1192-2 concepts are functionally equivalent to ISO 19650 Part 2, and translate accordingly',
          'Contact the client to replace all references with ISO 19650 before proceeding',
          'Apply Level 0 BIM processes since the document predates the current standard'
        ],
        answer: 'Recognise that PAS 1192-2 concepts are functionally equivalent to ISO 19650 Part 2, and translate accordingly',
        explanation: 'PAS 1192-2 and ISO 19650 Part 2 are functionally equivalent. A BIM professional should be able to cross-reference terminology and apply current ISO 19650 practice to meet legacy specification requirements.'
      },
      {
        id: 'iso8-q6',
        type: 'fillintheblank',
        question: 'In the PAS 1192-2 framework, the client was referred to as the "Employer." In ISO 19650 international terminology, this role is now called the ___ party.',
        answer: 'appointing',
        explanation: 'The "Employer" in PAS 1192-2 corresponds to the "appointing party" in ISO 19650. This terminological change reflects the standard\'s international scope, avoiding contractual language specific to UK law.'
      },
      {
        id: 'iso8-q7',
        type: 'mcq',
        question: 'How does ISO 19650 differ from the BIM Level 2 maturity model in its approach to defining BIM practice?',
        options: [
          'ISO 19650 uses numbered maturity levels; BIM Level 2 does not',
          'ISO 19650 defines a process to be applied regardless of tool maturity; BIM Level 2 used maturity levels to describe sophistication of tools and methods',
          'ISO 19650 only applies to infrastructure; BIM Level 2 only applies to buildings',
          'ISO 19650 eliminates the need for a CDE; BIM Level 2 required one'
        ],
        answer: 'ISO 19650 defines a process to be applied regardless of tool maturity; BIM Level 2 used maturity levels to describe sophistication of tools and methods',
        explanation: 'ISO 19650 supersedes the maturity level concept. It defines what information is needed and how it should be managed, without using a maturity scale. The standard can be applied effectively even with relatively simple tools.'
      },
      {
        id: 'iso8-q8',
        type: 'truefalse',
        question: 'True or False: PAS 1192-3, which addressed operational phase information management, was the predecessor to ISO 19650 Part 3.',
        answer: 'True',
        explanation: 'PAS 1192-3 addressed information management during the operational phase of built assets, covering the same territory that ISO 19650-3 now addresses. Similarly, PAS 1192-5 preceded ISO 19650-5 on security.'
      },
      {
        id: 'iso8-q9',
        type: 'mcq',
        question: 'A UK-trained BIM Manager joins your project team and refers to the "Employer\'s Information Requirements" or "EIR." In ISO 19650 terminology, what are they most likely referring to?',
        options: [
          'The BIM Execution Plan',
          'The Exchange Information Requirement',
          'The Asset Information Requirement',
          'The Master Information Delivery Plan'
        ],
        answer: 'Exchange Information Requirement',
        explanation: 'In the UK BIM Level 2 / PAS 1192-2 framework, the "Employer\'s Information Requirements" (EIR) is the equivalent of the ISO 19650 "Exchange Information Requirement." The abbreviation EIR survived the transition; the full name changed slightly.'
      },
      {
        id: 'iso8-q10',
        type: 'mcq',
        question: 'You complete the Beginner tier of this course and a colleague asks: "Does knowing ISO 19650 mean I automatically know BIM Level 2?" What is the most accurate answer?',
        options: [
          'No — they are completely different frameworks with no overlap',
          'Yes — ISO 19650 and BIM Level 2 are identical; knowing one means knowing the other fully',
          'Largely yes — ISO 19650 is built on BIM Level 2 concepts, so understanding ISO 19650 means understanding the core of BIM Level 2, with some terminology differences',
          'No — BIM Level 2 is more advanced than ISO 19650 and requires additional separate study'
        ],
        answer: 'Largely yes — ISO 19650 is built on BIM Level 2 concepts, so understanding ISO 19650 means understanding the core of BIM Level 2, with some terminology differences',
        explanation: 'ISO 19650 was built on BIM Level 2 concepts. Understanding ISO 19650 means you understand the fundamental concepts behind BIM Level 2. Practical differences are primarily terminological and structural, not conceptual.'
      }
    ]
  }
];
