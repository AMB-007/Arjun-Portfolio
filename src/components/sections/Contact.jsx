import React, { useState } from "react";
import { Mail, Phone, Copy, Check, Send, CheckCircle2, AlertCircle, ChevronDown, ChevronUp, ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { copyToClipboard } from "@/utils/helpers";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showDirectDetails, setShowDirectDetails] = useState(false);

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
    if (!validate()) return;

    setStatus("submitting");

    setTimeout(() => {
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Arjun,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;

      window.location.href = mailtoUrl;
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 border-t border-[#C9E6F0] dark:border-[#404258] bg-[#FBF8EF]/50 dark:bg-[#101A3D]/40">
      <div className="editorial-container">
        <SectionHeader
          number="09"
          tag="GET IN TOUCH"
          title="Let's Connect"
          description="Open to software development opportunities, technical collaborations and projects where I can build practical solutions."
        />

        {/* Large Editorial Headline & Status */}
        <div className="mb-14 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#E8F5BD]/60 text-[#15803D] dark:bg-[#84B179]/20 dark:text-[#A2CB8B] border border-[#C7EABB] dark:border-[#50577A]">
              <span className="w-2 h-2 rounded-full bg-[#84B179] dark:bg-[#A2CB8B] animate-pulse" />
              <span>OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES</span>
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#091540] dark:text-[#FFFAF3] font-sans uppercase">
            LET&apos;S BUILD SOMETHING USEFUL.
          </h3>
          <p className="text-sm sm:text-base text-[#404258] dark:text-[#C9E6F0] max-w-2xl font-sans">
            Open to software development opportunities, technical collaborations and practical projects.
          </p>

          {/* Network Data Sequence */}
          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-[#ABD2FA]/30 text-[#1B2CC1] dark:bg-[#7692FF]/20 dark:text-[#ABD2FA] border border-[#C9E6F0] dark:border-[#50577A] font-bold">
              CODE
            </span>
            <span className="text-[#6B728E] dark:text-[#ABD2FA]">→</span>
            <span className="px-2.5 py-1 rounded bg-[#C9E6F0]/40 text-[#091540] dark:bg-[#1A2752] dark:text-[#C9E6F0] border border-[#78B3CE] dark:border-[#50577A] font-bold">
              BUILD
            </span>
            <span className="text-[#6B728E] dark:text-[#ABD2FA]">→</span>
            <span className="px-2.5 py-1 rounded bg-[#FFE5BF]/70 text-[#C2410C] dark:bg-[#F96E2A]/20 dark:text-[#F96E2A] border border-[#FFE5BF] dark:border-[#50577A] font-bold">
              LEARN
            </span>
            <span className="text-[#6B728E] dark:text-[#ABD2FA]">→</span>
            <span className="px-2.5 py-1 rounded bg-[#E8F5BD]/60 text-[#15803D] dark:bg-[#84B179]/20 dark:text-[#A2CB8B] border border-[#C7EABB] dark:border-[#50577A] font-bold">
              DEPLOY
            </span>
          </div>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3 font-sans">
              <div className="text-[11px] font-mono font-semibold uppercase text-[#6B728E] dark:text-[#ABD2FA]">
                // Direct Communication:
              </div>

              {/* Email Direct Row */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] space-y-3 shadow-2xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#1B2CC1] dark:text-[#7692FF]" />
                    <span className="text-xs font-bold text-[#091540] dark:text-[#FFFAF3] font-mono">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="text-xs font-mono text-[#1B2CC1] dark:text-[#7692FF] hover:underline cursor-pointer flex items-center gap-1"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-[#84B179] dark:text-[#A2CB8B]" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold bg-[#1B2CC1] hover:bg-[#7692FF] text-white dark:bg-[#7692FF] dark:hover:bg-[#ABD2FA] dark:text-[#091540] transition-colors font-mono shadow-2xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Open Email Composer</span>
                </a>
              </div>

              {/* Professional Links */}
              <div className="space-y-2 pt-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] hover:border-[#1B2CC1] dark:hover:border-[#7692FF] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-[#1B2CC1] dark:text-[#7692FF]" />
                    <span className="text-xs font-bold text-[#091540] dark:text-[#FFFAF3]">
                      LinkedIn Profile
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#1B2CC1] dark:text-[#7692FF]">↗</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] hover:border-[#1B2CC1] dark:hover:border-[#7692FF] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-[#091540] dark:text-[#FFFAF3]" />
                    <span className="text-xs font-bold text-[#091540] dark:text-[#FFFAF3]">
                      GitHub Profile
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#1B2CC1] dark:text-[#7692FF]">↗</span>
                </a>
              </div>

              {/* Expandable Phone Details */}
              <div className="pt-2">
                <button
                  onClick={() => setShowDirectDetails(!showDirectDetails)}
                  className="text-xs font-mono text-[#6B728E] hover:text-[#091540] dark:text-[#ABD2FA] dark:hover:text-white flex items-center justify-between w-full pt-2 border-t border-[#C9E6F0] dark:border-[#404258] cursor-pointer"
                >
                  <span>{showDirectDetails ? "Hide Phone & Location" : "View Phone & Location Details"}</span>
                  {showDirectDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {showDirectDetails && (
                  <div className="mt-3 p-3 rounded bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] space-y-1.5 text-xs font-mono">
                    <div className="flex items-center gap-2 text-[#091540] dark:text-[#FFFAF3]">
                      <Phone className="w-3.5 h-3.5 text-[#1B2CC1] dark:text-[#7692FF]" />
                      <span>{PERSONAL_INFO.phone}</span>
                    </div>
                    <div className="text-[11px] text-[#6B728E] dark:text-[#ABD2FA]">
                      Location: {PERSONAL_INFO.location}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] shadow-2xs">
              <h4 className="text-base font-bold text-[#091540] dark:text-[#FFFAF3] mb-1 font-sans">
                Send a Message
              </h4>
              <p className="text-xs text-[#6B728E] dark:text-[#ABD2FA] mb-6 font-sans">
                Fill in the details below to initiate a direct conversation.
              </p>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-emerald-950 dark:text-emerald-300 font-sans">
                    <p className="font-bold">Message prepared!</p>
                    <p className="mt-0.5">Your email client has been opened with your prefilled message.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-[#091540] dark:text-[#FFFAF3] mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Johnson"
                      className="w-full px-3 py-2 rounded-lg bg-[#FBF8EF] dark:bg-[#101A3D] border border-[#C9E6F0] dark:border-[#404258] text-[#091540] dark:text-[#FFFAF3] focus:outline-none focus:ring-1 focus:ring-[#1B2CC1] dark:focus:ring-[#7692FF]"
                    />
                    {errors.name && <p className="mt-1 text-rose-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block font-medium text-[#091540] dark:text-[#FFFAF3] mb-1">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3 py-2 rounded-lg bg-[#FBF8EF] dark:bg-[#101A3D] border border-[#C9E6F0] dark:border-[#404258] text-[#091540] dark:text-[#FFFAF3] focus:outline-none focus:ring-1 focus:ring-[#1B2CC1] dark:focus:ring-[#7692FF]"
                    />
                    {errors.email && <p className="mt-1 text-rose-500">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-[#091540] dark:text-[#FFFAF3] mb-1">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Full-Stack / AI Opportunity"
                    className="w-full px-3 py-2 rounded-lg bg-[#FBF8EF] dark:bg-[#101A3D] border border-[#C9E6F0] dark:border-[#404258] text-[#091540] dark:text-[#FFFAF3] focus:outline-none focus:ring-1 focus:ring-[#1B2CC1] dark:focus:ring-[#7692FF]"
                  />
                  {errors.subject && <p className="mt-1 text-rose-500">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block font-medium text-[#091540] dark:text-[#FFFAF3] mb-1">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Arjun, I reviewed your projects and would like to discuss..."
                    className="w-full px-3 py-2 rounded-lg bg-[#FBF8EF] dark:bg-[#101A3D] border border-[#C9E6F0] dark:border-[#404258] text-[#091540] dark:text-[#FFFAF3] focus:outline-none focus:ring-1 focus:ring-[#1B2CC1] dark:focus:ring-[#7692FF] resize-y"
                  />
                  {errors.message && <p className="mt-1 text-rose-500">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={status === "submitting"}
                  icon={<Send className="w-3.5 h-3.5" />}
                  className="font-mono"
                >
                  {status === "submitting" ? "Processing..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
