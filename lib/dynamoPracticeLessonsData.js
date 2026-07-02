// ============================================================
// DYNAMO FOR BIM — HANDS-ON PRACTICE — LESSONS INDEX
// File: lib/dynamoPracticeLessonsData.js
// Imports and spreads all three lesson content files
// ============================================================

import { lessons_1_8 }   from './dynamoPracticeLessonsContent/dynamoPracticeLessons_1_8'
import { lessons_9_16 }  from './dynamoPracticeLessonsContent/dynamoPracticeLessons_9_16'
import { lessons_17_24 } from './dynamoPracticeLessonsContent/dynamoPracticeLessons_17_24'

export const dynamoPracticeLessons = [
  ...lessons_1_8,
  ...lessons_9_16,
  ...lessons_17_24,
]

export default dynamoPracticeLessons
