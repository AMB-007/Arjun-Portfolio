import React, { useState } from "react";
import { Mail, Copy, Check, Send, ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { copyToClipboard, cn } from "@/utils/helpers";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    _gotcha: "", // Honeypot spam defense
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleCopyEmail = () => {
    copyToClipboard(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject";
    if (!formData.message.trim()) errs.message = "Please write a message";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData._gotcha) return; // Silent discard for bots
    if (!validate()) return;

    setIsSubmitting(true);
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Data Science Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Hi Arjun,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;

    window.location.href = mailtoUrl;
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setTimeout(() => setSubmittedSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#060608] border-b border-white/5 relative overflow-hidden">
      <div className="editorial-container relative z-10">
        <SectionHeader
          number="09"
          tag="GET IN TOUCH"
          title="Connect"
          description="Available for Data Science, Machine Learning, and analytical engineering opportunities. Feel free to reach out directly."
        />

        {/* Large Editorial Headline & Status */}
        <div className="mb-14 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-bold rounded-full bg-[#0E0E12] text-[#F4F4F5] border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#C8F31D] animate-pulse" />
              <span>OPEN TO DATA ANALYST &amp; ML OPPORTUNITIES // B.TECH '26</span>
            </span>
          </div>

          <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F4F4F5] font-sans uppercase leading-tight">
            LET&apos;S WORK WITH DATA.
          </h3>
          <p className="text-base sm:text-lg text-[#8B8B93] max-w-2xl font-sans">
            Whether you have a machine learning challenge, dataset analysis requirement, or prospective role, I am glad to discuss how we can build impactful solutions together.
          </p>
        </div>

        {/* 2-Column Editorial Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: Verified Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-[#8B8B93] uppercase tracking-wider block pb-2 border-b border-white/10 flex items-center justify-between">
                <span>// VERIFIED CONTACT CHANNELS</span>
                <span className="text-[#C8F31D]">ENCRYPTED SSL</span>
              </span>

              {/* Direct Email Card */}
              <div className="p-6 rounded-2xl bg-[#0E0E12] border border-white/10 hover:border-[#C8F31D]/40 transition-all duration-300 space-y-3 shadow-lg">
                <div className="flex items-center justify-between text-xs font-mono text-[#8B8B93]">
                  <span className="uppercase font-bold text-[#F4F4F5]">Professional Email</span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#141418] hover:bg-[#C8F31D] hover:text-black text-[#C8F31D] transition-colors cursor-pointer text-[11px] font-bold"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>COPIED TO CLIPBOARD</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY EMAIL</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base sm:text-xl font-bold font-mono text-[#F4F4F5] hover:text-[#C8F31D] transition-colors block break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl bg-[#0E0E12] border border-white/10 hover:border-[#C8F31D]/50 transition-all duration-200 flex flex-col justify-between group shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <LinkedinIcon className="w-4 h-4 text-[#F4F4F5]" />
                    <ExternalLink className="w-3.5 h-3.5 text-[#8B8B93] group-hover:text-[#C8F31D] transition-colors" />
                  </div>
                  <div className="pt-4">
                    <span className="font-bold text-[#F4F4F5] block uppercase">LinkedIn</span>
                    <span className="text-[10px] text-[#8B8B93] block truncate">Arjun M Babu</span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl bg-[#0E0E12] border border-white/10 hover:border-[#C8F31D]/50 transition-all duration-200 flex flex-col justify-between group shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <GithubIcon className="w-4 h-4 text-[#F4F4F5]" />
                    <ExternalLink className="w-3.5 h-3.5 text-[#8B8B93] group-hover:text-[#C8F31D] transition-colors" />
                  </div>
                  <div className="pt-4">
                    <span className="font-bold text-[#F4F4F5] block uppercase">GitHub</span>
                    <span className="text-[10px] text-[#8B8B93] block">@AMB-007</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Academic Footnote */}
            <div className="p-5 rounded-xl bg-[#0E0E12]/60 border border-white/10 text-xs font-mono text-[#8B8B93] space-y-1.5">
              <span className="font-bold text-[#F4F4F5] uppercase block">Academic Affiliation &amp; Phone:</span>
              <p className="text-[#D4D4D8]">Toc H Institute of Science and Technology • B.Tech in CSE (2022–2026)</p>
              <p className="text-[11px] text-[#C8F31D] font-mono">Direct Phone: +91 6235689805</p>
              <p className="text-[11px] text-[#8B8B93]">Primary Hub: {PERSONAL_INFO.location}</p>
            </div>
          </div>

          {/* RIGHT: Direct Message Composition Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-8 rounded-2xl bg-[#0E0E12] border border-white/10 space-y-5 shadow-2xl"
            >
              {/* Hidden Honeypot Input */}
              <input
                type="text"
                name="_gotcha"
                value={formData._gotcha}
                onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="space-y-1 pb-3 border-b border-white/10">
                <h4 className="font-mono text-xs font-bold uppercase text-[#F4F4F5] tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C8F31D]" />
                  <span>// COMPOSE DIRECT MESSAGE</span>
                </h4>
                <p className="text-xs text-[#8B8B93] font-sans">
                  Submitting directly prepares and launches your message via your system mail client.
                </p>
              </div>

              {submittedSuccess && (
                <div className="p-3 rounded-lg bg-[#C8F31D]/15 border border-[#C8F31D]/40 text-xs font-mono text-[#C8F31D] flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Message client initiated. Thank you!</span>
                </div>
              )}

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 font-mono text-xs">
                  <label htmlFor="contact-name" className="font-bold text-[#F4F4F5] uppercase">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className={cn(
                      "w-full px-3.5 py-2.5 rounded-lg bg-[#141418] border text-[#F4F4F5] outline-none transition-colors",
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-white/10 focus:border-[#C8F31D] focus:ring-1 focus:ring-[#C8F31D]"
                    )}
                  />
                  {errors.name && <p className="text-[10px] text-red-400 font-bold">{errors.name}</p>}
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  <label htmlFor="contact-email" className="font-bold text-[#F4F4F5] uppercase">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className={cn(
                      "w-full px-3.5 py-2.5 rounded-lg bg-[#141418] border text-[#F4F4F5] outline-none transition-colors",
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-white/10 focus:border-[#C8F31D] focus:ring-1 focus:ring-[#C8F31D]"
                    )}
                  />
                  {errors.email && <p className="text-[10px] text-red-400 font-bold">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5 font-mono text-xs">
                <label htmlFor="contact-subject" className="font-bold text-[#F4F4F5] uppercase">
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Data Science Opportunity / Analytical Project"
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-lg bg-[#141418] border text-[#F4F4F5] outline-none transition-colors",
                    errors.subject
                      ? "border-red-500 focus:border-red-500"
                      : "border-white/10 focus:border-[#C8F31D] focus:ring-1 focus:ring-[#C8F31D]"
                  )}
                />
                {errors.subject && <p className="text-[10px] text-red-400 font-bold">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="space-y-1.5 font-mono text-xs">
                <label htmlFor="contact-message" className="font-bold text-[#F4F4F5] uppercase">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your inquiry, technical challenge, or role..."
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-lg bg-[#141418] border text-[#F4F4F5] outline-none transition-colors font-sans resize-none",
                    errors.message
                      ? "border-red-500 focus:border-red-500"
                      : "border-white/10 focus:border-[#C8F31D] focus:ring-1 focus:ring-[#C8F31D]"
                  )}
                />
                {errors.message && <p className="text-[10px] text-red-400 font-bold">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-lg bg-[#C8F31D] hover:bg-[#d6fa3f] text-black font-mono text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-[0_0_20px_rgba(200,243,29,0.15)]"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                <span>Transmit Message via Mail Client</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
