import React from "react";

//quotes API
const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quotes: [],
      index: 0
    }
  }


  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        quotes: data.quotes[0]
      })
    })
  }


  getRandomIndex = () => {
    const quotes = this.state.quotes

    if(quotes.length > 0) {
      const index = Math.floor(Math.random() * quotes.length)
      this.setState({
        index
      })
    }
  }


  render() {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="col-6 p-4 rounded" id="quote-box">
          <p>Hello</p>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <a 
            className="btn btn-primary p-1" 
            target="_blank"
            rel="noreferrer" 
            href="https://www.twitter.com/intent/tweet" 
            id="tweet-quote">
              <i className="fa fa-twitter"/> Tweet
            </a>

            <button className="btn btn-primary p-1" id="new-quote" onClick={this.getRandomIndex}>
              New Quote 
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
