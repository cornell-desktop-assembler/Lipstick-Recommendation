import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../css/output.css'

class OutputContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDummy: false,
            scoreDetailIndex: new Array(this.props.data.length).fill(false)
        }
    }

    showDummy() {
        this.setState({
            showDummy: !this.state.showDummy
        })
    }

    static createArray(length) {
        let arr = [];
        for (let i = 0; i < length; i = i+4) {
            let sub_arr = [];
            for (let j = 0; j < 4; j++) {
                if (i+j < length)
                    sub_arr.push(i+j)
            }
            arr.push(sub_arr)
        }

        return arr;
    }

    showScoreDetail(index, show) {
        let newArray = this.state.scoreDetailIndex;
        if (this.props.initial) {
            newArray = newArray.fill(false)
        }
        newArray[index] = show;
        this.setState({
            scoreDetailIndex: newArray
        }, this.printState)
    }

    printState() {
        console.log(this.state);
        if (this.props.initial) {
            this.props.updateInitial()
        }
    }

    showSephora(value) {
        return (
            window.open(
                value,
                '_blank'
            )
        )
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
                                    {OutputContainer.createArray(this.props.data.length).map(item => (
                                        <CardDeck>
                                            {item.map(index => (
                                                !this.state.scoreDetailIndex[index] || this.props.initial?

                                                    <Card style={{ width: '23rem', height: '40rem'}} key={this.props.data[index]["rank"]}>
                                                        <Card.Header>
                                                            <div className="text-muted">
                                                                {index === 0 ? <img src={require('../images/crown.png')} className="crown"/> : null}
                                                                {/*<div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>*/}
                                                                No. {index+1}
                                                                {index === 0 ? <img src={require('../images/crown.png')} className="crown"/> : null}
                                                            </div>
                                                        </Card.Header>
                                                        <Card.Img variant="top" src={this.props.data[index]["img_url"]} />
                                                        <Card.Body>
                                                            <Card.Title>{this.props.data[index]["brand"]}</Card.Title>
                                                            <Card.Subtitle>{this.props.data[index]["name"]}</Card.Subtitle>
                                                        </Card.Body>
                                                        <ListGroup className="list-group-flush">
                                                            <ListGroupItem key="color">Color: <b>{this.props.data[index]["code"]}</b></ListGroupItem>
                                                            <ListGroupItem key="score">
                                                                Score: <b>{Number(this.props.data[index]["scores"]["overall"]).toFixed(3)} </b>
                                                                <Button
                                                                    className = "detail-button"
                                                                    variant="info"
                                                                    size='sm'
                                                                    onClick={() => this.showScoreDetail(index, true)}>Details</Button>
                                                            </ListGroupItem>
                                                            {/*<ListGroupItem key="keyword">Keywords: {this.props.data[index]["keywords"]}</ListGroupItem>*/}
                                                            <ListGroupItem key="price">Price: <b>{this.props.data[index]["price"]}</b>
                                                                <Button
                                                                    className = "shop-button"
                                                                    variant="info"
                                                                    size='sm'
                                                                    onClick={() => this.showSephora(this.props.data[index]["url"])}>Shop</Button></ListGroupItem>
                                                        </ListGroup>
                                                        {/*<Card.Body>*/}
                                                        {/*    <Card.Link href={this.props.data[index]["url"]}>Product Link on Sephora.com</Card.Link>*/}
                                                        {/*</Card.Body>*/}

                                                    </Card>

                                                    :

                                                        <Card style={{ width: '23rem', height: '40rem'}}>
                                                            <Card.Header>
                                                                <div className="text-muted">
                                                                    {index === 0 ? <img src={require('../images/crown.png')} className="crown"/> : null}
                                                                    {/*<div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>*/}
                                                                    No. {index+1}
                                                                    {index === 0 ? <img src={require('../images/crown.png')} className="crown"/> : null}
                                                                </div>
                                                            </Card.Header>
                                                            <br/>
                                                            <Card.Title>{this.props.data[index]["brand"]}</Card.Title>
                                                            <Card.Subtitle>{this.props.data[index]["name"]}</Card.Subtitle>
                                                            <Card.Body>
                                                                <ListGroup className="list-group-flush">
                                                                    <ListGroupItem>Overall: {Number(this.props.data[index]["scores"]["overall"]).toFixed(3)}</ListGroupItem>
                                                                    <ListGroupItem>Color: {Number(this.props.data[index]["scores"]["color"]).toFixed(3)}</ListGroupItem>
                                                                    <ListGroupItem>Keywords: {Number(this.props.data[index]["scores"]["keywords"]).toFixed(3)}</ListGroupItem>
                                                                    <ListGroupItem>Review: {Number(this.props.data[index]["scores"]["weighted_rating"]).toFixed(3)}</ListGroupItem>
                                                                    <ListGroupItem>Skin Type: {Number(this.props.data[index]["scores"]["skinType_rating"]).toFixed(3)}</ListGroupItem>
                                                                    <ListGroupItem>Skin Tone: {Number(this.props.data[index]["scores"]["skinTone_rating"]).toFixed(3)}</ListGroupItem>
                                                                    <ListGroupItem>Hair Color: {Number(this.props.data[index]["scores"]["hairColor_rating"]).toFixed(3)}</ListGroupItem>
                                                                    <ListGroupItem>Eye Color: {Number(this.props.data[index]["scores"]["eyeColor_rating"]).toFixed(3)}</ListGroupItem>
                                                                    <ListGroupItem>
                                                                        <Button variant="info" onClick={() => this.showScoreDetail(index, false)}>Back</Button>
                                                                    </ListGroupItem>
                                                                </ListGroup>
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
