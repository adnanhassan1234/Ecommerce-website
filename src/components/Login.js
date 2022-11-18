import React,{ useState}from 'react';
// import logo from '../../public/images/logo.jpg';
// import { toast } from 'react-toastify';
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        'email': '',
        'password': ''
    });

    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;

        setFormData((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        let response = await fetch(`${process.env.REACT_APP_BASEURL_LOGIN}web_login`, {
            method: 'POST',
            body: JSON.stringify({
                "email": formData.email,
                "password": formData.password,
            }),
            mode: 'cors',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        let res = await response.json();
        console.log("🚀 ~ file: Login.js ~ line 46 ~ handleSubmit ~ res", res.data);
  
        if (res.status === 419) {
            toast.error('The given data was invalid', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        if (res.status === false) {
            toast.error('The given data was invalid', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (res.status === 200) {
            toast.success(res.messages, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            localStorage.setItem("user", JSON.stringify(res.data));
            // localStorage.setItem("auth", "Bearer " + JSON.stringify(res.data.token).replaceAll('"', ''));
            navigate("/products");
        }
    };

    return (
        <>
            <div className="admin_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="full">
                                <div className="pmx-auto d-block">
                                    <Link to={"/"}>
                                        <img src="./images/logo.jpg" width="40%" className='mx-auto d-block my-3' alt=""/>
                                    </Link>
                                </div>
                                <form className='form' onSubmit={handleSubmit}>
                                    <div className="card">
                                        <div className="card-header text-center">
                                            <h5 className='float-left'>User Login</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    className='form-control'
                                                    type="email"
                                                    name="email"
                                                    id="emailId"
                                                    placeholder="Enter Your Email..."
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                    }} />
                                            </div>
                                            <div className="form-group my-2">
                                                <label for="Password">Password</label>
                                                <input
                                                   className='form-control'
                                                    type="password"
                                                    name="password"
                                                    id="Password"
                                                    required
                                                    placeholder="********"
                                                    value={formData.password}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </div>
                                            <div className="sub_btn my-3">
                                                <button type='submit' className='btn btn-primary'>Login</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export default Login;