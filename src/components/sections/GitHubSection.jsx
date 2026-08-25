import React, { useEffect, useState } from "react";
import { FolderGit2, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GitBranchVisual } from "@/components/ui/GitBranchVisual";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon } from "@/components/ui/Icons";

const STATIC_FALLBACK_REPOS = [
  {
    id: 1,
    name: "Personalized-Career-Recommendation-System-Using-Machine-Learning",
    description:
      "Multi-grade adaptive career guidance system with 72-feature vector, XGBoost/CatBoost/LightGBM ensemble, SHAP explainability, and 19 MySQL tables.",
    language: "Python",
    langColor: "bg-[#1B2CC1] dark:bg-[#7692FF]",
    html_url:
      "https://github.com/AMB-007/Personalized-Career-Recommendation-System-Using-Machine-Learning",
  },
  {
    id: 2,
    name: "WEBSHIELD",
    description:
      "Cybersecurity operations dashboard monitoring brute-force and SQL injection telemetry, integrating Nmap/Burp logs with Random Forest classification in Flask.",
    language: "Python",
    langColor: "bg-[#1B2CC1] dark:bg-[#7692FF]",
    html_url: "https://github.com/AMB-007/WEBSHIELD",
  },
  {
    id: 3,
    name: "ChRoMALaB",
    description:
      "Browser-native color theory and design system studio with 14 integrated tools, 360-degree color wheel, WCAG 2.1 contrast checking, and colorblind simulation.",
    language: "JavaScript",
    langColor: "bg-[#7692FF] dark:bg-[#ABD2FA]",
    html_url: "https://github.com/AMB-007/ChRoMALaB",
  },
  {
    id: 4,
    name: "Weather-app",
    description:
      "Interactive real-time atmospheric intelligence application featuring a 3D Three.js WebGL globe, Open-Meteo API telemetry, and Flask proxy caching.",
    language: "JavaScript",
    langColor: "bg-[#84B179] dark:bg-[#A2CB8B]",
    html_url: "https://github.com/AMB-007/Weather-app",
  },
  {
    id: 5,
    name: "Rock-Identification-Mini-Project-",
    description:
      "Computer vision web app in Flask using a Convolutional Neural Network (CNN) to classify 13 distinct rock classes from uploaded images with confidence scoring.",
    language: "Python",
    langColor: "bg-[#1B2CC1] dark:bg-[#7692FF]",
    html_url: "https://github.com/AMB-007/Rock-Identification-Mini-Project-",
  },
  {
    id: 6,
    name: "Quiz-App",
    description:
      "Full-stack examination portal in Flask and MySQL with student and instructor experiences, timed tests, automated grading, and retake controls.",
    language: "Python",
    langColor: "bg-[#1B2CC1] dark:bg-[#7692FF]",
    html_url: "https://github.com/AMB-007/Quiz-App",
  },
];

export function GitHubSection() {
  const [repos, setRepos] = useState(STATIC_FALLBACK_REPOS);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${PERSONAL_INFO.githubUsername}/repos?sort=updated&per_page=6`
    )
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("GitHub API unavailable");
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((r) => ({
            id: r.id,
            name: r.name,
            description: r.description || "Public software repository on GitHub.",
            language: r.language || "Code",
            langColor: r.language === "Python" ? "bg-[#1B2CC1] dark:bg-[#7692FF]" : "bg-[#84B179] dark:bg-[#A2CB8B]",
            html_url: r.html_url,
          }));
          setRepos(mapped);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="github" className="py-20 md:py-28 border-t border-[#C9E6F0] dark:border-[#404258]">
      <div className="editorial-container">
        <SectionHeader
          number="08"
          tag="OPEN SOURCE & CODE"
          title="Built Through Practice"
          description="Explore the applications, experiments, and tools behind my continuous development journey on GitHub."
        />

        {/* Top Git Branch Visualization */}
        <div className="mb-10 max-w-2xl">
          <GitBranchVisual />
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] hover:border-[#1B2CC1] dark:hover:border-[#7692FF] transition-all flex flex-col justify-between group shadow-2xs hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <FolderGit2 className="w-4 h-4 text-[#1B2CC1] dark:text-[#7692FF]" />
                  <ExternalLink className="w-3.5 h-3.5 text-[#6B728E] group-hover:text-[#1B2CC1] dark:group-hover:text-[#7692FF] transition-colors" />
                </div>

                <h4 className="font-bold text-xs sm:text-sm text-[#091540] dark:text-[#FFFAF3] group-hover:text-[#1B2CC1] dark:group-hover:text-[#7692FF] transition-colors line-clamp-1 font-mono">
                  {repo.name}
                </h4>

                <p className="text-xs text-[#404258] dark:text-[#C9E6F0] line-clamp-2 leading-relaxed font-sans">
                  {repo.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#C9E6F0]/60 dark:border-[#404258]/60 flex items-center justify-between text-[11px] font-mono text-[#6B728E] dark:text-[#ABD2FA]">
                <span className="flex items-center gap-1.5 text-[#091540] dark:text-[#FFFAF3]">
                  <span className={`w-2 h-2 rounded-full ${repo.langColor || "bg-[#1B2CC1] dark:bg-[#7692FF]"}`} />
                  <span>{repo.language}</span>
                </span>
                <span className="text-[#1B2CC1] dark:text-[#7692FF] font-bold group-hover:underline">
                  View Code →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GitHubSection;
