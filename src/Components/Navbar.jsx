import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import 'jquery';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{height:"50px"}}>
  <div className="container-fluid" style={{width:"1195px"}}>
    <a className="navbar-brand" href="/home" style={{justifyContent:"flex-start", color:"#ffff36", fontFamily:"Roboto"}}>IDEAKART</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" style={{marginLeft:"100px"}} id="navbarSupportedContent">
    <form className="d-flex" role="search">
        <input className="form-control me-8" style={{width:"400px",marginLeft:"-70px",fontFamily:"Roboto"}} type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" style={{color:"black",backgroundColor:"White",fontFamily:"Roboto"}} type="submit">Search</button>
      </form>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:"275px"}}>
        <li className="nav-item">
          <a className="nav-link active" style={{color:"white",fontFamily:"Roboto"}} aria-current="page" href="about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style={{color:"white",fontFamily:"Roboto"}} aria-current="page" href="contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style={{color:"white",fontFamily:"Roboto"}} aria-current="page" href="signin">Sign In</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style={{color:"white",fontFamily:"Roboto"}} aria-current="page" href="signup">Sign Up</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar