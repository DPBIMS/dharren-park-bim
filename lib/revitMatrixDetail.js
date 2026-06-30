// lib/revitMatrixDetail.js
// Detailed per-project Setup Matrix records for the Revit Matrix drill-down.
// Keyed by project id (matches lib/revitMatrixData.js ids).
// STATIC SAMPLE DATA — replace with Supabase once the real audit data
// model is designed. Riverside Tower (proj-2401) is fully fleshed out as
// the reference shape; other projects are populated with representative
// data matching their dashboard-card status.

const NAMING_FIELDS = [
  { label: 'Project', field: 'PROJ', example: '2401', max: '6 char' },
  { label: 'Originator', field: 'DPB', example: 'DPB', max: '3-6 char' },
  { label: 'Volume', field: 'ZZ', example: 'B1', max: '2 char' },
  { label: 'Level', field: 'LL', example: 'L04', max: '3 char' },
  { label: 'Type', field: 'TYPE', example: 'M3', max: '2 char' },
  { label: 'Role', field: 'ROLE', example: 'A', max: '1 char' },
  { label: 'Number', field: 'NN', example: '001', max: '3 char' },
];

const LOD_ROWS = [
  { discipline: 'Architectural', lod100: 'Concept massing', lod200: 'Generic systems', lod300: 'Specific assemblies', lod350: 'Coordinated assemblies', lod400: 'Fabrication-ready' },
  { discipline: 'Structural', lod100: 'Schematic layout', lod200: 'Generic members', lod350: 'Sized + coordinated', lod300: 'Sized members', lod400: 'Shop drawings' },
  { discipline: 'Mechanical', lod100: 'Zone allowances', lod200: 'Generic ductwork', lod300: 'Sized ductwork', lod350: 'Coordinated routing', lod400: 'Fabrication spool' },
  { discipline: 'Electrical', lod100: 'Load estimates', lod200: 'Generic distribution', lod300: 'Sized panels/runs', lod350: 'Coordinated routing', lod400: 'Fabrication-ready' },
];

const RACI_ROWS = [
  { task: 'BEP Authoring', architect: 'A', structural: 'C', mechanical: 'C', electrical: 'C', bimManager: 'R' },
  { task: 'Model Federation', architect: 'C', structural: 'C', mechanical: 'C', electrical: 'C', bimManager: 'R' },
  { task: 'Clash Detection', architect: 'I', structural: 'I', mechanical: 'I', electrical: 'I', bimManager: 'R' },
  { task: 'IFC Export & QA', architect: 'C', structural: 'C', mechanical: 'C', electrical: 'C', bimManager: 'A' },
  { task: 'Sign-off / Approval', architect: 'R', structural: 'R', mechanical: 'R', electrical: 'R', bimManager: 'A' },
];

const WORKSETS_TEMPLATE = [
  { title: 'Shared Levels & Grids', items: ['Levels', 'Grids', 'Shared Coordinates'] },
  { title: 'Architectural', items: ['Walls — Exterior', 'Walls — Interior', 'Floors', 'Roofs', 'Furniture'] },
  { title: 'Structural', items: ['Foundations', 'Framing', 'Columns'] },
  { title: 'MEP', items: ['Mechanical Equipment', 'Ductwork', 'Electrical Fixtures', 'Plumbing'] },
];

const QAQC_GROUPS = [
  {
    group: '01 — File & Naming',
    items: [
      { text: 'All sheet/model files follow the agreed naming convention', tag: 'Naming' },
      { text: 'Worksharing central model backed up per BEP schedule', tag: 'Worksharing' },
    ],
  },
  {
    group: '02 — LOD & Modeling',
    items: [
      { text: 'LOD targets per phase confirmed and documented in BEP', tag: 'LOD' },
      { text: 'IFC export settings configured and validated', tag: 'IFC' },
    ],
  },
  {
    group: '03 — Roles & Sign-off',
    items: [
      { text: 'RACI matrix confirmed and communicated to all task teams', tag: 'RACI' },
      { text: 'BEP formally accepted by Appointing Party', tag: 'BEP' },
    ],
  },
];

function buildProjectDetail({ id, namingScore, lodScore, worksetScore, namingDeviations = [], checklistOverrides = {} }) {
  return {
    id,
    namingFields: NAMING_FIELDS,
    namingScore,
    namingDeviations,
    lodRows: LOD_ROWS,
    lodScore,
    raciRows: RACI_ROWS,
    worksets: WORKSETS_TEMPLATE,
    worksetScore,
    qaqcGroups: QAQC_GROUPS.map(g => ({
      ...g,
      items: g.items.map(item => ({
        ...item,
        checked: checklistOverrides[item.tag] !== undefined ? checklistOverrides[item.tag] : true,
      })),
    })),
  };
}

export const projectDetails = {
  'proj-2401': buildProjectDetail({
    id: 'proj-2401',
    namingScore: 100,
    lodScore: 95,
    worksetScore: 100,
    namingDeviations: [],
    checklistOverrides: {},
  }),
  'proj-2389': buildProjectDetail({
    id: 'proj-2389',
    namingScore: 72,
    lodScore: 90,
    worksetScore: 68,
    namingDeviations: ['4 structural files still use the pre-2024 naming scheme (missing Volume segment)'],
    checklistOverrides: { Worksharing: false },
  }),
  'proj-2412': buildProjectDetail({
    id: 'proj-2412',
    namingScore: 40,
    lodScore: 35,
    worksetScore: 55,
    namingDeviations: ['Naming convention not enforced at kickoff — mixed schemes across disciplines'],
    checklistOverrides: { BEP: false, RACI: false, LOD: false },
  }),
  'proj-2350': buildProjectDetail({
    id: 'proj-2350',
    namingScore: 98,
    lodScore: 100,
    worksetScore: 96,
    namingDeviations: [],
    checklistOverrides: {},
  }),
  'proj-2398': buildProjectDetail({
    id: 'proj-2398',
    namingScore: 88,
    lodScore: 64,
    worksetScore: 91,
    namingDeviations: [],
    checklistOverrides: { LOD: false },
  }),
  'proj-2375': buildProjectDetail({
    id: 'proj-2375',
    namingScore: 97,
    lodScore: 93,
    worksetScore: 100,
    namingDeviations: [],
    checklistOverrides: {},
  }),
};
