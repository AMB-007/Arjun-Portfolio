import React, { useState } from "react";
import { Mail, Copy, Check, Send, MapPin, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { copyToClipboard } from "@/utils/helpers";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    _gotcha: "",
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
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Please write a message.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData._gotcha) return; // Discard automated bots
    if (!validate()) return;

    setIsSubmitting(true);
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setFormData({ name: "", email: "", message: "", _gotcha: "" });
      setTimeout(() => setSubmittedSuccess(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="site-container">
        {/* Numbered Section Header Bar */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
            05 &bull; Contact
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-display text-4xl sm:text-5xl text-[var(--text-primary)] font-normal tracking-tight leading-snug">
            Let's work{" "}
            <span className="italic font-serif marker-underline">
              together.
            </span>
          </h2>
          <p className="mt-3 text-[17px] text-[var(--text-secondary)] leading-relaxed">
            I am currently open to Data Analyst, Machine Learning, and Business Intelligence opportunities.
            Reach out via direct email or submit the inquiry brief below.
          </p>
        </div>

        {/* 2-Column Clean Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Verification (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Prominent Email Card with Copy Button */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-5 notebook-card">
              <div>
                <span className="text-xs font-mono font-medium text-[var(--accent)] tracking-wide block mb-1.5">
                  Direct Inquiries
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-display text-lg sm:text-xl font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[var(--surface-subtle)] hover:bg-[var(--border)] text-xs sm:text-[13px] font-mono text-[var(--text-primary)] border border-[var(--border)] transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[var(--positive)]" />
                      <span>Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <span>Copy email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="btn-primary text-xs sm:text-[13px] font-mono"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send email</span>
                </a>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-3.5">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] flex items-center gap-3 transition-colors group notebook-card"
              >
                <div className="w-9 h-9 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] shrink-0">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs sm:text-[13px] font-semibold text-[var(--text-primary)] block group-hover:text-[var(--accent)] transition-colors">
                    LinkedIn
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)] truncate block">
                    arjun-m-babu
                  </span>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] flex items-center gap-3 transition-colors group notebook-card"
              >
                <div className="w-9 h-9 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] shrink-0">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs sm:text-[13px] font-semibold text-[var(--text-primary)] block group-hover:text-[var(--accent)] transition-colors">
                    GitHub
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)] truncate block">
                    AMB-007
                  </span>
                </div>
              </a>
            </div>

            {/* Location & Timezone Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)] flex items-center justify-between text-xs sm:text-[13px] font-mono text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--accent)]" />
                <span>Kerala, India</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--text-muted)]">
                <Clock className="w-4 h-4" />
                <span>IST (UTC+5:30)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Brief Form (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-7 sm:p-9 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-5 notebook-card"
            >
              {/* Anti-spam honeypot */}
              <input
                type="text"
                name="_gotcha"
                value={formData._gotcha}
                onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <div>
                <label
                  htmlFor="contactName"
                  className="block text-xs sm:text-[13px] font-mono font-medium text-[var(--text-primary)] mb-2"
                >
                  Name <span className="text-[var(--accent)]">*</span>
                </label>
                <input
                  id="contactName"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name or Organization"
                  className={`w-full px-4 py-2.5 rounded-lg bg-[var(--bg)] border text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors ${
                    errors.name ? "border-[var(--negative)]" : "border-[var(--border)]"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-[var(--negative)] font-mono">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contactEmail"
                  className="block text-xs sm:text-[13px] font-mono font-medium text-[var(--text-primary)] mb-2"
                >
                  Email <span className="text-[var(--accent)]">*</span>
                </label>
                <input
                  id="contactEmail"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className={`w-full px-4 py-2.5 rounded-lg bg-[var(--bg)] border text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors ${
                    errors.email ? "border-[var(--negative)]" : "border-[var(--border)]"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-[var(--negative)] font-mono">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contactMessage"
                  className="block text-xs sm:text-[13px] font-mono font-medium text-[var(--text-primary)] mb-2"
                >
                  Project or Role Brief <span className="text-[var(--accent)]">*</span>
                </label>
                <textarea
                  id="contactMessage"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the role, analytics challenges, or project goals..."
                  className={`w-full px-4 py-2.5 rounded-lg bg-[var(--bg)] border text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors resize-none ${
                    errors.message ? "border-[var(--negative)]" : "border-[var(--border)]"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-[var(--negative)] font-mono">{errors.message}</p>
                )}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary text-xs sm:text-[13px] font-mono px-6 py-3 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "Drafting Mail..." : "Send Message"}</span>
                </button>

                {submittedSuccess && (
                  <span className="text-xs font-mono text-[var(--positive)] flex items-center gap-1.5 animate-fadeIn">
                    <Check className="w-4 h-4" />
                    Mail client opened
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
