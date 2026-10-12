import React, { useState } from "react";
import { Terminal, Copy, Check, Cpu, Database, Binary } from "lucide-react";
import { copyToClipboard } from "@/utils/helpers";

const CODE_SAMPLES = {
  python: {
    filename: "career_ensemble.py",
    language: "Python • ML Ensemble",
    icon: Cpu,
    code: `# Multi-Model Ensemble with Soft Voting
from sklearn.ensemble import VotingClassifier
from xgboost import XGBClassifier
from catboost import CatBoostClassifier
from lightgbm import LGBMClassifier
import shap

# 1. Base Classifiers
models = [
  ('xgb', XGBClassifier(n_estimators=300, learning_rate=0.05, max_depth=5)),
  ('cat', CatBoostClassifier(iterations=300, learning_rate=0.05, verbose=0)),
  ('lgb', LGBMClassifier(n_estimators=250, learning_rate=0.05))
]

# 2. Weighted Soft Voting Ensemble
ensemble = VotingClassifier(
  estimators=models,
  voting='soft',
  weights=[0.35, 0.30, 0.20]
)
ensemble.fit(X_train_72d, y_train)

# 3. SHAP Feature Attribution
explainer = shap.TreeExplainer(ensemble.named_estimators_['xgb'])
shap_values = explainer.shap_values(X_test_sample)`,
  },
  cnn: {
    filename: "rock_specimen_cnn.py",
    language: "Python • CNN Preprocessing",
    icon: Binary,
    code: `# Geological Specimen Preprocessing Pipeline
import numpy as np
from PIL import Image

def preprocess_specimen_tensor(image_path, target_size=(64, 64)):
  img = Image.open(image_path).convert('RGB')
  
  # Center crop to preserve specimen striations
  w, h = img.size
  min_dim = min(w, h)
  left = (w - min_dim) / 2
  top = (h - min_dim) / 2
  img_cropped = img.crop((left, top, left + min_dim, top + min_dim))
  
  # Resize to 64x64 and normalize [0, 1]
  img_resized = img_cropped.resize(target_size, Image.Resampling.LANCZOS)
  tensor = np.array(img_resized, dtype=np.float32) / 255.0
  return np.expand_dims(tensor, axis=0) # Shape: (1, 64, 64, 3)`,
  },
  sql: {
    filename: "assessment_schema.sql",
    language: "MySQL 8.x • Relational DDL",
    icon: Database,
    code: `-- 19-Table Normalized Assessment Persistence Schema
CREATE TABLE student_cognitive_vectors (
  vector_id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id VARCHAR(64) NOT NULL,
  grade_tier ENUM('7-8', '9-10', '11-12', 'UG_PG') NOT NULL,
  vector_72d JSON NOT NULL,
  normalized_score DECIMAL(5,2) NOT NULL,
  predicted_cluster_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  INDEX idx_tier_cluster (grade_tier, predicted_cluster_id)
);`,
  },
};

export function CodePanel() {
  const [tab, setTab] = useState("python");
  const [copied, setCopied] = useState(false);

  const activeSample = CODE_SAMPLES[tab];
  const IconComponent = activeSample.icon;

  const handleCopy = () => {
    copyToClipboard(activeSample.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-none border border-[#D4D4D4] dark:border-[#171717] bg-white dark:bg-[#0A0A0A] font-mono text-xs overflow-hidden shadow-none select-none">
      {/* Editor Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#F5F5F5] dark:bg-[#171717] border-b border-[#D4D4D4] dark:border-[#262626]">
        {/* Tab Buttons */}
        <div className="flex items-center gap-1">
          {Object.entries(CODE_SAMPLES).map(([key, sample]) => {
            const isActive = tab === key;
            return (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer border ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white"
                    : "bg-transparent text-[#737373] hover:text-black dark:hover:text-white border-transparent"
                }`}
              >
                {sample.filename}
              </button>
            );
          })}
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          aria-label="Copy code"
          className="flex items-center gap-1 text-[11px] text-[#737373] hover:text-black dark:hover:text-white cursor-pointer px-2 py-1 transition-colors"
        >
          {copied ? (
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

      {/* Language Subheader */}
      <div className="px-4 py-2 border-b border-[#D4D4D4] dark:border-[#171717] bg-white dark:bg-[#0A0A0A] flex items-center justify-between text-[11px] text-[#737373]">
        <div className="flex items-center gap-1.5">
          <IconComponent className="w-3.5 h-3.5 text-black dark:text-white" />
          <span className="font-semibold text-black dark:text-white">{activeSample.language}</span>
        </div>
        <span>UTF-8 // VERIFIED CODE</span>
      </div>

      {/* Code Text Content */}
      <div className="p-4 overflow-x-auto text-black dark:text-white leading-relaxed text-[11px] max-h-[300px]">
        <pre>
          <code>{activeSample.code}</code>
        </pre>
      </div>
    </div>
  );
}

export default CodePanel;
