"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Eye, Zap, Monitor, UserCheck } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No hidden fees, no vague updates. You always know exactly what's happening with your property and your money.",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "We respond fast, act faster, and never leave owners or tenants waiting. Time is money — especially in property.",
  },
  {
    icon: Monitor,
    title: "Tech-Forward",
    description:
      "Real-time dashboards, digital leases, automated payments. We use technology to give you more control, not less.",
  },
  {
    icon: UserCheck,
    title: "Landlord-First",
    description:
      "Every process, policy, and decision is designed to protect and grow the property owner's investment.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              About KARING
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
              We started KARING because property management was broken.
            </h1>
            <p className="mt-6 text-lg text-navy-500 max-w-2xl mx-auto">
              Too many hidden fees. Too little communication. Too much friction between
              owners and their own properties.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Brand Story */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Why we started
            </h2>
            <div className="space-y-6 text-navy-500 leading-relaxed text-lg">
              <p>
                KARING was born out of frustration. As property owners ourselves, we
                experienced firsthand what it&apos;s like to work with property managers who
                over-promise and under-deliver. Opaque fees. Slow responses. Zero
                visibility into how our properties were actually performing.
              </p>
              <p>
                We knew there had to be a better way. So we built one. KARING is the
                property management company we wished existed when we were landlords
                looking for help — transparent, tech-forward, fast, and relentlessly
                focused on the owner&apos;s bottom line.
              </p>
              <p>
                Today, we manage residential rentals and short-term properties for
                owners who demand more from their property manager. We&apos;re not the
                biggest. We&apos;re not trying to be. We&apos;re trying to be the best — for
                every owner we work with.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* City Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image
          src="/images/fredericton-aerial.png"
          alt="Aerial view of Fredericton"
          fill
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-navy-900/55" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-2xl md:text-3xl font-bold tracking-tight">Proudly serving Fredericton</p>
        </div>
      </div>

      {/* Mission & Values */}
      <SectionWrapper>
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Our values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              What drives every decision we make.
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="group p-8 rounded-2xl border border-navy-100 bg-white hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <v.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{v.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{v.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-navy-900 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Want to work with a team that cares?
            </h2>
            <p className="mt-6 text-lg text-navy-300">
              Get in touch and let&apos;s talk about how we can help your property
              perform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Let&apos;s Talk
              </Button>
              <Button href="/services" variant="secondary" size="lg" className="border-navy-600 text-white hover:border-accent hover:text-accent">
                See What We Offer
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
