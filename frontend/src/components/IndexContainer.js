import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdowns from './Dropdowns.js'
import CharacteristicInput from './CharacteristicInput.js'
import ColorInput from './ColorInput.js'
import BrandInput from './BrandInput.js'
import '../css/App.css'
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

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
            desiredColor: 'FFFFFF',
            submitDisabled: true,
            submitColor: 'light',
            dropDownValidity: ["secondary", "secondary", "secondary", "secondary"],
            showPopover: false,
            showPopoverPrevious: false,
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
        this.resetSearch = this.resetSearch.bind(this);
        this.disableClear = this.disableClear.bind(this);

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

        // console.log(this.state);
        let viable = this.state.characteristicInput !== [] && this.state.characteristicInput.length !== 0;
        // let viable = true;
        this.setState({
            submitDisabled: !viable,
            submitColor: viable? 'primary' : 'light',
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

    resetSearch() {
        this._CharacteristicInput._typeahead.getInstance().clear();
        this._BrandInput._typeahead.getInstance().clear();
        this._ColorInput.resetColor();
            // .resetColor();
        this.setState({
            characteristicInput: [],
            brandInput: [],
            skinTone: 'N/A',
            skinType: 'N/A',
            hairColor: 'N/A',
            eyeColor: 'N/A',
            desiredColor: 'FFFFFF',
            submitDisabled: true,
            submitColor: 'light',
            dropDownValidity: ["secondary", "secondary", "secondary", "secondary"],
            k: "12"
        }, this.checkViability);
    }

    disableClear() {
        this.setState({
            showPopover: false
        }, this.resetSearch)
    }

    onFormSubmit = e => {
        e.preventDefault();

        if (!this.state.submitDisabled)
            this.props.onClick(this.state)
    };

    createPopover = () => {
        return (
            <Popover id="popover-basic">
                <Button onClick={this.resetSearch} size="sm" variant="light">Confirm</Button>
            </Popover>
        )
    };

    show1st() {
        return (
            window.open(
                'https://desktop-assembler.herokuapp.com/',
                '_blank' // <- This is what makes it open in a new window.
            )
        )
    }

    show2nd() {
        return (
            window.open(
                'https://lipsticker-proto2.herokuapp.com/',
                '_blank' // <- This is what makes it open in a new window.
            )
        )
    }

    createPopoverPrevious = () => {
        return (
            <Popover id="popover-basic">
                <Button onClick={this.show1st} size="sm" variant="light">Prototype 1</Button>
                <Button onClick={this.show2nd} size="sm" variant="light">Prototype 2</Button>
            </Popover>
        )
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
                            ref={(ref) => this._CharacteristicInput = ref}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BrandInput
                            data={this.state.brandInput}
                            onChange={this.handleChangeBrandInput}
                            ref={(ref) => this._BrandInput = ref}
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
                                            <Dropdown.Item eventKey="4" onSelect={this.handleChangeK}>4</Dropdown.Item>
                                            <Dropdown.Item eventKey="12" onSelect={this.handleChangeK}>12</Dropdown.Item>
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
                                onChange={this.handleDesiredColor}
                                ref={(ref) => this._ColorInput = ref}/>
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
                            <OverlayTrigger trigger="click"
                                            placement="bottom"
                                            overlay={this.createPopoverPrevious()}
                                            show = {this.state.showPopoverPrevious}>
                                <Button
                                    variant="light"
                                    size="sm"
                                >
                                    Switch Version</Button>
                            </OverlayTrigger>
                        </Col>
                        <Col>
                            <Button
                                type="submit"
                                disabled={this.state.submitDisabled}
                                variant={this.state.submitColor}
                                size="lg"
                            >
                                Find your match!</Button></Col>
                        <Col>
                            <OverlayTrigger trigger="click"
                                            placement="bottom"
                                            overlay={this.createPopover()}
                                            show = {this.state.showPopover}>
                                <Button
                                    variant="light"
                                    size="sm"
                                >
                                    Reset Search</Button>
                            </OverlayTrigger>
                        </Col>
                    </Row>
                </div>


                </Form>
            </Container>
        );
    }
}

export default IndexContainer;