export const subjects = [
  {
    name: 'Mathematics',
    icon: '🔢',
    color: 'bg-blue-500',
    topics: ['Algebra', 'Geometry', 'Calculus', 'Statistics'],
    materials: [
      { title: 'Algebra Foundations', type: 'Lesson', description: 'Understand variables, expressions, and linear equations step-by-step.', duration: '15 min' },
      { title: 'Geometry in Real Life', type: 'Video', description: 'Explore angles, shapes, and proofs through visual explanations.', duration: '12 min' },
      { title: 'Calculus Practice Set', type: 'Practice', description: 'Differentiate and integrate functions with guided examples.', duration: '20 min' },
    ],
    extendedMaterials: [
      { title: 'Problem-Solving Workshop', type: 'Workshop', description: 'Tackle mixed algebra and geometry word problems with guided hints.', duration: '25 min' },
      { title: 'Concept Mastery Check', type: 'Assessment', description: 'Adaptive quiz that reviews algebra through introductory calculus essentials.', duration: '12 questions' },
    ],
  },
  {
    name: 'Physics',
    icon: '⚛️',
    color: 'bg-purple-500',
    topics: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Waves'],
    materials: [
      { title: 'Newtonian Mechanics', type: 'Lesson', description: 'Break down motion, forces, and energy conservation.', duration: '18 min' },
      { title: 'Heat Transfer Lab', type: 'Activity', description: 'Simulate conduction, convection, and radiation scenarios.', duration: '10 min' },
      { title: 'Wave Phenomena Quiz', type: 'Quiz', description: 'Reinforce interference and diffraction concepts.', duration: '8 questions' },
    ],
    extendedMaterials: [
      { title: 'Lab Report Template', type: 'Resource', description: 'Downloadable structure for documenting experiments and observations.', duration: 'Download' },
      { title: 'Waves in Real Life', type: 'Practice', description: 'Case studies that connect sound, light, and water waves to daily phenomena.', duration: '15 min' },
    ],
  },
  {
    name: 'Chemistry',
    icon: '🧪',
    color: 'bg-green-500',
    topics: ['Atomic Structure', 'Chemical Bonds', 'Reactions', 'Organic'],
    materials: [
      { title: 'Periodic Trends Explorer', type: 'Interactive', description: 'Compare atomic radius, ionization energy, and electronegativity.', duration: '15 min' },
      { title: 'Chemical Bonding Notes', type: 'Lesson', description: 'Differentiate ionic, covalent, and metallic bonds.', duration: '9 min' },
      { title: 'Reaction Stoichiometry Drill', type: 'Practice', description: 'Balance equations and compute limiting reagents.', duration: '5 problems' },
    ],
    extendedMaterials: [
      { title: 'Organic Reaction Flowchart', type: 'Reference', description: 'Printable diagram that summarizes common organic transformations.', duration: '1 page' },
      { title: 'Lab Safety Scenario Quiz', type: 'Quiz', description: 'Interactive decision-making activity for safe laboratory practice.', duration: '6 questions' },
    ],
  },
  {
    name: 'Biology',
    icon: '🧬',
    color: 'bg-emerald-500',
    topics: ['Cell Biology', 'Genetics', 'Evolution', 'Ecology'],
    materials: [
      { title: 'Cell Structures Walkthrough', type: 'Lesson', description: 'Identify organelles and their functions with diagrams.', duration: '14 min' },
      { title: 'Genetics Problem Set', type: 'Practice', description: 'Solve Punnett squares and inheritance scenarios.', duration: '10 problems' },
      { title: 'Ecosystem Case Study', type: 'Project', description: 'Analyze biodiversity and energy flow in a habitat.', duration: '20 min' },
    ],
    extendedMaterials: [
      { title: 'Virtual Dissection Lab', type: 'Interactive', description: 'Explore organism structures with layered, zoomable diagrams.', duration: '20 min' },
      { title: 'AP-Style Free Response', type: 'Practice', description: 'Timed prompts that build evidence-based explanations.', duration: '2 prompts' },
    ],
  },
  {
    name: 'English',
    icon: '📝',
    color: 'bg-orange-500',
    topics: ['Grammar', 'Literature', 'Writing', 'Speaking'],
    materials: [
      { title: 'Grammar Fix-It', type: 'Lesson', description: 'Review common sentence errors with quick exercises.', duration: '10 min' },
      { title: 'Literary Devices Guide', type: 'Reference', description: 'See examples of metaphors, symbolism, and motifs.', duration: '8 min' },
      { title: 'Opinion Essay Planner', type: 'Template', description: 'Organize arguments and evidence for persuasive writing.', duration: 'Downloadable' },
    ],
    extendedMaterials: [
      { title: 'Reading Comprehension Sprint', type: 'Lesson', description: 'Paired passages with scaffolded questions to strengthen inference skills.', duration: '18 min' },
      { title: 'Speaking Confidence Drills', type: 'Practice', description: 'Audio-guided pronunciation and pacing exercises.', duration: '10 min' },
    ],
  },
  {
    name: 'Indonesian',
    icon: '🇮🇩',
    color: 'bg-red-500',
    topics: ['Grammar', 'Literature', 'Writing', 'Speaking'],
    materials: [
      { title: 'Tata Bahasa Dasar', type: 'Lesson', description: 'Pelajari struktur kalimat dan imbuhan penting.', duration: '12 menit' },
      { title: 'Analisis Puisi Nusantara', type: 'Video', description: 'Membedah makna dan gaya bahasa dalam puisi lokal.', duration: '11 menit' },
      { title: 'Latihan Pidato Singkat', type: 'Practice', description: 'Siapkan kerangka pidato dan latih intonasi.', duration: '10 menit' },
    ],
    extendedMaterials: [
      { title: 'Kosakata Tematik', type: 'Reference', description: 'Daftar kosakata penting berdasarkan topik ujian populer.', duration: '2 halaman' },
      { title: 'Diskusi Audio Pendek', type: 'Audio', description: 'Dengarkan percakapan dan jawab dua pertanyaan refleksi.', duration: '6 menit' },
    ],
  },
];
