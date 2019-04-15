import React, { Component } from 'react';
import IndexContainer from './components/IndexContainer.js'
import OutputContainer from './components/OutputContainer.js'
import scrollToComponent from 'react-scroll-to-component';
import './css/App.css'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showOutput: false
        };
        this.submitQuery = this.submitQuery.bind(this);
        this.returnToSearch = this.returnToSearch.bind(this);
    }

    submitQuery(query) {
        // alert(query);
        this.setState({
            showOutput: true
        }, this.scrollToOutput);
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
                                <img src={require('./images/title.png')} />
                                <IndexContainer onClick={this.submitQuery}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <OutputContainer className="output" ref={(section) => { this.output = section; }}
                            showOutput = {this.state.showOutput}
                            returnToSearch = {this.returnToSearch}/>
                    </div>
                </body>
            </div>
        );
    }
}

export default App;
