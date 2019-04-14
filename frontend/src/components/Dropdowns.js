import React, { Component } from 'react';
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Dropdowns extends Component {

    render() {
        return (
            <div class="dropdown-group">
                <ButtonGroup size="lg" justified>
                    <DropdownButton
                        block
                        as={ButtonGroup}
                        variant={'primary'}
                        title={"Skin Tone: " + this.props.skinTone}
                        id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="Not Selected" onSelect={this.props.onChangeSkinTone}>Not Selected</Dropdown.Item>
                        <Dropdown.Divider />
                        {this.props.options[0].map(option => (
                            <Dropdown.Item eventKey={option} onSelect={this.props.onChangeSkinTone}>{option}</Dropdown.Item>
                        ))}
                    </DropdownButton>
                    <DropdownButton
                        block
                        as={ButtonGroup}
                        variant={'warning'}
                        title={"Skin Type: " + this.props.skinType}
                        id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="Not Selected" onSelect={this.props.onChangeSkinType}>Not Selected</Dropdown.Item>
                        <Dropdown.Divider />
                        {this.props.options[1].map(option => (
                            <Dropdown.Item eventKey={option} onSelect={this.props.onChangeSkinType}>{option}</Dropdown.Item>
                        ))}
                    </DropdownButton>
                    <DropdownButton
                        as={ButtonGroup}
                        variant={'danger'}
                        title={"Eye Color: " + this.props.eyeColor}
                        id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="Not Selected" onSelect={this.props.onChangeEyeColor}>Not Selected</Dropdown.Item>
                        <Dropdown.Divider />
                        {this.props.options[2].map(option => (
                            <Dropdown.Item eventKey={option} onSelect={this.props.onChangeEyeColor}>{option}</Dropdown.Item>
                        ))}
                    </DropdownButton>
                </ButtonGroup>
            </div>
        );
    }
}

export default Dropdowns;