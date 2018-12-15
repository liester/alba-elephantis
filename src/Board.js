import React, { Component } from 'react'
import Tile from './Tile'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Test from './Test'
import itemsJson from './items.json'

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
            validIndexes: [0, 1, 2, 3, 4]
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

    removeIndex(index){
        let indexCopy =  [...this.state.validIndexes];
        indexCopy.splice(index, 1);
        this.setState({
            validIndexes: indexCopy
        })
    }

    getRandomItem = () => {
        let max = this.state.validIndexes.length - 1;
        let randomNumber = Math.floor(Math.random() * (max));
        const validIndex = this.state.validIndexes.indexOf(randomNumber);
        const item = this.state.items[validIndex];
        this.removeIndex(validIndex)
        return { ...item, index: validIndex };
    }
    returnItem = (index) => {
        this.setState({
            validIndexes: [...this.state.validIndexes, index]
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