/**
 * DATA.JS - SINGLE SOURCE OF TRUTH FOR KLE TECH CAMPUS CONNECT
 * 
 * NOTE ON LOGOS: Drama Club and KLE Motorsports still need logos (currently logo: null).
 * Adding a logo in the future only means changing null to a file path (e.g. '/logos/drama-club.jpg').
 */

export const categories = [
  'All', 
  'Music Club', 
  'Dance Club', 
  'Drama Club', 
  'Make In BVB', 
  'Aerokle', 
  'Wordsworth', 
  'KLE Motorsports'
];

export const mockClubs = [
  {
    id: 'music-club',
    name: 'Music Club',
    shortTagline: 'Bands, Jam Nights & Live Performances',
    description: 'The official musical collective of KLE Tech, hosting semester band battles, acoustic jam sessions, and vocal showcases.',
    accentColor: '#E05A47',
    logo: '/logos/music-club.jpg',
    memberCount: 120,
    president: 'Student Lead',
    contactEmail: 'music@kletech.ac.in',
    isJoined: false,
    events: [
      {
        id: 'evt-music-1',
        name: 'Acoustic Jam & Sunset Unplugged',
        date: 'Oct 14, 2026',
        day: 'Day 1',
        time: '5:30 PM',
        venue: 'Quad Amphitheatre',
        category: 'Music Club',
        clubId: 'music-club',
        description: 'Bring a guitar or just bring your ears. Students take turns on the amphitheatre steps with originals and covers as the sun goes down.',
        rsvpCount: 84,
        isRsvpd: true
      },
      {
        id: 'evt-music-2',
        name: 'Battle of the Bands: Live Auditions',
        date: 'Oct 22, 2026',
        day: 'Day 3',
        time: '6:00 PM',
        venue: 'Main Auditorium',
        category: 'Music Club',
        clubId: 'music-club',
        description: 'Departments send their bands to play a 10-minute set for the judges. The best four make it to the final night.',
        rsvpCount: 142,
        isRsvpd: false
      }
    ],
    announcement: {
      id: 'ann-music-1',
      title: 'Auditions open for Campus Choir & Lead Vocalists',
      date: 'Oct 10, 2026',
      priority: 'Notice',
      summary: 'Vocal testing and acoustic choir sessions held every Wednesday evening in Music Room 102.'
    }
  },
  {
    id: 'dance-club',
    name: 'Dance Club',
    shortTagline: 'Hip-Hop, Classical & Fusion Dance Sprints',
    description: 'The choreography and dance collective of KLE Tech, featuring annual fest dance battles, hip-hop workshops, and classical fusion showcases.',
    accentColor: '#EC4899',
    logo: '/logos/dance-club.jpg',
    memberCount: 115,
    president: 'Student Lead',
    contactEmail: 'dance@kletech.ac.in',
    isJoined: false,
    events: [
      {
        id: 'evt-dance-1',
        name: 'Inter-College Dance Battle: Street & Fusion',
        date: 'Oct 16, 2026',
        day: 'Day 2',
        time: '5:00 PM',
        venue: 'Main Auditorium',
        category: 'Dance Club',
        clubId: 'dance-club',
        description: 'Crews battle it out on stage in three rounds of freestyle and choreographed hip-hop.',
        rsvpCount: 128,
        isRsvpd: false
      }
    ],
    announcement: {
      id: 'ann-dance-1',
      title: 'Auditions for Annual Fest Choreography Team',
      date: 'Oct 09, 2026',
      priority: 'Notice',
      summary: 'Dance auditions held in Student Activity Hall this Thursday at 5:00 PM.'
    }
  },
  {
    id: 'drama-club',
    name: 'Drama Club',
    shortTagline: 'Theatre, Street Plays (Nukkad Natak) & Skits',
    description: 'Bringing stories to life on stage and the quad street with student plays, improvisational comedy, and prop design.',
    accentColor: '#D97706',
    logo: '/logos/drama-club.jpg',
    memberCount: 95,
    president: 'Student Lead',
    contactEmail: 'drama@kletech.ac.in',
    isJoined: false,
    events: [
      {
        id: 'evt-drama-1',
        name: 'Street Play Showcase: Nukkad Natak',
        date: 'Oct 15, 2026',
        day: 'Day 1',
        time: '4:00 PM',
        venue: 'Central Library Circle',
        category: 'Drama Club',
        clubId: 'drama-club',
        description: 'Short plays written and staged by first and second years, back to back, with a chai break in the middle.',
        rsvpCount: 110,
        isRsvpd: false
      }
    ],
    announcement: {
      id: 'ann-drama-1',
      title: 'Scriptwriting Workshop for Autumn Mainstage Play',
      date: 'Oct 08, 2026',
      priority: 'Notice',
      summary: 'Join stage directors in Blackbox Studio B this Friday to outline the autumn mainstage script.'
    }
  },
  {
    id: 'make-in-bvb',
    name: 'Make In BVB',
    shortTagline: 'Makers, Builders, Hardware & Hackathons',
    description: 'KLE Tech premier hardware innovation and prototyping guild for IoT sprints, 3D printing labs, and hackathons.',
    accentColor: '#059669',
    logo: '/logos/make-in-bvb.jpg',
    memberCount: 210,
    president: 'Student Lead',
    contactEmail: 'makeinbvb@kletech.ac.in',
    isJoined: true,
    events: [
      {
        id: 'evt-make-1',
        name: 'Make-A-Thon 2026: 24-Hour Prototype Sprint',
        date: 'Oct 18, 2026',
        day: 'Day 2',
        time: '9:00 AM (24 Hours)',
        venue: 'Foundry & Maker Lab',
        category: 'Make In BVB',
        clubId: 'make-in-bvb',
        description: 'Eight hours, one problem statement, teams of four. Build something that works on the demo table, not just on slides.',
        rsvpCount: 165,
        isRsvpd: true
      }
    ],
    announcement: {
      id: 'ann-make-1',
      title: '3D Printers & PCB Milling Lab Hours Extended',
      date: 'Oct 12, 2026',
      priority: 'Urgent',
      summary: 'Maker lab tools and 3D printing stations remain open overnight until midnight for project teams.'
    }
  },
  {
    id: 'aerokle',
    name: 'Aerokle',
    shortTagline: 'Aerospace, Aeromodelling, Drones & Flight',
    description: 'Designing autonomous RC planes, quadcopters, and glider airframes for national flight and aerospace competitions.',
    accentColor: '#2563EB',
    logo: '/logos/aero-kle.jpg',
    memberCount: 85,
    president: 'Student Lead',
    contactEmail: 'aerokle@kletech.ac.in',
    isJoined: false,
    events: [
      {
        id: 'evt-aero-1',
        name: 'RC Aircraft & Drone Flying Demonstration',
        date: 'Oct 20, 2026',
        day: 'Day 2',
        time: '3:30 PM',
        venue: 'Sports Ground Lawn',
        category: 'Aerokle',
        clubId: 'aerokle',
        description: 'Flight day on the ground behind the workshop: fly your own model aircraft, and watch the club test its newest airframe.',
        rsvpCount: 98,
        isRsvpd: false
      }
    ],
    announcement: {
      id: 'ann-aero-1',
      title: 'Aerodynamics Simulation Workshop Series',
      date: 'Oct 05, 2026',
      priority: 'Notice',
      summary: 'Learn CAD modeling and CFD airframe aerodynamics analysis every Tuesday in CAD Lab 3.'
    }
  },
  {
    id: 'wordsworth',
    name: 'Wordsworth',
    shortTagline: 'Literary Club: Writing, Poetry, Debate & Open Mic',
    description: 'The literary heart of KLE Tech featuring slam poetry, parliamentary debate, creative writing circles, and open mics.',
    accentColor: '#7C3AED',
    logo: '/logos/wordsworth.jpg',
    memberCount: 105,
    president: 'Student Lead',
    contactEmail: 'wordsworth@kletech.ac.in',
    isJoined: false,
    events: [
      {
        id: 'evt-words-1',
        name: 'Open Mic: Poetry, Prose & Spoken Word',
        date: 'Oct 25, 2026',
        day: 'Day 3',
        time: '5:00 PM',
        venue: 'Student Center Lounge',
        category: 'Wordsworth',
        clubId: 'wordsworth',
        description: 'Open mic for poems, short stories and rants. Three minutes each, no sign-up needed, just walk up when the host calls.',
        rsvpCount: 76,
        isRsvpd: false
      }
    ],
    announcement: {
      id: 'ann-words-1',
      title: 'Annual Campus Magazine Submissions Open',
      date: 'Sep 29, 2026',
      priority: 'Notice',
      summary: 'Submit short stories, poems, and digital artwork for the 2026 annual campus magazine.'
    }
  },
  {
    id: 'kle-motorsports',
    name: 'KLE Motorsports',
    shortTagline: 'Student Racing Team & Vehicle Fabrication',
    description: 'Designing, fabricating, and racing combustion and electric Formula student vehicles for national track events.',
    accentColor: '#DC2626',
    logo: '/logos/motorsports.jpg',
    memberCount: 78,
    president: 'Student Lead',
    contactEmail: 'motorsports@kletech.ac.in',
    isJoined: false,
    events: [
      {
        id: 'evt-racing-1',
        name: 'Formula Vehicle Chassis Rollout & Engine Fire-Up',
        date: 'Nov 02, 2026',
        day: 'Day 4',
        time: '4:30 PM',
        venue: 'Mechanical Workshop Quad',
        category: 'KLE Motorsports',
        clubId: 'kle-motorsports',
        description: 'See the team\'s car up close in the pit area, ask the drivers anything, and watch a live engine start.',
        rsvpCount: 154,
        isRsvpd: false
      }
    ],
    announcement: {
      id: 'ann-racing-1',
      title: 'Recruiting Drivers & Suspension Design Engineers',
      date: 'Oct 02, 2026',
      priority: 'Urgent',
      summary: 'Driver tryouts and suspension design team interviews open for engineering students in Garage Bay 2.'
    }
  }
];

// Flatten events from all 7 clubs into a single timeline array
export const mockEvents = mockClubs.flatMap(c => c.events.map(e => ({
  ...e,
  logo: c.logo,
  accentColor: c.accentColor,
  club: c
})));

// Flatten announcements from all 7 clubs into a single array
export const mockAnnouncements = [
  ...mockClubs.map(c => ({
    ...c.announcement,
    department: c.name,
    accentColor: c.accentColor,
    club: c
  })),
  {
    id: 'ann-general-1',
    title: 'KLE Tech Midterm Exam Schedule & Library 24/7 Hours',
    date: 'Oct 14, 2026',
    priority: 'Urgent',
    department: 'Academic Affairs',
    accentColor: '#0B1320',
    club: null
  }
];
