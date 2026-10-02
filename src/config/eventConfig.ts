import sihLogo from '../assets/logos/sih-logo.svg';
import collegeLogo from '../assets/logos/rrgi-logo.svg';
import moeLogo from '../assets/logos/moe-logo.svg';
import aicteLogo from '../assets/logos/aicte-logo.svg';
import iicLogo from '../assets/logos/iic-logo.svg';

export interface ProblemStatement {
  id: string;
  psCode: string;
  title: string;
  organization: string;
  category: 'Software' | 'Hardware';
  theme: string;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  impact: string;
  techStack: string[];
}

export interface SIHTheme {
  id: string;
  title: string;
  code: string;
  category: string;
  description: string;
  icon: string;
  psCount: number;
  gradient: string;
}

export interface TimelineEvent {
  id: string;
  phase: string;
  title: string;
  date: string;
  time: string;
  description: string;
  status: 'upcoming' | 'active' | 'completed';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'SPOC' | 'Faculty Coordinator' | 'Technical Team' | 'Student Organizer';
  designation: string;
  department?: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Registration' | 'Problem Statements' | 'Evaluation';
}

export const EVENT_CONFIG = {
  collegeName: "RRGI",
  collegeFullName: "RajaRajeswari Group of Institutions",
  collegeTagline: "Center for Innovation, Research & Entrepreneurship",
  eventName: "Smart India Hackathon",
  eventEdition: "Internal Smart India Hackathon",
  year: "2026",
  tagline: "Build. Solve. Innovate.",
  
  eventDate: "[EVENT DATE]",
  venue: "[VENUE]",
  registrationDeadline: "[REGISTRATION DEADLINE]",
  registrationLink: "[REGISTRATION LINK]",
  contactEmail: "[CONTACT EMAIL]",
  phone: "[PHONE NUMBER]",

  logos: {
    sih: sihLogo,
    college: collegeLogo,
    moe: moeLogo,
    aicte: aicteLogo,
    iic: iicLogo,
  },

  // Concise Quick Event Info Strip (No fake bloated stats)
  quickInfo: [
    { label: "TEAM SIZE", value: "6 Students", note: "Min. 1 female member mandatory as per SIH guidelines" },
    { label: "PROBLEM STATEMENTS", value: "[XX] Available", note: "Sourced directly from Union Ministries & Industry" },
    { label: "VENUE", value: "[VENUE]", note: "RRGI Campus Auditorium & Innovation Block" },
    { label: "EVENT DATE", value: "[EVENT DATE]", note: "36-Hour continuous internal sprint" }
  ],

  // 5 Concise Why Participate Points
  whyParticipate: [
    {
      step: "01",
      title: "Solve Real Problems",
      description: "Tackle problem statements submitted directly by Government Ministries, State Depts, and public enterprises.",
      icon: "ShieldAlert"
    },
    {
      step: "02",
      title: "Build Real Solutions",
      description: "Develop working software models and functional hardware prototypes with your multidisciplinary team.",
      icon: "Cpu"
    },
    {
      step: "03",
      title: "Work With Your Team",
      description: "Collaborate closely with peers across engineering and technology departments at RRGI.",
      icon: "Users"
    },
    {
      step: "04",
      title: "Learn From Mentors",
      description: "Receive direct guidance, code reviews, and architecture feedback from senior faculty and tech mentors.",
      icon: "Presentation"
    },
    {
      step: "05",
      title: "Institutional Selection",
      description: "Top selected teams will receive official nomination to represent RRGI on the national SIH portal.",
      icon: "Trophy"
    }
  ],

  // Official SIH Themes
  themes: [
    {
      id: "theme-1",
      title: "Smart Automation & Robotics",
      code: "SAR",
      category: "Hardware & Software",
      description: "Autonomous robotics, industrial IoT, drone logistics, and automated vision systems.",
      icon: "Bot",
      psCount: 28,
      gradient: "from-orange-500/20 to-amber-500/5"
    },
    {
      id: "theme-2",
      title: "MedTech, Biotech & Healthcare",
      code: "MBH",
      category: "Software & Hardware",
      description: "AI diagnostics, remote healthcare portals, smart monitors, and medical tech.",
      icon: "Activity",
      psCount: 34,
      gradient: "from-emerald-500/20 to-teal-500/5"
    },
    {
      id: "theme-3",
      title: "Clean & Green Technology",
      code: "CGT",
      category: "Sustainability",
      description: "Waste management AI, carbon footprint tracking, and renewable energy tools.",
      icon: "Leaf",
      psCount: 22,
      gradient: "from-green-500/20 to-emerald-500/5"
    },
    {
      id: "theme-4",
      title: "Agriculture & Rural Tech",
      code: "ART",
      category: "AgriTech",
      description: "Precision farming tools, crop disease detection, smart irrigation & farmer tech.",
      icon: "Sprout",
      psCount: 30,
      gradient: "from-lime-500/20 to-emerald-500/5"
    },
    {
      id: "theme-5",
      title: "Blockchain & Cybersecurity",
      code: "BCS",
      category: "Security",
      description: "Zero-trust architectures, tamper-proof credential verification & threat defense.",
      icon: "Lock",
      psCount: 19,
      gradient: "from-blue-500/20 to-indigo-500/5"
    },
    {
      id: "theme-6",
      title: "Smart Vehicles & Mobility",
      code: "SVM",
      category: "Automotive & EV",
      description: "EV battery telemetry, intelligent traffic monitoring & vehicle safety systems.",
      icon: "Zap",
      psCount: 25,
      gradient: "from-amber-500/20 to-orange-500/5"
    },
    {
      id: "theme-7",
      title: "Smart Education & EdTech",
      code: "SEE",
      category: "Education",
      description: "Personalized learning assistants, regional language tools & inclusive education.",
      icon: "GraduationCap",
      psCount: 31,
      gradient: "from-cyan-500/20 to-blue-500/5"
    },
    {
      id: "theme-8",
      title: "Disaster Management & Safety",
      code: "DMS",
      category: "Resilience",
      description: "Early warning warning networks, flood mapping AI, and emergency communication gear.",
      icon: "ShieldCheck",
      psCount: 18,
      gradient: "from-red-500/20 to-orange-500/5"
    }
  ] as SIHTheme[],

  // Configurable Problem Statements
  problemStatements: [
    {
      id: "ps-1",
      psCode: "SIH1620",
      title: "AI-Powered Real-Time Traffic Congestion & Emergency Dispatch",
      organization: "Ministry of Road Transport & Highways",
      category: "Software",
      theme: "Smart Vehicles & Mobility",
      complexity: "Advanced",
      description: "Computer vision system that analyzes city traffic feeds to dynamically adjust signals and clear green corridors for emergency vehicles.",
      impact: "Reduces emergency response times in urban zones.",
      techStack: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "React"]
    },
    {
      id: "ps-2",
      psCode: "SIH1645",
      title: "Early Plant Disease Identification via Edge AI & Drone Imagery",
      organization: "Ministry of Agriculture & Farmers Welfare",
      category: "Hardware",
      theme: "Agriculture & Rural Tech",
      complexity: "Intermediate",
      description: "Portable IoT edge device capturing leaf imagery and detecting fungal pathogens offline without requiring active internet connection.",
      impact: "Prevents crop damage for smallholder farmers.",
      techStack: ["Raspberry Pi", "TensorFlow Lite", "Embedded C++", "Flutter"]
    },
    {
      id: "ps-3",
      psCode: "SIH1702",
      title: "Blockchain Academic Marksheet & Credential Verification Portal",
      organization: "AICTE / Ministry of Education",
      category: "Software",
      theme: "Blockchain & Cybersecurity",
      complexity: "Advanced",
      description: "Decentralized credential issuing and verification platform for instant QR-code validation of academic certificates.",
      impact: "Eliminates fraudulent academic degree certificates.",
      techStack: ["Solidity", "Polygon", "IPFS", "Node.js", "React"]
    },
    {
      id: "ps-4",
      psCode: "SIH1755",
      title: "Autonomous Waste Sorting Robotic Arm with Vision Sensors",
      organization: "Ministry of Housing & Urban Affairs",
      category: "Hardware",
      theme: "Clean & Green Technology",
      complexity: "Advanced",
      description: "Robotic manipulator capable of segregating recyclable plastics, metals, and organic waste on conveyor lines.",
      impact: "Improves municipal recycling efficiency and worker safety.",
      techStack: ["ROS2", "OpenCV", "PyTorch", "Arduino", "3D Printing"]
    }
  ] as ProblemStatement[],

  // Minimal Hackathon Process (Connected visual stepper)
  process: [
    { step: "01", name: "Register", desc: "Form a team of 6 RRGI students with min. 1 female member." },
    { step: "02", name: "Form Team", desc: "Finalize team roles, leader, and multidisciplinary members." },
    { step: "03", name: "Choose Problem", desc: "Browse official SIH problem statements and pick your challenge." },
    { step: "04", name: "Develop Solution", desc: "Prepare your solution proposal presentation and technical architecture." },
    { step: "05", name: "Present", desc: "Demonstrate your working prototype before internal evaluators." },
    { step: "06", name: "Evaluation", desc: "Jury scores projects on novelty, feasibility, tech stack, and impact." },
    { step: "07", name: "Selection", desc: "Top selected RRGI teams advance to national SIH portal nomination." }
  ],

  // Clean Timeline
  timeline: [
    {
      id: "t-1",
      phase: "Phase 1: Registration",
      title: "Registration Opens",
      date: "[REGISTRATION START DATE]",
      time: "10:00 AM",
      description: "Internal registration portal opens for all RRGI departments.",
      status: "completed"
    },
    {
      id: "t-2",
      phase: "Phase 1: Registration",
      title: "Idea / PS Submission Deadline",
      date: "[SUBMISSION DEADLINE]",
      time: "11:59 PM",
      description: "Deadline for submitting team details and 1-page solution abstract.",
      status: "active"
    },
    {
      id: "t-3",
      phase: "Phase 2: Screening",
      title: "Internal Shortlisting Announcement",
      date: "[SCREENING DATE]",
      time: "05:00 PM",
      description: "Shortlisted teams announced for the continuous build sprint.",
      status: "upcoming"
    },
    {
      id: "t-4",
      phase: "Phase 3: Hackathon Day",
      title: "Internal Hackathon Kickoff & Sprint",
      date: "[HACKATHON DATE]",
      time: "09:00 AM",
      description: "Build sprint begins on campus with live coding and mentor reviews.",
      status: "upcoming"
    },
    {
      id: "t-5",
      phase: "Phase 4: Evaluation",
      title: "Jury Presentation & Selection",
      date: "[EVALUATION DATE]",
      time: "02:00 PM",
      description: "Live prototype demo before evaluation panel and valedictory announcement.",
      status: "upcoming"
    }
  ] as TimelineEvent[],

  // Rich Editorial Gallery Data
  gallery: [
    {
      id: "g-1",
      title: "Continuous 36-Hour Hackathon Sprint",
      category: "Coding & Building",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      aspect: "col-span-1 md:col-span-2 row-span-2",
      description: "RRGI student teams collaborating overnight in the main innovation block."
    },
    {
      id: "g-2",
      title: "Hardware Prototype Assembly & Testing",
      category: "Robotics & IoT",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      aspect: "col-span-1 row-span-1",
      description: "IoT sensor nodes and robotic arms built for agricultural and municipal challenges."
    },
    {
      id: "g-3",
      title: "Internal Jury Evaluation & Demo Pitch",
      category: "Judging Round",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      aspect: "col-span-1 row-span-1",
      description: "Teams presenting system architecture and live working models to evaluators."
    },
    {
      id: "g-4",
      title: "Faculty Mentorship & Architecture Review",
      category: "Mentorship",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      aspect: "col-span-1 row-span-1",
      description: "Expert faculty mentors providing 1-on-1 guidance on software stack and database schema."
    },
    {
      id: "g-5",
      title: "Auditorium Opening Ceremony & Keynote",
      category: "Event Ceremony",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      aspect: "col-span-1 md:col-span-2 row-span-1",
      description: "Principal and SIH SPOC addressing participants during the inauguration ceremony."
    },
    {
      id: "g-6",
      title: "Valedictory & Institutional Winner Announcement",
      category: "Awards",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      aspect: "col-span-1 row-span-1",
      description: "Top selected teams receiving official SIH 2026 nomination certificates."
    }
  ],

  // Structured Organizing Team (Leadership & Students)
  organizingTeam: {
    leadership: [
      {
        id: "ot-1",
        name: "Dr. [SIH SPOC NAME]",
        role: "SIH Single Point of Contact (SPOC)",
        category: "SPOC",
        designation: "Professor & Head of Department",
        department: "Dept. of Computer Science & Engineering",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
        bio: "Overseeing institutional SIH 2026 execution, portal nominations, and jury evaluation."
      },
      {
        id: "ot-2",
        name: "Prof. [FACULTY CONVENER]",
        role: "Faculty Convener & IIC Lead",
        category: "Faculty Coordinator",
        designation: "Associate Professor",
        department: "Dept. of Information Technology",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
        bio: "Managing mentor allocation, venue logistics, and institutional R&D support."
      }
    ],
    faculty: [
      {
        id: "ot-3",
        name: "Dr. [CO-CONVENER NAME]",
        role: "Faculty Co-Convener",
        category: "Faculty Coordinator",
        designation: "Associate Professor",
        department: "Dept. of Artificial Intelligence & DS",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "ot-4",
        name: "Prof. [TECH EVALUATOR]",
        role: "Technical Evaluation Lead",
        category: "Faculty Coordinator",
        designation: "Assistant Professor",
        department: "Dept. of Computer Science & Engg",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
      }
    ],
    students: [
      {
        id: "ot-5",
        name: "[STUDENT OVERALL LEAD]",
        role: "Student Overall Coordinator",
        category: "Student Organizer",
        designation: "Lead Student Organizer",
        department: "RRGI Student Developer Community",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "ot-6",
        name: "[TECHNICAL LEAD 1]",
        role: "Technical Lead",
        category: "Student Organizer",
        designation: "Pre-Final Year CSE",
        department: "Portal & Infrastructure Lead",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "ot-7",
        name: "[LOGISTICS LEAD]",
        role: "Logistics Coordinator",
        category: "Student Organizer",
        designation: "Pre-Final Year IT",
        department: "Event Management Team",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },

  // 5–7 Concise FAQs
  faq: [
    {
      id: "faq-1",
      category: "General",
      question: "What is the Internal Smart India Hackathon at RRGI?",
      answer: "The Internal SIH is RRGI's mandatory campus-level hackathon. It evaluates and shortlists student teams to represent RRGI on the national Smart India Hackathon portal."
    },
    {
      id: "faq-2",
      category: "Registration",
      question: "Who can participate?",
      answer: "All regular full-time undergraduate and postgraduate students across departments at RRGI are eligible to participate."
    },
    {
      id: "faq-3",
      category: "Registration",
      question: "How many students can form a team?",
      answer: "Each team must consist of exactly 6 members from RRGI. As per official SIH guidelines, at least 1 female team member is mandatory in every team."
    },
    {
      id: "faq-4",
      category: "Problem Statements",
      question: "How do we select a problem statement?",
      answer: "Browse the problem statements listed on this portal or the official SIH portal, select your challenge, and prepare your solution presentation using the prescribed SIH PPT template."
    },
    {
      id: "faq-5",
      category: "Evaluation",
      question: "How will teams be evaluated?",
      answer: "Projects are evaluated on: (1) Novelty & Originality (2) Technical Architecture (3) Prototype Functionality (4) Real-World Impact (5) Final Pitch Quality."
    },
    {
      id: "faq-6",
      category: "General",
      question: "What happens after the internal hackathon?",
      answer: "Top selected teams will be officially nominated by RRGI's SIH SPOC on the National SIH Portal for the National Grand Finale."
    }
  ] as FAQItem[]
};
