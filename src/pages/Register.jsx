import React from "react";

import "../assets/styles/pages/Register.css";

import auth from "../firebase/auth/Authentication";

import twitter_logo from "../assets/images/twitter.svg";
import facebook_logo from "../assets/images/facebook.svg";
import google_logo from "../assets/images/google.svg";

const Register = () => {

    return (
        <div className="main">
        <div className="text-conteiner">
            <h1>GOOD FOR LIFE</h1>
            <p>
            En GoodForLife cocinamos <br />
            rico, sano y natural <br />
            para vos...
            </p>
        </div>
        <div className="form-conteiner-register">
            <form className="form">
            <div className="register-conteiner">
                <label className="title-register">
                Username
                <input className="register-input" type="tex" />
                </label>
                <label className="title-register">
                Email
                <input className="register-input email" type="email" />
                </label>
                <label className="title-register">
                Contraseña
                <input className="register-input" type="password" />
                </label>
                <label>
                <input className="check" type="checkbox" />
                Soy vendedor
                </label>
            </div>
            <div className="login-with">
                <a onClick={auth.AuthGoogleAccount} className="login-with_links">
                <img
                    className="login-with_links--logo"
                    src={google_logo}
                    alt="Logo google"
                />
                </a>
                <a onClick={auth.AuthFacebookAccount} className="login-with_links">
                <img
                    className="login-with_links--logo"
                    src={facebook_logo}
                    alt="Logo facebook"
                />
                </a>
                <a onClick={auth.AuthTwitterAccount} className="login-with_links">
                <img
                    className="login-with_links--logo"
                    src={twitter_logo}
                    alt="Logo twitter"
                />
                </a>
            </div>
            <div className="send-register">
                <p>
                Asegúrese de que tenga al menos 8 caracteres, incluido un número y
                una letra mayúscula
                </p>
                <input
                className="register-btn"
                type="submit"
                value="Registrarse en GoodForLife"
                />
            </div>
            </form>
        </div>
        </div>
    )
};

export default Register;
