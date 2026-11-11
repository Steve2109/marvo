'use client';

import { useEffect, useState, useRef } from 'react';
import {
  SkeletonHero,
  SkeletonSection,
  GlobalNav,
  LocalNav,
  Hero,
} from '@/components/product/Sections1';
import {
  Benefits,
  Compatibility,
  CloseLook,
  Gallery,
} from '@/components/product/Sections2';
import {
  FAQ,
  GrowthHacking,
  SeoSection,
  AiSeoSection,
  RetailTile,
  Footer,
} from '@/components/product/Sections3';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);

  /* Skeleton screen — simulate fetch then reveal */
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  /* Scroll reveal observer */
  useEffect(() => {
    if (loading) return;
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [loading]);

  if (loading) {
    return (
      <main className="bg-[#111111] min-h-screen">
        <GlobalNav />
        <div style={{ height: '52px', background: '#111111' }} />
        <SkeletonHero />
        <SkeletonSection />
        <SkeletonSection />
      </main>
    );
  }

  return (
    <main ref={mainRef} className="bg-[#111111] min-h-screen flex flex-col">
      <GlobalNav />
      <LocalNav />
      <Hero />

      <div className="reveal">
        <Benefits />
      </div>
      <div className="reveal">
        <Compatibility />
      </div>
      <div className="reveal">
        <CloseLook />
      </div>
      <div className="reveal">
        <Gallery />
      </div>
      <div className="reveal">
        <FAQ />
      </div>
      <div className="reveal">
        <GrowthHacking />
      </div>
      <div className="reveal">
        <SeoSection />
      </div>
      <div className="reveal">
        <AiSeoSection />
      </div>
      <div className="reveal">
        <RetailTile />
      </div>

      <Footer />
    </main>
  );
}
