import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store";
import { logOut } from "../../store/Actions";

function Home() {
  const [state, dispatch] = useContext(StoreContext);

  const onLogout = async () => {
    await dispatch(logOut());
  };
  return (
    <>
      <header
        className="p-3 text-white shadow-sm"
        style={{
          position: "absolute",
          zIndex: 1,
          width: "100%",
          background: "none",
        }}
      >
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link
                  to="/"
                  className="nav-link px-2 text-uppercase text-muted align-items-center d-flex"
                  style={{ fontWeight: "600" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-house"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                  </svg>
                  <span className="px-2">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/nations"
                  className="nav-link px-2 text-uppercase text-light align-items-center d-flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-globe2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                  </svg>
                  <span className="px-2">Nations</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/players"
                  className="nav-link px-2 text-uppercase text-light align-items-center d-flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-file-earmark-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
                  </svg>
                  <span className="px-2">Players</span>
                </Link>
              </li>
              {state.profile.isAdmin ? (
                <li>
                  <Link
                    to="/users"
                    className="nav-link px-2 text-uppercase text-light align-items-center d-flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                    <span className="px-2">Users</span>
                  </Link>
                </li>
              ) : null}
            </ul>
            {state.accessToken ? (
              <div className="text-end">
                <div className="d-flex align-items-center">
                  <Link
                    to="/accounts"
                    className="text-decoration-none text-white"
                  >
                    <span className=" mx-3">Welcome {state.profile.name}!</span>
                  </Link>
                  <button className="btn btn-outline-light" onClick={onLogout}>
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-end">
                <Link to="/login">
                  <button
                    type="button"
                    className="btn border text-uppercase text-white mx-2"
                  >
                    Sign In
                  </button>
                </Link>
                <Link to="/register">
                  <button
                    type="button"
                    className="btn border text-uppercase text-white"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <main>
        <div className="text-center">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide h-25"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div
                className="carousel-item active"
                data-bs-interval="5000"
                style={{ height: "700px" }}
              >
                <img
                  src="https://media.architecturaldigest.com/photos/637949b3407644b8cdc8947f/master/pass/1442809583"
                  className="d-block w-100"
                  alt="slide1"
                />
                <div className="carousel-caption d-none d-md-block text-white">
                  <h5>Lionel Andrés Messi</h5>
                  <p>
                    Argentine professional footballer who plays as a forward for
                    Ligue 1 club Paris Saint-Germain and captains the Argentina
                    national team.
                  </p>
                </div>
              </div>
              <div
                className="carousel-item"
                data-bs-interval="5000"
                style={{ height: "700px" }}
              >
                <img
                  src="https://images6.alphacoders.com/407/407573.jpg"
                  className="d-block w-100"
                  alt="slide2"
                />
                <div className="carousel-caption d-none d-md-block text-white">
                  <h5>David Robert Joseph Beckham</h5>
                  <p>
                    English former professional footballer, the current
                    president and co-owner of Inter Miami CF and co-owner of
                    Salford City.
                  </p>
                </div>
              </div>
              <div
                className="carousel-item"
                data-bs-interval="5000"
                style={{ height: "700px" }}
              >
                <img
                  src="https://4kwallpapers.com/images/wallpapers/cristiano-ronaldo-1920x1080-9685.jpg"
                  className="d-block w-100"
                  alt="slide3"
                />
                <div className="carousel-caption d-none d-md-block text-white">
                  <h5>Cristiano Ronaldo</h5>
                  <p>
                    Portuguese professional footballer who plays as a forward
                    for and captains both Saudi Professional League club Al
                    Nassr and the Portugal national team.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
              style={{ zIndex: "revert" }}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
              style={{ zIndex: "revert" }}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="py-lg-5">
            <div className="mx-auto">
              <h1 className="fw-light">Football Management System</h1>
              <p className="lead text-muted">
                We will give you accurate and timely information about the
                players or countries that have participated in the World Cup.
              </p>
            </div>
          </div>
          <div className="album py-5">
            <div className="container">
              <h4 className="mb-3">Players List</h4>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      className="card-img"
                      src="https://www.telegraph.co.uk/content/dam/world-cup/2022/11/24/TELEMMGLPICT000316969189_trans_NvBQzQNjv4Bq3J0reXiL1fvLh5hI9rHBk9y_U5dUxqa5JYPVG-vcfoU.jpeg"
                      style={{ height: "250px" }}
                      alt=""
                    />
                    <div className="card-body">
                      <p className="card-text" style={{ height: "100px" }}>
                        Neymar da Silva Santos Júnior, known as Neymar, is a
                        Brazilian professional footballer who plays as a forward
                        for Ligue 1 club Paris Saint-Germain and the Brazil
                        national team.
                      </p>
                      <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      className="card-img"
                      src="https://e0.365dm.com/23/01/2048x1152/skysports-harry-kane-tottenham_6033645.jpg"
                      style={{ height: "250px" }}
                      alt=""
                    />
                    <div className="card-body">
                      <p className="card-text" style={{ height: "100px" }}>
                        Harry Edward Kane is an English professional footballer
                        who plays as a striker for Premier League club Tottenham
                        Hotspur and captains the England national team.
                      </p>
                      <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      className="card-img"
                      src="https://www.fcbarcelona.com/photo-resources/2022/11/02/85247947-27dc-488c-a6cb-d81c5e391559/09-ROBERT_LEWANDOWSKI.jpg?width=1200&height=750"
                      style={{ height: "250px" }}
                      alt=""
                    />
                    <div className="card-body">
                      <p className="card-text" style={{ height: "100px" }}>
                        Robert Lewandowski is a Polish professional footballer
                        who plays as a striker for La Liga club Barcelona and
                        captains the Poland national team.
                      </p>
                      <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      className="card-img"
                      src="https://keepup.com.au/wp-content/uploads/2023/01/1tckwxz5uecyr1h1fxzrdrvubu.jpg"
                      style={{ height: "250px" }}
                      alt=""
                    />
                    <div className="card-body">
                      <p className="card-text" style={{ height: "100px" }}>
                        Erling Braut Haaland is a Norwegian professional
                        footballer who plays as a striker for Premier League
                        club Manchester City and the Norway national team.
                      </p>
                      <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      className="card-img"
                      src="https://images.hindustantimes.com/img/2022/11/26/1600x900/SOCCER-ENGLAND-MUN-WHU-REPORT-48_1669456429654_1669456429654_1669456458223_1669456458223.JPG"
                      style={{ height: "250px" }}
                      alt=""
                    />
                    <div className="card-body">
                      <p className="card-text" style={{ height: "100px" }}>
                        David de Gea Quintana is a Spanish professional
                        footballer who plays as a goalkeeper for Premier League
                        club Manchester United and the Spain national team.
                      </p>
                      <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      className="card-img"
                      src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-12/Luka%20Modric%20Croatia%20112222%20%281%29.jpg.png?itok=w_nsXWAf"
                      style={{ height: "250px" }}
                      alt=""
                    />
                    <div className="card-body">
                      <p className="card-text" style={{ height: "100px" }}>
                        Luka Modrić is a Croatian professional footballer who
                        plays as a midfielder for La Liga club Real Madrid and
                        captains the Croatia national team.
                      </p>
                      <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" container d-flex justify-content-end mt-3">
              <a href="/players">More players</a>
            </div>
          </div>
          <div className="container">
            <hr className="featurette-divider" />
          </div>
          <div className="container">
            <h4 className="my-5">Nations List</h4>
            <div className="row mb-2">
              <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0 text-primary">Portugal</h3>
                    <div className="mb-1 text-muted">1921</div>
                    <p className="card-text mb-auto">
                      The Portugal national football team has represented
                      Portugal in international men's football competition
                    </p>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img
                      className="img-thumbnail"
                      style={{ height: "250px", width: "180px" }}
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Portuguese_Football_Federation.svg/640px-Portuguese_Football_Federation.svg.png"
                      alt="Portugal"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0 text-primary">Argentina</h3>
                    <div className="mb-1 text-muted">1930</div>
                    <p className="card-text mb-auto">
                      The Argentina national football team represents Argentina
                      in men's international football and is administered by the
                      Argentine Football Association, the governing body for
                      football in Argentina.
                    </p>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img
                      className="img-thumbnail"
                      style={{ height: "250px", width: "180px" }}
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Argentina_national_football_team_logo.svg/1200px-Argentina_national_football_team_logo.svg.png"
                      alt="Argentina"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0 text-primary">France</h3>
                    <div className="mb-1 text-muted">1904</div>
                    <p className="card-text mb-auto">
                      The France national football team represents France in
                      men's international football matches. It is governed by
                      the French Football Federation, the governing body for
                      football in France.
                    </p>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img
                      className="img-thumbnail"
                      style={{ height: "250px", width: "180px" }}
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/France_national_football_team_seal.svg/1200px-France_national_football_team_seal.svg.png"
                      alt="France"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0 text-primary">Brazil</h3>
                    <div className="mb-1 text-muted">1914</div>
                    <p className="card-text mb-auto">
                      The Brazil national football team, nicknamed Seleção
                      Canarinha, represents Brazil in men's international
                      football and is administered by the Brazilian Football
                      Confederation, the governing body for football in Brazil.
                    </p>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img
                      className="img-thumbnail"
                      style={{ height: "250px", width: "180px" }}
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Brazilian_Football_Confederation_logo.svg/800px-Brazilian_Football_Confederation_logo.svg.png"
                      alt="Brazil"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <a href="/nations">More nations</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
