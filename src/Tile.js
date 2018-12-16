import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Flippy, {FrontSide, BackSide} from 'react-flippy'

const styles = theme => ({
  tile: {
    width: '15vh',
    height: '15vh',
    border: '3px solid black',
    margin: '.25em',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px'
  },
  frontNumBackground: {
    position: 'absolute',
    left: '1.9vh',
    top: '1.9vh',
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
  backTitleText: {
    display: 'flex',
    fontSize: '15px',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  flipButton: {
    width: '50%',
    bottom: '15px',
    alignSelf: 'center',
    height: '30%',
    position: 'absolute',
    marginLeft: '14px'
  }
});

class Tile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFlipped: false,
            item: {}
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
              <span className={classes.frontNumText}>{label}</span>
            </div>
          </FrontSide>
          <BackSide className={classes.tile}>
            <div className={classes.backTitleText}>
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