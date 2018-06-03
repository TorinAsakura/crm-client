import React, { Component } from 'react'
import Container from './Container'
import Line from './Line'

class Progress extends Component {
  static defaultProps = {
    percent: -1,
    animate: true,
    intervalTime: 100,
  }

  constructor(props) {
    super()
    this.state = {
      percent: props.percent,
    }
  }

  componentDidMount() {
    this.onInit(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.onClearTimer()
    this.onInit(nextProps)
  }

  componentWillUnmount() {
    this.onClearTimer()
  }

  onClearTimer = () => {
    if (this.interval) {
      clearInterval(this.interval)
    }

    if (this.timeOut) {
      clearTimeout(this.timeOut)
    }
  }

  onIncrement = () => {
    const { percent } = this.state
    const nextPercent = percent < 99
      ? (percent + ((Math.random() + 1) - Math.random()))
      : 99

    this.setState({
      percent: nextPercent,
    })
  }

  onInit = (props) => {
    if (props.percent === this.props.percent) return

    if (!this.props.animate) {
      this.setState({ percent: props.percent })

      return
    }

    if (props.percent >= 0 && props.percent < 99) {
      this.interval = setInterval(this.onIncrement, props.intervalTime)
    }

    if (props.percent >= 100) {
      this.setState({
        percent: 100,
      }, () => {
        this.timeOut = setTimeout(() => {
          this.setState({ percent: -1 })
        }, 400)
      })
    } else {
      this.setState({
        percent: props.percent,
      })
    }
  }

  render() {
    const { percent } = this.state
    const { absolute, extended } = this.props

    const progress = percent < 0 ? 0 : percent
    const hidden = percent < 0 || percent >= 100

    return (
      <Container hidden={hidden} absolute={absolute} extended={extended}>
        <Line
          showValue={extended}
          progress={progress}
        />
      </Container>
    )
  }
}

export default Progress
