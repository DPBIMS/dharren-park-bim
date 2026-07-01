// ============================================================
// COMMON DATA ENVIRONMENT (CDE) — LESSONS INDEX
// File: lib/cdeLessonsData.js
// Imports and spreads all four lesson content files
// ============================================================

import { lessons_1_8 }   from './cdeLessonsContent/cdeLessons_1_8'
import { lessons_9_16 }  from './cdeLessonsContent/cdeLessons_9_16'
import { lessons_17_24 } from './cdeLessonsContent/cdeLessons_17_24'
import { lessons_25_32 } from './cdeLessonsContent/cdeLessons_25_32'

export const cdeLessons = [
  ...lessons_1_8,
  ...lessons_9_16,
  ...lessons_17_24,
  ...lessons_25_32,
]

export default cdeLessons
