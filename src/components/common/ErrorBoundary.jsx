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
        <div style={{
          minHeight: "100vh",
          backgroundColor: "#000000",
          color: "#FFFFFF",
          fontFamily: "'JetBrains Mono', monospace",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{
            maxWidth: "700px",
            width: "100%",
            border: "1px solid #262626",
            padding: "2rem",
            backgroundColor: "#0A0A0A"
          }}>
            <p style={{ color: "#737373", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
              // System Fault Detected
            </p>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", color: "#FFFFFF" }}>
              Runtime Exception Occurred
            </h1>
            <pre style={{
              backgroundColor: "#141414",
              border: "1px solid #262626",
              padding: "1rem",
              fontSize: "0.8rem",
              color: "#F5F5F5",
              whiteSpace: "pre-wrap",
              wordBreak: "break-all",
              marginBottom: "1.5rem"
            }}>
              {this.state.error?.toString()}
            </pre>
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: "#FFFFFF",
                color: "#000000",
                fontWeight: 600,
                fontSize: "0.85rem",
                padding: "0.6rem 1.25rem",
                border: "none",
                cursor: "pointer"
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
