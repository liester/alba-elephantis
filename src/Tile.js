import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Flippy, {FrontSide, BackSide} from 'react-flippy'

const styles = theme => ({
    tile: {
        width: '12.5vh',
        height: '12.5vh',
        border: '3px solid black',
        margin: '.25em',
        padding: 0,
        backgroundColor: 'white',
        borderRadius: '5px',
    },
    frontNumBackground: {
        position: 'absolute',
        left: '.75vh',
        top: '.75vh',
        height: '10vh',
        width: '10vh',
        backgroundColor: '#008ec3',
        borderRadius: 250,
    },
    frontNumText: {
        display: 'flex',
        color: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: '7vh',
        cursor: 'pointer',
    },
    backCheckbox: {
        postion: 'absolute',
        bottom: 0,
        left: 0,
    },
})

class Tile extends Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };
    
    testClass = () => {
        alert('go')
    }

    stopFlippy = () => {
        Flippy.flipOnClick = false
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
                    <div className={classes.frontNumBackground}>
                        <span className={classes.frontNumText}>x</span>
                    </div>
                </FrontSide>
                <BackSide className={classes.tile}>
                    {this.props.children}
                    <br />
                    <input type="checkbox" className={classes.backCheckbox}></input>
                </BackSide>
            </Flippy>
        )
    }
}

export default withStyles(styles)(Tile)