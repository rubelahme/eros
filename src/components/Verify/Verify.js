import React from "react";
import "./Verify.css";
import img from "../../img/Capture1-removebg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Verify = () => {
  return (
    <>
      <div className="verify">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div>
                <div className="verify1">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="verify2">Email Verified</span>
                  <div>
                    <a
                      className="btn btn-warning w-100"
                      href="https://www.eros.com/"
                      rel="noopener noreferrer"
                    >
                      <p className=" fw-bold fs-5 mt-2 mb-2 pt-2 pb-1">
                        Go to Home
                        <span className="icon2">
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="col-lg-7">
              <img className="img1" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify;
