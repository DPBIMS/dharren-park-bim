// ============================================================
// REVIT FAMILY SETUP — LESSONS INDEX
// File: lib/revitFamilySetupLessonsData.js
// Imports and spreads all three lesson content files
// ============================================================

import { lessons_1_8 }   from './revitFamilySetupLessonsContent/revitFamilySetupLessons_1_8'
import { lessons_9_16 }  from './revitFamilySetupLessonsContent/revitFamilySetupLessons_9_16'
import { lessons_17_24 } from './revitFamilySetupLessonsContent/revitFamilySetupLessons_17_24'

export const revitFamilySetupLessons = [
  ...lessons_1_8,
  ...lessons_9_16,
  ...lessons_17_24,
]

export default revitFamilySetupLessons
