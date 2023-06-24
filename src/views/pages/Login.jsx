import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';

function Login() {
 
    const navigate = useNavigate();

    const responseFacebook = (response) => {
        console.log(response);
        // Perform actions with the received response, e.g., authenticate the user
    };

    const responseGoogle = (response) => {
        console.log(response);
        // Perform actions with the received response, e.g., authenticate the user
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/dashboard');
    }

    return (
        <>
            <section id="Login">
                <div className="h-100 d-flex flex-column flex-wrap align-items-center align-conten-center justify-content-center

">
                    <div className="LoginForm w-25">
                        <form onSubmit={handleSubmit}>
                            <div className="login-form-header flex-column flex-wrap align-items-center align-conten-center">
                                <img src="/images/logo.webp" className="w-100   " alt="" />
                                <h1 className="text-center">Login</h1>
                            </div>
                            <div className="mb-3">
                                <label for="" className="form-label">Email</label>
                                <input type="email" className="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="abc@mail.com" />
                            </div>
                            <div className="mb-3">
                                <label for="" className="form-label">Password</label>
                                <input type="password" className="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="********" />
                            </div>
                            <div className="mb-3 text-center">
                                <a className="forget-password">Forgot password?</a>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary btn-lg w-100">Login</button>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                    <FacebookLogin
                                    appId="1088597931155576"
        
                                        autoLoad={false}
                                        textButton={``}
                                        className={`w-25 `}
                                        fields="name,email,picture"
                                        callback={responseFacebook}
                                        cssClass={`facbook-login`}
                                        size={`metro`}
                                        icon="fa-facebook"
                                    />
                                  <GoogleLogin
                                        clientId="1088597931155576" 
                                        buttonText="Google"
                                        className="google-login"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                       
                                    />
                            </div>
                           
                            
                        </form>
                        
                    </div>
                </div>
            </section>
            <style>
                {`
                section#Login {
                    height: 100vh;
                }

                .LoginForm img
                {
                    width: 150px;
                    height: auto;
                }
                .LoginForm h1
                {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 28px;
                    color: #212529;
                    }
                .LoginForm label 
                {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 18px;
                    color: #495057;
                }
                .LoginForm input
                {
                    box-sizing: border-box;
                    border: 1px solid #E9ECEF;
                    border-radius: 20px;
                }
                .LoginForm button 
                {
                    border-radius: 20px;
                }
                .LoginForm .forget-password
                {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 18px;
                    color: #ADB5BD;
                }
                button.facbook-login.metro {
                    height: 38px;
                    width: 40px;
                    margin-right: 30px;
                    color: #fff;
                    border: 0;
                    background: #17A9FD;
                }
                button.google-login {
                    border-radius: 110px !important;
                }
                button.facbook-login.metro i {
                    font-size: 18px;
                }
                
          `}
            </style>
        </>
    );
}
export default Login;