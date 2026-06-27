import { revitQuizzes_rv1_rv3 } from './revitQuizzesContent/revitQuizzes_rv1_rv3'
import { revitQuizzes_rv4_rv8 } from './revitQuizzesContent/revitQuizzes_rv4_rv8'
import { revitQuizzes_rv9_rv16 } from './revitQuizzesContent/revitQuizzes_rv9_rv16'
import { revitQuizzes_rv17_rv24 } from './revitQuizzesContent/revitQuizzes_rv17_rv24'

const allQuizzes = [
  ...Object.values(revitQuizzes_rv1_rv3),
  ...revitQuizzes_rv4_rv8,
  ...revitQuizzes_rv9_rv16,
  ...revitQuizzes_rv17_rv24,
]

const revitQuizzes = {}
allQuizzes.forEach(q => { revitQuizzes[q.lessonId] = q })

export { revitQuizzes }
export default revitQuizzes
