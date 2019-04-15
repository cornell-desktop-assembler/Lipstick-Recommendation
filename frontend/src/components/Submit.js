import React, { Component } from 'react';
import '../css/App.css'
import Button from "react-bootstrap/Button";

class Submit extends Component {
    render() {
        return (
            <Button
                disabled={this.props.submitDisabled}
                variant={this.props.submitColor}
                size="lg"
                onClick={this.props.onClick}
            >Find your match!</Button>
        )
    }
}

export default Submit