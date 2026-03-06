export interface BookPublication {
  id: number;
  title: string;
  type: string;
  status: string;
  medium: "Online" | "Offline";
  year: string;
  venue: string;
  authors?: string;
  affiliations?: string;
  description: string;
  keywords: string[];
  link?: string;
}

export const bookPortfolio = {
  publications: [
    {
      id: 1,
      title: "Web-Based Software Development: Diabetes Mellitus Prediction",
      type: "Journal Article",
      status: "Published",
      medium: "Online",
      year: "n.d.",
      venue: "Scientific.Net (EH.27.343)",
      description:
        "Web-based diabetes mellitus prediction application using machine learning with history and advice features to support early detection and risk awareness.",
      keywords: [
        "Diabetes Mellitus",
        "Machine Learning",
        "Web Application",
        "Early Detection",
        "Health Assistant"
      ],
      link: "https://www.scientific.net/EH.27.343"
    },
    {
      id: 2,
      title:
        "Optimizing Maintainability Using Clean Code in a School Academic Information System",
      type: "Academic Paper",
      status: "Published",
      medium: "Online",
      year: "n.d.",
      venue: "UNIKOM eLibrary (eprint/2763)",
      description:
        "Refactoring a web-based academic information system by applying clean code principles to improve the maintainability index and address misplacement of controller/model responsibilities.",
      keywords: [
        "Clean Code",
        "Maintainability",
        "Refactoring",
        "Academic Information System",
        "SDLC"
      ],
      link: "https://elibrary.unikom.ac.id/id/eprint/2763/"
    },
    {
      id: 3,
      title: "OWASP Top 10 Security Assessment for Karlo.id",
      type: "Technical Report",
      status: "Draft",
      medium: "Online",
      year: "n.d.",
      venue: "Internal Security Review",
      description:
        "Assessment of Karlo.id against OWASP Top 10 with findings across authentication, access control, and input validation, plus prioritized remediation recommendations.",
      keywords: [
        "OWASP Top 10",
        "Web Security",
        "Risk Assessment",
        "Remediation",
        "Karlo.id"
      ]
    },
    {
      id: 4,
      title:
        "Mental Health Chatbot Development Using TF-IDF and SVM for Text-Based Learning",
      type: "Journal Article",
      status: "Published",
      medium: "Online",
      year: "n.d.",
      venue: "Institutional Publication",
      description:
        "Chatbot-based mental health prediction system using TF-IDF features and SVM, achieving 85% accuracy with a RESTful API backend and real-time chatbot UI.",
      keywords: [
        "Mental Health",
        "Chatbot",
        "TF-IDF",
        "SVM",
        "Text Classification",
        "REST API"
      ]
    },
    {
      id: 5,
      title: "Shrimp Farm Harvest Yield Prediction",
      type: "Research Proposal",
      status: "Draft",
      medium: "Offline",
      year: "2024",
      venue: "Project Brief",
      description:
        "Business-focused data study to optimize harvest timing, reduce production costs, and improve shrimp quality by correlating feeding logs, pond sensors, fasting periods, mortality, and harvest outcomes.",
      keywords: [
        "Harvest Prediction",
        "Aquaculture",
        "Sensor Data",
        "Cost Optimization",
        "Quality Grading"
      ]
    },
    {
      id: 6,
      title: "LLM Chatbot for Savings Optimization",
      type: "Technical Report",
      status: "Draft",
      medium: "Online",
      year: "n.d.",
      venue: "Applied AI Project Note",
      description:
        "LLM-powered chatbot designed to help users plan savings goals, track habits, and receive personalized recommendations through conversational financial guidance.",
      keywords: [
        "LLM",
        "Chatbot",
        "Savings",
        "Personal Finance",
        "Recommendations"
      ]
    },
    {
      id: 7,
      title:
        "A Decision Support System for Fleet Selection Using AHP, TOPSIS, and ELECTRE",
      type: "Journal Article",
      status: "Published",
      medium: "Online",
      year: "n.d.",
      venue: "UGM FMIPA Publication",
      authors: "Aina Musdholifah, Dimas Firmansyah",
      affiliations:
        "FMIPA UGM · Dept. of Computer Science & Electronics / MCS Program",
      description:
        "DSS for fleet assignment that integrates AHP for criteria weights, ELECTRE for alternative filtering, and TOPSIS for final ranking to reduce manual effort, improve recommendation accuracy, and optimize fleet utilization.",
      keywords: [
        "DSS",
        "AHP",
        "ELECTRE",
        "TOPSIS",
        "Fleet Management"
      ]
    }
  ] as BookPublication[]
};
