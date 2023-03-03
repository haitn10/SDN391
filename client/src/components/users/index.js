import React, { useContext, useEffect, useState } from "react";
import Navbar from "../common/Navbar";
import { deleteUser, downUser, getAllUsers, raiseUser } from "../../api";
import { StoreContext, actions } from "../../store";

function Users() {
  const [state, dispatch] = useContext(StoreContext);
  const [refresh, setRefresh] = useState(false);
  const [message, setMessage] = useState("");
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await getAllUsers({ token: state.accessToken });
      setUsersList(response);
    }
    fetchMyAPI();
  }, [refresh]);
  console.log(usersList);
  const handleDown = async (id, token) => {
    setRefresh(true);
    const result = await downUser({ id, token });
    setMessage(result.message);
    setRefresh(false);
  };

  const handleRaise = async (id, token) => {
    setRefresh(true);
    const result = await raiseUser({ id, token });
    setMessage(result.message);
    setRefresh(false);
  };

  const handleDelete = async (id, token) => {
    setRefresh(true);
    const result = await deleteUser({ id, token });
    setMessage(result.message);
    setRefresh(false);
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row align-items-center mt-3">
          <div className="col-md-6">
            <div className="mb-3">
              <h5 className="card-title">
                List Users
                <span className="text-muted fw-normal ms-2">
                  ({usersList.length})
                </span>
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="">
              <div className="table-responsive">
                <table className="table project-list-table table-nowrap align-middle table-borderless">
                  <thead>
                    <tr>
                      <th scope="col" className="ps-4" style={{ width: 50 }}>
                        <div className="form-check font-size-16">
                          <label
                            className="form-check-label"
                            htmlFor="contacusercheck"
                          ></label>
                        </div>
                      </th>
                      <th scope="col">UserName</th>
                      <th scope="col">Name</th>
                      <th scope="col">Year Of Birth</th>
                      <th scope="col">Role</th>
                      <th scope="col" style={{ width: 200 }}>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersList !== [] ? (
                      usersList.map((item, index) => (
                        <tr key={index}>
                          <th scope="row" className="ps-4">
                            <div className="form-check font-size-16">
                              <label
                                className="form-check-label"
                                htmlFor="contacusercheck1"
                              ></label>
                            </div>
                          </th>
                          <td>{item.username}</td>
                          <td>{item.name}</td>
                          <td>{item.yoB}</td>
                          {item.isAdmin ? (
                            <td>
                              <span className="badge badge-soft-success mb-0">
                                Admin
                              </span>
                            </td>
                          ) : (
                            <td>
                              <span className="badge badge-soft-danger mb-0">
                                User
                              </span>
                            </td>
                          )}

                          <td>
                            <ul className="list-inline mb-0">
                              <li className="list-inline-item">
                                {item.isAdmin ? (
                                  <div>
                                    {state.profile.id === item._id ? null : (
                                      <button
                                        data-bs-toggle="modal"
                                        data-bs-target={`#down${item._id}`}
                                        data-bs-placement="top"
                                        title="Up Role"
                                        className="px-2 text-primary border-0 bg-white"
                                      >
                                        <i className="bi bi-arrow-bar-down"></i>
                                      </button>
                                    )}

                                    <div
                                      className="modal fade"
                                      id={`down${item._id}`}
                                      tabIndex="-1"
                                      aria-labelledby="exampleModalLabel"
                                      aria-hidden="true"
                                    >
                                      <div className="modal-dialog">
                                        <div className="modal-content">
                                          <div className="modal-body justify-content-center d-flex">
                                            <h3 className="text-danger">
                                              Are you sure down the User role?
                                            </h3>
                                          </div>
                                          <div className="modal-footer">
                                            <button
                                              type="button"
                                              className="btn btn-secondary"
                                              data-bs-dismiss="modal"
                                            >
                                              Close
                                            </button>
                                            <button
                                              data-bs-dismiss="modal"
                                              type="button"
                                              className="btn btn-primary"
                                              onClick={() =>
                                                handleDown(
                                                  item._id,
                                                  state.accessToken
                                                )
                                              }
                                            >
                                              Save Changes
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div>
                                    <button
                                      data-bs-toggle="modal"
                                      data-bs-target={`#up${item._id}`}
                                      data-bs-placement="top"
                                      title="Up Role"
                                      className="px-2 text-primary border-0 bg-white"
                                    >
                                      <i className="bi bi-upload"></i>
                                    </button>
                                    <div
                                      className="modal fade"
                                      id={`up${item._id}`}
                                      tabIndex="-1"
                                      aria-labelledby="exampleModalLabel"
                                      aria-hidden="true"
                                    >
                                      <div className="modal-dialog">
                                        <div className="modal-content">
                                          <div className="modal-body justify-content-center d-flex">
                                            <h3 className="text-danger">
                                              Are you sure raise the User role?
                                            </h3>
                                          </div>
                                          <div className="modal-footer">
                                            <button
                                              type="button"
                                              className="btn btn-secondary"
                                              data-bs-dismiss="modal"
                                            >
                                              Close
                                            </button>
                                            <button
                                              data-bs-dismiss="modal"
                                              type="button"
                                              className="btn btn-primary"
                                              onClick={() =>
                                                handleRaise(
                                                  item._id,
                                                  state.accessToken
                                                )
                                              }
                                            >
                                              Save Changes
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </li>
                              <li className="list-inline-item">
                                {item.isAdmin ? null : (
                                  <div>
                                    <button
                                      data-bs-toggle="modal"
                                      data-bs-target={`#delete${item._id}`}
                                      data-bs-placement="top"
                                      title="Delete"
                                      className="px-2 text-danger border-0 bg-white"
                                    >
                                      <i className="bi bi-trash3"></i>
                                    </button>
                                    <div
                                      className="modal fade"
                                      id={`delete${item._id}`}
                                      tabIndex="-1"
                                      aria-labelledby="exampleModalLabel"
                                      aria-hidden="true"
                                    >
                                      <div className="modal-dialog">
                                        <div className="modal-content">
                                          <div className="modal-body justify-content-center d-flex">
                                            <h3 className="text-danger">
                                              You want to delete this user?
                                            </h3>
                                          </div>
                                          <div className="modal-footer">
                                            <button
                                              type="button"
                                              className="btn btn-secondary"
                                              data-bs-dismiss="modal"
                                            >
                                              Close
                                            </button>
                                            <button
                                              data-bs-dismiss="modal"
                                              type="button"
                                              className="btn btn-primary"
                                              onClick={() =>
                                                handleDelete(
                                                  item._id,
                                                  state.accessToken
                                                )
                                              }
                                            >
                                              Save Changes
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </li>
                            </ul>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <span></span>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* {Pagination} */}
        {/* <div className="row g-0 align-items-center pb-4">
          <div className="col-sm-6">
            <div>
              <p className="mb-sm-0">Showing 1 to 10 of 57 entries</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="float-sm-end">
              <ul className="pagination mb-sm-0">
                <li className="page-item disabled">
                  <Link href="#" className="page-link">
                    <i className="bi bi-chevron-left"></i>
                  </Link>
                </li>
                <li className="page-item active">
                  <Link href="#" className="page-link">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link href="#" className="page-link">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link href="#" className="page-link">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link href="#" className="page-link">
                    4
                  </Link>
                </li>
                <li className="page-item">
                  <Link href="#" className="page-link">
                    5
                  </Link>
                </li>
                <li className="page-item">
                  <Link href="#" className="page-link">
                    <i className="bi bi-chevron-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* Popups */}
        {/* <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body justify-content-center d-flex">
                <h3 className="text-danger">You can't delete admin!</h3>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="downrole"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body justify-content-center d-flex">
                <h3 className="text-danger">
                  Are you sure to down the Admin role?
                </h3>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Users;
