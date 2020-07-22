import React, {Component} from 'react';
//import {logicService} from './services'

class Body extends Component {

    state = {
        target: 2.00, 
        total: 0, 
        pennies: 0, 
        nickels:0,
        dimes: 0,
        quarters: 0
    };

    incrementPennies = () => {
        this.setState( {total: this.state.total + 0.01, pennies: this.state.pennies + 1});
    }

    incrementNickels = () => {
        this.setState( {total: this.state.total + 0.05, nickels: this.state.nickels + 1});
    }
    incrementDimes = () => {
        this.setState( {total: this.state.total + 0.10,dimes: this.state.dimes + 1});
    }

    incrementQuarters = () => {
        this.setState( {total: this.state.total + 0.25, quarters: this.state.quarters + 1});
    }

    newRandom() {
        var precision = 100;
    
        var randomNum = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1*precision);  
    
        return randomNum;
    }

    componentDidMount() {
        this.setState({target: this.newRandom()})
    }

    
    render() {
        return (
            <div className="body">
                <div className="body-left">
                    <button onClick={this.incrementPennies} title="Penny">+</button>
                    <button onClick={this.incrementNickels} title="Nickel">+</button>
                    <button onClick={this.incrementDimes} title="Dime">+</button>
                    <button onClick={this.incrementQuarters} title="Quarter">+</button>
                </div>
                <div className="body-right">
                    <div>
                        <h1>Target: ${this.state.target.toFixed(2)}</h1>
                        <h2>Current total: ${this.state.total.toFixed(2)}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body