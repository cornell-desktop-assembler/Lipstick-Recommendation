import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import '../css/output.css'

class OutputContainer extends Component {
    pictureUrls = ["https://www.sephora.com/productimages/sku/s2129922-main-zoom.jpg",
        "https://www.sephora.com/productimages/sku/s2012748-main-zoom.jpg",
        "https://www.sephora.com/productimages/sku/s1890623-main-zoom.jpg",
        "https://www.sephora.com/productimages/sku/s1900083-main-zoom.jpg"];
    urls = ["https://www.sephora.com/product/rouge-pur-couture-matte-slim-lipstick-P436506?icid2=products%20grid:p436506:product",
        "https://www.sephora.com/product/mattetrance-lipstick-P421813?icid2=products%20grid:p421813:product",
        "https://www.sephora.com/product/everlasting-love-liquid-lipstick-P384954?icid2=products%20grid:p384954:product",
        "https://www.sephora.com/product/velvet-matte-lip-pencil-P78834?icid2=products%20grid:p78834:product"
    ];
    titles = ["YVES SAINT LAURENT", "PAT MCGRATH LABS", "KAT VON D", "NARS"];
    texts = ["Rouge Pur Couture The Slim Matte Lipstick", "MatteTrance™ Lipstick", "Everlasting Liquid Lipstick", "Velvet Matte Lipstick Pencil"];
    prices = ["39.00", "38.00", "20.00", "27.00"];
    colors = ["4 Fuchsia Excentrique - soft raspberry", "Omi 107 - mid-tone rose", "Lovecraft - mauve pink nude", "Do Me Baby - chestnut rose"];
    keywords = ["super-slim", "luxurious", "long-wear", "cult-favorite"];


    render() {
        return (
            <div>
                { this.props.showOutput ?
                <div className="output-parent">
                    <Container>
                        <Row>
                            <CardDeck>
                                {[1,2,3,4].map(index => (
                                    <Card style={{ width: '20rem' }}>
                                        <Card.Img variant="top" src={this.pictureUrls[index-1]} />
                                        <Card.Body>
                                            <Card.Title>{index}. {this.titles[index-1]}</Card.Title>
                                            <Card.Text>
                                                {this.texts[index-1]}
                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>Price: ${this.prices[index-1]}</ListGroupItem>
                                            <ListGroupItem>Color: {this.colors[index-1]}</ListGroupItem>
                                            <ListGroupItem>Keywords: {this.keywords[index-1]}</ListGroupItem>
                                        </ListGroup>
                                        <Card.Body>
                                            <Card.Link href={this.urls[index-1]}>Product Link on Sephora.com</Card.Link>
                                        </Card.Body>
                                        {/*<Card.Footer>*/}
                                        {/*    <small className="text-muted">Last updated 3 mins ago</small>*/}
                                        {/*</Card.Footer>*/}
                                    </Card>
                                ))}

                            </CardDeck>
                        </Row>
                        <Row>
                            <Button onClick={this.props.returnToSearch}>Back To Search</Button>
                        </Row>
                    </Container>
                </div> : null}
            </div>
        )
    }
}

export default OutputContainer
