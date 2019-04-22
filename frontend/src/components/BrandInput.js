import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
// import AutoCompleteOptions from '../data/AutoCompleteOptions.js'

class BrandInput extends Component {

    // brands = AutoCompleteOptions.returnBrands();

    render() {
        return (
            <div>
                <Form>
                    <Typeahead
                        id="brands"
                        maxResults={10}
                        value={this.props.data}
                        labelKey="brands"
                        multiple={true}
                        onChange={this.props.onChange}
                        options={['Dior',
                            'INC.redible',
                            'lilah b.',
                            'KOSAS',
                            'Marc Jacobs Beauty',
                            'Grande Cosmetics',
                            'Anastasia Beverly Hills',
                            'Natasha Denona',
                            'Bobbi Brown',
                            'Christian Louboutin',
                            'Winky Lux',
                            'BECCA',
                            'bareMinerals',
                            'Buxom',
                            'Bite Beauty',
                            'trèStiQue',
                            'Wander Beauty',
                            'SEPHORA COLLECTION',
                            'ILIA',
                            'Too Faced',
                            'Kat Von D',
                            'rms beauty',
                            'Shiseido',
                            'Laura Mercier',
                            'FENTY BEAUTY by Rihanna',
                            'Black Up',
                            'KEVYN AUCOIN',
                            'Givenchy',
                            'LAWLESS',
                            'NARS',
                            'STELLAR',
                            'HUDA BEAUTY',
                            'Jouer Cosmetics',
                            'DOMINIQUE COSMETICS',
                            'Touch In Sol',
                            'Ciaté London',
                            'CLINIQUE',
                            'Perricone MD',
                            'MILK MAKEUP',
                            'TOM FORD',
                            'stila',
                            'Benefit Cosmetics',
                            'Charlotte Tilbury',
                            'Hourglass',
                            'MAKE UP FOR EVER',
                            'Urban Decay',
                            'Pretty Vulgar',
                            'tarte',
                            'PAT McGRATH LABS',
                            'LANEIGE',
                            'Kaja',
                            "Kiehl's Since 1851",
                            'Lancôme',
                            'Yves Saint Laurent',
                            'NUDESTIX',
                            'Smashbox',
                            'Giorgio Armani Beauty',
                            'surratt beauty',
                            'Guerlain']}
                        placeholder="Brand(s)"
                    />
                    <Form.Group>
                        <Form.Text className="text" size="lg">
                            &nbsp;
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default BrandInput