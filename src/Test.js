import React, { Component} from 'react';

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myArray : ['a', 'b', 'c', 'd', 'e', 'f', 'g']

        }
    }

    randomNumber = (max) => {
        let min = Math.ceil(0);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render(){

        return (
            <div>
                <div>{this.state.myArray[3]}</div>
                <span>{this.randomNumber(3)}</span>
            </div>
        )
    }
}

export default Test