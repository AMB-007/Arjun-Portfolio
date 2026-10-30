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

// Normalized true-positive and misclassification rates
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
  const [activeTab, setActiveTab] = useState("shap"); // "shap" | "confusion" | "correlation" | "powerbi"
  const [matrixHover, setMatrixHover] = useState(null);

  return (
    <section id="analytics" className="py-20 md:py-28 border-b border-[#D4D4D4] dark:border-[#171717] bg-[#F5F5F5]/40 dark:bg-[#0A0A0A]/40">
      <div className="editorial-container">
        <SectionHeader
          number="05"
          tag="ANALYTICAL ARTIFACTS"
          title="Data Analysis &amp; Visualizations"
          description="Authentic analytical artifacts, feature importance distributions, confusion matrices, and data modeling blueprints derived from active project workflows."
        />

        {/* Tab Controls */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 font-mono text-xs">
          <button
            onClick={() => setActiveTab("shap")}
            className={cn(
              "px-4 py-2 uppercase font-bold transition-colors cursor-pointer border flex items-center gap-1.5 whitespace-nowrap",
              activeTab === "shap"
                ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                : "bg-white text-[#737373] border-[#D4D4D4] dark:bg-[#111111] dark:border-[#262626] hover:text-black dark:hover:text-white"
            )}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>1. SHAP Feature Importance</span>
          </button>

          <button
            onClick={() => setActiveTab("confusion")}
            className={cn(
              "px-4 py-2 uppercase font-bold transition-colors cursor-pointer border flex items-center gap-1.5 whitespace-nowrap",
              activeTab === "confusion"
                ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                : "bg-white text-[#737373] border-[#D4D4D4] dark:bg-[#111111] dark:border-[#262626] hover:text-black dark:hover:text-white"
            )}
          >
            <Grid3X3 className="w-3.5 h-3.5" />
            <span>2. Confusion Matrix (CNN)</span>
          </button>

          <button
            onClick={() => setActiveTab("correlation")}
            className={cn(
              "px-4 py-2 uppercase font-bold transition-colors cursor-pointer border flex items-center gap-1.5 whitespace-nowrap",
              activeTab === "correlation"
                ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                : "bg-white text-[#737373] border-[#D4D4D4] dark:bg-[#111111] dark:border-[#262626] hover:text-black dark:hover:text-white"
            )}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>3. EDA Correlation Heatmap</span>
          </button>

          <button
            onClick={() => setActiveTab("powerbi")}
            className={cn(
              "px-4 py-2 uppercase font-bold transition-colors cursor-pointer border flex items-center gap-1.5 whitespace-nowrap",
              activeTab === "powerbi"
                ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                : "bg-white text-[#737373] border-[#D4D4D4] dark:bg-[#111111] dark:border-[#262626] hover:text-black dark:hover:text-white"
            )}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>4. Power BI Architecture</span>
          </button>
        </div>

        {/* Dynamic Display Panel */}
        <div className="p-6 sm:p-8 bg-white dark:bg-[#0A0A0A] border border-[#D4D4D4] dark:border-[#171717]">
          {/* TAB 1: SHAP Feature Importance */}
          {activeTab === "shap" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#D4D4D4] dark:border-[#171717] gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-black dark:text-white font-sans uppercase">
                    SHAP Feature Contribution Rankings (Ensemble ML)
                  </h3>
                  <p className="text-xs text-[#737373] font-mono">
                    Model: XGBoost / CatBoost Soft Voting • Target: Career Cluster Guidance Vector
                  </p>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 bg-[#F5F5F5] dark:bg-[#171717] border border-[#D4D4D4] dark:border-[#262626] text-black dark:text-white uppercase font-bold self-start sm:self-auto">
                  TreeExplainer | Mean |SHAP|
                </span>
              </div>

              {/* Horizontal Bar Visualizer */}
              <div className="space-y-4">
                {SHAP_FEATURES.map((feat, idx) => (
                  <div key={feat.name} className="space-y-1.5 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-black dark:text-white">
                        0{idx + 1}. {feat.name}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-[#737373] text-[11px] uppercase">{feat.category}</span>
                        <span className="font-bold text-black dark:text-white">{feat.percentage}</span>
                      </div>
                    </div>
                    {/* Monochrome Bar */}
                    <div className="w-full h-3 bg-[#F5F5F5] dark:bg-[#171717] border border-[#D4D4D4] dark:border-[#262626] overflow-hidden">
                      <div
                        className="h-full bg-black dark:bg-white transition-all duration-500 ease-out"
                        style={{ width: feat.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#D4D4D4] dark:border-[#171717] flex items-start gap-2 text-xs font-mono text-[#737373]">
                <Info className="w-4 h-4 shrink-0 text-black dark:text-white mt-0.5" />
                <span>
                  Interpretation: Shapley additive values calculate the marginal contribution of each assessment dimension towards career cluster predictions, ensuring transparent, interpretable guidance rationales for students.
                </span>
              </div>
            </div>
          )}

          {/* TAB 2: Multi-Class Confusion Matrix */}
          {activeTab === "confusion" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#D4D4D4] dark:border-[#171717] gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-black dark:text-white font-sans uppercase">
                    CNN Confusion Matrix (Rock Identification Studio)
                  </h3>
                  <p className="text-xs text-[#737373] font-mono">
                    Evaluation: 8 Geological Test Classes • 64x64 Tensor Input • Softmax Density
                  </p>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 bg-[#F5F5F5] dark:bg-[#171717] border border-[#D4D4D4] dark:border-[#262626] text-black dark:text-white uppercase font-bold self-start sm:self-auto">
                  Overall Accuracy: 94.8%
                </span>
              </div>

              {/* Confusion Matrix Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-center font-mono text-xs border-collapse">
                  <thead>
                    <tr>
                      <th className="p-2 text-left text-[#737373] text-[10px] uppercase border border-[#D4D4D4] dark:border-[#262626]">
                        True \ Pred
                      </th>
                      {CONFUSION_MATRIX_CLASSES.map((cls) => (
                        <th
                          key={cls}
                          className="p-2 font-bold text-[10px] uppercase text-black dark:text-white border border-[#D4D4D4] dark:border-[#262626]"
                        >
                          {cls.slice(0, 4)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {CONFUSION_MATRIX_CLASSES.map((trueCls, rowIdx) => (
                      <tr key={trueCls}>
                        <td className="p-2 text-left font-bold text-black dark:text-white border border-[#D4D4D4] dark:border-[#262626] text-[11px]">
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
                                "p-2 border border-[#D4D4D4] dark:border-[#262626] transition-colors cursor-pointer text-[11px]",
                                isDiagonal
                                  ? "bg-black text-white dark:bg-white dark:text-black font-bold"
                                  : val > 0
                                  ? "bg-[#E5E5E5] text-black dark:bg-[#222222] dark:text-[#E5E5E5]"
                                  : "bg-transparent text-[#737373]"
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

              {/* Interactive Inspection readout */}
              <div className="p-3 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626] flex items-center justify-between text-xs font-mono">
                {matrixHover ? (
                  <span>
                    True: <strong>{matrixHover.trueCls}</strong> → Predicted:{" "}
                    <strong>{matrixHover.predCls}</strong> ({matrixHover.val}%)
                  </span>
                ) : (
                  <span className="text-[#737373]">
                    Hover matrix cells to inspect class-wise prediction distributions
                  </span>
                )}
                <span className="font-bold text-black dark:text-white uppercase text-[10px]">
                  Diagonal = True Positives
                </span>
              </div>
            </div>
          )}

          {/* TAB 3: EDA Correlation Heatmap */}
          {activeTab === "correlation" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#D4D4D4] dark:border-[#171717] gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-black dark:text-white font-sans uppercase">
                    Pairwise Cognitive Dimension Correlation (EDA)
                  </h3>
                  <p className="text-xs text-[#737373] font-mono">
                    Pearson Correlation Coefficient Matrix (-1.00 to +1.00)
                  </p>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 bg-[#F5F5F5] dark:bg-[#171717] border border-[#D4D4D4] dark:border-[#262626] text-black dark:text-white uppercase font-bold self-start sm:self-auto">
                  Feature Selection Validation
                </span>
              </div>

              {/* Heatmap Grid */}
              <div className="overflow-x-auto">
                <table className="w-full text-center font-mono text-xs border-collapse">
                  <thead>
                    <tr>
                      <th className="p-2 text-left text-[#737373] text-[10px] uppercase border border-[#D4D4D4] dark:border-[#262626]">
                        Dimension
                      </th>
                      {CORRELATION_DIMENSIONS.map((dim) => (
                        <th
                          key={dim}
                          className="p-2 font-bold text-black dark:text-white border border-[#D4D4D4] dark:border-[#262626] uppercase text-[11px]"
                        >
                          {dim}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {CORRELATION_DIMENSIONS.map((rowDim, rIdx) => (
                      <tr key={rowDim}>
                        <td className="p-2 text-left font-bold text-black dark:text-white border border-[#D4D4D4] dark:border-[#262626] uppercase text-[11px]">
                          {rowDim}
                        </td>
                        {CORRELATION_MATRIX[rIdx].map((val, cIdx) => {
                          const isOne = val === 1.0;
                          return (
                            <td
                              key={cIdx}
                              className={cn(
                                "p-2 border border-[#D4D4D4] dark:border-[#262626] text-[11px] font-bold",
                                isOne
                                  ? "bg-black text-white dark:bg-white dark:text-black"
                                  : val >= 0.7
                                  ? "bg-[#666666] text-white dark:bg-[#999999] dark:text-black"
                                  : val >= 0.5
                                  ? "bg-[#A3A3A3] text-black dark:bg-[#666666] dark:text-white"
                                  : val >= 0.3
                                  ? "bg-[#D4D4D4] text-black dark:bg-[#333333] dark:text-[#E5E5E5]"
                                  : "bg-[#F5F5F5] text-[#737373] dark:bg-[#171717]"
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

              <div className="pt-4 border-t border-[#D4D4D4] dark:border-[#171717] flex items-center justify-between text-xs font-mono text-[#737373]">
                <span>Analysis confirms high co-linearity (+0.78) between Logic and Analytical thinking.</span>
                <span className="font-bold text-black dark:text-white uppercase">Grayscale Gradient Scale</span>
              </div>
            </div>
          )}

          {/* TAB 4: Power BI & Business Intelligence */}
          {activeTab === "powerbi" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#D4D4D4] dark:border-[#171717] gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-black dark:text-white font-sans uppercase">
                    Power BI Dimensional Data Model &amp; DAX Measures
                  </h3>
                  <p className="text-xs text-[#737373] font-mono">
                    Star Schema Architecture • Power Query Transformations • Time Intelligence
                  </p>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 bg-[#F5F5F5] dark:bg-[#171717] border border-[#D4D4D4] dark:border-[#262626] text-black dark:text-white uppercase font-bold self-start sm:self-auto">
                  Relational Star Schema
                </span>
              </div>

              {/* Star Schema Structure Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-3 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626] space-y-1.5">
                  <span className="font-bold text-black dark:text-white uppercase block">
                    1. Central Fact Table
                  </span>
                  <div className="text-[11px] text-[#737373] space-y-0.5">
                    <div><strong>Fact_Assessments</strong></div>
                    <div>• assessment_id (PK)</div>
                    <div>• student_id (FK)</div>
                    <div>• cluster_id (FK)</div>
                    <div>• raw_score, normalized_score</div>
                    <div>• assessment_date (FK)</div>
                  </div>
                </div>

                <div className="p-3 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626] space-y-1.5">
                  <span className="font-bold text-black dark:text-white uppercase block">
                    2. Dimension Tables
                  </span>
                  <div className="text-[11px] text-[#737373] space-y-0.5">
                    <div><strong>Dim_Students</strong> (Grade, Board, Stream)</div>
                    <div><strong>Dim_CareerClusters</strong> (Domain, Industry)</div>
                    <div><strong>Dim_Date</strong> (Year, Quarter, Month)</div>
                    <div><strong>Dim_AssessmentTiers</strong> (Class 7-12, UG)</div>
                  </div>
                </div>

                <div className="p-3 bg-[#F5F5F5] dark:bg-[#141414] border border-[#D4D4D4] dark:border-[#262626] space-y-1.5">
                  <span className="font-bold text-black dark:text-white uppercase block">
                    3. Key DAX Measures
                  </span>
                  <div className="text-[11px] text-[#737373] space-y-0.5">
                    <div>• Total Assessments = COUNTROWS(...)</div>
                    <div>• Top-3 Alignment % = DIVIDE(...)</div>
                    <div>• Avg Normalized Score = AVERAGE(...)</div>
                    <div>• YoY Assessment Growth = CALCULATE(...)</div>
                  </div>
                </div>
              </div>

              {/* Verified DAX Formulas Box */}
              <div className="p-4 bg-black text-white dark:bg-[#171717] dark:text-white font-mono text-xs space-y-2 border border-black dark:border-white">
                <div className="text-[10px] text-[#A3A3A3] uppercase tracking-wider font-bold">
                  // Core DAX Measure Calculations:
                </div>
                <div className="text-[11px] space-y-1.5 leading-relaxed text-[#D4D4D4]">
                  <div>
                    <span className="text-white font-bold">Completion Rate % =</span>{" "}
                    DIVIDE(COUNTROWS(FILTER(Fact_Assessments, Fact_Assessments[status] = "Completed")), COUNTROWS(Fact_Assessments), 0)
                  </div>
                  <div>
                    <span className="text-white font-bold">YoY Growth =</span>{" "}
                    VAR CurrentYear = [Total Assessments] VAR PrevYear = CALCULATE([Total Assessments], SAMEPERIODLASTYEAR(Dim_Date[Date])) RETURN DIVIDE(CurrentYear - PrevYear, PrevYear)
                  </div>
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
