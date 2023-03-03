import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api";
import { StoreContext, actions } from "../../store";
import { message } from "antd";

function Login() {
  const [state, dispatch] = useContext(StoreContext);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (state.accessToken) {
      navigate("/");
    } else {
      setPassword("");
      setUserName("");
      navigate("/login");
    }
  }, [state, navigate]);

  const onLogin = async (e) => {
    e.preventDefault();
    if (username.length === 0 || password.length === 0) {
      return;
    }
    const result = await login({ username, password });
    if (result.status === 200) {
      dispatch(actions.setState(result));
    } else {
      info("error", result.message);
    }
  };

  const info = (status, msg) => {
    messageApi.open({
      type: status,
      content: msg,
    });
  };
  return (
    <>
      {contextHolder}
      <div
        style={{
          backgroundImage:
            "url(https://nld.mediacdn.vn/2018/6/2/mordovia-arena-saransk-1527915860667205779137.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
        onKeyPress={(e) => (e.key === "Enter" ? onLogin : {})}
      >
        <div className="container" style={{ height: "100%" }}>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <form className="form-control w-50 m-5 py-4 px-5">
              <div className="mb-3">
                <label htmlFor="UserName" className="form-label">
                  User Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="UserName"
                  name="UserName"
                  placeholder="e.g admin"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  onClick={onLogin}
                >
                  Submit
                </button>
              </div>
              <div className="justify-content-center d-flex mt-4">
                <span>Don't have account?</span>
                <Link to="/register">Sign up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
