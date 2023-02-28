import React from "react";
import Navbar from "../common/Navbar";

function Nations() {
  return (
    <>
      <Navbar active="text-muted" styleNav="frontWeight:600px"/>
      <div className="container">
        <div className="row mt-3 p-2">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <img src="https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/Vie" className="img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Viet Nam</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nations;
