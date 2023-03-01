import React, { useContext, useEffect } from "react";
import Navbar from "../common/Navbar";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../api";
import { StoreContext, actions } from "../../store";

function Users() {
  const [state, dispatch] = useContext(StoreContext);

  useEffect(() => {
    const token = state.accessToken;
    async function fetchMyAPI() {
      const response = await getAllUsers({ token });
      dispatch(actions.setUser(response));
      sessionStorage.setItem("users", JSON.stringify(response));
    }
    fetchMyAPI();
  }, [dispatch, state.accessToken]);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row align-items-center mt-3">
          <div className="col-md-6">
            <div className="mb-3">
              <h5 className="card-title">
                Contact List
                <span className="text-muted fw-normal ms-2">(834)</span>
              </h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
              <div>
                <div>
                  <button className="btn btn-primary">
                    <i className="bi bi-plus"></i> Add New
                  </button>
                </div>
              </div>
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
                    {state.users ? (
                      state.users.map((item) => (
                        <tr key={item.id}>
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
                                <Link
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Edit"
                                  className="px-2 text-primary"
                                >
                                  {item.isAdmin ? (
                                    <i class="bi bi-arrow-bar-down"></i>
                                  ) : (
                                    <i className="bi bi-upload"></i>
                                  )}
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Delete"
                                  className="px-2 text-danger"
                                >
                                  <i className="bi bi-trash3"></i>
                                </Link>
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
        <div className="row g-0 align-items-center pb-4">
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
        </div>
      </div>
    </>
  );
}

export default Users;
