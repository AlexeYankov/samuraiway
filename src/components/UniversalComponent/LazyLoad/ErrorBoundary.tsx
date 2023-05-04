import { Component, ErrorInfo, ReactNode } from "react";

type Props = {
  fallback: ReactNode;
  children: ReactNode;
};

type State = {
  hasRenderError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  public state: State = {
    hasRenderError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasRenderError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasRenderError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
