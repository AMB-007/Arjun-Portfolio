import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("Portfolio rendered through safe boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="min-h-[40vh] flex flex-col items-center justify-center p-8 text-center bg-[var(--surface)] border border-[var(--border)] rounded-2xl m-4">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--primary-accent)] mb-2">
            Display Recovery
          </p>
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-3">
            Portfolio View Restored
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-md mb-4">
            A rendering exception occurred in an isolated component. The rest of the portfolio remains fully active.
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-4 py-2 rounded-lg bg-[var(--primary-accent)] text-[var(--accent-contrast)] text-xs font-mono font-medium hover:opacity-90 transition-opacity"
          >
            Reload Section
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
