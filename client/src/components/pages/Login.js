import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  const onLogin = async (e) => {
    e.preventDefault();
    const result = await login({ email, password });
    setData(JSON.parse(result));
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [data]);

  return (
    <>
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
            <form
              method="post"
              className="form-control w-50 m-5 py-4 px-5 needs-validation"
              noValidate
            >
              <div className="mb-3">
                <label htmlFor="imputEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="imputEmail"
                  name="email"
                  placeholder="e.g admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="valid-feedback">Looks good!</div>
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
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="my-3">
                <span>errorMessage</span>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={onLogin}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
