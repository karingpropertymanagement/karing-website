"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Star, Eye, Zap, Monitor, UserCheck } from "lucide-react";

const whyUsCards = [
  {
    icon: Eye,
    title: "Transparent Pricing",
    description: "No hidden fees, ever. You see exactly what you pay for and what you earn — down to the cent.",
  },
  {
    icon: Zap,
    title: "Speed & Responsiveness",
    description: "Maintenance requests, tenant inquiries, and owner updates — handled fast, not eventually.",
  },
  {
    icon: Monitor,
    title: "Tech-Forward",
    description: "Real-time dashboards, digital leases, automated rent collection. Modern tools for modern landlords.",
  },
  {
    icon: UserCheck,
    title: "Landlord-First",
    description: "Every decision we make starts with one question: does this benefit the property owner?",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Residential Property Owner",
    text: "KARING completely changed how I think about property management. Transparent, fast, and genuinely on my side.",
    rating: 5,
  },
  {
    name: "David L.",
    role: "Short-Term Rental Host",
    text: "My short-term rental income increased 40% in the first three months. They handle everything — I just collect the income.",
    rating: 5,
  },
  {
    name: "Priya K.",
    role: "Multi-Unit Owner",
    text: "Finally, a property manager that communicates. I always know exactly what's happening with my properties.",
    rating: 5,
  },
];

const steps = [
  {
    number: "01",
    title: "Book a Free Audit",
    description: "We analyze your property, market position, and revenue potential — no strings attached.",
  },
  {
    number: "02",
    title: "We Handle Everything",
    description: "From tenant screening to maintenance to bookkeeping. You set the strategy, we execute.",
  },
  {
    number: "03",
    title: "You Collect the Income",
    description: "Sit back and watch your property perform. Quarterly reports, real-time dashboards, zero stress.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-fredericton.png"
            alt="Aerial view of Fredericton"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy-900/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900/60" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight text-balance">
              Property management
              <br />
              <span className="text-accent-300">that actually works.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="mt-6 text-lg md:text-xl text-navy-100 max-w-2xl mx-auto leading-relaxed">
              We manage residential rentals and short-term properties so landlords can
              stop stressing and start earning.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Get a Free Property Audit
              </Button>
              <Button href="/services" variant="secondary" size="lg" className="border-white/70 text-white hover:border-white hover:text-white">
                See How It Works
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Owners Choose Us */}
      <SectionWrapper className="bg-white">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Why owners choose us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Built different. On purpose.
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsCards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.1}>
              <div className="group p-8 rounded-2xl border border-navy-100 bg-offwhite hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <card.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{card.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{card.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* What We Manage */}
      <SectionWrapper>
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              What we manage
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Three specialties. One standard of excellence.
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="group relative rounded-2xl bg-white border border-navy-100 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 h-full overflow-hidden">
              <div className="relative h-52 w-full">
                <Image
                  src="/images/interior-bright.jpg"
                  alt="Bright residential interior"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-navy mb-3">Residential Rentals</h3>
                <p className="text-sm text-navy-500 leading-relaxed">
                  Long-term tenant placement, rent collection, maintenance coordination,
                  lease management, and financial reporting. We treat your property like
                  it&apos;s our own.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="group relative rounded-2xl bg-white border border-navy-100 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 h-full overflow-hidden">
              <div className="relative h-52 w-full">
                <Image
                  src="/images/interior-modern.jpg"
                  alt="Modern short-term rental interior"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-navy mb-3">Short-Term Rentals</h3>
                <p className="text-sm text-navy-500 leading-relaxed">
                  Listing optimization, dynamic pricing, guest communication, turnover
                  coordination, and review management. Maximum occupancy, minimum effort.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="group relative rounded-2xl bg-white border border-navy-100 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 h-full overflow-hidden">
              <div className="relative h-52 w-full">
                <Image
                  src="/images/lawn-mowing.jpg"
                  alt="Lawn care and property maintenance"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-navy mb-3">Home Maintenance</h3>
                <p className="text-sm text-navy-500 leading-relaxed">
                  Lawn care, snow removal, spring clean-ups, and seasonal upkeep.
                  We keep your property looking its best — year-round.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-white">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              What owners say
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Don&apos;t take our word for it.
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="p-8 rounded-2xl border border-navy-100 bg-offwhite hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-navy-600 leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-6 pt-6 border-t border-navy-100">
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="text-sm text-navy-400">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper>
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              How it works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Three steps. Zero hassle.
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.15}>
              <div className="relative p-8 rounded-2xl bg-white border border-navy-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                <span className="text-5xl font-bold text-accent/10">{step.number}</span>
                <h3 className="text-xl font-bold text-navy mt-4 mb-2">{step.title}</h3>
                <p className="text-navy-500 leading-relaxed">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <section className="bg-navy-900 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to make your property work for you?
            </h2>
            <p className="mt-6 text-lg text-navy-300">
              Book a free property audit and see what your property could be earning.
            </p>
            <div className="mt-10">
              <Button href="/contact" size="lg">
                Get a Free Property Audit
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
