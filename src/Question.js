import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

    if (this.props.type === 'text') {
      if (event.target.value.toLowerCase() === this.props.answer) {
        this.setState({ btnClass: 'text-success' });
      } else {
        this.setState({ btnClass: 'text-danger' });
      }
    } else if (this.props.type === 'textarea') {
      var studentAnswers = event.target.value.split(",").map(function(item) {
        return item.trim();
      });

      var allGood = false;
      var anyBad = false;
      for (var i = 0; i < studentAnswers.length; i++) {
        if (this.props.answer.includes(studentAnswers[i])) {
          allGood = true;
        } else {
          anyBad = true;
        }
      }

      if (allGood && !anyBad && studentAnswers.length > 1) {
        this.setState({ btnClass: 'text-success' });
      } else {
        this.setState({ btnClass: 'text-danger' });
      }
    }
  }

  render() {
    function createMarkup(html) { return {__html: html}; };

    var questionType;
    switch (this.props.type) {
      case 'text':
        questionType = <input
          type="text"
          className={'form-control ' + this.state.btnClass}
          id={'question-' + this.props.index }
          aria-describedby={'question-' + this.props.index }
          placeholder="Answer"
          value={this.state.value}
          onChange={this.handleChange} 
          autoComplete="off" />;
        break;
      case 'textarea':
        questionType = <textarea
          className={'form-control ' + this.state.btnClass}
          id={'question-' + this.props.index }
          value={this.state.value}
          onChange={this.handleChange}
          autoComplete="off"
          rows="3"></textarea>;
        break;
      default:
        break;
    }

    return (
      <div className="form-group">
        <label
          htmlFor={'question-' + this.props.index }
          dangerouslySetInnerHTML={createMarkup(this.props.question)}>
        </label>
        { questionType }
      </div>
    );
  }
}

export default Question;