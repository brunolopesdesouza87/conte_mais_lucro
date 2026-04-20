import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRevealAnimation } from "./hooks/useRevealAnimation";
import { useScrollToTop } from "./hooks/useScrollToTop";

// Layout & UI
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

// Pages
import HomePage from "./pages/HomePage";
import CEOPage from "./components/CEOPage";
import HistoryPage from "./components/HistoryPage";
import BlogArchivePage from "./pages/BlogArchivePage";
import BlogPostPage from "./pages/BlogPostPage";

const ScrollManager = () => {
  useScrollToTop();
  return null;
};

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  useRevealAnimation();
  return (
    <div className="min-h-screen flex flex-col font-sans bg-black">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/o-ceo" element={<CEOPage />} />
          <Route path="/nossa-historia" element={<HistoryPage />} />
          <Route path="/blog" element={<BlogArchivePage />} />
          <Route path="/blog/:postId" element={<BlogPostPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
