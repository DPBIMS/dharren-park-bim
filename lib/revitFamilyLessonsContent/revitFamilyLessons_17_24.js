// ============================================================
// REVIT FAMILY CREATION — LESSONS rf-17 through rf-24 (ADVANCED)
// File: lib/revitFamilyLessonsContent/lessons-17-24.js
// cat: 'advanced' — accessible to Premium plan only
// Deliverable: production-ready family library
// ============================================================

export const lessons_17_24 = [

  // ─────────────────────────────────────────────────────────
  // rf-17: MEP Families — Complete Guide
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-17',
    num: 17,
    title: 'MEP Families — Complete Guide',
    topic: 'MEP',
    cat: 'advanced',
    readTime: '22 min',
    free: false,
    desc: 'Build MEP families across all four disciplines — Mechanical, Plumbing, Electrical, and Lighting — understanding connectors, system classification, hosted vs. non-hosted conventions, and the data requirements that make MEP families genuinely useful for engineers and contractors.',
    intro: `MEP families are the most data-rich families in a Revit model. Unlike architectural furniture or structural columns, MEP elements carry flow rates, pressure ratings, electrical loads, circuit connections, pipe sizes, duct sizes, and system classifications that feed directly into engineering calculations, code compliance checks, and contractor procurement schedules. A poorly built MEP family is not just visually wrong — it produces incorrect engineering data that affects every downstream analysis the project relies on.

This lesson covers all four MEP disciplines in one comprehensive session. The geometry principles from rf-6 and rf-7 apply universally — what makes MEP families different is the connector system, the system classification, and the engineering parameters. Once you understand these, building MEP families across all disciplines follows a consistent logic.`,
    sections: [
      {
        title: 'MEP Family Fundamentals — Connectors',
        content: `The defining feature of MEP families is connectors — the attachment points where Revit\'s MEP routing system connects pipes, ducts, conduits, or cable trays to the family. Connectors are what enable Revit to route systems automatically, check flow balance, calculate loads, and verify system connectivity.

**The Four Connector Types:**

**Duct Connector:**
Used on mechanical equipment, duct fittings, air terminals, and any family that connects to the duct system. Properties include: Shape (Rectangular, Round, Oval), Width, Height (or Diameter for round), Flow (CFM or L/s), Loss Coefficient, System Classification (Supply Air, Return Air, Exhaust Air, etc.).

**Pipe Connector:**
Used on plumbing fixtures, mechanical equipment with pipe connections, fire protection equipment, and hydronic coils. Properties include: Radius (pipe size), Flow, Pressure Drop, System Classification (Domestic Hot Water, Domestic Cold Water, Sanitary, Hydronic Supply, Hydronic Return, Fire Protection, etc.).

**Electrical Connector:**
Used on electrical panels, lighting fixtures, equipment panels, and any family drawing electrical power. Properties include: Voltage, Number of Poles (1, 2, 3), Load Classification (Power, Lighting, HVAC, Other), Apparent Load (VA/kVA), Power Factor.

**Cable Tray / Conduit Connector:**
Used on cable tray fittings, conduit fittings, and junction boxes. Properties include: Size (width x height for tray, diameter for conduit).

**Adding a Connector:**
In the Family Editor, with an MEP template open: Create tab → Connectors panel → select the connector type → click to place on a reference plane or geometry face. The connector appears as a small arrow or symbol indicating the connection direction and flow direction.

**Connector Direction:**
The connector\'s arrow indicates which direction a pipe or duct will connect. For an air terminal, the duct connector arrow points upward (the duct connects from above). For a pump, two pipe connectors point in opposite directions (inlet and outlet). Getting connector direction right is critical — reversed connectors cause flow direction errors in system analysis.`,
      },
      {
        title: 'Mechanical Families — HVAC Equipment',
        content: `Mechanical equipment families include air handling units, fan coil units, VAV boxes, diffusers, grilles, and any equipment connected to the duct system.

**Template Selection:**
- Air terminals (diffusers, grilles): Ceiling-Hosted Air Terminal.rft or Face-Based Air Terminal.rft
- Large equipment (AHUs, FCUs): Mechanical Equipment.rft (non-hosted)
- Duct fittings (elbows, tees, transitions): the specific duct fitting templates (Duct Elbow, Duct Tee, etc.)

**Reference Plane Setup for Mechanical Equipment:**
Non-hosted mechanical equipment typically has its origin at the floor level, centred in plan. Reference planes define the equipment footprint (for clearance zone checking), the duct connection heights, and the access panel locations.

**Duct Connector Placement:**
Place duct connectors exactly where the duct connects to the equipment:
- Supply air outlet: at the supply air plenum face of the AHU
- Return air inlet: at the return air plenum face
- Outside air intake: at the OA damper face
- Exhaust air: at the exhaust damper face

Each connector gets the correct System Classification (Supply Air, Return Air, Outside Air, Exhaust Air) — this determines which duct system the routing tool connects the equipment to.

**Key Mechanical Equipment Parameters:**
- Airflow (CFM or L/s) — drives system flow calculations
- Static Pressure (Pa) — for fan selection
- Cooling Capacity (kW) — for load calculations
- Heating Capacity (kW)
- Power Consumption (W or kW)
- Refrigerant Type — for environmental compliance
- Weight (kg) — for structural loading
- Noise Level (dB) — for acoustic compliance

Add these as shared parameters so they appear in mechanical equipment schedules used for engineering specifications and procurement.

**Air Terminal Setup:**
Ceiling-hosted diffuser families need:
1. A duct connector at the top (pointing upward into the ceiling void)
2. The connector size matching the duct neck size parameter
3. The face size as a separate parameter (the diffuser face visible in the ceiling)
4. The neck size parameter driving the connector size via formula: Connector Diameter = Neck Size`,
      },
      {
        title: 'Plumbing Families — Fixtures and Drainage',
        content: `Plumbing families include sanitary fixtures (WCs, basins, urinals, showers), hot and cold water outlets, floor drains, and any equipment connected to the plumbing systems.

**Template Selection:**
- Sanitary fixtures: Plumbing Fixture.rft (wall-hosted or floor-hosted depending on the fixture)
- Floor drains: Floor-Based Plumbing Fixture.rft
- Pipe fittings: the specific pipe fitting templates

**Pipe Connector Placement:**
Plumbing fixtures typically have multiple pipe connectors:
- Cold water supply: System Classification = Domestic Cold Water
- Hot water supply: System Classification = Domestic Hot Water
- Waste/soil outlet: System Classification = Sanitary

Each connector is placed at the exact pipe connection point — the location where the building services team will connect the pipework. In a WC family:
- Cold water connector at the cistern inlet (15mm or 22mm)
- Soil connector at the pan outlet (100mm or 110mm)

**Pipe Connector Size:**
The connector Radius property sets the pipe connection size. This can be driven by a parameter: Cold Water Connector Radius = Cold Water Pipe Size / 2. When the pipe size type parameter is changed, the connector size updates automatically — the routing tool then uses the correct pipe size for that connector.

**Key Plumbing Fixture Parameters:**
- Water Consumption (L/flush or L/min) — for water efficiency calculations
- Trap Size (mm) — for drainage design
- Soil Pipe Connection Size (mm)
- Cold Water Pipe Size (mm)
- Hot Water Pipe Size (mm)
- Flush Volume (L) — for water balance calculations
- Cistern Volume (L)
- ADA Compliant (Yes/No) — for accessibility compliance
- Manufacturer, Model Number — for procurement (add as shared parameters)

**Floor Drain Setup:**
Floor drain families need:
1. A floor-hosted base (the drain sits in the floor slab)
2. A void extrusion cutting the floor (for the drain opening)
3. A pipe connector pointing downward (the waste pipe connects below the slab)
4. The drain body geometry above the slab surface (grate, cover, frame)
5. A parameter for the grate size (the visible dimension in plan)`,
      },
      {
        title: 'Electrical Families — Equipment and Devices',
        content: `Electrical families include distribution boards, socket outlets, switches, isolators, motor starters, and any equipment that connects to the electrical system.

**Template Selection:**
- Wall-mounted devices (outlets, switches): Electrical Devices.rft (wall-hosted)
- Ceiling/floor-mounted equipment: Electrical Equipment.rft (non-hosted or face-hosted)
- Panel boards: Electrical Equipment.rft

**Electrical Connector Setup:**
Every electrical family needs at least one electrical connector defining its power connection:

Place Electrical Connector: Create tab → Connectors → Electrical Connector → click on the family geometry face or reference plane where the cable/conduit enters.

Critical connector properties:
- Voltage: the supply voltage (230V single phase, 400V three phase)
- Number of Poles: 1 (single phase), 2 (single phase + neutral), 3 (three phase)
- Load Classification: Power (for sockets, equipment), Lighting (for fixtures), HVAC (for mechanical equipment), Other
- Apparent Load: the connected load in VA or kVA — this drives electrical load calculations

**The Electrical Connector Arrow:**
The electrical connector arrow points in the direction the power supply comes from (into the equipment). For a socket outlet: the arrow points away from the wall (the cable comes from the wall into the outlet). This direction is used by Revit\'s electrical routing to determine panel feed direction.

**Key Electrical Equipment Parameters:**
- Voltage (V)
- Phase (Single Phase, Three Phase)
- Connected Load (kVA)
- Power Factor
- Circuit Breaker Rating (A)
- IP Rating — for wet area compliance
- Earthing Type
- Manufacturer, Model, Catalogue Number (as shared parameters)

**Panel Board Families:**
Distribution board families need multiple electrical connectors — one for the incoming supply and one for each circuit breaker position. For a 12-way panel: 1 incoming connector + 12 outgoing connectors. The outgoing connectors represent the individual circuit connections. In practice, panel board families in Revit are complex — many offices use simplified representations and manage panel schedules through Revit\'s built-in Electrical Panel Schedule tool rather than detailed family connectors.`,
      },
      {
        title: 'Lighting Families — Fixtures and Devices',
        content: `Lighting families are among the most commonly placed MEP families and among the most commonly downloaded from manufacturer websites in poor quality. Building lighting families correctly ensures accurate lighting load calculations, correct ceiling penetrations, and reliable photometric data.

**Template Selection:**
- Recessed ceiling fixtures: Lighting Fixture.rft (ceiling-hosted)
- Surface-mounted ceiling fixtures: Lighting Fixture.rft (ceiling-hosted)
- Wall-mounted fixtures: Lighting Device.rft (wall-hosted)
- Floor-standing fixtures: Lighting Fixture.rft (non-hosted)
- Emergency exit signs: Generic Annotation.rft for the symbol + Lighting Device.rft for the 3D model

**Lighting Fixture vs. Lighting Device:**
In Revit, Lighting Fixtures are the physical luminaires (the housing, lamp, and fitting). Lighting Devices are the control devices (switches, dimmers, sensors). Both use electrical connectors. The distinction matters for scheduling — a lighting fixture schedule reports all luminaires; a lighting device schedule reports all control devices.

**The Light Source:**
Revit lighting families can include a photometric light source that performs real illumination calculations in the Revit rendering engine. Add a light source: Create tab → Light Source → click to place → set the light distribution (Hemispherical, Spherical, Spot, Linear). Set the intensity and colour temperature parameters. With a light source, the family participates in Revit\'s lighting analysis — placing 20 downlights and running the lighting analysis gives lux levels across the room.

**Key Lighting Parameters:**
- Lamp Type (LED, Fluorescent, HID) — as a Text type parameter
- Lamp Wattage (W)
- Luminous Flux (lm) — total light output
- Colour Temperature (K) — warm white 2700K, cool white 4000K, daylight 6500K
- CRI (Colour Rendering Index)
- IP Rating — for wet area fixtures
- Emergency Duration (hours) — for emergency lighting
- Dimming Type (Non-Dim, 0-10V, DALI, Triac)
- Beam Angle (degrees) — for spot and track lighting
- Manufacturer, Model, Catalogue Number (shared parameters)

**Ceiling Penetration:**
Recessed lighting families need a void form cutting the ceiling. The void must match the cutout size parameter — a downlight with a 75mm cutout has a void extrusion 75mm in diameter cutting through the ceiling host. Use "Cut with Voids When Loaded" as covered in rf-7.

**Light Fixture Geometry Strategy:**
At Coarse detail level: show nothing (invisible — the ceiling grid dominates at 1:100).
At Medium detail level: show the ceiling trim ring / aperture only (the visible circle or square in the ceiling).
At Fine detail level: show the full 3D fixture including housing, lamp, reflector.
Use Symbolic Lines to show the aperture shape in ceiling plan views (looking up) independent of the 3D detail level geometry.`,
      },
    ],
    takeaways: [
      'MEP families are defined by connectors — duct, pipe, electrical, or cable tray connectors that enable system routing, flow calculations, and load analysis',
      'Connector direction, size, and System Classification (Supply Air, Domestic Cold Water, Power, Lighting) must be correct for engineering analysis to produce valid results',
      'Mechanical equipment: place duct connectors at actual duct connection faces with correct System Classification per connection',
      'Plumbing fixtures: multiple pipe connectors per fixture (cold, hot, waste) each with correct system classification and pipe size driving the connector radius',
      'Electrical families: connector Voltage, Poles, Load Classification, and Apparent Load drive panel load calculations — getting these right is an engineering responsibility',
      'Lighting families: add a photometric light source for illumination analysis; use Coarse/Medium/Fine visibility to show ceiling aperture at Medium and full 3D only at Fine',
    ],
    resource: {
      title: 'Autodesk Revit — MEP Connectors in Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-mep-connectors-families',
    },
    prev: 'rf-16',
    next: 'rf-18',
  },

  // ─────────────────────────────────────────────────────────
  // rf-18: Curtain Wall, Mullions & Structural Families
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-18',
    num: 18,
    title: 'Curtain Wall, Mullions & Structural Families',
    topic: 'Complex',
    cat: 'advanced',
    readTime: '20 min',
    free: false,
    desc: 'Build curtain wall panel families and mullion profile families for parametric facade systems, and understand structural family conventions for columns, beams, and foundations — the specialist family types that define building structure and envelope.',
    intro: `Curtain wall panels and mullions define the parametric facade systems that architectural practices use for glazed and cladded building envelopes. Structural families define the building\'s load-bearing skeleton. Both categories require specialist knowledge beyond the standard family creation workflow — curtain wall families work within Revit\'s curtain wall system with specific constraints and conventions, while structural families carry analytical model data that feeds structural engineering software.

This lesson covers both categories in depth. You will learn how curtain wall panels adapt to grid geometry, how mullion profiles control facade detail, and how structural families handle the analytical model requirements that make them genuinely useful for structural engineers, not just architects.`,
    sections: [
      {
        title: 'Curtain Wall Panel Families',
        content: `Curtain wall panels are the infill elements within a curtain wall grid — the glass panels, spandrel panels, solid panels, louvre sections, or any other infill type that fills the cells of a curtain wall system.

**The Curtain Wall Panel Template:**
File → New → Family → Curtain Wall Panel.rft.

The template provides two reference planes defining the panel width and height, and a "Thickness" reference plane. The panel is defined as a flat element that fills the curtain wall cell. The width and height are driven by the curtain wall grid — the panel resizes automatically as the grid changes.

**Panel Geometry:**
For a glass panel: a simple solid extrusion filling the full width and height, with thickness driven by a parameter. Lock all four edges to the boundary reference planes. The panel automatically sizes to fill each grid cell.

For a spandrel panel (opaque cladding): same approach — a solid extrusion with material parameter set to the cladding material.

For a louvre panel: a series of void extrusions cutting through the solid panel, spaced by a "Blade Spacing" parameter using the Array tool or formulas.

**The Panel Boundary Reference Planes:**
The four boundary planes (top, bottom, left, right) are pre-built in the template. These are driven by the curtain wall grid — do not label dimensions between them as parameters. The grid controls these. Instead, define all geometry relative to these boundary planes — lock all geometry edges to them.

**Panel Parameters:**
- Thickness (Type) — the panel depth
- Material (Type or Instance) — the panel facing material
- Glass Type (Type) — for glazed panels (add as shared parameter)
- U-Value (Type) — thermal performance (shared parameter for IFC Pset mapping)
- SHGC (Type) — solar heat gain coefficient
- Visible Light Transmittance (Type)

**Nested Components in Panels:**
A curtain wall panel can contain nested families. A vision panel within a spandrel might nest a smaller glazed panel family. Hardware mounted on the panel face can be nested families. Use the standard nesting workflow from rf-13.

**Loading a Custom Panel into a Curtain Wall:**
In the project: select the curtain wall → Edit Type → Curtain Panels → change the panel type to your custom family. All cells in the curtain wall use your panel. To apply different panels to individual cells: Tab-select individual cells → Properties → change the type.`,
      },
      {
        title: 'Mullion Profile Families',
        content: `Mullion profiles define the cross-section shape of curtain wall mullions — the vertical and horizontal framing members of the curtain wall grid. A standard rectangular aluminium curtain wall mullion, a custom steel channel profile, a bespoke timber glazing bar — all are defined by mullion profile families.

**The Mullion Profile Template:**
This is NOT the Curtain Wall Panel template. It is: File → New → Family → Profile → Curtain Wall Mullion.rft (or Mullion.rft).

The profile template is a 2D-only family — it defines the cross-section shape that Revit extrudes along the mullion path. There is no 3D geometry in the profile family — just a closed 2D loop.

**Drawing the Mullion Profile:**
In the single plan view of the profile template, draw the mullion cross-section using Detail Lines. The origin (reference plane intersection) defines where the mullion centre aligns to the curtain wall grid line. The profile is drawn around this centre point.

For a standard rectangular aluminium mullion (50mm wide x 150mm deep):
- Draw a rectangle: 25mm left and right of centre (50mm total width), 75mm front and 75mm back of centre (150mm total depth)
- The profile represents the full mullion cross-section

**Parametric Profile:**
Add reference planes and label dimensions for Width and Depth parameters. Lock the rectangle edges to the reference planes. Now the mullion profile is parametric — the width and depth can be changed by type.

**Loading a Mullion Profile into the Project:**
Insert → Load Family → navigate to the profile .rfa → Open. The profile appears in the project\'s family list.

Applying to a curtain wall: select the curtain wall → Edit Type → Vertical Mullions or Horizontal Mullions → Interior Type / Border 1 Type etc. → change the mullion type → in the mullion type properties, set Profile to your loaded profile family.

**Mullion vs. Curtain Wall Panel:**
Mullions are the frame members. Panels are the infill. A complete curtain wall facade requires both: custom panel families for the infill and custom mullion profile families for the frame. Together they define the complete facade system.`,
      },
      {
        title: 'Structural Column and Beam Families',
        content: `Structural families carry both geometric representation and analytical model data. The analytical model is an invisible set of lines and surfaces that structural analysis software (ETABS, Robot, SCIA, etc.) reads to perform structural calculations. Building structural families correctly requires understanding both the visual model and the analytical model.

**Structural Column Template:**
File → New → Family → Structural → Structural Column.rft.

The template provides pre-built reference planes for the column cross-section, including the "Analytical" reference planes that define the column\'s analytical centreline (the stick-line that structural analysis software reads).

**The Analytical Model:**
Structural column and beam families automatically generate an analytical model — a line representing the element\'s structural centroid. Revit uses this to create the analytical model that is exported to structural analysis software. The analytical model must:
- Pass through the structural centroid of the cross-section
- Connect correctly to other structural elements at nodes
- Align with the column base and capital reference planes

Do not modify the analytical reference planes in the template — they follow the structural engineering convention for that element type.

**Structural Column Cross-Section Types:**
Concrete columns: a solid extrusion with the column cross-section profile (square, circular, L-shaped, T-shaped). The material parameter should be set to the concrete grade.

Steel columns: for standard steel sections (UC, UB, RHS, CHS), the geometry follows the exact section dimensions from the steel manufacturer\'s standard tables. Create type catalogues (rf-9) for the full section range.

**Beam Families (Structural Framing Template):**
File → New → Family → Structural → Structural Framing.rft.

Beams are length-based — the beam family defines the cross-section profile and the material. The length is not a family parameter — it is determined by the span between support points in the project. The beam cross-section must align with the reference planes at the start and end of the beam.

**Key Structural Parameters:**
- Section Width (Type)
- Section Depth (Type)
- Web Thickness (Type — for steel sections)
- Flange Thickness (Type — for steel sections)
- Material / Structural Material (Type) — drives the analytical model material
- Section Area (Type — calculated, for steel sections)
- Moment of Inertia Ix, Iy (Type — for structural analysis)
- Section Modulus Zx, Zy (Type)

Add structural section properties as Type parameters. They appear in structural schedules and are read by some structural analysis export configurations.`,
      },
      {
        title: 'Structural Foundation Families',
        content: `Foundation families include pad foundations (isolated footings), strip foundations, pile caps, and ground beams. They sit below the structural slab and carry the column or wall loads to the ground.

**Foundation Template:**
File → New → Family → Structural → Structural Foundation.rft.

The foundation family template is similar to the structural column template but designed for below-grade elements. The origin is at the top of the foundation (where it connects to the column or wall above).

**Pad Foundation (Isolated Footing):**
The most common foundation family. Geometry: a rectangular or square solid extrusion representing the concrete pad. Parameters: Length, Width, Depth (all Type parameters). Material: Concrete — Structural.

The void cutting for column pocket: if the foundation has a pocket for the column base, add a void extrusion at the top face, sized to the column cross-section dimensions (driven by parameters: Column Width, Column Depth).

**Foundation Reinforcement Representation:**
At Fine detail level, reinforcement bars can be represented as simple cylinder solid extrusions. At Coarse and Medium: no reinforcement shown. Use the detail level visibility controls from rf-11. Note: for actual rebar modelling in a reinforced concrete project, use Revit\'s dedicated Rebar tool rather than family geometry — it properly handles rebar schedules, cover checking, and reinforcement drawings.

**Pile Cap Families:**
A pile cap family has the cap geometry (a solid block) and reference points or symbols indicating pile positions. The piles themselves are separate structural column families placed below the cap. Use nested families (rf-13) for the pile positions if they need to appear in the cap family representation.

**Connecting Foundations to Columns:**
In the project, columns are placed on top of foundations — the column base and foundation top align at the same level. Revit\'s structural analysis tool connects the column analytical model to the foundation analytical surface automatically when they share the same level elevation. Ensure the foundation top surface reference plane is at the correct level.

**When to Build vs. When to Use System Families:**
Revit has built-in structural foundation tools (Structural → Foundation → Isolated, Wall, Slab). These are System Families — they can handle standard rectangular and polygonal foundations well. Build loadable foundation families only when: the foundation shape is too complex for the built-in tools, custom parameters are needed for scheduling, or the foundation has embedded hardware (hold-down bolts, base plates) that need to be modelled as part of the foundation.`,
      },
    ],
    takeaways: [
      'Curtain wall panel families fill grid cells — the four boundary reference planes are driven by the curtain wall grid and must not have dimension parameters; lock all geometry to them',
      'Mullion profile families are 2D cross-section profiles (closed loop in Detail Lines) used by Revit to extrude the mullion shape along the grid — no 3D geometry in the profile family itself',
      'Structural column and beam families carry an analytical model (centreline/stick) that structural analysis software reads — never modify the pre-built analytical reference planes in the template',
      'Beam families define cross-section and material only — length is not a family parameter; it is determined by the span between supports in the project',
      'Build loadable foundation families only when the shape exceeds what System Foundation tools handle — for standard rectangular pads, Revit\'s built-in Isolated Foundation tool is sufficient',
    ],
    resource: {
      title: 'Autodesk Revit — Structural Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-structural-families',
    },
    prev: 'rf-17',
    next: 'rf-19',
  },

  // ─────────────────────────────────────────────────────────
  // rf-19: Adaptive Components
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-19',
    num: 19,
    title: 'Adaptive Components',
    topic: 'Complex',
    cat: 'advanced',
    readTime: '15 min',
    free: false,
    desc: 'Build adaptive component families that flex to any geometry — facade panels that conform to complex curved surfaces, structural nodes that adapt to variable geometry, and repeating elements that follow divided surface patterns.',
    intro: `Adaptive components are the most geometrically flexible family type in Revit. Unlike standard families that have a fixed orientation and a fixed insertion point, adaptive components have multiple adaptive points that can be placed anywhere in 3D space — on curved surfaces, at structural nodes, on points defined by divided surfaces. The family geometry stretches and adapts to fill whatever shape the adaptive points define.

This makes adaptive components the tool of choice for complex facade panelling, parametric structural nodes, and any repeating element that must conform to non-regular geometry. They are also the most technically demanding family type to build correctly.`,
    sections: [
      {
        title: 'What Makes Adaptive Components Different',
        content: `Standard families have a single insertion point and a fixed orientation. When placed, the family sits at the cursor position with its geometry in a predetermined arrangement.

Adaptive components have multiple Adaptive Points — numbered placement points that the user clicks in sequence when placing the component. The family geometry is defined relative to these points. When the points are placed at different locations, the geometry adapts to fit between them.

**Example — A Four-Point Facade Panel:**
A rectangular facade panel adaptive component has 4 adaptive points, one at each corner. When placed, the user clicks four points (the corners of one grid cell on a curved facade). The panel geometry — the flat rectangular panel — automatically twists and scales to fill the quadrilateral defined by those four points. The same family can fill rectangular cells, trapezoidal cells, or highly distorted cells on a complex curved surface.

**When to Use Adaptive Components:**
- Complex facade panelling on curved or irregular surfaces
- Structural node connections that must adapt to variable geometry
- Canopy or roof panel systems where each panel is a different shape
- Any repeating element that must conform to a divided surface

**When NOT to Use Adaptive Components:**
- Standard repeating elements that are the same shape every time (use standard families + Array or Revit\'s Repeater tool)
- Simple parametric families with fixed orientation (use standard loadable families)
- Elements placed on regular orthogonal grids (standard families are simpler and more performant)

**Performance Note:**
Adaptive components are computationally expensive. A facade with 500 adaptive component panels will regenerate slowly when the base surface changes. For very large panel counts (500+), consider whether a Curtain Wall system with custom panels (rf-18) might be more performant.`,
      },
      {
        title: 'Creating an Adaptive Component',
        content: `**Step 1 — Open the Adaptive Component Template:**
File → New → Family → Generic Model Adaptive.rft. This template opens in the Conceptual Mass environment (a different environment from the standard Family Editor — note the different ribbon layout and the 3D reference levels visible).

**Step 2 — Place Adaptive Points:**
Create tab → Draw panel → Point Element → click to place points in the 3D view. These will become the adaptive points.

After placing: select each point → Properties → "Is Adaptive Point" checkbox → check. Number each point: Properties → "Adaptive Point Order" = 1, 2, 3, 4 (for a four-point panel).

The order determines the sequence the user clicks when placing the component in a project. Numbering should follow a logical sequence — clockwise around the panel perimeter.

**Step 3 — Set Work Plane to Adaptive Points:**
To draw geometry that references the adaptive points, you need to use the points as reference geometry. Select two adaptive points → Create tab → Reference Line (draws a line between them). The reference lines form the skeleton of the adaptive component.

**Step 4 — Draw Geometry Referenced to Adaptive Points:**
Using the reference lines as edges: Create tab → Forms → select a form tool.

For a flat panel: select the 4 reference lines forming the panel perimeter → Create Form → a solid panel generates filling the quadrilateral defined by the lines.

For a curved panel: use a swept form along the reference lines.

**Step 5 — Add Parameters:**
Parameters in adaptive components work the same as in standard families but reference the adaptive geometry instead of fixed reference planes. Panel thickness, material, and data parameters are common additions.

**Step 6 — Load and Place:**
Load into a project or mass model. In the project: Adaptive Component tool → click the required number of points in sequence (1, 2, 3, 4 for a four-point panel) → the component places between them.`,
      },
      {
        title: 'Adaptive Components on Divided Surfaces',
        content: `The most powerful application of adaptive components is tiling a divided surface — applying a repeating panel to a complex curved massing surface automatically.

**The Divided Surface Workflow:**

**Step 1 — Create a Mass with a Surface:**
Build a conceptual mass in Revit\'s massing environment (or use the Building Maker tools). The mass has curved or complex surfaces that represent the building facade.

**Step 2 — Divide the Surface:**
Select the surface → Divide Surface tool. Set the U and V grid counts (the number of rows and columns of panels). Revit divides the surface into a grid of points.

**Step 3 — Apply the Adaptive Panel:**
Select the divided surface → Component panel → select the adaptive panel family. Revit tiles the adaptive panel across every cell of the divided surface automatically. Each panel instance adapts to the exact shape of its cell.

**Result:**
A complex curved facade with hundreds of individually adapted panels, each fitting its cell perfectly — generated from one adaptive component family placed once on the divided surface.

**Modifying the Panel Design:**
Edit the adaptive component family → change the geometry (panel profile, thickness, material) → reload into the project → all panel instances update simultaneously.

**UV Rotation:**
Each panel instance can be independently rotated within its cell using the Rotation Angle parameter on the component instance. This allows patterns (horizontal brise-soleil panels on a south facade, vertical on east/west) without building separate families.

**Node-Based Adaptive Components:**
For structural node families (where a connection plate must adapt to variable beam angles at each node): create an adaptive component with points at each connection location. The geometry (a central plate with bolt holes) adapts to the angle between the beams at each node. Place one at each structural node — the family adapts to the specific geometry at that location.`,
      },
      {
        title: 'Adaptive Component Limitations and Best Practices',
        content: `**Limitation 1 — Model Regeneration Speed:**
Adaptive components recalculate their geometry every time the host surface or the component parameters change. With many panels, this creates slow model regeneration. Best practice: develop the adaptive component and test on a small surface patch (4-9 panels) before applying to the full facade (400+ panels).

**Limitation 2 — Schedule Behaviour:**
Adaptive components are Generic Model category by default. They appear in Generic Model schedules — not in the more specific category schedules (Curtain Panels, Structural Framing, etc.). For adaptive structural nodes: accept Generic Model scheduling or change the category (note that changing category in Adaptive Component templates is limited).

**Limitation 3 — Connector Incompatibility:**
Standard MEP connectors (from rf-17) cannot be placed in adaptive component families. Adaptive components are geometry-only — they do not participate in MEP system routing. Do not use adaptive components for MEP families.

**Limitation 4 — Visibility Controls:**
The Coarse/Medium/Fine visibility controls from rf-11 apply but have limited effect on form-based geometry in the adaptive environment. Complex geometry cannot be easily simplified at Coarse — use sparingly on elements that appear at 1:100 scale.

**Best Practices:**

Keep adaptive panels as simple as possible. A flat panel with material and thickness parameters performs far better than a complex multi-component adaptive assembly. Add detail through texture and material rather than geometry complexity.

Test the component with extreme point configurations — highly distorted quadrilaterals, very acute angles. Some adaptive geometries fail when the panel shape becomes too distorted. Check the failure conditions early.

Document the point placement sequence clearly. When another team member places the component, they must click points in the correct order (1-2-3-4, not 1-3-2-4). A text annotation in the family description explaining the placement sequence prevents placement errors.

Use the "Repeater" tool instead of manual point placement for regular grids. Revit\'s Repeater (select an adaptive component on a divided surface → Repeat) tiles the component automatically across all cells without individual placement.`,
      },
    ],
    takeaways: [
      'Adaptive components have numbered Adaptive Points that users click in sequence — the geometry adapts to fill the shape defined by those points',
      'Built in Generic Model Adaptive.rft template using the Conceptual Mass environment — different from the standard Family Editor',
      'The primary use case is tiling divided surfaces — one adaptive panel family covers an entire complex curved facade, each instance adapting to its cell shape',
      'Adaptive components are geometry-only — they do not support MEP connectors and cannot participate in system routing',
      'Test on small surface patches (4-9 panels) before applying to full facades — large panel counts cause slow model regeneration',
    ],
    resource: {
      title: 'Autodesk Revit — Adaptive Components',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-adaptive-components',
    },
    prev: 'rf-18',
    next: 'rf-20',
  },

  // ─────────────────────────────────────────────────────────
  // rf-20: Profile Families
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-20',
    num: 20,
    title: 'Profile Families',
    topic: 'Geometry',
    cat: 'advanced',
    readTime: '13 min',
    free: false,
    desc: 'Build profile families for wall sweeps, stair nosings, railing profiles, gutter shapes, and custom wall layer profiles — the 2D cross-section families that define swept forms across the project.',
    intro: `Profile families are 2D cross-section shapes — nothing more. They have no 3D geometry. But they are used in dozens of places across a Revit project: the profile of a wall sweep running along a corridor wall, the nosing shape on each stair tread, the shape of a handrail, the gutter profile on a building edge, the custom bond pattern on a wall face. A well-built profile family library saves significant time and ensures consistent detailing across the entire project.

This lesson covers all the contexts where profile families are used, how to build them correctly, and the specific profile subtypes that Revit expects for different system uses.`,
    sections: [
      {
        title: 'Profile Family Fundamentals',
        content: `**The Profile Template:**
File → New → Family → Profile.rft (or a category-specific profile: Stair Nosing.rft, Railing.rft, etc.).

The template opens a single 2D view. The two reference planes define the origin — the point where the profile aligns to its host path. In the single view, draw the cross-section shape using Detail Lines.

**What a Profile Family Contains:**
- Detail Lines only — no solid or void forms, no 3D geometry
- A closed loop (or open loop for some profile types) defining the cross-section
- Reference planes for the origin and any parametric dimensions
- Parameters for the profile dimensions (width, height, leg thickness etc.)

**The Origin Point:**
The origin (reference plane intersection) is where the profile attaches to the host path. For a wall sweep profile: the origin is at the wall face contact point — the profile extends away from the origin into the room or away from the wall. For a stair nosing: the origin is at the front edge of the stair tread — the nosing extends forward from this point. Position the origin deliberately — incorrect origin placement means the profile aligns to the wrong point on the host.

**Parametric Profile Families:**
Add reference planes inside the profile shape, label dimensions between them as parameters. A gutter profile with Width and Depth parameters allows different gutter sizes from one family by creating multiple types.

**Where Profile Families Are Used:**
- Wall Sweeps (Architecture tab → Wall → Wall Sweep)
- Reveals (Architecture tab → Wall → Reveal)
- Railing components (Top Rail profile, Handrail profile)
- Stair Nosing
- Beam sweeps (in certain structural configurations)
- Curtain Wall Mullions (rf-18 — a specific mullion profile subtype)
- Generic Sweep in any family (the sweep profile in a loadable family)`,
      },
      {
        title: 'Wall Sweep Profiles',
        content: `Wall sweeps run horizontally along a wall face — skirting boards, dado rails, cornice mouldings, picture rails, exterior water table profiles, reveal strips. The profile family defines the cross-section shape that Revit sweeps along the wall.

**Building a Skirting Board Profile:**
1. Open Profile.rft
2. Set origin at the wall face and floor junction (bottom-left of the profile)
3. Draw the skirting cross-section — a rectangle with a chamfered or rounded top edge, using Detail Lines
4. Dimensions: Height = 100mm, Thickness = 18mm
5. Add reference planes for Height and Thickness, label as parameters
6. Save as "Skirting-Board-Chamfer.rfa"

**Applying to a Wall:**
Architecture tab → Wall → Wall Sweep → select the wall sweep type (or create a new type) → set the Profile to your loaded family → place on the wall. The skirting runs along the base of the wall following all corners automatically.

**Multiple Profiles for Different Wall Types:**
A project might use: 100mm timber skirting in offices, 150mm skirting in corridors, 50mm stainless steel skirting in kitchens. Build three profile families (or one family with three types) and assign the correct profile to each wall sweep type.

**Mitre Behaviour:**
At internal and external corners, Revit automatically mitres the wall sweep profiles. The mitre cut depends on the profile shape — complex profiles may require a custom mitre join geometry. For most standard skirting, dado, and cornice profiles, Revit\'s automatic mitre is sufficient.

**Reveal Profiles:**
Reveals are recessed grooves cut into a wall face — horizontal shadow lines on a facade, reglet profiles at floor junctions, reveal strips between different wall materials. The reveal profile is a void cross-section shape that Revit cuts into the wall face. Build the profile as a closed loop representing the groove cross-section (typically a rectangular notch). Apply as a Wall Reveal rather than Wall Sweep.`,
      },
      {
        title: 'Railing and Stair Profiles',
        content: `**Railing Top Rail Profile:**
The top rail of a railing system is swept along the path at the top of the railing posts. The profile family defines the handrail cross-section — circular, oval, rectangular with rounded edges, or a bespoke ergonomic shape.

Template: Profile → Railing.rft (or the general Profile.rft with the Railing Rail profile subtype).

Origin positioning: centred on the rail cross-section — the centre of the circular or oval shape. Revit sweeps the profile centred on the rail path.

Common top rail profiles:
- 50mm diameter circular (common for steel and aluminium rails)
- 50x32mm oval
- 55x43mm ergonomic grip profile
- 80x40mm flat cap profile for glass railings

**Railing Baluster Profile:**
The baluster cross-section (the vertical infill members between top and bottom rails). Profile template: Baluster — use in the railing system\'s baluster type definition.

For square tube balusters: 40x40mm square profile with a wall thickness parameter (e.g., 2mm wall → hollow square tube).

**Stair Nosing Profile:**
Applied to the front edge of each stair tread. The nosing profile defines the tread edge detail — a chamfer, a rounded edge, a slip-resistant insert profile, or a complex nosing with an integrated LED strip.

Template: Stair Nosing.rft.

Origin: at the front top corner of the tread — the nosing extends forward and downward from this point.

A standard stair nosing profile:
- 25mm horizontal projection forward of the tread face
- 10mm downward projection below the tread underside
- Chamfered front edge: 5mm x 5mm
- Width: spans the full tread width (driven by the stair parameter, not the profile)

**Applying Stair Nosing:**
In the stair type properties: Stair → Edit Type → Nosings → set Nosing Profile to your loaded family → set Nosing Length (the horizontal projection).`,
      },
      {
        title: 'Profile Subtypes and Common Mistakes',
        content: `Not all profile families work in all profile contexts. Revit uses profile subtypes to filter which profile families are available in each context.

**Profile Subtypes:**
In the Family Category and Parameters dialog of a profile family: Profile Usage dropdown. Options include:
- All (generic — works in most contexts)
- Railing Rail (for handrails and top rails)
- Railing Baluster (for baluster profiles)
- Stair Nosing (for stair nosing applications)
- Wall Sweep (for wall sweeps and reveals)
- Structural (for structural beam and brace sweeps)
- Curtain Wall Mullion (for mullion profiles — rf-18)

Setting the correct subtype ensures the profile appears in the right dropdown when configuring a railing, stair, or wall sweep type. A "Railing Rail" profile will not appear in the Wall Sweep profile dropdown.

**Common Mistake 1 — Open vs. Closed Loop:**
Most profile families require a closed loop (the line work forms a complete enclosed shape). Stair nosings and some reveal profiles use open loops (just the visible edge profile, not a full enclosed shape). Check the specific context requirement before drawing.

**Common Mistake 2 — Incorrect Origin Positioning:**
A skirting board profile with the origin at the centre of the shape (instead of the bottom-left wall-face contact point) will float away from the wall when applied. Always verify origin placement by applying the profile to a test wall sweep before finalising.

**Common Mistake 3 — Units in Profile Families:**
Profile families use the same units as the project (millimeters). But when building for projects using imperial units, profile dimensions must be in feet and inches. Build separate metric and imperial profile families if the office works with both unit systems.

**Common Mistake 4 — Profile Family Used in Sweep vs. Loadable Family Sweep:**
Profile families used in a loadable family\'s Sweep form (rf-6) work the same way as project-level profiles. Load the profile family into the host family (Insert → Load Family) then use it as the sweep profile. The profile is embedded within the host family — it does not need to be separately loaded into the project.`,
      },
    ],
    takeaways: [
      'Profile families are 2D cross-section shapes only — Detail Lines defining a closed (or open) loop, no 3D geometry',
      'The origin point (reference plane intersection) is the attachment point to the host path — position it deliberately at the correct contact point (wall face, tread edge, rail centre)',
      'Profile Usage subtype (in Family Category and Parameters) filters which profile families appear in each context — Railing Rail, Stair Nosing, Wall Sweep, Curtain Wall Mullion',
      'Parametric profile families with Width and Depth parameters allow multiple size types from one family — essential for a reusable office profile library',
      'Profile families used in loadable family sweeps (rf-6) are loaded into the host family directly — they do not need separate project loading',
    ],
    resource: {
      title: 'Autodesk Revit — Profile Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-profile-families',
    },
    prev: 'rf-19',
    next: 'rf-21',
  },

  // ─────────────────────────────────────────────────────────
  // rf-21: In-Place Families — When & How
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-21',
    num: 21,
    title: 'In-Place Families — When & How',
    topic: 'Strategy',
    cat: 'advanced',
    readTime: '12 min',
    free: false,
    desc: 'Understand when in-place families are the right tool, how to build them correctly, their critical limitations, and how to decide when a complex element should instead become a loadable family.',
    intro: `In-place families are simultaneously the easiest and most dangerous family tool in Revit. They are easy because you build them directly in the project without switching to the Family Editor, using all the same solid and void form tools. They are dangerous because they are commonly overused — practitioners who have not learned the loadable family workflow reach for in-place families as a shortcut, and the result is a project full of non-reusable, non-schedulable, non-taggable geometry that the next team member cannot modify, copy, or manage.

This lesson establishes the clear decision framework for when in-place families are the right choice, and when they are not.`,
    sections: [
      {
        title: 'What In-Place Families Are',
        content: `An in-place family is a loadable family created directly within the project environment, stored inside the project file, and specific to that project. It uses the same five solid and void form tools as a standard loadable family but is created without leaving the project.

**Creating an In-Place Family:**
Architecture tab (or Structure, Systems) → Component → Model In-Place → select a category → name the family → the In-Place Family Editor opens within the project. Build geometry using the same Create tab tools. Click Finish Model when complete.

**What In-Place Families Can and Cannot Do:**

Can:
- Use all five solid and void form tools (Extrusion, Blend, Revolve, Sweep, Swept Blend)
- Reference project geometry (walls, floors, reference planes) as work planes
- Cut through host elements (walls, floors, ceilings)
- Use parameters — both type and instance
- Be assigned to any category

Cannot:
- Be saved as an .rfa file and reused in another project
- Be placed more than once (each instance must be built separately)
- Be tagged (no access to tag families, which require shared parameters)
- Appear in certain schedule types correctly
- Be shared across the office library
- Be loaded into other projects

**The Identification:**
In the Project Browser: in-place families appear under Families → [Category] but with a different icon. Their name appears exactly as entered when created. In Properties, the Family field shows the in-place family name and the type shows the type name (default: the same as the family name).`,
      },
      {
        title: 'When In-Place Families Are the Right Choice',
        content: `Despite their limitations, in-place families have specific use cases where they are the correct tool. The key criterion: the element is genuinely unique to this one location in this one project and will never be reused.

**Valid Use Case 1 — Site-Specific Topography or Landscape Elements:**
A bespoke sculpted landscape mound, a site-specific water feature, a custom ground feature modelled to match survey data. These are unique to one site and will never be placed elsewhere. In-place modelling is faster than building a parametric family for a non-parametric one-off.

**Valid Use Case 2 — Existing Building Survey Elements:**
When capturing an existing building with complex non-standard geometry (an ornate cornice, an irregular historical window surround, an asymmetric structural element), in-place modelling captures the geometry quickly without requiring a parametric family structure that serves no purpose for a non-repeating existing element.

**Valid Use Case 3 — Design Development Massing:**
During early design stages, in-place Conceptual Mass elements represent building massing for area calculations and solar analysis before the design is defined enough to build structured families. Once the design is fixed, the in-place mass is typically replaced with architectural elements.

**Valid Use Case 4 — Complex Void Cuts Specific to One Location:**
A void that cuts through two walls and a floor at a specific location (for a staircase opening or a unique structural penetration) where the cut geometry is too complex or too location-specific for a hosted family. The void is part of the project geometry, not a reusable element.

**The Test Question:**
Before creating an in-place family, ask: "Will this element or anything like it ever need to appear anywhere else in this project or any future project?" If the answer is yes — even "possibly" — build a loadable family instead. The extra 30-60 minutes building a proper loadable family pays dividends immediately if the element appears more than once.`,
      },
      {
        title: 'In-Place Family Best Practices',
        content: `When an in-place family is the correct choice, build it to professional standards. An in-place family built carelessly is a maintenance problem for every team member who follows.

**Name It Clearly:**
When creating the in-place family, give it a clear descriptive name: "Existing Cornice - North Facade" or "Bespoke Reception Soffit - Level 02." A name like "Generic Model 1" tells the next person nothing about what the element is or why it exists.

**Assign the Correct Category:**
The category selection when creating an in-place family is as important as template selection for loadable families. Assign to the most specific applicable category — "Furniture" for a bespoke built-in bookcase, "Structural Framing" for a custom steel element, "Walls" for an in-place wall feature that should be room-bounding.

**Use Reference Planes:**
Even for one-off elements, use reference planes to constrain geometry. If the reception desk soffit needs to follow the wall face, lock the soffit face to the wall reference plane rather than modelling it to a fixed coordinate. This keeps the in-place geometry correctly positioned if the wall moves during design development.

**Document It:**
In the Properties → Identity Data → Comments field, add a note: "In-place family. One-off bespoke element — cannot be reused. Contact BIM Manager before deleting." This prevents team members from accidentally removing important project-specific geometry.

**The Conversion Decision:**
If a project accumulates many instances of the same in-place family type — five bespoke bookcase units modelled five times — this signals that a loadable family should have been built. At this point, convert by: building the loadable family, loading it into the project, placing instances, and deleting the in-place elements. This conversion is work that could have been avoided with the correct initial decision.`,
      },
      {
        title: 'Converting from In-Place to Loadable',
        content: `Revit does not provide an automatic tool to convert in-place families to loadable families. The conversion is a manual process that requires rebuilding the family in the Family Editor.

**The Conversion Process:**

Step 1 — Open the in-place family for editing:
Select the in-place family instance → Edit In-Place. The family editor context opens within the project.

Step 2 — Note the geometry and parameters:
Before starting the conversion, document: all solid and void forms used, all parameter names and values, all reference plane positions. Screenshot or write this down.

Step 3 — Open the correct loadable family template:
File → New → Family → select the appropriate template. Do this in a separate Revit session alongside the project so you can reference both.

Step 4 — Rebuild the geometry in the Family Editor:
Recreate the reference planes, parameters, and geometry in the Family Editor following the standard workflow from rf-4 through rf-8. Use the in-place family as a visual reference.

Step 5 — Load the new family and replace:
Load the new loadable family into the project. Place instances where the in-place families were. Delete the original in-place families.

**The Shortcut — Copy Geometry:**
Some geometry can be copied from the in-place context to the Family Editor:
1. While in Edit In-Place mode, select all geometry (Ctrl+A)
2. Copy (Ctrl+C)
3. In the Family Editor, paste aligned (Edit → Paste Aligned → Current View)

This copies the geometry but not the reference planes, constraints, or parameters — those must be rebuilt. For complex geometry, this shortcut saves significant time on the geometry creation step even if the parametric structure must be rebuilt.

**When Conversion Is Not Worth It:**
For a truly unique one-off element that genuinely will never recur, the conversion effort is not justified. Accept the in-place family, document it clearly, and move on. The conversion decision is a cost-benefit analysis — the cost of conversion versus the benefit of reusability.`,
      },
    ],
    takeaways: [
      'In-place families are for genuinely unique, non-repeating elements specific to one location in one project — survey geometry, bespoke site features, complex one-off voids',
      'In-place families cannot be tagged, saved as .rfa, or reused — if the element will ever appear again anywhere, build a loadable family',
      'Always assign the correct category and give a clear descriptive name — "Existing Cornice - North Facade" not "Generic Model 1"',
      'Document in the Comments field: "In-place family. One-off element — cannot be reused. Contact BIM Manager before deleting."',
      'Conversion from in-place to loadable is a manual rebuild — justify the effort only when the element recurs or needs to be shared across projects',
    ],
    resource: {
      title: 'Autodesk Revit — In-Place Families',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-in-place-families',
    },
    prev: 'rf-20',
    next: 'rf-22',
  },

  // ─────────────────────────────────────────────────────────
  // rf-22: Family Quality Standards
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-22',
    num: 22,
    title: 'Family Quality Standards',
    topic: 'Standards',
    cat: 'advanced',
    readTime: '13 min',
    free: false,
    desc: 'Apply professional quality standards to every family — file size limits, polygon count targets, LOD behaviour, parameter hygiene, and the complete advanced QA checklist that separates office-library-grade families from acceptable-but-mediocre ones.',
    intro: `A family that works is not the same as a family that meets quality standards. A door family might place correctly, cut the wall correctly, and show the right dimensions in a schedule — but if it has 2MB of unnecessary texture data, 15 unused parameters, geometry visible at the wrong detail levels, and no version record, it is not a quality family. It will cause performance problems, confuse team members, and require rework.

Quality standards are not perfectionism — they are professional discipline. They are the difference between a family library that makes every project faster and a folder of .rfa files that create as many problems as they solve.`,
    sections: [
      {
        title: 'File Size and Geometry Standards',
        content: `**File Size Targets:**

Simple families (furniture, fittings, fixtures with basic geometry):
Target: under 300KB. Alert threshold: over 1MB. Action required: over 2MB.

Intermediate families (doors, windows, equipment with moderate complexity):
Target: under 800KB. Alert threshold: over 3MB. Action required: over 5MB.

Complex families (curtain wall panels, adaptive components, detailed structural):
Target: under 2MB. Alert threshold: over 8MB. Action required: over 15MB.

**What Inflates File Size:**

Embedded textures: the most common cause of oversized families. A material with a custom texture image embedded in the family adds the full image file size to the .rfa. Fix: reference materials from the project library, do not embed custom bitmaps in the family.

Excessive polygon count: complex solid forms (Swept Blends, dense Revolves, high-resolution extrusion profiles) generate high polygon counts. Check polygon count via Revit\'s diagnostic tools or by loading the family into a test project and checking the Graphics Hardware indicator.

Imported CAD geometry: DWG files imported into families bring all their original data including unused layers, blocks, and hidden objects. Never import CAD into a production family. If CAD reference is needed during construction, delete all imported CAD before publishing.

Unused content: families that have been through multiple revisions accumulate unused reference planes, dimensions, parameters, and even geometry hidden by unchecked visibility. Run Purge Unused regularly and review for hidden geometry.

**Polygon Count Targets:**

Simple furniture (chair, table): under 2,000 polygons at Fine detail level.
Complex furniture (detailed sofa): under 8,000 polygons at Fine.
Equipment: under 5,000 polygons at Fine.
Lighting fixtures: under 3,000 polygons at Fine.
At Coarse: under 500 polygons for any family (use simplified geometry or Symbolic Lines).`,
      },
      {
        title: 'Parameter Hygiene',
        content: `**The Parameter Audit:**
Before publishing any family, audit every parameter in the Family Types dialog. For each parameter, ask:
1. Is this parameter driving anything (geometry, visibility, formula)?
2. Is this parameter correctly named per the office convention?
3. Is Instance vs. Type correctly assigned?
4. Is the parameter in the correct group (Dimensions, Identity Data, Graphics)?
5. Is there a formula where a formula should not be? (Over-constraining parameters reduces flexibility)

**Removing Unused Parameters:**
A parameter that drives nothing is dead weight. It clutters the Properties panel for users, adds confusion for the next family creator, and occupies database space. Delete unused parameters unless there is a documented reason to retain them (e.g., a placeholder parameter for a feature to be added in the next version — document this in the Comments field).

**Naming Standards:**
Parameter names should be clear, specific, and consistent with the office standard:
- Clear: "Frame Width" not "FW" or "Width2"
- Specific: "Sill Height" not "Height2" (when there are multiple height parameters)
- Consistent: "Fire Rating" (not "FireRating" or "fire_rating" or "Fire rating") — apply one capitalisation convention across all families

**Parameter Count Guidelines:**
Aim for the minimum number of parameters that achieves the required flexibility:
- Simple furniture: 3-8 parameters (Width, Depth, Height, Material, Visibility flags)
- Complex door/window: 10-20 parameters
- MEP equipment: 15-30 parameters (include engineering data)
- Over 50 parameters in a family is a warning sign — investigate whether the family is too complex or has accumulated unused parameters

**Formula Review:**
Every formula should be auditable — it should be clear what it calculates and why. A formula like "p7 = p3 * 0.085 + p12 / 2" is unacceptable. A formula like "Frame Width = Door Width * 0.085 + (Panel Thickness / 2)" is readable and maintainable.`,
      },
      {
        title: 'LOD Behaviour Standards',
        content: `Level of Detail (LOD) behaviour in families aligns with the BIM Forum LOD Specification or the project\'s agreed LOD schedule (covered in the ISO 19650 course). For family creators, this means knowing what geometry to show at each Revit detail level for each LOD.

**Revit Detail Level to LOD Mapping (general guidance):**

Coarse detail level (1:100-1:500 views) → LOD 100-200 representation:
Show only the element\'s approximate footprint or bounding box. No internal detail. Plan: simple rectangle or outline. Elevation: basic silhouette. 3D: bounding box solid.

Medium detail level (1:50-1:100 views) → LOD 300 representation:
Show the element\'s overall form including major components. Plan: accurate overall shape. Elevation: major surfaces and openings. 3D: recognisable form without fine detail.

Fine detail level (1:20 and below, detail drawings) → LOD 400-500 representation:
Show full construction detail. Exact dimensions, edge profiles, hardware, component details. 3D: production-ready geometry.

**Verifying LOD Behaviour:**
During QA testing: open a test project → place the family → create three copies.
View 1: set to Coarse detail level — check the representation is appropriately simple.
View 2: set to Medium — check the main form is clear.
View 3: set to Fine — check full detail is visible and correct.

Any geometry visible at Coarse that should not be there is a quality failure. Complex geometry at Coarse is the most common family quality problem in real projects.

**The Symbolic Representation at Coarse:**
For plan views at Coarse, the standard is a Symbolic Line plan symbol (rf-11) rather than 3D geometry sliced at the view cut height. Verify that the Symbolic Lines are correct for the element type — they should match the drawing convention for that category in the office standard.`,
      },
      {
        title: 'The Advanced Family QA Checklist',
        content: `This checklist covers all quality dimensions of a production-ready family. Every item should pass before the family is added to the office library.

**File and Metadata:**
- File size within target range for the family complexity
- File named per office naming convention
- Description field populated with a clear element description
- Version and date recorded in Comments field
- Purge Unused run (twice) — verified clean

**Geometry:**
- All geometry locked to reference planes — zero free-floating elements
- Zero imported CAD geometry
- Zero embedded texture bitmaps
- Polygon count within target at all detail levels
- Coarse: only footprint/Symbolic Lines visible
- Medium: main form visible, no internal detail
- Fine: full detail visible and correct
- All detail level checkboxes correctly set on every geometry element
- Void forms correctly applied (Cut Geometry confirmed)
- Hosted voids correctly cut host elements in test project

**Parameters:**
- Zero unused parameters
- All parameter names follow naming convention
- All formulas are readable and documented
- Instance vs. Type correctly assigned on every parameter
- Parameter groups correctly assigned (Dimensions, Identity Data, etc.)
- Shared parameters used for all schedulable and taggable data
- Type table complete with all required types
- All types tested — no constraint errors

**Visual and Material:**
- Subcategories assigned to all major geometry components
- Material parameters assigned where user control is required
- By Category used only where appropriate
- No hard-coded materials that prevent project-level override

**Placement and Behaviour:**
- Origin at correct insertion point
- Correct orientation on first placement (no unexpected rotation)
- Hosted families: void cuts host correctly
- Flip controls working correctly (hosted families)
- Family places correctly in all expected host contexts

**Data and Scheduling:**
- Family appears in correct schedule category
- All shared parameters appear in schedule columns
- Tags apply correctly and show correct values
- IFC parameters mapped if IFC delivery is required
- COBie parameters present if FM handover is required

**Performance:**
- View regeneration not noticeably slowed when family is visible
- Large quantities of the family (10-50 instances) do not cause performance degradation
- No warnings generated when family is loaded into a clean test project`,
      },
    ],
    takeaways: [
      'File size targets: under 300KB for simple families, under 800KB for intermediate, under 2MB for complex — embedded textures and imported CAD are the most common causes of oversize',
      'Parameter audit before publishing: remove all unused parameters, verify naming, check Instance vs. Type, confirm all formulas are readable',
      'LOD behaviour: Coarse = footprint/Symbolic Lines only, Medium = main form, Fine = full detail — verify all three in a test project before publishing',
      'The advanced QA checklist covers 6 dimensions: file/metadata, geometry, parameters, visual/material, placement/behaviour, data/scheduling',
      'A family that passes all 6 checklist dimensions is office-library-grade — it makes every project that uses it faster, not slower',
    ],
    resource: {
      title: 'BIM Forum — Level of Development Specification',
      url: 'https://bimforum.org/lod',
    },
    prev: 'rf-21',
    next: 'rf-23',
  },

  // ─────────────────────────────────────────────────────────
  // rf-23: Building a Family Library
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-23',
    num: 23,
    title: 'Building a Family Library',
    topic: 'Management',
    cat: 'advanced',
    readTime: '13 min',
    free: false,
    desc: 'Design and build a professional family library — naming conventions, folder architecture, version control, distribution, maintenance workflows, and the governance rules that keep the library useful as it grows.',
    intro: `A folder of .rfa files is not a family library. A family library is a structured, versioned, maintained collection of quality-controlled families with clear naming, organised storage, documented contents, and a governance process that keeps it accurate and current. The difference between the two determines whether the office\'s family collection is an asset that makes every project faster or an accumulation of files that wastes more time than it saves.

This lesson builds the complete family library system — the architecture, the naming convention, the version control, and the governance that keeps it working over years of use.`,
    sections: [
      {
        title: 'Family Naming Convention',
        content: `The naming convention is the most important design decision in a family library. It determines how families are found, what information is immediately visible from the filename, and whether the library remains navigable as it grows.

**The Recommended Naming Structure:**
[Category Code]-[Description]-[Subtype]-[Variant].rfa

**Category Codes:**
Use consistent 2-4 letter codes for each Revit category:
- DR = Doors
- WN = Windows
- FN = Furniture
- ME = Mechanical Equipment
- LF = Lighting Fixtures
- LD = Lighting Devices
- PF = Plumbing Fixtures
- EE = Electrical Equipment
- ED = Electrical Devices
- SC = Structural Columns
- SF = Structural Framing
- GM = Generic Model
- AN = Annotation
- PR = Profile
- TL = Titleblock

**Description:**
Clear, searchable, specific. Use plain English not abbreviations.
Good: "Single-Flush-Door"
Bad: "SFD" or "Door1"

**Subtype:**
The specific variant within the description category.
"Single-Flush-Door-Standard" vs. "Single-Flush-Door-Acoustic"
"Downlight-Recessed-Round" vs. "Downlight-Recessed-Square"

**Complete Examples:**
DR-Single-Flush-Door-Standard.rfa
DR-Single-Flush-Door-Acoustic.rfa
DR-Double-Flush-Door-Standard.rfa
WN-Casement-Window-Single.rfa
LF-Downlight-Recessed-Round.rfa
LF-Downlight-Recessed-Square.rfa
ME-AHU-Horizontal.rfa
PF-WC-Back-To-Wall.rfa
SC-Concrete-Rectangular.rfa
PR-Skirting-Chamfer.rfa

**Version in Filename:**
Do NOT include version numbers in the primary filename. "DR-Single-Flush-Door-Standard_v1.2.rfa" creates confusion when projects load families by name — if the filename changes with each version, project links break. Keep the version in the family\'s Comments field (rf-22) and in the archive folder naming.`,
      },
      {
        title: 'Folder Architecture',
        content: `The folder structure organises families for browsing and for Revit\'s library paths. It must balance being intuitive (for the team member looking for a specific family) with being aligned to Revit\'s category system (for the technical integration).

**Recommended Top-Level Structure:**

[Office] Family Library/
  00_Architecture/
    Doors/
    Windows/
    Furniture/
    Casework/
    Specialty Equipment/
    Generic Models/
  01_Structure/
    Structural Columns/
    Structural Framing/
    Structural Foundations/
  02_MEP/
    Mechanical Equipment/
    Plumbing Fixtures/
    Lighting Fixtures/
    Lighting Devices/
    Electrical Equipment/
    Electrical Devices/
  03_Annotation/
    Tags/
    Symbols/
    Titleblocks/
  04_Profiles/
    Wall Sweeps/
    Railings/
    Stair Nosings/
    Mullions/
  05_Adaptive/
  _Archive/
    [Year]/
      [Previous Versions]/

**Revit Library Path Configuration:**
Revit → File → Options → File Locations → Places tab → add the library root folder. This makes the folder hierarchy accessible directly from the Load Family browser in any Revit session.

**The Archive Folder:**
When a family is updated, the previous version moves to _Archive/[Year]/. Never delete old versions — projects using the old version may need to reference the original file for troubleshooting. Archive folders use the year as a subfolder so they remain navigable: _Archive/2024/, _Archive/2025/.

**Project-Specific Families:**
Families built for a specific project that may have wider application go into the library after project close-out review (rf-24). During the project, they live in the project\'s own Revit folder structure under BIM/Families/ — not in the office library until they have been reviewed, generalised, and quality-checked.`,
      },
      {
        title: 'Version Control and Maintenance',
        content: `A family library without version control drifts into chaos. Multiple versions of the same family with different names, old families that have been superseded but not removed, and families that work for some projects but not others — all are symptoms of uncontrolled library growth.

**Version Record in the Family:**
Every family in the library has its version history in the Comments field (rf-22):
"v1.0 — 2024-03-15 — Initial release. DH.
v1.1 — 2024-08-20 — Added Fire Rating shared parameter. LM.
v2.0 — 2025-01-10 — Rebuilt from new template. Added COBie parameters. DH."

The version record shows what changed, when, and who made the change. This is the minimum version documentation — for critical families (structural families, MEP families affecting engineering calculations), maintain a separate changelog document.

**The Update Workflow:**
1. Open the current library version of the family
2. Make changes (test on a branch copy first for significant changes)
3. Update the Comments field with the new version entry
4. Save over the existing filename (no version number in filename)
5. Copy the previous version to _Archive/[Year]/ before saving the update
6. Notify the team via the firm\'s communication channel (email, Teams, Slack) of the update

**What Triggers a Major vs. Minor Version:**
Minor update (v1.0 → v1.1): parameter additions, geometry refinements, material updates, visibility control improvements. Projects using the family can reload without any data loss or behavioural change.

Major update (v1.0 → v2.0): parameter deletions, category changes, fundamental geometry rebuilds, changes that alter how the family behaves in projects. Projects using the old version may have broken parameters or incorrect display after reloading. Coordinate with all active projects before releasing a major update.

**Annual Library Review:**
Schedule one library review per year (typically at the start of the year or after a major Revit version upgrade). Review criteria: Is this family still in use? Does it meet current quality standards? Does it need to be updated for the current Revit version? Has it been superseded by a better family? Archive outdated families rather than deleting them.`,
      },
      {
        title: 'Library Governance',
        content: `A family library is only as good as the governance that controls what goes into it and who maintains it.

**The BIM Manager\'s Role:**
The BIM Manager (or designated Family Manager) is the sole person with write access to the office library. All team members have read access. This prevents: duplicate families being added by different people, inconsistent quality levels entering the library, and naming convention violations.

**The Family Submission Process:**
When a team member builds a new family that should enter the library:
1. Complete the Advanced QA Checklist (rf-22) — all items pass
2. Submit to BIM Manager with a brief note: what the family is, why it was built, which project it was built for
3. BIM Manager reviews: does it duplicate an existing library family? Does it meet quality standards? Does it follow the naming convention?
4. If approved: BIM Manager adds to the library, updates the library register
5. If not approved: feedback given, family reworked, resubmitted

**The Library Register:**
Maintain a simple spreadsheet register of all library families:
| Filename | Category | Description | Version | Date | Built By | Reviewed By | Notes |

This register enables: searching for families without opening Revit, identifying who built each family for questions, tracking which families need updating, and auditing the library size and scope.

**Dealing with Downloaded Manufacturer Families:**
Manufacturer families are frequently poor quality (rf-1). Adopt a clear policy: all downloaded manufacturer families must be reviewed against the quality standards and either accepted as-is, modified to meet standards, or rejected and rebuilt. Never add unreviewed manufacturer families to the office library — add them to the project only after review, and add to the library only after they meet all QA standards.

**When the Library Gets Too Large:**
A library with 2,000 families becomes as hard to navigate as no library. Prune regularly: families that have not been used in 3+ years go to the archive (with a note in the register). Consolidated families (one family replacing three similar ones) reduce the count and improve consistency.`,
      },
    ],
    takeaways: [
      'Naming convention: [CategoryCode]-[Description]-[Subtype].rfa — no version numbers in the filename, version goes in the Comments field',
      'Folder architecture: top-level by discipline (Architecture, Structure, MEP, Annotation, Profiles), then by Revit category, with _Archive/ for previous versions',
      'Version record in Comments field: "v1.1 — 2025-01-10 — Added Fire Rating parameter. DH." — mandatory for all library families',
      'The BIM Manager controls write access to the library; all team members have read access — this prevents quality drift and naming violations',
      'Downloaded manufacturer families must pass the QA checklist before entering the library — never add unreviewed downloaded families',
    ],
    resource: {
      title: 'NBS — BIM Object Standards',
      url: 'https://www.thenbs.com/knowledge/bim-objects-standard',
    },
    prev: 'rf-22',
    next: 'rf-24',
  },

  // ─────────────────────────────────────────────────────────
  // rf-24: Family Creation Capstone
  // ─────────────────────────────────────────────────────────
  {
    id: 'rf-24',
    num: 24,
    title: 'Family Creation Capstone',
    topic: 'Capstone',
    cat: 'advanced',
    readTime: '15 min',
    free: false,
    desc: 'Complete the full family creation workflow from brief to production-ready library family — applying every principle from the course in one end-to-end build of a professional door family with nested hardware, shared parameters, type catalogue, and complete QA documentation.',
    intro: `This capstone lesson walks through the complete family creation workflow from inception to library publication, using a professional single-flush door family as the vehicle. Every technique from the course appears in this build: template selection, reference plane planning, parameter design, solid and void geometry, visibility controls, nested hardware, shared parameters, type catalogue, and the full QA process.

By following this end-to-end build, you consolidate every lesson into a single coherent workflow. The door family is the example — but the workflow, the decisions, and the professional standards apply to every family you will build throughout your career.`,
    sections: [
      {
        title: 'The Brief and Planning Phase',
        content: `**The Brief:**
Build a professional single-flush door family for office use with the following requirements:
- Standard door sizes from 700mm to 1200mm wide, 2100mm and 2400mm high (14 types total)
- Optional vision panel (Yes/No instance parameter)
- Fire rating shared parameter (for fire door scheduling and tagging)
- Hardware set parameter (Text, for door hardware scheduling)
- Correct plan representation at Coarse and Medium detail levels
- Nested door handle family (simple push-pull bar for this build)
- Type catalogue for size selection
- Full QA compliance

**Template Decision:**
Category: Doors. Template: Metric Door.rft (wall-hosted, with pre-built door-specific reference planes, flip controls, and void for the wall opening). The door is always wall-hosted — no other hosting type makes sense.

**Reference Plane Planning (before opening the Family Editor):**
Variable dimensions:
- Door opening width (driven by Width parameter)
- Door opening height (driven by Height parameter)
- Frame width on face (driven by Frame Width parameter)
- Vision panel width and height (driven by formulas from Width and Height)

Fixed relationships:
- Frame is symmetric — equal frame width both sides (EQ constraint)
- Door leaf fills the opening minus frame width both sides
- Vision panel is centred horizontally in the door leaf

Pre-built planes in template (do not modify):
- Wall Face — centre plane, the wall face reference
- Width extents — left and right edges of the opening

Additional planes to add:
- Frame inner face (left and right) — driven by Width - Frame Width * 2
- Vision panel left, right, top, bottom edges

**Parameter Design:**
Type parameters: Width (Length), Height (Length), Frame Width (Length), Vision Panel Width (Length — formula: Width - Frame Width * 2 - 50mm), Vision Panel Height (Length — formula: if(Height > 2100mm, 600mm, 400mm))
Instance parameters: Show Vision Panel (Yes/No), Fire Rating (Text — shared parameter), Hardware Set (Text — shared parameter), Mark (built-in)`,
      },
      {
        title: 'Building the Geometry',
        content: `**Step 1 — Reference Planes (in the Ref. Level plan view):**
The template already has Width extents and Wall Face reference planes. Add:
- Frame Inner Left: parallel to the left Width extent, offset inward by Frame Width
- Frame Inner Right: same on the right
- Label the dimension between Frame Inner Left and Frame Inner Right as "Clear Opening Width" (a reporting parameter — read-only)

Add EQ constraint: select Frame Inner Left, centre plane, Frame Inner Right → EQ. The opening stays centred.

In the Front elevation view: add Height reference plane at the correct level. Label the dimension from Ref. Level to Height plane as "Height" parameter.

**Step 2 — Door Leaf (solid extrusion):**
In the Front elevation: draw the door leaf extrusion profile — rectangle from Ref. Level to Height, from Frame Inner Left to Frame Inner Right minus the frame stop rebate (5mm). Extrusion Start = 0 (flush with wall face), Extrusion End = Door Thickness (40mm type parameter).
Lock all four edges to reference planes. Lock extrusion start and end to reference planes in plan view.

**Step 3 — Door Frame (solid extrusion):**
The frame is the surround. In plan: draw the frame profile — a narrow rectangle the width of Frame Width around the opening perimeter. Extrusion Start = -10mm (extends beyond wall face), Extrusion End = Wall Thickness + 10mm (extends beyond both wall faces — the frame covers both sides).
Lock to Wall Face and Frame Width reference planes.

**Step 4 — Wall Opening Void (void extrusion):**
In the Ref. Level plan: draw a void extrusion exactly matching the door opening width. In elevation: the void runs from Ref. Level to Height. Extrusion depth: 600mm (oversized to cut any wall thickness).
Apply Cut: select the void → Modify → Cut → click each wall layer if visible, or cut the void against the host element. Check "Cut with Voids When Loaded" in Family Category and Parameters.

**Step 5 — Vision Panel (solid extrusion with Yes/No visibility):**
Draw vision panel glazing as a separate solid extrusion: width = Vision Panel Width (formula-driven), height = Vision Panel Height (formula-driven), centred on the door leaf, 5mm thick.
Set the glazing extrusion Visible = Show Vision Panel (Yes/No parameter from rf-11).
Assign to Subcategory: Doors - Glass.

**Step 6 — Door Swing Arc (Symbolic Lines):**
In the Ref. Level plan view: draw the door swing arc and the opening indicator line as Symbolic Lines. The arc radius = door Width. Set Symbolic Lines to Coarse and Medium visibility only (they are 2D annotation, not needed at Fine detail level in 3D views).`,
      },
      {
        title: 'Nested Hardware, Shared Parameters, and Type Catalogue',
        content: `**Nested Door Handle (simplified push bar for this build):**

Build the handle family first (in a separate Family Editor session):
- Template: Generic Model.rft (non-hosted — the handle is positioned relative to the door, not the wall)
- Geometry: a simple horizontal bar (sweep or extrusion) — 400mm long, 25mm circular cross-section
- Parameters: Handle Length (Type, Length), Handle Diameter (Type, Length), Material (Type, Material)
- Name: GM-Door-Handle-Push-Bar.rfa

Load into the door family: Insert → Load Family → select GM-Door-Handle-Push-Bar.rfa
Place: Create → Component → place the handle on the push (room) side of the door leaf
Position: Align to reference planes — height at 1050mm from floor (lock to a "Handle Height" reference plane), inset 150mm from the latch side edge

Pass parameters: select the handle instance → Properties → Handle Length → formula button → type "Handle Length" (a type parameter in the door family that passes to the handle). The handle length on the door is controlled by the door family.

**Shared Parameters:**
Open the office shared parameter file: Manage → Shared Parameters → browse to the .txt file.
Add "Fire Rating" (Text, Type parameter, Group: Identity Data) — from the Fire and Safety group.
Add "Hardware Set" (Text, Type parameter, Group: Identity Data) — from the Identity and Description group.

Both now appear in the Family Types dialog and will be accessible to tags and schedules.

**Type Catalogue (.txt file):**
Create the catalogue in a text editor:
\`\`\`
,Width##LENGTH##millimeters,Height##LENGTH##millimeters,Frame Width##LENGTH##millimeters
Single-Flush: 700x2100mm,700,2100,75
Single-Flush: 750x2100mm,750,2100,75
Single-Flush: 800x2100mm,800,2100,75
Single-Flush: 900x2100mm,900,2100,75
Single-Flush: 1000x2100mm,1000,2100,75
Single-Flush: 1100x2100mm,1100,2100,100
Single-Flush: 1200x2100mm,1200,2100,100
Single-Flush: 700x2400mm,700,2400,75
Single-Flush: 750x2400mm,750,2400,75
Single-Flush: 800x2400mm,800,2400,75
Single-Flush: 900x2400mm,900,2400,75
Single-Flush: 1000x2400mm,1000,2400,75
Single-Flush: 1100x2400mm,1100,2400,100
Single-Flush: 1200x2400mm,1200,2400,100
\`\`\`
Save as "DR-Single-Flush-Door-Standard.txt" in the same folder as the .rfa file.`,
      },
      {
        title: 'QA, Documentation, and Library Publication',
        content: `**Running the Advanced QA Checklist:**

File and Metadata:
Run Purge Unused (twice). Check file size — target under 600KB for this family. Fill in Description: "Single-flush door, wall-hosted, with optional vision panel and nested push bar handle. Wall-hosted. 14 types via type catalogue." Fill in Comments: "v1.0 — 2025-06-15 — Initial release. [Your Initials]."

Geometry:
Test all 14 types load correctly from the type catalogue. Verify door leaf, frame, and void update correctly at all sizes. Test the vision panel shows/hides correctly per the Yes/No parameter. Verify the void cuts the wall correctly on: 100mm partition wall, 215mm blockwork wall, 300mm concrete wall.

Verify detail levels:
- Coarse: only the door swing symbolic lines and opening indication visible. No 3D geometry.
- Medium: door leaf outline, frame, and swing arc visible. Vision panel outline visible (if enabled).
- Fine: full 3D geometry including door leaf, frame, handle. Vision panel glazing at correct depth.

Parameters:
Verify Fire Rating appears in door schedule as a column. Verify Hardware Set appears in door schedule. Place a door tag — verify it shows the Mark value. Verify shared parameters appear in tag label options.

Placement:
Place on an angled wall — verify correct rotation. Verify flip controls (left/right hand, open direction). Place multiple instances — verify each has independent Show Vision Panel control.

Performance:
Place 20 instances in the test project. Pan and zoom — verify no significant performance degradation.

**Library Publication:**
Save the final .rfa and .txt files. Move to the office library:
Library location: /Family Library/00_Architecture/Doors/DR-Single-Flush-Door-Standard.rfa

Notify the team: "Single-flush door family published to library. 14 types via type catalogue. Includes optional vision panel and shared parameters for Fire Rating and Hardware Set."

Update the library register: add the family to the spreadsheet with name, category, version, date, builder, reviewer.

**What This Build Taught:**
Every lesson from rf-1 through rf-23 appears in this one door family: template selection (rf-3), reference planes (rf-4), parameters (rf-5), solid geometry (rf-6), voids (rf-7), testing (rf-8), type catalogue (rf-9), formulas for vision panel sizing (rf-10), visibility controls for swing arc and vision panel (rf-11), material for glazing (rf-12), nested handle (rf-13), wall-hosted conventions (rf-14), shared parameters (rf-16), QA standards (rf-22), and library publication (rf-23). The door is the vehicle. The workflow is the lesson.`,
      },
    ],
    takeaways: [
      'The complete family creation workflow: brief → template → reference plane planning → parameter design → geometry → nested components → shared parameters → type catalogue → QA → library publication',
      'Every principle from every lesson in this course appears in a single professional door family — the door is the example, the workflow is universal',
      'Planning on paper before opening the Family Editor — listing variable dimensions, fixed relationships, and parameter types — prevents rework',
      'The capstone family demonstrates: wall-hosting, void cuts, nested components, shared parameters, Yes/No visibility, Coarse/Medium/Fine detail levels, type catalogues, and full QA',
      'Publishing to the library is a workflow milestone, not an afterthought — naming, documentation, version record, and team notification are all part of a professional publication',
    ],
    resource: {
      title: 'Autodesk Revit — Family Editor Complete Reference',
      url: 'https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-family-editor-reference',
    },
    prev: 'rf-23',
    next: null,
  },
];
