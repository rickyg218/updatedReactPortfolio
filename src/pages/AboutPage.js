import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Enrique. I'm a full stack developer with experience in React, ReactJS, Express JS, Node JS, mySQL, MongoDB, and Sequilize.</p>

            <p>I love to travel and my dream would be to program while on the road and make the world a better place via progamming.</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>
            <p>My passion for progamming has allowed me to build things that I never thought possible. The power of progamming is a beautiful thing.
            </p>
            </Content>
        </div>
    );

}

export default AboutPage;