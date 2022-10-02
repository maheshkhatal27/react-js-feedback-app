import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {feedbackFlag: false}

  triggerFeedback = () => {
    this.setState({feedbackFlag: true})
  }

  render() {
    const {feedbackFlag} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="feedback-container">
        {feedbackFlag ? (
          <div className="feedback-content-container">
            <img
              src={loveEmojiUrl}
              className="love-emoji-size"
              alt="love emoji"
            />
            <h1 className="thank-you">Thank you!</h1>
            <p className="customer-title">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        ) : (
          <div className="feedback-content-container">
            <h1 className="feedback-title">
              How satisfied are you with our customer support performance?
            </h1>

            <ul className="emoji-container">
              {emojis.map(eachEmoji => (
                <li className="emoji-list-container" key={eachEmoji.id}>
                  <img
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                    className="emoji-size"
                    onClick={this.triggerFeedback}
                  />
                  <p className="emoji-title">{eachEmoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
