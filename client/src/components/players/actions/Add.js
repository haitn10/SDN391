import React, { useState } from "react";
import Navbar from "../../common/Navbar";
import { addPlayer } from "../../../api";

let positions = [
  { id: "1", position: "Goalkeeper" },
  { id: "2", position: "Defender" },
  { id: "3", position: "Midfielder " },
  { id: "4", position: "Forward" },
];

function Add() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [club, setClub] = useState("");
  const [image, setImage] = useState("");
  const [position, setPosition] = useState("");
  const [jerseyNumber, setjerseyNumber] = useState(0);
  const [goals, setGoals] = useState(0);
  const [nation, setNation] = useState("");
  const [success, setSucess] = useState(false);

  const onAdd = async (e) => {
    e.preventDefault();
    const result = await addPlayer({
      name,
      birth,
      club,
      image,
      position,
      jerseyNumber,
      goals,
      nation
    });
    setSucess(JSON.parse(result));
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
                <form className="needs-validation">
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={jerseyNumber}
                        onChange={(e) => setjerseyNumber(e.target.value)}
                        required
                      />
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="birth" className="form-label">
                        Birth of Player
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="birth"
                        name="birth"
                        max={new Date().toISOString().split("T")[0]}
                        value={birth}
                        onChange={(e) => setBirth(e.target.value)}
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
                        value={club}
                        onChange={(e) => setClub(e.target.value)}
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
                        value={image}
                        accept="image/*"
                        onChange={(e) => setImage(e.target.value)}
                        required
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
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        required
                      >
                        <option unselectable="true" disabled>
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
                        value={nation}
                        onChange={(e) => setNation(e.target.value)}
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
                        value={goals}
                        onChange={(e) => setGoals(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <hr className="my-4" />

                  <button
                    className="w-100 btn btn-success btn-lg"
                    type="submit"
                    onClick={onAdd}
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

export default Add;
