import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class CharacteristicInput extends Component {

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="string"
                                      value={this.props.data}
                                      onChange={this.props.onChange}
                                      placeholder="Keyword(s)" />
                        <Form.Text className="text" size="lg">
                            Enter anything on your mind from product characteristics (like "moist") to use cases (like "interview")
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default CharacteristicInput