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

    render() {
        return (
            <div>
                { this.props.showOutput ?
                <div className="output-parent">
                    {/*<Container>*/}
                        {/*<Row>*/}
                        {/*    <Col>*/}
                        {/*        <Container>*/}
                        {/*        {this.props.response.map(listing => (*/}
                        {/*            <Row>*/}
                        {/*                <Card style={{ width: '100rem' }}>*/}
                        {/*                    <Card.Body>*/}
                        {/*                        <Card.Title>Score: {listing['score']}; SKU: {listing['name']}</Card.Title>*/}
                        {/*                    </Card.Body>*/}
                        {/*                </Card>*/}
                        {/*            </Row>*/}
                        {/*        ))}*/}
                        {/*        </Container>*/}
                        {/*    </Col>*/}
                        {/*    /!*<Col>*!/*/}
                        {/*    /!*    <Button onClick={() => this.showDummy}>dummy output</Button>*!/*/}
                        {/*    /!*</Col>*!/*/}
                        {/*</Row>*/}

                        {/*<Row>*/}
                            <Container>
                                <Row>
                                    <Col>
                                        <div className='dummy'>
                                            <CardDeck>
                                                //
                                            {this.props.data.map(item => (
                                                <Card style={{ width: '23rem' }} key={item["rank"]}>
                                                    <Card.Header>
                                                        <div className="text-muted">
                                                                {item["rank"] === '1' ? <img src={require('../images/crown.png')} className="crown"/> : null}
                                                            {/*<div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>*/}
                                                                No. {item["rank"]}
                                                            {item["rank"] === '1' ? <img src={require('../images/crown.png')} className="crown"/> : null}
                                                        </div>
                                                    </Card.Header>
                                                    <Card.Img variant="top" src={item["img_url"]} />
                                                    <Card.Body>
                                                        <Card.Title>{item["brand"]}</Card.Title>
                                                        <Card.Subtitle>{item["name"]}</Card.Subtitle>
                                                    </Card.Body>
                                                    <ListGroup className="list-group-flush">
                                                        <ListGroupItem key="score">Score: {item[""]}</ListGroupItem>
                                                        <ListGroupItem key="keyword">Keywords: {item["keywords"]}</ListGroupItem>
                                                        <ListGroupItem key="price">Price: {item["price"]}</ListGroupItem>
                                                        <ListGroupItem key="color">Color: {item["code"]}</ListGroupItem>
                                                    </ListGroup>
                                                    <Card.Body>
                                                        <Card.Link href={item["url"]}>Product Link on Sephora.com</Card.Link>
                                                    </Card.Body>
                                                </Card>
                                            ))}

                                            </CardDeck>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <button onClick={this.props.returnToSearch} className="return" title="Back To Search">
                            </button>
                    {/*    </Row>*/}

                    {/*</Container>*/}
                </div>
                    : null}
            </div>
        )
    }
}

export default OutputContainer
