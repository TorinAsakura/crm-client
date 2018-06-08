/* eslint-disable react/sort-comp */
import React, { Component } from 'react'
import { StyleSheet } from 'elementum'
import InputElement from './InputElement'
import Icon from './Icon'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    boxSizing: 'content-box',
    position: 'relative',
  },
})

class Input extends Component {
  static defaultProps = {
    size: 'normal',
    rightIcon: null,
  }

  focus() {
    this.input.focus()
  }

  blur() {
    this.input.blur()
  }

  onSetInputRef = (input) => {
    this.input = input
  }

  renderElement() {
    const { icon, rightIcon, invalid, title, onEnter, ...props } = this.props

    let offset = null

    if (icon && rightIcon) {
      offset = 'both'
    } else if (icon) {
      offset = 'left'
    } else if (rightIcon) {
      offset = 'right'
    }

    return (
      <InputElement
        {...props}
        ref={this.onSetInputRef}
        invalid={invalid && true}
        offset={offset}
      />
    )
  }

  renderLeftIcon() {
    const { icon } = this.props

    return (
      <Icon
        align='left'
        icon={icon}
      />
    )
  }

  renderRightIcon() {
    const { rightIcon } = this.props

    return (
      <Icon
        align='right'
        icon={rightIcon}
      />
    )
  }

  render() {
    return (
      <div className={styles()}>
        {this.renderLeftIcon()}
        {this.renderElement()}
        {this.renderRightIcon()}
      </div>
    )
  }
}

export default Input
