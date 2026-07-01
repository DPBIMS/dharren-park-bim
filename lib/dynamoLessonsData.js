// ============================================================
// DYNAMO GETTING STARTED — LESSONS INDEX
// File: lib/dynamoLessonsData.js
// Imports and spreads all three lesson content files
// ============================================================

import { lessons_1_8 }   from './dynamoLessonsContent/dynamoLessons_1_8'
import { lessons_9_16 }  from './dynamoLessonsContent/dynamoLessons_9_16'
import { lessons_17_24 } from './dynamoLessonsContent/dynamoLessons_17_24'

export const dynamoLessons = [
  ...lessons_1_8,
  ...lessons_9_16,
  ...lessons_17_24,
]

export default dynamoLessons
