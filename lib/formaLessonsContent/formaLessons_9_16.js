// ============================================================
// AUTODESK FORMA — LESSONS forma-9 through forma-16 (INTERMEDIATE)
// Section: Environmental Analysis
// File: lib/formaLessonsContent/formaLessons_9_16.js
// Index: lib/formaLessonsData.js
// ============================================================

export const lessons_9_16 = [

  // ============================================================
  // LESSON FORMA-09 — Solar Analysis
  // ============================================================
  {
    id: 'forma-9', num: '09',
    title: 'Solar Analysis — Sun Hours & Shadow Studies',
    topic: 'Solar Analysis', cat: 'intermediate', readTime: '10 min', free: false,
    desc: 'Run solar hour and shadow studies in Forma to evaluate daylight exposure across your site and massing proposals.',
    intro: `Solar analysis is usually the first environmental test architects run in Forma, and for good reason — the direction a building faces and the shadow it casts on neighbours are two of the most consequential early decisions in any project. This lesson covers how to run sun hours and shadow studies, how to read the results map correctly, and what the numbers actually mean for design quality.`,
    sections: [
      {
        id: 's1', heading: 'What Solar Analysis Measures', level: 'h2',
        content: `Forma's solar analysis calculates two related outputs:

**Sun Hours** — the number of hours per day (averaged over a chosen period) during which direct sunlight reaches a specific point on the site or building facade. A point that receives more sun hours is brighter and warmer; a point that receives very few is in persistent shadow.

**Shadow Studies** — a visualization of shadows cast by proposed buildings and context at specific times of day and year. Shadow studies are commonly required by planning authorities to demonstrate that a proposed building does not unacceptably overshadow neighbouring properties.`,
        formula: { label: 'Key Distinction', text: 'Sun Hours = total exposure (how much sun?) | Shadow Study = cast pattern (where does the shadow fall?)' },
      },
      {
        id: 's2', heading: 'Running a Sun Hours Analysis', level: 'h2',
        content: `The Sun Hours analysis is found in the **Right panel → Solar** section.`,
        subsections: [
          {
            heading: 'Sun Hours Setup',
            items: [
              'Open the Right panel → Solar → Sun Hours',
              'Set the **Analysis Period**: typically a full year average, summer solstice (21 June), winter solstice (21 December), or spring/autumn equinox',
              'Set the **Analysis Surface**: ground level, rooftops, or facades (choose what is relevant to your design question)',
              'Set the **Threshold** if required: some planning requirements specify minimum hours at a defined date',
              'Click **Run Analysis** — results appear as a colour-coded map on the canvas',
              'Results are stored in the Analysis Layers in the Left panel for future reference',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Reading the Sun Hours Map', level: 'h2',
        content: `The Sun Hours map uses a colour gradient to show hours of direct sunlight per day at each point on the analyzed surface.`,
        code: {
          label: 'Typical Sun Hours Colour Scale',
          lines: [
            'Dark blue / purple   → 0–1 hours/day   (deep shadow — problematic for residential)',
            'Blue                 → 1–2 hours/day   (heavy shade — below most planning thresholds)',
            'Green                → 2–3 hours/day   (marginal — check planning requirements)',
            'Yellow               → 3–4 hours/day   (acceptable for most use types)',
            'Orange               → 4–5 hours/day   (good solar access)',
            'Red / bright red     → 5+ hours/day    (high solar exposure)',
            '',
            'Note: The scale adapts to the results range — always check',
            'the legend on-screen rather than assuming these exact values.',
          ],
        },
      },
      {
        id: 's4', heading: 'Running a Shadow Study', level: 'h2',
        content: `A Shadow Study shows the specific shadow pattern cast by your proposed buildings and context at a defined date and time. This is the tool used to generate the "9am, 12pm, 3pm" shadow diagrams required by many planning applications.`,
        subsections: [
          {
            heading: 'Shadow Study Steps',
            items: [
              'Right panel → Solar → Shadow Study',
              'Set the **Date**: planning applications typically require winter solstice (21 Dec) as the worst case',
              'Set the **Time**: step through key times of day (9am, 12pm, 3pm is a common requirement)',
              'The shadow appears on the canvas immediately — no separate "Run" button for basic shadow',
              'Use the **Timeline Slider** to animate shadows through the day in real time',
              'Screenshot each required time step for inclusion in planning documents',
            ],
          },
        ],
      },
      {
        id: 's5', heading: 'Impact on Neighbours — The Planning Test', level: 'h2',
        content: `One of the most common uses of solar analysis is demonstrating to a planning authority that a proposed building does not unacceptably overshadow neighbouring residential properties. Most jurisdictions have a specific test for this.`,
        items: [
          '**BRE Guidelines (UK)** — a standard test used in the UK; a window is considered to be adversely affected if it loses more than 20% of its Vertical Sky Component after the proposed development is built',
          '**2-hour rule** — many Australian states require that existing ground-level private open space receives at least 2 hours of direct sun between 9am and 3pm on 21 June',
          '**Sun Rights (Netherlands)** — Dutch planning uses a specific solar angle test for shadow on neighbouring windows',
          'Always check the specific planning authority\'s requirements — Forma\'s sun hours and shadow tools can be configured to match most standard tests',
          'Export shadow diagrams as images or PDFs from the canvas for inclusion in planning applications',
        ],
        formula: { label: 'Design Test', text: 'Run solar analysis on the existing context BEFORE adding your massing — then run it WITH massing to show the delta impact' },
      },
      {
        id: 's6', heading: 'Using Solar Analysis to Drive Massing Decisions', level: 'h2',
        content: `Solar analysis is most powerful when it is used to compare proposals rather than simply reporting on one. Run the analysis on multiple proposals to answer specific design questions.`,
        items: [
          '"Does Option A or Option B give the south-facing courtyard more winter sun?"',
          '"Which orientation (E-W or N-S slab) gives better direct sunlight to apartment balconies?"',
          '"What is the minimum separation distance between the two towers to avoid mutual overshadowing?"',
          '"Does the podium create an unacceptable shadow on the park to the north?"',
          'Use the Split View feature to show the solar analysis of two proposals simultaneously during design reviews',
        ],
      },
    ],
    takeaways: [
      'Solar analysis in Forma produces two outputs: Sun Hours (how much sun a point receives) and Shadow Studies (where shadows fall at specific times).',
      'Sun Hours uses a colour-coded map from deep blue (shadow) to red (high exposure) — always check the on-screen legend for the actual scale values.',
      'Shadow Studies require a date and time; winter solstice at multiple time steps is the standard planning requirement in most jurisdictions.',
      'Run solar analysis on the existing context before adding your massing to establish a baseline for impact assessment.',
      'Most planning authorities have specific solar tests (BRE, 2-hour rule, etc.) — configure Forma\'s settings to match the relevant standard.',
      'Solar analysis is most valuable as a comparative tool between proposals, not just a report on a single option.',
    ],
    resource: { label: 'Forma Solar Analysis Settings Guide', type: 'PDF' },
    quiz: { label: 'Solar Analysis Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-8', title: 'Parametric Massing — Generating Buildings from Rules' },
    next: { id: 'forma-10', title: 'Wind Analysis — Pedestrian Comfort & Microclimate' },
  },

  // ============================================================
  // LESSON FORMA-10 — Wind Analysis
  // ============================================================
  {
    id: 'forma-10', num: '10',
    title: 'Wind Analysis — Pedestrian Comfort & Microclimate',
    topic: 'Wind Analysis', cat: 'intermediate', readTime: '10 min', free: false,
    desc: 'Understand pedestrian wind comfort analysis in Forma — Lawson criteria, wind roses, and massing strategies to improve microclimate.',
    intro: `A tower that looks elegant in elevation can create a wind tunnel at its base that makes the adjacent street or plaza unusable for half the year. Wind analysis at the massing stage identifies these problems before they are committed to in a structural or planning submission. Forma runs wind comfort analysis using the Lawson criteria — the international standard for evaluating pedestrian wind environments — and visualises the results directly on the site model.`,
    sections: [
      {
        id: 's1', heading: 'Why Wind Analysis Matters at Massing Stage', level: 'h2',
        content: `Wind effects around buildings are highly sensitive to massing form. Changes that seem minor — rotating a tower by 10°, moving a podium setback from 3m to 6m, or adding a screen wall — can dramatically change the pedestrian wind environment.

The key insight is that tall buildings do not just experience wind — they redirect it. A 30-storey tower forces wind that would normally pass over the building down to pedestrian level, accelerating it. In some configurations, this creates wind speeds at the base that are two to three times the ambient wind speed at open terrain.`,
        formula: { label: 'Wind Design Rule', text: 'Taller building = greater wind amplification at base — check pedestrian areas around any building over 10 storeys' },
      },
      {
        id: 's2', heading: 'The Lawson Criteria', level: 'h2',
        content: `The **Lawson Criteria** are the international standard used by Forma (and by most wind consultants worldwide) to classify pedestrian wind comfort.`,
        code: {
          label: 'Lawson Criteria Categories',
          lines: [
            'Category A — Sitting (cafes, outdoor seating)',
            '  → Acceptable: calm wind, suitable for sedentary use',
            '',
            'Category B — Standing (bus stops, street markets)',
            '  → Acceptable: gentle breeze, tolerable for stationary people',
            '',
            'Category C — Strolling (pedestrian routes, parks)',
            '  → Acceptable: moderate breeze, suitable for walking',
            '',
            'Category D — Walking Fast (city streets, transit plazas)',
            '  → Acceptable: fresh breeze, suitable for purposeful movement',
            '',
            'Category E — Uncomfortable (above threshold for any use)',
            '  → Unacceptable: wind speed too high for any outdoor activity',
            '',
            'Forma maps each point on the site to one of these categories',
            'based on the calculated wind speed exceedance frequency.',
          ],
        },
      },
      {
        id: 's3', heading: 'Running a Wind Analysis', level: 'h2',
        content: `The Wind Analysis in Forma uses the site's geographic location to determine the local wind climate (direction, frequency, and speed distribution from meteorological data), then runs a CFD-like simulation to predict pedestrian-level wind conditions.`,
        subsections: [
          {
            heading: 'Wind Analysis Setup',
            items: [
              'Right panel → Wind → Pedestrian Comfort',
              'Forma automatically loads the wind climate data for the project\'s geographic location',
              'Set the **Analysis Height** — typically 1.5m to 2m (standard pedestrian height)',
              'Set which **Proposals** to include in the analysis (buildings that obstruct wind)',
              'Click **Run Analysis** — wind analysis takes longer than solar (1–5 minutes for a typical site)',
              'Results appear as a colour-coded Lawson comfort map on the ground plane of the canvas',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Reading the Wind Comfort Map', level: 'h2',
        content: `The wind comfort map assigns a Lawson category to every point on the ground plane of your site and the immediate surrounding area.`,
        items: [
          '**Green** — comfortable (Category A–C): suitable for sitting, standing, or strolling',
          '**Yellow / Amber** — marginal (Category D): acceptable for purposeful walking but not leisure or seating',
          '**Red / Dark red** — uncomfortable (Category E): wind speeds too high for any outdoor use',
          'Wind comfort results vary by season: Forma can run summer and winter conditions separately',
          'Areas between two tall buildings ("canyon effect") often show Category E results — a common finding on dense urban sites',
          'Roof terraces, podium decks, and balconies can also be checked for wind comfort at their respective heights',
        ],
      },
      {
        id: 's5', heading: 'Improving Wind Comfort with Massing', level: 'h2',
        content: `When wind analysis reveals uncomfortable areas, the massing solution usually falls into one of three categories: obstruction (blocking the wind path), deflection (redirecting wind upward or sideways), or mitigation (adding local features that break up wind flow).`,
        subsections: [
          {
            heading: 'Common Massing Strategies',
            items: [
              '**Rotate the building** — orienting the long face perpendicular to the prevailing wind can reduce canyon effects',
              '**Podium buildings** — a lower podium connecting towers reduces wind channelling at ground level',
              '**Corner mitigation** — chamfering (cutting) building corners reduces the "corner acceleration" effect',
              '**Wind screen walls** — a low wall or dense planting row perpendicular to the wind direction creates a sheltered zone',
              '**Staggered tower placement** — placing towers at offset positions rather than in a straight row reduces mutual wind amplification',
              '**Reduce building height** — directly reduces wind amplification at base; test incremental height reductions in proposals',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'Wind Analysis and Wind Consultants', level: 'h2',
        content: `**Honest Assessment:**
Forma's wind analysis is excellent for early-stage massing decisions — it uses real meteorological data and provides Lawson-compliant results. However, it is not a substitute for a full wind tunnel test or detailed CFD study on large, complex, or high-risk projects.

Many planning authorities require a physical wind tunnel test or peer-reviewed CFD study for towers above approximately 20–25 storeys. Use Forma to optimise your massing and arrive at a much better-performing scheme before commissioning that specialist study — this saves money, as wind consultants charge per iteration.

Projects where Forma wind analysis is typically sufficient without specialist testing:
- Residential developments up to ~10 storeys
- Low-rise mixed-use in sheltered urban contexts
- Feasibility studies and planning pre-applications`,
      },
    ],
    takeaways: [
      'Wind analysis at massing stage identifies downwash and canyon effects that make pedestrian areas uncomfortable before the design is committed.',
      'Forma uses the Lawson Criteria (Categories A–E) to classify pedestrian wind comfort from calm (A) to unacceptable (E).',
      'Wind climate data (direction, frequency, speed) is loaded automatically from meteorological records for the project location.',
      'Wind comfort maps show green (comfortable), amber (marginal), and red (unacceptable) zones on the ground plane.',
      'Massing strategies to improve comfort include building rotation, podium levels, corner chamfering, screen walls, and staggered tower placement.',
      'Forma wind analysis is a valid early-stage tool; specialist wind tunnel or full CFD testing is still required for tall buildings on high-risk planning applications.',
    ],
    resource: { label: 'Lawson Criteria Reference Card', type: 'PDF' },
    quiz: { label: 'Wind Analysis Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-9', title: 'Solar Analysis — Sun Hours & Shadow Studies' },
    next: { id: 'forma-11', title: 'Noise Analysis — Understanding Urban Sound Exposure' },
  },

  // ============================================================
  // LESSON FORMA-11 — Noise Analysis
  // ============================================================
  {
    id: 'forma-11', num: '11',
    title: 'Noise Analysis — Understanding Urban Sound Exposure',
    topic: 'Noise Analysis', cat: 'intermediate', readTime: '9 min', free: false,
    desc: 'Map urban noise exposure across your site using Forma\'s noise analysis to inform unit placement and facade treatment.',
    intro: `Noise is one of the most overlooked factors in early-stage design — and one of the most expensive to fix late. A residential development placed directly adjacent to a busy road or railway without appropriate shielding can require extensive post-tender facade upgrades, or worse, fail a planning acoustic condition entirely. Forma's noise analysis maps ambient noise levels across the site from traffic and rail sources, giving you the information to make noise-aware decisions at the massing stage.`,
    sections: [
      {
        id: 's1', heading: 'What Forma Noise Analysis Measures', level: 'h2',
        content: `Forma's noise analysis models **ambient noise from transport sources** — road traffic and railways — and calculates the sound pressure level (in dB) at each point on and around the site. This is not the same as modeling interior acoustic performance (reverberation time, sound insulation values) — it is an external noise map showing where noise exposure is highest and lowest.`,
        formula: { label: 'What Noise Analysis Is', text: 'External ambient noise exposure map — not interior acoustics, not facade SRI calculations' },
      },
      {
        id: 's2', heading: 'How Forma Calculates Noise', level: 'h2',
        content: `Forma uses road and rail network data (imported automatically from OpenStreetMap) combined with standard noise propagation calculations based on the **ISO 9613** standard to estimate sound levels at each point on the site.`,
        items: [
          'Road noise is estimated from road type and classification (motorway, primary road, secondary road, etc.)',
          'Rail noise is estimated from rail line type (heavy rail, light rail/tram)',
          'The calculation accounts for distance attenuation (sound reduces with distance from source)',
          'Terrain shielding is included — hills and valleys affect how sound propagates',
          'Context buildings act as acoustic screens — a building between your site and a busy road reduces noise levels at points behind it',
          'The analysis does not account for actual traffic volumes (counts) or night/day differences — it is an approximation based on road type',
        ],
      },
      {
        id: 's3', heading: 'Running the Noise Analysis', level: 'h2',
        content: `Noise analysis in Forma is among the fastest to run — it is a computational model, not a simulation, so results appear within seconds.`,
        subsections: [
          {
            heading: 'Noise Analysis Steps',
            items: [
              'Right panel → Noise',
              'Confirm that the road and rail network is correctly imported from the map data',
              'Set the **Analysis Height** — ground floor (1.5m) for ground-level amenity, or upper floors (e.g. 5m, 10m) for dwelling noise exposure',
              'Click **Run Analysis** — results appear immediately as a colour-coded noise map',
              'Adjust the height and re-run to understand how noise changes vertically up the building',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Reading the Noise Map', level: 'h2',
        content: `The noise map uses a colour gradient from low (blue, quiet) to high (red, loud), calibrated in decibels (dB).`,
        code: {
          label: 'Noise Level Reference (typical residential standards)',
          lines: [
            '< 50 dB     → Good (below most residential noise guidelines)',
            '50–55 dB    → Acceptable for residential; no special measures typically required',
            '55–65 dB    → Marginal; planning conditions may require facade mitigation',
            '65–72 dB    → High; acoustic glazing and mechanical ventilation typically required',
            '> 72 dB     → Very high; major acoustic mitigation required; some uses may be unacceptable',
            '',
            'Note: thresholds vary by country, local authority, and use type.',
            'UK: BS 8233 / WHO Guidelines',
            'Australia: State Environmental Planning Policy (SEPP)',
            'Philippines: DENR DAO 2000-81 (Environmental Noise Standards)',
          ],
        },
      },
      {
        id: 's5', heading: 'Using Noise Analysis to Inform Design', level: 'h2',
        content: `Noise analysis should directly inform where quiet-use rooms (bedrooms, living rooms) are placed on the building and which facades need acoustic treatment.`,
        items: [
          '**Back of building principle** — place bedrooms and primary living areas on the quietest facade (away from the road)',
          '**Acoustic screen buildings** — place commercial or non-noise-sensitive uses on the noisy side to shield residential behind',
          '**Noise-robust uses on lower floors** — parking, retail, and utility rooms can tolerate higher noise; place residential on upper floors that rise above road-level noise',
          '**U-shaped and courtyard layouts** — the courtyard acts as a quiet acoustic refuge shielded by the building itself',
          '**Landscape berms** — a landscaped earth mound between the road and the building can reduce noise exposure significantly; Forma\'s terrain model will capture this if modeled',
        ],
        formula: { label: 'Design Strategy', text: 'Shield quiet uses with noisy ones; use the building\'s own massing as an acoustic barrier' },
      },
      {
        id: 's6', heading: 'Limitations and Next Steps', level: 'h2',
        content: `**Important Limitation:**
Forma's noise analysis is based on road type and approximate propagation — it does not use actual traffic count data, and it does not model specific noise sources like mechanical plant, rail at-grade crossings, or live entertainment venues. For planning applications in noise-sensitive contexts, a specialist acoustic report based on measured or modeled actual traffic flows will still be required.

Forma's noise analysis is best used to:
- Quickly identify which parts of the site are most exposed
- Compare noise exposure across different massing configurations
- Make preliminary decisions about unit placement and orientation before commissioning specialist acoustic consultants

The specialist report — when required — is likely to confirm what Forma already showed. Arriving at a better-positioned massing before commissioning that report saves time and money.`,
      },
    ],
    takeaways: [
      'Forma noise analysis maps ambient transport noise (road and rail) across the site using ISO 9613 propagation calculations.',
      'Results are shown as a colour-coded map in dB, from quiet (blue) to loud (red).',
      'Analysis height can be varied — run at ground level for amenity areas and at dwelling floor levels for residential exposure.',
      'Use noise results to place quiet-use rooms on quiet facades, screen residential with commercial uses, and exploit the building\'s own mass as a noise barrier.',
      'Courtyard and U-shaped layouts create sheltered quiet zones that Forma\'s analysis captures correctly.',
      'Forma noise analysis is an early-stage screening tool; specialist acoustic reports with real traffic count data are still required for planning submissions.',
    ],
    resource: { label: 'Noise Analysis & Acoustic Design Guide', type: 'PDF' },
    quiz: { label: 'Noise Analysis Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-10', title: 'Wind Analysis — Pedestrian Comfort & Microclimate' },
    next: { id: 'forma-12', title: 'Daylight Potential Analysis' },
  },

  // ============================================================
  // LESSON FORMA-12 — Daylight Potential Analysis
  // ============================================================
  {
    id: 'forma-12', num: '12',
    title: 'Daylight Potential Analysis',
    topic: 'Daylight', cat: 'intermediate', readTime: '9 min', free: false,
    desc: 'Use Forma\'s daylight analysis to evaluate how much natural light reaches your proposed floor plates and neighbouring buildings.',
    intro: `Daylight is one of the primary quality metrics for residential design — and one of the most difficult to retrofit once a building is constructed. The distance between two parallel building wings, the floor-to-ceiling height, the orientation of a facade, and the depth of a room all interact to determine whether residents experience their home as bright or gloomy. Forma's daylight analysis quantifies this at the massing stage, so the design can be adjusted before any of these decisions are locked in.`,
    sections: [
      {
        id: 's1', heading: 'What Daylight Analysis Measures in Forma', level: 'h2',
        content: `Forma's daylight analysis calculates **Daylight Potential** — a measure of how much useful natural light is available at each point on a floor plate, given the massing geometry and surrounding context. It is expressed as a percentage of the time (or sky condition) that useful daylight levels are achievable.

This is different from the more complex **Daylight Autonomy (DA)** or **Useful Daylight Illuminance (UDI)** metrics used in detailed daylight reports. Forma's output is a proxy metric appropriate for early-stage massing decisions — precise enough to differentiate good from poor options, fast enough to run repeatedly as the design evolves.`,
        formula: { label: 'Metric Clarification', text: 'Forma Daylight Potential = early-stage proxy | Daylight Autonomy (CBDM) = detailed compliance check' },
      },
      {
        id: 's2', heading: 'Running a Daylight Analysis', level: 'h2',
        content: `Daylight analysis is run on specific floor levels of your proposed buildings, not on the ground plane (unlike solar or wind analysis, which typically analyze the ground).`,
        subsections: [
          {
            heading: 'Daylight Analysis Steps',
            items: [
              'Right panel → Daylight',
              'Select the building volume(s) you want to analyze',
              'Set the **Floor Level** — select which floor or multiple floors to analyze',
              'Set the **Work Plane Height** — typically 0.8m (desk height) or 0.85m above floor level',
              'Click **Run Analysis** — results show as a colour-coded map on the selected floor plate',
              'The analysis shows which parts of the floor plate are likely to receive adequate daylight and which are deep in shadow',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Reading the Daylight Results', level: 'h2',
        content: `The daylight result map colour-codes each point on the floor plate from low (dark, inadequate) to high (bright, well-daylit).`,
        code: {
          label: 'Daylight Result Interpretation',
          lines: [
            'Dark blue    → Very low daylight potential (deep floor plate or heavily overshadowed)',
            'Mid blue     → Low daylight (accessible to limited daylight on overcast days only)',
            'Green        → Moderate daylight (suitable for circulation, utility rooms)',
            'Yellow       → Good daylight (suitable for most room types)',
            'Orange/Red   → High daylight (well-daylit; check for summer overheating risk)',
            '',
            'Key design question:',
            '  What proportion of the habitable floor area is in the green-to-red range?',
            '  A good residential floor plate has >75% of habitable rooms in the',
            '  moderate-to-high daylight zone.',
          ],
        },
      },
      {
        id: 's4', heading: 'Daylight and Building Depth', level: 'h2',
        content: `Building depth is the single most important factor in daylight performance on residential buildings. Deep floor plates — more than approximately 8–10m from a window wall — cannot receive adequate daylight without skylights or lightwells, regardless of what else is done.`,
        items: [
          'Forma\'s daylight map makes this visible instantly: the blue zone at the centre of a deep plan is the area that cannot be daylit from the perimeter',
          'Target a maximum habitable room depth of 2× the window head height for adequate daylight',
          'Adding a lightwell in the centre of a deep building can dramatically improve daylight results — model this in Forma as a void in the building volume',
          'Atria and internal courtyards can also be tested: model them explicitly and run daylight on the surrounding floor plates',
          'Compare two proposals with different building depths side by side to see the daylight performance difference directly',
        ],
        formula: { label: 'Depth Rule', text: 'Max habitable depth ≈ 2× window head height | A 2.5m window head → 5m max room depth for adequate daylight' },
      },
      {
        id: 's5', heading: 'Impact on Neighbouring Daylight', level: 'h2',
        content: `Forma can also analyze the **impact of your proposed buildings on the daylight received by neighbouring buildings** — an increasingly important planning test as urban densities increase.`,
        items: [
          'Select neighbouring context buildings in the left panel and run daylight analysis on their floor plates',
          'Compare the results with and without your proposed massing to assess the daylight impact',
          'UK planning uses the BRE daylight test (Vertical Sky Component) for this — Forma\'s results provide a good proxy',
          'A significant drop in daylight to neighbouring windows is a material planning concern; if Forma shows this, a specialist daylight report will be required',
          'This test is particularly important for tall buildings in dense urban contexts adjacent to lower-scale residential streets',
        ],
      },
      {
        id: 's6', heading: 'Daylight, Orientation, and Mixed-Use', level: 'h2',
        content: `Daylight analysis interacts with orientation (which direction the building faces), making it essential to run alongside solar analysis rather than in isolation.

A north-facing facade in the northern hemisphere receives very little direct sun but can still receive good sky light (diffuse daylight from the sky vault). Forma's daylight analysis captures this correctly — it measures sky access, not just direct sun.

For mixed-use buildings, different daylight expectations apply to different uses:
- Office floor plates can typically tolerate depths of 12–15m with good facade design
- Residential requires shallower plans and higher window-to-floor-area ratios
- Retail and commercial at ground floor are less daylight-sensitive

Run daylight analysis separately for residential and non-residential floors if the building typology mixes uses vertically.`,
      },
    ],
    takeaways: [
      'Forma\'s Daylight Potential is an early-stage proxy metric showing how well natural light can reach floor plates given the massing geometry.',
      'Analysis is run on specific floor levels, not the ground plane, at a work plane height of approximately 0.8m.',
      'Building depth is the dominant factor: deeper than ~2× window head height, habitable rooms cannot be adequately daylit from the perimeter.',
      'Forma can test the impact of your proposed buildings on daylight received by neighbouring buildings — a key planning consideration.',
      'Run daylight alongside solar analysis: a north-facing room can still be well-daylit from sky light even without direct sun.',
      'Detailed daylight compliance (Daylight Autonomy, BRE tests) requires specialist software; Forma provides reliable early-stage direction.',
    ],
    resource: { label: 'Forma Daylight Analysis Reference', type: 'PDF' },
    quiz: { label: 'Daylight Analysis Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-11', title: 'Noise Analysis — Understanding Urban Sound Exposure' },
    next: { id: 'forma-13', title: 'Green Area Ratio & Vegetation Planning' },
  },

  // ============================================================
  // LESSON FORMA-13 — Green Area Ratio & Vegetation Planning
  // ============================================================
  {
    id: 'forma-13', num: '13',
    title: 'Green Area Ratio & Vegetation Planning',
    topic: 'Vegetation', cat: 'intermediate', readTime: '8 min', free: false,
    desc: 'Calculate the Green Area Ratio for your Forma proposal and plan vegetation to meet sustainability and planning targets.',
    intro: `Green Area Ratio is fast becoming a standard planning requirement on new developments worldwide — from Scandinavia, where it originated, to Singapore, Australia, and increasingly the UK. Forma calculates it automatically, updating in real time as vegetation is added to the design. This lesson covers how GAR is calculated, how to use vegetation tools to meet targets, and how to think about greening as a multifunctional design strategy rather than just a planning metric.`,
    sections: [
      {
        id: 's1', heading: 'What is Green Area Ratio?', level: 'h2',
        content: `**Green Area Ratio (GAR)** is a planning metric that measures the proportion of a site devoted to vegetation and permeable surfaces, weighted by ecological effectiveness. It was developed in Sweden and is now used in multiple forms globally (sometimes called Green Space Factor, Green Roof Score, or similar names).

The key principle is that not all green is equal — a dense tree canopy is ecologically more valuable than grass, which is more valuable than gravel. GAR assigns a **weighting factor** to each vegetation type and sums them across the site area.`,
        formula: { label: 'GAR Formula', text: 'GAR = Σ (Area × Weighting Factor) ÷ Total Site Area' },
      },
      {
        id: 's2', heading: 'GAR Weighting Factors in Forma', level: 'h2',
        content: `Forma uses a set of standard GAR weighting factors for different vegetation and surface types. These are configurable in some versions to match specific local planning requirements.`,
        code: {
          label: 'Typical GAR Weighting Factors',
          lines: [
            'Mature tree canopy        → 1.0 (highest ecological value)',
            'Shrub planting            → 0.7',
            'Green roof (intensive)    → 0.7',
            'Green roof (extensive)    → 0.6',
            'Lawn / meadow grass       → 0.3',
            'Permeable paving          → 0.2',
            'Water feature / pond      → 0.8',
            'Hard paving (impermeable) → 0.0',
            'Building footprint        → 0.0',
            '',
            'These values vary by planning authority — always check',
            'local requirements and adjust Forma\'s settings if needed.',
          ],
        },
      },
      {
        id: 's3', heading: 'Checking the GAR in Forma', level: 'h2',
        content: `Forma displays the current GAR for each proposal in the right panel under the Green Area Ratio section. It updates in real time as vegetation is added, removed, or repositioned.`,
        subsections: [
          {
            heading: 'GAR Display Steps',
            items: [
              'Right panel → Green Area Ratio',
              'The current GAR value for the active proposal is displayed',
              'Forma also shows a breakdown by vegetation type (how much of the GAR comes from trees, roofs, etc.)',
              'Set a **Target GAR** (from planning requirements or sustainability certification) to see how far the current proposal is from compliance',
              'The target and current value are shown as a progress indicator',
            ],
          },
        ],
      },
      {
        id: 's4', heading: 'Adding Vegetation to Meet GAR Targets', level: 'h2',
        content: `Forma provides vegetation placement tools in the left panel and bottom toolbar for placing trees, shrubs, grass areas, and green roofs.`,
        items: [
          '**Trees** — placed individually; choose species or generic height class; mature tree canopy provides the highest GAR contribution per m²',
          '**Shrub areas** — draw a polygon to define a shrub planting area; useful for understory planting and biodiverse groundcover',
          '**Grass / meadow** — draw a polygon on the ground; good for open space areas but low GAR weighting',
          '**Green roofs** — applied to selected building rooftop areas; intensive roofs support more planting and carry higher weighting',
          '**Water features** — ponds and rain gardens contribute to GAR and have dual benefits for stormwater management',
          'Focus on trees first: they deliver the most GAR contribution per m² and also improve solar shade, wind shelter, and amenity simultaneously',
        ],
        formula: { label: 'Efficiency Rule', text: 'One mature tree canopy = approximately 50× the GAR contribution of the same area of hard paving' },
      },
      {
        id: 's5', heading: 'Green Infrastructure as Multi-Functional Design', level: 'h2',
        content: `GAR compliance is the minimum bar — good urban design integrates vegetation in ways that deliver multiple benefits simultaneously.`,
        subsections: [
          {
            heading: 'Multiple Benefits of Vegetation',
            items: [
              '**Solar shading** — trees on the west and south shade buildings and public spaces, reducing overheating and cooling loads',
              '**Wind shelter** — tree rows on the windward side create wind shadows that improve pedestrian comfort',
              '**Noise screening** — dense planting rows can attenuate road noise by 3–8 dB',
              '**Stormwater retention** — permeable planting areas absorb rainfall, reducing runoff and sewer pressure',
              '**Biodiversity** — layered planting (trees, shrubs, groundcover) supports urban wildlife corridors',
              '**Mental health and amenity** — green spaces increase the perceived quality of residential environments',
            ],
          },
        ],
      },
      {
        id: 's6', heading: 'GAR in the Context of Sustainability Standards', level: 'h2',
        content: `GAR targets vary depending on the planning context and any sustainability certification being pursued.`,
        items: [
          '**UK planning conditions** — many local authorities now set minimum GAR targets of 0.3–0.5 for urban residential sites',
          '**BREEAM Communities** — includes a Green Infrastructure credit that references GAR-equivalent metrics',
          '**LEED Neighbourhood Development** — includes Greenspace credits that overlap with GAR principles',
          '**Singapore BCA Green Mark** — includes Greenery Replacement Policy scores that function similarly to GAR',
          '**WELL Building Standard** — includes vegetation and biophilic design credits that support high-GAR environments',
          'Always confirm the specific target and method with the sustainability consultant early — different standards use different weighting factors',
        ],
      },
    ],
    takeaways: [
      'Green Area Ratio measures the ecological value of a site\'s vegetation, weighted by type: trees (1.0) > intensive green roofs (0.7) > grass (0.3) > hard paving (0.0).',
      'Forma calculates and displays GAR in real time as vegetation is added to the proposal.',
      'Trees deliver the highest GAR contribution per m² and should be the first strategy for meeting GAR targets.',
      'Set a target GAR from local planning requirements or sustainability certification goals to track compliance through the design process.',
      'Vegetation serves multiple functions beyond GAR: solar shading, wind shelter, noise attenuation, stormwater, and biodiversity.',
      'GAR weighting factors vary by planning authority — configure Forma\'s settings to match local requirements before using results for planning submissions.',
    ],
    resource: { label: 'Green Area Ratio Standards Reference', type: 'PDF' },
    quiz: { label: 'Green Area Ratio Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-12', title: 'Daylight Potential Analysis' },
    next: { id: 'forma-14', title: 'View Analysis — What Can Occupants See?' },
  },

  // ============================================================
  // LESSON FORMA-14 — View Analysis
  // ============================================================
  {
    id: 'forma-14', num: '14',
    title: 'View Analysis — What Can Occupants See?',
    topic: 'View Analysis', cat: 'intermediate', readTime: '8 min', free: false,
    desc: 'Use Forma\'s View Analysis to evaluate the quality of outward views from proposed buildings and identify the best orientations.',
    intro: `View quality is one of the primary drivers of residential property value and occupant wellbeing, yet it is rarely quantified in early-stage design. Forma's View Analysis calculates what can be seen from each point on a building's facade or floor plate — how much sky, how much green space, how much built environment — and presents this as a comparable, measurable metric across design alternatives.`,
    sections: [
      {
        id: 's1', heading: 'What View Analysis Measures', level: 'h2',
        content: `Forma's View Analysis calculates the **view quality** from specified points or floors on a proposed building. It measures what proportion of the view hemisphere from each point is occupied by:

- **Sky** — open sky above the horizon line (high value)
- **Green** — trees, vegetation, parks, and landscape (high value)
- **Built environment** — other buildings, roads, infrastructure (varies)
- **Terrain** — ground, hills, water (varies)

A view with a high proportion of sky and green and a low proportion of densely built environment is generally considered higher quality. However, a specific urban view — a historic skyline, a waterfront — can be extremely valuable even if "built environment" dominates.`,
        formula: { label: 'View Quality', text: 'Sky + Green = universal view quality indicators | Urban/water views = context-specific value judgements' },
      },
      {
        id: 's2', heading: 'Running a View Analysis', level: 'h2',
        content: `View Analysis is found in the Right panel and works by casting viewpoint rays from selected analysis points on the building.`,
        subsections: [
          {
            heading: 'View Analysis Steps',
            items: [
              'Right panel → View',
              'Set the **Analysis Height** or select specific floor levels to analyze',
              'Choose **Facade Analysis** (from the outside of the building, looking out) or **Floor Plate Analysis** (from the interior)',
              'Click **Run Analysis** — results show as a colour-coded map on the facade or floor plate',
              'Higher values (warmer colours) indicate better views; lower values (cooler colours) indicate more obstructed views',
              'Click any point on the results map to see a 360° panoramic view from that point on the canvas',
            ],
          },
        ],
      },
      {
        id: 's3', heading: 'Reading View Analysis Results', level: 'h2',
        content: `The view analysis result is displayed as a score from 0 (completely obstructed) to 1 (completely open, 360° unobstructed sky). In practice, most urban sites produce scores in the 0.2–0.8 range.`,
        items: [
          '**High score (0.7–1.0)** — excellent views; minimal obstruction from surrounding buildings or terrain',
          '**Medium score (0.4–0.7)** — acceptable views; some obstruction but significant sky and/or green visible',
          '**Low score (0–0.4)** — heavily obstructed views; building is closely surrounded by other structures',
          'Compare scores at different floor levels — views typically improve dramatically with height as surrounding buildings drop below eye level',
          'Use view analysis to differentiate unit quality in a residential building — a specific floor or orientation with significantly better view scores justifies a premium pricing tier',
        ],
      },
      {
        id: 's4', heading: 'Using View Analysis to Inform Design', level: 'h2',
        content: `The most common design questions that view analysis answers are about orientation, building positioning, and separation distance between buildings.`,
        subsections: [
          {
            heading: 'Design Questions View Analysis Answers',
            items: [
              '"Which orientation gives the best views across the park — east or south-east?"',
              '"At what floor level do views clear the adjacent 6-storey block?"',
              '"Does the second tower in Option B block the harbour views from Tower A\'s upper floors?"',
              '"Which units face the quieter, greener side of the development?"',
              '"Is there a case for placing the premium units on the north side (park view) rather than the assumed south?"',
            ],
          },
        ],
      },
      {
        id: 's5', heading: 'Privacy and Overlooking', level: 'h2',
        content: `View analysis works in both directions. The same geometry that shows you what your building can see also reveals what your building\'s occupants can be seen from.

Run view analysis from neighbouring buildings toward your proposed development to assess **overlooking** — an important planning concern for residential proposals.`,
        items: [
          'Select a neighbouring building and run view analysis at eye level (1.5–1.7m above floor)',
          'Check whether proposed building windows and balconies are directly visible from neighbouring windows',
          'UK planning uses a 21m separation distance as a typical minimum between directly facing windows; check local guidance',
          'If overlooking is confirmed by view analysis, massing responses include rotating the building, offsetting window positions, or increasing separation distance',
          'Planning officers often require visual documentation of overlooking assessments — screenshots from Forma\'s view analysis are useful supporting evidence',
        ],
        formula: { label: 'Privacy Check', text: 'Run view analysis FROM neighbouring buildings TO your proposal — overlooking works both ways' },
      },
    ],
    takeaways: [
      'View Analysis measures what proportion of the view hemisphere from each point is sky, green, built environment, or terrain.',
      'Results are scored from 0 (fully obstructed) to 1 (completely open) and mapped across the facade or floor plate.',
      'Views improve with height as surrounding buildings drop below the horizon — use this to differentiate unit quality and pricing.',
      'View analysis answers orientation questions: which side of the building faces the park, the waterfront, or the quiet courtyard?',
      'Run view analysis from neighbouring buildings toward your proposal to check overlooking and privacy — an important planning consideration.',
      'Screenshots from Forma\'s view analysis can serve as visual documentation in planning submissions.',
    ],
    resource: { label: 'View Quality Assessment Guide', type: 'PDF' },
    quiz: { label: 'View Analysis Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-13', title: 'Green Area Ratio & Vegetation Planning' },
    next: { id: 'forma-15', title: 'Reading Analysis Results — What the Numbers Mean' },
  },

  // ============================================================
  // LESSON FORMA-15 — Reading Analysis Results
  // ============================================================
  {
    id: 'forma-15', num: '15',
    title: 'Reading Analysis Results — What the Numbers Mean',
    topic: 'Analysis', cat: 'intermediate', readTime: '9 min', free: false,
    desc: 'Learn how to interpret, compare, and critically evaluate Forma\'s environmental analysis outputs for design decision-making.',
    intro: `Running an analysis in Forma is easy. Reading the result correctly — and knowing what it means for your design — takes more practice. Numbers without context are just numbers. A sun hours figure of 3.5 hours/day might be excellent for a north European courtyard and deeply inadequate for a residential balcony in Singapore. This lesson covers how to read each analysis type critically, how to compare results across proposals, and how to avoid the most common misinterpretations.`,
    sections: [
      {
        id: 's1', heading: 'The Analysis Dashboard', level: 'h2',
        content: `Forma provides a summary dashboard that pulls key metrics from all completed analyses across a proposal into one overview panel. This is the first place to look when reviewing a completed set of analyses — it gives a high-level picture of where the proposal is performing well and where it is not, before diving into individual analysis maps.`,
        items: [
          'Access the dashboard via Right panel → Overview or the summary icon in the analysis section',
          'The dashboard shows a summary score or value for each analysis type: solar hours, wind comfort percentage, noise dB, daylight potential, and GAR',
          'Scores are shown relative to any targets you have set — green (meeting target) or red (below target)',
          'Use the dashboard to identify the weakest analysis area and start design refinement there',
          'The dashboard is also a useful starting point for a client or team review meeting before going into individual maps',
        ],
      },
      {
        id: 's2', heading: 'Comparing Results Across Proposals', level: 'h2',
        content: `The most powerful use of Forma's analysis is not interpreting one result in isolation, but comparing results across two or more proposals to determine which performs best and why.`,
        code: {
          label: 'Proposal Comparison Workflow',
          lines: [
            'Step 1: Run the same analysis on all proposals being compared',
            '        (ensure analysis settings are identical across proposals)',
            'Step 2: Open the Comparison view (Split View or overlay mode)',
            'Step 3: Focus on the metric most critical to the design question:',
            '        - Planning requirement → solar hours or noise dB',
            '        - Amenity → wind comfort and daylight',
            '        - Sustainability target → GAR',
            'Step 4: Identify which proposal meets all non-negotiable thresholds',
            'Step 5: Among compliant proposals, compare secondary metrics',
            'Step 6: Document the comparison for design team or client review',
          ],
        },
        formula: { label: 'Comparison Rule', text: 'Use the same analysis settings across all proposals — changing settings between runs makes comparison invalid' },
      },
      {
        id: 's3', heading: 'Understanding What Analysis Numbers Cannot Tell You', level: 'h2',
        content: `Knowing the limits of Forma's analysis is as important as knowing how to run it.`,
        items: [
          '**Solar analysis does not model interior temperatures** — sun hours on a facade says nothing about overheating risk inside',
          '**Wind analysis does not include local turbulence effects** from very small features — a setback recess or canopy overhang that creates shelter is not captured at this scale',
          '**Noise analysis uses road type, not real traffic count** — actual noise levels may differ significantly from the model, especially on lightly trafficked classified roads',
          '**Daylight analysis does not model room layout or window size** — it assesses the floor plate geometry only, not interior daylighting with specific window configurations',
          '**GAR calculation assumes mature vegetation** — a tree planted today will not deliver its full GAR contribution for 10–20 years',
          '**No analysis replaces specialist consultants** for planning-critical submissions — Forma is an early-stage tool',
        ],
      },
      {
        id: 's4', heading: 'Setting Context-Appropriate Benchmarks', level: 'h2',
        content: `Before interpreting any analysis result, establish what "good" means for the specific project context. The same sun hours value can represent excellent performance in Stockholm and poor performance in Dubai.`,
        subsections: [
          {
            heading: 'Benchmark Sources',
            items: [
              '**Planning authority requirements** — the definitive source for minimum acceptable values in a given jurisdiction',
              '**Sustainability certification targets** — BREEAM, LEED, WELL, Green Mark each publish target values',
              '**BRE Guidelines (UK)** — a widely referenced set of targets for daylight, sunlight, and overshadowing',
              '**Comparable local developments** — run the same analysis on an equivalent recently approved scheme nearby to understand local norms',
              '**Client brief** — some clients set their own internal quality benchmarks above planning minimums',
            ],
          },
        ],
      },
      {
        id: 's5', heading: 'Storing and Organising Analysis Results', level: 'h2',
        content: `Analysis results accumulate quickly as a project progresses through multiple proposals and design iterations. Good organisation from the start prevents confusion about which result corresponds to which design state.`,
        items: [
          'Analysis results are stored in the left panel under Analysis Layers for each proposal',
          'Name each analysis run descriptively when saving: "Solar — Summer Solstice — Option A," not "Solar Analysis 3"',
          'Delete superseded analysis runs from earlier design states that are no longer relevant',
          'If a proposal\'s geometry changes significantly after analysis was run, mark or delete the old results to avoid referencing stale data',
          'Export key results as images immediately after running — screenshots capture the context (the underlying massing visible on the canvas) in a way that a raw data export does not',
        ],
      },
      {
        id: 's6', heading: 'Building a Decision Log', level: 'h2',
        content: `For complex projects, a simple decision log that records which analysis results led to which design decisions creates an invaluable audit trail. When a client asks six months later "why did we rotate the tower to the south-east?", the answer should be documented and findable.`,
        subsections: [
          {
            heading: 'Decision Log Content',
            items: [
              'Date of analysis and design state (which proposal, which version)',
              'Analysis type and settings used',
              'Key result value(s)',
              'Design decision made in response',
              'Who was present in the review meeting',
              'Where the analysis image/export is stored',
            ],
          },
        ],
        formula: { label: 'Professional Practice', text: 'If you can\'t explain why you oriented the building, you haven\'t used your analysis tools well enough' },
      },
    ],
    takeaways: [
      'Use the Forma analysis dashboard as an overview first, then drill into individual analysis maps for detail.',
      'Comparing results across proposals using the same analysis settings is more valuable than interpreting any single result in isolation.',
      'Know what each analysis type cannot tell you: solar doesn\'t model overheating, noise doesn\'t use real traffic counts, daylight doesn\'t model windows.',
      'Establish context-appropriate benchmarks before interpreting numbers — "good" in Oslo is not "good" in Singapore.',
      'Name and organise stored analysis results carefully; stale results from superseded design states lead to confusion and bad decisions.',
      'Maintain a decision log linking analysis results to design choices for professional project documentation.',
    ],
    resource: { label: 'Forma Analysis Interpretation Reference', type: 'PDF' },
    quiz: { label: 'Analysis Results Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-14', title: 'View Analysis — What Can Occupants See?' },
    next: { id: 'forma-16', title: 'Presenting Analysis to Clients & Design Teams' },
  },

  // ============================================================
  // LESSON FORMA-16 — Presenting Analysis to Clients
  // ============================================================
  {
    id: 'forma-16', num: '16',
    title: 'Presenting Analysis to Clients & Design Teams',
    topic: 'Analysis', cat: 'intermediate', readTime: '8 min', free: false,
    desc: 'Export Forma analysis outputs effectively and present environmental performance data in a way that non-technical clients can understand and act on.',
    intro: `The best analysis in the world achieves nothing if it cannot be communicated to the people who make decisions. Clients, planning officers, and even fellow design team members who are not Forma users need analysis results presented in a way that is clear, contextualised, and actionable. This lesson covers how to export Forma outputs, structure an analysis presentation, and explain environmental performance data to a non-technical audience.`,
    sections: [
      {
        id: 's1', heading: 'What You Can Export from Forma', level: 'h2',
        content: `Forma provides several export routes for analysis results, each suited to a different output format.`,
        code: {
          label: 'Export Options',
          lines: [
            'Screenshots (PNG)        → Right-click canvas or use browser screenshot',
            '                           Best for: quick single-image exports of analysis maps',
            '',
            'Analysis Report (PDF)    → Right panel → Analysis → Export Report',
            '                           Best for: formal design submissions with multiple analyses',
            '',
            'Raw data (CSV)           → Some analysis types allow numerical data export',
            '                           Best for: detailed post-processing by sustainability consultants',
            '',
            'Geometry export (IFC)    → Left panel → export current proposal geometry',
            '                           Best for: handing off massing to other tools',
            '',
            'Revit export             → Via the Forma Revit Plugin',
            '                           Best for: starting detailed design in Revit',
          ],
        },
      },
      {
        id: 's2', heading: 'Structuring an Analysis Presentation', level: 'h2',
        content: `Analysis results should be presented in the context of a design narrative, not as a data dump. The structure that works most consistently is:

1. State the design question the analysis was answering
2. Show the result
3. Explain what the result means (good, marginal, or requires action)
4. State the design response

This structure keeps the presentation decision-focused rather than tool-focused.`,
        subsections: [
          {
            heading: 'Example Presentation Structure',
            items: [
              '**Design Question**: Does Option A or Option B give the courtyard more winter sun?',
              '**Result**: Option A — 3.2 hrs average on 21 December | Option B — 1.8 hrs',
              '**Interpretation**: Option A meets the local planning target of 2+ hours; Option B does not',
              '**Response**: Proceed with Option A massing for the courtyard orientation; explore whether Option B can be modified to meet the target',
            ],
          },
        ],
        formula: { label: 'Presentation Rule', text: 'Every analysis slide should state a design question and a design response — analysis without a decision is just data' },
      },
      {
        id: 's3', heading: 'Explaining Analysis to Non-Technical Clients', level: 'h2',
        content: `Most clients are not familiar with Lawson comfort categories, decibels, or daylight autonomy percentages. The most effective presentations translate technical metrics into language that clients already understand.`,
        items: [
          '**Solar hours** → "This courtyard gets about 3 hours of direct sun on the shortest day of the year — which means it will feel comfortable to sit in on a winter lunch break."',
          '**Wind comfort** → "The Lawson analysis shows this corner would be uncomfortable in wind for most of the year. We\'d describe it as \'not a great place to put a café.\'',
          '**Noise dB** → "The noise level on the road-facing side is equivalent to a busy restaurant — the kind of background noise level that makes it difficult to have a normal conversation without effort."',
          '**Daylight** → "Most of the upper floors face south and west and receive very good natural light. The north-facing apartments on levels 1–3 would be noticeably darker — we\'ve recommended a window configuration change to address this."',
          '**GAR** → "About 40% of the site will be covered by green space with a high ecological value — that\'s above the local planning target of 30%."',
        ],
      },
      {
        id: 's4', heading: 'Live Forma in Client Presentations', level: 'h2',
        content: `One of Forma's strengths is that it runs in a browser and analyses update quickly — making it possible to demonstrate the impact of a design change live in front of a client or planning officer.`,
        subsections: [
          {
            heading: 'Live Demonstration Tips',
            items: [
              'Open Forma on a screen the client can see and share your screen or mirror it to a display',
              'Use the Proposal Selector to switch between options in front of the client — far more engaging than a slide deck',
              'If a client asks "what happens if we add another floor?" — make the change live and re-run solar analysis to show the shadow impact immediately',
              'The Split View feature is particularly effective in live sessions for showing two options side by side',
              'Prepare key analyses in advance — do not run analysis cold in a meeting if you are not sure how long it will take',
            ],
          },
        ],
      },
      {
        id: 's5', heading: 'Planning Submission Outputs', level: 'h2',
        content: `Analysis outputs from Forma can be used to support planning applications, particularly as early-stage evidence in pre-application discussions. They are not always accepted as a substitute for specialist reports in formal submissions, but they significantly strengthen the applicant's position.`,
        items: [
          'Shadow analysis diagrams at 9am, 12pm, 3pm on the winter solstice are standard requirements — export from Forma directly',
          'Wind comfort overview maps can support a case that pedestrian areas are acceptable, or document that mitigation measures have been designed in',
          'Noise exposure maps can be submitted as evidence that acoustic mitigation is correctly positioned in the design',
          'Always note the analysis tool used (Autodesk Forma) and the date of analysis when submitting to a planning authority',
          'For planning conditions that require specialist reports, use Forma outputs to brief the specialist and ensure they are reviewing a well-optimised massing',
        ],
      },
    ],
    takeaways: [
      'Export options include screenshots, PDF analysis reports, raw CSV data, IFC geometry, and Revit plugin export.',
      'Structure analysis slides as: Design Question → Result → Interpretation → Design Response.',
      'Translate technical metrics into plain language: Lawson categories become "suitable for a café" or "too windy for outdoor seating."',
      'Forma\'s browser-based nature makes live in-meeting demonstrations highly effective — use the Proposal Selector and Split View in real time.',
      'Shadow diagrams (9am, 12pm, 3pm on winter solstice) are the most commonly required planning output — export these directly from Forma.',
      'Planning submissions should note the analysis tool and date used; Forma outputs support but may not replace specialist reports for formal conditions.',
    ],
    resource: { label: 'Forma Presentation & Export Guide', type: 'PDF' },
    quiz: { label: 'Presenting Analysis Quiz', questions: 10, time: '5 min' },
    prev: { id: 'forma-15', title: 'Reading Analysis Results — What the Numbers Mean' },
    next: { id: 'forma-17', title: 'Connecting Forma to Revit — The Forma Plugin' },
  },

];
