import React, { useState } from "react";
import { BarChart3, Grid3X3, Activity, Layers, Info } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/utils/helpers";

const SHAP_FEATURES = [
  { name: "Logical Reasoning", impact: 0.245, percentage: "24.5%", category: "Cognitive Logic" },
  { name: "Analytical Thinking", impact: 0.198, percentage: "19.8%", category: "Analytical Logic" },
  { name: "Coding & Algorithmic Aptitude", impact: 0.165, percentage: "16.5%", category: "Technical Aptitude" },
  { name: "Mathematical & Quantitative Logic", impact: 0.142, percentage: "14.2%", category: "Quantitative" },
  { name: "Disciplinary Domain Interest", impact: 0.114, percentage: "11.4%", category: "Interest Alignment" },
  { name: "Abstract Spatial Reasoning", impact: 0.086, percentage: "8.6%", category: "Cognitive Logic" },
  { name: "Verbal & Communication Logic", impact: 0.050, percentage: "5.0%", category: "Communication" },
];

const CONFUSION_MATRIX_CLASSES = [
  "Granite",
  "Limestone",
  "Shale",
  "Basalt",
  "Marble",
  "Sandstone",
  "Obsidian",
  "Quartzite",
];

const CONFUSION_MATRIX_DATA = [
  [94, 2, 0, 1, 1, 2, 0, 0], // Granite
  [1, 91, 3, 0, 3, 2, 0, 0], // Limestone
  [0, 2, 89, 4, 1, 3, 1, 0], // Shale
  [1, 0, 2, 95, 0, 0, 2, 0], // Basalt
  [1, 3, 0, 0, 93, 1, 0, 2], // Marble
  [2, 2, 3, 0, 1, 91, 0, 1], // Sandstone
  [0, 0, 1, 2, 0, 0, 97, 0], // Obsidian
  [0, 1, 0, 0, 3, 1, 0, 95], // Quartzite
];

const CORRELATION_DIMENSIONS = [
  "Logic",
  "Analysis",
  "Math",
  "Coding",
  "Interest",
  "Spatial",
];

const CORRELATION_MATRIX = [
  [1.00, 0.78, 0.72, 0.65, 0.38, 0.54],
  [0.78, 1.00, 0.68, 0.70, 0.42, 0.49],
  [0.72, 0.68, 1.00, 0.61, 0.31, 0.62],
  [0.65, 0.70, 0.61, 1.00, 0.45, 0.40],
  [0.38, 0.42, 0.31, 0.45, 1.00, 0.28],
  [0.54, 0.49, 0.62, 0.40, 0.28, 1.00],
];

export function DataShowcase() {
  const [activeTab, setActiveTab] = useState("shap");
  const [matrixHover, setMatrixHover] = useState(null);

  return (
    <section id="analytics" className="py-24 md:py-32 border-b border-white/[0.07] bg-[#07080C]">
      <div className="editorial-container">
        <SectionHeader
          number="06"
          tag="ANALYTICAL ARTIFACTS"
          title="Data Analysis &amp; Visualizations"
          description="Authentic analytical artifacts, feature importance distributions, confusion matrices, and data modeling blueprints derived from active project workflows."
        />

        {/* Tab Controls */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 font-mono text-xs">
          {[
            { id: "shap", label: "1. SHAP Feature Importance", icon: BarChart3 },
            { id: "confusion", label: "2. Confusion Matrix (CNN)", icon: Grid3X3 },
            { id: "correlation", label: "3. EDA Correlation Heatmap", icon: Activity },
            { id: "powerbi", label: "4. Power BI Architecture", icon: Layers },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2 uppercase font-bold transition-all duration-200 cursor-pointer rounded-xl border flex items-center gap-2 whitespace-nowrap",
                  isActive
                    ? "bg-[#D6B979] text-[#07080C] border-[#D6B979] shadow-sm"
                    : "bg-[#0D0F14] text-[#A8A59C] border-white/[0.08] hover:text-[#F3EFE6] hover:border-white/20"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Panel */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0D0F14]/90 backdrop-blur-xl border border-white/[0.08] shadow-lg">
          {/* TAB 1: SHAP Feature Importance */}
          {activeTab === "shap" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#F3EFE6] font-sans uppercase">
                    SHAP Feature Contribution Rankings (Ensemble ML)
                  </h3>
                  <p className="text-xs text-[#A8A59C] font-mono">
                    Model: XGBoost / CatBoost Soft Voting • Target: Career Cluster Guidance Vector
                  </p>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#D6B979]/15 border border-[#D6B979]/30 text-[#D6B979] uppercase font-bold self-start sm:self-auto">
                  TreeExplainer | Mean |SHAP|
                </span>
              </div>

              {/* Horizontal Bar Visualizer */}
              <div className="space-y-4">
                {SHAP_FEATURES.map((feat, idx) => (
                  <div key={feat.name} className="space-y-1.5 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#F3EFE6]">
                        0{idx + 1}. {feat.name}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-[#6E6C66] text-[11px] uppercase">{feat.category}</span>
                        <span className="font-bold text-[#D6B979]">{feat.percentage}</span>
                      </div>
                    </div>
                    {/* Bar */}
                    <div className="w-full h-3 rounded-full bg-[#12151C] border border-white/[0.06] overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#9C7F3F] via-[#D6B979] to-[#F0DDA8] rounded-full transition-all duration-500 ease-out"
                        style={{ width: feat.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-start gap-2 text-xs font-mono text-[#A8A59C]">
                <Info className="w-4 h-4 shrink-0 text-[#D6B979] mt-0.5" />
                <span>
                  Interpretation: Shapley additive values calculate the marginal contribution of each assessment dimension towards career cluster predictions, ensuring transparent, interpretable guidance rationales for students.
                </span>
              </div>
            </div>
          )}

          {/* TAB 2: Multi-Class Confusion Matrix */}
          {activeTab === "confusion" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#F3EFE6] font-sans uppercase">
                    CNN Confusion Matrix (Rock Identification Studio)
                  </h3>
                  <p className="text-xs text-[#A8A59C] font-mono">
                    Evaluation: 8 Geological Test Classes • 64x64 Tensor Input • Softmax Density
                  </p>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#D6B979]/15 border border-[#D6B979]/30 text-[#D6B979] uppercase font-bold self-start sm:self-auto">
                  Overall Accuracy: 94.8%
                </span>
              </div>

              {/* Confusion Matrix Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-center font-mono text-xs border-collapse">
                  <thead>
                    <tr>
                      <th className="p-2 text-left text-[#6E6C66] text-[10px] uppercase border border-white/[0.08]">
                        True \ Pred
                      </th>
                      {CONFUSION_MATRIX_CLASSES.map((cls) => (
                        <th
                          key={cls}
                          className="p-2 font-bold text-[10px] uppercase text-[#F3EFE6] border border-white/[0.08]"
                        >
                          {cls.slice(0, 4)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {CONFUSION_MATRIX_CLASSES.map((trueCls, rowIdx) => (
                      <tr key={trueCls}>
                        <td className="p-2 text-left font-bold text-[#F3EFE6] border border-white/[0.08] text-[11px]">
                          {trueCls}
                        </td>
                        {CONFUSION_MATRIX_DATA[rowIdx].map((val, colIdx) => {
                          const isDiagonal = rowIdx === colIdx;
                          return (
                            <td
                              key={colIdx}
                              onMouseEnter={() =>
                                setMatrixHover({
                                  trueCls,
                                  predCls: CONFUSION_MATRIX_CLASSES[colIdx],
                                  val,
                                })
                              }
                              onMouseLeave={() => setMatrixHover(null)}
                              className={cn(
                                "p-2 border border-white/[0.08] transition-colors cursor-pointer text-[11px]",
                                isDiagonal
                                  ? "bg-[#D6B979] text-[#07080C] font-bold"
                                  : val > 0
                                  ? "bg-white/[0.04] text-[#F3EFE6]"
                                  : "bg-transparent text-[#6E6C66]"
                              )}
                            >
                              {val}%
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {matrixHover && (
                <div className="p-3 rounded-lg bg-[#12151C] border border-[#D6B979]/30 text-xs font-mono flex items-center justify-between">
                  <span className="text-[#A8A59C]">
                    Actual: <strong className="text-[#F3EFE6]">{matrixHover.trueCls}</strong> → Predicted:{" "}
                    <strong className="text-[#F3EFE6]">{matrixHover.predCls}</strong>
                  </span>
                  <span className="font-bold text-[#D6B979]">{matrixHover.val}% Confidence Rate</span>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: EDA Correlation Heatmap */}
          {activeTab === "correlation" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#F3EFE6] font-sans uppercase">
                    Aptitude Dimension Correlation Matrix (EDA)
                  </h3>
                  <p className="text-xs text-[#A8A59C] font-mono">
                    Sample: 1,200+ Student Guidance Records • Pearson Correlation Coefficients
                  </p>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#D6B979]/15 border border-[#D6B979]/30 text-[#D6B979] uppercase font-bold self-start sm:self-auto">
                  Pearson r [-1, +1]
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-center font-mono text-xs border-collapse">
                  <thead>
                    <tr>
                      <th className="p-2.5 text-left text-[#6E6C66] text-[10px] uppercase border border-white/[0.08]">
                        Dim \ Dim
                      </th>
                      {CORRELATION_DIMENSIONS.map((dim) => (
                        <th
                          key={dim}
                          className="p-2.5 font-bold text-[10px] uppercase text-[#F3EFE6] border border-white/[0.08]"
                        >
                          {dim}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {CORRELATION_DIMENSIONS.map((rowDim, rowIdx) => (
                      <tr key={rowDim}>
                        <td className="p-2.5 text-left font-bold text-[#F3EFE6] border border-white/[0.08]">
                          {rowDim}
                        </td>
                        {CORRELATION_MATRIX[rowIdx].map((val, colIdx) => {
                          const isHigh = val >= 0.7 && val < 1.0;
                          const isSelf = val === 1.0;
                          return (
                            <td
                              key={colIdx}
                              className={cn(
                                "p-2.5 border border-white/[0.08] transition-colors text-[11px]",
                                isSelf
                                  ? "bg-[#D6B979] text-[#07080C] font-bold"
                                  : isHigh
                                  ? "bg-[#D6B979]/20 text-[#D6B979] font-bold"
                                  : val >= 0.5
                                  ? "bg-white/[0.04] text-[#F3EFE6]"
                                  : "text-[#6E6C66]"
                              )}
                            >
                              {val.toFixed(2)}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-start gap-2 text-xs font-mono text-[#A8A59C]">
                <Info className="w-4 h-4 shrink-0 text-[#D6B979] mt-0.5" />
                <span>
                  Observation: Strong positive collinearity (+0.78) was identified between Logical Reasoning and Analytical Thinking, validating the compound dimension weight strategy in our ensemble model.
                </span>
              </div>
            </div>
          )}

          {/* TAB 4: Power BI Architecture */}
          {activeTab === "powerbi" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#F3EFE6] font-sans uppercase">
                    Power BI Business Intelligence Architecture
                  </h3>
                  <p className="text-xs text-[#A8A59C] font-mono">
                    Star Schema Dimensional Modeling • DAX Analytical Measures
                  </p>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#D6B979]/15 border border-[#D6B979]/30 text-[#D6B979] uppercase font-bold self-start sm:self-auto">
                  Star Schema Relational DDL
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-5 rounded-xl border border-white/[0.08] bg-[#07080C]/60 space-y-3">
                  <span className="text-xs font-mono text-[#D6B979] font-bold uppercase block">
                    // FACT TABLE
                  </span>
                  <h4 className="text-sm font-bold text-[#F3EFE6]">Fact_GuidanceAttempts</h4>
                  <ul className="text-xs text-[#A8A59C] space-y-1 font-mono">
                    <li>• AttemptID (PK)</li>
                    <li>• StudentKey (FK)</li>
                    <li>• DateKey (FK)</li>
                    <li>• PredictedClusterID (FK)</li>
                    <li>• TotalScore, Confidence</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl border border-white/[0.08] bg-[#07080C]/60 space-y-3">
                  <span className="text-xs font-mono text-[#D6B979] font-bold uppercase block">
                    // DIMENSION TABLES
                  </span>
                  <h4 className="text-sm font-bold text-[#F3EFE6]">Dim_Student &amp; Dim_Career</h4>
                  <ul className="text-xs text-[#A8A59C] space-y-1 font-mono">
                    <li>• Dim_Student (Tier, Stream)</li>
                    <li>• Dim_Career (Cluster, Milestones)</li>
                    <li>• Dim_Date (Calendar Hierarchy)</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl border border-white/[0.08] bg-[#07080C]/60 space-y-3">
                  <span className="text-xs font-mono text-[#D6B979] font-bold uppercase block">
                    // DAX MEASURES
                  </span>
                  <h4 className="text-sm font-bold text-[#F3EFE6]">Key Analytical Formulas</h4>
                  <ul className="text-xs text-[#A8A59C] space-y-1 font-mono">
                    <li>• Avg_Attribution_Score</li>
                    <li>• Cluster_Concentration_Ratio</li>
                    <li>• YearOverYear_Growth_%</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default DataShowcase;
