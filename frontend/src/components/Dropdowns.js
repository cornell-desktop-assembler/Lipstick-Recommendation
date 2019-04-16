import React, { Component } from 'react';
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Dropdowns extends Component {

    buttonColors = ['primary', 'warning', 'info', 'danger'];
    titles = ["Skin Tone: "+ this.props.skinTone, "Skin Type: "+ this.props.skinType, "Hair Color: "+ this.props.hairColor, "Eye Color: "+ this.props.eyeColor];
    callbacks = [this.props.onChangeSkinTone, this.props.onChangeSkinType, this.props.onChangeHairColor, this.props.onChangeEyeColor];
    indices = [0, 1, 2, 3];

    render() {
        return (
            <div class="dropdown-group">
                <ButtonGroup size="lg" justified>
                    {/*{this.indices.map(i => (*/}
                    {/*    <Dropdown>*/}
                    {/*        <Dropdown.Toggle variant={this.buttonColors[i]} id="dropdown-basic">*/}
                    {/*            {this.titles[i]}*/}
                    {/*        </Dropdown.Toggle>*/}
                    {/*        <Dropdown.Menu flip={false} alignRight>*/}
                    {/*            <Dropdown.Item eventKey="N/A" onSelect={this.callbacks[i]}>N/A</Dropdown.Item>*/}
                    {/*            <Dropdown.Divider />*/}
                    {/*            {this.props.options[i].map(option => (*/}
                    {/*                <Dropdown.Item eventKey={option} onSelect={this.callbacks[i]}>{option}</Dropdown.Item>*/}
                    {/*            ))}*/}
                    {/*        </Dropdown.Menu>*/}
                    {/*    </Dropdown>*/}
                    {/*))}*/}

                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Skin Tone: {this.props.skinTone}
                        </Dropdown.Toggle>
                        <Dropdown.Menu flip={false} alignRight>
                            <Dropdown.Item eventKey="N/A" onSelect={this.props.onChangeSkinTone}>N/A</Dropdown.Item>
                            <Dropdown.Divider />
                            {this.props.options[0].map(option => (
                                <Dropdown.Item eventKey={option} onSelect={this.props.onChangeSkinTone}>{option}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            Skin Type: {this.props.skinType}
                        </Dropdown.Toggle>
                        <Dropdown.Menu flip={false} alignRight>
                            <Dropdown.Item eventKey="N/A" onSelect={this.props.onChangeSkinType}>N/A</Dropdown.Item>
                            <Dropdown.Divider />
                            {this.props.options[1].map(option => (
                                <Dropdown.Item eventKey={option} onSelect={this.props.onChangeSkinType}>{option}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            Hair Color: {this.props.hairColor}
                        </Dropdown.Toggle>
                        <Dropdown.Menu flip={false} alignRight>
                            <Dropdown.Item eventKey="N/A" onSelect={this.props.onChangeHairColor}>N/A</Dropdown.Item>
                            <Dropdown.Divider />
                            {this.props.options[2].map(option => (
                                <Dropdown.Item eventKey={option} onSelect={this.props.onChangeHairColor}>{option}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                            Eye Color: {this.props.eyeColor}
                        </Dropdown.Toggle>
                        <Dropdown.Menu flip={false} alignRight>
                            <Dropdown.Item eventKey="N/A" onSelect={this.props.onChangeEyeColor}>N/A</Dropdown.Item>
                            <Dropdown.Divider />
                            {this.props.options[3].map(option => (
                                <Dropdown.Item eventKey={option} onSelect={this.props.onChangeEyeColor}>{option}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonGroup>
            </div>
        );
    }
}

export default Dropdowns;