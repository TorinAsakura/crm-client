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
    const { rightIcon, invalid, title, onEnter, ...props } = this.props

    return (
      <InputElement
        {...props}
        ref={this.onSetInputRef}
        invalid={invalid && true}
        offset={rightIcon && 'right'}
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
        {this.renderElement()}
        {this.renderRightIcon()}
      </div>
    )
  }
}

export default Input
