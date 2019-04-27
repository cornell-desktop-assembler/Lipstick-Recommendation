import React, { Component } from 'react'
import { SketchPicker } from 'react-color'
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import '../css/App.css'

class ColorInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'FFFFFF',
            show: false
        };
        this.attachRef = target => this.setState({ target });
        this.resetColor = this.resetColor.bind(this);
    }

    handleChangeComplete = (color) => {
        this.setState({ color: color.hex },
            this.props.onChange(color));
    };

    resetColor = () => {
        this.setState({
            color: 'FFFFFF'
        })
    };

    render() {
        const { show, target } = this.state;
        return (
            <div className="color-input">
                <Button
                    ref={this.attachRef}
                    onClick={() => this.setState({ show: !show })}
                    variant={'light'}
                >
                    Desired color (optional)
                    {this.state.color === 'FFFFFF' ?
                        <div className="color-example transparent"/> :
                    <div className="color-example" style={{background: this.state.color}}/>}
                </Button>
                <Overlay target={target} show={show} placement="right">
                    {props => (
                        <Tooltip id="overlay-example" {...props}>
                            <SketchPicker color={this.state.color}
                                          onChangeComplete={ this.handleChangeComplete }/>
                        </Tooltip>
                    )}
                </Overlay>
            </div>
        )
    }
}

export default ColorInput