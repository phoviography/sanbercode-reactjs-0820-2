import React, { Component } from 'react'

var date = new Date();


class Tugas11 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 100,
      timeNow: date.toLocaleTimeString(),
      showTime: true
    }
  }

  componentDidMount() {
    if (this.props.start !== undefined) {
      this.setState({ time: this.props.start })
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate() {
    if (this.state.showTime === true) {
      console.log(this.state.time);
      if(this.state.time <=0 ) {
        this.setState({
          showTime: false
        })
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  tick() {
    this.setState({
      time: this.state.time - 1,
      timeNow: this.state.timeNow
    });
  }


  render() {
    return (
      <>
        {this.state.showTime && (
          <>
            <h1 style={{ textAlign: "center" }}>
              Countdown {this.state.time}
            </h1>
            <h1 style={{ textAlign: "center" }}>
              Current time {this.state.timeNow}
            </h1>
          </>
        )}
      </>
    )
  }
}

export default Tugas11