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
        alignItems: 'center',
        fontSize: '6vh',
        cursor: 'pointer',
    },
    backCheckbox: {
        postion: 'absolute',
        bottom: 0,
        left: 0,
    },
    backTitleText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    }
})

class Tile extends Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    increaseCardNum = () => {

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
                        <span className={classes.frontNumText}>23</span>
                    </div>
                </FrontSide>
                <BackSide className={classes.tile}>
                    <span className={classes.backTitleText}>Trip for 2 to Walmart in Council Bluffs</span>
                    <br />
                    <input type="checkbox" className={classes.backCheckbox}></input>
                </BackSide>
            </Flippy>
        )
    }
}

export default withStyles(styles)(Tile)