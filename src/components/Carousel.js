import React from 'react';

import Card from '../components/Card';

import noteTaker from '../assets/images/noteTaker.png';
import pawslife from '../assets/images/pawslife.png';
import wander from '../assets/images/wander.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Note Taker',
                    subTitle: 'Lets Note Take Together',
                    imgSrc: noteTaker,
                    link: 'https://github.com/rickyg218/noteTaker',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Paws Life',
                    subTitle: 'Looking for a service for you pet?',
                    imgSrc: pawslife,
                    link: 'https://github.com/rickyg218/PawsLIfe-',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Wander',
                    subTitle: 'Looking for a hike near you? Wander has you covered',
                    imgSrc: wander,
                    link: 'https://github.com/CodySamuels/wander',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;