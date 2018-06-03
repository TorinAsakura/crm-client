import { Component } from 'react'
import onClickOutside from 'react-onclickoutside'

class OnOutsideClick extends Component {
  handleClickOutside(event) {
    if (this.props.onOutsideClick) {
      this.props.onOutsideClick(event)
    }
  }

  render() {
    return this.props.children
  }
}

export default onClickOutside(OnOutsideClick)

