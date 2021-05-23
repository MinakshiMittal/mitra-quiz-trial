export type Option = {
  text: string;
  isSelected: boolean;
  points: number;
};

export type QuizQuestion = {
  question: string;
  options: Option[];
};

export type MentalHealthQuiz = {
  id: string;
  quizName: string;
  quizCoverImage:string;
  questions: QuizQuestion[];
};

export type MentalHealthQuizzes = MentalHealthQuiz[];
