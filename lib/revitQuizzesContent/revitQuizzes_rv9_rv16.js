// ============================================================
// REVIT QUIZZES DATA — rv-9 through rv-16 (INTERMEDIATE)
// Merge these entries into your lib/revitQuizzesData.js array
// ============================================================

export const revitQuizzes_rv9_rv16 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-9: Doors, Windows & Component Families
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-9',
    title: 'Doors, Windows & Component Families',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What happens to a door in Revit if its host wall is deleted?',
        options: [
          'The door moves to the nearest wall automatically',
          'The door becomes an unhosted element floating in space',
          'The door is deleted along with the host wall',
          'The door is converted to a wall opening',
        ],
        answer: 'The door is deleted along with the host wall',
      },
      {
        type: 'mcq',
        question: 'Before placing a door, how do you flip the door hand (left-hand vs right-hand)?',
        options: [
          'Press the Tab key',
          'Press the Spacebar',
          'Right-click and select Flip',
          'Hold Shift while clicking',
        ],
        answer: 'Press the Spacebar',
      },
      {
        type: 'truefalse',
        question: 'Changing the Width in a door\'s Type Properties affects only the selected door instance.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Which Revit parameter on a door is shown in the door tag on floor plans and drives the door schedule?',
        options: ['Type Name', 'Mark', 'Comments', 'Description'],
        answer: 'Mark',
      },
      {
        type: 'fillblank',
        question: 'To move a door from one wall to a completely different wall, select the door and use the ___ command in the Modify tab.',
        answer: 'Pick New Host',
      },
      {
        type: 'mcq',
        question: 'You want to place all doors and windows of a view simultaneously with tags. Which tool do you use?',
        options: [
          'Annotate → Tag by Category → click each element',
          'Annotate → Tag All → select Doors and Windows',
          'Annotate → Multi-Category Tag',
          'View → Visibility/Graphics → Annotation Categories',
        ],
        answer: 'Annotate → Tag All → select Doors and Windows',
      },
      {
        type: 'truefalse',
        question: 'A floor-hosted light fixture can exist in the model even if the host floor is deleted.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'Which of the following is an example of a Work Plane-Based family (not wall-hosted or floor-hosted)?',
        options: ['Door', 'Recessed downlight', 'Floor drain', 'Office chair'],
        answer: 'Office chair',
      },
      {
        type: 'mcq',
        question: 'A door family downloaded from a third-party site appears in the wrong schedule and does not show in the Door tag. What is the most likely cause?',
        options: [
          'The family was not loaded correctly',
          'The family is assigned to the wrong Revit category',
          'The Mark parameter is empty',
          'The door tag family is not loaded',
        ],
        answer: 'The family is assigned to the wrong Revit category',
      },
      {
        type: 'truefalse',
        question: 'You can create a new door size by duplicating an existing door type and changing the Width and Height in the new type\'s properties.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-10: Working with Views & Visibility Graphics
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-10',
    title: 'Views & Visibility/Graphics',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the keyboard shortcut to open the Visibility/Graphics dialog in Revit?',
        options: ['VG or VV', 'VF', 'GV', 'Ctrl+G'],
        answer: 'VG or VV',
      },
      {
        type: 'truefalse',
        question: 'Visibility/Graphics settings in one view affect all other views of the same level.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'You want to hide one specific wall in the current view without hiding all walls. What is the correct approach?',
        options: [
          'Uncheck Walls in VG → Model Categories',
          'Select the wall → right-click → Hide in View → Element',
          'Delete the wall and undo after checking the view',
          'Change the wall material to transparent',
        ],
        answer: 'Select the wall → right-click → Hide in View → Element',
      },
      {
        type: 'mcq',
        question: 'What does "Duplicate as Dependent" do when creating a copy of a floor plan view?',
        options: [
          'Creates an independent copy with no annotations',
          'Creates a copy that shares annotations with the parent view — changes in the parent propagate to the dependent',
          'Creates a copy with all annotations but completely independent settings',
          'Creates a read-only version of the view for coordination',
        ],
        answer: 'Creates a copy that shares annotations with the parent view — changes in the parent propagate to the dependent',
      },
      {
        type: 'fillblank',
        question: 'Rule-based graphic overrides that apply based on element parameter values (e.g., Fire Rating = 60 min → red fill) are called ___.',
        answer: 'Filters',
      },
      {
        type: 'mcq',
        question: 'A View Template has been assigned to a view with the Scale parameter included in the template. What happens if you try to change the view scale directly in that view?',
        options: [
          'The scale changes normally',
          'Revit asks for your password before allowing the change',
          'The scale cannot be changed — it is locked by the assigned View Template',
          'The View Template is automatically removed when you change the scale',
        ],
        answer: 'The scale cannot be changed — it is locked by the assigned View Template',
      },
      {
        type: 'truefalse',
        question: 'A Legend view can be placed on multiple sheets simultaneously, unlike standard model views.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'The view border turns teal in Revit. What does this indicate?',
        options: [
          'The view is set to a Perspective camera',
          'A Temporary Hide/Isolate is active — some elements are hidden or isolated that will not print',
          'The view has an active Design Option selected',
          'The view is linked from another Revit file',
        ],
        answer: 'A Temporary Hide/Isolate is active — some elements are hidden or isolated that will not print',
      },
      {
        type: 'mcq',
        question: 'Which view type looks upward at the ceiling and shows ceiling-mounted elements like lights and diffusers?',
        options: ['Floor Plan', 'Section', 'Reflected Ceiling Plan', 'Elevation'],
        answer: 'Reflected Ceiling Plan',
      },
      {
        type: 'truefalse',
        question: 'Drafting Views in Revit are linked to the 3D model — changes to the model automatically update the drafting view geometry.',
        answer: false,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-11: Schedules & Quantities
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-11',
    title: 'Schedules & Quantities',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'You add a new door to a floor plan. What happens to the door schedule?',
        options: [
          'The schedule must be manually refreshed to show the new door',
          'The new door appears in the schedule automatically',
          'The schedule shows an error until you rebuild it',
          'The door only appears in the schedule after it is tagged',
        ],
        answer: 'The new door appears in the schedule automatically',
      },
      {
        type: 'truefalse',
        question: 'You can edit a room\'s Name parameter directly in a Room Schedule and the room element in the model updates immediately.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'In the Schedule Properties dialog, which tab controls which elements are included (e.g., only rooms on Level 2)?',
        options: ['Fields', 'Sorting/Grouping', 'Filter', 'Formatting'],
        answer: 'Filter',
      },
      {
        type: 'mcq',
        question: 'What does a Schedule Key (Key Schedule) do in Revit?',
        options: [
          'Locks the schedule so no cells can be edited',
          'Acts as a lookup table — assign a key value to rooms/elements and the associated data auto-populates',
          'Creates a schedule that only shows elements with a Mark value',
          'Exports the schedule to an encrypted format',
        ],
        answer: 'Acts as a lookup table — assign a key value to rooms/elements and the associated data auto-populates',
      },
      {
        type: 'fillblank',
        question: 'To get a schedule of material volumes and areas per compound layer (e.g., concrete volume per floor), use a ___ schedule type.',
        answer: 'Material Takeoff',
      },
      {
        type: 'mcq',
        question: 'In Schedule Sorting/Grouping, what does enabling "Footer" with "Count" do?',
        options: [
          'Adds a header row at the top of each group',
          'Shows a count of elements at the bottom of each sorted group',
          'Adds a grand total row at the very bottom of the schedule',
          'Disables itemizing and shows only type totals',
        ],
        answer: 'Shows a count of elements at the bottom of each sorted group',
      },
      {
        type: 'truefalse',
        question: 'Deleting a row in a Revit Door Schedule deletes the actual door element from the model.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'A schedule cell is shown in gray and cannot be edited. What does this indicate?',
        options: [
          'The element is on a different level',
          'The parameter is read-only — either calculated by Revit or a type parameter',
          'The schedule is set to "Totals Only" mode',
          'The element is pinned',
        ],
        answer: 'The parameter is read-only — either calculated by Revit or a type parameter',
      },
      {
        type: 'mcq',
        question: 'You want to export a door schedule for use in Excel. Which export option should you use?',
        options: [
          'File → Export → CAD Formats → DWG',
          'File → Export → Reports → Schedule',
          'File → Print → Print to PDF',
          'File → Export → IFC',
        ],
        answer: 'File → Export → Reports → Schedule',
      },
      {
        type: 'truefalse',
        question: 'An "Unplaced Room" in Revit exists in the room schedule but has not been placed in any view — it has no area or location.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-12: Sheets, Titleblocks & Printing
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-12',
    title: 'Sheets, Titleblocks & Printing',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A titleblock in Revit is which type of file?',
        options: [
          'A system family built into the project',
          'A loadable annotation family (.rfa)',
          'A CAD template (.dwt)',
          'A view template stored in Manage settings',
        ],
        answer: 'A loadable annotation family (.rfa)',
      },
      {
        type: 'truefalse',
        question: 'A floor plan view can be placed on two different sheets simultaneously in Revit.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'How do you resize a viewport on a sheet to show more or less of the model view?',
        options: [
          'Drag the viewport edges on the sheet',
          'Change the crop region in the underlying view, then return to the sheet',
          'Change the View Scale in the sheet properties',
          'Double-click the viewport and use the Resize tool',
        ],
        answer: 'Change the crop region in the underlying view, then return to the sheet',
      },
      {
        type: 'mcq',
        question: 'A revision cloud linked to Revision 3 is placed in a view that is on Sheet A-201. Where does Revision 3 appear in the titleblock?',
        options: [
          'On all sheets in the project',
          'Only on Sheet A-201\'s revision table',
          'Only in the view where the revision cloud was placed',
          'In the revision schedule placed on the cover sheet only',
        ],
        answer: 'Only on Sheet A-201\'s revision table',
      },
      {
        type: 'fillblank',
        question: 'A ___ view can be placed on multiple sheets simultaneously, unlike standard model views.',
        answer: 'Legend',
      },
      {
        type: 'mcq',
        question: 'In Revit 2022+, what is the correct way to export multiple sheets as a combined PDF?',
        options: [
          'File → Print → select a PDF printer → print range: all sheets',
          'File → Export → PDF → select multiple sheets → Export',
          'View → Sheet → Export → PDF',
          'File → Save As → PDF',
        ],
        answer: 'File → Export → PDF → select multiple sheets → Export',
      },
      {
        type: 'truefalse',
        question: 'Once a revision is marked as "Issued" in the Revisions dialog, its revision clouds are locked and cannot be moved.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'What is the purpose of a Guide Grid on a sheet?',
        options: [
          'It divides the sheet into a reference grid visible in the printed output',
          'It helps align viewports consistently across multiple sheets but is not printed',
          'It controls the titleblock field positions',
          'It snaps model elements to a grid when viewed from the sheet',
        ],
        answer: 'It helps align viewports consistently across multiple sheets but is not printed',
      },
      {
        type: 'mcq',
        question: 'Revit annotation text is set to 2.5mm and the view is at 1:100. What size does the text print on paper?',
        options: ['0.025mm', '2.5mm', '250mm', '25mm'],
        answer: '2.5mm',
      },
      {
        type: 'truefalse',
        question: 'A Sheet List schedule in Revit automatically updates as sheets are added, renamed, or renumbered.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-13: Dimensions, Tags & Annotations
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-13',
    title: 'Dimensions, Tags & Annotations',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What keyboard shortcut places an Aligned Dimension in Revit?',
        options: ['AD', 'DI', 'DA', 'Ctrl+D'],
        answer: 'DI',
      },
      {
        type: 'truefalse',
        question: 'You can override the numeric value of a Revit dimension to show a different number than the actual measured distance.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'What does the "EQ" label on a selected dimension string do when clicked?',
        options: [
          'Exports the dimension string to a schedule',
          'Makes all dimension spans equal by redistributing the referenced elements',
          'Locks the dimension so the referenced elements cannot move',
          'Converts the dimension to an angular dimension',
        ],
        answer: 'Makes all dimension spans equal by redistributing the referenced elements',
      },
      {
        type: 'mcq',
        question: 'A Spot Elevation annotation is used to:',
        options: [
          'Show the horizontal distance between two points',
          'Show the height of a point above the project base or survey point',
          'Mark the elevation of a grid line',
          'Annotate the slope of a ramp in degrees',
        ],
        answer: 'Show the height of a point above the project base or survey point',
      },
      {
        type: 'fillblank',
        question: 'The shortcut to place a Text Note annotation in Revit is ___.',
        answer: 'TX',
      },
      {
        type: 'mcq',
        question: 'A tag placed on a door in a Level 1 floor plan view — does it also appear in other views showing the same door?',
        options: [
          'Yes — tags are model elements that appear in all views',
          'No — tags are view-specific and only appear in the view where they were placed',
          'Yes — but only in other floor plan views, not in sections or elevations',
          'No — unless the view template for other views includes tag visibility',
        ],
        answer: 'No — tags are view-specific and only appear in the view where they were placed',
      },
      {
        type: 'truefalse',
        question: 'Keynote annotations are driven by a legend file — changing the description in the keynote legend file updates all keynotes using that keynote number.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'When a section view is placed on a sheet, what information automatically populates in the section mark on the floor plan?',
        options: [
          'The section view name only',
          'The sheet number and detail number (view number on that sheet)',
          'The view scale of the section view',
          'The date the section was created',
        ],
        answer: 'The sheet number and detail number (view number on that sheet)',
      },
      {
        type: 'mcq',
        question: 'Detail Lines in Revit are:',
        options: [
          'Model lines that appear in all views',
          'View-specific 2D annotation lines that are not part of the 3D model',
          'Lines that define the outline of a Filled Region',
          'Construction lines used only in the Family Editor',
        ],
        answer: 'View-specific 2D annotation lines that are not part of the 3D model',
      },
      {
        type: 'truefalse',
        question: 'The Tab key cycles between snap targets (wall face, centerline, core face) when placing a dimension in Revit.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-14: Rooms, Areas & Color Schemes
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-14',
    title: 'Rooms, Areas & Color Schemes',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'A room in Revit shows "Not Enclosed" and has an unusually large calculated area. What is the most likely cause?',
        options: [
          'The room tag is placed in the wrong location',
          'One or more walls bounding the room do not have Room Bounding enabled, or there is a gap in the walls',
          'The room\'s Upper Limit is set too high',
          'The view range does not show the walls enclosing the room',
        ],
        answer: 'One or more walls bounding the room do not have Room Bounding enabled, or there is a gap in the walls',
      },
      {
        type: 'truefalse',
        question: 'Room Separation Lines are model elements that appear as walls in the 3D model.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'What tool temporarily highlights all room-bounding elements in a view to help diagnose unbounded room problems?',
        options: [
          'Manage → Room Boundaries',
          'Architecture → Room & Area → Highlight Boundaries',
          'View → Visibility/Graphics → Room Boundaries',
          'Annotate → Room Boundary Check',
        ],
        answer: 'Architecture → Room & Area → Highlight Boundaries',
      },
      {
        type: 'mcq',
        question: 'What is the difference between Rooms and Areas in Revit?',
        options: [
          'Rooms are for residential projects; Areas are for commercial projects',
          'Rooms follow wall geometry automatically; Areas use manually drawn Area Boundaries and belong to a specific Area Scheme (e.g., Gross Building, Rentable)',
          'Rooms calculate volume; Areas calculate only horizontal area',
          'Rooms exist in floor plan views only; Areas can be placed in sections and elevations',
        ],
        answer: 'Rooms follow wall geometry automatically; Areas use manually drawn Area Boundaries and belong to a specific Area Scheme (e.g., Gross Building, Rentable)',
      },
      {
        type: 'fillblank',
        question: 'To color-fill rooms on a plan by Department, you apply a ___ to the view.',
        answer: 'Color Scheme',
      },
      {
        type: 'mcq',
        question: 'You delete a room element from the model view. What happens to it in the Room Schedule?',
        options: [
          'It is permanently deleted from the schedule immediately',
          'It becomes an "Unplaced" room — it remains in the schedule with no location or area',
          'It shows as "Demolished" in the schedule',
          'Nothing changes — room schedules do not reflect model deletions',
        ],
        answer: 'It becomes an "Unplaced" room — it remains in the schedule with no location or area',
      },
      {
        type: 'truefalse',
        question: 'A Color Scheme applied to a floor plan view automatically updates if a room\'s Department parameter is changed.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'In a Room Schedule used for program compliance checking, you want to see rooms where the actual area is less than the required area. What is the best Revit approach?',
        options: [
          'Manually review each row in the schedule',
          'Add a Calculated Value column (Variance = Area minus Required Area) and sort by Variance ascending',
          'Use a Phase Filter to isolate undersized rooms',
          'Apply a View Template that highlights small rooms',
        ],
        answer: 'Add a Calculated Value column (Variance = Area minus Required Area) and sort by Variance ascending',
      },
      {
        type: 'mcq',
        question: 'A Color Fill Legend placed on a sheet:',
        options: [
          'Must be manually updated each time the Color Scheme changes',
          'Updates automatically when the Color Scheme is modified',
          'Is a static image and does not update',
          'Can only be placed in the view, not on a sheet',
        ],
        answer: 'Updates automatically when the Color Scheme is modified',
      },
      {
        type: 'truefalse',
        question: 'The COBie data format, used for FM system handover, can include room names, numbers, areas, and departments exported from Revit.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-15: Materials, Appearance & Rendering Basics
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-15',
    title: 'Materials, Appearance & Rendering Basics',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'In the Revit Material Browser, which tab controls the hatch pattern shown when a material is cut through in a floor plan or section?',
        options: ['Identity', 'Appearance', 'Graphics', 'Physical'],
        answer: 'Graphics',
      },
      {
        type: 'truefalse',
        question: 'The Appearance tab in the Material Browser controls how a material looks in printed Hidden Line floor plans.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'You want to apply a photorealistic brick texture to a wall for rendering. Where in the Material Browser do you assign the texture bitmap?',
        options: ['Identity tab → Keywords', 'Graphics tab → Surface Pattern', 'Appearance tab → Render Asset (Diffuse/Color Map)', 'Physical tab → Density'],
        answer: 'Appearance tab → Render Asset (Diffuse/Color Map)',
      },
      {
        type: 'mcq',
        question: 'The Paint tool in Revit is used to:',
        options: [
          'Apply a color to all walls in the project',
          'Apply a material override to a specific face of an element without changing its type',
          'Change the rendering quality setting for a 3D view',
          'Color-code rooms using a Color Scheme',
        ],
        answer: 'Apply a material override to a specific face of an element without changing its type',
      },
      {
        type: 'fillblank',
        question: 'The rendering technology built into Revit (available via View → Render or RR shortcut) is called ___.',
        answer: 'Autodesk Raytracer',
      },
      {
        type: 'mcq',
        question: 'You set a brick texture scale to 900mm x 150mm in the material appearance. What does this control?',
        options: [
          'The size of the brick element placed in the model',
          'The real-world dimensions of one tile repeat of the brick texture bitmap',
          'The maximum wall height the brick material can be applied to',
          'The resolution of the rendered image',
        ],
        answer: 'The real-world dimensions of one tile repeat of the brick texture bitmap',
      },
      {
        type: 'truefalse',
        question: 'The Physical tab of a Revit material includes properties like density and thermal conductivity, which are used by energy analysis tools.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'For high-quality architectural visualization competitive with dedicated rendering software, which approach is recommended over Revit\'s built-in renderer?',
        options: [
          'Set Revit render quality to "Best" and enable Ray Trace visual style',
          'Use a real-time rendering plugin like Enscape, Lumion, or Twinmotion',
          'Export to DWG and render in AutoCAD',
          'Use the Revit Realistic visual style for presentation screenshots',
        ],
        answer: 'Use a real-time rendering plugin like Enscape, Lumion, or Twinmotion',
      },
      {
        type: 'mcq',
        question: 'In the Revit Render dialog, what does the "Exposure" setting control?',
        options: [
          'The number of light sources in the scene',
          'The brightness and contrast of the rendered image output',
          'How long the rendering process takes',
          'The geographic location for sun angle calculation',
        ],
        answer: 'The brightness and contrast of the rendered image output',
      },
      {
        type: 'truefalse',
        question: 'Materials assigned to compound wall layers appear correctly in Material Takeoff schedules, showing volume and area per material.',
        answer: true,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-16: Phases & Design Options
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-16',
    title: 'Phases & Design Options',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Every Revit element has two phase parameters. What are they?',
        options: [
          'Phase Created and Phase Demolished',
          'Phase Start and Phase End',
          'Phase Existing and Phase New',
          'Phase Built and Phase Removed',
        ],
        answer: 'Phase Created and Phase Demolished',
      },
      {
        type: 'truefalse',
        question: 'When you draw a wall in a view set to "New Construction" phase, the wall\'s Phase Created is automatically set to New Construction.',
        answer: true,
      },
      {
        type: 'mcq',
        question: 'To show a demolition plan (existing elements + elements being demolished as dashed), which Phase Filter should you apply to the view?',
        options: [
          'Show New',
          'Show Complete',
          'Show Previous + Demo (or Show Demo + New)',
          'Show All',
        ],
        answer: 'Show Previous + Demo (or Show Demo + New)',
      },
      {
        type: 'mcq',
        question: 'How do you demolish a wall in a specific phase using Revit\'s dedicated tool?',
        options: [
          'Select the wall → Delete → confirm demolition in the dialog',
          'Manage tab → Phasing → Demolish → click the wall',
          'Right-click the wall → Phase → Demolish',
          'Set the wall\'s Phase Demolished parameter to "Existing" in Properties',
        ],
        answer: 'Manage tab → Phasing → Demolish → click the wall',
      },
      {
        type: 'fillblank',
        question: 'Phase Graphic Overrides that control how demolished elements appear (dashed lines, grey fill) are configured in Manage → Phasing → ___.',
        answer: 'Graphic Overrides',
      },
      {
        type: 'mcq',
        question: 'What does the "Accept Primary" option do in the Design Options dialog?',
        options: [
          'Marks the selected option as the preferred design for review',
          'Merges the Primary option\'s elements into the main model and permanently deletes all other options in that set',
          'Copies the Primary option to a new project file',
          'Locks the Primary option so no further changes can be made',
        ],
        answer: 'Merges the Primary option\'s elements into the main model and permanently deletes all other options in that set',
      },
      {
        type: 'truefalse',
        question: 'A Revit project can have phases in any order — they do not need to be sequential.',
        answer: false,
      },
      {
        type: 'mcq',
        question: 'You want to show two facade alternatives side by side on a comparison sheet for a client presentation. What is the correct approach?',
        options: [
          'Create two separate project files and print one sheet from each',
          'Create two Design Options → set two views each showing a different option → place both views on one sheet',
          'Use Phase filters to show different design alternatives in each view',
          'Duplicate the model and use worksharing to develop alternatives simultaneously',
        ],
        answer: 'Create two Design Options → set two views each showing a different option → place both views on one sheet',
      },
      {
        type: 'mcq',
        question: 'An existing wall runs 10m long. Only the middle 4m section is being demolished. What is the correct Revit workflow?',
        options: [
          'Delete the entire wall and redraw the two retained sections',
          'Split the wall into three segments, then demolish only the middle segment',
          'Set the entire wall\'s Phase Demolished parameter and use masking regions to hide the retained portions',
          'Use Edit Profile to remove the demolished section from the wall outline',
        ],
        answer: 'Split the wall into three segments, then demolish only the middle segment',
      },
      {
        type: 'truefalse',
        question: 'Design Options are suitable for managing long-term parallel development of an entire building in a single Revit file.',
        answer: false,
      },
    ],
  },
];
