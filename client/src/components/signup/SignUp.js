import React, { useState } from 'react'
import pic from '../../assets/blacklogoamazon.png'
import { NavLink } from 'react-router-dom'
import './SignUp.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';



const SignUp = () => {





  const [udata, setUdata] = useState({
    fname: '',
    email: '',
    mobile: '',
    password: '',
    cpassword: ''

  });





  console.log(udata);

  const adddata = (e) => {
    const { name, value } = e.target;

    setUdata(() => {
      return {
        ...udata,
        [name]: value
      }
    })
  };


  const sendData = async (e) => {
    e.preventDefault();
    const { fname, email, mobile, password, cpassword } = udata;

    const res = await fetch("register", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        fname, email, mobile, password, cpassword
      })

    });


    const data = await res.json();
    console.log(data);


    if (res.status === 400 || !data) {
      toast.warn("Invalid Details 😢", {
        position: "top-center"
      })
    }
    else {
      toast.success("Data Added Successfully 😄", {
        position: "top-center"
      })
      setUdata({
        ...udata,
        fname: '',
        email: '',
        mobile: '',
        password: '',
        cpassword: ''
      });
    }


  }


  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">

          <div style={{ textAlign: 'center', marginTop: 30 }}>
            <AddHomeWorkIcon /> <br /> <br /> <br /> <br /> <br />
          </div>
          {/* <img src={pic} alt="logoo" /> */}

        </div>

        <div className="sign_form">
          <form method="POST">
            <h1>Sign Up</h1>
            <div className="form_data">
              <label htmlFor="fname">Name</label>
              <input type="text" name="fname" id="fname" onChange={adddata} value={udata.fname} />
            </div>

            <div className="form_data">
              <label htmlFor="email">email</label>
              <input type="email" name="email" onChange={adddata} value={udata.email} />
            </div>

            <div className="form_data">
              <label htmlFor="number">Mobile number</label>
              <input type="text" name="mobile" id="" onChange={adddata} value={udata.mobile} />
            </div>

            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input type="password" name="password"
                placeholder="At least 6 characters" onChange={adddata} value={udata.password} />
            </div>

            <div className="form_data">
              <label htmlFor="cpassword">Password Again</label>
              <input type="password" name="cpassword" id="cpassword" onChange={adddata} value={udata.cpassword} />
            </div>

            <button className='signin_btn' onClick={sendData}>Continue</button>

            <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to="/login">Signin</NavLink>
            </div>

          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  )
}

export default SignUp;