import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Stack, Link } from '@chakra-ui/react'

const Login = () => {
    const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
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

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 6) {
            toast.error('password length greater six', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");
                     alert("You have logged in successfully")
                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/home")
                }
            }
        }

    }

    return (
        <>
            <div className="container mt-3 mb-5" style={{fontFamily:"Roboto"}}>
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='col-lg-6'>Log in</h3>
                        <Form >

                            <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata}  />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-12" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} />
                            </Form.Group>

                            <Stack
                            direction={{ base: "column", sm: "row" }}
                            align={"start"}
                            justify={"space-between"}
                            >
                        <label>
                        <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleChange}
                        />
                        Remember me
                        </label>
                            
                            </Stack>

                            <Button  onClick={addData} style={{ background: "#5cb85c" }} type="submit">
                           <span> <NavLink to="/signin" style={{textDecoration:"none", color:"white"}}>Log in</NavLink></span>
                            </Button>
                        </Form>
                        <p className='mt-3'><span><NavLink to="/signup" style={{textDecoration:"none",fontFamily:"Roboto"}}>Sign up</NavLink></span> </p>
                        <Link color={"blue"} cursor={"pointer"} textDecoration={"none"}>Forgot your password?</Link>
                    </div>
                    
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login