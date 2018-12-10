import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import Flippy, {FrontSide, BackSide} from 'react-flippy'
import Help from '@material-ui/icons/Help'

const styles = theme => ({
    tile: {
        width: 125,
        height: 125,
        border: '3px solid black',
        margin: '.25em',
        padding: 0,
        backgroundColor: 'white',
        borderRadius: '5px',
    },
    qMark: {
        position: 'absolute',
        left: '10px',
        top: '10px',
        height: 100,
        width: 100,
        color: '#008ec3'
    }
})

class Tile extends Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };
    
    testClass = () => {
        alert('go')
    }
    
    render() {
        
        const { classes } = this.props;
        
        return (
            <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            >
                <FrontSide className={classes.tile}>
                    <Help className={classes.qMark} />
                </FrontSide>
                <BackSide className={classes.tile}>
                    {this.props.children}
                </BackSide>
            </Flippy>
        )
    }
}

export default withStyles(styles)(Tile)