import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../css/output.css'

class OutputContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDummy: false
        }
    }

    showDummy() {
        this.setState({
            showDummy: !this.state.showDummy
        })
    }

    createArray(length) {
        let arr = [];
        for (let i = 0; i < length; i = i+4) {
            let sub_arr = [];
            for (let j = 0; j < 4; j++) {
                if (i+j < length)
                    sub_arr.push(i+j)
            }
            arr.push(sub_arr)
        }
        console.log(arr)
        return arr;
    }

    render() {
        return (
            <div>
                { this.props.showOutput ?
                <div className="output-parent">
                    <Container>
                        <Row>
                            <Col>
                                <div className='dummy'>
                                    {this.createArray(this.props.data.length).map(item => (
                                        <CardDeck>
                                            {item.map(index => (
                                            <Card style={{ width: '23rem' }} key={this.props.data[index]["rank"]}>
                                                <Card.Header>
                                                    <div className="text-muted">
                                                            {this.props.data[index]["rank"] === '1' ? <img src={require('../images/crown.png')} className="crown"/> : null}
                                                        {/*<div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>*/}
                                                            No. {this.props.data[index]["rank"]}
                                                        {this.props.data[index]["rank"] === '1' ? <img src={require('../images/crown.png')} className="crown"/> : null}
                                                    </div>
                                                </Card.Header>
                                                <Card.Img variant="top" src={this.props.data[index]["img_url"]} />
                                                <Card.Body>
                                                    <Card.Title>{this.props.data[index]["brand"]}</Card.Title>
                                                    <Card.Subtitle>{this.props.data[index]["name"]}</Card.Subtitle>
                                                </Card.Body>
                                                <ListGroup className="list-group-flush">
                                                    <ListGroupItem key="score">Score: {this.props.data[index][""]}</ListGroupItem>
                                                    <ListGroupItem key="keyword">Keywords: {this.props.data[index]["keywords"]}</ListGroupItem>
                                                    <ListGroupItem key="price">Price: {this.props.data[index]["price"]}</ListGroupItem>
                                                    <ListGroupItem key="color">Color: {this.props.data[index]["code"]}</ListGroupItem>
                                                </ListGroup>
                                                <Card.Body>
                                                    <Card.Link href={index["url"]}>Product Link on Sephora.com</Card.Link>
                                                </Card.Body>
                                            </Card>
                                            ))}
                                        </CardDeck>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <button onClick={this.props.returnToSearch} className="return" title="Back To Search">
                    </button>
                </div>
                    : null}
            </div>
        )
    }
}

export default OutputContainer
