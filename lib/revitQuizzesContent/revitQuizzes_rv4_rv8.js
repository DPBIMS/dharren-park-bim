// ============================================================
// REVIT QUIZZES DATA — rv-4 through rv-8
// Merge these entries into your lib/revitQuizzesData.js array
// ============================================================

export const revitQuizzes_rv4_rv8 = [

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-4: Navigation: Views, Zoom & View Controls
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-4',
    title: 'Revit Navigation & View Controls',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which mouse action pans the view in Revit?',
        options: [
          'Scroll wheel forward/back',
          'Press and hold the scroll wheel and drag',
          'Shift + left mouse button drag',
          'Right-click and drag'
        ],
        answer: 'Press and hold the scroll wheel and drag'
      },
      {
        type: 'mcq',
        question: 'What does the keyboard shortcut ZF (or ZA) do in Revit?',
        options: [
          'Opens the Zoom Factor dialog',
          'Zooms in by 2×',
          'Fits all visible elements in the current view',
          'Activates the Zoom to Selection tool'
        ],
        answer: 'Fits all visible elements in the current view'
      },
      {
        type: 'truefalse',
        question: 'In Revit, pressing Ctrl+Z can undo a pan or zoom action.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'What keyboard shortcut zooms the view to the currently selected element(s)?',
        options: ['ZF', 'ZR', 'ZE', 'ZP'],
        answer: 'ZE'
      },
      {
        type: 'truefalse',
        question: 'The ViewCube appears in all Revit view types, including floor plans and elevation views.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'Which of the following is the correct description of Revit\'s View Range?',
        options: [
          'A setting that controls how far you can zoom out in a view',
          'Horizontal cut planes (Top, Cut Plane, Bottom, View Depth) that define what appears in a floor plan',
          'The extent of the crop region boundary in a floor plan',
          'The distance between the camera and the model in a 3D view'
        ],
        answer: 'Horizontal cut planes (Top, Cut Plane, Bottom, View Depth) that define what appears in a floor plan'
      },
      {
        type: 'fillblank',
        question: 'To draw a rectangular selection zoom area, you type the shortcut ___.',
        answer: 'ZR'
      },
      {
        type: 'mcq',
        question: 'You have 40 views open in Revit and the software is running slowly. What is the best action to take?',
        options: [
          'Restart Revit and reopen only the views you need',
          'Use View tab → Close Hidden Views to close all non-visible open views',
          'Delete the extra views from the Project Browser',
          'Reduce the Detail Level of all views to Coarse'
        ],
        answer: 'Use View tab → Close Hidden Views to close all non-visible open views'
      },
      {
        type: 'truefalse',
        question: 'In a 3D view, holding Shift while pressing and holding the scroll wheel allows you to orbit the model.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'A sill window placed at a non-standard height is not visible in the floor plan. What should you check first?',
        options: [
          'Whether the window family is loaded correctly',
          'The View Range settings — specifically the Cut Plane height',
          'Whether the window is pinned',
          'The Detail Level setting of the view'
        ],
        answer: 'The View Range settings — specifically the Cut Plane height'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-5: Understanding Revit File Types
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-5',
    title: 'Revit File Types & the File Ecosystem',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What is the file extension for a Revit project file?',
        options: ['.rfa', '.rte', '.rvt', '.rft'],
        answer: '.rvt'
      },
      {
        type: 'mcq',
        question: 'An .rfa file in Revit is:',
        options: [
          'A Revit project template',
          'A loadable component family (e.g., a door or chair)',
          'A backup of a Revit project',
          'A Revit family template used to start a new family'
        ],
        answer: 'A loadable component family (e.g., a door or chair)'
      },
      {
        type: 'truefalse',
        question: 'A Revit project file saved in version 2025 can be opened without any conversion in Revit 2024.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'When you open a file in Revit and the interface shows only simple plan/elevation views with a "Load into Project" button, you are in the:',
        options: [
          'Sheet view',
          'Family Editor',
          'Worksharing environment',
          'Massing study view'
        ],
        answer: 'Family Editor'
      },
      {
        type: 'fillblank',
        question: 'The file extension used for Revit project templates is ___.',
        answer: '.rte'
      },
      {
        type: 'mcq',
        question: 'Walls, Floors, and Roofs in Revit are categorized as:',
        options: [
          'Loadable Families (.rfa)',
          'Component Families',
          'System Families',
          'Annotation Families'
        ],
        answer: 'System Families'
      },
      {
        type: 'truefalse',
        question: 'Revit automatically creates backup copies of project files (e.g., .0001.rvt), and you can restore from these if the main file becomes corrupt.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'Which file extension is used when creating a new family from scratch as a starting-point template?',
        options: ['.rfa', '.rte', '.rvt', '.rft'],
        answer: '.rft'
      },
      {
        type: 'mcq',
        question: 'You receive a Revit model from a consultant. Before opening it in your live project, the safest approach is to:',
        options: [
          'Open it directly and begin editing',
          'Upgrade it to the latest Revit version first',
          'Open with "Audit" checked and review the file in a separate session before linking or merging',
          'Save a copy as an IFC first'
        ],
        answer: 'Open with "Audit" checked and review the file in a separate session before linking or merging'
      },
      {
        type: 'truefalse',
        question: 'Modifying a family in the Family Editor automatically updates all instances of that family in every project where it was loaded.',
        answer: false
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-6: Project Browser & Properties Panel
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-6',
    title: 'Project Browser & Properties Panel',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'In the Project Browser, what happens when you double-click a view name?',
        options: [
          'The view is deleted',
          'The view opens in the drawing canvas',
          'The view\'s properties dialog opens',
          'A duplicate of the view is created'
        ],
        answer: 'The view opens in the drawing canvas'
      },
      {
        type: 'mcq',
        question: 'You want to change the thickness of a wall type globally across the entire project. What is the correct action?',
        options: [
          'Select one wall and change its thickness in the Properties panel (Instance)',
          'Select all walls of that type and change thickness in Properties',
          'Select one wall → Properties → Edit Type → duplicate and edit the compound structure',
          'Use Manage → Object Styles to change wall thickness'
        ],
        answer: 'Select one wall → Properties → Edit Type → duplicate and edit the compound structure'
      },
      {
        type: 'truefalse',
        question: 'When nothing is selected in Revit, the Properties panel shows the properties of the active view.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What does "Select All Instances → In Entire Project" do when right-clicked on a family type in the Project Browser?',
        options: [
          'Selects one instance of that family type in the active view',
          'Selects every placed instance of that family type in every view of the project',
          'Opens the family for editing',
          'Highlights the family type in the schedule'
        ],
        answer: 'Selects every placed instance of that family type in every view of the project'
      },
      {
        type: 'fillblank',
        question: 'To access a wall\'s layer structure and material assignments, select the wall, go to Properties, and click the ___ button.',
        answer: 'Edit Type'
      },
      {
        type: 'mcq',
        question: 'A parameter shown in gray text in the Properties panel means:',
        options: [
          'The parameter is locked by a View Template',
          'The parameter is read-only — either calculated by Revit or controlled by the type',
          'The parameter requires administrative access to change',
          'The element is not visible in the current view'
        ],
        answer: 'The parameter is read-only — either calculated by Revit or controlled by the type'
      },
      {
        type: 'truefalse',
        question: 'System Families like Walls and Floors appear as .rfa files in the Families node of the Project Browser.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'You select 15 doors and 8 windows simultaneously. How does the Properties panel handle this mixed selection?',
        options: [
          'Properties shows nothing — mixed selections are not supported',
          'Properties shows a dropdown to filter by category, so you can view and edit doors or windows separately',
          'Properties shows the average values of all selected elements',
          'Revit automatically deselects the minority category'
        ],
        answer: 'Properties shows a dropdown to filter by category, so you can view and edit doors or windows separately'
      },
      {
        type: 'mcq',
        question: 'What Revit command removes families from a project that have no placed instances?',
        options: [
          'Manage → Purge Unused',
          'Manage → Delete Unused Families',
          'Insert → Reload Families',
          'View → Visibility/Graphics → Filters'
        ],
        answer: 'Manage → Purge Unused'
      },
      {
        type: 'truefalse',
        question: 'Browser Organization schemes in the Project Browser move views to different folders on disk.',
        answer: false
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-7: Grids, Levels & Datum Elements
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-7',
    title: 'Grids, Levels & Datum Elements',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'Which of the following are classified as "datum elements" in Revit?',
        options: [
          'Walls, Floors, and Roofs',
          'Levels, Grids, and Reference Planes',
          'Doors, Windows, and Columns',
          'Sheets, Views, and Schedules'
        ],
        answer: 'Levels, Grids, and Reference Planes'
      },
      {
        type: 'mcq',
        question: 'In which type of view must you be working to place a Level in Revit?',
        options: [
          'Floor plan view',
          'Ceiling plan view',
          'Elevation or section view',
          '3D view'
        ],
        answer: 'Elevation or section view'
      },
      {
        type: 'truefalse',
        question: 'Moving a Level\'s elevation in Revit automatically moves all walls and floors constrained to that Level.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'A datum endpoint has a small icon that toggles between two modes. What is the difference between 3D and 2D mode?',
        options: [
          '3D mode makes the datum visible in 3D views; 2D mode makes it visible in plan views only',
          '3D mode changes to datum extents in all parallel views; 2D mode changes the datum only in the current view',
          '3D mode displays the datum with a 3D bubble; 2D mode shows a flat line',
          '3D mode locks the datum; 2D mode allows it to be deleted'
        ],
        answer: '3D mode changes to datum extents in all parallel views; 2D mode changes the datum only in the current view'
      },
      {
        type: 'fillblank',
        question: 'The Revit keyboard shortcut to start placing a Grid is ___.',
        answer: 'GR'
      },
      {
        type: 'mcq',
        question: 'You have placed all grids in the Level 1 floor plan but they are not appearing correctly in your North Elevation. What should you do?',
        options: [
          'Redraw the grids in the elevation view',
          'Use "Propagate Extents" with the grids selected to push their 3D extents to the elevation view',
          'Turn on Grids in Visibility/Graphics for the elevation view',
          'Change the grids from 2D mode to 3D mode in the elevation view'
        ],
        answer: 'Use "Propagate Extents" with the grids selected to push their 3D extents to the elevation view'
      },
      {
        type: 'truefalse',
        question: 'A Reference Plane is the same as a Grid — it appears in all views with a bubble label.',
        answer: false
      },
      {
        type: 'mcq',
        question: 'A wall whose Top Constraint is set to "Unconnected" with a hardcoded height of 3000mm:',
        options: [
          'Will automatically update if the floor level above changes height',
          'Is the recommended way to set wall heights in Revit',
          'Will NOT update if the level above changes — it remains at 3000mm',
          'Is the same as setting Top Constraint to a Level'
        ],
        answer: 'Will NOT update if the level above changes — it remains at 3000mm'
      },
      {
        type: 'mcq',
        question: 'The fastest way to place structural columns at every grid intersection simultaneously is:',
        options: [
          'Place each column individually and snap to the grid intersection',
          'Use the Array tool to distribute columns along each grid',
          'Structural Column tool → "At Grids" mode → select all grids → Finish',
          'Use Copy and Paste aligned to Grid intersections'
        ],
        answer: 'Structural Column tool → "At Grids" mode → select all grids → Finish'
      },
      {
        type: 'truefalse',
        question: 'In most international structural drawing standards, horizontal grid lines are labeled with numbers and vertical grid lines with letters.',
        answer: false
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // QUIZ rv-8: Basic Walls, Floors & Roofs
  // ─────────────────────────────────────────────────────────
  {
    lessonId: 'rv-8',
    title: 'Basic Walls, Floors & Roofs',
    passingScore: 75,
    questions: [
      {
        type: 'mcq',
        question: 'What does the "Location Line" setting control when placing a wall in Revit?',
        options: [
          'Which level the wall starts from',
          'Where the drawn line falls relative to the wall\'s layer structure (e.g., finish face or core centerline)',
          'Whether the wall is structural or architectural',
          'The orientation of the wall\'s exterior face'
        ],
        answer: 'Where the drawn line falls relative to the wall\'s layer structure (e.g., finish face or core centerline)'
      },
      {
        type: 'truefalse',
        question: 'In Revit, Walls, Floors, and Roofs are System Families — they cannot be saved as separate .rfa files.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'You need to create a new wall type that is similar to an existing one but with different insulation thickness. What is the correct procedure?',
        options: [
          'Edit the existing wall type directly and change the insulation layer',
          'Select a wall → Edit Type → Duplicate → rename → edit the compound structure',
          'Use Insert → Load Family to load a new wall type from the library',
          'Change the wall\'s thickness in Instance Properties'
        ],
        answer: 'Select a wall → Edit Type → Duplicate → rename → edit the compound structure'
      },
      {
        type: 'mcq',
        question: 'When placing a floor in Revit, what is the correct description of Sketch Mode?',
        options: [
          'A mode where you can only draw reference planes',
          'An interface where you draw the closed 2D boundary that defines the floor\'s outline',
          'A rendering preview mode for the floor material',
          'A mode that automatically traces the nearest walls to create a floor'
        ],
        answer: 'An interface where you draw the closed 2D boundary that defines the floor\'s outline'
      },
      {
        type: 'fillblank',
        question: 'The Revit keyboard shortcut to start placing a wall is ___.',
        answer: 'WA'
      },
      {
        type: 'mcq',
        question: 'After placing a roof by footprint, you want the gable-end walls to automatically follow the sloped underside of the roof. What tool do you use?',
        options: [
          'Edit Profile on each wall',
          'Select the walls → Modify → Attach Top/Base → click the roof',
          'Set each wall\'s Top Constraint to the roof level',
          'Use the Roof/Wall Join tool in the Architecture tab'
        ],
        answer: 'Select the walls → Modify → Attach Top/Base → click the roof'
      },
      {
        type: 'truefalse',
        question: 'A wall with Base Constraint set to "Level 1" and Top Constraint set to "Level 2" will automatically update its height if Level 2\'s elevation is changed.',
        answer: true
      },
      {
        type: 'mcq',
        question: 'What does the "Edit Profile" command do when applied to a wall?',
        options: [
          'Opens the compound layer structure editor for the wall type',
          'Enters sketch mode to edit the wall\'s top and bottom edge profile (e.g., for arched tops or stepped parapets)',
          'Changes the wall\'s location line (finish face or core centerline)',
          'Allows you to rename the wall type'
        ],
        answer: 'Enters sketch mode to edit the wall\'s top and bottom edge profile (e.g., for arched tops or stepped parapets)'
      },
      {
        type: 'mcq',
        question: 'In the Edit Assembly dialog for a wall type, what does the "Function" column define?',
        options: [
          'Whether each layer is visible in plan vs. 3D views',
          'The role of each layer (Structure, Finish, Substrate, Thermal, Membrane) which controls how layers join at wall intersections',
          'The material\'s fire rating',
          'The sequence in which layers are constructed on site'
        ],
        answer: 'The role of each layer (Structure, Finish, Substrate, Thermal, Membrane) which controls how layers join at wall intersections'
      },
      {
        type: 'truefalse',
        question: 'A floor boundary in Sketch Mode can have overlapping lines and still be accepted by Revit when you click Finish.',
        answer: false
      }
    ]
  }

];
