import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="col-6 p-4 rounded" id="quote-box">
          <p>Hello</p>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <a 
            className="btn btn-primary p-1" 
            target="_blank" 
            href="https://www.twitter.com/intent/tweet" 
            id="tweet-quote">
              <i className="fa fa-twitter"/> Tweet
            </a>

            <button className="btn btn-primary p-1" id="new-quote">New Quote</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
