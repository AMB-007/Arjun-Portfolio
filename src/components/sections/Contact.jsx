import React, { useState } from "react";
import { Mail, Copy, Check, Send, ExternalLink, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { copyToClipboard, cn } from "@/utils/helpers";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    setIsSubmitting(true);
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Data Science Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Hi Arjun,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;

    window.location.href = mailtoUrl;
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white dark:bg-[#000000]">
      <div className="editorial-container">
        <SectionHeader
          number="09"
          tag="GET IN TOUCH"
          title="Connect"
          description="Interested in Data Science, Machine Learning, and data-driven problem-solving. Feel free to connect."
        />

        {/* Large Editorial Headline & Status */}
        <div className="mb-14 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-bold bg-[#F5F5F5] dark:bg-[#141414] text-black dark:text-white border border-[#D4D4D4] dark:border-[#262626]">
              <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse" />
              <span>OPEN TO DATA SCIENCE &amp; MACHINE LEARNING OPPORTUNITIES</span>
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-black dark:text-white font-sans uppercase">
            LET&apos;S WORK WITH DATA.
          </h3>
          <p className="text-sm sm:text-base text-[#737373] dark:text-[#A3A3A3] max-w-2xl font-sans">
            Interested in Data Science, Machine Learning, and data-driven problem-solving. Feel free to connect.
          </p>
        </div>

        {/* 2-Column Editorial Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: Verified Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-black dark:text-white uppercase tracking-wider block pb-2 border-b border-[#D4D4D4] dark:border-[#171717]">
                // VERIFIED CONTACT CHANNELS
              </span>

              {/* Direct Email Card */}
              <div className="p-6 bg-[#F5F5F5] dark:bg-[#0A0A0A] border border-[#D4D4D4] dark:border-[#171717] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#737373]">
                  <span className="uppercase font-bold">Professional Email</span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base sm:text-lg font-bold font-mono text-black dark:text-white hover:underline block break-all"
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
                  className="p-4 bg-[#F5F5F5] dark:bg-[#0A0A0A] border border-[#D4D4D4] dark:border-[#171717] hover:border-black dark:hover:border-white transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between">
                    <LinkedinIcon className="w-4 h-4 text-black dark:text-white" />
                    <ExternalLink className="w-3.5 h-3.5 text-[#737373] group-hover:text-black dark:group-hover:text-white" />
                  </div>
                  <div className="pt-4">
                    <span className="font-bold text-black dark:text-white block uppercase">LinkedIn</span>
                    <span className="text-[10px] text-[#737373] block truncate">Arjun M Babu</span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#F5F5F5] dark:bg-[#0A0A0A] border border-[#D4D4D4] dark:border-[#171717] hover:border-black dark:hover:border-white transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between">
                    <GithubIcon className="w-4 h-4 text-black dark:text-white" />
                    <ExternalLink className="w-3.5 h-3.5 text-[#737373] group-hover:text-black dark:group-hover:text-white" />
                  </div>
                  <div className="pt-4">
                    <span className="font-bold text-black dark:text-white block uppercase">GitHub</span>
                    <span className="text-[10px] text-[#737373] block">@AMB-007</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Academic Footnote */}
            <div className="p-4 bg-[#F5F5F5] dark:bg-[#0A0A0A] border border-[#D4D4D4] dark:border-[#171717] text-xs font-mono text-[#737373] space-y-1">
              <span className="font-bold text-black dark:text-white uppercase block">Academic Affiliation:</span>
              <p>Toc H Institute of Science and Technology • B.Tech CSE (2022–2026)</p>
              <p className="text-[11px] text-[#737373]">Location: {PERSONAL_INFO.location}</p>
            </div>
          </div>

          {/* RIGHT: Direct Message Composition Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-8 bg-white dark:bg-[#0A0A0A] border border-[#D4D4D4] dark:border-[#171717] space-y-5"
            >
              <div className="space-y-1 pb-2 border-b border-[#D4D4D4] dark:border-[#171717]">
                <h4 className="font-mono text-xs font-bold uppercase text-black dark:text-white tracking-wider">
                  // COMPOSE DIRECT MESSAGE
                </h4>
                <p className="text-xs text-[#737373] font-sans">
                  Submitting will open your default email client with your message pre-filled.
                </p>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 font-mono text-xs">
                  <label htmlFor="contact-name" className="font-bold text-black dark:text-white uppercase">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className={cn(
                      "w-full px-3 py-2.5 bg-[#F5F5F5] dark:bg-[#141414] border text-black dark:text-white outline-none transition-colors",
                      errors.name ? "border-black dark:border-white font-bold" : "border-[#D4D4D4] dark:border-[#262626] focus:border-black dark:focus:border-white"
                    )}
                  />
                  {errors.name && <p className="text-[10px] text-black dark:text-white font-bold">{errors.name}</p>}
                </div>

                <div className="space-y-1 font-mono text-xs">
                  <label htmlFor="contact-email" className="font-bold text-black dark:text-white uppercase">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className={cn(
                      "w-full px-3 py-2.5 bg-[#F5F5F5] dark:bg-[#141414] border text-black dark:text-white outline-none transition-colors",
                      errors.email ? "border-black dark:border-white font-bold" : "border-[#D4D4D4] dark:border-[#262626] focus:border-black dark:focus:border-white"
                    )}
                  />
                  {errors.email && <p className="text-[10px] text-black dark:text-white font-bold">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1 font-mono text-xs">
                <label htmlFor="contact-subject" className="font-bold text-black dark:text-white uppercase">
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Data Science Opportunity / Collaboration"
                  className={cn(
                    "w-full px-3 py-2.5 bg-[#F5F5F5] dark:bg-[#141414] border text-black dark:text-white outline-none transition-colors",
                    errors.subject ? "border-black dark:border-white font-bold" : "border-[#D4D4D4] dark:border-[#262626] focus:border-black dark:focus:border-white"
                  )}
                />
                {errors.subject && <p className="text-[10px] text-black dark:text-white font-bold">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="space-y-1 font-mono text-xs">
                <label htmlFor="contact-message" className="font-bold text-black dark:text-white uppercase">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your inquiry, project, or role..."
                  className={cn(
                    "w-full px-3 py-2.5 bg-[#F5F5F5] dark:bg-[#141414] border text-black dark:text-white outline-none transition-colors font-sans resize-none",
                    errors.message ? "border-black dark:border-white font-bold" : "border-[#D4D4D4] dark:border-[#262626] focus:border-black dark:focus:border-white"
                  )}
                />
                {errors.message && <p className="text-[10px] text-black dark:text-white font-bold">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-black text-white hover:bg-[#171717] dark:bg-white dark:text-black dark:hover:bg-[#E5E5E5] border border-black dark:border-white font-mono text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message via Email Client</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
