import React, { Component } from 'react';
import './App.css';

const buttonObjects = [
  {
    value: '+',
    id: 'add',
    type: 'operator',
    keyCode: 107
  },
  {
    value: '-',
    id: 'subtract',
    type: 'operator',
    keyCode: 109
  },
  {
    value: '*',
    id: 'multiply',
    type: 'operator',
    keyCode: 106
  },
  {
    value: '/',
    id: 'divide',
    type: 'operator',
    keyCode: 111
  },
  {
    value: 7,
    id: 'seven',
    type: 'num',
    keyCode: 103
  },
  {
    value: 8,
    id: 'eight',
    type: 'num',
    keyCode: 104
  },
  {
    value: 9,
    id: 'nine',
    type: 'num',
    keyCode: 105
  },
  {
    value: 4,
    id: 'four',
    type: 'num',
    keyCode: 100
  },
  {
    value: 5,
    id: 'five',
    type: 'num',
    keyCode: 101
  },
  {
    value: 6,
    id: 'six',
    type: 'num',
    keyCode: 102
  },
  {
    value: 1,
    id: 'one',
    type: 'num',
    keyCode: 97
  },
  {
    value: 2,
    id: 'two',
    type: 'num',
    keyCode: 98
  },
  {
    value: 3,
    id: 'three',
    type: 'num',
    keyCode: 99
  },
  {
    value: 0,
    id: 'zero',
    type: 'num',
    keyCode: 96
  },
  {
    value: '.',
    id: 'decimal',
    type: 'decimal',
    keyCode: 110
  },
  {
    value: 'clear',
    id: 'clear',
    type: 'clear',
    keyCode: 8
  },
  {
    value: '=',
    id: 'equals',
    type: 'equals',
    keyCode: 13
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: 0,
      storedVal: 0,
      belowZeroDivider: 10,
      wholeNum: true,
      output: '',
      equationOperator: '',
      negNum: false,
      emptyDecimals: ''
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInput = (input, type) => {
    console.log('input: ' + input, 'type: ' + type)
    // determine the type of input
    if (type === 'num') {
      this.handleDigitInput(input);
    } else if (input === '-' && this.state.currentVal === 0) {
      this.setState({
        negNum: true
      })
    }else if (type === 'operator') {
      this.handleOperator(input);
    } else if (type === 'decimal' && this.state.wholeNum === true) {
      this.setState({
        wholeNum: false,
        emptyDecimals: '.'
      })
    } else if (type === 'equals') {
      this.setState({
        output: this.calcOutcome(this.state.storedVal, this.state.equationOperator, this.state.currentVal),
      })
    } else if (type === 'clear') {
      this.setState({
        output: ''
      })
      this.resetCalc();
    }
  }

  handleDigitInput(input) {
    console.log('digit input: ' + input)
    let newVal;
    if (this.state.wholeNum === true) {
      // If there is no decimal point
      if (this.state.negNum) {
        newVal = (this.state.currentVal * 10) - input;
      } else {
        newVal = (this.state.currentVal * 10) + input;
      }
    } else {
      // If there is an existing decimal point
      if (this.state.negNum) {
        newVal = this.state.currentVal - (input / this.state.belowZeroDivider)
      } else {
        newVal = this.state.currentVal + (input / this.state.belowZeroDivider)
      }
      this.setState({
        belowZeroDivider: this.state.belowZeroDivider * 10,
      });
      if (input === 0) {
        this.setState({
          emptyDecimals: this.state.emptyDecimals + '0'
        })
      } else {
        this.setState({
          emptyDecimals: ''
        })
      }
    }
    this.setState({
      currentVal: newVal
    })
    // if a value is entered after a calculation has just been made
    if (this.calcOutcome(this.state.storedVal, this.state.equationOperator, this.state.currentVal) === this.state.output) {
      this.setState({
        currentVal: newVal,
        output: ''
      })
    }
    console.log(newVal)
  }

  handleOperator(input) {
    console.log('handling operator')
    this.setState({
      equationOperator: input,
    })
    // If there's an input, store input and continue with second part of equation
    if (this.state.currentVal !== 0) {
      console.log('setting stored value = currentVal')
      this.setState({
        storedVal: this.state.currentVal,
      })
    }
    // if a valid equation exists, calculate and continue
    const outcome = this.calcOutcome(this.state.storedVal, this.state.equationOperator, this.state.currentVal)
    if (outcome !== this.output && this.state.currentVal !== 0) {
      console.log('valid equation, setting storedVal and output to equation')
      this.setState({
        storedVal: outcome,
        output: outcome,
        equationOperator: input,
        belowZeroDivider: 10,
        wholeNum: true,
        negNum: false,
      })
    }

    this.setState({
      currentVal: 0,
      belowZeroDivider: 10,
      wholeNum: true,
      negNum: false
    })
  }

  calcOutcome = (val1, operator, val2) => {
    let outcome;
    // check what operator was used and calculate accordingly
    switch (operator) {
      case '+':
        outcome = val1 + val2;        
        break;
      case '-':
        outcome = val1 - val2;        
        break;
      case '*':
        outcome = val1 * val2;        
        break;
      case '/':
        outcome = val1 / val2;        
        break;
      default:
        break;
    }
    return outcome;
  }

  resetCalc() {
    console.log('calculator reset')
    // restore calculator to initial state
    this.setState({
      currentVal: 0,
      storedVal: 0,
      belowZeroDivider: 10,
      wholeNum: true,
      negNum: false,
      equationOperator: '',
    });
  }

  handleKeyPress(e) {
    // Check if key pressed is in calc buttons array
    var result = buttonObjects.find(obj => {
      return obj.keyCode === e.keyCode
    });

    if(result) {
      // handle input if key pressed is on calculator
      this.handleInput(result.value, result.type);
    }
  }

  render() {
    document.addEventListener("keydown", this.handleKeyPress)
    return (
      <div id="calc" className="calculator">
        <div className="display">
          <p style={{display: this.state.storedVal !== 0 ? 'initial' : 'none'}}>
            {this.state.storedVal}
            {this.state.storedVal === 0 ? '' : this.state.emptyDecimals}</p>
          <p style={{display: this.state.equationOperator !== '' ? 'initial' : 'none'}}>
            {this.state.equationOperator}</p>
          <p style={{visibility: this.state.currentVal !== 0 ? 'visible' : 'hidden'}}>
            {this.state.currentVal}
            {this.state.currentVal === 0 ? '' : this.state.emptyDecimals}</p>
        </div>
        <div className="calculator-pad">
          {buttonObjects.map((key, idx) => (
            <button key={idx} id={key.id} onClick={() => this.handleInput(key.value, key.type)}>{key.value}</button>
          ))}
        </div>
        <div className="display">
          <p id="display">
            {this.state.output !== '' && this.state.storedVal !== 0 ? this.state.output : this.state.currentVal}
            {this.state.currentVal === 0 ? '' : this.state.emptyDecimals}</p>
        </div>
      </div>
    )
  }
}
