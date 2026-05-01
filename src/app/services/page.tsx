"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Check, ChevronDown } from "lucide-react";

const residentialFeatures = [
  "Tenant screening & placement",
  "Rent collection & enforcement",
  "24/7 maintenance coordination",
  "Lease drafting & renewals",
  "Quarterly financial reporting",
  "Property inspections",
  "Eviction management",
  "Vendor management & negotiation",
];

const shortTermFeatures = [
  "Listing creation & optimization",
  "Dynamic pricing strategy",
  "Guest communication & support",
  "Turnover & cleaning coordination",
  "Review management & responses",
  "Professional photography coordination",
  "Multi-platform listing syndication",
  "Revenue & occupancy reporting",
];

const maintenanceFeatures = [
  "Lawn mowing & edging",
  "Spring & fall clean-ups",
  "Snow removal & salting",
  "Gutter cleaning",
  "Exterior pressure washing",
  "Garden bed maintenance",
  "Minor exterior repairs",
  "Seasonal property inspections",
];

const faqs = [
  {
    q: "What are your management fees?",
    a: "For residential properties, we charge 8–10% of collected rent. For short-term rentals, our fee is 15–20% of booking revenue. No hidden fees, no setup costs, no surprises. You only pay when you earn.",
  },
  {
    q: "How quickly can you onboard my property?",
    a: "Most properties are fully onboarded within 5–7 business days. This includes property assessment, photography, listing creation (for short-term), and tenant/guest-readiness checks.",
  },
  {
    q: "Do I have visibility into my property's performance?",
    a: "Absolutely. Every owner gets access to a real-time dashboard showing income, expenses, maintenance requests, and occupancy data. Plus, you'll receive detailed quarterly reports.",
  },
  {
    q: "What happens if there's a maintenance emergency?",
    a: "We have a 24/7 maintenance hotline. Emergencies are triaged and handled immediately through our vetted vendor network. You'll be notified in real time and approve any costs over your set threshold.",
  },
  {
    q: "Can I switch from another property manager?",
    a: "Yes, and we make it seamless. We handle the full transition — tenant communication, document transfer, vendor transitions, and everything in between. Most transitions are completed within two weeks.",
  },
  {
    q: "Is there a long-term contract or notice period?",
    a: "We operate on a 1-year contract with a 3-month notice period. It gives us the time to deliver real results for your property — and gives you a committed partner, not a revolving door.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-navy-100 last:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base md:text-lg font-semibold text-navy group-hover:text-accent transition-colors pr-4">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-navy-400 transition-transform duration-300 flex-shrink-0 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-navy-500 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
              Everything your property needs. Nothing it doesn&apos;t.
            </h1>
            <p className="mt-6 text-lg text-navy-500 max-w-2xl mx-auto">
              Whether you own a long-term rental or a short-term listing, we handle the
              full lifecycle — so you don&apos;t have to.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Residential */}
      <SectionWrapper className="bg-white">
        <AnimatedSection>
          <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden mb-12">
            <Image
              src="/images/interior-staircase.jpg"
              alt="Bright residential property interior"
              fill
              className="object-cover object-center"
            />
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                Long-term rentals
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Residential Property Management
              </h2>
              <p className="text-navy-500 leading-relaxed mb-8">
                From finding the right tenant to collecting the last month&apos;s rent, we
                manage every detail of your residential property. Our process is built on
                transparency, speed, and owner-first decision making.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {residentialFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm text-navy-600">{f}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Short-Term */}
      <SectionWrapper>
        <AnimatedSection>
          <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden mb-12">
            <Image
              src="/images/interior-dining.jpg"
              alt="Stylish short-term rental interior"
              fill
              className="object-cover"
            />
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {shortTermFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm text-navy-600">{f}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="order-1 lg:order-2">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                Short-term rentals
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Short-Term Rental Management
              </h2>
              <p className="text-navy-500 leading-relaxed mb-8">
                We turn your property into a high-performing short-term rental. Dynamic
                pricing, guest experience optimization, and seamless turnovers — all
                managed by a team that knows the local market inside out.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Home Maintenance */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                Property upkeep
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Home Maintenance
              </h2>
              <p className="text-navy-500 leading-relaxed mb-8">
                A well-maintained property attracts better tenants and protects your
                investment. We handle the seasonal and routine upkeep so your property
                always looks its best — inside and out.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {maintenanceFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm text-navy-600">{f}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Pricing Transparency */}
      <SectionWrapper className="bg-white">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Transparent pricing. No hidden fees.
            </h2>
            <p className="text-navy-500">
              We believe you should know exactly what you&apos;re paying before you sign
              anything. Here&apos;s how our fee structure works.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <AnimatedSection delay={0.1}>
            <div className="p-8 rounded-2xl border border-navy-100 bg-offwhite hover:shadow-lg transition-all duration-300 h-full">
              <h3 className="text-xl font-bold text-navy mb-2">Residential</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-accent">8–10%</span>
                <span className="text-navy-400 text-sm">of collected rent</span>
              </div>
              <ul className="space-y-3 text-sm text-navy-500">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" /> No setup fees
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" /> No maintenance markups
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" /> 1-year contract, 3-month notice
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" /> You only pay when you earn
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="p-8 rounded-2xl border border-accent/30 bg-accent/5 hover:shadow-lg transition-all duration-300 h-full">
              <h3 className="text-xl font-bold text-navy mb-2">Short-Term Rentals</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-accent">15–20%</span>
                <span className="text-navy-400 text-sm">of booking revenue</span>
              </div>
              <ul className="space-y-3 text-sm text-navy-500">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" /> No upfront costs
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" /> Dynamic pricing included
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" /> Full-service management
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" /> Performance-based — we win when you win
                </li>
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="p-8 rounded-2xl border border-navy-100 bg-offwhite hover:shadow-lg transition-all duration-300 h-full">
              <h3 className="text-xl font-bold text-navy mb-2">Home Maintenance</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-accent">Custom</span>
                <span className="text-navy-400 text-sm">quote per property</span>
              </div>
              <ul className="space-y-3 text-sm text-navy-500">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" /> Seasonal packages available
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" /> Bundled with management for savings
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" /> Vetted local vendors
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" /> No surprise charges
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Questions? We&apos;ve got answers.
              </h2>
            </div>
            <div className="bg-white rounded-2xl border border-navy-100 px-8">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-navy-900 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Let&apos;s talk about your property.
            </h2>
            <p className="mt-6 text-lg text-navy-300">
              No pressure, no obligation. Just a conversation about what&apos;s possible.
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
