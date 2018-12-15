import React, { Component } from 'react'
import Tile from './Tile'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Test from './Test'

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
            tiles: [{ id: 1, title: 'item:1' },
            { id: 2, title: 'item:2' },
            { id: 3, title: 'item:3' },
            { id: 4, title: 'item:4' },
            { id: 5, title: 'item:5' },
            { id: 6, title: 'item:6' },
            { id: 7, title: 'item:7' },
            { id: 8, title: 'item:8' },
            { id: 9, title: 'item:9' },
            { id: 10, title: 'item:10' },
            { id: 11, title: 'item:11' },
            { id: 12, title: 'item:12' },
            { id: 13, title: 'item:13' },
            { id: 14, title: 'item:14' },
            { id: 15, title: 'item:15' },
            { id: 16, title: 'item:16' },
            { id: 17, title: 'item:17' },
            { id: 18, title: 'item:18' },
            { id: 19, title: 'item:19' },
            { id: 20, title: 'item:20' },
            { id: 21, title: 'item:21' },
            { id: 22, title: 'item:22' },
            { id: 23, title: 'item:23' },
            { id: 24, title: 'item:24' },
            { id: 25, title: 'item:25' },
            { id: 26, title: 'item:26' },
            { id: 27, title: 'item:27' },
            { id: 28, title: 'item:28' },
            { id: 29, title: 'item:29' },
            { id: 30, title: 'item:30' },
            { id: 31, title: 'item:31' },
            { id: 32, title: 'item:32' },
            { id: 33, title: 'item:33' },
            { id: 34, title: 'item:34' },
            { id: 35, title: 'item:35' },
            { id: 36, title: 'item:36' },
            { id: 37, title: 'item:37' },
            { id: 38, title: 'item:38' },
            { id: 39, title: 'item:39' },
            { id: 40, title: 'item:40' },
            { id: 41, title: 'item:41' },
            { id: 42, title: 'item:42' },
            { id: 43, title: 'item:43' },
            { id: 44, title: 'item:44' },
            { id: 45, title: 'item:45' },
            { id: 46, title: 'item:46' },
            { id: 47, title: 'item:47' },
            { id: 48, title: 'item:48' },
            { id: 49, title: 'item:49' },
            { id: 50, title: 'item:50' },
            { id: 51, title: 'item:51' },
            { id: 52, title: 'item:52' },
            { id: 53, title: 'item:53' },
            { id: 54, title: 'item:54' },
            { id: 55, title: 'item:55' },
            { id: 56, title: 'item:56' },
            { id: 57, title: 'item:57' },
            { id: 58, title: 'item:58' },
            { id: 59, title: 'item:59' },
            { id: 60, title: 'item:60' },
            { id: 61, title: 'item:61' },
            { id: 62, title: 'item:62' },
            { id: 63, title: 'item:63' },
            { id: 64, title: 'item:64' },
            { id: 65, title: 'item:65' },
            { id: 66, title: 'item:66' },
            { id: 67, title: 'item:67' },
            { id: 68, title: 'item:68' },
            { id: 69, title: 'item:69' },
            { id: 70, title: 'item:70' },
            { id: 71, title: 'item:71' },
            { id: 72, title: 'item:72' },
            { id: 73, title: 'item:73' },
            { id: 74, title: 'item:74' },
            { id: 75, title: 'item:75' },
            { id: 76, title: 'item:76' },
            { id: 77, title: 'item:77' },
            { id: 78, title: 'item:78' },
            { id: 79, title: 'item:79' },
            { id: 80, title: 'item:80' },
            { id: 81, title: 'item:81' },
            { id: 82, title: 'item:82' },
            { id: 83, title: 'item:83' },
            { id: 84, title: 'item:84' },
            { id: 85, title: 'item:85' },
            { id: 86, title: 'item:86' },
            { id: 87, title: 'item:87' },
            { id: 88, title: 'item:88' },
            { id: 89, title: 'item:89' },
            { id: 90, title: 'item:90' },
            { id: 91, title: 'item:91' },
            { id: 92, title: 'item:92' },
            { id: 93, title: 'item:93' },
            { id: 94, title: 'item:94' },
            { id: 95, title: 'item:95' },
            { id: 96, title: 'item:96' },
            { id: 97, title: 'item:97' },
            { id: 98, title: 'item:98' },
            { id: 99, title: 'item:99' },
            { id: 100, title: 'item:100' }],
            tileNum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
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

    getItem = () => {
        let max = this.state.tileNum.length;
        let arrayNum = Math.floor(Math.random() * (max));
        const item = this.state.tiles.find(item => item.id == arrayNum);
        console.log(item)
        return item;
    }

    render() {

        const { classes } = this.props;



        return (
            <div>
                <div className={classes.board} >
                   {this.state.tiles.map(this.eachTile)}
                </div>
                <Test></Test>
            </div>
        )
    }
}

export default withStyles(styles)(Board)