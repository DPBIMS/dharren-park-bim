// ============================================================
// REVIT FAMILY CREATION — QUIZZES INDEX
// File: lib/revitFamilyQuizzesData.js
// Imports and spreads all three quiz content files
// ============================================================

import { quizzes_1_8 }   from './revitFamilyQuizzesContent/revitFamilyQuizzes_1_8'
import { quizzes_9_16 }  from './revitFamilyQuizzesContent/revitFamilyQuizzes_9_16'
import { quizzes_17_24 } from './revitFamilyQuizzesContent/revitFamilyQuizzes_17_24'

export const revitFamilyQuizzes = [
  ...quizzes_1_8,
  ...quizzes_9_16,
  ...quizzes_17_24,
]

export default revitFamilyQuizzes