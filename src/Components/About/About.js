import React, {Component} from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="aboutPage">
        <div className="head">
          About
        </div>
        <div className="miniHead">
          What even is a Pointy Paper anyway?
        </div>
        <div className="textBlock">
          <p>
            When I got a 4K monitor, I noticed a lack of high-res, abstract wallpapers around the web, so I decided to
            make some and host them here for everybody to enjoy. There should be
            support for most resolutions and aspect ratios, however, if you can't find
            a paper that fits your device, just&nbsp;
             <a href="https://twitter.com/whitericewill" target="_blank" className="bodyLink">let me know</a>
             &nbsp;and I will see
            what I can do. I made this site with ReactJS and it's open sourced
            on GitHub so feel free to&nbsp;
            <a href="https://github.com/WhiteRiceWill/pointy-papers" target="_blank" className="bodyLink">contribute</a>.
          </p>
          <p>
            TL;DR: I made some cool wallpapers that you can download :)
          </p>
        </div>
        <div className="headTwo">
          Contact
        </div>
          <div className="textBlock">
            <p>
              You can direct your feedback/requests/complaints/hugs to me on Twitter:&nbsp;
              <a href="https://twitter.com/whitericewill" target="_blank" className="bodyLink">@WhiteRiceWill</a>
            </p>
          </div>
        <div className="headTwo">
          Donate
        </div>
          <div className="textBlock">
            <p>
              If you really love Pointy Papers and would like to see more
              papers in the future, feel free to donate!
            </p>
            <p>Bitcoin address: 19Pvw1owYJEQ94CkxsWhNsWLjrub1EvGda</p>
            <p>Ethereum address: 0x19c5826090022beAFC69D3Ed7b2cDe9a17DB032F</p>
            <p>Litecoin address: LhTdBbbded157NcupW2XVohStkHEBzxVdE</p>
          </div>

      </div>

    );
  }
};
