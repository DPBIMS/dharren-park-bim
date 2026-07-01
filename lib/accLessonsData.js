// ============================================================
// AUTODESK CONSTRUCTION CLOUD — LESSONS INDEX
// File: lib/accLessonsData.js
// Imports and spreads all three lesson content files
// ============================================================

import { lessons_1_8 }   from './accLessonsContent/accLessons_1_8'
import { lessons_9_16 }  from './accLessonsContent/accLessons_9_16'
import { lessons_17_24 } from './accLessonsContent/accLessons_17_24'

export const accLessons = [
  ...lessons_1_8,
  ...lessons_9_16,
  ...lessons_17_24,
]

export default accLessons
