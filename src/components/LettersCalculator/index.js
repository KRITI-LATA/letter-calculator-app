// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {lettersCount: 0}

  onChangeNoOfLetter = event => {
    this.setState({lettersCount: event.target.value.length})
  }

  render() {
    const {lettersCount} = this.state

    return (
      <div className="bg-background">
        <div className="calculate-card">
          <h1 className="heading-text">Calculate the Letters you enter</h1>
          <label htmlFor="Enter the phrase" className="s-phrase">
            Enter the phrase
          </label>
          <input
            type="text"
            className="letter-phrase"
            id="Enter the phrase"
            placeholder="Enter the phrase"
            onChange={this.onChangeNoOfLetter}
          />
          <p className="letter-text">No.of letters: {lettersCount}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="cal-img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
