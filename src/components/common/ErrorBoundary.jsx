import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            backgroundColor: "var(--bg, #0A1020)",
            color: "var(--text-primary, #F2EEE6)",
            fontFamily: "var(--font-mono, monospace)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              maxWidth: "700px",
              width: "100%",
              border: "1px solid var(--border, #1F2A44)",
              borderRadius: "1rem",
              padding: "2rem",
              backgroundColor: "var(--surface, #0F1729)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <p
              style={{
                color: "var(--text-muted, #7D879B)",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                marginBottom: "0.5rem",
              }}
            >
              System Error Encountered
            </p>
            <h1
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                marginBottom: "1rem",
                color: "var(--text-primary, #F2EEE6)",
              }}
            >
              Runtime Exception
            </h1>
            <pre
              style={{
                backgroundColor: "var(--surface-subtle, #17233D)",
                border: "1px solid var(--border, #1F2A44)",
                borderRadius: "0.5rem",
                padding: "1rem",
                fontSize: "0.8rem",
                color: "var(--text-secondary, #AEB6C6)",
                whiteSpace: "pre-wrap",
                wordBreak: "break-all",
                marginBottom: "1.5rem",
              }}
            >
              {this.state.error?.toString()}
            </pre>
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: "var(--button-primary-bg, #C9A66B)",
                color: "var(--button-primary-text, #0A1020)",
                fontWeight: 600,
                fontSize: "0.85rem",
                padding: "0.6rem 1.25rem",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
