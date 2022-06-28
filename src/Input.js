import React, { Component } from "react";

class Input extends Component{
   state = {
    currencies: ["USD", "ILS"],
    base: "USD",
    amount: "",
    convertTo: "ILS",
    result: "",
    rates: {
      "ILS": 3.44,
      "USD": 0.62

    }
  };




  handleInput = e => {
    this.setState(
      {
        amount: e.target.value,
        result: null,
      },
      this.calculate
    );
  };

  handleSelect = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        result: null
      },
      this.calculate
    );
  };
  handleSwap = e => {
    const base = this.state.base;
    const convertTo = this.state.convertTo;
    e.preventDefault();
    this.setState(
      {
        convertTo: base,
        base: convertTo,
        result: null
      },
      this.calculate
    );
  };

  calculate = () => {
    const amount = this.state.amount;
    if (amount === isNaN) {
      return;
    } else {
          const result = ((this.state?.rates[this.state?.convertTo]) * amount).toFixed(4);
       
          console.log(result)

          this.setState({
            result
          });
        };
    }



render(){
  const { base, amount, convertTo, result } = this.state;

  return(
      <div>
        <h1>
          {amount} {base} in {convertTo}
        </h1>
        <input type="number"
          className="input"
          value={amount}
          onChange={this.handleInput} 
          >
          </input>
          <div className='equ'>=</div>

          <input
           value={
            amount === ""
              ? "0"
              : result === null
              ? "Calculating..."
              : result
          }
            >
          </input>
          <h1 onClick={this.handleSwap} className="swap">
                    &#8595;&#8593;
                  </h1>
      </div>
  );
  }
}

export default Input;