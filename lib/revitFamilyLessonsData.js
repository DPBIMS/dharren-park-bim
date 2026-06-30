// ============================================================
// REVIT FAMILY CREATION — LESSONS INDEX
// File: lib/revitFamilyLessonsData.js
// Imports and spreads all three lesson content files
// ============================================================

import { lessons_1_8 }   from './revitFamilyLessonsContent/revitFamilyLessons_1_8'
import { lessons_9_16 }  from './revitFamilyLessonsContent/revitFamilyLessons_9_16'
import { lessons_17_24 } from './revitFamilyLessonsContent/revitFamilyLessons_17_24'

export const revitFamilyLessons = [
  ...lessons_1_8,
  ...lessons_9_16,
  ...lessons_17_24,
]

export default revitFamilyLessons