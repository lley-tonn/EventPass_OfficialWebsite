import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <h1 className="text-h1 font-bold text-primary mb-4">Something went wrong</h1>
            <p className="text-body text-gray-400 mb-8">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="rounded-lg border border-primary/60 bg-primary px-6 py-3 text-button font-semibold text-black transition-all duration-300 hover:bg-primary/90"
              >
                Refresh Page
              </button>
              <Link
                to="/"
                className="rounded-lg border border-primary/40 px-6 py-3 text-button font-semibold text-primary transition-all duration-300 hover:bg-primary/5"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

