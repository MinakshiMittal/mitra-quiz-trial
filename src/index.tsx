import { render } from "react-dom";

import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { QuizProvider } from "./Context/quiz-context";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <Router>
    <QuizProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </QuizProvider>
  </Router>,
  rootElement
);
