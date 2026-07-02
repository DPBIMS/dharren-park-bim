// ============================================================
// PYREVIT GETTING STARTED — LESSONS INDEX
// File: lib/pyrevitLessonsData.js
// Imports and spreads all three lesson content files
// ============================================================

import { lessons_1_8 }   from './pyrevitLessonsContent/pyrevitLessons_1_8'
import { lessons_9_16 }  from './pyrevitLessonsContent/pyrevitLessons_9_16'
import { lessons_17_24 } from './pyrevitLessonsContent/pyrevitLessons_17_24'

export const pyrevitLessons = [
  ...lessons_1_8,
  ...lessons_9_16,
  ...lessons_17_24,
]

export default pyrevitLessons
