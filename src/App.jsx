//App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NewsletterPage from "./pages/NewsletterPage";
import { CallbackPage } from "./pages/callback-page";
import JournalEntry from "./pages/JournalEntryPage";

function App() {
  return (
    <Router>
      <div className="mx-auto">
        <Navbar />
        <div>
          <div className="p-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/newsletter" element={<NewsletterPage />} />
              <Route path="/callback" element={<CallbackPage />} />
              <Route path="/journal/create" element={<JournalEntry />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
