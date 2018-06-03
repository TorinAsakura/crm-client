import { createPortal } from 'react-dom'
import { Component, createElement } from 'react'

export default WrappedComponent =>
  class WithPortal extends Component {
    static displayName = `WithPortal(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

    componentWillMount() {
      this.target = document.createElement('div')

      document.body.appendChild(this.target)
    }

    componentWillUnmount() {
      if (this.target) {
        document.body.removeChild(this.target)
      }
    }

    render() {
      return createPortal(
        createElement(WrappedComponent, this.props),
        this.target,
      )
    }
  }
