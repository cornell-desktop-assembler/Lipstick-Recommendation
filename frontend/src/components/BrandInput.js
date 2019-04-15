import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class BrandInput extends Component {

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="string"
                                      value={this.props.data}
                                      onChange={this.props.onChange}
                                      placeholder="Brand(s)" />
                        <Form.Text className="text" size="lg">
                            Enter this field if you have a strong preference
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default BrandInput