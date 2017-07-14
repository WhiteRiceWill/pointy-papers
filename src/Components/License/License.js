import React, { Component } from 'react';

export default class About extends Component{
  render() {
    return (
      <div className="licensePage">
        <div className="head">
          License
        </div>
        <div className="miniHead">
          Free for any purpose
        </div>
        <div className="textBlock">
          <p>All papers are created by Will Christman and licensed under the &nbsp;
            <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" className="bodyLink">Creative Commons Zero license</a> (CC0). This means all papers are
            completely free to be used for any personal or commercial purposes.
            You can modify, copy and distribute the papers as much as you want
            without asking for permission, and no attribution is required.</p>


        </div>
      </div>

    );
  }
};
