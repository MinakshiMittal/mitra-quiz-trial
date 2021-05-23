import { MentalHealthQuizzes } from "./quiz-data.types";
import "./global.d.ts";
import Happy from "./assets/happy.jpg";
import KnowledgeOfSelf from "./assets/knowledge-of-self.jpg";

export const mentalHealthQuizzes: MentalHealthQuizzes = [
  {
    id: "1",
    quizName: "How Happy Are You?",
    quizCoverImage: Happy,
    questions: [
      {
        question:
          "I believe my life will truly begin when the right person or circumstances come along.",
        options: [
          {
            text: "Never",
            isSelected: false,
            points: 8
          },
          {
            text: "Infrequently",
            isSelected: false,
            points: 5
          },
          {
            text: "Sometimes",
            isSelected: false,
            points: 3
          },
          {
            text: "Frequently",
            isSelected: false,
            points: 1
          }
        ]
      },
      {
        question: "I feel best when I give unconditionally to others.",
        options: [
          {
            text: "Never",
            isSelected: false,
            points: 1
          },
          {
            text: "Infrequently",
            isSelected: false,
            points: 3
          },
          {
            text: "Sometimes",
            isSelected: false,
            points: 5
          },
          {
            text: "Frequently",
            isSelected: false,
            points: 8
          }
        ]
      },
      {
        question:
          " When I think about people in my life, I focus on those who have hurt or disappointed me.",
        options: [
          {
            text: "Never",
            isSelected: false,
            points: 8
          },
          {
            text: "Infrequently",
            isSelected: false,
            points: 5
          },
          {
            text: "Sometimes",
            isSelected: false,
            points: 3
          },
          {
            text: "Frequently",
            isSelected: false,
            points: 1
          }
        ]
      },
      {
        question: " When things don't go well, I feel trapped or overwhelmed.",
        options: [
          {
            text: "Never",
            isSelected: false,
            points: 8
          },
          {
            text: "Infrequently",
            isSelected: false,
            points: 5
          },
          {
            text: "Sometimes",
            isSelected: false,
            points: 3
          },
          {
            text: "Frequently",
            isSelected: false,
            points: 1
          }
        ]
      }
    ]
  },{
    id: "2",
    quizName: "Knowledge of Self",
    quizCoverImage: KnowledgeOfSelf,
    questions: [
      {
        question:
          "Feeling down, depressed, or hopeless",
        options: [
          {
            text: "Not At All",
            isSelected: false,
            points: 8
          },
          {
            text: "Several days",
            isSelected: false,
            points: 5
          },
          {
            text: "More than half the days",
            isSelected: false,
            points: 3
          },
          {
            text: "Nearly every day",
            isSelected: false,
            points: 1
          }
        ]
      },
      {
        question: "Trouble concentrating on things, such as reading the newspaper or watching television",
        options: [
          {
            text: "Not At All",
            isSelected: false,
            points: 8
          },
          {
            text: "Several days",
            isSelected: false,
            points: 5
          },
          {
            text: "More than half the days",
            isSelected: false,
            points: 3
          },
          {
            text: "Nearly every day",
            isSelected: false,
            points: 1
          }
        ]
      },
      {
        question:
          " Do you experience intense sorrow and emotional pain many months after the loss?",
        options: [
          {
            text: "Never",
            isSelected: false,
            points: 8
          },
          {
            text: "Infrequently",
            isSelected: false,
            points: 5
          },
          {
            text: "Sometimes",
            isSelected: false,
            points: 3
          },
          {
            text: "Frequently",
            isSelected: false,
            points: 1
          }
        ]
      },
      {
        question: " Do you feel numb or detached from other people or activities you once enjoyed?",
        options: [
          {
            text: "Never",
            isSelected: false,
            points: 8
          },
          {
            text: "Infrequently",
            isSelected: false,
            points: 5
          },
          {
            text: "Sometimes",
            isSelected: false,
            points: 3
          },
          {
            text: "Frequently",
            isSelected: false,
            points: 1
          }
        ]
      }
    ]
  }
];
