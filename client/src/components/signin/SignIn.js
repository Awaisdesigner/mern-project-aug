import React, { useState } from 'react'
import pic from '../../assets/blacklogoamazon.png'
import TextField from '@mui/material/TextField';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import './SignIn.css'


const SignIn = () => {

    const [data, setData] = useState({
        email: "",
        password: ""

    })
    console.log(data);

    const adddata = (e) => {
        const { name, value } = e.target;

        setData(() => {
            return {
                ...data,
                [name]: value
            }
        })
    };



    const senddata = async (e) => {
        e.preventDefault();

        const { email, password } = data;

        const res = await fetch("/login", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email, password
            })

        });

        const datais = await res.json();

        console.log(datais);
        console.log(password);

        if (res.status === 400 || !data) {
            // console.log("invalid details");
            alert("invalid")
            // toast.warn("Invalid Details 😢", {
            //     position: "top-center"
            // })
        }
        else {
            alert("successfully login")
            console.log("Valid data");
            setData({ ...data, email: "", password: "" });
        }
    };



    return (
        <section>
            <div className="sign_container coi">
                <div className="sign_header" style={{marginTop:30}}>
                    <AddHomeWorkIcon /> <br /> <br /> <br /> <br />
                    {/* <img src={pic} alt="logoo" /> */}
                    

                </div>

                <div className="sign_form">
                    <form>
                        <h1>Sign In</h1>
                        <div className="form_data">
                            {/* <label htmlFor="">Email</label> */}
                            {/* <input type="text" /> */}
                            <EmailOutlinedIcon style={{ marginTop: '20' }} />
                            <TextField id="standard-basic" name="email" onChange={adddata} value={data.email} label="Email" variant="standard" />
                        </div>
                        <div className="form_data">
                            {/* <label htmlFor="">Password</label> */}
                            {/* <input type="password" /> */}
                            {/* <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />   */}
                            <VpnKeyOutlinedIcon style={{ marginTop: '20', marginRight: '3' }} />
                            <TextField id="outlined-pasword-input" label="Password" name="password" onChange={adddata} value={data.password} variant="standard" type="password" />
                        </div>
                        <button className='signin_btn' onClick={senddata}>Continue</button>
                    </form>
                </div>

                <div className="create_accountinfo">
                    <NavLink to="/register">
                        <button>Create Your Amazon Account</button>
                    </NavLink>
                </div>

            </div>
        </section>
    )
}

export default SignIn;