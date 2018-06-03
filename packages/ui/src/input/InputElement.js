/* eslint-disable react/sort-comp */
import { Component, createElement } from 'react'
import MaskedInput from 'react-text-mask'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid #bbbbbb',
    fontFamily: '"Maven Pro", sans-serif',
    color: '#000000',
    appearance: 'none',
    outline: 'none',
    borderRadius: '3px',
    marginTop: '0px',
    marginBottom: '0px',
    lineHeight: 1,
    '&::-webkit-input-placeholder': {
      color: '#bbbbbb',
    },
    '&:hover': {
      borderColor: '#aaaaaa',
    },
    '&:focus': {
      borderColor: '#E6A70D',
    },
  },
  'size=xsmall': {
    fontSize: '12px',
    padding: '5px 8px 5px 8px',
  },
  'size=small': {
    fontSize: '13px',
    padding: '9px 10px 9px 10px',
  },
  'size=normal': {
    fontSize: '14px',
    padding: '13px 18px 13px 16px',
  },
  'attach=right': {
    borderRadius: '4px 0px 0px 4px',
    borderRightColor: 'transparent !important',
  },
  'attach=left': {
    borderRadius: '0px 4px 4px 0px',
    borderLeftColor: 'transparent !important',
  },
  'attach=both': {
    borderRadius: '0px',
    borderLeftColor: 'transparent !important',
    borderRightColor: 'transparent !important',
  },
  'offset=right': {
    paddingRight: '24px',
  },
  disabled: {
    color: '#bbbbbb',
    '&:hover': {
      borderColor: '#aaaaaa',
    },
  },
  invalid: {
    borderColor: '#fc3d52',
  },
})

class InputElement extends Component {
  focus() {
    this.input.focus()
  }

  blur() {
    this.input.blur()
  }

  onChange = (event) => {
    const { onChange } = this.props

    if (onChange) {
      onChange(event.target.value)
    }
  }

  onKeyPress = (event) => {
    const { onEnter, onKeyPress } = this.props

    if (event.key === 'Enter' && onEnter) {
      onEnter()
    }

    if (onKeyPress) {
      onKeyPress(event)
    }
  }

  onSetRef = (input) => {
    this.input = input
  }

  render() {
    const {
      mask, disabled, attach, focus,
      size, invalid, offset, ...props
    } = this.props

    return createElement(
      mask ? MaskedInput : 'input',
      {
        ...props,
        mask,
        disabled,
        className: styles({
          disabled,
          attach,
          focus,
          size,
          offset,
          invalid,
        }),
        ref: this.onSetRef,
        onKeyPress: this.onKeyPress,
        onChange: this.onChange,
      },
    )
  }
}

export default InputElement
