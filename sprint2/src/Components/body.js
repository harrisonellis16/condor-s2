import React, {Component} from 'react';
import './body.css'
//import {logicService} from './services'

class Body extends Component {

    state = {
        target: 2.00, 
        total: 0.00, 
        pennies: 0, 
        nickels:0,
        dimes: 0,
        quarters: 0,
        answer: "Add more!"
    };
    
    
    //increase total by specified coin amount
    incrementPennies = () => {
        this.setState( {total: this.state.total + 0.01, pennies: this.state.pennies + 1}, this.areYouCorrect);
    
    }

    incrementNickels = () => {
        this.setState( {total: this.state.total + 0.05, nickels: this.state.nickels + 1}, this.areYouCorrect);
    }
    incrementDimes = () => {
        this.setState( {total: this.state.total + 0.10,dimes: this.state.dimes + 1}, this.areYouCorrect);
    }

    incrementQuarters = () => {
        this.setState( {total: this.state.total + 0.25, quarters: this.state.quarters + 1}, this.areYouCorrect);
    }

    
    //decrease total by specified coin amount
    decreasePennies = () => {
        this.setState( {total: this.state.total - 0.01, pennies: this.state.pennies - 1}, this.areYouCorrect);
    }

    decreaseNickels = () => {
        this.setState( {total: this.state.total - 0.05, nickels: this.state.nickels - 1}, this.areYouCorrect);
    }
    decreaseDimes = () => {
        this.setState( {total: this.state.total - 0.10,dimes: this.state.dimes - 1}, this.areYouCorrect);
    }

    decreaseQuarters = () => {
        this.setState( {total: this.state.total - 0.25, quarters: this.state.quarters - 1}, this.areYouCorrect);
    }

    newRandom() {
        var precision = 100;
    
        var randomNum = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1*precision);  
    
        return randomNum;
    }
    
    areYouCorrect = () => {
        if (this.state.total.toFixed(2) < this.state.target) {this.setState({answer: "Add more!"});}
        else if (this.state.total.toFixed(2) == this.state.target) {this.setState({answer: "You did it! Good job!" });}
        else {this.setState({answer: "You added too much!"});}
    }

    componentDidMount() {
        this.setState({target: this.newRandom()})
    }
    

    refreshPage() {
        window.location.reload()
    }

    
    render() {
        return (
            <div className="body">
                <div className="body-left">
                    <button onClick={this.incrementPennies} title="Penny">+</button>
                    <button onClick={this.incrementNickels} title="Nickel">+</button>
                    <button onClick={this.incrementDimes} title="Dime">+</button>
                    <button onClick={this.incrementQuarters} title="Quarter">+</button>
                    <button type="submit"  onClick={this.refreshPage}>Refresh Button</button>
                </div>
                <div className="body-right">
                    <div>
                        <h1>Target: ${this.state.target.toFixed(2)}</h1>
                        <h2>Current total: ${this.state.total.toFixed(2)}</h2>
                        <h2>{this.state.answer}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body