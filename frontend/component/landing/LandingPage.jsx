import React from 'react';
import PremiumHomepage from './PremiumHomepage';
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
      <NavigationTabs />

      <main className="pt-20 sm:pt-24">
        <PremiumHomepage onSeeHowItWorks={() => scrollToSection('features')} />
      </main>

      <Footer />
    </div>
  );
}
