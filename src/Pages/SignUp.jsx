import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        mobilenumber: "",
        email: "",
        password: "",
        passwordconfirmation: ""
    })

   

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, mobilenumber, email, password, passwordconfirmation } = inpval;

        if (name === "") {
            toast.error(' Please fill the name!',{
                position: "top-center",
            });
        } else if (mobilenumber === "") {
            toast.error('Please fill the mobile!',{
               position: "top-center",
           });
        }else if (email === "") {
             toast.error('Please fill the email!',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('Please enter valid email address',{
                position: "top-center",
            });
        }else if (password === "") {
             toast.error('Please fill the password!',{
                position: "top-center",
            });
        } else if (password.length < 6) {
             toast.error('password length greater six',{
                position: "top-center",
            });
        } else if (passwordconfirmation === "") {
            toast.error('Please fill the password confirmation!',{
               position: "top-center",
           });
       }else if (passwordconfirmation !== password) {
        toast.error('confirmation password is not same',{
           position: "top-center",
       });
   }else {
            console.log("data added succesfully");
            alert("You have sign up successfully")
            history("/signin")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

        }

    }

    return (
        <>
            <div className="container mt-3" style={{fontFamily:"Roboto"}}>
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='col-lg-6'>Sign Up</h3>
                        <Form >
                            <Form.Group className="col-lg-12" controlId="formBasicEmail">
                            <label>Name</label>
                                <Form.Control type="text" name='name' onChange={getdata}  />
                            </Form.Group>

                            <Form.Group className="col-lg-12" controlId="formBasicEmail">
                            <label>Mobile number</label>
                                <Form.Control type="text" name='mobilenumber' onChange={getdata}  />
                            </Form.Group>
                            
                            <Form.Group className="col-lg-12" controlId="formBasicEmail">
                               <label>Email</label>
                                <Form.Control type="email" name='email' onChange={getdata}  />
                            </Form.Group>

                            <Form.Group className="col-lg-12" controlId="formBasicPassword">
                            <label>Password (6 characters minimum)</label>
                                <Form.Control type="password" name='password' onChange={getdata}  />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-12" controlId="formBasicPassword">
                            <label>Password confirmation</label>
                                <Form.Control type="password" name='passwordconfirmation' onChange={getdata}  />
                            </Form.Group>


                            <Button variant="primary"  onClick={addData} style={{ background: "#5cb85c" }} type="submit">
                                Sign up
                            </Button>
                        </Form>
                        <p className='mt-3'><span><NavLink to="/signin" style={{textDecoration:"none"}}>Log in</NavLink></span> </p>
                    </div>
                   
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Home