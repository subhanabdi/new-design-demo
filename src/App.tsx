import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { PersonalService } from './components/PersonalService';
import { ServicesCarousel } from './components/ServicesCarousel';
import { TraditionalValues } from './components/TraditionalValues';
import { ServicesView } from './components/ServicesView';
import { SoftwarePartners } from './components/SoftwarePartners';
import { AwardsSection } from './components/AwardsSection';
import { NewsSection } from './components/NewsSection';
import { ResourcesSection } from './components/ResourcesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ConsultationCta } from './components/ConsultationCta';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);

  const handleNavigateToServices = () => {
    setActiveTab('services');
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateTab = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(tab);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#303843]">
      {/* Premium Sticky Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigateTab}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section with Interactive Slider */}
        <HeroSlider
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onNavigateToServices={handleNavigateToServices}
        />

        {/* 2. Personal Service Section (Split Layout) */}
        <PersonalService
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* 3. Services Overview with Horizontal Scrolling Carousel & Big Images */}
        <ServicesCarousel
          onNavigateToServices={handleNavigateToServices}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* 4. Traditional Values — Modern Approach (Soft Sage Background) */}
        <TraditionalValues />

        {/* 5. Complete Services Structure (Compliance, Planning, Advisory) */}
        <ServicesView
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* 6. Approved and Partnered Software Section */}
        <SoftwarePartners />

        {/* 7. Recognition & Awards ("Recognised") */}
        <AwardsSection />

        {/* 8. Latest News & Financial Insights */}
        <NewsSection />

        {/* 9. Resources & Practice Guidance */}
        <ResourcesSection />

        {/* 10. Testimonials ("What Our Clients Say") */}
        <TestimonialsSection />

        {/* 11. FAQ Accordion */}
        <FaqSection
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* 12. Consultation CTA Section (Soft Sage Background) */}
        <ConsultationCta
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* 13. Speak With ABC (Contact Page & Form) */}
        <ContactSection />
      </main>

      {/* 14. Deep Navy Footer & Legal Modals */}
      <Footer
        onNavigateTab={handleNavigateTab}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Interactive Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
