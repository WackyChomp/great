interface Resume {
  id: string;
  companyName?: string;
  jobTitle?: string;
  imagePath: string;
  feedback: Feedback;       // refers to below
  resumePath: string;
}


interface Feedback {
  overallScore: number;
  ATS: {
    score: number;
    tips: {
      type: "poor" | "improve" | "good" | "excellent";
      tip: string;
    }[];
  };
  toneAndStyle: {
    score: number;
    tips: {
      type: "poor" | "improve" | "good" | "excellent";
      tip: string;
      explanation: string;
    }[];
  };
  content: {
    score: number;
    tips: {
      type: "poor" | "improve" | "good" | "excellent";
      tip: string;
      explanation: string;
    }[];
  };
  structure: {
    score: number;
    tips: {
      type: "poor" | "improve" | "good" | "excellent";
      tip: string;
      explanation: string;
    }[];
  };
  skills: {
    score: number;
    tips: {
      type: "poor" | "improve" | "good" | "excellent";
      tip: string;
      explanation: string;
    }[];
  };
}

