import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Dropdowns from './Dropdowns.js'
import CharacteristicInput from './CharacteristicInput.js'
import BrandInput from './BrandInput.js'
import '../css/App.css'
import Button from "react-bootstrap/Button";

class IndexContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characteristicInput: '',
            brandInput: '',
            skinTone: 'N/A',
            skinType: 'N/A',
            hairColor: 'N/A',
            eyeColor: 'N/A',
            submitDisabled: true,
            submitColor: 'light'
        };
        this.handleChangeCharacteristicInput = this.handleChangeCharacteristicInput.bind(this);
        this.handleChangeBrandInput = this.handleChangeBrandInput.bind(this);
        this.handleChangeSkinTone = this.handleChangeSkinTone.bind(this);
        this.handleChangeSkinType = this.handleChangeSkinType.bind(this);
        this.handleChangeHairColor = this.handleChangeHairColor.bind(this);
        this.handleChangeEyeColor = this.handleChangeEyeColor.bind(this);
        this.onClickSubmit = this.handleSubmit.bind(this);

        this.options = [['Dark', 'Light', 'Ebony', 'Deep', 'Medium', 'Porcelain', 'Fair', 'Olive', 'Tan'],
            ['Dry', 'Normal', 'Oily', 'Combination'],
            ['Gray', 'Auburn', 'Blonde', 'Black', 'Black', 'Red', 'Brunette'],
            ['Brown', 'Green', 'Blue', 'Gray', 'Hazel']]
    }

    checkViability() {
        let viable = !(this.state.characteristicInput === '' &&
            this.state.skinTone === 'N/A' &&
            this.state.skinType === 'N/A' &&
            this.state.hairColor === 'N/A' &&
            this.state.eyeColor === 'N/A');
        this.setState({
            submitDisabled: !viable,
            submitColor: viable? 'light' : 'light'
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

    handleChangeHairColor(eventKey) {
        this.setState({
            hairColor: eventKey
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
        let query = 'Your query is: \n' +
              '-- Keywords: ' + characteristicInputs + '\n' +
              '-- Brand: ' + brandInputs + '\n' +
              '-- Skin tone: ' + this.state.skinTone + '\n' +
              '-- Skin type: ' + this.state.skinType + '\n' +
              '-- Hair color: ' + this.state.hairColor + '\n' +
              '-- Eye color: ' + this.state.eyeColor;
        this.props.onClick(query)
    }

    onFormSubmit = e => {
        e.preventDefault();
        let characteristicInputs = this.state.characteristicInput.replace(', ', ' ')
            .replace(',', ' ')
            .split(' ');
        let brandInputs = this.state.brandInput.replace(', ', ' ')
            .replace(',', ' ')
            .split(' ');

        //TODO: connect to backend
        let query = 'Your query is: \n' +
            '-- Keywords: ' + characteristicInputs + '\n' +
            '-- Brand: ' + brandInputs + '\n' +
            '-- Skin tone: ' + this.state.skinTone + '\n' +
            '-- Skin type: ' + this.state.skinType + '\n' +
            '-- Hair color: ' + this.state.hairColor + '\n' +
            '-- Eye color: ' + this.state.eyeColor;
        if (!this.state.submitDisabled)
            this.props.onClick(query)
    };

    render() {
        return (
            <Container>
                <Form onSubmit={this.onFormSubmit}>
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
                            hairColor={this.state.hairColor}
                            eyeColor={this.state.eyeColor}
                            onChangeSkinTone={this.handleChangeSkinTone}
                            onChangeSkinType={this.handleChangeSkinType}
                            onChangeHairColor={this.handleChangeHairColor}
                            onChangeEyeColor={this.handleChangeEyeColor}
                        />
                    </Col>
                </Row>
                <div style={{marginTop: 5.5 + 'em', marginBottom: 5.5 + 'em'}}>
                    <Row>
                        <Col>
                            <Button
                                type="submit"
                                disabled={this.state.submitDisabled}
                                variant={this.state.submitColor}
                                size="lg"
                                // onClick={this.onClickSubmit}
                            >Find your match!</Button>
                        </Col>
                    </Row>
                </div>
                </Form>
            </Container>
        );
    }
}

export default IndexContainer;