import React from "react";
import "./FootER.css";

const FootER = () => {
  return (
    <footer className="footer-list">
      <div className="container">
        <div className="row pt-3">
          <div className="col-sm-2">
            <p className="ErosAds">EROSADS</p>
          </div>
          <div className="col-sm-2">
            <div className="footer-item">
              <p className="Contact">Contact</p>
              <p className="Contact">Privacy</p>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="footer-item">
              <p className="Contact">Terms & Conditions</p>
              <p className="Contact">Advertiser Agreement</p>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="footer-item">
              <p className="Contact">F.A.Q.</p>
              <p className="Contact">About Eros Ads</p>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="footer-item">
              <p className="Contact">2257 Exemption</p>
              <p className="Contact">DMCA Complaints</p>
            </div>
          </div>
          <div className="col-sm-2">
            <p className="footer-About">About ErosAds</p>
          </div>
          <div className="col-md-9 pt-5 pb-5">
            <p className="Customization">
              Customization Services brought to you by Eros-guide.com™ All
              Things Erotic™. © 1997-2016 MPF Media Services GmbH
              Obergrundstrasse 73CH-6003 Luzern
            </p>
          </div>
          <div className="col-md-3  pt-5 pb-5">
            <p className="Trademarks">Read about out Trademarks/IP</p>
            <p className="TrademarksIP">Trademarks/IP</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FootER;
