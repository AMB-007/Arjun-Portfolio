import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Terminal, Cpu, Database, Eye, BarChart2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROCESS_STEPS } from "@/data/portfolioData";
import { cn } from "@/utils/helpers";

const STEP_ICONS = {
  "01": Terminal,
  "02": Database,
  "03": Cpu,
  "04": BarChart2,
};

const STEP_SNIPPETS = {
  "01": `# Phase 1: Problem Definition & Metric Specification
problem = "Predict optimal career pathways across 19 student dimensions"
target_metric = "Top-3 Accuracy >= 90% with balanced recall"
baseline_eval = "Zero-rule frequency baseline: 24.3%"
print(f"[INIT] Metric Goal: {target_metric}")`,
  "02": `# Phase 2: Exploratory Data Analysis & Feature Engineering
df = pd.read_sql("SELECT * FROM student_cognitive_evaluations", db_engine)
df_clean = clip_outliers_iqr(df, threshold=1.5)
X_scaled = RobustScaler().fit_transform(df_clean[feature_cols])
print(f"[EDA] 72-D vector formed. Shape: {X_scaled.shape}")`,
  "03": `# Phase 3: Multi-Model Ensemble & SHAP Attribution
estimators = [('xgb', xgb_clf), ('cat', cat_clf), ('rf', rf_clf)]
voting_clf = VotingClassifier(estimators, voting='soft', weights=[0.35, 0.35, 0.30])
voting_clf.fit(X_train, y_train)
explainer = shap.TreeExplainer(xgb_clf)
shap_vals = explainer.shap_values(X_test[:10])`,
  "04": `# Phase 4: Production REST Service & Normalized Persistence
@app.route('/predict', methods=['POST'])
def predict_career():
    features = extract_payload(request.json)
    pred_probs = voting_clf.predict_proba(features)
    db.session.add(InferenceAuditLog(result=pred_probs))
    db.session.commit()
    return jsonify({'recommendations': format_top_k(pred_probs, k=3)})`,
};

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 md:py-32 border-b border-white/5 bg-[#060608]">
      <div className="editorial-container">
        <SectionHeader
          number="05"
          tag="ENGINEERING WORKFLOW"
          title="How I Work"
          description="A disciplined 4-stage engineering lifecycle from domain problem formulation and exploratory analysis to multi-model training and production deployment."
        />

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[step.step] || Terminal;
            const isActive = activeStep === idx;

            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={cn(
                  "p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between relative group",
                  isActive
                    ? "bg-[#0E0E12] border-[#C8F31D] shadow-[0_0_25px_rgba(200,243,29,0.12)]"
                    : "bg-[#0E0E12]/50 border-white/5 hover:border-white/20 text-[#8B8B93]"
                )}
              >
                {/* Active Indicator Top Pill */}
                {isActive && (
                  <div className="absolute -top-2.5 left-4 px-2 py-0.5 rounded-full bg-[#C8F31D] text-black text-[10px] font-mono font-bold tracking-wider uppercase shadow-sm">
                    Active Phase
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-3">
                    <span
                      className={cn(
                        "font-black text-sm",
                        isActive ? "text-[#C8F31D]" : "text-[#8B8B93]"
                      )}
                    >
                      // {step.step}
                    </span>
                    <span
                      className={cn(
                        "text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border",
                        isActive
                          ? "bg-[#C8F31D]/10 text-[#C8F31D] border-[#C8F31D]/30"
                          : "bg-white/5 text-[#8B8B93] border-white/5"
                      )}
                    >
                      {step.phase}
                    </span>
                  </div>

                  <h3
                    className={cn(
                      "text-base font-extrabold font-sans uppercase leading-snug mb-1",
                      isActive ? "text-[#F4F4F5]" : "text-[#D4D4D8]"
                    )}
                  >
                    {step.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold pt-4 mt-2 border-t border-white/5 text-[#8B8B93]">
                  <span>Inspect Pipeline</span>
                  <ArrowRight
                    className={cn(
                      "w-3.5 h-3.5 transition-transform",
                      isActive ? "translate-x-1 text-[#C8F31D]" : "group-hover:translate-x-1"
                    )}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown & Code Artifact */}
        {PROCESS_STEPS[activeStep] && (
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 sm:p-8 rounded-2xl bg-[#0E0E12] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl"
          >
            {/* Left Column: Stage Explanation & Deliverables */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-[#C8F31D] font-bold">
                  STAGE {PROCESS_STEPS[activeStep].step} OF 04
                </span>
                <span className="text-white/20">•</span>
                <span className="text-[#8B8B93] uppercase">
                  {PROCESS_STEPS[activeStep].phase}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4F4F5] font-sans uppercase">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-[#8B8B93] leading-relaxed font-sans">
                {PROCESS_STEPS[activeStep].description}
              </p>

              {/* Verified Deliverables Badges */}
              <div className="pt-2">
                <span className="text-xs font-mono font-bold text-[#F4F4F5] uppercase tracking-wider block mb-2">
                  Key Artifacts &amp; Deliverables:
                </span>
                <div className="flex flex-wrap gap-2">
                  {PROCESS_STEPS[activeStep].deliverables.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-[#141418] text-[#F4F4F5] border border-white/10"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8F31D]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Code Snippet / Terminal Trace */}
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#060608] font-mono text-xs shadow-2xl">
                {/* Terminal Title Bar */}
                <div className="px-4 py-2.5 bg-[#141418] border-b border-white/5 flex items-center justify-between text-[#8B8B93] text-[11px]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    <span className="ml-2 font-bold text-[#F4F4F5]">
                      stage_0{activeStep + 1}_{PROCESS_STEPS[activeStep].phase.toLowerCase()}.py
                    </span>
                  </div>
                  <span className="text-[10px] text-[#C8F31D]">PYTHON 3.11</span>
                </div>

                {/* Code Content */}
                <div className="p-4 overflow-x-auto text-[#D4D4D8] leading-relaxed">
                  <pre>
                    <code>{STEP_SNIPPETS[PROCESS_STEPS[activeStep].step]}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ProcessSection;

