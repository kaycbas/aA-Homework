import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        result: 0,
        num1: '',
        num2: ''
    }
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  setNum1(e) {
      let input = e.target.value;
      this.setState({num1: input});
  }

  setNum2(e) {
      let input = e.target.value;
      this.setState({num2: input});
  }

  calculate(e) {
      let op = e.target.innerHTML;
      let res;
      switch (op) {
          case '+':
              res = Number(this.state.num1) + Number(this.state.num2);
              this.setState({result: res});
              break;
          case '-':
              res = Number(this.state.num1) - Number(this.state.num2);
              this.setState({result: res});
              break;
          case '*':
              res = Number(this.state.num1) * Number(this.state.num2);
              this.setState({result: res});
              break;
          case '/':
              res = Number(this.state.num1) / Number(this.state.num2);
              this.setState({result: res});
              break;
          default:
              let res = '0';
              let num1 = '';
              let num2 = '';
              this.setState({result: res, num1: num1, num2: num2});
              break;
      }
  }

  render() {
    let {result, num1, num2} = this.state;
    return (
      <div> 
        <h1>{this.state.result}</h1>
        <input type="text" onChange={this.setNum1} value={num1}></input>
        <input type="text" onChange={this.setNum2} value={num2}></input>
        <button onClick={this.calculate}>Clear</button>
        <br/>
        <button onClick={this.calculate}>+</button>
        <button onClick={this.calculate}>-</button>
        <button onClick={this.calculate}>*</button>
        <button onClick={this.calculate}>/</button>
      </div>
    );
  }
}

export default Calculator;