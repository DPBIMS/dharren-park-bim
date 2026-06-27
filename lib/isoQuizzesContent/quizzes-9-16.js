export const quizzes_9_16 = [
  {
    lessonId: 'iso-9',
    lessonTitle: "Employer's Information Requirements (EIR)",
    passingScore: 75,
    questions: [
      {
        id: 'iso9-q1',
        type: 'mcq',
        question: 'A property developer issues a document to all tendering consultants that specifies what BIM models and data must be delivered at each project stage, in what formats, and by when. This document is the:',
        options: [
          'BIM Execution Plan',
          'Exchange Information Requirement',
          'Master Information Delivery Plan',
          'Asset Information Requirement'
        ],
        answer: 'Exchange Information Requirement',
        explanation: 'The Exchange Information Requirement (EIR) is issued by the appointing party and defines all information that must be delivered across the project life cycle. It is the foundational brief for all information management.'
      },
      {
        id: 'iso9-q2',
        type: 'mcq',
        question: 'You are reviewing an EIR before your firm commits to an appointment. The EIR requires Level of Information Need equivalent to fabrication-ready geometry with full COBie data at the end of the scheme design stage. What is the most appropriate response?',
        options: [
          'Accept the requirement as the client always knows best',
          'Flag this as an unrealistic LOIN requirement for that stage and seek clarification before appointment',
          'Produce the required information and claim additional fees later',
          'Ignore the LOIN requirement as it is not legally enforceable'
        ],
        answer: 'Flag this as an unrealistic LOIN requirement for that stage and seek clarification before appointment',
        explanation: 'Critical EIR review before appointment is essential. Fabrication-ready geometry and full COBie data at scheme design stage is unrealistic and would commit the team to deliverables they cannot reasonably produce. This must be raised before contract, not discovered after.'
      },
      {
        id: 'iso9-q3',
        type: 'truefalse',
        question: 'True or False: The EIR is a document that the appointed party produces and submits to the appointing party at the start of the project.',
        answer: 'False',
        explanation: 'The EIR is produced by the appointing party (the client), not the appointed party. The appointed party responds to the EIR with the BIM Execution Plan. Confusing who produces which document is one of the most common ISO 19650 misconceptions.'
      },
      {
        id: 'iso9-q4',
        type: 'mcq',
        question: 'Which of the following is classified as a "commercial requirement" in the EIR?',
        options: [
          'The BIM authoring software version to be used',
          'The frequency of BIM coordination meetings',
          'Intellectual property rights for information produced',
          'The naming convention for information containers'
        ],
        answer: 'Intellectual property rights for information produced',
        explanation: 'Commercial requirements address the business and contractual aspects of information delivery — including IP rights, liability, scope and fee alignment, and insurance. Technical requirements cover software and formats; management requirements cover workflows and meetings.'
      },
      {
        id: 'iso9-q5',
        type: 'mcq',
        question: 'An EIR requires that at the construction documentation milestone, all models be delivered in IFC 4.0 format. Your current Revit version reliably exports only IFC 2x3. This is an example of:',
        options: [
          'A LOIN non-compliance',
          'A technical risk that must be identified and raised before appointment',
          'A commercial requirement that can be negotiated after contract',
          'A management gap in the EIR that the BIM Manager will resolve'
        ],
        answer: 'A technical risk that must be identified and raised before appointment',
        explanation: 'Software capability mismatches with EIR technical requirements are risks that must be identified at EIR review, before appointment. Discovering them after contract creates scope conflicts and potential additional costs.'
      },
      {
        id: 'iso9-q6',
        type: 'fillintheblank',
        question: 'The three categories of requirement in a well-structured EIR are: technical requirements, management requirements, and ___ requirements.',
        answer: 'commercial',
        explanation: 'The EIR is structured around technical requirements (tools and formats), management requirements (workflows and roles), and commercial requirements (scope, fees, IP, and liability).'
      },
      {
        id: 'iso9-q7',
        type: 'mcq',
        question: 'A client issues an EIR with a vague requirement: "A fully coordinated BIM model must be delivered." No LOIN specification, format, or delivery date is given. What is the risk to the appointed party?',
        options: [
          'No risk — a vague requirement is easier to satisfy than a detailed one',
          'The appointed party can interpret the requirement however suits them',
          'Ambiguity creates risk that what is delivered will not satisfy the client, leading to disputes about completeness and compliance',
          'Vague requirements are automatically removed by the CDE workflow'
        ],
        answer: 'Ambiguity creates risk that what is delivered will not satisfy the client, leading to disputes about completeness and compliance',
        explanation: 'EIR ambiguity is a significant risk. Without LOIN specifications, format definitions, and milestone dates, the appointed party cannot know exactly what is expected, and the client may reject deliverables that do not match their unexpressed expectations.'
      },
      {
        id: 'iso9-q8',
        type: 'truefalse',
        question: 'True or False: Once a project begins, the EIR is filed away as a reference document and replaced by the BEP as the active information management guide.',
        answer: 'False',
        explanation: 'The EIR remains an active reference throughout the project. Every BIM decision should be traceable back to it. The BEP is the plan for meeting the EIR — both documents remain active and aligned throughout the project.'
      },
      {
        id: 'iso9-q9',
        type: 'mcq',
        question: 'On a large DPWH infrastructure project, the EIR specifies that at the design completion milestone, the client requires models for review before approving the design for construction. This type of milestone exchange is:',
        options: [
          'An information-only exchange',
          'A decision-making exchange',
          'A contractual deliverable exchange',
          'An archiving exchange'
        ],
        answer: 'A decision-making exchange',
        explanation: 'A decision-making exchange is where the appointing party reviews information and approves or rejects progression to the next stage. In this case, the client must review and approve the design before construction begins — this is a decision gate, not just information sharing.'
      },
      {
        id: 'iso9-q10',
        type: 'mcq',
        question: 'An EIR is incorporated as a schedule to the appointment contract. A consultant delivers models that do not meet the specified LOIN at the required milestone. What is the contractual consequence?',
        options: [
          'No consequence — the EIR is an aspirational document, not a contractual obligation',
          'The consultant must simply update the models in the next revision without any formal consequence',
          'Non-delivery of compliant information constitutes a breach of contract',
          'The appointing party is responsible for accepting any information that is delivered'
        ],
        answer: 'Non-delivery of compliant information constitutes a breach of contract',
        explanation: 'When the EIR is incorporated into the appointment contract, delivery of non-compliant information constitutes a breach of contract. This is why critical EIR review before appointment — and realistic commitment to its requirements — is essential.'
      }
    ]
  },
  {
    lessonId: 'iso-10',
    lessonTitle: 'Writing the BIM Execution Plan (BEP)',
    passingScore: 75,
    questions: [
      {
        id: 'iso10-q1',
        type: 'mcq',
        question: 'A main contractor submits a BIM document as part of their tender bid demonstrating they understand the EIR and have the capability to deliver. This document is the:',
        options: [
          'Post-appointment BEP',
          'Pre-appointment BEP',
          'MIDP',
          'Task Information Delivery Plan'
        ],
        answer: 'Pre-appointment BEP',
        explanation: 'The pre-appointment BEP is submitted before contract award as part of the tender process. It demonstrates intent, capability, and understanding of the EIR. It is necessarily high-level at this stage.'
      },
      {
        id: 'iso10-q2',
        type: 'mcq',
        question: 'The post-appointment BEP differs from the pre-appointment BEP primarily because:',
        options: [
          'It is written by the appointing party instead of the appointed party',
          'It is a fully detailed, project-specific plan developed after contract award with confirmed team structures and workflows',
          'It replaces the EIR as the primary information management document',
          'It is only submitted at project completion as a record of what was done'
        ],
        answer: 'It is a fully detailed, project-specific plan developed after contract award with confirmed team structures and workflows',
        explanation: 'The post-appointment BEP refines the pre-appointment version into a fully resolved, project-specific plan with confirmed team structures, specific software versions, detailed CDE configuration, and milestone dates aligned with the programme.'
      },
      {
        id: 'iso10-q3',
        type: 'truefalse',
        question: 'True or False: The BEP should include the specific Revit version, the CDE platform, and the file formats to be used, because each of these has implications for LOIN, workflow, and inter-team compatibility.',
        answer: 'True',
        explanation: 'The standards, methods, and procedures section of the BEP defines the exact tools — software versions, formats, CDE platform — because mismatches in these create coordination failures. This specificity is intentional.'
      },
      {
        id: 'iso10-q4',
        type: 'mcq',
        question: 'A hospital project BEP states that one of the BIM uses is "FM data handover." How does this stated BIM use affect the project team\'s modelling approach compared to a project where BIM is used only for design coordination?',
        options: [
          'No difference — BIM use statements are aspirational and do not affect modelling',
          'The team must produce geometry at a higher LOD for FM handover',
          'The team must populate richer element data parameters (documentation and behaviour) to support FM use, beyond what is needed for coordination only',
          'The team can use simpler geometry since FM only needs 2D plans'
        ],
        answer: 'The team must populate richer element data parameters (documentation and behaviour) to support FM use, beyond what is needed for coordination only',
        explanation: 'BIM uses directly affect LOIN requirements. FM data handover requires documentation (manuals, warranties) and behaviour (performance data) across all installed assets — significantly more than what is needed for design coordination alone.'
      },
      {
        id: 'iso10-q5',
        type: 'mcq',
        question: 'The BEP specifies that the project shared coordinates use the Philippine Reference System 1992 (PRS92) with the project base point at a defined northing and easting. Why is this level of detail critical in the BEP?',
        options: [
          'It is required by the Revit software for file creation',
          'Misaligned coordinates between discipline models mean federated models do not overlay correctly, invalidating all clash detection',
          'It is a legal requirement under Philippine building regulations',
          'Coordinate specifications are only important for civil and infrastructure projects, not buildings'
        ],
        answer: 'Misaligned coordinates between discipline models mean federated models do not overlay correctly, invalidating all clash detection',
        explanation: 'Coordinate system definition is one of the most critical technical specifications in the BEP. If discipline teams model in different coordinate systems or with different base points, their models cannot be correctly federated and clash detection results are meaningless.'
      },
      {
        id: 'iso10-q6',
        type: 'fillintheblank',
        question: 'The section of the BEP that defines the exact software versions, file formats, coordinate system, naming conventions, model breakdown structure, and CDE configuration is called the standards, methods, and ___ section.',
        answer: 'procedures',
        explanation: 'The standards, methods, and procedures section is the technical core of the BEP. It defines the specific tools and processes all parties must follow, making it the most detailed and practically significant section.'
      },
      {
        id: 'iso10-q7',
        type: 'mcq',
        question: 'During a project, the main contractor replaces a subcontractor with a different firm. How should this change be reflected in the BEP?',
        options: [
          'The BEP does not need updating for personnel or subcontractor changes',
          'A new BEP must be written from scratch',
          'The post-appointment BEP is updated to reflect the new team structure and the updated TIDP from the new subcontractor',
          'The pre-appointment BEP is revised and resubmitted to the client'
        ],
        answer: 'The post-appointment BEP is updated to reflect the new team structure and the updated TIDP from the new subcontractor',
        explanation: 'The post-appointment BEP is a live document. Significant team changes must be reflected in updated team structure sections and new TIDPs from the incoming team. This ensures information responsibilities remain clear throughout the project.'
      },
      {
        id: 'iso10-q8',
        type: 'truefalse',
        question: 'True or False: The BEP delivery schedule section is the same as the MIDP — both contain the complete item-by-item list of all information containers and their delivery dates.',
        answer: 'False',
        explanation: 'The BEP delivery schedule is a high-level milestone schedule that confirms the appointed party understands the EIR requirements and that the programme is achievable. The MIDP is the detailed item-by-item schedule of every individual container. They are related but not the same document.'
      },
      {
        id: 'iso10-q9',
        type: 'mcq',
        question: 'A BEP states that BIM will be used for "construction sequencing and 4D planning." Which additional tool beyond Revit would typically need to be specified in the BEP to support this use?',
        options: [
          'AutoCAD Civil 3D',
          'Autodesk Navisworks Timeliner or a similar 4D scheduling tool',
          'Adobe Acrobat Pro',
          'Microsoft Excel only'
        ],
        answer: 'Autodesk Navisworks Timeliner or a similar 4D scheduling tool',
        explanation: '4D construction sequencing requires linking model geometry to project schedules. Navisworks Timeliner or similar 4D tools do this. The BEP must specify these tools because task teams need to produce model geometry compatible with 4D software requirements.'
      },
      {
        id: 'iso10-q10',
        type: 'mcq',
        question: 'You are the BIM Manager preparing a BEP for a hospital project. The EIR requires COBie data output at handover. In which section of the BEP would you define the COBie data requirements and the export process?',
        options: [
          'Project information section',
          'BIM goals and uses section',
          'Standards, methods, and procedures section',
          'Delivery milestone schedule section'
        ],
        answer: 'Standards, methods, and procedures section',
        explanation: 'The standards, methods, and procedures section covers file formats and exchange formats — including COBie output requirements, the specific COBie schema version, how it will be generated, and what data must be populated. This is where technical delivery processes are defined.'
      }
    ]
  },
  {
    lessonId: 'iso-11',
    lessonTitle: 'The Master Information Delivery Plan (MIDP)',
    passingScore: 75,
    questions: [
      {
        id: 'iso11-q1',
        type: 'mcq',
        question: 'An architectural firm on a large mixed-use project lists every drawing sheet, model file, specification, and report they are responsible for, along with the dates by which each will reach Shared and Published status. This document is their:',
        options: [
          'Master Information Delivery Plan',
          'Task Information Delivery Plan',
          'BIM Execution Plan',
          'Project Information Requirement'
        ],
        answer: 'Task Information Delivery Plan',
        explanation: 'The TIDP is produced by each individual task team. It lists every information container that team is responsible for producing, with target Shared and Published dates. The MIDP consolidates all TIDPs into a project-wide schedule.'
      },
      {
        id: 'iso11-q2',
        type: 'mcq',
        question: 'Which party is responsible for producing and managing the MIDP throughout the project?',
        options: [
          'The appointing party (client)',
          'Each task team independently',
          'The lead appointed party',
          'The CDE platform provider'
        ],
        answer: 'The lead appointed party',
        explanation: 'The MIDP is produced and managed by the lead appointed party. It consolidates all task team TIDPs into a single project-wide delivery schedule, giving the lead appointed party and appointing party visibility of all information delivery across the project.'
      },
      {
        id: 'iso11-q3',
        type: 'truefalse',
        question: 'True or False: The MIDP replaces individual task team TIDPs once it is compiled, and task teams no longer need to maintain their own TIDPs.',
        answer: 'False',
        explanation: 'The MIDP consolidates TIDPs but does not replace them. Each task team continues to maintain their own TIDP as their internal production schedule. The MIDP provides the project-wide consolidated view; TIDPs provide the task-team-level detail.'
      },
      {
        id: 'iso11-q4',
        type: 'mcq',
        question: 'The structural engineering team notifies the lead appointed party that their column layout model will be two weeks late reaching Shared status. An MEP team needs this model before they can begin primary duct routing. What MIDP concept does this illustrate?',
        options: [
          'Suitability code management',
          'Information dependency management and critical path in the delivery schedule',
          'Appointing party validation',
          'LOIN revision'
        ],
        answer: 'Information dependency management and critical path in the delivery schedule',
        explanation: 'This illustrates a MIDP dependency: the MEP team cannot start their work without the structural model. When the structural model is delayed, the dependency is activated and the MEP team\'s schedule is at risk. Mapping dependencies in the MIDP reveals these critical paths.'
      },
      {
        id: 'iso11-q5',
        type: 'mcq',
        question: 'A TIDP lists "All MEP Drawings" as a single line item due on 15 March. What is the problem with this approach?',
        options: [
          'The date format is incorrect for ISO 19650',
          'MEP drawings should be in the MIDP, not the TIDP',
          'Insufficient granularity — each individual information container should have its own line item with its own delivery dates',
          'The TIDP should only list model files, not drawings'
        ],
        answer: 'Insufficient granularity — each individual information container should have its own line item with its own delivery dates',
        explanation: 'One of the most common MIDP failures is insufficient granularity. "All MEP Drawings" as a single item provides no useful management information. Each drawing sheet and model file should be a separate line item so progress can be tracked at the container level.'
      },
      {
        id: 'iso11-q6',
        type: 'fillintheblank',
        question: 'In a TIDP, two dates are typically recorded for each information container: the ___ date (when the producing team commits to having it in the Shared area) and the Published date.',
        answer: 'Shared',
        explanation: 'Each TIDP line item records both the Shared date (when the task team commits to having the container checked and in the Shared area) and the Published date (when the container is expected to receive approval and move to Published).'
      },
      {
        id: 'iso11-q7',
        type: 'mcq',
        question: 'How frequently should the MIDP status be reviewed during active project delivery?',
        options: [
          'Once at the start of the project and once at the end',
          'Only at formal client milestone reviews',
          'Regularly — ideally fortnightly — aligned with BIM coordination meetings',
          'Only when a task team reports a problem'
        ],
        answer: 'Regularly — ideally fortnightly — aligned with BIM coordination meetings',
        explanation: 'A MIDP that is only reviewed at major milestones is already out of date. Regular fortnightly reviews aligned with coordination meetings keep the MIDP current and allow early identification and mitigation of delivery risks.'
      },
      {
        id: 'iso11-q8',
        type: 'truefalse',
        question: 'True or False: An MIDP that shows all deliverables on track but has not been updated in six weeks is a reliable management tool.',
        answer: 'False',
        explanation: 'An MIDP that is not regularly updated does not reflect the current state of information delivery. A stale MIDP showing "on track" when actual delivery has slipped is worse than no MIDP, as it gives false confidence to the lead appointed party and client.'
      },
      {
        id: 'iso11-q9',
        type: 'mcq',
        question: 'A task team submits a TIDP where every deliverable has the same date — the final project milestone. What is wrong with this approach?',
        options: [
          'Nothing — final delivery is all that matters',
          'The TIDP should have different dates for Shared and Published but everything can share the same date',
          'It provides no ability to track progress through the project, identify risks early, or manage inter-team dependencies that require earlier deliveries',
          'TIDPs should not be submitted before the final milestone'
        ],
        answer: 'It provides no ability to track progress through the project, identify risks early, or manage inter-team dependencies that require earlier deliveries',
        explanation: 'A TIDP with all deliverables on the final date is not a delivery plan — it is just a list of deliverables. Genuine delivery planning requires milestone-based scheduling that allows progress tracking, early risk identification, and dependency management throughout the project.'
      },
      {
        id: 'iso11-q10',
        type: 'mcq',
        question: 'For a Revit team, which of the following best describes how their Revit model files relate to their TIDP?',
        options: [
          'Revit model files are not information containers and should not appear in TIDPs',
          'Each Revit model file that the team is responsible for should correspond to at least one TIDP line item with its naming, target dates, and applicable LOIN',
          'All Revit files should be combined into a single TIDP line item',
          'TIDPs only cover drawings and documents, not model files'
        ],
        answer: 'Each Revit model file that the team is responsible for should correspond to at least one TIDP line item with its naming, target dates, and applicable LOIN',
        explanation: 'Every information container — including Revit model files — should have a corresponding TIDP line item. This connects the information management plan to the actual production work, making the TIDP a genuine scheduling tool rather than an administrative exercise.'
      }
    ]
  },
  {
    lessonId: 'iso-12',
    lessonTitle: 'Information Production — The Delivery Cycle',
    passingScore: 75,
    questions: [
      {
        id: 'iso12-q1',
        type: 'mcq',
        question: 'A Revit author has completed modelling all the structural columns and beams for the current design stage. Before uploading to the Shared area, they should:',
        options: [
          'Upload immediately to give other teams the most current information',
          'Complete internal QA checks covering geometry, data, standards compliance, and model health before moving to Shared',
          'Get approval from the client before sharing with other task teams',
          'Apply the S4 suitability code before uploading to Shared'
        ],
        answer: 'Complete internal QA checks covering geometry, data, standards compliance, and model health before moving to Shared',
        explanation: 'The internal QA check (Step 2 of the delivery cycle) must happen before information enters the Shared area. Sharing unchecked information risks other teams coordinating against incorrect or incomplete data.'
      },
      {
        id: 'iso12-q2',
        type: 'mcq',
        question: 'During federated model review, the BIM coordinator discovers that a HVAC duct passes through a structural beam. This is classified as:',
        options: [
          'A soft clash',
          'A workflow clash',
          'A hard clash',
          'A coordination note'
        ],
        answer: 'A hard clash',
        explanation: 'A hard clash is a physical interference between elements from different models — in this case, a duct physically occupying the same space as a structural beam. Hard clashes must be resolved before construction can proceed in that area.'
      },
      {
        id: 'iso12-q3',
        type: 'truefalse',
        question: 'True or False: The information delivery cycle is a one-time linear process — once information reaches Published status, the cycle is complete.',
        answer: 'False',
        explanation: 'The delivery cycle is a repeating loop. It repeats at each milestone and for each information exchange. After one milestone is completed with Published information, the cycle begins again for the next milestone with new or updated requirements.'
      },
      {
        id: 'iso12-q4',
        type: 'mcq',
        question: 'An MEP model has been through the coordination review and all priority clashes are resolved. The lead appointed party reviews the complete package against the EIR. This activity corresponds to which step in the delivery cycle?',
        options: [
          'Generate',
          'Check',
          'Review',
          'Approve'
        ],
        answer: 'Approve',
        explanation: 'The Approve step is where the lead appointed party reviews the coordinated information package against EIR requirements and acts as the quality gate before the appointing party validation. It is distinct from the cross-discipline Review step.'
      },
      {
        id: 'iso12-q5',
        type: 'mcq',
        question: 'An electrical engineer models all cable trays at correct position but within 50mm of a structural beam — no physical intersection, but no maintenance clearance is maintained. This is classified as:',
        options: [
          'A hard clash',
          'A workflow clash',
          'A soft clash or clearance clash',
          'Not a clash — the elements do not intersect'
        ],
        answer: 'A soft clash or clearance clash',
        explanation: 'A soft or clearance clash occurs when elements do not physically interfere but violate required clearance zones — such as maintenance access requirements around electrical equipment or structural members.'
      },
      {
        id: 'iso12-q6',
        type: 'fillintheblank',
        question: 'In the delivery cycle, the step where multiple discipline models are combined in software like Navisworks and reviewed for conflicts is called the ___ step.',
        answer: 'Review',
        explanation: 'The Review step is the cross-discipline coordination phase where the lead appointed party federates Shared-status models and runs clash detection. It is distinct from the internal Check (step 2) that the task team performs on their own information.'
      },
      {
        id: 'iso12-q7',
        type: 'mcq',
        question: 'A structural model is submitted for approval but is returned by the lead appointed party with review comments. What must happen before the model can be resubmitted?',
        options: [
          'The task team applies an S4 code and resubmits without changes',
          'The task team addresses the review comments, updates the model in WIP, re-runs their internal check, moves back to Shared, and then goes through the approval step again',
          'The lead appointed party applies the comments themselves and approves the model',
          'The model is automatically archived and a new model is started'
        ],
        answer: 'The task team addresses the review comments, updates the model in WIP, re-runs their internal check, moves back to Shared, and then goes through the approval step again',
        explanation: 'A model that fails approval returns to the task team and must go through the full cycle again: WIP revision, internal check, Shared, and re-approval. The cycle repeats until the information meets the required standard.'
      },
      {
        id: 'iso12-q8',
        type: 'truefalse',
        question: 'True or False: Archived information can be permanently deleted once a newer revision has been published, as it is no longer needed for the project.',
        answer: 'False',
        explanation: 'Archived information must be retained — not deleted. The archive provides the complete revision history, audit trail, evidence for dispute resolution, and historical record of what was approved and when throughout the project.'
      },
      {
        id: 'iso12-q9',
        type: 'mcq',
        question: 'During the Generate step of the delivery cycle, a Revit author notices Revit warnings about walls slightly misaligned with their bounding volumes. What is the correct action?',
        options: [
          'Ignore the warnings — they are cosmetic and do not affect information quality',
          'Move the model to Shared immediately so the BIM coordinator can assess the warnings',
          'Address the warnings as part of the generate step, since they affect model health and should be resolved before internal checking',
          'Archive the model and start a new one'
        ],
        answer: 'Address the warnings as part of the generate step, since they affect model health and should be resolved before internal checking',
        explanation: 'Model health — including Revit warnings — should be actively managed during the Generate step. Critical warnings should be resolved before the internal check step, not pushed to coordination or discovered at approval.'
      },
      {
        id: 'iso12-q10',
        type: 'mcq',
        question: 'The appointing party formally accepts the published information package for the design development milestone and signs off on progression to construction documentation. This represents which step of the delivery cycle?',
        options: [
          'Generate',
          'Check',
          'Approve (appointing party validation level)',
          'Archive'
        ],
        answer: 'Approve (appointing party validation level)',
        explanation: 'The appointing party\'s formal sign-off on a milestone package represents the approval step at the appointing party validation level — the second level of the two-level approval process (lead appointed party quality gate, then appointing party validation).'
      }
    ]
  },
  {
    lessonId: 'iso-13',
    lessonTitle: 'Suitability Codes & Issue Management',
    passingScore: 75,
    questions: [
      {
        id: 'iso13-q1',
        type: 'mcq',
        question: 'A contractor downloads a set of structural drawings from the CDE. The drawings are marked S3. Can the contractor use these for construction?',
        options: [
          'Yes — S3 means the drawings are fully approved',
          'No — S3 means the drawings are suitable for review and comment, not for construction',
          'Yes — any Published drawing can be used for construction',
          'No — only drawings marked S0 are suitable for construction'
        ],
        answer: 'No — S3 means the drawings are suitable for review and comment, not for construction',
        explanation: 'S3 (Suitable for review and comment) means the information is at a stage where formal review is requested. It is not approved for construction. S4 is the suitability code that authorises construction use.'
      },
      {
        id: 'iso13-q2',
        type: 'mcq',
        question: 'At project completion, the as-built drawings reflect exactly what was built, incorporating all site instructions and design changes. What suitability code should these carry?',
        options: [
          'S3',
          'S4',
          'S5',
          'S6'
        ],
        answer: 'S5',
        explanation: 'S5 (Suitable for as-built record) is applied to information that reflects what has actually been constructed. As-built documentation is issued at the end of construction with this code before being handed over to the client.'
      },
      {
        id: 'iso13-q3',
        type: 'truefalse',
        question: 'True or False: A task team can self-assign an S4 suitability code to their own information without going through the formal approval process.',
        answer: 'False',
        explanation: 'S4 must only be applied by the authorised approving party after the full formal approval process. Self-assigning S4 without approval creates legal exposure, as contractors may rely on construction documents that have not been properly reviewed.'
      },
      {
        id: 'iso13-q4',
        type: 'mcq',
        question: 'A structural engineer issues their column layout model to the MEP team specifically so the MEP team can begin routing primary services around the structural grid, while the structural design is still being finalised. Which suitability code is most appropriate?',
        options: [
          'S2 — Suitable for information',
          'S1 — Suitable for coordination',
          'S4 — Suitable for construction',
          'S5 — Suitable for as-built record'
        ],
        answer: 'S1 — Suitable for coordination',
        explanation: 'S1 (Suitable for coordination) is used when information is ready for other disciplines to coordinate against, but is not yet formally approved for construction or design completion. This is exactly the scenario described: the MEP team can begin routing but the structural design is not finalised.'
      },
      {
        id: 'iso13-q5',
        type: 'mcq',
        question: 'Which of the following must a valid transmittal record include?',
        options: [
          'Only the date and the name of the file being issued',
          'Date, issuing party, receiving party, list of containers with IDs and suitability codes, purpose of issue, and response required',
          'Only the suitability code and the file name',
          'A physical signature from the client representative'
        ],
        answer: 'Date, issuing party, receiving party, list of containers with IDs and suitability codes, purpose of issue, and response required',
        explanation: 'A complete transmittal record must capture all elements necessary to create a legally auditable record of the information exchange: parties, containers, suitability codes, purpose, and any response requirement. Partial transmittals create gaps in the audit trail.'
      },
      {
        id: 'iso13-q6',
        type: 'fillintheblank',
        question: 'A formal query raised by one project party requesting clarification, additional information, or a decision from another party is called a ___ (use the full abbreviation).',
        answer: 'RFI',
        explanation: 'A Request for Information (RFI) is the formal mechanism for one project party to query another. Under ISO 19650, RFIs must be formally logged, tracked, responded to within defined timeframes, and formally closed.'
      },
      {
        id: 'iso13-q7',
        type: 'mcq',
        question: 'A site supervisor verbally asks the architect whether a column can be shifted 200mm and acts on the verbal answer without raising a formal RFI. Three months later, there is a dispute about whether the shift was approved. What is the problem?',
        options: [
          'The column shift was technically incorrect',
          'There is no formal record of what was asked, what was answered, or whether the shift was properly authorised',
          'The architect should have issued new drawings immediately',
          'Verbal answers are always sufficient on site'
        ],
        answer: 'There is no formal record of what was asked, what was answered, or whether the shift was properly authorised',
        explanation: 'This illustrates exactly why formal RFI management exists. Verbal queries and answers create no record. When disputes arise, there is no evidence of what was asked, who answered, or whether the answer constituted a formal design change approval.'
      },
      {
        id: 'iso13-q8',
        type: 'truefalse',
        question: 'True or False: When a design change is approved, the relevant Revit model files should receive a new revision number, with revision clouds on affected drawing sheets, before being uploaded to WIP and progressing through the delivery cycle.',
        answer: 'True',
        explanation: 'Approved design changes must be implemented through controlled revision of the relevant information containers. In Revit, this means updating the revision number, adding revision clouds on affected sheets, and progressing the updated model through the full WIP-Check-Share-Approve cycle.'
      },
      {
        id: 'iso13-q9',
        type: 'mcq',
        question: 'An automated CDE platform generates a transmittal record every time information is formally issued from one party to another. What is the primary benefit of this automated record-keeping?',
        options: [
          'It reduces the need for the BIM Manager',
          'It creates a fully auditable history of every formal information exchange without relying on manual record-keeping',
          'It automatically applies the correct suitability code to all documents',
          'It prevents task teams from uploading to the Shared area without permission'
        ],
        answer: 'It creates a fully auditable history of every formal information exchange without relying on manual record-keeping',
        explanation: 'Automated transmittal generation creates a comprehensive, reliable audit trail of every information exchange. This supports dispute resolution, compliance demonstration, and quality management without depending on individuals remembering to create manual records.'
      },
      {
        id: 'iso13-q10',
        type: 'mcq',
        question: 'An architect discovers that a set of drawings they issued with S4 (Suitable for construction) status contains an error in the grid dimensions. What is the correct process?',
        options: [
          'Quietly update the drawings in the CDE without notifying the contractor',
          'Formally issue a revised set of drawings with an updated C-series revision number, notify all affected parties through a formal transmittal, and assess whether any construction work done to the incorrect drawings requires rework',
          'Archive the incorrect drawings and issue new ones with the same revision number',
          'Issue a verbal instruction to the site team to use the correct dimensions'
        ],
        answer: 'Formally issue a revised set of drawings with an updated C-series revision number, notify all affected parties through a formal transmittal, and assess whether any construction work done to the incorrect drawings requires rework',
        explanation: 'Corrections to S4 information must follow the full formal change process: revised containers with updated revision codes, formal transmittal to all affected parties, and assessment of construction impact. Quietly correcting errors without notification creates liability and rework risk.'
      }
    ]
  },
  {
    lessonId: 'iso-14',
    lessonTitle: 'Collaborative Production of Information',
    passingScore: 75,
    questions: [
      {
        id: 'iso14-q1',
        type: 'mcq',
        question: 'A MEP team begins routing primary ductwork based on their assumption of where structural beams will be, because the structural model has not yet been shared. Three weeks later the structural model is released and the ductwork conflicts with the beam positions. This failure is best described as:',
        options: [
          'A hard clash caused by poor modelling',
          'A dependency management failure — the MEP team should have waited for the structural Shared model before beginning routing',
          'A LOIN non-compliance by the structural team',
          'A CDE platform failure'
        ],
        answer: 'A dependency management failure — the MEP team should have waited for the structural Shared model before beginning routing',
        explanation: 'This is a classic dependency management failure. The MIDP should have recorded that the MEP team\'s ductwork routing depends on the structural model reaching Shared status. The MEP team should have waited, and the lead appointed party should have managed this dependency.'
      },
      {
        id: 'iso14-q2',
        type: 'mcq',
        question: 'An Information Responsibility Matrix maps every information container to its producer, its dependent teams, the LOIN required, and the milestone at which it must be available. What problem does this document solve?',
        options: [
          'It replaces the BEP as the primary information management document',
          'It makes the web of information dependencies visible so the lead appointed party can sequence releases and prevent teams from working to unvalidated assumptions',
          'It automatically generates transmittals when containers are issued',
          'It defines the suitability codes for each container type'
        ],
        answer: 'It makes the web of information dependencies visible so the lead appointed party can sequence releases and prevent teams from working to unvalidated assumptions',
        explanation: 'The IRM makes the full dependency network visible in a single document, allowing the lead appointed party to sequence information releases logically. Without this visibility, teams work to assumptions that may later be invalidated — causing rework.'
      },
      {
        id: 'iso14-q3',
        type: 'truefalse',
        question: 'True or False: BIM coordination meetings should only be held at formal client milestone reviews, not more frequently during active production phases.',
        answer: 'False',
        explanation: 'BIM coordination meetings should be held regularly during active production phases — not just at client milestone reviews. Their purpose is to track MIDP status, manage clashes, and review dependencies, which requires frequent engagement during production.'
      },
      {
        id: 'iso14-q4',
        type: 'mcq',
        question: 'On a large hospital project, which of the following is an example of a discipline interface that should be formally defined in an interface register?',
        options: [
          'The colour scheme for the reception area',
          'The connection between the structural frame and the facade system, defining fixity point responsibility and connection design responsibility',
          'The project manager\'s reporting line to the client',
          'The CDE folder structure for archived documents'
        ],
        answer: 'The connection between the structural frame and the facade system, defining fixity point responsibility and connection design responsibility',
        explanation: 'Interface boundaries where one team\'s information meets another\'s — such as the structural-facade interface — must be explicitly defined, with responsibility for each side of the interface assigned and tracked. This is a classic engineering interface requiring formal management.'
      },
      {
        id: 'iso14-q5',
        type: 'mcq',
        question: 'In a large project BIM coordination meeting, the first agenda item is reviewing which MIDP containers are on track, at risk, or have missed their dates. What is the purpose of starting with this review?',
        options: [
          'To determine which task teams will be penalised for late delivery',
          'To get a current picture of information delivery progress, identify risks early, and trigger mitigation actions before milestone dates are missed',
          'To update the suitability codes for all recently shared containers',
          'To confirm the software versions being used by each task team'
        ],
        answer: 'To get a current picture of information delivery progress, identify risks early, and trigger mitigation actions before milestone dates are missed',
        explanation: 'Starting coordination meetings with MIDP status review establishes the current delivery picture. Early identification of risks allows mitigation actions to be taken before dates are missed — rather than discovering problems after they have caused cascade impacts.'
      },
      {
        id: 'iso14-q6',
        type: 'fillintheblank',
        question: 'The collaboration software tool used by the BIM coordinator to combine models from multiple disciplines and run automated clash detection is typically called a ___ or coordination tool.',
        answer: 'federation',
        explanation: 'Federation software (such as Autodesk Navisworks or Solibri) combines separate discipline models into a single federated model. The BIM coordinator uses this to run clash detection and manage the coordination review step of the delivery cycle.'
      },
      {
        id: 'iso14-q7',
        type: 'mcq',
        question: 'A project BEP states that Autodesk Construction Cloud will be used as the CDE and Navisworks will be used for coordination. A new structural subcontractor joins and wants to use a different CDE and a proprietary coordination viewer. What should happen?',
        options: [
          'The subcontractor can use their preferred tools since the BEP is not legally binding on subcontractors',
          'The subcontractor must comply with the BEP tool requirements, which are part of the project standards agreed by all parties',
          'The BEP should be immediately rewritten to accommodate the subcontractor\'s tools',
          'The BIM coordinator should use both CDEs simultaneously'
        ],
        answer: 'The subcontractor must comply with the BEP tool requirements, which are part of the project standards agreed by all parties',
        explanation: 'The BEP defines the tools all project parties must use. Non-standard tools undermine coordination workflows, CDE access control, and naming conventions. Compliance with BEP tool requirements is a condition of the sub-appointment.'
      },
      {
        id: 'iso14-q8',
        type: 'truefalse',
        question: 'True or False: On a small project with only two discipline teams, interface management and dependency tracking are not required under ISO 19650.',
        answer: 'False',
        explanation: 'ISO 19650 principles apply regardless of project size. Even with two disciplines, there are interfaces to manage — for example, the structural-architectural interface. The scale and formality of the management process can be proportionate to the project, but the principle remains.'
      },
      {
        id: 'iso14-q9',
        type: 'mcq',
        question: 'A BIM coordinator runs clash detection and finds 450 clashes. Rather than presenting all 450 to the coordination meeting, they prioritise clashes by severity. This prioritisation is based on what classification?',
        options: [
          'The suitability codes of the affected models',
          'Whether the clash is a hard clash, soft/clearance clash, or workflow clash — with hard clashes typically receiving highest priority',
          'The alphabetical order of the discipline names involved',
          'The LOIN level of the models producing the clash'
        ],
        answer: 'Whether the clash is a hard clash, soft/clearance clash, or workflow clash — with hard clashes typically receiving highest priority',
        explanation: 'Clash prioritisation is based on type and severity. Hard clashes (physical interferences) are typically highest priority as they represent a physical impossibility to build. Soft clashes and workflow clashes may be prioritised below hard clashes, though project-specific clash tolerance rules should be defined in the BEP.'
      },
      {
        id: 'iso14-q10',
        type: 'mcq',
        question: 'In the Philippines context, interface management is particularly important on large DPWH infrastructure projects. Why?',
        options: [
          'DPWH projects have more floors than typical building projects',
          'Road, bridge, drainage, utilities, and landscape teams all have overlapping responsibilities at design boundaries, requiring explicit interface ownership and tracking',
          'DPWH requires all interfaces to be managed using BIM Level 0 methods',
          'Interface management is only required on projects over PHP 1 billion in value'
        ],
        answer: 'Road, bridge, drainage, utilities, and landscape teams all have overlapping responsibilities at design boundaries, requiring explicit interface ownership and tracking',
        explanation: 'Large DPWH infrastructure projects involve multiple specialist disciplines whose scopes overlap at interfaces — road to bridge abutments, drainage to road pavement, utilities to structure. Without formal interface management, these boundaries become gaps where coordination failures occur.'
      }
    ]
  },
  {
    lessonId: 'iso-15',
    lessonTitle: 'Quality Assurance & Information Verification',
    passingScore: 75,
    questions: [
      {
        id: 'iso15-q1',
        type: 'mcq',
        question: 'An MEP task team completes their ductwork model and the lead author personally checks it before uploading to Shared. This is an example of:',
        options: [
          'Lead appointed party verification',
          'Appointing party validation',
          'Task team checking (Level 1 QA)',
          'Client sign-off'
        ],
        answer: 'Task team checking (Level 1 QA)',
        explanation: 'The internal quality check performed by the task team on their own information before it enters the Shared area is Level 1 QA — task team checking. This is the task team\'s own responsibility and no other party should substitute for it.'
      },
      {
        id: 'iso15-q2',
        type: 'mcq',
        question: 'Which of the following is NOT part of a task team\'s internal checking checklist under ISO 19650?',
        options: [
          'Geometric checking: correct geometry and no internal model clashes',
          'Data checking: required parameters populated to the specified LOIN',
          'Cross-discipline clash detection against other teams\' models',
          'Standards compliance: correct file naming and template applied'
        ],
        answer: 'Cross-discipline clash detection against other teams\' models',
        explanation: 'Cross-discipline clash detection is part of the lead appointed party verification (Level 2 QA), not the task team\'s internal check (Level 1 QA). The task team checks their own model; cross-discipline coordination happens after the model reaches Shared.'
      },
      {
        id: 'iso15-q3',
        type: 'truefalse',
        question: 'True or False: A model that is genuinely high quality but has no documented checking record has still met the ISO 19650 QA requirement.',
        answer: 'False',
        explanation: 'ISO 19650 requires that the checking process be documented. A model without a check record has not demonstrably met the QA requirement, regardless of its actual quality. The record is the evidence that the process was followed.'
      },
      {
        id: 'iso15-q4',
        type: 'mcq',
        question: 'The lead appointed party checks that all required discipline models are present, at the correct revision, and at the correct CDE status before the package is presented to the client. This activity is:',
        options: [
          'Task team checking',
          'Lead appointed party verification',
          'Appointing party validation',
          'MIDP review'
        ],
        answer: 'Lead appointed party verification',
        explanation: 'Lead appointed party verification (Level 2 QA) includes checking that all required containers are present, at the correct revision and status, and collectively meet the EIR LOIN requirements. This is the quality gate before the appointing party sees the package.'
      },
      {
        id: 'iso15-q5',
        type: 'mcq',
        question: 'During lead appointed party verification, the BIM coordinator finds that the federated models from the structural and MEP teams do not overlay correctly — the structural model appears displaced by 20 metres from its correct position. What type of issue is this?',
        options: [
          'A hard clash requiring design resolution',
          'A coordinate system or shared coordinate alignment failure',
          'A suitability code error',
          'A LOIN non-compliance'
        ],
        answer: 'A coordinate system or shared coordinate alignment failure',
        explanation: 'Models that do not overlay correctly in federation are not clashing in the design sense — they are incorrectly positioned due to misaligned coordinate systems or incorrect shared coordinate settings. This must be corrected at the task team level before federation is meaningful.'
      },
      {
        id: 'iso15-q6',
        type: 'fillintheblank',
        question: 'The three levels of ISO 19650 QA are: task team checking, lead appointed party ___, and appointing party validation.',
        answer: 'verification',
        explanation: 'The three QA levels are: (1) task team checking — internal QA before Shared; (2) lead appointed party verification — coordination-level review of the complete package; and (3) appointing party validation — client-side review against the EIR and project brief.'
      },
      {
        id: 'iso15-q7',
        type: 'mcq',
        question: 'A Revit model passes the task team\'s internal check and is moved to Shared. Lead appointed party verification finds that 15 required parameters are unpopulated across all wall elements — a clear LOIN non-compliance. Who bears primary responsibility for this failure?',
        options: [
          'The lead appointed party, for not catching it during verification',
          'The task team, whose internal check should have caught the LOIN non-compliance before the model was shared',
          'The appointing party, for specifying LOIN requirements',
          'The CDE platform, for allowing an incomplete model to be uploaded'
        ],
        answer: 'The task team, whose internal check should have caught the LOIN non-compliance before the model was shared',
        explanation: 'The task team\'s internal check (Level 1 QA) must include data checking against the specified LOIN. If 15 parameters are unpopulated, the internal check failed. The task team bears primary responsibility. The lead appointed party verification exists as a second check, not a substitute for the first.'
      },
      {
        id: 'iso15-q8',
        type: 'truefalse',
        question: 'True or False: The project programme should allocate specific time for internal checking between the model production completion date and the Shared deadline in the MIDP.',
        answer: 'True',
        explanation: 'Checking takes time. If the programme does not explicitly allocate time between production completion and the Shared date, checking will be skipped under schedule pressure. The MIDP should show internal check dates as well as Shared dates.'
      },
      {
        id: 'iso15-q9',
        type: 'mcq',
        question: 'A client reviews the published information package for the scheme design milestone and finds that the delivered models satisfy all EIR requirements and the design meets the project brief. What outcome results?',
        options: [
          'The information is moved to Archived status',
          'Full acceptance — the appointing party formally validates the milestone package and the project can progress to the next stage',
          'The suitability codes are changed from S3 to S0',
          'The BEP is rewritten to reflect the approved design'
        ],
        answer: 'Full acceptance — the appointing party formally validates the milestone package and the project can progress to the next stage',
        explanation: 'Full acceptance at appointing party validation means the package meets all requirements. This is the successful outcome of Level 3 QA, allowing the project to progress to the next stage.'
      },
      {
        id: 'iso15-q10',
        type: 'mcq',
        question: 'A BIM author on a large airport project runs Revit model health checks at the end of each working day, addresses warnings promptly, and maintains parameter data as they model rather than at the end of the stage. This approach is best described as:',
        options: [
          'An unnecessarily time-consuming practice that slows production',
          'Integrating QA into the modelling workflow — producing a model that is QA-ready continuously rather than performing a catch-up check at the Shared deadline',
          'A substitute for the formal task team checking checklist',
          'An appointing party requirement for daily model submission'
        ],
        answer: 'Integrating QA into the modelling workflow — producing a model that is QA-ready continuously rather than performing a catch-up check at the Shared deadline',
        explanation: 'The most effective QA approach integrates checking into the production workflow. Daily health checks and real-time parameter management mean the model is consistently in a QA-ready state — avoiding the large backlog of issues discovered at the last minute before a Shared deadline.'
      }
    ]
  },
  {
    lessonId: 'iso-16',
    lessonTitle: 'Appointments & Contracts Under ISO 19650',
    passingScore: 75,
    questions: [
      {
        id: 'iso16-q1',
        type: 'mcq',
        question: 'A BEP is written and agreed between the architect and the client, but it is not referenced or incorporated in the appointment contract. What is the consequence?',
        options: [
          'The BEP automatically has contractual force because it was agreed verbally',
          'The BEP has no contractual force — it is only an internal document with no legal weight in the absence of contractual incorporation',
          'The client can still enforce it through the ISO 19650 standard itself',
          'The EIR replaces the BEP as the enforceable document'
        ],
        answer: 'The BEP has no contractual force — it is only an internal document with no legal weight in the absence of contractual incorporation',
        explanation: 'ISO 19650 itself has no legal force. BIM obligations only become legally enforceable when they are incorporated into the appointment contract. A BEP that exists only as a PDF, not referenced in the contract, cannot be enforced if the appointed party fails to deliver against it.'
      },
      {
        id: 'iso16-q2',
        type: 'mcq',
        question: 'Which document in the appointment suite defines the rules for how ISO 19650 information requirements apply within the specific legal and contractual environment of the project?',
        options: [
          'The BEP',
          'The MIDP',
          'The information protocol',
          'The TIDP'
        ],
        answer: 'The information protocol',
        explanation: 'The information protocol (such as the UK CIC BIM Protocol) defines how the ISO 19650 framework applies within the specific contractual environment. It addresses legal and contractual aspects that the technical BIM documents (BEP, MIDP) do not cover.'
      },
      {
        id: 'iso16-q3',
        type: 'truefalse',
        question: 'True or False: Under the back-to-back principle, the lead appointed party should flow the same BIM obligations they owe the client down through their sub-appointments to task teams.',
        answer: 'True',
        explanation: 'The back-to-back principle requires the lead appointed party to mirror their client-facing BIM obligations in their sub-appointments with task teams. Failure to do this creates an enforcement gap: the lead appointed party is obligated to the client but has no contractual remedy if task teams deliver non-compliant information.'
      },
      {
        id: 'iso16-q4',
        type: 'mcq',
        question: 'A consultant\'s appointment states they must deliver a fully coordinated BIM model but does not specify the software, format, LOIN, or delivery dates. What is the problem with this obligation?',
        options: [
          'The obligation is too specific and constrains the consultant unnecessarily',
          'The obligation is too vague to be enforceable — without defined parameters, the client cannot objectively assess compliance and the consultant cannot know what to produce',
          'BIM model delivery obligations do not need to be in the appointment',
          'The obligation should be in the BEP, not the appointment'
        ],
        answer: 'The obligation is too vague to be enforceable — without defined parameters, the client cannot objectively assess compliance and the consultant cannot know what to produce',
        explanation: 'Vague BIM obligations are a common failure in appointments. Without specific LOIN, format, software, and milestone date requirements, neither party can objectively assess compliance. This creates dispute risk and ambiguity throughout the project.'
      },
      {
        id: 'iso16-q5',
        type: 'mcq',
        question: 'A property developer wants to use the design models delivered by the architect for a future building extension five years after project completion. What aspect of the appointment must explicitly address this?',
        options: [
          'The LOIN specification for the models',
          'The intellectual property rights clause, defining whether the client has a licence to use models for future projects beyond the original scope',
          'The suitability code assigned to the models',
          'The CDE archiving policy'
        ],
        answer: 'The intellectual property rights clause, defining whether the client has a licence to use models for future projects beyond the original scope',
        explanation: 'Standard professional appointments grant the client a licence to use delivered information for the original project and asset operation. Using models for future extensions or refurbishments is a separate use that must be explicitly licensed in the IP clause of the appointment.'
      },
      {
        id: 'iso16-q6',
        type: 'fillintheblank',
        question: 'The principle that the lead appointed party\'s BIM obligations to the client must be mirrored in their sub-appointments with task teams is called the ___ principle.',
        answer: 'back-to-back',
        explanation: 'The back-to-back principle ensures that BIM obligations flow down through the supply chain. If the lead appointed party fails to apply this principle, they cannot contractually enforce information delivery standards on task teams.'
      },
      {
        id: 'iso16-q7',
        type: 'mcq',
        question: 'A lead appointed party fails to reference the project EIR and BEP in their sub-appointment with a mechanical engineering task team. The mechanical team delivers models in the wrong format and at insufficient LOIN. What is the legal situation?',
        options: [
          'The mechanical team is liable for non-compliance regardless of what the sub-appointment says',
          'The lead appointed party may bear liability to the client for non-compliant deliverables but has no contractual remedy against the mechanical team',
          'The EIR automatically applies to all project parties without needing to be referenced in sub-appointments',
          'The client bears responsibility for not communicating requirements directly to all task teams'
        ],
        answer: 'The lead appointed party may bear liability to the client for non-compliant deliverables but has no contractual remedy against the mechanical team',
        explanation: 'This is the enforcement gap created by failing to apply the back-to-back principle. The lead appointed party is obligated to the client to deliver compliant information but has no contract with the mechanical team that makes non-compliance a breach. The lead appointed party absorbs the liability.'
      },
      {
        id: 'iso16-q8',
        type: 'truefalse',
        question: 'True or False: The MIDP is typically a primary contract document with its milestones directly creating contractual delivery obligations.',
        answer: 'False',
        explanation: 'The MIDP is usually not a primary contract document itself. It is typically referenced as a delivery schedule within the appointment, with contractual obligations tied to the milestones it defines. The MIDP is a live management document, not a fixed contractual schedule.'
      },
      {
        id: 'iso16-q9',
        type: 'mcq',
        question: 'In the current Philippine construction market, how should a BIM-trained professional approach contracts that do not yet have mature ISO 19650 BIM clauses?',
        options: [
          'Refuse to work on projects without ISO 19650 clauses',
          'Treat BIM as optional since there are no standard Philippine BIM contract requirements',
          'Draw on ISO 19650 principles to draft clear, enforceable BIM provisions appropriate to the project, particularly on large-scale or internationally connected projects',
          'Copy-paste UK CIC Protocol clauses directly without adaptation'
        ],
        answer: 'Draw on ISO 19650 principles to draft clear, enforceable BIM provisions appropriate to the project, particularly on large-scale or internationally connected projects',
        explanation: 'The Philippines BIM contract environment is still maturing. A BIM professional who understands ISO 19650 contractual principles can add value by drafting appropriate BIM provisions rather than waiting for standardised clauses to emerge. International project experience makes this skill particularly valuable.'
      },
      {
        id: 'iso16-q10',
        type: 'mcq',
        question: 'A consultant whose appointment is being negotiated asks: "Do we need to reference both the EIR and the post-appointment BEP in the contract, or just one?" What is the correct answer?',
        options: [
          'Only the EIR needs to be referenced — the BEP is an internal document',
          'Only the BEP needs to be referenced — it covers everything the EIR says',
          'Both should be referenced: the EIR establishes the client\'s requirements, and the post-appointment BEP establishes the agreed plan for meeting them. Both are needed for a complete, enforceable contractual framework',
          'Neither needs to be in the contract — verbal agreement is sufficient for BIM obligations'
        ],
        answer: 'Both should be referenced: the EIR establishes the client\'s requirements, and the post-appointment BEP establishes the agreed plan for meeting them. Both are needed for a complete, enforceable contractual framework',
        explanation: 'The EIR and post-appointment BEP serve different but complementary functions. The EIR defines what must be achieved; the BEP defines how it will be achieved. Both must be incorporated to create an enforceable framework — the EIR without the BEP leaves the delivery method undefined; the BEP without the EIR leaves the requirements undefined.'
      }
    ]
  }
];
