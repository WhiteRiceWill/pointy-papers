import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcomeCard">
        <div className="welcomeText">
          <div>
            A collection of
          </div>
          <div>
            <Link to='/license' className='freeLink'>free</Link>
            &nbsp;to download,
          </div>
          <div>
            minimalist wallpapers.
          </div>
        </div>
      </div>

    );
  }
};
