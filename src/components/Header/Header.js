import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css';
import { Link } from 'react-router-dom'

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {isToggleOn: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {

        let menuActive = this.state.isToggleOn ? 'is-active' : '';

        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link to="/" className="navbar-item">MyCompany</Link>
                            <span className={'navbar-burger burger ' + menuActive} onClick={this.handleClick}>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </span>
                        </div>
                        <div className={'navbar-menu ' + menuActive}>
                            <div className="navbar-end">
                                <Link to="/" className="navbar-item r-item">Home</Link>
                                <Link to="/faq" className="navbar-item r-item">Features</Link>
                                <Link to="/features" className="navbar-item r-item">About</Link>
                                <Link to="/faq" className="navbar-item r-item">FAQ</Link>
                                <div className="navbar-item">
                                    <div className="buttons">
                                        <span className="button is-primary is-outlined">
                                            <strong>JOIN NOW</strong>
                                            <FontAwesomeIcon icon="download" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* <script>
                document.addEventListener('DOMContentLoaded', () => {
                    // Get all "navbar-burger" elements
                    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

                    // Check if there are any navbar burgers
                    if ($navbarBurgers.length > 0) {
                        // Add a click event on each of them
                        $navbarBurgers.forEach( el => {
                            el.addEventListener('click', () => {
                                    // Get the target from the "data-target" attribute
                                    const target = el.dataset.target;
                                    const $target = document.getElementById(target);

                                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                                    el.classList.toggle('is-active');
                                    $target.classList.toggle('is-active');
                                });
                        })
                    }
                });
                </script> */}

            </div>
        );
    }
}

export default Header;
