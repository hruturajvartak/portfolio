export const profile = {
  name: 'Hruturaj (Raj) Vartak',
  fullName: 'Hruturaj Vartak',
  title: 'Mechanical Engineering Leader',
  tagline:
    'I help heavy equipment manufacturers ship more reliable products faster, through rigorous FEA-validated hydraulic and structural systems engineering.',
  email: 'hruturaj.vartak@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hruturajvartak/',
}

export const stats = [
  { value: '16+', label: 'Years Experience' },
  { value: '3', label: 'Product Launches (10-15% ahead of schedule)' },
  { value: '92%', label: 'FEA-to-Test Correlation Accuracy' },
  { value: '40%', label: 'Reduction in Subsystem Failures' },
]

export const experience = [
  {
    company: 'Zoomlion Heavy Industries North America',
    title: 'Engineering Manager, Structural Engineering',
    dates: 'Apr 2022 – Mar 2025',
    bullets: [
      'Built and led a 12-engineer team across the US and China',
      'Instituted DFMEA / DVP&R rigor and 1000+ cycle durability validation',
      'Delivered 3 product launches 10–15% ahead of schedule; cut development cycle from 9 to 6 months',
      'Reduced subsystem failures 40% and cost 10% through VAVE',
      'Owned team budget for tooling, software, and capital equipment (3D printer, GPU, 3D scanner)',
      'Developed senior and lead engineers on technical and leadership tracks',
    ],
  },
  {
    company: 'John Deere Harvester Works',
    title: 'Mechanical Engineer',
    dates: '2014 – 2019',
    bullets: [],
  },
  {
    company: 'CNH Industrial and AGCO',
    title: 'Mechanical Engineer',
    dates: '2013 – 2014',
    bullets: [],
  },
  {
    company: 'Facade India Testing, Thane',
    title: 'Mechanical Engineer',
    dates: '2006 – 2010',
    bullets: [],
  },
]

export const projects = [
  {
    title: 'Mini Excavator Frame — Zero Tail-Swing Design',
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
    title: 'Reduced Tail-Swing Excavator Frame — Design Process',
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
    title: 'Combination Tie Down Lug and Step Riser',
    abstract:
      'A combination tie-down lug and step riser includes a foot support portion, a hold-down loop, and a mounting portion, preferably fabricated from a single piece of material. The foot support portion includes projections extending upward from a top edge. The hold-down loop extends from one end of the footrest portion with a U-shaped opening positioned along a horizontal axis. The mounting portion extends from the opposing end and is attached to an excavator base by welding or other suitable method.',
  },
  {
    id: 'US11886218B2',
    title: 'One-Handed Joystick for Cranes',
    abstract:
      'A one-handed joystick for cranes allows an operator to make all necessary motions with a single hand and arm. Includes a rotatable cylinder bar, rotatable ring, industrial joystick base, rocker switch, and push-button switches. Motions control raising and lowering auxiliary and main hoists, luffing, slewing, and telescoping boom extension. A Deadman\u2019s switch may be installed on the back side of the rotatable cylinder bar.',
  },
]

export const skills = {
  core: [
    'Welded and fabricated steel structures and frames',
    'Load-sense hydraulic and electro-hydraulic fluid systems',
    'FEA in ANSYS and Abaqus — correlations within 92% of physical test results',
    'DFMEA / DVP&R',
    '1000+ cycle durability validation',
    'Pressure equipment certification: CE marking (EN 280), ANSI, CSA, ISO',
    'APQP / PPAP and supplier qualification',
    'Digital twin implementation (sensors, edge computing, cloud, ML)',
  ],
  software: ['Creo', 'SolidWorks', 'NX', 'AutoCAD', 'Teamcenter', 'Windchill'],
  education: [
    { degree: 'B.E., Mechanical Engineering', school: 'University of Mumbai' },
    { degree: 'M.S., Mechanical Engineering', school: 'Pittsburg State University' },
    { degree: 'MBA', school: 'Sullivan University' },
  ],
  certifications: ['MIT xPRO — AI Strategy', 'MIT xPRO — AI Product Design'],
}
