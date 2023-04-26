import React, { useState } from "react";

//css
import "../assetss/css/login.css";

//imagnes
import logo from "../assetss/img/logo.png";

//axios
import axios from "axios";

import { useNavigate } from "react-router-dom";

//servicios
import { Apiurl } from "../services/apirest";

const Login = () => {
  // const [error,setError]=useState(false)
  //const [errorMsg,setErrorMsg]=useState("")

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    console.log(password);
    Submit();
  };

  const handleUser = (input) => {
    setUser(input.target.value);
  };

  const handlePassword = (input) => {
    setPassword(input.target.value);
  };

  const Submit = () => {
    //  let login=   document.getElementById("user").value
    // let clave = document.getElementById("password").value

    if (user === "" || password === "") {
      alert("LOS CAMPOS DEBEN SER LLENADOS");
    } else {
      axios
        .post(Apiurl, {
          user,
          password,
        })
        .then((response) => {
          console.log(response.data);
          navigate("/dashboard");
        })
        .catch(function (error) {
          setUser("");
          setPassword("");
          console.log(error.message);

          alert("Usuario O Contraseña Invalida");

          // document.getElementById("user").value=""
          // document.getElementById("password").value=""
        });
    }
  };

  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img src={logo} width="100px" alt="User Icon" />
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="user"
              className="fadeIn second"
              name="login"
              placeholder="login"
              onChange={handleUser}
              value={user}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              onChange={handlePassword}
              value={password}
            />
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
              
            />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
