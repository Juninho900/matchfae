import React, { View, useState, useEffect, StyleSheet } from 'react';
import TinderCard from "react-tinder-card";
import './css/TinderCards.css';
import SwipeButtons from "./SwipeButtons";
import { Link } from "react-router-dom";

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: 'Gandalf, 94',
            url: "https://c.tenor.com/VOdWjm2zbEAAAAAC/gandalf-sax-guy.gif",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar mauris massa, volutpat semper augue vestibulum vel. Mauris tempor hendrerit nisi, eget porttitor massa tristique ac. Sed mollis elementum volutpat. Vestibulum nec tellus libero. Suspendisse porttitor ligula orci, et varius mauris tincidunt vel. Suspendisse non ipsum ut nulla interdum euismod. Phasellus ac mollis magna. Maecenas aliquet nulla ligula, in lobortis lectus sollicitudin at. Curabitur sed accumsan arcu. Nunc porta viverra lobortis. Aliquam at consectetur mauris. Vestibulum euismod velit a lacus consequat aliquam. Nunc orci orci, consequat tincidunt erat et, elementum blandit augue.",
        },
        {
            name: 'Alfrid Lickspittle, 46',
            url: "https://static.tvtropes.org/pmwiki/pub/images/ba72fb4652e83cd931540a324772f73f_the_hobbit_middle_earth.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar mauris massa, volutpat semper augue vestibulum vel. Mauris tempor hendrerit nisi, eget porttitor massa tristique ac. Sed mollis elementum volutpat. Vestibulum nec tellus libero. Suspendisse porttitor ligula orci, et varius mauris tincidunt vel. Suspendisse non ipsum ut nulla interdum euismod. Phasellus ac mollis magna. Maecenas aliquet nulla ligula, in lobortis lectus sollicitudin at. Curabitur sed accumsan arcu. Nunc porta viverra lobortis. Aliquam at consectetur mauris. Vestibulum euismod velit a lacus consequat aliquam. Nunc orci orci, consequat tincidunt erat et, elementum blandit augue.",
        },
        {
            name: 'Bilbo Baggins, 29',
            url: "https://i.pinimg.com/564x/f6/7c/9e/f67c9ec1c5d3c876f9303a34a5aaf9fa--haha-funny-martin-freeman.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar mauris massa, volutpat semper augue vestibulum vel. Mauris tempor hendrerit nisi, eget porttitor massa tristique ac. Sed mollis elementum volutpat. Vestibulum nec tellus libero. Suspendisse porttitor ligula orci, et varius mauris tincidunt vel. Suspendisse non ipsum ut nulla interdum euismod. Phasellus ac mollis magna. Maecenas aliquet nulla ligula, in lobortis lectus sollicitudin at. Curabitur sed accumsan arcu. Nunc porta viverra lobortis. Aliquam at consectetur mauris. Vestibulum euismod velit a lacus consequat aliquam. Nunc orci orci, consequat tincidunt erat et, elementum blandit augue.",
        }
    ]);

    return (
        <div>
            <div className="tinderCards_cardContainer">
            {people.map(person => (<TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
                <div style={{backgroundColor: '#FFFFFF'}} className="card">
                    <div>
                        <div style={{ backgroundImage: `url(${person.url})`}} className="img"></div>
                        <h3 className="name2">{person.name}</h3>
                        <div>
                            <div className="desc">{person.desc}</div>
                            <div>
                                <Link to="info">
                                    <p className="infomation">MAIS INFORMAÇÕES</p>
                                </Link> 
                            </div>
                            <div><SwipeButtons /></div>
                        </div>
                    </div>
                </div>
                </TinderCard>
            ))}
            </div>
        </div>
    );
}

export default TinderCards;