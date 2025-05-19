"use client";

import { Component, type ErrorInfo } from "react";
import { ProseContainer } from "./container";
import { Heading } from "./heading";
import { Button } from "./ui/button";

export class ErrorBoundary extends Component<{
  children: React.ReactNode;
}> {
  state: { error: null | Error } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error, errorInfo);
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return (
        <ProseContainer>
          <Heading level={3}>Oh no an error occurred</Heading>
          <div className="my-4">
            <p>Error Message: </p>
            <code className="bg-red-50 dark:bg-red-900/20 p-2 rounded-md">
              {this.state.error.message}
            </code>
          </div>
          <Button
            variant="outline"
            onClick={() => this.setState({ error: null })}
          >
            Refresh
          </Button>
        </ProseContainer>
      );
    }

    return this.props.children;
  }
}
