import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.css';

class Home extends Component {
    render() {

        let heading = "Soaring to new heights";
        let subheading = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

        return (
            <div>
                <section className="hero is-medium is-bold">
                    <div className="hero-body">
                        <div className="container">
                        <h1 className="title">
                            {heading}
                        </h1>
                        <h2 className="subtitle is-two-thirds column is-paddingless">
                            {subheading}
                        </h2>
                        <h2>
                            <button className="button is-large is-primary">Our Services</button>
                        </h2>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="columns pd is-desktop">
                        <div className="column is-1 has-centered-text"><FontAwesomeIcon className="is-primary" icon={['fas', 'cog']} size="5x" /></div>
                        <div className="column is-one-third-desktop">
                            <p className="title">We provide superior logistics so that your business can succeed in a crazy world.</p>
                        </div>
                        <div className="column">
                            <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong> </p>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                        <div className="column is-one-third" >
                            <div className="card">
                            <div className="card-content">
                                <p className="title">
                                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                                </p>
                                <p className="subtitle">
                                Jeff Atwood
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;