import React, { useEffect, useState } from "react";
import Navbar from "../common/Navbar";
import { getPlayer } from "../../api";
import { useNavigate } from "react-router-dom";

function Players() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    let getData = true;
    getPlayer().then((items) => {
      if (getData) {
        setData(JSON.parse(items));
      }
    });
    return () => (getData = false);
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mt-3 p-2 d-flex justify-content-center">
          <div className="position-absolute w-100 h-100">
            <div className="float-end bottom-0 d-flex h-100 ">
              <button
                className="btn btn-outline-danger float-end align-items-center d-flex justify-content-center"
                style={{
                  borderRadius: "100%",
                  width: 45,
                  height: 45,
                  marginRight: 100,
                  bottom: 20,
                }}
                onClick={(e) => navigate("/players/add")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fontWeight="700"
                  fill="currentColor"
                  className="bi bi-plus-lg"
                  style={{ fontWeight: "700px", fontSize: "" }}
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-nowrap input-group w-50 row">
            <label
              htmlFor="searchInput"
              className="col-sm-2 col-form-label text-end"
            >
              Search:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="searchInput"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((data, index) => (
            <a
              href={`/players/${data._id}`}
              className="col-lg-3 col-md-6 col-sm-12"
              key={index}
            >
              <div className="profile-card text-center">
                {data.image ? (
                  <img src={data.image} className="img card-img" alt="" />
                ) : (
                  <img
                    src="https://ae01.alicdn.com/kf/UT8PyDTXsFXXXagOFbXy/12-15CM-Football-Players-Reflective-Car-Decorative-Stickers-Decals-Classic-Car-Body-Cover-Scratches-Accessories-C4.jpg_Q90.jpg_.webp"
                    className="img card-img"
                    alt=""
                  />
                )}
                <div className="profile-name">{data.name}</div>
                <div className="profile-overview">
                  <div className="profile-overview">
                    <div className="row text-center">
                      <div className="col-sm-4">
                        <h3>{data.club}</h3>
                        <p>Club</p>
                      </div>
                      <div className="col-sm-4">
                        <h3>{data.position}</h3>
                        <p>Position</p>
                      </div>
                      <div className="col-sm-4">
                        <h3>{data.goals}</h3>
                        <p>Goals</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Players;
