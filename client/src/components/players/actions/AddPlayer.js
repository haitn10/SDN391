import React, { useContext, useState } from "react";
import Navbar from "../../common/Navbar";
import { StoreContext } from "../../../store";
import { useNavigate } from "react-router-dom";
import { addPlayer } from "../../../api";

export const positions = [
  { id: "1", position: "Goalkeeper" },
  { id: "2", position: "Defender" },
  { id: "3", position: "Midfielder " },
  { id: "4", position: "Forward" },
];

function AddPlayer() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(StoreContext);
  const [values, setValues] = useState({
    name: "",
    image: "",
    yoB: "",
    position: "",
    club: "",
    nation: "",
    jerseyNumber: "",
    goals: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = async (token) => {
    const result = await dispatch(addPlayer({ values, token }));
    console.log(result);
    navigate(`/players`);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mt-3 p-2 d-flex justify-content-center">
          <div className="flex-nowrap input-group w-50 row">
            <div className="py-5 text-center">
              <h2>Addition Players</h2>
              <p className="lead">
                Please enter the information of the new player you need to add.
              </p>
              <hr className="my-4" />
              <div className="row text-start">
                <form>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="playerName" className="form-label">
                        Player Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="playerName"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="jerseyNumber" className="form-label">
                        Jersey Number
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="jerseyNumber"
                        name="jerseyNumber"
                        min="1"
                        max="1000"
                        value={values.jerseyNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="birth" className="form-label">
                        Year Of Birth
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="birth"
                        name="yoB"
                        min={1970}
                        max={2015}
                        value={values.yoB}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="club" className="form-label">
                        Club
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="club"
                        name="club"
                        placeholder="e.g Real Marid"
                        value={values.club}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="image" className="form-label">
                        Image
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        value={values.image}
                        accept="image/*"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-5">
                      <label htmlFor="position" className="form-label">
                        Position
                      </label>
                      <select
                        className="form-select"
                        id="position"
                        name="position"
                        value={values.position}
                        onChange={handleChange}
                        required
                      >
                        <option unselectable="false" disabled>
                          Choose position
                        </option>
                        {positions.map((pos) => (
                          <option key={pos.id} value={pos.position}>
                            {pos.position}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="nation" className="form-label">
                        Nation
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nation"
                        name="nation"
                        value={values.nation}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="goals" className="form-label">
                        Totals of Goals
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="goals"
                        name="goals"
                        min="0"
                        max="1000"
                        value={values.goals}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <hr className="my-4" />

                  <button
                    className="w-100 btn btn-success btn-lg"
                    type="submit"
                    onClick={() => handleAdd(state.accessToken)}
                  >
                    Add Player
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPlayer;
