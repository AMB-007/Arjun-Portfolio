import React, { useEffect, useState } from "react";
import { FolderGit2, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GitBranchVisual } from "@/components/ui/GitBranchVisual";
import { PERSONAL_INFO } from "@/data/portfolioData";

const STATIC_FALLBACK_REPOS = [
  {
    id: 1,
    name: "Personalized-Career-Recommendation-System-Using-Machine-Learning",
    description:
      "Multi-grade adaptive career guidance system with 72-feature vector, XGBoost/CatBoost/LightGBM ensemble, SHAP explainability, and 19 MySQL tables.",
    language: "Python",
    html_url:
      "https://github.com/AMB-007/Personalized-Career-Recommendation-System-Using-Machine-Learning",
  },
  {
    id: 2,
    name: "WEBSHIELD",
    description:
      "Security telemetry operations dashboard monitoring brute-force and SQL injection patterns, integrating Nmap/Burp logs with Random Forest classification in Flask.",
    language: "Python",
    html_url: "https://github.com/AMB-007/WEBSHIELD",
  },
  {
    id: 3,
    name: "Rock-Identification-Mini-Project-",
    description:
      "Computer vision application in Flask using a Convolutional Neural Network (CNN) to classify 13 distinct geological rock classes from uploaded images.",
    language: "Python",
    html_url: "https://github.com/AMB-007/Rock-Identification-Mini-Project-",
  },
  {
    id: 4,
    name: "Weather-app",
    description:
      "Atmospheric intelligence application aggregating Open-Meteo REST telemetry, air quality index metrics, and Flask cache proxying.",
    language: "Python / JS",
    html_url: "https://github.com/AMB-007/Weather-app",
  },
  {
    id: 5,
    name: "Quiz-App",
    description:
      "Examination portal in Flask and MySQL with student and instructor experiences, server-side grading algorithms, and relational attempt governance.",
    language: "Python / SQL",
    html_url: "https://github.com/AMB-007/Quiz-App",
  },
  {
    id: 6,
    name: "ChRoMALaB",
    description:
      "Browser-native color theory and accessibility studio with 14 integrated tools, WCAG 2.1 contrast formulas, and CVD simulation matrices.",
    language: "JavaScript",
    html_url: "https://github.com/AMB-007/ChRoMALaB",
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
            description: r.description || "Public repository on GitHub.",
            language: r.language || "Code",
            html_url: r.html_url,
          }));
          setRepos(mapped);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="github" className="py-20 md:py-28 border-b border-[#D4D4D4] dark:border-[#171717]">
      <div className="editorial-container">
        <SectionHeader
          number="08"
          tag="OPEN SOURCE CODE"
          title="GitHub Repositories"
          description="Explore the codebases, algorithms, and machine learning pipelines hosted publicly on GitHub."
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
              className="p-6 bg-white dark:bg-[#0A0A0A] border border-[#D4D4D4] dark:border-[#171717] hover:border-black dark:hover:border-white transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <FolderGit2 className="w-4 h-4 text-black dark:text-white" />
                  <ExternalLink className="w-3.5 h-3.5 text-[#737373] group-hover:text-black dark:group-hover:text-white transition-colors" />
                </div>

                <h3 className="font-bold text-xs sm:text-sm text-black dark:text-white transition-colors line-clamp-1 font-mono uppercase">
                  {repo.name}
                </h3>

                <p className="text-xs text-[#737373] dark:text-[#A3A3A3] line-clamp-2 leading-relaxed font-sans">
                  {repo.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#D4D4D4] dark:border-[#171717] flex items-center justify-between text-[11px] font-mono text-[#737373]">
                <span className="flex items-center gap-1.5 text-black dark:text-white font-semibold">
                  <span className="w-1.5 h-1.5 bg-black dark:bg-white" />
                  <span>{repo.language}</span>
                </span>
                <span className="text-black dark:text-white font-bold group-hover:underline">
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
