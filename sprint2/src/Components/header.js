import React, {Component} from 'react';
import './header.css';



class Header extends Component {

    state = {count: 0, greeting: "Your time:", interval: null};
    componentDidMount(){
        setInterval(() => {this.setState({count:this.state.count+1}) }, 1000);
          
    }
    render() {
        return (
            <div className="header">
            <div className="logo"><img src="https://png2.cleanpng.com/sh/583b91332748f07129b90ac48f40d3a1/L0KzQYm3VMIzN6VpfZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TflvfpZ4jN9uboSwfbF1hgkubZJ3hp92b37oiX72jvxqdpYyTdNtZEPoRre8Vsc0QWozTKoEM0a2Qoe4VcI1PGU9UKkEM0W3QXB3jvc=/kisspng-computer-icons-investment-money-earn-money-online-5add3e6f567399.4893632615244488793541.png" /> </div>
            <h1 className="title">Coin Stacker</h1>
            <h3 className="timer">{this.state.greeting} {this.state.count} </h3>
            </div>
        )
    }
}

export default Header