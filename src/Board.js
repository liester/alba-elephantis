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
       backgroundColor: 'gold',
       padding: 0,
       height: '99vh',
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
                }
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