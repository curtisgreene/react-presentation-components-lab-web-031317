import React from 'react'

class DumbComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mood: 'happy'
    }
  }

  handleClick(e) {
    if (this.state.mood === 'happy') {
      this.setState({ mood: 'sad' })
    } else {
      this.setState({
        mood: 'happy'
      })
    }
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        <h3>{this.state.mood}</h3>
      </div>
    )
  }
}

export default DumbComponent
