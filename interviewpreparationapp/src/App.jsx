import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import Dashboard from "./pages/Dashboard";
//import PrivateRoute from "./components/PrivateRoute";
import Result from "./pages/Result";
import Bookmark from "./pages/Bookmark";
import DiscussionForum from "./pages/DiscussionForum";
import AIQuestionGenerator from "./pages/AIQuestionGenerator";
import MockInterview from "./pages/MockInterview";
import ProgressTracker from "./components/ProgressTracker"
import QuestionCard from "./components/QuestionCard"

const App = () => {
  return (
      <Router>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/discussion" element={<DiscussionForum />} />
          <Route path="/result" element={<Result />} />
          <Route path="/ai-questions" element={<AIQuestionGenerator />} />
        <Route path="/mock-interview" element={<MockInterview />} />
        <Route path="/progress-tracker" element={<ProgressTracker />} />
        <Route path="/question-card" element={<QuestionCard />} />
        </Routes>
      </Router>
  
   
  );
};

export default App;
