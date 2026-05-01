"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Send, PhoneCall, ClipboardList, MapPin } from "lucide-react";

const nextSteps = [
  {
    icon: ClipboardList,
    title: "We review your info",
    description: "Our team reviews your submission and prepares a personalized property assessment.",
  },
  {
    icon: PhoneCall,
    title: "We reach out within 24 hours",
    description: "Expect a call or email from us to schedule your free property audit.",
  },
  {
    icon: Send,
    title: "You get a custom plan",
    description: "We deliver a clear, no-obligation management proposal tailored to your property.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
              Let&apos;s talk about your property.
            </h1>
            <p className="mt-6 text-lg text-navy-500 max-w-2xl mx-auto">
              Fill out the form below and we&apos;ll get back to you within 24 hours
              with a free property assessment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Property Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <AnimatedSection>
          <div className="relative h-56 md:h-72 w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/interior-kitchen.jpg"
              alt="Modern kitchen interior"
              fill
              className="object-cover object-center"
            />
          </div>
        </AnimatedSection>
      </div>

      {/* Form + Info */}
      <SectionWrapper className="bg-white !pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              {submitted ? (
                <div className="p-12 rounded-2xl border border-accent/30 bg-accent/5 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">
                    Message sent!
                  </h3>
                  <p className="text-navy-500">
                    Thanks for reaching out. We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-offwhite text-navy placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      placeholder="Jane Smith"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-offwhite text-navy placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-offwhite text-navy placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-navy mb-2">
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      required
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-offwhite text-navy focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all appearance-none"
                    >
                      <option value="" disabled>
                        Select property type
                      </option>
                      <option value="residential">Residential Rental</option>
                      <option value="short-term">Short-Term Rental</option>
                      <option value="maintenance">Home Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-offwhite text-navy placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                      placeholder="Tell us about your property and what you're looking for..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              )}
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={0.15}>
              <div className="p-8 rounded-2xl border border-navy-100 bg-offwhite mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-semibold text-navy">Our Market</h3>
                </div>
                <p className="text-navy-500 text-sm leading-relaxed">
                  We proudly serve property owners in the greater metro area. Local
                  knowledge, local vendors, local expertise — that&apos;s our edge.
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-navy-100 bg-offwhite">
                <h3 className="text-lg font-semibold text-navy mb-6">
                  What happens next?
                </h3>
                <div className="space-y-6">
                  {nextSteps.map((step) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy text-sm">{step.title}</p>
                        <p className="text-navy-400 text-sm mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
