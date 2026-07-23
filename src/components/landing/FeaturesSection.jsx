import React from 'react';
import { FEATURES } from '../../constants/brand';
import SectionHeader from '../ui/SectionHeader';
import PremiumCard from '../ui/PremiumCard';

const FeaturesSection = () => (
  <section id="features" className="section-padding relative" aria-labelledby="features-heading">
    <div className="absolute inset-0 bg-gradient-radial from-primary/[0.05] via-transparent to-transparent pointer-events-none" />
    <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay" aria-hidden="true" />

    <div className="container relative">
      <SectionHeader
        eyebrow="Platform"
        title="Everything events need. Nothing they don't."
        description="One ecosystem for discovery, ticketing, payments, scanning, and growth — built for speed at scale."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, index) => (
          <PremiumCard key={feature.title} {...feature} delay={index * 0.06} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
