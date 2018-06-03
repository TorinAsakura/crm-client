import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import Tether from 'tether'
import { expose } from './utils'
import OnOutsideClick from './OnOutsideClick'

class Layer extends Component {
  static defaultProps = {
    align: 'tl-bl',
    targetSelection: 'parent',
  }

  constructor(props) {
    super(props)
    this.element = document.createElement('div')
  }

  componentDidMount() {
    document.body.appendChild(this.element)

    if (this.target) {
      this.mountLayer(this.props)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.target !== this.props.target) {
      this.unmountLayer()
      this.mountLayer(nextProps)
      return
    }

    if (!this.layer) {
      return
    }

    let { options } = this.layer

    if (nextProps.align !== this.props.align) {
      const [attachment, targetAttachment] = expose(nextProps.align)

      options = {
        ...options,
        attachment,
        targetAttachment,
      }
    }

    if (nextProps.classes !== this.props.classes) {
      options = {
        ...options,
        classes: nextProps.classes,
      }
    }

    if (nextProps.offset !== this.props.offset) {
      options = {
        ...options,
        offset: nextProps.offset,
      }
    }

    if (options !== this.layer.options) {
      this.layer.setOptions(options)
      this.layer.position()
    }
  }

  componentWillUnmount() {
    this.unmountLayer()

    document.body.removeChild(this.element)
  }

  onOutsideClick = (event) => {
    const { onOutsideClick } = this.props

    if (!this.target) {
      return
    }

    if (onOutsideClick && !this.target.contains(event.target)) {
      onOutsideClick()
    }
  }

  onSetRef = (element) => {
    if (element) {
      this.target = this.props.targetSelection === 'previousSibling'
        ? element.previousSibling
        : element.parentNode
    }
  }

  mountLayer({
    target,
    align,
    constraints,
    offset,
    classes,
    onChangePosition,
  }) {
    const [attachment, targetAttachment] = expose(align)

    const options = {
      element: this.element,
      attachment,
      targetAttachment,
      onChangePosition,
      target: target || this.target,
    }

    if (constraints) {
      options.constraints = constraints
    }

    if (offset) {
      options.offset = offset
    }

    if (classes) {
      options.classes = classes
    }

    this.layer = new Tether(options)

    this.layer.enable()
  }

  unmountLayer() {
    this.layer.destroy()
  }

  render() {
    const { children } = this.props

    return [
      (
        <noscript
          key='ref'
          ref={this.onSetRef}
        />
      ),
      createPortal(
        <OnOutsideClick onOutsideClick={this.onOutsideClick}>
          {children}
        </OnOutsideClick>,
        this.element,
      ),
    ]
  }
}

export default Layer
