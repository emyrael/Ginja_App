import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import WhyWeBuiltGinja from './WhyWeBuiltGinja';
import WaitlistForm from './WaitlistForm';
import Footer from './Footer';
import NavigationTabs from './NavigationTabs';

export default function LandingPage() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <NavigationTabs onJoinWaitlist={() => scrollToSection('waitlist')} />

      <main className="pt-20 sm:pt-24">
        <HeroSection
          onJoinWaitlist={() => scrollToSection('waitlist')}
          onSeeHowItWorks={() => scrollToSection('features')}
        />
        <FeaturesSection />
        <WhyWeBuiltGinja />
        <WaitlistForm />
      </main>

      <Footer />
    </div>
  );
}
