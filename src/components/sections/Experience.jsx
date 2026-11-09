import React from "react";
import { Briefcase, GraduationCap, Award, HeartHandshake, CheckCircle2 } from "lucide-react";

const TIMELINE_ENTRIES = [
  {
    type: "Internship",
    icon: Briefcase,
    title: "Data Science Intern",
    organization: "Luminar Technolab",
    period: "2026 — Present",
    location: "Kerala, India",
    badge: "Current Role",
    badgeStyle: "bg-[var(--accent)]/15 text-[var(--accent)] border-[var(--accent)]/30",
    bullets: [
      "Developing applied machine learning models, exploratory data analysis (EDA) pipelines, and feature engineering workflows.",
      "Evaluating supervised classification models using Scikit-learn, cross-validation scoring, and confusion matrix diagnostics.",
      "Creating analytical dashboards and business intelligence reports with Microsoft Power BI and SQL database queries.",
    ],
    skills: ["Python", "SQL", "Power BI", "EDA", "Scikit-learn", "Machine Learning"],
  },
  {
    type: "Education",
    icon: GraduationCap,
    title: "B.Tech in Computer Science and Engineering",
    organization: "Toc H Institute of Science and Technology",
    period: "2022 — 2026",
    location: "Kerala, India",
    badge: "Completed",
    badgeStyle: "bg-[var(--surface-subtle)] text-[var(--text-primary)] border-[var(--border)]",
    bullets: [
      "Completed comprehensive undergraduate engineering curriculum focused on computing foundations, algorithms, and applied AI.",
      "Core coursework: Data Structures, Algorithms, Relational Database Management Systems (MySQL), Operating Systems, Software Engineering.",
      "Delivered final engineering thesis: Multi-Grade Adaptive Career Recommendation Engine with TreeExplainer SHAP interpretability.",
    ],
    skills: ["Data Structures", "Algorithms", "MySQL", "Machine Learning", "Software Engineering"],
  },
  {
    type: "Training",
    icon: Award,
    title: "Front End Web Development — 60-Hour Training Program",
    organization: "Aesthetix Edu-Tech",
    period: "2025",
    location: "Kerala, India",
    badge: null,
    bullets: [
      "Completed intensive 60-hour hands-on curriculum covering modern web standards, JavaScript (ES6+), and responsive CSS architectures.",
      "Built interactive web interfaces emphasizing accessible DOM patterns, performance budgeting, and cross-browser reliability.",
    ],
    skills: ["JavaScript (ES6+)", "Responsive Web Design", "DOM APIs", "HTML5 & CSS3"],
  },
  {
    type: "Internship",
    icon: Briefcase,
    title: "Flutter Internship Program",
    organization: "Genzee Technologies",
    period: "2024",
    location: "Kerala, India",
    badge: null,
    bullets: [
      "Developed cross-platform mobile user interfaces, widget trees, and responsive layout hierarchies.",
      "Integrated RESTful API endpoints for asynchronous remote data synchronization and state management.",
    ],
    skills: ["Flutter", "Dart", "Mobile UI", "REST APIs"],
  },
  {
    type: "Leadership",
    icon: Award,
    title: "SquadSkills Industry Leadership Program",
    organization: "GooseBerry Media",
    period: "2024",
    location: "Kerala, India",
    badge: null,
    bullets: [
      "Participated in professional engineering development focused on agile methodologies, technical communication, and team deliverables.",
    ],
    skills: ["Technical Communication", "Agile Workflows", "Problem Solving"],
  },
  {
    type: "Volunteer",
    icon: HeartHandshake,
    title: "National Service Scheme (NSS) Volunteer",
    organization: "Toc H Institute NSS Unit",
    period: "2022 — Present",
    location: "Kerala, India",
    badge: null,
    bullets: [
      "Coordinated community healthcare awareness camps, environmental cleanliness drives, and social welfare programs across Kerala.",
    ],
    skills: ["Community Outreach", "Public Health Support", "Team Leadership"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-b border-[var(--border)]">
      <div className="site-container">
        {/* Numbered Section Header Bar */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
            05 &bull; Experience
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl text-[var(--text-primary)] font-normal tracking-tight leading-snug">
            Career timeline &amp;{" "}
            <span className="italic font-serif marker-underline">
              academic record.
            </span>
          </h2>
          <p className="mt-3 text-[17px] text-[var(--text-secondary)] leading-relaxed">
            Practical data science internship experience, completed undergraduate degree in Computer Science,
            accredited technical training, and community service.
          </p>
        </div>

        {/* Two-Column Editorial Timeline (Date on left, Details on right) */}
        <div className="divide-y divide-[var(--border)] border-t border-[var(--border)]">
          {TIMELINE_ENTRIES.map((entry, idx) => (
            <article key={idx} className="py-9 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start">
              {/* Left Column: Date & Meta */}
              <div className="md:col-span-3 space-y-1.5">
                <span className="font-mono text-xs sm:text-[13px] font-bold text-[var(--accent)] tracking-wider block">
                  {entry.period}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)] block">
                  {entry.type} &bull; {entry.location}
                </span>
              </div>

              {/* Right Column: Title, Org, Bullets, Skills */}
              <div className="md:col-span-9 space-y-3.5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
                    {entry.title}
                  </h3>
                  {entry.badge && (
                    <span className={`inline-flex items-center text-xs font-mono font-medium px-2.5 py-0.5 rounded-full border whitespace-nowrap shrink-0 ${entry.badgeStyle}`}>
                      {entry.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm font-medium text-[var(--accent)] font-mono">
                  {entry.organization}
                </p>

                {/* 2-3 Clean Bullet Lines */}
                <ul className="space-y-2 pt-1 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {entry.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-[var(--accent)] font-bold shrink-0 mt-0.5">&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {entry.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-md bg-[var(--surface-subtle)] text-[var(--text-secondary)] border border-[var(--border)] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Prior Schooling Footnote Note */}
        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-[13px] font-mono text-[var(--text-muted)]">
          <span>Prior Schooling: Higher Secondary (Class XII, 2020–2022) &bull; High School (Class X, 2020)</span>
          <span>Kerala, India</span>
        </div>
      </div>
    </section>
  );
}

export default Experience;
