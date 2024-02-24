import React from "react";
import "./Login.css";
import {FaGooglePlus, FaFacebook, FaTwitter, FaLinkedin, FaGithub,} from "react-icons/fa";

const Login = () => {
    return (
        <div class="container" id="container">
        <div class="form-container sign-up">
            <form>
            <h1>Crear cuenta</h1>
            <div class="social-icons">
                <a href="#" class="icon">
                <FaGooglePlus />
                </a>
                <a href="#" class="icon">
                <FaFacebook />
                </a>
                <a href="#" class="icon">
                <FaTwitter />
                </a>
                <a href="#" class="icon">
                <FaLinkedin />
                </a>
                <a href="#" class="icon">
                <FaGithub />
                </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in">
            <form>
            <h1>Iniciar Sesión</h1>
            <div class="social-icons">
                <a href="#" class="icon">
                <FaGooglePlus />
                </a>
                <a href="#" class="icon">
                <FaFacebook />
                </a>
                <a href="#" class="icon">
                <FaTwitter />
                </a>
                <a href="#" class="icon">
                <FaLinkedin />
                </a>
                <a href="#" class="icon">
                <FaGithub />
                </a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
            </form>
        </div>
        <div class="toggle-container">
            <div class="toggle">
            <div class="toggle-panel toggle-left">
                <h1>Welcme Back</h1>
                <p> Enter your personal details to use all of site features</p>
                <button class="hidden" id="login">
                Sign In
                </button>
            </div>
            <div class="toggle-panel toggle-right">
                <h1>Hello, Friend</h1>
                <p> Register your personal details to use all of site features</p>
                <button class="hidden" id="register">
                Sign Up
                </button>
            </div>
            </div>
        </div>
        </div>
  );
};

export default Login;

/*import React from "react";
import "./Login.css";
import { FaGooglePlus, FaFacebook, FaTwitter, FaLinkedin, FaGithub  } from "react-icons/fa";

const Login = () =>{
    return(
        <div class="container" id="container">
            <div class="form-container sign-up">
                <form> 
                    <h1>Create Account</h1>
                    <div class="social-icons">
                        <a href="#" class="icon"><FaGooglePlus /></a>
                        <a href="#" class="icon"><FaFacebook /></a>
                        <a href="#" class="icon"><FaTwitter /></a>
                        <a href="#" class="icon"><FaLinkedin /></a>
                        <a href="#" class="icon"><FaGithub /></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button>Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in">
                <form> 
                    <h1>Sing In</h1>
                    <div class="social-icons">
                        <a href="#" class="icon"><FaGooglePlus /></a>
                        <a href="#" class="icon"><FaFacebook /></a>
                        <a href="#" class="icon"><FaTwitter /></a>
                        <a href="#" class="icon"><FaLinkedin /></a>
                        <a href="#" class="icon"><FaGithub /></a>
                    </div>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <a href="#">Forgot your password?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div class="toggle-container">
                <div class="toggle">
                    <div class="toggle-panel toggle-left">
                        <h1>Welcme Back</h1>
                        <p> Enter your personal details to use all of site features</p>
                        <button class="hidden" id="login">Sign In</button>
                    </div>
                    <div class="toggle-panel toggle-right">
                        <h1>Hello, Friend</h1>
                        <p> Register your personal details to use all of site features</p>
                        <button class="hidden" id="register">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
*/
