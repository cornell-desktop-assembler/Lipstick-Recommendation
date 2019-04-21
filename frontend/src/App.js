import React, { Component } from 'react';
import IndexContainer from './components/IndexContainer.js'
import OutputContainer from './components/OutputContainer.js'
import scrollToComponent from 'react-scroll-to-component'
import axios from 'axios'
import './css/App.css'

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
        this.submitQuery = this.submitQuery.bind(this);
        this.returnToSearch = this.returnToSearch.bind(this);
        this.sendToBackend = this.sendToBackend.bind(this);
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
            r: rgb.r,
            g: rgb.g,
            b: rgb.b,
            ingredient_kws: []
        };
        console.log(params)
        // axios.get('/search/?keyword='+query)
        //     .then(response => this.setState(
        //         {response: response['data']}, () => this.printResponse()
        //       )
        //     );
        // this.setState({
        //     showSpinner: true
        // })
        this.printResponse()
    }

    printResponse(query) {
        this.setState(
            {
                showOutput: true,
                showSpinner: true
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
                    <div className="top lip-background cd-fixed-bg cd-fixed-bg--1" ref={(section) => { this.top = section; }}>
                        <div className="lip-opacity">
                            <div className="lip-container" style={{marginTop: 3.5 + 'em'}}>
                                <img src={require('./images/title.png')} className="title"/>
                                {/*<h1>LIPSTICKER</h1>*/}
                                <IndexContainer onClick={this.submitQuery}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <OutputContainer className="output" ref={(section) => { this.output = section; }}
                            showOutput = {this.state.showOutput}
                            returnToSearch = {this.returnToSearch}
                            response = {this.state.response}
                            showSpinner = {this.state.showSpinner}/>
                    </div>
                </body>
            </div>
        );
    }
}

export default App;
