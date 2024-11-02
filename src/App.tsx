import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import siteConfig from './config/siteConfig';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">
      <Header siteName={siteConfig.siteName} />
      <main className="container mx-auto px-4 py-8">
        <Hero
          title={siteConfig.heroTitle}
          subtitle={siteConfig.heroSubtitle}
        />
        <About
          title={siteConfig.aboutTitle}
          description={siteConfig.aboutDescription}
        />
        <Portfolio
          title={siteConfig.portfolioTitle}
          items={siteConfig.portfolioItems}
        />
        <Process
          title={siteConfig.processTitle}
          steps={siteConfig.processSteps}
        />
        <Contact />
      </main>
      <Footer siteName={siteConfig.siteName} />
    </div>
  );
}

export default App;