// ============================================================
// PYREVIT FOR BIM — HANDS-ON PRACTICE — LESSONS INDEX
// File: lib/pyrevitPracticeLessonsData.js
// Imports and spreads all three lesson content files
// ============================================================

import { lessons_1_8 }   from './pyrevitPracticeLessonsContent/pyrevitPracticeLessons_1_8'
import { lessons_9_16 }  from './pyrevitPracticeLessonsContent/pyrevitPracticeLessons_9_16'
import { lessons_17_24 } from './pyrevitPracticeLessonsContent/pyrevitPracticeLessons_17_24'

export const pyrevitPracticeLessons = [
  ...lessons_1_8,
  ...lessons_9_16,
  ...lessons_17_24,
]

export default pyrevitPracticeLessons
