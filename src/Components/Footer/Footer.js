import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footerLine'></div>
        <div className="licenseDiv">
          <Link to='/license' className='footerLicense'>License</Link>
        </div>
      </div>
    );
  }
};
