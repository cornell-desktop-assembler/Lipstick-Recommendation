import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdowns from './Dropdowns.js'
import CharacteristicInput from './CharacteristicInput.js'
import ColorInput from './ColorInput.js'
import BrandInput from './BrandInput.js'
import '../css/App.css'
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

class IndexContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characteristicInput: [],
            brandInput: [],
            skinTone: 'N/A',
            skinType: 'N/A',
            hairColor: 'N/A',
            eyeColor: 'N/A',
            desiredColor: null,
            submitDisabled: true,
            submitColor: 'light',
            dropDownValidity: ["secondary", "secondary", "secondary", "secondary"],
            k: "12"
        };
        this.handleChangeCharacteristicInput = this.handleChangeCharacteristicInput.bind(this);
        this.handleChangeBrandInput = this.handleChangeBrandInput.bind(this);
        this.handleChangeSkinTone = this.handleChangeSkinTone.bind(this);
        this.handleChangeSkinType = this.handleChangeSkinType.bind(this);
        this.handleChangeHairColor = this.handleChangeHairColor.bind(this);
        this.handleChangeEyeColor = this.handleChangeEyeColor.bind(this);
        this.handleDesiredColor = this.handleDesiredColor.bind(this);
        this.handleChangeK = this.handleChangeK.bind(this);

        this.options = [['Dark', 'Light', 'Ebony', 'Deep', 'Medium', 'Porcelain', 'Fair', 'Olive', 'Tan'],
            ['Dry', 'Normal', 'Oily', 'Combination'],
            ['Gray', 'Auburn', 'Blonde', 'Black', 'Red', 'Brunette'],
            ['Brown', 'Green', 'Blue', 'Gray', 'Hazel']]
    }

    checkViability() {
        let newValidity = [];
        newValidity[0] = this.state.skinTone === 'N/A'? "secondary" : "danger";
        newValidity[1] = this.state.skinType === 'N/A'? "secondary" : "danger";
        newValidity[2] = this.state.hairColor === 'N/A'? "secondary" : "danger";
        newValidity[3] = this.state.eyeColor === 'N/A'? "secondary" : "danger";

        let viable = !(this.state.characteristicInput === '');
        // let viable = true;
        this.setState({
            submitDisabled: !viable,
            submitColor: viable? 'light' : 'light',
            dropDownValidity: newValidity
        });

        // console.log(this.state);
    }

    handleChangeCharacteristicInput(arrays) {
        this.setState({
            characteristicInput: arrays
        }, this.checkViability);
    }

    handleChangeBrandInput(arrays) {
        this.setState({
            brandInput: arrays
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

    handleDesiredColor(color) {
        this.setState({
            desiredColor: color.hex
        }, this.checkViability);
    }

    handleChangeK(eventKey) {
        this.setState({
            k: eventKey
        }, this.checkViability);
    }

    onFormSubmit = e => {
        e.preventDefault();

        if (!this.state.submitDisabled)
            this.props.onClick(this.state)
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
                    <Col>
                        <div className='page-select'>
                            <InputGroup>
                                <InputGroup.Prepend variant='light'>
                                    <InputGroup.Text>Show at most</InputGroup.Text>
                                </InputGroup.Prepend>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='light' id="dropdown-basic" className='dropdown-1'>
                                            {this.state.k}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu flip={false}>
                                            <Dropdown.Item eventKey="1" onSelect={this.handleChangeK}>1</Dropdown.Item>
                                            <Dropdown.Item eventKey="4" onSelect={this.handleChangeK}>5</Dropdown.Item>
                                            <Dropdown.Item eventKey="12" onSelect={this.handleChangeK}>10</Dropdown.Item>
                                            <Dropdown.Item eventKey="20" onSelect={this.handleChangeK}>20</Dropdown.Item>
                                            <Dropdown.Item eventKey="50" onSelect={this.handleChangeK}>50</Dropdown.Item>
                                            <Dropdown.Item eventKey="100" onSelect={this.handleChangeK}>100</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                <InputGroup.Append>
                                    <InputGroup.Text>results</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                    </Col>
                    <Col>
                            <ColorInput
                                desiredColor = {this.state.desiredColor}
                                onChange={this.handleDesiredColor}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Dropdowns
                            validity={this.state.dropDownValidity}
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
                <div style={{marginTop: 3.5 + 'em', marginBottom: 2 + 'em'}}>
                    <Row>
                        <Col>
                            <Button
                                type="submit"
                                disabled={this.state.submitDisabled}
                                variant={this.state.submitColor}
                                size="lg"
                            >
                                Find your match!</Button>
                        </Col>
                    </Row>
                </div>


                </Form>
            </Container>
        );
    }
}

export default IndexContainer;