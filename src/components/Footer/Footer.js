import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column">MyCompany</div>
            <div className="column has-text-right">
              <FontAwesomeIcon icon={['fab', 'facebook-square']} />
              <FontAwesomeIcon icon={['fab', 'twitter-square']} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
