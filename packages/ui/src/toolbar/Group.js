/* eslint-disable react/sort-comp */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Column, Layout } from 'flex-layouts'
import { Collapse } from '../animation'
import GroupItem from './GroupItem'

class Group extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpened: this.isActive(),
    }
  }

  isActive() {
    const { to, location } = this.props

    return location.pathname.indexOf(to) === 0
  }

  onToggle = () => {
    this.setState({ isOpened: !this.state.isOpened })
  }

  renderItem() {
    const { minimized, to, title, icon } = this.props
    const { isOpened } = this.state


    return (
      <GroupItem
        to={to}
        icon={icon}
        isOpened={isOpened}
        minimized={minimized}
        key={`item-${to}`}
        active={this.isActive()}
        onClick={this.onToggle}
      >
        {title}
      </GroupItem>
    )
  }

  renderContent() {
    const { to, children } = this.props
    const { isOpened } = this.state

    return (
      <Collapse
        isOpened={isOpened}
        key={`content-${to}`}
      >
        {children}
      </Collapse>
    )
  }

  render() {
    return (
      <Column>
        <Layout>
          {this.renderItem()}
        </Layout>
        <Layout>
          {this.renderContent()}
        </Layout>
      </Column>
    )
  }
}

export default withRouter(Group)
