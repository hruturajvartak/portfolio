const img = (file: string) => `${import.meta.env.BASE_URL}images/${file}`

export const profile = {
  name: 'Hruturaj (Raj) Vartak',
  fullName: 'Hruturaj Vartak',
  shortName: 'Raj Vartak',
  title: 'Mechanical Engineering Leader',
  tagline:
    'Mechanical Engineering Leader with 16+ years leading structural and fluid systems engineering across Zoomlion Heavy Industries, John Deere Harvester Works, CNH Industrial, and AGCO.',
  summary:
    '16+ years leading structural and fluid systems engineering for excavators, cranes and harvesters, from first CAD sketch and FEA correlation to durability validation and launch.',
  email: 'hruturaj.vartak@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hruturajvartak/',
  photo: img('profile.jpg'),
  focus: 'Structural & fluid systems · Heavy equipment',
}

export const companies = ['Zoomlion', 'John Deere', 'CNH Industrial', 'AGCO']

export const standards = [
  'CE Marking (EN 280)',
  'ANSI',
  'CSA',
  'ISO 5006',
  'ISO 3471',
  'ISO 3449',
  'ISO 10262',
  'ISO 12117-2',
  'APQP / PPAP',
]

export type ProjectImage = { src: string; alt: string }

export const stats = [
  { value: '16+', label: 'Years Experience' },
  { value: '3', label: 'Product Launches (10-15% ahead of schedule)' },
  { value: '92%', label: 'FEA-to-Test Correlation Accuracy' },
  { value: '40%', label: 'Reduction in Subsystem Failures' },
]

export type Role = { title: string; dates: string; bullets: string[] }
export type Job = { company: string; location: string; roles: Role[] }

export const experience: Job[] = [
  {
    company: 'Zoomlion Heavy Industries, North America',
    location: 'Yorkville, WI, USA',
    roles: [
      {
        title: 'Engineering Manager, Structures',
        dates: 'Apr 2022 – Mar 2025',
        bullets: [
          'Led a 12-person team of engineers, designers and FEA resources across the US and China on excavator and compact equipment programs, setting priorities and schedules and chairing design reviews from concept through validation.',
          'Delivered 3 product launches about 10 to 15% ahead of schedule and reduced one excavator development cycle from about 9 months to 6 through earlier simulation, closer coordination and structured validation.',
          'Set up design review practices (component checklists, calculation and FEA reviews, documentation standards), tracked open issues to closure, and implemented ECR and ECO change management through the production release gate.',
          'Planned and ran DVP&R validation with 1,000+ cycle durability testing on instrumented prototypes, with FEA matching measured strain within about 92% on one prototype; corrective actions reduced subsystem failures about 40%.',
          'Defined interface ownership across mechanical, hydraulic, electrical and controls engineers, contributing to about 40% fewer integration issues.',
          'Worked with plant manufacturing engineering and suppliers on DFM, DFA, weld and NDT specification and fixture requirements, and qualified suppliers through APQP and PPAP into production.',
          'Set up and administered Teamcenter for drawing release, engineering change notices and BOM structure.',
          'Cut dead weight 12% and peak stress 25% on a 15.5t reduced tail swing excavator structure while holding buckling resistance and fatigue-life requirements.',
          'Owned the department budget for tooling, software, capital equipment and external training, and took 10% out of product cost through VAVE and part standardization.',
          'Designed structural components for a hydraulically actuated gripper attachment for excavators.',
          'Specified, sized and packaged swing gearboxes, travel drives and pump splitter gearboxes with suppliers.',
        ],
      },
      {
        title: 'Senior Engineer',
        dates: 'Jan 2022 – Mar 2022',
        bullets: [
          'Led mechanical engineering on earthmoving programs, coordinating structural, hydraulic and controls engineers through design reviews, DFMEA, prototype development and validation.',
        ],
      },
      {
        title: 'Mechanical Engineer II',
        dates: 'Apr 2019 – Dec 2021',
        bullets: [
          'Designed structural and hydraulic subsystems, components and assemblies for mini and compact excavators, considering performance, packaging, manufacturability and cost.',
          'Supported design reviews, validation, supplier coordination and engineering changes, and worked with manufacturing and quality teams to resolve design issues.',
        ],
      },
    ],
  },
  {
    company: 'John Deere Harvester Works',
    location: 'East Moline, IL, USA',
    roles: [
      {
        title: 'Design Engineer (Contract)',
        dates: 'Oct 2014 – Apr 2019',
        bullets: [
          'Found insufficient weld root penetration as the cause of a recurring loading auger structural failure, and coordinated corrective actions with suppliers (weld penetration controls, standardized work instructions, process audits), reducing reported failures about 61%.',
          'Led design and industrialization of injection-molded components through APQP and PPAP into volume production, with material selection and mold design reviews with tooling suppliers.',
          'Designed and validated welded steel frames and fabricated assemblies for harvesting equipment, working with manufacturing, quality and supplier engineering.',
        ],
      },
    ],
  },
  {
    company: 'CNH Industrial',
    location: 'Fargo, ND, USA',
    roles: [
      {
        title: 'Design Engineer (Contract)',
        dates: 'Oct 2013 – Sep 2014',
        bullets: [
          'Updated mechanical designs, CAD models and drawings for agricultural equipment, and worked with manufacturing to resolve design and production issues.',
        ],
      },
    ],
  },
  {
    company: 'AGCO Corporation',
    location: 'Hesston, KS, USA',
    roles: [
      {
        title: 'Design Engineer (Contract)',
        dates: 'Mar 2013 – Aug 2013',
        bullets: [
          'Designed stamped hoods, guards, brackets and mounting hardware, working with stamping suppliers on tooling design, blank development and manufacturability.',
        ],
      },
    ],
  },
  {
    company: 'Facade India Testing Inc.',
    location: 'Thane, Maharashtra, India',
    roles: [
      {
        title: 'Design Engineer',
        dates: '2006 – 2010',
        bullets: [
          'Engineered formed and extruded panel assemblies, connections and anchorage for building facade systems, with submittals and mock-up and certification testing alongside fabricators.',
        ],
      },
    ],
  },
]

export const projects = [
  {
    title: 'Mini Excavator Frame: Zero Tail-Swing Design',
    images: [{ src: img('mini-excavator-frame.png'), alt: 'FEA stress and displacement plot for the mini excavator frame, lateral load case' }],
    category: 'Structural Design',
    goal: 'Create a robust, lightweight, highly maneuverable 3.5 mT mini-excavator frame meeting safety and operational standards.',
    contributions: [
      'Market research and competitor benchmarking',
      'CAD modeling in Creo; material optimization with high-strength steel',
      'Seamless integration with hydraulics, engine, and operator cabin',
    ],
    analysis: [
      'FEA on critical load cases: static, lateral, impact',
      'Iterative optimization to cut weight while maintaining durability',
    ],
    results: [
      '15% lighter frame with improved fuel efficiency and handling',
      'Zero tail-swing design ideal for confined spaces',
      'Extended service life under diverse operational stresses',
    ],
    skills: ['Creo', 'Simscape FEA', 'Material Optimization', 'Structural Engineering'],
  },
  {
    title: 'Reduced Tail-Swing Excavator Frame: Design Process',
    images: [
      { src: img('reduced-tail-swing-1.jpg'), alt: 'CAD model of the reduced tail-swing excavator frame' },
      { src: img('reduced-tail-swing-2.png'), alt: 'FEA results for the reduced tail-swing excavator frame' },
    ],
    category: 'Structural Design',
    goal: 'Design a 15.5 mT reduced tail-swing excavator frame for confined spaces while maintaining strength, stability, and manufacturability.',
    contributions: [
      'Collected customer feedback and benchmarked competitor models',
      'Built compact, efficient 3D models in Creo',
      'Selected high-strength, lightweight steel alloys',
      'Full system integration: hydraulics, cabin, and controls',
    ],
    analysis: [
      'Static analysis: heavy loads and uneven terrain; reinforced weak points',
      'Modal analysis: avoided resonance frequencies; reduced vibration and noise',
      'Iterative load redistribution to minimize weight',
    ],
    results: [
      '15% lighter frame; improved fuel efficiency and handling',
      'Enhanced maneuverability in confined spaces',
      'Reduced vibration for improved operator comfort and longevity',
    ],
    skills: ['ANSYS FEA', 'Creo', 'Structural Optimization'],
  },
  {
    title: 'Excavator Arm Design & Structural Optimization',
    images: [{ src: img('excavator-arm.jpg'), alt: 'Excavator arm (stick) CAD geometry' }],
    category: 'Structural Design',
    goal: 'Design an excavator arm (stick) with optimal pin geometry and contour for strength and reach.',
    contributions: [
      'Defined boom, bucket, and pin geometry for required reach',
      'Modeled contour and cross-section in Creo (box / trapezoidal shapes)',
      'Selected Q345 steel for balanced strength and weight',
      'Added tapers, gussets, and reinforcements based on FEA hot spots',
    ],
    analysis: [
      'FEA-driven iteration on high-stress regions',
    ],
    results: [
      'Achieved required reach while maintaining structural integrity',
      'Optimized geometry reduced weight without loss of strength',
      'Improved dig force efficiency via pin geometry optimization',
    ],
    skills: ['Creo', 'Structural Analysis', 'FEA', 'Material Optimization'],
  },
  {
    title: 'Ergonomic and Visibility Study of Excavator Cabin',
    images: [
      { src: img('cabin-1.jpg'), alt: 'Operator reach-zone ergonomic study inside the excavator cabin' },
      { src: img('cabin-2.png'), alt: 'ISO 5006 visibility analysis of the excavator cabin' },
    ],
    category: 'Human-Centered Design',
    goal: 'Improve operator comfort, visibility, and safety per ISO 5006 standards.',
    contributions: [
      'Ergonomic assessment using Creo Manikin for reach zones and control layout',
      'Visibility analysis: masking techniques, blind spot reduction, mirror and camera placement',
      'Stakeholder validation with operators and product management',
    ],
    analysis: [
      'ISO 5006 compliance evaluation',
    ],
    results: [
      '+15% positive user feedback',
      '-10% operator fatigue incidents',
      'Improved compliance and operator satisfaction',
    ],
    skills: ['Creo', 'Ergonomic Simulation', 'ISO 5006', 'Human-Centered Design'],
  },
  {
    title: 'Topology Optimization of Excavator Frame',
    images: [] as ProjectImage[],
    category: 'Structural Optimization',
    goal: 'Reduce frame weight while maintaining durability and safety.',
    contributions: [
      'Performed topology optimization on high-stress regions',
      'Validated with static and fatigue FEA simulations',
      'Implemented reinforced geometry in production',
    ],
    analysis: [
      'Static and fatigue FEA validation',
    ],
    results: [
      '15% lighter frame with annual cost savings',
      'Improved fuel efficiency and payload capacity',
      'Maintained structural reliability under field conditions',
    ],
    skills: ['ANSYS', 'Structural Optimization', 'Lightweight Design'],
  },
  {
    title: 'IoT-Enabled Digital Twin for Structural Systems',
    images: [{ src: img('digital-twin.png'), alt: 'Excavator digital twin IoT architecture: sensors, edge gateway, cloud and dashboard' }],
    category: 'Digital Twin & IoT',
    goal: 'Ensure durability and reliability of heavy structural systems under dynamic loads.',
    contributions: [
      'Deployed sensor network (strain, vibration, pressure) on structural components',
      'Integrated IoT gateways for real-time monitoring and cloud data analysis',
      'Developed digital twin model for anomaly detection and lifecycle prediction',
    ],
    analysis: [
      'Edge computing and ML-based anomaly detection',
    ],
    results: [
      '92% prediction accuracy of structural fatigue and failures',
      '30% reduction in downtime due to early detection',
      '20% lower maintenance cost with condition-based servicing',
    ],
    skills: ['Structural Monitoring', 'IoT Integration', 'Digital Twins', 'Predictive Maintenance'],
  },
]

export const patents = [
  {
    id: 'US11603643B2',
    url: 'https://patents.google.com/patent/US11603643B2',
    title: 'Combination Tie Down Lug and Step Riser',
    abstract:
      'A combination tie-down lug and step riser includes a foot support portion, a hold-down loop, and a mounting portion, preferably fabricated from a single piece of material. The foot support portion includes projections extending upward from a top edge. The hold-down loop extends from one end of the footrest portion with a U-shaped opening positioned along a horizontal axis. The mounting portion extends from the opposing end and is attached to an excavator base by welding or other suitable method.',
  },
  {
    id: 'US11886218B2',
    url: 'https://patents.google.com/patent/US11886218B2',
    title: 'One-Handed Joystick for Cranes',
    abstract:
      'A one-handed joystick for cranes allows an operator to make all necessary motions with a single hand and arm. Includes a rotatable cylinder bar, rotatable ring, industrial joystick base, rocker switch, and push-button switches. Motions control raising and lowering auxiliary and main hoists, luffing, slewing, and telescoping boom extension. A Deadman\u2019s switch may be installed on the back side of the rotatable cylinder bar.',
  },
]

export const skills = {
  core: [
    'Welded and fabricated steel structures and frames',
    'Load-sense hydraulic and electro-hydraulic fluid systems',
    'FEA in ANSYS and Abaqus, with correlations within 92% of physical test results',
    'DFMEA / DVP&R',
    '1000+ cycle durability validation',
    'Pressure equipment certification: CE marking (EN 280), ANSI, CSA, ISO',
    'APQP / PPAP and supplier qualification',
    'Digital twin implementation (sensors, edge computing, cloud, ML)',
  ],
  software: ['Creo', 'SolidWorks', 'NX', 'AutoCAD', 'Teamcenter', 'Windchill'],
  education: [
    { degree: 'B.E., Mechanical Engineering', school: 'University of Mumbai' },
    { degree: 'Masters in Engineering, Mechanical Engineering Technology', school: 'Pittsburg State University' },
    { degree: 'MBA', school: 'Sullivan University' },
  ],
  certifications: [
    { name: 'AI Strategy', org: 'MIT xPRO' },
    { name: 'AI Product Design', org: 'MIT xPRO' },
  ],
}
