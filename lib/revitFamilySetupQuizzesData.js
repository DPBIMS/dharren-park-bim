// ============================================================
// REVIT FAMILY SETUP — QUIZZES INDEX
// File: lib/revitFamilySetupQuizzesData.js
// Imports and spreads all three quiz content files
// ============================================================

import { quizzes_1_8 }   from './revitFamilySetupQuizzesContent/revitFamilySetupQuizzes_1_8'
import { quizzes_9_16 }  from './revitFamilySetupQuizzesContent/revitFamilySetupQuizzes_9_16'
import { quizzes_17_24 } from './revitFamilySetupQuizzesContent/revitFamilySetupQuizzes_17_24'

export const revitFamilySetupQuizzes = [
  ...quizzes_1_8,
  ...quizzes_9_16,
  ...quizzes_17_24,
]

export default revitFamilySetupQuizzes
