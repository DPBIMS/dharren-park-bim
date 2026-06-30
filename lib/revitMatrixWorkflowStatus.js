// lib/revitMatrixWorkflowStatus.js
// Per-project status overlay on top of the reference workflows in
// lib/revitMatrixWorkflows.js. Keyed by project id, then by workflow id.
// currentStageIndex = the stage (0-indexed) the project is actively on.
// Stages before it are 'done', the current one is 'current', stages
// after are 'upcoming'. status reflects whether progress through the
// current stage is healthy or stuck.

export const workflowStatus = {
  'proj-2401': {
    'bep-authoring':    { currentStageIndex: 4, status: 'done', waitingOn: null, note: 'Fully signed off and published.' },
    'model-federation': { currentStageIndex: 3, status: 'done', waitingOn: null, note: 'Latest federation published this week.' },
    'clash-detection':  { currentStageIndex: 5, status: 'on-track', waitingOn: null, note: 'Cycle closed, no outstanding clashes.' },
    'ifc-export':       { currentStageIndex: 4, status: 'on-track', waitingOn: null, note: 'Approved package delivered on schedule.' },
    'sign-off':         { currentStageIndex: 4, status: 'on-track', waitingOn: null, note: 'Published, task teams notified.' },
  },
  'proj-2389': {
    'bep-authoring':    { currentStageIndex: 4, status: 'done', waitingOn: null, note: 'Signed off at kickoff.' },
    'model-federation': { currentStageIndex: 2, status: 'stalled', waitingOn: 'Structural', note: 'Coordinate check flagged offset on structural model — re-link pending.' },
    'clash-detection':  { currentStageIndex: 1, status: 'stalled', waitingOn: 'BIM Manager', note: 'Cannot triage until federation is corrected.' },
    'ifc-export':       { currentStageIndex: 0, status: 'not-started', waitingOn: null, note: 'Blocked behind federation and clash resolution.' },
    'sign-off':         { currentStageIndex: 0, status: 'not-started', waitingOn: null, note: 'Not yet reached.' },
  },
  'proj-2412': {
    'bep-authoring':    { currentStageIndex: 1, status: 'stalled', waitingOn: 'BIM Manager', note: 'Draft BEP started but never circulated for internal review.' },
    'model-federation': { currentStageIndex: 0, status: 'not-started', waitingOn: null, note: 'Blocked behind BEP approval.' },
    'clash-detection':  { currentStageIndex: 0, status: 'not-started', waitingOn: null, note: 'Blocked behind federation.' },
    'ifc-export':       { currentStageIndex: 0, status: 'not-started', waitingOn: null, note: 'Blocked behind upstream processes.' },
    'sign-off':         { currentStageIndex: 0, status: 'not-started', waitingOn: null, note: 'Not yet reached.' },
  },
  'proj-2350': {
    'bep-authoring':    { currentStageIndex: 4, status: 'done', waitingOn: null, note: 'Signed off.' },
    'model-federation': { currentStageIndex: 3, status: 'done', waitingOn: null, note: 'Current and published.' },
    'clash-detection':  { currentStageIndex: 5, status: 'on-track', waitingOn: null, note: 'No outstanding clashes.' },
    'ifc-export':       { currentStageIndex: 4, status: 'on-track', waitingOn: null, note: 'Delivered.' },
    'sign-off':         { currentStageIndex: 4, status: 'on-track', waitingOn: null, note: 'Published.' },
  },
  'proj-2398': {
    'bep-authoring':    { currentStageIndex: 4, status: 'done', waitingOn: null, note: 'Signed off.' },
    'model-federation': { currentStageIndex: 3, status: 'done', waitingOn: null, note: 'Current.' },
    'clash-detection':  { currentStageIndex: 3, status: 'on-track', waitingOn: 'MEP', note: 'Mid-resolution, on schedule.' },
    'ifc-export':       { currentStageIndex: 1, status: 'stalled', waitingOn: 'MEP', note: 'Pre-export check flagged LOD 350 gap in 3 MEP zones ahead of Stage 4 gate.' },
    'sign-off':         { currentStageIndex: 0, status: 'not-started', waitingOn: null, note: 'Blocked behind IFC export.' },
  },
  'proj-2375': {
    'bep-authoring':    { currentStageIndex: 4, status: 'done', waitingOn: null, note: 'Signed off.' },
    'model-federation': { currentStageIndex: 3, status: 'done', waitingOn: null, note: 'Current.' },
    'clash-detection':  { currentStageIndex: 5, status: 'on-track', waitingOn: null, note: 'No outstanding clashes.' },
    'ifc-export':       { currentStageIndex: 4, status: 'on-track', waitingOn: null, note: 'Delivered.' },
    'sign-off':         { currentStageIndex: 3, status: 'on-track', waitingOn: 'Appointing Party', note: 'Awaiting external approval to move from Shared to Published.' },
  },
};
