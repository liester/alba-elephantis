import React, { Component} from 'react';

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myArray : ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        }
    }

    randomNumber = () => {
        let num = this.state.myArray.length;
        let min = Math.ceil(0);
        let max = Math.floor(num);
        let arrayNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return this.state.myArray[arrayNum];
    }

    render(){

        return (
            <div>
                <span>{this.randomNumber()}</span>
            </div>
        )
    }
}

export default Test