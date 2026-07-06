export const personalInfo = {
  name: "Srikriti Mutyala",
  title: "CS & Statistics @ UIUC",
  subTitle: "Hey, I'm Srikriti 👋",
  role: "Researching ML & Building Intelligent Systems",
  avatar: "/bitmoji.png",
  headshot: "/headshot.png",
  email: "mutyalasrikriti2006@gmail.com",
  linkedin: "https://linkedin.com/in/srikriti-mutyala",
  github: "https://github.com/srikritimutyala",
  bio: "I am a student at the University of Illinois Urbana-Champaign (UIUC) dual majoring in Computer Science and Statistics. I'm passionate about Artificial Intelligence, Machine Learning, and Computer Vision, specifically building accessibility platforms and data-driven behavioral health interventions. I thrive at the intersection of rigorous data analysis and full-stack software development.",
};

export const skills = {
  languages: [
    { name: "Python", icon: "devicon-python-plain" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "C++", icon: "devicon-cplusplus-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "Swift", icon: "devicon-swift-plain" },
    { name: "SQL", icon: "devicon-postgresql-plain" },
    { name: "HTML5/CSS3", icon: "devicon-html5-plain" },
  ],
  frameworks: [
    { name: "React / Next.js", icon: "devicon-react-original" },
    { name: "Node.js / Express", icon: "devicon-nodejs-plain" },
    { name: "Flask / Python Web", icon: "devicon-flask-original" },
    { name: "TensorFlow / Keras", icon: "devicon-tensorflow-line" },
    { name: "OpenCV", icon: "devicon-opencv-plain" },
    { name: "MediaPipe", icon: "devicon-google-plain" },
    { name: "YOLOv8", icon: "devicon-python-plain" },
    { name: "scikit-learn", icon: "devicon-python-plain" },
    { name: "Streamlit", icon: "devicon-python-plain" },
  ],
  tools: [
    { name: "Docker", icon: "devicon-docker-plain" },
    { name: "Cloudflare Workers", icon: "devicon-cloudflare-plain" },
    { name: "GitHub Actions", icon: "devicon-github-original" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "Vercel / Hosting", icon: "devicon-vercel-original" },
  ]
};

export const experiences = [
  {
    id: 1,
    date: "Feb 2026 – Present",
    role: "Sleep Irregularity Researcher",
    org: "Professor Rabbi's Lab, UIUC",
    logoText: "SRL",
    bullets: [
      "Developed ML workflows creating Fitbit sleep record embeddings for patient pattern recognition.",
      "Built an AI sleep intervention framework leveraging 18 biomarkers and Fitbit data from 54k+ participants.",
      "Analyzed 100+ sleep profiles to build personalized behavioral sleep recommendation systems."
    ]
  },
  {
    id: 2,
    date: "Jan 2026 – Present",
    role: "Undergraduate Researcher (VASTIX)",
    org: "XAbility Lab, UIUC",
    logoText: "XAL",
    bullets: [
      "Deployed a React/Flask accessibility platform for low-vision learners using YOLOv8, OpenCV, and Mistral AI.",
      "Engineered a CV pipeline extracting statistical points of interest from boxplots for tactile rendering.",
      "Built a 3-service system supporting real-time chart analysis, hand tracking, and conversational guidance."
    ]
  },
  {
    id: 3,
    date: "Jan 2025 – Present",
    role: "Project Manager",
    org: "NOBE Illinois",
    logoText: "NOBE",
    bullets: [
      "Managed a team of 6 engineers to deliver a platform serving 120+ members and 10+ executive board members.",
      "Coordinated project execution and roadmap deliverables across biweekly sprints using GitHub tracking.",
      "Directed product strategy, release management, and architecture discussions over a 2-semester lifecycle."
    ]
  },
  {
    id: 4,
    date: "Jan 2025 – Apr 2025",
    role: "Project Manager (SIGAIDA)",
    org: "SIGAIDA at Illinois",
    logoText: "SIGA",
    bullets: [
      "Managed 7 engineers and data scientists coordinating frontend, backend, and ML modeling.",
      "Spearheaded design and architecture discussions for an AI-driven urban analytics platform.",
      "Guided Streamlit and GeoPandas predictive analytics pipeline implementation, achieving 96% accuracy."
    ]
  },
  {
    id: 5,
    date: "Jun 2025 – Jul 2025",
    role: "Student Intern",
    org: "Discover Partners Institute (DPI)",
    logoText: "DPI",
    bullets: [
      "Analyzed 9 urban emissions datasets utilizing Python, Pandas, and scikit-learn.",
      "Built ML pipelines (Random Forest & Neural Networks) to evaluate regional environmental risk factors.",
      "Presented final data analysis findings to community stakeholders at the Google Chicago office."
    ]
  },
  {
    id: 6,
    date: "Jan 2025 – May 2025",
    role: "Assistant Tutor (CA)",
    org: "CS 124 at UIUC",
    logoText: "CS",
    bullets: [
      "Mentored students in Java programming, debugging, and data structures for a 2,000+ student course.",
      "Assisted with grading and provided 1-on-1 technical coaching for project development."
    ]
  },
  {
    id: 7,
    date: "Jun 2021 – Dec 2024",
    role: "Student Instructor",
    org: "Mathnasium",
    logoText: "MATH",
    bullets: [
      "Taught math concepts and designed learning plans for elementary to high school students.",
      "Fostered problem-solving skills and managed classroom progress tracking."
    ]
  }
];

export const projects = [
  {
    title: "NOBE Attendance & Engagement Platform",
    date: "Jan 2025 - Present",
    tag: "Full-Stack & DevOps",
    desc: "Developed a full-stack attendance platform serving 100+ members, automating event tracking and member engagement check-ins.",
    bullets: [
      "Integrated Google OAuth 2.0 and QR check-in workflows with role-based access controls.",
      "Engineered cron-audited attendance and strike systems using Vercel Crons, Resend, and Docker."
    ],
    github: "https://github.com/srikritimutyala/NOBEDevOps",
    img: "/NOBE.png"
  },
  {
    title: "Kuchipudi Hand Gesture Teaching Tool",
    date: "Jul 2025 - Sep 2025",
    tag: "Computer Vision & AI",
    desc: "CNN-based gesture recognition educational system for 31 classical Indian Kuchipudi hand gestures, trained on 3,100+ self-curated images.",
    bullets: [
      "Trained custom CNN gesture classification achieving 93% accuracy across 31 gestures.",
      "Developed real-time CV pipeline using MediaPipe, OpenCV, and Flask for landmark extraction.",
      "Deployed educational web application used by 100+ students for instant feedback."
    ],
    github: "https://github.com/srikritimutyala/mudraappnew",
    img: "/mudras.jpeg"
  },
  {
    title: "AI Self-Writing GitHub Agent",
    date: "Jun 2025 - Present",
    tag: "AI & Serverless",
    desc: "End-to-end autonomous coding agent that detects ready tickets, writes production code using Gemini API, and opens PRs.",
    bullets: [
      "Automatically generates code and opens pull requests when GitHub tickets move to 'Ready'.",
      "Architected serverless workflow using Cloudflare Workers, GitHub Actions, and GraphQL API."
    ],
    github: "https://github.com/srikritimutyala",
    img: "/githubIcon.webp"
  },
  {
    title: "LSTM Stock Forecasting Platform",
    date: "Jan 2025 - Mar 2025",
    tag: "Machine Learning",
    desc: "LSTM-based stock prediction platform trained on 15+ years of market data, achieving 94% forecasting accuracy. Finalist at the Girls Who Code challenge.",
    bullets: [
      "Built ML forecasting pipelines with TensorFlow, Keras, and NumPy.",
      "Designed Streamlit dashboard for financial forecasting, charting, and buy/sell triggers.",
      "Recognized as a Girls Who Code Financial Challenge Finalist."
    ],
    github: "https://github.com/srikritimutyala/PullupCounter",
    img: "/GWC.jpg"
  },
  {
    title: "Samara Crowdfunding Platform",
    date: "Jan 2025 - Mar 2025",
    tag: "Full-Stack Startup",
    desc: "AI-powered crowdfunding platform matching startup founders with investors across 36 compatibility factors.",
    bullets: [
      "Co-founded crowdfunding startup, building founder-investor recommendation algorithms.",
      "Designed Swift/Flask full-stack architecture with MongoDB to support matching networks.",
      "Pitched product prototype and business strategies at the Cozad New Venture Challenge."
    ],
    github: "https://github.com/srikritimutyala",
    img: "/Samara.png"
  },
  {
    title: "HomeDoctors4U Telemedicine",
    date: "Nov 2024 - May 2025",
    tag: "Full-Stack Healthcare",
    desc: "Full-stack telemedicine platform supporting scheduling, video consultations, and secure records for providers and patients.",
    bullets: [
      "Built scheduling, medical records management, and chat features for 25+ users.",
      "Integrated real-time WebRTC video calls and notification portals for healthcare providers."
    ],
    github: "https://github.com/srikritimutyala/handWritingRecognizer",
    img: "/HD4U.png"
  },
  {
    title: "ASL Sign Language Translator",
    date: "Sep 2022 – May 2024",
    tag: "Computer Vision",
    desc: "Built an ASL gesture recognition model utilizing a custom Convolutional Neural Network.",
    bullets: [
      "Achieved 94% accuracy using MediaPipe hand landmark tracking and custom CNN models.",
      "Presented findings at regional STEM fair, earning first place in Computer Science category."
    ],
    github: "https://github.com/skgrabo/ASLProject",
    img: "/CodeADA.png"
  },
  {
    title: "AI Handwriting Recognizer",
    date: "Nov 2024",
    tag: "Machine Learning",
    desc: "Developed a digit and characters handwriting recognizer based on deep learning.",
    bullets: [
      "Designed convolutional neural network layers for custom pattern recognition and image classification.",
      "Integrated interactive canvas workflows for real-time draw-and-predict operations."
    ],
    github: "https://github.com/srikritimutyala/handWritingRecognizer",
    img: "/Handwriting.png"
  },
  {
    title: "AI Pull-up Tracker",
    date: "Dec 2024",
    tag: "Computer Vision",
    desc: "Real-time posture and repetition tracking counter using human pose landmark estimation.",
    bullets: [
      "Extracted human body joints and calculated joint angles dynamically using MediaPipe Pose.",
      "Designed logic to track workout repetitions and provide real-time audio-visual feedback."
    ],
    github: "https://github.com/srikritimutyala/PullupCounter",
    img: "/pullUp.png"
  },
  {
    title: "VASTIX Tactile Plot Guidance",
    date: "Jan 2026 - Present",
    tag: "Human-AI Interaction",
    desc: "AI assistant prototype helping blind or low-vision users explore statistical graphs through tactile interfaces.",
    bullets: [
      "Collaborated with XAbility lab under Professor Keke Wu on low-vision data tools.",
      "Engineered OCR and computer vision pipelines to describe boxplots and data points."
    ],
    github: "https://github.com/xability/ai-statguidance",
    img: "/annotated.png"
  }
];

export const leadershipAndVolunteering = [
  {
    title: "Girls Who Code SIP Ambassador",
    date: "Jul 2025 – Aug 2025",
    org: "Girls Who Code",
    desc: "Delivered Python game development workshops to 20 students, mentoring them on programming fundamentals, debugging, and software design."
  },
  {
    title: "IDC Software Developer",
    date: "Sep 2025 – Dec 2025",
    org: "Illinois Design Challenge",
    desc: "Developed registration and submission systems serving 300+ participants and 50+ teams. Built frontend dashboards and automated onboarding."
  },
  {
    title: "English & Spelling Bee Tutor",
    date: "Apr 2025 – May 2025",
    org: "USKids for Water",
    desc: "Taught English comprehension to rural Tamil Indian children and coordinated a national spelling bee contest to boost literacy."
  },
  {
    title: "Engineering Open House (EOH) Volunteer",
    date: "Apr 2025",
    org: "SIGAIDA at UIUC",
    desc: "Represented SIGAIDA at UIUC's annual showcase. Built and ran an interactive computer vision rafting game to engage younger visitors in coding."
  },
  {
    title: "Trick or Research Presenter",
    date: "Nov 2025",
    org: "UIUC CS Department",
    desc: "Presented research regarding teaching habits in computer science classrooms using automated classroom audio scoring tools."
  },
  {
    title: "CS Stars Scholar",
    date: "Aug 2025 – Dec 2025",
    org: "UIUC CS Stars Program",
    desc: "Selected for a research mentorship program for women in CS. Participated in peer review workshops and matched with a faculty member for research."
  },
  {
    title: "Fermilab Quantum Program",
    date: "Jan 2023 – Mar 2023",
    org: "Fermilab Saturday Morning Physics",
    desc: "Studied quantum physics concepts and networked with professionals in experimental and theoretical physics at Fermi National Accelerator Lab."
  }
];

export const awardsAndActivities = [
  { category: "Leadership Roles", items: ["Badminton Team Captain & State Qualifier", "Math Team Captain & 4x State Qualifier", "Conant Coding Club - Founder & President", "South Asian Student Association (SASA) - Captain"] },
  { category: "Major Honors", items: ["Girls Who Code Financial App Challenge - Finalist", "Illinois State Scholar", "Conant Mathematics Departmental Award", "Presidential Award for Academic Excellence", "NOBE Hackathon Winner", "Girl Con Finalist"] },
  { category: "Talents & Extracurriculars", items: ["Kuchipudi Dance - Classical Indian dancer (4+ public performances)", "Debate Club - Member (4 years)", "Taekwondo - Practicing for 5 years", "Swimming - Competitive swimmer (2 years)"] }
];

export function getChatbotResponse(query) {
  // Normalize punctuation and whitespace for messy inputs
  const q = query.toLowerCase().replace(/[?.,!]/g, "").trim();

  // 1. BASIC IDENTITY / SUMMARY / PROFILE EXPLANATION / EDGE CASES
  // Matches: who is she, tell me about her, summarize, major, year, school, sophomore, freshman, stats, area, different, startup fit, vibe
  if (q.match(/\b(who|major|year|school|college|sophomore|freshman|stats|cs|study|studying|summarize|summary|profile|overview|tell me everything|what should i know|different|vibe|startup|recruit|hire|why)\b/)) {
    return `Srikriti is a **CS & Statistics dual major** at the **University of Illinois Urbana-Champaign (UIUC)**, currently in her **Sophomore** year. 

She specializes in **Machine Learning (specifically Computer Vision)** and **Full-Stack Development**. What makes her different from other CS students is her ability to bridge rigorous statistical modeling (like analyzing Fitbit records or training CNNs) with robust engineering (Docker, serverless architectures, and React).

She is highly autonomous, makes a great teammate, and is a perfect fit for **fast-paced startup environments** where she can own products end-to-end!`;
  }

  // 2. EXPERIENCE DEEP-DIVES
  // Matches: sleep lab, vastix, boxplot, tactile tool, nobe, sigaida, dpi, internship, internships
  if (q.match(/\b(sleep|fitbit|boxplot|tactile|vastix|accessibility|low vision|blind|nobe|sigaida|siga|dpi|partners|intern|internship|internships|research|lab|rabbi|xability)\b/)) {
    return `Srikriti's research and internship experience includes:
    
• **Sleep Irregularity Researcher** at Professor Rabbi’s Lab, UIUC (Feb 2026 – Present): Developing ML workflows with Fitbit sleep data (54,000+ participants) to extract behavioral embeddings and map sleep deficiences.
• **Boxplot Accessibility Researcher (VASTIX)** at XAbility Lab, UIUC (Jan 2026 – Present): Engineering computer vision pipelines (YOLOv8, OpenCV, Mistral AI) to extract points from statistical boxplots and generate tactile representations for low-vision learners.
• **Project Manager** at NOBE Illinois (Jan 2025 – Present): Managing a team of 6 engineers to deliver their full-stack Member Attendance & Engagement Platform.
• **Student Intern** at Discover Partners Institute (DPI) (Jun – Jul 2025): Modeling regional emissions data using Random Forest and Neural Networks, presenting findings at the Google Chicago office.`;
  }

  // 3. PROJECT DEEP-DIVES
  // Matches: github agent, cnn gesture, accuracy, projects, samara, stock forecaster, advanced, built
  if (q.match(/\b(project|projects|built|build|agent|bot|gesture|mudra|accuracy|stock|forecaster|forecasting|samara|homedoctors|telemedicine|advanced|handwriting|pullup)\b/)) {
    return `Srikriti’s advanced projects include:
    
• **Kuchipudi Hand Gesture Teaching Tool**: A computer vision pipeline utilizing MediaPipe, OpenCV, and a custom CNN to classify 31 South Indian dance gestures with **93% accuracy** (trained on 3,100+ images).
• **AI Self-Writing GitHub Agent**: A serverless system (Cloudflare Workers, GitHub Actions, GraphQL API, Gemini API) that automatically writes code and opens PRs for ready tickets.
• **LSTM Stock Forecasting Platform**: Deep learning model built with TensorFlow/Keras achieving **94% forecasting accuracy** (Girls Who Code Challenge Finalist).
• **NOBE Attendance Portal**: A Dockerized full-stack platform serving 100+ members.`;
  }

  // 4. TECHNICAL CURIOSITY / STACKS
  // Matches: yolov8, tensorflow, languages, tech stack, backend, frontend, cv, computer vision, code
  if (q.match(/\b(yolov8|tensorflow|keras|pytorch|opencv|mediapipe|language|languages|tech|stack|backend|frontend|cv|computer vision|code|coding|skills|tool|tools)\b/)) {
    return `Srikriti’s technical toolkit consists of:
    
• **Languages**: Python, Java, JavaScript/TypeScript, Swift, C++, R, SQL, HTML/CSS.
• **ML / CV frameworks**: TensorFlow, Keras, PyTorch, MediaPipe, OpenCV, scikit-learn, GeoPandas, YOLOv8. (e.g., she uses YOLOv8 for detecting graph bounds and MediaPipe for hand/body landmark tracking).
• **Web & DevOps**: React/Next.js, Node.js, Flask, MongoDB, Docker, Cloudflare Workers, GitHub Actions.
• **Capabilities**: Comfortable building custom deep learning classifiers, streaming real-time video processing pipelines, and writing robust backend API services.`;
  }

  // 5. FIT / PERSONALITY / HOBBIES
  // Matches: strengths, teammate, leadership, hobbies, non-cs, crochet, gym, henna, dance
  if (q.match(/\b(strength|strengths|teammate|hobby|hobbies|non-cs|crochet|crocheting|gym|workout|fitness|henna|mehndi|dance|dancing|creative|fun|free time)\b/)) {
    return `Here’s a look at Srikriti outside of pure programming:
    
• **Creative Outlets**: She is an active classical South Indian **Kuchipudi dancer** (performing in 4+ public showcases), designs intricate **henna/mehndi**, and loves **crocheting amigurumi**.
• **Wellness**: She stays active with daily strength training at the **gym** (and even built an AI Pull-up Pose Tracker to count reps!).
• **Leadership Strengths**: She has led multiple projects (NOBE, SIGAIDA) and served as Badminton Team Captain, Math Team Captain, and Coding Club President.`;
  }

  // 6. UTILITY / NAVIGATION / SITE SEARCH
  // Matches: resume, cv, contact, awards, linkedin, github, email, reach, mail, call
  if (q.match(/\b(resume|cv|pdf|contact|award|awards|linkedin|github|email|gmail|reach|social|socials|mail|form)\b/)) {
    return `Here are the quick links you need:
    
• **Resume**: You can download her resume using the **Download Resume** button in the Hero section at the top of the site.
• **Socials**: Connect on [LinkedIn](https://linkedin.com/in/srikriti-mutyala) or explore her repositories on [GitHub](https://github.com/srikritimutyala).
• **Email**: Reach out directly at [mutyalasrikriti2006@gmail.com](mailto:mutyalasrikriti2006@gmail.com).
• **Contact Form**: You can scroll to the bottom of the landing page to fill out the direct Contact form!`;
  }

  // 7. STRICT FALLBACK (System prompt rule)
  return `I don’t have that information in Srikriti’s portfolio, but I can tell you about her projects, research, or experience instead.`;
}
