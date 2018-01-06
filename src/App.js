import React, { Component } from 'react';
import Question from './Question.js'

class App extends Component {
  render() {
    var questions = [
      {
        id: 1,
        question: `Would a neuron with the following stats fire?
                    <ul>
                        <li>RMP: <strong>-40</strong> mV</li>
                        <li>Threshold: <strong>-20</strong> mV</li>
                        <li>Max Potential: <strong>40</strong> mV</li>
                    </ul>
                    <p><small>Yes/No</small>`,
        answer: 'yes',
        type: 'text'
      },
      {
        id: 2,
        question: `What is the minimal amount of voltage required to stimulate an action potential?
              <ul>
                <li>RMP: <strong>-40</strong> mV</li>
                <li>Threshold: <strong>-20</strong> mV</li>
                <li>Max Potential: <strong>40</strong> mV</li>
              </ul>`,
        answer: '20',
        type: 'text'
      },
      {
        id: 3,
        question: `When resting, what is the relative concentrations of Na<sup>+</sup> out of the cell vs in the cell
              <p><small>Describe the values using &lt;, &gt;, and &equals;</small></p>`,
        answer: '<',
        type: 'text'
      },
      {
        id: 4,
        question: `When resting, what is the relative concentrations of K<sup>+</sup> out of the cell vs in the cell
              <p><small>Describe the values using &lt;, &gt;, and &equals;</small></p>`,
        answer: '>',
        type: 'text'
      },
      {
        id: 5,
        question: `When resting, what is the relative concentrations of Cl<sup>-</sup> out of the cell vs in the cell
              <p><small>Describe the values using &lt;, &gt;, and &equals;</small></p>`,
        answer: '=',
        type: 'text'
      },
      {
        id: 6,
        question: `When resting, what is the relative concentrations of other proteins out of the cell vs in the cell
              <p><small>Describe the values using &lt;, &gt;, and &equals;</small></p>`,
        answer: '=',
        type: 'text'
      },
      {
        id: 7,
        question: `Examples of bipolar neurons:
              <p><small>Separate each example by a comma (,)</small></p>`,
        answer: ['retina', 'olfactory'],
        type: 'textarea'
      }
    ];

    var questionsToShow = [];
    for (var i = 0; i < questions.length; i++) {

      questionsToShow.push(
        <div key={ questions[i].id }>
          <Question
            index={ i }
            question={ 'Question ' + (i + 1) + ': ' + questions[i].question }
            answer={ questions[i].answer }
            type={ questions[i].type }>
          </Question>
          <hr />
        </div>
      );
    }

    return (
      <div className="App">
        { questionsToShow }
      </div>
    );
  }
}

export default App;
