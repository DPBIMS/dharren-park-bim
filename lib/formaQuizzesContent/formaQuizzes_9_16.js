// ============================================================
// FORMA QUIZZES DATA — forma-9 through forma-16
// Merge these entries into your lib/formaQuizzesData.js array
// ============================================================

export const formaQuizzes_9_16 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-9: Solar Analysis — Sun Hours & Shadow Studies
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-9',
    title: 'Solar Analysis in Forma',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does "Sun Hours" measure in Forma?',
        options: [
          'The number of hours per day direct sunlight reaches a specific point',
          'The total energy consumption of the building',
          'The wind speed at ground level',
          'The number of daylight hours in the calendar year'
        ],
        answer: 'The number of hours per day direct sunlight reaches a specific point'
      },
      {
        type: 'mcq',
        question: 'What does a Shadow Study visualize?',
        options: [
          'Wind turbulence around a building',
          'Shadows cast by proposed buildings and context at specific times of day and year',
          'Noise levels from traffic',
          'Green Area Ratio compliance'
        ],
        answer: 'Shadows cast by proposed buildings and context at specific times of day and year'
      },
      {
        type: 'truefalse',
        question: 'Planning applications commonly require shadow diagrams at 9am, 12pm, and 3pm on the winter solstice.',
        answer: true
      },
      {
        type: 'fillblank',
        question: 'The UK planning solar test commonly used is based on the ___ Guidelines, involving Vertical Sky Component.',
        answer: 'BRE'
      },
      {
        type: 'mcq',
        question: 'What colour typically represents deep shadow (0-1 hours/day) on a Sun Hours map?',
        options: ['Bright red', 'Dark blue / purple', 'Yellow', 'Orange'],
        answer: 'Dark blue / purple'
      },
      {
        type: 'mcq',
        question: 'According to the Australian 2-hour rule referenced in the lesson, existing private open space should receive at least 2 hours of direct sun between 9am and 3pm on what date?',
        options: ['21 March', '21 June', '21 September', '21 December'],
        answer: '21 June'
      },
      {
        type: 'truefalse',
        question: 'You should run solar analysis on the existing context before adding your massing, to establish a baseline for impact comparison.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Where in the Forma interface do you find the Sun Hours and Shadow Study tools?',
        options: ['Left panel → Vegetation', 'Right panel → Solar', 'Bottom toolbar → Draw', 'Top bar → Share'],
        answer: 'Right panel → Solar'
      },
      {
        type: 'fillblank',
        question: 'The Timeline ___ lets you animate shadows through the day in real time.',
        answer: 'Slider'
      },
      {
        type: 'mcq',
        question: 'Which is a good design question solar analysis in Forma can help answer?',
        options: [
          'What is the noise level at the site boundary?',
          'Which orientation gives better direct sunlight to apartment balconies?',
          'What is the site\'s Green Area Ratio?',
          'What is the required structural steel tonnage?'
        ],
        answer: 'Which orientation gives better direct sunlight to apartment balconies?'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-10: Wind Analysis — Pedestrian Comfort & Microclimate
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-10',
    title: 'Wind Analysis in Forma',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which international standard does Forma use to classify pedestrian wind comfort?',
        options: ['BRE Guidelines', 'The Lawson Criteria', 'ISO 9613', 'LEED v4'],
        answer: 'The Lawson Criteria'
      },
      {
        type: 'mcq',
        question: 'Which Lawson category represents wind conditions acceptable for sitting (e.g., outdoor cafes)?',
        options: ['Category A', 'Category C', 'Category D', 'Category E'],
        answer: 'Category A'
      },
      {
        type: 'truefalse',
        question: 'Category E in the Lawson Criteria represents comfortable wind conditions suitable for any use.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Why do tall buildings often amplify wind speed at ground level?',
        options: [
          'They absorb wind entirely',
          'They redirect wind that would normally pass over the building down to pedestrian level',
          'They generate their own wind',
          'They have no effect on wind at all'
        ],
        answer: 'They redirect wind that would normally pass over the building down to pedestrian level'
      },
      {
        type: 'fillblank',
        question: 'The standard analysis height for pedestrian wind comfort is typically 1.5 to ___ metres.',
        answer: '2'
      },
      {
        type: 'mcq',
        question: 'What is the "canyon effect" mentioned in the lesson?',
        options: [
          'A lighting effect on facades',
          'Uncomfortable wind conditions that often occur between two tall buildings',
          'A type of Green Area Ratio calculation',
          'A noise reflection pattern'
        ],
        answer: 'Uncomfortable wind conditions that often occur between two tall buildings'
      },
      {
        type: 'mcq',
        question: 'Which massing strategy is suggested to reduce the "corner acceleration" effect?',
        options: ['Adding more glazing', 'Chamfering (cutting) building corners', 'Increasing building height', 'Removing the podium'],
        answer: 'Chamfering (cutting) building corners'
      },
      {
        type: 'truefalse',
        question: 'Forma\'s wind analysis is considered a full substitute for a physical wind tunnel test on all high-rise projects regardless of height.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Approximately what tower height range often requires specialist wind tunnel or CFD testing beyond Forma\'s analysis?',
        options: ['Above 20-25 storeys', 'Above 2-3 storeys', 'Any building over 1 storey', 'Never required regardless of height'],
        answer: 'Above 20-25 storeys'
      },
      {
        type: 'fillblank',
        question: 'A lower ___ connecting towers can reduce wind channelling at ground level.',
        answer: 'podium'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-11: Noise Analysis — Understanding Urban Sound Exposure
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-11',
    title: 'Noise Analysis in Forma',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does Forma\'s noise analysis primarily model?',
        options: [
          'Interior reverberation time',
          'Ambient noise from road and rail transport sources',
          'Mechanical plant noise',
          'Live entertainment venue noise'
        ],
        answer: 'Ambient noise from road and rail transport sources'
      },
      {
        type: 'mcq',
        question: 'Which standard underlies Forma\'s noise propagation calculations?',
        options: ['ISO 19650', 'ISO 9613', 'BS 8233 only', 'LEED v4'],
        answer: 'ISO 9613'
      },
      {
        type: 'truefalse',
        question: 'Forma\'s noise analysis accounts for actual traffic volume counts and day/night differences.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What design strategy is described as the "back of building principle"?',
        options: [
          'Placing bedrooms and living areas on the quietest facade, away from the road',
          'Building only at the rear of the site',
          'Removing all windows from noisy facades',
          'Placing all uses at ground level'
        ],
        answer: 'Placing bedrooms and living areas on the quietest facade, away from the road'
      },
      {
        type: 'fillblank',
        question: 'A ___ or courtyard layout acts as a quiet acoustic refuge shielded by the building itself.',
        answer: 'U-shaped'
      },
      {
        type: 'mcq',
        question: 'According to the lesson\'s reference table, which noise range typically requires acoustic glazing and mechanical ventilation?',
        options: ['Below 50 dB', '50-55 dB', '65-72 dB', 'Exactly 0 dB'],
        answer: '65-72 dB'
      },
      {
        type: 'truefalse',
        question: 'Context buildings between a site and a busy road can act as acoustic screens, reducing noise levels behind them.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What is a key limitation of Forma\'s noise analysis mentioned in the lesson?',
        options: [
          'It cannot calculate any noise values at all',
          'It is based on road type/classification rather than measured actual traffic flows',
          'It only works for rail noise, never road noise',
          'It requires a paid third-party plugin'
        ],
        answer: 'It is based on road type/classification rather than measured actual traffic flows'
      },
      {
        type: 'fillblank',
        question: 'A landscape ___ (earth mound) between a road and a building can significantly reduce noise exposure.',
        answer: 'berm'
      },
      {
        type: 'mcq',
        question: 'What does Forma\'s noise analysis remain most useful for, per the lesson\'s conclusion?',
        options: [
          'Replacing all specialist acoustic reports permanently',
          'Early screening and comparing noise exposure across massing configurations',
          'Calculating structural loads',
          'Determining Green Area Ratio'
        ],
        answer: 'Early screening and comparing noise exposure across massing configurations'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-12: Daylight Potential Analysis
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-12',
    title: 'Daylight Potential Analysis',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does Forma\'s Daylight Potential measure?',
        options: [
          'How much useful natural light is available at each point on a floor plate',
          'The building\'s total energy consumption',
          'The exact Daylight Autonomy compliance value',
          'Wind speed at rooftop level'
        ],
        answer: 'How much useful natural light is available at each point on a floor plate'
      },
      {
        type: 'truefalse',
        question: 'Forma\'s Daylight Potential is the same detailed metric as Daylight Autonomy (DA) used in formal compliance reports.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'At what work plane height is daylight analysis typically run?',
        options: ['0.8-0.85 m above floor level', '3.0 m above floor level', 'Roof level only', 'Ground level only'],
        answer: '0.8-0.85 m above floor level'
      },
      {
        type: 'fillblank',
        question: 'A good residential floor plate should have more than ___% of habitable rooms in the moderate-to-high daylight zone.',
        answer: '75'
      },
      {
        type: 'mcq',
        question: 'What is described as the single most important factor in daylight performance for residential buildings?',
        options: ['Roof colour', 'Building depth', 'Number of proposals', 'Site boundary shape'],
        answer: 'Building depth'
      },
      {
        type: 'mcq',
        question: 'What design feature can dramatically improve daylight in a deep building floor plate?',
        options: ['A lightwell or atrium', 'A larger parking garage', 'A wider road', 'A steeper roof pitch'],
        answer: 'A lightwell or atrium'
      },
      {
        type: 'truefalse',
        question: 'Forma can analyze the impact of a proposed building on the daylight received by neighbouring buildings.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What UK planning test is referenced for daylight impact on neighbours?',
        options: ['The BRE daylight test (Vertical Sky Component)', 'The Lawson Criteria', 'ISO 9613', 'The 2-hour rule'],
        answer: 'The BRE daylight test (Vertical Sky Component)'
      },
      {
        type: 'fillblank',
        question: 'A rule of thumb given in the lesson: maximum habitable room depth is approximately 2× the window ___ height.',
        answer: 'head'
      },
      {
        type: 'truefalse',
        question: 'A north-facing facade (in the northern hemisphere) can still receive good sky light even without direct sun.',
        answer: true
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-13: Green Area Ratio & Vegetation Planning
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-13',
    title: 'Green Area Ratio & Vegetation',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does Green Area Ratio (GAR) measure?',
        options: [
          'The proportion of a site devoted to vegetation and permeable surfaces, weighted by ecological effectiveness',
          'The total number of parking spaces',
          'The building\'s solar gain',
          'The noise attenuation of a facade'
        ],
        answer: 'The proportion of a site devoted to vegetation and permeable surfaces, weighted by ecological effectiveness'
      },
      {
        type: 'truefalse',
        question: 'In GAR calculations, all types of green space are weighted identically regardless of type.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which vegetation type typically carries the highest GAR weighting factor?',
        options: ['Hard paving', 'Mature tree canopy', 'Building footprint', 'Permeable paving'],
        answer: 'Mature tree canopy'
      },
      {
        type: 'fillblank',
        question: 'GAR was originally developed in ___ (country/region).',
        answer: 'Sweden'
      },
      {
        type: 'mcq',
        question: 'What is the GAR weighting factor for hard, impermeable paving in the typical table shown?',
        options: ['1.0', '0.7', '0.3', '0.0'],
        answer: '0.0'
      },
      {
        type: 'mcq',
        question: 'Which vegetation strategy is recommended first for meeting GAR targets, because it delivers the most GAR per m²?',
        options: ['Trees', 'Gravel', 'Permeable paving', 'Hard paving'],
        answer: 'Trees'
      },
      {
        type: 'truefalse',
        question: 'Forma updates the GAR value in real time as vegetation is added, removed, or repositioned.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Besides GAR compliance, which additional benefit do tree rows on the windward side of a site provide?',
        options: ['Structural reinforcement', 'Wind shelter', 'Increased noise', 'Reduced Green Area Ratio'],
        answer: 'Wind shelter'
      },
      {
        type: 'fillblank',
        question: 'Dense planting rows can attenuate road noise by approximately 3 to ___ dB.',
        answer: '8'
      },
      {
        type: 'mcq',
        question: 'Which sustainability certification scheme is mentioned as including a Green Infrastructure credit referencing GAR-equivalent metrics?',
        options: ['BREEAM Communities', 'ISO 9001', 'PMBOK', 'Six Sigma'],
        answer: 'BREEAM Communities'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-14: View Analysis — What Can Occupants See?
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-14',
    title: 'View Analysis in Forma',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does Forma\'s View Analysis calculate?',
        options: [
          'The proportion of the view hemisphere occupied by sky, green, built environment, and terrain',
          'The total energy load of a building',
          'The Green Area Ratio only',
          'The number of parking spaces per unit'
        ],
        answer: 'The proportion of the view hemisphere occupied by sky, green, built environment, and terrain'
      },
      {
        type: 'mcq',
        question: 'What score range does Forma\'s View Analysis typically use?',
        options: ['0 (fully obstructed) to 1 (completely open)', '0 to 100 dB', '0 to 10,000 lux', 'A-F letter grades'],
        answer: '0 (fully obstructed) to 1 (completely open)'
      },
      {
        type: 'truefalse',
        question: 'Views typically improve with height as surrounding buildings drop below eye level.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which two view analysis modes does the lesson describe?',
        options: [
          'Facade Analysis and Floor Plate Analysis',
          'Wind Analysis and Noise Analysis',
          'Import and Export',
          'WIP and Shared'
        ],
        answer: 'Facade Analysis and Floor Plate Analysis'
      },
      {
        type: 'fillblank',
        question: 'Clicking any point on the view analysis results map shows a 360° ___ view from that point.',
        answer: 'panoramic'
      },
      {
        type: 'mcq',
        question: 'What planning concern can View Analysis help assess when run from a neighbouring building toward a proposal?',
        options: ['Overlooking / privacy', 'Structural loading', 'Green Area Ratio', 'Noise attenuation'],
        answer: 'Overlooking / privacy'
      },
      {
        type: 'fillblank',
        question: 'UK planning commonly references a ___ m separation distance as a typical minimum between directly facing windows.',
        answer: '21'
      },
      {
        type: 'truefalse',
        question: 'View analysis can only assess outward views; it cannot be used to assess whether a proposal overlooks a neighbour.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What is one practical use of view analysis scores for a residential development?',
        options: [
          'Differentiating unit quality and justifying premium pricing tiers',
          'Calculating structural steel tonnage',
          'Determining the noise dB level at the boundary',
          'Setting the site\'s naming convention'
        ],
        answer: 'Differentiating unit quality and justifying premium pricing tiers'
      },
      {
        type: 'mcq',
        question: 'What height range does the lesson say most urban sites typically produce view analysis scores within?',
        options: ['0.2-0.8', '5-10', '100-200', '0.99-1.0 always'],
        answer: '0.2-0.8'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-15: Reading Analysis Results — What the Numbers Mean
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-15',
    title: 'Reading Forma Analysis Results',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the first place recommended to look when reviewing a completed set of analyses?',
        options: ['The analysis dashboard / overview panel', 'The site boundary editor', 'The proposal duplication menu', 'The Revit plugin settings'],
        answer: 'The analysis dashboard / overview panel'
      },
      {
        type: 'truefalse',
        question: 'When comparing proposals, it is valid to use different analysis settings for each proposal.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which statement about solar analysis limitations is accurate, per the lesson?',
        options: [
          'Solar analysis does not model interior temperatures or overheating risk',
          'Solar analysis always includes interior temperature simulation',
          'Solar analysis replaces the need for wind analysis',
          'Solar analysis measures decibel levels'
        ],
        answer: 'Solar analysis does not model interior temperatures or overheating risk'
      },
      {
        type: 'fillblank',
        question: 'GAR calculations assume ___ vegetation, meaning a newly planted tree will not deliver its full contribution for 10-20 years.',
        answer: 'mature'
      },
      {
        type: 'mcq',
        question: 'Why can the same sun hours value represent different quality outcomes in different cities?',
        options: [
          'Because "good" benchmarks are context-appropriate and vary by climate and location',
          'Because Forma calculates sun hours differently in each country',
          'Because sun hours has no fixed definition',
          'Because only tropical climates use sun hours'
        ],
        answer: 'Because "good" benchmarks are context-appropriate and vary by climate and location'
      },
      {
        type: 'mcq',
        question: 'Which of these is listed as a valid benchmark source for interpreting analysis results?',
        options: ['Planning authority requirements', 'A randomly chosen number', 'The Forma logo color', 'The proposal\'s file size'],
        answer: 'Planning authority requirements'
      },
      {
        type: 'truefalse',
        question: 'It is good practice to name analysis runs descriptively (e.g., "Solar — Summer Solstice — Option A") rather than generically.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What should be done with superseded analysis results from earlier design states?',
        options: [
          'Keep them but never mark them, to avoid confusion',
          'Delete or clearly mark them so stale data is not mistakenly referenced',
          'Merge them into a single unnamed layer',
          'Ignore the issue entirely'
        ],
        answer: 'Delete or clearly mark them so stale data is not mistakenly referenced'
      },
      {
        type: 'fillblank',
        question: 'A ___ log records which analysis results led to which design decisions, creating an audit trail for later reference.',
        answer: 'decision'
      },
      {
        type: 'mcq',
        question: 'Which of these does noise analysis in Forma NOT account for, according to the lesson\'s limitations discussion?',
        options: ['Road type classification', 'Actual real-world traffic count data', 'Distance from the source', 'Terrain shielding'],
        answer: 'Actual real-world traffic count data'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ forma-16: Presenting Analysis to Clients & Design Teams
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'forma-16',
    title: 'Presenting Forma Analysis',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the recommended structure for presenting an analysis result?',
        options: [
          'Design Question → Result → Interpretation → Design Response',
          'Just show the raw data table with no context',
          'Result only, with no explanation',
          'Interpretation only, without showing the result'
        ],
        answer: 'Design Question → Result → Interpretation → Design Response'
      },
      {
        type: 'truefalse',
        question: 'Most clients are already fluent in technical terms like Lawson comfort categories and Daylight Autonomy percentages.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which export option is best suited for formal design submissions with multiple analyses?',
        options: ['A single screenshot only', 'Analysis Report (PDF)', 'Deleting the proposal', 'Verbal description only'],
        answer: 'Analysis Report (PDF)'
      },
      {
        type: 'fillblank',
        question: 'Forma\'s browser-based nature makes ___ demonstrations in client meetings highly effective, since changes can be made and re-analyzed instantly.',
        answer: 'live'
      },
      {
        type: 'mcq',
        question: 'Which shadow diagram times are described as a standard planning requirement?',
        options: ['6am, 6pm, midnight', '9am, 12pm, 3pm on the winter solstice', 'Every hour of every day of the year', 'Only sunrise and sunset'],
        answer: '9am, 12pm, 3pm on the winter solstice'
      },
      {
        type: 'mcq',
        question: 'Which Forma feature is particularly effective for showing two design options side by side in a live meeting?',
        options: ['Split View', 'The Compass Rose', 'The View Cube', 'IFC Export'],
        answer: 'Split View'
      },
      {
        type: 'truefalse',
        question: 'Forma analysis outputs are always accepted as a full substitute for specialist reports in every formal planning submission.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which export format is best suited for handing off massing geometry to other software tools?',
        options: ['PNG screenshot', 'IFC geometry export', 'A verbal summary', 'A phone photo of the screen'],
        answer: 'IFC geometry export'
      },
      {
        type: 'fillblank',
        question: 'When submitting Forma outputs to a planning authority, you should always note the analysis tool used and the ___ of analysis.',
        answer: 'date'
      },
      {
        type: 'mcq',
        question: 'Which plain-language translation best fits a high wind comfort issue at a corner, per the lesson\'s examples?',
        options: [
          '"This area is not a great place to put a café."',
          '"This area exceeds the Green Area Ratio target."',
          '"This area has excellent daylight."',
          '"This area needs a COBie export."'
        ],
        answer: '"This area is not a great place to put a café."'
      }
    ]
  }

]
