import React, { useState } from "react";
import { Mail, Copy, Check, Send, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { copyToClipboard } from "@/utils/helpers";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    _gotcha: "",
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedFeedback, setSubmittedFeedback] = useState(null);

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

    const subjectLine = formData.subject.trim()
      ? `Portfolio Inquiry: ${formData.subject}`
      : `Portfolio Inquiry from ${formData.name}`;

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedFeedback({
        type: "success",
        message: "Your default email application is launching with this inquiry pre-filled. You can also write directly to arjunmbabu.ds@gmail.com.",
      });
      setFormData({ name: "", email: "", subject: "", message: "", _gotcha: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--bg)]">
      <div className="site-container">
        {/* Section Header Bar (06 / CONTACT) */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--primary-accent)]">
            06 / CONTACT
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* Section Heading (Section 19: LET'S BUILD SOMETHING USEFUL.) */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] font-normal tracking-tight leading-snug">
            Let's build{" "}
            <span className="italic font-serif marker-underline">
              something useful.
            </span>
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans">
            Open to software development opportunities, technical collaborations and practical projects.
          </p>
        </div>

        {/* 2-Column Clean Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with Copy Button */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-5 shadow-xs">
              <div>
                <span className="text-xs font-mono font-semibold text-[var(--primary-accent)] uppercase tracking-wider block mb-1.5">
                  Direct Email
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-display text-lg sm:text-xl font-bold text-[var(--text-primary)] hover:text-[var(--primary-accent)] transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-secondary text-xs font-mono py-2 px-3"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[var(--data-accent)]" />
                      <span className="text-[var(--data-accent)] font-semibold">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[var(--primary-accent)]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="btn-primary text-xs font-sans py-2 px-3.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Mail</span>
                </a>
              </div>
            </div>

            {/* Social & Verification Profiles */}
            <div className="p-7 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-4 shadow-xs">
              <span className="text-xs font-mono font-semibold text-[var(--text-muted)] uppercase tracking-wider block">
                Professional Networks &amp; Codebases
              </span>

              <div className="space-y-3 font-mono text-xs">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[var(--surface-subtle)] hover:bg-[var(--surface-warm)] border border-[var(--border)] hover:border-[var(--primary-accent)] flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-[var(--primary-accent)]" />
                    <div>
                      <span className="text-[var(--text-primary)] font-semibold font-sans block text-sm">
                        GitHub Profile
                      </span>
                      <span className="text-[var(--text-muted)] text-[11px]">
                        @AMB-007 &bull; Open Source Repositories
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--primary-accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[var(--surface-subtle)] hover:bg-[var(--surface-warm)] border border-[var(--border)] hover:border-[var(--primary-accent)] flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-[var(--primary-accent)]" />
                    <div>
                      <span className="text-[var(--text-primary)] font-semibold font-sans block text-sm">
                        LinkedIn Profile
                      </span>
                      <span className="text-[var(--text-muted)] text-[11px]">
                        in/arjun-m-babu &bull; Professional Network
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--primary-accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Location & Timezone Details */}
            <div className="p-6 rounded-2xl bg-[var(--surface-subtle)] border border-[var(--border)] font-mono text-xs space-y-2">
              <div className="flex items-center gap-2 text-[var(--text-primary)]">
                <MapPin className="w-3.5 h-3.5 text-[var(--primary-accent)]" />
                <span className="font-semibold">{PERSONAL_INFO.location}</span>
                <span className="text-[var(--text-muted)]">(IST, UTC+5:30)</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <Clock className="w-3.5 h-3.5 text-[var(--data-accent)]" />
                <span>Response window: Within 24 business hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form with Full Validation (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xs">
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-[var(--text-primary)] mb-2">
                Send an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-sans leading-relaxed mb-6">
                Fill in your project brief or inquiry. Submitting will prepare your message directly via your email client.
              </p>

              {submittedFeedback && (
                <div className="mb-6 p-4 rounded-xl bg-[var(--surface-warm)] border border-[var(--primary-accent)]/30 text-xs font-mono text-[var(--text-primary)] space-y-1 animate-editorial-fade">
                  <div className="flex items-center gap-2 font-bold text-[var(--primary-accent)]">
                    <Check className="w-4 h-4" />
                    <span>Inquiry Ready</span>
                  </div>
                  <p className="font-sans text-[13px] text-[var(--text-secondary)] leading-relaxed">
                    {submittedFeedback.message}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot field for bot spam */}
                <input
                  type="text"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-[var(--text-primary)]">
                      Your Name <span className="text-[#F62440]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full px-4 py-2.5 rounded-lg bg-[var(--surface-subtle)] border text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-accent)] transition-all font-sans ${
                        errors.name ? "border-[#F62440]" : "border-[var(--border)]"
                      }`}
                    />
                    {errors.name && <p className="text-xs text-[#F62440] font-mono mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-[var(--text-primary)]">
                      Your Email <span className="text-[#F62440]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. jane@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-4 py-2.5 rounded-lg bg-[var(--surface-subtle)] border text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-accent)] transition-all font-sans ${
                        errors.email ? "border-[#F62440]" : "border-[var(--border)]"
                      }`}
                    />
                    {errors.email && <p className="text-xs text-[#F62440] font-mono mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="block text-xs font-mono font-medium text-[var(--text-primary)]">
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Full-Stack Role / Machine Learning Project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-accent)] transition-all font-sans"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-[var(--text-primary)]">
                    Project Brief or Message <span className="text-[#F62440]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows="5"
                    required
                    placeholder="Briefly describe what you're working on, role details, or collaboration ideas..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    className={`w-full px-4 py-2.5 rounded-lg bg-[var(--surface-subtle)] border text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-accent)] transition-all font-sans ${
                      errors.message ? "border-[#F62440]" : "border-[var(--border)]"
                    }`}
                  />
                  {errors.message && <p className="text-xs text-[#F62440] font-mono mt-1">{errors.message}</p>}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto"
                  >
                    <Send className="w-4 h-4 shrink-0" />
                    <span>{isSubmitting ? "Opening Email Client..." : "Send Inquiry via Email"}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
