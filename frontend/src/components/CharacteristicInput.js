import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

class CharacteristicInput extends Component {

    render() {
        return (
            <div>
                <Form>
                    <Typeahead
                        value={this.props.data}
                        labelKey="keywords"
                        multiple={true}
                        onChange={this.props.onChange}
                        options={['apple','banana','orange','pineapple','watermelon','kiwi','strawberry','melon','grape','grapefruit']}
                        placeholder="Keyword(s)"
                    />
                    <Form.Group>
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