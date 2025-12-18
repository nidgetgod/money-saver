import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { AboutUs } from '@/pages/AboutUs';
import { ContactUs } from '@/pages/ContactUs';
import { PrivacyPolicy } from '@/pages/PrivacyPolicy';
import { TermsOfUse } from '@/pages/TermsOfUse';
import { Blog } from '@/pages/Blog';
import { BlogPost } from '@/pages/BlogPost';

const App: React.FC = () => {
  return (
    <Router basename="/money-saver">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
