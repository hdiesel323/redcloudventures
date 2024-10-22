import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import WhyUs from './components/WhyUs';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CalendlyWidget from './components/CalendlyWidget';
import siteConfig from './config/siteConfig';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">
      <Header siteName={siteConfig.siteName} siteTagline={siteConfig.siteTagline} />
      <main className="container mx-auto px-4 py-8">
        <Hero 
          title={siteConfig.heroTitle} 
          subtitle={siteConfig.heroSubtitle}
        />
        <About
          title={siteConfig.aboutTitle}
          description={siteConfig.aboutDescription}
        />
        <Features 
          title={siteConfig.featuresTitle} 
          features={siteConfig.features}
        />
        <WhyUs
          title={siteConfig.whyUsTitle}
          points={siteConfig.whyUsPoints}
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
        <Newsletter />
      </main>
      <Footer siteName={siteConfig.siteName} />
      <CalendlyWidget url={siteConfig.calendlyUrl} />
    </div>
  );
}

export default App;