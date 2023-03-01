import React, { useContext } from "react";
import Navbar from "../common/Navbar";
import { StoreContext } from "../../store";
import { useNavigate } from "react-router-dom";

function Nations() {
  const [state, dispatch] = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <>
      <Navbar active="text-muted" styleNav="frontWeight:600px" />
      <div className="container">
        <div className="row card justify-content-md-center mt-5">
          <div
            className="row col-sm-12"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <div className=" col-sm-3">
              <img
                src="https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/Vie"
                className="img-fluid w-25"
                alt="..."
              />
            </div>
            <div className=" col-sm-8">Hello</div>
            <div className=" col-sm-auto">Hello</div>
            {/* <div className="card">
              <img
                src="https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/Vie"
                className="img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Viet Nam</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div> */}
          </div>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nations;
