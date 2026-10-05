export const site = {
  resume: "/shristi-sharan-resume.pdf",
  name: "Shristi Sharan",
  url: "https://shristi-gamma.vercel.app",
  title: "Shristi Sharan — Software Engineer, AI/ML & Healthcare AI",
  description:
    "Software Engineer at Google building intelligent systems at scale — production software, applied machine learning and healthcare AI, from distributed data systems and LLM applications to biomedical research.",
  location: "Bengaluru, India",
  email: "shristisharan05@gmail.com",
};

export const links = {
  github: "https://github.com/ShristiSharan",
  linkedin: "https://www.linkedin.com/in/shristi-sharan-605543227/",
  medium: "https://medium.com/@shristisharan05",
};

export const highlights = [
  { value: 80, suffix: "%", label: "less time-to-insight with Gemini ADK agent workflows at Google" },
  { value: 92.74, decimals: 2, suffix: "%", label: "SNOMED CT vaccine-code mapping accuracy, Health AI" },
  { value: 5, suffix: "-stage", label: "sleep classification from raw PPG with a Vision Transformer" },
  { value: 1500, suffix: "+", label: "patient records unified over SMART on FHIR at PostCare.AI" },
];

export const featuredResearch = [
  {
    id: "ppg-vit-net",
    title: "PPG-ViT-NET",
    subtitle: "Vision Transformer-Based Model for Sleep Structure Identification Using Raw Photoplethysmography",
    authors: ["S. Sharan", "A. Choudhary", "H. Telangore", "M. Sharma", "D. Joshi", "M. A. Motin", "U. R. Acharya", "T. Penzel"],
    venue: "IEEE Journal of Biomedical and Health Informatics (JBHI)",
    status: "Under review",
    role: "First author",
    year: "2024",
    area: "Biomedical signals",
    summary:
      "Sleep staging today relies on polysomnography — accurate, but expensive and lab-bound. PPG-ViT-NET classifies all five sleep stages from a single wrist-wearable signal: raw PPG is transformed into wavelet scalograms and read by a Vision Transformer, covering two-, three-, four- and five-stage sleep architecture.",
    points: ["Research at IIT Delhi, Centre for Biomedical Engineering", "Wearable-ready, non-invasive alternative to PSG"],
    tags: ["Vision Transformer", "PPG", "Wavelets", "Sleep medicine"],
    links: [{ label: "Code", href: "https://github.com/ShristiSharan/DSP_Project" }],
    visual: "signal",
  },
  {
    id: "dental-segmentation",
    title: "Joint Teeth Segmentation",
    subtitle:
      "The Automatic Joint Teeth Segmentation in Panoramic Dental Images using Mask Recurrent Convolutional Neural Networks with Residual Feature Extraction: Can it be useful in Oral Cancer Diagnosis and Management?",
    authors: ["R. H. Bhalerao", "A. A. Salunke", "S. Sharan", "K. Kumar"],
    venue: "Swiss Journal of Radiology and Nuclear Medicine, 12(1):5–14",
    status: "Published",
    role: "Co-author",
    year: "Sep 2024",
    area: "Medical imaging",
    summary:
      "Instance segmentation of every tooth in panoramic dental X-rays using Mask R-CNN with residual feature extraction — groundwork for automated dental diagnostics and earlier detection of oral disease, including oral cancer.",
    points: ["With Gujarat Cancer & Research Institute", "Open access · CC BY 4.0"],
    tags: ["Mask R-CNN", "Instance segmentation", "Radiology"],
    links: [{ label: "DOI 10.59667/sjoranm.v12i1.18", href: "https://doi.org/10.59667/sjoranm.v12i1.18" }],
    visual: "arch",
  },
];

export const otherResearch = [
  {
    title: "Image and Shadow Fusion for Precise Bead Orientation Detection in Jewelry-Making Automation",
    area: "Computer vision",
    status: "Published",
  },
  {
    title: "HyperScale Computing Paradigm in Healthcare",
    area: "Book chapter",
    status: "Under review",
  },
  {
    title: "Autonomous Navigation: ROS and SLAM-Empowered Self-Driving Precision with AI/ML Models and Voice Control",
    area: "Robotics",
    status: "Submitted · IEEE conference",
  },
];

export const experience = [
  {
    id: "google",
    company: "Google",
    team: "gTech Ads",
    role: "Ads Solutions Engineer",
    period: "Jul 2025 — Present",
    location: "Bengaluru",
    summary:
      "Building measurement and AI-first tooling for Google Ads — from BigQuery data platforms and RPC-based services to agentic Gemini workflows.",
    points: [
      "Led the launch of a cross-media reach measurement platform and engineered its BigQuery-backed admin console with role-based access control, structured logging and input validation for strict data governance.",
      "Scaled creative-diagnostics and brand-lift / ROI dashboards by integrating Angular frontends with RPC-based distributed backend workflows.",
      "Led the migration of internal tools to Google Cloud for external ads partners, aligning cross-functional teams through PRDs and technical design docs.",
      "Built agentic workflows on Gemini ADK that cut time-to-insight by 80% and automated localized pitch-deck generation across APAC.",
    ],
    sub: {
      label: "Health AI · 20% projects",
      period: "Apr 2026 — Present",
      points: [
        "Genomics agent for DeepVariant — prototyping an assistant that picks the right model for an input, generates DeepVariant commands, diagnoses failed runs and reasons at pileup level about whether a variant call is real, bridging VCF/BAM data and clinical action.",
        "Clinical terminology — a heuristic-priority mapper reaching 92.74% on SNOMED CT vaccine codes (self-built eval set); now building a standardization engine that maps clinical tokens to SNOMED CT and ICD-10, targeting 95%+ confidence.",
      ],
    },
    extra: "Led “GenAI Blueprint — Demystifying LLMs, Multimodal and Agents”, a tech masterclass upskilling peers on modern AI architectures.",
    stack: ["BigQuery", "GCP", "Gemini ADK", "Angular", "RPC", "Java", "Python", "SQL"],
  },
  {
    id: "ixigo",
    company: "ixigo",
    role: "Software Developer Intern (PPO offer)",
    period: "Feb 2025 — Jun 2025",
    location: "Gurugram",
    points: [
      "Built core modules of a scalable CMS that automates travel bookings and content management across ixigo’s platform.",
      "Built the TARA help-bot with NLP-driven automation — 1.5× faster customer query resolution, wired to the CMS for live content.",
      "Engineered real-time backend APIs for instant content refresh, improving system responsiveness by 30%.",
    ],
    stack: ["Node.js", "React", "LangChain", "AWS", "Docker"],
  },
  {
    id: "postcare",
    company: "PostCare.AI",
    role: "Full-Stack Developer Intern",
    period: "Jul 2024 — Feb 2025",
    location: "Maryland, US · Remote",
    points: [
      "Built a real-time clinical dashboard and cross-platform app (React Native + Swift) unifying EHR data for 1,500+ patient records.",
      "Designed and shipped an in-house health assistant on Llama 3 + RAG with source citations, improving medical-query response accuracy by 60%.",
      "Implemented SMART on FHIR across EHR systems — 50% faster data retrieval, 65% fewer integration bugs — and passed 200+ HIPAA compliance checks.",
    ],
    stack: ["SMART on FHIR", "Llama 3", "RAG", "React Native", "Swift", "AWS"],
  },
];

export const earlierExperience = [
  { role: "R&D Intern", org: "IIT Delhi · Centre for Biomedical Engineering", period: "Apr — Jul 2024", note: "PPG-ViT-NET sleep staging" },
  { role: "Software Developer Intern", org: "WhiteLabel Digital Services", period: "Jun — Aug 2023", note: "React, Redux, TypeScript" },
  { role: "Summer Research Intern", org: "IITRAM", period: "May — Jul 2023", note: "Autonomous navigation · ROS, SLAM, YOLOv8" },
  { role: "ML Research Intern", org: "IITRAM", period: "Dec 2022 — Feb 2023", note: "Computer vision for defect detection" },
];

export const education = {
  degree: "B.Tech, Electrical & Computer Science",
  school: "IITRAM, Ahmedabad",
  period: "2021 — 2025",
};

export const skills = [
  { group: "AI/ML", items: ["Transformers", "LLMs", "RAG", "PyTorch", "TensorFlow", "Computer Vision"] },
  { group: "Healthcare", items: ["FHIR", "HL7", "SNOMED CT", "Medical Imaging", "Biomedical Signals"] },
  { group: "Software & Systems", items: ["Python", "Java", "C++", "TypeScript", "APIs", "Distributed Systems"] },
  { group: "Infrastructure & Data", items: ["GCP", "AWS", "BigQuery", "Docker", "Kubernetes", "SQL"] },
];

export const healthcare = [
  {
    kind: "Research",
    title: "Sleep staging from a wearable signal",
    body: "PPG-ViT-NET reads raw photoplethysmography as wavelet scalograms and classifies all five sleep stages — a path from lab polysomnography to at-home monitoring.",
    facts: ["First author", "IEEE JBHI · under review"],
    href: "#research",
    cta: "Read the research",
  },
  {
    kind: "Production",
    title: "Interoperable clinical software",
    body: "At PostCare.AI: SMART on FHIR integrations across EHR systems, a HIPAA-hardened patient/provider app, and a Llama 3 RAG health assistant that cites its sources.",
    facts: ["1,500+ patient records", "200+ HIPAA checks passed"],
    href: "#experience",
    cta: "See the role",
  },
  {
    kind: "Google · 20%",
    title: "Genomics agents & clinical terminology",
    body: "An agentic assistant for DeepVariant workflows that diagnoses runs and reasons about variant calls, plus a mapper from messy clinical tokens to SNOMED CT and ICD-10.",
    facts: ["92.74% on SNOMED CT vaccine codes", "Targeting 95%+ confidence"],
    href: "#experience",
    cta: "See the work",
  },
];

export const testimonials = [
  {
    quote:
      "During her R&D internship at IIT Delhi she co-developed PPG-ViT-NET. Her technical expertise in biomedical signal processing and deep learning was evident throughout — significant contributions to both implementation and analysis.",
    name: "Dr. Deepak Joshi",
    title: "Associate Professor, Centre for Biomedical Engineering, IIT Delhi",
  },
  {
    quote:
      "Exceptional initiative and technical depth in our research project, particularly in deep learning and biomedical signal processing. She consistently exceeded expectations.",
    name: "Dr. Manish Sharma",
    title: "Associate Professor, IITRAM",
  },
  {
    quote:
      "Remarkable technical skills and a strong work ethic. She quickly grasps complex requirements, delivers high-quality solutions and writes clean, maintainable code.",
    name: "Ekagra Midha",
    title: "Senior Software Engineer, ixigo",
  },
];
