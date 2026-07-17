import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('App crashed:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="p-4 text-red-400 font-mono text-sm whitespace-pre-wrap">
          <h1 className="text-lg font-bold mb-2">App crashed</h1>
          <p>{this.state.error.message}</p>
          <pre className="mt-2 text-xs opacity-80">{this.state.error.stack}</pre>
        </div>
      )
    }
    return this.props.children
  }
}
