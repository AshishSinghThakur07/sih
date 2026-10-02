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
  /** Optional photo shown behind the panel, e.g. "/journey/01-ideation.jpg" (file lives in /public/journey). */
  image?: string;
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
  /** CSS object-position for the photo crop, e.g. "50% 75%" to keep faces in frame. */
  imagePosition?: string;
  isFeatured?: boolean;
}

export interface WinnerItem {
  position: '1st' | '2nd' | '3rd';
  title: string;
  teamName: string;
  /** Registration ID, e.g. "RRGI-43". */
  teamId: string;
  /** Year of study, e.g. "2nd Year". */
  year: string;
  members: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  /** Event role, shown as the highlighted label. */
  role: string;
  /** Position at the institution. */
  designation: string;
  /** Optional portrait, e.g. "/team/spoc.jpg" (file lives in /public/team). Falls back to initials. */
  image?: string;
}

export interface StudentVolunteers {
  title: string;
  count: string;
  description: string;
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

  // Key Event Metrics
  stats: [
    {
      id: "stat-1",
      label: "TOTAL PARTICIPANTS",
      value: "400+",
      subtext: "Student Innovators Across Departments",
      icon: "Users"
    },
    {
      id: "stat-2",
      label: "TEAMS PARTICIPATED",
      value: "70+",
      subtext: "Multidisciplinary 6-Member Teams",
      icon: "ShieldCheck"
    },
    {
      id: "stat-3",
      label: "PROJECTS SHOWCASED",
      value: "50+",
      subtext: "Hardware & Simulator Projects",
      icon: "Cpu"
    }
  ] as StatItem[],

  // Completed Hackathon Journey
  journey: [
    {
      step: "01",
      title: "IDEATION & TEAMS",
      subtitle: "Challenge Mapping",
      description: "Student teams analyzed national problem statements, formed 6-member cross-disciplinary teams and formulated innovation blueprints.",
      icon: "Lightbulb"
    },
    {
      step: "02",
      title: "INTERNAL SCREENING",
      subtitle: "Abstract Review",
      description: "Panel of faculty evaluators screened initial solution architectures for technical feasibility.",
      icon: "ClipboardCheck"
    },
    {
      step: "03",
      title: "MENTORSHIP & BUILD",
      subtitle: "36-Hour Sprint",
      description: "Expert mentors guided teams through an intensive hands-on build at the RRGI Innovation Block, creating working software and physical models.",
      icon: "Cpu"
    },
    {
      step: "04",
      title: "JURY EVALUATION",
      subtitle: "Live System Demos",
      description: "Distinguished judges evaluated functioning prototypes on innovation, impact, and technical execution.",
      icon: "Gavel"
    },
    {
      step: "05",
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
      title: "[DRONE SIMULATOR]",
      teamName: "Team [TEAM NAME]",
      category: "Hardware",
      domain: "Drones & Simulation",
      description: "[One or two lines on what the drone simulator does and what the team built.]",
      techStack: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
      teamMembers: ["Member 1 (Lead)", "Member 2", "Member 3", "Member 4"],
      image: "/projects/drone-team.jpg",
      imagePosition: "50% 30%",
      isFeatured: true
    },
    {
      id: "proj-2",
      title: "[HARDWARE PROJECT 2]",
      teamName: "Team [TEAM NAME]",
      category: "Hardware",
      domain: "[Domain]",
      description: "[Short description of the project.]",
      techStack: ["[Tech 1]", "[Tech 2]"],
      teamMembers: ["Member 1 (Lead)", "Member 2", "Member 3", "Member 4"],
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      isFeatured: false
    },
    {
      id: "proj-3",
      title: "[HARDWARE PROJECT 3]",
      teamName: "Team [TEAM NAME]",
      category: "Hardware",
      domain: "[Domain]",
      description: "[Short description of the project.]",
      techStack: ["[Tech 1]", "[Tech 2]"],
      teamMembers: ["Member 1 (Lead)", "Member 2", "Member 3", "Member 4"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      isFeatured: false
    },
    {
      id: "proj-4",
      title: "[HARDWARE PROJECT 4]",
      teamName: "Team [TEAM NAME]",
      category: "Hardware",
      domain: "[Domain]",
      description: "[Short description of the project.]",
      techStack: ["[Tech 1]", "[Tech 2]"],
      teamMembers: ["Member 1 (Lead)", "Member 2", "Member 3", "Member 4"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      isFeatured: false
    }
  ] as ShowcaseProject[],

  // Winners Podium Data
  winners: [
    {
      position: "1st",
      title: "FIRST PLACE",
      teamName: "Tech Titans",
      teamId: "RRGI-43",
      year: "2nd Year",
      members: ["Arpit Singh", "Aman Gupta", "Shailendra Singh", "Akash Pandey", "Nancy Singh", "Kuldeep Pandey"]
    },
    {
      position: "2nd",
      title: "SECOND PLACE",
      teamName: "The Rangers",
      teamId: "RRGI-02",
      year: "4th Year",
      members: ["Anshika Singh", "Muskan Gupta", "Kashish Keshari", "Faisal Ali", "Ayan Ahmed Mansoori", "Saumya Gupta"]
    },
    {
      position: "3rd",
      title: "THIRD PLACE",
      teamName: "Variants",
      teamId: "RRGI-13",
      year: "3rd Year",
      members: ["Sunny Pandey", "Ansh Asthana", "Yogesh Vishwakarma", "Priyanshu Shukla", "Arthik Dwivedi", "Praveshika Singh"]
    }
  ] as WinnerItem[],

  // Organizing Team
  team: {
    leaders: [
      {
        id: "t-1",
        name: "Ms. Aarti Jaiswal",
        role: "SIH SPOC",
        designation: "Dean – Training & Placement"
      },
      {
        id: "t-2",
        name: "Harendra Kr. Prajapati",
        role: "Hackathon Advisor & Event Head",
        designation: "Event Head – Internal SIH 2026"
      },
      {
        id: "t-3",
        name: "Anurag Pandey",
        role: "HOD – Training & Placement",
        designation: "Head of Department"
      }
    ] as TeamMember[],
    students: {
      title: "STUDENT VOLUNTEERS",
      count: "[XX]+",
      description: "Student volunteers who ran the event on the ground."
    } as StudentVolunteers
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
