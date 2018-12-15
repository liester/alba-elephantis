import React, {Component} from 'react'
import Tile from './Tile'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import Flippy, {FrontSide, BackSide} from 'react-flippy'
import Help from '@material-ui/icons/Help'
import Test from './Test'

const styles = theme => ({
    board: {
       backgroundColor: 'skyblue',
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
            tiles: [
                {
                    id: 1,
                    title: "XBox One X"
                },
                {
                    id: 2,
                    title: "Bucket of Nacho Cheese"
                },
                {
                    id: 3,
                    title: "Clock"
                },
                {
                    id: 4,
                    title: "Goat"
                },
                {
                    id: 5,
                    title: "Hat"
                },
                {
                    id: 6,
                    title: "Horse"
                },
                {
                    id: 7,
                    title: "Dog"
                },
                {
                    id: 8,
                    title: "Watch"
                },
                {
                    id: 9,
                    title: "Milk"
                },
                {
                    id: 10,
                    title: "Bread"
                },
                {
                    id: 11,
                    title: "Butter"
                },
                {
                    id: 12,
                    title: "Jelly"
                },
                {
                    id: 13,
                    title: "Fish"
                },
                {
                    id: 14,
                    title: "Pork"
                },
                {
                    id: 15,
                    title: "Hat"
                },
                {
                    id: 16,
                    title: "Red"
                },
                {
                    id: 17,
                    title: "Green"
                },
                {
                    id: 18,
                    title: "Yellow"
                },
                {
                    id: 19,
                    title: "Brown"
                },
                {
                    id: 20,
                    title: "Orange"
                },
                {
                    id: 21,
                    title: "XBox One X"
                },
                {
                    id: 22,
                    title: "Bucket of Nacho Cheese"
                },
                {
                    id: 23,
                    title: "Clock"
                },
                {
                    id: 24,
                    title: "Goat"
                },
                {
                    id: 25,
                    title: "Hat"
                },
                {
                    id: 26,
                    title: "Horse"
                },
                {
                    id: 27,
                    title: "Dog"
                },
                {
                    id: 28,
                    title: "Watch"
                },
                {
                    id: 29,
                    title: "Milk"
                },
                {
                    id: 30,
                    title: "Bread"
                },
                {
                    id: 31,
                    title: "Butter"
                },
                {
                    id: 32,
                    title: "Jelly"
                },
                {
                    id: 33,
                    title: "Fish"
                },
                {
                    id: 34,
                    title: "Pork"
                },
                {
                    id: 35,
                    title: "Hat"
                },
                {
                    id: 36,
                    title: "Red"
                },
                {
                    id: 37,
                    title: "Green"
                },
                {
                    id: 38,
                    title: "Yellow"
                },
                {
                    id: 39,
                    title: "Brown"
                },
                {
                    id: 40,
                    title: "Orange"
                },
                {
                    id: 41,
                    title: "XBox One X"
                },
                {
                    id: 42,
                    title: "Bucket of Nacho Cheese"
                },
                {
                    id: 43,
                    title: "Clock"
                },
                {
                    id: 44,
                    title: "Goat"
                },
                {
                    id: 45,
                    title: "Hat"
                },
                {
                    id: 46,
                    title: "Horse"
                },
                {
                    id: 47,
                    title: "Dog"
                },
                {
                    id: 48,
                    title: "Watch"
                },
                {
                    id: 49,
                    title: "Milk"
                },
                {
                    id: 50,
                    title: "Bread"
                },
                {
                    id: 51,
                    title: "XBox One X"
                },
                {
                    id: 52,
                    title: "Bucket of Nacho Cheese"
                },
                {
                    id: 53,
                    title: "Clock"
                },
                {
                    id: 54,
                    title: "Goat"
                },
                {
                    id: 55,
                    title: "Hat"
                },
                {
                    id: 56,
                    title: "Horse"
                },
                {
                    id: 57,
                    title: "Dog"
                },
                {
                    id: 58,
                    title: "Watch"
                },
                {
                    id: 59,
                    title: "Milk"
                },
                {
                    id: 60,
                    title: "Bread"
                },
                {
                    id: 61,
                    title: "XBox One X"
                },
                {
                    id: 62,
                    title: "Bucket of Nacho Cheese"
                },
                {
                    id: 63,
                    title: "Clock"
                },
                {
                    id: 64,
                    title: "Goat"
                },
                {
                    id: 65,
                    title: "Hat"
                },
                {
                    id: 66,
                    title: "Horse"
                },
                {
                    id: 67,
                    title: "Dog"
                },
                {
                    id: 68,
                    title: "Watch"
                },
                {
                    id: 69,
                    title: "Milk"
                },
                {
                    id: 70,
                    title: "Bread"
                },
                {
                    id: 71,
                    title: "XBox One X"
                },
                {
                    id: 72,
                    title: "Bucket of Nacho Cheese"
                },
                {
                    id: 73,
                    title: "Clock"
                },
                {
                    id: 74,
                    title: "Goat"
                },
                {
                    id: 75,
                    title: "Hat"
                },
                {
                    id: 76,
                    title: "Horse"
                },
                {
                    id: 77,
                    title: "Dog"
                },
                {
                    id: 78,
                    title: "Watch"
                },
                {
                    id: 79,
                    title: "Milk"
                },
                {
                    id: 80,
                    title: "Bread"
                },
                {
                    id: 81,
                    title: "XBox One X"
                },
                {
                    id: 82,
                    title: "Bucket of Nacho Cheese"
                },
                {
                    id: 83,
                    title: "Clock"
                },
                {
                    id: 84,
                    title: "Goat"
                },
                {
                    id: 85,
                    title: "Hat"
                },
                {
                    id: 86,
                    title: "Horse"
                },
                {
                    id: 87,
                    title: "Dog"
                },
                {
                    id: 88,
                    title: "Watch"
                },
                {
                    id: 89,
                    title: "Milk"
                },
                {
                    id: 90,
                    title: "Bread"
                },
                {
                    id: 91,
                    title: "XBox One X"
                },
                {
                    id: 92,
                    title: "Bucket of Nacho Cheese"
                },
                {
                    id: 93,
                    title: "Clock"
                },
                {
                    id: 94,
                    title: "Goat"
                },
                {
                    id: 95,
                    title: "Hat"
                },
                {
                    id: 96,
                    title: "Horse"
                },
                {
                    id: 97,
                    title: "Dog"
                },
                {
                    id: 98,
                    title: "Watch"
                },
                {
                    id: 99,
                    title: "Milk"
                },
                {
                    id: 100,
                    title: "Bread"
                },
            ]
        }
    }

    static propTypes = {
        item: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    eachTile = (tile, i) => {
        return (
            <Tile key={i}
                    index={i}>
                    {tile.title}
            </Tile>
        )
    }

    numberTile = () => {
        return
    }
    
    render() {

        const { classes } = this.props;

        

        return (
            <div>
                <div className={classes.board}>
                    {this.state.tiles.map(this.eachTile)}
                </div>
                <Test></Test>
            </div>
        )
    }
}

export default withStyles(styles)(Board)