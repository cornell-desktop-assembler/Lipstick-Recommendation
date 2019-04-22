import React, { Component } from 'react';
import IndexContainer from './components/IndexContainer.js'
import OutputContainer from './components/OutputContainer.js'
import scrollToComponent from 'react-scroll-to-component'
import axios from 'axios'
import './css/App.css'
import Spinner from "react-bootstrap/Spinner";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showOutput: false,
            names: [],
            scores: [],
            response: [],
            showSpinner: false
        };
        this.dummyData = [
            {"rank": "1",
                "pid": "P1234567",
                "sku": "0987654",
                "brand": "YVES SAINT LAURENT",
                "name": "Rouge Pur Couture The Slim Matte Lipstick",
                "code": "4 Fuchsia Excentrique - soft raspberry",
                "keywords": ["super-slim"],
                "price": "$20.00",
                "url": "https://www.sephora.com/product/rouge-pur-couture-matte-slim-lipstick-P436506?icid2=products%20grid:p436506:product",
                "img_url": "https://www.sephora.com/productimages/sku/s2129922-main-zoom.jpg",
                "ingredient_results": [],
                "scores": {"color": 3.8, "weighted_rating": 4.9, "skinType_rating": 4.2, "skinTone_rating": 4.5, "hairColor_rating": 4.7,
                    "eyeColor_rating": 4.9, "keywords": 4.5, "ingredients": 5.0}},
            {"rank": "2",
                "pid": "P1234567",
                "sku": "0987654",
                "brand": "PAT MCGRATH LABS",
                "name": "MatteTrance™ Lipstick",
                "code": "Omi 107 - mid-tone rose",
                "keywords": ["luxurious"],
                "price": "$39.00",
                "url": "https://www.sephora.com/product/mattetrance-lipstick-P421813?icid2=products%20grid:p421813:product",
                "img_url": "https://www.sephora.com/productimages/sku/s2012748-main-zoom.jpg",
                "ingredient_results": [],
                "scores": {"color": 3.8, "weighted_rating": 4.9, "skinType_rating": 4.2, "skinTone_rating": 4.5, "hairColor_rating": 4.7,
                    "eyeColor_rating": 4.9, "keywords": 4.5, "ingredients": 5.0}},
            {"rank": "3",
                "pid": "P1234567",
                "sku": "0987654",
                "brand": "KAT VON D",
                "name": "Everlasting Liquid Lipstick",
                "code": "Lovecraft - mauve pink nude",
                "keywords": ["long-wear"],
                "price": "$38.00",
                "url": "https://www.sephora.com/product/everlasting-love-liquid-lipstick-P384954?icid2=products%20grid:p384954:product",
                "img_url": "https://www.sephora.com/productimages/sku/s1890623-main-zoom.jpg",
                "ingredient_results": [],
                "scores": {"color": 3.8, "weighted_rating": 4.9, "skinType_rating": 4.2, "skinTone_rating": 4.5, "hairColor_rating": 4.7,
                    "eyeColor_rating": 4.9, "keywords": 4.5, "ingredients": 5.0}},
            {"rank": "4",
                "pid": "P1234567",
                "sku": "0987654",
                "brand": "NARS",
                "name": "Velvet Matte Lipstick Pencil",
                "code": "Do Me Baby - chestnut rose",
                "keywords": ["cult-favorite"],
                "price": "$27.00",
                "url": "https://www.sephora.com/product/velvet-matte-lip-pencil-P78834?icid2=products%20grid:p78834:product",
                "img_url": "https://www.sephora.com/productimages/sku/s1900083-main-zoom.jpg",
                "ingredient_results": [],
                "scores": {"color": 3.8, "weighted_rating": 4.9, "skinType_rating": 4.2, "skinTone_rating": 4.5, "hairColor_rating": 4.7,
                    "eyeColor_rating": 4.9, "keywords": 4.5, "ingredients": 5.0}}];
        this.submitQuery = this.submitQuery.bind(this);
        this.returnToSearch = this.returnToSearch.bind(this);
        this.sendToBackend = this.sendToBackend.bind(this);
        this.sendToBackend2 = this.sendToBackend2.bind(this);
    }

    submitQuery(query) {
        // alert(query);
        this.sendToBackend(query);
        // this.printResponse(query)
    }

    sendToBackend(query) {
        let rgb = this.hexToRgb(query.desiredColor);
        let params = {
            keywords: query.characteristicInput,
            brands: query.brandInput === [] ? [] : query.brandInput,
            skinTone: query.skinTone === 'N/A' ? null : query.skinTone,
            skinType: query.skinType === 'N/A' ? null : query.skinType,
            eyeColor: query.eyeColor === 'N/A' ? null : query.eyeColor,
            hairColor: query.hairColor === 'N/A' ? null : query.hairColor,
            r: rgb ? rgb.r : null,
            g: rgb ? rgb.g : null,
            b: rgb ? rgb.b : null,
            k: query.k,
            ingredient_kws: []
        };
        console.log(params);
        this.setState({
            showSpinner: true
        }, (params) => this.printResponse(params));

        // this.setState({
        //     showSpinner: true
        // })
        // this.printResponse()
    }

    sendToBackend2(query) {
        axios.post('/search/', query)
            .then(response => this.setState(
                {response: response['data']}, () => this.printResponse()
            ).catch(function (error) {
                console.log(error);
            }));
    }

    printResponse(params) {
        this.setState(
            {
                showOutput: true,
                // showSpinner: false
            }, () => this.scrollToOutput()
          )
    }

    hexToRgb(hex) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }


    scrollToOutput() {
        scrollToComponent(this.output, { align: 'top',  duration: 300});
    }

    returnToSearch() {
        scrollToComponent(this.top, { duration: 300});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                </header>
                <body>
                    <a href="https://desktop-assembler.herokuapp.com/">1st Prototype</a>
                    <div className="top lip-background cd-fixed-bg cd-fixed-bg--1" ref={(section) => { this.top = section; }}>
                        <div className="lip-opacity">
                            <div className="lip-container" style={{marginTop: 3.5 + 'em'}}>
                                <img src={require('./images/title.png')} className="title"/>
                                <IndexContainer onClick={this.submitQuery}/>
                                { this.state.showSpinner ?
                                    <div style={{marginTop: 1 + 'em'}} className='spinner'>
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            role="status"
                                            size="lg"
                                            aria-hidden="true"
                                        />
                                        &nbsp; Loading...

                                    </div>
                                    : null}
                            </div>
                        </div>
                    </div>
                    <div>
                        <OutputContainer className="output" ref={(section) => { this.output = section; }}
                            showOutput = {this.state.showOutput}
                            returnToSearch = {this.returnToSearch}
                             data = {this.dummyData}
                            // data = {this.state.response}
                        />
                    </div>
                </body>
            </div>
        );
    }
}

export default App;
