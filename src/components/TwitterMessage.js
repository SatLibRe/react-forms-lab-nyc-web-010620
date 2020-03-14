import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      tweet: event.target.value

    })
  }

  characterCounter = () => {
    return 280 - this.state.tweet.length 
  }

  render() {
    console.log(this.state.tweet)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.tweet} />
        <h1> {this.characterCounter()} </h1>
      </div>
    );
  }
}

export default TwitterMessage;
