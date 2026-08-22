"use client";

import React, { useState } from "react";
import { personalDetails } from "@/data/portfolioData";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all fields before sending.");
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    // Client-side mailto trigger fallback
    setTimeout(() => {
      const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${personalDetails.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-12 md:py-20">
      <ScrollReveal direction="up">
        <SectionHeading
          title="Let's Connect"
          subtitle="Available for new full-stack MERN & UEFN opportunities. Feel free to send a message or connect directly."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Info Cards */}
        <ScrollReveal direction="right" delay={0.1} className="lg:col-span-2">
          <div className="space-y-4 h-full flex flex-col justify-between">
            <GlassCard hoverEffect={true} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-electric-violet/10 border border-electric-violet/30 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-electric-violet" />
              </div>
              <div>
                <p className="text-xs font-geist text-text-body/60 uppercase">Email Address</p>
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="font-sora text-sm sm:text-base font-semibold text-text-heading hover:text-electric-violet transition-colors break-all"
                >
                  {personalDetails.email}
                </a>
              </div>
            </GlassCard>

            <GlassCard hoverEffect={true} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-electric-violet/10 border border-electric-violet/30 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-electric-violet" />
              </div>
              <div>
                <p className="text-xs font-geist text-text-body/60 uppercase">Phone Number</p>
                <a
                  href={`tel:${personalDetails.phone.replace(/\s+/g, "")}`}
                  className="font-sora text-sm sm:text-base font-semibold text-text-heading hover:text-electric-violet transition-colors"
                >
                  {personalDetails.phone}
                </a>
              </div>
            </GlassCard>

            <GlassCard hoverEffect={true} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-electric-violet/10 border border-electric-violet/30 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-electric-violet" />
              </div>
              <div>
                <p className="text-xs font-geist text-text-body/60 uppercase">Location</p>
                <p className="font-sora text-sm sm:text-base font-semibold text-text-heading">
                  {personalDetails.location}
                </p>
              </div>
            </GlassCard>
          </div>
        </ScrollReveal>

        {/* Contact Form */}
        <ScrollReveal direction="left" delay={0.15} className="lg:col-span-3">
          <GlassCard hoverEffect={false}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-geist text-text-body/80 uppercase mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Smith"
                  className="w-full bg-surface-container-low/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-body/40 focus:outline-none focus:border-electric-violet focus:ring-1 focus:ring-electric-violet transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-geist text-text-body/80 uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@example.com"
                  className="w-full bg-surface-container-low/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-body/40 focus:outline-none focus:border-electric-violet focus:ring-1 focus:ring-electric-violet transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-geist text-text-body/80 uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full bg-surface-container-low/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-body/40 focus:outline-none focus:border-electric-violet focus:ring-1 focus:ring-electric-violet transition-all resize-none"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-xs font-geist text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === "success" && (
                <div className="flex items-center gap-2 text-xs font-geist text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Opening mail app with your message... Thank you!</span>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={status === "loading"}
                icon={<Send className="w-4 h-4" />}
              >
                {status === "loading" ? "Preparing Mail..." : "Send Message"}
              </Button>
            </form>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
