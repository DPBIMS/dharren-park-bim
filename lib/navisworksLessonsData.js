// ============================================================
// NAVISWORKS GETTING STARTED — LESSONS INDEX
// File: lib/navisworksLessonsData.js
// Imports and spreads all three lesson content files
// ============================================================

import { lessons_1_8 }   from './navisworksLessonsContent/navisworksLessons_1_8'
import { lessons_9_16 }  from './navisworksLessonsContent/navisworksLessons_9_16'
import { lessons_17_24 } from './navisworksLessonsContent/navisworksLessons_17_24'

export const navisworksLessons = [
  ...lessons_1_8,
  ...lessons_9_16,
  ...lessons_17_24,
]

export default navisworksLessons
