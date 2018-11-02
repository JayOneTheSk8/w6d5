import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.date = new Date();
    this.state = {
      hours: this.date.getHours(),
      mins: this.date.getMinutes(),
      secs: this.date.getSeconds(),
      date: this.date.toDateString()
    };
    this.time = this.time.bind(this);
    this.tick = this.tick.bind(this);
    this.id = 0;
  }

  componentDidMount(){
    this.id = setInterval(this.tick, 100);
  }

  componentWillUnmount() {
    clearInterval(this.id);
    this.id = 0;
  }

  render() {
    return(
      <div className="clock-widget">
        <h1>Clock</h1>
        <div className="clock">
          <p className="time">
            <span className="title">Time:</span>
            <span>{this.time()}</span>
          </p>
          <br/>
          <p className="date">
            <span className="title">Date:</span>
            <span>{this.state.date}</span>
          </p>
        </div>
      </div>
    );
  }

  time() {
    const currentDate = new Date();
    return currentDate.toLocaleTimeString();
  }

  tick() {
    const date = new Date();
    this.setState({
      hours: date.getHours(),
      mins: date.getMinutes(),
      secs: date.getSeconds(),
      date: date.toDateString()
    });
  }
}

export default Clock;
