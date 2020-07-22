import React, {Component} from 'react';


class Header extends Component {

    state = {count: 0, greeting: "Your time:", interval: null};
    componentDidMount(){
        setInterval(() => {this.setState({count:this.state.count+1}) }, 1000);
          
    }
    render() {
        return (
            <div>{this.state.greeting} {this.state.count} </div>
      
        )
    }
}

export default Header