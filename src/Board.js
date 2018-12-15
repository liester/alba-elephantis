import React, { Component } from 'react'
import Tile from './Tile'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import itemsJson from './fiftyItems.json'

const styles = theme => ({
    board: {
        background: 'linear-gradient(#007acc, #b3e0ff)',
        padding: 0,
        minHeight: '99vh',
        maxHeight: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
})

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: itemsJson,
            validIndexList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
        }

    }

    static propTypes = {
        item: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    eachTile = (tile, i) => {
        return (
            <Tile key={i}></Tile>
        )
    }

    removeAtIndex = (index) => {
        let indexCopy = [...this.state.validIndexList];
        indexCopy.splice(index, 1);
        this.setState({
            validIndexList: indexCopy
        })
    }

    getRandomNumber(min, max){
        let random = Math.floor(Math.random() * (max - min) + min);
        return random;
    }

    getItem(itemIndex){
        return this.state.itemsJson[itemIndex];
    }

    getRandomItem = () => {
        let randomNumber = this.getRandomNumber(0, this.state.validIndexList.length)
        console.log(`Random Number:${randomNumber}`)

        let itemIndex = this.state.validIndexList[randomNumber];
        
        console.log(`Item Index: ${itemIndex}`);

        let item = this.state.items[itemIndex];

        console.log(`Item: ${JSON.stringify(item)}`)

        this.removeAtIndex(randomNumber)

        return { ...item, index: itemIndex };
    }
    returnItem = (index) => {
        this.setState({
            validIndexList: [...this.state.validIndexList, index]
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={classes.board}>
                    {this.state.items.map((item, index) => {
                        return (
                            <Tile key={index}
                                label={index + 1}
                                onInitialFlip={this.getItem}
                                getRandomItem={this.getRandomItem}
                                returnItem={this.returnItem}></Tile>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Board)