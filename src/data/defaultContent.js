export const defaultContent = {
  site: {
    title: 'Kaushalya',
    tagline: 'Portfolio / Engineering / Design',
    navItems: [
      { id: 'home', label: 'Home' },
      { id: 'blog', label: 'Blog & Articles' },
      { id: 'about', label: 'About Me' },
    ],
    socialLinks: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kaushalya-mullegama-962b4b270/', icon: 'fa-brands fa-linkedin' },
      { label: 'Instagram', href: 'https://www.instagram.com/kaushalya_mullegama_2903/', icon: 'fa-brands fa-instagram' },
      { label: 'YouTube', href: 'https://www.youtube.com/@kaushalyamullegama3932', icon: 'fa-brands fa-youtube' },
    ],
    contactDetails: {
      location: 'Colombo, Sri Lanka',
      email: 'krb.mullegama@gmail.com',
    },
  },
  hero: {
    eyebrow: 'Portfolio / Engineering / Design',
    title: "Hey, I’m Kaushalya Mullegama.",
    description:
      'I’m an electronics and software enthusiast focused on innovation, from Arduino systems to seamless digital experiences.',
    ctaPrimary: 'Explore Blog',
    ctaSecondary: 'View Background',
  },
  heroStats: [
    { value: '3+', label: 'Core disciplines' },
    { value: '6', label: 'Featured projects' },
    { value: '2026', label: 'Expected graduation' },
  ],
  spotlight: {
    tag: 'Spotlight Feature',
    title: 'A World Without Humans',
    description:
      'In a world without humans, robots would evolve beyond their programming, developing self-sustaining intelligence, forming their own societies, and advancing through technological upgrades.',
    image:
      'https://static.wixstatic.com/media/c837a6_5b71dec5d2934d45b6dc4cfcd11d038cf000.jpg/v1/fill/w_320,h_180,al_c,q_80/c837a6_5b71dec5d2934d45b6dc4cfcd11d038cf000.jpg',
  },
  featuredProjects: [
    {
      label: 'Web Development',
      title: 'Dynamic Web Portfolio',
      description:
        'A sleek and responsive website built using HTML, CSS, and JavaScript, designed to showcase projects and skills with an interactive user experience.',
      image:
        'https://static.wixstatic.com/media/3d6765_ba48ac9c59d94aa9bad62312fc183fc8~mv2.png/v1/fill/w_400,h_300,al_c,q_90/Screen%20Shot%202025-02-04%20at%2017_51_23.png',
    },
    {
      label: 'Robotics & IoT',
      title: 'Arduino Self Driving Car',
      description:
        'A DIY self-driving car built using Arduino boards, motor drivers, and ultrasonic arrays mapping localized spatial parameters for obstacle avoidance.',
      image:
        'https://static.wixstatic.com/media/3d6765_b91941eadad74a6e9abc4dcc0c61f7e8~mv2.avif/v1/fill/w_400,h_300,al_c,q_85/untitled-design-4-1.avif',
    },
    {
      label: 'UI/UX Design',
      title: 'Inventory System UX',
      description:
        'Clean, intuitive dashboard interface assets constructed in Figma emphasizing search capabilities, real-time tracking graphs, and operational management logs.',
      image:
        'https://static.wixstatic.com/media/3d6765_a8ac1b90b5734e3299a4e712b08e0f7b~mv2.png/v1/fill/w_400,h_400,al_c,q_90/Screen%20Shot%202025-02-04%20at%2017_53_02.png',
    },
  ],
  articles: [
    {
      id: 'robotics-future',
      category: 'Robotics',
      title: 'Rise of the Machines: How Robots Are Reshaping Our Future',
      description:
        'Robots are rapidly becoming an essential part of our daily lives. From AI-powered cobots to precision medical configurations, automation is changing industries.',
      image:
        'https://static.wixstatic.com/media/c837a6_172cf227708a485090541c3edf24018b~mv2.jpg/v1/fill/w_400,h_250,al_c,q_85/A%20dark%20robotic%20figure%20from%20the%20game%20_Atactic_.jpg',
      tone: 'blue',
      commentsEnabled: true,
    },
    {
      id: 'robotics-history',
      category: 'AI & Robotics History',
      title: 'From Automatons to AI: The Fascinating History of Robotics',
      description:
        'The dream of automation spans back millennia, starting with early mechanical concepts and evolving into modern humanoid and AI systems.',
      image:
        'https://static.wixstatic.com/media/c837a6_2bfdfe27559641e5ac6b4e6152d7dfa4~mv2.jpg/v1/fill/w_400,h_250,al_c,q_85/An%20illustration%20of%20a%20man%20hiding%20in%20a%20dragon%20cave.jpg',
      tone: 'amber',
      commentsEnabled: true,
    },
    {
      id: 'robots-only-species',
      category: 'Future Civilizations',
      title: 'A World Without Humans: If Robots Were the Only Species',
      description:
        'If biological elements ceased to exist, artificial intelligence networks would shift from programmatic scripts toward independent operational intelligence.',
      image:
        'https://static.wixstatic.com/media/c837a6_5048c5c653ef48199db4fe7b52e968f3~mv2.jpg/v1/fill/w_400,h_250,al_c,q_85/c837a6_5048c5c653ef48199db4fe7b52e968f3~mv2.jpg',
      tone: 'violet',
      commentsEnabled: true,
    },
  ],
  education: [
    {
      title: 'Bachelor of Science in Electronic & Telecommunication Engineering',
      institution: 'General Sir John Kotelawala Defence University (KDU), Sri Lanka',
      notes: ['Embedded systems, communication networks, and signal processing', 'Expected graduation: 2026'],
    },
    {
      title: 'Diploma in Software Engineering',
      institution: 'National Institute of Business Management (NIBM)',
      notes: ['Software development models, UI/UX structures, and database pipelines', 'Expected completion: 2025'],
    },
  ],
  skills: [
    {
      title: 'Embedded Systems & IoT',
      accent: 'Hardware Layers',
      icon: 'fa-solid fa-microchip',
      size: 'large',
      description:
        'Architecting smart systems, automation projects, and sensory arrays using micro-controllers with real-time feedback infrastructure.',
      chips: ['Arduino', 'Magic bit', 'Firmware Design'],
    },
    {
      title: 'Software Engineering',
      icon: 'fa-solid fa-code',
      size: 'small',
      description: 'Python, Java, C++, and C for logic-heavy development tasks.',
      chips: ['Python', 'Java', 'C++', 'C'],
    },
    {
      title: 'Web Interfaces',
      icon: 'fa-solid fa-globe',
      size: 'small',
      description: 'Responsive structures and interactive layouts using modular styling paradigms.',
      chips: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      title: 'UI/UX Layouts',
      accent: 'Design Matrices',
      icon: 'fa-solid fa-bezier-curve',
      size: 'small',
      description: 'Wireframes, visual hierarchy, and interface systems that keep user flows clean.',
      chips: ['Figma', 'Adobe XD'],
    },
    {
      title: 'Photography & Digital Art',
      icon: 'fa-solid fa-camera',
      size: 'wide',
      description: 'Capturing perspectives and manipulating assets with digital creativity.',
      chips: ['Composition', 'Asset Design', 'Visual Storytelling'],
    },
  ],
  certifications: [
    {
      title: 'Web Design for Beginners',
      image:
        'https://static.wixstatic.com/media/3d6765_e581008f54b34cb3b221ea517348b4bb~mv2.png/v1/fill/w_480,h_340,al_c,q_90/Screen%20Shot%202025-02-04%20at%2010_40_27.png',
    },
    {
      title: 'Get Started with Figma',
      image:
        'https://static.wixstatic.com/media/3d6765_c8422b4641384aba8b959a0750cdccbf~mv2.png/v1/fill/w_480,h_360,al_c,q_90/Screen%20Shot%202025-02-04%20at%2010_43_22.png',
    },
  ],
};
