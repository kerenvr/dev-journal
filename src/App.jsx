//App.jsx
import Navbar from "./components/navbar/Navbar"
import AboutPage from "./pages/AboutPage"
import BlogPage from "./pages/BlogPage"
import HomePage from "./pages/HomePage"
import JournalPage from "./pages/JournalPage"
import NewsletterPage from "./pages/NewsletterPage"
import { Route,Routes } from 'react-router-dom';
import { CallbackPage } from "./pages/callback-page";
import JournalEntry from "./pages/JournalEntryPage"
import ProtectedRoute from "./pages/ProtectedRoute"

function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <div>
        <div className="p-10">
        {/* <JournalPage /> */}
          <Routes>        
            <Route path="/"  element={<HomePage/>} />
            <Route path="/about"  element={<AboutPage />}/>
            <Route 
              path="/blog"  
              element={
                <ProtectedRoute>
                  <BlogPage/>
                </ProtectedRoute>}
            />
            <Route path="/newsletter"  element={<NewsletterPage/>}/>
            <Route path="/callback"  element={<CallbackPage/>}/>
            <Route path="/journal/create"  element={<JournalEntry/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
