// ============================================================
// AUTODESK FORMA — LESSONS INDEX
// File: lib/formaLessonsData.js
// Imports and spreads all three lesson content files
// ============================================================

import { lessons_1_8 }   from './formaLessonsContent/formaLessons_1_8'
import { lessons_9_16 }  from './formaLessonsContent/formaLessons_9_16'
import { lessons_17_24 } from './formaLessonsContent/formaLessons_17_24'

export const formaLessons = [
  ...lessons_1_8,
  ...lessons_9_16,
  ...lessons_17_24,
]

export default formaLessons
