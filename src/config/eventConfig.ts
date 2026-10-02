import sihLogo from '../assets/logos/sih-logo-provided.png';
import collegeLogo from '../assets/logos/rrgi-logo-provided.png';
import moeLogo from '../assets/logos/moe-logo.svg';
import aicteLogo from '../assets/logos/aicte-logo.svg';
import iicLogo from '../assets/logos/iic-logo.svg';

export interface StatItem {
  id: string;
  label: string;
  value: string;
  subtext: string;
  icon: string;
}

export interface JourneyStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  teamName: string;
  category: 'Software' | 'Hardware' | 'IoT / Embedded';
  domain: string;
  description: string;
  techStack: string[];
  teamMembers?: string[];
  image: string;
  isFeatured?: boolean;
}

export interface WinnerItem {
  position: '1st' | '2nd' | '3rd' | 'Special';
  title: string;
  teamName: string;
  projectTitle: string;
  category: string;
  prize?: string;
  description: string;
  members: string[];
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Leadership' | 'Judge' | 'Faculty' | 'Student';
  designation: string;
  department?: string;
  image: string;
  bio?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
  description?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const EVENT_CONFIG = {
  collegeName: "RRGI",
  collegeFullName: "R.R. Group of Institutions",
  collegeTagline: "Center for Innovation, Research & Entrepreneurship",
  eventName: "Smart India Hackathon",
  eventEdition: "Internal Smart India Hackathon 2026",
  year: "2026",
  subtitle: "Digital Event Showcase & Archive",
  
  eventDate: "[EVENT DATE]",
  venue: "RRGI Campus Auditorium & Innovation Block",
  contactEmail: "[CONTACT EMAIL]",
  phone: "[PHONE NUMBER]",

  logos: {
    sih: sihLogo,
    college: collegeLogo,
    moe: moeLogo,
    aicte: aicteLogo,
    iic: iicLogo,
  },

  // Key Event Metrics (Using real structure with clean placeholders)
  stats: [
    {
      id: "stat-1",
      label: "TOTAL PARTICIPANTS",
      value: "[XX]",
      subtext: "Student Innovators Across Departments",
      icon: "Users"
    },
    {
      id: "stat-2",
      label: "TEAMS PARTICIPATED",
      value: "[XX]",
      subtext: "Multidisciplinary 6-Member Teams",
      icon: "ShieldCheck"
    },
    {
      id: "stat-3",
      label: "PROJECTS SHOWCASED",
      value: "[XX]",
      subtext: "Software & Hardware Prototypes",
      icon: "Cpu"
    },
    {
      id: "stat-4",
      label: "NATIONAL NOMINEES",
      value: "[XX]",
      subtext: "Selected for National SIH Portal",
      icon: "Trophy"
    }
  ] as StatItem[],

  // Completed Hackathon Journey
  journey: [
    {
      step: "01",
      title: "IDEATION & SELECTION",
      subtitle: "Challenge Mapping",
      description: "Student teams analyzed national problem statements and formulated innovation blueprints.",
      icon: "Lightbulb"
    },
    {
      step: "02",
      title: "TEAM FORMATION",
      subtitle: "Cross-Disciplinary Unity",
      description: "Assembled 6-member teams incorporating diverse engineering departments and mandatory female leadership.",
      icon: "Users"
    },
    {
      step: "03",
      title: "INTERNAL SCREENING",
      subtitle: "Proposal Abstract Review",
      description: "Panel of faculty evaluators screened initial solution architectures for technical feasibility.",
      icon: "FileSearch"
    },
    {
      step: "04",
      title: "MENTORSHIP SPRINT",
      subtitle: "1-on-1 Guidance",
      description: "Expert mentors provided live feedback on database design, hardware wiring, and algorithmic efficiency.",
      icon: "Presentation"
    },
    {
      step: "05",
      title: "CONTINUOUS PROTOTYPING",
      subtitle: "36-Hour Build Phase",
      description: "Intensive hands-on sprint at the RRGI Innovation Block creating working software and physical models.",
      icon: "Code"
    },
    {
      step: "06",
      title: "JURY EVALUATION",
      subtitle: "Live System Demos",
      description: "Distinguished judges evaluated functioning prototypes on innovation, impact, and technical execution.",
      icon: "CheckCircle2"
    },
    {
      step: "07",
      title: "RECOGNITION & NOMINATION",
      subtitle: "Valedictory Awards",
      description: "Top winning teams were recognized and officially nominated to the National SIH 2026 Portal.",
      icon: "Trophy"
    }
  ] as JourneyStage[],

  // Innovation Showcase Projects
  projects: [
    {
      id: "proj-1",
      title: "[AI TRAFFIC CONGESTION & EMERGENCY DISPATCH]",
      teamName: "Team [ALPHA INNOVATORS]",
      category: "Software",
      domain: "Smart Vehicles & Mobility",
      description: "Computer vision and edge AI telemetry system designed to dynamically adjust urban signal timers and clear green corridors for emergency response vehicles.",
      techStack: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "React"],
      teamMembers: ["Member 1 (Lead)", "Member 2", "Member 3", "Member 4", "Member 5", "Member 6"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      isFeatured: true
    },
    {
      id: "proj-2",
      title: "[OFFLINE EDGE-AI PLANT DISEASE DETECTOR]",
      teamName: "Team [AGRI-TECH LABS]",
      category: "Hardware",
      domain: "Agriculture & Rural Tech",
      description: "Portable IoT edge camera system running lightweight neural networks to detect crop leaf blights offline in remote farmlands.",
      techStack: ["Raspberry Pi", "TensorFlow Lite", "Embedded C++", "Flutter"],
      teamMembers: ["Member 1 (Lead)", "Member 2", "Member 3", "Member 4", "Member 5", "Member 6"],
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      isFeatured: false
    },
    {
      id: "proj-3",
      title: "[BLOCKCHAIN MARKSHEET VERIFICATION SYSTEM]",
      teamName: "Team [CYBER SHIELD]",
      category: "Software",
      domain: "Blockchain & Security",
      description: "Decentralized document verification registry allowing instant QR-based validation of academic credentials to prevent certificate forgery.",
      techStack: ["Solidity", "Polygon", "IPFS", "Node.js", "React"],
      teamMembers: ["Member 1 (Lead)", "Member 2", "Member 3", "Member 4", "Member 5", "Member 6"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      isFeatured: false
    },
    {
      id: "proj-4",
      title: "[AUTONOMOUS WASTE SEGREGATION ROBOTIC ARM]",
      teamName: "Team [ROBO MATICS]",
      category: "Hardware",
      domain: "Clean & Green Tech",
      description: "Robotic arm integrated with optical spectral sensors to classify and sort recyclable plastics, metals, and organic municipal waste.",
      techStack: ["ROS2", "OpenCV", "PyTorch", "Arduino", "3D Modeling"],
      teamMembers: ["Member 1 (Lead)", "Member 2", "Member 3", "Member 4", "Member 5", "Member 6"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      isFeatured: false
    }
  ] as ShowcaseProject[],

  // Winners Podium Data
  winners: [
    {
      position: "1st",
      title: "FIRST PLACE WINNER",
      teamName: "Team [TEAM NAME 1]",
      projectTitle: "[PROJECT TITLE 1]",
      category: "Software / Hardware",
      prize: "Official SIH 2026 National Nomination",
      description: "Awarded 1st place for outstanding technical innovation, working prototype demonstration, and high real-world impact.",
      members: ["Lead: [STUDENT NAME]", "Member: [STUDENT NAME]", "Member: [STUDENT NAME]", "Member: [STUDENT NAME]", "Member: [STUDENT NAME]", "Member: [STUDENT NAME]"],
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
    },
    {
      position: "2nd",
      title: "SECOND PLACE WINNER",
      teamName: "Team [TEAM NAME 2]",
      projectTitle: "[PROJECT TITLE 2]",
      category: "Software / Hardware",
      prize: "Official SIH 2026 National Nomination",
      description: "Recognized for exemplary prototype performance and practical engineering implementation during the sprint.",
      members: ["Lead: [STUDENT NAME]", "Member: [STUDENT NAME]", "Member: [STUDENT NAME]", "Member: [STUDENT NAME]", "Member: [STUDENT NAME]", "Member: [STUDENT NAME]"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    {
      position: "3rd",
      title: "THIRD PLACE WINNER",
      teamName: "Team [TEAM NAME 3]",
      projectTitle: "[PROJECT TITLE 3]",
      category: "Software / Hardware",
      prize: "Official SIH 2026 National Nomination",
      description: "Secured third place with an impressive demonstration of problem-solving rigor and system reliability.",
      members: ["Lead: [STUDENT NAME]", "Member: [STUDENT NAME]", "Member: [STUDENT NAME]", "Member: [STUDENT NAME]", "Member: [STUDENT NAME]", "Member: [STUDENT NAME]"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    },
    {
      position: "Special",
      title: "BEST HARDWARE INNOVATION",
      teamName: "Team [TEAM NAME 4]",
      projectTitle: "[SPECIAL PROJECT TITLE]",
      category: "Hardware & IoT",
      prize: "Special Jury Recognition",
      description: "Awarded special jury recognition for best hardware prototype assembly and physical integration.",
      members: ["Lead: [STUDENT NAME]", "Member: [STUDENT NAME]", "Member: [STUDENT NAME]"],
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    }
  ] as WinnerItem[],

  // Event Team & Leadership
  team: {
    leadership: [
      {
        id: "t-1",
        name: "[SPOC NAME]",
        role: "SIH Single Point of Contact (SPOC)",
        category: "Leadership",
        designation: "Professor & Head of Department",
        department: "Department of Computer Science & Engineering",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
        bio: "Led overall institutional SIH 2026 execution, jury panel coordination, and portal candidate nominations."
      },
      {
        id: "t-2",
        name: "[FACULTY CONVENER NAME]",
        role: "Faculty Convener & IIC Lead",
        category: "Leadership",
        designation: "Associate Professor",
        department: "Department of Information Technology",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
        bio: "Managed technical mentoring logistics, venue infrastructure, and internal evaluation standards."
      }
    ],
    judges: [
      {
        id: "t-3",
        name: "[JUDGE NAME 1]",
        role: "External Technical Judge",
        category: "Judge",
        designation: "Industry Principal Architect",
        department: "Technology Evaluation Jury",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "t-4",
        name: "[JUDGE NAME 2]",
        role: "Academic Evaluator",
        category: "Judge",
        designation: "Senior Research Fellow",
        department: "Innovation & R&D Cell",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
      }
    ],
    faculty: [
      {
        id: "t-5",
        name: "[FACULTY MENTOR 1]",
        role: "Software Track Mentor",
        category: "Faculty",
        designation: "Assistant Professor",
        department: "Dept. of Computer Science & Engineering",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "t-6",
        name: "[FACULTY MENTOR 2]",
        role: "Hardware & Robotics Mentor",
        category: "Faculty",
        designation: "Associate Professor",
        department: "Dept. of Electrical & Electronics Engg",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
      }
    ],
    students: [
      {
        id: "t-7",
        name: "[STUDENT COORDINATOR 1]",
        role: "Overall Student Convener",
        category: "Student",
        designation: "Final Year Student Leader",
        department: "RRGI Student Innovation Club",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "t-8",
        name: "[STUDENT COORDINATOR 2]",
        role: "Technical Operations Lead",
        category: "Student",
        designation: "Pre-Final Year CSE",
        department: "Event Management & Portal Lead",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },

  // Event Gallery
  gallery: [
    {
      id: "g-1",
      title: "36-Hour Innovation Build Sprint",
      category: "Coding & Prototyping",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      aspect: "col-span-1 md:col-span-2 row-span-2",
      description: "RRGI student teams collaborating during the overnight build phase in the Innovation Block."
    },
    {
      id: "g-2",
      title: "Hardware & Robotics Assembly",
      category: "Hardware Track",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      aspect: "col-span-1 row-span-1",
      description: "Microcontroller wiring, sensor calibration, and prototype assembly by engineering teams."
    },
    {
      id: "g-3",
      title: "Jury Demonstration & Prototype Pitch",
      category: "Evaluation Round",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      aspect: "col-span-1 row-span-1",
      description: "Teams presenting system architecture and functioning models before external judges."
    },
    {
      id: "g-4",
      title: "Faculty Mentorship & Guidance",
      category: "Mentorship",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      aspect: "col-span-1 row-span-1",
      description: "Senior faculty mentors conducting 1-on-1 code reviews and architecture refinements."
    },
    {
      id: "g-5",
      title: "Inaugural Session & Keynote Address",
      category: "Event Ceremony",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      aspect: "col-span-1 md:col-span-2 row-span-1",
      description: "Opening ceremony at RRGI Auditorium marking the official launch of Internal SIH 2026."
    },
    {
      id: "g-6",
      title: "Valedictory Awards & National Nomination",
      category: "Winners Ceremony",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      aspect: "col-span-1 row-span-1",
      description: "Top winning teams receiving official SIH 2026 nomination certificates and honors."
    }
  ] as GalleryItem[],

  // Post-Event FAQ (No registration questions!)
  faq: [
    {
      id: "faq-1",
      question: "What was the Internal Smart India Hackathon 2026 at RRGI?",
      answer: "Internal SIH 2026 was RRGI's official campus hackathon organized under MoE and AICTE guidelines to evaluate, shortlist, and nominate top student innovation teams for the National Smart India Hackathon 2026."
    },
    {
      id: "faq-2",
      question: "How were projects evaluated during the event?",
      answer: "Solutions were evaluated by a panel of judges on four primary criteria: (1) Technical Novelty & Originality, (2) Prototype Functionality, (3) Feasibility & Real-World Impact, and (4) Quality of Pitch & Presentation."
    },
    {
      id: "faq-3",
      question: "What is the next milestone for selected winning teams?",
      answer: "Top winning teams identified during this internal edition have been officially nominated by RRGI's SIH SPOC on the National SIH Portal to compete in the National Grand Finale."
    },
    {
      id: "faq-4",
      question: "Who organized and coordinated the event at RRGI?",
      answer: "The event was organized by RRGI's Institution's Innovation Council (IIC) and R&D Cell under the leadership of the SIH SPOC, faculty conveners, and student coordinators."
    }
  ] as FAQItem[]
};
