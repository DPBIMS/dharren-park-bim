// ============================================================
// NAVISWORKS GETTING STARTED — LESSONS nav-9 through nav-16 (INTERMEDIATE/ADVANCED)
// File: lib/navisworksLessonsContent/navisworksLessons_9_16.js
// Index: lib/navisworksLessonsData.js
// IDs use prefix: nav-
// ============================================================

export const lessons_9_16 = [

  {
    id: 'nav-9',
    num: 9,
    title: 'Advanced Selection: Search Sets, Property Filters & Find Items',
    topic: 'Selection & Filtering',
    cat: 'intermediate',
    readTime: '10 min',
    free: false,
    desc: 'Go beyond manual clicking — build rule-based selections that survive model updates and scale to federated models with tens of thousands of items.',
    intro: `On a small model, clicking items one at a time works fine. On a federated model with several hundred thousand elements across six discipline files, manual selection breaks down completely. This lesson covers Navisworks' rule-based selection tools — Find Items and advanced Search Set criteria — which is the skill that separates someone who can navigate Navisworks from someone who can actually run coordination on it efficiently.`,
    sections: [
      {
        title: 'Why Manual Selection Doesn\'t Scale',
        content: `Clicking individual elements works for a one-off check, but it breaks down the moment you need a selection that:

- Has to be reused next week, after the model has been refreshed
- Spans multiple appended source files at once
- Needs to be the input for a Clash Detective test or a TimeLiner task attachment
- Has too many matching elements to find by eye in a crowded 3D view

Every one of these situations calls for a **rule-based** selection instead of a manually picked one.`,
      },
      {
        title: 'Find Items: Property-Based Search',
        content: `**Find Items** (Home tab → Select panel → Find Items) searches the entire model for elements matching specific property criteria, regardless of which source file or branch of the Selection Tree they live in.

1. Open Find Items and choose which **Category** to search within (or search all categories)
2. Add one or more **conditions** — Property, Operator (equals, contains, greater than, etc.), and Value
3. Click **Find All** to select every matching item across the whole federated model
4. Use **Find Next / Find Previous** to step through matches one at a time, useful when verifying results visually

| Example Condition | Result |
|---|---|
| Category = Walls, Level = "Level 2" | All Level 2 walls, regardless of source file |
| Type Name contains "Fire Rated" | Every item whose type name includes that text |
| Material = "Concrete" | All concrete elements across every discipline |`,
      },
      {
        title: 'Building Useful Search Sets',
        content: `A **Search Set** saves a Find Items query so it can be reused — and critically, it re-evaluates automatically every time the model is refreshed, rather than holding onto a fixed list of elements.

**Best Practice:**
Name Search Sets clearly and consistently, e.g. "STRUC — Level 3 Columns" or "MEP — Fire Protection Piping." A clash test or TimeLiner task built on a vaguely named Search Set becomes very hard to maintain six months into a project.

- Search Sets can combine multiple conditions with AND/OR logic for precise targeting
- They appear in the Selection Tree's **Sets** mode, alongside manually created Selection Sets
- Search Sets are the standard input for Clash Detective tests on any project of meaningful size`,
      },
      {
        title: 'Combining Conditions with AND / OR',
        content: `Real-world selection criteria are rarely a single condition. Find Items and Search Sets support combining multiple conditions.

1. Add the first condition (e.g. Category = Ductwork)
2. Add a second condition (e.g. Level = "Level 4")
3. Set the logic operator between them to **AND** (both must be true) or **OR** (either can be true)
4. Continue adding conditions as needed — most real Search Sets use two to four conditions

A Search Set like "Category = Ductwork AND Level = Level 4 AND Type Name contains Supply" narrows a federated model down to exactly the items relevant to one specific coordination question.`,
      },
      {
        title: 'Selection Inspector and Quick Property Checks',
        content: `Before building a Search Set, it helps to confirm exactly what property names and values exist in the source data — these vary between authoring tools and even between projects from the same firm.

- Select a sample element and check the **Properties Panel** to see its exact category, level, and type values
- Property names exported from Revit, Tekla, and Civil 3D are not always identical for conceptually similar data — verify before building a rule around them
- If a Search Set returns zero results, the most common cause is a property name or value that doesn't exactly match what's in the source model`,
      },
      {
        title: 'Common Mistakes',
        content: `**Mistake:**
Building a Search Set once and never revisiting it. If a discipline changes their naming convention mid-project, previously working Search Sets can silently start returning incomplete results.

**Mistake:**
Using overly broad conditions "just to be safe." A Search Set that's too broad defeats the purpose — it should narrow the model down to exactly what's relevant, not just everything plus a filter.

**Tip:**
After building any Search Set, manually spot-check a few of its results in the 3D view before using it as the input for a clash test or schedule attachment.`,
      },
    ],
    takeaways: [
      'Manual clicking does not scale on federated models with tens of thousands of elements — rule-based selection is essential.',
      'Find Items searches the whole model by property criteria, across every appended source file at once.',
      'A Search Set saves a Find Items query and re-evaluates automatically every time the model is refreshed.',
      'Combine multiple conditions with AND/OR logic to narrow a federated model down to exactly the relevant elements.',
      'Property names and values differ between authoring tools — verify exact values in the Properties Panel before building a rule around them.',
      'Spot-check Search Set results in the 3D view before using them as the input for a clash test or TimeLiner task.',
    ],
    resource: { title: 'Autodesk Navisworks Find Items & Search Sets Help', url: 'https://help.autodesk.com/view/NAV/2025/ENU/' },
    quiz: { label: 'Advanced Selection Quiz', questions: 10, time: '5 min' },
    prev: 'nav-8',
    next: 'nav-10',
  },

  // ============================================================
  // LESSON NAV-10 — Comparing Models
  // ============================================================
  {
    id: 'nav-10',
    num: 10,
    title: 'Comparing Models: Detecting Design Changes Between Versions',
    topic: 'Model Comparison',
    cat: 'intermediate',
    readTime: '10 min',
    free: false,
    desc: 'Use the Compare tool to automatically detect what changed between two versions of a model — without relying on a discipline to report it themselves.',
    intro: `Disciplines update their models constantly, and not every change gets announced in a coordination meeting. A column might move twenty centimeters, a duct route might be revised, a whole floor might be re-leveled — and the rest of the team has no way to know unless they happen to notice. Navisworks' Compare tool exists to catch exactly this: automatically detecting differences between two saved versions of the same model.`,
    sections: [
      {
        title: 'What the Compare Tool Does',
        content: `The **Compare** tool (Home tab → Compare) takes two versions of a model file — typically the same NWC from last week versus this week — and identifies which elements were **added**, **removed**, or **modified** between them.

This is different from Clash Detective, which checks geometry against *other* disciplines. Compare checks a single discipline's model against *itself*, over time, which is exactly what's needed to answer "what actually changed since last week?"`,
      },
      {
        title: 'Running a Comparison',
        content: `1. Open Navisworks and go to the **Compare** panel
2. Select the **older** version of the file as the baseline
3. Select the **newer** version of the file as the comparison target
4. Run the comparison — Navisworks processes both files and generates a difference report
5. Results are categorized as **Added**, **Deleted**, or **Modified** items

Modified items can be further inspected to see exactly which properties changed — geometry, location, type, or parameter values.`,
      },
      {
        title: 'Reading Comparison Results',
        content: `| Result Category | What It Means |
|---|---|
| Added | An element exists in the new version that wasn't in the old one |
| Deleted | An element existed in the old version but has been removed |
| Modified | The element still exists in both, but something about it changed |

Clicking any result highlights the corresponding element in the 3D view, the same way Clash Detective results do — making it easy to visually confirm what changed and assess whether it affects other disciplines' work.`,
      },
      {
        title: 'When to Use Comparison',
        content: `- **Before a coordination meeting** — run a comparison on each incoming discipline NWC against last week's version, to know what to expect before the meeting starts
        - **After a major design change** — quickly verify the scope of a redesign matches what was communicated
        - **Investigating a new clash** — if a clash test that was clean last week now shows new results, comparison can reveal exactly what moved
        - **Quality control** — catching accidental changes, like an entire wing shifting because of an accidental move in the source authoring tool`,
      },
      {
        title: 'Comparison vs Clash Detective: Choosing the Right Tool',
        content: `**Why This Distinction Matters:**
A common beginner mistake is trying to use Clash Detective to figure out "what changed," which it cannot do — it only knows about geometric overlaps between two different selections, not changes over time within the same selection.

| Question | Right Tool |
|---|---|
| "Does this duct hit that beam?" | Clash Detective |
| "What did the structural team change since last week?" | Compare |
| "Is this design still buildable in sequence?" | TimeLiner |
| "How much concrete is in this design?" | Quantification |

Knowing which tool answers which question is one of the fastest ways to look competent in a coordination meeting.`,
      },
      {
        title: 'Best Practice Workflow',
        content: `1. Archive a dated copy of every discipline's NWC at the end of each coordination cycle
2. Before the next cycle's meeting, run Compare between the archived version and the freshly arrived version for each discipline
3. Note any unexpected Added, Deleted, or Modified results and flag them for discussion
4. Use this alongside Clash Detective results, not instead of them — Compare tells you what changed, Clash Detective tells you whether it's now a problem`,
      },
    ],
    takeaways: [
      'Compare detects what changed within a single discipline\'s model between two versions — added, deleted, or modified elements.',
      'This is different from Clash Detective, which checks geometry against other disciplines, not against an earlier version of itself.',
      'Comparison results can be clicked to highlight the changed element directly in the 3D view.',
      'Run Compare before coordination meetings to know what changed before discussing why it changed.',
      'Archiving a dated copy of each discipline\'s NWC every cycle is what makes comparison possible the following week.',
      'Knowing which tool (Compare, Clash Detective, TimeLiner, Quantification) answers which question is core coordination competence.',
    ],
    resource: { title: 'Autodesk Navisworks Compare Tool Help', url: 'https://help.autodesk.com/view/NAV/2025/ENU/' },
    quiz: { label: 'Comparing Models Quiz', questions: 10, time: '5 min' },
    prev: 'nav-9',
    next: 'nav-11',
  },

  // ============================================================
  // LESSON NAV-11 — Working with Point Clouds
  // ============================================================
  {
    id: 'nav-11',
    num: 11,
    title: 'Working with Point Clouds: Scan-to-BIM Comparison in Navisworks',
    topic: 'Point Clouds',
    cat: 'advanced',
    readTime: '11 min',
    free: false,
    desc: 'Bring laser scan data into Navisworks to verify as-built conditions against the design model — a core skill for renovation and progress verification.',
    intro: `Not every coordination question is about whether the design works on paper — sometimes the question is whether what's actually been built matches the model at all. Point cloud data from laser scanners gives Navisworks a way to answer that, by overlaying a literal 3D scan of the physical world directly against the federated design model.`,
    sections: [
      {
        title: 'What is a Point Cloud?',
        content: `A **point cloud** is a dataset of millions of individual XYZ coordinate points captured by a laser scanner, each representing a single measured point on a real physical surface. Stitched together, these points form a detailed, navigable 3D representation of an existing space — a wall, a room, an entire building.

Point clouds are captured using terrestrial laser scanners on site, then processed and registered (aligned to a common coordinate system) before being brought into a BIM workflow.`,
      },
      {
        title: 'Supported Point Cloud Formats',
        content: `| Format | Source |
|---|---|
| .rcp / .rcs | Autodesk ReCap — the standard format for Autodesk-based workflows |
| .e57 | An open, vendor-neutral point cloud exchange format |
| .pts / .ptx | Common raw scanner export formats |

Most professional workflows process raw scanner data through **Autodesk ReCap** first, which cleans, registers, and compresses scan data into an \`.rcp\` project file optimized for use across the Autodesk AEC Collection, including Navisworks.`,
      },
      {
        title: 'Appending a Point Cloud',
        content: `1. Process and register the raw scan data in **Autodesk ReCap**, producing an \`.rcp\` file
2. In Navisworks, use **Append** (the same command used for discipline NWC files) and select the \`.rcp\` file
3. Verify the point cloud lands in the same shared coordinate system as the rest of the federated model
4. Use the Selection Tree to toggle the point cloud's visibility independently from the design model

**Important:**
Just like discipline models, a point cloud that doesn't align to the project's shared coordinates will appear in the wrong location entirely. Coordinate alignment must be confirmed with the survey team before relying on the comparison.`,
      },
      {
        title: 'As-Built Comparison Workflows',
        content: `Once aligned, a point cloud enables comparisons a clean 3D model alone cannot:

- **Visual overlay** — toggle the design model on and off against the scan to see at a glance where built conditions deviate from design
- **Clash Detective against point clouds** — run a Clash test with the point cloud as one selection and the design model as the other, to flag elements that physically conflict with existing structure
- **Renovation and retrofit projects** — verify that new MEP routing actually fits within existing, as-built conditions rather than an idealized as-designed model
- **Progress verification** — compare a scan taken mid-construction against the design model to confirm work was built in the correct location`,
      },
      {
        title: 'Performance Considerations',
        content: `Point clouds are extremely data-dense — a single floor scan can contain hundreds of millions of points. Navisworks handles this through level-of-detail streaming, but a few habits keep performance manageable:

- Use **ReCap's** point density reduction options before appending, rather than appending raw, unprocessed scan data
- Hide point cloud regions not currently relevant to the task at hand using sectioning
- Append only the scan regions relevant to the current coordination question, rather than an entire building's worth of scan data, when working zone-by-zone`,
      },
      {
        title: 'Honest Assessment',
        content: `**Honest Assessment:**
Point cloud comparison is powerful but it is not a substitute for an accurate survey report. Navisworks shows you *that* a deviation exists visually, but precise dimensional verification — confirming an as-built deviation is exactly 47mm, for example — is usually done with dedicated scan-processing or surveying software that offers more rigorous measurement tools than Navisworks' general-purpose viewer.`,
      },
    ],
    takeaways: [
      'A point cloud is a dense XYZ dataset captured by laser scanning, representing the real, as-built physical condition of a space.',
      'Autodesk ReCap processes raw scan data into .rcp files optimized for use across Navisworks and the wider AEC Collection.',
      'Point clouds are appended the same way as discipline NWCs, and must align to the same shared coordinate system to be useful.',
      'Clash Detective can run directly against point clouds, flagging new design elements that conflict with existing as-built conditions.',
      'Point cloud comparison is essential for renovation projects and mid-construction progress verification.',
      'Navisworks shows that a deviation exists visually — precise dimensional verification is better handled in dedicated survey/scan-processing software.',
    ],
    resource: { title: 'Autodesk Navisworks Point Cloud Help', url: 'https://help.autodesk.com/view/NAV/2025/ENU/' },
    quiz: { label: 'Working with Point Clouds Quiz', questions: 10, time: '5 min' },
    prev: 'nav-10',
    next: 'nav-12',
  },

  // ============================================================
  // LESSON NAV-12 — Animator
  // ============================================================
  {
    id: 'nav-12',
    num: 12,
    title: 'Animator: Creating Custom Object Animations',
    topic: 'Animation & Scripting',
    cat: 'advanced',
    readTime: '10 min',
    free: false,
    desc: 'Animate individual objects independently of TimeLiner — crane lifts, equipment movement, and installation sequences for planning and presentations.',
    intro: `TimeLiner answers "when does this get built?" Animator answers a different question: "how does this specific object move?" Whether it's simulating a crane lift, an equipment rollout path, or an installation sequence too detailed for a construction schedule, Animator lets you create custom, object-level animations independent of the overall project timeline.`,
    sections: [
      {
        title: 'Animator vs TimeLiner: Different Purposes',
        content: `**Why This Distinction Matters:**
TimeLiner simulates *when* construction tasks happen against a real schedule, using broad groups of elements per task. Animator simulates *how* individual objects move — position, rotation, and visibility, frame by frame — independent of any schedule date. They solve different problems and are often used together: TimeLiner shows a floor being built, while an Animator sequence embedded at that point in time shows precisely how a piece of equipment was lifted into place.`,
      },
      {
        title: 'The Animator Panel',
        content: `Found on the **Animation tab → Animator**, the Animator panel lets you create one or more named animation **scenes**, each containing a sequence of keyframed object movements.

| Element | Purpose |
|---|---|
| Scene | A named container for one complete animation sequence |
| Animation Set | A group of objects that move together within a scene |
| Keyframe | A saved position, rotation, or visibility state at a specific point in time |
| Timeline | The horizontal scrubber controlling playback position across the scene |`,
      },
      {
        title: 'Creating a Basic Animation',
        content: `1. Open the Animator panel and click **Add Scene**
2. Select the object(s) to animate and add them to a new **Animation Set**
3. Move the timeline scrubber to time zero and record the object's starting position as a keyframe
4. Move the scrubber forward, move/rotate the object to its next position, and record another keyframe
5. Repeat for as many keyframe positions as the animation requires
6. Press **Play** to preview the interpolated movement between keyframes

Navisworks automatically interpolates smooth movement between keyframes, so you only need to set the key positions, not every intermediate frame.`,
      },
      {
        title: 'Common Construction Animation Uses',
        content: `- **Crane lift simulations** — verifying a steel member or precast panel can physically be lifted into place without colliding with existing structure or site obstructions
        - **Equipment installation sequences** — showing how large MEP plant equipment is moved and positioned through a building before walls close it in
        - **Logistics and site access animations** — demonstrating vehicle or material movement paths through a constrained site
        - **Façade installation sequencing** — visualizing panel-by-panel installation order on complex curtain wall systems`,
      },
      {
        title: 'Combining Animator with TimeLiner',
        content: `Animator scenes can be linked to specific TimeLiner tasks, so that a detailed object animation plays automatically at the right point during a broader 4D schedule simulation.

1. Create the Animator scene as normal
2. In TimeLiner, locate the relevant task
3. Link the Animator scene to that task's simulation behavior
4. When the TimeLiner simulation reaches that task, the linked Animator scene plays automatically

This combination is what produces the polished, detailed construction sequence videos used in client presentations and tender submissions.`,
      },
      {
        title: 'Common Mistakes',
        content: `**Mistake:**
Animating too many objects individually instead of grouping them into a single Animation Set. This makes the scene difficult to manage and slows down playback.

**Mistake:**
Forgetting that Animator movements are visual only — they do not change the underlying model. An object "moved" in an Animator scene snaps back to its original modeled position once the animation ends; Animator is a presentation and verification tool, not a modeling tool.`,
      },
    ],
    takeaways: [
      'Animator simulates how individual objects move (position, rotation, visibility) independent of any construction schedule.',
      'TimeLiner shows when tasks happen on a schedule; Animator shows how a specific object moves — they solve different problems.',
      'Animations are built from keyframes; Navisworks automatically interpolates smooth movement between them.',
      'Common uses include crane lift simulations, equipment installation sequences, and façade installation sequencing.',
      'Animator scenes can be linked to TimeLiner tasks so they play automatically at the right point in a 4D simulation.',
      'Animator is a visualization and verification tool — it does not change the underlying model geometry.',
    ],
    resource: { title: 'Autodesk Navisworks Animator Help', url: 'https://help.autodesk.com/view/NAV/2025/ENU/' },
    quiz: { label: 'Animator Quiz', questions: 10, time: '5 min' },
    prev: 'nav-11',
    next: 'nav-13',
  },

  // ============================================================
  // LESSON NAV-13 — Scripter
  // ============================================================
  {
    id: 'nav-13',
    num: 13,
    title: 'Scripter: Automating Interactive Behaviors Without Programming',
    topic: 'Animation & Scripting',
    cat: 'advanced',
    readTime: '9 min',
    free: false,
    desc: 'Use Scripter\'s rule-based logic to create interactive behaviors in Navisworks — no coding required.',
    intro: `Scripter is one of the least-used but most underrated tools in Navisworks. It allows you to build simple interactive logic — "when this happens, do that" — entirely through a visual rule-based interface, with no programming knowledge required. It's most commonly used to create interactive presentation models and to trigger Animator scenes automatically based on viewpoint or timeline events.`,
    sections: [
      {
        title: 'What Scripter Does',
        content: `Scripter (Animation tab → Scripter) builds simple **event-condition-action** rules. You define an event to watch for, and an action that happens automatically when that event occurs — without writing any code.

This is fundamentally different from Animator, which plays a pre-recorded sequence. Scripter reacts to things happening during navigation or playback, making models feel interactive rather than just animated.`,
      },
      {
        title: 'Events, Conditions, and Actions',
        content: `| Component | Description |
|---|---|
| Event | The trigger Scripter watches for — e.g. reaching a specific viewpoint, a TimeLiner simulation reaching a date, or a collision during Walk navigation |
| Condition | An optional filter narrowing when the action should fire (e.g. only during a specific time of day in the simulation) |
| Action | What happens when the event (and condition, if set) occurs — e.g. play an Animator scene, change visibility, jump to a viewpoint, display text |

A simple script might be: **Event** = "TimeLiner reaches Week 12" → **Action** = "Play Animator scene: Crane Lift Sequence."`,
      },
      {
        title: 'Building a Simple Script',
        content: `1. Open the **Scripter** panel
2. Click **Add Script** and give it a clear name
3. Add an **Event** from the available list (viewpoint reached, collision, timer, TimeLiner state, etc.)
4. Add one or more **Actions** to execute when the event fires
5. Test the script by triggering the event manually — e.g. navigating to the relevant viewpoint or running the TimeLiner simulation through that point`,
      },
      {
        title: 'Common Uses',
        content: `- **Automatic Animator triggers** — playing a crane lift or equipment animation automatically at the right point in a TimeLiner simulation, instead of starting it manually
        - **Interactive walkthroughs** — triggering doors to open, lights to change state, or signage to appear as a viewer walks through a presentation model
        - **Collision-based behaviors during Walk mode** — useful for safety training simulations, where touching a hazard zone could trigger a warning message
        - **Guided presentation sequences** — automatically jumping between saved viewpoints on a timer for unattended kiosk-style presentations`,
      },
      {
        title: 'Honest Assessment',
        content: `**Honest Assessment:**
Scripter is genuinely useful for presentation polish and for chaining Animator scenes to a TimeLiner simulation, but it is not a general-purpose automation tool — for that, professional Navisworks users reach for the **Navisworks API** (covered in a later lesson) or external automation through Dynamo. Scripter's strength is exactly its simplicity: quick, visual, no-code behaviors for a specific model, not reusable automation across projects.`,
      },
    ],
    takeaways: [
      'Scripter builds simple event-condition-action rules entirely through a visual interface, with no programming required.',
      'Unlike Animator, which plays a pre-recorded sequence, Scripter reacts to events during navigation or simulation playback.',
      'A typical script links a TimeLiner or viewpoint event to an action like playing an Animator scene or changing visibility.',
      'Common uses include auto-triggering animations during 4D simulations and building interactive presentation walkthroughs.',
      'Scripter is best for quick, model-specific interactive behavior — not reusable, large-scale automation, which belongs to the Navisworks API or Dynamo.',
    ],
    resource: { title: 'Autodesk Navisworks Scripter Help', url: 'https://help.autodesk.com/view/NAV/2025/ENU/' },
    quiz: { label: 'Scripter Quiz', questions: 10, time: '5 min' },
    prev: 'nav-12',
    next: 'nav-14',
  },

  // ============================================================
  // LESSON NAV-14 — Sectioning & Section Boxes
  // ============================================================
  {
    id: 'nav-14',
    num: 14,
    title: 'Sectioning & Section Boxes: Isolating Zones for Review',
    topic: 'Coordination',
    cat: 'intermediate',
    readTime: '8 min',
    free: false,
    desc: 'Use section planes and section boxes to cut through a federated model and focus a coordination review on exactly the zone that matters.',
    intro: `A federated model of a large building can be visually overwhelming — dozens of overlapping systems crammed into every floor. Sectioning lets you slice through that complexity, isolating exactly the zone you need to review without hiding or filtering any elements out of the model itself.`,
    sections: [
      {
        title: 'Section Planes vs Section Boxes',
        content: `Navisworks offers two related but distinct sectioning tools.

| Tool | Behavior |
|---|---|
| Section Plane | A single flat cutting plane that slices the model along one axis at a time |
| Section Box | A six-sided box that cuts the model on all sides at once, isolating a 3D volume |

A single Section Plane is useful for a quick horizontal or vertical cut — checking a ceiling void, for example. A Section Box is better for isolating a specific zone in three dimensions, such as one structural bay across all levels.`,
      },
      {
        title: 'Using Section Planes',
        content: `1. Enable sectioning from the **Viewpoint tab → Sectioning panel**, or the **Home tab** sectioning tools
2. Choose a plane orientation — Top, Front, Right, or a custom angle
3. Drag the plane's control handle to move the cutting position
4. Toggle **Section Plane visibility** to show or hide the cutting plane indicator itself

Multiple section planes can be active simultaneously for more complex cuts, such as isolating a single floor by cutting above and below it at once.`,
      },
      {
        title: 'Using a Section Box',
        content: `1. Enable the **Section Box** tool
2. A bounding box appears around the visible model — drag its face handles to resize each side independently
3. Everything outside the box is hidden from view; everything inside remains fully visible and selectable
4. Save the current box dimensions as part of a **Viewpoint**, so the same isolated zone can be recalled instantly later

A Section Box is the standard way to set up "zone-based" coordination reviews — isolating one structural bay, one MEP riser zone, or one wing of a building for focused review.`,
      },
      {
        title: 'Sectioning for Coordination Meetings',
        content: `- Save a dedicated Section Box viewpoint for each zone discussed in a recurring coordination meeting, so the team can jump straight to "Zone B, Levels 3-5" without manually re-isolating it each time
        - Combine sectioning with Clash Detective — running a focused visual review of a section box area after reviewing the automated clash list catches issues clash testing alone might miss, like a layout that's technically clash-free but impractical to construct
        - Use sectioning together with Walk navigation to simulate what a technician would actually see working inside a ceiling void or service riser`,
      },
      {
        title: 'Common Mistakes',
        content: `**Mistake:**
Forgetting sectioning is active and being confused when elements seem to be "missing" from a saved viewpoint. Always check whether a Section Box or Section Plane is enabled before assuming elements are actually absent from the model.

**Tip:**
Save section box configurations as named viewpoints rather than leaving the team to manually reposition the box every meeting — this alone can save significant time across a weekly coordination cycle.`,
      },
    ],
    takeaways: [
      'A Section Plane cuts the model along a single flat plane; a Section Box isolates a full 3D volume on all sides at once.',
      'Section Boxes are the standard way to set up zone-based coordination reviews — one structural bay, one riser zone, one wing.',
      'Sectioning state can be saved as part of a Viewpoint, so a team can instantly recall the same isolated zone in future sessions.',
      'Combining sectioning with Walk navigation helps simulate what a technician would actually see working inside a confined space.',
      'Always check whether sectioning is active before assuming elements are missing from a model — they may simply be cut out of view.',
    ],
    resource: { title: 'Autodesk Navisworks Sectioning Help', url: 'https://help.autodesk.com/view/NAV/2025/ENU/' },
    quiz: { label: 'Sectioning & Section Boxes Quiz', questions: 10, time: '5 min' },
    prev: 'nav-13',
    next: 'nav-15',
  },

  // ============================================================
  // LESSON NAV-15 — Materials, Appearance & Render Style
  // ============================================================
  {
    id: 'nav-15',
    num: 15,
    title: 'Materials, Appearance & Render Style for Presentation-Quality Visuals',
    topic: 'Visualization',
    cat: 'intermediate',
    readTime: '9 min',
    free: false,
    desc: 'Control how the model looks on screen — visual styles, material overrides, and lighting — for clearer coordination reviews and better presentations.',
    intro: `Most coordination work happens in a fairly plain shaded view, but Navisworks also supports detailed material and lighting control for client presentations, marketing visuals, and design reviews where appearance matters as much as accuracy. This lesson covers both ends of that spectrum — the practical view settings that make coordination clearer, and the appearance tools used for presentation-quality visuals.`,
    sections: [
      {
        title: 'Visual Styles for Coordination Work',
        content: `Found on the **View tab → Visual Style**, these control how geometry is rendered on screen during everyday review work.

| Style | Best For |
|---|---|
| Wireframe | Checking geometry alignment through solid objects |
| Hidden Line | Clean line drawings without material color, useful for clarity in crowded views |
| Shaded | Standard default — solid color shading without full lighting/material detail |
| Full Render | Materials, lighting, and shadows for presentation-quality output |

Most day-to-day coordination work uses Shaded mode — it's fast and clear without the rendering overhead of Full Render mode.`,
      },
      {
        title: 'Material Color Overrides',
        content: `Independent of a model's actual exported materials, Navisworks lets you apply **color overrides** to make coordination reviews easier to read at a glance.

1. Select the items to override — typically a whole discipline, via a Search Set
2. Right-click → **Override Color**
3. Choose a distinct color for that discipline (e.g. blue for structure, yellow for ductwork, green for piping)
4. Save the override as part of a Viewpoint so it's preserved for future sessions

Color-coding disciplines this way makes a federated model dramatically easier to read during a coordination meeting, since team members can identify which system they're looking at instantly without needing to click each element.`,
      },
      {
        title: 'Lighting and Render Style',
        content: `For presentation-quality visuals, Navisworks supports more advanced lighting controls under **Render Style**:

- **Sunlight** — simulate sun position based on the project's geographic location and a specific date/time, useful for solar studies and shadow analysis
- **Headlight** — a light source that follows the camera, useful for evenly lit interior reviews regardless of viewing angle
- **Scene Lights** — lights placed and configured within the model itself, imported from the authoring software where supported

Combining accurate sunlight simulation with the federated model is a powerful way to verify shadow studies across disciplines without re-creating the analysis in a separate tool.`,
      },
      {
        title: 'When to Use Full Render Mode',
        content: `Full Render mode applies actual materials, reflections, and lighting for a presentation-realistic image. It's slower to navigate than Shaded mode, so it's typically reserved for:

- Final client presentation walkthroughs
- Marketing stills and renderings for a project
- Design reviews where material and finish selection genuinely matters to the discussion

**Tip:**
Switch back to Shaded mode for the working parts of a coordination session — only switch to Full Render when you specifically need to show appearance, not just verify coordination.`,
      },
      {
        title: 'Saving Appearance Settings',
        content: `Like sectioning and visibility states, color overrides and render style settings can be saved as part of a **Viewpoint**. This means a "coordination view" (color-coded by discipline, Shaded mode) and a "presentation view" (Full Render, sunlight enabled) can both be saved and instantly switched between, without manually reconfiguring appearance every time.`,
      },
    ],
    takeaways: [
      'Shaded mode is the standard choice for day-to-day coordination work; Full Render is reserved for presentation-quality output.',
      'Color overrides applied per discipline make a federated model dramatically easier to read at a glance during coordination meetings.',
      'Sunlight rendering can simulate accurate solar position for a specific date and time, useful for cross-discipline shadow studies.',
      'Full Render mode is slower to navigate and is best reserved for client presentations and marketing visuals, not routine review.',
      'Appearance settings — color overrides, render style, lighting — can all be saved as part of a Viewpoint for instant recall.',
    ],
    resource: { title: 'Autodesk Navisworks Appearance & Render Style Help', url: 'https://help.autodesk.com/view/NAV/2025/ENU/' },
    quiz: { label: 'Materials & Appearance Quiz', questions: 10, time: '5 min' },
    prev: 'nav-14',
    next: 'nav-16',
  },

  // ============================================================
  // LESSON NAV-16 — Autodesk Rendering
  // ============================================================
  {
    id: 'nav-16',
    num: 16,
    title: 'Autodesk Rendering: Producing Photorealistic Stills and Walkthroughs',
    topic: 'Visualization',
    cat: 'advanced',
    readTime: '10 min',
    free: false,
    desc: 'Generate photorealistic renderings and walkthrough videos directly from a federated Navisworks model using Autodesk Rendering.',
    intro: `Beyond Full Render mode's real-time preview, Navisworks integrates with Autodesk's cloud rendering service to produce genuinely photorealistic still images and walkthrough videos — without needing a separate dedicated rendering application. This lesson covers when this capability is actually worth using, and the workflow for producing a finished rendered output.`,
    sections: [
      {
        title: 'Real-Time Render Style vs Autodesk Rendering',
        content: `**Why This Distinction Matters:**
Full Render visual style (covered in the previous lesson) is a real-time preview — fast enough to navigate live, but limited in lighting accuracy and material realism. **Autodesk Rendering**, found under the **Render tab**, is a separate, higher-quality rendering engine that processes a final image using accurate global illumination, reflections, and material properties — at the cost of render time. One is for working review; the other is for finished output.`,
      },
      {
        title: 'Setting Up a Render',
        content: `1. Position the camera at the desired view — typically a saved Viewpoint
2. Open the **Render tab** and review the **Materials** assigned to the visible elements, adjusting as needed for realism
3. Configure **lighting** — sunlight position and intensity, or artificial scene lighting
4. Set render **quality and resolution** settings appropriate to the final output (draft quality for review, high quality for final delivery)
5. Click **Render** to process the still image

Cloud-based rendering can offload the processing to Autodesk's render farm rather than the local machine, which is useful for high-resolution final outputs that would otherwise take a long time locally.`,
      },
      {
        title: 'Materials for Realistic Output',
        content: `Source models often arrive with generic or placeholder materials, especially structural and MEP elements that were never intended to be rendered for presentation. Before a final render:

- Review and replace generic materials with photorealistic equivalents from the **Autodesk Material Library**
- Pay particular attention to large, visually dominant surfaces — flooring, glazing, and major wall finishes have the biggest visual impact on realism
- Save a material configuration as part of a render-specific Viewpoint, separate from the working coordination viewpoints, so material changes made for presentation don't interfere with day-to-day coordination views`,
      },
      {
        title: 'Producing a Walkthrough Animation',
        content: `Beyond still images, a sequence of saved Viewpoints — or an Animator scene — can be rendered as a full walkthrough video.

1. Build a sequence of Viewpoints representing the camera path through the building
2. Use **Viewpoint Animation** to interpolate smooth camera movement between them
3. Apply the desired Render Style and material settings
4. Export the sequence via **Output tab → Export Animation**, choosing a video format and resolution

A rendered walkthrough is one of the most effective ways to communicate a finished design to a client or stakeholder who cannot easily interpret architectural drawings.`,
      },
      {
        title: 'Honest Assessment',
        content: `**Honest Assessment:**
Autodesk Rendering inside Navisworks is genuinely useful because it works directly from the same federated, coordinated model used for clash detection — no need to rebuild a scene in a separate rendering application. However, for high-end marketing renders or architectural visualization at the level of a dedicated archviz studio, most firms still hand the model off to specialized rendering software with more advanced material and lighting control. Navisworks rendering is best understood as "good enough, directly from the coordination model," not a replacement for a dedicated visualization pipeline on flagship projects.`,
      },
    ],
    takeaways: [
      'Autodesk Rendering is a separate, higher-quality engine from the real-time Full Render visual style, intended for finished output rather than live navigation.',
      'A render is set up by positioning the camera, reviewing materials, configuring lighting, and setting output quality before processing.',
      'Source models often need material replacement before final rendering — structural and MEP elements rarely arrive with presentation-ready finishes.',
      'A sequence of saved Viewpoints, or an Animator scene, can be exported as a full rendered walkthrough video.',
      'Navisworks rendering works directly from the coordinated federated model, but dedicated archviz software is still preferred for flagship marketing visuals.',
    ],
    resource: { title: 'Autodesk Navisworks Rendering Help', url: 'https://help.autodesk.com/view/NAV/2025/ENU/' },
    quiz: { label: 'Autodesk Rendering Quiz', questions: 10, time: '5 min' },
    prev: 'nav-15',
    next: 'nav-17',
  },

];
