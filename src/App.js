import { useState } from "react";
import "./styles.css";
import { signOnStatus } from "./store/actions/signon-actions";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispach = useDispatch();
  const logInState = useSelector((state) => state.signon.signOn);
  // const [lognIn, setlognIn] = useState(false);

  const onChangeEmailHandler = (type, e) => {
    console.log(e, type);
    if (type === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    dispach(signOnStatus(true));
  };

  const handleLogOut = (e) => {
    // e.preventDefault();
    dispach(signOnStatus(false));
  };

  if (logInState) {
    return (
      <div className="App">
        <h1>{email} is loged in......</h1>
        <button onClick={handleLogOut}>Log out</button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <form onSubmit={handleLogIn}>
          <div className="input-container">
            <b>
              Email <span className="star">*</span>
            </b>
          </div>
          <input
            name="user-email"
            type="email"
            value={email}
            // autoFocus
            onChange={onChangeEmailHandler.bind(this, "email")}
          />
          <div className="input-container">
            <b>
              Password <span className="star">*</span>
            </b>
          </div>
          <input
            name="user-password"
            type="password"
            value={password}
            onChange={onChangeEmailHandler.bind(this, "password")}
          />
          <div className="input-container-submit">
            <input type="submit" value="Log in" />
          </div>
        </form>
      </div>
    );
  }
}
