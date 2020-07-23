import React, {Component} from 'react';
import './body.css'
import {Button} from "react-bootstrap"
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
                    <div className="coin">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/US_One_Cent_Obv.png/1200px-US_One_Cent_Obv.png"/>
                        <p>Total pennies: {this.state.pennies}</p>
                        <Button className="increment" type="button" variant="success" onClick={this.incrementPennies}>+</Button>
                        <Button className="decrement" type="button" variant="danger" disabled={this.state.pennies == 0} onClick={this.decreasePennies}>-</Button>
                    </div>

                    <div className="coin">
                        <img src="http://www.pngmart.com/files/7/Nickel-PNG-Clipart.png"/>
                        <p>Total nickels: {this.state.nickels}</p>
                        <Button className="increment" type="button" variant="success" onClick={this.incrementNickels}>+</Button>
                        <Button className="decrement" type="button" variant="danger" disabled={this.state.nickels == 0} onClick={this.decreaseNickels}>-</Button>
                    </div>

                    <div className="coin">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/2017-D_Roosevelt_dime_obverse_transparent.png/220px-2017-D_Roosevelt_dime_obverse_transparent.png"/>
                        <p>Total dimes: {this.state.dimes}</p>
                        <Button className="increment" type="button" variant="success" onClick={this.incrementDimes}>+</Button>
                        <Button className="decrement" type="button" variant="danger" disabled={this.state.dimes == 0} onClick={this.decreaseDimes}>-</Button>
                    </div>
                    
                    <div className="coin">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/2006_Quarter_Proof.png/780px-2006_Quarter_Proof.png"/>
                        <p>Total quarters: {this.state.quarters}</p>
                        <Button className="increment" type="button" variant="success" onClick={this.incrementQuarters}>+</Button>
                        <Button className="decrement" type="button" variant="danger" disabled={this.state.quarters == 0} onClick={this.decreaseQuarters}>-</Button>
                    </div>

                </div>
                
                <div className="body-right">
                    <div>
                        <h1>Target: ${this.state.target.toFixed(2)}</h1>
                        <h2>Current total: ${this.state.total.toFixed(2)}</h2>
                        <h2>{this.state.answer}</h2>
                        <Button className="reset" type="submit" variant="primary" onClick={this.refreshPage}>Reset</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body