import React, { Component } from 'react'
import { SketchPicker } from 'react-color'
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import '../css/App.css'

class ColorInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'FFFFFF',
            show: false
        };
        this.attachRef = target => this.setState({ target });
    }

    handleChangeComplete = (color) => {
        this.setState({ color: color.hex },
            this.props.onChange(color));
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
                <div className="colorExample" style={{background: this.state.color}}>

                </div>
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