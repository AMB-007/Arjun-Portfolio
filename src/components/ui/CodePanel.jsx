import React, { useState } from "react";
import { Terminal, Copy, Check, Code2, Database } from "lucide-react";
import { copyToClipboard } from "@/utils/helpers";

const CODE_SAMPLES = {
  python: {
    filename: "career_ensemble.py",
    language: "Python (ML Ensemble)",
    code: `# Multi-Model Ensemble with Soft Voting
from sklearn.ensemble import VotingClassifier
from xgboost import XGBClassifier
from catboost import CatBoostClassifier

models = [
  ('xgb', XGBClassifier(n_estimators=300, learning_rate=0.05)),
  ('cat', CatBoostClassifier(iterations=300, verbose=0)),
  ('lgb', LGBMClassifier(n_estimators=250, learning_rate=0.05))
]

ensemble = VotingClassifier(
  estimators=models,
  voting='soft',
  weights=[0.35, 0.30, 0.20]
)
ensemble.fit(X_train_72d, y_train)`,
  },
  react: {
    filename: "Hero3DScene.jsx",
    language: "React 19 & Three.js",
    code: `export function Hero3DScene() {
  const mountRef = useRef(null);
  
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    // Developer Network Node Meshes
    nodesGroup.add(nodeMeshes);
    renderer.render(scene, camera);
  }, []);
}`,
  },
  sql: {
    filename: "schema_19_tables.sql",
    language: "MySQL 8.x DDL",
    code: `-- Normalized Assessment Schema
CREATE TABLE student_cognitive_vectors (
  vector_id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id VARCHAR(64) NOT NULL,
  dimensions_json JSON NOT NULL,
  grade_level ENUM('7-10', '11-12', 'UG') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES auth_users(id) ON DELETE CASCADE
);`,
  },
};

export function CodePanel() {
  const [tab, setTab] = useState("python");
  const [copied, setCopied] = useState(false);

  const sample = CODE_SAMPLES[tab];

  const handleCopy = () => {
    copyToClipboard(sample.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] overflow-hidden text-xs font-mono select-none shadow-2xs">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#FBF8EF] dark:bg-[#101A3D] border-b border-[#C9E6F0] dark:border-[#404258]">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setTab("python")}
            className={`px-2.5 py-1 rounded text-[11px] font-bold cursor-pointer transition-colors ${
              tab === "python"
                ? "bg-white dark:bg-[#141F46] text-[#1B2CC1] dark:text-[#7692FF] border border-[#C9E6F0] dark:border-[#404258]"
                : "text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0]"
            }`}
          >
            Python ML
          </button>
          <button
            onClick={() => setTab("react")}
            className={`px-2.5 py-1 rounded text-[11px] font-bold cursor-pointer transition-colors ${
              tab === "react"
                ? "bg-white dark:bg-[#141F46] text-[#1B2CC1] dark:text-[#7692FF] border border-[#C9E6F0] dark:border-[#404258]"
                : "text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0]"
            }`}
          >
            Three.js UI
          </button>
          <button
            onClick={() => setTab("sql")}
            className={`px-2.5 py-1 rounded text-[11px] font-bold cursor-pointer transition-colors ${
              tab === "sql"
                ? "bg-white dark:bg-[#141F46] text-[#1B2CC1] dark:text-[#7692FF] border border-[#C9E6F0] dark:border-[#404258]"
                : "text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0]"
            }`}
          >
            MySQL DDL
          </button>
        </div>

        <button
          onClick={handleCopy}
          className="text-xs text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0] dark:hover:text-white flex items-center gap-1 cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-[#84B179] dark:text-[#A2CB8B]" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      {/* Code Body */}
      <pre className="p-4 overflow-x-auto text-[11px] leading-relaxed text-[#091540] dark:text-[#FFFAF3] bg-white dark:bg-[#141F46]">
        <code>{sample.code}</code>
      </pre>

      {/* Code Footer */}
      <div className="px-4 py-2 bg-[#FBF8EF] dark:bg-[#101A3D] border-t border-[#C9E6F0] dark:border-[#404258] flex items-center justify-between text-[10px] text-[#6B728E] dark:text-[#ABD2FA]">
        <span>// {sample.filename}</span>
        <span className="text-[#1B2CC1] dark:text-[#7692FF] font-bold">{sample.language}</span>
      </div>
    </div>
  );
}

export default CodePanel;
