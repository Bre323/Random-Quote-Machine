import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="quote-box">
          <p>Hello</p>

          <div>
            <a href="https://www.twitter.com/intent/tweet" id="tweet-quote">
              <i className="fa-fa twitter"/> Tweet
            </a>
            
            <button id="new-quote">New Quote</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
