export const lessons_1_8 = [
  {
    id: 'iso-1',
    num: 1,
    title: 'What is ISO 19650 & Why It Exists',
    topic: 'Introduction',
    cat: 'beginner',
    readTime: '10 min',
    free: true,
    desc: 'Discover the origins of ISO 19650, why the global construction industry needed a unified information management standard, and what problems it was designed to solve.',
    intro: 'The construction industry has long struggled with a fundamental problem: too much information, managed too poorly, shared too inconsistently. Projects fail not because engineers lack skill, but because the right information does not reach the right person at the right time. ISO 19650 exists to fix that. In this lesson, you will learn where this standard came from, what it was designed to solve, and why it matters to every BIM professional working today.',
    sections: [
      {
        heading: 'The Problem ISO 19650 Was Built to Solve',
        content: 'Before ISO 19650, information management on construction projects was largely informal. Each firm developed its own naming conventions, folder structures, and workflows. When multiple organisations collaborated on a single project, the result was often chaos: duplicated files, outdated drawings in circulation, and no single source of truth for what information was current and approved.\n\nStudies consistently showed that poor information management was one of the leading causes of rework in construction. The UK Government\'s 2011 BIM Strategy report estimated that rework caused by poor information accounted for billions in wasted expenditure annually across the industry. Something had to change.\n\nThe industry needed a shared language and a shared process for managing information. Not just within a single organisation, but across entire project supply chains involving dozens of firms working simultaneously.'
      },
      {
        heading: 'From BS 1192 to ISO 19650',
        content: 'The foundation of ISO 19650 was laid in the United Kingdom through a series of British Standards. BS 1192:2007 introduced collaborative production of architectural, engineering, and construction information. It defined concepts like the Common Data Environment and established workflows for managing drawing revisions and approvals.\n\nThis was followed by PAS 1192-2:2013, which extended BS 1192 principles specifically to the capital delivery phase of projects and introduced Level 2 BIM requirements that became mandatory on UK government projects from 2016.\n\nThese UK standards proved highly effective and gained international attention. In 2018, the International Organization for Standardization adopted and expanded these principles into ISO 19650, making them accessible to the global construction industry. You will study the relationship between BS 1192 and ISO 19650 in detail in Lesson 8 of this course.\n\nFor now, understand that ISO 19650 is not a new idea imposed from scratch. It is the formalisation and internationalisation of practices that were already proven to work.'
      },
      {
        heading: 'What ISO 19650 Actually Is',
        content: 'ISO 19650 is a multi-part international standard for managing information over the whole life cycle of a built asset using Building Information Modelling. It is published by the International Organization for Standardization and is currently structured into five parts:\n\nPart 1 covers concepts and principles that apply across the entire built asset life cycle. It defines the fundamental ideas and vocabulary of the standard.\n\nPart 2 covers the delivery phase of assets, which means the design and construction process. This is the part most directly relevant to project teams during active construction.\n\nPart 3 covers the operational phase of assets, addressing how information should be managed once a building or infrastructure asset is in use.\n\nPart 5 covers security-minded information management, addressing the risks associated with sensitive built asset data being accessed by hostile actors.\n\nPart 6 addresses health and safety, though this is less commonly referenced in day-to-day practice at the time of writing.\n\nThis course focuses primarily on Parts 1, 2, and 3, with a dedicated lesson on Part 5. You will engage with Part 1 throughout the Beginner tier and Parts 2 and 3 in the Intermediate and Advanced tiers respectively.'
      },
      {
        heading: 'Why ISO 19650 Matters in Practice',
        content: 'You may be asking: is this just another standard that looks good on paper but is ignored in the field? The answer, increasingly, is no.\n\nGovernments and major clients in the UK, Singapore, Hong Kong, Australia, and across the Middle East and Europe now require ISO 19650 compliance on public infrastructure and large commercial projects. In the Philippines, BIM adoption is accelerating under the Department of Public Works and Highways\' BIM roadmap, and international project teams working here are already applying ISO 19650 principles.\n\nFor a BIM professional, understanding ISO 19650 is no longer optional if you want to work on large-scale or internationally connected projects. It is the framework within which your Revit models, your CDE uploads, your naming conventions, and your delivery workflows all sit.\n\nIf you have already completed the Revit Course or the Revit Project Setup Course on this platform, you have already been practising many ISO 19650 principles without necessarily knowing their formal names. This course gives you the language and framework to understand why those practices exist.'
      },
      {
        heading: 'How This Course Is Structured',
        content: 'The 24 lessons in this course follow the structure of ISO 19650 itself. The Beginner tier (Lessons 1 through 8) covers the foundational concepts from Part 1: terminology, the information management framework, the Common Data Environment, information containers and naming, Level of Information Need, and the key roles defined by the standard.\n\nThe Intermediate tier (Lessons 9 through 16) dives into Part 2, covering the practical delivery workflows: writing Employer\'s Information Requirements, producing BIM Execution Plans, managing the delivery cycle, and handling quality assurance and suitability codes.\n\nThe Advanced tier (Lessons 17 through 24) covers Part 3 operational information management, security under Part 5, organisational maturity, infrastructure applications, compliance auditing, and a full end-to-end project walkthrough from EIR to Asset Information Model.\n\nBy the end of this course, you will be equipped to participate in ISO 19650-compliant projects as a BIM author, coordinator, or information manager.'
      }
    ],
    takeaways: [
      'ISO 19650 was created to solve the industry-wide problem of poor information management causing rework and project failure.',
      'It evolved from UK standards BS 1192 and PAS 1192-2, which were proven in practice before being internationalised.',
      'The standard has five parts covering concepts, delivery, operations, security, and health and safety.',
      'ISO 19650 compliance is increasingly mandatory on public and large commercial projects internationally.',
      'This course covers Parts 1, 2, 3, and 5 across its three tiers, connecting theory directly to BIM practice.'
    ],
    resource: 'ISO 19650-1:2018 — Section 1 (Scope) and Section 4 (Background and context)',
    prev: null,
    next: 'iso-2'
  },
  {
    id: 'iso-2',
    num: 2,
    title: 'Key Terms & Definitions',
    topic: 'Terminology',
    cat: 'beginner',
    readTime: '12 min',
    free: true,
    desc: 'Master the essential vocabulary of ISO 19650 so you can read the standard, communicate with project teams, and apply its concepts with confidence.',
    intro: 'Every professional discipline has its own language, and ISO 19650 is no different. The standard introduces a precise vocabulary that allows project teams across different countries, companies, and roles to communicate without ambiguity. In this lesson, you will learn the most important terms defined in ISO 19650 Part 1, Section 3, understand why precision in this language matters, and begin connecting terminology to real project situations.',
    sections: [
      {
        heading: 'Why Terminology Matters',
        content: 'In everyday conversation, words like "model," "drawing," "document," and "file" are often used interchangeably. In ISO 19650, each of these words means something specific and different. Using them incorrectly leads to misunderstandings about what information is being requested, what has been delivered, and who is responsible for what.\n\nWhen a client issues an Employer\'s Information Requirements asking for a "federated model," they mean something very different from a "model" or a "file." When a standard references an "information container," it is not simply talking about a folder. Getting the terminology right is not pedantry. It is the foundation of clear, enforceable project communication.\n\nWork through these terms carefully. You will see every one of them appear in the lessons that follow.'
      },
      {
        heading: 'Information and Data',
        content: 'The standard begins with a distinction between data and information. Data refers to raw facts, numbers, or symbols. Information is data that has been processed and given context so that it is meaningful and useful to a recipient.\n\nA coordinate value of 14.2 is data. A notation in a model saying "Column CL-01 base is at elevation +14.200m FFL" is information. ISO 19650 is concerned with how information is produced, managed, exchanged, and used — not just raw data.\n\nBuilt asset information is defined as information produced or compiled during the design, construction, or operation of a built asset. This includes 3D model geometry, specifications, schedules, cost data, maintenance records, and more. The standard applies to all of it.\n\nAn information model is a collection of information containers and their metadata. There are two key types: the Project Information Model (PIM), which contains information developed during design and construction, and the Asset Information Model (AIM), which contains information used to manage the asset during operation. You will encounter both types repeatedly throughout this course.'
      },
      {
        heading: 'Information Containers',
        content: 'An information container is a named persistent set of information retrievable from within a file system, information system, or application storage system. In plain English: any discrete piece of information that can be named, stored, and retrieved.\n\nAn information container can be a model file, a drawing sheet, a specification document, a schedule, a point cloud, a PDF report, or a structured data table. What makes something an information container is not its format, but the fact that it is a defined, named, retrievable unit of information.\n\nThis concept is important because ISO 19650 establishes rules for how information containers should be named, versioned, approved, and stored. If you have worked with the naming conventions taught in the Revit Project Setup Course (ps-5 and ps-6), you have already been creating and naming information containers according to these principles.'
      },
      {
        heading: 'Roles: The Appointing Party and the Appointed Party',
        content: 'ISO 19650 defines clear roles for every party involved in a project. The two most fundamental are the appointing party and the appointed party.\n\nThe appointing party is the organisation that commissions or orders information. On a construction project, this is typically the client or employer. The appointing party defines what information it needs by issuing an Exchange Information Requirement (EIR) — the document that specifies what the project team must deliver and when.\n\nThe appointed party is the organisation responsible for producing and delivering that information. This could be the lead designer, the main contractor, or a specialist subcontractor. There is always a lead appointed party, which is the organisation that has a direct appointment with the appointing party and coordinates all the other appointed parties.\n\nAn appointed party that is further down the supply chain — appointed by the lead appointed party rather than directly by the client — is called a task team. The lead appointed party coordinates and is responsible for the information produced by all task teams.\n\nYou will explore these roles in depth in Lesson 7.'
      },
      {
        heading: 'The Information Delivery Cycle',
        content: 'The information delivery cycle is the structured process by which information is produced, reviewed, and approved. It consists of a series of defined states that every piece of information passes through.\n\nWork in progress (WIP) is information currently being produced. It sits in a WIP area of the Common Data Environment and is only accessible to the team creating it.\n\nShared is the state where information has been checked by the producing team and made available to other project parties for coordination or reference. It has not yet been formally approved.\n\nPublished is the state where information has been authorised for use. Published information has been through formal review and approval processes and can be relied upon by other project parties.\n\nArchived refers to superseded information that is retained for record purposes.\n\nYou will study the delivery cycle and its workflows in detail in Lesson 12 when you reach the Intermediate tier.'
      },
      {
        heading: 'Other Essential Terms',
        content: 'Level of Information Need (LOIN) defines the degree of detail and data required for information at a given point in a project. It replaces the older concept of Level of Detail (LOD) with a more comprehensive framework. You will study LOIN in Lesson 6.\n\nA Common Data Environment (CDE) is the agreed source of information for a project, used to collect, manage, and disseminate each information container through a managed process. The CDE is covered in depth in Lesson 4.\n\nThe Exchange Information Requirement (EIR) is a document issued by the appointing party that defines what information must be delivered, in what format, and at what point in the project. The BIM Execution Plan (BEP) is the appointed party\'s response to the EIR, confirming how those requirements will be met.\n\nA Milestone is a defined point in the project where information is formally exchanged. At each milestone, specific information containers must have reached their required state and been delivered to the appointing party.\n\nFederation is the process of combining separate information containers into a single federated model. This is typically done by the BIM coordinator using software such as Autodesk Navisworks to check spatial coordination between models from different disciplines.'
      }
    ],
    takeaways: [
      'ISO 19650 uses precise terminology where everyday words like "model" and "document" have specific technical meanings.',
      'An information container is any named, storable, retrievable unit of information — not just a 3D model file.',
      'The appointing party defines information requirements; the appointed party is responsible for delivering them.',
      'The information delivery cycle defines four states: WIP, Shared, Published, and Archived.',
      'Key documents include the Exchange Information Requirement (EIR) and the BIM Execution Plan (BEP).'
    ],
    resource: 'ISO 19650-1:2018 — Section 3 (Terms and definitions)',
    prev: 'iso-1',
    next: 'iso-3'
  },
  {
    id: 'iso-3',
    num: 3,
    title: 'The Information Management Framework',
    topic: 'Framework',
    cat: 'beginner',
    readTime: '11 min',
    free: true,
    desc: 'Understand the overarching framework that ISO 19650 Part 1 establishes for managing information across the full life cycle of a built asset.',
    intro: 'Now that you understand the terminology, you are ready to look at how ISO 19650 Part 1 organises information management across an asset\'s entire life. The standard is not only about the construction phase — it covers design, construction, and long-term operation as a single continuous process. In this lesson, you will study the information management framework from Part 1, Section 6, and understand how the different elements of the standard connect to each other.',
    sections: [
      {
        heading: 'The Life Cycle Perspective',
        content: 'One of the core principles of ISO 19650 is that information management should extend across the entire life of a built asset, not just during design and construction. A building or infrastructure asset may operate for 50, 100, or even 200 years. The information produced during design and construction — if properly managed — becomes a critical resource for maintaining, adapting, and eventually decommissioning that asset.\n\nISO 19650 Part 1 frames this as the built asset life cycle, which it divides into two primary phases: the delivery phase, covered in Part 2, and the operational phase, covered in Part 3. The framework established in Part 1 provides the principles that apply to both phases.\n\nFor most BIM authors and coordinators, the delivery phase is where day-to-day work happens. But understanding the life cycle perspective is essential because it explains why certain information requirements exist. A client who demands specific data fields in a model during construction is not being difficult — they are preparing for a handover that will enable decades of efficient asset management.'
      },
      {
        heading: 'The Framework Structure',
        content: 'ISO 19650 Part 1, Section 6 describes the organisational framework for information management. It establishes that every project must have a defined information management function — someone or a team whose role is to implement and oversee the information management process.\n\nAt the project level, this function is typically fulfilled by the BIM Manager or Information Manager. At the organisational level, it is embedded in the company\'s BIM strategy and processes. The standard does not prescribe exactly how this role must be staffed, but it does prescribe what it must achieve.\n\nThe framework identifies three connected elements that must be in place for effective information management:\n\nFirst, a structured information management process — a defined workflow for how information is produced, reviewed, authorised, and delivered. This includes the delivery cycle states (WIP, Shared, Published, Archived) you studied in Lesson 2.\n\nSecond, a technology platform to support that process — the Common Data Environment, which you will study in Lesson 4.\n\nThird, defined information requirements at each stage — the Exchange Information Requirements, BIM Execution Plan, and other documents that define what information must be produced and when.'
      },
      {
        heading: 'Information Requirements Hierarchy',
        content: 'ISO 19650 establishes a hierarchy of information requirements that flows down from the client\'s ultimate goals to the specific deliverables on any given project.\n\nAt the top sits the Organisational Information Requirement (OIR): the information an organisation needs to achieve its strategic objectives. For a government transport agency, the OIR might define what asset data it needs to manage its entire road network efficiently.\n\nBelow that sits the Asset Information Requirement (AIR): the information needed to manage a specific asset during its operational life. The AIR is derived from the OIR and defines what must be handed over at project completion.\n\nBelow that sits the Project Information Requirement (PIR): the information needed to make project-stage decisions. For example, at the end of the design stage, the PIR might specify that a fully coordinated structural model must be available for approval.\n\nAt the bottom sit the Exchange Information Requirements (EIR): the specific deliverables the appointing party requires from the appointed party. The EIR is the document project teams work to directly.\n\nUnderstanding this hierarchy helps you see why clients ask for what they ask for. An EIR is not arbitrary. It flows from genuine operational needs defined in the OIR and AIR above it.'
      },
      {
        heading: 'The Delivery Team Structure',
        content: 'The framework also defines how delivery teams should be structured to manage information effectively. On a large project, there is typically a hierarchy of teams: the appointing party at the top, the lead appointed party who interfaces directly with the client, and multiple task teams below that.\n\nEach level in this hierarchy has defined responsibilities for information management. The appointing party issues requirements and accepts deliverables. The lead appointed party coordinates across task teams, federates models, and manages the CDE. Task teams produce information within their discipline and upload to the CDE according to agreed workflows.\n\nThis structure mirrors what you see on typical large-scale Revit projects. If you have worked on a project where an architect manages the federated Navisworks model and coordinates inputs from structural, MEP, and civil engineers, you have seen this delivery team structure in action. The Revit Course lesson rv-22 on federated models connects directly to this framework.'
      },
      {
        heading: 'Principles That Run Throughout',
        content: 'Part 1 also establishes several cross-cutting principles that apply regardless of project phase or type.\n\nInformation should be structured to be machine-readable where possible, not just human-readable. This supports automation, interoperability, and long-term data use.\n\nInformation should be created once and reused rather than recreated at each project stage. A structural engineer\'s model should inform the construction team\'s coordination model, which should inform the facilities manager\'s AIM — without manually re-entering data at each stage.\n\nResponsibility for information should be clearly assigned. Every information container should have a defined producing team, and that team is accountable for its quality, accuracy, and timely delivery.\n\nThese principles explain why ISO 19650 is not just about having a BIM model. It is about having the right information, in the right format, at the right time, managed by people with clear accountability. That is a discipline, not just a software task.'
      }
    ],
    takeaways: [
      'ISO 19650 Part 1 establishes a framework covering the full built asset life cycle, not just construction.',
      'Effective information management requires three elements: a structured process, a CDE platform, and defined information requirements.',
      'Information requirements exist in a hierarchy: OIR, AIR, PIR, and EIR, each flowing from the level above.',
      'Delivery teams are structured hierarchically: appointing party, lead appointed party, and task teams.',
      'Core principles include machine-readability, create-once-reuse, and clearly assigned information responsibility.'
    ],
    resource: 'ISO 19650-1:2018 — Section 6 (Principles for managing information)',
    prev: 'iso-2',
    next: 'iso-4'
  },
  {
    id: 'iso-4',
    num: 4,
    title: 'The Common Data Environment (CDE)',
    topic: 'CDE',
    cat: 'beginner',
    readTime: '13 min',
    free: false,
    desc: 'Learn what the Common Data Environment is, how it functions as the single source of truth on a project, and how its four-state workflow controls information quality.',
    intro: 'Every ISO 19650-compliant project revolves around one central concept: the Common Data Environment. The CDE is the mechanism through which all project information is collected, managed, approved, and distributed. Without it, there is no controlled single source of truth — just a collection of folders and emails that different teams treat differently. In this lesson, you will learn what the CDE is, how its state-based workflow operates, and what this means for how you work day to day as a BIM author or coordinator.',
    sections: [
      {
        heading: 'What Is the Common Data Environment?',
        content: 'The Common Data Environment (CDE) is defined in ISO 19650 as the agreed source of information for any given project or asset, used to collect, manage, and disseminate each information container through a managed process.\n\nThe key word here is "agreed." A CDE is not simply any shared folder or cloud drive. It is a platform whose use has been formally agreed by all project parties, with defined workflows controlling how information enters, progresses, and is accessed within it.\n\nA CDE can be implemented using dedicated BIM collaboration platforms such as Autodesk Construction Cloud (ACC), ProjectWise, Aconex, or BIM 360. It can also be implemented using simpler tools — including SharePoint or even a well-structured network drive — provided the agreed workflows are enforced. The technology is secondary. The workflow is what matters.\n\nAt the beginning of a project, the lead appointed party (typically the BIM Manager or project architect) is responsible for setting up the CDE and defining the protocols all task teams must follow when uploading, sharing, and retrieving information.'
      },
      {
        heading: 'The Four States of the CDE',
        content: 'Information in the CDE exists in one of four states at any given time. These states define what the information is, who can access it, and what it can be used for.\n\nWork in Progress (WIP) is the first state. When a team member is actively working on a model, drawing, or document, it lives in the WIP area. Information in WIP is not available to other project parties. It may be incomplete, incorrect, or subject to change at any moment. Only the producing team can access WIP information.\n\nShared is the second state. When the producing team has completed their internal checking and is satisfied that the information is suitable for coordination with other teams, they move it to the Shared area. Information in the Shared state can be seen and used by other project parties for reference and coordination — but it has not yet been formally approved. It is essentially saying: "We are confident in this. Other teams can use it for clash detection and coordination."\n\nPublished is the third state. Information reaches the Published state only after it has been formally reviewed and authorised by the relevant approving party. Published information carries the highest level of authority. It is the information that contractors build from, clients make decisions from, and facilities managers rely upon. Different suitability codes within the Published state indicate the specific purpose for which the information has been authorised — for example, "Approved for Construction" or "As-Built."\n\nArchived is the fourth state. When published information is superseded by a newer revision, the older version moves to the Archive. It is retained for record purposes but is no longer in active use. The Archive is crucial for audit trails and dispute resolution.'
      },
      {
        heading: 'The CDE Workflow in Practice',
        content: 'Understanding the four states is one thing. Seeing how they work in practice is another.\n\nImagine you are a structural engineer on a commercial tower project. You are producing the structural model in Revit. While you are working, the model lives in your WIP area. No one else on the project can see your work in progress.\n\nWhen you have completed the structural frame for the current design stage and your internal QA checks are done, you upload the model to the Shared area. At this point, the MEP engineer can federate your model into their coordination model to check for clashes with ductwork and pipes.\n\nWhen the lead appointed party — perhaps the architect acting as BIM Manager — has reviewed all shared models and the design has been approved by the client for that stage, the models are moved to Published with the appropriate suitability code. These published models are now the authoritative reference for the construction team.\n\nThe previous version of the structural model that was superseded? It moves to Archive. If there is ever a question about what was approved and when, the Archive provides the complete history.\n\nThis workflow is not just administrative tidiness. It is how you prevent a contractor from accidentally building from a draft model that was never approved — one of the most common and costly errors on construction projects.'
      },
      {
        heading: 'CDE Zones and Access Control',
        content: 'A well-configured CDE implements access control aligned to the four states. Not everyone on the project should be able to see all information at all times.\n\nWIP areas are typically accessible only to the producing team. A structural engineer\'s WIP folder is private to the structural team.\n\nShared areas are accessible to all project parties who need to coordinate. In most CDEs, the Shared area is visible to the lead appointed party and to other task teams.\n\nPublished areas are accessible to those who need to act on approved information. This includes the appointing party, main contractor, and subcontractors with a legitimate need.\n\nArchive areas may be restricted to the BIM Manager and relevant project leads for audit purposes.\n\nIn Autodesk Construction Cloud, these zones are implemented through folder-level permission settings. In ProjectWise, they are enforced through workflow states and role-based access. In simpler setups, they may be enforced through naming conventions and agreed protocols. However the technology implements it, the principle is the same: access should match information state and party role.'
      },
      {
        heading: 'Why the CDE Is Central to ISO 19650',
        content: 'If you understand the CDE, you understand the heartbeat of ISO 19650. Almost every other element of the standard connects back to it.\n\nThe information delivery cycle (WIP → Shared → Published → Archived) lives in the CDE.\nThe naming conventions for information containers exist to make files findable within the CDE.\nThe Level of Information Need defines what content must be present in containers before they can progress through CDE states.\nThe suitability codes that mark Published information are managed through the CDE.\nThe audit trail of who approved what and when is maintained by the CDE.\n\nWhen you upload a Revit model to a shared project folder on ACC, assign it a suitability code, and send a notification to the BIM coordinator — you are performing a CDE workflow. You have probably done this before. Now you understand the standard behind it.'
      }
    ],
    takeaways: [
      'The CDE is the agreed, managed platform through which all project information is collected, managed, and distributed.',
      'Information in the CDE progresses through four states: WIP, Shared, Published, and Archived.',
      'WIP is private; Shared is for coordination; Published is authoritative; Archived is for historical record.',
      'Access control in the CDE should match the state of information and the role of the party requesting access.',
      'The CDE is the central mechanism connecting almost every other element of ISO 19650.'
    ],
    resource: 'ISO 19650-1:2018 — Section 4.2 (Common Data Environment) and Annex B',
    prev: 'iso-3',
    next: 'iso-5'
  },
  {
    id: 'iso-5',
    num: 5,
    title: 'Information Containers & Naming',
    topic: 'Naming Conventions',
    cat: 'beginner',
    readTime: '14 min',
    free: false,
    desc: 'Master the ISO 19650 approach to naming information containers consistently, enabling any team member to identify, find, and understand any file without opening it.',
    intro: 'On a large construction project, hundreds or even thousands of information containers — models, drawings, specifications, reports — are produced and exchanged. Without a consistent naming system, finding the right file becomes a project in itself. ISO 19650 establishes clear principles for naming information containers so that any file\'s purpose, origin, status, and revision can be read from its name alone. If you have already studied the naming conventions in the Revit Project Setup Course (ps-5 and ps-6), this lesson provides the ISO 19650 framework that underlies those conventions.',
    sections: [
      {
        heading: 'Why Naming Conventions Matter',
        content: 'File naming might seem like a minor administrative concern. In practice, it is one of the most important disciplines in BIM information management.\n\nConsider a project with 15 discipline teams, each producing models, drawings, schedules, and reports across 12 project stages. That could mean thousands of files in a CDE. Without a consistent naming system:\n\nA contractor downloading the latest structural drawings cannot tell from the filename which revision they are, whether they have been approved, or which building zone they cover.\n\nA BIM coordinator cannot write automated scripts to process files by type or status because filenames are unpredictable.\n\nAn auditor trying to trace who issued what and when cannot establish a clear sequence of events.\n\nA consistent naming convention solves all of these problems. It makes information findable, sortable, automatable, and auditable.'
      },
      {
        heading: 'The ISO 19650 Naming Convention Structure',
        content: 'ISO 19650 Part 1, Section 12 defines a recommended naming convention for information containers. It uses a series of defined fields separated by hyphens, each field encoding specific metadata about the container.\n\nThe recommended fields, in order, are:\n\nProject — a short code identifying the project. For example, "DPBMS" for Dharren Park BIM System.\n\nOriginator — a code identifying the organisation that produced the information. For example, "ARCH" for the architect or "STRUC" for the structural engineer.\n\nVolume or System — identifies the building volume, system, or zone the information relates to. For example, "B1" for Building 1, or "HVAC" for the HVAC system.\n\nLevel or Location — identifies the floor level or spatial location. For example, "L03" for Level 3 or "B02" for Basement 2.\n\nType — identifies the type of information container. Common codes include "M3D" for 3D model, "DR" for drawing, "SP" for specification, and "RP" for report.\n\nRole — identifies the discipline responsible. For example, "A" for architectural, "S" for structural, "M" for mechanical.\n\nNumber — a sequential number to distinguish containers of the same type from the same originator.\n\nPutting these together, a structural engineer\'s model for Level 3 of Building 1 on the DPBMS project might be named: DPBMS-STRUC-B1-L03-M3D-S-0001\n\nAnyone reading that filename immediately knows what it is, who produced it, where it applies, and its sequential number — without opening the file.'
      },
      {
        heading: 'Revision and Status Fields',
        content: 'In addition to the core naming fields, ISO 19650 information containers also carry revision and status metadata. These are typically appended to the filename or stored as properties in the CDE.\n\nThe revision indicator records the history of changes to an information container. ISO 19650 recommends a specific convention: preliminary revisions use a letter-number combination beginning with P (P1, P2, P3...) to indicate work-in-progress iterations. Once information has been formally issued, revisions use a letter-number combination beginning with C (C1, C2, C3...) to indicate contracted or authorised revisions.\n\nThe status code (also called suitability code) indicates the purpose for which the information has been authorised. Common status codes include:\n\nS0 — Work in progress, not for sharing.\nS1 — Suitable for coordination.\nS2 — Suitable for information.\nS3 — Suitable for review and comment.\nS4 — Suitable for construction.\nS5 — Suitable for as-built record.\nS6 — Suitable for archiving.\n\nThese codes appear in the CDE alongside the information container and sometimes appended to the filename. When you see a drawing marked S4, you know it has been approved for construction. When you see S1, you know it is for coordination reference only and should not be used to make construction decisions.'
      },
      {
        heading: 'Metadata and Properties',
        content: 'Naming conventions encode some metadata into the filename itself, but ISO 19650 also relies on metadata stored as properties of the information container in the CDE. This metadata can include:\n\nTitle — a descriptive name for the information container in plain language.\nDescription — additional context about what the container covers.\nDate — the date the container was issued at its current status.\nRevision — the current revision code.\nStatus / Suitability — the current suitability code.\nScale — for drawings, the scale at which they were produced.\nAuthor — the individual or team responsible.\nApprover — the individual who authorised the current status.\n\nIn a CDE like Autodesk Construction Cloud or ProjectWise, these metadata fields are searchable, sortable, and filterable. A BIM coordinator can filter the CDE to show all S4 (suitable for construction) containers issued in the last 30 days across all disciplines — a search that would be impossible without consistent metadata management.'
      },
      {
        heading: 'Applying This in Revit',
        content: 'If you have been working through the Revit Project Setup Course (ps-5 and ps-6), you will recognise much of this. The Revit project browser naming, sheet naming, and model file naming conventions that those lessons cover are direct applications of ISO 19650 naming principles.\n\nIn Revit, the model filename itself is an information container name and should follow the ISO 19650 convention where your project requires it. Revit sheet numbers and names also function as information container identifiers within the model and on issued drawings.\n\nOne practical note: some project clients issue their own naming conventions that adapt the ISO 19650 structure to their specific needs. These project-specific conventions take precedence on that project, but they almost always follow the same field-based logic. Once you understand the ISO 19650 framework, you can read and apply any project naming convention quickly because you understand the principles behind it.'
      }
    ],
    takeaways: [
      'ISO 19650 naming conventions use defined fields to encode project, originator, location, type, role, and number into every filename.',
      'Revision indicators progress from P-series (preliminary) to C-series (contracted/authorised).',
      'Suitability codes (S0 through S6) indicate the purpose for which information has been authorised.',
      'CDE metadata stored as container properties extends what the filename alone can encode.',
      'The Revit naming conventions in ps-5 and ps-6 are direct applications of these ISO 19650 principles.'
    ],
    resource: 'ISO 19650-1:2018 — Section 12 (Metadata for information containers)',
    prev: 'iso-4',
    next: 'iso-6'
  },
  {
    id: 'iso-6',
    num: 6,
    title: 'Level of Information Need (LOIN)',
    topic: 'LOIN',
    cat: 'beginner',
    readTime: '12 min',
    free: false,
    desc: 'Understand the concept of Level of Information Need and how it replaces the older LOD framework to define what information must be present at each project stage.',
    intro: 'One of the most common sources of conflict on BIM projects is a mismatch between what a client expects in a model and what a design team has actually produced. The client expects a detailed, data-rich model; the team has produced a basic massing model. Or the reverse: the team has spent hours adding data the client never needed. The Level of Information Need (LOIN) concept in ISO 19650 exists specifically to prevent this mismatch by defining precisely what information must be present, and when, without requiring more than is necessary.',
    sections: [
      {
        heading: 'The Problem with LOD',
        content: 'Before ISO 19650 introduced LOIN, the construction industry relied on the concept of Level of Detail (LOD), defined in documents like the AIA\'s LOD Specification and the BIMForum\'s LOD tables. LOD levels (100 through 500) described how geometrically detailed a model element should be at each project stage.\n\nLOD 100 meant a simple placeholder. LOD 200 meant approximate geometry. LOD 300 meant accurate geometry. LOD 400 meant fabrication-level geometry. LOD 500 meant as-built.\n\nThe problem with LOD was that it focused almost exclusively on geometry and visual representation. But a model with LOD 400 geometry might contain almost no useful data — no material specifications, no asset tags, no performance data. And a model with relatively simple geometry might contain extremely rich data for facilities management.\n\nGeometry alone does not define whether a model is useful. The usefulness of a model at any given stage depends on what information it contains relative to what is needed at that stage. That is what LOIN addresses.'
      },
      {
        heading: 'What LOIN Defines',
        content: 'Level of Information Need (LOIN) is defined in ISO 19650 as a framework for specifying the detail and extent of information required for a specific purpose at a specific point in the project.\n\nLOIN has three dimensions:\n\nGeometry: the spatial representation of an element — its shape, size, and position. This broadly corresponds to the old LOD concept but is explicitly one component of a larger framework, not the whole story.\n\nDocumentation: non-geometric information attached to or associated with the element. This includes specifications, manufacturer data sheets, test certificates, O&M manuals, warranty records, and any other documentary information required.\n\nBehaviour: how an element performs or functions within the built asset. This covers properties like thermal performance values for a wall, flow rates for a pipe, or load capacity for a structural beam.\n\nBy defining information need across all three dimensions, LOIN ensures that the right geometry, the right documentation, and the right performance data are all present at the right time — and that no team is wasting effort producing information that has not been asked for.'
      },
      {
        heading: 'LOIN at Different Project Stages',
        content: 'LOIN is not a fixed requirement. It changes as the project progresses, reflecting the different decisions that need to be made at each stage.\n\nAt the concept or feasibility stage, very low geometric detail is appropriate — massing volumes and gross floor areas. But even at this stage, some documentation is needed: planning constraints, site surveys, and client brief documents.\n\nAt the design development stage, geometry becomes more detailed as structural grids, floor-to-floor heights, and major system routes are established. Documentation expands to include preliminary specifications. Behaviour data starts to appear for systems that need performance verification.\n\nAt the construction documentation stage, geometry must be accurate enough for fabrication and installation. Documentation must include full specifications, product data, and certification requirements. Behaviour data must be confirmed against design requirements.\n\nAt the handover stage, the information need shifts. Geometry for facilities management can actually be simpler than for construction — an FM team does not need the same geometric precision as a contractor. But documentation and behaviour data requirements increase significantly: every installed component needs its O&M manual, its warranty, its maintenance schedule, and its performance record.\n\nDefining LOIN at each stage is the responsibility of the appointing party and is documented in the Exchange Information Requirement.'
      },
      {
        heading: 'LOIN vs. LOD in Practice',
        content: 'Understanding LOIN helps you have more precise conversations with clients and project teams about what is actually required in a model at any given stage.\n\nWhen a client tells you they need a "LOD 300 model," they are describing a geometric standard. When they use LOIN correctly, they should be telling you: "At this stage, I need walls modelled to their accurate thickness and position (geometry), with their construction specification included as a type parameter (documentation), and with their U-value confirmed as a property (behaviour)."\n\nThat is a much more actionable brief. You know exactly what to produce and what not to waste time on.\n\nFor Revit users, LOIN translates directly into what parameters you fill in, what families you use, and what information you attach to model elements. A wall family with accurate geometry but no type parameters relating to thermal performance, fire rating, or acoustic rating is geometrically complete but informationally incomplete for many project stages. LOIN helps you know which parameters matter when.\n\nIf you have worked through the Revit Course (rv-4 through rv-8, which cover wall, floor, and roof modelling), you were already making decisions about what geometric and data detail to include. LOIN is the formal framework that explains why those decisions matter and how they should be defined by the project brief.'
      },
      {
        heading: 'LOIN as an Introductory Concept',
        content: 'This lesson has introduced LOIN at a conceptual level appropriate for the Beginner tier. As you progress through the Intermediate and Advanced tiers of this course, you will encounter LOIN again in more practical contexts: writing Exchange Information Requirements that specify LOIN at each milestone, translating LOIN requirements into Revit model parameters, and auditing delivered information against LOIN specifications.\n\nFor now, the key insight to take away is this: the question is never just "how detailed is the model?" The question is "does the model contain the right information — geometric, documentary, and behavioural — for the decisions that need to be made at this stage?" That is the LOIN question.'
      }
    ],
    takeaways: [
      'LOIN replaces the LOD framework by addressing geometry, documentation, and behaviour — not just visual detail.',
      'LOIN ensures that the right information is present at the right stage, and that no unnecessary information is produced.',
      'Information needs change at every project stage, from simple massing at concept to rich data at handover.',
      'LOIN requirements are defined by the appointing party in the Exchange Information Requirement.',
      'For Revit users, LOIN directly defines which parameters, families, and data fields must be populated at each stage.'
    ],
    resource: 'ISO 19650-1:2018 — Section 12 (Level of Information Need) and ISO 7817 (LOIN standard)',
    prev: 'iso-5',
    next: 'iso-7'
  },
  {
    id: 'iso-7',
    num: 7,
    title: 'The Appointing & Appointed Parties',
    topic: 'Roles & Responsibilities',
    cat: 'beginner',
    readTime: '13 min',
    free: false,
    desc: 'Understand the key roles defined by ISO 19650 Part 2 — who appoints whom, what each party is responsible for, and how information accountability flows through the project hierarchy.',
    intro: 'A BIM project involves many organisations working simultaneously — architects, structural engineers, MEP consultants, main contractors, subcontractors, and the client. ISO 19650 provides a clear framework for how information responsibility is allocated across these parties. Without this clarity, no one is sure who has approved what, who should be checking whose work, and who is accountable when something is wrong. In this lesson, you will study the ISO 19650 Part 2 framework of appointing and appointed parties, and understand how it maps onto the real-world structure of a construction project.',
    sections: [
      {
        heading: 'The Appointing Party',
        content: 'The appointing party is the organisation that commissions work and specifies what information must be produced. In most cases, the appointing party is the client — also referred to in ISO 19650 as the employer.\n\nThe appointing party\'s primary information management responsibilities are:\n\nIssuing the Exchange Information Requirement (EIR), which defines what information must be delivered, in what format, to what level of information need, and at what milestones.\n\nEstablishing the project\'s information protocol, including the CDE platform and the naming conventions to be used.\n\nAppointing the lead appointed party and formalising the information requirements as part of the appointment contract.\n\nReviewing, accepting, or rejecting information deliverables at each milestone.\n\nThe appointing party does not produce information. It receives, reviews, and acts on information. On a large infrastructure project, the appointing party might be a government transport authority. On a commercial development, it might be a property developer. On a smaller project, it might be a private client represented by a project manager.\n\nIn the Philippines, as BIM requirements become embedded in DPWH projects and large commercial developments, understanding the appointing party role is increasingly important for anyone advising clients on BIM strategy.'
      },
      {
        heading: 'The Lead Appointed Party',
        content: 'The lead appointed party is the organisation that has a direct appointment with the appointing party and is responsible for all information produced by the delivery team.\n\nOn most projects, the lead appointed party is the lead designer — typically the architect — or the main contractor, depending on the contract structure.\n\nThe lead appointed party\'s information management responsibilities are extensive:\n\nProducing and submitting the pre-appointment BIM Execution Plan (pre-BEP) in response to the EIR before the contract is awarded.\n\nRefining and finalising the post-appointment BEP once the contract is in place, including detailed workflows, responsibilities, and tools.\n\nSetting up and managing the CDE for the project, including folder structure, access control, and workflow configuration.\n\nCoordinating all task team information, federating models from different disciplines, and managing clash detection and coordination processes.\n\nReviewing and authorising information before it is moved from Shared to Published in the CDE.\n\nManaging the MIDP (Master Information Delivery Plan), which schedules when each information deliverable will be produced and by whom.\n\nIf you are the BIM Manager on a project, you are most likely fulfilling the lead appointed party\'s information management function, even if you work for one of several organisations involved.'
      },
      {
        heading: 'Task Teams',
        content: 'Task teams are the organisations or individuals who produce information within the delivery team. They are appointed by the lead appointed party, not directly by the client.\n\nA task team might be a structural engineering firm producing structural models and drawings, a specialist facade contractor producing shop drawings, or a civil engineer producing drainage designs.\n\nEach task team is responsible for:\n\nProducing information to the standard defined in the EIR and BEP.\nManaging their own WIP information and internal checking before sharing to the CDE.\nUploading information to the CDE in accordance with agreed naming conventions and workflows.\nParticipating in coordination processes managed by the lead appointed party.\nProducing a Task Information Delivery Plan (TIDP) that details exactly what information they will produce, to what standard, and to what schedule.\n\nThe distinction between the lead appointed party and task teams is important for information responsibility. If a task team uploads incorrect information to the Shared area and it is incorporated into a coordination model, the task team bears responsibility for that error. If the lead appointed party approves and publishes that information without adequate review, both parties may share responsibility.\n\nClarity about these roles is why ISO 19650 insists they be formally defined in appointments and recorded in the BEP.'
      },
      {
        heading: 'Information Delivery Plans',
        content: 'Alongside the role framework, ISO 19650 Part 2 introduces two important planning documents that translate information responsibilities into schedules.\n\nThe Task Information Delivery Plan (TIDP) is produced by each task team. It lists every information container the task team is responsible for producing, the target date for each container reaching Shared status, the target date for each container reaching Published status, and the individual responsible within the task team.\n\nThe Master Information Delivery Plan (MIDP) is produced by the lead appointed party and consolidates all TIDPs into a single master schedule. The MIDP gives the appointing party and the lead appointed party a complete view of what information is due and when, across all task teams.\n\nThese plans are live documents that are updated throughout the project. When a task team\'s structural model is delayed due to design changes, the TIDP is updated and the impact on the MIDP is assessed. This is project information management in practice.\n\nYou will work with TIDPs and MIDPs in detail in Lessons 11 and 12 of this course.'
      },
      {
        heading: 'Mapping Roles to Your Project Reality',
        content: 'It is worth pausing to map these formal ISO 19650 roles onto the typical project structures you will encounter in Philippine practice.\n\nOn a large DPWH infrastructure project, the appointing party is the government. The lead appointed party is likely the design-build contractor or the lead engineering consultant. Task teams include structural, geotechnical, traffic, environmental, and other specialist consultants.\n\nOn a large commercial development, the appointing party is the developer. The lead appointed party during design is the architect. During construction, it may shift to the main contractor. Task teams during design include structural, MEP, civil, and landscape consultants.\n\nOn a smaller project where you are the sole BIM author, you may be simultaneously filling the task team role (producing information) and aspects of the lead appointed party role (managing the CDE and coordinating with the client). ISO 19650 scales to project size — the roles exist regardless of whether they are filled by different organisations or by one versatile individual.\n\nKnowing which role you are filling at any given moment helps you understand what your information management responsibilities are.'
      }
    ],
    takeaways: [
      'The appointing party (client) issues requirements and accepts deliverables; they do not produce information.',
      'The lead appointed party coordinates all delivery team information, manages the CDE, and holds overall information accountability.',
      'Task teams produce information within their discipline and submit it to the CDE according to agreed workflows.',
      'TIDPs (per task team) and MIDPs (consolidated by lead appointed party) schedule all information deliverables.',
      'ISO 19650 roles map onto real project structures regardless of project size — understanding which role you fill defines your responsibilities.'
    ],
    resource: 'ISO 19650-2:2018 — Section 4 (Roles and responsibilities)',
    prev: 'iso-6',
    next: 'iso-8'
  },
  {
    id: 'iso-8',
    num: 8,
    title: 'ISO 19650 vs. BS 1192 & BIM Level 2',
    topic: 'Standards Comparison',
    cat: 'beginner',
    readTime: '11 min',
    free: false,
    desc: 'Understand the relationship between ISO 19650 and its predecessor UK standards — BS 1192 and PAS 1192-2 — and what changed, what stayed the same, and why it matters.',
    intro: 'If you have spoken with BIM professionals trained in the UK, or read older BIM documentation, you will have encountered terms like "BIM Level 2," "PAS 1192," and "BS 1192." These preceded ISO 19650 and remain widely referenced. Understanding the relationship between these frameworks — what ISO 19650 inherited, what it changed, and why — will help you navigate mixed references in project documents and understand the historical context of the standard you are now using.',
    sections: [
      {
        heading: 'A Brief History of UK BIM Standards',
        content: 'The UK\'s structured approach to BIM information management began with BS 1192:2007, a British Standard for collaborative production of architectural, engineering, and construction information. It introduced the Common Data Environment concept and established the four-state workflow (WIP, Shared, Published, Archived) that remains in use today.\n\nIn 2013, PAS 1192-2 extended BS 1192 to specifically address the capital delivery phase of projects. PAS 1192-2 introduced the concept of BIM Level 2 — a maturity level defined by the UK Government\'s BIM Working Group as the target for all centrally procured government construction projects. BIM Level 2 required collaborative, discipline-based models managed through a CDE, with clear information exchange requirements.\n\nPAS 1192-3 followed, addressing information management during the operational phase — the forerunner of what is now ISO 19650 Part 3.\n\nPAS 1192-5 addressed security in BIM — the forerunner of ISO 19650 Part 5.\n\nThese PAS documents, along with BS 1192, formed the UK\'s BIM Level 2 framework. From April 2016, BIM Level 2 became a requirement on all UK central government construction projects, making the UK one of the most structured BIM markets in the world.'
      },
      {
        heading: 'What Changed When ISO 19650 Arrived',
        content: 'In 2018 and 2019, ISO 19650 Parts 1 and 2 were published. The UK then withdrew BS 1192:2007 and replaced it with BS EN ISO 19650, the UK national adoption of the international standard.\n\nISO 19650 retained the vast majority of the concepts established in BS 1192 and PAS 1192-2. The CDE concept is unchanged. The four states are unchanged. The role framework of appointing party, lead appointed party, and task teams maps almost directly onto the previous UK framework.\n\nWhat changed was primarily:\n\nTerminology: Several terms were renamed for international applicability. The "Employer" became the "Appointing Party." The "Employer\'s Information Requirements" became the "Exchange Information Requirements" in Part 1 (though Part 2 retained EIR terminology in many national versions). The "BIM Execution Plan" retained its name but its scope was clarified.\n\nStructure: ISO 19650 formalized the information requirements hierarchy (OIR, AIR, PIR, EIR) more explicitly than PAS 1192.\n\nScope: ISO 19650 is genuinely international, designed to work with different legal and contractual environments rather than being tied to UK law and procurement.\n\nThe UK also introduced its own national annex — BS EN ISO 19650-2 with the UK national annex — which added UK-specific guidance, including retaining "Employer" terminology and providing detailed suitability code tables aligned with UK practice.'
      },
      {
        heading: 'BIM Level 2 vs. ISO 19650 Compliance',
        content: 'A question that frequently arises is: if a project is BIM Level 2 compliant, is it also ISO 19650 compliant? And vice versa?\n\nThe short answer is: a project that was properly BIM Level 2 compliant will have been using the same fundamental concepts as ISO 19650, because ISO 19650 was built on those concepts. The CDE, the four states, the EIR and BEP, the TIDP and MIDP — all of these existed in the BIM Level 2 framework.\n\nHowever, formal ISO 19650 compliance requires explicit adherence to the ISO standard\'s specific requirements, including the updated terminology and the explicit life cycle perspective. A project claiming ISO 19650 compliance must demonstrate that it has implemented the standard\'s requirements — not just broadly similar practices.\n\nFor practitioners today, the practical implication is that knowledge of BIM Level 2 transfers directly to ISO 19650 practice. The concepts are the same. The language is slightly different in places. The scope is wider because ISO 19650 covers the full life cycle, not just capital delivery.'
      },
      {
        heading: 'Maturity Levels: Are They Still Relevant?',
        content: 'BIM Level 2 was part of a UK BIM maturity model that described four levels of BIM sophistication:\n\nLevel 0: Unmanaged CAD, typically 2D drawings only.\nLevel 1: Managed CAD, typically with 2D and 3D drawings on a shared drive.\nLevel 2: Collaborative, discipline-based BIM with a CDE and defined information exchanges.\nLevel 3: Fully integrated, single-model BIM with real-time collaboration and interoperability across the supply chain.\n\nISO 19650 does not use this maturity model. It does not define "levels" of BIM. Instead, it defines a process that should be applied regardless of the maturity of the tools being used. ISO 19650 can be applied with relatively simple tools if the process is followed correctly.\n\nThe maturity model is still sometimes referenced in project briefings and BIM strategies, particularly by teams with a UK training background. When you see it, understand that it is a legacy framing. ISO 19650 supersedes the maturity level concept by focusing on what information is needed and how it is managed, rather than how sophisticated the tools are.'
      },
      {
        heading: 'What This Means for You',
        content: 'In practice, you will encounter both sets of terminology throughout your career, particularly when working with UK-trained consultants, reading older project documentation, or engaging with projects that have UK contractual structures.\n\nBeing able to cross-reference the terms is a practical professional skill. When a project specification references PAS 1192-2 requirements, you will know that these are functionally equivalent to ISO 19650 Part 2 requirements. When someone refers to the "four container states" from BS 1192, you will know they are talking about WIP, Shared, Published, and Archived.\n\nThe most important takeaway is that ISO 19650 did not invent a new way of working. It codified and internationalised a way of working that was already proven. Understanding this heritage helps you approach the standard with confidence: the concepts are established and practical, not theoretical constructs.\n\nWith this lesson, you have completed the Beginner tier of the ISO 19650 Standards Course. In the Intermediate tier, beginning with Lesson 9, you will move from understanding concepts to applying them: writing EIRs, producing BEPs, managing information delivery plans, and controlling the CDE in active project practice.'
      }
    ],
    takeaways: [
      'ISO 19650 evolved directly from UK standards BS 1192:2007 and PAS 1192-2:2013, which introduced the CDE, four-state workflow, and BIM Level 2.',
      'The core concepts of ISO 19650 are unchanged from BIM Level 2; the main differences are terminology, structure, and international scope.',
      'BIM Level 2 compliance and ISO 19650 compliance are closely aligned but not formally identical.',
      'ISO 19650 does not use the BIM maturity levels (Level 0-3) — it defines a process, not a maturity model.',
      'Knowledge of BIM Level 2 and BS 1192 transfers directly to ISO 19650 practice; the frameworks are deeply connected.'
    ],
    resource: 'BS EN ISO 19650-2:2018 (UK National Annex) — Introduction and Annex A',
    prev: 'iso-7',
    next: 'iso-9'
  }
];
