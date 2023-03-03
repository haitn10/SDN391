import React, { useContext, useEffect, useState } from "react";
import { StoreContext, actions } from "../../store";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api";

function Register() {
  const [state, dispatch] = useContext(StoreContext);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
    name: "",
    yoB: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onRegister = async (e) => {
    e.preventDefault();
    const result = await register({ values });
    if (result.status === 200) {
      setMessage(result.message);
      navigate("/login");
    } else {
      setMessage(result.message);
    }
  };

  useEffect(() => {
    // setMessage(state.data);
    if (state.accessToken) {
      navigate("/");
    } else {
      setValues({ username: "", password: "", name: "", yoB: "" });
      navigate("/register");
    }
  }, [state, navigate]);
  return (
    <>
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
        <div
          id="liveToast"
          className="toast hide"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-body">{message}</div>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://nld.mediacdn.vn/2018/6/2/mordovia-arena-saransk-1527915860667205779137.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
        onKeyPress={(e) => (e.key === "Enter" ? onRegister : {})}
      >
        <div className="container" style={{ height: "100%" }}>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <form
              className="form-control w-50 m-5 py-4 px-5"
              onSubmit={onRegister}
            >
              <div className="mb-3">
                <label htmlFor="imputUserName" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="imputUserName"
                  name="username"
                  placeholder="e.g username"
                  value={values.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="imputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="imputPassword"
                  name="password"
                  placeholder="Type your password"
                  value={values.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="imputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="imputName"
                  name="name"
                  placeholder="Type your name"
                  value={values.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="imputyoB" className="form-label">
                  Year of Birth
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="imputyoB"
                  name="yoB"
                  min={1900}
                  max={2015}
                  placeholder="Type your year of birth"
                  value={values.yoB}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  id="liveToastBtn"
                >
                  Submit
                </button>
              </div>
              <div className="justify-content-center d-flex mt-4">
                <span>Have account?</span>
                <Link to="/login">Sign In</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
