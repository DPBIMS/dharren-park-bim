// ============================================================
// NAVISWORKS GETTING STARTED — QUIZZES INDEX
// File: lib/navisworksQuizzesData.js
// Imports and spreads all three quiz content files
// ============================================================

import { quizzes_1_8 }   from './navisworksQuizzesContent/navisworksQuizzes_1_8'
import { quizzes_9_16 }  from './navisworksQuizzesContent/navisworksQuizzes_9_16'
import { quizzes_17_24 } from './navisworksQuizzesContent/navisworksQuizzes_17_24'

export const navisworksQuizzes = [
  ...quizzes_1_8,
  ...quizzes_9_16,
  ...quizzes_17_24,
]

export default navisworksQuizzes
