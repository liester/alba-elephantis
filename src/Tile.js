import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Flippy, {FrontSide, BackSide} from 'react-flippy'

const styles = theme => ({
  tile: {
    height: '120px',
    width: '120px',
    border: '3px solid black',
    margin: '.25em',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px'
  },
  tileRed: {
    height: '120px',
    width: '120px',
    border: '3px solid black',
    margin: '.25em',
    padding: '20px',
    background: 'radial-gradient(red,pink)',
    borderRadius: '10px'
  },
  frontNumBackground: {
    position: 'absolute',
    left: '7px',
    top: '7px',
    height: '100px',
    width: '100px',
    backgroundColor: '#0C1FA3',
    borderRadius: 250,
  },
  frontNumText: {
    textAlign: 'center',
    marginTop: '.25em',
    color: 'white',
    fontSize: '50px',
    cursor: 'pointer',
  },
  backTitleText: {
    display: 'flex',
    fontSize: '13px',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  flipButton: {
    width: '50%',
    bottom: '10px',
    alignSelf: 'center',
    height: '1.5em',
    position: 'absolute',
    left: '28px'
  },
  backTitleTextRed: {
    display: 'flex',
    fontSize: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

class Tile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFlipped: false,
            item: {},
            isStealCard: false
        }
    }

    static propTypes = {
        label: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    flipToBack = () => {
        let item = this.props.getRandomItem();
        console.log(`Got Item: ${JSON.stringify(item)}`)
        this.setState({
            isFlipped: true,
            item: item
        })
    };

    flipToFront = () => {
        console.log(`Returning index: ${this.state.item.index}`)
        this.props.returnItem(this.state.item.index);
        this.setState({
            isFlipped: false
        })
    };



    render() {

        const { classes, label } = this.props;

    return (
        <Flippy
            flipDirection="horizontal"
            isFlipped={this.state.isFlipped}
        >
          <FrontSide className={classes.tile} onClick={this.flipToBack}>
            <div className={classes.frontNumBackground}>
              <div className={classes.frontNumText}>{label}</div>
            </div>
          </FrontSide>
          <BackSide className={this.state.item.id === 99 ? classes.tileRed : classes.tile}>
            <div className={this.state.item.id === 99 ? classes.backTitleTextRed : classes.backTitleText}>
            {/* <div className={classes.backTitleText}> */}
            {this.state.item.title}
            </div>
            <br/>
            <br/>
            <input type="button" className={classes.flipButton}
                   onClick={() => this.flipToFront()} value="Flip Me"/>
          </BackSide>
        </Flippy>
    )
  }
}

export default withStyles(styles)(Tile)