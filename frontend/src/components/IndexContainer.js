import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdowns from './Dropdowns.js'
import CharacteristicInput from './CharacteristicInput.js'
import BrandInput from './BrandInput.js'
import '../App.css'
import Button from "react-bootstrap/Button";

class IndexContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characteristicInput: '',
            brandInput: '',
            skinTone: 'Not Selected',
            skinType: 'Not Selected',
            eyeColor: 'Not Selected',
            submitDisabled: true,
            submitColor: 'light'
        };
        this.handleChangeCharacteristicInput = this.handleChangeCharacteristicInput.bind(this);
        this.handleChangeBrandInput = this.handleChangeBrandInput.bind(this);
        this.handleChangeSkinTone = this.handleChangeSkinTone.bind(this);
        this.handleChangeSkinType = this.handleChangeSkinType.bind(this);
        this.handleChangeEyeColor = this.handleChangeEyeColor.bind(this);
        this.onClick = this.handleSubmit.bind(this);

        this.options = [['Dark', 'Light'],
            ['Dry', 'Moderate', 'Oily'],
            ['Black', 'Brown', 'Green', 'Blue', 'Grey', 'White']]
    }

    checkViability() {
        let viable = !(this.state.characteristicInput === '' &&
            this.state.brandInput === '' &&
            this.state.skinTone === 'Not Selected' &&
            this.state.skinType === 'Not Selected' &&
            this.state.eyeColor === 'Not Selected');
        this.setState({
            submitDisabled: !viable,
            submitColor: viable? 'success' : 'light'
        });
    }

    handleChangeCharacteristicInput(event) {
        this.setState({
            characteristicInput: event.target.value
        }, this.checkViability);
    }

    handleChangeBrandInput(event) {
        this.setState({
            brandInput: event.target.value
        }, this.checkViability);
    }

    handleChangeSkinTone(eventKey) {
        this.setState({
            skinTone: eventKey
        }, this.checkViability);
    }

    handleChangeSkinType(eventKey) {
        this.setState({
            skinType: eventKey
        }, this.checkViability);
    }

    handleChangeEyeColor(eventKey) {
        this.setState({
            eyeColor: eventKey
        }, this.checkViability);
    }

    handleSubmit() {
        let characteristicInputs = this.state.characteristicInput.replace(', ', ' ')
            .replace(',', ' ')
            .split(' ');
        let brandInputs = this.state.brandInput.replace(', ', ' ')
            .replace(',', ' ')
            .split(' ');

        //TODO: connect to backend
        alert('Your query is: \n' +
              'keywords: ' + characteristicInputs + '\n' +
              'brand: ' + brandInputs + '\n' +
              'skin tone: ' + this.state.skinTone + '\n' +
              'skin type: ' + this.state.skinType + '\n' +
              'eye color: ' + this.state.eyeColor)
    }

    render() {
        return (
            <Container >
                <Row>
                    <Col>
                        <CharacteristicInput
                            data={this.state.characteristicInput}
                            onChange={this.handleChangeCharacteristicInput}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BrandInput
                            data={this.state.brandInput}
                            onChange={this.handleChangeBrandInput}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Dropdowns
                            options={this.options}
                            skinTone={this.state.skinTone}
                            skinType={this.state.skinType}
                            eyeColor={this.state.eyeColor}
                            onChangeSkinTone={this.handleChangeSkinTone}
                            onChangeSkinType={this.handleChangeSkinType}
                            onChangeEyeColor={this.handleChangeEyeColor}
                        />
                    </Col>
                </Row>
                <div style={{marginTop: 4 + 'em'}}>
                    <Row>
                        <Col>
                            <Button
                                disabled={this.state.submitDisabled}
                                variant={this.state.submitColor}
                                size="lg"
                                onClick={this.onClick}
                            >Find your match!</Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default IndexContainer;